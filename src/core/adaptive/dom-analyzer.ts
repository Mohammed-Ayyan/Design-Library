import { HTMLSanitizer } from './sanitizer';
import { StructureAnalyzer } from './structure-analyzer';
import { RoleResolver } from './role-resolver';
import { RecipeEngine } from './recipe-engine';
import { CompositionStrategyResolver } from './composition-strategy';
import { CompositionPlanner } from './composition-planner';
import { LayoutTransformer } from './layout-transformer';
import { ContentContextAnalyzer } from './context-analyzer';
import { StyleEngine } from '../engine';
import {
  InferredRole,
  CompositionStrategyType,
  ContentDensity,
  CompositionDecision,
  CompositionFingerprint,
  CompositionPlan,
  ContentContext,
} from './types';

export interface DetectedBlock {
  tag: string;
  role: InferredRole;
  composition: CompositionStrategyType;
  density: ContentDensity;
  decision?: CompositionDecision;
  recipeName: string;
  confidence: number;
  textSummary: string;
  depth: number;
}

export interface AnalysisReport {
  sanitizedHtml: string;
  stampedHtml: string;
  styleId: string;
  rootRole: InferredRole;
  composition: CompositionStrategyType;
  density: ContentDensity;
  decision: CompositionDecision;
  plan: CompositionPlan;
  fingerprint: CompositionFingerprint;
  confidence: number;
  recipeName: string;
  rationale: string;
  modifiers: string[];
  detectedBlocks: DetectedBlock[];
  stats: {
    totalElements: number;
    headingCount: number;
    buttonCount: number;
    inputCount: number;
    hasCurrency: boolean;
  };
  contentContext?: ContentContext;
}

interface MiniNode {
  tag: string;
  attrs: Record<string, string>;
  children: (MiniNode | string)[];
  text: string;
  parent?: MiniNode;
}

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

export interface DOMAnalyzerOptions {
  transformStructure?: boolean;
}

export class DOMAnalyzer {
  /**
   * Parses arbitrary HTML, sanitizes it, runs recursive structural analysis down to arbitrary depths,
   * stamps data-role, data-composition, data-layout, data-container, data-grouping, data-item-presentation,
   * data-align, data-variant, and data-density attributes, and returns a detailed report.
   *
   * By default, preserves the source HTML's structural and layout hierarchy without injecting wrapper divs.
   * Pass options.transformStructure = true to enable presentation-level layout wrapping transformations.
   */
  public static analyzeHtml(
    rawHtml: string,
    styleId: string,
    engine: StyleEngine,
    options?: DOMAnalyzerOptions
  ): AnalysisReport {
    const sanitizedHtml = HTMLSanitizer.sanitize(rawHtml);

    // If browser DOMParser is available, use DOMParser
    if (typeof DOMParser !== 'undefined') {
      try {
        return this.analyzeWithDOMParser(sanitizedHtml, styleId, engine, options);
      } catch (err) {
        console.warn('[DOMAnalyzer] DOMParser failed, falling back to AST parser:', err);
      }
    }

    // Universal AST parser for Node / CLI / Vitest / Fallback environments
    return this.analyzeWithAST(sanitizedHtml, styleId, engine, options);
  }

  /**
   * Browser-native analysis using DOMParser
   */
  private static analyzeWithDOMParser(
    sanitizedHtml: string,
    styleId: string,
    engine: StyleEngine,
    options?: DOMAnalyzerOptions
  ): AnalysisReport {
    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitizedHtml, 'text/html');
    const container = doc.body;

    const allElements = Array.from(container.querySelectorAll('*')) as HTMLElement[];
    const headingCount = container.querySelectorAll('h1, h2, h3, h4, h5, h6').length;
    const buttonCount = container.querySelectorAll('button, input[type="submit"], a.button').length;
    const inputCount = container.querySelectorAll('input, textarea, select').length;
    const fullText = container.textContent || '';
    const hasCurrency = /[$€£¥]|\/mo\b|pricing/i.test(fullText);

    const detectedBlocks: DetectedBlock[] = [];
    const contentContext = ContentContextAnalyzer.analyzeDOM(container);

