import React, { useState, useMemo } from 'react';
import {
  Layers,
  Wand2,
  Copy,
  Check,
  BookOpen,
  Sliders,
  Palette,
  ExternalLink,
} from 'lucide-react';
import { defaultStyles } from '../styles';
import { StyleScope } from '../react/components/StyleScope';
import { Card } from '../react/components/Card';
import { Button } from '../react/components/Button';
import { Heading } from '../react/components/Heading';
import { Paragraph } from '../react/components/Paragraph';
import { SEMANTIC_CSS_MAP } from '../styles/semantic-css';

export interface StyleHybridSectionProps {
  onOpenCustomHtml?: (expression?: string) => void;
  onOpenStudio?: (styleId?: string) => void;
  onOpenDocs?: (sectionId?: string) => void;
}

interface HybridPreset {
  id: string;
  name: string;
  badge: string;
  primary: string;
  secondary: string;
  tagline: string;
  description: string;
  accent: string;
}

const HYBRID_PRESETS: HybridPreset[] = [
  {
    id: 'zen-glass',
    name: 'Zen Glass',
    badge: 'wabi-sabi + glassmorphism',
    primary: 'wabi-sabi',
    secondary: 'glassmorphism',
    tagline: 'Organic earthenware meet specular refraction',
    description: 'Blends tactile washi paper typography and matcha tones with 20px frosted backdrop glass filtration and specular highlights.',
    accent: '#38bdf8',
  },
  {
    id: 'minimal-raw',
    name: 'Minimal Raw',
    badge: 'brutalism + minimalism',
    primary: 'brutalism',
    secondary: 'minimalism',
    tagline: 'High-contrast structural discipline',
    description: 'Combines brutalist 3px solid borders and black outlines with spacious airy typography, creating a gallery-grade architectural layout.',
    accent: '#eab308',
  },
  {
    id: 'retro-cyber',
    name: 'Retro Cyber',
    badge: 'cyberpunk + synthwave',
    primary: 'cyberpunk',
    secondary: 'synthwave',
    tagline: 'Terminal scanlines & outrun glow',
    description: 'Overlays neon magenta and cyan sunset gradients over a midnight obsidian void with phosphor monospace telemetry.',
    accent: '#ec4899',
  },
  {
    id: 'eco-pop',
    name: 'Eco Pop',
    badge: 'solarpunk + neo-brutalism',
    primary: 'solarpunk',
    secondary: 'neo-brutalism',
    tagline: 'Sunlit flora & bold tactile outlines',
    description: 'Synthesizes verdant foliage greens and ecological curves with friendly 2px dark outlines and saturated yellow accents.',
    accent: '#10b981',
  },
  {
    id: 'gothic-chic',
    name: 'Gothic Chic',
    badge: 'gothic + luxury-typography',
    primary: 'gothic',
    secondary: 'luxury-typography',
    tagline: 'Cathedral arches & champagne hairlines',
    description: 'Pairs ecclesiastical Cinzel serifs and antique brass rules with whisper uppercase sans and Didone editorial proportion.',
    accent: '#c084fc',
  },
  {
    id: 'modernist-grid',
    name: 'Modernist Grid',
    badge: 'bauhaus + bento-grid',
    primary: 'bauhaus',
    secondary: 'bento-grid',
    tagline: 'Primary geometry in asymmetric tiles',
    description: 'Applies functional primary color accents (red, blue, yellow) across modern asymmetric modular bento compartments.',
    accent: '#f97316',
  },
  {
    id: 'vapor-nostalgia',
    name: 'Vapor Nostalgia',
    badge: 'synthwave + y2k-aesthetic',
    primary: 'synthwave',
    secondary: 'y2k-aesthetic',
    tagline: 'Arcade outrun with chrome bubble gel',
    description: 'Blends midnight purple outrun grids with glossy aqua bubble geometry, chrome reflections, and optimistic iridescent highlights.',
    accent: '#06b6d4',
  },
  {
    id: 'tactile-soft',
    name: 'Tactile Soft',
    badge: 'claymorphism + neumorphism',
    primary: 'claymorphism',
    secondary: 'neumorphism',
    tagline: 'Inflated 3D volumes & extruded depth',
    description: 'Combines pillowy 3D clay volumes with dual-direction extruded soft shadows for an ultra-friendly tactile tactile physical interface.',
    accent: '#a855f7',
  },
];

