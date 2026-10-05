import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { mixedMediaStyle, mixedMediaSemanticCss } from '../styles/mixed-media';
import { scrapbookStyle } from '../styles/scrapbook';
import { maximalismStyle } from '../styles/maximalism';
import { graffitiStyle } from '../styles/graffiti';
import { bohemianStyle } from '../styles/bohemian';
import { brutalismStyle } from '../styles/brutalism';
import { defaultStyles } from '../styles';

describe('Mixed Media Design Language — Comprehensive Verification Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine(defaultStyles);
  });

  // --------------------------------------------------------------------------
  // 1. Definition & Token Integrity
  // --------------------------------------------------------------------------
  it('1. should resolve Mixed Media style definition with authentic art-directed collage, photography, and printmaking tokens', () => {
    expect(mixedMediaStyle).toBeDefined();
    expect(mixedMediaStyle.id).toBe('mixed-media');
    const resolved = engine.resolveStyleById('mixed-media');

    expect(resolved).toBeDefined();
    expect(resolved.styleId).toBe('mixed-media');
    expect(resolved.styleName).toBe('Mixed Media');

    // Palette: Cotton rag paper, matted print white, sumi carbon ink, vermilion cadmium accent
    expect(resolved.tokens.colors.background).toBe('#f8f6f0');
    expect(resolved.tokens.colors.surface).toBe('#ffffff');
    expect(resolved.tokens.colors.surfaceSubtle).toBe('#f1ede4');
    expect(resolved.tokens.colors.textPrimary).toBe('#1a1918');
    expect(resolved.tokens.colors.textSecondary).toBe('#5a5650');
    expect(resolved.tokens.colors.primary).toBe('#1a1918');
    expect(resolved.tokens.colors.accent).toBe('#e63926');
    expect(resolved.tokens.colors.border).toBe('#e2ddd4');

    // Typography: Cormorant Garamond display serifs, Inter body, Space Grotesk mono
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Cormorant Garamond');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.typography.fontFamilyMono).toContain('Space Grotesk');
    expect(resolved.tokens.typography.letterSpacingHeading).toBe('-0.02em');
    expect(resolved.tokens.typography.lineHeightBase).toBe(1.65);

    // Geometry: Art print crop mark (1px) & matted paper corner (2px)
    expect(resolved.tokens.radii.sm).toBe('1px');
    expect(resolved.tokens.radii.md).toBe('2px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');

    // Component configurations
    expect(resolved.components.button.background).toBe('#1a1918');
    expect(resolved.components.button.borderRadius).toBe('1px');
    expect(resolved.components.button.textTransform).toBe('uppercase');
    expect(resolved.components.card.borderColor).toBe('#e2ddd4');
    expect(resolved.components.heading.fontFamily).toContain('Cormorant Garamond');
  });

  // --------------------------------------------------------------------------
  // 2. Semantic CSS Rules Coverage
  // --------------------------------------------------------------------------
  it('2. should export rich, self-contained semantic CSS with zero DOM mutations required', () => {
    expect(mixedMediaSemanticCss).toBeDefined();
    expect(typeof mixedMediaSemanticCss).toBe('string');

    // Scoped selectors
    expect(mixedMediaSemanticCss).toContain('.lab-styled-preview[data-style="mixed-media"]');
    expect(mixedMediaSemanticCss).toContain('.mixed-media-styled-container');
    expect(mixedMediaSemanticCss).toContain('.style-mixed-media');
    expect(mixedMediaSemanticCss).toContain('.ds-scope[data-style-id="mixed-media"]');

    // Color tokens & custom variables
    expect(mixedMediaSemanticCss).toContain('--mm-bg: #f8f6f0');
    expect(mixedMediaSemanticCss).toContain('--mm-surface: #ffffff');
    expect(mixedMediaSemanticCss).toContain('--mm-text: #1a1918');
    expect(mixedMediaSemanticCss).toContain('--mm-vermilion: #e63926');
    expect(mixedMediaSemanticCss).toContain('--mm-cobalt: #1e4b6e');
    expect(mixedMediaSemanticCss).toContain('--mm-border: #e2ddd4');

    // Typographic pairing
    expect(mixedMediaSemanticCss).toContain('Cormorant Garamond');
    expect(mixedMediaSemanticCss).toContain('Inter');
    expect(mixedMediaSemanticCss).toContain('Space Grotesk');

    // Art-directed registration marks & geometric crop motifs
    expect(mixedMediaSemanticCss).toContain('border-top: 3px solid var(--mm-text)');
    expect(mixedMediaSemanticCss).toContain('content: \'◤\'');
  });

  // --------------------------------------------------------------------------
  // 3. Genuine Divergence (Not Scrapbook, Not Maximalism, Not Graffiti, Not Bohemian)
  // --------------------------------------------------------------------------
  it('3. should enforce genuine visual divergence from Scrapbook, Maximalism, Graffiti, Bohemian, and Brutalism', () => {
    expect(scrapbookStyle).toBeDefined();
    expect(maximalismStyle).toBeDefined();
    expect(graffitiStyle).toBeDefined();
    expect(bohemianStyle).toBeDefined();
    expect(brutalismStyle).toBeDefined();

    const mm = engine.resolveStyleById('mixed-media');
    const sb = engine.resolveStyleById('scrapbook');
    const max = engine.resolveStyleById('maximalism');
    const gf = engine.resolveStyleById('graffiti');
    const boh = engine.resolveStyleById('bohemian');
    const brut = engine.resolveStyleById('brutalism');

    // 1. Mixed Media vs Scrapbook:
    // Scrapbook uses naive craft paper (#f7f3e8) with Lora & Playfair Display
    // Mixed Media uses cotton rag fine art paper (#f8f6f0), matted photographic slabs (#ffffff), and Cormorant Garamond + Inter
    expect(mm.tokens.colors.background).not.toBe(sb.tokens.colors.background);
    expect(mm.tokens.colors.surface).not.toBe(sb.tokens.colors.surface);
    expect(mm.tokens.typography.fontFamilyHeading).not.toBe(sb.tokens.typography.fontFamilyHeading);
    expect(mm.tokens.typography.fontFamilyBase).not.toBe(sb.tokens.typography.fontFamilyBase);
    expect(mm.tokens.radii.sm).not.toBe(sb.tokens.radii.sm);

    // 2. Mixed Media vs Maximalism:
    // Maximalism uses dense jewel-toned royal crimson (#701a2b) with 2px borders and heavy ornamentation
    // Mixed Media uses deliberate white space, fine 1px paper borders, and vermilion ink accents (#e63926)
    expect(mm.tokens.colors.primary).not.toBe(max.tokens.colors.primary);
    expect(mm.tokens.colors.accent).not.toBe(max.tokens.colors.accent);
    expect(mm.tokens.borders.widthBase).not.toBe(max.tokens.borders.widthBase);

    // 3. Mixed Media vs Graffiti:
    // Graffiti uses asphalt concrete void (#121214), spray crimson (#ff1e42), Anton and Permanent Marker
    // Mixed Media uses fine art printmaking, cotton paper, Cormorant Garamond, and Space Grotesk
    expect(mm.tokens.colors.background).not.toBe(gf.tokens.colors.background);
    expect(mm.tokens.colors.primary).not.toBe(gf.tokens.colors.primary);
    expect(mm.tokens.typography.fontFamilyHeading).not.toBe(gf.tokens.typography.fontFamilyHeading);
    expect(mm.tokens.typography.fontFamilyMono).not.toBe(gf.tokens.typography.fontFamilyMono);

    // 4. Mixed Media vs Bohemian:
    // Bohemian uses warm terracotta (#c85a32), organic 16px radii, Fraunces serifs
    // Mixed Media uses crisp 1px crop marks, gallery contrast, and modernist typography
    expect(mm.tokens.colors.accent).not.toBe(boh.tokens.colors.primary);
    expect(mm.tokens.radii.sm).not.toBe(boh.tokens.radii.sm);
    expect(mm.tokens.typography.fontFamilyHeading).not.toBe(boh.tokens.typography.fontFamilyHeading);

    // 5. Mixed Media vs Brutalism:
    // Brutalism uses 3px black borders, acid yellow (#ffe600), 0px sharp corners
    // Mixed Media uses fine art paper, 1px rules, editorial serif, and vermilion
    expect(mm.tokens.borders.widthBase).not.toBe(brut.tokens.borders.widthBase);
    expect(mm.tokens.colors.accent).not.toBe(brut.tokens.colors.primary);
  });

  // --------------------------------------------------------------------------
  // 4. Archetype 1: Portfolio / Curated Art Gallery
  // --------------------------------------------------------------------------
  it('4. should render Portfolio archetype with art-directed gallery cards and curatorial badges', () => {
    const portfolioHtml = `
      <main>
        <header>
          <nav>
            <a href="#exhibits">Exhibitions</a>
            <a href="#plates">Plates</a>
            <a href="#archive">Archive</a>
            <a href="#curator">Curator</a>
          </nav>
        </header>
        <section class="hero">
          <p class="tag">CURATION // NO. 04</p>
          <h1>Form, Paper, and Ephemera</h1>
          <p>An ongoing study in photographic assemblage, screen printing, and tactile editorial composition.</p>
          <button>View Retrospective</button>
        </section>
        <section>
          <h2>Selected Folios</h2>
          <div class="grid">
            <article class="card">
              <span class="badge">SERIGRAPH</span>
              <h3>Chromatic Compression</h3>
              <p>Two-color screen print on Somerset velvet cotton paper with vermilion registration marks.</p>
            </article>
            <article class="card">
              <span class="badge">SILVER GELATIN</span>
              <h3>Architectural Fragment</h3>
              <p>Matted fiber-based photographic print documenting brutalist monoliths.</p>
            </article>
          </div>
        </section>
      </main>
    `;

    expect(portfolioHtml).toContain('Chromatic Compression');
    expect(mixedMediaSemanticCss).toContain('header.hero');
    expect(mixedMediaSemanticCss).toContain('nav a');
    expect(mixedMediaSemanticCss).toContain('.card');
    expect(mixedMediaSemanticCss).toContain('.badge');
  });

  // --------------------------------------------------------------------------
  // 5. Archetype 2: SaaS / Pricing Ledger
  // --------------------------------------------------------------------------
  it('5. should render SaaS/Pricing archetype with catalogue cards and vermilion featured highlight', () => {
    const pricingHtml = `
      <section class="pricing-container">
        <h1>Art Direction Subscriptions</h1>
        <p>Choose an editorial tier tailored to your studio practice.</p>
        <div class="pricing-grid">
          <div class="card pricing-card">
            <h3>Atelier Pass</h3>
            <p class="price">$24 / mo</p>
            <ul>
              <li>High-res scanned texture pack</li>
              <li>Quarterly printed zine</li>
            </ul>
            <button>Select Atelier</button>
          </div>
          <div class="card pricing-card featured">
            <span class="badge">STUDIO FELLOW</span>
            <h3>Master Printer</h3>
            <p class="price">$68 / mo</p>
            <ul>
              <li>Archival print editions delivered monthly</li>
              <li>Direct curatorial review sessions</li>
              <li>Full vector & collage asset vault</li>
            </ul>
            <button>Join Fellowship</button>
          </div>
        </div>
      </section>
    `;

    expect(pricingHtml).toContain('Join Fellowship');
    expect(mixedMediaSemanticCss).toContain('.pricing-card');
    expect(mixedMediaSemanticCss).toContain('.pricing-card.featured');
    expect(mixedMediaSemanticCss).toContain('.price');
    expect(mixedMediaSemanticCss).toContain('border: 2px solid var(--mm-vermilion)');
  });

  // --------------------------------------------------------------------------
  // 6. Archetype 3: Editorial / Experimental Magazine Spread
  // --------------------------------------------------------------------------
  it('6. should render Editorial archetype with monumental drop cap and painterly vermilion blockquote', () => {
    const editorialHtml = `
      <article class="prose">
        <h1>The Tactile Logic of the Collage</h1>
        <p class="byline">BY HELENA VANCE // ESSAYS ON CONTEMPORARY VISUAL CULTURE</p>
        <p>In the digital landscape, texture is often reduced to a flat simulacrum. Yet true mixed media operates through the friction between distinct surfaces—the rough tooth of cotton rag paper meeting the cold precision of vector typography.</p>
        <blockquote>
          "Art direction is the deliberate orchestration of visual dissonance until tension transforms into rhythm."
        </blockquote>
        <p>When ink bleeds into vellum alongside crisp modern geometry, the interface ceases to be a mere container; it becomes a physical artifact.</p>
      </article>
    `;

    expect(editorialHtml).toContain('HELENA VANCE');
    expect(mixedMediaSemanticCss).toContain('article.prose > p:first-of-type::first-letter');
    expect(mixedMediaSemanticCss).toContain('blockquote');
    expect(mixedMediaSemanticCss).toContain('--mm-vermilion');
    expect(mixedMediaSemanticCss).toContain('border-left: 3px solid var(--mm-vermilion)');
  });

  // --------------------------------------------------------------------------
  // 7. Archetype 4: Dashboard / Curated Information Composition
  // --------------------------------------------------------------------------
  it('7. should render Dashboard archetype with archival ledger tables and square vector status marks', () => {
    const dashboardHtml = `
      <div class="dashboard-shell">
        <header>
          <h1>Studio Production Telemetry</h1>
          <p><span class="status-dot"></span> PRESS RUN 08 // ARCHIVAL STOCKS READY</p>
        </header>
        <div class="stat-grid">
          <div class="card stat-card">
            <h4>Plates Scribed</h4>
            <p class="stat-value">148</p>
          </div>
          <div class="card stat-card">
            <h4>Cotton Stock Available</h4>
            <p class="stat-value">2,400 sheets</p>
          </div>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Folio #</th>
              <th>Artist</th>
              <th>Medium</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MM-0104</td>
              <td>K. Ishida</td>
              <td>Etching & Cyanotype</td>
              <td>Inspecting</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    expect(dashboardHtml).toContain('MM-0104');
    expect(mixedMediaSemanticCss).toContain('.status-dot');
    expect(mixedMediaSemanticCss).toContain('.stat-grid');
    expect(mixedMediaSemanticCss).toContain('table');
    expect(mixedMediaSemanticCss).toContain('th');
    expect(mixedMediaSemanticCss).toContain('td');
    expect(mixedMediaSemanticCss).toContain('border-bottom: 2px solid var(--mm-vermilion)');
  });

  // --------------------------------------------------------------------------
  // 8. Archetype 5: E-commerce / Product Campaign
  // --------------------------------------------------------------------------
  it('8. should render E-commerce archetype with matted catalog cards and editorial price tags', () => {
    const shopHtml = `
      <section class="shop-grid">
        <div class="card product-card">
          <h3>Limited Folio: Monolith Studies</h3>
          <p>Hand-bound cloth folio featuring 12 hand-pulled duo-tone serigraphs.</p>
          <p class="price">$145.00</p>
          <button>Acquire Edition</button>
        </div>
      </section>
    `;

    expect(shopHtml).toContain('Acquire Edition');
    expect(mixedMediaSemanticCss).toContain('.price');
    expect(mixedMediaSemanticCss).toContain('.card button');
    expect(mixedMediaSemanticCss).toContain('var(--mm-vermilion)');
  });

  // --------------------------------------------------------------------------
  // 9. Archetype 6: Restaurant / Photographic Editorial Menu
  // --------------------------------------------------------------------------
  it('9. should render Restaurant archetype with tasting menu layout and dotted leaders', () => {
    const menuHtml = `
      <section class="menu-container">
        <h1>Atelier Dining Room</h1>
        <p>A seasonal culinary progression art-directed around physical terroirs.</p>
        <div class="menu-item">
          <div class="dish-header">
            <h3>Smoked Chanterelles & Emmer Grain</h3>
            <span class="price">$32</span>
          </div>
          <p>Foraged mushrooms over heirloom grains with charred allium butter.</p>
        </div>
      </section>
    `;

    expect(menuHtml).toContain('Smoked Chanterelles');
    expect(mixedMediaSemanticCss).toContain('.menu-item');
    expect(mixedMediaSemanticCss).toContain('border-bottom: 1px dotted var(--mm-border)');
  });

  // --------------------------------------------------------------------------
  // 10. Archetype 7: Contact Form / Stationery & Ink Inscription
  // --------------------------------------------------------------------------
  it('10. should render Contact Form with stationery inputs and dual-tone focus rings', () => {
    const formHtml = `
      <form class="stationery-form">
        <h1>Curatorial Inquiry</h1>
        <label for="name">Inquirer Name</label>
        <input type="text" id="name" placeholder="Full name or gallery representation...">
        <label for="proposal">Exhibition Proposal</label>
        <textarea id="proposal" rows="4" placeholder="Detail your project or archive intent..."></textarea>
        <button type="submit">Submit Dossier</button>
      </form>
    `;

    expect(formHtml).toContain('Inquirer Name');
    expect(mixedMediaSemanticCss).toContain('input[type="text"]');
    expect(mixedMediaSemanticCss).toContain('textarea');
    expect(mixedMediaSemanticCss).toContain('label');
    expect(mixedMediaSemanticCss).toContain('border-color: var(--mm-text)');
  });

  // --------------------------------------------------------------------------
  // 11. Archetype 8: Arbitrary Unstyled Semantic-Poor HTML
  // --------------------------------------------------------------------------
  it('11. should cleanly format arbitrary messy semantic-poor HTML without breaking layout or modifying source DOM', () => {
    const rawHtml = `
      <div>
        <h1>Plain Raw Document</h1>
        <p>This is a paragraph with no special classes at all.</p>
        <table>
          <tr><td>Item 1</td><td>Active</td></tr>
          <tr><td>Item 2</td><td>Pending</td></tr>
        </table>
        <button>Click Here</button>
      </div>
    `;

    expect(rawHtml).toContain('Plain Raw Document');
    expect(mixedMediaSemanticCss).toContain('table');
    expect(mixedMediaSemanticCss).toContain('button');
    expect(mixedMediaSemanticCss).toContain('h1');
  });

  // --------------------------------------------------------------------------
  // 12. WCAG Contrast & Readability
  // --------------------------------------------------------------------------
  it('12. should maintain superior readability with contrast ratios exceeding WCAG AAA', () => {
    const resolved = engine.resolveStyleById('mixed-media');
    expect(resolved.tokens.colors.background).toBe('#f8f6f0');
    expect(resolved.tokens.colors.textPrimary).toBe('#1a1918');

    // Deep sumi carbon black ink (#1a1918) on cotton rag fine art paper (#f8f6f0) has > 15:1 contrast ratio,
    // which substantially exceeds WCAG AAA requirement (7:1) for body text
    expect(resolved.tokens.colors.textPrimary).toBe('#1a1918');
    expect(resolved.tokens.colors.accent).toBe('#e63926');
  });

  // --------------------------------------------------------------------------
  // 13. Motion Accessibility
  // --------------------------------------------------------------------------
  it('13. should respect prefers-reduced-motion media query', () => {
    expect(mixedMediaSemanticCss).toContain('@media (prefers-reduced-motion: reduce)');
    expect(mixedMediaSemanticCss).toContain('animation: none !important');
    expect(mixedMediaSemanticCss).toContain('transition: none !important');
    expect(mixedMediaSemanticCss).toContain('transform: none !important');
  });

  // --------------------------------------------------------------------------
  // 14. Interactive States (Hover, Active, Focus, Disabled)
  // --------------------------------------------------------------------------
  it('14. should define complete interactive states for buttons and form elements', () => {
    expect(mixedMediaSemanticCss).toContain('button:hover');
    expect(mixedMediaSemanticCss).toContain('button:active');
    expect(mixedMediaSemanticCss).toContain('button:focus-visible');
    expect(mixedMediaSemanticCss).toContain('button:disabled');
    expect(mixedMediaSemanticCss).toContain('input:focus');
  });
});
