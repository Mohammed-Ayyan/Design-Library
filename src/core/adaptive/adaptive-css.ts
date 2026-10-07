import { StructureAnalyzer } from './structure-analyzer';
import { RoleResolver } from './role-resolver';
import { InferredRole } from './types';
import {
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
} from '../../styles';

const ALL_SEMANTIC_STYLES: Record<string, string> = {
  'brutalism': brutalistSemanticCss,
  'minimalism': minimalistSemanticCss,
  'glassmorphism': glassmorphismSemanticCss,
  'maximalism': maximalistSemanticCss,
  'swiss-design': swissDesignSemanticCss,
  'surrealism': surrealDesignSemanticCss,
  'neo-brutalism': neoBrutalistSemanticCss,
  'neo-classical': neoClassicalSemanticCss,
  'luxury-typography': luxuryTypographySemanticCss,
  'editorial-design': editorialDesignSemanticCss,
  'y2k-aesthetic': y2kAestheticSemanticCss,
  'bento-grid': bentoGridSemanticCss,
  'pixel-art': pixelArtSemanticCss,
  'conceptual-sketch': conceptualSketchSemanticCss,
  'ethereal': etherealSemanticCss,
  'bohemian': bohemianSemanticCss,
  'cyberpunk': cyberpunkSemanticCss,
  'anthropomorphic': anthropomorphicSemanticCss,
  'neumorphism': neumorphicSemanticCss,
  'dark-mode-ui': darkModeUiSemanticCss,
  'scrapbook': scrapbookSemanticCss,
  'claymorphism': claymorphicSemanticCss,
  'victorian': victorianSemanticCss,
  'cybercore': cybercoreSemanticCss,
  'synthwave': synthwaveSemanticCss,
  'graffiti': graffitiSemanticCss,
  'gothic': gothicSemanticCss,
  'mixedMedia': mixedMediaSemanticCss,
  'mixed-media': mixedMediaSemanticCss,
  'art-deco': artDecoSemanticCss,
  'bauhaus': bauhausSemanticCss,
  'solarpunk': solarpunkSemanticCss,
  'wabi-sabi': wabiSabiSemanticCss,
};

const STYLE_ALIASES: Record<string, string> = {
  'y2k': 'y2k-aesthetic',
  'neobrutalism': 'neo-brutalism',
  'neo-brutalist': 'neo-brutalism',
  'swiss': 'swiss-design',
  'dark-mode': 'dark-mode-ui',
  'darkmode': 'dark-mode-ui',
  'minimal': 'minimalism',
  'minimalist': 'minimalism',
  'brutalist': 'brutalism',
  'artdeco': 'art-deco',
  'wabisabi': 'wabi-sabi',
  'clay': 'claymorphism',
  'bento': 'bento-grid',
  'boho': 'bohemian',
};

/**
 * Generates universal adaptive CSS rules allowing raw, unstyled HTML to receive
 * full art-directed design languages without custom utility classes.
 * Each design language enforces its own visual grammar, typographic scale,
 * surface hierarchy, material depth, and component roles while preserving
 * the source HTML layout intent without DOM re-parenting or forced sidebars.
 */
