import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { DOMAnalyzer } from '../core/adaptive/dom-analyzer';
import { AdaptiveCSSGenerator } from '../core/adaptive/adaptive-css';

describe('Real-World Archetypes & 6-Language Composition Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine();
  });

  const activeStyles = [
    'brutalism',
    'minimalism',
    'glassmorphism',
    'swiss-design',
    'cyberpunk',
    'wabi-sabi',
  ] as const;

  // Archetype 1: SaaS Landing Page
  const SAAS_LANDING_HTML = `<section>
  <header>
    <h1>Supercharge your engineering workflow</h1>
    <p>Automate testing, design system enforcement, and multi-cloud deployments in minutes.</p>
    <button>Start Free 14-Day Trial</button>
  </header>
  <div>
    <h2>Built for scale</h2>
    <div>
      <div>
        <h3>Instant Pipeline</h3>
        <p>Zero-configuration deployment pipelines for modern microservices.</p>
      </div>
      <div>
        <h3>Adaptive Styles</h3>
        <p>Dynamic visual design languages mapped directly to structural DOM trees.</p>
      </div>
      <div>
        <h3>Global Low Latency</h3>
        <p>Sub-millisecond routing across 300 edge nodes globally.</p>
      </div>
    </div>
  </div>
</section>`;

  // Archetype 2: Pricing Page
  const PRICING_PAGE_HTML = `<div>
  <h2>Predictable pricing for ambitious teams</h2>
  <p>Choose the plan that matches your current development velocity.</p>
  <div>
    <div>
      <h3>Starter</h3>
      <p>Free forever</p>
      <strong>$0 / mo</strong>
      <p>Up to 3 team members and 10 repositories.</p>
      <button>Get Started</button>
    </div>
    <div>
      <h3>Pro Team</h3>
      <p>Most Popular</p>
      <strong>$49 / mo</strong>
      <p>Unlimited projects, edge nodes, and adaptive design engine access.</p>
      <button>Start Pro Trial</button>
    </div>
    <div>
      <h3>Enterprise</h3>
      <p>Dedicated scale</p>
      <strong>$299 / mo</strong>
      <p>SLA guarantees, custom audit logs, and on-prem deployment.</p>
      <button>Contact Sales</button>
    </div>
  </div>
</div>`;

  // Archetype 3: Long-form Editorial Article
  const ARTICLE_HTML = `<article>
  <h1>The Architecture of Autonomous Style Engines</h1>
  <p>By Elena Rostova • Published September 2026</p>
  <p>For two decades, web styling has been dominated by static stylesheets, preprocessors, and utility classes. The web has grown vastly more complex, but our styling tools remained largely declarative representations of box models.</p>
  <blockquote>Design is not a coat of paint applied at the end; it is an intelligent interpretation of structure, rhythm, and semantic intent.</blockquote>
  <p>When an engine understands the semantic role of an unstyled HTML document, it can compose layout paradigms that feel genuinely art-directed rather than skinned.</p>
</article>`;

  // Archetype 4: Developer / Designer Portfolio
  const PORTFOLIO_HTML = `<section>
  <header>
    <h1>Selected Works & Case Studies</h1>
    <p>Interactive installations, design system architectures, and creative computing.</p>
  </header>
  <div>
    <div>
      <h3>Hyperion Design Language</h3>
      <p>Spatial multi-layered UI framework built for zero-gravity heads-up displays.</p>
      <a href="/case-study/hyperion">Read Case Study</a>
    </div>
    <div>
      <h3>Chrono Ledger</h3>
      <p>Cryptographic time-stamped auditing ledger with high-density tabular visualizations.</p>
      <a href="/case-study/chrono">Read Case Study</a>
    </div>
  </div>
</section>`;

  // Archetype 5: Analytics & Metrics Dashboard
  const DASHBOARD_HTML = `<section>
  <header>
    <h2>Telemetry Overview</h2>
    <p>Real-time system health and edge ingestion rates.</p>
  </header>
  <div>
    <div>
      <h3>Ingestion Rate</h3>
      <strong>42.8 GB/s</strong>
      <p>+14% from previous epoch</p>
    </div>
    <div>
      <h3>P99 Latency</h3>
      <strong>1.8 ms</strong>
      <p>Optimal network threshold</p>
    </div>
    <div>
      <h3>Cluster Uptime</h3>
      <strong>99.995%</strong>
      <p>32 consecutive days without incident</p>
    </div>
  </div>
</section>`;

  // Archetype 6: E-Commerce Product Listing
  const ECOMMERCE_HTML = `<div>
  <h2>Curated Essentials</h2>
  <div>
    <div>
      <h3>Kinetic Chronometer</h3>
      <p>Precision automatic mechanical movement with titanium case.</p>
      <strong>$1,250</strong>
      <button>Add to Cart</button>
    </div>
    <div>
      <h3>Bespoke Fountain Pen</h3>
      <p>Hand-turned ebonite body with 18k solid gold nib.</p>
      <strong>$380</strong>
      <button>Add to Cart</button>
    </div>
  </div>
</div>`;

  // Archetype 7: Restaurant Menu
  const RESTAURANT_MENU_HTML = `<section>
  <header>
    <h1>Seasonal Tasting Menu</h1>
    <p>Artisanal ingredients sourced from local organic micro-farms.</p>
  </header>
  <div>
    <div>
      <h3>Wild Forest Mushroom Velouté</h3>
      <p>Chanterelles, black truffle infusion, toasted hazelnuts.</p>
      <strong>$24</strong>
    </div>
    <div>
      <h3>Charcoal-Grilled Miso Cod</h3>
      <p>Fermented dashi reduction, pickled daikon, sea greens.</p>
      <strong>$46</strong>
    </div>
  </div>
</section>`;

  // Archetype 8: Web App Navigation Bar
  const NAVIGATION_BAR_HTML = `<nav>
  <a href="/">Platform</a>
  <a href="/solutions">Solutions</a>
  <a href="/pricing">Pricing</a>
  <a href="/docs">Documentation</a>
  <button>Sign In</button>
</nav>`;

  // Archetype 9: Deeply Nested Hierarchy (4+ levels of nesting)
  const DEEPLY_NESTED_HTML = `<main>
  <section>
    <header>
      <div>
        <div>
          <h1>Deep Structural Tree</h1>
          <p>Testing nested hierarchy resolution down multiple levels.</p>
        </div>
      </div>
    </header>
    <div>
      <article>
        <div>
          <div>
            <h2>Nested Feature Node</h2>
            <p>Content at 5 levels of DOM depth.</p>
            <button>Inspect Deep Node</button>
          </div>
        </div>
      </article>
    </div>
  </section>
</main>`;

  // Archetype 10: Messy Semantic-Poor HTML (all generic divs)
  const MESSY_HTML = `<div>
  <div>
    <div>Just a raw block of text without headings.</div>
    <div>Another loose div floating here.</div>
  </div>
  <div>
    <button>Orphaned Button</button>
  </div>
</div>`;

  it('1. should process SaaS Landing Page across all 6 languages with distinct Hero compositions', () => {
    const reports = activeStyles.map((style) => ({
      style,
      report: DOMAnalyzer.analyzeHtml(SAAS_LANDING_HTML, style, engine),
    }));

    // Check all styles resolve Hero
    reports.forEach(({ report }) => {
      expect(report.rootRole).toBe('hero');
      expect(report.stampedHtml).toContain('data-role="hero"');
      expect(report.stampedHtml).toContain(`data-composition=`);
    });

    // Check that compositions are genuinely distinct across the 6 design languages
    const compositions = new Set(reports.map((r) => r.report.composition));
    expect(compositions.size).toBe(6); // 6 distinct compositions for the same input!

    const compMap = Object.fromEntries(reports.map((r) => [r.style, r.report.composition]));
    expect(compMap['brutalism']).toBe('hero-asymmetric-poster');
    expect(compMap['minimalism']).toBe('hero-airy-editorial');
    expect(compMap['glassmorphism']).toBe('hero-spatial-pane');
    expect(compMap['swiss-design']).toBe('hero-swiss-grid');
    expect(compMap['cyberpunk']).toBe('hero-cyberpunk-hud');
    expect(compMap['wabi-sabi']).toBe('hero-wabi-sabi-zen');
  });

  it('2. should process Multi-Tier Pricing Page across all 6 languages with distinct Pricing compositions', () => {
    const reports = activeStyles.map((style) => ({
      style,
      report: DOMAnalyzer.analyzeHtml(PRICING_PAGE_HTML, style, engine),
    }));

    // All infer pricing
    reports.forEach(({ report }) => {
      expect(report.rootRole).toBe('pricing-card');
      expect(report.stats.hasCurrency).toBe(true);
    });

    const compositions = new Set(reports.map((r) => r.report.composition));
    expect(compositions.size).toBe(6);

    const compMap = Object.fromEntries(reports.map((r) => [r.style, r.report.composition]));
    expect(compMap['brutalism']).toBe('pricing-brutal-slabs');
    expect(compMap['minimalism']).toBe('pricing-hairline-matrix');
    expect(compMap['glassmorphism']).toBe('pricing-luminescent-tiers');
    expect(compMap['swiss-design']).toBe('pricing-swiss-ledger');
    expect(compMap['cyberpunk']).toBe('pricing-cyberpunk-rig');
    expect(compMap['wabi-sabi']).toBe('pricing-wabi-sabi-harmony');
  });

  it('3. should process Long-form Editorial Article across all 6 languages with distinct Article compositions', () => {
    const reports = activeStyles.map((style) => ({
      style,
      report: DOMAnalyzer.analyzeHtml(ARTICLE_HTML, style, engine),
    }));

    reports.forEach(({ report }) => {
      expect(report.rootRole).toBe('article');
    });

    const compositions = new Set(reports.map((r) => r.report.composition));
    expect(compositions.size).toBe(6);

    const compMap = Object.fromEntries(reports.map((r) => [r.style, r.report.composition]));
    expect(compMap['brutalism']).toBe('article-industrial-broadsheet');
    expect(compMap['minimalism']).toBe('article-editorial-book');
    expect(compMap['glassmorphism']).toBe('article-floating-parchment');
    expect(compMap['swiss-design']).toBe('article-swiss-column');
    expect(compMap['cyberpunk']).toBe('article-cyberpunk-netlog');
    expect(compMap['wabi-sabi']).toBe('article-wabi-sabi-manuscript');
  });

  it('4. should process Portfolio Showcase and infer cards without classes', () => {
    const report = DOMAnalyzer.analyzeHtml(PORTFOLIO_HTML, 'swiss-design', engine);
    expect(report.rootRole).toBe('hero'); // top-level has H1
    expect(report.stats.headingCount).toBeGreaterThanOrEqual(2);
  });

  it('5. should process Analytics Dashboard and infer feature nodes', () => {
    const report = DOMAnalyzer.analyzeHtml(DASHBOARD_HTML, 'cyberpunk', engine);
    expect(report.rootRole).toBe('feature-section');
    expect(report.composition).toBe('features-cyberpunk-nodes');
  });

  it('6. should process E-Commerce Listing and detect currency markers', () => {
    const report = DOMAnalyzer.analyzeHtml(ECOMMERCE_HTML, 'minimalism', engine);
    expect(report.stats.hasCurrency).toBe(true);
    expect(report.stats.buttonCount).toBe(2);
    expect(report.rootRole).toBe('pricing-card');
  });

  it('7. should process Restaurant Tasting Menu and infer structured items', () => {
    const report = DOMAnalyzer.analyzeHtml(RESTAURANT_MENU_HTML, 'wabi-sabi', engine);
    expect(report.rootRole).toBe('hero');
    expect(report.stats.hasCurrency).toBe(true);
    expect(report.composition).toBe('hero-wabi-sabi-zen');
  });

  it('8. should process Navigation Bar across all 6 languages with distinct nav compositions', () => {
    const reports = activeStyles.map((style) => ({
      style,
      report: DOMAnalyzer.analyzeHtml(NAVIGATION_BAR_HTML, style, engine),
    }));

    reports.forEach(({ report }) => {
      expect(report.rootRole).toBe('navigation');
    });

    const compMap = Object.fromEntries(reports.map((r) => [r.style, r.report.composition]));
    expect(compMap['brutalism']).toBe('nav-utilitarian-ticker');
    expect(compMap['minimalism']).toBe('nav-airy-strip');
    expect(compMap['glassmorphism']).toBe('nav-floating-dock');
    expect(compMap['swiss-design']).toBe('nav-swiss-modular');
    expect(compMap['cyberpunk']).toBe('nav-cyberpunk-console');
    expect(compMap['wabi-sabi']).toBe('nav-wabi-sabi-tranquil');
  });

  it('9. should handle deeply nested hierarchy without crashing or losing scope', () => {
    const report = DOMAnalyzer.analyzeHtml(DEEPLY_NESTED_HTML, 'glassmorphism', engine);
    expect(report.stampedHtml).toContain('data-role');
    expect(report.stats.headingCount).toBe(2);
    expect(report.stats.buttonCount).toBe(1);
  });

  it('10. should handle messy semantic-poor HTML with conservative fallback and zero hallucination', () => {
    const report = DOMAnalyzer.analyzeHtml(MESSY_HTML, 'brutalism', engine);
    // When HTML lacks semantic structure, engine must NOT hallucinate hero or pricing
    expect(report.rootRole).toBe('generic-container');
    expect(report.composition).toBe('generic-balanced');
    expect(report.confidence).toBeLessThanOrEqual(0.85);
  });

  it('11. should ensure universal CSS contains layout rules for all 6 active design languages', () => {
    const css = AdaptiveCSSGenerator.getAdaptiveStyles();
    expect(css).toContain('.style-brutalism');
    expect(css).toContain('.style-minimalism');
    expect(css).toContain('.style-glassmorphism');
    expect(css).toContain('.style-swiss-design');
    expect(css).toContain('.style-cyberpunk');
    expect(css).toContain('.style-wabi-sabi');
  });
});
