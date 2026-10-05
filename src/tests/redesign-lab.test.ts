import { describe, it, expect, beforeEach } from 'vitest';
import {
  StyleEngine,
  HTMLSanitizer,
  DOMAnalyzer,
  AdaptiveCSSGenerator,
} from '../index';

describe('HTML Redesign Lab — Arbitrary HTML Validation Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine();
  });

  it('1. should parse arbitrary plain HTML without throwing', () => {
    const raw = '<div><h1>Build your future</h1><p>Everything you need.</p><button>Get Started</button></div>';
    const report = DOMAnalyzer.analyzeHtml(raw, 'brutalism', engine);
    expect(report).toBeDefined();
    expect(report.sanitizedHtml).toContain('Build your future');
  });

  it('2. should analyze structural signals on arbitrary HTML', () => {
    const raw = `<div>
      <h2>Premium Plan</h2>
      <p>Everything included for your growing team.</p>
      <strong>$29 / month</strong>
      <button>Choose Plan</button>
    </div>`;
    const report = DOMAnalyzer.analyzeHtml(raw, 'brutalism', engine);
    expect(report.stats.hasCurrency).toBe(true);
    expect(report.stats.headingCount).toBeGreaterThanOrEqual(1);
    expect(report.stats.buttonCount).toBeGreaterThanOrEqual(1);
  });

  it('3. should infer semantic roles across diverse HTML structures', () => {
    // Hero
    const heroReport = DOMAnalyzer.analyzeHtml(
      '<div><h1>Title</h1><p>Body</p><button>Action</button></div>',
      'brutalism',
      engine
    );
    expect(heroReport.rootRole).toBe('hero');

    // Pricing Card
    const priceReport = DOMAnalyzer.analyzeHtml(
      '<div><h2>Pro Plan</h2><p>$49/mo</p><button>Buy</button></div>',
      'brutalism',
      engine
    );
    expect(priceReport.rootRole).toBe('pricing-card');

    // Form
    const formReport = DOMAnalyzer.analyzeHtml(
      '<form><h2>Newsletter</h2><input type="email" /><button>Send</button></form>',
      'brutalism',
      engine
    );
    expect(formReport.rootRole).toBe('form');

    // Navigation
    const navReport = DOMAnalyzer.analyzeHtml(
      '<nav><a href="/">Home</a><a href="/about">About</a></nav>',
      'brutalism',
      engine
    );
    expect(navReport.rootRole).toBe('navigation');
  });

  it('4. should apply a selected style without requiring style-specific classes in the input HTML', () => {
    const plainHtml = '<div><h1>Pure HTML</h1><p>No framework classes whatsoever.</p><button>Click</button></div>';
    
    // Test applying Brutalism
    const brutalismReport = DOMAnalyzer.analyzeHtml(plainHtml, 'brutalism', engine);
    expect(brutalismReport.recipeName).toContain('Brutalist');

    // Test applying Minimalism
    const minimalismReport = DOMAnalyzer.analyzeHtml(plainHtml, 'minimalism', engine);
    expect(minimalismReport.recipeName).toContain('Minimal');

    // Test applying Glassmorphism
    const glassReport = DOMAnalyzer.analyzeHtml(plainHtml, 'glassmorphism', engine);
    expect(glassReport.recipeName).toContain('Glass');
  });

  it('5. should produce distinct adaptive recipes for different HTML structures in the same style', () => {
    const heroReport = DOMAnalyzer.analyzeHtml(
      '<div><h1>Hero Headline</h1><p>Text</p><button>Start</button></div>',
      'brutalism',
      engine
    );
    const formReport = DOMAnalyzer.analyzeHtml(
      '<form><h2>Form</h2><input /><button>Submit</button></form>',
      'brutalism',
      engine
    );
    const articleReport = DOMAnalyzer.analyzeHtml(
      '<article><h1>Editorial</h1><p>Text</p><blockquote>Quote</blockquote></article>',
      'brutalism',
      engine
    );

    // Recipes must be role-appropriate, not identical
    expect(heroReport.recipeName).not.toBe(formReport.recipeName);
    expect(heroReport.recipeName).not.toBe(articleReport.recipeName);
  });

  it('6. should handle nested structures and preserve scope hierarchy', () => {
    const nestedHtml = `<section>
      <header>
        <h1>Platform Title</h1>
        <p>Subtitle text.</p>
      </header>
      <div>
        <h2>Feature One</h2>
        <p>Feature text.</p>
      </div>
    </section>`;

    const report = DOMAnalyzer.analyzeHtml(nestedHtml, 'brutalism', engine);
    expect(report.stampedHtml).toBeDefined();
    expect(report.detectedBlocks.length).toBeGreaterThanOrEqual(1);
  });

  it('7. should handle malformed or unexpected HTML gracefully without crashing', () => {
    const brokenHtml = '<div><h2>Unclosed tag<p>Missing closing elements<button>Click';
    expect(() => {
      const report = DOMAnalyzer.analyzeHtml(brokenHtml, 'brutalism', engine);
      expect(report).toBeDefined();
      expect(report.rootRole).toBeDefined();
    }).not.toThrow();
  });

  it('8. should sanitize unsafe HTML by stripping scripts, inline event handlers, and javascript: links', () => {
    const maliciousHtml = `<div>
      <h1>Clean Title</h1>
      <script>alert('XSS exploit!');</script>
      <button onclick="stealCookies()">Malicious Button</button>
      <a href="javascript:alert(1)">Dangerous Link</a>
      <iframe src="http://attacker.com"></iframe>
    </div>`;

    const sanitized = HTMLSanitizer.sanitize(maliciousHtml);

    // Assert malicious vectors are completely neutralized
    expect(sanitized).not.toContain('<script');
    expect(sanitized).not.toContain('alert(');
    expect(sanitized).not.toContain('onclick=');
    expect(sanitized).not.toContain('javascript:');
    expect(sanitized).not.toContain('<iframe');
    expect(sanitized).toContain('Clean Title');
  });

  it('9. should ensure rendered output is backed by existing Style Engine and AdaptiveCSSGenerator', () => {
    const css = AdaptiveCSSGenerator.getAdaptiveStyles();
    // Verifies universal adaptive CSS covers all 3 implemented design languages
    expect(css).toContain('.style-brutalism');
    expect(css).toContain('.style-minimalism');
    expect(css).toContain('.style-glassmorphism');

    // Verifies native structural selectors (:has, semantic tags)
    expect(css).toContain(':has(> h1)');
    expect(css).toContain('form');
    expect(css).toContain('nav');
    expect(css).toContain('blockquote');
  });

  it('10. should not require any playground-specific styles or classes to render properly', () => {
    const raw = '<div><h2>Standalone Component</h2><p>Working independently without special classes.</p><button>OK</button></div>';
    const report = DOMAnalyzer.analyzeHtml(raw, 'glassmorphism', engine);
    
    // Result relies exclusively on standard class `.style-[id]`
    expect(report.sanitizedHtml).not.toContain('playground');
    expect(report.rootRole).toBe('card');
    expect(report.recipeName).toContain('Glass');
  });
});
