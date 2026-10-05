export const conceptualSketchSemanticCss = `
  /* ==========================================================================
     CONCEPTUAL SKETCH — Architectural Study & Designer Notebook Visual Language
     Strict Semantic CSS Mapping: Zero DOM Wrappers, 100% User HTML Preservation
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Caveat:wght@500;700&family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

  /* Drafting Canvas: Warm Vellum Paper with Technical Graph Grid */
  .lab-styled-preview[data-style="conceptual-sketch"],
  .conceptual-sketch-styled-container {
    background-color: #faf8f3 !important;
    background-image: 
      linear-gradient(to right, rgba(180, 172, 155, 0.16) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(180, 172, 155, 0.16) 1px, transparent 1px) !important;
    background-size: 24px 24px !important;
    color: #1f2124 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    line-height: 1.7 !important;
    padding: 2.75rem !important;
    min-height: 100% !important;
    box-sizing: border-box !important;
    position: relative !important;
  }

  /* Universal Controlled Geometry */
  .lab-styled-preview[data-style="conceptual-sketch"] *,
  .conceptual-sketch-styled-container * {
    box-sizing: border-box !important;
  }

  /* 1. Navigation: Project Notebook Index */
  .lab-styled-preview[data-style="conceptual-sketch"] nav,
  .conceptual-sketch-styled-container nav {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 1.75rem !important;
    padding: 1rem 1.5rem !important;
    background: rgba(255, 255, 255, 0.85) !important;
    backdrop-filter: blur(8px) !important;
    border: 1.5px solid #2b2d31 !important;
    border-radius: 3px !important;
    box-shadow: 3px 3px 0px rgba(31, 33, 36, 0.12) !important;
    margin-bottom: 2.75rem !important;
    position: relative !important;
  }

  /* Architectural registration ticks at top-left & bottom-right */
  .lab-styled-preview[data-style="conceptual-sketch"] nav::before,
  .conceptual-sketch-styled-container nav::before {
    content: "┼ INDEX // 01" !important;
    position: absolute !important;
    top: -10px !important;
    left: 14px !important;
    background: #faf8f3 !important;
    padding: 0 8px !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.625rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
    color: #525866 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] nav a,
  .conceptual-sketch-styled-container nav a {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 600 !important;
    letter-spacing: -0.01em !important;
    color: #333740 !important;
    text-decoration: none !important;
    padding: 0.35rem 0.65rem !important;
    position: relative !important;
    transition: all 160ms ease !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] nav a:hover,
  .conceptual-sketch-styled-container nav a:hover {
    color: #2563eb !important; /* Technical Blue Pen */
    text-decoration: none !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] nav a:hover::after,
  .conceptual-sketch-styled-container nav a:hover::after {
    content: "" !important;
    position: absolute !important;
    bottom: -2px !important;
    left: 0.65rem !important;
    right: 0.65rem !important;
    height: 2px !important;
    background: #2563eb !important;
    border-radius: 1px !important;
  }

  /* First Link: Brand Titleplate */
  .lab-styled-preview[data-style="conceptual-sketch"] nav a:first-child,
  .conceptual-sketch-styled-container nav a:first-child {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 1.05rem !important;
    font-weight: 800 !important;
    letter-spacing: -0.02em !important;
    color: #1f2124 !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.45rem !important;
    padding-left: 0 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] nav a:first-child::before,
  .conceptual-sketch-styled-container nav a:first-child::before {
    content: "📐" !important;
    font-size: 0.95rem !important;
  }

  /* 2. Typographic System: Technical Grotesk + Handwritten Annotations */
  .lab-styled-preview[data-style="conceptual-sketch"] h1,
  .conceptual-sketch-styled-container h1 {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(2.15rem, 4.8vw, 3.4rem) !important;
    font-weight: 800 !important;
    line-height: 1.15 !important;
    letter-spacing: -0.035em !important;
    color: #1f2124 !important;
    margin-top: 0 !important;
    margin-bottom: 1.25rem !important;
    position: relative !important;
    display: inline-block !important;
    width: 100% !important;
    overflow-wrap: break-word !important;
    word-break: normal !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] h1::after,
  .conceptual-sketch-styled-container h1::after {
    content: "" !important;
    display: block !important;
    width: 110px !important;
    height: 3px !important;
    background: #dc2626 !important; /* Revision Red Pencil Marker */
    margin-top: 0.75rem !important;
    border-radius: 2px !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] h2,
  .conceptual-sketch-styled-container h2 {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(1.4rem, 3.2vw, 2.1rem) !important;
    font-weight: 700 !important;
    line-height: 1.25 !important;
    letter-spacing: -0.025em !important;
    color: #1f2124 !important;
    margin-top: 2.25rem !important;
    margin-bottom: 1.25rem !important;
    display: flex !important;
    align-items: center !important;
    gap: 0.65rem !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] h2::before,
  .conceptual-sketch-styled-container h2::before {
    content: "┼" !important;
    font-family: 'Inter', monospace !important;
    color: #dc2626 !important;
    font-weight: 700 !important;
    font-size: 1.15rem !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] h3,
  .conceptual-sketch-styled-container h3 {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.015em !important;
    color: #1f2124 !important;
    margin-top: 0 !important;
    margin-bottom: 0.5rem !important;
  }

  /* Eyebrows & Revision Annotation Badges */
  .lab-styled-preview[data-style="conceptual-sketch"] header > p:first-child,
  .lab-styled-preview[data-style="conceptual-sketch"] section > p:first-child,
  .conceptual-sketch-styled-container header > p:first-child,
  .conceptual-sketch-styled-container section > p:first-child {
    font-family: 'Caveat', 'Architects Daughter', cursive !important;
    font-size: 1.1rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.02em !important;
    color: #dc2626 !important; /* Revision Red */
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.45rem !important;
    background: rgba(254, 240, 138, 0.45) !important; /* Yellow Highlighter Wash */
    border-bottom: 1.5px solid #dc2626 !important;
    padding: 0.15rem 0.65rem !important;
    margin-bottom: 1rem !important;
    width: fit-content !important;
    transform: rotate(-1deg) !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] header > p:first-child::before,
  .lab-styled-preview[data-style="conceptual-sketch"] section > p:first-child::before,
  .conceptual-sketch-styled-container header > p:first-child::before,
  .conceptual-sketch-styled-container section > p:first-child::before {
    content: "✎" !important;
    font-size: 0.95rem !important;
  }

  /* Body Paragraphs: Clean Reading Comfort */
  .lab-styled-preview[data-style="conceptual-sketch"] p,
  .conceptual-sketch-styled-container p {
    font-family: 'Inter', -apple-system, sans-serif !important;
    font-size: 1rem !important;
    line-height: 1.75 !important;
    color: #3d424d !important;
    margin-top: 0 !important;
    margin-bottom: 1.25rem !important;
    max-width: 68ch !important;
  }

  /* 3. Buttons: Pinned Concept Cards & Draft Triggers */
  .lab-styled-preview[data-style="conceptual-sketch"] button,
  .lab-styled-preview[data-style="conceptual-sketch"] input[type="submit"],
  .conceptual-sketch-styled-container button,
  .conceptual-sketch-styled-container input[type="submit"] {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.01em !important;
    background: #1f2124 !important;
    color: #ffffff !important;
    border: 2px solid #1f2124 !important;
    border-radius: 4px !important;
    padding: 0.75rem 1.65rem !important;
    cursor: pointer !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    box-shadow: 3px 3px 0px rgba(31, 33, 36, 0.25) !important;
    transition: all 160ms ease !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] button::before,
  .lab-styled-preview[data-style="conceptual-sketch"] input[type="submit"]::before,
  .conceptual-sketch-styled-container button::before,
  .conceptual-sketch-styled-container input[type="submit"]::before {
    content: "→" !important;
    font-weight: 700 !important;
    font-size: 0.95rem !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] button:hover,
  .lab-styled-preview[data-style="conceptual-sketch"] input[type="submit"]:hover,
  .conceptual-sketch-styled-container button:hover,
  .conceptual-sketch-styled-container input[type="submit"]:hover {
    background: #2563eb !important; /* Blue Pen Accent */
    border-color: #2563eb !important;
    color: #ffffff !important;
    box-shadow: 4px 4px 0px rgba(37, 99, 235, 0.3) !important;
    transform: translate(-1px, -1px) !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] button:active,
  .lab-styled-preview[data-style="conceptual-sketch"] input[type="submit"]:active,
  .conceptual-sketch-styled-container button:active,
  .conceptual-sketch-styled-container input[type="submit"]:active {
    transform: translate(2px, 2px) !important;
    box-shadow: 1px 1px 0px rgba(31, 33, 36, 0.3) !important;
  }

  /* Secondary Button: Clean Outlined Study Action */
  .lab-styled-preview[data-style="conceptual-sketch"] button + button,
  .conceptual-sketch-styled-container button + button {
    background: #ffffff !important;
    color: #1f2124 !important;
    border: 2px solid #2b2d31 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] button + button:hover,
  .conceptual-sketch-styled-container button + button:hover {
    background: rgba(254, 240, 138, 0.3) !important;
    border-color: #1f2124 !important;
    color: #1f2124 !important;
  }

  /* 4. Concept Modules / Cards: Pinned Study Sheets */
  .lab-styled-preview[data-style="conceptual-sketch"] article,
  .conceptual-sketch-styled-container article {
    background: #ffffff !important;
    border: 1.5px solid #2b2d31 !important;
    border-radius: 4px !important;
    padding: 2rem !important;
    box-shadow: 4px 4px 0px rgba(31, 33, 36, 0.08) !important;
    margin-bottom: 1.75rem !important;
    position: relative !important;
    transition: all 180ms ease !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] article:hover,
  .conceptual-sketch-styled-container article:hover {
    border-color: #2563eb !important;
    box-shadow: 5px 5px 0px rgba(37, 99, 235, 0.16) !important;
    transform: translate(-1px, -1px) !important;
  }

  /* Pushpin / Tape Top Accent on Cards */
  .lab-styled-preview[data-style="conceptual-sketch"] article::before,
  .conceptual-sketch-styled-container article::before {
    content: "■ FIG." !important;
    position: absolute !important;
    top: -9px !important;
    right: 20px !important;
    background: #faf8f3 !important;
    border: 1px solid #2b2d31 !important;
    padding: 0 6px !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.5625rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
    color: #525866 !important;
  }

  /* Anti-Cardification: Pure Editorial Articles Stay Open (Design Research) */
  .lab-styled-preview[data-style="conceptual-sketch"] main > article,
  .lab-styled-preview[data-style="conceptual-sketch"] .dispatch,
  .conceptual-sketch-styled-container main > article,
  .conceptual-sketch-styled-container .dispatch {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] main > article::before,
  .lab-styled-preview[data-style="conceptual-sketch"] .dispatch::before,
  .conceptual-sketch-styled-container main > article::before,
  .conceptual-sketch-styled-container .dispatch::before {
    display: none !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] main > article:hover,
  .lab-styled-preview[data-style="conceptual-sketch"] .dispatch:hover,
  .conceptual-sketch-styled-container main > article:hover,
  .conceptual-sketch-styled-container .dispatch:hover {
    transform: none !important;
    box-shadow: none !important;
  }

  /* 5. Pullquotes: Annotated Concept Note */
  .lab-styled-preview[data-style="conceptual-sketch"] blockquote,
  .conceptual-sketch-styled-container blockquote {
    background: #ffffff !important;
    border-left: 4px solid #2563eb !important;
    border-top: 1.5px solid #2b2d31 !important;
    border-right: 1.5px solid #2b2d31 !important;
    border-bottom: 1.5px solid #2b2d31 !important;
    border-radius: 3px !important;
    padding: 1.75rem 2rem !important;
    margin: 2.25rem 0 !important;
    font-family: 'Caveat', 'Architects Daughter', cursive !important;
    font-size: 1.45rem !important;
    font-weight: 700 !important;
    line-height: 1.5 !important;
    color: #1f2124 !important;
    box-shadow: 4px 4px 0px rgba(31, 33, 36, 0.08) !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] blockquote::before,
  .conceptual-sketch-styled-container blockquote::before {
    content: "✎ KEY INSIGHT //" !important;
    display: block !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.6875rem !important;
    font-weight: 800 !important;
    letter-spacing: 0.08em !important;
    color: #2563eb !important;
    margin-bottom: 0.5rem !important;
  }

  /* 6. Multi-Column Grids (Portfolio, Metrics, Pricing) */
  .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article:nth-of-type(2)),
  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:nth-of-type(2)),
  .conceptual-sketch-styled-container section:has(> article:nth-of-type(2)),
  .conceptual-sketch-styled-container div:has(> article:nth-of-type(2)) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
    align-items: stretch !important;
    margin: 2.5rem 0 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article:nth-of-type(2)) > h2,
  .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article:nth-of-type(2)) > header,
  .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article:nth-of-type(2)) > footer,
  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:nth-of-type(2)) > h2,
  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:nth-of-type(2)) > header,
  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:nth-of-type(2)) > footer,
  .conceptual-sketch-styled-container section:has(> article:nth-of-type(2)) > h2,
  .conceptual-sketch-styled-container section:has(> article:nth-of-type(2)) > header,
  .conceptual-sketch-styled-container section:has(> article:nth-of-type(2)) > footer,
  .conceptual-sketch-styled-container div:has(> article:nth-of-type(2)) > h2,
  .conceptual-sketch-styled-container div:has(> article:nth-of-type(2)) > header,
  .conceptual-sketch-styled-container div:has(> article:nth-of-type(2)) > footer {
    grid-column: 1 / -1 !important;
    width: 100% !important;
  }

  /* 7. Pricing: Project Execution Proposals */
  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:nth-of-type(2) button),
  .conceptual-sketch-styled-container div:has(> article:nth-of-type(2) button) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
    align-items: stretch !important;
    margin: 2.5rem 0 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:nth-of-type(2) button) > article,
  .conceptual-sketch-styled-container div:has(> article:nth-of-type(2) button) > article {
    background: #ffffff !important;
    border: 1.5px solid #2b2d31 !important;
    box-shadow: 4px 4px 0px rgba(31, 33, 36, 0.08) !important;
    padding: 2.25rem !important;
  }

  /* Featured Proposal Tier (Middle Tier in 3-Tier Pricing) */
  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2),
  .conceptual-sketch-styled-container div:has(> article:nth-of-type(3) button) > article:nth-of-type(2) {
    border: 2px solid #2563eb !important;
    box-shadow: 6px 6px 0px rgba(37, 99, 235, 0.18) !important;
    position: relative !important;
    z-index: 2 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before,
  .conceptual-sketch-styled-container div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before {
    content: "★ SELECTED PROPOSAL // REV-A" !important;
    position: absolute !important;
    top: -12px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    background: #2563eb !important;
    color: #ffffff !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.625rem !important;
    font-weight: 800 !important;
    letter-spacing: 0.06em !important;
    padding: 0.25rem 0.75rem !important;
    border-radius: 2px !important;
    white-space: nowrap !important;
  }

  /* Price Treatment in Pricing Proposals */
  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:nth-of-type(2) button) strong,
  .conceptual-sketch-styled-container div:has(> article:nth-of-type(2) button) strong {
    display: block !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 2.25rem !important;
    font-weight: 800 !important;
    letter-spacing: -0.03em !important;
    color: #1f2124 !important;
    margin: 1.25rem 0 !important;
  }

  /* 8. E-Commerce: Design Study & Garment Blueprint */
  .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article):has(> section),
  .conceptual-sketch-styled-container section:has(> article):has(> section) {
    display: grid !important;
    grid-template-columns: repeat(12, 1fr) !important;
    gap: 2rem !important;
    align-items: start !important;
    margin: 2rem 0 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article):has(> section) > header,
  .conceptual-sketch-styled-container section:has(> article):has(> section) > header {
    grid-column: 1 / -1 !important;
    width: 100% !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article):has(> section) > article,
  .conceptual-sketch-styled-container section:has(> article):has(> section) > article {
    grid-column: span 7 !important;
    background: #ffffff !important;
    border: 1.5px solid #2b2d31 !important;
    box-shadow: 4px 4px 0px rgba(31, 33, 36, 0.08) !important;
    padding: 2.25rem !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article):has(> section) > section,
  .conceptual-sketch-styled-container section:has(> article):has(> section) > section {
    grid-column: span 5 !important;
    background: #ffffff !important;
    border: 1.5px solid #2b2d31 !important;
    box-shadow: 4px 4px 0px rgba(31, 33, 36, 0.08) !important;
    padding: 2rem !important;
  }

  /* Price Tag */
  .lab-styled-preview[data-style="conceptual-sketch"] article > strong,
  .conceptual-sketch-styled-container article > strong {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 1.75rem !important;
    font-weight: 800 !important;
    color: #2563eb !important; /* Technical Blue */
    display: inline-block !important;
    margin: 0.5rem 0 1rem 0 !important;
  }

  /* Size Selector Study Chips */
  .lab-styled-preview[data-style="conceptual-sketch"] article div:has(> button),
  .conceptual-sketch-styled-container article div:has(> button) {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 0.65rem !important;
    align-items: center !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] article div:has(> button) p,
  .conceptual-sketch-styled-container article div:has(> button) p {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    color: #525866 !important;
    margin: 0 0.5rem 0 0 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] article div:has(> button) button,
  .conceptual-sketch-styled-container article div:has(> button) button {
    padding: 0.45rem 0.85rem !important;
    font-size: 0.75rem !important;
    background: #faf8f3 !important;
    color: #1f2124 !important;
    border: 1.5px solid #2b2d31 !important;
    box-shadow: 2px 2px 0px rgba(31, 33, 36, 0.1) !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] article div:has(> button) button::before,
  .conceptual-sketch-styled-container article div:has(> button) button::before {
    display: none !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] article div:has(> button) button:hover,
  .conceptual-sketch-styled-container article div:has(> button) button:hover {
    background: #2563eb !important;
    color: #ffffff !important;
    border-color: #2563eb !important;
  }

  /* 9. Dashboard / Technical Working Model HUD */
  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:has(strong)),
  .conceptual-sketch-styled-container div:has(> article:has(strong)) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
    gap: 1.5rem !important;
    margin: 2.25rem 0 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:has(strong)) > article,
  .conceptual-sketch-styled-container div:has(> article:has(strong)) > article {
    background: #ffffff !important;
    border: 1.5px solid #2b2d31 !important;
    border-top: 4px solid #1f2124 !important;
    box-shadow: 3px 3px 0px rgba(31, 33, 36, 0.08) !important;
    padding: 1.75rem !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] div:has(> article:has(strong)) > article strong,
  .conceptual-sketch-styled-container div:has(> article:has(strong)) > article strong {
    display: block !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 2rem !important;
    font-weight: 800 !important;
    letter-spacing: -0.03em !important;
    color: #1f2124 !important;
    margin: 0.75rem 0 !important;
  }

  /* 10. Tables: Technical Specification Ledger */
  .lab-styled-preview[data-style="conceptual-sketch"] table,
  .conceptual-sketch-styled-container table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    border: 1.5px solid #2b2d31 !important;
    background: #ffffff !important;
    box-shadow: 4px 4px 0px rgba(31, 33, 36, 0.08) !important;
    margin: 2rem 0 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] th,
  .conceptual-sketch-styled-container th {
    background: #f4f0e6 !important;
    color: #1f2124 !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.05em !important;
    text-transform: uppercase !important;
    padding: 0.95rem 1.25rem !important;
    border-bottom: 1.5px solid #2b2d31 !important;
    border-right: 1px solid #d4cebe !important;
    text-align: left !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] th:last-child,
  .conceptual-sketch-styled-container th:last-child {
    border-right: none !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] td,
  .conceptual-sketch-styled-container td {
    padding: 0.85rem 1.25rem !important;
    border-bottom: 1px solid #e7e2d4 !important;
    border-right: 1px solid #e7e2d4 !important;
    color: #333740 !important;
    font-size: 0.9125rem !important;
    font-family: 'Inter', sans-serif !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] td:last-child,
  .conceptual-sketch-styled-container td:last-child {
    border-right: none !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] tr:last-child td,
  .conceptual-sketch-styled-container tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] tr:hover td,
  .conceptual-sketch-styled-container tr:hover td {
    background-color: #faf8f3 !important;
  }

  /* 11. Forms: Project Brief Drafting Sheet */
  .lab-styled-preview[data-style="conceptual-sketch"] form,
  .conceptual-sketch-styled-container form {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.5rem !important;
    background: #ffffff !important;
    border: 1.5px solid #2b2d31 !important;
    box-shadow: 4px 4px 0px rgba(31, 33, 36, 0.08) !important;
    padding: 2.5rem !important;
    max-width: 680px !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] label,
  .conceptual-sketch-styled-container label {
    display: block !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.04em !important;
    text-transform: uppercase !important;
    color: #1f2124 !important;
    margin-bottom: 0.5rem !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] input,
  .lab-styled-preview[data-style="conceptual-sketch"] select,
  .lab-styled-preview[data-style="conceptual-sketch"] textarea,
  .conceptual-sketch-styled-container input,
  .conceptual-sketch-styled-container select,
  .conceptual-sketch-styled-container textarea {
    background: #faf8f3 !important;
    border: 1.5px solid #2b2d31 !important;
    border-radius: 3px !important;
    padding: 0.85rem 1.15rem !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 0.9375rem !important;
    color: #1f2124 !important;
    width: 100% !important;
    box-sizing: border-box !important;
    outline: none !important;
    transition: all 140ms ease !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] input:focus,
  .lab-styled-preview[data-style="conceptual-sketch"] select:focus,
  .lab-styled-preview[data-style="conceptual-sketch"] textarea:focus,
  .conceptual-sketch-styled-container input:focus,
  .conceptual-sketch-styled-container select:focus,
  .conceptual-sketch-styled-container textarea:focus {
    border-color: #2563eb !important;
    background: #ffffff !important;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15) !important;
  }

  /* 12. Lists & Specifications */
  .lab-styled-preview[data-style="conceptual-sketch"] ul,
  .conceptual-sketch-styled-container ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] li,
  .conceptual-sketch-styled-container li {
    padding: 0.65rem 0 !important;
    border-bottom: 1px dashed #d1ccc0 !important;
    color: #3d424d !important;
    font-size: 0.9375rem !important;
    display: flex !important;
    align-items: baseline !important;
    gap: 0.65rem !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] li::before,
  .conceptual-sketch-styled-container li::before {
    content: "—" !important;
    color: #2563eb !important;
    font-weight: 700 !important;
  }

  /* 13. Restaurant Menu List Styling */
  .lab-styled-preview[data-style="conceptual-sketch"] section:has(ul:has(strong)) li,
  .conceptual-sketch-styled-container section:has(ul:has(strong)) li {
    display: block !important;
    padding: 1.15rem 0 !important;
    border-bottom: 1px dashed #c8c2b4 !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] section:has(ul:has(strong)) li strong,
  .conceptual-sketch-styled-container section:has(ul:has(strong)) li strong {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 1.05rem !important;
    font-weight: 700 !important;
    color: #1f2124 !important;
    display: inline-block !important;
    margin-right: 0.5rem !important;
  }

  .lab-styled-preview[data-style="conceptual-sketch"] section:has(ul:has(strong)) li p,
  .conceptual-sketch-styled-container section:has(ul:has(strong)) li p {
    margin-top: 0.35rem !important;
    margin-bottom: 0 !important;
    font-size: 0.9125rem !important;
    color: #525866 !important;
  }

  /* 14. Footer: Project Sign-Off / Index Notes */
  .lab-styled-preview[data-style="conceptual-sketch"] footer,
  .conceptual-sketch-styled-container footer {
    border-top: 1.5px solid #2b2d31 !important;
    padding-top: 2.25rem !important;
    margin-top: 4rem !important;
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 1.5rem !important;
    color: #525866 !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.8125rem !important;
  }

  /* 15. Responsive Collapse: Intentional Stacking */
  @media (max-width: 900px) {
    .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article):has(> section),
    .conceptual-sketch-styled-container section:has(> article):has(> section) {
      grid-template-columns: 1fr !important;
    }

    .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article):has(> section) > article,
    .lab-styled-preview[data-style="conceptual-sketch"] section:has(> article):has(> section) > section,
    .conceptual-sketch-styled-container section:has(> article):has(> section) > article,
    .conceptual-sketch-styled-container section:has(> article):has(> section) > section {
      grid-column: span 1 !important;
    }
  }

  @media (max-width: 640px) {
    .lab-styled-preview[data-style="conceptual-sketch"],
    .conceptual-sketch-styled-container {
      padding: 1.5rem !important;
    }

    .lab-styled-preview[data-style="conceptual-sketch"] h1,
    .conceptual-sketch-styled-container h1 {
      font-size: 1.85rem !important;
    }

    .lab-styled-preview[data-style="conceptual-sketch"] nav,
    .conceptual-sketch-styled-container nav {
      gap: 0.75rem !important;
      padding: 0.85rem !important;
    }

    .lab-styled-preview[data-style="conceptual-sketch"] button,
    .conceptual-sketch-styled-container button {
      width: 100% !important;
    }
  }
`;
