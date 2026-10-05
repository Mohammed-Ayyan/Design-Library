import { StyleDefinition } from '../../core/types/style-definition';

export const synthwaveStyle: StyleDefinition = {
  id: 'synthwave',
  name: 'Synthwave',
  description: '1980s neon retro-futurism, outrun sunset gradients, arcade neon glows, wireframe horizon grids, and analog synthesizer consoles.',
  metadata: {
    version: '1.0.0',
    category: 'Retro & Heritage',
    tags: ['synthwave', 'retro-futurism', 'outrun', '1980s', 'neon', 'sunset-gradient', 'arcade', 'analog-synth', 'horizon-grid'],
  },
  tokens: {
    colors: {
      background: '#0f051d',        // Deep midnight purple void
      surface: '#190a34',           // Twilight synth console panel
      surfaceSubtle: '#250e49',     // Deep indigo deck sub-layer
      textPrimary: '#fdf4ff',       // Luminous starlight white with subtle rose warmth
      textSecondary: '#d8b4fe',     // Lavender neon glow text
      textMuted: '#9370db',         // Ambient medium purple
      primary: '#ff2a85',           // Electric neon pink
      primaryHover: '#ff529f',      // Luminous pink flare
      primaryText: '#ffffff',       // High-contrast white
      accent: '#01cdfe',            // Outrun laser cyan
      border: '#3d1466',            // Deep violet neon conduit
      borderStrong: '#ff2a85',      // Luminous electric pink boundary
      ring: 'rgba(255, 42, 133, 0.45)', // Neon pink glow aura
    },
    typography: {
      fontFamilyBase: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Orbitron', 'Space Grotesk', -apple-system, sans-serif",
      fontFamilyMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
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
      lineHeightHeading: 1.2,
      letterSpacingBase: '-0.005em',
      letterSpacingHeading: '0.06em', // Wide retro-futuristic tracking
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
      sm: '2px', // Restrained arcade bevel
      md: '4px',
      lg: '8px',
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
      sm: '0 0 10px rgba(255, 42, 133, 0.25), 0 2px 4px rgba(0, 0, 0, 0.6)',
      md: '0 0 15px rgba(255, 42, 133, 0.35), 0 0 25px rgba(1, 205, 254, 0.18), 0 4px 12px rgba(0, 0, 0, 0.7)',
      lg: '0 0 25px rgba(255, 42, 133, 0.45), 0 0 40px rgba(1, 205, 254, 0.25), 0 8px 24px rgba(0, 0, 0, 0.8)',
      glow: '0 0 20px rgba(255, 42, 133, 0.55), 0 0 35px rgba(1, 205, 254, 0.3)',
    },
    motion: {
      durationFast: '150ms',
      durationNormal: '240ms',
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    effects: {
      backdropBlur: '12px',
      transformHover: 'translateY(-2px)',
    },
  },
  components: {
    button: {
      padding: '0.75rem 2rem',
      fontFamily: "'Orbitron', 'Space Grotesk', -apple-system, sans-serif",
      fontSize: '0.8125rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      borderRadius: '3px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ff2a85',
      background: 'linear-gradient(135deg, #ff2a85 0%, #c0007a 100%)',
      color: '#ffffff',
      boxShadow: '0 0 15px rgba(255, 42, 133, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
      transition: 'all 200ms ease',
      hover: {
        background: 'linear-gradient(135deg, #ff529f 0%, #ff007f 100%)',
        borderColor: '#01cdfe',
        color: '#ffffff',
        boxShadow: '0 0 25px rgba(255, 42, 133, 0.7), 0 0 15px rgba(1, 205, 254, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      },
      active: {
        transform: 'translateY(1px)',
        boxShadow: '0 0 10px rgba(255, 42, 133, 0.4)',
      },
      focusRing: '0 0 0 2px #0f051d, 0 0 0 4px #01cdfe, 0 0 20px #01cdfe',
    },
    card: {
      padding: '2.25rem 2rem',
      borderRadius: '4px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(255, 42, 133, 0.25)',
      background: 'linear-gradient(180deg, #190a34 0%, #120726 100%)',
      color: '#fdf4ff',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 42, 133, 0.12)',
      transition: 'all 240ms ease',
      hover: {
        borderColor: '#ff2a85',
      },
    },
    heading: {
      fontFamily: "'Orbitron', 'Space Grotesk', -apple-system, sans-serif",
      fontWeight: 800,
      letterSpacing: '0.06em',
      lineHeight: 1.2,
      color: '#ffffff',
    },
    paragraph: {
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: '0.9375rem',
      lineHeight: 1.65,
      color: '#d8b4fe',
    },
    input: {
      padding: '0.75rem 1rem',
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: '0.875rem',
      borderRadius: '3px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#3d1466',
      background: '#0d041c',
      color: '#fdf4ff',
      placeholderColor: '#7c3aed',
      focusBorderColor: '#01cdfe',
      focusRing: '0 0 0 2px rgba(1, 205, 254, 0.3), 0 0 15px rgba(1, 205, 254, 0.25)',
      transition: 'all 180ms ease',
    },
    badge: {
      padding: '0.25rem 0.75rem',
      fontFamily: "'Orbitron', monospace",
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ff2a85',
      background: 'rgba(255, 42, 133, 0.12)',
      color: '#ff71ce',
    },
    section: {
      padding: '4rem 2rem',
      background: 'transparent',
      borderColor: '#3d1466',
      borderWidth: '1px',
      borderStyle: 'none',
    },
    page: {
      background: '#0f051d',
      color: '#fdf4ff',
      fontFamily: "'Inter', -apple-system, sans-serif",
    },
  },
};

export { synthwaveSemanticCss } from './rules';
