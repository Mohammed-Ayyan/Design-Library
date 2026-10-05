/**
 * Mixed Media Design Language — Curated Art Direction Stylesheet
 * 
 * Combines physical and artistic media into one intentionally composed interface:
 * photography, fine art paper, editorial typography, paint marks, geometric vectors,
 * and subtle print grain.
 * 
 * Distinct from Scrapbook: Not naive craft album, washi tape, or stickers,
 * but sophisticated, art-directed editorial curation.
 * Distinct from Maximalism: Not dense jewel-toned clutter,
 * but deliberate balance between paper white space and expressive media.
 * Distinct from Graffiti: Not street spray paint or raw tags,
 * but fine art printmaking, photography, and typography.
 * Distinct from Bohemian: Not earthy terracotta warmth,
 * but modernist gallery contrast with crisp vermilion and cobalt accents.
 * 
 * Preserves the user's source HTML with zero DOM mutations.
 */

export const mixedMediaSemanticCss = `
  /* ==========================================================================
     MIXED MEDIA DESIGN LANGUAGE — CURATED ART DIRECTION & PRINTMAKING
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

  /* --------------------------------------------------------------------------
     1. FOUNDATION & SCOPED VARIABLES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="mixed-media"],
  .mixed-media-styled-container,
  .style-mixed-media,
  .ds-scope[data-style-id="mixed-media"],
  [data-style="mixed-media"] {
    /* Curated Paper & Ink Palette */
    --mm-bg: #f8f6f0;                    /* Cotton rag fine art paper canvas */
    --mm-surface: #ffffff;               /* Matted photographic print slab */
    --mm-surface-warm: #f1ede4;          /* Warm vellum mounting board */
    --mm-text: #1a1918;                  /* Sumi carbon ink black */
    --mm-text-secondary: #5a5650;        /* Charcoal wash */
    --mm-text-muted: #8a857c;            /* Pencil graphite */

    /* Art Direction & Pigment Accents */
    --mm-vermilion: #e63926;             /* Cadmium vermilion red ink */
    --mm-vermilion-hover: #d1301e;
    --mm-cobalt: #1e4b6e;                /* Prussian cobalt blue */
    --mm-ocher: #c48b36;                 /* Warm gold ocher */
    --mm-border: #e2ddd4;                /* Deckled paper hairline boundary */
    --mm-border-strong: #1a1918;         /* Crisp vector black rule */

    /* Typographic Hierarchy */
    --mm-font-display: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
    --mm-font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --mm-font-mono: 'Space Grotesk', 'JetBrains Mono', monospace;

    /* Base Canvas Styling */
    background-color: var(--mm-bg) !important;
    color: var(--mm-text-secondary) !important;
    font-family: var(--mm-font-body) !important;
    font-size: 1rem !important;
    line-height: 1.65 !important;
    box-sizing: border-box !important;
    position: relative;
    min-height: 100%;
    padding: 3.5rem 2.25rem;

    /* Subtle fine art paper grain & drafting coordinate matrix */
    background-image:
      radial-gradient(circle at 15% 15%, rgba(230, 57, 38, 0.035) 0%, transparent 45%),
      radial-gradient(circle at 85% 85%, rgba(30, 75, 110, 0.035) 0%, transparent 45%),
      linear-gradient(to right, rgba(26, 25, 24, 0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(26, 25, 24, 0.02) 1px, transparent 1px) !important;
    background-size: 100% 100%, 100% 100%, 72px 72px, 72px 72px !important;

    /* Curated top editorial boundary with vermilion registration indicator */
    border: 1px solid var(--mm-border) !important;
    border-top: 3px solid var(--mm-text) !important;
    box-shadow: 0 4px 25px rgba(26, 25, 24, 0.04), 0 1px 3px rgba(26, 25, 24, 0.02) !important;
  }

  /* --------------------------------------------------------------------------
     2. GLOBAL RESETS & SCOPED ELEMENT STYLING
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="mixed-media"] *,
  .mixed-media-styled-container *,
  .style-mixed-media *,
  .ds-scope[data-style-id="mixed-media"] *,
  [data-style="mixed-media"] * {
    box-sizing: border-box;
  }

  /* --------------------------------------------------------------------------
     3. TYPOGRAPHY & HEADING HIERARCHY
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="mixed-media"] h1,
  .lab-styled-preview[data-style="mixed-media"] h2,
  .lab-styled-preview[data-style="mixed-media"] h3,
  .lab-styled-preview[data-style="mixed-media"] h4,
  .lab-styled-preview[data-style="mixed-media"] h5,
  .lab-styled-preview[data-style="mixed-media"] h6,
  .mixed-media-styled-container h1,
  .mixed-media-styled-container h2,
  .mixed-media-styled-container h3,
  .mixed-media-styled-container h4,
  .mixed-media-styled-container h5,
  .mixed-media-styled-container h6,
  .style-mixed-media h1,
  .style-mixed-media h2,
  .style-mixed-media h3,
  .style-mixed-media h4,
  .style-mixed-media h5,
  .style-mixed-media h6,
  .ds-scope[data-style-id="mixed-media"] h1,
  .ds-scope[data-style-id="mixed-media"] h2,
  .ds-scope[data-style-id="mixed-media"] h3,
  .ds-scope[data-style-id="mixed-media"] h4,
  .ds-scope[data-style-id="mixed-media"] h5,
  .ds-scope[data-style-id="mixed-media"] h6,
  [data-style="mixed-media"] h1,
  [data-style="mixed-media"] h2,
  [data-style="mixed-media"] h3,
  [data-style="mixed-media"] h4,
  [data-style="mixed-media"] h5,
  [data-style="mixed-media"] h6 {
    font-family: var(--mm-font-display) !important;
    margin-top: 0;
    line-height: 1.15 !important;
    color: var(--mm-text) !important;
    letter-spacing: -0.02em !important;
    font-weight: 600 !important;
  }

  /* Monumental Art-Directed H1 */
  .lab-styled-preview[data-style="mixed-media"] h1,
  .mixed-media-styled-container h1,
  .style-mixed-media h1,
  .ds-scope[data-style-id="mixed-media"] h1,
  [data-style="mixed-media"] h1 {
    font-size: 3.25rem !important;
    font-weight: 700 !important;
    margin-bottom: 1.5rem !important;
    letter-spacing: -0.03em !important;
    position: relative;
    display: inline-block;
  }

  /* Editorial Accent Registration Rule */
  .lab-styled-preview[data-style="mixed-media"] h1::after,
  .mixed-media-styled-container h1::after,
  .style-mixed-media h1::after,
  .ds-scope[data-style-id="mixed-media"] h1::after,
  [data-style="mixed-media"] h1::after {
    content: '';
    display: block;
    width: 52px;
    height: 3px;
    background: var(--mm-vermilion);
    margin-top: 1rem;
    box-shadow: 2px 2px 0px var(--mm-text);
  }

  /* Editorial Section Title H2 with Geometric Index Annotation */
  .lab-styled-preview[data-style="mixed-media"] h2,
  .mixed-media-styled-container h2,
  .style-mixed-media h2,
  .ds-scope[data-style-id="mixed-media"] h2,
  [data-style="mixed-media"] h2 {
    font-size: 2rem !important;
    font-weight: 600 !important;
    margin-top: 2.25rem !important;
    margin-bottom: 1rem !important;
    border-bottom: 1px solid var(--mm-border) !important;
    padding-bottom: 0.65rem !important;
    position: relative;
  }

  .lab-styled-preview[data-style="mixed-media"] h2::before,
  .mixed-media-styled-container h2::before,
  .style-mixed-media h2::before,
  .ds-scope[data-style-id="mixed-media"] h2::before,
  [data-style="mixed-media"] h2::before {
    content: '[ · ] ';
    font-family: var(--mm-font-mono);
    color: var(--mm-vermilion);
    font-size: 1rem;
    margin-right: 0.35rem;
    font-weight: 700;
  }

  /* Subsection Titles H3 */
  .lab-styled-preview[data-style="mixed-media"] h3,
  .mixed-media-styled-container h3,
  .style-mixed-media h3,
  .ds-scope[data-style-id="mixed-media"] h3,
  [data-style="mixed-media"] h3 {
    font-size: 1.35rem !important;
    font-weight: 600 !important;
    margin-bottom: 0.75rem !important;
    color: var(--mm-text) !important;
    letter-spacing: -0.01em !important;
  }

  .lab-styled-preview[data-style="mixed-media"] h4,
  .mixed-media-styled-container h4,
  .style-mixed-media h4,
  .ds-scope[data-style-id="mixed-media"] h4,
  [data-style="mixed-media"] h4 {
    font-size: 1.1rem !important;
    font-weight: 600 !important;
    color: var(--mm-text) !important;
  }

  /* Body Paragraphs */
  .lab-styled-preview[data-style="mixed-media"] p,
  .mixed-media-styled-container p,
  .style-mixed-media p,
  .ds-scope[data-style-id="mixed-media"] p,
  [data-style="mixed-media"] p {
    font-family: var(--mm-font-body) !important;
    color: var(--mm-text-secondary) !important;
    font-size: 1rem !important;
    line-height: 1.65 !important;
    margin-top: 0;
    margin-bottom: 1.25rem;
  }

  .lab-styled-preview[data-style="mixed-media"] strong,
  .mixed-media-styled-container strong,
  .style-mixed-media strong,
  .ds-scope[data-style-id="mixed-media"] strong,
  [data-style="mixed-media"] strong {
    color: var(--mm-text) !important;
    font-weight: 600 !important;
  }

  /* Eyebrows / Technical Metadata / Exhibition Tags */
  .lab-styled-preview[data-style="mixed-media"] .tag,
  .lab-styled-preview[data-style="mixed-media"] header > p:first-child,
  .lab-styled-preview[data-style="mixed-media"] .eyebrow,
  .mixed-media-styled-container .tag,
  .mixed-media-styled-container header > p:first-child,
  .mixed-media-styled-container .eyebrow,
  .style-mixed-media .tag,
  .style-mixed-media header > p:first-child,
  .style-mixed-media .eyebrow,
  .ds-scope[data-style-id="mixed-media"] .tag,
  .ds-scope[data-style-id="mixed-media"] header > p:first-child,
  .ds-scope[data-style-id="mixed-media"] .eyebrow,
  [data-style="mixed-media"] .tag,
  [data-style="mixed-media"] header > p:first-child,
  [data-style="mixed-media"] .eyebrow {
    font-family: var(--mm-font-mono) !important;
    color: var(--mm-vermilion) !important;
    letter-spacing: 0.14em !important;
    text-transform: uppercase !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
  }

  /* --------------------------------------------------------------------------
     4. NAVIGATION & HEADER SYSTEM
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="mixed-media"] nav,
  .lab-styled-preview[data-style="mixed-media"] header:not(.hero),
  .mixed-media-styled-container nav,
  .mixed-media-styled-container header:not(.hero),
  .style-mixed-media nav,
  .style-mixed-media header:not(.hero),
  .ds-scope[data-style-id="mixed-media"] nav,
  .ds-scope[data-style-id="mixed-media"] header:not(.hero),
  [data-style="mixed-media"] nav,
  [data-style="mixed-media"] header:not(.hero) {
    background: #ffffff !important;
    border: 1px solid var(--mm-border) !important;
    border-bottom: 2px solid var(--mm-text) !important;
    box-shadow: 0 2px 10px rgba(26, 25, 24, 0.04) !important;
    padding: 1rem 1.75rem !important;
    border-radius: 1px !important;
    margin-bottom: 2.5rem !important;
  }

  .lab-styled-preview[data-style="mixed-media"] nav ul,
  .mixed-media-styled-container nav ul,
  .style-mixed-media nav ul,
  .ds-scope[data-style-id="mixed-media"] nav ul,
  [data-style="mixed-media"] nav ul {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 1.75rem !important;
    align-items: center !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .lab-styled-preview[data-style="mixed-media"] nav a,
  .mixed-media-styled-container nav a,
  .style-mixed-media nav a,
  .ds-scope[data-style-id="mixed-media"] nav a,
  [data-style="mixed-media"] nav a {
    font-family: var(--mm-font-mono) !important;
    font-size: 0.8125rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    color: var(--mm-text) !important;
    text-decoration: none !important;
    transition: all 180ms ease !important;
    padding: 0.25rem 0.25rem;
    position: relative;
  }

  .lab-styled-preview[data-style="mixed-media"] nav a:hover,
  .mixed-media-styled-container nav a:hover,
  .style-mixed-media nav a:hover,
  .ds-scope[data-style-id="mixed-media"] nav a:hover,
  [data-style="mixed-media"] nav a:hover {
    color: var(--mm-vermilion) !important;
  }

  .lab-styled-preview[data-style="mixed-media"] nav a:hover::after,
  .mixed-media-styled-container nav a:hover::after,
  .style-mixed-media nav a:hover::after,
  .ds-scope[data-style-id="mixed-media"] nav a:hover::after,
  [data-style="mixed-media"] nav a:hover::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--mm-vermilion);
  }

  /* --------------------------------------------------------------------------
     5. HERO / ART-DIRECTED GALLERY INTRO
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="mixed-media"] header.hero,
  .lab-styled-preview[data-style="mixed-media"] .hero,
  .mixed-media-styled-container header.hero,
  .mixed-media-styled-container .hero,
  .style-mixed-media header.hero,
  .style-mixed-media .hero,
  .ds-scope[data-style-id="mixed-media"] header.hero,
  .ds-scope[data-style-id="mixed-media"] .hero,
  [data-style="mixed-media"] header.hero,
  [data-style="mixed-media"] .hero {
    position: relative;
    padding: 3.5rem 2.5rem !important;
    margin-bottom: 3.5rem !important;
    border-radius: 2px !important;
    background: #ffffff !important;
    border: 1px solid var(--mm-border) !important;
    border-left: 4px solid var(--mm-vermilion) !important;
    box-shadow: 0 8px 30px rgba(26, 25, 24, 0.06), 4px 4px 0px rgba(230, 57, 38, 0.15) !important;
  }

  /* --------------------------------------------------------------------------
     6. CARDS, SECTIONS & CONTAINER MODULES
     -------------------------------------------------------------------------- */
  /* Un-cardify plain text paragraphs in articles and sections */
  .lab-styled-preview[data-style="mixed-media"] article > p,
  .lab-styled-preview[data-style="mixed-media"] section > p,
  .lab-styled-preview[data-style="mixed-media"] main > p,
  .mixed-media-styled-container article > p,
  .mixed-media-styled-container section > p,
  .mixed-media-styled-container main > p,
  .style-mixed-media article > p,
  .style-mixed-media section > p,
  .style-mixed-media main > p,
  .ds-scope[data-style-id="mixed-media"] article > p,
  .ds-scope[data-style-id="mixed-media"] section > p,
  .ds-scope[data-style-id="mixed-media"] main > p,
  [data-style="mixed-media"] article > p,
  [data-style="mixed-media"] section > p,
  [data-style="mixed-media"] main > p {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  /* Matted Art Print Cards */
  .lab-styled-preview[data-style="mixed-media"] .card,
  .lab-styled-preview[data-style="mixed-media"] article:not(.prose),
  .lab-styled-preview[data-style="mixed-media"] .feature-card,
  .lab-styled-preview[data-style="mixed-media"] .pricing-card,
  .lab-styled-preview[data-style="mixed-media"] .tier,
  .mixed-media-styled-container .card,
  .mixed-media-styled-container article:not(.prose),
  .mixed-media-styled-container .feature-card,
  .mixed-media-styled-container .pricing-card,
  .mixed-media-styled-container .tier,
  .style-mixed-media .card,
  .style-mixed-media article:not(.prose),
  .style-mixed-media .feature-card,
  .style-mixed-media .pricing-card,
  .style-mixed-media .tier,
  .ds-scope[data-style-id="mixed-media"] .card,
  .ds-scope[data-style-id="mixed-media"] article:not(.prose),
  .ds-scope[data-style-id="mixed-media"] .feature-card,
  .ds-scope[data-style-id="mixed-media"] .pricing-card,
  .ds-scope[data-style-id="mixed-media"] .tier,
  [data-style="mixed-media"] .card,
  [data-style="mixed-media"] article:not(.prose),
  [data-style="mixed-media"] .feature-card,
  [data-style="mixed-media"] .pricing-card,
  [data-style="mixed-media"] .tier {
    background: #ffffff !important;
    border: 1px solid var(--mm-border) !important;
    border-radius: 2px !important;
    padding: 2.25rem 2rem !important;
    box-shadow: 0 4px 16px rgba(26, 25, 24, 0.05), 0 1px 2px rgba(26, 25, 24, 0.03) !important;
    transition: all 220ms ease !important;
    position: relative;
  }

  /* Corner vector registration crop mark */
  .lab-styled-preview[data-style="mixed-media"] article:not(.prose)::before,
  .lab-styled-preview[data-style="mixed-media"] .card::before,
  .mixed-media-styled-container article:not(.prose)::before,
  .mixed-media-styled-container .card::before,
  .style-mixed-media article:not(.prose)::before,
  .style-mixed-media .card::before,
  .ds-scope[data-style-id="mixed-media"] article:not(.prose)::before,
  .ds-scope[data-style-id="mixed-media"] .card::before,
  [data-style="mixed-media"] article:not(.prose)::before,
  [data-style="mixed-media"] .card::before {
    content: '◤';
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 0.65rem;
    color: var(--mm-vermilion);
    opacity: 0.65;
  }

  .lab-styled-preview[data-style="mixed-media"] .card:hover,
  .lab-styled-preview[data-style="mixed-media"] article:not(.prose):hover,
  .lab-styled-preview[data-style="mixed-media"] .feature-card:hover,
  .lab-styled-preview[data-style="mixed-media"] .pricing-card:hover,
  .lab-styled-preview[data-style="mixed-media"] .tier:hover,
  .mixed-media-styled-container .card:hover,
  .mixed-media-styled-container article:not(.prose):hover,
  .mixed-media-styled-container .feature-card:hover,
  .mixed-media-styled-container .pricing-card:hover,
  .mixed-media-styled-container .tier:hover,
  .style-mixed-media .card:hover,
  .style-mixed-media article:not(.prose):hover,
  .style-mixed-media .feature-card:hover,
  .style-mixed-media .pricing-card:hover,
  .style-mixed-media .tier:hover,
  .ds-scope[data-style-id="mixed-media"] .card:hover,
  .ds-scope[data-style-id="mixed-media"] article:not(.prose):hover,
  .ds-scope[data-style-id="mixed-media"] .feature-card:hover,
  .ds-scope[data-style-id="mixed-media"] .pricing-card:hover,
  .ds-scope[data-style-id="mixed-media"] .tier:hover,
  [data-style="mixed-media"] .card:hover,
  [data-style="mixed-media"] article:not(.prose):hover,
  [data-style="mixed-media"] .feature-card:hover,
  [data-style="mixed-media"] .pricing-card:hover,
  [data-style="mixed-media"] .tier:hover {
    border-color: var(--mm-text) !important;
    box-shadow: 0 12px 30px rgba(26, 25, 24, 0.08), 4px 4px 0px rgba(230, 57, 38, 0.25) !important;
    transform: translateY(-2px) !important;
  }

  /* Grid Layouts */
  .lab-styled-preview[data-style="mixed-media"] .grid,
  .lab-styled-preview[data-style="mixed-media"] .stat-grid,
  .lab-styled-preview[data-style="mixed-media"] .pricing-grid,
  .lab-styled-preview[data-style="mixed-media"] .product-grid,
  .lab-styled-preview[data-style="mixed-media"] section > div:not(.hero),
  .mixed-media-styled-container .grid,
  .mixed-media-styled-container .stat-grid,
  .mixed-media-styled-container .pricing-grid,
  .mixed-media-styled-container .product-grid,
  .mixed-media-styled-container section > div:not(.hero),
  .style-mixed-media .grid,
  .style-mixed-media .stat-grid,
  .style-mixed-media .pricing-grid,
  .style-mixed-media .product-grid,
  .style-mixed-media section > div:not(.hero),
  .ds-scope[data-style-id="mixed-media"] .grid,
  .ds-scope[data-style-id="mixed-media"] .stat-grid,
  .ds-scope[data-style-id="mixed-media"] .pricing-grid,
  .ds-scope[data-style-id="mixed-media"] .product-grid,
  .ds-scope[data-style-id="mixed-media"] section > div:not(.hero),
  [data-style="mixed-media"] .grid,
  [data-style="mixed-media"] .stat-grid,
  [data-style="mixed-media"] .pricing-grid,
  [data-style="mixed-media"] .product-grid,
  [data-style="mixed-media"] section > div:not(.hero) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
  }

  /* Card Action Button Full-Width */
  .lab-styled-preview[data-style="mixed-media"] .card button,
  .mixed-media-styled-container .card button,
  .style-mixed-media .card button,
  .ds-scope[data-style-id="mixed-media"] .card button,
  [data-style="mixed-media"] .card button {
    margin-top: 1.25rem !important;
    width: 100% !important;
  }

  /* --------------------------------------------------------------------------
     7. BUTTONS & INTERACTIVE CONTROLS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="mixed-media"] button,
  .lab-styled-preview[data-style="mixed-media"] .btn,
  .lab-styled-preview[data-style="mixed-media"] a.btn,
  .lab-styled-preview[data-style="mixed-media"] input[type="submit"],
  .lab-styled-preview[data-style="mixed-media"] input[type="button"],
  .mixed-media-styled-container button,
  .mixed-media-styled-container .btn,
  .mixed-media-styled-container a.btn,
  .mixed-media-styled-container input[type="submit"],
  .mixed-media-styled-container input[type="button"],
  .style-mixed-media button,
  .style-mixed-media .btn,
  .style-mixed-media a.btn,
  .style-mixed-media input[type="submit"],
  .style-mixed-media input[type="button"],
  .ds-scope[data-style-id="mixed-media"] button,
  .ds-scope[data-style-id="mixed-media"] .btn,
  .ds-scope[data-style-id="mixed-media"] a.btn,
  .ds-scope[data-style-id="mixed-media"] input[type="submit"],
  .ds-scope[data-style-id="mixed-media"] input[type="button"],
  [data-style="mixed-media"] button,
  [data-style="mixed-media"] .btn,
  [data-style="mixed-media"] a.btn,
  [data-style="mixed-media"] input[type="submit"],
  [data-style="mixed-media"] input[type="button"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0.75rem 2rem !important;
    font-family: var(--mm-font-mono) !important;
    font-size: 0.8125rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    border-radius: 1px !important;
    border: 1px solid var(--mm-text) !important;
    background: var(--mm-text) !important;
    color: #ffffff !important;
    box-shadow: 3px 3px 0px rgba(230, 57, 38, 0.5) !important;
    cursor: pointer !important;
    text-decoration: none !important;
    transition: all 180ms cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  .lab-styled-preview[data-style="mixed-media"] button:hover,
  .lab-styled-preview[data-style="mixed-media"] .btn:hover,
  .lab-styled-preview[data-style="mixed-media"] a.btn:hover,
  .lab-styled-preview[data-style="mixed-media"] input[type="submit"]:hover,
  .mixed-media-styled-container button:hover,
  .mixed-media-styled-container .btn:hover,
  .mixed-media-styled-container a.btn:hover,
  .mixed-media-styled-container input[type="submit"]:hover,
  .style-mixed-media button:hover,
  .style-mixed-media .btn:hover,
  .style-mixed-media a.btn:hover,
  .style-mixed-media input[type="submit"]:hover,
  .ds-scope[data-style-id="mixed-media"] button:hover,
  .ds-scope[data-style-id="mixed-media"] .btn:hover,
  .ds-scope[data-style-id="mixed-media"] a.btn:hover,
  .ds-scope[data-style-id="mixed-media"] input[type="submit"]:hover,
  [data-style="mixed-media"] button:hover,
  [data-style="mixed-media"] .btn:hover,
  [data-style="mixed-media"] a.btn:hover,
  [data-style="mixed-media"] input[type="submit"]:hover {
    background: var(--mm-vermilion) !important;
    border-color: var(--mm-vermilion) !important;
    color: #ffffff !important;
    box-shadow: 4px 4px 0px var(--mm-text) !important;
    transform: translateY(-1px) !important;
  }

  .lab-styled-preview[data-style="mixed-media"] button:active,
  .mixed-media-styled-container button:active,
  .style-mixed-media button:active,
  .ds-scope[data-style-id="mixed-media"] button:active,
  [data-style="mixed-media"] button:active {
    transform: translate(1px, 1px) !important;
    box-shadow: 1px 1px 0px var(--mm-text) !important;
  }

  /* Keyboard Focus Accessibility */
  .lab-styled-preview[data-style="mixed-media"] button:focus-visible,
  .lab-styled-preview[data-style="mixed-media"] a:focus-visible,
  .lab-styled-preview[data-style="mixed-media"] input:focus-visible,
  .mixed-media-styled-container button:focus-visible,
  .mixed-media-styled-container a:focus-visible,
  .mixed-media-styled-container input:focus-visible,
  .style-mixed-media button:focus-visible,
  .style-mixed-media a:focus-visible,
  .style-mixed-media input:focus-visible,
  .ds-scope[data-style-id="mixed-media"] button:focus-visible,
  .ds-scope[data-style-id="mixed-media"] a:focus-visible,
  .ds-scope[data-style-id="mixed-media"] input:focus-visible,
  [data-style="mixed-media"] button:focus-visible,
  [data-style="mixed-media"] a:focus-visible,
  [data-style="mixed-media"] input:focus-visible {
    outline: none !important;
    box-shadow: 0 0 0 2px var(--mm-bg), 0 0 0 4px var(--mm-vermilion) !important;
  }

  /* Disabled State */
  .lab-styled-preview[data-style="mixed-media"] button:disabled,
  .lab-styled-preview[data-style="mixed-media"] input:disabled,
  .mixed-media-styled-container button:disabled,
  .mixed-media-styled-container input:disabled,
  .style-mixed-media button:disabled,
  .style-mixed-media input:disabled,
  .ds-scope[data-style-id="mixed-media"] button:disabled,
  .ds-scope[data-style-id="mixed-media"] input:disabled,
  [data-style="mixed-media"] button:disabled,
  [data-style="mixed-media"] input:disabled {
    opacity: 0.45 !important;
    cursor: not-allowed !important;
    filter: grayscale(0.8) !important;
    box-shadow: none !important;
  }

  /* --------------------------------------------------------------------------
     8. FORMS, INPUTS & CONTROLS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="mixed-media"] input[type="text"],
  .lab-styled-preview[data-style="mixed-media"] input[type="email"],
  .lab-styled-preview[data-style="mixed-media"] input[type="password"],
  .lab-styled-preview[data-style="mixed-media"] input[type="tel"],
  .lab-styled-preview[data-style="mixed-media"] input[type="search"],
  .lab-styled-preview[data-style="mixed-media"] textarea,
  .lab-styled-preview[data-style="mixed-media"] select,
  .mixed-media-styled-container input[type="text"],
  .mixed-media-styled-container input[type="email"],
  .mixed-media-styled-container input[type="password"],
  .mixed-media-styled-container input[type="tel"],
  .mixed-media-styled-container input[type="search"],
  .mixed-media-styled-container textarea,
  .mixed-media-styled-container select,
  .style-mixed-media input[type="text"],
  .style-mixed-media input[type="email"],
  .style-mixed-media input[type="password"],
  .style-mixed-media input[type="tel"],
  .style-mixed-media input[type="search"],
  .style-mixed-media textarea,
  .style-mixed-media select,
  .ds-scope[data-style-id="mixed-media"] input[type="text"],
  .ds-scope[data-style-id="mixed-media"] input[type="email"],
  .ds-scope[data-style-id="mixed-media"] input[type="password"],
  .ds-scope[data-style-id="mixed-media"] input[type="tel"],
  .ds-scope[data-style-id="mixed-media"] input[type="search"],
  .ds-scope[data-style-id="mixed-media"] textarea,
  .ds-scope[data-style-id="mixed-media"] select,
  [data-style="mixed-media"] input[type="text"],
  [data-style="mixed-media"] input[type="email"],
  [data-style="mixed-media"] input[type="password"],
  [data-style="mixed-media"] input[type="tel"],
  [data-style="mixed-media"] input[type="search"],
  [data-style="mixed-media"] textarea,
  [data-style="mixed-media"] select {
    width: 100% !important;
    padding: 0.8rem 1rem !important;
    font-family: var(--mm-font-body) !important;
    font-size: 0.9375rem !important;
    border-radius: 1px !important;
    border: 1px solid var(--mm-border) !important;
    background: #ffffff !important;
    color: var(--mm-text) !important;
    box-shadow: inset 0 1px 3px rgba(26, 25, 24, 0.04) !important;
    transition: all 180ms ease !important;
    margin-bottom: 1rem !important;
  }

  .lab-styled-preview[data-style="mixed-media"] input:focus,
  .lab-styled-preview[data-style="mixed-media"] textarea:focus,
  .lab-styled-preview[data-style="mixed-media"] select:focus,
  .mixed-media-styled-container input:focus,
  .mixed-media-styled-container textarea:focus,
  .mixed-media-styled-container select:focus,
  .style-mixed-media input:focus,
  .style-mixed-media textarea:focus,
  .style-mixed-media select:focus,
  .ds-scope[data-style-id="mixed-media"] input:focus,
  .ds-scope[data-style-id="mixed-media"] textarea:focus,
  .ds-scope[data-style-id="mixed-media"] select:focus,
  [data-style="mixed-media"] input:focus,
  [data-style="mixed-media"] textarea:focus,
  [data-style="mixed-media"] select:focus {
    border-color: var(--mm-text) !important;
    box-shadow: 0 0 0 1px var(--mm-text), 3px 3px 0px rgba(230, 57, 38, 0.3) !important;
    outline: none !important;
  }

  .lab-styled-preview[data-style="mixed-media"] label,
  .mixed-media-styled-container label,
  .style-mixed-media label,
  .ds-scope[data-style-id="mixed-media"] label,
  [data-style="mixed-media"] label {
    display: block !important;
    font-family: var(--mm-font-mono) !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase !important;
    color: var(--mm-text) !important;
    margin-bottom: 0.4rem !important;
  }

  /* --------------------------------------------------------------------------
     9. TABLES & ARCHIVAL LEDGERS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="mixed-media"] table,
  .mixed-media-styled-container table,
  .style-mixed-media table,
  .ds-scope[data-style-id="mixed-media"] table,
  [data-style="mixed-media"] table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    border: 1px solid var(--mm-border) !important;
    border-radius: 2px !important;
    overflow: hidden !important;
    margin-bottom: 1.75rem !important;
    background: #ffffff !important;
    box-shadow: 0 2px 8px rgba(26, 25, 24, 0.04) !important;
  }

  .lab-styled-preview[data-style="mixed-media"] th,
  .mixed-media-styled-container th,
  .style-mixed-media th,
  .ds-scope[data-style-id="mixed-media"] th,
  [data-style="mixed-media"] th {
    background: var(--mm-surface-warm) !important;
    color: var(--mm-text) !important;
    font-family: var(--mm-font-mono) !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase !important;
    padding: 0.9rem 1.25rem !important;
    text-align: left !important;
    border-bottom: 2px solid var(--mm-vermilion) !important;
  }

  .lab-styled-preview[data-style="mixed-media"] td,
  .mixed-media-styled-container td,
  .style-mixed-media td,
  .ds-scope[data-style-id="mixed-media"] td,
  [data-style="mixed-media"] td {
    padding: 0.9rem 1.25rem !important;
    border-bottom: 1px solid var(--mm-border) !important;
    color: var(--mm-text-secondary) !important;
    font-size: 0.9375rem !important;
  }

  .lab-styled-preview[data-style="mixed-media"] tr:hover td,
  .mixed-media-styled-container tr:hover td,
  .style-mixed-media tr:hover td,
  .ds-scope[data-style-id="mixed-media"] tr:hover td,
  [data-style="mixed-media"] tr:hover td {
    background: rgba(230, 57, 38, 0.04) !important;
    color: var(--mm-text) !important;
  }

  /* --------------------------------------------------------------------------
     10. SPECIFIC ARCHETYPE ADAPTATIONS
     -------------------------------------------------------------------------- */
  /* Art Direction Curatorial Badges */
  .lab-styled-preview[data-style="mixed-media"] .badge,
  .mixed-media-styled-container .badge,
  .style-mixed-media .badge,
  .ds-scope[data-style-id="mixed-media"] .badge,
  [data-style="mixed-media"] .badge {
    display: inline-block !important;
    padding: 0.25rem 0.75rem !important;
    font-family: var(--mm-font-mono) !important;
    font-size: 0.6875rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    border-radius: 1px !important;
    border: 1px solid var(--mm-text) !important;
    background: var(--mm-surface-warm) !important;
    color: var(--mm-text) !important;
    box-shadow: 2px 2px 0px rgba(230, 57, 38, 0.35) !important;
  }

  /* Featured / Catalogue Pricing Tier */
  .lab-styled-preview[data-style="mixed-media"] .pricing-card.featured,
  .lab-styled-preview[data-style="mixed-media"] .tier.featured,
  .mixed-media-styled-container .pricing-card.featured,
  .mixed-media-styled-container .tier.featured,
  .style-mixed-media .pricing-card.featured,
  .style-mixed-media .tier.featured,
  .ds-scope[data-style-id="mixed-media"] .pricing-card.featured,
  .ds-scope[data-style-id="mixed-media"] .tier.featured,
  [data-style="mixed-media"] .pricing-card.featured,
  [data-style="mixed-media"] .tier.featured {
    border: 2px solid var(--mm-vermilion) !important;
    background: #ffffff !important;
    box-shadow: 0 12px 35px rgba(26, 25, 24, 0.08), 5px 5px 0px var(--mm-text) !important;
    transform: scale(1.02);
  }

  /* Painterly Blockquote with Vermilion Wash & Editorial Serif */
  .lab-styled-preview[data-style="mixed-media"] blockquote,
  .mixed-media-styled-container blockquote,
  .style-mixed-media blockquote,
  .ds-scope[data-style-id="mixed-media"] blockquote,
  [data-style="mixed-media"] blockquote {
    border-left: 3px solid var(--mm-vermilion) !important;
    background: rgba(230, 57, 38, 0.04) !important;
    padding: 1.5rem 2rem !important;
    margin: 2rem 0 !important;
    color: var(--mm-text) !important;
    font-family: var(--mm-font-display) !important;
    font-size: 1.25rem !important;
    font-style: italic !important;
    border-radius: 0 2px 2px 0 !important;
    box-shadow: 0 2px 10px rgba(26, 25, 24, 0.03) !important;
    position: relative;
  }

  /* Drop Capital on Editorial Article First Paragraph */
  .lab-styled-preview[data-style="mixed-media"] article.prose > p:first-of-type::first-letter,
  .lab-styled-preview[data-style="mixed-media"] .prose > p:first-of-type::first-letter,
  .mixed-media-styled-container article.prose > p:first-of-type::first-letter,
  .mixed-media-styled-container .prose > p:first-of-type::first-letter,
  .style-mixed-media article.prose > p:first-of-type::first-letter,
  .style-mixed-media .prose > p:first-of-type::first-letter,
  .ds-scope[data-style-id="mixed-media"] article.prose > p:first-of-type::first-letter,
  .ds-scope[data-style-id="mixed-media"] .prose > p:first-of-type::first-letter,
  [data-style="mixed-media"] article.prose > p:first-of-type::first-letter,
  [data-style="mixed-media"] .prose > p:first-of-type::first-letter {
    float: left !important;
    font-family: var(--mm-font-display) !important;
    font-size: 3.5rem !important;
    line-height: 0.8 !important;
    padding: 0.4rem 0.6rem 0.2rem 0 !important;
    margin-right: 0.5rem !important;
    color: var(--mm-vermilion) !important;
    font-weight: 700 !important;
  }

  /* Dashboard LED / Metric Status Mark */
  .lab-styled-preview[data-style="mixed-media"] .led,
  .lab-styled-preview[data-style="mixed-media"] .status-dot,
  .mixed-media-styled-container .led,
  .mixed-media-styled-container .status-dot,
  .style-mixed-media .led,
  .style-mixed-media .status-dot,
  .ds-scope[data-style-id="mixed-media"] .led,
  .ds-scope[data-style-id="mixed-media"] .status-dot,
  [data-style="mixed-media"] .led,
  [data-style="mixed-media"] .status-dot {
    display: inline-block !important;
    width: 8px !important;
    height: 8px !important;
    border-radius: 1px !important;
    background: var(--mm-vermilion) !important;
    box-shadow: 2px 2px 0px var(--mm-text) !important;
  }

  /* E-Commerce Editorial Price Tags */
  .lab-styled-preview[data-style="mixed-media"] .price,
  .mixed-media-styled-container .price,
  .style-mixed-media .price,
  .ds-scope[data-style-id="mixed-media"] .price,
  [data-style="mixed-media"] .price {
    font-family: var(--mm-font-display) !important;
    font-weight: 700 !important;
    color: var(--mm-vermilion) !important;
    font-size: 1.4rem !important;
    letter-spacing: -0.01em !important;
  }

  /* Restaurant Editorial Tasting Menu Item */
  .lab-styled-preview[data-style="mixed-media"] .menu-item,
  .mixed-media-styled-container .menu-item,
  .style-mixed-media .menu-item,
  .ds-scope[data-style-id="mixed-media"] .menu-item,
  [data-style="mixed-media"] .menu-item {
    border-bottom: 1px dotted var(--mm-border) !important;
    padding-bottom: 0.85rem !important;
    margin-bottom: 1.25rem !important;
  }

  /* Footer Styling */
  .lab-styled-preview[data-style="mixed-media"] footer,
  .mixed-media-styled-container footer,
  .style-mixed-media footer,
  .ds-scope[data-style-id="mixed-media"] footer,
  [data-style="mixed-media"] footer {
    border-top: 1px solid var(--mm-border) !important;
    padding-top: 2rem !important;
    margin-top: 3.5rem !important;
    font-family: var(--mm-font-mono) !important;
    font-size: 0.8125rem !important;
    color: var(--mm-text-muted) !important;
    text-align: center;
  }

  /* --------------------------------------------------------------------------
     11. PREFERS-REDUCED-MOTION
     -------------------------------------------------------------------------- */
  @media (prefers-reduced-motion: reduce) {
    .lab-styled-preview[data-style="mixed-media"] *,
    .mixed-media-styled-container *,
    .style-mixed-media *,
    .ds-scope[data-style-id="mixed-media"] *,
    [data-style="mixed-media"] * {
      animation: none !important;
      transition: none !important;
      transform: none !important;
    }
  }
`;
