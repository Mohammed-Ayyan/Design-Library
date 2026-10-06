/**
 * Surrealism Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Surrealism
 * is applied. Centered on dreamlike logic, sculptural editorial typography,
 * subtle atmospheric haze, celestial orbit motifs, asymmetric portal curvature,
 * and unexpected scale tension—preserving the user's underlying HTML structure
 * with zero DOM mutations.
 */

export const surrealDesignSemanticCss = `
  /* ==========================================================================
     SURREALISM — ART-DIRECTED SEMANTIC STYLESHEET
     
     Core Logic:
     - Dreamlike, poetic, uncanny, imaginative visual atmosphere
     - Unexpected scale tension: monumental display serifs vs whispered metadata
     - No cardifying everything: open editorial compositions, arranged planes
     - Artistic palette: deep ink, warm alabaster cream, muted lavender, dusty blue,
       strange green, coral terracotta, and deep dream burgundy
     - Displaced rules, celestial orbit motifs, and zero DOM mutation
     ========================================================================== */

  /* 0. Canvas Foundation: Warm Alabaster Canvas with Multi-stop Dreamlike Atmosphere */
  .lab-styled-preview[data-style="surrealism"],
  .surrealism-styled-container,
  .style-surrealism,
  [data-style="surrealism"],
  .ds-scope[data-style-id="surrealism"],
  .style-surreal,
  [data-style="surreal"],
  .ds-scope[data-style-id="surreal"] {
    background-color: #f5f2eb !important;
    background-image: 
      radial-gradient(circle at 14% 10%, rgba(110, 93, 122, 0.08) 0%, transparent 45%),
      radial-gradient(circle at 86% 88%, rgba(217, 119, 98, 0.09) 0%, transparent 50%),
      radial-gradient(circle at 78% 18%, rgba(61, 102, 82, 0.06) 0%, transparent 40%),
      radial-gradient(circle at 20% 85%, rgba(66, 93, 115, 0.07) 0%, transparent 42%) !important;
    color: #16151a !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.68 !important;
    box-shadow: none !important;
    position: relative !important;
    overflow-x: hidden !important;
  }

  /* Celestial Horizon & Suspended Planetary Motif (Non-blocking) */
  .lab-styled-preview[data-style="surrealism"]::before,
  .surrealism-styled-container::before,
  .style-surrealism::before,
  [data-style="surrealism"]::before,
  .ds-scope[data-style-id="surrealism"]::before,
  .style-surreal::before,
  [data-style="surreal"]::before,
  .ds-scope[data-style-id="surreal"]::before {
    content: '';
    position: absolute;
    top: -80px;
    right: -80px;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    border: 1px dashed rgba(217, 119, 98, 0.28);
    pointer-events: none;
    z-index: 0;
  }

  .lab-styled-preview[data-style="surrealism"]::after,
  .surrealism-styled-container::after,
  .style-surrealism::after,
  [data-style="surrealism"]::after,
  .ds-scope[data-style-id="surrealism"]::after,
  .style-surreal::after,
  [data-style="surreal"]::after,
  .ds-scope[data-style-id="surreal"]::after {
    content: '';
    position: absolute;
    top: 52px;
    right: 52px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #d97762;
    box-shadow: 0 0 18px rgba(217, 119, 98, 0.7), 0 0 32px rgba(217, 119, 98, 0.3);
    opacity: 0.75;
    pointer-events: none;
    z-index: 0;
  }

  /* 1. Poetic Navigation: Celestial Spacing & Displaced Separation */
  .lab-styled-preview[data-style="surrealism"] nav,
  .surrealism-styled-container nav,
  .style-surrealism nav,
  [data-style="surrealism"] nav,
  .ds-scope[data-style-id="surrealism"] nav,
  .style-surreal nav,
  [data-style="surreal"] nav,
  .ds-scope[data-style-id="surreal"] nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    padding: 1.25rem 0 1.5rem;
    border-bottom: 1px solid rgba(209, 201, 189, 0.65);
    margin-bottom: 3.5rem;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="surrealism"] nav a,
  .surrealism-styled-container nav a,
  .style-surrealism nav a,
  [data-style="surrealism"] nav a,
  .ds-scope[data-style-id="surrealism"] nav a,
  .style-surreal nav a,
  [data-style="surreal"] nav a,
  .ds-scope[data-style-id="surreal"] nav a {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #16151a;
    text-decoration: none;
    padding: 0.35rem 0;
    position: relative;
    transition: color 200ms ease, text-shadow 200ms ease;
    display: inline-flex;
    align-items: center;
  }

  .lab-styled-preview[data-style="surrealism"] nav a:hover,
  .surrealism-styled-container nav a:hover,
  .style-surrealism nav a:hover,
  [data-style="surrealism"] nav a:hover,
  .ds-scope[data-style-id="surrealism"] nav a:hover,
  .style-surreal nav a:hover,
  [data-style="surreal"] nav a:hover,
  .ds-scope[data-style-id="surreal"] nav a:hover {
    color: #d97762;
    text-shadow: 0 0 14px rgba(217, 119, 98, 0.4);
    text-decoration: none;
  }

  .lab-styled-preview[data-style="surrealism"] nav a:first-child,
  .surrealism-styled-container nav a:first-child,
  .style-surrealism nav a:first-child,
  [data-style="surrealism"] nav a:first-child,
  .ds-scope[data-style-id="surrealism"] nav a:first-child,
  .style-surreal nav a:first-child,
  [data-style="surreal"] nav a:first-child,
  .ds-scope[data-style-id="surreal"] nav a:first-child {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    text-transform: none;
    color: #3b1124;
    margin-right: 0.5rem;
  }

  .lab-styled-preview[data-style="surrealism"] nav a:first-child::before,
  .surrealism-styled-container nav a:first-child::before,
  .style-surrealism nav a:first-child::before,
  [data-style="surrealism"] nav a:first-child::before,
  .ds-scope[data-style-id="surrealism"] nav a:first-child::before,
  .style-surreal nav a:first-child::before,
  [data-style="surreal"] nav a:first-child::before,
  .ds-scope[data-style-id="surreal"] nav a:first-child::before {
    content: '✦ ';
    font-size: 0.75rem;
    color: #d97762;
    margin-right: 0.35rem;
  }

  /* 2. Whispered Eyebrows & Metadata: Tiny, Tracked, Celestial Scale Tension */
  .lab-styled-preview[data-style="surrealism"] header > p:first-child,
  .lab-styled-preview[data-style="surrealism"] section > p:first-child:not(:last-child),
  .surrealism-styled-container header > p:first-child,
  .style-surrealism header > p:first-child,
  [data-style="surrealism"] header > p:first-child,
  .ds-scope[data-style-id="surrealism"] header > p:first-child,
  .style-surreal header > p:first-child,
  [data-style="surreal"] header > p:first-child,
  .ds-scope[data-style-id="surreal"] header > p:first-child,
  .surrealism-styled-container section > p:first-child:not(:last-child),
  .style-surrealism section > p:first-child:not(:last-child),
  [data-style="surrealism"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="surrealism"] section > p:first-child:not(:last-child),
  .style-surreal section > p:first-child:not(:last-child),
  [data-style="surreal"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="surreal"] section > p:first-child:not(:last-child) {
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.26em;
    color: #d97762;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.65rem;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="surrealism"] header > p:first-child::before,
  .lab-styled-preview[data-style="surrealism"] section > p:first-child:not(:last-child)::before,
  .surrealism-styled-container header > p:first-child::before,
  .style-surrealism header > p:first-child::before,
  [data-style="surrealism"] header > p:first-child::before,
  .ds-scope[data-style-id="surrealism"] header > p:first-child::before,
  .style-surreal header > p:first-child::before,
  [data-style="surreal"] header > p:first-child::before,
  .ds-scope[data-style-id="surreal"] header > p:first-child::before,
  .surrealism-styled-container section > p:first-child:not(:last-child)::before,
  .style-surrealism section > p:first-child:not(:last-child)::before,
  [data-style="surrealism"] section > p:first-child:not(:last-child)::before,
  .ds-scope[data-style-id="surrealism"] section > p:first-child:not(:last-child)::before,
  .style-surreal section > p:first-child:not(:last-child)::before,
  [data-style="surreal"] section > p:first-child:not(:last-child)::before,
  .ds-scope[data-style-id="surreal"] section > p:first-child:not(:last-child)::before {
    content: '✦';
    font-size: 0.8125rem;
    color: #3b1124;
    line-height: 1;
  }

  /* 3. Monumental Display Headings: Sculptural Editorial Serifs */
  .lab-styled-preview[data-style="surrealism"] h1,
  .surrealism-styled-container h1,
  .style-surrealism h1,
  [data-style="surrealism"] h1,
  .ds-scope[data-style-id="surrealism"] h1,
  .style-surreal h1,
  [data-style="surreal"] h1,
  .ds-scope[data-style-id="surreal"] h1 {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: clamp(2.85rem, 6.5vw, 5.25rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: #16151a;
    margin-top: 0;
    margin-bottom: 1.85rem;
    max-width: 18ch;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="surrealism"] h2,
  .surrealism-styled-container h2,
  .style-surrealism h2,
  [data-style="surrealism"] h2,
  .ds-scope[data-style-id="surrealism"] h2,
  .style-surreal h2,
  [data-style="surreal"] h2,
  .ds-scope[data-style-id="surreal"] h2 {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: clamp(1.85rem, 4.2vw, 2.85rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #16151a;
    margin-top: 3.5rem;
    margin-bottom: 1.75rem;
    padding-bottom: 0.85rem;
    border-bottom: 1px solid rgba(209, 201, 189, 0.7);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="surrealism"] h2::after,
  .surrealism-styled-container h2::after,
  .style-surrealism h2::after,
  [data-style="surrealism"] h2::after,
  .ds-scope[data-style-id="surrealism"] h2::after,
  .style-surreal h2::after,
  [data-style="surreal"] h2::after,
  .ds-scope[data-style-id="surreal"] h2::after {
    content: '◎';
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: #d97762;
    opacity: 0.8;
  }

  .lab-styled-preview[data-style="surrealism"] h3,
  .surrealism-styled-container h3,
  .style-surrealism h3,
  [data-style="surrealism"] h3,
  .ds-scope[data-style-id="surrealism"] h3,
  .style-surreal h3,
  [data-style="surreal"] h3,
  .ds-scope[data-style-id="surreal"] h3 {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: 1.45rem;
    font-weight: 600;
    line-height: 1.25;
    color: #211c26;
    margin-top: 0;
    margin-bottom: 0.65rem;
  }

  .lab-styled-preview[data-style="surrealism"] h4,
  .surrealism-styled-container h4,
  .style-surrealism h4,
  [data-style="surrealism"] h4,
  .ds-scope[data-style-id="surrealism"] h4,
  .style-surreal h4,
  [data-style="surreal"] h4,
  .ds-scope[data-style-id="surreal"] h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: #3b1124;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  /* 4. Quiet, Editorial Body Copy: High Intimacy Contrasting Monumental Titles */
  .lab-styled-preview[data-style="surrealism"] p,
  .surrealism-styled-container p,
  .style-surrealism p,
  [data-style="surrealism"] p,
  .ds-scope[data-style-id="surrealism"] p,
  .style-surreal p,
  [data-style="surreal"] p,
  .ds-scope[data-style-id="surreal"] p {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 1.03125rem;
    font-weight: 400;
    line-height: 1.72;
    color: #3b3742;
    margin-top: 0;
    margin-bottom: 1.5rem;
    max-width: 65ch;
    position: relative;
    z-index: 1;
  }

  /* 5. Sculpted Interactive Buttons: Celestial Pill Silhouettes */
  .lab-styled-preview[data-style="surrealism"] button,
  .lab-styled-preview[data-style="surrealism"] input[type="submit"],
  .surrealism-styled-container button,
  .style-surrealism button,
  [data-style="surrealism"] button,
  .ds-scope[data-style-id="surrealism"] button,
  .style-surreal button,
  [data-style="surreal"] button,
  .ds-scope[data-style-id="surreal"] button,
  .surrealism-styled-container input[type="submit"],
  .style-surrealism input[type="submit"],
  [data-style="surrealism"] input[type="submit"],
  .ds-scope[data-style-id="surrealism"] input[type="submit"],
  .style-surreal input[type="submit"],
  [data-style="surreal"] input[type="submit"],
  .ds-scope[data-style-id="surreal"] input[type="submit"] {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    padding: 0.9rem 2.25rem;
    border-radius: 9999px;
    border: 1px solid #3b1124;
    background-color: #3b1124;
    color: #ffffff;
    box-shadow: 0 4px 16px rgba(59, 17, 36, 0.24);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    text-decoration: none;
    transition: all 220ms cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="surrealism"] button:hover,
  .lab-styled-preview[data-style="surrealism"] input[type="submit"]:hover,
  .surrealism-styled-container button:hover,
  .style-surrealism button:hover,
  [data-style="surrealism"] button:hover,
  .ds-scope[data-style-id="surrealism"] button:hover,
  .style-surreal button:hover,
  [data-style="surreal"] button:hover,
  .ds-scope[data-style-id="surreal"] button:hover,
  .surrealism-styled-container input[type="submit"]:hover,
  .style-surrealism input[type="submit"]:hover,
  [data-style="surrealism"] input[type="submit"]:hover,
  .ds-scope[data-style-id="surrealism"] input[type="submit"]:hover,
  .style-surreal input[type="submit"]:hover,
  [data-style="surreal"] input[type="submit"]:hover,
  .ds-scope[data-style-id="surreal"] input[type="submit"]:hover {
    background-color: #d97762;
    border-color: #d97762;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(217, 119, 98, 0.4);
  }

  .lab-styled-preview[data-style="surrealism"] button:active,
  .lab-styled-preview[data-style="surrealism"] input[type="submit"]:active,
  .surrealism-styled-container button:active,
  .style-surrealism button:active,
  [data-style="surrealism"] button:active,
  .ds-scope[data-style-id="surrealism"] button:active,
  .style-surreal button:active,
  [data-style="surreal"] button:active,
  .ds-scope[data-style-id="surreal"] button:active,
  .surrealism-styled-container input[type="submit"]:active,
  .style-surrealism input[type="submit"]:active,
  [data-style="surrealism"] input[type="submit"]:active,
  .ds-scope[data-style-id="surrealism"] input[type="submit"]:active,
  .style-surreal input[type="submit"]:active,
  [data-style="surreal"] input[type="submit"]:active,
  .ds-scope[data-style-id="surreal"] input[type="submit"]:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(59, 17, 36, 0.25);
  }

  /* Secondary Button: Ethereal Outline */
  .lab-styled-preview[data-style="surrealism"] button + button,
  .surrealism-styled-container button + button,
  .style-surrealism button + button,
  [data-style="surrealism"] button + button,
  .ds-scope[data-style-id="surrealism"] button + button,
  .style-surreal button + button,
  [data-style="surreal"] button + button,
  .ds-scope[data-style-id="surreal"] button + button {
    background-color: transparent;
    color: #16151a;
    border: 1px solid #4a4552;
    box-shadow: none;
    margin-left: 0.75rem;
  }

  .lab-styled-preview[data-style="surrealism"] button + button:hover,
  .surrealism-styled-container button + button:hover,
  .style-surrealism button + button:hover,
  [data-style="surrealism"] button + button:hover,
  .ds-scope[data-style-id="surrealism"] button + button:hover,
  .style-surreal button + button:hover,
  [data-style="surreal"] button + button:hover,
  .ds-scope[data-style-id="surreal"] button + button:hover {
    background-color: rgba(217, 119, 98, 0.1);
    border-color: #d97762;
    color: #d97762;
    box-shadow: none;
  }

  /* 6. Surfaces & Articles: DO NOT CARDIFY EVERYTHING. Open, Arranged Composition */
  /* Reset generic card defaults from playground */
  .lab-styled-preview[data-style="surrealism"] article,
  .surrealism-styled-container article,
  .style-surrealism article,
  [data-style="surrealism"] article,
  .ds-scope[data-style-id="surrealism"] article,
  .style-surreal article,
  [data-style="surreal"] article,
  .ds-scope[data-style-id="surreal"] article {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }

  /* Context A: Direct Standalone Article (Editorial Sample 3) */
  .lab-styled-preview[data-style="surrealism"] > article,
  .surrealism-styled-container > article,
  .style-surrealism > article,
  [data-style="surrealism"] > article,
  .ds-scope[data-style-id="surrealism"] > article,
  .style-surreal > article,
  [data-style="surreal"] > article,
  .ds-scope[data-style-id="surreal"] > article {
    max-width: 720px;
    margin: 0 auto;
    padding: 1rem 0 3rem !important;
  }

  .lab-styled-preview[data-style="surrealism"] > article > p:first-of-type,
  .surrealism-styled-container > article > p:first-of-type,
  .style-surrealism > article > p:first-of-type,
  [data-style="surrealism"] > article > p:first-of-type,
  .ds-scope[data-style-id="surrealism"] > article > p:first-of-type,
  .style-surreal > article > p:first-of-type,
  [data-style="surreal"] > article > p:first-of-type,
  .ds-scope[data-style-id="surreal"] > article > p:first-of-type {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #211c26;
  }

  /* Context B: Portfolio / Selected Work Rows (Sample 1) */
  .lab-styled-preview[data-style="surrealism"] section > article,
  .surrealism-styled-container section > article,
  .style-surrealism section > article,
  [data-style="surrealism"] section > article,
  .ds-scope[data-style-id="surrealism"] section > article,
  .style-surreal section > article,
  [data-style="surreal"] section > article,
  .ds-scope[data-style-id="surreal"] section > article {
    border-bottom: 1px solid rgba(209, 201, 189, 0.6) !important;
    padding: 1.75rem 0 2rem !important;
    margin-bottom: 0;
    transition: background-color 200ms ease, padding-left 200ms ease;
  }

  .lab-styled-preview[data-style="surrealism"] section > article:hover,
  .surrealism-styled-container section > article:hover,
  .style-surrealism section > article:hover,
  [data-style="surrealism"] section > article:hover,
  .ds-scope[data-style-id="surrealism"] section > article:hover,
  .style-surreal section > article:hover,
  [data-style="surreal"] section > article:hover,
  .ds-scope[data-style-id="surreal"] section > article:hover {
    background-color: rgba(217, 119, 98, 0.03) !important;
    padding-left: 0.75rem !important;
  }

  .lab-styled-preview[data-style="surrealism"] section > article:nth-child(3n+1)::before,
  .surrealism-styled-container section > article:nth-child(3n+1)::before,
  .style-surrealism section > article:nth-child(3n+1)::before,
  [data-style="surrealism"] section > article:nth-child(3n+1)::before,
  .ds-scope[data-style-id="surrealism"] section > article:nth-child(3n+1)::before,
  .style-surreal section > article:nth-child(3n+1)::before,
  [data-style="surreal"] section > article:nth-child(3n+1)::before,
  .ds-scope[data-style-id="surreal"] section > article:nth-child(3n+1)::before {
    content: '✦ I';
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 0.8125rem;
    color: #d97762;
    display: block;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1em;
  }

  .lab-styled-preview[data-style="surrealism"] section > article:nth-child(3n+2)::before,
  .surrealism-styled-container section > article:nth-child(3n+2)::before,
  .style-surrealism section > article:nth-child(3n+2)::before,
  [data-style="surrealism"] section > article:nth-child(3n+2)::before,
  .ds-scope[data-style-id="surrealism"] section > article:nth-child(3n+2)::before,
  .style-surreal section > article:nth-child(3n+2)::before,
  [data-style="surreal"] section > article:nth-child(3n+2)::before,
  .ds-scope[data-style-id="surreal"] section > article:nth-child(3n+2)::before {
    content: '✦ II';
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 0.8125rem;
    color: #3b1124;
    display: block;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1em;
  }

  .lab-styled-preview[data-style="surrealism"] section > article:nth-child(3n+3)::before,
  .surrealism-styled-container section > article:nth-child(3n+3)::before,
  .style-surrealism section > article:nth-child(3n+3)::before,
  [data-style="surrealism"] section > article:nth-child(3n+3)::before,
  .ds-scope[data-style-id="surrealism"] section > article:nth-child(3n+3)::before,
  .style-surreal section > article:nth-child(3n+3)::before,
  [data-style="surreal"] section > article:nth-child(3n+3)::before,
  .ds-scope[data-style-id="surreal"] section > article:nth-child(3n+3)::before {
    content: '✦ III';
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 0.8125rem;
    color: #425d73;
    display: block;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1em;
  }

  /* Context C: Arranged Multi-Planar Collections (SaaS Pricing in Sample 2 & Dashboard in Sample 4) */
  .lab-styled-preview[data-style="surrealism"] section > div > article,
  .surrealism-styled-container section > div > article,
  .style-surrealism section > div > article,
  [data-style="surrealism"] section > div > article,
  .ds-scope[data-style-id="surrealism"] section > div > article,
  .style-surreal section > div > article,
  [data-style="surreal"] section > div > article,
  .ds-scope[data-style-id="surreal"] section > div > article {
    background: rgba(255, 255, 255, 0.75) !important;
    border: 1px solid rgba(209, 201, 189, 0.75) !important;
    border-radius: 28px 8px 28px 8px !important;
    padding: 2.5rem 2rem !important;
    box-shadow: 0 8px 24px -4px rgba(59, 17, 36, 0.06) !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 220ms ease, box-shadow 220ms ease;
  }

  .lab-styled-preview[data-style="surrealism"] section > div > article strong,
  .surrealism-styled-container section > div > article strong,
  .style-surrealism section > div > article strong,
  [data-style="surrealism"] section > div > article strong,
  .ds-scope[data-style-id="surrealism"] section > div > article strong,
  .style-surreal section > div > article strong,
  [data-style="surreal"] section > div > article strong,
  .ds-scope[data-style-id="surreal"] section > div > article strong {
    font-family: 'Playfair Display', 'Cormorant Garamond', serif;
    font-size: clamp(2.25rem, 4vw, 3rem);
    font-weight: 700;
    color: #3b1124;
    display: block;
    margin: 1rem 0 1.25rem;
    font-variant-numeric: tabular-nums;
  }

  /* Featured / Focal Planar Inversion: Mysterious Deep Twilight Persona */
  .lab-styled-preview[data-style="surrealism"] section > div > article:nth-child(2),
  .surrealism-styled-container section > div > article:nth-child(2),
  .style-surrealism section > div > article:nth-child(2),
  [data-style="surrealism"] section > div > article:nth-child(2),
  .ds-scope[data-style-id="surrealism"] section > div > article:nth-child(2),
  .style-surreal section > div > article:nth-child(2),
  [data-style="surreal"] section > div > article:nth-child(2),
  .ds-scope[data-style-id="surreal"] section > div > article:nth-child(2) {
    background: #3b1124 !important;
    color: #f7f4ed !important;
    border: 1px solid #5e4b6d !important;
    border-radius: 36px 6px 36px 6px !important;
    box-shadow: 0 16px 36px -6px rgba(59, 17, 36, 0.35) !important;
  }

  .lab-styled-preview[data-style="surrealism"] section > div > article:nth-child(2) h3 {
    color: #ffffff;
  }

  .lab-styled-preview[data-style="surrealism"] section > div > article:nth-child(2) p {
    color: #d8d0c3;
  }

  .lab-styled-preview[data-style="surrealism"] section > div > article:nth-child(2) strong {
    color: #d97762;
  }

  .lab-styled-preview[data-style="surrealism"] section > div > article:nth-child(2) button {
    background-color: #d97762;
    border-color: #d97762;
    color: #ffffff;
    box-shadow: 0 4px 16px rgba(217, 119, 98, 0.4);
  }

  .lab-styled-preview[data-style="surrealism"] section > div > article:nth-child(2) button:hover {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #3b1124;
  }

  /* Context D: Restaurant Menu Chapters (Sample 6) */
  .lab-styled-preview[data-style="surrealism"] section > article:has(ul),
  .surrealism-styled-container section > article:has(ul),
  .style-surrealism section > article:has(ul),
  [data-style="surrealism"] section > article:has(ul),
  .ds-scope[data-style-id="surrealism"] section > article:has(ul),
  .style-surreal section > article:has(ul),
  [data-style="surreal"] section > article:has(ul),
  .ds-scope[data-style-id="surreal"] section > article:has(ul) {
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid rgba(209, 201, 189, 0.6) !important;
    border-radius: 0 !important;
    padding: 2rem 0 !important;
    box-shadow: none !important;
  }

  /* 7. Poetic Unordered & Ordered Lists: Eliminate Browser Default Black Bullets */
  .lab-styled-preview[data-style="surrealism"] ul,
  .lab-styled-preview[data-style="surrealism"] ol,
  .surrealism-styled-container ul,
  .style-surrealism ul,
  [data-style="surrealism"] ul,
  .ds-scope[data-style-id="surrealism"] ul,
  .style-surreal ul,
  [data-style="surreal"] ul,
  .ds-scope[data-style-id="surreal"] ul,
  .surrealism-styled-container ol,
  .style-surrealism ol,
  [data-style="surrealism"] ol,
  .ds-scope[data-style-id="surrealism"] ol,
  .style-surreal ol,
  [data-style="surreal"] ol,
  .ds-scope[data-style-id="surreal"] ol {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.5rem 0 !important;
  }

  .lab-styled-preview[data-style="surrealism"] li,
  .surrealism-styled-container li,
  .style-surrealism li,
  [data-style="surrealism"] li,
  .ds-scope[data-style-id="surrealism"] li,
  .style-surreal li,
  [data-style="surreal"] li,
  .ds-scope[data-style-id="surreal"] li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    font-size: 0.95rem;
    color: #3b3742;
    line-height: 1.6;
  }

  .lab-styled-preview[data-style="surrealism"] li::before,
  .surrealism-styled-container li::before,
  .style-surrealism li::before,
  [data-style="surrealism"] li::before,
  .ds-scope[data-style-id="surrealism"] li::before,
  .style-surreal li::before,
  [data-style="surreal"] li::before,
  .ds-scope[data-style-id="surreal"] li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: #d97762;
    font-weight: 600;
  }

  /* Restaurant Menu Dish Items (Sample 6) */
  .lab-styled-preview[data-style="surrealism"] section > article ul li,
  .surrealism-styled-container section > article ul li,
  .style-surrealism section > article ul li,
  [data-style="surrealism"] section > article ul li,
  .ds-scope[data-style-id="surrealism"] section > article ul li,
  .style-surreal section > article ul li,
  [data-style="surreal"] section > article ul li,
  .ds-scope[data-style-id="surreal"] section > article ul li {
    padding-left: 0;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px dashed rgba(209, 201, 189, 0.4);
  }

  .lab-styled-preview[data-style="surrealism"] section > article ul li::before,
  .surrealism-styled-container section > article ul li::before,
  .style-surrealism section > article ul li::before,
  [data-style="surrealism"] section > article ul li::before,
  .ds-scope[data-style-id="surrealism"] section > article ul li::before,
  .style-surreal section > article ul li::before,
  [data-style="surreal"] section > article ul li::before,
  .ds-scope[data-style-id="surreal"] section > article ul li::before {
    display: none;
  }

  .lab-styled-preview[data-style="surrealism"] section > article ul li strong,
  .surrealism-styled-container section > article ul li strong,
  .style-surrealism section > article ul li strong,
  [data-style="surrealism"] section > article ul li strong,
  .ds-scope[data-style-id="surrealism"] section > article ul li strong,
  .style-surreal section > article ul li strong,
  [data-style="surreal"] section > article ul li strong,
  .ds-scope[data-style-id="surreal"] section > article ul li strong {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: #16151a;
  }

  .lab-styled-preview[data-style="surrealism"] section > article ul li p,
  .surrealism-styled-container section > article ul li p,
  .style-surrealism section > article ul li p,
  [data-style="surrealism"] section > article ul li p,
  .ds-scope[data-style-id="surrealism"] section > article ul li p,
  .style-surreal section > article ul li p,
  [data-style="surreal"] section > article ul li p,
  .ds-scope[data-style-id="surreal"] section > article ul li p {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 0.9rem;
    color: #5d5766;
    margin-top: 0.25rem;
    margin-bottom: 0;
  }

  /* 8. Poetic Editorial Blockquotes: Atmospheric Oversized Glyph */
  .lab-styled-preview[data-style="surrealism"] blockquote,
  .surrealism-styled-container blockquote,
  .style-surrealism blockquote,
  [data-style="surrealism"] blockquote,
  .ds-scope[data-style-id="surrealism"] blockquote,
  .style-surreal blockquote,
  [data-style="surreal"] blockquote,
  .ds-scope[data-style-id="surreal"] blockquote {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-style: italic;
    font-size: 1.45rem;
    line-height: 1.6;
    color: #16151a;
    background: rgba(255, 255, 255, 0.6);
    border-left: 3px solid #d97762;
    border-radius: 0 24px 24px 0;
    padding: 2.25rem 2.5rem;
    margin: 3rem 0;
    position: relative;
    box-shadow: 0 8px 24px -4px rgba(59, 17, 36, 0.05);
    z-index: 1;
  }

  .lab-styled-preview[data-style="surrealism"] blockquote::before,
  .surrealism-styled-container blockquote::before,
  .style-surrealism blockquote::before,
  [data-style="surrealism"] blockquote::before,
  .ds-scope[data-style-id="surrealism"] blockquote::before,
  .style-surreal blockquote::before,
  [data-style="surreal"] blockquote::before,
  .ds-scope[data-style-id="surreal"] blockquote::before {
    content: '“';
    font-family: 'Playfair Display', serif;
    font-size: 5.5rem;
    line-height: 0.6;
    color: rgba(217, 119, 98, 0.35);
    display: block;
    margin-bottom: 0.5rem;
  }

  /* 9. Artistic Information Tables: Tabular Precision in a Dreamscape */
  .lab-styled-preview[data-style="surrealism"] table,
  .surrealism-styled-container table,
  .style-surrealism table,
  [data-style="surrealism"] table,
  .ds-scope[data-style-id="surrealism"] table,
  .style-surreal table,
  [data-style="surreal"] table,
  .ds-scope[data-style-id="surreal"] table {
    width: 100%;
    border-collapse: collapse;
    margin: 2.5rem 0;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 6px 20px -2px rgba(59, 17, 36, 0.06);
    font-variant-numeric: tabular-nums;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="surrealism"] thead,
  .surrealism-styled-container thead,
  .style-surrealism thead,
  [data-style="surrealism"] thead,
  .ds-scope[data-style-id="surrealism"] thead,
  .style-surreal thead,
  [data-style="surreal"] thead,
  .ds-scope[data-style-id="surreal"] thead {
    background-color: #ede8df;
    border-bottom: 1px solid rgba(209, 201, 189, 0.8);
  }

  .lab-styled-preview[data-style="surrealism"] th,
  .surrealism-styled-container th,
  .style-surrealism th,
  [data-style="surrealism"] th,
  .ds-scope[data-style-id="surrealism"] th,
  .style-surreal th,
  [data-style="surreal"] th,
  .ds-scope[data-style-id="surreal"] th {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #4a4552;
    padding: 1.15rem 1.25rem;
    text-align: left;
  }

  .lab-styled-preview[data-style="surrealism"] td,
  .surrealism-styled-container td,
  .style-surrealism td,
  [data-style="surrealism"] td,
  .ds-scope[data-style-id="surrealism"] td,
  .style-surreal td,
  [data-style="surreal"] td,
  .ds-scope[data-style-id="surreal"] td {
    padding: 1.15rem 1.25rem;
    border-bottom: 1px solid rgba(209, 201, 189, 0.5);
    color: #16151a;
    font-size: 0.9375rem;
  }

  .lab-styled-preview[data-style="surrealism"] tr:last-child td,
  .surrealism-styled-container tr:last-child td,
  .style-surrealism tr:last-child td,
  [data-style="surrealism"] tr:last-child td,
  .ds-scope[data-style-id="surrealism"] tr:last-child td,
  .style-surreal tr:last-child td,
  [data-style="surreal"] tr:last-child td,
  .ds-scope[data-style-id="surreal"] tr:last-child td {
    border-bottom: none;
  }

  .lab-styled-preview[data-style="surrealism"] tr:hover td,
  .surrealism-styled-container tr:hover td,
  .style-surrealism tr:hover td,
  [data-style="surrealism"] tr:hover td,
  .ds-scope[data-style-id="surrealism"] tr:hover td,
  .style-surreal tr:hover td,
  [data-style="surreal"] tr:hover td,
  .ds-scope[data-style-id="surreal"] tr:hover td {
    background-color: rgba(217, 119, 98, 0.04);
  }

  /* 10. Form Controls: Alabaster Fields with Uncanny Focus Halo */
  .lab-styled-preview[data-style="surrealism"] form,
  .surrealism-styled-container form,
  .style-surrealism form,
  [data-style="surrealism"] form,
  .ds-scope[data-style-id="surrealism"] form,
  .style-surreal form,
  [data-style="surreal"] form,
  .ds-scope[data-style-id="surreal"] form {
    max-width: 600px;
    margin: 2rem 0;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="surrealism"] label,
  .surrealism-styled-container label,
  .style-surrealism label,
  [data-style="surrealism"] label,
  .ds-scope[data-style-id="surrealism"] label,
  .style-surreal label,
  [data-style="surreal"] label,
  .ds-scope[data-style-id="surreal"] label {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #4a4552;
    margin-bottom: 0.5rem;
    display: block;
  }

  .lab-styled-preview[data-style="surrealism"] input[type="text"],
  .lab-styled-preview[data-style="surrealism"] input[type="email"],
  .lab-styled-preview[data-style="surrealism"] input[type="password"],
  .lab-styled-preview[data-style="surrealism"] textarea,
  .lab-styled-preview[data-style="surrealism"] select,
  .surrealism-styled-container input[type="text"],
  .style-surrealism input[type="text"],
  [data-style="surrealism"] input[type="text"],
  .ds-scope[data-style-id="surrealism"] input[type="text"],
  .style-surreal input[type="text"],
  [data-style="surreal"] input[type="text"],
  .ds-scope[data-style-id="surreal"] input[type="text"],
  .surrealism-styled-container input[type="email"],
  .style-surrealism input[type="email"],
  [data-style="surrealism"] input[type="email"],
  .ds-scope[data-style-id="surrealism"] input[type="email"],
  .style-surreal input[type="email"],
  [data-style="surreal"] input[type="email"],
  .ds-scope[data-style-id="surreal"] input[type="email"],
  .surrealism-styled-container input[type="password"],
  .style-surrealism input[type="password"],
  [data-style="surrealism"] input[type="password"],
  .ds-scope[data-style-id="surrealism"] input[type="password"],
  .style-surreal input[type="password"],
  [data-style="surreal"] input[type="password"],
  .ds-scope[data-style-id="surreal"] input[type="password"],
  .surrealism-styled-container textarea,
  .style-surrealism textarea,
  [data-style="surrealism"] textarea,
  .ds-scope[data-style-id="surrealism"] textarea,
  .style-surreal textarea,
  [data-style="surreal"] textarea,
  .ds-scope[data-style-id="surreal"] textarea,
  .surrealism-styled-container select,
  .style-surrealism select,
  [data-style="surrealism"] select,
  .ds-scope[data-style-id="surrealism"] select,
  .style-surreal select,
  [data-style="surreal"] select,
  .ds-scope[data-style-id="surreal"] select {
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #d1c9bd;
    border-radius: 14px;
    padding: 0.85rem 1.15rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.9375rem;
    color: #16151a;
    box-sizing: border-box;
    margin-bottom: 1.5rem;
    transition: border-color 180ms ease, box-shadow 180ms ease;
  }

  .lab-styled-preview[data-style="surrealism"] input:focus,
  .lab-styled-preview[data-style="surrealism"] textarea:focus,
  .lab-styled-preview[data-style="surrealism"] select:focus,
  .surrealism-styled-container input:focus,
  .style-surrealism input:focus,
  [data-style="surrealism"] input:focus,
  .ds-scope[data-style-id="surrealism"] input:focus,
  .style-surreal input:focus,
  [data-style="surreal"] input:focus,
  .ds-scope[data-style-id="surreal"] input:focus,
  .surrealism-styled-container textarea:focus,
  .style-surrealism textarea:focus,
  [data-style="surrealism"] textarea:focus,
  .ds-scope[data-style-id="surrealism"] textarea:focus,
  .style-surreal textarea:focus,
  [data-style="surreal"] textarea:focus,
  .ds-scope[data-style-id="surreal"] textarea:focus,
  .surrealism-styled-container select:focus,
  .style-surrealism select:focus,
  [data-style="surrealism"] select:focus,
  .ds-scope[data-style-id="surrealism"] select:focus,
  .style-surreal select:focus,
  [data-style="surreal"] select:focus,
  .ds-scope[data-style-id="surreal"] select:focus {
    outline: none;
    border-color: #d97762;
    box-shadow: 0 0 0 3px rgba(217, 119, 98, 0.22), 0 8px 20px rgba(94, 75, 109, 0.08);
  }

  /* 11. E-Commerce Product Options (Sample 5) */
  .lab-styled-preview[data-style="surrealism"] section > article > div:has(button),
  .surrealism-styled-container section > article > div:has(button),
  .style-surrealism section > article > div:has(button),
  [data-style="surrealism"] section > article > div:has(button),
  .ds-scope[data-style-id="surrealism"] section > article > div:has(button),
  .style-surreal section > article > div:has(button),
  [data-style="surreal"] section > article > div:has(button),
  .ds-scope[data-style-id="surreal"] section > article > div:has(button) {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin: 1.5rem 0;
  }

  .lab-styled-preview[data-style="surrealism"] section > article > div > button,
  .surrealism-styled-container section > article > div > button,
  .style-surrealism section > article > div > button,
  [data-style="surrealism"] section > article > div > button,
  .ds-scope[data-style-id="surrealism"] section > article > div > button,
  .style-surreal section > article > div > button,
  [data-style="surreal"] section > article > div > button,
  .ds-scope[data-style-id="surreal"] section > article > div > button {
    padding: 0.5rem 1.25rem;
    font-size: 0.8125rem;
    background: transparent;
    color: #16151a;
    border: 1px solid rgba(209, 201, 189, 0.8);
    box-shadow: none;
  }

  .lab-styled-preview[data-style="surrealism"] section > article > div > button:hover,
  .surrealism-styled-container section > article > div > button:hover,
  .style-surrealism section > article > div > button:hover,
  [data-style="surrealism"] section > article > div > button:hover,
  .ds-scope[data-style-id="surrealism"] section > article > div > button:hover,
  .style-surreal section > article > div > button:hover,
  [data-style="surreal"] section > article > div > button:hover,
  .ds-scope[data-style-id="surreal"] section > article > div > button:hover {
    background: #d97762;
    border-color: #d97762;
    color: #ffffff;
  }

  /* 12. Sculptural Images: Asymmetric Architectural Portal Framing */
  .lab-styled-preview[data-style="surrealism"] img,
  .surrealism-styled-container img,
  .style-surrealism img,
  [data-style="surrealism"] img,
  .ds-scope[data-style-id="surrealism"] img,
  .style-surreal img,
  [data-style="surreal"] img,
  .ds-scope[data-style-id="surreal"] img {
    border-radius: 36px 36px 8px 8px;
    border: 1px solid rgba(209, 201, 189, 0.7);
    box-shadow: 0 12px 32px -6px rgba(59, 17, 36, 0.12);
    max-width: 100%;
    height: auto;
    display: block;
    margin: 2rem 0;
  }

  /* 13. Gentle Dissolving Footer: Quiet Poetics and Celestial Divider */
  .lab-styled-preview[data-style="surrealism"] footer,
  .surrealism-styled-container footer,
  .style-surrealism footer,
  [data-style="surrealism"] footer,
  .ds-scope[data-style-id="surrealism"] footer,
  .style-surreal footer,
  [data-style="surreal"] footer,
  .ds-scope[data-style-id="surreal"] footer {
    border-top: 1px solid rgba(209, 201, 189, 0.7);
    padding: 3.5rem 0 2rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="surrealism"] footer p,
  .surrealism-styled-container footer p,
  .style-surrealism footer p,
  [data-style="surrealism"] footer p,
  .ds-scope[data-style-id="surrealism"] footer p,
  .style-surreal footer p,
  [data-style="surreal"] footer p,
  .ds-scope[data-style-id="surreal"] footer p {
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    letter-spacing: 0.08em;
    color: #7e7888;
    margin: 0;
  }

  /* 14. Responsive Scaling */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="surrealism"] h1,
    .surrealism-styled-container h1,
    .style-surrealism h1,
    [data-style="surrealism"] h1,
    .ds-scope[data-style-id="surrealism"] h1,
    .style-surreal h1,
    [data-style="surreal"] h1,
    .ds-scope[data-style-id="surreal"] h1 {
      font-size: clamp(2rem, 8vw, 3.25rem);
    }
    .lab-styled-preview[data-style="surrealism"]::before,
    .surrealism-styled-container::before,
    .style-surrealism::before,
    [data-style="surrealism"]::before,
    .ds-scope[data-style-id="surrealism"]::before,
    .style-surreal::before,
    [data-style="surreal"]::before,
    .ds-scope[data-style-id="surreal"]::before,
    .lab-styled-preview[data-style="surrealism"]::after,
    .surrealism-styled-container::after,
    .style-surrealism::after,
    [data-style="surrealism"]::after,
    .ds-scope[data-style-id="surrealism"]::after,
    .style-surreal::after,
    [data-style="surreal"]::after,
    .ds-scope[data-style-id="surreal"]::after {
      display: none;
    }
  }
`;

