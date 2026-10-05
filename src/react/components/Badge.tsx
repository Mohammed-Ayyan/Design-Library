import React from 'react';
import { useResolvedStyle } from '../context/StyleEngineContext';
import { StyleScope } from './StyleScope';
import { CSSAdapter } from '../../core/adapters/css-adapter';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  styleId?: string;
  children: React.ReactNode;
}

const BadgeInner: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  style = {},
  className = '',
  ...rest
}) => {
  const resolved = useResolvedStyle();
  const badgeConfig = resolved.components.badge;

  const baseStyles = CSSAdapter.getBadgeBaseStyle(badgeConfig);

  const dynamicStyles: React.CSSProperties = {
    ...baseStyles,
    ...style,
  };

  return (
    <span {...rest} className={`ds-badge ${className}`} style={dynamicStyles}>
      {children}
    </span>
  );
};

export const Badge: React.FC<BadgeProps> = ({ styleId, ...props }) => {
  if (styleId) {
    return (
      <StyleScope level="component" styleId={styleId} as="span" style={{ display: 'inline-block' }}>
        <BadgeInner {...props} />
      </StyleScope>
    );
  }

  return <BadgeInner {...props} />;
};
