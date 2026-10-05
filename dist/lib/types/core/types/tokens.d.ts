export interface ColorTokens {
    background: string;
    surface: string;
    surfaceSubtle: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    primary: string;
    primaryHover: string;
    primaryText: string;
    accent: string;
    border: string;
    borderStrong: string;
    ring: string;
}
export interface TypographyTokens {
    fontFamilyBase: string;
    fontFamilyHeading: string;
    fontFamilyMono: string;
    fontSizeXs: string;
    fontSizeSm: string;
    fontSizeBase: string;
    fontSizeLg: string;
    fontSizeXl: string;
    fontSize2xl: string;
    fontWeightNormal: string | number;
    fontWeightMedium: string | number;
    fontWeightBold: string | number;
    lineHeightBase: string | number;
    lineHeightHeading: string | number;
    letterSpacingBase: string;
    letterSpacingHeading: string;
}
export interface SpacingTokens {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}
export interface RadiusTokens {
    none: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
}
export interface BorderTokens {
    widthThin: string;
    widthBase: string;
    widthThick: string;
    style: string;
}
export interface ShadowTokens {
    none: string;
    sm: string;
    md: string;
    lg: string;
    glow: string;
}
export interface MotionTokens {
    durationFast: string;
    durationNormal: string;
    easing: string;
}
export interface EffectTokens {
    backdropBlur: string;
    transformHover: string;
    cardExtra?: string;
    buttonExtra?: string;
}
export interface DesignTokens {
    colors: ColorTokens;
    typography: TypographyTokens;
    spacing: SpacingTokens;
    radii: RadiusTokens;
    borders: BorderTokens;
    shadows: ShadowTokens;
    motion: MotionTokens;
    effects: EffectTokens;
}
export type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};
export type TokenOverrides = RecursivePartial<DesignTokens>;
