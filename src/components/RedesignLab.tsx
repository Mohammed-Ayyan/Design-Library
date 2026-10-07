import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useStyleEngine } from '../react/context/StyleEngineContext';
import { CSSAdapter } from '../core/adapters/css-adapter';
import { HTMLSanitizer } from '../core/adaptive/sanitizer';
import { brutalistSemanticCss, minimalistSemanticCss, glassmorphismSemanticCss, maximalistSemanticCss, swissDesignSemanticCss, surrealDesignSemanticCss, neoBrutalistSemanticCss, neoClassicalSemanticCss, luxuryTypographySemanticCss, editorialDesignSemanticCss, y2kAestheticSemanticCss, bentoGridSemanticCss, pixelArtSemanticCss, conceptualSketchSemanticCss, etherealSemanticCss, bohemianSemanticCss, cyberpunkSemanticCss, anthropomorphicSemanticCss, neumorphicSemanticCss, darkModeUiSemanticCss, scrapbookSemanticCss, claymorphicSemanticCss, victorianSemanticCss, cybercoreSemanticCss, synthwaveSemanticCss, graffitiSemanticCss, gothicSemanticCss, mixedMediaSemanticCss, artDecoSemanticCss, bauhausSemanticCss, solarpunkSemanticCss, wabiSabiSemanticCss } from '../styles';
import {
  Code2,
  Sparkles,
  RotateCcw,
  ShieldCheck,
  Eye,
  Sliders,
  FileCode,
  Maximize2,
  Minimize2,
  ExternalLink,
  Layers,
  Wand2,
} from 'lucide-react';

interface SampleTemplate {
  id: string;
  name: string;
  category: string;
  html: string;
}

const SAMPLE_TEMPLATES: SampleTemplate[] = [
  {
    id: 'studio-stress',
    name: 'Sample 1 — Portfolio / Studio',
    category: 'Portfolio',
    html: `<main>
  <header>
    <nav>
      <a href="#">Studio</a>
      <a href="#">Work</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <section>
    <p>Independent Digital Practice</p>
    <h1>We build things people remember.</h1>
    <p>
      Strategy, identity, and digital systems for ambitious companies.
    </p>
    <button>View Our Work</button>
  </section>

  <section>
    <h2>Selected Work</h2>

    <article>
      <h3>Atlas</h3>
      <p>Brand identity & design engineering</p>
    </article>

    <article>
      <h3>North</h3>
      <p>Digital product architecture</p>
    </article>

    <article>
      <h3>Forma</h3>
      <p>Editorial publication system</p>
    </article>
  </section>

  <footer>
    <p>© 2026 Studio. All rights reserved.</p>
    <p>Designed in Berlin & Tokyo</p>
  </footer>
</main>`,
  },
  {
    id: 'pricing',
    name: 'Sample 2 — SaaS Pricing',
    category: 'Pricing',
    html: `<section>
  <header>
    <p>Transparent Infrastructure Tiers</p>
    <h2>Flexible plans for every team</h2>
    <p>Scale compute, storage, and automated orchestration with zero surprises.</p>
  </header>

  <div>
    <article>
      <h3>Starter</h3>
      <p>Essential capabilities for solo developers and prototypes.</p>
      <strong>$19 / month</strong>
      <button>Start Free Trial</button>
    </article>

    <article>
      <h3>Professional</h3>
      <p>Full suite of collaborative workflows and real-time telemetry.</p>
      <strong>$79 / month</strong>
      <button>Upgrade to Pro</button>
    </article>

    <article>
      <h3>Enterprise</h3>
      <p>Dedicated compute clusters, custom SLA, and 24/7 engineering support.</p>
      <strong>$299 / month</strong>
      <button>Contact Enterprise</button>
    </article>
  </div>
</section>`,
  },
  {
    id: 'article',
    name: 'Sample 3 — Editorial Article',
    category: 'Article',
    html: `<article>
  <header>
    <p>Published in Design Systems Quarterly • 6 min read</p>
    <h1>The Autonomous Canvas: Toward Adaptive Design Languages</h1>
    <p>Why modern interfaces must emerge from structural relationships rather than rigid templates.</p>
  </header>

  <p>For more than a decade, web design workflows have relied on component library skins applied over identical spatial grids. The result is visual homogeny where every product looks like a variation of the same SaaS landing page.</p>

  <blockquote>
    "True design intelligence begins when spatial composition emerges from semantic structure and design language grammar, rather than static templates."
  </blockquote>

  <p>When an engine acts as an Art Director, it first understands what kind of content it is observing—its hierarchy, paragraph density, and interactive roles. Only then does it determine how a specific design grammar should articulate that content across the viewport.</p>
</article>`,
  },
  {
    id: 'dashboard',
    name: 'Sample 4 — Dashboard / Metrics',
    category: 'Dashboard',
    html: `<section>
  <header>
    <p>Cluster Telemetry • Real-Time Stream</p>
    <h2>System Diagnostic Telemetry</h2>
    <p>Real-time health status and performance telemetry from distributed edge nodes.</p>
  </header>

  <div>
    <article>
      <h3>Throughput Rate</h3>
      <strong>48.2k req/s</strong>
      <p>Cluster capacity operating at peak efficiency.</p>
    </article>

    <article>
      <h3>Global Latency</h3>
      <strong>12 ms</strong>
      <p>Sub-millisecond edge resolution across multi-region.</p>
    </article>

    <article>
      <h3>CPU Saturation</h3>
      <strong>34%</strong>
      <p>Optimal compute headroom with auto-balancing.</p>
    </article>

    <article>
      <h3>Active Nodes</h3>
      <strong>1,024</strong>
      <p>Zero degraded nodes in current deployment ring.</p>
    </article>
  </div>

  <table>
    <thead>
      <tr>
        <th>Region</th>
        <th>Node Count</th>
        <th>Traffic Share</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>us-east-1 (N. Virginia)</td>
        <td>512</td>
        <td>42.5%</td>
        <td>HEALTHY</td>
      </tr>
      <tr>
        <td>eu-central-1 (Frankfurt)</td>
        <td>320</td>
        <td>31.0%</td>
        <td>HEALTHY</td>
      </tr>
      <tr>
        <td>ap-northeast-1 (Tokyo)</td>
        <td>192</td>
        <td>26.5%</td>
        <td>HEALTHY</td>
      </tr>
    </tbody>
  </table>
</section>`,
  },
  {
    id: 'ecommerce',
    name: 'Sample 5 — E-Commerce Product',
    category: 'E-Commerce',
    html: `<section>
  <header>
    <nav>
      <a href="#">Catalog</a>
      <a href="#">Outerwear</a>
      <a href="#">Accessories</a>
      <a href="#">Cart (1)</a>
    </nav>
  </header>

  <article>
    <p>Heavy Duty Technical Wear</p>
    <h1>Selvedge Canvas Field Coat</h1>
    <strong>$245.00 USD</strong>
    <p>
      Constructed from 16oz unwashed Japanese duck canvas. Triple-needle chain stitched flat-felled seams, custom solid brass hardware, and reinforced corduroy collar.
    </p>

    <div>
      <p>Select Size:</p>
      <button>Small</button>
      <button>Medium</button>
      <button>Large</button>
      <button>X-Large</button>
    </div>

    <button>Add to Cart — $245.00</button>
  </article>

  <section>
    <h3>Product Specifications</h3>
    <ul>
      <li>100% Cotton 16oz Selvedge Canvas woven in Kojima, Okayama</li>
      <li>Custom debossed raw copper shank buttons</li>
      <li>Two exterior bellow pockets with snap flap closures</li>
      <li>Interior welt utility pocket with pencil slot</li>
      <li>Made in limited batches of 150 pieces</li>
    </ul>
  </section>
</section>`,
  },
  {
    id: 'restaurant',
    name: 'Sample 6 — Restaurant Menu',
    category: 'Hospitality',
    html: `<section>
  <header>
    <p>EST. 1984 • LOWER EAST SIDE, NY</p>
    <h1>Katz & Sons Provisions</h1>
    <p>Wood-fired hearth kitchen, natural wines, and architectural roast espresso.</p>
  </header>

  <article>
    <h2>Provisions</h2>
    <ul>
      <li>
        <strong>Double Smoked Pastrami</strong> — $22
        <p>Heritage rye, stoneground house mustard, fermented caraway kraut.</p>
      </li>
      <li>
        <strong>Cast Iron Smashed Fingerlings</strong> — $12
        <p>Rosemary sea salt, roasted bone marrow, charred garlic aioli.</p>
      </li>
      <li>
        <strong>Wood-Fired Wild Maitake</strong> — $18
        <p>Smoked egg yolk emulsion, toasted hazelnuts, mountain sorrel.</p>
      </li>
    </ul>
  </article>

  <article>
    <h2>Libations</h2>
    <ul>
      <li>
        <strong>Architectural Cold Brew Tonic</strong> — $7
        <p>Single origin Ethiopian Yirgacheffe, citrus tonic, flamed orange peel.</p>
      </li>
      <li>
        <strong>Pet-Nat Natural Riesling</strong> — $15
        <p>Finger Lakes 2022, un-fined, unfiltered, crisp saline finish.</p>
      </li>
    </ul>
  </article>

  <footer>
    <p>Dinner served Tuesday – Sunday, 5pm to 11pm.</p>
    <p>Reservations recommended. Walk-ins welcome at the counter.</p>
  </footer>
</section>`,
  },
  {
    id: 'contact',
    name: 'Sample 7 — Contact Form',
    category: 'Forms',
    html: `<section>
  <header>
    <p>Engineering & Design Inquiries</p>
    <h2>Start a New Project</h2>
    <p>Tell us about your team, technical requirements, and target timeline.</p>
  </header>

  <form>
    <div>
      <label>Full Name</label>
      <input type="text" placeholder="Ada Lovelace" required>
    </div>

    <div>
      <label>Work Email</label>
      <input type="email" placeholder="ada@analytical-engine.io" required>
    </div>

    <div>
      <label>Project Scope</label>
      <select>
        <option>Design System Architecture</option>
        <option>Product Design & Prototyping</option>
        <option>Full-Stack Web Engineering</option>
      </select>
    </div>

    <div>
      <label>Project Brief & Requirements</label>
      <textarea rows="4" placeholder="Describe the problem, target audience, and key deliverables..."></textarea>
    </div>

    <button type="submit">Submit Project Brief →</button>
  </form>
</section>`,
  },
  {
    id: 'hero',
    name: 'Sample 8 — Cloud Infrastructure Hero',
    category: 'Landing',
    html: `<section>
  <header>
    <p>Autonomous Compute Engine</p>
    <h1>Next-Gen Cloud Orchestration</h1>
    <p>Workload scheduling with zero human intervention and sub-millisecond failover.</p>
    <button>Deploy Cluster</button>
  </header>
</section>`,
  },
];

