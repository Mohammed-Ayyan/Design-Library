import React, { useState, useEffect, useRef } from 'react';
import { executeCliCommand } from '../core/cli-runner';
import {
  Terminal,
  Play,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  BookOpen,
  FileCode,
  Download,
} from 'lucide-react';

interface CliStudioProps {
  onOpenStudio?: (styleId?: string) => void;
  onOpenDocs?: (sectionId?: string) => void;
}

const PRESET_COMMANDS = [
  { label: 'List All Styles', cmd: 'npx design-library list', desc: 'Display all 32 active styles and categories' },
  { label: 'Inspect Wabi-Sabi', cmd: 'npx design-library info wabi-sabi', desc: 'Inspect typography, palette & tokens for Wabi-Sabi' },
  { label: 'Inspect Brutalism', cmd: 'npx design-library info brutalism', desc: 'Inspect high-contrast brutalist design language' },
  { label: 'Export Wabi-Sabi CSS', cmd: 'npx design-library export-css wabi-sabi', desc: 'Export compiled production stylesheet' },
  { label: 'Apply to HTML File', cmd: 'npx design-library apply index.html --style wabi-sabi --standalone', desc: 'Transform semantic HTML into standalone styled document' },
  { label: 'Initialize Project', cmd: 'npx design-library init', desc: 'Scaffold starter CSS and project configuration' },
  { label: 'Help Documentation', cmd: 'npx design-library --help', desc: 'Display CLI manual and syntax options' },
];

