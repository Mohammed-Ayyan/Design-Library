/**
 * Wabi-Sabi Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Wabi-Sabi
 * is applied: organic asymmetry, tranquil negative space, warm handmade washi
 * paper canvas, natural stoneware textures, serene sumi ink typography, and
 * mindful Japanese aesthetic harmony.
 */

export const wabiSabiSemanticCss = `
  /* Container Foundation */
  .lab-styled-preview[data-style="wabi-sabi"],
  .wabi-sabi-styled-container,
  .style-wabi-sabi,
  .ds-scope[data-style-id="wabi-sabi"] {
    background-color: #f7f4ee !important;
    color: #292524 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.8 !important;
    letter-spacing: 0.01em !important;
    box-shadow: none !important;
  }

  /* 1. Navigation Bar Language */
  .lab-styled-preview[data-style="wabi-sabi"] nav,
  .wabi-sabi-styled-container nav,
  .style-wabi-sabi nav,
  .ds-scope[data-style-id="wabi-sabi"] nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    padding: 1.25rem 0 1.5rem;
    border-bottom: 1px solid #d6cfc4;
    margin-bottom: 3.5rem;
  }

  .lab-styled-preview[data-style="wabi-sabi"] nav a,
  .wabi-sabi-styled-container nav a,
  .style-wabi-sabi nav a,
  .ds-scope[data-style-id="wabi-sabi"] nav a {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: #57534e;
    text-decoration: none;
    padding: 0.25rem 0;
    border-bottom: 1px solid transparent;
    transition: color 200ms ease, border-color 200ms ease;
    display: inline-flex;
    align-items: center;
  }

  .lab-styled-preview[data-style="wabi-sabi"] nav a:hover,
  .wabi-sabi-styled-container nav a:hover,
  .style-wabi-sabi nav a:hover,
  .ds-scope[data-style-id="wabi-sabi"] nav a:hover {
    color: #292524;
    border-bottom-color: #4d7c0f;
    text-decoration: none;
  }

  /* 2. Eyebrow Kickers & Metadata */
  .lab-styled-preview[data-style="wabi-sabi"] header > p:first-child,
  .lab-styled-preview[data-style="wabi-sabi"] section > p:first-child:not(:last-child),
  .wabi-sabi-styled-container header > p:first-child,
  .wabi-sabi-styled-container section > p:first-child:not(:last-child),
  .style-wabi-sabi header > p:first-child,
  .style-wabi-sabi section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="wabi-sabi"] header > p:first-child,
  .ds-scope[data-style-id="wabi-sabi"] section > p:first-child:not(:last-child) {
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #78716c;
    margin-bottom: 1.25rem;
    display: block;
  }

  /* 3. Typography & Headings */
  .lab-styled-preview[data-style="wabi-sabi"] h1,
  .wabi-sabi-styled-container h1,
  .style-wabi-sabi h1,
  .ds-scope[data-style-id="wabi-sabi"] h1 {
    font-family: 'Cormorant Garamond', 'Georgia', 'Noto Serif', serif !important;
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.1;
    color: #1c1917;
    margin: 0 0 1.5rem;
  }

  .lab-styled-preview[data-style="wabi-sabi"] h2,
  .wabi-sabi-styled-container h2,
  .style-wabi-sabi h2,
  .ds-scope[data-style-id="wabi-sabi"] h2 {
    font-family: 'Cormorant Garamond', 'Georgia', 'Noto Serif', serif !important;
    font-size: clamp(1.75rem, 3.2vw, 2.35rem);
    font-weight: 500;
    letter-spacing: -0.015em;
    line-height: 1.25;
    color: #292524;
    margin: 2.5rem 0 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(120, 113, 108, 0.2);
  }

  .lab-styled-preview[data-style="wabi-sabi"] h3,
  .wabi-sabi-styled-container h3,
  .style-wabi-sabi h3,
  .ds-scope[data-style-id="wabi-sabi"] h3 {
    font-family: 'Cormorant Garamond', 'Georgia', 'Noto Serif', serif !important;
    font-size: 1.35rem;
    font-weight: 600;
    color: #292524;
    margin: 0 0 0.5rem;
  }

  .lab-styled-preview[data-style="wabi-sabi"] p,
  .wabi-sabi-styled-container p,
  .style-wabi-sabi p,
  .ds-scope[data-style-id="wabi-sabi"] p {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 1rem;
    line-height: 1.8;
    color: #57534e;
    max-width: 62ch;
    margin: 0 0 1.5rem;
  }

  /* 4. Action Controls & Buttons */
  .lab-styled-preview[data-style="wabi-sabi"] button,
  .lab-styled-preview[data-style="wabi-sabi"] .btn-primary,
  .wabi-sabi-styled-container button,
  .wabi-sabi-styled-container .btn-primary,
  .style-wabi-sabi button,
  .style-wabi-sabi .btn-primary,
  .ds-scope[data-style-id="wabi-sabi"] button,
  .ds-scope[data-style-id="wabi-sabi"] .btn-primary {
    font-family: 'Inter', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.04em !important;
    padding: 0.75rem 1.75rem !important;
    border-radius: 8px !important;
    border: 1px solid #4d7c0f !important;
    background-color: #4d7c0f !important;
    color: #ffffff !important;
    box-shadow: 0 2px 8px rgba(77, 124, 15, 0.15) !important;
    cursor: pointer !important;
    transition: all 250ms cubic-bezier(0.25, 1, 0.5, 1) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    text-decoration: none !important;
  }

  .lab-styled-preview[data-style="wabi-sabi"] button:hover,
  .wabi-sabi-styled-container button:hover,
  .style-wabi-sabi button:hover,
  .ds-scope[data-style-id="wabi-sabi"] button:hover {
    background-color: #3f6212 !important;
    border-color: #3f6212 !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 4px 14px rgba(77, 124, 15, 0.25) !important;
  }

  .lab-styled-preview[data-style="wabi-sabi"] button:active,
  .wabi-sabi-styled-container button:active,
  .style-wabi-sabi button:active,
  .ds-scope[data-style-id="wabi-sabi"] button:active {
    transform: translateY(0px) !important;
  }

  /* 5. Cards & Section Architecture */
  .lab-styled-preview[data-style="wabi-sabi"] article,
  .lab-styled-preview[data-style="wabi-sabi"] .card,
  .wabi-sabi-styled-container article,
  .wabi-sabi-styled-container .card,
  .style-wabi-sabi article,
  .style-wabi-sabi .card,
  .ds-scope[data-style-id="wabi-sabi"] article,
  .ds-scope[data-style-id="wabi-sabi"] .card {
    background-color: #faf7f2;
    border: 1px solid #d6cfc4;
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    transition: transform 250ms ease, box-shadow 250ms ease;
    box-shadow: 0 4px 16px rgba(41, 37, 36, 0.04);
  }

  .lab-styled-preview[data-style="wabi-sabi"] article:hover,
  .wabi-sabi-styled-container article:hover,
  .style-wabi-sabi article:hover,
  .ds-scope[data-style-id="wabi-sabi"] article:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(41, 37, 36, 0.07);
  }

  /* Alternating Card Character */
  .lab-styled-preview[data-style="wabi-sabi"] article:first-of-type,
  .wabi-sabi-styled-container article:first-of-type,
  .style-wabi-sabi article:first-of-type {
    background-color: #eeeae0;
    border-color: rgba(120, 113, 108, 0.28);
  }

  /* 6. Blockquotes & Meditations */
  .lab-styled-preview[data-style="wabi-sabi"] blockquote,
  .wabi-sabi-styled-container blockquote,
  .style-wabi-sabi blockquote,
  .ds-scope[data-style-id="wabi-sabi"] blockquote {
    border-left: 2px solid #78716c;
    padding: 1rem 0 1rem 2rem;
    margin: 2.5rem 0;
    font-family: 'Cormorant Garamond', 'Georgia', serif;
    font-size: 1.35rem;
    font-style: italic;
    color: #44403c;
    line-height: 1.6;
    background: transparent;
  }

  /* 7. Forms & Inputs */
  .lab-styled-preview[data-style="wabi-sabi"] form,
  .wabi-sabi-styled-container form,
  .style-wabi-sabi form,
  .ds-scope[data-style-id="wabi-sabi"] form {
    background-color: #faf7f2;
    border: 1px solid #d6cfc4;
    border-radius: 12px;
    padding: 2.5rem;
    max-width: 580px;
    margin: 2rem 0;
    box-shadow: 0 4px 16px rgba(41, 37, 36, 0.04);
  }

  .lab-styled-preview[data-style="wabi-sabi"] label,
  .wabi-sabi-styled-container label,
  .style-wabi-sabi label,
  .ds-scope[data-style-id="wabi-sabi"] label {
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #78716c;
    display: block;
    margin-bottom: 0.35rem;
  }

  .lab-styled-preview[data-style="wabi-sabi"] input[type="text"],
  .lab-styled-preview[data-style="wabi-sabi"] input[type="email"],
  .lab-styled-preview[data-style="wabi-sabi"] input[type="password"],
  .lab-styled-preview[data-style="wabi-sabi"] textarea,
  .lab-styled-preview[data-style="wabi-sabi"] select,
  .wabi-sabi-styled-container input[type="text"],
  .wabi-sabi-styled-container input[type="email"],
  .wabi-sabi-styled-container input[type="password"],
  .wabi-sabi-styled-container textarea,
  .wabi-sabi-styled-container select,
  .style-wabi-sabi input[type="text"],
  .style-wabi-sabi input[type="email"],
  .style-wabi-sabi textarea,
  .style-wabi-sabi select,
  .ds-scope[data-style-id="wabi-sabi"] input,
  .ds-scope[data-style-id="wabi-sabi"] textarea {
    width: 100%;
    background-color: #ffffff !important;
    border: 1px solid #d6cfc4 !important;
    border-radius: 6px !important;
    padding: 0.75rem 1rem !important;
    color: #292524 !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 0.9375rem !important;
    outline: none !important;
    transition: border-color 200ms ease, box-shadow 200ms ease !important;
  }

  .lab-styled-preview[data-style="wabi-sabi"] input:focus,
  .lab-styled-preview[data-style="wabi-sabi"] textarea:focus,
  .wabi-sabi-styled-container input:focus,
  .wabi-sabi-styled-container textarea:focus,
  .style-wabi-sabi input:focus,
  .style-wabi-sabi textarea:focus,
  .ds-scope[data-style-id="wabi-sabi"] input:focus,
  .ds-scope[data-style-id="wabi-sabi"] textarea:focus {
    border-color: #4d7c0f !important;
    box-shadow: 0 0 0 3px rgba(77, 124, 15, 0.15) !important;
  }

  /* 8. Tables & Data Presentation */
  .lab-styled-preview[data-style="wabi-sabi"] table,
  .wabi-sabi-styled-container table,
  .style-wabi-sabi table,
  .ds-scope[data-style-id="wabi-sabi"] table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-size: 0.9375rem;
  }

  .lab-styled-preview[data-style="wabi-sabi"] th,
  .wabi-sabi-styled-container th,
  .style-wabi-sabi th,
  .ds-scope[data-style-id="wabi-sabi"] th {
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #78716c;
    border-bottom: 1px solid #d6cfc4;
    padding: 0.85rem 1rem;
    text-align: left;
  }

  .lab-styled-preview[data-style="wabi-sabi"] td,
  .wabi-sabi-styled-container td,
  .style-wabi-sabi td,
  .ds-scope[data-style-id="wabi-sabi"] td {
    padding: 0.85rem 1rem;
    border-bottom: 1px solid rgba(214, 207, 196, 0.5);
    color: #44403c;
  }

  /* 9. Dividing Rules */
  .lab-styled-preview[data-style="wabi-sabi"] hr,
  .wabi-sabi-styled-container hr,
  .style-wabi-sabi hr,
  .ds-scope[data-style-id="wabi-sabi"] hr {
    border: none;
    border-top: 1px solid #d6cfc4;
    margin: 3.5rem 0;
  }

  /* 10. Footers */
  .lab-styled-preview[data-style="wabi-sabi"] footer,
  .wabi-sabi-styled-container footer,
  .style-wabi-sabi footer,
  .ds-scope[data-style-id="wabi-sabi"] footer {
    border-top: 1px solid #d6cfc4;
    padding: 3rem 0 1.5rem;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .lab-styled-preview[data-style="wabi-sabi"] footer p,
  .wabi-sabi-styled-container footer p,
  .style-wabi-sabi footer p,
  .ds-scope[data-style-id="wabi-sabi"] footer p {
    font-size: 0.8125rem;
    color: #a8a29e;
    margin: 0;
  }

  /* 11. Reduced Motion Compliance */
  @media (prefers-reduced-motion: reduce) {
    .lab-styled-preview[data-style="wabi-sabi"] *,
    .wabi-sabi-styled-container *,
    .style-wabi-sabi *,
    .ds-scope[data-style-id="wabi-sabi"] * {
      transition: none !important;
      transform: none !important;
    }
  }
`;
