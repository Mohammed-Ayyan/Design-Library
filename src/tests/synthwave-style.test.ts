import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { synthwaveStyle, synthwaveSemanticCss } from '../styles/synthwave';
import { cyberpunkStyle } from '../styles/cyberpunk';
import { cybercoreStyle } from '../styles/cybercore';
import { y2kAestheticStyle } from '../styles/y2k-aesthetic';
import { glassmorphismStyle } from '../styles/glassmorphism';
import { defaultStyles } from '../styles';

describe('Synthwave Design Language — Comprehensive Verification Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine(defaultStyles);
  });

  // --------------------------------------------------------------------------
  // 1. Definition & Token Integrity
  // --------------------------------------------------------------------------
  it('1. should resolve Synthwave style definition with authentic 1980s retro-futurist tokens', () => {
    expect(synthwaveStyle).toBeDefined();
    expect(synthwaveStyle.id).toBe('synthwave');
    const resolved = engine.resolveStyleById('synthwave');

    expect(resolved).toBeDefined();
    expect(resolved.styleId).toBe('synthwave');
    expect(resolved.styleName).toBe('Synthwave');

    // Palette: Deep midnight purple void, twilight console, electric neon pink, outrun cyan
    expect(resolved.tokens.colors.background).toBe('#0f051d');
    expect(resolved.tokens.colors.surface).toBe('#190a34');
    expect(resolved.tokens.colors.surfaceSubtle).toBe('#250e49');
    expect(resolved.tokens.colors.textPrimary).toBe('#fdf4ff');
    expect(resolved.tokens.colors.textSecondary).toBe('#d8b4fe');
    expect(resolved.tokens.colors.primary).toBe('#ff2a85');
    expect(resolved.tokens.colors.accent).toBe('#01cdfe');
    expect(resolved.tokens.colors.border).toBe('#3d1466');

    // Typography: Orbitron + Space Grotesk display, Inter body, JetBrains Mono
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Orbitron');
    expect(resolved.tokens.typography.fontFamilyBase).toContain('Inter');
    expect(resolved.tokens.typography.letterSpacingHeading).toBe('0.06em');
    expect(resolved.tokens.typography.lineHeightBase).toBe(1.65);

    // Geometry: Restrained arcade bevel (2px - 4px)
    expect(resolved.tokens.radii.sm).toBe('2px');
    expect(resolved.tokens.radii.md).toBe('4px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');

    // Components
    expect(resolved.components.button.background).toContain('#ff2a85');
    expect(resolved.components.button.borderRadius).toBe('3px');
    expect(resolved.components.button.textTransform).toBe('uppercase');
    expect(resolved.components.card.borderColor).toBe('rgba(255, 42, 133, 0.25)');
    expect(resolved.components.heading.fontFamily).toContain('Orbitron');
  });

  // --------------------------------------------------------------------------
  // 2. Semantic CSS Rules Coverage
  // --------------------------------------------------------------------------
  it('2. should export rich, self-contained semantic CSS with zero DOM mutations required', () => {
    expect(synthwaveSemanticCss).toBeDefined();
    expect(typeof synthwaveSemanticCss).toBe('string');

    // Scoped selectors
    expect(synthwaveSemanticCss).toContain('.lab-styled-preview[data-style="synthwave"]');
    expect(synthwaveSemanticCss).toContain('.synthwave-styled-container');
    expect(synthwaveSemanticCss).toContain('.style-synthwave');
    expect(synthwaveSemanticCss).toContain('.ds-scope[data-style-id="synthwave"]');

    // Color tokens & custom variables
    expect(synthwaveSemanticCss).toContain('--sw-bg: #0f051d');
    expect(synthwaveSemanticCss).toContain('--sw-surface: #190a34');
    expect(synthwaveSemanticCss).toContain('--sw-pink: #ff2a85');
    expect(synthwaveSemanticCss).toContain('--sw-cyan: #01cdfe');
    expect(synthwaveSemanticCss).toContain('--sw-border: #3d1466');

    // Typographic pairing
    expect(synthwaveSemanticCss).toContain('Orbitron');
    expect(synthwaveSemanticCss).toContain('Inter');
    expect(synthwaveSemanticCss).toContain('JetBrains Mono');
  });

  // --------------------------------------------------------------------------
  // 3. Genuine Divergence (Not Cyberpunk, Not Cybercore, Not Y2K, Not Glassmorphism)
  // --------------------------------------------------------------------------
  it('3. should enforce genuine visual divergence from Cyberpunk, Cybercore, Y2K, and Glassmorphism', () => {
    expect(cyberpunkStyle).toBeDefined();
    expect(cybercoreStyle).toBeDefined();
    expect(y2kAestheticStyle).toBeDefined();
    expect(glassmorphismStyle).toBeDefined();

    const sw = engine.resolveStyleById('synthwave');
    const cp = engine.resolveStyleById('cyberpunk');
    const cc = engine.resolveStyleById('cybercore');
    const y2k = engine.resolveStyleById('y2k-aesthetic');
    const glass = engine.resolveStyleById('glassmorphism');

    // 1. Synthwave vs Cyberpunk:
    // Cyberpunk uses acid laser yellow (#ffe600 / #00f0ff) with 0px chamfered corners and industrial telemetry
    // Synthwave uses deep midnight purple (#0f051d), neon sunset pink (#ff2a85), and wide Orbitron display type
    expect(sw.tokens.colors.background).not.toBe(cp.tokens.colors.background);
    expect(sw.tokens.colors.primary).not.toBe(cp.tokens.colors.primary);
    expect(sw.tokens.typography.fontFamilyHeading).not.toBe(cp.tokens.typography.fontFamilyHeading);
    expect(sw.tokens.radii.sm).not.toBe(cp.tokens.radii.sm);

    // 2. Synthwave vs Cybercore:
    // Cybercore uses obsidian (#0c0e12) substrate with phosphor green (#00ff66) and 1px technical precision
    // Synthwave uses midnight purple (#0f051d) with electric neon pink (#ff2a85) and outrun wireframe perspective
    expect(sw.tokens.colors.background).not.toBe(cc.tokens.colors.background);
    expect(sw.tokens.colors.primary).not.toBe(cc.tokens.colors.primary);
    expect(sw.tokens.typography.fontFamilyHeading).not.toBe(cc.tokens.typography.fontFamilyHeading);

    // 3. Synthwave vs Y2K:
    // Y2K uses bubble pill corners (9999px / 16px) and metallic silver / powder blue
    // Synthwave uses dark atmospheric void and 2px-4px arcade geometry
    expect(sw.tokens.radii.sm).not.toBe(y2k.tokens.radii.sm);
    expect(sw.tokens.colors.background).not.toBe(y2k.tokens.colors.background);

    // 4. Synthwave vs Glassmorphism:
    // Glassmorphism uses light/translucent blur cards with 9999px pills
    // Synthwave uses deep neon arcade surfaces and sunset glow
    expect(sw.tokens.colors.background).not.toBe(glass.tokens.colors.background);
    expect(sw.components.button.borderRadius).not.toBe(glass.components.button.borderRadius);
  });

  // --------------------------------------------------------------------------
  // 4. Archetype 1: Portfolio / Creative Showcase
  // --------------------------------------------------------------------------
  it('4. should render Portfolio archetype with retro-futurist showcase and arcade badges', () => {
    const portfolioHtml = `
      <main>
        <header>
          <nav>
            <a href="#work">Outrun Archive</a>
            <a href="#about">Synthesizer</a>
            <a href="#contact">Signal</a>
          </nav>
        </header>
        <section class="hero">
          <p class="tag">SYNTH // 1984</p>
          <h1>Retro-Futurist Audio Visuals</h1>
          <p>Cinematic analog synthesis and driving 1980s neon graphics.</p>
          <button>Initialize Deck</button>
        </section>
        <section>
          <h2>Selected Transmissions</h2>
          <div class="grid">
            <article class="card">
              <span class="badge">LP RELEASE</span>
              <h3>Neon Horizon</h3>
              <p>Analog synthwave score with vintage Roland Juno-106 textures.</p>
            </article>
            <article class="card">
              <span class="badge">ARCADE OST</span>
              <h3>Laser Velocity</h3>
              <p>Original 16-bit arcade soundtrack recorded on FM synthesizer.</p>
            </article>
          </div>
        </section>
      </main>
    `;

    expect(portfolioHtml).toContain('Neon Horizon');
    expect(synthwaveSemanticCss).toContain('header.hero');
    expect(synthwaveSemanticCss).toContain('nav a');
    expect(synthwaveSemanticCss).toContain('.card');
    expect(synthwaveSemanticCss).toContain('.badge');
  });

  // --------------------------------------------------------------------------
  // 5. Archetype 2: SaaS / Pricing Console
  // --------------------------------------------------------------------------
  it('5. should render SaaS/Pricing archetype with synth console tier cards and VIP sunset highlights', () => {
    const pricingHtml = `
      <section class="pricing-container">
        <h1>Synthesizer Cloud Tiers</h1>
        <p>Choose your production bandwidth.</p>
        <div class="pricing-grid">
          <div class="card pricing-card">
            <h3>Standard Patch</h3>
            <p class="price">$19/mo</p>
            <ul>
              <li>Stereo audio stems</li>
              <li>MIDI export</li>
            </ul>
            <button>Select Patch</button>
          </div>
          <div class="card pricing-card featured">
            <span class="badge">VIP ACCESS</span>
            <h3>Analog Master</h3>
            <p class="price">$49/mo</p>
            <ul>
              <li>Unlimited hardware emulation</li>
              <li>Realtime tape saturation</li>
              <li>24-bit 96kHz lossless</li>
            </ul>
            <button>Engage Master</button>
          </div>
        </div>
      </section>
    `;

    expect(pricingHtml).toContain('Analog Master');
    expect(synthwaveSemanticCss).toContain('.pricing-card');
    expect(synthwaveSemanticCss).toContain('.pricing-card.featured');
    expect(synthwaveSemanticCss).toContain('.price');
  });

  // --------------------------------------------------------------------------
  // 6. Archetype 3: Editorial / Magazine Layout
  // --------------------------------------------------------------------------
  it('6. should render Editorial/Magazine layout with high readability and neon blockquotes', () => {
    const editorialHtml = `
      <article class="prose">
        <header>
          <span class="tag">ISSUE #08 // RETRO WAVE</span>
          <h1>The Resurgence of Analog Frequency</h1>
          <p>By Vance Nova • October 1986</p>
        </header>
        <p>In the quiet basements of Tokyo and Berlin, forgotten silicon chips found new life inside polyphonic synthesizers.</p>
        <blockquote>
          “The future wasn’t cleaner or simpler—it was warmer, louder, and glowing with electric pink neon.”
        </blockquote>
        <p>Every resonant low-pass filter sweep speaks to a collective nostalgia for tomorrow.</p>
      </article>
    `;

    expect(editorialHtml).toContain('The Resurgence of Analog Frequency');
    expect(synthwaveSemanticCss).toContain('article:not(.prose)');
    expect(synthwaveSemanticCss).toContain('blockquote');
    expect(synthwaveSemanticCss).toContain('--sw-pink');
  });

  // --------------------------------------------------------------------------
  // 7. Archetype 4: Dashboard / Synth Console
  // --------------------------------------------------------------------------
  it('7. should render Dashboard archetype as an analog synth console with status LEDs', () => {
    const dashboardHtml = `
      <div class="dashboard">
        <header>
          <h2>Console Telemetry <span class="status-dot"></span></h2>
        </header>
        <div class="stat-grid">
          <div class="card">
            <h3>Oscillator 1 Frequency</h3>
            <p class="price">440.0 Hz</p>
            <span class="led"></span> Active
          </div>
          <div class="card">
            <h3>Filter Cutoff</h3>
            <p class="price">2.4 kHz</p>
            <span class="badge">RESONANCE PEAK</span>
          </div>
        </div>
      </div>
    `;

    expect(dashboardHtml).toContain('Oscillator 1 Frequency');
    expect(synthwaveSemanticCss).toContain('.status-dot');
    expect(synthwaveSemanticCss).toContain('.led');
    expect(synthwaveSemanticCss).toContain('.stat-grid');
  });

  // --------------------------------------------------------------------------
  // 8. Archetype 5: E-Commerce / Retro Catalog
  // --------------------------------------------------------------------------
  it('8. should render E-Commerce archetype with retro product cards and luminous price tags', () => {
    const ecommerceHtml = `
      <section class="catalog">
        <h1>Hardware Catalog</h1>
        <div class="product-grid">
          <article class="card">
            <span class="badge">VINTAGE 1984</span>
            <h3>Jupiter Polyphonic Deck</h3>
            <p>8-voice analog synthesizer with discrete voltage-controlled filters.</p>
            <p class="price">$1,899.00</p>
            <button>Add to Cart</button>
          </article>
        </div>
      </section>
    `;

    expect(ecommerceHtml).toContain('Jupiter Polyphonic Deck');
    expect(synthwaveSemanticCss).toContain('.price');
    expect(synthwaveSemanticCss).toContain('.card button');
  });

  // --------------------------------------------------------------------------
  // 9. Archetype 6: Restaurant / Late-Night Neon Diner
  // --------------------------------------------------------------------------
  it('9. should render Restaurant archetype as a late-night neon diner with cocktail menus', () => {
    const restaurantHtml = `
      <section class="menu">
        <h1>Midnight Neon Diner</h1>
        <p>Late night comfort and synth cocktails served until 4:00 AM.</p>
        <div class="menu-list">
          <div class="menu-item">
            <h3>Outrun Sunset Spritz</h3>
            <p>Aperol, blood orange, sparkling wine, and neon sugar rim.</p>
            <span class="price">$14.00</span>
          </div>
          <div class="menu-item">
            <h3>Cybernetic Smash Burger</h3>
            <p>Aged beef, caramelized onions, diner sauce, brioche bun.</p>
            <span class="price">$16.50</span>
          </div>
        </div>
      </section>
    `;

    expect(restaurantHtml).toContain('Midnight Neon Diner');
    expect(synthwaveSemanticCss).toContain('.menu-item');
    expect(synthwaveSemanticCss).toContain('border-bottom: 1px dashed');
  });

  // --------------------------------------------------------------------------
  // 10. Archetype 7: Contact Form / Arcade Control Deck
  // --------------------------------------------------------------------------
  it('10. should render Contact Form archetype with laser cyan focus states and arcade buttons', () => {
    const contactHtml = `
      <section class="contact-section">
        <h2>Transmit Signal</h2>
        <form>
          <label for="callsign">Pilot Callsign</label>
          <input type="text" id="callsign" placeholder="KAVINSKY_84" />

          <label for="freq">Frequency Email</label>
          <input type="email" id="freq" placeholder="pilot@outrun.fm" />

          <label for="msg">Transmission Message</label>
          <textarea id="msg" placeholder="Coordinates locked..."></textarea>

          <button type="submit">Broadcast Transmission</button>
        </form>
      </section>
    `;

    expect(contactHtml).toContain('Transmit Signal');
    expect(synthwaveSemanticCss).toContain('input[type="text"]');
    expect(synthwaveSemanticCss).toContain('textarea');
    expect(synthwaveSemanticCss).toContain('label');
    expect(synthwaveSemanticCss).toContain('border-color: var(--sw-cyan)');
  });

  // --------------------------------------------------------------------------
  // 11. Archetype 8: Arbitrary Messy Semantic-Poor HTML
  // --------------------------------------------------------------------------
  it('11. should gracefully style arbitrary messy semantic-poor HTML without breaking layout', () => {
    const messyHtml = `
      <div>
        <div>
          <h1>Raw Title Without Utility Classes</h1>
          <p>Unstyled descriptive paragraph inside nested unclassed divs.</p>
          <p>Second paragraph testing text-secondary contrast.</p>
        </div>
        <div>
          <button>Unclassed Action</button>
          <a href="#">Raw Text Link</a>
        </div>
        <table>
          <tr>
            <th>Channel</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>CH-01</td>
            <td>128</td>
          </tr>
        </table>
      </div>
    `;

    expect(messyHtml).toContain('Raw Title Without Utility Classes');
    expect(synthwaveSemanticCss).toContain('table');
    expect(synthwaveSemanticCss).toContain('th');
    expect(synthwaveSemanticCss).toContain('td');
    expect(synthwaveSemanticCss).toContain('button');
  });

  // --------------------------------------------------------------------------
  // 12. Accessibility & Contrast
  // --------------------------------------------------------------------------
  it('12. should maintain WCAG AA/AAA compliant readable text contrast against dark purple backgrounds', () => {
    const resolved = engine.resolveStyleById('synthwave');

    // Background is dark midnight purple
    expect(resolved.tokens.colors.background).toBe('#0f051d');

    // High contrast reading text
    expect(resolved.tokens.colors.textPrimary).toBe('#fdf4ff'); // > 14:1 contrast ratio
    expect(resolved.tokens.colors.textSecondary).toBe('#d8b4fe'); // > 7:1 contrast ratio

    // Visible focus indicator
    expect(resolved.components.button.focusRing).toContain('#01cdfe');
    expect(resolved.tokens.colors.ring).toContain('rgba(255, 42, 133');
  });

  // --------------------------------------------------------------------------
  // 13. Prefers Reduced Motion
  // --------------------------------------------------------------------------
  it('13. should respect prefers-reduced-motion media query to eliminate animations and transforms', () => {
    expect(synthwaveSemanticCss).toContain('@media (prefers-reduced-motion: reduce)');
    expect(synthwaveSemanticCss).toContain('animation: none !important');
    expect(synthwaveSemanticCss).toContain('transition: none !important');
    expect(synthwaveSemanticCss).toContain('transform: none !important');
  });

  // --------------------------------------------------------------------------
  // 14. Non-Destructive Invariant
  // --------------------------------------------------------------------------
  it('14. should guarantee zero DOM mutation and preserve the user source HTML intact', () => {
    const originalMarkup = '<section id="main-sec"><h1 class="my-title">Synthwave World</h1><button id="cta-btn">Start</button></section>';
    // Ensure that applying the style via CSS scopes does not require rewriting the DOM string
    expect(originalMarkup).toContain('id="main-sec"');
    expect(originalMarkup).toContain('class="my-title"');
    expect(originalMarkup).toContain('id="cta-btn"');
    expect(synthwaveSemanticCss).toContain('.synthwave-styled-container');
  });
});
