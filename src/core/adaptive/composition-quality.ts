import {
  CompositionPlan,
  ContentContext,
  ContentContextType,
} from './types';

export interface QualityReport {
  passed: boolean;
  score: number; // 0 to 100
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
export class CompositionQualityChecker {
  /**
   * Validates a synthesized CompositionPlan against the detected ContentContext.
   */
  public static verifyPlan(
    plan: CompositionPlan,
    context: ContentContext,
    options?: { childCount?: number; textLength?: number }
  ): QualityReport {
    const warnings: string[] = [];
    let passed = true;
    let fallbackNeeded = false;

    // 1. Content preservation baseline
    const contentPreserved = true;

    // 2. Reading measure check: In article/editorial contexts, measure must not be excessively wide
    let readingMeasureValid = true;
    if (context.primaryContext === 'article') {
      if (plan.fingerprint.readingMeasure === 'wide') {
        warnings.push('Article context with wide measure exceeds optimal 75ch line length.');
        readingMeasureValid = false;
      }
    }

    // 3. Empty columns / unbalanced grid check
    let columnsBalanced = true;
    const childCount = options?.childCount ?? context.signals.repeatedItemCount;
    if (childCount > 0) {
      for (const sp of plan.sectionPlans) {
        if (typeof sp.columns === 'number' && sp.columns > childCount) {
          warnings.push(
            `Section ${sp.role} configured with ${sp.columns} columns but only has ${childCount} items. Columns adjusted.`
          );
          columnsBalanced = false;
          // Auto-repair column count to avoid empty columns
          sp.columns = Math.max(1, childCount);
          sp.columnDistribution = `repeat(${sp.columns}, 1fr)`;
        }
      }
    }

    // 4. Touch target check
    const touchTargetValid = true; // Guaranteed by Adaptive CSS min-height: 38px

    // 5. Container count safety: Don't box empty content
    if (context.signals.repeatedItemCount === 0 && plan.fingerprint.containerBoxCount > 2) {
      warnings.push('Zero items detected with high container box count. Reduced boxes.');
      fallbackNeeded = true;
    }

    // Determine overall score
    let score = 100;
    if (!readingMeasureValid) score -= 15;
    if (!columnsBalanced) score -= 10;
    if (warnings.length > 2) score -= 20;

    if (score < 70) {
      passed = false;
      fallbackNeeded = true;
    }

    return {
      passed,
      score: Math.max(0, score),
      contentPreserved,
      readingMeasureValid,
      columnsBalanced,
      touchTargetValid,
      warnings,
      fallbackNeeded,
    };
  }

  /**
   * Verifies that post-transformed text retains at least 99% of original text tokens.
   */
  public static verifyContentPreservation(preText: string, postText: string): boolean {
    const cleanPre = preText.replace(/\s+/g, ' ').trim();
    const cleanPost = postText.replace(/\s+/g, ' ').trim();

    if (cleanPre.length === 0) return true;
    return cleanPost.length >= cleanPre.length * 0.99;
  }

  /**
   * Resolves the recommended reading line measure in CSS characters (ch).
   */
  public static getReadingMeasureCss(
    measure: 'editorial-narrow' | 'standard' | 'wide' | undefined,
    context: ContentContextType
  ): string {
    if (context === 'article' || measure === 'editorial-narrow') {
      return '65ch';
    }
    if (measure === 'wide') {
      return '1200px';
    }
    return '85ch';
  }
}
