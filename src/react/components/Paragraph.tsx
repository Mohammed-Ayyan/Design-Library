import React from 'react';
import { useResolvedStyle } from '../context/StyleEngineContext';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  style = {},
  className = '',
  ...rest
}) => {
  const resolved = useResolvedStyle();
  const pConfig = resolved.components.paragraph;

  const dynamicStyles: React.CSSProperties = {
    fontFamily: pConfig.fontFamily,
    fontSize: pConfig.fontSize,
    lineHeight: pConfig.lineHeight,
    color: pConfig.color,
    margin: 0,
    ...style,
  };

  return (
    <p {...rest} className={`ds-paragraph ${className}`} style={dynamicStyles}>
      {children}
    </p>
  );
};
