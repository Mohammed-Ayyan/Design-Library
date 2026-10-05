import { InferredRole, CompositionStrategyType, StructuralSignals, ContentDensity, CompositionDecision, CompositionFingerprint, ContentContextType, ContentContext, SectionCompositionPlan } from './types';
export declare class CompositionStrategyResolver {
    /**
     * Resolves the design language composition strategy and concrete layout decision
     * for a given semantic role, style, structural signals, and content context.
     */
    static resolve(styleId: string, role: InferredRole, signals?: Partial<StructuralSignals>, context?: ContentContextType | ContentContext): {
        composition: CompositionStrategyType;
        density: ContentDensity;
        decision: CompositionDecision;
    };
    /**
     * Computes the concrete layout decision based on the style's design language grammar
     * and the detected content context.
     */
    static resolveDecision(styleId: string, role: InferredRole, signals?: Partial<StructuralSignals>, defaultDensity?: ContentDensity, context?: ContentContextType | ContentContext): CompositionDecision;
    /**
     * Extracts an evolved composition fingerprint capturing 14 structural dimensions.
     */
    static extractFingerprint(styleId: string, decision: CompositionDecision, contentContext?: ContentContextType | ContentContext, sectionPlans?: SectionCompositionPlan[]): CompositionFingerprint;
    private static resolvePortfolioContextDecision;
    private static resolvePricingContextDecision;
    private static resolveArticleContextDecision;
    private static resolveDashboardContextDecision;
    private static resolveFormContextDecision;
    private static resolveLandingContextDecision;
    private static resolveHeroDecision;
    private static resolveNavDecision;
    private static resolveMinimalismLandingDecision;
    private static resolveBrutalismLandingDecision;
    private static resolveCyberpunkLandingDecision;
    private static resolveGlassmorphismLandingDecision;
    private static resolveSwissLandingDecision;
    private static resolveWabiSabiLandingDecision;
    private static resolveBaseDecision;
    private static resolveCompositionStrategy;
    private static resolveHeroComposition;
    private static resolveFeaturesComposition;
    private static resolvePricingComposition;
    private static resolveNavComposition;
    private static resolveArticleComposition;
    private static resolveFormComposition;
    private static calculateDensity;
}
