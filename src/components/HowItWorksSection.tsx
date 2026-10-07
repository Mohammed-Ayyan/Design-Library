import React, { useState, useRef } from 'react';
import {
  Cpu,
  Code2,
  Sparkles,
  Play,
  Pause,
  Maximize2,
  Volume2,
  VolumeX,
  ShieldCheck,
  Zap,
  Compass,
} from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenCustomHtml?: () => void;
  onOpenSaasApp?: () => void;
  onOpenStudio?: (styleId?: string) => void;
  onOpenDocs?: (sectionId?: string) => void;
}

interface PipelineStage {
  id: number;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  codeTitle: string;
  codeSnippet: string;
  visualRole: string;
  metrics: { label: string; value: string }[];
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 1,
    title: '1. Semantic DOM Ingestion',
    tagline: 'Zero wrappers. Zero class soup. 100% standard HTML5.',
    badge: 'RAW INPUT',
    description:
      'Unlike component libraries that demand custom JSX wrappers (<Box>, <Stack>, <Button variant="solid">) or utility frameworks that litter markup with Tailwind strings, our engine accepts pure, unadulterated HTML5 elements: <header>, <article>, <button>, <table>, and <form>.',
    codeTitle: 'Input: Pure Semantic HTML',
    codeSnippet: `<main>
  <header>
    <h1>Autonomous Cloud Mesh</h1>
    <p>Sub-millisecond compute orchestration.</p>
    <button>Deploy Cluster</button>
  </header>
  <section>
    <article>
      <h3>Edge Nodes</h3>
      <strong>1,024 Active</strong>
      <button>Manage Fleet</button>
    </article>
  </section>
</main>`,
    visualRole: 'Unstyled DOM Tree',
    metrics: [
      { label: 'DOM Mutation', value: '0 bytes' },
      { label: 'Class Pollution', value: 'Zero' },
      { label: 'Accessibility', value: '100% Native' },
    ],
  },
  {
    id: 2,
    title: '2. Context & Role Analyzer (AST Engine)',
    tagline: 'Deep structural parsing and semantic intent recognition.',
    badge: 'AST ENGINE',
    description:
      'The AST DOM Analyzer traverses the element tree and infers contextual roles: distinguishing a primary hero CTA from an auxiliary table action, recognizing an <article> as a pricing card vs an editorial essay, and gauging element density, heading hierarchy, and data structures.',
    codeTitle: 'Inferred AST & Context Matrix',
    codeSnippet: `// AST Context Analysis Output
{
  "rootRole": "cloud-mesh-hero",
  "elements": {
    "header": { "role": "hero-billboard", "depth": 1 },
    "header.button": { "role": "primary-cta", "priority": "high" },
    "article": { "role": "kpi-metric-tile", "density": "compact" },
    "article.strong": { "role": "data-metric-readout" },
    "article.button": { "role": "secondary-action", "surface": "card-local" }
  },
  "confidenceScore": 0.994
}`,
    visualRole: 'Semantic AST Graph',
    metrics: [
      { label: 'Inference Depth', value: 'Recursive 6-level' },
      { label: 'Detection Speed', value: '0.34ms' },
      { label: 'Role Types', value: '48 Semantic Archetypes' },
    ],
  },
  {
    id: 3,
    title: '3. Aesthetic Grammar Synthesis',
    tagline: 'Harmonizing historical and modern design systems.',
    badge: 'TOKEN RESOLVER',
    description:
      'The engine binds the inferred semantic roles to the specific design language grammar. It resolves typography optical weights, surface elevation models, border physics, color gamut ratios, and micro-textures from our 32 authentic design languages without hardcoding.',
    codeTitle: 'Synthesized Design Tokens',
    codeSnippet: `/* Resolved Design Grammar Tokens */
:root, .style-cyberpunk {
  --ds-font-family-heading: 'Space Grotesk', sans-serif;
  --ds-font-family-base: 'JetBrains Mono', monospace;
  --ds-color-primary: #00f0ff;      /* Laser Cyan */
  --ds-color-secondary: #ff0055;    /* High-Voltage Magenta */
  --ds-color-background: #050508;   /* Terminal Void */
  --ds-color-surface: #0a0a14;      /* Obsidian Layer */
  --ds-border-width-base: 1px;
  --ds-radius-base: 0px;            /* Sharp Cyberpunk Angles */
  --ds-shadow-neon: 0 0 15px rgba(0, 240, 255, 0.45);
}`,
    visualRole: 'Token Variable Graph',
    metrics: [
      { label: 'Active Languages', value: '32 Curated Systems' },
      { label: 'Token Properties', value: '64 CSS Variables' },
      { label: 'Color Contrast', value: 'WCAG AAA Compliant' },
    ],
  },
  {
    id: 4,
    title: '4. Scoped Cascade Compiler (.style-[id])',
    tagline: 'Hierarchical scope cascade with zero global CSS pollution.',
    badge: 'CASCADE ISOLATION',
    description:
      'Styles are compiled into scoped selector rulesets (.style-[id]) that automatically target children and nested structures. Child card architectures, table layouts, and button states are isolated so multiple distinct styles can coexist on the same page seamlessly.',
    codeTitle: 'Compiled Scoped Cascade Layer',
    codeSnippet: `@layer design.library {
  .style-cyberpunk > header h1 {
    font-family: var(--ds-font-family-heading);
    text-transform: uppercase;
    text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
  }
  .style-cyberpunk button {
    border: 1px solid var(--ds-color-primary);
    background: transparent;
    color: var(--ds-color-primary);
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .style-cyberpunk article {
    border: 1px solid rgba(0, 240, 255, 0.25);
    background: var(--ds-color-surface);
  }
}`,
    visualRole: 'CSS Scope Cascade',
    metrics: [
      { label: 'Isolation Model', value: 'Namespace Scoped' },
      { label: 'Global Leak', value: '0% Guaranteed' },
      { label: 'Multi-Tenant', value: 'Supported' },
    ],
  },
  {
    id: 5,
    title: '5. Sub-Millisecond CSS Injection & Render',
    tagline: 'Instant transformation with zero layout shifts (CLS: 0).',
    badge: 'LIVE PAINT',
    description:
      'The browser executes the zero-overhead stylesheet injection. Within <1.2ms, the raw semantic HTML blossoms into a breathtaking, authentic aesthetic complete with responsive grid behavior, micro-interactions, and accessible keyboard focus states.',
    codeTitle: 'Live Injected Render Telemetry',
    codeSnippet: `// Execution Telemetry
Status: READY
Stylesheet Compilation: 0.82ms
CSS Layer Mounting: 0.24ms
Total Latency: 1.06ms
Cumulative Layout Shift (CLS): 0.000
First Input Delay (FID): <1ms
Memory Footprint: 1.8 KB (gzipped)`,
    visualRole: 'Transformed Visual Aesthetic',
    metrics: [
      { label: 'Compile Time', value: '< 1.2ms' },
      { label: 'Core Bundle', value: '1.8 KB Gzip' },
      { label: 'Framework Overhead', value: '0 Dependencies' },
    ],
  },
];

