import React, { useState, useEffect } from 'react';
import { StyleEngine } from './core/engine';
import { defaultStyles } from './styles';
import { StyleEngineProvider } from './react/context/StyleEngineContext';
import { Navbar, AppTab } from './components/Navbar';
import { TransformationHero } from './components/TransformationHero';
import { StyleGallery } from './components/StyleGallery';
import { StyleDetailModal } from './components/StyleDetailModal';
import { Playground } from './components/Playground';
import { DesignStudio } from './components/DesignStudio';
import { CliStudio } from './components/CliStudio';
import { DevInspectorDrawer } from './components/DevInspectorDrawer';
import { RedesignLab } from './components/RedesignLab';
import { DeveloperDocs } from './components/docs/DeveloperDocs';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SaasApp } from './components/saas/SaasApp';
import { SiteEditorProvider, useSiteEditor } from './react/context/SiteEditorContext';
import { SiteEditorTopBar } from './components/editor/SiteEditorTopBar';
import { SiteEditorOverlay } from './components/editor/SiteEditorOverlay';
import { SiteEditorInspector } from './components/editor/SiteEditorInspector';

// Initialize the central Style Engine with the real design styles
const engine = new StyleEngine(defaultStyles);

function getInitialTabFromLocation(): AppTab {
  if (typeof window === 'undefined') return 'library';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (path.includes('/cli') || hash.includes('#cli')) return 'cli';
  if (path.includes('/studio') || hash.includes('#studio')) return 'studio';
  if (path.includes('/playground') || hash.includes('#playground')) return 'playground';
  if (path.includes('/docs') || hash.includes('#docs')) return 'docs';
  if (path.includes('/custom-html') || hash.includes('#custom-html') || path.includes('/redesign-lab') || hash.includes('#redesign-lab')) return 'custom-html';
  if (path.includes('/saas') || hash.includes('#saas') || path.includes('/saas-app') || hash.includes('#saas-app')) return 'saas-app';
  return 'library';
}

