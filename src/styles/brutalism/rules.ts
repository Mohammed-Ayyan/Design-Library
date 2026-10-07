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
  .brutalism-styled-container,
  .style-brutalism,
  [data-style="brutalism"],
  .ds-scope[data-style-id="brutalism"],
  .style-brutalist,
  [data-style="brutalist"],
  .ds-scope[data-style-id="brutalist"] {
    background-color: #f4f3ed !important;
    color: #000000 !important;
    font-family: 'Space Grotesk', -apple-system, sans-serif !important;
    line-height: 1.55 !important;
    letter-spacing: 0em !important;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.15) !important;
  }

  /* Container Canvas Bounds when applied to wrapper div/section/main */
  div.style-brutalism,
  section.style-brutalism,
  main.style-brutalism,
  article.style-brutalism,
  .lab-styled-preview[data-style="brutalism"],
  .brutalism-styled-container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 2.5rem 2rem;
    box-sizing: border-box;
    width: 100%;
  }

  /* 0. Header Architecture (Banner Card) */
  .lab-styled-preview[data-style="brutalism"] header,
  .brutalism-styled-container header,
  .style-brutalism header,
  [data-style="brutalism"] header,
  .ds-scope[data-style-id="brutalism"] header,
  .style-brutalist header,
  [data-style="brutalist"] header,
  .ds-scope[data-style-id="brutalist"] header {
    background-color: #ffffff;
    border: 3px solid #000000;
    box-shadow: 5px 5px 0px #000000;
    padding: 1.5rem 2rem;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    box-sizing: border-box;
    width: 100%;
  }

  .lab-styled-preview[data-style="brutalism"] header h1,
  .brutalism-styled-container header h1,
  .style-brutalism header h1,
  [data-style="brutalism"] header h1,
  .ds-scope[data-style-id="brutalism"] header h1,
  .style-brutalist header h1,
  [data-style="brutalist"] header h1,
  .ds-scope[data-style-id="brutalist"] header h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: #000000;
    margin: 0;
    text-transform: uppercase;
  }

  .lab-styled-preview[data-style="brutalism"] header p,
  .brutalism-styled-container header p,
  .style-brutalism header p,
  [data-style="brutalism"] header p,
  .ds-scope[data-style-id="brutalism"] header p,
  .style-brutalist header p,
  [data-style="brutalist"] header p,
  .ds-scope[data-style-id="brutalist"] header p {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    color: #222222;
    margin: 0.25rem 0 0;
  }

  /* 1. Navigation Bar Language */
  .lab-styled-preview[data-style="brutalism"] nav,
  .brutalism-styled-container nav,
  .style-brutalism nav,
  [data-style="brutalism"] nav,
  .ds-scope[data-style-id="brutalism"] nav,
  .style-brutalist nav,
  [data-style="brutalist"] nav,
  .ds-scope[data-style-id="brutalist"] nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  /* Standalone nav outside header gets bottom border ledger */
  .style-brutalism > nav,
  .style-brutalism main > nav,
  .lab-styled-preview[data-style="brutalism"] > nav {
    padding: 0.85rem 0 1.25rem;
    border-bottom: 3px solid #000000;
    margin-bottom: 2.5rem;
    width: 100%;
  }

  /* Header nav has no extra border */
  .style-brutalism header nav,
  .lab-styled-preview[data-style="brutalism"] header nav,
  .brutalism-styled-container header nav,
  [data-style="brutalism"] header nav,
  .ds-scope[data-style-id="brutalism"] header nav,
  .style-brutalist header nav,
  [data-style="brutalist"] header nav,
  .ds-scope[data-style-id="brutalist"] header nav {
    border-bottom: none;
    margin-bottom: 0;
    padding: 0;
  }

  .lab-styled-preview[data-style="brutalism"] nav ul,
  .lab-styled-preview[data-style="brutalism"] nav ol,
  .brutalism-styled-container nav ul,
  .brutalism-styled-container nav ol,
  .style-brutalism nav ul,
  .style-brutalism nav ol,
  [data-style="brutalism"] nav ul,
  [data-style="brutalism"] nav ol,
  .ds-scope[data-style-id="brutalism"] nav ul,
  .ds-scope[data-style-id="brutalism"] nav ol,
  .style-brutalist nav ul,
  .style-brutalist nav ol,
  [data-style="brutalist"] nav ul,
  [data-style="brutalist"] nav ol,
  .ds-scope[data-style-id="brutalist"] nav ul,
  .ds-scope[data-style-id="brutalist"] nav ol {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
    gap: 0.75rem !important;
  }

  .lab-styled-preview[data-style="brutalism"] nav li,
  .brutalism-styled-container nav li,
  .style-brutalism nav li,
  [data-style="brutalism"] nav li,
  .ds-scope[data-style-id="brutalism"] nav li,
  .style-brutalist nav li,
  [data-style="brutalist"] nav li,
  .ds-scope[data-style-id="brutalist"] nav li {
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
    display: inline-flex !important;
    align-items: center !important;
  }

  .lab-styled-preview[data-style="brutalism"] nav a,
  .brutalism-styled-container nav a,
  .style-brutalism nav a,
  [data-style="brutalism"] nav a,
  .ds-scope[data-style-id="brutalism"] nav a,
  .style-brutalist nav a,
  [data-style="brutalist"] nav a,
  .ds-scope[data-style-id="brutalist"] nav a {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #000000;
    text-decoration: none;
    padding: 0.45rem 0.9rem;
    border: 2px solid #000000;
    background-color: #ffffff;
    box-shadow: 2px 2px 0px #000000;
    transition: transform 80ms ease, box-shadow 80ms ease, background-color 80ms ease;
    display: inline-flex;
    align-items: center;
  }

  .lab-styled-preview[data-style="brutalism"] nav a:hover,
  .brutalism-styled-container nav a:hover,
  .style-brutalism nav a:hover,
  [data-style="brutalism"] nav a:hover,
  .ds-scope[data-style-id="brutalism"] nav a:hover,
  .style-brutalist nav a:hover,
  [data-style="brutalist"] nav a:hover,
  .ds-scope[data-style-id="brutalist"] nav a:hover {
    border-color: #000000;
    background-color: #ffe600;
    box-shadow: 4px 4px 0px #000000;
    transform: translate(-1px, -1px);
    text-decoration: none;
  }

  .lab-styled-preview[data-style="brutalism"] nav a:active,
  .brutalism-styled-container nav a:active,
  .style-brutalism nav a:active,
  [data-style="brutalism"] nav a:active,
  .ds-scope[data-style-id="brutalism"] nav a:active,
  .style-brutalist nav a:active,
  [data-style="brutalist"] nav a:active,
  .ds-scope[data-style-id="brutalist"] nav a:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0px #000000;
  }

  /* 2. Eyebrow Kickers & Metadata */
  .lab-styled-preview[data-style="brutalism"] header > p:first-child,
  .lab-styled-preview[data-style="brutalism"] section > p:first-child:not(:last-child),
  .brutalism-styled-container header > p:first-child,
  .style-brutalism header > p:first-child,
  [data-style="brutalism"] header > p:first-child,
  .ds-scope[data-style-id="brutalism"] header > p:first-child,
  .style-brutalist header > p:first-child,
  [data-style="brutalist"] header > p:first-child,
  .ds-scope[data-style-id="brutalist"] header > p:first-child,
  .brutalism-styled-container section > p:first-child:not(:last-child),
  .style-brutalism section > p:first-child:not(:last-child),
  [data-style="brutalism"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="brutalism"] section > p:first-child:not(:last-child),
  .style-brutalist section > p:first-child:not(:last-child),
  [data-style="brutalist"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="brutalist"] section > p:first-child:not(:last-child) {
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
  .brutalism-styled-container h1,
  .style-brutalism h1,
  [data-style="brutalism"] h1,
  .ds-scope[data-style-id="brutalism"] h1,
  .style-brutalist h1,
  [data-style="brutalist"] h1,
  .ds-scope[data-style-id="brutalist"] h1 {
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
  .brutalism-styled-container h2,
  .style-brutalism h2,
  [data-style="brutalism"] h2,
  .ds-scope[data-style-id="brutalism"] h2,
  .style-brutalist h2,
  [data-style="brutalist"] h2,
  .ds-scope[data-style-id="brutalist"] h2 {
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
  .brutalism-styled-container h3,
  .style-brutalism h3,
  [data-style="brutalism"] h3,
  .ds-scope[data-style-id="brutalism"] h3,
  .style-brutalist h3,
  [data-style="brutalist"] h3,
  .ds-scope[data-style-id="brutalist"] h3 {
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
  .brutalism-styled-container h4,
  .style-brutalism h4,
  [data-style="brutalism"] h4,
  .ds-scope[data-style-id="brutalism"] h4,
  .style-brutalist h4,
  [data-style="brutalist"] h4,
  .ds-scope[data-style-id="brutalist"] h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #000000;
    margin: 0.75rem 0 0.35rem;
  }

  .lab-styled-preview[data-style="brutalism"] p,
  .brutalism-styled-container p,
  .style-brutalism p,
  [data-style="brutalism"] p,
  .ds-scope[data-style-id="brutalism"] p,
  .style-brutalist p,
  [data-style="brutalist"] p,
  .ds-scope[data-style-id="brutalist"] p {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.0625rem;
    line-height: 1.6;
    color: #1a1a1a;
    margin: 0 0 1.25rem;
  }

  .lab-styled-preview[data-style="brutalism"] strong,
  .lab-styled-preview[data-style="brutalism"] b,
  .brutalism-styled-container strong,
  .style-brutalism strong,
  [data-style="brutalism"] strong,
  .ds-scope[data-style-id="brutalism"] strong,
  .style-brutalist strong,
  [data-style="brutalist"] strong,
  .ds-scope[data-style-id="brutalist"] strong,
  .brutalism-styled-container b,
  .style-brutalism b,
  [data-style="brutalism"] b,
  .ds-scope[data-style-id="brutalism"] b,
  .style-brutalist b,
  [data-style="brutalist"] b,
  .ds-scope[data-style-id="brutalist"] b {
    font-weight: 800;
    color: #000000;
  }

  /* 4. Interactive Buttons */
  .lab-styled-preview[data-style="brutalism"] button,
  .lab-styled-preview[data-style="brutalism"] input[type="submit"],
  .lab-styled-preview[data-style="brutalism"] input[type="button"],
  .brutalism-styled-container button,
  .style-brutalism button,
  [data-style="brutalism"] button,
  .ds-scope[data-style-id="brutalism"] button,
  .style-brutalist button,
  [data-style="brutalist"] button,
  .ds-scope[data-style-id="brutalist"] button,
  .brutalism-styled-container input[type="submit"],
  .style-brutalism input[type="submit"],
  [data-style="brutalism"] input[type="submit"],
  .ds-scope[data-style-id="brutalism"] input[type="submit"],
  .style-brutalist input[type="submit"],
  [data-style="brutalist"] input[type="submit"],
  .ds-scope[data-style-id="brutalist"] input[type="submit"],
  .brutalism-styled-container input[type="button"],
  .style-brutalism input[type="button"],
  [data-style="brutalism"] input[type="button"],
  .ds-scope[data-style-id="brutalism"] input[type="button"],
  .style-brutalist input[type="button"],
  [data-style="brutalist"] input[type="button"],
  .ds-scope[data-style-id="brutalist"] input[type="button"] {
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
  .style-brutalism button:hover,
  [data-style="brutalism"] button:hover,
  .ds-scope[data-style-id="brutalism"] button:hover,
  .style-brutalist button:hover,
  [data-style="brutalist"] button:hover,
  .ds-scope[data-style-id="brutalist"] button:hover,
  .brutalism-styled-container input[type="submit"]:hover,
  .style-brutalism input[type="submit"]:hover,
  [data-style="brutalism"] input[type="submit"]:hover,
  .ds-scope[data-style-id="brutalism"] input[type="submit"]:hover,
  .style-brutalist input[type="submit"]:hover,
  [data-style="brutalist"] input[type="submit"]:hover,
  .ds-scope[data-style-id="brutalist"] input[type="submit"]:hover {
    background-color: #fff04d;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #000000;
  }

  .lab-styled-preview[data-style="brutalism"] button:active,
  .lab-styled-preview[data-style="brutalism"] input[type="submit"]:active,
  .brutalism-styled-container button:active,
  .style-brutalism button:active,
  [data-style="brutalism"] button:active,
  .ds-scope[data-style-id="brutalism"] button:active,
  .style-brutalist button:active,
  [data-style="brutalist"] button:active,
  .ds-scope[data-style-id="brutalist"] button:active,
  .brutalism-styled-container input[type="submit"]:active,
  .style-brutalism input[type="submit"]:active,
  [data-style="brutalism"] input[type="submit"]:active,
  .ds-scope[data-style-id="brutalism"] input[type="submit"]:active,
  .style-brutalist input[type="submit"]:active,
  [data-style="brutalist"] input[type="submit"]:active,
  .ds-scope[data-style-id="brutalist"] input[type="submit"]:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0px #000000;
  }

  .lab-styled-preview[data-style="brutalism"] button:focus-visible,
  .brutalism-styled-container button:focus-visible,
  .style-brutalism button:focus-visible,
  [data-style="brutalism"] button:focus-visible,
  .ds-scope[data-style-id="brutalism"] button:focus-visible,
  .style-brutalist button:focus-visible,
  [data-style="brutalist"] button:focus-visible,
  .ds-scope[data-style-id="brutalist"] button:focus-visible {
    outline: 3px solid #000000;
    outline-offset: 2px;
  }

  .lab-styled-preview[data-style="brutalism"] button:disabled,
  .brutalism-styled-container button:disabled,
  .style-brutalism button:disabled,
  [data-style="brutalism"] button:disabled,
  .ds-scope[data-style-id="brutalism"] button:disabled,
  .style-brutalist button:disabled,
  [data-style="brutalist"] button:disabled,
  .ds-scope[data-style-id="brutalist"] button:disabled {
    background-color: #e2e0d5;
    color: #777777;
    border-color: #777777;
    box-shadow: none;
    cursor: not-allowed;
    transform: none;
  }

  /* 5. Main Flow & Child Sections / Content Cards */
  .lab-styled-preview[data-style="brutalism"] main,
  .brutalism-styled-container main,
  .style-brutalism main,
  [data-style="brutalism"] main,
  .ds-scope[data-style-id="brutalism"] main,
  .style-brutalist main,
  [data-style="brutalist"] main,
  .ds-scope[data-style-id="brutalist"] main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .lab-styled-preview[data-style="brutalism"] section:not([class*="style-"]),
  .brutalism-styled-container section:not([class*="style-"]),
  .style-brutalism section:not([class*="style-"]),
  [data-style="brutalism"] section:not([class*="style-"]),
  .ds-scope[data-style-id="brutalism"] section:not([class*="style-"]),
  .style-brutalist section:not([class*="style-"]),
  [data-style="brutalist"] section:not([class*="style-"]),
  .ds-scope[data-style-id="brutalist"] section:not([class*="style-"]),
  .style-brutalism main > section,
  [data-style="brutalism"] main > section {
    background-color: #ffffff;
    border: 3px solid #000000 !important;
    border-radius: 0px;
    padding: 2rem 2.25rem;
    box-shadow: 5px 5px 0px #000000;
    margin-bottom: 2.5rem;
    box-sizing: border-box;
    width: 100%;
    transition: transform 100ms ease, box-shadow 100ms ease;
  }

  .lab-styled-preview[data-style="brutalism"] section:not([class*="style-"]):hover,
  .brutalism-styled-container section:not([class*="style-"]):hover,
  .style-brutalism section:not([class*="style-"]):hover,
  [data-style="brutalism"] section:not([class*="style-"]):hover,
  .ds-scope[data-style-id="brutalism"] section:not([class*="style-"]):hover,
  .style-brutalist section:not([class*="style-"]):hover,
  [data-style="brutalist"] section:not([class*="style-"]):hover,
  .ds-scope[data-style-id="brutalist"] section:not([class*="style-"]):hover,
  .style-brutalism main > section:hover,
  [data-style="brutalism"] main > section:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0px #000000;
  }

  .lab-styled-preview[data-style="brutalism"] section:not([class*="style-"]) > h2,
  .brutalism-styled-container section:not([class*="style-"]) > h2,
  .style-brutalism section:not([class*="style-"]) > h2,
  [data-style="brutalism"] section:not([class*="style-"]) > h2,
  .ds-scope[data-style-id="brutalism"] section:not([class*="style-"]) > h2,
  .style-brutalist section:not([class*="style-"]) > h2,
  [data-style="brutalist"] section:not([class*="style-"]) > h2,
  .ds-scope[data-style-id="brutalist"] section:not([class*="style-"]) > h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.5rem, 3vw, 1.85rem);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 0 0 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2.5px solid #000000;
    text-transform: uppercase;
  }

  /* 5b. Editorial Content & Articles */
  .lab-styled-preview[data-style="brutalism"] article,
  .brutalism-styled-container article,
  .style-brutalism article,
  [data-style="brutalism"] article,
  .ds-scope[data-style-id="brutalism"] article,
  .style-brutalist article,
  [data-style="brutalist"] article,
  .ds-scope[data-style-id="brutalist"] article {
    background-color: #ffffff;
    border: 2.5px solid #000000;
    border-radius: 0px;
    padding: 1.5rem;
    box-shadow: 4px 4px 0px #000000;
    margin-bottom: 1.5rem;
    transition: transform 100ms ease, box-shadow 100ms ease;
  }

  .lab-styled-preview[data-style="brutalism"] article:hover,
  .brutalism-styled-container article:hover,
  .style-brutalism article:hover,
  [data-style="brutalism"] article:hover,
  .ds-scope[data-style-id="brutalism"] article:hover,
  .style-brutalist article:hover,
  [data-style="brutalist"] article:hover,
  .ds-scope[data-style-id="brutalist"] article:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #000000;
  }

  .lab-styled-preview[data-style="brutalism"] code,
  .brutalism-styled-container code,
  .style-brutalism code,
  [data-style="brutalism"] code,
  .ds-scope[data-style-id="brutalism"] code,
  .style-brutalist code,
  [data-style="brutalist"] code,
  .ds-scope[data-style-id="brutalist"] code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.875em;
    background-color: #ffe600;
    color: #000000;
    border: 1.5px solid #000000;
    padding: 0.15rem 0.4rem;
    box-shadow: 1.5px 1.5px 0px #000000;
    font-weight: 700;
  }

  .lab-styled-preview[data-style="brutalism"] blockquote,
  .brutalism-styled-container blockquote,
  .style-brutalism blockquote,
  [data-style="brutalism"] blockquote,
  .ds-scope[data-style-id="brutalism"] blockquote,
  .style-brutalist blockquote,
  [data-style="brutalist"] blockquote,
  .ds-scope[data-style-id="brutalist"] blockquote {
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
  .brutalism-styled-container table,
  .style-brutalism table,
  [data-style="brutalism"] table,
  .ds-scope[data-style-id="brutalism"] table,
  .style-brutalist table,
  [data-style="brutalist"] table,
  .ds-scope[data-style-id="brutalist"] table {
    width: 100%;
    border-collapse: collapse;
    border: 3px solid #000000;
    margin: 1.5rem 0;
    box-shadow: 4px 4px 0px #000000;
    background-color: #ffffff;
  }

  .lab-styled-preview[data-style="brutalism"] th,
  .brutalism-styled-container th,
  .style-brutalism th,
  [data-style="brutalism"] th,
  .ds-scope[data-style-id="brutalism"] th,
  .style-brutalist th,
  [data-style="brutalist"] th,
  .ds-scope[data-style-id="brutalist"] th {
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
  .brutalism-styled-container td,
  .style-brutalism td,
  [data-style="brutalism"] td,
  .ds-scope[data-style-id="brutalism"] td,
  .style-brutalist td,
  [data-style="brutalist"] td,
  .ds-scope[data-style-id="brutalist"] td {
    border: 2px solid #000000;
    padding: 0.75rem 1rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.9375rem;
    color: #000000;
  }

  .lab-styled-preview[data-style="brutalism"] tr:nth-child(even),
  .brutalism-styled-container tr:nth-child(even),
  .style-brutalism tr:nth-child(even),
  [data-style="brutalism"] tr:nth-child(even),
  .ds-scope[data-style-id="brutalism"] tr:nth-child(even),
  .style-brutalist tr:nth-child(even),
  [data-style="brutalist"] tr:nth-child(even),
  .ds-scope[data-style-id="brutalist"] tr:nth-child(even) {
    background-color: #f7f6f0;
  }

  /* 7. Forms & Fieldsets */
  .lab-styled-preview[data-style="brutalism"] form,
  .brutalism-styled-container form,
  .style-brutalism form,
  [data-style="brutalism"] form,
  .ds-scope[data-style-id="brutalism"] form,
  .style-brutalist form,
  [data-style="brutalist"] form,
  .ds-scope[data-style-id="brutalist"] form {
    background-color: #ffffff;
    border: 3px solid #000000;
    padding: 2rem;
    box-shadow: 6px 6px 0px #000000;
    margin-bottom: 2rem;
  }

  .lab-styled-preview[data-style="brutalism"] fieldset,
  .brutalism-styled-container fieldset,
  .style-brutalism fieldset,
  [data-style="brutalism"] fieldset,
  .ds-scope[data-style-id="brutalism"] fieldset,
  .style-brutalist fieldset,
  [data-style="brutalist"] fieldset,
  .ds-scope[data-style-id="brutalist"] fieldset {
    border: 2px solid #000000;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    background-color: #faf9f5;
  }

  .lab-styled-preview[data-style="brutalism"] legend,
  .brutalism-styled-container legend,
  .style-brutalism legend,
  [data-style="brutalism"] legend,
  .ds-scope[data-style-id="brutalism"] legend,
  .style-brutalist legend,
  [data-style="brutalist"] legend,
  .ds-scope[data-style-id="brutalist"] legend {
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
  .brutalism-styled-container label,
  .style-brutalism label,
  [data-style="brutalism"] label,
  .ds-scope[data-style-id="brutalism"] label,
  .style-brutalist label,
  [data-style="brutalist"] label,
  .ds-scope[data-style-id="brutalist"] label {
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
  .style-brutalism input[type="text"],
  [data-style="brutalism"] input[type="text"],
  .ds-scope[data-style-id="brutalism"] input[type="text"],
  .style-brutalist input[type="text"],
  [data-style="brutalist"] input[type="text"],
  .ds-scope[data-style-id="brutalist"] input[type="text"],
  .brutalism-styled-container input[type="email"],
  .style-brutalism input[type="email"],
  [data-style="brutalism"] input[type="email"],
  .ds-scope[data-style-id="brutalism"] input[type="email"],
  .style-brutalist input[type="email"],
  [data-style="brutalist"] input[type="email"],
  .ds-scope[data-style-id="brutalist"] input[type="email"],
  .brutalism-styled-container input[type="tel"],
  .style-brutalism input[type="tel"],
  [data-style="brutalism"] input[type="tel"],
  .ds-scope[data-style-id="brutalism"] input[type="tel"],
  .style-brutalist input[type="tel"],
  [data-style="brutalist"] input[type="tel"],
  .ds-scope[data-style-id="brutalist"] input[type="tel"],
  .brutalism-styled-container input[type="number"],
  .style-brutalism input[type="number"],
  [data-style="brutalism"] input[type="number"],
  .ds-scope[data-style-id="brutalism"] input[type="number"],
  .style-brutalist input[type="number"],
  [data-style="brutalist"] input[type="number"],
  .ds-scope[data-style-id="brutalist"] input[type="number"],
  .brutalism-styled-container select,
  .style-brutalism select,
  [data-style="brutalism"] select,
  .ds-scope[data-style-id="brutalism"] select,
  .style-brutalist select,
  [data-style="brutalist"] select,
  .ds-scope[data-style-id="brutalist"] select,
  .brutalism-styled-container textarea,
  .style-brutalism textarea,
  [data-style="brutalism"] textarea,
  .ds-scope[data-style-id="brutalism"] textarea,
  .style-brutalist textarea,
  [data-style="brutalist"] textarea,
  .ds-scope[data-style-id="brutalist"] textarea {
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
  .style-brutalism input:focus,
  [data-style="brutalism"] input:focus,
  .ds-scope[data-style-id="brutalism"] input:focus,
  .style-brutalist input:focus,
  [data-style="brutalist"] input:focus,
  .ds-scope[data-style-id="brutalist"] input:focus,
  .brutalism-styled-container select:focus,
  .style-brutalism select:focus,
  [data-style="brutalism"] select:focus,
  .ds-scope[data-style-id="brutalism"] select:focus,
  .style-brutalist select:focus,
  [data-style="brutalist"] select:focus,
  .ds-scope[data-style-id="brutalist"] select:focus,
  .brutalism-styled-container textarea:focus,
  .style-brutalism textarea:focus,
  [data-style="brutalism"] textarea:focus,
  .ds-scope[data-style-id="brutalism"] textarea:focus,
  .style-brutalist textarea:focus,
  [data-style="brutalist"] textarea:focus,
  .ds-scope[data-style-id="brutalist"] textarea:focus {
    border-color: #000000;
    box-shadow: 5px 5px 0px #ffe600;
    background-color: #ffffff;
  }

  .lab-styled-preview[data-style="brutalism"] input::placeholder,
  .lab-styled-preview[data-style="brutalism"] textarea::placeholder,
  .brutalism-styled-container input::placeholder,
  .style-brutalism input::placeholder,
  [data-style="brutalism"] input::placeholder,
  .ds-scope[data-style-id="brutalism"] input::placeholder,
  .style-brutalist input::placeholder,
  [data-style="brutalist"] input::placeholder,
  .ds-scope[data-style-id="brutalist"] input::placeholder,
  .brutalism-styled-container textarea::placeholder,
  .style-brutalism textarea::placeholder,
  [data-style="brutalism"] textarea::placeholder,
  .ds-scope[data-style-id="brutalism"] textarea::placeholder,
  .style-brutalist textarea::placeholder,
  [data-style="brutalist"] textarea::placeholder,
  .ds-scope[data-style-id="brutalist"] textarea::placeholder {
    color: #777777;
    opacity: 1;
  }

  /* 8. Lists (Content lists only, avoiding navigation lists) */
  .lab-styled-preview[data-style="brutalism"] ul:not(nav ul),
  .lab-styled-preview[data-style="brutalism"] ol:not(nav ol),
  .brutalism-styled-container ul:not(nav ul),
  .style-brutalism ul:not(nav ul),
  [data-style="brutalism"] ul:not(nav ul),
  .ds-scope[data-style-id="brutalism"] ul:not(nav ul),
  .style-brutalist ul:not(nav ul),
  [data-style="brutalist"] ul:not(nav ul),
  .ds-scope[data-style-id="brutalist"] ul:not(nav ul),
  .brutalism-styled-container ol:not(nav ol),
  .style-brutalism ol:not(nav ol),
  [data-style="brutalism"] ol:not(nav ol),
  .ds-scope[data-style-id="brutalism"] ol:not(nav ol),
  .style-brutalist ol:not(nav ol),
  [data-style="brutalist"] ol:not(nav ol),
  .ds-scope[data-style-id="brutalist"] ol:not(nav ol) {
    padding-left: 1.5rem;
    margin: 1rem 0 1.5rem;
  }

  .lab-styled-preview[data-style="brutalism"] li:not(nav li),
  .brutalism-styled-container li:not(nav li),
  .style-brutalism li:not(nav li),
  [data-style="brutalism"] li:not(nav li),
  .ds-scope[data-style-id="brutalism"] li:not(nav li),
  .style-brutalist li:not(nav li),
  [data-style="brutalist"] li:not(nav li),
  .ds-scope[data-style-id="brutalist"] li:not(nav li) {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  .lab-styled-preview[data-style="brutalism"] ul:not(nav ul) > li,
  .brutalism-styled-container ul:not(nav ul) > li,
  .style-brutalism ul:not(nav ul) > li,
  [data-style="brutalism"] ul:not(nav ul) > li,
  .ds-scope[data-style-id="brutalism"] ul:not(nav ul) > li,
  .style-brutalist ul:not(nav ul) > li,
  [data-style="brutalist"] ul:not(nav ul) > li,
  .ds-scope[data-style-id="brutalist"] ul:not(nav ul) > li {
    list-style-type: square;
  }

  /* 9. Badges, Tags, Metadata */
  .lab-styled-preview[data-style="brutalism"] small,
  .lab-styled-preview[data-style="brutalism"] .badge,
  .lab-styled-preview[data-style="brutalism"] span.tag,
  .brutalism-styled-container small,
  .style-brutalism small,
  [data-style="brutalism"] small,
  .ds-scope[data-style-id="brutalism"] small,
  .style-brutalist small,
  [data-style="brutalist"] small,
  .ds-scope[data-style-id="brutalist"] small,
  .brutalism-styled-container .badge,
  .style-brutalism .badge,
  [data-style="brutalism"] .badge,
  .ds-scope[data-style-id="brutalism"] .badge,
  .style-brutalist .badge,
  [data-style="brutalist"] .badge,
  .ds-scope[data-style-id="brutalist"] .badge,
  .brutalism-styled-container span.tag,
  .style-brutalism span.tag,
  [data-style="brutalism"] span.tag,
  .ds-scope[data-style-id="brutalism"] span.tag,
  .style-brutalist span.tag,
  [data-style="brutalist"] span.tag,
  .ds-scope[data-style-id="brutalist"] span.tag {
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
  .brutalism-styled-container a,
  .style-brutalism a,
  [data-style="brutalism"] a,
  .ds-scope[data-style-id="brutalism"] a,
  .style-brutalist a,
  [data-style="brutalist"] a,
  .ds-scope[data-style-id="brutalist"] a {
    color: #000000;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    transition: all 80ms ease;
  }

  .lab-styled-preview[data-style="brutalism"] a:hover,
  .brutalism-styled-container a:hover,
  .style-brutalism a:hover,
  [data-style="brutalism"] a:hover,
  .ds-scope[data-style-id="brutalism"] a:hover,
  .style-brutalist a:hover,
  [data-style="brutalist"] a:hover,
  .ds-scope[data-style-id="brutalist"] a:hover {
    background-color: #ffe600;
    text-decoration: none;
    box-shadow: 2px 2px 0px #000000;
  }

  /* 11. Footer */
  .lab-styled-preview[data-style="brutalism"] footer,
  .brutalism-styled-container footer,
  .style-brutalism footer,
  [data-style="brutalism"] footer,
  .ds-scope[data-style-id="brutalism"] footer,
  .style-brutalist footer,
  [data-style="brutalist"] footer,
  .ds-scope[data-style-id="brutalist"] footer {
    background-color: #ffffff;
    border: 3px solid #000000;
    box-shadow: 4px 4px 0px #000000;
    padding: 1.25rem 2rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    box-sizing: border-box;
    width: 100%;
  }

  .lab-styled-preview[data-style="brutalism"] footer p,
  .brutalism-styled-container footer p,
  .style-brutalism footer p,
  [data-style="brutalism"] footer p,
  .ds-scope[data-style-id="brutalism"] footer p,
  .style-brutalist footer p,
  [data-style="brutalist"] footer p,
  .ds-scope[data-style-id="brutalist"] footer p {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8125rem;
    font-weight: 700;
    color: #555555;
    margin: 0;
  }
`;
