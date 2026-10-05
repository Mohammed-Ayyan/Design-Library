import React from 'react';
export type ViewportMode = 'desktop' | 'tablet' | 'mobile';
export interface SelectedNodeInfo {
    id: string;
    element: HTMLElement;
    tagName: string;
    role?: string;
    textContent: string;
    currentStyleId?: string;
    rect: DOMRect;
    parentChain: Array<{
        id: string;
        tagName: string;
        label: string;
        element: HTMLElement;
    }>;
}
export interface ElementEdit {
    styleId?: string;
    textContent?: string;
    customStyles?: Record<string, string>;
}
interface SiteEditorContextValue {
    isEditMode: boolean;
    setEditMode: (val: boolean) => void;
    toggleEditMode: () => void;
    viewport: ViewportMode;
    setViewport: (val: ViewportMode) => void;
    selectedNode: SelectedNodeInfo | null;
    setSelectedNode: (node: SelectedNodeInfo | null) => void;
    hoveredNode: {
        element: HTMLElement;
        rect: DOMRect;
        tagName: string;
        label: string;
    } | null;
    setHoveredNode: (val: {
        element: HTMLElement;
        rect: DOMRect;
        tagName: string;
        label: string;
    } | null) => void;
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
    getElementCodeSnippet: (node: SelectedNodeInfo) => {
        html: string;
        css: string;
        react: string;
    };
}
export declare const SiteEditorProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare function useSiteEditor(): SiteEditorContextValue;
export {};
