import { DesignTokens } from '../types/tokens';
import { ComponentStyles } from '../types/components';
import { ScopeContext, ScopeChainItem, ResolvedScope } from '../types/scope';
import { StyleRegistry } from '../registry/style-registry';
export interface ResolvedStyle {
    styleId: string;
    styleName: string;
    isBase: boolean;
    fallbackUsed: boolean;
    scope: ResolvedScope;
    tokens: DesignTokens;
    components: ComponentStyles;
    cssVariables: Record<string, string>;
    isHybrid?: boolean;
    constituentStyles?: string[];
    hybridClassNames?: string;
}
export declare class StyleResolver {
    private registry;
    constructor(registry: StyleRegistry);
    /**
     * Normalizes a style ID string, converting spaces to hyphens and removing invalid characters
     */
    static normalizeStyleId(id: string): string;
    /**
     * Parses a style expression, supporting single styles or hybrid compositions.
     * Examples:
     *  - "wabi-sabi" -> ["wabi-sabi"]
     *  - "wabi-sabi + glassmorphism" -> ["wabi-sabi", "glassmorphism"]
     *  - "/name = wabi-sabi + glassmorphism" -> ["wabi-sabi", "glassmorphism"]
     *  - "name = brutalism + minimalism" -> ["brutalism", "minimalism"]
     */
    static parseStyleExpression(expression: string): string[];
    /**
     * Deep merge helper for objects
     */
    private static deepMerge;
    /**
     * Builds the ancestor scope chain from the current scope context.
     */
    buildScopeChain(scope: ScopeContext): ScopeChainItem[];
    /**
     * Resolves a ScopeContext into a fully computed ResolvedStyle with tokens,
     * component rules, and CSS variables. Supports single styles and hybrid compositions.
     */
    resolve(scope: ScopeContext): ResolvedStyle;
    /**
     * Converts strongly-typed DesignTokens into CSS custom properties (--ds-*)
     */
    generateCssVariables(tokens: DesignTokens): Record<string, string>;
}
