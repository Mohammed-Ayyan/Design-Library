/**
 * Neumorphism Visual Design Language — Semantic CSS Rules
 *
 * Core Philosophy:
 * "A soft physical object molded from one continuous material."
 *
 * Key Characteristics:
 * - Soft monochromatic surfaces with light neutral base (#e0e5ec)
 * - Convincing dual-direction soft shadows (light from top-left, shadow to bottom-right)
 * - Raised extruded resting surfaces vs. recessed debossed active/input states
 * - Clean, highly legible modern typography (Plus Jakarta Sans)
 * - Absence of harsh borders, heavy outlines, or glassmorphic blur
 * - High text contrast (10+:1 ratio) preserving accessibility
 * - Direct mapping to raw semantic HTML tags
 */

export const neumorphicSemanticCss = `
  /* ==========================================================================
     NEUMORPHISM DESIGN LANGUAGE — CONTINUOUS MOLDED TACTILE SURFACES
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@400;500;700&display=swap');

  /* --------------------------------------------------------------------------
     1. FOUNDATION & SCOPED VARIABLES
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="neumorphism"],
  .neumorphism-styled-container {
    --neu-bg: #e0e5ec;
    --neu-surface: #e0e5ec;
    --neu-surface-subtle: #d7dde5;
    --neu-surface-inset: #d9dfe7;
    --neu-text: #1e293b;
    --neu-text-secondary: #475569;
    --neu-text-muted: #64748b;
    --neu-accent: #3b82f6;
    --neu-accent-hover: #2563eb;
    --neu-accent-subtle: rgba(59, 130, 246, 0.12);

    /* Dual-light shadow tokens (light: top-left, shadow: bottom-right) */
    --neu-shadow-raised-sm: 4px 4px 8px rgba(163, 177, 198, 0.55), -4px -4px 8px rgba(255, 255, 255, 0.9);
    --neu-shadow-raised-md: 7px 7px 15px rgba(163, 177, 198, 0.6), -7px -7px 15px rgba(255, 255, 255, 0.95);
    --neu-shadow-raised-lg: 10px 10px 22px rgba(163, 177, 198, 0.65), -10px -10px 22px rgba(255, 255, 255, 1);
    --neu-shadow-raised-hover: 9px 9px 18px rgba(163, 177, 198, 0.7), -9px -9px 18px #ffffff;

    --neu-shadow-inset-sm: inset 3px 3px 6px rgba(163, 177, 198, 0.6), inset -3px -3px 6px rgba(255, 255, 255, 0.9);
    --neu-shadow-inset-md: inset 4px 4px 8px rgba(163, 177, 198, 0.65), inset -4px -4px 8px rgba(255, 255, 255, 0.95);
    --neu-shadow-inset-lg: inset 6px 6px 12px rgba(163, 177, 198, 0.7), inset -6px -6px 12px rgba(255, 255, 255, 1);

    --neu-radius-sm: 10px;
    --neu-radius-md: 16px;
    --neu-radius-lg: 24px;
    --neu-radius-pill: 9999px;

    background-color: var(--neu-bg) !important;
    color: var(--neu-text) !important;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    font-size: 1rem !important;
    line-height: 1.65 !important;
    letter-spacing: -0.01em !important;
    box-sizing: border-box !important;
    padding: 2.5rem 2rem !important;
    border-radius: 20px !important;
    position: relative !important;
    overflow-x: hidden !important;
  }

  .lab-styled-preview[data-style="neumorphism"] *,
  .neumorphism-styled-container * {
    box-sizing: border-box;
  }

  /* --------------------------------------------------------------------------
     2. TYPOGRAPHY HIERARCHY (Clean, Restrained, High Contrast)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="neumorphism"] h1,
  .lab-styled-preview[data-style="neumorphism"] h2,
  .lab-styled-preview[data-style="neumorphism"] h3,
  .lab-styled-preview[data-style="neumorphism"] h4,
  .lab-styled-preview[data-style="neumorphism"] h5,
  .lab-styled-preview[data-style="neumorphism"] h6,
  .neumorphism-styled-container h1,
  .neumorphism-styled-container h2,
  .neumorphism-styled-container h3,
  .neumorphism-styled-container h4,
  .neumorphism-styled-container h5,
  .neumorphism-styled-container h6 {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    color: var(--neu-text) !important;
    letter-spacing: -0.025em !important;
    font-weight: 800 !important;
    line-height: 1.2 !important;
    margin-top: 0 !important;
  }

  .lab-styled-preview[data-style="neumorphism"] h1,
  .neumorphism-styled-container h1 {
    font-size: 2.5rem !important;
    font-weight: 800 !important;
    line-height: 1.15 !important;
    letter-spacing: -0.03em !important;
    margin-bottom: 1.25rem !important;
  }

  .lab-styled-preview[data-style="neumorphism"] h2,
  .neumorphism-styled-container h2 {
    font-size: 1.85rem !important;
    font-weight: 700 !important;
    line-height: 1.22 !important;
    letter-spacing: -0.02em !important;
    margin-bottom: 1rem !important;
  }

  .lab-styled-preview[data-style="neumorphism"] h3,
  .neumorphism-styled-container h3 {
    font-size: 1.3rem !important;
    font-weight: 700 !important;
    line-height: 1.3 !important;
    margin-bottom: 0.65rem !important;
  }

  .lab-styled-preview[data-style="neumorphism"] h4,
  .neumorphism-styled-container h4 {
    font-size: 1.1rem !important;
    font-weight: 700 !important;
    margin-bottom: 0.5rem !important;
  }

  .lab-styled-preview[data-style="neumorphism"] p,
  .neumorphism-styled-container p {
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    color: var(--neu-text-secondary) !important;
    font-size: 1rem !important;
    line-height: 1.65 !important;
    margin-top: 0 !important;
    margin-bottom: 1.25rem !important;
  }

  /* Subtitle / Lead kicker pill */
  .lab-styled-preview[data-style="neumorphism"] header > p:first-child,
  .lab-styled-preview[data-style="neumorphism"] section > p:first-child,
  .neumorphism-styled-container header > p:first-child,
  .neumorphism-styled-container section > p:first-child {
    display: inline-block !important;
    background-color: var(--neu-bg) !important;
    color: var(--neu-text-muted) !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 0.8125rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.04em !important;
    text-transform: uppercase !important;
    padding: 0.35rem 0.95rem !important;
    border-radius: var(--neu-radius-pill) !important;
    box-shadow: var(--neu-shadow-inset-sm) !important;
    margin-bottom: 1rem !important;
    width: fit-content !important;
  }

  /* --------------------------------------------------------------------------
     3. NAVIGATION (Soft Molded Floating Bar)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="neumorphism"] nav,
  .neumorphism-styled-container nav {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 0.75rem !important;
    flex-wrap: wrap !important;
    background-color: var(--neu-bg) !important;
    box-shadow: var(--neu-shadow-raised-md) !important;
    border-radius: var(--neu-radius-pill) !important;
    padding: 0.6rem 1.4rem !important;
    margin-bottom: 3rem !important;
    border: none !important;
  }

  .lab-styled-preview[data-style="neumorphism"] nav a,
  .neumorphism-styled-container nav a {
    color: var(--neu-text-secondary) !important;
    text-decoration: none !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-weight: 600 !important;
    font-size: 0.9rem !important;
    padding: 0.45rem 1rem !important;
    border-radius: var(--neu-radius-pill) !important;
    transition: all 180ms ease !important;
    display: inline-flex !important;
    align-items: center !important;
  }

  .lab-styled-preview[data-style="neumorphism"] nav a:hover,
  .neumorphism-styled-container nav a:hover {
    color: var(--neu-accent) !important;
    box-shadow: var(--neu-shadow-raised-sm) !important;
  }

  .lab-styled-preview[data-style="neumorphism"] nav a:first-child,
  .neumorphism-styled-container nav a:first-child {
    box-shadow: var(--neu-shadow-inset-sm) !important;
    color: var(--neu-accent) !important;
    font-weight: 700 !important;
  }

  /* --------------------------------------------------------------------------
     4. BUTTONS & CONTROLS (Tactile Extrusion vs Inset Press)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="neumorphism"] button,
  .lab-styled-preview[data-style="neumorphism"] input[type="submit"],
  .neumorphism-styled-container button,
  .neumorphism-styled-container input[type="submit"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 0.9375rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.01em !important;
    padding: 0.8rem 1.75rem !important;
    background-color: var(--neu-bg) !important;
    color: var(--neu-text) !important;
    border: none !important;
    border-radius: 14px !important;
    box-shadow: var(--neu-shadow-raised-md) !important;
    cursor: pointer !important;
    transition: box-shadow 180ms ease, color 180ms ease, transform 120ms ease !important;
    text-decoration: none !important;
    user-select: none !important;
    min-height: 46px !important;
  }

  .lab-styled-preview[data-style="neumorphism"] button:hover,
  .lab-styled-preview[data-style="neumorphism"] input[type="submit"]:hover,
  .neumorphism-styled-container button:hover,
  .neumorphism-styled-container input[type="submit"]:hover {
    box-shadow: var(--neu-shadow-raised-hover) !important;
    color: var(--neu-accent) !important;
    transform: translateY(-1px) !important;
  }

  .lab-styled-preview[data-style="neumorphism"] button:active,
  .lab-styled-preview[data-style="neumorphism"] input[type="submit"]:active,
  .neumorphism-styled-container button:active,
  .neumorphism-styled-container input[type="submit"]:active {
    box-shadow: var(--neu-shadow-inset-md) !important;
    color: var(--neu-accent-hover) !important;
    transform: translateY(1px) !important;
  }

  .lab-styled-preview[data-style="neumorphism"] button:focus-visible,
  .lab-styled-preview[data-style="neumorphism"] input[type="submit"]:focus-visible,
  .neumorphism-styled-container button:focus-visible,
  .neumorphism-styled-container input[type="submit"]:focus-visible {
    outline: none !important;
    box-shadow: var(--neu-shadow-raised-md), 0 0 0 3px rgba(59, 130, 246, 0.4) !important;
  }

  .lab-styled-preview[data-style="neumorphism"] button:disabled,
  .lab-styled-preview[data-style="neumorphism"] input[type="submit"]:disabled,
  .neumorphism-styled-container button:disabled,
  .neumorphism-styled-container input[type="submit"]:disabled {
    opacity: 0.55 !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
  }

  /* Secondary button variation (e.g. within e-commerce sizes) */
  .lab-styled-preview[data-style="neumorphism"] button:nth-of-type(2),
  .neumorphism-styled-container button:nth-of-type(2) {
    box-shadow: var(--neu-shadow-inset-sm) !important;
    color: var(--neu-accent) !important;
  }

  /* --------------------------------------------------------------------------
     5. PANELS & CARDS (Soft Extrusion from Canvas)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="neumorphism"] article,
  .lab-styled-preview[data-style="neumorphism"] .card,
  .neumorphism-styled-container article,
  .neumorphism-styled-container .card {
    background-color: var(--neu-bg) !important;
    border: none !important;
    border-radius: var(--neu-radius-md) !important;
    padding: 1.85rem !important;
    margin-bottom: 1.75rem !important;
    box-shadow: var(--neu-shadow-raised-md) !important;
    transition: box-shadow 220ms ease, transform 180ms ease !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="neumorphism"] article:hover,
  .lab-styled-preview[data-style="neumorphism"] .card:hover,
  .neumorphism-styled-container article:hover,
  .neumorphism-styled-container .card:hover {
    box-shadow: var(--neu-shadow-raised-lg) !important;
    transform: translateY(-2px) !important;
  }

  /* Price typography in cards */
  .lab-styled-preview[data-style="neumorphism"] article strong,
  .lab-styled-preview[data-style="neumorphism"] article b,
  .neumorphism-styled-container article strong,
  .neumorphism-styled-container article b {
    display: block !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 1.6rem !important;
    font-weight: 800 !important;
    color: var(--neu-text) !important;
    margin: 0.85rem 0 1.15rem !important;
  }

  /* Featured pricing card — deeper tactile lift with blue badge */
  .lab-styled-preview[data-style="neumorphism"] article:nth-child(2),
  .neumorphism-styled-container article:nth-child(2) {
    box-shadow: var(--neu-shadow-raised-lg) !important;
  }

  .lab-styled-preview[data-style="neumorphism"] article:nth-child(2) strong,
  .neumorphism-styled-container article:nth-child(2) strong {
    color: var(--neu-accent) !important;
  }

  /* --------------------------------------------------------------------------
     6. EDITORIAL ARTICLES (Un-Cardified Open Flow, Recessed Pullquote)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="neumorphism"] main > article,
  .neumorphism-styled-container main > article {
    max-width: 740px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    border: none !important;
    background: transparent !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  /* Debossed / Recessed pullquote */
  .lab-styled-preview[data-style="neumorphism"] blockquote,
  .neumorphism-styled-container blockquote {
    background-color: var(--neu-bg) !important;
    border-left: 4px solid var(--neu-accent) !important;
    border-radius: 0 var(--neu-radius-md) var(--neu-radius-md) 0 !important;
    padding: 1.5rem 2rem !important;
    margin: 2.25rem 0 !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 1.15rem !important;
    font-weight: 500 !important;
    font-style: italic !important;
    line-height: 1.68 !important;
    color: var(--neu-text) !important;
    box-shadow: var(--neu-shadow-inset-md) !important;
  }

  /* --------------------------------------------------------------------------
     7. FORMS (Physically Recessed Inputs, Tactile Focus)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="neumorphism"] form,
  .neumorphism-styled-container form {
    background-color: var(--neu-bg) !important;
    border: none !important;
    border-radius: var(--neu-radius-lg) !important;
    padding: 2.25rem !important;
    box-shadow: var(--neu-shadow-raised-md) !important;
    max-width: 580px !important;
  }

  .lab-styled-preview[data-style="neumorphism"] label,
  .neumorphism-styled-container label {
    display: block !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 700 !important;
    color: var(--neu-text) !important;
    margin-bottom: 0.45rem !important;
  }

  .lab-styled-preview[data-style="neumorphism"] input[type="text"],
  .lab-styled-preview[data-style="neumorphism"] input[type="email"],
  .lab-styled-preview[data-style="neumorphism"] input[type="password"],
  .lab-styled-preview[data-style="neumorphism"] input[type="number"],
  .lab-styled-preview[data-style="neumorphism"] input[type="search"],
  .lab-styled-preview[data-style="neumorphism"] input[type="tel"],
  .lab-styled-preview[data-style="neumorphism"] select,
  .lab-styled-preview[data-style="neumorphism"] textarea,
  .neumorphism-styled-container input[type="text"],
  .neumorphism-styled-container input[type="email"],
  .neumorphism-styled-container input[type="password"],
  .neumorphism-styled-container input[type="number"],
  .neumorphism-styled-container input[type="search"],
  .neumorphism-styled-container input[type="tel"],
  .neumorphism-styled-container select,
  .neumorphism-styled-container textarea {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    background-color: var(--neu-bg) !important;
    border: none !important;
    border-radius: 12px !important;
    padding: 0.8rem 1.15rem !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 0.95rem !important;
    color: var(--neu-text) !important;
    margin-bottom: 1.25rem !important;
    box-shadow: var(--neu-shadow-inset-sm) !important;
    transition: box-shadow 180ms ease !important;
  }

  .lab-styled-preview[data-style="neumorphism"] input:focus,
  .lab-styled-preview[data-style="neumorphism"] select:focus,
  .lab-styled-preview[data-style="neumorphism"] textarea:focus,
  .neumorphism-styled-container input:focus,
  .neumorphism-styled-container select:focus,
  .neumorphism-styled-container textarea:focus {
    box-shadow: var(--neu-shadow-inset-md), 0 0 0 3px rgba(59, 130, 246, 0.35) !important;
    outline: none !important;
  }

  /* --------------------------------------------------------------------------
     8. DASHBOARD & DATA TABLES (Molded Frame, Recessed Trough)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="neumorphism"] table,
  .neumorphism-styled-container table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    background-color: var(--neu-bg) !important;
    border: none !important;
    border-radius: var(--neu-radius-md) !important;
    overflow: hidden !important;
    margin: 1.75rem 0 !important;
    box-shadow: var(--neu-shadow-raised-md) !important;
  }

  .lab-styled-preview[data-style="neumorphism"] th,
  .neumorphism-styled-container th {
    background-color: var(--neu-surface-subtle) !important;
    color: var(--neu-text) !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.02em !important;
    padding: 0.95rem 1.25rem !important;
    text-align: left !important;
    border-bottom: 1px solid rgba(163, 177, 198, 0.4) !important;
  }

  .lab-styled-preview[data-style="neumorphism"] td,
  .neumorphism-styled-container td {
    padding: 0.95rem 1.25rem !important;
    border-bottom: 1px solid rgba(163, 177, 198, 0.25) !important;
    color: var(--neu-text-secondary) !important;
    font-size: 0.9375rem !important;
    transition: background-color 150ms ease !important;
  }

  .lab-styled-preview[data-style="neumorphism"] tbody tr:last-child td,
  .neumorphism-styled-container tbody tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="neumorphism"] tbody tr:hover td,
  .neumorphism-styled-container tbody tr:hover td {
    background-color: rgba(255, 255, 255, 0.4) !important;
  }

  /* Monospace chips in debossed pills */
  .lab-styled-preview[data-style="neumorphism"] code,
  .neumorphism-styled-container code {
    font-family: 'JetBrains Mono', monospace !important;
    font-size: 0.8125rem !important;
    background-color: var(--neu-bg) !important;
    color: var(--neu-accent) !important;
    padding: 0.25rem 0.6rem !important;
    border-radius: var(--neu-radius-pill) !important;
    box-shadow: var(--neu-shadow-inset-sm) !important;
  }

  /* --------------------------------------------------------------------------
     9. LISTS & SPECIFICATIONS (Debossed Bullet Wells)
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="neumorphism"] article ul,
  .neumorphism-styled-container article ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.25rem 0 !important;
  }

  .lab-styled-preview[data-style="neumorphism"] article ul li,
  .neumorphism-styled-container article ul li {
    display: flex !important;
    align-items: center !important;
    gap: 0.65rem !important;
    font-size: 0.9375rem !important;
    color: var(--neu-text-secondary) !important;
    padding: 0.4rem 0 !important;
  }

  .lab-styled-preview[data-style="neumorphism"] article ul li::before,
  .neumorphism-styled-container article ul li::before {
    content: '✓' !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 20px !important;
    height: 20px !important;
    border-radius: 50% !important;
    background-color: var(--neu-bg) !important;
    color: var(--neu-accent) !important;
    font-size: 0.75rem !important;
    font-weight: 800 !important;
    box-shadow: var(--neu-shadow-inset-sm) !important;
    flex-shrink: 0 !important;
  }

  /* Images / Media in cards */
  .lab-styled-preview[data-style="neumorphism"] img,
  .neumorphism-styled-container img {
    max-width: 100% !important;
    height: auto !important;
    border-radius: 16px !important;
    box-shadow: var(--neu-shadow-inset-sm) !important;
    border: none !important;
  }

  /* --------------------------------------------------------------------------
     10. FOOTER & CLOSING
     -------------------------------------------------------------------------- */
  .lab-styled-preview[data-style="neumorphism"] footer,
  .neumorphism-styled-container footer {
    margin-top: 3.5rem !important;
    padding-top: 2rem !important;
    border-top: 1px solid rgba(163, 177, 198, 0.35) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    flex-wrap: wrap !important;
    gap: 1rem !important;
    color: var(--neu-text-muted) !important;
    font-size: 0.875rem !important;
  }

  .lab-styled-preview[data-style="neumorphism"] footer p,
  .neumorphism-styled-container footer p {
    margin: 0 !important;
    color: var(--neu-text-muted) !important;
    font-size: 0.875rem !important;
  }

  /* --------------------------------------------------------------------------
     11. RESPONSIVE MOBILE ADAPTATIONS (<= 768px)
     -------------------------------------------------------------------------- */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="neumorphism"],
    .neumorphism-styled-container {
      padding: 1.5rem 1rem !important;
      border-radius: 14px !important;
    }

    .lab-styled-preview[data-style="neumorphism"] h1,
    .neumorphism-styled-container h1 {
      font-size: 2rem !important;
      line-height: 1.2 !important;
    }

    .lab-styled-preview[data-style="neumorphism"] h2,
    .neumorphism-styled-container h2 {
      font-size: 1.55rem !important;
    }

    .lab-styled-preview[data-style="neumorphism"] nav,
    .neumorphism-styled-container nav {
      border-radius: 16px !important;
      padding: 0.5rem 0.75rem !important;
      gap: 0.35rem !important;
    }

    .lab-styled-preview[data-style="neumorphism"] nav a,
    .neumorphism-styled-container nav a {
      font-size: 0.8125rem !important;
      padding: 0.35rem 0.65rem !important;
    }

    .lab-styled-preview[data-style="neumorphism"] article,
    .lab-styled-preview[data-style="neumorphism"] .card,
    .neumorphism-styled-container article,
    .neumorphism-styled-container .card {
      padding: 1.25rem !important;
      border-radius: 14px !important;
    }

    .lab-styled-preview[data-style="neumorphism"] button,
    .lab-styled-preview[data-style="neumorphism"] input[type="submit"],
    .neumorphism-styled-container button,
    .neumorphism-styled-container input[type="submit"] {
      width: 100% !important;
    }

    .lab-styled-preview[data-style="neumorphism"] table,
    .neumorphism-styled-container table {
      display: block !important;
      overflow-x: auto !important;
      -webkit-overflow-scrolling: touch !important;
    }
  }

  /* Respect prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    .lab-styled-preview[data-style="neumorphism"] *,
    .neumorphism-styled-container * {
      transition: none !important;
      transform: none !important;
    }
  }
`;
