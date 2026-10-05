import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { baseStyle } from '../styles/base';
import { minimalismStyle } from '../styles/minimalism';
import { brutalismStyle } from '../styles/brutalism';
import { glassmorphismStyle } from '../styles/glassmorphism';
import { maximalismStyle } from '../styles/maximalism';
import { swissDesignStyle } from '../styles/swiss-design';
import { surrealismStyle } from '../styles/surrealism';
import { neoBrutalismStyle } from '../styles/neo-brutalism';
import { neoClassicalStyle } from '../styles/neo-classical';
import { luxuryTypographyStyle } from '../styles/luxury-typography';
import { editorialDesignStyle } from '../styles/editorial-design';
import { y2kAestheticStyle } from '../styles/y2k-aesthetic';
import { bentoGridStyle } from '../styles/bento-grid';
import { pixelArtStyle } from '../styles/pixel-art';
import { conceptualSketchStyle } from '../styles/conceptual-sketch';
import { etherealStyle } from '../styles/ethereal';
import { bohemianStyle } from '../styles/bohemian';
import { cyberpunkStyle } from '../styles/cyberpunk';
import { anthropomorphicStyle } from '../styles/anthropomorphic';
import { neumorphismStyle } from '../styles/neumorphism';
import { darkModeUiStyle } from '../styles/dark-mode-ui';
import { scrapbookStyle } from '../styles/scrapbook';
import { claymorphismStyle } from '../styles/claymorphism';
import { victorianStyle } from '../styles/victorian';
import { cybercoreStyle } from '../styles/cybercore';
import { synthwaveStyle } from '../styles/synthwave';
import { graffitiStyle } from '../styles/graffiti';
import { gothicStyle } from '../styles/gothic';
import { mixedMediaStyle } from '../styles/mixed-media';
import { artDecoStyle } from '../styles/art-deco';
import { bauhausStyle } from '../styles/bauhaus';
import { ScopeContext } from '../core/types/scope';

