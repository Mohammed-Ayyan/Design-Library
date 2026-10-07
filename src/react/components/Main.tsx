import React from 'react';
import { useResolvedStyle } from '../context/StyleEngineContext';
import { StyleScope } from './StyleScope';
import { TokenOverrides } from '../../core/types/tokens';

export interface MainProps extends React.HTMLAttributes<HTMLElement> {
  styleId?: string; // Optional main-level scope override
  tokenOverrides?: TokenOverrides;
  children: React.ReactNode;
}

const MainInner: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  style = {},
  className = '',
  ...rest
}) => {
  const resolved = useResolvedStyle();
  const pageConfig = resolved.components.page;

  const dynamicStyles: React.CSSProperties = {
    backgroundColor: pageConfig.background,
    color: pageConfig.color,
    fontFamily: pageConfig.fontFamily,
    ...style,
  };

  return (
    <main {...rest} className={`ds-main ${className}`} style={dynamicStyles}>
      {children}
    </main>
  );
};

export const Main: React.FC<MainProps> = ({ styleId, tokenOverrides, ...props }) => {
  if (styleId || tokenOverrides) {
    return (
      <StyleScope level="page" styleId={styleId} tokenOverrides={tokenOverrides} as="main">
        <MainInner {...props} />
      </StyleScope>
    );
  }

  return <MainInner {...props} />;
};
