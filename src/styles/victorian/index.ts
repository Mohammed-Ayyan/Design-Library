import { StyleDefinition } from '../../core/types/style-definition';

export const victorianStyle: StyleDefinition = {
  id: 'victorian',
  name: 'Victorian',
  description: '19th-century typography, ornate editorial print, engraved rules, botanical motifs, layered borders, and rich parchment surfaces.',
  metadata: {
    version: '1.0.0',
    category: 'Retro & Heritage',
    tags: ['victorian', 'engraved', 'botanical', 'editorial-serif', 'ornate', 'parchment', 'heritage', '19th-century'],
  },
  tokens: {
    colors: {
      background: '#f7f2e7', // Aged warm parchment paper
      surface: '#fcfaf5',    // Archival letterpress paper leaf
      surfaceSubtle: '#efe7d5', // Aged vellum / tinted cartouche
      textPrimary: '#1c1917',   // Lampblack printing ink
      textSecondary: '#38332b', // Deep sepia charcoal ink
      textMuted: '#6e6456',     // Archival graphite & muted ink
      primary: '#1b3b2b',       // Victorian botanical forest green
      primaryHover: '#254e3a',  // Lustrous dark botanical emerald
      primaryText: '#fcfaf5',   // Pressed ivory
      accent: '#9e783e',        // Burnished antique brass
      border: '#d8cdb8',        // Engraved sepia hairline rule
      borderStrong: '#2e271f',  // Deep charcoal structural rule
      ring: 'rgba(158, 120, 62, 0.45)', // Antique brass focus ring
    },
    typography: {
      fontFamilyBase: "'EB Garamond', 'Cormorant Garamond', 'Baskerville', 'Georgia', serif",
      fontFamilyHeading: "'Castoro Titling', 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif",
      fontFamilyMono: "'JetBrains Mono', 'Courier New', monospace",
      fontSizeXs: '0.6875rem',
      fontSizeSm: '0.8125rem',
      fontSizeBase: '1.0625rem',
      fontSizeLg: '1.25rem',
      fontSizeXl: '1.875rem',
      fontSize2xl: '2.75rem',
      fontWeightNormal: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      lineHeightBase: 1.72,
      lineHeightHeading: 1.18,
      letterSpacingBase: '0.01em',
      letterSpacingHeading: '0.02em',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1.25rem',
      lg: '2.5rem',
      xl: '4rem',
      '2xl': '6rem',
    },
    radii: {
      none: '0px',
      sm: '2px', // Very crisp architectural geometry
      md: '3px',
      lg: '4px',
      full: '9999px',
    },
    borders: {
      widthThin: '1px',
      widthBase: '1px',
      widthThick: '3px',
      style: 'solid',
    },
    shadows: {
      none: 'none',
      sm: '0 1px 3px rgba(28, 25, 23, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
      md: '0 3px 12px rgba(28, 25, 23, 0.07), inset 0 0 0 1px rgba(255, 255, 255, 0.7)',
      lg: '0 6px 20px rgba(28, 25, 23, 0.09), inset 0 0 0 1px rgba(255, 255, 255, 0.8)',
      glow: '0 0 16px rgba(158, 120, 62, 0.35)',
    },
    motion: {
      durationFast: '160ms',
      durationNormal: '240ms',
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
    effects: {
      backdropBlur: 'none',
      transformHover: 'translateY(-2px)',
    },
  },
  components: {
    button: {
      padding: '0.85rem 2rem',
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: '0.8125rem',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#1b3b2b',
      background: '#1b3b2b',
      color: '#fcfaf5',
      boxShadow: 'inset 0 0 0 1px rgba(196, 156, 88, 0.4), 0 2px 5px rgba(27, 59, 43, 0.2)',
      transition: 'all 180ms ease',
      hover: {
        background: '#254e3a',
        borderColor: '#9e783e',
        color: '#ffffff',
      },
      active: {
        background: '#142b1f',
        borderColor: '#9e783e',
      },
      focusRing: '0 0 0 2px #f7f2e7, 0 0 0 4px #9e783e',
    },
    card: {
      padding: '2.5rem 2.25rem',
      borderRadius: '3px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#d8cdb8',
      background: '#fcfaf5',
      color: '#1c1917',
      boxShadow: '0 2px 8px rgba(28, 25, 23, 0.04), inset 0 0 0 3px #fcfaf5, inset 0 0 0 4px #e5dcce',
      transition: 'all 200ms ease',
      hover: {
        borderColor: '#9e783e',
      },
    },
    heading: {
      fontFamily: "'Castoro Titling', 'Playfair Display', 'Cormorant Garamond', 'Georgia', serif",
      fontWeight: 700,
      letterSpacing: '0.02em',
      lineHeight: 1.18,
      color: '#1c1917',
    },
    paragraph: {
      fontFamily: "'EB Garamond', 'Georgia', serif",
      fontSize: '1.0625rem',
      lineHeight: 1.72,
      color: '#38332b',
    },
    input: {
      padding: '0.85rem 1.15rem',
      fontFamily: "'EB Garamond', 'Georgia', serif",
      fontSize: '1rem',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#d8cdb8',
      background: '#ffffff',
      color: '#1c1917',
      placeholderColor: '#8c8273',
      focusBorderColor: '#9e783e',
      focusRing: '0 0 0 3px rgba(158, 120, 62, 0.25)',
      transition: 'all 160ms ease',
    },
    badge: {
      padding: '0.3rem 0.85rem',
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#9e783e',
      background: '#efe7d5',
      color: '#5c1626',
    },
    section: {
      padding: '4.5rem 2rem',
      background: 'transparent',
      borderColor: '#d8cdb8',
      borderWidth: '1px',
      borderStyle: 'none',
    },
    page: {
      background: '#f7f2e7',
      color: '#1c1917',
      fontFamily: "'EB Garamond', 'Georgia', serif",
    },
  },
};

export { victorianSemanticCss } from './rules';
