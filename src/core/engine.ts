import { StyleDefinition } from './types/style-definition';
import { StyleScopeLevel, ScopeContext } from './types/scope';
import { StyleRegistry } from './registry/style-registry';
import { StyleResolver, ResolvedStyle } from './resolver/style-resolver';
import { CSSAdapter } from './adapters/css-adapter';
import { defaultStyles } from '../styles';

export class StyleEngine {
  private registry: StyleRegistry;
  private resolver: StyleResolver;

  constructor(initialStyles: StyleDefinition[] = defaultStyles) {
    this.registry = new StyleRegistry(initialStyles);
    this.resolver = new StyleResolver(this.registry);
  }

  /**
   * Access the underlying StyleRegistry.
   */
  public getRegistry(): StyleRegistry {
    return this.registry;
  }

  /**
   * Access the StyleResolver.
   */
  public getResolver(): StyleResolver {
    return this.resolver;
  }

  /**
   * Registers a style definition into the engine.
   */
  public registerStyle(style: StyleDefinition): void {
    this.registry.register(style);
  }

  /**
   * Retrieves a registered style definition by ID.
   */
  public getStyle(id: string): StyleDefinition | undefined {
    return this.registry.get(id);
  }

  /**
   * Returns all available style definitions.
   */
  public getAvailableStyles(): StyleDefinition[] {
    return this.registry.list();
  }

  /**
   * Creates a ScopeContext helper object.
   */
  public createScope(
    level: StyleScopeLevel,
    styleId?: string,
    parentScope?: ScopeContext
  ): ScopeContext {
    return {
      level,
      styleId: styleId || (parentScope ? parentScope.styleId : 'base'),
      parentScope,
    };
  }

  /**
   * Resolves styles, tokens, and CSS variables for a given ScopeContext.
   */
  public resolveScope(scope: ScopeContext): ResolvedStyle {
    return this.resolver.resolve(scope);
  }

  /**
   * Resolves styles for a specific style ID at a specified scope level (defaults to 'page').
   * Supports single style IDs or compound expressions (e.g. "wabi-sabi + glassmorphism", "/name = brutalism + minimalism").
   */
  public resolveStyleById(id: string, level: StyleScopeLevel = 'page'): ResolvedStyle {
    return this.resolver.resolve({
      level,
      styleId: id,
    });
  }

  /**
   * Resolves styles for a specific style ID (convenience alias for resolveStyleById).
   */
  public resolveStyle(id: string, level: StyleScopeLevel = 'page'): ResolvedStyle {
    return this.resolveStyleById(id, level);
  }

  /**
   * Resolves a hybrid composition of two or more design styles.
   * e.g. engine.resolveHybrid(['wabi-sabi', 'glassmorphism'])
   */
  public resolveHybrid(styleIds: string[], level: StyleScopeLevel = 'page'): ResolvedStyle {
    return this.resolver.resolve({
      level,
      styleId: styleIds.join('+'),
    });
  }

  /**
   * Creates and registers a new composite hybrid style definition in the engine registry.
   */
  public createHybrid(styleIds: string[], customName?: string): StyleDefinition {
    const resolved = this.resolveHybrid(styleIds);
    const def: StyleDefinition = {
      id: resolved.styleId,
      name: customName || resolved.styleName,
      description: `Hybrid composition of ${resolved.constituentStyles?.join(', ')}`,
      metadata: {
        version: '1.0.0',
        category: 'Modern',
        tags: ['hybrid', 'composition', ...(resolved.constituentStyles || [])],
        isHybrid: true,
      },
      tokens: resolved.tokens,
      components: resolved.components,
    };
    this.registerStyle(def);
    return def;
  }

  /**
   * Parses a user style expression into constituent IDs and canonical compound ID.
   * Handles "/name = wabi-sabi + glassmorphism", "brutalism + minimalism", etc.
   */
  public parseStyleQuery(query: string): { constituentIds: string[]; compoundId: string; formattedQuery: string } {
    const constituentIds = StyleResolver.parseStyleExpression(query);
    const compoundId = constituentIds.join('+');
    return {
      constituentIds,
      compoundId,
      formattedQuery: `/name = ${constituentIds.join(' + ')}`,
    };
  }

  /**
   * Helper to format CSS variables for React style attribute.
   */
  public toStyleObject(cssVariables: Record<string, string>): React.CSSProperties {
    return CSSAdapter.toStyleObject(cssVariables);
  }
}
