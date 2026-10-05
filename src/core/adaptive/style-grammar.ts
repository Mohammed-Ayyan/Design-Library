import { StyleDesignGrammar } from './types';

/**
 * Registry of expressive design grammars for each design language.
 *
 * Rather than mapping a style directly to a single rigid page template,
 * a design grammar defines aesthetic weights, density biases, asymmetry tendencies,
 * container philosophies, and typography scales that are synthesized
 * with the detected ContentContext to art-direct the layout.
 */
export class StyleGrammarRegistry {
  private static grammars: Record<string, StyleDesignGrammar> = {
    minimalism: {
      styleId: 'minimalism',
      densityBias: 'spacious',
      asymmetryTendency: 0.3,
      containerBoxTendency: 0.05, // Strongly avoids container boxes; relies on whitespace & typography
      gridPreference: 'fluid-columns',
      containerPhilosophy: 'borderless',
      borderPhilosophy: 'hairline',
      typographyScale: 'restrained',
      readingMeasure: 'editorial-narrow',
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
    },
    brutalism: {
      styleId: 'brutalism',
      densityBias: 'compact',
      asymmetryTendency: 0.85,
      containerBoxTendency: 0.9, // Loves tactile solid slabs and heavy borders
      gridPreference: 'modular-slabs',
      containerPhilosophy: 'heavy-slab',
      borderPhilosophy: 'heavy-structural',
      typographyScale: 'monumental',
      readingMeasure: 'standard',
      hasAsymmetricOffsets: true,
      hasDecorativeFraming: false,
    },
    glassmorphism: {
      styleId: 'glassmorphism',
      densityBias: 'normal',
      asymmetryTendency: 0.2,
      containerBoxTendency: 0.75, // Layered frosted glass panels
      gridPreference: 'translucent-deck',
      containerPhilosophy: 'frosted-glass',
      borderPhilosophy: 'hairline',
      typographyScale: 'moderate',
      readingMeasure: 'standard',
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
    },
    cyberpunk: {
      styleId: 'cyberpunk',
      densityBias: 'compact',
      asymmetryTendency: 0.75,
      containerBoxTendency: 0.85, // Technical HUD frames and telemetry nodes
      gridPreference: 'technical-matrix',
      containerPhilosophy: 'hud-frame',
      borderPhilosophy: 'neon-scanline',
      typographyScale: 'dramatic',
      readingMeasure: 'standard',
      hasAsymmetricOffsets: true,
      hasDecorativeFraming: true,
    },
    'wabi-sabi': {
      styleId: 'wabi-sabi',
      densityBias: 'spacious',
      asymmetryTendency: 0.45,
      containerBoxTendency: 0.15, // Organic, unboxed natural flow with breathing room
      gridPreference: 'organic-flow',
      containerPhilosophy: 'borderless',
      borderPhilosophy: 'organic-soft',
      typographyScale: 'moderate',
      readingMeasure: 'editorial-narrow',
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
    },
    'swiss-design': {
      styleId: 'swiss-design',
      densityBias: 'normal',
      asymmetryTendency: 0.9, // Mathematical asymmetric modular grid
      containerBoxTendency: 0.2, // Tabular hairline ledgers, not decorative boxes
      gridPreference: 'hairline-ledger',
      containerPhilosophy: 'hairline-ledger',
      borderPhilosophy: 'hairline',
      typographyScale: 'dramatic',
      readingMeasure: 'standard',
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
    },
  };

  /**
   * Retrieves the design grammar for a given style ID.
   * Safely falls back to minimalism-like base grammar if unknown.
   */
  public static getGrammar(styleId: string): StyleDesignGrammar {
    if (this.grammars[styleId]) {
      return this.grammars[styleId];
    }

    return {
      styleId,
      densityBias: 'normal',
      asymmetryTendency: 0.5,
      containerBoxTendency: 0.5,
      gridPreference: 'fluid-columns',
      containerPhilosophy: 'standard',
      borderPhilosophy: 'hairline',
      typographyScale: 'moderate',
      readingMeasure: 'standard',
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
    };
  }

  /**
   * Registers or updates a design grammar.
   */
  public static registerGrammar(grammar: StyleDesignGrammar): void {
    this.grammars[grammar.styleId] = grammar;
  }
}