describe('Core Style Engine — Real Design Languages Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine([baseStyle, minimalismStyle, brutalismStyle, glassmorphismStyle, maximalismStyle, swissDesignStyle, surrealismStyle, neoBrutalismStyle, neoClassicalStyle, luxuryTypographyStyle, editorialDesignStyle, y2kAestheticStyle, bentoGridStyle, pixelArtStyle, conceptualSketchStyle, etherealStyle, bohemianStyle, cyberpunkStyle, anthropomorphicStyle, neumorphismStyle, darkModeUiStyle, scrapbookStyle, claymorphismStyle, victorianStyle, cybercoreStyle, synthwaveStyle, graffitiStyle, gothicStyle, mixedMediaStyle, artDecoStyle, bauhausStyle]);
  });

  // 1. Base style resolves correctly
  it('1. should resolve base style correctly with expected tokens and component rules', () => {
    const resolved = engine.resolveStyleById('base', 'page');

    expect(resolved).toBeDefined();
    expect(resolved.styleId).toBe('base');
    expect(resolved.styleName).toBe('Base Neutral Style');
    expect(resolved.isBase).toBe(true);
    expect(resolved.fallbackUsed).toBe(false);

    expect(resolved.tokens.colors.primary).toBe('#2563eb');
    expect(resolved.tokens.colors.background).toBe('#f8fafc');
    expect(resolved.tokens.radii.md).toBe('10px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.borderRadius).toBe('8px');
  });

  // 2. The 3 Real Styles resolve correctly with their distinctive languages
  it('2a. should resolve Minimalism with clean, restrained, hairline geometry', () => {
    const resolved = engine.resolveStyleById('minimalism');

    expect(resolved.styleId).toBe('minimalism');
    expect(resolved.styleName).toBe('Minimalism');
    expect(resolved.tokens.colors.primary).toBe('#18181b');
    expect(resolved.tokens.colors.background).toBe('#ffffff');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.tokens.radii.sm).toBe('3px');
    expect(resolved.components.heading.fontWeight).toBe(500);
    expect(resolved.components.button.boxShadow).toBe('none');
  });

  it('2b. should resolve Brutalism with raw 3px borders, 0px radius, and hard offset shadows', () => {
    const resolved = engine.resolveStyleById('brutalism');

    expect(resolved.styleId).toBe('brutalism');
    expect(resolved.styleName).toBe('Brutalism');
    expect(resolved.tokens.colors.primary).toBe('#ffe600');
    expect(resolved.tokens.borders.widthBase).toBe('3px');
    expect(resolved.tokens.radii.md).toBe('0px');
    expect(resolved.tokens.radii.full).toBe('0px');
    expect(resolved.tokens.shadows.sm).toBe('3px 3px 0px #000000');
    expect(resolved.components.button.textTransform).toBe('uppercase');
    expect(resolved.components.button.borderRadius).toBe('0px');
    expect(resolved.components.button.borderWidth).toBe('3px');
  });

  it('2c. should resolve Glassmorphism with frosted surfaces, backdrop blur, and pill radii', () => {
    const resolved = engine.resolveStyleById('glassmorphism');

    expect(resolved.styleId).toBe('glassmorphism');
    expect(resolved.styleName).toBe('Glassmorphism');
    expect(resolved.tokens.effects.backdropBlur).toBe('blur(20px)');
    expect(resolved.tokens.radii.full).toBe('9999px');
    expect(resolved.components.button.borderRadius).toBe('9999px');
    expect(resolved.components.card.backdropFilter).toBe('blur(20px)');
    expect(resolved.cssVariables['--ds-effect-backdrop-blur']).toBe('blur(20px)');
  });

  it('2d. should resolve Maximalism with tactile ivory foundation, royal crimson primary, and Playfair Display serif', () => {
    const resolved = engine.resolveStyleById('maximalism');

    expect(resolved.styleId).toBe('maximalism');
    expect(resolved.styleName).toBe('Maximalism');
    expect(resolved.tokens.colors.background).toBe('#faf6ef');
    expect(resolved.tokens.colors.primary).toBe('#701a2b');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Playfair Display');
    expect(resolved.tokens.borders.widthBase).toBe('2px');
    expect(resolved.tokens.shadows.md).toBe('3px 3px 0px #18130f');
    expect(resolved.components.button.textTransform).toBe('uppercase');
    expect(resolved.components.button.borderRadius).toBe('3px');
  });

  it('2e. should resolve Swiss Design with stark white foundation, Swiss Red primary, 0px radii, and authoritative sans-serif', () => {
    const resolved = engine.resolveStyleById('swiss-design');

    expect(resolved.styleId).toBe('swiss-design');
    expect(resolved.styleName).toBe('Swiss Design');
    expect(resolved.tokens.colors.background).toBe('#ffffff');
    expect(resolved.tokens.colors.primary).toBe('#ef4444');
    expect(resolved.tokens.colors.textPrimary).toBe('#000000');
    expect(resolved.tokens.radii.md).toBe('0px');
    expect(resolved.tokens.shadows.md).toBe('none');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.borderRadius).toBe('0px');
    expect(resolved.components.button.textTransform).toBe('uppercase');
  });

  it('2f. should resolve Surrealism with warm alabaster canvas, deep burgundy primary, asymmetric portal radii, and editorial serif', () => {
    const resolved = engine.resolveStyleById('surrealism');

    expect(resolved.styleId).toBe('surrealism');
    expect(resolved.styleName).toBe('Surrealism');
    expect(resolved.tokens.colors.background).toBe('#f5f2eb');
    expect(resolved.tokens.colors.primary).toBe('#3b1124');
    expect(resolved.tokens.colors.accent).toBe('#d97762');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Playfair Display');
    expect(resolved.tokens.radii.md).toBe('24px 8px 24px 8px');
    expect(resolved.tokens.radii.full).toBe('9999px');
    expect(resolved.components.button.borderRadius).toBe('9999px');
  });

  it('2g. should resolve Neo-Brutalism with warm off-white canvas, punchy coral primary, tactile 8-12px radii, and 2px dark outlines with hard offset shadows', () => {
    const resolved = engine.resolveStyleById('neo-brutalism');

    expect(resolved.styleId).toBe('neo-brutalism');
    expect(resolved.styleName).toBe('Neo-Brutalism');
    expect(resolved.tokens.colors.background).toBe('#fffdfa');
    expect(resolved.tokens.colors.primary).toBe('#ff5a5f');
    expect(resolved.tokens.colors.accent).toBe('#ffde59');
    expect(resolved.tokens.radii.md).toBe('12px');
    expect(resolved.tokens.borders.widthBase).toBe('2px');
    expect(resolved.tokens.shadows.sm).toBe('3px 3px 0px #121212');
    expect(resolved.tokens.shadows.md).toBe('4px 4px 0px #121212');
    expect(resolved.components.button.borderRadius).toBe('10px');
  });

  it('2h. should resolve Neo-Classical with warm ivory paper, deep charcoal ink, architectural serifs, and crisp 2px geometry', () => {
    const resolved = engine.resolveStyleById('neo-classical');

    expect(resolved.styleId).toBe('neo-classical');
    expect(resolved.styleName).toBe('Neo-Classical');
    expect(resolved.tokens.colors.background).toBe('#fcfbf7');
    expect(resolved.tokens.colors.primary).toBe('#1a1917');
    expect(resolved.tokens.colors.accent).toBe('#b89758');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Cinzel');
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.tokens.radii.md).toBe('4px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.borderRadius).toBe('2px');
  });

  it('2i. should resolve Luxury Typography with warm luxury paper, deep charcoal ink, Didone serifs, and sharp 0px geometry', () => {
    const resolved = engine.resolveStyleById('luxury-typography');

    expect(resolved.styleId).toBe('luxury-typography');
    expect(resolved.styleName).toBe('Luxury Typography');
    expect(resolved.tokens.colors.background).toBe('#faf8f5');
    expect(resolved.tokens.colors.primary).toBe('#121211');
    expect(resolved.tokens.colors.accent).toBe('#c2a67e');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Playfair Display');
    expect(resolved.tokens.radii.sm).toBe('0px');
    expect(resolved.tokens.radii.md).toBe('1px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.borderRadius).toBe('0px');
  });

  it('2j. should resolve Editorial Design with warm newsprint paper, deep publication ink, broadsheet serifs, and 2px geometry', () => {
    const resolved = engine.resolveStyleById('editorial-design');

    expect(resolved.styleId).toBe('editorial-design');
    expect(resolved.styleName).toBe('Editorial Design');
    expect(resolved.tokens.colors.background).toBe('#fbfaf7');
    expect(resolved.tokens.colors.primary).toBe('#141413');
    expect(resolved.tokens.colors.accent).toBe('#991b1b');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Newsreader');
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.tokens.radii.md).toBe('2px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.borderRadius).toBe('2px');
  });

  it('2k. should resolve Y2K Aesthetic with pearlescent ice canvas, electric cyber blue primary, Space Grotesk heading, and bubbly capsule radii', () => {
    const resolved = engine.resolveStyleById('y2k-aesthetic');

    expect(resolved.styleId).toBe('y2k-aesthetic');
    expect(resolved.styleName).toBe('Y2K Aesthetic');
    expect(resolved.tokens.colors.background).toBe('#f1f5f9');
    expect(resolved.tokens.colors.primary).toBe('#0284c7');
    expect(resolved.tokens.colors.accent).toBe('#06b6d4');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
    expect(resolved.tokens.radii.md).toBe('16px');
    expect(resolved.tokens.radii.full).toBe('9999px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.borderRadius).toBe('9999px');
  });

  it('2l. should resolve Bento Grid with neutral slate canvas, rich indigo primary, Plus Jakarta Sans heading, and 18px modular radii', () => {
    const resolved = engine.resolveStyleById('bento-grid');

    expect(resolved.styleId).toBe('bento-grid');
    expect(resolved.styleName).toBe('Bento Grid');
    expect(resolved.tokens.colors.background).toBe('#f8fafc');
    expect(resolved.tokens.colors.primary).toBe('#4f46e5');
    expect(resolved.tokens.colors.accent).toBe('#6366f1');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Plus Jakarta Sans');
    expect(resolved.tokens.radii.md).toBe('18px');
    expect(resolved.tokens.radii.lg).toBe('22px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.borderRadius).toBe('12px');
  });

  it('2m. should resolve Pixel Art with retro console void, arcade green primary, Press Start 2P heading, and 0px aliased square radii', () => {
    const resolved = engine.resolveStyleById('pixel-art');

    expect(resolved.styleId).toBe('pixel-art');
    expect(resolved.styleName).toBe('Pixel Art');
    expect(resolved.tokens.colors.background).toBe('#12131c');
    expect(resolved.tokens.colors.primary).toBe('#22c55e');
    expect(resolved.tokens.colors.accent).toBe('#facc15');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Press Start 2P');
    expect(resolved.tokens.radii.md).toBe('0px');
    expect(resolved.tokens.radii.full).toBe('0px');
    expect(resolved.tokens.borders.widthBase).toBe('3px');
    expect(resolved.components.button.borderRadius).toBe('0px');
  });

  it('2n. should resolve Conceptual Sketch with warm drafting vellum, graphite ink rules, Space Grotesk heading, and Caveat accent type', () => {
    const resolved = engine.resolveStyleById('conceptual-sketch');

    expect(resolved.styleId).toBe('conceptual-sketch');
    expect(resolved.styleName).toBe('Conceptual Sketch');
    expect(resolved.tokens.colors.background).toBe('#faf8f3');
    expect(resolved.tokens.colors.primary).toBe('#1f2124');
    expect(resolved.tokens.colors.accent).toBe('#2563eb');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
    expect(resolved.tokens.typography.fontFamilyMono).toContain('Caveat');
    expect(resolved.tokens.radii.md).toBe('3px');
    expect(resolved.tokens.borders.widthBase).toBe('1.5px');
    expect(resolved.components.button.borderRadius).toBe('3px');
    expect(resolved.components.badge.color).toBe('#dc2626');
  });

  it('2o. should resolve Ethereal with illuminated air canvas, deep charcoal text, Cormorant Garamond heading, and weightless radii', () => {
    const resolved = engine.resolveStyleById('ethereal');

    expect(resolved.styleId).toBe('ethereal');
    expect(resolved.styleName).toBe('Ethereal');
    expect(resolved.tokens.colors.background).toBe('#fbfaf8');
    expect(resolved.tokens.colors.textPrimary).toBe('#1e2029');
    expect(resolved.tokens.colors.accent).toBe('#818cf8');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Cormorant Garamond');
    expect(resolved.tokens.typography.fontFamilyMono).toContain('Outfit');
    expect(resolved.tokens.radii.md).toBe('10px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.borderRadius).toBe('10px');
    expect(resolved.components.badge.color).toBe('#4f46e5');
  });

  it('2p. should resolve Bohemian with warm parchment cream, Fraunces serif, terracotta primary, mustard accent, and handcrafted radii', () => {
    const resolved = engine.resolveStyleById('bohemian');

    expect(resolved.styleId).toBe('bohemian');
    expect(resolved.styleName).toBe('Bohemian');
    expect(resolved.tokens.colors.background).toBe('#fbf7ee');
    expect(resolved.tokens.colors.primary).toBe('#c85a32');
    expect(resolved.tokens.colors.accent).toBe('#d48b16');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Fraunces');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Plus Jakarta Sans');
    expect(resolved.tokens.radii.md).toBe('16px');
    expect(resolved.tokens.borders.widthBase).toBe('1.5px');
    expect(resolved.components.button.borderRadius).toBe('16px 22px 14px 20px');
  });

  it('2q. should resolve Cyberpunk with deep obsidian void, electric cyan border, acid yellow primary, and sharp zero radii', () => {
    const resolved = engine.resolveStyleById('cyberpunk');

    expect(resolved.styleId).toBe('cyberpunk');
    expect(resolved.styleName).toBe('Cyberpunk');
    expect(resolved.tokens.colors.background).toBe('#07090e');
    expect(resolved.tokens.colors.primary).toBe('#ffe600');
    expect(resolved.tokens.colors.border).toBe('#00f0ff');
    expect(resolved.tokens.colors.accent).toBe('#ff0055');
    expect(resolved.tokens.radii.none).toBe('0px');
    expect(resolved.tokens.radii.md).toBe('0px');
    expect(resolved.tokens.borders.widthBase).toBe('2px');
    expect(resolved.components.button.borderRadius).toBe('0px');
    expect(resolved.components.button.borderColor).toBe('#00f0ff');
  });

  it('2r. should resolve Anthropomorphic with warm cream canvas, Outfit display, warm coral primary, and organic asymmetrical radii', () => {
    const resolved = engine.resolveStyleById('anthropomorphic');

    expect(resolved.styleId).toBe('anthropomorphic');
    expect(resolved.styleName).toBe('Anthropomorphic');
    expect(resolved.tokens.colors.background).toBe('#fdfbf7');
    expect(resolved.tokens.colors.primary).toBe('#ff6b57');
    expect(resolved.tokens.colors.accent).toBe('#4a80e8');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Outfit');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Plus Jakarta Sans');
    expect(resolved.tokens.radii.md).toBe('22px 28px 20px 26px');
    expect(resolved.components.button.background).toBe('#ff6b57');
  });

  it('2s. should resolve Neumorphism with soft monochromatic canvas, Plus Jakarta Sans, tactile dual shadows, and zero structural borders', () => {
    const resolved = engine.resolveStyleById('neumorphism');

    expect(resolved.styleId).toBe('neumorphism');
    expect(resolved.styleName).toBe('Neumorphism');
    expect(resolved.tokens.colors.background).toBe('#e0e5ec');
    expect(resolved.tokens.colors.surface).toBe('#e0e5ec');
    expect(resolved.tokens.colors.primary).toBe('#3b82f6');
    expect(resolved.tokens.borders.widthBase).toBe('0px');
    expect(resolved.tokens.shadows.sm).toContain('4px 4px 8px');
    expect(resolved.components.button.background).toBe('#e0e5ec');
    expect(resolved.components.button.borderRadius).toBe('14px');
  });

  it('2t. should resolve Dark Mode UI with layered surfaces, Inter font, controlled contrast, and subtle neutral borders', () => {
    const resolved = engine.resolveStyleById('dark-mode-ui');

    expect(resolved.styleId).toBe('dark-mode-ui');
    expect(resolved.styleName).toBe('Dark Mode UI');
    expect(resolved.tokens.colors.background).toBe('#09090b');
    expect(resolved.tokens.colors.surface).toBe('#111113');
    expect(resolved.tokens.colors.surfaceSubtle).toBe('#18181b');
    expect(resolved.tokens.colors.textPrimary).toBe('#fafafa');
    expect(resolved.tokens.colors.textSecondary).toBe('#a1a1aa');
    expect(resolved.tokens.colors.primary).toBe('#3b82f6');
    expect(resolved.tokens.colors.border).toBe('#27272a');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.background).toBe('#3b82f6');
    expect(resolved.components.button.borderRadius).toBe('8px');
    expect(resolved.components.card.background).toBe('#18181b');
  });

  it('2u. should resolve Scrapbook with warm album paper, Lora and Playfair typography, and stamped paper tags', () => {
    const resolved = engine.resolveStyleById('scrapbook');

    expect(resolved.styleId).toBe('scrapbook');
    expect(resolved.styleName).toBe('Scrapbook');
    expect(resolved.tokens.colors.background).toBe('#f7f3e8');
    expect(resolved.tokens.colors.surface).toBe('#fffef9');
    expect(resolved.tokens.colors.accent).toBe('#b91c1c');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Lora');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Playfair Display');
    expect(resolved.tokens.radii.md).toBe('3px');
    expect(resolved.components.button.borderRadius).toBe('2px');
    expect(resolved.components.button.background).toBe('#1c1917');
    expect(resolved.components.card.background).toBe('#fffef9');
  });

  it('2v. should resolve Claymorphism with inflated surfaces, generous rounded radii, and soft multi-layered shadows', () => {
    const resolved = engine.resolveStyleById('claymorphism');

    expect(resolved.styleId).toBe('claymorphism');
    expect(resolved.styleName).toBe('Claymorphism');
    expect(resolved.tokens.colors.background).toBe('#f6f3eb');
    expect(resolved.tokens.colors.surface).toBe('#ffffff');
    expect(resolved.tokens.colors.primary).toBe('#6366f1');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Plus Jakarta Sans');
    expect(resolved.tokens.radii.md).toBe('22px');
    expect(resolved.tokens.radii.lg).toBe('30px');
    expect(resolved.components.button.borderRadius).toBe('9999px');
    expect(resolved.components.button.background).toBe('#6366f1');
    expect(resolved.components.card.background).toBe('#ffffff');
    expect(resolved.components.card.borderRadius).toBe('30px');
  });

  it('2w. should resolve Victorian with aged parchment, botanical forest green, Castoro Titling and EB Garamond typography, and crisp framing', () => {
    const resolved = engine.resolveStyleById('victorian');

    expect(resolved.styleId).toBe('victorian');
    expect(resolved.styleName).toBe('Victorian');
    expect(resolved.tokens.colors.background).toBe('#f7f2e7');
    expect(resolved.tokens.colors.surface).toBe('#fcfaf5');
    expect(resolved.tokens.colors.primary).toBe('#1b3b2b');
    expect(resolved.tokens.colors.accent).toBe('#9e783e');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Castoro Titling');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('EB Garamond');
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.components.button.borderRadius).toBe('2px');
    expect(resolved.components.button.background).toBe('#1b3b2b');
    expect(resolved.components.card.background).toBe('#fcfaf5');
  });

  it('2x. should resolve Cybercore with obsidian substrate, phosphor green, Space Grotesk and JetBrains Mono typography, and sharp technical precision', () => {
    const resolved = engine.resolveStyleById('cybercore');

    expect(resolved.styleId).toBe('cybercore');
    expect(resolved.styleName).toBe('Cybercore');
    expect(resolved.tokens.colors.background).toBe('#0c0e12');
    expect(resolved.tokens.colors.surface).toBe('#13171f');
    expect(resolved.tokens.colors.primary).toBe('#00ff66');
    expect(resolved.tokens.colors.accent).toBe('#00f0ff');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
    expect(resolved.tokens.typography.fontFamilyMono).toContain('JetBrains Mono');
    expect(resolved.tokens.radii.sm).toBe('1px');
    expect(resolved.components.button.borderRadius).toBe('1px');
    expect(resolved.components.button.background).toBe('#00ff66');
    expect(resolved.components.card.background).toBe('#13171f');
    expect(resolved.components.card.borderColor).toBe('#242b35');
  });

  it('2y. should resolve Synthwave with midnight purple void, outrun sunset gradients, Orbitron typography, and arcade neon glows', () => {
    const resolved = engine.resolveStyleById('synthwave');

    expect(resolved.styleId).toBe('synthwave');
    expect(resolved.styleName).toBe('Synthwave');
    expect(resolved.tokens.colors.background).toBe('#0f051d');
    expect(resolved.tokens.colors.surface).toBe('#190a34');
    expect(resolved.tokens.colors.primary).toBe('#ff2a85');
    expect(resolved.tokens.colors.accent).toBe('#01cdfe');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Orbitron');
    expect(resolved.tokens.typography.letterSpacingHeading).toBe('0.06em');
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.tokens.radii.md).toBe('4px');
    expect(resolved.components.button.borderRadius).toBe('3px');
    expect(resolved.components.button.background).toContain('#ff2a85');
    expect(resolved.components.card.borderColor).toBe('rgba(255, 42, 133, 0.25)');
  });

  it('2z. should resolve Graffiti with asphalt concrete substrate, spray crimson, Anton and Permanent Marker typography, and street art stickers', () => {
    const resolved = engine.resolveStyleById('graffiti');

    expect(resolved.styleId).toBe('graffiti');
    expect(resolved.styleName).toBe('Graffiti');
    expect(resolved.tokens.colors.background).toBe('#121214');
    expect(resolved.tokens.colors.surface).toBe('#1c1d22');
    expect(resolved.tokens.colors.primary).toBe('#ff1e42');
    expect(resolved.tokens.colors.accent).toBe('#ffea00');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Anton');
    expect(resolved.tokens.typography.fontFamilyMono).toContain('Permanent Marker');
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.tokens.radii.md).toBe('5px');
    expect(resolved.components.button.borderRadius).toBe('4px');
    expect(resolved.components.button.background).toBe('#ff1e42');
    expect(resolved.components.card.borderColor).toBe('#2e2f38');
  });

  it('2aa. should resolve Gothic with cathedral stone substrate, antique brass, Cinzel and EB Garamond typography, and lancet arch geometry', () => {
    const resolved = engine.resolveStyleById('gothic');

    expect(resolved.styleId).toBe('gothic');
    expect(resolved.styleName).toBe('Gothic');
    expect(resolved.tokens.colors.background).toBe('#0c0c0e');
    expect(resolved.tokens.colors.surface).toBe('#151518');
    expect(resolved.tokens.colors.primary).toBe('#c5a059');
    expect(resolved.tokens.colors.accent).toBe('#631326');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Cinzel');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('EB Garamond');
    expect(resolved.tokens.radii.lg).toBe('16px');
    expect(resolved.tokens.radii.md).toBe('3px');
    expect(resolved.components.button.borderRadius).toBe('2px');
    expect(resolved.components.button.background).toContain('#1f1a14');
    expect(resolved.components.card.borderColor).toBe('#2e2c28');
  });

  it('2ab. should resolve Mixed Media with fine art cotton rag substrate, vermilion accent, Cormorant Garamond and Inter typography, and matted print radii', () => {
    const resolved = engine.resolveStyleById('mixed-media');

    expect(resolved.styleId).toBe('mixed-media');
    expect(resolved.styleName).toBe('Mixed Media');
    expect(resolved.tokens.colors.background).toBe('#f8f6f0');
    expect(resolved.tokens.colors.surface).toBe('#ffffff');
    expect(resolved.tokens.colors.primary).toBe('#1a1918');
    expect(resolved.tokens.colors.accent).toBe('#e63926');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Cormorant Garamond');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.radii.sm).toBe('1px');
    expect(resolved.tokens.radii.md).toBe('2px');
    expect(resolved.components.button.borderRadius).toBe('1px');
    expect(resolved.components.button.background).toBe('#1a1918');
    expect(resolved.components.card.borderColor).toBe('#e2ddd4');
  });

  it('2ac. should resolve Art Deco with obsidian lacquer substrate, metallic gold, Playfair Display typography, and sharp geometric corners', () => {
    const resolved = engine.resolveStyleById('art-deco');

    expect(resolved.styleId).toBe('art-deco');
    expect(resolved.styleName).toBe('Art Deco');
    expect(resolved.tokens.colors.background).toBe('#0e0e11');
    expect(resolved.tokens.colors.surface).toBe('#16161b');
    expect(resolved.tokens.colors.primary).toBe('#d4af37');
    expect(resolved.tokens.colors.accent).toBe('#0f382a');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Playfair Display');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.typography.letterSpacingHeading).toBe('0.14em');
    expect(resolved.tokens.radii.sm).toBe('0px');
    expect(resolved.tokens.radii.full).toBe('0px');
    expect(resolved.components.button.borderRadius).toBe('0px');
    expect(resolved.components.button.background).toContain('#1c1a16');
    expect(resolved.components.card.borderColor).toBe('#2e2a22');
  });

  it('2ad. should resolve Bauhaus with unbleached cream paper, primary red/blue/yellow, Space Grotesk typography, and strict 0px geometry', () => {
    const resolved = engine.resolveStyleById('bauhaus');

    expect(resolved.styleId).toBe('bauhaus');
    expect(resolved.styleName).toBe('Bauhaus');
    expect(resolved.tokens.colors.background).toBe('#f7f5f0');
    expect(resolved.tokens.colors.surface).toBe('#ffffff');
    expect(resolved.tokens.colors.primary).toBe('#d9261e');
    expect(resolved.tokens.colors.accent).toBe('#1b4f9b');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.typography.letterSpacingHeading).toBe('-0.02em');
    expect(resolved.tokens.radii.sm).toBe('0px');
    expect(resolved.tokens.radii.none).toBe('0px');
    expect(resolved.components.button.borderRadius).toBe('0px');
    expect(resolved.components.button.background).toBe('#d9261e');
    expect(resolved.components.button.borderWidth).toBe('2px');
    expect(resolved.components.card.borderColor).toBe('#121212');
  });

  // 3. Meaningful distinctions across typography, borders, radii, and shadows
  it('3. should enforce genuine visual divergence between the twenty-three proof styles', () => {
    const min = engine.resolveStyleById('minimalism');
    const brut = engine.resolveStyleById('brutalism');
    const glass = engine.resolveStyleById('glassmorphism');
    const max = engine.resolveStyleById('maximalism');
    const swiss = engine.resolveStyleById('swiss-design');
    const surreal = engine.resolveStyleById('surrealism');
    const neoBrut = engine.resolveStyleById('neo-brutalism');
    const neoClass = engine.resolveStyleById('neo-classical');
    const lux = engine.resolveStyleById('luxury-typography');
    const ed = engine.resolveStyleById('editorial-design');
    const y2k = engine.resolveStyleById('y2k-aesthetic');
    const bento = engine.resolveStyleById('bento-grid');
    const pixel = engine.resolveStyleById('pixel-art');
    const sketch = engine.resolveStyleById('conceptual-sketch');
    const ethereal = engine.resolveStyleById('ethereal');
    const boh = engine.resolveStyleById('bohemian');
    const cyber = engine.resolveStyleById('cyberpunk');
    const anthro = engine.resolveStyleById('anthropomorphic');
    const neu = engine.resolveStyleById('neumorphism');
    const dark = engine.resolveStyleById('dark-mode-ui');
    const sb = engine.resolveStyleById('scrapbook');
    const clay = engine.resolveStyleById('claymorphism');
    const vic = engine.resolveStyleById('victorian');
    const cc = engine.resolveStyleById('cybercore');
    const sw = engine.resolveStyleById('synthwave');
    const gf = engine.resolveStyleById('graffiti');
    const gt = engine.resolveStyleById('gothic');
    const mm = engine.resolveStyleById('mixed-media');
    const ad = engine.resolveStyleById('art-deco');
    const bh = engine.resolveStyleById('bauhaus');

    // Radii divergence
    expect(brut.tokens.radii.md).toBe('0px');
    expect(min.tokens.radii.md).toBe('5px');
    expect(glass.tokens.radii.md).toBe('16px');
    expect(max.tokens.radii.md).toBe('4px');
    expect(swiss.tokens.radii.md).toBe('0px');
    expect(surreal.tokens.radii.md).toBe('24px 8px 24px 8px');
    expect(neoBrut.tokens.radii.md).toBe('12px');
    expect(neoClass.tokens.radii.md).toBe('4px');
    expect(lux.tokens.radii.md).toBe('1px');
    expect(ed.tokens.radii.md).toBe('2px');
    expect(y2k.tokens.radii.md).toBe('16px');
    expect(bento.tokens.radii.md).toBe('18px');
    expect(pixel.tokens.radii.md).toBe('0px');
    expect(sketch.tokens.radii.md).toBe('3px');
    expect(ethereal.tokens.radii.md).toBe('10px');
    expect(boh.tokens.radii.md).toBe('16px');
    expect(cyber.tokens.radii.md).toBe('0px');
    expect(anthro.tokens.radii.md).toBe('22px 28px 20px 26px');
    expect(neu.tokens.radii.md).toBe('16px');
    expect(dark.tokens.radii.md).toBe('10px');
    expect(sb.tokens.radii.md).toBe('3px');
    expect(clay.tokens.radii.md).toBe('22px');
    expect(vic.tokens.radii.md).toBe('3px');
    expect(cc.tokens.radii.md).toBe('2px');
    expect(sw.tokens.radii.md).toBe('4px');
    expect(gf.tokens.radii.md).toBe('5px');
    expect(gt.tokens.radii.lg).toBe('16px');
    expect(ad.tokens.radii.sm).toBe('0px');
    expect(bh.tokens.radii.sm).toBe('0px');

    // Border width divergence
    expect(brut.tokens.borders.widthBase).toBe('3px');
    expect(min.tokens.borders.widthBase).toBe('1px');
    expect(max.tokens.borders.widthBase).toBe('2px');
    expect(swiss.tokens.borders.widthBase).toBe('1px');
    expect(surreal.tokens.borders.widthBase).toBe('1px');
    expect(neoBrut.tokens.borders.widthBase).toBe('2px');
    expect(neoClass.tokens.borders.widthBase).toBe('1px');
    expect(lux.tokens.borders.widthBase).toBe('1px');
    expect(ed.tokens.borders.widthBase).toBe('1px');
    expect(y2k.tokens.borders.widthBase).toBe('1px');
    expect(bento.tokens.borders.widthBase).toBe('1px');
    expect(pixel.tokens.borders.widthBase).toBe('3px');
    expect(sketch.tokens.borders.widthBase).toBe('1.5px');
    expect(ethereal.tokens.borders.widthBase).toBe('1px');
    expect(boh.tokens.borders.widthBase).toBe('1.5px');
    expect(cyber.tokens.borders.widthBase).toBe('2px');
    expect(neu.tokens.borders.widthBase).toBe('0px');
    expect(dark.tokens.borders.widthBase).toBe('1px');
    expect(bh.tokens.borders.widthBase).toBe('2px');

    // Shadow treatment divergence
    expect(brut.tokens.shadows.sm).toContain('3px 3px 0px');
    expect(min.tokens.shadows.sm).toContain('0 1px 2px');
    expect(glass.tokens.shadows.sm).toContain('0 4px 16px');
    expect(max.tokens.shadows.md).toContain('3px 3px 0px');
    expect(swiss.tokens.shadows.sm).toBe('none');
    expect(surreal.tokens.shadows.sm).toContain('0 4px 14px');
    expect(neoBrut.tokens.shadows.sm).toBe('3px 3px 0px #121212');
    expect(neoClass.tokens.shadows.sm).toContain('0 2px 8px');
    expect(lux.tokens.shadows.sm).toContain('0 2px 10px');
    expect(ed.tokens.shadows.sm).toContain('0 1px 3px');
    expect(y2k.tokens.shadows.sm).toContain('0 2px 6px');
    expect(bento.tokens.shadows.sm).toContain('0 1px 3px');
    expect(pixel.tokens.shadows.sm).toBe('2px 2px 0px #000000');
    expect(sketch.tokens.shadows.sm).toContain('2px 2px 0px rgba(31, 33, 36, 0.08)');
    expect(ethereal.tokens.shadows.sm).toContain('0 2px 8px rgba(148, 163, 184, 0.08)');
    expect(boh.tokens.shadows.sm).toContain('0 2px 8px rgba(74, 56, 44, 0.05)');
    expect(cyber.tokens.shadows.sm).toContain('0 0 10px rgba(0, 240, 255, 0.3)');

    // Button border radius divergence
    expect(brut.components.button.borderRadius).toBe('0px');
    expect(glass.components.button.borderRadius).toBe('9999px');
    expect(max.components.button.borderRadius).toBe('3px');
    expect(swiss.components.button.borderRadius).toBe('0px');
    expect(surreal.components.button.borderRadius).toBe('9999px');
    expect(neoBrut.components.button.borderRadius).toBe('10px');
    expect(neoClass.components.button.borderRadius).toBe('2px');
    expect(lux.components.button.borderRadius).toBe('0px');
    expect(ed.components.button.borderRadius).toBe('2px');
    expect(y2k.components.button.borderRadius).toBe('9999px');
    expect(bento.components.button.borderRadius).toBe('12px');
    expect(pixel.components.button.borderRadius).toBe('0px');
    expect(sketch.components.button.borderRadius).toBe('3px');
    expect(ethereal.components.button.borderRadius).toBe('10px');
    expect(boh.components.button.borderRadius).toBe('16px 22px 14px 20px');
    expect(cyber.components.button.borderRadius).toBe('0px');
    expect(dark.components.button.borderRadius).toBe('8px');
    expect(sb.components.button.borderRadius).toBe('2px');
    expect(sw.components.button.borderRadius).toBe('3px');
    expect(gf.components.button.borderRadius).toBe('4px');
    expect(gt.components.button.borderRadius).toBe('2px');
    expect(mm.components.button.borderRadius).toBe('1px');
    expect(ad.components.button.borderRadius).toBe('0px');
    expect(bh.components.button.borderRadius).toBe('0px');

    // Primary color divergence
    expect(brut.tokens.colors.primary).toBe('#ffe600');
    expect(min.tokens.colors.primary).toBe('#18181b');
    expect(glass.tokens.colors.primary).toBe('#38bdf8');
    expect(max.tokens.colors.primary).toBe('#701a2b');
    expect(swiss.tokens.colors.primary).toBe('#ef4444');
    expect(surreal.tokens.colors.primary).toBe('#3b1124');
    expect(neoBrut.tokens.colors.primary).toBe('#ff5a5f');
    expect(neoClass.tokens.colors.primary).toBe('#1a1917');
    expect(lux.tokens.colors.primary).toBe('#121211');
    expect(ed.tokens.colors.primary).toBe('#141413');
    expect(y2k.tokens.colors.primary).toBe('#0284c7');
    expect(bento.tokens.colors.primary).toBe('#4f46e5');
    expect(pixel.tokens.colors.primary).toBe('#22c55e');
    expect(sketch.tokens.colors.primary).toBe('#1f2124');
    expect(ethereal.tokens.colors.primary).toBe('#1e2029');
    expect(boh.tokens.colors.primary).toBe('#c85a32');
    expect(cyber.tokens.colors.primary).toBe('#ffe600');
    expect(dark.tokens.colors.background).toBe('#09090b');
    expect(sb.tokens.colors.background).toBe('#f7f3e8');
    expect(sw.tokens.colors.primary).toBe('#ff2a85');
    expect(sw.tokens.colors.background).toBe('#0f051d');
    expect(gf.tokens.colors.primary).toBe('#ff1e42');
    expect(gf.tokens.colors.background).toBe('#121214');
    expect(gt.tokens.colors.primary).toBe('#c5a059');
    expect(gt.tokens.colors.background).toBe('#0c0c0e');
    expect(mm.tokens.colors.accent).toBe('#e63926');
    expect(mm.tokens.colors.background).toBe('#f8f6f0');
    expect(ad.tokens.colors.primary).toBe('#d4af37');
    expect(ad.tokens.colors.background).toBe('#0e0e11');
    expect(ad.tokens.colors.accent).toBe('#0f382a');
    expect(bh.tokens.colors.primary).toBe('#d9261e');
    expect(bh.tokens.colors.background).toBe('#f7f5f0');
    expect(bh.tokens.colors.accent).toBe('#1b4f9b');
  });

  // 4. Removing / resetting restores base behavior
  it('4. should restore base behavior when resetting style to base', () => {
    const initialBase = engine.resolveStyleById('base');
    const brut = engine.resolveStyleById('brutalism');
    expect(brut.styleId).toBe('brutalism');

    const resetBase = engine.resolveStyleById('base');
    expect(resetBase.tokens).toEqual(initialBase.tokens);
    expect(resetBase.components).toEqual(initialBase.components);
  });

  // 5. Scope representation
  it('5. should correctly represent scope levels and ancestor hierarchy', () => {
    const pageScope: ScopeContext = { level: 'page', styleId: 'glassmorphism' };
    const sectionScope: ScopeContext = { level: 'section', styleId: 'glassmorphism', parentScope: pageScope };
    const cardScope: ScopeContext = { level: 'component', styleId: 'glassmorphism', parentScope: sectionScope };

    const resolved = engine.resolveScope(cardScope);

    expect(resolved.scope.level).toBe('component');
    expect(resolved.scope.effectiveStyleId).toBe('glassmorphism');
    expect(resolved.scope.scopeChain).toEqual([
      { level: 'page', styleId: 'glassmorphism' },
      { level: 'section', styleId: 'glassmorphism' },
      { level: 'component', styleId: 'glassmorphism' },
    ]);
  });

  // 6. Target scoping in playground: specific scope overrides parent
  it('6. should allow a section (Hero) to be Brutalism while page is Minimalism without style bleed', () => {
    const pageScope: ScopeContext = { level: 'page', styleId: 'minimalism' };
    const heroSectionScope: ScopeContext = {
      level: 'section',
      styleId: 'brutalism',
      parentScope: pageScope,
    };

    const resolvedPage = engine.resolveScope(pageScope);
    const resolvedHero = engine.resolveScope(heroSectionScope);

    expect(resolvedPage.styleId).toBe('minimalism');
    expect(resolvedPage.tokens.radii.md).toBe('5px');
    expect(resolvedPage.tokens.borders.widthBase).toBe('1px');

    expect(resolvedHero.styleId).toBe('brutalism');
    expect(resolvedHero.tokens.radii.md).toBe('0px');
    expect(resolvedHero.tokens.borders.widthBase).toBe('3px');
    expect(resolvedHero.tokens.shadows.sm).toBe('3px 3px 0px #000000');
  });

  // 7. Invalid style identifiers safely fall back
  it('7. should safely fall back to base style when an invalid style is requested', () => {
    const resolved = engine.resolveStyleById('unknown-style-xyz');

    expect(resolved.fallbackUsed).toBe(true);
    expect(resolved.styleId).toBe('base');
    expect(resolved.tokens.colors.primary).toBe('#2563eb');
  });
});
