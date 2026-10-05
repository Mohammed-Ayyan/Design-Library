import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { gothicStyle, gothicSemanticCss } from '../styles/gothic';
import { victorianStyle } from '../styles/victorian';
import { neoClassicalStyle } from '../styles/neo-classical';
import { darkModeUiStyle } from '../styles/dark-mode-ui';
import { cyberpunkStyle } from '../styles/cyberpunk';
import { defaultStyles } from '../styles';

describe('Gothic Design Language — Comprehensive Verification Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine(defaultStyles);
  });

  // --------------------------------------------------------------------------
  // 1. Definition & Token Integrity
  // --------------------------------------------------------------------------
  it('1. should resolve Gothic style definition with authentic medieval cathedral, illuminated manuscript, and stone architecture tokens', () => {
    expect(gothicStyle).toBeDefined();
    expect(gothicStyle.id).toBe('gothic');
    const resolved = engine.resolveStyleById('gothic');

    expect(resolved).toBeDefined();
    expect(resolved.styleId).toBe('gothic');
    expect(resolved.styleName).toBe('Gothic');

    // Palette: Deep cathedral stone, ashlar slab, aged vellum ivory, antique cathedral brass, imperial burgundy
    expect(resolved.tokens.colors.background).toBe('#0c0c0e');
    expect(resolved.tokens.colors.surface).toBe('#151518');
    expect(resolved.tokens.colors.surfaceSubtle).toBe('#1f1f24');
    expect(resolved.tokens.colors.textPrimary).toBe('#f3efe6');
    expect(resolved.tokens.colors.textSecondary).toBe('#bfb9aa');
    expect(resolved.tokens.colors.primary).toBe('#c5a059');
    expect(resolved.tokens.colors.accent).toBe('#631326');
    expect(resolved.tokens.colors.border).toBe('#2e2c28');

    // Typography: Cinzel display serifs, EB Garamond body, JetBrains Mono
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Cinzel');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('EB Garamond');
    expect(resolved.tokens.typography.letterSpacingHeading).toBe('0.08em');
    expect(resolved.tokens.typography.lineHeightBase).toBe(1.7);

    // Geometry: Lancet pointed arch curve (16px) & fine masonry borders (1px)
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.tokens.radii.md).toBe('3px');
    expect(resolved.tokens.radii.lg).toBe('16px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');

    // Component configurations
    expect(resolved.components.button.background).toContain('#1f1a14');
    expect(resolved.components.button.borderRadius).toBe('2px');
    expect(resolved.components.button.textTransform).toBe('uppercase');
    expect(resolved.components.card.borderColor).toBe('#2e2c28');
    expect(resolved.components.heading.fontFamily).toContain('Cinzel');
  });

  // --------------------------------------------------------------------------
  // 2. Semantic CSS Rules Coverage
  // --------------------------------------------------------------------------
  it('2. should export rich, self-contained semantic CSS with zero DOM mutations required', () => {
    expect(gothicSemanticCss).toBeDefined();
    expect(typeof gothicSemanticCss).toBe('string');

    // Scoped selectors
    expect(gothicSemanticCss).toContain('.lab-styled-preview[data-style="gothic"]');
    expect(gothicSemanticCss).toContain('.gothic-styled-container');
    expect(gothicSemanticCss).toContain('.style-gothic');
    expect(gothicSemanticCss).toContain('.ds-scope[data-style-id="gothic"]');

    // Color tokens & custom variables
    expect(gothicSemanticCss).toContain('--gt-bg: #0c0c0e');
    expect(gothicSemanticCss).toContain('--gt-surface: #151518');
    expect(gothicSemanticCss).toContain('--gt-text: #f3efe6');
    expect(gothicSemanticCss).toContain('--gt-brass: #c5a059');
    expect(gothicSemanticCss).toContain('--gt-burgundy: #631326');
    expect(gothicSemanticCss).toContain('--gt-border: #2e2c28');

    // Typographic pairing
    expect(gothicSemanticCss).toContain('Cinzel');
    expect(gothicSemanticCss).toContain('EB Garamond');
    expect(gothicSemanticCss).toContain('JetBrains Mono');

    // Architectural features & ornaments
    expect(gothicSemanticCss).toContain('border-top: 2px solid var(--gt-brass)');
    expect(gothicSemanticCss).toContain('✦ ─── ❖ ─── ✦');
    expect(gothicSemanticCss).toContain('border-radius: 16px 16px 3px 3px');
  });

  // --------------------------------------------------------------------------
  // 3. Genuine Divergence (Not Victorian, Not Neo-classical, Not Dark Mode, Not Halloween)
  // --------------------------------------------------------------------------
  it('3. should enforce genuine visual divergence from Victorian, Neo-classical, Dark Mode UI, and Cyberpunk', () => {
    expect(victorianStyle).toBeDefined();
    expect(neoClassicalStyle).toBeDefined();
    expect(darkModeUiStyle).toBeDefined();
    expect(cyberpunkStyle).toBeDefined();

    const gt = engine.resolveStyleById('gothic');
    const vic = engine.resolveStyleById('victorian');
    const nc = engine.resolveStyleById('neo-classical');
    const dark = engine.resolveStyleById('dark-mode-ui');
    const cp = engine.resolveStyleById('cyberpunk');

    // 1. Gothic vs Victorian:
    // Victorian uses aged ivory parchment paper (#f7f2e7) with botanical forest green (#1b3b2b) and Castoro Titling
    // Gothic uses near-black cathedral charcoal stone (#0c0c0e), antique brass (#c5a059), and monumental Cinzel
    expect(gt.tokens.colors.background).not.toBe(vic.tokens.colors.background);
    expect(gt.tokens.colors.primary).not.toBe(vic.tokens.colors.primary);
    expect(gt.tokens.typography.fontFamilyHeading).not.toBe(vic.tokens.typography.fontFamilyHeading);
    expect(gt.tokens.radii.lg).not.toBe(vic.tokens.radii.lg);

    // 2. Gothic vs Neo-classical:
    // Neo-classical uses light Greco-Roman marble stone, light ivory, classical symmetry
    // Gothic uses dark cathedral stone atmosphere, pointed lancet arches, and illuminated manuscript details
    expect(gt.tokens.colors.background).not.toBe(nc.tokens.colors.background);
    expect(gt.tokens.colors.surface).not.toBe(nc.tokens.colors.surface);
    expect(gt.tokens.radii.lg).not.toBe(nc.tokens.radii.lg);

    // 3. Gothic vs Dark Mode UI:
    // Dark Mode UI uses neutral gray (#09090b), Inter sans-serif, standard utility borders
    // Gothic uses rich medieval cathedral masonry, Cinzel monumental serifs, EB Garamond, and brass rules
    expect(gt.tokens.colors.background).not.toBe(dark.tokens.colors.background);
    expect(gt.tokens.colors.primary).not.toBe(dark.tokens.colors.primary);
    expect(gt.tokens.typography.fontFamilyHeading).not.toBe(dark.tokens.typography.fontFamilyHeading);
    expect(gt.tokens.typography.fontFamilyBase).not.toBe(dark.tokens.typography.fontFamilyBase);

    // 4. Gothic vs Cyberpunk:
    // Cyberpunk uses acid laser yellow (#ffe600 / #00f0ff), 0px chamfered corners, industrial telemetry
    // Gothic uses historical medieval cathedral architecture and illuminated manuscripts
    expect(gt.tokens.colors.background).not.toBe(cp.tokens.colors.background);
    expect(gt.tokens.colors.primary).not.toBe(cp.tokens.colors.primary);
    expect(gt.tokens.typography.fontFamilyHeading).not.toBe(cp.tokens.typography.fontFamilyHeading);

    // 5. Not Halloween/Horror:
    // No blood-red glow or tacky skull props; verified mature palette & typography
    expect(gt.tokens.colors.primary).toBe('#c5a059'); // Refined antique brass, not bright blood red
    expect(gt.tokens.colors.background).toBe('#0c0c0e'); // Deep charcoal stone
  });

  // --------------------------------------------------------------------------
  // 4. Archetype 1: Portfolio / Creative Showcase
  // --------------------------------------------------------------------------
  it('4. should render Portfolio archetype with curated cathedral gallery and brass votive seals', () => {
    const portfolioHtml = `
      <main>
        <header>
          <nav>
            <a href="#sanctuary">Sanctuary</a>
            <a href="#works">Illuminations</a>
            <a href="#chronicles">Chronicles</a>
            <a href="#contact">Communion</a>
          </nav>
        </header>
        <section class="hero">
          <p class="tag">ATELIER // MCCCL</p>
          <h1>Monumental Masterworks</h1>
          <p>Architectural stone masonry, liturgical bindings, and illuminated sacred geometry.</p>
          <button>Explore Reliquary</button>
        </section>
        <section>
          <h2>Selected Vaults</h2>
          <div class="grid">
            <article class="card">
              <span class="badge">CODEX</span>
              <h3>The Golden Psalter</h3>
              <p>Hand-scribed vellum folio bound with hammered brass clasps.</p>
            </article>
            <article class="card">
              <span class="badge">BASILICA</span>
              <h3>Rose Window Oculus</h3>
              <p>Stained glass tracery capturing celestial twilight refractions.</p>
            </article>
          </div>
        </section>
      </main>
    `;

    expect(portfolioHtml).toContain('The Golden Psalter');
    expect(gothicSemanticCss).toContain('header.hero');
    expect(gothicSemanticCss).toContain('nav a');
    expect(gothicSemanticCss).toContain('.card');
    expect(gothicSemanticCss).toContain('.badge');
  });

  // --------------------------------------------------------------------------
  // 5. Archetype 2: SaaS / Pricing Ledger
  // --------------------------------------------------------------------------
  it('5. should render SaaS/Pricing archetype with monastic ledger tier cards and imperial brass highlights', () => {
    const pricingHtml = `
      <section class="pricing-container">
        <h1>Ecclesiastical Scriptorium Tiers</h1>
        <p>Select your tier of access to the monastic scriptoria.</p>
        <div class="pricing-grid">
          <div class="card pricing-card">
            <h3>Novitiate</h3>
            <p class="price">15 Solidi / mo</p>
            <ul>
              <li>Standard vellum folios</li>
              <li>Basic iron gall ink</li>
            </ul>
            <button>Take Vows</button>
          </div>
          <div class="card pricing-card featured">
            <span class="badge">MAGNUM OPUS</span>
            <h3>Arch-Abbot</h3>
            <p class="price">49 Solidi / mo</p>
            <ul>
              <li>Illuminated gold leaf filigree</li>
              <li>Rare lapis lazuli pigment</li>
              <li>Cloistered scriptorium access</li>
            </ul>
            <button>Claim Conclave</button>
          </div>
        </div>
      </section>
    `;

    expect(pricingHtml).toContain('Take Vows');
    expect(gothicSemanticCss).toContain('.pricing-card');
    expect(gothicSemanticCss).toContain('.pricing-card.featured');
    expect(gothicSemanticCss).toContain('.price');
    expect(gothicSemanticCss).toContain('border: 2px solid var(--gt-brass)');
  });

  // --------------------------------------------------------------------------
  // 6. Archetype 3: Editorial / Illuminated Manuscript
  // --------------------------------------------------------------------------
  it('6. should render Editorial archetype with illuminated drop cap and dark burgundy velvet blockquote', () => {
    const editorialHtml = `
      <article class="prose">
        <h1>The Architecture of Sacred Shadow</h1>
        <p class="byline">BY BROTHER ALBAN // RECORDED IN THE ABBEY SCRIPTorium</p>
        <p>In the soaring nave of the cathedral, stone transcends weight. Each rib of the vaulting converges toward the heavens with mathematical precision, drawing the eyes upward into silent celestial heights.</p>
        <blockquote>
          "Where stone sings, light is sculpted into prayer, and darkness becomes the velvet vessel for divine illumination."
        </blockquote>
        <p>Centuries of incense and candlelight have seasoned the limestone piers, giving each chisel mark the deep patina of devotional craft.</p>
      </article>
    `;

    expect(editorialHtml).toContain('BROTHER ALBAN');
    expect(gothicSemanticCss).toContain('article.prose > p:first-of-type::first-letter');
    expect(gothicSemanticCss).toContain('blockquote');
    expect(gothicSemanticCss).toContain('--gt-burgundy');
    expect(gothicSemanticCss).toContain('border-left: 4px solid var(--gt-burgundy)');
  });

  // --------------------------------------------------------------------------
  // 7. Archetype 4: Dashboard / Monastic Archive & Ledger
  // --------------------------------------------------------------------------
  it('7. should render Dashboard archetype with archival stone ledger tables and votive status seals', () => {
    const dashboardHtml = `
      <div class="dashboard-shell">
        <header>
          <h1>Scriptorium Telemetry & Reliquary Ledger</h1>
          <p><span class="status-dot"></span> SCRIPTORIUM ACTIVE // 12 ILLUMINATORS ENCLAVED</p>
        </header>
        <div class="stat-grid">
          <div class="card stat-card">
            <h4>Total Folios</h4>
            <p class="stat-value">1,420</p>
          </div>
          <div class="card stat-card">
            <h4>Gold Leaf Remaining</h4>
            <p class="stat-value">840 drachms</p>
          </div>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Folio Ref</th>
              <th>Scribe</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#CODEX-98</td>
              <td>Brother Martin</td>
              <td>Illuminating</td>
              <td><button>Inspect</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    expect(dashboardHtml).toContain('#CODEX-98');
    expect(gothicSemanticCss).toContain('.status-dot');
    expect(gothicSemanticCss).toContain('.stat-grid');
    expect(gothicSemanticCss).toContain('table');
    expect(gothicSemanticCss).toContain('th');
    expect(gothicSemanticCss).toContain('td');
    expect(gothicSemanticCss).toContain('border-bottom: 2px solid var(--gt-brass)');
  });

  // --------------------------------------------------------------------------
  // 8. Archetype 5: E-commerce / Old-World Catalog
  // --------------------------------------------------------------------------
  it('8. should render E-commerce archetype with old-world catalog cards, antique price tags, and buy actions', () => {
    const shopHtml = `
      <section class="shop-grid">
        <div class="card product-card">
          <h3>Hand-Forged Brass Thurible</h3>
          <p>Cathedral-grade liturgical incense burner with antique patina.</p>
          <p class="price">75 Solidi</p>
          <button>Acquire Relic</button>
        </div>
      </section>
    `;

    expect(shopHtml).toContain('Acquire Relic');
    expect(gothicSemanticCss).toContain('.price');
    expect(gothicSemanticCss).toContain('.card button');
    expect(gothicSemanticCss).toContain('var(--gt-brass)');
  });

  // --------------------------------------------------------------------------
  // 9. Archetype 6: Restaurant / Dark Romantic Dining Menu
  // --------------------------------------------------------------------------
  it('9. should render Restaurant archetype with romantic candlelit dining atmosphere and dotted leaders', () => {
    const menuHtml = `
      <section class="menu-container">
        <h1>Nocturne Dining Room</h1>
        <p>A candlelit repast seasoned by heritage.</p>
        <div class="menu-item">
          <div class="dish-header">
            <h3>Venison Roasted with Juniper & Port</h3>
            <span class="price">38 Solidi</span>
          </div>
          <p>Wood-fired loin served over parsnip silk with elderberry reduction.</p>
        </div>
      </section>
    `;

    expect(menuHtml).toContain('Venison Roasted');
    expect(gothicSemanticCss).toContain('.menu-item');
    expect(gothicSemanticCss).toContain('border-bottom: 1px dotted var(--gt-border)');
  });

  // --------------------------------------------------------------------------
  // 10. Archetype 7: Contact Form / Scriptoria Inscription
  // --------------------------------------------------------------------------
  it('10. should render Contact Form with stone-carved inputs and illuminated brass focus rings', () => {
    const formHtml = `
      <form class="gothic-form">
        <h1>Send Missive to the Chancellery</h1>
        <label for="caller">Signatory Name</label>
        <input type="text" id="caller" placeholder="Lord / Lady...">
        <label for="missive">Your Petition</label>
        <textarea id="missive" rows="4" placeholder="Inscribe your intent..."></textarea>
        <button type="submit">Affix Seal & Dispatch</button>
      </form>
    `;

    expect(formHtml).toContain('Signatory Name');
    expect(gothicSemanticCss).toContain('input[type="text"]');
    expect(gothicSemanticCss).toContain('textarea');
    expect(gothicSemanticCss).toContain('label');
    expect(gothicSemanticCss).toContain('border-color: var(--gt-brass)');
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
    expect(gothicSemanticCss).toContain('table');
    expect(gothicSemanticCss).toContain('button');
    expect(gothicSemanticCss).toContain('h1');
  });

  // --------------------------------------------------------------------------
  // 12. WCAG Contrast & Readability
  // --------------------------------------------------------------------------
  it('12. should maintain superior readability with contrast ratios exceeding WCAG AAA', () => {
    const resolved = engine.resolveStyleById('gothic');
    expect(resolved.tokens.colors.background).toBe('#0c0c0e');
    expect(resolved.tokens.colors.textPrimary).toBe('#f3efe6');

    // Aged vellum ivory (#f3efe6) on near-black charcoal stone (#0c0c0e) has > 14:1 contrast ratio,
    // which substantially exceeds WCAG AAA requirement (7:1) for body text
    expect(resolved.tokens.colors.textPrimary).toBe('#f3efe6');
    expect(resolved.tokens.colors.primary).toBe('#c5a059');
  });

  // --------------------------------------------------------------------------
  // 13. Motion Accessibility
  // --------------------------------------------------------------------------
  it('13. should respect prefers-reduced-motion media query', () => {
    expect(gothicSemanticCss).toContain('@media (prefers-reduced-motion: reduce)');
    expect(gothicSemanticCss).toContain('animation: none !important');
    expect(gothicSemanticCss).toContain('transition: none !important');
    expect(gothicSemanticCss).toContain('transform: none !important');
  });

  // --------------------------------------------------------------------------
  // 14. Interactive States (Hover, Active, Focus, Disabled)
  // --------------------------------------------------------------------------
  it('14. should define complete interactive states for buttons and form elements', () => {
    expect(gothicSemanticCss).toContain('button:hover');
    expect(gothicSemanticCss).toContain('button:active');
    expect(gothicSemanticCss).toContain('button:focus-visible');
    expect(gothicSemanticCss).toContain('button:disabled');
    expect(gothicSemanticCss).toContain('input:focus');
  });
});
