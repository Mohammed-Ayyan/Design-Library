/**
 * Victorian Design Language — Art-Directed 19th-Century Typography & Print Stylesheet
 * 
 * Inspired by Victorian visual culture: 19th-century typography, ornate print,
 * engraved illustration, fine ornamental printer's rules, botanical motifs,
 * formal framing, layered borders, decorative corners, and rich aged paper surfaces.
 * 
 * Preserves the user's source HTML with zero DOM mutations.
 */

export const victorianSemanticCss = `
  /* ==========================================================================
     VICTORIAN DESIGN LANGUAGE — 19TH-CENTURY PRINT & ORNATE EDITORIAL
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Castoro+Titling&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@400;500;600;700&display=swap');

  /* --------------------------------------------------------------------------
     1. FOUNDATION & SCOPED VARIABLES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"],
  .victorian-styled-container,
  .style-victorian,
  .ds-scope[data-style-id="victorian"],
  [data-style="victorian"] {
    /* Sophisticated Victorian Period Palette (NOT black & gold!) */
    --vic-bg: #f7f2e7;                   /* Warm aged parchment paper ground */
    --vic-surface: #fcfaf5;              /* Archival letterpress paper leaf */
    --vic-surface-subtle: #efe7d5;       /* Aged vellum / tinted cartouche */
    --vic-text: #1c1917;                 /* Deep charcoal lampblack printing ink */
    --vic-text-secondary: #38332b;       /* Deep sepia charcoal ink */
    --vic-text-muted: #6e6456;           /* Archival graphite & muted ink */

    /* Victorian botanical & period accents */
    --vic-forest: #1b3b2b;               /* Deep Victorian botanical forest green */
    --vic-forest-hover: #254e3a;         /* Lustrous botanical emerald */
    --vic-forest-active: #142b1f;
    --vic-burgundy: #5c1626;             /* Imperial claret / deep burgundy */
    --vic-burgundy-hover: #731c30;
    --vic-navy: #16253b;                 /* Archival Prussian navy */
    --vic-oxblood: #6e2121;              /* Occasional oxblood wax seal */
    --vic-brass: #9e783e;                /* Burnished antique brass */
    --vic-brass-light: #c49c58;          /* Gilded highlight */
    --vic-rule: #d8cdb8;                 /* Engraved sepia hairline rule */
    --vic-rule-dark: #3a3227;            /* Deep charcoal structural engraving line */

    /* Typographic Fonts */
    --vic-font-heading: 'Castoro Titling', 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    --vic-font-body: 'EB Garamond', 'Cormorant Garamond', 'Baskerville', 'Georgia', serif;
    --vic-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

    /* Base Styling */
    background-color: var(--vic-bg) !important;
    color: var(--vic-text) !important;
    font-family: var(--vic-font-body) !important;
    font-size: 1.0625rem !important;
    line-height: 1.72 !important;
    box-sizing: border-box !important;
    position: relative;
    min-height: 100%;
    padding: 3rem 2.25rem;

    /* Subtle archival banknote/watermark texture */
    background-image:
      radial-gradient(circle at 50% 50%, rgba(158, 120, 62, 0.035) 1px, transparent 1px),
      linear-gradient(to right, rgba(58, 50, 39, 0.018) 1px, transparent 1px) !important;
    background-size: 24px 24px, 48px 48px !important;

    /* Formal engraved double border framing the entire container */
    border: 1px solid var(--vic-rule) !important;
    outline: 3px double var(--vic-rule-dark) !important;
    outline-offset: -7px !important;
  }

  /* --------------------------------------------------------------------------
     2. GLOBAL RESETS & ELEMENT INHERITANCE
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] *,
  .victorian-styled-container *,
  .style-victorian *,
  .ds-scope[data-style-id="victorian"] *,
  [data-style="victorian"] * {
    box-sizing: border-box;
  }

  /* --------------------------------------------------------------------------
     3. TYPOGRAPHY & HEADING HIERARCHY
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] h1,
  .lab-styled-preview[data-style="victorian"] h2,
  .lab-styled-preview[data-style="victorian"] h3,
  .lab-styled-preview[data-style="victorian"] h4,
  .lab-styled-preview[data-style="victorian"] h5,
  .lab-styled-preview[data-style="victorian"] h6,
  .victorian-styled-container h1,
  .victorian-styled-container h2,
  .victorian-styled-container h3,
  .victorian-styled-container h4,
  .victorian-styled-container h5,
  .victorian-styled-container h6,
  .style-victorian h1,
  .style-victorian h2,
  .style-victorian h3,
  .style-victorian h4,
  .style-victorian h5,
  .style-victorian h6,
  .ds-scope[data-style-id="victorian"] h1,
  .ds-scope[data-style-id="victorian"] h2,
  .ds-scope[data-style-id="victorian"] h3,
  .ds-scope[data-style-id="victorian"] h4,
  .ds-scope[data-style-id="victorian"] h5,
  .ds-scope[data-style-id="victorian"] h6,
  [data-style="victorian"] h1,
  [data-style="victorian"] h2,
  [data-style="victorian"] h3,
  [data-style="victorian"] h4,
  [data-style="victorian"] h5,
  [data-style="victorian"] h6 {
    font-family: var(--vic-font-heading) !important;
    color: var(--vic-text) !important;
    font-weight: 700 !important;
    line-height: 1.2 !important;
    letter-spacing: 0.02em !important;
    margin-top: 0;
  }

  /* H1: Monumental Period Title-Plate */
  .lab-styled-preview[data-style="victorian"] h1,
  .victorian-styled-container h1,
  .style-victorian h1,
  .ds-scope[data-style-id="victorian"] h1,
  [data-style="victorian"] h1 {
    font-size: clamp(2.25rem, 4.5vw, 3.5rem) !important;
    margin-bottom: 1.25rem !important;
    text-align: center;
    letter-spacing: 0.015em !important;
    color: var(--vic-text) !important;
  }

  /* H2: Engraved Section Rubric with Under-rule */
  .lab-styled-preview[data-style="victorian"] h2,
  .victorian-styled-container h2,
  .style-victorian h2,
  .ds-scope[data-style-id="victorian"] h2,
  [data-style="victorian"] h2 {
    font-size: clamp(1.65rem, 3vw, 2.25rem) !important;
    margin-top: 2.75rem !important;
    margin-bottom: 1.25rem !important;
    border-bottom: 1px solid var(--vic-rule);
    padding-bottom: 0.5rem;
    position: relative;
  }

  .lab-styled-preview[data-style="victorian"] h2::after,
  .victorian-styled-container h2::after,
  .style-victorian h2::after,
  .ds-scope[data-style-id="victorian"] h2::after,
  [data-style="victorian"] h2::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--vic-brass);
  }

  /* H3: Refined Claret / Forest Article Heading */
  .lab-styled-preview[data-style="victorian"] h3,
  .victorian-styled-container h3,
  .style-victorian h3,
  .ds-scope[data-style-id="victorian"] h3,
  [data-style="victorian"] h3 {
    font-size: 1.35rem !important;
    color: var(--vic-forest) !important;
    margin-top: 1.5rem !important;
    margin-bottom: 0.65rem !important;
    font-weight: 700 !important;
  }

  /* H4: Period Sub-head */
  .lab-styled-preview[data-style="victorian"] h4,
  .victorian-styled-container h4,
  .style-victorian h4,
  .ds-scope[data-style-id="victorian"] h4,
  [data-style="victorian"] h4 {
    font-size: 1.15rem !important;
    color: var(--vic-burgundy) !important;
    margin-bottom: 0.5rem !important;
  }

  /* H5 & H6: Functional Tracked Small Caps */
  .lab-styled-preview[data-style="victorian"] h5,
  .lab-styled-preview[data-style="victorian"] h6,
  .victorian-styled-container h5,
  .victorian-styled-container h6,
  .style-victorian h5,
  .style-victorian h6,
  .ds-scope[data-style-id="victorian"] h5,
  .ds-scope[data-style-id="victorian"] h6,
  [data-style="victorian"] h5,
  [data-style="victorian"] h6 {
    font-family: var(--vic-font-sans) !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase !important;
    color: var(--vic-text-secondary) !important;
    margin-bottom: 0.5rem !important;
  }

  /* Body Paragraphs: Dignified Reading Measure & Leading */
  .lab-styled-preview[data-style="victorian"] p,
  .victorian-styled-container p,
  .style-victorian p,
  .ds-scope[data-style-id="victorian"] p,
  [data-style="victorian"] p {
    color: var(--vic-text-secondary);
    font-size: 1.0625rem;
    line-height: 1.75;
    margin-top: 0;
    margin-bottom: 1.35rem;
  }

  .lab-styled-preview[data-style="victorian"] strong,
  .lab-styled-preview[data-style="victorian"] b,
  .victorian-styled-container strong,
  .victorian-styled-container b,
  .style-victorian strong,
  .style-victorian b,
  .ds-scope[data-style-id="victorian"] strong,
  .ds-scope[data-style-id="victorian"] b,
  [data-style="victorian"] strong,
  [data-style="victorian"] b {
    color: var(--vic-text);
    font-weight: 700;
  }

  .lab-styled-preview[data-style="victorian"] em,
  .lab-styled-preview[data-style="victorian"] i,
  .victorian-styled-container em,
  .victorian-styled-container i,
  .style-victorian em,
  .style-victorian i,
  .ds-scope[data-style-id="victorian"] em,
  .ds-scope[data-style-id="victorian"] i,
  [data-style="victorian"] em,
  [data-style="victorian"] i {
    font-style: italic;
    font-family: 'EB Garamond', Georgia, serif;
  }

  /* Editorial Drop Caps for Primary Articles */
  .lab-styled-preview[data-style="victorian"] article > p:first-of-type::first-letter,
  .lab-styled-preview[data-style="victorian"] main > section:not(:first-child) > p:first-of-type::first-letter,
  .victorian-styled-container article > p:first-of-type::first-letter,
  .victorian-styled-container main > section:not(:first-child) > p:first-of-type::first-letter,
  .style-victorian article > p:first-of-type::first-letter,
  .style-victorian main > section:not(:first-child) > p:first-of-type::first-letter,
  .ds-scope[data-style-id="victorian"] article > p:first-of-type::first-letter,
  [data-style="victorian"] article > p:first-of-type::first-letter {
    float: left;
    font-family: 'Castoro Titling', 'Playfair Display', serif;
    font-size: 3.4rem;
    line-height: 0.82;
    padding-top: 4px;
    padding-right: 10px;
    padding-bottom: 2px;
    color: var(--vic-burgundy);
    font-weight: 700;
  }

  /* Ornamental Horizontal Rule with Vignette Fleuron */
  .lab-styled-preview[data-style="victorian"] hr,
  .victorian-styled-container hr,
  .style-victorian hr,
  .ds-scope[data-style-id="victorian"] hr,
  [data-style="victorian"] hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--vic-rule), var(--vic-brass), var(--vic-rule), transparent);
    margin: 3.5rem 0;
    position: relative;
    text-align: center;
    overflow: visible;
  }

  .lab-styled-preview[data-style="victorian"] hr::after,
  .victorian-styled-container hr::after,
  .style-victorian hr::after,
  .ds-scope[data-style-id="victorian"] hr::after,
  [data-style="victorian"] hr::after {
    content: '❦';
    display: inline-block;
    position: relative;
    top: -0.75em;
    padding: 0 0.85rem;
    background: var(--vic-bg);
    color: var(--vic-brass);
    font-size: 0.9375rem;
  }

  /* --------------------------------------------------------------------------
     4. NAVIGATION — PERIOD PUBLISHING MASTHEAD
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] nav,
  .victorian-styled-container nav,
  .style-victorian nav,
  .ds-scope[data-style-id="victorian"] nav,
  [data-style="victorian"] nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 1.25rem 1.5rem;
    background: var(--vic-surface);
    border-top: 1px solid var(--vic-rule);
    border-bottom: 3px double var(--vic-brass);
    box-shadow: 0 2px 8px rgba(28, 25, 23, 0.04);
    margin-bottom: 3.5rem;
    position: relative;
  }

  /* Navigation Links: Tracked Small-Caps */
  .lab-styled-preview[data-style="victorian"] nav a,
  .victorian-styled-container nav a,
  .style-victorian nav a,
  .ds-scope[data-style-id="victorian"] nav a,
  [data-style="victorian"] nav a {
    font-family: var(--vic-font-sans);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--vic-text-secondary);
    text-decoration: none;
    padding: 0.35rem 0.5rem;
    position: relative;
    transition: all 180ms ease;
  }

  .lab-styled-preview[data-style="victorian"] nav a:hover,
  .victorian-styled-container nav a:hover,
  .style-victorian nav a:hover,
  .ds-scope[data-style-id="victorian"] nav a:hover,
  [data-style="victorian"] nav a:hover {
    color: var(--vic-burgundy);
    border-bottom: 1px solid var(--vic-brass);
  }

  /* Brand / First Link: Inscribed Period Title with Botanical Fleurons */
  .lab-styled-preview[data-style="victorian"] nav a:first-child,
  .victorian-styled-container nav a:first-child,
  .style-victorian nav a:first-child,
  .ds-scope[data-style-id="victorian"] nav a:first-child,
  [data-style="victorian"] nav a:first-child {
    font-family: var(--vic-font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--vic-forest);
    display: flex;
    align-items: center;
    gap: 0.45rem;
    margin-right: 1.25rem;
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="victorian"] nav a:first-child::before,
  .victorian-styled-container nav a:first-child::before,
  .style-victorian nav a:first-child::before,
  .ds-scope[data-style-id="victorian"] nav a:first-child::before,
  [data-style="victorian"] nav a:first-child::before {
    content: '❦';
    color: var(--vic-brass);
    font-size: 1rem;
  }

  .lab-styled-preview[data-style="victorian"] nav a:first-child::after,
  .victorian-styled-container nav a:first-child::after,
  .style-victorian nav a:first-child::after,
  .ds-scope[data-style-id="victorian"] nav a:first-child::after,
  [data-style="victorian"] nav a:first-child::after {
    content: '❧';
    color: var(--vic-brass);
    font-size: 1rem;
    margin-left: 0.25rem;
  }

  /* --------------------------------------------------------------------------
     5. HERO & SECTION HEADERS — FRONTISPIECE COMPOSITION
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] header,
  .victorian-styled-container header,
  .style-victorian header,
  .ds-scope[data-style-id="victorian"] header,
  [data-style="victorian"] header {
    margin-bottom: 3.5rem;
    text-align: center;
  }

  /* Eyebrow / Kicker with Period Wing Ornaments */
  .lab-styled-preview[data-style="victorian"] header > p:first-child,
  .lab-styled-preview[data-style="victorian"] section > p:first-child:not(:last-child),
  .victorian-styled-container header > p:first-child,
  .victorian-styled-container section > p:first-child:not(:last-child),
  .style-victorian header > p:first-child,
  .style-victorian section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="victorian"] header > p:first-child,
  .ds-scope[data-style-id="victorian"] section > p:first-child:not(:last-child),
  [data-style="victorian"] header > p:first-child,
  [data-style="victorian"] section > p:first-child:not(:last-child) {
    font-family: var(--vic-font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--vic-brass);
    margin-bottom: 1.15rem;
    display: block;
    text-align: center;
  }

  .lab-styled-preview[data-style="victorian"] header > p:first-child::before,
  .lab-styled-preview[data-style="victorian"] section > p:first-child:not(:last-child)::before,
  .victorian-styled-container header > p:first-child::before,
  .victorian-styled-container section > p:first-child:not(:last-child)::before,
  .style-victorian header > p:first-child::before,
  .style-victorian section > p:first-child:not(:last-child)::before,
  .ds-scope[data-style-id="victorian"] header > p:first-child::before,
  .ds-scope[data-style-id="victorian"] section > p:first-child:not(:last-child)::before,
  [data-style="victorian"] header > p:first-child::before,
  [data-style="victorian"] section > p:first-child:not(:last-child)::before {
    content: '✦ — ';
    color: var(--vic-brass);
  }

  .lab-styled-preview[data-style="victorian"] header > p:first-child::after,
  .lab-styled-preview[data-style="victorian"] section > p:first-child:not(:last-child)::after,
  .victorian-styled-container header > p:first-child::after,
  .victorian-styled-container section > p:first-child:not(:last-child)::after,
  .style-victorian header > p:first-child::after,
  .style-victorian section > p:first-child:not(:last-child)::after,
  .ds-scope[data-style-id="victorian"] header > p:first-child::after,
  .ds-scope[data-style-id="victorian"] section > p:first-child:not(:last-child)::after,
  [data-style="victorian"] header > p:first-child::after,
  [data-style="victorian"] section > p:first-child:not(:last-child)::after {
    content: ' — ✦';
    color: var(--vic-brass);
  }

  /* Hero Headline with Decorative Vignette Rule below */
  .lab-styled-preview[data-style="victorian"] header + section h1,
  .lab-styled-preview[data-style="victorian"] section:first-of-type h1,
  .victorian-styled-container header + section h1,
  .victorian-styled-container section:first-of-type h1,
  .style-victorian header + section h1,
  .style-victorian section:first-of-type h1,
  .ds-scope[data-style-id="victorian"] header + section h1,
  .ds-scope[data-style-id="victorian"] section:first-of-type h1,
  [data-style="victorian"] header + section h1,
  [data-style="victorian"] section:first-of-type h1 {
    position: relative;
    padding-bottom: 1.25rem;
  }

  .lab-styled-preview[data-style="victorian"] header + section h1::after,
  .lab-styled-preview[data-style="victorian"] section:first-of-type h1::after,
  .victorian-styled-container header + section h1::after,
  .victorian-styled-container section:first-of-type h1::after,
  .style-victorian header + section h1::after,
  .style-victorian section:first-of-type h1::after,
  .ds-scope[data-style-id="victorian"] header + section h1::after,
  .ds-scope[data-style-id="victorian"] section:first-of-type h1::after,
  [data-style="victorian"] header + section h1::after,
  [data-style="victorian"] section:first-of-type h1::after {
    content: '— ❦ ❖ ❧ —';
    display: block;
    font-size: 0.875rem;
    color: var(--vic-brass);
    letter-spacing: 0.35em;
    margin-top: 1rem;
    font-weight: 400;
  }

  /* --------------------------------------------------------------------------
     6. BUTTONS & INTERACTIVE CONTROLS — ENGRAVED PRESS BUTTONS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] button,
  .lab-styled-preview[data-style="victorian"] a[role="button"],
  .lab-styled-preview[data-style="victorian"] input[type="submit"],
  .lab-styled-preview[data-style="victorian"] input[type="button"],
  .victorian-styled-container button,
  .victorian-styled-container a[role="button"],
  .victorian-styled-container input[type="submit"],
  .victorian-styled-container input[type="button"],
  .style-victorian button,
  .style-victorian a[role="button"],
  .style-victorian input[type="submit"],
  .style-victorian input[type="button"],
  .ds-scope[data-style-id="victorian"] button,
  .ds-scope[data-style-id="victorian"] a[role="button"],
  .ds-scope[data-style-id="victorian"] input[type="submit"],
  .ds-scope[data-style-id="victorian"] input[type="button"],
  [data-style="victorian"] button,
  [data-style="victorian"] a[role="button"],
  [data-style="victorian"] input[type="submit"],
  [data-style="victorian"] input[type="button"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.85rem 2.25rem;
    font-family: var(--vic-font-sans) !important;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    border-radius: 2px;
    border: 1px solid var(--vic-forest);
    cursor: pointer;
    background: var(--vic-forest);
    color: #fcfaf5;
    box-shadow: inset 0 0 0 1px rgba(196, 156, 88, 0.45), 0 2px 6px rgba(27, 59, 43, 0.25);
    transition: all 180ms ease;
    text-decoration: none;
    line-height: 1.4;
    position: relative;
  }

  /* Button Hover */
  .lab-styled-preview[data-style="victorian"] button:hover,
  .lab-styled-preview[data-style="victorian"] a[role="button"]:hover,
  .lab-styled-preview[data-style="victorian"] input[type="submit"]:hover,
  .victorian-styled-container button:hover,
  .victorian-styled-container a[role="button"]:hover,
  .victorian-styled-container input[type="submit"]:hover,
  .style-victorian button:hover,
  .style-victorian a[role="button"]:hover,
  .style-victorian input[type="submit"]:hover,
  .ds-scope[data-style-id="victorian"] button:hover,
  .ds-scope[data-style-id="victorian"] a[role="button"]:hover,
  .ds-scope[data-style-id="victorian"] input[type="submit"]:hover,
  [data-style="victorian"] button:hover,
  [data-style="victorian"] a[role="button"]:hover,
  [data-style="victorian"] input[type="submit"]:hover {
    background: var(--vic-forest-hover);
    border-color: var(--vic-brass);
    color: #ffffff;
    box-shadow: inset 0 0 0 1px var(--vic-brass-light), 0 4px 14px rgba(27, 59, 43, 0.3);
    transform: translateY(-1px);
  }

  /* Button Active / Pressed */
  .lab-styled-preview[data-style="victorian"] button:active,
  .lab-styled-preview[data-style="victorian"] a[role="button"]:active,
  .lab-styled-preview[data-style="victorian"] input[type="submit"]:active,
  .victorian-styled-container button:active,
  .victorian-styled-container a[role="button"]:active,
  .victorian-styled-container input[type="submit"]:active,
  .style-victorian button:active,
  .style-victorian a[role="button"]:active,
  .style-victorian input[type="submit"]:active,
  .ds-scope[data-style-id="victorian"] button:active,
  .ds-scope[data-style-id="victorian"] a[role="button"]:active,
  .ds-scope[data-style-id="victorian"] input[type="submit"]:active,
  [data-style="victorian"] button:active,
  [data-style="victorian"] a[role="button"]:active,
  [data-style="victorian"] input[type="submit"]:active {
    background: var(--vic-forest-active);
    transform: translateY(1px);
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.45);
  }

  /* Button Focus-Visible Ring */
  .lab-styled-preview[data-style="victorian"] button:focus-visible,
  .lab-styled-preview[data-style="victorian"] a[role="button"]:focus-visible,
  .lab-styled-preview[data-style="victorian"] input[type="submit"]:focus-visible,
  .victorian-styled-container button:focus-visible,
  .victorian-styled-container a[role="button"]:focus-visible,
  .victorian-styled-container input[type="submit"]:focus-visible,
  .style-victorian button:focus-visible,
  .style-victorian a[role="button"]:focus-visible,
  .style-victorian input[type="submit"]:focus-visible,
  .ds-scope[data-style-id="victorian"] button:focus-visible,
  .ds-scope[data-style-id="victorian"] a[role="button"]:focus-visible,
  .ds-scope[data-style-id="victorian"] input[type="submit"]:focus-visible,
  [data-style="victorian"] button:focus-visible,
  [data-style="victorian"] a[role="button"]:focus-visible,
  [data-style="victorian"] input[type="submit"]:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--vic-bg), 0 0 0 4px var(--vic-brass) !important;
  }

  /* Button Disabled State */
  .lab-styled-preview[data-style="victorian"] button:disabled,
  .victorian-styled-container button:disabled,
  .style-victorian button:disabled,
  .ds-scope[data-style-id="victorian"] button:disabled,
  [data-style="victorian"] button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--vic-text-muted) !important;
    border-color: var(--vic-rule) !important;
    transform: none !important;
    box-shadow: none !important;
  }

  /* Secondary Button: Imperial Claret Burgundy */
  .lab-styled-preview[data-style="victorian"] .secondary,
  .lab-styled-preview[data-style="victorian"] button.secondary,
  .victorian-styled-container .secondary,
  .victorian-styled-container button.secondary,
  .style-victorian .secondary,
  .style-victorian button.secondary,
  .ds-scope[data-style-id="victorian"] .secondary,
  .ds-scope[data-style-id="victorian"] button.secondary,
  [data-style="victorian"] .secondary,
  [data-style="victorian"] button.secondary {
    background: var(--vic-burgundy) !important;
    border-color: var(--vic-burgundy) !important;
    color: #fcfaf5 !important;
    box-shadow: inset 0 0 0 1px rgba(196, 156, 88, 0.45), 0 2px 6px rgba(92, 22, 38, 0.25) !important;
  }

  .lab-styled-preview[data-style="victorian"] button.secondary:hover,
  .victorian-styled-container button.secondary:hover,
  .style-victorian button.secondary:hover,
  .ds-scope[data-style-id="victorian"] button.secondary:hover,
  [data-style="victorian"] button.secondary:hover {
    background: var(--vic-burgundy-hover) !important;
    border-color: var(--vic-brass) !important;
  }

  /* Outline / Tertiary Button: Archival Paper & Brass Hairline */
  .lab-styled-preview[data-style="victorian"] button.outline,
  .lab-styled-preview[data-style="victorian"] button.tertiary,
  .lab-styled-preview[data-style="victorian"] a.outline,
  .victorian-styled-container button.outline,
  .victorian-styled-container button.tertiary,
  .victorian-styled-container a.outline,
  .style-victorian button.outline,
  .style-victorian button.tertiary,
  .style-victorian a.outline,
  .ds-scope[data-style-id="victorian"] button.outline,
  .ds-scope[data-style-id="victorian"] button.tertiary,
  .ds-scope[data-style-id="victorian"] a.outline,
  [data-style="victorian"] button.outline,
  [data-style="victorian"] button.tertiary,
  [data-style="victorian"] a.outline {
    background: var(--vic-surface) !important;
    color: var(--vic-text) !important;
    border: 1px solid var(--vic-rule-dark) !important;
    box-shadow: inset 0 0 0 2px var(--vic-surface), inset 0 0 0 3px var(--vic-brass) !important;
  }

  /* --------------------------------------------------------------------------
     7. CARDS & GRID CONTAINERS — FORMAL ARCHIVAL PANELS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] section > div,
  .victorian-styled-container section > div,
  .style-victorian section > div,
  .ds-scope[data-style-id="victorian"] section > div,
  [data-style="victorian"] section > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    align-items: stretch;
  }

  .lab-styled-preview[data-style="victorian"] article,
  .lab-styled-preview[data-style="victorian"] .card,
  .lab-styled-preview[data-style="victorian"] div > article,
  .lab-styled-preview[data-style="victorian"] [class*="card"],
  .victorian-styled-container article,
  .victorian-styled-container .card,
  .victorian-styled-container div > article,
  .victorian-styled-container [class*="card"],
  .style-victorian article,
  .style-victorian .card,
  .style-victorian div > article,
  .style-victorian [class*="card"],
  .ds-scope[data-style-id="victorian"] article,
  .ds-scope[data-style-id="victorian"] .card,
  .ds-scope[data-style-id="victorian"] div > article,
  .ds-scope[data-style-id="victorian"] [class*="card"],
  [data-style="victorian"] article,
  [data-style="victorian"] .card,
  [data-style="victorian"] div > article,
  [data-style="victorian"] [class*="card"] {
    position: relative;
    background: var(--vic-surface);
    border: 1px solid var(--vic-rule);
    border-radius: 3px;
    padding: 2.25rem 2rem;
    box-shadow: 0 2px 8px rgba(28, 25, 23, 0.04), inset 0 0 0 3px var(--vic-surface), inset 0 0 0 4px #e5dcce;
    transition: all 200ms ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Decorative Corner Motifs on Panels */
  .lab-styled-preview[data-style="victorian"] article::before,
  .lab-styled-preview[data-style="victorian"] .card::before,
  .victorian-styled-container article::before,
  .victorian-styled-container .card::before,
  .style-victorian article::before,
  .style-victorian .card::before,
  .ds-scope[data-style-id="victorian"] article::before,
  .ds-scope[data-style-id="victorian"] .card::before,
  [data-style="victorian"] article::before,
  [data-style="victorian"] .card::before {
    content: '✤';
    position: absolute;
    top: 6px;
    left: 8px;
    font-size: 0.625rem;
    color: var(--vic-brass);
    opacity: 0.65;
  }

  .lab-styled-preview[data-style="victorian"] article::after,
  .lab-styled-preview[data-style="victorian"] .card::after,
  .victorian-styled-container article::after,
  .victorian-styled-container .card::after,
  .style-victorian article::after,
  .style-victorian .card::after,
  .ds-scope[data-style-id="victorian"] article::after,
  .ds-scope[data-style-id="victorian"] .card::after,
  [data-style="victorian"] article::after,
  [data-style="victorian"] .card::after {
    content: '✤';
    position: absolute;
    top: 6px;
    right: 8px;
    font-size: 0.625rem;
    color: var(--vic-brass);
    opacity: 0.65;
  }

  /* Card Hover */
  .lab-styled-preview[data-style="victorian"] article:hover,
  .lab-styled-preview[data-style="victorian"] .card:hover,
  .victorian-styled-container article:hover,
  .victorian-styled-container .card:hover,
  .style-victorian article:hover,
  .style-victorian .card:hover,
  .ds-scope[data-style-id="victorian"] article:hover,
  .ds-scope[data-style-id="victorian"] .card:hover,
  [data-style="victorian"] article:hover,
  [data-style="victorian"] .card:hover {
    transform: translateY(-2px);
    border-color: var(--vic-brass);
    box-shadow: 0 6px 18px rgba(28, 25, 23, 0.07), inset 0 0 0 3px var(--vic-surface), inset 0 0 0 4px var(--vic-brass);
  }

  /* --------------------------------------------------------------------------
     8. UN-CARDIFIED EDITORIAL ARTICLE & BLOCKQUOTES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] article:only-child,
  .lab-styled-preview[data-style="victorian"] section > article:only-child,
  .victorian-styled-container article:only-child,
  .victorian-styled-container section > article:only-child,
  .style-victorian article:only-child,
  .style-victorian section > article:only-child,
  .ds-scope[data-style-id="victorian"] article:only-child,
  .ds-scope[data-style-id="victorian"] section > article:only-child,
  [data-style="victorian"] article:only-child,
  [data-style="victorian"] section > article:only-child {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    max-width: 740px !important;
    margin: 0 auto !important;
    padding: 2rem 0.5rem !important;
    transform: none !important;
  }

  .lab-styled-preview[data-style="victorian"] article:only-child::before,
  .lab-styled-preview[data-style="victorian"] article:only-child::after,
  .victorian-styled-container article:only-child::before,
  .victorian-styled-container article:only-child::after,
  .style-victorian article:only-child::before,
  .style-victorian article:only-child::after,
  .ds-scope[data-style-id="victorian"] article:only-child::before,
  .ds-scope[data-style-id="victorian"] article:only-child::after,
  [data-style="victorian"] article:only-child::before,
  [data-style="victorian"] article:only-child::after {
    display: none !important;
  }

  /* Blockquote: Illuminated Excerpt with Claret Left Border */
  .lab-styled-preview[data-style="victorian"] blockquote,
  .victorian-styled-container blockquote,
  .style-victorian blockquote,
  .ds-scope[data-style-id="victorian"] blockquote,
  [data-style="victorian"] blockquote {
    position: relative;
    background: var(--vic-surface);
    border: 1px solid var(--vic-rule);
    border-left: 5px solid var(--vic-burgundy);
    padding: 2.25rem 2.5rem;
    margin: 2.75rem 0;
    font-family: var(--vic-font-body);
    font-style: italic;
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--vic-text);
    box-shadow: 0 3px 12px rgba(28, 25, 23, 0.04), inset 0 0 0 2px var(--vic-surface), inset 0 0 0 3px var(--vic-rule);
  }

  .lab-styled-preview[data-style="victorian"] blockquote::before,
  .victorian-styled-container blockquote::before,
  .style-victorian blockquote::before,
  .ds-scope[data-style-id="victorian"] blockquote::before,
  [data-style="victorian"] blockquote::before {
    content: '“';
    font-family: 'Castoro Titling', serif;
    font-size: 3.5rem;
    color: var(--vic-brass);
    position: absolute;
    top: 0.1rem;
    left: 0.85rem;
    line-height: 1;
    opacity: 0.45;
  }

  .lab-styled-preview[data-style="victorian"] blockquote p,
  .victorian-styled-container blockquote p,
  .style-victorian blockquote p,
  .ds-scope[data-style-id="victorian"] blockquote p,
  [data-style="victorian"] blockquote p {
    color: var(--vic-text);
    margin-bottom: 0;
  }

  /* --------------------------------------------------------------------------
     9. SAAS / PRICING TIERS — PERIOD BROADSIDE TARIFF
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] [class*="pricing"],
  .victorian-styled-container [class*="pricing"],
  .style-victorian [class*="pricing"],
  .ds-scope[data-style-id="victorian"] [class*="pricing"],
  [data-style="victorian"] [class*="pricing"] {
    position: relative;
  }

  /* Featured / Royal Tier Placard */
  .lab-styled-preview[data-style="victorian"] section > div > article:nth-child(2),
  .lab-styled-preview[data-style="victorian"] [class*="popular"],
  .lab-styled-preview[data-style="victorian"] [class*="featured"],
  .victorian-styled-container section > div > article:nth-child(2),
  .victorian-styled-container [class*="popular"],
  .victorian-styled-container [class*="featured"],
  .style-victorian section > div > article:nth-child(2),
  .style-victorian [class*="popular"],
  .style-victorian [class*="featured"],
  .ds-scope[data-style-id="victorian"] section > div > article:nth-child(2),
  .ds-scope[data-style-id="victorian"] [class*="popular"],
  .ds-scope[data-style-id="victorian"] [class*="featured"],
  [data-style="victorian"] section > div > article:nth-child(2),
  [data-style="victorian"] [class*="popular"],
  [data-style="victorian"] [class*="featured"] {
    background: #fdfcf9;
    border: 2px solid var(--vic-brass);
    box-shadow: 0 6px 24px rgba(28, 25, 23, 0.08), inset 0 0 0 3px #fdfcf9, inset 0 0 0 5px var(--vic-forest);
  }

  .lab-styled-preview[data-style="victorian"] section > div > article:nth-child(2)::before,
  .lab-styled-preview[data-style="victorian"] [class*="popular"]::before,
  .lab-styled-preview[data-style="victorian"] [class*="featured"]::before,
  .victorian-styled-container section > div > article:nth-child(2)::before,
  .victorian-styled-container [class*="popular"]::before,
  .victorian-styled-container [class*="featured"]::before,
  .style-victorian section > div > article:nth-child(2)::before,
  .style-victorian [class*="popular"]::before,
  .style-victorian [class*="featured"]::before,
  .ds-scope[data-style-id="victorian"] section > div > article:nth-child(2)::before,
  .ds-scope[data-style-id="victorian"] [class*="popular"]::before,
  .ds-scope[data-style-id="victorian"] [class*="featured"]::before,
  [data-style="victorian"] section > div > article:nth-child(2)::before,
  [data-style="victorian"] [class*="popular"]::before,
  [data-style="victorian"] [class*="featured"]::before {
    content: '✦ ROYAL WARRANT ✦';
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--vic-forest);
    color: var(--vic-brass-light);
    font-family: var(--vic-font-sans);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    padding: 0.25rem 1rem;
    border: 1px solid var(--vic-brass);
    border-radius: 2px;
    white-space: nowrap;
    opacity: 1;
  }

  /* Dramatic Period Price Figures */
  .lab-styled-preview[data-style="victorian"] section > div > article p:has(+ button),
  .lab-styled-preview[data-style="victorian"] section > div > article p:has(+ a[role="button"]),
  .lab-styled-preview[data-style="victorian"] [class*="price"],
  .victorian-styled-container section > div > article p:has(+ button),
  .victorian-styled-container section > div > article p:has(+ a[role="button"]),
  .victorian-styled-container [class*="price"],
  .style-victorian section > div > article p:has(+ button),
  .style-victorian section > div > article p:has(+ a[role="button"]),
  .style-victorian [class*="price"],
  .ds-scope[data-style-id="victorian"] section > div > article p:has(+ button),
  .ds-scope[data-style-id="victorian"] section > div > article p:has(+ a[role="button"]),
  .ds-scope[data-style-id="victorian"] [class*="price"],
  [data-style="victorian"] section > div > article p:has(+ button),
  [data-style="victorian"] section > div > article p:has(+ a[role="button"]),
  [data-style="victorian"] [class*="price"] {
    font-family: var(--vic-font-heading) !important;
    font-size: 2.35rem !important;
    font-weight: 700 !important;
    color: var(--vic-forest) !important;
    margin: 1.25rem 0 !important;
    letter-spacing: 0.02em !important;
    line-height: 1.15 !important;
  }

  /* --------------------------------------------------------------------------
     10. DASHBOARD & DATA CONTENT — SCIENTIFIC REGISTRY & LEDGER
     -------------------------------------------------------------------------- */
  /* Metric Telemetry Figures */
  .lab-styled-preview[data-style="victorian"] article strong,
  .victorian-styled-container article strong,
  .style-victorian article strong,
  .ds-scope[data-style-id="victorian"] article strong,
  [data-style="victorian"] article strong {
    display: block;
    font-family: var(--vic-font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--vic-forest);
    letter-spacing: 0.02em;
    margin: 0.5rem 0 0.35rem 0;
    line-height: 1.1;
  }

  /* Ledger Table: Formal Victorian Almanac Styling */
  .lab-styled-preview[data-style="victorian"] table,
  .victorian-styled-container table,
  .style-victorian table,
  .ds-scope[data-style-id="victorian"] table,
  [data-style="victorian"] table {
    width: 100%;
    border-collapse: collapse;
    background: var(--vic-surface);
    border: 1px solid var(--vic-rule);
    border-radius: 2px;
    margin: 2.5rem 0;
    box-shadow: 0 2px 8px rgba(28, 25, 23, 0.04);
  }

  .lab-styled-preview[data-style="victorian"] th,
  .victorian-styled-container th,
  .style-victorian th,
  .ds-scope[data-style-id="victorian"] th,
  [data-style="victorian"] th {
    background: var(--vic-forest);
    color: #fcfaf5;
    padding: 1rem 1.25rem;
    text-align: left;
    font-family: var(--vic-font-sans);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    border-bottom: 2px solid var(--vic-brass);
  }

  .lab-styled-preview[data-style="victorian"] td,
  .victorian-styled-container td,
  .style-victorian td,
  .ds-scope[data-style-id="victorian"] td,
  [data-style="victorian"] td {
    padding: 0.95rem 1.25rem;
    font-size: 1rem;
    color: var(--vic-text);
    border-bottom: 1px solid var(--vic-rule);
  }

  .lab-styled-preview[data-style="victorian"] tr:nth-child(even) td,
  .victorian-styled-container tr:nth-child(even) td,
  .style-victorian tr:nth-child(even) td,
  .ds-scope[data-style-id="victorian"] tr:nth-child(even) td,
  [data-style="victorian"] tr:nth-child(even) td {
    background: rgba(239, 231, 213, 0.35);
  }

  .lab-styled-preview[data-style="victorian"] tr:hover td,
  .victorian-styled-container tr:hover td,
  .style-victorian tr:hover td,
  .ds-scope[data-style-id="victorian"] tr:hover td,
  [data-style="victorian"] tr:hover td {
    background: rgba(158, 120, 62, 0.08);
  }

  /* --------------------------------------------------------------------------
     11. E-COMMERCE PRODUCTS & APOTHECARY SPECIMENS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] [class*="badge"],
  .lab-styled-preview[data-style="victorian"] .tag,
  .victorian-styled-container [class*="badge"],
  .victorian-styled-container .tag,
  .style-victorian [class*="badge"],
  .style-victorian .tag,
  .ds-scope[data-style-id="victorian"] [class*="badge"],
  .ds-scope[data-style-id="victorian"] .tag,
  [data-style="victorian"] [class*="badge"],
  [data-style="victorian"] .tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--vic-surface-subtle);
    color: var(--vic-burgundy);
    border: 1px solid var(--vic-brass);
    border-radius: 2px;
    font-family: var(--vic-font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  /* --------------------------------------------------------------------------
     12. RESTAURANT MENUS — GRAND DINING BILL OF FARE
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] ul,
  .victorian-styled-container ul,
  .style-victorian ul,
  .ds-scope[data-style-id="victorian"] ul,
  [data-style="victorian"] ul {
    list-style-type: none;
    padding-left: 0;
  }

  .lab-styled-preview[data-style="victorian"] li,
  .victorian-styled-container li,
  .style-victorian li,
  .ds-scope[data-style-id="victorian"] li,
  [data-style="victorian"] li {
    padding: 0.65rem 0;
    border-bottom: 1px dotted var(--vic-rule);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 1.05rem;
  }

  /* Dot Leaders for Menu Items */
  .lab-styled-preview[data-style="victorian"] li span:last-child,
  .victorian-styled-container li span:last-child,
  .style-victorian li span:last-child,
  .ds-scope[data-style-id="victorian"] li span:last-child,
  [data-style="victorian"] li span:last-child {
    font-family: var(--vic-font-heading);
    font-weight: 700;
    color: var(--vic-forest);
  }

  /* --------------------------------------------------------------------------
     13. FORMS & CONTACT — ARCHIVAL DISPATCH & LEDGER
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] form,
  .victorian-styled-container form,
  .style-victorian form,
  .ds-scope[data-style-id="victorian"] form,
  [data-style="victorian"] form {
    background: var(--vic-surface);
    border: 1px solid var(--vic-rule);
    border-radius: 3px;
    padding: 3rem 2.5rem;
    max-width: 680px;
    margin: 2.5rem auto;
    box-shadow: 0 4px 16px rgba(28, 25, 23, 0.05), inset 0 0 0 3px var(--vic-surface), inset 0 0 0 4px #e5dcce;
  }

  .lab-styled-preview[data-style="victorian"] form::before,
  .victorian-styled-container form::before,
  .style-victorian form::before,
  .ds-scope[data-style-id="victorian"] form::before,
  [data-style="victorian"] form::before {
    content: '❦ OFFICIAL CORRESPONDENCE ❦';
    display: block;
    font-family: var(--vic-font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--vic-brass);
    text-align: center;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--vic-rule);
    padding-bottom: 0.85rem;
  }

  .lab-styled-preview[data-style="victorian"] form > div,
  .victorian-styled-container form > div,
  .style-victorian form > div,
  .ds-scope[data-style-id="victorian"] form > div,
  [data-style="victorian"] form > div {
    margin-bottom: 1.5rem;
  }

  .lab-styled-preview[data-style="victorian"] label,
  .victorian-styled-container label,
  .style-victorian label,
  .ds-scope[data-style-id="victorian"] label,
  [data-style="victorian"] label {
    display: block;
    font-family: var(--vic-font-sans);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--vic-text);
    margin-bottom: 0.5rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .lab-styled-preview[data-style="victorian"] input[type="text"],
  .lab-styled-preview[data-style="victorian"] input[type="email"],
  .lab-styled-preview[data-style="victorian"] input[type="password"],
  .lab-styled-preview[data-style="victorian"] input[type="search"],
  .lab-styled-preview[data-style="victorian"] input[type="number"],
  .lab-styled-preview[data-style="victorian"] textarea,
  .lab-styled-preview[data-style="victorian"] select,
  .victorian-styled-container input[type="text"],
  .victorian-styled-container input[type="email"],
  .victorian-styled-container input[type="password"],
  .victorian-styled-container input[type="search"],
  .victorian-styled-container input[type="number"],
  .victorian-styled-container textarea,
  .victorian-styled-container select,
  .style-victorian input[type="text"],
  .style-victorian input[type="email"],
  .style-victorian input[type="password"],
  .style-victorian input[type="search"],
  .style-victorian input[type="number"],
  .style-victorian textarea,
  .style-victorian select,
  .ds-scope[data-style-id="victorian"] input[type="text"],
  .ds-scope[data-style-id="victorian"] input[type="email"],
  .ds-scope[data-style-id="victorian"] input[type="password"],
  .ds-scope[data-style-id="victorian"] input[type="search"],
  .ds-scope[data-style-id="victorian"] input[type="number"],
  .ds-scope[data-style-id="victorian"] textarea,
  .ds-scope[data-style-id="victorian"] select,
  [data-style="victorian"] input[type="text"],
  [data-style="victorian"] input[type="email"],
  [data-style="victorian"] input[type="password"],
  [data-style="victorian"] input[type="search"],
  [data-style="victorian"] input[type="number"],
  [data-style="victorian"] textarea,
  [data-style="victorian"] select {
    width: 100%;
    padding: 0.85rem 1.15rem;
    font-family: var(--vic-font-body) !important;
    font-size: 1.05rem;
    color: var(--vic-text);
    background: #faf7f0;
    border: 1px solid var(--vic-rule);
    border-radius: 2px;
    box-shadow: inset 0 1px 3px rgba(28, 25, 23, 0.05);
    transition: all 180ms ease;
    box-sizing: border-box;
    outline: none;
  }

  .lab-styled-preview[data-style="victorian"] input:focus,
  .lab-styled-preview[data-style="victorian"] textarea:focus,
  .lab-styled-preview[data-style="victorian"] select:focus,
  .victorian-styled-container input:focus,
  .victorian-styled-container textarea:focus,
  .victorian-styled-container select:focus,
  .style-victorian input:focus,
  .style-victorian textarea:focus,
  .style-victorian select:focus,
  .ds-scope[data-style-id="victorian"] input:focus,
  .ds-scope[data-style-id="victorian"] textarea:focus,
  .ds-scope[data-style-id="victorian"] select:focus,
  [data-style="victorian"] input:focus,
  [data-style="victorian"] textarea:focus,
  [data-style="victorian"] select:focus {
    background: #ffffff;
    border-color: var(--vic-brass);
    box-shadow: 0 0 0 3px rgba(158, 120, 62, 0.25), inset 0 1px 2px rgba(28, 25, 23, 0.05);
  }

  .lab-styled-preview[data-style="victorian"] input::placeholder,
  .lab-styled-preview[data-style="victorian"] textarea::placeholder,
  .victorian-styled-container input::placeholder,
  .victorian-styled-container textarea::placeholder,
  .style-victorian input::placeholder,
  .style-victorian textarea::placeholder,
  .ds-scope[data-style-id="victorian"] input::placeholder,
  .ds-scope[data-style-id="victorian"] textarea::placeholder,
  [data-style="victorian"] input::placeholder,
  [data-style="victorian"] textarea::placeholder {
    color: var(--vic-text-muted);
    font-style: italic;
  }

  /* --------------------------------------------------------------------------
     14. FOOTER — ARCHIVAL PUBLISHING COLOPHON
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="victorian"] footer,
  .victorian-styled-container footer,
  .style-victorian footer,
  .ds-scope[data-style-id="victorian"] footer,
  [data-style="victorian"] footer {
    margin-top: 4.5rem;
    padding: 3rem 1.5rem;
    text-align: center;
    color: var(--vic-text-muted);
    font-size: 0.9375rem;
    border-top: 3px double var(--vic-brass);
    background: var(--vic-surface);
  }

  .lab-styled-preview[data-style="victorian"] footer::before,
  .victorian-styled-container footer::before,
  .style-victorian footer::before,
  .ds-scope[data-style-id="victorian"] footer::before,
  [data-style="victorian"] footer::before {
    content: '❖ ❧ ❖';
    display: block;
    font-size: 1.1rem;
    color: var(--vic-brass);
    margin-bottom: 1rem;
  }

  /* --------------------------------------------------------------------------
     15. ACCESSIBILITY & PREFERS-REDUCED-MOTION
     -------------------------------------------------------------------------- */
  @media (prefers-reduced-motion: reduce) {
    .lab-styled-preview[data-style="victorian"] *,
    .victorian-styled-container *,
    .style-victorian *,
    .ds-scope[data-style-id="victorian"] *,
    [data-style="victorian"] * {
      animation: none !important;
      transition: none !important;
      transform: none !important;
    }
  }

  /* --------------------------------------------------------------------------
     16. RESPONSIVE BREAKPOINTS
     -------------------------------------------------------------------------- */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="victorian"],
    .victorian-styled-container,
    .style-victorian,
    .ds-scope[data-style-id="victorian"],
    [data-style="victorian"] {
      padding: 1.75rem 1.25rem !important;
      outline-offset: -4px !important;
    }

    .lab-styled-preview[data-style="victorian"] nav,
    .victorian-styled-container nav,
    .style-victorian nav,
    .ds-scope[data-style-id="victorian"] nav,
    [data-style="victorian"] nav {
      gap: 1rem !important;
      padding: 1rem !important;
      margin-bottom: 2.5rem !important;
    }

    .lab-styled-preview[data-style="victorian"] section > div,
    .victorian-styled-container section > div,
    .style-victorian section > div,
    .ds-scope[data-style-id="victorian"] section > div,
    [data-style="victorian"] section > div {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }

    .lab-styled-preview[data-style="victorian"] form,
    .victorian-styled-container form,
    .style-victorian form,
    .ds-scope[data-style-id="victorian"] form,
    [data-style="victorian"] form {
      padding: 2rem 1.25rem !important;
    }

    .lab-styled-preview[data-style="victorian"] article > p:first-of-type::first-letter,
    .victorian-styled-container article > p:first-of-type::first-letter,
    .style-victorian article > p:first-of-type::first-letter,
    .ds-scope[data-style-id="victorian"] article > p:first-of-type::first-letter,
    [data-style="victorian"] article > p:first-of-type::first-letter {
      font-size: 2.75rem !important;
      padding-right: 8px !important;
    }
  }
`;
