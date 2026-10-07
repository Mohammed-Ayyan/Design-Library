import React, { useState } from 'react';
import { Sparkles, Code2, Eye, Check, Copy } from 'lucide-react';
import { defaultStyles } from '../../styles';
import { HTMLSanitizer } from '../../core/adaptive/sanitizer';

interface PresetItem {
  id: string;
  name: string;
  code: (styleId: string) => string;
  innerHtml: string;
}

const PRESETS: PresetItem[] = [
  {
    id: 'button',
    name: 'Button',
    code: (styleId) => `<button class="style-${styleId}">
  Launch Project
</button>`,
    innerHtml: `<button>Launch Project</button>`,
  },
  {
    id: 'card',
    name: 'Card & Copy',
    code: (styleId) => `<article class="style-${styleId}">
  <h3>Design Engineering</h3>
  <p>Harmonizing structural discipline with unmistakable art direction.</p>
  <button>Read Manifesto</button>
</article>`,
    innerHtml: `<article>
  <h3>Design Engineering</h3>
  <p>Harmonizing structural discipline with unmistakable art direction.</p>
  <button>Read Manifesto</button>
</article>`,
  },
  {
    id: 'input',
    name: 'Form & Input',
    code: (styleId) => `<form class="style-${styleId}">
  <label>Developer Email</label>
  <input type="email" placeholder="dev@company.com" />
  <button type="submit">Join Network</button>
</form>`,
    innerHtml: `<form>
  <label>Developer Email</label>
  <input type="email" placeholder="dev@company.com" />
  <button type="submit">Join Network</button>
</form>`,
  },
  {
    id: 'hero',
    name: 'Hero Section',
    code: (styleId) => `<section class="style-${styleId}">
  <p>SYSTEM ENGINE V1.0</p>
  <h1>Design Systems Applied In Seconds</h1>
  <p>Transform plain markup without modifying underlying DOM tree.</p>
  <button>Get Started</button>
</section>`,
    innerHtml: `<section>
  <p>SYSTEM ENGINE V1.0</p>
  <h1>Design Systems Applied In Seconds</h1>
  <p>Transform plain markup without modifying underlying DOM tree.</p>
  <button>Get Started</button>
</section>`,
  },
  {
    id: 'pricing',
    name: 'Pricing Card',
    code: (styleId) => `<div class="style-${styleId}">
  <span>PRO DEVELOPER</span>
  <h2>$49/mo</h2>
  <p>All 32 complete design languages, tokens, and CLI exports.</p>
  <button>Upgrade Now</button>
</div>`,
    innerHtml: `<div>
  <span>PRO DEVELOPER</span>
  <h2>$49/mo</h2>
  <p>All 32 complete design languages, tokens, and CLI exports.</p>
  <button>Upgrade Now</button>
</div>`,
  },
];

interface InteractiveLivePreviewProps {
  initialStyle?: string;
  initialPreset?: string;
}

export const InteractiveLivePreview: React.FC<InteractiveLivePreviewProps> = ({
  initialStyle = 'brutalism',
  initialPreset = 'button',
}) => {
  const [selectedStyle, setSelectedStyle] = useState(initialStyle);
  const [selectedPresetId, setSelectedPresetId] = useState(initialPreset);
  const [activeView, setActiveView] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const activePreset = PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0];
  const fullSnippet = activePreset.code(selectedStyle);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.14)',
        backgroundColor: '#0c111d',
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
        margin: '2rem 0',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top Toolbar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '0.85rem 1.25rem',
          backgroundColor: '#111827',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Style Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <Sparkles size={15} color="#818cf8" />
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#e2e8f0' }}>
            Design Language:
          </span>
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: '#1f2937',
              color: '#f8fafc',
              fontSize: '0.8125rem',
              fontWeight: 500,
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {defaultStyles.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.id})
              </option>
            ))}
          </select>
        </div>

        {/* Preset Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setSelectedPresetId(preset.id)}
              style={{
                padding: '0.3rem 0.65rem',
                borderRadius: '6px',
                border: selectedPresetId === preset.id
                  ? '1px solid rgba(99, 102, 241, 0.6)'
                  : '1px solid transparent',
                backgroundColor: selectedPresetId === preset.id
                  ? 'rgba(99, 102, 241, 0.2)'
                  : 'transparent',
                color: selectedPresetId === preset.id ? '#c7d2fe' : '#94a3b8',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 120ms ease',
              }}
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* View Toggle & Copy */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              display: 'flex',
              borderRadius: '6px',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '2px',
            }}
          >
            <button
              onClick={() => setActiveView('preview')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: activeView === 'preview' ? '#374151' : 'transparent',
                color: activeView === 'preview' ? '#f8fafc' : '#94a3b8',
                fontSize: '0.75rem',
                cursor: 'pointer',
              }}
            >
              <Eye size={12} /> Preview
            </button>
            <button
              onClick={() => setActiveView('code')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: activeView === 'code' ? '#374151' : 'transparent',
                color: activeView === 'code' ? '#f8fafc' : '#94a3b8',
                fontSize: '0.75rem',
                cursor: 'pointer',
              }}
            >
              <Code2 size={12} /> Code
            </button>
          </div>

          <button
            onClick={handleCopy}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.3rem 0.65rem',
              borderRadius: '6px',
              border: copied ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: copied ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              color: copied ? '#34d399' : '#cbd5e1',
              fontSize: '0.75rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? 'Copied!' : 'Copy Snippet'}
          </button>
        </div>
      </div>

      {/* Main Interactive Stage: Split or Single View */}
      {activeView === 'preview' ? (
        <div
          style={{
            minHeight: '220px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2.5rem 1.5rem',
            background:
              'radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.9) 100%)',
          }}
        >
          {/* Styled Container with the chosen style class */}
          <div
            className={`style-${selectedStyle} lab-styled-preview`}
            data-style={selectedStyle}
            style={{
              width: '100%',
              maxWidth: '560px',
              margin: '0 auto',
            }}
            dangerouslySetInnerHTML={{ __html: HTMLSanitizer.sanitize(activePreset.innerHtml) }}
          />
        </div>
      ) : (
        <pre
          style={{
            margin: 0,
            padding: '1.5rem',
            backgroundColor: '#090e17',
            color: '#f8fafc',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            lineHeight: 1.6,
            overflowX: 'auto',
          }}
        >
          <code>{fullSnippet}</code>
        </pre>
      )}

      {/* Footer Info Strip */}
      <div
        style={{
          padding: '0.5rem 1.25rem',
          backgroundColor: '#0f172a',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: '#64748b',
        }}
      >
        <span>
          Applied class: <code style={{ color: '#38bdf8' }}>.style-{selectedStyle}</code>
        </span>
        <span>Zero DOM mutation • Direct semantic CSS</span>
      </div>
    </div>
  );
};
