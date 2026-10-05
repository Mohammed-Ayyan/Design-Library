import { StructuralSignals, ResolvedRoleContext, InferredRole, ContentContextType, ContentContext } from './types';
import { CompositionStrategyResolver } from './composition-strategy';

export class RoleResolver {
  /**
   * Infers the semantic component role, composition strategy, and layout decision
   * from objective structural signals, hierarchy, and content context.
   */
  public static resolveRole(
    signals: StructuralSignals,
    styleId: string = 'base',
    context?: ContentContextType | ContentContext
  ): ResolvedRoleContext {
    const modifiers: string[] = [];

    // First child / last child modifiers
    if (signals.isFirstChild) modifiers.push('first-child');
    if (signals.isLastChild) modifiers.push('last-child');

    // Deterministic variant index for stable visual variation across siblings
    const variantIndex = signals.siblingIndex % 3;
    modifiers.push(`variant-${variantIndex}`);

    const makeContext = (
      role: InferredRole,
      confidence: number,
      rationale: string,
      extraModifiers: string[] = []
    ): ResolvedRoleContext => {
      const allModifiers = [...modifiers, ...extraModifiers];
      const { composition, density, decision } = CompositionStrategyResolver.resolve(styleId, role, signals, context);
      return {
        role,
        confidence,
        rationale,
        variantIndex,
        modifiers: allModifiers,
        semanticTag: signals.tag,
        composition,
        density,
        decision,
      };
    };

    // 1. Direct tag recognition
    if (signals.tag === 'nav') {
      return makeContext('navigation', 0.98, 'Semantic <nav> element recognized.');
    }

    if (signals.tag === 'header') {
      if (signals.hasHeading && signals.headingLevel === 1) {
        return makeContext('hero', 0.96, 'Semantic <header> with primary H1 hero heading.', ['primary-hero']);
      }
      return makeContext('header', 0.95, 'Semantic <header> container recognized.');
    }

    if (signals.tag === 'footer') {
      return makeContext('footer', 0.95, 'Semantic <footer> element recognized.');
    }

    // 2. Button contextual role resolution (Check specific parent roles FIRST)
    if (signals.tag === 'button') {
      if (signals.parentRole === 'navigation' || signals.parentTag === 'nav') {
        return makeContext('nav-action', 0.95, 'Compact button located within navigation bar.', ['nav-cta']);
      }

      if (signals.parentRole === 'pricing-card' || signals.parentRole === 'pricing-grid') {
        return makeContext('pricing-action', 0.94, 'Action button located inside a Pricing tier container.', ['pricing-cta']);
      }

      if (signals.parentRole === 'feature-item' || signals.parentRole === 'card' || signals.parentRole === 'card-grid' || signals.parentRole === 'feature-group') {
        return makeContext('card-action', 0.92, 'Action button enclosed inside a component item.', ['card-cta']);
      }

      if (signals.parentRole === 'form' || signals.parentTag === 'form') {
        return makeContext('form-submit', 0.93, 'Form submission button.', ['form-submit']);
      }

      if (signals.parentRole === 'hero' || signals.parentRole === 'header' || signals.depth <= 2) {
        return makeContext('cta-button', 0.94, 'Button positioned within Hero/Header context; promoted to high-emphasis Call to Action.', ['prominent-cta']);
      }

      return makeContext('button', 0.85, 'Standard button element.');
    }

    // 3. Form / Newsletter detection
    if (signals.tag === 'form' || (signals.hasInput && signals.hasButton)) {
      return makeContext('form', 0.91, 'Contains input field and action button in close structural proximity.', ['interactive-form']);
    }

    // 4. Hero section detection (Prominent container with H1, or top-level section/div with H1)
    if (
      (signals.tag === 'section' || signals.tag === 'header' || (signals.tag === 'div' && signals.depth <= 2)) &&
      signals.hasHeading &&
      signals.headingLevel === 1 &&
      (signals.hasParagraph || signals.hasButton || signals.childCount >= 2)
    ) {
      return makeContext('hero', 0.94, 'High-level container with H1 headline, supporting paragraph, and call-to-action.', ['primary-hero']);
    }

    // 5. Pricing card detection (currency indicators)
    if (signals.hasPriceIndicator) {
      const extra: string[] = ['has-pricing'];
      if (variantIndex === 1 || signals.textLength > 120) {
        extra.push('highlighted-tier');
      }
      return makeContext('pricing-card', 0.94, 'Detected price currency/frequency markers alongside tier content.', extra);
    }

    // 6. Parent Context: Inside a feature-group or feature-section
    if (signals.parentRole === 'feature-group' || signals.parentRole === 'card-grid') {
      const extra: string[] = [];
      if (variantIndex === 0) extra.push('item-primary');
      if (variantIndex === 1) extra.push('item-secondary');
      if (variantIndex === 2) extra.push('item-accent');
      return makeContext('feature-item', 0.92, 'Structured content unit within a feature group. Adaptive presentation mode applies (not forced into a card).', extra);
    }

    // 7. Feature Section detection (Container with H2 and child containers containing H3 or content items)
    if (
      signals.hasHeading &&
      signals.headingLevel === 2 &&
      signals.childCount >= 2 &&
      (signals.tag === 'section' || (signals.tag === 'div' && signals.hasContainerChildren && signals.totalSiblings < 2))
    ) {
      return makeContext('feature-section', 0.93, 'Section with secondary heading and structured child units. Art-directed layout mode applies.', ['section-container']);
    }

    // 8. Feature Group detection (Container of multiple repeating child units with headings/media)
    if (
      signals.childCount >= 2 &&
      !signals.hasHeadingDirect &&
      (signals.parentRole === 'feature-section' || signals.depth >= 2)
    ) {
      return makeContext('feature-group', 0.9, 'Multi-item structural parent container for repetitive feature units.', ['feature-collection']);
    }

    // 9. Sibling units detection (when siblings share H3/H4 and paragraphs)
    if (
      signals.totalSiblings >= 2 &&
      signals.headingLevel &&
      signals.headingLevel >= 3 &&
      (signals.hasParagraph || signals.hasButton || signals.childCount >= 2)
    ) {
      return makeContext('feature-item', 0.91, 'Content item with heading and descriptive body alongside sibling units.', ['content-unit']);
    }

    // 10. Article detection (Semantic <article> or long-form prose without action buttons)
    if (signals.tag === 'article' || (signals.hasHeading && signals.hasParagraph && signals.textLength > 300 && !signals.hasButton)) {
      return makeContext('article', 0.89, 'Extended text body and structured headings without card-like CTA clutter.', ['long-form']);
    }

    // 11. Component Card detection (Standalone or explicit card units)
    if (
      signals.tag !== 'article' &&
      signals.headingLevel !== 1 &&
      (signals.hasHeading || signals.hasImage) &&
      (signals.hasParagraph || signals.hasButton || signals.childCount >= 2)
    ) {
      const extra: string[] = [];
      if (variantIndex === 1) extra.push('accent-variant');
      if (variantIndex === 2) extra.push('inverted-variant');
      return makeContext('card', 0.88, 'Self-contained unit with heading/media, descriptive body, and sibling repetition.', extra);
    }

    // 12. Grid container detection — only for dedicated repeating visual media grids (e.g., image gallery)
    if (
      signals.childCount >= 3 &&
      !signals.hasHeading &&
      !signals.hasParagraph &&
      signals.hasImage
    ) {
      return makeContext('card-grid', 0.8, 'Multi-item structural parent container for repetitive image cards.');
    }

    // 13. Conservative fallback: Generic container (no hallucination!)
    return makeContext('generic-container', 0.7, 'Generic container without unambiguous structural role. Applying conservative baseline rules.');
  }
}

