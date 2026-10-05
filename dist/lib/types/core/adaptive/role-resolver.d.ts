import { StructuralSignals, ResolvedRoleContext, ContentContextType, ContentContext } from './types';
export declare class RoleResolver {
    /**
     * Infers the semantic component role, composition strategy, and layout decision
     * from objective structural signals, hierarchy, and content context.
     */
    static resolveRole(signals: StructuralSignals, styleId?: string, context?: ContentContextType | ContentContext): ResolvedRoleContext;
}
