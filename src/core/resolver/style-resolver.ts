import { DesignTokens } from '../types/tokens';
import { ComponentStyles } from '../types/components';
import { ScopeContext, ScopeChainItem, ResolvedScope } from '../types/scope';
import { StyleRegistry } from '../registry/style-registry';

export interface ResolvedStyle {
  styleId: string;
  styleName: string;
  isBase: boolean;
  fallbackUsed: boolean;
  scope: ResolvedScope;
  tokens: DesignTokens;
  components: ComponentStyles;
  cssVariables: Record<string, string>;
}

export class StyleResolver {
  private registry: StyleRegistry;

  constructor(registry: StyleRegistry) {
    this.registry = registry;
  }

  /**
   * Deep merge helper for objects
   */
  private static deepMerge<T extends Record<string, any>>(target: T, source?: Record<string, any>): T {
    if (!source) return { ...target };
    const output = { ...target };

    for (const key of Object.keys(source)) {
      const sourceVal = source[key];
      const targetVal = (target as any)[key];

      if (
        sourceVal !== undefined &&
        sourceVal !== null &&
        typeof sourceVal === 'object' &&
        !Array.isArray(sourceVal) &&
        typeof targetVal === 'object' &&
        !Array.isArray(targetVal)
      ) {
        (output as any)[key] = StyleResolver.deepMerge(targetVal, sourceVal);
      } else if (sourceVal !== undefined) {
        (output as any)[key] = sourceVal;
      }
    }
    return output;
  }

  /**
   * Builds the ancestor scope chain from the current scope context.
   */
  public buildScopeChain(scope: ScopeContext): ScopeChainItem[] {
    const chain: ScopeChainItem[] = [];
    let current: ScopeContext | undefined = scope;

    while (current) {
      chain.unshift({
        level: current.level,
        styleId: current.styleId,
      });
      current = current.parentScope;
    }

    return chain;
  }

  /**
   * Resolves a ScopeContext into a fully computed ResolvedStyle with tokens,
   * component rules, and CSS variables.
   */
  public resolve(scope: ScopeContext): ResolvedStyle {
    // 1. Determine effective style ID: current scope styleId or inherited from parent
    const effectiveStyleId = scope.styleId || (scope.parentScope ? scope.parentScope.styleId : 'base');
    const lookup = this.registry.getWithFallback(effectiveStyleId);
    const styleDef = lookup.style;

    // 2. Clone baseline tokens and component definitions from the active style definition
    let resolvedTokens = JSON.parse(JSON.stringify(styleDef.tokens)) as DesignTokens;
    let resolvedComponents = JSON.parse(JSON.stringify(styleDef.components)) as ComponentStyles;

    // 3. Collect inherited overrides from ancestor chain (outermost to innermost)
    const ancestorScopes: ScopeContext[] = [];
    let curr: ScopeContext | undefined = scope.parentScope;
    while (curr) {
      ancestorScopes.unshift(curr);
      curr = curr.parentScope;
    }

    // Apply ancestor token and component overrides
    for (const ancestor of ancestorScopes) {
      if (ancestor.tokenOverrides) {
        resolvedTokens = StyleResolver.deepMerge(resolvedTokens, ancestor.tokenOverrides);
      }
      if (ancestor.componentOverrides) {
        resolvedComponents = StyleResolver.deepMerge(resolvedComponents, ancestor.componentOverrides);
      }
    }

    // Apply current scope overrides
    if (scope.tokenOverrides) {
      resolvedTokens = StyleResolver.deepMerge(resolvedTokens, scope.tokenOverrides);
    }
    if (scope.componentOverrides) {
      resolvedComponents = StyleResolver.deepMerge(resolvedComponents, scope.componentOverrides);
    }

    // 4. Generate CSS variables dictionary
    const cssVariables = this.generateCssVariables(resolvedTokens);

    // 5. Build scope chain summary
    const scopeChain = this.buildScopeChain(scope);

    return {
      styleId: styleDef.id,
      styleName: styleDef.name,
      isBase: Boolean(styleDef.metadata.isBase),
      fallbackUsed: lookup.fallbackUsed,
      scope: {
        level: scope.level,
        effectiveStyleId: styleDef.id,
        scopeChain,
      },
      tokens: resolvedTokens,
      components: resolvedComponents,
      cssVariables,
    };
  }

  /**
   * Converts strongly-typed DesignTokens into CSS custom properties (--ds-*)
   */
  public generateCssVariables(tokens: DesignTokens): Record<string, string> {
    const vars: Record<string, string> = {};

    // Colors
    for (const [key, val] of Object.entries(tokens.colors)) {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      vars[`--ds-color-${kebab}`] = val;
    }

    // Typography
    for (const [key, val] of Object.entries(tokens.typography)) {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      vars[`--ds-font-${kebab}`] = String(val);
    }

    // Spacing
    for (const [key, val] of Object.entries(tokens.spacing)) {
      vars[`--ds-space-${key}`] = val;
    }

    // Radii
    for (const [key, val] of Object.entries(tokens.radii)) {
      vars[`--ds-radius-${key}`] = val;
    }

    // Borders
    for (const [key, val] of Object.entries(tokens.borders)) {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      vars[`--ds-border-${kebab}`] = val;
    }

    // Shadows
    for (const [key, val] of Object.entries(tokens.shadows)) {
      vars[`--ds-shadow-${key}`] = val;
    }

    // Motion
    for (const [key, val] of Object.entries(tokens.motion)) {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      vars[`--ds-motion-${kebab}`] = val;
    }

    // Effects
    for (const [key, val] of Object.entries(tokens.effects)) {
      if (val) {
        const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        vars[`--ds-effect-${kebab}`] = val;
      }
    }

    return vars;
  }
}
