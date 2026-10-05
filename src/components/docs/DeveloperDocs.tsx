import React, { useState, useEffect } from 'react';
import { Menu, Search } from 'lucide-react';
import { DocsSidebar } from './DocsSidebar';
import { DocsContent } from './DocsContent';
import { DocsSearchModal } from './DocsSearchModal';
import { getSectionById, ALL_SECTIONS } from './docsData';

interface DeveloperDocsProps {
  initialSectionId?: string;
  onOpenPlaygroundWithStyle?: (styleId: string) => void;
}

export const DeveloperDocs: React.FC<DeveloperDocsProps> = ({
  initialSectionId = 'intro',
  onOpenPlaygroundWithStyle,
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(initialSectionId);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Sync with initialSectionId prop if changed
  useEffect(() => {
    if (initialSectionId && getSectionById(initialSectionId)) {
      setActiveSectionId(initialSectionId);
    }
  }, [initialSectionId]);

  // Global keyboard shortcut: "/" to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) &&
        !isSearchOpen
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSectionId]);

  const activeSection = getSectionById(activeSectionId) || ALL_SECTIONS[0];

  return (
    <div
      style={{
        display: 'flex',
        minHeight: 'calc(100vh - 72px)',
        backgroundColor: '#090d16',
        color: '#f8fafc',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Mobile Top Sub-Header */}
      <div
        className="docs-mobile-header"
        style={{
          display: 'none',
          position: 'sticky',
          top: '72px',
          zIndex: 30,
          backgroundColor: '#0f172a',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.65rem 1.25rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.75rem',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#f8fafc',
            fontSize: '0.8125rem',
            cursor: 'pointer',
          }}
        >
          <Menu size={16} />
          <span>Menu</span>
        </button>

        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0' }}>
          {activeSection.title}
        </span>

        <button
          onClick={() => setIsSearchOpen(true)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <Search size={18} />
        </button>
      </div>

      {/* Docs Sidebar */}
      <DocsSidebar
        activeSectionId={activeSectionId}
        onSelectSection={(id) => setActiveSectionId(id)}
        onOpenSearch={() => setIsSearchOpen(true)}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Docs Main Content Viewport */}
      <main style={{ flex: 1, minWidth: 0, overflowX: 'hidden' }}>
        <DocsContent
          section={activeSection}
          onNavigateSection={(id) => setActiveSectionId(id)}
          onOpenPlaygroundWithStyle={onOpenPlaygroundWithStyle}
        />
      </main>

      {/* Search Modal */}
      <DocsSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSection={(id) => setActiveSectionId(id)}
      />
    </div>
  );
};
