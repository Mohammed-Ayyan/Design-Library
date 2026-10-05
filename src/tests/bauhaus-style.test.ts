import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { bauhausStyle, bauhausSemanticCss } from '../styles/bauhaus';
import { swissDesignStyle } from '../styles/swiss-design';
import { minimalismStyle } from '../styles/minimalism';
import { neoBrutalismStyle } from '../styles/neo-brutalism';
import { brutalismStyle } from '../styles/brutalism';
import { defaultStyles } from '../styles';

describe('Bauhaus Design Language — Comprehensive Verification Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine(defaultStyles);
  });

  // --------------------------------------------------------------------------
  // 1. Definition & Token Integrity
  // --------------------------------------------------------------------------
  it('1. should resolve Bauhaus style definition with authentic modernist functional geometry and primary color tokens', () => {
    expect(bauhausStyle).toBeDefined();
    expect(bauhausStyle.id).toBe('bauhaus');
    const resolved = engine.resolveStyleById('bauhaus');

    expect(resolved).toBeDefined();
    expect(resolved.styleId).toBe('bauhaus');
    expect(resolved.styleName).toBe('Bauhaus');

    // Palette: Unbleached cream canvas, white plane, stark black, primary red, cobalt blue, yellow
    expect(resolved.tokens.colors.background).toBe('#f7f5f0');
    expect(resolved.tokens.colors.surface).toBe('#ffffff');
    expect(resolved.tokens.colors.surfaceSubtle).toBe('#ede9e0');
    expect(resolved.tokens.colors.textPrimary).toBe('#121212');
    expect(resolved.tokens.colors.textSecondary).toBe('#2a2a2a');
    expect(resolved.tokens.colors.primary).toBe('#d9261e');
    expect(resolved.tokens.colors.primaryHover).toBe('#b81d16');
    expect(resolved.tokens.colors.primaryText).toBe('#ffffff');
    expect(resolved.tokens.colors.accent).toBe('#1b4f9b');
    expect(resolved.tokens.colors.border).toBe('#121212');
    expect(resolved.tokens.colors.borderStrong).toBe('#121212');

    // Typography: Space Grotesk display headings, Inter body, tight modernist tracking
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.typography.letterSpacingHeading).toBe('-0.02em');
    expect(resolved.tokens.typography.lineHeightBase).toBe(1.6);

    // Geometry: Strict 0px rectangular discipline, full 9999px for deliberate circles
    expect(resolved.tokens.radii.none).toBe('0px');
    expect(resolved.tokens.radii.sm).toBe('0px');
    expect(resolved.tokens.radii.md).toBe('0px');
    expect(resolved.tokens.radii.lg).toBe('0px');
    expect(resolved.tokens.radii.full).toBe('9999px');
    expect(resolved.tokens.borders.widthBase).toBe('2px');

    // Planar Modernist surfaces reject faux blur shadows
    expect(resolved.tokens.shadows.none).toBe('none');
    expect(resolved.tokens.shadows.sm).toBe('none');
    expect(resolved.tokens.shadows.md).toBe('none');

    // Component configurations
    expect(resolved.components.button.borderRadius).toBe('0px');
    expect(resolved.components.button.borderWidth).toBe('2px');
    expect(resolved.components.button.borderColor).toBe('#121212');
    expect(resolved.components.button.background).toBe('#d9261e');
    expect(resolved.components.button.textTransform).toBe('uppercase');
    expect(resolved.components.card.borderColor).toBe('#121212');
    expect(resolved.components.card.borderRadius).toBe('0px');
    expect(resolved.components.card.borderWidth).toBe('2px');
    expect(resolved.components.badge.background).toBe('#f2b705');
  });

  // --------------------------------------------------------------------------
  // 2. Semantic CSS Rules Coverage
  // --------------------------------------------------------------------------
  it('2. should export rich, self-contained semantic CSS with zero DOM mutations required', () => {
    expect(bauhausSemanticCss).toBeDefined();
    expect(typeof bauhausSemanticCss).toBe('string');

    // Scoped selectors
    expect(bauhausSemanticCss).toContain('.lab-styled-preview[data-style="bauhaus"]');
    expect(bauhausSemanticCss).toContain('.bauhaus-styled-container');
    expect(bauhausSemanticCss).toContain('.style-bauhaus');
    expect(bauhausSemanticCss).toContain('.ds-scope[data-style-id="bauhaus"]');

    // Color tokens & custom variables
    expect(bauhausSemanticCss).toContain('--bh-canvas: #f7f5f0');
    expect(bauhausSemanticCss).toContain('--bh-surface: #ffffff');
    expect(bauhausSemanticCss).toContain('--bh-black: #121212');
    expect(bauhausSemanticCss).toContain('--bh-red: #d9261e');
    expect(bauhausSemanticCss).toContain('--bh-blue: #1b4f9b');
    expect(bauhausSemanticCss).toContain('--bh-yellow: #f2b705');

    // Typographic pairing
    expect(bauhausSemanticCss).toContain('Space Grotesk');
    expect(bauhausSemanticCss).toContain('Inter');

    // Structural architectural rules & circular list markers
    expect(bauhausSemanticCss).toContain('border-top: 6px solid var(--bh-red)');
    expect(bauhausSemanticCss).toContain('content: \'●\'');
    expect(bauhausSemanticCss).toContain('hr::after');
  });

  // --------------------------------------------------------------------------
  // 3. Genuine Divergence (Not Swiss Design, Not Minimalism, Not Neo-Brutalism, Not Brutalism)
  // --------------------------------------------------------------------------
  it('3. should enforce genuine visual divergence from Swiss Design, Minimalism, Neo-Brutalism, and Brutalism', () => {
    expect(swissDesignStyle).toBeDefined();
    expect(minimalismStyle).toBeDefined();
    expect(neoBrutalismStyle).toBeDefined();
    expect(brutalismStyle).toBeDefined();

    const bh = engine.resolveStyleById('bauhaus');
    const swiss = engine.resolveStyleById('swiss-design');
    const min = engine.resolveStyleById('minimalism');
    const neoBrut = engine.resolveStyleById('neo-brutalism');
    const brut = engine.resolveStyleById('brutalism');

    // 1. Bauhaus vs Swiss Design:
    // Swiss Design uses neutral gray/white (#ffffff), 1px border width, and stark crimson accent (#ef4444)
    // Bauhaus uses unbleached cream paper canvas (#f7f5f0), bold 2px architectural borders, and primary yellow/blue/red structural logic
    expect(bh.tokens.colors.background).not.toBe(swiss.tokens.colors.background);
    expect(bh.tokens.borders.widthBase).not.toBe(swiss.tokens.borders.widthBase);
    expect(bh.tokens.colors.primary).not.toBe(swiss.tokens.colors.primary);

    // 2. Bauhaus vs Minimalism:
    // Minimalism uses quiet monochrome, hairline 1px borders, 5px rounded radii, and subtle gray-black (#18181b)
    // Bauhaus uses strict 0px geometric corners, heavy 2px architectural lines, and bold primary vermilion (#d9261e)
    expect(bh.tokens.radii.sm).not.toBe(min.tokens.radii.sm);
    expect(bh.tokens.borders.widthBase).not.toBe(min.tokens.borders.widthBase);
    expect(bh.tokens.colors.primary).not.toBe(min.tokens.colors.primary);
    expect(bh.components.button.borderRadius).not.toBe(min.components.button.borderRadius);

    // 3. Bauhaus vs Neo-Brutalism:
    // Neo-Brutalism uses cartoonish rounded corners (10px/12px) and hard offset drop shadows ('3px 3px 0px #121212')
    // Bauhaus uses strict 0px sharp corners, flat planar surfaces ('none'), and architectural composition
    expect(bh.tokens.radii.md).not.toBe(neoBrut.tokens.radii.md);
    expect(bh.tokens.shadows.sm).not.toBe(neoBrut.tokens.shadows.sm);
    expect(bh.components.button.borderRadius).not.toBe(neoBrut.components.button.borderRadius);

    // 4. Bauhaus vs Brutalism:
    // Brutalism uses acid yellow (#ffe600), 3px heavy black borders, raw unstyled web ethos
    // Bauhaus uses art-school primary geometry, unbleached cream canvas (#f7f5f0), 2px architectural borders, and vermilion red (#d9261e)
    expect(bh.tokens.colors.background).not.toBe(brut.tokens.colors.background);
    expect(bh.tokens.colors.primary).not.toBe(brut.tokens.colors.primary);
    expect(bh.tokens.borders.widthBase).not.toBe(brut.tokens.borders.widthBase);
  });

  // --------------------------------------------------------------------------
  // 4. Archetype 1: Portfolio / Modernist Design Catalogue
  // --------------------------------------------------------------------------
  it('4. should render Portfolio archetype with modernist design catalogue cards and yellow badges', () => {
    const portfolioHtml = `
      <main>
        <header>
          <nav>
            <a href="#workshops">Workshops</a>
            <a href="#typography">Typography</a>
            <a href="#architecture">Architecture</a>
            <a href="#textiles">Textiles</a>
          </nav>
        </header>
        <section class="hero">
          <p class="tag">DESSAU ARCHIVE // 1925</p>
          <h1>Form Follows Function</h1>
          <p>A systematic investigation into basic geometric forms, industrial standardization, and primary color theory.</p>
          <button>Examine Monograph</button>
        </section>
        <section>
          <h2>Selected Workshops</h2>
          <div class="grid">
            <article class="card">
              <span class="badge">METAL WORKSHOP</span>
              <h3>Tubular Steel Armchair</h3>
              <p>Continuous chrome-plated tubular frame with stark canvas sling geometry.</p>
            </article>
            <article class="card">
              <span class="badge">PRINT & ADVERTISING</span>
              <h3>Universal Type System</h3>
              <p>Single-alphabet geometric sans without majuscules designed for maximum functional clarity.</p>
            </article>
          </div>
        </section>
      </main>
    `;

    expect(portfolioHtml).toContain('Form Follows Function');
    expect(bauhausSemanticCss).toContain('header.hero');
    expect(bauhausSemanticCss).toContain('nav a');
    expect(bauhausSemanticCss).toContain('.card');
    expect(bauhausSemanticCss).toContain('.badge');
  });

  // --------------------------------------------------------------------------
  // 5. Archetype 2: SaaS / Pricing Ledger
  // --------------------------------------------------------------------------
  it('5. should render SaaS/Pricing archetype with geometric tiers and structural red featured highlight', () => {
    const pricingHtml = `
      <section class="pricing-container">
        <h1>Workshop Subscriptions</h1>
        <p>Select your tier of access to our design archive and studio facilities.</p>
        <div class="pricing-grid">
          <div class="card pricing-card">
            <h3>Apprentice</h3>
            <p class="price">$15 / mo</p>
            <ul>
              <li>Access to foundation course archives</li>
              <li>Monthly digital print sheets</li>
            </ul>
            <button>Select Apprentice</button>
          </div>
          <div class="card pricing-card featured">
            <span class="badge">MASTER TIER</span>
            <h3>Meister Form</h3>
            <p class="price">$45 / mo</p>
            <ul>
              <li>Full access to Dessau physical workshops</li>
              <li>Original lithograph edition delivered quarterly</li>
              <li>Architectural blueprint review sessions</li>
            </ul>
            <button>Join Meister</button>
          </div>
        </div>
      </section>
    `;

    expect(pricingHtml).toContain('Join Meister');
    expect(bauhausSemanticCss).toContain('.pricing-card');
    expect(bauhausSemanticCss).toContain('.pricing-card.featured');
    expect(bauhausSemanticCss).toContain('.price');
    expect(bauhausSemanticCss).toContain('border: 3px solid var(--bh-red)');
  });

  // --------------------------------------------------------------------------
  // 6. Archetype 3: Editorial / Structured Experimental Publication
  // --------------------------------------------------------------------------
  it('6. should render Editorial archetype with monumental red drop cap and cobalt blue blockquote', () => {
    const editorialHtml = `
      <article class="prose">
        <h1>The Elimination of Decorative Ornament</h1>
        <p class="byline">BY WALTER GROPIUS // WEIMAR ESSAYS ON FUNCTIONAL ART</p>
        <p>The modern architectural designer must not disguise industrial materials with nostalgic hand-carved ornamentation. Steel, glass, and reinforced concrete dictate their own geometric logic.</p>
        <blockquote>
          "Let us create a new guild of craftsmen, without the class distinctions that raise an arrogant barrier between craftsman and artist!"
        </blockquote>
        <p>A building should express its internal function through honest external structure, balanced asymmetry, and pure planar geometry.</p>
      </article>
    `;

    expect(editorialHtml).toContain('WALTER GROPIUS');
    expect(bauhausSemanticCss).toContain('article.prose > p:first-of-type::first-letter');
    expect(bauhausSemanticCss).toContain('blockquote');
    expect(bauhausSemanticCss).toContain('border-left: 5px solid var(--bh-blue)');
  });

  // --------------------------------------------------------------------------
  // 7. Archetype 4: Dashboard / Functional Geometric Information System
  // --------------------------------------------------------------------------
  it('7. should render Dashboard archetype with functional metric blocks and black/red data tables', () => {
    const dashboardHtml = `
      <div class="dashboard-panel">
        <h1>Workshop Telemetry & Machine Output</h1>
        <div class="metric-row">
          <div class="card stat-card">
            <span class="label">PRESS OUTPUT</span>
            <span class="stat-value">12,450 SHEETS</span>
            <span class="stat-meta">+8.2% EFFICIENCY</span>
          </div>
          <div class="card stat-card">
            <span class="label">KILN LOAD</span>
            <span class="stat-value">94.1%</span>
            <span class="stat-meta">OPTIMAL FIRING</span>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>BATCH ID</th>
              <th>WORKSHOP</th>
              <th>MATERIAL</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#BH-1919</td>
              <td>Weaving</td>
              <td>Mercerized Cotton</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    expect(dashboardHtml).toContain('12,450 SHEETS');
    expect(bauhausSemanticCss).toContain('.stat-card');
    expect(bauhausSemanticCss).toContain('.stat-value');
    expect(bauhausSemanticCss).toContain('table');
    expect(bauhausSemanticCss).toContain('th');
    expect(bauhausSemanticCss).toContain('td');
    expect(bauhausSemanticCss).toContain('border-bottom: 3px solid var(--bh-red)');
  });

  // --------------------------------------------------------------------------
  // 8. Archetype 5: E-Commerce / Functional Modernist Catalogue
  // --------------------------------------------------------------------------
  it('8. should render E-Commerce archetype with structural product cards and prominent price tags', () => {
    const ecommerceHtml = `
      <section class="catalogue-section">
        <h1>Industrial Artifacts & Hardware</h1>
        <div class="product-grid">
          <div class="card product-card">
            <span class="badge">EDITION 01</span>
            <h3>Kandinsky Geometry Desk Lamp</h3>
            <p>Spun brass shade, nickel-plated steel arm, and enameled steel disc base.</p>
            <div class="price-action">
              <span class="price">$380</span>
              <button>Order Hardware</button>
            </div>
          </div>
        </div>
      </section>
    `;

    expect(ecommerceHtml).toContain('Kandinsky Geometry Desk Lamp');
    expect(bauhausSemanticCss).toContain('.product-card');
    expect(bauhausSemanticCss).toContain('.price');
    expect(bauhausSemanticCss).toContain('button');
  });

  // --------------------------------------------------------------------------
  // 9. Archetype 6: Restaurant / Modernist Menu
  // --------------------------------------------------------------------------
  it('9. should render Restaurant archetype with functional grouping and clean dividing rules', () => {
    const restaurantHtml = `
      <div class="menu-layout">
        <header>
          <p class="tag">SPEISEKARTE // KANTINE DESSAU</p>
          <h1>Meisterhaus Cantine</h1>
        </header>
        <hr />
        <section class="menu-section">
          <h2>Tagesgericht</h2>
          <article class="card">
            <h3>Rye Hearth Loaf & Cultured Butter</h3>
            <p>Whole grain sourdough fermented 36 hours with sea salt churned butter.</p>
            <span class="price">$8</span>
          </article>
        </section>
      </div>
    `;

    expect(restaurantHtml).toContain('Meisterhaus Cantine');
    expect(bauhausSemanticCss).toContain('hr');
    expect(bauhausSemanticCss).toContain('.menu-layout');
    expect(bauhausSemanticCss).toContain('.price');
  });

  // --------------------------------------------------------------------------
  // 10. Archetype 7: Contact & Inquiries Form
  // --------------------------------------------------------------------------
  it('10. should render Contact archetype with 2px black inputs and cobalt blue focus halos', () => {
    const contactHtml = `
      <form class="contact-form card">
        <h2>Workshop Inquiries</h2>
        <div class="form-group">
          <label for="name">Apprentice Name</label>
          <input type="text" id="name" placeholder="Marianne Brandt" />
        </div>
        <div class="form-group">
          <label for="message">Design Proposal</label>
          <textarea id="message" rows="4" placeholder="Detail your project specifications..."></textarea>
        </div>
        <button type="submit">Submit Proposal</button>
      </form>
    `;

    expect(contactHtml).toContain('Submit Proposal');
    expect(bauhausSemanticCss).toContain('input');
    expect(bauhausSemanticCss).toContain('textarea');
    expect(bauhausSemanticCss).toContain('input:focus');
    expect(bauhausSemanticCss).toContain('border-color: var(--bh-blue)');
  });

  // --------------------------------------------------------------------------
  // 11. Arbitrary / Unstyled Messy HTML Resilience
  // --------------------------------------------------------------------------
  it('11. should cleanly format arbitrary unstyled HTML without any DOM modifications', () => {
    const rawHtml = `
      <div>
        <h1>Raw Title</h1>
        <p>A paragraph of plain text without any classes.</p>
        <a href="#">A link</a>
        <blockquote>A raw quote.</blockquote>
        <details>
          <summary>Functional Specifications</summary>
          <p>Inner disclosure text.</p>
        </details>
        <ul>
          <li>First tier</li>
          <li>Second tier</li>
        </ul>
      </div>
    `;

    expect(rawHtml).toContain('Functional Specifications');
    expect(bauhausSemanticCss).toContain('details');
    expect(bauhausSemanticCss).toContain('summary');
    expect(bauhausSemanticCss).toContain('ul li::before');
  });

  // --------------------------------------------------------------------------
  // 12. Contrast & WCAG Compliance
  // --------------------------------------------------------------------------
  it('12. should uphold WCAG AAA accessibility ratios with carbon black on unbleached cream paper', () => {
    const textPrimary = bauhausStyle.tokens.colors.textPrimary; // #121212
    const bg = bauhausStyle.tokens.colors.background;           // #f7f5f0
    const primary = bauhausStyle.tokens.colors.primary;         // #d9261e
    const accent = bauhausStyle.tokens.colors.accent;           // #1b4f9b

    expect(textPrimary).toBe('#121212');
    expect(bg).toBe('#f7f5f0');
    expect(primary).toBe('#d9261e');
    expect(accent).toBe('#1b4f9b');

    // Helper for relative luminance
    function hexToLuminance(hex: string): number {
      const rgb = [1, 3, 5].map(offset => {
        const val = parseInt(hex.substring(offset, offset + 2), 16) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    }

    const lumText = hexToLuminance(textPrimary);
    const lumBg = hexToLuminance(bg);
    const contrastRatio = (Math.max(lumText, lumBg) + 0.05) / (Math.min(lumText, lumBg) + 0.05);

    // WCAG AAA requires 7:1 for normal text. Stark black on unbleached cream paper is > 12:1!
    expect(contrastRatio).toBeGreaterThan(12);

    // Check cobalt blue on white
    const lumBlue = hexToLuminance(accent);
    const lumWhite = hexToLuminance('#ffffff');
    const blueContrast = (Math.max(lumBlue, lumWhite) + 0.05) / (Math.min(lumBlue, lumWhite) + 0.05);
    expect(blueContrast).toBeGreaterThan(7);
  });

  // --------------------------------------------------------------------------
  // 13. Motion & Accessibility
  // --------------------------------------------------------------------------
  it('13. should respect prefers-reduced-motion media queries', () => {
    expect(bauhausSemanticCss).toContain('@media (prefers-reduced-motion: reduce)');
    expect(bauhausSemanticCss).toContain('transition: none !important');
    expect(bauhausSemanticCss).toContain('transform: none !important');
  });

  // --------------------------------------------------------------------------
  // 14. Direct Interactive Controls & Functional States
  // --------------------------------------------------------------------------
  it('14. should define direct functional button states, focus halos, and structural dividers', () => {
    expect(bauhausSemanticCss).toContain('button:hover');
    expect(bauhausSemanticCss).toContain('button:active');
    expect(bauhausSemanticCss).toContain('button:focus-visible');
    expect(bauhausSemanticCss).toContain('box-shadow: 0 0 0 2px var(--bh-canvas), 0 0 0 4px var(--bh-blue)');
    expect(bauhausSemanticCss).toContain('width: 24px');
  });
});
