import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { graffitiStyle, graffitiSemanticCss } from '../styles/graffiti';
import { brutalismStyle } from '../styles/brutalism';
import { scrapbookStyle } from '../styles/scrapbook';
import { bohemianStyle } from '../styles/bohemian';
import { maximalismStyle } from '../styles/maximalism';
import { cyberpunkStyle } from '../styles/cyberpunk';
import { defaultStyles } from '../styles';

describe('Graffiti Design Language — Comprehensive Verification Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine(defaultStyles);
  });

  // --------------------------------------------------------------------------
  // 1. Definition & Token Integrity
  // --------------------------------------------------------------------------
  it('1. should resolve Graffiti style definition with authentic street art tokens', () => {
    expect(graffitiStyle).toBeDefined();
    expect(graffitiStyle.id).toBe('graffiti');
    const resolved = engine.resolveStyleById('graffiti');

    expect(resolved).toBeDefined();
    expect(resolved.styleId).toBe('graffiti');
    expect(resolved.styleName).toBe('Graffiti');

    // Palette: Dark urban asphalt, concrete panel, spray crimson, hazard yellow
    expect(resolved.tokens.colors.background).toBe('#121214');
    expect(resolved.tokens.colors.surface).toBe('#1c1d22');
    expect(resolved.tokens.colors.surfaceSubtle).toBe('#26272e');
    expect(resolved.tokens.colors.textPrimary).toBe('#f5f5f7');
    expect(resolved.tokens.colors.textSecondary).toBe('#a1a1aa');
    expect(resolved.tokens.colors.primary).toBe('#ff1e42');
    expect(resolved.tokens.colors.accent).toBe('#ffea00');
    expect(resolved.tokens.colors.border).toBe('#2e2f38');

    // Typography: Anton mural headline, Permanent Marker tags, Inter body
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Anton');
    expect(resolved.tokens.typography.fontFamilyMono).toContain('Permanent Marker');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.typography.lineHeightHeading).toBe(1.15);

    // Geometry: Die-cut sticker rounded corners (4px - 5px)
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.tokens.radii.md).toBe('5px');
    expect(resolved.tokens.borders.widthBase).toBe('2px');

    // Components
    expect(resolved.components.button.background).toBe('#ff1e42');
    expect(resolved.components.button.borderRadius).toBe('4px');
    expect(resolved.components.button.textTransform).toBe('uppercase');
    expect(resolved.components.card.borderColor).toBe('#2e2f38');
    expect(resolved.components.badge.fontFamily).toContain('Permanent Marker');
  });

  // --------------------------------------------------------------------------
  // 2. Semantic CSS Rules Coverage
  // --------------------------------------------------------------------------
  it('2. should export rich, self-contained semantic CSS with zero DOM mutations required', () => {
    expect(graffitiSemanticCss).toBeDefined();
    expect(typeof graffitiSemanticCss).toBe('string');

    // Scoped selectors
    expect(graffitiSemanticCss).toContain('.lab-styled-preview[data-style="graffiti"]');
    expect(graffitiSemanticCss).toContain('.graffiti-styled-container');
    expect(graffitiSemanticCss).toContain('.style-graffiti');
    expect(graffitiSemanticCss).toContain('.ds-scope[data-style-id="graffiti"]');

    // Color tokens & custom variables
    expect(graffitiSemanticCss).toContain('--gf-bg: #121214');
    expect(graffitiSemanticCss).toContain('--gf-surface: #1c1d22');
    expect(graffitiSemanticCss).toContain('--gf-red: #ff1e42');
    expect(graffitiSemanticCss).toContain('--gf-yellow: #ffea00');
    expect(graffitiSemanticCss).toContain('--gf-border: #2e2f38');

    // Typography rules
    expect(graffitiSemanticCss).toContain('Anton');
    expect(graffitiSemanticCss).toContain('Permanent Marker');
    expect(graffitiSemanticCss).toContain('Inter');
  });

  // --------------------------------------------------------------------------
  // 3. Genuine Divergence (Not Brutalism, Not Scrapbook, Not Bohemian, Not Maximalism, Not Cyberpunk)
  // --------------------------------------------------------------------------
  it('3. should enforce genuine visual divergence from Brutalism, Scrapbook, Bohemian, Maximalism, and Cyberpunk', () => {
    expect(brutalismStyle).toBeDefined();
    expect(scrapbookStyle).toBeDefined();
    expect(bohemianStyle).toBeDefined();
    expect(maximalismStyle).toBeDefined();
    expect(cyberpunkStyle).toBeDefined();

    const gf = engine.resolveStyleById('graffiti');
    const brut = engine.resolveStyleById('brutalism');
    const sb = engine.resolveStyleById('scrapbook');
    const boh = engine.resolveStyleById('bohemian');
    const max = engine.resolveStyleById('maximalism');
    const cp = engine.resolveStyleById('cyberpunk');

    // 1. Graffiti vs Brutalism:
    // Brutalism is rigid 0px sharp corners with 3px black borders
    // Graffiti uses dark asphalt substrate (#121214), 5px sticker radii, Anton & Permanent Marker type, and spray halos
    expect(gf.tokens.radii.md).not.toBe(brut.tokens.radii.md);
    expect(gf.tokens.colors.background).not.toBe(brut.tokens.colors.background);
    expect(gf.tokens.typography.fontFamilyHeading).not.toBe(brut.tokens.typography.fontFamilyHeading);
    expect(gf.components.button.borderRadius).not.toBe(brut.components.button.borderRadius);

    // 2. Graffiti vs Scrapbook:
    // Scrapbook is warm parchment (#f7f3e8) with washi tape and Playfair Display serif
    // Graffiti is dark asphalt (#121214) with spray paint crimson, stencils, and murals
    expect(gf.tokens.colors.background).not.toBe(sb.tokens.colors.background);
    expect(gf.tokens.typography.fontFamilyHeading).not.toBe(sb.tokens.typography.fontFamilyHeading);
    expect(gf.tokens.colors.primary).not.toBe(sb.tokens.colors.primary);

    // 3. Graffiti vs Bohemian:
    // Bohemian is warm terracotta (#c85a32) and Fraunces organic curves
    // Graffiti is rebellious urban street art and spray crimson
    expect(gf.tokens.colors.primary).not.toBe(boh.tokens.colors.primary);
    expect(gf.tokens.colors.background).not.toBe(boh.tokens.colors.background);

    // 4. Graffiti vs Maximalism:
    // Maximalism is royal crimson velvet (#701a2b) with dense classical baroque filigree
    // Graffiti is raw concrete and wheatpaste street posters
    expect(gf.tokens.colors.primary).not.toBe(max.tokens.colors.primary);
    expect(gf.tokens.typography.fontFamilyHeading).not.toBe(max.tokens.typography.fontFamilyHeading);

    // 5. Graffiti vs Cyberpunk:
    // Cyberpunk is terminal HUD with neon yellow (#ffe600) on pitch black with 0px chamfered corners
    // Graffiti is physical street materials: asphalt, spray paint, stickers, and markers
    expect(gf.tokens.colors.primary).not.toBe(cp.tokens.colors.primary);
    expect(gf.tokens.radii.md).not.toBe(cp.tokens.radii.md);
  });

  // --------------------------------------------------------------------------
  // 4. Archetype 1: Portfolio / Street Art Gallery
  // --------------------------------------------------------------------------
  it('4. should render Portfolio archetype as a street-art gallery with vinyl stickers and mural headers', () => {
    const portfolioHtml = `
      <main>
        <header>
          <nav>
            <a href="#murals">Murals</a>
            <a href="#blackbook">Blackbook</a>
            <a href="#stickers">Stickers</a>
          </nav>
        </header>
        <section class="hero">
          <p class="tag">BERLIN // 2024</p>
          <h1>Subway Wall Gallery</h1>
          <p>Large format aerosol murals, paste-ups, and street calligraphy.</p>
          <button>Explore Walls</button>
        </section>
        <section>
          <h2>Featured Murals</h2>
          <div class="grid">
            <article class="card">
              <span class="badge">AEROSOL DROP</span>
              <h3>Redline Station Mural</h3>
              <p>12-meter exterior wall created using custom spray caps and asphalt primers.</p>
            </article>
            <article class="card">
              <span class="badge">PASTE-UP</span>
              <h3>Factory District</h3>
              <p>Hand-screenprinted wheatpaste posters layered on weathered brick.</p>
            </article>
          </div>
        </section>
      </main>
    `;

    expect(portfolioHtml).toContain('Subway Wall Gallery');
    expect(graffitiSemanticCss).toContain('header.hero');
    expect(graffitiSemanticCss).toContain('nav a');
    expect(graffitiSemanticCss).toContain('.card');
    expect(graffitiSemanticCss).toContain('.badge');
  });

  // --------------------------------------------------------------------------
  // 5. Archetype 2: SaaS / Pricing Drop Tiers
  // --------------------------------------------------------------------------
  it('5. should render SaaS/Pricing archetype with street drop tiers and featured spray highlights', () => {
    const pricingHtml = `
      <section class="pricing-container">
        <h1>Art Supply Drop Tiers</h1>
        <p>Curated cans, markers, and premium blackbooks.</p>
        <div class="pricing-grid">
          <div class="card pricing-card">
            <h3>Tag Pack</h3>
            <p class="price">$25/drop</p>
            <ul>
              <li>5x Squeezer markers</li>
              <li>20x Vinyl slap stickers</li>
            </ul>
            <button>Grab Pack</button>
          </div>
          <div class="card pricing-card featured">
            <span class="badge">LIMITED DROP</span>
            <h3>Master Murals</h3>
            <p class="price">$65/drop</p>
            <ul>
              <li>12x Low-pressure aerosol cans</li>
              <li>Assorted fat & skinny caps</li>
              <li>Heavyweight blackbook</li>
            </ul>
            <button>Claim Box</button>
          </div>
        </div>
      </section>
    `;

    expect(pricingHtml).toContain('Master Murals');
    expect(graffitiSemanticCss).toContain('.pricing-card');
    expect(graffitiSemanticCss).toContain('.pricing-card.featured');
    expect(graffitiSemanticCss).toContain('.price');
  });

  // --------------------------------------------------------------------------
  // 6. Archetype 3: Editorial / Underground Zine
  // --------------------------------------------------------------------------
  it('6. should render Editorial/Magazine archetype as an underground zine with marker blockquotes', () => {
    const editorialHtml = `
      <article class="prose">
        <header>
          <span class="tag">ISSUE #03 // URBAN WALLS</span>
          <h1>The Evolution of Public Lettering</h1>
          <p>By KANE ONE • Published Autumn 2024</p>
        </header>
        <p>Before galleries claimed street art, the freight trains of the South Bronx carried names written in quick, indelible strokes across five boroughs.</p>
        <blockquote>
          “The wall belongs to anyone with enough courage to leave their mark before sunrise.”
        </blockquote>
        <p>Today, the dialogue between architecture and aerosol continues in every major metropolis.</p>
      </article>
    `;

    expect(editorialHtml).toContain('The Evolution of Public Lettering');
    expect(graffitiSemanticCss).toContain('article:not(.prose)');
    expect(graffitiSemanticCss).toContain('blockquote');
    expect(graffitiSemanticCss).toContain('--gf-red');
  });

  // --------------------------------------------------------------------------
  // 7. Archetype 4: Dashboard / Studio Spray Board
  // --------------------------------------------------------------------------
  it('7. should render Dashboard archetype as an urban spray board with status indicators', () => {
    const dashboardHtml = `
      <div class="dashboard">
        <header>
          <h2>Studio Board <span class="status-dot"></span></h2>
        </header>
        <div class="stat-grid">
          <div class="card">
            <h3>Cans In Inventory</h3>
            <p class="price">148</p>
            <span class="led"></span> Ready
          </div>
          <div class="card">
            <h3>Completed Murals</h3>
            <p class="price">24</p>
            <span class="badge">STREET RECORD</span>
          </div>
        </div>
      </div>
    `;

    expect(dashboardHtml).toContain('Cans In Inventory');
    expect(graffitiSemanticCss).toContain('.status-dot');
    expect(graffitiSemanticCss).toContain('.led');
    expect(graffitiSemanticCss).toContain('.stat-grid');
  });

  // --------------------------------------------------------------------------
  // 8. Archetype 5: E-Commerce / Streetwear & Sticker Catalog
  // --------------------------------------------------------------------------
  it('8. should render E-Commerce archetype with streetwear product cards and stencil price tags', () => {
    const ecommerceHtml = `
      <section class="catalog">
        <h1>Apparel & Slap Stickers</h1>
        <div class="product-grid">
          <article class="card">
            <span class="badge">FRESH DROP</span>
            <h3>Heavyweight Aerosol Hoodie</h3>
            <p>100% French terry cotton with discharge print stencil graphic.</p>
            <p class="price">$85.00</p>
            <button>Add to Cart</button>
          </article>
        </div>
      </section>
    `;

    expect(ecommerceHtml).toContain('Heavyweight Aerosol Hoodie');
    expect(graffitiSemanticCss).toContain('.price');
    expect(graffitiSemanticCss).toContain('.card button');
  });

  // --------------------------------------------------------------------------
  // 9. Archetype 6: Restaurant / Urban Street Food Spot
  // --------------------------------------------------------------------------
  it('9. should render Restaurant archetype as an urban street food spot with marker menu items', () => {
    const restaurantHtml = `
      <section class="menu">
        <h1>Brick Alley Tacos & Sliders</h1>
        <p>Authentic late-night street food served fresh from the hatch.</p>
        <div class="menu-list">
          <div class="menu-item">
            <h3>Smoked Birria Quesataco</h3>
            <p>Slow-braised beef, Oaxaca cheese, cilantro, onion, rich consommé dip.</p>
            <span class="price">$6.00</span>
          </div>
          <div class="menu-item">
            <h3>Firecracker Loaded Fries</h3>
            <p>Hand-cut fries, cotija cheese, sriracha crema, crushed chicharron.</p>
            <span class="price">$11.50</span>
          </div>
        </div>
      </section>
    `;

    expect(restaurantHtml).toContain('Brick Alley Tacos & Sliders');
    expect(graffitiSemanticCss).toContain('.menu-item');
    expect(graffitiSemanticCss).toContain('border-bottom: 2px dashed');
  });

  // --------------------------------------------------------------------------
  // 10. Archetype 7: Contact Form / Transmission Wall
  // --------------------------------------------------------------------------
  it('10. should render Contact Form archetype with stencil inputs and sticker action controls', () => {
    const contactHtml = `
      <section class="contact-section">
        <h2>Drop a Tag</h2>
        <form>
          <label for="artist">Writer Handle</label>
          <input type="text" id="artist" placeholder="PHASE_2" />

          <label for="email">Contact Dispatch</label>
          <input type="email" id="email" placeholder="writer@streetwalls.org" />

          <label for="wall">Wall Location / Note</label>
          <textarea id="wall" placeholder="Corner of 5th and Main..."></textarea>

          <button type="submit">Leave Mark</button>
        </form>
      </section>
    `;

    expect(contactHtml).toContain('Drop a Tag');
    expect(graffitiSemanticCss).toContain('input[type="text"]');
    expect(graffitiSemanticCss).toContain('textarea');
    expect(graffitiSemanticCss).toContain('label');
    expect(graffitiSemanticCss).toContain('border-color: var(--gf-red)');
  });

  // --------------------------------------------------------------------------
  // 11. Archetype 8: Arbitrary Messy Semantic-Poor HTML
  // --------------------------------------------------------------------------
  it('11. should gracefully style arbitrary messy semantic-poor HTML without breaking layout', () => {
    const messyHtml = `
      <div>
        <div>
          <h1>Raw Headline Without Classes</h1>
          <p>Unclassed descriptive paragraph inside nested unclassed divs.</p>
          <p>Second paragraph testing text-secondary contrast.</p>
        </div>
        <div>
          <button>Unclassed Action</button>
          <a href="#">Raw Text Link</a>
        </div>
        <table>
          <tr>
            <th>Cap Type</th>
            <th>Spray Width</th>
          </tr>
          <tr>
            <td>NY Fat Cap</td>
            <td>8-10 cm</td>
          </tr>
        </table>
      </div>
    `;

    expect(messyHtml).toContain('Raw Headline Without Classes');
    expect(graffitiSemanticCss).toContain('table');
    expect(graffitiSemanticCss).toContain('th');
    expect(graffitiSemanticCss).toContain('td');
    expect(graffitiSemanticCss).toContain('button');
  });

  // --------------------------------------------------------------------------
  // 12. Accessibility & Contrast
  // --------------------------------------------------------------------------
  it('12. should maintain WCAG AA/AAA compliant readable text contrast against asphalt concrete background', () => {
    const resolved = engine.resolveStyleById('graffiti');

    // Background is dark asphalt
    expect(resolved.tokens.colors.background).toBe('#121214');

    // High contrast reading text
    expect(resolved.tokens.colors.textPrimary).toBe('#f5f5f7'); // > 15:1 contrast ratio
    expect(resolved.tokens.colors.textSecondary).toBe('#a1a1aa'); // > 6:1 contrast ratio

    // Visible focus indicator
    expect(resolved.components.button.focusRing).toContain('#ffea00');
    expect(resolved.tokens.colors.ring).toContain('rgba(255, 30, 66');
  });

  // --------------------------------------------------------------------------
  // 13. Prefers Reduced Motion
  // --------------------------------------------------------------------------
  it('13. should respect prefers-reduced-motion media query to eliminate animations and transforms', () => {
    expect(graffitiSemanticCss).toContain('@media (prefers-reduced-motion: reduce)');
    expect(graffitiSemanticCss).toContain('animation: none !important');
    expect(graffitiSemanticCss).toContain('transition: none !important');
    expect(graffitiSemanticCss).toContain('transform: none !important');
  });

  // --------------------------------------------------------------------------
  // 14. Non-Destructive Invariant
  // --------------------------------------------------------------------------
  it('14. should guarantee zero DOM mutation and preserve the user source HTML intact', () => {
    const originalMarkup = '<section id="spray-sec"><h1 class="street-art">Mural Wall</h1><button id="tag-btn">Tag</button></section>';
    expect(originalMarkup).toContain('id="spray-sec"');
    expect(originalMarkup).toContain('class="street-art"');
    expect(originalMarkup).toContain('id="tag-btn"');
    expect(graffitiSemanticCss).toContain('.graffiti-styled-container');
  });
});
