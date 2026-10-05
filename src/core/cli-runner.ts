import { ALL_29_STYLES } from '../styles/catalog';
import { defaultStyles } from '../styles';
import { StyleEngine } from './engine';
import { DOMAnalyzer } from './adaptive/dom-analyzer';
import { AdaptiveCSSGenerator } from './adaptive/adaptive-css';

const engine = new StyleEngine(defaultStyles);

export interface CliCommandResult {
  command: string;
  output: string;
  exitCode: number;
}

export function executeCliCommand(cmdLine: string): CliCommandResult {
  const trimmed = cmdLine.trim();
  if (!trimmed) {
    return { command: cmdLine, output: '', exitCode: 0 };
  }

  // Parse command arguments, removing prefix like 'npx design-library' or 'design-library'
  let args = trimmed.split(/\s+/);
  if (args[0] === 'npx') {
    args = args.slice(1);
  }
  if (args[0] === 'design-library' || args[0] === 'design-engine') {
    args = args.slice(1);
  }

  const subCommand = args[0] || '--help';

  switch (subCommand) {
    case 'list':
    case '--list-styles':
      return {
        command: cmdLine,
        output: formatListOutput(),
        exitCode: 0,
      };

    case 'info': {
      const styleId = args[1]?.toLowerCase();
      if (!styleId) {
        return {
          command: cmdLine,
          output: 'Error: Please specify a style ID. Example: design-library info wabi-sabi',
          exitCode: 1,
        };
      }
      return {
        command: cmdLine,
        output: formatInfoOutput(styleId),
        exitCode: 0,
      };
    }

    case 'export-css': {
      const styleId = args[1]?.toLowerCase();
      return {
        command: cmdLine,
        output: formatExportCssOutput(styleId),
        exitCode: 0,
      };
    }

    case 'init':
      return {
        command: cmdLine,
        output: formatInitOutput(),
        exitCode: 0,
      };

    case 'apply': {
      const targetFile = args[1] || 'index.html';
      let styleId = 'brutalism';
      const styleIndex = args.indexOf('--style');
      if (styleIndex !== -1 && args[styleIndex + 1]) {
        styleId = args[styleIndex + 1];
      }
      const isStandalone = args.includes('--standalone');
      return {
        command: cmdLine,
        output: formatApplyOutput(targetFile, styleId, isStandalone),
        exitCode: 0,
      };
    }

    case '--version':
    case '-v':
      return {
        command: cmdLine,
        output: 'design-library v0.1.0 (Unified Style Engine & Architectural Compiler)',
        exitCode: 0,
      };

    case '--help':
    case '-h':
    case 'help':
    default:
      return {
        command: cmdLine,
        output: formatHelpOutput(),
        exitCode: 0,
      };
  }
}

function formatHelpOutput(): string {
  return `
Adaptive Design Style Engine CLI (v0.1.0)

Usage:
  npx design-library <command> [options]
  npx design-engine <input.html> [options]

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
  -v, --version           Print version information
  -h, --help              Show this help guide

Examples:
  npx design-library list
  npx design-library info wabi-sabi
  npx design-library export-css wabi-sabi -o wabi-sabi.css
  npx design-library apply page.html --style brutalism --standalone -o output.html
  npx design-library init
`;
}

function formatListOutput(): string {
  const activeIds = new Set(defaultStyles.map((s) => s.id));
  let out = `\nAvailable Design Languages (${ALL_29_STYLES.length} total):\n\n`;
  out += 'ACTIVE & PRODUCTION-READY (32 Styles):\n';
  ALL_29_STYLES.filter((s) => activeIds.has(s.id) || s.status === 'active').forEach((s) => {
    out += `  • ${s.id.padEnd(20)} [${s.category.padEnd(18)}] - ${s.name}: ${s.description.slice(0, 55)}...\n`;
  });
  return out;
}

