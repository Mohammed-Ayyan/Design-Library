import { ResolvedRoleContext, AdaptiveRecipeResult } from './types';
import { StyleEngine } from '../engine';
export declare class RecipeEngine {
    /**
     * Resolves the adaptive recipe for a specific role and design language.
     */
    static resolveRecipe(styleId: string, roleCtx: ResolvedRoleContext, engine: StyleEngine): AdaptiveRecipeResult;
    private static resolveBrutalism;
    private static resolveGlassmorphism;
    private static resolveMinimalism;
    private static resolveSwissDesign;
    private static resolveCyberpunk;
    private static resolveWabiSabi;
    private static resolveBase;
}
