import { useState, useMemo } from 'react';
import { StyleScope } from '../react/components/StyleScope';
import { Heading } from '../react/components/Heading';
import { Paragraph } from '../react/components/Paragraph';
import { Button } from '../react/components/Button';
import { Card } from '../react/components/Card';
import { Badge } from '../react/components/Badge';
import { ALL_29_STYLES } from '../styles/catalog';
import { useStyleEngine } from '../react/context/StyleEngineContext';
import {
  RotateCcw,
  Check,
  Layers,
  Code2,
  Eye,
  Copy,
  Terminal,
} from 'lucide-react';

export type PlaygroundTarget = 'page' | 'hero' | 'features' | 'card' | 'cta-button';

interface PlaygroundProps {
  initialStyleId?: string;
}

export const Playground: React.FC<PlaygroundProps> = ({ initialStyleId }) => {
  const { engine } = useStyleEngine();
  const [selectedTarget, setSelectedTarget] = useState<PlaygroundTarget>('hero');
  const [selectedStyle, setSelectedStyle] = useState<string>(initialStyleId || 'wabi-sabi');
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  // Applied styles per target
  const [appliedStyles, setAppliedStyles] = useState<Record<PlaygroundTarget, string | null>>({
    page: null,
    hero: initialStyleId || 'wabi-sabi',
    features: null,
    card: null,
    'cta-button': null,
  });

  const availableStyles = useMemo(() => {
    return [
      { id: 'base', name: 'Neutral Base', category: 'Base' },
      ...ALL_29_STYLES.filter((s) => s.status === 'active').map((s) => ({
        id: s.id,
        name: s.name,
        category: s.category,
      })),
    ];
  }, []);

  const targets: { id: PlaygroundTarget; label: string; scope: string }[] = [
    { id: 'page', label: 'Entire Page', scope: 'PAGE' },
    { id: 'hero', label: 'Hero Section', scope: 'SECTION' },
    { id: 'features', label: 'Features Section', scope: 'SECTION' },
    { id: 'card', label: 'Feature Card', scope: 'COMPONENT' },
    { id: 'cta-button', label: 'CTA Button', scope: 'ELEMENT' },
  ];

  const handleApply = () => {
    setAppliedStyles((prev) => ({
      ...prev,
      [selectedTarget]: selectedStyle,
    }));
  };

  const handleResetTarget = () => {
    setAppliedStyles((prev) => ({
      ...prev,
      [selectedTarget]: null,
    }));
  };

  const handleResetAll = () => {
    setAppliedStyles({
      page: null,
      hero: null,
      features: null,
      card: null,
      'cta-button': null,
    });
  };

  // Resolved tokens for telemetry inspection
  const resolvedActive = useMemo(() => {
    return engine.resolveStyleById(selectedStyle, 'page');
  }, [engine, selectedStyle]);

  const activeOverridesCount = Object.values(appliedStyles).filter(Boolean).length;

  const handleCopy = (text: string, tab: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <section
      id="playground-view"
      className="playground-container"
      style={{
        maxWidth: '1360px',
        margin: '0 auto',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        .playground-container {
          padding: 2rem 1.5rem 6rem;
        }
        .playground-grid {
          display: grid;
          grid-template-columns: 320px minmax(0, 1fr) 280px;
          gap: 1.5rem;
          align-items: start;
          margin-bottom: 2rem;
        }
        @media (max-width: 1120px) {
          .playground-grid {
            grid-template-columns: 280px minmax(0, 1fr);
          }
          .playground-telemetry-col {
            grid-column: span 2;
          }
        }
        @media (max-width: 768px) {
          .playground-container {
            padding: 1.25rem 1rem 3rem !important;
          }
          .playground-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .playground-telemetry-col {
            grid-column: span 1 !important;
          }
          .playground-header-title {
            font-size: 1.65rem !important;
          }
        }
      `}</style>
      {/* Playground Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: '#38bdf8', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
            INTERACTIVE LABORATORY
          </span>
          <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.6rem', borderRadius: '9999px', backgroundColor: '#1e293b', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>
            Target Scoping & Token Cascade
          </span>
        </div>
        <h1 className="playground-header-title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem', letterSpacing: '-0.025em' }}>
          Visual Style Engine Playground
        </h1>
        <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9375rem', maxWidth: '780px', lineHeight: 1.55 }}>
          Test contextual style scoping. Apply any of the 32 design languages globally to the whole page,
          or target specific subtrees (Hero, Features, Card, or CTA Button) to observe cascading isolation.
        </p>
      </div>

      {/* 3-COLUMN WORKBENCH: LEFT (Controls) | CENTER (Live Interface) | RIGHT (Telemetry) */}
      <div className="playground-grid">
        {/* LEFT COLUMN: STYLE & TARGET SELECTOR */}
        <div
          style={{
            backgroundColor: '#0f172a',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.35)',
          }}
        >
          {/* Target Scope Selection */}
          <div>
            <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
              1. SELECT TARGET SCOPE
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {targets.map((t) => {
                const isSelected = selectedTarget === t.id;
                const hasApplied = Boolean(appliedStyles[t.id]);

                return (
                  <button
                    key={t.id}
                    id={`target-select-${t.id}`}
                    onClick={() => setSelectedTarget(t.id)}
                    style={{
                      padding: '0.5rem 0.75rem',
                      fontSize: '0.8125rem',
                      fontWeight: isSelected ? 700 : 500,
                      borderRadius: '8px',
                      border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.15)' : '#1e293b',
                      color: isSelected ? '#38bdf8' : '#cbd5e1',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 120ms ease',
                      textAlign: 'left',
                    }}
                  >
                    <span>{t.label}</span>
                    {hasApplied ? (
                      <span style={{ fontSize: '0.6875rem', padding: '0.1rem 0.4rem', borderRadius: '4px', backgroundColor: 'rgba(52, 211, 153, 0.2)', color: '#34d399', fontWeight: 700 }}>
                        {appliedStyles[t.id]?.toUpperCase()}
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.6875rem', color: '#64748b' }}>default</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Style Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
              2. SELECT DESIGN LANGUAGE
            </label>
            <div
              style={{
                maxHeight: '260px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                paddingRight: '0.25rem',
              }}
            >
              {availableStyles.map((s) => {
                const isSelected = selectedStyle === s.id;
                return (
                  <button
                    key={s.id}
                    id={`style-select-${s.id}`}
                    onClick={() => setSelectedStyle(s.id)}
                    style={{
                      padding: '0.45rem 0.65rem',
                      fontSize: '0.8125rem',
                      fontWeight: isSelected ? 700 : 500,
                      borderRadius: '6px',
                      border: isSelected ? '1px solid #818cf8' : '1px solid transparent',
                      backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                      color: isSelected ? '#a5b4fc' : '#cbd5e1',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                    }}
                  >
                    <span>{s.name}</span>
                    <span style={{ fontSize: '0.6875rem', color: '#64748b' }}>{s.category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              id="playground-apply-btn"
              onClick={handleApply}
              style={{
                width: '100%',
                padding: '0.65rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#0284c7',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)',
              }}
            >
              <Check size={16} />
              Apply to {targets.find((t) => t.id === selectedTarget)?.label}
            </button>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                id="playground-reset-target-btn"
                onClick={handleResetTarget}
                style={{
                  flex: 1,
                  padding: '0.45rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: '#1e293b',
                  color: '#cbd5e1',
                  cursor: 'pointer',
                }}
              >
                Reset Scope
              </button>
              <button
                id="playground-reset-all-btn"
                onClick={handleResetAll}
                style={{
                  flex: 1,
                  padding: '0.45rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  borderRadius: '6px',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  color: '#fca5a5',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.25rem',
                }}
              >
                <RotateCcw size={12} />
                Reset All
              </button>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: LIVE INTERFACE CANVAS / CODE */}
        <div
          style={{
            backgroundColor: '#0f172a',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.35)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Canvas Top Bar */}
          <div
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: '#1e293b',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f8fafc', fontFamily: "'JetBrains Mono', monospace" }}>
                CANVAS SCOPE HIERARCHY
              </span>
              <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>
                ({activeOverridesCount} overrides active)
              </span>
            </div>

            {/* Toggle Preview / Code */}
            <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: '#0f172a', padding: '0.2rem', borderRadius: '6px' }}>
              <button
                id="playground-view-preview-btn"
                onClick={() => setViewMode('preview')}
                style={{
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.75rem',
                  fontWeight: viewMode === 'preview' ? 700 : 500,
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: viewMode === 'preview' ? '#38bdf8' : 'transparent',
                  color: viewMode === 'preview' ? '#090d16' : '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                <Eye size={12} />
                Preview
              </button>
              <button
                id="playground-view-code-btn"
                onClick={() => setViewMode('code')}
                style={{
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.75rem',
                  fontWeight: viewMode === 'code' ? 700 : 500,
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: viewMode === 'code' ? '#38bdf8' : 'transparent',
                  color: viewMode === 'code' ? '#090d16' : '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                <Code2 size={12} />
                Code
              </button>
            </div>
          </div>

          {/* Canvas Rendering Area */}
          <div id="playground-canvas" style={{ minHeight: '520px', padding: '1.5rem', overflowY: 'auto' }}>
            {viewMode === 'preview' ? (
              <StyleScope level="page" styleId={appliedStyles.page || 'base'}>
                <div
                  style={{
                    backgroundColor: 'var(--ds-color-background)',
                    color: 'var(--ds-color-text-primary)',
                    minHeight: '480px',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid var(--ds-color-border, #e2e8f0)',
                    transition: 'all 200ms ease',
                  }}
                >
                  {/* Hero Scope */}
                  <StyleScope level="section" styleId={appliedStyles.hero || undefined}>
                    <div style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: 'var(--ds-border-width-base) var(--ds-border-style) var(--ds-color-border)' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Badge>Hero Scope</Badge>
                        {appliedStyles.hero && <Badge>{appliedStyles.hero.toUpperCase()}</Badge>}
                      </div>
                      <Heading level={1}>Laboratory Interactive Preview</Heading>
                      <Paragraph style={{ maxWidth: '600px' }}>
                        Cascading design language compilation across arbitrary components.
                      </Paragraph>
                      <div style={{ marginTop: '1rem' }}>
                        <StyleScope level="element" styleId={appliedStyles['cta-button'] || undefined}>
                          <Button onClick={() => alert('CTA Pressed!')}>
                            Execute Action
                          </Button>
                        </StyleScope>
                      </div>
                    </div>
                  </StyleScope>

                  {/* Features Scope */}
                  <StyleScope level="section" styleId={appliedStyles.features || undefined}>
                    <div>
                      <Heading level={2}>Nested Component Scopes</Heading>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
                        <StyleScope level="component" styleId={appliedStyles.card || undefined}>
                          <Card>
                            <Heading level={3}>Scoped Card A</Heading>
                            <Paragraph style={{ fontSize: '0.875rem' }}>
                              Dictated by Card Scope tokens.
                            </Paragraph>
                          </Card>
                        </StyleScope>

                        <Card>
                          <Heading level={3}>Inherited Card B</Heading>
                          <Paragraph style={{ fontSize: '0.875rem' }}>
                            Inherits from Section or Page.
                          </Paragraph>
                        </Card>
                      </div>
                    </div>
                  </StyleScope>
                </div>
              </StyleScope>
            ) : (
              <pre
                style={{
                  margin: 0,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8125rem',
                  color: '#38bdf8',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap',
                }}
              >
{`// React Nested Scoping Example
<StyleScope level="page" styleId="${appliedStyles.page || 'base'}">
  <StyleScope level="section" styleId="${appliedStyles.hero || 'inherited'}">
    <HeroSection>
      <StyleScope level="element" styleId="${appliedStyles['cta-button'] || 'inherited'}">
        <Button>Execute Action</Button>
      </StyleScope>
    </HeroSection>
  </StyleScope>

  <StyleScope level="section" styleId="${appliedStyles.features || 'inherited'}">
    <StyleScope level="component" styleId="${appliedStyles.card || 'inherited'}">
      <Card>Scoped Card</Card>
    </StyleScope>
  </StyleScope>
</StyleScope>`}
              </pre>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: TOKEN & VARIABLE TELEMETRY */}
        <div
          className="playground-telemetry-col"
          style={{
            backgroundColor: '#0f172a',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.35)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.5rem' }}>
            <Layers size={14} color="#38bdf8" />
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', color: '#f8fafc', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
              ACTIVE TOKENS
            </span>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>
            <div>
              <span style={{ color: '#64748b' }}>ACTIVE STYLE: </span>
              <span style={{ color: '#38bdf8', fontWeight: 700 }}>{selectedStyle.toUpperCase()}</span>
            </div>

            <div>
              <span style={{ color: '#64748b' }}>CANVAS: </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: resolvedActive.tokens.colors.background, border: '1px solid rgba(255,255,255,0.2)' }} />
                <span style={{ color: '#cbd5e1' }}>{resolvedActive.tokens.colors.background}</span>
              </div>
            </div>

            <div>
              <span style={{ color: '#64748b' }}>PRIMARY: </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: resolvedActive.tokens.colors.primary }} />
                <span style={{ color: resolvedActive.tokens.colors.primary, fontWeight: 700 }}>
                  {resolvedActive.tokens.colors.primary}
                </span>
              </div>
            </div>

            <div>
              <span style={{ color: '#64748b' }}>RADIUS (MD): </span>
              <div style={{ color: '#cbd5e1' }}>{resolvedActive.tokens.radii.md || '0px'}</div>
            </div>

            <div>
              <span style={{ color: '#64748b' }}>BORDER: </span>
              <div style={{ color: '#cbd5e1' }}>
                {resolvedActive.tokens.borders.widthBase || '1px'} {resolvedActive.tokens.borders.style || 'solid'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: GENERATED USAGE LABORATORY WITH 1-CLICK COPY */}
      <div
        style={{
          backgroundColor: '#0f172a',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.25rem 1.5rem',
          boxShadow: '0 12px 28px rgba(0, 0, 0, 0.35)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={16} color="#38bdf8" />
            <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
              GENERATED INTEGRATION CODE FOR {selectedStyle.toUpperCase()}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => handleCopy(`<div class="style-${selectedStyle}">\n  <!-- Content -->\n</div>`, 'html')}
              style={{
                padding: '0.35rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: copiedTab === 'html' ? 'rgba(52, 211, 153, 0.2)' : '#1e293b',
                color: copiedTab === 'html' ? '#34d399' : '#cbd5e1',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              {copiedTab === 'html' ? <Check size={12} /> : <Copy size={12} />}
              Copy HTML Class
            </button>

            <button
              onClick={() => handleCopy(`npx design-library apply ./page.html --style ${selectedStyle} --standalone -o output.html`, 'cli')}
              style={{
                padding: '0.35rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: copiedTab === 'cli' ? 'rgba(52, 211, 153, 0.2)' : '#1e293b',
                color: copiedTab === 'cli' ? '#34d399' : '#cbd5e1',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              {copiedTab === 'cli' ? <Check size={12} /> : <Copy size={12} />}
              Copy CLI Command
            </button>
          </div>
        </div>

        <pre
          style={{
            margin: 0,
            padding: '1rem',
            backgroundColor: '#020617',
            borderRadius: '8px',
            border: '1px solid #1e293b',
            color: '#38bdf8',
            fontSize: '0.8125rem',
            fontFamily: "'JetBrains Mono', monospace",
            overflowX: 'auto',
          }}
        >
{`<!-- Plain HTML -->
<div class="style-${selectedStyle}">
  <h1>Transformed Heading</h1>
  <button>Action</button>
</div>

<!-- React -->
<StyleScope level="${selectedTarget}" styleId="${selectedStyle}">
  <YourComponents />
</StyleScope>

<!-- CLI -->
npx design-library apply ./index.html --style ${selectedStyle} --standalone -o output.html`}
        </pre>
      </div>
    </section>
  );
};
