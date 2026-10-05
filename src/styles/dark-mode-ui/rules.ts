/**
 * Dark Mode UI Visual Design Language — Semantic CSS Rules
 *
 * Core Philosophy:
 * "A genuinely designed dark interface with layered surfaces, controlled contrast, and deliberate elevation."
 *
 * Key Characteristics:
 * - Layered dark surfaces: Base (#09090b), Surface (#111113), Elevated (#18181b), High (#222225)
 * - Subtle neutral borders (#27272a, rgba(255, 255, 255, 0.08))
 * - High-contrast glare-free typography: Near-white headings (#fafafa), calm cool gray body (#a1a1aa)
 * - Restrained professional accents (Royal blue #3b82f6 / #60a5fa, emerald, amber, rose)
 * - No excessive glow, no cyberpunk neon, no glassmorphic blur
 * - Comfortable long-session viewing and WCAG AAA compliance
 * - Direct mapping to raw semantic HTML tags
 */

export const darkModeUiSemanticCss = `
  /* ==========================================================================
     DARK MODE UI DESIGN LANGUAGE — LAYERED SURFACES & RESTRAINED CONTRAST
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

  /* --------------------------------------------------------------------------
     1. FOUNDATION & SCOPED VARIABLES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"],
  .dark-mode-ui-styled-container {
    --dark-bg-base: #09090b;       /* Deep obsidian base canvas */
    --dark-bg-surface: #111113;    /* Surface content area */
    --dark-bg-elevated: #18181b;   /* Elevated modules, cards, nav */
    --dark-bg-high: #222225;       /* Higher tier, hover, popovers */
    
    --dark-border: #27272a;        /* Subtle neutral border */
    --dark-border-subtle: rgba(255, 255, 255, 0.06);
    --dark-border-strong: #3f3f46;  /* High-emphasis border */
    
    --dark-text-primary: #fafafa;  /* Crisp near-white */
    --dark-text-secondary: #a1a1aa;/* Calm cool gray */
    --dark-text-muted: #71717a;    /* Muted labels & metadata */
    --dark-text-reading: #d4d4d8;  /* Eye-friendly editorial body */
    
    --dark-accent: #3b82f6;        /* Professional royal blue */
    --dark-accent-hover: #2563eb;
    --dark-accent-subtle: rgba(59, 130, 246, 0.12);
    --dark-accent-signal: #60a5fa;
    
    --dark-signal-emerald: #10b981;
    --dark-signal-amber: #f59e0b;
    --dark-signal-rose: #f43f5e;
    
    --dark-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.4);
    --dark-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);
    --dark-shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.65), 0 4px 10px rgba(0, 0, 0, 0.4);
    
    --dark-radius-sm: 6px;
    --dark-radius-md: 10px;
    --dark-radius-lg: 16px;
    --dark-radius-pill: 9999px;

    background-color: var(--dark-bg-base) !important;
    color: var(--dark-text-primary) !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    font-size: 1rem !important;
    line-height: 1.65 !important;
    letter-spacing: -0.01em !important;
    box-sizing: border-box !important;
    padding: 2.5rem 2rem !important;
    border-radius: var(--dark-radius-lg) !important;
    position: relative !important;
    overflow-x: hidden !important;
    border: 1px solid var(--dark-border) !important;
    box-shadow: var(--dark-shadow-lg) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] *,
  .dark-mode-ui-styled-container * {
    box-sizing: border-box;
  }

  /* --------------------------------------------------------------------------
     2. TYPOGRAPHY HIERARCHY (Controlled Contrast, Readability First)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] h1,
  .lab-styled-preview[data-style="dark-mode-ui"] h2,
  .lab-styled-preview[data-style="dark-mode-ui"] h3,
  .lab-styled-preview[data-style="dark-mode-ui"] h4,
  .lab-styled-preview[data-style="dark-mode-ui"] h5,
  .lab-styled-preview[data-style="dark-mode-ui"] h6,
  .dark-mode-ui-styled-container h1,
  .dark-mode-ui-styled-container h2,
  .dark-mode-ui-styled-container h3,
  .dark-mode-ui-styled-container h4,
  .dark-mode-ui-styled-container h5,
  .dark-mode-ui-styled-container h6 {
    font-family: 'Inter', sans-serif !important;
    color: var(--dark-text-primary) !important;
    letter-spacing: -0.025em !important;
    font-weight: 700 !important;
    line-height: 1.2 !important;
    margin-top: 0 !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] h1,
  .dark-mode-ui-styled-container h1 {
    font-size: 2.5rem !important;
    font-weight: 800 !important;
    line-height: 1.15 !important;
    letter-spacing: -0.035em !important;
    margin-bottom: 1rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] h2,
  .dark-mode-ui-styled-container h2 {
    font-size: 1.75rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.025em !important;
    margin-bottom: 0.75rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] h3,
  .dark-mode-ui-styled-container h3 {
    font-size: 1.25rem !important;
    font-weight: 600 !important;
    margin-bottom: 0.5rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] p,
  .dark-mode-ui-styled-container p {
    color: var(--dark-text-secondary) !important;
    font-size: 0.95rem !important;
    line-height: 1.65 !important;
    margin-top: 0 !important;
    margin-bottom: 1rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] strong,
  .lab-styled-preview[data-style="dark-mode-ui"] b,
  .dark-mode-ui-styled-container strong,
  .dark-mode-ui-styled-container b {
    color: var(--dark-text-primary) !important;
    font-weight: 700 !important;
  }

  /* --------------------------------------------------------------------------
     3. NAVIGATION (Calm, Professional, Elevated Dark Surface)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] nav,
  .dark-mode-ui-styled-container nav {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 0.5rem !important;
    background-color: var(--dark-bg-elevated) !important;
    border: 1px solid var(--dark-border) !important;
    border-radius: var(--dark-radius-md) !important;
    padding: 0.5rem 0.75rem !important;
    margin-bottom: 2.5rem !important;
    box-shadow: var(--dark-shadow-sm) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] nav a,
  .dark-mode-ui-styled-container nav a {
    color: var(--dark-text-secondary) !important;
    text-decoration: none !important;
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    padding: 0.45rem 0.85rem !important;
    border-radius: var(--dark-radius-sm) !important;
    border: 1px solid transparent !important;
    transition: all 150ms ease !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] nav a:hover,
  .dark-mode-ui-styled-container nav a:hover {
    color: var(--dark-text-primary) !important;
    background-color: var(--dark-bg-high) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] nav a:first-child,
  .lab-styled-preview[data-style="dark-mode-ui"] nav a[aria-current],
  .dark-mode-ui-styled-container nav a:first-child,
  .dark-mode-ui-styled-container nav a[aria-current] {
    color: var(--dark-text-primary) !important;
    background-color: var(--dark-bg-high) !important;
    border: 1px solid var(--dark-border) !important;
    font-weight: 600 !important;
  }

  /* --------------------------------------------------------------------------
     4. HERO SECTION & ACCENT KICKERS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] section:first-of-type > p:first-of-type,
  .lab-styled-preview[data-style="dark-mode-ui"] header > p:first-of-type,
  .dark-mode-ui-styled-container section:first-of-type > p:first-of-type,
  .dark-mode-ui-styled-container header > p:first-of-type {
    display: inline-flex !important;
    align-items: center !important;
    font-size: 0.75rem !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    color: var(--dark-accent-signal) !important;
    background-color: var(--dark-bg-elevated) !important;
    border: 1px solid var(--dark-border) !important;
    border-radius: var(--dark-radius-pill) !important;
    padding: 0.3rem 0.85rem !important;
    margin-bottom: 1rem !important;
    box-shadow: var(--dark-shadow-sm) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] section:first-of-type > p:nth-of-type(2),
  .dark-mode-ui-styled-container section:first-of-type > p:nth-of-type(2) {
    font-size: 1.125rem !important;
    line-height: 1.65 !important;
    color: var(--dark-text-secondary) !important;
    max-width: 650px !important;
    margin-bottom: 1.75rem !important;
  }

  /* --------------------------------------------------------------------------
     5. BUTTONS & INTERACTIVE CONTROLS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] button,
  .lab-styled-preview[data-style="dark-mode-ui"] input[type="submit"],
  .dark-mode-ui-styled-container button,
  .dark-mode-ui-styled-container input[type="submit"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 600 !important;
    padding: 0.65rem 1.4rem !important;
    border-radius: var(--dark-radius-sm) !important;
    background-color: var(--dark-accent) !important;
    color: #ffffff !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    box-shadow: var(--dark-shadow-sm) !important;
    cursor: pointer !important;
    text-decoration: none !important;
    transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] button:hover,
  .lab-styled-preview[data-style="dark-mode-ui"] input[type="submit"]:hover,
  .dark-mode-ui-styled-container button:hover,
  .dark-mode-ui-styled-container input[type="submit"]:hover {
    background-color: var(--dark-accent-hover) !important;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35) !important;
    transform: translateY(-1px) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] button:active,
  .lab-styled-preview[data-style="dark-mode-ui"] input[type="submit"]:active,
  .dark-mode-ui-styled-container button:active,
  .dark-mode-ui-styled-container input[type="submit"]:active {
    transform: translateY(0) !important;
    box-shadow: var(--dark-shadow-sm) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] button:focus-visible,
  .lab-styled-preview[data-style="dark-mode-ui"] input[type="submit"]:focus-visible,
  .dark-mode-ui-styled-container button:focus-visible,
  .dark-mode-ui-styled-container input[type="submit"]:focus-visible {
    outline: none !important;
    box-shadow: 0 0 0 2px var(--dark-bg-base), 0 0 0 4px var(--dark-accent) !important;
  }

  /* Secondary button styling (in option lists, size selectors, etc.) */
  .lab-styled-preview[data-style="dark-mode-ui"] article > div:has(button) button,
  .dark-mode-ui-styled-container article > div:has(button) button {
    background-color: var(--dark-bg-elevated) !important;
    color: var(--dark-text-secondary) !important;
    border: 1px solid var(--dark-border) !important;
    box-shadow: none !important;
    padding: 0.45rem 0.95rem !important;
    margin-right: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    font-size: 0.8125rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] article > div:has(button) button:hover,
  .dark-mode-ui-styled-container article > div:has(button) button:hover {
    background-color: var(--dark-bg-high) !important;
    color: var(--dark-text-primary) !important;
    border-color: var(--dark-border-strong) !important;
    transform: translateY(-1px) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] article > div:has(button) button:first-of-type,
  .dark-mode-ui-styled-container article > div:has(button) button:first-of-type {
    background-color: var(--dark-bg-high) !important;
    color: var(--dark-accent-signal) !important;
    border-color: var(--dark-accent) !important;
    font-weight: 700 !important;
  }

  /* --------------------------------------------------------------------------
     6. CARDS & ELEVATED CONTENT MODULES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] article,
  .lab-styled-preview[data-style="dark-mode-ui"] .card,
  .dark-mode-ui-styled-container article,
  .dark-mode-ui-styled-container .card {
    background-color: var(--dark-bg-elevated) !important;
    border: 1px solid var(--dark-border) !important;
    border-radius: var(--dark-radius-md) !important;
    padding: 1.5rem !important;
    box-shadow: var(--dark-shadow-sm) !important;
    margin-bottom: 1.25rem !important;
    transition: border-color 150ms ease, box-shadow 150ms ease !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] article:hover,
  .lab-styled-preview[data-style="dark-mode-ui"] .card:hover,
  .dark-mode-ui-styled-container article:hover,
  .dark-mode-ui-styled-container .card:hover {
    border-color: var(--dark-border-strong) !important;
    box-shadow: var(--dark-shadow-md) !important;
  }

  /* Grid layout for multi-card sections */
  .lab-styled-preview[data-style="dark-mode-ui"] section:has(> article:nth-of-type(2)),
  .lab-styled-preview[data-style="dark-mode-ui"] section:has(> div > article:nth-of-type(2)) > div,
  .dark-mode-ui-styled-container section:has(> article:nth-of-type(2)),
  .dark-mode-ui-styled-container section:has(> div > article:nth-of-type(2)) > div {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.25rem !important;
    margin-top: 1.5rem !important;
    margin-bottom: 2.5rem !important;
  }

  /* --------------------------------------------------------------------------
     7. SAAS PRICING TIERS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] section:has(article:has(strong:has-text('$'))),
  .dark-mode-ui-styled-container section:has(article:has(strong:has-text('$'))) {
    margin-bottom: 3rem !important;
  }

  /* Featured pricing tier (middle card elevation) */
  .lab-styled-preview[data-style="dark-mode-ui"] section:has(article:nth-of-type(3)) article:nth-of-type(2),
  .dark-mode-ui-styled-container section:has(article:nth-of-type(3)) article:nth-of-type(2) {
    background-color: #1a1a22 !important;
    border: 1px solid var(--dark-accent) !important;
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15) !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] article strong,
  .dark-mode-ui-styled-container article strong {
    display: block !important;
    font-size: 1.75rem !important;
    font-weight: 800 !important;
    color: var(--dark-text-primary) !important;
    letter-spacing: -0.03em !important;
    margin: 1rem 0 !important;
  }

  /* --------------------------------------------------------------------------
     8. EDITORIAL ARTICLES (Glare-Free, Un-Cardified 720px Reading Measure)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] > article:only-child,
  .dark-mode-ui-styled-container > article:only-child {
    max-width: 720px !important;
    margin: 0 auto !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] > article:only-child p,
  .dark-mode-ui-styled-container > article:only-child p {
    color: var(--dark-text-reading) !important;
    font-size: 1.0625rem !important;
    line-height: 1.75 !important;
    margin-bottom: 1.5rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] blockquote,
  .dark-mode-ui-styled-container blockquote {
    background-color: var(--dark-bg-surface) !important;
    border: 1px solid var(--dark-border) !important;
    border-left: 3px solid var(--dark-accent) !important;
    border-radius: 0 var(--dark-radius-sm) var(--dark-radius-sm) 0 !important;
    padding: 1.5rem 1.75rem !important;
    margin: 2.25rem 0 !important;
    font-style: italic !important;
    font-size: 1.125rem !important;
    line-height: 1.65 !important;
    color: var(--dark-text-primary) !important;
    box-shadow: var(--dark-shadow-sm) !important;
  }

  /* --------------------------------------------------------------------------
     9. DASHBOARD TELEMETRY & METRICS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] section:has(table) > div > article,
  .dark-mode-ui-styled-container section:has(table) > div > article {
    background-color: var(--dark-bg-elevated) !important;
    border: 1px solid var(--dark-border) !important;
    border-radius: var(--dark-radius-md) !important;
    padding: 1.25rem 1.5rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] section:has(table) > div > article h3,
  .dark-mode-ui-styled-container section:has(table) > div > article h3 {
    font-size: 0.75rem !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    color: var(--dark-text-muted) !important;
    margin-bottom: 0.4rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] section:has(table) > div > article strong,
  .dark-mode-ui-styled-container section:has(table) > div > article strong {
    font-size: 2rem !important;
    font-weight: 800 !important;
    color: var(--dark-text-primary) !important;
    font-variant-numeric: tabular-nums !important;
    letter-spacing: -0.03em !important;
    display: block !important;
    margin: 0.25rem 0 0.4rem !important;
  }

  /* --------------------------------------------------------------------------
     10. TABLES (Crisp Rules, Strong Headers, Tabular Precision)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] table,
  .dark-mode-ui-styled-container table {
    width: 100% !important;
    border-collapse: collapse !important;
    background-color: var(--dark-bg-surface) !important;
    border: 1px solid var(--dark-border) !important;
    border-radius: var(--dark-radius-md) !important;
    overflow: hidden !important;
    margin: 1.75rem 0 !important;
    box-shadow: var(--dark-shadow-sm) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] thead,
  .dark-mode-ui-styled-container thead {
    background-color: var(--dark-bg-elevated) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] th,
  .dark-mode-ui-styled-container th {
    color: var(--dark-text-secondary) !important;
    font-size: 0.75rem !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    padding: 0.85rem 1rem !important;
    text-align: left !important;
    border-bottom: 1px solid var(--dark-border) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] td,
  .dark-mode-ui-styled-container td {
    padding: 0.85rem 1rem !important;
    color: var(--dark-text-primary) !important;
    font-size: 0.875rem !important;
    border-bottom: 1px solid var(--dark-border-subtle) !important;
    font-variant-numeric: tabular-nums !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] tbody tr:last-child td,
  .dark-mode-ui-styled-container tbody tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] tbody tr:hover,
  .dark-mode-ui-styled-container tbody tr:hover {
    background-color: var(--dark-bg-elevated) !important;
  }

  /* --------------------------------------------------------------------------
     11. FORMS & INPUTS (Recessed/Dark Surfaces with High Contrast)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] form,
  .dark-mode-ui-styled-container form {
    background-color: var(--dark-bg-elevated) !important;
    border: 1px solid var(--dark-border) !important;
    border-radius: var(--dark-radius-lg) !important;
    padding: 2rem !important;
    max-width: 600px !important;
    box-shadow: var(--dark-shadow-sm) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] form > div,
  .dark-mode-ui-styled-container form > div {
    margin-bottom: 1.25rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] label,
  .dark-mode-ui-styled-container label {
    display: block !important;
    font-size: 0.8125rem !important;
    font-weight: 500 !important;
    color: var(--dark-text-primary) !important;
    margin-bottom: 0.4rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] input,
  .lab-styled-preview[data-style="dark-mode-ui"] select,
  .lab-styled-preview[data-style="dark-mode-ui"] textarea,
  .dark-mode-ui-styled-container input,
  .dark-mode-ui-styled-container select,
  .dark-mode-ui-styled-container textarea {
    background-color: var(--dark-bg-surface) !important;
    color: var(--dark-text-primary) !important;
    border: 1px solid var(--dark-border) !important;
    border-radius: var(--dark-radius-sm) !important;
    padding: 0.65rem 0.85rem !important;
    font-size: 0.875rem !important;
    font-family: 'Inter', sans-serif !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    transition: border-color 150ms ease, box-shadow 150ms ease !important;
    margin-bottom: 0.25rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] input:focus,
  .lab-styled-preview[data-style="dark-mode-ui"] select:focus,
  .lab-styled-preview[data-style="dark-mode-ui"] textarea:focus,
  .dark-mode-ui-styled-container input:focus,
  .dark-mode-ui-styled-container select:focus,
  .dark-mode-ui-styled-container textarea:focus {
    outline: none !important;
    border-color: var(--dark-accent) !important;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25) !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] input::placeholder,
  .lab-styled-preview[data-style="dark-mode-ui"] textarea::placeholder,
  .dark-mode-ui-styled-container input::placeholder,
  .dark-mode-ui-styled-container textarea::placeholder {
    color: var(--dark-text-muted) !important;
    opacity: 0.8 !important;
  }

  /* --------------------------------------------------------------------------
     12. LISTS & SPECIFICATIONS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] ul,
  .dark-mode-ui-styled-container ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1rem 0 !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] li,
  .dark-mode-ui-styled-container li {
    padding: 0.65rem 0 !important;
    border-bottom: 1px solid var(--dark-border-subtle) !important;
    color: var(--dark-text-secondary) !important;
    font-size: 0.875rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] li:last-child,
  .dark-mode-ui-styled-container li:last-child {
    border-bottom: none !important;
  }

  /* --------------------------------------------------------------------------
     13. FOOTER
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="dark-mode-ui"] footer,
  .dark-mode-ui-styled-container footer {
    border-top: 1px solid var(--dark-border) !important;
    margin-top: 3.5rem !important;
    padding-top: 1.5rem !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    flex-wrap: wrap !important;
    gap: 1rem !important;
  }

  .lab-styled-preview[data-style="dark-mode-ui"] footer p,
  .dark-mode-ui-styled-container footer p {
    color: var(--dark-text-muted) !important;
    font-size: 0.8125rem !important;
    margin: 0 !important;
  }

  /* --------------------------------------------------------------------------
     14. RESPONSIVE BREAKPOINTS & ACCESSIBILITY
     -------------------------------------------------------------------------- */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="dark-mode-ui"],
    .dark-mode-ui-styled-container {
      padding: 1.5rem 1rem !important;
    }

    .lab-styled-preview[data-style="dark-mode-ui"] h1,
    .dark-mode-ui-styled-container h1 {
      font-size: 1.85rem !important;
    }

    .lab-styled-preview[data-style="dark-mode-ui"] h2,
    .dark-mode-ui-styled-container h2 {
      font-size: 1.35rem !important;
    }

    .lab-styled-preview[data-style="dark-mode-ui"] nav,
    .dark-mode-ui-styled-container nav {
      gap: 0.35rem !important;
      padding: 0.35rem !important;
    }

    .lab-styled-preview[data-style="dark-mode-ui"] section:has(> article:nth-of-type(2)),
    .lab-styled-preview[data-style="dark-mode-ui"] section:has(> div > article:nth-of-type(2)) > div,
    .dark-mode-ui-styled-container section:has(> article:nth-of-type(2)),
    .dark-mode-ui-styled-container section:has(> div > article:nth-of-type(2)) > div {
      grid-template-columns: 1fr !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .lab-styled-preview[data-style="dark-mode-ui"] *,
    .dark-mode-ui-styled-container * {
      transition: none !important;
      animation: none !important;
      transform: none !important;
    }
  }
`;
