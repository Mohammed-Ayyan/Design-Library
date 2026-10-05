import { describe, it, expect } from 'vitest';
import { AdaptiveCSSGenerator } from '../core/adaptive/adaptive-css';

describe('Mobile & Tablet Responsiveness Suite', () => {
  const css = AdaptiveCSSGenerator.getAdaptiveStyles();

  describe('Design Engine: Universal Responsive Layer', () => {
    it('1. should include media queries for both tablet and mobile smartphone viewports', () => {
      expect(css).toContain('@media (max-width: 768px)');
      expect(css).toContain('@media (max-width: 540px)');
    });

    it('2. should enforce fluid typography across heading hierarchies with clamp()', () => {
      expect(css).toContain('font-size: clamp(1.85rem, 5.5vw + 0.5rem, 3.25rem)');
      expect(css).toContain('font-size: clamp(1.4rem, 4vw + 0.35rem, 2.25rem)');
      expect(css).toContain('font-size: clamp(1.15rem, 3vw + 0.25rem, 1.55rem)');
      expect(css).toContain('word-break: break-word');
    });

    it('3. should auto-collapse multi-column grids to 1fr single columns on smartphone viewports', () => {
      expect(css).toContain('grid-template-columns: 1fr !important');
      expect(css).toContain('[data-layout="pricing-columns"]');
      expect(css).toContain('[data-layout="dashboard-telemetry"]');
      expect(css).toContain('[data-layout="asymmetric-catalog"]');
    });

    it('4. should stack button CTA groups full width on mobile screens for touch ergonomics', () => {
      expect(css).toContain('.cta-group');
      expect(css).toContain('flex-direction: column !important');
      expect(css).toContain('min-height: 46px !important');
      expect(css).toContain('width: 100% !important');
    });

    it('5. should enforce 16px minimum font size on form inputs to prevent iOS Safari auto-zoom', () => {
      expect(css).toContain('font-size: 16px !important');
      expect(css).toContain('input[type="text"]');
      expect(css).toContain('textarea');
      expect(css).toContain('select');
    });

    it('6. should protect media, preformatted code, and tables from horizontal blowout', () => {
      expect(css).toContain('max-width: 100%');
      expect(css).toContain('overflow-x: auto');
      expect(css).toContain('-webkit-overflow-scrolling: touch');
    });

    it('7. should calibrate specialized style aesthetics (Brutalism, Neumorphism, Scrapbook) for mobile screens', () => {
      expect(css).toContain('.style-brutalism button');
      expect(css).toContain('box-shadow: 3px 3px 0px currentColor !important');
      expect(css).toContain('.style-scrapbook');
      expect(css).toContain('transform: rotate(0deg) !important');
    });
  });
});
