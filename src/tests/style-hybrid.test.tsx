import { describe, it, expect, beforeEach } from 'vitest';
import { renderToString } from 'react-dom/server';
import { StyleEngine } from '../core/engine';
import { StyleResolver } from '../core/resolver/style-resolver';
import { StyleEngineProvider } from '../react/context/StyleEngineContext';
import { StyleScope } from '../react/components/StyleScope';
import { Section } from '../react/components/Section';
import { Card } from '../react/components/Card';
import { Button } from '../react/components/Button';
import { Main } from '../react/components/Main';

describe('Style Composition & Hybrid Design Languages Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine();
  });

  describe('1. Style Expression Parser', () => {
    it('should parse single style string cleanly', () => {
      expect(StyleResolver.parseStyleExpression('wabi-sabi')).toEqual(['wabi-sabi']);
      expect(StyleResolver.parseStyleExpression('brutalism')).toEqual(['brutalism']);
    });

    it('should parse compound "+ " syntax into constituent style IDs', () => {
      const parts = StyleResolver.parseStyleExpression('wabi-sabi + glassmorphism');
      expect(parts).toEqual(['wabi-sabi', 'glassmorphism']);
    });

    it('should parse "/name = styleA + styleB" syntax', () => {
      const parts = StyleResolver.parseStyleExpression('/name = wabi-sabi + glassmorphism');
      expect(parts).toEqual(['wabi-sabi', 'glassmorphism']);
    });

    it('should parse "name = brutalism + minimalism" syntax', () => {
      const parts = StyleResolver.parseStyleExpression('name = brutalism + minimalism');
      expect(parts).toEqual(['brutalism', 'minimalism']);
    });

    it('should support multi-language compositions of 3 or more styles', () => {
      const parts = StyleResolver.parseStyleExpression('cyberpunk + synthwave + glassmorphism');
      expect(parts).toEqual(['cyberpunk', 'synthwave', 'glassmorphism']);
    });

    it('should normalize space-separated style names to kebab-case', () => {
      const parts = StyleResolver.parseStyleExpression('wabi sabi + glassmorphism');
      expect(parts).toEqual(['wabi-sabi', 'glassmorphism']);

      const swiss = StyleResolver.parseStyleExpression('swiss design + dark mode ui');
      expect(swiss).toEqual(['swiss-design', 'dark-mode-ui']);
    });
  });

  describe('2. Core Engine Hybrid Resolution', () => {
    it('should resolve "wabi-sabi + glassmorphism" into a blended hybrid style', () => {
      const resolved = engine.resolveStyleById('wabi-sabi + glassmorphism');
      expect(resolved.isHybrid).toBe(true);
      expect(resolved.styleId).toBe('wabi-sabi+glassmorphism');
      expect(resolved.styleName).toContain('Wabi-Sabi + Glassmorphism');
      expect(resolved.constituentStyles).toEqual(['wabi-sabi', 'glassmorphism']);
      expect(resolved.hybridClassNames).toContain('style-wabi-sabi');
      expect(resolved.hybridClassNames).toContain('style-glassmorphism');
      expect(resolved.hybridClassNames).toContain('style-hybrid');

      // Hybrid CSS custom properties
      expect(resolved.cssVariables['--ds-hybrid']).toBe('true');
      expect(resolved.cssVariables['--ds-hybrid-primary']).toBe('wabi-sabi');
      expect(resolved.cssVariables['--ds-hybrid-secondary']).toBe('glassmorphism');

      // Surface translucency & glassmorphic effects merged
      expect(resolved.tokens.effects).toBeDefined();
      expect(resolved.tokens.effects.backdropBlur).toContain('blur');
    });

    it('should resolve "brutalism + minimalism" into high-contrast restrained aesthetic', () => {
      const resolved = engine.resolveStyleById('/name = brutalism + minimalism');
      expect(resolved.isHybrid).toBe(true);
      expect(resolved.styleId).toBe('brutalism+minimalism');
      expect(resolved.constituentStyles).toEqual(['brutalism', 'minimalism']);

      // Primary brutalism foundation
      expect(resolved.tokens.borders).toBeDefined();
      expect(resolved.cssVariables['--ds-hybrid-primary']).toBe('brutalism');
    });

    it('should resolve hybrid via engine.resolveHybrid() array API', () => {
      const resolved = engine.resolveHybrid(['cyberpunk', 'synthwave']);
      expect(resolved.isHybrid).toBe(true);
      expect(resolved.styleId).toBe('cyberpunk+synthwave');
      expect(resolved.constituentStyles).toEqual(['cyberpunk', 'synthwave']);
      expect(resolved.hybridClassNames).toContain('style-cyberpunk');
      expect(resolved.hybridClassNames).toContain('style-synthwave');
      expect(resolved.hybridClassNames).toContain('style-hybrid');
    });

    it('should create and register a permanent hybrid style definition via engine.createHybrid()', () => {
      const def = engine.createHybrid(['solarpunk', 'neo-brutalism'], 'Eco Pop Hybrid');
      expect(def.id).toBe('solarpunk+neo-brutalism');
      expect(def.name).toBe('Eco Pop Hybrid');
      expect(def.metadata.isHybrid).toBe(true);

      // Verify retrieval from registry
      const registered = engine.getStyle('solarpunk+neo-brutalism');
      expect(registered).toBeDefined();
      expect(registered?.name).toBe('Eco Pop Hybrid');

      const reResolved = engine.resolveStyleById('solarpunk+neo-brutalism');
      expect(reResolved.styleId).toBe('solarpunk+neo-brutalism');
    });

    it('should parse style queries with helper parseStyleQuery()', () => {
      const res = engine.parseStyleQuery('/name = bauhaus + glassmorphism');
      expect(res.constituentIds).toEqual(['bauhaus', 'glassmorphism']);
      expect(res.compoundId).toBe('bauhaus+glassmorphism');
      expect(res.formattedQuery).toBe('/name = bauhaus + glassmorphism');
    });
  });

  describe('3. React Component Scope Hybrid Usage', () => {
    it('should apply hybrid style in a specific div in one go via StyleScope', () => {
      const html = renderToString(
        <StyleEngineProvider engine={engine}>
          <StyleScope styleId="wabi-sabi + glassmorphism" level="component" as="div">
            <p>Zen frosted card</p>
          </StyleScope>
        </StyleEngineProvider>
      );

      expect(html).toContain('style-wabi-sabi');
      expect(html).toContain('style-glassmorphism');
      expect(html).toContain('style-hybrid');
      expect(html).toContain('data-hybrid="true"');
      expect(html).toContain('data-styles="wabi-sabi,glassmorphism"');
      expect(html).toContain('Zen frosted card');
    });

    it('should apply hybrid style to a section in one go via Section component', () => {
      const html = renderToString(
        <StyleEngineProvider engine={engine}>
          <Section styleId="/name = brutalism + minimalism">
            <h2>Hybrid Structural Section</h2>
          </Section>
        </StyleEngineProvider>
      );

      expect(html).toContain('style-brutalism');
      expect(html).toContain('style-minimalism');
      expect(html).toContain('style-hybrid');
      expect(html).toContain('data-hybrid="true"');
      expect(html).toContain('Hybrid Structural Section');
    });

    it('should nest multiple distinct single and hybrid languages without bleeding', () => {
      const html = renderToString(
        <StyleEngineProvider engine={engine}>
          <StyleScope styleId="minimalism" level="page" as="main">
            <header>Page Root Minimal</header>
            <StyleScope styleId="wabi-sabi + glassmorphism" level="section" as="section">
              <p>Hybrid Wabi-Glass Panel</p>
              <StyleScope styleId="cyberpunk" level="component" as="div">
                <span>Cyber Telemetry Badge</span>
              </StyleScope>
            </StyleScope>
          </StyleScope>
        </StyleEngineProvider>
      );

      expect(html).toContain('style-minimalism');
      expect(html).toContain('style-wabi-sabi');
      expect(html).toContain('style-glassmorphism');
      expect(html).toContain('style-cyberpunk');
      expect(html).toContain('Page Root Minimal');
      expect(html).toContain('Hybrid Wabi-Glass Panel');
      expect(html).toContain('Cyber Telemetry Badge');
    });

    it('should work standalone with StyleScope, Section, Card, and Button WITHOUT StyleEngineProvider', () => {
      const html = renderToString(
        <div>
          {/* Zen Frosted Glass: Wabi-Sabi organic earthiness + Glassmorphism specular blur */}
          <StyleScope styleId="/name = wabi-sabi + glassmorphism" level="section" as="section">
            <h2>Handcrafted Zen Interface</h2>
            <p>Tactile washi typography with 20px frosted backdrop filtration.</p>
            <Button>Order Vessel</Button>
          </StyleScope>

          {/* Minimal Raw: Brutalism high-contrast structural rules + Minimalism airy spacing */}
          <Section styleId="brutalism + minimalism">
            <h2>Unflinching Clarity</h2>
            <Card>
              <p>Monochrome architectural grid without ornamentation.</p>
            </Card>
          </Section>
        </div>
      );

      expect(html).toContain('style-wabi-sabi');
      expect(html).toContain('style-glassmorphism');
      expect(html).toContain('style-hybrid');
      expect(html).toContain('Handcrafted Zen Interface');
      expect(html).toContain('Order Vessel');
      expect(html).toContain('style-brutalism');
      expect(html).toContain('style-minimalism');
      expect(html).toContain('Unflinching Clarity');
    });

    it('should support <Main styleId="..."> with hybrid expressions standalone', () => {
      const html = renderToString(
        <Main styleId="brutalism + minimalism">
          <header>
            <nav>
              <a href="#">Studio</a>
            </nav>
          </header>
          <section>
            <h1>We build things people remember.</h1>
            <Button>View Our Work</Button>
          </section>
        </Main>
      );

      expect(html).toContain('style-brutalism');
      expect(html).toContain('style-minimalism');
      expect(html).toContain('style-hybrid');
      expect(html).toContain('ds-main');
      expect(html).toContain('We build things people remember.');
      expect(html).toContain('View Our Work');
    });
  });
});