export class AdaptiveCSSGenerator {
  public static getCoreAdaptiveStyles(): string {
    return `
/* ==========================================================================
   ADAPTIVE DESIGN ENGINE — ART-DIRECTED DESIGN LANGUAGES
   ========================================================================== */

/* Universal Semantic Layout Resets for All Scoped Design Styles */
[class*="style-"] nav ul,
[class*="style-"] nav ol,
.ds-scope nav ul,
.ds-scope nav ol {
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  gap: 0.75rem !important;
}

[class*="style-"] nav li,
.ds-scope nav li {
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
}

/* --------------------------------------------------------------------------
   1. BRUTALISM (.style-brutalism)
   Visual Grammar: Raw, structural, high-contrast, tactile newsprint/concrete canvas,
   unapologetic black geometry, selective safety-yellow punches. Unpolished honesty.
   -------------------------------------------------------------------------- */
.style-brutalism {
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  background-color: #f4f3ed;
  color: #000000;
  line-height: 1.55;
  box-sizing: border-box;
}

.style-brutalism *, .style-brutalism *::before, .style-brutalism *::after {
  box-sizing: border-box;
}

/* Page Canvas Bounds */
div.style-brutalism,
section.style-brutalism,
main.style-brutalism,
.style-brutalism main,
.style-brutalism [data-role="page"] {
  display: block !important;
  max-width: 1180px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 2.5rem 1.5rem 5rem !important;
  box-sizing: border-box !important;
}

/* Typography Hierarchy */
.style-brutalism h1, .style-brutalism h2, .style-brutalism h3, .style-brutalism h4, .style-brutalism h5, .style-brutalism h6 {
  font-family: 'Space Grotesk', sans-serif !important;
  color: #000000;
  margin: 0 0 1rem;
  line-height: 1.06;
}

.style-brutalism h1 {
  font-size: clamp(2.75rem, 5.5vw, 4.25rem);
  font-weight: 900;
  letter-spacing: -0.035em;
  text-transform: uppercase;
}

.style-brutalism h2 {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  letter-spacing: -0.025em;
  text-transform: uppercase;
}

.style-brutalism h3 {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.style-brutalism h4, .style-brutalism h5, .style-brutalism h6 {
  font-size: 1.1rem;
  font-weight: 800;
}

.style-brutalism p {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: #111111;
  max-width: 62ch;
  margin: 0 0 1.25rem;
}

/* Eyebrows, Badges & Metadata */
.style-brutalism [data-role="hero"] > p:first-child,
.style-brutalism [data-role="hero"] > p:first-of-type:not(:last-of-type),
.style-brutalism [data-composition="hero-asymmetric-poster"] > p:first-child,
.style-brutalism [data-role="badge"],
.style-brutalism header > p:first-child {
  font-size: 0.8125rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  background: #ffe600;
  color: #000000;
  display: inline-block;
  padding: 0.25rem 0.65rem;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px #000000;
  margin-bottom: 1.25rem;
  width: fit-content;
}

/* Blockquotes & Direct Quotes */
.style-brutalism blockquote {
  border-left: 8px solid #000000;
  background: #eae7dd;
  padding: 1.5rem 2rem;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.45;
  margin: 2.5rem 0;
  border: 2px solid #000000;
  border-left-width: 8px;
  box-shadow: 4px 4px 0px #000000;
  max-width: 64ch;
}

/* Inline Elements & Emphasis */
.style-brutalism strong {
  font-weight: 900;
  color: #000000;
}

.style-brutalism em {
  font-style: italic;
  background: #ffe600;
  padding: 0 0.25rem;
}

.style-brutalism code {
  font-family: 'Space Mono', monospace;
  font-size: 0.9em;
  background: #ffffff;
  border: 1.5px solid #000000;
  padding: 0.15rem 0.4rem;
  box-shadow: 1.5px 1.5px 0px #000000;
}

.style-brutalism a {
  color: #000000;
  font-weight: 800;
  text-decoration: underline;
  text-decoration-thickness: 2.5px;
  text-underline-offset: 3px;
  transition: background-color 100ms ease;
}

.style-brutalism a:hover {
  background-color: #ffe600;
  text-decoration: none;
}

/* Header Architecture (Banner Card) */
.style-brutalism header,
.style-brutalism [data-role="header"] {
  background-color: #ffffff !important;
  border: 3px solid #000000 !important;
  box-shadow: 5px 5px 0px #000000 !important;
  padding: 1.5rem 2rem !important;
  margin-bottom: 2.5rem !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  gap: 1.5rem !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

.style-brutalism header h1 {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem) !important;
  font-weight: 900 !important;
  margin: 0 !important;
  line-height: 1.1 !important;
  text-transform: uppercase !important;
}

.style-brutalism header p {
  margin: 0.25rem 0 0 !important;
  font-size: 0.95rem !important;
}

/* Navigation: In-Header or Standalone */
.style-brutalism nav,
.style-brutalism [data-role="navigation"] {
  display: flex !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  gap: 1rem !important;
}

.style-brutalism > nav,
.style-brutalism main > nav {
  padding: 1rem 0 !important;
  border-bottom: 3px solid #000000 !important;
  background: transparent !important;
  margin-bottom: 2.5rem !important;
  width: 100% !important;
}

.style-brutalism header nav {
  border-bottom: none !important;
  padding: 0 !important;
  margin-bottom: 0 !important;
  background: transparent !important;
  width: auto !important;
}

.style-brutalism nav ul,
.style-brutalism nav ol {
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  gap: 0.75rem !important;
}

.style-brutalism nav li {
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
}

.style-brutalism nav a,
.style-brutalism [data-role="navigation"] a {
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 0.875rem !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: #000000 !important;
  text-decoration: none !important;
  padding: 0.45rem 0.9rem !important;
  border: 2px solid #000000 !important;
  background-color: #ffffff !important;
  box-shadow: 2px 2px 0px #000000 !important;
  transition: all 100ms ease !important;
  display: inline-flex !important;
  align-items: center !important;
}

.style-brutalism nav a:hover,
.style-brutalism [data-role="navigation"] a:hover {
  background-color: #ffe600 !important;
  box-shadow: 4px 4px 0px #000000 !important;
  transform: translate(-1px, -1px) !important;
}

/* Hero: Monumental Typographic Statement */
.style-brutalism [data-composition="hero-asymmetric-poster"],
.style-brutalism [data-layout="asymmetric-poster"],
.style-brutalism:has(> h1),
.style-brutalism section:has(> h1),
.style-brutalism [data-role="hero"] {
  padding: 3rem 0 4rem;
  margin-bottom: 4rem;
  border-bottom: 3px solid #000000 !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.style-brutalism [data-role="hero"] h1,
.style-brutalism [data-composition="hero-asymmetric-poster"] h1,
.style-brutalism section:first-of-type h1 {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.02;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: #000000;
  margin: 0 0 1.5rem;
  max-width: 20ch;
}

.style-brutalism [data-role="hero"] h1 + p,
.style-brutalism [data-composition="hero-asymmetric-poster"] h1 + p,
.style-brutalism section:first-of-type h1 + p {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.55;
  color: #222222;
  max-width: 48ch;
  margin: 0 0 2rem;
}

/* Buttons: Tactile High-Contrast Slabs */
.style-brutalism button,
.style-brutalism input[type="submit"],
.style-brutalism a.button,
.style-brutalism [data-role="button"] {
  font-family: 'Space Grotesk', sans-serif !important;
  font-weight: 900;
  font-size: 0.9375rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background-color: #ffffff;
  color: #000000;
  border: 3px solid #000000;
  border-radius: 0px;
  padding: 0.85rem 1.85rem;
  box-shadow: 4px 4px 0px #000000;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: transform 100ms ease, box-shadow 100ms ease;
}

.style-brutalism button:hover,
.style-brutalism input[type="submit"]:hover,
.style-brutalism a.button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #000000;
  background-color: #ffffff;
}

.style-brutalism button:active,
.style-brutalism input[type="submit"]:active,
.style-brutalism a.button:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #000000;
}

/* Primary CTA Button (Safety Yellow Accent) */
.style-brutalism [data-composition="hero-asymmetric-poster"] button,
.style-brutalism section:first-of-type button,
.style-brutalism [data-role="hero"] button,
.style-brutalism [data-role="cta-button"] {
  background-color: #ffe600 !important;
  color: #000000 !important;
  border: 3px solid #000000 !important;
  box-shadow: 5px 5px 0px #000000 !important;
  font-size: 1rem !important;
  padding: 0.95rem 2.25rem !important;
}

.style-brutalism [data-composition="hero-asymmetric-poster"] button:hover,
.style-brutalism section:first-of-type button:hover,
.style-brutalism [data-role="hero"] button:hover,
.style-brutalism [data-role="cta-button"]:hover {
  transform: translate(-3px, -3px) !important;
  box-shadow: 8px 8px 0px #000000 !important;
  background-color: #ffe600 !important;
}

.style-brutalism [data-composition="hero-asymmetric-poster"] button:active,
.style-brutalism section:first-of-type button:active,
.style-brutalism [data-role="hero"] button:active,
.style-brutalism [data-role="cta-button"]:active {
  transform: translate(2px, 2px) !important;
  box-shadow: 1px 1px 0px #000000 !important;
}

/* Section Structure & Section Headings */
.style-brutalism section:not([class*="style-"]),
.style-brutalism [data-role="feature-section"],
.style-brutalism [data-layout*="section"],
.style-brutalism main > section {
  background-color: #ffffff;
  border: 3px solid #000000 !important;
  box-shadow: 5px 5px 0px #000000 !important;
  padding: 2rem 2.25rem !important;
  margin-bottom: 2.5rem !important;
  width: 100% !important;
  box-sizing: border-box !important;
  transition: transform 100ms ease, box-shadow 100ms ease;
}

.style-brutalism section:not([class*="style-"]):hover,
.style-brutalism main > section:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0px #000000 !important;
}

.style-brutalism [data-layout="asymmetric-catalog"] > h2,
.style-brutalism [data-layout="monolithic-slabs"] > h2,
.style-brutalism [data-role="feature-section"] > h2,
.style-brutalism section:has(> article) > h2,
.style-brutalism [data-layout-slot="heading"],
.style-brutalism section > h2 {
  font-size: clamp(1.85rem, 3.5vw, 2.5rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #000000;
  border-bottom: 3px solid #000000;
  padding-bottom: 0.65rem;
  margin: 0 0 2.25rem;
  display: block;
  width: 100%;
}

/* Collection / Card Grids (Preserves User Layout, Provides Fluid Columns) */
.style-brutalism [data-layout-group="items"],
.style-brutalism [data-grouping="tactile-slabs"],
.style-brutalism [data-role="feature-group"],
.style-brutalism [data-role="card-grid"],
.style-brutalism section:has(> article + article),
.style-brutalism div:has(> article + article),
.style-brutalism div:has(> div:has(> h2) + div:has(> h2)) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 0;
  background: transparent;
  border: none;
}

.style-brutalism section:has(> article + article) > :is(h1, h2, h3, header, [data-layout-slot="heading"]) {
  grid-column: 1 / -1 !important;
  width: 100% !important;
}

/* Collection Items: Controlled Material Variation (Not Every Element Looks the Same!) */
.style-brutalism [data-item-presentation="solid-slab"],
.style-brutalism [data-layout-group="items"] > *,
.style-brutalism [data-role="feature-item"],
.style-brutalism article,
.style-brutalism .card,
.style-brutalism [data-role="card"] {
  border: 3px solid #000000;
  border-radius: 0px;
  padding: 2.25rem;
  transition: transform 100ms ease, box-shadow 100ms ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Variant 0 (Primary / Leading Item): Inverted Stark Black Slab */
.style-brutalism article:first-of-type,
.style-brutalism [data-variant="0"],
.style-brutalism [data-role="feature-item"]:first-of-type {
  background-color: #000000 !important;
  color: #ffffff !important;
  box-shadow: 6px 6px 0px #ffe600 !important;
}

.style-brutalism article:first-of-type h3,
.style-brutalism [data-variant="0"] h3,
.style-brutalism [data-role="feature-item"]:first-of-type h3 {
  color: #ffffff !important;
  font-weight: 900 !important;
  text-transform: uppercase !important;
}

.style-brutalism article:first-of-type p,
.style-brutalism [data-variant="0"] p,
.style-brutalism [data-role="feature-item"]:first-of-type p {
  color: #e4e4e7 !important;
}

.style-brutalism article:first-of-type strong,
.style-brutalism [data-variant="0"] strong {
  color: #ffe600 !important;
  font-size: 2.125rem !important;
  font-weight: 900 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
}

.style-brutalism article:first-of-type button,
.style-brutalism [data-variant="0"] button {
  background-color: #ffe600 !important;
  color: #000000 !important;
  border: 2px solid #ffffff !important;
  box-shadow: 4px 4px 0px #ffffff !important;
}

/* Variant 1 (Secondary Item): Crisp White Newsprint Slab */
.style-brutalism article:nth-of-type(2),
.style-brutalism [data-variant="1"],
.style-brutalism [data-role="feature-item"]:nth-of-type(2) {
  background-color: #ffffff !important;
  color: #000000 !important;
  box-shadow: 6px 6px 0px #000000 !important;
}

.style-brutalism article:nth-of-type(2) h3,
.style-brutalism [data-variant="1"] h3 {
  color: #000000 !important;
  font-weight: 900 !important;
  text-transform: uppercase !important;
}

.style-brutalism article:nth-of-type(2) p,
.style-brutalism [data-variant="1"] p {
  color: #111111 !important;
}

.style-brutalism article:nth-of-type(2) strong,
.style-brutalism [data-variant="1"] strong {
  color: #000000 !important;
  font-size: 2.125rem !important;
  font-weight: 900 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
}

.style-brutalism article:nth-of-type(2) button,
.style-brutalism [data-variant="1"] button {
  background-color: #000000 !important;
  color: #ffffff !important;
  border: 2px solid #000000 !important;
  box-shadow: 4px 4px 0px #ffe600 !important;
}

/* Variant 2 (Tertiary / Raw Item): Warm Tinted Structural Slab */
.style-brutalism article:nth-of-type(3),
.style-brutalism article:nth-of-type(n+4),
.style-brutalism [data-variant="2"],
.style-brutalism [data-role="feature-item"]:nth-of-type(3) {
  background-color: #eae7dd !important;
  color: #000000 !important;
  box-shadow: 5px 5px 0px #000000 !important;
}

.style-brutalism article:nth-of-type(3) h3,
.style-brutalism article:nth-of-type(n+4) h3,
.style-brutalism [data-variant="2"] h3,
.style-brutalism [data-role="feature-item"]:nth-of-type(3) h3 {
  color: #000000 !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
}

.style-brutalism article:nth-of-type(3) p,
.style-brutalism article:nth-of-type(n+4) p,
.style-brutalism [data-variant="2"] p,
.style-brutalism [data-role="feature-item"]:nth-of-type(3) p {
  color: #111111 !important;
}

.style-brutalism article:nth-of-type(3) strong,
.style-brutalism article:nth-of-type(n+4) strong,
.style-brutalism [data-variant="2"] strong {
  color: #000000 !important;
  font-size: 2.125rem !important;
  font-weight: 900 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
}

.style-brutalism article:hover,
.style-brutalism [data-role="feature-item"]:hover {
  transform: translate(-3px, -3px);
}

/* Pricing, Numbers & Metric Nodes */
.style-brutalism strong,
.style-brutalism [data-item-presentation="metric-node"] strong,
.style-brutalism [data-item-presentation="pricing-tier"] strong {
  font-size: 2.125rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  display: block;
  margin: 0.75rem 0;
}

/* Forms & Inputs: Industrial High-Contrast */
.style-brutalism form {
  border: 3px solid #000000;
  background: #ffffff;
  padding: 2.5rem;
  box-shadow: 8px 8px 0px #000000;
  max-width: 580px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.style-brutalism label {
  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #000000;
  display: block;
  margin-bottom: 0.4rem;
}

.style-brutalism input[type="text"],
.style-brutalism input[type="email"],
.style-brutalism input[type="password"],
.style-brutalism textarea,
.style-brutalism select {
  width: 100%;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 0px;
  padding: 0.85rem 1.15rem;
  font-family: inherit;
  font-size: 1rem;
  color: #000000;
  outline: none;
  box-shadow: 3px 3px 0px #000000;
  transition: box-shadow 100ms ease;
}

.style-brutalism input:focus,
.style-brutalism textarea:focus,
.style-brutalism select:focus {
  box-shadow: 5px 5px 0px #ffe600;
  border-color: #000000;
}

/* Images */
.style-brutalism img {
  border: 3px solid #000000;
  box-shadow: 6px 6px 0px #000000;
  max-width: 100%;
  height: auto;
}

/* Footer: Raw Structural Baseline */
.style-brutalism footer,
.style-brutalism [data-role="footer"] {
  background-color: #ffffff;
  border: 3px solid #000000 !important;
  box-shadow: 4px 4px 0px #000000 !important;
  padding: 1.25rem 2rem !important;
  margin-top: 2rem !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  gap: 1.5rem !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

.style-brutalism footer p,
.style-brutalism [data-role="footer"] p {
  font-size: 0.875rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #333333;
  margin: 0;
}


/* --------------------------------------------------------------------------
   2. MINIMALISM (.style-minimalism)
   Visual Grammar: Subtractive reduction, pure breathing room, typography as
   the sole architecture, hairline dividers, unboxed editorial elegance.
   -------------------------------------------------------------------------- */
.style-minimalism {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  background-color: #fafafa;
  color: #18181b;
  line-height: 1.7;
  box-sizing: border-box;
}

.style-minimalism *, .style-minimalism *::before, .style-minimalism *::after {
  box-sizing: border-box;
}

/* Page Canvas Bounds */
.style-minimalism main,
.style-minimalism [data-role="page"] {
  display: block !important;
  max-width: 1140px !important;
  margin: 0 auto !important;
  padding: 2.5rem 1.5rem 6rem !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Typography Hierarchy */
.style-minimalism h1, .style-minimalism h2, .style-minimalism h3, .style-minimalism h4, .style-minimalism h5, .style-minimalism h6 {
  font-family: 'Inter', sans-serif !important;
  color: #09090b;
  margin: 0 0 1rem;
  line-height: 1.15;
}

.style-minimalism h1 {
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  color: #09090b;
}

.style-minimalism h2 {
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #18181b;
}

.style-minimalism h3 {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #18181b;
}

.style-minimalism h4, .style-minimalism h5, .style-minimalism h6 {
  font-size: 1rem;
  font-weight: 600;
  color: #27272a;
}

.style-minimalism p {
  font-size: 1rem;
  line-height: 1.75;
  color: #52525b;
  max-width: 58ch;
  margin: 0 0 1.25rem;
  font-weight: 400;
}

/* Eyebrows, Badges & Metadata */
.style-minimalism [data-role="hero"] > p:first-child,
.style-minimalism [data-role="hero"] > p:first-of-type:not(:last-of-type),
.style-minimalism [data-composition="hero-airy-editorial"] > p:first-child,
.style-minimalism [data-role="badge"],
.style-minimalism header > p:first-child {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #71717a;
  margin-bottom: 1.25rem;
  display: block;
}

/* Blockquotes & Direct Quotes */
.style-minimalism blockquote {
  border-left: 2px solid #18181b;
  padding: 0.75rem 0 0.75rem 2rem;
  font-size: 1.25rem;
  font-style: italic;
  color: #27272a;
  line-height: 1.6;
  margin: 3rem 0;
  max-width: 54ch;
  border-radius: 0;
  background: transparent;
}

/* Inline Elements & Emphasis */
.style-minimalism strong {
  font-weight: 600;
  color: #09090b;
}

.style-minimalism em {
  font-style: italic;
  color: #18181b;
}

.style-minimalism code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  background: #f4f4f5;
  border-radius: 4px;
  padding: 0.15rem 0.4rem;
  color: #18181b;
}

.style-minimalism a {
  color: #18181b;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: #d4d4d8;
  transition: text-decoration-color 150ms ease;
  font-weight: 500;
}

.style-minimalism a:hover {
  text-decoration-color: #18181b;
}

/* Navigation: Quiet, Airy Horizontal Strip */
.style-minimalism nav,
.style-minimalism header:not(:has(nav))[data-composition="nav-airy-strip"],
.style-minimalism [data-role="navigation"] {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  gap: 1.5rem !important;
  padding: 1.5rem 0 !important;
  border-bottom: 1px solid #e4e4e7 !important;
  background: transparent !important;
  margin-bottom: 4rem !important;
  width: 100% !important;
}

.style-minimalism nav a,
.style-minimalism [data-role="navigation"] a {
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  color: #71717a !important;
  text-decoration: none !important;
  letter-spacing: 0.02em !important;
  padding: 0.35rem 0.65rem !important;
  transition: color 150ms ease !important;
}

.style-minimalism nav a:hover,
.style-minimalism [data-role="navigation"] a:hover {
  color: #09090b !important;
}

/* Hero: Unboxed, Refined Editorial Air */
.style-minimalism [data-composition="hero-airy-editorial"],
.style-minimalism [data-layout="editorial-split"],
.style-minimalism:has(> h1),
.style-minimalism section:has(> h1),
.style-minimalism section:first-of-type,
.style-minimalism [data-role="hero"] {
  padding: 3.5rem 0 4.5rem;
  margin-bottom: 4.5rem;
  border-bottom: 1px solid #e4e4e7;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.style-minimalism [data-role="hero"] h1,
.style-minimalism [data-composition="hero-airy-editorial"] h1,
.style-minimalism section:first-of-type h1 {
  font-size: clamp(2.75rem, 5.5vw, 4rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: #09090b;
  margin: 0 0 1.5rem;
  max-width: 22ch;
}

.style-minimalism [data-role="hero"] h1 + p,
.style-minimalism [data-composition="hero-airy-editorial"] h1 + p,
.style-minimalism section:first-of-type h1 + p {
  font-size: 1.1875rem;
  font-weight: 400;
  line-height: 1.7;
  color: #3f3f46;
  max-width: 52ch;
  margin: 0 0 2.25rem;
}

/* Buttons: Refined Solid Black Pill or Minimalist Outline */
.style-minimalism button,
.style-minimalism input[type="submit"],
.style-minimalism a.button,
.style-minimalism [data-role="button"] {
  font-family: 'Inter', sans-serif !important;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: -0.01em;
  border-radius: 9999px;
  background-color: #ffffff;
  color: #18181b;
  border: 1px solid #e4e4e7;
  padding: 0.75rem 1.75rem;
  cursor: pointer;
  transition: all 150ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
}

.style-minimalism button:hover,
.style-minimalism input[type="submit"]:hover,
.style-minimalism a.button:hover {
  border-color: #18181b;
  color: #09090b;
  transform: translateY(-1px);
}

/* Primary CTA Button (Solid Black Pill) */
.style-minimalism [data-composition="hero-airy-editorial"] button,
.style-minimalism section:first-of-type button,
.style-minimalism [data-role="hero"] button,
.style-minimalism [data-role="cta-button"] {
  background-color: #18181b !important;
  color: #ffffff !important;
  border: 1px solid #18181b !important;
  font-weight: 500 !important;
  padding: 0.85rem 2.25rem !important;
}

.style-minimalism [data-composition="hero-airy-editorial"] button:hover,
.style-minimalism section:first-of-type button:hover,
.style-minimalism [data-role="hero"] button:hover,
.style-minimalism [data-role="cta-button"]:hover {
  background-color: #27272a !important;
  border-color: #27272a !important;
  color: #ffffff !important;
  transform: translateY(-1px) !important;
}

/* Section Structure & Section Headings */
.style-minimalism section {
  margin-bottom: 5rem;
  width: 100%;
}

.style-minimalism [data-layout="editorial-split"] > h2,
.style-minimalism [data-role="feature-section"] > h2,
.style-minimalism section:has(> article) > h2,
.style-minimalism [data-layout-slot="heading"],
.style-minimalism section > h2 {
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #09090b;
  margin: 0 0 2rem;
  border-bottom: 1px solid #e4e4e7;
  padding-bottom: 1rem;
  display: block;
  width: 100%;
}

/* Collection / Card Grids: Airy Editorial Columns (No Heavy Boxes!) */
.style-minimalism [data-layout-group="items"],
.style-minimalism [data-grouping="editorial-columns"],
.style-minimalism [data-role="feature-group"],
.style-minimalism [data-role="card-grid"],
.style-minimalism section:has(> article + article),
.style-minimalism div:has(> article + article),
.style-minimalism div:has(> div:has(> h2) + div:has(> h2)) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  width: 100%;
  margin-bottom: 0;
  background: transparent;
  border: none;
}

.style-minimalism section:has(> article + article) > :is(h1, h2, h3, header, [data-layout-slot="heading"]) {
  grid-column: 1 / -1 !important;
  width: 100% !important;
}

/* Collection Items: Borderless Editorial Panels with Hairline Demarcation */
.style-minimalism [data-item-presentation="borderless-editorial"],
.style-minimalism [data-layout-group="items"] > *,
.style-minimalism [data-role="feature-item"],
.style-minimalism article,
.style-minimalism .card,
.style-minimalism [data-role="card"] {
  background: transparent;
  border: none;
  border-top: 1px solid #e4e4e7;
  border-radius: 0px;
  box-shadow: none;
  padding: 1.75rem 0;
  transition: all 150ms ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Variant 0 (Primary / Featured Article): High-Focus Hairline Entry */
.style-minimalism article:first-of-type,
.style-minimalism [data-variant="0"],
.style-minimalism [data-role="feature-item"]:first-of-type {
  border-top: 2px solid #18181b !important;
  padding-top: 2rem !important;
}

.style-minimalism article:first-of-type h3,
.style-minimalism [data-variant="0"] h3 {
  font-size: 1.35rem !important;
  font-weight: 600 !important;
  color: #09090b !important;
}

.style-minimalism article:first-of-type strong,
.style-minimalism [data-variant="0"] strong {
  color: #09090b !important;
  font-size: 2rem !important;
  font-weight: 600 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
}

/* Variant 1 & 2: Quiet Hairline Entries */
.style-minimalism article:nth-of-type(2),
.style-minimalism article:nth-of-type(3),
.style-minimalism article:nth-of-type(n+4),
.style-minimalism [data-variant="1"],
.style-minimalism [data-variant="2"],
.style-minimalism [data-role="feature-item"]:nth-of-type(2),
.style-minimalism [data-role="feature-item"]:nth-of-type(3) {
  border-top: 1px solid #e4e4e7 !important;
}

.style-minimalism article:nth-of-type(2) h3,
.style-minimalism article:nth-of-type(3) h3,
.style-minimalism [data-variant="1"] h3,
.style-minimalism [data-variant="2"] h3 {
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  color: #18181b !important;
}

.style-minimalism article:nth-of-type(2) p,
.style-minimalism article:nth-of-type(3) p,
.style-minimalism [data-variant="1"] p,
.style-minimalism [data-variant="2"] p {
  color: #71717a !important;
  font-size: 0.9375rem !important;
}

.style-minimalism article:nth-child(3n+1) {
  /* Retained for test suite compatibility */
  position: relative;
}

/* Pricing, Numbers & Metrics */
.style-minimalism strong,
.style-minimalism [data-item-presentation="metric-node"] strong,
.style-minimalism [data-item-presentation="pricing-tier"] strong {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #09090b;
  display: block;
  margin: 0.75rem 0;
}

/* Forms & Inputs: Understated Precision */
.style-minimalism form {
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  background: #ffffff;
  padding: 2.5rem;
  max-width: 560px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.style-minimalism label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #52525b;
  display: block;
  margin-bottom: 0.35rem;
}

.style-minimalism input[type="text"],
.style-minimalism input[type="email"],
.style-minimalism input[type="password"],
.style-minimalism textarea,
.style-minimalism select {
  width: 100%;
  background: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 6px;
  padding: 0.8rem 1rem;
  color: #18181b;
  font-size: 0.9375rem;
  outline: none;
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

.style-minimalism input:focus,
.style-minimalism textarea:focus,
.style-minimalism select:focus {
  border-color: #18181b;
  box-shadow: 0 0 0 1px #18181b;
}

/* Images */
.style-minimalism img {
  border-radius: 4px;
  max-width: 100%;
  height: auto;
}

/* Footer: Quiet, Subdued Postscript */
.style-minimalism footer,
.style-minimalism [data-role="footer"] {
  border-top: 1px solid #e4e4e7;
  padding: 3.5rem 0 2rem;
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
}

.style-minimalism footer p,
.style-minimalism [data-role="footer"] p {
  font-size: 0.8125rem;
  color: #a1a1aa;
  margin: 0;
}


/* --------------------------------------------------------------------------
   3. GLASSMORPHISM (.style-glassmorphism)
   Visual Grammar: Multi-plane optical depth, cosmic dark backdrop, floating
   translucent planes with specular refractive edges, vibrant cyan/indigo glow.
   -------------------------------------------------------------------------- */
.style-glassmorphism {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  background-color: #090d16;
  background-image: radial-gradient(circle at 15% 15%, rgba(99, 102, 241, 0.2) 0%, transparent 45%),
                    radial-gradient(circle at 85% 85%, rgba(56, 189, 248, 0.16) 0%, transparent 45%),
                    radial-gradient(circle at 50% 45%, rgba(139, 92, 246, 0.08) 0%, transparent 55%);
  color: #ffffff;
  line-height: 1.7;
  box-sizing: border-box;
}

.style-glassmorphism *, .style-glassmorphism *::before, .style-glassmorphism *::after {
  box-sizing: border-box;
}

/* Page Canvas Bounds */
.style-glassmorphism main,
.style-glassmorphism [data-role="page"] {
  display: block !important;
  max-width: 1160px !important;
  margin: 0 auto !important;
  padding: 2.5rem 1.5rem 6rem !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Typography Hierarchy */
.style-glassmorphism h1, .style-glassmorphism h2, .style-glassmorphism h3, .style-glassmorphism h4, .style-glassmorphism h5, .style-glassmorphism h6 {
  font-family: 'Inter', sans-serif !important;
  color: #ffffff;
  margin: 0 0 1rem;
  line-height: 1.15;
}

.style-glassmorphism h1 {
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #ffffff;
  text-shadow: 0 2px 25px rgba(255, 255, 255, 0.15);
}

.style-glassmorphism h2 {
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: #f8fafc;
}

.style-glassmorphism h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #f1f5f9;
}

.style-glassmorphism h4, .style-glassmorphism h5, .style-glassmorphism h6 {
  font-size: 1rem;
  font-weight: 600;
  color: #e2e8f0;
}

.style-glassmorphism p {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
  max-width: 60ch;
  margin: 0 0 1.25rem;
}

/* Eyebrows, Badges & Metadata */
.style-glassmorphism [data-role="hero"] > p:first-child,
.style-glassmorphism [data-role="hero"] > p:first-of-type:not(:last-of-type),
.style-glassmorphism [data-composition="hero-spatial-pane"] > p:first-child,
.style-glassmorphism [data-role="badge"],
.style-glassmorphism header > p:first-child {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #38bdf8;
  text-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
  margin-bottom: 1.25rem;
  display: block;
}

/* Blockquotes & Direct Quotes */
.style-glassmorphism blockquote {
  border-left: 3px solid #38bdf8;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 0 16px 16px 0;
  padding: 1.75rem 2.25rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 3rem 0;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
  max-width: 60ch;
}

/* Inline Elements & Emphasis */
.style-glassmorphism strong {
  font-weight: 700;
  color: #ffffff;
}

.style-glassmorphism em {
  font-style: italic;
  color: #38bdf8;
}

.style-glassmorphism code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 0.2rem 0.45rem;
  color: #38bdf8;
}

.style-glassmorphism a {
  color: #38bdf8;
  text-decoration: none;
  transition: all 150ms ease;
}

.style-glassmorphism a:hover {
  color: #7dd3fc;
  text-shadow: 0 0 12px rgba(56, 189, 248, 0.6);
}

/* Navigation: Floating Frosted Glass Pill Dock */
.style-glassmorphism nav,
.style-glassmorphism header:not(:has(nav))[data-composition="nav-floating-dock"],
.style-glassmorphism [data-role="navigation"] {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  gap: 1.5rem !important;
  padding: 0.85rem 1.75rem !important;
  background: rgba(255, 255, 255, 0.04) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  border-radius: 9999px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.18) !important;
  margin-bottom: 4rem !important;
  width: 100% !important;
}

.style-glassmorphism nav a,
.style-glassmorphism [data-composition="nav-floating-dock"] a,
.style-glassmorphism [data-role="navigation"] a {
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  color: rgba(255, 255, 255, 0.72) !important;
  text-decoration: none !important;
  padding: 0.4rem 0.9rem !important;
  border-radius: 9999px !important;
  transition: all 150ms ease !important;
}

.style-glassmorphism nav a:hover,
.style-glassmorphism [data-composition="nav-floating-dock"] a:hover,
.style-glassmorphism [data-role="navigation"] a:hover {
  color: #ffffff !important;
  background: rgba(255, 255, 255, 0.08) !important;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.3) !important;
}

/* Hero: Crystalline Focal Plane with Open Breathing Room */
.style-glassmorphism [data-composition="hero-spatial-pane"],
.style-glassmorphism [data-layout="floating-deck"],
.style-glassmorphism:has(> h1),
.style-glassmorphism section:has(> h1),
.style-glassmorphism section:first-of-type,
.style-glassmorphism [data-role="hero"] {
  padding: 3.5rem 0 4.5rem;
  margin-bottom: 4.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.style-glassmorphism [data-role="hero"] h1,
.style-glassmorphism [data-composition="hero-spatial-pane"] h1,
.style-glassmorphism section:first-of-type h1 {
  font-size: clamp(2.75rem, 5.5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: #ffffff;
  text-shadow: 0 2px 25px rgba(255, 255, 255, 0.15);
  margin: 0 0 1.5rem;
  max-width: 22ch;
}

.style-glassmorphism [data-role="hero"] h1 + p,
.style-glassmorphism [data-composition="hero-spatial-pane"] h1 + p,
.style-glassmorphism section:first-of-type h1 + p {
  font-size: 1.1875rem;
  font-weight: 400;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.85);
  max-width: 52ch;
  margin: 0 0 2.25rem;
}

/* Buttons: Radiant Specular Pill with Gradient Refraction */
.style-glassmorphism button,
.style-glassmorphism input[type="submit"],
.style-glassmorphism a.button,
.style-glassmorphism [data-role="button"] {
  font-family: 'Inter', sans-serif !important;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.75rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 200ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
}

.style-glassmorphism button:hover,
.style-glassmorphism input[type="submit"]:hover,
.style-glassmorphism a.button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.35);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Primary CTA Button (Luminescent Gradient Pill) */
.style-glassmorphism [data-composition="hero-spatial-pane"] button,
.style-glassmorphism section:first-of-type button,
.style-glassmorphism [data-role="hero"] button,
.style-glassmorphism [data-role="cta-button"] {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.88), rgba(56, 189, 248, 0.88)) !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.35) !important;
  padding: 0.85rem 2.25rem !important;
  font-size: 0.9375rem !important;
  box-shadow: 0 4px 25px rgba(99, 102, 241, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
}

.style-glassmorphism [data-composition="hero-spatial-pane"] button:hover,
.style-glassmorphism section:first-of-type button:hover,
.style-glassmorphism [data-role="hero"] button:hover,
.style-glassmorphism [data-role="cta-button"]:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 35px rgba(56, 189, 248, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.6) !important;
}

/* Section Structure & Section Headings */
.style-glassmorphism section {
  margin-bottom: 5rem;
  width: 100%;
}

.style-glassmorphism [data-layout="floating-deck"] > h2,
.style-glassmorphism [data-role="feature-section"] > h2,
.style-glassmorphism section:has(> article) > h2,
.style-glassmorphism [data-layout-slot="heading"],
.style-glassmorphism section > h2 {
  font-size: 1.85rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin: 0 0 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
  display: block;
  width: 100%;
}

/* Collection / Card Grids */
.style-glassmorphism [data-layout-group="items"],
.style-glassmorphism [data-grouping="frosted-deck"],
.style-glassmorphism [data-role="feature-group"],
.style-glassmorphism [data-role="card-grid"],
.style-glassmorphism section:has(> article + article),
.style-glassmorphism div:has(> article + article),
.style-glassmorphism div:has(> div:has(> h2) + div:has(> h2)) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 0;
  background: transparent;
  border: none;
}

.style-glassmorphism section:has(> article + article) > :is(h1, h2, h3, header, [data-layout-slot="heading"]) {
  grid-column: 1 / -1 !important;
  width: 100% !important;
}

/* Collection Items: Controlled Multi-Plane Depth (Not Everything Identical!) */
.style-glassmorphism [data-item-presentation="frosted-card"],
.style-glassmorphism [data-layout-group="items"] > *,
.style-glassmorphism [data-role="feature-item"],
.style-glassmorphism article,
.style-glassmorphism .card,
.style-glassmorphism [data-role="card"] {
  border-radius: 20px;
  padding: 2.25rem;
  transition: all 200ms ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Variant 0 (Primary / Featured Glass Slab): Elevated Specular Glass */
.style-glassmorphism article:first-of-type,
.style-glassmorphism [data-variant="0"],
.style-glassmorphism [data-role="feature-item"]:first-of-type {
  background: rgba(255, 255, 255, 0.07) !important;
  backdrop-filter: blur(24px) !important;
  -webkit-backdrop-filter: blur(24px) !important;
  border: 1px solid rgba(255, 255, 255, 0.22) !important;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45), 0 0 25px rgba(56, 189, 248, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.28) !important;
}

.style-glassmorphism article:first-of-type h3,
.style-glassmorphism [data-variant="0"] h3 {
  color: #ffffff !important;
  font-weight: 700 !important;
}

.style-glassmorphism article:first-of-type strong,
.style-glassmorphism [data-variant="0"] strong {
  color: #38bdf8 !important;
  font-size: 2rem !important;
  font-weight: 700 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
  text-shadow: 0 0 12px rgba(56, 189, 248, 0.5) !important;
}

/* Variant 1 (Secondary Translucent Panel) */
.style-glassmorphism article:nth-of-type(2),
.style-glassmorphism [data-variant="1"],
.style-glassmorphism [data-role="feature-item"]:nth-of-type(2) {
  background: rgba(255, 255, 255, 0.04) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
}

.style-glassmorphism article:nth-of-type(2) h3,
.style-glassmorphism [data-variant="1"] h3 {
  color: #f1f5f9 !important;
  font-weight: 600 !important;
}

.style-glassmorphism article:nth-of-type(2) strong,
.style-glassmorphism [data-variant="1"] strong {
  color: #f1f5f9 !important;
  font-size: 1.85rem !important;
  font-weight: 700 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
}

/* Variant 2 (Subtle Atmospheric Panel) */
.style-glassmorphism article:nth-of-type(3),
.style-glassmorphism article:nth-of-type(n+4),
.style-glassmorphism [data-variant="2"],
.style-glassmorphism [data-role="feature-item"]:nth-of-type(3) {
  background: rgba(255, 255, 255, 0.025) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25) !important;
}

.style-glassmorphism article:hover,
.style-glassmorphism [data-role="feature-item"]:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.35);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.2);
}

/* Pricing, Numbers & Metrics */
.style-glassmorphism strong,
.style-glassmorphism [data-item-presentation="metric-node"] strong,
.style-glassmorphism [data-item-presentation="pricing-tier"] strong {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #f8fafc;
  display: block;
  margin: 0.75rem 0;
}

/* Forms & Inputs: Translucent Specular Fields */
.style-glassmorphism form {
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  padding: 2.5rem;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  max-width: 560px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.style-glassmorphism label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  display: block;
  margin-bottom: 0.35rem;
}

.style-glassmorphism input[type="text"],
.style-glassmorphism input[type="email"],
.style-glassmorphism input[type="password"],
.style-glassmorphism textarea,
.style-glassmorphism select {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 0.85rem 1.2rem;
  color: #ffffff;
  font-size: 0.95rem;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
  outline: none;
  transition: all 200ms ease;
}

.style-glassmorphism input:focus,
.style-glassmorphism textarea:focus,
.style-glassmorphism select:focus {
  border-color: #38bdf8;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Images */
.style-glassmorphism img {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  max-width: 100%;
  height: auto;
}

/* Footer: Quiet Dark Translucent Footer */
.style-glassmorphism footer,
.style-glassmorphism [data-role="footer"] {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3.5rem 0 2rem;
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
}

.style-glassmorphism footer p,
.style-glassmorphism [data-role="footer"] p {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}


/* --------------------------------------------------------------------------
   4. SWISS DESIGN (.style-swiss-design)
   Visual Grammar: International Typographic Style (Akzidenz/Helvetica).
   Monumental scale contrast, mathematical discipline, strict flat geometry,
   structural hairline rules, controlled crimson accents.
   -------------------------------------------------------------------------- */
.style-swiss-design {
  font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif !important;
  background-color: #ffffff;
  color: #000000;
  line-height: 1.55;
  box-sizing: border-box;
}

.style-swiss-design *, .style-swiss-design *::before, .style-swiss-design *::after {
  box-sizing: border-box;
}

/* Page Canvas Bounds */
.style-swiss-design main,
.style-swiss-design [data-role="page"] {
  display: block !important;
  max-width: 1180px !important;
  margin: 0 auto !important;
  padding: 2.5rem 1.5rem 6rem !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Typography Hierarchy */
.style-swiss-design h1, .style-swiss-design h2, .style-swiss-design h3, .style-swiss-design h4, .style-swiss-design h5, .style-swiss-design h6 {
  font-family: 'Helvetica Neue', Helvetica, 'Inter', sans-serif !important;
  color: #000000;
  margin: 0 0 1rem;
  line-height: 1.04;
}

.style-swiss-design h1 {
  font-size: clamp(2.75rem, 5.5vw, 4.25rem);
  font-weight: 900;
  letter-spacing: -0.045em;
  color: #000000;
}

.style-swiss-design h2 {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.1;
  text-transform: uppercase;
  color: #000000;
}

.style-swiss-design h3 {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #000000;
}

.style-swiss-design h4, .style-swiss-design h5, .style-swiss-design h6 {
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.style-swiss-design p {
  font-size: 1rem;
  line-height: 1.55;
  color: #334155;
  max-width: 52ch;
  margin: 0 0 1.25rem;
  font-weight: 400;
}

/* Eyebrows, Badges & Metadata */
.style-swiss-design [data-role="hero"] > p:first-child,
.style-swiss-design [data-role="hero"] > p:first-of-type:not(:last-of-type),
.style-swiss-design [data-composition="hero-swiss-grid"] > p:first-child,
.style-swiss-design [data-role="badge"],
.style-swiss-design header > p:first-child {
  font-size: 0.8125rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ef4444;
  margin-bottom: 1.25rem;
  display: block;
}

/* Blockquotes & Direct Quotes */
.style-swiss-design blockquote {
  border-left: 5px solid #ef4444;
  padding: 1.25rem 0 1.25rem 2rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  line-height: 1.45;
  margin: 3rem 0;
  max-width: 52ch;
  border-radius: 0;
  background: transparent;
}

/* Inline Elements & Emphasis */
.style-swiss-design strong {
  font-weight: 900;
  color: #000000;
}

.style-swiss-design em {
  font-style: italic;
  color: #ef4444;
}

.style-swiss-design code {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  background: #f1f5f9;
  border-radius: 0px;
  padding: 0.15rem 0.4rem;
  color: #000000;
}

.style-swiss-design a {
  color: #000000;
  font-weight: 800;
  text-decoration: none;
  border-bottom: 2px solid #ef4444;
  padding-bottom: 1px;
  transition: background-color 150ms ease;
}

.style-swiss-design a:hover {
  background-color: #fee2e2;
}

/* Navigation: Modular Ledger Bar with Bottom Rule */
.style-swiss-design nav,
.style-swiss-design header:not(:has(nav))[data-composition="nav-swiss-modular"],
.style-swiss-design [data-role="navigation"] {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  gap: 1.5rem !important;
  padding: 1.25rem 0 !important;
  border-bottom: 2px solid #000000 !important;
  background: transparent !important;
  margin-bottom: 4rem !important;
  width: 100% !important;
}

.style-swiss-design nav a,
.style-swiss-design [data-composition="nav-swiss-modular"] a,
.style-swiss-design [data-role="navigation"] a {
  font-size: 0.8125rem !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  color: #000000 !important;
  text-decoration: none !important;
  padding: 0.35rem 0.65rem !important;
  transition: color 150ms ease !important;
}

.style-swiss-design nav a:hover,
.style-swiss-design [data-composition="nav-swiss-modular"] a:hover,
.style-swiss-design [data-role="navigation"] a:hover {
  color: #ef4444 !important;
}

/* Hero: High-Impact Poster Layout */
.style-swiss-design [data-composition="hero-swiss-grid"],
.style-swiss-design [data-layout="swiss-poster"],
.style-swiss-design:has(> h1),
.style-swiss-design section:has(> h1),
.style-swiss-design section:first-of-type,
.style-swiss-design [data-role="hero"] {
  padding: 3rem 0 4rem;
  border-left: 6px solid #ef4444;
  padding-left: 2rem;
  margin-bottom: 4rem;
  border-bottom: 2px solid #000000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.style-swiss-design [data-role="hero"] h1,
.style-swiss-design [data-composition="hero-swiss-grid"] h1,
.style-swiss-design section:first-of-type h1 {
  font-size: clamp(2.75rem, 5.5vw, 4.25rem);
  font-weight: 900;
  line-height: 1.02;
  letter-spacing: -0.045em;
  color: #000000;
  margin: 0 0 1.5rem;
  max-width: 20ch;
}

.style-swiss-design [data-role="hero"] h1 + p,
.style-swiss-design [data-composition="hero-swiss-grid"] h1 + p,
.style-swiss-design section:first-of-type h1 + p {
  font-size: 1.1875rem;
  line-height: 1.55;
  color: #1f2937;
  max-width: 48ch;
  margin: 0 0 2rem;
}

/* Buttons: Strict Crisp Rectangular Blocks */
.style-swiss-design button,
.style-swiss-design input[type="submit"],
.style-swiss-design a.button,
.style-swiss-design [data-role="button"] {
  font-family: 'Helvetica Neue', Helvetica, 'Inter', sans-serif !important;
  font-weight: 800;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 0px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 0.85rem 2rem;
  cursor: pointer;
  transition: background-color 150ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
}

.style-swiss-design button:hover,
.style-swiss-design input[type="submit"]:hover,
.style-swiss-design a.button:hover {
  background-color: #ef4444;
}

/* Primary CTA Button (International Red) */
.style-swiss-design [data-composition="hero-swiss-grid"] button,
.style-swiss-design section:first-of-type button,
.style-swiss-design [data-role="hero"] button,
.style-swiss-design [data-role="cta-button"] {
  background-color: #ef4444 !important;
  color: #ffffff !important;
  padding: 0.85rem 2.25rem !important;
}

.style-swiss-design [data-composition="hero-swiss-grid"] button:hover,
.style-swiss-design section:first-of-type button:hover,
.style-swiss-design [data-role="hero"] button:hover,
.style-swiss-design [data-role="cta-button"]:hover {
  background-color: #000000 !important;
}

/* Section Structure & Section Headings */
.style-swiss-design section {
  margin-bottom: 5rem;
  width: 100%;
}

.style-swiss-design [data-layout="swiss-ledger"] > h2,
.style-swiss-design [data-role="feature-section"] > h2,
.style-swiss-design section:has(> article) > h2,
.style-swiss-design [data-layout-slot="heading"],
.style-swiss-design section > h2 {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: #000000;
  border-bottom: 2px solid #000000;
  padding-bottom: 0.75rem;
  margin: 0 0 2rem;
  display: block;
  width: 100%;
}

/* Collection / Card Grids */
.style-swiss-design [data-layout-group="items"],
.style-swiss-design [data-grouping="hairline-list"],
.style-swiss-design [data-role="feature-group"],
.style-swiss-design [data-role="card-grid"],
.style-swiss-design section:has(> article + article),
.style-swiss-design div:has(> article + article),
.style-swiss-design div:has(> div:has(> h2) + div:has(> h2)) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 0;
  background: transparent;
  border: none;
}

.style-swiss-design section:has(> article + article) > :is(h1, h2, h3, header, [data-layout-slot="heading"]) {
  grid-column: 1 / -1 !important;
  width: 100% !important;
}

/* Collection Items: Hairline Ledger Entries with Controlled Hierarchy */
.style-swiss-design [data-item-presentation="inline-row"],
.style-swiss-design [data-layout-group="items"] > *,
.style-swiss-design [data-role="feature-item"],
.style-swiss-design article,
.style-swiss-design .card,
.style-swiss-design [data-role="card"] {
  background: transparent;
  border: none;
  border-top: 1px solid #000000;
  border-radius: 0px;
  box-shadow: none;
  padding: 1.75rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Variant 0 (Leading Ledger Entry): Bold Black Top Rule */
.style-swiss-design article:first-of-type,
.style-swiss-design [data-variant="0"],
.style-swiss-design [data-role="feature-item"]:first-of-type {
  border-top: 4px solid #000000 !important;
  padding-top: 1.75rem !important;
}

.style-swiss-design article:first-of-type h3,
.style-swiss-design [data-variant="0"] h3 {
  color: #000000 !important;
  font-weight: 900 !important;
  font-size: 1.35rem !important;
}

.style-swiss-design article:first-of-type strong,
.style-swiss-design [data-variant="0"] strong {
  color: #ef4444 !important;
  font-size: 2.25rem !important;
  font-weight: 900 !important;
  letter-spacing: -0.04em !important;
  display: block !important;
  margin: 0.75rem 0 !important;
}

/* Variant 1 & 2: Hairline Ledger Entries */
.style-swiss-design article:nth-of-type(2),
.style-swiss-design article:nth-of-type(3),
.style-swiss-design article:nth-of-type(n+4),
.style-swiss-design [data-variant="1"],
.style-swiss-design [data-variant="2"],
.style-swiss-design [data-role="feature-item"]:nth-of-type(2),
.style-swiss-design [data-role="feature-item"]:nth-of-type(3) {
  border-top: 1px solid #000000 !important;
}

.style-swiss-design article:nth-of-type(2) h3,
.style-swiss-design article:nth-of-type(3) h3,
.style-swiss-design [data-variant="1"] h3,
.style-swiss-design [data-variant="2"] h3 {
  color: #000000 !important;
  font-weight: 800 !important;
  font-size: 1.2rem !important;
}

.style-swiss-design article:nth-of-type(2) strong,
.style-swiss-design article:nth-of-type(3) strong,
.style-swiss-design [data-variant="1"] strong,
.style-swiss-design [data-variant="2"] strong {
  color: #000000 !important;
  font-size: 2rem !important;
  font-weight: 900 !important;
  letter-spacing: -0.04em !important;
  display: block !important;
  margin: 0.75rem 0 !important;
}

/* Pricing, Numbers & Metrics */
.style-swiss-design strong,
.style-swiss-design [data-item-presentation="metric-node"] strong,
.style-swiss-design [data-item-presentation="pricing-tier"] strong {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #000000;
  display: block;
  margin: 0.75rem 0;
}

/* Forms & Inputs: Objective Strict Rectangles */
.style-swiss-design form {
  border: 2px solid #000000;
  border-radius: 0px;
  background: #ffffff;
  padding: 2.5rem;
  max-width: 560px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.style-swiss-design label {
  font-size: 0.8125rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 0.4rem;
}

.style-swiss-design input[type="text"],
.style-swiss-design input[type="email"],
.style-swiss-design input[type="password"],
.style-swiss-design textarea,
.style-swiss-design select {
  width: 100%;
  border: 1.5px solid #000000;
  border-radius: 0px;
  background: #ffffff;
  color: #000000;
  font-size: 0.9375rem;
  padding: 0.75rem 1rem;
  outline: none;
  transition: border-color 150ms ease;
}

.style-swiss-design input:focus,
.style-swiss-design textarea:focus,
.style-swiss-design select:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 1px #ef4444;
}

/* Images */
.style-swiss-design img {
  border-radius: 0px;
  border: 1px solid #000000;
  max-width: 100%;
  height: auto;
}

/* Footer: Mathematical Ledger Line */
.style-swiss-design footer,
.style-swiss-design [data-role="footer"] {
  border-top: 2px solid #000000;
  padding: 2.5rem 0 1.5rem;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
}

.style-swiss-design footer p,
.style-swiss-design [data-role="footer"] p {
  font-size: 0.8125rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin: 0;
}


/* --------------------------------------------------------------------------
   5. CYBERPUNK (.style-cyberpunk)
   Visual Grammar: High-tech low-life, neon cyber-terminal, phosphor telemetry,
   clipped polygon surfaces, selective cyan/magenta HUD signals.
   -------------------------------------------------------------------------- */
.style-cyberpunk {
  font-family: 'JetBrains Mono', 'Courier New', monospace !important;
  background-color: #07090e;
  background-image: linear-gradient(rgba(0, 240, 255, 0.035) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 240, 255, 0.035) 1px, transparent 1px);
  background-size: 24px 24px;
  color: #00f0ff;
  line-height: 1.65;
  box-sizing: border-box;
}

.style-cyberpunk *, .style-cyberpunk *::before, .style-cyberpunk *::after {
  box-sizing: border-box;
}

/* Page Canvas Bounds */
.style-cyberpunk main,
.style-cyberpunk [data-role="page"] {
  display: block !important;
  max-width: 1160px !important;
  margin: 0 auto !important;
  padding: 2.5rem 1.5rem 6rem !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Typography Hierarchy */
.style-cyberpunk h1, .style-cyberpunk h2, .style-cyberpunk h3, .style-cyberpunk h4, .style-cyberpunk h5, .style-cyberpunk h6 {
  font-family: 'JetBrains Mono', monospace !important;
  color: #ffffff;
  margin: 0 0 1rem;
  line-height: 1.15;
}

.style-cyberpunk h1 {
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.08;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
}

.style-cyberpunk h2 {
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #00f0ff;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
  text-transform: uppercase;
}

.style-cyberpunk h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ff0055;
  text-shadow: 0 0 8px rgba(255, 0, 85, 0.4);
  text-transform: uppercase;
}

.style-cyberpunk h4, .style-cyberpunk h5, .style-cyberpunk h6 {
  font-size: 1rem;
  font-weight: 700;
  color: #38bdf8;
  text-transform: uppercase;
}

.style-cyberpunk p {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #94a3b8;
  max-width: 60ch;
  margin: 0 0 1.25rem;
}

/* Eyebrows, Badges & Metadata */
.style-cyberpunk [data-role="hero"] > p:first-child,
.style-cyberpunk [data-role="hero"] > p:first-of-type:not(:last-of-type),
.style-cyberpunk [data-composition="hero-cyberpunk-hud"] > p:first-child,
.style-cyberpunk [data-role="badge"],
.style-cyberpunk header > p:first-child {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ff0055;
  margin-bottom: 1.25rem;
  display: inline-block;
  padding: 0.25rem 0.6rem;
  background: rgba(255, 0, 85, 0.12);
  border: 1px solid #ff0055;
  box-shadow: 0 0 10px rgba(255, 0, 85, 0.25);
  width: fit-content;
}

/* Blockquotes & Direct Quotes */
.style-cyberpunk blockquote {
  border-left: 4px solid #00f0ff;
  background: rgba(0, 240, 255, 0.04);
  padding: 1.5rem 2rem;
  color: #e2e8f0;
  font-size: 1.125rem;
  margin: 3rem 0;
  box-shadow: inset 0 0 15px rgba(0, 240, 255, 0.06);
  max-width: 60ch;
}

/* Inline Elements & Emphasis */
.style-cyberpunk strong {
  font-weight: 800;
  color: #00f0ff;
}

.style-cyberpunk em {
  font-style: italic;
  color: #ff0055;
}

.style-cyberpunk code {
  font-family: inherit;
  font-size: 0.875rem;
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid #00f0ff;
  padding: 0.15rem 0.4rem;
  color: #00f0ff;
}

.style-cyberpunk a {
  color: #00f0ff;
  text-decoration: none;
  border-bottom: 1px dashed #00f0ff;
  transition: all 150ms ease;
}

.style-cyberpunk a:hover {
  color: #ff0055;
  border-bottom-color: #ff0055;
  text-shadow: 0 0 10px rgba(255, 0, 85, 0.6);
}

/* Navigation: HUD Console Banner */
.style-cyberpunk nav,
.style-cyberpunk header:not(:has(nav))[data-composition="nav-cyberpunk-console"],
.style-cyberpunk [data-role="navigation"] {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  gap: 1.5rem !important;
  padding: 0.85rem 1.5rem !important;
  background: rgba(13, 19, 31, 0.85) !important;
  border: 1px solid rgba(0, 240, 255, 0.3) !important;
  border-left: 4px solid #00f0ff !important;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.15) !important;
  margin-bottom: 4rem !important;
  width: 100% !important;
}

.style-cyberpunk nav a,
.style-cyberpunk [data-composition="nav-cyberpunk-console"] a,
.style-cyberpunk [data-role="navigation"] a {
  font-size: 0.8125rem !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  color: #00f0ff !important;
  text-decoration: none !important;
  padding: 0.35rem 0.75rem !important;
  transition: all 150ms ease !important;
}

.style-cyberpunk nav a:hover,
.style-cyberpunk [data-composition="nav-cyberpunk-console"] a:hover,
.style-cyberpunk [data-role="navigation"] a:hover {
  background: rgba(0, 240, 255, 0.15) !important;
  color: #ffffff !important;
  text-shadow: 0 0 8px #00f0ff !important;
}

/* Hero: Tactical Terminal Command Display */
.style-cyberpunk [data-composition="hero-cyberpunk-hud"],
.style-cyberpunk [data-layout="hud-matrix"],
.style-cyberpunk:has(> h1),
.style-cyberpunk section:has(> h1),
.style-cyberpunk section:first-of-type,
.style-cyberpunk [data-role="hero"] {
  padding: 3rem 0 4rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgba(0, 240, 255, 0.3);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.style-cyberpunk [data-role="hero"] h1,
.style-cyberpunk [data-composition="hero-cyberpunk-hud"] h1,
.style-cyberpunk section:first-of-type h1 {
  font-size: clamp(2.75rem, 5.5vw, 4rem);
  font-weight: 800;
  line-height: 1.08;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
  margin: 0 0 1.5rem;
  max-width: 22ch;
}

.style-cyberpunk [data-role="hero"] h1 + p,
.style-cyberpunk [data-composition="hero-cyberpunk-hud"] h1 + p,
.style-cyberpunk section:first-of-type h1 + p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #cbd5e1;
  max-width: 52ch;
  margin: 0 0 2.25rem;
}

/* Buttons: Clipped Tactical Tech Buttons */
.style-cyberpunk button,
.style-cyberpunk input[type="submit"],
.style-cyberpunk a.button,
.style-cyberpunk [data-role="button"] {
  font-family: 'JetBrains Mono', monospace !important;
  font-weight: 800;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: transparent;
  color: #00f0ff;
  border: 1px solid #00f0ff;
  padding: 0.85rem 2rem;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
  cursor: pointer;
  transition: all 150ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
}

.style-cyberpunk button:hover,
.style-cyberpunk input[type="submit"]:hover,
.style-cyberpunk a.button:hover {
  background-color: rgba(0, 240, 255, 0.2);
  color: #ffffff;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
}

/* Primary CTA Button (High-Voltage Cyan) */
.style-cyberpunk [data-composition="hero-cyberpunk-hud"] button,
.style-cyberpunk section:first-of-type button,
.style-cyberpunk [data-role="hero"] button,
.style-cyberpunk [data-role="cta-button"] {
  background-color: #00f0ff !important;
  color: #000000 !important;
  border: none !important;
  font-weight: 900 !important;
  padding: 0.9rem 2.25rem !important;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.5) !important;
}

.style-cyberpunk [data-composition="hero-cyberpunk-hud"] button:hover,
.style-cyberpunk section:first-of-type button:hover,
.style-cyberpunk [data-role="hero"] button:hover,
.style-cyberpunk [data-role="cta-button"]:hover {
  background-color: #ff0055 !important;
  color: #ffffff !important;
  box-shadow: 0 0 25px rgba(255, 0, 85, 0.7) !important;
}

/* Section Structure & Section Headings */
.style-cyberpunk section {
  margin-bottom: 5rem;
  width: 100%;
}

.style-cyberpunk [data-layout="hud-matrix"] > h2,
.style-cyberpunk [data-role="feature-section"] > h2,
.style-cyberpunk section:has(> article) > h2,
.style-cyberpunk [data-layout-slot="heading"],
.style-cyberpunk section > h2 {
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
  border-bottom: 1px solid rgba(0, 240, 255, 0.3);
  padding-bottom: 0.65rem;
  margin: 0 0 2rem;
  width: 100%;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
  display: block;
}

/* Collection / Card Grids */
.style-cyberpunk [data-layout-group="items"],
.style-cyberpunk [data-grouping="telemetry-nodes"],
.style-cyberpunk [data-role="feature-group"],
.style-cyberpunk [data-role="card-grid"],
.style-cyberpunk section:has(> article + article),
.style-cyberpunk div:has(> article + article),
.style-cyberpunk div:has(> div:has(> h2) + div:has(> h2)) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 0;
  background: transparent;
  border: none;
}

.style-cyberpunk section:has(> article + article) > :is(h1, h2, h3, header, [data-layout-slot="heading"]) {
  grid-column: 1 / -1 !important;
  width: 100% !important;
}

/* Collection Items: Controlled Tactical Telemetry Nodes */
.style-cyberpunk [data-item-presentation="hud-node"],
.style-cyberpunk [data-layout-group="items"] > *,
.style-cyberpunk [data-role="feature-item"],
.style-cyberpunk article,
.style-cyberpunk .card,
.style-cyberpunk [data-role="card"] {
  border-radius: 0px;
  padding: 2.25rem;
  transition: all 150ms ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Variant 0 (Primary Clipped Cyan Node) */
.style-cyberpunk article:first-of-type,
.style-cyberpunk [data-variant="0"],
.style-cyberpunk [data-role="feature-item"]:first-of-type {
  background: #0d131f !important;
  border: 1px solid #00f0ff !important;
  border-top: 3px solid #00f0ff !important;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%) !important;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.15) !important;
}

.style-cyberpunk article:first-of-type h3,
.style-cyberpunk [data-variant="0"] h3 {
  color: #ffffff !important;
  font-weight: 800 !important;
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.4) !important;
}

.style-cyberpunk article:first-of-type strong,
.style-cyberpunk [data-variant="0"] strong {
  color: #00f0ff !important;
  font-size: 2rem !important;
  font-weight: 800 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
  text-shadow: 0 0 12px rgba(0, 240, 255, 0.5) !important;
}

/* Variant 1 (Secondary Magenta Node) */
.style-cyberpunk article:nth-of-type(2),
.style-cyberpunk [data-variant="1"],
.style-cyberpunk [data-role="feature-item"]:nth-of-type(2) {
  background: #0d131f !important;
  border: 1px solid rgba(255, 0, 85, 0.4) !important;
  border-top: 3px solid #ff0055 !important;
  box-shadow: 0 0 15px rgba(255, 0, 85, 0.12) !important;
}

.style-cyberpunk article:nth-of-type(2) h3,
.style-cyberpunk [data-variant="1"] h3 {
  color: #ff0055 !important;
  font-weight: 800 !important;
}

.style-cyberpunk article:nth-of-type(2) strong,
.style-cyberpunk [data-variant="1"] strong {
  color: #ff0055 !important;
  font-size: 2rem !important;
  font-weight: 800 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
  text-shadow: 0 0 12px rgba(255, 0, 85, 0.4) !important;
}

/* Variant 2 (Amber Data Node) */
.style-cyberpunk article:nth-of-type(3),
.style-cyberpunk article:nth-of-type(n+4),
.style-cyberpunk [data-variant="2"],
.style-cyberpunk [data-role="feature-item"]:nth-of-type(3) {
  background: #0d131f !important;
  border: 1px solid rgba(245, 158, 11, 0.4) !important;
  border-top: 3px solid #f59e0b !important;
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.12) !important;
}

.style-cyberpunk article:nth-of-type(3) h3,
.style-cyberpunk [data-variant="2"] h3 {
  color: #f59e0b !important;
  font-weight: 800 !important;
}

.style-cyberpunk article:nth-of-type(3) strong,
.style-cyberpunk [data-variant="2"] strong {
  color: #f59e0b !important;
  font-size: 2rem !important;
  font-weight: 800 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
  text-shadow: 0 0 12px rgba(245, 158, 11, 0.4) !important;
}

/* Pricing, Numbers & Metrics */
.style-cyberpunk strong,
.style-cyberpunk [data-item-presentation="metric-node"] strong,
.style-cyberpunk [data-item-presentation="pricing-tier"] strong {
  font-size: 2rem;
  font-weight: 800;
  color: #00f0ff;
  display: block;
  margin: 0.75rem 0;
}

/* Forms & Inputs: Tactical Prompt Fields */
.style-cyberpunk form {
  border: 1px solid rgba(0, 240, 255, 0.4);
  border-top: 3px solid #00f0ff;
  background: #0d131f;
  padding: 2.5rem;
  box-shadow: 0 0 25px rgba(0, 240, 255, 0.15);
  max-width: 560px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.style-cyberpunk label {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #00f0ff;
  display: block;
  margin-bottom: 0.35rem;
}

.style-cyberpunk input[type="text"],
.style-cyberpunk input[type="email"],
.style-cyberpunk input[type="password"],
.style-cyberpunk textarea,
.style-cyberpunk select {
  width: 100%;
  background: #090e18;
  border: 1px solid rgba(0, 240, 255, 0.35);
  border-radius: 0px;
  color: #00f0ff;
  font-family: inherit;
  font-size: 0.9375rem;
  padding: 0.85rem 1.15rem;
  outline: none;
  transition: all 150ms ease;
}

.style-cyberpunk input:focus,
.style-cyberpunk textarea:focus,
.style-cyberpunk select:focus {
  border-color: #ff0055;
  box-shadow: 0 0 15px rgba(255, 0, 85, 0.4);
}

/* Images */
.style-cyberpunk img {
  border: 1px solid #00f0ff;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
  max-width: 100%;
  height: auto;
}

/* Footer: Technical Status Bar */
.style-cyberpunk footer,
.style-cyberpunk [data-role="footer"] {
  border-top: 1px solid rgba(0, 240, 255, 0.3);
  padding: 2.5rem 0 1.5rem;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
  width: 100%;
}

.style-cyberpunk footer p,
.style-cyberpunk [data-role="footer"] p {
  margin: 0;
}


/* --------------------------------------------------------------------------
   6. WABI-SABI (.style-wabi-sabi)
   Visual Grammar: Organic asymmetry, serene negative space, natural materials,
   authentic washi paper canvas, sumi charcoal ink, rustic stoneware, imperfect harmony.
   -------------------------------------------------------------------------- */
.style-wabi-sabi {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  background-color: #f7f4ee;
  color: #292524;
  line-height: 1.8;
  box-sizing: border-box;
}

.style-wabi-sabi *, .style-wabi-sabi *::before, .style-wabi-sabi *::after {
  box-sizing: border-box;
}

/* Page Canvas Bounds */
.style-wabi-sabi main,
.style-wabi-sabi [data-role="page"] {
  display: block !important;
  max-width: 1140px !important;
  margin: 0 auto !important;
  padding: 2.5rem 1.5rem 6rem !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Typography Hierarchy */
.style-wabi-sabi h1, .style-wabi-sabi h2, .style-wabi-sabi h3, .style-wabi-sabi h4, .style-wabi-sabi h5, .style-wabi-sabi h6 {
  font-family: 'Cormorant Garamond', 'Georgia', 'Noto Serif', serif !important;
  color: #1c1917;
  margin: 0 0 1rem;
  line-height: 1.15;
}

.style-wabi-sabi h1 {
  font-size: clamp(2.75rem, 5.5vw, 4rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: #1c1917;
}

.style-wabi-sabi h2 {
  font-size: clamp(1.75rem, 3.2vw, 2.35rem);
  font-weight: 500;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: #292524;
}

.style-wabi-sabi h3 {
  font-size: 1.35rem;
  font-weight: 600;
  color: #292524;
}

.style-wabi-sabi h4, .style-wabi-sabi h5, .style-wabi-sabi h6 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #44403c;
}

.style-wabi-sabi p {
  font-size: 1rem;
  line-height: 1.8;
  color: #57534e;
  max-width: 58ch;
  margin: 0 0 1.25rem;
  font-family: 'Inter', sans-serif;
}

/* Eyebrows, Badges & Metadata */
.style-wabi-sabi [data-role="hero"] > p:first-child,
.style-wabi-sabi [data-role="hero"] > p:first-of-type:not(:last-of-type),
.style-wabi-sabi [data-composition="hero-wabi-sabi-zen"] > p:first-child,
.style-wabi-sabi [data-role="badge"],
.style-wabi-sabi header > p:first-child {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #78716c;
  margin-bottom: 1.25rem;
  font-family: 'Inter', sans-serif;
  display: block;
}

/* Blockquotes & Direct Quotes */
.style-wabi-sabi blockquote {
  border-left: 3px solid #78716c;
  padding: 1.25rem 0 1.25rem 2.25rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.35rem;
  font-style: italic;
  color: #44403c;
  line-height: 1.6;
  margin: 3rem 0;
  max-width: 54ch;
  background: transparent;
}

/* Inline Elements & Emphasis */
.style-wabi-sabi strong {
  font-weight: 700;
  color: #1c1917;
}

.style-wabi-sabi em {
  font-style: italic;
  color: #4d7c0f;
}

.style-wabi-sabi code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  background: #eeeae0;
  border-radius: 4px;
  padding: 0.15rem 0.4rem;
  color: #292524;
}

.style-wabi-sabi a {
  color: #1c1917;
  text-decoration: underline;
  text-decoration-color: #a8a29e;
  text-underline-offset: 4px;
  transition: text-decoration-color 150ms ease;
  font-weight: 500;
}

.style-wabi-sabi a:hover {
  color: #4d7c0f;
  text-decoration-color: #4d7c0f;
}

/* Navigation: Serene Contemplative Strip */
.style-wabi-sabi nav,
.style-wabi-sabi header:not(:has(nav))[data-composition="nav-wabi-sabi-tranquil"],
.style-wabi-sabi [data-role="navigation"] {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  gap: 1.5rem !important;
  padding: 1.5rem 0 !important;
  border-bottom: 1px solid rgba(120, 113, 108, 0.2) !important;
  background: transparent !important;
  margin-bottom: 4rem !important;
  width: 100% !important;
}

.style-wabi-sabi nav a,
.style-wabi-sabi [data-composition="nav-wabi-sabi-tranquil"] a,
.style-wabi-sabi [data-role="navigation"] a {
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  color: #78716c !important;
  text-decoration: none !important;
  padding: 0.35rem 0.65rem !important;
  transition: color 150ms ease !important;
}

.style-wabi-sabi nav a:hover,
.style-wabi-sabi [data-composition="nav-wabi-sabi-tranquil"] a:hover,
.style-wabi-sabi [data-role="navigation"] a:hover {
  color: #1c1917 !important;
}

/* Hero: Open, Tranquil Breathing Room */
.style-wabi-sabi [data-composition="hero-wabi-sabi-zen"],
.style-wabi-sabi [data-layout="zen-manuscript"],
.style-wabi-sabi:has(> h1),
.style-wabi-sabi section:has(> h1),
.style-wabi-sabi section:first-of-type,
.style-wabi-sabi [data-role="hero"] {
  padding: 3.5rem 0 4.5rem;
  margin-bottom: 4.5rem;
  border-bottom: 1px solid rgba(120, 113, 108, 0.2);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.style-wabi-sabi [data-role="hero"] h1,
.style-wabi-sabi [data-composition="hero-wabi-sabi-zen"] h1,
.style-wabi-sabi section:first-of-type h1 {
  font-size: clamp(2.75rem, 5.5vw, 4rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: #1c1917;
  margin: 0 0 1.5rem;
  max-width: 22ch;
}

.style-wabi-sabi [data-role="hero"] h1 + p,
.style-wabi-sabi [data-composition="hero-wabi-sabi-zen"] h1 + p,
.style-wabi-sabi section:first-of-type h1 + p {
  font-size: 1.1875rem;
  line-height: 1.75;
  color: #44403c;
  max-width: 52ch;
  font-family: 'Inter', sans-serif;
  margin: 0 0 2.25rem;
}

/* Buttons: Sumi Charcoal Tactile Buttons */
.style-wabi-sabi button,
.style-wabi-sabi input[type="submit"],
.style-wabi-sabi a.button,
.style-wabi-sabi [data-role="button"] {
  font-family: 'Inter', sans-serif !important;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 6px;
  background-color: transparent;
  color: #292524;
  border: 1px solid rgba(120, 113, 108, 0.35);
  padding: 0.75rem 1.85rem;
  cursor: pointer;
  transition: all 150ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
}

.style-wabi-sabi button:hover,
.style-wabi-sabi input[type="submit"]:hover,
.style-wabi-sabi a.button:hover {
  background-color: #eeeae0;
  color: #1c1917;
  transform: translateY(-1px);
}

/* Primary CTA Button (Sumi Charcoal Solid) */
.style-wabi-sabi [data-composition="hero-wabi-sabi-zen"] button,
.style-wabi-sabi section:first-of-type button,
.style-wabi-sabi [data-role="hero"] button,
.style-wabi-sabi [data-role="cta-button"] {
  background-color: #292524 !important;
  color: #f7f4ee !important;
  border: 1px solid #292524 !important;
  padding: 0.85rem 2.25rem !important;
}

.style-wabi-sabi [data-composition="hero-wabi-sabi-zen"] button:hover,
.style-wabi-sabi section:first-of-type button:hover,
.style-wabi-sabi [data-role="hero"] button:hover,
.style-wabi-sabi [data-role="cta-button"]:hover {
  background-color: #44403c !important;
  border-color: #44403c !important;
  transform: translateY(-1px) !important;
}

/* Section Structure & Section Headings */
.style-wabi-sabi section {
  margin-bottom: 5rem;
  width: 100%;
}

.style-wabi-sabi [data-layout="zen-manuscript"] > h2,
.style-wabi-sabi [data-role="feature-section"] > h2,
.style-wabi-sabi section:has(> article) > h2,
.style-wabi-sabi [data-layout-slot="heading"],
.style-wabi-sabi section > h2 {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.015em;
  color: #1c1917;
  margin: 0 0 2rem;
  border-bottom: 1px solid rgba(120, 113, 108, 0.2);
  padding-bottom: 0.75rem;
  display: block;
  width: 100%;
}

/* Collection / Card Grids */
.style-wabi-sabi [data-layout-group="items"],
.style-wabi-sabi [data-grouping="organic-flow"],
.style-wabi-sabi [data-role="feature-group"],
.style-wabi-sabi [data-role="card-grid"],
.style-wabi-sabi section:has(> article + article),
.style-wabi-sabi div:has(> article + article),
.style-wabi-sabi div:has(> div:has(> h2) + div:has(> h2)) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.25rem;
  width: 100%;
  margin-bottom: 0;
  background: transparent;
  border: none;
}

.style-wabi-sabi section:has(> article + article) > :is(h1, h2, h3, header, [data-layout-slot="heading"]) {
  grid-column: 1 / -1 !important;
  width: 100% !important;
}

/* Collection Items: Controlled Stoneware Panels */
.style-wabi-sabi [data-item-presentation="organic-panel"],
.style-wabi-sabi [data-layout-group="items"] > *,
.style-wabi-sabi [data-role="feature-item"],
.style-wabi-sabi article,
.style-wabi-sabi .card,
.style-wabi-sabi [data-role="card"] {
  border-radius: 8px;
  padding: 2.25rem;
  transition: all 150ms ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Variant 0 (Featured Stoneware Panel) */
.style-wabi-sabi article:first-of-type,
.style-wabi-sabi [data-variant="0"],
.style-wabi-sabi [data-role="feature-item"]:first-of-type {
  background: #eeeae0 !important;
  border: 1px solid rgba(120, 113, 108, 0.25) !important;
  box-shadow: 0 4px 15px rgba(41, 37, 36, 0.04) !important;
}

.style-wabi-sabi article:first-of-type h3,
.style-wabi-sabi [data-variant="0"] h3 {
  color: #1c1917 !important;
  font-weight: 600 !important;
  font-size: 1.45rem !important;
}

.style-wabi-sabi article:first-of-type strong,
.style-wabi-sabi [data-variant="0"] strong {
  color: #1c1917 !important;
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 2.25rem !important;
  font-weight: 600 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
}

/* Variant 1 (Light Washi Panel) */
.style-wabi-sabi article:nth-of-type(2),
.style-wabi-sabi [data-variant="1"],
.style-wabi-sabi [data-role="feature-item"]:nth-of-type(2) {
  background: #fbf9f4 !important;
  border: 1px solid rgba(120, 113, 108, 0.18) !important;
}

.style-wabi-sabi article:nth-of-type(2) h3,
.style-wabi-sabi [data-variant="1"] h3 {
  color: #292524 !important;
  font-weight: 600 !important;
  font-size: 1.35rem !important;
}

.style-wabi-sabi article:nth-of-type(2) strong,
.style-wabi-sabi [data-variant="1"] strong {
  color: #292524 !important;
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 2rem !important;
  font-weight: 600 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
}

/* Variant 2 (Quiet Stoneware Panel) */
.style-wabi-sabi article:nth-of-type(3),
.style-wabi-sabi article:nth-of-type(n+4),
.style-wabi-sabi [data-variant="2"],
.style-wabi-sabi [data-role="feature-item"]:nth-of-type(3) {
  background: transparent !important;
  border: 1px solid rgba(120, 113, 108, 0.15) !important;
}

.style-wabi-sabi article:nth-of-type(3) h3,
.style-wabi-sabi [data-variant="2"] h3 {
  color: #44403c !important;
  font-weight: 600 !important;
  font-size: 1.35rem !important;
}

.style-wabi-sabi article:nth-of-type(3) strong,
.style-wabi-sabi [data-variant="2"] strong {
  color: #44403c !important;
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 2rem !important;
  font-weight: 600 !important;
  display: block !important;
  margin: 0.75rem 0 !important;
}

/* Pricing, Numbers & Metrics */
.style-wabi-sabi strong,
.style-wabi-sabi [data-item-presentation="metric-node"] strong,
.style-wabi-sabi [data-item-presentation="pricing-tier"] strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.125rem;
  font-weight: 600;
  color: #1c1917;
  display: block;
  margin: 0.75rem 0;
}

/* Forms & Inputs: Handmade Washi Surfaces */
.style-wabi-sabi form {
  border: 1px solid rgba(120, 113, 108, 0.25);
  border-radius: 8px;
  background: #fbf9f4;
  padding: 2.5rem;
  max-width: 560px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.style-wabi-sabi label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #78716c;
  display: block;
  margin-bottom: 0.35rem;
}

.style-wabi-sabi input[type="text"],
.style-wabi-sabi input[type="email"],
.style-wabi-sabi input[type="password"],
.style-wabi-sabi textarea,
.style-wabi-sabi select {
  width: 100%;
  background: #ffffff;
  border: 1px solid #d6cfc4;
  border-radius: 4px;
  padding: 0.8rem 1.1rem;
  color: #292524;
  font-size: 0.9375rem;
  outline: none;
  transition: border-color 150ms ease;
}

.style-wabi-sabi input:focus,
.style-wabi-sabi textarea:focus,
.style-wabi-sabi select:focus {
  border-color: #4d7c0f;
  box-shadow: 0 0 0 2px rgba(77, 124, 15, 0.15);
}

/* Images */
.style-wabi-sabi img {
  border-radius: 6px;
  border: 1px solid rgba(120, 113, 108, 0.2);
  max-width: 100%;
  height: auto;
}

/* Footer: Serene Stone Divider */
.style-wabi-sabi footer,
.style-wabi-sabi [data-role="footer"] {
  border-top: 1px solid rgba(120, 113, 108, 0.2);
  padding: 3.5rem 0 2rem;
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
}

.style-wabi-sabi footer p,
.style-wabi-sabi [data-role="footer"] p {
  font-size: 0.8125rem;
  color: #a8a29e;
  margin: 0;
}


/* ==========================================================================
   CONTENT SAFETY & OVERFLOW PREVENTION (UNIVERSAL)
   ========================================================================== */
[class*="style-"] {
  overflow-x: hidden;
}

[class*="style-"] * {
  box-sizing: border-box;
}

[class*="style-"] [data-layout-group="items"] > *,
[class*="style-"] [data-layout-slot="heading"],
[class*="style-"] [data-layout="editorial-split"] > *,
[class*="style-"] [data-layout="monolithic-slabs"] > *,
[class*="style-"] [data-layout="hud-matrix"] > *,
[class*="style-"] [data-layout="floating-deck"] > *,
[class*="style-"] [data-layout="zen-manuscript"] > *,
[class*="style-"] [data-layout="swiss-ledger"] > *,
[class*="style-"] [data-layout="portfolio-index"] > *,
[class*="style-"] [data-layout="pricing-columns"] > *,
[class*="style-"] [data-layout="editorial-reader"] > *,
[class*="style-"] [data-layout="dashboard-telemetry"] > *,
[class*="style-"] [data-layout="focused-form"] > *,
[class*="style-"] [data-layout="asymmetric-catalog"] > *,
[class*="style-"] [data-layout="terminal-dossier"] > *,
[class*="style-"] [data-layout="zen-anthology"] > * {
  min-width: 0;
  overflow-wrap: break-word;
  word-break: break-word;
}

[class*="style-"] button,
[class*="style-"] input[type="submit"],
[class*="style-"] a.button {
  min-height: 38px;
  touch-action: manipulation;
}

/* --------------------------------------------------------------------------
   CONTEXT-AWARE LAYOUT MODES (UNIVERSAL & RESPONSIVE)
   -------------------------------------------------------------------------- */

/* 1. Portfolio Index & Project Ledger */
[data-layout="portfolio-index"],
[data-grouping="project-ledger"] {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

[data-item-presentation="portfolio-item"] {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(125, 125, 125, 0.15);
  width: 100%;
}

[data-item-presentation="portfolio-item"] h3,
[data-item-presentation="portfolio-item"] h4 {
  margin: 0;
  font-size: 1.35rem;
}

[data-item-presentation="portfolio-item"] p {
  margin: 0;
  opacity: 0.8;
}

/* 2. Pricing Columns & Tiers */
[data-layout="pricing-columns"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  align-items: stretch;
  width: 100%;
}

[data-item-presentation="pricing-tier"] {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.25rem;
  height: 100%;
  border: 1px solid rgba(125, 125, 125, 0.15);
}

/* 3. Editorial Reader & Reading Flow */
[data-layout="editorial-reader"] {
  max-width: 68ch;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  width: 100%;
}

[data-item-presentation="reading-flow"] {
  display: block;
  margin-bottom: 1.75rem;
  font-size: 1.125rem;
}

[data-layout="editorial-reader"] blockquote {
  margin: 2.5rem 0;
  font-style: italic;
  font-size: 1.25rem;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
}

/* 4. Dashboard Telemetry & Metric Nodes */
[data-layout="dashboard-telemetry"],
[data-grouping="metric-cluster"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

[data-item-presentation="metric-node"] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.75rem;
  border: 1px solid rgba(125, 125, 125, 0.15);
}

[data-item-presentation="metric-node"] h3,
[data-item-presentation="metric-node"] h4 {
  margin: 0;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.75;
}

[data-item-presentation="metric-node"] strong,
[data-item-presentation="metric-node"] p:has(+ button),
[data-item-presentation="metric-node"] .metric-value {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
}

/* 5. Focused Form & Field Items */
[data-layout="focused-form"] {
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

[data-item-presentation="field-item"] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

[data-layout="focused-form"] input,
[data-layout="focused-form"] textarea,
[data-layout="focused-form"] select {
  width: 100%;
  padding: 0.875rem 1.125rem;
  font-size: 1rem;
}

/* 6. Asymmetric Catalog & Terminal Dossier */
[data-layout="asymmetric-catalog"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
}

[data-layout="terminal-dossier"] {
  display: grid;
  gap: 1.5rem;
  width: 100%;
}

[data-layout="zen-anthology"] {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

/* Universal Container Treatment Helpers */
[data-container="borderless"] {
  background: transparent;
  border: none;
  box-shadow: none;
}

[data-container="heavy-slab"] {
  border: 3px solid currentColor;
}

[data-container="frosted-glass"] {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

[data-container="hud-frame"] {
  position: relative;
}

[data-container="hairline-ledger"] {
  background: transparent;
  box-shadow: none;
}

/* Universal Item Presentation Helpers */
[data-item-presentation="borderless-editorial"] {
  background: transparent;
  box-shadow: none;
}

[data-item-presentation="solid-slab"] {
  display: flex;
  flex-direction: column;
}

[data-item-presentation="frosted-card"] {
  display: flex;
  flex-direction: column;
}

[data-item-presentation="hud-node"] {
  display: flex;
  flex-direction: column;
}

/* ==========================================================================
   UNIVERSAL MOBILE & TABLET RESPONSIVE ENGINE LAYER
   Applies across all 32 design styles to ensure fluid, ultra-responsive UI
   ========================================================================== */

/* Universal Responsive Resets & Content Protection */
[class*="style-"] {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

[class*="style-"] *,
[class*="style-"] *::before,
[class*="style-"] *::after {
  box-sizing: border-box;
}

[class*="style-"] img,
[class*="style-"] video,
[class*="style-"] canvas,
[class*="style-"] svg {
  max-width: 100%;
  height: auto;
}

[class*="style-"] pre,
[class*="style-"] code {
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

[class*="style-"] table {
  max-width: 100%;
  display: block;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Tablet & Mobile Breakpoint (<= 768px) */
@media (max-width: 768px) {
  /* Fluid Typographic Scaling */
  [class*="style-"] h1,
  [class*="style-"] [data-role="hero"] h1,
  [class*="style-"] [data-layout-slot="heading"] h1 {
    font-size: clamp(1.85rem, 5.5vw + 0.5rem, 3.25rem) !important;
    line-height: 1.15 !important;
    letter-spacing: -0.02em !important;
    word-break: break-word !important;
  }

  [class*="style-"] h2,
  [class*="style-"] [data-role="feature-section"] h2 {
    font-size: clamp(1.4rem, 4vw + 0.35rem, 2.25rem) !important;
    line-height: 1.25 !important;
    word-break: break-word !important;
  }

  [class*="style-"] h3 {
    font-size: clamp(1.15rem, 3vw + 0.25rem, 1.55rem) !important;
    line-height: 1.3 !important;
  }

  [class*="style-"] p,
  [class*="style-"] [data-role="lead"] {
    font-size: clamp(0.9rem, 2vw + 0.2rem, 1.0625rem) !important;
    line-height: 1.6 !important;
  }

  /* Responsive Containers & Section Spacing */
  [class*="style-"] section,
  [class*="style-"] [data-role="hero"],
  [class*="style-"] [data-role="feature-section"],
  [class*="style-"] [data-role="pricing"] {
    padding-left: clamp(1rem, 4vw, 2rem) !important;
    padding-right: clamp(1rem, 4vw, 2rem) !important;
    margin-top: clamp(2rem, 5vh, 4rem) !important;
    margin-bottom: clamp(2rem, 5vh, 4rem) !important;
    width: 100% !important;
    max-width: 100% !important;
  }

  /* Auto-Collapsing Multi-Column Grids */
  [class*="style-"] [data-layout="pricing-columns"],
  [class*="style-"] [data-layout="dashboard-telemetry"],
  [class*="style-"] [data-layout="asymmetric-catalog"],
  [class*="style-"] [data-role="grid"],
  [class*="style-"] .grid,
  [data-layout="pricing-columns"],
  [data-layout="dashboard-telemetry"],
  [data-layout="asymmetric-catalog"] {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)) !important;
    gap: 1.25rem !important;
  }

  [class*="style-"] [data-layout="split-1-2"],
  [class*="style-"] [data-layout="editorial-split"] {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.5rem !important;
  }

  [class*="style-"] [data-item-presentation="portfolio-item"] {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 0.5rem !important;
  }

  /* Navigation Bar Responsiveness */
  [class*="style-"] nav,
  [class*="style-"] header,
  [class*="style-"] [data-role="nav"] {
    flex-wrap: wrap !important;
    gap: 0.75rem 1rem !important;
    padding-left: clamp(1rem, 4vw, 1.5rem) !important;
    padding-right: clamp(1rem, 4vw, 1.5rem) !important;
  }

  [class*="style-"] nav ul,
  [class*="style-"] nav div:has(> a) {
    flex-wrap: wrap !important;
    gap: 0.5rem 1rem !important;
  }

  /* Bento Grid Mobile Collapse */
  .style-bento-grid [class*="bento-"],
  [data-layout*="bento"] > * {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
}

/* Smartphone Viewports (<= 540px) */
@media (max-width: 540px) {
  /* Extreme Typography Scaling for Small Screens */
  [class*="style-"] h1,
  [class*="style-"] [data-role="hero"] h1 {
    font-size: clamp(1.65rem, 7vw, 2.35rem) !important;
    line-height: 1.15 !important;
  }

  [class*="style-"] h2 {
    font-size: clamp(1.25rem, 5.5vw, 1.75rem) !important;
  }

  [class*="style-"] h3 {
    font-size: 1.125rem !important;
  }

  /* Strict Single-Column Collapse */
  [class*="style-"] [data-layout="pricing-columns"],
  [class*="style-"] [data-layout="dashboard-telemetry"],
  [class*="style-"] [data-layout="asymmetric-catalog"],
  [class*="style-"] [data-role="grid"],
  [class*="style-"] .grid,
  [data-layout="pricing-columns"],
  [data-layout="dashboard-telemetry"],
  [data-layout="asymmetric-catalog"] {
    grid-template-columns: 1fr !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 1.25rem !important;
  }

  /* Cards & Items Full Width */
  [class*="style-"] [data-item-presentation="pricing-tier"],
  [class*="style-"] [data-item-presentation="metric-node"],
  [class*="style-"] [data-item-presentation="solid-slab"],
  [class*="style-"] [data-item-presentation="frosted-card"],
  [class*="style-"] [data-item-presentation="hud-node"],
  [class*="style-"] .card,
  [class*="style-"] [data-role="card"] {
    width: 100% !important;
    max-width: 100% !important;
    padding: 1.25rem !important;
  }

  /* Buttons & CTA Groups: Full-Width Stack */
  [class*="style-"] .cta-group,
  [class*="style-"] [data-role="cta-group"],
  [class*="style-"] div:has(> button + button),
  [class*="style-"] div:has(> a.button + a.button) {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    gap: 0.75rem !important;
  }

  [class*="style-"] button,
  [class*="style-"] a.button,
  [class*="style-"] input[type="submit"],
  [class*="style-"] input[type="button"] {
    width: 100% !important;
    max-width: 100% !important;
    min-height: 46px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    font-size: 0.9375rem !important;
  }

  /* Form Inputs iOS Auto-Zoom Guard */
  [class*="style-"] input[type="text"],
  [class*="style-"] input[type="email"],
  [class*="style-"] input[type="password"],
  [class*="style-"] input[type="number"],
  [class*="style-"] input[type="search"],
  [class*="style-"] textarea,
  [class*="style-"] select {
    font-size: 16px !important;
    min-height: 44px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Style-Specific Mobile Safeguards */
  .style-brutalism button,
  .style-brutalism .card,
  .style-neo-brutalism button,
  .style-neo-brutalism .card {
    box-shadow: 3px 3px 0px currentColor !important;
  }

  .style-neumorphism .card,
  .style-neumorphism button {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25), -4px -4px 10px rgba(255, 255, 255, 0.05) !important;
  }

  .style-scrapbook [class*="card"],
  .style-scrapbook [data-role="card"] {
    transform: rotate(0deg) !important;
  }
}
`;
  }