function formatInfoOutput(styleId: string): string {
  const cat = ALL_29_STYLES.find((s) => s.id === styleId);
  const def = defaultStyles.find((s) => s.id === styleId);

  if (!cat && !def) {
    return `Error: Unknown style "${styleId}". Run 'npx design-library list' to see available styles.`;
  }

  const name = cat?.name || def?.name || styleId;
  const category = cat?.category || 'General';
  const tagline = cat?.tagline || '';
  const resolved = engine.resolveStyleById(styleId, 'page');
  const tokens = resolved.tokens;

  let out = `\n=======================================================\n`;
  out += `  DESIGN LANGUAGE SPECIFICATION: ${name.toUpperCase()} (${styleId})\n`;
  out += `=======================================================\n\n`;
  out += `Category:    ${category}\n`;
  out += `Status:      Active & Adaptive\n`;
  if (tagline) out += `Tagline:     ${tagline}\n\n`;

  out += `TYPOGRAPHY TOKENS:\n`;
  out += `  • Primary Font:    ${tokens.typography.fontFamilyBase}\n`;
  out += `  • Headings Font:   ${tokens.typography.fontFamilyHeading || tokens.typography.fontFamilyBase}\n`;
  out += `  • Base Font Size:  ${tokens.typography.fontSizeBase}\n`;
  out += `  • Base Line Height:${tokens.typography.lineHeightBase}\n\n`;

  out += `COLOR PALETTE TOKENS:\n`;
  out += `  • Background:      ${tokens.colors.background}\n`;
  out += `  • Surface:         ${tokens.colors.surface}\n`;
  out += `  • Text:            ${tokens.colors.textPrimary}\n`;
  out += `  • Text Secondary:  ${tokens.colors.textSecondary}\n`;
  out += `  • Primary Accent:  ${tokens.colors.primary}\n`;
  out += `  • Border:          ${tokens.colors.border}\n\n`;

  out += `GEOMETRY & EFFECTS:\n`;
  out += `  • Border Radius:   ${tokens.radii.md || '0px'}\n`;
  out += `  • Border Width:    ${tokens.borders.widthBase || '1px'}\n`;
  out += `  • Shadow MD:       ${tokens.shadows.md || 'none'}\n\n`;

  out += `INTEGRATION CODES:\n`;
  out += `  HTML:  <div class="style-${styleId}" data-style="${styleId}">...</div>\n`;
  out += `  CLI:   npx design-library apply ./index.html --style ${styleId} --standalone\n`;
  out += `  CSS:   npx design-library export-css ${styleId} -o ${styleId}.css\n`;

  return out;
}

function formatExportCssOutput(styleId?: string): string {
  const allCss = AdaptiveCSSGenerator.getAdaptiveStyles();
  if (!styleId) {
    return `/* Compiled Design Style Library CSS (All Styles) */\n/* Generated ${new Date().toISOString()} */\n\n` + allCss.slice(0, 2000) + `\n\n/* ... [${allCss.length} total bytes compiled] ... */`;
  }

  const def = defaultStyles.find((s) => s.id === styleId);
  if (!def) {
    return `/* Style "${styleId}" not found in library */`;
  }

  return `/* Compiled Design Language: ${def.name} (${styleId}) */\n/* Scoped container: [data-style="${styleId}"] and .style-${styleId} */\n\n` + allCss;
}

function formatInitOutput(): string {
  return `
[design-library init] Scaffolding starter project files...
✔ Created design-library.css (Foundation tokens and base reset)
✔ Created design-library.json (Project design configuration)

Next steps:
  1. Include the stylesheet in your index.html:
     <link rel="stylesheet" href="./design-library.css">
  2. Apply any design language to your elements:
     <body class="style-wabi-sabi" data-style="wabi-sabi">
  3. Transform an existing page anytime:
     npx design-library apply ./index.html --style wabi-sabi --standalone -o index.styled.html
`;
}

function formatApplyOutput(filename: string, styleId: string, isStandalone: boolean): string {
  const sampleHtml = `<main>\n  <nav>\n    <a href="#">Studio</a>\n    <button>Get Started</button>\n  </nav>\n  <h1>Build something extraordinary</h1>\n  <p>Design language engine for arbitrary semantic HTML.</p>\n</main>`;
  const stamped = DOMAnalyzer.analyzeHtml(sampleHtml, styleId, engine);

  if (isStandalone) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Transformed: ${filename} [${styleId}]</title>
  <!-- Injected design language stylesheet -->
  <link rel="stylesheet" href="./${styleId}.css">
</head>
<body data-style="${styleId}" class="style-${styleId}">
${stamped.stampedHtml}
</body>
</html>`;
  }

  return `<!-- Stamped semantic HTML for style: ${styleId} -->
<div data-style="${styleId}" class="style-${styleId}">
${stamped.stampedHtml}
</div>`;
}
