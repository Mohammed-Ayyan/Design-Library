import { StyleDefinition } from './types/style-definition';
import { StyleScopeLevel, ScopeContext } from './types/scope';
import { StyleRegistry } from './registry/style-registry';
import { StyleResolver, ResolvedStyle } from './resolver/style-resolver';
export declare class StyleEngine {
    private registry;
    private resolver;
    constructor(initialStyles?: StyleDefinition[]);
    /**
     * Access the underlying StyleRegistry.
     */
    getRegistry(): StyleRegistry;
    /**
     * Access the StyleResolver.
     */
    getResolver(): StyleResolver;
    /**
     * Registers a style definition into the engine.
     */
    registerStyle(style: StyleDefinition): void;
    /**
     * Retrieves a registered style definition by ID.
     */
    getStyle(id: string): StyleDefinition | undefined;
    /**
     * Returns all available style definitions.
     */
    getAvailableStyles(): StyleDefinition[];
    /**
     * Creates a ScopeContext helper object.
     */
    createScope(level: StyleScopeLevel, styleId?: string, parentScope?: ScopeContext): ScopeContext;
    /**
     * Resolves styles, tokens, and CSS variables for a given ScopeContext.
     */
    resolveScope(scope: ScopeContext): ResolvedStyle;
    /**
     * Resolves styles for a specific style ID at a specified scope level (defaults to 'page').
     * Supports single style IDs or compound expressions (e.g. "wabi-sabi + glassmorphism", "/name = brutalism + minimalism").
     */
    resolveStyleById(id: string, level?: StyleScopeLevel): ResolvedStyle;
    /**
     * Resolves styles for a specific style ID (convenience alias for resolveStyleById).
     */
    resolveStyle(id: string, level?: StyleScopeLevel): ResolvedStyle;
    /**
     * Resolves a hybrid composition of two or more design styles.
     * e.g. engine.resolveHybrid(['wabi-sabi', 'glassmorphism'])
     */
    resolveHybrid(styleIds: string[], level?: StyleScopeLevel): ResolvedStyle;
    /**
     * Creates and registers a new composite hybrid style definition in the engine registry.
     */
    createHybrid(styleIds: string[], customName?: string): StyleDefinition;
    /**
     * Parses a user style expression into constituent IDs and canonical compound ID.
     * Handles "/name = wabi-sabi + glassmorphism", "brutalism + minimalism", etc.
     */
    parseStyleQuery(query: string): {
        constituentIds: string[];
        compoundId: string;
        formattedQuery: string;
    };
    /**
     * Helper to format CSS variables for React style attribute.
     */
    toStyleObject(cssVariables: Record<string, string>): React.CSSProperties;
}