export const CliStudio: React.FC<CliStudioProps> = ({ onOpenStudio, onOpenDocs }) => {
  const [inputCommand, setInputCommand] = useState<string>('npx design-library info wabi-sabi');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string; exitCode: number; time: string }>>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedInput, setCopiedInput] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Run initial default command on mount
  useEffect(() => {
    runCommand('npx design-library info wabi-sabi');
  }, []);

  const runCommand = (cmdToRun: string) => {
    const res = executeCliCommand(cmdToRun);
    const now = new Date().toLocaleTimeString();
    setHistory((prev) => [...prev, { cmd: cmdToRun, output: res.output, exitCode: res.exitCode, time: now }]);
    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCommand.trim()) return;
    runCommand(inputCommand);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const handleCopyInput = () => {
    navigator.clipboard.writeText(inputCommand);
    setCopiedInput(true);
    setTimeout(() => setCopiedInput(false), 1800);
  };

  const handleClearTerminal = () => {
    setHistory([]);
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 72px)', backgroundColor: '#090d16', color: '#f8fafc', paddingBottom: '5rem' }}>
      <style>{`
        .cli-top-banner {
          padding: 2.5rem 2rem 2rem;
        }
        .cli-main-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }
        @media (max-width: 640px) {
          .cli-top-banner {
            padding: 1.5rem 1rem 1.25rem !important;
          }
          .cli-main-content {
            padding: 1.5rem 1rem !important;
          }
          .cli-heading {
            font-size: 1.65rem !important;
          }
        }
      `}</style>
      {/* Editorial Laboratory Top Banner */}
      <div
        className="cli-top-banner"
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: '#0c101c',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.6875rem',
                fontWeight: 700,
                color: '#38bdf8',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                letterSpacing: '0.05em',
              }}
            >
              DS//TERMINAL // CLI WORKSPACE
            </span>
            <span style={{ fontSize: '0.8125rem', color: '#64748b', fontFamily: "'JetBrains Mono', monospace" }}>
              EXECUTABLE: design-library / design-engine
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem' }}>
            <div>
              <h1
                className="cli-heading"
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 800,
                  color: '#f8fafc',
                  letterSpacing: '-0.03em',
                  margin: '0 0 0.5rem 0',
                }}
              >
                Developer Command Line Interface
              </h1>
              <p style={{ margin: 0, fontSize: '0.9375rem', color: '#94a3b8', maxWidth: '720px', lineHeight: 1.6 }}>
                Transform arbitrary HTML files, inspect token systems, export compiled production CSS, and integrate
                into your build pipeline directly from your shell outside of React.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {onOpenStudio && (
                <button
                  onClick={() => onOpenStudio('wabi-sabi')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.15rem',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    backgroundColor: 'rgba(56, 189, 248, 0.12)',
                    color: '#38bdf8',
                    cursor: 'pointer',
                    transition: 'all 120ms ease',
                  }}
                >
                  <Sparkles size={14} />
                  Open in Design Studio
                </button>
              )}
              {onOpenDocs && (
                <button
                  onClick={() => onOpenDocs('cli-quickstart')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.15rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    backgroundColor: '#1e293b',
                    color: '#f8fafc',
                    cursor: 'pointer',
                  }}
                >
                  <BookOpen size={14} />
                  View CLI Docs
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '2rem auto 0', padding: '0 2rem' }}>
        {/* Quick Launch Command Bar */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'JetBrains Mono', monospace" }}>
              Quick Command Presets
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Click any preset to execute immediately in the live terminal
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {PRESET_COMMANDS.map((preset) => (
              <button
                key={preset.cmd}
                onClick={() => {
                  setInputCommand(preset.cmd);
                  runCommand(preset.cmd);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#131b2e',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#e2e8f0',
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: 'pointer',
                  transition: 'all 120ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#38bdf8';
                  e.currentTarget.style.backgroundColor = '#1e293b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.backgroundColor = '#131b2e';
                }}
              >
                <Play size={10} color="#38bdf8" />
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Interactive Terminal Window */}
        <div
          style={{
            backgroundColor: '#0a0d14',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
            overflow: 'hidden',
          }}
        >
          {/* Terminal Window Header Bar */}
          <div
            style={{
              backgroundColor: '#111726',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span
                style={{
                  marginLeft: '0.75rem',
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#94a3b8',
                }}
              >
                design-library-cli â€” bash â€” 80x28
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={handleClearTerminal}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '0.6875rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: 'pointer',
                }}
              >
                <RotateCcw size={11} />
                Clear
              </button>
            </div>
          </div>

          {/* Terminal Content Screen */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              maxHeight: '520px',
              overflowY: 'auto',
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '0.8125rem',
              lineHeight: 1.6,
              color: '#e2e8f0',
            }}
          >
            {/* Terminal Motd */}
            <div style={{ color: '#64748b', marginBottom: '1.25rem' }}>
              <div>Design Style Engine v0.1.0 Interactive Console</div>
              <div>Connected to production engine with 32 active design languages (including Wabi-Sabi).</div>
              <div>Type a command below or click a preset above.</div>
            </div>

            {/* Command History Items */}
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#38bdf8' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#10b981' }}>developer@workstation:~$</span>
                    <span style={{ fontWeight: 700, color: '#f8fafc' }}>{item.cmd}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.6875rem', color: '#475569' }}>{item.time}</span>
                    <button
                      onClick={() => handleCopy(item.output, idx)}
                      title="Copy Output"
                      style={{
                        padding: '0.2rem 0.45rem',
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                        color: copiedIndex === idx ? '#10b981' : '#64748b',
                        fontSize: '0.6875rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      {copiedIndex === idx ? <Check size={11} /> : <Copy size={11} />}
                      {copiedIndex === idx ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <pre
                  style={{
                    margin: '0.5rem 0 0 0',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.65)',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: item.exitCode === 0 ? '#cbd5e1' : '#f87171',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {item.output}
                </pre>
              </div>
            ))}

            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Command Input Form */}
          <form
            onSubmit={handleFormSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#111726',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '0.75rem 1.25rem',
              gap: '0.75rem',
            }}
          >
            <span style={{ color: '#10b981', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.875rem' }}>
              $
            </span>
            <input
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              placeholder="e.g. npx design-library info wabi-sabi"
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                color: '#f8fafc',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.875rem',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '6px',
                backgroundColor: '#0284c7',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              <Play size={12} />
              Execute
            </button>
            <button
              type="button"
              onClick={handleCopyInput}
              title="Copy Command"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.45rem 0.65rem',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: copiedInput ? '#10b981' : '#94a3b8',
                fontSize: '0.75rem',
                cursor: 'pointer',
              }}
            >
              {copiedInput ? <Check size={12} /> : <Copy size={12} />}
            </button>
          </form>
        </div>

        {/* Real-World CLI Workflow Reference Grid */}
        <div style={{ marginTop: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Production CLI Integration Guide
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0 0 2rem 0', maxWidth: '700px' }}>
            The CLI can be run on-demand with <code>npx</code> or installed globally into your teamâ€™s development environments.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
            {/* Card 1: Installation */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '10px',
                backgroundColor: '#0f1422',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', marginBottom: '0.75rem' }}>
                <Terminal size={18} />
                <span style={{ fontWeight: 700, fontSize: '0.9375rem' }}>1. Installation Options</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                Run with zero installation using NPX, or install globally across your workstation:
              </p>
              <pre
                style={{
                  margin: 0,
                  padding: '0.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#a5b4fc',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  lineHeight: 1.6,
                }}
              >
                {`# Zero installation (recommended)\nnpx design-library list\n\n# Global installation\nnpm install -g git+https://github.com/Mohammed-Ayyan/Design-Library.git\ndesign-library apply page.html --style wabi-sabi`}
              </pre>
            </div>

            {/* Card 2: Transforming HTML */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '10px',
                backgroundColor: '#0f1422',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', marginBottom: '0.75rem' }}>
                <FileCode size={18} />
                <span style={{ fontWeight: 700, fontSize: '0.9375rem' }}>2. Transforming HTML Documents</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                Takes existing semantic HTML, stamps non-destructive composition roles, and pairs it with the design language:
              </p>
              <pre
                style={{
                  margin: 0,
                  padding: '0.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#6ee7b7',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  lineHeight: 1.6,
                }}
              >
                {`# Emit standalone HTML5 with embedded styles\nnpx design-library apply ./raw.html \\\n  --style wabi-sabi \\\n  --standalone \\\n  -o ./styled.html`}
              </pre>
            </div>

            {/* Card 3: Exporting Standalone CSS */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '10px',
                backgroundColor: '#0f1422',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', marginBottom: '0.75rem' }}>
                <Download size={18} />
                <span style={{ fontWeight: 700, fontSize: '0.9375rem' }}>3. Exporting Production CSS</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                Extract production-ready CSS bundles for any specific style to include in any static or dynamic framework:
              </p>
              <pre
                style={{
                  margin: 0,
                  padding: '0.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#fcd34d',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  lineHeight: 1.6,
                }}
              >
                {`# Export Wabi-Sabi scoped CSS\nnpx design-library export-css wabi-sabi -o wabi-sabi.css\n\n# Export entire 32-style library\nnpx design-library export-css -o all-styles.css`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

