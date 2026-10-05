import {
  InferredRole,
  CompositionStrategyType,
  StructuralSignals,
  ContentDensity,
  CompositionDecision,
  CompositionFingerprint,
  ContentContextType,
  ContentContext,
  SectionCompositionPlan,
} from './types';
import { StyleGrammarRegistry } from './style-grammar';

export class CompositionStrategyResolver {
  /**
   * Resolves the design language composition strategy and concrete layout decision
   * for a given semantic role, style, structural signals, and content context.
   */
  public static resolve(
    styleId: string,
    role: InferredRole,
    signals?: Partial<StructuralSignals>,
    context?: ContentContextType | ContentContext
  ): {
    composition: CompositionStrategyType;
    density: ContentDensity;
    decision: CompositionDecision;
  } {
    const contextType: ContentContextType =
      typeof context === 'object' && context !== null && 'primaryContext' in context
        ? context.primaryContext
        : (context as ContentContextType) || 'landing-page';

    const density: ContentDensity = signals?.density || this.calculateDensity(signals);
    const composition = this.resolveCompositionStrategy(styleId, role, signals, contextType);
    const decision = this.resolveDecision(styleId, role, signals, density, contextType);

    return {
      composition,
      density,
      decision,
    };
  }

  /**
   * Computes the concrete layout decision based on the style's design language grammar
   * and the detected content context.
   */
  public static resolveDecision(
    styleId: string,
    role: InferredRole,
    signals?: Partial<StructuralSignals>,
    defaultDensity?: ContentDensity,
    context?: ContentContextType | ContentContext
  ): CompositionDecision {
    const contextType: ContentContextType =
      typeof context === 'object' && context !== null && 'primaryContext' in context
        ? context.primaryContext
        : (context as ContentContextType) || 'landing-page';

    const grammar = StyleGrammarRegistry.getGrammar(styleId);
    const density: ContentDensity = defaultDensity || signals?.density || grammar.densityBias;
    const childCount = signals?.childCount ?? 3;

    // Dispatch to context-aware resolvers
    switch (contextType) {
      case 'portfolio':
        return this.resolvePortfolioContextDecision(styleId, role, density, childCount);
      case 'pricing':
        return this.resolvePricingContextDecision(styleId, role, density, childCount);
      case 'article':
        return this.resolveArticleContextDecision(styleId, role, density, childCount);
      case 'dashboard':
        return this.resolveDashboardContextDecision(styleId, role, density, childCount);
      case 'form':
        return this.resolveFormContextDecision(styleId, role, density, childCount);
      default:
        // Default / Landing-Page / Mixed-Unknown
        return this.resolveLandingContextDecision(styleId, role, density, childCount);
    }
  }

  /**
   * Extracts an evolved composition fingerprint capturing 14 structural dimensions.
   */
  public static extractFingerprint(
    styleId: string,
    decision: CompositionDecision,
    contentContext?: ContentContextType | ContentContext,
    sectionPlans?: SectionCompositionPlan[]
  ): CompositionFingerprint {
    const ctxType: ContentContextType =
      typeof contentContext === 'object' && contentContext !== null && 'primaryContext' in contentContext
        ? contentContext.primaryContext
        : (contentContext as ContentContextType) || 'landing-page';

    const sectionLayoutModes = sectionPlans && sectionPlans.length > 0
      ? Array.from(new Set(sectionPlans.map((s) => s.layoutMode)))
      : [decision.layoutMode];

    return {
      styleId,
      contentContext: ctxType,
      majorLayoutMode: decision.layoutMode,
      sectionLayoutModes,
      columnDistribution: decision.columnDistribution,
      containerTreatment: decision.containerTreatment,
      groupingParadigm: decision.groupingTreatment,
      itemPresentationMode: decision.itemPresentation,
      alignmentPhilosophy: decision.alignment,
      spacingDensity: decision.density,
      maxWidth: decision.maxWidth,
      hasStructuralBorders: decision.hasStructuralBorders,
      hasAsymmetricOffsets: decision.hasAsymmetricOffsets,
      hasDecorativeFraming: decision.hasDecorativeFraming,
      readingMeasure: decision.readingMeasure || 'standard',
      typographyScale: decision.typographyScale || 'moderate',
      containerBoxCount:
        decision.containerBoxCount ??
        (decision.containerTreatment === 'borderless' || decision.containerTreatment === 'hairline-ledger'
          ? 0
          : decision.containerTreatment === 'heavy-slab'
          ? 3
          : decision.containerTreatment === 'hud-frame'
          ? 2
          : 2),
    };
  }

