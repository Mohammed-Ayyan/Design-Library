import { useState } from 'react';
import { StyleScope } from '../react/components/StyleScope';
import { Heading } from '../react/components/Heading';
import { Paragraph } from '../react/components/Paragraph';
import { Button } from '../react/components/Button';
import { Card } from '../react/components/Card';
import { Input } from '../react/components/Input';
import { Badge } from '../react/components/Badge';
import { ALL_29_STYLES } from '../styles/catalog';
import { useStyleEngine } from '../react/context/StyleEngineContext';
import {
  X,
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Palette,
  Type,
  Box,
  Layers,
} from 'lucide-react';

interface StyleDetailModalProps {
  styleId: string | null;
  onClose: () => void;
  onOpenInPlayground: (styleId: string) => void;
  onOpenDocs?: (styleId?: string) => void;
}

export const StyleDetailModal: React.FC<StyleDetailModalProps> = ({
  styleId,
  onClose,
  onOpenInPlayground,
  onOpenDocs,
}) => {
  const { engine } = useStyleEngine();
  const [activeTab, setActiveTab] = useState<'specimen' | 'tokens' | 'code'>('specimen');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!styleId) return null;

  const catalogInfo = ALL_29_STYLES.find((s) => s.id === styleId);
  const styleTitle = catalogInfo ? catalogInfo.name : styleId;
  const resolved = engine.resolveStyleById(styleId, 'page');
  const tokens = resolved.tokens;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        boxSizing: 'border-box',
      }}
      onClick={onClose}
    >
      <div
        id="style-detail-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1120px',
          maxHeight: '92vh',
          backgroundColor: '#0f172a',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Modal Top Control Bar */}
        <div
          style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#1e293b',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                color: '#38bdf8',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              SPECIMEN // {styleId.toUpperCase()}
            </span>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
              {styleTitle}
            </span>
            <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
              • {catalogInfo?.category}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {onOpenDocs && (
              <button
                id="detail-modal-docs-btn"
                onClick={() => {
                  onClose();
                  onOpenDocs(styleId);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  color: '#fcd34d',
                  cursor: 'pointer',
                }}
              >
                <BookOpen size={13} />
                Use this style
              </button>
            )}

            <button
              id="detail-modal-playground-btn"
              onClick={() => {
                onClose();
                onOpenInPlayground(styleId);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#0284c7',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              <Sparkles size={13} />
              Open in Design Studio
            </button>

            <button
              id="close-style-detail-btn"
              onClick={onClose}
              style={{
                padding: '0.4rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'transparent',
                color: '#cbd5e1',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Secondary Navigation: 3 Experience Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: '#0b1120',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <button
            onClick={() => setActiveTab('specimen')}
            style={{
              padding: '0.4rem 0.75rem',
              fontSize: '0.8125rem',
              fontWeight: activeTab === 'specimen' ? 700 : 500,
              border: 'none',
              background: 'none',
              color: activeTab === 'specimen' ? '#38bdf8' : '#94a3b8',
              borderBottom: activeTab === 'specimen' ? '2px solid #38bdf8' : '2px solid transparent',
              cursor: 'pointer',
            }}
          >
            Live Specimen & Components
          </button>

          <button
            onClick={() => setActiveTab('tokens')}
            style={{
              padding: '0.4rem 0.75rem',
              fontSize: '0.8125rem',
              fontWeight: activeTab === 'tokens' ? 700 : 500,
              border: 'none',
              background: 'none',
              color: activeTab === 'tokens' ? '#38bdf8' : '#94a3b8',
              borderBottom: activeTab === 'tokens' ? '2px solid #38bdf8' : '2px solid transparent',
              cursor: 'pointer',
            }}
          >
            Philosophy & Token System
          </button>

          <button
            onClick={() => setActiveTab('code')}
            style={{
              padding: '0.4rem 0.75rem',
              fontSize: '0.8125rem',
              fontWeight: activeTab === 'code' ? 700 : 500,
              border: 'none',
              background: 'none',
              color: activeTab === 'code' ? '#38bdf8' : '#94a3b8',
              borderBottom: activeTab === 'code' ? '2px solid #38bdf8' : '2px solid transparent',
              cursor: 'pointer',
            }}
          >
            Integration & Code Usage
          </button>
        </div>

        {/* Scrollable Modal Content Body */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '2rem' }}>
          {/* TAB 1: LIVE SPECIMEN & COMPONENTS */}
          {activeTab === 'specimen' && (
            <div>
              {/* Philosophy Banner */}
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ margin: '0 0 0.4rem', fontSize: '1.25rem', fontWeight: 600, color: '#f8fafc' }}>
                  "{catalogInfo?.tagline}"
                </p>
                <p style={{ margin: 0, fontSize: '0.9375rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {catalogInfo?.description}
                </p>
              </div>

              {/* LIVE COMPILED SPECIMEN CANVAS */}
              <div
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  overflow: 'hidden',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)',
                  marginBottom: '2rem',
                }}
              >
                <StyleScope level="page" styleId={styleId}>
                  <div
                    id="style-preview-canvas"
                    style={{
                      padding: '2.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2.5rem',
                      backgroundColor: 'var(--ds-color-background)',
                      color: 'var(--ds-color-text-primary)',
                      transition: 'all 200ms ease',
                    }}
                  >
                    {/* 1. Header with Eyebrow, Heading, Paragraph */}
                    <header>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <Badge>{styleTitle} Language</Badge>
                        <Badge>Style Engine Compiled</Badge>
                      </div>
                      <Heading level={1}>
                        The Visual Grammar of {styleTitle}
                      </Heading>
                      <Paragraph style={{ maxWidth: '680px' }}>
                        Every single token—from the letter-spacing of this heading to the corner geometry
                        of the cards, the border thickness, and the button tactile press—is dictated by
                        the {styleTitle} Style Definition.
                      </Paragraph>
                    </header>

                    {/* 2. Interactive Components Showcase */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      <Card>
                        <Heading level={3}>Primary Actions</Heading>
                        <Paragraph style={{ fontSize: '0.875rem' }}>
                          Button micro-interactions, focus rings, and tactile offsets.
                        </Paragraph>
                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                          <Button onClick={() => alert(`${styleTitle} primary button clicked!`)}>
                            Primary Action
                          </Button>
                        </div>
                      </Card>

                      <Card>
                        <Heading level={3}>Form Controls</Heading>
                        <Paragraph style={{ fontSize: '0.875rem' }}>
                          Surface depth and focus borders matched to the style.
                        </Paragraph>
                        <div style={{ marginTop: '0.75rem' }}>
                          <Input placeholder="Enter email address..." />
                        </div>
                      </Card>
                    </div>

                    {/* 3. Full Semantic Section Snippet */}
                    <div
                      style={{
                        padding: '1.5rem',
                        borderTop: 'var(--ds-border-width-base) var(--ds-border-style) var(--ds-color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '1rem',
                      }}
                    >
                      <div>
                        <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>Full-Page Architecture</span>
                        <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', opacity: 0.75 }}>
                          Zero DOM mutation. The source HTML structure remains completely clean.
                        </p>
                      </div>
                      <Button onClick={() => onOpenInPlayground(styleId)}>
                        Open Laboratory Specimen
                      </Button>
                    </div>
                  </div>
                </StyleScope>
              </div>
            </div>
          )}

          {/* TAB 2: PHILOSOPHY & TOKEN SYSTEM */}
          {activeTab === 'tokens' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* 1. Typography Scales */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Type size={18} color="#38bdf8" />
                  Typography Scale
                </h3>
                <div style={{ backgroundColor: '#020617', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <div style={{ marginBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>HEADING FONT FAMILY: </span>
                    <strong style={{ color: '#f8fafc' }}>{tokens.typography.fontFamilyHeading || tokens.typography.fontFamilyBase}</strong>
                  </div>
                  <div style={{ marginBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>BODY FONT FAMILY: </span>
                    <strong style={{ color: '#f8fafc' }}>{tokens.typography.fontFamilyBase}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>MONOSPACE FONT: </span>
                    <strong style={{ color: '#f8fafc' }}>{tokens.typography.fontFamilyMono || 'monospace'}</strong>
                  </div>
                </div>
              </div>

              {/* 2. Color System Swatches */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Palette size={18} color="#38bdf8" />
                  Color System Swatches
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
                  {Object.entries(tokens.colors).map(([name, hex]) => {
                    const colorStr = String(hex);
                    return (
                      <div
                        key={name}
                        onClick={() => handleCopy(colorStr, name)}
                        style={{
                          backgroundColor: '#1e293b',
                          borderRadius: '10px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '0.75rem',
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            height: '42px',
                            borderRadius: '6px',
                            backgroundColor: colorStr,
                            marginBottom: '0.5rem',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        />
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#f8fafc', textTransform: 'capitalize' }}>
                          {name}
                        </div>
                        <div style={{ fontSize: '0.6875rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>
                          {colorStr}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Geometry & Material Surfaces */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ backgroundColor: '#020617', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <h4 style={{ margin: '0 0 0.75rem', fontSize: '0.9375rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Box size={16} />
                    Geometry & Radii
                  </h4>
                  <div style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
                    <div>Corner Radius (md): <strong style={{ color: '#f8fafc' }}>{tokens.radii.md || '0px'}</strong></div>
                    <div>Border Thickness: <strong style={{ color: '#f8fafc' }}>{tokens.borders.widthBase || '1px'}</strong></div>
                    <div>Border Style: <strong style={{ color: '#f8fafc' }}>{tokens.borders.style || 'solid'}</strong></div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#020617', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <h4 style={{ margin: '0 0 0.75rem', fontSize: '0.9375rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Layers size={16} />
                    Surfaces & Depth
                  </h4>
                  <div style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
                    <div>Surface Canvas: <strong style={{ color: '#f8fafc' }}>{tokens.colors.surface}</strong></div>
                    <div>Backdrop Blur: <strong style={{ color: '#f8fafc' }}>{tokens.effects.backdropBlur || 'none'}</strong></div>
                    <div>Shadow Depth: <strong style={{ color: '#f8fafc' }}>{tokens.shadows.md || 'none'}</strong></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INTEGRATION & CODE USAGE */}
          {activeTab === 'code' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* HTML Usage */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f8fafc' }}>
                    1. Plain HTML Container Class
                  </span>
                  <button
                    onClick={() => handleCopy(`<div class="style-${styleId}">\n  <h1>Title</h1>\n  <button>Action</button>\n</div>`, 'html')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: copiedCode === 'html' ? '#34d399' : '#38bdf8',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    {copiedCode === 'html' ? <Check size={12} /> : <Copy size={12} />}
                    {copiedCode === 'html' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre style={{ margin: 0, padding: '1rem', backgroundColor: '#020617', borderRadius: '8px', border: '1px solid #1e293b', color: '#38bdf8', fontSize: '0.8125rem', fontFamily: "'JetBrains Mono', monospace" }}>
{`<div class="style-${styleId}">
  <header>
    <h1>Title</h1>
    <p>Subtitle</p>
  </header>
  <button>Action</button>
</div>`}
                </pre>
              </div>

              {/* React Usage */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f8fafc' }}>
                    2. React Component Scope
                  </span>
                  <button
                    onClick={() => handleCopy(`import { StyleScope } from 'design-library';\n\n<StyleScope level="page" styleId="${styleId}">\n  <YourApp />\n</StyleScope>`, 'react')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: copiedCode === 'react' ? '#34d399' : '#38bdf8',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    {copiedCode === 'react' ? <Check size={12} /> : <Copy size={12} />}
                    {copiedCode === 'react' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre style={{ margin: 0, padding: '1rem', backgroundColor: '#020617', borderRadius: '8px', border: '1px solid #1e293b', color: '#38bdf8', fontSize: '0.8125rem', fontFamily: "'JetBrains Mono', monospace" }}>
{`import { StyleScope, Heading, Button } from 'design-library';

export function MyPage() {
  return (
    <StyleScope level="page" styleId="${styleId}">
      <Heading level={1}>Heading</Heading>
      <Button>Action Button</Button>
    </StyleScope>
  );
}`}
                </pre>
              </div>

              {/* CLI Usage */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f8fafc' }}>
                    3. Command Line (CLI) Workflow
                  </span>
                  <button
                    onClick={() => handleCopy(`npx design-library apply ./index.html --style ${styleId} --standalone -o output.html`, 'cli')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: copiedCode === 'cli' ? '#34d399' : '#38bdf8',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    {copiedCode === 'cli' ? <Check size={12} /> : <Copy size={12} />}
                    {copiedCode === 'cli' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre style={{ margin: 0, padding: '1rem', backgroundColor: '#020617', borderRadius: '8px', border: '1px solid #1e293b', color: '#38bdf8', fontSize: '0.8125rem', fontFamily: "'JetBrains Mono', monospace" }}>
{`# Transform your HTML file directly:
npx design-library apply ./index.html --style ${styleId} --standalone -o output.html

# Export only the compiled CSS:
npx design-library export-css ${styleId} -o ${styleId}.css`}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
