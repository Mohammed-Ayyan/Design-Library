#!/usr/bin/env node

/**
 * Design Style Library — CLI Executable
 *
 * Provides a command-line interface to inspect, transform, and export design languages
 * from the Design Style Library and Adaptive Style Engine.
 *
 * Usage:
 *   npx design-library <command> [options]
 *   npx design-engine <command> [options]
 *
 * Commands:
 *   list                          List all 32 design languages and active status
 *   info <styleId>                Show tokens, fonts, colors, and usage for a style
 *   apply <input.html> [options]  Apply a design style to arbitrary plain HTML
 *   init [options]                Generate starter stylesheet (design-library.css)
 *   export-css [styleId] [opts]   Export full compiled CSS for a style or all styles
 *
 * Options for apply:
 *   -s, --style <id>       Design language to apply (default: brutalism)
 *   -o, --output <path>    Write output to file instead of stdout
 *   --standalone           Emit a complete HTML5 document with embedded styles & webfonts
 *   --report               Output JSON analysis report instead of HTML
 *   -h, --help             Show help documentation
 *   -v, --version          Show version number
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  StyleEngine,
  DOMAnalyzer,
  AdaptiveCSSGenerator,
  ALL_29_STYLES,
  defaultStyles,
} from '../dist/lib/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json for version
const packageJsonPath = path.resolve(__dirname, '../package.json');
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const args = process.argv.slice(2);

function printHelp() {
  console.log(`
Adaptive Design Style Engine CLI (v${pkg.version})

Usage:
  npx design-library <command> [options]
  npx design-engine <input.html> [options]
  cat <input.html> | npx design-engine [options]

Commands:
  list                             List all 32 design languages and active status
  info <style-id>                  Inspect tokens, typography, and palette for a style
  apply <input.html> [options]     Transform plain HTML using a design language
  init [options]                   Create a starter design-library.css in the project
  export-css [style-id] [options]  Export compiled CSS for a style or all styles

Apply Options:
  -s, --style <id>        Design language to apply (default: brutalism)
  -o, --output <path>     Write transformed output to file instead of stdout
  --standalone            Emit a complete HTML5 document with embedded webfonts & CSS
  --report                Print JSON structural and role-composition analysis report
  --list-styles           List all available design languages
  -v, --version           Print version information
  -h, --help              Show this help guide

Examples:
  npx design-library list
  npx design-library info brutalism
  npx design-library apply page.html --style bauhaus --standalone -o output.html
  npx design-library export-css cyberpunk -o cyberpunk.css
  npx design-library init
`);
}

function listStyles() {
  const activeIds = new Set(defaultStyles.map((s) => s.id));
  console.log(`\nAvailable Design Languages (${ALL_29_STYLES.length} total):\n`);
  console.log('ACTIVE & ADAPTIVE:');
  ALL_29_STYLES.filter((s) => activeIds.has(s.id)).forEach((s) => {
    console.log(`  • ${s.id.padEnd(18)} [${s.category}] - ${s.name}: ${s.description.slice(0, 60)}...`);
  });
  console.log('\nCATALOG (PLANNED):');
  ALL_29_STYLES.filter((s) => !activeIds.has(s.id)).forEach((s) => {
    console.log(`  - ${s.id.padEnd(18)} [${s.category}] - ${s.name}`);
  });
  console.log('');
}

function infoStyle(styleId) {
  if (!styleId) {
    console.error('Error: Please specify a style ID. Example: npx design-library info brutalism');
    process.exit(1);
  }

  const catalogItem = ALL_29_STYLES.find((s) => s.id.toLowerCase() === styleId.toLowerCase());
  const engine = new StyleEngine();
  const styleDef = engine.getStyle(styleId);

  if (!catalogItem && !styleDef) {
    console.error(`Error: Unknown style "${styleId}". Run 'npx design-library list' to see available styles.`);
    process.exit(1);
  }

  const name = styleDef?.name || catalogItem?.name || styleId;
  const category = catalogItem?.category || styleDef?.metadata?.category || 'General';
  const desc = catalogItem?.description || styleDef?.metadata?.description || '';

  console.log(`\n==================================================`);
  console.log(`STYLE: ${name} (${styleId})`);
  console.log(`Category:    ${category}`);
  console.log(`Status:      ${styleDef ? 'Active & Installed' : 'Planned'}`);
  console.log(`Description: ${desc}`);
  console.log(`==================================================\n`);

  if (styleDef) {
    const c = styleDef.tokens.colors;
    const t = styleDef.tokens.typography;
    const r = styleDef.tokens.radii;
    const b = styleDef.tokens.borders;

    console.log('Design Tokens:');
    console.log(`  Background:  ${c.background}`);
    console.log(`  Surface:     ${c.surface}`);
    console.log(`  Text:        ${c.textPrimary || c.text}`);
    console.log(`  Primary:     ${c.primary}`);
    if (c.secondary) console.log(`  Secondary:   ${c.secondary}`);
    if (c.accent) console.log(`  Accent:      ${c.accent}`);
    console.log(`  Heading Font: ${t.headingFamily || t.fontFamilyHeading || t.fontFamilyBase}`);
    console.log(`  Body Font:    ${t.fontFamily || t.fontFamilyBase}`);
    console.log(`  Corner Radius: ${r.md || r.base || '0px'}`);
    console.log(`  Border:        ${b.default || b.thin || 'none'}\n`);

    console.log('HTML Usage:');
    console.log(`  <div class="style-${styleId}">`);
    console.log(`    <h1>Your Heading</h1>`);
    console.log(`    <button>Action</button>`);
    console.log(`  </div>\n`);

    console.log('React Usage:');
    console.log(`  import { ${styleId.replace(/-([a-z])/g, (_, g) => g.toUpperCase())}Style } from 'design-library';`);
    console.log(`  // or: <section className="style-${styleId}">...</section>\n`);
  }
}

function initProject(cmdArgs) {
  let outputPath = 'design-library.css';
  for (let i = 0; i < cmdArgs.length; i++) {
    if (cmdArgs[i] === '-o' || cmdArgs[i] === '--output') {
      outputPath = cmdArgs[++i];
    }
  }

  const css = AdaptiveCSSGenerator.getAdaptiveStyles();
  const fileHeader = `/**
 * Design Style Library — Compiled Production Stylesheet
 * Generated by npx design-library init
 */
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Cinzel:wght@400;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@400;500;600;700;800;900&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Space+Grotesk:wght@400;500;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; }
`;

  fs.writeFileSync(outputPath, fileHeader + '\n' + css, 'utf8');
  console.log(`\n✔ Successfully generated ${outputPath}!`);
  console.log(`\nNext steps:`);
  console.log(`1. Link in your HTML:`);
  console.log(`   <link rel="stylesheet" href="./${outputPath}">`);
  console.log(`2. Or import in your JS/React entry point:`);
  console.log(`   import './${outputPath}';`);
  console.log(`3. Apply any style class to your container:`);
  console.log(`   <div class="style-brutalism">...</div>\n`);
}

function exportCss(cmdArgs) {
  let styleId = null;
  let outputPath = null;

  for (let i = 0; i < cmdArgs.length; i++) {
    const a = cmdArgs[i];
    if (a === '-o' || a === '--output') {
      outputPath = cmdArgs[++i];
    } else if (!a.startsWith('-')) {
      styleId = a;
    }
  }

  const allCss = AdaptiveCSSGenerator.getAdaptiveStyles();
  let resultCss = allCss;

  if (styleId) {
    // Extract section for the requested style
    const marker = `.style-${styleId}`;
    const startIndex = allCss.indexOf(marker);
    if (startIndex !== -1) {
      // Find start of comment or block
      const prevComment = allCss.lastIndexOf('/* ---', startIndex);
      const start = prevComment !== -1 ? prevComment : startIndex;
      // Find next section comment or end
      const nextComment = allCss.indexOf('/* ---', startIndex + 50);
      resultCss = nextComment !== -1 ? allCss.slice(start, nextComment).trim() : allCss.slice(start).trim();
    }
  }

  if (outputPath) {
    fs.writeFileSync(outputPath, resultCss, 'utf8');
    console.log(`✔ Successfully exported CSS to ${outputPath}`);
  } else {
    console.log(resultCss);
  }
}

async function handleApply(cliArgs) {
  let styleId = 'brutalism';
  let inputPath = null;
  let outputPath = null;
  let standalone = false;
  let report = false;

  for (let i = 0; i < cliArgs.length; i++) {
    const arg = cliArgs[i];
    if (arg === '-h' || arg === '--help') {
      printHelp();
      process.exit(0);
    }
    if (arg === '-v' || arg === '--version') {
      console.log(`v${pkg.version}`);
      process.exit(0);
    }
    if (arg === '--list-styles') {
      listStyles();
      process.exit(0);
    }
    if (arg === '-s' || arg === '--style') {
      styleId = cliArgs[++i];
    } else if (arg === '-o' || arg === '--output') {
      outputPath = cliArgs[++i];
    } else if (arg === '--standalone') {
      standalone = true;
    } else if (arg === '--report') {
      report = true;
    } else if (!arg.startsWith('-')) {
      inputPath = arg;
    }
  }

  // Get HTML content
  let rawHtml = '';
  if (inputPath) {
    if (!fs.existsSync(inputPath)) {
      console.error(`Error: File not found: ${inputPath}`);
      process.exit(1);
    }
    rawHtml = fs.readFileSync(inputPath, 'utf8');
  } else {
    // Read from stdin if available
    if (process.stdin.isTTY) {
      printHelp();
      process.exit(1);
    }
    const chunks = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk);
    }
    rawHtml = Buffer.concat(chunks).toString('utf8');
  }

  if (!rawHtml.trim()) {
    console.error('Error: Empty HTML input provided.');
    process.exit(1);
  }

  const engine = new StyleEngine();
  const analysis = DOMAnalyzer.analyzeHtml(rawHtml, styleId, engine);

  if (report) {
    const outputContent = JSON.stringify(analysis, null, 2);
    if (outputPath) {
      fs.writeFileSync(outputPath, outputContent, 'utf8');
      console.error(`Wrote report to ${outputPath}`);
    } else {
      console.log(outputContent);
    }
    return;
  }

  const styleDef = engine.getStyle(styleId) || engine.getRegistry().getBaseStyle();

  let finalOutput = '';

  if (standalone) {
    const allCss = AdaptiveCSSGenerator.getAdaptiveStyles();
    const bgColor = styleDef.tokens.colors.background || '#ffffff';
    const textColor = styleDef.tokens.colors.textPrimary || styleDef.tokens.colors.text || '#000000';
    const font = styleDef.tokens.typography.fontFamilyBase || styleDef.tokens.typography.fontFamily || 'sans-serif';

    finalOutput = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${styleDef.name} — Design Style Library</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Cinzel:wght@400;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@400;500;600;700;800;900&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 2.5rem 1.5rem;
      background-color: ${bgColor};
      color: ${textColor};
      font-family: ${font};
      min-height: 100vh;
    }
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    ${allCss}
  </style>
</head>
<body>
  <div class="page-container">
    <div class="style-${styleId}">
${analysis.stampedHtml
  .split('\n')
  .map((line) => '      ' + line)
  .join('\n')}
    </div>
  </div>
</body>
</html>`;
  } else {
    finalOutput = `<div class="style-${styleId}">\n${analysis.stampedHtml}\n</div>`;
  }

  if (outputPath) {
    fs.writeFileSync(outputPath, finalOutput, 'utf8');
    console.error(`Successfully wrote transformed HTML to ${outputPath}`);
  } else {
    console.log(finalOutput);
  }
}

async function main() {
  if (args.length === 0) {
    if (process.stdin.isTTY) {
      printHelp();
      process.exit(0);
    } else {
      return handleApply(args);
    }
  }

  const firstArg = args[0];

  if (firstArg === '-h' || firstArg === '--help') {
    printHelp();
    return;
  }
  if (firstArg === '-v' || firstArg === '--version') {
    console.log(`v${pkg.version}`);
    return;
  }
  if (firstArg === 'list' || firstArg === '--list-styles') {
    listStyles();
    return;
  }
  if (firstArg === 'info') {
    infoStyle(args[1]);
    return;
  }
  if (firstArg === 'init') {
    initProject(args.slice(1));
    return;
  }
  if (firstArg === 'export-css') {
    exportCss(args.slice(1));
    return;
  }
  if (firstArg === 'apply') {
    return handleApply(args.slice(1));
  }

  // Backwards compatibility for direct: design-engine file.html [options]
  return handleApply(args);
}

main().catch((err) => {
  console.error('CLI Error:', err);
  process.exit(1);
});
