import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { HowItWorksSection } from '../components/HowItWorksSection';

describe('How Design Style Library Works Suite', () => {
  it('1. should render the HowItWorksSection header and core architecture thesis', () => {
    const html = renderToString(<HowItWorksSection />);
    expect(html).toContain('How Design Style Library Actually Works');
    expect(html).toContain('STRUCTURE ≠ STYLE');
    expect(html).toContain('UNDER THE HOOD • COMPILER ARCHITECTURE');
  });

  it('2. should contain the 5 distinct pipeline stages in the interactive explorer', () => {
    const html = renderToString(<HowItWorksSection />);
    expect(html).toContain('STAGE 1');
    expect(html).toContain('Semantic DOM Ingestion');
    expect(html).toContain('Context &amp; Role Analyzer');
    expect(html).toContain('Aesthetic Grammar Synthesis');
    expect(html).toContain('Scoped Cascade Compiler');
    expect(html).toContain('Sub-Millisecond CSS Injection');
  });

  it('3. should render the real build process video player container with 1080p timelapse reference', () => {
    const html = renderToString(<HowItWorksSection />);
    expect(html).toContain('Full Engineering Build Process: Behind the Scenes');
    expect(html).toContain('1080P TIMELAPSE • YOUTUBE STREAM');
    expect(html).toContain('https://www.youtube.com/embed/joLwo1rvk8w');
  });

  it('4. should render chapter bookmarks for the build process video', () => {
    const html = renderToString(<HowItWorksSection />);
    expect(html).toContain('00:00 Architectural Setup &amp; Engine Core');
    expect(html).toContain('01:15 Token Model &amp; AST Parser');
    expect(html).toContain('02:40 Context-Aware Grammar Ingestion');
    expect(html).toContain('04:00 32 Visual Languages Implementation');
    expect(html).toContain('05:30 Zero-CSS Testing &amp; CLI');
  });

  it('5. should present the 4 core engineering tenets', () => {
    const html = renderToString(<HowItWorksSection />);
    expect(html).toContain('Structure ≠ Style Separation');
    expect(html).toContain('Contextual Role Inference');
    expect(html).toContain('Zero Runtime Dependencies');
    expect(html).toContain('Cross-Framework Universal Interop');
  });

  it('6. should render call-to-action triggers to Custom HTML and SaaS App', () => {
    const html = renderToString(<HowItWorksSection />);
    expect(html).toContain('cta-open-custom-html');
    expect(html).toContain('cta-open-saas-app');
    expect(html).toContain('Live SaaS App (Zero CSS)');
  });
});
