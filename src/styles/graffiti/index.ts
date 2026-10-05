import { StyleDefinition } from '../../core/types/style-definition';

export const graffitiStyle: StyleDefinition = {
  id: 'graffiti',
  name: 'Graffiti',
  description: 'Urban street-art culture, spray paint textures, mural typography, die-cut vinyl stickers, and raw expressive marker energy.',
  metadata: {
    version: '1.0.0',
    category: 'Expressive',
    tags: ['graffiti', 'street-art', 'urban', 'spray-paint', 'stickers', 'stencil', 'mural', 'markers', 'hand-lettering'],
  },
  tokens: {
    colors: {
      background: '#121214',        // Dark urban asphalt / concrete wall substrate
      surface: '#1c1d22',           // Weathered concrete panel / poster substrate
      surfaceSubtle: '#26272e',     // Layered cement / dark plaster slab
      textPrimary: '#f5f5f7',       // Chalk / off-white spray paint
      textSecondary: '#a1a1aa',     // Concrete slate gray
      textMuted: '#71717a',         // Faded asphalt shadow
      primary: '#ff1e42',           // Saturated spray crimson / marker red
      primaryHover: '#ff4765',      // Fresh wet spray crimson
      primaryText: '#ffffff',       // High-contrast white
      accent: '#ffea00',            // Stencil hazard yellow
      border: '#2e2f38',            // Asphalt joint seam
      borderStrong: '#ff1e42',      // High-signal crimson boundary
      ring: 'rgba(255, 30, 66, 0.45)', // Spray paint glow halo
    },
    typography: {
      fontFamilyBase: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Anton', 'Space Grotesk', -apple-system, sans-serif",
      fontFamilyMono: "'Permanent Marker', 'JetBrains Mono', cursive, monospace",
      fontSizeXs: '0.6875rem',
      fontSizeSm: '0.8125rem',
      fontSizeBase: '0.9375rem',
      fontSizeLg: '1.1875rem',
      fontSizeXl: '1.75rem',
      fontSize2xl: '2.5rem',
      fontWeightNormal: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      lineHeightBase: 1.65,
      lineHeightHeading: 1.15,
      letterSpacingBase: '-0.005em',
      letterSpacingHeading: '0.04em',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1.15rem',
      lg: '2.25rem',
      xl: '3.75rem',
      '2xl': '5.5rem',
    },
    radii: {
      none: '0px',
      sm: '2px',
      md: '5px', // Die-cut sticker radius
      lg: '8px',
      full: '9999px',
    },
    borders: {
      widthThin: '1px',
      widthBase: '2px',
      widthThick: '3px',
      style: 'solid',
    },
    shadows: {
      none: 'none',
      sm: '2px 2px 0px #000000, 0 0 8px rgba(255, 30, 66, 0.25)',
      md: '3px 3px 0px #000000, 0 0 16px rgba(255, 30, 66, 0.35)',
      lg: '5px 5px 0px #000000, 0 0 24px rgba(255, 30, 66, 0.45), 0 8px 30px rgba(0, 0, 0, 0.7)',
      glow: '0 0 20px rgba(255, 30, 66, 0.6), 0 0 35px rgba(255, 234, 0, 0.3)',
    },
    motion: {
      durationFast: '140ms',
      durationNormal: '220ms',
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    effects: {
      backdropBlur: 'none',
      transformHover: 'translateY(-2px) rotate(-1deg)',
    },
  },
  components: {
    button: {
      padding: '0.75rem 2rem',
      fontFamily: "'Anton', 'Space Grotesk', -apple-system, sans-serif",
      fontSize: '0.9375rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      borderRadius: '4px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#ff1e42',
      background: '#ff1e42',
      color: '#ffffff',
      boxShadow: '3px 3px 0px #000000, 0 0 12px rgba(255, 30, 66, 0.35)',
      transition: 'all 160ms cubic-bezier(0.16, 1, 0.3, 1)',
      hover: {
        background: '#ff3859',
        borderColor: '#ffea00',
        color: '#ffffff',
        boxShadow: '4px 4px 0px #000000, 0 0 20px rgba(255, 234, 0, 0.5)',
      },
      active: {
        transform: 'translate(2px, 2px)',
        boxShadow: '1px 1px 0px #000000',
      },
      focusRing: '0 0 0 2px #121214, 0 0 0 4px #ffea00, 0 0 15px rgba(255, 234, 0, 0.6)',
    },
    card: {
      padding: '2.25rem 2rem',
      borderRadius: '6px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#2e2f38',
      background: '#1c1d22',
      color: '#f5f5f7',
      boxShadow: '4px 4px 0px #000000, 0 6px 20px rgba(0, 0, 0, 0.6)',
      transition: 'all 200ms ease',
      hover: {
        borderColor: '#ff1e42',
      },
    },
    heading: {
      fontFamily: "'Anton', 'Space Grotesk', -apple-system, sans-serif",
      fontWeight: 800,
      letterSpacing: '0.04em',
      lineHeight: 1.15,
      color: '#ffffff',
    },
    paragraph: {
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: '0.9375rem',
      lineHeight: 1.65,
      color: '#a1a1aa',
    },
    input: {
      padding: '0.75rem 1rem',
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: '0.875rem',
      borderRadius: '4px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#2e2f38',
      background: '#141417',
      color: '#f5f5f7',
      placeholderColor: '#52525b',
      focusBorderColor: '#ff1e42',
      focusRing: '0 0 0 2px rgba(255, 30, 66, 0.3), 0 0 12px rgba(255, 30, 66, 0.2)',
      transition: 'all 150ms ease',
    },
    badge: {
      padding: '0.3rem 0.85rem',
      fontFamily: "'Permanent Marker', cursive, sans-serif",
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      borderRadius: '3px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#ffffff',
      background: '#ff1e42',
      color: '#ffffff',
      boxShadow: '2px 2px 0px #000000',
    },
    section: {
      padding: '4rem 2rem',
      background: 'transparent',
      borderColor: '#2e2f38',
      borderWidth: '2px',
      borderStyle: 'none',
    },
    page: {
      background: '#121214',
      color: '#f5f5f7',
      fontFamily: "'Inter', -apple-system, sans-serif",
    },
  },
};

export { graffitiSemanticCss } from './rules';
