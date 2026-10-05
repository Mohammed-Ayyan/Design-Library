import { InferredRole, CompositionPlan, SectionCompositionPlan, StructuralSignals, ContentContext, ContentContextType } from './types';
/**
 * CompositionPlanner synthesizes a holistic, art-directed CompositionPlan
 * from the semantic roles, structural signals, and ContentContext.
 *
 * It bridges Style Design Grammar with Content Context so that:
 * 1. The same style adapts its composition intelligently across different content archetypes.
 * 2. Different styles express the same content archetype with distinct spatial organizations.
 */
export declare class CompositionPlanner {
    static plan(styleId: string, rootRole: InferredRole, signals?: Partial<StructuralSignals>, childSections?: {
        role: InferredRole;
        signals: Partial<StructuralSignals>;
    }[], contentContext?: ContentContext): CompositionPlan;
    /**
     * Plans an individual section based on the design language's grammar and content context.
     */
    static planSection(styleId: string, role: InferredRole, signals?: Partial<StructuralSignals>, context?: ContentContextType): SectionCompositionPlan;
}