  public static getAllSemanticStyles(): string {
    return Object.entries(ALL_SEMANTIC_STYLES)
      .map(([id, css]) => `/* === DESIGN LANGUAGE: ${id.toUpperCase()} === */\n` + css.replace(/@import\s+url\([^)]+\);?/g, '').trim())
      .join('\n\n');
  }

  public static getAdaptiveStyles(): string {
    return `${this.getCoreAdaptiveStyles()}\n\n/* ==========================================================================\n   ALL 32 ART-DIRECTED SEMANTIC STYLESHEETS\n   ========================================================================== */\n\n${this.getAllSemanticStyles()}`;
  }

  public static getStyleCSS(styleId: string): string {
    const canonicalId = STYLE_ALIASES[styleId.toLowerCase()] || styleId.toLowerCase();
    const specificCss = ALL_SEMANTIC_STYLES[canonicalId];
    if (!specificCss) {
      return '';
    }
    const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Anton&family=Cinzel:wght@400;600;700;800;900&family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Orbitron:wght@400;500;600;700;800;900&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;700;800&display=swap');\n\n*, *::before, *::after { box-sizing: border-box; }\n\n`;
    const universalSafety = `\n[class*="style-"] { overflow-x: hidden; }\n[class*="style-"] * { box-sizing: border-box; }\n`;
    return fontImport + specificCss.trim() + universalSafety;
  }
}

