import React, { useState } from 'react';
import { useSiteEditor } from '../../react/context/SiteEditorContext';
import { ALL_29_STYLES } from '../../styles/catalog';
import {
  Sliders,
  X,
  RotateCcw,
  Undo2,
  Redo2,
  Copy,
  Check,
  Type,
  Box,
  ChevronRight,
} from 'lucide-react';

export const SiteEditorInspector: React.FC = () => {
  const {
    isEditMode,
    selectedNode,
    setSelectedNode,
    viewport,
    pageStyleId,
    setPageStyleId,
    elementEdits,
    updateElementEdit,
    resetElement,
    canUndo,
    canRedo,
    undo,
    redo,
    getElementCodeSnippet,
  } = useSiteEditor();

  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'react'>('html');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isEditMode || !selectedNode) return null;

  const isMobileDrawer = windowWidth < 768 || viewport === 'mobile';
  const currentEdit = elementEdits[selectedNode.id] || {};
  const effectiveStyleId = currentEdit.styleId || pageStyleId;
  const activeCatalog = ALL_29_STYLES.find((s) => s.id === effectiveStyleId) || ALL_29_STYLES[0];
  const activeStyles = ALL_29_STYLES.filter((s) => s.status === 'active');
  const codeSnippets = getElementCodeSnippet(selectedNode);

  const handleCopyCode = (text: string, tab: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 1800);
  };

  const handleStyleChange = (newStyleId: string) => {
    updateElementEdit(selectedNode.id, { styleId: newStyleId });
  };

  const handleCustomStyleChange = (prop: string, val: string) => {
    updateElementEdit(selectedNode.id, {
      customStyles: {
        ...(currentEdit.customStyles || {}),
        [prop]: val,
      },
    });
  };

  return (
    <aside
      data-editor-ui="true"
      style={{
        position: 'fixed',
        top: isMobileDrawer ? 'auto' : '110px',
        right: isMobileDrawer ? 0 : '16px',
        bottom: isMobileDrawer ? 0 : '16px',
        left: isMobileDrawer ? 0 : 'auto',
        width: isMobileDrawer ? '100%' : '360px',
        maxWidth: isMobileDrawer ? '100vw' : 'calc(100vw - 32px)',
        height: isMobileDrawer ? '64vh' : 'calc(100vh - 126px)',
        backgroundColor: '#0c101c',
        borderRadius: isMobileDrawer ? '18px 18px 0 0' : '12px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderBottom: isMobileDrawer ? 'none' : '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: isMobileDrawer ? '0 -10px 40px rgba(0, 0, 0, 0.9)' : '0 20px 50px rgba(0, 0, 0, 0.75)',
        zIndex: 999995,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        color: '#f8fafc',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Mobile Drawer Pill Handle */}
      {isMobileDrawer && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 0 0.2rem 0', backgroundColor: '#111726' }}>
          <div style={{ width: '40px', height: '4px', borderRadius: '2px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
        </div>
      )}

      {/* 1. Header Bar: Node Identification & Breadcrumbs */}
      <div
        style={{
          padding: '0.75rem 1rem',
          backgroundColor: '#111726',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
          <Sliders size={15} color="#38bdf8" />
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>
            {selectedNode.tagName}
          </span>
          {selectedNode.role && (
            <span style={{ fontSize: '0.6875rem', color: '#64748b', fontFamily: "'JetBrains Mono', monospace" }}>
              [{selectedNode.role}]
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <button
            onClick={undo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
            style={{
              padding: '0.25rem 0.4rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: canUndo ? '#94a3b8' : '#475569',
              cursor: canUndo ? 'pointer' : 'default',
            }}
          >
            <Undo2 size={13} />
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            title="Redo (Ctrl+Shift+Z)"
            style={{
              padding: '0.25rem 0.4rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: canRedo ? '#94a3b8' : '#475569',
              cursor: canRedo ? 'pointer' : 'default',
            }}
          >
            <Redo2 size={13} />
          </button>
          <button
            onClick={() => setSelectedNode(null)}
            title="Deselect"
            style={{
              padding: '0.25rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
            }}
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* 2. Parent Scope Breadcrumbs */}
      {selectedNode.parentChain.length > 0 && (
        <div
          style={{
            padding: '0.4rem 1rem',
            backgroundColor: '#090d16',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.6875rem',
            fontFamily: "'JetBrains Mono', monospace",
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            onClick={() => {
              // select page
              setPageStyleId(effectiveStyleId);
            }}
            style={{ color: '#64748b', cursor: 'pointer' }}
          >
            PAGE
          </span>
          {selectedNode.parentChain.map((p, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight size={10} color="#475569" />
              <span
                onClick={() => {
                  setSelectedNode({
                    id: p.id,
                    element: p.element,
                    tagName: p.tagName,
                    role: p.element.getAttribute('data-role') || undefined,
                    textContent: p.element.innerText?.trim() || '',
                    currentStyleId: p.element.getAttribute('data-style') || undefined,
                    rect: p.element.getBoundingClientRect(),
                    parentChain: selectedNode.parentChain.slice(0, idx),
                  });
                }}
                style={{ color: '#94a3b8', cursor: 'pointer' }}
              >
                {p.label}
              </span>
            </React.Fragment>
          ))}
          <ChevronRight size={10} color="#38bdf8" />
          <span style={{ color: '#38bdf8', fontWeight: 700 }}>
            {selectedNode.tagName.toUpperCase()}
          </span>
        </div>
      )}

      {/* 3. Scrollable Controls Body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* SECTION A: DESIGN LANGUAGE APPLICATION */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
            <label style={{ fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', fontFamily: "'JetBrains Mono', monospace" }}>
              Design Language
            </label>
            <span style={{ fontSize: '0.6875rem', color: activeCatalog.accentColor, fontWeight: 700 }}>
              {activeCatalog.name}
            </span>
          </div>

          <select
            id="inspector-style-select"
            value={currentEdit.styleId || pageStyleId}
            onChange={(e) => handleStyleChange(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#171f33',
              color: '#f8fafc',
              border: `1.5px solid ${activeCatalog.accentColor || '#38bdf8'}`,
              borderRadius: '6px',
              padding: '0.5rem 0.75rem',
              fontSize: '0.8125rem',
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace",
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            {activeStyles.map((st) => (
              <option key={st.id} value={st.id}>
                {st.name} ({st.category})
              </option>
            ))}
          </select>
        </div>

        {/* SECTION B: TEXT EDITING (If Applicable) */}
        {selectedNode.textContent && (
          <div>
            <label style={{ fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '0.45rem' }}>
              Text Content
            </label>
            <textarea
              id="inspector-text-input"
              rows={2}
              value={currentEdit.textContent !== undefined ? currentEdit.textContent : selectedNode.textContent}
              onChange={(e) => updateElementEdit(selectedNode.id, { textContent: e.target.value })}
              style={{
                width: '100%',
                backgroundColor: '#171f33',
                color: '#f8fafc',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '6px',
                padding: '0.5rem',
                fontSize: '0.8125rem',
                fontFamily: 'inherit',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>
        )}

        {/* SECTION C: TYPOGRAPHY CONTROLS */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
            <Type size={13} color="#94a3b8" />
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', fontFamily: "'JetBrains Mono', monospace" }}>
              Typography
            </span>
          </div>

          {/* Font Size Presets */}
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Size</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.25rem', marginTop: '0.25rem' }}>
              {['14px', '18px', '24px', '32px', '48px'].map((sz) => (
                <button
                  key={sz}
                  onClick={() => handleCustomStyleChange('fontSize', sz)}
                  style={{
                    padding: '0.25rem',
                    fontSize: '0.6875rem',
                    borderRadius: '4px',
                    border: currentEdit.customStyles?.fontSize === sz ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: currentEdit.customStyles?.fontSize === sz ? 'rgba(56, 189, 248, 0.15)' : '#131b2e',
                    color: '#f8fafc',
                    cursor: 'pointer',
                  }}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Font Weight */}
          <div>
            <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Weight</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.25rem', marginTop: '0.25rem' }}>
              {['400', '600', '700', '900'].map((wt) => (
                <button
                  key={wt}
                  onClick={() => handleCustomStyleChange('fontWeight', wt)}
                  style={{
                    padding: '0.25rem',
                    fontSize: '0.6875rem',
                    borderRadius: '4px',
                    border: currentEdit.customStyles?.fontWeight === wt ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: currentEdit.customStyles?.fontWeight === wt ? 'rgba(56, 189, 248, 0.15)' : '#131b2e',
                    color: '#f8fafc',
                    cursor: 'pointer',
                  }}
                >
                  {wt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION D: BOX MODEL & GEOMETRY */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
            <Box size={13} color="#94a3b8" />
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', fontFamily: "'JetBrains Mono', monospace" }}>
              Geometry & Borders
            </span>
          </div>

          {/* Radius Presets */}
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Corner Radius</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.25rem', marginTop: '0.25rem' }}>
              {[
                { label: '0px', val: '0px' },
                { label: '4px', val: '4px' },
                { label: '8px', val: '8px' },
                { label: '16px', val: '16px' },
                { label: 'Pill', val: '9999px' },
              ].map((rad) => (
                <button
                  key={rad.val}
                  onClick={() => handleCustomStyleChange('borderRadius', rad.val)}
                  style={{
                    padding: '0.25rem',
                    fontSize: '0.6875rem',
                    borderRadius: '4px',
                    border: currentEdit.customStyles?.borderRadius === rad.val ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: currentEdit.customStyles?.borderRadius === rad.val ? 'rgba(56, 189, 248, 0.15)' : '#131b2e',
                    color: '#f8fafc',
                    cursor: 'pointer',
                  }}
                >
                  {rad.label}
                </button>
              ))}
            </div>
          </div>

          {/* Border Width */}
          <div>
            <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Border Width</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.25rem', marginTop: '0.25rem' }}>
              {['0px', '1px', '2px', '3px', '4px'].map((bw) => (
                <button
                  key={bw}
                  onClick={() => handleCustomStyleChange('borderWidth', bw)}
                  style={{
                    padding: '0.25rem',
                    fontSize: '0.6875rem',
                    borderRadius: '4px',
                    border: currentEdit.customStyles?.borderWidth === bw ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: currentEdit.customStyles?.borderWidth === bw ? 'rgba(56, 189, 248, 0.15)' : '#131b2e',
                    color: '#f8fafc',
                    cursor: 'pointer',
                  }}
                >
                  {bw}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION E: SHADOW TREATMENT */}
        <div>
          <label style={{ fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '0.45rem' }}>
            Shadow Preset
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.35rem' }}>
            {[
              { label: 'None', val: 'none' },
              { label: 'Soft Elevated', val: '0 10px 25px -5px rgba(0, 0, 0, 0.35)' },
              { label: 'Brutalist Hard', val: '4px 4px 0px #000000' },
              { label: 'Neon Aura', val: '0 0 16px rgba(56, 189, 248, 0.65)' },
            ].map((shd) => (
              <button
                key={shd.label}
                onClick={() => handleCustomStyleChange('boxShadow', shd.val)}
                style={{
                  padding: '0.35rem',
                  fontSize: '0.6875rem',
                  borderRadius: '4px',
                  border: currentEdit.customStyles?.boxShadow === shd.val ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: currentEdit.customStyles?.boxShadow === shd.val ? 'rgba(56, 189, 248, 0.15)' : '#131b2e',
                  color: '#f8fafc',
                  cursor: 'pointer',
                }}
              >
                {shd.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION F: RESET ACTION */}
        <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button
            onClick={() => resetElement(selectedNode.id)}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              padding: '0.45rem',
              borderRadius: '6px',
              backgroundColor: '#171f33',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              fontSize: '0.75rem',
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={12} />
            Reset Element
          </button>
        </div>
      </div>

      {/* 4. Bottom Live Code Drawer */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: '#090d16',
          padding: '0.75rem 1rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
          <div style={{ display: 'flex', gap: '2px', backgroundColor: '#131b2e', borderRadius: '4px', padding: '2px' }}>
            {(['html', 'css', 'react'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCodeTab(tab)}
                style={{
                  padding: '0.15rem 0.5rem',
                  borderRadius: '3px',
                  border: 'none',
                  backgroundColor: activeCodeTab === tab ? '#0284c7' : 'transparent',
                  color: activeCodeTab === tab ? '#fff' : '#94a3b8',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleCopyCode(codeSnippets[activeCodeTab], activeCodeTab)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.2rem 0.5rem',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: copiedTab === activeCodeTab ? '#10b981' : '#cbd5e1',
              fontSize: '0.6875rem',
              cursor: 'pointer',
            }}
          >
            {copiedTab === activeCodeTab ? <Check size={11} /> : <Copy size={11} />}
            {copiedTab === activeCodeTab ? 'Copied' : 'Copy'}
          </button>
        </div>

        <pre
          style={{
            margin: 0,
            maxHeight: '90px',
            overflowY: 'auto',
            padding: '0.5rem',
            backgroundColor: '#06080e',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6875rem',
            lineHeight: 1.45,
            color: '#a5b4fc',
          }}
        >
          {codeSnippets[activeCodeTab]}
        </pre>
      </div>
    </aside>
  );
};