  // ==========================================
  // CONTEXT 1: PORTFOLIO / CREATIVE WORK
  // ==========================================
  private static resolvePortfolioContextDecision(
    styleId: string,
    role: InferredRole,
    density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    if (role === 'hero') {
      return this.resolveHeroDecision(styleId);
    }
    if (role === 'header' || role === 'navigation') {
      return this.resolveNavDecision(styleId);
    }

    switch (styleId) {
      case 'minimalism':
        return {
          layoutMode: 'portfolio-index',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'borderless',
          groupingTreatment: 'project-ledger',
          itemPresentation: 'portfolio-item',
          alignment: 'left',
          density: 'spacious',
          maxWidth: '1040px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4rem',
          containerBoxCount: 0,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'restrained',
        };

      case 'brutalism':
        return {
          layoutMode: 'asymmetric-catalog',
          columns: 'autofit',
          columnDistribution: 'repeat(auto-fit, minmax(320px, 1fr))',
          containerTreatment: 'heavy-slab',
          groupingTreatment: 'tactile-slabs',
          itemPresentation: 'solid-slab',
          alignment: 'asymmetric-left',
          density: 'compact',
          maxWidth: '1360px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: false,
          sectionSpacing: '3.5rem',
          containerBoxCount: 3,
          readingMeasure: 'standard',
          typographyScale: 'monumental',
        };

      case 'glassmorphism':
        return {
          layoutMode: 'translucent-cluster',
          columns: 'autofit',
          columnDistribution: 'repeat(auto-fit, minmax(300px, 1fr))',
          containerTreatment: 'frosted-glass',
          groupingTreatment: 'frosted-deck',
          itemPresentation: 'frosted-card',
          alignment: 'left',
          density: 'spacious',
          maxWidth: '1240px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4rem',
          containerBoxCount: 2,
          readingMeasure: 'standard',
          typographyScale: 'moderate',
        };

      case 'cyberpunk':
        return {
          layoutMode: 'terminal-dossier',
          columns: 'autofit',
          columnDistribution: 'repeat(auto-fit, minmax(260px, 1fr))',
          containerTreatment: 'hud-frame',
          groupingTreatment: 'telemetry-nodes',
          itemPresentation: 'hud-node',
          alignment: 'technical-grid',
          density: 'compact',
          maxWidth: '1240px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: true,
          sectionSpacing: '3rem',
          containerBoxCount: 2,
          readingMeasure: 'standard',
          typographyScale: 'dramatic',
        };

      case 'wabi-sabi':
        return {
          layoutMode: 'zen-anthology',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'borderless',
          groupingTreatment: 'asymmetric-flow',
          itemPresentation: 'borderless-editorial',
          alignment: 'asymmetric-left',
          density: 'spacious',
          maxWidth: '960px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4.5rem',
          containerBoxCount: 0,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'moderate',
        };

      case 'swiss-design':
        return {
          layoutMode: 'swiss-ledger',
          columns: 'split-1-2',
          columnDistribution: '240px 1fr',
          containerTreatment: 'hairline-ledger',
          groupingTreatment: 'hairline-list',
          itemPresentation: 'inline-row',
          alignment: 'split',
          density: 'normal',
          maxWidth: '1200px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3.5rem',
          containerBoxCount: 0,
          readingMeasure: 'standard',
          typographyScale: 'dramatic',
        };

      default:
        return this.resolveBaseDecision(role, density, _childCount);
    }
  }

