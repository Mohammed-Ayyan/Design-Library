import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

describe('CLI Executable Interface Suite', () => {
  const cliPath = path.resolve(__dirname, '../../bin/design-engine.js');

  it('1. should output help documentation when --help is supplied', () => {
    const output = execSync(`node "${cliPath}" --help`, { encoding: 'utf8' });
    expect(output).toContain('Adaptive Design Style Engine CLI');
    expect(output).toContain('--style');
    expect(output).toContain('--standalone');
    expect(output).toContain('--report');
    expect(output).toContain('--list-styles');
  });

  it('2. should list all 29 design languages with active flags when --list-styles is supplied', () => {
    const output = execSync(`node "${cliPath}" --list-styles`, { encoding: 'utf8' });
    expect(output).toMatch(/Available Design Languages \(\d+ total\)/);
    expect(output).toContain('ACTIVE & ADAPTIVE:');
    expect(output).toContain('brutalism');
    expect(output).toContain('minimalism');
    expect(output).toContain('glassmorphism');
    expect(output).toContain('swiss-design');
    expect(output).toContain('cyberpunk');
    expect(output).toContain('wabi-sabi');
    expect(output).toContain('CATALOG (PLANNED):');
    expect(output).toContain('bento-grid');
    expect(output).toContain('neo-brutalism');
  });

  it('3. should print version when -v or --version is supplied', () => {
    const output = execSync(`node "${cliPath}" -v`, { encoding: 'utf8' });
    expect(output.trim()).toMatch(/^v\d+\.\d+\.\d+/);
  });

  it('4. should transform input HTML into Swiss Design via pipe/stdin', () => {
    const inputHtml = '<div><h1>Alpine Architecture</h1><p>Disciplined typography.</p><button>Explore</button></div>';
    const output = execSync(`node "${cliPath}" --style swiss-design`, {
      input: inputHtml,
      encoding: 'utf8',
    });

    expect(output).toContain('class="style-swiss-design"');
    expect(output).toContain('data-role="hero"');
    expect(output).toContain('data-composition="hero-swiss-grid"');
    expect(output).toContain('Alpine Architecture');
  });

  it('5. should transform input HTML into Cyberpunk via pipe/stdin', () => {
    const inputHtml = '<section><h2>Cyber Deck</h2><div><div><h3>ICE Breaker</h3><p>Subvert network security.</p></div><div><h3>Telemetry</h3><p>Real-time data stream.</p></div></div></section>';
    const output = execSync(`node "${cliPath}" --style cyberpunk`, {
      input: inputHtml,
      encoding: 'utf8',
    });

    expect(output).toContain('class="style-cyberpunk"');
    expect(output).toContain('data-composition="features-cyberpunk-nodes"');
    expect(output).toContain('data-role="feature-item"');
  });

  it('6. should transform input HTML into Wabi-Sabi via pipe/stdin', () => {
    const inputHtml = '<div><h2>Tea Ceremony</h2><p>$75 per session</p><button>Reserve</button></div>';
    const output = execSync(`node "${cliPath}" --style wabi-sabi`, {
      input: inputHtml,
      encoding: 'utf8',
    });

    expect(output).toContain('class="style-wabi-sabi"');
    expect(output).toContain('data-composition="pricing-wabi-sabi-harmony"');
  });

  it('7. should output valid JSON analysis report when --report is passed', () => {
    const inputHtml = '<form><h2>Join Terminal</h2><input type="text" /><button>Connect</button></form>';
    const output = execSync(`node "${cliPath}" --style brutalism --report`, {
      input: inputHtml,
      encoding: 'utf8',
    });

    const parsed = JSON.parse(output);
    expect(parsed.rootRole).toBe('form');
    expect(parsed.recipeName).toContain('Brutalist Form');
    expect(parsed.stats.buttonCount).toBe(1);
    expect(parsed.stats.inputCount).toBe(1);
  });

  it('8. should emit standalone HTML5 document with embedded styles when --standalone is passed', () => {
    const inputHtml = '<div><h1>Standalone Doc</h1><p>Full page preview.</p><button>Run</button></div>';
    const output = execSync(`node "${cliPath}" --style minimalism --standalone`, {
      input: inputHtml,
      encoding: 'utf8',
    });

    expect(output).toContain('<!DOCTYPE html>');
    expect(output).toContain('<html lang="en">');
    expect(output).toContain('<style>');
    expect(output).toContain('.style-minimalism');
    expect(output).toContain('data-composition="hero-airy-editorial"');
    expect(output).toContain('</html>');
  });

  it('9. should support file input and file output flags (-o)', () => {
    const tmpInput = path.resolve(__dirname, 'tmp-input.html');
    const tmpOutput = path.resolve(__dirname, 'tmp-output.html');

    try {
      fs.writeFileSync(tmpInput, '<div><h2>File IO Test</h2><p>Working seamlessly.</p></div>', 'utf8');
      execSync(`node "${cliPath}" "${tmpInput}" --style swiss-design -o "${tmpOutput}"`, {
        encoding: 'utf8',
      });

      expect(fs.existsSync(tmpOutput)).toBe(true);
      const content = fs.readFileSync(tmpOutput, 'utf8');
      expect(content).toContain('class="style-swiss-design"');
      expect(content).toContain('File IO Test');
    } finally {
      if (fs.existsSync(tmpInput)) fs.unlinkSync(tmpInput);
      if (fs.existsSync(tmpOutput)) fs.unlinkSync(tmpOutput);
    }
  });

  it('10. should transform input HTML with hybrid style expression', () => {
    const inputHtml = '<section><h2>Hybrid Card</h2><p>Zen frosted blend.</p><button>Confirm</button></section>';
    const output = execSync(`node "${cliPath}" --style "wabi-sabi + glassmorphism"`, {
      input: inputHtml,
      encoding: 'utf8',
    });

    expect(output).toContain('style-wabi-sabi');
    expect(output).toContain('style-glassmorphism');
    expect(output).toContain('style-hybrid');
    expect(output).toContain('data-hybrid="true"');
    expect(output).toContain('Hybrid Card');
  });
});
