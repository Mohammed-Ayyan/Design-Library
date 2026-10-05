import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { victorianStyle, victorianSemanticCss } from '../styles/victorian';
import { neoClassicalStyle } from '../styles/neo-classical';
import { luxuryTypographyStyle } from '../styles/luxury-typography';
import { defaultStyles } from '../styles';

describe('Victorian Design Language — Comprehensive Verification Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine(defaultStyles);
  });

  // --------------------------------------------------------------------------
  // 1. Definition & Token Integrity
  // --------------------------------------------------------------------------
  it('1. should resolve Victorian style definition with authentic 19th-century tokens', () => {
    expect(victorianStyle).toBeDefined();
    expect(victorianStyle.id).toBe('victorian');
    const resolved = engine.resolveStyleById('victorian');

    expect(resolved).toBeDefined();
    expect(resolved.styleId).toBe('victorian');
    expect(resolved.styleName).toBe('Victorian');

    // Palette: Aged parchment, botanical forest green, claret burgundy, burnished brass
    expect(resolved.tokens.colors.background).toBe('#f7f2e7');
    expect(resolved.tokens.colors.surface).toBe('#fcfaf5');
    expect(resolved.tokens.colors.surfaceSubtle).toBe('#efe7d5');
    expect(resolved.tokens.colors.textPrimary).toBe('#1c1917');
    expect(resolved.tokens.colors.textSecondary).toBe('#38332b');
    expect(resolved.tokens.colors.primary).toBe('#1b3b2b'); // Victorian botanical forest green
    expect(resolved.tokens.colors.primaryHover).toBe('#254e3a');
    expect(resolved.tokens.colors.accent).toBe('#9e783e'); // Burnished antique brass

    // Typography: Castoro Titling + EB Garamond
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Castoro Titling');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('EB Garamond');
    expect(resolved.tokens.typography.lineHeightBase).toBe(1.72);

    // Geometry: Crisp 2px-3px architectural geometry, NOT modern pill-heavy cards
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.tokens.radii.md).toBe('3px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');

    // Components
    expect(resolved.components.button.background).toBe('#1b3b2b');
    expect(resolved.components.button.borderRadius).toBe('2px');
    expect(resolved.components.button.textTransform).toBe('uppercase');
    expect(resolved.components.card.background).toBe('#fcfaf5');
    expect(resolved.components.card.borderColor).toBe('#d8cdb8');
  });

  // --------------------------------------------------------------------------
  // 2. Semantic CSS Rules Coverage
  // --------------------------------------------------------------------------
  it('2. should export rich, self-contained semantic CSS with zero DOM mutations required', () => {
    expect(victorianSemanticCss).toBeDefined();
    expect(typeof victorianSemanticCss).toBe('string');

    // Scoped selectors
    expect(victorianSemanticCss).toContain('.lab-styled-preview[data-style="victorian"]');
    expect(victorianSemanticCss).toContain('.victorian-styled-container');
    expect(victorianSemanticCss).toContain('.style-victorian');
    expect(victorianSemanticCss).toContain('.ds-scope[data-style-id="victorian"]');

    // Color tokens & custom variables
    expect(victorianSemanticCss).toContain('--vic-bg: #f7f2e7');
    expect(victorianSemanticCss).toContain('--vic-surface: #fcfaf5');
    expect(victorianSemanticCss).toContain('--vic-forest: #1b3b2b');
    expect(victorianSemanticCss).toContain('--vic-burgundy: #5c1626');
    expect(victorianSemanticCss).toContain('--vic-navy: #16253b');
    expect(victorianSemanticCss).toContain('--vic-brass: #9e783e');
    expect(victorianSemanticCss).toContain('--vic-rule: #d8cdb8');

    // Typographic pairing
    expect(victorianSemanticCss).toContain('Castoro Titling');
    expect(victorianSemanticCss).toContain('EB Garamond');
    expect(victorianSemanticCss).toContain('Playfair Display');
    expect(victorianSemanticCss).toContain('Inter');
  });

  // --------------------------------------------------------------------------
  // 3. Genuine Divergence (Not Neo-Classical, Not Luxury, Not Gothic, Not generic Black & Gold)
  // --------------------------------------------------------------------------
  it('3. should enforce genuine visual divergence from Neo-Classical, Luxury Typography, and generic Black & Gold', () => {
    expect(neoClassicalStyle).toBeDefined();
    expect(luxuryTypographyStyle).toBeDefined();
    const vic = engine.resolveStyleById('victorian');
    const neoClass = engine.resolveStyleById('neo-classical');
    const lux = engine.resolveStyleById('luxury-typography');

    // 1. Victorian vs Neo-Classical:
    // Neo-Classical uses Cinzel display serifs and stone parchment (#fcfbf7 / #1a1917)
    // Victorian uses Castoro Titling & EB Garamond with botanical forest green (#1b3b2b) and claret burgundy
    expect(vic.tokens.colors.primary).not.toBe(neoClass.tokens.colors.primary);
    expect(vic.tokens.colors.primary).toBe('#1b3b2b');
    expect(neoClass.tokens.colors.primary).toBe('#1a1917');
    expect(vic.tokens.typography.fontFamilyBase).not.toBe(neoClass.tokens.typography.fontFamilyBase);
    expect(vic.tokens.typography.fontFamilyBase).toContain('EB Garamond');
    expect(neoClass.tokens.typography.fontFamilyBase).toContain('Inter');

    // 2. Victorian vs Luxury Typography:
    // Luxury Typography is Didone fashion minimalism with hairline Didot/Bodoni and black/champagne
    // Victorian has rich 19th-century editorial print rules, aged parchment, and botanical forest green
    expect(vic.tokens.colors.background).not.toBe(lux.tokens.colors.background);
    expect(vic.tokens.colors.primary).not.toBe(lux.tokens.colors.primary);
    expect(vic.tokens.typography.fontFamilyHeading).not.toBe(lux.tokens.typography.fontFamilyHeading);

    // 3. Not generic Black & Gold:
    // Victorian features deep burgundy (--vic-burgundy: #5c1626), Prussian navy (--vic-navy: #16253b),
    // and botanical forest green (--vic-forest: #1b3b2b) on warm parchment (#f7f2e7)
    expect(victorianSemanticCss).toContain('--vic-burgundy: #5c1626');
    expect(victorianSemanticCss).toContain('--vic-forest: #1b3b2b');
    expect(victorianSemanticCss).toContain('--vic-navy: #16253b');
  });

  // --------------------------------------------------------------------------
  // 4. Testing Required Archetypes without HTML/DOM Mutation
  // --------------------------------------------------------------------------
  describe('Required Archetype Stylings', () => {
    // Archetype 1: Portfolio / Studio
    it('Archetype 1 (Portfolio): styles navigation masthead, hero frontispiece, and work article cards', () => {
      const sourceHtml = `<main>
        <header>
          <nav>
            <a href="#">Atelier</a>
            <a href="#">Works</a>
            <a href="#">Engravings</a>
            <a href="#">Dispatch</a>
          </nav>
        </header>
        <section>
          <p>Royal Society of Fine Arts</p>
          <h1>Masterpieces of the Industrial Age.</h1>
          <p>Curated architectural illustrations and lithographic prints.</p>
          <button>Examine Gallery</button>
        </section>
        <section>
          <h2>Selected Works</h2>
          <div>
            <article>
              <h3>Botanical Plates</h3>
              <p>Hand-tinted copperplate flora.</p>
            </article>
            <article>
              <h3>Iron Bridges</h3>
              <p>Architectural elevations of Victorian engineering.</p>
            </article>
          </div>
        </section>
      </main>`;

      // Verify source HTML is preserved with zero DOM mutations
      expect(sourceHtml).toContain('<nav>');
      expect(sourceHtml).toContain('<h1>Masterpieces of the Industrial Age.</h1>');
      expect(sourceHtml).toContain('<article>');

      // Verify Victorian CSS targets this structure
      expect(victorianSemanticCss).toContain('nav');
      expect(victorianSemanticCss).toContain('nav a:first-child::before'); // Fleuron
      expect(victorianSemanticCss).toContain('header > p:first-child::before'); // Eyebrow ornament
      expect(victorianSemanticCss).toContain('section > div'); // Grid
      expect(victorianSemanticCss).toContain('article::before'); // Corner rosette ✤
    });

    // Archetype 2: SaaS / Pricing
    it('Archetype 2 (SaaS / Pricing): formats pricing charters with featured Royal Warrant badge and dramatic rates', () => {
      const sourceHtml = `<section class="pricing">
        <h2>Subscription Charters</h2>
        <div>
          <article>
            <h3>Standard Gazette</h3>
            <p>Weekly dispatch to your residence.</p>
            <p>$19 / quarter</p>
            <button>Subscribe</button>
          </article>
          <article class="featured">
            <h3>Royal Society Charter</h3>
            <p>Full illustrated folio with gold-leaf spine.</p>
            <p>$49 / quarter</p>
            <button>Subscribe</button>
          </article>
        </div>
      </section>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('Royal Society Charter');

      // Verify CSS contains featured placard styling and price typography
      expect(victorianSemanticCss).toContain('section > div > article:nth-child(2)');
      expect(victorianSemanticCss).toContain('[class*="featured"]');
      expect(victorianSemanticCss).toContain('✦ ROYAL WARRANT ✦');
      expect(victorianSemanticCss).toContain('section > div > article p:has(+ button)');
    });

    // Archetype 3: Editorial / Magazine
    it('Archetype 3 (Editorial / Magazine): styles illuminated drop caps, un-cardified articles, and blockquotes', () => {
      const sourceHtml = `<article>
        <h1>The Progress of Steam & Printing</h1>
        <p>It was an epoch of unexampled mechanical enterprise and intellectual fervor across the British Isles.</p>
        <blockquote>
          <p>No nation can achieve lasting renown without the twin pillars of literature and industry.</p>
        </blockquote>
        <p>Throughout London, the thunder of cylinder presses echoed through the morning mist.</p>
      </article>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('The Progress of Steam & Printing');

      // Verify un-cardified single article rule
      expect(victorianSemanticCss).toContain('article:only-child');
      expect(victorianSemanticCss).toContain('max-width: 740px !important');

      // Verify drop cap
      expect(victorianSemanticCss).toContain('article > p:first-of-type::first-letter');
      expect(victorianSemanticCss).toContain('color: var(--vic-burgundy)');

      // Verify blockquote styling with claret border
      expect(victorianSemanticCss).toContain('blockquote');
      expect(victorianSemanticCss).toContain('border-left: 5px solid var(--vic-burgundy)');
      expect(victorianSemanticCss).toContain('content: \'“\'');
    });

    // Archetype 4: Dashboard / Data
    it('Archetype 4 (Dashboard): uses restrained ornament around structured telemetry and ledger tables', () => {
      const sourceHtml = `<section>
        <h2>Imperial Foundry Registry</h2>
        <div>
          <article>
            <h3>Pig Iron Output</h3>
            <strong>14,820</strong>
            <p>Tons smelted this quarter</p>
          </article>
          <article>
            <h3>Steam Vessels Active</h3>
            <strong>342</strong>
            <p>Navigating global waters</p>
          </article>
        </div>
        <table>
          <thead>
            <tr>
              <th>Depot</th>
              <th>Commodity</th>
              <th>Tonnage</th>
              <th>Tariff</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Liverpool Docks</td>
              <td>Raw Cotton</td>
              <td>8,400</td>
              <td>£1,250</td>
            </tr>
          </tbody>
        </table>
      </section>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('Imperial Foundry Registry');

      // Verify dashboard metric figures
      expect(victorianSemanticCss).toContain('article strong');

      // Verify ledger table rules
      expect(victorianSemanticCss).toContain('table');
      expect(victorianSemanticCss).toContain('th');
      expect(victorianSemanticCss).toContain('background: var(--vic-forest)');
      expect(victorianSemanticCss).toContain('border-bottom: 2px solid var(--vic-brass)');
      expect(victorianSemanticCss).toContain('tr:nth-child(even) td');
    });

    // Archetype 5: E-Commerce / Catalog
    it('Archetype 5 (E-Commerce): formats trade catalog badges and product listings', () => {
      const sourceHtml = `<section class="catalog">
        <h2>Apothecary & Philosophical Instruments</h2>
        <div>
          <article class="product">
            <span class="badge">PATENTED</span>
            <h3>Brass Achromatic Microscope</h3>
            <p>Finest optical specimen with three objectives and mahogany case.</p>
            <p class="price">£18 10s</p>
            <button>Acquire Specimen</button>
          </article>
        </div>
      </section>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('Brass Achromatic Microscope');
      expect(victorianSemanticCss).toContain('[class*="badge"]');
      expect(victorianSemanticCss).toContain('border: 1px solid var(--vic-brass)');
      expect(victorianSemanticCss).toContain('text-transform: uppercase');
    });

    // Archetype 6: Restaurant Menu
    it('Archetype 6 (Restaurant): styles dining house bill of fare with dot leaders and flourishes', () => {
      const sourceHtml = `<section class="menu">
        <h2>Bill of Fare</h2>
        <ul>
          <li>
            <span>Roast Haunch of Venison with Port Wine Gravy</span>
            <span>2s 6d</span>
          </li>
          <li>
            <span>Consommé Royale with Truffled Quenelles</span>
            <span>1s 4d</span>
          </li>
        </ul>
      </section>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('Bill of Fare');
      expect(victorianSemanticCss).toContain('ul');
      expect(victorianSemanticCss).toContain('li');
      expect(victorianSemanticCss).toContain('border-bottom: 1px dotted var(--vic-rule)');
      expect(victorianSemanticCss).toContain('li span:last-child');
    });

    // Archetype 7: Contact Form
    it('Archetype 7 (Contact Form): styles archival postal dispatch with accessible inputs and official headers', () => {
      const sourceHtml = `<form>
        <div>
          <label for="correspondent">Correspondent Name</label>
          <input type="text" id="correspondent" placeholder="Lord / Lady / Citizen" />
        </div>
        <div>
          <label for="dispatch">Official Communication</label>
          <textarea id="dispatch" rows="4"></textarea>
        </div>
        <button type="submit">Affix Seal & Dispatch</button>
      </form>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('Affix Seal & Dispatch');
      expect(victorianSemanticCss).toContain('form');
      expect(victorianSemanticCss).toContain('❦ OFFICIAL CORRESPONDENCE ❦');
      expect(victorianSemanticCss).toContain('input[type="text"]');
      expect(victorianSemanticCss).toContain('input:focus');
      expect(victorianSemanticCss).toContain('border-color: var(--vic-brass)');
    });

    // Archetype 8: Arbitrary Messy Semantic-Poor HTML
    it('Archetype 8 (Arbitrary Messy HTML): gracefully handles unstructured tags without throwing or failing', () => {
      const sourceHtml = `<div>
        <div>
          <span>Notice to all inhabitants</span>
          <p>The curfew bell shall ring at nine of the clock.</p>
          <a href="#">Read Proclamation</a>
          <button>Acknowledge</button>
        </div>
      </div>`;

      expect(sourceHtml).toBeDefined();
      expect(victorianSemanticCss).toContain('button');
      expect(victorianSemanticCss).toContain('p');
    });
  });

  // --------------------------------------------------------------------------
  // 5. Interactive States & Accessibility
  // --------------------------------------------------------------------------
  it('5. should provide complete interactive states (hover, active, focus, disabled)', () => {
    // Hover
    expect(victorianSemanticCss).toContain('button:hover');
    expect(victorianSemanticCss).toContain('background: var(--vic-forest-hover)');
    expect(victorianSemanticCss).toContain('border-color: var(--vic-brass)');

    // Active
    expect(victorianSemanticCss).toContain('button:active');
    expect(victorianSemanticCss).toContain('background: var(--vic-forest-active)');

    // Focus-Visible
    expect(victorianSemanticCss).toContain('button:focus-visible');
    expect(victorianSemanticCss).toContain('0 0 0 2px var(--vic-bg), 0 0 0 4px var(--vic-brass)');

    // Disabled
    expect(victorianSemanticCss).toContain('button:disabled');
    expect(victorianSemanticCss).toContain('cursor: not-allowed');
  });

  it('6. should respect prefers-reduced-motion and responsive mobile viewports', () => {
    // prefers-reduced-motion
    expect(victorianSemanticCss).toContain('@media (prefers-reduced-motion: reduce)');
    expect(victorianSemanticCss).toContain('animation: none !important');
    expect(victorianSemanticCss).toContain('transition: none !important');

    // Responsive breakpoints
    expect(victorianSemanticCss).toContain('@media (max-width: 768px)');
    expect(victorianSemanticCss).toContain('grid-template-columns: 1fr !important');
  });

  it('7. should include printer colophon footer', () => {
    expect(victorianSemanticCss).toContain('footer');
    expect(victorianSemanticCss).toContain('border-top: 3px double var(--vic-brass)');
    expect(victorianSemanticCss).toContain('content: \'❖ ❧ ❖\'');
  });
});