  // ==========================================
  // CONTEXT 2: PRICING / COMPARISON
  // ==========================================
  private static resolvePricingContextDecision(
    styleId: string,
    role: InferredRole,
    density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    if (role === 'hero') {
      return this.resolveHeroDecision(styleId);
    }
    if (role === 'header' || role === 'navigation') {
      return this.resolveNavDecision(styleId);
    }

    switch (styleId) {
      case 'minimalism':
        return {
          layoutMode: 'pricing-columns',
          columns: 3,
          columnDistribution: 'repeat(3, 1fr)',
          containerTreatment: 'hairline-ledger',
          groupingTreatment: 'editorial-columns',
          itemPresentation: 'pricing-tier',
          alignment: 'left',
          density: 'spacious',
          maxWidth: '1080px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4rem',
          containerBoxCount: 0,
          readingMeasure: 'standard',
          typographyScale: 'restrained',
        };

      case 'brutalism':
        return {
          layoutMode: 'pricing-columns',
          columns: 3,
          columnDistribution: 'repeat(3, 1fr)',
          containerTreatment: 'heavy-slab',
          groupingTreatment: 'tactile-slabs',
          itemPresentation: 'solid-slab',
          alignment: 'left',
          density: 'compact',
          maxWidth: '1240px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: false,
          sectionSpacing: '3.5rem',
          containerBoxCount: 3,
          readingMeasure: 'standard',
          typographyScale: 'monumental',
        };

      case 'glassmorphism':
        return {
          layoutMode: 'pricing-columns',
          columns: 3,
          columnDistribution: 'repeat(3, 1fr)',
          containerTreatment: 'frosted-glass',
          groupingTreatment: 'frosted-deck',
          itemPresentation: 'frosted-card',
          alignment: 'center',
          density: 'normal',
          maxWidth: '1180px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3.5rem',
          containerBoxCount: 3,
          readingMeasure: 'standard',
          typographyScale: 'moderate',
        };

      case 'cyberpunk':
        return {
          layoutMode: 'pricing-columns',
          columns: 3,
          columnDistribution: 'repeat(3, 1fr)',
          containerTreatment: 'hud-frame',
          groupingTreatment: 'telemetry-nodes',
          itemPresentation: 'hud-node',
          alignment: 'technical-grid',
          density: 'compact',
          maxWidth: '1260px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: true,
          sectionSpacing: '3rem',
          containerBoxCount: 3,
          readingMeasure: 'standard',
          typographyScale: 'dramatic',
        };

      case 'wabi-sabi':
        return {
          layoutMode: 'pricing-columns',
          columns: 3,
          columnDistribution: 'repeat(3, 1fr)',
          containerTreatment: 'borderless',
          groupingTreatment: 'asymmetric-flow',
          itemPresentation: 'borderless-editorial',
          alignment: 'asymmetric-left',
          density: 'spacious',
          maxWidth: '1020px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4rem',
          containerBoxCount: 0,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'moderate',
        };

      case 'swiss-design':
        return {
          layoutMode: 'pricing-columns',
          columns: 3,
          columnDistribution: 'repeat(3, 1fr)',
          containerTreatment: 'hairline-ledger',
          groupingTreatment: 'hairline-list',
          itemPresentation: 'inline-row',
          alignment: 'split',
          density: 'normal',
          maxWidth: '1200px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3.5rem',
          containerBoxCount: 0,
          readingMeasure: 'standard',
          typographyScale: 'dramatic',
        };

      default:
        return this.resolveBaseDecision(role, density, _childCount);
    }
  }

  // ==========================================
  // CONTEXT 3: ARTICLE / EDITORIAL
  // ==========================================
  private static resolveArticleContextDecision(
    styleId: string,
    role: InferredRole,
    density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    switch (styleId) {
      case 'minimalism':
        return {
          layoutMode: 'editorial-reader',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'borderless',
          groupingTreatment: 'editorial-columns',
          itemPresentation: 'reading-flow',
          alignment: 'left',
          density: 'spacious',
          maxWidth: '780px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3.5rem',
          containerBoxCount: 0,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'restrained',
        };

      case 'brutalism':
        return {
          layoutMode: 'editorial-reader',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'heavy-slab',
          groupingTreatment: 'tactile-slabs',
          itemPresentation: 'solid-slab',
          alignment: 'left',
          density: 'compact',
          maxWidth: '920px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3rem',
          containerBoxCount: 1,
          readingMeasure: 'standard',
          typographyScale: 'monumental',
        };

      case 'glassmorphism':
        return {
          layoutMode: 'editorial-reader',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'frosted-glass',
          groupingTreatment: 'frosted-deck',
          itemPresentation: 'reading-flow',
          alignment: 'center',
          density: 'spacious',
          maxWidth: '860px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3.5rem',
          containerBoxCount: 1,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'moderate',
        };

      case 'cyberpunk':
        return {
          layoutMode: 'terminal-dossier',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'hud-frame',
          groupingTreatment: 'telemetry-nodes',
          itemPresentation: 'hud-node',
          alignment: 'left',
          density: 'compact',
          maxWidth: '880px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: true,
          sectionSpacing: '2.5rem',
          containerBoxCount: 1,
          readingMeasure: 'standard',
          typographyScale: 'dramatic',
        };

      case 'wabi-sabi':
        return {
          layoutMode: 'zen-manuscript',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'borderless',
          groupingTreatment: 'editorial-columns',
          itemPresentation: 'borderless-editorial',
          alignment: 'asymmetric-left',
          density: 'spacious',
          maxWidth: '720px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4rem',
          containerBoxCount: 0,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'moderate',
        };

      case 'swiss-design':
        return {
          layoutMode: 'editorial-reader',
          columns: 'split-1-2',
          columnDistribution: '200px 1fr',
          containerTreatment: 'hairline-ledger',
          groupingTreatment: 'editorial-columns',
          itemPresentation: 'inline-row',
          alignment: 'left',
          density: 'normal',
          maxWidth: '1000px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3rem',
          containerBoxCount: 0,
          readingMeasure: 'standard',
          typographyScale: 'dramatic',
        };

      default:
        return this.resolveBaseDecision(role, density, _childCount);
    }
  }