const AppContent: React.FC = () => {
  const { isEditMode, viewport, pageStyleId } = useSiteEditor();
  const [activeTab, setActiveTabState] = useState<AppTab>(getInitialTabFromLocation);
  const [selectedDetailStyleId, setSelectedDetailStyleId] = useState<string | null>(null);
  const [studioInitialStyle, setStudioInitialStyle] = useState<string>('wabi-sabi');
  const [heroStyleId, setHeroStyleId] = useState<string>('wabi-sabi');
  const [playgroundInitialStyle, setPlaygroundInitialStyle] = useState<string>('wabi-sabi');
  const [docsInitialSection, setDocsInitialSection] = useState<string>('intro');
  const [isDevInspectorOpen, setIsDevInspectorOpen] = useState<boolean>(false);

  // Sync tab changes with browser URL and history
  const setActiveTab = (tab: AppTab) => {
    setActiveTabState(tab);
    if (typeof window !== 'undefined') {
      const newPath = tab === 'library' ? '/' : `/${tab}`;
      if (window.location.pathname !== newPath) {
        window.history.pushState({ tab }, '', newPath);
      }
    }
  };

  // Handle browser back and forward button navigation
  useEffect(() => {
    const handlePopState = () => {
      setActiveTabState(getInitialTabFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenDetail = (styleId: string) => {
    setSelectedDetailStyleId(styleId);
  };

  const handleCloseDetail = () => {
    setSelectedDetailStyleId(null);
  };

  const handleOpenStudioWithStyle = (styleId?: string) => {
    setStudioInitialStyle(styleId || 'wabi-sabi');
    setActiveTab('studio');
  };

  const handleOpenPlaygroundWithStyle = (styleId?: string) => {
    setPlaygroundInitialStyle(styleId || 'wabi-sabi');
    setActiveTab('playground');
  };

  const handleOpenDocs = (sectionId?: string) => {
    if (sectionId) {
      if (defaultStyles.some((s) => s.id === sectionId)) {
        setDocsInitialSection('style-reference');
      } else {
        setDocsInitialSection(sectionId);
      }
    }
    setActiveTab('docs');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#090a0f',
        backgroundImage:
          'radial-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        color: '#f8fafc',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onToggleDevInspector={() => setIsDevInspectorOpen(!isDevInspectorOpen)}
        isDevInspectorOpen={isDevInspectorOpen}
        onTryEngine={() => handleOpenStudioWithStyle('wabi-sabi')}
      />

      {/* In-Situ Site Editor Top Bar */}
      <SiteEditorTopBar />

      {/* Responsive Viewport Simulation Wrapper */}
      <div
        id="site-viewport-container"
        className={isEditMode && pageStyleId ? `lab-styled-preview style-${pageStyleId} ${pageStyleId}-styled-container` : ''}
        data-style={isEditMode && pageStyleId ? pageStyleId : undefined}
        style={{
          flex: 1,
          width: isEditMode && viewport === 'tablet' ? '768px' : isEditMode && viewport === 'mobile' ? '375px' : '100%',
          maxWidth: '100%',
          margin: '0 auto',
          boxShadow: isEditMode && viewport !== 'desktop' ? '0 0 50px rgba(0, 0, 0, 0.95)' : 'none',
          borderLeft: isEditMode && viewport !== 'desktop' ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
          borderRight: isEditMode && viewport !== 'desktop' ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
          transition: 'width 240ms cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Main Content Area */}
        <main style={{ flex: 1 }}>
          {activeTab === 'library' && (
            <>
              <TransformationHero
                selectedStyleId={heroStyleId}
                onSelectStyleId={setHeroStyleId}
                onOpenPlayground={(id) => handleOpenStudioWithStyle(id || heroStyleId)}
                onOpenDocs={handleOpenDocs}
              />
              <HowItWorksSection
                onOpenCustomHtml={() => setActiveTab('custom-html')}
                onOpenSaasApp={() => setActiveTab('saas-app')}
                onOpenStudio={handleOpenStudioWithStyle}
                onOpenDocs={handleOpenDocs}
              />
              <StyleGallery
                onOpenStyleDetail={handleOpenDetail}
                onOpenPlaygroundWithStyle={handleOpenStudioWithStyle}
                onOpenDocs={handleOpenDocs}
                onTryStyle={(styleId) => {
                  setHeroStyleId(styleId);
                  const el = document.getElementById('transformation-hero-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </>
          )}

          {(activeTab === 'custom-html' || activeTab === 'redesign-lab') && (
            <RedesignLab />
          )}

          {activeTab === 'saas-app' && (
            <SaasApp
              onBackToLibrary={() => setActiveTab('library')}
              onOpenCustomHtml={() => setActiveTab('custom-html')}
            />
          )}

          {activeTab === 'studio' && (
            <DesignStudio
              initialStyleId={studioInitialStyle}
              onOpenDocs={handleOpenDocs}
              onOpenCli={() => setActiveTab('cli')}
            />
          )}

          {activeTab === 'playground' && (
            <Playground initialStyleId={playgroundInitialStyle} />
          )}

          {activeTab === 'cli' && (
            <CliStudio
              onOpenStudio={handleOpenStudioWithStyle}
              onOpenDocs={handleOpenDocs}
            />
          )}

          {activeTab === 'docs' && (
            <DeveloperDocs
              initialSectionId={docsInitialSection}
              onOpenPlaygroundWithStyle={handleOpenPlaygroundWithStyle}
            />
          )}
        </main>

        {/* Global Architectural Footer */}
        <footer
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#0c0e14',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            fontSize: '0.875rem',
            color: '#8e96a4',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1rem', letterSpacing: '-0.01em' }}>
              Design Style Library & Unified Style Studio
            </div>
            <p style={{ margin: 0, maxWidth: '650px', lineHeight: 1.6, fontSize: '0.8125rem' }}>
              Architectural design compiler for raw semantic HTML. Supporting 32 distinct visual languages,
              hierarchical scope cascades, real-time studio authoring, and offline CLI transformation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.8125rem' }}>
              <span
                onClick={() => setActiveTab('library')}
                style={{ cursor: 'pointer', color: activeTab === 'library' ? '#f8fafc' : '#8e96a4', fontWeight: activeTab === 'library' ? 600 : 400 }}
              >
                Style Library
              </span>
              <span
                onClick={() => setActiveTab('custom-html')}
                style={{ cursor: 'pointer', color: (activeTab === 'custom-html' || activeTab === 'redesign-lab') ? '#f8fafc' : '#8e96a4', fontWeight: (activeTab === 'custom-html' || activeTab === 'redesign-lab') ? 600 : 400 }}
              >
                Custom HTML
              </span>
              <span
                onClick={() => setActiveTab('saas-app')}
                style={{ cursor: 'pointer', color: activeTab === 'saas-app' ? '#f8fafc' : '#8e96a4', fontWeight: activeTab === 'saas-app' ? 600 : 400 }}
              >
                Live SaaS App (Zero CSS)
              </span>
              <span
                onClick={() => setActiveTab('studio')}
                style={{ cursor: 'pointer', color: activeTab === 'studio' ? '#f8fafc' : '#8e96a4', fontWeight: activeTab === 'studio' ? 600 : 400 }}
              >
                Design Studio
              </span>
              <span
                onClick={() => setActiveTab('playground')}
                style={{ cursor: 'pointer', color: activeTab === 'playground' ? '#f8fafc' : '#8e96a4', fontWeight: activeTab === 'playground' ? 600 : 400 }}
              >
                Playground
              </span>
              <span
                onClick={() => setActiveTab('cli')}
                style={{ cursor: 'pointer', color: activeTab === 'cli' ? '#f8fafc' : '#8e96a4', fontWeight: activeTab === 'cli' ? 600 : 400 }}
              >
                CLI Terminal
              </span>
              <span
                onClick={() => handleOpenDocs('intro')}
                style={{ cursor: 'pointer', color: activeTab === 'docs' ? '#f8fafc' : '#8e96a4', fontWeight: activeTab === 'docs' ? 600 : 400 }}
              >
                Documentation
              </span>
              <span
                onClick={() => setIsDevInspectorOpen(true)}
                style={{ cursor: 'pointer', color: '#8e96a4' }}
              >
                Token Telemetry
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* In-Situ Site Editor Interactive Overlays & Contextual Inspector */}
      <SiteEditorOverlay />
      <SiteEditorInspector />

      {/* Style Detail Experience Modal */}
      <StyleDetailModal
        styleId={selectedDetailStyleId}
        onClose={handleCloseDetail}
        onOpenInPlayground={handleOpenStudioWithStyle}
        onOpenDocs={handleOpenDocs}
      />

      {/* Discreet Developer Drawer */}
      <DevInspectorDrawer
        isOpen={isDevInspectorOpen}
        onClose={() => setIsDevInspectorOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <StyleEngineProvider engine={engine} initialStyleId="base">
      <SiteEditorProvider>
        <AppContent />
      </SiteEditorProvider>
    </StyleEngineProvider>
  );
};

export default App;
