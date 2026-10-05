import React, { useState } from 'react';
import { useResolvedStyle } from '../context/StyleEngineContext';
import { StyleScope } from './StyleScope';
import { CSSAdapter } from '../../core/adapters/css-adapter';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleId?: string; // Optional component-level override
  children: React.ReactNode;
}

const ButtonInner: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  style = {},
  className = '',
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  onFocus,
  onBlur,
  ...rest
}) => {
  const resolved = useResolvedStyle();
  const btnConfig = resolved.components.button;

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Compute base style from resolved component definition
  const baseStyles = CSSAdapter.getButtonBaseStyle(btnConfig);

  // Apply state styles dynamically resolved from the Style Engine
  const stateStyles: React.CSSProperties = {
    ...(isHovered ? btnConfig.hover : {}),
    ...(isActive ? btnConfig.active : {}),
    ...(isFocused ? { boxShadow: btnConfig.focusRing } : {}),
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...stateStyles,
    ...style,
  };

  return (
    <button
      {...rest}
      className={`ds-button ${className}`}
      style={combinedStyles}
      onMouseEnter={(e) => {
        setIsHovered(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        setIsActive(false);
        onMouseLeave?.(e);
      }}
      onMouseDown={(e) => {
        setIsActive(true);
        onMouseDown?.(e);
      }}
      onMouseUp={(e) => {
        setIsActive(false);
        onMouseUp?.(e);
      }}
      onFocus={(e) => {
        setIsFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur?.(e);
      }}
    >
      {children}
    </button>
  );
};

export const Button: React.FC<ButtonProps> = ({ styleId, ...props }) => {
  if (styleId) {
    return (
      <StyleScope level="component" styleId={styleId} as="span" style={{ display: 'inline-block' }}>
        <ButtonInner {...props} />
      </StyleScope>
    );
  }

  return <ButtonInner {...props} />;
};
