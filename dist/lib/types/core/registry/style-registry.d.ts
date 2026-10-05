import { StyleDefinition } from '../types/style-definition';
export interface StyleLookupResult {
    style: StyleDefinition;
    fallbackUsed: boolean;
    requestedId: string;
}
export declare class StyleRegistry {
    private styles;
    private baseStyleId;
    constructor(initialStyles?: StyleDefinition[]);
    /**
     * Registers a style definition.
     */
    register(style: StyleDefinition): void;
    /**
     * Unregisters a style definition. Cannot unregister the active base style.
     */
    unregister(id: string): boolean;
    /**
     * Checks if a style ID exists in the registry.
     */
    has(id: string): boolean;
    /**
     * Retrieves a style by ID, or undefined if not found.
     */
    get(id: string): StyleDefinition | undefined;
    /**
     * Retrieves a style by ID. If not found, returns the base style safely with a fallback flag.
     */
    getWithFallback(id: string): StyleLookupResult;
    /**
     * Returns the base fallback style definition.
     */
    getBaseStyle(): StyleDefinition;
    /**
     * Sets the ID to use for base fallback.
     */
    setBaseStyleId(id: string): void;
    /**
     * Lists all registered style definitions.
     */
    list(): StyleDefinition[];
    /**
     * Clears all non-base styles.
     */
    clear(): void;
}
