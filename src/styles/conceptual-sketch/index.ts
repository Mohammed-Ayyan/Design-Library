import { StyleDefinition } from '../../core/types/style-definition';

export const conceptualSketchStyle: StyleDefinition = {
  id: 'conceptual-sketch',
  name: 'Conceptual Sketch',
  description: 'Architectural study and designer notebook aesthetic featuring graphite drafting rules, technical blue pen and revision red annotations, warm vellum grid paper, and diagrammatic composition.',
  metadata: {
    version: '1.0.0',
    category: 'Artistic & Organic',
    tags: ['sketch', 'architectural', 'notebook', 'diagram', 'concept', 'annotations', 'drafting'],
  },
  tokens: {
    colors: {
      background: '#faf8f3', // Warm drafting vellum paper
      surface: '#ffffff', // Pinned study plate / clean sheet
      surfaceSubtle: '#f4f0e6', // Tinted margin sheet
      textPrimary: '#1f2124', // Graphite ink
      textSecondary: '#525866', // Pencil gray
      textMuted: '#8a909d', // Construction guide line gray
      primary: '#1f2124', // Core ink outline
      primaryHover: '#2563eb', // Technical blue pen hover
      primaryText: '#ffffff',
      accent: '#2563eb', // Technical blue pen
      border: '#2b2d31', // Hand-drawn drafting rule
      borderStrong: '#1f2124',
      ring: '#2563eb',
    },
    typography: {
      fontFamilyBase: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
      fontFamilyMono: "'Caveat', 'Architects Daughter', cursive",
      fontSizeXs: '0.75rem',
      fontSizeSm: '0.875rem',
      fontSizeBase: '1rem',
      fontSizeLg: '1.25rem',
      fontSizeXl: '1.625rem',
      fontSize2xl: '2.25rem',
      fontWeightNormal: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      lineHeightBase: 1.7,
      lineHeightHeading: 1.25,
      letterSpacingBase: '-0.01em',
      letterSpacingHeading: '-0.03em',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1.25rem',
      lg: '2rem',
      xl: '3.5rem',
      '2xl': '5rem',
    },
    radii: {
      none: '0px',
      sm: '2px',
      md: '3px',
      lg: '5px',
      full: '9999px',
    },
    borders: {
      widthThin: '1px',
      widthBase: '1.5px',
      widthThick: '2.5px',
      style: 'solid',
    },
    shadows: {
      none: 'none',
      sm: '2px 2px 0px rgba(31, 33, 36, 0.08)',
      md: '3px 3px 0px rgba(31, 33, 36, 0.12)',
      lg: '5px 5px 0px rgba(31, 33, 36, 0.15)',
      glow: '0 0 0 2px rgba(37, 99, 235, 0.3)',
    },
    motion: {
      durationFast: '140ms',
      durationNormal: '220ms',
      easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    },
    effects: {
      backdropBlur: '4px',
      transformHover: 'translate(-2px, -2px)',
    },
  },
  components: {
    button: {
      padding: '0.75rem 1.6rem',
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      borderRadius: '3px',
      borderWidth: '1.5px',
      borderStyle: 'solid',
      borderColor: '#2b2d31',
      background: '#ffffff',
      color: '#1f2124',
      boxShadow: '3px 3px 0px #1f2124',
      transition: 'all 160ms cubic-bezier(0.2, 0.8, 0.2, 1)',
      hover: {
        background: '#2563eb',
        borderColor: '#1f2124',
        color: '#ffffff',
      },
      active: {
        background: '#1d4ed8',
        borderColor: '#1f2124',
      },
      focusRing: '0 0 0 2px #2563eb',
    },
    card: {
      padding: '2rem',
      borderRadius: '3px',
      borderWidth: '1.5px',
      borderStyle: 'solid',
      borderColor: '#2b2d31',
      background: '#ffffff',
      color: '#1f2124',
      boxShadow: '4px 4px 0px rgba(31, 33, 36, 0.12)',
      transition: 'all 200ms ease',
      hover: {
        borderColor: '#2563eb',
      },
    },
    heading: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1.25,
      color: '#1f2124',
    },
    paragraph: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#3d424d',
    },
    input: {
      padding: '0.75rem 1rem',
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9375rem',
      borderRadius: '3px',
      borderWidth: '1.5px',
      borderStyle: 'solid',
      borderColor: '#2b2d31',
      background: '#ffffff',
      color: '#1f2124',
      placeholderColor: '#8a909d',
      focusBorderColor: '#2563eb',
      focusRing: '0 0 0 2px rgba(37, 99, 235, 0.25)',
      transition: 'all 160ms ease',
    },
    badge: {
      padding: '0.35rem 0.75rem',
      fontFamily: "'Caveat', cursive",
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
      textTransform: 'none',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#dc2626',
      background: 'rgba(254, 240, 138, 0.45)',
      color: '#dc2626',
    },
    section: {
      padding: '4rem 2rem',
      background: 'transparent',
      borderColor: '#2b2d31',
      borderWidth: '1px',
      borderStyle: 'dashed',
    },
    page: {
      background: '#faf8f3',
      color: '#1f2124',
      fontFamily: "'Inter', sans-serif",
    },
  },
};

export { conceptualSketchSemanticCss } from './rules';
