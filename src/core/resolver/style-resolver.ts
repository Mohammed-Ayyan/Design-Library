import { DesignTokens } from '../types/tokens';
import { ComponentStyles } from '../types/components';
import { ScopeContext, ScopeChainItem, ResolvedScope } from '../types/scope';
import { StyleRegistry } from '../registry/style-registry';

export interface ResolvedStyle {
  styleId: string;
  styleName: string;
  isBase: boolean;
  fallbackUsed: boolean;
  scope: ResolvedScope;
  tokens: DesignTokens;
  components: ComponentStyles;
  cssVariables: Record<string, string>;
  isHybrid?: boolean;
  constituentStyles?: string[];
  hybridClassNames?: string;
}

export class StyleResolver {
  private registry: StyleRegistry;

  constructor(registry: StyleRegistry) {
    this.registry = registry;
  }

  /**
   * Normalizes a style ID string, converting spaces to hyphens and removing invalid characters
   */
  public static normalizeStyleId(id: string): string {
    return id
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-');
  }

  /**
   * Parses a style expression, supporting single styles or hybrid compositions.
   * Examples:
   *  - "wabi-sabi" -> ["wabi-sabi"]
   *  - "wabi-sabi + glassmorphism" -> ["wabi-sabi", "glassmorphism"]
   *  - "/name = wabi-sabi + glassmorphism" -> ["wabi-sabi", "glassmorphism"]
   *  - "name = brutalism + minimalism" -> ["brutalism", "minimalism"]
   */
  public static parseStyleExpression(expression: string): string[] {
    if (!expression || typeof expression !== 'string') return ['base'];
    let cleaned = expression.trim();
    // Strip prefixes like "/name =", "name =", "/style =", "style =", "/name:", "name:"
    cleaned = cleaned.replace(/^\/?(name|style)\s*[:=]\s*/i, '');
    // Split on '+' or '&'
    const parts = cleaned
      .split(/\s*(?:\+|\&)\s*/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (parts.length === 0) return ['base'];
    return parts.map((p) => StyleResolver.normalizeStyleId(p));
  }

  /**
   * Deep merge helper for objects
   */
  private static deepMerge<T extends Record<string, any>>(target: T, source?: Record<string, any>): T {
    if (!source) return { ...target };
    const output = { ...target };

    for (const key of Object.keys(source)) {
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        continue;
      }
      const sourceVal = source[key];
      const targetVal = (target as any)[key];

      if (
        sourceVal !== undefined &&
        sourceVal !== null &&
        typeof sourceVal === 'object' &&
        !Array.isArray(sourceVal) &&
        typeof targetVal === 'object' &&
        !Array.isArray(targetVal)
      ) {
        (output as any)[key] = StyleResolver.deepMerge(targetVal, sourceVal);
      } else if (sourceVal !== undefined) {
        (output as any)[key] = sourceVal;
      }
    }
    return output;
  }

  /**
   * Builds the ancestor scope chain from the current scope context.
   */
  public buildScopeChain(scope: ScopeContext): ScopeChainItem[] {
    const chain: ScopeChainItem[] = [];
    let current: ScopeContext | undefined = scope;

    while (current) {
      chain.unshift({
        level: current.level,
        styleId: current.styleId,
      });
      current = current.parentScope;
    }

    return chain;
  }

