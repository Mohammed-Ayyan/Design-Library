import { StyleDefinition } from '../../core/types/style-definition';

export const bauhausStyle: StyleDefinition = {
  id: 'bauhaus',
  name: 'Bauhaus',
  description: 'Form follows function. Primary geometry, asymmetric architectural hierarchy, and functional primary color blocks.',
  metadata: {
    version: '1.0.0',
    category: 'Modern',
    tags: ['bauhaus', 'modernism', 'primary-colors', 'geometry', 'functional', 'asymmetry', 'circle-square-triangle'],
  },
  tokens: {
    colors: {
      background: '#f7f5f0',        // Unbleached warm cream canvas
      surface: '#ffffff',           // Functional pure white plane
      surfaceSubtle: '#ede9e0',     // Light architectural stone tint
      textPrimary: '#121212',       // Stark carbon black
      textSecondary: '#2a2a2a',     // Architectural charcoal
      textMuted: '#666666',         // Functional slate gray
      primary: '#d9261e',           // Primary Bauhaus Vermilion Red
      primaryHover: '#b81d16',      // Deep architectural red
      primaryText: '#ffffff',       // Stark white knockout
      accent: '#1b4f9b',            // Primary Bauhaus Cobalt Blue
      border: '#121212',            // Stark 2px architectural boundary
      borderStrong: '#121212',      // Heavy structural rule
      ring: 'rgba(27, 79, 155, 0.4)', // Cobalt blue focus halo
    },
    typography: {
      fontFamilyBase: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Space Grotesk', 'Inter', -apple-system, sans-serif",
      fontFamilyMono: "'Space Grotesk', 'JetBrains Mono', monospace",
      fontSizeXs: '0.75rem',
      fontSizeSm: '0.875rem',
      fontSizeBase: '1rem',
      fontSizeLg: '1.25rem',
      fontSizeXl: '1.75rem',
      fontSize2xl: '2.75rem',
      fontWeightNormal: 400,
      fontWeightMedium: 600,
      fontWeightBold: 800,
      lineHeightBase: 1.6,
      lineHeightHeading: 1.15,
      letterSpacingBase: '0em',
      letterSpacingHeading: '-0.02em', // Impactful modernist headline tracking
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '3.5rem',
      '2xl': '5rem',
    },
    radii: {
      none: '0px',
      sm: '0px',   // Strict rectangular geometry
      md: '0px',   // Sharp architectural corners
      lg: '0px',   // No soft rounding
      full: '9999px', // Pure circular geometry for deliberate circular elements
    },
    borders: {
      widthThin: '1px',
      widthBase: '2px',
      widthThick: '4px',
      style: 'solid',
    },
    shadows: {
      none: 'none',
      sm: 'none',   // Flat modernist planes reject skeuomorphic blur shadows
      md: 'none',
      lg: 'none',
      glow: 'none',
    },
    motion: {
      durationFast: '120ms',
      durationNormal: '200ms',
      easing: 'ease',
    },
    effects: {
      backdropBlur: 'none',
      transformHover: 'none',
    },
  },
  components: {
    button: {
      padding: '0.8rem 1.85rem',
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderRadius: '0px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#121212',
      background: '#d9261e',
      color: '#ffffff',
      boxShadow: 'none',
      transition: 'all 140ms ease',
      hover: {
        background: '#121212',
        borderColor: '#121212',
        color: '#ffffff',
        transform: 'none',
      },
      active: {
        background: '#1b4f9b',
        borderColor: '#121212',
        color: '#ffffff',
        transform: 'none',
      },
      focusRing: '0 0 0 2px #f7f5f0, 0 0 0 4px #1b4f9b',
    },
    card: {
      padding: '2.25rem 2rem',
      borderRadius: '0px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#121212',
      background: '#ffffff',
      color: '#121212',
      boxShadow: 'none',
      transition: 'all 140ms ease',
      hover: {
        borderColor: '#d9261e',
      },
    },
    heading: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: '#121212',
      textTransform: 'uppercase',
    },
    paragraph: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#2a2a2a',
    },
    input: {
      padding: '0.75rem 1rem',
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9375rem',
      borderRadius: '0px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#121212',
      background: '#ffffff',
      color: '#121212',
      placeholderColor: '#777777',
      focusBorderColor: '#1b4f9b',
      focusRing: '0 0 0 2px rgba(27, 79, 155, 0.3)',
      transition: 'all 140ms ease',
    },
    badge: {
      padding: '0.25rem 0.75rem',
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      borderRadius: '0px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#121212',
      background: '#f2b705',
      color: '#121212',
    },
    section: {
      padding: '4.5rem 2rem',
      background: 'transparent',
      borderColor: '#121212',
      borderWidth: '2px',
      borderStyle: 'none',
    },
    page: {
      background: '#f7f5f0',
      color: '#121212',
      fontFamily: "'Inter', sans-serif",
    },
  },
};

export { bauhausSemanticCss } from './rules';
