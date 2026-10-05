import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { DOMAnalyzer } from '../core/adaptive/dom-analyzer';
import { ContentContextAnalyzer } from '../core/adaptive/context-analyzer';
import { CompositionQualityChecker } from '../core/adaptive/composition-quality';
import { CompositionFingerprint } from '../core/adaptive/types';

describe('Context-Aware Composition Engine — Cross-Product Matrix & Art Direction Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine();
  });

  // ==========================================================================
  // THE 6 CANONICAL CONTENT ARCHETYPE FIXTURES
  // ==========================================================================

  const LANDING_HTML = `<main>
  <header>
    <nav>
      <a href="#">Platform</a>
      <a href="#">Solutions</a>
      <a href="#">Documentation</a>
      <a href="#">Sign In</a>
    </nav>
  </header>

  <section>
    <h1>Autonomous Cloud Infrastructure</h1>
    <p>Declarative workload scheduling with neural predictive failover and zero operations overhead.</p>
    <button>Start Free Trial</button>
  </section>

  <section>
    <h2>Platform Capabilities</h2>
    <div>
      <div>
        <h3>Distributed Ingestion</h3>
        <p>Sub-millisecond telemetry stream ingestion across multi-region edge clusters.</p>
      </div>
      <div>
        <h3>Automated Recovery</h3>
        <p>Continuous heartbeat evaluation with self-healing replica topologies.</p>
      </div>
      <div>
        <h3>Neural Autoscaling</h3>
        <p>Predictive scaling policies derived from real-time queue pressure.</p>
      </div>
    </div>
  </section>

  <footer>
    <p>© 2026 Cloud Orchestration Inc.</p>
  </footer>
</main>`;

  const PRICING_HTML = `<section>
  <header>
    <h2>Transparent subscription plans</h2>
    <p>Predictable pricing designed to scale seamlessly with your engineering team.</p>
  </header>

  <div>
    <div>
      <h3>Starter Tier</h3>
      <p>Essential compute capacity for solo developers and early prototypes.</p>
      <strong>$19 / month</strong>
      <button>Select Starter</button>
    </div>

    <div>
      <h3>Professional Tier</h3>
      <p>Multi-region deployment topology with real-time diagnostic stream.</p>
      <strong>$79 / month</strong>
      <button>Select Pro</button>
    </div>

    <div>
      <h3>Enterprise Tier</h3>
      <p>Dedicated bare-metal instances with custom SLA and 24/7 incident response.</p>
      <strong>$299 / month</strong>
      <button>Contact Enterprise</button>
    </div>
  </div>
</section>`;

  const ARTICLE_HTML = `<article>
  <header>
    <p>Published in Architectural Design Systems • 7 min read</p>
    <h1>The Evolution of Adaptive Interface Grammars</h1>
    <p>Moving beyond predefined component skins to genuine art-directed composition.</p>
  </header>

  <p>For more than a decade, frontend design engineering has been trapped in a cosmetic paradigm. Developers create a single rigid spatial template, and then apply superficial CSS skins—swapping border colors, shadows, and fonts—without ever asking what the content actually demands.</p>

  <blockquote>
    "True design intelligence begins when spatial organization emerges from semantic structure, hierarchy, and context rather than hardcoded page templates."
  </blockquote>

  <p>An intelligent design engine behaves like an experienced Art Director. It first analyzes the structure: Is this a high-density diagnostic dashboard, a long-form reading article, or a tiered comparative pricing ledger? Only once content context is understood does it synthesize the expressive vocabulary of the design language.</p>
</article>`;

  const PORTFOLIO_HTML = `<main>
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
    <p>Strategy, identity and digital experiences for ambitious companies worldwide.</p>
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

  const FORM_HTML = `<form>
  <h2>Create developer account</h2>
  <p>Deploy your first adaptive design project in under two minutes.</p>

  <div>
    <label>Full Name</label>
    <input type="text" placeholder="Ada Lovelace">
  </div>

  <div>
    <label>Work Email</label>
    <input type="email" placeholder="ada@analytical-engine.io">
  </div>

  <div>
    <label>Team Role</label>
    <select>
      <option>Staff Engineer</option>
      <option>Design Technologist</option>
      <option>System Architect</option>
    </select>
  </div>

  <button type="submit">Complete Registration</button>
