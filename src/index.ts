/**
 * Design Style Library — Public API Entry Point
 *
 * This is the canonical public interface for the Design Style Library and Adaptive Style Engine.
 * Consumers should import directly from this package entry point:
 *
 * @example
 * ```ts
 * import {
 *   StyleEngine,
 *   brutalismStyle,
 *   minimalismStyle,
 *   glassmorphismStyle,
 *   enhanceHTML,
 *   injectAdaptiveStyles
 * } from 'design-library';
 * ```
 */

// 1. Core Style Engine & Adapters
export { StyleEngine } from './core/engine';
export { StyleRegistry } from './core/registry/style-registry';
export { StyleResolver } from './core/resolver/style-resolver';
export { CSSAdapter } from './core/adapters/css-adapter';

// 2. Adaptive System & Role Resolution
export { StructureAnalyzer } from './core/adaptive/structure-analyzer';
export { RoleResolver } from './core/adaptive/role-resolver';
export { CompositionStrategyResolver } from './core/adaptive/composition-strategy';
export { RecipeEngine } from './core/adaptive/recipe-engine';
export {
  AdaptiveCSSGenerator,
  injectAdaptiveStyles,
  enhanceHTML,
} from './core/adaptive/adaptive-css';
export { HTMLSanitizer } from './core/adaptive/sanitizer';
export { DOMAnalyzer } from './core/adaptive/dom-analyzer';
export type { AnalysisReport, DetectedBlock } from './core/adaptive/dom-analyzer';

// 3. Built-in Design Languages & Catalog
export {
  baseStyle,
  brutalismStyle,
  minimalismStyle,
  glassmorphismStyle,
  maximalismStyle,
  swissDesignStyle,
  surrealismStyle,
  neoBrutalismStyle,
  neoClassicalStyle,
  luxuryTypographyStyle,
  editorialDesignStyle,
  y2kAestheticStyle,
  bentoGridStyle,
  pixelArtStyle,
  conceptualSketchStyle,
  etherealStyle,
  bohemianStyle,
  cyberpunkStyle,
  anthropomorphicStyle,
  neumorphismStyle,
  darkModeUiStyle,
  scrapbookStyle,
  claymorphismStyle,
  wabiSabiStyle,
  victorianStyle,
  cybercoreStyle,
  synthwaveStyle,
  graffitiStyle,
  gothicStyle,
  mixedMediaStyle,
  artDecoStyle,
  bauhausStyle,
  solarpunkStyle,
  brutalistSemanticCss,
  minimalistSemanticCss,
  glassmorphismSemanticCss,
  maximalistSemanticCss,
  swissDesignSemanticCss,
  surrealDesignSemanticCss,
  neoBrutalistSemanticCss,
  neoClassicalSemanticCss,
  luxuryTypographySemanticCss,
  editorialDesignSemanticCss,
  y2kAestheticSemanticCss,
  bentoGridSemanticCss,
  pixelArtSemanticCss,
  conceptualSketchSemanticCss,
  etherealSemanticCss,
  bohemianSemanticCss,
  cyberpunkSemanticCss,
  anthropomorphicSemanticCss,
  neumorphicSemanticCss,
  darkModeUiSemanticCss,
  scrapbookSemanticCss,
  claymorphicSemanticCss,
  victorianSemanticCss,
  cybercoreSemanticCss,
  synthwaveSemanticCss,
  graffitiSemanticCss,
  gothicSemanticCss,
  mixedMediaSemanticCss,
  artDecoSemanticCss,
  bauhausSemanticCss,
  solarpunkSemanticCss,
  wabiSabiSemanticCss,
  defaultStyles,
  ALL_29_STYLES,
} from './styles';
export type { StyleCatalogItem } from './styles';

// 4. React Integration Components & Hooks
export {
  StyleEngineProvider,
  useStyleEngine,
  StyleScope,
  Page,
  Section,
  Card,
  Button,
  Heading,
  Paragraph,
  Input,
  Badge,
} from './react';

// 5. Types
export type {
  StyleDefinition,
  StyleMetadata,
} from './core/types/style-definition';
export type { DesignTokens } from './core/types/tokens';
export type {
  ComponentStyles,
  ButtonComponentStyle,
  CardComponentStyle,
  InputComponentStyle,
  BadgeComponentStyle,
} from './core/types/components';
export type {
  StyleScopeLevel,
  ScopeContext,
  ResolvedScope,
  ScopeChainItem,
} from './core/types/scope';
export type { ResolvedStyle } from './core/resolver/style-resolver';
export type {
  InferredRole,
  CompositionStrategyType,
  ContentDensity,
  StructuralSignals,
  ResolvedRoleContext,
  AdaptiveRecipeResult,
  CompositionDecision,
  CompositionFingerprint,
  LayoutMode,
  ContainerTreatment,
  GroupingTreatment,
  ItemPresentation,
  StyleLanguageConfig,
} from './core/adaptive/types';

