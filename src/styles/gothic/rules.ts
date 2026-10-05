/**
 * Gothic Design Language — Medieval Cathedral Architecture & Dark Romanticism Stylesheet
 * 
 * Inspired by medieval architecture, illuminated manuscripts, cathedral interiors,
 * dark romanticism, carved stone, stained glass, ornate typography, and dramatic atmosphere.
 * 
 * Distinct from Victorian: Not 19th-century printer rules or aged ivory paper,
 * but medieval stone architecture, pointed lancet arches, and antique brass.
 * Distinct from Neo-classical: Not Greco-Roman symmetry or classical serenity,
 * but dark cathedral atmosphere, vertical emphasis, and illuminated manuscript framing.
 * Distinct from Dark Mode: Not generic soft gray cards or modern sans-serifs,
 * but dramatic stone-carved Cinzel monumental serifs and antique brass rules.
 * 
 * Preserves the user's source HTML with zero DOM mutations.
 */

export const gothicSemanticCss = `
  /* ==========================================================================
     GOTHIC DESIGN LANGUAGE — CATHEDRAL ARCHITECTURE & ILLUMINATED MANUSCRIPTS
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cinzel+Decorative:wght@700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');

  /* --------------------------------------------------------------------------
     1. FOUNDATION & SCOPED VARIABLES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="gothic"],
  .gothic-styled-container,
  .style-gothic,
  .ds-scope[data-style-id="gothic"],
  [data-style="gothic"] {
    /* Cathedral Stone & Illuminated Manuscript Palette */
    --gt-bg: #0c0c0e;                    /* Deep cathedral stone void */
    --gt-surface: #151518;               /* Chiseled ashlar stone slab */
    --gt-surface-subtle: #1f1f24;        /* Carved granite vaulting */
    --gt-surface-card: linear-gradient(180deg, #18181c 0%, #111114 100%);
    --gt-text: #f3efe6;                  /* Aged vellum ivory */
    --gt-text-secondary: #bfb9aa;        /* Weathered limestone parchment */
    --gt-text-muted: #7d786d;            /* Cathedral incense ash */

    /* Ecclesiastical & Manuscript Accents */
    --gt-brass: #c5a059;                 /* Antique cathedral brass */
    --gt-brass-hover: #dfb86c;
    --gt-brass-glow: rgba(197, 160, 89, 0.35);
    --gt-burgundy: #631326;              /* Imperial cathedral burgundy */
    --gt-burgundy-dark: #3e0a17;
    --gt-forest: #0e271c;                /* Dark cathedral forest */
    --gt-violet: #2b1338;                /* Stained-glass violet */
    --gt-border: #2e2c28;                /* Ashlar stone mortar joint */
    --gt-border-brass: rgba(197, 160, 89, 0.4);

    /* Typographic Hierarchy */
    --gt-font-display: 'Cinzel', 'Cinzel Decorative', 'Castoro Titling', serif;
    --gt-font-body: 'EB Garamond', 'Cormorant Garamond', Georgia, serif;
    --gt-font-mono: 'JetBrains Mono', 'Cinzel', monospace;
    --gt-font-sans: 'Inter', -apple-system, sans-serif;

    /* Base Canvas Styling */
    background-color: var(--gt-bg) !important;
    color: var(--gt-text-secondary) !important;
    font-family: var(--gt-font-body) !important;
    font-size: 1rem !important;
    line-height: 1.7 !important;
    box-sizing: border-box !important;
    position: relative;
    min-height: 100%;
    padding: 3.5rem 2.25rem;

    /* Cathedral stone grain texture with subtle burgundy atmosphere */
    background-image:
      radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99, 19, 38, 0.14) 0%, transparent 60%),
      linear-gradient(to right, rgba(197, 160, 89, 0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(197, 160, 89, 0.02) 1px, transparent 1px) !important;
    background-size: 100% 100%, 64px 64px, 64px 64px !important;

    /* Top antique brass ecclesiastical rule */
    border: 1px solid var(--gt-border) !important;
    border-top: 2px solid var(--gt-brass) !important;
    box-shadow: 0 0 25px rgba(197, 160, 89, 0.25), 0 10px 40px rgba(0, 0, 0, 0.9) !important;
  }

  /* --------------------------------------------------------------------------
     2. GLOBAL RESETS & SCOPED ELEMENT STYLING
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="gothic"] *,
  .gothic-styled-container *,
  .style-gothic *,
  .ds-scope[data-style-id="gothic"] *,
  [data-style="gothic"] * {
    box-sizing: border-box;
  }

  /* --------------------------------------------------------------------------
     3. TYPOGRAPHY & HEADING HIERARCHY
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="gothic"] h1,
  .lab-styled-preview[data-style="gothic"] h2,
  .lab-styled-preview[data-style="gothic"] h3,
  .lab-styled-preview[data-style="gothic"] h4,
  .lab-styled-preview[data-style="gothic"] h5,
  .lab-styled-preview[data-style="gothic"] h6,
  .gothic-styled-container h1,
  .gothic-styled-container h2,
  .gothic-styled-container h3,
  .gothic-styled-container h4,
  .gothic-styled-container h5,
  .gothic-styled-container h6,
  .style-gothic h1,
  .style-gothic h2,
  .style-gothic h3,
  .style-gothic h4,
  .style-gothic h5,
  .style-gothic h6,
  .ds-scope[data-style-id="gothic"] h1,
  .ds-scope[data-style-id="gothic"] h2,
  .ds-scope[data-style-id="gothic"] h3,
  .ds-scope[data-style-id="gothic"] h4,
  .ds-scope[data-style-id="gothic"] h5,
  .ds-scope[data-style-id="gothic"] h6,
  [data-style="gothic"] h1,
  [data-style="gothic"] h2,
  [data-style="gothic"] h3,
  [data-style="gothic"] h4,
  [data-style="gothic"] h5,
  [data-style="gothic"] h6 {
    font-family: var(--gt-font-display) !important;
    text-transform: uppercase !important;
    margin-top: 0;
    line-height: 1.15 !important;
    color: var(--gt-text) !important;
    letter-spacing: 0.08em !important;
  }

  /* Monumental Cathedral Title H1 */
  .lab-styled-preview[data-style="gothic"] h1,
  .gothic-styled-container h1,
  .style-gothic h1,
  .ds-scope[data-style-id="gothic"] h1,
  [data-style="gothic"] h1 {
    font-size: 2.85rem !important;
    font-weight: 700 !important;
    margin-bottom: 1.5rem !important;
    color: #ffffff !important;
    text-shadow: 0 0 20px rgba(197, 160, 89, 0.35), 0 2px 4px rgba(0, 0, 0, 0.9) !important;
    position: relative;
    display: inline-block;
  }

  .lab-styled-preview[data-style="gothic"] h1::after,
  .gothic-styled-container h1::after,
  .style-gothic h1::after,
  .ds-scope[data-style-id="gothic"] h1::after,
  [data-style="gothic"] h1::after {
    content: '✦ ─── ❖ ─── ✦';
    display: block;
    font-size: 0.85rem;
    color: var(--gt-brass);
    letter-spacing: 0.2em;
    margin-top: 0.75rem;
    text-shadow: 0 0 10px rgba(197, 160, 89, 0.5);
  }

  /* Section Title H2: Architectural Chiseled Heading */
  .lab-styled-preview[data-style="gothic"] h2,
  .gothic-styled-container h2,
  .style-gothic h2,
  .ds-scope[data-style-id="gothic"] h2,
  [data-style="gothic"] h2 {
    font-size: 1.9rem !important;
    font-weight: 700 !important;
    margin-top: 2.25rem !important;
    margin-bottom: 1rem !important;
    color: #f3efe6 !important;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8) !important;
    border-bottom: 1px solid var(--gt-border) !important;
    padding-bottom: 0.5rem !important;
    position: relative;
  }

  .lab-styled-preview[data-style="gothic"] h2::before,
  .gothic-styled-container h2::before,
  .style-gothic h2::before,
  .ds-scope[data-style-id="gothic"] h2::before,
  [data-style="gothic"] h2::before {
    content: '✠ ';
    color: var(--gt-brass);
    font-size: 1.15rem;
    margin-right: 0.35rem;
  }

  /* Subsection Titles H3 */
  .lab-styled-preview[data-style="gothic"] h3,
  .gothic-styled-container h3,
  .style-gothic h3,
  .ds-scope[data-style-id="gothic"] h3,
  [data-style="gothic"] h3 {
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    margin-bottom: 0.75rem !important;
    color: var(--gt-brass) !important;
    letter-spacing: 0.06em !important;
  }

  .lab-styled-preview[data-style="gothic"] h4,
  .gothic-styled-container h4,
  .style-gothic h4,
  .ds-scope[data-style-id="gothic"] h4,
  [data-style="gothic"] h4 {
    font-size: 1.05rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.05em !important;
    color: #f3efe6 !important;
  }

  /* Paragraphs & Text Content */
  .lab-styled-preview[data-style="gothic"] p,
  .gothic-styled-container p,
  .style-gothic p,
  .ds-scope[data-style-id="gothic"] p,
  [data-style="gothic"] p {
    font-family: var(--gt-font-body) !important;
    color: var(--gt-text-secondary) !important;
    font-size: 1rem !important;
    line-height: 1.7 !important;
    margin-top: 0;
    margin-bottom: 1.25rem;
  }

  .lab-styled-preview[data-style="gothic"] strong,
  .gothic-styled-container strong,
  .style-gothic strong,
  .ds-scope[data-style-id="gothic"] strong,
  [data-style="gothic"] strong {
    color: #ffffff !important;
    font-weight: 600 !important;
  }

  /* Eyebrows / Architectural Markers */
  .lab-styled-preview[data-style="gothic"] .tag,
  .lab-styled-preview[data-style="gothic"] header > p:first-child,
  .lab-styled-preview[data-style="gothic"] .eyebrow,
  .gothic-styled-container .tag,
  .gothic-styled-container header > p:first-child,
  .gothic-styled-container .eyebrow,
  .style-gothic .tag,
  .style-gothic header > p:first-child,
  .style-gothic .eyebrow,
  .ds-scope[data-style-id="gothic"] .tag,
  .ds-scope[data-style-id="gothic"] header > p:first-child,
  .ds-scope[data-style-id="gothic"] .eyebrow,
  [data-style="gothic"] .tag,
  [data-style="gothic"] header > p:first-child,
  [data-style="gothic"] .eyebrow {
    font-family: var(--gt-font-display) !important;
    color: var(--gt-brass) !important;
    letter-spacing: 0.15em !important;
    text-transform: uppercase !important;
    font-size: 0.8125rem !important;
  }

  /* --------------------------------------------------------------------------
     4. NAVIGATION & HEADER SYSTEM
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="gothic"] nav,
  .lab-styled-preview[data-style="gothic"] header:not(.hero),
  .gothic-styled-container nav,
  .gothic-styled-container header:not(.hero),
  .style-gothic nav,
  .style-gothic header:not(.hero),
  .ds-scope[data-style-id="gothic"] nav,
  .ds-scope[data-style-id="gothic"] header:not(.hero),
  [data-style="gothic"] nav,
  [data-style="gothic"] header:not(.hero) {
    background: rgba(21, 21, 24, 0.95) !important;
    border: 1px solid var(--gt-border) !important;
    border-bottom: 1px solid var(--gt-brass) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 15px rgba(197, 160, 89, 0.15) !important;
    padding: 1rem 1.75rem !important;
    border-radius: 4px !important;
    margin-bottom: 2.5rem !important;
  }

  .lab-styled-preview[data-style="gothic"] nav ul,
  .gothic-styled-container nav ul,
  .style-gothic nav ul,
  .ds-scope[data-style-id="gothic"] nav ul,
  [data-style="gothic"] nav ul {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 1.75rem !important;
    align-items: center !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .lab-styled-preview[data-style="gothic"] nav a,
  .gothic-styled-container nav a,
  .style-gothic nav a,
  .ds-scope[data-style-id="gothic"] nav a,
  [data-style="gothic"] nav a {
    font-family: var(--gt-font-display) !important;
    font-size: 0.8125rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    color: var(--gt-text-secondary) !important;
    text-decoration: none !important;
    transition: all 180ms ease !important;
    padding: 0.25rem 0.4rem;
  }

  .lab-styled-preview[data-style="gothic"] nav a:hover,
  .gothic-styled-container nav a:hover,
  .style-gothic nav a:hover,
  .ds-scope[data-style-id="gothic"] nav a:hover,
  [data-style="gothic"] nav a:hover {
    color: var(--gt-brass) !important;
    text-shadow: 0 0 10px rgba(197, 160, 89, 0.6) !important;
  }

  /* --------------------------------------------------------------------------
     5. HERO / CATHEDRAL VAULT INTRO
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="gothic"] header.hero,
  .lab-styled-preview[data-style="gothic"] .hero,
  .gothic-styled-container header.hero,
  .gothic-styled-container .hero,
  .style-gothic header.hero,
  .style-gothic .hero,
  .ds-scope[data-style-id="gothic"] header.hero,
  .ds-scope[data-style-id="gothic"] .hero,
  [data-style="gothic"] header.hero,
  [data-style="gothic"] .hero {
    position: relative;
    padding: 4rem 2.5rem !important;
    margin-bottom: 3.5rem !important;
    border-radius: 24px 24px 4px 4px !important; /* Pointed lancet arch upper curvature */
    background: radial-gradient(ellipse 80% 60% at 50% 20%, rgba(99, 19, 38, 0.25) 0%, rgba(21, 21, 24, 0.92) 65%, rgba(12, 12, 14, 0.98) 100%) !important;
    border: 1px solid var(--gt-border) !important;
    border-top: 2px solid var(--gt-brass) !important;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(197, 160, 89, 0.3) !important;
    overflow: hidden;
  }

  /* --------------------------------------------------------------------------
     6. CARDS, SECTIONS & CONTAINER MODULES
     -------------------------------------------------------------------------- */
  /* Un-cardify plain text paragraphs in articles and sections */
  .lab-styled-preview[data-style="gothic"] article > p,
  .lab-styled-preview[data-style="gothic"] section > p,
  .lab-styled-preview[data-style="gothic"] main > p,
  .gothic-styled-container article > p,
  .gothic-styled-container section > p,
  .gothic-styled-container main > p,
  .style-gothic article > p,
  .style-gothic section > p,
  .style-gothic main > p,
  .ds-scope[data-style-id="gothic"] article > p,
  .ds-scope[data-style-id="gothic"] section > p,
  .ds-scope[data-style-id="gothic"] main > p,
  [data-style="gothic"] article > p,
  [data-style="gothic"] section > p,
  [data-style="gothic"] main > p {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  /* Actual Lancet Arch Cards */
  .lab-styled-preview[data-style="gothic"] .card,
  .lab-styled-preview[data-style="gothic"] article:not(.prose),
  .lab-styled-preview[data-style="gothic"] .feature-card,
  .lab-styled-preview[data-style="gothic"] .pricing-card,
  .lab-styled-preview[data-style="gothic"] .tier,
  .gothic-styled-container .card,
  .gothic-styled-container article:not(.prose),
  .gothic-styled-container .feature-card,
  .gothic-styled-container .pricing-card,
  .gothic-styled-container .tier,
  .style-gothic .card,
  .style-gothic article:not(.prose),
  .style-gothic .feature-card,
  .style-gothic .pricing-card,
  .style-gothic .tier,
  .ds-scope[data-style-id="gothic"] .card,
  .ds-scope[data-style-id="gothic"] article:not(.prose),
  .ds-scope[data-style-id="gothic"] .feature-card,
  .ds-scope[data-style-id="gothic"] .pricing-card,
  .ds-scope[data-style-id="gothic"] .tier,
  [data-style="gothic"] .card,
  [data-style="gothic"] article:not(.prose),
  [data-style="gothic"] .feature-card,
  [data-style="gothic"] .pricing-card,
  [data-style="gothic"] .tier {
    background: var(--gt-surface-card) !important;
    border: 1px solid var(--gt-border) !important;
    border-top: 1px solid rgba(197, 160, 89, 0.3) !important;
    border-radius: 16px 16px 3px 3px !important; /* Pointed lancet arch geometry */
    padding: 2.5rem 2.25rem !important;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(197, 160, 89, 0.1) !important;
    transition: all 220ms ease !important;
    position: relative;
  }

  .lab-styled-preview[data-style="gothic"] .card:hover,
  .lab-styled-preview[data-style="gothic"] article:not(.prose):hover,
  .lab-styled-preview[data-style="gothic"] .feature-card:hover,
  .lab-styled-preview[data-style="gothic"] .pricing-card:hover,
  .lab-styled-preview[data-style="gothic"] .tier:hover,
  .gothic-styled-container .card:hover,
  .gothic-styled-container article:not(.prose):hover,
  .gothic-styled-container .feature-card:hover,
  .gothic-styled-container .pricing-card:hover,
  .gothic-styled-container .tier:hover,
  .style-gothic .card:hover,
  .style-gothic article:not(.prose):hover,
  .style-gothic .feature-card:hover,
  .style-gothic .pricing-card:hover,
  .style-gothic .tier:hover,
  .ds-scope[data-style-id="gothic"] .card:hover,
  .ds-scope[data-style-id="gothic"] article:not(.prose):hover,
  .ds-scope[data-style-id="gothic"] .feature-card:hover,
  .ds-scope[data-style-id="gothic"] .pricing-card:hover,
  .ds-scope[data-style-id="gothic"] .tier:hover,
  [data-style="gothic"] .card:hover,
  [data-style="gothic"] article:not(.prose):hover,
  [data-style="gothic"] .feature-card:hover,
  [data-style="gothic"] .pricing-card:hover,
  [data-style="gothic"] .tier:hover {
    border-color: var(--gt-brass) !important;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.9), 0 0 20px rgba(197, 160, 89, 0.25) !important;
    transform: translateY(-2px) !important;
  }

  /* Grid Layouts */
  .lab-styled-preview[data-style="gothic"] .grid,
  .lab-styled-preview[data-style="gothic"] .stat-grid,
  .lab-styled-preview[data-style="gothic"] .pricing-grid,
  .lab-styled-preview[data-style="gothic"] .product-grid,
  .lab-styled-preview[data-style="gothic"] section > div:not(.hero),
  .gothic-styled-container .grid,
  .gothic-styled-container .stat-grid,
  .gothic-styled-container .pricing-grid,
  .gothic-styled-container .product-grid,
  .gothic-styled-container section > div:not(.hero),
  .style-gothic .grid,
  .style-gothic .stat-grid,
  .style-gothic .pricing-grid,
  .style-gothic .product-grid,
  .style-gothic section > div:not(.hero),
  .ds-scope[data-style-id="gothic"] .grid,
  .ds-scope[data-style-id="gothic"] .stat-grid,
  .ds-scope[data-style-id="gothic"] .pricing-grid,
  .ds-scope[data-style-id="gothic"] .product-grid,
  .ds-scope[data-style-id="gothic"] section > div:not(.hero),
  [data-style="gothic"] .grid,
  [data-style="gothic"] .stat-grid,
  [data-style="gothic"] .pricing-grid,
  [data-style="gothic"] .product-grid,
  [data-style="gothic"] section > div:not(.hero) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
  }

  /* Card Button Full-Width */
  .lab-styled-preview[data-style="gothic"] .card button,
  .gothic-styled-container .card button,
  .style-gothic .card button,
  .ds-scope[data-style-id="gothic"] .card button,
  [data-style="gothic"] .card button {
    margin-top: 1.25rem !important;
    width: 100% !important;
  }

  /* --------------------------------------------------------------------------
     7. BUTTONS & INTERACTIVE CONTROLS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="gothic"] button,
  .lab-styled-preview[data-style="gothic"] .btn,
  .lab-styled-preview[data-style="gothic"] a.btn,
  .lab-styled-preview[data-style="gothic"] input[type="submit"],
  .lab-styled-preview[data-style="gothic"] input[type="button"],
  .gothic-styled-container button,
  .gothic-styled-container .btn,
  .gothic-styled-container a.btn,
  .gothic-styled-container input[type="submit"],
  .gothic-styled-container input[type="button"],
  .style-gothic button,
  .style-gothic .btn,
  .style-gothic a.btn,
  .style-gothic input[type="submit"],
  .style-gothic input[type="button"],
  .ds-scope[data-style-id="gothic"] button,
  .ds-scope[data-style-id="gothic"] .btn,
  .ds-scope[data-style-id="gothic"] a.btn,
  .ds-scope[data-style-id="gothic"] input[type="submit"],
  .ds-scope[data-style-id="gothic"] input[type="button"],
  [data-style="gothic"] button,
  [data-style="gothic"] .btn,
  [data-style="gothic"] a.btn,
  [data-style="gothic"] input[type="submit"],
  [data-style="gothic"] input[type="button"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0.8rem 2.25rem !important;
    font-family: var(--gt-font-display) !important;
    font-size: 0.8125rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    border-radius: 2px !important;
    border: 1px solid var(--gt-brass) !important;
    background: linear-gradient(180deg, #1f1a14 0%, #12100d 100%) !important;
    color: #f3efe6 !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(197, 160, 89, 0.4) !important;
    cursor: pointer !important;
    text-decoration: none !important;
    transition: all 200ms ease !important;
  }

  .lab-styled-preview[data-style="gothic"] button:hover,
  .lab-styled-preview[data-style="gothic"] .btn:hover,
  .lab-styled-preview[data-style="gothic"] a.btn:hover,
  .lab-styled-preview[data-style="gothic"] input[type="submit"]:hover,
  .gothic-styled-container button:hover,
  .gothic-styled-container .btn:hover,
  .gothic-styled-container a.btn:hover,
  .gothic-styled-container input[type="submit"]:hover,
  .style-gothic button:hover,
  .style-gothic .btn:hover,
  .style-gothic a.btn:hover,
  .style-gothic input[type="submit"]:hover,
  .ds-scope[data-style-id="gothic"] button:hover,
  .ds-scope[data-style-id="gothic"] .btn:hover,
  .ds-scope[data-style-id="gothic"] a.btn:hover,
  .ds-scope[data-style-id="gothic"] input[type="submit"]:hover,
  [data-style="gothic"] button:hover,
  [data-style="gothic"] .btn:hover,
  [data-style="gothic"] a.btn:hover,
  [data-style="gothic"] input[type="submit"]:hover {
    background: linear-gradient(180deg, #631326 0%, #3e0a17 100%) !important;
    border-color: var(--gt-brass-hover) !important;
    color: #ffffff !important;
    box-shadow: 0 0 20px rgba(197, 160, 89, 0.4), 0 4px 15px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(223, 184, 108, 0.5) !important;
    transform: translateY(-1px) !important;
  }

  .lab-styled-preview[data-style="gothic"] button:active,
  .gothic-styled-container button:active,
  .style-gothic button:active,
  .ds-scope[data-style-id="gothic"] button:active,
  [data-style="gothic"] button:active {
    transform: translateY(1px) !important;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.9) !important;
  }

  /* Keyboard Focus Accessibility */
  .lab-styled-preview[data-style="gothic"] button:focus-visible,
  .lab-styled-preview[data-style="gothic"] a:focus-visible,
  .lab-styled-preview[data-style="gothic"] input:focus-visible,
  .gothic-styled-container button:focus-visible,
  .gothic-styled-container a:focus-visible,
  .gothic-styled-container input:focus-visible,
  .style-gothic button:focus-visible,
  .style-gothic a:focus-visible,
  .style-gothic input:focus-visible,
  .ds-scope[data-style-id="gothic"] button:focus-visible,
  .ds-scope[data-style-id="gothic"] a:focus-visible,
  .ds-scope[data-style-id="gothic"] input:focus-visible,
  [data-style="gothic"] button:focus-visible,
  [data-style="gothic"] a:focus-visible,
  [data-style="gothic"] input:focus-visible {
    outline: none !important;
    box-shadow: 0 0 0 2px var(--gt-bg), 0 0 0 4px var(--gt-brass), 0 0 20px rgba(197, 160, 89, 0.6) !important;
  }

  /* Disabled State */
  .lab-styled-preview[data-style="gothic"] button:disabled,
  .lab-styled-preview[data-style="gothic"] input:disabled,
  .gothic-styled-container button:disabled,
  .gothic-styled-container input:disabled,
  .style-gothic button:disabled,
  .style-gothic input:disabled,
  .ds-scope[data-style-id="gothic"] button:disabled,
  .ds-scope[data-style-id="gothic"] input:disabled,
  [data-style="gothic"] button:disabled,
  [data-style="gothic"] input:disabled {
    opacity: 0.45 !important;
    cursor: not-allowed !important;
    filter: grayscale(0.7) !important;
    box-shadow: none !important;
  }

  /* --------------------------------------------------------------------------
     8. FORMS, INPUTS & CONTROLS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="gothic"] input[type="text"],
  .lab-styled-preview[data-style="gothic"] input[type="email"],
  .lab-styled-preview[data-style="gothic"] input[type="password"],
  .lab-styled-preview[data-style="gothic"] input[type="tel"],
  .lab-styled-preview[data-style="gothic"] input[type="search"],
  .lab-styled-preview[data-style="gothic"] textarea,
  .lab-styled-preview[data-style="gothic"] select,
  .gothic-styled-container input[type="text"],
  .gothic-styled-container input[type="email"],
  .gothic-styled-container input[type="password"],
  .gothic-styled-container input[type="tel"],
  .gothic-styled-container input[type="search"],
  .gothic-styled-container textarea,
  .gothic-styled-container select,
  .style-gothic input[type="text"],
  .style-gothic input[type="email"],
  .style-gothic input[type="password"],
  .style-gothic input[type="tel"],
  .style-gothic input[type="search"],
  .style-gothic textarea,
  .style-gothic select,
  .ds-scope[data-style-id="gothic"] input[type="text"],
  .ds-scope[data-style-id="gothic"] input[type="email"],
  .ds-scope[data-style-id="gothic"] input[type="password"],
  .ds-scope[data-style-id="gothic"] input[type="tel"],
  .ds-scope[data-style-id="gothic"] input[type="search"],
  .ds-scope[data-style-id="gothic"] textarea,
  .ds-scope[data-style-id="gothic"] select,
  [data-style="gothic"] input[type="text"],
  [data-style="gothic"] input[type="email"],
  [data-style="gothic"] input[type="password"],
  [data-style="gothic"] input[type="tel"],
  [data-style="gothic"] input[type="search"],
  [data-style="gothic"] textarea,
  [data-style="gothic"] select {
    width: 100% !important;
    padding: 0.8rem 1rem !important;
    font-family: var(--gt-font-body) !important;
    font-size: 1rem !important;
    border-radius: 2px !important;
    border: 1px solid var(--gt-border) !important;
    background: #0e0e11 !important;
    color: var(--gt-text) !important;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.7) !important;
    transition: all 180ms ease !important;
    margin-bottom: 1rem !important;
  }

  .lab-styled-preview[data-style="gothic"] input:focus,
  .lab-styled-preview[data-style="gothic"] textarea:focus,
  .lab-styled-preview[data-style="gothic"] select:focus,
  .gothic-styled-container input:focus,
  .gothic-styled-container textarea:focus,
  .gothic-styled-container select:focus,
  .style-gothic input:focus,
  .style-gothic textarea:focus,
  .style-gothic select:focus,
  .ds-scope[data-style-id="gothic"] input:focus,
  .ds-scope[data-style-id="gothic"] textarea:focus,
  .ds-scope[data-style-id="gothic"] select:focus,
  [data-style="gothic"] input:focus,
  [data-style="gothic"] textarea:focus,
  [data-style="gothic"] select:focus {
    border-color: var(--gt-brass) !important;
    box-shadow: 0 0 0 2px rgba(197, 160, 89, 0.25), 0 0 15px rgba(197, 160, 89, 0.25) !important;
    outline: none !important;
  }

  .lab-styled-preview[data-style="gothic"] label,
  .gothic-styled-container label,
  .style-gothic label,
  .ds-scope[data-style-id="gothic"] label,
  [data-style="gothic"] label {
    display: block !important;
    font-family: var(--gt-font-display) !important;
    font-size: 0.75rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase !important;
    color: var(--gt-brass) !important;
    margin-bottom: 0.4rem !important;
  }

  /* --------------------------------------------------------------------------
     9. TABLES & ARCHIVAL LEDGERS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="gothic"] table,
  .gothic-styled-container table,
  .style-gothic table,
  .ds-scope[data-style-id="gothic"] table,
  [data-style="gothic"] table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    border: 1px solid var(--gt-border) !important;
    border-radius: 4px !important;
    overflow: hidden !important;
    margin-bottom: 1.75rem !important;
    background: #141417 !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8) !important;
  }

  .lab-styled-preview[data-style="gothic"] th,
  .gothic-styled-container th,
  .style-gothic th,
  .ds-scope[data-style-id="gothic"] th,
  [data-style="gothic"] th {
    background: #19181d !important;
    color: var(--gt-brass) !important;
    font-family: var(--gt-font-display) !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase !important;
    padding: 0.9rem 1.25rem !important;
    text-align: left !important;
    border-bottom: 2px solid var(--gt-brass) !important;
  }

  .lab-styled-preview[data-style="gothic"] td,
  .gothic-styled-container td,
  .style-gothic td,
  .ds-scope[data-style-id="gothic"] td,
  [data-style="gothic"] td {
    padding: 0.9rem 1.25rem !important;
    border-bottom: 1px solid var(--gt-border) !important;
    color: var(--gt-text-secondary) !important;
    font-size: 0.9375rem !important;
  }

  .lab-styled-preview[data-style="gothic"] tr:hover td,
  .gothic-styled-container tr:hover td,
  .style-gothic tr:hover td,
  .ds-scope[data-style-id="gothic"] tr:hover td,
  [data-style="gothic"] tr:hover td {
    background: rgba(99, 19, 38, 0.18) !important;
    color: #ffffff !important;
  }

  /* --------------------------------------------------------------------------
     10. SPECIFIC ARCHETYPE ADAPTATIONS
     -------------------------------------------------------------------------- */
  /* Antique Brass Votive Seal Badges */
  .lab-styled-preview[data-style="gothic"] .badge,
  .gothic-styled-container .badge,
  .style-gothic .badge,
  .ds-scope[data-style-id="gothic"] .badge,
  [data-style="gothic"] .badge {
    display: inline-block !important;
    padding: 0.25rem 0.85rem !important;
    font-family: var(--gt-font-display) !important;
    font-size: 0.6875rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    border-radius: 2px !important;
    border: 1px solid var(--gt-brass) !important;
    background: rgba(99, 19, 38, 0.4) !important;
    color: var(--gt-brass) !important;
    box-shadow: 0 0 10px rgba(197, 160, 89, 0.25) !important;
  }

  /* Featured / Monastic Pricing Tier */
  .lab-styled-preview[data-style="gothic"] .pricing-card.featured,
  .lab-styled-preview[data-style="gothic"] .tier.featured,
  .gothic-styled-container .pricing-card.featured,
  .gothic-styled-container .tier.featured,
  .style-gothic .pricing-card.featured,
  .style-gothic .tier.featured,
  .ds-scope[data-style-id="gothic"] .pricing-card.featured,
  .ds-scope[data-style-id="gothic"] .tier.featured,
  [data-style="gothic"] .pricing-card.featured,
  [data-style="gothic"] .tier.featured {
    border: 2px solid var(--gt-brass) !important;
    background: linear-gradient(180deg, #24141d 0%, #151014 100%) !important;
    box-shadow: 0 0 35px rgba(197, 160, 89, 0.35), inset 0 0 25px rgba(99, 19, 38, 0.3) !important;
    transform: scale(1.02);
  }

  /* Illuminated Manuscript Editorial Blockquote */
  .lab-styled-preview[data-style="gothic"] blockquote,
  .gothic-styled-container blockquote,
  .style-gothic blockquote,
  .ds-scope[data-style-id="gothic"] blockquote,
  [data-style="gothic"] blockquote {
    border-left: 4px solid var(--gt-burgundy) !important;
    background: rgba(21, 21, 24, 0.85) !important;
    padding: 1.5rem 2rem !important;
    margin: 2rem 0 !important;
    color: #f3efe6 !important;
    font-style: italic !important;
    border-radius: 0 6px 6px 0 !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8) !important;
  }

  /* Drop Capital on Editorial Article First Paragraph */
  .lab-styled-preview[data-style="gothic"] article.prose > p:first-of-type::first-letter,
  .lab-styled-preview[data-style="gothic"] .prose > p:first-of-type::first-letter,
  .gothic-styled-container article.prose > p:first-of-type::first-letter,
  .gothic-styled-container .prose > p:first-of-type::first-letter,
  .style-gothic article.prose > p:first-of-type::first-letter,
  .style-gothic .prose > p:first-of-type::first-letter,
  .ds-scope[data-style-id="gothic"] article.prose > p:first-of-type::first-letter,
  .ds-scope[data-style-id="gothic"] .prose > p:first-of-type::first-letter,
  [data-style="gothic"] article.prose > p:first-of-type::first-letter,
  [data-style="gothic"] .prose > p:first-of-type::first-letter {
    float: left !important;
    font-family: var(--gt-font-display) !important;
    font-size: 3.25rem !important;
    line-height: 0.8 !important;
    padding: 0.4rem 0.6rem 0.2rem 0 !important;
    margin-right: 0.5rem !important;
    color: var(--gt-brass) !important;
    text-shadow: 0 0 10px rgba(197, 160, 89, 0.5) !important;
  }

  /* Dashboard LED / Votive Seal Status */
  .lab-styled-preview[data-style="gothic"] .led,
  .lab-styled-preview[data-style="gothic"] .status-dot,
  .gothic-styled-container .led,
  .gothic-styled-container .status-dot,
  .style-gothic .led,
  .style-gothic .status-dot,
  .ds-scope[data-style-id="gothic"] .led,
  .ds-scope[data-style-id="gothic"] .status-dot,
  [data-style="gothic"] .led,
  [data-style="gothic"] .status-dot {
    display: inline-block !important;
    width: 8px !important;
    height: 8px !important;
    border-radius: 50% !important;
    background: var(--gt-brass) !important;
    box-shadow: 0 0 10px var(--gt-brass) !important;
  }

  /* E-Commerce Antiquarian Price Tags */
  .lab-styled-preview[data-style="gothic"] .price,
  .gothic-styled-container .price,
  .style-gothic .price,
  .ds-scope[data-style-id="gothic"] .price,
  [data-style="gothic"] .price {
    font-family: var(--gt-font-display) !important;
    font-weight: 700 !important;
    color: var(--gt-brass) !important;
    text-shadow: 0 0 10px rgba(197, 160, 89, 0.4) !important;
    font-size: 1.4rem !important;
  }

  /* Restaurant Dark Romantic Menu Item */
  .lab-styled-preview[data-style="gothic"] .menu-item,
  .gothic-styled-container .menu-item,
  .style-gothic .menu-item,
  .ds-scope[data-style-id="gothic"] .menu-item,
  [data-style="gothic"] .menu-item {
    border-bottom: 1px dotted var(--gt-border) !important;
    padding-bottom: 0.85rem !important;
    margin-bottom: 1.25rem !important;
  }

  /* Footer Styling */
  .lab-styled-preview[data-style="gothic"] footer,
  .gothic-styled-container footer,
  .style-gothic footer,
  .ds-scope[data-style-id="gothic"] footer,
  [data-style="gothic"] footer {
    border-top: 1px solid var(--gt-border) !important;
    padding-top: 2rem !important;
    margin-top: 3.5rem !important;
    font-family: var(--gt-font-body) !important;
    font-size: 0.875rem !important;
    color: var(--gt-text-muted) !important;
    text-align: center;
  }

  /* --------------------------------------------------------------------------
     11. PREFERS-REDUCED-MOTION
     -------------------------------------------------------------------------- */
  @media (prefers-reduced-motion: reduce) {
    .lab-styled-preview[data-style="gothic"] *,
    .gothic-styled-container *,
    .style-gothic *,
    .ds-scope[data-style-id="gothic"] *,
    [data-style="gothic"] * {
      animation: none !important;
      transition: none !important;
      transform: none !important;
    }
  }
`;
