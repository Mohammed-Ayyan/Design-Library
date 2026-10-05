/**
 * Glassmorphism Semantic Stylesheet Rules (Art-Directed Pass)
 * 
 * Defines an optical, atmospheric Glassmorphism visual language.
 * Follows the hierarchy:
 *   ATMOSPHERIC BACKGROUND -> FLOATING TYPOGRAPHY -> SELECTIVE GLASS PLANES -> ELEVATED GLASS -> LUMINOUS INTERACTION
 * 
 * Avoids indiscriminate "glassification" (not every element is a card),
 * eliminates excessive cyan and neon borders, and preserves 100% source HTML structure.
 */

export const glassmorphismSemanticCss = `
  /* ==========================================================================
     1. ATMOSPHERIC CANVAS FOUNDATION
     ========================================================================== */
  .lab-styled-preview[data-style="glassmorphism"],
  .glassmorphism-styled-container {
    position: relative;
    background-color: #060814 !important;
    background-image: 
      radial-gradient(ellipse 70% 60% at 18% 12%, rgba(99, 102, 241, 0.24), transparent 65%),
      radial-gradient(ellipse 60% 70% at 85% 30%, rgba(37, 99, 235, 0.20), transparent 70%),
      radial-gradient(circle 450px at 50% 65%, rgba(6, 182, 212, 0.13), transparent 70%),
      radial-gradient(ellipse 45% 45% at 80% 85%, rgba(192, 38, 211, 0.09), transparent 60%) !important;
    background-attachment: local !important;
    color: #f1f5f9 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.65 !important;
    letter-spacing: -0.01em !important;
    box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.7) !important;
  }

  /* ==========================================================================
     2. FLOATING NAVIGATION DOCK (GLASS-1)
     ========================================================================== */
  .lab-styled-preview[data-style="glassmorphism"] nav,
  .glassmorphism-styled-container nav {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1.25rem;
    padding: 0.5rem 1.25rem;
    margin-bottom: 3.25rem;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px) saturate(140%);
    -webkit-backdrop-filter: blur(20px) saturate(140%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 9999px;
    box-shadow: 
      0 8px 28px rgba(0, 0, 0, 0.35),
      inset 0 1px 1px rgba(255, 255, 255, 0.2);
  }

  .lab-styled-preview[data-style="glassmorphism"] nav a,
  .glassmorphism-styled-container nav a {
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #cbd5e1;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    transition: color 200ms ease, background 200ms ease;
  }

  .lab-styled-preview[data-style="glassmorphism"] nav a:hover,
  .glassmorphism-styled-container nav a:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.07);
  }

  /* ==========================================================================
     3. FLOATING OPTICAL TYPOGRAPHY
     ========================================================================== */
  /* Eyebrows / Kickers: Soft periwinkle/ice blue with tracking */
  .lab-styled-preview[data-style="glassmorphism"] header > p:first-child,
  .lab-styled-preview[data-style="glassmorphism"] section > p:first-child,
  .glassmorphism-styled-container header > p:first-child,
  .glassmorphism-styled-container section > p:first-child {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #93c5fd;
    margin-bottom: 0.875rem;
    display: inline-block;
  }

  /* Display Headings float cleanly above spatial void */
  .lab-styled-preview[data-style="glassmorphism"] h1,
  .glassmorphism-styled-container h1 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(2.25rem, 4.5vw, 3.25rem);
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: -0.03em;
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 1.25rem;
    text-shadow: 0 2px 18px rgba(0, 0, 0, 0.55);
  }

  .lab-styled-preview[data-style="glassmorphism"] h2,
  .glassmorphism-styled-container h2 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.025em;
    color: #f8fafc;
    margin-top: 0;
    margin-bottom: 1rem;
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.45);
  }

  .lab-styled-preview[data-style="glassmorphism"] h3,
  .glassmorphism-styled-container h3 {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  /* Body Copy: Unobstructed & Transparent */
  .lab-styled-preview[data-style="glassmorphism"] p,
  .glassmorphism-styled-container p {
    color: #cbd5e1;
    font-size: 0.9375rem;
    line-height: 1.65;
    margin-bottom: 1.5rem;
  }

  .lab-styled-preview[data-style="glassmorphism"] header > p:last-child,
  .glassmorphism-styled-container header > p:last-child {
    font-size: 1.0625rem;
    line-height: 1.6;
    color: #94a3b8;
    max-width: 48ch;
    margin-bottom: 2.25rem;
  }

  /* ==========================================================================
     4. SELECTIVE GLASS PANELS & FLOATING ARTICLES
     ========================================================================== */
  /* Default Article: Open floating spatial item with delicate hairline divider (e.g. portfolio project rows) */
  .lab-styled-preview[data-style="glassmorphism"] article,
  .glassmorphism-styled-container article {
    position: relative;
    padding: 1.5rem 0;
    margin-bottom: 0;
    border-radius: 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
    transition: all 200ms ease;
  }

  .lab-styled-preview[data-style="glassmorphism"] article:hover,
  .glassmorphism-styled-container article:hover {
    border-bottom-color: rgba(255, 255, 255, 0.18);
  }

  .lab-styled-preview[data-style="glassmorphism"] article h3,
  .glassmorphism-styled-container article h3 {
    margin-top: 0;
    margin-bottom: 0.35rem;
    color: #ffffff;
  }

  .lab-styled-preview[data-style="glassmorphism"] article p,
  .glassmorphism-styled-container article p {
    color: #94a3b8;
    margin-bottom: 0;
  }

  /* Selective Glass Panels (GLASS-2): Only when an article represents a functional panel, pricing tier, or metric pod */
  .lab-styled-preview[data-style="glassmorphism"] article:has(button),
  .lab-styled-preview[data-style="glassmorphism"] article:has(strong),
  .glassmorphism-styled-container article:has(button),
  .glassmorphism-styled-container article:has(strong) {
    padding: 1.75rem 2rem;
    margin-bottom: 1.5rem;
    border-radius: 18px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%);
    backdrop-filter: blur(20px) saturate(140%);
    -webkit-backdrop-filter: blur(20px) saturate(140%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 
      0 12px 36px rgba(0, 0, 0, 0.32),
      inset 0 1px 1px rgba(255, 255, 255, 0.16);
  }

  .lab-styled-preview[data-style="glassmorphism"] article:has(button):hover,
  .lab-styled-preview[data-style="glassmorphism"] article:has(strong):hover,
  .glassmorphism-styled-container article:has(button):hover,
  .glassmorphism-styled-container article:has(strong):hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 
      0 16px 42px rgba(0, 0, 0, 0.42),
      inset 0 1px 1px rgba(255, 255, 255, 0.24);
  }

  /* Elevated Focal Tier (GLASS-3) */
  .lab-styled-preview[data-style="glassmorphism"] article:has(button):nth-child(2),
  .glassmorphism-styled-container article:has(button):nth-child(2) {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.025) 100%);
    border-color: rgba(147, 197, 253, 0.28);
    box-shadow: 
      0 16px 42px rgba(0, 0, 0, 0.4),
      0 0 24px rgba(59, 130, 246, 0.1),
      inset 0 1px 2px rgba(255, 255, 255, 0.22);
  }

  /* ==========================================================================
     5. LUMINOUS INTERACTIVE CONTROLS (GLASS-4)
     ========================================================================== */
  .lab-styled-preview[data-style="glassmorphism"] button,
  .glassmorphism-styled-container button,
  .lab-styled-preview[data-style="glassmorphism"] input[type="submit"],
  .glassmorphism-styled-container input[type="submit"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.625rem 1.5rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    color: #ffffff;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.9) 0%, rgba(59, 130, 246, 0.85) 55%, rgba(14, 165, 233, 0.8) 100%);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 9999px;
    box-shadow: 
      0 4px 18px rgba(37, 99, 235, 0.3),
      inset 0 1px 1px rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .lab-styled-preview[data-style="glassmorphism"] button:hover,
  .glassmorphism-styled-container button:hover,
  .lab-styled-preview[data-style="glassmorphism"] input[type="submit"]:hover,
  .glassmorphism-styled-container input[type="submit"]:hover {
    background: linear-gradient(135deg, rgba(79, 70, 229, 1) 0%, rgba(59, 130, 246, 0.95) 55%, rgba(14, 165, 233, 0.9) 100%);
    transform: translateY(-1px);
    box-shadow: 
      0 8px 24px rgba(37, 99, 235, 0.42),
      inset 0 1px 1px rgba(255, 255, 255, 0.6);
    border-color: rgba(255, 255, 255, 0.5);
  }

  .lab-styled-preview[data-style="glassmorphism"] button:active,
  .glassmorphism-styled-container button:active,
  .lab-styled-preview[data-style="glassmorphism"] input[type="submit"]:active,
  .glassmorphism-styled-container input[type="submit"]:active {
    transform: translateY(1px);
    box-shadow: 
      0 2px 8px rgba(37, 99, 235, 0.25),
      inset 0 1px 1px rgba(255, 255, 255, 0.3);
  }

  /* ==========================================================================
     6. OPTICAL BLOCKQUOTES (FLOATING LAYER, NOT A CARD)
     ========================================================================== */
  .lab-styled-preview[data-style="glassmorphism"] blockquote,
  .glassmorphism-styled-container blockquote {
    position: relative;
    padding: 1.25rem 1.75rem;
    margin: 2.5rem 0;
    border-radius: 0 12px 12px 0;
    background: rgba(255, 255, 255, 0.025);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: none;
    border-left: 2px solid rgba(147, 197, 253, 0.7);
    box-shadow: none;
    font-style: italic;
    color: #e2e8f0;
  }

  .lab-styled-preview[data-style="glassmorphism"] blockquote p,
  .glassmorphism-styled-container blockquote p {
    font-size: 1.0625rem;
    line-height: 1.7;
    margin-bottom: 0;
    color: #e2e8f0;
  }

  /* ==========================================================================
     7. DATA TABLES: READABILITY OVER GLASS EFFECTS
     ========================================================================== */
  .lab-styled-preview[data-style="glassmorphism"] table,
  .glassmorphism-styled-container table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 2rem 0;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 14px;
    overflow: hidden;
  }

  .lab-styled-preview[data-style="glassmorphism"] th,
  .glassmorphism-styled-container th {
    padding: 0.875rem 1.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #94a3b8;
    background: rgba(255, 255, 255, 0.035);
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
    text-align: left;
  }

  .lab-styled-preview[data-style="glassmorphism"] td,
  .glassmorphism-styled-container td {
    padding: 0.875rem 1.25rem;
    font-size: 0.875rem;
    color: #cbd5e1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: background 150ms ease;
  }

  .lab-styled-preview[data-style="glassmorphism"] tr:last-child td,
  .glassmorphism-styled-container tr:last-child td {
    border-bottom: none;
  }

  .lab-styled-preview[data-style="glassmorphism"] tr:hover td,
  .glassmorphism-styled-container tr:hover td {
    background: rgba(255, 255, 255, 0.03);
  }

  .lab-styled-preview[data-style="glassmorphism"] strong,
  .glassmorphism-styled-container strong {
    color: #ffffff;
    font-weight: 600;
  }

  /* ==========================================================================
     8. FORM INPUT CONTROLS: OPTICAL CAVITIES
     ========================================================================== */
  .lab-styled-preview[data-style="glassmorphism"] form,
  .glassmorphism-styled-container form {
    margin-top: 1.5rem;
  }

  .lab-styled-preview[data-style="glassmorphism"] label,
  .glassmorphism-styled-container label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #94a3b8;
    margin-bottom: 0.5rem;
    margin-top: 1.25rem;
  }

  .lab-styled-preview[data-style="glassmorphism"] input[type="text"],
  .lab-styled-preview[data-style="glassmorphism"] input[type="email"],
  .lab-styled-preview[data-style="glassmorphism"] select,
  .lab-styled-preview[data-style="glassmorphism"] textarea,
  .glassmorphism-styled-container input[type="text"],
  .glassmorphism-styled-container input[type="email"],
  .glassmorphism-styled-container select,
  .glassmorphism-styled-container textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: 10px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: border-color 200ms ease, box-shadow 200ms ease, background 200ms ease;
    box-sizing: border-box;
    outline: none;
  }

  .lab-styled-preview[data-style="glassmorphism"] input:focus,
  .lab-styled-preview[data-style="glassmorphism"] select:focus,
  .lab-styled-preview[data-style="glassmorphism"] textarea:focus,
  .glassmorphism-styled-container input:focus,
  .glassmorphism-styled-container select:focus,
  .glassmorphism-styled-container textarea:focus {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(147, 197, 253, 0.6);
    box-shadow: 
      0 0 0 2px rgba(59, 130, 246, 0.2),
      0 0 12px rgba(59, 130, 246, 0.15);
  }

  .lab-styled-preview[data-style="glassmorphism"] select option,
  .glassmorphism-styled-container select option {
    background-color: #0b1020;
    color: #ffffff;
  }

  /* ==========================================================================
     9. LISTS & SPECIFICATIONS
     ========================================================================== */
  .lab-styled-preview[data-style="glassmorphism"] ul,
  .glassmorphism-styled-container ul {
    list-style: none;
    padding-left: 0;
    margin: 1.5rem 0;
  }

  .lab-styled-preview[data-style="glassmorphism"] li,
  .glassmorphism-styled-container li {
    position: relative;
    padding: 0.625rem 0 0.625rem 1.5rem;
    font-size: 0.9375rem;
    color: #cbd5e1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .lab-styled-preview[data-style="glassmorphism"] li::before,
  .glassmorphism-styled-container li::before {
    content: "";
    position: absolute;
    left: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(147, 197, 253, 0.85);
    box-shadow: 0 0 6px rgba(147, 197, 253, 0.5);
  }

  /* ==========================================================================
     10. FOOTER
     ========================================================================== */
  .lab-styled-preview[data-style="glassmorphism"] footer,
  .glassmorphism-styled-container footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
    padding-top: 2rem;
    margin-top: 4rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 0.8125rem;
    color: #64748b;
  }
`;
