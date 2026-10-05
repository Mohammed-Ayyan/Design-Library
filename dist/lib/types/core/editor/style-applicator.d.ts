import { StyleEngine } from '../engine';
export interface ComputedElementStyle {
    cssProperties: React.CSSProperties;
    cssVariables: Record<string, string>;
    className: string;
    dataStyle: string;
}
/**
 * Maps an element tag and role to concrete StyleEngine component rules.
 * Uses the single production source of truth: StyleEngine and ResolvedStyle.
 */
export declare function computeElementDesignStyle(tagName: string, styleId: string, engine: StyleEngine, role?: string): ComputedElementStyle;
/**
 * Generates copy-ready CSS snippet for an element with specific design language.
 */
export declare function generateCssSnippetForElement(selector: string, styleId: string, engine: StyleEngine, tagName: string, overrides?: Record<string, string>): string;