  // ==========================================
  // CONTEXT 4: DASHBOARD / TELEMETRY
  // ==========================================
  private static resolveDashboardContextDecision(
    styleId: string,
    role: InferredRole,
    density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    if (role === 'hero') {
      return this.resolveHeroDecision(styleId);
    }
    if (role === 'header' || role === 'navigation') {
      return this.resolveNavDecision(styleId);
    }

    switch (styleId) {
      case 'minimalism':
        return {
          layoutMode: 'dashboard-telemetry',
          columns: 'autofit',
          columnDistribution: 'repeat(auto-fit, minmax(200px, 1fr))',
          containerTreatment: 'hairline-ledger',
          groupingTreatment: 'metric-cluster',
          itemPresentation: 'metric-node',
          alignment: 'left',
          density: 'spacious',
          maxWidth: '1100px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3.5rem',
          containerBoxCount: 0,
          readingMeasure: 'standard',
          typographyScale: 'restrained',
        };

      case 'brutalism':
        return {
          layoutMode: 'dashboard-telemetry',
          columns: 'autofit',
          columnDistribution: 'repeat(auto-fit, minmax(220px, 1fr))',
          containerTreatment: 'heavy-slab',
          groupingTreatment: 'tactile-slabs',
          itemPresentation: 'solid-slab',
          alignment: 'asymmetric-left',
          density: 'compact',
          maxWidth: '1280px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: false,
          sectionSpacing: '3rem',
          containerBoxCount: 4,
          readingMeasure: 'standard',
          typographyScale: 'monumental',
        };

      case 'glassmorphism':
        return {
          layoutMode: 'dashboard-telemetry',
          columns: 'autofit',
          columnDistribution: 'repeat(auto-fit, minmax(220px, 1fr))',
          containerTreatment: 'frosted-glass',
          groupingTreatment: 'frosted-deck',
          itemPresentation: 'frosted-card',
          alignment: 'center',
          density: 'normal',
          maxWidth: '1200px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3rem',
          containerBoxCount: 4,
          readingMeasure: 'standard',
          typographyScale: 'moderate',
        };

      case 'cyberpunk':
        return {
          layoutMode: 'dashboard-telemetry',
          columns: 'autofit',
          columnDistribution: 'repeat(auto-fit, minmax(220px, 1fr))',
          containerTreatment: 'hud-frame',
          groupingTreatment: 'telemetry-nodes',
          itemPresentation: 'hud-node',
          alignment: 'technical-grid',
          density: 'compact',
          maxWidth: '1320px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: true,
          sectionSpacing: '2.5rem',
          containerBoxCount: 4,
          readingMeasure: 'standard',
          typographyScale: 'dramatic',
        };

      case 'wabi-sabi':
        return {
          layoutMode: 'dashboard-telemetry',
          columns: 'autofit',
          columnDistribution: 'repeat(auto-fit, minmax(200px, 1fr))',
          containerTreatment: 'borderless',
          groupingTreatment: 'metric-cluster',
          itemPresentation: 'metric-node',
          alignment: 'left',
          density: 'spacious',
          maxWidth: '980px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4rem',
          containerBoxCount: 0,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'moderate',
        };

      case 'swiss-design':
        return {
          layoutMode: 'dashboard-telemetry',
          columns: 'autofit',
          columnDistribution: 'repeat(auto-fit, minmax(220px, 1fr))',
          containerTreatment: 'hairline-ledger',
          groupingTreatment: 'hairline-list',
          itemPresentation: 'inline-row',
          alignment: 'split',
          density: 'normal',
          maxWidth: '1200px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3rem',
          containerBoxCount: 0,
          readingMeasure: 'standard',
          typographyScale: 'dramatic',
        };

      default:
        return this.resolveBaseDecision(role, density, _childCount);
    }
  }

