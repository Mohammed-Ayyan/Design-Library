import { CompositionPlan } from './types';
export interface MiniASTNode {
    tag: string;
    attrs: Record<string, string>;
    children: (MiniASTNode | string)[];
    text: string;
    parent?: MiniASTNode;
}
/**
 * LayoutTransformer performs deterministic presentation-level layout transformations
 * on the semantic DOM AST according to the holistic CompositionPlan.
 *
 * It enforces:
 * 1. Semantic Integrity: Keeps user markup intact without destroying original elements.
 * 2. Structural Grouping: When a section contains a heading and multiple items directly,
 *    it introduces a generic layout group container (<div data-layout-group="items">)
 *    so split-column and multi-column grid layouts never place items into the heading column.
 * 3. Content Safety: Protects text content, buttons, links, images, and prevents horizontal overflow.
 */
export declare class LayoutTransformer {
    /**
     * Transforms an AST tree according to the CompositionPlan.
     */
    static transformAST(rootNodes: MiniASTNode[], plan: CompositionPlan): {
        transformedNodes: MiniASTNode[];
        safetyPassed: boolean;
    };
    /**
     * Transforms a browser HTMLElement tree according to the CompositionPlan.
     */
    static transformDOM(container: HTMLElement, plan: CompositionPlan): {
        safetyPassed: boolean;
    };
    private static transformNodeRecursively;
    private static groupDOMSectionItems;
    private static computeASTTextLength;
    private static computeASTElementCount;
}
