import React from 'react';
import { StyleScopeLevel } from '../../core/types/scope';
import { TokenOverrides } from '../../core/types/tokens';
import { ComponentStyleOverrides } from '../../core/types/components';
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
export declare const StyleScope: React.FC<StyleScopeProps>;
