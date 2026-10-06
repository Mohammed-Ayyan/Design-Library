/**
 * Luxury Typography Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Luxury Typography
 * is applied. Centered on editorial high-fashion prestige, dramatic typographic scale
 * contrast (monumental Didone serifs vs. whisper-quiet uppercase sans), generous whitespace,
 * delicate 1px hairlines, and absolute restraint—preserving the user's underlying HTML
 * structure with zero DOM mutations.
 */

export const luxuryTypographySemanticCss = `
  /* ==========================================================================
     LUXURY TYPOGRAPHY — EDITORIAL PRESTIGE & TYPOGRAPHIC DRAMA
     
     Core Philosophy:
     - Typography IS the primary luxury material (not gold gradients or heavy cards)
     - Extreme contrast: Monumental display serifs vs. Whisper-quiet uppercase sans
     - Warm luxury paper foundation (#faf8f5) with deep charcoal noir ink (#121211)
     - Delicate warm hairlines (#eae6df) creating quiet editorial structure
     - Whispering champagne (#c2a67e) and deep burgundy (#3d1722) accents used with restraint
     - ZERO cardification: open editorial spreads, lookbook rows, and magazine measure
     - Crisp 0px–1px architectural geometry (NO rounded pills, NO heavy drop shadows)
     ========================================================================== */

  /* 0. Canvas Foundation: Warm Luxury Editorial Paper */
  .lab-styled-preview[data-style="luxury-typography"],
  .luxury-typography-styled-container,
  .style-luxury-typography,
  [data-style="luxury-typography"],
  .ds-scope[data-style-id="luxury-typography"],
  .style-luxury,
  [data-style="luxury"],
  .ds-scope[data-style-id="luxury"] {
    background-color: #faf8f5 !important;
    background-image: radial-gradient(circle at 50% 0%, rgba(243, 239, 233, 0.6) 0%, transparent 75%) !important;
    color: #121211 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.8 !important;
    box-shadow: none !important;
    position: relative !important;
    border: 1px solid #eae6df !important;
    letter-spacing: 0.01em !important;
  }

  /* 1. Understated Editorial Navigation: Baseline Hairline & Generous Tracking */
  .lab-styled-preview[data-style="luxury-typography"] nav,
  .luxury-typography-styled-container nav,
  .style-luxury-typography nav,
  [data-style="luxury-typography"] nav,
  .ds-scope[data-style-id="luxury-typography"] nav,
  .style-luxury nav,
  [data-style="luxury"] nav,
  .ds-scope[data-style-id="luxury"] nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2.25rem;
    padding: 1.5rem 0 1.25rem;
    border-bottom: 1px solid #eae6df;
    margin-bottom: 4rem;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="luxury-typography"] nav a,
  .luxury-typography-styled-container nav a,
  .style-luxury-typography nav a,
  [data-style="luxury-typography"] nav a,
  .ds-scope[data-style-id="luxury-typography"] nav a,
  .style-luxury nav a,
  [data-style="luxury"] nav a,
  .ds-scope[data-style-id="luxury"] nav a {
    font-family: 'Inter', sans-serif;
    font-size: 0.71875rem;
    font-weight: 500;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: #54504a;
    text-decoration: none;
    padding: 0.35rem 0;
    position: relative;
    transition: color 180ms ease, opacity 180ms ease;
  }

  .lab-styled-preview[data-style="luxury-typography"] nav a:hover,
  .luxury-typography-styled-container nav a:hover,
  .style-luxury-typography nav a:hover,
  [data-style="luxury-typography"] nav a:hover,
  .ds-scope[data-style-id="luxury-typography"] nav a:hover,
  .style-luxury nav a:hover,
  [data-style="luxury"] nav a:hover,
  .ds-scope[data-style-id="luxury"] nav a:hover {
    color: #121211;
    text-decoration: none;
    opacity: 1;
  }

  /* Wordmark / First Link: High-Fashion Editorial Logotype */
  .lab-styled-preview[data-style="luxury-typography"] nav a:first-child,
  .luxury-typography-styled-container nav a:first-child,
  .style-luxury-typography nav a:first-child,
  [data-style="luxury-typography"] nav a:first-child,
  .ds-scope[data-style-id="luxury-typography"] nav a:first-child,
  .style-luxury nav a:first-child,
  [data-style="luxury"] nav a:first-child,
  .ds-scope[data-style-id="luxury"] nav a:first-child {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Baskerville', 'Georgia', serif;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #121211;
    margin-right: 1.5rem;
  }

  /* 2. Eyebrow Metadata: Whisper-Quiet Tracked Sans */
  .lab-styled-preview[data-style="luxury-typography"] header > p:first-child,
  .lab-styled-preview[data-style="luxury-typography"] section > p:first-child:not(:last-child),
  .luxury-typography-styled-container header > p:first-child,
  .style-luxury-typography header > p:first-child,
  [data-style="luxury-typography"] header > p:first-child,
  .ds-scope[data-style-id="luxury-typography"] header > p:first-child,
  .style-luxury header > p:first-child,
  [data-style="luxury"] header > p:first-child,
  .ds-scope[data-style-id="luxury"] header > p:first-child,
  .luxury-typography-styled-container section > p:first-child:not(:last-child),
  .style-luxury-typography section > p:first-child:not(:last-child),
  [data-style="luxury-typography"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="luxury-typography"] section > p:first-child:not(:last-child),
  .style-luxury section > p:first-child:not(:last-child),
  [data-style="luxury"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="luxury"] section > p:first-child:not(:last-child) {
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.32em;
    color: #8c867e;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .lab-styled-preview[data-style="luxury-typography"] header > p:first-child::before,
  .lab-styled-preview[data-style="luxury-typography"] section > p:first-child:not(:last-child)::before,
  .luxury-typography-styled-container header > p:first-child::before,
  .style-luxury-typography header > p:first-child::before,
  [data-style="luxury-typography"] header > p:first-child::before,
  .ds-scope[data-style-id="luxury-typography"] header > p:first-child::before,
  .style-luxury header > p:first-child::before,
  [data-style="luxury"] header > p:first-child::before,
  .ds-scope[data-style-id="luxury"] header > p:first-child::before,
  .luxury-typography-styled-container section > p:first-child:not(:last-child)::before,
  .style-luxury-typography section > p:first-child:not(:last-child)::before,
  [data-style="luxury-typography"] section > p:first-child:not(:last-child)::before,
  .ds-scope[data-style-id="luxury-typography"] section > p:first-child:not(:last-child)::before,
  .style-luxury section > p:first-child:not(:last-child)::before,
  [data-style="luxury"] section > p:first-child:not(:last-child)::before,
  .ds-scope[data-style-id="luxury"] section > p:first-child:not(:last-child)::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 1px;
    background-color: #c2a67e;
  }

  /* 3. Display Typography: Monumental High-Contrast Editorial Headings */
  .lab-styled-preview[data-style="luxury-typography"] h1,
  .luxury-typography-styled-container h1,
  .style-luxury-typography h1,
  [data-style="luxury-typography"] h1,
  .ds-scope[data-style-id="luxury-typography"] h1,
  .style-luxury h1,
  [data-style="luxury"] h1,
  .ds-scope[data-style-id="luxury"] h1 {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Bodoni MT', 'Cinzel', 'Georgia', serif;
    font-size: clamp(2.15rem, 5.4vw, 4.75rem);
    font-weight: 400;
    line-height: 1.06;
    letter-spacing: -0.025em;
    color: #121211;
    margin-top: 0;
    margin-bottom: 2rem;
    max-width: 20ch;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }

  .lab-styled-preview[data-style="luxury-typography"] h1 em,
  .lab-styled-preview[data-style="luxury-typography"] h1 i,
  .luxury-typography-styled-container h1 em,
  .style-luxury-typography h1 em,
  [data-style="luxury-typography"] h1 em,
  .ds-scope[data-style-id="luxury-typography"] h1 em,
  .style-luxury h1 em,
  [data-style="luxury"] h1 em,
  .ds-scope[data-style-id="luxury"] h1 em,
  .luxury-typography-styled-container h1 i,
  .style-luxury-typography h1 i,
  [data-style="luxury-typography"] h1 i,
  .ds-scope[data-style-id="luxury-typography"] h1 i,
  .style-luxury h1 i,
  [data-style="luxury"] h1 i,
  .ds-scope[data-style-id="luxury"] h1 i {
    font-family: 'Playfair Display', 'Cormorant Garamond', serif;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #242220;
  }

  .lab-styled-preview[data-style="luxury-typography"] h2,
  .luxury-typography-styled-container h2,
  .style-luxury-typography h2,
  [data-style="luxury-typography"] h2,
  .ds-scope[data-style-id="luxury-typography"] h2,
  .style-luxury h2,
  [data-style="luxury"] h2,
  .ds-scope[data-style-id="luxury"] h2 {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Baskerville', 'Georgia', serif;
    font-size: clamp(1.65rem, 3.4vw, 2.5rem);
    font-weight: 400;
    line-height: 1.18;
    letter-spacing: -0.015em;
    color: #121211;
    margin-top: 4rem;
    margin-bottom: 2rem;
    padding-bottom: 1.15rem;
    border-bottom: 1px solid #eae6df;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    overflow-wrap: break-word;
  }

  .lab-styled-preview[data-style="luxury-typography"] h2::after,
  .luxury-typography-styled-container h2::after,
  .style-luxury-typography h2::after,
  [data-style="luxury-typography"] h2::after,
  .ds-scope[data-style-id="luxury-typography"] h2::after,
  .style-luxury h2::after,
  [data-style="luxury"] h2::after,
  .ds-scope[data-style-id="luxury"] h2::after {
    content: 'N°';
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.25em;
    color: #c2a67e;
    text-transform: uppercase;
  }

  .lab-styled-preview[data-style="luxury-typography"] h3,
  .luxury-typography-styled-container h3,
  .style-luxury-typography h3,
  [data-style="luxury-typography"] h3,
  .ds-scope[data-style-id="luxury-typography"] h3,
  .style-luxury h3,
  [data-style="luxury"] h3,
  .ds-scope[data-style-id="luxury"] h3 {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: 1.45rem;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #121211;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  .lab-styled-preview[data-style="luxury-typography"] h4,
  .luxury-typography-styled-container h4,
  .style-luxury-typography h4,
  [data-style="luxury-typography"] h4,
  .ds-scope[data-style-id="luxury-typography"] h4,
  .style-luxury h4,
  [data-style="luxury"] h4,
  .ds-scope[data-style-id="luxury"] h4 {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #54504a;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  /* 4. Reading Column & Body Copy: Generous Leading & Editorial Rhythm */
  .lab-styled-preview[data-style="luxury-typography"] p,
  .luxury-typography-styled-container p,
  .style-luxury-typography p,
  [data-style="luxury-typography"] p,
  .ds-scope[data-style-id="luxury-typography"] p,
  .style-luxury p,
  [data-style="luxury"] p,
  .ds-scope[data-style-id="luxury"] p {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 1.03125rem;
    font-weight: 400;
    line-height: 1.85;
    color: #4a4744;
    margin-top: 0;
    margin-bottom: 1.75rem;
    max-width: 64ch;
  }

  /* 5. Crafted Editorial Buttons: Sharp 0px/1px Geometry, No Heavy Shadows */
  .lab-styled-preview[data-style="luxury-typography"] button,
  .lab-styled-preview[data-style="luxury-typography"] input[type="submit"],
  .luxury-typography-styled-container button,
  .style-luxury-typography button,
  [data-style="luxury-typography"] button,
  .ds-scope[data-style-id="luxury-typography"] button,
  .style-luxury button,
  [data-style="luxury"] button,
  .ds-scope[data-style-id="luxury"] button,
  .luxury-typography-styled-container input[type="submit"],
  .style-luxury-typography input[type="submit"],
  [data-style="luxury-typography"] input[type="submit"],
  .ds-scope[data-style-id="luxury-typography"] input[type="submit"],
  .style-luxury input[type="submit"],
  [data-style="luxury"] input[type="submit"],
  .ds-scope[data-style-id="luxury"] input[type="submit"] {
    font-family: 'Inter', sans-serif;
    font-size: 0.71875rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    padding: 0.95rem 2.5rem;
    border-radius: 0px;
    border: 1px solid #121211;
    background-color: #121211;
    color: #faf8f5;
    box-shadow: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    text-decoration: none;
    transition: all 180ms cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
  }

  .lab-styled-preview[data-style="luxury-typography"] button:hover,
  .lab-styled-preview[data-style="luxury-typography"] input[type="submit"]:hover,
  .luxury-typography-styled-container button:hover,
  .style-luxury-typography button:hover,
  [data-style="luxury-typography"] button:hover,
  .ds-scope[data-style-id="luxury-typography"] button:hover,
  .style-luxury button:hover,
  [data-style="luxury"] button:hover,
  .ds-scope[data-style-id="luxury"] button:hover,
  .luxury-typography-styled-container input[type="submit"]:hover,
  .style-luxury-typography input[type="submit"]:hover,
  [data-style="luxury-typography"] input[type="submit"]:hover,
  .ds-scope[data-style-id="luxury-typography"] input[type="submit"]:hover,
  .style-luxury input[type="submit"]:hover,
  [data-style="luxury"] input[type="submit"]:hover,
  .ds-scope[data-style-id="luxury"] input[type="submit"]:hover {
    background-color: #2b2826;
    border-color: #2b2826;
    color: #ffffff;
  }

  .lab-styled-preview[data-style="luxury-typography"] button:active,
  .lab-styled-preview[data-style="luxury-typography"] input[type="submit"]:active,
  .luxury-typography-styled-container button:active,
  .style-luxury-typography button:active,
  [data-style="luxury-typography"] button:active,
  .ds-scope[data-style-id="luxury-typography"] button:active,
  .style-luxury button:active,
  [data-style="luxury"] button:active,
  .ds-scope[data-style-id="luxury"] button:active,
  .luxury-typography-styled-container input[type="submit"]:active,
  .style-luxury-typography input[type="submit"]:active,
  [data-style="luxury-typography"] input[type="submit"]:active,
  .ds-scope[data-style-id="luxury-typography"] input[type="submit"]:active,
  .style-luxury input[type="submit"]:active,
  [data-style="luxury"] input[type="submit"]:active,
  .ds-scope[data-style-id="luxury"] input[type="submit"]:active {
    background-color: #000000;
  }

  /* Secondary Button: Clean Outlined Hairline */
  .lab-styled-preview[data-style="luxury-typography"] button + button,
  .luxury-typography-styled-container button + button,
  .style-luxury-typography button + button,
  [data-style="luxury-typography"] button + button,
  .ds-scope[data-style-id="luxury-typography"] button + button,
  .style-luxury button + button,
  [data-style="luxury"] button + button,
  .ds-scope[data-style-id="luxury"] button + button {
    background-color: transparent;
    color: #121211;
    border: 1px solid #d4cebe;
    box-shadow: none;
    margin-left: 1rem;
  }

  .lab-styled-preview[data-style="luxury-typography"] button + button:hover,
  .luxury-typography-styled-container button + button:hover,
  .style-luxury-typography button + button:hover,
  [data-style="luxury-typography"] button + button:hover,
  .ds-scope[data-style-id="luxury-typography"] button + button:hover,
  .style-luxury button + button:hover,
  [data-style="luxury"] button + button:hover,
  .ds-scope[data-style-id="luxury"] button + button:hover {
    background-color: #f2ece2;
    border-color: #121211;
    color: #121211;
  }

  /* 6. Surfaces & Anti-Cardification: Pure Editorial Lookbook Rows */
  .lab-styled-preview[data-style="luxury-typography"] article,
  .luxury-typography-styled-container article,
  .style-luxury-typography article,
  [data-style="luxury-typography"] article,
  .ds-scope[data-style-id="luxury-typography"] article,
  .style-luxury article,
  [data-style="luxury"] article,
  .ds-scope[data-style-id="luxury"] article {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin-bottom: 3rem;
    position: relative;
  }

  /* Context A: Direct Standalone Editorial Article (Sample 3) */
  .lab-styled-preview[data-style="luxury-typography"] > article,
  .luxury-typography-styled-container > article,
  .style-luxury-typography > article,
  [data-style="luxury-typography"] > article,
  .ds-scope[data-style-id="luxury-typography"] > article,
  .style-luxury > article,
  [data-style="luxury"] > article,
  .ds-scope[data-style-id="luxury"] > article {
    max-width: 680px;
    margin: 0 auto;
    padding: 2rem 0 5rem !important;
  }

  .lab-styled-preview[data-style="luxury-typography"] > article > p:first-of-type::first-letter,
  .luxury-typography-styled-container > article > p:first-of-type::first-letter,
  .style-luxury-typography > article > p:first-of-type::first-letter,
  [data-style="luxury-typography"] > article > p:first-of-type::first-letter,
  .ds-scope[data-style-id="luxury-typography"] > article > p:first-of-type::first-letter,
  .style-luxury > article > p:first-of-type::first-letter,
  [data-style="luxury"] > article > p:first-of-type::first-letter,
  .ds-scope[data-style-id="luxury"] > article > p:first-of-type::first-letter {
    font-family: 'Playfair Display', 'Cormorant Garamond', serif;
    font-size: 3.75rem;
    font-style: italic;
    float: left;
    line-height: 0.82;
    padding-right: 0.75rem;
    padding-top: 0.2rem;
    color: #121211;
    font-weight: 500;
  }

  /* Context B: Portfolio Selected Work (Sample 1) — Open Lookbook Spreads */
  .lab-styled-preview[data-style="luxury-typography"] section > article,
  .luxury-typography-styled-container section > article,
  .style-luxury-typography section > article,
  [data-style="luxury-typography"] section > article,
  .ds-scope[data-style-id="luxury-typography"] section > article,
  .style-luxury section > article,
  [data-style="luxury"] section > article,
  .ds-scope[data-style-id="luxury"] section > article {
    border-bottom: 1px solid #eae6df !important;
    padding: 2.25rem 0 2.5rem !important;
    margin-bottom: 0;
    transition: padding-left 220ms ease;
  }

  .lab-styled-preview[data-style="luxury-typography"] section > article:hover,
  .luxury-typography-styled-container section > article:hover,
  .style-luxury-typography section > article:hover,
  [data-style="luxury-typography"] section > article:hover,
  .ds-scope[data-style-id="luxury-typography"] section > article:hover,
  .style-luxury section > article:hover,
  [data-style="luxury"] section > article:hover,
  .ds-scope[data-style-id="luxury"] section > article:hover {
    padding-left: 1rem !important;
  }

  .lab-styled-preview[data-style="luxury-typography"] section > article:nth-child(3n+1)::before,
  .luxury-typography-styled-container section > article:nth-child(3n+1)::before,
  .style-luxury-typography section > article:nth-child(3n+1)::before,
  [data-style="luxury-typography"] section > article:nth-child(3n+1)::before,
  .ds-scope[data-style-id="luxury-typography"] section > article:nth-child(3n+1)::before,
  .style-luxury section > article:nth-child(3n+1)::before,
  [data-style="luxury"] section > article:nth-child(3n+1)::before,
  .ds-scope[data-style-id="luxury"] section > article:nth-child(3n+1)::before {
    content: 'EDITION 01';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.3em;
    color: #c2a67e;
    display: block;
    margin-bottom: 0.65rem;
  }

  .lab-styled-preview[data-style="luxury-typography"] section > article:nth-child(3n+2)::before,
  .luxury-typography-styled-container section > article:nth-child(3n+2)::before,
  .style-luxury-typography section > article:nth-child(3n+2)::before,
  [data-style="luxury-typography"] section > article:nth-child(3n+2)::before,
  .ds-scope[data-style-id="luxury-typography"] section > article:nth-child(3n+2)::before,
  .style-luxury section > article:nth-child(3n+2)::before,
  [data-style="luxury"] section > article:nth-child(3n+2)::before,
  .ds-scope[data-style-id="luxury"] section > article:nth-child(3n+2)::before {
    content: 'EDITION 02';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.3em;
    color: #8c867e;
    display: block;
    margin-bottom: 0.65rem;
  }

  .lab-styled-preview[data-style="luxury-typography"] section > article:nth-child(3n+3)::before,
  .luxury-typography-styled-container section > article:nth-child(3n+3)::before,
  .style-luxury-typography section > article:nth-child(3n+3)::before,
  [data-style="luxury-typography"] section > article:nth-child(3n+3)::before,
  .ds-scope[data-style-id="luxury-typography"] section > article:nth-child(3n+3)::before,
  .style-luxury section > article:nth-child(3n+3)::before,
  [data-style="luxury"] section > article:nth-child(3n+3)::before,
  .ds-scope[data-style-id="luxury"] section > article:nth-child(3n+3)::before {
    content: 'EDITION 03';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.3em;
    color: #54504a;
    display: block;
    margin-bottom: 0.65rem;
  }

  /* Context C: SaaS Pricing (Sample 2) & Dashboard Data (Sample 4) */
  .lab-styled-preview[data-style="luxury-typography"] section > div > article,
  .luxury-typography-styled-container section > div > article,
  .style-luxury-typography section > div > article,
  [data-style="luxury-typography"] section > div > article,
  .ds-scope[data-style-id="luxury-typography"] section > div > article,
  .style-luxury section > div > article,
  [data-style="luxury"] section > div > article,
  .ds-scope[data-style-id="luxury"] section > div > article {
    background: #ffffff !important;
    border: 1px solid #eae6df !important;
    border-radius: 0px !important;
    padding: 3.25rem 2.25rem !important;
    box-shadow: none !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: border-color 200ms ease;
  }

  .lab-styled-preview[data-style="luxury-typography"] section > div > article strong,
  .luxury-typography-styled-container section > div > article strong,
  .style-luxury-typography section > div > article strong,
  [data-style="luxury-typography"] section > div > article strong,
  .ds-scope[data-style-id="luxury-typography"] section > div > article strong,
  .style-luxury section > div > article strong,
  [data-style="luxury"] section > div > article strong,
  .ds-scope[data-style-id="luxury"] section > div > article strong {
    font-family: 'Playfair Display', 'Cormorant Garamond', serif;
    font-size: clamp(2.25rem, 4.2vw, 3.25rem);
    font-weight: 400;
    color: #121211;
    display: block;
    margin: 1.5rem 0 1.75rem;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
  }

  /* Featured Plan: Restrained Champagne Top Accent */
  .lab-styled-preview[data-style="luxury-typography"] section > div > article:nth-child(2):has(button),
  .luxury-typography-styled-container section > div > article:nth-child(2):has(button),
  .style-luxury-typography section > div > article:nth-child(2):has(button),
  [data-style="luxury-typography"] section > div > article:nth-child(2):has(button),
  .ds-scope[data-style-id="luxury-typography"] section > div > article:nth-child(2):has(button),
  .style-luxury section > div > article:nth-child(2):has(button),
  [data-style="luxury"] section > div > article:nth-child(2):has(button),
  .ds-scope[data-style-id="luxury"] section > div > article:nth-child(2):has(button) {
    background: #fdfcf9 !important;
    border: 1px solid #121211 !important;
    border-top: 3px solid #c2a67e !important;
    position: relative;
  }

  .lab-styled-preview[data-style="luxury-typography"] section > div > article:nth-child(2):has(button)::before,
  .luxury-typography-styled-container section > div > article:nth-child(2):has(button)::before,
  .style-luxury-typography section > div > article:nth-child(2):has(button)::before,
  [data-style="luxury-typography"] section > div > article:nth-child(2):has(button)::before,
  .ds-scope[data-style-id="luxury-typography"] section > div > article:nth-child(2):has(button)::before,
  .style-luxury section > div > article:nth-child(2):has(button)::before,
  [data-style="luxury"] section > div > article:nth-child(2):has(button)::before,
  .ds-scope[data-style-id="luxury"] section > div > article:nth-child(2):has(button)::before {
    content: 'COLLECTION SELECTION';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.28em;
    color: #c2a67e;
    display: block;
    margin-bottom: 1.25rem;
    text-transform: uppercase;
  }

  /* Context D: Restaurant Menu Lookbook (Sample 6) */
  .lab-styled-preview[data-style="luxury-typography"] section > article:has(ul),
  .luxury-typography-styled-container section > article:has(ul),
  .style-luxury-typography section > article:has(ul),
  [data-style="luxury-typography"] section > article:has(ul),
  .ds-scope[data-style-id="luxury-typography"] section > article:has(ul),
  .style-luxury section > article:has(ul),
  [data-style="luxury"] section > article:has(ul),
  .ds-scope[data-style-id="luxury"] section > article:has(ul) {
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid #eae6df !important;
    border-radius: 0 !important;
    padding: 3rem 0 !important;
    box-shadow: none !important;
  }

  /* 7. Unordered & Ordered Lists: Refined Editorial Formatting */
  .lab-styled-preview[data-style="luxury-typography"] ul,
  .lab-styled-preview[data-style="luxury-typography"] ol,
  .luxury-typography-styled-container ul,
  .style-luxury-typography ul,
  [data-style="luxury-typography"] ul,
  .ds-scope[data-style-id="luxury-typography"] ul,
  .style-luxury ul,
  [data-style="luxury"] ul,
  .ds-scope[data-style-id="luxury"] ul,
  .luxury-typography-styled-container ol,
  .style-luxury-typography ol,
  [data-style="luxury-typography"] ol,
  .ds-scope[data-style-id="luxury-typography"] ol,
  .style-luxury ol,
  [data-style="luxury"] ol,
  .ds-scope[data-style-id="luxury"] ol {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.75rem 0 !important;
  }

  .lab-styled-preview[data-style="luxury-typography"] li,
  .luxury-typography-styled-container li,
  .style-luxury-typography li,
  [data-style="luxury-typography"] li,
  .ds-scope[data-style-id="luxury-typography"] li,
  .style-luxury li,
  [data-style="luxury"] li,
  .ds-scope[data-style-id="luxury"] li {
    position: relative;
    padding-left: 1.75rem;
    margin-bottom: 1rem;
    font-size: 0.9375rem;
    color: #4a4744;
    line-height: 1.7;
  }

  .lab-styled-preview[data-style="luxury-typography"] li::before,
  .luxury-typography-styled-container li::before,
  .style-luxury-typography li::before,
  [data-style="luxury-typography"] li::before,
  .ds-scope[data-style-id="luxury-typography"] li::before,
  .style-luxury li::before,
  [data-style="luxury"] li::before,
  .ds-scope[data-style-id="luxury"] li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: #c2a67e;
    font-size: 0.75rem;
    top: 0.1rem;
  }

  /* Restaurant Fine-Dining Tasting Menu (Sample 6) */
  .lab-styled-preview[data-style="luxury-typography"] section > article ul li,
  .luxury-typography-styled-container section > article ul li,
  .style-luxury-typography section > article ul li,
  [data-style="luxury-typography"] section > article ul li,
  .ds-scope[data-style-id="luxury-typography"] section > article ul li,
  .style-luxury section > article ul li,
  [data-style="luxury"] section > article ul li,
  .ds-scope[data-style-id="luxury"] section > article ul li {
    padding-left: 0;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f0ece5;
  }

  .lab-styled-preview[data-style="luxury-typography"] section > article ul li::before,
  .luxury-typography-styled-container section > article ul li::before,
  .style-luxury-typography section > article ul li::before,
  [data-style="luxury-typography"] section > article ul li::before,
  .ds-scope[data-style-id="luxury-typography"] section > article ul li::before,
  .style-luxury section > article ul li::before,
  [data-style="luxury"] section > article ul li::before,
  .ds-scope[data-style-id="luxury"] section > article ul li::before {
    display: none;
  }

  .lab-styled-preview[data-style="luxury-typography"] section > article ul li strong,
  .luxury-typography-styled-container section > article ul li strong,
  .style-luxury-typography section > article ul li strong,
  [data-style="luxury-typography"] section > article ul li strong,
  .ds-scope[data-style-id="luxury-typography"] section > article ul li strong,
  .style-luxury section > article ul li strong,
  [data-style="luxury"] section > article ul li strong,
  .ds-scope[data-style-id="luxury"] section > article ul li strong {
    font-family: 'Playfair Display', 'Cormorant Garamond', serif;
    font-size: 1.25rem;
    font-weight: 500;
    color: #121211;
  }

  .lab-styled-preview[data-style="luxury-typography"] section > article ul li p,
  .luxury-typography-styled-container section > article ul li p,
  .style-luxury-typography section > article ul li p,
  [data-style="luxury-typography"] section > article ul li p,
  .ds-scope[data-style-id="luxury-typography"] section > article ul li p,
  .style-luxury section > article ul li p,
  [data-style="luxury"] section > article ul li p,
  .ds-scope[data-style-id="luxury"] section > article ul li p {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: #736d65;
    margin-top: 0.4rem;
    margin-bottom: 0;
    line-height: 1.65;
    font-style: italic;
  }

  /* 8. Editorial Blockquote: High-Fashion Magazine Pullquote */
  .lab-styled-preview[data-style="luxury-typography"] blockquote,
  .luxury-typography-styled-container blockquote,
  .style-luxury-typography blockquote,
  [data-style="luxury-typography"] blockquote,
  .ds-scope[data-style-id="luxury-typography"] blockquote,
  .style-luxury blockquote,
  [data-style="luxury"] blockquote,
  .ds-scope[data-style-id="luxury"] blockquote {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-style: italic;
    font-size: 1.5rem;
    line-height: 1.65;
    color: #121211;
    background: transparent;
    border-left: 2px solid #121211;
    padding: 1.5rem 0 1.5rem 2.5rem;
    margin: 4rem 0;
    position: relative;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="luxury-typography"] blockquote::before,
  .luxury-typography-styled-container blockquote::before,
  .style-luxury-typography blockquote::before,
  [data-style="luxury-typography"] blockquote::before,
  .ds-scope[data-style-id="luxury-typography"] blockquote::before,
  .style-luxury blockquote::before,
  [data-style="luxury"] blockquote::before,
  .ds-scope[data-style-id="luxury"] blockquote::before {
    content: '“';
    font-family: 'Playfair Display', serif;
    font-size: 5rem;
    line-height: 0.6;
    position: absolute;
    left: 0.25rem;
    top: 1rem;
    color: #c2a67e;
    opacity: 0.35;
    font-style: normal;
  }

  /* 9. Minimalist Form Controls: Delicate 1px Borders, Uppercase Labels */
  .lab-styled-preview[data-style="luxury-typography"] form,
  .luxury-typography-styled-container form,
  .style-luxury-typography form,
  [data-style="luxury-typography"] form,
  .ds-scope[data-style-id="luxury-typography"] form,
  .style-luxury form,
  [data-style="luxury"] form,
  .ds-scope[data-style-id="luxury"] form {
    max-width: 520px;
  }

  .lab-styled-preview[data-style="luxury-typography"] label,
  .luxury-typography-styled-container label,
  .style-luxury-typography label,
  [data-style="luxury-typography"] label,
  .ds-scope[data-style-id="luxury-typography"] label,
  .style-luxury label,
  [data-style="luxury"] label,
  .ds-scope[data-style-id="luxury"] label {
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: #54504a;
    display: block;
    margin-bottom: 0.65rem;
  }

  .lab-styled-preview[data-style="luxury-typography"] input,
  .lab-styled-preview[data-style="luxury-typography"] select,
  .lab-styled-preview[data-style="luxury-typography"] textarea,
  .luxury-typography-styled-container input,
  .style-luxury-typography input,
  [data-style="luxury-typography"] input,
  .ds-scope[data-style-id="luxury-typography"] input,
  .style-luxury input,
  [data-style="luxury"] input,
  .ds-scope[data-style-id="luxury"] input,
  .luxury-typography-styled-container select,
  .style-luxury-typography select,
  [data-style="luxury-typography"] select,
  .ds-scope[data-style-id="luxury-typography"] select,
  .style-luxury select,
  [data-style="luxury"] select,
  .ds-scope[data-style-id="luxury"] select,
  .luxury-typography-styled-container textarea,
  .style-luxury-typography textarea,
  [data-style="luxury-typography"] textarea,
  .ds-scope[data-style-id="luxury-typography"] textarea,
  .style-luxury textarea,
  [data-style="luxury"] textarea,
  .ds-scope[data-style-id="luxury"] textarea {
    background-color: #ffffff !important;
    border: 1px solid #eae6df !important;
    border-radius: 0px !important;
    padding: 0.95rem 1.15rem !important;
    color: #121211 !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 0.9375rem !important;
    margin-bottom: 1.5rem !important;
    box-shadow: none !important;
    transition: border-color 180ms ease !important;
  }

  .lab-styled-preview[data-style="luxury-typography"] input:focus,
  .lab-styled-preview[data-style="luxury-typography"] select:focus,
  .lab-styled-preview[data-style="luxury-typography"] textarea:focus,
  .luxury-typography-styled-container input:focus,
  .style-luxury-typography input:focus,
  [data-style="luxury-typography"] input:focus,
  .ds-scope[data-style-id="luxury-typography"] input:focus,
  .style-luxury input:focus,
  [data-style="luxury"] input:focus,
  .ds-scope[data-style-id="luxury"] input:focus,
  .luxury-typography-styled-container select:focus,
  .style-luxury-typography select:focus,
  [data-style="luxury-typography"] select:focus,
  .ds-scope[data-style-id="luxury-typography"] select:focus,
  .style-luxury select:focus,
  [data-style="luxury"] select:focus,
  .ds-scope[data-style-id="luxury"] select:focus,
  .luxury-typography-styled-container textarea:focus,
  .style-luxury-typography textarea:focus,
  [data-style="luxury-typography"] textarea:focus,
  .ds-scope[data-style-id="luxury-typography"] textarea:focus,
  .style-luxury textarea:focus,
  [data-style="luxury"] textarea:focus,
  .ds-scope[data-style-id="luxury"] textarea:focus {
    border-color: #121211 !important;
    outline: none !important;
  }

  /* 10. Data Tables: Tabular Editorial Ledger with Delicate Hairlines */
  .lab-styled-preview[data-style="luxury-typography"] table,
  .luxury-typography-styled-container table,
  .style-luxury-typography table,
  [data-style="luxury-typography"] table,
  .ds-scope[data-style-id="luxury-typography"] table,
  .style-luxury table,
  [data-style="luxury"] table,
  .ds-scope[data-style-id="luxury"] table {
    width: 100% !important;
    border-collapse: collapse !important;
    margin: 2.5rem 0 !important;
    font-family: 'Inter', sans-serif !important;
    border-top: 1px solid #121211 !important;
    border-bottom: 1px solid #121211 !important;
  }

  .lab-styled-preview[data-style="luxury-typography"] th,
  .luxury-typography-styled-container th,
  .style-luxury-typography th,
  [data-style="luxury-typography"] th,
  .ds-scope[data-style-id="luxury-typography"] th,
  .style-luxury th,
  [data-style="luxury"] th,
  .ds-scope[data-style-id="luxury"] th {
    font-family: 'Inter', sans-serif !important;
    font-size: 0.6875rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.26em !important;
    text-transform: uppercase !important;
    color: #54504a !important;
    padding: 1.25rem 1rem !important;
    text-align: left !important;
    border-bottom: 1px solid #eae6df !important;
  }

  .lab-styled-preview[data-style="luxury-typography"] td,
  .luxury-typography-styled-container td,
  .style-luxury-typography td,
  [data-style="luxury-typography"] td,
  .ds-scope[data-style-id="luxury-typography"] td,
  .style-luxury td,
  [data-style="luxury"] td,
  .ds-scope[data-style-id="luxury"] td {
    padding: 1.25rem 1rem !important;
    font-size: 0.9375rem !important;
    color: #121211 !important;
    border-bottom: 1px solid #f2eee8 !important;
    font-variant-numeric: tabular-nums !important;
  }

  .lab-styled-preview[data-style="luxury-typography"] tr:hover td,
  .luxury-typography-styled-container tr:hover td,
  .style-luxury-typography tr:hover td,
  [data-style="luxury-typography"] tr:hover td,
  .ds-scope[data-style-id="luxury-typography"] tr:hover td,
  .style-luxury tr:hover td,
  [data-style="luxury"] tr:hover td,
  .ds-scope[data-style-id="luxury"] tr:hover td {
    background-color: #f7f4ed !important;
  }

  /* 11. Architectural Footer: Typographic Dignity and Closing Rule */
  .lab-styled-preview[data-style="luxury-typography"] footer,
  .luxury-typography-styled-container footer,
  .style-luxury-typography footer,
  [data-style="luxury-typography"] footer,
  .ds-scope[data-style-id="luxury-typography"] footer,
  .style-luxury footer,
  [data-style="luxury"] footer,
  .ds-scope[data-style-id="luxury"] footer {
    border-top: 1px solid #121211;
    padding: 4.5rem 0 2rem;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
  }

  .lab-styled-preview[data-style="luxury-typography"] footer p,
  .luxury-typography-styled-container footer p,
  .style-luxury-typography footer p,
  [data-style="luxury-typography"] footer p,
  .ds-scope[data-style-id="luxury-typography"] footer p,
  .style-luxury footer p,
  [data-style="luxury"] footer p,
  .ds-scope[data-style-id="luxury"] footer p {
    font-family: 'Inter', sans-serif;
    font-size: 0.71875rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #8c867e;
    margin: 0;
  }

  /* 12. Imagery: Uncluttered Clean Editorial Presentation */
  .lab-styled-preview[data-style="luxury-typography"] img,
  .luxury-typography-styled-container img,
  .style-luxury-typography img,
  [data-style="luxury-typography"] img,
  .ds-scope[data-style-id="luxury-typography"] img,
  .style-luxury img,
  [data-style="luxury"] img,
  .ds-scope[data-style-id="luxury"] img {
    border-radius: 0px !important;
    border: 1px solid #eae6df !important;
    filter: grayscale(15%) contrast(102%) !important;
  }

  /* 13. Mobile Responsiveness: Fluid Typographic Scale and Spacing */
  @media (max-width: 640px) {
    .lab-styled-preview[data-style="luxury-typography"] nav,
    .luxury-typography-styled-container nav,
    .style-luxury-typography nav,
    [data-style="luxury-typography"] nav,
    .ds-scope[data-style-id="luxury-typography"] nav,
    .style-luxury nav,
    [data-style="luxury"] nav,
    .ds-scope[data-style-id="luxury"] nav {
      gap: 1.25rem !important;
      margin-bottom: 2.75rem !important;
    }
    .lab-styled-preview[data-style="luxury-typography"] h1,
    .luxury-typography-styled-container h1,
    .style-luxury-typography h1,
    [data-style="luxury-typography"] h1,
    .ds-scope[data-style-id="luxury-typography"] h1,
    .style-luxury h1,
    [data-style="luxury"] h1,
    .ds-scope[data-style-id="luxury"] h1 {
      font-size: clamp(1.85rem, 7vw, 2.75rem) !important;
      margin-bottom: 1.5rem !important;
    }
    .lab-styled-preview[data-style="luxury-typography"] h2,
    .luxury-typography-styled-container h2,
    .style-luxury-typography h2,
    [data-style="luxury-typography"] h2,
    .ds-scope[data-style-id="luxury-typography"] h2,
    .style-luxury h2,
    [data-style="luxury"] h2,
    .ds-scope[data-style-id="luxury"] h2 {
      font-size: 1.65rem !important;
      margin-top: 2.5rem !important;
    }
    .lab-styled-preview[data-style="luxury-typography"] button,
    .luxury-typography-styled-container button,
    .style-luxury-typography button,
    [data-style="luxury-typography"] button,
    .ds-scope[data-style-id="luxury-typography"] button,
    .style-luxury button,
    [data-style="luxury"] button,
    .ds-scope[data-style-id="luxury"] button {
      width: 100% !important;
      justify-content: center !important;
    }
    .lab-styled-preview[data-style="luxury-typography"] button + button,
    .luxury-typography-styled-container button + button,
    .style-luxury-typography button + button,
    [data-style="luxury-typography"] button + button,
    .ds-scope[data-style-id="luxury-typography"] button + button,
    .style-luxury button + button,
    [data-style="luxury"] button + button,
    .ds-scope[data-style-id="luxury"] button + button {
      margin-left: 0 !important;
      margin-top: 0.75rem !important;
    }
  }
`;
