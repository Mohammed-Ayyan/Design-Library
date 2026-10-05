import { StyleDefinition } from '../../core/types/style-definition';
import { scrapbookSemanticCss } from './rules';

export const scrapbookStyle: StyleDefinition = {
  id: 'scrapbook',
  name: 'Scrapbook',
  description: 'Layered memory book surfaces, washi tape cues, handwritten annotations, clipped ephemera, and tactile paper cards.',
  metadata: {
    version: '1.0.0',
    category: 'Artistic & Organic',
    tags: ['scrapbook', 'collage', 'washi-tape', 'handwritten', 'ephemera', 'paper-texture', 'polaroid'],
  },
  compositionConfig: {
    containerPhilosophy: 'paper-album',
    groupingPhilosophy: 'collected-clippings',
    featurePresentation: 'polaroid-card',
    heroMode: 'album-spread',
    maxWidth: '1200px',
    alignment: 'organic-scatter',
    density: 'comfortable',
    hasStructuralBorders: true,
    hasAsymmetricOffsets: true,
    hasDecorativeFraming: true,
  },
  tokens: {
    colors: {
      background: '#f7f3e8', // Warm album paper
      surface: '#fffef9', // Photo card paper white
      surfaceSubtle: '#fbf6ec', // Aged paper
      textPrimary: '#1c1917', // Carbon black ink
      textSecondary: '#44403c', // Soft graphite ink
      textMuted: '#78716c', // Faded pencil note
      primary: '#1c1917', // Carbon ink primary
      primaryHover: '#b91c1c', // Crimson stamp hover
      primaryText: '#fbf8f1',
      accent: '#b91c1c', // Vintage rubber stamp crimson
      border: '#ded6c4',
      borderStrong: '#8c826e',
      ring: 'rgba(185, 28, 28, 0.3)',
    },
    typography: {
      fontFamilyBase: "'Lora', Georgia, serif",
      fontFamilyHeading: "'Playfair Display', Georgia, serif",
      fontFamilyMono: "'Courier Prime', monospace",
      fontSizeXs: '0.75rem',
      fontSizeSm: '0.875rem',
      fontSizeBase: '1rem',
      fontSizeLg: '1.3rem',
      fontSizeXl: '1.85rem',
      fontSize2xl: '2.6rem',
      fontWeightNormal: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      lineHeightBase: 1.7,
      lineHeightHeading: 1.22,
      letterSpacingBase: '0em',
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
      sm: '2px',
      md: '3px',
      lg: '6px',
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
      sm: '2px 3px 0px rgba(45, 35, 25, 0.25)',
      md: '2px 4px 10px rgba(60, 45, 30, 0.08), 0 1px 3px rgba(60, 45, 30, 0.05)',
      lg: '4px 10px 22px rgba(60, 45, 30, 0.12), 0 2px 6px rgba(60, 45, 30, 0.06)',
      glow: '0 0 12px rgba(254, 240, 138, 0.5)',
    },
    motion: {
      durationFast: '120ms',
      durationNormal: '180ms',
      easing: 'ease',
    },
    effects: {
      backdropBlur: 'none',
      transformHover: 'translateY(-2px)',
    },
  },
  components: {
    button: {
      padding: '0.7rem 1.6rem',
      fontFamily: "'Courier Prime', monospace",
      fontSize: '0.875rem',
      fontWeight: 700,
      borderRadius: '2px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#1c1917',
      background: '#1c1917',
      color: '#fbf8f1',
      boxShadow: '2px 3px 0px rgba(45, 35, 25, 0.25)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      transition: 'all 140ms ease',
      hover: {
        background: '#b91c1c',
        borderColor: '#b91c1c',
        color: '#ffffff',
        transform: 'translateY(-2px) scale(1.02)',
      },
      active: {
        transform: 'translateY(1px) scale(0.98)',
        boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
      },
      focusRing: '0 0 0 2px #f7f3e8, 0 0 0 4px #b91c1c',
    },
    card: {
      padding: '1.6rem',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ded6c4',
      background: '#fffef9',
      color: '#1c1917',
      boxShadow: '2px 4px 10px rgba(60, 45, 30, 0.08), 0 1px 3px rgba(60, 45, 30, 0.05)',
      transition: 'transform 180ms ease, box-shadow 180ms ease',
      hover: {
        borderColor: '#cfc4ae',
        boxShadow: '4px 10px 22px rgba(60, 45, 30, 0.12)',
      },
    },
    input: {
      padding: '0.65rem 0.85rem',
      fontFamily: "'Courier Prime', monospace",
      fontSize: '0.875rem',
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#d6cdb7',
      background: '#fbf8f0',
      color: '#1c1917',
      placeholderColor: '#78716c',
      focusBorderColor: '#b91c1c',
      focusRing: '0 0 0 2px rgba(185, 28, 28, 0.15)',
      transition: 'border-color 150ms ease, box-shadow 150ms ease',
    },
    heading: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 700,
      color: '#1c1917',
      letterSpacing: '-0.015em',
      lineHeight: 1.22,
    },
    paragraph: {
      fontFamily: "'Lora', Georgia, serif",
      fontSize: '0.975rem',
      lineHeight: 1.7,
      color: '#44403c',
    },
    badge: {
      padding: '0.25rem 0.95rem',
      fontFamily: "'Caveat', cursive",
      fontSize: '1.25rem',
      fontWeight: 700,
      borderRadius: '2px',
      borderWidth: '1px',
      borderStyle: 'dashed',
      borderColor: 'rgba(185, 28, 28, 0.3)',
      background: '#fef9c3',
      color: '#b91c1c',
    },
    section: {
      padding: '2.5rem 1.5rem',
      background: 'transparent',
      borderColor: 'transparent',
      borderWidth: '0px',
      borderStyle: 'none',
    },
    page: {
      background: '#f7f3e8',
      color: '#1c1917',
      fontFamily: "'Lora', Georgia, serif",
    },
  },
};

export { scrapbookSemanticCss };
