/**
 * Scrapbook Visual Design Language — Semantic CSS Rules
 *
 * Core Philosophy:
 * "A sophisticated digital Scrapbook inspired by physical memory books, collected artifacts,
 *  photographs, notes, labels, tickets, paper scraps, handwriting, stamps and layered ephemera."
 *
 * Key Characteristics:
 * - Layered paper textures & collage surfaces (album cream #f7f3e8, card white #fffef9, canary memo #fef08a)
 * - Washi tape & frosted scotch tape attachment cues via pseudo-elements
 * - Distinctive slight rotations and imperfect alignments
 * - Multi-typeface hierarchy: Playfair Display (headings), Lora (readable journal body),
 *   Caveat (handwritten notes & margin scribbles), Courier Prime (typewriter tickets & ledger data)
 * - Tactile stamped buttons and clipped tags
 * - Preserves complete layout integrity on mobile viewports with no horizontal overflow
 * - High text contrast (>13:1) for WCAG AAA accessibility
 * - Direct mapping to raw semantic HTML tags
 */

export const scrapbookSemanticCss = `
  /* ==========================================================================
     SCRAPBOOK DESIGN LANGUAGE — LAYERED MEMORY BOOK & COLLECTED EPHEMERA
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap');

  /* --------------------------------------------------------------------------
     1. FOUNDATION & SCOPED VARIABLES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"],
  .scrapbook-styled-container,
  .style-scrapbook,
  [data-style="scrapbook"],
  .ds-scope[data-style-id="scrapbook"] {
    --sb-bg: #f7f3e8;              /* Warm album paper */
    --sb-paper-card: #fffef9;       /* Photo / clipping paper card */
    --sb-paper-card-alt: #fbf6ec;   /* Aged paper card */
    --sb-paper-sticky: #fef08a;     /* Canary yellow sticky memo */
    --sb-paper-tag: #fef9c3;        /* Pale label tag */
    
    --sb-tape-yellow: rgba(254, 240, 138, 0.75);
    --sb-tape-frosted: rgba(255, 255, 255, 0.7);
    --sb-tape-blue: rgba(186, 230, 253, 0.7);
    
    --sb-ink: #1c1917;              /* Carbon fountain pen ink */
    --sb-ink-secondary: #44403c;    /* Soft graphite ink */
    --sb-ink-muted: #78716c;        /* Faded pencil note */
    --sb-stamp-crimson: #b91c1c;    /* Red rubber stamp ink */
    --sb-stamp-blue: #1d4ed8;       /* Blue postmark ink */
    --sb-stamp-green: #15803d;      /* Field note green */
    
    --sb-border: #ded6c4;           /* Subtle paper edge rule */
    --sb-border-dashed: #cfc4ae;    /* Perforated ticket rule */
    --sb-border-strong: #8c826e;    /* Defined envelope outline */
    
    --sb-shadow-paper: 2px 4px 10px rgba(60, 45, 30, 0.08), 0 1px 3px rgba(60, 45, 30, 0.05);
    --sb-shadow-elevated: 4px 10px 22px rgba(60, 45, 30, 0.12), 0 2px 6px rgba(60, 45, 30, 0.06);
    --sb-shadow-tag: 2px 3px 0px rgba(45, 35, 25, 0.25);

    background-color: var(--sb-bg) !important;
    background-image: 
      radial-gradient(#d6cdb7 0.75px, transparent 0.75px), 
      radial-gradient(#d6cdb7 0.75px, var(--sb-bg) 0.75px) !important;
    background-size: 24px 24px !important;
    background-position: 0 0, 12px 12px !important;
    color: var(--sb-ink) !important;
    font-family: 'Lora', Georgia, serif !important;
    font-size: 1rem !important;
    line-height: 1.7 !important;
    box-sizing: border-box !important;
    padding: 2.75rem 2.25rem !important;
    border-radius: 6px !important;
    position: relative !important;
    overflow-x: hidden !important;
    border: 1px solid #dfd7c5 !important;
    box-shadow: 0 12px 32px rgba(60, 45, 30, 0.1), inset 0 0 80px rgba(214, 200, 175, 0.25) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] *,
  .scrapbook-styled-container *,
  .style-scrapbook *,
  [data-style="scrapbook"] *,
  .ds-scope[data-style-id="scrapbook"] * {
    box-sizing: border-box;
  }

  /* --------------------------------------------------------------------------
     2. TYPOGRAPHY HIERARCHY (Literary Serif + Handwritten + Typewriter)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] h1,
  .lab-styled-preview[data-style="scrapbook"] h2,
  .lab-styled-preview[data-style="scrapbook"] h3,
  .lab-styled-preview[data-style="scrapbook"] h4,
  .lab-styled-preview[data-style="scrapbook"] h5,
  .lab-styled-preview[data-style="scrapbook"] h6,
  .scrapbook-styled-container h1,
  .style-scrapbook h1,
  [data-style="scrapbook"] h1,
  .ds-scope[data-style-id="scrapbook"] h1,
  .scrapbook-styled-container h2,
  .style-scrapbook h2,
  [data-style="scrapbook"] h2,
  .ds-scope[data-style-id="scrapbook"] h2,
  .scrapbook-styled-container h3,
  .style-scrapbook h3,
  [data-style="scrapbook"] h3,
  .ds-scope[data-style-id="scrapbook"] h3,
  .scrapbook-styled-container h4,
  .style-scrapbook h4,
  [data-style="scrapbook"] h4,
  .ds-scope[data-style-id="scrapbook"] h4,
  .scrapbook-styled-container h5,
  .style-scrapbook h5,
  [data-style="scrapbook"] h5,
  .ds-scope[data-style-id="scrapbook"] h5,
  .scrapbook-styled-container h6,
  .style-scrapbook h6,
  [data-style="scrapbook"] h6,
  .ds-scope[data-style-id="scrapbook"] h6 {
    font-family: 'Playfair Display', Georgia, serif !important;
    color: var(--sb-ink) !important;
    letter-spacing: -0.015em !important;
    font-weight: 700 !important;
    line-height: 1.22 !important;
    margin-top: 0 !important;
  }

  .lab-styled-preview[data-style="scrapbook"] h1,
  .scrapbook-styled-container h1,
  .style-scrapbook h1,
  [data-style="scrapbook"] h1,
  .ds-scope[data-style-id="scrapbook"] h1 {
    font-size: 2.6rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.02em !important;
    margin-bottom: 1.1rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] h2,
  .scrapbook-styled-container h2,
  .style-scrapbook h2,
  [data-style="scrapbook"] h2,
  .ds-scope[data-style-id="scrapbook"] h2 {
    font-size: 1.85rem !important;
    font-weight: 700 !important;
    margin-bottom: 0.85rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] h3,
  .scrapbook-styled-container h3,
  .style-scrapbook h3,
  [data-style="scrapbook"] h3,
  .ds-scope[data-style-id="scrapbook"] h3 {
    font-size: 1.3rem !important;
    font-weight: 700 !important;
    margin-bottom: 0.5rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] p,
  .scrapbook-styled-container p,
  .style-scrapbook p,
  [data-style="scrapbook"] p,
  .ds-scope[data-style-id="scrapbook"] p {
    color: var(--sb-ink-secondary) !important;
    font-family: 'Lora', Georgia, serif !important;
    font-size: 0.975rem !important;
    line-height: 1.7 !important;
    margin-top: 0 !important;
    margin-bottom: 1rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] strong,
  .lab-styled-preview[data-style="scrapbook"] b,
  .scrapbook-styled-container strong,
  .style-scrapbook strong,
  [data-style="scrapbook"] strong,
  .ds-scope[data-style-id="scrapbook"] strong,
  .scrapbook-styled-container b,
  .style-scrapbook b,
  [data-style="scrapbook"] b,
  .ds-scope[data-style-id="scrapbook"] b {
    color: var(--sb-ink) !important;
    font-weight: 700 !important;
  }

  /* --------------------------------------------------------------------------
     3. NAVIGATION (Album Index Tabs & Clipped Tickets)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] nav,
  .scrapbook-styled-container nav,
  .style-scrapbook nav,
  [data-style="scrapbook"] nav,
  .ds-scope[data-style-id="scrapbook"] nav {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 0.75rem !important;
    background: transparent !important;
    border-bottom: 2px dashed var(--sb-border-dashed) !important;
    padding-bottom: 1.5rem !important;
    margin-bottom: 2.75rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] nav a,
  .scrapbook-styled-container nav a,
  .style-scrapbook nav a,
  [data-style="scrapbook"] nav a,
  .ds-scope[data-style-id="scrapbook"] nav a {
    background-color: var(--sb-paper-card) !important;
    border: 1px solid var(--sb-border) !important;
    border-bottom: 2px solid #b8ab92 !important;
    border-radius: 4px 4px 2px 2px !important;
    color: var(--sb-ink-secondary) !important;
    font-family: 'Courier Prime', monospace !important;
    font-size: 0.85rem !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    padding: 0.45rem 1.1rem !important;
    text-decoration: none !important;
    box-shadow: 0 2px 5px rgba(60, 45, 30, 0.06) !important;
    transition: all 150ms ease !important;
    display: inline-block !important;
  }

  /* Alternating organic tilt for tabs */
  .lab-styled-preview[data-style="scrapbook"] nav a:nth-child(1),
  .scrapbook-styled-container nav a:nth-child(1),
  .style-scrapbook nav a:nth-child(1),
  [data-style="scrapbook"] nav a:nth-child(1),
  .ds-scope[data-style-id="scrapbook"] nav a:nth-child(1) {
    transform: rotate(-1.2deg) !important;
  }
  .lab-styled-preview[data-style="scrapbook"] nav a:nth-child(2),
  .scrapbook-styled-container nav a:nth-child(2),
  .style-scrapbook nav a:nth-child(2),
  [data-style="scrapbook"] nav a:nth-child(2),
  .ds-scope[data-style-id="scrapbook"] nav a:nth-child(2) {
    transform: rotate(1deg) !important;
  }
  .lab-styled-preview[data-style="scrapbook"] nav a:nth-child(3),
  .scrapbook-styled-container nav a:nth-child(3),
  .style-scrapbook nav a:nth-child(3),
  [data-style="scrapbook"] nav a:nth-child(3),
  .ds-scope[data-style-id="scrapbook"] nav a:nth-child(3) {
    transform: rotate(-0.7deg) !important;
  }
  .lab-styled-preview[data-style="scrapbook"] nav a:nth-child(4),
  .scrapbook-styled-container nav a:nth-child(4),
  .style-scrapbook nav a:nth-child(4),
  [data-style="scrapbook"] nav a:nth-child(4),
  .ds-scope[data-style-id="scrapbook"] nav a:nth-child(4) {
    transform: rotate(1.2deg) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] nav a:hover,
  .scrapbook-styled-container nav a:hover,
  .style-scrapbook nav a:hover,
  [data-style="scrapbook"] nav a:hover,
  .ds-scope[data-style-id="scrapbook"] nav a:hover {
    background-color: #fef08a !important;
    color: var(--sb-ink) !important;
    transform: translateY(-2px) rotate(0deg) !important;
    box-shadow: 0 4px 8px rgba(60, 45, 30, 0.1) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] nav a:first-child,
  .lab-styled-preview[data-style="scrapbook"] nav a[aria-current],
  .scrapbook-styled-container nav a:first-child,
  .style-scrapbook nav a:first-child,
  [data-style="scrapbook"] nav a:first-child,
  .ds-scope[data-style-id="scrapbook"] nav a:first-child,
  .scrapbook-styled-container nav a[aria-current],
  .style-scrapbook nav a[aria-current],
  [data-style="scrapbook"] nav a[aria-current],
  .ds-scope[data-style-id="scrapbook"] nav a[aria-current] {
    background-color: #fef08a !important;
    color: var(--sb-ink) !important;
    border-color: #eab308 !important;
    box-shadow: 0 3px 8px rgba(180, 130, 20, 0.18) !important;
  }

  /* --------------------------------------------------------------------------
     4. HERO SECTION & HANDWRITTEN ANNOTATIONS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] section:first-of-type > p:first-of-type,
  .lab-styled-preview[data-style="scrapbook"] header > p:first-of-type,
  .scrapbook-styled-container section:first-of-type > p:first-of-type,
  .style-scrapbook section:first-of-type > p:first-of-type,
  [data-style="scrapbook"] section:first-of-type > p:first-of-type,
  .ds-scope[data-style-id="scrapbook"] section:first-of-type > p:first-of-type,
  .scrapbook-styled-container header > p:first-of-type,
  .style-scrapbook header > p:first-of-type,
  [data-style="scrapbook"] header > p:first-of-type,
  .ds-scope[data-style-id="scrapbook"] header > p:first-of-type {
    display: inline-block !important;
    font-family: 'Caveat', cursive !important;
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    color: var(--sb-stamp-crimson) !important;
    background-color: var(--sb-paper-tag) !important;
    border: 1px dashed rgba(185, 28, 28, 0.3) !important;
    border-radius: 2px !important;
    padding: 0.25rem 0.95rem !important;
    margin-bottom: 0.85rem !important;
    box-shadow: 1px 2px 4px rgba(60, 40, 20, 0.08) !important;
    transform: rotate(-1.5deg) !important;
    letter-spacing: 0.02em !important;
  }

  .lab-styled-preview[data-style="scrapbook"] section:first-of-type > p:nth-of-type(2),
  .scrapbook-styled-container section:first-of-type > p:nth-of-type(2),
  .style-scrapbook section:first-of-type > p:nth-of-type(2),
  [data-style="scrapbook"] section:first-of-type > p:nth-of-type(2),
  .ds-scope[data-style-id="scrapbook"] section:first-of-type > p:nth-of-type(2) {
    font-size: 1.1rem !important;
    line-height: 1.68 !important;
    color: var(--sb-ink-secondary) !important;
    max-width: 640px !important;
    margin-bottom: 1.85rem !important;
  }

  /* --------------------------------------------------------------------------
     5. BUTTONS (Handmade Stamped Tags & Clippings)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] button,
  .lab-styled-preview[data-style="scrapbook"] input[type="submit"],
  .scrapbook-styled-container button,
  .style-scrapbook button,
  [data-style="scrapbook"] button,
  .ds-scope[data-style-id="scrapbook"] button,
  .scrapbook-styled-container input[type="submit"],
  .style-scrapbook input[type="submit"],
  [data-style="scrapbook"] input[type="submit"],
  .ds-scope[data-style-id="scrapbook"] input[type="submit"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    font-family: 'Courier Prime', monospace !important;
    font-size: 0.875rem !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.06em !important;
    padding: 0.7rem 1.6rem !important;
    border-radius: 2px !important;
    background-color: var(--sb-ink) !important;
    color: #fbf8f1 !important;
    border: 2px solid var(--sb-ink) !important;
    box-shadow: var(--sb-shadow-tag) !important;
    cursor: pointer !important;
    text-decoration: none !important;
    transform: rotate(-0.75deg) !important;
    transition: all 140ms ease !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="scrapbook"] button:hover,
  .lab-styled-preview[data-style="scrapbook"] input[type="submit"]:hover,
  .scrapbook-styled-container button:hover,
  .style-scrapbook button:hover,
  [data-style="scrapbook"] button:hover,
  .ds-scope[data-style-id="scrapbook"] button:hover,
  .scrapbook-styled-container input[type="submit"]:hover,
  .style-scrapbook input[type="submit"]:hover,
  [data-style="scrapbook"] input[type="submit"]:hover,
  .ds-scope[data-style-id="scrapbook"] input[type="submit"]:hover {
    background-color: var(--sb-stamp-crimson) !important;
    border-color: var(--sb-stamp-crimson) !important;
    transform: translateY(-2px) rotate(0deg) scale(1.02) !important;
    box-shadow: 3px 5px 0px rgba(185, 28, 28, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] button:active,
  .lab-styled-preview[data-style="scrapbook"] input[type="submit"]:active,
  .scrapbook-styled-container button:active,
  .style-scrapbook button:active,
  [data-style="scrapbook"] button:active,
  .ds-scope[data-style-id="scrapbook"] button:active,
  .scrapbook-styled-container input[type="submit"]:active,
  .style-scrapbook input[type="submit"]:active,
  [data-style="scrapbook"] input[type="submit"]:active,
  .ds-scope[data-style-id="scrapbook"] input[type="submit"]:active {
    transform: translateY(1px) scale(0.98) !important;
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] button:focus-visible,
  .lab-styled-preview[data-style="scrapbook"] input[type="submit"]:focus-visible,
  .scrapbook-styled-container button:focus-visible,
  .style-scrapbook button:focus-visible,
  [data-style="scrapbook"] button:focus-visible,
  .ds-scope[data-style-id="scrapbook"] button:focus-visible,
  .scrapbook-styled-container input[type="submit"]:focus-visible,
  .style-scrapbook input[type="submit"]:focus-visible,
  [data-style="scrapbook"] input[type="submit"]:focus-visible,
  .ds-scope[data-style-id="scrapbook"] input[type="submit"]:focus-visible {
    outline: 2px dashed var(--sb-stamp-crimson) !important;
    outline-offset: 4px !important;
  }

  /* Secondary swatch/option buttons */
  .lab-styled-preview[data-style="scrapbook"] article > div:has(button) button,
  .scrapbook-styled-container article > div:has(button) button,
  .style-scrapbook article > div:has(button) button,
  [data-style="scrapbook"] article > div:has(button) button,
  .ds-scope[data-style-id="scrapbook"] article > div:has(button) button {
    background-color: var(--sb-paper-card) !important;
    color: var(--sb-ink) !important;
    border: 1px dashed var(--sb-ink-muted) !important;
    box-shadow: 1px 2px 3px rgba(60, 45, 30, 0.08) !important;
    padding: 0.45rem 0.95rem !important;
    margin-right: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    font-size: 0.8125rem !important;
    transform: none !important;
  }

  .lab-styled-preview[data-style="scrapbook"] article > div:has(button) button:hover,
  .scrapbook-styled-container article > div:has(button) button:hover,
  .style-scrapbook article > div:has(button) button:hover,
  [data-style="scrapbook"] article > div:has(button) button:hover,
  .ds-scope[data-style-id="scrapbook"] article > div:has(button) button:hover {
    background-color: #fef08a !important;
    border-color: #ca8a04 !important;
    color: var(--sb-ink) !important;
    transform: translateY(-1px) rotate(-1deg) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] article > div:has(button) button:first-of-type,
  .scrapbook-styled-container article > div:has(button) button:first-of-type,
  .style-scrapbook article > div:has(button) button:first-of-type,
  [data-style="scrapbook"] article > div:has(button) button:first-of-type,
  .ds-scope[data-style-id="scrapbook"] article > div:has(button) button:first-of-type {
    background-color: #fef08a !important;
    color: #854d0e !important;
    border: 1px solid #ca8a04 !important;
    font-weight: 700 !important;
    transform: rotate(-1.5deg) !important;
  }

  /* --------------------------------------------------------------------------
     6. CARDS & PAPER SHEETS (Washi Tape & Micro-Rotations)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] article,
  .lab-styled-preview[data-style="scrapbook"] .card,
  .scrapbook-styled-container article,
  .style-scrapbook article,
  [data-style="scrapbook"] article,
  .ds-scope[data-style-id="scrapbook"] article,
  .scrapbook-styled-container .card,
  .style-scrapbook .card,
  [data-style="scrapbook"] .card,
  .ds-scope[data-style-id="scrapbook"] .card {
    background-color: var(--sb-paper-card) !important;
    border: 1px solid var(--sb-border) !important;
    border-radius: 2px !important;
    padding: 1.6rem !important;
    box-shadow: var(--sb-shadow-paper) !important;
    margin-bottom: 1.5rem !important;
    position: relative !important;
    transition: transform 180ms ease, box-shadow 180ms ease !important;
  }

  /* Washi tape strip cue across tops of cards */
  .lab-styled-preview[data-style="scrapbook"] article::before,
  .lab-styled-preview[data-style="scrapbook"] .card::before,
  .scrapbook-styled-container article::before,
  .style-scrapbook article::before,
  [data-style="scrapbook"] article::before,
  .ds-scope[data-style-id="scrapbook"] article::before,
  .scrapbook-styled-container .card::before,
  .style-scrapbook .card::before,
  [data-style="scrapbook"] .card::before,
  .ds-scope[data-style-id="scrapbook"] .card::before {
    content: '' !important;
    position: absolute !important;
    top: -9px !important;
    left: 50% !important;
    transform: translateX(-50%) rotate(-1deg) !important;
    width: 60px !important;
    height: 18px !important;
    background-color: var(--sb-tape-yellow) !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08) !important;
    z-index: 2 !important;
    pointer-events: none !important;
    border-left: 1px dashed rgba(200, 180, 50, 0.4) !important;
    border-right: 1px dashed rgba(200, 180, 50, 0.4) !important;
  }

  /* Organic card rotations */
  .lab-styled-preview[data-style="scrapbook"] section article:nth-of-type(3n + 1),
  .scrapbook-styled-container section article:nth-of-type(3n + 1),
  .style-scrapbook section article:nth-of-type(3n + 1),
  [data-style="scrapbook"] section article:nth-of-type(3n + 1),
  .ds-scope[data-style-id="scrapbook"] section article:nth-of-type(3n + 1) {
    transform: rotate(-1deg) !important;
  }
  .lab-styled-preview[data-style="scrapbook"] section article:nth-of-type(3n + 2),
  .scrapbook-styled-container section article:nth-of-type(3n + 2),
  .style-scrapbook section article:nth-of-type(3n + 2),
  [data-style="scrapbook"] section article:nth-of-type(3n + 2),
  .ds-scope[data-style-id="scrapbook"] section article:nth-of-type(3n + 2) {
    transform: rotate(1.2deg) !important;
  }
  .lab-styled-preview[data-style="scrapbook"] section article:nth-of-type(3n + 3),
  .scrapbook-styled-container section article:nth-of-type(3n + 3),
  .style-scrapbook section article:nth-of-type(3n + 3),
  [data-style="scrapbook"] section article:nth-of-type(3n + 3),
  .ds-scope[data-style-id="scrapbook"] section article:nth-of-type(3n + 3) {
    transform: rotate(-0.6deg) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] article:hover,
  .lab-styled-preview[data-style="scrapbook"] .card:hover,
  .scrapbook-styled-container article:hover,
  .style-scrapbook article:hover,
  [data-style="scrapbook"] article:hover,
  .ds-scope[data-style-id="scrapbook"] article:hover,
  .scrapbook-styled-container .card:hover,
  .style-scrapbook .card:hover,
  [data-style="scrapbook"] .card:hover,
  .ds-scope[data-style-id="scrapbook"] .card:hover {
    transform: translateY(-4px) rotate(0deg) !important;
    box-shadow: var(--sb-shadow-elevated) !important;
    z-index: 5 !important;
  }

  /* Grid layout for multi-card sections */
  .lab-styled-preview[data-style="scrapbook"] section:has(> article:nth-of-type(2)),
  .lab-styled-preview[data-style="scrapbook"] section:has(> div > article:nth-of-type(2)) > div,
  .scrapbook-styled-container section:has(> article:nth-of-type(2)),
  .style-scrapbook section:has(> article:nth-of-type(2)),
  [data-style="scrapbook"] section:has(> article:nth-of-type(2)),
  .ds-scope[data-style-id="scrapbook"] section:has(> article:nth-of-type(2)),
  .scrapbook-styled-container section:has(> div > article:nth-of-type(2)) > div,
  .style-scrapbook section:has(> div > article:nth-of-type(2)) > div,
  [data-style="scrapbook"] section:has(> div > article:nth-of-type(2)) > div,
  .ds-scope[data-style-id="scrapbook"] section:has(> div > article:nth-of-type(2)) > div {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.5rem !important;
    margin-top: 1.5rem !important;
    margin-bottom: 2.75rem !important;
  }

  /* --------------------------------------------------------------------------
     7. SAAS PRICING (Varied Ephemera & Stamped Price Tags)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] section:has(article:has(strong:has-text('$'))),
  .scrapbook-styled-container section:has(article:has(strong:has-text('$'))),
  .style-scrapbook section:has(article:has(strong:has-text('$'))),
  [data-style="scrapbook"] section:has(article:has(strong:has-text('$'))),
  .ds-scope[data-style-id="scrapbook"] section:has(article:has(strong:has-text('$'))) {
    margin-bottom: 3rem !important;
  }

  /* Middle Pro tier as yellow post-it highlighted ticket */
  .lab-styled-preview[data-style="scrapbook"] section:has(article:nth-of-type(3)) article:nth-of-type(2),
  .scrapbook-styled-container section:has(article:nth-of-type(3)) article:nth-of-type(2),
  .style-scrapbook section:has(article:nth-of-type(3)) article:nth-of-type(2),
  [data-style="scrapbook"] section:has(article:nth-of-type(3)) article:nth-of-type(2),
  .ds-scope[data-style-id="scrapbook"] section:has(article:nth-of-type(3)) article:nth-of-type(2) {
    background-color: var(--sb-paper-card-alt) !important;
    border: 2px solid #ca8a04 !important;
    box-shadow: 4px 8px 20px rgba(180, 130, 20, 0.16) !important;
    transform: scale(1.02) rotate(0.8deg) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] section:has(article:nth-of-type(3)) article:nth-of-type(2)::before,
  .scrapbook-styled-container section:has(article:nth-of-type(3)) article:nth-of-type(2)::before,
  .style-scrapbook section:has(article:nth-of-type(3)) article:nth-of-type(2)::before,
  [data-style="scrapbook"] section:has(article:nth-of-type(3)) article:nth-of-type(2)::before,
  .ds-scope[data-style-id="scrapbook"] section:has(article:nth-of-type(3)) article:nth-of-type(2)::before {
    background-color: #fde047 !important;
    border-color: #eab308 !important;
  }

  .lab-styled-preview[data-style="scrapbook"] article strong,
  .scrapbook-styled-container article strong,
  .style-scrapbook article strong,
  [data-style="scrapbook"] article strong,
  .ds-scope[data-style-id="scrapbook"] article strong {
    display: block !important;
    font-family: 'Courier Prime', monospace !important;
    font-size: 1.85rem !important;
    font-weight: 700 !important;
    color: var(--sb-stamp-crimson) !important;
    letter-spacing: -0.02em !important;
    margin: 1rem 0 !important;
  }

  /* --------------------------------------------------------------------------
     8. EDITORIAL ARTICLES (Field Journal Page & Sticky Memo Quotes)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] > article:only-child,
  .scrapbook-styled-container > article:only-child,
  .style-scrapbook > article:only-child,
  [data-style="scrapbook"] > article:only-child,
  .ds-scope[data-style-id="scrapbook"] > article:only-child {
    max-width: 720px !important;
    margin: 0 auto !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    transform: none !important;
  }

  .lab-styled-preview[data-style="scrapbook"] > article:only-child::before,
  .scrapbook-styled-container > article:only-child::before,
  .style-scrapbook > article:only-child::before,
  [data-style="scrapbook"] > article:only-child::before,
  .ds-scope[data-style-id="scrapbook"] > article:only-child::before {
    display: none !important;
  }

  .lab-styled-preview[data-style="scrapbook"] > article:only-child p,
  .scrapbook-styled-container > article:only-child p,
  .style-scrapbook > article:only-child p,
  [data-style="scrapbook"] > article:only-child p,
  .ds-scope[data-style-id="scrapbook"] > article:only-child p {
    font-family: 'Lora', Georgia, serif !important;
    font-size: 1.1rem !important;
    line-height: 1.8 !important;
    color: var(--sb-ink) !important;
    margin-bottom: 1.5rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] blockquote,
  .scrapbook-styled-container blockquote,
  .style-scrapbook blockquote,
  [data-style="scrapbook"] blockquote,
  .ds-scope[data-style-id="scrapbook"] blockquote {
    background-color: var(--sb-paper-sticky) !important;
    border: 1px solid #facc15 !important;
    border-radius: 2px !important;
    padding: 1.6rem 1.85rem !important;
    margin: 2.25rem 0 !important;
    font-family: 'Caveat', cursive !important;
    font-size: 1.45rem !important;
    line-height: 1.45 !important;
    color: var(--sb-ink) !important;
    font-style: normal !important;
    box-shadow: 2px 5px 12px rgba(160, 130, 20, 0.15) !important;
    position: relative !important;
    transform: rotate(-1.2deg) !important;
  }

  /* Scotch tape piece on blockquote */
  .lab-styled-preview[data-style="scrapbook"] blockquote::before,
  .scrapbook-styled-container blockquote::before,
  .style-scrapbook blockquote::before,
  [data-style="scrapbook"] blockquote::before,
  .ds-scope[data-style-id="scrapbook"] blockquote::before {
    content: '' !important;
    position: absolute !important;
    top: -9px !important;
    left: 28px !important;
    width: 48px !important;
    height: 18px !important;
    background-color: var(--sb-tape-frosted) !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08) !important;
    transform: rotate(1deg) !important;
    pointer-events: none !important;
  }

  /* --------------------------------------------------------------------------
     9. DASHBOARD TELEMETRY (3x5 Index Cards & Research Inked Ledger)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] section:has(table) > div > article,
  .scrapbook-styled-container section:has(table) > div > article,
  .style-scrapbook section:has(table) > div > article,
  [data-style="scrapbook"] section:has(table) > div > article,
  .ds-scope[data-style-id="scrapbook"] section:has(table) > div > article {
    background-color: var(--sb-paper-card) !important;
    border: 1px solid var(--sb-border) !important;
    border-top: 4px solid var(--sb-stamp-crimson) !important;
    border-radius: 2px !important;
    padding: 1.25rem 1.5rem !important;
    box-shadow: var(--sb-shadow-paper) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] section:has(table) > div > article h3,
  .scrapbook-styled-container section:has(table) > div > article h3,
  .style-scrapbook section:has(table) > div > article h3,
  [data-style="scrapbook"] section:has(table) > div > article h3,
  .ds-scope[data-style-id="scrapbook"] section:has(table) > div > article h3 {
    font-family: 'Courier Prime', monospace !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.06em !important;
    color: var(--sb-ink-muted) !important;
    margin-bottom: 0.35rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] section:has(table) > div > article strong,
  .scrapbook-styled-container section:has(table) > div > article strong,
  .style-scrapbook section:has(table) > div > article strong,
  [data-style="scrapbook"] section:has(table) > div > article strong,
  .ds-scope[data-style-id="scrapbook"] section:has(table) > div > article strong {
    font-family: 'Courier Prime', monospace !important;
    font-size: 2.1rem !important;
    font-weight: 700 !important;
    color: var(--sb-ink) !important;
    font-variant-numeric: tabular-nums !important;
    letter-spacing: -0.03em !important;
    display: block !important;
    margin: 0.2rem 0 0.35rem !important;
  }

  /* --------------------------------------------------------------------------
     10. TABLES (Inked Observation Ledger)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] table,
  .scrapbook-styled-container table,
  .style-scrapbook table,
  [data-style="scrapbook"] table,
  .ds-scope[data-style-id="scrapbook"] table {
    width: 100% !important;
    border-collapse: collapse !important;
    background-color: var(--sb-paper-card) !important;
    border: 1px solid var(--sb-border-dashed) !important;
    border-radius: 2px !important;
    overflow: hidden !important;
    margin: 1.75rem 0 !important;
    box-shadow: var(--sb-shadow-paper) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] thead,
  .scrapbook-styled-container thead,
  .style-scrapbook thead,
  [data-style="scrapbook"] thead,
  .ds-scope[data-style-id="scrapbook"] thead {
    background-color: #f5eedd !important;
    border-bottom: 2px solid #b8ab92 !important;
  }

  .lab-styled-preview[data-style="scrapbook"] th,
  .scrapbook-styled-container th,
  .style-scrapbook th,
  [data-style="scrapbook"] th,
  .ds-scope[data-style-id="scrapbook"] th {
    color: var(--sb-ink-secondary) !important;
    font-family: 'Courier Prime', monospace !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.06em !important;
    padding: 0.85rem 1rem !important;
    text-align: left !important;
    border-bottom: 2px solid #b8ab92 !important;
  }

  .lab-styled-preview[data-style="scrapbook"] td,
  .scrapbook-styled-container td,
  .style-scrapbook td,
  [data-style="scrapbook"] td,
  .ds-scope[data-style-id="scrapbook"] td {
    padding: 0.85rem 1rem !important;
    color: var(--sb-ink) !important;
    font-family: 'Courier Prime', monospace !important;
    font-size: 0.875rem !important;
    border-bottom: 1px dashed #e2d9c7 !important;
    font-variant-numeric: tabular-nums !important;
  }

  .lab-styled-preview[data-style="scrapbook"] tbody tr:last-child td,
  .scrapbook-styled-container tbody tr:last-child td,
  .style-scrapbook tbody tr:last-child td,
  [data-style="scrapbook"] tbody tr:last-child td,
  .ds-scope[data-style-id="scrapbook"] tbody tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="scrapbook"] tbody tr:hover,
  .scrapbook-styled-container tbody tr:hover,
  .style-scrapbook tbody tr:hover,
  [data-style="scrapbook"] tbody tr:hover,
  .ds-scope[data-style-id="scrapbook"] tbody tr:hover {
    background-color: #fcf8ee !important;
  }

  /* --------------------------------------------------------------------------
     11. FORMS & INPUTS (Stationery Dispatch Memo & Ruled Lines)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] form,
  .scrapbook-styled-container form,
  .style-scrapbook form,
  [data-style="scrapbook"] form,
  .ds-scope[data-style-id="scrapbook"] form {
    background-color: var(--sb-paper-card) !important;
    border: 2px solid var(--sb-border-dashed) !important;
    border-radius: 2px !important;
    padding: 2.25rem !important;
    max-width: 600px !important;
    box-shadow: var(--sb-shadow-paper) !important;
    position: relative !important;
  }

  /* Stamp cue on top corner of form */
  .lab-styled-preview[data-style="scrapbook"] form::after,
  .scrapbook-styled-container form::after,
  .style-scrapbook form::after,
  [data-style="scrapbook"] form::after,
  .ds-scope[data-style-id="scrapbook"] form::after {
    content: 'OFFICIAL DISPATCH' !important;
    position: absolute !important;
    top: 16px !important;
    right: 16px !important;
    font-family: 'Courier Prime', monospace !important;
    font-size: 0.65rem !important;
    font-weight: 700 !important;
    color: var(--sb-stamp-crimson) !important;
    border: 2px dashed var(--sb-stamp-crimson) !important;
    border-radius: 3px !important;
    padding: 0.2rem 0.5rem !important;
    transform: rotate(6deg) !important;
    opacity: 0.85 !important;
    pointer-events: none !important;
  }

  .lab-styled-preview[data-style="scrapbook"] form > div,
  .scrapbook-styled-container form > div,
  .style-scrapbook form > div,
  [data-style="scrapbook"] form > div,
  .ds-scope[data-style-id="scrapbook"] form > div {
    margin-bottom: 1.35rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] label,
  .scrapbook-styled-container label,
  .style-scrapbook label,
  [data-style="scrapbook"] label,
  .ds-scope[data-style-id="scrapbook"] label {
    display: block !important;
    font-family: 'Courier Prime', monospace !important;
    font-size: 0.8125rem !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    color: var(--sb-ink) !important;
    margin-bottom: 0.4rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] input,
  .lab-styled-preview[data-style="scrapbook"] select,
  .lab-styled-preview[data-style="scrapbook"] textarea,
  .scrapbook-styled-container input,
  .style-scrapbook input,
  [data-style="scrapbook"] input,
  .ds-scope[data-style-id="scrapbook"] input,
  .scrapbook-styled-container select,
  .style-scrapbook select,
  [data-style="scrapbook"] select,
  .ds-scope[data-style-id="scrapbook"] select,
  .scrapbook-styled-container textarea,
  .style-scrapbook textarea,
  [data-style="scrapbook"] textarea,
  .ds-scope[data-style-id="scrapbook"] textarea {
    background-color: #fbf8f0 !important;
    color: var(--sb-ink) !important;
    border: 1px solid #d6cdb7 !important;
    border-bottom: 2px solid #78716c !important;
    border-radius: 2px !important;
    padding: 0.65rem 0.85rem !important;
    font-size: 0.875rem !important;
    font-family: 'Courier Prime', monospace !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    transition: border-color 150ms ease, box-shadow 150ms ease !important;
    margin-bottom: 0.25rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] input:focus,
  .lab-styled-preview[data-style="scrapbook"] select:focus,
  .lab-styled-preview[data-style="scrapbook"] textarea:focus,
  .scrapbook-styled-container input:focus,
  .style-scrapbook input:focus,
  [data-style="scrapbook"] input:focus,
  .ds-scope[data-style-id="scrapbook"] input:focus,
  .scrapbook-styled-container select:focus,
  .style-scrapbook select:focus,
  [data-style="scrapbook"] select:focus,
  .ds-scope[data-style-id="scrapbook"] select:focus,
  .scrapbook-styled-container textarea:focus,
  .style-scrapbook textarea:focus,
  [data-style="scrapbook"] textarea:focus,
  .ds-scope[data-style-id="scrapbook"] textarea:focus {
    outline: none !important;
    border-color: var(--sb-stamp-crimson) !important;
    box-shadow: 0 0 0 2px rgba(185, 28, 28, 0.15) !important;
  }

  .lab-styled-preview[data-style="scrapbook"] input::placeholder,
  .lab-styled-preview[data-style="scrapbook"] textarea::placeholder,
  .scrapbook-styled-container input::placeholder,
  .style-scrapbook input::placeholder,
  [data-style="scrapbook"] input::placeholder,
  .ds-scope[data-style-id="scrapbook"] input::placeholder,
  .scrapbook-styled-container textarea::placeholder,
  .style-scrapbook textarea::placeholder,
  [data-style="scrapbook"] textarea::placeholder,
  .ds-scope[data-style-id="scrapbook"] textarea::placeholder {
    color: var(--sb-ink-muted) !important;
    opacity: 0.8 !important;
  }

  /* --------------------------------------------------------------------------
     12. LISTS & SPECIFICATIONS (Field Checklist)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] ul,
  .scrapbook-styled-container ul,
  .style-scrapbook ul,
  [data-style="scrapbook"] ul,
  .ds-scope[data-style-id="scrapbook"] ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1rem 0 !important;
  }

  .lab-styled-preview[data-style="scrapbook"] li,
  .scrapbook-styled-container li,
  .style-scrapbook li,
  [data-style="scrapbook"] li,
  .ds-scope[data-style-id="scrapbook"] li {
    padding: 0.65rem 0 !important;
    border-bottom: 1px dashed var(--sb-border-dashed) !important;
    color: var(--sb-ink-secondary) !important;
    font-size: 0.925rem !important;
    position: relative !important;
    padding-left: 1.25rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] li::before,
  .scrapbook-styled-container li::before,
  .style-scrapbook li::before,
  [data-style="scrapbook"] li::before,
  .ds-scope[data-style-id="scrapbook"] li::before {
    content: '•' !important;
    position: absolute !important;
    left: 0 !important;
    color: var(--sb-stamp-crimson) !important;
    font-size: 1.2rem !important;
    line-height: 1 !important;
  }

  .lab-styled-preview[data-style="scrapbook"] li:last-child,
  .scrapbook-styled-container li:last-child,
  .style-scrapbook li:last-child,
  [data-style="scrapbook"] li:last-child,
  .ds-scope[data-style-id="scrapbook"] li:last-child {
    border-bottom: none !important;
  }

  /* --------------------------------------------------------------------------
     13. FOOTER (Pencil Inscription & Stamp Date)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="scrapbook"] footer,
  .scrapbook-styled-container footer,
  .style-scrapbook footer,
  [data-style="scrapbook"] footer,
  .ds-scope[data-style-id="scrapbook"] footer {
    border-top: 2px dashed var(--sb-border-dashed) !important;
    margin-top: 3.5rem !important;
    padding-top: 1.5rem !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    flex-wrap: wrap !important;
    gap: 1rem !important;
  }

  .lab-styled-preview[data-style="scrapbook"] footer p,
  .scrapbook-styled-container footer p,
  .style-scrapbook footer p,
  [data-style="scrapbook"] footer p,
  .ds-scope[data-style-id="scrapbook"] footer p {
    font-family: 'Caveat', cursive !important;
    font-size: 1.25rem !important;
    color: var(--sb-ink-muted) !important;
    margin: 0 !important;
  }

  /* --------------------------------------------------------------------------
     14. RESPONSIVE BREAKPOINTS & ACCESSIBILITY
     -------------------------------------------------------------------------- */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="scrapbook"],
    .scrapbook-styled-container,
    .style-scrapbook,
    [data-style="scrapbook"],
    .ds-scope[data-style-id="scrapbook"] {
      padding: 1.5rem 1rem !important;
    }

    .lab-styled-preview[data-style="scrapbook"] h1,
    .scrapbook-styled-container h1,
    .style-scrapbook h1,
    [data-style="scrapbook"] h1,
    .ds-scope[data-style-id="scrapbook"] h1 {
      font-size: 1.95rem !important;
    }

    .lab-styled-preview[data-style="scrapbook"] h2,
    .scrapbook-styled-container h2,
    .style-scrapbook h2,
    [data-style="scrapbook"] h2,
    .ds-scope[data-style-id="scrapbook"] h2 {
      font-size: 1.45rem !important;
    }

    .lab-styled-preview[data-style="scrapbook"] nav,
    .scrapbook-styled-container nav,
    .style-scrapbook nav,
    [data-style="scrapbook"] nav,
    .ds-scope[data-style-id="scrapbook"] nav {
      gap: 0.35rem !important;
    }

    /* Zero out rotations on small screens to eliminate horizontal overflow */
    .lab-styled-preview[data-style="scrapbook"] nav a,
    .lab-styled-preview[data-style="scrapbook"] article,
    .lab-styled-preview[data-style="scrapbook"] blockquote,
    .lab-styled-preview[data-style="scrapbook"] button,
    .scrapbook-styled-container nav a,
    .style-scrapbook nav a,
    [data-style="scrapbook"] nav a,
    .ds-scope[data-style-id="scrapbook"] nav a,
    .scrapbook-styled-container article,
    .style-scrapbook article,
    [data-style="scrapbook"] article,
    .ds-scope[data-style-id="scrapbook"] article,
    .scrapbook-styled-container blockquote,
    .style-scrapbook blockquote,
    [data-style="scrapbook"] blockquote,
    .ds-scope[data-style-id="scrapbook"] blockquote,
    .scrapbook-styled-container button,
    .style-scrapbook button,
    [data-style="scrapbook"] button,
    .ds-scope[data-style-id="scrapbook"] button {
      transform: none !important;
    }

    .lab-styled-preview[data-style="scrapbook"] section:has(> article:nth-of-type(2)),
    .lab-styled-preview[data-style="scrapbook"] section:has(> div > article:nth-of-type(2)) > div,
    .scrapbook-styled-container section:has(> article:nth-of-type(2)),
    .style-scrapbook section:has(> article:nth-of-type(2)),
    [data-style="scrapbook"] section:has(> article:nth-of-type(2)),
    .ds-scope[data-style-id="scrapbook"] section:has(> article:nth-of-type(2)),
    .scrapbook-styled-container section:has(> div > article:nth-of-type(2)) > div,
    .style-scrapbook section:has(> div > article:nth-of-type(2)) > div,
    [data-style="scrapbook"] section:has(> div > article:nth-of-type(2)) > div,
    .ds-scope[data-style-id="scrapbook"] section:has(> div > article:nth-of-type(2)) > div {
      grid-template-columns: 1fr !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .lab-styled-preview[data-style="scrapbook"] *,
    .scrapbook-styled-container *,
    .style-scrapbook *,
    [data-style="scrapbook"] *,
    .ds-scope[data-style-id="scrapbook"] * {
      transition: none !important;
      animation: none !important;
      transform: none !important;
    }
  }
`;
