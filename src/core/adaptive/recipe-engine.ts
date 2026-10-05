import { ResolvedRoleContext, AdaptiveRecipeResult } from './types';
import { DesignTokens } from '../types/tokens';
import { StyleEngine } from '../engine';

export class RecipeEngine {
  /**
   * Resolves the adaptive recipe for a specific role and design language.
   */
  public static resolveRecipe(
    styleId: string,
    roleCtx: ResolvedRoleContext,
    engine: StyleEngine
  ): AdaptiveRecipeResult {
    const styleDef = engine.getStyle(styleId) || engine.getRegistry().getBaseStyle();
    const tokens = styleDef.tokens;

    let res: AdaptiveRecipeResult;
    switch (styleId) {
      case 'brutalism':
        res = RecipeEngine.resolveBrutalism(roleCtx, tokens);
        break;
      case 'glassmorphism':
        res = RecipeEngine.resolveGlassmorphism(roleCtx, tokens);
        break;
      case 'minimalism':
        res = RecipeEngine.resolveMinimalism(roleCtx, tokens);
        break;
      case 'swiss-design':
        res = RecipeEngine.resolveSwissDesign(roleCtx, tokens);
        break;
      case 'cyberpunk':
        res = RecipeEngine.resolveCyberpunk(roleCtx, tokens);
        break;
      case 'wabi-sabi':
        res = RecipeEngine.resolveWabiSabi(roleCtx, tokens);
        break;
      default:
        res = RecipeEngine.resolveBase(roleCtx, tokens);
        break;
    }

    if (!res.composition) res.composition = roleCtx.composition;
    if (!res.density) res.density = roleCtx.density;
    if (!res.decision) res.decision = roleCtx.decision;
    return res;
  }

  // ==========================================
  // BRUTALISM ADAPTIVE RECIPES
  // ==========================================
  private static resolveBrutalism(ctx: ResolvedRoleContext, _tokens: DesignTokens): AdaptiveRecipeResult {
    const v = ctx.variantIndex;
    const isHero = ctx.role === 'hero';
    const isCard = ctx.role === 'card' || ctx.role === 'feature-item';
    const isPricing = ctx.role === 'pricing-card';
    const isBtn = ctx.role === 'cta-button' || ctx.role === 'button' || ctx.role === 'card-action' || ctx.role === 'pricing-action';

    if (isHero) {
      return {
        role: ctx.role,
        recipeName: 'Brutalist Hero / Asymmetric Editorial',
        styleId: 'brutalism',
        description: 'Raw high-contrast layout with thick 3px black borders, heavy uppercase typography, and electric acid yellow focus.',
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '3.5rem 2.5rem',
          backgroundColor: '#f4f3ed',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: '#000000',
          boxShadow: '6px 6px 0px #000000',
        },
        headingStyles: {
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          fontSize: '2.5rem',
          lineHeight: 1.05,
          color: '#000000',
        },
        bodyStyles: {
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.0625rem',
          color: '#111111',
          lineHeight: 1.5,
        },
        buttonStyles: {
          padding: '0.875rem 1.75rem',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          backgroundColor: '#ffe600',
          color: '#000000',
          border: '3px solid #000000',
          boxShadow: '5px 5px 0px #000000',
          cursor: 'pointer',
        },
        cssVariables: {
          '--ds-role': 'hero',
          '--ds-recipe': 'brutalist-hero',
        },
      };
    }

