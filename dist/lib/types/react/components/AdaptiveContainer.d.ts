import React from 'react';
import { InferredRole, ResolvedRoleContext, AdaptiveRecipeResult } from '../../core/adaptive/types';
export interface AdaptiveContextValue {
    styleId: string;
    roleContext: ResolvedRoleContext;
    recipe: AdaptiveRecipeResult;
}
export declare const AdaptiveContext: React.Context<AdaptiveContextValue | null>;
export declare function useAdaptiveContext(): AdaptiveContextValue | null;
export interface AdaptiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    styleId?: string;
    roleHint?: InferredRole;
    siblingIndex?: number;
    totalSiblings?: number;
    depth?: number;
    children: React.ReactNode;
}
export declare const AdaptiveContainer: React.FC<AdaptiveContainerProps>;
