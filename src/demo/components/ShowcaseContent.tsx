import React from 'react';
import { Section } from '../../react/components/Section';
import { Card } from '../../react/components/Card';
import { Button } from '../../react/components/Button';
import { Heading } from '../../react/components/Heading';
import { Paragraph } from '../../react/components/Paragraph';
import { useStyleEngine } from '../../react/context/StyleEngineContext';

interface ShowcaseContentProps {
  buttonOverrideEnabled: boolean;
  sectionOverrideEnabled: boolean;
}

export const ShowcaseContent: React.FC<ShowcaseContentProps> = ({
  buttonOverrideEnabled,
  sectionOverrideEnabled,
}) => {
  const { activeStyleId } = useStyleEngine();

  // The opposite style for testing overrides
  const oppositeStyleId = activeStyleId === 'test' ? 'base' : 'test';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Primary Section inheriting current Page style */}
      <Section
        id="primary-section"
        style={{
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <div>
          <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: 'var(--ds-color-surface-subtle)', color: 'var(--ds-color-text-secondary)', marginBottom: '0.75rem' }}>
            SCOPE: SECTION (INHERITING {activeStyleId.toUpperCase()})
          </div>
          <Heading level={1} id="main-heading">
            Design Style Engine
          </Heading>
          <Paragraph id="main-paragraph" style={{ marginTop: '0.5rem' }}>
            This entire interface is dynamically driven by the Style Engine. All tokens—colors,
            borders, typography, corner radii, and elevation shadows—flow through the hierarchical
            scoping pipeline.
          </Paragraph>
        </div>

        {/* Card Component */}
        <Card id="demo-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <div style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.4rem', borderRadius: '3px', backgroundColor: 'var(--ds-color-surface-subtle)', color: 'var(--ds-color-primary)', marginBottom: '0.5rem' }}>
              SCOPE: COMPONENT (CARD)
            </div>
            <Heading level={2} id="card-heading">
              Interactive Component Card
            </Heading>
            <Paragraph id="card-paragraph" style={{ marginTop: '0.5rem' }}>
              Hover over this card or the buttons below. Hover transitions, active presses, and focus
              rings are driven entirely by the resolved style rules without any hardcoded logic in the JSX.
            </Paragraph>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Standard Button inheriting style */}
            <Button id="inherit-btn" onClick={() => alert('Inheriting Button Clicked!')}>
              Inheriting Button
            </Button>

            {/* Overridden Button (demonstrating explicit component-level override) */}
            <Button
              id="override-btn"
              styleId={buttonOverrideEnabled ? oppositeStyleId : undefined}
              onClick={() => alert(`Button with ${buttonOverrideEnabled ? oppositeStyleId : 'inherited'} style clicked!`)}
            >
              {buttonOverrideEnabled
                ? `Overridden (${oppositeStyleId.toUpperCase()})`
                : 'Standard Button'}
            </Button>
          </div>
        </Card>
      </Section>

      {/* Scoped Override Section (Demonstrates Section-Level Isolation & Inheritance) */}
      <Section
        id="scoped-section"
        styleId={sectionOverrideEnabled ? oppositeStyleId : undefined}
        style={{
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: 'var(--ds-color-surface-subtle)', color: 'var(--ds-color-accent)' }}>
              SCOPE: NESTED SECTION ({sectionOverrideEnabled ? `OVERRIDDEN TO ${oppositeStyleId.toUpperCase()}` : `INHERITING ${activeStyleId.toUpperCase()}`})
            </span>
            <Heading level={2} style={{ marginTop: '0.75rem' }}>
              Scoped Sub-tree Isolation
            </Heading>
          </div>
        </div>

        <Paragraph>
          {sectionOverrideEnabled
            ? `This section has explicitly overridden its scope to "${oppositeStyleId.toUpperCase()}". Notice that all children inside this section (headings, cards, buttons) adopt the overridden design language without mutating the parent page or sibling sections!`
            : `This section is currently inheriting the page's "${activeStyleId.toUpperCase()}" style. Toggle "Section Scope" in the control hub above to see instant isolated scoped overriding.`}
        </Paragraph>

        <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <Heading level={3}>Nested Sub-tree Card</Heading>
            <Paragraph style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
              All styles here are resolved relative to this section's scope.
            </Paragraph>
          </div>
          <Button id="nested-section-btn">
            Subtree Button
          </Button>
        </Card>
      </Section>
    </div>
  );
};
