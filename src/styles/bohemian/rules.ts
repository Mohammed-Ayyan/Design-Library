/**
 * Bohemian Visual Design Language — Semantic CSS Rules
 *
 * "A contemporary creative studio, artist's journal, or independent cultural publication."
 *
 * Core Characteristics:
 * - Warm, handcrafted, eclectic, relaxed, expressive, organic, tactile, human.
 * - Collected rather than manufactured: surfaces feel discovered and curated.
 * - Deeply harmonious palette: warm cream, parchment, clay, sand, warm charcoal, terracotta,
 *   mustard ochre, deep olive, muted turquoise, dusty rose, and indigo.
 * - Expressive typographic contrast: characterful Fraunces serif display, warm Plus Jakarta Sans body,
 *   and artisanal handwritten Caveat accents used sparingly for kickers, stamps, and notes.
 * - Handcrafted geometry: subtle organic asymmetrical radii, artisanal borders, ink-like rules.
 * - Deterministic nth-child variation across cards/collections so grids feel collected, not cookie-cutter.
 * - Strict zero-wrapper semantic HTML mapping covering all 8 archetypes and arbitrary structures.
 */

export const bohemianSemanticCss = `
  /* ==========================================================================
     FONT IMPORT: Fraunces (Display Serif), Plus Jakarta Sans (Body), Caveat (Artisan Script)
     ========================================================================== */
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

  /* ==========================================================================
     CSS VARIABLES & ROOT TOKENS
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"],
  .bohemian-styled-container {
    --boh-font-display: 'Fraunces', Georgia, serif;
    --boh-font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --boh-font-accent: 'Caveat', cursive, Georgia, serif;

    /* Base Canvas & Layered Surfaces */
    --boh-cream: #fbf7ee;
    --boh-parchment: #f4ece1;
    --boh-parchment-soft: #fbf6ef;
    --boh-surface-card: #fdfbf7;
    --boh-surface-elevated: #faf3e7;
    --boh-sand: #ebdcc9;
    --boh-clay: #d6a87c;

    /* Inks & Textures */
    --boh-charcoal: #2b2523;
    --boh-charcoal-light: #524742;
    --boh-charcoal-muted: #85766e;

    /* Artisanal Accents */
    --boh-terracotta: #c85a32;
    --boh-terracotta-dark: #a84520;
    --boh-terracotta-soft: rgba(200, 90, 50, 0.12);
    --boh-mustard: #d48b16;
    --boh-mustard-soft: rgba(212, 139, 22, 0.14);
    --boh-olive: #4a5840;
    --boh-olive-soft: rgba(74, 88, 64, 0.12);
    --boh-turquoise: #2a9d8f;
    --boh-turquoise-soft: rgba(42, 157, 143, 0.12);
    --boh-rose: #c97a7e;
    --boh-rose-soft: rgba(201, 122, 126, 0.14);
    --boh-indigo: #2e3d52;

    /* Craft Borders & Tactile Shadows */
    --boh-border-craft: rgba(189, 168, 148, 0.55);
    --boh-border-strong: rgba(140, 115, 95, 0.75);
    --boh-border-terracotta: rgba(200, 90, 50, 0.45);
    --boh-shadow-craft-sm: 0 2px 8px rgba(74, 56, 44, 0.05), 0 1px 2px rgba(74, 56, 44, 0.04);
    --boh-shadow-craft-md: 0 8px 24px rgba(74, 56, 44, 0.07), 0 2px 6px rgba(74, 56, 44, 0.04);
    --boh-shadow-craft-lg: 0 16px 36px rgba(74, 56, 44, 0.1), 0 4px 12px rgba(74, 56, 44, 0.05);

    /* Handcrafted Radii Tokens */
    --boh-radius-card-a: 24px 14px 28px 16px;
    --boh-radius-card-b: 16px 26px 14px 22px;
    --boh-radius-card-c: 22px 16px 26px 14px;
    --boh-radius-pill: 9999px;
  }

  /* ==========================================================================
     PAGE & FOUNDATION CANVAS
     Sun-warmed linen tone with subtle atmospheric radiance
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"],
  .bohemian-styled-container {
    background-color: var(--boh-cream) !important;
    background-image:
      radial-gradient(ellipse at 88% 12%, rgba(212, 139, 22, 0.06) 0%, transparent 45%),
      radial-gradient(ellipse at 12% 88%, rgba(200, 90, 50, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(74, 88, 64, 0.03) 0%, transparent 60%) !important;
    color: var(--boh-charcoal) !important;
    font-family: var(--boh-font-body) !important;
    font-size: 1rem !important;
    line-height: 1.7 !important;
    letter-spacing: -0.01em !important;
    padding: 3rem 2rem !important;
    box-sizing: border-box !important;
    position: relative !important;
  }

  /* Clean universal reset within container */
  .lab-styled-preview[data-style="bohemian"] *,
  .bohemian-styled-container * {
    box-sizing: border-box !important;
  }

  /* ==========================================================================
     TYPOGRAPHY SYSTEM
     Expressive Fraunces serifs with warm human rhythm and deliberate presence
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] h1,
  .lab-styled-preview[data-style="bohemian"] h2,
  .lab-styled-preview[data-style="bohemian"] h3,
  .lab-styled-preview[data-style="bohemian"] h4,
  .lab-styled-preview[data-style="bohemian"] h5,
  .lab-styled-preview[data-style="bohemian"] h6,
  .bohemian-styled-container h1,
  .bohemian-styled-container h2,
  .bohemian-styled-container h3,
  .bohemian-styled-container h4,
  .bohemian-styled-container h5,
  .bohemian-styled-container h6 {
    font-family: var(--boh-font-display) !important;
    color: var(--boh-charcoal) !important;
    font-weight: 600 !important;
    line-height: 1.25 !important;
    letter-spacing: -0.025em !important;
    margin-top: 0 !important;
    font-feature-settings: 'swsh' 1, 'liga' 1 !important;
  }

  .lab-styled-preview[data-style="bohemian"] h1,
  .bohemian-styled-container h1 {
    font-size: clamp(2.35rem, 4.5vw, 3.4rem) !important;
    font-weight: 600 !important;
    line-height: 1.15 !important;
    letter-spacing: -0.035em !important;
    margin-bottom: 1.25rem !important;
  }

  .lab-styled-preview[data-style="bohemian"] h2,
  .bohemian-styled-container h2 {
    font-size: clamp(1.85rem, 3.2vw, 2.35rem) !important;
    letter-spacing: -0.025em !important;
    margin-bottom: 1rem !important;
  }

  .lab-styled-preview[data-style="bohemian"] h3,
  .bohemian-styled-container h3 {
    font-size: clamp(1.35rem, 2vw, 1.65rem) !important;
    letter-spacing: -0.015em !important;
    margin-bottom: 0.75rem !important;
  }

  .lab-styled-preview[data-style="bohemian"] h4,
  .bohemian-styled-container h4 {
    font-size: 1.15rem !important;
    font-weight: 600 !important;
    margin-bottom: 0.5rem !important;
  }

  .lab-styled-preview[data-style="bohemian"] p,
  .bohemian-styled-container p {
    color: var(--boh-charcoal-light) !important;
    line-height: 1.75 !important;
    margin-top: 0 !important;
    margin-bottom: 1.25rem !important;
    max-width: 72ch;
  }

  /* Artisanal kickers / eyebrows */
  .lab-styled-preview[data-style="bohemian"] header > span:first-child,
  .lab-styled-preview[data-style="bohemian"] .kicker,
  .bohemian-styled-container header > span:first-child,
  .bohemian-styled-container .kicker {
    font-family: var(--boh-font-accent) !important;
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    color: var(--boh-terracotta) !important;
    letter-spacing: 0.02em !important;
    display: inline-block !important;
    margin-bottom: 0.5rem !important;
    transform: rotate(-1.5deg) !important;
  }

  /* Inline emphasis */
  .lab-styled-preview[data-style="bohemian"] em,
  .lab-styled-preview[data-style="bohemian"] i,
  .bohemian-styled-container em,
  .bohemian-styled-container i {
    font-family: var(--boh-font-display) !important;
    font-style: italic !important;
    color: var(--boh-terracotta) !important;
  }

  .lab-styled-preview[data-style="bohemian"] strong,
  .lab-styled-preview[data-style="bohemian"] b,
  .bohemian-styled-container strong,
  .bohemian-styled-container b {
    color: var(--boh-charcoal) !important;
    font-weight: 600 !important;
  }

  /* ==========================================================================
     ARCHETYPE 8: NAVIGATION
     Relaxed creative studio masthead, understated wordmark, warm capsule active
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] nav,
  .bohemian-styled-container nav {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 1.15rem 1.85rem !important;
    background: var(--boh-parchment-soft) !important;
    border: 1.5px solid var(--boh-border-craft) !important;
    border-radius: 20px 28px 18px 24px !important;
    margin-bottom: 3.5rem !important;
    box-shadow: var(--boh-shadow-craft-sm) !important;
    position: relative !important;
  }

  /* Brand / Logo in Nav */
  .lab-styled-preview[data-style="bohemian"] nav > span:first-child,
  .lab-styled-preview[data-style="bohemian"] nav > a:first-child,
  .bohemian-styled-container nav > span:first-child,
  .bohemian-styled-container nav > a:first-child {
    font-family: var(--boh-font-display) !important;
    font-size: 1.35rem !important;
    font-weight: 700 !important;
    color: var(--boh-charcoal) !important;
    letter-spacing: -0.02em !important;
    text-decoration: none !important;
    display: flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
  }

  /* Terracotta artisanal dot beside wordmark */
  .lab-styled-preview[data-style="bohemian"] nav > span:first-child::after,
  .lab-styled-preview[data-style="bohemian"] nav > a:first-child::after,
  .bohemian-styled-container nav > span:first-child::after,
  .bohemian-styled-container nav > a:first-child::after {
    content: '' !important;
    display: inline-block !important;
    width: 7px !important;
    height: 7px !important;
    background: var(--boh-terracotta) !important;
    border-radius: 50% !important;
    margin-left: 2px !important;
  }

  .lab-styled-preview[data-style="bohemian"] nav ul,
  .bohemian-styled-container nav ul {
    display: flex !important;
    list-style: none !important;
    align-items: center !important;
    gap: 1.85rem !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .lab-styled-preview[data-style="bohemian"] nav a,
  .bohemian-styled-container nav a {
    font-family: var(--boh-font-body) !important;
    color: var(--boh-charcoal-light) !important;
    text-decoration: none !important;
    font-size: 0.9375rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.01em !important;
    padding: 0.45rem 0.95rem !important;
    border-radius: var(--boh-radius-pill) !important;
    transition: all 0.22s ease !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="bohemian"] nav a:hover,
  .bohemian-styled-container nav a:hover {
    color: var(--boh-terracotta) !important;
    background: var(--boh-terracotta-soft) !important;
  }

  .lab-styled-preview[data-style="bohemian"] nav a[aria-current="page"],
  .lab-styled-preview[data-style="bohemian"] nav a.active,
  .bohemian-styled-container nav a[aria-current="page"],
  .bohemian-styled-container nav a.active {
    color: var(--boh-terracotta-dark) !important;
    background: var(--boh-terracotta-soft) !important;
    font-weight: 600 !important;
  }

  /* ==========================================================================
     ARCHETYPE 1 & 8: HERO SECTION
     Opening composition with rich display serif, warm parchment field, craft CTA
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] header:not(nav header),
  .lab-styled-preview[data-style="bohemian"] section:first-of-type:not(nav + section):has(h1),
  .bohemian-styled-container header:not(nav header),
  .bohemian-styled-container section:first-of-type:not(nav + section):has(h1) {
    position: relative !important;
    padding: 3.5rem 2.75rem !important;
    background: var(--boh-surface-elevated) !important;
    border: 1.5px solid var(--boh-border-craft) !important;
    border-radius: 28px 18px 32px 20px !important;
    margin-bottom: 4rem !important;
    box-shadow: var(--boh-shadow-craft-md) !important;
    overflow: hidden !important;
  }

  /* Subtle sun-warmed decorative shape in Hero */
  .lab-styled-preview[data-style="bohemian"] header:not(nav header)::before,
  .bohemian-styled-container header:not(nav header)::before {
    content: '' !important;
    position: absolute !important;
    top: -50px !important;
    right: -40px !important;
    width: 260px !important;
    height: 260px !important;
    background: radial-gradient(circle, rgba(212, 139, 22, 0.1) 0%, rgba(200, 90, 50, 0.05) 55%, transparent 75%) !important;
    border-radius: 50% !important;
    pointer-events: none !important;
    z-index: 0 !important;
  }

  .lab-styled-preview[data-style="bohemian"] header:not(nav header) > *,
  .bohemian-styled-container header:not(nav header) > * {
    position: relative !important;
    z-index: 1 !important;
  }

  .lab-styled-preview[data-style="bohemian"] header p,
  .bohemian-styled-container header p {
    font-size: 1.15rem !important;
    color: var(--boh-charcoal-light) !important;
    line-height: 1.7 !important;
    max-width: 60ch !important;
    margin-bottom: 2rem !important;
  }

  /* ==========================================================================
     BUTTONS & TACTILE ACTIONS
     Artisanal buttons with handcrafted organic radii and warm tactile feel
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] button,
  .lab-styled-preview[data-style="bohemian"] input[type="submit"],
  .lab-styled-preview[data-style="bohemian"] .btn,
  .bohemian-styled-container button,
  .bohemian-styled-container input[type="submit"],
  .bohemian-styled-container .btn {
    font-family: var(--boh-font-body) !important;
    font-size: 0.95rem !important;
    font-weight: 600 !important;
    color: #ffffff !important;
    background-color: var(--boh-terracotta) !important;
    border: 1.5px solid var(--boh-terracotta-dark) !important;
    border-radius: 14px 22px 16px 20px !important;
    padding: 0.85rem 1.85rem !important;
    cursor: pointer !important;
    transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;
    box-shadow: 0 4px 12px rgba(200, 90, 50, 0.22), 0 1px 3px rgba(74, 56, 44, 0.08) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    letter-spacing: 0.01em !important;
    text-decoration: none !important;
  }

  .lab-styled-preview[data-style="bohemian"] button:hover,
  .lab-styled-preview[data-style="bohemian"] input[type="submit"]:hover,
  .lab-styled-preview[data-style="bohemian"] .btn:hover,
  .bohemian-styled-container button:hover,
  .bohemian-styled-container input[type="submit"]:hover,
  .bohemian-styled-container .btn:hover {
    background-color: var(--boh-terracotta-dark) !important;
    transform: translateY(-2px) rotate(-0.5deg) !important;
    box-shadow: 0 7px 18px rgba(200, 90, 50, 0.28), 0 2px 5px rgba(74, 56, 44, 0.12) !important;
  }

  .lab-styled-preview[data-style="bohemian"] button:active,
  .lab-styled-preview[data-style="bohemian"] input[type="submit"]:active,
  .bohemian-styled-container button:active,
  .bohemian-styled-container input[type="submit"]:active {
    transform: translateY(1px) !important;
    box-shadow: 0 2px 6px rgba(200, 90, 50, 0.18) !important;
  }

  /* Secondary / outline action */
  .lab-styled-preview[data-style="bohemian"] button.secondary,
  .lab-styled-preview[data-style="bohemian"] button + button,
  .bohemian-styled-container button.secondary,
  .bohemian-styled-container button + button {
    background-color: var(--boh-parchment) !important;
    color: var(--boh-charcoal) !important;
    border: 1.5px solid var(--boh-border-strong) !important;
    box-shadow: var(--boh-shadow-craft-sm) !important;
  }

  .lab-styled-preview[data-style="bohemian"] button.secondary:hover,
  .lab-styled-preview[data-style="bohemian"] button + button:hover,
  .bohemian-styled-container button.secondary:hover,
  .bohemian-styled-container button + button:hover {
    background-color: var(--boh-surface-card) !important;
    color: var(--boh-terracotta) !important;
    border-color: var(--boh-terracotta) !important;
  }

  /* ==========================================================================
     ARCHETYPE 4 & 10: CARDS & COLLECTED PRESENTATION
     Deterministic 3-tier variation across surfaces, borders, and accent marks
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] section:has(article + article),
  .lab-styled-preview[data-style="bohemian"] div:has(> article + article),
  .bohemian-styled-container section:has(article + article),
  .bohemian-styled-container div:has(> article + article) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 2rem !important;
    margin-bottom: 3.5rem !important;
  }

  /* Card Foundation */
  .lab-styled-preview[data-style="bohemian"] section article,
  .lab-styled-preview[data-style="bohemian"] div article,
  .lab-styled-preview[data-style="bohemian"] .card,
  .bohemian-styled-container section article,
  .bohemian-styled-container div article,
  .bohemian-styled-container .card {
    background: var(--boh-surface-card) !important;
    border: 1.5px solid var(--boh-border-craft) !important;
    padding: 2.25rem 2rem !important;
    box-shadow: var(--boh-shadow-craft-md) !important;
    transition: transform 0.25s ease, box-shadow 0.25s ease !important;
    position: relative !important;
    display: flex !important;
    flex-direction: column !important;
  }

  /* Variation 1: Terracotta Accent, Radius A */
  .lab-styled-preview[data-style="bohemian"] section article:nth-child(3n+1),
  .lab-styled-preview[data-style="bohemian"] div article:nth-child(3n+1),
  .lab-styled-preview[data-style="bohemian"] .card:nth-child(3n+1),
  .bohemian-styled-container section article:nth-child(3n+1),
  .bohemian-styled-container div article:nth-child(3n+1),
  .bohemian-styled-container .card:nth-child(3n+1) {
    border-radius: var(--boh-radius-card-a) !important;
    border-top: 3.5px solid var(--boh-terracotta) !important;
  }

  /* Variation 2: Deep Olive Accent, Soft Sand-Clay Tint, Radius B */
  .lab-styled-preview[data-style="bohemian"] section article:nth-child(3n+2),
  .lab-styled-preview[data-style="bohemian"] div article:nth-child(3n+2),
  .lab-styled-preview[data-style="bohemian"] .card:nth-child(3n+2),
  .bohemian-styled-container section article:nth-child(3n+2),
  .bohemian-styled-container div article:nth-child(3n+2),
  .bohemian-styled-container .card:nth-child(3n+2) {
    background: #fbf6ee !important;
    border-radius: var(--boh-radius-card-b) !important;
    border-top: 3.5px solid var(--boh-olive) !important;
  }

  /* Variation 3: Warm Mustard Ochre Accent, Radius C */
  .lab-styled-preview[data-style="bohemian"] section article:nth-child(3n),
  .lab-styled-preview[data-style="bohemian"] div article:nth-child(3n),
  .lab-styled-preview[data-style="bohemian"] .card:nth-child(3n),
  .bohemian-styled-container section article:nth-child(3n),
  .bohemian-styled-container div article:nth-child(3n),
  .bohemian-styled-container .card:nth-child(3n) {
    background: #faf4e8 !important;
    border-radius: var(--boh-radius-card-c) !important;
    border-top: 3.5px solid var(--boh-mustard) !important;
  }

  .lab-styled-preview[data-style="bohemian"] section article:hover,
  .lab-styled-preview[data-style="bohemian"] div article:hover,
  .lab-styled-preview[data-style="bohemian"] .card:hover,
  .bohemian-styled-container section article:hover,
  .bohemian-styled-container div article:hover,
  .bohemian-styled-container .card:hover {
    transform: translateY(-4px) !important;
    box-shadow: var(--boh-shadow-craft-lg) !important;
  }

  /* Card Headings */
  .lab-styled-preview[data-style="bohemian"] article h2,
  .lab-styled-preview[data-style="bohemian"] article h3,
  .lab-styled-preview[data-style="bohemian"] .card h3,
  .bohemian-styled-container article h2,
  .bohemian-styled-container article h3,
  .bohemian-styled-container .card h3 {
    font-size: 1.35rem !important;
    margin-bottom: 0.65rem !important;
  }

  /* ==========================================================================
     ARCHETYPE 3: EDITORIAL ARTICLES
     Independent cultural publishing: comfortable measure, pullquotes, NOT cardified!
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] article:only-of-type,
  .lab-styled-preview[data-style="bohemian"] main > article,
  .bohemian-styled-container article:only-of-type,
  .bohemian-styled-container main > article {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    padding: 1.5rem 0 !important;
    max-width: 720px !important;
    margin: 0 auto 4rem auto !important;
  }

  /* Article byline / metadata */
  .lab-styled-preview[data-style="bohemian"] article .byline,
  .lab-styled-preview[data-style="bohemian"] article footer,
  .bohemian-styled-container article .byline,
  .bohemian-styled-container article footer {
    font-family: var(--boh-font-accent) !important;
    font-size: 1.25rem !important;
    color: var(--boh-charcoal-muted) !important;
    border-top: 1.5px dashed var(--boh-border-craft) !important;
    padding-top: 1rem !important;
    margin-top: 2rem !important;
  }

  /* Expressive Pull Quotes */
  .lab-styled-preview[data-style="bohemian"] blockquote,
  .bohemian-styled-container blockquote {
    font-family: var(--boh-font-display) !important;
    font-size: 1.45rem !important;
    font-style: italic !important;
    line-height: 1.55 !important;
    color: var(--boh-charcoal) !important;
    background: var(--boh-parchment-soft) !important;
    border-left: 4px solid var(--boh-terracotta) !important;
    border-radius: 4px 18px 18px 4px !important;
    margin: 2.5rem 0 !important;
    padding: 1.75rem 2rem !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="bohemian"] blockquote cite,
  .bohemian-styled-container blockquote cite {
    display: block !important;
    font-family: var(--boh-font-accent) !important;
    font-size: 1.25rem !important;
    font-style: normal !important;
    font-weight: 700 !important;
    color: var(--boh-terracotta) !important;
    margin-top: 0.75rem !important;
  }

  /* Organic Dividers & Separators */
  .lab-styled-preview[data-style="bohemian"] hr,
  .bohemian-styled-container hr {
    border: none !important;
    height: 2px !important;
    background: linear-gradient(to right, transparent, var(--boh-clay), var(--boh-terracotta), var(--boh-clay), transparent) !important;
    margin: 3.5rem 0 !important;
    opacity: 0.65 !important;
  }

  /* ==========================================================================
     ARCHETYPE 2 & 13: PRICING PLANS
     Warm craft hierarchy, featured tier in rich terracotta frame, non-corporate
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] section:has([data-role="pricing-card"]),
  .bohemian-styled-container section:has([data-role="pricing-card"]) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 2rem !important;
    align-items: stretch !important;
    margin-bottom: 4rem !important;
  }

  /* Featured Pricing Card / Tier */
  .lab-styled-preview[data-style="bohemian"] article:has(.featured),
  .lab-styled-preview[data-style="bohemian"] article:nth-child(2),
  .bohemian-styled-container article:has(.featured),
  .bohemian-styled-container article:nth-child(2) {
    border: 2px solid var(--boh-terracotta) !important;
    background: #fffdf9 !important;
    box-shadow: 0 12px 32px rgba(200, 90, 50, 0.12), var(--boh-shadow-craft-md) !important;
  }

  /* Pricing Numbers / Currency */
  .lab-styled-preview[data-style="bohemian"] .price,
  .lab-styled-preview[data-style="bohemian"] article p:has(+ button),
  .bohemian-styled-container .price,
  .bohemian-styled-container article p:has(+ button) {
    font-family: var(--boh-font-display) !important;
    font-size: 2.25rem !important;
    font-weight: 700 !important;
    color: var(--boh-charcoal) !important;
    letter-spacing: -0.03em !important;
    margin-bottom: 0.5rem !important;
  }

  /* ==========================================================================
     ARCHETYPE 5 & 11: DASHBOARD & METRICS
     Warm parchment metric tiles, earthy indicators, terracotta badges, olive bars
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] [data-role="dashboard"],
  .lab-styled-preview[data-style="bohemian"] .metrics-grid,
  .bohemian-styled-container [data-role="dashboard"],
  .bohemian-styled-container .metrics-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
    gap: 1.5rem !important;
    margin-bottom: 3rem !important;
  }

  /* Metric Value Display */
  .lab-styled-preview[data-style="bohemian"] .metric-value,
  .bohemian-styled-container .metric-value {
    font-family: var(--boh-font-display) !important;
    font-size: 2.5rem !important;
    font-weight: 700 !important;
    color: var(--boh-charcoal) !important;
    line-height: 1.1 !important;
    margin: 0.5rem 0 !important;
  }

  /* Artisanal Badges & Tags */
  .lab-styled-preview[data-style="bohemian"] .badge,
  .lab-styled-preview[data-style="bohemian"] span:has(+ h3),
  .bohemian-styled-container .badge,
  .bohemian-styled-container span:has(+ h3) {
    display: inline-block !important;
    font-size: 0.785rem !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.08em !important;
    padding: 0.25rem 0.75rem !important;
    border-radius: var(--boh-radius-pill) !important;
    background: var(--boh-terracotta-soft) !important;
    color: var(--boh-terracotta-dark) !important;
    border: 1px solid rgba(200, 90, 50, 0.25) !important;
    margin-bottom: 0.75rem !important;
  }

  /* Earthy Status Indicators */
  .lab-styled-preview[data-style="bohemian"] .status-olive,
  .bohemian-styled-container .status-olive {
    background: var(--boh-olive-soft) !important;
    color: var(--boh-olive) !important;
    border-color: rgba(74, 88, 64, 0.25) !important;
  }

  .lab-styled-preview[data-style="bohemian"] .status-mustard,
  .bohemian-styled-container .status-mustard {
    background: var(--boh-mustard-soft) !important;
    color: var(--boh-mustard) !important;
    border-color: rgba(212, 139, 22, 0.25) !important;
  }

  .lab-styled-preview[data-style="bohemian"] .status-turquoise,
  .bohemian-styled-container .status-turquoise {
    background: var(--boh-turquoise-soft) !important;
    color: var(--boh-turquoise) !important;
    border-color: rgba(42, 157, 143, 0.25) !important;
  }

  /* Data Tables */
  .lab-styled-preview[data-style="bohemian"] table,
  .bohemian-styled-container table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    background: var(--boh-surface-card) !important;
    border: 1.5px solid var(--boh-border-craft) !important;
    border-radius: 18px !important;
    overflow: hidden !important;
    margin-bottom: 2.5rem !important;
    box-shadow: var(--boh-shadow-craft-sm) !important;
  }

  .lab-styled-preview[data-style="bohemian"] th,
  .bohemian-styled-container th {
    font-family: var(--boh-font-display) !important;
    font-weight: 600 !important;
    font-size: 0.95rem !important;
    color: var(--boh-charcoal) !important;
    background: var(--boh-parchment) !important;
    padding: 1rem 1.25rem !important;
    text-align: left !important;
    border-bottom: 1.5px solid var(--boh-border-craft) !important;
  }

  .lab-styled-preview[data-style="bohemian"] td,
  .bohemian-styled-container td {
    padding: 0.95rem 1.25rem !important;
    border-bottom: 1px solid var(--boh-border-craft) !important;
    color: var(--boh-charcoal-light) !important;
    font-size: 0.9375rem !important;
  }

  .lab-styled-preview[data-style="bohemian"] tr:last-child td,
  .bohemian-styled-container tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="bohemian"] tr:hover td,
  .bohemian-styled-container tr:hover td {
    background: rgba(200, 90, 50, 0.03) !important;
  }

  /* ==========================================================================
     ARCHETYPE 6 & 12: E-COMMERCE PRODUCT PRESENTATION
     Artisan shop presentation: warm product card, handcrafted specs list
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] [data-role="product-card"],
  .bohemian-styled-container [data-role="product-card"] {
    background: var(--boh-surface-card) !important;
    border: 1.5px solid var(--boh-border-craft) !important;
    border-radius: 24px 18px 26px 16px !important;
    padding: 2.5rem !important;
    box-shadow: var(--boh-shadow-craft-md) !important;
  }

  /* Product Lists with artisanal markers */
  .lab-styled-preview[data-style="bohemian"] ul:not(nav ul),
  .bohemian-styled-container ul:not(nav ul) {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="bohemian"] ul:not(nav ul) li,
  .bohemian-styled-container ul:not(nav ul) li {
    position: relative !important;
    padding-left: 1.65rem !important;
    margin-bottom: 0.65rem !important;
    color: var(--boh-charcoal-light) !important;
    line-height: 1.6 !important;
  }

  /* Terracotta handcrafted bullet marker */
  .lab-styled-preview[data-style="bohemian"] ul:not(nav ul) li::before,
  .bohemian-styled-container ul:not(nav ul) li::before {
    content: '✦' !important;
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;
    color: var(--boh-terracotta) !important;
    font-size: 0.85rem !important;
  }

  /* ==========================================================================
     ARCHETYPE 7 & 14: RESTAURANT CRAFT MENU
     Cultural food journal: expressive Fraunces headings, ink-tapered leaders
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] .menu-section,
  .bohemian-styled-container .menu-section {
    margin-bottom: 3.5rem !important;
  }

  .lab-styled-preview[data-style="bohemian"] .menu-item,
  .bohemian-styled-container .menu-item {
    display: flex !important;
    align-items: baseline !important;
    justify-content: space-between !important;
    margin-bottom: 1.25rem !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="bohemian"] .menu-item-title,
  .bohemian-styled-container .menu-item-title {
    font-family: var(--boh-font-display) !important;
    font-weight: 600 !important;
    font-size: 1.15rem !important;
    color: var(--boh-charcoal) !important;
  }

  .lab-styled-preview[data-style="bohemian"] .menu-item-price,
  .bohemian-styled-container .menu-item-price {
    font-family: var(--boh-font-display) !important;
    font-weight: 700 !important;
    font-size: 1.15rem !important;
    color: var(--boh-terracotta) !important;
    margin-left: 1rem !important;
  }

  /* ==========================================================================
     ARCHETYPE 7 & 15: FORMS & INPUTS
     Crafted human inputs with warm parchment fields and terracotta focus halo
     ========================================================================== */
  .lab-styled-preview[data-style="bohemian"] form,
  .bohemian-styled-container form {
    background: var(--boh-surface-card) !important;
    border: 1.5px solid var(--boh-border-craft) !important;
    border-radius: 24px 18px 28px 16px !important;
    padding: 2.75rem 2.25rem !important;
    box-shadow: var(--boh-shadow-craft-md) !important;
    margin-bottom: 3.5rem !important;
    max-width: 680px !important;
  }

  .lab-styled-preview[data-style="bohemian"] label,
  .bohemian-styled-container label {
    display: block !important;
    font-family: var(--boh-font-body) !important;
    font-size: 0.9rem !important;
    font-weight: 600 !important;
    color: var(--boh-charcoal) !important;
    margin-bottom: 0.5rem !important;
    letter-spacing: 0.01em !important;
  }

  .lab-styled-preview[data-style="bohemian"] input[type="text"],
  .lab-styled-preview[data-style="bohemian"] input[type="email"],
  .lab-styled-preview[data-style="bohemian"] input[type="password"],
  .lab-styled-preview[data-style="bohemian"] input[type="number"],
  .lab-styled-preview[data-style="bohemian"] input[type="search"],
  .lab-styled-preview[data-style="bohemian"] textarea,
  .lab-styled-preview[data-style="bohemian"] select,
  .bohemian-styled-container input[type="text"],
  .bohemian-styled-container input[type="email"],
  .bohemian-styled-container input[type="password"],
  .bohemian-styled-container input[type="number"],
  .bohemian-styled-container input[type="search"],
  .bohemian-styled-container textarea,
  .bohemian-styled-container select {
    width: 100% !important;
    padding: 0.85rem 1.15rem !important;
    font-family: var(--boh-font-body) !important;
    font-size: 0.95rem !important;
    color: var(--boh-charcoal) !important;
    background: var(--boh-parchment-soft) !important;
    border: 1.5px solid var(--boh-border-craft) !important;
    border-radius: 12px 18px 14px 16px !important;
    box-shadow: inset 0 1px 3px rgba(74, 56, 44, 0.04) !important;
    outline: none !important;
    transition: all 0.2s ease !important;
    margin-bottom: 1.25rem !important;
    box-sizing: border-box !important;
  }

  .lab-styled-preview[data-style="bohemian"] input:focus,
  .lab-styled-preview[data-style="bohemian"] textarea:focus,
  .lab-styled-preview[data-style="bohemian"] select:focus,
  .bohemian-styled-container input:focus,
  .bohemian-styled-container textarea:focus,
  .bohemian-styled-container select:focus {
    border-color: var(--boh-terracotta) !important;
    background: #ffffff !important;
    box-shadow: 0 0 0 3px rgba(200, 90, 50, 0.18) !important;
  }

  .lab-styled-preview[data-style="bohemian"] input::placeholder,
  .lab-styled-preview[data-style="bohemian"] textarea::placeholder,
  .bohemian-styled-container input::placeholder,
  .bohemian-styled-container textarea::placeholder {
    color: var(--boh-charcoal-muted) !important;
    font-style: italic !important;
  }

  /* ==========================================================================
     RESPONSIVE ADAPTATIONS: Tablet & Mobile
     Zero overflow, intact typography scale, responsive layout columns
     ========================================================================== */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="bohemian"],
    .bohemian-styled-container {
      padding: 2rem 1.25rem !important;
    }

    .lab-styled-preview[data-style="bohemian"] nav,
    .bohemian-styled-container nav {
      padding: 0.85rem 1.25rem !important;
      gap: 1rem !important;
      border-radius: 16px !important;
      margin-bottom: 2.5rem !important;
    }

    .lab-styled-preview[data-style="bohemian"] header:not(nav header),
    .bohemian-styled-container header:not(nav header) {
      padding: 2.25rem 1.5rem !important;
      border-radius: 20px !important;
      margin-bottom: 2.5rem !important;
    }

    .lab-styled-preview[data-style="bohemian"] h1,
    .bohemian-styled-container h1 {
      font-size: 2.15rem !important;
      line-height: 1.2 !important;
      margin-bottom: 1rem !important;
    }

    .lab-styled-preview[data-style="bohemian"] h2,
    .bohemian-styled-container h2 {
      font-size: 1.65rem !important;
    }

    .lab-styled-preview[data-style="bohemian"] section article,
    .lab-styled-preview[data-style="bohemian"] div article,
    .lab-styled-preview[data-style="bohemian"] .card,
    .bohemian-styled-container section article,
    .bohemian-styled-container div article,
    .bohemian-styled-container .card {
      padding: 1.75rem 1.5rem !important;
    }

    .lab-styled-preview[data-style="bohemian"] section:has(article + article),
    .bohemian-styled-container section:has(article + article) {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }

    .lab-styled-preview[data-style="bohemian"] form,
    .bohemian-styled-container form {
      padding: 2rem 1.25rem !important;
    }
  }

  @media (max-width: 480px) {
    .lab-styled-preview[data-style="bohemian"] nav,
    .bohemian-styled-container nav {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 0.75rem !important;
    }

    .lab-styled-preview[data-style="bohemian"] nav ul,
    .bohemian-styled-container nav ul {
      flex-wrap: wrap !important;
      gap: 0.75rem !important;
    }

    .lab-styled-preview[data-style="bohemian"] button,
    .lab-styled-preview[data-style="bohemian"] input[type="submit"],
    .bohemian-styled-container button,
    .bohemian-styled-container input[type="submit"] {
      width: 100% !important;
    }
  }
`;