  // ==========================================
  // CONTEXT 5: FORM / INTERACTION
  // ==========================================
  private static resolveFormContextDecision(
    styleId: string,
    role: InferredRole,
    density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    switch (styleId) {
      case 'minimalism':
        return {
          layoutMode: 'focused-form',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'borderless',
          groupingTreatment: 'editorial-columns',
          itemPresentation: 'field-item',
          alignment: 'left',
          density: 'spacious',
          maxWidth: '540px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3rem',
          containerBoxCount: 0,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'restrained',
        };

      case 'brutalism':
        return {
          layoutMode: 'focused-form',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'heavy-slab',
          groupingTreatment: 'tactile-slabs',
          itemPresentation: 'solid-slab',
          alignment: 'left',
          density: 'compact',
          maxWidth: '620px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: false,
          sectionSpacing: '3rem',
          containerBoxCount: 1,
          readingMeasure: 'standard',
          typographyScale: 'monumental',
        };

      case 'glassmorphism':
        return {
          layoutMode: 'focused-form',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'frosted-glass',
          groupingTreatment: 'frosted-deck',
          itemPresentation: 'frosted-card',
          alignment: 'center',
          density: 'normal',
          maxWidth: '560px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3rem',
          containerBoxCount: 1,
          readingMeasure: 'standard',
          typographyScale: 'moderate',
        };

      case 'cyberpunk':
        return {
          layoutMode: 'focused-form',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'hud-frame',
          groupingTreatment: 'telemetry-nodes',
          itemPresentation: 'hud-node',
          alignment: 'left',
          density: 'compact',
          maxWidth: '600px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: true,
          sectionSpacing: '2.5rem',
          containerBoxCount: 1,
          readingMeasure: 'standard',
          typographyScale: 'dramatic',
        };

      case 'wabi-sabi':
        return {
          layoutMode: 'focused-form',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'borderless',
          groupingTreatment: 'editorial-columns',
          itemPresentation: 'field-item',
          alignment: 'left',
          density: 'spacious',
          maxWidth: '520px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3.5rem',
          containerBoxCount: 0,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'moderate',
        };

      case 'swiss-design':
        return {
          layoutMode: 'focused-form',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'hairline-ledger',
          groupingTreatment: 'hairline-list',
          itemPresentation: 'inline-row',
          alignment: 'left',
          density: 'normal',
          maxWidth: '640px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '3rem',
          containerBoxCount: 0,
          readingMeasure: 'standard',
          typographyScale: 'dramatic',
        };

      default:
        return this.resolveBaseDecision(role, density, _childCount);
    }
  }

  // ==========================================
  // CONTEXT 6: LANDING PAGE & DEFAULT
  // ==========================================
  private static resolveLandingContextDecision(
    styleId: string,
    role: InferredRole,
    density: ContentDensity,
    childCount: number
  ): CompositionDecision {
    switch (styleId) {
      case 'minimalism':
        return this.resolveMinimalismLandingDecision(role, density, childCount);
      case 'brutalism':
        return this.resolveBrutalismLandingDecision(role, density, childCount);
      case 'cyberpunk':
        return this.resolveCyberpunkLandingDecision(role, density, childCount);
      case 'glassmorphism':
        return this.resolveGlassmorphismLandingDecision(role, density, childCount);
      case 'swiss-design':
        return this.resolveSwissLandingDecision(role, density, childCount);
      case 'wabi-sabi':
        return this.resolveWabiSabiLandingDecision(role, density, childCount);
      default:
        return this.resolveBaseDecision(role, density, childCount);
    }
  }

  private static resolveHeroDecision(styleId: string): CompositionDecision {
    switch (styleId) {
      case 'brutalism':
        return {
          layoutMode: 'asymmetric-poster',
          columns: 'split-1-2',
          columnDistribution: '1.2fr 0.8fr',
          containerTreatment: 'heavy-slab',
          groupingTreatment: 'tactile-slabs',
          itemPresentation: 'solid-slab',
          alignment: 'left',
          density: 'compact',
          maxWidth: '1280px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: false,
          sectionSpacing: '4rem',
          containerBoxCount: 1,
          typographyScale: 'monumental',
        };
      case 'glassmorphism':
        return {
          layoutMode: 'standard-flow',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'frosted-glass',
          groupingTreatment: 'frosted-deck',
          itemPresentation: 'frosted-card',
          alignment: 'center',
          density: 'normal',
          maxWidth: '1100px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4rem',
          containerBoxCount: 1,
          typographyScale: 'moderate',
        };
      case 'cyberpunk':
        return {
          layoutMode: 'hud-matrix',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'hud-frame',
          groupingTreatment: 'telemetry-nodes',
          itemPresentation: 'hud-node',
          alignment: 'technical-grid',
          density: 'compact',
          maxWidth: '1240px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: true,
          hasDecorativeFraming: true,
          sectionSpacing: '3.5rem',
          containerBoxCount: 1,
          typographyScale: 'dramatic',
        };
      case 'swiss-design':
        return {
          layoutMode: 'standard-flow',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'hairline-ledger',
          groupingTreatment: 'hairline-list',
          itemPresentation: 'solid-slab',
          alignment: 'left',
          density: 'normal',
          maxWidth: '1200px',
          hasStructuralBorders: true,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4rem',
          containerBoxCount: 0,
          typographyScale: 'dramatic',
        };
      case 'wabi-sabi':
        return {
          layoutMode: 'standard-flow',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'borderless',
          groupingTreatment: 'editorial-columns',
          itemPresentation: 'borderless-editorial',
          alignment: 'asymmetric-left',
          density: 'spacious',
          maxWidth: '920px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4.5rem',
          containerBoxCount: 0,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'moderate',
        };
      default: // minimalism
        return {
          layoutMode: 'standard-flow',
          columns: 1,
          columnDistribution: '1fr',
          containerTreatment: 'borderless',
          groupingTreatment: 'editorial-columns',
          itemPresentation: 'borderless-editorial',
          alignment: 'left',
          density: 'spacious',
          maxWidth: '1040px',
          hasStructuralBorders: false,
          hasAsymmetricOffsets: false,
          hasDecorativeFraming: false,
          sectionSpacing: '4.5rem',
          containerBoxCount: 0,
          readingMeasure: 'editorial-narrow',
          typographyScale: 'restrained',
        };
    }
  }

