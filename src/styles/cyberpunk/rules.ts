/**
 * Cyberpunk Visual Design Language — Semantic CSS Rules
 *
 * "An interface from a high-tech city operating after midnight."
 *
 * Core Characteristics:
 * - Futuristic, dystopian, industrial, information-dense, high-tech, underground, neon-lit.
 * - Deep obsidian void (#06080e), dark graphite (#0a0e17), industrial panels (#0f1523).
 * - Controlled environmental accents: electric cyan (#00f0ff), hot laser magenta (#ff0055),
 *   acid yellow (#ffe600), warning amber (#ffb700), and system green (#00ff66).
 * - NOT Synthwave (no 80s sunset grids), NOT Cybercore (no ASCII green monochrome),
 *   NOT Y2K (no bubbly gel optimism). Controlled, purposeful, high-tech dystopian world.
 * - Distinct typography: Orbitron display, Chakra Petch headings, Rajdhani technical body,
 *   and Share Tech Mono telemetry.
 * - Angular chamfered geometry (clip-path polygon cuts), thin luminous rules, and status beacons.
 * - Strict zero-wrapper semantic HTML mapping covering all 8 archetypes.
 */

export const cyberpunkSemanticCss = `
  /* ==========================================================================
     FONT IMPORT: Orbitron, Chakra Petch, Rajdhani, Share Tech Mono
     ========================================================================== */
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Orbitron:wght@500;600;700;800;900&family=Rajdhani:wght@500;600;700&family=Share+Tech+Mono&display=swap');

  /* ==========================================================================
     CSS VARIABLES & ROOT TOKENS
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"],
  .cyberpunk-styled-container {
    --cp-font-display: 'Orbitron', 'Chakra Petch', -apple-system, sans-serif;
    --cp-font-heading: 'Chakra Petch', 'Orbitron', -apple-system, sans-serif;
    --cp-font-body: 'Rajdhani', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --cp-font-mono: 'Share Tech Mono', 'JetBrains Mono', monospace;

    /* Base Surfaces & Voids */
    --cp-bg: #06080e;
    --cp-bg-surface: #0a0e17;
    --cp-bg-panel: #0f1523;
    --cp-bg-panel-elevated: #151e32;
    --cp-bg-overlay: rgba(6, 8, 14, 0.88);

    /* Text & Readability Hierarchy */
    --cp-text-primary: #e6f1f8;
    --cp-text-secondary: #8fa3bf;
    --cp-text-muted: #4e5f78;
    --cp-text-inverse: #06080e;

    /* Controlled Environmental Neons */
    --cp-cyan: #00f0ff;
    --cp-cyan-hover: #38f4ff;
    --cp-cyan-dim: rgba(0, 240, 255, 0.12);
    --cp-cyan-glow: rgba(0, 240, 255, 0.35);
    --cp-magenta: #ff0055;
    --cp-magenta-dim: rgba(255, 0, 85, 0.12);
    --cp-magenta-glow: rgba(255, 0, 85, 0.35);
    --cp-yellow: #ffe600;
    --cp-yellow-glow: rgba(255, 230, 0, 0.4);
    --cp-amber: #ffb700;
    --cp-amber-dim: rgba(255, 183, 0, 0.12);
    --cp-green: #00ff66;
    --cp-green-dim: rgba(0, 255, 102, 0.12);

    /* Technical Borders & Framing */
    --cp-border-cyan: rgba(0, 240, 255, 0.28);
    --cp-border-cyan-strong: rgba(0, 240, 255, 0.65);
    --cp-border-dim: rgba(255, 255, 255, 0.08);
    --cp-border-magenta: rgba(255, 0, 85, 0.35);
    --cp-border-amber: rgba(255, 183, 0, 0.35);

    /* Angular Chamfered Polygon Cuts */
    --cp-clip-panel: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
    --cp-clip-card: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
    --cp-clip-button: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
    --cp-clip-badge: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));

    /* Atmospheric Radiance */
    --cp-glow-cyan-sm: 0 0 8px rgba(0, 240, 255, 0.35);
    --cp-glow-cyan-md: 0 0 16px rgba(0, 240, 255, 0.45);
    --cp-glow-magenta-sm: 0 0 8px rgba(255, 0, 85, 0.35);
    --cp-glow-yellow-sm: 0 0 10px rgba(255, 230, 0, 0.35);

    box-sizing: border-box;
    position: relative;
    background-color: var(--cp-bg);
    background-image:
      radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.05) 0%, transparent 65%),
      linear-gradient(rgba(0, 240, 255, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 240, 255, 0.015) 1px, transparent 1px);
    background-size: 100% 100%, 32px 32px, 32px 32px;
    background-attachment: local;
    color: var(--cp-text-primary);
    font-family: var(--cp-font-body);
    font-size: 1.05rem;
    line-height: 1.6;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* Scanline subtle atmospheric overlay */
  .lab-styled-preview[data-style="cyberpunk"]::before,
  .cyberpunk-styled-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.12) 0px,
      rgba(0, 0, 0, 0.12) 1px,
      transparent 1px,
      transparent 3px
    );
    opacity: 0.4;
    z-index: 1;
  }

  .lab-styled-preview[data-style="cyberpunk"] *,
  .cyberpunk-styled-container * {
    box-sizing: border-box;
    position: relative;
    z-index: 2;
  }

  /* ==========================================================================
     TYPOGRAPHY & HIERARCHY
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] h1,
  .cyberpunk-styled-container h1 {
    font-family: var(--cp-font-display);
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0 0 1.25rem 0;
    text-shadow: 0 0 18px rgba(0, 240, 255, 0.35);
  }

  .lab-styled-preview[data-style="cyberpunk"] h2,
  .cyberpunk-styled-container h2 {
    font-family: var(--cp-font-heading);
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--cp-cyan);
    margin: 0 0 1rem 0;
  }

  .lab-styled-preview[data-style="cyberpunk"] h3,
  .cyberpunk-styled-container h3 {
    font-family: var(--cp-font-heading);
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0 0 0.75rem 0;
  }

  .lab-styled-preview[data-style="cyberpunk"] h4,
  .lab-styled-preview[data-style="cyberpunk"] h5,
  .lab-styled-preview[data-style="cyberpunk"] h6,
  .cyberpunk-styled-container h4,
  .cyberpunk-styled-container h5,
  .cyberpunk-styled-container h6 {
    font-family: var(--cp-font-mono);
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--cp-yellow);
    margin: 0 0 0.5rem 0;
  }

  .lab-styled-preview[data-style="cyberpunk"] p,
  .cyberpunk-styled-container p {
    font-family: var(--cp-font-body);
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--cp-text-secondary);
    line-height: 1.65;
    margin: 0 0 1.25rem 0;
  }

  /* Technical Kickers, Overlines & System Signals */
  .lab-styled-preview[data-style="cyberpunk"] section > header > p:first-child,
  .lab-styled-preview[data-style="cyberpunk"] header > p:first-child,
  .cyberpunk-styled-container section > header > p:first-child,
  .cyberpunk-styled-container header > p:first-child {
    font-family: var(--cp-font-mono);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--cp-cyan);
    margin-bottom: 0.65rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .lab-styled-preview[data-style="cyberpunk"] section > header > p:first-child::before,
  .lab-styled-preview[data-style="cyberpunk"] header > p:first-child::before,
  .cyberpunk-styled-container section > header > p:first-child::before,
  .cyberpunk-styled-container header > p:first-child::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: var(--cp-cyan);
    box-shadow: 0 0 8px var(--cp-cyan);
    border-radius: 50%;
  }

  /* ==========================================================================
     NAVIGATION & SYSTEM CONSOLE
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] nav,
  .cyberpunk-styled-container nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    padding: 0.9rem 1.5rem;
    margin-bottom: 2.5rem;
    background: var(--cp-bg-surface);
    border: 1px solid var(--cp-border-cyan);
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  }

  .lab-styled-preview[data-style="cyberpunk"] nav a,
  .cyberpunk-styled-container nav a {
    font-family: var(--cp-font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--cp-text-secondary);
    text-decoration: none;
    padding: 0.4rem 0.85rem;
    border: 1px solid transparent;
    transition: all 120ms ease;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  .lab-styled-preview[data-style="cyberpunk"] nav a:hover,
  .lab-styled-preview[data-style="cyberpunk"] nav a:focus-visible,
  .cyberpunk-styled-container nav a:hover,
  .cyberpunk-styled-container nav a:focus-visible {
    color: var(--cp-cyan);
    background: var(--cp-cyan-dim);
    border-color: var(--cp-border-cyan);
    text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
  }

  /* Wordmark / Brand Link */
  .lab-styled-preview[data-style="cyberpunk"] nav a:first-child,
  .cyberpunk-styled-container nav a:first-child {
    font-family: var(--cp-font-display);
    font-size: 1.05rem;
    font-weight: 900;
    letter-spacing: 0.06em;
    color: #ffffff;
    border-left: 3px solid var(--cp-cyan);
    padding-left: 0.65rem;
  }

  /* ==========================================================================
     HERO SECTIONS
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] section:first-of-type,
  .cyberpunk-styled-container section:first-of-type {
    position: relative;
    padding: 3rem 2.5rem;
    margin-bottom: 3.5rem;
    background: var(--cp-bg-surface);
    border: 1px solid var(--cp-border-cyan);
    clip-path: var(--cp-clip-panel);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 240, 255, 0.2);
  }

  .lab-styled-preview[data-style="cyberpunk"] section:first-of-type p:last-of-type,
  .cyberpunk-styled-container section:first-of-type p:last-of-type {
    font-size: 1.15rem;
    max-width: 680px;
    color: var(--cp-text-secondary);
    margin-bottom: 2rem;
  }

  /* ==========================================================================
     TACTILE OPERATIONAL BUTTONS & CONTROLS
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] button,
  .lab-styled-preview[data-style="cyberpunk"] input[type="submit"],
  .lab-styled-preview[data-style="cyberpunk"] input[type="button"],
  .lab-styled-preview[data-style="cyberpunk"] .btn,
  .cyberpunk-styled-container button,
  .cyberpunk-styled-container input[type="submit"],
  .cyberpunk-styled-container input[type="button"],
  .cyberpunk-styled-container .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 1.9rem;
    font-family: var(--cp-font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--cp-text-inverse);
    background-color: var(--cp-yellow);
    border: 1.5px solid var(--cp-yellow);
    border-radius: 0;
    clip-path: var(--cp-clip-button);
    box-shadow: 0 0 14px rgba(255, 230, 0, 0.45);
    cursor: pointer;
    text-decoration: none;
    transition: all 140ms ease;
  }

  .lab-styled-preview[data-style="cyberpunk"] button:hover,
  .lab-styled-preview[data-style="cyberpunk"] input[type="submit"]:hover,
  .lab-styled-preview[data-style="cyberpunk"] .btn:hover,
  .cyberpunk-styled-container button:hover,
  .cyberpunk-styled-container input[type="submit"]:hover,
  .cyberpunk-styled-container .btn:hover {
    background-color: var(--cp-cyan);
    border-color: var(--cp-cyan);
    color: var(--cp-text-inverse);
    box-shadow: 0 0 22px rgba(0, 240, 255, 0.7);
    transform: translateY(-2px);
  }

  .lab-styled-preview[data-style="cyberpunk"] button:active,
  .cyberpunk-styled-container button:active {
    background-color: var(--cp-magenta);
    border-color: var(--cp-magenta);
    color: #ffffff;
    box-shadow: 0 0 20px rgba(255, 0, 85, 0.8);
    transform: translateY(0);
  }

  /* Secondary / Ghost Control */
  .lab-styled-preview[data-style="cyberpunk"] button:nth-of-type(2),
  .lab-styled-preview[data-style="cyberpunk"] nav button,
  .cyberpunk-styled-container button:nth-of-type(2),
  .cyberpunk-styled-container nav button {
    background-color: var(--cp-bg-panel);
    color: var(--cp-cyan);
    border: 1.5px solid var(--cp-border-cyan);
    box-shadow: none;
  }

  .lab-styled-preview[data-style="cyberpunk"] button:nth-of-type(2):hover,
  .lab-styled-preview[data-style="cyberpunk"] nav button:hover,
  .cyberpunk-styled-container button:nth-of-type(2):hover,
  .cyberpunk-styled-container nav button:hover {
    background-color: var(--cp-cyan-dim);
    border-color: var(--cp-cyan);
    box-shadow: 0 0 14px rgba(0, 240, 255, 0.4);
  }

  /* ==========================================================================
     CARDS, MODULES & NTH-CHILD TELEMETRY VARIATIONS
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] div:has(> article),
  .cyberpunk-styled-container div:has(> article) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.75rem;
    margin: 2.5rem 0;
  }

  .lab-styled-preview[data-style="cyberpunk"] article,
  .lab-styled-preview[data-style="cyberpunk"] .card,
  .cyberpunk-styled-container article,
  .cyberpunk-styled-container .card {
    position: relative;
    padding: 2rem 1.75rem;
    background: var(--cp-bg-panel);
    border: 1px solid var(--cp-border-cyan);
    border-radius: 0;
    clip-path: var(--cp-clip-card);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    transition: transform 140ms ease, border-color 140ms ease, box-shadow 140ms ease;
  }

  .lab-styled-preview[data-style="cyberpunk"] article:hover,
  .lab-styled-preview[data-style="cyberpunk"] .card:hover,
  .cyberpunk-styled-container article:hover,
  .cyberpunk-styled-container .card:hover {
    transform: translateY(-3px);
    border-color: var(--cp-cyan);
    box-shadow: 0 8px 26px rgba(0, 240, 255, 0.25);
  }

  /* Deterministic nth-child telemetry variations across card collections */
  .lab-styled-preview[data-style="cyberpunk"] article:nth-child(3n+1),
  .cyberpunk-styled-container article:nth-child(3n+1) {
    border-top: 2px solid var(--cp-cyan);
  }

  .lab-styled-preview[data-style="cyberpunk"] article:nth-child(3n+2),
  .cyberpunk-styled-container article:nth-child(3n+2) {
    border-top: 2px solid var(--cp-amber);
  }

  .lab-styled-preview[data-style="cyberpunk"] article:nth-child(3n+3),
  .cyberpunk-styled-container article:nth-child(3n+3) {
    border-top: 2px solid var(--cp-magenta);
  }

  /* ==========================================================================
     EDITORIAL ARTICLE PUBLISHING (Never cardified, broadsheet 720px measure)
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] article:only-of-type,
  .cyberpunk-styled-container article:only-of-type {
    max-width: 760px;
    margin: 0 auto 3.5rem;
    padding: 2.5rem 0;
    background: transparent;
    border: none;
    clip-path: none;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="cyberpunk"] article:only-of-type h1,
  .cyberpunk-styled-container article:only-of-type h1 {
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    border-bottom: 1px solid var(--cp-border-cyan);
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .lab-styled-preview[data-style="cyberpunk"] article:only-of-type p,
  .cyberpunk-styled-container article:only-of-type p {
    font-size: 1.125rem;
    line-height: 1.75;
    color: #cdd9e5;
  }

  .lab-styled-preview[data-style="cyberpunk"] blockquote,
  .cyberpunk-styled-container blockquote {
    position: relative;
    margin: 2.25rem 0;
    padding: 1.5rem 1.75rem;
    background: var(--cp-cyan-dim);
    border-left: 3px solid var(--cp-cyan);
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
    font-family: var(--cp-font-heading);
    font-size: 1.25rem;
    font-style: italic;
    line-height: 1.5;
    color: #ffffff;
    text-shadow: 0 0 12px rgba(0, 240, 255, 0.25);
  }

  .lab-styled-preview[data-style="cyberpunk"] blockquote::before,
  .cyberpunk-styled-container blockquote::before {
    content: '// LOG.DECRYPT: ';
    font-family: var(--cp-font-mono);
    font-size: 0.75rem;
    font-style: normal;
    letter-spacing: 0.1em;
    color: var(--cp-cyan);
    display: block;
    margin-bottom: 0.5rem;
  }

  /* ==========================================================================
     DASHBOARD & TELEMETRY HUD
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] strong,
  .lab-styled-preview[data-style="cyberpunk"] b,
  .cyberpunk-styled-container strong,
  .cyberpunk-styled-container b {
    font-family: var(--cp-font-mono);
    font-weight: 700;
    color: #ffffff;
  }

  /* Telemetry metric values */
  .lab-styled-preview[data-style="cyberpunk"] article strong:only-child,
  .lab-styled-preview[data-style="cyberpunk"] .card strong,
  .cyberpunk-styled-container article strong:only-child,
  .cyberpunk-styled-container .card strong {
    display: block;
    font-size: 2.2rem;
    font-family: var(--cp-font-mono);
    color: var(--cp-cyan);
    text-shadow: 0 0 14px rgba(0, 240, 255, 0.4);
    margin: 0.75rem 0;
  }

  /* Telemetry Tables */
  .lab-styled-preview[data-style="cyberpunk"] table,
  .cyberpunk-styled-container table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    background: var(--cp-bg-surface);
    border: 1px solid var(--cp-border-cyan);
    font-family: var(--cp-font-mono);
    font-size: 0.875rem;
  }

  .lab-styled-preview[data-style="cyberpunk"] th,
  .cyberpunk-styled-container th {
    background: var(--cp-bg-panel);
    color: var(--cp-cyan);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: left;
    padding: 0.85rem 1rem;
    border-bottom: 1.5px solid var(--cp-border-cyan);
  }

  .lab-styled-preview[data-style="cyberpunk"] td,
  .cyberpunk-styled-container td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--cp-border-dim);
    color: var(--cp-text-secondary);
  }

  .lab-styled-preview[data-style="cyberpunk"] tr:hover td,
  .cyberpunk-styled-container tr:hover td {
    background: var(--cp-cyan-dim);
    color: #ffffff;
  }

  /* ==========================================================================
     PRICING TIERS / ACCESS CLEARANCE
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] ul,
  .cyberpunk-styled-container ul {
    list-style: none;
    padding: 0;
    margin: 1.25rem 0;
  }

  .lab-styled-preview[data-style="cyberpunk"] ul li,
  .cyberpunk-styled-container ul li {
    font-family: var(--cp-font-mono);
    font-size: 0.875rem;
    color: var(--cp-text-secondary);
    padding: 0.4rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .lab-styled-preview[data-style="cyberpunk"] ul li::before,
  .cyberpunk-styled-container ul li::before {
    content: '▶';
    font-size: 0.65rem;
    color: var(--cp-cyan);
  }

  /* Recommended Tier Highlight */
  .lab-styled-preview[data-style="cyberpunk"] article:nth-child(2):has(button),
  .cyberpunk-styled-container article:nth-child(2):has(button) {
    border: 1.5px solid var(--cp-cyan);
    box-shadow: 0 0 28px rgba(0, 240, 255, 0.25);
    background: linear-gradient(180deg, rgba(0, 240, 255, 0.06) 0%, var(--cp-bg-panel) 100%);
  }

  /* ==========================================================================
     FORMS & SECURE TERMINAL INPUTS
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] form,
  .cyberpunk-styled-container form {
    max-width: 600px;
    padding: 2.25rem;
    background: var(--cp-bg-surface);
    border: 1px solid var(--cp-border-cyan);
    clip-path: var(--cp-clip-panel);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    margin: 2rem 0;
  }

  .lab-styled-preview[data-style="cyberpunk"] label,
  .cyberpunk-styled-container label {
    display: block;
    font-family: var(--cp-font-mono);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--cp-cyan);
    margin-bottom: 0.45rem;
  }

  .lab-styled-preview[data-style="cyberpunk"] input[type="text"],
  .lab-styled-preview[data-style="cyberpunk"] input[type="email"],
  .lab-styled-preview[data-style="cyberpunk"] input[type="password"],
  .lab-styled-preview[data-style="cyberpunk"] textarea,
  .lab-styled-preview[data-style="cyberpunk"] select,
  .cyberpunk-styled-container input[type="text"],
  .cyberpunk-styled-container input[type="email"],
  .cyberpunk-styled-container input[type="password"],
  .cyberpunk-styled-container textarea,
  .cyberpunk-styled-container select {
    width: 100%;
    padding: 0.8rem 1rem;
    font-family: var(--cp-font-mono);
    font-size: 0.95rem;
    color: #ffffff;
    background: var(--cp-bg);
    border: 1px solid var(--cp-border-cyan);
    border-radius: 0;
    margin-bottom: 1.25rem;
    transition: all 120ms ease;
  }

  .lab-styled-preview[data-style="cyberpunk"] input:focus,
  .lab-styled-preview[data-style="cyberpunk"] textarea:focus,
  .lab-styled-preview[data-style="cyberpunk"] select:focus,
  .cyberpunk-styled-container input:focus,
  .cyberpunk-styled-container textarea:focus,
  .cyberpunk-styled-container select:focus {
    outline: none;
    border-color: var(--cp-cyan);
    box-shadow: 0 0 12px rgba(0, 240, 255, 0.45);
    background: #080c14;
  }

  /* ==========================================================================
     BADGES, STATUS BEACONS & PILLS
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] .badge,
  .cyberpunk-styled-container .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.25rem 0.65rem;
    font-family: var(--cp-font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--cp-text-inverse);
    background: var(--cp-yellow);
    border: 1px solid var(--cp-yellow);
    clip-path: var(--cp-clip-badge);
  }

  /* ==========================================================================
     FOOTER / SYSTEM STATUS DECK
     ========================================================================== */
  .lab-styled-preview[data-style="cyberpunk"] footer,
  .cyberpunk-styled-container footer {
    margin-top: 4rem;
    padding-top: 1.75rem;
    border-top: 1px solid var(--cp-border-cyan);
    font-family: var(--cp-font-mono);
    font-size: 0.8rem;
    color: var(--cp-text-muted);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  /* ==========================================================================
     RESPONSIVE ADAPTATIONS (Mobile / Tablet)
     ========================================================================== */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="cyberpunk"],
    .cyberpunk-styled-container {
      padding: 1.25rem;
      font-size: 1rem;
    }

    .lab-styled-preview[data-style="cyberpunk"] h1,
    .cyberpunk-styled-container h1 {
      font-size: 2.1rem;
    }

    .lab-styled-preview[data-style="cyberpunk"] nav,
    .cyberpunk-styled-container nav {
      flex-direction: column;
      align-items: stretch;
      gap: 0.75rem;
      padding: 1rem;
    }

    .lab-styled-preview[data-style="cyberpunk"] section:first-of-type,
    .cyberpunk-styled-container section:first-of-type {
      padding: 1.75rem 1.25rem;
    }

    .lab-styled-preview[data-style="cyberpunk"] div:has(> article),
    .cyberpunk-styled-container div:has(> article) {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .lab-styled-preview[data-style="cyberpunk"] form,
    .cyberpunk-styled-container form {
      padding: 1.5rem 1rem;
    }
  }
`;
