import { StructuralSignals, InferredRole, ContentDensity } from './types';
export interface RawElementInspection {
    tag?: string;
    className?: string;
    text?: string;
    childrenTags?: string[];
    /** All tags found anywhere in the subtree (recursive), used for detecting nested headings etc. */
    descendantTags?: string[];
    childCount?: number;
    parentTag?: string;
    parentRole?: InferredRole;
    ancestorRoles?: InferredRole[];
    siblingIndex?: number;
    totalSiblings?: number;
    depth?: number;
    hasPriceText?: boolean;
    hasContainerChildren?: boolean;
    isFirstChild?: boolean;
    isLastChild?: boolean;
    density?: ContentDensity;
}
export declare class StructureAnalyzer {
    private static PRICE_PATTERNS;
    /**
     * Analyzes an element structure and extracts objective signals.
     */
    static analyze(input: RawElementInspection): StructuralSignals;
    /**
     * Analyzes an actual DOM HTMLElement if running in browser environment.
     */
    static analyzeDOMElement(el: HTMLElement, parentRole?: InferredRole): StructuralSignals;
}
