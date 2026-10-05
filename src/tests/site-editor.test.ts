import { describe, it, expect } from 'vitest';
import { StyleEngine } from '../core/engine';
import { defaultStyles } from '../styles';
import {
  computeElementDesignStyle,
  generateCssSnippetForElement,
} from '../core/editor/style-applicator';

describe('In-Situ Site Editor & Real Style Engine Integration', () => {
  const engine = new StyleEngine(defaultStyles);

  it('1. should visibly transform a button when selecting Brutalism vs Wabi-Sabi vs Glassmorphism', () => {
    // 1. Brutalism Button
    const brutalismStyle = computeElementDesignStyle('button', 'brutalism', engine);
    expect(brutalismStyle.cssProperties).toBeDefined();
    expect(brutalismStyle.cssProperties.fontWeight).toBeDefined();
    expect(brutalismStyle.cssProperties.boxShadow || brutalismStyle.cssProperties.border).toBeDefined();

    // 2. Wabi-Sabi Button (same button transforms to Wabi-Sabi)
    const wabiSabiStyle = computeElementDesignStyle('button', 'wabi-sabi', engine);
    expect(wabiSabiStyle.cssProperties).toBeDefined();
    expect(wabiSabiStyle.cssProperties.fontFamily).toBeDefined();
    expect(wabiSabiStyle.cssProperties.boxShadow).not.toBe(brutalismStyle.cssProperties.boxShadow);

    // 3. Glassmorphism Button
    const glassStyle = computeElementDesignStyle('button', 'glassmorphism', engine);
    expect(glassStyle.cssProperties).toBeDefined();
    expect(glassStyle.cssProperties.backdropFilter || glassStyle.cssProperties.background).toBeDefined();
  });

  it('2. should transform a card when selecting Glassmorphism vs Cyberpunk', () => {
    const glassCard = computeElementDesignStyle('div', 'glassmorphism', engine, 'card');
    const cyberCard = computeElementDesignStyle('div', 'cyberpunk', engine, 'card');

    expect(glassCard.cssProperties).toBeDefined();
    expect(cyberCard.cssProperties).toBeDefined();
    expect(glassCard.cssProperties.border).not.toBe(cyberCard.cssProperties.border);
  });

  it('3. should transform a heading when selecting Wabi-Sabi vs Cyberpunk', () => {
    const wabiHeading = computeElementDesignStyle('h1', 'wabi-sabi', engine);
    const cyberHeading = computeElementDesignStyle('h1', 'cyberpunk', engine);

    expect(wabiHeading.cssProperties).toBeDefined();
    expect(cyberHeading.cssProperties).toBeDefined();
    expect(wabiHeading.cssProperties.fontFamily).not.toBe(cyberHeading.cssProperties.fontFamily);
  });

  it('4. should specifically verify WABI-SABI application across Button, Card, Section, and Page', () => {
    // Button
    const wabiButton = computeElementDesignStyle('button', 'wabi-sabi', engine);
    expect(wabiButton.cssProperties).toBeDefined();
    expect(wabiButton.cssProperties.background || wabiButton.cssProperties.backgroundColor).toBeDefined();

    // Card
    const wabiCard = computeElementDesignStyle('div', 'wabi-sabi', engine, 'card');
    expect(wabiCard.cssProperties).toBeDefined();
    expect(wabiCard.cssProperties.padding).toBeDefined();

    // Section
    const wabiSection = computeElementDesignStyle('section', 'wabi-sabi', engine);
    expect(wabiSection.cssProperties).toBeDefined();

    // Page resolution
    const wabiPageResolved = engine.resolveStyleById('wabi-sabi', 'page');
    expect(wabiPageResolved).toBeDefined();
    expect(wabiPageResolved.styleId).toBe('wabi-sabi');
    expect(Object.keys(wabiPageResolved.cssVariables).length).toBeGreaterThan(10);
  });

  it('5. should generate accurate, customized CSS snippets reflecting overrides', () => {
    const css = generateCssSnippetForElement(
      '#cta-button',
      'wabi-sabi',
      engine,
      'button',
      { fontSize: '20px', borderRadius: '12px' }
    );

    expect(css).toContain('#cta-button');
    expect(css).toContain('font-size: 20px;');
    expect(css).toContain('border-radius: 12px;');
  });

  it('6. should maintain deterministic scope precedence (Element > Component > Section > Page)', () => {
    const pageScope = engine.createScope('page', 'minimalism');
    const sectionScope = engine.createScope('section', 'cyberpunk', pageScope);
    const compScope = engine.createScope('component', 'glassmorphism', sectionScope);
    const elementScope = engine.createScope('element', 'brutalism', compScope);

    const resolvedElement = engine.resolveScope(elementScope);
    expect(resolvedElement.styleId).toBe('brutalism');
    expect(resolvedElement.scope.level).toBe('element');

    const resolvedComp = engine.resolveScope(compScope);
    expect(resolvedComp.styleId).toBe('glassmorphism');
    expect(resolvedComp.scope.level).toBe('component');

    const resolvedSection = engine.resolveScope(sectionScope);
    expect(resolvedSection.styleId).toBe('cyberpunk');
    expect(resolvedSection.scope.level).toBe('section');

    const resolvedPage = engine.resolveScope(pageScope);
    expect(resolvedPage.styleId).toBe('minimalism');
    expect(resolvedPage.scope.level).toBe('page');
  });
});
