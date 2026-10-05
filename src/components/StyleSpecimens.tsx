import React from 'react';
import { StyleCatalogItem } from '../styles/catalog';
import {
  Sparkles,
  Eye,
  Star,
  Zap,
  Sun,
  Crosshair,
  Droplets,
} from 'lucide-react';

/**
 * Renders an authentic, internet-accurate visual specimen mini-interface
 * for each of the 32 design movements in the Design Style Library.
 */
export const renderStyleSpecimen = (item: StyleCatalogItem): React.ReactNode => {
  switch (item.id) {
    /* 1. ART DECO - 1920s Chrysler / Gatsby Geometric Luxury (Completely Redesigned) */
    case 'art-deco':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#0a0a0e',
            color: '#d4af37',
            padding: '1rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid #d4af37',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
          }}
        >
          {/* Inner concentric gold border */}
          <div
            style={{
              position: 'absolute',
              top: '4px',
              left: '4px',
              right: '4px',
              bottom: '4px',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              pointerEvents: 'none',
            }}
          />

          {/* Stepped Ziggurat Corner Accents */}
          <div style={{ position: 'absolute', top: '8px', left: '8px', width: '12px', height: '12px', borderTop: '2px solid #d4af37', borderLeft: '2px solid #d4af37' }} />
          <div style={{ position: 'absolute', top: '8px', right: '8px', width: '12px', height: '12px', borderTop: '2px solid #d4af37', borderRight: '2px solid #d4af37' }} />
          <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '12px', height: '12px', borderBottom: '2px solid #d4af37', borderLeft: '2px solid #d4af37' }} />
          <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '12px', height: '12px', borderBottom: '2px solid #d4af37', borderRight: '2px solid #d4af37' }} />

          {/* Header Sunburst Motif */}
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <span style={{ height: '1px', width: '28px', backgroundColor: '#d4af37' }} />
              <span style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e5c158', fontWeight: 700 }}>
                PARIS 1925 // METROPOLIS
              </span>
              <span style={{ height: '1px', width: '28px', backgroundColor: '#d4af37' }} />
            </div>

            <div style={{ fontSize: '1.25rem', fontWeight: 800, textAlign: 'center', letterSpacing: '0.08em', color: '#ffffff', textShadow: '0 0 10px rgba(212, 175, 55, 0.6)' }}>
              CHRYSLER MAJESTY
            </div>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', textAlign: 'center', color: '#d4af37', fontStyle: 'italic', fontFamily: "'Inter', sans-serif" }}>
              Geometric stepped ziggurats, sunburst symmetry & polished brass leaf.
            </p>
          </div>

          {/* Symmetrical Chevron Action Button */}
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 1.25rem',
                fontSize: '0.6875rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                backgroundColor: '#d4af37',
                color: '#0a0a0e',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
                textTransform: 'uppercase',
              }}
            >
              <Sparkles size={11} />
              Gilded Coronet
            </span>
          </div>
        </div>
      );

    /* 2. MINIMALISM - Dieter Rams Quiet Order */
    case 'minimalism':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#fafaf9',
            color: '#18181b',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: "'Inter', sans-serif",
            border: '1px solid #e5e5e5',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <span style={{ fontSize: '0.625rem', letterSpacing: '0.15em', color: '#737373', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
                SYSTEM.01 // BRAUN
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#18181b' }} />
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '0.35rem' }}>
              Less, but better.
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#71717a', lineHeight: 1.45 }}>
              Calculated negative space, disciplined hierarchy, and quiet typography.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e5e5e5', paddingTop: '0.6rem' }}>
            <span style={{ fontSize: '0.6875rem', color: '#a1a1aa' }}>01 / 32</span>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.85rem', fontSize: '0.6875rem', fontWeight: 500, backgroundColor: '#18181b', color: '#ffffff', borderRadius: '4px' }}>
              Restraint
            </span>
          </div>
        </div>
      );

    /* 3. BRUTALISM - Raw HTML & Unbuffered Contrast */
    case 'brutalism':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffe600',
            color: '#000000',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '3.5px solid #000000',
            boxSizing: 'border-box',
            fontFamily: "'Space Grotesk', 'Courier New', monospace",
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 900, background: '#000000', color: '#ffe600', padding: '0.1rem 0.45rem', textTransform: 'uppercase' }}>
                RAW_SYSTEM
              </span>
              <span style={{ fontSize: '0.6875rem', fontWeight: 900 }}>4PX OFFSET</span>
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>
              UNFILTERED IMPACT
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 700, lineHeight: 1.35 }}>
              Zero radius, stark monochrome boundaries, and unapologetic contrast.
            </p>
          </div>
          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '0.45rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 900,
                backgroundColor: '#ffffff',
                color: '#000000',
                border: '2.5px solid #000000',
                boxShadow: '4px 4px 0px #000000',
                textTransform: 'uppercase',
              }}
            >
              EXECUTE_RAW
            </span>
          </div>
        </div>
      );

    /* 4. NEO-BRUTALISM - Gumroad / Figma Modern Tactile Pop */
    case 'neo-brutalism':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#a7f3d0',
            color: '#0f172a',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2.5px solid #000000',
            borderRadius: '10px',
            boxSizing: 'border-box',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 800, padding: '0.15rem 0.5rem', borderRadius: '9999px', backgroundColor: '#fef08a', border: '1.5px solid #000000' }}>
                ★ PLAYFUL POP
              </span>
              <span style={{ fontSize: '0.6875rem', fontWeight: 800 }}>8PX RADIUS</span>
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>
              Vibrant Tactility
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 600, color: '#334155', lineHeight: 1.4 }}>
              Pastel saturation, bouncy rounded corners, and crisp black offset shadows.
            </p>
          </div>
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.95rem',
                fontSize: '0.75rem',
                fontWeight: 800,
                backgroundColor: '#f43f5e',
                color: '#ffffff',
                borderRadius: '8px',
                border: '2px solid #000000',
                boxShadow: '3px 3px 0px #000000',
              }}
            >
              <Zap size={12} />
              Bouncy Action
            </span>
          </div>
        </div>
      );

    /* 5. GLASSMORPHISM - Apple Frosted Acrylic & Depth */
    case 'glassmorphism':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #0284c7 100%)',
            padding: '1rem',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glowing Ambient Mesh Orbs */}
          <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '90px', height: '90px', borderRadius: '50%', background: '#38bdf8', filter: 'blur(25px)', opacity: 0.6 }} />
          <div style={{ position: 'absolute', bottom: '-20px', left: '-10px', width: '80px', height: '80px', borderRadius: '50%', background: '#f43f5e', filter: 'blur(25px)', opacity: 0.5 }} />

          {/* Frosted Glass Floating Card */}
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: '#ffffff',
              boxSizing: 'border-box',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '0.625rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '9999px', background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.4)' }}>
                  OPTICAL BLUR
                </span>
                <span style={{ fontSize: '0.6875rem', color: '#7dd3fc', fontWeight: 600 }}>24px Blur</span>
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', textShadow: '0 2px 8px rgba(0,0,0,0.4)', marginBottom: '0.25rem' }}>
                Frosted Luminescence
              </div>
              <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.9, lineHeight: 1.4 }}>
                Subsurface optical scattering, multi-layer depth, and soft light reflection.
              </p>
            </div>
            <div>
              <span style={{ display: 'inline-block', padding: '0.35rem 0.85rem', fontSize: '0.6875rem', fontWeight: 600, backgroundColor: 'rgba(255, 255, 255, 0.25)', color: '#ffffff', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.45)', backdropFilter: 'blur(8px)' }}>
                Glass Action
              </span>
            </div>
          </div>
        </div>
      );

    /* 6. SWISS DESIGN - Josef Müller-Brockmann Grid Clarity */
    case 'swiss-design':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            color: '#111111',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: "'Inter', 'Helvetica Neue', Helvetica, sans-serif",
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{ height: '4px', backgroundColor: '#ef4444', marginBottom: '0.75rem', width: '48px' }} />
            <div style={{ fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ef4444', marginBottom: '0.2rem' }}>
              ZÜRICH 1957 // RASTER
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1.05, marginBottom: '0.35rem' }}>
              DIE NEUE GRAPHIK
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#4b5563', lineHeight: 1.4 }}>
              Asymmetrical mathematical grid, objective typography, and primary vermilion accents.
            </p>
          </div>
          <div style={{ borderTop: '1px solid #111111', paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.05em' }}>HELVETICA 800</span>
            <span style={{ padding: '0.35rem 0.85rem', fontSize: '0.6875rem', fontWeight: 700, backgroundColor: '#ef4444', color: '#ffffff', borderRadius: '0px' }}>
              Grid Action
            </span>
          </div>
        </div>
      );

    /* 7. BAUHAUS - Dessau 1925 Primary Functionalism */
    case 'bauhaus':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f5f2eb',
            color: '#1c1917',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'Space Grotesk', sans-serif",
            boxSizing: 'border-box',
          }}
        >
          {/* Primary Geometry Triad Elements */}
          <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e11d48', opacity: 0.9 }} />
          <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '38px', height: '38px', backgroundColor: '#2563eb' }} />
          <div style={{ position: 'absolute', top: '48%', right: '70px', width: 0, height: 0, borderLeft: '18px solid transparent', borderRight: '18px solid transparent', borderBottom: '32px solid #eab308' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', color: '#e11d48', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
              DESSAU 1925 // WEIMAR
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1c1917', marginBottom: '0.3rem' }}>
              Form Follows Function
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#57534e', maxWidth: '190px', lineHeight: 1.4 }}>
              Primary color triad, geometric purism, and structural typography.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ display: 'inline-block', padding: '0.4rem 1rem', fontSize: '0.6875rem', fontWeight: 800, backgroundColor: '#1c1917', color: '#f5f2eb', borderRadius: '0px' }}>
              Functionalist CTA
            </span>
          </div>
        </div>
      );

    /* 8. CYBERPUNK - High-Tech Low-Life Night City */
    case 'cyberpunk':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#090a0f',
            color: '#00f0ff',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid #00f0ff',
            boxSizing: 'border-box',
            fontFamily: "'JetBrains Mono', monospace",
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glitch Scanline Background */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'rgba(0, 240, 255, 0.4)', boxShadow: '0 0 10px #00f0ff' }} />

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.625rem', fontWeight: 800, background: '#fcee0a', color: '#000000', padding: '0.1rem 0.4rem' }}>
                NET_RUNNER // 2077
              </span>
              <span style={{ fontSize: '0.625rem', color: '#fcee0a', fontWeight: 700 }}>CHAMFER: 45°</span>
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#ffffff', textShadow: '0 0 8px #00f0ff', marginBottom: '0.25rem' }}>
              CYBER_AUGMENTED
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Radioactive cyan glow, hazard yellow telemetry, and angular 45° chamfers.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.625rem', color: '#64748b' }}>STATUS: OVERRIDE</span>
            <span
              style={{
                display: 'inline-block',
                padding: '0.35rem 0.85rem',
                fontSize: '0.6875rem',
                fontWeight: 800,
                backgroundColor: '#00f0ff',
                color: '#090a0f',
                boxShadow: '0 0 12px rgba(0, 240, 255, 0.6)',
                textTransform: 'uppercase',
                clipPath: 'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)',
              }}
            >
              Jack In
            </span>
          </div>
        </div>
      );

    /* 9. WABI-SABI - Organic Zen & Stoneware */
    case 'wabi-sabi':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f7f4ee',
            color: '#292524',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: "'Inter', sans-serif",
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', color: '#78716c', textTransform: 'uppercase' }}>
                WASHI & STONEWARE
              </span>
              <span style={{ fontSize: '0.625rem', padding: '0.15rem 0.45rem', borderRadius: '9999px', background: '#ede8df', color: '#c2410c', fontWeight: 600 }}>
                Matcha & Clay
              </span>
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 500, lineHeight: 1.15, color: '#1c1917', marginBottom: '0.35rem' }}>
              Tranquil Asymmetry
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#57534e', lineHeight: 1.4 }}>
              Natural stoneware texture, kintsugi harmony, and quiet negative space.
            </p>
          </div>
          <div>
            <div style={{ height: '1px', backgroundColor: '#d6cfc4', margin: '0.5rem 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#78716c' }}>
                Natural rhythm
              </span>
              <span style={{ padding: '0.35rem 0.85rem', fontSize: '0.6875rem', fontWeight: 500, backgroundColor: '#4d7c0f', color: '#ffffff', borderRadius: '6px' }}>
                Matcha Action
              </span>
            </div>
          </div>
        </div>
      );

    /* 10. SYNTHWAVE - 1984 Miami Outrun Sunset Grid */
    case 'synthwave':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, #0d0221 0%, #26063b 60%, #4a0e4e 100%)',
            color: '#ff007f',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            fontFamily: "'Space Grotesk', sans-serif",
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Segmented Neon Sun SVG */}
          <div style={{ position: 'absolute', top: '15px', right: '25px', width: '54px', height: '54px', borderRadius: '50%', background: 'linear-gradient(180deg, #ff007f 0%, #ff8800 100%)', boxShadow: '0 0 20px #ff007f' }} />

          {/* Perspective Wireframe Grid Lines */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '35px',
              backgroundImage: 'linear-gradient(rgba(0, 245, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.4) 1px, transparent 1px)',
              backgroundSize: '16px 12px',
              perspective: '150px',
              transform: 'rotateX(45deg)',
              transformOrigin: 'bottom',
              opacity: 0.6,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.2em', color: '#00f5ff', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              OUTRUN // 1984
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', textShadow: '0 0 10px #ff007f, 0 0 20px #ff007f', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
              NEON CRUISE
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#fbcfe8', maxWidth: '210px', lineHeight: 1.35 }}>
              Hot magenta sunsets, cyan chrome lasers, and retro-futuristic horizon grids.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.35rem 0.95rem',
                fontSize: '0.6875rem',
                fontWeight: 800,
                backgroundColor: '#ff007f',
                color: '#ffffff',
                borderRadius: '4px',
                boxShadow: '0 0 15px rgba(255, 0, 127, 0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Engage Turbo
            </span>
          </div>
        </div>
      );

    /* 11. NEUMORPHISM - Monochromatic Soft Extruded Surface */
    case 'neumorphism':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#e2e8f0',
            color: '#334155',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: "'Inter', sans-serif",
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                TACTILE SURFACE
              </span>
              <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Soft Shadows</span>
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#1e293b', marginBottom: '0.3rem' }}>
              Sculpted Extrusion
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', lineHeight: 1.4 }}>
              Zero border strokes, dual directional light, and smooth tactile embossed depths.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {/* Raised Pill */}
            <span
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                backgroundColor: '#e2e8f0',
                color: '#3b82f6',
                borderRadius: '10px',
                boxShadow: '5px 5px 10px #cad3df, -5px -5px 10px #ffffff',
              }}
            >
              Raised Pill
            </span>
            {/* Pressed / Inset Toggle */}
            <span
              style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                backgroundColor: '#e2e8f0',
                color: '#64748b',
                borderRadius: '10px',
                boxShadow: 'inset 3px 3px 6px #cad3df, inset -3px -3px 6px #ffffff',
              }}
            >
              Debossed
            </span>
          </div>
        </div>
      );

    /* 12. CLAYMORPHISM - Fluffy 3D Inflatable Pills */
    case 'claymorphism':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #ddd6fe 0%, #fbcfe8 100%)',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {/* Inner 3D Clay Pillow */}
          <div
            style={{
              backgroundColor: '#8b5cf6',
              borderRadius: '20px',
              padding: '0.85rem 1rem',
              color: '#ffffff',
              boxShadow: 'inset 3px 3px 6px rgba(255,255,255,0.6), inset -4px -4px 8px rgba(0,0,0,0.25), 8px 8px 18px rgba(139, 92, 246, 0.4)',
            }}
          >
            <div style={{ fontSize: '0.625rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85, marginBottom: '0.15rem' }}>
              3D INFLATABLE
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Squishy Volume
            </div>
            <p style={{ margin: '0.25rem 0 0', fontSize: '0.75rem', opacity: 0.9, lineHeight: 1.35 }}>
              Pillowy rounded corners and friendly tactile inner specular bevels.
            </p>
          </div>

          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '0.45rem 1.1rem',
                fontSize: '0.75rem',
                fontWeight: 800,
                backgroundColor: '#ec4899',
                color: '#ffffff',
                borderRadius: '16px',
                boxShadow: 'inset 2px 2px 5px rgba(255,255,255,0.7), inset -3px -3px 6px rgba(0,0,0,0.2), 4px 6px 12px rgba(236, 72, 153, 0.4)',
              }}
            >
              Squishy Button
            </span>
          </div>
        </div>
      );

    /* 13. BENTO GRID - Apple Modular SaaS Dashboard */
    case 'bento-grid':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#090b10',
            color: '#f8fafc',
            padding: '0.85rem',
            boxSizing: 'border-box',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '0.5rem',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {/* Main Hero Bento Tile */}
          <div
            style={{
              gridRow: 'span 2',
              backgroundColor: '#121520',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.85rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase' }}>
                BENTO MODULE
              </span>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '0.2rem', lineHeight: 1.15 }}>
                Structured Modularity
              </div>
            </div>
            <div style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>
              Segmented tiles with independent aspect ratios.
            </div>
          </div>

          {/* Metric Sub-Tile 1 */}
          <div
            style={{
              backgroundColor: '#121520',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '0.65rem 0.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontSize: '0.625rem', color: '#64748b' }}>PERFORMANCE</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10b981' }}>+99.8%</div>
          </div>

          {/* Metric Sub-Tile 2 */}
          <div
            style={{
              backgroundColor: '#121520',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '0.65rem 0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '0.6875rem', fontWeight: 600 }}>Active</span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
          </div>
        </div>
      );

    /* 14. PIXEL ART - 8-Bit Retro Arcade & Chiptune */
    case 'pixel-art':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#0c1020',
            color: '#38bdf8',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '4px solid #38bdf8',
            boxSizing: 'border-box',
            fontFamily: "'Courier New', monospace",
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.625rem', fontWeight: 900, background: '#ef4444', color: '#ffffff', padding: '0.1rem 0.4rem' }}>
                ♥ LVL 99
              </span>
              <span style={{ fontSize: '0.6875rem', color: '#eab308' }}>SCORE: 08420</span>
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#ffffff', marginBottom: '0.25rem' }}>
              16-BIT QUEST
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#93c5fd', lineHeight: 1.35 }}>
              Pixel grid alignment, raster CRT nostalgia, and stepped hard box borders.
            </p>
          </div>

          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '0.35rem 0.85rem',
                fontSize: '0.6875rem',
                fontWeight: 900,
                backgroundColor: '#22c55e',
                color: '#000000',
                border: '2px solid #ffffff',
                textTransform: 'uppercase',
              }}
            >
              [ START GAME ]
            </span>
          </div>
        </div>
      );

    /* 15. CONCEPTUAL SKETCH - Blueprint Drafting Paper */
    case 'conceptual-sketch':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#0f1f38',
            color: '#e0f2fe',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            fontFamily: "'JetBrains Mono', monospace",
            backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.15) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
            border: '1.5px dashed rgba(56, 189, 248, 0.6)',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.625rem', color: '#38bdf8' }}>FIG. 04 — BLUEPRINT</span>
              <span style={{ fontSize: '0.625rem', color: '#94a3b8' }}>SCALE 1:50</span>
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
              Drafting Schematics
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#bae6fd', lineHeight: 1.4 }}>
              Pencil millimeter grid, dimension callouts `|&lt;-- 48.0mm --&gt;|`, and architectural wireframes.
            </p>
          </div>

          <div>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.85rem', fontSize: '0.6875rem', border: '1px solid #38bdf8', color: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.1)' }}>
              Inspect Blueprint
            </span>
          </div>
        </div>
      );

    /* 16. LUXURY TYPOGRAPHY - Haute Couture Editorial */
    case 'luxury-typography':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#060709',
            color: '#f8fafc',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif",
            border: '1px solid #d4af37',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{ fontSize: '0.625rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4af37', textAlign: 'center', marginBottom: '0.4rem' }}>
              H A U T E   C O U T U R E
            </div>
            <div style={{ fontSize: '1.45rem', fontWeight: 400, fontStyle: 'italic', textAlign: 'center', color: '#ffffff', letterSpacing: '0.02em', marginBottom: '0.3rem' }}>
              L&apos;Élégance Pure
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', textAlign: 'center', color: '#a1a1aa', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
              Extreme stroke contrast, hairline serifs, and high-fashion editorial breathing room.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'inline-block', padding: '0.35rem 1.25rem', fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', border: '1px solid #d4af37', color: '#d4af37' }}>
              Discover Collection
            </span>
          </div>
        </div>
      );

    /* 17. EDITORIAL DESIGN - The New Yorker & Kinfolk Magazine */
    case 'editorial-design':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f8f6f0',
            color: '#1a1a1a',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: "'Georgia', serif",
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #dcd7ca', paddingBottom: '0.35rem', marginBottom: '0.5rem', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#736d5f' }}>
              <span>THE ESSAY REVIEW</span>
              <span>VOL. 48</span>
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
              The Typography of Thought
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#44403c', lineHeight: 1.45 }}>
              Oversized literary drop caps, pull quotes with hairline left rules, and sepia reading rhythm.
            </p>
          </div>

          <div style={{ borderTop: '1px solid #dcd7ca', paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', fontStyle: 'italic', color: '#736d5f' }}>By Editorial Staff</span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#1a1a1a' }}>Read Article →</span>
          </div>
        </div>
      );

    /* 18. MAXIMALISM - Baroque Opulence & Rich Layering */
    case 'maximalism':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#4a0e17',
            color: '#fbbf24',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '3px double #fbbf24',
            boxSizing: 'border-box',
            fontFamily: "'Playfair Display', serif",
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15) 10%, transparent 60%)',
          }}
        >
          <div>
            <div style={{ textAlign: 'center', fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fde68a', marginBottom: '0.2rem' }}>
              ROYAL OPULENCE // VISUAL FEAST
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, textAlign: 'center', color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.8)', marginBottom: '0.25rem' }}>
              Sensory Abundance
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', textAlign: 'center', color: '#fef08a', lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>
              Jewel-toned crimson velvet, ornate pattern clashing, and rich decorative density.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'inline-block', padding: '0.4rem 1.25rem', fontSize: '0.6875rem', fontWeight: 800, backgroundColor: '#fbbf24', color: '#4a0e17', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Indulge Fully
            </span>
          </div>
        </div>
      );

    /* 19. SURREALISM - Salvador Dalí Twilight Dreamscape */
    case 'surrealism':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1e112a 0%, #31134a 50%, #1e293b 100%)',
            color: '#e2e8f0',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Floating Eye Motif */}
          <div style={{ position: 'absolute', top: '15px', right: '15px', color: '#fbbf24', opacity: 0.8 }}>
            <Eye size={24} />
          </div>

          <div>
            <div style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: '#c084fc', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              THE ENIGMA OF DREAMS
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, fontStyle: 'italic', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
              Melting Horizons
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#cbd5e1', maxWidth: '210px', lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>
              Uncanny surrealist juxtaposition, warped spatial depth, and twilight mystery.
            </p>
          </div>

          <div>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.95rem', fontSize: '0.6875rem', fontStyle: 'italic', backgroundColor: 'rgba(192, 132, 252, 0.2)', color: '#e9d5ff', borderRadius: '9999px', border: '1px solid #c084fc' }}>
              Awaken Within
            </span>
          </div>
        </div>
      );

    /* 20. NEO-CLASSICAL - Grecian Marble & Golden Proportion */
    case 'neo-classical':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f5f4ef',
            color: '#1c1917',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid #b89748',
            boxSizing: 'border-box',
            fontFamily: "'Cinzel', Georgia, serif",
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #b89748', paddingBottom: '0.35rem', marginBottom: '0.45rem' }}>
              <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: '#b89748' }}>ANNO MDCCL</span>
              <span style={{ fontSize: '0.625rem', color: '#b89748' }}>PARTHENON</span>
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, textAlign: 'center', letterSpacing: '0.04em', color: '#1c1917', marginBottom: '0.25rem' }}>
              Proportional Harmony
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', textAlign: 'center', color: '#57534e', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
              Alabaster marble, fluted column symmetry, and noble imperial laurel wreaths.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'inline-block', padding: '0.35rem 1rem', fontSize: '0.6875rem', fontWeight: 700, backgroundColor: '#b89748', color: '#ffffff', letterSpacing: '0.1em' }}>
              Monumental Order
            </span>
          </div>
        </div>
      );

    /* 21. VICTORIAN - 19th Century Letterpress & Filigree */
    case 'victorian':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#1a1412',
            color: '#d4af37',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid #854d0e',
            boxSizing: 'border-box',
            fontFamily: "'Playfair Display', serif",
            position: 'relative',
          }}
        >
          {/* Filigree Corner Marks */}
          <div style={{ position: 'absolute', top: '4px', left: '6px', fontSize: '12px', color: '#ca8a04' }}>✤</div>
          <div style={{ position: 'absolute', top: '4px', right: '6px', fontSize: '12px', color: '#ca8a04' }}>✤</div>
          <div style={{ position: 'absolute', bottom: '4px', left: '6px', fontSize: '12px', color: '#ca8a04' }}>✤</div>
          <div style={{ position: 'absolute', bottom: '4px', right: '6px', fontSize: '12px', color: '#ca8a04' }}>✤</div>

          <div>
            <div style={{ textAlign: 'center', fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ca8a04', marginBottom: '0.2rem' }}>
              LONDON 1888 // WOODBLOCK
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, textAlign: 'center', color: '#fef08a', letterSpacing: '0.02em', marginBottom: '0.25rem' }}>
              The Royal Gazette
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', textAlign: 'center', color: '#d6d3d1', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
              Engraved mahogany filigree, brass letterpress, and ornamental Victorian flourish.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'inline-block', padding: '0.35rem 1rem', fontSize: '0.6875rem', fontWeight: 700, backgroundColor: '#854d0e', color: '#fef08a', border: '1px solid #ca8a04' }}>
              Royal Warrant
            </span>
          </div>
        </div>
      );

    /* 22. GOTHIC - Cathedral Stone & Pointed Lancet Arches */
    case 'gothic':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#0c0d10',
            color: '#e2e8f0',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid #881337',
            boxSizing: 'border-box',
            fontFamily: "'Cinzel', serif",
            position: 'relative',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: '#f43f5e' }}>SANCTUM // CATHEDRAL</span>
              <span style={{ fontSize: '0.625rem', color: '#94a3b8' }}>✠ POINTED ARCH</span>
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '0.04em', color: '#ffffff', textShadow: '0 0 8px rgba(244, 63, 94, 0.5)', marginBottom: '0.25rem' }}>
              Cathedral Vaults
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
              Medieval lancet stonework, wrought iron tracery, and blood-crimson stained glass.
            </p>
          </div>

          <div>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.95rem', fontSize: '0.6875rem', fontWeight: 700, backgroundColor: '#881337', color: '#ffffff', letterSpacing: '0.1em' }}>
              ✠ Enter Sanctuary
            </span>
          </div>
        </div>
      );

    /* 23. CYBERCORE - Tactical Military HUD Telemetry */
    case 'cybercore':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#040814',
            color: '#38bdf8',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            boxSizing: 'border-box',
            fontFamily: "'JetBrains Mono', monospace",
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Tactical Crosshair Icon */}
          <div style={{ position: 'absolute', top: '15px', right: '15px', color: '#38bdf8', opacity: 0.8 }}>
            <Crosshair size={22} />
          </div>

          <div>
            <div style={{ fontSize: '0.625rem', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              SYS_RADAR // 34.0522°N
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
              Tactical Heads-Up
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Holographic targeting reticles, coordinate readouts, and military HUD brackets.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.625rem', color: '#0284c7' }}>LOCK: ENGAGED</span>
            <span style={{ padding: '0.35rem 0.85rem', fontSize: '0.6875rem', fontWeight: 800, backgroundColor: '#0284c7', color: '#ffffff' }}>
              Acquire Target
            </span>
          </div>
        </div>
      );

    /* 24. Y2K AESTHETIC - Year 2000 Liquid Chrome & Millennium Bubble */
    case 'y2k-aesthetic':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #e0f2fe 0%, #fbcfe8 50%, #c7d2fe 100%)',
            color: '#1e1b4b',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            fontFamily: "'Space Grotesk', sans-serif",
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: '15px', right: '15px', color: '#ec4899' }}>
            <Star size={20} fill="#ec4899" />
          </div>

          <div>
            <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center', marginBottom: '0.3rem' }}>
              <span style={{ fontSize: '0.625rem', fontWeight: 800, background: '#ffffff', color: '#ec4899', padding: '0.15rem 0.5rem', borderRadius: '9999px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                ★ CYBER 2000
              </span>
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: '0.25rem' }}>
              Liquid Chrome
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#475569', lineHeight: 1.4 }}>
              Iridescent pink-cyan reflections, cyber-bubble gloss, and nostalgic Y2K futurism.
            </p>
          </div>

          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '0.4rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 800,
                background: 'linear-gradient(180deg, #ffffff 0%, #e2e8f0 100%)',
                color: '#ec4899',
                borderRadius: '9999px',
                boxShadow: '0 4px 12px rgba(236, 72, 153, 0.35)',
                border: '1.5px solid #ffffff',
              }}
            >
              ★ Millennium Pop
            </span>
          </div>
        </div>
      );

    /* 25. ETHEREAL - Celestial Aurora Mist */
    case 'ethereal':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #311042 0%, #1e1b4b 60%, #0f172a 100%)',
            color: '#f8fafc',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            position: 'relative',
          }}
        >
          {/* Radiant Diffuse Orb */}
          <div style={{ position: 'absolute', top: '10px', right: '10px', width: '70px', height: '70px', borderRadius: '50%', background: '#c084fc', filter: 'blur(30px)', opacity: 0.5 }} />

          <div>
            <div style={{ fontSize: '0.625rem', letterSpacing: '0.25em', color: '#c084fc', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              CELESTIAL AURORA
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.02em', color: '#ffffff', textShadow: '0 0 12px rgba(192, 132, 252, 0.6)', marginBottom: '0.25rem' }}>
              Gossamer Light
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#cbd5e1', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
              Weightless floating cards, luminous celestial halos, and tranquil dream mist.
            </p>
          </div>

          <div>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.95rem', fontSize: '0.6875rem', backgroundColor: 'rgba(192, 132, 252, 0.15)', color: '#f3e8ff', borderRadius: '9999px', border: '1px solid rgba(192, 132, 252, 0.4)' }}>
              Ascend
            </span>
          </div>
        </div>
      );

    /* 26. BOHEMIAN - Sunbaked Terracotta & Organic Sage */
    case 'bohemian':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#fbf7f0',
            color: '#431407',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid #c2410c',
            borderRadius: '16px 16px 4px 4px',
            boxSizing: 'border-box',
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.625rem', letterSpacing: '0.15em', color: '#c2410c', textTransform: 'uppercase' }}>
                EARTHEN TERRACOTTA
              </span>
              <Sun size={14} color="#c2410c" />
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#431407', lineHeight: 1.15, marginBottom: '0.25rem' }}>
              Artisan Warmth
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#78350f', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
              Sunbaked adobe arches, handwoven textures, and grounded earthy ceramics.
            </p>
          </div>

          <div>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.95rem', fontSize: '0.6875rem', fontWeight: 600, backgroundColor: '#c2410c', color: '#ffffff', borderRadius: '9999px' }}>
              Explore Hearth
            </span>
          </div>
        </div>
      );

    /* 27. DARK MODE UI - Linear / Vercel Developer Obsidian */
    case 'dark-mode-ui':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#090a0f',
            color: '#f8fafc',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxSizing: 'border-box',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                <span style={{ fontSize: '0.625rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>PRODUCTION</span>
              </div>
              <span style={{ fontSize: '0.6875rem', color: '#64748b', fontFamily: "'JetBrains Mono', monospace", backgroundColor: '#161922', padding: '1px 5px', borderRadius: '3px' }}>
                ⌘K
              </span>
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: '0.25rem' }}>
              Obsidian Precision
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#8e96a4', lineHeight: 1.4 }}>
              Zero-glare dark palette, titanium surface elevation, and pristine OLED contrast.
            </p>
          </div>

          <div>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.85rem', fontSize: '0.6875rem', fontWeight: 600, backgroundColor: '#1e2433', color: '#f8fafc', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              Open Palette
            </span>
          </div>
        </div>
      );

    /* 28. ANTHROPOMORPHIC - Living Synthetic Bioluminescence */
    case 'anthropomorphic':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#021824',
            color: '#00f5d4',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1.5px solid #00f5d4',
            borderRadius: '24px 8px 24px 8px',
            boxSizing: 'border-box',
            fontFamily: "'Space Grotesk', sans-serif",
            position: 'relative',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00f5d4' }}>
                BIO-SYNTHETIC NODE
              </span>
              <Droplets size={14} color="#00f5d4" />
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', textShadow: '0 0 10px rgba(0, 245, 212, 0.6)', marginBottom: '0.25rem' }}>
              Living Organism
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#99f6e4', lineHeight: 1.4 }}>
              Breathing fluid contours, cellular nodes, and bioluminescent ocean glow.
            </p>
          </div>

          <div>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.95rem', fontSize: '0.6875rem', fontWeight: 700, backgroundColor: '#00f5d4', color: '#021824', borderRadius: '9999px', boxShadow: '0 0 12px rgba(0, 245, 212, 0.5)' }}>
              Pulse Bio-Node
            </span>
          </div>
        </div>
      );

    /* 29. SOLARPUNK - Ecological High-Tech Stained Glass Optimism */
    case 'solarpunk':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0fdf4',
            color: '#14532d',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid #15803d',
            borderRadius: '16px',
            boxSizing: 'border-box',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.625rem', fontWeight: 800, color: '#15803d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                ECOLOGICAL FUTURE
              </span>
              <span style={{ fontSize: '0.625rem', padding: '0.15rem 0.45rem', borderRadius: '9999px', backgroundColor: '#fef08a', color: '#854d0e', fontWeight: 700 }}>
                ☼ 100% Solar
              </span>
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#14532d', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
              Verdant Architecture
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#166534', lineHeight: 1.4 }}>
              Art Nouveau stained glass solar panels, lush emerald canopies, and eco-optimism.
            </p>
          </div>

          <div>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.95rem', fontSize: '0.6875rem', fontWeight: 700, backgroundColor: '#15803d', color: '#ffffff', borderRadius: '8px' }}>
              Harvest Sun
            </span>
          </div>
        </div>
      );

    /* 30. GRAFFITI - Urban Street Art Stencil & Spray */
    case 'graffiti':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#18181b',
            color: '#ec4899',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '3px solid #ec4899',
            boxSizing: 'border-box',
            fontFamily: "'Space Grotesk', sans-serif",
            position: 'relative',
          }}
        >
          {/* Spray Drip Effect */}
          <div style={{ position: 'absolute', top: 0, right: '25px', width: '4px', height: '24px', backgroundColor: '#84cc16' }} />
          <div style={{ position: 'absolute', top: 0, right: '35px', width: '3px', height: '16px', backgroundColor: '#ec4899' }} />

          <div>
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.625rem', fontWeight: 900, background: '#84cc16', color: '#000000', padding: '0.1rem 0.4rem' }}>
                UNDERGROUND
              </span>
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.03em', textShadow: '2px 2px 0px #ec4899', marginBottom: '0.25rem' }}>
              STREET TAG
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#d4d4d8', lineHeight: 1.35 }}>
              Raw asphalt concrete, spray paint drips, stencils, and wildstyle street energy.
            </p>
          </div>

          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '0.4rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 900,
                backgroundColor: '#ec4899',
                color: '#ffffff',
                border: '2px solid #84cc16',
                boxShadow: '3px 3px 0px #84cc16',
                textTransform: 'uppercase',
              }}
            >
              Tag Wall
            </span>
          </div>
        </div>
      );

    /* 31. MIXED MEDIA - Layered Creative Studio Collage */
    case 'mixed-media':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f4f4f5',
            color: '#18181b',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px dashed #71717a',
            boxSizing: 'border-box',
            fontFamily: "'Space Grotesk', sans-serif",
            position: 'relative',
          }}
        >
          {/* Halftone Dot Texture Area */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '80px',
              height: '80px',
              backgroundImage: 'radial-gradient(#a1a1aa 1.5px, transparent 1.5px)',
              backgroundSize: '6px 6px',
              opacity: 0.5,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ fontSize: '0.625rem', fontWeight: 800, background: '#fef08a', color: '#854d0e', padding: '0.15rem 0.5rem', border: '1px solid #ca8a04' }}>
              COLLAGE // EXPERIMENTAL
            </span>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#18181b', letterSpacing: '-0.02em', marginTop: '0.35rem', marginBottom: '0.25rem' }}>
              Analog & Digital
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#52525b', maxWidth: '210px', lineHeight: 1.4 }}>
              Halftone screens, torn paper edges, marker highlights, and art-director collage.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.85rem', fontSize: '0.6875rem', fontWeight: 800, backgroundColor: '#18181b', color: '#ffffff' }}>
              Assemble Collage
            </span>
          </div>
        </div>
      );

    /* 32. SCRAPBOOK - Polaroid Photo, Kraft Paper & Washi Tape */
    case 'scrapbook':
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ede8df',
            color: '#292524',
            padding: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            fontFamily: "'Georgia', serif",
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Washi Tape Strip at Corner */}
          <div
            style={{
              position: 'absolute',
              top: '-6px',
              left: '25px',
              width: '75px',
              height: '20px',
              backgroundColor: '#f43f5e',
              opacity: 0.8,
              transform: 'rotate(-4deg)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.625rem', fontFamily: "'JetBrains Mono', monospace", color: '#78716c' }}>
              ARCHIVE // 1994
            </span>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1c1917', lineHeight: 1.15, marginTop: '0.2rem', marginBottom: '0.25rem' }}>
              Handmade Memoir
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#57534e', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
              Kraft paper textures, polaroid frames, paper clips, and taped memories.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.35rem 0.85rem',
                fontSize: '0.6875rem',
                fontWeight: 600,
                backgroundColor: '#ffffff',
                color: '#1c1917',
                border: '1px solid #d6cfc4',
                boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              Pin to Board
            </span>
          </div>
        </div>
      );

    default:
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: item.previewGradient || '#1e293b',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: '#ffffff',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                {item.category.toUpperCase()}
              </span>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: item.accentColor }}>
                ● Active
              </span>
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>
              {item.name}
            </div>
            <p style={{ margin: '0.25rem 0 0', fontSize: '0.75rem', opacity: 0.9, lineHeight: 1.4 }}>
              {item.tagline}
            </p>
          </div>
          <div>
            <span style={{ display: 'inline-block', padding: '0.35rem 0.85rem', fontSize: '0.6875rem', fontWeight: 700, backgroundColor: '#ffffff', color: '#090d16', borderRadius: '6px' }}>
              {item.name} Action
            </span>
          </div>
        </div>
      );
  }
};
