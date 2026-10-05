/**
 * Brutalism Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Brutalism
 * is applied, preserving the user's underlying HTML structure while expressing
 * unmistakable architectural art direction.
 */

export const brutalistSemanticCss = `
  /* Container Foundation */
  .lab-styled-preview[data-style="brutalism"],
  .brutalism-styled-container {
    background-color: #f4f3ed !important;
    color: #000000 !important;
    font-family: 'Space Grotesk', -apple-system, sans-serif !important;
    line-height: 1.55 !important;
    letter-spacing: 0em !important;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.15) !important;
  }

  /* 1. Navigation Bar Language */
  .lab-styled-preview[data-style="brutalism"] nav,
  .brutalism-styled-container nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    padding: 0.85rem 0 1.25rem;
    border-bottom: 3px solid #000000;
    margin-bottom: 2.5rem;
  }

  .lab-styled-preview[data-style="brutalism"] nav a,
  .brutalism-styled-container nav a {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #000000;
    text-decoration: none;
    padding: 0.4rem 0.75rem;
    border: 2px solid transparent;
    transition: transform 80ms ease, box-shadow 80ms ease, background-color 80ms ease;
    display: inline-flex;
    align-items: center;
  }

  .lab-styled-preview[data-style="brutalism"] nav a:hover,
  .brutalism-styled-container nav a:hover {
    border-color: #000000;
    background-color: #ffe600;
    box-shadow: 2px 2px 0px #000000;
    transform: translate(-1px, -1px);
    text-decoration: none;
  }

  .lab-styled-preview[data-style="brutalism"] nav a:active,
  .brutalism-styled-container nav a:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }

  /* 2. Eyebrow Kickers & Metadata */
  .lab-styled-preview[data-style="brutalism"] header > p:first-child,
  .lab-styled-preview[data-style="brutalism"] section > p:first-child:not(:last-child),
  .brutalism-styled-container header > p:first-child,
  .brutalism-styled-container section > p:first-child:not(:last-child) {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background-color: #ffe600;
    color: #000000;
    border: 2px solid #000000;
    padding: 0.25rem 0.625rem;
    display: inline-block;
    margin-bottom: 0.85rem;
    box-shadow: 2px 2px 0px #000000;
  }

  /* 3. Typography Hierarchy */
  .lab-styled-preview[data-style="brutalism"] h1,
  .brutalism-styled-container h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: #000000;
    margin: 0 0 1rem;
    text-transform: none;
  }

  .lab-styled-preview[data-style="brutalism"] h2,
  .brutalism-styled-container h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.5rem, 3vw, 1.85rem);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 2rem 0 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 2.5px solid #000000;
    text-transform: none;
  }

  .lab-styled-preview[data-style="brutalism"] h3,
  .brutalism-styled-container h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #000000;
    margin: 1.25rem 0 0.5rem;
    text-transform: none;
  }

  .lab-styled-preview[data-style="brutalism"] h4,
  .brutalism-styled-container h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #000000;
    margin: 0.75rem 0 0.35rem;
  }

  .lab-styled-preview[data-style="brutalism"] p,
  .brutalism-styled-container p {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.0625rem;
    line-height: 1.6;
    color: #1a1a1a;
    margin: 0 0 1.25rem;
  }

  .lab-styled-preview[data-style="brutalism"] strong,
  .lab-styled-preview[data-style="brutalism"] b,
  .brutalism-styled-container strong,
  .brutalism-styled-container b {
    font-weight: 800;
    color: #000000;
  }

  /* 4. Interactive Buttons */
  .lab-styled-preview[data-style="brutalism"] button,
  .lab-styled-preview[data-style="brutalism"] input[type="submit"],
  .lab-styled-preview[data-style="brutalism"] input[type="button"],
  .brutalism-styled-container button,
  .brutalism-styled-container input[type="submit"],
  .brutalism-styled-container input[type="button"] {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.875rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;
    background-color: #ffe600;
    color: #000000;
    border: 3px solid #000000;
    border-radius: 0px;
    box-shadow: 4px 4px 0px #000000;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    transition: transform 80ms ease, box-shadow 80ms ease, background 80ms ease;
    margin: 0.5rem 0.5rem 0.5rem 0;
  }

  .lab-styled-preview[data-style="brutalism"] button:hover,
  .lab-styled-preview[data-style="brutalism"] input[type="submit"]:hover,
  .brutalism-styled-container button:hover,
  .brutalism-styled-container input[type="submit"]:hover {
    background-color: #fff04d;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #000000;
  }

  .lab-styled-preview[data-style="brutalism"] button:active,
  .lab-styled-preview[data-style="brutalism"] input[type="submit"]:active,
  .brutalism-styled-container button:active,
  .brutalism-styled-container input[type="submit"]:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0px #000000;
  }

  .lab-styled-preview[data-style="brutalism"] button:focus-visible,
  .brutalism-styled-container button:focus-visible {
    outline: 3px solid #000000;
    outline-offset: 2px;
  }

  .lab-styled-preview[data-style="brutalism"] button:disabled,
  .brutalism-styled-container button:disabled {
    background-color: #e2e0d5;
    color: #777777;
    border-color: #777777;
    box-shadow: none;
    cursor: not-allowed;
    transform: none;
  }

  /* 5. Editorial Content & Articles */
  .lab-styled-preview[data-style="brutalism"] article,
  .brutalism-styled-container article {
    background-color: #ffffff;
    border: 2.5px solid #000000;
    border-radius: 0px;
    padding: 1.5rem;
    box-shadow: 4px 4px 0px #000000;
    margin-bottom: 1.5rem;
    transition: transform 100ms ease, box-shadow 100ms ease;
  }

  .lab-styled-preview[data-style="brutalism"] article:hover,
  .brutalism-styled-container article:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #000000;
  }

  .lab-styled-preview[data-style="brutalism"] blockquote,
  .brutalism-styled-container blockquote {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    font-style: normal;
    line-height: 1.5;
    color: #000000;
    background-color: #eae8dc;
    border-left: 5px solid #000000;
    border-top: 2px solid #000000;
    border-right: 2px solid #000000;
    border-bottom: 2px solid #000000;
    padding: 1.5rem;
    margin: 2rem 0;
    box-shadow: 4px 4px 0px #000000;
  }

  /* 6. Raw Data & Tables */
  .lab-styled-preview[data-style="brutalism"] table,
  .brutalism-styled-container table {
    width: 100%;
    border-collapse: collapse;
    border: 3px solid #000000;
    margin: 1.5rem 0;
    box-shadow: 4px 4px 0px #000000;
    background-color: #ffffff;
  }

  .lab-styled-preview[data-style="brutalism"] th,
  .brutalism-styled-container th {
    background-color: #000000;
    color: #ffe600;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.75rem 1rem;
    border: 2px solid #000000;
    text-align: left;
  }

  .lab-styled-preview[data-style="brutalism"] td,
  .brutalism-styled-container td {
    border: 2px solid #000000;
    padding: 0.75rem 1rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.9375rem;
    color: #000000;
  }

  .lab-styled-preview[data-style="brutalism"] tr:nth-child(even),
  .brutalism-styled-container tr:nth-child(even) {
    background-color: #f7f6f0;
  }

  /* 7. Forms & Fieldsets */
  .lab-styled-preview[data-style="brutalism"] form,
  .brutalism-styled-container form {
    background-color: #ffffff;
    border: 3px solid #000000;
    padding: 2rem;
    box-shadow: 6px 6px 0px #000000;
    margin-bottom: 2rem;
  }

  .lab-styled-preview[data-style="brutalism"] fieldset,
  .brutalism-styled-container fieldset {
    border: 2px solid #000000;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    background-color: #faf9f5;
  }

  .lab-styled-preview[data-style="brutalism"] legend,
  .brutalism-styled-container legend {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background-color: #ffe600;
    color: #000000;
    border: 2px solid #000000;
    padding: 0.2rem 0.5rem;
    box-shadow: 2px 2px 0px #000000;
  }

  .lab-styled-preview[data-style="brutalism"] label,
  .brutalism-styled-container label {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 0.4rem;
  }

  .lab-styled-preview[data-style="brutalism"] input[type="text"],
  .lab-styled-preview[data-style="brutalism"] input[type="email"],
  .lab-styled-preview[data-style="brutalism"] input[type="tel"],
  .lab-styled-preview[data-style="brutalism"] input[type="number"],
  .lab-styled-preview[data-style="brutalism"] select,
  .lab-styled-preview[data-style="brutalism"] textarea,
  .brutalism-styled-container input[type="text"],
  .brutalism-styled-container input[type="email"],
  .brutalism-styled-container input[type="tel"],
  .brutalism-styled-container input[type="number"],
  .brutalism-styled-container select,
  .brutalism-styled-container textarea {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 2.5px solid #000000;
    border-radius: 0px;
    padding: 0.75rem 1rem;
    color: #000000;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9375rem;
    box-shadow: 3px 3px 0px #000000;
    margin-bottom: 1.25rem;
    outline: none;
    transition: box-shadow 100ms ease, border-color 100ms ease;
  }

  .lab-styled-preview[data-style="brutalism"] input:focus,
  .lab-styled-preview[data-style="brutalism"] select:focus,
  .lab-styled-preview[data-style="brutalism"] textarea:focus,
  .brutalism-styled-container input:focus,
  .brutalism-styled-container select:focus,
  .brutalism-styled-container textarea:focus {
    border-color: #000000;
    box-shadow: 5px 5px 0px #ffe600;
    background-color: #ffffff;
  }

  .lab-styled-preview[data-style="brutalism"] input::placeholder,
  .lab-styled-preview[data-style="brutalism"] textarea::placeholder,
  .brutalism-styled-container input::placeholder,
  .brutalism-styled-container textarea::placeholder {
    color: #777777;
    opacity: 1;
  }

  /* 8. Lists */
  .lab-styled-preview[data-style="brutalism"] ul,
  .lab-styled-preview[data-style="brutalism"] ol,
  .brutalism-styled-container ul,
  .brutalism-styled-container ol {
    padding-left: 1.5rem;
    margin: 1rem 0 1.5rem;
  }

  .lab-styled-preview[data-style="brutalism"] li,
  .brutalism-styled-container li {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  .lab-styled-preview[data-style="brutalism"] ul > li,
  .brutalism-styled-container ul > li {
    list-style-type: square;
  }

  /* 9. Badges, Tags, Metadata */
  .lab-styled-preview[data-style="brutalism"] small,
  .lab-styled-preview[data-style="brutalism"] .badge,
  .lab-styled-preview[data-style="brutalism"] span.tag,
  .brutalism-styled-container small,
  .brutalism-styled-container .badge,
  .brutalism-styled-container span.tag {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background-color: #ffe600;
    color: #000000;
    border: 2px solid #000000;
    padding: 0.2rem 0.5rem;
    box-shadow: 2px 2px 0px #000000;
    border-radius: 0px;
    margin-right: 0.35rem;
  }

  /* 10. Links */
  .lab-styled-preview[data-style="brutalism"] a,
  .brutalism-styled-container a {
    color: #000000;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    transition: all 80ms ease;
  }

  .lab-styled-preview[data-style="brutalism"] a:hover,
  .brutalism-styled-container a:hover {
    background-color: #ffe600;
    text-decoration: none;
    box-shadow: 2px 2px 0px #000000;
  }

  /* 11. Footer */
  .lab-styled-preview[data-style="brutalism"] footer,
  .brutalism-styled-container footer {
    border-top: 3px solid #000000;
    padding: 2rem 0 1rem;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .lab-styled-preview[data-style="brutalism"] footer p,
  .brutalism-styled-container footer p {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8125rem;
    color: #555555;
    margin: 0;
  }
`;
