export interface DocSection {
  id: string;
  title: string;
  category: string;
  description: string;
  keywords: string[];
}

export interface DocCategory {
  title: string;
  items: DocSection[];
}

export const DOC_CATEGORIES: DocCategory[] = [
  {
    title: 'GETTING STARTED',
    items: [
      {
        id: 'intro',
        title: 'Introduction',
        category: 'GETTING STARTED',
        description: 'Design systems, applied in seconds. Learn the philosophy and value proposition.',
        keywords: ['intro', 'introduction', 'overview', 'philosophy', 'about', 'concept'],
      },
      {
        id: 'installation',
        title: 'Installation',
        category: 'GETTING STARTED',
        description: 'Install design-library via npm, pnpm, yarn, or bun with zero build friction.',
        keywords: ['install', 'installation', 'npm', 'pnpm', 'yarn', 'bun', 'setup'],
      },
      {
        id: 'quick-start',
        title: 'Quick Start',
        category: 'GETTING STARTED',
        description: 'The fastest 30-second path from zero to an art-directed styled component.',
        keywords: ['quick start', 'quickstart', 'fast', 'getting started', 'example', 'first'],
      },
      {
        id: 'first-style',
        title: 'Your First Style',
        category: 'GETTING STARTED',
        description: 'Step-by-step walkthrough applying Brutalism or Bauhaus to an existing HTML block.',
        keywords: ['first style', 'walkthrough', 'tutorial', 'brutalism', 'bauhaus', 'hands-on'],
      },
    ],
  },
  {
    title: 'USAGE',
    items: [
      {
        id: 'element',
        title: 'Apply to an Element',
        category: 'USAGE',
        description: 'Style individual buttons, inputs, cards, or headings with precision.',
        keywords: ['element', 'button', 'card', 'input', 'heading', 'badge', 'single'],
      },
      {
        id: 'section',
        title: 'Apply to a Section',
        category: 'USAGE',
        description: 'Imbue entire hero, pricing, testimonials, or footer sections with unified art direction.',
        keywords: ['section', 'hero', 'pricing', 'features', 'footer', 'testimonials', 'container'],
      },
      {
        id: 'page',
        title: 'Apply to a Page',
        category: 'USAGE',
        description: 'Transform complete landing pages, dashboards, portfolios, or articles at root level.',
        keywords: ['page', 'body', 'root', 'landing page', 'dashboard', 'portfolio', 'article'],
      },
      {
        id: 'composition',
        title: 'Style Composition',
        category: 'USAGE',
        description: 'Understand how styles interact, hierarchy precedence, and safe composition boundaries.',
        keywords: ['composition', 'combining', 'nesting', 'precedence', 'conflicts', 'inheritance'],
      },
      {
        id: 'overrides',
        title: 'Overrides & Customization',
        category: 'USAGE',
        description: 'Customize palette, typography, radii, and shadows without breaking system grammar.',
        keywords: ['overrides', 'customization', 'tokens', 'theme', 'variables', 'colors'],
      },
      {
        id: 'scopes',
        title: 'Scopes & Hierarchies',
        category: 'USAGE',
        description: 'Hierarchical scope cascade: page -> section -> container -> component isolation.',
        keywords: ['scopes', 'hierarchical', 'cascade', 'nesting', 'data-style-id', 'ds-scope'],
      },
      {
        id: 'responsive',
        title: 'Responsive Usage',
        category: 'USAGE',
        description: 'Fluid clamp typography, container queries, and mobile-adaptive rules out of the box.',
        keywords: ['responsive', 'mobile', 'fluid', 'clamp', 'viewport', 'breakpoints'],
      },
    ],
  },
  {
    title: 'CODE',
    items: [
      {
        id: 'html',
        title: 'HTML & Vanilla Web',
        category: 'CODE',
        description: 'Use the library in pure HTML5 without Node.js, React, or bundlers.',
        keywords: ['html', 'vanilla', 'cdn', 'stylesheet', 'static', 'no-framework'],
      },
      {
        id: 'react',
        title: 'React Integration',
        category: 'CODE',
        description: 'React components: StyleEngineProvider, StyleScope, Button, Card, and useStyleEngine.',
        keywords: ['react', 'jsx', 'tsx', 'components', 'hooks', 'provider', 'scope'],
      },
      {
        id: 'nextjs',
        title: 'Next.js (App Router)',
        category: 'CODE',
        description: 'SSR-safe integration with Next.js 13/14/15 App Router, layout.tsx, and server components.',
        keywords: ['nextjs', 'next.js', 'app router', 'ssr', 'layout', 'server components'],
      },
      {
        id: 'javascript',
        title: 'JavaScript / TypeScript API',
        category: 'CODE',
        description: 'Programmatic usage with StyleEngine, StyleRegistry, and CSSAdapter.',
        keywords: ['javascript', 'typescript', 'api', 'engine', 'programmatic', 'node'],
      },
      {
        id: 'css',
        title: 'CSS Architecture & Variables',
        category: 'CODE',
        description: 'Deep dive into the CSS custom property contract (--ds-*) and stylesheet layering.',
        keywords: ['css', 'variables', 'custom properties', 'styles', 'architecture', 'layers'],
      },
      {
        id: 'cli',
        title: 'CLI Tools & Workflows',
        category: 'CODE',
        description: 'Command-line execution: list, info, apply, init, and export-css commands.',
        keywords: ['cli', 'command line', 'npx', 'terminal', 'design-library', 'design-engine', 'scripts'],
      },
    ],
  },
  {
    title: 'STYLES',
    items: [
      {
        id: 'style-install',
        title: 'Installing & Bundling Styles',
        category: 'STYLES',
        description: 'Learn how styles are bundled, tree-shaken, and loaded dynamically.',
        keywords: ['install style', 'tree shaking', 'bundle', 'imports', 'performance'],
      },
      {
        id: 'available-styles',
        title: 'Available Styles Overview',
        category: 'STYLES',
        description: 'Explore the 5 aesthetic pillars spanning Modern, Expressive, Depth, Heritage, & Organic.',
        keywords: ['available styles', 'categories', 'modern', 'expressive', 'retro', 'organic', 'depth'],
      },
      {
        id: 'style-reference',
        title: 'Complete Style Reference',
        category: 'STYLES',
        description: 'Live interactive directory of all 32 implemented design languages with tokens and examples.',
        keywords: ['style reference', 'catalog', 'brutalism', 'bauhaus', 'cyberpunk', 'all styles', 'tokens'],
      },
    ],
  },
  {
    title: 'ADVANCED',
    items: [
      {
        id: 'customization',
        title: 'Customizing a Style',
        category: 'ADVANCED',
        description: 'Fine-tune design languages with bespoke brand colors, fonts, and borders.',
        keywords: ['customization', 'branding', 'bespoke', 'theme', 'extend'],
      },
      {
        id: 'tokens',
        title: 'Design Tokens Contract',
        category: 'ADVANCED',
        description: 'Complete specification of DesignTokens: colors, typography, spacing, radii, shadows, motion.',
        keywords: ['tokens', 'design tokens', 'specification', 'contract', 'schema'],
      },
      {
        id: 'combining-styles',
        title: 'Combining Styles',
        category: 'ADVANCED',
        description: 'Techniques for harmonious multi-style interfaces (e.g. Cyberpunk hero + Dark Mode cards).',
        keywords: ['combining', 'multi-style', 'hybrid', 'fusion', 'pairing'],
      },
      {
        id: 'custom-rules',
        title: 'Custom Rules & Adapters',
        category: 'ADVANCED',
        description: 'Extending StyleRegistry and writing custom semantic CSS rules for unique archetypes.',
        keywords: ['custom rules', 'semantic css', 'recipes', 'extend engine'],
      },
      {
        id: 'exporting',
        title: 'Exporting Styles & CSS',
        category: 'ADVANCED',
        description: 'Export static standalone CSS stylesheets for distribution or zero-JS environments.',
        keywords: ['exporting', 'export css', 'static', 'build', 'distribution'],
      },
      {
        id: 'build-production',
        title: 'Build & Production',
        category: 'ADVANCED',
        description: 'Production optimization: CSS purging, bundle footprints, font preloading, CWV performance.',
        keywords: ['build', 'production', 'performance', 'bundling', 'vite', 'webpack', 'core web vitals'],
      },
      {
        id: 'troubleshooting',
        title: 'Troubleshooting Guide',
        category: 'ADVANCED',
        description: 'Diagnostic answers for font loading, class recognition, framework overrides, and build issues.',
        keywords: ['troubleshooting', 'debugging', 'faq', 'issues', 'problems', 'fix', 'help'],
      },
      {
        id: 'zero-to-production',
        title: 'From Zero to Production in 5 Mins',
        category: 'ADVANCED',
        description: 'Complete step-by-step master tutorial: create project -> install -> style -> deploy.',
        keywords: ['zero to production', 'tutorial', 'end to end', '5 minutes', 'deploy', 'guide'],
      },
      {
        id: 'api-reference',
        title: 'Core API Reference',
        category: 'ADVANCED',
        description: 'Exhaustive TypeScript API reference for StyleEngine, StyleResolver, StyleScope, and types.',
        keywords: ['api reference', 'typescript', 'types', 'methods', 'interfaces', 'exports'],
      },
    ],
  },
];

export const ALL_SECTIONS = DOC_CATEGORIES.flatMap((c) => c.items);

export function getSectionById(id: string): DocSection | undefined {
  return ALL_SECTIONS.find((s) => s.id === id);
}

export function getAdjacentSections(currentId: string): { prev?: DocSection; next?: DocSection } {
  const index = ALL_SECTIONS.findIndex((s) => s.id === currentId);
  if (index === -1) return {};
  return {
    prev: index > 0 ? ALL_SECTIONS[index - 1] : undefined,
    next: index < ALL_SECTIONS.length - 1 ? ALL_SECTIONS[index + 1] : undefined,
  };
}