</form>`;

  const DASHBOARD_HTML = `<section>
  <header>
    <h2>Cluster Telemetry Diagnostics</h2>
    <p>Real-time node status and network throughput across active edge regions.</p>
  </header>

  <div>
    <div>
      <h3>Throughput Rate</h3>
      <strong>48.2k req/s</strong>
      <p>Operating within optimal capacity thresholds.</p>
    </div>

    <div>
      <h3>Global Latency</h3>
      <strong>12 ms</strong>
      <p>P99 response time across all distributed edge zones.</p>
    </div>

    <div>
      <h3>CPU Saturation</h3>
      <strong>34%</strong>
      <p>Healthy compute headroom across the fleet.</p>
    </div>

    <div>
      <h3>Active Nodes</h3>
      <strong>1,024</strong>
      <p>Zero degraded nodes in current deployment ring.</p>
    </div>
  </div>
</section>`;

  /**
   * Helper to compute structural divergence between two fingerprints across 14 dimensions.
   */
  function computeDivergence(fp1: CompositionFingerprint, fp2: CompositionFingerprint): {
    divergentCount: number;
    totalDimensions: number;
    divergentDimensions: string[];
  } {
    const dimensions: (keyof Omit<CompositionFingerprint, 'styleId'>)[] = [
      'contentContext',
      'majorLayoutMode',
      'columnDistribution',
      'containerTreatment',
      'groupingParadigm',
      'itemPresentationMode',
      'alignmentPhilosophy',
      'spacingDensity',
      'maxWidth',
      'hasStructuralBorders',
      'hasAsymmetricOffsets',
      'hasDecorativeFraming',
      'readingMeasure',
      'typographyScale',
      'containerBoxCount',
    ];

    const divergentDimensions: string[] = [];
    for (const dim of dimensions) {
      if (fp1[dim] !== fp2[dim]) {
        divergentDimensions.push(dim);
      }
    }

    return {
      divergentCount: divergentDimensions.length,
      totalDimensions: dimensions.length,
      divergentDimensions,
    };
  }

  // ==========================================================================
  // SECTION 1: CONTENT CONTEXT MODEL DETERMINISTIC ACCURACY
  // ==========================================================================
  it('1. should deterministically classify all 6 canonical content archetypes with high confidence', () => {
    const landingCtx = ContentContextAnalyzer.analyze(LANDING_HTML);
    expect(landingCtx.primaryContext).toBe('landing-page');
    expect(landingCtx.confidence).toBeGreaterThanOrEqual(0.85);

    const pricingCtx = ContentContextAnalyzer.analyze(PRICING_HTML);
    expect(pricingCtx.primaryContext).toBe('pricing');
    expect(pricingCtx.confidence).toBeGreaterThanOrEqual(0.9);

    const articleCtx = ContentContextAnalyzer.analyze(ARTICLE_HTML);
    expect(articleCtx.primaryContext).toBe('article');
    expect(articleCtx.confidence).toBeGreaterThanOrEqual(0.88);

    const portfolioCtx = ContentContextAnalyzer.analyze(PORTFOLIO_HTML);
    expect(portfolioCtx.primaryContext).toBe('portfolio');
    expect(portfolioCtx.confidence).toBeGreaterThanOrEqual(0.88);

    const formCtx = ContentContextAnalyzer.analyze(FORM_HTML);
    expect(formCtx.primaryContext).toBe('form');
    expect(formCtx.confidence).toBeGreaterThanOrEqual(0.9);

    const dashboardCtx = ContentContextAnalyzer.analyze(DASHBOARD_HTML);
    expect(dashboardCtx.primaryContext).toBe('dashboard');
    expect(dashboardCtx.confidence).toBeGreaterThanOrEqual(0.88);
  });

  // ==========================================================================
  // SECTION 2: TEST A — SAME STYLE / RADICALLY DIFFERENT CONTENT
  // The most critical test: Minimalism must NOT use editorial-split for everything!
  // ==========================================================================
  it('2. [Test A] Minimalism MUST adapt composition across all 6 content archetypes (NOT use editorial-split everywhere)', () => {
    const archetypes = [
      { name: 'Landing', html: LANDING_HTML },
      { name: 'Pricing', html: PRICING_HTML },
      { name: 'Article', html: ARTICLE_HTML },
      { name: 'Portfolio', html: PORTFOLIO_HTML },
      { name: 'Form', html: FORM_HTML },
      { name: 'Dashboard', html: DASHBOARD_HTML },
    ];

    const reports = archetypes.map((a) => ({
      name: a.name,
      report: DOMAnalyzer.analyzeHtml(a.html, 'minimalism', engine),
    }));

    const fps = Object.fromEntries(reports.map((r) => [r.name, r.report.fingerprint]));

    // 1. Specific archetype requirements for Minimalism:
    // Article MUST use editorial-reader with narrow measure and 0 boxes
    expect(fps['Article'].majorLayoutMode).toBe('editorial-reader');
    expect(fps['Article'].readingMeasure).toBe('editorial-narrow');
    expect(fps['Article'].containerBoxCount).toBe(0);

    // Pricing MUST use pricing-columns
    expect(fps['Pricing'].majorLayoutMode).toBe('pricing-columns');
    expect(fps['Pricing'].itemPresentationMode).toBe('pricing-tier');

    // Portfolio MUST use portfolio-index and project-ledger
    expect(fps['Portfolio'].majorLayoutMode).toBe('portfolio-index');
    expect(fps['Portfolio'].groupingParadigm).toBe('project-ledger');
    expect(fps['Portfolio'].itemPresentationMode).toBe('portfolio-item');

    // Dashboard MUST use dashboard-telemetry
    expect(fps['Dashboard'].majorLayoutMode).toBe('dashboard-telemetry');
    expect(fps['Dashboard'].itemPresentationMode).toBe('metric-node');

    // Form MUST use focused-form
    expect(fps['Form'].majorLayoutMode).toBe('focused-form');
    expect(fps['Form'].maxWidth).toBe('540px');

    // 2. Pairwise divergence across all 15 archetype pairs under Minimalism:
    // Every single pair MUST have >= 4 divergent dimensions out of 15
    for (let i = 0; i < archetypes.length; i++) {
      for (let j = i + 1; j < archetypes.length; j++) {
        const nameA = archetypes[i].name;
        const nameB = archetypes[j].name;
        const div = computeDivergence(fps[nameA], fps[nameB]);

        expect(
          div.divergentCount,
          `Minimalism failed content adaptation between "${nameA}" and "${nameB}"! Only ${div.divergentCount} dimensions differed: [${div.divergentDimensions.join(', ')}]`
        ).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it('3. [Test A] Brutalism MUST adapt composition across all 6 content archetypes', () => {
    const archetypes = [
      { name: 'Landing', html: LANDING_HTML },
      { name: 'Pricing', html: PRICING_HTML },
      { name: 'Article', html: ARTICLE_HTML },
      { name: 'Portfolio', html: PORTFOLIO_HTML },
      { name: 'Form', html: FORM_HTML },
      { name: 'Dashboard', html: DASHBOARD_HTML },
    ];

    const reports = archetypes.map((a) => ({
      name: a.name,
      report: DOMAnalyzer.analyzeHtml(a.html, 'brutalism', engine),
    }));

    const fps = Object.fromEntries(reports.map((r) => [r.name, r.report.fingerprint]));

    // Check specific adaptations
    expect(fps['Article'].majorLayoutMode).toBe('editorial-reader');
    expect(fps['Portfolio'].majorLayoutMode).toBe('asymmetric-catalog');
    expect(fps['Pricing'].majorLayoutMode).toBe('pricing-columns');
    expect(fps['Dashboard'].majorLayoutMode).toBe('dashboard-telemetry');
    expect(fps['Form'].majorLayoutMode).toBe('focused-form');

    // Pairwise divergence across all 15 archetype pairs for Brutalism (>= 4 dimensions)
    for (let i = 0; i < archetypes.length; i++) {
      for (let j = i + 1; j < archetypes.length; j++) {
        const nameA = archetypes[i].name;
        const nameB = archetypes[j].name;
        const div = computeDivergence(fps[nameA], fps[nameB]);

        expect(
          div.divergentCount,
          `Brutalism failed content adaptation between "${nameA}" and "${nameB}"! Only ${div.divergentCount} dimensions differed: [${div.divergentDimensions.join(', ')}]`
        ).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it('4. [Test A] Glassmorphism MUST adapt composition across all 6 content archetypes', () => {
    const archetypes = [
      { name: 'Landing', html: LANDING_HTML },
      { name: 'Pricing', html: PRICING_HTML },
      { name: 'Article', html: ARTICLE_HTML },
      { name: 'Portfolio', html: PORTFOLIO_HTML },
      { name: 'Form', html: FORM_HTML },
      { name: 'Dashboard', html: DASHBOARD_HTML },
    ];

    const reports = archetypes.map((a) => ({
      name: a.name,
      report: DOMAnalyzer.analyzeHtml(a.html, 'glassmorphism', engine),
    }));

    const fps = Object.fromEntries(reports.map((r) => [r.name, r.report.fingerprint]));

    expect(fps['Article'].majorLayoutMode).toBe('editorial-reader');
    expect(fps['Pricing'].majorLayoutMode).toBe('pricing-columns');
    expect(fps['Dashboard'].majorLayoutMode).toBe('dashboard-telemetry');
    expect(fps['Form'].majorLayoutMode).toBe('focused-form');

    for (let i = 0; i < archetypes.length; i++) {
      for (let j = i + 1; j < archetypes.length; j++) {
        const nameA = archetypes[i].name;
        const nameB = archetypes[j].name;
        const div = computeDivergence(fps[nameA], fps[nameB]);

        expect(
          div.divergentCount,
          `Glassmorphism failed content adaptation between "${nameA}" and "${nameB}"! Only ${div.divergentCount} dimensions differed: [${div.divergentDimensions.join(', ')}]`
        ).toBeGreaterThanOrEqual(4);
      }
    }
  });

  // ==========================================================================
  // SECTION 3: TEST B — SAME CONTENT / DIFFERENT DESIGN LANGUAGES
  // Across all 6 styles, the same content must produce distinct visual organization
  // ==========================================================================
  it('5. [Test B] Portfolio content MUST produce pairwise structural divergence across all 6 design languages', () => {
    const styles = ['minimalism', 'brutalism', 'glassmorphism', 'cyberpunk', 'wabi-sabi', 'swiss-design'] as const;
    const reports = styles.map((st) => ({
      style: st,
      report: DOMAnalyzer.analyzeHtml(PORTFOLIO_HTML, st, engine),
    }));

    const fps = Object.fromEntries(reports.map((r) => [r.style, r.report.fingerprint]));

    // All 15 style pairs MUST have >= 5 divergent dimensions
    for (let i = 0; i < styles.length; i++) {
      for (let j = i + 1; j < styles.length; j++) {
        const styleA = styles[i];
        const styleB = styles[j];
        const div = computeDivergence(fps[styleA], fps[styleB]);

        expect(
          div.divergentCount,
          `Styles "${styleA}" vs "${styleB}" failed divergence on Portfolio! Only ${div.divergentCount} dimensions differed: [${div.divergentDimensions.join(', ')}]`
        ).toBeGreaterThanOrEqual(5);
      }
    }
  });

  it('6. [Test B] Pricing content MUST produce pairwise structural divergence across all 6 design languages', () => {
    const styles = ['minimalism', 'brutalism', 'glassmorphism', 'cyberpunk', 'wabi-sabi', 'swiss-design'] as const;
    const reports = styles.map((st) => ({
      style: st,
      report: DOMAnalyzer.analyzeHtml(PRICING_HTML, st, engine),
    }));

    const fps = Object.fromEntries(reports.map((r) => [r.style, r.report.fingerprint]));

    for (let i = 0; i < styles.length; i++) {
      for (let j = i + 1; j < styles.length; j++) {
        const styleA = styles[i];
        const styleB = styles[j];
        const div = computeDivergence(fps[styleA], fps[styleB]);

        expect(
          div.divergentCount,
          `Styles "${styleA}" vs "${styleB}" failed divergence on Pricing! Only ${div.divergentCount} dimensions differed: [${div.divergentDimensions.join(', ')}]`
        ).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it('7. [Test B] Dashboard content MUST produce pairwise structural divergence across all 6 design languages', () => {
    const styles = ['minimalism', 'brutalism', 'glassmorphism', 'cyberpunk', 'wabi-sabi', 'swiss-design'] as const;
    const reports = styles.map((st) => ({
      style: st,
      report: DOMAnalyzer.analyzeHtml(DASHBOARD_HTML, st, engine),
    }));

    const fps = Object.fromEntries(reports.map((r) => [r.style, r.report.fingerprint]));

    for (let i = 0; i < styles.length; i++) {
      for (let j = i + 1; j < styles.length; j++) {
        const styleA = styles[i];
        const styleB = styles[j];
        const div = computeDivergence(fps[styleA], fps[styleB]);

        expect(
          div.divergentCount,
          `Styles "${styleA}" vs "${styleB}" failed divergence on Dashboard! Only ${div.divergentCount} dimensions differed: [${div.divergentDimensions.join(', ')}]`
        ).toBeGreaterThanOrEqual(5);
      }
    }
  });

  // ==========================================================================
  // SECTION 4: 6x6 FULL CROSS-PRODUCT MATRIX EXECUTION (36 COMBINATIONS)
  // ==========================================================================
  it('8. should successfully execute the full 6x6 cross-product matrix (36 runs) with 100% content preservation', () => {
    const styles = ['minimalism', 'brutalism', 'glassmorphism', 'cyberpunk', 'wabi-sabi', 'swiss-design'] as const;
    const archetypes = [
      { name: 'Landing', html: LANDING_HTML },
      { name: 'Pricing', html: PRICING_HTML },
      { name: 'Article', html: ARTICLE_HTML },
      { name: 'Portfolio', html: PORTFOLIO_HTML },
      { name: 'Form', html: FORM_HTML },
      { name: 'Dashboard', html: DASHBOARD_HTML },
    ];

    let totalRuns = 0;
    for (const style of styles) {
      for (const archetype of archetypes) {
        totalRuns++;
        const report = DOMAnalyzer.analyzeHtml(archetype.html, style, engine);

        // Quality & safety checks
        expect(report.stampedHtml).toBeDefined();
        expect(report.fingerprint).toBeDefined();
        expect(report.plan).toBeDefined();

        // 100% content retention verification
        const originalWords = archetype.html
          .replace(/<[^>]+>/g, ' ')
          .trim()
          .split(/\s+/)
          .filter((w) => w.length > 3);

        const stampedLower = report.stampedHtml.toLowerCase();
        // At least 95% of key text words must exist in stamped output
        let foundWords = 0;
        for (const w of originalWords) {
          if (stampedLower.includes(w.toLowerCase())) {
            foundWords++;
          }
        }
        const wordRatio = foundWords / originalWords.length;
        expect(
          wordRatio,
          `Content loss detected in style "${style}" on archetype "${archetype.name}"! Ratio: ${wordRatio}`
        ).toBeGreaterThanOrEqual(0.95);

        // Quality checker plan verification
        const qualityReport = CompositionQualityChecker.verifyPlan(
          report.plan,
          report.contentContext || {
            primaryContext: 'landing-page',
            confidence: 0.85,
            rationale: 'Test',
            signals: {} as any,
          }
        );
        expect(qualityReport.passed).toBe(true);
      }
    }

    expect(totalRuns).toBe(36);
  });

  // ==========================================================================
  // SECTION 5: COMPOSITION QUALITY & SAFETY GUARDS
  // ==========================================================================
  it('9. should enforce reading measure constraints in long-form editorial contexts', () => {
    const report = DOMAnalyzer.analyzeHtml(ARTICLE_HTML, 'minimalism', engine);
    expect(report.fingerprint.readingMeasure).toBe('editorial-narrow');

    const readingCss = CompositionQualityChecker.getReadingMeasureCss(
      report.fingerprint.readingMeasure,
      'article'
    );
    expect(readingCss).toBe('65ch');
  });

  it('10. should prevent box count inflation on empty content', () => {
    const EMPTY_HTML = `<div><h2>Quick Note</h2></div>`;
    const report = DOMAnalyzer.analyzeHtml(EMPTY_HTML, 'brutalism', engine);

    // Should not assign 4 heavy container boxes to a single heading!
    expect(report.fingerprint.containerBoxCount).toBeLessThanOrEqual(2);
  });
});
