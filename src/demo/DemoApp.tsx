import React, { useState } from 'react';
import { StyleEngine } from '../core/engine';
import { defaultStyles } from '../styles';
import { StyleEngineProvider } from '../react/context/StyleEngineContext';
import { Page } from '../react/components/Page';
import { ControlPanel } from './components/ControlPanel';
import { ShowcaseContent } from './components/ShowcaseContent';
import { StyleInspector } from './components/StyleInspector';

// Initialize the central Style Engine with the registered styles (Base and Test)
const engine = new StyleEngine(defaultStyles);

export const DemoApp: React.FC = () => {
  const [buttonOverrideEnabled, setButtonOverrideEnabled] = useState(false);
  const [sectionOverrideEnabled, setSectionOverrideEnabled] = useState(false);

  return (
    <StyleEngineProvider engine={engine} initialStyleId="base">
      <Page
        id="demo-page"
        style={{
          padding: '2rem 1.5rem',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Engine Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🎨</span>
              <span style={{ fontSize: '0.8125rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ds-color-primary)', fontWeight: 700 }}>
                DEVELOPER DESIGN STYLE ENGINE
              </span>
            </div>
            <h1 style={{ margin: '0 0 0.5rem', fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
              Style Engine Foundation Slice
            </h1>
            <p style={{ margin: 0, color: 'var(--ds-color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.5 }}>
              A strongly typed, scope-aware style engine that resolves design tokens, component rules,
              and CSS variables across Global, Page, Section, and Component hierarchies.
            </p>
          </div>

          {/* Interactive Control Panel */}
          <ControlPanel
            buttonOverrideEnabled={buttonOverrideEnabled}
            onToggleButtonOverride={setButtonOverrideEnabled}
            sectionOverrideEnabled={sectionOverrideEnabled}
            onToggleSectionOverride={setSectionOverrideEnabled}
          />

          {/* Demonstration Content */}
          <ShowcaseContent
            buttonOverrideEnabled={buttonOverrideEnabled}
            sectionOverrideEnabled={sectionOverrideEnabled}
          />

          {/* Live Debug Inspector */}
          <StyleInspector />
        </div>
      </Page>
    </StyleEngineProvider>
  );
};
