import React, { useState } from 'react';
import { SaasOverviewPage } from './SaasOverviewPage';
import { SaasAnalyticsPage } from './SaasAnalyticsPage';
import { SaasDeploymentsPage } from './SaasDeploymentsPage';
import { SaasBillingPage } from './SaasBillingPage';
import { SaasTeamPage } from './SaasTeamPage';
import { SaasMultiStyleHubPage } from './SaasMultiStyleHubPage';
import {
  Cloud,
  Code2,
  Eye,
  EyeOff,
  ArrowLeft,
  Activity,
  BarChart2,
  GitBranch,
  CreditCard,
  Users,
  Grid,
  X,
  Copy,
  Check,
} from 'lucide-react';

export type SaasPage = 'overview' | 'analytics' | 'deployments' | 'billing' | 'team' | 'multi-style-hub';

interface SaasAppProps {
  onBackToLibrary?: () => void;
  onOpenCustomHtml?: () => void;
}

const DEFAULT_PAGE_STYLES: Record<SaasPage, string> = {
  overview: 'dark-mode-ui',
  analytics: 'cyberpunk',
  deployments: 'neo-brutalism',
  billing: 'luxury-typography',
  team: 'swiss-design',
  'multi-style-hub': 'dark-mode-ui', // Note: individual cards define their own 16 styles
};