export const StyleHybridSection: React.FC<StyleHybridSectionProps> = ({
  onOpenCustomHtml,
  onOpenStudio,
  onOpenDocs,
}) => {
  const [activePresetId, setActivePresetId] = useState<string>('zen-glass');
  const [primaryStyle, setPrimaryStyle] = useState<string>('wabi-sabi');
  const [secondaryStyle, setSecondaryStyle] = useState<string>('glassmorphism');
  const [activeArchetype, setActiveArchetype] = useState<'card' | 'pricing' | 'article'>('card');
  const [copiedCodeTab, setCopiedCodeTab] = useState<string | null>(null);
  const [activeCodeTab, setActiveCodeTab] = useState<'react' | 'html' | 'cli'>('react');

  const activePreset = useMemo(() => {
    return HYBRID_PRESETS.find((p) => p.id === activePresetId) || HYBRID_PRESETS[0];
  }, [activePresetId]);

  const currentExpression = useMemo(() => {
    return `/name = ${primaryStyle} + ${secondaryStyle}`;
  }, [primaryStyle, secondaryStyle]);

  const handleSelectPreset = (preset: HybridPreset) => {
    setActivePresetId(preset.id);
    setPrimaryStyle(preset.primary);
    setSecondaryStyle(preset.secondary);
  };

  const handleCopyCode = (text: string, tab: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedCodeTab(tab);
      setTimeout(() => setCopiedCodeTab(null), 2000);
    }
  };

  // Compile active scoped semantic CSS rules for secondary overlay effects
  const activeSemanticCss = useMemo(() => {
    const pCss = SEMANTIC_CSS_MAP[primaryStyle] || '';
    const sCss = SEMANTIC_CSS_MAP[secondaryStyle] || '';
    return `${pCss}\n${sCss}`;
  }, [primaryStyle, secondaryStyle]);

  const reactCodeSnippet = `import { StyleScope, Section, Card, Button } from 'design-library';

export function HybridComponent() {
  return (
    <StyleScope styleId="${currentExpression}" level="section" as="section">
      <Card>
        <h2>${activePreset.name} Hybrid Interface</h2>
        <p>${activePreset.description}</p>
        <Button>Launch Hybrid Experience</Button>
      </Card>
    </StyleScope>
  );
}`;

  const htmlCodeSnippet = `<!-- Multi-class hybrid container with telemetry data attribute -->
<div class="style-${primaryStyle} style-${secondaryStyle} style-hybrid" data-hybrid="true" data-styles="${primaryStyle},${secondaryStyle}">
  <h2>${activePreset.name} Hybrid Interface</h2>
  <p>${activePreset.description}</p>
  <button>Launch Hybrid Experience</button>
</div>`;

  const cliCodeSnippet = `# Transform any HTML into an authentic standalone hybrid document
npx design-library apply input.html --style "${primaryStyle} + ${secondaryStyle}" --standalone -o hybrid.html`;

  return (
    <section
      id="style-hybrids-section"
      style={{
        padding: '6rem 2rem',
        maxWidth: '1360px',
        margin: '0 auto',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Injected Scoped CSS for the live preview */}
      <style>{activeSemanticCss}</style>

      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(168, 85, 247, 0.15)',
            border: '1px solid rgba(168, 85, 247, 0.35)',
            color: '#c084fc',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          <Wand2 size={13} />
          STYLE COMPOSITION ENGINE • MULTI-LANGUAGE HYBRIDS
        </div>

        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#f8fafc',
            margin: '0 0 1rem',
            letterSpacing: '-0.03em',
          }}
        >
          Combine Any Design Languages In One Go
        </h2>

        <p
          style={{
            fontSize: '1.0625rem',
            color: '#94a3b8',
            maxWidth: '820px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Break free from single design system silos. Compound expressions like{' '}
          <code style={{ color: '#c084fc', backgroundColor: 'rgba(168, 85, 247, 0.15)', padding: '0.2rem 0.45rem', borderRadius: '4px', fontSize: '0.9em' }}>
            /name = wabi-sabi + glassmorphism
          </code>{' '}
          synthesize foundational structural typography with layered translucent surfaces, frosted specular refractions, and neon accents.
        </p>
      </div>

      {/* Preset Pill Carousel Bar */}
      <div
        style={{
          display: 'flex',
          gap: '0.6rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
          marginBottom: '2.5rem',
          scrollbarWidth: 'none',
        }}
      >
        {HYBRID_PRESETS.map((preset) => {
          const isSelected = activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              id={`preset-pill-${preset.id}`}
              onClick={() => handleSelectPreset(preset)}
              style={{
                flexShrink: 0,
                padding: '0.65rem 1.15rem',
                borderRadius: '10px',
                border: isSelected ? '1px solid #c084fc' : '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: isSelected ? 'rgba(168, 85, 247, 0.18)' : '#0f172a',
                color: isSelected ? '#ffffff' : '#94a3b8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 150ms ease',
                boxShadow: isSelected ? '0 4px 18px rgba(168, 85, 247, 0.25)' : 'none',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: preset.accent,
                }}
              />
              <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>{preset.name}</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: isSelected ? '#c084fc' : '#64748b',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {preset.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Workbench Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
          gap: '2rem',
          backgroundColor: '#0c0e17',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* LEFT COLUMN: LIVE HYBRID RENDER CANVAS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Canvas Controls Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={16} color="#c084fc" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase' }}>
                LIVE HYBRID CANVAS
              </span>
            </div>

            {/* Archetype switcher tabs */}
            <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: '#1e293b', padding: '0.2rem', borderRadius: '6px' }}>
              {(['card', 'pricing', 'article'] as const).map((arch) => (
                <button
                  key={arch}
                  id={`btn-arch-${arch}`}
                  onClick={() => setActiveArchetype(arch)}
                  style={{
                    padding: '0.25rem 0.6rem',
                    fontSize: '0.75rem',
                    fontWeight: activeArchetype === arch ? 700 : 500,
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: activeArchetype === arch ? '#a855f7' : 'transparent',
                    color: activeArchetype === arch ? '#ffffff' : '#94a3b8',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                  }}
                >
                  {arch}
                </button>
              ))}
            </div>
          </div>

          {/* Rendered Live Hybrid Element Scoped Container */}
          <div
            id="hybrid-live-preview-box"
            style={{
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              overflow: 'hidden',
              backgroundColor: '#020617',
              minHeight: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              backgroundImage:
                'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.08) 0%, rgba(2, 6, 23, 0.95) 100%)',
            }}
          >
            <StyleScope
              styleId={currentExpression}
              level="section"
              as="div"
              className="lab-styled-preview"
              style={{ width: '100%', maxWidth: '520px' }}
            >
              {activeArchetype === 'card' && (
                <Card style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <Heading level={3}>{activePreset.name}</Heading>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(168, 85, 247, 0.25)',
                        color: '#c084fc',
                        border: '1px solid rgba(168, 85, 247, 0.4)',
                      }}
                    >
                      HYBRID BLEND
                    </span>
                  </div>
                  <Paragraph style={{ marginBottom: '1.25rem' }}>
                    {activePreset.description}
                  </Paragraph>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Button>Acquire Vessel</Button>
                    <button
                      onClick={() => onOpenCustomHtml?.(currentExpression)}
                      style={{
                        padding: '0.5rem 0.85rem',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        borderRadius: '6px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        backgroundColor: 'transparent',
                        color: '#cbd5e1',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      <ExternalLink size={13} />
                      Lab View
                    </button>
                  </div>
                </Card>
              )}

              {activeArchetype === 'pricing' && (
                <Card style={{ margin: 0, textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', color: '#c084fc', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    PROFESSIONAL TIER
                  </div>
                  <Heading level={2} style={{ marginBottom: '0.5rem' }}>
                    $49 <span style={{ fontSize: '1rem', fontWeight: 400 }}>/ mo</span>
                  </Heading>
                  <Paragraph style={{ marginBottom: '1.25rem' }}>
                    Complete access to all 32 design languages with infinite hybrid compositions.
                  </Paragraph>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={14} color="#10b981" /> Sub-millisecond hybrid compilation
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={14} color="#10b981" /> Full React & Vanilla HTML support
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={14} color="#10b981" /> Enterprise XSS-sanitized execution
                    </li>
                  </ul>
                  <Button style={{ width: '100%' }}>Deploy Hybrid Stack</Button>
                </Card>
              )}

              {activeArchetype === 'article' && (
                <Card style={{ margin: 0 }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>
                    ESSAY • 4 MIN READ
                  </div>
                  <Heading level={3} style={{ marginBottom: '0.5rem' }}>
                    The Hybrid Aesthetic Manifesto
                  </Heading>
                  <Paragraph style={{ marginBottom: '1rem' }}>
                    Design systems were once rigid fortresses. By decoupling DOM structure from aesthetic grammar, we create infinite harmonious hybrids.
                  </Paragraph>
                  <blockquote style={{ margin: '1rem 0', paddingLeft: '1rem', borderLeft: '3px solid #c084fc', fontStyle: 'italic', fontSize: '0.9rem' }}>
                    "{activePreset.tagline}."
                  </blockquote>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600 }}>By Design Engine Team</span>
                    <Button>Read Full Essay</Button>
                  </div>
                </Card>
              )}
            </StyleScope>
          </div>

          {/* Telemetry pill indicators */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: '#1e293b' }}>
              Base: <strong style={{ color: '#38bdf8' }}>{primaryStyle}</strong>
            </span>
            <span style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: '#1e293b' }}>
              Overlay: <strong style={{ color: '#c084fc' }}>{secondaryStyle}</strong>
            </span>
            <span style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: '#1e293b' }}>
              Telemetry: <strong style={{ color: '#34d399' }}>--ds-hybrid: true</strong>
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE CONTROLS & CODE GENERATOR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Style Selector Controls */}
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '12px',
              backgroundColor: '#090e17',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sliders size={14} color="#c084fc" />
              CONFIGURE HYBRID BLEND
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              {/* Primary Style Selector */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.35rem' }}>
                  1. PRIMARY (BASE STRUCTURE)
                </label>
                <select
                  id="hybrid-primary-select"
                  value={primaryStyle}
                  onChange={(e) => setPrimaryStyle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid #334155',
                    backgroundColor: '#1e293b',
                    color: '#f8fafc',
                    fontSize: '0.8125rem',
                    outline: 'none',
                  }}
                >
                  {defaultStyles.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Secondary Style Selector */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.35rem' }}>
                  2. SECONDARY (SURFACE OVERLAY)
                </label>
                <select
                  id="hybrid-secondary-select"
                  value={secondaryStyle}
                  onChange={(e) => setSecondaryStyle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid #334155',
                    backgroundColor: '#1e293b',
                    color: '#f8fafc',
                    fontSize: '0.8125rem',
                    outline: 'none',
                  }}
                >
                  {defaultStyles.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Expression Pill Display */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: '#131b2e',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                fontSize: '0.8125rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#e2e8f0',
              }}
            >
              <span>{currentExpression}</span>
              <button
                onClick={() => handleCopyCode(currentExpression, 'expr')}
                title="Copy expression"
                style={{
                  background: 'none',
                  border: 'none',
                  color: copiedCodeTab === 'expr' ? '#34d399' : '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.75rem',
                }}
              >
                {copiedCodeTab === 'expr' ? <Check size={12} /> : <Copy size={12} />}
                {copiedCodeTab === 'expr' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Code Inspector Tabs */}
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '12px',
              backgroundColor: '#090e17',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                {(['react', 'html', 'cli'] as const).map((tab) => (
                  <button
                    key={tab}
                    id={`btn-code-tab-${tab}`}
                    onClick={() => setActiveCodeTab(tab)}
                    style={{
                      padding: '0.3rem 0.65rem',
                      fontSize: '0.75rem',
                      fontWeight: activeCodeTab === tab ? 700 : 500,
                      borderRadius: '5px',
                      border: 'none',
                      backgroundColor: activeCodeTab === tab ? '#38bdf8' : '#1e293b',
                      color: activeCodeTab === tab ? '#020617' : '#94a3b8',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  const txt = activeCodeTab === 'react' ? reactCodeSnippet : activeCodeTab === 'html' ? htmlCodeSnippet : cliCodeSnippet;
                  handleCopyCode(txt, activeCodeTab);
                }}
                style={{
                  padding: '0.25rem 0.6rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  borderRadius: '5px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor: '#1e293b',
                  color: copiedCodeTab === activeCodeTab ? '#34d399' : '#cbd5e1',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                {copiedCodeTab === activeCodeTab ? <Check size={12} /> : <Copy size={12} />}
                {copiedCodeTab === activeCodeTab ? 'Copied' : 'Copy Code'}
              </button>
            </div>

            <pre
              style={{
                margin: 0,
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: '#020617',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                color: '#e2e8f0',
                fontSize: '0.775rem',
                fontFamily: "'JetBrains Mono', monospace",
                lineHeight: 1.55,
                overflowX: 'auto',
              }}
            >
              {activeCodeTab === 'react' && reactCodeSnippet}
              {activeCodeTab === 'html' && htmlCodeSnippet}
              {activeCodeTab === 'cli' && cliCodeSnippet}
            </pre>
          </div>

          {/* Quick Action Links */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              id="btn-hybrid-open-lab"
              onClick={() => onOpenCustomHtml?.(currentExpression)}
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                color: '#c084fc',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                transition: 'all 120ms ease',
              }}
            >
              <Wand2 size={15} />
              Open In Custom HTML Lab
            </button>

            <button
              id="btn-hybrid-open-studio"
              onClick={() => onOpenStudio?.(primaryStyle)}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: '#1e293b',
                color: '#e2e8f0',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Palette size={14} />
              Studio
            </button>

            <button
              id="btn-hybrid-open-docs"
              onClick={() => onOpenDocs?.('composition')}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: '#1e293b',
                color: '#e2e8f0',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <BookOpen size={14} />
              Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
