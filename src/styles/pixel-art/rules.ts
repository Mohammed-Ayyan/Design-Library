export const pixelArtSemanticCss = `
  /* ==========================================================================
     PIXEL ART — 8-Bit / 16-Bit Retro Game Interface Visual Language
     Strict Semantic CSS Mapping: Zero DOM Wrappers, 100% User HTML Preservation
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&family=VT323&display=swap');

  /* Container & Canvas: Deep 16-Bit Retro Console Void */
  .lab-styled-preview[data-style="pixel-art"],
  .pixel-art-styled-container,
  .style-pixel-art,
  [data-style="pixel-art"],
  .ds-scope[data-style-id="pixel-art"],
  .style-pixel,
  [data-style="pixel"],
  .ds-scope[data-style-id="pixel"] {
    background-color: #12131c !important;
    color: #e2e8f0 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    line-height: 1.65 !important;
    padding: 2.5rem !important;
    min-height: 100% !important;
    box-sizing: border-box !important;
    position: relative !important;
    image-rendering: pixelated !important;
  }

  /* Scanline / Pixel Grid Texture Overlay */
  .lab-styled-preview[data-style="pixel-art"]::before,
  .pixel-art-styled-container::before,
  .style-pixel-art::before,
  [data-style="pixel-art"]::before,
  .ds-scope[data-style-id="pixel-art"]::before,
  .style-pixel::before,
  [data-style="pixel"]::before,
  .ds-scope[data-style-id="pixel"]::before {
    content: "" !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    background: linear-gradient(
      rgba(18, 19, 28, 0) 50%,
      rgba(0, 0, 0, 0.25) 50%
    ), linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.02),
      rgba(0, 255, 0, 0.01),
      rgba(0, 0, 255, 0.02)
    ) !important;
    background-size: 100% 4px, 6px 100% !important;
    pointer-events: none !important;
    z-index: 1 !important;
    opacity: 0.6 !important;
  }

  /* Ensure content stays above scanline overlay */
  .lab-styled-preview[data-style="pixel-art"] > *,
  .pixel-art-styled-container > *,
  .style-pixel-art > *,
  [data-style="pixel-art"] > *,
  .ds-scope[data-style-id="pixel-art"] > *,
  .style-pixel > *,
  [data-style="pixel"] > *,
  .ds-scope[data-style-id="pixel"] > * {
    position: relative !important;
    z-index: 2 !important;
  }

  /* Global Square Aliased Geometry: Strict 0px Radii */
  .lab-styled-preview[data-style="pixel-art"] *,
  .pixel-art-styled-container *,
  .style-pixel-art *,
  [data-style="pixel-art"] *,
  .ds-scope[data-style-id="pixel-art"] *,
  .style-pixel *,
  [data-style="pixel"] *,
  .ds-scope[data-style-id="pixel"] * {
    border-radius: 0 !important;
    box-sizing: border-box !important;
  }

  /* 1. Navigation: 8-Bit Game Main Menu */
  .lab-styled-preview[data-style="pixel-art"] nav,
  .pixel-art-styled-container nav,
  .style-pixel-art nav,
  [data-style="pixel-art"] nav,
  .ds-scope[data-style-id="pixel-art"] nav,
  .style-pixel nav,
  [data-style="pixel"] nav,
  .ds-scope[data-style-id="pixel"] nav {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 1.25rem !important;
    padding: 1rem 1.5rem !important;
    background: #1a1d2e !important;
    border: 3px solid #000000 !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.15),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      4px 4px 0px #000000 !important;
    margin-bottom: 2.5rem !important;
  }

  .lab-styled-preview[data-style="pixel-art"] nav a,
  .pixel-art-styled-container nav a,
  .style-pixel-art nav a,
  [data-style="pixel-art"] nav a,
  .ds-scope[data-style-id="pixel-art"] nav a,
  .style-pixel nav a,
  [data-style="pixel"] nav a,
  .ds-scope[data-style-id="pixel"] nav a {
    font-family: 'Silkscreen', 'Press Start 2P', monospace !important;
    font-size: 0.8125rem !important;
    font-weight: 700 !important;
    color: #94a3b8 !important;
    text-decoration: none !important;
    padding: 0.5rem 0.85rem !important;
    border: 2px solid transparent !important;
    transition: all 120ms steps(2, jump-none) !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
  }

  .lab-styled-preview[data-style="pixel-art"] nav a:hover,
  .pixel-art-styled-container nav a:hover,
  .style-pixel-art nav a:hover,
  [data-style="pixel-art"] nav a:hover,
  .ds-scope[data-style-id="pixel-art"] nav a:hover,
  .style-pixel nav a:hover,
  [data-style="pixel"] nav a:hover,
  .ds-scope[data-style-id="pixel"] nav a:hover {
    color: #22c55e !important;
    background: #12131c !important;
    border: 2px solid #22c55e !important;
    box-shadow: 2px 2px 0px #000000 !important;
    text-decoration: none !important;
    transform: translate(-1px, -1px) !important;
  }

  /* First Link: Title Screen Brand Anchor */
  .lab-styled-preview[data-style="pixel-art"] nav a:first-child,
  .pixel-art-styled-container nav a:first-child,
  .style-pixel-art nav a:first-child,
  [data-style="pixel-art"] nav a:first-child,
  .ds-scope[data-style-id="pixel-art"] nav a:first-child,
  .style-pixel nav a:first-child,
  [data-style="pixel"] nav a:first-child,
  .ds-scope[data-style-id="pixel"] nav a:first-child {
    font-family: 'Press Start 2P', monospace !important;
    font-size: 0.875rem !important;
    color: #facc15 !important; /* Arcade Gold */
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding-left: 0 !important;
    transform: none !important;
  }

  .lab-styled-preview[data-style="pixel-art"] nav a:first-child::before,
  .pixel-art-styled-container nav a:first-child::before,
  .style-pixel-art nav a:first-child::before,
  [data-style="pixel-art"] nav a:first-child::before,
  .ds-scope[data-style-id="pixel-art"] nav a:first-child::before,
  .style-pixel nav a:first-child::before,
  [data-style="pixel"] nav a:first-child::before,
  .ds-scope[data-style-id="pixel"] nav a:first-child::before {
    content: "👾" !important;
    font-size: 1rem !important;
    margin-right: 0.5rem !important;
  }

  /* 2. Typographic System: Bitmap Display + Readable Grotesk Body */
  .lab-styled-preview[data-style="pixel-art"] h1,
  .pixel-art-styled-container h1,
  .style-pixel-art h1,
  [data-style="pixel-art"] h1,
  .ds-scope[data-style-id="pixel-art"] h1,
  .style-pixel h1,
  [data-style="pixel"] h1,
  .ds-scope[data-style-id="pixel"] h1 {
    font-family: 'Press Start 2P', monospace !important;
    font-size: clamp(1.25rem, 2.75vw, 1.85rem) !important;
    font-weight: 400 !important;
    line-height: 1.55 !important;
    letter-spacing: 0.02em !important;
    color: #ffffff !important;
    margin-top: 0 !important;
    margin-bottom: 1.5rem !important;
    text-transform: uppercase !important;
    text-shadow: 3px 3px 0px #000000, 5px 5px 0px rgba(34, 197, 94, 0.4) !important;
    overflow-wrap: break-word !important;
    word-break: normal !important;
  }

  .lab-styled-preview[data-style="pixel-art"] h2,
  .pixel-art-styled-container h2,
  .style-pixel-art h2,
  [data-style="pixel-art"] h2,
  .ds-scope[data-style-id="pixel-art"] h2,
  .style-pixel h2,
  [data-style="pixel"] h2,
  .ds-scope[data-style-id="pixel"] h2 {
    font-family: 'Press Start 2P', monospace !important;
    font-size: clamp(1rem, 2.2vw, 1.35rem) !important;
    font-weight: 400 !important;
    line-height: 1.6 !important;
    letter-spacing: 0.03em !important;
    color: #22c55e !important; /* Arcade Green */
    margin-top: 2rem !important;
    margin-bottom: 1.25rem !important;
    text-transform: uppercase !important;
    display: flex !important;
    align-items: center !important;
    gap: 0.65rem !important;
    text-shadow: 2px 2px 0px #000000 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] h2::before,
  .pixel-art-styled-container h2::before,
  .style-pixel-art h2::before,
  [data-style="pixel-art"] h2::before,
  .ds-scope[data-style-id="pixel-art"] h2::before,
  .style-pixel h2::before,
  [data-style="pixel"] h2::before,
  .ds-scope[data-style-id="pixel"] h2::before {
    content: "▶" !important;
    color: #facc15 !important;
    font-size: 0.85em !important;
  }

  .lab-styled-preview[data-style="pixel-art"] h3,
  .pixel-art-styled-container h3,
  .style-pixel-art h3,
  [data-style="pixel-art"] h3,
  .ds-scope[data-style-id="pixel-art"] h3,
  .style-pixel h3,
  [data-style="pixel"] h3,
  .ds-scope[data-style-id="pixel"] h3 {
    font-family: 'Silkscreen', 'Press Start 2P', monospace !important;
    font-size: 1.1rem !important;
    font-weight: 700 !important;
    color: #38bdf8 !important; /* Mana Blue */
    margin-top: 0 !important;
    margin-bottom: 0.65rem !important;
    letter-spacing: 0.04em !important;
    text-transform: uppercase !important;
    text-shadow: 1px 1px 0px #000000 !important;
  }

  /* Retro Quest / Status Eyebrow Badges */
  .lab-styled-preview[data-style="pixel-art"] header > p:first-child,
  .lab-styled-preview[data-style="pixel-art"] section > p:first-child,
  .pixel-art-styled-container header > p:first-child,
  .style-pixel-art header > p:first-child,
  [data-style="pixel-art"] header > p:first-child,
  .ds-scope[data-style-id="pixel-art"] header > p:first-child,
  .style-pixel header > p:first-child,
  [data-style="pixel"] header > p:first-child,
  .ds-scope[data-style-id="pixel"] header > p:first-child,
  .pixel-art-styled-container section > p:first-child,
  .style-pixel-art section > p:first-child,
  [data-style="pixel-art"] section > p:first-child,
  .ds-scope[data-style-id="pixel-art"] section > p:first-child,
  .style-pixel section > p:first-child,
  [data-style="pixel"] section > p:first-child,
  .ds-scope[data-style-id="pixel"] section > p:first-child {
    font-family: 'Press Start 2P', monospace !important;
    font-size: 0.625rem !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    color: #000000 !important;
    background: #facc15 !important; /* Arcade Coin Yellow */
    border: 2px solid #000000 !important;
    box-shadow: 3px 3px 0px #000000 !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    padding: 0.4rem 0.75rem !important;
    margin-bottom: 1.25rem !important;
    width: fit-content !important;
  }

  .lab-styled-preview[data-style="pixel-art"] header > p:first-child::before,
  .lab-styled-preview[data-style="pixel-art"] section > p:first-child::before,
  .pixel-art-styled-container header > p:first-child::before,
  .style-pixel-art header > p:first-child::before,
  [data-style="pixel-art"] header > p:first-child::before,
  .ds-scope[data-style-id="pixel-art"] header > p:first-child::before,
  .style-pixel header > p:first-child::before,
  [data-style="pixel"] header > p:first-child::before,
  .ds-scope[data-style-id="pixel"] header > p:first-child::before,
  .pixel-art-styled-container section > p:first-child::before,
  .style-pixel-art section > p:first-child::before,
  [data-style="pixel-art"] section > p:first-child::before,
  .ds-scope[data-style-id="pixel-art"] section > p:first-child::before,
  .style-pixel section > p:first-child::before,
  [data-style="pixel"] section > p:first-child::before,
  .ds-scope[data-style-id="pixel"] section > p:first-child::before {
    content: "★" !important;
    color: #000000 !important;
    font-size: 0.75rem !important;
  }

  /* Body Text: Clean High-Legibility Sans (Never Unreadable Monospace Soup) */
  .lab-styled-preview[data-style="pixel-art"] p,
  .pixel-art-styled-container p,
  .style-pixel-art p,
  [data-style="pixel-art"] p,
  .ds-scope[data-style-id="pixel-art"] p,
  .style-pixel p,
  [data-style="pixel"] p,
  .ds-scope[data-style-id="pixel"] p {
    font-family: 'Inter', -apple-system, sans-serif !important;
    font-size: 1rem !important;
    line-height: 1.7 !important;
    color: #cbd5e1 !important;
    margin-top: 0 !important;
    margin-bottom: 1.25rem !important;
    max-width: 68ch !important;
  }

  /* 3. Buttons: Chunky Tactile Arcade Buttons */
  .lab-styled-preview[data-style="pixel-art"] button,
  .lab-styled-preview[data-style="pixel-art"] input[type="submit"],
  .pixel-art-styled-container button,
  .style-pixel-art button,
  [data-style="pixel-art"] button,
  .ds-scope[data-style-id="pixel-art"] button,
  .style-pixel button,
  [data-style="pixel"] button,
  .ds-scope[data-style-id="pixel"] button,
  .pixel-art-styled-container input[type="submit"],
  .style-pixel-art input[type="submit"],
  [data-style="pixel-art"] input[type="submit"],
  .ds-scope[data-style-id="pixel-art"] input[type="submit"],
  .style-pixel input[type="submit"],
  [data-style="pixel"] input[type="submit"],
  .ds-scope[data-style-id="pixel"] input[type="submit"] {
    font-family: 'Press Start 2P', monospace !important;
    font-size: 0.6875rem !important;
    letter-spacing: 0.05em !important;
    text-transform: uppercase !important;
    background: #22c55e !important; /* Arcade Green */
    color: #000000 !important;
    border: 3px solid #000000 !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.4),
      inset -2px -2px 0px rgba(0, 0, 0, 0.4),
      4px 4px 0px #000000 !important;
    padding: 0.85rem 1.65rem !important;
    cursor: pointer !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.65rem !important;
    transition: none !important; /* Instant 8-bit snap */
    position: relative !important;
  }

  .lab-styled-preview[data-style="pixel-art"] button::before,
  .lab-styled-preview[data-style="pixel-art"] input[type="submit"]::before,
  .pixel-art-styled-container button::before,
  .style-pixel-art button::before,
  [data-style="pixel-art"] button::before,
  .ds-scope[data-style-id="pixel-art"] button::before,
  .style-pixel button::before,
  [data-style="pixel"] button::before,
  .ds-scope[data-style-id="pixel"] button::before,
  .pixel-art-styled-container input[type="submit"]::before,
  .style-pixel-art input[type="submit"]::before,
  [data-style="pixel-art"] input[type="submit"]::before,
  .ds-scope[data-style-id="pixel-art"] input[type="submit"]::before,
  .style-pixel input[type="submit"]::before,
  [data-style="pixel"] input[type="submit"]::before,
  .ds-scope[data-style-id="pixel"] input[type="submit"]::before {
    content: "▶" !important;
    font-size: 0.65rem !important;
    color: #000000 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] button:hover,
  .lab-styled-preview[data-style="pixel-art"] input[type="submit"]:hover,
  .pixel-art-styled-container button:hover,
  .style-pixel-art button:hover,
  [data-style="pixel-art"] button:hover,
  .ds-scope[data-style-id="pixel-art"] button:hover,
  .style-pixel button:hover,
  [data-style="pixel"] button:hover,
  .ds-scope[data-style-id="pixel"] button:hover,
  .pixel-art-styled-container input[type="submit"]:hover,
  .style-pixel-art input[type="submit"]:hover,
  [data-style="pixel-art"] input[type="submit"]:hover,
  .ds-scope[data-style-id="pixel-art"] input[type="submit"]:hover,
  .style-pixel input[type="submit"]:hover,
  [data-style="pixel"] input[type="submit"]:hover,
  .ds-scope[data-style-id="pixel"] input[type="submit"]:hover {
    background: #4ade80 !important; /* Lighter Arcade Green */
    transform: translate(-1px, -1px) !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.6),
      inset -2px -2px 0px rgba(0, 0, 0, 0.4),
      5px 5px 0px #000000 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] button:active,
  .lab-styled-preview[data-style="pixel-art"] input[type="submit"]:active,
  .pixel-art-styled-container button:active,
  .style-pixel-art button:active,
  [data-style="pixel-art"] button:active,
  .ds-scope[data-style-id="pixel-art"] button:active,
  .style-pixel button:active,
  [data-style="pixel"] button:active,
  .ds-scope[data-style-id="pixel"] button:active,
  .pixel-art-styled-container input[type="submit"]:active,
  .style-pixel-art input[type="submit"]:active,
  [data-style="pixel-art"] input[type="submit"]:active,
  .ds-scope[data-style-id="pixel-art"] input[type="submit"]:active,
  .style-pixel input[type="submit"]:active,
  [data-style="pixel"] input[type="submit"]:active,
  .ds-scope[data-style-id="pixel"] input[type="submit"]:active {
    transform: translate(3px, 3px) !important;
    box-shadow: 
      inset -2px -2px 0px rgba(255, 255, 255, 0.3),
      inset 2px 2px 0px rgba(0, 0, 0, 0.5),
      1px 1px 0px #000000 !important;
  }

  /* Secondary Button: Steel Slate Palette */
  .lab-styled-preview[data-style="pixel-art"] button + button,
  .pixel-art-styled-container button + button,
  .style-pixel-art button + button,
  [data-style="pixel-art"] button + button,
  .ds-scope[data-style-id="pixel-art"] button + button,
  .style-pixel button + button,
  [data-style="pixel"] button + button,
  .ds-scope[data-style-id="pixel"] button + button {
    background: #334155 !important;
    color: #ffffff !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.2),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      4px 4px 0px #000000 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] button + button::before,
  .pixel-art-styled-container button + button::before,
  .style-pixel-art button + button::before,
  [data-style="pixel-art"] button + button::before,
  .ds-scope[data-style-id="pixel-art"] button + button::before,
  .style-pixel button + button::before,
  [data-style="pixel"] button + button::before,
  .ds-scope[data-style-id="pixel"] button + button::before {
    color: #facc15 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] button + button:hover,
  .pixel-art-styled-container button + button:hover,
  .style-pixel-art button + button:hover,
  [data-style="pixel-art"] button + button:hover,
  .ds-scope[data-style-id="pixel-art"] button + button:hover,
  .style-pixel button + button:hover,
  [data-style="pixel"] button + button:hover,
  .ds-scope[data-style-id="pixel"] button + button:hover {
    background: #475569 !important;
    color: #ffffff !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.3),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      5px 5px 0px #000000 !important;
  }

  /* 4. Panels & Dialog Boxes: Classic 8-Bit Beveled Windows */
  .lab-styled-preview[data-style="pixel-art"] article,
  .pixel-art-styled-container article,
  .style-pixel-art article,
  [data-style="pixel-art"] article,
  .ds-scope[data-style-id="pixel-art"] article,
  .style-pixel article,
  [data-style="pixel"] article,
  .ds-scope[data-style-id="pixel"] article {
    background: #1a1d2e !important;
    border: 3px solid #000000 !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.12),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      4px 4px 0px #000000 !important;
    padding: 2rem !important;
    margin-bottom: 1.75rem !important;
    position: relative !important;
    transition: transform 120ms steps(2, jump-none) !important;
  }

  .lab-styled-preview[data-style="pixel-art"] article:hover,
  .pixel-art-styled-container article:hover,
  .style-pixel-art article:hover,
  [data-style="pixel-art"] article:hover,
  .ds-scope[data-style-id="pixel-art"] article:hover,
  .style-pixel article:hover,
  [data-style="pixel"] article:hover,
  .ds-scope[data-style-id="pixel"] article:hover {
    border-color: #000000 !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.2),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      6px 6px 0px #000000 !important;
    transform: translate(-2px, -2px) !important;
  }

  /* Anti-Cardification: Pure Editorial Articles Stay Open (Game Lore / Manual) */
  .lab-styled-preview[data-style="pixel-art"] main > article,
  .lab-styled-preview[data-style="pixel-art"] .dispatch,
  .pixel-art-styled-container main > article,
  .style-pixel-art main > article,
  [data-style="pixel-art"] main > article,
  .ds-scope[data-style-id="pixel-art"] main > article,
  .style-pixel main > article,
  [data-style="pixel"] main > article,
  .ds-scope[data-style-id="pixel"] main > article,
  .pixel-art-styled-container .dispatch,
  .style-pixel-art .dispatch,
  [data-style="pixel-art"] .dispatch,
  .ds-scope[data-style-id="pixel-art"] .dispatch,
  .style-pixel .dispatch,
  [data-style="pixel"] .dispatch,
  .ds-scope[data-style-id="pixel"] .dispatch {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] main > article:hover,
  .lab-styled-preview[data-style="pixel-art"] .dispatch:hover,
  .pixel-art-styled-container main > article:hover,
  .style-pixel-art main > article:hover,
  [data-style="pixel-art"] main > article:hover,
  .ds-scope[data-style-id="pixel-art"] main > article:hover,
  .style-pixel main > article:hover,
  [data-style="pixel"] main > article:hover,
  .ds-scope[data-style-id="pixel"] main > article:hover,
  .pixel-art-styled-container .dispatch:hover,
  .style-pixel-art .dispatch:hover,
  [data-style="pixel-art"] .dispatch:hover,
  .ds-scope[data-style-id="pixel-art"] .dispatch:hover,
  .style-pixel .dispatch:hover,
  [data-style="pixel"] .dispatch:hover,
  .ds-scope[data-style-id="pixel"] .dispatch:hover {
    transform: none !important;
    box-shadow: none !important;
  }

  /* 5. Pullquotes: Game Dialog / Lore Quote Box */
  .lab-styled-preview[data-style="pixel-art"] blockquote,
  .pixel-art-styled-container blockquote,
  .style-pixel-art blockquote,
  [data-style="pixel-art"] blockquote,
  .ds-scope[data-style-id="pixel-art"] blockquote,
  .style-pixel blockquote,
  [data-style="pixel"] blockquote,
  .ds-scope[data-style-id="pixel"] blockquote {
    background: #161824 !important;
    border: 3px solid #22c55e !important;
    border-left: 8px solid #22c55e !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.1),
      inset -2px -2px 0px rgba(0, 0, 0, 0.5),
      4px 4px 0px #000000 !important;
    padding: 1.5rem 2rem !important;
    margin: 2.25rem 0 !important;
    font-family: 'Silkscreen', 'Press Start 2P', monospace !important;
    font-size: 0.9375rem !important;
    font-weight: 700 !important;
    line-height: 1.8 !important;
    color: #f1f5f9 !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="pixel-art"] blockquote::before,
  .pixel-art-styled-container blockquote::before,
  .style-pixel-art blockquote::before,
  [data-style="pixel-art"] blockquote::before,
  .ds-scope[data-style-id="pixel-art"] blockquote::before,
  .style-pixel blockquote::before,
  [data-style="pixel"] blockquote::before,
  .ds-scope[data-style-id="pixel"] blockquote::before {
    content: "❝" !important;
    color: #22c55e !important;
    font-size: 1.5rem !important;
    margin-right: 0.5rem !important;
  }

  /* 6. Multi-Column Grids (Portfolio, Metrics, Pricing) */
  .lab-styled-preview[data-style="pixel-art"] section:has(> article:nth-of-type(2)),
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(2)),
  .pixel-art-styled-container section:has(> article:nth-of-type(2)),
  .style-pixel-art section:has(> article:nth-of-type(2)),
  [data-style="pixel-art"] section:has(> article:nth-of-type(2)),
  .ds-scope[data-style-id="pixel-art"] section:has(> article:nth-of-type(2)),
  .style-pixel section:has(> article:nth-of-type(2)),
  [data-style="pixel"] section:has(> article:nth-of-type(2)),
  .ds-scope[data-style-id="pixel"] section:has(> article:nth-of-type(2)),
  .pixel-art-styled-container div:has(> article:nth-of-type(2)),
  .style-pixel-art div:has(> article:nth-of-type(2)),
  [data-style="pixel-art"] div:has(> article:nth-of-type(2)),
  .ds-scope[data-style-id="pixel-art"] div:has(> article:nth-of-type(2)),
  .style-pixel div:has(> article:nth-of-type(2)),
  [data-style="pixel"] div:has(> article:nth-of-type(2)),
  .ds-scope[data-style-id="pixel"] div:has(> article:nth-of-type(2)) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
    align-items: stretch !important;
    margin: 2.5rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] section:has(> article:nth-of-type(2)) > h2,
  .lab-styled-preview[data-style="pixel-art"] section:has(> article:nth-of-type(2)) > header,
  .lab-styled-preview[data-style="pixel-art"] section:has(> article:nth-of-type(2)) > footer,
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(2)) > h2,
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(2)) > header,
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(2)) > footer,
  .pixel-art-styled-container section:has(> article:nth-of-type(2)) > h2,
  .style-pixel-art section:has(> article:nth-of-type(2)) > h2,
  [data-style="pixel-art"] section:has(> article:nth-of-type(2)) > h2,
  .ds-scope[data-style-id="pixel-art"] section:has(> article:nth-of-type(2)) > h2,
  .style-pixel section:has(> article:nth-of-type(2)) > h2,
  [data-style="pixel"] section:has(> article:nth-of-type(2)) > h2,
  .ds-scope[data-style-id="pixel"] section:has(> article:nth-of-type(2)) > h2,
  .pixel-art-styled-container section:has(> article:nth-of-type(2)) > header,
  .style-pixel-art section:has(> article:nth-of-type(2)) > header,
  [data-style="pixel-art"] section:has(> article:nth-of-type(2)) > header,
  .ds-scope[data-style-id="pixel-art"] section:has(> article:nth-of-type(2)) > header,
  .style-pixel section:has(> article:nth-of-type(2)) > header,
  [data-style="pixel"] section:has(> article:nth-of-type(2)) > header,
  .ds-scope[data-style-id="pixel"] section:has(> article:nth-of-type(2)) > header,
  .pixel-art-styled-container section:has(> article:nth-of-type(2)) > footer,
  .style-pixel-art section:has(> article:nth-of-type(2)) > footer,
  [data-style="pixel-art"] section:has(> article:nth-of-type(2)) > footer,
  .ds-scope[data-style-id="pixel-art"] section:has(> article:nth-of-type(2)) > footer,
  .style-pixel section:has(> article:nth-of-type(2)) > footer,
  [data-style="pixel"] section:has(> article:nth-of-type(2)) > footer,
  .ds-scope[data-style-id="pixel"] section:has(> article:nth-of-type(2)) > footer,
  .pixel-art-styled-container div:has(> article:nth-of-type(2)) > h2,
  .style-pixel-art div:has(> article:nth-of-type(2)) > h2,
  [data-style="pixel-art"] div:has(> article:nth-of-type(2)) > h2,
  .ds-scope[data-style-id="pixel-art"] div:has(> article:nth-of-type(2)) > h2,
  .style-pixel div:has(> article:nth-of-type(2)) > h2,
  [data-style="pixel"] div:has(> article:nth-of-type(2)) > h2,
  .ds-scope[data-style-id="pixel"] div:has(> article:nth-of-type(2)) > h2,
  .pixel-art-styled-container div:has(> article:nth-of-type(2)) > header,
  .style-pixel-art div:has(> article:nth-of-type(2)) > header,
  [data-style="pixel-art"] div:has(> article:nth-of-type(2)) > header,
  .ds-scope[data-style-id="pixel-art"] div:has(> article:nth-of-type(2)) > header,
  .style-pixel div:has(> article:nth-of-type(2)) > header,
  [data-style="pixel"] div:has(> article:nth-of-type(2)) > header,
  .ds-scope[data-style-id="pixel"] div:has(> article:nth-of-type(2)) > header,
  .pixel-art-styled-container div:has(> article:nth-of-type(2)) > footer,
  .style-pixel-art div:has(> article:nth-of-type(2)) > footer,
  [data-style="pixel-art"] div:has(> article:nth-of-type(2)) > footer,
  .ds-scope[data-style-id="pixel-art"] div:has(> article:nth-of-type(2)) > footer,
  .style-pixel div:has(> article:nth-of-type(2)) > footer,
  [data-style="pixel"] div:has(> article:nth-of-type(2)) > footer,
  .ds-scope[data-style-id="pixel"] div:has(> article:nth-of-type(2)) > footer {
    grid-column: 1 / -1 !important;
    width: 100% !important;
  }

  /* 7. Pricing: Selectable Game Character / Tier Classes */
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(2) button),
  .pixel-art-styled-container div:has(> article:nth-of-type(2) button),
  .style-pixel-art div:has(> article:nth-of-type(2) button),
  [data-style="pixel-art"] div:has(> article:nth-of-type(2) button),
  .ds-scope[data-style-id="pixel-art"] div:has(> article:nth-of-type(2) button),
  .style-pixel div:has(> article:nth-of-type(2) button),
  [data-style="pixel"] div:has(> article:nth-of-type(2) button),
  .ds-scope[data-style-id="pixel"] div:has(> article:nth-of-type(2) button) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
    align-items: stretch !important;
    margin: 2.5rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(2) button) > article,
  .pixel-art-styled-container div:has(> article:nth-of-type(2) button) > article,
  .style-pixel-art div:has(> article:nth-of-type(2) button) > article,
  [data-style="pixel-art"] div:has(> article:nth-of-type(2) button) > article,
  .ds-scope[data-style-id="pixel-art"] div:has(> article:nth-of-type(2) button) > article,
  .style-pixel div:has(> article:nth-of-type(2) button) > article,
  [data-style="pixel"] div:has(> article:nth-of-type(2) button) > article,
  .ds-scope[data-style-id="pixel"] div:has(> article:nth-of-type(2) button) > article {
    background: #1a1d2e !important;
    border: 3px solid #000000 !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.12),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      4px 4px 0px #000000 !important;
    padding: 2.25rem !important;
  }

  /* Featured Tier (Middle Tier in 3-Tier Pricing) */
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2),
  .pixel-art-styled-container div:has(> article:nth-of-type(3) button) > article:nth-of-type(2),
  .style-pixel-art div:has(> article:nth-of-type(3) button) > article:nth-of-type(2),
  [data-style="pixel-art"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2),
  .ds-scope[data-style-id="pixel-art"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2),
  .style-pixel div:has(> article:nth-of-type(3) button) > article:nth-of-type(2),
  [data-style="pixel"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2),
  .ds-scope[data-style-id="pixel"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2) {
    border: 3px solid #22c55e !important;
    background: #1e2438 !important;
    box-shadow: 
      inset 2px 2px 0px rgba(34, 197, 94, 0.3),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      6px 6px 0px #000000 !important;
    position: relative !important;
    z-index: 2 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before,
  .pixel-art-styled-container div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before,
  .style-pixel-art div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before,
  [data-style="pixel-art"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before,
  .ds-scope[data-style-id="pixel-art"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before,
  .style-pixel div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before,
  [data-style="pixel"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before,
  .ds-scope[data-style-id="pixel"] div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before {
    content: "★ RECOMMENDED CLASS ★" !important;
    position: absolute !important;
    top: -14px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    background: #22c55e !important;
    color: #000000 !important;
    font-family: 'Press Start 2P', monospace !important;
    font-size: 0.5625rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.06em !important;
    padding: 0.35rem 0.75rem !important;
    border: 2px solid #000000 !important;
    box-shadow: 2px 2px 0px #000000 !important;
    white-space: nowrap !important;
  }

  /* Price Currency Treatment */
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(2) button) strong,
  .pixel-art-styled-container div:has(> article:nth-of-type(2) button) strong,
  .style-pixel-art div:has(> article:nth-of-type(2) button) strong,
  [data-style="pixel-art"] div:has(> article:nth-of-type(2) button) strong,
  .ds-scope[data-style-id="pixel-art"] div:has(> article:nth-of-type(2) button) strong,
  .style-pixel div:has(> article:nth-of-type(2) button) strong,
  [data-style="pixel"] div:has(> article:nth-of-type(2) button) strong,
  .ds-scope[data-style-id="pixel"] div:has(> article:nth-of-type(2) button) strong {
    display: block !important;
    font-family: 'Press Start 2P', monospace !important;
    font-size: 1.35rem !important;
    color: #facc15 !important; /* Gold Coins */
    margin: 1.25rem 0 !important;
    text-shadow: 2px 2px 0px #000000 !important;
  }

  /* 8. E-Commerce: Item Shop / Equipment Inventory Screen */
  .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section),
  .pixel-art-styled-container section:has(> article):has(> section),
  .style-pixel-art section:has(> article):has(> section),
  [data-style="pixel-art"] section:has(> article):has(> section),
  .ds-scope[data-style-id="pixel-art"] section:has(> article):has(> section),
  .style-pixel section:has(> article):has(> section),
  [data-style="pixel"] section:has(> article):has(> section),
  .ds-scope[data-style-id="pixel"] section:has(> article):has(> section) {
    display: grid !important;
    grid-template-columns: repeat(12, 1fr) !important;
    gap: 2rem !important;
    align-items: start !important;
    margin: 2rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section) > header,
  .pixel-art-styled-container section:has(> article):has(> section) > header,
  .style-pixel-art section:has(> article):has(> section) > header,
  [data-style="pixel-art"] section:has(> article):has(> section) > header,
  .ds-scope[data-style-id="pixel-art"] section:has(> article):has(> section) > header,
  .style-pixel section:has(> article):has(> section) > header,
  [data-style="pixel"] section:has(> article):has(> section) > header,
  .ds-scope[data-style-id="pixel"] section:has(> article):has(> section) > header {
    grid-column: 1 / -1 !important;
    width: 100% !important;
  }

  .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section) > article,
  .pixel-art-styled-container section:has(> article):has(> section) > article,
  .style-pixel-art section:has(> article):has(> section) > article,
  [data-style="pixel-art"] section:has(> article):has(> section) > article,
  .ds-scope[data-style-id="pixel-art"] section:has(> article):has(> section) > article,
  .style-pixel section:has(> article):has(> section) > article,
  [data-style="pixel"] section:has(> article):has(> section) > article,
  .ds-scope[data-style-id="pixel"] section:has(> article):has(> section) > article {
    grid-column: span 7 !important;
    background: #1a1d2e !important;
    border: 3px solid #000000 !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.12),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      5px 5px 0px #000000 !important;
    padding: 2.25rem !important;
  }

  .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section) > section,
  .pixel-art-styled-container section:has(> article):has(> section) > section,
  .style-pixel-art section:has(> article):has(> section) > section,
  [data-style="pixel-art"] section:has(> article):has(> section) > section,
  .ds-scope[data-style-id="pixel-art"] section:has(> article):has(> section) > section,
  .style-pixel section:has(> article):has(> section) > section,
  [data-style="pixel"] section:has(> article):has(> section) > section,
  .ds-scope[data-style-id="pixel"] section:has(> article):has(> section) > section {
    grid-column: span 5 !important;
    background: #151724 !important;
    border: 3px solid #374151 !important;
    box-shadow: 4px 4px 0px #000000 !important;
    padding: 2rem !important;
  }

  /* Item Shop Price Tag */
  .lab-styled-preview[data-style="pixel-art"] article > strong,
  .pixel-art-styled-container article > strong,
  .style-pixel-art article > strong,
  [data-style="pixel-art"] article > strong,
  .ds-scope[data-style-id="pixel-art"] article > strong,
  .style-pixel article > strong,
  [data-style="pixel"] article > strong,
  .ds-scope[data-style-id="pixel"] article > strong {
    font-family: 'Press Start 2P', monospace !important;
    font-size: 1.15rem !important;
    color: #facc15 !important; /* Gold */
    display: inline-block !important;
    margin: 0.75rem 0 1.25rem 0 !important;
    text-shadow: 2px 2px 0px #000000 !important;
  }

  /* Inventory Equipment Size Slots */
  .lab-styled-preview[data-style="pixel-art"] article div:has(> button),
  .pixel-art-styled-container article div:has(> button),
  .style-pixel-art article div:has(> button),
  [data-style="pixel-art"] article div:has(> button),
  .ds-scope[data-style-id="pixel-art"] article div:has(> button),
  .style-pixel article div:has(> button),
  [data-style="pixel"] article div:has(> button),
  .ds-scope[data-style-id="pixel"] article div:has(> button) {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 0.65rem !important;
    align-items: center !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] article div:has(> button) p,
  .pixel-art-styled-container article div:has(> button) p,
  .style-pixel-art article div:has(> button) p,
  [data-style="pixel-art"] article div:has(> button) p,
  .ds-scope[data-style-id="pixel-art"] article div:has(> button) p,
  .style-pixel article div:has(> button) p,
  [data-style="pixel"] article div:has(> button) p,
  .ds-scope[data-style-id="pixel"] article div:has(> button) p {
    font-family: 'Press Start 2P', monospace !important;
    font-size: 0.625rem !important;
    color: #94a3b8 !important;
    margin: 0 0.5rem 0 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] article div:has(> button) button,
  .pixel-art-styled-container article div:has(> button) button,
  .style-pixel-art article div:has(> button) button,
  [data-style="pixel-art"] article div:has(> button) button,
  .ds-scope[data-style-id="pixel-art"] article div:has(> button) button,
  .style-pixel article div:has(> button) button,
  [data-style="pixel"] article div:has(> button) button,
  .ds-scope[data-style-id="pixel"] article div:has(> button) button {
    padding: 0.5rem 0.85rem !important;
    font-size: 0.625rem !important;
    background: #1f293d !important;
    color: #ffffff !important;
    border: 2px solid #000000 !important;
    box-shadow: 2px 2px 0px #000000 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] article div:has(> button) button::before,
  .pixel-art-styled-container article div:has(> button) button::before,
  .style-pixel-art article div:has(> button) button::before,
  [data-style="pixel-art"] article div:has(> button) button::before,
  .ds-scope[data-style-id="pixel-art"] article div:has(> button) button::before,
  .style-pixel article div:has(> button) button::before,
  [data-style="pixel"] article div:has(> button) button::before,
  .ds-scope[data-style-id="pixel"] article div:has(> button) button::before {
    display: none !important;
  }

  .lab-styled-preview[data-style="pixel-art"] article div:has(> button) button:hover,
  .pixel-art-styled-container article div:has(> button) button:hover,
  .style-pixel-art article div:has(> button) button:hover,
  [data-style="pixel-art"] article div:has(> button) button:hover,
  .ds-scope[data-style-id="pixel-art"] article div:has(> button) button:hover,
  .style-pixel article div:has(> button) button:hover,
  [data-style="pixel"] article div:has(> button) button:hover,
  .ds-scope[data-style-id="pixel"] article div:has(> button) button:hover {
    background: #22c55e !important;
    color: #000000 !important;
  }

  /* 9. Dashboard / Retro Telemetry HUD */
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:has(strong)),
  .pixel-art-styled-container div:has(> article:has(strong)),
  .style-pixel-art div:has(> article:has(strong)),
  [data-style="pixel-art"] div:has(> article:has(strong)),
  .ds-scope[data-style-id="pixel-art"] div:has(> article:has(strong)),
  .style-pixel div:has(> article:has(strong)),
  [data-style="pixel"] div:has(> article:has(strong)),
  .ds-scope[data-style-id="pixel"] div:has(> article:has(strong)) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
    gap: 1.5rem !important;
    margin: 2.25rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] div:has(> article:has(strong)) > article,
  .pixel-art-styled-container div:has(> article:has(strong)) > article,
  .style-pixel-art div:has(> article:has(strong)) > article,
  [data-style="pixel-art"] div:has(> article:has(strong)) > article,
  .ds-scope[data-style-id="pixel-art"] div:has(> article:has(strong)) > article,
  .style-pixel div:has(> article:has(strong)) > article,
  [data-style="pixel"] div:has(> article:has(strong)) > article,
  .ds-scope[data-style-id="pixel"] div:has(> article:has(strong)) > article {
    background: #161826 !important;
    border: 3px solid #000000 !important;
    border-top: 4px solid #22c55e !important; /* Green Status Strip */
    box-shadow: 
      inset 1px 1px 0px rgba(255, 255, 255, 0.1),
      inset -1px -1px 0px rgba(0, 0, 0, 0.5),
      4px 4px 0px #000000 !important;
    padding: 1.75rem !important;
  }

  .lab-styled-preview[data-style="pixel-art"] div:has(> article:has(strong)) > article strong,
  .pixel-art-styled-container div:has(> article:has(strong)) > article strong,
  .style-pixel-art div:has(> article:has(strong)) > article strong,
  [data-style="pixel-art"] div:has(> article:has(strong)) > article strong,
  .ds-scope[data-style-id="pixel-art"] div:has(> article:has(strong)) > article strong,
  .style-pixel div:has(> article:has(strong)) > article strong,
  [data-style="pixel"] div:has(> article:has(strong)) > article strong,
  .ds-scope[data-style-id="pixel"] div:has(> article:has(strong)) > article strong {
    display: block !important;
    font-family: 'Press Start 2P', monospace !important;
    font-size: 1.35rem !important;
    color: #22c55e !important;
    margin: 0.85rem 0 !important;
    text-shadow: 2px 2px 0px #000000 !important;
  }

  /* 10. Tables: Retro Arcade High-Score / Telemetry Matrix */
  .lab-styled-preview[data-style="pixel-art"] table,
  .pixel-art-styled-container table,
  .style-pixel-art table,
  [data-style="pixel-art"] table,
  .ds-scope[data-style-id="pixel-art"] table,
  .style-pixel table,
  [data-style="pixel"] table,
  .ds-scope[data-style-id="pixel"] table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    border: 3px solid #000000 !important;
    background: #161826 !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.1),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      4px 4px 0px #000000 !important;
    margin: 2rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] th,
  .pixel-art-styled-container th,
  .style-pixel-art th,
  [data-style="pixel-art"] th,
  .ds-scope[data-style-id="pixel-art"] th,
  .style-pixel th,
  [data-style="pixel"] th,
  .ds-scope[data-style-id="pixel"] th {
    background: #1e2238 !important;
    color: #facc15 !important; /* High score yellow */
    font-family: 'Press Start 2P', monospace !important;
    font-size: 0.625rem !important;
    letter-spacing: 0.06em !important;
    text-transform: uppercase !important;
    padding: 1rem 1.25rem !important;
    border-bottom: 3px solid #000000 !important;
    border-right: 1px solid #2a314d !important;
    text-align: left !important;
  }

  .lab-styled-preview[data-style="pixel-art"] th:last-child,
  .pixel-art-styled-container th:last-child,
  .style-pixel-art th:last-child,
  [data-style="pixel-art"] th:last-child,
  .ds-scope[data-style-id="pixel-art"] th:last-child,
  .style-pixel th:last-child,
  [data-style="pixel"] th:last-child,
  .ds-scope[data-style-id="pixel"] th:last-child {
    border-right: none !important;
  }

  .lab-styled-preview[data-style="pixel-art"] td,
  .pixel-art-styled-container td,
  .style-pixel-art td,
  [data-style="pixel-art"] td,
  .ds-scope[data-style-id="pixel-art"] td,
  .style-pixel td,
  [data-style="pixel"] td,
  .ds-scope[data-style-id="pixel"] td {
    padding: 0.85rem 1.25rem !important;
    border-bottom: 1px solid #242942 !important;
    border-right: 1px solid #242942 !important;
    color: #cbd5e1 !important;
    font-size: 0.875rem !important;
    font-family: 'Silkscreen', 'Inter', monospace !important;
  }

  .lab-styled-preview[data-style="pixel-art"] td:last-child,
  .pixel-art-styled-container td:last-child,
  .style-pixel-art td:last-child,
  [data-style="pixel-art"] td:last-child,
  .ds-scope[data-style-id="pixel-art"] td:last-child,
  .style-pixel td:last-child,
  [data-style="pixel"] td:last-child,
  .ds-scope[data-style-id="pixel"] td:last-child {
    border-right: none !important;
  }

  .lab-styled-preview[data-style="pixel-art"] tr:last-child td,
  .pixel-art-styled-container tr:last-child td,
  .style-pixel-art tr:last-child td,
  [data-style="pixel-art"] tr:last-child td,
  .ds-scope[data-style-id="pixel-art"] tr:last-child td,
  .style-pixel tr:last-child td,
  [data-style="pixel"] tr:last-child td,
  .ds-scope[data-style-id="pixel"] tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="pixel-art"] tr:hover td,
  .pixel-art-styled-container tr:hover td,
  .style-pixel-art tr:hover td,
  [data-style="pixel-art"] tr:hover td,
  .ds-scope[data-style-id="pixel-art"] tr:hover td,
  .style-pixel tr:hover td,
  [data-style="pixel"] tr:hover td,
  .ds-scope[data-style-id="pixel"] tr:hover td {
    background-color: #1f253d !important;
    color: #22c55e !important;
  }

  /* 11. Forms: Retro Transmission Terminal */
  .lab-styled-preview[data-style="pixel-art"] form,
  .pixel-art-styled-container form,
  .style-pixel-art form,
  [data-style="pixel-art"] form,
  .ds-scope[data-style-id="pixel-art"] form,
  .style-pixel form,
  [data-style="pixel"] form,
  .ds-scope[data-style-id="pixel"] form {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.5rem !important;
    background: #1a1d2e !important;
    border: 3px solid #000000 !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.12),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      5px 5px 0px #000000 !important;
    padding: 2.5rem !important;
    max-width: 680px !important;
  }

  .lab-styled-preview[data-style="pixel-art"] label,
  .pixel-art-styled-container label,
  .style-pixel-art label,
  [data-style="pixel-art"] label,
  .ds-scope[data-style-id="pixel-art"] label,
  .style-pixel label,
  [data-style="pixel"] label,
  .ds-scope[data-style-id="pixel"] label {
    display: block !important;
    font-family: 'Press Start 2P', monospace !important;
    font-size: 0.625rem !important;
    letter-spacing: 0.05em !important;
    text-transform: uppercase !important;
    color: #38bdf8 !important; /* Mana Blue */
    margin-bottom: 0.65rem !important;
  }

  .lab-styled-preview[data-style="pixel-art"] input,
  .lab-styled-preview[data-style="pixel-art"] select,
  .lab-styled-preview[data-style="pixel-art"] textarea,
  .pixel-art-styled-container input,
  .style-pixel-art input,
  [data-style="pixel-art"] input,
  .ds-scope[data-style-id="pixel-art"] input,
  .style-pixel input,
  [data-style="pixel"] input,
  .ds-scope[data-style-id="pixel"] input,
  .pixel-art-styled-container select,
  .style-pixel-art select,
  [data-style="pixel-art"] select,
  .ds-scope[data-style-id="pixel-art"] select,
  .style-pixel select,
  [data-style="pixel"] select,
  .ds-scope[data-style-id="pixel"] select,
  .pixel-art-styled-container textarea,
  .style-pixel-art textarea,
  [data-style="pixel-art"] textarea,
  .ds-scope[data-style-id="pixel-art"] textarea,
  .style-pixel textarea,
  [data-style="pixel"] textarea,
  .ds-scope[data-style-id="pixel"] textarea {
    background: #12131c !important;
    border: 2px solid #374151 !important;
    padding: 0.85rem 1.15rem !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 0.9375rem !important;
    color: #ffffff !important;
    width: 100% !important;
    box-sizing: border-box !important;
    outline: none !important;
    box-shadow: inset 2px 2px 0px rgba(0, 0, 0, 0.6) !important;
  }

  .lab-styled-preview[data-style="pixel-art"] input:focus,
  .lab-styled-preview[data-style="pixel-art"] select:focus,
  .lab-styled-preview[data-style="pixel-art"] textarea:focus,
  .pixel-art-styled-container input:focus,
  .style-pixel-art input:focus,
  [data-style="pixel-art"] input:focus,
  .ds-scope[data-style-id="pixel-art"] input:focus,
  .style-pixel input:focus,
  [data-style="pixel"] input:focus,
  .ds-scope[data-style-id="pixel"] input:focus,
  .pixel-art-styled-container select:focus,
  .style-pixel-art select:focus,
  [data-style="pixel-art"] select:focus,
  .ds-scope[data-style-id="pixel-art"] select:focus,
  .style-pixel select:focus,
  [data-style="pixel"] select:focus,
  .ds-scope[data-style-id="pixel"] select:focus,
  .pixel-art-styled-container textarea:focus,
  .style-pixel-art textarea:focus,
  [data-style="pixel-art"] textarea:focus,
  .ds-scope[data-style-id="pixel-art"] textarea:focus,
  .style-pixel textarea:focus,
  [data-style="pixel"] textarea:focus,
  .ds-scope[data-style-id="pixel"] textarea:focus {
    border-color: #22c55e !important;
    box-shadow: 
      inset 2px 2px 0px rgba(0, 0, 0, 0.6),
      0 0 0 2px #22c55e !important;
  }

  /* 12. Lists & Specifications */
  .lab-styled-preview[data-style="pixel-art"] ul,
  .pixel-art-styled-container ul,
  .style-pixel-art ul,
  [data-style="pixel-art"] ul,
  .ds-scope[data-style-id="pixel-art"] ul,
  .style-pixel ul,
  [data-style="pixel"] ul,
  .ds-scope[data-style-id="pixel"] ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] li,
  .pixel-art-styled-container li,
  .style-pixel-art li,
  [data-style="pixel-art"] li,
  .ds-scope[data-style-id="pixel-art"] li,
  .style-pixel li,
  [data-style="pixel"] li,
  .ds-scope[data-style-id="pixel"] li {
    padding: 0.65rem 0 !important;
    border-bottom: 1px dashed #2d3748 !important;
    color: #cbd5e1 !important;
    font-size: 0.9375rem !important;
    display: flex !important;
    align-items: baseline !important;
    gap: 0.65rem !important;
  }

  .lab-styled-preview[data-style="pixel-art"] li::before,
  .pixel-art-styled-container li::before,
  .style-pixel-art li::before,
  [data-style="pixel-art"] li::before,
  .ds-scope[data-style-id="pixel-art"] li::before,
  .style-pixel li::before,
  [data-style="pixel"] li::before,
  .ds-scope[data-style-id="pixel"] li::before {
    content: "◆" !important;
    color: #22c55e !important;
    font-size: 0.75rem !important;
  }

  /* 13. Restaurant Menu List Styling */
  .lab-styled-preview[data-style="pixel-art"] section:has(ul:has(strong)) li,
  .pixel-art-styled-container section:has(ul:has(strong)) li,
  .style-pixel-art section:has(ul:has(strong)) li,
  [data-style="pixel-art"] section:has(ul:has(strong)) li,
  .ds-scope[data-style-id="pixel-art"] section:has(ul:has(strong)) li,
  .style-pixel section:has(ul:has(strong)) li,
  [data-style="pixel"] section:has(ul:has(strong)) li,
  .ds-scope[data-style-id="pixel"] section:has(ul:has(strong)) li {
    display: block !important;
    padding: 1rem 0 !important;
    border-bottom: 2px dashed #2d3748 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] section:has(ul:has(strong)) li strong,
  .pixel-art-styled-container section:has(ul:has(strong)) li strong,
  .style-pixel-art section:has(ul:has(strong)) li strong,
  [data-style="pixel-art"] section:has(ul:has(strong)) li strong,
  .ds-scope[data-style-id="pixel-art"] section:has(ul:has(strong)) li strong,
  .style-pixel section:has(ul:has(strong)) li strong,
  [data-style="pixel"] section:has(ul:has(strong)) li strong,
  .ds-scope[data-style-id="pixel"] section:has(ul:has(strong)) li strong {
    font-family: 'Silkscreen', 'Press Start 2P', monospace !important;
    font-size: 0.9375rem !important;
    color: #facc15 !important;
    display: inline-block !important;
    margin-right: 0.5rem !important;
  }

  .lab-styled-preview[data-style="pixel-art"] section:has(ul:has(strong)) li p,
  .pixel-art-styled-container section:has(ul:has(strong)) li p,
  .style-pixel-art section:has(ul:has(strong)) li p,
  [data-style="pixel-art"] section:has(ul:has(strong)) li p,
  .ds-scope[data-style-id="pixel-art"] section:has(ul:has(strong)) li p,
  .style-pixel section:has(ul:has(strong)) li p,
  [data-style="pixel"] section:has(ul:has(strong)) li p,
  .ds-scope[data-style-id="pixel"] section:has(ul:has(strong)) li p {
    margin-top: 0.35rem !important;
    margin-bottom: 0 !important;
    font-size: 0.875rem !important;
    color: #94a3b8 !important;
  }

  /* 14. Footer: Game Over / Credits Screen */
  .lab-styled-preview[data-style="pixel-art"] footer,
  .pixel-art-styled-container footer,
  .style-pixel-art footer,
  [data-style="pixel-art"] footer,
  .ds-scope[data-style-id="pixel-art"] footer,
  .style-pixel footer,
  [data-style="pixel"] footer,
  .ds-scope[data-style-id="pixel"] footer {
    border-top: 3px dashed #374151 !important;
    padding-top: 2.25rem !important;
    margin-top: 4rem !important;
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 1.5rem !important;
    color: #64748b !important;
    font-family: 'Silkscreen', 'Press Start 2P', monospace !important;
    font-size: 0.6875rem !important;
  }

  /* 15. Responsive Collapse: Intentional Stacking */
  @media (max-width: 900px) {
    .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section),
    .pixel-art-styled-container section:has(> article):has(> section),
    .style-pixel-art section:has(> article):has(> section),
    [data-style="pixel-art"] section:has(> article):has(> section),
    .ds-scope[data-style-id="pixel-art"] section:has(> article):has(> section),
    .style-pixel section:has(> article):has(> section),
    [data-style="pixel"] section:has(> article):has(> section),
    .ds-scope[data-style-id="pixel"] section:has(> article):has(> section) {
      grid-template-columns: 1fr !important;
    }

    .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section) > article,
    .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section) > section,
    .pixel-art-styled-container section:has(> article):has(> section) > article,
    .style-pixel-art section:has(> article):has(> section) > article,
    [data-style="pixel-art"] section:has(> article):has(> section) > article,
    .ds-scope[data-style-id="pixel-art"] section:has(> article):has(> section) > article,
    .style-pixel section:has(> article):has(> section) > article,
    [data-style="pixel"] section:has(> article):has(> section) > article,
    .ds-scope[data-style-id="pixel"] section:has(> article):has(> section) > article,
    .pixel-art-styled-container section:has(> article):has(> section) > section,
    .style-pixel-art section:has(> article):has(> section) > section,
    [data-style="pixel-art"] section:has(> article):has(> section) > section,
    .ds-scope[data-style-id="pixel-art"] section:has(> article):has(> section) > section,
    .style-pixel section:has(> article):has(> section) > section,
    [data-style="pixel"] section:has(> article):has(> section) > section,
    .ds-scope[data-style-id="pixel"] section:has(> article):has(> section) > section {
      grid-column: span 1 !important;
    }
  }

  @media (max-width: 640px) {
    .lab-styled-preview[data-style="pixel-art"],
    .pixel-art-styled-container,
    .style-pixel-art,
    [data-style="pixel-art"],
    .ds-scope[data-style-id="pixel-art"],
    .style-pixel,
    [data-style="pixel"],
    .ds-scope[data-style-id="pixel"] {
      padding: 1.5rem !important;
    }

    .lab-styled-preview[data-style="pixel-art"] h1,
    .pixel-art-styled-container h1,
    .style-pixel-art h1,
    [data-style="pixel-art"] h1,
    .ds-scope[data-style-id="pixel-art"] h1,
    .style-pixel h1,
    [data-style="pixel"] h1,
    .ds-scope[data-style-id="pixel"] h1 {
      font-size: 1.15rem !important;
      line-height: 1.6 !important;
    }

    .lab-styled-preview[data-style="pixel-art"] nav,
    .pixel-art-styled-container nav,
    .style-pixel-art nav,
    [data-style="pixel-art"] nav,
    .ds-scope[data-style-id="pixel-art"] nav,
    .style-pixel nav,
    [data-style="pixel"] nav,
    .ds-scope[data-style-id="pixel"] nav {
      gap: 0.75rem !important;
      padding: 0.85rem !important;
    }

    .lab-styled-preview[data-style="pixel-art"] button,
    .pixel-art-styled-container button,
    .style-pixel-art button,
    [data-style="pixel-art"] button,
    .ds-scope[data-style-id="pixel-art"] button,
    .style-pixel button,
    [data-style="pixel"] button,
    .ds-scope[data-style-id="pixel"] button {
      width: 100% !important;
    }
  }
`;
