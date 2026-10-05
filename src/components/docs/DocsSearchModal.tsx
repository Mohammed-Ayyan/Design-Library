import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, Terminal, BookOpen, ArrowRight } from 'lucide-react';
import { ALL_SECTIONS } from './docsData';
import { ALL_29_STYLES } from '../../styles/catalog';

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: 'section' | 'style' | 'command' | 'api';
  action: () => void;
}

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (sectionId: string) => void;
  onSelectStyleReference?: (styleId: string) => void;
}

export const DocsSearchModal: React.FC<DocsSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectSection,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global keydown: ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate results based on query
  const results: SearchResultItem[] = React.useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      // Default suggested items
      return [
        {
          id: 'intro',
          title: 'Introduction',
          subtitle: 'Design systems, applied in seconds.',
          category: 'GETTING STARTED',
          type: 'section',
          action: () => {
            onSelectSection('intro');
            onClose();
          },
        },
        {
          id: 'installation',
          title: 'Installation',
          subtitle: 'npm install git+https://github.com/Mohammed-Ayyan/Design-Library.git, pnpm, yarn, bun',
          category: 'GETTING STARTED',
          type: 'section',
          action: () => {
            onSelectSection('installation');
            onClose();
          },
        },
        {
          id: 'quick-start',
          title: 'Quick Start',
          subtitle: 'The 30-second path to styled UI',
          category: 'GETTING STARTED',
          type: 'section',
          action: () => {
            onSelectSection('quick-start');
            onClose();
          },
        },
        {
          id: 'style-reference',
          title: 'Complete Style Reference',
          subtitle: 'Explore all 32 active design languages',
          category: 'STYLES',
          type: 'section',
          action: () => {
            onSelectSection('style-reference');
            onClose();
          },
        },
        {
          id: 'cli',
          title: 'CLI Tools & Commands',
          subtitle: 'npx design-library list, info, apply, init, export-css',
          category: 'CODE',
          type: 'command',
          action: () => {
            onSelectSection('cli');
            onClose();
          },
        },
      ];
    }

    const matches: SearchResultItem[] = [];

    // 1. Search documentation sections
    for (const sec of ALL_SECTIONS) {
      const matchScore =
        sec.title.toLowerCase().includes(trimmed) ||
        sec.description.toLowerCase().includes(trimmed) ||
        sec.keywords.some((k) => k.toLowerCase().includes(trimmed));

      if (matchScore) {
        matches.push({
          id: sec.id,
          title: sec.title,
          subtitle: sec.description,
          category: sec.category,
          type: 'section',
          action: () => {
            onSelectSection(sec.id);
            onClose();
          },
        });
      }
    }

    // 2. Search design styles by name, id, category
    for (const style of ALL_29_STYLES) {
      if (
        style.name.toLowerCase().includes(trimmed) ||
        style.id.toLowerCase().includes(trimmed) ||
        style.category.toLowerCase().includes(trimmed)
      ) {
        matches.push({
          id: `style-${style.id}`,
          title: `${style.name} (${style.id})`,
          subtitle: `${style.category} â€” ${style.description.slice(0, 75)}...`,
          category: 'DESIGN STYLES',
          type: 'style',
          action: () => {
            onSelectSection('style-reference');
            onClose();
          },
        });
      }
    }

    // 3. Search CLI commands
    const cliCommands = [
      { name: 'npx design-library list', desc: 'List all 32 design languages and status' },
      { name: 'npx design-library info <style>', desc: 'Inspect tokens, typography, and palette' },
      { name: 'npx design-library apply <file>', desc: 'Transform plain HTML with a design language' },
      { name: 'npx design-library init', desc: 'Create starter design-library.css in project' },
      { name: 'npx design-library export-css', desc: 'Export compiled CSS for a style or all styles' },
    ];
    for (const cmd of cliCommands) {
      if (cmd.name.toLowerCase().includes(trimmed) || cmd.desc.toLowerCase().includes(trimmed)) {
        matches.push({
          id: cmd.name,
          title: cmd.name,
          subtitle: cmd.desc,
          category: 'CLI COMMANDS',
          type: 'command',
          action: () => {
            onSelectSection('cli');
            onClose();
          },
        });
      }
    }

    return matches.slice(0, 10);
  }, [query, onSelectSection, onClose]);

  // Handle keyboard up / down / enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (results.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % (results.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        results[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 80,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '10vh',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '640px',
          backgroundColor: '#0f172a',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: '#1e293b',
          }}
        >
          <Search size={18} color="#94a3b8" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search docs, styles, commands, APIs... (Press Esc to close)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#f8fafc',
              fontSize: '1rem',
              fontWeight: 500,
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', padding: '0.5rem' }}>
          {results.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
              No documentation results found for "{query}".
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id + idx}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.18)' : 'transparent',
                    border: isSelected ? '1px solid rgba(99, 102, 241, 0.35)' : '1px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 100ms ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:
                          item.type === 'style'
                            ? 'rgba(236, 72, 153, 0.15)'
                            : item.type === 'command'
                            ? 'rgba(16, 185, 129, 0.15)'
                            : 'rgba(56, 189, 248, 0.15)',
                        color:
                          item.type === 'style'
                            ? '#f472b6'
                            : item.type === 'command'
                            ? '#34d399'
                            : '#38bdf8',
                      }}
                    >
                      {item.type === 'style' ? (
                        <Sparkles size={16} />
                      ) : item.type === 'command' ? (
                        <Terminal size={16} />
                      ) : (
                        <BookOpen size={16} />
                      )}
                    </div>
                    <div>
                      <div style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.875rem' }}>
                        {item.title}
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '2px' }}>
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                      }}
                    >
                      {item.category}
                    </span>
                    {isSelected && <ArrowRight size={14} color="#818cf8" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div
          style={{
            padding: '0.65rem 1.25rem',
            backgroundColor: '#090e17',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: '#64748b',
          }}
        >
          <span>Use â†‘ â†“ to navigate, Enter to select</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};

