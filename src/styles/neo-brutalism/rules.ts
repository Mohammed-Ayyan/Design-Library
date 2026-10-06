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
  .neo-brutalism-styled-container,
  .style-neo-brutalism,
  [data-style="neo-brutalism"],
  .ds-scope[data-style-id="neo-brutalism"],
  .style-neobrutalism,
  [data-style="neobrutalism"],
  .ds-scope[data-style-id="neobrutalism"],
  .style-neo-brutalist,
  [data-style="neo-brutalist"],
  .ds-scope[data-style-id="neo-brutalist"] {
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
  .neo-brutalism-styled-container nav,
  .style-neo-brutalism nav,
  [data-style="neo-brutalism"] nav,
  .ds-scope[data-style-id="neo-brutalism"] nav,
  .style-neobrutalism nav,
  [data-style="neobrutalism"] nav,
  .ds-scope[data-style-id="neobrutalism"] nav,
  .style-neo-brutalist nav,
  [data-style="neo-brutalist"] nav,
  .ds-scope[data-style-id="neo-brutalist"] nav {
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
  .neo-brutalism-styled-container nav a,
  .style-neo-brutalism nav a,
  [data-style="neo-brutalism"] nav a,
  .ds-scope[data-style-id="neo-brutalism"] nav a,
  .style-neobrutalism nav a,
  [data-style="neobrutalism"] nav a,
  .ds-scope[data-style-id="neobrutalism"] nav a,
  .style-neo-brutalist nav a,
  [data-style="neo-brutalist"] nav a,
  .ds-scope[data-style-id="neo-brutalist"] nav a {
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
  .neo-brutalism-styled-container nav a:hover,
  .style-neo-brutalism nav a:hover,
  [data-style="neo-brutalism"] nav a:hover,
  .ds-scope[data-style-id="neo-brutalism"] nav a:hover,
  .style-neobrutalism nav a:hover,
  [data-style="neobrutalism"] nav a:hover,
  .ds-scope[data-style-id="neobrutalism"] nav a:hover,
  .style-neo-brutalist nav a:hover,
  [data-style="neo-brutalist"] nav a:hover,
  .ds-scope[data-style-id="neo-brutalist"] nav a:hover {
    background-color: #ffde59;
    border-color: #121212;
    box-shadow: 2px 2px 0px #121212;
    transform: translate(-1px, -1px);
    text-decoration: none;
  }

  /* First Link acts as Bold Brand Anchor */
  .lab-styled-preview[data-style="neo-brutalism"] nav a:first-child,
  .neo-brutalism-styled-container nav a:first-child,
  .style-neo-brutalism nav a:first-child,
  [data-style="neo-brutalism"] nav a:first-child,
  .ds-scope[data-style-id="neo-brutalism"] nav a:first-child,
  .style-neobrutalism nav a:first-child,
  [data-style="neobrutalism"] nav a:first-child,
  .ds-scope[data-style-id="neobrutalism"] nav a:first-child,
  .style-neo-brutalist nav a:first-child,
  [data-style="neo-brutalist"] nav a:first-child,
  .ds-scope[data-style-id="neo-brutalist"] nav a:first-child {
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
  .neo-brutalism-styled-container nav a:first-child:hover,
  .style-neo-brutalism nav a:first-child:hover,
  [data-style="neo-brutalism"] nav a:first-child:hover,
  .ds-scope[data-style-id="neo-brutalism"] nav a:first-child:hover,
  .style-neobrutalism nav a:first-child:hover,
  [data-style="neobrutalism"] nav a:first-child:hover,
  .ds-scope[data-style-id="neobrutalism"] nav a:first-child:hover,
  .style-neo-brutalist nav a:first-child:hover,
  [data-style="neo-brutalist"] nav a:first-child:hover,
  .ds-scope[data-style-id="neo-brutalist"] nav a:first-child:hover {
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
  .style-neo-brutalism header > p:first-child,
  [data-style="neo-brutalism"] header > p:first-child,
  .ds-scope[data-style-id="neo-brutalism"] header > p:first-child,
  .style-neobrutalism header > p:first-child,
  [data-style="neobrutalism"] header > p:first-child,
  .ds-scope[data-style-id="neobrutalism"] header > p:first-child,
  .style-neo-brutalist header > p:first-child,
  [data-style="neo-brutalist"] header > p:first-child,
  .ds-scope[data-style-id="neo-brutalist"] header > p:first-child,
  .neo-brutalism-styled-container section > p:first-child:not(:last-child),
  .style-neo-brutalism section > p:first-child:not(:last-child),
  [data-style="neo-brutalism"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="neo-brutalism"] section > p:first-child:not(:last-child),
  .style-neobrutalism section > p:first-child:not(:last-child),
  [data-style="neobrutalism"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="neobrutalism"] section > p:first-child:not(:last-child),
  .style-neo-brutalist section > p:first-child:not(:last-child),
  [data-style="neo-brutalist"] section > p:first-child:not(:last-child),
  .ds-scope[data-style-id="neo-brutalist"] section > p:first-child:not(:last-child),
  .neo-brutalism-styled-container article > p:first-child:not(:last-child),
  .style-neo-brutalism article > p:first-child:not(:last-child),
  [data-style="neo-brutalism"] article > p:first-child:not(:last-child),
  .ds-scope[data-style-id="neo-brutalism"] article > p:first-child:not(:last-child),
  .style-neobrutalism article > p:first-child:not(:last-child),
  [data-style="neobrutalism"] article > p:first-child:not(:last-child),
  .ds-scope[data-style-id="neobrutalism"] article > p:first-child:not(:last-child),
  .style-neo-brutalist article > p:first-child:not(:last-child),
  [data-style="neo-brutalist"] article > p:first-child:not(:last-child),
  .ds-scope[data-style-id="neo-brutalist"] article > p:first-child:not(:last-child) {
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
  .neo-brutalism-styled-container h1,
  .style-neo-brutalism h1,
  [data-style="neo-brutalism"] h1,
  .ds-scope[data-style-id="neo-brutalism"] h1,
  .style-neobrutalism h1,
  [data-style="neobrutalism"] h1,
  .ds-scope[data-style-id="neobrutalism"] h1,
  .style-neo-brutalist h1,
  [data-style="neo-brutalist"] h1,
  .ds-scope[data-style-id="neo-brutalist"] h1 {
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
  .neo-brutalism-styled-container h2,
  .style-neo-brutalism h2,
  [data-style="neo-brutalism"] h2,
  .ds-scope[data-style-id="neo-brutalism"] h2,
  .style-neobrutalism h2,
  [data-style="neobrutalism"] h2,
  .ds-scope[data-style-id="neobrutalism"] h2,
  .style-neo-brutalist h2,
  [data-style="neo-brutalist"] h2,
  .ds-scope[data-style-id="neo-brutalist"] h2 {
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
  .neo-brutalism-styled-container h2::after,
  .style-neo-brutalism h2::after,
  [data-style="neo-brutalism"] h2::after,
  .ds-scope[data-style-id="neo-brutalism"] h2::after,
  .style-neobrutalism h2::after,
  [data-style="neobrutalism"] h2::after,
  .ds-scope[data-style-id="neobrutalism"] h2::after,
  .style-neo-brutalist h2::after,
  [data-style="neo-brutalist"] h2::after,
  .ds-scope[data-style-id="neo-brutalist"] h2::after {
    content: '■';
    font-size: 0.875rem;
    color: #ff5a5f;
  }

  .lab-styled-preview[data-style="neo-brutalism"] h3,
  .neo-brutalism-styled-container h3,
  .style-neo-brutalism h3,
  [data-style="neo-brutalism"] h3,
  .ds-scope[data-style-id="neo-brutalism"] h3,
  .style-neobrutalism h3,
  [data-style="neobrutalism"] h3,
  .ds-scope[data-style-id="neobrutalism"] h3,
  .style-neo-brutalist h3,
  [data-style="neo-brutalist"] h3,
  .ds-scope[data-style-id="neo-brutalist"] h3 {
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
  .neo-brutalism-styled-container h4,
  .style-neo-brutalism h4,
  [data-style="neo-brutalism"] h4,
  .ds-scope[data-style-id="neo-brutalism"] h4,
  .style-neobrutalism h4,
  [data-style="neobrutalism"] h4,
  .ds-scope[data-style-id="neobrutalism"] h4,
  .style-neo-brutalist h4,
  [data-style="neo-brutalist"] h4,
  .ds-scope[data-style-id="neo-brutalist"] h4 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: #121212;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  /* 4. Readable Body Copy: High Legibility on Warm Foundation */
  .lab-styled-preview[data-style="neo-brutalism"] p,
  .neo-brutalism-styled-container p,
  .style-neo-brutalism p,
  [data-style="neo-brutalism"] p,
  .ds-scope[data-style-id="neo-brutalism"] p,
  .style-neobrutalism p,
  [data-style="neobrutalism"] p,
  .ds-scope[data-style-id="neobrutalism"] p,
  .style-neo-brutalist p,
  [data-style="neo-brutalist"] p,
  .ds-scope[data-style-id="neo-brutalist"] p {
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
  .style-neo-brutalism button,
  [data-style="neo-brutalism"] button,
  .ds-scope[data-style-id="neo-brutalism"] button,
  .style-neobrutalism button,
  [data-style="neobrutalism"] button,
  .ds-scope[data-style-id="neobrutalism"] button,
  .style-neo-brutalist button,
  [data-style="neo-brutalist"] button,
  .ds-scope[data-style-id="neo-brutalist"] button,
  .neo-brutalism-styled-container input[type="submit"],
  .style-neo-brutalism input[type="submit"],
  [data-style="neo-brutalism"] input[type="submit"],
  .ds-scope[data-style-id="neo-brutalism"] input[type="submit"],
  .style-neobrutalism input[type="submit"],
  [data-style="neobrutalism"] input[type="submit"],
  .ds-scope[data-style-id="neobrutalism"] input[type="submit"],
  .style-neo-brutalist input[type="submit"],
  [data-style="neo-brutalist"] input[type="submit"],
  .ds-scope[data-style-id="neo-brutalist"] input[type="submit"] {
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
  .style-neo-brutalism button:hover,
  [data-style="neo-brutalism"] button:hover,
  .ds-scope[data-style-id="neo-brutalism"] button:hover,
  .style-neobrutalism button:hover,
  [data-style="neobrutalism"] button:hover,
  .ds-scope[data-style-id="neobrutalism"] button:hover,
  .style-neo-brutalist button:hover,
  [data-style="neo-brutalist"] button:hover,
  .ds-scope[data-style-id="neo-brutalist"] button:hover,
  .neo-brutalism-styled-container input[type="submit"]:hover,
  .style-neo-brutalism input[type="submit"]:hover,
  [data-style="neo-brutalism"] input[type="submit"]:hover,
  .ds-scope[data-style-id="neo-brutalism"] input[type="submit"]:hover,
  .style-neobrutalism input[type="submit"]:hover,
  [data-style="neobrutalism"] input[type="submit"]:hover,
  .ds-scope[data-style-id="neobrutalism"] input[type="submit"]:hover,
  .style-neo-brutalist input[type="submit"]:hover,
  [data-style="neo-brutalist"] input[type="submit"]:hover,
  .ds-scope[data-style-id="neo-brutalist"] input[type="submit"]:hover {
    background-color: #ff4338;
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #121212;
  }

  .lab-styled-preview[data-style="neo-brutalism"] button:active,
  .lab-styled-preview[data-style="neo-brutalism"] input[type="submit"]:active,
  .neo-brutalism-styled-container button:active,
  .style-neo-brutalism button:active,
  [data-style="neo-brutalism"] button:active,
  .ds-scope[data-style-id="neo-brutalism"] button:active,
  .style-neobrutalism button:active,
  [data-style="neobrutalism"] button:active,
  .ds-scope[data-style-id="neobrutalism"] button:active,
  .style-neo-brutalist button:active,
  [data-style="neo-brutalist"] button:active,
  .ds-scope[data-style-id="neo-brutalist"] button:active,
  .neo-brutalism-styled-container input[type="submit"]:active,
  .style-neo-brutalism input[type="submit"]:active,
  [data-style="neo-brutalism"] input[type="submit"]:active,
  .ds-scope[data-style-id="neo-brutalism"] input[type="submit"]:active,
  .style-neobrutalism input[type="submit"]:active,
  [data-style="neobrutalism"] input[type="submit"]:active,
  .ds-scope[data-style-id="neobrutalism"] input[type="submit"]:active,
  .style-neo-brutalist input[type="submit"]:active,
  [data-style="neo-brutalist"] input[type="submit"]:active,
  .ds-scope[data-style-id="neo-brutalist"] input[type="submit"]:active {
    transform: translate(4px, 4px);
    box-shadow: 0px 0px 0px #121212;
  }

  /* Secondary Button: Crisp White Surface with Hard Offset Shadow */
  .lab-styled-preview[data-style="neo-brutalism"] button + button,
  .neo-brutalism-styled-container button + button,
  .style-neo-brutalism button + button,
  [data-style="neo-brutalism"] button + button,
  .ds-scope[data-style-id="neo-brutalism"] button + button,
  .style-neobrutalism button + button,
  [data-style="neobrutalism"] button + button,
  .ds-scope[data-style-id="neobrutalism"] button + button,
  .style-neo-brutalist button + button,
  [data-style="neo-brutalist"] button + button,
  .ds-scope[data-style-id="neo-brutalist"] button + button {
    background-color: #ffffff;
    color: #121212;
    margin-left: 0.85rem;
  }

  .lab-styled-preview[data-style="neo-brutalism"] button + button:hover,
  .neo-brutalism-styled-container button + button:hover,
  .style-neo-brutalism button + button:hover,
  [data-style="neo-brutalism"] button + button:hover,
  .ds-scope[data-style-id="neo-brutalism"] button + button:hover,
  .style-neobrutalism button + button:hover,
  [data-style="neobrutalism"] button + button:hover,
  .ds-scope[data-style-id="neobrutalism"] button + button:hover,
  .style-neo-brutalist button + button:hover,
  [data-style="neo-brutalist"] button + button:hover,
  .ds-scope[data-style-id="neo-brutalist"] button + button:hover {
    background-color: #ffde59;
    color: #121212;
  }

  /* 6. Articles & Content: Open Editorial Rows vs Selective Cards (No Card-Everything) */
  .lab-styled-preview[data-style="neo-brutalism"] section > article,
  .neo-brutalism-styled-container section > article,
  .style-neo-brutalism section > article,
  [data-style="neo-brutalism"] section > article,
  .ds-scope[data-style-id="neo-brutalism"] section > article,
  .style-neobrutalism section > article,
  [data-style="neobrutalism"] section > article,
  .ds-scope[data-style-id="neobrutalism"] section > article,
  .style-neo-brutalist section > article,
  [data-style="neo-brutalist"] section > article,
  .ds-scope[data-style-id="neo-brutalist"] section > article {
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }

  /* Standard Editorial / Portfolio Lists: Open Rows with Graphic Index Pills */
  .lab-styled-preview[data-style="neo-brutalism"] section > article:nth-child(3n+1),
  .neo-brutalism-styled-container section > article:nth-child(3n+1),
  .style-neo-brutalism section > article:nth-child(3n+1),
  [data-style="neo-brutalism"] section > article:nth-child(3n+1),
  .ds-scope[data-style-id="neo-brutalism"] section > article:nth-child(3n+1),
  .style-neobrutalism section > article:nth-child(3n+1),
  [data-style="neobrutalism"] section > article:nth-child(3n+1),
  .ds-scope[data-style-id="neobrutalism"] section > article:nth-child(3n+1),
  .style-neo-brutalist section > article:nth-child(3n+1),
  [data-style="neo-brutalist"] section > article:nth-child(3n+1),
  .ds-scope[data-style-id="neo-brutalist"] section > article:nth-child(3n+1) {
    background: transparent;
    border: none;
    border-bottom: 2px solid #121212;
    padding: 1.5rem 0 2rem;
    border-radius: 0;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > article:nth-child(3n+1)::before,
  .neo-brutalism-styled-container section > article:nth-child(3n+1)::before,
  .style-neo-brutalism section > article:nth-child(3n+1)::before,
  [data-style="neo-brutalism"] section > article:nth-child(3n+1)::before,
  .ds-scope[data-style-id="neo-brutalism"] section > article:nth-child(3n+1)::before,
  .style-neobrutalism section > article:nth-child(3n+1)::before,
  [data-style="neobrutalism"] section > article:nth-child(3n+1)::before,
  .ds-scope[data-style-id="neobrutalism"] section > article:nth-child(3n+1)::before,
  .style-neo-brutalist section > article:nth-child(3n+1)::before,
  [data-style="neo-brutalist"] section > article:nth-child(3n+1)::before,
  .ds-scope[data-style-id="neo-brutalist"] section > article:nth-child(3n+1)::before {
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
  .neo-brutalism-styled-container section > article:nth-child(3n+2),
  .style-neo-brutalism section > article:nth-child(3n+2),
  [data-style="neo-brutalism"] section > article:nth-child(3n+2),
  .ds-scope[data-style-id="neo-brutalism"] section > article:nth-child(3n+2),
  .style-neobrutalism section > article:nth-child(3n+2),
  [data-style="neobrutalism"] section > article:nth-child(3n+2),
  .ds-scope[data-style-id="neobrutalism"] section > article:nth-child(3n+2),
  .style-neo-brutalist section > article:nth-child(3n+2),
  [data-style="neo-brutalist"] section > article:nth-child(3n+2),
  .ds-scope[data-style-id="neo-brutalist"] section > article:nth-child(3n+2) {
    background: transparent;
    border: none;
    border-bottom: 2px solid #121212;
    padding: 1.5rem 0 2rem;
    border-radius: 0;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > article:nth-child(3n+2)::before,
  .neo-brutalism-styled-container section > article:nth-child(3n+2)::before,
  .style-neo-brutalism section > article:nth-child(3n+2)::before,
  [data-style="neo-brutalism"] section > article:nth-child(3n+2)::before,
  .ds-scope[data-style-id="neo-brutalism"] section > article:nth-child(3n+2)::before,
  .style-neobrutalism section > article:nth-child(3n+2)::before,
  [data-style="neobrutalism"] section > article:nth-child(3n+2)::before,
  .ds-scope[data-style-id="neobrutalism"] section > article:nth-child(3n+2)::before,
  .style-neo-brutalist section > article:nth-child(3n+2)::before,
  [data-style="neo-brutalist"] section > article:nth-child(3n+2)::before,
  .ds-scope[data-style-id="neo-brutalist"] section > article:nth-child(3n+2)::before {
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
  .neo-brutalism-styled-container section > article:nth-child(3n+3),
  .style-neo-brutalism section > article:nth-child(3n+3),
  [data-style="neo-brutalism"] section > article:nth-child(3n+3),
  .ds-scope[data-style-id="neo-brutalism"] section > article:nth-child(3n+3),
  .style-neobrutalism section > article:nth-child(3n+3),
  [data-style="neobrutalism"] section > article:nth-child(3n+3),
  .ds-scope[data-style-id="neobrutalism"] section > article:nth-child(3n+3),
  .style-neo-brutalist section > article:nth-child(3n+3),
  [data-style="neo-brutalist"] section > article:nth-child(3n+3),
  .ds-scope[data-style-id="neo-brutalist"] section > article:nth-child(3n+3) {
    background: transparent;
    border: none;
    border-bottom: 2px solid #121212;
    padding: 1.5rem 0 2rem;
    border-radius: 0;
    box-shadow: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] section > article:nth-child(3n+3)::before,
  .neo-brutalism-styled-container section > article:nth-child(3n+3)::before,
  .style-neo-brutalism section > article:nth-child(3n+3)::before,
  [data-style="neo-brutalism"] section > article:nth-child(3n+3)::before,
  .ds-scope[data-style-id="neo-brutalism"] section > article:nth-child(3n+3)::before,
  .style-neobrutalism section > article:nth-child(3n+3)::before,
  [data-style="neobrutalism"] section > article:nth-child(3n+3)::before,
  .ds-scope[data-style-id="neobrutalism"] section > article:nth-child(3n+3)::before,
  .style-neo-brutalist section > article:nth-child(3n+3)::before,
  [data-style="neo-brutalist"] section > article:nth-child(3n+3)::before,
  .ds-scope[data-style-id="neo-brutalist"] section > article:nth-child(3n+3)::before {
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
  .neo-brutalism-styled-container section > div > article,
  .style-neo-brutalism section > div > article,
  [data-style="neo-brutalism"] section > div > article,
  .ds-scope[data-style-id="neo-brutalism"] section > div > article,
  .style-neobrutalism section > div > article,
  [data-style="neobrutalism"] section > div > article,
  .ds-scope[data-style-id="neobrutalism"] section > div > article,
  .style-neo-brutalist section > div > article,
  [data-style="neo-brutalist"] section > div > article,
  .ds-scope[data-style-id="neo-brutalist"] section > div > article {
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
  .neo-brutalism-styled-container section > div > article strong,
  .style-neo-brutalism section > div > article strong,
  [data-style="neo-brutalism"] section > div > article strong,
  .ds-scope[data-style-id="neo-brutalism"] section > div > article strong,
  .style-neobrutalism section > div > article strong,
  [data-style="neobrutalism"] section > div > article strong,
  .ds-scope[data-style-id="neobrutalism"] section > div > article strong,
  .style-neo-brutalist section > div > article strong,
  [data-style="neo-brutalist"] section > div > article strong,
  .ds-scope[data-style-id="neo-brutalist"] section > div > article strong {
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
  .neo-brutalism-styled-container section > div > article:nth-child(2),
  .style-neo-brutalism section > div > article:nth-child(2),
  [data-style="neo-brutalism"] section > div > article:nth-child(2),
  .ds-scope[data-style-id="neo-brutalism"] section > div > article:nth-child(2),
  .style-neobrutalism section > div > article:nth-child(2),
  [data-style="neobrutalism"] section > div > article:nth-child(2),
  .ds-scope[data-style-id="neobrutalism"] section > div > article:nth-child(2),
  .style-neo-brutalist section > div > article:nth-child(2),
  [data-style="neo-brutalist"] section > div > article:nth-child(2),
  .ds-scope[data-style-id="neo-brutalist"] section > div > article:nth-child(2) {
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
  .neo-brutalism-styled-container blockquote,
  .style-neo-brutalism blockquote,
  [data-style="neo-brutalism"] blockquote,
  .ds-scope[data-style-id="neo-brutalism"] blockquote,
  .style-neobrutalism blockquote,
  [data-style="neobrutalism"] blockquote,
  .ds-scope[data-style-id="neobrutalism"] blockquote,
  .style-neo-brutalist blockquote,
  [data-style="neo-brutalist"] blockquote,
  .ds-scope[data-style-id="neo-brutalist"] blockquote {
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
  .neo-brutalism-styled-container table,
  .style-neo-brutalism table,
  [data-style="neo-brutalism"] table,
  .ds-scope[data-style-id="neo-brutalism"] table,
  .style-neobrutalism table,
  [data-style="neobrutalism"] table,
  .ds-scope[data-style-id="neobrutalism"] table,
  .style-neo-brutalist table,
  [data-style="neo-brutalist"] table,
  .ds-scope[data-style-id="neo-brutalist"] table {
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
  .neo-brutalism-styled-container thead,
  .style-neo-brutalism thead,
  [data-style="neo-brutalism"] thead,
  .ds-scope[data-style-id="neo-brutalism"] thead,
  .style-neobrutalism thead,
  [data-style="neobrutalism"] thead,
  .ds-scope[data-style-id="neobrutalism"] thead,
  .style-neo-brutalist thead,
  [data-style="neo-brutalist"] thead,
  .ds-scope[data-style-id="neo-brutalist"] thead {
    background-color: #ffde59;
    border-bottom: 2px solid #121212;
  }

  .lab-styled-preview[data-style="neo-brutalism"] th,
  .neo-brutalism-styled-container th,
  .style-neo-brutalism th,
  [data-style="neo-brutalism"] th,
  .ds-scope[data-style-id="neo-brutalism"] th,
  .style-neobrutalism th,
  [data-style="neobrutalism"] th,
  .ds-scope[data-style-id="neobrutalism"] th,
  .style-neo-brutalist th,
  [data-style="neo-brutalist"] th,
  .ds-scope[data-style-id="neo-brutalist"] th {
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
  .neo-brutalism-styled-container th:last-child,
  .style-neo-brutalism th:last-child,
  [data-style="neo-brutalism"] th:last-child,
  .ds-scope[data-style-id="neo-brutalism"] th:last-child,
  .style-neobrutalism th:last-child,
  [data-style="neobrutalism"] th:last-child,
  .ds-scope[data-style-id="neobrutalism"] th:last-child,
  .style-neo-brutalist th:last-child,
  [data-style="neo-brutalist"] th:last-child,
  .ds-scope[data-style-id="neo-brutalist"] th:last-child {
    border-right: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] td,
  .neo-brutalism-styled-container td,
  .style-neo-brutalism td,
  [data-style="neo-brutalism"] td,
  .ds-scope[data-style-id="neo-brutalism"] td,
  .style-neobrutalism td,
  [data-style="neobrutalism"] td,
  .ds-scope[data-style-id="neobrutalism"] td,
  .style-neo-brutalist td,
  [data-style="neo-brutalist"] td,
  .ds-scope[data-style-id="neo-brutalist"] td {
    padding: 1.15rem 1.25rem;
    border-bottom: 2px solid #121212;
    border-right: 2px solid #121212;
    color: #121212;
    font-weight: 600;
    font-size: 0.9375rem;
  }

  .lab-styled-preview[data-style="neo-brutalism"] td:last-child,
  .neo-brutalism-styled-container td:last-child,
  .style-neo-brutalism td:last-child,
  [data-style="neo-brutalism"] td:last-child,
  .ds-scope[data-style-id="neo-brutalism"] td:last-child,
  .style-neobrutalism td:last-child,
  [data-style="neobrutalism"] td:last-child,
  .ds-scope[data-style-id="neobrutalism"] td:last-child,
  .style-neo-brutalist td:last-child,
  [data-style="neo-brutalist"] td:last-child,
  .ds-scope[data-style-id="neo-brutalist"] td:last-child {
    border-right: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] tr:last-child td,
  .neo-brutalism-styled-container tr:last-child td,
  .style-neo-brutalism tr:last-child td,
  [data-style="neo-brutalism"] tr:last-child td,
  .ds-scope[data-style-id="neo-brutalism"] tr:last-child td,
  .style-neobrutalism tr:last-child td,
  [data-style="neobrutalism"] tr:last-child td,
  .ds-scope[data-style-id="neobrutalism"] tr:last-child td,
  .style-neo-brutalist tr:last-child td,
  [data-style="neo-brutalist"] tr:last-child td,
  .ds-scope[data-style-id="neo-brutalist"] tr:last-child td {
    border-bottom: none;
  }

  .lab-styled-preview[data-style="neo-brutalism"] tr:hover td,
  .neo-brutalism-styled-container tr:hover td,
  .style-neo-brutalism tr:hover td,
  [data-style="neo-brutalism"] tr:hover td,
  .ds-scope[data-style-id="neo-brutalism"] tr:hover td,
  .style-neobrutalism tr:hover td,
  [data-style="neobrutalism"] tr:hover td,
  .ds-scope[data-style-id="neobrutalism"] tr:hover td,
  .style-neo-brutalist tr:hover td,
  [data-style="neo-brutalist"] tr:hover td,
  .ds-scope[data-style-id="neo-brutalist"] tr:hover td {
    background-color: #fff9e6;
  }

  /* 10. Form Controls: Tactile White Fields with 3px Hard Shadow */
  .lab-styled-preview[data-style="neo-brutalism"] form,
  .neo-brutalism-styled-container form,
  .style-neo-brutalism form,
  [data-style="neo-brutalism"] form,
  .ds-scope[data-style-id="neo-brutalism"] form,
  .style-neobrutalism form,
  [data-style="neobrutalism"] form,
  .ds-scope[data-style-id="neobrutalism"] form,
  .style-neo-brutalist form,
  [data-style="neo-brutalist"] form,
  .ds-scope[data-style-id="neo-brutalist"] form {
    max-width: 600px;
    margin: 2rem 0;
    position: relative;
    z-index: 1;
  }

  .lab-styled-preview[data-style="neo-brutalism"] label,
  .neo-brutalism-styled-container label,
  .style-neo-brutalism label,
  [data-style="neo-brutalism"] label,
  .ds-scope[data-style-id="neo-brutalism"] label,
  .style-neobrutalism label,
  [data-style="neobrutalism"] label,
  .ds-scope[data-style-id="neobrutalism"] label,
  .style-neo-brutalist label,
  [data-style="neo-brutalist"] label,
  .ds-scope[data-style-id="neo-brutalist"] label {
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
  .style-neo-brutalism input[type="text"],
  [data-style="neo-brutalism"] input[type="text"],
  .ds-scope[data-style-id="neo-brutalism"] input[type="text"],
  .style-neobrutalism input[type="text"],
  [data-style="neobrutalism"] input[type="text"],
  .ds-scope[data-style-id="neobrutalism"] input[type="text"],
  .style-neo-brutalist input[type="text"],
  [data-style="neo-brutalist"] input[type="text"],
  .ds-scope[data-style-id="neo-brutalist"] input[type="text"],
  .neo-brutalism-styled-container input[type="email"],
  .style-neo-brutalism input[type="email"],
  [data-style="neo-brutalism"] input[type="email"],
  .ds-scope[data-style-id="neo-brutalism"] input[type="email"],
  .style-neobrutalism input[type="email"],
  [data-style="neobrutalism"] input[type="email"],
  .ds-scope[data-style-id="neobrutalism"] input[type="email"],
  .style-neo-brutalist input[type="email"],
  [data-style="neo-brutalist"] input[type="email"],
  .ds-scope[data-style-id="neo-brutalist"] input[type="email"],
  .neo-brutalism-styled-container input[type="password"],
  .style-neo-brutalism input[type="password"],
  [data-style="neo-brutalism"] input[type="password"],
  .ds-scope[data-style-id="neo-brutalism"] input[type="password"],
  .style-neobrutalism input[type="password"],
  [data-style="neobrutalism"] input[type="password"],
  .ds-scope[data-style-id="neobrutalism"] input[type="password"],
  .style-neo-brutalist input[type="password"],
  [data-style="neo-brutalist"] input[type="password"],
  .ds-scope[data-style-id="neo-brutalist"] input[type="password"],
  .neo-brutalism-styled-container textarea,
  .style-neo-brutalism textarea,
  [data-style="neo-brutalism"] textarea,
  .ds-scope[data-style-id="neo-brutalism"] textarea,
  .style-neobrutalism textarea,
  [data-style="neobrutalism"] textarea,
  .ds-scope[data-style-id="neobrutalism"] textarea,
  .style-neo-brutalist textarea,
  [data-style="neo-brutalist"] textarea,
  .ds-scope[data-style-id="neo-brutalist"] textarea,
  .neo-brutalism-styled-container select,
  .style-neo-brutalism select,
  [data-style="neo-brutalism"] select,
  .ds-scope[data-style-id="neo-brutalism"] select,
  .style-neobrutalism select,
  [data-style="neobrutalism"] select,
  .ds-scope[data-style-id="neobrutalism"] select,
  .style-neo-brutalist select,
  [data-style="neo-brutalist"] select,
  .ds-scope[data-style-id="neo-brutalist"] select {
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
  .style-neo-brutalism input:focus,
  [data-style="neo-brutalism"] input:focus,
  .ds-scope[data-style-id="neo-brutalism"] input:focus,
  .style-neobrutalism input:focus,
  [data-style="neobrutalism"] input:focus,
  .ds-scope[data-style-id="neobrutalism"] input:focus,
  .style-neo-brutalist input:focus,
  [data-style="neo-brutalist"] input:focus,
  .ds-scope[data-style-id="neo-brutalist"] input:focus,
  .neo-brutalism-styled-container textarea:focus,
  .style-neo-brutalism textarea:focus,
  [data-style="neo-brutalism"] textarea:focus,
  .ds-scope[data-style-id="neo-brutalism"] textarea:focus,
  .style-neobrutalism textarea:focus,
  [data-style="neobrutalism"] textarea:focus,
  .ds-scope[data-style-id="neobrutalism"] textarea:focus,
  .style-neo-brutalist textarea:focus,
  [data-style="neo-brutalist"] textarea:focus,
  .ds-scope[data-style-id="neo-brutalist"] textarea:focus,
  .neo-brutalism-styled-container select:focus,
  .style-neo-brutalism select:focus,
  [data-style="neo-brutalism"] select:focus,
  .ds-scope[data-style-id="neo-brutalism"] select:focus,
  .style-neobrutalism select:focus,
  [data-style="neobrutalism"] select:focus,
  .ds-scope[data-style-id="neobrutalism"] select:focus,
  .style-neo-brutalist select:focus,
  [data-style="neo-brutalist"] select:focus,
  .ds-scope[data-style-id="neo-brutalist"] select:focus {
    outline: none;
    background-color: #ffffff;
    border-color: #121212;
    box-shadow: 4px 4px 0px #ff5a5f;
    transform: translate(-1px, -1px);
  }

  /* 11. Graphic Images: 2px Dark Border + 4px Shadow */
  .lab-styled-preview[data-style="neo-brutalism"] img,
  .neo-brutalism-styled-container img,
  .style-neo-brutalism img,
  [data-style="neo-brutalism"] img,
  .ds-scope[data-style-id="neo-brutalism"] img,
  .style-neobrutalism img,
  [data-style="neobrutalism"] img,
  .ds-scope[data-style-id="neobrutalism"] img,
  .style-neo-brutalist img,
  [data-style="neo-brutalist"] img,
  .ds-scope[data-style-id="neo-brutalist"] img {
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
  .neo-brutalism-styled-container footer,
  .style-neo-brutalism footer,
  [data-style="neo-brutalism"] footer,
  .ds-scope[data-style-id="neo-brutalism"] footer,
  .style-neobrutalism footer,
  [data-style="neobrutalism"] footer,
  .ds-scope[data-style-id="neobrutalism"] footer,
  .style-neo-brutalist footer,
  [data-style="neo-brutalist"] footer,
  .ds-scope[data-style-id="neo-brutalist"] footer {
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
  .neo-brutalism-styled-container footer p,
  .style-neo-brutalism footer p,
  [data-style="neo-brutalism"] footer p,
  .ds-scope[data-style-id="neo-brutalism"] footer p,
  .style-neobrutalism footer p,
  [data-style="neobrutalism"] footer p,
  .ds-scope[data-style-id="neobrutalism"] footer p,
  .style-neo-brutalist footer p,
  [data-style="neo-brutalist"] footer p,
  .ds-scope[data-style-id="neo-brutalist"] footer p {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: #6b7280;
    margin: 0;
  }

  /* 13. Responsive Scaling & Mobile Safety */
  @media (max-width: 768px) {
    .lab-styled-preview[data-style="neo-brutalism"] h1,
    .neo-brutalism-styled-container h1,
    .style-neo-brutalism h1,
    [data-style="neo-brutalism"] h1,
    .ds-scope[data-style-id="neo-brutalism"] h1,
    .style-neobrutalism h1,
    [data-style="neobrutalism"] h1,
    .ds-scope[data-style-id="neobrutalism"] h1,
    .style-neo-brutalist h1,
    [data-style="neo-brutalist"] h1,
    .ds-scope[data-style-id="neo-brutalist"] h1 {
      font-size: clamp(2rem, 8vw, 3rem);
    }
    .lab-styled-preview[data-style="neo-brutalism"] button,
    .neo-brutalism-styled-container button,
    .style-neo-brutalism button,
    [data-style="neo-brutalism"] button,
    .ds-scope[data-style-id="neo-brutalism"] button,
    .style-neobrutalism button,
    [data-style="neobrutalism"] button,
    .ds-scope[data-style-id="neobrutalism"] button,
    .style-neo-brutalist button,
    [data-style="neo-brutalist"] button,
    .ds-scope[data-style-id="neo-brutalist"] button {
      width: 100%;
      margin-left: 0 !important;
      margin-bottom: 0.75rem;
    }
  }
`;
