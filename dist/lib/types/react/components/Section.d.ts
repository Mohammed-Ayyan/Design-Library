import React from 'react';
import { TokenOverrides } from '../../core/types/tokens';
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    styleId?: string;
    tokenOverrides?: TokenOverrides;
    children: React.ReactNode;
}
export declare const Section: React.FC<SectionProps>;
