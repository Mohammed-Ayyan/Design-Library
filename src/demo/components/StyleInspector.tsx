import React, { useState } from 'react';
import { useStyleEngine } from '../../react/context/StyleEngineContext';

export const StyleInspector: React.FC = () => {
  const { resolvedStyle } = useStyleEngine();
  const [collapsed, setCollapsed] = useState(false);

  const { tokens, scope, styleName, styleId, fallbackUsed, isBase } = resolvedStyle;

  return (
    <div
      style={{
        position: 'sticky',
        bottom: '1.5rem',
        zIndex: 50,
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        borderRadius: '12px',
        border: '1px solid #334155',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.75rem',
        overflow: 'hidden',
        marginTop: '2rem',
      }}
    >
      {/* Header */}
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{
          padding: '0.75rem 1rem',
          backgroundColor: '#1e293b',
          borderBottom: collapsed ? 'none' : '1px solid #334155',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: fallbackUsed ? '#ef4444' : '#10b981' }} />
          <span style={{ fontWeight: 600, color: '#e2e8f0', letterSpacing: '0.05em' }}>
            STYLE ENGINE INSPECTOR
          </span>
          <span
            style={{
              fontSize: '0.6875rem',
              padding: '0.125rem 0.375rem',
              borderRadius: '4px',
              backgroundColor: isBase ? '#334155' : '#4f46e5',
              color: '#ffffff',
            }}
          >
            {styleId}
          </span>
          {fallbackUsed && (
            <span
              style={{
                fontSize: '0.6875rem',
                padding: '0.125rem 0.375rem',
                borderRadius: '4px',
                backgroundColor: '#ef4444',
                color: '#ffffff',
              }}
            >
              FALLBACK APPLIED
            </span>
          )}
        </div>
        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{collapsed ? '▲ Show' : '▼ Collapse'}</span>
      </div>

      {/* Inspector Body */}
      {!collapsed && (
        <div style={{ padding: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {/* Metadata & Scope */}
          <div>
            <div style={{ color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.6875rem', marginBottom: '0.375rem' }}>
              CURRENT STYLE
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#38bdf8' }}>
              {styleName}
            </div>
            <div style={{ color: '#64748b', fontSize: '0.6875rem', marginTop: '0.25rem' }}>
              ID: <code style={{ color: '#cbd5e1' }}>{styleId}</code>
            </div>

            <div style={{ color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.6875rem', marginTop: '0.75rem', marginBottom: '0.375rem' }}>
              CURRENT SCOPE LEVEL
            </div>
            <div style={{ display: 'inline-block', padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: '#334155', color: '#f8fafc', fontWeight: 600 }}>
              {scope.level.toUpperCase()}
            </div>
          </div>

          {/* Color Tokens */}
          <div>
            <div style={{ color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.6875rem', marginBottom: '0.375rem' }}>
              ACTIVE COLOR TOKENS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#cbd5e1' }}>PRIMARY:</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '2px', backgroundColor: tokens.colors.primary, border: '1px solid #475569' }} />
                  <code>{tokens.colors.primary}</code>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#cbd5e1' }}>ACCENT:</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '2px', backgroundColor: tokens.colors.accent, border: '1px solid #475569' }} />
                  <code>{tokens.colors.accent}</code>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#cbd5e1' }}>SURFACE:</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '2px', backgroundColor: tokens.colors.surface, border: '1px solid #475569' }} />
                  <code>{tokens.colors.surface}</code>
                </span>
              </div>
            </div>
          </div>

          {/* Geometric Tokens */}
          <div>
            <div style={{ color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.6875rem', marginBottom: '0.375rem' }}>
              GEOMETRIC & ELEVATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#cbd5e1' }}>BORDER RADIUS:</span>
                <code>{tokens.radii.md}</code>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#cbd5e1' }}>BORDER:</span>
                <code>{tokens.borders.widthBase} {tokens.borders.style}</code>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#cbd5e1' }}>SHADOW (SM):</span>
                <code style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={tokens.shadows.sm}>
                  {tokens.shadows.sm}
                </code>
              </div>
            </div>
          </div>

          {/* Typography Tokens */}
          <div>
            <div style={{ color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.6875rem', marginBottom: '0.375rem' }}>
              ACTIVE TYPOGRAPHY
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.625rem' }}>BASE: </span>
                <code style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>{tokens.typography.fontFamilyBase.split(',')[0]}</code>
              </div>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.625rem' }}>HEADING: </span>
                <code style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>{tokens.typography.fontFamilyHeading.split(',')[0]}</code>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#cbd5e1' }}>TRACKING:</span>
                <code>{tokens.typography.letterSpacingHeading}</code>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
