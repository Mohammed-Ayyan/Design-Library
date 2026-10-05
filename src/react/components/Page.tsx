import React from 'react';
import { useResolvedStyle } from '../context/StyleEngineContext';
import { CSSAdapter } from '../../core/adapters/css-adapter';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children, style = {}, className = '', ...rest }) => {
  const resolved = useResolvedStyle();
  const pageConfig = resolved.components.page;
  const cssVars = CSSAdapter.toStyleObject(resolved.cssVariables);

  const dynamicStyles: React.CSSProperties = {
    ...cssVars,
    backgroundColor: pageConfig.background,
    color: pageConfig.color,
    fontFamily: pageConfig.fontFamily,
    minHeight: '100vh',
    width: '100%',
    transition: 'background-color 250ms ease, color 250ms ease',
    ...style,
  };

  return (
    <div
      {...rest}
      className={`ds-page ${className}`}
      style={dynamicStyles}
      data-ds-style-id={resolved.styleId}
      data-ds-scope="page"
    >
      {children}
    </div>
  );
};
