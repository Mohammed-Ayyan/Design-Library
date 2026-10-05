# Design Style Library

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://react.dev/)
[![Tests](https://img.shields.io/badge/Tests-274%20passed-success.svg)](https://vitest.dev/)

> **A developer-first design language engine that lets you apply complete, authentic visual design systems to existing HTML, React components, sections, and full pages.**

---

## What is this?

Most component libraries force you to rewrite your markup to fit their opinionated DOM structure. **Design Style Library** turns that paradigm upside down:

### **STRUCTURE ≠ STYLE**

You keep your existing semantic HTML and component hierarchy. The **Adaptive Style Engine** inspects the structure, classifies semantic roles, and projects complete design languages over it without breaking semantics, layouts, or responsiveness.

```
                      [ Plain Semantic HTML ]
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     ▼                           ▼                           ▼
[ Brutalism ]            [ Glassmorphism ]             [ Cyberpunk ]
• Raw 3px borders        • Frosted glass 20px blur     • Neon laser cyan & magenta
• 0px sharp corners      • Delicate light refractions  • Terminal scanline texture
• Offset drop shadows    • Floating elevation cards    • Monospace data displays
• Acid neon accents      • Specular highlights         • High-voltage glows
     │                           │                           │
     ▼                           ▼                           ▼
[ Wabi-Sabi ]              [ Bauhaus ]                  [ Art Deco ]
• Washi paper canvas     • Primary geometry            • Symmetrical chevron motifs
• Natural sumi ink       • Form follows function       • Gleaming gold on obsidian
• Stoneware panels       • Asymmetric grid balances    • Stepped architectural fans
• Tranquil mindfulness   • Stark functional sans       • Monumental luxury serifs
```

---

## Highlights

- 🎨 **32 Curated Design Languages**: From architectural movements (*Bauhaus*, *Brutalism*, *Art Deco*, *Gothic*, *Victorian*) to modern digital aesthetics (*Glassmorphism*, *Neumorphism*, *Dark Mode UI*, *Bento Grid*) and expressive artistic cultures (*Cyberpunk*, *Synthwave*, *Wabi-Sabi*, *Graffiti*, *Mixed Media*).
- 🧩 **Zero-Dependency Core**: The style engine, token resolver, CSS generator, and DOM analyzer are 100% framework-agnostic TypeScript with zero runtime dependencies.
- ⚛️ **First-Class React Adapter**: Idiomatic context provider (`<StyleEngineProvider>`), hierarchical scoping (`<StyleScope>`), and primitives (`<Page>`, `<Section>`, `<Card>`, `<Button>`, `<Heading>`, `<Paragraph>`).
- ⚡ **Production CLI**: Inspect styles, transform HTML pages, and export compiled stylesheets with `npx design-library`.
- 🎛️ **Hierarchical Scope Engine**: Nest styles seamlessly with `Global → Page → Section → Component` scope inheritance and localized token overrides.
- 🧪 **Rigorously Tested**: 274 automated tests across 21 test suites verifying token resolution, composition differentiation, DOM analyzers, and CLI workflows.

---

## Installation

Install directly from GitHub into any React, Vite, or web application:

```bash
# npm
npm install git+https://github.com/Mohammed-Ayyan/Design-Library.git

# pnpm
pnpm add git+https://github.com/Mohammed-Ayyan/Design-Library.git

# yarn
yarn add git+https://github.com/Mohammed-Ayyan/Design-Library.git

# bun
bun add git+https://github.com/Mohammed-Ayyan/Design-Library.git
```

### Local Development / Monorepo Installation
If working locally or pairing with local repositories:
```bash
npm install "path/to/Design Library"
# or
npm link design-library
```

---

## Quick Start

### 1. Vanilla HTML & CSS

Import the precompiled production stylesheet or generate it using the CLI:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="node_modules/design-library/dist/lib/style.css">
  <!-- Or generate standalone CSS: npx design-library init -->
  <link rel="stylesheet" href="./design-library.css">
</head>
<body>
  <!-- Simply add the style class to any container or section -->
  <div class="style-brutalism">
    <section>
      <h1>Raw Architectural Impact</h1>
      <p>Instant visual transformation applied to standard HTML tags.</p>
      <button>Explore Language</button>
    </section>
  </div>
</body>
</html>
```

### 2. React Applications

Wrap your application or sub-trees in `<StyleEngineProvider>` and use semantic primitives:

```tsx
import React from 'react';
import {
  StyleEngineProvider,
  Page,
  Section,
  Card,
  Button,
  Heading,
  Paragraph,
  StyleScope,
} from 'design-library';

export function App() {
  return (
    <StyleEngineProvider initialStyle="wabi-sabi">
      <Page>
        <Section>
          <Heading level={1}>Tranquil Wabi-Sabi Foundation</Heading>
          <Paragraph>Natural stoneware textures and calm sumi ink typography.</Paragraph>
          
          <Card>
            <Heading level={3}>Artisan Ceramic</Heading>
            <Paragraph>Handcrafted stoneware finished with natural wood ash glaze.</Paragraph>
            <Button>Acquire Piece</Button>
          </Card>
        </Section>

        {/* Override nested subtrees with a distinct design style */}
        <StyleScope styleId="cyberpunk">
          <Section>
            <Heading level={2}>Sublevel Terminal</Heading>
            <Paragraph>Neon cyan and magenta glows isolated to this section.</Paragraph>
            <Button>Engage ICE Breaker</Button>
          </Section>
        </StyleScope>
      </Page>
    </StyleEngineProvider>
  );
}
```

### 3. Framework-Agnostic Core Engine

Use the headless `StyleEngine` directly in Node.js, SSR pipelines, build plugins, or custom UI engines:

```ts
import { StyleEngine, DOMAnalyzer, AdaptiveCSSGenerator } from 'design-library';

// 1. Initialize engine with all 32 registered styles
const engine = new StyleEngine();

// 2. Resolve token values and CSS variables
const resolved = engine.resolveStyle('brutalism');
console.log(resolved.tokens.colors.background); // "#f4f3ed"
console.log(resolved.tokens.colors.primary);    // "#ffe600"
console.log(resolved.cssVariables);             // { "--ds-color-background": "#f4f3ed", ... }

// 3. Transform arbitrary HTML
const rawHtml = '<section><h2>Headline</h2><button>Action</button></section>';
const report = DOMAnalyzer.analyzeHtml(rawHtml, 'bauhaus', engine);
console.log(report.stampedHtml);

// 4. Generate all adaptive CSS rules
const fullCss = AdaptiveCSSGenerator.getAdaptiveStyles();
```

---

## Command Line Interface (CLI)

The package bundles a complete CLI for terminal workflows, static site generators, and CI/CD pipelines.

```bash
# Run directly with npx
npx design-library <command> [options]

# Or via package.json alias
npx design-engine <command> [options]
```

### CLI Commands

| Command | Description | Example |
| :--- | :--- | :--- |
| `list` | List all available design languages & active status | `npx design-library list` |
| `info <style-id>` | Inspect design tokens, fonts, palette, and usage | `npx design-library info brutalism` |
| `apply <file.html>` | Transform plain HTML with a design language | `npx design-library apply page.html -s cyberpunk -o output.html` |
| `export-css [style-id]`| Export compiled CSS for a style or all styles | `npx design-library export-css wabi-sabi -o wabi-sabi.css` |
| `init` | Scaffold starter stylesheet `design-library.css` | `npx design-library init` |

### Apply Flags

- `-s, --style <id>`: Design language to apply (default: `brutalism`)
- `-o, --output <path>`: Write transformed output to a file instead of stdout
- `--standalone`: Wrap output in a complete HTML5 document with embedded webfonts & CSS
- `--report`: Output structural analysis JSON report
- `-v, --version`: Print version number
- `-h, --help`: Display help documentation

#### Piping via Stdin:

```bash
cat input.html | npx design-library apply --style swiss-design --standalone > output.html
```

---

## Available Design Languages

| Style ID | Name | Category | Primary Characteristics |
| :--- | :--- | :--- | :--- |
| `minimalism` | **Minimalism** | Modern | Hairline borders, spacious margins, calm monochromatic harmony |
| `brutalism` | **Brutalism** | Expressive | Raw 3px solid black borders, 0px sharp corners, hard offset shadows, acid neon |
| `glassmorphism` | **Glassmorphism** | Material & Depth | Frosted glass surfaces (20px blur), delicate light borders, soft floating shadows |
| `neo-brutalism` | **Neo-Brutalism** | Expressive | Bold grotesk typography, 2px structural dark outlines, vibrant yellow & magenta |
| `swiss-design` | **Swiss Design** | Modern | Objective sans typography, disciplined horizontal datum rules, asymmetric grid |
| `bauhaus` | **Bauhaus** | Modern | Primary geometry (circle, square, triangle), stark functionalism, asymmetric balance |
| `art-deco` | **Art Deco** | Retro & Heritage | Symmetrical sunburst & chevron motifs, gleaming gold accents on deep obsidian |
| `wabi-sabi` | **Wabi-Sabi** | Artistic & Organic | Warm washi paper canvas, earthy sumi ink, stoneware panels, organic serenity |
| `cyberpunk` | **Cyberpunk** | Expressive | Neon cyan & laser magenta glows, pitch-black void, circuit accents |
| `cybercore` | **Cybercore** | Expressive | Dark digital surfaces, selective CRT scanlines, technical HUD badges, data matrix |
| `synthwave` | **Synthwave** | Retro & Heritage | Deep midnight purple void, outrun sunset gradients, arcade neon glows |
| `gothic` | **Gothic** | Retro & Heritage | Cathedral stone, aged vellum ivory, antique brass ecclesiastical rules, lancet profiles |
| `victorian` | **Victorian** | Retro & Heritage | Aged parchment paper, botanical forest green, imperial gold, ornate filigree serifs |
| `graffiti` | **Graffiti** | Expressive | Concrete/asphalt surfaces, raw marker strokes, spray paint textures, sticker badges |
| `mixed-media` | **Mixed Media** | Artistic & Organic | Cotton rag paper, vermilion ink marks, editorial serif/sans, collage frame borders |
| `bento-grid` | **Bento Grid** | Modern | Asymmetric modular compartments, high-density layouts, rounded containers |
| `dark-mode-ui` | **Dark Mode UI** | Modern | Layered dark surfaces (`#09090b`), subtle neon indicators, high-contrast readable text |
| `editorial-design` | **Editorial Design** | Modern | Journalistic story hierarchy, broadsheet column rules, editorial serif headlines |
| `luxury-typography` | **Luxury Typography**| Modern | Monumental high-contrast Didone serifs, quiet uppercase letterspacing, gold accents |
| `neo-classical` | **Neo-Classical** | Retro & Heritage | Proportion, symmetry, refined display serifs paired with functional body types |
| `neumorphism` | **Neumorphism** | Material & Depth | Low-contrast continuous surfaces with dual-direction soft extrusion shadows |
| `claymorphism` | **Claymorphism** | Material & Depth | Soft inflated pastel clay slabs with inner pillowy highlights |
| `pixel-art` | **Pixel Art** | Retro & Heritage | Aliased stepped borders, bitmap typography, limited 16-color palette |
| `conceptual-sketch`| **Conceptual Sketch** | Artistic & Organic | Warm vellum drafting grid, graphite ink rules, technical blueprint marks |
| `ethereal` | **Ethereal** | Artistic & Organic | Luminous illuminated air foundation, delicate serifs, pearl iridescence |
| `bohemian` | **Bohemian** | Artistic & Organic | Warm cream & parchment, expressive botanical Fraunces display, terracotta accents |
| `anthropomorphic` | **Anthropomorphic** | Artistic & Organic | Friendly organic geometry, pill shapes, warm expressive personality |
| `maximalism` | **Maximalism** | Expressive | Layered tactile parchment, royal crimson & saffron accents, ornate typography |
| `surrealism` | **Surrealism** | Artistic & Organic | Sculptural editorial serifs, ethereal twilight atmosphere, dreamscape framing |
| `y2k-aesthetic` | **Y2K Aesthetic** | Retro & Heritage | Silver metallic gradients, futuristic bubble geometry, iridescent cyber glows |
| `scrapbook` | **Scrapbook** | Artistic & Organic | Layered paper textures, photo corners, washi tape strips, handwritten notes |
| `base` | **Neutral Base** | Modern | Clean neutral baseline for progressive styling and unstyled resets |

---

## Architecture

The library is built upon a 3-tier architecture:

```
┌────────────────────────────────────────────────────────┐
│                   STYLE DEFINITIONS                    │
│   32 Hand-Crafted Authentic Visual Design Systems      │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                      STYLE ENGINE                      │
│   • StyleRegistry: Catalog management & validation     │
│   • StyleResolver: Token inheritance & scope cascade   │
│   • CSSAdapter: Dynamic CSS custom property generation │
│   • AdaptiveCSSGenerator: Semantic HTML stylesheets    │
└───────────────────────────┬────────────────────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       ▼                    ▼                    ▼
┌──────────────┐    ┌───────────────┐    ┌───────────────┐
│ REACT SYSTEM │    │  CLI ENGINE   │    │  DEMO STUDIO  │
│ Provider,    │    │ list, info,   │    │ Live preview, │
│ Primitives & │    │ apply, init,  │    │ Redesign Lab, │
│ Scopes       │    │ export-css    │    │ Docs & Canvas │
└──────────────┘    └───────────────┘    └───────────────┘
```

### Scope Hierarchy

Styles resolve hierarchically through the DOM tree:

1. **Global Scope**: Baseline theme set on root container via `--ds-*` custom properties.
2. **Page Scope**: Controls page-level background, canvas, and typography defaults.
3. **Section Scope**: Child sections inherit page style or declare `<Section styleId="...">` or `<StyleScope styleId="...">` for an isolated visual island.
4. **Component Scope**: Primitives like `<Button styleId="...">` or `<Card styleId="...">` can locally override styles or specific tokens without affecting sibling elements.
5. **Safe Fallbacks**: Requesting an unregistered or unknown style ID automatically and safely falls back to the neutral base style.

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/Mohammed-Ayyan/Design-Library.git
cd Design-Library

# Install dependencies
npm install

# Start interactive local development studio
npm run dev

# Run full test suite (274 tests)
npm run test

# Build production library bundle & web application
npm run build:all
```

---

## License

This project is licensed under the **[MIT License](LICENSE)**.
