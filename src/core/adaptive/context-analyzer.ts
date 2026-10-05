import {
  ContentContext,
  DocumentSignals,
  InferredRole,
} from './types';

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
export class ContentContextAnalyzer {
  /**
   * Analyzes an HTML string or text structure to produce a ContentContext.
   */
  public static analyze(
    rawHtml: string,
    detectedRoles?: InferredRole[]
  ): ContentContext {
    const stats = this.extractDocumentStats(rawHtml);
    const signals = this.computeDocumentSignals(stats, detectedRoles);
    return this.inferContext(signals, stats, detectedRoles);
  }

  /**
   * Analyzes a browser DOM container element.
   */
  public static analyzeDOM(
    container: HTMLElement,
    detectedRoles?: InferredRole[]
  ): ContentContext {
    const stats = this.extractDOMStats(container);
    const signals = this.computeDocumentSignals(stats, detectedRoles);
    return this.inferContext(signals, stats, detectedRoles);
  }

  /**
   * Extracts raw document statistics from HTML string using fast deterministic scanning.
   */
  private static extractDocumentStats(html: string): RawDocumentStats {
    const tagCounts: Record<string, number> = {};
    const headingLevels: number[] = [];
    const paragraphLengths: number[] = [];

    // Strip comments
    const cleanHtml = html.replace(/<!--[\s\S]*?-->/g, '');

    // Extract text
    const text = cleanHtml
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    // Scan tags
    const tagRegex = /<([a-z0-9]+)(\s+[^>]*)?>/gi;
    let match: RegExpExecArray | null;
    let totalElements = 0;

    while ((match = tagRegex.exec(cleanHtml)) !== null) {
      const tag = match[1].toLowerCase();
      totalElements++;
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;

      if (/^h[1-6]$/.test(tag)) {
        headingLevels.push(parseInt(tag[1], 10));
      }
    }

    // Paragraph lengths
    const pRegex = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
    let pMatch: RegExpExecArray | null;
    while ((pMatch = pRegex.exec(cleanHtml)) !== null) {
      const pText = pMatch[1].replace(/<[^>]+>/g, '').trim();
      paragraphLengths.push(pText.length);
    }

    // Nesting depth approximation
    let maxDepth = 1;
    let currentDepth = 0;
    const tagScan = /<(\/)?([a-z0-9]+)(?:\s+[^>]*?)?(\/)?>/gi;
    let scanMatch: RegExpExecArray | null;
    const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

    while ((scanMatch = tagScan.exec(cleanHtml)) !== null) {
      const isClose = Boolean(scanMatch[1]);
      const tag = scanMatch[2].toLowerCase();
      const isSelfClosing = Boolean(scanMatch[3]) || voidTags.has(tag);

      if (isClose) {
        currentDepth = Math.max(0, currentDepth - 1);
      } else if (!isSelfClosing) {
        currentDepth++;
        if (currentDepth > maxDepth) maxDepth = currentDepth;
      }
    }

    const sectionCount =
      (tagCounts['section'] || 0) +
      (tagCounts['article'] || 0) +
      (tagCounts['header'] || 0) +
      (tagCounts['footer'] || 0);

    return {
      text,
      totalElements,
      tagCounts,
      sectionCount: Math.max(sectionCount, 1),
      headingCount: headingLevels.length,
      headingLevels,
      paragraphCount: paragraphLengths.length,
      paragraphLengths,
      buttonCount: (tagCounts['button'] || 0) + (tagCounts['input[type=submit]'] || 0),
      inputCount: (tagCounts['input'] || 0) + (tagCounts['textarea'] || 0) + (tagCounts['select'] || 0),
      linkCount: tagCounts['a'] || 0,
      imageCount: (tagCounts['img'] || 0) + (tagCounts['picture'] || 0) + (tagCounts['svg'] || 0),
      blockquoteCount: tagCounts['blockquote'] || 0,
      tableCount: tagCounts['table'] || 0,
      listCount: (tagCounts['ul'] || 0) + (tagCounts['ol'] || 0),
      maxNestingDepth: maxDepth,
      repeatedChildContainers: Math.max(
        tagCounts['article'] || 0,
        tagCounts['li'] || 0,
        Math.floor((tagCounts['div'] || 0) / 2)
      ),
    };
  }