const VIDEO_CHAPTERS = [
  { time: 0, label: '00:00 Architectural Setup & Engine Core' },
  { time: 75, label: '01:15 Token Model & AST Parser' },
  { time: 160, label: '02:40 Context-Aware Grammar Ingestion' },
  { time: 240, label: '04:00 32 Visual Languages Implementation' },
  { time: 330, label: '05:30 Zero-CSS Testing & CLI' },
];

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onOpenCustomHtml,
  onOpenSaasApp,
  onOpenStudio,
  onOpenDocs: _onOpenDocs,
}) => {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [activePreviewStyle, setActivePreviewStyle] = useState<string>('cyberpunk');

  // Video State & Controls
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoError, setVideoError] = useState<boolean>(false);

  const activeStage = PIPELINE_STAGES.find((s) => s.id === activeStageId) || PIPELINE_STAGES[0];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 360);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = val;
      setCurrentTime(val);
    }
  };

  const handleJumpToChapter = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      setCurrentTime(seconds);
      if (!isPlaying) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const handleRateChange = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleToggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section
      id="how-it-works-section"
      style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '5rem 1.5rem 6rem',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.3rem 0.85rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            color: '#38bdf8',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <Cpu size={14} />
          UNDER THE HOOD • COMPILER ARCHITECTURE
        </div>

        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#f8fafc',
            margin: '0 0 1rem',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
          }}
        >
          How Design Style Library Actually Works
        </h2>

        <p
          style={{
            fontSize: '1.0625rem',
            color: '#94a3b8',
            maxWidth: '820px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Most component libraries force you to rewrite your markup to fit their opinionated DOM structure.
          We inverted the paradigm: <strong style={{ color: '#f8fafc' }}>STRUCTURE ≠ STYLE</strong>.
          You keep your raw semantic HTML, and our Adaptive Style Engine inspects semantic roles,
          synthesizes design grammar, and projects complete design languages in &lt;1.2ms.
        </p>
      </div>

      {/* ARCHITECTURE METRICS SUMMARY */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        {[
          { label: 'Visual Languages', value: '32 Systems', sub: 'Historical & modern aesthetics' },
          { label: 'Automated Vitest Tests', value: '288 Passing', sub: '100% test suite reliability' },
          { label: 'Runtime Dependencies', value: '0 Packages', sub: 'Pure TypeScript & CSS standard' },
          { label: 'Compiler Latency', value: '< 1.2ms', sub: 'Sub-millisecond DOM execution' },
          { label: 'DOM Mutation', value: '0 Bytes', sub: 'Raw semantic HTML preserved' },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#0f121d',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {item.label}
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>
              {item.value}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              {item.sub}
            </div>
          </div>
        ))}
      </div>

      {/* PART 1: INTERACTIVE 5-STAGE TRANSFORMATION PIPELINE */}
      <div
        style={{
          backgroundColor: '#0c0e17',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '18px',
          padding: '2rem',
          marginBottom: '4rem',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem', fontFamily: "'JetBrains Mono', monospace" }}>
              INTERACTIVE PIPELINE EXPLORER
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              The 5-Stage Transformation Workflow
            </h3>
          </div>

          {/* Style Selector for Live Pipeline Inspection */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Active Style:</span>
            <select
              value={activePreviewStyle}
              onChange={(e) => setActivePreviewStyle(e.target.value)}
              style={{
                backgroundColor: '#161925',
                color: '#f8fafc',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.8125rem',
                cursor: 'pointer',
              }}
            >
              <option value="cyberpunk">Cyberpunk (Neon Void)</option>
              <option value="brutalism">Brutalism (Raw Contrast)</option>
              <option value="bauhaus">Bauhaus (Primary Geometry)</option>
              <option value="wabi-sabi">Wabi-Sabi (Organic Serenity)</option>
              <option value="art-deco">Art Deco (1920s Luxury)</option>
              <option value="glassmorphism">Glassmorphism (Frosted Depth)</option>
              <option value="swiss-design">Swiss Design (Objective Grid)</option>
              <option value="synthwave">Synthwave (Retro Neon)</option>
            </select>
          </div>
        </div>

        {/* STEP BUTTONS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}
        >
          {PIPELINE_STAGES.map((stage) => {
            const isSelected = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.12)' : '#121520',
                  color: isSelected ? '#f8fafc' : '#94a3b8',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 150ms ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      backgroundColor: isSelected ? '#38bdf8' : '#222738',
                      color: isSelected ? '#000000' : '#8e96a4',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {`STAGE ${stage.id}`}
                  </span>
                  {isSelected && <Zap size={14} color="#38bdf8" />}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: isSelected ? 700 : 600, color: isSelected ? '#f8fafc' : '#cbd5e1' }}>
                  {stage.title.split('. ')[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STAGE DETAIL & WORKBENCH */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
            gap: '1.5rem',
            backgroundColor: '#121522',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '1.5rem',
          }}
        >
          {/* Left: Code & Telemetry Inspection */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {activeStage.badge}
                </span>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#f8fafc' }}>
                  {activeStage.tagline}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.55 }}>
                {activeStage.description}
              </p>
            </div>

            {/* Code Box */}
            <div
              style={{
                backgroundColor: '#090a10',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '0.5rem 0.85rem',
                  backgroundColor: '#11131c',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#cbd5e1', fontFamily: "'JetBrains Mono', monospace" }}>
                  {activeStage.codeTitle}
                </span>
                <span style={{ fontSize: '0.6875rem', color: '#64748b' }}>Live Compiler State</span>
              </div>
              <pre
                style={{
                  margin: 0,
                  padding: '1rem',
                  fontSize: '0.8125rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#93c5fd',
                  lineHeight: 1.5,
                  overflowX: 'auto',
                  maxHeight: '220px',
                }}
              >
                <code>{activeStage.codeSnippet}</code>
              </pre>
            </div>

            {/* Metrics Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {activeStage.metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#161926',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '6px',
                    padding: '0.65rem 0.75rem',
                  }}
                >
                  <div style={{ fontSize: '0.6875rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f8fafc' }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Visual State Preview */}
          <div
            style={{
              backgroundColor: '#090b12',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                VISUAL SIMULATION: {activeStage.visualRole}
              </span>
              <span
                style={{
                  fontSize: '0.6875rem',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: activeStageId === 5 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(56, 189, 248, 0.2)',
                  color: activeStageId === 5 ? '#4ade80' : '#38bdf8',
                  fontWeight: 600,
                }}
              >
                {activeStageId === 1 ? 'Raw Unstyled' : activeStageId === 5 ? 'Fully Articulated' : 'Compiled Model'}
              </span>
            </div>

            {/* Simulated Visual Canvas */}
            <div
              style={{
                flex: 1,
                minHeight: '240px',
                borderRadius: '8px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                backgroundColor: activeStageId === 1 ? '#ffffff' : '#0c0e18',
                color: activeStageId === 1 ? '#000000' : '#f8fafc',
                fontFamily: activeStageId === 1 ? 'Times New Roman, serif' : "'Inter', sans-serif",
                transition: 'all 200ms ease',
              }}
              className={activeStageId >= 4 ? `style-${activePreviewStyle} ${activePreviewStyle}-styled-container` : ''}
            >
              {activeStageId === 1 && (
                <div>
                  <h2 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem', color: '#000000' }}>Autonomous Cloud Mesh</h2>
                  <p style={{ margin: '0 0 0.75rem', color: '#333333', fontSize: '0.875rem' }}>Sub-millisecond compute orchestration.</p>
                  <button style={{ padding: '2px 6px', fontSize: '0.8125rem', cursor: 'pointer' }}>Deploy Cluster</button>
                  <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem', margin: '0 0 0.25rem' }}>Edge Nodes</h3>
                    <p style={{ margin: '0 0 0.5rem', fontWeight: 'bold' }}>1,024 Active</p>
                    <button style={{ padding: '2px 6px', fontSize: '0.75rem' }}>Manage Fleet</button>
                  </div>
                </div>
              )}

              {activeStageId === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ border: '1px dashed #38bdf8', borderRadius: '6px', padding: '0.75rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', top: '-10px', right: '10px', backgroundColor: '#38bdf8', color: '#000', fontSize: '0.625rem', fontWeight: 800, padding: '1px 5px', borderRadius: '3px' }}>
                      ROLE: HERO-BILLBOARD
                    </span>
                    <h4 style={{ margin: '0 0 0.25rem', color: '#f8fafc' }}>Autonomous Cloud Mesh</h4>
                    <p style={{ margin: '0 0 0.5rem', color: '#94a3b8', fontSize: '0.8125rem' }}>Sub-millisecond compute orchestration.</p>
                    <span style={{ display: 'inline-block', border: '1px solid #22c55e', color: '#22c55e', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>
                      [ROLE: PRIMARY-CTA] Deploy Cluster
                    </span>
                  </div>
                  <div style={{ border: '1px dashed #a855f7', borderRadius: '6px', padding: '0.75rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', top: '-10px', right: '10px', backgroundColor: '#a855f7', color: '#fff', fontSize: '0.625rem', fontWeight: 800, padding: '1px 5px', borderRadius: '3px' }}>
                      ROLE: KPI-METRIC-TILE
                    </span>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Edge Nodes</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc' }}>1,024 Active</div>
                      </div>
                      <span style={{ border: '1px solid #64748b', color: '#cbd5e1', padding: '2px 6px', fontSize: '0.75rem' }}>
                        [ROLE: CARD-ACTION]
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeStageId === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                    Synthesized Token Palette for <strong>{activePreviewStyle.toUpperCase()}</strong>:
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ flex: 1, height: '40px', borderRadius: '4px', backgroundColor: '#00f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '0.6875rem', fontWeight: 800 }}>
                      PRIMARY
                    </div>
                    <div style={{ flex: 1, height: '40px', borderRadius: '4px', backgroundColor: '#ff0055', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.6875rem', fontWeight: 800 }}>
                      ACCENT
                    </div>
                    <div style={{ flex: 1, height: '40px', borderRadius: '4px', backgroundColor: '#0a0a14', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '0.6875rem', fontWeight: 800 }}>
                      SURFACE
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#141724', borderRadius: '6px', padding: '0.75rem', fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                    <div>Font Heading: <strong>Space Grotesk (700)</strong></div>
                    <div>Border Model: <strong>1px Solid Sharp (0px Radius)</strong></div>
                    <div>Elevation: <strong>Dual Neon Specular Refraction</strong></div>
                  </div>
                </div>
              )}

              {activeStageId >= 4 && (
                <main>
                  <header style={{ marginBottom: '1rem' }}>
                    <h3 style={{ margin: '0 0 0.35rem' }}>Autonomous Cloud Mesh</h3>
                    <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', opacity: 0.85 }}>Sub-millisecond compute orchestration.</p>
                    <button style={{ cursor: 'pointer' }}>Deploy Cluster</button>
                  </header>
                  <section>
                    <article>
                      <h4 style={{ margin: '0 0 0.25rem' }}>Edge Nodes</h4>
                      <strong>1,024 Active Nodes</strong>
                      <p style={{ margin: '0.35rem 0 0.75rem', fontSize: '0.8125rem', opacity: 0.8 }}>Peak telemetry throughput operational.</p>
                      <button style={{ cursor: 'pointer' }}>Manage Fleet</button>
                    </article>
                  </section>
                </main>
              )}
            </div>

            {/* Bottom Stepper CTA */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <button
                onClick={() => setActiveStageId((prev) => Math.max(1, prev - 1))}
                disabled={activeStageId === 1}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: '#161925',
                  color: activeStageId === 1 ? '#475569' : '#f8fafc',
                  fontSize: '0.8125rem',
                  cursor: activeStageId === 1 ? 'not-allowed' : 'pointer',
                }}
              >
                ← Previous Stage
              </button>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                Stage {activeStageId} of 5
              </span>
              <button
                onClick={() => setActiveStageId((prev) => Math.min(5, prev + 1))}
                disabled={activeStageId === 5}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  backgroundColor: activeStageId === 5 ? '#161925' : '#0284c7',
                  color: activeStageId === 5 ? '#475569' : '#ffffff',
                  fontSize: '0.8125rem',
                  cursor: activeStageId === 5 ? 'not-allowed' : 'pointer',
                  fontWeight: 600,
                }}
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2: REAL BUILD PROCESS TIMELAPSE VIDEO SHOWCASE */}
      <div
        id="video-player-container"
        style={{
          backgroundColor: '#0c0e17',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '18px',
          padding: '2rem',
          marginBottom: '4rem',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'JetBrains Mono', monospace" }}>
                DOCUMENTARY & BUILD TELEMETRY
              </span>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  color: '#fbbf24',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                }}
              >
                1080P TIMELAPSE (104 MB)
              </span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
              Full Engineering Build Process: Behind the Scenes
            </h3>
          </div>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#94a3b8', maxWidth: '420px', lineHeight: 1.5 }}>
            Watch the entire architectural codebase get constructed from scratch: the token math, AST parser,
            32 design styles, and zero-CSS test suites.
          </p>
        </div>

        {/* CUSTOM VIDEO PLAYER CONTAINER */}
        <div
          style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#05060a',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8)',
          }}
        >
          {/* Real Video Element */}
          <video
            ref={videoRef}
            src="/build-timelapse.mp4"
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onError={() => setVideoError(true)}
            onClick={handleTogglePlay}
            style={{
              width: '100%',
              maxHeight: '560px',
              display: 'block',
              backgroundColor: '#000000',
              cursor: 'pointer',
            }}
          />

          {/* Big Play Overlay (when paused) */}
          {!isPlaying && (
            <div
              onClick={handleTogglePlay}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                backdropFilter: 'blur(3px)',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: '#2563eb',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(37, 99, 235, 0.7)',
                  transition: 'transform 150ms ease',
                }}
              >
                <Play size={32} color="#ffffff" style={{ marginLeft: '4px' }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                  Play Build Process Timelapse
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
                  Click to start playback with chapter navigation
                </div>
              </div>
            </div>
          )}

          {/* Fallback Message if Video fails to load */}
          {videoError && (
            <div
              style={{
                padding: '2.5rem',
                textAlign: 'center',
                backgroundColor: '#111420',
                color: '#f8fafc',
              }}
            >
              <p style={{ margin: '0 0 0.5rem', color: '#f87171', fontWeight: 600 }}>
                Video is buffering or streaming from repository root (104 MB MP4).
              </p>
              <p style={{ margin: 0, fontSize: '0.8125rem', color: '#94a3b8' }}>
                File: <code>BuildProcessVideos/Full Build Process TimeLapse.mp4</code>
              </p>
            </div>
          )}

          {/* CUSTOM VIDEO CONTROLS BAR */}
          <div
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: 'rgba(10, 12, 18, 0.95)',
              backdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}
          >
            {/* Scrubber Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.5}
                value={currentTime}
                onChange={handleSeek}
                style={{
                  flex: 1,
                  accentColor: '#38bdf8',
                  cursor: 'pointer',
                  height: '5px',
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#cbd5e1',
                  minWidth: '90px',
                  textAlign: 'right',
                }}
              >
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Buttons Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <button
                  onClick={handleTogglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    backgroundColor: '#1b1f2e',
                    color: '#f8fafc',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                  }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <button
                  onClick={handleToggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  style={{
                    padding: '0.45rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: '#161924',
                    color: '#cbd5e1',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>

                {/* Speed Toggles */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginLeft: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', marginRight: '0.25rem' }}>Speed:</span>
                  {[1, 2, 4, 8].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => handleRateChange(rate)}
                      style={{
                        padding: '2px 7px',
                        borderRadius: '4px',
                        border: playbackRate === rate ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                        backgroundColor: playbackRate === rate ? 'rgba(56, 189, 248, 0.2)' : '#121420',
                        color: playbackRate === rate ? '#38bdf8' : '#94a3b8',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={handleToggleFullscreen}
                  title="Fullscreen"
                  style={{
                    padding: '0.45rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: '#161924',
                    color: '#cbd5e1',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CHAPTER JUMP BUTTONS */}
        <div style={{ marginTop: '1.25rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
            TIMECODE CHAPTER BOOKMARKS:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {VIDEO_CHAPTERS.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => handleJumpToChapter(chap.time)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: '#121522',
                  color: '#cbd5e1',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 120ms ease',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {chap.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PART 3: ARCHITECTURAL PILLARS (WHY THIS IS REVOLUTIONARY) */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem' }}>
            Core Engineering Tenets
          </h3>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9375rem' }}>
            Why Design Style Library solves the fundamental flaws of legacy design frameworks.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {[
            {
              icon: <Code2 size={20} color="#38bdf8" />,
              title: 'Structure ≠ Style Separation',
              text: 'Keep your HTML clean and semantics intact. No proprietary tags, no synthetic div bloat, and zero framework vendor lock-in.',
            },
            {
              icon: <Compass size={20} color="#a855f7" />,
              title: 'Contextual Role Inference',
              text: 'The engine understands spatial relationships. An article in a main element is framed as a billboard hero, while an article inside a grid section becomes an ergonomic tile.',
            },
            {
              icon: <Zap size={20} color="#eab308" />,
              title: 'Zero Runtime Dependencies',
              text: 'The core resolver, tokenizer, and adaptive generator have 0 runtime packages. Pure TypeScript compiling to standard W3C CSS variables.',
            },
            {
              icon: <ShieldCheck size={20} color="#22c55e" />,
              title: 'Cross-Framework Universal Interop',
              text: 'Drop into Vanilla HTML, React JSX, Next.js, Vite, or compile offline via the production CLI runner (npx design-library).',
            },
          ].map((pillar, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#0f121d',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: '#161a29',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {pillar.icon}
              </div>
              <h4 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                {pillar.title}
              </h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PART 4: INTERACTIVE CTAS */}
      <div
        style={{
          backgroundColor: '#121625',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '16px',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1.25rem',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#38bdf8',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          EXPERIENCE THE COMPILER FIRST-HAND
        </span>

        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Try Your Own Markup or Explore Our Real Zero-CSS SaaS
        </h3>

        <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9375rem', maxWidth: '640px', lineHeight: 1.6 }}>
          Paste arbitrary HTML into our Custom HTML Lab, test our real production SaaS application
          running 16 simultaneous design styles, or explore token telemetry in the Design Studio.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <button
            id="cta-open-custom-html"
            onClick={onOpenCustomHtml}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#38bdf8',
              color: '#090a0f',
              fontSize: '0.875rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 150ms ease',
            }}
          >
            <Code2 size={16} />
            Open Custom HTML Lab
          </button>

          <button
            id="cta-open-saas-app"
            onClick={onOpenSaasApp}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              backgroundColor: '#1b2030',
              color: '#f8fafc',
              fontSize: '0.875rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 150ms ease',
            }}
          >
            <Sparkles size={16} color="#fbbf24" />
            Live SaaS App (Zero CSS)
          </button>

          <button
            id="cta-open-studio"
            onClick={() => onOpenStudio?.('wabi-sabi')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'transparent',
              color: '#cbd5e1',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Launch Design Studio
          </button>
        </div>
      </div>
    </section>
  );
};