const SEMANTIC_CSS_MAP: Record<string, string> = {
  brutalism: brutalistSemanticCss,
  minimalism: minimalistSemanticCss,
  glassmorphism: glassmorphismSemanticCss,
  maximalism: maximalistSemanticCss,
  'swiss-design': swissDesignSemanticCss,
  surrealism: surrealDesignSemanticCss,
  'neo-brutalism': neoBrutalistSemanticCss,
  'neo-classical': neoClassicalSemanticCss,
  'luxury-typography': luxuryTypographySemanticCss,
  'editorial-design': editorialDesignSemanticCss,
  'y2k-aesthetic': y2kAestheticSemanticCss,
  'bento-grid': bentoGridSemanticCss,
  'pixel-art': pixelArtSemanticCss,
  'conceptual-sketch': conceptualSketchSemanticCss,
  ethereal: etherealSemanticCss,
  bohemian: bohemianSemanticCss,
  cyberpunk: cyberpunkSemanticCss,
  anthropomorphic: anthropomorphicSemanticCss,
  neumorphism: neumorphicSemanticCss,
  'dark-mode-ui': darkModeUiSemanticCss,
  scrapbook: scrapbookSemanticCss,
  claymorphism: claymorphicSemanticCss,
  victorian: victorianSemanticCss,
  cybercore: cybercoreSemanticCss,
  synthwave: synthwaveSemanticCss,
  graffiti: graffitiSemanticCss,
  gothic: gothicSemanticCss,
  'mixed-media': mixedMediaSemanticCss,
  'art-deco': artDecoSemanticCss,
  bauhaus: bauhausSemanticCss,
  solarpunk: solarpunkSemanticCss,
  'wabi-sabi': wabiSabiSemanticCss,
};

interface HybridPreset {
  name: string;
  expression: string;
  tagline: string;
  badge: string;
}

