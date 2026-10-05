import { describe, it, expect, beforeEach } from 'vitest';

// CRITICAL: Import ONLY from the canonical public API entry point
import {
  StyleEngine,
  StyleRegistry,
  StyleResolver,
  CSSAdapter,
  StructureAnalyzer,
  RoleResolver,
  RecipeEngine,
  AdaptiveCSSGenerator,
  injectAdaptiveStyles,
  enhanceHTML,
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
  bohemianSemanticCss,
  cyberpunkStyle,
  cyberpunkSemanticCss,
  anthropomorphicStyle,
  anthropomorphicSemanticCss,
  neumorphismStyle,
  neumorphicSemanticCss,
  darkModeUiStyle,
  darkModeUiSemanticCss,
  scrapbookStyle,
  scrapbookSemanticCss,
  claymorphismStyle,
  claymorphicSemanticCss,
  wabiSabiStyle,
  victorianStyle,
  victorianSemanticCss,
  cybercoreStyle,
  cybercoreSemanticCss,
  synthwaveStyle,
  synthwaveSemanticCss,
  graffitiStyle,
  graffitiSemanticCss,
  gothicStyle,
  gothicSemanticCss,
  mixedMediaStyle,
  mixedMediaSemanticCss,
  artDecoStyle,
  artDecoSemanticCss,
  bauhausStyle,
  bauhausSemanticCss,
  solarpunkStyle,
  solarpunkSemanticCss,
  defaultStyles,
  ALL_29_STYLES,
} from '../index';