  private static resolveNavDecision(_styleId: string): CompositionDecision {
    return {
      layoutMode: 'standard-flow',
      columns: 1,
      columnDistribution: '1fr',
      containerTreatment: 'borderless',
      groupingTreatment: 'standard-grid',
      itemPresentation: 'inline-row',
      alignment: 'left',
      density: 'compact',
      maxWidth: '1200px',
      hasStructuralBorders: false,
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
      sectionSpacing: '2rem',
      containerBoxCount: 0,
      readingMeasure: 'standard',
      typographyScale: 'moderate',
    };
  }

  // ==========================================
  // STYLE LANDING RESOLVERS
  // ==========================================
  private static resolveMinimalismLandingDecision(
    role: InferredRole,
    density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    if (role === 'hero') {
      return this.resolveHeroDecision('minimalism');
    }
    if (role === 'header' || role === 'navigation') {
      return this.resolveNavDecision('minimalism');
    }

    if (role === 'feature-section' || role === 'section' || role === 'editorial-section') {
      return {
        layoutMode: 'editorial-split',
        columns: 'split-1-2',
        columnDistribution: '280px 1fr',
        containerTreatment: 'borderless',
        groupingTreatment: 'editorial-columns',
        itemPresentation: 'borderless-editorial',
        alignment: 'left',
        density: 'spacious',
        maxWidth: '1040px',
        hasStructuralBorders: false,
        hasAsymmetricOffsets: false,
        hasDecorativeFraming: false,
        sectionSpacing: '4rem',
        containerBoxCount: 0,
        readingMeasure: 'editorial-narrow',
        typographyScale: 'restrained',
      };
    }

    return {
      layoutMode: 'standard-flow',
      columns: 1,
      columnDistribution: '1fr',
      containerTreatment: 'borderless',
      groupingTreatment: 'editorial-columns',
      itemPresentation: 'borderless-editorial',
      alignment: 'left',
      density,
      maxWidth: '1040px',
      hasStructuralBorders: false,
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
      sectionSpacing: '3rem',
      containerBoxCount: 0,
      readingMeasure: 'editorial-narrow',
      typographyScale: 'restrained',
    };
  }

  private static resolveBrutalismLandingDecision(
    role: InferredRole,
    density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    if (role === 'hero') {
      return this.resolveHeroDecision('brutalism');
    }
    if (role === 'header' || role === 'navigation') {
      return this.resolveNavDecision('brutalism');
    }

    if (role === 'feature-section' || role === 'section' || role === 'editorial-section') {
      return {
        layoutMode: 'monolithic-slabs',
        columns: 'autofit',
        columnDistribution: 'repeat(auto-fit, minmax(280px, 1fr))',
        containerTreatment: 'heavy-slab',
        groupingTreatment: 'tactile-slabs',
        itemPresentation: 'solid-slab',
        alignment: 'left',
        density: 'compact',
        maxWidth: '1280px',
        hasStructuralBorders: true,
        hasAsymmetricOffsets: true,
        hasDecorativeFraming: false,
        sectionSpacing: '4rem',
        containerBoxCount: 3,
        readingMeasure: 'standard',
        typographyScale: 'monumental',
      };
    }

    return {
      layoutMode: 'standard-flow',
      columns: 1,
      columnDistribution: '1fr',
      containerTreatment: 'heavy-slab',
      groupingTreatment: 'tactile-slabs',
      itemPresentation: 'solid-slab',
      alignment: 'left',
      density,
      maxWidth: '1280px',
      hasStructuralBorders: true,
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
      sectionSpacing: '3.5rem',
      containerBoxCount: 1,
      readingMeasure: 'standard',
      typographyScale: 'monumental',
    };
  }

