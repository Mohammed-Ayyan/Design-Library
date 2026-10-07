import React from 'react';
import { TokenOverrides } from '../../core/types/tokens';
export interface MainProps extends React.HTMLAttributes<HTMLElement> {
    styleId?: string;
    tokenOverrides?: TokenOverrides;
    children: React.ReactNode;
}
export declare const Main: React.FC<MainProps>;
