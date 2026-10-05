import React, { useState } from 'react';
import { useResolvedStyle } from '../context/StyleEngineContext';
import { StyleScope } from './StyleScope';
import { CSSAdapter } from '../../core/adapters/css-adapter';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  styleId?: string; // Optional component-level override
  children: React.ReactNode;
}

const CardInner: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style = {},
  className = '',
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  const resolved = useResolvedStyle();
  const cardConfig = resolved.components.card;
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = CSSAdapter.getCardBaseStyle(cardConfig);
  const hoverStyles = isHovered && cardConfig.hover ? cardConfig.hover : {};

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...hoverStyles,
    ...style,
  };

  return (
    <div
      {...rest}
      className={`ds-card ${className}`}
      style={combinedStyles}
      onMouseEnter={(e) => {
        setIsHovered(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        onMouseLeave?.(e);
      }}
    >
      {children}
    </div>
  );
};

export const Card: React.FC<CardProps> = ({ styleId, ...props }) => {
  if (styleId) {
    return (
      <StyleScope level="component" styleId={styleId} as="div">
        <CardInner {...props} />
      </StyleScope>
    );
  }

  return <CardInner {...props} />;
};