  /**
   * Extracts stats from live DOM container.
   */
  private static extractDOMStats(container: HTMLElement): RawDocumentStats {
    const text = container.textContent || '';
    const allElements = Array.from(container.querySelectorAll('*')) as HTMLElement[];
    const tagCounts: Record<string, number> = {};

    allElements.forEach((el) => {
      const t = el.tagName.toLowerCase();
      tagCounts[t] = (tagCounts[t] || 0) + 1;
    });

    const headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const headingLevels = headings.map((h) => parseInt(h.tagName[1], 10));

    const paragraphs = Array.from(container.querySelectorAll('p'));
    const paragraphLengths = paragraphs.map((p) => (p.textContent || '').trim().length);

    let maxDepth = 1;
    const calcDepth = (el: HTMLElement, d: number) => {
      if (d > maxDepth) maxDepth = d;
      for (const child of Array.from(el.children) as HTMLElement[]) {
        calcDepth(child, d + 1);
      }
    };
    calcDepth(container, 1);

    const sectionCount = container.querySelectorAll('section, article, header, footer').length || 1;

    return {
      text,
      totalElements: allElements.length,
      tagCounts,
      sectionCount,
      headingCount: headingLevels.length,
      headingLevels,
      paragraphCount: paragraphs.length,
      paragraphLengths,
      buttonCount: container.querySelectorAll('button, input[type="submit"], a.button').length,
      inputCount: container.querySelectorAll('input, textarea, select').length,
      linkCount: container.querySelectorAll('a').length,
      imageCount: container.querySelectorAll('img, picture, svg').length,
      blockquoteCount: container.querySelectorAll('blockquote').length,
      tableCount: container.querySelectorAll('table').length,
      listCount: container.querySelectorAll('ul, ol').length,
      maxNestingDepth: maxDepth,
      repeatedChildContainers: container.querySelectorAll('article, li, [data-role="card"]').length,
    };
  }

  /**
   * Computes normalized document signals.
   */
  private static computeDocumentSignals(
    stats: RawDocumentStats,
    detectedRoles?: InferredRole[]
  ): DocumentSignals {
    const textLower = stats.text.toLowerCase();

    // 1. Pricing signals
    const hasCurrencySymbol = /[$€£¥₹]/.test(stats.text);
    const hasPricingTerms = /\b(pricing|tiers?|plans?|\/mo|\/month|\/yr|\/year|billed|subscription|free|pro|enterprise)\b/i.test(
      textLower
    );
    const hasPricingStructure =
      (hasCurrencySymbol && hasPricingTerms) ||
      (detectedRoles && (detectedRoles.includes('pricing-card') || detectedRoles.includes('pricing-grid')));

    // 2. Dashboard / Telemetry signals
    const nonYearText = stats.text.replace(/\b(19|20)\d{2}\b/g, '');
    const metricUnitsRegex = /\b(\d+(?:\.\d+)?\s*(?:%|ms|kb|mb|gb|tb|qps|req\/s|ops\/sec|ghz|mhz|k|m|b)\b)/i;
    const dashboardTermsRegex = /\b(cpu|memory|latency|throughput|uptime|storage|telemetry|active nodes|status|metrics?|bandwidth|requests|diagnostics)\b/i;
    const hasMetricsOrNumbers =
      metricUnitsRegex.test(stats.text) ||
      (/\b\d{1,4}(?:,\d{3})*\b/.test(nonYearText) && dashboardTermsRegex.test(textLower) && stats.repeatedChildContainers >= 3);
    const hasDashboardStructure =
      hasMetricsOrNumbers &&
      dashboardTermsRegex.test(textLower) &&
      !hasPricingStructure &&
      stats.buttonCount <= 2;

    // 3. Portfolio signals
    const portfolioTerms = /\b(studio|selected work|portfolio|case stud(?:y|ies)|brand identity|editorial system|digital product|client|art direction|visual identity|exhibition|work)\b/i;
    const isPortfolioSignaled =
      portfolioTerms.test(textLower) &&
      (stats.tagCounts['article'] >= 2 || stats.repeatedChildContainers >= 2) &&
      !hasPricingStructure &&
      !hasDashboardStructure;

    // 4. Article / Editorial signals
    const hasLongParagraphs = stats.paragraphLengths.some((len) => len > 120) || stats.paragraphLengths.length >= 3;
    const hasBlockquote = stats.blockquoteCount > 0;
    const bylineTerms = /\b(written by|published|read time|min read|author|essay|journal|curated|dispatch)\b/i;
    const hasArticleStructure =
      (hasLongParagraphs && (hasBlockquote || bylineTerms.test(textLower) || stats.tagCounts['article'] > 0)) &&
      stats.buttonCount <= 2 &&
      !hasPricingStructure &&
      !hasDashboardStructure;

    // 5. Form signals
    const hasFormStructure =
      stats.inputCount >= 2 ||
      (stats.tagCounts['form'] !== undefined && stats.tagCounts['form'] > 0 && stats.inputCount >= 1);

    // 6. Text Density Ratio: (words / total elements)
    const wordCount = stats.text.trim().split(/\s+/).filter(Boolean).length;
    const textDensityRatio = stats.totalElements > 0 ? wordCount / stats.totalElements : 0;

    return {
      sectionCount: stats.sectionCount,
      repeatedItemCount: stats.repeatedChildContainers,
      headingDepth: stats.headingLevels.length > 0 ? Math.max(...stats.headingLevels) : 1,
      textDensityRatio,
      actionCount: stats.buttonCount,
      linkCount: stats.linkCount,
      imageCount: stats.imageCount,
      inputCount: stats.inputCount,
      hasCurrency: hasCurrencySymbol,
      hasMetricsOrNumbers,
      hasQuotes: stats.blockquoteCount > 0,
      isPortfolioSignaled: Boolean(isPortfolioSignaled),
      hasArticleStructure,
      hasDashboardStructure,
      hasFormStructure,
      hasPricingStructure: Boolean(hasPricingStructure),
      maxNestingDepth: stats.maxNestingDepth,
    };
  }

