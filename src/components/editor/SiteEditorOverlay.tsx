import React, { useEffect, useCallback } from 'react';
import { useSiteEditor, SelectedNodeInfo } from '../../react/context/SiteEditorContext';

export const SiteEditorOverlay: React.FC = () => {
  const {
    isEditMode,
    selectedNode,
    setSelectedNode,
    hoveredNode,
    setHoveredNode,
  } = useSiteEditor();

  // Helper to determine if an element belongs to the Editor UI
  const isEditorUiElement = useCallback((target: HTMLElement | null): boolean => {
    if (!target) return true;
    return !!target.closest('[data-editor-ui="true"], .site-editor-ui, #site-editor-root');
  }, []);

  // Helper to build parent hierarchy chain for breadcrumbs
  const buildParentChain = useCallback((el: HTMLElement) => {
    const chain: Array<{ id: string; tagName: string; label: string; element: HTMLElement }> = [];
    let current: HTMLElement | null = el.parentElement;

    while (current && current !== document.body && current !== document.documentElement) {
      if (!isEditorUiElement(current)) {
        const tag = current.tagName.toLowerCase();
        const role = current.getAttribute('data-role') || '';
        const id = current.id || `${tag}-${chain.length}`;
        const label = role ? `${tag}.${role}` : tag.toUpperCase();
        chain.unshift({ id, tagName: tag, label, element: current });
      }
      current = current.parentElement;
    }
    return chain;
  }, [isEditorUiElement]);

  // Global mouse move & click listener when Edit Mode is active
  useEffect(() => {
    if (!isEditMode) {
      setHoveredNode(null);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || isEditorUiElement(target)) {
        setHoveredNode(null);
        return;
      }

      const rect = target.getBoundingClientRect();
      const tagName = target.tagName.toLowerCase();
      const role = target.getAttribute('data-role') || '';
      const label = role ? `${tagName}.${role}` : tagName.toUpperCase();

      setHoveredNode({
        element: target,
        rect,
        tagName,
        label,
      });
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || isEditorUiElement(target)) {
        return;
      }

      // Prevent link navigation or form submission while editing
      e.preventDefault();
      e.stopPropagation();

      const rect = target.getBoundingClientRect();
      const tagName = target.tagName.toLowerCase();
      const role = target.getAttribute('data-role') || '';
      const id = target.id || `${tagName}-${Date.now().toString(36)}`;
      if (!target.id) target.id = id;

      const parentChain = buildParentChain(target);
      const textContent = target.innerText?.trim() || '';

      const nodeInfo: SelectedNodeInfo = {
        id,
        element: target,
        tagName,
        role,
        textContent,
        currentStyleId: target.getAttribute('data-style') || undefined,
        rect,
        parentChain,
      };

      setSelectedNode(nodeInfo);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { capture: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick, { capture: true });
    };
  }, [isEditMode, isEditorUiElement, buildParentChain, setHoveredNode, setSelectedNode]);

  if (!isEditMode) return null;

  return (
    <div
      id="site-editor-root"
      data-editor-ui="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 999990,
      }}
    >
      {/* 1. Subtle Hover Outline */}
      {hoveredNode && (!selectedNode || hoveredNode.element !== selectedNode.element) && (
        <div
          style={{
            position: 'fixed',
            top: hoveredNode.rect.top,
            left: hoveredNode.rect.left,
            width: hoveredNode.rect.width,
            height: hoveredNode.rect.height,
            border: '1.5px dashed #38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.04)',
            borderRadius: '3px',
            pointerEvents: 'none',
            transition: 'all 60ms ease-out',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '-20px',
              left: 0,
              backgroundColor: '#38bdf8',
              color: '#090d16',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              fontWeight: 800,
              padding: '1px 5px',
              borderRadius: '2px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            {hoveredNode.label}
          </span>
        </div>
      )}

      {/* 2. Strong Selection Outline & Handles */}
      {selectedNode && selectedNode.element && (
        (() => {
          const rect = selectedNode.element.getBoundingClientRect();
          const currentStyle = selectedNode.element.getAttribute('data-style');

          return (
            <div
              style={{
                position: 'fixed',
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                border: '2px solid #38bdf8',
                boxShadow: '0 0 16px rgba(56, 189, 248, 0.45)',
                borderRadius: '3px',
                pointerEvents: 'none',
                transition: 'all 60ms ease-out',
              }}
            >
              {/* Floating Element Identifier Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-26px',
                  left: '-2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '2px 7px',
                  borderRadius: '3px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
                }}
              >
                <span>{selectedNode.tagName.toUpperCase()}</span>
                {currentStyle && (
                  <span
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      padding: '1px 4px',
                      borderRadius: '2px',
                    }}
                  >
                    {currentStyle.toUpperCase()}
                  </span>
                )}
              </div>

              {/* Four Corner Handles */}
              <div style={{ position: 'absolute', top: '-4px', left: '-4px', width: '8px', height: '8px', backgroundColor: '#38bdf8', borderRadius: '1px' }} />
              <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '8px', height: '8px', backgroundColor: '#38bdf8', borderRadius: '1px' }} />
              <div style={{ position: 'absolute', bottom: '-4px', left: '-4px', width: '8px', height: '8px', backgroundColor: '#38bdf8', borderRadius: '1px' }} />
              <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '8px', height: '8px', backgroundColor: '#38bdf8', borderRadius: '1px' }} />
            </div>
          );
        })()
      )}
    </div>
  );
};