const POPULAR_HYBRID_PRESETS: HybridPreset[] = [
  {
    name: 'Wabi-Sabi + Glassmorphism',
    expression: '/name = wabi-sabi + glassmorphism',
    tagline: 'Zen organic washi paper with frosted specular glass depth',
    badge: 'Zen Frosted',
  },
  {
    name: 'Brutalism + Minimalism',
    expression: '/name = brutalism + minimalism',
    tagline: 'High-contrast structural slabs tempered by serene whitespace',
    badge: 'Restrained Monolith',
  },
  {
    name: 'Cyberpunk + Synthwave',
    expression: '/name = cyberpunk + synthwave',
    tagline: 'Obsidian terminal matrix layered with outrun neon magenta glow',
    badge: 'Outrun Matrix',
  },
  {
    name: 'Solarpunk + Neo-Brutalism',
    expression: '/name = solarpunk + neo-brutalism',
    tagline: 'Verdant botanical optimism merged with bold tactile geometry',
    badge: 'Eco Pop',
  },
  {
    name: 'Bauhaus + Glassmorphism',
    expression: '/name = bauhaus + glassmorphism',
    tagline: 'Constructivist primary geometry rendered on translucent frosted planes',
    badge: 'Constructivist Glass',
  },
  {
    name: 'Swiss Design + Dark Mode UI',
    expression: '/name = swiss-design + dark-mode-ui',
    tagline: 'International typographic precision against an obsidian dark canvas',
    badge: 'Obsidian Grid',
  },
  {
    name: 'Claymorphism + Y2K Aesthetic',
    expression: '/name = claymorphism + y2k-aesthetic',
    tagline: 'Tactile inflated 3D clay volumes with bubbly chrome highlights',
    badge: 'Tactile Chrome',
  },
  {
    name: 'Luxury Typography + Glassmorphism',
    expression: '/name = luxury-typography + glassmorphism',
    tagline: 'Authoritative Didone editorial serifs on ethereal frosted surfaces',
    badge: 'Editorial Frosted',
  },
];

