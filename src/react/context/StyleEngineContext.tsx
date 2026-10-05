import React, { createContext, useContext, useMemo, useState } from 'react';
import { StyleEngine } from '../../core/engine';
import { ScopeContext, StyleScopeLevel } from '../../core/types/scope';
import { ResolvedStyle } from '../../core/resolver/style-resolver';
import { TokenOverrides } from '../../core/types/tokens';
import { ComponentStyleOverrides } from '../../core/types/components';

export interface StyleEngineContextValue {
  engine: StyleEngine;
  currentScope: ScopeContext;
  resolvedStyle: ResolvedStyle;
  activeStyleId: string;
  setActiveStyleId: (styleId: string) => void;
  resetToBaseStyle: () => void;
  createChildScope: (options: {
    level: StyleScopeLevel;
    styleId?: string;
    tokenOverrides?: TokenOverrides;
    componentOverrides?: ComponentStyleOverrides;
  }) => ScopeContext;
}

export const StyleEngineContext = createContext<StyleEngineContextValue | null>(null);

export interface StyleEngineProviderProps {
  engine?: StyleEngine;
  initialStyle?: string;
  initialStyleId?: string;
  children: React.ReactNode;
}

export const StyleEngineProvider: React.FC<StyleEngineProviderProps> = ({
  engine: externalEngine,
  initialStyle,
  initialStyleId,
  children,
}) => {
  const engine = useMemo(() => externalEngine || new StyleEngine(), [externalEngine]);
  const [activeStyleId, setActiveStyleId] = useState<string>(initialStyle || initialStyleId || 'base');

  const rootScope: ScopeContext = useMemo(() => {
    return {
      level: 'global',
      styleId: activeStyleId,
    };
  }, [activeStyleId]);

  const resolvedStyle = useMemo(() => {
    return engine.resolveScope(rootScope);
  }, [engine, rootScope]);

  const resetToBaseStyle = () => {
    setActiveStyleId('base');
  };

  const createChildScope = (options: {
    level: StyleScopeLevel;
    styleId?: string;
    tokenOverrides?: TokenOverrides;
    componentOverrides?: ComponentStyleOverrides;
  }): ScopeContext => {
    return {
      level: options.level,
      styleId: options.styleId || activeStyleId,
      parentScope: rootScope,
      tokenOverrides: options.tokenOverrides,
      componentOverrides: options.componentOverrides,
    };
  };

  const value = useMemo<StyleEngineContextValue>(() => {
    return {
      engine,
      currentScope: rootScope,
      resolvedStyle,
      activeStyleId,
      setActiveStyleId,
      resetToBaseStyle,
      createChildScope,
    };
  }, [engine, rootScope, resolvedStyle, activeStyleId]);

  return (
    <StyleEngineContext.Provider value={value}>
      {children}
    </StyleEngineContext.Provider>
  );
};

export function useStyleEngine(): StyleEngineContextValue {
  const ctx = useContext(StyleEngineContext);
  if (!ctx) {
    throw new Error('useStyleEngine must be used within a StyleEngineProvider');
  }
  return ctx;
}

export function useResolvedStyle(): ResolvedStyle {
  const { resolvedStyle } = useStyleEngine();
  return resolvedStyle;
}
