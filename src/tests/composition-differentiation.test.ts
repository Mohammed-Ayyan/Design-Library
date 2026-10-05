import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { DOMAnalyzer } from '../core/adaptive/dom-analyzer';
import { CompositionStrategyResolver } from '../core/adaptive/composition-strategy';

describe('Composition-Aware Adaptive Engine — Anti "Same Layout + Different Skin" Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine();
  });

  const HERO_HTML = `<div>
  <h1>Build your future</h1>
  <p>Everything you need to launch your next idea.</p>
  <button>Get Started</button>
</div>`;

  const FEATURES_HTML = `<section>
  <h2>Core Capabilities</h2>
  <div>
    <div>
      <h3>High Velocity</h3>
      <p>Ship resilient UI components rapidly.</p>
    </div>
    <div>
      <h3>Total Flexibility</h3>
      <p>Adapts to arbitrary unstyled HTML structures.</p>
    </div>
  </div>
</section>`;

  const PRICING_HTML = `<div>
  <h2>Premium Plan</h2>
  <p>Everything included for your growing team.</p>
  <strong>$29 / month</strong>
  <button>Choose Plan</button>
</div>`;

  const NAV_HTML = `<nav>
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>`;

  const ARTICLE_HTML = `<article>
  <h1>The Future of Design</h1>
  <p>Design systems are changing how developers build products.</p>
  <blockquote>Great design should adapt to the content.</blockquote>
  <p>More article content goes here.</p>
</article>`;

  const FORM_HTML = `<form>
  <h2>Join the newsletter</h2>
  <p>Get useful updates every week.</p>
  <input type="email" placeholder="Your email">
  <button>Subscribe</button>
</form>`;

  it('1. should produce distinct Hero compositions across Brutalism, Minimalism, and Glassmorphism for identical HTML', () => {
    const brutalReport = DOMAnalyzer.analyzeHtml(HERO_HTML, 'brutalism', engine);
    const minimalReport = DOMAnalyzer.analyzeHtml(HERO_HTML, 'minimalism', engine);
    const glassReport = DOMAnalyzer.analyzeHtml(HERO_HTML, 'glassmorphism', engine);

    expect(brutalReport.rootRole).toBe('hero');
    expect(minimalReport.rootRole).toBe('hero');
    expect(glassReport.rootRole).toBe('hero');

    // Compositions must be distinct (not just color changes!)
    expect(brutalReport.composition).toBe('hero-asymmetric-poster');
    expect(minimalReport.composition).toBe('hero-airy-editorial');
    expect(glassReport.composition).toBe('hero-spatial-pane');

    expect(brutalReport.composition).not.toBe(minimalReport.composition);
    expect(minimalReport.composition).not.toBe(glassReport.composition);
  });

  it('2. should transform Feature Groups into completely different layout paradigms', () => {
    const brutalStrategy = CompositionStrategyResolver.resolve('brutalism', 'card-grid');
    const minimalStrategy = CompositionStrategyResolver.resolve('minimalism', 'card-grid');
    const glassStrategy = CompositionStrategyResolver.resolve('glassmorphism', 'card-grid');

    // Brutalism uses an interlocking modular data-grid with heavy borders
    expect(brutalStrategy.composition).toBe('features-modular-datagrid');

    // Minimalism completely discards card boxes and uses airy typographic columns!
    expect(minimalStrategy.composition).toBe('features-typographic-columns');

    // Glassmorphism uses floating translucent frosted glass deck
    expect(glassStrategy.composition).toBe('features-floating-glassdeck');
  });

  it('3. should differentiate Pricing layout compositions across all 3 styles', () => {
    const brutalReport = DOMAnalyzer.analyzeHtml(PRICING_HTML, 'brutalism', engine);
    const minimalReport = DOMAnalyzer.analyzeHtml(PRICING_HTML, 'minimalism', engine);
    const glassReport = DOMAnalyzer.analyzeHtml(PRICING_HTML, 'glassmorphism', engine);

    expect(brutalReport.rootRole).toBe('pricing-card');
    expect(minimalReport.rootRole).toBe('pricing-card');
    expect(glassReport.rootRole).toBe('pricing-card');

    expect(brutalReport.composition).toBe('pricing-brutal-slabs');
    expect(minimalReport.composition).toBe('pricing-hairline-matrix');
    expect(glassReport.composition).toBe('pricing-luminescent-tiers');
  });

  it('4. should differentiate Navigation bar compositions', () => {
    const brutalReport = DOMAnalyzer.analyzeHtml(NAV_HTML, 'brutalism', engine);
    const minimalReport = DOMAnalyzer.analyzeHtml(NAV_HTML, 'minimalism', engine);
    const glassReport = DOMAnalyzer.analyzeHtml(NAV_HTML, 'glassmorphism', engine);

    expect(brutalReport.composition).toBe('nav-utilitarian-ticker');
    expect(minimalReport.composition).toBe('nav-airy-strip');
    expect(glassReport.composition).toBe('nav-floating-dock');
  });

  it('5. should differentiate Editorial Article compositions', () => {
    const brutalReport = DOMAnalyzer.analyzeHtml(ARTICLE_HTML, 'brutalism', engine);
    const minimalReport = DOMAnalyzer.analyzeHtml(ARTICLE_HTML, 'minimalism', engine);
    const glassReport = DOMAnalyzer.analyzeHtml(ARTICLE_HTML, 'glassmorphism', engine);

    expect(brutalReport.composition).toBe('article-industrial-broadsheet');
    expect(minimalReport.composition).toBe('article-editorial-book');
    expect(glassReport.composition).toBe('article-floating-parchment');
  });

  it('6. should differentiate Form compositions', () => {
    const brutalReport = DOMAnalyzer.analyzeHtml(FORM_HTML, 'brutalism', engine);
    const minimalReport = DOMAnalyzer.analyzeHtml(FORM_HTML, 'minimalism', engine);
    const glassReport = DOMAnalyzer.analyzeHtml(FORM_HTML, 'glassmorphism', engine);

    expect(brutalReport.composition).toBe('form-tactile-terminal');
    expect(minimalReport.composition).toBe('form-understated-fields');
    expect(glassReport.composition).toBe('form-frosted-modal');
  });

  it('7. should preserve hierarchy and scope in deeply nested HTML (depth >= 3)', () => {
    const NESTED_HTML = `<section>
  <header>
    <h1>Product Architecture</h1>
    <p>Build faster with adaptive design systems.</p>
  </header>
  <div>
    <h2>Core Capabilities</h2>
    <div>
      <h3>Velocity</h3>
      <p>Ship resilient UI rapidly.</p>
    </div>
    <div>
      <h3>Flexibility</h3>
      <p>Adapts to arbitrary unstyled HTML.</p>
    </div>
  </div>
  <footer>
    <button>Explore Platform</button>
  </footer>
</section>`;

    const report = DOMAnalyzer.analyzeHtml(NESTED_HTML, 'brutalism', engine);
    expect(report.rootRole).toBeDefined();
    expect(report.detectedBlocks.length).toBeGreaterThan(0);
    expect(report.stampedHtml).toContain('data-role');
    expect(report.stampedHtml).toContain('data-composition');
  });

  it('8. should conservatively handle deliberately messy <div>-only HTML without hallucination', () => {
    const MESSY_HTML = `<div>
  <div>Hello World</div>
  <div>Just some unstructured content.</div>
</div>`;

    const report = DOMAnalyzer.analyzeHtml(MESSY_HTML, 'minimalism', engine);
    // Conservative fallback, no random guessing
    expect(report.rootRole).toBe('generic-container');
    expect(report.confidence).toBeLessThanOrEqual(0.85);
  });

  it('9. should ensure zero custom or style-specific classes are required on input HTML', () => {
    const samples = [HERO_HTML, FEATURES_HTML, PRICING_HTML, NAV_HTML, ARTICLE_HTML, FORM_HTML];

    for (const sample of samples) {
      expect(sample).not.toContain('style-');
      expect(sample).not.toContain('tailwind');
      expect(sample).not.toContain('class=');
    }
  });

  it('10. should sanitize dangerous XSS scripts while preserving structural composition signals', () => {
    const MALICIOUS_HTML = `<div>
  <h1>Safe Title</h1>
  <script>alert("xss")</script>
  <p onclick="stealCookies()">Description text.</p>
  <button>Action</button>
</div>`;

    const report = DOMAnalyzer.analyzeHtml(MALICIOUS_HTML, 'glassmorphism', engine);
    expect(report.sanitizedHtml).not.toContain('<script');
    expect(report.sanitizedHtml).not.toContain('alert');
    expect(report.sanitizedHtml).not.toContain('onclick');
    expect(report.rootRole).toBe('hero');
    expect(report.composition).toBe('hero-spatial-pane');
  });

  it('11. should art-direct the Studio Stress Test without box-nesting across all 6 styles', () => {
    const STUDIO_HTML = `<main>
  <header>
    <nav>
      <a href="#">Studio</a>
      <a href="#">Work</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <section>
    <p>Independent digital studio</p>
    <h1>We build things people remember.</h1>
    <p>Strategy, identity and digital experiences for ambitious companies.</p>
    <button>View our work</button>
  </section>

  <section>
    <h2>Selected work</h2>

    <article>
      <h3>Atlas</h3>
      <p>Brand identity</p>
    </article>

    <article>
      <h3>North</h3>
      <p>Digital product</p>
    </article>

    <article>
      <h3>Forma</h3>
      <p>Editorial system</p>
    </article>
  </section>

  <footer>
    <p>© 2026 Studio</p>
  </footer>
</main>`;

    const minimal = DOMAnalyzer.analyzeHtml(STUDIO_HTML, 'minimalism', engine, { transformStructure: true });
    const brutal = DOMAnalyzer.analyzeHtml(STUDIO_HTML, 'brutalism', engine, { transformStructure: true });
    const swiss = DOMAnalyzer.analyzeHtml(STUDIO_HTML, 'swiss-design', engine, { transformStructure: true });
    const wabi = DOMAnalyzer.analyzeHtml(STUDIO_HTML, 'wabi-sabi', engine, { transformStructure: true });
    const glass = DOMAnalyzer.analyzeHtml(STUDIO_HTML, 'glassmorphism', engine, { transformStructure: true });
    const cyber = DOMAnalyzer.analyzeHtml(STUDIO_HTML, 'cyberpunk', engine, { transformStructure: true });

    // Minimalism: pure borderless portfolio index, zero cards
    expect(minimal.decision?.containerTreatment).toBe('borderless');
    expect(minimal.decision?.itemPresentation).toBe('portfolio-item');
    expect(minimal.stampedHtml).toContain('data-layout-group="items"');

    // Brutalism: monolithic heavy slabs with tactile solid slab items
    expect(brutal.decision?.containerTreatment).toBe('heavy-slab');
    expect(brutal.decision?.itemPresentation).toBe('solid-slab');

    // Swiss Design: asymmetric hairline ledger
    expect(swiss.decision?.containerTreatment).toBe('hairline-ledger');
    expect(swiss.decision?.itemPresentation).toBe('inline-row');

    // Wabi-Sabi: zen manuscript organic list
    expect(wabi.decision?.containerTreatment).toBe('borderless');
    expect(wabi.decision?.itemPresentation).toBe('borderless-editorial');

    // Glassmorphism: frosted floating deck
    expect(glass.decision?.containerTreatment).toBe('frosted-glass');
    expect(glass.decision?.itemPresentation).toBe('frosted-card');

    // Cyberpunk: hud frame telemetry matrix
    expect(cyber.decision?.containerTreatment).toBe('hud-frame');
    expect(cyber.decision?.itemPresentation).toBe('hud-node');
  });

  it('12. should strictly safeguard semantic markup and text content in LayoutTransformer', () => {
    const STUDIO_HTML = `<main>
  <header>
    <nav>
      <a href="#">Studio</a>
      <a href="#">Work</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <section>
    <p>Independent digital studio</p>
    <h1>We build things people remember.</h1>
    <p>Strategy, identity and digital experiences for ambitious companies.</p>
    <button>View our work</button>
  </section>

  <section>
    <h2>Selected work</h2>

    <article>
      <h3>Atlas</h3>
      <p>Brand identity</p>
    </article>

    <article>
      <h3>North</h3>
      <p>Digital product</p>
    </article>

    <article>
      <h3>Forma</h3>
      <p>Editorial system</p>
    </article>
  </section>

  <footer>
    <p>© 2026 Studio</p>
  </footer>
</main>`;

    const report = DOMAnalyzer.analyzeHtml(STUDIO_HTML, 'minimalism', engine);

    // Verify all semantic tags are strictly preserved
    expect(report.stampedHtml).toContain('<main');
    expect(report.stampedHtml).toContain('<header');
    expect(report.stampedHtml).toContain('<nav');
    expect(report.stampedHtml).toContain('<section');
    expect(report.stampedHtml).toContain('<article');
    expect(report.stampedHtml).toContain('<footer');
    expect(report.stampedHtml).toContain('<button');

    // Verify all text content remains intact
    expect(report.stampedHtml).toContain('We build things people remember.');
    expect(report.stampedHtml).toContain('Selected work');
    expect(report.stampedHtml).toContain('Atlas');
    expect(report.stampedHtml).toContain('North');
    expect(report.stampedHtml).toContain('Forma');
  });
});