  private static resolveCyberpunkLandingDecision(
    role: InferredRole,
    _density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    if (role === 'hero') {
      return this.resolveHeroDecision('cyberpunk');
    }
    if (role === 'header' || role === 'navigation') {
      return this.resolveNavDecision('cyberpunk');
    }

    return {
      layoutMode: 'hud-matrix',
      columns: 'autofit',
      columnDistribution: 'repeat(auto-fit, minmax(240px, 1fr))',
      containerTreatment: 'hud-frame',
      groupingTreatment: 'telemetry-nodes',
      itemPresentation: 'hud-node',
      alignment: 'technical-grid',
      density: 'compact',
      maxWidth: '1240px',
      hasStructuralBorders: true,
      hasAsymmetricOffsets: true,
      hasDecorativeFraming: true,
      sectionSpacing: '3.5rem',
      containerBoxCount: 2,
      readingMeasure: 'standard',
      typographyScale: 'dramatic',
    };
  }

  private static resolveGlassmorphismLandingDecision(
    role: InferredRole,
    _density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    if (role === 'hero') {
      return this.resolveHeroDecision('glassmorphism');
    }
    if (role === 'header' || role === 'navigation') {
      return this.resolveNavDecision('glassmorphism');
    }

    return {
      layoutMode: 'floating-deck',
      columns: 'autofit',
      columnDistribution: 'repeat(auto-fit, minmax(280px, 1fr))',
      containerTreatment: 'frosted-glass',
      groupingTreatment: 'frosted-deck',
      itemPresentation: 'frosted-card',
      alignment: 'center',
      density: 'normal',
      maxWidth: '1160px',
      hasStructuralBorders: false,
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
      sectionSpacing: '3.5rem',
      containerBoxCount: 2,
      readingMeasure: 'standard',
      typographyScale: 'moderate',
    };
  }

  private static resolveSwissLandingDecision(
    role: InferredRole,
    _density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    if (role === 'hero') {
      return this.resolveHeroDecision('swiss-design');
    }
    if (role === 'header' || role === 'navigation') {
      return this.resolveNavDecision('swiss-design');
    }

    return {
      layoutMode: 'swiss-ledger',
      columns: 'split-1-2',
      columnDistribution: '280px 1fr',
      containerTreatment: 'hairline-ledger',
      groupingTreatment: 'hairline-list',
      itemPresentation: 'inline-row',
      alignment: 'split',
      density: 'normal',
      maxWidth: '1200px',
      hasStructuralBorders: true,
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
      sectionSpacing: '3.5rem',
      containerBoxCount: 0,
      readingMeasure: 'standard',
      typographyScale: 'dramatic',
    };
  }

  private static resolveWabiSabiLandingDecision(
    role: InferredRole,
    _density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    if (role === 'hero') {
      return this.resolveHeroDecision('wabi-sabi');
    }
    if (role === 'header' || role === 'navigation') {
      return this.resolveNavDecision('wabi-sabi');
    }

    return {
      layoutMode: 'zen-manuscript',
      columns: 1,
      columnDistribution: '1fr',
      containerTreatment: 'borderless',
      groupingTreatment: 'asymmetric-flow',
      itemPresentation: 'borderless-editorial',
      alignment: 'asymmetric-left',
      density: 'spacious',
      maxWidth: '940px',
      hasStructuralBorders: false,
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
      sectionSpacing: '4.5rem',
      containerBoxCount: 0,
      readingMeasure: 'editorial-narrow',
      typographyScale: 'moderate',
    };
  }

  private static resolveBaseDecision(
    _role: InferredRole,
    density: ContentDensity,
    _childCount: number
  ): CompositionDecision {
    return {
      layoutMode: 'standard-flow',
      columns: 1,
      columnDistribution: '1fr',
      containerTreatment: 'standard',
      groupingTreatment: 'standard-grid',
      itemPresentation: 'standard-card',
      alignment: 'left',
      density,
      maxWidth: '1200px',
      hasStructuralBorders: true,
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
      sectionSpacing: '2.5rem',
      containerBoxCount: 1,
      readingMeasure: 'standard',
      typographyScale: 'moderate',
    };
  }