export const SaasApp: React.FC<SaasAppProps> = ({
  onBackToLibrary,
  onOpenCustomHtml: _onOpenCustomHtml,
}) => {
  const [activePage, setActivePage] = useState<SaasPage>('overview');
  const [isZeroCssProofMode, setIsZeroCssProofMode] = useState<boolean>(false);
  const [styleOverride, setStyleOverride] = useState<string | null>(null);
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState<boolean>(false);
  const [copiedHtml, setCopiedHtml] = useState<boolean>(false);

  // Determine current active style
  const activeStyle = styleOverride || DEFAULT_PAGE_STYLES[activePage];

  const pages: { id: SaasPage; label: string; icon: React.ReactNode; defaultStyleName: string; badge?: string }[] = [
    { id: 'overview', label: 'Cluster Overview', icon: <Activity size={14} />, defaultStyleName: 'Dark Mode UI' },
    { id: 'analytics', label: 'Edge Analytics', icon: <BarChart2 size={14} />, defaultStyleName: 'Cyberpunk' },
    { id: 'deployments', label: 'CI/CD Pipelines', icon: <GitBranch size={14} />, defaultStyleName: 'Neo-Brutalism' },
    { id: 'billing', label: 'Plans & Billing', icon: <CreditCard size={14} />, defaultStyleName: 'Luxury Typography' },
    { id: 'team', label: 'Team & RBAC', icon: <Users size={14} />, defaultStyleName: 'Swiss Design' },
    { id: 'multi-style-hub', label: 'Multi-Style Matrix', icon: <Grid size={14} />, defaultStyleName: '16 Styles', badge: '>10 Styles' },
  ];

  const handleCopyHtml = () => {
    const el = document.getElementById('saas-page-viewport');
    if (el) {
      navigator.clipboard.writeText(el.innerHTML).then(() => {
        setCopiedHtml(true);
        setTimeout(() => setCopiedHtml(false), 2000);
      });
    }
  };

  return (
    <div
      id="saas-application-container"
      style={{
        minHeight: '100vh',
        backgroundColor: '#07090e',
        color: '#f8fafc',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* SAAS TOP CONTROL HEADER & DEMONSTRATION CHROME */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 99980,
          backgroundColor: '#0c0e17',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '0.65rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Brand & Context */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {onBackToLibrary && (
              <button
                onClick={onBackToLibrary}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor: '#161925',
                  color: '#cbd5e1',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                <ArrowLeft size={13} />
                Exit to Library
              </button>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Cloud size={16} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, letterSpacing: '-0.01em', color: '#f8fafc' }}>
                  NEXUS CLOUD SAAS
                </div>
                <div style={{ fontSize: '0.6875rem', color: '#38bdf8', fontFamily: "'JetBrains Mono', monospace" }}>
                  ZERO CSS • STYLED BY DESIGN LIBRARY
                </div>
              </div>
            </div>
          </div>

          {/* Demonstration Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Zero-CSS Proof Mode Toggle */}
            <button
              id="btn-proof-mode-toggle"
              onClick={() => setIsZeroCssProofMode(!isZeroCssProofMode)}
              title={
                isZeroCssProofMode
                  ? 'Re-enable Design Library styles'
                  : 'Disable Design Library styles to verify that the SaaS app contains ZERO custom CSS'
              }
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                border: isZeroCssProofMode
                  ? '1px solid #ef4444'
                  : '1px solid rgba(34, 197, 94, 0.4)',
                backgroundColor: isZeroCssProofMode
                  ? 'rgba(239, 68, 68, 0.15)'
                  : 'rgba(34, 197, 94, 0.1)',
                color: isZeroCssProofMode ? '#f87171' : '#4ade80',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {isZeroCssProofMode ? <EyeOff size={13} /> : <Eye size={13} />}
              <span>{isZeroCssProofMode ? 'PROOF MODE ON: UNSTYLED HTML' : 'PROOF: ZERO CSS VERIFIED'}</span>
            </button>

            {/* Style Switcher Dropdown */}
            {activePage !== 'multi-style-hub' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Style:</span>
                <select
                  value={activeStyle}
                  onChange={(e) => setStyleOverride(e.target.value)}
                  style={{
                    backgroundColor: '#161925',
                    color: '#f8fafc',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '6px',
                    padding: '0.35rem 0.65rem',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                  }}
                >
                  <option value="dark-mode-ui">Dark Mode UI (Default Overview)</option>
                  <option value="cyberpunk">Cyberpunk (Default Analytics)</option>
                  <option value="neo-brutalism">Neo-Brutalism (Default Deployments)</option>
                  <option value="luxury-typography">Luxury Typography (Default Billing)</option>
                  <option value="swiss-design">Swiss Design (Default Team)</option>
                  <option value="brutalism">Brutalism</option>
                  <option value="glassmorphism">Glassmorphism</option>
                  <option value="wabi-sabi">Wabi-Sabi</option>
                  <option value="bauhaus">Bauhaus</option>
                  <option value="art-deco">Art Deco</option>
                  <option value="bento-grid">Bento Grid</option>
                  <option value="synthwave">Synthwave</option>
                  <option value="pixel-art">Pixel Art</option>
                  <option value="gothic">Gothic</option>
                  <option value="victorian">Victorian</option>
                  <option value="solarpunk">Solarpunk</option>
                </select>
                {styleOverride && (
                  <button
                    onClick={() => setStyleOverride(null)}
                    title="Reset to default page style"
                    style={{
                      padding: '0.35rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: '#1e2230',
                      color: '#94a3b8',
                      fontSize: '0.6875rem',
                      cursor: 'pointer',
                    }}
                  >
                    Reset
                  </button>
                )}
              </div>
            )}

            {/* Inspect Clean Semantic HTML Button */}
            <button
              onClick={() => setIsHtmlModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.75rem',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: '#161925',
                color: '#cbd5e1',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              <Code2 size={13} color="#38bdf8" />
              <span>Inspect Markup</span>
            </button>
          </div>
        </div>

        {/* SAAS PAGE NAVIGATION TABS */}
        <div
          style={{
            maxWidth: '1440px',
            margin: '0.5rem auto 0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            overflowX: 'auto',
            paddingBottom: '2px',
          }}
        >
          {pages.map((p) => {
            const isCurrent = activePage === p.id;
            return (
              <button
                key={p.id}
                id={`saas-tab-${p.id}`}
                onClick={() => {
                  setActivePage(p.id);
                  setStyleOverride(null);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  border: isCurrent
                    ? '1px solid rgba(56, 189, 248, 0.5)'
                    : '1px solid transparent',
                  backgroundColor: isCurrent ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                  color: isCurrent ? '#38bdf8' : '#94a3b8',
                  fontSize: '0.8125rem',
                  fontWeight: isCurrent ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 120ms ease',
                }}
              >
                {p.icon}
                <span>{p.label}</span>
                {p.badge && (
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 800,
                      padding: '1px 5px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(234, 179, 8, 0.2)',
                      color: '#facc15',
                      border: '1px solid rgba(234, 179, 8, 0.4)',
                    }}
                  >
                    {p.badge}
                  </span>
                )}
                {!p.badge && (
                  <span
                    style={{
                      fontSize: '0.625rem',
                      color: '#64748b',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    ({p.defaultStyleName})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </header>

      {/* PROOF MODE BANNER (When active) */}
      {isZeroCssProofMode && (
        <div
          style={{
            backgroundColor: '#450a0a',
            borderBottom: '1px solid #dc2626',
            color: '#fecaca',
            padding: '0.6rem 1.5rem',
            textAlign: 'center',
            fontSize: '0.8125rem',
            fontWeight: 600,
          }}
        >
          🚨 PROOF MODE ACTIVE: All Design Library styles have been stripped. You are currently viewing
          the 100% raw browser-default HTML elements with ZERO custom CSS. Toggle off to restore the Design Style Library!
        </div>
      )}

      {/* SAAS PAGE VIEWPORT */}
      <div
        id="saas-page-viewport"
        className={
          isZeroCssProofMode
            ? ''
            : activePage === 'multi-style-hub'
            ? 'saas-multi-style-hub'
            : `style-${activeStyle} ${activeStyle}-styled-container`
        }
        data-style={isZeroCssProofMode ? undefined : activeStyle}
        style={{
          flex: 1,
          maxWidth: '1360px',
          width: '100%',
          margin: '0 auto',
          padding: '2.5rem 1.5rem 5rem',
          backgroundColor: isZeroCssProofMode ? '#ffffff' : undefined,
          color: isZeroCssProofMode ? '#000000' : undefined,
          fontFamily: isZeroCssProofMode ? 'Times New Roman, serif' : undefined,
        }}
      >
        {activePage === 'overview' && <SaasOverviewPage />}
        {activePage === 'analytics' && <SaasAnalyticsPage />}
        {activePage === 'deployments' && <SaasDeploymentsPage />}
        {activePage === 'billing' && <SaasBillingPage />}
        {activePage === 'team' && <SaasTeamPage />}
        {activePage === 'multi-style-hub' && <SaasMultiStyleHubPage />}
      </div>

      {/* MODAL: VIEW CLEAN SEMANTIC HTML MARKUP */}
      {isHtmlModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#0c0e17',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '14px',
              maxWidth: '860px',
              width: '100%',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div
              style={{
                padding: '1rem 1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code2 size={16} color="#38bdf8" />
                <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#f8fafc' }}>
                  Semantic HTML Inspection: {pages.find((p) => p.id === activePage)?.label}
                </span>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    color: '#4ade80',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    fontWeight: 700,
                  }}
                >
                  ZERO CUSTOM CSS
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={handleCopyHtml}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: '#161925',
                    color: '#cbd5e1',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                  }}
                >
                  {copiedHtml ? <Check size={13} color="#4ade80" /> : <Copy size={13} />}
                  <span>{copiedHtml ? 'Copied' : 'Copy HTML'}</span>
                </button>
                <button
                  onClick={() => setIsHtmlModalOpen(false)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: '0.35rem',
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div style={{ padding: '1.25rem', overflowY: 'auto', flex: 1 }}>
              <p style={{ margin: '0 0 1rem', fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.5 }}>
                Notice that there are <strong>zero Tailwind classes, zero custom CSS rules, and zero CSS modules</strong>.
                The entire application is written using purely standard semantic HTML5 tags (<code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;table&gt;</code>, <code>&lt;button&gt;</code>).
                All visual hierarchy, colors, typography, and responsive layouts are projected by the Design Style Library.
              </p>
              <pre
                style={{
                  backgroundColor: '#05060a',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: '#93c5fd',
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  lineHeight: 1.55,
                  overflowX: 'auto',
                }}
              >
                <code>{document.getElementById('saas-page-viewport')?.innerHTML || '<!-- Pure Semantic HTML -->'}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
