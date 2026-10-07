import React, { useState } from 'react';
import { useSiteEditor } from '../react/context/SiteEditorContext';
import { Terminal, Edit3, Check, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export type AppTab = 'library' | 'custom-html' | 'saas-app' | 'studio' | 'playground' | 'cli' | 'docs' | 'redesign-lab';

export interface NavbarProps {
  activeTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
  onToggleDevInspector: () => void;
  isDevInspectorOpen: boolean;
  onTryEngine?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onToggleDevInspector,
  isDevInspectorOpen,
  onTryEngine,
}) => {
  const { isEditMode, toggleEditMode } = useSiteEditor();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { id: AppTab; label: string; elementId: string; badge?: string }[] = [
    { id: 'library', label: 'Style Library', elementId: 'nav-library-btn' },
    { id: 'custom-html', label: 'Custom HTML', elementId: 'nav-custom-html-btn' },
    { id: 'saas-app', label: 'Live SaaS App', elementId: 'nav-saas-app-btn', badge: 'Zero CSS' },
    { id: 'studio', label: 'Studio', elementId: 'nav-studio-btn' },
    { id: 'playground', label: 'Playground', elementId: 'nav-playground-btn' },
    { id: 'docs', label: 'Docs', elementId: 'nav-docs-btn' },
    { id: 'cli', label: 'CLI', elementId: 'nav-cli-btn' },
  ];

  const handleSelectTab = (tabId: AppTab) => {
    onSelectTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-app-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 99990,
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: 'rgba(9, 10, 15, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transition: 'all 200ms ease',
      }}
    >
      <style>{`
        @media (min-width: 861px) {
          .nav-desktop-only { display: flex !important; }
          .nav-mobile-only { display: none !important; }
          .nav-brand-full { display: inline !important; }
          .nav-brand-compact { display: none !important; }
          .nav-pill-badge { display: inline-block !important; }
        }
        @media (max-width: 860px) {
          .nav-desktop-only { display: none !important; }
          .nav-mobile-only { display: flex !important; }
          .nav-brand-full { display: none !important; }
          .nav-brand-compact { display: inline !important; }
          .nav-pill-badge { display: none !important; }
          .nav-container-pad { padding: 0.65rem 1rem !important; gap: 0.75rem !important; }
        }
      `}</style>

      <div
        className="nav-container-pad"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0.75rem 1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Brand Architecture Identity */}
        <div
          onClick={() => handleSelectTab('library')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          {/* Monogram Icon */}
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              backgroundColor: '#181920',
              border: '1px solid #2e303d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f8fafc',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              flexShrink: 0,
            }}
          >
            DS
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              className="nav-brand-full"
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#f8fafc',
                fontFamily: "'Inter', sans-serif",
                whiteSpace: 'nowrap',
              }}
            >
              DESIGN STYLE STUDIO
            </span>
            <span
              className="nav-brand-compact"
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#f8fafc',
                fontFamily: "'Inter', sans-serif",
                whiteSpace: 'nowrap',
              }}
            >
              STYLE STUDIO
            </span>
            <span
              className="nav-pill-badge"
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                padding: '2px 7px',
                borderRadius: '4px',
                backgroundColor: '#14161f',
                color: '#8e96a4',
                border: '1px solid #252836',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
              }}
            >
              32 ARCHITECTURES
            </span>
          </div>
        </div>

        {/* Central Unified Navigation Links (Desktop Only) */}
        <nav
          className="nav-desktop-only"
          style={{
            alignItems: 'center',
            gap: '0.35rem',
            backgroundColor: '#10121a',
            padding: '3px 4px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeTab === link.id || (link.id === 'custom-html' && activeTab === 'redesign-lab');
            return (
              <button
                key={link.id}
                id={link.elementId}
                onClick={() => handleSelectTab(link.id)}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? 600 : 500,
                  borderRadius: '6px',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                  backgroundColor: isActive ? '#1c202c' : 'transparent',
                  color: isActive ? '#f8fafc' : '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 120ms ease',
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#f1f5f9';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      padding: '1px 5px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(56, 189, 248, 0.15)',
                      color: '#38bdf8',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: '0.02em',
                      lineHeight: '1.2',
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          {/* Primary: In-Situ Site Editor Button */}
          <button
            id="nav-edit-mode-btn"
            onClick={toggleEditMode}
            title={isEditMode ? 'Exit in-situ site editing mode' : 'Make entire website editable in-place'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              borderRadius: '6px',
              border: isEditMode
                ? '1px solid rgba(34, 197, 94, 0.5)'
                : '1px solid rgba(255, 255, 255, 0.14)',
              backgroundColor: isEditMode
                ? 'rgba(34, 197, 94, 0.12)'
                : '#161922',
              color: isEditMode ? '#4ade80' : '#f8fafc',
              cursor: 'pointer',
              transition: 'all 120ms ease',
              fontFamily: "'Inter', sans-serif",
              minHeight: '38px',
            }}
          >
            {isEditMode ? (
              <>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    display: 'inline-block',
                  }}
                />
                <Check size={13} />
                <span>Done</span>
              </>
            ) : (
              <>
                <Edit3 size={13} color="#94a3b8" />
                <span>Edit Site</span>
              </>
            )}
          </button>

          {/* Secondary: Inspector / Telemetry Trigger */}
          <button
            id="nav-toggle-inspector-btn"
            onClick={onToggleDevInspector}
            title="Inspect Style Engine Tokens & Telemetry"
            style={{
              padding: '0.45rem 0.6rem',
              borderRadius: '6px',
              border: isDevInspectorOpen
                ? '1px solid rgba(255, 255, 255, 0.3)'
                : '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: isDevInspectorOpen ? '#202432' : '#10121a',
              color: isDevInspectorOpen ? '#f8fafc' : '#8e96a4',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 120ms ease',
              minHeight: '38px',
              minWidth: '38px',
            }}
          >
            <Terminal size={14} />
          </button>

          {/* Mobile Hamburger Trigger (Mobile Only) */}
          <button
            id="nav-mobile-menu-btn"
            className="nav-mobile-only"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              padding: '0.45rem 0.65rem',
              borderRadius: '6px',
              border: isMobileMenuOpen ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid rgba(255, 255, 255, 0.12)',
              backgroundColor: isMobileMenuOpen ? '#1e2433' : '#161922',
              color: '#f8fafc',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '38px',
              minWidth: '38px',
            }}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          style={{
            backgroundColor: '#0c0e16',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
          }}
        >
          <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '0.25rem', fontFamily: "'JetBrains Mono', monospace" }}>
            Navigation
          </div>

          {navLinks.map((link) => {
            const isActive = activeTab === link.id || (link.id === 'custom-html' && activeTab === 'redesign-lab');
            return (
              <button
                key={link.id}
                onClick={() => handleSelectTab(link.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: isActive ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                  backgroundColor: isActive ? 'rgba(59, 130, 246, 0.12)' : '#141722',
                  color: isActive ? '#60a5fa' : '#f8fafc',
                  fontSize: '0.9375rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                  minHeight: '46px',
                  transition: 'all 120ms ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      style={{
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        padding: '1px 5px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(56, 189, 248, 0.15)',
                        color: '#38bdf8',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {link.badge}
                    </span>
                  )}
                </div>
                {isActive ? (
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', backgroundColor: '#2563eb', color: '#fff' }}>
                    Active
                  </span>
                ) : (
                  <ArrowRight size={14} color="#64748b" />
                )}
              </button>
            );
          })}

          {onTryEngine && (
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <button
                onClick={() => {
                  onTryEngine();
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  minHeight: '46px',
                }}
              >
                <Sparkles size={16} />
                Open Design Studio
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
