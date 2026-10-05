/**
 * Minimalism Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Minimalism
 * is applied. Focuses on structural whitespace, clear typographic hierarchy,
 * and quiet hairlines—avoiding unnecessary cards and noisy decoration.
 */

export const minimalistSemanticCss = `
  /* Container Foundation */
  .lab-styled-preview[data-style="minimalism"],
  .minimalism-styled-container {
    background-color: #fafaf9 !important;
    color: #111111 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.65 !important;
    letter-spacing: -0.01em !important;
    box-shadow: none !important;
  }

  /* 1. Navigation Bar Language */
  .lab-styled-preview[data-style="minimalism"] nav,
  .minimalism-styled-container nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    padding: 1.25rem 0 1.5rem;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 3.5rem;
  }

  .lab-styled-preview[data-style="minimalism"] nav a,
  .minimalism-styled-container nav a {
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #52525b;
    text-decoration: none;
    padding: 0.25rem 0;
    border-bottom: 1px solid transparent;
    transition: color 150ms ease, border-color 150ms ease;
    display: inline-flex;
    align-items: center;
  }

  .lab-styled-preview[data-style="minimalism"] nav a:hover,
  .minimalism-styled-container nav a:hover {
    color: #111111;
    border-color: #111111;
    text-decoration: none;
    background-color: transparent;
    box-shadow: none;
    transform: none;
  }

  /* 2. Eyebrow Kickers & Metadata */
  .lab-styled-preview[data-style="minimalism"] header > p:first-child,
  .lab-styled-preview[data-style="minimalism"] section > p:first-child:not(:last-child),
  .minimalism-styled-container header > p:first-child,
  .minimalism-styled-container section > p:first-child:not(:last-child) {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #71717a;
    background-color: transparent;
    border: none;
    padding: 0;
    display: block;
    margin-bottom: 0.75rem;
    box-shadow: none;
  }

  /* 3. Typography Hierarchy */
  .lab-styled-preview[data-style="minimalism"] h1,
  .minimalism-styled-container h1 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.5rem);
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: #111111;
    margin: 0 0 1.25rem;
    text-transform: none;
  }

  .lab-styled-preview[data-style="minimalism"] h2,
  .minimalism-styled-container h2 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.35rem, 2.5vw, 1.65rem);
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.025em;
    color: #111111;
    margin: 3.5rem 0 1.25rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #e5e5e5;
    text-transform: none;
  }

  .lab-styled-preview[data-style="minimalism"] h3,
  .minimalism-styled-container h3 {
    font-family: 'Inter', sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.015em;
    color: #111111;
    margin: 1.5rem 0 0.4rem;
    text-transform: none;
  }

  .lab-styled-preview[data-style="minimalism"] h4,
  .minimalism-styled-container h4 {
    font-family: 'Inter', sans-serif;
    font-size: 0.9375rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #111111;
    margin: 1rem 0 0.35rem;
  }

  .lab-styled-preview[data-style="minimalism"] p,
  .minimalism-styled-container p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.65;
    color: #52525b;
    margin: 0 0 1.5rem;
  }

  .lab-styled-preview[data-style="minimalism"] strong,
  .lab-styled-preview[data-style="minimalism"] b,
  .minimalism-styled-container strong,
  .minimalism-styled-container b {
    font-weight: 600;
    color: #111111;
  }

  /* 4. Interactive Buttons */
  .lab-styled-preview[data-style="minimalism"] button,
  .lab-styled-preview[data-style="minimalism"] input[type="submit"],
  .lab-styled-preview[data-style="minimalism"] input[type="button"],
  .minimalism-styled-container button,
  .minimalism-styled-container input[type="submit"],
  .minimalism-styled-container input[type="button"] {
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    padding: 0.625rem 1.25rem;
    background-color: #111111;
    color: #ffffff;
    border: 1px solid #111111;
    border-radius: 2px;
    box-shadow: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    transition: opacity 150ms ease, background-color 150ms ease;
    margin: 0.35rem 0.5rem 0.35rem 0;
  }

  .lab-styled-preview[data-style="minimalism"] button:hover,
  .lab-styled-preview[data-style="minimalism"] input[type="submit"]:hover,
  .minimalism-styled-container button:hover,
  .minimalism-styled-container input[type="submit"]:hover {
    background-color: #27272a;
    opacity: 0.92;
    transform: none;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="minimalism"] button:active,
  .lab-styled-preview[data-style="minimalism"] input[type="submit"]:active,
  .minimalism-styled-container button:active,
  .minimalism-styled-container input[type="submit"]:active {
    transform: scale(0.99);
    box-shadow: none;
  }

  .lab-styled-preview[data-style="minimalism"] button:focus-visible,
  .minimalism-styled-container button:focus-visible {
    outline: 2px solid #111111;
    outline-offset: 2px;
  }

  .lab-styled-preview[data-style="minimalism"] button:disabled,
  .minimalism-styled-container button:disabled {
    background-color: #f4f4f5;
    color: #a1a1aa;
    border-color: #e4e4e7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* 5. Editorial Content & Articles (The Anti-Card Rule) */
  .lab-styled-preview[data-style="minimalism"] article,
  .minimalism-styled-container article {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #e5e5e5;
    border-radius: 0px;
    padding: 1.75rem 0;
    box-shadow: none;
    margin-bottom: 0;
    transition: background-color 150ms ease;
  }

  .lab-styled-preview[data-style="minimalism"] article:last-child,
  .minimalism-styled-container article:last-child {
    border-bottom: none;
  }

  .lab-styled-preview[data-style="minimalism"] article:hover,
  .minimalism-styled-container article:hover {
    transform: none;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="minimalism"] article h3,
  .minimalism-styled-container article h3 {
    margin-top: 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: #111111;
    letter-spacing: -0.02em;
  }

  .lab-styled-preview[data-style="minimalism"] article p,
  .minimalism-styled-container article p {
    color: #52525b;
    font-size: 0.9375rem;
    margin-bottom: 0;
  }

  .lab-styled-preview[data-style="minimalism"] blockquote,
  .minimalism-styled-container blockquote {
    font-family: 'Inter', sans-serif;
    font-size: 1.15rem;
    font-weight: 400;
    font-style: italic;
    line-height: 1.6;
    color: #27272a;
    background-color: transparent;
    border: none;
    border-left: 2px solid #111111;
    padding: 0.5rem 0 0.5rem 1.5rem;
    margin: 2.5rem 0;
    box-shadow: none;
  }

  /* 6. Raw Data & Tables */
  .lab-styled-preview[data-style="minimalism"] table,
  .minimalism-styled-container table {
    width: 100%;
    border-collapse: collapse;
    border: none;
    margin: 2rem 0;
    box-shadow: none;
    background-color: transparent;
  }

  .lab-styled-preview[data-style="minimalism"] th,
  .minimalism-styled-container th {
    background-color: transparent;
    color: #71717a;
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 0.85rem 1rem 0.85rem 0;
    border: none;
    border-bottom: 1px solid #111111;
    text-align: left;
  }

  .lab-styled-preview[data-style="minimalism"] td,
  .minimalism-styled-container td {
    border: none;
    border-bottom: 1px solid #e5e5e5;
    padding: 1rem 1rem 1rem 0;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: #111111;
  }

  .lab-styled-preview[data-style="minimalism"] tr:last-child td,
  .minimalism-styled-container tr:last-child td {
    border-bottom: 1px solid #e5e5e5;
  }

  /* 7. Forms & Inputs */
  .lab-styled-preview[data-style="minimalism"] form,
  .minimalism-styled-container form {
    background-color: transparent;
    border: none;
    padding: 0;
    box-shadow: none;
    margin-bottom: 2.5rem;
    max-width: 520px;
  }

  .lab-styled-preview[data-style="minimalism"] label,
  .minimalism-styled-container label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #71717a;
    margin-bottom: 0.35rem;
  }

  .lab-styled-preview[data-style="minimalism"] input[type="text"],
  .lab-styled-preview[data-style="minimalism"] input[type="email"],
  .lab-styled-preview[data-style="minimalism"] input[type="tel"],
  .lab-styled-preview[data-style="minimalism"] input[type="number"],
  .lab-styled-preview[data-style="minimalism"] select,
  .lab-styled-preview[data-style="minimalism"] textarea,
  .minimalism-styled-container input[type="text"],
  .minimalism-styled-container input[type="email"],
  .minimalism-styled-container input[type="tel"],
  .minimalism-styled-container input[type="number"],
  .minimalism-styled-container select,
  .minimalism-styled-container textarea {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    padding: 0.625rem 0.875rem;
    color: #111111;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    box-shadow: none;
    margin-bottom: 1.5rem;
    outline: none;
    transition: border-color 150ms ease;
  }

  .lab-styled-preview[data-style="minimalism"] input:focus,
  .lab-styled-preview[data-style="minimalism"] select:focus,
  .lab-styled-preview[data-style="minimalism"] textarea:focus,
  .minimalism-styled-container input:focus,
  .minimalism-styled-container select:focus,
  .minimalism-styled-container textarea:focus {
    border-color: #111111;
    box-shadow: 0 0 0 1px #111111;
  }

  .lab-styled-preview[data-style="minimalism"] input::placeholder,
  .lab-styled-preview[data-style="minimalism"] textarea::placeholder,
  .minimalism-styled-container input::placeholder,
  .minimalism-styled-container textarea::placeholder {
    color: #a1a1aa;
    opacity: 1;
  }

  /* 8. Lists */
  .lab-styled-preview[data-style="minimalism"] ul,
  .lab-styled-preview[data-style="minimalism"] ol,
  .minimalism-styled-container ul,
  .minimalism-styled-container ol {
    padding-left: 1.25rem;
    margin: 1rem 0 1.75rem;
  }

  .lab-styled-preview[data-style="minimalism"] li,
  .minimalism-styled-container li {
    font-family: 'Inter', sans-serif;
    font-size: 0.9375rem;
    line-height: 1.65;
    color: #52525b;
    margin-bottom: 0.5rem;
  }

  .lab-styled-preview[data-style="minimalism"] ul > li,
  .minimalism-styled-container ul > li {
    list-style-type: disc;
  }

  /* 9. Badges, Tags, Metadata */
  .lab-styled-preview[data-style="minimalism"] small,
  .lab-styled-preview[data-style="minimalism"] .badge,
  .lab-styled-preview[data-style="minimalism"] span.tag,
  .minimalism-styled-container small,
  .minimalism-styled-container .badge,
  .minimalism-styled-container span.tag {
    display: inline-block;
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    background-color: #f5f5f4;
    color: #71717a;
    border: none;
    padding: 0.2rem 0.5rem;
    box-shadow: none;
    border-radius: 2px;
    margin-right: 0.35rem;
  }

  /* 10. Links */
  .lab-styled-preview[data-style="minimalism"] a,
  .minimalism-styled-container a {
    color: #111111;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
    text-decoration-color: rgba(0, 0, 0, 0.3);
    transition: text-decoration-color 150ms ease;
  }

  .lab-styled-preview[data-style="minimalism"] a:hover,
  .minimalism-styled-container a:hover {
    text-decoration-color: #111111;
    background-color: transparent;
    box-shadow: none;
  }

  /* 11. Footer */
  .lab-styled-preview[data-style="minimalism"] footer,
  .minimalism-styled-container footer {
    border-top: 1px solid #e5e5e5;
    padding: 2.5rem 0 1.5rem;
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .lab-styled-preview[data-style="minimalism"] footer p,
  .minimalism-styled-container footer p {
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    color: #71717a;
    margin: 0;
  }
`;
