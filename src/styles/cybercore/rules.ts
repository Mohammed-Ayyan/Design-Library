/**
 * Cybercore Design Language — Internet-Native Digital Culture & Fragmented Interface Stylesheet
 * 
 * Inspired by internet culture, digital identity, fragmented online spaces,
 * CRT-era interfaces, underground web aesthetics, corrupted media, system overlays,
 * and experimental digital environments.
 * 
 * Distinct from Cyberpunk: Not futuristic cities or neon dystopian infrastructure,
 * but internet-native digital culture, selective CRT scanlines, technical monospace
 * metadata, offset layer borders, and fragmented experimental interfaces.
 * 
 * Preserves the user's source HTML with zero DOM mutations.
 */

export const cybercoreSemanticCss = `
  /* ==========================================================================
     CYBERCORE DESIGN LANGUAGE — INTERNET-NATIVE DIGITAL CULTURE
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');

  /* --------------------------------------------------------------------------
     1. FOUNDATION & SCOPED VARIABLES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"],
  .cybercore-styled-container,
  .style-cybercore,
  .ds-scope[data-style-id="cybercore"],
  [data-style="cybercore"] {
    /* Cybercore Digital Substrate Palette */
    --cc-bg: #0c0e12;                    /* Deep digital obsidian void */
    --cc-surface: #13171f;               /* Dark digital console panel */
    --cc-surface-subtle: #1a202c;        /* Technical slab / sub-layer */
    --cc-text: #e2e8f0;                  /* Dirty digital white */
    --cc-text-secondary: #94a3b8;        /* Terminal metadata slate */
    --cc-text-muted: #64748b;            /* Dimmed machine commentary */

    /* Cybercore Digital Signal Accents */
    --cc-green: #00ff66;                 /* Acidic digital phosphor green */
    --cc-green-hover: #33ff85;           /* Brightened phosphor burst */
    --cc-green-glow: rgba(0, 255, 102, 0.35);
    --cc-cyan: #00f0ff;                  /* Electric cybernetic cyan */
    --cc-magenta: #ff0055;               /* Corrupted signal magenta */
    --cc-violet: #8b5cf6;                /* Deep digital violet */
    --cc-yellow: #ccff00;                /* Acidic system warning yellow */
    --cc-border: #242b35;                /* Fragmented frame outline */
    --cc-border-bright: rgba(0, 255, 102, 0.35);

    /* Typographic Fonts */
    --cc-font-display: 'Space Grotesk', 'Syne', -apple-system, sans-serif;
    --cc-font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
    --cc-font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

    /* Base Canvas Styling */
    background-color: var(--cc-bg) !important;
    color: var(--cc-text) !important;
    font-family: var(--cc-font-body) !important;
    font-size: 0.9375rem !important;
    line-height: 1.65 !important;
    box-sizing: border-box !important;
    position: relative;
    min-height: 100%;
    padding: 3rem 2.25rem;

    /* Selective CRT scanline pattern & subtle digital raster */
    background-image:
      repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.22) 1px, transparent 1px, transparent 3px),
      linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px) !important;
    background-size: 100% 3px, 32px 32px, 32px 32px !important;

    /* Sharp technical border with green status rail */
    border: 1px solid var(--cc-border) !important;
    border-top: 2px solid var(--cc-green) !important;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.85) !important;
  }

  /* --------------------------------------------------------------------------
     2. GLOBAL RESETS & SCOPED ELEMENT STYLING
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] *,
  .cybercore-styled-container *,
  .style-cybercore *,
  .ds-scope[data-style-id="cybercore"] *,
  [data-style="cybercore"] * {
    box-sizing: border-box;
  }

  /* --------------------------------------------------------------------------
     3. TYPOGRAPHY & HEADING HIERARCHY
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] h1,
  .lab-styled-preview[data-style="cybercore"] h2,
  .lab-styled-preview[data-style="cybercore"] h3,
  .lab-styled-preview[data-style="cybercore"] h4,
  .lab-styled-preview[data-style="cybercore"] h5,
  .lab-styled-preview[data-style="cybercore"] h6,
  .cybercore-styled-container h1,
  .cybercore-styled-container h2,
  .cybercore-styled-container h3,
  .cybercore-styled-container h4,
  .cybercore-styled-container h5,
  .cybercore-styled-container h6,
  .style-cybercore h1,
  .style-cybercore h2,
  .style-cybercore h3,
  .style-cybercore h4,
  .style-cybercore h5,
  .style-cybercore h6,
  .ds-scope[data-style-id="cybercore"] h1,
  .ds-scope[data-style-id="cybercore"] h2,
  .ds-scope[data-style-id="cybercore"] h3,
  .ds-scope[data-style-id="cybercore"] h4,
  .ds-scope[data-style-id="cybercore"] h5,
  .ds-scope[data-style-id="cybercore"] h6,
  [data-style="cybercore"] h1,
  [data-style="cybercore"] h2,
  [data-style="cybercore"] h3,
  [data-style="cybercore"] h4,
  [data-style="cybercore"] h5,
  [data-style="cybercore"] h6 {
    font-family: var(--cc-font-display) !important;
    color: #ffffff !important;
    font-weight: 700 !important;
    line-height: 1.15 !important;
    letter-spacing: -0.03em !important;
    margin-top: 0;
  }

  /* H1: Monumental Technical Terminal Headline */
  .lab-styled-preview[data-style="cybercore"] h1,
  .cybercore-styled-container h1,
  .style-cybercore h1,
  .ds-scope[data-style-id="cybercore"] h1,
  [data-style="cybercore"] h1 {
    font-size: clamp(2.15rem, 4.5vw, 3.4rem) !important;
    margin-bottom: 1.25rem !important;
    letter-spacing: -0.035em !important;
    color: #ffffff !important;
    text-shadow: 1px 1px 0px rgba(0, 255, 102, 0.25), -1px -1px 0px rgba(0, 240, 255, 0.25);
  }

  /* H2: Section Heading with Phosphor Green Margin Rail */
  .lab-styled-preview[data-style="cybercore"] h2,
  .cybercore-styled-container h2,
  .style-cybercore h2,
  .ds-scope[data-style-id="cybercore"] h2,
  [data-style="cybercore"] h2 {
    font-size: clamp(1.55rem, 3vw, 2.15rem) !important;
    margin-top: 2.75rem !important;
    margin-bottom: 1.25rem !important;
    border-left: 3px solid var(--cc-green);
    padding-left: 0.85rem;
    position: relative;
  }

  /* H3: Fragmented Subsection Heading with Terminal Prefix */
  .lab-styled-preview[data-style="cybercore"] h3,
  .cybercore-styled-container h3,
  .style-cybercore h3,
  .ds-scope[data-style-id="cybercore"] h3,
  [data-style="cybercore"] h3 {
    font-size: 1.25rem !important;
    color: #f1f5f9 !important;
    margin-top: 1.5rem !important;
    margin-bottom: 0.65rem !important;
    font-weight: 700 !important;
  }

  .lab-styled-preview[data-style="cybercore"] h3::before,
  .cybercore-styled-container h3::before,
  .style-cybercore h3::before,
  .ds-scope[data-style-id="cybercore"] h3::before,
  [data-style="cybercore"] h3::before {
    content: ':: ';
    color: var(--cc-green);
    font-family: var(--cc-font-mono);
    font-size: 0.95rem;
  }

  /* H4: Monospace Technical Sub-heading */
  .lab-styled-preview[data-style="cybercore"] h4,
  .cybercore-styled-container h4,
  .style-cybercore h4,
  .ds-scope[data-style-id="cybercore"] h4,
  [data-style="cybercore"] h4 {
    font-family: var(--cc-font-mono) !important;
    font-size: 1rem !important;
    color: var(--cc-cyan) !important;
    margin-bottom: 0.5rem !important;
  }

  /* H5 & H6: Dimmed Machine Annotations */
  .lab-styled-preview[data-style="cybercore"] h5,
  .lab-styled-preview[data-style="cybercore"] h6,
  .cybercore-styled-container h5,
  .cybercore-styled-container h6,
  .style-cybercore h5,
  .style-cybercore h6,
  .ds-scope[data-style-id="cybercore"] h5,
  .ds-scope[data-style-id="cybercore"] h6,
  [data-style="cybercore"] h5,
  [data-style="cybercore"] h6 {
    font-family: var(--cc-font-mono) !important;
    font-size: 0.75rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    color: var(--cc-text-muted) !important;
    margin-bottom: 0.5rem !important;
  }

  /* Body Paragraphs: Readable Dirty White on Dark Digital Ground */
  .lab-styled-preview[data-style="cybercore"] p,
  .cybercore-styled-container p,
  .style-cybercore p,
  .ds-scope[data-style-id="cybercore"] p,
  [data-style="cybercore"] p {
    color: var(--cc-text-secondary);
    font-size: 0.9375rem;
    line-height: 1.65;
    margin-top: 0;
    margin-bottom: 1.25rem;
  }

  .lab-styled-preview[data-style="cybercore"] strong,
  .lab-styled-preview[data-style="cybercore"] b,
  .cybercore-styled-container strong,
  .cybercore-styled-container b,
  .style-cybercore strong,
  .style-cybercore b,
  .ds-scope[data-style-id="cybercore"] strong,
  .ds-scope[data-style-id="cybercore"] b,
  [data-style="cybercore"] strong,
  [data-style="cybercore"] b {
    color: #ffffff;
    font-weight: 700;
  }

  .lab-styled-preview[data-style="cybercore"] code,
  .cybercore-styled-container code,
  .style-cybercore code,
  .ds-scope[data-style-id="cybercore"] code,
  [data-style="cybercore"] code {
    font-family: var(--cc-font-mono);
    font-size: 0.85em;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid var(--cc-border);
    padding: 0.15rem 0.45rem;
    border-radius: 1px;
    color: var(--cc-green);
  }

  /* Horizontal Rule with Terminal Packet Separator */
  .lab-styled-preview[data-style="cybercore"] hr,
  .cybercore-styled-container hr,
  .style-cybercore hr,
  .ds-scope[data-style-id="cybercore"] hr,
  [data-style="cybercore"] hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cc-border), var(--cc-green), var(--cc-border), transparent);
    margin: 3rem 0;
    position: relative;
    text-align: center;
    overflow: visible;
  }

  .lab-styled-preview[data-style="cybercore"] hr::after,
  .cybercore-styled-container hr::after,
  .style-cybercore hr::after,
  .ds-scope[data-style-id="cybercore"] hr::after,
  [data-style="cybercore"] hr::after {
    content: '[ · · · ]';
    display: inline-block;
    position: relative;
    top: -0.75em;
    padding: 0 0.75rem;
    background: var(--cc-bg);
    color: var(--cc-text-muted);
    font-family: var(--cc-font-mono);
    font-size: 0.6875rem;
  }

  /* --------------------------------------------------------------------------
     4. NAVIGATION — BROWSER / SYSTEM WINDOW INTERFACE
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] nav,
  .cybercore-styled-container nav,
  .style-cybercore nav,
  .ds-scope[data-style-id="cybercore"] nav,
  [data-style="cybercore"] nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 1.25rem;
    background: var(--cc-surface);
    border: 1px solid var(--cc-border);
    border-bottom: 2px solid var(--cc-border);
    margin-bottom: 3.25rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
    position: relative;
  }

  /* Navigation Links: Technical Monospace Tabs */
  .lab-styled-preview[data-style="cybercore"] nav a,
  .cybercore-styled-container nav a,
  .style-cybercore nav a,
  .ds-scope[data-style-id="cybercore"] nav a,
  [data-style="cybercore"] nav a {
    font-family: var(--cc-font-mono);
    font-size: 0.78125rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--cc-text-secondary);
    text-decoration: none;
    padding: 0.35rem 0.65rem;
    border: 1px solid transparent;
    transition: all 140ms ease;
  }

  .lab-styled-preview[data-style="cybercore"] nav a:hover,
  .cybercore-styled-container nav a:hover,
  .style-cybercore nav a:hover,
  .ds-scope[data-style-id="cybercore"] nav a:hover,
  [data-style="cybercore"] nav a:hover {
    color: #ffffff;
    background: rgba(0, 240, 255, 0.08);
    border-color: rgba(0, 240, 255, 0.3);
  }

  /* Brand / First Link: System Path Directory */
  .lab-styled-preview[data-style="cybercore"] nav a:first-child,
  .cybercore-styled-container nav a:first-child,
  .style-cybercore nav a:first-child,
  .ds-scope[data-style-id="cybercore"] nav a:first-child,
  [data-style="cybercore"] nav a:first-child {
    font-family: var(--cc-font-mono);
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--cc-green);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    border-color: transparent !important;
  }

  .lab-styled-preview[data-style="cybercore"] nav a:first-child::before,
  .cybercore-styled-container nav a:first-child::before,
  .style-cybercore nav a:first-child::before,
  .ds-scope[data-style-id="cybercore"] nav a:first-child::before,
  [data-style="cybercore"] nav a:first-child::before {
    content: '// SYS:';
    color: var(--cc-cyan);
    margin-right: 0.35rem;
    font-size: 0.8rem;
  }

  .lab-styled-preview[data-style="cybercore"] nav a:first-child::after,
  .cybercore-styled-container nav a:first-child::after,
  .style-cybercore nav a:first-child::after,
  .ds-scope[data-style-id="cybercore"] nav a:first-child::after,
  [data-style="cybercore"] nav a:first-child::after {
    content: ' [ONLINE]';
    font-size: 0.65rem;
    color: var(--cc-text-muted);
    margin-left: 0.35rem;
  }

  /* --------------------------------------------------------------------------
     5. HERO & SECTION HEADERS — SYSTEM ENTRY POINT / DIGITAL IDENTITY
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] header,
  .cybercore-styled-container header,
  .style-cybercore header,
  .ds-scope[data-style-id="cybercore"] header,
  [data-style="cybercore"] header {
    margin-bottom: 3.25rem;
  }

  /* Eyebrow / Kicker: Command Directory Path */
  .lab-styled-preview[data-style="cybercore"] header > p:first-child,
  .lab-styled-preview[data-style="cybercore"] section > p:first-child:not(:last-child),
  .cybercore-styled-container header > p:first-child,
  .cybercore-styled-container section > p:first-child:not(:last-child),
  .style-cybercore header > p:first-child,
  .style-cybercore section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="cybercore"] header > p:first-child,
  .ds-scope[data-style-id="cybercore"] section > p:first-child:not(:last-child),
  [data-style="cybercore"] header > p:first-child,
  [data-style="cybercore"] section > p:first-child:not(:last-child) {
    font-family: var(--cc-font-mono);
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--cc-cyan);
    margin-bottom: 0.85rem;
    display: block;
  }

  .lab-styled-preview[data-style="cybercore"] header > p:first-child::before,
  .lab-styled-preview[data-style="cybercore"] section > p:first-child:not(:last-child)::before,
  .cybercore-styled-container header > p:first-child::before,
  .cybercore-styled-container section > p:first-child:not(:last-child)::before,
  .style-cybercore header > p:first-child::before,
  .style-cybercore section > p:first-child:not(:last-child)::before,
  .ds-scope[data-style-id="cybercore"] header > p:first-child::before,
  .ds-scope[data-style-id="cybercore"] section > p:first-child:not(:last-child)::before,
  [data-style="cybercore"] header > p:first-child::before,
  [data-style="cybercore"] section > p:first-child:not(:last-child)::before {
    content: '>> DIR://';
    color: var(--cc-green);
  }

  /* --------------------------------------------------------------------------
     6. BUTTONS & INTERACTIVE CONTROLS — TECHNICAL HARDWARE TRIGGERS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] button,
  .lab-styled-preview[data-style="cybercore"] a[role="button"],
  .lab-styled-preview[data-style="cybercore"] input[type="submit"],
  .lab-styled-preview[data-style="cybercore"] input[type="button"],
  .cybercore-styled-container button,
  .cybercore-styled-container a[role="button"],
  .cybercore-styled-container input[type="submit"],
  .cybercore-styled-container input[type="button"],
  .style-cybercore button,
  .style-cybercore a[role="button"],
  .style-cybercore input[type="submit"],
  .style-cybercore input[type="button"],
  .ds-scope[data-style-id="cybercore"] button,
  .ds-scope[data-style-id="cybercore"] a[role="button"],
  .ds-scope[data-style-id="cybercore"] input[type="submit"],
  .ds-scope[data-style-id="cybercore"] input[type="button"],
  [data-style="cybercore"] button,
  [data-style="cybercore"] a[role="button"],
  [data-style="cybercore"] input[type="submit"],
  [data-style="cybercore"] input[type="button"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.85rem;
    font-family: var(--cc-font-mono) !important;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 1px;
    border: 1px solid var(--cc-green);
    cursor: pointer;
    background: var(--cc-green);
    color: #0c0e12;
    box-shadow: 2px 2px 0px #000000, 3px 3px 0px rgba(0, 255, 102, 0.4);
    transition: all 140ms ease;
    text-decoration: none;
    line-height: 1.4;
    position: relative;
  }

  .lab-styled-preview[data-style="cybercore"] button::before,
  .cybercore-styled-container button::before,
  .style-cybercore button::before,
  .ds-scope[data-style-id="cybercore"] button::before,
  [data-style="cybercore"] button::before {
    content: '> ';
    font-family: var(--cc-font-mono);
    font-weight: 900;
    margin-right: 0.35rem;
  }

  /* Button Hover */
  .lab-styled-preview[data-style="cybercore"] button:hover,
  .lab-styled-preview[data-style="cybercore"] a[role="button"]:hover,
  .lab-styled-preview[data-style="cybercore"] input[type="submit"]:hover,
  .cybercore-styled-container button:hover,
  .cybercore-styled-container a[role="button"]:hover,
  .cybercore-styled-container input[type="submit"]:hover,
  .style-cybercore button:hover,
  .style-cybercore a[role="button"]:hover,
  .style-cybercore input[type="submit"]:hover,
  .ds-scope[data-style-id="cybercore"] button:hover,
  .ds-scope[data-style-id="cybercore"] a[role="button"]:hover,
  .ds-scope[data-style-id="cybercore"] input[type="submit"]:hover,
  [data-style="cybercore"] button:hover,
  [data-style="cybercore"] a[role="button"]:hover,
  [data-style="cybercore"] input[type="submit"]:hover {
    background: var(--cc-green-hover);
    border-color: var(--cc-cyan);
    color: #0c0e12;
    box-shadow: 3px 3px 0px #000000, 4px 4px 0px var(--cc-cyan);
    transform: translate(-1px, -1px);
  }

  /* Button Active / Depressed */
  .lab-styled-preview[data-style="cybercore"] button:active,
  .lab-styled-preview[data-style="cybercore"] a[role="button"]:active,
  .lab-styled-preview[data-style="cybercore"] input[type="submit"]:active,
  .cybercore-styled-container button:active,
  .cybercore-styled-container a[role="button"]:active,
  .cybercore-styled-container input[type="submit"]:active,
  .style-cybercore button:active,
  .style-cybercore a[role="button"]:active,
  .style-cybercore input[type="submit"]:active,
  .ds-scope[data-style-id="cybercore"] button:active,
  .ds-scope[data-style-id="cybercore"] a[role="button"]:active,
  .ds-scope[data-style-id="cybercore"] input[type="submit"]:active,
  [data-style="cybercore"] button:active,
  [data-style="cybercore"] a[role="button"]:active,
  [data-style="cybercore"] input[type="submit"]:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px transparent;
  }

  /* Focus-Visible Ring */
  .lab-styled-preview[data-style="cybercore"] button:focus-visible,
  .lab-styled-preview[data-style="cybercore"] a[role="button"]:focus-visible,
  .lab-styled-preview[data-style="cybercore"] input[type="submit"]:focus-visible,
  .cybercore-styled-container button:focus-visible,
  .cybercore-styled-container a[role="button"]:focus-visible,
  .cybercore-styled-container input[type="submit"]:focus-visible,
  .style-cybercore button:focus-visible,
  .style-cybercore a[role="button"]:focus-visible,
  .style-cybercore input[type="submit"]:focus-visible,
  .ds-scope[data-style-id="cybercore"] button:focus-visible,
  .ds-scope[data-style-id="cybercore"] a[role="button"]:focus-visible,
  .ds-scope[data-style-id="cybercore"] input[type="submit"]:focus-visible,
  [data-style="cybercore"] button:focus-visible,
  [data-style="cybercore"] a[role="button"]:focus-visible,
  [data-style="cybercore"] input[type="submit"]:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--cc-bg), 0 0 0 4px var(--cc-green) !important;
  }

  /* Disabled State */
  .lab-styled-preview[data-style="cybercore"] button:disabled,
  .cybercore-styled-container button:disabled,
  .style-cybercore button:disabled,
  .ds-scope[data-style-id="cybercore"] button:disabled,
  [data-style="cybercore"] button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    background: #242b35 !important;
    border-color: #333d4b !important;
    color: #64748b !important;
    transform: none !important;
    box-shadow: none !important;
  }

  /* Secondary Button: Console Slab with Cyan Border */
  .lab-styled-preview[data-style="cybercore"] .secondary,
  .lab-styled-preview[data-style="cybercore"] button.secondary,
  .cybercore-styled-container .secondary,
  .cybercore-styled-container button.secondary,
  .style-cybercore .secondary,
  .style-cybercore button.secondary,
  .ds-scope[data-style-id="cybercore"] .secondary,
  .ds-scope[data-style-id="cybercore"] button.secondary,
  [data-style="cybercore"] .secondary,
  [data-style="cybercore"] button.secondary {
    background: var(--cc-surface) !important;
    border-color: var(--cc-border) !important;
    color: #ffffff !important;
    box-shadow: 2px 2px 0px #000000, 3px 3px 0px rgba(0, 240, 255, 0.3) !important;
  }

  .lab-styled-preview[data-style="cybercore"] button.secondary:hover,
  .cybercore-styled-container button.secondary:hover,
  .style-cybercore button.secondary:hover,
  .ds-scope[data-style-id="cybercore"] button.secondary:hover,
  [data-style="cybercore"] button.secondary:hover {
    border-color: var(--cc-cyan) !important;
    color: var(--cc-cyan) !important;
    background: rgba(0, 240, 255, 0.06) !important;
  }

  /* --------------------------------------------------------------------------
     7. CARDS & GRID CONTAINERS — FRAGMENTED CONSOLE PANELS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] section > div,
  .cybercore-styled-container section > div,
  .style-cybercore section > div,
  .ds-scope[data-style-id="cybercore"] section > div,
  [data-style="cybercore"] section > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.85rem;
    align-items: stretch;
  }

  .lab-styled-preview[data-style="cybercore"] article,
  .lab-styled-preview[data-style="cybercore"] .card,
  .lab-styled-preview[data-style="cybercore"] div > article,
  .lab-styled-preview[data-style="cybercore"] [class*="card"],
  .cybercore-styled-container article,
  .cybercore-styled-container .card,
  .cybercore-styled-container div > article,
  .cybercore-styled-container [class*="card"],
  .style-cybercore article,
  .style-cybercore .card,
  .style-cybercore div > article,
  .style-cybercore [class*="card"],
  .ds-scope[data-style-id="cybercore"] article,
  .ds-scope[data-style-id="cybercore"] .card,
  .ds-scope[data-style-id="cybercore"] div > article,
  .ds-scope[data-style-id="cybercore"] [class*="card"],
  [data-style="cybercore"] article,
  [data-style="cybercore"] .card,
  [data-style="cybercore"] div > article,
  [data-style="cybercore"] [class*="card"] {
    position: relative;
    background: var(--cc-surface);
    border: 1px solid var(--cc-border);
    border-radius: 2px;
    padding: 2.15rem 1.85rem;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8), -1px -1px 0px rgba(0, 240, 255, 0.12), 2px 2px 0px rgba(0, 255, 102, 0.2);
    transition: all 180ms ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Offset Technical Metadata Label on Panels */
  .lab-styled-preview[data-style="cybercore"] article::before,
  .lab-styled-preview[data-style="cybercore"] .card::before,
  .cybercore-styled-container article::before,
  .cybercore-styled-container .card::before,
  .style-cybercore article::before,
  .style-cybercore .card::before,
  .ds-scope[data-style-id="cybercore"] article::before,
  .ds-scope[data-style-id="cybercore"] .card::before,
  [data-style="cybercore"] article::before,
  [data-style="cybercore"] .card::before {
    content: '[NODE_FRAG]';
    position: absolute;
    top: -9px;
    right: 12px;
    font-family: var(--cc-font-mono);
    font-size: 0.5625rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--cc-cyan);
    background: var(--cc-bg);
    padding: 1px 6px;
    border: 1px solid var(--cc-border);
  }

  /* Card Hover */
  .lab-styled-preview[data-style="cybercore"] article:hover,
  .lab-styled-preview[data-style="cybercore"] .card:hover,
  .cybercore-styled-container article:hover,
  .cybercore-styled-container .card:hover,
  .style-cybercore article:hover,
  .style-cybercore .card:hover,
  .ds-scope[data-style-id="cybercore"] article:hover,
  .ds-scope[data-style-id="cybercore"] .card:hover,
  [data-style="cybercore"] article:hover,
  [data-style="cybercore"] .card:hover {
    transform: translateY(-2px);
    border-color: var(--cc-green);
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.9), -1px -1px 0px rgba(0, 240, 255, 0.25), 3px 3px 0px rgba(0, 255, 102, 0.4);
  }

  /* --------------------------------------------------------------------------
     8. UN-CARDIFIED SINGLE ARTICLE & BLOCKQUOTES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] article:only-child,
  .lab-styled-preview[data-style="cybercore"] section > article:only-child,
  .cybercore-styled-container article:only-child,
  .cybercore-styled-container section > article:only-child,
  .style-cybercore article:only-child,
  .style-cybercore section > article:only-child,
  .ds-scope[data-style-id="cybercore"] article:only-child,
  .ds-scope[data-style-id="cybercore"] section > article:only-child,
  [data-style="cybercore"] article:only-child,
  [data-style="cybercore"] section > article:only-child {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    max-width: 720px !important;
    margin: 0 auto !important;
    padding: 2rem 0 !important;
    transform: none !important;
  }

  .lab-styled-preview[data-style="cybercore"] article:only-child::before,
  .cybercore-styled-container article:only-child::before,
  .style-cybercore article:only-child::before,
  .ds-scope[data-style-id="cybercore"] article:only-child::before,
  [data-style="cybercore"] article:only-child::before {
    display: none !important;
  }

  /* Blockquote: Archived Digital Communication Log */
  .lab-styled-preview[data-style="cybercore"] blockquote,
  .cybercore-styled-container blockquote,
  .style-cybercore blockquote,
  .ds-scope[data-style-id="cybercore"] blockquote,
  [data-style="cybercore"] blockquote {
    position: relative;
    background: rgba(19, 23, 31, 0.85);
    border: 1px solid var(--cc-border);
    border-left: 4px solid var(--cc-cyan);
    padding: 1.75rem 2rem;
    margin: 2.5rem 0;
    font-family: var(--cc-font-mono);
    font-size: 0.9375rem;
    color: var(--cc-text);
    line-height: 1.7;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.6);
  }

  .lab-styled-preview[data-style="cybercore"] blockquote::before,
  .cybercore-styled-container blockquote::before,
  .style-cybercore blockquote::before,
  .ds-scope[data-style-id="cybercore"] blockquote::before,
  [data-style="cybercore"] blockquote::before {
    content: '/* LOG_EXCERPT */';
    display: block;
    font-size: 0.6875rem;
    color: var(--cc-cyan);
    margin-bottom: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  .lab-styled-preview[data-style="cybercore"] blockquote p,
  .cybercore-styled-container blockquote p,
  .style-cybercore blockquote p,
  .ds-scope[data-style-id="cybercore"] blockquote p,
  [data-style="cybercore"] blockquote p {
    color: var(--cc-text);
    margin-bottom: 0;
  }

  /* --------------------------------------------------------------------------
     9. SAAS / PRICING TIERS — BANDWIDTH ALLOCATION CHARTERS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] [class*="pricing"],
  .cybercore-styled-container [class*="pricing"],
  .style-cybercore [class*="pricing"],
  .ds-scope[data-style-id="cybercore"] [class*="pricing"],
  [data-style="cybercore"] [class*="pricing"] {
    position: relative;
  }

  /* Featured / Priority Override Tier */
  .lab-styled-preview[data-style="cybercore"] section > div > article:nth-child(2),
  .lab-styled-preview[data-style="cybercore"] [class*="popular"],
  .lab-styled-preview[data-style="cybercore"] [class*="featured"],
  .cybercore-styled-container section > div > article:nth-child(2),
  .cybercore-styled-container [class*="popular"],
  .cybercore-styled-container [class*="featured"],
  .style-cybercore section > div > article:nth-child(2),
  .style-cybercore [class*="popular"],
  .style-cybercore [class*="featured"],
  .ds-scope[data-style-id="cybercore"] section > div > article:nth-child(2),
  .ds-scope[data-style-id="cybercore"] [class*="popular"],
  .ds-scope[data-style-id="cybercore"] [class*="featured"],
  [data-style="cybercore"] section > div > article:nth-child(2),
  [data-style="cybercore"] [class*="popular"],
  [data-style="cybercore"] [class*="featured"] {
    background: #161b24;
    border: 1px solid var(--cc-green);
    box-shadow: 4px 4px 0px #000000, -1px -1px 0px rgba(0, 240, 255, 0.3), 3px 3px 0px var(--cc-green);
  }

  .lab-styled-preview[data-style="cybercore"] section > div > article:nth-child(2)::before,
  .lab-styled-preview[data-style="cybercore"] [class*="popular"]::before,
  .lab-styled-preview[data-style="cybercore"] [class*="featured"]::before,
  .cybercore-styled-container section > div > article:nth-child(2)::before,
  .cybercore-styled-container [class*="popular"]::before,
  .cybercore-styled-container [class*="featured"]::before,
  .style-cybercore section > div > article:nth-child(2)::before,
  .style-cybercore [class*="popular"]::before,
  .style-cybercore [class*="featured"]::before,
  .ds-scope[data-style-id="cybercore"] section > div > article:nth-child(2)::before,
  .ds-scope[data-style-id="cybercore"] [class*="popular"]::before,
  .ds-scope[data-style-id="cybercore"] [class*="featured"]::before,
  [data-style="cybercore"] section > div > article:nth-child(2)::before,
  [data-style="cybercore"] [class*="popular"]::before,
  [data-style="cybercore"] [class*="featured"]::before {
    content: '[TIER: PRIORITY_OVERRIDE]';
    position: absolute;
    top: -11px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--cc-font-mono);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #0c0e12;
    background: var(--cc-green);
    padding: 2px 10px;
    border-radius: 1px;
    white-space: nowrap;
  }

  /* Distinct Rate Numbers */
  .lab-styled-preview[data-style="cybercore"] section > div > article p:has(+ button),
  .lab-styled-preview[data-style="cybercore"] section > div > article p:has(+ a[role="button"]),
  .lab-styled-preview[data-style="cybercore"] [class*="price"],
  .cybercore-styled-container section > div > article p:has(+ button),
  .cybercore-styled-container section > div > article p:has(+ a[role="button"]),
  .cybercore-styled-container [class*="price"],
  .style-cybercore section > div > article p:has(+ button),
  .style-cybercore section > div > article p:has(+ a[role="button"]),
  .style-cybercore [class*="price"],
  .ds-scope[data-style-id="cybercore"] section > div > article p:has(+ button),
  .ds-scope[data-style-id="cybercore"] section > div > article p:has(+ a[role="button"]),
  .ds-scope[data-style-id="cybercore"] [class*="price"],
  [data-style="cybercore"] section > div > article p:has(+ button),
  [data-style="cybercore"] section > div > article p:has(+ a[role="button"]),
  [data-style="cybercore"] [class*="price"] {
    font-family: var(--cc-font-display) !important;
    font-size: 2.25rem !important;
    font-weight: 700 !important;
    color: var(--cc-green) !important;
    margin: 1.15rem 0 !important;
    letter-spacing: -0.02em !important;
    line-height: 1.15 !important;
  }

  /* --------------------------------------------------------------------------
     10. DASHBOARD & TELEMETRY — FRAGMENTED SYSTEM CONSOLE
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] article strong,
  .cybercore-styled-container article strong,
  .style-cybercore article strong,
  .ds-scope[data-style-id="cybercore"] article strong,
  [data-style="cybercore"] article strong {
    display: block;
    font-family: var(--cc-font-mono);
    font-size: 2.15rem;
    font-weight: 700;
    color: var(--cc-green);
    letter-spacing: -0.02em;
    margin: 0.5rem 0 0.35rem 0;
    line-height: 1.1;
  }

  /* Data Table: Terminal Matrix Dump */
  .lab-styled-preview[data-style="cybercore"] table,
  .cybercore-styled-container table,
  .style-cybercore table,
  .ds-scope[data-style-id="cybercore"] table,
  [data-style="cybercore"] table {
    width: 100%;
    border-collapse: collapse;
    background: var(--cc-surface);
    border: 1px solid var(--cc-border);
    margin: 2.5rem 0;
    font-family: var(--cc-font-mono);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.6);
  }

  .lab-styled-preview[data-style="cybercore"] th,
  .cybercore-styled-container th,
  .style-cybercore th,
  .ds-scope[data-style-id="cybercore"] th,
  [data-style="cybercore"] th {
    background: #0c0e12;
    color: var(--cc-cyan);
    padding: 0.85rem 1.15rem;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-bottom: 2px solid var(--cc-border);
  }

  .lab-styled-preview[data-style="cybercore"] td,
  .cybercore-styled-container td,
  .style-cybercore td,
  .ds-scope[data-style-id="cybercore"] td,
  [data-style="cybercore"] td {
    padding: 0.85rem 1.15rem;
    color: var(--cc-text);
    border-bottom: 1px solid var(--cc-border);
    font-size: 0.875rem;
  }

  .lab-styled-preview[data-style="cybercore"] tr:nth-child(even) td,
  .cybercore-styled-container tr:nth-child(even) td,
  .style-cybercore tr:nth-child(even) td,
  .ds-scope[data-style-id="cybercore"] tr:nth-child(even) td,
  [data-style="cybercore"] tr:nth-child(even) td {
    background: rgba(26, 32, 44, 0.45);
  }

  .lab-styled-preview[data-style="cybercore"] tr:hover td,
  .cybercore-styled-container tr:hover td,
  .style-cybercore tr:hover td,
  .ds-scope[data-style-id="cybercore"] tr:hover td,
  [data-style="cybercore"] tr:hover td {
    background: rgba(0, 255, 102, 0.05);
    color: #ffffff;
  }

  /* --------------------------------------------------------------------------
     11. E-COMMERCE & UNDERGROUND DIGITAL CATALOG
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] [class*="badge"],
  .lab-styled-preview[data-style="cybercore"] .tag,
  .cybercore-styled-container [class*="badge"],
  .cybercore-styled-container .tag,
  .style-cybercore [class*="badge"],
  .style-cybercore .tag,
  .ds-scope[data-style-id="cybercore"] [class*="badge"],
  .ds-scope[data-style-id="cybercore"] .tag,
  [data-style="cybercore"] [class*="badge"],
  [data-style="cybercore"] .tag {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    background: rgba(0, 255, 102, 0.08);
    border: 1px solid rgba(0, 255, 102, 0.35);
    color: var(--cc-green);
    font-family: var(--cc-font-mono);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 1px;
  }

  /* --------------------------------------------------------------------------
     12. RESTAURANT MENUS — DIGITAL PROVISIONING MANIFEST
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] ul,
  .cybercore-styled-container ul,
  .style-cybercore ul,
  .ds-scope[data-style-id="cybercore"] ul,
  [data-style="cybercore"] ul {
    list-style: none;
    padding-left: 0;
  }

  .lab-styled-preview[data-style="cybercore"] li,
  .cybercore-styled-container li,
  .style-cybercore li,
  .ds-scope[data-style-id="cybercore"] li,
  [data-style="cybercore"] li {
    padding: 0.65rem 0;
    border-bottom: 1px dashed var(--cc-border);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-family: var(--cc-font-mono);
    font-size: 0.9375rem;
  }

  .lab-styled-preview[data-style="cybercore"] li span:last-child,
  .cybercore-styled-container li span:last-child,
  .style-cybercore li span:last-child,
  .ds-scope[data-style-id="cybercore"] li span:last-child,
  [data-style="cybercore"] li span:last-child {
    color: var(--cc-green);
    font-weight: 700;
  }

  /* --------------------------------------------------------------------------
     13. FORMS & COMMAND PROMPT INTERFACE
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] form,
  .cybercore-styled-container form,
  .style-cybercore form,
  .ds-scope[data-style-id="cybercore"] form,
  [data-style="cybercore"] form {
    background: var(--cc-surface);
    border: 1px solid var(--cc-border);
    padding: 2.75rem 2.25rem;
    max-width: 660px;
    margin: 2.5rem auto;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8), 2px 2px 0px rgba(0, 255, 102, 0.2);
    position: relative;
  }

  .lab-styled-preview[data-style="cybercore"] form::before,
  .cybercore-styled-container form::before,
  .style-cybercore form::before,
  .ds-scope[data-style-id="cybercore"] form::before,
  [data-style="cybercore"] form::before {
    content: '>> COMMAND_INPUT_INTERFACE // READY';
    display: block;
    font-family: var(--cc-font-mono);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--cc-green);
    margin-bottom: 1.75rem;
    border-bottom: 1px solid var(--cc-border);
    padding-bottom: 0.65rem;
  }

  .lab-styled-preview[data-style="cybercore"] form > div,
  .cybercore-styled-container form > div,
  .style-cybercore form > div,
  .ds-scope[data-style-id="cybercore"] form > div,
  [data-style="cybercore"] form > div {
    margin-bottom: 1.5rem;
  }

  .lab-styled-preview[data-style="cybercore"] label,
  .cybercore-styled-container label,
  .style-cybercore label,
  .ds-scope[data-style-id="cybercore"] label,
  [data-style="cybercore"] label {
    display: block;
    font-family: var(--cc-font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--cc-text);
    margin-bottom: 0.45rem;
  }

  .lab-styled-preview[data-style="cybercore"] label::before,
  .cybercore-styled-container label::before,
  .style-cybercore label::before,
  .ds-scope[data-style-id="cybercore"] label::before,
  [data-style="cybercore"] label::before {
    content: '[$] ';
    color: var(--cc-cyan);
  }

  .lab-styled-preview[data-style="cybercore"] input[type="text"],
  .lab-styled-preview[data-style="cybercore"] input[type="email"],
  .lab-styled-preview[data-style="cybercore"] input[type="password"],
  .lab-styled-preview[data-style="cybercore"] input[type="search"],
  .lab-styled-preview[data-style="cybercore"] input[type="number"],
  .lab-styled-preview[data-style="cybercore"] textarea,
  .lab-styled-preview[data-style="cybercore"] select,
  .cybercore-styled-container input[type="text"],
  .cybercore-styled-container input[type="email"],
  .cybercore-styled-container input[type="password"],
  .cybercore-styled-container input[type="search"],
  .cybercore-styled-container input[type="number"],
  .cybercore-styled-container textarea,
  .cybercore-styled-container select,
  .style-cybercore input[type="text"],
  .style-cybercore input[type="email"],
  .style-cybercore input[type="password"],
  .style-cybercore input[type="search"],
  .style-cybercore input[type="number"],
  .style-cybercore textarea,
  .style-cybercore select,
  .ds-scope[data-style-id="cybercore"] input[type="text"],
  .ds-scope[data-style-id="cybercore"] input[type="email"],
  .ds-scope[data-style-id="cybercore"] input[type="password"],
  .ds-scope[data-style-id="cybercore"] input[type="search"],
  .ds-scope[data-style-id="cybercore"] input[type="number"],
  .ds-scope[data-style-id="cybercore"] textarea,
  .ds-scope[data-style-id="cybercore"] select,
  [data-style="cybercore"] input[type="text"],
  [data-style="cybercore"] input[type="email"],
  [data-style="cybercore"] input[type="password"],
  [data-style="cybercore"] input[type="search"],
  [data-style="cybercore"] input[type="number"],
  [data-style="cybercore"] textarea,
  [data-style="cybercore"] select {
    width: 100%;
    padding: 0.8rem 1rem;
    font-family: var(--cc-font-mono) !important;
    font-size: 0.9375rem;
    color: #ffffff;
    background: #0c0e12;
    border: 1px solid var(--cc-border);
    border-radius: 1px;
    outline: none;
    transition: all 140ms ease;
    box-sizing: border-box;
  }

  .lab-styled-preview[data-style="cybercore"] input:focus,
  .lab-styled-preview[data-style="cybercore"] textarea:focus,
  .lab-styled-preview[data-style="cybercore"] select:focus,
  .cybercore-styled-container input:focus,
  .cybercore-styled-container textarea:focus,
  .cybercore-styled-container select:focus,
  .style-cybercore input:focus,
  .style-cybercore textarea:focus,
  .style-cybercore select:focus,
  .ds-scope[data-style-id="cybercore"] input:focus,
  .ds-scope[data-style-id="cybercore"] textarea:focus,
  .ds-scope[data-style-id="cybercore"] select:focus,
  [data-style="cybercore"] input:focus,
  [data-style="cybercore"] textarea:focus,
  [data-style="cybercore"] select:focus {
    border-color: var(--cc-green);
    box-shadow: 0 0 0 2px rgba(0, 255, 102, 0.25), inset 0 0 8px rgba(0, 255, 102, 0.1);
  }

  .lab-styled-preview[data-style="cybercore"] input::placeholder,
  .lab-styled-preview[data-style="cybercore"] textarea::placeholder,
  .cybercore-styled-container input::placeholder,
  .cybercore-styled-container textarea::placeholder,
  .style-cybercore input::placeholder,
  .style-cybercore textarea::placeholder,
  .ds-scope[data-style-id="cybercore"] input::placeholder,
  .ds-scope[data-style-id="cybercore"] textarea::placeholder,
  [data-style="cybercore"] input::placeholder,
  [data-style="cybercore"] textarea::placeholder {
    color: var(--cc-text-muted);
    font-style: italic;
  }

  /* --------------------------------------------------------------------------
     14. FOOTER — CORRUPTED SYSTEM LOG READOUT
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="cybercore"] footer,
  .cybercore-styled-container footer,
  .style-cybercore footer,
  .ds-scope[data-style-id="cybercore"] footer,
  [data-style="cybercore"] footer {
    margin-top: 4.5rem;
    padding: 2.5rem 1.5rem;
    text-align: center;
    color: var(--cc-text-muted);
    font-family: var(--cc-font-mono);
    font-size: 0.8125rem;
    border-top: 1px solid var(--cc-border);
    background: var(--cc-surface);
  }

  .lab-styled-preview[data-style="cybercore"] footer::before,
  .cybercore-styled-container footer::before,
  .style-cybercore footer::before,
  .ds-scope[data-style-id="cybercore"] footer::before,
  [data-style="cybercore"] footer::before {
    content: '// MEM_DUMP: OK // TERMINAL_SESSION_CLOSED //';
    display: block;
    color: var(--cc-green);
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
    letter-spacing: 0.1em;
  }

  /* --------------------------------------------------------------------------
     15. ACCESSIBILITY & PREFERS-REDUCED-MOTION
     -------------------------------------------------------------------------- */
  @media (prefers-reduced-motion: reduce) {
    .lab-styled-preview[data-style="cybercore"] *,
    .cybercore-styled-container *,
    .style-cybercore *,
    .ds-scope[data-style-id="cybercore"] *,
    [data-style="cybercore"] * {
      animation: none !important;
      transition: none !important;
      transform: none !important;
    }
  }

  /* --------------------------------------------------------------------------
     16. RESPONSIVE BREAKPOINTS
     -------------------------------------------------------------------------- */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="cybercore"],
    .cybercore-styled-container,
    .style-cybercore,
    .ds-scope[data-style-id="cybercore"],
    [data-style="cybercore"] {
      padding: 1.75rem 1.25rem !important;
    }

    .lab-styled-preview[data-style="cybercore"] nav,
    .cybercore-styled-container nav,
    .style-cybercore nav,
    .ds-scope[data-style-id="cybercore"] nav,
    [data-style="cybercore"] nav {
      gap: 1rem !important;
      padding: 0.85rem !important;
      margin-bottom: 2.25rem !important;
    }

    .lab-styled-preview[data-style="cybercore"] section > div,
    .cybercore-styled-container section > div,
    .style-cybercore section > div,
    .ds-scope[data-style-id="cybercore"] section > div,
    [data-style="cybercore"] section > div {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }

    .lab-styled-preview[data-style="cybercore"] form,
    .cybercore-styled-container form,
    .style-cybercore form,
    .ds-scope[data-style-id="cybercore"] form,
    [data-style="cybercore"] form {
      padding: 2rem 1.25rem !important;
    }
  }
`;
