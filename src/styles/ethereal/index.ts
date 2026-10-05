import { StyleDefinition } from '../../core/types/style-definition';

export const etherealStyle: StyleDefinition = {
  id: 'ethereal',
  name: 'Ethereal',
  description: 'Atmospheric light, weightless typography, luminous pearl surfaces, and quiet serenity.',
  metadata: {
    version: '1.0.0',
    category: 'Artistic & Organic',
    tags: ['ethereal', 'atmospheric', 'light', 'luminous', 'pearl', 'celestial', 'serene', 'delicate'],
  },
  tokens: {
    colors: {
      background: '#fbfaf8', // Luminous illuminated air ivory
      surface: '#ffffff', // Pearlescent plate
      surfaceSubtle: '#f4f6fa', // Pale mist
      textPrimary: '#1e2029', // Deep charcoal for accessible contrast
      textSecondary: '#4b5563', // Soft slate
      textMuted: '#9ca3af', // Delicate mist gray
      primary: '#1e2029', // Weightless charcoal CTA
      primaryHover: '#2e3340',
      primaryText: '#ffffff',
      accent: '#818cf8', // Celestial mist periwinkle
      border: 'rgba(218, 226, 237, 0.65)', // Whisper hairline
      borderStrong: 'rgba(148, 163, 184, 0.8)',
      ring: '#818cf8',
    },
    typography: {
      fontFamilyBase: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Cormorant Garamond', Georgia, serif",
      fontFamilyMono: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
      fontSizeXs: '0.75rem',
      fontSizeSm: '0.875rem',
      fontSizeBase: '1rem',
      fontSizeLg: '1.25rem',
      fontSizeXl: '1.85rem',
      fontSize2xl: '2.75rem',
      fontWeightNormal: 300,
      fontWeightMedium: 400,
      fontWeightBold: 500,
      lineHeightBase: 1.8,
      lineHeightHeading: 1.15,
      letterSpacingBase: '0.005em',
      letterSpacingHeading: '-0.015em',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1.25rem',
      lg: '2rem',
      xl: '3.5rem',
      '2xl': '5.5rem',
    },
    radii: {
      none: '0px',
      sm: '6px',
      md: '10px',
      lg: '14px',
      full: '9999px',
    },
    borders: {
      widthThin: '1px',
      widthBase: '1px',
      widthThick: '2px',
      style: 'solid',
    },
    shadows: {
      none: 'none',
      sm: '0 2px 8px rgba(148, 163, 184, 0.08)',
      md: '0 10px 30px rgba(148, 163, 184, 0.08)',
      lg: '0 20px 48px rgba(148, 163, 184, 0.12)',
      glow: '0 0 24px rgba(129, 140, 248, 0.25)',
    },
    motion: {
      durationFast: '160ms',
      durationNormal: '260ms',
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    effects: {
      backdropBlur: '12px',
      transformHover: 'translateY(-2px)',
    },
  },
  components: {
    button: {
      padding: '0.75rem 1.75rem',
      fontFamily: "'Outfit', sans-serif",
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.04em',
      textTransform: 'none',
      borderRadius: '10px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(255, 255, 255, 0.15)',
      background: '#1e2029',
      color: '#ffffff',
      boxShadow: '0 4px 16px rgba(30, 32, 41, 0.14)',
      transition: 'all 260ms cubic-bezier(0.16, 1, 0.3, 1)',
      hover: {
        background: '#2d3140',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        color: '#ffffff',
      },
      active: {
        background: '#171922',
        borderColor: 'rgba(255, 255, 255, 0.1)',
      },
      focusRing: '0 0 0 3px rgba(199, 210, 254, 0.5)',
    },
    card: {
      padding: '2.25rem',
      borderRadius: '14px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(218, 226, 237, 0.4)',
      background: 'rgba(255, 255, 255, 0.85)',
      color: '#1e2029',
      boxShadow: '0 10px 30px rgba(148, 163, 184, 0.07)',
      backdropFilter: 'blur(8px)',
      transition: 'all 260ms cubic-bezier(0.16, 1, 0.3, 1)',
      hover: {
        borderColor: 'rgba(199, 210, 254, 0.6)',
      },
    },
    heading: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 300,
      letterSpacing: '-0.015em',
      lineHeight: 1.15,
      color: '#1a1d24',
    },
    paragraph: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.8,
      color: '#374151',
    },
    input: {
      padding: '0.8rem 1.15rem',
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9375rem',
      borderRadius: '9px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(203, 213, 225, 0.6)',
      background: 'rgba(255, 255, 255, 0.88)',
      color: '#1e2029',
      placeholderColor: '#9ca3af',
      focusBorderColor: '#818cf8',
      focusRing: '0 0 0 3px rgba(199, 210, 254, 0.45)',
      transition: 'all 200ms ease',
    },
    badge: {
      padding: '0.25rem 0.65rem',
      fontFamily: "'Outfit', sans-serif",
      fontSize: '0.75rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      borderRadius: '9999px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(199, 210, 254, 0.5)',
      background: 'rgba(238, 242, 255, 0.75)',
      color: '#4f46e5',
    },
    section: {
      padding: '4.5rem 2rem',
      background: 'transparent',
      borderColor: 'transparent',
      borderWidth: '0px',
      borderStyle: 'none',
    },
    page: {
      background: '#fbfaf8',
      color: '#1e2029',
      fontFamily: "'Inter', sans-serif",
    },
  },
};

export { etherealSemanticCss } from './rules';