    if (isPricing) {
      const isHighlighted = ctx.modifiers.includes('highlighted-tier') || v === 1;
      return {
        role: ctx.role,
        recipeName: isHighlighted ? 'Brutalist Highlighted Pricing Tier' : 'Brutalist Standard Pricing Tier',
        styleId: 'brutalism',
        description: isHighlighted
          ? 'Featured acid yellow card with thick 4px border and tactile 6px drop shadow.'
          : 'Monochrome high-contrast pricing card with 3px solid border.',
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '2rem',
          backgroundColor: isHighlighted ? '#ffe600' : '#ffffff',
          color: '#000000',
          borderWidth: isHighlighted ? '4px' : '3px',
          borderStyle: 'solid',
          borderColor: '#000000',
          boxShadow: isHighlighted ? '6px 6px 0px #000000' : '4px 4px 0px #000000',
          transform: isHighlighted ? 'scale(1.02)' : 'none',
        },
        headingStyles: {
          textTransform: 'uppercase',
          fontWeight: 800,
          color: '#000000',
        },
        buttonStyles: {
          backgroundColor: isHighlighted ? '#000000' : '#ffe600',
          color: isHighlighted ? '#ffe600' : '#000000',
          border: '3px solid #000000',
          boxShadow: '3px 3px 0px #000000',
          fontWeight: 800,
          textTransform: 'uppercase',
          width: '100%',
        },
        cssVariables: {
          '--ds-role': 'pricing-card',
        },
      };
    }

    if (isCard) {
      // Deterministic Sibling Variation
      const cardVariants = [
        { name: 'Brutalist Card / Acid Accent', bg: '#ffe600', text: '#000000', shadow: '5px 5px 0px #000000' },
        { name: 'Brutalist Card / Stark White', bg: '#ffffff', text: '#000000', shadow: '5px 5px 0px #000000' },
        { name: 'Brutalist Card / Inverted Black', bg: '#000000', text: '#ffffff', shadow: '5px 5px 0px #ffe600' },
      ];
      const selectedVar = cardVariants[v] || cardVariants[0];

      return {
        role: ctx.role,
        recipeName: selectedVar.name,
        styleId: 'brutalism',
        description: `Deterministic variant ${v} applying controlled palette shift without losing brutalist geometry.`,
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '1.75rem',
          backgroundColor: selectedVar.bg,
          color: selectedVar.text,
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: '#000000',
          boxShadow: selectedVar.shadow,
        },
        headingStyles: {
          textTransform: 'uppercase',
          fontWeight: 800,
          color: selectedVar.text,
        },
        bodyStyles: {
          color: selectedVar.bg === '#000000' ? '#e2e8f0' : '#111111',
        },
        buttonStyles: {
          border: '3px solid #000000',
          backgroundColor: selectedVar.bg === '#ffe600' ? '#ffffff' : '#ffe600',
          color: '#000000',
          boxShadow: '3px 3px 0px #000000',
          fontWeight: 800,
          textTransform: 'uppercase',
        },
        cssVariables: {
          '--ds-role': 'card',
          '--ds-variant': String(v),
        },
      };
    }

    if (isBtn) {
      const isCta = ctx.role === 'cta-button' || ctx.modifiers.includes('prominent-cta');
      const isNav = ctx.role === 'nav-action';

      return {
        role: ctx.role,
        recipeName: isCta ? 'Brutalist Heavy Hero CTA' : isNav ? 'Brutalist Compact Nav Action' : 'Brutalist Standard Button',
        styleId: 'brutalism',
        description: isCta
          ? 'High visual weight, oversized padding, thick 3px black border, and 5px offset shadow.'
          : 'Compact brutalist button with crisp offset.',
        modifiers: ctx.modifiers,
        containerStyles: {},
        buttonStyles: {
          padding: isCta ? '0.875rem 1.75rem' : isNav ? '0.35rem 0.75rem' : '0.65rem 1.25rem',
          fontSize: isCta ? '1rem' : isNav ? '0.75rem' : '0.875rem',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          backgroundColor: isCta ? '#ffe600' : '#ffffff',
          color: '#000000',
          border: '3px solid #000000',
          boxShadow: isCta ? '5px 5px 0px #000000' : '3px 3px 0px #000000',
          cursor: 'pointer',
        },
        cssVariables: {
          '--ds-role': ctx.role,
        },
      };
    }

    if (ctx.role === 'form') {
      return {
        role: ctx.role,
        recipeName: 'Brutalist Form / Monolithic',
        styleId: 'brutalism',
        description: 'Hard-bordered input container with bold uppercase labels and tactile submit button.',
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '2.5rem',
          backgroundColor: '#ffffff',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: '#000000',
          boxShadow: '6px 6px 0px #000000',
        },
        buttonStyles: {
          padding: '0.875rem 1.75rem',
          backgroundColor: '#ffe600',
          color: '#000000',
          border: '3px solid #000000',
          boxShadow: '4px 4px 0px #000000',
          fontWeight: 800,
          textTransform: 'uppercase',
        },
        cssVariables: {
          '--ds-role': 'form',
        },
      };
    }

    if (ctx.role === 'navigation') {
      return {
        role: ctx.role,
        recipeName: 'Brutalist Navigation Strip',
        styleId: 'brutalism',
        description: 'Monochrome navigation strip with stark black bottom border and uppercase links.',
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '1rem 2rem',
          backgroundColor: '#ffffff',
          borderBottom: '3px solid #000000',
        },
        cssVariables: {
          '--ds-role': 'navigation',
        },
      };
    }

    if (ctx.role === 'article') {
      return {
        role: ctx.role,
        recipeName: 'Brutalist Editorial Pamphlet',
        styleId: 'brutalism',
        description: 'Stark black borders, heavy blockquote with solid black callout stripe.',
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '2.5rem',
          backgroundColor: '#ffffff',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: '#000000',
          boxShadow: '6px 6px 0px #000000',
        },
        cssVariables: {
          '--ds-role': 'article',
        },
      };
    }

    // Default / Conservative Brutalist Container
    return {
      role: ctx.role,
      recipeName: 'Brutalist Conservative Container',
      styleId: 'brutalism',
      description: 'Conservative brutalist framing preserving existing layout with crisp 2px border.',
      modifiers: ctx.modifiers,
      containerStyles: {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        color: '#000000',
        boxShadow: '3px 3px 0px #000000',
      },
      cssVariables: {
        '--ds-role': ctx.role,
      },
    };
  }

  // ==========================================
  // GLASSMORPHISM ADAPTIVE RECIPES
  // ==========================================
  private static resolveGlassmorphism(ctx: ResolvedRoleContext, _tokens: DesignTokens): AdaptiveRecipeResult {
    const v = ctx.variantIndex;
    const isHero = ctx.role === 'hero';
    const isCard = ctx.role === 'card' || ctx.role === 'feature-item';
    const isPricing = ctx.role === 'pricing-card';
    const isBtn = ctx.role === 'cta-button' || ctx.role === 'button' || ctx.role === 'card-action' || ctx.role === 'pricing-action';

    if (isHero) {
      return {
        role: ctx.role,
        recipeName: 'Glassmorphic Radiant Hero',
        styleId: 'glassmorphism',
        description: 'Atmospheric hero with subtle gradient mesh glow, luminous text, and cyan neon aura button.',
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '4rem 2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.18) 0%, transparent 60%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        },
        headingStyles: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          letterSpacing: '-0.03em',
          fontSize: '2.5rem',
          color: '#ffffff',
          textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
        },
        bodyStyles: {
          color: 'rgba(255, 255, 255, 0.75)',
          fontSize: '1.05rem',
          lineHeight: 1.6,
        },
        buttonStyles: {
          padding: '0.875rem 1.75rem',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(56, 189, 248, 0.9))',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow: '0 0 25px rgba(56, 189, 248, 0.45)',
          fontWeight: 600,
          cursor: 'pointer',
        },
        cssVariables: {
          '--ds-role': 'hero',
          '--ds-recipe': 'glass-hero',
        },
      };
    }

    if (isPricing) {
      const isHighlighted = ctx.modifiers.includes('highlighted-tier') || v === 1;
      return {
        role: ctx.role,
        recipeName: isHighlighted ? 'Glassmorphic Luminous Tier' : 'Glassmorphic Frosted Tier',
        styleId: 'glassmorphism',
        description: isHighlighted
          ? 'Featured tier with cyan glow border, deeper 28px blur, and gradient button.'
          : 'Standard translucent frosted slab with 16px blur.',
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '2rem',
          backgroundColor: isHighlighted ? 'rgba(99, 102, 241, 0.12)' : 'rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: isHighlighted ? 'rgba(56, 189, 248, 0.5)' : 'rgba(255, 255, 255, 0.18)',
          boxShadow: isHighlighted ? '0 12px 40px rgba(99, 102, 241, 0.35), 0 0 20px rgba(56, 189, 248, 0.2)' : '0 8px 32px rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          transform: isHighlighted ? 'scale(1.02)' : 'none',
        },
        headingStyles: {
          color: '#ffffff',
        },
        buttonStyles: {
          width: '100%',
          borderRadius: '9999px',
          background: isHighlighted
            ? 'linear-gradient(135deg, #6366f1, #38bdf8)'
            : 'rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: isHighlighted ? '0 0 20px rgba(56, 189, 248, 0.4)' : 'none',
        },
        cssVariables: {
          '--ds-role': 'pricing-card',
        },
      };
    }

    if (isCard) {
      // Deterministic Sibling Variation
      const glassVariants = [
        { name: 'Glassmorphic Card / Frosted Standard', bg: 'rgba(255, 255, 255, 0.05)', border: 'rgba(255, 255, 255, 0.18)', blur: '20px' },
        { name: 'Glassmorphic Card / Indigo Glow Wash', bg: 'rgba(99, 102, 241, 0.09)', border: 'rgba(56, 189, 248, 0.35)', blur: '28px' },
        { name: 'Glassmorphic Card / Deep Specular', bg: 'rgba(255, 255, 255, 0.03)', border: 'rgba(255, 255, 255, 0.12)', blur: '16px' },
      ];
      const selectedVar = glassVariants[v] || glassVariants[0];

      return {
        role: ctx.role,
        recipeName: selectedVar.name,
        styleId: 'glassmorphism',
        description: `Deterministic variant ${v} varying optical density and blur depth across sibling cards.`,
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '1.75rem',
          borderRadius: '20px',
          backgroundColor: selectedVar.bg,
          borderColor: selectedVar.border,
          borderWidth: '1px',
          borderStyle: 'solid',
          backdropFilter: `blur(${selectedVar.blur})`,
          WebkitBackdropFilter: `blur(${selectedVar.blur})`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
        },
        headingStyles: {
          color: '#ffffff',
        },
        bodyStyles: {
          color: 'rgba(255, 255, 255, 0.72)',
        },
        buttonStyles: {
          borderRadius: '9999px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.25)',
        },
        cssVariables: {
          '--ds-role': 'card',
          '--ds-variant': String(v),
        },
      };
    }

    if (isBtn) {
      const isCta = ctx.role === 'cta-button' || ctx.modifiers.includes('prominent-cta');
      const isNav = ctx.role === 'nav-action';

      return {
        role: ctx.role,
        recipeName: isCta ? 'Glassmorphic Radiant Aura CTA' : isNav ? 'Glassmorphic Frosted Nav Pill' : 'Glassmorphic Translucent Button',
        styleId: 'glassmorphism',
        description: isCta ? 'Luminescent indigo/cyan pill with vibrant glow aura.' : 'Frosted translucent pill.',
        modifiers: ctx.modifiers,
        containerStyles: {},
        buttonStyles: {
          padding: isCta ? '0.875rem 1.75rem' : isNav ? '0.35rem 0.875rem' : '0.625rem 1.375rem',
          fontSize: isCta ? '1rem' : isNav ? '0.75rem' : '0.875rem',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          borderRadius: '9999px',
          background: isCta
            ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(56, 189, 248, 0.85))'
            : 'rgba(255, 255, 255, 0.08)',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: isCta ? '0 0 25px rgba(56, 189, 248, 0.45)' : 'none',
          cursor: 'pointer',
        },
        cssVariables: {
          '--ds-role': ctx.role,
        },
      };
    }

    // Default Glassmorphic Container
    return {
      role: ctx.role,
      recipeName: 'Glassmorphic Translucent Slab',
      styleId: 'glassmorphism',
      description: 'Frosted container slab with 16px blur and soft translucent border.',
      modifiers: ctx.modifiers,
      containerStyles: {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '16px',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      },
      cssVariables: {
        '--ds-role': ctx.role,
      },
    };
  }

  // ==========================================
  // MINIMALISM ADAPTIVE RECIPES
  // ==========================================
  private static resolveMinimalism(ctx: ResolvedRoleContext, _tokens: DesignTokens): AdaptiveRecipeResult {
    const v = ctx.variantIndex;
    const isHero = ctx.role === 'hero';
    const isCard = ctx.role === 'card' || ctx.role === 'feature-item';
    const isPricing = ctx.role === 'pricing-card';
    const isBtn = ctx.role === 'cta-button' || ctx.role === 'button' || ctx.role === 'card-action' || ctx.role === 'pricing-action';

    if (isHero) {
      return {
        role: ctx.role,
        recipeName: 'Minimalist Expansive Hero',
        styleId: 'minimalism',
        description: 'Vast whitespace margins, restrained font weight (400/500), delicate letter-spacing, and quiet ink CTA.',
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '5rem 2rem',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #f4f4f5',
          textAlign: 'center',
        },
        headingStyles: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          letterSpacing: '-0.04em',
          fontSize: '2.5rem',
          lineHeight: 1.15,
          color: '#18181b',
        },
        bodyStyles: {
          color: '#71717a',
          fontSize: '1rem',
          lineHeight: 1.7,
        },
        buttonStyles: {
          padding: '0.75rem 1.625rem',
          borderRadius: '5px',
          backgroundColor: '#18181b',
          color: '#ffffff',
          border: '1px solid #18181b',
          fontWeight: 400,
          cursor: 'pointer',
        },
        cssVariables: {
          '--ds-role': 'hero',
          '--ds-recipe': 'minimalist-hero',
        },
      };
    }

    if (isPricing) {
      const isHighlighted = ctx.modifiers.includes('highlighted-tier') || v === 1;
      return {
        role: ctx.role,
        recipeName: isHighlighted ? 'Minimalist Focus Tier' : 'Minimalist Restrained Tier',
        styleId: 'minimalism',
        description: isHighlighted
          ? 'Quiet ink border (1.5px) and subtle slate background.'
          : 'Hairline 1px border with generous inner spacing.',
        modifiers: ctx.modifiers,
        containerStyles: {
          padding: '2.25rem',
          backgroundColor: isHighlighted ? '#fafafa' : '#ffffff',
          borderRadius: '6px',
          borderWidth: isHighlighted ? '1.5px' : '1px',
          borderStyle: 'solid',
          borderColor: isHighlighted ? '#18181b' : '#e4e4e7',
          boxShadow: isHighlighted ? '0 2px 8px rgba(0, 0, 0, 0.04)' : 'none',
        },
        headingStyles: {
          fontWeight: 600,
          color: '#18181b',
        },
        buttonStyles: {
          width: '100%',
          borderRadius: '4px',
          backgroundColor: isHighlighted ? '#18181b' : '#ffffff',
          color: isHighlighted ? '#ffffff' : '#18181b',
          border: '1px solid #18181b',
          fontWeight: 400,
        },
        cssVariables: {
          '--ds-role': 'pricing-card',
        },
      };
    }

    if (isCard) {
      // Deterministic Sibling Variation
      const minimalVariants = [
        { name: 'Minimalist Card / Hairline Inset', bg: '#ffffff', border: '#e4e4e7', radius: '6px' },
        { name: 'Minimalist Card / Subtle Zinc Tint', bg: '#f4f4f5', border: 'transparent', radius: '6px' },
        { name: 'Minimalist Card / Editorial Borderless', bg: '#ffffff', border: '#e4e4e7', radius: '0px' },
      ];
      const selectedVar = minimalVariants[v] || minimalVariants[0];

      const isBorderless =
        ctx.role === 'feature-item' ||
        ctx.decision?.containerTreatment === 'borderless' ||
        ctx.decision?.itemPresentation === 'borderless-editorial';

      return {
        role: ctx.role,
        recipeName: isBorderless ? 'Minimalist Borderless Editorial Item' : selectedVar.name,
        styleId: 'minimalism',
        description: isBorderless
          ? 'Pure borderless typographic item with subtle hairline divider.'
          : `Deterministic variant ${v} establishing subtle hierarchy without heavy visual clutter.`,
        modifiers: ctx.modifiers,
        containerStyles: isBorderless
          ? {
              padding: '1.5rem 0 0',
              borderRadius: '0px',
              backgroundColor: 'transparent',
              borderTop: '1px solid #e4e4e7',
              borderBottom: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              boxShadow: 'none',
            }
          : {
              padding: '1.75rem',
              borderRadius: selectedVar.radius,
              backgroundColor: selectedVar.bg,
              borderColor: selectedVar.border,
              borderWidth: selectedVar.border === 'transparent' ? '0px' : '1px',
              borderStyle: 'solid',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
            },
        headingStyles: {
          fontWeight: 500,
          letterSpacing: '-0.03em',
          color: '#18181b',
        },
        bodyStyles: {
          color: '#71717a',
          lineHeight: 1.65,
        },
        buttonStyles: {
          borderRadius: '4px',
          backgroundColor: '#ffffff',
          color: '#18181b',
          border: '1px solid #e4e4e7',
        },
        cssVariables: {
          '--ds-role': 'card',
          '--ds-variant': String(v),
        },
      };
    }

    if (isBtn) {
      const isCta = ctx.role === 'cta-button' || ctx.modifiers.includes('prominent-cta');
      const isNav = ctx.role === 'nav-action';

      return {
        role: ctx.role,
        recipeName: isCta ? 'Minimalist Ink Hero CTA' : isNav ? 'Minimalist Quiet Nav Action' : 'Minimalist Standard Button',
        styleId: 'minimalism',
        description: isCta ? 'Deep ink black with subtle 5px radius.' : 'Quiet text button with hairline boundary.',
        modifiers: ctx.modifiers,
        containerStyles: {},
        buttonStyles: {
          padding: isCta ? '0.75rem 1.625rem' : isNav ? '0.35rem 0.75rem' : '0.5rem 1.125rem',
          fontSize: isCta ? '0.9375rem' : isNav ? '0.75rem' : '0.8125rem',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          borderRadius: '4px',
          backgroundColor: isCta ? '#18181b' : isNav ? 'transparent' : '#ffffff',
          color: isCta ? '#ffffff' : '#18181b',
          border: isNav ? 'none' : '1px solid #18181b',
          cursor: 'pointer',
        },
        cssVariables: {
          '--ds-role': ctx.role,
        },
      };
    }

    // Default Minimalist Container
    const isDefaultBorderless = ctx.decision?.containerTreatment === 'borderless';
    return {
      role: ctx.role,
      recipeName: isDefaultBorderless ? 'Minimalist Borderless Flow' : 'Minimalist Clean Box',
      styleId: 'minimalism',
      description: isDefaultBorderless ? 'Pure negative space without box containers.' : 'Generous whitespace with subtle hairline boundaries.',
      modifiers: ctx.modifiers,
      containerStyles: isDefaultBorderless
        ? {
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            padding: '1.5rem 0',
          }
        : {
            backgroundColor: '#ffffff',
            borderColor: '#e4e4e7',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '6px',
            padding: '1.5rem',
          },
      cssVariables: {
        '--ds-role': ctx.role,
      },
    };
  }

  // ==========================================
  // SWISS DESIGN ADAPTIVE RECIPES
  // ==========================================
  private static resolveSwissDesign(ctx: ResolvedRoleContext, _tokens: DesignTokens): AdaptiveRecipeResult {
    const isHero = ctx.role === 'hero';
    const isPricing = ctx.role === 'pricing-card';
    const isCard = ctx.role === 'card' || ctx.role === 'feature-item';

    if (isHero) {
      return {
        role: ctx.role,
        recipeName: 'Swiss Mathematical Grid Poster',
        styleId: 'swiss-design',
        description: 'Disciplined asymmetrical typography, stark jet black contrasts, objective hierarchy, and iconic Swiss red focus.',
        modifiers: ctx.modifiers,
        composition: ctx.composition,
        density: ctx.density,
        containerStyles: {
          padding: '4rem 2.5rem',
          backgroundColor: '#ffffff',
          borderLeft: '4px solid #ef4444',
          borderBottom: '1px solid #000000',
        },
        headingStyles: {
          fontFamily: "'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif",
          fontWeight: 900,
          letterSpacing: '-0.04em',
          fontSize: '2.75rem',
          lineHeight: 1.05,
          color: '#000000',
        },
        bodyStyles: {
          fontFamily: "'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif",
          fontSize: '1rem',
          color: '#334155',
          lineHeight: 1.5,
        },
        buttonStyles: {
          padding: '0.75rem 1.75rem',
          fontFamily: "'Helvetica Neue', Helvetica, 'Inter', sans-serif",
          fontWeight: 700,
          backgroundColor: '#ef4444',
          color: '#ffffff',
          border: 'none',
          borderRadius: '0px',
          cursor: 'pointer',
        },
        cssVariables: {
          '--ds-role': 'hero',
        },
      };
    }

    if (isPricing) {
      const isHighlighted = ctx.modifiers.includes('highlighted-tier') || ctx.variantIndex === 1;
      return {
        role: ctx.role,
        recipeName: isHighlighted ? 'Swiss High-Contrast Ledger Tier' : 'Swiss Standard Ledger Tier',
        styleId: 'swiss-design',
        description: 'Structured mathematical matrix with disciplined hairline alignments.',
        modifiers: ctx.modifiers,
        composition: ctx.composition,
        density: ctx.density,
        containerStyles: {
          padding: '2rem',
          backgroundColor: '#ffffff',
          borderTop: isHighlighted ? '4px solid #ef4444' : '1px solid #000000',
          borderRight: '1px solid #000000',
          borderBottom: '1px solid #000000',
          borderLeft: '1px solid #000000',
        },
        headingStyles: {
          fontWeight: 900,
          color: '#000000',
        },
        buttonStyles: {
          backgroundColor: isHighlighted ? '#ef4444' : '#000000',
          color: '#ffffff',
          borderRadius: '0px',
          fontWeight: 700,
          width: '100%',
        },
        cssVariables: {
          '--ds-role': 'pricing-card',
        },
      };
    }

    if (isCard) {
      return {
        role: ctx.role,
        recipeName: 'Swiss International Typographic Matrix',
        styleId: 'swiss-design',
        description: 'Objective modular item with hairline coordinate divider.',
        modifiers: ctx.modifiers,
        composition: ctx.composition,
        density: ctx.density,
        containerStyles: {
          padding: '1.75rem',
          backgroundColor: '#ffffff',
          border: '1px solid #000000',
          borderRadius: '0px',
        },
        headingStyles: {
          fontWeight: 900,
          letterSpacing: '-0.03em',
        },
        bodyStyles: {
          color: '#334155',
        },
        cssVariables: {
          '--ds-role': 'card',
        },
      };
    }

    return {
      role: ctx.role,
      recipeName: `Swiss Generic / ${ctx.role}`,
      styleId: 'swiss-design',
      description: 'Objective mathematical baseline.',
      modifiers: ctx.modifiers,
      composition: ctx.composition,
      density: ctx.density,
      containerStyles: {
        backgroundColor: '#ffffff',
        border: '1px solid #000000',
        borderRadius: '0px',
        padding: '1.5rem',
      },
      cssVariables: {
        '--ds-role': ctx.role,
      },
    };
  }

  // ==========================================
  // CYBERPUNK ADAPTIVE RECIPES
  // ==========================================
  private static resolveCyberpunk(ctx: ResolvedRoleContext, _tokens: DesignTokens): AdaptiveRecipeResult {
    const isHero = ctx.role === 'hero';
    const isPricing = ctx.role === 'pricing-card';

    if (isHero) {
      return {
        role: ctx.role,
        recipeName: 'Cyberpunk HUD Telemetry Unit',
        styleId: 'cyberpunk',
        description: 'High-tech terminal void with neon cyan glow, chamfered angles, and laser yellow CTA.',
        modifiers: ctx.modifiers,
        composition: ctx.composition,
        density: ctx.density,
        containerStyles: {
          padding: '4rem 2.5rem',
          backgroundColor: '#07090e',
          border: '2px solid #00f0ff',
          boxShadow: '0 0 25px rgba(0, 240, 255, 0.4)',
        },
        headingStyles: {
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 900,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#00f0ff',
        },
        bodyStyles: {
          fontFamily: "'JetBrains Mono', monospace",
          color: '#e2e8f0',
        },
        buttonStyles: {
          padding: '0.85rem 2rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 800,
          textTransform: 'uppercase',
          backgroundColor: '#ffe600',
          color: '#000000',
          border: '2px solid #00f0ff',
          boxShadow: '0 0 15px rgba(255, 230, 0, 0.5)',
          cursor: 'pointer',
        },
        cssVariables: {
          '--ds-role': 'hero',
        },
      };
    }

    if (isPricing) {
      const isHighlighted = ctx.modifiers.includes('highlighted-tier') || ctx.variantIndex === 1;
      return {
        role: ctx.role,
        recipeName: isHighlighted ? 'Cyberpunk High-Voltage Cyber Rig' : 'Cyberpunk Standard Rig',
        styleId: 'cyberpunk',
        description: 'Luminescent cyber terminal with telemetry status overlays.',
        modifiers: ctx.modifiers,
        composition: ctx.composition,
        density: ctx.density,
        containerStyles: {
          padding: '2rem',
          backgroundColor: '#0e111a',
          border: isHighlighted ? '2px solid #ff0055' : '2px solid #00f0ff',
          boxShadow: isHighlighted ? '0 0 35px rgba(255, 0, 85, 0.45)' : '0 0 20px rgba(0, 240, 255, 0.25)',
        },
        headingStyles: {
          color: isHighlighted ? '#ff0055' : '#00f0ff',
          textTransform: 'uppercase',
        },
        buttonStyles: {
          backgroundColor: isHighlighted ? '#ff0055' : '#00f0ff',
          color: isHighlighted ? '#ffffff' : '#000000',
          border: 'none',
          fontWeight: 800,
          textTransform: 'uppercase',
          width: '100%',
        },
        cssVariables: {
          '--ds-role': 'pricing-card',
        },
      };
    }

    return {
      role: ctx.role,
      recipeName: `Cyberpunk Node / ${ctx.role}`,
      styleId: 'cyberpunk',
      description: 'High-tech neon terminal node.',
      modifiers: ctx.modifiers,
      composition: ctx.composition,
      density: ctx.density,
      containerStyles: {
        backgroundColor: '#0e111a',
        border: '2px solid #00f0ff',
        boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
        padding: '1.75rem',
      },
      headingStyles: {
        color: '#00f0ff',
      },
      bodyStyles: {
        color: '#e2e8f0',
      },
      cssVariables: {
        '--ds-role': ctx.role,
      },
    };
  }

  // ==========================================
  // WABI-SABI ADAPTIVE RECIPES
  // ==========================================
  private static resolveWabiSabi(ctx: ResolvedRoleContext, _tokens: DesignTokens): AdaptiveRecipeResult {
    const isHero = ctx.role === 'hero';
    const isPricing = ctx.role === 'pricing-card';

    if (isHero) {
      return {
        role: ctx.role,
        recipeName: 'Wabi-Sabi Zen Contemplation',
        styleId: 'wabi-sabi',
        description: 'Tranquil negative space, warm washi paper textures, ceremonial matcha green focus, and serif craft.',
        modifiers: ctx.modifiers,
        composition: ctx.composition,
        density: ctx.density,
        containerStyles: {
          padding: '4.5rem 3rem',
          backgroundColor: '#f7f4ee',
          border: '1px solid #d6cfc4',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(41, 37, 36, 0.04)',
        },
        headingStyles: {
          fontFamily: "'Cormorant Garamond', 'Georgia', 'Noto Serif', serif",
          fontWeight: 600,
          fontSize: '2.75rem',
          color: '#292524',
          lineHeight: 1.2,
        },
        bodyStyles: {
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.0625rem',
          color: '#57534e',
          lineHeight: 1.7,
        },
        buttonStyles: {
          padding: '0.75rem 1.75rem',
          backgroundColor: '#4d7c0f',
          color: '#ffffff',
          border: '1px solid #4d7c0f',
          borderRadius: '8px',
          cursor: 'pointer',
        },
        cssVariables: {
          '--ds-role': 'hero',
        },
      };
    }

    if (isPricing) {
      const isHighlighted = ctx.modifiers.includes('highlighted-tier') || ctx.variantIndex === 1;
      return {
        role: ctx.role,
        recipeName: isHighlighted ? 'Wabi-Sabi Harmony Tier' : 'Wabi-Sabi Natural Tier',
        styleId: 'wabi-sabi',
        description: 'Mindful organic card with calm ceramic tones.',
        modifiers: ctx.modifiers,
        composition: ctx.composition,
        density: ctx.density,
        containerStyles: {
          padding: '2.25rem',
          backgroundColor: '#faf7f2',
          border: isHighlighted ? '1px solid #78716c' : '1px solid #d6cfc4',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(41, 37, 36, 0.04)',
        },
        headingStyles: {
          fontFamily: "'Cormorant Garamond', serif",
          color: '#292524',
        },
        buttonStyles: {
          backgroundColor: isHighlighted ? '#4d7c0f' : '#ede8df',
          color: isHighlighted ? '#ffffff' : '#292524',
          border: '1px solid #d6cfc4',
          borderRadius: '8px',
          width: '100%',
        },
        cssVariables: {
          '--ds-role': 'pricing-card',
        },
      };
    }

    const isWabiBorderless =
      ctx.decision?.containerTreatment === 'borderless' ||
      ctx.decision?.itemPresentation === 'borderless-editorial';

    return {
      role: ctx.role,
      recipeName: isWabiBorderless
        ? `Wabi-Sabi Tranquil Space / ${ctx.role}`
        : `Wabi-Sabi Organic Element / ${ctx.role}`,
      styleId: 'wabi-sabi',
      description: isWabiBorderless
        ? 'Mindful organic asymmetry and unhurried negative space.'
        : 'Mindful organic stoneware container.',
      modifiers: ctx.modifiers,
      composition: ctx.composition,
      density: ctx.density,
      containerStyles: isWabiBorderless
        ? {
            backgroundColor: 'transparent',
            border: 'none',
            borderTop: ctx.role === 'feature-item' ? '1px solid #d6cfc4' : 'none',
            borderRadius: '0px',
            padding: ctx.role === 'feature-item' ? '1.5rem 0 0' : '1rem 0',
            boxShadow: 'none',
          }
        : {
            backgroundColor: '#faf7f2',
            border: '1px solid #d6cfc4',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 16px rgba(41, 37, 36, 0.03)',
          },
      headingStyles: {
        fontFamily: "'Cormorant Garamond', serif",
        color: '#292524',
      },
      bodyStyles: {
        color: '#57534e',
      },
      cssVariables: {
        '--ds-role': ctx.role,
      },
    };
  }

  // ==========================================
  // BASE / DEFAULT ADAPTIVE RECIPES
  // ==========================================
  private static resolveBase(ctx: ResolvedRoleContext, _tokens: DesignTokens): AdaptiveRecipeResult {
    return {
      role: ctx.role,
      recipeName: `Neutral Base / ${ctx.role}`,
      styleId: 'base',
      description: 'Neutral slate design system defaults.',
      modifiers: ctx.modifiers,
      containerStyles: {
        backgroundColor: '#ffffff',
        borderColor: '#e2e8f0',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '8px',
        padding: '1.5rem',
      },
      headingStyles: {
        color: '#0f172a',
        fontWeight: 600,
      },
      bodyStyles: {
        color: '#475569',
      },
      buttonStyles: {
        backgroundColor: '#2563eb',
        color: '#ffffff',
        borderRadius: '6px',
        padding: '0.5rem 1rem',
      },
      cssVariables: {
        '--ds-role': ctx.role,
      },
    };
  }
}