describe('Public API & Reusable Consumer Interface Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine();
  });

  it('1. should import all public engine classes and helpers from the canonical package entry point', () => {
    expect(StyleEngine).toBeDefined();
    expect(StyleRegistry).toBeDefined();
    expect(StyleResolver).toBeDefined();
    expect(CSSAdapter).toBeDefined();
    expect(StructureAnalyzer).toBeDefined();
    expect(RoleResolver).toBeDefined();
    expect(RecipeEngine).toBeDefined();
    expect(AdaptiveCSSGenerator).toBeDefined();
    expect(enhanceHTML).toBeDefined();
    expect(injectAdaptiveStyles).toBeDefined();
    expect(baseStyle).toBeDefined();
    expect(brutalismStyle).toBeDefined();
    expect(minimalismStyle).toBeDefined();
    expect(glassmorphismStyle).toBeDefined();
    expect(maximalismStyle).toBeDefined();
    expect(swissDesignStyle).toBeDefined();
    expect(surrealismStyle).toBeDefined();
    expect(neoBrutalismStyle).toBeDefined();
    expect(neoClassicalStyle).toBeDefined();
    expect(luxuryTypographyStyle).toBeDefined();
    expect(editorialDesignStyle).toBeDefined();
    expect(y2kAestheticStyle).toBeDefined();
    expect(bentoGridStyle).toBeDefined();
    expect(pixelArtStyle).toBeDefined();
    expect(conceptualSketchStyle).toBeDefined();
    expect(etherealStyle).toBeDefined();
    expect(bohemianStyle).toBeDefined();
    expect(bohemianSemanticCss).toBeDefined();
    expect(cyberpunkStyle).toBeDefined();
    expect(cyberpunkSemanticCss).toBeDefined();
    expect(anthropomorphicStyle).toBeDefined();
    expect(anthropomorphicSemanticCss).toBeDefined();
    expect(neumorphismStyle).toBeDefined();
    expect(neumorphicSemanticCss).toBeDefined();
    expect(darkModeUiStyle).toBeDefined();
    expect(darkModeUiSemanticCss).toBeDefined();
    expect(scrapbookStyle).toBeDefined();
    expect(scrapbookSemanticCss).toBeDefined();
    expect(claymorphismStyle).toBeDefined();
    expect(claymorphicSemanticCss).toBeDefined();
    expect(wabiSabiStyle).toBeDefined();
    expect(victorianStyle).toBeDefined();
    expect(victorianSemanticCss).toBeDefined();
    expect(cybercoreStyle).toBeDefined();
    expect(cybercoreSemanticCss).toBeDefined();
    expect(synthwaveStyle).toBeDefined();
    expect(synthwaveSemanticCss).toBeDefined();
    expect(graffitiStyle).toBeDefined();
    expect(graffitiSemanticCss).toBeDefined();
    expect(gothicStyle).toBeDefined();
    expect(gothicSemanticCss).toBeDefined();
    expect(mixedMediaStyle).toBeDefined();
    expect(mixedMediaSemanticCss).toBeDefined();
    expect(artDecoStyle).toBeDefined();
    expect(artDecoSemanticCss).toBeDefined();
    expect(bauhausStyle).toBeDefined();
    expect(bauhausSemanticCss).toBeDefined();
    expect(solarpunkStyle).toBeDefined();
    expect(solarpunkSemanticCss).toBeDefined();
    expect(defaultStyles).toHaveLength(33);
    expect(ALL_29_STYLES).toHaveLength(32);
  });

  it('2. should resolve Minimalism through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('minimalism');
    expect(resolved.styleId).toBe('minimalism');
    expect(resolved.styleName).toBe('Minimalism');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.radii.md).toBe('5px');
    expect(resolved.components.button.background).toBe('#18181b');
  });

  it('3. should resolve Brutalism through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('brutalism');
    expect(resolved.styleId).toBe('brutalism');
    expect(resolved.styleName).toBe('Brutalism');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
    expect(resolved.tokens.borders.widthBase).toBe('3px');
    expect(resolved.components.button.boxShadow).toContain('4px 4px 0px');
    expect(resolved.components.button.background).toBe('#ffe600');
  });

  it('4. should resolve Glassmorphism through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('glassmorphism');
    expect(resolved.styleId).toBe('glassmorphism');
    expect(resolved.styleName).toBe('Glassmorphism');
    expect(resolved.tokens.colors.background).toBe('#090d16');
    expect(resolved.components.card.backdropFilter).toContain('blur');
    expect(resolved.components.button.borderRadius).toBe('9999px');
  });

  it('4b. should resolve Swiss Design, Surrealism, Neo-Brutalism, Neo-Classical, Cyberpunk, and Wabi-Sabi through the public StyleEngine API', () => {
    const swiss = engine.resolveStyle('swiss-design');
    expect(swiss.styleId).toBe('swiss-design');
    expect(swiss.tokens.colors.primary).toBe('#ef4444');
    expect(swiss.tokens.radii.md).toBe('0px');

    const surreal = engine.resolveStyle('surrealism');
    expect(surreal.styleId).toBe('surrealism');
    expect(surreal.tokens.colors.primary).toBe('#3b1124');
    expect(surreal.tokens.colors.accent).toBe('#d97762');
    expect(surreal.tokens.colors.background).toBe('#f5f2eb');

    const neoBrut = engine.resolveStyle('neo-brutalism');
    expect(neoBrut.styleId).toBe('neo-brutalism');
    expect(neoBrut.tokens.colors.primary).toBe('#ff5a5f');
    expect(neoBrut.tokens.colors.accent).toBe('#ffde59');
    expect(neoBrut.tokens.colors.background).toBe('#fffdfa');
    expect(neoBrut.tokens.radii.md).toBe('12px');

    const neoClass = engine.resolveStyle('neo-classical');
    expect(neoClass.styleId).toBe('neo-classical');
    expect(neoClass.tokens.colors.primary).toBe('#1a1917');
    expect(neoClass.tokens.colors.background).toBe('#fcfbf7');
    expect(neoClass.tokens.colors.accent).toBe('#b89758');
    expect(neoClass.tokens.radii.sm).toBe('2px');

    const cyber = engine.resolveStyle('cyberpunk');
    expect(cyber.styleId).toBe('cyberpunk');
    expect(cyber.tokens.colors.primary).toBe('#ffe600');
    expect(cyber.tokens.colors.border).toBe('#00f0ff');
    expect(cyber.tokens.colors.background).toBe('#07090e');

    const wabi = engine.resolveStyle('wabi-sabi');
    expect(wabi.styleId).toBe('wabi-sabi');
    expect(wabi.tokens.colors.background).toBe('#f7f4ee');

    const lux = engine.resolveStyle('luxury-typography');
    expect(lux.styleId).toBe('luxury-typography');
    expect(lux.tokens.colors.primary).toBe('#121211');
    expect(lux.tokens.colors.background).toBe('#faf8f5');
    expect(lux.tokens.colors.accent).toBe('#c2a67e');
    expect(lux.tokens.radii.sm).toBe('0px');

    const ed = engine.resolveStyle('editorial-design');
    expect(ed.styleId).toBe('editorial-design');
    expect(ed.tokens.colors.primary).toBe('#141413');
    expect(ed.tokens.colors.background).toBe('#fbfaf7');
    expect(ed.tokens.colors.accent).toBe('#991b1b');
    expect(ed.tokens.radii.sm).toBe('2px');

    const y2k = engine.resolveStyle('y2k-aesthetic');
    expect(y2k.styleId).toBe('y2k-aesthetic');
    expect(y2k.tokens.colors.primary).toBe('#0284c7');
    expect(y2k.tokens.colors.background).toBe('#f1f5f9');
    expect(y2k.tokens.colors.accent).toBe('#06b6d4');
    expect(y2k.tokens.radii.md).toBe('16px');
    expect(y2k.components.button.borderRadius).toBe('9999px');

    const bento = engine.resolveStyle('bento-grid');
    expect(bento.styleId).toBe('bento-grid');
    expect(bento.tokens.colors.primary).toBe('#4f46e5');
    expect(bento.tokens.colors.background).toBe('#f8fafc');
    expect(bento.tokens.colors.accent).toBe('#6366f1');
    expect(bento.tokens.radii.md).toBe('18px');
    expect(bento.components.button.borderRadius).toBe('12px');
  });

  it('5. should generate universal adaptive CSS containing rules for raw unstyled HTML', () => {
    const css = AdaptiveCSSGenerator.getAdaptiveStyles();
    expect(css).toContain('.style-brutalism');
    expect(css).toContain('.style-minimalism');
    expect(css).toContain('.style-glassmorphism');
    // Verifies raw HTML structural support: headings, paragraphs, buttons, forms, navs
    expect(css).toContain('.style-brutalism:has(> h1)');
    expect(css).toContain('.style-brutalism button');
    expect(css).toContain('.style-brutalism form');
    expect(css).toContain('.style-brutalism nav');
    expect(css).toContain('.style-glassmorphism article');
    expect(css).toContain('.style-minimalism blockquote');
  });

  it('6. should infer semantic roles and recipes across different HTML structures', () => {
    // Structure A: Simple Hero
    const heroSig = StructureAnalyzer.analyze({
      tag: 'div',
      childrenTags: ['h1', 'p', 'button'],
      childCount: 3,
    });
    const heroRole = RoleResolver.resolveRole(heroSig);
    expect(heroRole.role).toBe('hero');
    const heroRecipe = RecipeEngine.resolveRecipe('brutalism', heroRole, engine);
    expect(heroRecipe.recipeName).toContain('Hero');

    // Structure B: Card (item in collection)
    const cardSig = StructureAnalyzer.analyze({
      tag: 'div',
      childrenTags: ['h2', 'p', 'button'],
      childCount: 3,
      siblingIndex: 1,
      totalSiblings: 3,
    });
    const cardRole = RoleResolver.resolveRole(cardSig);
    expect(cardRole.role).toBe('card');

    // Structure C: Form
    const formSig = StructureAnalyzer.analyze({
      tag: 'form',
      childrenTags: ['label', 'input', 'button'],
      childCount: 3,
    });
    const formRole = RoleResolver.resolveRole(formSig);
    expect(formRole.role).toBe('form');

    // Structure D: Article
    const articleSig = StructureAnalyzer.analyze({
      tag: 'article',
      childrenTags: ['h1', 'p', 'blockquote'],
      text: 'Long form editorial reading text '.repeat(15),
    });
    const articleRole = RoleResolver.resolveRole(articleSig);
    expect(articleRole.role).toBe('article');

    // Structure E: Navigation
    const navSig = StructureAnalyzer.analyze({
      tag: 'nav',
      childrenTags: ['a', 'a', 'a', 'button'],
    });
    const navRole = RoleResolver.resolveRole(navSig);
    expect(navRole.role).toBe('navigation');
  });

  it('7. should support hierarchical page -> section -> component inheritance through public API', () => {
    // 1. Page level: Minimalism
    const pageScope = engine.createScope('page', 'minimalism');
    const pageResolved = engine.resolveScope(pageScope);
    expect(pageResolved.styleId).toBe('minimalism');

    // 2. Section inherits from Page
    const sectionScope = engine.createScope('section', undefined, pageScope);
    const sectionResolved = engine.resolveScope(sectionScope);
    expect(sectionResolved.styleId).toBe('minimalism');
    expect(sectionResolved.scope.scopeChain.length).toBe(2);

    // 3. Component override: Brutalism
    const componentScope = engine.createScope('component', 'brutalism', sectionScope);
    const componentResolved = engine.resolveScope(componentScope);
    expect(componentResolved.styleId).toBe('brutalism');
    expect(componentResolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
  });

  it('8. should support local overrides without leaking to sibling scopes', () => {
    const parentScope = engine.createScope('page', 'minimalism');

    // Sibling A: Overridden to Brutalism
    const childA = engine.createScope('component', 'brutalism', parentScope);
    const resolvedA = engine.resolveScope(childA);
    expect(resolvedA.styleId).toBe('brutalism');

    // Sibling B: Inherits from parent (should remain Minimalism)
    const childB = engine.createScope('component', undefined, parentScope);
    const resolvedB = engine.resolveScope(childB);
    expect(resolvedB.styleId).toBe('minimalism');
    expect(resolvedB.tokens.typography.fontFamilyHeading).not.toContain('Space Grotesk');
  });

  it('9. should safely fall back to base style when an invalid style is requested via public API', () => {
    const resolved = engine.resolveStyle('non-existent-style-404');
    expect(resolved.fallbackUsed).toBe(true);
    expect(resolved.styleId).toBe('base');
    expect(resolved.isBase).toBe(true);
  });

  it('10. should allow custom style registration through public StyleRegistry', () => {
    const customStyle = {
      ...baseStyle,
      id: 'custom-retro',
      name: 'Custom Retro',
      tokens: {
        ...baseStyle.tokens,
        colors: {
          ...baseStyle.tokens.colors,
          primary: '#ff0055',
        },
      },
    };

    engine.getRegistry().register(customStyle);
    const resolved = engine.resolveStyle('custom-retro');
    expect(resolved.styleId).toBe('custom-retro');
    expect(resolved.tokens.colors.primary).toBe('#ff0055');
  });

  it('11. should provide enhanceHTML helper to stamp DOM nodes with inferred roles and variants', () => {
    // Helper to create a lightweight mock DOM element for the node test runner
    function createMockElement(tagName: string, text: string = '', className: string = '') {
      const attrs: Record<string, string> = className ? { class: className } : {};
      const children: any[] = [];
      const el = {
        tagName: tagName.toUpperCase(),
        className,
        textContent: text,
        children,
        getAttribute: (name: string) => attrs[name] || null,
        setAttribute: (name: string, val: string) => { attrs[name] = val; },
        matches: (selector: string) => {
          if (selector.includes('style-') && className.includes('style-')) return true;
          return false;
        },
        querySelectorAll: (selector: string) => {
          const results: any[] = [];
          function traverse(node: any) {
            for (const child of node.children) {
              if (selector === 'button, input[type="submit"]' && (child.tagName === 'BUTTON' || child.tagName === 'INPUT')) {
                results.push(child);
              } else if (selector === ':scope > button, :scope > a.button' && (child.tagName === 'BUTTON')) {
                results.push(child);
              } else if (selector === '[class*="style-"]' && child.className?.includes('style-')) {
                results.push(child);
              }
              traverse(child);
            }
          }
          traverse(el);
          return results;
        },
        appendChild: (child: any) => { children.push(child); return child; },
      };
      return el;
    }

    const container = createMockElement('div', '', 'style-brutalism');
    const heroDiv = createMockElement('div', '');
    const h1 = createMockElement('h1', 'Hero Heading');
    const p = createMockElement('p', 'Hero text');
    const btn = createMockElement('button', 'Hero CTA');
    heroDiv.appendChild(h1);
    heroDiv.appendChild(p);
    heroDiv.appendChild(btn);

    const cardDiv = createMockElement('div', '');
    const h2 = createMockElement('h2', 'Card Heading');
    const cardP = createMockElement('p', 'Card text');
    const cardBtn = createMockElement('button', 'Card Action');
    cardDiv.appendChild(h2);
    cardDiv.appendChild(cardP);
    cardDiv.appendChild(cardBtn);

    container.appendChild(heroDiv);
    container.appendChild(cardDiv);

    enhanceHTML(container as any);

    expect(heroDiv.getAttribute('data-role')).toBe('hero');
    expect(btn.getAttribute('data-role')).toBe('cta-button');
    expect(cardDiv.getAttribute('data-role')).toBe('card');
    expect(cardBtn.getAttribute('data-role')).toBe('card-action');
  });

  it('12. should resolve Pixel Art through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('pixel-art');
    expect(resolved.styleId).toBe('pixel-art');
    expect(resolved.styleName).toBe('Pixel Art');
    expect(resolved.tokens.colors.primary).toBe('#22c55e');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Press Start 2P');
    expect(resolved.tokens.radii.md).toBe('0px');
  });

  it('13. should resolve Conceptual Sketch through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('conceptual-sketch');
    expect(resolved.styleId).toBe('conceptual-sketch');
    expect(resolved.styleName).toBe('Conceptual Sketch');
    expect(resolved.tokens.colors.background).toBe('#faf8f3');
    expect(resolved.tokens.colors.primary).toBe('#1f2124');
    expect(resolved.tokens.colors.accent).toBe('#2563eb');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
    expect(resolved.tokens.radii.md).toBe('3px');
    expect(resolved.tokens.borders.widthBase).toBe('1.5px');
  });

  it('14. should resolve Ethereal through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('ethereal');
    expect(resolved.styleId).toBe('ethereal');
    expect(resolved.styleName).toBe('Ethereal');
    expect(resolved.tokens.colors.background).toBe('#fbfaf8');
    expect(resolved.tokens.colors.primary).toBe('#1e2029');
    expect(resolved.tokens.colors.accent).toBe('#818cf8');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Cormorant Garamond');
    expect(resolved.tokens.radii.md).toBe('10px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
  });

  it('15. should resolve Bohemian through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('bohemian');
    expect(resolved.styleId).toBe('bohemian');
    expect(resolved.styleName).toBe('Bohemian');
    expect(resolved.tokens.colors.background).toBe('#fbf7ee');
    expect(resolved.tokens.colors.primary).toBe('#c85a32');
    expect(resolved.tokens.colors.accent).toBe('#d48b16');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Fraunces');
    expect(resolved.tokens.radii.md).toBe('16px');
    expect(resolved.tokens.borders.widthBase).toBe('1.5px');
  });

  it('16. should resolve Cyberpunk through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('cyberpunk');
    expect(resolved.styleId).toBe('cyberpunk');
    expect(resolved.styleName).toBe('Cyberpunk');
    expect(resolved.tokens.colors.background).toBe('#07090e');
    expect(resolved.tokens.colors.primary).toBe('#ffe600');
    expect(resolved.tokens.colors.border).toBe('#00f0ff');
    expect(resolved.tokens.radii.none).toBe('0px');
    expect(resolved.tokens.borders.widthBase).toBe('2px');
  });

  it('17. should resolve Anthropomorphic through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('anthropomorphic');
    expect(resolved.styleId).toBe('anthropomorphic');
    expect(resolved.styleName).toBe('Anthropomorphic');
    expect(resolved.tokens.colors.background).toBe('#fdfbf7');
    expect(resolved.tokens.colors.primary).toBe('#ff6b57');
    expect(resolved.tokens.colors.accent).toBe('#4a80e8');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Outfit');
    expect(resolved.tokens.radii.md).toBe('22px 28px 20px 26px');
    expect(resolved.tokens.borders.widthBase).toBe('1.5px');
    expect(resolved.components.button.background).toBe('#ff6b57');
  });

  it('18. should resolve Neumorphism through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('neumorphism');
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

  it('19. should resolve Dark Mode UI through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('dark-mode-ui');
    expect(resolved.styleId).toBe('dark-mode-ui');
    expect(resolved.styleName).toBe('Dark Mode UI');
    expect(resolved.tokens.colors.background).toBe('#09090b');
    expect(resolved.tokens.colors.surface).toBe('#111113');
    expect(resolved.tokens.colors.surfaceSubtle).toBe('#18181b');
    expect(resolved.tokens.colors.textPrimary).toBe('#fafafa');
    expect(resolved.tokens.colors.textSecondary).toBe('#a1a1aa');
    expect(resolved.tokens.colors.primary).toBe('#3b82f6');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.background).toBe('#3b82f6');
    expect(resolved.components.button.borderRadius).toBe('8px');
    expect(resolved.components.card.background).toBe('#18181b');
  });

  it('20. should resolve Scrapbook through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('scrapbook');
    expect(resolved.styleId).toBe('scrapbook');
    expect(resolved.styleName).toBe('Scrapbook');
    expect(resolved.tokens.colors.background).toBe('#f7f3e8');
    expect(resolved.tokens.colors.surface).toBe('#fffef9');
    expect(resolved.tokens.colors.accent).toBe('#b91c1c');
    expect(resolved.tokens.borders.widthBase).toBe('1px');
    expect(resolved.components.button.background).toBe('#1c1917');
    expect(resolved.components.button.borderRadius).toBe('2px');
    expect(resolved.components.card.background).toBe('#fffef9');
  });

  it('21. should resolve Claymorphism through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('claymorphism');
    expect(resolved.styleId).toBe('claymorphism');
    expect(resolved.styleName).toBe('Claymorphism');
    expect(resolved.tokens.colors.background).toBe('#f6f3eb');
    expect(resolved.tokens.colors.surface).toBe('#ffffff');
    expect(resolved.tokens.colors.primary).toBe('#6366f1');
    expect(resolved.tokens.radii.lg).toBe('30px');
    expect(resolved.components.button.background).toBe('#6366f1');
    expect(resolved.components.button.borderRadius).toBe('9999px');
    expect(resolved.components.card.background).toBe('#ffffff');
    expect(resolved.components.card.borderRadius).toBe('30px');
  });

  it('22. should resolve Victorian through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('victorian');
    expect(resolved.styleId).toBe('victorian');
    expect(resolved.styleName).toBe('Victorian');
    expect(resolved.tokens.colors.background).toBe('#f7f2e7');
    expect(resolved.tokens.colors.surface).toBe('#fcfaf5');
    expect(resolved.tokens.colors.primary).toBe('#1b3b2b');
    expect(resolved.tokens.colors.accent).toBe('#9e783e');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Castoro Titling');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('EB Garamond');
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.components.button.background).toBe('#1b3b2b');
    expect(resolved.components.button.borderRadius).toBe('2px');
    expect(resolved.components.card.background).toBe('#fcfaf5');
    expect(resolved.components.card.borderColor).toBe('#d8cdb8');
  });

  it('23. should resolve Cybercore through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('cybercore');
    expect(resolved.styleId).toBe('cybercore');
    expect(resolved.styleName).toBe('Cybercore');
    expect(resolved.tokens.colors.background).toBe('#0c0e12');
    expect(resolved.tokens.colors.surface).toBe('#13171f');
    expect(resolved.tokens.colors.primary).toBe('#00ff66');
    expect(resolved.tokens.colors.accent).toBe('#00f0ff');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
    expect(resolved.tokens.typography.fontFamilyMono).toContain('JetBrains Mono');
    expect(resolved.tokens.radii.sm).toBe('1px');
    expect(resolved.components.button.background).toBe('#00ff66');
    expect(resolved.components.button.borderRadius).toBe('1px');
    expect(resolved.components.card.background).toBe('#13171f');
    expect(resolved.components.card.borderColor).toBe('#242b35');
  });

  it('24. should resolve Synthwave through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('synthwave');
    expect(resolved.styleId).toBe('synthwave');
    expect(resolved.styleName).toBe('Synthwave');
    expect(resolved.tokens.colors.background).toBe('#0f051d');
    expect(resolved.tokens.colors.surface).toBe('#190a34');
    expect(resolved.tokens.colors.primary).toBe('#ff2a85');
    expect(resolved.tokens.colors.accent).toBe('#01cdfe');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Orbitron');
    expect(resolved.tokens.typography.letterSpacingHeading).toBe('0.06em');
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.components.button.background).toContain('#ff2a85');
    expect(resolved.components.button.borderRadius).toBe('3px');
    expect(resolved.components.card.borderColor).toBe('rgba(255, 42, 133, 0.25)');
  });

  it('25. should resolve Graffiti through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('graffiti');
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
    expect(resolved.components.button.background).toBe('#ff1e42');
    expect(resolved.components.button.borderRadius).toBe('4px');
    expect(resolved.components.card.borderColor).toBe('#2e2f38');
  });

  it('26. should resolve Gothic through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('gothic');
    expect(resolved.styleId).toBe('gothic');
    expect(resolved.styleName).toBe('Gothic');
    expect(resolved.tokens.colors.background).toBe('#0c0c0e');
    expect(resolved.tokens.colors.surface).toBe('#151518');
    expect(resolved.tokens.colors.primary).toBe('#c5a059');
    expect(resolved.tokens.colors.accent).toBe('#631326');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Cinzel');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('EB Garamond');
    expect(resolved.tokens.radii.lg).toBe('16px');
    expect(resolved.components.button.background).toContain('#1f1a14');
    expect(resolved.components.button.borderRadius).toBe('2px');
    expect(resolved.components.card.borderColor).toBe('#2e2c28');
  });

  it('27. should resolve Mixed Media through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('mixed-media');
    expect(resolved.styleId).toBe('mixed-media');
    expect(resolved.styleName).toBe('Mixed Media');
    expect(resolved.tokens.colors.background).toBe('#f8f6f0');
    expect(resolved.tokens.colors.surface).toBe('#ffffff');
    expect(resolved.tokens.colors.primary).toBe('#1a1918');
    expect(resolved.tokens.colors.accent).toBe('#e63926');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Cormorant Garamond');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.radii.sm).toBe('1px');
    expect(resolved.components.button.background).toBe('#1a1918');
    expect(resolved.components.button.borderRadius).toBe('1px');
    expect(resolved.components.card.borderColor).toBe('#e2ddd4');
  });

  it('28. should resolve Art Deco through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('art-deco');
    expect(resolved.styleId).toBe('art-deco');
    expect(resolved.styleName).toBe('Art Deco');
    expect(resolved.tokens.colors.background).toBe('#0e0e11');
    expect(resolved.tokens.colors.surface).toBe('#16161b');
    expect(resolved.tokens.colors.primary).toBe('#d4af37');
    expect(resolved.tokens.colors.accent).toBe('#0f382a');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Playfair Display');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.radii.sm).toBe('0px');
    expect(resolved.tokens.radii.full).toBe('0px');
    expect(resolved.components.button.background).toContain('#1c1a16');
    expect(resolved.components.button.borderRadius).toBe('0px');
    expect(resolved.components.card.borderColor).toBe('#2e2a22');
  });

  it('29. should resolve Bauhaus through the public StyleEngine API', () => {
    const resolved = engine.resolveStyle('bauhaus');
    expect(resolved.styleId).toBe('bauhaus');
    expect(resolved.styleName).toBe('Bauhaus');
    expect(resolved.tokens.colors.background).toBe('#f7f5f0');
    expect(resolved.tokens.colors.surface).toBe('#ffffff');
    expect(resolved.tokens.colors.primary).toBe('#d9261e');
    expect(resolved.tokens.colors.accent).toBe('#1b4f9b');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.radii.sm).toBe('0px');
    expect(resolved.tokens.radii.none).toBe('0px');
    expect(resolved.components.button.background).toBe('#d9261e');
    expect(resolved.components.button.borderRadius).toBe('0px');
    expect(resolved.components.button.borderWidth).toBe('2px');
    expect(resolved.components.card.borderColor).toBe('#121212');
  });
});
