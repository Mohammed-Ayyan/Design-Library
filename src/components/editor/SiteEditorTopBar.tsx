import React from 'react';
import { useSiteEditor } from '../../react/context/SiteEditorContext';
import { ALL_29_STYLES } from '../../styles/catalog';
import {
  Monitor,
  Tablet,
  Smartphone,
  Undo2,
  Redo2,
  RotateCcw,
  Check,
} from 'lucide-react';

export const SiteEditorTopBar: React.FC = () => {
  const {
    isEditMode,
    toggleEditMode,
    viewport,
    setViewport,
    pageStyleId,
    setPageStyleId,
    canUndo,
    canRedo,
    undo,
    redo,
    resetAll,
  } = useSiteEditor();

  if (!isEditMode) return null;

  const activeStyles = ALL_29_STYLES.filter((s) => s.status === 'active');
  const activeCatalog = ALL_29_STYLES.find((s) => s.id === pageStyleId) || ALL_29_STYLES[0];

  return (
    <div
      data-editor-ui="true"
      className="site-editor-bar"
      style={{
        position: 'sticky',
        top: '57px',
        zIndex: 999990,
        backgroundColor: '#0c0e14',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        .site-editor-bar {
          padding: 0.5rem 1.75rem;
          gap: 1rem;
        }
        @media (max-width: 640px) {
          .site-editor-bar {
            padding: 0.4rem 0.75rem !important;
            gap: 0.5rem !important;
          }
          .site-editor-status-text {
            display: none !important;
          }
        }
      `}</style>
      {/* 1. Left: Edit Mode Status Pill & Global Page Language */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.25rem 0.65rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(34, 197, 94, 0.12)',
            border: '1px solid rgba(34, 197, 94, 0.35)',
            color: '#4ade80',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
          />
          <span className="site-editor-status-text">SITE EDIT MODE ACTIVE</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.75rem', color: '#8e96a4', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
            PAGE LANGUAGE:
          </label>
          <select
            id="site-editor-page-style-select"
            value={pageStyleId}
            onChange={(e) => setPageStyleId(e.target.value)}
            style={{
              backgroundColor: '#161922',
              color: '#f8fafc',
              border: `1px solid ${activeCatalog.accentColor || 'rgba(255, 255, 255, 0.2)'}`,
              borderRadius: '6px',
              padding: '0.3rem 0.65rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="base">Neutral Base (Default)</option>
            {activeStyles.map((st) => (
              <option key={st.id} value={st.id}>
                {st.name} ({st.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 2. Center: Viewport Mode Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ display: 'flex', backgroundColor: '#14161f', borderRadius: '6px', padding: '2px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button
            onClick={() => setViewport('desktop')}
            title="Desktop View (100%)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.3rem 0.65rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: viewport === 'desktop' ? '#222634' : 'transparent',
              color: viewport === 'desktop' ? '#ffffff' : '#8e96a4',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Monitor size={13} />
            Desktop
          </button>
          <button
            onClick={() => setViewport('tablet')}
            title="Tablet View (768px)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.3rem 0.65rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: viewport === 'tablet' ? '#222634' : 'transparent',
              color: viewport === 'tablet' ? '#ffffff' : '#8e96a4',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Tablet size={13} />
            Tablet
          </button>
          <button
            onClick={() => setViewport('mobile')}
            title="Mobile View (375px)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.3rem 0.65rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: viewport === 'mobile' ? '#222634' : 'transparent',
              color: viewport === 'mobile' ? '#ffffff' : '#8e96a4',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Smartphone size={13} />
            Mobile
          </button>
        </div>
      </div>

      {/* 3. Right: Undo, Redo, Reset, and Exit */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button
          onClick={undo}
          disabled={!canUndo}
          title="Undo (Ctrl+Z)"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.35rem 0.65rem',
            borderRadius: '6px',
            backgroundColor: '#161922',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: canUndo ? '#f8fafc' : '#475569',
            fontSize: '0.75rem',
            cursor: canUndo ? 'pointer' : 'default',
          }}
        >
          <Undo2 size={12} />
          Undo
        </button>

        <button
          onClick={redo}
          disabled={!canRedo}
          title="Redo (Ctrl+Shift+Z)"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.35rem 0.65rem',
            borderRadius: '6px',
            backgroundColor: '#161922',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: canRedo ? '#f8fafc' : '#475569',
            fontSize: '0.75rem',
            cursor: canRedo ? 'pointer' : 'default',
          }}
        >
          <Redo2 size={12} />
          Redo
        </button>

        <button
          onClick={resetAll}
          title="Reset All Edits"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.35rem 0.65rem',
            borderRadius: '6px',
            backgroundColor: '#161922',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#8e96a4',
            fontSize: '0.75rem',
            cursor: 'pointer',
          }}
        >
          <RotateCcw size={12} />
          Reset All
        </button>

        <button
          id="exit-edit-mode-btn"
          onClick={toggleEditMode}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.38rem 0.95rem',
            borderRadius: '6px',
            backgroundColor: '#181b26',
            border: '1px solid rgba(34, 197, 94, 0.5)',
            color: '#4ade80',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 120ms ease',
          }}
        >
          <Check size={13} />
          Done Editing
        </button>
      </div>
    </div>
  );
};
