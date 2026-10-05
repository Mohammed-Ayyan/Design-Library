import React from 'react';
import { ArrowRight, Sparkles, Layers, Box, Cpu, BookOpen } from 'lucide-react';

interface HeroProps {
  onExploreStyles: () => void;
  onOpenPlayground: () => void;
  onOpenDocs?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStyles, onOpenPlayground, onOpenDocs }) => {
  return (
    <section
      style={{
        padding: '4rem 1.5rem 3rem',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Product Tag */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 1rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(99, 102, 241, 0.12)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          color: '#a5b4fc',
          fontSize: '0.8125rem',
          fontWeight: 600,
          marginBottom: '1.5rem',
        }}
      >
        <Sparkles size={14} color="#818cf8" />
        <span>A Unified Styling Engine for Complete Visual Languages</span>
      </div>

      {/* Main Headline */}
      <h1
        style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          color: '#f8fafc',
          maxWidth: '900px',
          margin: '0 auto 1.25rem',
        }}
      >
        29 Distinct Visual Design Languages. <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #f43f5e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Applied Instantly to Any UI.
        </span>
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          lineHeight: 1.6,
          color: '#94a3b8',
          maxWidth: '720px',
          margin: '0 auto 2.5rem',
        }}
      >
        A design system is more than colors and fonts. The Style Engine compiles complete,
        coherent design languages—from typography and geometric rhythm to tactile borders,
        optical depth, and component interactions—directly into your elements.
      </p>

      {/* Primary CTAs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem',
        }}
      >
        <button
          id="hero-explore-btn"
          onClick={onExploreStyles}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.875rem 1.75rem',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '10px',
            border: 'none',
            background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
            color: '#ffffff',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(79, 70, 229, 0.4)',
            transition: 'all 150ms ease',
          }}
        >
          Explore Style Library
          <ArrowRight size={18} />
        </button>

        <button
          id="hero-playground-btn"
          onClick={onOpenPlayground}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.875rem 1.75rem',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backgroundColor: 'rgba(30, 41, 59, 0.6)',
            color: '#f8fafc',
            cursor: 'pointer',
            transition: 'all 150ms ease',
          }}
        >
          <Sparkles size={18} color="#38bdf8" />
          Open Visual Playground
        </button>

        {onOpenDocs && (
          <button
            id="hero-docs-btn"
            onClick={onOpenDocs}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 1.75rem',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '10px',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              color: '#fcd34d',
              cursor: 'pointer',
              transition: 'all 150ms ease',
            }}
          >
            <BookOpen size={18} />
            Documentation
          </button>
        )}
      </div>

      {/* Core Highlights Pillars */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            padding: '1.25rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
          }}
        >
          <div style={{ color: '#818cf8', marginBottom: '0.5rem' }}>
            <Layers size={22} />
          </div>
          <h4 style={{ margin: '0 0 0.25rem', color: '#f8fafc', fontSize: '0.9375rem', fontWeight: 600 }}>
            Hierarchical Scope Resolution
          </h4>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.8125rem', lineHeight: 1.5 }}>
            Apply a style to the entire page, isolate it to a section, or override a single button without style conflicts.
          </p>
        </div>

        <div
          style={{
            padding: '1.25rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
          }}
        >
          <div style={{ color: '#ffe600', marginBottom: '0.5rem' }}>
            <Box size={22} />
          </div>
          <h4 style={{ margin: '0 0 0.25rem', color: '#f8fafc', fontSize: '0.9375rem', fontWeight: 600 }}>
            Complete Design Languages
          </h4>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.8125rem', lineHeight: 1.5 }}>
            Not just colors—defining borders, corner geometry, elevation shadows, typography scales, and interactive states.
          </p>
        </div>

        <div
          style={{
            padding: '1.25rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
          }}
        >
          <div style={{ color: '#38bdf8', marginBottom: '0.5rem' }}>
            <Cpu size={22} />
          </div>
          <h4 style={{ margin: '0 0 0.25rem', color: '#f8fafc', fontSize: '0.9375rem', fontWeight: 600 }}>
            Zero Hardcoded Style Logic
          </h4>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.8125rem', lineHeight: 1.5 }}>
            Components stay pure and declarative, consuming dynamic CSS variables and style contracts computed by the engine.
          </p>
        </div>
      </div>
    </section>
  );
};
