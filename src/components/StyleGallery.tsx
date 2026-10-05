import { useState, useMemo } from 'react';
import { ALL_29_STYLES, StyleCatalogItem } from '../styles/catalog';
import { renderStyleSpecimen } from './StyleSpecimens';
import {
  Sparkles,
  Code2,
  Check,
  Eye,
  BookOpen,
} from 'lucide-react';

interface StyleGalleryProps {
  onOpenStyleDetail: (styleId: string) => void;
  onOpenPlaygroundWithStyle: (styleId: string) => void;
  onOpenDocs?: (styleId?: string) => void;
  onTryStyle?: (styleId: string) => void;
}

export const StyleGallery: React.FC<StyleGalleryProps> = ({
  onOpenStyleDetail,
  onOpenPlaygroundWithStyle,
  onOpenDocs,
  onTryStyle,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedStyleId, setCopiedStyleId] = useState<string | null>(null);

  const categories = ['All', 'Modern', 'Expressive', 'Material & Depth', 'Retro & Heritage', 'Artistic & Organic'];

  const filteredStyles = useMemo(() => {
    return ALL_29_STYLES.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesTagline = item.tagline.toLowerCase().includes(q);
        const matchesFeatures = item.features.some((f) => f.toLowerCase().includes(q));
        return matchesName || matchesDesc || matchesTagline || matchesFeatures;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopyCode = (styleId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const code = `<div class="style-${styleId}">\n  <!-- Your arbitrary HTML here -->\n</div>`;
    navigator.clipboard.writeText(code);
    setCopiedStyleId(styleId);
    setTimeout(() => setCopiedStyleId(null), 2000);
  };

  const handleTryStyle = (styleId: string) => {
    if (onTryStyle) {
      onTryStyle(styleId);
      const el = document.getElementById('transformation-hero-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenPlaygroundWithStyle(styleId);
    }
  };

  // Distinct, internet-accurate visual specimen for each of the 32 styles
  const renderVisualSpecimen = (item: StyleCatalogItem) => renderStyleSpecimen(item);

  return (
    <section
      id="style-library-section"
      className="gallery-container"
      style={{
        maxWidth: '1360px',
        margin: '0 auto',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        .gallery-container {
          padding: 2rem 1.5rem 6rem;
        }
        .gallery-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .gallery-search-box {
          width: 100%;
          max-width: 320px;
        }
        .gallery-pills-rail {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 4px;
        }
        .gallery-pills-rail::-webkit-scrollbar {
          display: none;
        }
        .gallery-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
          gap: 2rem;
        }
        @media (max-width: 640px) {
          .gallery-container {
            padding: 1.25rem 1rem 4rem !important;
          }
          .gallery-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .gallery-search-box {
            max-width: 100% !important;
          }
          .gallery-title-text {
            font-size: 1.75rem !important;
          }
        }
      `}</style>

      {/* Catalog Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div className="gallery-header-row">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: '#38bdf8', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
                VISUAL SPECIMEN CATALOG
              </span>
              <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.6rem', borderRadius: '9999px', backgroundColor: '#1e293b', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>
                {filteredStyles.length} Design Languages
              </span>
            </div>
            <h2 className="gallery-title-text" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc', margin: 0, letterSpacing: '-0.025em' }}>
              Explore Visual Languages
            </h2>
            <p style={{ margin: '0.35rem 0 0', color: '#94a3b8', fontSize: '0.9375rem' }}>
              Each card is a living specimen. You should recognize the visual grammar before reading the title.
            </p>
          </div>

          {/* Search Input */}
          <div className="gallery-search-box">
            <input
              type="text"
              id="style-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by movement, material, or token..."
              style={{
                width: '100%',
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: '#0f172a',
                color: '#f8fafc',
                fontSize: '0.875rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Category Pill Filters (Smooth horizontal swipe rail on mobile) */}
        <div className="gallery-pills-rail">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.4rem 0.9rem',
                fontSize: '0.8125rem',
                fontWeight: selectedCategory === cat ? 700 : 500,
                borderRadius: '8px',
                border: selectedCategory === cat ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: selectedCategory === cat ? 'rgba(56, 189, 248, 0.15)' : '#1e293b',
                color: selectedCategory === cat ? '#38bdf8' : '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 120ms ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Specimen Grid */}
      <div className="gallery-cards-grid">
        {filteredStyles.map((item) => {
          return (
            <div
              key={item.id}
              id={`style-card-${item.id}`}
              style={{
                borderRadius: '16px',
                backgroundColor: '#0f172a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
                boxShadow: '0 12px 28px rgba(0, 0, 0, 0.35)',
              }}
            >
              {/* Top: THE VISUAL SPECIMEN (Dominant portion of card) */}
              <div
                style={{
                  height: '210px',
                  width: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {renderVisualSpecimen(item)}
              </div>

              {/* Bottom: Specimen Metadata & 4 Canonical Action Buttons */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#94a3b8' }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.6875rem', color: '#64748b', fontFamily: "'JetBrains Mono', monospace" }}>
                    .{item.id}
                  </span>
                </div>

                <h3 style={{ margin: '0 0 0.35rem', fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc' }}>
                  {item.name}
                </h3>

                <p style={{ margin: '0 0 1rem', fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.45, flex: 1 }}>
                  {item.description}
                </p>

                {/* Canonical Actions: [Try Style] [Inspect] [Use] [Code] */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '0.4rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '0.85rem',
                  }}
                >
                  {/* Action 1: [Try Style] */}
                  <button
                    id={`try-style-${item.id}-btn`}
                    onClick={() => handleTryStyle(item.id)}
                    title="Test this design language in the Live Engine"
                    style={{
                      padding: '0.45rem 0.25rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: '#0284c7',
                      color: '#ffffff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.25rem',
                      transition: 'background-color 120ms ease',
                    }}
                  >
                    <Sparkles size={12} />
                    Try
                  </button>

                  {/* Action 2: [Inspect] */}
                  <button
                    id={`inspect-style-${item.id}-btn`}
                    onClick={() => onOpenStyleDetail(item.id)}
                    title="Open full style specimen & token detail"
                    style={{
                      padding: '0.45rem 0.25rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      backgroundColor: '#1e293b',
                      color: '#cbd5e1',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.25rem',
                      transition: 'all 120ms ease',
                    }}
                  >
                    <Eye size={12} />
                    Inspect
                  </button>

                  {/* Action 3: [Use] */}
                  <button
                    id={`use-style-${item.id}-btn`}
                    onClick={() => {
                      if (onOpenDocs) onOpenDocs(item.id);
                    }}
                    title="View integration guide and documentation"
                    style={{
                      padding: '0.45rem 0.25rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '6px',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      backgroundColor: 'rgba(245, 158, 11, 0.1)',
                      color: '#fbbf24',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.25rem',
                      transition: 'all 120ms ease',
                    }}
                  >
                    <BookOpen size={12} />
                    Use
                  </button>

                  {/* Action 4: [Code] */}
                  <button
                    id={`code-style-${item.id}-btn`}
                    onClick={(e) => handleCopyCode(item.id, e)}
                    title="Copy HTML container class"
                    style={{
                      padding: '0.45rem 0.25rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: copiedStyleId === item.id ? 'rgba(52, 211, 153, 0.2)' : '#1e293b',
                      color: copiedStyleId === item.id ? '#34d399' : '#cbd5e1',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.25rem',
                      transition: 'all 120ms ease',
                    }}
                  >
                    {copiedStyleId === item.id ? <Check size={12} /> : <Code2 size={12} />}
                    {copiedStyleId === item.id ? 'Copied' : 'Code'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
