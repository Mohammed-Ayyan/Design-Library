/**
 * Neo-Brutalism Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Neo-Brutalism
 * is applied. Combines bold structural honesty with playful contemporary graphic-design
 * elements: warm off-white foundation, crisp 2px dark outlines, tactile hard-offset shadows,
 * friendly rounded geometry (8px-12px / pills), punchy saturated color blocks (electric coral,
 * sunny yellow, electric blue), and high-contrast typography—preserving the user's
 * underlying HTML structure with zero DOM mutations.
 */

export const neoBrutalistSemanticCss = `
  /* Container Foundation: Warm Optimistic Paper with Crisp Graphic Contrast */
  .lab-styled-preview[data-style="neo-brutalism"],
  .neo-brutalism-styled-container {
    background-color: #fffdfa !important;
    color: #121212 !important;
    font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.6 !important;
    box-shadow: none !important;
    position: relative !important;
    overflow-x: hidden !important;
  }

  /* 1. Graphic Navigation: Bold Wordmark & Tactile Pill Controls */
  .lab-styled-preview[data-style="neo-brutalism"] nav,
  .neo-brutalism-styled-container nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
    padding: 1.25rem 0 1.5rem;
    border-bottom: 2px solid #121212;
    margin-bottom: 3.5rem;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="neo-brutalism"] nav a,
  .neo-brutalism-styled-container nav a {
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #121212;
    text-decoration: none;
    padding: 0.4rem 0.85rem;
    border-radius: 9999px;
    border: 2px solid transparent;
    transition: all 120ms ease;
    display: inline-flex;
    align-items: center;
  }

  .lab-styled-preview[data-style="neo-brutalism"] nav a:hover,
  .neo-brutalism-styled-container nav a:hover {
    background-color: #ffde59;
    border-color: #121212;
    box-shadow: 2px 2px 0px #121212;
    transform: translate(-1px, -1px);
    text-decoration: none;
  }

  /* First Link acts as Bold Brand Anchor */
  .lab-styled-preview[data-style="neo-brutalism"] nav a:first-child,
  .neo-brutalism-styled-container nav a:first-child {
    font-size: 1.05rem;
    font-weight: 900;
    letter-spacing: -0.02em;
    background-color: #121212;
    color: #ffffff;
    border-color: #121212;
    box-shadow: 3px 3px 0px #ff5a5f;
    padding: 0.45rem 1rem;
  }

  .lab-styled-preview[data-style="neo-brutalism"] nav a:first-child:hover,
  .neo-brutalism-styled-container nav a:first-child:hover {
    background-color: #ff5a5f;
    color: #ffffff;
    border-color: #121212;
    box-shadow: 3px 3px 0px #121212;
  }

  /* 2. Playful Eyebrows & Metadata: Tactile Sunny Yellow Pill Badges */
  .lab-styled-preview[data-style="neo-brutalism"] header > p:first-child,
  .lab-styled-preview[data-style="neo-brutalism"] section > p:first-child:not(:last-child),
  .lab-styled-preview[data-style="neo-brutalism"] article > p:first-child:not(:last-child),
  .neo-brutalism-styled-container header > p:first-child,
  .neo-brutalism-styled-container section > p:first-child:not(:last-child),
  .neo-brutalism-styled-container article > p:first-child:not(:last-child) {
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #121212;
    background-color: #ffde59;
    border: 2px solid #121212;
    border-radius: 9999px;
    padding: 0.3rem 0.85rem;
    box-shadow: 2.5px 2.5px 0px #121212;
    margin-bottom: 1.25rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
  }

  /* 3. Confident Grotesk Headings: High Contrast Display Typography */
  .lab-styled-preview[data-style="neo-brutalism"] h1,
  .neo-brutalism-styled-container h1 {
    font-family: 'Plus Jakarta Sans', 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6.2vw, 4.75rem);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.035em;
    color: #121212;
    margin-top: 0;
    margin-bottom: 1.5rem;
    max-width: 18ch;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="neo-brutalism"] h2,
  .neo-brutalism-styled-container h2 {
    font-family: 'Plus Jakarta Sans', 'Space Grotesk', sans-serif;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.025em;
    color: #121212;
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #121212;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="neo-brutalism"] h2::after,
  .neo-brutalism-styled-container h2::after {
    content: '■';
    font-size: 0.875rem;
    color: #ff5a5f;
  }

  .lab-styled-preview[data-style="neo-brutalism"] h3,
  .neo-brutalism-styled-container h3 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.35rem;
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: -0.015em;
    color: #121212;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .lab-styled-preview[data-style="neo-brutalism"] h4,
  .neo-brutalism-styled-container h4 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: #121212;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  /* 4. Readable Body Copy: High Legibility on Warm Foundation */
  .lab-styled-preview[data-style="neo-brutalism"] p,
  .neo-brutalism-styled-container p {
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.65;
    color: #374151;
    margin-top: 0;
    margin-bottom: 1.5rem;
    max-width: 65ch;
  }

  /* 5. Tactile Mechanical Buttons: 2px Outline + 4px Hard Offset Shadow */
  .lab-styled-preview[data-style="neo-brutalism"] button,
  .lab-styled-preview[data-style="neo-brutalism"] input[type="submit"],
  .neo-brutalism-styled-container button,
  .neo-brutalism-styled-container input[type="submit"] {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.9375rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    padding: 0.85rem 1.75rem;
    border-radius: 10px;
    border: 2px solid #121212;
    background-color: #ff5a5f;
    color: #ffffff;
    box-shadow: 4px 4px 0px #121212;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    transition: transform 100ms ease, box-shadow 100ms ease, background-color 100ms ease;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="neo-brutalism"] button:hover,
  .lab-styled-preview[data-style="neo-brutalism"] input[type="submit"]:hover,
  .neo-brutalism-styled-container button:hover,
  .neo-brutalism-styled-container input[type="submit"]:hover {
    background-color: #ff4338;
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #121212;
  }

  .lab-styled-preview[data-style="neo-brutalism"] button:active,
  .lab-styled-preview[data-style="neo-brutalism"] input[type="submit"]:active,
  .neo-brutalism-styled-container button:active,
  .neo-brutalism-styled-container input[type="submit"]:active {
    transform: translate(4px, 4px);
    box-shadow: 0px 0px 0px #121212;
  }

  /* Secondary Button: Crisp White Surface with Hard Offset Shadow */
  .lab-styled-preview[data-style="neo-brutalism"] button + button,
  .neo-brutalism-styled-container button + button {
    background-color: #ffffff;
    color: #121212;
    margin-left: 0.85rem;
  }

  .lab-styled-preview[data-style="neo-brutalism"] button + button:hover,
  .neo-brutalism-styled-container button + button:hover {
    background-color: #ffde59;
    color: #121212;
  }

  /* 6. Articles & Content: Open Editorial Rows vs Selective Cards (No Card-Everything) */
  .lab-styled-preview[data-style="neo-brutalism"] section > article,
  .neo-brutalism-styled-container section > article {
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }

  /* Standard Editorial / Portfolio Lists: Open Rows with Graphic Index Pills */
  .lab-styled-preview[data-style="neo-brutalism"] section > article:nth-child(3n+1),
  .neo-brutalism-styled-container section > article:nth-child(3n+1) {
    background: transparent;
    border: none;
    border-bottom: 2px solid #121212;
    padding: 1.5rem 0 2rem;
    border-radius: 0;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > article:nth-child(3n+1)::before,
  .neo-brutalism-styled-container section > article:nth-child(3n+1)::before {
    content: '01';
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
    font-size: 0.75rem;
    color: #121212;
    background: #ffde59;
    border: 2px solid #121212;
    border-radius: 6px;
    padding: 0.2rem 0.55rem;
    box-shadow: 2px 2px 0px #121212;
    display: inline-block;
    margin-bottom: 0.6rem;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > article:nth-child(3n+2),
  .neo-brutalism-styled-container section > article:nth-child(3n+2) {
    background: transparent;
    border: none;
    border-bottom: 2px solid #121212;
    padding: 1.5rem 0 2rem;
    border-radius: 0;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > article:nth-child(3n+2)::before,
  .neo-brutalism-styled-container section > article:nth-child(3n+2)::before {
    content: '02';
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
    font-size: 0.75rem;
    color: #121212;
    background: #60a5fa;
    border: 2px solid #121212;
    border-radius: 6px;
    padding: 0.2rem 0.55rem;
    box-shadow: 2px 2px 0px #121212;
    display: inline-block;
    margin-bottom: 0.6rem;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > article:nth-child(3n+3),
  .neo-brutalism-styled-container section > article:nth-child(3n+3) {
    background: transparent;
    border: none;
    border-bottom: 2px solid #121212;
    padding: 1.5rem 0 2rem;
    border-radius: 0;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > article:nth-child(3n+3)::before,
  .neo-brutalism-styled-container section > article:nth-child(3n+3)::before {
    content: '03';
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
    font-size: 0.75rem;
    color: #121212;
    background: #34d399;
    border: 2px solid #121212;
    border-radius: 6px;
    padding: 0.2rem 0.55rem;
    box-shadow: 2px 2px 0px #121212;
    display: inline-block;
    margin-bottom: 0.6rem;
  }

  /* 7. SaaS Pricing Tier Grid: Tactile Card Units with Saturated Yellow Featured Tier */
  .lab-styled-preview[data-style="neo-brutalism"] section > div > article,
  .neo-brutalism-styled-container section > div > article {
    background: #ffffff;
    border: 2px solid #121212;
    border-radius: 12px;
    padding: 2.25rem 2rem;
    box-shadow: 4px 4px 0px #121212;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 120ms ease, box-shadow 120ms ease;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > div > article strong,
  .neo-brutalism-styled-container section > div > article strong {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2.25rem;
    font-weight: 900;
    color: #121212;
    display: block;
    margin: 1.25rem 0 1.5rem;
    font-variant-numeric: tabular-nums;
  }

  /* Featured Tier (Professional): Saturated Sunny Yellow Punch */
  .lab-styled-preview[data-style="neo-brutalism"] section > div > article:nth-child(2),
  .neo-brutalism-styled-container section > div > article:nth-child(2) {
    background: #ffde59;
    border-width: 2.5px;
    box-shadow: 6px 6px 0px #121212;
    transform: translateY(-4px);
    position: relative;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > div > article:nth-child(2)::before {
    content: 'MOST POPULAR';
    position: absolute;
    top: -14px;
    left: 24px;
    background: #121212;
    color: #ffffff;
    font-size: 0.6875rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    border: 2px solid #121212;
    box-shadow: 2px 2px 0px #ff5a5f;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > div > article:nth-child(2) button {
    background-color: #ff5a5f;
    color: #ffffff;
    box-shadow: 4px 4px 0px #121212;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > div > article:nth-child(2) button:hover {
    background-color: #121212;
    color: #ffffff;
  }

  /* 8. Editorial Blockquotes: Graphic Highlight Block with Coral Accent */
  .lab-styled-preview[data-style="neo-brutalism"] blockquote,
  .neo-brutalism-styled-container blockquote {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.35rem;
    line-height: 1.55;
    color: #121212;
    background: #fff8eb;
    border: 2px solid #121212;
    border-left: 8px solid #ff5a5f;
    border-radius: 12px;
    padding: 2rem 2.25rem;
    margin: 3rem 0;
    box-shadow: 4px 4px 0px #121212;
    position: relative;
    z-index: 1;
  }

  /* 9. High-Density Tables: Not Cards! Graphic Outlined Data Grid */
  .lab-styled-preview[data-style="neo-brutalism"] table,
  .neo-brutalism-styled-container table {
    width: 100%;
    border-collapse: collapse;
    margin: 2.5rem 0;
    background: #ffffff;
    border: 2px solid #121212;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 4px 4px 0px #121212;
    font-variant-numeric: tabular-nums;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="neo-brutalism"] thead,
  .neo-brutalism-styled-container thead {
    background-color: #ffde59;
    border-bottom: 2px solid #121212;
  }

  .lab-styled-preview[data-style="neo-brutalism"] th,
  .neo-brutalism-styled-container th {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.8125rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #121212;
    padding: 1.15rem 1.25rem;
    text-align: left;
    border-right: 2px solid #121212;
  }

  .lab-styled-preview[data-style="neo-brutalism"] th:last-child,
  .neo-brutalism-styled-container th:last-child {
    border-right: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] td,
  .neo-brutalism-styled-container td {
    padding: 1.15rem 1.25rem;
    border-bottom: 2px solid #121212;
    border-right: 2px solid #121212;
    color: #121212;
    font-weight: 600;
    font-size: 0.9375rem;
  }

  .lab-styled-preview[data-style="neo-brutalism"] td:last-child,
  .neo-brutalism-styled-container td:last-child {
    border-right: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] tr:last-child td,
  .neo-brutalism-styled-container tr:last-child td {
    border-bottom: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] tr:hover td,
  .neo-brutalism-styled-container tr:hover td {
    background-color: #fff9e6;
  }

  /* 10. Form Controls: Tactile White Fields with 3px Hard Shadow */
  .lab-styled-preview[data-style="neo-brutalism"] form,
  .neo-brutalism-styled-container form {
    max-width: 600px;
    margin: 2rem 0;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="neo-brutalism"] label,
  .neo-brutalism-styled-container label {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.8125rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #121212;
    margin-bottom: 0.5rem;
    display: block;
  }

  .lab-styled-preview[data-style="neo-brutalism"] input[type="text"],
  .lab-styled-preview[data-style="neo-brutalism"] input[type="email"],
  .lab-styled-preview[data-style="neo-brutalism"] input[type="password"],
  .lab-styled-preview[data-style="neo-brutalism"] textarea,
  .lab-styled-preview[data-style="neo-brutalism"] select,
  .neo-brutalism-styled-container input[type="text"],
  .neo-brutalism-styled-container input[type="email"],
  .neo-brutalism-styled-container input[type="password"],
  .neo-brutalism-styled-container textarea,
  .neo-brutalism-styled-container select {
    width: 100%;
    background-color: #ffffff;
    border: 2px solid #121212;
    border-radius: 8px;
    padding: 0.85rem 1.15rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.9375rem;
    font-weight: 600;
    color: #121212;
    box-sizing: border-box;
    margin-bottom: 1.5rem;
    box-shadow: 3px 3px 0px #121212;
    transition: all 120ms ease;
  }

  .lab-styled-preview[data-style="neo-brutalism"] input:focus,
  .lab-styled-preview[data-style="neo-brutalism"] textarea:focus,
  .lab-styled-preview[data-style="neo-brutalism"] select:focus,
  .neo-brutalism-styled-container input:focus,
  .neo-brutalism-styled-container textarea:focus,
  .neo-brutalism-styled-container select:focus {
    outline: none;
    background-color: #ffffff;
    border-color: #121212;
    box-shadow: 4px 4px 0px #ff5a5f;
    transform: translate(-1px, -1px);
  }

  /* 11. Graphic Images: 2px Dark Border + 4px Shadow */
  .lab-styled-preview[data-style="neo-brutalism"] img,
  .neo-brutalism-styled-container img {
    border: 2px solid #121212;
    border-radius: 12px;
    box-shadow: 4px 4px 0px #121212;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 2rem 0;
  }

  /* 12. Graphic Footer: 2px Solid Baseline */
  .lab-styled-preview[data-style="neo-brutalism"] footer,
  .neo-brutalism-styled-container footer {
    border-top: 2px solid #121212;
    padding: 3.5rem 0 2rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="neo-brutalism"] footer p,
  .neo-brutalism-styled-container footer p {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: #6b7280;
    margin: 0;
  }

  /* 13. Responsive Scaling & Mobile Safety */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="neo-brutalism"] h1,
    .neo-brutalism-styled-container h1 {
      font-size: clamp(2rem, 8vw, 3rem);
    }
    .lab-styled-preview[data-style="neo-brutalism"] button,
    .neo-brutalism-styled-container button {
      width: 100%;
      margin-left: 0 !important;
      margin-bottom: 0.75rem;
    }
  }
`;
