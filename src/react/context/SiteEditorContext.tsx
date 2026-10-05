import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useStyleEngine } from './StyleEngineContext';
import { computeElementDesignStyle, generateCssSnippetForElement } from '../../core/editor/style-applicator';

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export interface SelectedNodeInfo {
  id: string; // unique selector or element identifier
  element: HTMLElement;
  tagName: string;
  role?: string;
  textContent: string;
  currentStyleId?: string;
  rect: DOMRect;
  parentChain: Array<{ id: string; tagName: string; label: string; element: HTMLElement }>;
}

export interface ElementEdit {
  styleId?: string;
  textContent?: string;
  customStyles?: Record<string, string>;
}

interface EditorHistoryStep {
  elementEdits: Record<string, ElementEdit>;
  pageStyleId?: string;
}

interface SiteEditorContextValue {
  isEditMode: boolean;
  setEditMode: (val: boolean) => void;
  toggleEditMode: () => void;
  viewport: ViewportMode;
  setViewport: (val: ViewportMode) => void;
  selectedNode: SelectedNodeInfo | null;
  setSelectedNode: (node: SelectedNodeInfo | null) => void;
  hoveredNode: { element: HTMLElement; rect: DOMRect; tagName: string; label: string } | null;
  setHoveredNode: (val: { element: HTMLElement; rect: DOMRect; tagName: string; label: string } | null) => void;
  pageStyleId: string;
  setPageStyleId: (styleId: string) => void;
  elementEdits: Record<string, ElementEdit>;
  updateElementEdit: (elementId: string, edit: Partial<ElementEdit>) => void;
  resetElement: (elementId: string) => void;
  resetAll: () => void;
  canUndo: boolean;
  canRedo: boolean;
  undo: () => void;
  redo: () => void;
  getAppliedStyleForElement: (elementId: string, tagName: string) => React.CSSProperties;
  getElementCodeSnippet: (node: SelectedNodeInfo) => { html: string; css: string; react: string };
}

const SiteEditorContext = createContext<SiteEditorContextValue | null>(null);

