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
   * Helper to format CSS variables for React style attribute.
   */
  public toStyleObject(cssVariables: Record<string, string>): React.CSSProperties {
    return CSSAdapter.toStyleObject(cssVariables);
  }
}