  /**
   * Resolves a ScopeContext into a fully computed ResolvedStyle with tokens,
   * component rules, and CSS variables. Supports single styles and hybrid compositions.
   */
  public resolve(scope: ScopeContext): ResolvedStyle {
    // 1. Determine effective raw style ID from current scope or inherited parent
    const effectiveRawStyleId = scope.styleId || (scope.parentScope ? scope.parentScope.styleId : 'base');
    const constituentIds = StyleResolver.parseStyleExpression(effectiveRawStyleId);
    const isHybrid = constituentIds.length > 1;

    // --- CASE A: SINGLE STYLE RESOLUTION ---
    if (!isHybrid) {
      const singleId = constituentIds[0] || 'base';
      const lookup = this.registry.getWithFallback(singleId);
      const styleDef = lookup.style;

      let resolvedTokens = JSON.parse(JSON.stringify(styleDef.tokens)) as DesignTokens;
      let resolvedComponents = JSON.parse(JSON.stringify(styleDef.components)) as ComponentStyles;

      // Collect inherited overrides from ancestor chain (outermost to innermost)
      const ancestorScopes: ScopeContext[] = [];
      let curr: ScopeContext | undefined = scope.parentScope;
      while (curr) {
        ancestorScopes.unshift(curr);
        curr = curr.parentScope;
      }

      for (const ancestor of ancestorScopes) {
        if (ancestor.tokenOverrides) {
          resolvedTokens = StyleResolver.deepMerge(resolvedTokens, ancestor.tokenOverrides);
        }
        if (ancestor.componentOverrides) {
          resolvedComponents = StyleResolver.deepMerge(resolvedComponents, ancestor.componentOverrides);
        }
      }

      if (scope.tokenOverrides) {
        resolvedTokens = StyleResolver.deepMerge(resolvedTokens, scope.tokenOverrides);
      }
      if (scope.componentOverrides) {
        resolvedComponents = StyleResolver.deepMerge(resolvedComponents, scope.componentOverrides);
      }

      const cssVariables = this.generateCssVariables(resolvedTokens);
      const scopeChain = this.buildScopeChain(scope);

      return {
        styleId: styleDef.id,
        styleName: styleDef.name,
        isBase: Boolean(styleDef.metadata.isBase),
        fallbackUsed: lookup.fallbackUsed,
        scope: {
          level: scope.level,
          effectiveStyleId: styleDef.id,
          scopeChain,
        },
        tokens: resolvedTokens,
        components: resolvedComponents,
        cssVariables,
        isHybrid: false,
        constituentStyles: [styleDef.id],
        hybridClassNames: `style-${styleDef.id}`,
      };
    }

    // --- CASE B: HYBRID STYLE COMPOSITION ---
    const primaryLookup = this.registry.getWithFallback(constituentIds[0]);
    let fallbackUsed = primaryLookup.fallbackUsed;
    const primaryDef = primaryLookup.style;

    // 1. Primary style serves as foundational base
    let resolvedTokens = JSON.parse(JSON.stringify(primaryDef.tokens)) as DesignTokens;
    let resolvedComponents = JSON.parse(JSON.stringify(primaryDef.components)) as ComponentStyles;

    // 2. Synthesize each secondary style onto the primary base
    const secondaryDefs = constituentIds.slice(1).map((id) => {
      const lk = this.registry.getWithFallback(id);
      if (lk.fallbackUsed) fallbackUsed = true;
      return lk.style;
    });

    for (const secDef of secondaryDefs) {
      // (a) Overlay visual effects (backdrop blur, glassmorphism, glow, reflections)
      if (secDef.tokens.effects) {
        resolvedTokens.effects = {
          ...resolvedTokens.effects,
          ...secDef.tokens.effects,
        };
      }

      // (b) Overlay surfaces & translucent colors if secondary provides translucency/glass
      const secSurface = secDef.tokens.colors?.surface;
      if (secSurface && (secSurface.includes('rgba') || secSurface.includes('hsla') || secDef.id.includes('glass'))) {
        resolvedTokens.colors.surface = secSurface;
        if (secDef.tokens.colors?.surfaceSubtle) {
          resolvedTokens.colors.surfaceSubtle = secDef.tokens.colors.surfaceSubtle;
        }
      }

      // (c) If secondary has distinctive accents (e.g. cyber neon or acid yellow), integrate
      if (secDef.tokens.colors?.accent && secDef.tokens.colors.accent !== primaryDef.tokens.colors.accent) {
        resolvedTokens.colors.accent = secDef.tokens.colors.accent;
      }

      // (d) Radii synthesis: if secondary is soft glass/clay or sharp brutalist
      if (
        secDef.id.includes('glass') ||
        secDef.id.includes('clay') ||
        secDef.id.includes('y2k')
      ) {
        resolvedTokens.radii = { ...resolvedTokens.radii, ...secDef.tokens.radii };
      } else if (secDef.id === 'brutalism' || secDef.id === 'swiss-design') {
        resolvedTokens.radii = { ...secDef.tokens.radii };
      }

      // (e) Shadows & Borders synthesis
      if (secDef.tokens.shadows) {
        if (secDef.id.includes('glass') || secDef.id === 'cyberpunk' || secDef.id === 'synthwave') {
          resolvedTokens.shadows = { ...resolvedTokens.shadows, ...secDef.tokens.shadows };
        } else if (secDef.id === 'brutalism' || secDef.id === 'neo-brutalism') {
          resolvedTokens.shadows = { ...secDef.tokens.shadows };
          resolvedTokens.borders = { ...secDef.tokens.borders };
        }
      }

      // (f) Deep merge component definitions
      resolvedComponents = StyleResolver.deepMerge(resolvedComponents, secDef.components);
    }

    // Apply ancestor and current scope overrides
    const ancestorScopes: ScopeContext[] = [];
    let curr: ScopeContext | undefined = scope.parentScope;
    while (curr) {
      ancestorScopes.unshift(curr);
      curr = curr.parentScope;
    }

    for (const ancestor of ancestorScopes) {
      if (ancestor.tokenOverrides) {
        resolvedTokens = StyleResolver.deepMerge(resolvedTokens, ancestor.tokenOverrides);
      }
      if (ancestor.componentOverrides) {
        resolvedComponents = StyleResolver.deepMerge(resolvedComponents, ancestor.componentOverrides);
      }
    }

    if (scope.tokenOverrides) {
      resolvedTokens = StyleResolver.deepMerge(resolvedTokens, scope.tokenOverrides);
    }
    if (scope.componentOverrides) {
      resolvedComponents = StyleResolver.deepMerge(resolvedComponents, scope.componentOverrides);
    }

    const cssVariables = this.generateCssVariables(resolvedTokens);
    cssVariables['--ds-hybrid'] = 'true';
    cssVariables['--ds-hybrid-styles'] = constituentIds.join(', ');
    cssVariables['--ds-hybrid-primary'] = constituentIds[0];
    cssVariables['--ds-hybrid-secondary'] = constituentIds.slice(1).join(', ');

    const compoundId = constituentIds.join('+');
    const compoundName =
      constituentIds
        .map((id) => this.registry.get(id)?.name || id)
        .join(' + ') + ' (Hybrid)';
    const hybridClassNames = constituentIds.map((id) => `style-${id}`).join(' ') + ' style-hybrid';
    const scopeChain = this.buildScopeChain(scope);

    return {
      styleId: compoundId,
      styleName: compoundName,
      isBase: false,
      fallbackUsed,
      scope: {
        level: scope.level,
        effectiveStyleId: compoundId,
        scopeChain,
      },
      tokens: resolvedTokens,
      components: resolvedComponents,
      cssVariables,
      isHybrid: true,
      constituentStyles: constituentIds,
      hybridClassNames,
    };
  }

