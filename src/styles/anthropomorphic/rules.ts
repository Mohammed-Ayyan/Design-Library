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
  .anthropomorphic-styled-container,
  .style-anthropomorphic,
  [data-style="anthropomorphic"],
  .ds-scope[data-style-id="anthropomorphic"],
  .style-anthropomorphic-ui,
  [data-style="anthropomorphic-ui"],
  .ds-scope[data-style-id="anthropomorphic-ui"] {
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
  .anthropomorphic-styled-container *,
  .style-anthropomorphic *,
  [data-style="anthropomorphic"] *,
  .ds-scope[data-style-id="anthropomorphic"] *,
  .style-anthropomorphic-ui *,
  [data-style="anthropomorphic-ui"] *,
  .ds-scope[data-style-id="anthropomorphic-ui"] * {
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
  .style-anthropomorphic h1,
  [data-style="anthropomorphic"] h1,
  .ds-scope[data-style-id="anthropomorphic"] h1,
  .style-anthropomorphic-ui h1,
  [data-style="anthropomorphic-ui"] h1,
  .ds-scope[data-style-id="anthropomorphic-ui"] h1,
  .anthropomorphic-styled-container h2,
  .style-anthropomorphic h2,
  [data-style="anthropomorphic"] h2,
  .ds-scope[data-style-id="anthropomorphic"] h2,
  .style-anthropomorphic-ui h2,
  [data-style="anthropomorphic-ui"] h2,
  .ds-scope[data-style-id="anthropomorphic-ui"] h2,
  .anthropomorphic-styled-container h3,
  .style-anthropomorphic h3,
  [data-style="anthropomorphic"] h3,
  .ds-scope[data-style-id="anthropomorphic"] h3,
  .style-anthropomorphic-ui h3,
  [data-style="anthropomorphic-ui"] h3,
  .ds-scope[data-style-id="anthropomorphic-ui"] h3,
  .anthropomorphic-styled-container h4,
  .style-anthropomorphic h4,
  [data-style="anthropomorphic"] h4,
  .ds-scope[data-style-id="anthropomorphic"] h4,
  .style-anthropomorphic-ui h4,
  [data-style="anthropomorphic-ui"] h4,
  .ds-scope[data-style-id="anthropomorphic-ui"] h4,
  .anthropomorphic-styled-container h5,
  .style-anthropomorphic h5,
  [data-style="anthropomorphic"] h5,
  .ds-scope[data-style-id="anthropomorphic"] h5,
  .style-anthropomorphic-ui h5,
  [data-style="anthropomorphic-ui"] h5,
  .ds-scope[data-style-id="anthropomorphic-ui"] h5,
  .anthropomorphic-styled-container h6,
  .style-anthropomorphic h6,
  [data-style="anthropomorphic"] h6,
  .ds-scope[data-style-id="anthropomorphic"] h6,
  .style-anthropomorphic-ui h6,
  [data-style="anthropomorphic-ui"] h6,
  .ds-scope[data-style-id="anthropomorphic-ui"] h6 {
    font-family: 'Outfit', 'Nunito', -apple-system, sans-serif !important;
    color: var(--anthro-text) !important;
    letter-spacing: -0.025em !important;
    font-weight: 800 !important;
    line-height: 1.2 !important;
    margin-top: 0 !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] h1,
  .anthropomorphic-styled-container h1,
  .style-anthropomorphic h1,
  [data-style="anthropomorphic"] h1,
  .ds-scope[data-style-id="anthropomorphic"] h1,
  .style-anthropomorphic-ui h1,
  [data-style="anthropomorphic-ui"] h1,
  .ds-scope[data-style-id="anthropomorphic-ui"] h1 {
    font-size: 2.75rem !important;
    font-weight: 800 !important;
    line-height: 1.15 !important;
    letter-spacing: -0.035em !important;
    margin-bottom: 1.25rem !important;
    color: var(--anthro-text) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] h2,
  .anthropomorphic-styled-container h2,
  .style-anthropomorphic h2,
  [data-style="anthropomorphic"] h2,
  .ds-scope[data-style-id="anthropomorphic"] h2,
  .style-anthropomorphic-ui h2,
  [data-style="anthropomorphic-ui"] h2,
  .ds-scope[data-style-id="anthropomorphic-ui"] h2 {
    font-size: 2rem !important;
    font-weight: 700 !important;
    line-height: 1.22 !important;
    letter-spacing: -0.025em !important;
    margin-bottom: 1rem !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] h3,
  .anthropomorphic-styled-container h3,
  .style-anthropomorphic h3,
  [data-style="anthropomorphic"] h3,
  .ds-scope[data-style-id="anthropomorphic"] h3,
  .style-anthropomorphic-ui h3,
  [data-style="anthropomorphic-ui"] h3,
  .ds-scope[data-style-id="anthropomorphic-ui"] h3 {
    font-size: 1.35rem !important;
    font-weight: 700 !important;
    line-height: 1.3 !important;
    margin-bottom: 0.65rem !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] h4,
  .anthropomorphic-styled-container h4,
  .style-anthropomorphic h4,
  [data-style="anthropomorphic"] h4,
  .ds-scope[data-style-id="anthropomorphic"] h4,
  .style-anthropomorphic-ui h4,
  [data-style="anthropomorphic-ui"] h4,
  .ds-scope[data-style-id="anthropomorphic-ui"] h4 {
    font-size: 1.125rem !important;
    font-weight: 700 !important;
    margin-bottom: 0.5rem !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] p,
  .anthropomorphic-styled-container p,
  .style-anthropomorphic p,
  [data-style="anthropomorphic"] p,
  .ds-scope[data-style-id="anthropomorphic"] p,
  .style-anthropomorphic-ui p,
  [data-style="anthropomorphic-ui"] p,
  .ds-scope[data-style-id="anthropomorphic-ui"] p {
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
  .style-anthropomorphic header > p:first-child,
  [data-style="anthropomorphic"] header > p:first-child,
  .ds-scope[data-style-id="anthropomorphic"] header > p:first-child,
  .style-anthropomorphic-ui header > p:first-child,
  [data-style="anthropomorphic-ui"] header > p:first-child,
  .ds-scope[data-style-id="anthropomorphic-ui"] header > p:first-child,
  .anthropomorphic-styled-container section > p:first-child,
  .style-anthropomorphic section > p:first-child,
  [data-style="anthropomorphic"] section > p:first-child,
  .ds-scope[data-style-id="anthropomorphic"] section > p:first-child,
  .style-anthropomorphic-ui section > p:first-child,
  [data-style="anthropomorphic-ui"] section > p:first-child,
  .ds-scope[data-style-id="anthropomorphic-ui"] section > p:first-child {
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
  .style-anthropomorphic header > p:first-child::before,
  [data-style="anthropomorphic"] header > p:first-child::before,
  .ds-scope[data-style-id="anthropomorphic"] header > p:first-child::before,
  .style-anthropomorphic-ui header > p:first-child::before,
  [data-style="anthropomorphic-ui"] header > p:first-child::before,
  .ds-scope[data-style-id="anthropomorphic-ui"] header > p:first-child::before,
  .anthropomorphic-styled-container section > p:first-child::before,
  .style-anthropomorphic section > p:first-child::before,
  [data-style="anthropomorphic"] section > p:first-child::before,
  .ds-scope[data-style-id="anthropomorphic"] section > p:first-child::before,
  .style-anthropomorphic-ui section > p:first-child::before,
  [data-style="anthropomorphic-ui"] section > p:first-child::before,
  .ds-scope[data-style-id="anthropomorphic-ui"] section > p:first-child::before {
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
  .anthropomorphic-styled-container nav,
  .style-anthropomorphic nav,
  [data-style="anthropomorphic"] nav,
  .ds-scope[data-style-id="anthropomorphic"] nav,
  .style-anthropomorphic-ui nav,
  [data-style="anthropomorphic-ui"] nav,
  .ds-scope[data-style-id="anthropomorphic-ui"] nav {
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
  .anthropomorphic-styled-container nav a,
  .style-anthropomorphic nav a,
  [data-style="anthropomorphic"] nav a,
  .ds-scope[data-style-id="anthropomorphic"] nav a,
  .style-anthropomorphic-ui nav a,
  [data-style="anthropomorphic-ui"] nav a,
  .ds-scope[data-style-id="anthropomorphic-ui"] nav a {
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
  .anthropomorphic-styled-container nav a:hover,
  .style-anthropomorphic nav a:hover,
  [data-style="anthropomorphic"] nav a:hover,
  .ds-scope[data-style-id="anthropomorphic"] nav a:hover,
  .style-anthropomorphic-ui nav a:hover,
  [data-style="anthropomorphic-ui"] nav a:hover,
  .ds-scope[data-style-id="anthropomorphic-ui"] nav a:hover {
    background-color: var(--anthro-coral-subtle) !important;
    color: var(--anthro-coral) !important;
    transform: translateY(-2px) scale(1.02) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] nav a:first-child,
  .anthropomorphic-styled-container nav a:first-child,
  .style-anthropomorphic nav a:first-child,
  [data-style="anthropomorphic"] nav a:first-child,
  .ds-scope[data-style-id="anthropomorphic"] nav a:first-child,
  .style-anthropomorphic-ui nav a:first-child,
  [data-style="anthropomorphic-ui"] nav a:first-child,
  .ds-scope[data-style-id="anthropomorphic-ui"] nav a:first-child {
    background-color: var(--anthro-coral-subtle) !important;
    color: var(--anthro-coral) !important;
    font-weight: 700 !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] nav a:first-child::before,
  .anthropomorphic-styled-container nav a:first-child::before,
  .style-anthropomorphic nav a:first-child::before,
  [data-style="anthropomorphic"] nav a:first-child::before,
  .ds-scope[data-style-id="anthropomorphic"] nav a:first-child::before,
  .style-anthropomorphic-ui nav a:first-child::before,
  [data-style="anthropomorphic-ui"] nav a:first-child::before,
  .ds-scope[data-style-id="anthropomorphic-ui"] nav a:first-child::before {
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
  .style-anthropomorphic button,
  [data-style="anthropomorphic"] button,
  .ds-scope[data-style-id="anthropomorphic"] button,
  .style-anthropomorphic-ui button,
  [data-style="anthropomorphic-ui"] button,
  .ds-scope[data-style-id="anthropomorphic-ui"] button,
  .anthropomorphic-styled-container input[type="submit"],
  .style-anthropomorphic input[type="submit"],
  [data-style="anthropomorphic"] input[type="submit"],
  .ds-scope[data-style-id="anthropomorphic"] input[type="submit"],
  .style-anthropomorphic-ui input[type="submit"],
  [data-style="anthropomorphic-ui"] input[type="submit"],
  .ds-scope[data-style-id="anthropomorphic-ui"] input[type="submit"] {
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
  .style-anthropomorphic button:hover,
  [data-style="anthropomorphic"] button:hover,
  .ds-scope[data-style-id="anthropomorphic"] button:hover,
  .style-anthropomorphic-ui button:hover,
  [data-style="anthropomorphic-ui"] button:hover,
  .ds-scope[data-style-id="anthropomorphic-ui"] button:hover,
  .anthropomorphic-styled-container input[type="submit"]:hover,
  .style-anthropomorphic input[type="submit"]:hover,
  [data-style="anthropomorphic"] input[type="submit"]:hover,
  .ds-scope[data-style-id="anthropomorphic"] input[type="submit"]:hover,
  .style-anthropomorphic-ui input[type="submit"]:hover,
  [data-style="anthropomorphic-ui"] input[type="submit"]:hover,
  .ds-scope[data-style-id="anthropomorphic-ui"] input[type="submit"]:hover {
    background-color: var(--anthro-coral-hover) !important;
    transform: translateY(-2px) scale(1.02) !important;
    box-shadow: 0 10px 24px -3px rgba(255, 107, 87, 0.48) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] button:active,
  .lab-styled-preview[data-style="anthropomorphic"] input[type="submit"]:active,
  .anthropomorphic-styled-container button:active,
  .style-anthropomorphic button:active,
  [data-style="anthropomorphic"] button:active,
  .ds-scope[data-style-id="anthropomorphic"] button:active,
  .style-anthropomorphic-ui button:active,
  [data-style="anthropomorphic-ui"] button:active,
  .ds-scope[data-style-id="anthropomorphic-ui"] button:active,
  .anthropomorphic-styled-container input[type="submit"]:active,
  .style-anthropomorphic input[type="submit"]:active,
  [data-style="anthropomorphic"] input[type="submit"]:active,
  .ds-scope[data-style-id="anthropomorphic"] input[type="submit"]:active,
  .style-anthropomorphic-ui input[type="submit"]:active,
  [data-style="anthropomorphic-ui"] input[type="submit"]:active,
  .ds-scope[data-style-id="anthropomorphic-ui"] input[type="submit"]:active {
    transform: translateY(1px) scale(0.98) !important;
    box-shadow: 0 3px 8px rgba(255, 107, 87, 0.3) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] button:focus-visible,
  .lab-styled-preview[data-style="anthropomorphic"] input[type="submit"]:focus-visible,
  .anthropomorphic-styled-container button:focus-visible,
  .style-anthropomorphic button:focus-visible,
  [data-style="anthropomorphic"] button:focus-visible,
  .ds-scope[data-style-id="anthropomorphic"] button:focus-visible,
  .style-anthropomorphic-ui button:focus-visible,
  [data-style="anthropomorphic-ui"] button:focus-visible,
  .ds-scope[data-style-id="anthropomorphic-ui"] button:focus-visible,
  .anthropomorphic-styled-container input[type="submit"]:focus-visible,
  .style-anthropomorphic input[type="submit"]:focus-visible,
  [data-style="anthropomorphic"] input[type="submit"]:focus-visible,
  .ds-scope[data-style-id="anthropomorphic"] input[type="submit"]:focus-visible,
  .style-anthropomorphic-ui input[type="submit"]:focus-visible,
  [data-style="anthropomorphic-ui"] input[type="submit"]:focus-visible,
  .ds-scope[data-style-id="anthropomorphic-ui"] input[type="submit"]:focus-visible {
    outline: none !important;
    box-shadow: 0 0 0 4px rgba(255, 107, 87, 0.3) !important;
  }

  /* Secondary button variation */
  .lab-styled-preview[data-style="anthropomorphic"] button:nth-of-type(2),
  .anthropomorphic-styled-container button:nth-of-type(2),
  .style-anthropomorphic button:nth-of-type(2),
  [data-style="anthropomorphic"] button:nth-of-type(2),
  .ds-scope[data-style-id="anthropomorphic"] button:nth-of-type(2),
  .style-anthropomorphic-ui button:nth-of-type(2),
  [data-style="anthropomorphic-ui"] button:nth-of-type(2),
  .ds-scope[data-style-id="anthropomorphic-ui"] button:nth-of-type(2) {
    background-color: var(--anthro-sky-subtle) !important;
    color: var(--anthro-sky) !important;
    box-shadow: 0 4px 14px rgba(74, 128, 232, 0.16) !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] button:nth-of-type(2):hover,
  .anthropomorphic-styled-container button:nth-of-type(2):hover,
  .style-anthropomorphic button:nth-of-type(2):hover,
  [data-style="anthropomorphic"] button:nth-of-type(2):hover,
  .ds-scope[data-style-id="anthropomorphic"] button:nth-of-type(2):hover,
  .style-anthropomorphic-ui button:nth-of-type(2):hover,
  [data-style="anthropomorphic-ui"] button:nth-of-type(2):hover,
  .ds-scope[data-style-id="anthropomorphic-ui"] button:nth-of-type(2):hover {
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
  .style-anthropomorphic article,
  [data-style="anthropomorphic"] article,
  .ds-scope[data-style-id="anthropomorphic"] article,
  .style-anthropomorphic-ui article,
  [data-style="anthropomorphic-ui"] article,
  .ds-scope[data-style-id="anthropomorphic-ui"] article,
  .anthropomorphic-styled-container .card,
  .style-anthropomorphic .card,
  [data-style="anthropomorphic"] .card,
  .ds-scope[data-style-id="anthropomorphic"] .card,
  .style-anthropomorphic-ui .card,
  [data-style="anthropomorphic-ui"] .card,
  .ds-scope[data-style-id="anthropomorphic-ui"] .card {
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
  .anthropomorphic-styled-container article:nth-child(3n+1),
  .style-anthropomorphic article:nth-child(3n+1),
  [data-style="anthropomorphic"] article:nth-child(3n+1),
  .ds-scope[data-style-id="anthropomorphic"] article:nth-child(3n+1),
  .style-anthropomorphic-ui article:nth-child(3n+1),
  [data-style="anthropomorphic-ui"] article:nth-child(3n+1),
  .ds-scope[data-style-id="anthropomorphic-ui"] article:nth-child(3n+1) {
    border-radius: 26px 20px 28px 22px !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] article:nth-child(3n+2),
  .anthropomorphic-styled-container article:nth-child(3n+2),
  .style-anthropomorphic article:nth-child(3n+2),
  [data-style="anthropomorphic"] article:nth-child(3n+2),
  .ds-scope[data-style-id="anthropomorphic"] article:nth-child(3n+2),
  .style-anthropomorphic-ui article:nth-child(3n+2),
  [data-style="anthropomorphic-ui"] article:nth-child(3n+2),
  .ds-scope[data-style-id="anthropomorphic-ui"] article:nth-child(3n+2) {
    border-radius: 20px 28px 22px 28px !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] article:nth-child(3n+3),
  .anthropomorphic-styled-container article:nth-child(3n+3),
  .style-anthropomorphic article:nth-child(3n+3),
  [data-style="anthropomorphic"] article:nth-child(3n+3),
  .ds-scope[data-style-id="anthropomorphic"] article:nth-child(3n+3),
  .style-anthropomorphic-ui article:nth-child(3n+3),
  [data-style="anthropomorphic-ui"] article:nth-child(3n+3),
  .ds-scope[data-style-id="anthropomorphic-ui"] article:nth-child(3n+3) {
    border-radius: 28px 22px 24px 30px !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] article:hover,
  .lab-styled-preview[data-style="anthropomorphic"] .card:hover,
  .anthropomorphic-styled-container article:hover,
  .style-anthropomorphic article:hover,
  [data-style="anthropomorphic"] article:hover,
  .ds-scope[data-style-id="anthropomorphic"] article:hover,
  .style-anthropomorphic-ui article:hover,
  [data-style="anthropomorphic-ui"] article:hover,
  .ds-scope[data-style-id="anthropomorphic-ui"] article:hover,
  .anthropomorphic-styled-container .card:hover,
  .style-anthropomorphic .card:hover,
  [data-style="anthropomorphic"] .card:hover,
  .ds-scope[data-style-id="anthropomorphic"] .card:hover,
  .style-anthropomorphic-ui .card:hover,
  [data-style="anthropomorphic-ui"] .card:hover,
  .ds-scope[data-style-id="anthropomorphic-ui"] .card:hover {
    transform: translateY(-3px) scale(1.01) !important;
    box-shadow: var(--anthro-shadow-lg) !important;
    border-color: rgba(255, 107, 87, 0.45) !important;
  }

  /* Price tags in cards */
  .lab-styled-preview[data-style="anthropomorphic"] article strong,
  .lab-styled-preview[data-style="anthropomorphic"] article b,
  .anthropomorphic-styled-container article strong,
  .style-anthropomorphic article strong,
  [data-style="anthropomorphic"] article strong,
  .ds-scope[data-style-id="anthropomorphic"] article strong,
  .style-anthropomorphic-ui article strong,
  [data-style="anthropomorphic-ui"] article strong,
  .ds-scope[data-style-id="anthropomorphic-ui"] article strong,
  .anthropomorphic-styled-container article b,
  .style-anthropomorphic article b,
  [data-style="anthropomorphic"] article b,
  .ds-scope[data-style-id="anthropomorphic"] article b,
  .style-anthropomorphic-ui article b,
  [data-style="anthropomorphic-ui"] article b,
  .ds-scope[data-style-id="anthropomorphic-ui"] article b {
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
  .anthropomorphic-styled-container main > article,
  .style-anthropomorphic main > article,
  [data-style="anthropomorphic"] main > article,
  .ds-scope[data-style-id="anthropomorphic"] main > article,
  .style-anthropomorphic-ui main > article,
  [data-style="anthropomorphic-ui"] main > article,
  .ds-scope[data-style-id="anthropomorphic-ui"] main > article {
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
  .anthropomorphic-styled-container blockquote,
  .style-anthropomorphic blockquote,
  [data-style="anthropomorphic"] blockquote,
  .ds-scope[data-style-id="anthropomorphic"] blockquote,
  .style-anthropomorphic-ui blockquote,
  [data-style="anthropomorphic-ui"] blockquote,
  .ds-scope[data-style-id="anthropomorphic-ui"] blockquote {
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
  .anthropomorphic-styled-container blockquote::before,
  .style-anthropomorphic blockquote::before,
  [data-style="anthropomorphic"] blockquote::before,
  .ds-scope[data-style-id="anthropomorphic"] blockquote::before,
  .style-anthropomorphic-ui blockquote::before,
  [data-style="anthropomorphic-ui"] blockquote::before,
  .ds-scope[data-style-id="anthropomorphic-ui"] blockquote::before {
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
  .anthropomorphic-styled-container form,
  .style-anthropomorphic form,
  [data-style="anthropomorphic"] form,
  .ds-scope[data-style-id="anthropomorphic"] form,
  .style-anthropomorphic-ui form,
  [data-style="anthropomorphic-ui"] form,
  .ds-scope[data-style-id="anthropomorphic-ui"] form {
    background-color: var(--anthro-surface) !important;
    border: 1.5px solid var(--anthro-border) !important;
    border-radius: var(--anthro-radius-md) !important;
    padding: 2.25rem !important;
    box-shadow: var(--anthro-shadow-md) !important;
    max-width: 580px !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] label,
  .anthropomorphic-styled-container label,
  .style-anthropomorphic label,
  [data-style="anthropomorphic"] label,
  .ds-scope[data-style-id="anthropomorphic"] label,
  .style-anthropomorphic-ui label,
  [data-style="anthropomorphic-ui"] label,
  .ds-scope[data-style-id="anthropomorphic-ui"] label {
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
  .style-anthropomorphic input[type="text"],
  [data-style="anthropomorphic"] input[type="text"],
  .ds-scope[data-style-id="anthropomorphic"] input[type="text"],
  .style-anthropomorphic-ui input[type="text"],
  [data-style="anthropomorphic-ui"] input[type="text"],
  .ds-scope[data-style-id="anthropomorphic-ui"] input[type="text"],
  .anthropomorphic-styled-container input[type="email"],
  .style-anthropomorphic input[type="email"],
  [data-style="anthropomorphic"] input[type="email"],
  .ds-scope[data-style-id="anthropomorphic"] input[type="email"],
  .style-anthropomorphic-ui input[type="email"],
  [data-style="anthropomorphic-ui"] input[type="email"],
  .ds-scope[data-style-id="anthropomorphic-ui"] input[type="email"],
  .anthropomorphic-styled-container input[type="password"],
  .style-anthropomorphic input[type="password"],
  [data-style="anthropomorphic"] input[type="password"],
  .ds-scope[data-style-id="anthropomorphic"] input[type="password"],
  .style-anthropomorphic-ui input[type="password"],
  [data-style="anthropomorphic-ui"] input[type="password"],
  .ds-scope[data-style-id="anthropomorphic-ui"] input[type="password"],
  .anthropomorphic-styled-container input[type="number"],
  .style-anthropomorphic input[type="number"],
  [data-style="anthropomorphic"] input[type="number"],
  .ds-scope[data-style-id="anthropomorphic"] input[type="number"],
  .style-anthropomorphic-ui input[type="number"],
  [data-style="anthropomorphic-ui"] input[type="number"],
  .ds-scope[data-style-id="anthropomorphic-ui"] input[type="number"],
  .anthropomorphic-styled-container input[type="search"],
  .style-anthropomorphic input[type="search"],
  [data-style="anthropomorphic"] input[type="search"],
  .ds-scope[data-style-id="anthropomorphic"] input[type="search"],
  .style-anthropomorphic-ui input[type="search"],
  [data-style="anthropomorphic-ui"] input[type="search"],
  .ds-scope[data-style-id="anthropomorphic-ui"] input[type="search"],
  .anthropomorphic-styled-container input[type="tel"],
  .style-anthropomorphic input[type="tel"],
  [data-style="anthropomorphic"] input[type="tel"],
  .ds-scope[data-style-id="anthropomorphic"] input[type="tel"],
  .style-anthropomorphic-ui input[type="tel"],
  [data-style="anthropomorphic-ui"] input[type="tel"],
  .ds-scope[data-style-id="anthropomorphic-ui"] input[type="tel"],
  .anthropomorphic-styled-container select,
  .style-anthropomorphic select,
  [data-style="anthropomorphic"] select,
  .ds-scope[data-style-id="anthropomorphic"] select,
  .style-anthropomorphic-ui select,
  [data-style="anthropomorphic-ui"] select,
  .ds-scope[data-style-id="anthropomorphic-ui"] select,
  .anthropomorphic-styled-container textarea,
  .style-anthropomorphic textarea,
  [data-style="anthropomorphic"] textarea,
  .ds-scope[data-style-id="anthropomorphic"] textarea,
  .style-anthropomorphic-ui textarea,
  [data-style="anthropomorphic-ui"] textarea,
  .ds-scope[data-style-id="anthropomorphic-ui"] textarea {
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
  .style-anthropomorphic input:focus,
  [data-style="anthropomorphic"] input:focus,
  .ds-scope[data-style-id="anthropomorphic"] input:focus,
  .style-anthropomorphic-ui input:focus,
  [data-style="anthropomorphic-ui"] input:focus,
  .ds-scope[data-style-id="anthropomorphic-ui"] input:focus,
  .anthropomorphic-styled-container select:focus,
  .style-anthropomorphic select:focus,
  [data-style="anthropomorphic"] select:focus,
  .ds-scope[data-style-id="anthropomorphic"] select:focus,
  .style-anthropomorphic-ui select:focus,
  [data-style="anthropomorphic-ui"] select:focus,
  .ds-scope[data-style-id="anthropomorphic-ui"] select:focus,
  .anthropomorphic-styled-container textarea:focus,
  .style-anthropomorphic textarea:focus,
  [data-style="anthropomorphic"] textarea:focus,
  .ds-scope[data-style-id="anthropomorphic"] textarea:focus,
  .style-anthropomorphic-ui textarea:focus,
  [data-style="anthropomorphic-ui"] textarea:focus,
  .ds-scope[data-style-id="anthropomorphic-ui"] textarea:focus {
    border-color: var(--anthro-sky) !important;
    box-shadow: 0 0 0 4px rgba(74, 128, 232, 0.18) !important;
    outline: none !important;
    background-color: #ffffff !important;
  }

  /* --------------------------------------------------------------------------
     8. DASHBOARD & DATA TABLES (Friendly Telemetry, Rounded Containers)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="anthropomorphic"] table,
  .anthropomorphic-styled-container table,
  .style-anthropomorphic table,
  [data-style="anthropomorphic"] table,
  .ds-scope[data-style-id="anthropomorphic"] table,
  .style-anthropomorphic-ui table,
  [data-style="anthropomorphic-ui"] table,
  .ds-scope[data-style-id="anthropomorphic-ui"] table {
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
  .anthropomorphic-styled-container th,
  .style-anthropomorphic th,
  [data-style="anthropomorphic"] th,
  .ds-scope[data-style-id="anthropomorphic"] th,
  .style-anthropomorphic-ui th,
  [data-style="anthropomorphic-ui"] th,
  .ds-scope[data-style-id="anthropomorphic-ui"] th {
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
  .anthropomorphic-styled-container td,
  .style-anthropomorphic td,
  [data-style="anthropomorphic"] td,
  .ds-scope[data-style-id="anthropomorphic"] td,
  .style-anthropomorphic-ui td,
  [data-style="anthropomorphic-ui"] td,
  .ds-scope[data-style-id="anthropomorphic-ui"] td {
    padding: 0.9rem 1.25rem !important;
    border-bottom: 1px solid rgba(215, 203, 188, 0.4) !important;
    color: var(--anthro-text-secondary) !important;
    font-size: 0.9375rem !important;
    transition: background-color 150ms ease !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] tbody tr:last-child td,
  .anthropomorphic-styled-container tbody tr:last-child td,
  .style-anthropomorphic tbody tr:last-child td,
  [data-style="anthropomorphic"] tbody tr:last-child td,
  .ds-scope[data-style-id="anthropomorphic"] tbody tr:last-child td,
  .style-anthropomorphic-ui tbody tr:last-child td,
  [data-style="anthropomorphic-ui"] tbody tr:last-child td,
  .ds-scope[data-style-id="anthropomorphic-ui"] tbody tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] tbody tr:hover td,
  .anthropomorphic-styled-container tbody tr:hover td,
  .style-anthropomorphic tbody tr:hover td,
  [data-style="anthropomorphic"] tbody tr:hover td,
  .ds-scope[data-style-id="anthropomorphic"] tbody tr:hover td,
  .style-anthropomorphic-ui tbody tr:hover td,
  [data-style="anthropomorphic-ui"] tbody tr:hover td,
  .ds-scope[data-style-id="anthropomorphic-ui"] tbody tr:hover td {
    background-color: rgba(255, 245, 242, 0.6) !important;
  }

  /* Monospace metadata chips in tables & telemetry */
  .lab-styled-preview[data-style="anthropomorphic"] code,
  .anthropomorphic-styled-container code,
  .style-anthropomorphic code,
  [data-style="anthropomorphic"] code,
  .ds-scope[data-style-id="anthropomorphic"] code,
  .style-anthropomorphic-ui code,
  [data-style="anthropomorphic-ui"] code,
  .ds-scope[data-style-id="anthropomorphic-ui"] code {
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
  .anthropomorphic-styled-container article ul,
  .style-anthropomorphic article ul,
  [data-style="anthropomorphic"] article ul,
  .ds-scope[data-style-id="anthropomorphic"] article ul,
  .style-anthropomorphic-ui article ul,
  [data-style="anthropomorphic-ui"] article ul,
  .ds-scope[data-style-id="anthropomorphic-ui"] article ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] article ul li,
  .anthropomorphic-styled-container article ul li,
  .style-anthropomorphic article ul li,
  [data-style="anthropomorphic"] article ul li,
  .ds-scope[data-style-id="anthropomorphic"] article ul li,
  .style-anthropomorphic-ui article ul li,
  [data-style="anthropomorphic-ui"] article ul li,
  .ds-scope[data-style-id="anthropomorphic-ui"] article ul li {
    display: flex !important;
    align-items: center !important;
    gap: 0.55rem !important;
    font-size: 0.9375rem !important;
    color: var(--anthro-text-secondary) !important;
    padding: 0.35rem 0 !important;
  }

  .lab-styled-preview[data-style="anthropomorphic"] article ul li::before,
  .anthropomorphic-styled-container article ul li::before,
  .style-anthropomorphic article ul li::before,
  [data-style="anthropomorphic"] article ul li::before,
  .ds-scope[data-style-id="anthropomorphic"] article ul li::before,
  .style-anthropomorphic-ui article ul li::before,
  [data-style="anthropomorphic-ui"] article ul li::before,
  .ds-scope[data-style-id="anthropomorphic-ui"] article ul li::before {
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
  .anthropomorphic-styled-container article:nth-child(2),
  .style-anthropomorphic article:nth-child(2),
  [data-style="anthropomorphic"] article:nth-child(2),
  .ds-scope[data-style-id="anthropomorphic"] article:nth-child(2),
  .style-anthropomorphic-ui article:nth-child(2),
  [data-style="anthropomorphic-ui"] article:nth-child(2),
  .ds-scope[data-style-id="anthropomorphic-ui"] article:nth-child(2) {
    border-color: var(--anthro-coral) !important;
    box-shadow: 0 14px 34px -4px rgba(255, 107, 87, 0.2) !important;
  }

  /* Images / Media in Cards */
  .lab-styled-preview[data-style="anthropomorphic"] img,
  .anthropomorphic-styled-container img,
  .style-anthropomorphic img,
  [data-style="anthropomorphic"] img,
  .ds-scope[data-style-id="anthropomorphic"] img,
  .style-anthropomorphic-ui img,
  [data-style="anthropomorphic-ui"] img,
  .ds-scope[data-style-id="anthropomorphic-ui"] img {
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
  .anthropomorphic-styled-container footer,
  .style-anthropomorphic footer,
  [data-style="anthropomorphic"] footer,
  .ds-scope[data-style-id="anthropomorphic"] footer,
  .style-anthropomorphic-ui footer,
  [data-style="anthropomorphic-ui"] footer,
  .ds-scope[data-style-id="anthropomorphic-ui"] footer {
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
  .anthropomorphic-styled-container footer p,
  .style-anthropomorphic footer p,
  [data-style="anthropomorphic"] footer p,
  .ds-scope[data-style-id="anthropomorphic"] footer p,
  .style-anthropomorphic-ui footer p,
  [data-style="anthropomorphic-ui"] footer p,
  .ds-scope[data-style-id="anthropomorphic-ui"] footer p {
    margin: 0 !important;
    color: var(--anthro-text-muted) !important;
    font-size: 0.875rem !important;
  }

  /* --------------------------------------------------------------------------
     11. RESPONSIVE MOBILE ADAPTATIONS (<= 768px)
     -------------------------------------------------------------------------- */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="anthropomorphic"],
    .anthropomorphic-styled-container,
    .style-anthropomorphic,
    [data-style="anthropomorphic"],
    .ds-scope[data-style-id="anthropomorphic"],
    .style-anthropomorphic-ui,
    [data-style="anthropomorphic-ui"],
    .ds-scope[data-style-id="anthropomorphic-ui"] {
      padding: 1.5rem 1rem !important;
      border-radius: 14px !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] h1,
    .anthropomorphic-styled-container h1,
    .style-anthropomorphic h1,
    [data-style="anthropomorphic"] h1,
    .ds-scope[data-style-id="anthropomorphic"] h1,
    .style-anthropomorphic-ui h1,
    [data-style="anthropomorphic-ui"] h1,
    .ds-scope[data-style-id="anthropomorphic-ui"] h1 {
      font-size: 2rem !important;
      line-height: 1.2 !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] h2,
    .anthropomorphic-styled-container h2,
    .style-anthropomorphic h2,
    [data-style="anthropomorphic"] h2,
    .ds-scope[data-style-id="anthropomorphic"] h2,
    .style-anthropomorphic-ui h2,
    [data-style="anthropomorphic-ui"] h2,
    .ds-scope[data-style-id="anthropomorphic-ui"] h2 {
      font-size: 1.6rem !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] nav,
    .anthropomorphic-styled-container nav,
    .style-anthropomorphic nav,
    [data-style="anthropomorphic"] nav,
    .ds-scope[data-style-id="anthropomorphic"] nav,
    .style-anthropomorphic-ui nav,
    [data-style="anthropomorphic-ui"] nav,
    .ds-scope[data-style-id="anthropomorphic-ui"] nav {
      border-radius: 16px !important;
      padding: 0.5rem 0.75rem !important;
      gap: 0.35rem !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] nav a,
    .anthropomorphic-styled-container nav a,
    .style-anthropomorphic nav a,
    [data-style="anthropomorphic"] nav a,
    .ds-scope[data-style-id="anthropomorphic"] nav a,
    .style-anthropomorphic-ui nav a,
    [data-style="anthropomorphic-ui"] nav a,
    .ds-scope[data-style-id="anthropomorphic-ui"] nav a {
      font-size: 0.8125rem !important;
      padding: 0.35rem 0.65rem !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] article,
    .lab-styled-preview[data-style="anthropomorphic"] .card,
    .anthropomorphic-styled-container article,
    .style-anthropomorphic article,
    [data-style="anthropomorphic"] article,
    .ds-scope[data-style-id="anthropomorphic"] article,
    .style-anthropomorphic-ui article,
    [data-style="anthropomorphic-ui"] article,
    .ds-scope[data-style-id="anthropomorphic-ui"] article,
    .anthropomorphic-styled-container .card,
    .style-anthropomorphic .card,
    [data-style="anthropomorphic"] .card,
    .ds-scope[data-style-id="anthropomorphic"] .card,
    .style-anthropomorphic-ui .card,
    [data-style="anthropomorphic-ui"] .card,
    .ds-scope[data-style-id="anthropomorphic-ui"] .card {
      padding: 1.25rem !important;
      border-radius: 18px !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] button,
    .lab-styled-preview[data-style="anthropomorphic"] input[type="submit"],
    .anthropomorphic-styled-container button,
    .style-anthropomorphic button,
    [data-style="anthropomorphic"] button,
    .ds-scope[data-style-id="anthropomorphic"] button,
    .style-anthropomorphic-ui button,
    [data-style="anthropomorphic-ui"] button,
    .ds-scope[data-style-id="anthropomorphic-ui"] button,
    .anthropomorphic-styled-container input[type="submit"],
    .style-anthropomorphic input[type="submit"],
    [data-style="anthropomorphic"] input[type="submit"],
    .ds-scope[data-style-id="anthropomorphic"] input[type="submit"],
    .style-anthropomorphic-ui input[type="submit"],
    [data-style="anthropomorphic-ui"] input[type="submit"],
    .ds-scope[data-style-id="anthropomorphic-ui"] input[type="submit"] {
      width: 100% !important;
    }

    .lab-styled-preview[data-style="anthropomorphic"] table,
    .anthropomorphic-styled-container table,
    .style-anthropomorphic table,
    [data-style="anthropomorphic"] table,
    .ds-scope[data-style-id="anthropomorphic"] table,
    .style-anthropomorphic-ui table,
    [data-style="anthropomorphic-ui"] table,
    .ds-scope[data-style-id="anthropomorphic-ui"] table {
      display: block !important;
      overflow-x: auto !important;
      -webkit-overflow-scrolling: touch !important;
    }
  }
`;
