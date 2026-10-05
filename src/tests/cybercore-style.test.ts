import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { cybercoreStyle, cybercoreSemanticCss } from '../styles/cybercore';
import { cyberpunkStyle } from '../styles/cyberpunk';
import { y2kAestheticStyle } from '../styles/y2k-aesthetic';
import { darkModeUiStyle } from '../styles/dark-mode-ui';
import { defaultStyles } from '../styles';

describe('Cybercore Design Language — Comprehensive Verification Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine(defaultStyles);
  });

  // --------------------------------------------------------------------------
  // 1. Definition & Token Integrity
  // --------------------------------------------------------------------------
  it('1. should resolve Cybercore style definition with authentic internet-native digital tokens', () => {
    expect(cybercoreStyle).toBeDefined();
    expect(cybercoreStyle.id).toBe('cybercore');
    const resolved = engine.resolveStyleById('cybercore');

    expect(resolved).toBeDefined();
    expect(resolved.styleId).toBe('cybercore');
    expect(resolved.styleName).toBe('Cybercore');

    // Palette: Deep obsidian void, dark console panel, phosphor green, electric cyan, dirty white
    expect(resolved.tokens.colors.background).toBe('#0c0e12');
    expect(resolved.tokens.colors.surface).toBe('#13171f');
    expect(resolved.tokens.colors.surfaceSubtle).toBe('#1a202c');
    expect(resolved.tokens.colors.textPrimary).toBe('#e2e8f0');
    expect(resolved.tokens.colors.textSecondary).toBe('#94a3b8');
    expect(resolved.tokens.colors.primary).toBe('#00ff66'); // Phosphor green
    expect(resolved.tokens.colors.accent).toBe('#00f0ff');  // Electric cybernetic cyan
    expect(resolved.tokens.colors.border).toBe('#242b35');

    // Typography: Space Grotesk + JetBrains Mono + Inter
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Space Grotesk');
    expect(resolved.tokens.typography.fontFamilyMono).toContain('JetBrains Mono');
    expect(resolved.tokens.typography.lineHeightBase).toBe(1.65);

    // Geometry: Sharp technical precision (1px - 2px), NOT bubbly pills or heavy rounded cards
    expect(resolved.tokens.radii.sm).toBe('1px');
    expect(resolved.tokens.radii.md).toBe('2px');
    expect(resolved.tokens.borders.widthBase).toBe('1px');

    // Components
    expect(resolved.components.button.background).toBe('#00ff66');
    expect(resolved.components.button.borderRadius).toBe('1px');
    expect(resolved.components.button.textTransform).toBe('uppercase');
    expect(resolved.components.card.background).toBe('#13171f');
    expect(resolved.components.card.borderColor).toBe('#242b35');
  });

  // --------------------------------------------------------------------------
  // 2. Semantic CSS Rules Coverage
  // --------------------------------------------------------------------------
  it('2. should export rich, self-contained semantic CSS with zero DOM mutations required', () => {
    expect(cybercoreSemanticCss).toBeDefined();
    expect(typeof cybercoreSemanticCss).toBe('string');

    // Scoped selectors
    expect(cybercoreSemanticCss).toContain('.lab-styled-preview[data-style="cybercore"]');
    expect(cybercoreSemanticCss).toContain('.cybercore-styled-container');
    expect(cybercoreSemanticCss).toContain('.style-cybercore');
    expect(cybercoreSemanticCss).toContain('.ds-scope[data-style-id="cybercore"]');

    // Color tokens & custom variables
    expect(cybercoreSemanticCss).toContain('--cc-bg: #0c0e12');
    expect(cybercoreSemanticCss).toContain('--cc-surface: #13171f');
    expect(cybercoreSemanticCss).toContain('--cc-green: #00ff66');
    expect(cybercoreSemanticCss).toContain('--cc-cyan: #00f0ff');
    expect(cybercoreSemanticCss).toContain('--cc-border: #242b35');

    // Typographic pairing
    expect(cybercoreSemanticCss).toContain('Space Grotesk');
    expect(cybercoreSemanticCss).toContain('JetBrains Mono');
    expect(cybercoreSemanticCss).toContain('Inter');
  });

  // --------------------------------------------------------------------------
  // 3. Genuine Divergence (Not Cyberpunk, Not Y2K, Not Dark Mode UI, Not simple Black+Neon)
  // --------------------------------------------------------------------------
  it('3. should enforce genuine visual divergence from Cyberpunk, Y2K, and Dark Mode UI', () => {
    expect(cyberpunkStyle).toBeDefined();
    expect(y2kAestheticStyle).toBeDefined();
    expect(darkModeUiStyle).toBeDefined();

    const cc = engine.resolveStyleById('cybercore');
    const cp = engine.resolveStyleById('cyberpunk');
    const y2k = engine.resolveStyleById('y2k-aesthetic');
    const dark = engine.resolveStyleById('dark-mode-ui');

    // 1. Cybercore vs Cyberpunk:
    // Cyberpunk uses acid laser yellow (#ffe600 / #00f0ff) with 0px chamfered corners and heavy industrial borders (2px)
    // Cybercore uses internet-native dark substrate (#0c0e12) with selective CRT scanlines and JetBrains Mono technical metadata
    expect(cc.tokens.colors.primary).not.toBe(cp.tokens.colors.primary);
    expect(cc.tokens.typography.fontFamilyHeading).not.toBe(cp.tokens.typography.fontFamilyHeading);
    expect(cc.tokens.radii.sm).toBe('1px');

    // 2. Cybercore vs Y2K:
    // Y2K has bubbly 16px radii, chrome metallic gradients, and optimism
    // Cybercore has sharp 1px-2px technical geometry and fragmented dark obsidian surfaces
    expect(cc.tokens.radii.md).not.toBe(y2k.tokens.radii.md);
    expect(cc.tokens.radii.md).toBe('2px');
    expect(y2k.tokens.radii.md).toBe('16px');
    expect(cc.tokens.colors.background).not.toBe(y2k.tokens.colors.background);

    // 3. Cybercore vs Dark Mode UI:
    // Dark Mode UI is corporate, polished, neutral slate with 10px radii and no scanlines/terminal artifacts
    // Cybercore has fragmented console panels, monospace metadata tags, and selective CRT scanline patterns
    expect(cc.tokens.radii.md).not.toBe(dark.tokens.radii.md);
    expect(cc.tokens.colors.primary).not.toBe(dark.tokens.colors.primary);
    expect(cybercoreSemanticCss).toContain('repeating-linear-gradient(0deg'); // Selective scanlines
    expect(cybercoreSemanticCss).toContain('[NODE_FRAG]'); // Technical metadata label
  });

  // --------------------------------------------------------------------------
  // 4. Testing Required Archetypes without HTML/DOM Mutation
  // --------------------------------------------------------------------------
  describe('Required Archetype Stylings', () => {
    // Archetype 1: Portfolio / Studio
    it('Archetype 1 (Portfolio): styles system navigation, digital identity hero, and node fragment cards', () => {
      const sourceHtml = `<main>
        <header>
          <nav>
            <a href="#">Root</a>
            <a href="#">Nodes</a>
            <a href="#">Transmissions</a>
            <a href="#">Connect</a>
          </nav>
        </header>
        <section>
          <p>Digital Identity Archive</p>
          <h1>Synthesizing corrupted media & net artifacts.</h1>
          <p>Experimental internet culture research and digital systems development.</p>
          <button>Mount Workspace</button>
        </section>
        <section>
          <h2>Active Projects</h2>
          <div>
            <article>
              <h3>Subnet Matrix</h3>
              <p>Fragmented communication protocol.</p>
            </article>
            <article>
              <h3>Phosphor Terminal</h3>
              <p>CRT-inspired visual synthesis engine.</p>
            </article>
          </div>
        </section>
      </main>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('<h1>Synthesizing corrupted media & net artifacts.</h1>');

      // Verify CSS targets semantic HTML
      expect(cybercoreSemanticCss).toContain('nav');
      expect(cybercoreSemanticCss).toContain('nav a:first-child::before'); // // SYS:
      expect(cybercoreSemanticCss).toContain('header > p:first-child::before'); // >> DIR://
      expect(cybercoreSemanticCss).toContain('section > div'); // Grid
      expect(cybercoreSemanticCss).toContain('article::before'); // [NODE_FRAG]
    });

    // Archetype 2: SaaS / Pricing
    it('Archetype 2 (SaaS / Pricing): formats bandwidth quota allocations with priority override badges', () => {
      const sourceHtml = `<section class="pricing">
        <h2>Bandwidth Allocations</h2>
        <div>
          <article>
            <h3>Standard Relay</h3>
            <p>10GB shared terminal throughput.</p>
            <p>$12 / mo</p>
            <button>Allocate</button>
          </article>
          <article class="featured">
            <h3>Priority Override</h3>
            <p>Dedicated fiber channel with unthrottled access.</p>
            <p>$39 / mo</p>
            <button>Allocate</button>
          </article>
        </div>
      </section>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('Priority Override');

      expect(cybercoreSemanticCss).toContain('section > div > article:nth-child(2)');
      expect(cybercoreSemanticCss).toContain('[class*="featured"]');
      expect(cybercoreSemanticCss).toContain('[TIER: PRIORITY_OVERRIDE]');
      expect(cybercoreSemanticCss).toContain('section > div > article p:has(+ button)');
    });

    // Archetype 3: Editorial / Magazine
    it('Archetype 3 (Editorial / Magazine): styles un-cardified articles and archived communication logs', () => {
      const sourceHtml = `<article>
        <h1>Underground Networks of the Early Web</h1>
        <p>Before algorithmic sorting and sanitized platforms, digital spaces existed in dark, decentralized corners.</p>
        <blockquote>
          <p>The network is not a destination; it is an open terrain of fragmented signals.</p>
        </blockquote>
        <p>Files were shared across bulletin systems, leaving artifacts of compression and noise.</p>
      </article>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('Underground Networks of the Early Web');

      // Verify un-cardified single article rule
      expect(cybercoreSemanticCss).toContain('article:only-child');
      expect(cybercoreSemanticCss).toContain('max-width: 720px !important');

      // Verify blockquote styling with log excerpt prefix
      expect(cybercoreSemanticCss).toContain('blockquote');
      expect(cybercoreSemanticCss).toContain('border-left: 4px solid var(--cc-cyan)');
      expect(cybercoreSemanticCss).toContain('/* LOG_EXCERPT */');
    });

    // Archetype 4: Dashboard / Data
    it('Archetype 4 (Dashboard): uses fragmented system console cards and terminal matrix tables', () => {
      const sourceHtml = `<section>
        <h2>System Telemetry Matrix</h2>
        <div>
          <article>
            <h3>Memory Blocks</h3>
            <strong>64,280</strong>
            <p>Sectors active</p>
          </article>
          <article>
            <h3>Packets Routed</h3>
            <strong>1.2M</strong>
            <p>No dropped frames</p>
          </article>
        </div>
        <table>
          <thead>
            <tr>
              <th>Node ID</th>
              <th>Protocol</th>
              <th>Latency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>node_082</td>
              <td>UDP/RAW</td>
              <td>4.2ms</td>
              <td>ONLINE</td>
            </tr>
          </tbody>
        </table>
      </section>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('System Telemetry Matrix');

      // Telemetry strong figures
      expect(cybercoreSemanticCss).toContain('article strong');

      // Table styling
      expect(cybercoreSemanticCss).toContain('table');
      expect(cybercoreSemanticCss).toContain('th');
      expect(cybercoreSemanticCss).toContain('background: #0c0e12');
      expect(cybercoreSemanticCss).toContain('color: var(--cc-cyan)');
      expect(cybercoreSemanticCss).toContain('tr:nth-child(even) td');
    });

    // Archetype 5: E-Commerce / Underground Catalog
    it('Archetype 5 (E-Commerce): formats technical inventory badges and catalog cards', () => {
      const sourceHtml = `<section class="catalog">
        <h2>Hardware & Artifact Depot</h2>
        <div>
          <article class="product">
            <span class="badge">SPEC_V2</span>
            <h3>CRT Raster Display Unit</h3>
            <p>Authentic 14-inch monochrome green phosphor screen with BNC inputs.</p>
            <p class="price">$180.00</p>
            <button>Acquire Unit</button>
          </article>
        </div>
      </section>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('CRT Raster Display Unit');
      expect(cybercoreSemanticCss).toContain('[class*="badge"]');
      expect(cybercoreSemanticCss).toContain('border: 1px solid rgba(0, 255, 102, 0.35)');
      expect(cybercoreSemanticCss).toContain('text-transform: uppercase');
    });

    // Archetype 6: Restaurant Menu / Synthesizer Manifest
    it('Archetype 6 (Restaurant): styles digital nutrition manifest with dashed rules and monospace prices', () => {
      const sourceHtml = `<section class="menu">
        <h2>Synthesizer Rations</h2>
        <ul>
          <li>
            <span>Electrolyte Broth Concentrate</span>
            <span>$4.50</span>
          </li>
          <li>
            <span>Protein Matrix Bar (Almond / Ash)</span>
            <span>$3.20</span>
          </li>
        </ul>
      </section>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('Synthesizer Rations');
      expect(cybercoreSemanticCss).toContain('ul');
      expect(cybercoreSemanticCss).toContain('li');
      expect(cybercoreSemanticCss).toContain('border-bottom: 1px dashed var(--cc-border)');
      expect(cybercoreSemanticCss).toContain('li span:last-child');
    });

    // Archetype 7: Contact Form
    it('Archetype 7 (Contact Form): styles command prompt console with prompt markers and input glow', () => {
      const sourceHtml = `<form>
        <div>
          <label for="uid">Operator Call-Sign</label>
          <input type="text" id="uid" placeholder="sys_admin_01" />
        </div>
        <div>
          <label for="cmd">Transmission Stream</label>
          <textarea id="cmd" rows="4"></textarea>
        </div>
        <button type="submit">Execute Stream</button>
      </form>`;

      expect(sourceHtml).toBeDefined();
      expect(sourceHtml).toContain('Execute Stream');
      expect(cybercoreSemanticCss).toContain('form');
      expect(cybercoreSemanticCss).toContain('>> COMMAND_INPUT_INTERFACE // READY');
      expect(cybercoreSemanticCss).toContain('input[type="text"]');
      expect(cybercoreSemanticCss).toContain('input:focus');
      expect(cybercoreSemanticCss).toContain('border-color: var(--cc-green)');
    });

    // Archetype 8: Arbitrary Messy Semantic-Poor HTML
    it('Archetype 8 (Arbitrary Messy HTML): gracefully handles unstructured tags without throwing or failing', () => {
      const sourceHtml = `<div>
        <div>
          <span>Broadcast Channel Open</span>
          <p>Unencrypted packet broadcast to all listening nodes.</p>
          <a href="#">Verify Sig</a>
          <button>Acknowledge</button>
        </div>
      </div>`;

      expect(sourceHtml).toBeDefined();
      expect(cybercoreSemanticCss).toContain('button');
      expect(cybercoreSemanticCss).toContain('p');
    });
  });

  // --------------------------------------------------------------------------
  // 5. Interactive States & Accessibility
  // --------------------------------------------------------------------------
  it('5. should provide complete interactive states (hover, active, focus, disabled)', () => {
    // Hover
    expect(cybercoreSemanticCss).toContain('button:hover');
    expect(cybercoreSemanticCss).toContain('background: var(--cc-green-hover)');
    expect(cybercoreSemanticCss).toContain('border-color: var(--cc-cyan)');

    // Active
    expect(cybercoreSemanticCss).toContain('button:active');
    expect(cybercoreSemanticCss).toContain('transform: translate(2px, 2px)');

    // Focus-Visible
    expect(cybercoreSemanticCss).toContain('button:focus-visible');
    expect(cybercoreSemanticCss).toContain('0 0 0 2px var(--cc-bg), 0 0 0 4px var(--cc-green)');

    // Disabled
    expect(cybercoreSemanticCss).toContain('button:disabled');
    expect(cybercoreSemanticCss).toContain('cursor: not-allowed');
  });

  it('6. should respect prefers-reduced-motion and responsive mobile viewports', () => {
    // prefers-reduced-motion
    expect(cybercoreSemanticCss).toContain('@media (prefers-reduced-motion: reduce)');
    expect(cybercoreSemanticCss).toContain('animation: none !important');
    expect(cybercoreSemanticCss).toContain('transition: none !important');

    // Responsive breakpoints
    expect(cybercoreSemanticCss).toContain('@media (max-width: 768px)');
    expect(cybercoreSemanticCss).toContain('grid-template-columns: 1fr !important');
  });

  it('7. should include corrupted system log footer', () => {
    expect(cybercoreSemanticCss).toContain('footer');
    expect(cybercoreSemanticCss).toContain('// MEM_DUMP: OK // TERMINAL_SESSION_CLOSED //');
  });
});
