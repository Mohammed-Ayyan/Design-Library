/**
 * Editorial Design Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Editorial Design
 * is applied. Centered on journalistic information architecture, storytelling pacing,
 * authoritative editorial serif headlines, broadsheet rules, rubric metadata,
 * lede paragraphs, drop-caps, and reading comfort—preserving the user's underlying HTML
 * structure with zero DOM mutations.
 */

export const editorialDesignSemanticCss = `
  /* ==========================================================================
     EDITORIAL DESIGN — JOURNALISTIC HIERARCHY & BROADSHEET PACING
     
     Core Philosophy:
     - Information architecture, storytelling, and reading rhythm
     - Authoritative editorial serifs paired with crisp functional grotesk/sans
     - Warm newsprint paper foundation (#fbfaf7) with deep publication ink (#141413)
     - Broadsheet rules (1px hairline #e5e0d8, 2px structural rule #141413)
     - Deep editorial crimson (#991b1b) for rubrics, section marks, and story metadata
     - ZERO cardification: open story spreads, reading measures, and broadsheet dividers
     - Crisp 0px–2px geometry (NO rounded pills, NO heavy drop shadows)
     ========================================================================== */

  /* 0. Canvas Foundation: Warm Newsprint Paper */
  .lab-styled-preview[data-style="editorial-design"],
  .editorial-design-styled-container {
    background-color: #fbfaf7 !important;
    color: #141413 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.75 !important;
    box-shadow: none !important;
    position: relative !important;
    border: 1px solid #e5e0d8 !important;
    letter-spacing: 0.005em !important;
  }

  /* 1. Broadsheet Masthead Navigation: Dual Structural Rules */
  .lab-styled-preview[data-style="editorial-design"] nav,
  .editorial-design-styled-container nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.75rem;
    padding: 1.25rem 0;
    border-top: 1px solid #141413;
    border-bottom: 2px solid #141413;
    margin-bottom: 3.5rem;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="editorial-design"] nav a,
  .editorial-design-styled-container nav a {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #4b5563;
    text-decoration: none;
    padding: 0.25rem 0;
    position: relative;
    transition: color 150ms ease;
  }

  .lab-styled-preview[data-style="editorial-design"] nav a:hover,
  .editorial-design-styled-container nav a:hover {
    color: #991b1b;
    text-decoration: none;
  }

  /* Publication Masthead / First Link: Broadsheet Title */
  .lab-styled-preview[data-style="editorial-design"] nav a:first-child,
  .editorial-design-styled-container nav a:first-child {
    font-family: 'Newsreader', 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: 1.35rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #141413;
    margin-right: 1.5rem;
  }

  .lab-styled-preview[data-style="editorial-design"] nav a:first-child::before,
  .editorial-design-styled-container nav a:first-child::before {
    content: 'THE ';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    letter-spacing: 0.2em;
    color: #991b1b;
    font-weight: 800;
    vertical-align: 2px;
  }

  /* 2. Journalistic Rubric & Byline Metadata */
  .lab-styled-preview[data-style="editorial-design"] header > p:first-child,
  .lab-styled-preview[data-style="editorial-design"] section > p:first-child:not(:last-child),
  .editorial-design-styled-container header > p:first-child,
  .editorial-design-styled-container section > p:first-child:not(:last-child) {
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: #991b1b;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .lab-styled-preview[data-style="editorial-design"] header > p:first-child::before,
  .lab-styled-preview[data-style="editorial-design"] section > p:first-child:not(:last-child)::before,
  .editorial-design-styled-container header > p:first-child::before,
  .editorial-design-styled-container section > p:first-child:not(:last-child)::before {
    content: '●';
    font-size: 0.5rem;
    color: #991b1b;
  }

  /* 3. Authoritative Editorial Headlines */
  .lab-styled-preview[data-style="editorial-design"] h1,
  .editorial-design-styled-container h1 {
    font-family: 'Newsreader', 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: clamp(2.35rem, 5.6vw, 4.25rem);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.025em;
    color: #141413;
    margin-top: 0;
    margin-bottom: 1.5rem;
    max-width: 22ch;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }

  .lab-styled-preview[data-style="editorial-design"] h1 em,
  .lab-styled-preview[data-style="editorial-design"] h1 i,
  .editorial-design-styled-container h1 em,
  .editorial-design-styled-container h1 i {
    font-family: 'Newsreader', 'Playfair Display', serif;
    font-style: italic;
    font-weight: 400;
    color: #991b1b;
  }

  .lab-styled-preview[data-style="editorial-design"] h2,
  .editorial-design-styled-container h2 {
    font-family: 'Newsreader', 'Playfair Display', 'Georgia', serif;
    font-size: clamp(1.65rem, 3.4vw, 2.35rem);
    font-weight: 700;
    line-height: 1.18;
    letter-spacing: -0.015em;
    color: #141413;
    margin-top: 3.75rem;
    margin-bottom: 1.75rem;
    padding-bottom: 0.85rem;
    border-bottom: 1px solid #141413;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    overflow-wrap: break-word;
  }

  .lab-styled-preview[data-style="editorial-design"] h2::after,
  .editorial-design-styled-container h2::after {
    content: 'REPORTAGE';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.22em;
    color: #71717a;
    text-transform: uppercase;
  }

  .lab-styled-preview[data-style="editorial-design"] h3,
  .editorial-design-styled-container h3 {
    font-family: 'Newsreader', 'Playfair Display', 'Georgia', serif;
    font-size: 1.35rem;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #141413;
    margin-top: 0;
    margin-bottom: 0.65rem;
  }

  .lab-styled-preview[data-style="editorial-design"] h4,
  .editorial-design-styled-container h4 {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #4b5563;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  /* 4. Body Copy & Lede Paragraphs */
  .lab-styled-preview[data-style="editorial-design"] p,
  .editorial-design-styled-container p {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 1.03125rem;
    font-weight: 400;
    line-height: 1.78;
    color: #262626;
    margin-top: 0;
    margin-bottom: 1.5rem;
    max-width: 66ch;
  }

  /* Lede / Introductory paragraph right after main heading */
  .lab-styled-preview[data-style="editorial-design"] header h1 + p,
  .lab-styled-preview[data-style="editorial-design"] section h1 + p,
  .editorial-design-styled-container header h1 + p,
  .editorial-design-styled-container section h1 + p {
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.68;
    color: #4b5563;
    margin-bottom: 2rem;
  }

  /* 5. Crafted Editorial Buttons: Clean 2px Geometry, Press Restraint */
  .lab-styled-preview[data-style="editorial-design"] button,
  .lab-styled-preview[data-style="editorial-design"] input[type="submit"],
  .editorial-design-styled-container button,
  .editorial-design-styled-container input[type="submit"] {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 0.85rem 2.25rem;
    border-radius: 2px;
    border: 1px solid #141413;
    background-color: #141413;
    color: #fbfaf7;
    box-shadow: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    text-decoration: none;
    transition: all 160ms ease;
    position: relative;
  }

  .lab-styled-preview[data-style="editorial-design"] button:hover,
  .lab-styled-preview[data-style="editorial-design"] input[type="submit"]:hover,
  .editorial-design-styled-container button:hover,
  .editorial-design-styled-container input[type="submit"]:hover {
    background-color: #991b1b;
    border-color: #991b1b;
    color: #ffffff;
  }

  .lab-styled-preview[data-style="editorial-design"] button:active,
  .lab-styled-preview[data-style="editorial-design"] input[type="submit"]:active,
  .editorial-design-styled-container button:active,
  .editorial-design-styled-container input[type="submit"]:active {
    background-color: #7f1d1d;
  }

  /* Secondary Button: Clean Outlined Hairline */
  .lab-styled-preview[data-style="editorial-design"] button + button,
  .editorial-design-styled-container button + button {
    background-color: transparent;
    color: #141413;
    border: 1px solid #141413;
    box-shadow: none;
    margin-left: 0.85rem;
  }

  .lab-styled-preview[data-style="editorial-design"] button + button:hover,
  .editorial-design-styled-container button + button:hover {
    background-color: #f2ece2;
    border-color: #991b1b;
    color: #991b1b;
  }

  /* 6. Surfaces & Anti-Cardification: Pure Broadsheet Story Rows */
  .lab-styled-preview[data-style="editorial-design"] article,
  .editorial-design-styled-container article {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin-bottom: 2.75rem;
    position: relative;
  }

  /* Context A: Direct Standalone Editorial Article (Sample 3) */
  .lab-styled-preview[data-style="editorial-design"] > article,
  .editorial-design-styled-container > article {
    max-width: 700px;
    margin: 0 auto;
    padding: 1.5rem 0 4.5rem !important;
  }

  .lab-styled-preview[data-style="editorial-design"] > article > p:first-of-type::first-letter,
  .editorial-design-styled-container > article > p:first-of-type::first-letter {
    font-family: 'Newsreader', 'Playfair Display', serif;
    font-size: 3.6rem;
    font-weight: 700;
    float: left;
    line-height: 0.82;
    padding-right: 0.65rem;
    padding-top: 0.15rem;
    color: #141413;
  }

  /* Context B: Portfolio Selected Work (Sample 1) — Broadsheet Dispatches */
  .lab-styled-preview[data-style="editorial-design"] section > article,
  .editorial-design-styled-container section > article {
    border-bottom: 1px solid #e5e0d8 !important;
    padding: 2rem 0 2.25rem !important;
    margin-bottom: 0;
    transition: padding-left 180ms ease;
  }

  .lab-styled-preview[data-style="editorial-design"] section > article:hover,
  .editorial-design-styled-container section > article:hover {
    padding-left: 0.75rem !important;
  }

  .lab-styled-preview[data-style="editorial-design"] section > article:nth-child(3n+1)::before,
  .editorial-design-styled-container section > article:nth-child(3n+1)::before {
    content: 'DISPATCH — 01';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.22em;
    color: #991b1b;
    display: block;
    margin-bottom: 0.5rem;
  }

  .lab-styled-preview[data-style="editorial-design"] section > article:nth-child(3n+2)::before,
  .editorial-design-styled-container section > article:nth-child(3n+2)::before {
    content: 'DISPATCH — 02';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.22em;
    color: #4b5563;
    display: block;
    margin-bottom: 0.5rem;
  }

  .lab-styled-preview[data-style="editorial-design"] section > article:nth-child(3n+3)::before,
  .editorial-design-styled-container section > article:nth-child(3n+3)::before {
    content: 'DISPATCH — 03';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.22em;
    color: #71717a;
    display: block;
    margin-bottom: 0.5rem;
  }

  /* Context C: SaaS Pricing (Sample 2) & Dashboard Data (Sample 4) */
  .lab-styled-preview[data-style="editorial-design"] section > div > article,
  .editorial-design-styled-container section > div > article {
    background: #ffffff !important;
    border: 1px solid #e5e0d8 !important;
    border-radius: 2px !important;
    padding: 3rem 2rem !important;
    box-shadow: none !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: border-color 180ms ease;
  }

  .lab-styled-preview[data-style="editorial-design"] section > div > article strong,
  .editorial-design-styled-container section > div > article strong {
    font-family: 'Newsreader', 'Playfair Display', serif;
    font-size: clamp(2.2rem, 4vw, 3rem);
    font-weight: 700;
    color: #141413;
    display: block;
    margin: 1.25rem 0 1.5rem;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
  }

  /* Featured Plan: Broadsheet Crimson Top Border */
  .lab-styled-preview[data-style="editorial-design"] section > div > article:nth-child(2):has(button),
  .editorial-design-styled-container section > div > article:nth-child(2):has(button) {
    background: #ffffff !important;
    border: 1px solid #141413 !important;
    border-top: 4px solid #991b1b !important;
    position: relative;
  }

  .lab-styled-preview[data-style="editorial-design"] section > div > article:nth-child(2):has(button)::before,
  .editorial-design-styled-container section > div > article:nth-child(2):has(button)::before {
    content: 'MOST POPULAR EDITION';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.22em;
    color: #991b1b;
    display: block;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  /* Context D: Restaurant Menu as Culinary Review (Sample 6) */
  .lab-styled-preview[data-style="editorial-design"] section > article:has(ul),
  .editorial-design-styled-container section > article:has(ul) {
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid #e5e0d8 !important;
    border-radius: 0 !important;
    padding: 2.75rem 0 !important;
    box-shadow: none !important;
  }

  /* 7. Unordered & Ordered Lists: Clean Editorial Notes */
  .lab-styled-preview[data-style="editorial-design"] ul,
  .lab-styled-preview[data-style="editorial-design"] ol,
  .editorial-design-styled-container ul,
  .editorial-design-styled-container ol {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.5rem 0 !important;
  }

  .lab-styled-preview[data-style="editorial-design"] li,
  .editorial-design-styled-container li {
    position: relative;
    padding-left: 1.75rem;
    margin-bottom: 0.9rem;
    font-size: 0.9375rem;
    color: #262626;
    line-height: 1.65;
  }

  .lab-styled-preview[data-style="editorial-design"] li::before,
  .editorial-design-styled-container li::before {
    content: '§';
    position: absolute;
    left: 0;
    color: #991b1b;
    font-size: 0.8125rem;
    top: 0.1rem;
    font-family: 'Newsreader', serif;
  }

  /* Restaurant Menu Items (Sample 6) */
  .lab-styled-preview[data-style="editorial-design"] section > article ul li,
  .editorial-design-styled-container section > article ul li {
    padding-left: 0;
    margin-bottom: 1.75rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #eeebe3;
  }

  .lab-styled-preview[data-style="editorial-design"] section > article ul li::before,
  .editorial-design-styled-container section > article ul li::before {
    display: none;
  }

  .lab-styled-preview[data-style="editorial-design"] section > article ul li strong,
  .editorial-design-styled-container section > article ul li strong {
    font-family: 'Newsreader', 'Playfair Display', serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #141413;
  }

  .lab-styled-preview[data-style="editorial-design"] section > article ul li p,
  .editorial-design-styled-container section > article ul li p {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: #52525b;
    margin-top: 0.35rem;
    margin-bottom: 0;
    line-height: 1.6;
  }

  /* 8. Editorial Blockquote: Magazine Pullquote */
  .lab-styled-preview[data-style="editorial-design"] blockquote,
  .editorial-design-styled-container blockquote {
    font-family: 'Newsreader', 'Playfair Display', 'Georgia', serif;
    font-style: italic;
    font-size: 1.45rem;
    line-height: 1.65;
    color: #141413;
    background: #f7f5ef;
    border-left: 3px solid #991b1b;
    padding: 2rem 2.5rem;
    margin: 3.5rem 0;
    position: relative;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="editorial-design"] blockquote::before,
  .editorial-design-styled-container blockquote::before {
    content: '“';
    font-family: 'Newsreader', serif;
    font-size: 4.5rem;
    line-height: 0.6;
    position: absolute;
    left: 0.65rem;
    top: 1.25rem;
    color: #991b1b;
    opacity: 0.3;
    font-style: normal;
  }

  /* 9. Minimalist Form Controls: Journalistic Correspondence Form */
  .lab-styled-preview[data-style="editorial-design"] form,
  .editorial-design-styled-container form {
    max-width: 540px;
  }

  .lab-styled-preview[data-style="editorial-design"] label,
  .editorial-design-styled-container label {
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #4b5563;
    display: block;
    margin-bottom: 0.6rem;
  }

  .lab-styled-preview[data-style="editorial-design"] input,
  .lab-styled-preview[data-style="editorial-design"] select,
  .lab-styled-preview[data-style="editorial-design"] textarea,
  .editorial-design-styled-container input,
  .editorial-design-styled-container select,
  .editorial-design-styled-container textarea {
    background-color: #ffffff !important;
    border: 1px solid #d4cebe !important;
    border-radius: 2px !important;
    padding: 0.85rem 1.15rem !important;
    color: #141413 !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 0.9375rem !important;
    margin-bottom: 1.5rem !important;
    box-shadow: none !important;
    transition: border-color 160ms ease !important;
  }

  .lab-styled-preview[data-style="editorial-design"] input:focus,
  .lab-styled-preview[data-style="editorial-design"] select:focus,
  .lab-styled-preview[data-style="editorial-design"] textarea:focus,
  .editorial-design-styled-container input:focus,
  .editorial-design-styled-container select:focus,
  .editorial-design-styled-container textarea:focus {
    border-color: #991b1b !important;
    outline: none !important;
  }

  /* 10. Data Tables: Financial & Journalistic Ledger */
  .lab-styled-preview[data-style="editorial-design"] table,
  .editorial-design-styled-container table {
    width: 100% !important;
    border-collapse: collapse !important;
    margin: 2.5rem 0 !important;
    font-family: 'Inter', sans-serif !important;
    border-top: 2px solid #141413 !important;
    border-bottom: 2px solid #141413 !important;
  }

  .lab-styled-preview[data-style="editorial-design"] th,
  .editorial-design-styled-container th {
    font-family: 'Inter', sans-serif !important;
    font-size: 0.6875rem !important;
    font-weight: 800 !important;
    letter-spacing: 0.2em !important;
    text-transform: uppercase !important;
    color: #141413 !important;
    padding: 1.15rem 1rem !important;
    text-align: left !important;
    border-bottom: 1px solid #141413 !important;
    background-color: #f7f5ef !important;
  }

  .lab-styled-preview[data-style="editorial-design"] td,
  .editorial-design-styled-container td {
    padding: 1.15rem 1rem !important;
    font-size: 0.9375rem !important;
    color: #141413 !important;
    border-bottom: 1px solid #e5e0d8 !important;
    font-variant-numeric: tabular-nums !important;
  }

  .lab-styled-preview[data-style="editorial-design"] tr:hover td,
  .editorial-design-styled-container tr:hover td {
    background-color: #f4f0e6 !important;
  }

  /* 11. Broadsheet Colophon Footer */
  .lab-styled-preview[data-style="editorial-design"] footer,
  .editorial-design-styled-container footer {
    border-top: 2px solid #141413;
    padding: 4rem 0 2rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
  }

  .lab-styled-preview[data-style="editorial-design"] footer p,
  .editorial-design-styled-container footer p {
    font-family: 'Inter', sans-serif;
    font-size: 0.71875rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #71717a;
    margin: 0;
  }

  /* 12. Imagery: Broadsheet Halftone Look */
  .lab-styled-preview[data-style="editorial-design"] img,
  .editorial-design-styled-container img {
    border-radius: 0px !important;
    border: 1px solid #141413 !important;
    filter: contrast(105%) !important;
  }

  /* 13. Mobile Responsiveness */
  @media (max-width: 640px) {
    .lab-styled-preview[data-style="editorial-design"] nav,
    .editorial-design-styled-container nav {
      gap: 1rem !important;
      margin-bottom: 2.5rem !important;
    }
    .lab-styled-preview[data-style="editorial-design"] h1,
    .editorial-design-styled-container h1 {
      font-size: clamp(1.85rem, 7vw, 2.65rem) !important;
      margin-bottom: 1.25rem !important;
    }
    .lab-styled-preview[data-style="editorial-design"] h2,
    .editorial-design-styled-container h2 {
      font-size: 1.5rem !important;
      margin-top: 2.5rem !important;
    }
    .lab-styled-preview[data-style="editorial-design"] button,
    .editorial-design-styled-container button {
      width: 100% !important;
      justify-content: center !important;
    }
    .lab-styled-preview[data-style="editorial-design"] button + button,
    .editorial-design-styled-container button + button {
      margin-left: 0 !important;
      margin-top: 0.75rem !important;
    }
  }
`;
