import React, { useState, useMemo } from 'react';
import { useStyleEngine } from '../react/context/StyleEngineContext';
import { ALL_29_STYLES } from '../styles/catalog';
import { CSSAdapter } from '../core/adapters/css-adapter';
import {
  wabiSabiSemanticCss,
  brutalistSemanticCss,
  minimalistSemanticCss,
  glassmorphismSemanticCss,
  maximalistSemanticCss,
  swissDesignSemanticCss,
  surrealDesignSemanticCss,
  neoBrutalistSemanticCss,
  neoClassicalSemanticCss,
  luxuryTypographySemanticCss,
  editorialDesignSemanticCss,
  y2kAestheticSemanticCss,
  bentoGridSemanticCss,
  pixelArtSemanticCss,
  conceptualSketchSemanticCss,
  etherealSemanticCss,
  bohemianSemanticCss,
  cyberpunkSemanticCss,
  anthropomorphicSemanticCss,
  neumorphicSemanticCss,
  darkModeUiSemanticCss,
  scrapbookSemanticCss,
  claymorphicSemanticCss,
  victorianSemanticCss,
  cybercoreSemanticCss,
  synthwaveSemanticCss,
  graffitiSemanticCss,
  gothicSemanticCss,
  mixedMediaSemanticCss,
  artDecoSemanticCss,
  bauhausSemanticCss,
  solarpunkSemanticCss,
} from '../styles';
import {
  Code2,
  Layers,
  Sliders,
  Copy,
  Check,
  RotateCcw,
  Smartphone,
  Tablet,
  Monitor,
  Eye,
  SplitSquareVertical,
  Terminal,
  BookOpen,
} from 'lucide-react';

interface DesignStudioProps {
  initialStyleId?: string;
  onOpenDocs?: (sectionId?: string) => void;
  onOpenCli?: () => void;
}

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';
export type StudioViewMode = 'canvas' | 'compare-split';
export type SelectedElementId =
  | 'page'
  | 'nav'
  | 'hero'
  | 'hero-title'
  | 'hero-subtitle'
  | 'hero-cta-primary'
  | 'hero-cta-secondary'
  | 'features'
  | 'card-1'
  | 'card-2'
  | 'card-3'
  | 'pricing'
  | 'pricing-card'
  | 'form'
  | 'footer';

interface ElementOverrides {
  styleId?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  paddingX?: string;
  paddingY?: string;
  shadow?: string;
  display?: string;
  flexDirection?: string;
  gap?: string;
}

const POPULAR_STYLES = [
  'minimalism',
  'brutalism',
  'cyberpunk',
  'synthwave',
  'swiss-design',
  'art-deco',
  'bauhaus',
  'glassmorphism',
  'neo-brutalism',
];