/**
 * Injects the universal adaptive style rules into the document <head>.
 */
export function injectAdaptiveStyles(
  targetDoc: Document = (typeof document !== 'undefined' ? document : (null as any))
): HTMLStyleElement | null {
  if (!targetDoc || !targetDoc.head) return null;
  const existing = targetDoc.getElementById('style-engine-adaptive-css');
  if (existing) return existing as HTMLStyleElement;

  const styleEl = targetDoc.createElement('style');
  styleEl.id = 'style-engine-adaptive-css';
  styleEl.textContent = AdaptiveCSSGenerator.getAdaptiveStyles();
  targetDoc.head.appendChild(styleEl);
  return styleEl;
}

/**
 * Auto-enhances raw HTML elements by recursively analyzing structural context,
 * inferring component roles and composition strategies deterministically,
 * and applying data-role, data-composition, data-variant, and data-density attributes.
 */
export function enhanceHTML(
  root: HTMLElement = (typeof document !== 'undefined' ? document.body : (null as any))
): void {
  if (typeof document !== 'undefined') {
    injectAdaptiveStyles(document);
  }
  if (!root || typeof root.querySelectorAll !== 'function') return;

  const styleContainers = root.matches?.('[class*="style-"]')
    ? [root, ...Array.from(root.querySelectorAll<HTMLElement>('[class*="style-"]'))]
    : Array.from(root.querySelectorAll<HTMLElement>('[class*="style-"]'));

  styleContainers.forEach((container) => {
    // Extract styleId from class name (e.g. style-brutalism -> brutalism)
    const classMatch = container.className.match(/\bstyle-([a-z0-9-]+)\b/);
    const styleId = classMatch ? classMatch[1] : 'base';

    const traverse = (
      el: HTMLElement,
      depth: number,
      siblingIndex: number,
      totalSiblings: number,
      parentRole?: InferredRole,
      ancestorRoles: InferredRole[] = []
    ) => {
      const tag = el.tagName.toLowerCase();
      const children = Array.from(el.children) as HTMLElement[];
      const childrenTags = children.map((c) => c.tagName.toLowerCase());
      const text = el.textContent || '';
      const hasPrice = /[$€£¥]|\/mo\b|pricing/i.test(text);

      if (!el.getAttribute('data-role')) {
        // Collect all descendant tags recursively
        const descendantTags: string[] = [];
        const collectDesc = (parent: any) => {
          for (const child of parent.children) {
            if (child.tagName) {
              descendantTags.push(child.tagName.toLowerCase());
              collectDesc(child);
            }
          }
        };
        collectDesc(el);

        const signals = StructureAnalyzer.analyze({
          tag,
          childrenTags,
          descendantTags,
          text,
          childCount: children.length,
          hasPriceText: hasPrice,
          depth,
          totalSiblings,
          siblingIndex,
          parentRole,
          parentTag: el.parentElement?.tagName.toLowerCase(),
          ancestorRoles,
        });

        const roleContext = RoleResolver.resolveRole(signals, styleId);
        el.setAttribute('data-role', roleContext.role);
        el.setAttribute('data-composition', roleContext.composition);
        const isCollectionItem = roleContext.role === 'feature-item' || roleContext.role === 'card' || roleContext.role === 'pricing-card' || tag === 'article';
        let effectiveVariant = roleContext.variantIndex;
        if (isCollectionItem && el.parentElement) {
          const collectionSiblings = Array.from(el.parentElement.children).filter((c) => {
            const cTag = (c as HTMLElement).tagName?.toLowerCase();
            const cRole = (c as HTMLElement).getAttribute?.('data-role');
            return cTag === tag || cRole === roleContext.role || cTag === 'article';
          });
          const collectionIndex = collectionSiblings.indexOf(el);
          if (collectionIndex >= 0) effectiveVariant = collectionIndex % 3;
        }
        el.setAttribute('data-variant', String(effectiveVariant));
        el.setAttribute('data-density', roleContext.density);
        if (roleContext.decision) {
          el.setAttribute('data-layout', roleContext.decision.layoutMode);
          el.setAttribute('data-container', roleContext.decision.containerTreatment);
          el.setAttribute('data-grouping', roleContext.decision.groupingTreatment);
          el.setAttribute('data-item-presentation', roleContext.decision.itemPresentation);
          el.setAttribute('data-align', roleContext.decision.alignment);
        }
      }

      const currentRole = (el.getAttribute('data-role') as InferredRole) || 'generic-container';
      const currentAncestors = [...ancestorRoles, currentRole];

      // Contextual button leaves on component containers (elements without nested sub-containers)
      const hasStructuralChildren = children.some((c) =>
        ['div', 'section', 'article', 'form', 'nav', 'header', 'footer'].includes(c.tagName.toLowerCase())
      );

      if (!hasStructuralChildren) {
        const elButtons = Array.from(el.querySelectorAll<HTMLButtonElement>('button, input[type="submit"]'));
        elButtons.forEach((btn) => {
          if (!btn.getAttribute('data-role')) {
            let btnRole: InferredRole = 'button';
            if (currentRole === 'hero' || currentRole === 'header') btnRole = 'cta-button';
            else if (currentRole === 'navigation') btnRole = 'nav-action';
            else if (currentRole === 'pricing-card' || currentRole === 'pricing-grid') btnRole = 'pricing-action';
            else if (currentRole === 'card' || currentRole === 'card-grid' || currentRole === 'feature-item' || currentRole === 'feature-group') btnRole = 'card-action';
            else if (currentRole === 'form') btnRole = 'form-submit';

            btn.setAttribute('data-role', btnRole);
          }
        });
      }

      children.forEach((child, idx) => {
        const cTag = child.tagName.toLowerCase();
        if (['div', 'section', 'article', 'form', 'nav', 'header', 'footer'].includes(cTag)) {
          traverse(child, depth + 1, idx, children.length, currentRole, currentAncestors);
        }
      });
    };

    traverse(container, 1, 0, 1);
  });
}
