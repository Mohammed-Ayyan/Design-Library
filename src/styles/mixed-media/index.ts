import { StyleDefinition } from '../../core/types/style-definition';

export const mixedMediaStyle: StyleDefinition = {
  id: 'mixed-media',
  name: 'Mixed Media',
  description: 'Curated art direction combining photography, fine art paper, paint marks, geometric vectors, and editorial typography.',
  metadata: {
    version: '1.0.0',
    category: 'Artistic & Organic',
    tags: ['mixed-media', 'collage', 'editorial', 'paint', 'paper-texture', 'photography', 'geometric', 'vermilion', 'art-directed'],
  },
  tokens: {
    colors: {
      background: '#f8f6f0',        // Cotton rag fine art paper canvas
      surface: '#ffffff',           // Matted photographic print slab
      surfaceSubtle: '#f1ede4',     // Warm vellum mounting board
      textPrimary: '#1a1918',       // Deep sumi carbon black ink
      textSecondary: '#5a5650',     // Charcoal wash
      textMuted: '#8a857c',         // Pencil graphite
      primary: '#1a1918',           // Solid carbon ink block
      primaryHover: '#e63926',      // Vermilion cadmium ink flare
      primaryText: '#ffffff',       // Crisp paper knockout
      accent: '#e63926',            // Vermilion cadmium red accent
      border: '#e2ddd4',            // Deckled paper hairline boundary
      borderStrong: '#1a1918',      // Crisp vector framing mark
      ring: 'rgba(230, 57, 38, 0.35)', // Vermilion focus aura
    },
    typography: {
      fontFamilyBase: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
      fontFamilyMono: "'Space Grotesk', 'JetBrains Mono', monospace",
      fontSizeXs: '0.6875rem',
      fontSizeSm: '0.8125rem',
      fontSizeBase: '1rem',
      fontSizeLg: '1.25rem',
      fontSizeXl: '1.875rem',
      fontSize2xl: '2.85rem',
      fontWeightNormal: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      lineHeightBase: 1.65,
      lineHeightHeading: 1.15,
      letterSpacingBase: '-0.01em',
      letterSpacingHeading: '-0.02em',
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
      sm: '1px',  // Art print crop mark
      md: '2px',  // Matted paper corner
      lg: '4px',  // Mounting board corner
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
      sm: '0 2px 8px rgba(26, 25, 24, 0.05)',
      md: '0 6px 20px rgba(26, 25, 24, 0.07), 0 1px 3px rgba(26, 25, 24, 0.04)',
      lg: '0 16px 36px rgba(26, 25, 24, 0.1), 0 2px 6px rgba(26, 25, 24, 0.04)',
      glow: '0 0 15px rgba(230, 57, 38, 0.25)',
    },
    motion: {
      durationFast: '150ms',
      durationNormal: '220ms',
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    effects: {
      backdropBlur: 'none',
      transformHover: 'translateY(-2px)',
    },
  },
  components: {
    button: {
      padding: '0.75rem 2rem',
      fontFamily: "'Space Grotesk', 'Inter', sans-serif",
      fontSize: '0.8125rem',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderRadius: '1px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#1a1918',
      background: '#1a1918',
      color: '#ffffff',
      boxShadow: '3px 3px 0px rgba(230, 57, 38, 0.5)',
      transition: 'all 180ms cubic-bezier(0.16, 1, 0.3, 1)',
      hover: {
        background: '#e63926',
        borderColor: '#e63926',
        color: '#ffffff',
        boxShadow: '4px 4px 0px #1a1918',
        transform: 'translateY(-1px)',
      },
      active: {
        transform: 'translate(1px, 1px)',
        boxShadow: '1px 1px 0px #1a1918',
      },
      focusRing: '0 0 0 2px #f8f6f0, 0 0 0 4px #e63926',
    },
    card: {
      padding: '2.25rem 2rem',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#e2ddd4',
      background: '#ffffff',
      color: '#1a1918',
      boxShadow: '0 4px 16px rgba(26, 25, 24, 0.06), 0 1px 2px rgba(26, 25, 24, 0.03)',
      transition: 'all 220ms ease',
      hover: {
        borderColor: '#1a1918',
        boxShadow: '0 12px 30px rgba(26, 25, 24, 0.09), 4px 4px 0px rgba(230, 57, 38, 0.25)',
        transform: 'translateY(-2px)',
      },
    },
    heading: {
      fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: '#1a1918',
    },
    paragraph: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.65,
      color: '#5a5650',
    },
    input: {
      padding: '0.75rem 1rem',
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9375rem',
      borderRadius: '1px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#d4cebe',
      background: '#ffffff',
      color: '#1a1918',
      placeholderColor: '#8a857c',
      focusBorderColor: '#1a1918',
      focusRing: '0 0 0 1px #1a1918, 0 0 0 3px rgba(230, 57, 38, 0.2)',
      transition: 'all 180ms ease',
    },
    badge: {
      padding: '0.25rem 0.75rem',
      fontFamily: "'Space Grotesk', 'Inter', monospace",
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      borderRadius: '1px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#1a1918',
      background: '#f1ede4',
      color: '#1a1918',
      boxShadow: '2px 2px 0px rgba(230, 57, 38, 0.35)',
    },
    section: {
      padding: '4.5rem 2rem',
      background: 'transparent',
      borderColor: '#e2ddd4',
      borderWidth: '1px',
      borderStyle: 'none',
    },
    page: {
      background: '#f8f6f0',
      color: '#1a1918',
      fontFamily: "'Inter', sans-serif",
    },
  },
};

export { mixedMediaSemanticCss } from './rules';
