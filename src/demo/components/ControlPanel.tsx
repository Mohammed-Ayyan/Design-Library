import React from 'react';
import { useStyleEngine } from '../../react/context/StyleEngineContext';

interface ControlPanelProps {
  buttonOverrideEnabled: boolean;
  onToggleButtonOverride: (enabled: boolean) => void;
  sectionOverrideEnabled: boolean;
  onToggleSectionOverride: (enabled: boolean) => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  buttonOverrideEnabled,
  onToggleButtonOverride,
  sectionOverrideEnabled,
  onToggleSectionOverride,
}) => {
  const { activeStyleId, setActiveStyleId, resetToBaseStyle, engine } = useStyleEngine();
  const availableStyles = engine.getAvailableStyles();

  return (
    <div
      style={{
        padding: '1.25rem',
        borderRadius: '12px',
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        color: '#f8fafc',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        marginBottom: '2rem',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#f8fafc' }}>
            🎛️ Engine Control Hub
          </h3>
          <p style={{ margin: '0.25rem 0 0', fontSize: '0.8125rem', color: '#94a3b8' }}>
            Switch styles, reset to base, and test hierarchical scope overrides
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            id="reset-style-btn"
            onClick={resetToBaseStyle}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.8125rem',
              fontWeight: 500,
              borderRadius: '6px',
              border: '1px solid #475569',
              background: '#1e293b',
              color: '#e2e8f0',
              cursor: 'pointer',
              transition: 'all 150ms ease',
            }}
          >
            Reset to Base Style
          </button>

          <button
            id="test-invalid-style-btn"
            onClick={() => setActiveStyleId('non-existent-style')}
            title="Tests safe fallback behavior"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.8125rem',
              fontWeight: 500,
              borderRadius: '6px',
              border: '1px dashed #ef4444',
              background: 'rgba(239, 68, 68, 0.1)',
              color: '#fca5a5',
              cursor: 'pointer',
            }}
          >
            Test Invalid Style (Safety Fallback)
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {/* Style Selection Buttons */}
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8', marginBottom: '0.5rem', fontWeight: 600 }}>
            Active Page Style
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {availableStyles.map((styleDef) => {
              const isSelected = activeStyleId === styleDef.id;
              return (
                <button
                  key={styleDef.id}
                  id={`style-btn-${styleDef.id}`}
                  onClick={() => setActiveStyleId(styleDef.id)}
                  style={{
                    flex: 1,
                    padding: '0.625rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: isSelected ? 600 : 500,
                    borderRadius: '8px',
                    border: isSelected ? '2px solid #38bdf8' : '1px solid #334155',
                    background: isSelected ? 'rgba(56, 189, 248, 0.15)' : '#0f172a',
                    color: isSelected ? '#38bdf8' : '#cbd5e1',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                  }}
                >
                  {styleDef.name}
                  {isSelected && ' ✓'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hierarchical Scope Overrides */}
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8', marginBottom: '0.5rem', fontWeight: 600 }}>
            Scope Overrides (Inheritance Testing)
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              id="toggle-section-override-btn"
              onClick={() => onToggleSectionOverride(!sectionOverrideEnabled)}
              style={{
                flex: 1,
                padding: '0.625rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 500,
                borderRadius: '8px',
                border: sectionOverrideEnabled ? '2px solid #a855f7' : '1px solid #334155',
                background: sectionOverrideEnabled ? 'rgba(168, 85, 247, 0.2)' : '#0f172a',
                color: sectionOverrideEnabled ? '#d8b4fe' : '#94a3b8',
                cursor: 'pointer',
              }}
            >
              Section Scope: {sectionOverrideEnabled ? 'OVERRIDDEN' : 'Inheriting'}
            </button>

            <button
              id="toggle-button-override-btn"
              onClick={() => onToggleButtonOverride(!buttonOverrideEnabled)}
              style={{
                flex: 1,
                padding: '0.625rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 500,
                borderRadius: '8px',
                border: buttonOverrideEnabled ? '2px solid #10b981' : '1px solid #334155',
                background: buttonOverrideEnabled ? 'rgba(16, 185, 129, 0.2)' : '#0f172a',
                color: buttonOverrideEnabled ? '#6ee7b7' : '#94a3b8',
                cursor: 'pointer',
              }}
            >
              Button Scope: {buttonOverrideEnabled ? 'OVERRIDDEN' : 'Inheriting'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
