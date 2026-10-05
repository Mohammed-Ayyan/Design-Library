export const pixelArtSemanticCss = `
  /* ==========================================================================
     PIXEL ART — 8-Bit / 16-Bit Retro Game Interface Visual Language
     Strict Semantic CSS Mapping: Zero DOM Wrappers, 100% User HTML Preservation
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&family=VT323&display=swap');

  /* Container & Canvas: Deep 16-Bit Retro Console Void */
  .lab-styled-preview[data-style="pixel-art"],
  .pixel-art-styled-container {
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
  .pixel-art-styled-container::before {
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
  .pixel-art-styled-container > * {
    position: relative !important;
    z-index: 2 !important;
  }

  /* Global Square Aliased Geometry: Strict 0px Radii */
  .lab-styled-preview[data-style="pixel-art"] *,
  .pixel-art-styled-container * {
    border-radius: 0 !important;
    box-sizing: border-box !important;
  }

  /* 1. Navigation: 8-Bit Game Main Menu */
  .lab-styled-preview[data-style="pixel-art"] nav,
  .pixel-art-styled-container nav {
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
  .pixel-art-styled-container nav a {
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
  .pixel-art-styled-container nav a:hover {
    color: #22c55e !important;
    background: #12131c !important;
    border: 2px solid #22c55e !important;
    box-shadow: 2px 2px 0px #000000 !important;
    text-decoration: none !important;
    transform: translate(-1px, -1px) !important;
  }

  /* First Link: Title Screen Brand Anchor */
  .lab-styled-preview[data-style="pixel-art"] nav a:first-child,
  .pixel-art-styled-container nav a:first-child {
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
  .pixel-art-styled-container nav a:first-child::before {
    content: "👾" !important;
    font-size: 1rem !important;
    margin-right: 0.5rem !important;
  }

  /* 2. Typographic System: Bitmap Display + Readable Grotesk Body */
  .lab-styled-preview[data-style="pixel-art"] h1,
  .pixel-art-styled-container h1 {
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
  .pixel-art-styled-container h2 {
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
  .pixel-art-styled-container h2::before {
    content: "▶" !important;
    color: #facc15 !important;
    font-size: 0.85em !important;
  }

  .lab-styled-preview[data-style="pixel-art"] h3,
  .pixel-art-styled-container h3 {
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
  .pixel-art-styled-container section > p:first-child {
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
  .pixel-art-styled-container section > p:first-child::before {
    content: "★" !important;
    color: #000000 !important;
    font-size: 0.75rem !important;
  }

  /* Body Text: Clean High-Legibility Sans (Never Unreadable Monospace Soup) */
  .lab-styled-preview[data-style="pixel-art"] p,
  .pixel-art-styled-container p {
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
  .pixel-art-styled-container input[type="submit"] {
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
  .pixel-art-styled-container input[type="submit"]::before {
    content: "▶" !important;
    font-size: 0.65rem !important;
    color: #000000 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] button:hover,
  .lab-styled-preview[data-style="pixel-art"] input[type="submit"]:hover,
  .pixel-art-styled-container button:hover,
  .pixel-art-styled-container input[type="submit"]:hover {
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
  .pixel-art-styled-container input[type="submit"]:active {
    transform: translate(3px, 3px) !important;
    box-shadow: 
      inset -2px -2px 0px rgba(255, 255, 255, 0.3),
      inset 2px 2px 0px rgba(0, 0, 0, 0.5),
      1px 1px 0px #000000 !important;
  }

  /* Secondary Button: Steel Slate Palette */
  .lab-styled-preview[data-style="pixel-art"] button + button,
  .pixel-art-styled-container button + button {
    background: #334155 !important;
    color: #ffffff !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.2),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      4px 4px 0px #000000 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] button + button::before,
  .pixel-art-styled-container button + button::before {
    color: #facc15 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] button + button:hover,
  .pixel-art-styled-container button + button:hover {
    background: #475569 !important;
    color: #ffffff !important;
    box-shadow: 
      inset 2px 2px 0px rgba(255, 255, 255, 0.3),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      5px 5px 0px #000000 !important;
  }

  /* 4. Panels & Dialog Boxes: Classic 8-Bit Beveled Windows */
  .lab-styled-preview[data-style="pixel-art"] article,
  .pixel-art-styled-container article {
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
  .pixel-art-styled-container article:hover {
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
  .pixel-art-styled-container .dispatch {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] main > article:hover,
  .lab-styled-preview[data-style="pixel-art"] .dispatch:hover,
  .pixel-art-styled-container main > article:hover,
  .pixel-art-styled-container .dispatch:hover {
    transform: none !important;
    box-shadow: none !important;
  }

  /* 5. Pullquotes: Game Dialog / Lore Quote Box */
  .lab-styled-preview[data-style="pixel-art"] blockquote,
  .pixel-art-styled-container blockquote {
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
  .pixel-art-styled-container blockquote::before {
    content: "❝" !important;
    color: #22c55e !important;
    font-size: 1.5rem !important;
    margin-right: 0.5rem !important;
  }

  /* 6. Multi-Column Grids (Portfolio, Metrics, Pricing) */
  .lab-styled-preview[data-style="pixel-art"] section:has(> article:nth-of-type(2)),
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(2)),
  .pixel-art-styled-container section:has(> article:nth-of-type(2)),
  .pixel-art-styled-container div:has(> article:nth-of-type(2)) {
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
  .pixel-art-styled-container section:has(> article:nth-of-type(2)) > header,
  .pixel-art-styled-container section:has(> article:nth-of-type(2)) > footer,
  .pixel-art-styled-container div:has(> article:nth-of-type(2)) > h2,
  .pixel-art-styled-container div:has(> article:nth-of-type(2)) > header,
  .pixel-art-styled-container div:has(> article:nth-of-type(2)) > footer {
    grid-column: 1 / -1 !important;
    width: 100% !important;
  }

  /* 7. Pricing: Selectable Game Character / Tier Classes */
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(2) button),
  .pixel-art-styled-container div:has(> article:nth-of-type(2) button) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
    align-items: stretch !important;
    margin: 2.5rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] div:has(> article:nth-of-type(2) button) > article,
  .pixel-art-styled-container div:has(> article:nth-of-type(2) button) > article {
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
  .pixel-art-styled-container div:has(> article:nth-of-type(3) button) > article:nth-of-type(2) {
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
  .pixel-art-styled-container div:has(> article:nth-of-type(3) button) > article:nth-of-type(2)::before {
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
  .pixel-art-styled-container div:has(> article:nth-of-type(2) button) strong {
    display: block !important;
    font-family: 'Press Start 2P', monospace !important;
    font-size: 1.35rem !important;
    color: #facc15 !important; /* Gold Coins */
    margin: 1.25rem 0 !important;
    text-shadow: 2px 2px 0px #000000 !important;
  }

  /* 8. E-Commerce: Item Shop / Equipment Inventory Screen */
  .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section),
  .pixel-art-styled-container section:has(> article):has(> section) {
    display: grid !important;
    grid-template-columns: repeat(12, 1fr) !important;
    gap: 2rem !important;
    align-items: start !important;
    margin: 2rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section) > header,
  .pixel-art-styled-container section:has(> article):has(> section) > header {
    grid-column: 1 / -1 !important;
    width: 100% !important;
  }

  .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section) > article,
  .pixel-art-styled-container section:has(> article):has(> section) > article {
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
  .pixel-art-styled-container section:has(> article):has(> section) > section {
    grid-column: span 5 !important;
    background: #151724 !important;
    border: 3px solid #374151 !important;
    box-shadow: 4px 4px 0px #000000 !important;
    padding: 2rem !important;
  }

  /* Item Shop Price Tag */
  .lab-styled-preview[data-style="pixel-art"] article > strong,
  .pixel-art-styled-container article > strong {
    font-family: 'Press Start 2P', monospace !important;
    font-size: 1.15rem !important;
    color: #facc15 !important; /* Gold */
    display: inline-block !important;
    margin: 0.75rem 0 1.25rem 0 !important;
    text-shadow: 2px 2px 0px #000000 !important;
  }

  /* Inventory Equipment Size Slots */
  .lab-styled-preview[data-style="pixel-art"] article div:has(> button),
  .pixel-art-styled-container article div:has(> button) {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 0.65rem !important;
    align-items: center !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] article div:has(> button) p,
  .pixel-art-styled-container article div:has(> button) p {
    font-family: 'Press Start 2P', monospace !important;
    font-size: 0.625rem !important;
    color: #94a3b8 !important;
    margin: 0 0.5rem 0 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] article div:has(> button) button,
  .pixel-art-styled-container article div:has(> button) button {
    padding: 0.5rem 0.85rem !important;
    font-size: 0.625rem !important;
    background: #1f293d !important;
    color: #ffffff !important;
    border: 2px solid #000000 !important;
    box-shadow: 2px 2px 0px #000000 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] article div:has(> button) button::before,
  .pixel-art-styled-container article div:has(> button) button::before {
    display: none !important;
  }

  .lab-styled-preview[data-style="pixel-art"] article div:has(> button) button:hover,
  .pixel-art-styled-container article div:has(> button) button:hover {
    background: #22c55e !important;
    color: #000000 !important;
  }

  /* 9. Dashboard / Retro Telemetry HUD */
  .lab-styled-preview[data-style="pixel-art"] div:has(> article:has(strong)),
  .pixel-art-styled-container div:has(> article:has(strong)) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
    gap: 1.5rem !important;
    margin: 2.25rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] div:has(> article:has(strong)) > article,
  .pixel-art-styled-container div:has(> article:has(strong)) > article {
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
  .pixel-art-styled-container div:has(> article:has(strong)) > article strong {
    display: block !important;
    font-family: 'Press Start 2P', monospace !important;
    font-size: 1.35rem !important;
    color: #22c55e !important;
    margin: 0.85rem 0 !important;
    text-shadow: 2px 2px 0px #000000 !important;
  }

  /* 10. Tables: Retro Arcade High-Score / Telemetry Matrix */
  .lab-styled-preview[data-style="pixel-art"] table,
  .pixel-art-styled-container table {
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
  .pixel-art-styled-container th {
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
  .pixel-art-styled-container th:last-child {
    border-right: none !important;
  }

  .lab-styled-preview[data-style="pixel-art"] td,
  .pixel-art-styled-container td {
    padding: 0.85rem 1.25rem !important;
    border-bottom: 1px solid #242942 !important;
    border-right: 1px solid #242942 !important;
    color: #cbd5e1 !important;
    font-size: 0.875rem !important;
    font-family: 'Silkscreen', 'Inter', monospace !important;
  }

  .lab-styled-preview[data-style="pixel-art"] td:last-child,
  .pixel-art-styled-container td:last-child {
    border-right: none !important;
  }

  .lab-styled-preview[data-style="pixel-art"] tr:last-child td,
  .pixel-art-styled-container tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="pixel-art"] tr:hover td,
  .pixel-art-styled-container tr:hover td {
    background-color: #1f253d !important;
    color: #22c55e !important;
  }

  /* 11. Forms: Retro Transmission Terminal */
  .lab-styled-preview[data-style="pixel-art"] form,
  .pixel-art-styled-container form {
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
  .pixel-art-styled-container label {
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
  .pixel-art-styled-container select,
  .pixel-art-styled-container textarea {
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
  .pixel-art-styled-container select:focus,
  .pixel-art-styled-container textarea:focus {
    border-color: #22c55e !important;
    box-shadow: 
      inset 2px 2px 0px rgba(0, 0, 0, 0.6),
      0 0 0 2px #22c55e !important;
  }

  /* 12. Lists & Specifications */
  .lab-styled-preview[data-style="pixel-art"] ul,
  .pixel-art-styled-container ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] li,
  .pixel-art-styled-container li {
    padding: 0.65rem 0 !important;
    border-bottom: 1px dashed #2d3748 !important;
    color: #cbd5e1 !important;
    font-size: 0.9375rem !important;
    display: flex !important;
    align-items: baseline !important;
    gap: 0.65rem !important;
  }

  .lab-styled-preview[data-style="pixel-art"] li::before,
  .pixel-art-styled-container li::before {
    content: "◆" !important;
    color: #22c55e !important;
    font-size: 0.75rem !important;
  }

  /* 13. Restaurant Menu List Styling */
  .lab-styled-preview[data-style="pixel-art"] section:has(ul:has(strong)) li,
  .pixel-art-styled-container section:has(ul:has(strong)) li {
    display: block !important;
    padding: 1rem 0 !important;
    border-bottom: 2px dashed #2d3748 !important;
  }

  .lab-styled-preview[data-style="pixel-art"] section:has(ul:has(strong)) li strong,
  .pixel-art-styled-container section:has(ul:has(strong)) li strong {
    font-family: 'Silkscreen', 'Press Start 2P', monospace !important;
    font-size: 0.9375rem !important;
    color: #facc15 !important;
    display: inline-block !important;
    margin-right: 0.5rem !important;
  }

  .lab-styled-preview[data-style="pixel-art"] section:has(ul:has(strong)) li p,
  .pixel-art-styled-container section:has(ul:has(strong)) li p {
    margin-top: 0.35rem !important;
    margin-bottom: 0 !important;
    font-size: 0.875rem !important;
    color: #94a3b8 !important;
  }

  /* 14. Footer: Game Over / Credits Screen */
  .lab-styled-preview[data-style="pixel-art"] footer,
  .pixel-art-styled-container footer {
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
    .pixel-art-styled-container section:has(> article):has(> section) {
      grid-template-columns: 1fr !important;
    }

    .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section) > article,
    .lab-styled-preview[data-style="pixel-art"] section:has(> article):has(> section) > section,
    .pixel-art-styled-container section:has(> article):has(> section) > article,
    .pixel-art-styled-container section:has(> article):has(> section) > section {
      grid-column: span 1 !important;
    }
  }

  @media (max-width: 640px) {
    .lab-styled-preview[data-style="pixel-art"],
    .pixel-art-styled-container {
      padding: 1.5rem !important;
    }

    .lab-styled-preview[data-style="pixel-art"] h1,
    .pixel-art-styled-container h1 {
      font-size: 1.15rem !important;
      line-height: 1.6 !important;
    }

    .lab-styled-preview[data-style="pixel-art"] nav,
    .pixel-art-styled-container nav {
      gap: 0.75rem !important;
      padding: 0.85rem !important;
    }

    .lab-styled-preview[data-style="pixel-art"] button,
    .pixel-art-styled-container button {
      width: 100% !important;
    }
  }
`;