export const SiteEditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { engine } = useStyleEngine();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [selectedNode, setSelectedNode] = useState<SelectedNodeInfo | null>(null);
  const [hoveredNode, setHoveredNode] = useState<{ element: HTMLElement; rect: DOMRect; tagName: string; label: string } | null>(null);
  const [pageStyleId, setPageStyleIdState] = useState<string>('base');
  const [elementEdits, setElementEdits] = useState<Record<string, ElementEdit>>({});

  // History stack for Undo/Redo
  const [historyPast, setHistoryPast] = useState<EditorHistoryStep[]>([]);
  const [historyFuture, setHistoryFuture] = useState<EditorHistoryStep[]>([]);

  const pushHistory = useCallback((currentEdits: Record<string, ElementEdit>, currentPageStyle: string) => {
    setHistoryPast((prev) => [...prev.slice(-30), { elementEdits: currentEdits, pageStyleId: currentPageStyle }]);
    setHistoryFuture([]);
  }, []);

  const toggleEditMode = useCallback(() => {
    setIsEditMode((prev) => !prev);
    setSelectedNode(null);
    setHoveredNode(null);
  }, []);

  const setPageStyleId = useCallback((styleId: string) => {
    pushHistory(elementEdits, pageStyleId);
    setPageStyleIdState(styleId);

    // Synchronize to the viewport container element
    if (typeof document !== 'undefined') {
      const viewportEl = document.getElementById('site-viewport-container');
      if (viewportEl) {
        viewportEl.setAttribute('data-style', styleId);
        viewportEl.className = `lab-styled-preview style-${styleId} ${styleId}-styled-container`;
      }
    }
  }, [elementEdits, pageStyleId, pushHistory]);

  const updateElementEdit = useCallback((elementId: string, edit: Partial<ElementEdit>) => {
    setElementEdits((prev) => {
      pushHistory(prev, pageStyleId);
      const existing = prev[elementId] || {};
      const updated: ElementEdit = {
        ...existing,
        ...edit,
        customStyles: {
          ...(existing.customStyles || {}),
          ...(edit.customStyles || {}),
        },
      };

      // Directly update the live DOM element for instantaneous real-world feedback
      if (selectedNode && selectedNode.id === elementId && selectedNode.element) {
        const el = selectedNode.element;
        if (edit.textContent !== undefined) {
          if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
            el.childNodes[0].textContent = edit.textContent;
          } else {
            el.innerText = edit.textContent;
          }
        }

        const effectiveStyleId = edit.styleId || existing.styleId || pageStyleId;
        if (effectiveStyleId) {
          el.setAttribute('data-style', effectiveStyleId);
          el.classList.add('lab-styled-preview', `style-${effectiveStyleId}`, `${effectiveStyleId}-styled-container`);

          const computed = computeElementDesignStyle(selectedNode.tagName, effectiveStyleId, engine, selectedNode.role);
          Object.assign(el.style, computed.cssProperties);

          // If container element, cascade computed styles to children
          const tagLower = selectedNode.tagName.toLowerCase();
          if (['section', 'header', 'footer', 'nav', 'main', 'article', 'div'].includes(tagLower)) {
            const headingComputed = computeElementDesignStyle('h1', effectiveStyleId, engine);
            el.querySelectorAll<HTMLElement>('h1, h2, h3, h4, h5, h6').forEach((h) => {
              if (!h.closest('[data-editor-ui="true"]')) {
                Object.assign(h.style, headingComputed.cssProperties);
              }
            });

            const pComputed = computeElementDesignStyle('p', effectiveStyleId, engine);
            el.querySelectorAll<HTMLElement>('p, span:not([data-editor-ui])').forEach((p) => {
              if (!p.closest('[data-editor-ui="true"]')) {
                Object.assign(p.style, pComputed.cssProperties);
              }
            });

            const btnComputed = computeElementDesignStyle('button', effectiveStyleId, engine);
            el.querySelectorAll<HTMLElement>('button:not([data-editor-ui]), a.button').forEach((b) => {
              if (!b.closest('[data-editor-ui="true"]')) {
                Object.assign(b.style, btnComputed.cssProperties);
              }
            });

            const cardComputed = computeElementDesignStyle('article', effectiveStyleId, engine, 'card');
            el.querySelectorAll<HTMLElement>('article, .card, [data-role="card"]').forEach((c) => {
              if (!c.closest('[data-editor-ui="true"]')) {
                Object.assign(c.style, cardComputed.cssProperties);
              }
            });
          }
        }

        if (edit.customStyles) {
          Object.assign(el.style, edit.customStyles);
        }
      }

      return {
        ...prev,
        [elementId]: updated,
      };
    });
  }, [engine, pageStyleId, pushHistory, selectedNode]);

  const resetElement = useCallback((elementId: string) => {
    setElementEdits((prev) => {
      pushHistory(prev, pageStyleId);
      const next = { ...prev };
      delete next[elementId];

      if (selectedNode && selectedNode.id === elementId && selectedNode.element) {
        selectedNode.element.removeAttribute('data-style');
        selectedNode.element.style.cssText = '';
      }
      return next;
    });
  }, [pageStyleId, pushHistory, selectedNode]);

  const resetAll = useCallback(() => {
    pushHistory(elementEdits, pageStyleId);
    setElementEdits({});
    setPageStyleIdState('base');
    setSelectedNode(null);
  }, [elementEdits, pageStyleId, pushHistory]);

  const undo = useCallback(() => {
    if (historyPast.length === 0) return;
    const previous = historyPast[historyPast.length - 1];
    setHistoryFuture((prev) => [{ elementEdits, pageStyleId }, ...prev]);
    setHistoryPast((prev) => prev.slice(0, -1));
    setElementEdits(previous.elementEdits);
    if (previous.pageStyleId) setPageStyleIdState(previous.pageStyleId);
  }, [elementEdits, historyPast, pageStyleId]);

  const redo = useCallback(() => {
    if (historyFuture.length === 0) return;
    const next = historyFuture[0];
    setHistoryPast((prev) => [...prev, { elementEdits, pageStyleId }]);
    setHistoryFuture((prev) => prev.slice(1));
    setElementEdits(next.elementEdits);
    if (next.pageStyleId) setPageStyleIdState(next.pageStyleId);
  }, [elementEdits, historyFuture, pageStyleId]);

  // Keyboard shortcut listener for Undo/Redo & Escape
  useEffect(() => {
    if (!isEditMode) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      } else if (e.key === 'Escape') {
        setSelectedNode(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditMode, undo, redo]);

  // Compute live CSS properties for any element id
  const getAppliedStyleForElement = useCallback((elementId: string, tagName: string): React.CSSProperties => {
    const edit = elementEdits[elementId];
    const effectiveStyleId = edit?.styleId || pageStyleId;
    const computed = computeElementDesignStyle(tagName, effectiveStyleId, engine);
    return {
      ...computed.cssProperties,
      ...(edit?.customStyles || {}),
    };
  }, [elementEdits, engine, pageStyleId]);

  // Generate real code snippet representing current state
  const getElementCodeSnippet = useCallback((node: SelectedNodeInfo) => {
    const edit = elementEdits[node.id];
    const effectiveStyleId = edit?.styleId || pageStyleId;
    const tagName = node.tagName.toLowerCase();
    const text = edit?.textContent || node.textContent || 'Element content';

    const css = generateCssSnippetForElement(
      `#${node.id || tagName}`,
      effectiveStyleId,
      engine,
      tagName,
      edit?.customStyles
    );

    const html = `<${tagName} class="style-${effectiveStyleId}" data-style="${effectiveStyleId}">
  ${text}
</${tagName}>`;

    const react = `<StyleScope styleId="${effectiveStyleId}">
  <${tagName} className="style-${effectiveStyleId}">
    ${text}
  </${tagName}>
</StyleScope>`;

    return { html, css, react };
  }, [elementEdits, engine, pageStyleId]);

  const value = useMemo(() => ({
    isEditMode,
    setEditMode: setIsEditMode,
    toggleEditMode,
    viewport,
    setViewport,
    selectedNode,
    setSelectedNode,
    hoveredNode,
    setHoveredNode,
    pageStyleId,
    setPageStyleId,
    elementEdits,
    updateElementEdit,
    resetElement,
    resetAll,
    canUndo: historyPast.length > 0,
    canRedo: historyFuture.length > 0,
    undo,
    redo,
    getAppliedStyleForElement,
    getElementCodeSnippet,
  }), [
    isEditMode,
    toggleEditMode,
    viewport,
    selectedNode,
    hoveredNode,
    pageStyleId,
    setPageStyleId,
    elementEdits,
    updateElementEdit,
    resetElement,
    resetAll,
    historyPast.length,
    historyFuture.length,
    undo,
    redo,
    getAppliedStyleForElement,
    getElementCodeSnippet,
  ]);

  return (
    <SiteEditorContext.Provider value={value}>
      {children}
    </SiteEditorContext.Provider>
  );
};

export function useSiteEditor(): SiteEditorContextValue {
  const ctx = useContext(SiteEditorContext);
  if (!ctx) {
    throw new Error('useSiteEditor must be used within a SiteEditorProvider');
  }
  return ctx;
}
