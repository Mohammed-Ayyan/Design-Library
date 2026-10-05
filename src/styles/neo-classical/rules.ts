/**
 * Neo-Classical Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Neo-Classical
 * is applied. Centered on classical architectural proportion, typographic refinement
 * (contrasting display serif inscriptions with functional sans metadata), structural
 * hairline and double rules, plinth bases, and dignified restraint—preserving the
 * user's underlying HTML structure with zero DOM mutations.
 */

export const neoClassicalSemanticCss = `
  /* ==========================================================================
     NEO-CLASSICAL — ART-DIRECTED ARCHITECTURAL STYLESHEET
     
     Core Logic:
     - Classical architectural proportion & timeless restraint
     - Contrast: Display serif (inscriptions) vs. Functional sans (metadata)
     - Structural hairlines (1px), emphasized rules (2px), and double rules (3px double)
     - Warm ivory foundation (#fcfbf7), deep charcoal ink (#1a1917), stone dividers
     - Restrained antique brass (#b89758) or burgundy (#5c1d24) accents (NEVER dominant)
     - Zero cardification: open editorial sections, architectural containers
     - Crisp 2px-4px architectural geometry (NO rounded pills, NO heavy shadows)
     ========================================================================== */

  /* 0. Canvas Foundation: Warm Ivory Paper with Architectural Proportions */
  .lab-styled-preview[data-style="neo-classical"],
  .neo-classical-styled-container {
    background-color: #fcfbf7 !important;
    background-image: 
      linear-gradient(to right, rgba(222, 216, 206, 0.2) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(222, 216, 206, 0.2) 1px, transparent 1px) !important;
    background-size: 48px 48px !important;
    color: #1a1917 !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.7 !important;
    box-shadow: none !important;
    position: relative !important;
    border: 1px solid #ded8ce !important;
  }

  /* 1. Ceremonial Navigation: Architectural Frieze with Double Structural Rule */
  .lab-styled-preview[data-style="neo-classical"] nav,
  .neo-classical-styled-container nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2.25rem;
    padding: 1.5rem 0;
    border-bottom: 3px double #1a1917;
    margin-bottom: 4rem;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="neo-classical"] nav a,
  .neo-classical-styled-container nav a {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #4a4742;
    text-decoration: none;
    padding: 0.4rem 0;
    position: relative;
    transition: color 160ms ease;
  }

  .lab-styled-preview[data-style="neo-classical"] nav a:hover,
  .neo-classical-styled-container nav a:hover {
    color: #1a1917;
    text-decoration: none;
  }

  /* Brand / First Link: Architectural Inscription */
  .lab-styled-preview[data-style="neo-classical"] nav a:first-child,
  .neo-classical-styled-container nav a:first-child {
    font-family: 'Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1a1917;
    margin-right: 0.75rem;
  }

  .lab-styled-preview[data-style="neo-classical"] nav a:first-child::before,
  .neo-classical-styled-container nav a:first-child::before {
    content: '❖ ';
    font-size: 0.75rem;
    color: #b89758;
    margin-right: 0.35rem;
  }

  /* 2. Inscription Eyebrows & Metadata: Refined Tracked Sans */
  .lab-styled-preview[data-style="neo-classical"] header > p:first-child,
  .lab-styled-preview[data-style="neo-classical"] section > p:first-child:not(:last-child),
  .neo-classical-styled-container header > p:first-child,
  .neo-classical-styled-container section > p:first-child:not(:last-child) {
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: #8c857b;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  .lab-styled-preview[data-style="neo-classical"] header > p:first-child::before,
  .lab-styled-preview[data-style="neo-classical"] section > p:first-child:not(:last-child)::before,
  .neo-classical-styled-container header > p:first-child::before,
  .neo-classical-styled-container section > p:first-child:not(:last-child)::before {
    content: '—';
    color: #b89758;
    font-weight: 400;
  }

  /* 3. Major Headings: Architectural Monumentality */
  .lab-styled-preview[data-style="neo-classical"] h1,
  .neo-classical-styled-container h1 {
    font-family: 'Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: clamp(2.6rem, 5.5vw, 4.25rem);
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: 0.02em;
    color: #1a1917;
    margin-top: 0;
    margin-bottom: 2rem;
    max-width: 22ch;
  }

  .lab-styled-preview[data-style="neo-classical"] h2,
  .neo-classical-styled-container h2 {
    font-family: 'Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: clamp(1.75rem, 3.8vw, 2.5rem);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.03em;
    color: #1a1917;
    margin-top: 3.5rem;
    margin-bottom: 1.75rem;
    padding-bottom: 0.85rem;
    border-bottom: 1px solid #ded8ce;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .lab-styled-preview[data-style="neo-classical"] h2::after,
  .neo-classical-styled-container h2::after {
    content: '❖';
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    color: #b89758;
    opacity: 0.85;
  }

  .lab-styled-preview[data-style="neo-classical"] h3,
  .neo-classical-styled-container h3 {
    font-family: 'Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif;
    font-size: 1.35rem;
    font-weight: 600;
    line-height: 1.28;
    letter-spacing: 0.02em;
    color: #1a1917;
    margin-top: 0;
    margin-bottom: 0.65rem;
  }

  .lab-styled-preview[data-style="neo-classical"] h4,
  .neo-classical-styled-container h4 {
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #4a4742;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  /* 4. Reading Column & Body Copy: Proportioned Cadence */
  .lab-styled-preview[data-style="neo-classical"] p,
  .neo-classical-styled-container p {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 1.03125rem;
    font-weight: 400;
    line-height: 1.75;
    color: #383531;
    margin-top: 0;
    margin-bottom: 1.5rem;
    max-width: 68ch;
  }

  /* 5. Crafted Architectural Buttons: No Pills, Engraved Restraint */
  .lab-styled-preview[data-style="neo-classical"] button,
  .lab-styled-preview[data-style="neo-classical"] input[type="submit"],
  .neo-classical-styled-container button,
  .neo-classical-styled-container input[type="submit"] {
    font-family: 'Inter', sans-serif;
    font-size: 0.78125rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 0.9rem 2.25rem;
    border-radius: 2px;
    border: 1px solid #1a1917;
    background-color: #1a1917;
    color: #fcfbf7;
    box-shadow: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    text-decoration: none;
    transition: all 180ms ease;
    position: relative;
  }

  .lab-styled-preview[data-style="neo-classical"] button:hover,
  .lab-styled-preview[data-style="neo-classical"] input[type="submit"]:hover,
  .neo-classical-styled-container button:hover,
  .neo-classical-styled-container input[type="submit"]:hover {
    background-color: #302d28;
    border-color: #302d28;
    color: #ffffff;
  }

  .lab-styled-preview[data-style="neo-classical"] button:active,
  .lab-styled-preview[data-style="neo-classical"] input[type="submit"]:active,
  .neo-classical-styled-container button:active,
  .neo-classical-styled-container input[type="submit"]:active {
    background-color: #1a1917;
  }

  /* Secondary Button: Outlined Ivory Plinth */
  .lab-styled-preview[data-style="neo-classical"] button + button,
  .neo-classical-styled-container button + button {
    background-color: transparent;
    color: #1a1917;
    border: 1px solid #ded8ce;
    box-shadow: none;
    margin-left: 0.85rem;
  }

  .lab-styled-preview[data-style="neo-classical"] button + button:hover,
  .neo-classical-styled-container button + button:hover {
    background-color: #f5f2eb;
    border-color: #1a1917;
    color: #1a1917;
  }

  /* 6. Surfaces & Articles: Anti-Cardification, Pure Architectural Composition */
  .lab-styled-preview[data-style="neo-classical"] article,
  .neo-classical-styled-container article {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin-bottom: 2.5rem;
    position: relative;
  }

  /* Context A: Direct Standalone Article (Sample 3) */
  .lab-styled-preview[data-style="neo-classical"] > article,
  .neo-classical-styled-container > article {
    max-width: 740px;
    margin: 0 auto;
    padding: 1.5rem 0 4rem !important;
  }

  .lab-styled-preview[data-style="neo-classical"] > article > p:first-of-type::first-letter,
  .neo-classical-styled-container > article > p:first-of-type::first-letter {
    font-family: 'Cinzel', 'Playfair Display', serif;
    font-size: 3.25rem;
    float: left;
    line-height: 0.85;
    padding-right: 0.65rem;
    padding-top: 0.15rem;
    color: #1a1917;
    font-weight: 700;
  }

  /* Context B: Portfolio Selected Work (Sample 1) */
  .lab-styled-preview[data-style="neo-classical"] section > article,
  .neo-classical-styled-container section > article {
    border-bottom: 1px solid #ded8ce !important;
    padding: 1.75rem 0 2.25rem !important;
    margin-bottom: 0;
    transition: padding-left 180ms ease;
  }

  .lab-styled-preview[data-style="neo-classical"] section > article:hover,
  .neo-classical-styled-container section > article:hover {
    padding-left: 0.75rem !important;
  }

  .lab-styled-preview[data-style="neo-classical"] section > article:nth-child(3n+1)::before,
  .neo-classical-styled-container section > article:nth-child(3n+1)::before {
    content: 'ROM. I';
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    color: #b89758;
    display: block;
    margin-bottom: 0.5rem;
  }

  .lab-styled-preview[data-style="neo-classical"] section > article:nth-child(3n+2)::before,
  .neo-classical-styled-container section > article:nth-child(3n+2)::before {
    content: 'ROM. II';
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    color: #8c857b;
    display: block;
    margin-bottom: 0.5rem;
  }

  .lab-styled-preview[data-style="neo-classical"] section > article:nth-child(3n+3)::before,
  .neo-classical-styled-container section > article:nth-child(3n+3)::before {
    content: 'ROM. III';
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    color: #4a4742;
    display: block;
    margin-bottom: 0.5rem;
  }

  /* Context C: SaaS Pricing Architecture (Sample 2) & Dashboard Data (Sample 4) */
  .lab-styled-preview[data-style="neo-classical"] section > div > article,
  .neo-classical-styled-container section > div > article {
    background: #ffffff !important;
    border: 1px solid #ded8ce !important;
    border-radius: 2px !important;
    padding: 2.75rem 2rem !important;
    box-shadow: none !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: border-color 180ms ease;
  }

  .lab-styled-preview[data-style="neo-classical"] section > div > article strong,
  .neo-classical-styled-container section > div > article strong {
    font-family: 'Cinzel', 'Playfair Display', serif;
    font-size: clamp(2rem, 3.8vw, 2.75rem);
    font-weight: 600;
    color: #1a1917;
    display: block;
    margin: 1.25rem 0 1.5rem;
    font-variant-numeric: tabular-nums;
  }

  /* Featured Plan: Distinguished Architectural Plinth with Emphasized Top Border */
  .lab-styled-preview[data-style="neo-classical"] section > div > article:nth-child(2):has(button),
  .neo-classical-styled-container section > div > article:nth-child(2):has(button) {
    background: #fbf9f4 !important;
    border: 1px solid #1a1917 !important;
    border-top: 4px solid #1a1917 !important;
    position: relative;
  }

  .lab-styled-preview[data-style="neo-classical"] section > div > article:nth-child(2):has(button)::before,
  .neo-classical-styled-container section > div > article:nth-child(2):has(button)::before {
    content: 'RECOMMENDED SPECIFICATION';
    font-family: 'Inter', sans-serif;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.24em;
    color: #b89758;
    display: block;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  /* Context D: Restaurant Menu Sections (Sample 6) */
  .lab-styled-preview[data-style="neo-classical"] section > article:has(ul),
  .neo-classical-styled-container section > article:has(ul) {
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid #ded8ce !important;
    border-radius: 0 !important;
    padding: 2.5rem 0 !important;
    box-shadow: none !important;
  }

  /* 7. Unordered & Ordered Lists: Structured Editorial Formatting */
  .lab-styled-preview[data-style="neo-classical"] ul,
  .lab-styled-preview[data-style="neo-classical"] ol,
  .neo-classical-styled-container ul,
  .neo-classical-styled-container ol {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1.5rem 0 !important;
  }

  .lab-styled-preview[data-style="neo-classical"] li,
  .neo-classical-styled-container li {
    position: relative;
    padding-left: 1.75rem;
    margin-bottom: 1rem;
    font-size: 0.9375rem;
    color: #383531;
    line-height: 1.65;
  }

  .lab-styled-preview[data-style="neo-classical"] li::before,
  .neo-classical-styled-container li::before {
    content: '❖';
    position: absolute;
    left: 0;
    color: #b89758;
    font-size: 0.6875rem;
    top: 0.2rem;
  }

  /* Restaurant Fine-Dining Menu Formatting (Sample 6) */
  .lab-styled-preview[data-style="neo-classical"] section > article ul li,
  .neo-classical-styled-container section > article ul li {
    padding-left: 0;
    margin-bottom: 1.75rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #eae5dc;
  }

  .lab-styled-preview[data-style="neo-classical"] section > article ul li::before,
  .neo-classical-styled-container section > article ul li::before {
    display: none;
  }

  .lab-styled-preview[data-style="neo-classical"] section > article ul li strong,
  .neo-classical-styled-container section > article ul li strong {
    font-family: 'Cinzel', 'Playfair Display', serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: #1a1917;
  }

  .lab-styled-preview[data-style="neo-classical"] section > article ul li p,
  .neo-classical-styled-container section > article ul li p {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: #6b665e;
    margin-top: 0.35rem;
    margin-bottom: 0;
    line-height: 1.6;
  }

  /* 8. Editorial Blockquote: Double Structural Border */
  .lab-styled-preview[data-style="neo-classical"] blockquote,
  .neo-classical-styled-container blockquote {
    font-family: 'Cinzel', 'Playfair Display', 'Georgia', serif;
    font-style: normal;
    font-size: 1.35rem;
    line-height: 1.65;
    color: #1a1917;
    background: #fbf9f4;
    border-left: 4px double #1a1917;
    padding: 2.25rem 2.5rem;
    margin: 3.5rem 0;
    position: relative;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="neo-classical"] blockquote::before,
  .neo-classical-styled-container blockquote::before {
    content: '“';
    font-family: 'Playfair Display', serif;
    font-size: 4.5rem;
    line-height: 0.6;
    color: #ded8ce;
    display: block;
    margin-bottom: 0.75rem;
  }

  /* 9. Architectural Information Tables: Double Rules & Inscribed Headers */
  .lab-styled-preview[data-style="neo-classical"] table,
  .neo-classical-styled-container table {
    width: 100%;
    border-collapse: collapse;
    margin: 3rem 0;
    background: #ffffff;
    border: 1px solid #ded8ce;
    box-shadow: none;
    font-variant-numeric: tabular-nums;
  }

  .lab-styled-preview[data-style="neo-classical"] thead,
  .neo-classical-styled-container thead {
    border-top: 1px solid #ded8ce;
    border-bottom: 3px double #1a1917;
    background-color: #f7f4ee;
  }

  .lab-styled-preview[data-style="neo-classical"] th,
  .neo-classical-styled-container th {
    font-family: 'Inter', sans-serif;
    font-size: 0.71875rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #1a1917;
    padding: 1.15rem 1.25rem;
    text-align: left;
  }

  .lab-styled-preview[data-style="neo-classical"] td,
  .neo-classical-styled-container td {
    padding: 1.15rem 1.25rem;
    border-bottom: 1px solid #ded8ce;
    color: #1a1917;
    font-size: 0.9375rem;
  }

  .lab-styled-preview[data-style="neo-classical"] tr:last-child td,
  .neo-classical-styled-container tr:last-child td {
    border-bottom: none;
  }

  .lab-styled-preview[data-style="neo-classical"] tr:hover td,
  .neo-classical-styled-container tr:hover td {
    background-color: #fbf9f4;
  }

  /* 10. Form Controls: Restrained Stone Borders & Crisp Focus */
  .lab-styled-preview[data-style="neo-classical"] form,
  .neo-classical-styled-container form {
    max-width: 600px;
    margin: 2.5rem 0;
  }

  .lab-styled-preview[data-style="neo-classical"] label,
  .neo-classical-styled-container label {
    font-family: 'Inter', sans-serif;
    font-size: 0.71875rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #4a4742;
    margin-bottom: 0.5rem;
    display: block;
  }

  .lab-styled-preview[data-style="neo-classical"] input[type="text"],
  .lab-styled-preview[data-style="neo-classical"] input[type="email"],
  .lab-styled-preview[data-style="neo-classical"] input[type="password"],
  .lab-styled-preview[data-style="neo-classical"] textarea,
  .lab-styled-preview[data-style="neo-classical"] select,
  .neo-classical-styled-container input[type="text"],
  .neo-classical-styled-container input[type="email"],
  .neo-classical-styled-container input[type="password"],
  .neo-classical-styled-container textarea,
  .neo-classical-styled-container select {
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #ded8ce;
    border-radius: 2px;
    padding: 0.85rem 1.15rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.9375rem;
    color: #1a1917;
    box-sizing: border-box;
    margin-bottom: 1.5rem;
    transition: border-color 160ms ease;
  }

  .lab-styled-preview[data-style="neo-classical"] input:focus,
  .lab-styled-preview[data-style="neo-classical"] textarea:focus,
  .lab-styled-preview[data-style="neo-classical"] select:focus,
  .neo-classical-styled-container input:focus,
  .neo-classical-styled-container textarea:focus,
  .neo-classical-styled-container select:focus {
    outline: none;
    border-color: #1a1917;
  }

  /* 11. E-Commerce Controls (Sample 5) */
  .lab-styled-preview[data-style="neo-classical"] section > article > div:has(button),
  .neo-classical-styled-container section > article > div:has(button) {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin: 1.5rem 0;
  }

  .lab-styled-preview[data-style="neo-classical"] section > article > div > button,
  .neo-classical-styled-container section > article > div > button {
    padding: 0.5rem 1.25rem;
    font-size: 0.75rem;
    letter-spacing: 0.14em;
    background: transparent;
    color: #1a1917;
    border: 1px solid #ded8ce;
    border-radius: 2px;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="neo-classical"] section > article > div > button:hover,
  .neo-classical-styled-container section > article > div > button:hover {
    background: #1a1917;
    border-color: #1a1917;
    color: #fcfbf7;
  }

  /* 12. Architectural Images: Fine Inset Border */
  .lab-styled-preview[data-style="neo-classical"] img,
  .neo-classical-styled-container img {
    border-radius: 2px;
    border: 1px solid #ded8ce;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 2rem 0;
  }

  /* 13. Closing Plinth Footer: Double Rule & Organized Inscriptions */
  .lab-styled-preview[data-style="neo-classical"] footer,
  .neo-classical-styled-container footer {
    border-top: 4px double #1a1917;
    padding: 3.5rem 0 2rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .lab-styled-preview[data-style="neo-classical"] footer p,
  .neo-classical-styled-container footer p {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8c857b;
    margin: 0;
  }

  /* 14. Responsive Layout & Usability */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="neo-classical"] h1,
    .neo-classical-styled-container h1 {
      font-size: clamp(2rem, 8vw, 3rem);
    }
  }
`;
