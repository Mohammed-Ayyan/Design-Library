/**
 * Maximalism Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Maximalism
 * is applied. Builds a deliberate, art-directed aesthetic from abundance,
 * layering, tactile contrast, ornamental typography, and controlled density—
 * without ever mutating the user's underlying HTML structure or DOM hierarchy.
 */

export const maximalistSemanticCss = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700&display=swap');

  /* Container Foundation: Warm Tactile Canvas with Micro-Lattice Grid */
  .lab-styled-preview[data-style="maximalism"],
  .maximalism-styled-container {
    background-color: #faf6ef !important;
    background-image: 
      radial-gradient(#dcd2be 0.75px, transparent 0.75px),
      radial-gradient(#eae0ce 1px, transparent 1px) !important;
    background-size: 20px 20px, 40px 40px !important;
    background-position: 0 0, 10px 10px !important;
    color: #18130f !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.65 !important;
    letter-spacing: -0.005em !important;
    box-shadow: none !important;
    position: relative !important;
  }

  /* 1. Masthead Navigation: Expressive Editorial Masthead with Ornamental Separators */
  .lab-styled-preview[data-style="maximalism"] nav,
  .maximalism-styled-container nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    padding: 1.1rem 0 1.25rem;
    border-bottom: 3px double #701a2b;
    margin-bottom: 3rem;
    position: relative;
  }

  .lab-styled-preview[data-style="maximalism"] nav a,
  .maximalism-styled-container nav a {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.9375rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #18130f;
    text-decoration: none;
    padding: 0.35rem 0.5rem;
    border-bottom: 2px solid transparent;
    transition: color 140ms ease, border-color 140ms ease, transform 140ms ease;
    display: inline-flex;
    align-items: center;
  }

  .lab-styled-preview[data-style="maximalism"] nav a:not(:last-child)::after,
  .maximalism-styled-container nav a:not(:last-child)::after {
    content: '◆';
    color: #701a2b;
    font-size: 0.55rem;
    margin-left: 1.25rem;
    opacity: 0.7;
    pointer-events: none;
  }

  .lab-styled-preview[data-style="maximalism"] nav a:hover,
  .maximalism-styled-container nav a:hover {
    color: #701a2b;
    border-color: #701a2b;
    text-decoration: none;
    transform: translateY(-1px);
    background-color: rgba(112, 26, 43, 0.04);
  }

  /* 2. Eyebrow Kickers & Metadata: Tracked Accented Markers */
  .lab-styled-preview[data-style="maximalism"] header > p:first-child,
  .lab-styled-preview[data-style="maximalism"] section > p:first-child:not(:last-child),
  .lab-styled-preview[data-style="maximalism"] article > p:first-child:not(:last-child),
  .maximalism-styled-container header > p:first-child,
  .maximalism-styled-container section > p:first-child:not(:last-child),
  .maximalism-styled-container article > p:first-child:not(:last-child) {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #701a2b;
    margin-bottom: 0.65rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .lab-styled-preview[data-style="maximalism"] header > p:first-child::before,
  .lab-styled-preview[data-style="maximalism"] section > p:first-child:not(:last-child)::before,
  .lab-styled-preview[data-style="maximalism"] article > p:first-child:not(:last-child)::before,
  .maximalism-styled-container header > p:first-child::before,
  .maximalism-styled-container section > p:first-child:not(:last-child)::before,
  .maximalism-styled-container article > p:first-child:not(:last-child)::before {
    content: '§';
    color: #d97706;
    font-size: 0.95rem;
    font-weight: 900;
    line-height: 1;
  }

  /* 3. Grand Typographic Hierarchy: Expressive Display Serif */
  .lab-styled-preview[data-style="maximalism"] h1,
  .maximalism-styled-container h1 {
    font-family: 'Playfair Display', 'Didot', 'Bodoni MT', Georgia, serif !important;
    font-size: clamp(2.1rem, 4.8vw, 3.6rem) !important;
    font-weight: 800 !important;
    line-height: 1.1 !important;
    letter-spacing: -0.02em !important;
    color: #18130f !important;
    margin: 0.6rem 0 1.25rem 0 !important;
    overflow-wrap: break-word !important;
    word-break: normal !important;
    text-wrap: balance;
  }

  .lab-styled-preview[data-style="maximalism"] h2,
  .maximalism-styled-container h2 {
    font-family: 'Playfair Display', Georgia, serif !important;
    font-size: clamp(1.75rem, 3.6vw, 2.35rem) !important;
    font-weight: 700 !important;
    line-height: 1.18 !important;
    letter-spacing: -0.015em !important;
    color: #701a2b !important;
    margin: 2.25rem 0 1.25rem 0 !important;
    padding-bottom: 0.5rem !important;
    border-bottom: 2px solid #701a2b !important;
    display: block !important;
    position: relative !important;
    overflow-wrap: break-word !important;
  }

  .lab-styled-preview[data-style="maximalism"] h2::after,
  .maximalism-styled-container h2::after {
    content: '◆';
    position: absolute;
    right: 0;
    bottom: -0.45rem;
    color: #d97706;
    font-size: 0.75rem;
    background-color: #faf6ef;
    padding-left: 0.4rem;
  }

  .lab-styled-preview[data-style="maximalism"] h3,
  .maximalism-styled-container h3 {
    font-family: 'Playfair Display', Georgia, serif !important;
    font-size: 1.35rem !important;
    font-weight: 700 !important;
    line-height: 1.25 !important;
    letter-spacing: -0.01em !important;
    color: #18130f !important;
    margin: 0 0 0.5rem 0 !important;
    overflow-wrap: break-word !important;
  }

  .lab-styled-preview[data-style="maximalism"] h4,
  .maximalism-styled-container h4 {
    font-family: 'Inter', sans-serif !important;
    font-size: 0.9375rem !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.08em !important;
    color: #4a3e35 !important;
    margin: 0 0 0.35rem 0 !important;
    overflow-wrap: break-word !important;
  }

  /* 4. Body Copy, Lead Paragraph & Drop Cap */
  .lab-styled-preview[data-style="maximalism"] p,
  .maximalism-styled-container p {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 1.03125rem;
    line-height: 1.7;
    color: #2c241e;
    margin-bottom: 1.25rem;
    overflow-wrap: break-word;
  }

  /* Lead paragraph in editorial context */
  .lab-styled-preview[data-style="maximalism"] article > p:nth-of-type(1),
  .lab-styled-preview[data-style="maximalism"] section > p:nth-of-type(2):not(:last-child),
  .maximalism-styled-container article > p:nth-of-type(1),
  .maximalism-styled-container section > p:nth-of-type(2):not(:last-child) {
    font-size: 1.15rem;
    line-height: 1.75;
    color: #18130f;
    font-weight: 450;
  }

  /* Editorial Drop Cap in long-form Article */
  .lab-styled-preview[data-style="maximalism"] article:has(blockquote) > p:first-of-type::first-letter,
  .maximalism-styled-container article:has(blockquote) > p:first-of-type::first-letter {
    font-family: 'Playfair Display', 'Didot', Georgia, serif;
    font-size: 3.5rem;
    float: left;
    line-height: 0.82;
    padding-top: 4px;
    padding-right: 12px;
    padding-bottom: 2px;
    color: #701a2b;
    font-weight: 800;
  }

  /* 5. Blockquote: Editorial Pull-Quote with Inset Framing */
  .lab-styled-preview[data-style="maximalism"] blockquote,
  .maximalism-styled-container blockquote {
    position: relative;
    margin: 2.5rem 0;
    padding: 1.85rem 2.25rem 1.85rem 2.5rem;
    background: linear-gradient(135deg, rgba(244, 237, 226, 0.95) 0%, rgba(250, 246, 239, 0.95) 100%);
    border: 1px solid #dcd2be;
    border-left: 5px solid #701a2b;
    box-shadow: 4px 4px 0px rgba(24, 19, 15, 0.08);
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.3rem;
    font-style: italic;
    line-height: 1.6;
    color: #18130f;
  }

  .lab-styled-preview[data-style="maximalism"] blockquote::before,
  .maximalism-styled-container blockquote::before {
    content: '“';
    position: absolute;
    top: 0.15rem;
    left: 0.65rem;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 4.5rem;
    line-height: 1;
    color: #701a2b;
    opacity: 0.25;
    pointer-events: none;
  }

  /* 6. Action Buttons: Tactile, Ornamental & Firmly Offset */
  .lab-styled-preview[data-style="maximalism"] button,
  .maximalism-styled-container button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.8rem 1.75rem;
    color: #ffffff;
    background: linear-gradient(180deg, #831843 0%, #701a2b 100%);
    border: 2px solid #18130f;
    border-radius: 3px;
    box-shadow: 3px 3px 0px #18130f;
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease;
    text-decoration: none;
    line-height: 1.2;
    margin-top: 0.5rem;
  }

  .lab-styled-preview[data-style="maximalism"] button:hover,
  .maximalism-styled-container button:hover {
    background: linear-gradient(180deg, #9f1239 0%, #881337 100%);
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px 0px #18130f;
    color: #ffffff;
  }

  .lab-styled-preview[data-style="maximalism"] button:active,
  .maximalism-styled-container button:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0px #18130f;
  }

  /* Secondary button groups (e.g., size selection pills or sub-actions) */
  .lab-styled-preview[data-style="maximalism"] div > button,
  .maximalism-styled-container div > button {
    background: #fffdf9;
    color: #18130f;
    border: 2px solid #18130f;
    box-shadow: 2px 2px 0px #18130f;
    padding: 0.55rem 1.15rem;
    font-size: 0.8125rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .lab-styled-preview[data-style="maximalism"] div > button:hover,
  .maximalism-styled-container div > button:hover {
    background: #701a2b;
    color: #ffffff;
    box-shadow: 3px 3px 0px #18130f;
  }

  /* 7. Articles & Deterministic Collection Variation (Zero Randomness) */
  .lab-styled-preview[data-style="maximalism"] article,
  .maximalism-styled-container article {
    position: relative;
    padding: 1.65rem 1.85rem;
    margin-bottom: 1.5rem;
    background-color: #fffdf9;
    border: 1px solid #dcd2be;
    box-shadow: 3px 3px 0px rgba(24, 19, 15, 0.07);
    transition: transform 160ms ease, box-shadow 160ms ease;
  }

  /* Variation 1: Crimson Accent Ribbon & Inset Corner Flourish */
  .lab-styled-preview[data-style="maximalism"] article:nth-child(3n+1),
  .maximalism-styled-container article:nth-child(3n+1) {
    background-color: #fffdf9;
    border-left: 5px solid #701a2b;
    border-top: 1px solid #dcd2be;
    border-right: 1px solid #dcd2be;
    border-bottom: 1px solid #dcd2be;
  }

  /* Variation 2: Cobalt / Lapis Accent Ribbon & Parchment Ground */
  .lab-styled-preview[data-style="maximalism"] article:nth-child(3n+2),
  .maximalism-styled-container article:nth-child(3n+2) {
    background-color: #f8f2e8;
    border-left: 5px solid #1e40af;
    border-top: 1px solid #dcd2be;
    border-right: 1px solid #dcd2be;
    border-bottom: 1px solid #dcd2be;
  }

  /* Variation 3: Antique Forest Accent Ribbon & Fine Double Border */
  .lab-styled-preview[data-style="maximalism"] article:nth-child(3n+3),
  .maximalism-styled-container article:nth-child(3n+3) {
    background-color: #f4ede2;
    border-left: 5px solid #166534;
    border-top: 1px solid #dcd2be;
    border-right: 1px solid #dcd2be;
    border-bottom: 1px solid #dcd2be;
  }

  .lab-styled-preview[data-style="maximalism"] article:hover,
  .maximalism-styled-container article:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0px rgba(24, 19, 15, 0.14);
  }

  /* Featured Pricing Tier Accentuation: Art-directed prominence without DOM restructuring */
  .lab-styled-preview[data-style="maximalism"] div > article:has(button):nth-child(2),
  .maximalism-styled-container div > article:has(button):nth-child(2) {
    background: #18130f !important;
    color: #faf6ef !important;
    border: 2px solid #d97706 !important;
    border-left: 6px solid #d97706 !important;
    box-shadow: 5px 5px 0px rgba(112, 26, 43, 0.45) !important;
  }

  .lab-styled-preview[data-style="maximalism"] div > article:has(button):nth-child(2) h3,
  .maximalism-styled-container div > article:has(button):nth-child(2) h3 {
    color: #ffffff !important;
  }

  .lab-styled-preview[data-style="maximalism"] div > article:has(button):nth-child(2) p,
  .maximalism-styled-container div > article:has(button):nth-child(2) p {
    color: #d5c8bb !important;
  }

  .lab-styled-preview[data-style="maximalism"] div > article:has(button):nth-child(2) strong,
  .maximalism-styled-container div > article:has(button):nth-child(2) strong {
    color: #f59e0b !important;
  }

  .lab-styled-preview[data-style="maximalism"] div > article:has(button):nth-child(2) button,
  .maximalism-styled-container div > article:has(button):nth-child(2) button {
    background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%) !important;
    color: #18130f !important;
    border-color: #18130f !important;
    box-shadow: 3px 3px 0px #000000 !important;
  }

  /* Metric Card Typography (Dashboard / Telemetry) */
  .lab-styled-preview[data-style="maximalism"] article > strong,
  .maximalism-styled-container article > strong {
    font-family: 'Playfair Display', 'Space Grotesk', serif;
    font-size: 2.15rem;
    font-weight: 800;
    line-height: 1.15;
    color: #18130f;
    display: block;
    margin: 0.35rem 0 0.55rem 0;
    letter-spacing: -0.02em;
  }

  /* 8. Dense Editorial Almanac Table */
  .lab-styled-preview[data-style="maximalism"] table,
  .maximalism-styled-container table {
    width: 100%;
    border-collapse: collapse;
    margin: 2.25rem 0;
    border: 2px solid #18130f;
    box-shadow: 4px 4px 0px rgba(24, 19, 15, 0.12);
    font-size: 0.875rem;
    background-color: #fffdf9;
  }

  .lab-styled-preview[data-style="maximalism"] thead,
  .maximalism-styled-container thead {
    background-color: #701a2b;
    color: #ffffff;
  }

  .lab-styled-preview[data-style="maximalism"] th,
  .maximalism-styled-container th {
    padding: 0.9rem 1.25rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    text-align: left;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }

  .lab-styled-preview[data-style="maximalism"] th:last-child,
  .maximalism-styled-container th:last-child {
    border-right: none;
  }

  .lab-styled-preview[data-style="maximalism"] tbody tr,
  .maximalism-styled-container tbody tr {
    border-bottom: 1px solid #dcd2be;
    transition: background-color 100ms ease;
  }

  .lab-styled-preview[data-style="maximalism"] tbody tr:nth-child(even),
  .maximalism-styled-container tbody tr:nth-child(even) {
    background-color: #f5eee4;
  }

  .lab-styled-preview[data-style="maximalism"] tbody tr:nth-child(odd),
  .maximalism-styled-container tbody tr:nth-child(odd) {
    background-color: #fffdf9;
  }

  .lab-styled-preview[data-style="maximalism"] tbody tr:hover,
  .maximalism-styled-container tbody tr:hover {
    background-color: #ede2d2;
  }

  .lab-styled-preview[data-style="maximalism"] td,
  .maximalism-styled-container td {
    padding: 0.85rem 1.25rem;
    color: #18130f;
    border-right: 1px solid #dcd2be;
    font-family: 'Inter', monospace, sans-serif;
  }

  .lab-styled-preview[data-style="maximalism"] td:last-child,
  .maximalism-styled-container td:last-child {
    border-right: none;
    font-weight: 700;
    color: #166534;
    letter-spacing: 0.04em;
  }

  /* 9. Forms & Inputs: Rich Labels and Tactile Focus */
  .lab-styled-preview[data-style="maximalism"] form,
  .maximalism-styled-container form {
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
    max-width: 680px;
    margin: 1.75rem 0;
  }

  .lab-styled-preview[data-style="maximalism"] form > div,
  .maximalism-styled-container form > div {
    display: flex;
    flex-direction: column;
  }

  .lab-styled-preview[data-style="maximalism"] label,
  .maximalism-styled-container label {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #701a2b;
    margin-bottom: 0.45rem;
  }

  .lab-styled-preview[data-style="maximalism"] input,
  .lab-styled-preview[data-style="maximalism"] textarea,
  .lab-styled-preview[data-style="maximalism"] select,
  .maximalism-styled-container input,
  .maximalism-styled-container textarea,
  .maximalism-styled-container select {
    width: 100%;
    box-sizing: border-box;
    padding: 0.8rem 1.1rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.9375rem;
    color: #18130f;
    background-color: #fffdf9;
    border: 2px solid #c8baa8;
    border-radius: 3px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);
    transition: border-color 120ms ease, box-shadow 120ms ease;
  }

  .lab-styled-preview[data-style="maximalism"] input:focus,
  .lab-styled-preview[data-style="maximalism"] textarea:focus,
  .lab-styled-preview[data-style="maximalism"] select:focus,
  .maximalism-styled-container input:focus,
  .maximalism-styled-container textarea:focus,
  .maximalism-styled-container select:focus {
    outline: none;
    border-color: #701a2b;
    box-shadow: 3px 3px 0px #701a2b;
  }

  /* 10. Lists & Hospitality Menu Enhancements */
  .lab-styled-preview[data-style="maximalism"] ul,
  .lab-styled-preview[data-style="maximalism"] ol,
  .maximalism-styled-container ul,
  .maximalism-styled-container ol {
    padding-left: 1.5rem;
    margin: 1rem 0 1.5rem 0;
  }

  .lab-styled-preview[data-style="maximalism"] ul li,
  .lab-styled-preview[data-style="maximalism"] ol li,
  .maximalism-styled-container ul li,
  .maximalism-styled-container ol li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
    color: #2c241e;
  }

  /* Ornamental list bullets for unnumbered lists */
  .lab-styled-preview[data-style="maximalism"] ul:not([class]) li::marker,
  .maximalism-styled-container ul:not([class]) li::marker {
    color: #701a2b;
  }

  /* Menu Item Styling (Sample 6) */
  .lab-styled-preview[data-style="maximalism"] section:has(p:contains("EST.")) article ul,
  .maximalism-styled-container section:has(p:contains("EST.")) article ul {
    list-style: none;
    padding-left: 0;
  }

  .lab-styled-preview[data-style="maximalism"] section:has(p:contains("EST.")) article li,
  .maximalism-styled-container section:has(p:contains("EST.")) article li {
    padding: 0.75rem 0;
    border-bottom: 1px dashed #dcd2be;
  }

  .lab-styled-preview[data-style="maximalism"] section:has(p:contains("EST.")) article li > strong,
  .maximalism-styled-container section:has(p:contains("EST.")) article li > strong {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.15rem;
    color: #18130f;
  }

  .lab-styled-preview[data-style="maximalism"] section:has(p:contains("EST.")) article li > p,
  .maximalism-styled-container section:has(p:contains("EST.")) article li > p {
    font-style: italic;
    font-size: 0.9375rem;
    color: #5c4e42;
    margin-top: 0.25rem;
    margin-bottom: 0;
  }

  /* 11. Footers: Dense Typographic Termination */
  .lab-styled-preview[data-style="maximalism"] footer,
  .maximalism-styled-container footer {
    border-top: 3px double #dcd2be;
    padding: 2rem 0 1.25rem;
    margin-top: 3.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }

  .lab-styled-preview[data-style="maximalism"] footer p,
  .maximalism-styled-container footer p {
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #786b5f;
    letter-spacing: 0.02em;
    margin: 0;
  }

  /* 12. General Structural Spacing and Clean Fallbacks */
  .lab-styled-preview[data-style="maximalism"] section,
  .maximalism-styled-container section {
    margin-bottom: 3rem;
  }

  .lab-styled-preview[data-style="maximalism"] section:last-child,
  .maximalism-styled-container section:last-child {
    margin-bottom: 0;
  }

  /* Responsive Graceful Degradation */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="maximalism"] nav,
    .maximalism-styled-container nav {
      gap: 0.75rem;
    }

    .lab-styled-preview[data-style="maximalism"] table,
    .maximalism-styled-container table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }

    .lab-styled-preview[data-style="maximalism"] button,
    .maximalism-styled-container button {
      width: 100%;
    }
  }
`;
