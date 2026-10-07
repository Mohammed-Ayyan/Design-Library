import React, { useState, useMemo } from 'react';
import { useStyleEngine } from '../react/context/StyleEngineContext';
import { ALL_29_STYLES } from '../styles/catalog';
import {
  wabiSabiSemanticCss,
  brutalistSemanticCss,
  minimalistSemanticCss,
  glassmorphismSemanticCss,
  maximalistSemanticCss,
  swissDesignSemanticCss,
  surrealDesignSemanticCss,
  neoBrutalistSemanticCss,
  neoClassicalSemanticCss,
  luxuryTypographySemanticCss,
  editorialDesignSemanticCss,
  y2kAestheticSemanticCss,
  bentoGridSemanticCss,
  pixelArtSemanticCss,
  conceptualSketchSemanticCss,
  etherealSemanticCss,
  bohemianSemanticCss,
  cyberpunkSemanticCss,
  anthropomorphicSemanticCss,
  neumorphicSemanticCss,
  darkModeUiSemanticCss,
  scrapbookSemanticCss,
  claymorphicSemanticCss,
  victorianSemanticCss,
  cybercoreSemanticCss,
  synthwaveSemanticCss,
  graffitiSemanticCss,
  gothicSemanticCss,
  mixedMediaSemanticCss,
  artDecoSemanticCss,
  bauhausSemanticCss,
  solarpunkSemanticCss,
} from '../styles';
import {
  Sparkles,
  ArrowRight,
  Code2,
  Columns,
  Eye,
  Copy,
  Check,
  SplitSquareVertical,
  Sliders,
  MousePointer,
  Wand2,
} from 'lucide-react';

interface TransformationHeroProps {
  onOpenPlayground: (styleId?: string) => void;
  onOpenDocs?: (styleId?: string) => void;
  selectedStyleId?: string;
  onSelectStyleId?: (styleId: string) => void;
}

const FEATURED_STYLES = [
  { id: 'wabi-sabi', name: 'Wabi-Sabi', tag: 'Organic Zen' },
  { id: 'brutalism', name: 'Brutalism', tag: 'Raw Contrast' },
  { id: 'minimalism', name: 'Minimalism', tag: 'Quiet Hierarchy' },
  { id: 'swiss-design', name: 'Swiss Design', tag: 'Objective Grid' },
  { id: 'glassmorphism', name: 'Glassmorphism', tag: 'Frosted Depth' },
  { id: 'cyberpunk', name: 'Cyberpunk', tag: 'Neon Terminal' },
  { id: 'bauhaus', name: 'Bauhaus', tag: 'Primary Geometry' },
  { id: 'art-deco', name: 'Art Deco', tag: '1920s Glamour' },
  { id: 'victorian', name: 'Victorian', tag: 'Ornate Print' },
  { id: 'gothic', name: 'Gothic', tag: 'Cathedral Stone' },
  { id: 'solarpunk', name: 'Solarpunk', tag: 'Eco Futurism' },
  { id: 'synthwave', name: 'Synthwave', tag: 'Retro Neon' },
];

interface ElementOverride {
  styleId?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  shadow?: string;
  padding?: string;
}

