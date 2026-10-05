import { describe, it, expect } from 'vitest';
import { executeCliCommand } from '../core/cli-runner';
import { defaultStyles } from '../styles';
import { ALL_29_STYLES } from '../styles/catalog';

describe('Design Studio & Interactive CLI Engine Suite', () => {
  describe('In-Browser CLI Execution Engine', () => {
    it('1. should execute "list" command and output active styles including Wabi-Sabi', () => {
      const result = executeCliCommand('design-library list');
      expect(result.exitCode).toBe(0);
      expect(result.output).toContain('Available Design Languages');
      expect(result.output).toContain('wabi-sabi');
      expect(result.output).toContain('Wabi-Sabi');
      expect(result.output).toContain('brutalism');
      expect(result.output).toContain('cyberpunk');
    });

    it('2. should execute "info wabi-sabi" and output authentic tokens and typography', () => {
      const result = executeCliCommand('design-library info wabi-sabi');
      expect(result.exitCode).toBe(0);
      expect(result.output).toContain('DESIGN LANGUAGE SPECIFICATION: WABI-SABI');
      expect(result.output).toContain('TYPOGRAPHY TOKENS');
      expect(result.output).toContain('COLOR PALETTE TOKENS');
      expect(result.output).toContain('GEOMETRY & EFFECTS');
      expect(result.output).toContain('data-style="wabi-sabi"');
    });

    it('3. should execute "export-css wabi-sabi" and generate scoped CSS', () => {
      const result = executeCliCommand('design-library export-css wabi-sabi');
      expect(result.exitCode).toBe(0);
      expect(result.output).toContain('Compiled Design Language: Wabi-Sabi');
      expect(result.output).toContain('data-style="wabi-sabi"');
    });

    it('4. should execute "apply index.html --style brutalism --standalone" with stamped HTML', () => {
      const result = executeCliCommand('design-library apply index.html --style brutalism --standalone');
      expect(result.exitCode).toBe(0);
      expect(result.output).toContain('<!DOCTYPE html>');
      expect(result.output).toContain('data-style="brutalism"');
      expect(result.output).toContain('<link rel="stylesheet" href="./brutalism.css">');
    });

    it('5. should execute "init" and output scaffolding guidance', () => {
      const result = executeCliCommand('design-library init');
      expect(result.exitCode).toBe(0);
      expect(result.output).toContain('[design-library init]');
      expect(result.output).toContain('design-library.css');
    });

    it('6. should output help when --help is supplied', () => {
      const result = executeCliCommand('design-library --help');
      expect(result.exitCode).toBe(0);
      expect(result.output).toContain('Adaptive Design Style Engine CLI');
      expect(result.output).toContain('Commands:');
    });
  });

  describe('Design Studio Style Integrity & Scope Support', () => {
    it('7. should confirm all active styles in catalog are registered in defaultStyles', () => {
      const activeCatalog = ALL_29_STYLES.filter((s) => s.status === 'active');
      const defaultIds = new Set(defaultStyles.map((s) => s.id));

      activeCatalog.forEach((item) => {
        expect(defaultIds.has(item.id)).toBe(true);
      });
    });

    it('8. should verify Wabi-Sabi is active and has correct metadata', () => {
      const wabiSabi = ALL_29_STYLES.find((s) => s.id === 'wabi-sabi');
      expect(wabiSabi).toBeDefined();
      expect(wabiSabi?.status).toBe('active');
      expect(wabiSabi?.accentColor).toBe('#4d7c0f');
    });
  });
});
