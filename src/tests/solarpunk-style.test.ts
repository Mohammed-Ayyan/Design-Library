import { describe, it, expect, beforeEach } from 'vitest';
import { StyleEngine } from '../core/engine';
import { solarpunkStyle, solarpunkSemanticCss } from '../styles/solarpunk';
import { cyberpunkStyle } from '../styles/cyberpunk';
import { wabiSabiStyle } from '../styles/wabi-sabi';
import { artDecoStyle } from '../styles/art-deco';
import { defaultStyles } from '../styles';

describe('Solarpunk Design Language — Comprehensive Verification Suite', () => {
  let engine: StyleEngine;

  beforeEach(() => {
    engine = new StyleEngine(defaultStyles);
  });

  // 1. Definition & Token Integrity
  it('1. should resolve Solarpunk style definition with authentic ecological futurism tokens', () => {
    expect(solarpunkStyle.id).toBe('solarpunk');
    expect(solarpunkStyle.name).toBe('Solarpunk');
    expect(solarpunkStyle.tokens.colors.background).toBe('#f0fdf4');
    expect(solarpunkStyle.tokens.colors.primary).toBe('#15803d');
    expect(solarpunkStyle.tokens.colors.accent).toBe('#eab308');
    expect(solarpunkStyle.compositionConfig.hasDecorativeFraming).toBe(true);
  });

  // 2. Engine Resolution
  it('2. should correctly resolve Solarpunk through StyleEngine', () => {
    const resolved = engine.resolveStyle('solarpunk');
    expect(resolved.styleId).toBe('solarpunk');
    expect(resolved.styleName).toBe('Solarpunk');
    expect(resolved.tokens.colors.textPrimary).toBe('#14532d');
    expect(resolved.tokens.typography.fontFamilyHeading).toContain('Outfit');
  });

  // 3. Semantic CSS Rules
  it('3. should provide rich semantic CSS rules for Solarpunk', () => {
    expect(solarpunkSemanticCss).toContain('solarpunk');
    expect(solarpunkSemanticCss).toContain('#15803d');
    expect(solarpunkSemanticCss).toContain('#f0fdf4');
    expect(solarpunkSemanticCss).toContain('Plus Jakarta Sans');
  });

  // 4. Cultural & Architectural Differentiation
  it('4. should be distinct from Cyberpunk (organic solar vs high-tech neon)', () => {
    expect(solarpunkStyle.tokens.colors.primary).not.toBe(cyberpunkStyle.tokens.colors.primary);
    expect(solarpunkStyle.tokens.colors.background).toBe('#f0fdf4');
    expect(cyberpunkStyle.tokens.colors.background).toBe('#07090e');
  });

  it('5. should be distinct from Wabi-Sabi and Art Deco', () => {
    expect(solarpunkStyle.tokens.colors.accent).not.toBe(wabiSabiStyle.tokens.colors.accent);
    expect(solarpunkStyle.tokens.colors.primary).not.toBe(artDecoStyle.tokens.colors.primary);
  });
});