  private static resolveCompositionStrategy(
    styleId: string,
    role: InferredRole,
    signals?: Partial<StructuralSignals>,
    context?: ContentContextType
  ): CompositionStrategyType {
    if (role === 'generic-container' || role === 'page' || role === 'text-block') {
      return 'generic-balanced';
    }

    if (role === 'hero') {
      return this.resolveHeroComposition(styleId);
    }

    if (role === 'pricing-grid' || role === 'pricing-card' || context === 'pricing') {
      return this.resolvePricingComposition(styleId);
    }

    if (role === 'navigation' || role === 'header' || role === 'nav-action' || context === 'navigation') {
      return this.resolveNavComposition(styleId);
    }

    if (role === 'article' || role === 'article-headline' || role === 'article-lead' || role === 'article-quote' || context === 'article') {
      return this.resolveArticleComposition(styleId);
    }

    if (role === 'form' || role === 'form-submit' || context === 'form') {
      return this.resolveFormComposition(styleId);
    }

    return this.resolveFeaturesComposition(styleId, signals);
  }

  private static resolveHeroComposition(styleId: string): CompositionStrategyType {
    switch (styleId) {
      case 'brutalism':
        return 'hero-asymmetric-poster';
      case 'minimalism':
        return 'hero-airy-editorial';
      case 'glassmorphism':
        return 'hero-spatial-pane';
      case 'swiss-design':
        return 'hero-swiss-grid';
      case 'cyberpunk':
        return 'hero-cyberpunk-hud';
      case 'wabi-sabi':
        return 'hero-wabi-sabi-zen';
      default:
        return 'generic-balanced';
    }
  }

  private static resolveFeaturesComposition(
    styleId: string,
    _signals?: Partial<StructuralSignals>
  ): CompositionStrategyType {
    switch (styleId) {
      case 'brutalism':
        return 'features-modular-datagrid';
      case 'minimalism':
        return 'features-typographic-columns';
      case 'glassmorphism':
        return 'features-floating-glassdeck';
      case 'swiss-design':
        return 'features-swiss-matrix';
      case 'cyberpunk':
        return 'features-cyberpunk-nodes';
      case 'wabi-sabi':
        return 'features-wabi-sabi-elements';
      default:
        return 'generic-balanced';
    }
  }

  private static resolvePricingComposition(styleId: string): CompositionStrategyType {
    switch (styleId) {
      case 'brutalism':
        return 'pricing-brutal-slabs';
      case 'minimalism':
        return 'pricing-hairline-matrix';
      case 'glassmorphism':
        return 'pricing-luminescent-tiers';
      case 'swiss-design':
        return 'pricing-swiss-ledger';
      case 'cyberpunk':
        return 'pricing-cyberpunk-rig';
      case 'wabi-sabi':
        return 'pricing-wabi-sabi-harmony';
      default:
        return 'generic-balanced';
    }
  }

  private static resolveNavComposition(styleId: string): CompositionStrategyType {
    switch (styleId) {
      case 'brutalism':
        return 'nav-utilitarian-ticker';
      case 'minimalism':
        return 'nav-airy-strip';
      case 'glassmorphism':
        return 'nav-floating-dock';
      case 'swiss-design':
        return 'nav-swiss-modular';
      case 'cyberpunk':
        return 'nav-cyberpunk-console';
      case 'wabi-sabi':
        return 'nav-wabi-sabi-tranquil';
      default:
        return 'generic-balanced';
    }
  }

  private static resolveArticleComposition(styleId: string): CompositionStrategyType {
    switch (styleId) {
      case 'brutalism':
        return 'article-industrial-broadsheet';
      case 'minimalism':
        return 'article-editorial-book';
      case 'glassmorphism':
        return 'article-floating-parchment';
      case 'swiss-design':
        return 'article-swiss-column';
      case 'cyberpunk':
        return 'article-cyberpunk-netlog';
      case 'wabi-sabi':
        return 'article-wabi-sabi-manuscript';
      default:
        return 'generic-balanced';
    }
  }

  private static resolveFormComposition(styleId: string): CompositionStrategyType {
    switch (styleId) {
      case 'brutalism':
        return 'form-tactile-terminal';
      case 'minimalism':
        return 'form-understated-fields';
      case 'glassmorphism':
        return 'form-frosted-modal';
      case 'swiss-design':
        return 'form-swiss-order';
      case 'cyberpunk':
        return 'form-cyberpunk-terminal';
      case 'wabi-sabi':
        return 'form-wabi-sabi-tea';
      default:
        return 'generic-balanced';
    }
  }

  private static calculateDensity(signals?: Partial<StructuralSignals>): ContentDensity {
    if (!signals) return 'normal';
    const textLen = signals.textLength || 0;
    const childCount = signals.childCount || 1;
    const ratio = textLen / childCount;

    if (ratio > 200) return 'spacious';
    if (ratio < 40) return 'compact';
    return 'normal';
  }
}
