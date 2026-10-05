import React from 'react';
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
export declare const StyleEngineContext: React.Context<StyleEngineContextValue | null>;
export interface StyleEngineProviderProps {
    engine?: StyleEngine;
    initialStyle?: string;
    initialStyleId?: string;
    children: React.ReactNode;
}
export declare const StyleEngineProvider: React.FC<StyleEngineProviderProps>;
export declare function useStyleEngine(): StyleEngineContextValue;
export declare function useResolvedStyle(): ResolvedStyle;