  /**
   * Deterministically infers primary ContentContext and confidence.
   */
  private static inferContext(
    signals: DocumentSignals,
    stats: RawDocumentStats,
    detectedRoles?: InferredRole[]
  ): ContentContext {
    // 1. Form context (strongest deterministic signal when multiple inputs present)
    if (signals.hasFormStructure && signals.inputCount >= 2) {
      return {
        primaryContext: 'form',
        confidence: 0.95,
        rationale: `Form context detected with ${signals.inputCount} inputs and form action structure.`,
        signals,
      };
    }

    // 2. Pricing context
    if (signals.hasPricingStructure) {
      return {
        primaryContext: 'pricing',
        confidence: 0.94,
        rationale: 'Pricing context detected with currency symbols, tiered plans, or billing metrics.',
        signals,
      };
    }

    // 3. Multi-section Landing Page context (prioritize over telemetry keywords if clear hero + sections)
    const hasHero =
      detectedRoles?.includes('hero') ||
      (stats.headingLevels.includes(1) && signals.actionCount >= 1 && signals.sectionCount >= 2);

    if (hasHero && signals.sectionCount >= 2 && !signals.isPortfolioSignaled) {
      return {
        primaryContext: 'landing-page',
        confidence: 0.9,
        rationale: `Landing page context detected with prominent hero and ${signals.sectionCount} structured sections.`,
        signals,
      };
    }

    // 4. Dashboard / Telemetry context
    if (signals.hasDashboardStructure) {
      return {
        primaryContext: 'dashboard',
        confidence: 0.91,
        rationale: 'Dashboard context detected with telemetry metrics, unit labels, or numeric diagnostic blocks.',
        signals,
      };
    }

    // 5. Portfolio / Creative Work context
    if (signals.isPortfolioSignaled) {
      return {
        primaryContext: 'portfolio',
        confidence: 0.92,
        rationale: 'Portfolio context detected with creative project articles, client work, or studio showcase.',
        signals,
      };
    }

    // 6. Article / Long-form Editorial context
    if (signals.hasArticleStructure) {
      return {
        primaryContext: 'article',
        confidence: 0.9,
        rationale: 'Editorial article context detected with reading paragraphs, quotes, or byline metadata.',
        signals,
      };
    }

    // 7. Navigation context (predominantly navigation bar)
    if (
      (stats.tagCounts['nav'] !== undefined && stats.tagCounts['nav'] > 0 && stats.totalElements <= 15) ||
      (detectedRoles && detectedRoles.length === 1 && detectedRoles[0] === 'navigation')
    ) {
      return {
        primaryContext: 'navigation',
        confidence: 0.95,
        rationale: 'Navigation context detected with nav menu container and links.',
        signals,
      };
    }

    // 8. Feature Collection (single section with 2+ features)
    if (signals.repeatedItemCount >= 2 && stats.headingCount >= 1 && signals.actionCount <= 3) {
      return {
        primaryContext: 'feature-collection',
        confidence: 0.85,
        rationale: 'Feature collection context detected with repeating capability items and section heading.',
        signals,
      };
    }

    // 9. Simple Informational Section
    if (stats.headingCount <= 2 && stats.paragraphCount <= 2 && signals.actionCount <= 1) {
      return {
        primaryContext: 'simple-informational',
        confidence: 0.8,
        rationale: 'Simple informational section with single heading and concise copy.',
        signals,
      };
    }

    // 10. Fallback / Mixed Unknown
    return {
      primaryContext: 'mixed-unknown',
      confidence: 0.7,
      rationale: 'Generic multi-purpose container without strong dominant archetype signals.',
      signals,
    };
  }
}
