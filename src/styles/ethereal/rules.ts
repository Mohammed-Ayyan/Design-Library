export const etherealSemanticCss = `
  /* ==========================================================================
     ETHEREAL — Atmospheric Light, Weightless Typography & Luminous Surfaces
     Strict Semantic CSS Mapping: Zero DOM Wrappers, 100% User HTML Preservation
     ========================================================================== */

  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap');

  /* Atmospheric Foundation: Illuminated Air with Subtle Radial Light Fields */
  .lab-styled-preview[data-style="ethereal"],
  .ethereal-styled-container {
    background-color: #fbfaf8 !important;
    background-image: 
      radial-gradient(at 0% 0%, rgba(224, 236, 248, 0.5) 0px, transparent 55%),
      radial-gradient(at 100% 0%, rgba(238, 230, 245, 0.45) 0px, transparent 50%),
      radial-gradient(at 50% 60%, rgba(255, 255, 255, 0.6) 0px, transparent 65%),
      radial-gradient(at 20% 100%, rgba(235, 242, 238, 0.4) 0px, transparent 60%),
      radial-gradient(at 80% 100%, rgba(245, 238, 242, 0.4) 0px, transparent 55%) !important;
    background-attachment: fixed !important;
    color: #1e2029 !important; /* Deep charcoal for accessible contrast */
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    line-height: 1.8 !important;
    padding: 3.5rem 2.5rem !important;
    min-height: 100% !important;
    box-sizing: border-box !important;
    position: relative !important;
    letter-spacing: 0.005em !important;
  }

  /* Universal Box Sizing */
  .lab-styled-preview[data-style="ethereal"] *,
  .ethereal-styled-container * {
    box-sizing: border-box !important;
  }

  /* 1. Navigation: Weightless & Luminous */
  .lab-styled-preview[data-style="ethereal"] nav,
  .ethereal-styled-container nav {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 2rem !important;
    padding: 1rem 1.75rem !important;
    background: rgba(255, 255, 255, 0.65) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    border: 1px solid rgba(255, 255, 255, 0.95) !important;
    outline: 1px solid rgba(218, 226, 237, 0.35) !important;
    border-radius: 9999px !important;
    box-shadow: 
      0 4px 24px rgba(148, 163, 184, 0.08),
      0 1px 2px rgba(148, 163, 184, 0.04) !important;
    margin-bottom: 3.5rem !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="ethereal"] nav a,
  .ethereal-styled-container nav a {
    font-family: 'Outfit', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 400 !important;
    letter-spacing: 0.04em !important;
    color: #4b5563 !important;
    text-decoration: none !important;
    padding: 0.4rem 0.85rem !important;
    border-radius: 9999px !important;
    position: relative !important;
    transition: all 220ms cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  .lab-styled-preview[data-style="ethereal"] nav a:hover,
  .ethereal-styled-container nav a:hover {
    color: #1e2029 !important;
    background: rgba(255, 255, 255, 0.8) !important;
    box-shadow: 0 2px 8px rgba(148, 163, 184, 0.1) !important;
  }

  /* First Link: Brand Titleplate in Serene Display Serif */
  .lab-styled-preview[data-style="ethereal"] nav a:first-child,
  .ethereal-styled-container nav a:first-child {
    font-family: 'Cormorant Garamond', serif !important;
    font-size: 1.35rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.02em !important;
    color: #1a1d24 !important;
    padding-left: 0.5rem !important;
    margin-right: auto !important;
  }

  .lab-styled-preview[data-style="ethereal"] nav a:first-child:hover,
  .ethereal-styled-container nav a:first-child:hover {
    background: transparent !important;
    box-shadow: none !important;
    color: #4f46e5 !important;
  }

  /* 2. Typographic Hierarchy: Elegant, Weightless & Luminous */
  .lab-styled-preview[data-style="ethereal"] h1,
  .ethereal-styled-container h1 {
    font-family: 'Cormorant Garamond', Georgia, serif !important;
    font-size: clamp(2.4rem, 5.2vw, 4rem) !important;
    font-weight: 300 !important;
    line-height: 1.15 !important;
    letter-spacing: -0.015em !important;
    color: #1a1d24 !important;
    margin-top: 0 !important;
    margin-bottom: 1.5rem !important;
    max-width: 900px !important;
  }

  .lab-styled-preview[data-style="ethereal"] h2,
  .ethereal-styled-container h2 {
    font-family: 'Cormorant Garamond', Georgia, serif !important;
    font-size: clamp(1.85rem, 3.8vw, 2.65rem) !important;
    font-weight: 400 !important;
    line-height: 1.25 !important;
    letter-spacing: -0.01em !important;
    color: #242833 !important;
    margin-top: 2rem !important;
    margin-bottom: 1.25rem !important;
  }

  .lab-styled-preview[data-style="ethereal"] h3,
  .ethereal-styled-container h3 {
    font-family: 'Outfit', sans-serif !important;
    font-size: 1.2rem !important;
    font-weight: 500 !important;
    line-height: 1.35 !important;
    letter-spacing: 0.01em !important;
    color: #2e3340 !important;
    margin-top: 1.25rem !important;
    margin-bottom: 0.75rem !important;
  }

  .lab-styled-preview[data-style="ethereal"] h4,
  .lab-styled-preview[data-style="ethereal"] h5,
  .lab-styled-preview[data-style="ethereal"] h6,
  .ethereal-styled-container h4,
  .ethereal-styled-container h5,
  .ethereal-styled-container h6 {
    font-family: 'Outfit', sans-serif !important;
    font-weight: 500 !important;
    letter-spacing: 0.05em !important;
    text-transform: uppercase !important;
    color: #4b5563 !important;
    margin-top: 1rem !important;
    margin-bottom: 0.5rem !important;
  }

  .lab-styled-preview[data-style="ethereal"] h4,
  .ethereal-styled-container h4 {
    font-size: 0.9375rem !important;
  }

  .lab-styled-preview[data-style="ethereal"] h5,
  .lab-styled-preview[data-style="ethereal"] h6,
  .ethereal-styled-container h5,
  .ethereal-styled-container h6 {
    font-size: 0.8125rem !important;
  }

  /* Body Paragraphs: High legibility, calm reading rhythm */
  .lab-styled-preview[data-style="ethereal"] p,
  .ethereal-styled-container p {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
    font-size: 1rem !important;
    line-height: 1.8 !important;
    color: #374151 !important; /* Fully accessible contrast */
    margin-top: 0 !important;
    margin-bottom: 1.5rem !important;
    max-width: 680px !important;
  }

  /* Eyebrows / Super-titles: Delicate Celestial Accent */
  .lab-styled-preview[data-style="ethereal"] section > p:first-child,
  .lab-styled-preview[data-style="ethereal"] header > p:first-child,
  .ethereal-styled-container section > p:first-child,
  .ethereal-styled-container header > p:first-child {
    font-family: 'Outfit', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.16em !important;
    text-transform: uppercase !important;
    color: #6366f1 !important; /* Celestial mist indigo */
    margin-bottom: 0.85rem !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
  }

  .lab-styled-preview[data-style="ethereal"] section > p:first-child::before,
  .lab-styled-preview[data-style="ethereal"] header > p:first-child::before,
  .ethereal-styled-container section > p:first-child::before,
  .ethereal-styled-container header > p:first-child::before {
    content: "" !important;
    display: inline-block !important;
    width: 6px !important;
    height: 6px !important;
    border-radius: 50% !important;
    background: #818cf8 !important;
    box-shadow: 0 0 8px rgba(129, 140, 248, 0.6) !important;
  }

  /* 3. Hero Presentation: Luminous, Serene & Spacious */
  .lab-styled-preview[data-style="ethereal"] section:first-of-type,
  .ethereal-styled-container section:first-of-type {
    padding: 3rem 0 4.5rem !important;
    position: relative !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

  .lab-styled-preview[data-style="ethereal"] section:first-of-type p:last-of-type,
  .ethereal-styled-container section:first-of-type p:last-of-type {
    font-size: 1.15rem !important;
    line-height: 1.85 !important;
    color: #4b5563 !important;
    max-width: 720px !important;
    margin-bottom: 2.25rem !important;
  }

  /* 4. Buttons: Weightless & Refined */
  .lab-styled-preview[data-style="ethereal"] button,
  .lab-styled-preview[data-style="ethereal"] input[type="submit"],
  .ethereal-styled-container button,
  .ethereal-styled-container input[type="submit"] {
    font-family: 'Outfit', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.04em !important;
    padding: 0.75rem 1.75rem !important;
    border-radius: 10px !important;
    background: linear-gradient(135deg, #252834 0%, #171922 100%) !important;
    color: #ffffff !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
    box-shadow: 
      0 4px 16px rgba(30, 32, 41, 0.14),
      0 1px 3px rgba(30, 32, 41, 0.08) !important;
    cursor: pointer !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.6rem !important;
    text-decoration: none !important;
    transition: all 260ms cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  .lab-styled-preview[data-style="ethereal"] button:hover,
  .lab-styled-preview[data-style="ethereal"] input[type="submit"]:hover,
  .ethereal-styled-container button:hover,
  .ethereal-styled-container input[type="submit"]:hover {
    transform: translateY(-2px) !important;
    box-shadow: 
      0 8px 24px rgba(30, 32, 41, 0.22),
      0 2px 6px rgba(30, 32, 41, 0.1) !important;
    background: linear-gradient(135deg, #2d3140 0%, #1c1e28 100%) !important;
    color: #ffffff !important;
  }

  .lab-styled-preview[data-style="ethereal"] button:active,
  .lab-styled-preview[data-style="ethereal"] input[type="submit"]:active,
  .ethereal-styled-container button:active,
  .ethereal-styled-container input[type="submit"]:active {
    transform: translateY(0) !important;
    box-shadow: 0 2px 8px rgba(30, 32, 41, 0.12) !important;
  }

  /* Secondary Buttons in Multi-Button Contexts */
  .lab-styled-preview[data-style="ethereal"] button + button,
  .ethereal-styled-container button + button {
    background: rgba(255, 255, 255, 0.8) !important;
    color: #242833 !important;
    border: 1px solid rgba(218, 226, 237, 0.65) !important;
    box-shadow: 0 2px 8px rgba(148, 163, 184, 0.06) !important;
  }

  .lab-styled-preview[data-style="ethereal"] button + button:hover,
  .ethereal-styled-container button + button:hover {
    background: #ffffff !important;
    border-color: rgba(148, 163, 184, 0.8) !important;
    color: #111827 !important;
    box-shadow: 0 4px 16px rgba(148, 163, 184, 0.12) !important;
  }

  /* 5. Surface & Cards: Pearlescent, Softly Elevated (Anti-Cardification) */
  /* Standalone main articles remain OPEN without artificial card boxing */
  .lab-styled-preview[data-style="ethereal"] main > article,
  .ethereal-styled-container main > article {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 2rem 0 !important;
    border-bottom: 1px solid rgba(218, 226, 237, 0.45) !important;
    border-radius: 0 !important;
    backdrop-filter: none !important;
  }

  /* Grid/Module Items: Pearl-like surfaces with delicate luminous edges */
  .lab-styled-preview[data-style="ethereal"] section article,
  .lab-styled-preview[data-style="ethereal"] div article,
  .lab-styled-preview[data-style="ethereal"] .card,
  .ethereal-styled-container section article,
  .ethereal-styled-container div article,
  .ethereal-styled-container .card {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(250, 252, 255, 0.75) 100%) !important;
    border: 1px solid rgba(255, 255, 255, 0.95) !important;
    outline: 1px solid rgba(218, 226, 237, 0.4) !important;
    border-radius: 14px !important;
    padding: 2.25rem !important;
    box-shadow: 
      0 10px 30px rgba(148, 163, 184, 0.07),
      0 1px 3px rgba(148, 163, 184, 0.04) !important;
    backdrop-filter: blur(8px) !important;
    -webkit-backdrop-filter: blur(8px) !important;
    transition: all 260ms cubic-bezier(0.16, 1, 0.3, 1) !important;
    margin-bottom: 1.75rem !important;
  }

  .lab-styled-preview[data-style="ethereal"] section article:hover,
  .lab-styled-preview[data-style="ethereal"] div article:hover,
  .lab-styled-preview[data-style="ethereal"] .card:hover,
  .ethereal-styled-container section article:hover,
  .ethereal-styled-container div article:hover,
  .ethereal-styled-container .card:hover {
    transform: translateY(-3px) !important;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(252, 253, 255, 0.88) 100%) !important;
    outline-color: rgba(199, 210, 254, 0.6) !important;
    box-shadow: 
      0 16px 36px rgba(148, 163, 184, 0.12),
      0 2px 6px rgba(148, 163, 184, 0.06) !important;
  }

  /* Multi-article Grid Flow */
  .lab-styled-preview[data-style="ethereal"] section:has(article + article),
  .ethereal-styled-container section:has(article + article) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
    align-items: stretch !important;
    margin-bottom: 3.5rem !important;
  }

  .lab-styled-preview[data-style="ethereal"] section:has(article + article) > h2,
  .lab-styled-preview[data-style="ethereal"] section:has(article + article) > p:first-child,
  .ethereal-styled-container section:has(article + article) > h2,
  .ethereal-styled-container section:has(article + article) > p:first-child {
    grid-column: 1 / -1 !important;
  }

  /* 6. Dashboard & Metrics: Calm Data Surfaces */
  .lab-styled-preview[data-style="ethereal"] section:has(table),
  .ethereal-styled-container section:has(table) {
    background: rgba(255, 255, 255, 0.75) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255, 255, 255, 0.95) !important;
    outline: 1px solid rgba(218, 226, 237, 0.4) !important;
    border-radius: 14px !important;
    padding: 2rem !important;
    box-shadow: 0 8px 24px rgba(148, 163, 184, 0.06) !important;
    margin-bottom: 3rem !important;
  }

  /* 7. Tables: Delicate Rules & Readable Contrast */
  .lab-styled-preview[data-style="ethereal"] table,
  .ethereal-styled-container table {
    width: 100% !important;
    border-collapse: collapse !important;
    margin: 1.5rem 0 !important;
    font-size: 0.9375rem !important;
  }

  .lab-styled-preview[data-style="ethereal"] th,
  .ethereal-styled-container th {
    font-family: 'Outfit', sans-serif !important;
    font-weight: 500 !important;
    font-size: 0.75rem !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase !important;
    color: #6b7280 !important;
    text-align: left !important;
    padding: 1rem 1.25rem !important;
    border-bottom: 1px solid rgba(218, 226, 237, 0.6) !important;
    background: rgba(248, 250, 252, 0.5) !important;
  }

  .lab-styled-preview[data-style="ethereal"] td,
  .ethereal-styled-container td {
    padding: 1.1rem 1.25rem !important;
    border-bottom: 1px solid rgba(226, 232, 240, 0.5) !important;
    color: #374151 !important;
    font-size: 0.9375rem !important;
    transition: background 160ms ease !important;
  }

  .lab-styled-preview[data-style="ethereal"] tr:hover td,
  .ethereal-styled-container tr:hover td {
    background: rgba(255, 255, 255, 0.65) !important;
  }

  /* 8. Forms: Calm, Pale Pearl Fields & Luminous Focus */
  .lab-styled-preview[data-style="ethereal"] form,
  .ethereal-styled-container form {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.82) 0%, rgba(252, 253, 255, 0.75) 100%) !important;
    border: 1px solid rgba(255, 255, 255, 0.95) !important;
    outline: 1px solid rgba(218, 226, 237, 0.4) !important;
    border-radius: 16px !important;
    padding: 2.75rem !important;
    box-shadow: 0 12px 32px rgba(148, 163, 184, 0.08) !important;
    backdrop-filter: blur(12px) !important;
    max-width: 580px !important;
    margin: 2rem auto !important;
  }

  .lab-styled-preview[data-style="ethereal"] label,
  .ethereal-styled-container label {
    font-family: 'Outfit', sans-serif !important;
    font-size: 0.8125rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.04em !important;
    color: #4b5563 !important;
    margin-bottom: 0.45rem !important;
    display: block !important;
  }

  .lab-styled-preview[data-style="ethereal"] input,
  .lab-styled-preview[data-style="ethereal"] select,
  .lab-styled-preview[data-style="ethereal"] textarea,
  .ethereal-styled-container input,
  .ethereal-styled-container select,
  .ethereal-styled-container textarea {
    width: 100% !important;
    padding: 0.8rem 1.15rem !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 0.9375rem !important;
    color: #1e2029 !important;
    background: rgba(255, 255, 255, 0.88) !important;
    border: 1px solid rgba(203, 213, 225, 0.6) !important;
    border-radius: 9px !important;
    box-shadow: 0 1px 3px rgba(148, 163, 184, 0.04) !important;
    margin-bottom: 1.35rem !important;
    transition: all 200ms ease !important;
    box-sizing: border-box !important;
  }

  .lab-styled-preview[data-style="ethereal"] input:focus,
  .lab-styled-preview[data-style="ethereal"] select:focus,
  .lab-styled-preview[data-style="ethereal"] textarea:focus,
  .ethereal-styled-container input:focus,
  .ethereal-styled-container select:focus,
  .ethereal-styled-container textarea:focus {
    outline: none !important;
    border-color: #818cf8 !important;
    background: #ffffff !important;
    box-shadow: 
      0 0 0 3px rgba(199, 210, 254, 0.45),
      0 2px 8px rgba(129, 140, 248, 0.08) !important;
  }

  /* 9. Quotes & Blockquotes: Weightless Editorial Serenity */
  .lab-styled-preview[data-style="ethereal"] blockquote,
  .ethereal-styled-container blockquote {
    font-family: 'Cormorant Garamond', serif !important;
    font-size: 1.45rem !important;
    font-style: italic !important;
    font-weight: 300 !important;
    line-height: 1.6 !important;
    color: #242833 !important;
    padding: 1rem 0 1rem 2rem !important;
    margin: 2.5rem 0 !important;
    border-left: 2px solid #818cf8 !important;
    background: transparent !important;
  }

  /* 10. Pricing & Tiers: Refined Hierarchy Without Floating Glass */
  .lab-styled-preview[data-style="ethereal"] article:has(strong:contains("$")),
  .lab-styled-preview[data-style="ethereal"] article:has(h3 + p),
  .ethereal-styled-container article:has(strong:contains("$")),
  .ethereal-styled-container article:has(h3 + p) {
    position: relative !important;
  }

  /* 11. Badges & Micro-Labels */
  .lab-styled-preview[data-style="ethereal"] span[class*="badge"],
  .lab-styled-preview[data-style="ethereal"] small,
  .ethereal-styled-container span[class*="badge"],
  .ethereal-styled-container small {
    font-family: 'Outfit', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    padding: 0.25rem 0.65rem !important;
    border-radius: 9999px !important;
    background: rgba(238, 242, 255, 0.75) !important;
    color: #4f46e5 !important;
    border: 1px solid rgba(199, 210, 254, 0.5) !important;
  }

  /* 12. Lists & Items */
  .lab-styled-preview[data-style="ethereal"] ul,
  .lab-styled-preview[data-style="ethereal"] ol,
  .ethereal-styled-container ul,
  .ethereal-styled-container ol {
    padding-left: 1.5rem !important;
    margin: 1.25rem 0 !important;
    color: #374151 !important;
  }

  .lab-styled-preview[data-style="ethereal"] li,
  .ethereal-styled-container li {
    margin-bottom: 0.6rem !important;
    line-height: 1.7 !important;
  }

  /* 13. Horizontal Dividers: Mist-like Fades */
  .lab-styled-preview[data-style="ethereal"] hr,
  .ethereal-styled-container hr {
    border: none !important;
    height: 1px !important;
    background: linear-gradient(to right, transparent, rgba(203, 213, 225, 0.6), transparent) !important;
    margin: 3.5rem 0 !important;
  }

  /* 14. Footer: Atmosphere Gently Fading */
  .lab-styled-preview[data-style="ethereal"] footer,
  .ethereal-styled-container footer {
    margin-top: 5rem !important;
    padding-top: 2.5rem !important;
    border-top: 1px solid rgba(226, 232, 240, 0.6) !important;
    font-size: 0.875rem !important;
    color: #6b7280 !important;
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: space-between !important;
    align-items: center !important;
    gap: 1.5rem !important;
  }

  .lab-styled-preview[data-style="ethereal"] footer a,
  .ethereal-styled-container footer a {
    color: #4b5563 !important;
    text-decoration: none !important;
    transition: color 180ms ease !important;
  }

  .lab-styled-preview[data-style="ethereal"] footer a:hover,
  .ethereal-styled-container footer a:hover {
    color: #1e2029 !important;
  }

  /* ==========================================================================
     RESPONSIVE ADAPTATIONS: Tablet & Mobile
     Zero Overflow, Intact Typography, No Giant Blur Bleed
     ========================================================================== */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="ethereal"],
    .ethereal-styled-container {
      padding: 2rem 1.25rem !important;
    }

    .lab-styled-preview[data-style="ethereal"] nav,
    .ethereal-styled-container nav {
      padding: 0.85rem 1.25rem !important;
      gap: 1rem !important;
      border-radius: 18px !important;
      margin-bottom: 2.5rem !important;
    }

    .lab-styled-preview[data-style="ethereal"] h1,
    .ethereal-styled-container h1 {
      font-size: 2.25rem !important;
      line-height: 1.2 !important;
      margin-bottom: 1rem !important;
    }

    .lab-styled-preview[data-style="ethereal"] h2,
    .ethereal-styled-container h2 {
      font-size: 1.65rem !important;
    }

    .lab-styled-preview[data-style="ethereal"] section article,
    .lab-styled-preview[data-style="ethereal"] div article,
    .lab-styled-preview[data-style="ethereal"] .card,
    .ethereal-styled-container section article,
    .ethereal-styled-container div article,
    .ethereal-styled-container .card {
      padding: 1.5rem !important;
      border-radius: 12px !important;
    }

    .lab-styled-preview[data-style="ethereal"] form,
    .ethereal-styled-container form {
      padding: 1.75rem 1.25rem !important;
      border-radius: 14px !important;
    }

    .lab-styled-preview[data-style="ethereal"] section:has(article + article),
    .ethereal-styled-container section:has(article + article) {
      grid-template-columns: 1fr !important;
      gap: 1.25rem !important;
    }
  }

  @media (max-width: 480px) {
    .lab-styled-preview[data-style="ethereal"] nav,
    .ethereal-styled-container nav {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 0.5rem !important;
    }

    .lab-styled-preview[data-style="ethereal"] button,
    .lab-styled-preview[data-style="ethereal"] input[type="submit"],
    .ethereal-styled-container button,
    .ethereal-styled-container input[type="submit"] {
      width: 100% !important;
    }
  }
`;
