import React from 'react';
import { useResolvedStyle } from '../context/StyleEngineContext';
import { StyleScope } from './StyleScope';
import { TokenOverrides } from '../../core/types/tokens';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  styleId?: string; // Optional section-level scope override
  tokenOverrides?: TokenOverrides;
  children: React.ReactNode;
}

const SectionInner: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  style = {},
  className = '',
  ...rest
}) => {
  const resolved = useResolvedStyle();
  const secConfig = resolved.components.section;

  const dynamicStyles: React.CSSProperties = {
    padding: secConfig.padding,
    backgroundColor: secConfig.background,
    borderColor: secConfig.borderColor,
    borderWidth: secConfig.borderWidth,
    borderStyle: secConfig.borderStyle,
    ...style,
  };

  return (
    <section {...rest} className={`ds-section ${className}`} style={dynamicStyles}>
      {children}
    </section>
  );
};

export const Section: React.FC<SectionProps> = ({ styleId, tokenOverrides, ...props }) => {
  if (styleId || tokenOverrides) {
    return (
      <StyleScope level="section" styleId={styleId} tokenOverrides={tokenOverrides} as="section">
        <SectionInner {...props} />
      </StyleScope>
    );
  }

  return <SectionInner {...props} />;
};
