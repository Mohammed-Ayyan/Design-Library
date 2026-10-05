import React from 'react';
import { useResolvedStyle } from '../context/StyleEngineContext';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  style = {},
  className = '',
  ...rest
}) => {
  const resolved = useResolvedStyle();
  const headingConfig = resolved.components.heading;

  // Derive font size from typography tokens based on heading level
  const fontSizes: Record<number, string> = {
    1: resolved.tokens.typography.fontSize2xl,
    2: resolved.tokens.typography.fontSizeXl,
    3: resolved.tokens.typography.fontSizeLg,
    4: resolved.tokens.typography.fontSizeBase,
    5: resolved.tokens.typography.fontSizeSm,
    6: resolved.tokens.typography.fontSizeXs,
  };

  const dynamicStyles: React.CSSProperties = {
    fontFamily: headingConfig.fontFamily,
    fontWeight: headingConfig.fontWeight,
    letterSpacing: headingConfig.letterSpacing,
    lineHeight: headingConfig.lineHeight,
    color: headingConfig.color,
    textTransform: headingConfig.textTransform ?? 'none',
    fontSize: fontSizes[level],
    margin: 0,
    ...style,
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    // @ts-expect-error dynamic HTML heading tag
    <Tag {...rest} className={`ds-heading ds-heading-${level} ${className}`} style={dynamicStyles}>
      {children}
    </Tag>
  );
};
