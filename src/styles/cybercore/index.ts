import { StyleDefinition } from '../../core/types/style-definition';

export const cybercoreStyle: StyleDefinition = {
  id: 'cybercore',
  name: 'Cybercore',
  description: 'Internet-native digital culture, fragmented interfaces, selective CRT scanlines, corrupted media, and technical monospace metadata.',
  metadata: {
    version: '1.0.0',
    category: 'Expressive',
    tags: ['cybercore', 'digital-culture', 'crt', 'scanlines', 'fragmented', 'corrupted-media', 'monospace', 'underground-web'],
  },
  tokens: {
    colors: {
      background: '#0c0e12', // Deep digital obsidian substrate
      surface: '#13171f',    // Dark digital console panel
      surfaceSubtle: '#1a202c', // Technical slab / sub-layer
      textPrimary: '#e2e8f0',   // Dirty digital white
      textSecondary: '#94a3b8', // Terminal metadata slate
      textMuted: '#64748b',     // Dimmed machine commentary
      primary: '#00ff66',       // Acidic digital phosphor green
      primaryHover: '#33ff85',  // Brightened phosphor burst
      primaryText: '#0c0e12',   // High-contrast near-black on green
      accent: '#00f0ff',        // Electric cybernetic cyan
      border: '#242b35',        // Fragmented frame outline
      borderStrong: '#00ff66',  // High-signal phosphor boundary
      ring: 'rgba(0, 255, 102, 0.4)', // Digital focus halo
    },
    typography: {
      fontFamilyBase: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Space Grotesk', 'Syne', -apple-system, sans-serif",
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
      lineHeightHeading: 1.15,
      letterSpacingBase: '-0.01em',
      letterSpacingHeading: '-0.03em',
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
      sm: '1px', // Sharp technical precision
      md: '2px',
      lg: '4px',
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
      sm: '2px 2px 0px rgba(0, 0, 0, 0.6), 1px 1px 0px rgba(0, 255, 102, 0.2)',
      md: '3px 3px 0px rgba(0, 0, 0, 0.8), -1px -1px 0px rgba(0, 240, 255, 0.15), 2px 2px 0px rgba(0, 255, 102, 0.25)',
      lg: '5px 5px 0px rgba(0, 0, 0, 0.9), -2px -2px 0px rgba(255, 0, 85, 0.15), 3px 3px 0px rgba(0, 255, 102, 0.3)',
      glow: '0 0 12px rgba(0, 255, 102, 0.35)',
    },
    motion: {
      durationFast: '120ms',
      durationNormal: '200ms',
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    effects: {
      backdropBlur: 'none',
      transformHover: 'translate(-1px, -1px)',
    },
  },
  components: {
    button: {
      padding: '0.75rem 1.75rem',
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      fontSize: '0.8125rem',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderRadius: '1px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#00ff66',
      background: '#00ff66',
      color: '#0c0e12',
      boxShadow: '2px 2px 0px #0c0e12, 3px 3px 0px rgba(0, 255, 102, 0.4)',
      transition: 'all 140ms ease',
      hover: {
        background: '#33ff85',
        borderColor: '#00f0ff',
        color: '#0c0e12',
        boxShadow: '3px 3px 0px #0c0e12, 4px 4px 0px #00f0ff',
      },
      active: {
        transform: 'translate(2px, 2px)',
        boxShadow: 'none',
      },
      focusRing: '0 0 0 2px #0c0e12, 0 0 0 4px #00ff66',
    },
    card: {
      padding: '2.25rem 2rem',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#242b35',
      background: '#13171f',
      color: '#e2e8f0',
      boxShadow: '3px 3px 0px rgba(0, 0, 0, 0.8), -1px -1px 0px rgba(0, 240, 255, 0.12), 2px 2px 0px rgba(0, 255, 102, 0.2)',
      transition: 'all 180ms ease',
      hover: {
        borderColor: '#00ff66',
      },
    },
    heading: {
      fontFamily: "'Space Grotesk', 'Syne', -apple-system, sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      color: '#e2e8f0',
    },
    paragraph: {
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontSize: '0.9375rem',
      lineHeight: 1.65,
      color: '#94a3b8',
    },
    input: {
      padding: '0.75rem 1rem',
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      fontSize: '0.875rem',
      borderRadius: '1px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#242b35',
      background: '#0c0e12',
      color: '#e2e8f0',
      placeholderColor: '#475569',
      focusBorderColor: '#00ff66',
      focusRing: '0 0 0 2px rgba(0, 255, 102, 0.25)',
      transition: 'all 140ms ease',
    },
    badge: {
      padding: '0.25rem 0.65rem',
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      fontSize: '0.6875rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      borderRadius: '1px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(0, 255, 102, 0.4)',
      background: 'rgba(0, 255, 102, 0.08)',
      color: '#00ff66',
    },
    section: {
      padding: '4rem 2rem',
      background: 'transparent',
      borderColor: '#242b35',
      borderWidth: '1px',
      borderStyle: 'none',
    },
    page: {
      background: '#0c0e12',
      color: '#e2e8f0',
      fontFamily: "'Inter', -apple-system, sans-serif",
    },
  },
};

export { cybercoreSemanticCss } from './rules';
