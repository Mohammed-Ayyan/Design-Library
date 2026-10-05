/**
 * Anthropomorphic Visual Design Language — Semantic CSS Rules
 *
 * Core Philosophy:
 * "A digital environment with a personality."
 * Warm, playful, expressive, approachable, slightly whimsical, modern, and intelligent.
 *
 * Anthropomorphism is achieved through:
 * - Organic, character-like geometry (subtly asymmetrical rounded contours)
 * - Visual reactivity & bouncy spring micro-interactions
 * - Conversational, warm typography (Outfit display + Plus Jakarta Sans body)
 * - Harmonious friendly palette (warm cream, soft coral, sky blue, sunny amber, fresh mint)
 * - Living status pulse indicators and friendly speech-bubble pullquotes
 * - Zero cartoon faces, zero random eyes, zero emoji spam
 *
 * Architectural Mandates:
 * - Direct mapping to raw semantic HTML tags
 * - Zero extra DOM wrappers or class requirements
 * - Fluid mobile responsiveness without horizontal overflow
 */

export const anthropomorphicSemanticCss = `
  /* ==========================================================================
     ANTHROPOMORPHIC DESIGN LANGUAGE — LIVING SYSTEM WITH PERSONALITY
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@400;500;700&display=swap');

  /* Living Pulse Keyframe for Telemetry and Status Indicators */
  @keyframes anthro-pulse {
    0% {
      transform: scale(0.92);
      opacity: 0.75;
    }
    50% {
      transform: scale(1.12);
      opacity: 1;
    }
    100% {
      transform: scale(0.92);
      opacity: 0.75;
    }
  }

  /* Gentle Personality Bob for Hero Badges */
  @keyframes anthro-float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
  }

  /* --------------------------------------------------------------------------
     1. FOUNDATION & SCOPED VARIABLES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"],
  .anthropomorphic-styled-container {
    --anthro-bg: #fdfbf7;
    --anthro-bg-subtle: #f7f3eb;
    --anthro-surface: #ffffff;
    --anthro-surface-elevated: #fffcf8;
    --anthro-surface-tint: #fff5f2;
    --anthro-text: #26262e;
    --anthro-text-secondary: #565664;
    --anthro-text-muted: #858596;
    --anthro-coral: #ff6b57;
    --anthro-coral-hover: #e85642;
    --anthro-coral-subtle: #fff0ed;
    --anthro-sky: #4a80e8;
    --anthro-sky-hover: #3b6fd4;
    --anthro-sky-subtle: #eef4ff;
    --anthro-amber: #f59e0b;
    --anthro-amber-subtle: #fef9ee;
    --anthro-mint: #10b981;
    --anthro-mint-subtle: #ecfdf5;
    --anthro-lavender: #8b5cf6;
    --anthro-lavender-subtle: #f5f3ff;
    --anthro-border: rgba(215, 203, 188, 0.65);
    --anthro-border-strong: rgba(180, 165, 145, 0.85);
    --anthro-shadow-sm: 0 4px 12px rgba(60, 45, 30, 0.05);
    --anthro-shadow-md: 0 10px 28px -6px rgba(60, 45, 30, 0.08), 0 3px 8px -2px rgba(60, 45, 30, 0.04);
    --anthro-shadow-lg: 0 20px 40px -8px rgba(60, 45, 30, 0.12);
    --anthro-radius-sm: 10px;
    --anthro-radius-md: 22px 28px 20px 26px;
    --anthro-radius-lg: 32px 24px 30px 22px;
    --anthro-radius-pill: 9999px;
    --anthro-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    --anthro-ease: cubic-bezier(0.16, 1, 0.3, 1);

    background-color: var(--anthro-bg) !important;
    background-image: 
      radial-gradient(ellipse at 85% 12%, rgba(255, 107, 87, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse at 15% 75%, rgba(74, 128, 232, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(245, 158, 11, 0.03) 0%, transparent 60%) !important;
    color: var(--anthro-text) !important;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    font-size: 1rem !important;
    line-height: 1.68 !important;
    letter-spacing: -0.01em !important;
    box-sizing: border-box !important;
    padding: 2.5rem 2rem !important;
    border-radius: 20px !important;
    position: relative !important;
    overflow-x: hidden !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] *,
  .anthropomorphic-styled-container * {
    box-sizing: border-box;
  }

  /* --------------------------------------------------------------------------
     2. CONVERSATIONAL TYPOGRAPHY HIERARCHY
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"] h1,
  .lab-styled-preview[data-style="anthropomorphic"] h2,
  .lab-styled-preview[data-style="anthropomorphic"] h3,
  .lab-styled-preview[data-style="anthropomorphic"] h4,
  .lab-styled-preview[data-style="anthropomorphic"] h5,
  .lab-styled-preview[data-style="anthropomorphic"] h6,
  .anthropomorphic-styled-container h1,
  .anthropomorphic-styled-container h2,
  .anthropomorphic-styled-container h3,
  .anthropomorphic-styled-container h4,
  .anthropomorphic-styled-container h5,
  .anthropomorphic-styled-container h6 {
    font-family: 'Outfit', 'Nunito', -apple-system, sans-serif !important;
    color: var(--anthro-text) !important;
    letter-spacing: -0.025em !important;
    font-weight: 800 !important;
    line-height: 1.2 !important;
    margin-top: 0 !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] h1,
  .anthropomorphic-styled-container h1 {
    font-size: 2.75rem !important;
    font-weight: 800 !important;
    line-height: 1.15 !important;
    letter-spacing: -0.035em !important;
    margin-bottom: 1.25rem !important;
    color: var(--anthro-text) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] h2,
  .anthropomorphic-styled-container h2 {
    font-size: 2rem !important;
    font-weight: 700 !important;
    line-height: 1.22 !important;
    letter-spacing: -0.025em !important;
    margin-bottom: 1rem !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] h3,
  .anthropomorphic-styled-container h3 {
    font-size: 1.35rem !important;
    font-weight: 700 !important;
    line-height: 1.3 !important;
    margin-bottom: 0.65rem !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] h4,
  .anthropomorphic-styled-container h4 {
    font-size: 1.125rem !important;
    font-weight: 700 !important;
    margin-bottom: 0.5rem !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] p,
  .anthropomorphic-styled-container p {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    color: var(--anthro-text-secondary) !important;
    font-size: 1rem !important;
    line-height: 1.68 !important;
    margin-top: 0 !important;
    margin-bottom: 1.25rem !important;
  }

  /* Friendly conversational kicker badges */
  .lab-styled-preview[data-style="anthropomorphic"] header > p:first-child,
  .lab-styled-preview[data-style="anthropomorphic"] section > p:first-child,
  .anthropomorphic-styled-container header > p:first-child,
  .anthropomorphic-styled-container section > p:first-child {
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.45rem !important;
    background-color: var(--anthro-coral-subtle) !important;
    color: var(--anthro-coral) !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 0.8125rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.02em !important;
    padding: 0.3rem 0.85rem !important;
    border-radius: var(--anthro-radius-pill) !important;
    border: 1px solid rgba(255, 107, 87, 0.25) !important;
    margin-bottom: 0.85rem !important;
    width: fit-content !important;
    animation: anthro-float 4s ease-in-out infinite !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] header > p:first-child::before,
  .lab-styled-preview[data-style="anthropomorphic"] section > p:first-child::before,
  .anthropomorphic-styled-container header > p:first-child::before,
  .anthropomorphic-styled-container section > p:first-child::before {
    content: '' !important;
    display: inline-block !important;
    width: 7px !important;
    height: 7px !important;
    border-radius: 50% !important;
    background-color: var(--anthro-coral) !important;
    box-shadow: 0 0 8px rgba(255, 107, 87, 0.6) !important;
    animation: anthro-pulse 2.2s infinite ease-in-out !important;
  }

  /* --------------------------------------------------------------------------
     3. WELCOMING NAVIGATION (Floating Pill Bar)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"] nav,
  .anthropomorphic-styled-container nav {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 0.75rem !important;
    flex-wrap: wrap !important;
    background-color: rgba(255, 255, 255, 0.88) !important;
    backdrop-filter: blur(14px) !important;
    -webkit-backdrop-filter: blur(14px) !important;
    border: 1.5px solid var(--anthro-border) !important;
    border-radius: var(--anthro-radius-pill) !important;
    padding: 0.55rem 1.15rem !important;
    margin-bottom: 3rem !important;
    box-shadow: var(--anthro-shadow-sm) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] nav a,
  .anthropomorphic-styled-container nav a {
    color: var(--anthro-text-secondary) !important;
    text-decoration: none !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 600 !important;
    font-size: 0.9375rem !important;
    padding: 0.45rem 1rem !important;
    border-radius: var(--anthro-radius-pill) !important;
    transition: all 200ms var(--anthro-spring) !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] nav a:hover,
  .anthropomorphic-styled-container nav a:hover {
    background-color: var(--anthro-coral-subtle) !important;
    color: var(--anthro-coral) !important;
    transform: translateY(-2px) scale(1.02) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] nav a:first-child,
  .anthropomorphic-styled-container nav a:first-child {
    background-color: var(--anthro-coral-subtle) !important;
    color: var(--anthro-coral) !important;
    font-weight: 700 !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] nav a:first-child::before,
  .anthropomorphic-styled-container nav a:first-child::before {
    content: '' !important;
    width: 6px !important;
    height: 6px !important;
    border-radius: 50% !important;
    background-color: var(--anthro-coral) !important;
    animation: anthro-pulse 2s infinite ease-in-out !important;
  }

  /* --------------------------------------------------------------------------
     4. BUTTONS & CONTROLS (Springy, Responsive, Character-Driven)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"] button,
  .lab-styled-preview[data-style="anthropomorphic"] input[type="submit"],
  .anthropomorphic-styled-container button,
  .anthropomorphic-styled-container input[type="submit"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 0.95rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.01em !important;
    padding: 0.75rem 1.65rem !important;
    background-color: var(--anthro-coral) !important;
    color: #ffffff !important;
    border: none !important;
    border-radius: 22px 18px 24px 20px !important; /* Gentle organic curvature */
    box-shadow: 0 6px 18px -2px rgba(255, 107, 87, 0.38) !important;
    cursor: pointer !important;
    transition: all 220ms var(--anthro-spring) !important;
    text-decoration: none !important;
    user-select: none !important;
    min-height: 46px !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] button:hover,
  .lab-styled-preview[data-style="anthropomorphic"] input[type="submit"]:hover,
  .anthropomorphic-styled-container button:hover,
  .anthropomorphic-styled-container input[type="submit"]:hover {
    background-color: var(--anthro-coral-hover) !important;
    transform: translateY(-2px) scale(1.02) !important;
    box-shadow: 0 10px 24px -3px rgba(255, 107, 87, 0.48) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] button:active,
  .lab-styled-preview[data-style="anthropomorphic"] input[type="submit"]:active,
  .anthropomorphic-styled-container button:active,
  .anthropomorphic-styled-container input[type="submit"]:active {
    transform: translateY(1px) scale(0.98) !important;
    box-shadow: 0 3px 8px rgba(255, 107, 87, 0.3) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] button:focus-visible,
  .lab-styled-preview[data-style="anthropomorphic"] input[type="submit"]:focus-visible,
  .anthropomorphic-styled-container button:focus-visible,
  .anthropomorphic-styled-container input[type="submit"]:focus-visible {
    outline: none !important;
    box-shadow: 0 0 0 4px rgba(255, 107, 87, 0.3) !important;
  }

  /* Secondary button variation */
  .lab-styled-preview[data-style="anthropomorphic"] button:nth-of-type(2),
  .anthropomorphic-styled-container button:nth-of-type(2) {
    background-color: var(--anthro-sky-subtle) !important;
    color: var(--anthro-sky) !important;
    box-shadow: 0 4px 14px rgba(74, 128, 232, 0.16) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] button:nth-of-type(2):hover,
  .anthropomorphic-styled-container button:nth-of-type(2):hover {
    background-color: var(--anthro-sky) !important;
    color: #ffffff !important;
    box-shadow: 0 8px 20px rgba(74, 128, 232, 0.3) !important;
  }

  /* --------------------------------------------------------------------------
     5. PANELS & CARDS (Varied Organic Radii, Soft Porcelain Surfaces)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"] article,
  .lab-styled-preview[data-style="anthropomorphic"] .card,
  .anthropomorphic-styled-container article,
  .anthropomorphic-styled-container .card {
    background-color: var(--anthro-surface) !important;
    border: 1.5px solid var(--anthro-border) !important;
    border-radius: var(--anthro-radius-md) !important;
    padding: 1.85rem !important;
    margin-bottom: 1.5rem !important;
    box-shadow: var(--anthro-shadow-md) !important;
    transition: all 220ms var(--anthro-spring) !important;
    position: relative !important;
  }

  /* Organic Child Asymmetry — gives each card subtle individual character */
  .lab-styled-preview[data-style="anthropomorphic"] article:nth-child(3n+1),
  .anthropomorphic-styled-container article:nth-child(3n+1) {
    border-radius: 26px 20px 28px 22px !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] article:nth-child(3n+2),
  .anthropomorphic-styled-container article:nth-child(3n+2) {
    border-radius: 20px 28px 22px 28px !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] article:nth-child(3n+3),
  .anthropomorphic-styled-container article:nth-child(3n+3) {
    border-radius: 28px 22px 24px 30px !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] article:hover,
  .lab-styled-preview[data-style="anthropomorphic"] .card:hover,
  .anthropomorphic-styled-container article:hover,
  .anthropomorphic-styled-container .card:hover {
    transform: translateY(-3px) scale(1.01) !important;
    box-shadow: var(--anthro-shadow-lg) !important;
    border-color: rgba(255, 107, 87, 0.45) !important;
  }

  /* Price tags in cards */
  .lab-styled-preview[data-style="anthropomorphic"] article strong,
  .lab-styled-preview[data-style="anthropomorphic"] article b,
  .anthropomorphic-styled-container article strong,
  .anthropomorphic-styled-container article b {
    display: block !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 1.6rem !important;
    font-weight: 800 !important;
    color: var(--anthro-coral) !important;
    margin: 0.85rem 0 1.15rem !important;
  }

  /* --------------------------------------------------------------------------
     6. EDITORIAL ARTICLES (Human, Conversational, Speech-Bubble Pullquotes)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"] main > article,
  .anthropomorphic-styled-container main > article {
    max-width: 740px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    border: none !important;
    background: transparent !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  /* Speech-bubble inspired friendly pullquotes */
  .lab-styled-preview[data-style="anthropomorphic"] blockquote,
  .anthropomorphic-styled-container blockquote {
    background-color: var(--anthro-bg-subtle) !important;
    border-left: 4px solid var(--anthro-coral) !important;
    border-radius: 4px 24px 24px 24px !important;
    padding: 1.5rem 2rem !important;
    margin: 2.25rem 0 !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 1.15rem !important;
    font-weight: 500 !important;
    font-style: italic !important;
    line-height: 1.65 !important;
    color: var(--anthro-text) !important;
    box-shadow: var(--anthro-shadow-sm) !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] blockquote::before,
  .anthropomorphic-styled-container blockquote::before {
    content: '“' !important;
    position: absolute !important;
    top: 0.25rem !important;
    right: 1.25rem !important;
    font-family: 'Outfit', Georgia, serif !important;
    font-size: 3rem !important;
    line-height: 1 !important;
    color: rgba(255, 107, 87, 0.2) !important;
    font-weight: 900 !important;
    pointer-events: none !important;
  }

  /* --------------------------------------------------------------------------
     7. FORMS (Guided, Non-Confrontational, Soft Contours)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"] form,
  .anthropomorphic-styled-container form {
    background-color: var(--anthro-surface) !important;
    border: 1.5px solid var(--anthro-border) !important;
    border-radius: var(--anthro-radius-md) !important;
    padding: 2.25rem !important;
    box-shadow: var(--anthro-shadow-md) !important;
    max-width: 580px !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] label,
  .anthropomorphic-styled-container label {
    display: block !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 0.9rem !important;
    font-weight: 700 !important;
    color: var(--anthro-text) !important;
    margin-bottom: 0.45rem !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] input[type="text"],
  .lab-styled-preview[data-style="anthropomorphic"] input[type="email"],
  .lab-styled-preview[data-style="anthropomorphic"] input[type="password"],
  .lab-styled-preview[data-style="anthropomorphic"] input[type="number"],
  .lab-styled-preview[data-style="anthropomorphic"] input[type="search"],
  .lab-styled-preview[data-style="anthropomorphic"] input[type="tel"],
  .lab-styled-preview[data-style="anthropomorphic"] select,
  .lab-styled-preview[data-style="anthropomorphic"] textarea,
  .anthropomorphic-styled-container input[type="text"],
  .anthropomorphic-styled-container input[type="email"],
  .anthropomorphic-styled-container input[type="password"],
  .anthropomorphic-styled-container input[type="number"],
  .anthropomorphic-styled-container input[type="search"],
  .anthropomorphic-styled-container input[type="tel"],
  .anthropomorphic-styled-container select,
  .anthropomorphic-styled-container textarea {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    background-color: var(--anthro-surface) !important;
    border: 1.5px solid rgba(215, 203, 188, 0.8) !important;
    border-radius: 14px !important;
    padding: 0.75rem 1rem !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 0.95rem !important;
    color: var(--anthro-text) !important;
    margin-bottom: 1.25rem !important;
    transition: all 180ms ease !important;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.02) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] input:focus,
  .lab-styled-preview[data-style="anthropomorphic"] select:focus,
  .lab-styled-preview[data-style="anthropomorphic"] textarea:focus,
  .anthropomorphic-styled-container input:focus,
  .anthropomorphic-styled-container select:focus,
  .anthropomorphic-styled-container textarea:focus {
    border-color: var(--anthro-sky) !important;
    box-shadow: 0 0 0 4px rgba(74, 128, 232, 0.18) !important;
    outline: none !important;
    background-color: #ffffff !important;
  }

  /* --------------------------------------------------------------------------
     8. DASHBOARD & DATA TABLES (Friendly Telemetry, Rounded Containers)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"] table,
  .anthropomorphic-styled-container table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    background-color: var(--anthro-surface) !important;
    border: 1.5px solid var(--anthro-border) !important;
    border-radius: 18px !important;
    overflow: hidden !important;
    margin: 1.75rem 0 !important;
    box-shadow: var(--anthro-shadow-sm) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] th,
  .anthropomorphic-styled-container th {
    background-color: var(--anthro-bg-subtle) !important;
    color: var(--anthro-text) !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.01em !important;
    padding: 0.9rem 1.25rem !important;
    text-align: left !important;
    border-bottom: 1.5px solid var(--anthro-border) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] td,
  .anthropomorphic-styled-container td {
    padding: 0.9rem 1.25rem !important;
    border-bottom: 1px solid rgba(215, 203, 188, 0.4) !important;
    color: var(--anthro-text-secondary) !important;
    font-size: 0.9375rem !important;
    transition: background-color 150ms ease !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] tbody tr:last-child td,
  .anthropomorphic-styled-container tbody tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] tbody tr:hover td,
  .anthropomorphic-styled-container tbody tr:hover td {
    background-color: rgba(255, 245, 242, 0.6) !important;
  }

  /* Monospace metadata chips in tables & telemetry */
  .lab-styled-preview[data-style="anthropomorphic"] code,
  .anthropomorphic-styled-container code {
    font-family: 'JetBrains Mono', monospace !important;
    font-size: 0.8125rem !important;
    background-color: var(--anthro-bg-subtle) !important;
    color: var(--anthro-coral) !important;
    padding: 0.2rem 0.55rem !important;
    border-radius: 8px !important;
    border: 1px solid rgba(215, 203, 188, 0.6) !important;
  }

  /* --------------------------------------------------------------------------
     9. E-COMMERCE & PRICING SPECIFICATIONS
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"] article ul,
  .anthropomorphic-styled-container article ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] article ul li,
  .anthropomorphic-styled-container article ul li {
    display: flex !important;
    align-items: center !important;
    gap: 0.55rem !important;
    font-size: 0.9375rem !important;
    color: var(--anthro-text-secondary) !important;
    padding: 0.35rem 0 !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] article ul li::before,
  .anthropomorphic-styled-container article ul li::before {
    content: '✓' !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 18px !important;
    height: 18px !important;
    border-radius: 50% !important;
    background-color: var(--anthro-mint-subtle) !important;
    color: var(--anthro-mint) !important;
    font-size: 0.75rem !important;
    font-weight: 800 !important;
    flex-shrink: 0 !important;
  }

  /* Featured Pricing Tier */
  .lab-styled-preview[data-style="anthropomorphic"] article:nth-child(2),
  .anthropomorphic-styled-container article:nth-child(2) {
    border-color: var(--anthro-coral) !important;
    box-shadow: 0 14px 34px -4px rgba(255, 107, 87, 0.2) !important;
  }

  /* Images / Media in Cards */
  .lab-styled-preview[data-style="anthropomorphic"] img,
  .anthropomorphic-styled-container img {
    max-width: 100% !important;
    height: auto !important;
    border-radius: 18px !important;
    border: 1.5px solid var(--anthro-border) !important;
    box-shadow: var(--anthro-shadow-sm) !important;
  }

  /* --------------------------------------------------------------------------
     10. FOOTER & CLOSING
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"] footer,
  .anthropomorphic-styled-container footer {
    margin-top: 3.5rem !important;
    padding-top: 2rem !important;
    border-top: 1.5px solid var(--anthro-border) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    flex-wrap: wrap !important;
    gap: 1rem !important;
    color: var(--anthro-text-muted) !important;
    font-size: 0.875rem !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] footer p,
  .anthropomorphic-styled-container footer p {
    margin: 0 !important;
    color: var(--anthro-text-muted) !important;
    font-size: 0.875rem !important;
  }

  /* --------------------------------------------------------------------------
     11. RESPONSIVE MOBILE ADAPTATIONS (<= 768px)
     -------------------------------------------------------------------------- */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="anthropomorphic"],
    .anthropomorphic-styled-container {
      padding: 1.5rem 1rem !important;
      border-radius: 14px !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] h1,
    .anthropomorphic-styled-container h1 {
      font-size: 2rem !important;
      line-height: 1.2 !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] h2,
    .anthropomorphic-styled-container h2 {
      font-size: 1.6rem !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] nav,
    .anthropomorphic-styled-container nav {
      border-radius: 16px !important;
      padding: 0.5rem 0.75rem !important;
      gap: 0.35rem !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] nav a,
    .anthropomorphic-styled-container nav a {
      font-size: 0.8125rem !important;
      padding: 0.35rem 0.65rem !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] article,
    .lab-styled-preview[data-style="anthropomorphic"] .card,
    .anthropomorphic-styled-container article,
    .anthropomorphic-styled-container .card {
      padding: 1.25rem !important;
      border-radius: 18px !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] button,
    .lab-styled-preview[data-style="anthropomorphic"] input[type="submit"],
    .anthropomorphic-styled-container button,
    .anthropomorphic-styled-container input[type="submit"] {
      width: 100% !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] table,
    .anthropomorphic-styled-container table {
      display: block !important;
      overflow-x: auto !important;
      -webkit-overflow-scrolling: touch !important;
    }
  }
`;
