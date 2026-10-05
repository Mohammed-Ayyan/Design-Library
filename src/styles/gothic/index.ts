import { StyleDefinition } from '../../core/types/style-definition';

export const gothicStyle: StyleDefinition = {
  id: 'gothic',
  name: 'Gothic',
  description: 'Medieval cathedral architecture, illuminated manuscripts, dark romanticism, antique brass rules, and dramatic monumental serifs.',
  metadata: {
    version: '1.0.0',
    category: 'Retro & Heritage',
    tags: ['gothic', 'cathedral', 'medieval', 'illuminated-manuscript', 'dark-romanticism', 'antique-brass', 'burgundy', 'lancet-arch', 'stone'],
  },
  tokens: {
    colors: {
      background: '#0c0c0e',        // Deep cathedral stone / near-black charcoal void
      surface: '#151518',           // Chiseled ashlar stone slab / dark cloister panel
      surfaceSubtle: '#1f1f24',     // Carved granite vaulting / sub-panel
      textPrimary: '#f3efe6',       // Aged vellum ivory
      textSecondary: '#bfb9aa',     // Weathered limestone parchment
      textMuted: '#7d786d',         // Cathedral incense ash
      primary: '#c5a059',           // Antique cathedral brass / illuminated gold leaf
      primaryHover: '#dfb86c',      // Polished cathedral brass flare
      primaryText: '#0c0c0e',       // High-contrast deep stone
      accent: '#631326',            // Imperial cathedral burgundy
      border: '#2e2c28',            // Carved ashlar mortar joint
      borderStrong: '#c5a059',      // Antique brass rule boundary
      ring: 'rgba(197, 160, 89, 0.45)', // Illuminated brass halo
    },
    typography: {
      fontFamilyBase: "'EB Garamond', 'Cormorant Garamond', Georgia, serif",
      fontFamilyHeading: "'Cinzel', 'Cinzel Decorative', 'Castoro Titling', serif",
      fontFamilyMono: "'JetBrains Mono', 'Cinzel', monospace",
      fontSizeXs: '0.6875rem',
      fontSizeSm: '0.8125rem',
      fontSizeBase: '1rem',
      fontSizeLg: '1.25rem',
      fontSizeXl: '1.875rem',
      fontSize2xl: '2.75rem',
      fontWeightNormal: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      lineHeightBase: 1.7,
      lineHeightHeading: 1.15,
      letterSpacingBase: '0.01em',
      letterSpacingHeading: '0.08em', // Monumental Roman/Gothic stone tracking
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
      md: '3px',
      lg: '16px', // Lancet pointed arch curve
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
      sm: '0 2px 8px rgba(0, 0, 0, 0.7), 0 0 1px rgba(197, 160, 89, 0.25)',
      md: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 12px rgba(197, 160, 89, 0.2)',
      lg: '0 12px 35px rgba(0, 0, 0, 0.9), 0 0 25px rgba(99, 19, 38, 0.3), 0 0 1px rgba(197, 160, 89, 0.3)',
      glow: '0 0 18px rgba(197, 160, 89, 0.45), 0 0 30px rgba(99, 19, 38, 0.3)',
    },
    motion: {
      durationFast: '160ms',
      durationNormal: '250ms',
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    effects: {
      backdropBlur: 'none',
      transformHover: 'translateY(-2px)',
    },
  },
  components: {
    button: {
      padding: '0.8rem 2.25rem',
      fontFamily: "'Cinzel', serif",
      fontSize: '0.8125rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#c5a059',
      background: 'linear-gradient(180deg, #1f1a14 0%, #12100d 100%)',
      color: '#f3efe6',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(197, 160, 89, 0.4)',
      transition: 'all 200ms ease',
      hover: {
        background: 'linear-gradient(180deg, #631326 0%, #3e0a17 100%)',
        borderColor: '#dfb86c',
        color: '#ffffff',
        boxShadow: '0 0 20px rgba(197, 160, 89, 0.4), 0 4px 15px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(223, 184, 108, 0.5)',
      },
      active: {
        transform: 'translateY(1px)',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.9)',
      },
      focusRing: '0 0 0 2px #0c0c0e, 0 0 0 4px #c5a059, 0 0 15px rgba(197, 160, 89, 0.5)',
    },
    card: {
      padding: '2.5rem 2.25rem',
      borderRadius: '16px 16px 3px 3px', // Lancet arch top curve
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#2e2c28',
      background: 'linear-gradient(180deg, #17171b 0%, #101013 100%)',
      color: '#f3efe6',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(197, 160, 89, 0.15)',
      transition: 'all 240ms ease',
      hover: {
        borderColor: '#c5a059',
      },
    },
    heading: {
      fontFamily: "'Cinzel', 'Castoro Titling', serif",
      fontWeight: 700,
      letterSpacing: '0.08em',
      lineHeight: 1.15,
      color: '#f3efe6',
    },
    paragraph: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#bfb9aa',
    },
    input: {
      padding: '0.75rem 1rem',
      fontFamily: "'EB Garamond', serif",
      fontSize: '0.9375rem',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#2e2c28',
      background: '#0e0e11',
      color: '#f3efe6',
      placeholderColor: '#625e55',
      focusBorderColor: '#c5a059',
      focusRing: '0 0 0 2px rgba(197, 160, 89, 0.3), 0 0 12px rgba(197, 160, 89, 0.2)',
      transition: 'all 180ms ease',
    },
    badge: {
      padding: '0.25rem 0.85rem',
      fontFamily: "'Cinzel', serif",
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#c5a059',
      background: 'rgba(99, 19, 38, 0.4)',
      color: '#c5a059',
      boxShadow: '0 0 8px rgba(197, 160, 89, 0.2)',
    },
    section: {
      padding: '4.5rem 2.25rem',
      background: 'transparent',
      borderColor: '#2e2c28',
      borderWidth: '1px',
      borderStyle: 'none',
    },
    page: {
      background: '#0c0c0e',
      color: '#f3efe6',
      fontFamily: "'EB Garamond', Georgia, serif",
    },
  },
};

export { gothicSemanticCss } from './rules';
