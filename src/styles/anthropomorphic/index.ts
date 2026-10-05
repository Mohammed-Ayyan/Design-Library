import { StyleDefinition } from '../../core/types/style-definition';

export const anthropomorphicStyle: StyleDefinition = {
  id: 'anthropomorphic',
  name: 'Anthropomorphic',
  description: 'Warm, expressive, and approachable visual system with friendly organic geometry, conversational typography, living micro-interactions, and character-driven controls.',
  metadata: {
    version: '1.0.0',
    category: 'Artistic & Organic',
    tags: ['anthropomorphic', 'friendly', 'expressive', 'warm', 'organic', 'personality', 'conversational', 'approachable'],
  },
  compositionConfig: {
    containerPhilosophy: 'organic-pod',
    groupingPhilosophy: 'conversational-cluster',
    featurePresentation: 'friendly-card',
    heroMode: 'welcoming-intro',
    maxWidth: '1200px',
    alignment: 'organic-flow',
    density: 'comfortable',
    hasStructuralBorders: true,
    hasAsymmetricOffsets: true,
    hasDecorativeFraming: false,
  },
  tokens: {
    colors: {
      background: '#fdfbf7', // Warm cream canvas
      surface: '#ffffff', // Clean porcelain surface
      surfaceSubtle: '#f7f3eb', // Soft eggshell
      textPrimary: '#26262e', // Deep warm slate ink
      textSecondary: '#565664', // Warm slate sepia
      textMuted: '#858596', // Gentle stone
      primary: '#ff6b57', // Warm coral
      primaryHover: '#e85642', // Vibrant sun-coral
      primaryText: '#ffffff',
      accent: '#4a80e8', // Soft welcoming sky blue
      border: 'rgba(215, 203, 188, 0.65)', // Gentle organic border
      borderStrong: 'rgba(180, 165, 145, 0.85)',
      ring: 'rgba(255, 107, 87, 0.25)',
    },
    typography: {
      fontFamilyBase: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Outfit', 'Nunito', -apple-system, sans-serif",
      fontFamilyMono: "'JetBrains Mono', monospace",
      fontSizeXs: '0.75rem',
      fontSizeSm: '0.875rem',
      fontSizeBase: '1rem',
      fontSizeLg: '1.25rem',
      fontSizeXl: '1.75rem',
      fontSize2xl: '2.75rem',
      fontWeightNormal: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      lineHeightBase: 1.68,
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
      sm: '10px',
      md: '22px 28px 20px 26px', // Expressive organic asymmetrical curve
      lg: '32px 24px 30px 22px',
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
      sm: '0 4px 12px rgba(60, 45, 30, 0.05)',
      md: '0 10px 28px -6px rgba(60, 45, 30, 0.08)',
      lg: '0 20px 40px -8px rgba(60, 45, 30, 0.12)',
      glow: '0 0 20px rgba(255, 107, 87, 0.25)',
    },
    motion: {
      durationFast: '120ms',
      durationNormal: '220ms',
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Bouncy spring curve
    },
    effects: {
      backdropBlur: '14px',
      transformHover: 'translateY(-2px) scale(1.02)',
    },
  },
  components: {
    button: {
      padding: '0.75rem 1.65rem',
      fontFamily: "'Outfit', sans-serif",
      fontSize: '0.95rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      borderRadius: '22px 18px 24px 20px',
      borderWidth: '0px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      background: '#ff6b57',
      color: '#ffffff',
      boxShadow: '0 6px 18px -2px rgba(255, 107, 87, 0.38)',
      transition: 'all 220ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      hover: {
        background: '#e85642',
        color: '#ffffff',
        borderColor: 'transparent',
        boxShadow: '0 10px 24px -3px rgba(255, 107, 87, 0.48)',
      },
      active: {
        background: '#d64532',
        color: '#ffffff',
      },
      focusRing: '0 0 0 4px rgba(255, 107, 87, 0.3)',
    },
    card: {
      padding: '1.85rem',
      borderRadius: '22px 28px 20px 26px',
      background: '#ffffff',
      color: '#26262e',
      borderColor: 'rgba(215, 203, 188, 0.65)',
      borderWidth: '1.5px',
      borderStyle: 'solid',
      boxShadow: '0 10px 28px -6px rgba(60, 45, 30, 0.08)',
      transition: 'all 220ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      hover: {
        borderColor: 'rgba(255, 107, 87, 0.45)',
      },
    },
    input: {
      padding: '0.75rem 1rem',
      borderRadius: '14px',
      background: '#ffffff',
      borderColor: 'rgba(215, 203, 188, 0.8)',
      borderWidth: '1.5px',
      borderStyle: 'solid',
      color: '#26262e',
      placeholderColor: '#858596',
      focusBorderColor: '#4a80e8',
      focusRing: '0 0 0 4px rgba(74, 128, 232, 0.18)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: '0.95rem',
      transition: 'all 180ms ease',
    },
    heading: {
      fontFamily: "'Outfit', 'Nunito', -apple-system, sans-serif",
      color: '#26262e',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
    },
    paragraph: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: '#565664',
      fontSize: '1rem',
      lineHeight: 1.68,
    },
    badge: {
      padding: '0.3rem 0.85rem',
      fontFamily: "'Outfit', sans-serif",
      fontSize: '0.8125rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
      borderRadius: '9999px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(255, 107, 87, 0.25)',
      background: '#fff0ed',
      color: '#ff6b57',
    },
    section: {
      padding: '3rem 2rem',
      background: '#fdfbf7',
      borderColor: 'rgba(215, 203, 188, 0.65)',
      borderWidth: '0px',
      borderStyle: 'solid',
    },
    page: {
      background: '#fdfbf7',
      color: '#26262e',
      fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
    },
  },
};

export { anthropomorphicSemanticCss } from './rules';
