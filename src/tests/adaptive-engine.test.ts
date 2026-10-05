import { describe, it, expect } from 'vitest';
import { StructureAnalyzer } from '../core/adaptive/structure-analyzer';
import { RoleResolver } from '../core/adaptive/role-resolver';
import { RecipeEngine } from '../core/adaptive/recipe-engine';
import { StyleEngine } from '../core/engine';
import { defaultStyles } from '../styles';
import { AdaptiveCSSGenerator } from '../core/adaptive/adaptive-css';

describe('Adaptive Style Engine — Structure & Recipe Intelligence', () => {
  const engine = new StyleEngine(defaultStyles);

  // 1. Structural Signal Extraction & Role Detection
  describe('Structure Analysis & Role Detection', () => {
    it('should detect a Hero container from H1, paragraph, and CTA button', () => {
      const signals = StructureAnalyzer.analyze({
        tag: 'section',
        childrenTags: ['h1', 'p', 'button'],
        childCount: 3,
        isFirstChild: true,
      });

      const roleCtx = RoleResolver.resolveRole(signals);
      expect(roleCtx.role).toBe('hero');
      expect(roleCtx.modifiers).toContain('primary-hero');
      expect(roleCtx.confidence).toBeGreaterThan(0.85);
    });

    it('should detect a Pricing Card from currency and period markers', () => {
      const signals = StructureAnalyzer.analyze({
        tag: 'div',
        text: 'Pro Developer Plan $29 /mo Dedicated Edge Clusters',
        hasPriceText: true,
        childrenTags: ['h3', 'p', 'button'],
        siblingIndex: 1,
        totalSiblings: 3,
      });

      const roleCtx = RoleResolver.resolveRole(signals);
      expect(roleCtx.role).toBe('pricing-card');
      expect(roleCtx.modifiers).toContain('highlighted-tier');
    });

    it('should detect an Article container from long text without card actions', () => {
      const signals = StructureAnalyzer.analyze({
        tag: 'article',
        text: 'A'.repeat(400),
        childrenTags: ['h2', 'p', 'p'],
        childCount: 3,
      });

      const roleCtx = RoleResolver.resolveRole(signals);
      expect(roleCtx.role).toBe('article');
      expect(roleCtx.modifiers).toContain('long-form');
    });

    it('should detect a Form from input and submit button elements', () => {
      const signals = StructureAnalyzer.analyze({
        tag: 'form',
        childrenTags: ['h2', 'p', 'input', 'button'],
        childCount: 4,
      });

      const roleCtx = RoleResolver.resolveRole(signals);
      expect(roleCtx.role).toBe('form');
    });

    it('should conservatively classify ambiguous generic div without hallucination', () => {
      const signals = StructureAnalyzer.analyze({
        tag: 'div',
        text: 'Simple informational notice.',
        childrenTags: ['p', 'span'],
        childCount: 2,
      });

      const roleCtx = RoleResolver.resolveRole(signals);
      expect(roleCtx.role).toBe('generic-container');
      expect(roleCtx.rationale).toContain('conservative baseline');
    });
  });

  // 2. Contextual Role Differentiation for Buttons
  describe('Contextual Button Role Differentiation', () => {
    it('should differentiate Hero CTA from Card Action and Nav Action', () => {
      const heroBtnSignals = StructureAnalyzer.analyze({ tag: 'button', parentRole: 'hero', depth: 2 });
      const cardBtnSignals = StructureAnalyzer.analyze({ tag: 'button', parentRole: 'card', depth: 3 });
      const navBtnSignals = StructureAnalyzer.analyze({ tag: 'button', parentRole: 'navigation', depth: 2 });

      const heroBtnRole = RoleResolver.resolveRole(heroBtnSignals);
      const cardBtnRole = RoleResolver.resolveRole(cardBtnSignals);
      const navBtnRole = RoleResolver.resolveRole(navBtnSignals);

      expect(heroBtnRole.role).toBe('cta-button');
      expect(heroBtnRole.modifiers).toContain('prominent-cta');

      expect(cardBtnRole.role).toBe('card-action');
      expect(cardBtnRole.modifiers).toContain('card-cta');

      expect(navBtnRole.role).toBe('nav-action');
      expect(navBtnRole.modifiers).toContain('nav-cta');
    });
  });

  // 3. Adaptive Recipe Resolution & Controlled Deterministic Variation
  describe('Recipe Resolution & Deterministic Variation', () => {
    it('should provide distinct Hero CTA vs Card button styling in Brutalism', () => {
      const heroRole = RoleResolver.resolveRole(StructureAnalyzer.analyze({ tag: 'button', parentRole: 'hero' }));
      const cardRole = RoleResolver.resolveRole(StructureAnalyzer.analyze({ tag: 'button', parentRole: 'card' }));

      const heroRecipe = RecipeEngine.resolveRecipe('brutalism', heroRole, engine);
      const cardRecipe = RecipeEngine.resolveRecipe('brutalism', cardRole, engine);

      expect(heroRecipe.buttonStyles?.padding).toBe('0.875rem 1.75rem');
      expect(cardRecipe.buttonStyles?.padding).toBe('0.65rem 1.25rem');
      expect(heroRecipe.buttonStyles?.boxShadow).toContain('5px 5px');
    });

    it('should vary sibling cards deterministically across 0, 1, 2 indices in Brutalism', () => {
      const card0 = RoleResolver.resolveRole(StructureAnalyzer.analyze({ tag: 'div', childrenTags: ['h3', 'p'], totalSiblings: 3, siblingIndex: 0 }));
      const card1 = RoleResolver.resolveRole(StructureAnalyzer.analyze({ tag: 'div', childrenTags: ['h3', 'p'], totalSiblings: 3, siblingIndex: 1 }));
      const card2 = RoleResolver.resolveRole(StructureAnalyzer.analyze({ tag: 'div', childrenTags: ['h3', 'p'], totalSiblings: 3, siblingIndex: 2 }));

      const recipe0 = RecipeEngine.resolveRecipe('brutalism', card0, engine);
      const recipe1 = RecipeEngine.resolveRecipe('brutalism', card1, engine);
      const recipe2 = RecipeEngine.resolveRecipe('brutalism', card2, engine);

      // Card 0 has yellow background, Card 1 has white, Card 2 has black
      expect(recipe0.containerStyles.backgroundColor).toBe('#ffe600');
      expect(recipe1.containerStyles.backgroundColor).toBe('#ffffff');
      expect(recipe2.containerStyles.backgroundColor).toBe('#000000');

      // Stability test: Repeating same indices gives exact same results (not random)
      const repeatRecipe0 = RecipeEngine.resolveRecipe('brutalism', card0, engine);
      expect(repeatRecipe0.containerStyles).toEqual(recipe0.containerStyles);
    });

    it('should vary optical blur and borders across sibling cards in Glassmorphism', () => {
      const card0 = RoleResolver.resolveRole(StructureAnalyzer.analyze({ tag: 'div', childrenTags: ['h3', 'p'], totalSiblings: 3, siblingIndex: 0 }));
      const card1 = RoleResolver.resolveRole(StructureAnalyzer.analyze({ tag: 'div', childrenTags: ['h3', 'p'], totalSiblings: 3, siblingIndex: 1 }));

      const recipe0 = RecipeEngine.resolveRecipe('glassmorphism', card0, engine);
      const recipe1 = RecipeEngine.resolveRecipe('glassmorphism', card1, engine);

      expect(recipe0.containerStyles.backdropFilter).toContain('blur(20px)');
      expect(recipe1.containerStyles.backdropFilter).toContain('blur(28px)');
      expect(recipe1.containerStyles.borderColor).toContain('rgba(56, 189, 248');
    });

    it('should adaptively format highlighted pricing tier in Minimalism', () => {
      const standardTier = RoleResolver.resolveRole(StructureAnalyzer.analyze({ tag: 'div', hasPriceText: true, siblingIndex: 0, totalSiblings: 3 }));
      const featuredTier = RoleResolver.resolveRole(StructureAnalyzer.analyze({ tag: 'div', hasPriceText: true, siblingIndex: 1, totalSiblings: 3 }));

      const stdRecipe = RecipeEngine.resolveRecipe('minimalism', standardTier, engine);
      const featRecipe = RecipeEngine.resolveRecipe('minimalism', featuredTier, engine);

      expect(stdRecipe.containerStyles.borderColor).toBe('#e4e4e7');
      expect(featRecipe.containerStyles.borderColor).toBe('#18181b');
      expect(featRecipe.containerStyles.borderWidth).toBe('1.5px');
    });
  });

  // 4. Universal CSS Generation for Raw HTML
  describe('Universal Adaptive CSS', () => {
    it('should generate valid stylesheet rules for all three adaptive design languages', () => {
      const css = AdaptiveCSSGenerator.getAdaptiveStyles();

      expect(css).toContain('.style-brutalism');
      expect(css).toContain('.style-glassmorphism');
      expect(css).toContain('.style-minimalism');

      // Contextual selectors
      expect(css).toContain('.style-brutalism section:first-of-type button');
      expect(css).toContain('.style-glassmorphism [data-role="hero"]');
      expect(css).toContain('.style-minimalism article:nth-child(3n+1)');
    });
  });
});
