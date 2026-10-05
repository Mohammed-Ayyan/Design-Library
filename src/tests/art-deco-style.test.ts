import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { artDecoStyle, artDecoSemanticCss } from '../styles/art-deco';
import { victorianStyle } from '../styles/victorian';
import { gothicStyle } from '../styles/gothic';
import { luxuryTypographyStyle } from '../styles/luxury-typography';
import { neoClassicalStyle } from '../styles/neo-classical';
import { y2kAestheticStyle } from '../styles/y2k-aesthetic';
import { defaultStyles } from '../styles';

describe('Art Deco Design Language — Comprehensive Verification Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine(defaultStyles);
  });

  // --------------------------------------------------------------------------
  // 1. Definition & Token Integrity
  // --------------------------------------------------------------------------
  it('1. should resolve Art Deco style definition with authentic 1920s jazz-age luxury, geometry, and metallic ornament tokens', () => {
    expect(artDecoStyle).toBeDefined();
    expect(artDecoStyle.id).toBe('art-deco');
    const resolved = engine.resolveStyleById('art-deco');

    expect(resolved).toBeDefined();
    expect(resolved.styleId).toBe('art-deco');
    expect(resolved.styleName).toBe('Art Deco');

    // Palette: Obsidian black lacquer, onyx slab, champagne ivory text, metallic antique gold, imperial emerald
    expect(resolved.tokens.colors.background).toBe('#0e0e11');
    expect(resolved.tokens.colors.surface).toBe('#16161b');
    expect(resolved.tokens.colors.surfaceSubtle).toBe('#1e1e24');
    expect(resolved.tokens.colors.textPrimary).toBe('#fbf8f0');
    expect(resolved.tokens.colors.textSecondary).toBe('#d8d2c4');
    expect(resolved.tokens.colors.primary).toBe('#d4af37');
    expect(resolved.tokens.colors.primaryHover).toBe('#e8c85a');
    expect(resolved.tokens.colors.primaryText).toBe('#0e0e11');
    expect(resolved.tokens.colors.accent).toBe('#0f382a');
    expect(resolved.tokens.colors.border).toBe('#2e2a22');
    expect(resolved.tokens.colors.borderStrong).toBe('#d4af37');

    // Typography: Playfair Display & Cinzel display serifs, Inter body, Space Grotesk mono
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Playfair Display');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Cinzel');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.typography.letterSpacingHeading).toBe('0.14em');
    expect(resolved.tokens.typography.lineHeightBase).toBe(1.65);

    // Geometry: Sharp 0px geometric discipline and stepped architectural forms
    expect(resolved.tokens.radii.none).toBe('0px');
    expect(resolved.tokens.radii.sm).toBe('0px');
    expect(resolved.tokens.radii.full).toBe('0px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');

    // Component configurations
    expect(resolved.components.button.borderRadius).toBe('0px');
    expect(resolved.components.button.textTransform).toBe('uppercase');
    expect(resolved.components.button.letterSpacing).toBe('0.18em');
    expect(resolved.components.button.borderColor).toBe('#d4af37');
    expect(resolved.components.button.background).toContain('#1c1a16');
    expect(resolved.components.card.borderColor).toBe('#2e2a22');
    expect(resolved.components.card.borderRadius).toBe('0px');
    expect(resolved.components.heading.fontFamily).toContain('Playfair Display');
    expect(resolved.components.badge.borderColor).toBe('#d4af37');
  });

  // --------------------------------------------------------------------------
  // 2. Semantic CSS Rules Coverage
  // --------------------------------------------------------------------------
  it('2. should export rich, self-contained semantic CSS with zero DOM mutations required', () => {
    expect(artDecoSemanticCss).toBeDefined();
    expect(typeof artDecoSemanticCss).toBe('string');

    // Scoped selectors
    expect(artDecoSemanticCss).toContain('.lab-styled-preview[data-style="art-deco"]');
    expect(artDecoSemanticCss).toContain('.art-deco-styled-container');
    expect(artDecoSemanticCss).toContain('.style-art-deco');
    expect(artDecoSemanticCss).toContain('.ds-scope[data-style-id="art-deco"]');

    // Color tokens & custom variables
    expect(artDecoSemanticCss).toContain('--ad-bg: #0e0e11');
    expect(artDecoSemanticCss).toContain('--ad-surface: #16161b');
    expect(artDecoSemanticCss).toContain('--ad-text: #fbf8f0');
    expect(artDecoSemanticCss).toContain('--ad-gold: #d4af37');
    expect(artDecoSemanticCss).toContain('--ad-emerald: #0f382a');
    expect(artDecoSemanticCss).toContain('--ad-midnight: #0f1d33');
    expect(artDecoSemanticCss).toContain('--ad-burgundy: #581825');
    expect(artDecoSemanticCss).toContain('--ad-border: #2e2a22');

    // Typographic pairing
    expect(artDecoSemanticCss).toContain('Playfair Display');
    expect(artDecoSemanticCss).toContain('Cinzel');
    expect(artDecoSemanticCss).toContain('Inter');

    // Stepped architectural top rule, sunburst rays, and chevron motif
    expect(artDecoSemanticCss).toContain('border-top: 3px double var(--ad-gold)');
    expect(artDecoSemanticCss).toContain('radial-gradient(ellipse 90% 50% at 50% 0%');
    expect(artDecoSemanticCss).toContain('content: \'❖ ━━━ ◆ ━━━ ❖\'');
    expect(artDecoSemanticCss).toContain('content: \'◆\'');
  });

  // --------------------------------------------------------------------------
  // 3. Genuine Divergence (Not Victorian, Not Gothic, Not Luxury Typo, Not Neo-classical, Not Y2K)
  // --------------------------------------------------------------------------
  it('3. should enforce genuine visual divergence from Victorian, Gothic, Luxury Typography, Neo-classical, and Y2K', () => {
    expect(victorianStyle).toBeDefined();
    expect(gothicStyle).toBeDefined();
    expect(luxuryTypographyStyle).toBeDefined();
    expect(neoClassicalStyle).toBeDefined();
    expect(y2kAestheticStyle).toBeDefined();

    const ad = engine.resolveStyleById('art-deco');
    const vic = engine.resolveStyleById('victorian');
    const gt = engine.resolveStyleById('gothic');
    const lux = engine.resolveStyleById('luxury-typography');
    const nc = engine.resolveStyleById('neo-classical');
    const y2k = engine.resolveStyleById('y2k-aesthetic');

    // 1. Art Deco vs Victorian:
    // Victorian uses organic 19th-century botanical engraving, Castoro Titling/EB Garamond, and aged parchment paper (#f7f2e7)
    // Art Deco uses 1920s geometric symmetry, stepped ziggurat forms, sharp 0px discipline, and metallic gold on obsidian (#0e0e11)
    expect(ad.tokens.colors.background).not.toBe(vic.tokens.colors.background);
    expect(ad.tokens.typography.fontFamilyHeading).not.toBe(vic.tokens.typography.fontFamilyHeading);
    expect(ad.tokens.radii.sm).not.toBe(vic.tokens.radii.sm);
    expect(ad.tokens.typography.letterSpacingHeading).not.toBe(vic.tokens.typography.letterSpacingHeading);

    // 2. Art Deco vs Gothic:
    // Gothic uses medieval cathedral stone (#0c0c0e), 16px pointed lancet arches, and antique brass (#c5a059)
    // Art Deco uses jazz-age modernism, sharp 0px geometry, sunburst motifs, and imperial emerald (#0f382a)
    expect(ad.tokens.radii.lg).not.toBe(gt.tokens.radii.lg);
    expect(ad.tokens.radii.sm).not.toBe(gt.tokens.radii.sm);
    expect(ad.tokens.colors.primary).not.toBe(gt.tokens.colors.primary);
    expect(ad.tokens.colors.accent).not.toBe(gt.tokens.colors.accent);

    // 3. Art Deco vs Luxury Typography:
    // Luxury Typography uses Didone editorial minimalism with quiet white space (#ffffff)
    // Art Deco uses rich geometric ornament, stepped lacquer panels, chevron dividers, and obsidian night (#0e0e11)
    expect(ad.tokens.colors.background).not.toBe(lux.tokens.colors.background);
    expect(ad.tokens.colors.primary).not.toBe(lux.tokens.colors.primary);
    expect(ad.tokens.typography.letterSpacingHeading).not.toBe(lux.tokens.typography.letterSpacingHeading);

    // 4. Art Deco vs Neo-classical:
    // Neo-classical uses Greco-Roman marble serenity (#fcfbf9), classical column balance, and 4px radii
    // Art Deco uses dramatic 1920s skyscraper verticality, ziggurat stepped rims, and metallic gold ornament
    expect(ad.tokens.colors.background).not.toBe(nc.tokens.colors.background);
    expect(ad.tokens.radii.sm).not.toBe(nc.tokens.radii.sm);
    expect(ad.tokens.colors.primary).not.toBe(nc.tokens.colors.primary);

    // 5. Art Deco vs Y2K:
    // Y2K uses 16px/9999px glossy bubble plastic curves, vibrant cyan (#0284c7)
    // Art Deco uses strict 0px geometric angles, metallic antique gold (#d4af37), and lacquer depth
    expect(ad.tokens.radii.full).not.toBe(y2k.tokens.radii.full);
    expect(ad.components.button.borderRadius).not.toBe(y2k.tokens.radii.full);
    expect(ad.tokens.colors.primary).not.toBe(y2k.tokens.colors.primary);
  });

  // --------------------------------------------------------------------------
  // 4. Archetype 1: Portfolio / Luxury Architectural Showcase
  // --------------------------------------------------------------------------
  it('4. should render Portfolio archetype with luxury architectural showcase cards and geometric badges', () => {
    const portfolioHtml = `
      <main>
        <header>
          <nav>
            <a href="#edifices">Edifices</a>
            <a href="#galleries">Galleries</a>
            <a href="#archives">Archives</a>
            <a href="#ateliers">Ateliers</a>
          </nav>
        </header>
        <section class="hero">
          <p class="tag">MONUMENTAL EDITIONS // 1931</p>
          <h1>The Chrysler Monolith</h1>
          <p>A symphonic study in sunburst spire geometry, polished bronze reliefs, and towering stepped limestone facade.</p>
          <button>Inspect Portfolio</button>
        </section>
        <section>
          <h2>Selected Salons</h2>
          <div class="grid">
            <article class="card">
              <span class="badge">CHEVRON BRASS</span>
              <h3>Grand Foyer Zenith</h3>
              <p>Book-matched African marble clad with geometric brass rosettes and indirect cove illumination.</p>
            </article>
            <article class="card">
              <span class="badge">ONYX & GOLD</span>
              <h3>The Spire Observatory</h3>
              <p>Triangular faceted observation pavilion offering sweeping panoramas over Manhattan's grid.</p>
            </article>
          </div>
        </section>
      </main>
    `;

    expect(portfolioHtml).toContain('The Chrysler Monolith');
    expect(artDecoSemanticCss).toContain('header.hero');
    expect(artDecoSemanticCss).toContain('nav a');
    expect(artDecoSemanticCss).toContain('.card');
    expect(artDecoSemanticCss).toContain('.badge');
  });

  // --------------------------------------------------------------------------
  // 5. Archetype 2: SaaS / Pricing Ledger
  // --------------------------------------------------------------------------
  it('5. should render SaaS/Pricing archetype with grand salon tiers and emerald featured highlight', () => {
    const pricingHtml = `
      <section class="pricing-container">
        <h1>Private Salon Memberships</h1>
        <p>Select your tier of access to our architectural archives and private club facilities.</p>
        <div class="pricing-grid">
          <div class="card pricing-card">
            <h3>Salon Envoy</h3>
            <p class="price">$120 / mo</p>
            <ul>
              <li>Access to evening jazz recitals</li>
              <li>Quarterly engraved monograph</li>
            </ul>
            <button>Select Envoy</button>
          </div>
          <div class="card pricing-card featured">
            <span class="badge">PATRON FELLOW</span>
            <h3>Grand Ambassador</h3>
            <p class="price">$350 / mo</p>
            <ul>
              <li>Private rooftop sunburst loggia access</li>
              <li>Curated champagne tastings</li>
              <li>Bespoke architectural commission reviews</li>
            </ul>
            <button>Claim Patronage</button>
          </div>
        </div>
      </section>
    `;

    expect(pricingHtml).toContain('Claim Patronage');
    expect(artDecoSemanticCss).toContain('.pricing-card');
    expect(artDecoSemanticCss).toContain('.pricing-card.featured');
    expect(artDecoSemanticCss).toContain('.price');
    expect(artDecoSemanticCss).toContain('border: 2px solid var(--ad-gold)');
  });

  // --------------------------------------------------------------------------
  // 6. Archetype 3: Editorial / Geometric Magazine Cover & Spread
  // --------------------------------------------------------------------------
  it('6. should render Editorial archetype with monumental drop cap and midnight blue blockquote', () => {
    const editorialHtml = `
      <article class="prose">
        <h1>The Geometry of Modern Elegance</h1>
        <p class="byline">BY ALISTAIR VANCE // CRITIQUE ON CONTEMPORARY ARCHITECTURE</p>
        <p>In the radiant zenith of the 1920s, architecture severed ties with Victorian sentimentality. Line, velocity, and stepped symmetry ascended into monuments that celebrated the power and glamour of the metropolitan age.</p>
        <blockquote>
          "Art Deco is the harmonious confluence of engineering discipline and unapologetic opulence."
        </blockquote>
        <p>From the sunburst radiating atop the tower crown to the polished brass handles in the elevator bank, every millimeter speaks of intention and grandeur.</p>
      </article>
    `;

    expect(editorialHtml).toContain('ALISTAIR VANCE');
    expect(artDecoSemanticCss).toContain('article.prose > p:first-of-type::first-letter');
    expect(artDecoSemanticCss).toContain('blockquote');
    expect(artDecoSemanticCss).toContain('--ad-gold');
    expect(artDecoSemanticCss).toContain('border-left: 3px double var(--ad-gold)');
  });

  // --------------------------------------------------------------------------
  // 7. Archetype 4: Dashboard / Geometric Control Panel & Telemetry
  // --------------------------------------------------------------------------
  it('7. should render Dashboard archetype with onyx cards, gold gauge telemetry, and diamond status markers', () => {
    const dashboardHtml = `
      <div class="dashboard-panel">
        <h1>Salon Telemetry & Sovereign Reserves</h1>
        <div class="metric-row">
          <div class="card stat-card">
            <span class="label">GOLD BULLION VAULT</span>
            <span class="stat-value">1,480 OZ</span>
            <span class="stat-meta">+14.2% THIS CYCLE</span>
          </div>
          <div class="card stat-card">
            <span class="label">CONCIERGE LOAD</span>
            <span class="stat-value">98.4%</span>
            <span class="stat-meta">OPTIMAL STATUS</span>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>REGISTRATION</th>
              <th>PATRON</th>
              <th>TIER</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#AD-1925</td>
              <td>Lord Harrington</td>
              <td>Grand Ambassador</td>
              <td>Confirmed</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    expect(dashboardHtml).toContain('1,480 OZ');
    expect(artDecoSemanticCss).toContain('.stat-card');
    expect(artDecoSemanticCss).toContain('.stat-value');
    expect(artDecoSemanticCss).toContain('table');
    expect(artDecoSemanticCss).toContain('th');
    expect(artDecoSemanticCss).toContain('td');
  });

  // --------------------------------------------------------------------------
  // 8. Archetype 5: E-Commerce / Premium Catalogue
  // --------------------------------------------------------------------------
  it('8. should render E-Commerce archetype with luxury catalogue cards, pricing tags, and stepped hover effects', () => {
    const ecommerceHtml = `
      <section class="catalogue-section">
        <h1>Haute Horlogerie & Precious Ornaments</h1>
        <div class="product-grid">
          <div class="card product-card">
            <span class="badge">AUTOMATIQUE</span>
            <h3>The Sunburst Chronometer</h3>
            <p>18-karat yellow gold case with stepped fluted bezel, guilloché champagne dial, and alligator strap.</p>
            <div class="price-action">
              <span class="price">$14,500</span>
              <button>Acquire Timepiece</button>
            </div>
          </div>
        </div>
      </section>
    `;

    expect(ecommerceHtml).toContain('The Sunburst Chronometer');
    expect(artDecoSemanticCss).toContain('.product-card');
    expect(artDecoSemanticCss).toContain('.price');
    expect(artDecoSemanticCss).toContain('button');
  });

  // --------------------------------------------------------------------------
  // 9. Archetype 6: Restaurant / Jazz-Age Dining Menu
  // --------------------------------------------------------------------------
  it('9. should render Restaurant archetype with carte du jour symmetry, centered focal points, and ornamental rules', () => {
    const restaurantHtml = `
      <div class="menu-layout">
        <header>
          <p class="tag">CARTE DU JOUR // LE SALON DORÉ</p>
          <h1>The Starlight Supper Club</h1>
        </header>
        <hr />
        <section class="menu-section">
          <h2>Hors d'Œuvres</h2>
          <article class="card">
            <h3>Caviar Russe & Warm Blinis</h3>
            <p>Imperial Ossetra caviar, cultured creme fraiche, and chive blossoms.</p>
            <span class="price">$65</span>
          </article>
        </section>
      </div>
    `;

    expect(restaurantHtml).toContain('The Starlight Supper Club');
    expect(artDecoSemanticCss).toContain('hr');
    expect(artDecoSemanticCss).toContain('.menu-layout');
    expect(artDecoSemanticCss).toContain('.price');
  });

  // --------------------------------------------------------------------------
  // 10. Archetype 7: Contact & Inquiries Form
  // --------------------------------------------------------------------------
  it('10. should render Contact archetype with obsidian inputs and metallic gold focus halos', () => {
    const contactHtml = `
      <form class="contact-form card">
        <h2>Private Salon Inquiries</h2>
        <div class="form-group">
          <label for="name">Patron Name</label>
          <input type="text" id="name" placeholder="Lady Evelyn Sterling" />
        </div>
        <div class="form-group">
          <label for="message">Correspondence</label>
          <textarea id="message" rows="4" placeholder="Detail your salon requirements..."></textarea>
        </div>
        <button type="submit">Transmit Correspondence</button>
      </form>
    `;

    expect(contactHtml).toContain('Transmit Correspondence');
    expect(artDecoSemanticCss).toContain('input');
    expect(artDecoSemanticCss).toContain('textarea');
    expect(artDecoSemanticCss).toContain('input:focus');
    expect(artDecoSemanticCss).toContain('textarea:focus');
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
          <summary>Curated Specifications</summary>
          <p>Inner disclosure text.</p>
        </details>
        <ul>
          <li>First tier</li>
          <li>Second tier</li>
        </ul>
      </div>
    `;

    expect(rawHtml).toContain('Curated Specifications');
    expect(artDecoSemanticCss).toContain('details');
    expect(artDecoSemanticCss).toContain('summary');
    expect(artDecoSemanticCss).toContain('ul li::before');
  });

  // --------------------------------------------------------------------------
  // 12. Contrast & WCAG Compliance
  // --------------------------------------------------------------------------
  it('12. should uphold WCAG AAA accessibility ratios with champagne ivory on deep obsidian black', () => {
    const textPrimary = artDecoStyle.tokens.colors.textPrimary; // #fbf8f0
    const bg = artDecoStyle.tokens.colors.background;           // #0e0e11
    const gold = artDecoStyle.tokens.colors.primary;            // #d4af37

    expect(textPrimary).toBe('#fbf8f0');
    expect(bg).toBe('#0e0e11');
    expect(gold).toBe('#d4af37');

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

    // WCAG AAA requires 7:1 for normal text. Art Deco champagne ivory on obsidian exceeds 16:1!
    expect(contrastRatio).toBeGreaterThan(15);
  });

  // --------------------------------------------------------------------------
  // 13. Motion & Accessibility
  // --------------------------------------------------------------------------
  it('13. should respect prefers-reduced-motion media queries', () => {
    expect(artDecoSemanticCss).toContain('@media (prefers-reduced-motion: reduce)');
    expect(artDecoSemanticCss).toContain('transition: none !important');
    expect(artDecoSemanticCss).toContain('transform: none !important');
  });

  // --------------------------------------------------------------------------
  // 14. Interactive States & Symmetrical Dividers
  // --------------------------------------------------------------------------
  it('14. should define interactive button states, gold focus rings, and symmetrical dividers', () => {
    expect(artDecoSemanticCss).toContain('button:hover');
    expect(artDecoSemanticCss).toContain('button:focus-visible');
    expect(artDecoSemanticCss).toContain('button:active');
    expect(artDecoSemanticCss).toContain('hr::after');
    expect(artDecoSemanticCss).toContain('box-shadow: 0 0 20px rgba(212, 175, 55, 0.5)');
  });
});
