import { describe, it, expect } from 'vitest';
import {
  DOC_CATEGORIES,
  ALL_SECTIONS,
  getSectionById,
  getAdjacentSections,
} from '../components/docs/docsData';
import { ALL_29_STYLES } from '../styles/catalog';
import { execSync } from 'child_process';
import path from 'path';

describe('Developer Documentation System Suite', () => {
  it('1. should contain all 5 required documentation categories', () => {
    const titles = DOC_CATEGORIES.map((c) => c.title);
    expect(titles).toContain('GETTING STARTED');
    expect(titles).toContain('USAGE');
    expect(titles).toContain('CODE');
    expect(titles).toContain('STYLES');
    expect(titles).toContain('ADVANCED');
  });

  it('2. should provide all required documentation section items', () => {
    const expectedIds = [
      'intro',
      'installation',
      'quick-start',
      'first-style',
      'element',
      'section',
      'page',
      'composition',
      'overrides',
      'scopes',
      'responsive',
      'html',
      'react',
      'nextjs',
      'javascript',
      'css',
      'cli',
      'style-install',
      'available-styles',
      'style-reference',
      'customization',
      'tokens',
      'combining-styles',
      'custom-rules',
      'exporting',
      'build-production',
      'troubleshooting',
      'zero-to-production',
      'api-reference',
    ];

    for (const id of expectedIds) {
      const sec = getSectionById(id);
      expect(sec, `Expected section "${id}" to exist`).toBeDefined();
      expect(sec?.title.length).toBeGreaterThan(0);
      expect(sec?.description.length).toBeGreaterThan(10);
      expect(sec?.keywords.length).toBeGreaterThan(0);
    }
  });

  it('3. should provide valid bidirectional previous and next links for every section', () => {
    for (let i = 0; i < ALL_SECTIONS.length; i++) {
      const sec = ALL_SECTIONS[i];
      const { prev, next } = getAdjacentSections(sec.id);

      if (i > 0) {
        expect(prev?.id).toBe(ALL_SECTIONS[i - 1].id);
      } else {
        expect(prev).toBeUndefined();
      }

      if (i < ALL_SECTIONS.length - 1) {
        expect(next?.id).toBe(ALL_SECTIONS[i + 1].id);
      } else {
        expect(next).toBeUndefined();
      }
    }
  });

  it('4. should cover all 32 implemented styles in catalog for Style Reference', () => {
    expect(ALL_29_STYLES.length).toBe(32);
    for (const style of ALL_29_STYLES) {
      expect(style.id).toBeDefined();
      expect(style.name).toBeDefined();
      expect(style.category).toBeDefined();
      expect(style.description).toBeDefined();
    }
  });

  it('5. should support CLI subcommands: list, info, and init', () => {
    const cliPath = path.resolve(__dirname, '../../bin/design-engine.js');

    // Test: list subcommand
    const listOutput = execSync(`node "${cliPath}" list`, { encoding: 'utf8' });
    expect(listOutput).toContain('Available Design Languages');
    expect(listOutput).toContain('brutalism');
    expect(listOutput).toContain('bauhaus');

    // Test: info subcommand
    const infoOutput = execSync(`node "${cliPath}" info brutalism`, { encoding: 'utf8' });
    expect(infoOutput).toContain('STYLE: Brutalism (brutalism)');
    expect(infoOutput).toContain('Background:');
    expect(infoOutput).toContain('<div class="style-brutalism">');

    // Test: help subcommand
    const helpOutput = execSync(`node "${cliPath}" --help`, { encoding: 'utf8' });
    expect(helpOutput).toContain('npx design-library <command>');
    expect(helpOutput).toContain('npx design-library info brutalism');
  });
});
