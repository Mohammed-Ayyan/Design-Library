import {
  InferredRole,
  CompositionPlan,
  SectionCompositionPlan,
  StructuralSignals,
  CompositionDecision,
  ContentContext,
  ContentContextType,
} from './types';
import { CompositionStrategyResolver } from './composition-strategy';

/**
 * CompositionPlanner synthesizes a holistic, art-directed CompositionPlan
 * from the semantic roles, structural signals, and ContentContext.
 *
 * It bridges Style Design Grammar with Content Context so that:
 * 1. The same style adapts its composition intelligently across different content archetypes.
 * 2. Different styles express the same content archetype with distinct spatial organizations.
 */
export class CompositionPlanner {
  public static plan(
    styleId: string,
    rootRole: InferredRole,
    signals?: Partial<StructuralSignals>,
    childSections?: { role: InferredRole; signals: Partial<StructuralSignals> }[],
    contentContext?: ContentContext
  ): CompositionPlan {
    const effectiveContext: ContentContext = contentContext || {
      primaryContext: 'landing-page',
      confidence: 0.85,
      rationale: 'Default structural context',
      signals: {
        sectionCount: childSections?.length || 2,
        repeatedItemCount: 3,
        headingDepth: 2,
        textDensityRatio: 1.5,
        actionCount: 1,
        linkCount: 4,
        imageCount: 0,
        inputCount: 0,
        hasCurrency: false,
        hasMetricsOrNumbers: false,
        hasQuotes: false,
        isPortfolioSignaled: false,
        hasArticleStructure: false,
        hasDashboardStructure: false,
        hasFormStructure: false,
        hasPricingStructure: false,
        maxNestingDepth: 3,
      },
    };

    const rootDecision = CompositionStrategyResolver.resolveDecision(
      styleId,
      rootRole,
      signals,
      undefined,
      effectiveContext
    );

    const sectionPlans: SectionCompositionPlan[] = [];

    // Plan Hero
    const heroPlan = this.planSection(styleId, 'hero', signals, effectiveContext.primaryContext);
    sectionPlans.push(heroPlan);

    // Plan Feature Sections
    const featuresPlan = this.planSection(styleId, 'feature-section', signals, effectiveContext.primaryContext);
    sectionPlans.push(featuresPlan);

    // Plan Navigation
    const navPlan = this.planSection(styleId, 'navigation', signals, effectiveContext.primaryContext);
    sectionPlans.push(navPlan);

    // If explicit child sections were provided, plan each one contextually
    if (childSections && childSections.length > 0) {
      for (const cs of childSections) {
        if (!['hero', 'feature-section', 'navigation'].includes(cs.role)) {
          sectionPlans.push(this.planSection(styleId, cs.role, cs.signals, effectiveContext.primaryContext));
        }
      }
    }

    const fingerprint = CompositionStrategyResolver.extractFingerprint(
      styleId,
      rootDecision,
      effectiveContext.primaryContext,
      sectionPlans
    );

    return {
      styleId,
      contentContext: effectiveContext,
      majorLayoutMode: rootDecision.layoutMode,
      containerTreatment: rootDecision.containerTreatment,
      groupingTreatment: rootDecision.groupingTreatment,
      itemPresentation: rootDecision.itemPresentation,
      alignment: rootDecision.alignment,
      density: rootDecision.density,
      heroPlan,
      featuresPlan,
      navPlan,
      sectionPlans,
      fingerprint,
    };
  }

  /**
   * Plans an individual section based on the design language's grammar and content context.
   */
  public static planSection(
    styleId: string,
    role: InferredRole,
    signals?: Partial<StructuralSignals>,
    context?: ContentContextType
  ): SectionCompositionPlan {
    const decision: CompositionDecision = CompositionStrategyResolver.resolveDecision(
      styleId,
      role,
      signals,
      undefined,
      context
    );

    const childCount = signals?.childCount ?? 3;
    const hasHeading = signals?.hasHeading ?? true;
    const needsLayoutGroup =
      (role === 'feature-section' ||
        role === 'section' ||
        role === 'card-grid' ||
        role === 'article' ||
        role === 'pricing-grid') &&
      hasHeading &&
      childCount >= 2;

    const boxCount =
      decision.containerBoxCount ??
      (decision.containerTreatment === 'borderless' || decision.containerTreatment === 'hairline-ledger'
        ? 0
        : decision.containerTreatment === 'heavy-slab'
        ? 3
        : decision.containerTreatment === 'hud-frame'
        ? 2
        : 1);

    return {
      role,
      layoutMode: decision.layoutMode,
      columns: decision.columns,
      columnDistribution: decision.columnDistribution,
      containerTreatment: decision.containerTreatment,
      groupingTreatment: decision.groupingTreatment,
      itemPresentation: decision.itemPresentation,
      alignment: decision.alignment,
      density: decision.density,
      maxWidth: decision.maxWidth,
      hasStructuralBorders: decision.hasStructuralBorders,
      hasAsymmetricOffsets: decision.hasAsymmetricOffsets,
      hasDecorativeFraming: decision.hasDecorativeFraming,
      needsLayoutGroup,
      sectionSpacing: decision.sectionSpacing,
      containerBoxCount: boxCount,
      readingMeasure: decision.readingMeasure,
      typographyScale: decision.typographyScale,
    };
  }
}
