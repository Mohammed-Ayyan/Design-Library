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

export class StructureAnalyzer {
  private static PRICE_PATTERNS = [/[$€£¥]/, /\/mo(nth)?/i, /\/yr(ear)?/i, /pricing/i, /\b(free|pro|starter|enterprise|tier|plan)\b/i];

  /**
   * Analyzes an element structure and extracts objective signals.
   */
  public static analyze(input: RawElementInspection): StructuralSignals {
    const tag = (input.tag || 'div').toLowerCase();
    const text = input.text || '';
    const childTags = (input.childrenTags || []).map((t) => t.toLowerCase());
    const descTags = (input.descendantTags || []).map((t) => t.toLowerCase());

    // Check both direct children AND descendants for heading detection
    const hasHeadingDirect = childTags.some((t) => /^h[1-6]$/.test(t)) || /^h[1-6]$/.test(tag);
    const hasHeadingDescendant = descTags.some((t) => /^h[1-6]$/.test(t));
    const hasHeading = hasHeadingDirect || hasHeadingDescendant;

    // Prefer direct child heading tag, fall back to descendant heading tag
    const headingTag = childTags.find((t) => /^h[1-6]$/.test(t))
      || descTags.find((t) => /^h[1-6]$/.test(t))
      || (/^h[1-6]$/.test(tag) ? tag : undefined);
    const headingLevel = headingTag ? parseInt(headingTag.replace('h', ''), 10) : undefined;

    const hasParagraph = childTags.includes('p') || descTags.includes('p') || tag === 'p';
    const hasButton = childTags.includes('button') || descTags.includes('button') || tag === 'button';
    const hasInput = childTags.includes('input') || childTags.includes('textarea') || descTags.includes('input') || descTags.includes('textarea') || tag === 'input';
    const hasImage = childTags.includes('img') || childTags.includes('picture') || descTags.includes('img') || descTags.includes('picture') || tag === 'img';
    const hasLinks = childTags.includes('a') || descTags.includes('a') || tag === 'a';

    const containerTagSet = new Set(['div', 'section', 'article', 'ul', 'ol', 'main', 'header', 'footer', 'aside', 'nav']);
    const hasContainerChildren = input.hasContainerChildren ?? childTags.some((t) => containerTagSet.has(t));

    const hasPriceIndicator =
      input.hasPriceText ??
      StructureAnalyzer.PRICE_PATTERNS.some((pattern) => pattern.test(text) || pattern.test(input.className || ''));

    const siblingIndex = input.siblingIndex ?? 0;
    const totalSiblings = input.totalSiblings ?? 1;

    const childCount = input.childCount ?? childTags.length;
    const textLength = text.length;

    // Determine content density
    const ratio = textLength / (childCount || 1);
    const density = input.density || (ratio > 200 ? 'spacious' : ratio < 40 ? 'compact' : 'normal');

    return {
      tag,
      hasHeading,
      hasHeadingDirect,
      headingLevel,
      hasParagraph,
      hasButton,
      hasInput,
      hasImage,
      hasLinks,
      hasPriceIndicator,
      hasContainerChildren,
      childCount,
      textLength,
      isFirstChild: input.isFirstChild ?? (siblingIndex === 0),
      isLastChild: input.isLastChild ?? (siblingIndex === totalSiblings - 1),
      siblingIndex,
      totalSiblings,
      depth: input.depth ?? 1,
      parentTag: input.parentTag?.toLowerCase(),
      parentRole: input.parentRole,
      ancestorRoles: input.ancestorRoles,
      density,
    };
  }

  /**
   * Analyzes an actual DOM HTMLElement if running in browser environment.
   */
  public static analyzeDOMElement(el: HTMLElement, parentRole?: InferredRole): StructuralSignals {
    const tag = el.tagName.toLowerCase();
    const text = el.textContent || '';
    const childTags = Array.from(el.children).map((c) => c.tagName.toLowerCase());

    // Collect ALL descendant tags recursively
    const descendantTags: string[] = [];
    const collectDescendants = (parent: Element) => {
      for (const child of Array.from(parent.children)) {
        descendantTags.push(child.tagName.toLowerCase());
        collectDescendants(child);
      }
    };
    collectDescendants(el);

    const parent = el.parentElement;
    const siblings = parent ? Array.from(parent.children) : [el];
    const siblingIndex = siblings.indexOf(el);

    const hasPrice = StructureAnalyzer.PRICE_PATTERNS.some((p) => p.test(text) || p.test(el.className));

    return StructureAnalyzer.analyze({
      tag,
      className: el.className,
      text,
      childrenTags: childTags,
      descendantTags,
      childCount: el.children.length,
      parentTag: parent?.tagName.toLowerCase(),
      parentRole,
      siblingIndex: siblingIndex >= 0 ? siblingIndex : 0,
      totalSiblings: siblings.length,
      hasPriceText: hasPrice,
    });
  }
}

