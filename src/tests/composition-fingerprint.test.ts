import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { DOMAnalyzer } from '../core/adaptive/dom-analyzer';
import { AdaptiveCSSGenerator } from '../core/adaptive/adaptive-css';
import { CompositionFingerprint } from '../core/adaptive/types';

describe('Composition Fingerprint Engine — Structural Divergence Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine();
  });

  const INPUT_HERO_HTML = `<section>
  <header>
    <h1>Next-Gen Cloud Orchestration</h1>
    <p>Autonomous workload scheduling with zero human intervention.</p>
    <button>Deploy Cluster</button>
  </header>
</section>`;

  const INPUT_FEATURES_HTML = `<section>
  <h2>System Architecture</h2>
  <div>
    <div>
      <h3>Edge Telemetry</h3>
      <p>Continuous millisecond telemetry ingestion from distributed clusters.</p>
      <button>Inspect Stream</button>
    </div>
    <div>
      <h3>Fault Tolerance</h3>
      <p>Self-healing replication topologies across multi-region zones.</p>
      <button>View Topology</button>
    </div>
    <div>
      <h3>Predictive Autoscaling</h3>
      <p>Dynamic pod capacity adjustment using neural heuristics.</p>
      <button>Configure Policy</button>
    </div>
  </div>
</section>`;

  /**
   * Computes the structural divergence between two fingerprints.
   * Compares 11 purely structural dimensions (excluding styleId).
   * Returns the count and list of divergent dimensions.
   */
  function computeStructuralDivergence(fp1: CompositionFingerprint, fp2: CompositionFingerprint): {
    divergentCount: number;
    totalDimensions: number;
    divergentDimensions: string[];
    divergenceRatio: number;
  } {
    const dimensions: (keyof Omit<CompositionFingerprint, 'styleId'>)[] = [
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
      divergenceRatio: divergentDimensions.length / dimensions.length,
    };
  }

  it('1. should prove genuine structural divergence across the 4 primary design languages for identical Hero HTML', () => {
    const primaryStyles = ['minimalism', 'brutalism', 'glassmorphism', 'cyberpunk'] as const;
    const reports = primaryStyles.map((style) => ({
      style,
      report: DOMAnalyzer.analyzeHtml(INPUT_HERO_HTML, style, engine),
    }));

    // Verify all 4 identify the role as hero
    reports.forEach(({ report }) => {
      expect(report.rootRole).toBe('hero');
    });

    // Pairwise comparison of all 6 combinations of the 4 styles
    const pairs: [string, string][] = [];
    for (let i = 0; i < primaryStyles.length; i++) {
      for (let j = i + 1; j < primaryStyles.length; j++) {
        pairs.push([primaryStyles[i], primaryStyles[j]]);
      }
    }

    expect(pairs.length).toBe(6);

    const fingerprints = Object.fromEntries(reports.map((r) => [r.style, r.report.fingerprint]));

    // Every pair MUST have significant structural divergence (>= 5 out of 11 structural dimensions)
    pairs.forEach(([styleA, styleB]) => {
      const fpA = fingerprints[styleA];
      const fpB = fingerprints[styleB];
      const divergence = computeStructuralDivergence(fpA, fpB);

      expect(
        divergence.divergentCount,
        `Styles "${styleA}" and "${styleB}" failed structural divergence check! Only ${divergence.divergentCount}/${divergence.totalDimensions} dimensions differed: [${divergence.divergentDimensions.join(', ')}]. This indicates a skin-only implementation!`
      ).toBeGreaterThanOrEqual(5);
    });
  });

  it('2. should prove genuine structural divergence across Feature Sections for identical HTML', () => {
    const primaryStyles = ['minimalism', 'brutalism', 'glassmorphism', 'cyberpunk'] as const;
    const reports = primaryStyles.map((style) => ({
      style,
      report: DOMAnalyzer.analyzeHtml(INPUT_FEATURES_HTML, style, engine),
    }));

    reports.forEach(({ report }) => {
      expect(report.rootRole).toBe('feature-section');
    });

    const fingerprints = Object.fromEntries(reports.map((r) => [r.style, r.report.fingerprint]));

    // Check specific layout paradigms for each design language
    // Minimalism: borderless editorial split, no card boxes
    expect(fingerprints['minimalism'].majorLayoutMode).toBe('editorial-split');
    expect(fingerprints['minimalism'].containerTreatment).toBe('borderless');
    expect(fingerprints['minimalism'].itemPresentationMode).toBe('borderless-editorial');
    expect(fingerprints['minimalism'].hasStructuralBorders).toBe(false);

    // Brutalism: monolithic heavy slabs, tactile solid slab items
    expect(fingerprints['brutalism'].majorLayoutMode).toBe('monolithic-slabs');
    expect(fingerprints['brutalism'].containerTreatment).toBe('heavy-slab');
    expect(fingerprints['brutalism'].itemPresentationMode).toBe('solid-slab');
    expect(fingerprints['brutalism'].hasStructuralBorders).toBe(true);

    // Glassmorphism: floating deck, translucent frosted cards, centered
    expect(fingerprints['glassmorphism'].majorLayoutMode).toBe('floating-deck');
    expect(fingerprints['glassmorphism'].containerTreatment).toBe('frosted-glass');
    expect(fingerprints['glassmorphism'].itemPresentationMode).toBe('frosted-card');
    expect(fingerprints['glassmorphism'].alignmentPhilosophy).toBe('center');

    // Cyberpunk: hud-matrix technical telemetry grid with framing
    expect(fingerprints['cyberpunk'].majorLayoutMode).toBe('hud-matrix');
    expect(fingerprints['cyberpunk'].containerTreatment).toBe('hud-frame');
    expect(fingerprints['cyberpunk'].itemPresentationMode).toBe('hud-node');
    expect(fingerprints['cyberpunk'].alignmentPhilosophy).toBe('technical-grid');
    expect(fingerprints['cyberpunk'].hasDecorativeFraming).toBe(true);
  });

  it('3. should FAIL structural divergence test if an implementation is skin-only', () => {
    // Simulate a pseudo "skin-only" system where two styles share identical layout decisions
    // but only differ in superficial colors / skin:
    const mockSkinOnlyStyle1: CompositionFingerprint = {
      styleId: 'mock-skin-a',
      contentContext: 'landing-page',
      majorLayoutMode: 'standard-flow',
      sectionLayoutModes: ['standard-flow'],
      columnDistribution: 'repeat(3, 1fr)',
      containerTreatment: 'standard',
      groupingParadigm: 'standard-grid',
      itemPresentationMode: 'standard-card',
      alignmentPhilosophy: 'left',
      spacingDensity: 'normal',
      maxWidth: '1200px',
      hasStructuralBorders: true,
      hasAsymmetricOffsets: false,
      hasDecorativeFraming: false,
      readingMeasure: 'standard',
      typographyScale: 'moderate',
      containerBoxCount: 2,
    };

    const mockSkinOnlyStyle2: CompositionFingerprint = {
      ...mockSkinOnlyStyle1,
      styleId: 'mock-skin-b', // Only styleId differs, layout is 100% identical
    };

    const divergence = computeStructuralDivergence(mockSkinOnlyStyle1, mockSkinOnlyStyle2);
    // The divergence count MUST be 0
    expect(divergence.divergentCount).toBe(0);

    // And our strict engine threshold (>= 5 divergent dimensions) properly REJECTS it
    expect(divergence.divergentCount >= 5).toBe(false);
  });

  it('4. should stamp structural attributes onto DOM nodes according to layout decisions', () => {
    const brutalReport = DOMAnalyzer.analyzeHtml(INPUT_FEATURES_HTML, 'brutalism', engine);
    const minimalReport = DOMAnalyzer.analyzeHtml(INPUT_FEATURES_HTML, 'minimalism', engine);
    const cyberReport = DOMAnalyzer.analyzeHtml(INPUT_FEATURES_HTML, 'cyberpunk', engine);

    // Brutalism stamps monolithic slab attributes
    expect(brutalReport.stampedHtml).toContain('data-layout="monolithic-slabs"');
    expect(brutalReport.stampedHtml).toContain('data-container="heavy-slab"');
    expect(brutalReport.stampedHtml).toContain('data-grouping="tactile-slabs"');
    expect(brutalReport.stampedHtml).toContain('data-item-presentation="solid-slab"');

    // Minimalism stamps editorial split attributes
    expect(minimalReport.stampedHtml).toContain('data-layout="editorial-split"');
    expect(minimalReport.stampedHtml).toContain('data-container="borderless"');
    expect(minimalReport.stampedHtml).toContain('data-grouping="editorial-columns"');
    expect(minimalReport.stampedHtml).toContain('data-item-presentation="borderless-editorial"');

    // Cyberpunk stamps hud matrix attributes
    expect(cyberReport.stampedHtml).toContain('data-layout="hud-matrix"');
    expect(cyberReport.stampedHtml).toContain('data-container="hud-frame"');
    expect(cyberReport.stampedHtml).toContain('data-grouping="telemetry-nodes"');
    expect(cyberReport.stampedHtml).toContain('data-item-presentation="hud-node"');
  });

  it('5. should provide universal CSS layout rules supporting all layout modes', () => {
    const css = AdaptiveCSSGenerator.getAdaptiveStyles();

    // Verify layout mode selectors exist in universal CSS
    expect(css).toContain('[data-layout="editorial-split"]');
    expect(css).toContain('[data-layout="monolithic-slabs"]');
    expect(css).toContain('[data-layout="floating-deck"]');
    expect(css).toContain('[data-layout="hud-matrix"]');

    // Verify container treatment selectors exist
    expect(css).toContain('[data-container="borderless"]');
    expect(css).toContain('[data-container="heavy-slab"]');
    expect(css).toContain('[data-container="frosted-glass"]');
    expect(css).toContain('[data-container="hud-frame"]');

    // Verify item presentation selectors exist
    expect(css).toContain('[data-item-presentation="borderless-editorial"]');
    expect(css).toContain('[data-item-presentation="solid-slab"]');
    expect(css).toContain('[data-item-presentation="frosted-card"]');
    expect(css).toContain('[data-item-presentation="hud-node"]');
  });

  const STUDIO_STRESS_HTML = `<main>
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
    <p>
      Strategy, identity and digital experiences for ambitious companies.
    </p>
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

  it('6. should prove pairwise structural divergence across all 6 active design languages for the Studio Stress Test', () => {
    const allSixStyles = ['minimalism', 'brutalism', 'glassmorphism', 'cyberpunk', 'wabi-sabi', 'swiss-design'] as const;
    const reports = allSixStyles.map((style) => ({
      style,
      report: DOMAnalyzer.analyzeHtml(STUDIO_STRESS_HTML, style, engine),
    }));

    const fingerprints = Object.fromEntries(reports.map((r) => [r.style, r.report.fingerprint!]));

    // Check individual distinct structural identities
    expect(fingerprints['minimalism'].majorLayoutMode).toBe('portfolio-index');
    expect(fingerprints['minimalism'].containerBoxCount).toBe(0);

    expect(fingerprints['brutalism'].majorLayoutMode).toBe('asymmetric-catalog');
    expect(fingerprints['brutalism'].containerBoxCount).toBe(3);

    expect(fingerprints['glassmorphism'].majorLayoutMode).toBe('translucent-cluster');
    expect(fingerprints['glassmorphism'].containerBoxCount).toBe(2);

    expect(fingerprints['cyberpunk'].majorLayoutMode).toBe('terminal-dossier');
    expect(fingerprints['cyberpunk'].containerBoxCount).toBe(2);

    expect(fingerprints['wabi-sabi'].majorLayoutMode).toBe('zen-anthology');
    expect(fingerprints['wabi-sabi'].containerBoxCount).toBe(0);

    expect(fingerprints['swiss-design'].majorLayoutMode).toBe('swiss-ledger');
    expect(fingerprints['swiss-design'].containerBoxCount).toBe(0);

    // Build all 15 pairwise combinations of 6 styles
    const pairs: [string, string][] = [];
    for (let i = 0; i < allSixStyles.length; i++) {
      for (let j = i + 1; j < allSixStyles.length; j++) {
        pairs.push([allSixStyles[i], allSixStyles[j]]);
      }
    }

    expect(pairs.length).toBe(15);

    // Every single pair MUST have >= 5 divergent structural dimensions out of 12
    const divergenceResults: { pair: string; count: number; dims: string[] }[] = [];
    pairs.forEach(([styleA, styleB]) => {
      const fpA = fingerprints[styleA];
      const fpB = fingerprints[styleB];
      const divergence = computeStructuralDivergence(fpA, fpB);

      divergenceResults.push({
        pair: `${styleA} vs ${styleB}`,
        count: divergence.divergentCount,
        dims: divergence.divergentDimensions,
      });

      expect(
        divergence.divergentCount,
        `Styles "${styleA}" and "${styleB}" failed structural divergence! Only ${divergence.divergentCount}/${divergence.totalDimensions} dimensions differed: [${divergence.divergentDimensions.join(', ')}]`
      ).toBeGreaterThanOrEqual(5);
    });
  });

  it('7. should guarantee complete content safety and structural transformation on the Studio Stress Test', () => {
    const allSixStyles = ['minimalism', 'brutalism', 'glassmorphism', 'cyberpunk', 'wabi-sabi', 'swiss-design'] as const;

    allSixStyles.forEach((style) => {
      const report = DOMAnalyzer.analyzeHtml(STUDIO_STRESS_HTML, style, engine, { transformStructure: true });
      const stamped = report.stampedHtml;

      // 1. Content preservation: Every text node must be completely intact
      expect(stamped).toContain('Studio');
      expect(stamped).toContain('Work');
      expect(stamped).toContain('About');
      expect(stamped).toContain('Contact');
      expect(stamped).toContain('Independent digital studio');
      expect(stamped).toContain('We build things people remember.');
      expect(stamped).toContain('Strategy, identity and digital experiences for ambitious companies.');
      expect(stamped).toContain('View our work');
      expect(stamped).toContain('Selected work');
      expect(stamped).toContain('Atlas');
      expect(stamped).toContain('Brand identity');
      expect(stamped).toContain('North');
      expect(stamped).toContain('Digital product');
      expect(stamped).toContain('Forma');
      expect(stamped).toContain('Editorial system');
      expect(stamped).toContain('© 2026 Studio');

      // 2. Button and link integrity
      expect(stamped).toContain('<button');
      expect(stamped).toContain('</button>');
      expect(stamped).toContain('<nav');
      expect(stamped).toContain('</nav>');

      // 3. Layout transformation: Repeated articles wrapped in data-layout-group="items"
      expect(stamped).toContain('data-layout-group="items"');
      expect(stamped).toContain('data-layout-slot="heading"');

      // 4. Composition plan and fingerprint attached
      expect(report.plan).toBeDefined();
      expect(report.plan?.sectionPlans.length).toBeGreaterThan(0);
      expect(report.fingerprint).toBeDefined();
    });
  });

  it('8. should enforce universal responsive overflow safety and minimum touch targets', () => {
    const css = AdaptiveCSSGenerator.getAdaptiveStyles();

    // Universal overflow safety
    expect(css).toContain('overflow-x: hidden');
    expect(css).toContain('min-width: 0');
    expect(css).toContain('overflow-wrap: break-word');

    // Responsive media queries for grid layouts
    expect(css).toContain('@media (max-width: 768px)');

    // Minimum button touch target
    expect(css).toContain('min-height: 38px');
    expect(css).toContain('touch-action: manipulation');
  });
});