    const traverseAndStamp = (
      el: HTMLElement,
      depth: number,
      siblingIndex: number,
      totalSiblings: number,
      parentRole?: InferredRole,
      ancestorRoles: InferredRole[] = []
    ): void => {
      const tag = el.tagName.toLowerCase();
      const children = Array.from(el.children) as HTMLElement[];
      const childrenTags = children.map((c) => c.tagName.toLowerCase());
      const text = el.textContent || '';
      const elHasCurrency = /[$€£¥]|\/mo\b|pricing/i.test(text);

      // Collect all descendant tags recursively for nested heading/button/etc detection
      const descendantTags: string[] = [];
      const collectDesc = (parent: Element) => {
        for (const child of Array.from(parent.children)) {
          descendantTags.push(child.tagName.toLowerCase());
          collectDesc(child);
        }
      };
      collectDesc(el);

      const signals = StructureAnalyzer.analyze({
        tag,
        childrenTags,
        descendantTags,
        text,
        childCount: children.length,
        hasPriceText: elHasCurrency,
        depth,
        totalSiblings,
        siblingIndex,
        parentRole,
        parentTag: el.parentElement?.tagName.toLowerCase(),
        ancestorRoles,
      });

      const roleContext = RoleResolver.resolveRole(signals, styleId, contentContext);
      const recipe = RecipeEngine.resolveRecipe(styleId, roleContext, engine);
      const decision = roleContext.decision;

      el.setAttribute('data-role', roleContext.role);
      el.setAttribute('data-composition', roleContext.composition);
      el.setAttribute('data-density', roleContext.density);

      if (/^h[1-6]$/i.test(tag)) {
        el.setAttribute('data-layout-slot', 'heading');
      }

      const isLeafOrInline = /^(p|h[1-6]|span|strong|em|a|button|input|label|select|textarea|code|pre|blockquote|li|dd|dt)$/i.test(tag);
      const isHeaderOrNavOrFooter = /^(header|nav|footer)$/i.test(tag);
      const isCollectionItem = roleContext.role === 'feature-item' || roleContext.role === 'card' || roleContext.role === 'pricing-card' || tag === 'article';
      const isGroupContainer = (roleContext.role === 'feature-group' || roleContext.role === 'card-grid' || roleContext.role === 'pricing-grid' || (children.length >= 2 && children.some(c => c.tagName.toLowerCase() === 'article' || c.getAttribute('data-role') === 'feature-item'))) && !isLeafOrInline && !isHeaderOrNavOrFooter;
      const isSectionOrPage = !isLeafOrInline && !isHeaderOrNavOrFooter && (tag === 'section' || tag === 'main' || tag === 'form' || roleContext.role === 'hero' || roleContext.role === 'feature-section' || roleContext.role === 'pricing-grid' || roleContext.role === 'card-grid' || depth === 1);

      if (isCollectionItem) {
        const collectionSiblings = Array.from(el.parentElement?.children || []).filter((c) => {
          const cTag = (c as HTMLElement).tagName?.toLowerCase();
          const cRole = (c as HTMLElement).getAttribute?.('data-role');
          return cTag === tag || cRole === roleContext.role || cTag === 'article';
        });
        const collectionIndex = collectionSiblings.indexOf(el);
        const effectiveVariant = collectionIndex >= 0 ? collectionIndex % 3 : roleContext.variantIndex;
        el.setAttribute('data-variant', String(effectiveVariant));
        if (decision) {
          el.setAttribute('data-item-presentation', decision.itemPresentation);
        }
      }

      if (isSectionOrPage && decision) {
        el.setAttribute('data-layout', decision.layoutMode);
        el.setAttribute('data-container', decision.containerTreatment);
        el.setAttribute('data-align', decision.alignment);
      }

      if (isGroupContainer && decision) {
        el.setAttribute('data-grouping', decision.groupingTreatment);
      }

      detectedBlocks.push({
        tag,
        role: roleContext.role,
        composition: roleContext.composition,
        density: roleContext.density,
        decision,
        recipeName: recipe.recipeName,
        confidence: roleContext.confidence,
        textSummary: text.trim().slice(0, 60),
        depth,
      });

      const currentAncestors = [...ancestorRoles, roleContext.role];

      children.forEach((child, idx) => {
        traverseAndStamp(child, depth + 1, idx, children.length, roleContext.role, currentAncestors);
      });
    };

