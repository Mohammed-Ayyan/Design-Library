import { TokenOverrides } from './tokens';
import { ComponentStyleOverrides } from './components';

export type StyleScopeLevel = 'global' | 'page' | 'section' | 'component' | 'element';

export const SCOPE_HIERARCHY: Record<StyleScopeLevel, number> = {
  global: 0,
  page: 1,
  section: 2,
  component: 3,
  element: 4,
};

export interface ScopeChainItem {
  level: StyleScopeLevel;
  styleId: string;
}

export interface ScopeContext {
  level: StyleScopeLevel;
  styleId: string;
  parentScope?: ScopeContext;
  tokenOverrides?: TokenOverrides;
  componentOverrides?: ComponentStyleOverrides;
}

export interface ResolvedScope {
  level: StyleScopeLevel;
  effectiveStyleId: string;
  scopeChain: ScopeChainItem[];
}
