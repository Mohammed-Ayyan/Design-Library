/**
 * Bento Grid Semantic Stylesheet Rules
 * 
 * Defines the complete visual and compositional language for raw semantic HTML when
 * Bento Grid is applied. Centered on modular composition, intentional spatial hierarchy,
 * asymmetric balance, varied module sizing (LARGE -> MEDIUM -> SMALL), clean architectural
 * radii (18px–22px), modern neutral foundation with rich indigo accents (#4f46e5),
 * and graceful responsive stacking—preserving the user's underlying HTML structure
 * with zero DOM mutations.
 */

export const bentoGridSemanticCss = `
  /* ==========================================================================
     BENTO GRID — MODULAR COMPOSITION & SPATIAL HIERARCHY
     
     Core Philosophy:
     - Modular composition & spatial hierarchy (varied content modules)
     - Asymmetric balance: LARGE feature -> MEDIUM support -> SMALL utility
     - Modern neutral canvas (#f8fafc) with rich indigo accents (#4f46e5)
     - Consistent modern architectural radii (18px–22px for modules, 12px for controls)
     - Clean 1px structural borders (#e2e8f0) and soft contemporary depth
     - Anti-cardification: open reading content remains open; tables remain tables
     - Intentional responsive collapse into clean vertical sequences
     ========================================================================== */

  /* 0. Canvas Foundation: Modern Neutral Slate */
  .lab-styled-preview[data-style="bento-grid"],
  .bento-grid-styled-container {
    background-color: #f8fafc !important;
    background: radial-gradient(ellipse 90% 60% at 50% -10%, #ffffff 0%, #f8fafc 60%, #f1f5f9 100%) !important;
    color: #0f172a !important;
    font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.65 !important;
    position: relative !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 20px !important;
    box-shadow: 0 10px 30px -4px rgba(15, 23, 42, 0.05) !important;
    letter-spacing: -0.015em !important;
  }

  /* 1. Navigation: Elevated Clean Modular Bar */
  .lab-styled-preview[data-style="bento-grid"] nav,
  .bento-grid-styled-container nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 0.95rem 1.65rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 16px;
    box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.04);
    margin-bottom: 2.75rem;
    position: relative;
    z-index: 10;
  }

  .lab-styled-preview[data-style="bento-grid"] nav a,
  .bento-grid-styled-container nav a {
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: #475569;
    text-decoration: none;
    padding: 0.45rem 0.95rem;
    border-radius: 10px;
    transition: all 160ms ease;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .lab-styled-preview[data-style="bento-grid"] nav a:hover,
  .bento-grid-styled-container nav a:hover {
    color: #4f46e5;
    background: rgba(79, 70, 229, 0.06);
    text-decoration: none;
  }

  /* First Link: Wordmark Brand Tile */
  .lab-styled-preview[data-style="bento-grid"] nav a:first-child,
  .bento-grid-styled-container nav a:first-child {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #0f172a;
    padding-left: 0;
    background: transparent;
  }

  .lab-styled-preview[data-style="bento-grid"] nav a:first-child::before,
  .bento-grid-styled-container nav a:first-child::before {
    content: "■";
    font-size: 0.85rem;
    color: #4f46e5;
    margin-right: 0.45rem;
  }

  /* 2. Typographic Hierarchy: Modern Grotesk & Spatial Weight */
  .lab-styled-preview[data-style="bento-grid"] h1,
  .bento-grid-styled-container h1 {
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif !important;
    font-size: clamp(2.35rem, 5.2vw, 3.85rem) !important;
    font-weight: 800 !important;
    line-height: 1.1 !important;
    letter-spacing: -0.035em !important;
    color: #0f172a !important;
    margin-top: 0 !important;
    margin-bottom: 1.25rem !important;
    overflow-wrap: break-word !important;
    word-break: normal !important;
  }

  .lab-styled-preview[data-style="bento-grid"] h2,
  .bento-grid-styled-container h2 {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: clamp(1.45rem, 3.2vw, 2.15rem) !important;
    font-weight: 800 !important;
    line-height: 1.2 !important;
    letter-spacing: -0.025em !important;
    color: #0f172a !important;
    margin-top: 2rem !important;
    margin-bottom: 1.25rem !important;
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
  }

  .lab-styled-preview[data-style="bento-grid"] h2::before,
  .bento-grid-styled-container h2::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 18px;
    background: #4f46e5;
    border-radius: 3px;
  }

  .lab-styled-preview[data-style="bento-grid"] h3,
  .bento-grid-styled-container h3 {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.02em !important;
    color: #0f172a !important;
    margin-top: 0 !important;
    margin-bottom: 0.5rem !important;
  }

  /* Micro Labels & Bento Pill Badges */
  .lab-styled-preview[data-style="bento-grid"] header > p:first-child,
  .lab-styled-preview[data-style="bento-grid"] section > p:first-child,
  .bento-grid-styled-container header > p:first-child,
  .bento-grid-styled-container section > p:first-child {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.06em !important;
    text-transform: uppercase !important;
    color: #4f46e5 !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.45rem !important;
    padding: 0.35rem 0.85rem !important;
    background: rgba(79, 70, 229, 0.08) !important;
    border: 1px solid rgba(79, 70, 229, 0.18) !important;
    border-radius: 9999px !important;
    margin-bottom: 1rem !important;
    width: fit-content !important;
  }

  .lab-styled-preview[data-style="bento-grid"] header > p:first-child::before,
  .lab-styled-preview[data-style="bento-grid"] section > p:first-child::before,
  .bento-grid-styled-container header > p:first-child::before,
  .bento-grid-styled-container section > p:first-child::before {
    content: "●";
    color: #4f46e5;
    font-size: 0.65rem;
  }

  /* Body Paragraphs */
  .lab-styled-preview[data-style="bento-grid"] p,
  .bento-grid-styled-container p {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    font-size: 1rem !important;
    line-height: 1.7 !important;
    color: #475569 !important;
    margin-top: 0 !important;
    margin-bottom: 1.25rem !important;
    max-width: 68ch !important;
  }

  /* 3. Buttons: Clean Architectural Modules */
  .lab-styled-preview[data-style="bento-grid"] button,
  .lab-styled-preview[data-style="bento-grid"] input[type="submit"],
  .bento-grid-styled-container button,
  .bento-grid-styled-container input[type="submit"] {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 600 !important;
    letter-spacing: -0.01em !important;
    background: #0f172a !important;
    color: #ffffff !important;
    border: 1px solid #0f172a !important;
    border-radius: 12px !important;
    padding: 0.75rem 1.65rem !important;
    cursor: pointer !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12) !important;
    transition: all 160ms ease !important;
  }

  .lab-styled-preview[data-style="bento-grid"] button:hover,
  .lab-styled-preview[data-style="bento-grid"] input[type="submit"]:hover,
  .bento-grid-styled-container button:hover,
  .bento-grid-styled-container input[type="submit"]:hover {
    background: #4f46e5 !important;
    border-color: #4f46e5 !important;
    box-shadow: 0 6px 18px rgba(79, 70, 229, 0.28) !important;
    transform: translateY(-1px) !important;
  }

  /* Secondary Button: Clean Outlined Bento Action */
  .lab-styled-preview[data-style="bento-grid"] button + button,
  .bento-grid-styled-container button + button {
    background: #ffffff !important;
    color: #0f172a !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04) !important;
  }

  .lab-styled-preview[data-style="bento-grid"] button + button:hover,
  .bento-grid-styled-container button + button:hover {
    background: #f8fafc !important;
    border-color: #cbd5e1 !important;
    color: #0f172a !important;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08) !important;
  }

  /* 4. Spatial Hierarchy: Multi-Module Asymmetric Bento Grid */
  /* Containers with multiple articles (Portfolio, Metrics Dashboard, etc.) */
  .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(2)),
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2)),
  .bento-grid-styled-container section:has(> article:nth-of-type(2)),
  .bento-grid-styled-container div:has(> article:nth-of-type(2)) {
    display: grid !important;
    grid-template-columns: repeat(12, 1fr) !important;
    gap: 1.5rem !important;
    align-items: stretch !important;
    margin: 2.25rem 0 !important;
  }

  /* Section headers/titles/footers inside bento containers always span full width */
  .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(2)) > h2,
  .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(2)) > header,
  .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(2)) > footer,
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2)) > h2,
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2)) > header,
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2)) > footer,
  .bento-grid-styled-container section:has(> article:nth-of-type(2)) > h2,
  .bento-grid-styled-container section:has(> article:nth-of-type(2)) > header,
  .bento-grid-styled-container section:has(> article:nth-of-type(2)) > footer,
  .bento-grid-styled-container div:has(> article:nth-of-type(2)) > h2,
  .bento-grid-styled-container div:has(> article:nth-of-type(2)) > header,
  .bento-grid-styled-container div:has(> article:nth-of-type(2)) > footer {
    grid-column: 1 / -1 !important;
    width: 100% !important;
  }

  /* Bento Base Module Styling */
  .lab-styled-preview[data-style="bento-grid"] article,
  .bento-grid-styled-container article {
    background: #ffffff !important;
    border: 1px solid rgba(15, 23, 42, 0.08) !important;
    border-radius: 20px !important;
    padding: 2rem !important;
    box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04) !important;
    margin-bottom: 0 !important;
    position: relative !important;
    transition: all 180ms ease !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
  }

  .lab-styled-preview[data-style="bento-grid"] article:hover,
  .bento-grid-styled-container article:hover {
    border-color: rgba(79, 70, 229, 0.3) !important;
    box-shadow: 0 10px 28px -4px rgba(15, 23, 42, 0.08) !important;
    transform: translateY(-2px) !important;
  }

  /* Sizing Rule 1: First Article is the Dominant FEATURE Module (Span 7) */
  .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(2)) > article:nth-of-type(1),
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2)) > article:nth-of-type(1),
  .bento-grid-styled-container section:has(> article:nth-of-type(2)) > article:nth-of-type(1),
  .bento-grid-styled-container div:has(> article:nth-of-type(2)) > article:nth-of-type(1) {
    grid-column: span 7 !important;
    background: #ffffff !important;
    border-color: rgba(79, 70, 229, 0.25) !important;
    box-shadow: 0 8px 30px -4px rgba(79, 70, 229, 0.08) !important;
    padding: 2.5rem 2.25rem !important;
  }

  /* Sizing Rule 2: Second Article is the Supporting Module (Span 5) */
  .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(2)) > article:nth-of-type(2),
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2)) > article:nth-of-type(2),
  .bento-grid-styled-container section:has(> article:nth-of-type(2)) > article:nth-of-type(2),
  .bento-grid-styled-container div:has(> article:nth-of-type(2)) > article:nth-of-type(2) {
    grid-column: span 5 !important;
    background: #f8fafc !important;
    border-color: #e2e8f0 !important;
    padding: 2rem !important;
  }

  /* Sizing Rule 3: Third Article when present (Span 12 or Span 6) */
  .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(3)) > article:nth-of-type(3),
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(3)) > article:nth-of-type(3),
  .bento-grid-styled-container section:has(> article:nth-of-type(3)) > article:nth-of-type(3),
  .bento-grid-styled-container div:has(> article:nth-of-type(3)) > article:nth-of-type(3) {
    grid-column: span 6 !important;
    background: #ffffff !important;
  }

  /* Sizing Rule 4: Fourth Article when present (Span 6) */
  .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(4)) > article:nth-of-type(4),
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(4)) > article:nth-of-type(4),
  .bento-grid-styled-container section:has(> article:nth-of-type(4)) > article:nth-of-type(4),
  .bento-grid-styled-container div:has(> article:nth-of-type(4)) > article:nth-of-type(4) {
    grid-column: span 6 !important;
    background: #ffffff !important;
  }

  /* Special Case: 3 Articles total in a section (e.g. Portfolio Selected Work 1=7, 2=5, 3=12) */
  .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(3):last-of-type) > article:nth-of-type(3),
  .bento-grid-styled-container section:has(> article:nth-of-type(3):last-of-type) > article:nth-of-type(3) {
    grid-column: span 12 !important;
  }

  /* Anti-Cardification Exception: Pure Editorial Reading Articles Stay Open */
  .lab-styled-preview[data-style="bento-grid"] main > article,
  .lab-styled-preview[data-style="bento-grid"] .dispatch,
  .bento-grid-styled-container main > article,
  .bento-grid-styled-container .dispatch {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
  }

  .lab-styled-preview[data-style="bento-grid"] main > article:hover,
  .lab-styled-preview[data-style="bento-grid"] .dispatch:hover,
  .bento-grid-styled-container main > article:hover,
  .bento-grid-styled-container .dispatch:hover {
    transform: none !important;
    box-shadow: none !important;
  }

  /* 5. Pullquotes: Modular Highlight Callout */
  .lab-styled-preview[data-style="bento-grid"] blockquote,
  .bento-grid-styled-container blockquote {
    background: #f8fafc !important;
    border: 1px solid #e2e8f0 !important;
    border-left: 5px solid #4f46e5 !important;
    border-radius: 0 18px 18px 0 !important;
    padding: 1.5rem 2rem !important;
    margin: 2rem 0 !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 1.25rem !important;
    font-weight: 600 !important;
    color: #0f172a !important;
    line-height: 1.6 !important;
    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.03) !important;
    position: relative !important;
  }

  /* 6. Pricing: Asymmetric Modular Tiers */
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2) button),
  .bento-grid-styled-container div:has(> article:nth-of-type(2) button) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
    align-items: stretch !important;
    margin: 2.5rem 0 !important;
  }

  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2) button) > article,
  .bento-grid-styled-container div:has(> article:nth-of-type(2) button) > article {
    grid-column: span 1 !important;
    border-radius: 22px !important;
    background: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04) !important;
    padding: 2.25rem !important;
  }

  /* Featured Bento Pricing Plan: Elevated Middle Tier in a 3-tier layout */
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2),
  .bento-grid-styled-container div:has(> article:nth-of-type(3) button) > article:nth-of-type(2) {
    border: 2px solid #4f46e5 !important;
    background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%) !important;
    box-shadow: 0 16px 40px -4px rgba(79, 70, 229, 0.16) !important;
    transform: scale(1.03) !important;
    position: relative !important;
    z-index: 2;
  }

  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before,
  .bento-grid-styled-container div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before {
    content: "RECOMMENDED TIER";
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%);
    background: #4f46e5;
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.6875rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    padding: 0.25rem 0.85rem;
    border-radius: 9999px;
    white-space: nowrap;
  }

  /* Price Numbers in Pricing Modules */
  .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2) button) strong,
  .bento-grid-styled-container div:has(> article:nth-of-type(2) button) strong {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 2.5rem !important;
    font-weight: 800 !important;
    letter-spacing: -0.04em !important;
    color: #0f172a !important;
    font-variant-numeric: tabular-nums !important;
  }

  /* 6b. E-Commerce: Product Feature + Specifications Bento Pairing */
  .lab-styled-preview[data-style="bento-grid"] section:has(> article):has(> section),
  .bento-grid-styled-container section:has(> article):has(> section) {
    display: grid !important;
    grid-template-columns: repeat(12, 1fr) !important;
    gap: 1.75rem !important;
    align-items: start !important;
    margin: 2rem 0 !important;
  }

  .lab-styled-preview[data-style="bento-grid"] section:has(> article):has(> section) > header,
  .bento-grid-styled-container section:has(> article):has(> section) > header {
    grid-column: 1 / -1 !important;
    width: 100% !important;
  }

  .lab-styled-preview[data-style="bento-grid"] section:has(> article):has(> section) > article,
  .bento-grid-styled-container section:has(> article):has(> section) > article {
    grid-column: span 7 !important;
    background: #ffffff !important;
    border: 1px solid rgba(15, 23, 42, 0.08) !important;
    border-radius: 22px !important;
    padding: 2.5rem !important;
    box-shadow: 0 4px 24px -2px rgba(15, 23, 42, 0.05) !important;
  }

  .lab-styled-preview[data-style="bento-grid"] section:has(> article):has(> section) > section,
  .bento-grid-styled-container section:has(> article):has(> section) > section {
    grid-column: span 5 !important;
    background: #f8fafc !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 22px !important;
    padding: 2rem !important;
    box-shadow: 0 4px 18px -2px rgba(15, 23, 42, 0.03) !important;
  }

  /* 7. Dashboard & Telemetry: High-Density Modular Bento Units */
  .lab-styled-preview[data-style="bento-grid"] section:has(> table),
  .bento-grid-styled-container section:has(> table) {
    margin: 2.5rem 0 !important;
  }

  /* Primary Metric Tile: Dominant Dark Module */
  .lab-styled-preview[data-style="bento-grid"] section:has(table) ~ section:nth-of-type(1) article:first-child,
  .lab-styled-preview[data-style="bento-grid"] section:has(article:has(h3)) > article:first-child,
  .bento-grid-styled-container section:has(table) ~ section:nth-of-type(1) article:first-child,
  .bento-grid-styled-container section:has(article:has(h3)) > article:first-child {
    background: #ffffff !important;
  }

  /* 8. Tables: Disciplined Ledger Tiles */
  .lab-styled-preview[data-style="bento-grid"] table,
  .bento-grid-styled-container table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 18px !important;
    overflow: hidden !important;
    background: #ffffff !important;
    box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04) !important;
    margin: 1.5rem 0 !important;
  }

  .lab-styled-preview[data-style="bento-grid"] th,
  .bento-grid-styled-container th {
    background: #f8fafc !important;
    color: #475569 !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.04em !important;
    text-transform: uppercase !important;
    padding: 0.95rem 1.25rem !important;
    border-bottom: 1px solid #e2e8f0 !important;
    text-align: left !important;
  }

  .lab-styled-preview[data-style="bento-grid"] td,
  .bento-grid-styled-container td {
    padding: 0.95rem 1.25rem !important;
    border-bottom: 1px solid #f1f5f9 !important;
    color: #334155 !important;
    font-size: 0.875rem !important;
    font-family: 'Inter', sans-serif !important;
  }

  .lab-styled-preview[data-style="bento-grid"] tr:last-child td,
  .bento-grid-styled-container tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="bento-grid"] tr:hover td,
  .bento-grid-styled-container tr:hover td {
    background-color: #f8faff !important;
  }

  /* 9. Forms: Structured Cohesive Bento Module */
  .lab-styled-preview[data-style="bento-grid"] form,
  .bento-grid-styled-container form {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.25rem !important;
    background: #ffffff !important;
    border: 1px solid rgba(15, 23, 42, 0.08) !important;
    border-radius: 22px !important;
    padding: 2.5rem !important;
    box-shadow: 0 8px 30px -4px rgba(15, 23, 42, 0.05) !important;
    max-width: 680px !important;
  }

  .lab-styled-preview[data-style="bento-grid"] label,
  .bento-grid-styled-container label {
    display: block !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.02em !important;
    text-transform: uppercase !important;
    color: #475569 !important;
    margin-bottom: 0.4rem !important;
  }

  .lab-styled-preview[data-style="bento-grid"] input,
  .lab-styled-preview[data-style="bento-grid"] select,
  .lab-styled-preview[data-style="bento-grid"] textarea,
  .bento-grid-styled-container input,
  .bento-grid-styled-container select,
  .bento-grid-styled-container textarea {
    background: #f8fafc !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 12px !important;
    padding: 0.75rem 1.15rem !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 0.9375rem !important;
    color: #0f172a !important;
    transition: all 160ms ease !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  .lab-styled-preview[data-style="bento-grid"] input:focus,
  .lab-styled-preview[data-style="bento-grid"] select:focus,
  .lab-styled-preview[data-style="bento-grid"] textarea:focus,
  .bento-grid-styled-container input:focus,
  .bento-grid-styled-container select:focus,
  .bento-grid-styled-container textarea:focus {
    background: #ffffff !important;
    border-color: #4f46e5 !important;
    outline: none !important;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15) !important;
  }

  /* 10. Lists & Specifications */
  .lab-styled-preview[data-style="bento-grid"] ul,
  .bento-grid-styled-container ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1rem 0 !important;
  }

  .lab-styled-preview[data-style="bento-grid"] li,
  .bento-grid-styled-container li {
    padding: 0.5rem 0 !important;
    border-bottom: 1px solid #f1f5f9 !important;
    color: #475569 !important;
    font-size: 0.9375rem !important;
    display: flex !important;
    align-items: baseline !important;
    gap: 0.5rem !important;
  }

  .lab-styled-preview[data-style="bento-grid"] li::before,
  .bento-grid-styled-container li::before {
    content: "✓";
    color: #4f46e5;
    font-weight: 800;
    font-size: 0.8rem;
  }

  /* 11. Footer: Structured Modular Footer */
  .lab-styled-preview[data-style="bento-grid"] footer,
  .bento-grid-styled-container footer {
    border-top: 1px solid #e2e8f0;
    padding-top: 2.25rem;
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    color: #64748b;
    font-size: 0.8125rem;
  }

  /* 12. Responsive Collapse: Intentional Vertical Stacking */
  @media (max-width: 900px) {
    .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(2)),
    .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2)),
    .lab-styled-preview[data-style="bento-grid"] section:has(> article):has(> section),
    .bento-grid-styled-container section:has(> article:nth-of-type(2)),
    .bento-grid-styled-container div:has(> article:nth-of-type(2)),
    .bento-grid-styled-container section:has(> article):has(> section) {
      grid-template-columns: 1fr !important;
    }

    .lab-styled-preview[data-style="bento-grid"] section:has(> article:nth-of-type(2)) > article,
    .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2)) > article,
    .lab-styled-preview[data-style="bento-grid"] section:has(> article):has(> section) > article,
    .lab-styled-preview[data-style="bento-grid"] section:has(> article):has(> section) > section,
    .bento-grid-styled-container section:has(> article:nth-of-type(2)) > article,
    .bento-grid-styled-container div:has(> article:nth-of-type(2)) > article,
    .bento-grid-styled-container section:has(> article):has(> section) > article,
    .bento-grid-styled-container section:has(> article):has(> section) > section {
      grid-column: span 1 !important;
    }
  }

  @media (max-width: 640px) {
    .lab-styled-preview[data-style="bento-grid"] nav,
    .bento-grid-styled-container nav {
      border-radius: 14px !important;
      padding: 0.75rem 1rem !important;
    }

    .lab-styled-preview[data-style="bento-grid"] h1,
    .bento-grid-styled-container h1 {
      font-size: 2.15rem !important;
    }

    .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(2) button),
    .bento-grid-styled-container div:has(> article:nth-of-type(2) button) {
      grid-template-columns: 1fr !important;
    }

    .lab-styled-preview[data-style="bento-grid"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2),
    .bento-grid-styled-container div:has(> article:nth-of-type(3) button) > article:nth-of-type(2) {
      transform: none !important;
    }
  }
`;