    const topLevelElements = Array.from(container.children) as HTMLElement[];
    topLevelElements.forEach((topEl, idx) => {
      traverseAndStamp(topEl, 1, idx, topLevelElements.length);
    });

    // Contextual button refinements
    const buttons = Array.from(container.querySelectorAll<HTMLButtonElement>('button, input[type="submit"], a.button'));
    buttons.forEach((btn) => {
      const parent = btn.parentElement?.closest('[data-role]:not(button):not(input):not(a)') as HTMLElement | null;
      const parentRole = (parent?.getAttribute('data-role') as InferredRole) || 'generic-container';
      let btnRole: InferredRole = 'button';
      if (parentRole === 'hero' || parentRole === 'header') btnRole = 'cta-button';
      else if (parentRole === 'navigation') btnRole = 'nav-action';
      else if (parentRole === 'pricing-card' || parentRole === 'pricing-grid') btnRole = 'pricing-action';
      else if (parentRole === 'feature-item' || parentRole === 'card' || parentRole === 'card-grid' || parentRole === 'feature-group') btnRole = 'card-action';
      else if (parentRole === 'form') btnRole = 'form-submit';

      btn.setAttribute('data-role', btnRole);
    });

    const primaryElement = topLevelElements[0] || container;
    const rootRole = (primaryElement.getAttribute('data-role') as InferredRole) || 'generic-container';
    const rootComposition = (primaryElement.getAttribute('data-composition') as CompositionStrategyType) || 'generic-balanced';
    const rootDensity = (primaryElement.getAttribute('data-density') as ContentDensity) || 'normal';
    const rootBlock = detectedBlocks[0];

    // For composite documents where root element is main or generic-container,
    // identify the prominent section role (e.g. feature-section, hero, pricing-card)
    const prominentBlock =
      (rootRole === 'generic-container' || rootRole === 'page')
        ? detectedBlocks.find((b) => b.role === 'feature-section') ||
          detectedBlocks.find((b) => b.role === 'hero') ||
          detectedBlocks.find((b) => b.role === 'pricing-card') ||
          detectedBlocks.find((b) => b.role === 'article') ||
          rootBlock
        : rootBlock;

    const effectiveRole = (rootRole === 'generic-container' || rootRole === 'page') ? (prominentBlock?.role || rootRole) : rootRole;

    const plan = CompositionPlanner.plan(
      styleId,
      effectiveRole,
      undefined,
      detectedBlocks.map((b) => ({ role: b.role, signals: {} })),
      contentContext
    );

    if (options?.transformStructure === true) {
      LayoutTransformer.transformDOM(container, plan);
    }

    const decision = CompositionStrategyResolver.resolveDecision(
      styleId,
      effectiveRole,
      undefined,
      rootDensity,
      contentContext
    );
    const fingerprint = CompositionStrategyResolver.extractFingerprint(
      styleId,
      decision,
      contentContext.primaryContext,
      plan.sectionPlans
    );

    primaryElement.setAttribute('data-context', contentContext.primaryContext);