export const TransformationHero: React.FC<TransformationHeroProps> = ({
  onOpenPlayground,
  onOpenDocs: _onOpenDocs,
  selectedStyleId: propStyleId,
  onSelectStyleId,
}) => {
  const { engine } = useStyleEngine();
  const [internalStyleId, setInternalStyleId] = useState<string>('wabi-sabi');
  const selectedStyleId = propStyleId || internalStyleId;
  const setSelectedStyleId = (newId: string) => {
    setInternalStyleId(newId);
    if (onSelectStyleId) onSelectStyleId(newId);
  };
  const [viewMode, setViewMode] = useState<'preview' | 'structure-vs-style' | 'before-after'>('preview');
  const [copiedCode, setCopiedCode] = useState(false);

  // In-Place Element Selection & Editing State
  const [selectedElementId, setSelectedElementId] = useState<string | null>('button.primary');
  const [elementOverrides, setElementOverrides] = useState<Record<string, ElementOverride>>({});

  // Draggable Before/After Split State
  const [splitPos, setSplitPos] = useState<number>(50);
  const [isDraggingSplit, setIsDraggingSplit] = useState(false);

  const activeCatalog = useMemo(() => {
    return ALL_29_STYLES.find((s) => s.id === selectedStyleId) || ALL_29_STYLES[0];
  }, [selectedStyleId]);

  const resolved = useMemo(() => {
    return engine.resolveStyleById(selectedStyleId, 'page');
  }, [engine, selectedStyleId]);

  const activeStyles = useMemo(() => {
    return ALL_29_STYLES.filter((s) => s.status === 'active');
  }, []);

  const currentElementOverride = selectedElementId ? elementOverrides[selectedElementId] || {} : {};

  const handleUpdateElementOverride = (key: keyof ElementOverride, value: any) => {
    if (!selectedElementId) return;
    setElementOverrides((prev) => ({
      ...prev,
      [selectedElementId]: {
        ...prev[selectedElementId],
        [key]: value === 'default' ? undefined : value,
      },
    }));
  };

  const handleResetElement = () => {
    if (!selectedElementId) return;
    setElementOverrides((prev) => {
      const next = { ...prev };
      delete next[selectedElementId];
      return next;
    });
  };

  const getElementStyle = (elId: string): React.CSSProperties => {
    const ov = elementOverrides[elId] || {};
    const st: React.CSSProperties = {};
    if (ov.borderRadius) st.borderRadius = ov.borderRadius;
    if (ov.fontSize) st.fontSize = ov.fontSize;
    if (ov.fontWeight) st.fontWeight = ov.fontWeight;
    if (ov.shadow) st.boxShadow = ov.shadow;
    if (ov.padding) st.padding = ov.padding;
    return st;
  };

  const getElementScopedStyleId = (elId: string): string => {
    return elementOverrides[elId]?.styleId || selectedStyleId;
  };

  const rawHtmlSnippet = `<main>
  <nav>
    <a href="#">Studio</a>
    <a href="#">Capabilities</a>
    <a href="#">Pricing</a>
    <button>Get Started</button>
  </nav>

  <header>
    <p>Design Language Engine</p>
    <h1>Build interfaces that communicate instantly.</h1>
    <p>One source HTML structure. Infinite visual expressions.</p>
    <div>
      <button>Initialize Project</button>
      <button>View Catalog</button>
    </div>
  </header>

  <section>
    <h2>Core Principles</h2>
    <article>
      <h3>Zero DOM Mutation</h3>
      <p>Clean semantic markup with no injected classes or layout rewriting.</p>
    </article>
    <article>
      <h3>Authentic Visual Grammar</h3>
      <p>Materials, typography, and optical depth crafted with cultural intent.</p>
    </article>
  </section>

  <form>
    <label>Email Address</label>
    <input type="email" placeholder="ada@analytical.dev" />
    <button type="submit">Join Network</button>
  </form>

  <footer>
    <p>© 2026 Design Style Library</p>
  </footer>
</main>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`<div class="style-${selectedStyleId}" data-style="${selectedStyleId}">\n  <!-- Your HTML here -->\n</div>`);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSplitMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingSplit) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSplitPos(pct);
  };

  // Helper to render the canonical interface for comparison
  const renderCanonicalContent = () => (
    <main>
      <nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontWeight: 800, letterSpacing: '0.02em' }}>ACME ARCHITECTURE</span>
        </div>
        <div className="hero-nav-row">
          <a href="#overview">Overview</a>
          <a href="#work">Artifacts</a>
          <a href="#principles">Grammar</a>
          <button>Commission Project</button>
        </div>
      </nav>

      <header style={{ marginBottom: '3.5rem' }}>
        <p>AUTONOMOUS DESIGN COMPILER // {selectedStyleId.toUpperCase()}</p>
        <h1>One structure. Infinite design languages.</h1>
        <p>
          Write clean, semantic HTML once. The Style Engine compiles deliberate typography,
          material textures, border physics, and harmonic whitespace directly to your elements.
        </p>
        <div className="hero-btn-stack">
          <button>Initialize Project</button>
          <button>Inspect Specimen</button>
        </div>
      </header>

      <section style={{ marginBottom: '3.5rem' }}>
        <h2>Art-Directed Principles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <article>
            <h3>Zero DOM Mutation</h3>
            <p>Your HTML remains 100% untouched. No wrapper bloat, no artificial layouts, and no forced templates.</p>
            <button>Read Architecture</button>
          </article>
          <article>
            <h3>Cultural Authenticity</h3>
            <p>From Wabi-Sabi washi paper to Brutalist newsprint and Bauhaus primary geometry, every language possesses historical depth.</p>
            <button>Browse Languages</button>
          </article>
          <article>
            <h3>Production Pipeline</h3>
            <p>Export compiled stylesheets, bundle inside React or Vite projects, or automate via the command-line CLI tool.</p>
            <button>CLI Guide</button>
          </article>
        </div>
      </section>

      <section style={{ marginBottom: '3.5rem' }}>
        <h2>Licensing & Availability</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <article>
            <h3>Open Core</h3>
            <strong>$0 / developer</strong>
            <p>Permanent free access to all 32 design languages, CSS compilation, and React components.</p>
            <button>Download v1.0</button>
          </article>
          <article>
            <h3>Enterprise Studio</h3>
            <strong>$49 / seat</strong>
            <p>Dedicated token hosting, bespoke visual grammar compilers, and enterprise SLAs.</p>
            <button>Contact Studio</button>
          </article>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid currentColor', paddingTop: '1.5rem', opacity: 0.8 }}>
        <p>© 2026 Acme Architectural Software • Built with Design Style Engine v1.0</p>
      </footer>
    </main>
  );

  return (
    <section
      id="transformation-hero-section"
      className="hero-section-container"
      style={{
        maxWidth: '1360px',
        margin: '0 auto',
      }}
    >
      <style>{`
        .hero-section-container {
          padding: 2.5rem 1.5rem 4rem;
        }
        .hero-preview-pad {
          padding: 3rem 2.5rem 4rem;
        }
        .hero-switcher-rail {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .hero-btn-stack {
          display: flex;
          gap: 1rem;
          margin-top: 1.75rem;
          flex-wrap: wrap;
        }
        .hero-nav-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-left: auto;
        }
        @media (max-width: 640px) {
          .hero-section-container {
            padding: 1.5rem 1rem 2.5rem !important;
          }
          .hero-preview-pad {
            padding: 1.25rem 1rem 2rem !important;
          }
          .hero-btn-stack button {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-switcher-rail {
            justify-content: flex-start !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
            padding-bottom: 6px !important;
            width: 100% !important;
          }
          .hero-switcher-rail::-webkit-scrollbar {
            display: none !important;
          }
          .hero-switcher-rail button,
          .hero-switcher-rail div {
            flex-shrink: 0 !important;
          }
          .hero-nav-row {
            margin-left: 0 !important;
            width: 100% !important;
            justify-content: space-between !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
      {/* Editorial Laboratory Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.3rem 0.85rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            color: '#38bdf8',
            fontSize: '0.75rem',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.04em',
            marginBottom: '1rem',
          }}
        >
          <Sparkles size={13} />
          ONE STRUCTURE → 32 DESIGN LANGUAGES
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#f8fafc',
            margin: '0 0 1rem 0',
          }}
        >
          Transform this interface.
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#94a3b8',
            maxWidth: '750px',
            margin: '0 auto 1.5rem auto',
            lineHeight: 1.6,
          }}
        >
          The underlying semantic HTML remains 100% untouched. Select a design language or click any element
          to experience the live architectural transformation.
        </p>

        {/* Quick Launch CTA to Full Studio & Hybrids */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => onOpenPlayground(selectedStyleId)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.35rem',
              fontSize: '0.875rem',
              fontWeight: 700,
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(2, 132, 199, 0.45)',
              transition: 'all 120ms ease',
            }}
          >
            <Sparkles size={15} />
            Open in Design Studio
            <ArrowRight size={14} />
          </button>

          <button
            id="hero-explore-hybrids-btn"
            onClick={() => {
              const el = document.getElementById('style-hybrids-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.35rem',
              fontSize: '0.875rem',
              fontWeight: 700,
              borderRadius: '8px',
              border: '1px solid rgba(168, 85, 247, 0.45)',
              backgroundColor: 'rgba(168, 85, 247, 0.15)',
              color: '#c084fc',
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(168, 85, 247, 0.25)',
              transition: 'all 120ms ease',
            }}
          >
            <Wand2 size={15} />
            Explore Style Hybrids
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Prominent Style Switcher Bar */}
        <div className="hero-switcher-rail">
          {FEATURED_STYLES.map((st) => {
            const isSelected = selectedStyleId === st.id;
            return (
              <button
                key={st.id}
                id={`hero-style-select-${st.id}`}
                onClick={() => setSelectedStyleId(st.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '8px',
                  border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.15)' : '#1e293b',
                  color: isSelected ? '#38bdf8' : '#e2e8f0',
                  fontSize: '0.8125rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 120ms ease',
                }}
              >
                <span>{st.name}</span>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    color: isSelected ? '#7dd3fc' : '#64748b',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  [{st.tag}]
                </span>
              </button>
            );
          })}

          {/* Dropdown for All 32 Styles */}
          <div style={{ position: 'relative' }}>
            <select
              value={selectedStyleId}
              onChange={(e) => setSelectedStyleId(e.target.value)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                backgroundColor: '#0f172a',
                color: '#38bdf8',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option disabled>── All 32 Design Languages ──</option>
              {activeStyles.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.category})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Control Strip & Interactive Modes Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          backgroundColor: '#111726',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px 12px 0 0',
          padding: '0.75rem 1.25rem',
          marginBottom: 0,
        }}
      >
        {/* Left: Active Telemetry */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.6875rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
              ACTIVE LANGUAGE:
            </span>
            <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#f8fafc' }}>
              {activeCatalog.name}
            </span>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: activeCatalog.accentColor,
                display: 'inline-block',
                boxShadow: `0 0 8px ${activeCatalog.accentColor}`,
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>
            <span>FONT: {resolved.tokens.typography.fontFamilyBase.split(',')[0].replace(/['"]/g, '')}</span>
            <span>BG: {resolved.tokens.colors.background}</span>
            <span>RADIUS: {resolved.tokens.radii.md || '0px'}</span>
          </div>
        </div>

        {/* Right: View Mode Toggle & Copy */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', backgroundColor: '#090d16', borderRadius: '8px', padding: '3px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={() => setViewMode('preview')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: viewMode === 'preview' ? '#0284c7' : 'transparent',
                color: viewMode === 'preview' ? '#ffffff' : '#94a3b8',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Eye size={12} />
              Interactive Canvas
            </button>
            <button
              onClick={() => setViewMode('structure-vs-style')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: viewMode === 'structure-vs-style' ? '#0284c7' : 'transparent',
                color: viewMode === 'structure-vs-style' ? '#ffffff' : '#94a3b8',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Columns size={12} />
              Structure vs Style
            </button>
            <button
              onClick={() => setViewMode('before-after')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: viewMode === 'before-after' ? '#0284c7' : 'transparent',
                color: viewMode === 'before-after' ? '#ffffff' : '#94a3b8',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <SplitSquareVertical size={12} />
              Before / After Split
            </button>
          </div>

          <button
            onClick={handleCopyCode}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'none',
              border: 'none',
              color: copiedCode ? '#34d399' : '#38bdf8',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            {copiedCode ? <Check size={12} /> : <Copy size={12} />}
            {copiedCode ? 'Copied' : `Copy .style-${selectedStyleId}`}
          </button>
        </div>
      </div>

      {/* Embedded Element Inspector Bar (Shown when an element is clicked) */}
      {viewMode === 'preview' && selectedElementId && (
        <div
          style={{
            backgroundColor: '#0c101c',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '0.65rem 1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MousePointer size={13} color="#38bdf8" />
              <span style={{ fontSize: '0.6875rem', color: '#64748b', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                Selected:
              </span>
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#38bdf8', fontFamily: "'JetBrains Mono', monospace" }}>
                {selectedElementId.toUpperCase()}
              </span>
            </div>

            {/* Scoped Style Override for this element */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Scoped Style:</span>
              <select
                value={currentElementOverride.styleId || 'default'}
                onChange={(e) => handleUpdateElementOverride('styleId', e.target.value)}
                style={{
                  backgroundColor: '#171f33',
                  color: '#f8fafc',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  borderRadius: '5px',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  outline: 'none',
                }}
              >
                <option value="default">Default (Inherit: {selectedStyleId})</option>
                {activeStyles.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Corner Radius */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Radius:</span>
              <div style={{ display: 'flex', gap: '2px', backgroundColor: '#131b2e', borderRadius: '4px', padding: '2px' }}>
                {['0px', '4px', '8px', '16px', '9999px'].map((rad) => (
                  <button
                    key={rad}
                    onClick={() => handleUpdateElementOverride('borderRadius', rad)}
                    style={{
                      padding: '0.2rem 0.45rem',
                      fontSize: '0.6875rem',
                      borderRadius: '3px',
                      border: 'none',
                      backgroundColor: currentElementOverride.borderRadius === rad ? '#0284c7' : 'transparent',
                      color: currentElementOverride.borderRadius === rad ? '#fff' : '#94a3b8',
                      cursor: 'pointer',
                    }}
                  >
                    {rad === '9999px' ? 'Pill' : rad}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handleResetElement}
              style={{
                fontSize: '0.6875rem',
                color: '#94a3b8',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Reset
            </button>
            <button
              onClick={() => onOpenPlayground(selectedStyleId)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                backgroundColor: '#1e293b',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#38bdf8',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              <Sliders size={12} />
              Open in Studio Inspector
            </button>
          </div>
        </div>
      )}

      {/* MODE 1: LIVE INTERFACE PREVIEW (INTERACTIVE CLICK-TO-EDIT) */}
      {viewMode === 'preview' && (
        <div
          id="hero-live-preview-container"
          style={{
            borderRadius: '0 0 16px 16px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
            overflow: 'hidden',
          }}
        >
          <div
            className={`style-${selectedStyleId} lab-styled-preview hero-preview-pad`}
            data-style={selectedStyleId}
            style={{
              transition: 'all 200ms ease',
              minHeight: '600px',
            }}
          >
            {/* The Canonical Interface */}
            <main>
              {/* Navigation Bar */}
              <nav
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedElementId('nav');
                }}
                data-style={getElementScopedStyleId('nav')}
                style={{
                  ...getElementStyle('nav'),
                  cursor: 'pointer',
                  outline: selectedElementId === 'nav' ? '2px solid #38bdf8' : 'none',
                  outlineOffset: '4px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontWeight: 800, letterSpacing: '0.02em' }}>ACME ARCHITECTURE</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: 'auto' }}>
                  <a href="#overview">Overview</a>
                  <a href="#work">Artifacts</a>
                  <a href="#principles">Grammar</a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedElementId('button.commission');
                    }}
                    data-style={getElementScopedStyleId('button.commission')}
                    style={getElementStyle('button.commission')}
                  >
                    Commission Project
                  </button>
                </div>
              </nav>

              {/* Hero Section */}
              <header
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedElementId('header');
                }}
                data-style={getElementScopedStyleId('header')}
                style={{
                  ...getElementStyle('header'),
                  marginBottom: '4rem',
                  cursor: 'pointer',
                  outline: selectedElementId === 'header' ? '2px solid #38bdf8' : 'none',
                  outlineOffset: '4px',
                }}
              >
                <p>AUTONOMOUS DESIGN COMPILER // {selectedStyleId.toUpperCase()}</p>
                <h1
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedElementId('h1.hero-title');
                  }}
                  style={{
                    ...getElementStyle('h1.hero-title'),
                    cursor: 'pointer',
                    outline: selectedElementId === 'h1.hero-title' ? '2px solid #38bdf8' : 'none',
                    outlineOffset: '4px',
                  }}
                >
                  One structure. Infinite design languages.
                </h1>
                <p>
                  Write clean, semantic HTML once. The Style Engine compiles deliberate typography,
                  material textures, border physics, and harmonic whitespace directly to your elements.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem' }}>
                  <button
                    id="hero-interactive-cta-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedElementId('button.primary');
                    }}
                    data-style={getElementScopedStyleId('button.primary')}
                    style={{
                      ...getElementStyle('button.primary'),
                      cursor: 'pointer',
                      outline: selectedElementId === 'button.primary' ? '2px solid #38bdf8' : 'none',
                      outlineOffset: '4px',
                      boxShadow: selectedElementId === 'button.primary' ? '0 0 12px rgba(56, 189, 248, 0.6)' : undefined,
                    }}
                  >
                    Initialize Project
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedElementId('button.secondary');
                    }}
                    data-style={getElementScopedStyleId('button.secondary')}
                    style={{
                      ...getElementStyle('button.secondary'),
                      cursor: 'pointer',
                      outline: selectedElementId === 'button.secondary' ? '2px solid #38bdf8' : 'none',
                      outlineOffset: '4px',
                    }}
                  >
                    Inspect Specimen
                  </button>
                </div>
              </header>

              {/* Multi-Card Feature Grid */}
              <section style={{ marginBottom: '4rem' }}>
                <h2>Art-Directed Principles</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
                  <article
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedElementId('card.zero-mutation');
                    }}
                    data-style={getElementScopedStyleId('card.zero-mutation')}
                    style={{
                      ...getElementStyle('card.zero-mutation'),
                      cursor: 'pointer',
                      outline: selectedElementId === 'card.zero-mutation' ? '2px solid #38bdf8' : 'none',
                      outlineOffset: '4px',
                    }}
                  >
                    <h3>Zero DOM Mutation</h3>
                    <p>Your HTML remains 100% untouched. No wrapper bloat, no artificial layouts, and no forced templates.</p>
                    <button>Read Architecture</button>
                  </article>
                  <article
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedElementId('card.authenticity');
                    }}
                    data-style={getElementScopedStyleId('card.authenticity')}
                    style={{
                      ...getElementStyle('card.authenticity'),
                      cursor: 'pointer',
                      outline: selectedElementId === 'card.authenticity' ? '2px solid #38bdf8' : 'none',
                      outlineOffset: '4px',
                    }}
                  >
                    <h3>Cultural Authenticity</h3>
                    <p>From Wabi-Sabi washi paper to Brutalist newsprint and Bauhaus primary geometry, every language possesses historical depth.</p>
                    <button>Browse Languages</button>
                  </article>
                  <article
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedElementId('card.pipeline');
                    }}
                    data-style={getElementScopedStyleId('card.pipeline')}
                    style={{
                      ...getElementStyle('card.pipeline'),
                      cursor: 'pointer',
                      outline: selectedElementId === 'card.pipeline' ? '2px solid #38bdf8' : 'none',
                      outlineOffset: '4px',
                    }}
                  >
                    <h3>Production Pipeline</h3>
                    <p>Export compiled stylesheets, bundle inside React or Vite projects, or automate via the command-line CLI tool.</p>
                    <button>CLI Guide</button>
                  </article>
                </div>
              </section>

              {/* Pricing & Inquiry Section */}
              <section style={{ marginBottom: '4rem' }}>
                <h2>Licensing & Availability</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
                  <article>
                    <h3>Open Core</h3>
                    <strong>$0 / developer</strong>
                    <p>Permanent free access to all 32 design languages, CSS compilation, and React components.</p>
                    <button>Download v1.0</button>
                  </article>
                  <article>
                    <h3>Enterprise Studio</h3>
                    <strong>$49 / seat</strong>
                    <p>Dedicated token hosting, bespoke visual grammar compilers, and enterprise SLAs.</p>
                    <button>Contact Studio</button>
                  </article>
                </div>
              </section>

              {/* Contact Form */}
              <section style={{ marginBottom: '4rem' }}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <p>INQUIRY DISPATCH</p>
                  <h2>Request Design Review</h2>
                  <div style={{ marginBottom: '1rem' }}>
                    <label>Engineering Handle</label>
                    <input type="text" placeholder="@designer-engineer" defaultValue="@ada_lovelace" />
                  </div>
                  <button type="submit">Transmit Specification</button>
                </form>
              </section>

              {/* Footer */}
              <footer style={{ borderTop: '1px solid currentColor', paddingTop: '1.5rem', opacity: 0.8 }}>
                <p>© 2026 Acme Architectural Software • Built with Design Style Engine v1.0</p>
              </footer>
            </main>
          </div>
        </div>
      )}

      {/* MODE 2: STRUCTURE VS STYLE (SPLIT COMPARISON) */}
      {viewMode === 'structure-vs-style' && (
        <div
          id="hero-structure-vs-style-container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* LEFT: Raw Source HTML */}
          <div
            style={{
              backgroundColor: '#0c101c',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                backgroundColor: '#111726',
                padding: '0.75rem 1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code2 size={14} color="#38bdf8" />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>
                  STRUCTURE (100% UNCHANGED SOURCE HTML)
                </span>
              </div>
            </div>
            <pre
              style={{
                margin: 0,
                padding: '1.5rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                lineHeight: 1.6,
                color: '#94a3b8',
                overflowY: 'auto',
                maxHeight: '560px',
              }}
            >
              {rawHtmlSnippet}
            </pre>
          </div>

          {/* RIGHT: Rendered Visual Design Language */}
          <div
            style={{
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              overflow: 'hidden',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                backgroundColor: '#111726',
                padding: '0.75rem 1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: activeCatalog.accentColor, fontFamily: "'JetBrains Mono', monospace" }}>
                STYLE: {selectedStyleId.toUpperCase()} (PURE COMPILED CSS)
              </span>
              <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>
                {activeCatalog.name}
              </span>
            </div>

            <div
              className={`style-${selectedStyleId} lab-styled-preview`}
              data-style={selectedStyleId}
              style={{
                padding: '2rem',
                overflowY: 'auto',
                maxHeight: '560px',
                flex: 1,
              }}
            >
              {renderCanonicalContent()}
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: BEFORE / AFTER DRAGGABLE SLIDER */}
      {viewMode === 'before-after' && (
        <div
          id="hero-before-after-container"
          style={{
            position: 'relative',
            width: '100%',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
            overflow: 'hidden',
            userSelect: 'none',
            cursor: isDraggingSplit ? 'ew-resize' : 'default',
          }}
          onMouseMove={handleSplitMouseMove}
          onMouseUp={() => setIsDraggingSplit(false)}
          onMouseLeave={() => setIsDraggingSplit(false)}
        >
          {/* Styled Version (Background) */}
          <div
            className={`style-${selectedStyleId} lab-styled-preview`}
            data-style={selectedStyleId}
            style={{
              padding: '3rem 2.5rem',
              minHeight: '580px',
            }}
          >
            {renderCanonicalContent()}
          </div>

          {/* Raw Semantic HTML Version (Clipped Overlay) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: `${splitPos}%`,
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              color: '#000000',
              borderRight: '3px solid #38bdf8',
            }}
          >
            <div
              style={{
                width: '1360px',
                padding: '3rem 2.5rem',
                fontFamily: 'initial',
              }}
            >
              {renderCanonicalContent()}
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            onMouseDown={() => setIsDraggingSplit(true)}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `calc(${splitPos}% - 16px)`,
              width: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'ew-resize',
              zIndex: 50,
            }}
          >
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#38bdf8',
                boxShadow: '0 0 14px rgba(56, 189, 248, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#090d16',
                fontWeight: 800,
                fontSize: '12px',
              }}
            >
              ⇄
            </div>
          </div>

          {/* Badges for Before / After */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '4px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 700,
              zIndex: 60,
            }}
          >
            BEFORE: PLAIN BROWSER HTML
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '4px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 700,
              zIndex: 60,
            }}
          >
            AFTER: {selectedStyleId.toUpperCase()}
          </div>
        </div>
      )}

      {/* Embedded Semantic Style Injection */}
      <style>{`
        ${selectedStyleId === 'wabi-sabi' ? wabiSabiSemanticCss : ''}
        ${selectedStyleId === 'brutalism' ? brutalistSemanticCss : ''}
        ${selectedStyleId === 'minimalism' ? minimalistSemanticCss : ''}
        ${selectedStyleId === 'glassmorphism' ? glassmorphismSemanticCss : ''}
        ${selectedStyleId === 'maximalism' ? maximalistSemanticCss : ''}
        ${selectedStyleId === 'swiss-design' ? swissDesignSemanticCss : ''}
        ${selectedStyleId === 'surrealism' ? surrealDesignSemanticCss : ''}
        ${selectedStyleId === 'neo-brutalism' ? neoBrutalistSemanticCss : ''}
        ${selectedStyleId === 'neo-classical' ? neoClassicalSemanticCss : ''}
        ${selectedStyleId === 'luxury-typography' ? luxuryTypographySemanticCss : ''}
        ${selectedStyleId === 'editorial-design' ? editorialDesignSemanticCss : ''}
        ${selectedStyleId === 'y2k-aesthetic' ? y2kAestheticSemanticCss : ''}
        ${selectedStyleId === 'bento-grid' ? bentoGridSemanticCss : ''}
        ${selectedStyleId === 'pixel-art' ? pixelArtSemanticCss : ''}
        ${selectedStyleId === 'conceptual-sketch' ? conceptualSketchSemanticCss : ''}
        ${selectedStyleId === 'ethereal' ? etherealSemanticCss : ''}
        ${selectedStyleId === 'bohemian' ? bohemianSemanticCss : ''}
        ${selectedStyleId === 'cyberpunk' ? cyberpunkSemanticCss : ''}
        ${selectedStyleId === 'anthropomorphic' ? anthropomorphicSemanticCss : ''}
        ${selectedStyleId === 'neumorphism' ? neumorphicSemanticCss : ''}
        ${selectedStyleId === 'dark-mode-ui' ? darkModeUiSemanticCss : ''}
        ${selectedStyleId === 'scrapbook' ? scrapbookSemanticCss : ''}
        ${selectedStyleId === 'claymorphism' ? claymorphicSemanticCss : ''}
        ${selectedStyleId === 'victorian' ? victorianSemanticCss : ''}
        ${selectedStyleId === 'cybercore' ? cybercoreSemanticCss : ''}
        ${selectedStyleId === 'synthwave' ? synthwaveSemanticCss : ''}
        ${selectedStyleId === 'graffiti' ? graffitiSemanticCss : ''}
        ${selectedStyleId === 'gothic' ? gothicSemanticCss : ''}
        ${selectedStyleId === 'mixed-media' ? mixedMediaSemanticCss : ''}
        ${selectedStyleId === 'art-deco' ? artDecoSemanticCss : ''}
        ${selectedStyleId === 'bauhaus' ? bauhausSemanticCss : ''}
        ${selectedStyleId === 'solarpunk' ? solarpunkSemanticCss : ''}
      `}</style>
    </section>
  );
};
