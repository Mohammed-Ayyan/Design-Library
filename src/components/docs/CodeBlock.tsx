import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  highlightLines?: number[];
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  filename,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code block:', err);
    }
  };

  return (
    <div
      style={{
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        backgroundColor: '#0b101b',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
        margin: '1.25rem 0',
        overflow: 'hidden',
        fontFamily: "'JetBrains Mono', 'SF Mono', Consolas, monospace",
      }}
    >
      {/* Top Code Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.6rem 1rem',
          backgroundColor: '#111827',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          </div>
          {filename && (
            <span style={{ color: '#e2e8f0', fontWeight: 600, marginLeft: '0.5rem' }}>
              {filename}
            </span>
          )}
          {!filename && (
            <span style={{ color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          title="Copy code to clipboard"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.3rem 0.65rem',
            borderRadius: '6px',
            border: copied ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: copied ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            color: copied ? '#34d399' : '#cbd5e1',
            fontSize: '0.75rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 150ms ease',
          }}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Text Content */}
      <pre
        style={{
          margin: 0,
          padding: '1rem 1.25rem',
          fontSize: '0.85rem',
          lineHeight: 1.6,
          color: '#f1f5f9',
          overflowX: 'auto',
          whiteSpace: 'pre',
          fontFamily: 'inherit',
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};
