/**
 * Generates universal adaptive CSS rules allowing raw, unstyled HTML to receive
 * full art-directed design languages without custom utility classes.
 * Each design language enforces its own visual grammar, typographic scale,
 * surface hierarchy, material depth, and component roles while preserving
 * the source HTML layout intent without DOM re-parenting or forced sidebars.
 */
export declare class AdaptiveCSSGenerator {
    static getAdaptiveStyles(): string;
}
/**
 * Injects the universal adaptive style rules into the document <head>.
 */
export declare function injectAdaptiveStyles(targetDoc?: Document): HTMLStyleElement | null;
/**
 * Auto-enhances raw HTML elements by recursively analyzing structural context,
 * inferring component roles and composition strategies deterministically,
 * and applying data-role, data-composition, data-variant, and data-density attributes.
 */
export declare function enhanceHTML(root?: HTMLElement): void;