export const DesignStudio: React.FC<DesignStudioProps> = ({
  initialStyleId = 'wabi-sabi',
  onOpenDocs,
  onOpenCli,
}) => {
  const { engine } = useStyleEngine();

  // Studio Global State
  const [pageStyleId, setPageStyleId] = useState<string>(initialStyleId);
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [viewMode, setViewMode] = useState<StudioViewMode>('canvas');
  const [selectedElement, setSelectedElement] = useState<SelectedElementId>('hero');
  const [compareSplitPos, setCompareSplitPos] = useState<number>(50);
  const [isDraggingSplit, setIsDraggingSplit] = useState(false);
  const [copiedCodeTab, setCopiedCodeTab] = useState<string | null>(null);
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'react' | 'cli'>('html');
  const [mobileWorkbenchTab, setMobileWorkbenchTab] = useState<'canvas' | 'layers' | 'inspector' | 'code'>('canvas');

  // Per-element / section overrides
  const [overrides, setOverrides] = useState<Record<string, ElementOverrides>>({});

  const activeCatalog = useMemo(() => {
    return ALL_29_STYLES.find((s) => s.id === pageStyleId) || ALL_29_STYLES[0];
  }, [pageStyleId]);

  const activeStyles = useMemo(() => {
    return ALL_29_STYLES.filter((s) => s.status === 'active');
  }, []);

  const currentElementOverrides = overrides[selectedElement] || {};

  const handleUpdateOverride = (key: keyof ElementOverrides, value: any) => {
    setOverrides((prev) => ({
      ...prev,
      [selectedElement]: {
        ...prev[selectedElement],
        [key]: value === 'default' ? undefined : value,
      },
    }));
  };

  const handleResetElement = () => {
    setOverrides((prev) => {
      const next = { ...prev };
      delete next[selectedElement];
      return next;
    });
  };

  const handleResetAll = () => {
    setOverrides({});
  };

  const handleCopyCode = (text: string, tab: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeTab(tab);
    setTimeout(() => setCopiedCodeTab(null), 1800);
  };

  // Compile combined CSS variables and rules
  const allSemanticStyles = useMemo(() => {
    return `
      ${wabiSabiSemanticCss}
      ${brutalistSemanticCss}
      ${minimalistSemanticCss}
      ${glassmorphismSemanticCss}
      ${maximalistSemanticCss}
      ${swissDesignSemanticCss}
      ${surrealDesignSemanticCss}
      ${neoBrutalistSemanticCss}
      ${neoClassicalSemanticCss}
      ${luxuryTypographySemanticCss}
      ${editorialDesignSemanticCss}
      ${y2kAestheticSemanticCss}
      ${bentoGridSemanticCss}
      ${pixelArtSemanticCss}
      ${conceptualSketchSemanticCss}
      ${etherealSemanticCss}
      ${bohemianSemanticCss}
      ${cyberpunkSemanticCss}
      ${anthropomorphicSemanticCss}
      ${neumorphicSemanticCss}
      ${darkModeUiSemanticCss}
      ${scrapbookSemanticCss}
      ${claymorphicSemanticCss}
      ${victorianSemanticCss}
      ${cybercoreSemanticCss}
      ${synthwaveSemanticCss}
      ${graffitiSemanticCss}
      ${gothicSemanticCss}
      ${mixedMediaSemanticCss}
      ${artDecoSemanticCss}
      ${bauhausSemanticCss}
      ${solarpunkSemanticCss}
    `;
  }, []);

  const getElementStyleId = (elId: SelectedElementId): string => {
    return overrides[elId]?.styleId || pageStyleId;
  };

  // Compute inline micro-overrides for an element
  const getElementInlineStyle = (elId: SelectedElementId): React.CSSProperties => {
    const ov = overrides[elId] || {};
    const st: React.CSSProperties = {};
    if (ov.fontSize) st.fontSize = ov.fontSize;
    if (ov.fontWeight) st.fontWeight = ov.fontWeight;
    if (ov.fontFamily) st.fontFamily = ov.fontFamily;
    if (ov.borderRadius) st.borderRadius = ov.borderRadius;
    if (ov.borderWidth) st.borderWidth = ov.borderWidth;
    if (ov.borderColor) st.borderColor = ov.borderColor;
    if (ov.paddingX || ov.paddingY) {
      st.padding = `${ov.paddingY || '10px'} ${ov.paddingX || '20px'}`;
    }
    if (ov.shadow) st.boxShadow = ov.shadow;
    if (ov.display) st.display = ov.display;
    if (ov.flexDirection) st.flexDirection = ov.flexDirection as any;
    if (ov.gap) st.gap = ov.gap;
    return st;
  };

  // Resolves the full computed design styles for an element/section based on its scoped language
  const getResolvedSectionStyle = (elId: SelectedElementId) => {
    const styleId = getElementStyleId(elId);
    const resolved = engine.resolveStyleById(styleId, 'section');
    const tokens = resolved.tokens;
    const comps = resolved.components;

    const cssVars = CSSAdapter.toStyleObject(resolved.cssVariables);

    const sectionStyle: React.CSSProperties = {
      ...cssVars,
      backgroundColor: tokens.colors?.surface || tokens.colors?.background || '#12141d',
      color: tokens.colors?.textPrimary || '#f8fafc',
      fontFamily: tokens.typography?.fontFamilyBase || 'inherit',
      borderRadius: tokens.radii?.lg || tokens.radii?.md || '8px',
      borderWidth: tokens.borders?.widthBase || '1px',
      borderStyle: tokens.borders?.style || 'solid',
      borderColor: tokens.colors?.border || 'rgba(255, 255, 255, 0.1)',
      boxShadow: tokens.shadows?.md || tokens.shadows?.sm || 'none',
      padding: tokens.spacing?.['2xl'] || '2.5rem 2rem',
      transition: 'all 200ms ease',
    };

    const headingStyle: React.CSSProperties = {
      fontFamily: comps.heading?.fontFamily || tokens.typography?.fontFamilyHeading || 'inherit',
      color: comps.heading?.color || tokens.colors?.textPrimary || '#f8fafc',
      fontWeight: comps.heading?.fontWeight || tokens.typography?.fontWeightBold || 700,
      letterSpacing: comps.heading?.letterSpacing || tokens.typography?.letterSpacingHeading || '-0.02em',
      lineHeight: comps.heading?.lineHeight || tokens.typography?.lineHeightHeading || 1.15,
      textTransform: (comps.heading?.textTransform as any) || 'none',
    };

    const paraStyle: React.CSSProperties = {
      fontFamily: comps.paragraph?.fontFamily || tokens.typography?.fontFamilyBase || 'inherit',
      color: comps.paragraph?.color || tokens.colors?.textSecondary || '#94a3b8',
      lineHeight: comps.paragraph?.lineHeight || tokens.typography?.lineHeightBase || 1.6,
    };

    const eyebrowStyle: React.CSSProperties = {
      fontFamily: tokens.typography?.fontFamilyMono || "'JetBrains Mono', monospace",
      color: tokens.colors?.primary || '#38bdf8',
      fontWeight: 700,
      fontSize: '0.75rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    };

    const primaryBtnStyle: React.CSSProperties = comps.button
      ? CSSAdapter.getButtonBaseStyle(comps.button)
      : {
          backgroundColor: tokens.colors?.primary || '#3b82f6',
          color: tokens.colors?.primaryText || '#ffffff',
          padding: '0.65rem 1.4rem',
          borderRadius: tokens.radii?.md || '6px',
          fontFamily: tokens.typography?.fontFamilyBase || 'inherit',
          fontWeight: 700,
          border: 'none',
          cursor: 'pointer',
        };

    const secondaryBtnStyle: React.CSSProperties = {
      backgroundColor: 'transparent',
      color: tokens.colors?.textPrimary || '#f8fafc',
      border: `1px solid ${tokens.colors?.border || 'rgba(255, 255, 255, 0.2)'}`,
      padding: '0.65rem 1.4rem',
      borderRadius: tokens.radii?.md || '6px',
      fontFamily: tokens.typography?.fontFamilyBase || 'inherit',
      fontWeight: 600,
      cursor: 'pointer',
    };

    const cardStyle: React.CSSProperties = comps.card
      ? CSSAdapter.getCardBaseStyle(comps.card)
      : {
          backgroundColor: tokens.colors?.surfaceSubtle || tokens.colors?.surface || 'rgba(255, 255, 255, 0.04)',
          color: tokens.colors?.textPrimary || '#f8fafc',
          border: `1px solid ${tokens.colors?.border || 'rgba(255, 255, 255, 0.08)'}`,
          borderRadius: tokens.radii?.md || '8px',
          padding: '1.5rem',
          boxShadow: tokens.shadows?.sm || 'none',
        };

    return {
      styleId,
      catalog: ALL_29_STYLES.find((s) => s.id === styleId) || activeCatalog,
      resolved,
      sectionStyle,
      headingStyle,
      paraStyle,
      eyebrowStyle,
      primaryBtnStyle,
      secondaryBtnStyle,
      cardStyle,
    };
  };

  // Generated code representations
  const generatedHtml = useMemo(() => {
    const btnStyle = overrides['hero-cta-primary']?.styleId;
    const heroStyle = overrides['hero']?.styleId;
    const cardStyle = overrides['card-1']?.styleId;

    return `<!-- Transformed with Design Style Engine (Page: ${pageStyleId}) -->
<div class="style-${pageStyleId}" data-style="${pageStyleId}">
  <header>
    <nav>
      <a href="#studio">Studio</a>
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <button>Sign In</button>
    </nav>
  </header>

  <main>
    <section class="hero"${heroStyle ? ` data-style="${heroStyle}" class="style-${heroStyle}"` : ''}>
      <p class="eyebrow">Design Language Engine</p>
      <h1>Build interfaces that communicate before a single word is read.</h1>
      <p class="lead">One source HTML structure. Infinite visual expressions.</p>
      <div class="cta-group">
        <button class="primary"${btnStyle ? ` data-style="${btnStyle}" class="style-${btnStyle}"` : ''}>
          Launch Project
        </button>
        <button class="secondary">View Specimen</button>
      </div>
    </section>

    <section class="features">
      <div class="card"${cardStyle ? ` data-style="${cardStyle}" class="style-${cardStyle}"` : ''}>
        <h3>Pure Semantic HTML</h3>
        <p>No arbitrary wrappers. CSS compiled to pure web standards.</p>
      </div>
    </section>
  </main>
</div>`;
  }, [pageStyleId, overrides]);

  const generatedCss = useMemo(() => {
    const customRules = Object.entries(overrides)
      .map(([id, ov]) => {
        const declarations: string[] = [];
        if (ov.borderRadius) declarations.push(`  border-radius: ${ov.borderRadius};`);
        if (ov.fontSize) declarations.push(`  font-size: ${ov.fontSize};`);
        if (ov.fontWeight) declarations.push(`  font-weight: ${ov.fontWeight};`);
        if (ov.shadow) declarations.push(`  box-shadow: ${ov.shadow};`);
        if (ov.paddingX || ov.paddingY) declarations.push(`  padding: ${ov.paddingY || '12px'} ${ov.paddingX || '24px'};`);
        if (declarations.length === 0) return null;
        return `/* Element custom rule: ${id} */\n[data-element-id="${id}"] {\n${declarations.join('\n')}\n}`;
      })
      .filter(Boolean)
      .join('\n\n');

    return `/* Scoped Stylesheet for Page: ${pageStyleId} */
@import "design-library/styles/${pageStyleId}.css";

${customRules || '/* All elements using canonical design language tokens */'}`;
  }, [pageStyleId, overrides]);

  const generatedReact = useMemo(() => {
    return `import React from 'react';
import { StyleScope } from 'design-library/react';

export const MyStyledInterface: React.FC = () => {
  return (
    <StyleScope styleId="${pageStyleId}">
      <main>
        <nav>
          <a href="#">Studio</a>
          <button>Sign In</button>
        </nav>
        <section>
          <h1>Design that commands attention.</h1>
          <p>Real-time visual language compiler.</p>
          <button className="primary">Initialize</button>
        </section>
      </main>
    </StyleScope>
  );
};`;
  }, [pageStyleId]);

  const generatedCli = useMemo(() => {
    return `# Transform your HTML file using the CLI
npx design-library apply ./index.html --style ${pageStyleId} --standalone -o ./dist/index.styled.html

# Export the compiled CSS
npx design-library export-css ${pageStyleId} -o ./${pageStyleId}.css`;
  }, [pageStyleId]);

  // Split-screen drag handler
  const handleSplitMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingSplit) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setCompareSplitPos(pct);
  };

  // Helper component to render the canonical interface with fully dynamic section styling
  const renderInterface = (isUnstyledRaw = false) => {
    const containerClasses = isUnstyledRaw
      ? 'lab-raw-unformatted'
      : `lab-styled-preview style-${pageStyleId} ${pageStyleId}-styled-container`;

    // Compute resolved themes for all major sections and elements
    const heroTheme = getResolvedSectionStyle('hero');
    const featuresTheme = getResolvedSectionStyle('features');
    const pricingTheme = getResolvedSectionStyle('pricing');
    const navTheme = getResolvedSectionStyle('nav');
    const footerTheme = getResolvedSectionStyle('footer');

    // Button themes (check if overridden or inherit from section)
    const primaryBtnTheme = overrides['hero-cta-primary']?.styleId
      ? getResolvedSectionStyle('hero-cta-primary')
      : heroTheme;
    const secondaryBtnTheme = overrides['hero-cta-secondary']?.styleId
      ? getResolvedSectionStyle('hero-cta-secondary')
      : heroTheme;

    // Card themes (check if overridden or inherit from features)
    const card1Theme = overrides['card-1']?.styleId ? getResolvedSectionStyle('card-1') : featuresTheme;
    const card2Theme = overrides['card-2']?.styleId ? getResolvedSectionStyle('card-2') : featuresTheme;
    const card3Theme = overrides['card-3']?.styleId ? getResolvedSectionStyle('card-3') : featuresTheme;
    const pricingCardTheme = overrides['pricing-card']?.styleId ? getResolvedSectionStyle('pricing-card') : pricingTheme;

    return (
      <div
        className={`${containerClasses} studio-canvas-pad`}
        data-style={isUnstyledRaw ? undefined : pageStyleId}
        style={{
          width: '100%',
          minHeight: '680px',
          boxSizing: 'border-box',
          transition: 'all 200ms ease',
        }}
      >
        {/* Navigation Bar Element */}
        <nav
          data-element-id="nav"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedElement('nav');
          }}
          className={`${selectedElement === 'nav' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${navTheme.styleId}-styled-container style-${navTheme.styleId}`}
          data-style={navTheme.styleId}
          style={{
            ...(!isUnstyledRaw ? navTheme.sectionStyle : {}),
            ...getElementInlineStyle('nav'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.85rem 1.25rem',
            margin: '0 0 2rem 0',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: '1rem', color: navTheme.headingStyle.color }}>
              DS//LAB
            </span>
            <span style={{ fontSize: '0.6875rem', opacity: 0.7, padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
              {navTheme.catalog.name.toUpperCase()}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', margin: '0 auto' }}>
            <a href="#features" style={{ color: navTheme.paraStyle.color, textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
              Architecture
            </a>
            <a href="#specimens" style={{ color: navTheme.paraStyle.color, textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
              Languages
            </a>
            <a href="#tokens" style={{ color: navTheme.paraStyle.color, textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
              Tokens
            </a>
            <a href="#cli" style={{ color: navTheme.paraStyle.color, textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
              CLI
            </a>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button
              data-element-id="hero-cta-secondary"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedElement('hero-cta-secondary');
              }}
              className={selectedElement === 'hero-cta-secondary' ? 'studio-selected-node' : 'studio-hoverable-node'}
              data-style={secondaryBtnTheme.styleId}
              style={{
                ...(!isUnstyledRaw ? secondaryBtnTheme.secondaryBtnStyle : {}),
                ...getElementInlineStyle('hero-cta-secondary'),
                padding: '0.45rem 1rem',
                fontSize: '0.8125rem',
              }}
            >
              Sign In
            </button>
          </div>
        </nav>

        {/* Hero Section Element - Dynamic Scoped Design Language */}
        <section
          data-element-id="hero"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedElement('hero');
          }}
          className={`${selectedElement === 'hero' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${heroTheme.styleId}-styled-container style-${heroTheme.styleId}`}
          data-style={heroTheme.styleId}
          style={{
            ...(!isUnstyledRaw ? heroTheme.sectionStyle : {}),
            ...getElementInlineStyle('hero'),
            position: 'relative',
            margin: '2rem 0',
          }}
        >
          {/* Eyebrow Kicker */}
          <p
            data-element-id="hero-subtitle"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement('hero-subtitle');
            }}
            className={selectedElement === 'hero-subtitle' ? 'studio-selected-node' : 'studio-hoverable-node'}
            style={{
              ...(!isUnstyledRaw ? heroTheme.eyebrowStyle : {}),
              ...getElementInlineStyle('hero-subtitle'),
              margin: '0 0 1rem 0',
              display: 'inline-block',
            }}
          >
            SECTION LANGUAGE: {heroTheme.catalog.name.toUpperCase()} (v1.0 COMPILER)
          </p>

          {/* Heading */}
          <h1
            data-element-id="hero-title"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement('hero-title');
            }}
            className={selectedElement === 'hero-title' ? 'studio-selected-node' : 'studio-hoverable-node'}
            style={{
              ...(!isUnstyledRaw ? heroTheme.headingStyle : {}),
              ...getElementInlineStyle('hero-title'),
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              margin: '0 0 1.25rem 0',
            }}
          >
            Architectural styling for arbitrary semantic HTML.
          </h1>

          {/* Lead Text */}
          <p
            data-element-id="hero-subtitle"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement('hero-subtitle');
            }}
            className={selectedElement === 'hero-subtitle' ? 'studio-selected-node' : 'studio-hoverable-node'}
            style={{
              ...(!isUnstyledRaw ? heroTheme.paraStyle : {}),
              ...getElementInlineStyle('hero-subtitle'),
              fontSize: '1.0625rem',
              maxWidth: '680px',
              margin: '0 0 2rem 0',
            }}
          >
            Preserve your exact document structure. Transform the visual design language in real time
            using pure scoped CSS tokens, typographic systems, and organic surfaces.
          </p>

          {/* Action Button Group */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem', alignItems: 'center' }}>
            <button
              data-element-id="hero-cta-primary"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedElement('hero-cta-primary');
              }}
              className={`${selectedElement === 'hero-cta-primary' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${primaryBtnTheme.styleId}-styled-container style-${primaryBtnTheme.styleId}`}
              data-style={primaryBtnTheme.styleId}
              style={{
                ...(!isUnstyledRaw ? primaryBtnTheme.primaryBtnStyle : {}),
                ...getElementInlineStyle('hero-cta-primary'),
              }}
            >
              Initialize Engine
            </button>

            <button
              data-element-id="hero-cta-secondary"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedElement('hero-cta-secondary');
              }}
              className={`${selectedElement === 'hero-cta-secondary' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${secondaryBtnTheme.styleId}-styled-container style-${secondaryBtnTheme.styleId}`}
              data-style={secondaryBtnTheme.styleId}
              style={{
                ...(!isUnstyledRaw ? secondaryBtnTheme.secondaryBtnStyle : {}),
                ...getElementInlineStyle('hero-cta-secondary'),
              }}
            >
              Explore Specimen
            </button>
          </div>
        </section>

        {/* Feature Cards Grid Element - Dynamic Scoped Design Language */}
        <section
          data-element-id="features"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedElement('features');
          }}
          className={`${selectedElement === 'features' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${featuresTheme.styleId}-styled-container style-${featuresTheme.styleId}`}
          data-style={featuresTheme.styleId}
          style={{
            ...(!isUnstyledRaw ? featuresTheme.sectionStyle : {}),
            ...getElementInlineStyle('features'),
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '1.25rem',
            margin: '2.5rem 0',
          }}
        >
          {/* Card 1 */}
          <div
            data-element-id="card-1"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement('card-1');
            }}
            className={`${selectedElement === 'card-1' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${card1Theme.styleId}-styled-container style-${card1Theme.styleId}`}
            data-style={card1Theme.styleId}
            style={{
              ...(!isUnstyledRaw ? card1Theme.cardStyle : {}),
              ...getElementInlineStyle('card-1'),
            }}
          >
            <h3 style={{ ...(!isUnstyledRaw ? card1Theme.headingStyle : {}), margin: '0 0 0.5rem 0', fontSize: '1.15rem' }}>
              Zero DOM Mutation
            </h3>
            <p style={{ ...(!isUnstyledRaw ? card1Theme.paraStyle : {}), margin: 0, fontSize: '0.875rem' }}>
              Your source HTML hierarchy remains completely untouched. No artificial wraps or forced layout archetypes.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-element-id="card-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement('card-2');
            }}
            className={`${selectedElement === 'card-2' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${card2Theme.styleId}-styled-container style-${card2Theme.styleId}`}
            data-style={card2Theme.styleId}
            style={{
              ...(!isUnstyledRaw ? card2Theme.cardStyle : {}),
              ...getElementInlineStyle('card-2'),
            }}
          >
            <h3 style={{ ...(!isUnstyledRaw ? card2Theme.headingStyle : {}), margin: '0 0 0.5rem 0', fontSize: '1.15rem' }}>
              Scoped Style Cascades
            </h3>
            <p style={{ ...(!isUnstyledRaw ? card2Theme.paraStyle : {}), margin: 0, fontSize: '0.875rem' }}>
              Apply one style to the entire page, another to a hero section, and a distinct language to a critical CTA.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-element-id="card-3"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement('card-3');
            }}
            className={`${selectedElement === 'card-3' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${card3Theme.styleId}-styled-container style-${card3Theme.styleId}`}
            data-style={card3Theme.styleId}
            style={{
              ...(!isUnstyledRaw ? card3Theme.cardStyle : {}),
              ...getElementInlineStyle('card-3'),
            }}
          >
            <h3 style={{ ...(!isUnstyledRaw ? card3Theme.headingStyle : {}), margin: '0 0 0.5rem 0', fontSize: '1.15rem' }}>
              Production Ready CLI
            </h3>
            <p style={{ ...(!isUnstyledRaw ? card3Theme.paraStyle : {}), margin: 0, fontSize: '0.875rem' }}>
              Run offline shell commands to transform static documents, inspect tokens, and export stylesheets.
            </p>
          </div>
        </section>

        {/* Pricing / Plan Card - Dynamic Scoped Design Language */}
        <section
          data-element-id="pricing"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedElement('pricing');
          }}
          className={`${selectedElement === 'pricing' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${pricingTheme.styleId}-styled-container style-${pricingTheme.styleId}`}
          data-style={pricingTheme.styleId}
          style={{
            ...(!isUnstyledRaw ? pricingTheme.sectionStyle : {}),
            ...getElementInlineStyle('pricing'),
            margin: '3rem 0',
          }}
        >
          <div
            data-element-id="pricing-card"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement('pricing-card');
            }}
            className={`${selectedElement === 'pricing-card' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${pricingCardTheme.styleId}-styled-container style-${pricingCardTheme.styleId}`}
            data-style={pricingCardTheme.styleId}
            style={{
              ...(!isUnstyledRaw ? pricingCardTheme.cardStyle : {}),
              ...getElementInlineStyle('pricing-card'),
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: pricingCardTheme.eyebrowStyle.color }}>
                  DEVELOPER LICENSE
                </span>
                <h2 style={{ ...(!isUnstyledRaw ? pricingCardTheme.headingStyle : {}), margin: '0.5rem 0', fontSize: '1.75rem' }}>
                  Full Engine Access
                </h2>
                <p style={{ ...(!isUnstyledRaw ? pricingCardTheme.paraStyle : {}), margin: 0, opacity: 0.85 }}>
                  32 distinct architectural design languages, CLI, and React adapter.
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: pricingCardTheme.headingStyle.color }}>$0</span>
                <span style={{ fontSize: '0.875rem', opacity: 0.7, color: pricingCardTheme.paraStyle.color }}> / MIT Open Source</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Element */}
        <footer
          data-element-id="footer"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedElement('footer');
          }}
          className={`${selectedElement === 'footer' ? 'studio-selected-node' : 'studio-hoverable-node'} lab-styled-preview ${footerTheme.styleId}-styled-container style-${footerTheme.styleId}`}
          data-style={footerTheme.styleId}
          style={{
            ...(!isUnstyledRaw ? footerTheme.sectionStyle : {}),
            ...getElementInlineStyle('footer'),
            textAlign: 'center',
            padding: '2rem 1rem',
          }}
        >
          <p style={{ ...(!isUnstyledRaw ? footerTheme.paraStyle : {}), margin: 0, fontSize: '0.8125rem' }}>
            © 2026 Design Style Library • Unified Style Engine v1.0 • Architectural Compiler
          </p>
        </footer>
      </div>
    );
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 64px)', backgroundColor: '#090a0f', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* Dynamic Semantic CSS Injector */}
      <style>{allSemanticStyles}</style>

      {/* Clean Architectural Studio Selection & Hover Styles */}
      <style>{`
        .studio-hoverable-node {
          cursor: pointer;
          position: relative;
          transition: outline 120ms ease;
        }
        .studio-hoverable-node:hover {
          outline: 1.5px dashed rgba(255, 255, 255, 0.4) !important;
          outline-offset: 3px !important;
        }
        .studio-selected-node {
          cursor: pointer;
          position: relative;
          outline: 2px solid #3b82f6 !important;
          outline-offset: 3px !important;
        }
        .studio-selected-node::after {
          content: attr(data-element-id);
          position: absolute;
          top: -24px;
          left: 0;
          background-color: #3b82f6;
          color: #ffffff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          z-index: 100;
          pointer-events: none;
        }

        .studio-canvas-pad {
          padding: 2.5rem 3rem;
        }

        @media (min-width: 1024px) {
          .studio-mobile-tabs-bar { display: none !important; }
          .studio-col-layers { display: flex !important; width: 240px !important; }
          .studio-col-canvas { display: flex !important; flex: 1 !important; }
          .studio-col-inspector { display: flex !important; width: 340px !important; }
          .studio-mobile-only { display: none !important; }
        }

        @media (max-width: 1023px) {
          .studio-mobile-tabs-bar { display: flex !important; }
          .studio-workbench-container { flex-direction: column !important; height: auto !important; min-height: calc(100vh - 140px) !important; }
          .studio-canvas-pad { padding: 1.25rem 0.85rem !important; }
          .studio-col-layers {
            width: 100% !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          }
          .studio-col-canvas {
            width: 100% !important;
            padding: 0.85rem 0.5rem !important;
          }
          .studio-col-inspector {
            width: 100% !important;
            border-left: none !important;
          }
          .studio-desktop-only { display: none !important; }
        }
      `}</style>

      {/* Studio Top Control Strip */}
      <div
        style={{
          backgroundColor: '#0c0e14',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.65rem 1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Left: Studio Identity & Target Language Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.6875rem',
                fontWeight: 700,
                color: '#f8fafc',
                backgroundColor: '#161922',
                border: '1px solid #272a38',
                padding: '0.25rem 0.6rem',
                borderRadius: '4px',
                letterSpacing: '0.04em',
              }}
            >
              STUDIO//ENGINE
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.75rem', color: '#8e96a4', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>
              PAGE LANGUAGE:
            </label>
            <select
              value={pageStyleId}
              onChange={(e) => setPageStyleId(e.target.value)}
              style={{
                backgroundColor: '#161922',
                color: '#f8fafc',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              {activeStyles.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.name} ({st.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Center: Viewport & View Mode Toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* View Mode Buttons */}
          <div style={{ display: 'flex', backgroundColor: '#14161f', borderRadius: '6px', padding: '2px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={() => setViewMode('canvas')}
              title="Interactive Studio Canvas"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: viewMode === 'canvas' ? '#222634' : 'transparent',
                color: viewMode === 'canvas' ? '#ffffff' : '#8e96a4',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Eye size={12} />
              Canvas
            </button>
            <button
              onClick={() => setViewMode('compare-split')}
              title="Before & After Comparison Split"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: viewMode === 'compare-split' ? '#222634' : 'transparent',
                color: viewMode === 'compare-split' ? '#ffffff' : '#8e96a4',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <SplitSquareVertical size={12} />
              Before / After
            </button>
          </div>

          {/* Viewport Width Toggles */}
          <div style={{ display: 'flex', backgroundColor: '#14161f', borderRadius: '6px', padding: '2px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={() => setViewport('desktop')}
              title="Desktop View (100%)"
              style={{
                padding: '0.35rem 0.55rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: viewport === 'desktop' ? '#222634' : 'transparent',
                color: viewport === 'desktop' ? '#f8fafc' : '#64748b',
                cursor: 'pointer',
              }}
            >
              <Monitor size={14} />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              title="Tablet View (768px)"
              style={{
                padding: '0.35rem 0.55rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: viewport === 'tablet' ? '#222634' : 'transparent',
                color: viewport === 'tablet' ? '#f8fafc' : '#64748b',
                cursor: 'pointer',
              }}
            >
              <Tablet size={14} />
            </button>
            <button
              onClick={() => setViewport('mobile')}
              title="Mobile View (375px)"
              style={{
                padding: '0.35rem 0.55rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: viewport === 'mobile' ? '#222634' : 'transparent',
                color: viewport === 'mobile' ? '#f8fafc' : '#64748b',
                cursor: 'pointer',
              }}
            >
              <Smartphone size={14} />
            </button>
          </div>
        </div>

        {/* Right: Quick Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={handleResetAll}
            title="Reset All Element Overrides"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              backgroundColor: '#161922',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#8e96a4',
              fontSize: '0.75rem',
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={12} />
            Reset All
          </button>
          {onOpenDocs && (
            <button
              onClick={() => onOpenDocs(pageStyleId)}
              title="Open documentation for this design language"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                backgroundColor: '#161922',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#8e96a4',
                fontSize: '0.75rem',
                cursor: 'pointer',
              }}
            >
              <BookOpen size={12} />
              Docs
            </button>
          )}
          {onOpenCli && (
            <button
              onClick={onOpenCli}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                backgroundColor: '#1e2230',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#f8fafc',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Terminal size={12} />
              Open CLI
            </button>
          )}
        </div>
      </div>

      {/* Mobile Mode Switcher Bar (< 1024px) */}
      <div
        className="studio-mobile-tabs-bar"
        style={{
          backgroundColor: '#0f1118',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.4rem 0.75rem',
          gap: '0.35rem',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          position: 'sticky',
          top: '56px',
          zIndex: 40,
        }}
      >
        {[
          { id: 'canvas' as const, label: 'Canvas', icon: Eye },
          { id: 'layers' as const, label: 'Layers (13)', icon: Layers },
          { id: 'inspector' as const, label: `Inspector: ${selectedElement}`, icon: Sliders },
          { id: 'code' as const, label: 'Export Code', icon: Code2 },
        ].map((tab) => {
          const isActive = mobileWorkbenchTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setMobileWorkbenchTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.75rem',
                borderRadius: '6px',
                border: isActive ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
                backgroundColor: isActive ? '#1b2234' : '#141620',
                color: isActive ? '#60a5fa' : '#8e96a4',
                fontSize: '0.75rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                minHeight: '36px',
              }}
            >
              <Icon size={13} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main 3-Column Studio Workbench */}
      <div className="studio-workbench-container" style={{ flex: 1, display: 'flex', overflow: 'hidden', height: 'calc(100vh - 120px)' }}>
        {/* Left Column: DOM Layers Tree */}
        <div
          className="studio-col-layers"
          style={{
            width: '240px',
            backgroundColor: '#0c0e14',
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
            display: mobileWorkbenchTab === 'layers' ? 'flex' : 'none',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={14} color="#8e96a4" />
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8e96a4', fontFamily: "'JetBrains Mono', monospace" }}>
              DOM Layers Tree
            </span>
          </div>

          <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {[
              { id: 'nav' as SelectedElementId, label: 'header.navbar', tag: 'NAV' },
              { id: 'hero' as SelectedElementId, label: 'section.hero', tag: 'SECTION' },
              { id: 'hero-title' as SelectedElementId, label: 'h1.title', tag: 'H1', indent: true },
              { id: 'hero-subtitle' as SelectedElementId, label: 'p.lead', tag: 'P', indent: true },
              { id: 'hero-cta-primary' as SelectedElementId, label: 'button.primary', tag: 'BTN', indent: true },
              { id: 'hero-cta-secondary' as SelectedElementId, label: 'button.secondary', tag: 'BTN', indent: true },
              { id: 'features' as SelectedElementId, label: 'section.features', tag: 'GRID' },
              { id: 'card-1' as SelectedElementId, label: 'div.card.1', tag: 'CARD', indent: true },
              { id: 'card-2' as SelectedElementId, label: 'div.card.2', tag: 'CARD', indent: true },
              { id: 'card-3' as SelectedElementId, label: 'div.card.3', tag: 'CARD', indent: true },
              { id: 'pricing' as SelectedElementId, label: 'section.pricing', tag: 'SECTION' },
              { id: 'pricing-card' as SelectedElementId, label: 'div.pricing-card', tag: 'CARD', indent: true },
              { id: 'footer' as SelectedElementId, label: 'footer.copyright', tag: 'FOOTER' },
            ].map((node) => {
              const isSelected = selectedElement === node.id;
              const hasScopedStyle = overrides[node.id]?.styleId;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedElement(node.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: `0.45rem 0.6rem 0.45rem ${node.indent ? '1.5rem' : '0.6rem'}`,
                    borderRadius: '5px',
                    border: isSelected ? '1px solid rgba(59, 130, 246, 0.6)' : '1px solid transparent',
                    backgroundColor: isSelected ? '#1b2234' : 'transparent',
                    color: isSelected ? '#ffffff' : '#8e96a4',
                    fontSize: '0.75rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 100ms ease',
                  }}
                >
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {node.label}
                  </span>
                  {hasScopedStyle && (
                    <span
                      style={{
                        fontSize: '9px',
                        padding: '1px 5px',
                        borderRadius: '3px',
                        backgroundColor: '#2563eb',
                        color: '#fff',
                        fontWeight: 700,
                      }}
                    >
                      {hasScopedStyle.slice(0, 5)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Shortcut to Inspector */}
          <div className="studio-mobile-only" style={{ padding: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', marginTop: 'auto' }}>
            <button
              onClick={() => setMobileWorkbenchTab('inspector')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: '#2563eb',
                color: '#fff',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
                minHeight: '44px',
              }}
            >
              <Sliders size={14} />
              Adjust {selectedElement} in Inspector
            </button>
          </div>
        </div>

        {/* Center Column: Live Canvas & Viewport Area */}
        <div
          className="studio-col-canvas"
          style={{
            flex: 1,
            backgroundColor: '#07080c',
            backgroundImage:
              'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            overflowY: 'auto',
            padding: '2rem',
            display: mobileWorkbenchTab === 'canvas' ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Canvas Wrapper */}
          <div
            style={{
              width: viewport === 'mobile' ? '375px' : viewport === 'tablet' ? '768px' : '100%',
              maxWidth: '1100px',
              backgroundColor: '#090a0f',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75)',
              overflow: 'hidden',
              position: 'relative',
              transition: 'width 250ms ease',
            }}
          >
            {/* View Mode: Normal Canvas */}
            {viewMode === 'canvas' && renderInterface(false)}

            {/* View Mode: Draggable Before / After Split */}
            {viewMode === 'compare-split' && (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  userSelect: 'none',
                  cursor: isDraggingSplit ? 'ew-resize' : 'default',
                }}
                onMouseMove={handleSplitMouseMove}
                onMouseUp={() => setIsDraggingSplit(false)}
                onMouseLeave={() => setIsDraggingSplit(false)}
              >
                {/* Styled Version (Background) */}
                <div style={{ width: '100%' }}>{renderInterface(false)}</div>

                {/* Raw Semantic HTML Version (Clipped Overlay) */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: `${compareSplitPos}%`,
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    borderRight: '2px solid #3b82f6',
                  }}
                >
                  <div style={{ width: '1100px' }}>{renderInterface(true)}</div>
                </div>

                {/* Draggable Divider Handle */}
                <div
                  onMouseDown={() => setIsDraggingSplit(true)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: `calc(${compareSplitPos}% - 14px)`,
                    width: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'ew-resize',
                    zIndex: 50,
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#3b82f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '11px',
                    }}
                  >
                    ↔
                  </div>
                </div>

                {/* Badges for Before / After */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    color: '#ffffff',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    zIndex: 60,
                  }}
                >
                  RAW BROWSER HTML
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: '#1d4ed8',
                    color: '#ffffff',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    fontWeight: 700,
                    zIndex: 60,
                  }}
                >
                  PAGE STYLE: {pageStyleId.toUpperCase()}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Selected Element Inspector Panel */}
        <div
          className="studio-col-inspector"
          style={{
            width: '340px',
            backgroundColor: '#0c0e14',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
            display: (mobileWorkbenchTab === 'inspector' || mobileWorkbenchTab === 'code') ? 'flex' : 'none',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          {/* Inspector Header */}
          <div
            style={{
              padding: '0.75rem 1.25rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sliders size={14} color="#8e96a4" />
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8e96a4', fontFamily: "'JetBrains Mono', monospace" }}>
                Section & Node Inspector
              </span>
            </div>
            <button
              onClick={handleResetElement}
              style={{
                fontSize: '0.6875rem',
                color: '#8e96a4',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Reset Node
            </button>
          </div>

          {/* Selected Element HUD Banner */}
          <div
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: '#12141d',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <span style={{ fontSize: '0.6875rem', color: '#64748b', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
              Active Selected Node
            </span>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f8fafc', fontFamily: "'JetBrains Mono', monospace", marginTop: '0.1rem' }}>
              {selectedElement}
            </div>
          </div>

          <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* 1. Scoped Design Language Override (The Core Fix) */}
            <div
              style={{
                backgroundColor: '#12141d',
                padding: '0.85rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                <label style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'JetBrains Mono', monospace" }}>
                  Scoped Design Language
                </label>
                {currentElementOverrides.styleId && (
                  <span style={{ fontSize: '9px', backgroundColor: '#2563eb', color: '#fff', padding: '1px 5px', borderRadius: '3px', fontWeight: 700 }}>
                    OVERRIDDEN
                  </span>
                )}
              </div>

              <select
                id="studio-scoped-language-select"
                value={currentElementOverrides.styleId || 'default'}
                onChange={(e) => handleUpdateOverride('styleId', e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#181b26',
                  color: '#f8fafc',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  padding: '0.5rem',
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  outline: 'none',
                  cursor: 'pointer',
                  marginBottom: '0.75rem',
                }}
              >
                <option value="default">Inherit from Page ({pageStyleId})</option>
                {activeStyles.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.name} — {st.category}
                  </option>
                ))}
              </select>

              {/* Quick Preset Chips for instantaneous 1-click styling */}
              <div>
                <span style={{ fontSize: '0.6875rem', color: '#8e96a4', display: 'block', marginBottom: '0.35rem', fontFamily: "'JetBrains Mono', monospace" }}>
                  Quick Design Presets:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {POPULAR_STYLES.map((stId) => {
                    const isCurrent = (currentElementOverrides.styleId || pageStyleId) === stId;
                    return (
                      <button
                        key={stId}
                        onClick={() => handleUpdateOverride('styleId', stId)}
                        style={{
                          padding: '0.2rem 0.5rem',
                          fontSize: '0.6875rem',
                          borderRadius: '4px',
                          border: isCurrent ? '1px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.08)',
                          backgroundColor: isCurrent ? 'rgba(59, 130, 246, 0.2)' : '#181b26',
                          color: isCurrent ? '#93c5fd' : '#8e96a4',
                          cursor: 'pointer',
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {stId}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. Typography Controls */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#8e96a4', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
                Typography Overrides
              </span>

              {/* Font Size Preset */}
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.6875rem', color: '#8e96a4' }}>Font Size</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.3rem', marginTop: '0.2rem' }}>
                  {['13px', '16px', '20px', '28px'].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => handleUpdateOverride('fontSize', sz)}
                      style={{
                        padding: '0.25rem',
                        fontSize: '0.6875rem',
                        borderRadius: '4px',
                        border: currentElementOverrides.fontSize === sz ? '1px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.08)',
                        backgroundColor: currentElementOverrides.fontSize === sz ? 'rgba(59, 130, 246, 0.2)' : '#14161f',
                        color: '#f8fafc',
                        cursor: 'pointer',
                      }}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Weight */}
              <div>
                <span style={{ fontSize: '0.6875rem', color: '#8e96a4' }}>Font Weight</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.3rem', marginTop: '0.2rem' }}>
                  {['400', '600', '700', '900'].map((wt) => (
                    <button
                      key={wt}
                      onClick={() => handleUpdateOverride('fontWeight', wt)}
                      style={{
                        padding: '0.25rem',
                        fontSize: '0.6875rem',
                        borderRadius: '4px',
                        border: currentElementOverrides.fontWeight === wt ? '1px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.08)',
                        backgroundColor: currentElementOverrides.fontWeight === wt ? 'rgba(59, 130, 246, 0.2)' : '#14161f',
                        color: '#f8fafc',
                        cursor: 'pointer',
                      }}
                    >
                      {wt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Geometry & Corner Radii */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#8e96a4', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
                Corner Geometry (Radius)
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.3rem' }}>
                {[
                  { label: '0px', val: '0px' },
                  { label: '4px', val: '4px' },
                  { label: '8px', val: '8px' },
                  { label: '16px', val: '16px' },
                  { label: 'Pill', val: '9999px' },
                ].map((rad) => (
                  <button
                    key={rad.val}
                    onClick={() => handleUpdateOverride('borderRadius', rad.val)}
                    style={{
                      padding: '0.25rem',
                      fontSize: '0.6875rem',
                      borderRadius: '4px',
                      border: currentElementOverrides.borderRadius === rad.val ? '1px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: currentElementOverrides.borderRadius === rad.val ? 'rgba(59, 130, 246, 0.2)' : '#14161f',
                      color: '#f8fafc',
                      cursor: 'pointer',
                    }}
                  >
                    {rad.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Padding Spacing */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#8e96a4', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
                Padding Presets
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.3rem' }}>
                {[
                  { label: 'Compact', px: '12px', py: '6px' },
                  { label: 'Balanced', px: '20px', py: '10px' },
                  { label: 'Spacious', px: '32px', py: '16px' },
                ].map((pad) => (
                  <button
                    key={pad.label}
                    onClick={() => {
                      handleUpdateOverride('paddingX', pad.px);
                      handleUpdateOverride('paddingY', pad.py);
                    }}
                    style={{
                      padding: '0.35rem 0.2rem',
                      fontSize: '0.6875rem',
                      borderRadius: '4px',
                      border: currentElementOverrides.paddingX === pad.px ? '1px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: currentElementOverrides.paddingX === pad.px ? 'rgba(59, 130, 246, 0.2)' : '#14161f',
                      color: '#f8fafc',
                      cursor: 'pointer',
                    }}
                  >
                    {pad.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Shadow Treatment */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#8e96a4', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
                Shadow Treatment
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.3rem' }}>
                {[
                  { label: 'None', val: 'none' },
                  { label: 'Soft Elevated', val: '0 10px 25px -5px rgba(0,0,0,0.5)' },
                  { label: 'Brutalist Hard', val: '4px 4px 0px #000000' },
                  { label: 'Muted Aura', val: '0 0 20px rgba(255, 255, 255, 0.1)' },
                ].map((shd) => (
                  <button
                    key={shd.label}
                    onClick={() => handleUpdateOverride('shadow', shd.val)}
                    style={{
                      padding: '0.35rem',
                      fontSize: '0.6875rem',
                      borderRadius: '4px',
                      border: currentElementOverrides.shadow === shd.val ? '1px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: currentElementOverrides.shadow === shd.val ? 'rgba(59, 130, 246, 0.2)' : '#14161f',
                      color: '#f8fafc',
                      cursor: 'pointer',
                    }}
                  >
                    {shd.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Live Code Drawer */}
      <div
        style={{
          backgroundColor: '#0a0c12',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.75rem 1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8e96a4', fontFamily: "'JetBrains Mono', monospace" }}>
              Live Export Code
            </span>

            <div style={{ display: 'flex', backgroundColor: '#14161f', borderRadius: '4px', padding: '2px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              {(['html', 'css', 'react', 'cli'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCodeTab(tab)}
                  style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '3px',
                    border: 'none',
                    backgroundColor: activeCodeTab === tab ? '#222634' : 'transparent',
                    color: activeCodeTab === tab ? '#ffffff' : '#8e96a4',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => {
                const code =
                  activeCodeTab === 'html'
                    ? generatedHtml
                    : activeCodeTab === 'css'
                    ? generatedCss
                    : activeCodeTab === 'react'
                    ? generatedReact
                    : generatedCli;
                handleCopyCode(code, activeCodeTab);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '5px',
                backgroundColor: '#161922',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: copiedCodeTab === activeCodeTab ? '#4ade80' : '#f8fafc',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {copiedCodeTab === activeCodeTab ? <Check size={12} /> : <Copy size={12} />}
              {copiedCodeTab === activeCodeTab ? 'Copied' : `Copy ${activeCodeTab.toUpperCase()}`}
            </button>
          </div>
        </div>

        {/* Code Content Box */}
        <pre
          style={{
            margin: 0,
            maxHeight: '130px',
            overflowY: 'auto',
            padding: '0.65rem 1rem',
            backgroundColor: '#07080c',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            lineHeight: 1.5,
            color: '#cbd5e1',
          }}
        >
          {activeCodeTab === 'html' && generatedHtml}
          {activeCodeTab === 'css' && generatedCss}
          {activeCodeTab === 'react' && generatedReact}
          {activeCodeTab === 'cli' && generatedCli}
        </pre>
      </div>
    </div>
  );
};
