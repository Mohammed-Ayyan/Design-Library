import { StyleEngine } from '../engine';
import { InferredRole, CompositionStrategyType, ContentDensity, CompositionDecision, CompositionFingerprint, CompositionPlan, ContentContext } from './types';
export interface DetectedBlock {
    tag: string;
    role: InferredRole;
    composition: CompositionStrategyType;
    density: ContentDensity;
    decision?: CompositionDecision;
    recipeName: string;
    confidence: number;
    textSummary: string;
    depth: number;
}
export interface AnalysisReport {
    sanitizedHtml: string;
    stampedHtml: string;
    styleId: string;
    rootRole: InferredRole;
    composition: CompositionStrategyType;
    density: ContentDensity;
    decision: CompositionDecision;
    plan: CompositionPlan;
    fingerprint: CompositionFingerprint;
    confidence: number;
    recipeName: string;
    rationale: string;
    modifiers: string[];
    detectedBlocks: DetectedBlock[];
    stats: {
        totalElements: number;
        headingCount: number;
        buttonCount: number;
        inputCount: number;
        hasCurrency: boolean;
    };
    contentContext?: ContentContext;
}
export interface DOMAnalyzerOptions {
    transformStructure?: boolean;
}
export declare class DOMAnalyzer {
    /**
     * Parses arbitrary HTML, sanitizes it, runs recursive structural analysis down to arbitrary depths,
     * stamps data-role, data-composition, data-layout, data-container, data-grouping, data-item-presentation,
     * data-align, data-variant, and data-density attributes, and returns a detailed report.
     *
     * By default, preserves the source HTML's structural and layout hierarchy without injecting wrapper divs.
     * Pass options.transformStructure = true to enable presentation-level layout wrapping transformations.
     */
    static analyzeHtml(rawHtml: string, styleId: string, engine: StyleEngine, options?: DOMAnalyzerOptions): AnalysisReport;
    /**
     * Browser-native analysis using DOMParser
     */
    private static analyzeWithDOMParser;
    /**
     * Universal AST-based analysis for Node, CLI, and fallback environments.
     * Parses the HTML tree, stamps attributes on all nodes recursively, and serializes back.
     */
    private static analyzeWithAST;
    /**
     * Lightweight tag-based tokenizer and tree builder.
     */
    private static parseMiniAST;
    /**
     * Serializes a MiniNode back to HTML with all stamped attributes.
     */
    private static serializeMiniNode;
    /**
     * Helper to extract composition fingerprint directly from an analysis report.
     */
    static getFingerprint(report: AnalysisReport): CompositionFingerprint;
}