  /**
   * Converts strongly-typed DesignTokens into CSS custom properties (--ds-*)
   */
  public generateCssVariables(tokens: DesignTokens): Record<string, string> {
    const vars: Record<string, string> = {};

    // Colors
    for (const [key, val] of Object.entries(tokens.colors)) {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      vars[`--ds-color-${kebab}`] = val;
    }

    // Typography
    for (const [key, val] of Object.entries(tokens.typography)) {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      vars[`--ds-font-${kebab}`] = String(val);
    }

    // Spacing
    for (const [key, val] of Object.entries(tokens.spacing)) {
      vars[`--ds-space-${key}`] = val;
    }

    // Radii
    for (const [key, val] of Object.entries(tokens.radii)) {
      vars[`--ds-radius-${key}`] = val;
    }

    // Borders
    for (const [key, val] of Object.entries(tokens.borders)) {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      vars[`--ds-border-${kebab}`] = val;
    }

    // Shadows
    for (const [key, val] of Object.entries(tokens.shadows)) {
      vars[`--ds-shadow-${key}`] = val;
    }

    // Motion
    for (const [key, val] of Object.entries(tokens.motion)) {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      vars[`--ds-motion-${kebab}`] = val;
    }

    // Effects
    for (const [key, val] of Object.entries(tokens.effects)) {
      if (val) {
        const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        vars[`--ds-effect-${kebab}`] = val;
      }
    }

    return vars;
  }
}
