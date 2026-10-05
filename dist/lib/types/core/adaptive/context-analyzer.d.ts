import { ContentContext, InferredRole } from './types';
export interface RawDocumentStats {
    text: string;
    totalElements: number;
    tagCounts: Record<string, number>;
    sectionCount: number;
    headingCount: number;
    headingLevels: number[];
    paragraphCount: number;
    paragraphLengths: number[];
    buttonCount: number;
    inputCount: number;
    linkCount: number;
    imageCount: number;
    blockquoteCount: number;
    tableCount: number;
    listCount: number;
    maxNestingDepth: number;
    repeatedChildContainers: number;
}
/**
 * ContentContextAnalyzer performs deterministic semantic analysis on a document
 * to infer its primary content context and structural characteristics without LLMs.
 *
 * It separates the concept of Semantic Role (local functional purpose)
 * from Content Context (the overarching archetype of the content).
 */
export declare class ContentContextAnalyzer {
    /**
     * Analyzes an HTML string or text structure to produce a ContentContext.
     */
    static analyze(rawHtml: string, detectedRoles?: InferredRole[]): ContentContext;
    /**
     * Analyzes a browser DOM container element.
     */
    static analyzeDOM(container: HTMLElement, detectedRoles?: InferredRole[]): ContentContext;
    /**
     * Extracts raw document statistics from HTML string using fast deterministic scanning.
     */
    private static extractDocumentStats;
    /**
     * Extracts stats from live DOM container.
     */
    private static extractDOMStats;
    /**
     * Computes normalized document signals.
     */
    private static computeDocumentSignals;
    /**
     * Deterministically infers primary ContentContext and confidence.
     */
    private static inferContext;
}