export const RedesignLab: React.FC = () => {
  const { engine } = useStyleEngine();
  const [htmlInput, setHtmlInput] = useState<string>(SAMPLE_TEMPLATES[0].html);
  const [appliedHtml, setAppliedHtml] = useState<string>(SAMPLE_TEMPLATES[0].html);
  const [selectedStyleId, setSelectedStyleId] = useState<string>('brutalism');
  const [viewMode, setViewMode] = useState<'comparison' | 'styled' | 'source'>('comparison');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Split Slider state
  const [splitPos, setSplitPos] = useState<number>(50);
  const [isDraggingSplit, setIsDraggingSplit] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Style Composition / Hybrid State
  const [isHybridMode, setIsHybridMode] = useState<boolean>(false);
  const [primaryHybridId, setPrimaryHybridId] = useState<string>('wabi-sabi');
  const [secondaryHybridId, setSecondaryHybridId] = useState<string>('glassmorphism');
  const [hybridExpressionInput, setHybridExpressionInput] = useState<string>('/name = wabi-sabi + glassmorphism');

  const realStyles: { id: string; name: string; desc: string }[] = [
    { id: 'brutalism', name: 'Brutalism', desc: 'Bold geometry, thick borders, tactile contrast' },
    { id: 'minimalism', name: 'Minimalism', desc: 'Restrained typography, hairline borders, spacious hierarchy' },
    { id: 'glassmorphism', name: 'Glassmorphism', desc: 'Translucent layers, specular illumination, frosted depth' },
    { id: 'maximalism', name: 'Maximalism', desc: 'Layered tactile parchment, expressive display serifs, crimson and saffron ornament' },
    { id: 'swiss-design', name: 'Swiss Design', desc: 'Objective sans-serif, asymmetric grid, stark crimson accent' },
    { id: 'surrealism', name: 'Surrealism', desc: 'Dreamlike logic, celestial orbits, poetic contradiction, uncanny depth' },
    { id: 'neo-brutalism', name: 'Neo-Brutalism', desc: 'Tactile outlines, hard shadows, friendly geometry, saturated pop' },
    { id: 'neo-classical', name: 'Neo-Classical', desc: 'Architectural proportion, editorial serifs, structural rules, plinth bases' },
    { id: 'luxury-typography', name: 'Luxury Typography', desc: 'Editorial Didone serifs, whisper uppercase sans, champagne hairlines' },
    { id: 'editorial-design', name: 'Editorial Design', desc: 'Broadsheet rules, authoritative serifs, byline decks' },
    { id: 'y2k-aesthetic', name: 'Y2K Aesthetic', desc: 'Glossy aqua gel, chrome highlights, bubbly geometry, cyber optimism' },
    { id: 'bento-grid', name: 'Bento Grid', desc: 'Asymmetrical modular tiles, varied spatial hierarchy, modern surfaces' },
    { id: 'pixel-art', name: 'Pixel Art', desc: '8-bit arcade nostalgia, aliased stepped borders, bitmap display, retro gaming telemetry' },
    { id: 'conceptual-sketch', name: 'Conceptual Sketch', desc: 'Drafting vellum grid, graphite rules, blue/red annotations, concept modules' },
    { id: 'ethereal', name: 'Ethereal', desc: 'Illuminated air foundation, weightless typography, luminous pearl surfaces' },
    { id: 'bohemian', name: 'Bohemian', desc: 'Warm cream & parchment canvas, Fraunces serifs, terracotta & mustard accents, collected eclectic warmth' },
    { id: 'cyberpunk', name: 'Cyberpunk', desc: 'Terminal void, neon cyan/magenta glow, scanlines, HUD telemetry' },
    { id: 'anthropomorphic', name: 'Anthropomorphic', desc: 'Warm cream, organic asymmetrical curves, living micro-interactions, friendly conversational typography' },
    { id: 'neumorphism', name: 'Neumorphism', desc: 'Soft extruded surfaces, dual-direction soft shadows, tactile depth, monochromatic molded controls' },
    { id: 'dark-mode-ui', name: 'Dark Mode UI', desc: 'Layered dark surfaces, controlled contrast, subtle neutral borders, comfortable long sessions' },
    { id: 'scrapbook', name: 'Scrapbook', desc: 'Memory book aesthetic, washi tape cues, handwritten notes, clipped ephemera, paper cards' },
    { id: 'claymorphism', name: 'Claymorphism', desc: 'Soft inflated 3D clay volumes, pillowy geometry, inner highlights, friendly tactile controls' },
    { id: 'wabi-sabi', name: 'Wabi-Sabi', desc: 'Washi paper warmth, matcha green, organic simplicity, serif tones' },
    { id: 'victorian', name: 'Victorian', desc: 'Aged parchment, ornate borders, Castoro & EB Garamond serifs, botanical engraving' },
    { id: 'cybercore', name: 'Cybercore', desc: 'Obsidian void, phosphor green, scanlines, digital identity, monospace telemetry' },
    { id: 'synthwave', name: 'Synthwave', desc: 'Midnight purple, neon magenta/cyan, outrun gradients, retro arcade futurism' },
    { id: 'graffiti', name: 'Graffiti', desc: 'Asphalt surfaces, spray crimson tags, street stickers, stencil typography' },
    { id: 'gothic', name: 'Gothic', desc: 'Cathedral stone, pointed lancet arches, Cinzel serifs, antique brass, illuminated darkness' },
    { id: 'mixed-media', name: 'Mixed Media', desc: 'Cotton rag paper, matted photography, collage layers, vermilion registration marks' },
    { id: 'art-deco', name: 'Art Deco', desc: 'Roaring 1920s luxury, sunburst motifs, stepped chevrons, metallic gold ornament' },
    { id: 'bauhaus', name: 'Bauhaus', desc: 'Form follows function, primary geometry, red, blue, and yellow' },
    { id: 'solarpunk', name: 'Solarpunk', desc: 'Verdant greens, sunlit amber, organic curves, techno-ecological optimism' },
  ];

  // Measure container width for the slider overlay so raw text never reflows or rewraps
  useEffect(() => {
    const updateWidth = () => {
      if (sliderContainerRef.current) {
        setContainerWidth(sliderContainerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && sliderContainerRef.current) {
      ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setContainerWidth(entry.contentRect.width);
        }
      });
      ro.observe(sliderContainerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateWidth);
      if (ro) ro.disconnect();
    };
  }, [viewMode, isFullscreen]);

  // Pointer drag listener for the Before/After split slider
  useEffect(() => {
    if (!isDraggingSplit) return;

    const handlePointerMove = (clientX: number) => {
      if (!sliderContainerRef.current) return;
      const rect = sliderContainerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
      setSplitPos(pct);
    };

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      handlePointerMove(e.clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX);
      }
    };

    const onPointerUp = () => {
      setIsDraggingSplit(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onPointerUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onPointerUp);
    };
  }, [isDraggingSplit]);

  // Fullscreen event & Escape listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        handleExitFullscreen();
      }
    };
    const handleFsChange = () => {
      if (!document.fullscreenElement && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFsChange);
    };
  }, [isFullscreen]);

  // Sanitize the HTML safely
  const sanitizedHtml = useMemo(() => {
    return HTMLSanitizer.sanitize(appliedHtml);
  }, [appliedHtml]);

  // Resolve style tokens via the Core Style Engine (supports single and hybrid styles)
  const resolved = useMemo(() => {
    return engine.resolveStyleById(selectedStyleId, 'page');
  }, [engine, selectedStyleId]);

  // Generate CSS variables for the container
  const cssVariables = useMemo(() => {
    return CSSAdapter.toStyleObject(resolved.cssVariables);
  }, [resolved]);

  const handleApply = () => {
    setAppliedHtml(htmlInput);
  };

  const handlePasteClipboard = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        const text = await navigator.clipboard.readText();
        if (text && text.trim().length > 0) {
          setHtmlInput(text);
          setAppliedHtml(text);
        }
      }
    } catch {
      // If clipboard access is restricted, user can paste into textarea directly
    }
  };

  const handleLoadTemplate = (template: SampleTemplate) => {
    setHtmlInput(template.html);
    setAppliedHtml(template.html);
  };

  const handleClear = () => {
    const empty = `<div>\n  <h2>Custom Section</h2>\n  <p>Paste your HTML here...</p>\n</div>`;
    setHtmlInput(empty);
    setAppliedHtml(empty);
  };

  const handleToggleFullscreen = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      handleExitFullscreen();
    }
  };

  const handleExitFullscreen = () => {
    setIsFullscreen(false);
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Style composition / hybrid handlers
  const handleSelectHybridPrimary = (id: string) => {
    setPrimaryHybridId(id);
    const expr = `/name = ${id} + ${secondaryHybridId}`;
    setHybridExpressionInput(expr);
    setSelectedStyleId(expr);
  };

  const handleSelectHybridSecondary = (id: string) => {
    setSecondaryHybridId(id);
    const expr = `/name = ${primaryHybridId} + ${id}`;
    setHybridExpressionInput(expr);
    setSelectedStyleId(expr);
  };

  const handleApplyPreset = (preset: HybridPreset) => {
    setIsHybridMode(true);
    setHybridExpressionInput(preset.expression);
    setSelectedStyleId(preset.expression);
    const parts = engine.parseStyleQuery(preset.expression).constituentIds;
    if (parts[0]) setPrimaryHybridId(parts[0]);
    if (parts[1]) setSecondaryHybridId(parts[1]);
  };

  const handleExpressionChange = (val: string) => {
    setHybridExpressionInput(val);
    setSelectedStyleId(val);
  };

  const activeConstituents = resolved.constituentStyles && resolved.constituentStyles.length > 0
    ? resolved.constituentStyles
    : [resolved.styleId];

  const activeSemanticCss = activeConstituents
    .map((id) => SEMANTIC_CSS_MAP[id] || '')
    .join('\n');

  const handleOpenInNewTab = () => {
    const standaloneDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${resolved.styleName} — Style Engine Result</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      ${Object.entries(resolved.cssVariables).map(([k, v]) => `${k}: ${v};`).join('\n      ')}
    }
    *, *::before, *::after { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background-color: var(--ds-color-background, #ffffff);
      color: var(--ds-color-text-primary, #000000);
      font-family: var(--ds-font-family-base, sans-serif);
      line-height: var(--ds-line-height-base, 1.5);
    }
    body {
      padding: 3.5rem 1.5rem 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .page-container {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--ds-font-family-heading, sans-serif);
      color: var(--ds-color-text-primary, inherit);
      margin-top: 0;
    }
    h1 {
      font-size: var(--ds-font-size-2xl, 2.25rem);
      font-weight: var(--ds-font-weight-bold, 700);
      line-height: var(--ds-line-height-heading, 1.15);
      letter-spacing: var(--ds-letter-spacing-heading, -0.02em);
      margin-bottom: 1rem;
    }
    h2 {
      font-size: var(--ds-font-size-xl, 1.75rem);
      font-weight: var(--ds-font-weight-bold, 700);
      line-height: var(--ds-line-height-heading, 1.2);
      letter-spacing: var(--ds-letter-spacing-heading, -0.02em);
      margin-bottom: 0.75rem;
    }
    h3 {
      font-size: var(--ds-font-size-lg, 1.25rem);
      font-weight: var(--ds-font-weight-bold, 700);
      margin-bottom: 0.5rem;
    }
    p {
      color: var(--ds-color-text-secondary, inherit);
      font-size: var(--ds-font-size-base, 1rem);
      line-height: var(--ds-line-height-base, 1.55);
      margin-top: 0;
      margin-bottom: 1rem;
    }
    button, input[type="submit"] {
      font-family: var(--ds-font-family-heading, inherit);
      font-size: var(--ds-font-size-sm, 0.875rem);
      font-weight: var(--ds-font-weight-bold, 600);
      padding: var(--ds-space-sm, 0.625rem) var(--ds-space-lg, 1.25rem);
      background-color: var(--ds-color-primary, #2563eb);
      color: var(--ds-color-primary-text, #ffffff);
      border: var(--ds-border-width-base, 1px) solid var(--ds-color-border, transparent);
      border-radius: var(--ds-radius-sm, 6px);
      box-shadow: var(--ds-shadow-sm, none);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      text-decoration: none;
      transition: all 150ms ease;
    }
    article, .card {
      background-color: var(--ds-color-surface, #ffffff);
      border: var(--ds-border-width-base, 1px) solid var(--ds-color-border, #e2e8f0);
      border-radius: var(--ds-radius-md, 8px);
      padding: var(--ds-space-lg, 1.5rem);
      box-shadow: var(--ds-shadow-sm, none);
      margin-bottom: 1.25rem;
    }
    input, select, textarea {
      background-color: var(--ds-color-surface, #ffffff);
      border: var(--ds-border-width-base, 1px) solid var(--ds-color-border, #cbd5e1);
      border-radius: var(--ds-radius-sm, 6px);
      padding: var(--ds-space-sm, 0.5rem) var(--ds-space-md, 0.75rem);
      color: var(--ds-color-text-primary, inherit);
      font-family: var(--ds-font-family-base, inherit);
      font-size: var(--ds-font-size-sm, 0.875rem);
      margin-bottom: 0.75rem;
      display: block;
      width: 100%;
      max-width: 400px;
    }
    blockquote {
      border-left: var(--ds-border-width-thick, 3px) solid var(--ds-color-primary, #2563eb);
      padding-left: var(--ds-space-lg, 1.5rem);
      margin: 1.5rem 0;
      font-style: italic;
      color: var(--ds-color-text-primary, inherit);
    }
    nav {
      display: flex;
      gap: var(--ds-space-lg, 1.5rem);
      align-items: center;
      padding-bottom: var(--ds-space-md, 1rem);
      border-bottom: var(--ds-border-width-thin, 1px) solid var(--ds-color-border, #e2e8f0);
      margin-bottom: 2rem;
    }
    a {
      color: var(--ds-color-primary, #2563eb);
      text-decoration: none;
      font-weight: 500;
    }
    strong, b {
      color: var(--ds-color-text-primary, inherit);
      font-weight: var(--ds-font-weight-bold, 700);
    }
    ${activeSemanticCss}
  </style>
</head>
<body>
  <div class="page-container ${resolved.hybridClassNames || `style-${resolved.styleId}`}" data-style="${resolved.styleId}" data-styles="${activeConstituents.join(',')}">
    ${sanitizedHtml}
  </div>
</body>
</html>`;

    const blob = new Blob([standaloneDoc], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div
      id="redesign-lab-view"
      style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '2rem 1.5rem 6rem',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Workbench Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <span
            style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: '#38bdf8',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Sparkles size={15} />
            HTML REDESIGN LAB
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              padding: '0.15rem 0.6rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            <ShieldCheck size={12} />
            Safe Sanitized Execution
          </span>
          {resolved.isHybrid && (
            <span
              style={{
                fontSize: '0.75rem',
                padding: '0.15rem 0.6rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                color: '#c084fc',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontWeight: 700,
              }}
            >
              <Wand2 size={12} />
              Hybrid Style Composition Active
            </span>
          )}
        </div>

        <h1
          style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: '#f8fafc',
            margin: '0 0 0.5rem',
            letterSpacing: '-0.025em',
          }}
        >
          Transform Arbitrary Plain HTML
        </h1>
        <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9375rem', maxWidth: '820px', lineHeight: 1.55 }}>
          Paste completely plain, unstyled HTML with <strong>no custom classes</strong>.
          The Style Engine applies single design languages or <strong>hybrid multi-language compositions</strong> directly
          to the DOM structure with an interactive draggable Before / After slider.
        </p>
      </div>

      {/* Preset Templates Quick Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
          padding: '0.75rem 1rem',
          borderRadius: '12px',
          backgroundColor: '#0f172a',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', marginRight: '0.25rem' }}>
          LOAD PRESET:
        </span>
        {SAMPLE_TEMPLATES.map((tpl) => (
          <button
            key={tpl.id}
            id={`preset-${tpl.id}`}
            onClick={() => handleLoadTemplate(tpl)}
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.8125rem',
              fontWeight: 500,
              borderRadius: '6px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backgroundColor: '#1e293b',
              color: '#cbd5e1',
              cursor: 'pointer',
              transition: 'all 120ms ease',
            }}
          >
            {tpl.name}
          </button>
        ))}
        <button
          id="btn-paste-clipboard"
          onClick={handlePasteClipboard}
          title="Paste custom HTML directly from your clipboard"
          style={{
            marginLeft: 'auto',
            padding: '0.35rem 0.75rem',
            fontSize: '0.8125rem',
            fontWeight: 600,
            borderRadius: '6px',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            color: '#38bdf8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'all 120ms ease',
          }}
        >
          <Sparkles size={12} />
          Paste Clipboard
        </button>
        <button
          id="btn-clear-editor"
          onClick={handleClear}
          style={{
            padding: '0.35rem 0.75rem',
            fontSize: '0.8125rem',
            fontWeight: 500,
            borderRadius: '6px',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            color: '#fca5a5',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <RotateCcw size={12} />
          Clear Editor
        </button>
      </div>

      {/* Two-Column Workbench Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isFullscreen ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.35fr)',
          gap: '1.5rem',
          alignItems: 'start',
        }}
      >
        {/* LEFT COLUMN: HTML EDITOR & STYLE CONTROLS (Hidden when in Fullscreen) */}
        {!isFullscreen && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              backgroundColor: '#0f172a',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Editor Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code2 size={16} color="#38bdf8" />
                <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#f8fafc' }}>
                  PASTE YOUR HTML
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: "'JetBrains Mono', monospace" }}>
                {htmlInput.length} chars • {(htmlInput.match(/\n/g) || []).length + 1} lines
              </span>
            </div>

            {/* HTML Textarea */}
            <div style={{ position: 'relative' }}>
              <textarea
                id="html-input-editor"
                value={htmlInput}
                onChange={(e) => setHtmlInput(e.target.value)}
                rows={11}
                placeholder="Paste arbitrary HTML here (e.g. <div><h1>Title</h1><p>Text</p><button>Action</button></div>)"
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: '#020617',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  resize: 'vertical',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Style Mode Selector Tabs: Single vs Style Composition */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
                  DESIGN LANGUAGE MODE:
                </span>
                <div style={{ display: 'flex', gap: '0.35rem', backgroundColor: '#1e293b', padding: '0.2rem', borderRadius: '6px' }}>
                  <button
                    id="btn-mode-single"
                    onClick={() => {
                      setIsHybridMode(false);
                      if (selectedStyleId.includes('+')) {
                        setSelectedStyleId('wabi-sabi');
                      }
                    }}
                    style={{
                      padding: '0.25rem 0.6rem',
                      fontSize: '0.75rem',
                      fontWeight: !isHybridMode ? 700 : 500,
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: !isHybridMode ? '#38bdf8' : 'transparent',
                      color: !isHybridMode ? '#020617' : '#94a3b8',
                      cursor: 'pointer',
                    }}
                  >
                    Single Style
                  </button>
                  <button
                    id="btn-mode-hybrid"
                    onClick={() => {
                      setIsHybridMode(true);
                      const expr = `/name = ${primaryHybridId} + ${secondaryHybridId}`;
                      setHybridExpressionInput(expr);
                      setSelectedStyleId(expr);
                    }}
                    style={{
                      padding: '0.25rem 0.6rem',
                      fontSize: '0.75rem',
                      fontWeight: isHybridMode ? 700 : 500,
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: isHybridMode ? '#a855f7' : 'transparent',
                      color: isHybridMode ? '#ffffff' : '#94a3b8',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <Layers size={12} />
                    Style Composition (Hybrid)
                  </button>
                </div>
              </div>

              {/* MODE A: SINGLE STYLE SELECTION */}
              {!isHybridMode && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', maxHeight: '340px', overflowY: 'auto', paddingRight: '4px' }}>
                  {realStyles.map((st) => {
                    const isSelected = selectedStyleId === st.id;
                    return (
                      <button
                        key={st.id}
                        id={`lab-style-${st.id}`}
                        onClick={() => setSelectedStyleId(st.id)}
                        style={{
                          padding: '0.65rem 0.5rem',
                          borderRadius: '8px',
                          border: isSelected ? '2px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                          backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.15)' : '#1e293b',
                          color: isSelected ? '#38bdf8' : '#cbd5e1',
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 120ms ease',
                        }}
                      >
                        <div style={{ fontWeight: 700, fontSize: '0.8125rem', marginBottom: '0.15rem' }}>
                          {st.name}
                        </div>
                        <div style={{ fontSize: '0.65rem', opacity: 0.75, lineHeight: 1.2 }}>
                          {st.desc.split(',')[0]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* MODE B: STYLE COMPOSITION / HYBRID DESIGN LANGUAGES */}
              {isHybridMode && (
                <div
                  id="hybrid-composer-panel"
                  style={{
                    backgroundColor: '#020617',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {/* Syntax Expression Box */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#c084fc', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Wand2 size={13} />
                        Hybrid Syntax Expression:
                      </span>
                      <span style={{ fontSize: '0.6875rem', color: '#64748b' }}>
                        Supports <code>/name = styleA + styleB</code>
                      </span>
                    </div>
                    <input
                      id="hybrid-expression-input"
                      type="text"
                      value={hybridExpressionInput}
                      onChange={(e) => handleExpressionChange(e.target.value)}
                      placeholder="/name = wabi-sabi + glassmorphism"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        backgroundColor: '#090d16',
                        border: '1px solid #a855f7',
                        borderRadius: '6px',
                        color: '#f8fafc',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.8125rem',
                        boxSizing: 'border-box',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Dual Language Blend Selectors */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                        1. Primary (Foundation & Type):
                      </label>
                      <select
                        id="hybrid-primary-select"
                        value={primaryHybridId}
                        onChange={(e) => handleSelectHybridPrimary(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.55rem',
                          backgroundColor: '#1e293b',
                          border: '1px solid #475569',
                          borderRadius: '6px',
                          color: '#f8fafc',
                          fontSize: '0.8125rem',
                        }}
                      >
                        {realStyles.map((st) => (
                          <option key={st.id} value={st.id}>
                            {st.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                        2. Secondary (Surfaces & Effects):
                      </label>
                      <select
                        id="hybrid-secondary-select"
                        value={secondaryHybridId}
                        onChange={(e) => handleSelectHybridSecondary(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.55rem',
                          backgroundColor: '#1e293b',
                          border: '1px solid #475569',
                          borderRadius: '6px',
                          color: '#f8fafc',
                          fontSize: '0.8125rem',
                        }}
                      >
                        {realStyles.map((st) => (
                          <option key={st.id} value={st.id}>
                            {st.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Curated Hybrid Presets */}
                  <div>
                    <span style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      POPULAR CURATED HYBRIDS:
                    </span>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem' }}>
                      {POPULAR_HYBRID_PRESETS.map((prs) => (
                        <button
                          key={prs.expression}
                          id={`preset-hybrid-${prs.badge.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => handleApplyPreset(prs)}
                          title={prs.tagline}
                          style={{
                            padding: '0.45rem 0.6rem',
                            textAlign: 'left',
                            borderRadius: '6px',
                            border: hybridExpressionInput.includes(prs.expression.replace('/name = ', '')) ? '1px solid #c084fc' : '1px solid rgba(255, 255, 255, 0.08)',
                            backgroundColor: hybridExpressionInput.includes(prs.expression.replace('/name = ', '')) ? 'rgba(168, 85, 247, 0.2)' : '#1e293b',
                            color: '#e2e8f0',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            transition: 'all 120ms ease',
                          }}
                        >
                          <div style={{ fontWeight: 700, color: '#c084fc', marginBottom: '0.1rem' }}>
                            {prs.name}
                          </div>
                          <div style={{ fontSize: '0.65rem', color: '#94a3b8', lineHeight: 1.2 }}>
                            {prs.badge}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Apply & Preview Action Button */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
              <button
                id="lab-apply-btn"
                onClick={handleApply}
                style={{
                  flex: 1,
                  padding: '0.85rem 1.5rem',
                  backgroundColor: resolved.isHybrid ? '#9333ea' : '#0284c7',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: resolved.isHybrid ? '0 4px 14px rgba(147, 51, 234, 0.4)' : '0 4px 14px rgba(2, 132, 199, 0.4)',
                  transition: 'all 150ms ease',
                }}
              >
                <Sparkles size={16} />
                Apply {resolved.styleName}
              </button>
            </div>
          </div>
        )}

        {/* RIGHT COLUMN: LIVE RESULT CANVAS & UNIFIED BEFORE/AFTER SLIDER */}
        <div
          id="lab-result-column"
          style={
            isFullscreen
              ? {
                  position: 'fixed',
                  inset: 0,
                  zIndex: 99999,
                  backgroundColor: '#090a0f',
                  width: '100vw',
                  height: '100vh',
                  overflowY: 'auto',
                  padding: '1.5rem 2rem',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }
              : {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  backgroundColor: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
                }
          }
        >
          {/* View Switcher Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#1e293b', padding: '0.25rem', borderRadius: '8px' }}>
              <button
                id="view-comparison-btn"
                onClick={() => setViewMode('comparison')}
                style={{
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8125rem',
                  fontWeight: viewMode === 'comparison' ? 700 : 500,
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: viewMode === 'comparison' ? '#38bdf8' : 'transparent',
                  color: viewMode === 'comparison' ? '#020617' : '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Sliders size={14} />
                Before / After Slider
              </button>

              <button
                id="view-styled-btn"
                onClick={() => setViewMode('styled')}
                style={{
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8125rem',
                  fontWeight: viewMode === 'styled' ? 700 : 500,
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: viewMode === 'styled' ? '#38bdf8' : 'transparent',
                  color: viewMode === 'styled' ? '#020617' : '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Eye size={14} />
                Styled View
              </button>

              <button
                id="view-source-btn"
                onClick={() => setViewMode('source')}
                style={{
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8125rem',
                  fontWeight: viewMode === 'source' ? 700 : 500,
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: viewMode === 'source' ? '#38bdf8' : 'transparent',
                  color: viewMode === 'source' ? '#020617' : '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <FileCode size={14} />
                Sanitized HTML
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                Active: <strong style={{ color: resolved.isHybrid ? '#c084fc' : '#38bdf8' }}>{resolved.styleName.toUpperCase()}</strong>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <button
                  id="open-fullscreen-btn"
                  onClick={handleToggleFullscreen}
                  title={isFullscreen ? 'Exit Full Screen (Esc)' : 'Toggle Full Screen Workspace'}
                  style={{
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderRadius: '6px',
                    border: isFullscreen ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.15)',
                    backgroundColor: isFullscreen ? 'rgba(56, 189, 248, 0.2)' : '#1e293b',
                    color: isFullscreen ? '#38bdf8' : '#cbd5e1',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all 120ms ease',
                  }}
                >
                  {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
                  {isFullscreen ? 'Exit Full Screen' : 'Full Screen'}
                </button>

                <button
                  id="open-newtab-btn"
                  onClick={handleOpenInNewTab}
                  title="Open in Standalone Browser Tab"
                  style={{
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderRadius: '6px',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    backgroundColor: 'rgba(56, 189, 248, 0.12)',
                    color: '#38bdf8',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all 120ms ease',
                  }}
                >
                  <ExternalLink size={13} />
                  New Tab
                </button>
              </div>
            </div>
          </div>

          {/* VIEW 1: UNIFIED BEFORE / AFTER INTERACTIVE SLIDER (ONE BIG SECTION) */}
          {viewMode === 'comparison' && (
            <div
              id="lab-slider-container"
              ref={sliderContainerRef}
              style={{
                position: 'relative',
                width: '100%',
                minHeight: isFullscreen ? 'calc(100vh - 120px)' : '480px',
                borderRadius: '12px',
                overflow: 'hidden',
                userSelect: 'none',
                cursor: isDraggingSplit ? 'ew-resize' : 'default',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: '#ffffff',
              }}
              onMouseDown={() => setIsDraggingSplit(true)}
              onTouchStart={() => setIsDraggingSplit(true)}
            >
              {/* BACKGROUND LAYER: AFTER (Fully Styled with Design Language or Hybrid) */}
              <div
                id="lab-after-canvas"
                className={`lab-styled-preview ${resolved.hybridClassNames || `style-${resolved.styleId}`}`}
                data-style={resolved.styleId}
                data-styles={activeConstituents.join(',')}
                data-hybrid={resolved.isHybrid ? 'true' : undefined}
                style={{
                  ...cssVariables,
                  padding: '2.5rem',
                  minHeight: isFullscreen ? 'calc(100vh - 120px)' : '480px',
                  backgroundColor: 'var(--ds-color-background, #ffffff)',
                  color: 'var(--ds-color-text-primary, #000000)',
                  fontFamily: 'var(--ds-font-family-base, sans-serif)',
                  boxSizing: 'border-box',
                  overflow: 'auto',
                }}
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              />

              {/* OVERLAY LAYER: BEFORE (Raw Unstyled Plain Semantic HTML Defaults) */}
              <div
                id="lab-before-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: `${splitPos}%`,
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  borderRight: '3px solid #38bdf8',
                  boxShadow: '4px 0 16px rgba(56, 189, 248, 0.4)',
                  zIndex: 20,
                  pointerEvents: 'none',
                }}
              >
                <div
                  id="lab-before-canvas"
                  style={{
                    width: containerWidth > 0 ? `${containerWidth}px` : '100%',
                    padding: '2.5rem',
                    minHeight: isFullscreen ? 'calc(100vh - 120px)' : '480px',
                    fontFamily: 'initial',
                    boxSizing: 'border-box',
                    color: '#000000',
                    backgroundColor: '#ffffff',
                    overflow: 'hidden',
                  }}
                  dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                />
              </div>

              {/* DRAGGABLE DIVIDER HANDLE */}
              <div
                id="lab-slider-handle"
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `calc(${splitPos}% - 16px)`,
                  width: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'ew-resize',
                  zIndex: 40,
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#38bdf8',
                    boxShadow: '0 0 16px rgba(56, 189, 248, 0.9), 0 2px 8px rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#020617',
                    fontWeight: 900,
                    fontSize: '13px',
                    border: '2px solid #ffffff',
                    userSelect: 'none',
                  }}
                >
                  ⇄
                </div>
              </div>

              {/* FLOATING INFORMATIVE BADGES */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  padding: '0.35rem 0.75rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  color: '#f8fafc',
                  borderRadius: '6px',
                  fontSize: '0.6875rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  zIndex: 30,
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  pointerEvents: 'none',
                }}
              >
                BEFORE: Raw Plain HTML Defaults
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  padding: '0.35rem 0.75rem',
                  backgroundColor: 'rgba(15, 23, 42, 0.88)',
                  color: resolved.isHybrid ? '#c084fc' : '#38bdf8',
                  borderRadius: '6px',
                  fontSize: '0.6875rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  zIndex: 30,
                  backdropFilter: 'blur(6px)',
                  border: resolved.isHybrid ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid rgba(56, 189, 248, 0.4)',
                  pointerEvents: 'none',
                }}
              >
                AFTER: {resolved.styleName} ({Math.round(splitPos)}% split)
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: 'rgba(2, 6, 23, 0.85)',
                  color: '#94a3b8',
                  borderRadius: '9999px',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  zIndex: 30,
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  pointerEvents: 'none',
                }}
              >
                Drag slider ⇄ left or right to inspect transformation
              </div>
            </div>
          )}

          {/* VIEW 2: STYLED RESULT */}
          {viewMode === 'styled' && (
            <div
              id="lab-rendered-result-canvas"
              className={`lab-styled-preview ${resolved.hybridClassNames || `style-${resolved.styleId}`}`}
              data-style={resolved.styleId}
              data-styles={activeConstituents.join(',')}
              data-hybrid={resolved.isHybrid ? 'true' : undefined}
              style={{
                ...cssVariables,
                padding: '2.5rem',
                borderRadius: '12px',
                minHeight: isFullscreen ? 'calc(100vh - 120px)' : '480px',
                backgroundColor: 'var(--ds-color-background, #ffffff)',
                color: 'var(--ds-color-text-primary, #000000)',
                fontFamily: 'var(--ds-font-family-base, sans-serif)',
                boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.4)',
                overflow: 'auto',
              }}
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />
          )}

          {/* VIEW 3: SANITIZED HTML SOURCE */}
          {viewMode === 'source' && (
            <div
              style={{
                backgroundColor: '#020617',
                border: '1px solid #334155',
                borderRadius: '8px',
                padding: '1.25rem',
                minHeight: isFullscreen ? 'calc(100vh - 120px)' : '480px',
                overflow: 'auto',
              }}
            >
              <pre
                id="lab-source-code"
                style={{
                  margin: 0,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8125rem',
                  color: '#38bdf8',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {sanitizedHtml}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Scoped CSS for Lab Styled Previews using Style Engine variables */}
      <style>{`
        ${activeSemanticCss}
        .lab-styled-preview h1, .lab-styled-preview h2, .lab-styled-preview h3, .lab-styled-preview h4 {
          font-family: var(--ds-font-family-heading, inherit);
          color: var(--ds-color-text-primary, inherit);
          margin-top: 0;
        }
        .lab-styled-preview h1 {
          font-size: var(--ds-font-size-2xl, 2.25rem);
          font-weight: var(--ds-font-weight-bold, 700);
          line-height: var(--ds-line-height-heading, 1.15);
          letter-spacing: var(--ds-letter-spacing-heading, -0.02em);
          margin-bottom: 1rem;
        }
        .lab-styled-preview h2 {
          font-size: var(--ds-font-size-xl, 1.75rem);
          font-weight: var(--ds-font-weight-bold, 700);
          line-height: var(--ds-line-height-heading, 1.2);
          letter-spacing: var(--ds-letter-spacing-heading, -0.02em);
          margin-bottom: 0.75rem;
        }
        .lab-styled-preview h3 {
          font-size: var(--ds-font-size-lg, 1.25rem);
          font-weight: var(--ds-font-weight-bold, 700);
          margin-bottom: 0.5rem;
        }
        .lab-styled-preview p {
          color: var(--ds-color-text-secondary, inherit);
          font-size: var(--ds-font-size-base, 1rem);
          line-height: var(--ds-line-height-base, 1.55);
          margin-top: 0;
          margin-bottom: 1rem;
        }
        .lab-styled-preview button, .lab-styled-preview input[type="submit"] {
          font-family: var(--ds-font-family-heading, inherit);
          font-size: var(--ds-font-size-sm, 0.875rem);
          font-weight: var(--ds-font-weight-bold, 600);
          padding: var(--ds-space-sm, 0.625rem) var(--ds-space-lg, 1.25rem);
          background-color: var(--ds-color-primary, #2563eb);
          color: var(--ds-color-primary-text, #ffffff);
          border: var(--ds-border-width-base, 1px) solid var(--ds-color-border, transparent);
          border-radius: var(--ds-radius-sm, 6px);
          box-shadow: var(--ds-shadow-sm, none);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
          transition: all 150ms ease;
        }
        .lab-styled-preview article, .lab-styled-preview .card {
          background-color: var(--ds-color-surface, #ffffff);
          border: var(--ds-border-width-base, 1px) solid var(--ds-color-border, #e2e8f0);
          border-radius: var(--ds-radius-md, 8px);
          padding: var(--ds-space-lg, 1.5rem);
          box-shadow: var(--ds-shadow-sm, none);
          margin-bottom: 1.25rem;
        }
        .lab-styled-preview input, .lab-styled-preview select, .lab-styled-preview textarea {
          background-color: var(--ds-color-surface, #ffffff);
          border: var(--ds-border-width-base, 1px) solid var(--ds-color-border, #cbd5e1);
          border-radius: var(--ds-radius-sm, 6px);
          padding: var(--ds-space-sm, 0.5rem) var(--ds-space-md, 0.75rem);
          color: var(--ds-color-text-primary, inherit);
          font-family: var(--ds-font-family-base, inherit);
          font-size: var(--ds-font-size-sm, 0.875rem);
          margin-bottom: 0.75rem;
          display: block;
          width: 100%;
          max-width: 400px;
        }
        .lab-styled-preview blockquote {
          border-left: var(--ds-border-width-thick, 3px) solid var(--ds-color-primary, #2563eb);
          padding-left: var(--ds-space-lg, 1.5rem);
          margin: 1.5rem 0;
          font-style: italic;
          color: var(--ds-color-text-primary, inherit);
        }
        .lab-styled-preview nav {
          display: flex;
          gap: var(--ds-space-lg, 1.5rem);
          align-items: center;
          padding-bottom: var(--ds-space-md, 1rem);
          border-bottom: var(--ds-border-width-thin, 1px) solid var(--ds-color-border, #e2e8f0);
          margin-bottom: 2rem;
        }
        .lab-styled-preview a {
          color: var(--ds-color-primary, #2563eb);
          text-decoration: none;
          font-weight: 500;
        }
        .lab-styled-preview strong, .lab-styled-preview b {
          color: var(--ds-color-text-primary, inherit);
          font-weight: var(--ds-font-weight-bold, 700);
        }

        /* HYBRID SURFACE OVERLAYS */
        .style-hybrid[data-styles*="glassmorphism"] article,
        .style-hybrid[data-styles*="glassmorphism"] .card,
        .lab-styled-preview[data-styles*="glassmorphism"] article,
        .lab-styled-preview[data-styles*="glassmorphism"] .card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.4) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08) !important;
        }

        .style-hybrid[data-styles*="brutalism"] article,
        .style-hybrid[data-styles*="brutalism"] .card,
        .lab-styled-preview[data-styles*="brutalism"] article,
        .lab-styled-preview[data-styles*="brutalism"] .card {
          border: 3px solid #000000 !important;
          box-shadow: 5px 5px 0px #000000 !important;
        }

        .style-hybrid[data-styles*="cyberpunk"] article,
        .style-hybrid[data-styles*="cyberpunk"] .card,
        .lab-styled-preview[data-styles*="cyberpunk"] article,
        .lab-styled-preview[data-styles*="cyberpunk"] .card {
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.35) !important;
          border: 1px solid #00f0ff !important;
        }

        .style-hybrid[data-styles*="synthwave"] article,
        .style-hybrid[data-styles*="synthwave"] .card,
        .lab-styled-preview[data-styles*="synthwave"] article,
        .lab-styled-preview[data-styles*="synthwave"] .card {
          box-shadow: 0 0 20px rgba(255, 0, 127, 0.35) !important;
          border: 1px solid #ff007f !important;
        }
      `}</style>
    </div>
  );
};
