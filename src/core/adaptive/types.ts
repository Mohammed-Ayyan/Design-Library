import React from 'react';
import { DesignTokens } from '../types/tokens';

export type InferredRole =
  | 'page'
  | 'header'
  | 'navigation'
  | 'nav-action'
  | 'hero'
  | 'button'
  | 'cta-button'
  | 'section'
  | 'feature-section'
  | 'feature-group'
  | 'feature-item'
  | 'card-grid'
  | 'card'
  | 'card-action'
  | 'pricing-grid'
  | 'pricing-card'
  | 'pricing-action'
  | 'article'
  | 'article-headline'
  | 'article-lead'
  | 'article-quote'
  | 'editorial-section'
  | 'editorial-flow'
  | 'form'
  | 'form-submit'
  | 'input'
  | 'footer'
  | 'media'
  | 'badge'
  | 'text-block'
  | 'generic-container';

export type CompositionStrategyType =
  // Hero compositions
  | 'hero-asymmetric-poster'
  | 'hero-airy-editorial'
  | 'hero-spatial-pane'
  | 'hero-swiss-grid'
  | 'hero-cyberpunk-hud'
  | 'hero-wabi-sabi-zen'
  // Feature / Card compositions
  | 'features-modular-datagrid'
  | 'features-typographic-columns'
  | 'features-floating-glassdeck'
  | 'features-swiss-matrix'
  | 'features-cyberpunk-nodes'
  | 'features-wabi-sabi-elements'
  // Pricing compositions
  | 'pricing-brutal-slabs'
  | 'pricing-hairline-matrix'
  | 'pricing-luminescent-tiers'
  | 'pricing-swiss-ledger'
  | 'pricing-cyberpunk-rig'
  | 'pricing-wabi-sabi-harmony'
  // Navigation compositions
  | 'nav-utilitarian-ticker'
  | 'nav-airy-strip'
  | 'nav-floating-dock'
  | 'nav-swiss-modular'
  | 'nav-cyberpunk-console'
  | 'nav-wabi-sabi-tranquil'
  // Article compositions
  | 'article-industrial-broadsheet'
  | 'article-editorial-book'
  | 'article-floating-parchment'
  | 'article-swiss-column'
  | 'article-cyberpunk-netlog'
  | 'article-wabi-sabi-manuscript'
  // Form compositions
  | 'form-tactile-terminal'
  | 'form-understated-fields'
  | 'form-frosted-modal'
  | 'form-swiss-order'
  | 'form-cyberpunk-terminal'
  | 'form-wabi-sabi-tea'
  // Generic fallback composition
  | 'generic-balanced';

export type ContentContextType =
  | 'landing-page'
  | 'portfolio'
  | 'pricing'
  | 'article'
  | 'dashboard'
  | 'form'
  | 'navigation'
  | 'feature-collection'
  | 'product-detail'
  | 'gallery-media'
  | 'footer'
  | 'simple-informational'
  | 'mixed-unknown';

export interface DocumentSignals {
  sectionCount: number;
  repeatedItemCount: number;
  headingDepth: number;
  textDensityRatio: number;
  actionCount: number;
  linkCount: number;
  imageCount: number;
  inputCount: number;
  hasCurrency: boolean;
  hasMetricsOrNumbers: boolean;
  hasQuotes: boolean;
  isPortfolioSignaled: boolean;
  hasArticleStructure: boolean;
  hasDashboardStructure: boolean;
  hasFormStructure: boolean;
  hasPricingStructure: boolean;
  maxNestingDepth: number;
}

export interface ContentContext {
  primaryContext: ContentContextType;
  confidence: number;
  rationale: string;
  signals: DocumentSignals;
  sectionContexts?: { role: InferredRole; context: ContentContextType }[];
}

export type ContentDensity = 'compact' | 'normal' | 'spacious';

export type LayoutMode =
  | 'editorial-split'
  | 'monolithic-slabs'
  | 'hud-matrix'
  | 'floating-deck'
  | 'standard-flow'
  | 'grid-columns'
  | 'asymmetric-poster'
  | 'zen-manuscript'
  | 'swiss-ledger'
  | 'portfolio-index'
  | 'pricing-columns'
  | 'editorial-reader'
  | 'dashboard-telemetry'
  | 'focused-form'
  | 'asymmetric-catalog'
  | 'translucent-cluster'
  | 'terminal-dossier'
  | 'zen-anthology'
  | 'modular-matrix';

