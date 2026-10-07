import React, { useMemo } from 'react';
import { useStyleEngine, StyleEngineContext, StyleEngineContextValue } from '../context/StyleEngineContext';
import { StyleScopeLevel, ScopeContext } from '../../core/types/scope';
import { TokenOverrides } from '../../core/types/tokens';
import { ComponentStyleOverrides } from '../../core/types/components';
import { CSSAdapter } from '../../core/adapters/css-adapter';

export interface StyleScopeProps {
  level?: StyleScopeLevel;
  styleId?: string;
  tokenOverrides?: TokenOverrides;
  componentOverrides?: ComponentStyleOverrides;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export const StyleScope: React.FC<StyleScopeProps> = ({
  level = 'section',
  styleId,
  tokenOverrides,
  componentOverrides,
  className = '',
  style = {},
  as: Component = 'div',
  children,
}) => {
  const parent = useStyleEngine();

  const childScope: ScopeContext = useMemo(() => {
    return {
      level,
      styleId: styleId || parent.currentScope.styleId,
      parentScope: parent.currentScope,
      tokenOverrides,
      componentOverrides,
    };
  }, [level, styleId, parent.currentScope, tokenOverrides, componentOverrides]);

  const childResolved = useMemo(() => {
    return parent.engine.resolveScope(childScope);
  }, [parent.engine, childScope]);

  const childContextValue = useMemo<StyleEngineContextValue>(() => {
    return {
      engine: parent.engine,
      currentScope: childScope,
      resolvedStyle: childResolved,
      activeStyleId: childScope.styleId,
      setActiveStyleId: parent.setActiveStyleId,
      resetToBaseStyle: parent.resetToBaseStyle,
      createChildScope: (options) => ({
        level: options.level,
        styleId: options.styleId || childScope.styleId,
        parentScope: childScope,
        tokenOverrides: options.tokenOverrides,
        componentOverrides: options.componentOverrides,
      }),
    };
  }, [parent.engine, parent.setActiveStyleId, parent.resetToBaseStyle, childScope, childResolved]);

  const dynamicStyles = useMemo(() => {
    const cssVarsObj = CSSAdapter.toStyleObject(childResolved.cssVariables);
    return {
      ...cssVarsObj,
      ...style,
    };
  }, [childResolved.cssVariables, style]);

    const scopeClass = childResolved.isHybrid
      ? childResolved.hybridClassNames
      : `style-${childResolved.styleId}`;

    return (
      <StyleEngineContext.Provider value={childContextValue}>
        <Component
          className={`ds-scope ds-scope-${level} ${scopeClass} ${className}`.trim()}
          style={dynamicStyles}
          data-style-id={childResolved.styleId}
          data-scope-level={level}
          data-hybrid={childResolved.isHybrid ? 'true' : undefined}
          data-styles={childResolved.constituentStyles?.join(',')}
        >
          {children}
        </Component>
      </StyleEngineContext.Provider>
    );
  };
