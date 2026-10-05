import React, { useMemo, createContext, useContext } from 'react';
import { useStyleEngine } from '../context/StyleEngineContext';
import { InferredRole, ResolvedRoleContext, AdaptiveRecipeResult } from '../../core/adaptive/types';
import { StructureAnalyzer } from '../../core/adaptive/structure-analyzer';
import { RoleResolver } from '../../core/adaptive/role-resolver';
import { CompositionStrategyResolver } from '../../core/adaptive/composition-strategy';
import { RecipeEngine } from '../../core/adaptive/recipe-engine';

export interface AdaptiveContextValue {
  styleId: string;
  roleContext: ResolvedRoleContext;
  recipe: AdaptiveRecipeResult;
}

export const AdaptiveContext = createContext<AdaptiveContextValue | null>(null);

export function useAdaptiveContext(): AdaptiveContextValue | null {
  return useContext(AdaptiveContext);
}

export interface AdaptiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  styleId?: string;
  roleHint?: InferredRole;
  siblingIndex?: number;
  totalSiblings?: number;
  depth?: number;
  children: React.ReactNode;
}

export const AdaptiveContainer: React.FC<AdaptiveContainerProps> = ({
  styleId,
  roleHint,
  siblingIndex = 0,
  totalSiblings = 1,
  depth = 1,
  className = '',
  style = {},
  children,
  ...rest
}) => {
  const { engine, activeStyleId } = useStyleEngine();
  const effectiveStyleId = styleId || activeStyleId || 'base';

  // Analyze children to detect structural traits
  const structuralSignals = useMemo(() => {
    const childrenTags: string[] = [];
    let textContent = '';
    let hasPriceIndicator = false;

    // React children inspection
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        const type = child.type;
        const tag = typeof type === 'string' ? type.toLowerCase() : '';
        if (tag) childrenTags.push(tag);

        const childText = typeof child.props?.children === 'string' ? child.props.children : '';
        textContent += childText;
        if (/[$€£¥]|\/mo\b|pricing/i.test(childText)) {
          hasPriceIndicator = true;
        }
      }
    });

    return StructureAnalyzer.analyze({
      tag: 'div',
      childrenTags,
      text: textContent,
      childCount: React.Children.count(children),
      hasPriceText: hasPriceIndicator,
      siblingIndex,
      totalSiblings,
      depth,
    });
  }, [children, siblingIndex, totalSiblings, depth]);

  // Resolve role
  const roleContext = useMemo<ResolvedRoleContext>(() => {
    if (roleHint) {
      const { composition, density } = CompositionStrategyResolver.resolve(effectiveStyleId, roleHint);
      return {
        role: roleHint,
        confidence: 1.0,
        rationale: `Explicit role hint "${roleHint}" provided.`,
        variantIndex: siblingIndex % 3,
        modifiers: [`variant-${siblingIndex % 3}`, 'explicit-hint'],
        semanticTag: 'div',
        composition,
        density,
      };
    }
    return RoleResolver.resolveRole(structuralSignals, effectiveStyleId);
  }, [roleHint, structuralSignals, siblingIndex, effectiveStyleId]);

  // Resolve adaptive recipe
  const recipe = useMemo<AdaptiveRecipeResult>(() => {
    return RecipeEngine.resolveRecipe(effectiveStyleId, roleContext, engine);
  }, [effectiveStyleId, roleContext, engine]);

  const contextValue = useMemo<AdaptiveContextValue>(() => {
    return {
      styleId: effectiveStyleId,
      roleContext,
      recipe,
    };
  }, [effectiveStyleId, roleContext, recipe]);

  const combinedStyles: React.CSSProperties = {
    ...recipe.containerStyles,
    ...style,
  };

  return (
    <AdaptiveContext.Provider value={contextValue}>
      <div
        {...rest}
        className={`ds-adaptive-container style-${effectiveStyleId} ${className}`}
        data-role={roleContext.role}
        data-variant={roleContext.variantIndex}
        data-recipe={recipe.recipeName}
        data-style={effectiveStyleId}
        style={combinedStyles}
      >
        {children}
      </div>
    </AdaptiveContext.Provider>
  );
};
