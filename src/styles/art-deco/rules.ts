/**
 * Art Deco Design Language — 1920s–1930s Luxury Architecture & Geometric Ornament Stylesheet
 * 
 * Inspired by 1920s–1930s luxury architecture, geometric symmetry, sunburst motifs,
 * stepped forms, and gleaming metallic gold ornament.
 * 
 * Distinct from Victorian: Not 19th-century organic botanical engraving or aged parchment paper,
 * but sharp geometric symmetry, stepped ziggurat forms, and gleaming gold on obsidian lacquer.
 * Distinct from Gothic: Not medieval pointed lancet stone arches or illuminated manuscripts,
 * but jazz-age modernism, chevron rules, and polished onyx luxury.
 * Distinct from Luxury Typography: Not Didone minimalism with quiet white space,
 * but opulent geometric ornament, sunburst backdrops, and metallic framing.
 * Distinct from Neo-classical: Not Greco-Roman marble serenity,
 * but roaring twenties dramatic verticality and jazz-age grandeur.
 * 
 * Preserves the user's source HTML with zero DOM mutations.
 */

export const artDecoSemanticCss = `
  /* ==========================================================================
     ART DECO DESIGN LANGUAGE — JAZZ-AGE GEOMETRY & METALLIC ORNAMENT
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Cinzel:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

  /* --------------------------------------------------------------------------
     1. FOUNDATION & SCOPED VARIABLES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="art-deco"],
  .art-deco-styled-container,
  .style-art-deco,
  .ds-scope[data-style-id="art-deco"],
  [data-style="art-deco"] {
    /* Obsidian & Metallic Gold Palette */
    --ad-bg: #0e0e11;                    /* Deep obsidian black lacquer */
    --ad-surface: #16161b;               /* Polished onyx slab */
    --ad-surface-subtle: #1e1e24;        /* Stepped architectural panel */
    --ad-surface-card: linear-gradient(180deg, #18181f 0%, #111115 100%);
    --ad-text: #fbf8f0;                  /* Warm champagne ivory */
    --ad-text-secondary: #d8d2c4;        /* Pale champagne gold */
    --ad-text-muted: #8c867a;            /* Antique brass dust */

    /* Metallic & Gemstone Accents */
    --ad-gold: #d4af37;                  /* Metallic antique gold */
    --ad-gold-hover: #e8c85a;            /* Luminous polished gold */
    --ad-gold-glow: rgba(212, 175, 55, 0.4);
    --ad-emerald: #0f382a;               /* Imperial emerald */
    --ad-emerald-card: linear-gradient(180deg, #16382a 0%, #0d2119 100%);
    --ad-midnight: #0f1d33;              /* Midnight blue */
    --ad-burgundy: #581825;              /* Chrysler burgundy */
    --ad-border: #2e2a22;                /* Onyx mortar hairline */
    --ad-border-gold: rgba(212, 175, 55, 0.35);

    /* Typographic Hierarchy */
    --ad-font-display: 'Playfair Display', 'Cinzel', Georgia, serif;
    --ad-font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --ad-font-mono: 'Space Grotesk', 'JetBrains Mono', monospace;

    /* Base Canvas Styling */
    background-color: var(--ad-bg) !important;
    color: var(--ad-text-secondary) !important;
    font-family: var(--ad-font-body) !important;
    font-size: 1rem !important;
    line-height: 1.65 !important;
    box-sizing: border-box !important;
    position: relative;
    min-height: 100%;
    padding: 3.5rem 2.25rem;

    /* Symmetrical sunburst rays and geometric grid lacquer */
    background-image:
      radial-gradient(ellipse 90% 50% at 50% 0%, rgba(212, 175, 55, 0.12) 0%, transparent 65%),
      linear-gradient(to right, rgba(212, 175, 55, 0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(212, 175, 55, 0.02) 1px, transparent 1px) !important;
    background-size: 100% 100%, 64px 64px, 64px 64px !important;

    /* Stepped architectural top rule */
    border: 1px solid var(--ad-border) !important;
    border-top: 3px double var(--ad-gold) !important;
    box-shadow: 0 0 25px rgba(212, 175, 55, 0.2), 0 10px 40px rgba(0, 0, 0, 0.9) !important;
  }

  /* --------------------------------------------------------------------------
     2. GLOBAL RESETS & SCOPED ELEMENT STYLING
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="art-deco"] *,
  .art-deco-styled-container *,
  .style-art-deco *,
  .ds-scope[data-style-id="art-deco"] *,
  [data-style="art-deco"] * {
    box-sizing: border-box;
  }

  /* --------------------------------------------------------------------------
     3. TYPOGRAPHY & HEADING HIERARCHY
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="art-deco"] h1,
  .lab-styled-preview[data-style="art-deco"] h2,
  .lab-styled-preview[data-style="art-deco"] h3,
  .lab-styled-preview[data-style="art-deco"] h4,
  .lab-styled-preview[data-style="art-deco"] h5,
  .lab-styled-preview[data-style="art-deco"] h6,
  .art-deco-styled-container h1,
  .art-deco-styled-container h2,
  .art-deco-styled-container h3,
  .art-deco-styled-container h4,
  .art-deco-styled-container h5,
  .art-deco-styled-container h6,
  .style-art-deco h1,
  .style-art-deco h2,
  .style-art-deco h3,
  .style-art-deco h4,
  .style-art-deco h5,
  .style-art-deco h6,
  .ds-scope[data-style-id="art-deco"] h1,
  .ds-scope[data-style-id="art-deco"] h2,
  .ds-scope[data-style-id="art-deco"] h3,
  .ds-scope[data-style-id="art-deco"] h4,
  .ds-scope[data-style-id="art-deco"] h5,
  .ds-scope[data-style-id="art-deco"] h6,
  [data-style="art-deco"] h1,
  [data-style="art-deco"] h2,
  [data-style="art-deco"] h3,
  [data-style="art-deco"] h4,
  [data-style="art-deco"] h5,
  [data-style="art-deco"] h6 {
    font-family: var(--ad-font-display) !important;
    text-transform: uppercase !important;
    margin-top: 0;
    line-height: 1.15 !important;
    color: var(--ad-text) !important;
    letter-spacing: 0.14em !important;
    font-weight: 700 !important;
  }

  /* Monumental Art Deco Title H1 */
  .lab-styled-preview[data-style="art-deco"] h1,
  .art-deco-styled-container h1,
  .style-art-deco h1,
  .ds-scope[data-style-id="art-deco"] h1,
  [data-style="art-deco"] h1 {
    font-size: 3rem !important;
    font-weight: 800 !important;
    margin-bottom: 1.5rem !important;
    color: #ffffff !important;
    letter-spacing: 0.16em !important;
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.35), 0 2px 4px rgba(0, 0, 0, 0.9) !important;
    position: relative;
    display: inline-block;
  }

  /* Symmetrical Chevron / Sunburst Divider */
  .lab-styled-preview[data-style="art-deco"] h1::after,
  .art-deco-styled-container h1::after,
  .style-art-deco h1::after,
  .ds-scope[data-style-id="art-deco"] h1::after,
  [data-style="art-deco"] h1::after {
    content: '❖ ━━━ ◆ ━━━ ❖';
    display: block;
    font-size: 0.85rem;
    color: var(--ad-gold);
    letter-spacing: 0.25em;
    margin-top: 0.75rem;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }

  /* Symmetrical Section Title H2 */
  .lab-styled-preview[data-style="art-deco"] h2,
  .art-deco-styled-container h2,
  .style-art-deco h2,
  .ds-scope[data-style-id="art-deco"] h2,
  [data-style="art-deco"] h2 {
    font-size: 1.95rem !important;
    font-weight: 700 !important;
    margin-top: 2.25rem !important;
    margin-bottom: 1rem !important;
    color: #fbf8f0 !important;
    letter-spacing: 0.14em !important;
    border-bottom: 1px solid var(--ad-border) !important;
    padding-bottom: 0.65rem !important;
    position: relative;
  }

  .lab-styled-preview[data-style="art-deco"] h2::before,
  .art-deco-styled-container h2::before,
  .style-art-deco h2::before,
  .ds-scope[data-style-id="art-deco"] h2::before,
  [data-style="art-deco"] h2::before {
    content: '◈ ';
    color: var(--ad-gold);
    font-size: 1rem;
    margin-right: 0.35rem;
  }

  /* Subsection Titles H3 */
  .lab-styled-preview[data-style="art-deco"] h3,
  .art-deco-styled-container h3,
  .style-art-deco h3,
  .ds-scope[data-style-id="art-deco"] h3,
  [data-style="art-deco"] h3 {
    font-size: 1.3rem !important;
    font-weight: 700 !important;
    margin-bottom: 0.75rem !important;
    color: var(--ad-gold) !important;
    letter-spacing: 0.12em !important;
  }

  .lab-styled-preview[data-style="art-deco"] h4,
  .art-deco-styled-container h4,
  .style-art-deco h4,
  .ds-scope[data-style-id="art-deco"] h4,
  [data-style="art-deco"] h4 {
    font-size: 1.05rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.1em !important;
    color: #fbf8f0 !important;
  }

  /* Body Paragraphs */
  .lab-styled-preview[data-style="art-deco"] p,
  .art-deco-styled-container p,
  .style-art-deco p,
  .ds-scope[data-style-id="art-deco"] p,
  [data-style="art-deco"] p {
    font-family: var(--ad-font-body) !important;
    color: var(--ad-text-secondary) !important;
    font-size: 1rem !important;
    line-height: 1.65 !important;
    margin-top: 0;
    margin-bottom: 1.25rem;
  }

  .lab-styled-preview[data-style="art-deco"] strong,
  .art-deco-styled-container strong,
  .style-art-deco strong,
  .ds-scope[data-style-id="art-deco"] strong,
  [data-style="art-deco"] strong {
    color: #ffffff !important;
    font-weight: 600 !important;
  }

  /* Unordered and Ordered Lists with Geometric Gold Accents */
  .lab-styled-preview[data-style="art-deco"] ul,
  .art-deco-styled-container ul,
  .style-art-deco ul,
  .ds-scope[data-style-id="art-deco"] ul,
  [data-style="art-deco"] ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="art-deco"] ul li,
  .art-deco-styled-container ul li,
  .style-art-deco ul li,
  .ds-scope[data-style-id="art-deco"] ul li,
  [data-style="art-deco"] ul li {
    position: relative !important;
    padding-left: 1.5rem !important;
    margin-bottom: 0.65rem !important;
    color: var(--ad-text-secondary) !important;
  }

  .lab-styled-preview[data-style="art-deco"] ul li::before,
  .art-deco-styled-container ul li::before,
  .style-art-deco ul li::before,
  .ds-scope[data-style-id="art-deco"] ul li::before,
  [data-style="art-deco"] ul li::before {
    content: '◆' !important;
    position: absolute !important;
    left: 0 !important;
    top: 0.15rem !important;
    font-size: 0.625rem !important;
    color: var(--ad-gold) !important;
    text-shadow: 0 0 6px rgba(212, 175, 55, 0.5) !important;
  }

  /* Eyebrows / Architectural Markers */
  .lab-styled-preview[data-style="art-deco"] .tag,
  .lab-styled-preview[data-style="art-deco"] header > p:first-child,
  .lab-styled-preview[data-style="art-deco"] .eyebrow,
  .art-deco-styled-container .tag,
  .art-deco-styled-container header > p:first-child,
  .art-deco-styled-container .eyebrow,
  .style-art-deco .tag,
  .style-art-deco header > p:first-child,
  .style-art-deco .eyebrow,
  .ds-scope[data-style-id="art-deco"] .tag,
  .ds-scope[data-style-id="art-deco"] header > p:first-child,
  .ds-scope[data-style-id="art-deco"] .eyebrow,
  [data-style="art-deco"] .tag,
  [data-style="art-deco"] header > p:first-child,
  [data-style="art-deco"] .eyebrow {
    font-family: var(--ad-font-display) !important;
    color: var(--ad-gold) !important;
    letter-spacing: 0.22em !important;
    text-transform: uppercase !important;
    font-size: 0.8125rem !important;
    font-weight: 700 !important;
  }

  /* --------------------------------------------------------------------------
     4. NAVIGATION & HEADER SYSTEM
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="art-deco"] nav,
  .lab-styled-preview[data-style="art-deco"] header:not(.hero),
  .art-deco-styled-container nav,
  .art-deco-styled-container header:not(.hero),
  .style-art-deco nav,
  .style-art-deco header:not(.hero),
  .ds-scope[data-style-id="art-deco"] nav,
  .ds-scope[data-style-id="art-deco"] header:not(.hero),
  [data-style="art-deco"] nav,
  [data-style="art-deco"] header:not(.hero) {
    background: rgba(22, 22, 27, 0.95) !important;
    border: 1px solid var(--ad-border) !important;
    border-bottom: 2px solid var(--ad-gold) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.15) !important;
    padding: 1rem 1.75rem !important;
    border-radius: 0px !important;
    margin-bottom: 2.5rem !important;
  }

  .lab-styled-preview[data-style="art-deco"] nav ul,
  .art-deco-styled-container nav ul,
  .style-art-deco nav ul,
  .ds-scope[data-style-id="art-deco"] nav ul,
  [data-style="art-deco"] nav ul {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 1.75rem !important;
    align-items: center !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .lab-styled-preview[data-style="art-deco"] nav a,
  .art-deco-styled-container nav a,
  .style-art-deco nav a,
  .ds-scope[data-style-id="art-deco"] nav a,
  [data-style="art-deco"] nav a {
    font-family: var(--ad-font-display) !important;
    font-size: 0.8125rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase !important;
    color: var(--ad-text-secondary) !important;
    text-decoration: none !important;
    transition: all 180ms ease !important;
    padding: 0.25rem 0.4rem;
  }

  .lab-styled-preview[data-style="art-deco"] nav a:hover,
  .art-deco-styled-container nav a:hover,
  .style-art-deco nav a:hover,
  .ds-scope[data-style-id="art-deco"] nav a:hover,
  [data-style="art-deco"] nav a:hover {
    color: var(--ad-gold) !important;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.6) !important;
  }

  /* --------------------------------------------------------------------------
     5. HERO / JAZZ-AGE PAVILION INTRO
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="art-deco"] header.hero,
  .lab-styled-preview[data-style="art-deco"] .hero,
  .art-deco-styled-container header.hero,
  .art-deco-styled-container .hero,
  .style-art-deco header.hero,
  .style-art-deco .hero,
  .ds-scope[data-style-id="art-deco"] header.hero,
  .ds-scope[data-style-id="art-deco"] .hero,
  [data-style="art-deco"] header.hero,
  [data-style="art-deco"] .hero {
    position: relative;
    padding: 4rem 2.5rem !important;
    margin-bottom: 3.5rem !important;
    border-radius: 0px !important;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212, 175, 55, 0.2) 0%, rgba(22, 22, 27, 0.95) 70%, rgba(14, 14, 17, 0.98) 100%) !important;
    border: 1px solid var(--ad-border) !important;
    border-top: 3px double var(--ad-gold) !important;
    border-bottom: 1px solid var(--ad-gold) !important;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(212, 175, 55, 0.3) !important;
    overflow: hidden;
  }

  /* --------------------------------------------------------------------------
     6. CARDS, SECTIONS & CONTAINER MODULES
     -------------------------------------------------------------------------- */
  /* Un-cardify plain text paragraphs in articles and sections */
  .lab-styled-preview[data-style="art-deco"] article > p,
  .lab-styled-preview[data-style="art-deco"] section > p,
  .lab-styled-preview[data-style="art-deco"] main > p,
  .art-deco-styled-container article > p,
  .art-deco-styled-container section > p,
  .art-deco-styled-container main > p,
  .style-art-deco article > p,
  .style-art-deco section > p,
  .style-art-deco main > p,
  .ds-scope[data-style-id="art-deco"] article > p,
  .ds-scope[data-style-id="art-deco"] section > p,
  .ds-scope[data-style-id="art-deco"] main > p,
  [data-style="art-deco"] article > p,
  [data-style="art-deco"] section > p,
  [data-style="art-deco"] main > p {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  /* Stepped Onyx Cards */
  .lab-styled-preview[data-style="art-deco"] .card,
  .lab-styled-preview[data-style="art-deco"] article:not(.prose),
  .lab-styled-preview[data-style="art-deco"] .feature-card,
  .lab-styled-preview[data-style="art-deco"] .pricing-card,
  .lab-styled-preview[data-style="art-deco"] .tier,
  .art-deco-styled-container .card,
  .art-deco-styled-container article:not(.prose),
  .art-deco-styled-container .feature-card,
  .art-deco-styled-container .pricing-card,
  .art-deco-styled-container .tier,
  .style-art-deco .card,
  .style-art-deco article:not(.prose),
  .style-art-deco .feature-card,
  .style-art-deco .pricing-card,
  .style-art-deco .tier,
  .ds-scope[data-style-id="art-deco"] .card,
  .ds-scope[data-style-id="art-deco"] article:not(.prose),
  .ds-scope[data-style-id="art-deco"] .feature-card,
  .ds-scope[data-style-id="art-deco"] .pricing-card,
  .ds-scope[data-style-id="art-deco"] .tier,
  [data-style="art-deco"] .card,
  [data-style="art-deco"] article:not(.prose),
  [data-style="art-deco"] .feature-card,
  [data-style="art-deco"] .pricing-card,
  [data-style="art-deco"] .tier {
    background: var(--ad-surface-card) !important;
    border: 1px solid var(--ad-border) !important;
    border-top: 1px solid rgba(212, 175, 55, 0.35) !important;
    border-radius: 0px !important;
    padding: 2.5rem 2.25rem !important;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(212, 175, 55, 0.1) !important;
    transition: all 220ms ease !important;
    position: relative;
  }

  /* Geometric corner diamond */
  .lab-styled-preview[data-style="art-deco"] article:not(.prose)::before,
  .lab-styled-preview[data-style="art-deco"] .card::before,
  .art-deco-styled-container article:not(.prose)::before,
  .art-deco-styled-container .card::before,
  .style-art-deco article:not(.prose)::before,
  .style-art-deco .card::before,
  .ds-scope[data-style-id="art-deco"] article:not(.prose)::before,
  .ds-scope[data-style-id="art-deco"] .card::before,
  [data-style="art-deco"] article:not(.prose)::before,
  [data-style="art-deco"] .card::before {
    content: '◆';
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 0.65rem;
    color: var(--ad-gold);
    opacity: 0.7;
  }

  .lab-styled-preview[data-style="art-deco"] .card:hover,
  .lab-styled-preview[data-style="art-deco"] article:not(.prose):hover,
  .lab-styled-preview[data-style="art-deco"] .feature-card:hover,
  .lab-styled-preview[data-style="art-deco"] .pricing-card:hover,
  .lab-styled-preview[data-style="art-deco"] .tier:hover,
  .art-deco-styled-container .card:hover,
  .art-deco-styled-container article:not(.prose):hover,
  .art-deco-styled-container .feature-card:hover,
  .art-deco-styled-container .pricing-card:hover,
  .art-deco-styled-container .tier:hover,
  .style-art-deco .card:hover,
  .style-art-deco article:not(.prose):hover,
  .style-art-deco .feature-card:hover,
  .style-art-deco .pricing-card:hover,
  .style-art-deco .tier:hover,
  .ds-scope[data-style-id="art-deco"] .card:hover,
  .ds-scope[data-style-id="art-deco"] article:not(.prose):hover,
  .ds-scope[data-style-id="art-deco"] .feature-card:hover,
  .ds-scope[data-style-id="art-deco"] .pricing-card:hover,
  .ds-scope[data-style-id="art-deco"] .tier:hover,
  [data-style="art-deco"] .card:hover,
  [data-style="art-deco"] article:not(.prose):hover,
  [data-style="art-deco"] .feature-card:hover,
  [data-style="art-deco"] .pricing-card:hover,
  [data-style="art-deco"] .tier:hover {
    border-color: var(--ad-gold) !important;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.3) !important;
    transform: translateY(-2px) !important;
  }

  /* Grid Layouts */
  .lab-styled-preview[data-style="art-deco"] .grid,
  .lab-styled-preview[data-style="art-deco"] .stat-grid,
  .lab-styled-preview[data-style="art-deco"] .pricing-grid,
  .lab-styled-preview[data-style="art-deco"] .product-grid,
  .lab-styled-preview[data-style="art-deco"] section > div:not(.hero),
  .art-deco-styled-container .grid,
  .art-deco-styled-container .stat-grid,
  .art-deco-styled-container .pricing-grid,
  .art-deco-styled-container .product-grid,
  .art-deco-styled-container section > div:not(.hero),
  .style-art-deco .grid,
  .style-art-deco .stat-grid,
  .style-art-deco .pricing-grid,
  .style-art-deco .product-grid,
  .style-art-deco section > div:not(.hero),
  .ds-scope[data-style-id="art-deco"] .grid,
  .ds-scope[data-style-id="art-deco"] .stat-grid,
  .ds-scope[data-style-id="art-deco"] .pricing-grid,
  .ds-scope[data-style-id="art-deco"] .product-grid,
  .ds-scope[data-style-id="art-deco"] section > div:not(.hero),
  [data-style="art-deco"] .grid,
  [data-style="art-deco"] .stat-grid,
  [data-style="art-deco"] .pricing-grid,
  [data-style="art-deco"] .product-grid,
  [data-style="art-deco"] section > div:not(.hero) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
  }

  /* Card Action Button Full-Width */
  .lab-styled-preview[data-style="art-deco"] .card button,
  .art-deco-styled-container .card button,
  .style-art-deco .card button,
  .ds-scope[data-style-id="art-deco"] .card button,
  [data-style="art-deco"] .card button {
    margin-top: 1.25rem !important;
    width: 100% !important;
  }

  /* --------------------------------------------------------------------------
     7. BUTTONS & INTERACTIVE CONTROLS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="art-deco"] button,
  .lab-styled-preview[data-style="art-deco"] .btn,
  .lab-styled-preview[data-style="art-deco"] a.btn,
  .lab-styled-preview[data-style="art-deco"] input[type="submit"],
  .lab-styled-preview[data-style="art-deco"] input[type="button"],
  .art-deco-styled-container button,
  .art-deco-styled-container .btn,
  .art-deco-styled-container a.btn,
  .art-deco-styled-container input[type="submit"],
  .art-deco-styled-container input[type="button"],
  .style-art-deco button,
  .style-art-deco .btn,
  .style-art-deco a.btn,
  .style-art-deco input[type="submit"],
  .style-art-deco input[type="button"],
  .ds-scope[data-style-id="art-deco"] button,
  .ds-scope[data-style-id="art-deco"] .btn,
  .ds-scope[data-style-id="art-deco"] a.btn,
  .ds-scope[data-style-id="art-deco"] input[type="submit"],
  .ds-scope[data-style-id="art-deco"] input[type="button"],
  [data-style="art-deco"] button,
  [data-style="art-deco"] .btn,
  [data-style="art-deco"] a.btn,
  [data-style="art-deco"] input[type="submit"],
  [data-style="art-deco"] input[type="button"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0.85rem 2.25rem !important;
    font-family: var(--ad-font-display) !important;
    font-size: 0.8125rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase !important;
    border-radius: 0px !important;
    border: 1px solid var(--ad-gold) !important;
    background: linear-gradient(180deg, #1c1a16 0%, #100f0d 100%) !important;
    color: #fbf8f0 !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(212, 175, 55, 0.5) !important;
    cursor: pointer !important;
    text-decoration: none !important;
    transition: all 200ms ease !important;
  }

  .lab-styled-preview[data-style="art-deco"] button:hover,
  .lab-styled-preview[data-style="art-deco"] .btn:hover,
  .lab-styled-preview[data-style="art-deco"] a.btn:hover,
  .lab-styled-preview[data-style="art-deco"] input[type="submit"]:hover,
  .art-deco-styled-container button:hover,
  .art-deco-styled-container .btn:hover,
  .art-deco-styled-container a.btn:hover,
  .art-deco-styled-container input[type="submit"]:hover,
  .style-art-deco button:hover,
  .style-art-deco .btn:hover,
  .style-art-deco a.btn:hover,
  .style-art-deco input[type="submit"]:hover,
  .ds-scope[data-style-id="art-deco"] button:hover,
  .ds-scope[data-style-id="art-deco"] .btn:hover,
  .ds-scope[data-style-id="art-deco"] a.btn:hover,
  .ds-scope[data-style-id="art-deco"] input[type="submit"]:hover,
  [data-style="art-deco"] button:hover,
  [data-style="art-deco"] .btn:hover,
  [data-style="art-deco"] a.btn:hover,
  [data-style="art-deco"] input[type="submit"]:hover {
    background: linear-gradient(180deg, #d4af37 0%, #b8972e 100%) !important;
    border-color: var(--ad-gold-hover) !important;
    color: #0e0e11 !important;
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.5), 0 4px 15px rgba(0, 0, 0, 0.8) !important;
    transform: translateY(-1px) !important;
  }

  .lab-styled-preview[data-style="art-deco"] button:active,
  .art-deco-styled-container button:active,
  .style-art-deco button:active,
  .ds-scope[data-style-id="art-deco"] button:active,
  [data-style="art-deco"] button:active {
    transform: translateY(1px) !important;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.9) !important;
  }

  /* Keyboard Focus Accessibility */
  .lab-styled-preview[data-style="art-deco"] button:focus-visible,
  .lab-styled-preview[data-style="art-deco"] a:focus-visible,
  .lab-styled-preview[data-style="art-deco"] input:focus-visible,
  .art-deco-styled-container button:focus-visible,
  .art-deco-styled-container a:focus-visible,
  .art-deco-styled-container input:focus-visible,
  .style-art-deco button:focus-visible,
  .style-art-deco a:focus-visible,
  .style-art-deco input:focus-visible,
  .ds-scope[data-style-id="art-deco"] button:focus-visible,
  .ds-scope[data-style-id="art-deco"] a:focus-visible,
  .ds-scope[data-style-id="art-deco"] input:focus-visible,
  [data-style="art-deco"] button:focus-visible,
  [data-style="art-deco"] a:focus-visible,
  [data-style="art-deco"] input:focus-visible {
    outline: none !important;
    box-shadow: 0 0 0 2px var(--ad-bg), 0 0 0 4px var(--ad-gold), 0 0 20px rgba(212, 175, 55, 0.6) !important;
  }

  /* Disabled State */
  .lab-styled-preview[data-style="art-deco"] button:disabled,
  .lab-styled-preview[data-style="art-deco"] input:disabled,
  .art-deco-styled-container button:disabled,
  .art-deco-styled-container input:disabled,
  .style-art-deco button:disabled,
  .style-art-deco input:disabled,
  .ds-scope[data-style-id="art-deco"] button:disabled,
  .ds-scope[data-style-id="art-deco"] input:disabled,
  [data-style="art-deco"] button:disabled,
  [data-style="art-deco"] input:disabled {
    opacity: 0.45 !important;
    cursor: not-allowed !important;
    filter: grayscale(0.8) !important;
    box-shadow: none !important;
  }

  /* --------------------------------------------------------------------------
     8. FORMS, INPUTS & CONTROLS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="art-deco"] input[type="text"],
  .lab-styled-preview[data-style="art-deco"] input[type="email"],
  .lab-styled-preview[data-style="art-deco"] input[type="password"],
  .lab-styled-preview[data-style="art-deco"] input[type="tel"],
  .lab-styled-preview[data-style="art-deco"] input[type="search"],
  .lab-styled-preview[data-style="art-deco"] textarea,
  .lab-styled-preview[data-style="art-deco"] select,
  .art-deco-styled-container input[type="text"],
  .art-deco-styled-container input[type="email"],
  .art-deco-styled-container input[type="password"],
  .art-deco-styled-container input[type="tel"],
  .art-deco-styled-container input[type="search"],
  .art-deco-styled-container textarea,
  .art-deco-styled-container select,
  .style-art-deco input[type="text"],
  .style-art-deco input[type="email"],
  .style-art-deco input[type="password"],
  .style-art-deco input[type="tel"],
  .style-art-deco input[type="search"],
  .style-art-deco textarea,
  .style-art-deco select,
  .ds-scope[data-style-id="art-deco"] input[type="text"],
  .ds-scope[data-style-id="art-deco"] input[type="email"],
  .ds-scope[data-style-id="art-deco"] input[type="password"],
  .ds-scope[data-style-id="art-deco"] input[type="tel"],
  .ds-scope[data-style-id="art-deco"] input[type="search"],
  .ds-scope[data-style-id="art-deco"] textarea,
  .ds-scope[data-style-id="art-deco"] select,
  [data-style="art-deco"] input[type="text"],
  [data-style="art-deco"] input[type="email"],
  [data-style="art-deco"] input[type="password"],
  [data-style="art-deco"] input[type="tel"],
  [data-style="art-deco"] input[type="search"],
  [data-style="art-deco"] textarea,
  [data-style="art-deco"] select {
    width: 100% !important;
    padding: 0.8rem 1rem !important;
    font-family: var(--ad-font-body) !important;
    font-size: 0.9375rem !important;
    border-radius: 0px !important;
    border: 1px solid var(--ad-border) !important;
    background: #121216 !important;
    color: var(--ad-text) !important;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.7) !important;
    transition: all 180ms ease !important;
    margin-bottom: 1rem !important;
  }

  .lab-styled-preview[data-style="art-deco"] input:focus,
  .lab-styled-preview[data-style="art-deco"] textarea:focus,
  .lab-styled-preview[data-style="art-deco"] select:focus,
  .art-deco-styled-container input:focus,
  .art-deco-styled-container textarea:focus,
  .art-deco-styled-container select:focus,
  .style-art-deco input:focus,
  .style-art-deco textarea:focus,
  .style-art-deco select:focus,
  .ds-scope[data-style-id="art-deco"] input:focus,
  .ds-scope[data-style-id="art-deco"] textarea:focus,
  .ds-scope[data-style-id="art-deco"] select:focus,
  [data-style="art-deco"] input:focus,
  [data-style="art-deco"] textarea:focus,
  [data-style="art-deco"] select:focus {
    border-color: var(--ad-gold) !important;
    box-shadow: 0 0 0 1px var(--ad-gold), 0 0 15px rgba(212, 175, 55, 0.35) !important;
    outline: none !important;
  }

  .lab-styled-preview[data-style="art-deco"] label,
  .art-deco-styled-container label,
  .style-art-deco label,
  .ds-scope[data-style-id="art-deco"] label,
  [data-style="art-deco"] label {
    display: block !important;
    font-family: var(--ad-font-display) !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.16em !important;
    text-transform: uppercase !important;
    color: var(--ad-gold) !important;
    margin-bottom: 0.4rem !important;
  }

  /* --------------------------------------------------------------------------
     9. TABLES & LUXURY LEDGERS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="art-deco"] table,
  .art-deco-styled-container table,
  .style-art-deco table,
  .ds-scope[data-style-id="art-deco"] table,
  [data-style="art-deco"] table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    border: 1px solid var(--ad-border) !important;
    border-radius: 0px !important;
    overflow: hidden !important;
    margin-bottom: 1.75rem !important;
    background: #141418 !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8) !important;
  }

  .lab-styled-preview[data-style="art-deco"] th,
  .art-deco-styled-container th,
  .style-art-deco th,
  .ds-scope[data-style-id="art-deco"] th,
  [data-style="art-deco"] th {
    background: #1b1a22 !important;
    color: var(--ad-gold) !important;
    font-family: var(--ad-font-display) !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.14em !important;
    text-transform: uppercase !important;
    padding: 0.9rem 1.25rem !important;
    text-align: left !important;
    border-bottom: 2px solid var(--ad-gold) !important;
  }

  .lab-styled-preview[data-style="art-deco"] td,
  .art-deco-styled-container td,
  .style-art-deco td,
  .ds-scope[data-style-id="art-deco"] td,
  [data-style="art-deco"] td {
    padding: 0.9rem 1.25rem !important;
    border-bottom: 1px solid var(--ad-border) !important;
    color: var(--ad-text-secondary) !important;
    font-size: 0.9375rem !important;
  }

  .lab-styled-preview[data-style="art-deco"] tr:hover td,
  .art-deco-styled-container tr:hover td,
  .style-art-deco tr:hover td,
  .ds-scope[data-style-id="art-deco"] tr:hover td,
  [data-style="art-deco"] tr:hover td {
    background: rgba(212, 175, 55, 0.08) !important;
    color: #ffffff !important;
  }

  /* --------------------------------------------------------------------------
     10. SPECIFIC ARCHETYPE ADAPTATIONS
     -------------------------------------------------------------------------- */
  /* Geometric Diamond Crest Badges */
  .lab-styled-preview[data-style="art-deco"] .badge,
  .art-deco-styled-container .badge,
  .style-art-deco .badge,
  .ds-scope[data-style-id="art-deco"] .badge,
  [data-style="art-deco"] .badge {
    display: inline-block !important;
    padding: 0.25rem 0.85rem !important;
    font-family: var(--ad-font-display) !important;
    font-size: 0.6875rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.16em !important;
    text-transform: uppercase !important;
    border-radius: 0px !important;
    border: 1px solid var(--ad-gold) !important;
    background: rgba(212, 175, 55, 0.12) !important;
    color: var(--ad-gold) !important;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.25) !important;
  }

  /* Featured / Imperial Emerald Pricing Tier */
  .lab-styled-preview[data-style="art-deco"] .pricing-card.featured,
  .lab-styled-preview[data-style="art-deco"] .tier.featured,
  .art-deco-styled-container .pricing-card.featured,
  .art-deco-styled-container .tier.featured,
  .style-art-deco .pricing-card.featured,
  .style-art-deco .tier.featured,
  .ds-scope[data-style-id="art-deco"] .pricing-card.featured,
  .ds-scope[data-style-id="art-deco"] .tier.featured,
  [data-style="art-deco"] .pricing-card.featured,
  [data-style="art-deco"] .tier.featured {
    border: 2px solid var(--ad-gold) !important;
    background: var(--ad-emerald-card) !important;
    box-shadow: 0 0 35px rgba(212, 175, 55, 0.35), inset 0 0 25px rgba(15, 56, 42, 0.4) !important;
    transform: scale(1.02);
  }

  /* Midnight Blue & Gold Editorial Blockquote */
  .lab-styled-preview[data-style="art-deco"] blockquote,
  .art-deco-styled-container blockquote,
  .style-art-deco blockquote,
  .ds-scope[data-style-id="art-deco"] blockquote,
  [data-style="art-deco"] blockquote {
    border-left: 3px double var(--ad-gold) !important;
    background: rgba(15, 29, 51, 0.85) !important;
    padding: 1.5rem 2rem !important;
    margin: 2rem 0 !important;
    color: #fbf8f0 !important;
    font-family: var(--ad-font-display) !important;
    font-style: italic !important;
    border-radius: 0px !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8) !important;
  }

  /* Symmetrical Chevron Ornamental Divider */
  .lab-styled-preview[data-style="art-deco"] hr,
  .art-deco-styled-container hr,
  .style-art-deco hr,
  .ds-scope[data-style-id="art-deco"] hr,
  [data-style="art-deco"] hr {
    border: none !important;
    height: 1px !important;
    background: linear-gradient(90deg, transparent 0%, var(--ad-gold) 50%, transparent 100%) !important;
    margin: 3rem 0 !important;
    position: relative !important;
    overflow: visible !important;
    text-align: center !important;
  }

  .lab-styled-preview[data-style="art-deco"] hr::after,
  .art-deco-styled-container hr::after,
  .style-art-deco hr::after,
  .ds-scope[data-style-id="art-deco"] hr::after,
  [data-style="art-deco"] hr::after {
    content: '❖ ━━━ ◆ ━━━ ❖' !important;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    background: var(--ad-bg) !important;
    padding: 0 1rem !important;
    color: var(--ad-gold) !important;
    font-size: 0.8125rem !important;
    letter-spacing: 0.2em !important;
  }

  /* HTML5 Details & Summary */
  .lab-styled-preview[data-style="art-deco"] details,
  .art-deco-styled-container details,
  .style-art-deco details,
  .ds-scope[data-style-id="art-deco"] details,
  [data-style="art-deco"] details {
    border: 1px solid var(--ad-border) !important;
    padding: 1rem 1.25rem !important;
    margin: 1rem 0 !important;
    background: var(--ad-surface) !important;
  }

  .lab-styled-preview[data-style="art-deco"] summary,
  .art-deco-styled-container summary,
  .style-art-deco summary,
  .ds-scope[data-style-id="art-deco"] summary,
  [data-style="art-deco"] summary {
    font-family: var(--ad-font-display) !important;
    font-weight: 600 !important;
    color: var(--ad-gold) !important;
    cursor: pointer !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
  }

  /* Drop Capital on Editorial Article First Paragraph */
  .lab-styled-preview[data-style="art-deco"] article.prose > p:first-of-type::first-letter,
  .lab-styled-preview[data-style="art-deco"] .prose > p:first-of-type::first-letter,
  .art-deco-styled-container article.prose > p:first-of-type::first-letter,
  .art-deco-styled-container .prose > p:first-of-type::first-letter,
  .style-art-deco article.prose > p:first-of-type::first-letter,
  .style-art-deco .prose > p:first-of-type::first-letter,
  .ds-scope[data-style-id="art-deco"] article.prose > p:first-of-type::first-letter,
  .ds-scope[data-style-id="art-deco"] .prose > p:first-of-type::first-letter,
  [data-style="art-deco"] article.prose > p:first-of-type::first-letter,
  [data-style="art-deco"] .prose > p:first-of-type::first-letter {
    float: left !important;
    font-family: var(--ad-font-display) !important;
    font-size: 3.5rem !important;
    line-height: 0.8 !important;
    padding: 0.4rem 0.6rem 0.2rem 0 !important;
    margin-right: 0.5rem !important;
    color: var(--ad-gold) !important;
    font-weight: 700 !important;
    text-shadow: 0 0 12px rgba(212, 175, 55, 0.5) !important;
  }

  /* Dashboard Stat Cards & Telemetry */
  .lab-styled-preview[data-style="art-deco"] .stat-card,
  .art-deco-styled-container .stat-card,
  .style-art-deco .stat-card,
  .ds-scope[data-style-id="art-deco"] .stat-card,
  [data-style="art-deco"] .stat-card {
    background: linear-gradient(180deg, #18181f 0%, #111115 100%) !important;
    border: 1px solid var(--ad-border) !important;
    border-top: 2px solid var(--ad-gold) !important;
    padding: 1.5rem !important;
  }

  .lab-styled-preview[data-style="art-deco"] .stat-value,
  .art-deco-styled-container .stat-value,
  .style-art-deco .stat-value,
  .ds-scope[data-style-id="art-deco"] .stat-value,
  [data-style="art-deco"] .stat-value {
    font-family: var(--ad-font-display) !important;
    font-size: 2rem !important;
    font-weight: 700 !important;
    color: var(--ad-gold) !important;
    letter-spacing: 0.05em !important;
  }

  .lab-styled-preview[data-style="art-deco"] .stat-meta,
  .art-deco-styled-container .stat-meta,
  .style-art-deco .stat-meta,
  .ds-scope[data-style-id="art-deco"] .stat-meta,
  [data-style="art-deco"] .stat-meta {
    font-size: 0.75rem !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    color: var(--ad-text-muted) !important;
  }

  /* Dashboard LED / Jeweled Indicator */
  .lab-styled-preview[data-style="art-deco"] .led,
  .lab-styled-preview[data-style="art-deco"] .status-dot,
  .art-deco-styled-container .led,
  .art-deco-styled-container .status-dot,
  .style-art-deco .led,
  .style-art-deco .status-dot,
  .ds-scope[data-style-id="art-deco"] .led,
  .ds-scope[data-style-id="art-deco"] .status-dot,
  [data-style="art-deco"] .led,
  [data-style="art-deco"] .status-dot {
    display: inline-block !important;
    width: 8px !important;
    height: 8px !important;
    border-radius: 0px !important;
    transform: rotate(45deg) !important; /* Diamond orientation */
    background: var(--ad-gold) !important;
    box-shadow: 0 0 10px var(--ad-gold) !important;
  }

  /* E-Commerce Product Card */
  .lab-styled-preview[data-style="art-deco"] .product-card,
  .art-deco-styled-container .product-card,
  .style-art-deco .product-card,
  .ds-scope[data-style-id="art-deco"] .product-card,
  [data-style="art-deco"] .product-card {
    background: linear-gradient(180deg, #18181f 0%, #111115 100%) !important;
    border: 1px solid var(--ad-border) !important;
    padding: 2rem !important;
    transition: all 250ms ease !important;
  }

  .lab-styled-preview[data-style="art-deco"] .product-card:hover,
  .art-deco-styled-container .product-card:hover,
  .style-art-deco .product-card:hover,
  .ds-scope[data-style-id="art-deco"] .product-card:hover,
  [data-style="art-deco"] .product-card:hover {
    border-color: var(--ad-gold) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.3) !important;
  }

  /* E-Commerce Luxury Gold Price Tags */
  .lab-styled-preview[data-style="art-deco"] .price,
  .art-deco-styled-container .price,
  .style-art-deco .price,
  .ds-scope[data-style-id="art-deco"] .price,
  [data-style="art-deco"] .price {
    font-family: var(--ad-font-display) !important;
    font-weight: 700 !important;
    color: var(--ad-gold) !important;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.4) !important;
    font-size: 1.4rem !important;
  }

  /* Restaurant Menu Layout */
  .lab-styled-preview[data-style="art-deco"] .menu-layout,
  .art-deco-styled-container .menu-layout,
  .style-art-deco .menu-layout,
  .ds-scope[data-style-id="art-deco"] .menu-layout,
  [data-style="art-deco"] .menu-layout {
    max-width: 800px !important;
    margin: 0 auto !important;
    text-align: center !important;
  }

  .lab-styled-preview[data-style="art-deco"] .menu-section,
  .art-deco-styled-container .menu-section,
  .style-art-deco .menu-section,
  .ds-scope[data-style-id="art-deco"] .menu-section,
  [data-style="art-deco"] .menu-section {
    margin: 2.5rem 0 !important;
  }

  /* Restaurant Jazz-Age Menu Item */
  .lab-styled-preview[data-style="art-deco"] .menu-item,
  .art-deco-styled-container .menu-item,
  .style-art-deco .menu-item,
  .ds-scope[data-style-id="art-deco"] .menu-item,
  [data-style="art-deco"] .menu-item {
    border-bottom: 1px dotted var(--ad-border) !important;
    padding-bottom: 0.85rem !important;
    margin-bottom: 1.25rem !important;
  }

  /* Footer Styling */
  .lab-styled-preview[data-style="art-deco"] footer,
  .art-deco-styled-container footer,
  .style-art-deco footer,
  .ds-scope[data-style-id="art-deco"] footer,
  [data-style="art-deco"] footer {
    border-top: 1px solid var(--ad-border) !important;
    padding-top: 2rem !important;
    margin-top: 3.5rem !important;
    font-family: var(--ad-font-display) !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    font-size: 0.8125rem !important;
    color: var(--ad-text-muted) !important;
    text-align: center;
  }

  /* --------------------------------------------------------------------------
     11. PREFERS-REDUCED-MOTION
     -------------------------------------------------------------------------- */
  @media (prefers-reduced-motion: reduce) {
    .lab-styled-preview[data-style="art-deco"] *,
    .art-deco-styled-container *,
    .style-art-deco *,
    .ds-scope[data-style-id="art-deco"] *,
    [data-style="art-deco"] * {
      animation: none !important;
      transition: none !important;
      transform: none !important;
    }
  }
`;