export type ContainerTreatment =
  | 'borderless'
  | 'heavy-slab'
  | 'hud-frame'
  | 'frosted-glass'
  | 'standard'
  | 'hairline-ledger';

export type GroupingTreatment =
  | 'editorial-columns'
  | 'tactile-slabs'
  | 'telemetry-nodes'
  | 'frosted-deck'
  | 'hairline-list'
  | 'standard-grid'
  | 'interlocking-blocks'
  | 'asymmetric-flow'
  | 'metric-cluster'
  | 'project-ledger';

export type ItemPresentation =
  | 'borderless-editorial'
  | 'solid-slab'
  | 'hud-node'
  | 'frosted-card'
  | 'inline-row'
  | 'standard-card'
  | 'numbered-row'
  | 'interlocking-block'
  | 'portfolio-item'
  | 'pricing-tier'
  | 'metric-node'
  | 'reading-flow'
  | 'field-item';

export type AlignmentPhilosophy = 'left' | 'center' | 'split' | 'asymmetric-left' | 'technical-grid';

export interface StyleDesignGrammar {
  styleId: string;
  densityBias: 'compact' | 'normal' | 'spacious';
  asymmetryTendency: number; // 0 (centered) to 1.0 (high asymmetry)
  containerBoxTendency: number; // 0 (strongly unboxed) to 1.0 (strongly boxed)
  gridPreference: 'fluid-columns' | 'modular-slabs' | 'translucent-deck' | 'technical-matrix' | 'hairline-ledger' | 'organic-flow';
  containerPhilosophy: ContainerTreatment;
  borderPhilosophy: 'none' | 'hairline' | 'heavy-structural' | 'neon-scanline' | 'organic-soft';
  typographyScale: 'restrained' | 'moderate' | 'dramatic' | 'monumental';
  readingMeasure: 'editorial-narrow' | 'standard' | 'wide';
  hasAsymmetricOffsets: boolean;
  hasDecorativeFraming: boolean;
}

/**
 * Concrete layout decision made by the Design Language Engine.
 * This influences display, columns, container treatment, item presentation,
 * margins, alignment, max-width, and spatial geometry.
 */
export interface CompositionDecision {
  layoutMode: LayoutMode;
  columns: number | 'split-1-2' | 'autofit';
  columnDistribution: string;
  containerTreatment: ContainerTreatment;
  groupingTreatment: GroupingTreatment;
  itemPresentation: ItemPresentation;
  alignment: AlignmentPhilosophy;
  density: ContentDensity;
  maxWidth: string;
  hasStructuralBorders: boolean;
  hasAsymmetricOffsets: boolean;
  hasDecorativeFraming: boolean;
  sectionSpacing: string;
  containerBoxCount?: number;
  needsLayoutGroup?: boolean;
  readingMeasure?: 'editorial-narrow' | 'standard' | 'wide';
  typographyScale?: 'restrained' | 'moderate' | 'dramatic' | 'monumental';
}

/**
 * Detailed composition plan for an individual section.
 */
export interface SectionCompositionPlan {
  role: InferredRole;
  layoutMode: LayoutMode;
  columns: number | 'split-1-2' | 'autofit';
  columnDistribution: string;
  containerTreatment: ContainerTreatment;
  groupingTreatment: GroupingTreatment;
  itemPresentation: ItemPresentation;
  alignment: AlignmentPhilosophy;
  density: ContentDensity;
  maxWidth: string;
  hasStructuralBorders: boolean;
  hasAsymmetricOffsets: boolean;
  hasDecorativeFraming: boolean;
  needsLayoutGroup: boolean;
  sectionSpacing: string;
  containerBoxCount: number;
  readingMeasure?: 'editorial-narrow' | 'standard' | 'wide';
  typographyScale?: 'restrained' | 'moderate' | 'dramatic' | 'monumental';
}

/**
 * Global composition plan synthesized by the CompositionPlanner
 * before layout transformation and CSS generation.
 */
export interface CompositionPlan {
  styleId: string;
  contentContext: ContentContext;
  majorLayoutMode: LayoutMode;
  containerTreatment: ContainerTreatment;
  groupingTreatment: GroupingTreatment;
  itemPresentation: ItemPresentation;
  alignment: AlignmentPhilosophy;
  density: ContentDensity;
  heroPlan?: SectionCompositionPlan;
  featuresPlan?: SectionCompositionPlan;
  navPlan?: SectionCompositionPlan;
  sectionPlans: SectionCompositionPlan[];
  fingerprint: CompositionFingerprint;
}

