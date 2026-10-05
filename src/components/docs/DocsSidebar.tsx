import React from 'react';
import { Search, ChevronRight, X } from 'lucide-react';
import { DOC_CATEGORIES } from './docsData';

interface DocsSidebarProps {
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
  onOpenSearch: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const DocsSidebar: React.FC<DocsSidebarProps> = ({
  activeSectionId,
  onSelectSection,
  onOpenSearch,
  isMobileOpen,
  onCloseMobile,
}) => {
  const content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1.25rem 0.75rem',
        boxSizing: 'border-box',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Search trigger button */}
      <button
        onClick={onOpenSearch}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0.6rem 0.85rem',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backgroundColor: 'rgba(30, 41, 59, 0.6)',
          color: '#94a3b8',
          fontSize: '0.8125rem',
          cursor: 'pointer',
          marginBottom: '1.5rem',
          transition: 'all 150ms ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Search size={14} />
          <span>Search documentation...</span>
        </div>
        <kbd
          style={{
            fontSize: '0.6875rem',
            padding: '0.1rem 0.35rem',
            borderRadius: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#cbd5e1',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          /
        </kbd>
      </button>

      {/* Categories & Items List */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          paddingRight: '0.25rem',
        }}
      >
        {DOC_CATEGORIES.map((category) => (
          <div key={category.title}>
            <div
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#64748b',
                padding: '0 0.75rem 0.5rem',
              }}
            >
              {category.title}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {category.items.map((item) => {
                const isActive = item.id === activeSectionId;
                return (
                  <button
                    key={item.id}
                    id={`doc-nav-${item.id}`}
                    onClick={() => {
                      onSelectSection(item.id);
                      onCloseMobile();
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '6px',
                      border: isActive
                        ? '1px solid rgba(99, 102, 241, 0.4)'
                        : '1px solid transparent',
                      backgroundColor: isActive
                        ? 'rgba(99, 102, 241, 0.15)'
                        : 'transparent',
                      color: isActive ? '#f8fafc' : '#94a3b8',
                      fontWeight: isActive ? 600 : 400,
                      fontSize: '0.8125rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 120ms ease',
                    }}
                  >
                    <span>{item.title}</span>
                    {isActive && <ChevronRight size={13} color="#818cf8" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside
        style={{
          width: '260px',
          flexShrink: 0,
          position: 'sticky',
          top: '72px',
          height: 'calc(100vh - 72px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: '#0a0f1d',
          display: 'none',
        }}
        className="docs-desktop-sidebar"
      >
        {content}
      </aside>

      {/* Mobile Drawer Backdrop & Drawer */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 70,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '80%',
              maxWidth: '320px',
              backgroundColor: '#0a0f1d',
              borderRight: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Mobile Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>
                Documentation Index
              </span>
              <button
                onClick={onCloseMobile}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
