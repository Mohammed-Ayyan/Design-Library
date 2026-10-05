import React, { useState } from 'react';
import { StructureAnalyzer } from '../core/adaptive/structure-analyzer';
import { RoleResolver } from '../core/adaptive/role-resolver';
import { RecipeEngine } from '../core/adaptive/recipe-engine';
import { useStyleEngine } from '../react/context/StyleEngineContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface TestMatrixShowcaseProps {
  styleId: string;
}

export type MatrixTestId = 'test-a' | 'test-b' | 'test-c' | 'test-d' | 'test-e' | 'test-f' | 'test-g';

export const TestMatrixShowcase: React.FC<TestMatrixShowcaseProps> = ({ styleId }) => {
  const { engine } = useStyleEngine();
  const [selectedTest, setSelectedTest] = useState<MatrixTestId>('test-a');

  const tests: { id: MatrixTestId; label: string; name: string; description: string }[] = [
    { id: 'test-a', label: 'TEST A', name: 'Simple Hero', description: 'Raw <div> with <h1>, <p>, and <button> without custom classes' },
    { id: 'test-b', label: 'TEST B', name: 'Card Grid', description: 'Repeating sibling containers demonstrating deterministic variation' },
    { id: 'test-c', label: 'TEST C', name: 'Pricing Section', description: 'Currency indicators triggering pricing card and featured tier recipes' },
    { id: 'test-d', label: 'TEST D', name: 'Newsletter Form', description: 'Form structure with input and submit button' },
    { id: 'test-e', label: 'TEST E', name: 'Article Layout', description: 'Long-form reading content with heading, lead text, and quote' },
    { id: 'test-f', label: 'TEST F', name: 'Nav + Hero + CTA', description: 'Hierarchical role differentiation (Nav Action vs Prominent CTA)' },
    { id: 'test-g', label: 'TEST G', name: 'Generic Div', description: 'Mixed content container demonstrating conservative, non-hallucinating styling' },
  ];

  const currentTestMeta = tests.find((t) => t.id === selectedTest) || tests[0];

  // Derive adaptive role rationale for the current test
  const getInspectionData = (testId: MatrixTestId) => {
    switch (testId) {
      case 'test-a': {
        const sig = StructureAnalyzer.analyze({ tag: 'section', childrenTags: ['h1', 'p', 'button'], childCount: 3 });
        const role = RoleResolver.resolveRole(sig);
        const recipe = RecipeEngine.resolveRecipe(styleId, role, engine);
        return { role, recipe, target: 'Simple Hero Container' };
      }
      case 'test-b': {
        const sig = StructureAnalyzer.analyze({ tag: 'div', childrenTags: ['h3', 'p', 'button'], childCount: 3, totalSiblings: 3, siblingIndex: 0 });
        const role = RoleResolver.resolveRole(sig);
        const recipe = RecipeEngine.resolveRecipe(styleId, role, engine);
        return { role, recipe, target: 'Card Grid (3 Sibling Items)' };
      }
      case 'test-c': {
        const sig = StructureAnalyzer.analyze({ tag: 'div', text: 'Pro Developer $29 /mo Upgrade to Pro', childrenTags: ['h3', 'p', 'button'], hasPriceText: true, siblingIndex: 1, totalSiblings: 3 });
        const role = RoleResolver.resolveRole(sig);
        const recipe = RecipeEngine.resolveRecipe(styleId, role, engine);
        return { role, recipe, target: 'Featured Pricing Card' };
      }
      case 'test-d': {
        const sig = StructureAnalyzer.analyze({ tag: 'form', childrenTags: ['h2', 'p', 'input', 'button'] });
        const role = RoleResolver.resolveRole(sig);
        const recipe = RecipeEngine.resolveRecipe(styleId, role, engine);
        return { role, recipe, target: 'Interactive Newsletter Form' };
      }
      case 'test-e': {
        const sig = StructureAnalyzer.analyze({ tag: 'article', childrenTags: ['h2', 'p', 'blockquote'], text: 'A'.repeat(350) });
        const role = RoleResolver.resolveRole(sig);
        const recipe = RecipeEngine.resolveRecipe(styleId, role, engine);
        return { role, recipe, target: 'Editorial Article Layout' };
      }
      case 'test-f': {
        const sig = StructureAnalyzer.analyze({ tag: 'button', parentRole: 'hero', depth: 2, isFirstChild: true });
        const role = RoleResolver.resolveRole(sig);
        const recipe = RecipeEngine.resolveRecipe(styleId, role, engine);
        return { role, recipe, target: 'Navigation & Hero Hierarchy' };
      }
      case 'test-g': {
        const sig = StructureAnalyzer.analyze({ tag: 'div', childrenTags: ['p', 'span'], text: 'Informational notice only.' });
        const role = RoleResolver.resolveRole(sig);
        const recipe = RecipeEngine.resolveRecipe(styleId, role, engine);
        return { role, recipe, target: 'Generic Div (Conservative Fallback)' };
      }
    }
  };

  const inspection = getInspectionData(selectedTest);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: "'Inter', sans-serif" }}>
      {/* Test Matrix Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0.4rem',
          flexWrap: 'wrap',
          padding: '0.5rem',
          borderRadius: '12px',
          backgroundColor: '#1e293b',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {tests.map((t) => {
          const isSelected = selectedTest === t.id;
          return (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              onClick={() => setSelectedTest(t.id)}
              style={{
                padding: '0.5rem 0.875rem',
                fontSize: '0.8125rem',
                fontWeight: isSelected ? 700 : 500,
                borderRadius: '8px',
                border: isSelected ? '1px solid #38bdf8' : '1px solid transparent',
                backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                color: isSelected ? '#38bdf8' : '#94a3b8',
                cursor: 'pointer',
                transition: 'all 150ms ease',
              }}
            >
              <span style={{ opacity: 0.7, marginRight: '0.35rem', fontSize: '0.6875rem' }}>{t.label}:</span>
              {t.name}
            </button>
          );
        })}
      </div>

      {/* ADAPTIVE EXPLANATION BANNER */}
      <div
        style={{
          padding: '1.25rem',
          borderRadius: '12px',
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          fontSize: '0.8125rem',
        }}
      >
        <div>
          <div style={{ color: '#94a3b8', fontSize: '0.6875rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            STRUCTURE TEST
          </div>
          <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9375rem' }}>
            {currentTestMeta.label} — {currentTestMeta.name}
          </div>
          <div style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.2rem' }}>
            {currentTestMeta.description}
          </div>
        </div>

        <div>
          <div style={{ color: '#94a3b8', fontSize: '0.6875rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            INFERRED ROLE
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#10b981', fontWeight: 700, fontSize: '0.9375rem' }}>
            <CheckCircle2 size={15} />
            {inspection.role.role.toUpperCase()}
          </div>
          <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.2rem' }}>
            Confidence: {Math.round(inspection.role.confidence * 100)}% • Tag: &lt;{inspection.role.semanticTag}&gt;
          </div>
        </div>

        <div>
          <div style={{ color: '#94a3b8', fontSize: '0.6875rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            APPLIED RECIPE
          </div>
          <div style={{ fontWeight: 700, color: '#38bdf8', fontSize: '0.9375rem' }}>
            {inspection.recipe.recipeName}
          </div>
          <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.2rem' }}>
            Modifiers: {inspection.role.modifiers.join(', ') || 'None'}
          </div>
        </div>
      </div>

      {/* RENDERED RAW HTML STRUCTURE CANVAS */}
      <div
        id="matrix-test-canvas"
        className={`style-${styleId}`}
        style={{
          padding: '2.5rem',
          borderRadius: '16px',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden',
          minHeight: '380px',
        }}
      >
        {/* TEST A: Simple Hero */}
        {selectedTest === 'test-a' && (
          <section data-role="hero" style={{ textAlign: 'center' }}>
            <h1>Build Without Limits</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              A modern platform engineered for high-velocity engineering teams and resilient cloud infrastructure.
            </p>
            <button onClick={() => alert('Test A CTA clicked')}>Get Started Free</button>
          </section>
        )}

        {/* TEST B: Card Grid (Demonstrating Sibling Variation) */}
        {selectedTest === 'test-b' && (
          <div>
            <h2 style={{ marginBottom: '0.5rem' }}>Core Capabilities Grid</h2>
            <p style={{ marginBottom: '2rem' }}>
              Notice how each card receives a distinct, deterministic variation treatment (color wash, shadow, borders)
              without random flickering.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              <article data-role="card" data-variant="0">
                <h3>Sub-Millisecond Engine</h3>
                <p>Built for zero-latency event pipelines and real-time state synchronization.</p>
                <button onClick={() => alert('Card 1 action')}>Explore Latency</button>
              </article>
              <article data-role="card" data-variant="1">
                <h3>Granular Security</h3>
                <p>Zero-trust cryptographic isolation running directly at the edge layer.</p>
                <button onClick={() => alert('Card 2 action')}>Inspect Protocol</button>
              </article>
              <article data-role="card" data-variant="2">
                <h3>Adaptive Scaling</h3>
                <p>Auto-allocates memory and computational clusters based on active workloads.</p>
                <button onClick={() => alert('Card 3 action')}>View Benchmarks</button>
              </article>
            </div>
          </div>
        )}

        {/* TEST C: Pricing Section */}
        {selectedTest === 'test-c' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2>Transparent Scalable Pricing</h2>
              <p>Predictable tiers that adapt to your computational usage.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
              <div className="pricing-card" data-role="pricing-card" data-variant="0">
                <h3>Starter Tier</h3>
                <div style={{ fontSize: '2rem', fontWeight: 800, margin: '0.5rem 0' }}>$0 <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>/mo</span></div>
                <p>Core essentials for independent developers and experiments.</p>
                <button onClick={() => alert('Starter selected')}>Deploy Free</button>
              </div>

              {/* Featured Tier (Highlighted) */}
              <div className="pricing-card featured" data-role="pricing-card" data-variant="1" style={{ transform: 'scale(1.04)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>★ MOST POPULAR</span>
                <h3>Pro Developer</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0' }}>$29 <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>/mo</span></div>
                <p>Dedicated edge clusters, full telemetry pipelines, and priority bandwidth.</p>
                <button onClick={() => alert('Pro selected')}>Upgrade to Pro</button>
              </div>

              <div className="pricing-card" data-role="pricing-card" data-variant="2">
                <h3>Enterprise</h3>
                <div style={{ fontSize: '2rem', fontWeight: 800, margin: '0.5rem 0' }}>$199 <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>/mo</span></div>
                <p>Unlimited scale, custom SLAs, and dedicated engineering consultation.</p>
                <button onClick={() => alert('Enterprise selected')}>Contact Sales</button>
              </div>
            </div>
          </div>
        )}

        {/* TEST D: Newsletter Form */}
        {selectedTest === 'test-d' && (
          <div style={{ maxWidth: '540px', margin: '0 auto', textAlign: 'center' }}>
            <form onSubmit={(e) => { e.preventDefault(); alert('Newsletter subscribed!'); }}>
              <h2>Join the Engineering Dispatch</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Technical deep dives on compilers, state architecture, and adaptive design languages.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="architect@domain.com"
                  defaultValue=""
                  required
                  style={{ flex: 1, minWidth: '220px' }}
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        )}

        {/* TEST E: Article Layout */}
        {selectedTest === 'test-e' && (
          <article style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.7 }}>ESSAY • 6 MIN READ</span>
            <h1 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>The Geometry of Adaptive Visual Languages</h1>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.6, fontWeight: 500, marginBottom: '1.25rem' }}>
              Design systems frequently suffer from visual exhaustion when treated merely as a static color token table.
              True aesthetic coherence requires context-aware adaptation.
            </p>
            <p>
              When a design language encounters a Call to Action button within a Hero, it commands dramatic visual weight.
              Yet when that exact same button exists within a navigation menu or inside a data card, the design language
              must exercise structural restraint.
            </p>
            <blockquote style={{ padding: '1rem 1.5rem', margin: '1.5rem 0', borderLeft: '4px solid currentColor', fontStyle: 'italic', opacity: 0.9 }}>
              "A design language is not a coat of paint. It is a set of spatial rules, tactile responses, and typographic relationships."
            </blockquote>
            <p>
              By allowing the engine to adapt to the HTML structure rather than forcing developers into rigid markup templates,
              we achieve both freedom and professional visual art direction.
            </p>
          </article>
        )}

        {/* TEST F: Navigation + Hero + CTA */}
        {selectedTest === 'test-f' && (
          <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>Monolith Cloud</div>
              <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a href="#features" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.875rem' }}>Features</a>
                <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.875rem' }}>Pricing</a>
                <button onClick={() => alert('Nav Sign In clicked')}>Sign In</button>
              </nav>
            </header>

            <section data-role="hero" style={{ textAlign: 'center', padding: '3.5rem 1.5rem' }}>
              <h1>Next-Era Distributed Infrastructure</h1>
              <p style={{ maxWidth: '640px', margin: '0 auto 2rem' }}>
                Deploy resilient compute nodes across 300 edge locations in seconds with instant global routing.
              </p>
              <button onClick={() => alert('Hero Launch Console clicked')}>
                Launch Console <ArrowRight size={16} />
              </button>
            </section>
          </div>
        )}

        {/* TEST G: Generic Div (Conservative Fallback) */}
        {selectedTest === 'test-g' && (
          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
            <p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>
              Informational System Notice
            </p>
            <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', opacity: 0.8 }}>
              This container has no explicit headings or interactive triggers. The Adaptive Engine recognizes it
              conservatively as a generic container without hallucinating unneeded buttons or hero banners.
            </p>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              Status: Operating Normally • Build 2026.09
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
