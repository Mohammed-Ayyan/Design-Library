import React from 'react';
import { useStyleEngine } from '../react/context/StyleEngineContext';
import { X, Terminal, CheckCircle2, ShieldAlert } from 'lucide-react';

interface DevInspectorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevInspectorDrawer: React.FC<DevInspectorDrawerProps> = ({ isOpen, onClose }) => {
  const { resolvedStyle, engine } = useStyleEngine();

  if (!isOpen) return null;

  const { tokens, scope, styleName, styleId, fallbackUsed, isBase } = resolvedStyle;
  const availableStyles = engine.getAvailableStyles();

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        id="dev-inspector-drawer"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#090d16',
          borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.8125rem',
          color: '#f8fafc',
          boxSizing: 'border-box',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#0f172a',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={18} color="#10b981" />
            <span style={{ fontWeight: 700, color: '#f8fafc', letterSpacing: '0.04em' }}>
              ENGINE DEV INSPECTOR
            </span>
          </div>
          <button
            id="close-dev-inspector-btn"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.25rem',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Active Style Status */}
          <div style={{ padding: '1rem', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.6875rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              ACTIVE RESOLVED STYLE
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#38bdf8' }}>
              {styleName}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.6875rem', padding: '0.15rem 0.5rem', borderRadius: '4px', backgroundColor: '#334155', color: '#cbd5e1' }}>
                ID: {styleId}
              </span>
              <span style={{ fontSize: '0.6875rem', padding: '0.15rem 0.5rem', borderRadius: '4px', backgroundColor: isBase ? '#475569' : '#6366f1', color: '#fff' }}>
                {isBase ? 'BASE SYSTEM' : 'CUSTOM LANGUAGE'}
              </span>
              {fallbackUsed ? (
                <span style={{ fontSize: '0.6875rem', padding: '0.15rem 0.5rem', borderRadius: '4px', backgroundColor: '#ef4444', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <ShieldAlert size={12} /> FALLBACK USED
                </span>
              ) : (
                <span style={{ fontSize: '0.6875rem', padding: '0.15rem 0.5rem', borderRadius: '4px', backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <CheckCircle2 size={12} /> EXACT MATCH
                </span>
              )}
            </div>
          </div>

          {/* Scope Resolution Level */}
          <div style={{ padding: '1rem', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.6875rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              SCOPE HIERARCHY
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#f8fafc' }}>
              <span>CURRENT LEVEL:</span>
              <span style={{ fontWeight: 700, color: '#10b981' }}>{scope.level.toUpperCase()}</span>
            </div>
            <div style={{ marginTop: '0.5rem', color: '#94a3b8', fontSize: '0.75rem' }}>
              Chain: {scope.scopeChain.map((s) => `${s.level} (${s.styleId})`).join(' → ') || 'Root'}
            </div>
          </div>

          {/* Color Tokens */}
          <div>
            <div style={{ color: '#94a3b8', fontSize: '0.6875rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              RESOLVED COLOR TOKENS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', backgroundColor: '#1e293b', padding: '0.75rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#94a3b8' }}>PRIMARY</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: tokens.colors.primary, border: '1px solid #475569' }} />
                  <code>{tokens.colors.primary}</code>
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#94a3b8' }}>ACCENT</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: tokens.colors.accent, border: '1px solid #475569' }} />
                  <code>{tokens.colors.accent}</code>
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#94a3b8' }}>SURFACE</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: tokens.colors.surface, border: '1px solid #475569' }} />
                  <code style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tokens.colors.surface}</code>
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#94a3b8' }}>BORDER</span>
                <code>{tokens.colors.border}</code>
              </div>
            </div>
          </div>

          {/* Geometric & Elevation Tokens */}
          <div>
            <div style={{ color: '#94a3b8', fontSize: '0.6875rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              GEOMETRIC & ELEVATION TOKENS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', backgroundColor: '#1e293b', padding: '0.75rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94a3b8' }}>RADIUS (MD)</span>
                <code>{tokens.radii.md}</code>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94a3b8' }}>BORDER WIDTH</span>
                <code>{tokens.borders.widthBase} {tokens.borders.style}</code>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94a3b8' }}>SHADOW (SM)</span>
                <code style={{ maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={tokens.shadows.sm}>
                  {tokens.shadows.sm}
                </code>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94a3b8' }}>BACKDROP BLUR</span>
                <code>{tokens.effects.backdropBlur}</code>
              </div>
            </div>
          </div>

          {/* Registered Styles in Registry */}
          <div>
            <div style={{ color: '#94a3b8', fontSize: '0.6875rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              STYLE REGISTRY CATALOG ({availableStyles.length})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {availableStyles.map((s) => (
                <div
                  key={s.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.4rem 0.6rem',
                    borderRadius: '4px',
                    backgroundColor: s.id === styleId ? 'rgba(56, 189, 248, 0.15)' : '#1e293b',
                    color: s.id === styleId ? '#38bdf8' : '#cbd5e1',
                  }}
                >
                  <span>{s.name}</span>
                  <code>{s.id}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