    return {
      sanitizedHtml,
      stampedHtml: container.innerHTML,
      styleId,
      rootRole,
      composition: rootComposition,
      density: rootDensity,
      decision,
      plan,
      fingerprint,
      confidence: rootBlock?.confidence ?? 0.85,
      recipeName: rootBlock?.recipeName ?? 'Base Generic Recipe',
      rationale: `Hierarchically resolved as ${rootRole} with ${rootComposition} composition.`,
      modifiers: [`variant-${primaryElement.getAttribute('data-variant') || '0'}`],
      detectedBlocks,
      stats: {
        totalElements: allElements.length,
        headingCount,
        buttonCount,
        inputCount,
        hasCurrency,
      },
      contentContext,
    };
  }

  /**
   * Universal AST-based analysis for Node, CLI, and fallback environments.
   * Parses the HTML tree, stamps attributes on all nodes recursively, and serializes back.
   */
  private static analyzeWithAST(
    sanitizedHtml: string,
    styleId: string,
    engine: StyleEngine,
    options?: DOMAnalyzerOptions
  ): AnalysisReport {
    const rootNodes = this.parseMiniAST(sanitizedHtml);
    let totalElements = 0;
    const detectedBlocks: DetectedBlock[] = [];
    const contentContext = ContentContextAnalyzer.analyze(sanitizedHtml);
    let headingCount = 0;
    let buttonCount = 0;
    let inputCount = 0;

    const traverseAndStampAST = (
      node: MiniNode,
      depth: number,
      siblingIndex: number,
      totalSiblings: number,
      parentRole?: InferredRole,
      ancestorRoles: InferredRole[] = []
    ): void => {
      totalElements++;
      const tag = node.tag.toLowerCase();
      if (/^h[1-6]$/.test(tag)) headingCount++;
      if (tag === 'button') buttonCount++;
      if (tag === 'input' || tag === 'textarea' || tag === 'select') inputCount++;

      const elementChildren = node.children.filter((c): c is MiniNode => typeof c !== 'string');
      const childrenTags = elementChildren.map((c) => c.tag.toLowerCase());
      const text = node.text || '';
      const elHasCurrency = /[$€£¥]|\/mo\b|pricing/i.test(text);

      // Collect all descendant tags recursively for nested heading/button/etc detection
      const descendantTags: string[] = [];
      const collectDescAST = (parent: MiniNode) => {
        for (const child of parent.children) {
          if (typeof child !== 'string') {
            descendantTags.push(child.tag.toLowerCase());
            collectDescAST(child);
          }
        }
      };
      collectDescAST(node);

      const signals = StructureAnalyzer.analyze({
        tag,
        childrenTags,
        descendantTags,
        text,
        childCount: elementChildren.length,
        hasPriceText: elHasCurrency,
        depth,
        totalSiblings,
        siblingIndex,
        parentRole,
        parentTag: node.parent?.tag.toLowerCase(),
        ancestorRoles,
      });

      const roleContext = RoleResolver.resolveRole(signals, styleId, contentContext);
      const recipe = RecipeEngine.resolveRecipe(styleId, roleContext, engine);
      const decision = roleContext.decision;

      node.attrs['data-role'] = roleContext.role;
      node.attrs['data-composition'] = roleContext.composition;
      node.attrs['data-density'] = roleContext.density;

      if (/^h[1-6]$/i.test(tag)) {
        node.attrs['data-layout-slot'] = 'heading';
      }

      const isLeafOrInline = /^(p|h[1-6]|span|strong|em|a|button|input|label|select|textarea|code|pre|blockquote|li|dd|dt)$/i.test(tag);
      const isHeaderOrNavOrFooter = /^(header|nav|footer)$/i.test(tag);
      const isCollectionItem = roleContext.role === 'feature-item' || roleContext.role === 'card' || roleContext.role === 'pricing-card' || tag === 'article';
      const isGroupContainer = (roleContext.role === 'feature-group' || roleContext.role === 'card-grid' || roleContext.role === 'pricing-grid' || (elementChildren.length >= 2 && elementChildren.some(c => c.tag.toLowerCase() === 'article' || c.attrs['data-role'] === 'feature-item'))) && !isLeafOrInline && !isHeaderOrNavOrFooter;
      const isSectionOrPage = !isLeafOrInline && !isHeaderOrNavOrFooter && (tag === 'section' || tag === 'main' || tag === 'form' || roleContext.role === 'hero' || roleContext.role === 'feature-section' || roleContext.role === 'pricing-grid' || roleContext.role === 'card-grid' || depth === 1);

      if (isCollectionItem) {
        const collectionSiblings = node.parent
          ? (node.parent.children.filter((c: MiniNode | string): c is MiniNode => typeof c !== 'string')).filter(
              (c: MiniNode) => c.tag.toLowerCase() === tag || c.attrs['data-role'] === roleContext.role || c.tag.toLowerCase() === 'article'
            )
          : [];
        const collectionIndex = collectionSiblings.indexOf(node);
        const effectiveVariant = collectionIndex >= 0 ? collectionIndex % 3 : roleContext.variantIndex;
        node.attrs['data-variant'] = String(effectiveVariant);
        if (decision) {
          node.attrs['data-item-presentation'] = decision.itemPresentation;
        }
      }

      if (isSectionOrPage && decision) {
        node.attrs['data-layout'] = decision.layoutMode;
        node.attrs['data-container'] = decision.containerTreatment;
        node.attrs['data-align'] = decision.alignment;
      }

      if (isGroupContainer && decision) {
        node.attrs['data-grouping'] = decision.groupingTreatment;
      }

      detectedBlocks.push({
        tag,
        role: roleContext.role,
        composition: roleContext.composition,
        density: roleContext.density,
        decision,
        recipeName: recipe.recipeName,
        confidence: roleContext.confidence,
        textSummary: text.trim().slice(0, 60),
        depth,
      });

      const currentAncestors = [...ancestorRoles, roleContext.role];

      elementChildren.forEach((child, idx) => {
        traverseAndStampAST(child, depth + 1, idx, elementChildren.length, roleContext.role, currentAncestors);
      });
    };

    rootNodes.forEach((rootNode, idx) => {
      traverseAndStampAST(rootNode, 1, idx, rootNodes.length);
    });

    // Button contextual role refinement in AST
    const refineButtons = (node: MiniNode, currentParentRole?: InferredRole) => {
      const myRole = (node.attrs['data-role'] as InferredRole) || currentParentRole;
      if (node.tag === 'button') {
        let btnRole: InferredRole = 'button';
        if (currentParentRole === 'hero' || currentParentRole === 'header') btnRole = 'cta-button';
        else if (currentParentRole === 'navigation') btnRole = 'nav-action';
        else if (currentParentRole === 'pricing-card' || currentParentRole === 'pricing-grid') btnRole = 'pricing-action';
        else if (currentParentRole === 'feature-item' || currentParentRole === 'card' || currentParentRole === 'card-grid' || currentParentRole === 'feature-group') btnRole = 'card-action';
        else if (currentParentRole === 'form') btnRole = 'form-submit';

        node.attrs['data-role'] = btnRole;
      }

      node.children.forEach((c) => {
        if (typeof c !== 'string') {
          refineButtons(c, myRole);
        }
      });
    };

    rootNodes.forEach((root) => refineButtons(root));

    const primaryNode = rootNodes[0];
    const rootRole = (primaryNode?.attrs['data-role'] as InferredRole) || 'generic-container';
    const rootComposition = (primaryNode?.attrs['data-composition'] as CompositionStrategyType) || 'generic-balanced';
    const rootDensity = (primaryNode?.attrs['data-density'] as ContentDensity) || 'normal';
    const rootBlock = detectedBlocks[0];

    // For composite documents where root element is main or generic-container,
    // identify the prominent section role (e.g. feature-section, hero, pricing-card)
    const prominentBlock =
      (rootRole === 'generic-container' || rootRole === 'page')
        ? detectedBlocks.find((b) => b.role === 'feature-section') ||
          detectedBlocks.find((b) => b.role === 'hero') ||
          detectedBlocks.find((b) => b.role === 'pricing-card') ||
          detectedBlocks.find((b) => b.role === 'article') ||
          rootBlock
        : rootBlock;

    const effectiveRole = (rootRole === 'generic-container' || rootRole === 'page') ? (prominentBlock?.role || rootRole) : rootRole;

    const plan = CompositionPlanner.plan(
      styleId,
      effectiveRole,
      undefined,
      detectedBlocks.map((b) => ({ role: b.role, signals: {} })),
      contentContext
    );

    if (options?.transformStructure === true) {
      LayoutTransformer.transformAST(rootNodes, plan);
    }

    const decision = CompositionStrategyResolver.resolveDecision(
      styleId,
      effectiveRole,
      undefined,
      rootDensity,
      contentContext
    );
    const fingerprint = CompositionStrategyResolver.extractFingerprint(
      styleId,
      decision,
      contentContext.primaryContext,
      plan.sectionPlans
    );

    if (primaryNode) {
      primaryNode.attrs['data-context'] = contentContext.primaryContext;
    }

    const stampedHtml = rootNodes.map((n) => this.serializeMiniNode(n)).join('');
    const hasCurrency = /[$€£¥]|\/mo\b|pricing/i.test(sanitizedHtml);

    return {
      sanitizedHtml,
      stampedHtml,
      styleId,
      rootRole,
      composition: rootComposition,
      density: rootDensity,
      decision,
      plan,
      fingerprint,
      confidence: rootBlock?.confidence ?? 0.85,
      recipeName: rootBlock?.recipeName ?? 'Base Generic Recipe',
      rationale: `Hierarchically resolved as ${rootRole} with ${rootComposition} composition.`,
      modifiers: [`variant-${primaryNode?.attrs['data-variant'] || '0'}`],
      detectedBlocks,
      stats: {
        totalElements: Math.max(totalElements, 1),
        headingCount,
        buttonCount,
        inputCount,
        hasCurrency,
      },
      contentContext,
    };
  }

  /**
   * Lightweight tag-based tokenizer and tree builder.
   */
  private static parseMiniAST(html: string): MiniNode[] {
    const rootNodes: MiniNode[] = [];
    const stack: MiniNode[] = [];

    // Tag tokenizer regex matching: comments, closing tags, opening tags, text
    const tagRegex = /(?:<!--[\s\S]*?-->|<(\/)?([a-z0-9-]+)((?:\s+[^>]*?)?)\s*(\/)?>|([^<]+))/gi;
    let match: RegExpExecArray | null;

    while ((match = tagRegex.exec(html)) !== null) {
      const [fullMatch, isClosing, tagName, attrStr, isSelfClosing, textContent] = match;

      if (fullMatch.startsWith('<!--')) {
        continue;
      }

      if (textContent) {
        if (stack.length > 0) {
          const top = stack[stack.length - 1];
          top.children.push(textContent);
          top.text += textContent;
          // Also append text to ancestors for accurate textLength metrics
          for (let i = stack.length - 2; i >= 0; i--) {
            stack[i].text += textContent;
          }
        }
        continue;
      }

      if (tagName) {
        const tag = tagName.toLowerCase();

        if (isClosing) {
          // Pop until matching tag
          for (let i = stack.length - 1; i >= 0; i--) {
            if (stack[i].tag === tag) {
              stack.splice(i);
              break;
            }
          }
        } else {
          // Opening tag
          const attrs: Record<string, string> = {};
          if (attrStr) {
            const attrRegex = /([a-z0-9_-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/gi;
            let attrMatch: RegExpExecArray | null;
            while ((attrMatch = attrRegex.exec(attrStr)) !== null) {
              const name = attrMatch[1];
              const val = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? '';
              attrs[name] = val;
            }
          }

          const node: MiniNode = {
            tag,
            attrs,
            children: [],
            text: '',
            parent: stack[stack.length - 1],
          };

          if (stack.length > 0) {
            stack[stack.length - 1].children.push(node);
          } else {
            rootNodes.push(node);
          }

          const isVoid = VOID_TAGS.has(tag) || Boolean(isSelfClosing);
          if (!isVoid) {
            stack.push(node);
          }
        }
      }
    }

    return rootNodes;
  }

  /**
   * Serializes a MiniNode back to HTML with all stamped attributes.
   */
  private static serializeMiniNode(node: MiniNode): string {
    const attrEntries = Object.entries(node.attrs);
    const attrStr =
      attrEntries.length > 0
        ? ' ' + attrEntries.map(([k, v]) => `${k}="${v.replace(/"/g, '&quot;')}"`).join(' ')
        : '';

    const isVoid = VOID_TAGS.has(node.tag);
    if (isVoid) {
      return `<${node.tag}${attrStr}>`;
    }

    const inner = node.children
      .map((c) => (typeof c === 'string' ? c : this.serializeMiniNode(c)))
      .join('');

    return `<${node.tag}${attrStr}>${inner}</${node.tag}>`;
  }

  /**
   * Helper to extract composition fingerprint directly from an analysis report.
   */
  public static getFingerprint(report: AnalysisReport): CompositionFingerprint {
    return report.fingerprint;
  }
}

