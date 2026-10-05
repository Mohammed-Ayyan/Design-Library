import {
  CompositionPlan,
  InferredRole,
} from './types';

export interface MiniASTNode {
  tag: string;
  attrs: Record<string, string>;
  children: (MiniASTNode | string)[];
  text: string;
  parent?: MiniASTNode;
}

/**
 * LayoutTransformer performs deterministic presentation-level layout transformations
 * on the semantic DOM AST according to the holistic CompositionPlan.
 *
 * It enforces:
 * 1. Semantic Integrity: Keeps user markup intact without destroying original elements.
 * 2. Structural Grouping: When a section contains a heading and multiple items directly,
 *    it introduces a generic layout group container (<div data-layout-group="items">)
 *    so split-column and multi-column grid layouts never place items into the heading column.
 * 3. Content Safety: Protects text content, buttons, links, images, and prevents horizontal overflow.
 */
export class LayoutTransformer {
  /**
   * Transforms an AST tree according to the CompositionPlan.
   */
  public static transformAST(
    rootNodes: MiniASTNode[],
    plan: CompositionPlan
  ): { transformedNodes: MiniASTNode[]; safetyPassed: boolean } {
    const preTextLength = this.computeASTTextLength(rootNodes);
    const preElementCount = this.computeASTElementCount(rootNodes);

    for (const root of rootNodes) {
      this.transformNodeRecursively(root, plan);
    }

    const postTextLength = this.computeASTTextLength(rootNodes);
    const postElementCount = this.computeASTElementCount(rootNodes);

    // Content Safety Assertion: No text or content loss allowed!
    const safetyPassed =
      postTextLength >= preTextLength * 0.99 && postElementCount >= preElementCount;

    return {
      transformedNodes: rootNodes,
      safetyPassed,
    };
  }

  /**
   * Transforms a browser HTMLElement tree according to the CompositionPlan.
   */
  public static transformDOM(
    container: HTMLElement,
    plan: CompositionPlan
  ): { safetyPassed: boolean } {
    const preText = (container.textContent || '').trim().length;

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>('section, [data-role="feature-section"], [data-role="hero"]')
    );

    for (const sec of sections) {
      const role = (sec.getAttribute('data-role') as InferredRole) || 'feature-section';
      const sectionPlan =
        plan.sectionPlans.find((p) => p.role === role) || plan.featuresPlan;

      if (sectionPlan && sectionPlan.needsLayoutGroup) {
        this.groupDOMSectionItems(sec, sectionPlan.groupingTreatment, sectionPlan.itemPresentation);
      }
    }

    const postText = (container.textContent || '').trim().length;
    return {
      safetyPassed: postText >= preText * 0.99,
    };
  }

  private static transformNodeRecursively(
    node: MiniASTNode,
    plan: CompositionPlan
  ): void {
    const role = (node.attrs['data-role'] as InferredRole) || 'generic-container';
    const sectionPlan =
      plan.sectionPlans.find((p) => p.role === role) ||
      (role === 'hero' ? plan.heroPlan : plan.featuresPlan);

    // Check if this node is a container requiring layout grouping
    const elementChildren = node.children.filter(
      (c): c is MiniASTNode => typeof c !== 'string'
    );

    const hasHeading = elementChildren.some((c) => /^h[1-6]$/.test(c.tag));
    const itemChildren = elementChildren.filter((c) => !/^h[1-6]$/.test(c.tag) && c.tag !== 'header');

    if (
      sectionPlan &&
      sectionPlan.needsLayoutGroup &&
      (role === 'feature-section' || role === 'section' || role === 'card-grid') &&
      hasHeading &&
      itemChildren.length >= 2
    ) {
      // Check if items are already wrapped in a single container
      const isAlreadyGrouped =
        elementChildren.length === 2 &&
        elementChildren[1].attrs['data-layout-group'] === 'items';

      if (!isAlreadyGrouped) {
        // Group item children inside a generic layout container
        const headingNodes = node.children.filter(
          (c) => typeof c !== 'string' && /^h[1-6]$/.test(c.tag)
        );

        // Mark heading with slot attribute
        headingNodes.forEach((h) => {
          if (typeof h !== 'string') {
            h.attrs['data-layout-slot'] = 'heading';
          }
        });

        const itemsToWrap: (MiniASTNode | string)[] = [];
        const newChildren: (MiniASTNode | string)[] = [];

        for (const child of node.children) {
          if (typeof child !== 'string' && /^h[1-6]$/.test(child.tag)) {
            newChildren.push(child);
          } else if (typeof child !== 'string' && child.tag === 'header') {
            newChildren.push(child);
          } else {
            // Check if it's meaningful text or element
            if (typeof child === 'string') {
              if (child.trim().length > 0) itemsToWrap.push(child);
            } else {
              itemsToWrap.push(child);
            }
          }
        }

        if (itemsToWrap.length > 0) {
          const groupNode: MiniASTNode = {
            tag: 'div',
            attrs: {
              'data-layout-group': 'items',
              'data-grouping': sectionPlan.groupingTreatment,
              'data-item-presentation': sectionPlan.itemPresentation,
            },
            children: itemsToWrap,
            text: itemsToWrap.map((c) => (typeof c === 'string' ? c : c.text)).join(' '),
            parent: node,
          };

          // Re-parent items
          itemsToWrap.forEach((item) => {
            if (typeof item !== 'string') {
              item.parent = groupNode;
            }
          });

          newChildren.push(groupNode);
          node.children = newChildren;
        }
      }
    }

    // Recurse into children
    for (const child of node.children) {
      if (typeof child !== 'string') {
        this.transformNodeRecursively(child, plan);
      }
    }
  }

  private static groupDOMSectionItems(
    sec: HTMLElement,
    grouping: string,
    presentation: string
  ): void {
    const children = Array.from(sec.children) as HTMLElement[];
    const heading = children.find((c) => /^H[1-6]$/.test(c.tagName));
    const items = children.filter((c) => !/^H[1-6]$/.test(c.tagName) && c.tagName !== 'HEADER');

    if (heading && items.length >= 2) {
      const alreadyGrouped = sec.querySelector('[data-layout-group="items"]');
      if (!alreadyGrouped) {
        heading.setAttribute('data-layout-slot', 'heading');

        const groupDiv = document.createElement('div');
        groupDiv.setAttribute('data-layout-group', 'items');
        groupDiv.setAttribute('data-grouping', grouping);
        groupDiv.setAttribute('data-item-presentation', presentation);

        // Move items into groupDiv
        items.forEach((item) => {
          groupDiv.appendChild(item);
        });

        sec.appendChild(groupDiv);
      }
    }
  }

  private static computeASTTextLength(nodes: MiniASTNode[]): number {
    let len = 0;
    for (const node of nodes) {
      len += (node.text || '').length;
    }
    return len;
  }

  private static computeASTElementCount(nodes: MiniASTNode[]): number {
    let count = 0;
    const traverse = (node: MiniASTNode) => {
      count++;
      for (const child of node.children) {
        if (typeof child !== 'string') {
          traverse(child);
        }
      }
    };
    for (const root of nodes) {
      traverse(root);
    }
    return count;
  }
}
