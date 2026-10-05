/**
 * Isolated Consumer Test Project — Main Entry Point
 *
 * CRITICAL ARCHITECTURAL CONSTRAINT:
 * This file acts as an external consumer project. It MUST NOT import from internal
 * paths like src/core/adaptive/..., src/styles/..., or src/components/...
 *
 * It imports ONLY from the canonical public library entry point: '../../src'
 */

import {
  StyleEngine,
  StructureAnalyzer,
  RoleResolver,
  RecipeEngine,
  AdaptiveCSSGenerator,
  injectAdaptiveStyles,
  enhanceHTML,
  brutalismStyle,
  minimalismStyle,
  glassmorphismStyle,
} from '../../src';

console.log('[Consumer Test] Initializing Design Style Library via Public API...');

// 1. Inject Universal Adaptive CSS into document head
const styleTag = injectAdaptiveStyles(document);
console.log('[Consumer Test] Injected adaptive CSS style tag:', !!styleTag);

// 2. Initialize StyleEngine via public constructor
const engine = new StyleEngine();
console.log('[Consumer Test] Registered styles:', engine.getAvailableStyles().map((s) => s.id));

// Verify that all three proof styles resolve properly
const brutalism = engine.resolveStyle('brutalism');
const minimalism = engine.resolveStyle('minimalism');
const glassmorphism = engine.resolveStyle('glassmorphism');

console.log('[Consumer Test] Resolved Brutalism font:', brutalism.tokens.typography.fontFamilyHeading);
console.log('[Consumer Test] Resolved Minimalism font:', minimalism.tokens.typography.fontFamilyHeading);
console.log('[Consumer Test] Resolved Glassmorphism font:', glassmorphism.tokens.typography.fontFamilyHeading);

// 3. Auto-enhance the DOM structures
enhanceHTML(document.body);
console.log('[Consumer Test] DOM enhancement complete.');

// 4. Update status indicator in header
const statusEl = document.getElementById('engine-status-indicator');
if (statusEl) {
  statusEl.innerHTML = `
    Engine Status: <strong style="color: #10b981;">✓ Public API Active</strong>
    <span style="display: block; font-size: 0.6875rem; color: #64748b;">
      3 Styles Resolved • DOM Enhanced • CSS Injected
    </span>
  `;
}

// 5. Add interactive visual feedback for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const target = e.currentTarget as HTMLElement;
    console.log(`[Consumer Test] Clicked button "${target.id || target.textContent?.trim()}"`);
    const originalText = target.textContent;
    target.textContent = '✓ Clicked!';
    setTimeout(() => {
      target.textContent = originalText;
    }, 1200);
  });
});
