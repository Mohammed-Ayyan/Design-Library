/**
 * Y2K Aesthetic Semantic Stylesheet Rules
 * 
 * Defines the complete visual language for raw semantic HTML when Y2K Aesthetic
 * is applied. Evokes the optimistic, futuristic digital culture of the late 1990s / early 2000s:
 * glossy aqua/gel buttons with specular highlights, cool silver and pearlescent ice surfaces,
 * translucent plastics, futuristic sans typography (Space Grotesk), compact cyber metadata,
 * and bubbly yet controlled geometry—preserving the user's underlying HTML structure
 * with zero DOM mutations.
 */

export const y2kAestheticSemanticCss = `
  /* ==========================================================================
     Y2K AESTHETIC — TURN-OF-THE-MILLENNIUM FUTURISTIC OPTIMISM
     
     Core Philosophy:
     - Optimistic, futuristic consumer digital culture (1999–2003 era)
     - Glossy aqua/gel surfaces with specular top highlights
     - Cool metallic chrome, pearlescent ice, and translucent plastic
     - Bubble-like geometry (controlled 16px–24px & 9999px pills)
     - Electric cyber blue (#0066ff / #0284c7), aqua (#00c8f8), lavender (#8b5cf6), pink (#ff3388)
     - Futuristic typography: Space Grotesk display paired with readable Inter body
     - Compact cyber telemetry metadata (SYS.ONLINE // v2.01, STATUS: OPTIMAL)
     - Tactile physical-digital buttons with specular shine
     - Anti-cardification: open content remains open, tables remain tables
     ========================================================================== */

  /* 0. Canvas Foundation: Pearlescent Ice & Cyber Sheen */
  .lab-styled-preview[data-style="y2k-aesthetic"],
  .y2k-aesthetic-styled-container {
    background-color: #f1f5f9 !important;
    background: radial-gradient(ellipse 80% 50% at 50% -10%, #ffffff 0%, #e2ecf7 60%, #d5e3f2 100%) !important;
    color: #0f172a !important;
    font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    line-height: 1.65 !important;
    position: relative !important;
    border: 1px solid #cbdceb !important;
    border-radius: 16px !important;
    box-shadow: 0 10px 30px rgba(14, 23, 38, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
    letter-spacing: -0.01em !important;
  }

  /* 1. Navigation: Futuristic Hardware / Cyber Browser Deck */
  .lab-styled-preview[data-style="y2k-aesthetic"] nav,
  .y2k-aesthetic-styled-container nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    padding: 0.85rem 1.5rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 246, 253, 0.9) 100%);
    border: 1px solid #b8cee2;
    border-top: 1px solid #ffffff;
    border-bottom: 2px solid #94b8d7;
    border-radius: 9999px;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.08), inset 0 1px 0 #ffffff;
    margin-bottom: 2.75rem;
    position: relative;
    z-index: 10;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] nav a,
  .y2k-aesthetic-styled-container nav a {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #334155;
    text-decoration: none;
    padding: 0.4rem 1rem;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.65);
    border: 1px solid #cbdbe9;
    box-shadow: inset 0 1px 0 #ffffff, 0 1px 2px rgba(15, 23, 42, 0.05);
    transition: all 150ms ease;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] nav a:hover,
  .y2k-aesthetic-styled-container nav a:hover {
    background: linear-gradient(180deg, #38bdf8 0%, #0284c7 100%);
    color: #ffffff;
    border-color: #0284c7;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 3px 8px rgba(2, 132, 199, 0.35);
    transform: translateY(-1px);
    text-decoration: none;
  }

  /* First Link: Cyber Brand Titleplate */
  .lab-styled-preview[data-style="y2k-aesthetic"] nav a:first-child,
  .y2k-aesthetic-styled-container nav a:first-child {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    background: linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: none;
    background-color: transparent;
    box-shadow: none;
    padding: 0.25rem 0.5rem;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] nav a:first-child::after,
  .y2k-aesthetic-styled-container nav a:first-child::after {
    content: " // 2001";
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #0284c7;
    -webkit-text-fill-color: #0284c7;
    margin-left: 0.35rem;
    opacity: 0.85;
  }

  /* 2. Typographic Hierarchy: Futuristic Sans & Compact Cyber Telemetry */
  .lab-styled-preview[data-style="y2k-aesthetic"] h1,
  .y2k-aesthetic-styled-container h1 {
    font-family: 'Space Grotesk', -apple-system, sans-serif !important;
    font-size: clamp(2.25rem, 5.2vw, 3.85rem) !important;
    font-weight: 800 !important;
    line-height: 1.08 !important;
    letter-spacing: -0.03em !important;
    color: #0f172a !important;
    margin-top: 0 !important;
    margin-bottom: 1.25rem !important;
    position: relative !important;
    text-shadow: 0 1px 0 #ffffff !important;
    overflow-wrap: break-word !important;
    word-break: break-word !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] h2,
  .y2k-aesthetic-styled-container h2 {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(1.45rem, 3.2vw, 2.15rem) !important;
    font-weight: 800 !important;
    line-height: 1.18 !important;
    letter-spacing: -0.02em !important;
    color: #0f172a !important;
    margin-top: 2rem !important;
    margin-bottom: 1rem !important;
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] h2::before,
  .y2k-aesthetic-styled-container h2::before {
    content: "//";
    color: #0284c7;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 800;
    font-size: 0.9em;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] h3,
  .y2k-aesthetic-styled-container h3 {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 1.2rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.01em !important;
    color: #0f172a !important;
    margin-top: 0 !important;
    margin-bottom: 0.4rem !important;
  }

  /* Cyber Eyebrows & Digital Metadata */
  .lab-styled-preview[data-style="y2k-aesthetic"] header > p:first-child,
  .lab-styled-preview[data-style="y2k-aesthetic"] section > p:first-child,
  .y2k-aesthetic-styled-container header > p:first-child,
  .y2k-aesthetic-styled-container section > p:first-child {
    font-family: 'JetBrains Mono', monospace !important;
    font-size: 0.6875rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    color: #0284c7 !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
    padding: 0.25rem 0.75rem !important;
    background: linear-gradient(180deg, #ffffff 0%, #e0f2fe 100%) !important;
    border: 1px solid #7dd3fc !important;
    border-radius: 9999px !important;
    box-shadow: inset 0 1px 0 #ffffff, 0 2px 5px rgba(2, 132, 199, 0.12) !important;
    margin-bottom: 0.85rem !important;
    width: fit-content !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] header > p:first-child::before,
  .lab-styled-preview[data-style="y2k-aesthetic"] section > p:first-child::before,
  .y2k-aesthetic-styled-container header > p:first-child::before,
  .y2k-aesthetic-styled-container section > p:first-child::before {
    content: "●";
    color: #06b6d4;
    font-size: 0.65rem;
  }

  /* Body Paragraphs: Clear, high-comfort reading measure */
  .lab-styled-preview[data-style="y2k-aesthetic"] p,
  .y2k-aesthetic-styled-container p {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    font-size: 1.0125rem !important;
    line-height: 1.72 !important;
    color: #334155 !important;
    margin-top: 0 !important;
    margin-bottom: 1.25rem !important;
    max-width: 68ch !important;
  }

  /* 3. The Iconic Y2K Aqua / Gel Bubble Button */
  .lab-styled-preview[data-style="y2k-aesthetic"] button,
  .lab-styled-preview[data-style="y2k-aesthetic"] input[type="submit"],
  .y2k-aesthetic-styled-container button,
  .y2k-aesthetic-styled-container input[type="submit"] {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.875rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.04em !important;
    text-transform: uppercase !important;
    background: linear-gradient(180deg, #38bdf8 0%, #0284c7 48%, #0369a1 52%, #0284c7 100%) !important;
    color: #ffffff !important;
    border: 1px solid #0369a1 !important;
    border-top: 1px solid #7dd3fc !important;
    border-radius: 9999px !important;
    padding: 0.65rem 1.6rem !important;
    cursor: pointer !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(2, 132, 199, 0.35) !important;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
    transition: all 150ms ease !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] button:hover,
  .lab-styled-preview[data-style="y2k-aesthetic"] input[type="submit"]:hover,
  .y2k-aesthetic-styled-container button:hover,
  .y2k-aesthetic-styled-container input[type="submit"]:hover {
    background: linear-gradient(180deg, #60a5fa 0%, #2563eb 48%, #1d4ed8 52%, #2563eb 100%) !important;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.9), inset 0 -2px 4px rgba(0, 0, 0, 0.25), 0 6px 16px rgba(37, 99, 235, 0.45) !important;
    transform: translateY(-1px) !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] button:active,
  .lab-styled-preview[data-style="y2k-aesthetic"] input[type="submit"]:active,
  .y2k-aesthetic-styled-container button:active,
  .y2k-aesthetic-styled-container input[type="submit"]:active {
    transform: translateY(1px) !important;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.4) !important;
  }

  /* Secondary Button: Polished Chrome / Silver Sheen */
  .lab-styled-preview[data-style="y2k-aesthetic"] button + button,
  .y2k-aesthetic-styled-container button + button {
    background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 48%, #cbd5e1 52%, #e2e8f0 100%) !important;
    color: #0f172a !important;
    border: 1px solid #94a3b8 !important;
    border-top: 1px solid #ffffff !important;
    border-bottom: 2px solid #64748b !important;
    box-shadow: inset 0 1px 1px #ffffff, 0 3px 8px rgba(100, 116, 139, 0.2) !important;
    text-shadow: 0 1px 0 #ffffff !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] button + button:hover,
  .y2k-aesthetic-styled-container button + button:hover {
    background: linear-gradient(180deg, #ffffff 0%, #e2e8f0 48%, #94a3b8 52%, #cbd5e1 100%) !important;
    color: #000000 !important;
    box-shadow: inset 0 1px 1px #ffffff, 0 4px 12px rgba(100, 116, 139, 0.3) !important;
  }

  /* 4. Translucent Plastic Panels & Articles (Anti-Cardification) */
  .lab-styled-preview[data-style="y2k-aesthetic"] article,
  .y2k-aesthetic-styled-container article {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(240, 246, 253, 0.85) 100%) !important;
    border: 1px solid #cbdceb !important;
    border-top: 1px solid #ffffff !important;
    border-bottom: 2px solid #b2c9df !important;
    border-radius: 18px !important;
    padding: 1.75rem !important;
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
    margin-bottom: 1.5rem !important;
    position: relative !important;
    transition: all 180ms ease !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] article:hover,
  .y2k-aesthetic-styled-container article:hover {
    border-color: #7dd3fc !important;
    box-shadow: 0 8px 24px rgba(2, 132, 199, 0.12), inset 0 1px 0 #ffffff !important;
    transform: translateY(-2px) !important;
  }

  /* Open layout exception for pure editorial article / dispatch reading */
  .lab-styled-preview[data-style="y2k-aesthetic"] main > article,
  .lab-styled-preview[data-style="y2k-aesthetic"] .dispatch,
  .y2k-aesthetic-styled-container main > article,
  .y2k-aesthetic-styled-container .dispatch {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] main > article:hover,
  .lab-styled-preview[data-style="y2k-aesthetic"] .dispatch:hover,
  .y2k-aesthetic-styled-container main > article:hover,
  .y2k-aesthetic-styled-container .dispatch:hover {
    transform: none !important;
    box-shadow: none !important;
  }

  /* 5. Pullquotes: Iridescent Ice & Aqua Framing */
  .lab-styled-preview[data-style="y2k-aesthetic"] blockquote,
  .y2k-aesthetic-styled-container blockquote {
    background: linear-gradient(135deg, rgba(224, 242, 254, 0.5) 0%, rgba(243, 232, 255, 0.4) 100%) !important;
    border: 1px solid #7dd3fc !important;
    border-left: 5px solid #0284c7 !important;
    border-radius: 0 18px 18px 0 !important;
    padding: 1.5rem 2rem !important;
    margin: 2rem 0 !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 1.25rem !important;
    font-style: normal !important;
    font-weight: 600 !important;
    color: #0f172a !important;
    line-height: 1.6 !important;
    box-shadow: 0 4px 14px rgba(2, 132, 199, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] blockquote::before,
  .y2k-aesthetic-styled-container blockquote::before {
    content: "“";
    font-size: 3.5rem;
    line-height: 1;
    color: #38bdf8;
    position: absolute;
    top: 0.25rem;
    left: 0.65rem;
    opacity: 0.4;
    font-family: serif;
  }

  /* 6. Subscription / Software Package Pricing Tiers */
  .lab-styled-preview[data-style="y2k-aesthetic"] div:has(> article button),
  .y2k-aesthetic-styled-container div:has(> article button) {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 1.75rem !important;
    align-items: stretch !important;
    margin: 2.5rem 0 !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] article:has(button),
  .y2k-aesthetic-styled-container article:has(button) {
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    border-radius: 22px !important;
    background: linear-gradient(180deg, #ffffff 0%, #f0f6fc 100%) !important;
    border: 1px solid #cbdceb !important;
    box-shadow: 0 6px 20px rgba(15, 23, 42, 0.05), inset 0 1px 0 #ffffff !important;
    padding: 2rem !important;
  }

  /* Featured Package Tier: Iridescent Cyan Border & Metallic Specular Glare */
  .lab-styled-preview[data-style="y2k-aesthetic"] article:has(button):nth-child(2),
  .y2k-aesthetic-styled-container article:has(button):nth-child(2) {
    border: 2px solid #0284c7 !important;
    background: linear-gradient(180deg, #ffffff 0%, #e0f2fe 100%) !important;
    box-shadow: 0 10px 28px rgba(2, 132, 199, 0.2), inset 0 1px 0 #ffffff !important;
    transform: scale(1.02) !important;
    position: relative !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] article:has(button):nth-child(2)::before,
  .y2k-aesthetic-styled-container article:has(button):nth-child(2)::before {
    content: "CYBER EDITION // POPULAR";
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #38bdf8 0%, #0284c7 100%);
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6875rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    padding: 0.25rem 0.85rem;
    border-radius: 9999px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 2px 6px rgba(2, 132, 199, 0.35);
    white-space: nowrap;
  }

  /* Pricing Numbers */
  .lab-styled-preview[data-style="y2k-aesthetic"] article:has(button) p:has(+ button),
  .lab-styled-preview[data-style="y2k-aesthetic"] article:has(button) strong,
  .y2k-aesthetic-styled-container article:has(button) p:has(+ button),
  .y2k-aesthetic-styled-container article:has(button) strong {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 2.25rem !important;
    font-weight: 800 !important;
    letter-spacing: -0.03em !important;
    color: #0284c7 !important;
  }

  /* 7. Dashboard & Telemetry: Consumer Technology Gadget UI */
  .lab-styled-preview[data-style="y2k-aesthetic"] section:has(> table),
  .y2k-aesthetic-styled-container section:has(> table) {
    margin: 2.5rem 0 !important;
  }

  /* 8. Tables: Polished Metallic Ledgers */
  .lab-styled-preview[data-style="y2k-aesthetic"] table,
  .y2k-aesthetic-styled-container table {
    width: 100% !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    border: 1px solid #cbdceb !important;
    border-radius: 16px !important;
    overflow: hidden !important;
    background: #ffffff !important;
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04), inset 0 1px 0 #ffffff !important;
    margin: 1.5rem 0 !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] th,
  .y2k-aesthetic-styled-container th {
    background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%) !important;
    color: #1e293b !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    padding: 0.85rem 1.25rem !important;
    border-bottom: 1px solid #cbdceb !important;
    text-align: left !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] td,
  .y2k-aesthetic-styled-container td {
    padding: 0.85rem 1.25rem !important;
    border-bottom: 1px solid #f1f5f9 !important;
    color: #334155 !important;
    font-size: 0.875rem !important;
    font-family: 'Inter', sans-serif !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] tr:last-child td,
  .y2k-aesthetic-styled-container tr:last-child td {
    border-bottom: none !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] tr:hover td,
  .y2k-aesthetic-styled-container tr:hover td {
    background-color: #f0f7ff !important;
  }

  /* 9. Forms: Glossy Inputs & Clear Focus Rings */
  .lab-styled-preview[data-style="y2k-aesthetic"] form,
  .y2k-aesthetic-styled-container form {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.25rem !important;
    background: linear-gradient(180deg, #ffffff 0%, #f1f7fc 100%) !important;
    border: 1px solid #cbdceb !important;
    border-top: 1px solid #ffffff !important;
    border-radius: 20px !important;
    padding: 2.25rem !important;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05), inset 0 1px 0 #ffffff !important;
    max-width: 640px !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] label,
  .y2k-aesthetic-styled-container label {
    display: block !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    color: #475569 !important;
    margin-bottom: 0.4rem !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] input,
  .lab-styled-preview[data-style="y2k-aesthetic"] select,
  .lab-styled-preview[data-style="y2k-aesthetic"] textarea,
  .y2k-aesthetic-styled-container input,
  .y2k-aesthetic-styled-container select,
  .y2k-aesthetic-styled-container textarea {
    background: #ffffff !important;
    border: 1px solid #b8cee2 !important;
    border-radius: 12px !important;
    padding: 0.7rem 1.1rem !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 0.9375rem !important;
    color: #0f172a !important;
    box-shadow: inset 0 1px 3px rgba(15, 23, 42, 0.06) !important;
    transition: all 150ms ease !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] input:focus,
  .lab-styled-preview[data-style="y2k-aesthetic"] select:focus,
  .lab-styled-preview[data-style="y2k-aesthetic"] textarea:focus,
  .y2k-aesthetic-styled-container input:focus,
  .y2k-aesthetic-styled-container select:focus,
  .y2k-aesthetic-styled-container textarea:focus {
    border-color: #0284c7 !important;
    outline: none !important;
    box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.25), inset 0 1px 2px rgba(0, 0, 0, 0.04) !important;
  }

  /* 10. E-Commerce & Restaurant Menu Lists */
  .lab-styled-preview[data-style="y2k-aesthetic"] ul,
  .y2k-aesthetic-styled-container ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin: 1rem 0 !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] li,
  .y2k-aesthetic-styled-container li {
    padding: 0.5rem 0 !important;
    border-bottom: 1px solid #eef3f9 !important;
    color: #334155 !important;
    font-size: 0.9375rem !important;
    display: flex !important;
    align-items: baseline !important;
    gap: 0.5rem !important;
  }

  .lab-styled-preview[data-style="y2k-aesthetic"] li::before,
  .y2k-aesthetic-styled-container li::before {
    content: "◆";
    color: #0284c7;
    font-size: 0.7rem;
  }

  /* 11. Footer: Compact Cyber Colophon */
  .lab-styled-preview[data-style="y2k-aesthetic"] footer,
  .y2k-aesthetic-styled-container footer {
    border-top: 1px solid #cbdceb;
    padding-top: 2rem;
    margin-top: 3.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    color: #64748b;
    font-size: 0.75rem;
    font-family: 'JetBrains Mono', monospace;
  }

  /* Responsive Adjustments & Fluid Word Wrap */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="y2k-aesthetic"] nav,
    .y2k-aesthetic-styled-container nav {
      border-radius: 16px !important;
      padding: 0.75rem 1rem !important;
    }

    .lab-styled-preview[data-style="y2k-aesthetic"] h1,
    .y2k-aesthetic-styled-container h1 {
      font-size: 2.15rem !important;
    }

    .lab-styled-preview[data-style="y2k-aesthetic"] div:has(> article button),
    .y2k-aesthetic-styled-container div:has(> article button) {
      grid-template-columns: 1fr !important;
    }
  }
`;
