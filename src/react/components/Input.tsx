import React, { useState } from 'react';
import { useResolvedStyle } from '../context/StyleEngineContext';
import { StyleScope } from './StyleScope';
import { CSSAdapter } from '../../core/adapters/css-adapter';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styleId?: string;
}

const InputInner: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  style = {},
  className = '',
  onFocus,
  onBlur,
  ...rest
}) => {
  const resolved = useResolvedStyle();
  const inputConfig = resolved.components.input;
  const [isFocused, setIsFocused] = useState(false);

  const baseStyles = CSSAdapter.getInputBaseStyle(inputConfig);

  const dynamicStyles: React.CSSProperties = {
    ...baseStyles,
    ...(isFocused
      ? {
          borderColor: inputConfig.focusBorderColor,
          boxShadow: inputConfig.focusRing,
        }
      : {}),
    ...style,
  };

  return (
    <input
      {...rest}
      className={`ds-input ${className}`}
      style={dynamicStyles}
      onFocus={(e) => {
        setIsFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur?.(e);
      }}
    />
  );
};

export const Input: React.FC<InputProps> = ({ styleId, ...props }) => {
  if (styleId) {
    return (
      <StyleScope level="component" styleId={styleId} as="span" style={{ display: 'inline-block', width: '100%' }}>
        <InputInner {...props} />
      </StyleScope>
    );
  }

  return <InputInner {...props} />;
};
