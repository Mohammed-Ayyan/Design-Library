import { StyleDefinition } from '../types/style-definition';

export interface StyleLookupResult {
  style: StyleDefinition;
  fallbackUsed: boolean;
  requestedId: string;
}

export class StyleRegistry {
  private styles: Map<string, StyleDefinition> = new Map();
  private baseStyleId: string = 'base';

  constructor(initialStyles: StyleDefinition[] = []) {
    for (const style of initialStyles) {
      this.register(style);
    }
  }

  /**
   * Registers a style definition.
   */
  public register(style: StyleDefinition): void {
    if (!style || !style.id) {
      throw new Error('Cannot register style without a valid id');
    }
    this.styles.set(style.id, style);

    if (style.metadata.isBase && !this.styles.has(this.baseStyleId)) {
      this.baseStyleId = style.id;
    }
  }

  /**
   * Unregisters a style definition. Cannot unregister the active base style.
   */
  public unregister(id: string): boolean {
    if (id === this.baseStyleId) {
      console.warn(`[StyleRegistry] Cannot unregister base style "${id}"`);
      return false;
    }
    return this.styles.delete(id);
  }

  /**
   * Checks if a style ID exists in the registry.
   */
  public has(id: string): boolean {
    return this.styles.has(id);
  }

  /**
   * Retrieves a style by ID, or undefined if not found.
   */
  public get(id: string): StyleDefinition | undefined {
    return this.styles.get(id);
  }

  /**
   * Retrieves a style by ID. If not found, returns the base style safely with a fallback flag.
   */
  public getWithFallback(id: string): StyleLookupResult {
    const existing = this.styles.get(id);
    if (existing) {
      return {
        style: existing,
        fallbackUsed: false,
        requestedId: id,
      };
    }

    const base = this.getBaseStyle();
    console.warn(`[StyleRegistry] Style "${id}" not found. Falling back to base style "${base.id}".`);
    return {
      style: base,
      fallbackUsed: true,
      requestedId: id,
    };
  }

  /**
   * Returns the base fallback style definition.
   */
  public getBaseStyle(): StyleDefinition {
    const base = this.styles.get(this.baseStyleId);
    if (!base) {
      // Fallback to first available style if baseStyleId not registered yet
      const first = Array.from(this.styles.values())[0];
      if (first) return first;
      throw new Error('[StyleRegistry] No styles registered in registry.');
    }
    return base;
  }

  /**
   * Sets the ID to use for base fallback.
   */
  public setBaseStyleId(id: string): void {
    if (!this.styles.has(id)) {
      throw new Error(`[StyleRegistry] Cannot set base style to unregistered ID "${id}"`);
    }
    this.baseStyleId = id;
  }

  /**
   * Lists all registered style definitions.
   */
  public list(): StyleDefinition[] {
    return Array.from(this.styles.values());
  }

  /**
   * Clears all non-base styles.
   */
  public clear(): void {
    const base = this.styles.get(this.baseStyleId);
    this.styles.clear();
    if (base) {
      this.styles.set(base.id, base);
    }
  }
}
