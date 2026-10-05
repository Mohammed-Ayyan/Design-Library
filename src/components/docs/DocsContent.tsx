import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Terminal,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { DocSection, getAdjacentSections } from './docsData';
import { CodeBlock } from './CodeBlock';
import { InteractiveLivePreview } from './InteractiveLivePreview';
import { ALL_29_STYLES } from '../../styles/catalog';

interface DocsContentProps {
  section: DocSection;
  onNavigateSection: (sectionId: string) => void;
  onOpenPlaygroundWithStyle?: (styleId: string) => void;
}

export const DocsContent: React.FC<DocsContentProps> = ({
  section,
  onNavigateSection,
  onOpenPlaygroundWithStyle,
}) => {
  const { prev, next } = getAdjacentSections(section.id);

  // State for installation package manager tabs
  const [installTab, setInstallTab] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm');

  // State for style reference search and category filter
  const [styleSearch, setStyleSearch] = useState('');
  const [styleCategoryFilter, setStyleCategoryFilter] = useState('All');

  const filteredStyles = ALL_29_STYLES.filter((style) => {
    const matchesSearch =
      style.name.toLowerCase().includes(styleSearch.toLowerCase()) ||
      style.id.toLowerCase().includes(styleSearch.toLowerCase()) ||
      style.description.toLowerCase().includes(styleSearch.toLowerCase());
    const matchesCategory =
      styleCategoryFilter === 'All' || style.category === styleCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        padding: '2.5rem 3rem',
        maxWidth: '960px',
        margin: '0 auto',
        fontFamily: "'Inter', sans-serif",
        color: '#e2e8f0',
        lineHeight: 1.65,
      }}
    >
      {/* Breadcrumb Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: '#818cf8',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '0.75rem',
        }}
      >
        <span>Docs</span>
        <span>/</span>
        <span style={{ color: '#94a3b8' }}>{section.category}</span>
        <span>/</span>
        <span style={{ color: '#f8fafc' }}>{section.title}</span>
      </div>

      {/* Main Section Title */}
      <h1
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: '#f8fafc',
          margin: '0 0 0.75rem',
          lineHeight: 1.15,
        }}
      >
        {section.title}
      </h1>

      {/* Section Subtitle */}
      <p
        style={{
          fontSize: '1.125rem',
          color: '#94a3b8',
          margin: '0 0 2rem',
          maxWidth: '720px',
          lineHeight: 1.5,
        }}
      >
        {section.description}
      </p>

      <hr
        style={{
          border: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          margin: '0 0 2.5rem',
        }}
      />

      {/* =========================================================================
          SECTION CONTENTS
          ========================================================================= */}

      {/* 1. INTRODUCTION */}
      {section.id === 'intro' && (
        <div>
          {/* Hero Banner */}
          <div
            style={{
              padding: '2rem',
              borderRadius: '16px',
              background:
                'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(236, 72, 153, 0.12) 50%, rgba(245, 158, 11, 0.1) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              marginBottom: '2.5rem',
            }}
          >
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: '#a5b4fc',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.5rem',
              }}
            >
              The Core Philosophy
            </div>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Design systems, applied in seconds.
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#cbd5e1',
                margin: '0 0 1.5rem',
                maxWidth: '680px',
                lineHeight: 1.6,
              }}
            >
              Apply complete visual design languages to existing HTML, components,
              sections, or entire pages without rebuilding your UI.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                onClick={() => onNavigateSection('installation')}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '8px',
                  backgroundColor: '#6366f1',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>Install Package</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => onNavigateSection('quick-start')}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#f8fafc',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                }}
              >
                Quick Start (30s)
              </button>
              <button
                onClick={() => onNavigateSection('style-reference')}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#94a3b8',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                }}
              >
                Explore 32 Styles â†’
              </button>
            </div>
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '2rem 0 1rem' }}>
            Live Mini Demonstration
          </h3>
          <p>
            Watch how arbitrary plain markup adopts a disciplined art direction merely by adding a style class:
          </p>

          <InteractiveLivePreview initialStyle="brutalism" initialPreset="button" />

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '2.5rem 0 1rem' }}>
            What Is Design Style Library?
          </h3>
          <p>
            Most modern design tools force developers into a grueling trade-off: either surrender visual
            distinctiveness to homogenous gray utility frameworks, or spend weeks handcrafting custom CSS
            for every single button, hero, card, and modal.
          </p>
          <p>
            <strong>Design Style Library</strong> solves this by introducing a unified <strong>Style Engine</strong> with <strong>32 production-grade design languages</strong> (including Brutalism, Bauhaus, Cyberpunk, Swiss Design, Glassmorphism, Wabi-Sabi, and Neo-Brutalism). Each language encapsulates:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              margin: '1.5rem 0 2rem',
            }}
          >
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                1. Zero DOM Mutation
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>
                Never reorders or mutates your HTML elements. Existing semantic markup stays 100% intact.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                2. Semantic CSS Grammar
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>
                Targets standard semantic tags: <code>&lt;nav&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;h1&gt;</code>, and <code>&lt;table&gt;</code>.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                3. Hierarchical Scoping
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>
                Apply a style globally to a page, isolate it to a section, or override a single button without stylesheet leakage.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                4. Pure Token Architecture
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>
                Backed by strongly-typed design tokens compiled to standard CSS variables (<code>--ds-*</code>).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. INSTALLATION */}
      {section.id === 'installation' && (
        <div>
          <p>
            <code>design-library</code> is published as a zero-dependency dual ESM/CommonJS package with complete TypeScript declarations and standalone stylesheets.
          </p>

          {/* Package Manager Tabs */}
          <div style={{ margin: '1.5rem 0' }}>
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '0.5rem',
              }}
            >
              {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((mgr) => (
                <button
                  key={mgr}
                  onClick={() => setInstallTab(mgr)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    border: installTab === mgr ? '1px solid #6366f1' : '1px solid transparent',
                    backgroundColor: installTab === mgr ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                    color: installTab === mgr ? '#f8fafc' : '#94a3b8',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    cursor: 'pointer',
                  }}
                >
                  {mgr}
                </button>
              ))}
            </div>

            {installTab === 'npm' && (
              <CodeBlock code="npm install git+https://github.com/Mohammed-Ayyan/Design-Library.git" language="bash" />
            )}
            {installTab === 'pnpm' && (
              <CodeBlock code="pnpm add git+https://github.com/Mohammed-Ayyan/Design-Library.git" language="bash" />
            )}
            {installTab === 'yarn' && (
              <CodeBlock code="yarn add git+https://github.com/Mohammed-Ayyan/Design-Library.git" language="bash" />
            )}
            {installTab === 'bun' && (
              <CodeBlock code="bun add git+https://github.com/Mohammed-Ayyan/Design-Library.git" language="bash" />
            )}
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '2rem 0 1rem' }}>
            The 4-Step Workflow
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                Step 1: Install the package
              </div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0 0 0.5rem' }}>
                Run the package manager command above in your project root directory.
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                Step 2: Import the stylesheet or library
              </div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0 0 0.5rem' }}>
                In your root application entry (e.g. <code>src/main.tsx</code>, <code>pages/_app.tsx</code>, or <code>app/layout.tsx</code>):
              </p>
              <CodeBlock code="import 'design-library/style.css';" language="tsx" filename="src/main.tsx" />
            </div>

            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                Step 3: Apply a style class
              </div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0 0 0.5rem' }}>
                Wrap any element or section with <code>style-[id]</code>:
              </p>
              <CodeBlock
                code={`export default function App() {
  return (
    <main className="style-bauhaus">
      <header>
        <h1>Studio Atelier</h1>
        <p>Functional design and primary geometry.</p>
        <button>Explore Catalog</button>
      </header>
    </main>
  );
}`}
                language="tsx"
                filename="src/App.tsx"
              />
            </div>

            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                Step 4: Run your application
              </div>
              <CodeBlock code="npm run dev" language="bash" />
            </div>
          </div>
        </div>
      )}

      {/* 3. QUICK START */}
      {section.id === 'quick-start' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            The 30-Second Example
          </h3>
          <p>
            Here is the fastest possible demonstration of turning plain HTML into an art-directed component:
          </p>

          <CodeBlock
            code={`// 1. Install
// npm install git+https://github.com/Mohammed-Ayyan/Design-Library.git

// 2. Import stylesheet
import 'design-library/style.css';

// 3. Apply class to plain markup
export function HeroCard() {
  return (
    <div className="style-brutalism">
      <h1>Hello World</h1>
      <p>A high-contrast, tactile design system applied in seconds.</p>
      <button>Get Started</button>
    </div>
  );
}`}
            language="tsx"
            filename="components/HeroCard.tsx"
          />

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '2rem 0 1rem' }}>
            What Happened?
          </h3>
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '12px',
              backgroundColor: 'rgba(30, 41, 59, 0.4)',
              borderLeft: '4px solid #6366f1',
              color: '#cbd5e1',
              fontSize: '0.925rem',
              lineHeight: 1.6,
            }}
          >
            <p style={{ margin: '0 0 0.75rem' }}>
              <strong>Notice that you did not write a single utility class</strong> like <code>border-3 border-black uppercase shadow-[4px_4px_0px_#000]</code>.
            </p>
            <p style={{ margin: 0 }}>
              The <code>.style-brutalism</code> scope activates the Brutalist visual grammar: heading scales are recalculated into bold uppercase Space Grotesk, the button gains tactile 3px solid black outlines with hover translations, and spacing aligns to the architectural grid automatically.
            </p>
          </div>
        </div>
      )}

      {/* 4. FIRST STYLE */}
      {section.id === 'first-style' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Your First Style Walkthrough
          </h3>
          <p>
            Let's walk through an actual scenario: you have an unstyled HTML contact snippet and you want to apply <strong>Bauhaus</strong> art direction.
          </p>

          <div style={{ margin: '1.5rem 0' }}>
            <div style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
              Original Unstyled HTML:
            </div>
            <CodeBlock
              code={`<form>
  <h2>Inquire Project</h2>
  <p>Tell us about your architectural design project.</p>
  <label for="name">Client Name</label>
  <input type="text" id="name" placeholder="Walter Gropius" />
  <label for="scope">Project Scope</label>
  <textarea id="scope" placeholder="Primary geometric structure..."></textarea>
  <button type="submit">Submit Request</button>
</form>`}
              language="html"
            />
          </div>

          <div style={{ margin: '1.5rem 0' }}>
            <div style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
              Step 1: Wrap with the Bauhaus Class
            </div>
            <CodeBlock
              code={`<form class="style-bauhaus">
  <h2>Inquire Project</h2>
  <p>Tell us about your architectural design project.</p>
  <label for="name">Client Name</label>
  <input type="text" id="name" placeholder="Walter Gropius" />
  <label for="scope">Project Scope</label>
  <textarea id="scope" placeholder="Primary geometric structure..."></textarea>
  <button type="submit">Submit Request</button>
</form>`}
              language="html"
            />
          </div>

          <div style={{ margin: '1.5rem 0' }}>
            <div style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
              Step 2: Inspect the Live Result
            </div>
            <InteractiveLivePreview initialStyle="bauhaus" initialPreset="input" />
          </div>
        </div>
      )}

      {/* 5. APPLY TO AN ELEMENT */}
      {section.id === 'element' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Style a Single Element
          </h3>
          <p>
            You can target single controls or isolated elements without affecting sibling elements.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', margin: '1.5rem 0' }}>
            {/* Button */}
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                1. Single Button: Brutalism
              </div>
              <CodeBlock code={`<button class="style-brutalism">
  Buy now
</button>`} language="html" />
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Applies the hard offset drop shadow, 3px solid black border, 0px radius, and tactile yellow active shift.
              </p>
            </div>

            {/* Card */}
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                2. Single Article / Card: Glassmorphism
              </div>
              <CodeBlock code={`<article class="style-glassmorphism">
  <h3>Telemetry Stream</h3>
  <p>Real-time edge computation with sub-millisecond propagation.</p>
</article>`} language="html" />
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Applies 20px frosted backdrop blur, translucent white background, and light-catching 1px borders.
              </p>
            </div>

            {/* Input */}
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                3. Single Input: Neumorphism
              </div>
              <CodeBlock code={`<input class="style-neumorphism" type="text" placeholder="Search parameters..." />`} language="html" />
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Applies recessed dual-direction extruded drop shadows and seamless continuous surface shading.
              </p>
            </div>

            {/* Heading */}
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                4. Single Heading: Editorial Design
              </div>
              <CodeBlock code={`<h1 class="style-editorial-design">
  The Grand Architectural Shift
</h1>`} language="html" />
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Applies broadsheet serif typography, letterspaced editorial leadings, and hairline dividing rules.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 6. APPLY TO A SECTION */}
      {section.id === 'section' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Apply a Style to a Section
          </h3>
          <p>
            When applied to a container like <code>&lt;section&gt;</code> or <code>&lt;header&gt;</code>, all children (headings, paragraphs, buttons, cards, links, lists) automatically inherit the visual language.
          </p>

          <CodeBlock
            code={`<section class="style-cyberpunk">
  <p>NET_GATEWAY // SEC_09</p>
  <h1>Terminal Infrastructure</h1>
  <p>Decentralized mesh networks running on quantum substrates.</p>
  <div>
    <button>Access Console</button>
    <a href="#docs">API Specs</a>
  </div>
</section>`}
            language="html"
            filename="components/CyberpunkHero.html"
          />

          <h4 style={{ color: '#f8fafc', margin: '2rem 0 0.5rem' }}>Supported Archetype Sections</h4>
          <ul style={{ paddingLeft: '1.25rem', color: '#94a3b8', lineHeight: 1.8 }}>
            <li><strong>Hero Sections</strong>: Automatically formats title hierarchy, kicker badge, and CTA group.</li>
            <li><strong>Pricing Sections</strong>: Formats pricing amounts, feature bullet checklists, and action buttons.</li>
            <li><strong>Feature Grids</strong>: Formats cards into responsive modular tiles with surface borders.</li>
            <li><strong>Testimonials</strong>: Applies blockquote styling, author bylines, and quotation marks.</li>
            <li><strong>Footers</strong>: Formats subtle copyright metadata, navigation links, and divider lines.</li>
          </ul>
        </div>
      )}

      {/* 7. APPLY TO A PAGE */}
      {section.id === 'page' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Apply to an Entire Page
          </h3>
          <p>
            To transform an entire document into a unified design language, attach the class directly to <code>&lt;body&gt;</code> or <code>&lt;main&gt;</code>:
          </p>

          <CodeBlock
            code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Wabi-Sabi Portfolio</title>
  <link rel="stylesheet" href="./design-library.css" />
</head>
<body class="style-wabi-sabi">
  <header>
    <nav>
      <a href="/">Studio</a>
      <a href="/work">Work</a>
      <a href="/about">Philosophy</a>
    </nav>
  </header>

  <main>
    <h1>The Beauty of Imperfection.</h1>
    <p>Handcrafted digital objects with organic textures and quiet elegance.</p>
    <button>Explore Collection</button>
  </main>

  <footer>
    <p>Â© 2026 Sumi Atelier. Natural materials and quiet craftsmanship.</p>
  </footer>
</body>
</html>`}
            language="html"
            filename="index.html"
          />

          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#bae6fd',
              fontSize: '0.85rem',
              margin: '1.5rem 0',
            }}
          >
            <strong>Scope Rule:</strong> Setting <code>class="style-[id]"</code> on <code>&lt;body&gt;</code> establishes root-level CSS custom properties (<code>--ds-*</code>). Any child element or sub-section can override this scope simply by declaring its own style class.
          </div>
        </div>
      )}

      {/* 8. REACT USAGE */}
      {section.id === 'react' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            React Integration
          </h3>
          <p>
            <code>design-library</code> offers two first-class workflows for React applications:
          </p>

          <h4 style={{ color: '#f8fafc', margin: '1.5rem 0 0.5rem' }}>
            Approach A: Direct Class Names (Zero Overhead)
          </h4>
          <p>Simply use standard <code>className</code> props on normal JSX elements:</p>
          <CodeBlock
            code={`export function FeatureHero() {
  return (
    <section className="style-brutalism">
      <h1>Build faster.</h1>
      <p>Ship distinctive web interfaces without CSS bloat.</p>
      <button>Start Building</button>
    </section>
  );
}`}
            language="tsx"
            filename="components/FeatureHero.tsx"
          />

          <h4 style={{ color: '#f8fafc', margin: '2rem 0 0.5rem' }}>
            Approach B: Component & Provider API (Strongly Typed)
          </h4>
          <p>
            Use <code>StyleEngineProvider</code>, <code>StyleScope</code>, and typed primitives (<code>Page</code>, <code>Section</code>, <code>Card</code>, <code>Button</code>, <code>Heading</code>, <code>Input</code>, <code>Badge</code>):
          </p>
          <CodeBlock
            code={`import React from 'react';
import {
  StyleEngineProvider,
  StyleScope,
  Section,
  Card,
  Button,
  Heading,
} from 'design-library';

export function Dashboard() {
  return (
    <StyleEngineProvider initialStyleId="dark-mode-ui">
      {/* Outer section adopts Dark Mode UI */}
      <Section styleId="dark-mode-ui">
        <Heading level={1}>System Overview</Heading>

        {/* Nested card explicitly overrides style to Cyberpunk */}
        <StyleScope level="section" styleId="cyberpunk">
          <Card>
            <Heading level={3}>Live Telemetry</Heading>
            <Button styleId="brutalism">Emergency Override</Button>
          </Card>
        </StyleScope>
      </Section>
    </StyleEngineProvider>
  );
}`}
            language="tsx"
            filename="components/Dashboard.tsx"
          />
        </div>
      )}

      {/* 9. NEXT.JS USAGE */}
      {section.id === 'nextjs' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Next.js (App Router) Integration
          </h3>
          <p>
            <code>design-library</code> is fully compatible with Next.js 13, 14, and 15 Server Components and Client Components.
          </p>

          <h4 style={{ color: '#f8fafc', margin: '1.5rem 0 0.5rem' }}>
            Step 1: Import Stylesheet in <code>app/layout.tsx</code>
          </h4>
          <CodeBlock
            code={`import type { Metadata } from 'next';
import 'design-library/style.css'; // Imports complete design languages

export const metadata: Metadata = {
  title: 'Next.js App with Design Style Library',
  description: 'Instant art direction for App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
            language="tsx"
            filename="app/layout.tsx"
          />

          <h4 style={{ color: '#f8fafc', margin: '2rem 0 0.5rem' }}>
            Step 2: Apply Styles in <code>app/page.tsx</code>
          </h4>
          <CodeBlock
            code={`export default function HomePage() {
  return (
    <main className="style-bauhaus" style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
      <header>
        <p>MODERNIST ARCHITECTURE</p>
        <h1>Functional Design Systems</h1>
        <p>Zero DOM mutation for Next.js App Router applications.</p>
        <button>Get Started</button>
      </header>
    </main>
  );
}`}
            language="tsx"
            filename="app/page.tsx"
          />
        </div>
      )}

      {/* 10. VANILLA HTML / CSS / JS */}
      {section.id === 'html' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Vanilla HTML / CSS / JavaScript
          </h3>
          <p>
            No React? No problem. The library compiles to standard CSS classes and web standards.
          </p>

          <h4 style={{ color: '#f8fafc', margin: '1.5rem 0 0.5rem' }}>
            Option 1: Generate Standalone CSS with CLI
          </h4>
          <CodeBlock code="npx design-library init -o styles/design-library.css" language="bash" />

          <p>Then link it directly in your HTML:</p>
          <CodeBlock
            code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vanilla HTML Demo</title>
  <link rel="stylesheet" href="./styles/design-library.css" />
</head>
<body>
  <div class="style-swiss-design" style="max-width: 960px; margin: 2rem auto; padding: 2rem;">
    <h1>Objective Typography</h1>
    <p>Rigorous horizontal datum lines and clean asymmetrical balance.</p>
    <button>Explore Archives</button>
  </div>
</body>
</html>`}
            language="html"
            filename="index.html"
          />
        </div>
      )}

      {/* 11. CLI */}
      {section.id === 'cli' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Command Line Interface (CLI)
          </h3>
          <p>
            The package includes a built-in CLI executable accessible via <code>npx design-library</code> or <code>npx design-engine</code>.
          </p>

          {/* Command 1: list */}
          <div style={{ margin: '2rem 0' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#f8fafc',
              }}
            >
              <Terminal size={18} color="#34d399" />
              <code>npx design-library list</code>
            </div>
            <p style={{ margin: '0.35rem 0 0.75rem', color: '#94a3b8' }}>
              Lists all 32 available design languages with category and installation status.
            </p>
            <CodeBlock code="npx design-library list" language="bash" />
          </div>

          {/* Command 2: info */}
          <div style={{ margin: '2rem 0' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#f8fafc',
              }}
            >
              <Terminal size={18} color="#34d399" />
              <code>npx design-library info &lt;style-id&gt;</code>
            </div>
            <p style={{ margin: '0.35rem 0 0.75rem', color: '#94a3b8' }}>
              Displays detailed metadata, color palette tokens, typography rules, and usage code snippets for any style.
            </p>
            <CodeBlock code="npx design-library info brutalism" language="bash" />
          </div>

          {/* Command 3: apply */}
          <div style={{ margin: '2rem 0' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#f8fafc',
              }}
            >
              <Terminal size={18} color="#34d399" />
              <code>npx design-library apply &lt;input.html&gt; [options]</code>
            </div>
            <p style={{ margin: '0.35rem 0 0.75rem', color: '#94a3b8' }}>
              Applies a style to an HTML file and outputs transformed code or a complete standalone HTML document.
            </p>
            <div style={{ margin: '0.5rem 0', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <strong>Options:</strong>
              <ul style={{ paddingLeft: '1.25rem', margin: '0.25rem 0' }}>
                <li><code>-s, --style &lt;id&gt;</code>: Design language to apply (default: <code>brutalism</code>)</li>
                <li><code>-o, --output &lt;path&gt;</code>: Write to file instead of stdout</li>
                <li><code>--standalone</code>: Emit complete HTML5 document with embedded styles & webfonts</li>
                <li><code>--report</code>: Output JSON structural role analysis report</li>
              </ul>
            </div>
            <CodeBlock
              code="npx design-library apply raw-landing.html --style bauhaus --standalone -o index.html"
              language="bash"
            />
          </div>

          {/* Command 4: init */}
          <div style={{ margin: '2rem 0' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#f8fafc',
              }}
            >
              <Terminal size={18} color="#34d399" />
              <code>npx design-library init [options]</code>
            </div>
            <p style={{ margin: '0.35rem 0 0.75rem', color: '#94a3b8' }}>
              Generates a production <code>design-library.css</code> in your project with all webfonts and classes precompiled.
            </p>
            <CodeBlock code="npx design-library init -o public/design-library.css" language="bash" />
          </div>

          {/* Command 5: export-css */}
          <div style={{ margin: '2rem 0' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#f8fafc',
              }}
            >
              <Terminal size={18} color="#34d399" />
              <code>npx design-library export-css [style-id] [options]</code>
            </div>
            <p style={{ margin: '0.35rem 0 0.75rem', color: '#94a3b8' }}>
              Exports compiled CSS rules for a single style or the entire suite into a standalone file.
            </p>
            <CodeBlock code="npx design-library export-css cyberpunk -o src/styles/cyberpunk.css" language="bash" />
          </div>
        </div>
      )}

      {/* 12. STYLE INSTALLATION */}
      {section.id === 'style-install' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Installing & Enabling a Particular Design
          </h3>
          <p>
            All 32 design languages are pre-installed in the <code>design-library</code> package. You have two ways to consume them:
          </p>

          <h4 style={{ color: '#f8fafc', margin: '1.5rem 0 0.5rem' }}>
            Method A: Complete Bundle (Simplest)
          </h4>
          <p>Import the stylesheet once and use any style class on demand:</p>
          <CodeBlock code="import 'design-library/style.css';" language="tsx" />

          <h4 style={{ color: '#f8fafc', margin: '2rem 0 0.5rem' }}>
            Method B: Tree-Shaken Named Exports (Optimized)
          </h4>
          <p>
            If you only need specific design languages in your bundle, import their typed definitions:
          </p>
          <CodeBlock
            code={`import {
  StyleEngine,
  brutalismStyle,
  bauhausStyle,
  cyberpunkStyle,
} from 'design-library';

// Initialize engine with only the styles your project requires
const engine = new StyleEngine([brutalismStyle, bauhausStyle, cyberpunkStyle]);`}
            language="tsx"
          />
        </div>
      )}

      {/* 13. AVAILABLE STYLES OVERVIEW */}
      {section.id === 'available-styles' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            The 5 Aesthetic Pillars
          </h3>
          <p>
            The 32 design languages are structured into five distinct aesthetic traditions:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: '1.5rem 0' }}>
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '0.25rem' }}>
                1. Modern (7 styles)
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: 0 }}>
                Minimalism, Swiss Design, Bento Grid, Dark Mode UI, Luxury Typography, Editorial Design, Bauhaus. Focused on functional clarity, typography, and objective proportion.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ fontWeight: 700, color: '#f43f5e', marginBottom: '0.25rem' }}>
                2. Expressive (6 styles)
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: 0 }}>
                Brutalism, Neo-Brutalism, Maximalism, Cyberpunk, Cybercore, Graffiti. High-energy, rebellious, architectural boundaries, and unapologetic contrast.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ fontWeight: 700, color: '#818cf8', marginBottom: '0.25rem' }}>
                3. Material & Depth (3 styles)
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: 0 }}>
                Glassmorphism, Neumorphism, Claymorphism. Exploring optical refraction, continuous extrusion, and soft 3D tactile inflation.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: '0.25rem' }}>
                4. Retro & Heritage (7 styles)
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: 0 }}>
                Neo-Classical, Victorian, Y2K Aesthetic, Pixel Art, Synthwave, Gothic, Art Deco. Rich historical ornament, nostalgia, jazz-age symmetry, and cathedral atmosphere.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ fontWeight: 700, color: '#10b981', marginBottom: '0.25rem' }}>
                5. Artistic & Organic (8 styles)
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: 0 }}>
                Surrealism, Scrapbook, Conceptual Sketch, Ethereal, Bohemian, Anthropomorphic, Wabi-Sabi, Mixed Media. Textured papers, sumi ink, dream logic, and warm craftsmanship.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 14. STYLE REFERENCE */}
      {section.id === 'style-reference' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Complete Style Reference ({ALL_29_STYLES.length} Languages)
          </h3>
          <p>
            Browse, filter, and inspect every implemented visual language in the library:
          </p>

          {/* Search & Category Filter Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '1.5rem 0',
              padding: '1rem',
              borderRadius: '12px',
              backgroundColor: '#111827',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, minWidth: '220px' }}>
              <Search size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search styles by name, id, or keywords..."
                value={styleSearch}
                onChange={(e) => setStyleSearch(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#f8fafc',
                  fontSize: '0.875rem',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              {['All', 'Modern', 'Expressive', 'Material & Depth', 'Retro & Heritage', 'Artistic & Organic'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setStyleCategoryFilter(cat)}
                  style={{
                    padding: '0.25rem 0.6rem',
                    borderRadius: '6px',
                    border: styleCategoryFilter === cat ? '1px solid #6366f1' : '1px solid transparent',
                    backgroundColor: styleCategoryFilter === cat ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                    color: styleCategoryFilter === cat ? '#c7d2fe' : '#94a3b8',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Style Reference Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {filteredStyles.map((st) => (
              <div
                key={st.id}
                id={`ref-${st.id}`}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  backgroundColor: '#0c111d',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: st.previewGradient || 'linear-gradient(135deg, #6366f1, #ec4899)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
                      }}
                    />
                    <div>
                      <span style={{ fontWeight: 800, color: '#f8fafc', fontSize: '1.1rem' }}>
                        {st.name}
                      </span>
                      <code style={{ marginLeft: '0.65rem', color: '#818cf8', fontSize: '0.8rem' }}>
                        .style-{st.id}
                      </code>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                      }}
                    >
                      {st.category}
                    </span>
                    {onOpenPlaygroundWithStyle && (
                      <button
                        onClick={() => onOpenPlaygroundWithStyle(st.id)}
                        title="Open in Visual Playground"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(56, 189, 248, 0.3)',
                          backgroundColor: 'rgba(56, 189, 248, 0.1)',
                          color: '#38bdf8',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                        }}
                      >
                        <Sparkles size={11} /> Playground
                      </button>
                    )}
                  </div>
                </div>

                <p style={{ margin: 0, fontSize: '0.875rem', color: '#94a3b8' }}>
                  {st.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '0.8rem',
                    color: '#64748b',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div>
                    <strong>Accent Color:</strong>{' '}
                    <span style={{ color: st.accentColor || '#38bdf8', fontWeight: 600 }}>
                      {st.accentColor || '#38bdf8'}
                    </span>
                  </div>
                  <div>
                    <strong>React Import:</strong>{' '}
                    <code style={{ color: '#cbd5e1' }}>
                      {`import { ${st.id.replace(/-([a-z])/g, (_, g) => g.toUpperCase())}Style } from 'design-library';`}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 15. SCOPES */}
      {section.id === 'scopes' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Scopes & Hierarchies
          </h3>
          <p>
            The Style Engine resolves styles through a 4-level scope cascade:
          </p>

          <CodeBlock
            code={`page (Root level)
 â””â”€â”€ section (Major UI zones: Hero, Pricing, Dashboard)
      â””â”€â”€ container (Cards, Modals, Drawers)
           â””â”€â”€ component (Atomic overrides: Button, Badge, Input)`}
            language="bash"
          />

          <h4 style={{ color: '#f8fafc', margin: '1.5rem 0 0.5rem' }}>
            Nested Scope Precedence
          </h4>
          <p>
            An inner scope completely overrides its parent for its own subtree, while unaffected sibling elements continue using the outer scope:
          </p>
          <CodeBlock
            code={`<div class="style-dark-mode-ui">
  <!-- All children inside here use Dark Mode UI -->
  <h1>Dashboard</h1>
  <p>System metrics...</p>

  <!-- Nested child explicitly opts into Cyberpunk -->
  <div class="style-cyberpunk">
    <h2>Live Telemetry Terminal</h2>
    <p>Cyan phosphor telemetry stream.</p>
  </div>

  <!-- Sibling remains in Dark Mode UI -->
  <button>Save Preferences</button>
</div>`}
            language="html"
          />
        </div>
      )}

      {/* 16. OVERRIDES & TOKENS */}
      {(section.id === 'overrides' || section.id === 'tokens' || section.id === 'customization') && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Overrides & The Design Token Contract
          </h3>
          <p>
            Every style compiles its <code>DesignTokens</code> into CSS custom properties under the <code>--ds-*</code> namespace. You can override any token locally or globally without destroying the structural grammar:
          </p>

          <CodeBlock
            code={`/* Custom CSS Overrides */
.my-custom-brutalism {
  /* Override primary punch color from default yellow to hot pink */
  --ds-color-primary: #ff007f;

  /* Adjust corner radius while preserving brutalist 3px borders */
  --ds-radius-base: 2px;
}`}
            language="css"
          />

          <h4 style={{ color: '#f8fafc', margin: '2rem 0 0.5rem' }}>
            CSS Custom Properties Index
          </h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
              margin: '1rem 0',
            }}
          >
            <div style={{ padding: '1rem', borderRadius: '8px', backgroundColor: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '0.35rem' }}>Colors</div>
              <code style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.8 }}>
                --ds-color-background<br />
                --ds-color-surface<br />
                --ds-color-text-primary<br />
                --ds-color-primary<br />
                --ds-color-secondary<br />
                --ds-color-accent
              </code>
            </div>

            <div style={{ padding: '1rem', borderRadius: '8px', backgroundColor: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '0.35rem' }}>Typography</div>
              <code style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.8 }}>
                --ds-font-family-base<br />
                --ds-font-family-heading<br />
                --ds-font-family-mono<br />
                --ds-font-heading-weight<br />
                --ds-font-letter-spacing
              </code>
            </div>

            <div style={{ padding: '1rem', borderRadius: '8px', backgroundColor: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '0.35rem' }}>Geometry</div>
              <code style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.8 }}>
                --ds-radius-sm / md / lg / full<br />
                --ds-border-default / thick / hairline<br />
                --ds-shadow-sm / md / lg / none
              </code>
            </div>
          </div>
        </div>
      )}

      {/* 17. TROUBLESHOOTING */}
      {section.id === 'troubleshooting' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Troubleshooting Guide
          </h3>
          <p>
            Solutions to the most common questions and developer configurations:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '1.5rem 0' }}>
            <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                Issue 1: "The style is not appearing on my elements"
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: '0 0 0.5rem' }}>
                Ensure you have imported the stylesheet in your root file: <code>import 'design-library/style.css';</code>. If using Vanilla HTML, make sure the <code>&lt;link rel="stylesheet" href="./design-library.css"&gt;</code> path is correct.
              </p>
            </div>

            <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                Issue 2: "My existing CSS framework (e.g. Tailwind) is overriding library styles"
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: '0 0 0.5rem' }}>
                In CSS cascade order, ensure <code>design-library/style.css</code> is imported AFTER your framework reset or base utilities. You can also place the style inside a cascade layer: <code>@layer design-library {'{ ... }'}</code>.
              </p>
            </div>

            <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                Issue 3: "Next.js shows an unstyled flash during SSR"
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: '0 0 0.5rem' }}>
                Import <code>design-library/style.css</code> at the top of <code>app/layout.tsx</code>. This ensures the CSS is bundled into the initial static HTML document sent from the server.
              </p>
            </div>

            <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                Issue 4: "Custom fonts (e.g. Space Grotesk, Cinzel) appear as default system serif"
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: '0 0 0.5rem' }}>
                Google Fonts are automatically imported by <code>design-library/style.css</code>. If your CSP (Content Security Policy) blocks external font origins, add <code>fonts.googleapis.com</code> and <code>fonts.gstatic.com</code> to your <code>style-src</code> and <code>font-src</code> directives.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 18. ZERO TO PRODUCTION */}
      {section.id === 'zero-to-production' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Build a Styled Landing Page in 5 Minutes
          </h3>
          <p>
            Follow this end-to-end tutorial to build and ship an art-directed production page:
          </p>

          <CodeBlock
            code={`# Step 1: Create a modern React + Vite project
npm create vite@latest my-design-app -- --template react-ts
cd my-design-app

# Step 2: Install Design Style Library
npm install design-library

# Step 3: Start development server
npm run dev`}
            language="bash"
          />

          <p>Now replace <code>src/App.tsx</code> with your plain semantic markup and style class:</p>
          <CodeBlock
            code={`import 'design-library/style.css';

export default function App() {
  return (
    <div className="style-bauhaus">
      <header>
        <nav>
          <a href="#work">Projects</a>
          <a href="#about">Studio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section>
          <p>ARCHITECTURAL ATELIER</p>
          <h1>Form Follows Function</h1>
          <p>We build digital spaces based on primary geometry and functional clarity.</p>
          <button>View Catalog</button>
        </section>

        <section>
          <h2>Selected Works</h2>
          <article>
            <h3>Modernist Pavilion</h3>
            <p>Steel, reinforced concrete, and primary color structural partitions.</p>
          </article>
        </section>
      </main>

      <footer>
        <p>Â© 2026 Bauhaus Digital Foundation.</p>
      </footer>
    </div>
  );
}`}
            language="tsx"
            filename="src/App.tsx"
          />

          <CodeBlock
            code={`# Step 4: Build for production
npm run build`}
            language="bash"
          />
        </div>
      )}

      {/* 19. CORE API REFERENCE */}
      {section.id === 'api-reference' && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            Core TypeScript API Reference
          </h3>
          <p>
            Comprehensive signatures and method tables for the core Style Engine package exports:
          </p>

          <CodeBlock
            code={`import {
  StyleEngine,
  StyleRegistry,
  StyleResolver,
  CSSAdapter,
  StyleEngineProvider,
  useStyleEngine,
  StyleScope,
  Button,
  Card,
  Heading,
  Input,
  ALL_29_STYLES,
  defaultStyles,
} from 'design-library';`}
            language="tsx"
          />

          <h4 style={{ color: '#f8fafc', margin: '2rem 0 0.5rem' }}>
            Class: <code>StyleEngine</code>
          </h4>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.85rem',
              margin: '1rem 0',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'left' }}>
                <th style={{ padding: '0.65rem 0.5rem', color: '#f8fafc' }}>Method</th>
                <th style={{ padding: '0.65rem 0.5rem', color: '#f8fafc' }}>Arguments</th>
                <th style={{ padding: '0.65rem 0.5rem', color: '#f8fafc' }}>Returns</th>
                <th style={{ padding: '0.65rem 0.5rem', color: '#f8fafc' }}>Description</th>
              </tr>
            </thead>
            <tbody style={{ color: '#cbd5e1' }}>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>getStyle(id)</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>id: string</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>StyleDefinition | undefined</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}>Retrieves registered definition</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>resolveStyleById(id, level?)</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>id: string, level?: StyleScopeLevel</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>ResolvedStyle</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}>Resolves tokens and CSS variables</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>registerStyle(style)</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>style: StyleDefinition</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>void</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}>Registers custom design language</td>
              </tr>
              <tr>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>getAvailableStyles()</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}>â€”</td>
                <td style={{ padding: '0.65rem 0.5rem' }}><code>StyleDefinition[]</code></td>
                <td style={{ padding: '0.65rem 0.5rem' }}>Lists all registered styles</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Fallback default section view for other sections */}
      {![
        'intro',
        'installation',
        'quick-start',
        'first-style',
        'element',
        'section',
        'page',
        'react',
        'nextjs',
        'html',
        'cli',
        'style-install',
        'available-styles',
        'style-reference',
        'scopes',
        'overrides',
        'tokens',
        'customization',
        'troubleshooting',
        'zero-to-production',
        'api-reference',
      ].includes(section.id) && (
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1rem' }}>
            {section.title}
          </h3>
          <p>{section.description}</p>
          <CodeBlock
            code={`// Example usage for ${section.title}
import { StyleEngine, defaultStyles } from 'design-library';

const engine = new StyleEngine(defaultStyles);
const resolved = engine.resolveStyleById('brutalism');
console.log('Resolved tokens:', resolved.tokens);`}
            language="tsx"
          />
        </div>
      )}

      {/* =========================================================================
          PREVIOUS / NEXT CONTEXTUAL NAVIGATION
          ========================================================================= */}
      <hr
        style={{
          border: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          margin: '3rem 0 2rem',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {prev ? (
          <button
            id="doc-prev-btn"
            onClick={() => onNavigateSection(prev.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.25rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(30, 41, 59, 0.4)',
              color: '#cbd5e1',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 120ms ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: '#94a3b8' }}>
              <ChevronLeft size={14} /> Previous
            </div>
            <div style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.9rem' }}>
              {prev.title}
            </div>
          </button>
        ) : <div />}

        {next ? (
          <button
            id="doc-next-btn"
            onClick={() => onNavigateSection(next.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.25rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(30, 41, 59, 0.4)',
              color: '#cbd5e1',
              cursor: 'pointer',
              textAlign: 'right',
              transition: 'all 120ms ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: '#94a3b8' }}>
              Next <ChevronRight size={14} />
            </div>
            <div style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.9rem' }}>
              {next.title}
            </div>
          </button>
        ) : <div />}
      </div>
    </div>
  );
};

