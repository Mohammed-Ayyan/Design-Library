# Design Style Library

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://react.dev/)
[![Tests](https://img.shields.io/badge/Tests-318%20passed-success.svg)](https://vitest.dev/)
[![Zero CSS](https://img.shields.io/badge/Zero--CSS-100%25%20Semantic%20HTML-brightgreen.svg)](#structure--style)
[![Styles](https://img.shields.io/badge/Design%20Languages-32%20Active-purple.svg)](#available-design-languages)

> **A developer-first design language engine that lets you apply complete, authentic visual design systems to existing HTML, React components, sections, and full pages — with zero CSS classes, zero DOM mutation, and zero framework lock-in.**

---

## Table of Contents

- [Core Philosophy: Structure ≠ Style](#core-philosophy-structure--style)
- [Complete Feature Catalog](#complete-feature-catalog)
  - [1. 32 Authentic Curated Design Languages](#1-32-authentic-curated-design-languages)
  - [2. Style Composition & Multi-Language Hybrids](#2-style-composition--multi-language-hybrids-new)
  - [3. Custom HTML Redesign Lab with Unified Split Slider](#3-custom-html-redesign-lab-with-unified-split-slider)
  - [4. Real-World Zero-CSS SaaS Application (NexusCloud)](#4-real-world-zero-css-saas-application-nexuscloud)
  - [5. How It Works: Interactive Compiler Pipeline & Video](#5-how-it-works-interactive-compiler-pipeline--video)
  - [6. Visual Site Editor & In-Place Inspector](#6-visual-site-editor--in-place-inspector)
  - [7. Interactive Design Studio & Playground](#7-interactive-design-studio--playground)
  - [8. Developer Documentation System](#8-developer-documentation-system)
  - [9. Powerful Command Line Interface (CLI)](#9-powerful-command-line-interface-cli)
  - [10. Enterprise Security & HTML Sanitization](#10-enterprise-security--html-sanitization)
- [Installation](#installation)
- [Quick Start Guide](#quick-start-guide)
  - [React & Modern Frameworks (Vite, Next.js, Remix)](#react--modern-frameworks-vite-nextjs-remix)
  - [Vanilla HTML & CSS](#vanilla-html--css)
  - [React Primitives & Provider API](#react-primitives--provider-api)
  - [Framework-Agnostic Core Engine (Node.js / SSR)](#framework-agnostic-core-engine-nodejs--ssr)
- [Available Design Languages](#available-design-languages)
- [Style Composition & Hybrids Guide](#style-composition--hybrids-guide)
- [Command Line Interface (CLI) Reference](#command-line-interface-cli-reference)
- [Architecture & Scoping Model](#architecture--scoping-model)
- [Security Guarantees](#security-guarantees)
- [Local Development & Testing](#local-development--testing)
- [License](#license)

---

## Core Philosophy: Structure ≠ Style

Traditional component libraries force you to restructure your DOM, learn proprietary component props, or sprinkle dozens of utility classes across every HTML tag. **Design Style Library** turns that paradigm completely upside down:

### **STRUCTURE IS PERMANENT. STYLE IS FLUID.**

You write clean, semantic HTML or React components with **zero custom classes**:
```html
<section>
  <h2>High-Performance Cloud Infrastructure</h2>
  <p>Sub-millisecond edge compute nodes deployed across 48 regions worldwide.</p>
  <button>Provision Cluster</button>
</section>
```

The **Adaptive Style Engine** automatically inspects the DOM hierarchy, understands structural roles, and applies authentic visual art direction by wrapping any container with a style class or compound hybrid expression:

```
                      [ Plain Semantic HTML ]
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     ▼                           ▼                           ▼
[ Brutalism ]            [ Glassmorphism ]             [ Cyberpunk ]
• Raw 3px solid borders  • Frosted glass 20px blur     • Neon laser cyan & magenta
• 0px sharp geometry     • Translucent surfaces        • Terminal scanline texture
• Offset drop shadows    • Specular reflections        • Monospace data telemetry
• High-contrast yellow   • Light-catching hairlines    • High-voltage pulse glows
     │                           │                           │
     ▼                           ▼                           ▼
[ Wabi-Sabi ]              [ Bauhaus ]                  [ Art Deco ]
• Warm washi paper base  • Primary geometry (○, □, △) • Symmetrical chevron fans
• Sumi ink typography    • Form follows function       • Gleaming gold on obsidian
• Handcrafted stoneware  • Asymmetric grid balances    • Stepped architectural plinths
• Quiet organic zen      • Functional sans-serif       • Monumental luxury serifs
```

---

## Complete Feature Catalog

### 1. 32 Authentic Curated Design Languages
Every design language is a complete, historically grounded visual system with calibrated typography, color palettes, spacing rhythms, radii, borders, shadows, motion, and component rules:
- **Modern (7 languages)**: *Minimalism*, *Swiss Design*, *Bento Grid*, *Dark Mode UI*, *Luxury Typography*, *Editorial Design*, *Bauhaus*.
- **Expressive (6 languages)**: *Brutalism*, *Neo-Brutalism*, *Maximalism*, *Cyberpunk*, *Cybercore*, *Graffiti*.
- **Material & Depth (3 languages)**: *Glassmorphism*, *Neumorphism*, *Claymorphism*.
- **Retro & Heritage (7 languages)**: *Art Deco*, *Gothic*, *Victorian*, *Synthwave*, *Y2K Aesthetic*, *Pixel Art*, *Neo-Classical*.
- **Artistic & Organic (9 languages)**: *Wabi-Sabi*, *Solarpunk*, *Mixed Media*, *Conceptual Sketch*, *Ethereal*, *Bohemian*, *Anthropomorphic*, *Surrealism*, *Scrapbook*.

All languages support canonical IDs and convenient aliases (e.g., `style-swiss-design` / `style-swiss`, `style-y2k-aesthetic` / `style-y2k`, `style-neo-brutalism` / `style-neobrutalism`).

---

### 2. Style Composition & Multi-Language Hybrids (NEW!)
The Style Engine supports **hybrid style composition**, allowing users and developers to blend two or more design languages across any `div`, `section`, or `page` in one go.

- **Human-Friendly Expressions**:
  - Slash command syntax: `/name = wabi-sabi + glassmorphism`
  - Name equations: `name = brutalism + minimalism`
  - Plus-separated queries: `cyberpunk + synthwave`
  - Multi-style fusions: `solarpunk + neo-brutalism`
- **Aesthetic Synthesis Algorithm**:
  - Foundational structure (typography, border weights, layout) is anchored by the primary design language.
  - Layered surface properties (frosted glass `backdrop-filter`, translucent alpha channels, glows, specular reflections, accent highlights) are extracted from secondary styles and synthesized into a harmonious hybrid.
- **Injected Hybrid Telemetry**:
  - Custom properties: `--ds-hybrid: true`, `--ds-hybrid-primary`, `--ds-hybrid-secondary`, `--ds-hybrid-styles`.
  - Utility classes: `style-wabi-sabi style-glassmorphism style-hybrid` and `data-hybrid="true"`.
- **8 Curated Popular Presets**:
  - *Zen Glass* (`wabi-sabi + glassmorphism`)
  - *Minimal Raw* (`brutalism + minimalism`)
  - *Retro Cyber* (`cyberpunk + synthwave`)
  - *Eco Pop* (`solarpunk + neo-brutalism`)
  - *Gothic Chic* (`gothic + luxury-typography`)
  - *Modernist Grid* (`bauhaus + bento-grid`)
  - *Vapor Nostalgia* (`synthwave + y2k-aesthetic`)
  - *Tactile Soft* (`claymorphism + neumorphism`)
- **Interactive Homepage Hybrid Showcase (`StyleHybridSection`)**:
  - Test any pairwise combination live directly on the homepage with interactive dropdown selectors.
  - Switch between 3 realistic content archetypes: Product Card, SaaS Pricing Tier, and Editorial Essay.
  - Multi-tab instant code generation for React JSX, Vanilla HTML, and CLI commands with 1-click clipboard copying.
  - Direct quick-launch links into the Custom HTML Redesign Lab and Design Studio.
- **Zero-Provider Standalone React Support**:
  - Components like `<StyleScope styleId="/name = wabi-sabi + glassmorphism">`, `<Section>`, `<Card>`, and `<Button>` can be rendered directly anywhere in your project without requiring a root `<StyleEngineProvider>` wrapper!

---

### 3. Custom HTML Redesign Lab with Unified Split Slider
A dedicated laboratory at `/custom-html` enabling anyone to test, transform, and inspect custom HTML:
- **Unified Before & After Split Slider**: One expansive comparison section with a central draggable divider handle. Slide smoothly left or right to reveal the unstyled Semantic HTML (left) versus the transformed Design Language (right).
- **Reflow-Free Layout Engine**: The unstyled overlay container dynamically tracks the exact pixel width of the viewport via `ResizeObserver`, ensuring headers, paragraphs, and cards never wrap or re-layout unnaturally as you drag the divider.
- **Dual Fullscreen Viewport Mode**:
  - Triggers native browser Fullscreen API (`requestFullscreen` / `exitFullscreen`).
  - Seamless CSS fixed viewport fallback (`position: fixed; inset: 0; z-index: 99999`) ensuring full-screen immersion works reliably everywhere.
  - Keyboard shortcut support: Press `Esc` or click **Exit Full Screen** to restore normal view.
- **Single Style & Hybrid Mode Toggle**: Switch between single design languages or enter compound expressions like `/name = wabi-sabi + glassmorphism` with live visual updates.
- **Starter Templates**: One-click preset HTML snippets for SaaS Landing, Pricing Matrix, Documentation Card, Checkout Form, and Modern Blog Article.
- **One-Click Actions**: Paste directly from clipboard, clear editor, open transformed page in a standalone browser tab, or inspect sanitized HTML.

---

### 4. Real-World Zero-CSS SaaS Application (NexusCloud)
Visit `/saas` to explore **NexusCloud**, a complete, production-grade cloud infrastructure dashboard built with **100% semantic HTML and zero custom CSS**:
- **6 Operational Sub-Views**:
  - *Cloud Overview*: Cluster health metrics, live node counts, cost telemetry, regional distribution.
  - *Compute Instances*: Tabular instance lists, status indicators, IP tracking, power controls.
  - *Analytics & Metrics*: CPU load, memory pressure, and network latency curves.
  - *Security Policies*: Firewall rules, zero-trust network configurations, status badges.
  - *Billing & Usage*: Monthly budget progress, compute consumption breakdown, invoice tables.
  - *Multi-Style Matrix*: A showcase running **16 distinct design styles simultaneously** in a responsive grid without style bleeding or CSS contamination!
- **Instant Global Theme Switching**: Toggle the entire SaaS application across any of the 32 design languages with zero page reloads.

---

### 5. How It Works: Interactive Compiler Pipeline & Video
An architectural deep-dive section on the home page explaining what happens behind the scenes:
- **Interactive 5-Stage AST Compiler Pipeline**:
  1. *Stage 1: Semantic DOM Ingestion* — Parses raw HTML into an accessible DOM tree without modifying tag semantics.
  2. *Stage 2: Context & Role Analyzer* — Evaluates element roles (headings, cards, forms, buttons) based on hierarchy.
  3. *Stage 3: Aesthetic Grammar Synthesis* — Projects the target design language tokens into a scoped variable contract.
  4. *Stage 4: Scoped Cascade Compiler* — Compiles `--ds-*` custom properties and utility classes.
  5. *Stage 5: Sub-Millisecond CSS Injection* — Injects styles with zero layout shift and sub-millisecond execution.
- **Full Engineering Build Process Video**: Embedded 1080p development build timelapse documentary streamed via official YouTube player with interactive timecode chapter bookmarks:
  - `00:00` Architectural Setup & Engine Core
  - `01:15` Token Model & AST Parser
  - `02:40` Context-Aware Grammar Ingestion
  - `04:00` 32 Visual Languages Implementation
  - `05:30` Zero-CSS Testing & CLI
  - Direct Watch Link: [YouTube (1080p Timelapse)](https://www.youtube.com/watch?v=joLwo1rvk8w)
- **4 Core Engineering Tenets**: Zero Semantic Distortion, Sub-Millisecond Scope Resolution, Mathematical Token Contracts, Framework-Agnostic Core.

---

### 6. Visual Site Editor & In-Place Inspector
- Hover over any page element to view its active styling boundaries.
- Inspect computed CSS custom properties (`--ds-color-*`, `--ds-font-*`, `--ds-radius-*`).
- In-place style switching to experiment with art direction across live landing page sections.

---

### 7. Interactive Design Studio & Playground
- Live side-by-side comparison between unstyled HTML and transformed styling.
- Multi-tab code inspector displaying Vanilla HTML, React JSX, and generated CSS rules.
- One-click copy-to-clipboard and preset component switchers (Hero, Pricing, Form, Features).

---

### 8. Developer Documentation System
A full-featured documentation center accessible at `/docs`:
- **24 In-Depth Guides**: Covering Getting Started, Usage, Code, Styles, Advanced Customization, Tokens, and Troubleshooting.
- **Interactive Live Preview Sandbox**: Embedded live previews with style and preset switchers.
- **Instant Search (`Cmd+K` / `Ctrl+K`)**: Rapid keyword search with live category filtering and keyboard navigation.

---

### 9. Powerful Command Line Interface (CLI)
A production-ready CLI bundled with the package:
- `list`: List all 32 design languages and active status.
- `info <style-id>`: Inspect token signatures, typography, and palette for a style.
- `apply <input.html> [options]`: Transform HTML from files or stdin pipe with `--style`, `--standalone`, `--output`, and `--report` flags.
- **Hybrid Support in CLI**: Run `--style "wabi-sabi + glassmorphism"` to emit a blended standalone document.
- `init`: Scaffold a starter stylesheet for your project.
- `export-css [style-id]`: Export compiled CSS for a single style or all 32 styles.

---

### 10. Enterprise Security & HTML Sanitization
Security-hardened codebase designed for production environments:
- **`HTMLSanitizer`**: Deep DOM-based sanitization stripping forbidden tags (`script`, `iframe`, `frame`, `template`, `portal`, `object`, `embed`).
- **XSS & Protocol Obfuscation Defense**: Strips inline `on*` event handlers and normalizes URLs to detect and eliminate obfuscated `javascript:`, `vbscript:`, and `data:text/html` payloads.
- **Prototype Pollution Immunity**:
  - `StyleRegistry` uses native JavaScript `Map` structures.
  - Deep-merge algorithms strictly guard against `__proto__`, `constructor`, and `prototype` keys.
- **Safe File Operations**: CLI ensures output parent directories are created safely without path crashes.
- **Audited Dependencies**: Clean audit with zero runtime production vulnerabilities.

---

## Installation

Install directly into any web application or project:

```bash
# npm
npm install github:Mohammed-Ayyan/Design-Library

# pnpm
pnpm add github:Mohammed-Ayyan/Design-Library

# yarn
yarn add github:Mohammed-Ayyan/Design-Library

# bun
bun add github:Mohammed-Ayyan/Design-Library
```

---

## Quick Start Guide

### React & Modern Frameworks (Vite, Next.js, Remix)

**1. Import the stylesheet at your root entry point (`main.tsx`, `App.tsx`, or `app/layout.tsx`):**
```tsx
import 'design-library/style.css';
```

**2. Apply any design language using standard class names on any container:**
```tsx
export function LandingPage() {
  return (
    <div className="style-wabi-sabi">
      <header>
        <h1>Crafted Simplicity</h1>
        <p>Organic textures, earth tones, and mindful space.</p>
        <button>Explore Atelier</button>
      </header>

      {/* Nest a different style inside any section */}
      <section className="style-brutalism">
        <h2>Unflinching Architecture</h2>
        <p>Tactile black borders and raw structural honesty.</p>
        <button>View Specifications</button>
      </section>
    </div>
  );
}
```

---

### Vanilla HTML & CSS

Link the stylesheet directly or generate a standalone file using the CLI:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla HTML with Design Style Library</title>
  <!-- Link stylesheet -->
  <link rel="stylesheet" href="node_modules/design-library/dist/lib/style.css">
</head>
<body>
  <!-- Simply wrap any container with the style class -->
  <div class="style-bauhaus">
    <header>
      <h1>Form Follows Function</h1>
      <p>Primary geometry, disciplined typography, and functional clarity.</p>
      <button>Explore Works</button>
    </header>
  </div>
</body>
</html>
```

---

### React Primitives & Provider API

```tsx
import React from 'react';
import 'design-library/style.css';
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
    <StyleEngineProvider initialStyle="minimalism">
      <Page>
        <Section>
          <Heading level={1}>Airy Editorial Hierarchy</Heading>
          <Paragraph>Monochromatic calm with spacious margins.</Paragraph>

          <Card>
            <Heading level={3}>Design Engineering</Heading>
            <Paragraph>Harmonizing structural discipline with unmistakable art direction.</Paragraph>
            <Button>Read Manifesto</Button>
          </Card>
        </Section>

        {/* Style hybrid composition in a nested scope */}
        <StyleScope styleId="/name = wabi-sabi + glassmorphism">
          <Section>
            <Heading level={2}>Zen Frosted Container</Heading>
            <Paragraph>Blends organic washi warmth with 20px frosted backdrop glass.</Paragraph>
            <Button>Confirm Order</Button>
          </Section>
        </StyleScope>
      </Page>
    </StyleEngineProvider>
  );
}
```

#### Standalone Zero-Provider React Usage
You can also import and use `<StyleScope>`, `<Section>`, `<Card>`, and `<Button>` anywhere **without** wrapping your root in `<StyleEngineProvider>`:

```tsx
import React from 'react';
import 'design-library/style.css';
import { StyleScope, Card, Button } from 'design-library';

export function StandaloneHybridWidget() {
  return (
    <StyleScope styleId="/name = wabi-sabi + glassmorphism" level="section" as="section">
      <Card>
        <h3>Zen Glass Fusion</h3>
        <p>Zero provider boilerplate needed — styles resolve gracefully out of the box.</p>
        <Button>Explore</Button>
      </Card>
    </StyleScope>
  );
}
```

---

### Framework-Agnostic Core Engine (Node.js / SSR)

```ts
import { StyleEngine, DOMAnalyzer, AdaptiveCSSGenerator } from 'design-library';

// 1. Initialize engine
const engine = new StyleEngine();

// 2. Resolve single style tokens and CSS variables
const brutalism = engine.resolveStyleById('brutalism');
console.log(brutalism.cssVariables['--ds-color-primary']); // "#ffe600"

// 3. Resolve hybrid style composition
const hybrid = engine.resolveStyleById('/name = wabi-sabi + glassmorphism');
console.log(hybrid.isHybrid); // true
console.log(hybrid.hybridClassNames); // "style-wabi-sabi style-glassmorphism style-hybrid"

// 4. Transform plain HTML into styled markup
const rawHtml = '<article><h2>Title</h2><button>Click</button></article>';
const analysis = DOMAnalyzer.analyzeHtml(rawHtml, 'cyberpunk', engine);
console.log(analysis.stampedHtml);
```

---

## Available Design Languages

| Style ID | Name | Category | Primary Visual Characteristics |
| :--- | :--- | :--- | :--- |
| `minimalism` | **Minimalism** | Modern | Hairline borders, spacious margins, calm monochromatic harmony |
| `brutalism` | **Brutalism** | Expressive | Raw 3px solid black borders, 0px sharp corners, hard offset drop shadows |
| `glassmorphism` | **Glassmorphism** | Material & Depth | Frosted glass surfaces (20px blur), translucent layers, specular highlights |
| `neo-brutalism` | **Neo-Brutalism** | Expressive | Bold grotesk typography, 2px dark outlines, vibrant saturated pop palette |
| `swiss-design` | **Swiss Design** | Modern | Objective sans typography, disciplined horizontal datum rules, asymmetric grid |
| `bauhaus` | **Bauhaus** | Modern | Primary geometry (circle, square, triangle), stark functionalism |
| `art-deco` | **Art Deco** | Retro & Heritage | Symmetrical sunburst & chevron motifs, gleaming gold on deep obsidian |
| `wabi-sabi` | **Wabi-Sabi** | Artistic & Organic | Warm washi paper canvas, earthy sumi ink, stoneware panels, organic serenity |
| `cyberpunk` | **Cyberpunk** | Expressive | Neon cyan & laser magenta glows, pitch-black void, circuit accents |
| `cybercore` | **Cybercore** | Expressive | Dark digital surfaces, selective CRT scanlines, technical HUD badges |
| `synthwave` | **Synthwave** | Retro & Heritage | Deep midnight purple void, outrun sunset gradients, arcade neon glows |
| `gothic` | **Gothic** | Retro & Heritage | Cathedral stone, aged vellum ivory, antique brass ecclesiastical rules |
| `victorian` | **Victorian** | Retro & Heritage | Aged parchment paper, botanical forest green, imperial gold, ornate filigree |
| `graffiti` | **Graffiti** | Expressive | Concrete/asphalt surfaces, raw marker strokes, spray paint tags, sticker badges |
| `mixed-media` | **Mixed Media** | Artistic & Organic | Cotton rag paper, vermilion ink marks, collage frame borders |
| `bento-grid` | **Bento Grid** | Modern | Asymmetric modular compartments, high-density layouts, rounded containers |
| `dark-mode-ui` | **Dark Mode UI** | Modern | Layered dark surfaces, controlled contrast, comfortable long sessions |
| `editorial-design`| **Editorial Design**| Modern | Journalistic story hierarchy, broadsheet column rules, editorial serif headlines |
| `luxury-typography`| **Luxury Typography**| Modern | Monumental high-contrast Didone serifs, quiet uppercase letterspacing |
| `neo-classical` | **Neo-Classical** | Retro & Heritage | Proportion, architectural symmetry, refined display serifs |
| `neumorphism` | **Neumorphism** | Material & Depth | Low-contrast extruded surfaces with dual-direction soft shadows |
| `claymorphism` | **Claymorphism** | Material & Depth | Soft inflated pastel clay slabs with inner pillowy highlights |
| `pixel-art` | **Pixel Art** | Retro & Heritage | Aliased stepped borders, bitmap typography, retro arcade gaming telemetry |
| `conceptual-sketch`| **Conceptual Sketch**| Artistic & Organic | Warm vellum drafting grid, graphite ink rules, technical blueprint marks |
| `ethereal` | **Ethereal** | Artistic & Organic | Luminous illuminated air foundation, delicate serifs, pearl iridescence |
| `bohemian` | **Bohemian** | Artistic & Organic | Warm cream & parchment, expressive botanical Fraunces display, terracotta |
| `anthropomorphic`| **Anthropomorphic**| Artistic & Organic | Friendly organic geometry, living micro-interactions, pill contours |
| `maximalism` | **Maximalism** | Expressive | Layered tactile parchment, royal crimson & saffron accents, ornate typography |
| `surrealism` | **Surrealism** | Artistic & Organic | Sculptural editorial serifs, ethereal twilight atmosphere, dreamscape framing |
| `solarpunk` | **Solarpunk** | Artistic & Organic | Verdant foliage greens, sunlit amber, organic curves, clean optimism |
| `y2k-aesthetic` | **Y2K Aesthetic** | Retro & Heritage | Silver metallic gradients, futuristic bubble geometry, iridescent cyber glows |
| `scrapbook` | **Scrapbook** | Artistic & Organic | Layered paper textures, photo corners, washi tape strips, handwritten notes |
| `base` | **Neutral Base** | Modern | Clean neutral baseline for progressive styling and unstyled resets |

---

## Style Composition & Hybrids Guide

Create rich compound aesthetics using expressions in React, Vanilla HTML, or the CLI:

### React Usage
```tsx
import { StyleScope, Section, Card, Button } from 'design-library';

export function HybridsShowcase() {
  return (
    <div>
      {/* 1. Zen Frosted Glass */}
      <StyleScope styleId="/name = wabi-sabi + glassmorphism" level="section" as="section">
        <h2>Handcrafted Zen Interface</h2>
        <p>Tactile washi paper with 20px frosted backdrop glass filtration.</p>
        <Button>Order Vessel</Button>
      </StyleScope>

      {/* 2. High-Contrast Structural Minimalism */}
      <Section styleId="brutalism + minimalism">
        <h2>Unflinching Structural Clarity</h2>
        <Card>
          <p>Monochrome architectural grid without ornamentation.</p>
        </Card>
      </Section>

      {/* 3. Retro Arcade Cyber */}
      <StyleScope styleId="cyberpunk + synthwave" level="component" as="div">
        <Button>Launch Synth Terminal</Button>
      </StyleScope>
    </div>
  );
}
```

### Vanilla HTML Usage
```html
<!-- Multi-class utility with hybrid attribute -->
<div class="style-wabi-sabi style-glassmorphism style-hybrid" data-hybrid="true" data-styles="wabi-sabi,glassmorphism">
  <h2>Zen Frosted Card</h2>
  <p>Rendered with both design language cascades active.</p>
  <button>Action</button>
</div>
```

---

## Command Line Interface (CLI) Reference

The package bundles a terminal CLI accessible via `npx design-library` or `npx design-engine`:

```bash
# List all 32 design languages
npx design-library list

# Inspect tokens and usage for a style
npx design-library info brutalism

# Transform an HTML file into a styled document
npx design-library apply input.html --style cyberpunk --standalone -o output.html

# Transform HTML with a hybrid multi-language expression
npx design-library apply input.html --style "wabi-sabi + glassmorphism" --standalone -o hybrid.html

# Pipe through stdin / stdout
cat input.html | npx design-library apply --style swiss-design --standalone > output.html

# Output JSON semantic analysis report
npx design-library apply input.html --style bauhaus --report

# Export compiled CSS for a single style or all styles
npx design-library export-css wabi-sabi -o styles/wabi-sabi.css
npx design-library export-css -o styles/all-styles.css

# Scaffold starter stylesheet
npx design-library init
```

---

## Architecture & Scoping Model

The library operates on a 4-level scope cascade:

```
page (Root level: HTML <body> or <Page>)
 └── section (Major UI zones: <section> or <Section styleId="...">)
      └── container (Cards, Drawers, Modals: <article> or <Card>)
           └── component (Atomic overrides: <button styleId="...">, <Badge>)
```

- **Scope Isolation**: An inner scope completely overrides its parent for its own subtree, while sibling elements remain unaffected.
- **CSS Custom Property Contract**: Every token compiles to `--ds-*` custom properties (e.g. `--ds-color-background`, `--ds-font-family-heading`, `--ds-radius-md`).
- **Safe Fallbacks**: Requesting an unknown style ID automatically and safely falls back to the neutral base style without throwing errors.

---

## Security Guarantees

- **Sanitized HTML Execution**: All user-provided markup rendered in interactive playgrounds or transformed via the engine passes through `HTMLSanitizer`.
- **Zero Script & Object Injection**: Automatically strips `<script>`, `<iframe>`, `<frame>`, `<template>`, `<portal>`, `<object>`, `<embed>`, and `<link>` elements.
- **Obfuscated Protocol Elimination**: Detects and neutralizes malicious protocols (`javascript:`, `vbscript:`, `data:text/html`) even when obfuscated with null bytes, tabs, or newlines.
- **Prototype Pollution Hardening**: All object merging algorithms guard against `__proto__`, `constructor`, and `prototype` property injection.
- **Strict File Safety**: The CLI ensures recursive directory creation for output files and prevents directory crashes.

---

## Local Development & Testing

```bash
# Clone the repository
git clone https://github.com/Mohammed-Ayyan/Design-Library.git
cd Design-Library

# Install dependencies
npm install

# Start local interactive development studio
npm run dev

# Run comprehensive test suite (317 tests across 26 test files)
npm test

# Build production web application & library distribution
npm run build:all
```

---

## License

This project is licensed under the **[MIT License](LICENSE)**.