/**
 * Structural fingerprint capturing layout characteristics of rendered HTML.
 * Used to verify real compositional differentiation across design languages
 * and across different content archetypes for the same design language.
 */
export interface CompositionFingerprint {
  styleId: string;
  contentContext: ContentContextType;
  majorLayoutMode: LayoutMode | string;
  sectionLayoutModes: string[];
  columnDistribution: string;
  containerTreatment: ContainerTreatment | string;
  groupingParadigm: GroupingTreatment | string;
  itemPresentationMode: ItemPresentation | string;
  alignmentPhilosophy: AlignmentPhilosophy;
  spacingDensity: ContentDensity;
  maxWidth: string;
  hasStructuralBorders: boolean;
  hasAsymmetricOffsets: boolean;
  hasDecorativeFraming: boolean;
  readingMeasure: 'editorial-narrow' | 'standard' | 'wide';
  typographyScale: 'restrained' | 'moderate' | 'dramatic' | 'monumental';
  containerBoxCount: number;
}

export interface StyleLanguageConfig {
  containerPhilosophy: ContainerTreatment;
  groupingPhilosophy: GroupingTreatment;
  featurePresentation: ItemPresentation;
  heroMode: LayoutMode;
  maxWidth: string;
  alignment: AlignmentPhilosophy;
  density: ContentDensity;
  hasStructuralBorders: boolean;
  hasAsymmetricOffsets: boolean;
  hasDecorativeFraming: boolean;
  containerBoxCount?: number;
}

export interface StructuralSignals {
  tag: string;
  hasHeading: boolean;
  hasHeadingDirect?: boolean;
  headingLevel?: number;
  hasParagraph: boolean;
  hasButton: boolean;
  hasInput: boolean;
  hasImage: boolean;
  hasLinks: boolean;
  hasPriceIndicator: boolean;
  hasContainerChildren?: boolean;
  childCount: number;
  textLength: number;
  isFirstChild: boolean;
  isLastChild: boolean;
  siblingIndex: number;
  totalSiblings: number;
  depth: number;
  parentTag?: string;
  parentRole?: InferredRole;
  ancestorRoles?: InferredRole[];
  density?: ContentDensity;
  childRoles?: InferredRole[];
  siblingRoles?: InferredRole[];
  containsFeatureGroup?: boolean;
}

export interface ResolvedRoleContext {
  role: InferredRole;
  confidence: number;
  rationale: string;
  variantIndex: number; // Deterministic variant based on siblingIndex % 3
  modifiers: string[];
  semanticTag: string;
  composition: CompositionStrategyType;
  density: ContentDensity;
  decision?: CompositionDecision;
}

export interface AdaptiveRecipeResult {
  role: InferredRole;
  recipeName: string;
  styleId: string;
  description: string;
  modifiers: string[];
  composition?: CompositionStrategyType;
  density?: ContentDensity;
  decision?: CompositionDecision;
  containerStyles: React.CSSProperties;
  headingStyles?: React.CSSProperties;
  bodyStyles?: React.CSSProperties;
  buttonStyles?: React.CSSProperties;
  inputStyles?: React.CSSProperties;
  badgeStyles?: React.CSSProperties;
  cssVariables: Record<string, string>;
}

export interface StyleRecipeConfig {
  hero: (ctx: ResolvedRoleContext, tokens: DesignTokens) => Partial<AdaptiveRecipeResult>;
  card: (ctx: ResolvedRoleContext, tokens: DesignTokens) => Partial<AdaptiveRecipeResult>;
  pricingCard: (ctx: ResolvedRoleContext, tokens: DesignTokens) => Partial<AdaptiveRecipeResult>;
  button: (ctx: ResolvedRoleContext, tokens: DesignTokens) => Partial<AdaptiveRecipeResult>;
  article: (ctx: ResolvedRoleContext, tokens: DesignTokens) => Partial<AdaptiveRecipeResult>;
  form: (ctx: ResolvedRoleContext, tokens: DesignTokens) => Partial<AdaptiveRecipeResult>;
  nav: (ctx: ResolvedRoleContext, tokens: DesignTokens) => Partial<AdaptiveRecipeResult>;
  generic: (ctx: ResolvedRoleContext, tokens: DesignTokens) => Partial<AdaptiveRecipeResult>;
}
