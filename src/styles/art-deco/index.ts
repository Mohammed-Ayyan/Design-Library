import { StyleDefinition } from '../../core/types/style-definition';

export const artDecoStyle: StyleDefinition = {
  id: 'art-deco',
  name: 'Art Deco',
  description: '1920s–1930s luxury architecture, geometric symmetry, sunburst motifs, stepped forms, and gleaming metallic gold ornament.',
  metadata: {
    version: '1.0.0',
    category: 'Retro & Heritage',
    tags: ['art-deco', '1920s', 'luxury', 'geometric', 'symmetry', 'gold', 'sunburst', 'stepped', 'chevron', 'jazz-age'],
  },
  tokens: {
    colors: {
      background: '#0e0e11',        // Deep obsidian black lacquer
      surface: '#16161b',           // Polished onyx slab
      surfaceSubtle: '#1e1e24',     // Stepped architectural panel
      textPrimary: '#fbf8f0',       // Warm champagne ivory
      textSecondary: '#d8d2c4',     // Pale champagne gold
      textMuted: '#8c867a',         // Antique brass dust
      primary: '#d4af37',           // Metallic antique gold
      primaryHover: '#e8c85a',      // Luminous polished gold
      primaryText: '#0e0e11',       // High-contrast obsidian knockout
      accent: '#0f382a',            // Deep imperial emerald
      border: '#2e2a22',            // Onyx mortar hairline
      borderStrong: '#d4af37',      // Gleaming gold geometric rule
      ring: 'rgba(212, 175, 55, 0.45)', // Gold sunburst halo
    },
    typography: {
      fontFamilyBase: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Playfair Display', 'Cinzel', Georgia, serif",
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
      letterSpacingBase: '0.01em',
      letterSpacingHeading: '0.14em', // Dramatic Art Deco uppercase letterspacing
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
      sm: '0px',   // Sharp geometric corners
      md: '1px',   // Fine stepped corner
      lg: '2px',   // Architectural rim
      full: '0px', // Strict geometric discipline
    },
    borders: {
      widthThin: '1px',
      widthBase: '1px',
      widthThick: '2px',
      style: 'solid',
    },
    shadows: {
      none: 'none',
      sm: '0 2px 8px rgba(0, 0, 0, 0.7), 0 0 1px rgba(212, 175, 55, 0.3)',
      md: '0 6px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(212, 175, 55, 0.2)',
      lg: '0 16px 36px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.25)',
      glow: '0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.25)',
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
      padding: '0.85rem 2.25rem',
      fontFamily: "'Playfair Display', 'Space Grotesk', serif",
      fontSize: '0.8125rem',
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      borderRadius: '0px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#d4af37',
      background: 'linear-gradient(180deg, #1c1a16 0%, #100f0d 100%)',
      color: '#fbf8f0',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(212, 175, 55, 0.5)',
      transition: 'all 200ms ease',
      hover: {
        background: 'linear-gradient(180deg, #d4af37 0%, #b8972e 100%)',
        borderColor: '#e8c85a',
        color: '#0e0e11',
        boxShadow: '0 0 20px rgba(212, 175, 55, 0.5), 0 4px 15px rgba(0, 0, 0, 0.8)',
        transform: 'translateY(-1px)',
      },
      active: {
        transform: 'translateY(1px)',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.9)',
      },
      focusRing: '0 0 0 2px #0e0e11, 0 0 0 4px #d4af37, 0 0 20px rgba(212, 175, 55, 0.6)',
    },
    card: {
      padding: '2.5rem 2.25rem',
      borderRadius: '0px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#2e2a22',
      background: 'linear-gradient(180deg, #16161b 0%, #101014 100%)',
      color: '#fbf8f0',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(212, 175, 55, 0.15)',
      transition: 'all 220ms ease',
      hover: {
        borderColor: '#d4af37',
        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.3)',
        transform: 'translateY(-2px)',
      },
    },
    heading: {
      fontFamily: "'Playfair Display', 'Cinzel', serif",
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '0.14em',
      color: '#fbf8f0',
    },
    paragraph: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.65,
      color: '#d8d2c4',
    },
    input: {
      padding: '0.8rem 1rem',
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9375rem',
      borderRadius: '0px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#2e2a22',
      background: '#121216',
      color: '#fbf8f0',
      placeholderColor: '#7a7468',
      focusBorderColor: '#d4af37',
      focusRing: '0 0 0 1px #d4af37, 0 0 12px rgba(212, 175, 55, 0.35)',
      transition: 'all 180ms ease',
    },
    badge: {
      padding: '0.25rem 0.85rem',
      fontFamily: "'Playfair Display', serif",
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      borderRadius: '0px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#d4af37',
      background: 'rgba(212, 175, 55, 0.12)',
      color: '#d4af37',
      boxShadow: '0 0 10px rgba(212, 175, 55, 0.25)',
    },
    section: {
      padding: '4.5rem 2.25rem',
      background: 'transparent',
      borderColor: '#2e2a22',
      borderWidth: '1px',
      borderStyle: 'none',
    },
    page: {
      background: '#0e0e11',
      color: '#fbf8f0',
      fontFamily: "'Inter', sans-serif",
    },
  },
};

export { artDecoSemanticCss } from './rules';
