/**
 * Swiss Design (International Typographic Style) Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Swiss Design
 * is applied. Centered on objective mathematical precision, authoritative sans-serif
 * typography, horizontal datum rules, asymmetric whitespace, flat planar geometry,
 * and restrained Swiss Red (#dc2626) information signals—preserving the user's
 * underlying HTML structure with zero DOM mutations.
 */

export const swissDesignSemanticCss = `
  /* Container Foundation: Pure Objective White with Flat Planar Geometry */
  .lab-styled-preview[data-style="swiss-design"],
  .swiss-design-styled-container,
  .style-swiss-design,
  [data-style="swiss-design"],
  .ds-scope[data-style-id="swiss-design"],
  .style-swiss,
  [data-style="swiss"],
  .ds-scope[data-style-id="swiss"] {
    background-color: #ffffff !important;
    color: #000000 !important;
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif !important;
    line-height: 1.55 !important;
    letter-spacing: -0.015em !important;
    box-shadow: none !important;
    position: relative !important;
  }

  /* 1. Engineered Masthead Navigation: Typographic Horizontal Baseline */
  .lab-styled-preview[data-style="swiss-design"] nav,
  .swiss-design-styled-container nav,
  .style-swiss-design nav,
  [data-style="swiss-design"] nav,
  .ds-scope[data-style-id="swiss-design"] nav,
  .style-swiss nav,
  [data-style="swiss"] nav,
  .ds-scope[data-style-id="swiss"] nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    padding: 1rem 0 1.25rem;
    border-bottom: 1px solid #000000;
    margin-bottom: 3.5rem;
    position: relative;
  }

  .lab-styled-preview[data-style="swiss-design"] nav a,
  .swiss-design-styled-container nav a,
  .style-swiss-design nav a,
  [data-style="swiss-design"] nav a,
  .ds-scope[data-style-id="swiss-design"] nav a,
  .style-swiss nav a,
  [data-style="swiss"] nav a,
  .ds-scope[data-style-id="swiss"] nav a {
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #000000;
    text-decoration: none;
    padding: 0.25rem 0;
    border-bottom: 2px solid transparent;
    transition: color 120ms ease, border-color 120ms ease;
    display: inline-flex;
    align-items: center;
  }

  .lab-styled-preview[data-style="swiss-design"] nav a:hover,
  .swiss-design-styled-container nav a:hover,
  .style-swiss-design nav a:hover,
  [data-style="swiss-design"] nav a:hover,
  .ds-scope[data-style-id="swiss-design"] nav a:hover,
  .style-swiss nav a:hover,
  [data-style="swiss"] nav a:hover,
  .ds-scope[data-style-id="swiss"] nav a:hover {
    color: #dc2626;
    border-bottom-color: #dc2626;
    text-decoration: none;
  }

  .lab-styled-preview[data-style="swiss-design"] nav a:first-child,
  .swiss-design-styled-container nav a:first-child,
  .style-swiss-design nav a:first-child,
  [data-style="swiss-design"] nav a:first-child,
  .ds-scope[data-style-id="swiss-design"] nav a:first-child,
  .style-swiss nav a:first-child,
  [data-style="swiss"] nav a:first-child,
  .ds-scope[data-style-id="swiss"] nav a:first-child {
    color: #000000;
    border-bottom-color: #000000;
  }

  /* 2. Eyebrow Kickers & Metadata: Small, Tracked, Objective Signals */
  .lab-styled-preview[data-style="swiss-design"] header > p:first-child,
  .lab-styled-preview[data-style="swiss-design"] section > p:first-child:not(:last-child),
  .lab-styled-preview[data-style="swiss-design"] article > p:first-child:not(:last-child),
  .swiss-design-styled-container header > p:first-child,
  .style-swiss-design header > p:first-child,
  [data-style="swiss-design"] header > p:first-child,
  .ds-scope[data-style-id="swiss-design"] header > p:first-child,
  .style-swiss header > p:first-child,
  [data-style="swiss"] header > p:first-child,
  .ds-scope[data-style-id="swiss"] header > p:first-child,
  .swiss-design-styled-container section > p:first-child:not(:last-child),
  .style-swiss-design section > p:first-child:not(:last-child),
  [data-style="swiss-design"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="swiss-design"] section > p:first-child:not(:last-child),
  .style-swiss section > p:first-child:not(:last-child),
  [data-style="swiss"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="swiss"] section > p:first-child:not(:last-child),
  .swiss-design-styled-container article > p:first-child:not(:last-child),
  .style-swiss-design article > p:first-child:not(:last-child),
  [data-style="swiss-design"] article > p:first-child:not(:last-child),
  .ds-scope[data-style-id="swiss-design"] article > p:first-child:not(:last-child),
  .style-swiss article > p:first-child:not(:last-child),
  [data-style="swiss"] article > p:first-child:not(:last-child),
  .ds-scope[data-style-id="swiss"] article > p:first-child:not(:last-child) {
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #52525b;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .lab-styled-preview[data-style="swiss-design"] header > p:first-child::before,
  .lab-styled-preview[data-style="swiss-design"] section > p:first-child:not(:last-child)::before,
  .lab-styled-preview[data-style="swiss-design"] article > p:first-child:not(:last-child)::before,
  .swiss-design-styled-container header > p:first-child::before,
  .style-swiss-design header > p:first-child::before,
  [data-style="swiss-design"] header > p:first-child::before,
  .ds-scope[data-style-id="swiss-design"] header > p:first-child::before,
  .style-swiss header > p:first-child::before,
  [data-style="swiss"] header > p:first-child::before,
  .ds-scope[data-style-id="swiss"] header > p:first-child::before,
  .swiss-design-styled-container section > p:first-child:not(:last-child)::before,
  .style-swiss-design section > p:first-child:not(:last-child)::before,
  [data-style="swiss-design"] section > p:first-child:not(:last-child)::before,
  .ds-scope[data-style-id="swiss-design"] section > p:first-child:not(:last-child)::before,
  .style-swiss section > p:first-child:not(:last-child)::before,
  [data-style="swiss"] section > p:first-child:not(:last-child)::before,
  .ds-scope[data-style-id="swiss"] section > p:first-child:not(:last-child)::before,
  .swiss-design-styled-container article > p:first-child:not(:last-child)::before,
  .style-swiss-design article > p:first-child:not(:last-child)::before,
  [data-style="swiss-design"] article > p:first-child:not(:last-child)::before,
  .ds-scope[data-style-id="swiss-design"] article > p:first-child:not(:last-child)::before,
  .style-swiss article > p:first-child:not(:last-child)::before,
  [data-style="swiss"] article > p:first-child:not(:last-child)::before,
  .ds-scope[data-style-id="swiss"] article > p:first-child:not(:last-child)::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #dc2626;
    flex-shrink: 0;
  }

  /* 3. Authoritative Typographic Hierarchy: Large Confident Sans-Serif */
  .lab-styled-preview[data-style="swiss-design"] h1,
  .swiss-design-styled-container h1,
  .style-swiss-design h1,
  [data-style="swiss-design"] h1,
  .ds-scope[data-style-id="swiss-design"] h1,
  .style-swiss h1,
  [data-style="swiss"] h1,
  .ds-scope[data-style-id="swiss"] h1 {
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif !important;
    font-size: clamp(2.35rem, 5.5vw, 4.25rem) !important;
    font-weight: 900 !important;
    line-height: 1.04 !important;
    letter-spacing: -0.04em !important;
    color: #000000 !important;
    margin: 0.5rem 0 1.5rem 0 !important;
    text-wrap: balance;
    overflow-wrap: break-word !important;
  }

  .lab-styled-preview[data-style="swiss-design"] h2,
  .swiss-design-styled-container h2,
  .style-swiss-design h2,
  [data-style="swiss-design"] h2,
  .ds-scope[data-style-id="swiss-design"] h2,
  .style-swiss h2,
  [data-style="swiss"] h2,
  .ds-scope[data-style-id="swiss"] h2 {
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif !important;
    font-size: clamp(1.65rem, 3.5vw, 2.25rem) !important;
    font-weight: 800 !important;
    line-height: 1.15 !important;
    letter-spacing: -0.03em !important;
    color: #000000 !important;
    margin: 3rem 0 1.5rem 0 !important;
    padding-bottom: 0.75rem !important;
    border-bottom: 1px solid #000000 !important;
    display: block !important;
    position: relative !important;
    overflow-wrap: break-word !important;
  }

  .lab-styled-preview[data-style="swiss-design"] h3,
  .swiss-design-styled-container h3,
  .style-swiss-design h3,
  [data-style="swiss-design"] h3,
  .ds-scope[data-style-id="swiss-design"] h3,
  .style-swiss h3,
  [data-style="swiss"] h3,
  .ds-scope[data-style-id="swiss"] h3 {
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif !important;
    font-size: 1.25rem !important;
    font-weight: 800 !important;
    line-height: 1.25 !important;
    letter-spacing: -0.02em !important;
    color: #000000 !important;
    margin: 0 0 0.35rem 0 !important;
    overflow-wrap: break-word !important;
  }

  .lab-styled-preview[data-style="swiss-design"] h4,
  .swiss-design-styled-container h4,
  .style-swiss-design h4,
  [data-style="swiss-design"] h4,
  .ds-scope[data-style-id="swiss-design"] h4,
  .style-swiss h4,
  [data-style="swiss"] h4,
  .ds-scope[data-style-id="swiss"] h4 {
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.08em !important;
    color: #52525b !important;
    margin: 0 0 0.25rem 0 !important;
    overflow-wrap: break-word !important;
  }

  /* 4. Body Copy & Controlled Measure */
  .lab-styled-preview[data-style="swiss-design"] p,
  .swiss-design-styled-container p,
  .style-swiss-design p,
  [data-style="swiss-design"] p,
  .ds-scope[data-style-id="swiss-design"] p,
  .style-swiss p,
  [data-style="swiss"] p,
  .ds-scope[data-style-id="swiss"] p {
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #18181b;
    margin-bottom: 1.25rem;
    max-width: 68ch;
    overflow-wrap: break-word;
  }

  /* Lead paragraph in section/article */
  .lab-styled-preview[data-style="swiss-design"] section > p:nth-of-type(2):not(:last-child),
  .lab-styled-preview[data-style="swiss-design"] article > p:nth-of-type(1),
  .swiss-design-styled-container section > p:nth-of-type(2):not(:last-child),
  .style-swiss-design section > p:nth-of-type(2):not(:last-child),
  [data-style="swiss-design"] section > p:nth-of-type(2):not(:last-child),
  .ds-scope[data-style-id="swiss-design"] section > p:nth-of-type(2):not(:last-child),
  .style-swiss section > p:nth-of-type(2):not(:last-child),
  [data-style="swiss"] section > p:nth-of-type(2):not(:last-child),
  .ds-scope[data-style-id="swiss"] section > p:nth-of-type(2):not(:last-child),
  .swiss-design-styled-container article > p:nth-of-type(1),
  .style-swiss-design article > p:nth-of-type(1),
  [data-style="swiss-design"] article > p:nth-of-type(1),
  .ds-scope[data-style-id="swiss-design"] article > p:nth-of-type(1),
  .style-swiss article > p:nth-of-type(1),
  [data-style="swiss"] article > p:nth-of-type(1),
  .ds-scope[data-style-id="swiss"] article > p:nth-of-type(1) {
    font-size: 1.125rem;
    line-height: 1.65;
    color: #27272a;
  }

  /* 5. Blockquote: Editorial Pull Quote with Red Architectural Rule */
  .lab-styled-preview[data-style="swiss-design"] blockquote,
  .swiss-design-styled-container blockquote,
  .style-swiss-design blockquote,
  [data-style="swiss-design"] blockquote,
  .ds-scope[data-style-id="swiss-design"] blockquote,
  .style-swiss blockquote,
  [data-style="swiss"] blockquote,
  .ds-scope[data-style-id="swiss"] blockquote {
    position: relative;
    margin: 2.5rem 0;
    padding: 1.25rem 0 1.25rem 1.75rem;
    background: transparent;
    border-left: 3px solid #dc2626;
    border-top: none;
    border-right: none;
    border-bottom: none;
    box-shadow: none;
    border-radius: 0px;
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
    color: #000000;
    letter-spacing: -0.015em;
  }

  /* 6. Functional Action Controls (Buttons): Precision Engineered Rectangles */
  .lab-styled-preview[data-style="swiss-design"] button,
  .swiss-design-styled-container button,
  .style-swiss-design button,
  [data-style="swiss-design"] button,
  .ds-scope[data-style-id="swiss-design"] button,
  .style-swiss button,
  [data-style="swiss"] button,
  .ds-scope[data-style-id="swiss"] button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif;
    font-size: 0.8125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.75rem 1.75rem;
    color: #ffffff;
    background: #000000;
    border: 1px solid #000000;
    border-radius: 0px;
    box-shadow: none;
    cursor: pointer;
    transition: background-color 140ms ease, border-color 140ms ease, color 140ms ease;
    text-decoration: none;
    line-height: 1.2;
    margin-top: 0.5rem;
  }

  .lab-styled-preview[data-style="swiss-design"] button:hover,
  .swiss-design-styled-container button:hover,
  .style-swiss-design button:hover,
  [data-style="swiss-design"] button:hover,
  .ds-scope[data-style-id="swiss-design"] button:hover,
  .style-swiss button:hover,
  [data-style="swiss"] button:hover,
  .ds-scope[data-style-id="swiss"] button:hover {
    background: #dc2626;
    border-color: #dc2626;
    color: #ffffff;
    box-shadow: none;
    transform: none;
  }

  .lab-styled-preview[data-style="swiss-design"] button:active,
  .swiss-design-styled-container button:active,
  .style-swiss-design button:active,
  [data-style="swiss-design"] button:active,
  .ds-scope[data-style-id="swiss-design"] button:active,
  .style-swiss button:active,
  [data-style="swiss"] button:active,
  .ds-scope[data-style-id="swiss"] button:active {
    background: #b91c1c;
    border-color: #b91c1c;
    transform: none;
  }

  /* Secondary button groups (e.g., size selection or secondary actions) */
  .lab-styled-preview[data-style="swiss-design"] div > button,
  .swiss-design-styled-container div > button,
  .style-swiss-design div > button,
  [data-style="swiss-design"] div > button,
  .ds-scope[data-style-id="swiss-design"] div > button,
  .style-swiss div > button,
  [data-style="swiss"] div > button,
  .ds-scope[data-style-id="swiss"] div > button {
    background: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    box-shadow: none;
    padding: 0.55rem 1.25rem;
    font-size: 0.75rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .lab-styled-preview[data-style="swiss-design"] div > button:hover,
  .swiss-design-styled-container div > button:hover,
  .style-swiss-design div > button:hover,
  [data-style="swiss-design"] div > button:hover,
  .ds-scope[data-style-id="swiss-design"] div > button:hover,
  .style-swiss div > button:hover,
  [data-style="swiss"] div > button:hover,
  .ds-scope[data-style-id="swiss"] div > button:hover {
    background: #000000;
    color: #ffffff;
    border-color: #000000;
  }

  /* 7. Articles & Sibling Lists: Open Rows with Horizontal Datum Lines (NO Generic Cards) */
  .lab-styled-preview[data-style="swiss-design"] article,
  .swiss-design-styled-container article,
  .style-swiss-design article,
  [data-style="swiss-design"] article,
  .ds-scope[data-style-id="swiss-design"] article,
  .style-swiss article,
  [data-style="swiss"] article,
  .ds-scope[data-style-id="swiss"] article {
    position: relative;
    padding: 1.5rem 0;
    margin-bottom: 0;
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #000000;
    border-radius: 0px;
    box-shadow: none;
    transition: background-color 120ms ease;
  }

  .lab-styled-preview[data-style="swiss-design"] article:hover,
  .swiss-design-styled-container article:hover,
  .style-swiss-design article:hover,
  [data-style="swiss-design"] article:hover,
  .ds-scope[data-style-id="swiss-design"] article:hover,
  .style-swiss article:hover,
  [data-style="swiss"] article:hover,
  .ds-scope[data-style-id="swiss"] article:hover {
    background-color: #fafafa;
  }

  /* Portfolio Selected Work Rows */
  .lab-styled-preview[data-style="swiss-design"] section:has(h2:contains("Selected Work")) article,
  .lab-styled-preview[data-style="swiss-design"] section > article,
  .swiss-design-styled-container section > article,
  .style-swiss-design section > article,
  [data-style="swiss-design"] section > article,
  .ds-scope[data-style-id="swiss-design"] section > article,
  .style-swiss section > article,
  [data-style="swiss"] section > article,
  .ds-scope[data-style-id="swiss"] section > article {
    padding: 1.5rem 0;
    border-bottom: 1px solid #000000;
  }

  .lab-styled-preview[data-style="swiss-design"] section > article:first-of-type,
  .swiss-design-styled-container section > article:first-of-type,
  .style-swiss-design section > article:first-of-type,
  [data-style="swiss-design"] section > article:first-of-type,
  .ds-scope[data-style-id="swiss-design"] section > article:first-of-type,
  .style-swiss section > article:first-of-type,
  [data-style="swiss"] section > article:first-of-type,
  .ds-scope[data-style-id="swiss"] section > article:first-of-type {
    border-top: 1px solid #000000;
  }

  /* Pricing Tier Rows / Cards */
  .lab-styled-preview[data-style="swiss-design"] div > article:has(button),
  .swiss-design-styled-container div > article:has(button),
  .style-swiss-design div > article:has(button),
  [data-style="swiss-design"] div > article:has(button),
  .ds-scope[data-style-id="swiss-design"] div > article:has(button),
  .style-swiss div > article:has(button),
  [data-style="swiss"] div > article:has(button),
  .ds-scope[data-style-id="swiss"] div > article:has(button) {
    padding: 2rem;
    margin-bottom: 1.5rem;
    border: 1px solid #000000;
    background: #ffffff;
  }

  /* Featured Tier (Professional): Red Datum Accent */
  .lab-styled-preview[data-style="swiss-design"] div > article:has(button):nth-child(2),
  .swiss-design-styled-container div > article:has(button):nth-child(2),
  .style-swiss-design div > article:has(button):nth-child(2),
  [data-style="swiss-design"] div > article:has(button):nth-child(2),
  .ds-scope[data-style-id="swiss-design"] div > article:has(button):nth-child(2),
  .style-swiss div > article:has(button):nth-child(2),
  [data-style="swiss"] div > article:has(button):nth-child(2),
  .ds-scope[data-style-id="swiss"] div > article:has(button):nth-child(2) {
    border-top: 4px solid #dc2626;
    background: #fafafa;
  }

  .lab-styled-preview[data-style="swiss-design"] div > article:has(button):nth-child(2) button,
  .swiss-design-styled-container div > article:has(button):nth-child(2) button,
  .style-swiss-design div > article:has(button):nth-child(2) button,
  [data-style="swiss-design"] div > article:has(button):nth-child(2) button,
  .ds-scope[data-style-id="swiss-design"] div > article:has(button):nth-child(2) button,
  .style-swiss div > article:has(button):nth-child(2) button,
  [data-style="swiss"] div > article:has(button):nth-child(2) button,
  .ds-scope[data-style-id="swiss"] div > article:has(button):nth-child(2) button {
    background: #dc2626;
    border-color: #dc2626;
  }

  .lab-styled-preview[data-style="swiss-design"] div > article:has(button):nth-child(2) button:hover,
  .swiss-design-styled-container div > article:has(button):nth-child(2) button:hover,
  .style-swiss-design div > article:has(button):nth-child(2) button:hover,
  [data-style="swiss-design"] div > article:has(button):nth-child(2) button:hover,
  .ds-scope[data-style-id="swiss-design"] div > article:has(button):nth-child(2) button:hover,
  .style-swiss div > article:has(button):nth-child(2) button:hover,
  [data-style="swiss"] div > article:has(button):nth-child(2) button:hover,
  .ds-scope[data-style-id="swiss"] div > article:has(button):nth-child(2) button:hover {
    background: #b91c1c;
    border-color: #b91c1c;
  }

  /* Price & Metric Numerals: Bold Tabular Authority */
  .lab-styled-preview[data-style="swiss-design"] article > strong,
  .swiss-design-styled-container article > strong,
  .style-swiss-design article > strong,
  [data-style="swiss-design"] article > strong,
  .ds-scope[data-style-id="swiss-design"] article > strong,
  .style-swiss article > strong,
  [data-style="swiss"] article > strong,
  .ds-scope[data-style-id="swiss"] article > strong {
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif;
    font-size: 2.25rem;
    font-weight: 900;
    line-height: 1.1;
    color: #000000;
    display: block;
    margin: 0.35rem 0 0.5rem 0;
    letter-spacing: -0.035em;
    font-variant-numeric: tabular-nums;
  }

  /* Metric Panels (Dashboard / Telemetry) */
  .lab-styled-preview[data-style="swiss-design"] div > article:not(:has(button)),
  .swiss-design-styled-container div > article:not(:has(button)),
  .style-swiss-design div > article:not(:has(button)),
  [data-style="swiss-design"] div > article:not(:has(button)),
  .ds-scope[data-style-id="swiss-design"] div > article:not(:has(button)),
  .style-swiss div > article:not(:has(button)),
  [data-style="swiss"] div > article:not(:has(button)),
  .ds-scope[data-style-id="swiss"] div > article:not(:has(button)) {
    padding: 1.5rem;
    border: 1px solid #000000;
    margin-bottom: 1rem;
    background: #ffffff;
  }

  .lab-styled-preview[data-style="swiss-design"] div > article:not(:has(button)) h3,
  .swiss-design-styled-container div > article:not(:has(button)) h3,
  .style-swiss-design div > article:not(:has(button)) h3,
  [data-style="swiss-design"] div > article:not(:has(button)) h3,
  .ds-scope[data-style-id="swiss-design"] div > article:not(:has(button)) h3,
  .style-swiss div > article:not(:has(button)) h3,
  [data-style="swiss"] div > article:not(:has(button)) h3,
  .ds-scope[data-style-id="swiss"] div > article:not(:has(button)) h3 {
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.12em !important;
    color: #52525b !important;
  }

  /* 8. Hallmark Swiss Information Table */
  .lab-styled-preview[data-style="swiss-design"] table,
  .swiss-design-styled-container table,
  .style-swiss-design table,
  [data-style="swiss-design"] table,
  .ds-scope[data-style-id="swiss-design"] table,
  .style-swiss table,
  [data-style="swiss"] table,
  .ds-scope[data-style-id="swiss"] table {
    width: 100%;
    border-collapse: collapse;
    margin: 2.5rem 0;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
    border-left: none;
    border-right: none;
    box-shadow: none;
    font-size: 0.875rem;
    background-color: #ffffff;
  }

  .lab-styled-preview[data-style="swiss-design"] thead,
  .swiss-design-styled-container thead,
  .style-swiss-design thead,
  [data-style="swiss-design"] thead,
  .ds-scope[data-style-id="swiss-design"] thead,
  .style-swiss thead,
  [data-style="swiss"] thead,
  .ds-scope[data-style-id="swiss"] thead {
    border-bottom: 1px solid #000000;
  }

  .lab-styled-preview[data-style="swiss-design"] th,
  .swiss-design-styled-container th,
  .style-swiss-design th,
  [data-style="swiss-design"] th,
  .ds-scope[data-style-id="swiss-design"] th,
  .style-swiss th,
  [data-style="swiss"] th,
  .ds-scope[data-style-id="swiss"] th {
    padding: 0.75rem 1rem;
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: left;
    color: #000000;
    border: none;
    background-color: transparent;
  }

  .lab-styled-preview[data-style="swiss-design"] tbody tr,
  .swiss-design-styled-container tbody tr,
  .style-swiss-design tbody tr,
  [data-style="swiss-design"] tbody tr,
  .ds-scope[data-style-id="swiss-design"] tbody tr,
  .style-swiss tbody tr,
  [data-style="swiss"] tbody tr,
  .ds-scope[data-style-id="swiss"] tbody tr {
    border-bottom: 1px solid #e4e4e7;
    transition: background-color 100ms ease;
  }

  .lab-styled-preview[data-style="swiss-design"] tbody tr:last-child,
  .swiss-design-styled-container tbody tr:last-child,
  .style-swiss-design tbody tr:last-child,
  [data-style="swiss-design"] tbody tr:last-child,
  .ds-scope[data-style-id="swiss-design"] tbody tr:last-child,
  .style-swiss tbody tr:last-child,
  [data-style="swiss"] tbody tr:last-child,
  .ds-scope[data-style-id="swiss"] tbody tr:last-child {
    border-bottom: none;
  }

  .lab-styled-preview[data-style="swiss-design"] tbody tr:hover,
  .swiss-design-styled-container tbody tr:hover,
  .style-swiss-design tbody tr:hover,
  [data-style="swiss-design"] tbody tr:hover,
  .ds-scope[data-style-id="swiss-design"] tbody tr:hover,
  .style-swiss tbody tr:hover,
  [data-style="swiss"] tbody tr:hover,
  .ds-scope[data-style-id="swiss"] tbody tr:hover {
    background-color: #f8fafc;
  }

  .lab-styled-preview[data-style="swiss-design"] td,
  .swiss-design-styled-container td,
  .style-swiss-design td,
  [data-style="swiss-design"] td,
  .ds-scope[data-style-id="swiss-design"] td,
  .style-swiss td,
  [data-style="swiss"] td,
  .ds-scope[data-style-id="swiss"] td {
    padding: 0.85rem 1rem;
    color: #000000;
    border: none;
    font-variant-numeric: tabular-nums;
  }

  .lab-styled-preview[data-style="swiss-design"] td:last-child,
  .swiss-design-styled-container td:last-child,
  .style-swiss-design td:last-child,
  [data-style="swiss-design"] td:last-child,
  .ds-scope[data-style-id="swiss-design"] td:last-child,
  .style-swiss td:last-child,
  [data-style="swiss"] td:last-child,
  .ds-scope[data-style-id="swiss"] td:last-child {
    font-weight: 700;
    color: #dc2626;
    letter-spacing: 0.05em;
  }

  /* 9. Forms & Inputs: Precise Architectural Fields */
  .lab-styled-preview[data-style="swiss-design"] form,
  .swiss-design-styled-container form,
  .style-swiss-design form,
  [data-style="swiss-design"] form,
  .ds-scope[data-style-id="swiss-design"] form,
  .style-swiss form,
  [data-style="swiss"] form,
  .ds-scope[data-style-id="swiss"] form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 640px;
    margin: 2rem 0;
  }

  .lab-styled-preview[data-style="swiss-design"] form > div,
  .swiss-design-styled-container form > div,
  .style-swiss-design form > div,
  [data-style="swiss-design"] form > div,
  .ds-scope[data-style-id="swiss-design"] form > div,
  .style-swiss form > div,
  [data-style="swiss"] form > div,
  .ds-scope[data-style-id="swiss"] form > div {
    display: flex;
    flex-direction: column;
  }

  .lab-styled-preview[data-style="swiss-design"] label,
  .swiss-design-styled-container label,
  .style-swiss-design label,
  [data-style="swiss-design"] label,
  .ds-scope[data-style-id="swiss-design"] label,
  .style-swiss label,
  [data-style="swiss"] label,
  .ds-scope[data-style-id="swiss"] label {
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #000000;
    margin-bottom: 0.4rem;
  }

  .lab-styled-preview[data-style="swiss-design"] input,
  .lab-styled-preview[data-style="swiss-design"] textarea,
  .lab-styled-preview[data-style="swiss-design"] select,
  .swiss-design-styled-container input,
  .style-swiss-design input,
  [data-style="swiss-design"] input,
  .ds-scope[data-style-id="swiss-design"] input,
  .style-swiss input,
  [data-style="swiss"] input,
  .ds-scope[data-style-id="swiss"] input,
  .swiss-design-styled-container textarea,
  .style-swiss-design textarea,
  [data-style="swiss-design"] textarea,
  .ds-scope[data-style-id="swiss-design"] textarea,
  .style-swiss textarea,
  [data-style="swiss"] textarea,
  .ds-scope[data-style-id="swiss"] textarea,
  .swiss-design-styled-container select,
  .style-swiss-design select,
  [data-style="swiss-design"] select,
  .ds-scope[data-style-id="swiss-design"] select,
  .style-swiss select,
  [data-style="swiss"] select,
  .ds-scope[data-style-id="swiss"] select {
    width: 100%;
    box-sizing: border-box;
    padding: 0.75rem 1rem;
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif;
    font-size: 0.9375rem;
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 0px;
    box-shadow: none;
    transition: border-color 120ms ease;
  }

  .lab-styled-preview[data-style="swiss-design"] input:focus,
  .lab-styled-preview[data-style="swiss-design"] textarea:focus,
  .lab-styled-preview[data-style="swiss-design"] select:focus,
  .swiss-design-styled-container input:focus,
  .style-swiss-design input:focus,
  [data-style="swiss-design"] input:focus,
  .ds-scope[data-style-id="swiss-design"] input:focus,
  .style-swiss input:focus,
  [data-style="swiss"] input:focus,
  .ds-scope[data-style-id="swiss"] input:focus,
  .swiss-design-styled-container textarea:focus,
  .style-swiss-design textarea:focus,
  [data-style="swiss-design"] textarea:focus,
  .ds-scope[data-style-id="swiss-design"] textarea:focus,
  .style-swiss textarea:focus,
  [data-style="swiss"] textarea:focus,
  .ds-scope[data-style-id="swiss"] textarea:focus,
  .swiss-design-styled-container select:focus,
  .style-swiss-design select:focus,
  [data-style="swiss-design"] select:focus,
  .ds-scope[data-style-id="swiss-design"] select:focus,
  .style-swiss select:focus,
  [data-style="swiss"] select:focus,
  .ds-scope[data-style-id="swiss"] select:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: inset 0 0 0 1px #dc2626;
  }

  /* 10. Lists & Hospitality Menu Enhancements */
  .lab-styled-preview[data-style="swiss-design"] ul,
  .lab-styled-preview[data-style="swiss-design"] ol,
  .swiss-design-styled-container ul,
  .style-swiss-design ul,
  [data-style="swiss-design"] ul,
  .ds-scope[data-style-id="swiss-design"] ul,
  .style-swiss ul,
  [data-style="swiss"] ul,
  .ds-scope[data-style-id="swiss"] ul,
  .swiss-design-styled-container ol,
  .style-swiss-design ol,
  [data-style="swiss-design"] ol,
  .ds-scope[data-style-id="swiss-design"] ol,
  .style-swiss ol,
  [data-style="swiss"] ol,
  .ds-scope[data-style-id="swiss"] ol {
    padding-left: 1.25rem;
    margin: 1rem 0 1.5rem 0;
  }

  .lab-styled-preview[data-style="swiss-design"] ul li,
  .lab-styled-preview[data-style="swiss-design"] ol li,
  .swiss-design-styled-container ul li,
  .style-swiss-design ul li,
  [data-style="swiss-design"] ul li,
  .ds-scope[data-style-id="swiss-design"] ul li,
  .style-swiss ul li,
  [data-style="swiss"] ul li,
  .ds-scope[data-style-id="swiss"] ul li,
  .swiss-design-styled-container ol li,
  .style-swiss-design ol li,
  [data-style="swiss-design"] ol li,
  .ds-scope[data-style-id="swiss-design"] ol li,
  .style-swiss ol li,
  [data-style="swiss"] ol li,
  .ds-scope[data-style-id="swiss"] ol li {
    margin-bottom: 0.5rem;
    line-height: 1.55;
    color: #18181b;
  }

  .lab-styled-preview[data-style="swiss-design"] ul:not([class]) li::marker,
  .swiss-design-styled-container ul:not([class]) li::marker,
  .style-swiss-design ul:not([class]) li::marker,
  [data-style="swiss-design"] ul:not([class]) li::marker,
  .ds-scope[data-style-id="swiss-design"] ul:not([class]) li::marker,
  .style-swiss ul:not([class]) li::marker,
  [data-style="swiss"] ul:not([class]) li::marker,
  .ds-scope[data-style-id="swiss"] ul:not([class]) li::marker {
    color: #dc2626;
  }

  /* Restaurant Menu Items (Sample 6) */
  .lab-styled-preview[data-style="swiss-design"] section:has(p:contains("EST.")) article ul,
  .swiss-design-styled-container section:has(p:contains("EST.")) article ul,
  .style-swiss-design section:has(p:contains("EST.")) article ul,
  [data-style="swiss-design"] section:has(p:contains("EST.")) article ul,
  .ds-scope[data-style-id="swiss-design"] section:has(p:contains("EST.")) article ul,
  .style-swiss section:has(p:contains("EST.")) article ul,
  [data-style="swiss"] section:has(p:contains("EST.")) article ul,
  .ds-scope[data-style-id="swiss"] section:has(p:contains("EST.")) article ul {
    list-style: none;
    padding-left: 0;
  }

  .lab-styled-preview[data-style="swiss-design"] section:has(p:contains("EST.")) article li,
  .swiss-design-styled-container section:has(p:contains("EST.")) article li,
  .style-swiss-design section:has(p:contains("EST.")) article li,
  [data-style="swiss-design"] section:has(p:contains("EST.")) article li,
  .ds-scope[data-style-id="swiss-design"] section:has(p:contains("EST.")) article li,
  .style-swiss section:has(p:contains("EST.")) article li,
  [data-style="swiss"] section:has(p:contains("EST.")) article li,
  .ds-scope[data-style-id="swiss"] section:has(p:contains("EST.")) article li {
    padding: 0.75rem 0;
    border-bottom: 1px solid #e4e4e7;
  }

  .lab-styled-preview[data-style="swiss-design"] section:has(p:contains("EST.")) article li > strong,
  .swiss-design-styled-container section:has(p:contains("EST.")) article li > strong,
  .style-swiss-design section:has(p:contains("EST.")) article li > strong,
  [data-style="swiss-design"] section:has(p:contains("EST.")) article li > strong,
  .ds-scope[data-style-id="swiss-design"] section:has(p:contains("EST.")) article li > strong,
  .style-swiss section:has(p:contains("EST.")) article li > strong,
  [data-style="swiss"] section:has(p:contains("EST.")) article li > strong,
  .ds-scope[data-style-id="swiss"] section:has(p:contains("EST.")) article li > strong {
    font-size: 1rem;
    font-weight: 800;
    color: #000000;
  }

  .lab-styled-preview[data-style="swiss-design"] section:has(p:contains("EST.")) article li > p,
  .swiss-design-styled-container section:has(p:contains("EST.")) article li > p,
  .style-swiss-design section:has(p:contains("EST.")) article li > p,
  [data-style="swiss-design"] section:has(p:contains("EST.")) article li > p,
  .ds-scope[data-style-id="swiss-design"] section:has(p:contains("EST.")) article li > p,
  .style-swiss section:has(p:contains("EST.")) article li > p,
  [data-style="swiss"] section:has(p:contains("EST.")) article li > p,
  .ds-scope[data-style-id="swiss"] section:has(p:contains("EST.")) article li > p {
    font-size: 0.875rem;
    color: #52525b;
    margin-top: 0.2rem;
    margin-bottom: 0;
  }

  /* 11. Precise Footers: Architectural Termination Rule */
  .lab-styled-preview[data-style="swiss-design"] footer,
  .swiss-design-styled-container footer,
  .style-swiss-design footer,
  [data-style="swiss-design"] footer,
  .ds-scope[data-style-id="swiss-design"] footer,
  .style-swiss footer,
  [data-style="swiss"] footer,
  .ds-scope[data-style-id="swiss"] footer {
    border-top: 2px solid #000000;
    padding: 2rem 0 1rem;
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }

  .lab-styled-preview[data-style="swiss-design"] footer p,
  .swiss-design-styled-container footer p,
  .style-swiss-design footer p,
  [data-style="swiss-design"] footer p,
  .ds-scope[data-style-id="swiss-design"] footer p,
  .style-swiss footer p,
  [data-style="swiss"] footer p,
  .ds-scope[data-style-id="swiss"] footer p {
    font-family: 'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #52525b;
    margin: 0;
  }

  /* 12. General Structural Spacing and Clean Fallbacks */
  .lab-styled-preview[data-style="swiss-design"] section,
  .swiss-design-styled-container section,
  .style-swiss-design section,
  [data-style="swiss-design"] section,
  .ds-scope[data-style-id="swiss-design"] section,
  .style-swiss section,
  [data-style="swiss"] section,
  .ds-scope[data-style-id="swiss"] section {
    margin-bottom: 3.5rem;
  }

  .lab-styled-preview[data-style="swiss-design"] section:last-child,
  .swiss-design-styled-container section:last-child,
  .style-swiss-design section:last-child,
  [data-style="swiss-design"] section:last-child,
  .ds-scope[data-style-id="swiss-design"] section:last-child,
  .style-swiss section:last-child,
  [data-style="swiss"] section:last-child,
  .ds-scope[data-style-id="swiss"] section:last-child {
    margin-bottom: 0;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="swiss-design"] nav,
    .swiss-design-styled-container nav,
    .style-swiss-design nav,
    [data-style="swiss-design"] nav,
    .ds-scope[data-style-id="swiss-design"] nav,
    .style-swiss nav,
    [data-style="swiss"] nav,
    .ds-scope[data-style-id="swiss"] nav {
      gap: 1rem;
    }

    .lab-styled-preview[data-style="swiss-design"] table,
    .swiss-design-styled-container table,
    .style-swiss-design table,
    [data-style="swiss-design"] table,
    .ds-scope[data-style-id="swiss-design"] table,
    .style-swiss table,
    [data-style="swiss"] table,
    .ds-scope[data-style-id="swiss"] table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }

    .lab-styled-preview[data-style="swiss-design"] button,
    .swiss-design-styled-container button,
    .style-swiss-design button,
    [data-style="swiss-design"] button,
    .ds-scope[data-style-id="swiss-design"] button,
    .style-swiss button,
    [data-style="swiss"] button,
    .ds-scope[data-style-id="swiss"] button {
      width: 100%;
    }
  }
`;
