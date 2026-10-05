import { StyleEngine } from '../engine';
import { ResolvedStyle } from '../resolver/style-resolver';
import { CSSAdapter } from '../adapters/css-adapter';

export interface ComputedElementStyle {
  cssProperties: React.CSSProperties;
  cssVariables: Record<string, string>;
  className: string;
  dataStyle: string;
}

/**
 * Maps an element tag and role to concrete StyleEngine component rules.
 * Uses the single production source of truth: StyleEngine and ResolvedStyle.
 */
export function computeElementDesignStyle(
  tagName: string,
  styleId: string,
  engine: StyleEngine,
  role?: string
): ComputedElementStyle {
  const tag = tagName.toLowerCase();
  const resolved: ResolvedStyle = engine.resolveStyleById(styleId, 'element');
  const tokens = resolved.tokens;
  const components = resolved.components;

  const cssProperties: React.CSSProperties = {};

  // 1. Inherit CSS custom properties
  const cssVars = CSSAdapter.toStyleObject(resolved.cssVariables);
  Object.assign(cssProperties, cssVars);

  // 2. Component-specific concrete styles from production StyleEngine
  if (tag === 'button' || role === 'button' || role === 'cta-button' || role === 'nav-action') {
    const btn = components.button;
    if (btn) {
      cssProperties.fontFamily = btn.fontFamily;
      cssProperties.fontSize = btn.fontSize;
      cssProperties.fontWeight = btn.fontWeight as any;
      if (btn.textTransform) cssProperties.textTransform = btn.textTransform;
      if (btn.letterSpacing) cssProperties.letterSpacing = btn.letterSpacing;
      cssProperties.padding = btn.padding;
      cssProperties.borderRadius = btn.borderRadius;
      cssProperties.borderWidth = btn.borderWidth;
      cssProperties.borderStyle = btn.borderStyle;
      cssProperties.borderColor = btn.borderColor;
      if (btn.borderWidth && btn.borderColor) {
        cssProperties.border = `${btn.borderWidth} ${btn.borderStyle || 'solid'} ${btn.borderColor}`;
      }
      cssProperties.backgroundColor = btn.background;
      cssProperties.background = btn.background;
      cssProperties.color = btn.color;
      cssProperties.boxShadow = btn.boxShadow;
      cssProperties.transition = btn.transition || 'all 150ms ease';
      if ((btn as any).backdropFilter) cssProperties.backdropFilter = (btn as any).backdropFilter;
    }
  } else if (
    tag === 'article' ||
    role === 'card' ||
    role === 'pricing-card' ||
    role === 'feature-item' ||
    (tag === 'div' && role?.includes('card'))
  ) {
    const card = components.card;
    if (card) {
      cssProperties.backgroundColor = card.background;
      cssProperties.background = card.background;
      cssProperties.color = card.color;
      cssProperties.borderRadius = card.borderRadius;
      cssProperties.borderWidth = card.borderWidth;
      cssProperties.borderStyle = card.borderStyle;
      cssProperties.borderColor = card.borderColor;
      if (card.borderWidth && card.borderColor) {
        cssProperties.border = `${card.borderWidth} ${card.borderStyle || 'solid'} ${card.borderColor}`;
      }
      cssProperties.boxShadow = card.boxShadow;
      if (card.backdropFilter) cssProperties.backdropFilter = card.backdropFilter;
      cssProperties.padding = card.padding;
    }
  } else if (tag === 'section' || role === 'section' || role === 'hero' || tag === 'header' || tag === 'footer') {
    cssProperties.padding = tokens.spacing?.['2xl'] || '3rem 1.5rem';
    cssProperties.color = tokens.colors?.textPrimary || '#f8fafc';
    cssProperties.background = tokens.colors?.background || '#090d16';
  } else if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag) || role === 'title') {
    const heading = components.heading;
    if (heading) {
      cssProperties.fontFamily = heading.fontFamily;
      cssProperties.fontWeight = heading.fontWeight as any;
      cssProperties.letterSpacing = heading.letterSpacing;
      cssProperties.lineHeight = heading.lineHeight as any;
      cssProperties.color = heading.color;
      if (heading.textTransform) cssProperties.textTransform = heading.textTransform;
    }
  } else if (tag === 'p' || tag === 'span' || tag === 'label' || role === 'subtitle') {
    const para = components.paragraph;
    if (para) {
      cssProperties.fontFamily = para.fontFamily;
      cssProperties.color = para.color;
      cssProperties.lineHeight = para.lineHeight as any;
    }
  } else if (tag === 'input' || tag === 'textarea' || tag === 'select') {
    const inp = components.input;
    if (inp) {
      cssProperties.padding = inp.padding;
      cssProperties.fontFamily = inp.fontFamily;
      cssProperties.fontSize = inp.fontSize;
      cssProperties.borderRadius = inp.borderRadius;
      cssProperties.borderWidth = inp.borderWidth;
      cssProperties.borderStyle = inp.borderStyle;
      cssProperties.borderColor = inp.borderColor;
      cssProperties.backgroundColor = inp.background;
      cssProperties.color = inp.color;
    }
  } else if (tag === 'nav' || tag === 'header' || tag === 'footer' || tag === 'section' || tag === 'main') {
    // Container levels adopt background, text colors, and font family
    cssProperties.fontFamily = tokens.typography.fontFamilyBase;
    cssProperties.color = tokens.colors.textPrimary;
    if (tag === 'section' || tag === 'main') {
      cssProperties.backgroundColor = tokens.colors.background;
    }
  }

  return {
    cssProperties,
    cssVariables: resolved.cssVariables,
    className: `style-${styleId}`,
    dataStyle: styleId,
  };
}

/**
 * Generates copy-ready CSS snippet for an element with specific design language.
 */
export function generateCssSnippetForElement(
  selector: string,
  styleId: string,
  engine: StyleEngine,
  tagName: string,
  overrides?: Record<string, string>
): string {
  const computed = computeElementDesignStyle(tagName, styleId, engine);
  const rules: string[] = [];

  Object.entries(computed.cssProperties).forEach(([prop, val]) => {
    if (val !== undefined && val !== null && val !== '') {
      // convert camelCase to kebab-case
      const kebab = prop.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      rules.push(`  ${kebab}: ${val};`);
    }
  });

  if (overrides) {
    Object.entries(overrides).forEach(([prop, val]) => {
      if (val) {
        const kebab = prop.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
        rules.push(`  ${kebab}: ${val}; /* custom edit */`);
      }
    });
  }

  return `/* Style: ${styleId.toUpperCase()} applied to ${selector} */\n${selector} {\n${rules.join('\n')}\n}`;
}
