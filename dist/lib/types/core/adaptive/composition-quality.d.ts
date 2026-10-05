import { CompositionPlan, ContentContext, ContentContextType } from './types';
export interface QualityReport {
    passed: boolean;
    score: number;
    contentPreserved: boolean;
    readingMeasureValid: boolean;
    columnsBalanced: boolean;
    touchTargetValid: boolean;
    warnings: string[];
    fallbackNeeded: boolean;
}
/**
 * CompositionQualityChecker enforces deterministic layout safety and content integrity.
 * If a planned composition would produce empty columns, clipping, excessive nesting,
 * or unreadable text measures, it detects the condition and triggers safe fallback adjustments.
 */
export declare class CompositionQualityChecker {
    /**
     * Validates a synthesized CompositionPlan against the detected ContentContext.
     */
    static verifyPlan(plan: CompositionPlan, context: ContentContext, options?: {
        childCount?: number;
        textLength?: number;
    }): QualityReport;
    /**
     * Verifies that post-transformed text retains at least 99% of original text tokens.
     */
    static verifyContentPreservation(preText: string, postText: string): boolean;
    /**
     * Resolves the recommended reading line measure in CSS characters (ch).
     */
    static getReadingMeasureCss(measure: 'editorial-narrow' | 'standard' | 'wide' | undefined, context: ContentContextType): string;
}
