import { StyleDefinition } from '../../core/types/style-definition';

export const bohemianStyle: StyleDefinition = {
  id: 'bohemian',
  name: 'Bohemian',
  description: 'Warm terracotta, sun-baked clay, artisanal typography, eclectic collected surfaces, and relaxed handcrafted character.',
  metadata: {
    version: '1.0.0',
    category: 'Artistic & Organic',
    tags: ['bohemian', 'artistic', 'handcrafted', 'eclectic', 'warm', 'terracotta', 'organic', 'tactile'],
  },
  tokens: {
    colors: {
      background: '#fbf7ee', // Warm parchment cream
      surface: '#fdfbf7', // Artisan linen paper surface
      surfaceSubtle: '#f4ece1', // Warm parchment
      textPrimary: '#2b2523', // Warm deep charcoal
      textSecondary: '#524742', // Earthy sepia charcoal
      textMuted: '#85766e', // Muted clay stone
      primary: '#c85a32', // Rich terracotta
      primaryHover: '#a84520', // Sun-baked terracotta
      primaryText: '#ffffff',
      accent: '#d48b16', // Warm mustard ochre
      border: 'rgba(189, 168, 148, 0.55)', // Natural earthenware craft border
      borderStrong: 'rgba(140, 115, 95, 0.75)',
      ring: 'rgba(200, 90, 50, 0.35)',
    },
    typography: {
      fontFamilyBase: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Fraunces', Georgia, serif",
      fontFamilyMono: "'JetBrains Mono', monospace",
      fontSizeXs: '0.75rem',
      fontSizeSm: '0.875rem',
      fontSizeBase: '1rem',
      fontSizeLg: '1.35rem',
      fontSizeXl: '1.85rem',
      fontSize2xl: '2.85rem',
      fontWeightNormal: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      lineHeightBase: 1.7,
      lineHeightHeading: 1.2,
      letterSpacingBase: '-0.01em',
      letterSpacingHeading: '-0.025em',
    },
    spacing: {
      xs: '0.35rem',
      sm: '0.75rem',
      md: '1.5rem',
      lg: '2.5rem',
      xl: '4rem',
      '2xl': '6rem',
    },
    radii: {
      none: '0px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      full: '9999px',
    },
    borders: {
      widthThin: '1px',
      widthBase: '1.5px',
      widthThick: '3px',
      style: 'solid',
    },
    shadows: {
      none: 'none',
      sm: '0 2px 8px rgba(74, 56, 44, 0.05), 0 1px 2px rgba(74, 56, 44, 0.04)',
      md: '0 8px 24px rgba(74, 56, 44, 0.07), 0 2px 6px rgba(74, 56, 44, 0.04)',
      lg: '0 16px 36px rgba(74, 56, 44, 0.1), 0 4px 12px rgba(74, 56, 44, 0.05)',
      glow: '0 0 20px rgba(200, 90, 50, 0.25)',
    },
    motion: {
      durationFast: '160ms',
      durationNormal: '250ms',
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    effects: {
      backdropBlur: '0px',
      transformHover: 'translateY(-3px)',
    },
  },
  components: {
    button: {
      padding: '0.85rem 1.85rem',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: '0.95rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
      textTransform: 'none',
      borderRadius: '16px 22px 14px 20px',
      borderWidth: '1.5px',
      borderStyle: 'solid',
      borderColor: '#a84520',
      background: '#c85a32',
      color: '#ffffff',
      boxShadow: '0 4px 12px rgba(200, 90, 50, 0.22)',
      transition: 'all 220ms cubic-bezier(0.16, 1, 0.3, 1)',
      hover: {
        background: '#a84520',
        borderColor: '#8e3514',
        color: '#ffffff',
      },
      active: {
        background: '#8e3514',
        borderColor: '#73270b',
      },
      focusRing: '0 0 0 3px rgba(200, 90, 50, 0.35)',
    },
    card: {
      padding: '2.25rem',
      borderRadius: '24px 14px 28px 16px',
      borderWidth: '1.5px',
      borderStyle: 'solid',
      borderColor: 'rgba(189, 168, 148, 0.55)',
      background: '#fdfbf7',
      color: '#2b2523',
      boxShadow: '0 8px 24px rgba(74, 56, 44, 0.07)',
      transition: 'all 250ms ease',
      hover: {
        borderColor: 'rgba(200, 90, 50, 0.45)',
      },
    },
    heading: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.2,
      color: '#2b2523',
    },
    paragraph: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#524742',
    },
    input: {
      padding: '0.85rem 1.15rem',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: '0.95rem',
      borderRadius: '14px',
      borderWidth: '1.5px',
      borderStyle: 'solid',
      borderColor: 'rgba(189, 168, 148, 0.55)',
      background: '#fbf6ef',
      color: '#2b2523',
      placeholderColor: '#85766e',
      focusBorderColor: '#c85a32',
      focusRing: '0 0 0 3px rgba(200, 90, 50, 0.2)',
      transition: 'all 200ms ease',
    },
    badge: {
      padding: '0.25rem 0.75rem',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: '0.785rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      borderRadius: '9999px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(200, 90, 50, 0.25)',
      background: 'rgba(200, 90, 50, 0.12)',
      color: '#a84520',
    },
    section: {
      padding: '4rem 2rem',
      background: 'transparent',
      borderColor: 'transparent',
      borderWidth: '0px',
      borderStyle: 'none',
    },
    page: {
      background: '#fbf7ee',
      color: '#2b2523',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
  },
};

export { bohemianSemanticCss } from './rules';
