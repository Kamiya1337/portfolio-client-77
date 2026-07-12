---
name: Digital Catalyst
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e1bdc7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#a98892'
  outline-variant: '#5a3f48'
  surface-tint: '#ffb0cb'
  primary: '#ffb0cb'
  on-primary: '#640037'
  primary-container: '#ff469d'
  on-primary-container: '#58002f'
  inverse-primary: '#b80069'
  secondary: '#ffffff'
  on-secondary: '#283500'
  secondary-container: '#c3f400'
  on-secondary-container: '#556d00'
  tertiary: '#a7c8ff'
  on-tertiary: '#003060'
  tertiary-container: '#6e92ca'
  on-tertiary-container: '#002a54'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9e3'
  primary-fixed-dim: '#ffb0cb'
  on-primary-fixed: '#3e0020'
  on-primary-fixed-variant: '#8d004f'
  secondary-fixed: '#c3f400'
  secondary-fixed-dim: '#abd600'
  on-secondary-fixed: '#161e00'
  on-secondary-fixed-variant: '#3c4d00'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#a7c8ff'
  on-tertiary-fixed: '#001b3b'
  on-tertiary-fixed-variant: '#1f477a'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
  ticker-text:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 44px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  panel-gap: 32px
---

## Brand & Style

This design system is a high-octane blend of Neo-Brutalism and Retro-Futurism. It is designed for creative disruptors, high-end portfolios, and avant-garde editorial platforms that prioritize raw expression over traditional corporate order.

The personality is unapologetically loud and asymmetrical. It utilizes "maximalist" layouts that favor layered panels, cutout photography, and ticker-style typography strips. The emotional response is one of high energy, digital nostalgia, and creative confidence. Elements are often "off-grid," using overlaps and physical metaphors (like ticket stubs and perforated paper) to bridge the gap between early digital aesthetics and modern high-fashion editorial design.

## Colors

The palette is built on extreme contrast to ensure a "vibrating" visual energy. 

- **Deep Black (#000000):** Used as the primary canvas to allow neon accents to pop.
- **Hot Pink (#FF3399):** The primary action color, used for prominent headings, buttons, and layered background blocks.
- **Electric Lime (#CCFF00):** The secondary highlight, specifically for tickers, starburst icons, and call-to-action underscores.
- **Powder Blue (#A0C4FF):** A cooling tertiary color used for softer geometry, circular masks, and secondary accents.
- **Off-White (#F5F5F0):** Used for "paper" surfaces and high-readability backgrounds within dark-mode containers.

## Typography

The typography system relies on a "Display-First" approach. Headlines should use **Space Grotesk** (serving as our blocky, futuristic alternative) at massive scales. These should often be tightly tracked to create a monolithic visual block.

**Manrope** provides the functional balance, used for body descriptions and longer-form text where readability is paramount. For technical details, dates, and "ticket" metadata, **Space Mono** is used to reinforce the digital/hacker aesthetic. 

Key Rules:
- Tickers must always be uppercase.
- Headlines can overlap other elements or be cropped by the viewport edge.
- Use wide letter-spacing for monospaced labels to enhance the "system" look.

## Layout & Spacing

This design system uses an **intentional asymmetrical layout** model. While a underlying 12-column grid exists, elements should frequently break the grid or span odd column counts (e.g., a 7-column image paired with a 4-column text block).

**Breakpoints:**
- **Mobile (<768px):** Single column, reduced margins, headlines scale down to `headline-lg-mobile`.
- **Desktop (>1024px):** Extreme whitespace, layered panels, and absolute-positioned decorative elements (starbursts/bubbles).

Spacing follows a 4px base unit, but padding within "cutout" panels should be generous (minimum 32px) to maintain the editorial feel.

## Elevation & Depth

Depth is achieved through **Hard Layering** and **High-Contrast Outlines** rather than soft shadows.

- **Stacking:** Use "Offset Shadows"—solid color blocks (usually Primary or Secondary) positioned exactly 8px or 16px behind the top surface.
- **Borders:** Every floating panel or bubble should have a crisp 2px or 3px solid black border.
- **Cutouts:** Images should be isolated (background removed) and placed on top of geometric shapes (circles or rectangles) to create a multi-dimensional "collage" effect.
- **Z-Index:** Content should feel like a physical stack of papers on a desk.

## Shapes

The primary shape language is **Sharp (0px)** for most structural panels to maintain the Brutalist edge. 

However, specific decorative exceptions apply:
- **Speech Bubbles:** Must have pixelated or "stepped" corners rather than smooth curves.
- **Pills:** Buttons use a full pill-shape (radius 999px) to provide a tactile "clicky" contrast against the sharp layout.
- **Starbursts:** 8-point to 12-point sharp star polygons used for callouts and highlights.
- **Perforations:** One edge of a container (usually the top or bottom) may feature a "punched hole" or jagged ticket edge.

## Components

### Buttons & Interaction
Buttons are either full-width blocks or compact pills. Use a 3px solid black border and an offset solid shadow that moves on `hover` (simulating a physical press).

### Ticker Strips
Horizontal bars (Hot Pink or Electric Lime) that span the full width of the viewport. Text scrolls or repeats with starburst icons as separators. Used for branding or page titles.

### Pixel Speech Bubbles
Containers for "Asides" or secondary quotes. Use an Off-White background with a 2px black border and a triangular "tail" composed of blocks.

### Ticket-Style Graphics
Small UI cards used for metadata (dates, tags, categories). Features a vertical "barcode" graphic on one side and Space Mono text.

### Image Panels
Photography should use high-contrast "cutout" styles. Place subjects against solid color circles or within sharp-edged containers that have a "torn paper" or "perforated" top edge.