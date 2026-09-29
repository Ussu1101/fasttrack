---
name: Circadian Precision
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#404947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#707977'
  outline-variant: '#bfc8c6'
  surface-tint: '#306762'
  primary: '#003430'
  on-primary: '#ffffff'
  primary-container: '#0f4c47'
  on-primary-container: '#84bbb4'
  inverse-primary: '#99d1ca'
  secondary: '#006d40'
  on-secondary: '#ffffff'
  secondary-container: '#8ef5b5'
  on-secondary-container: '#007243'
  tertiary: '#432800'
  on-tertiary: '#ffffff'
  tertiary-container: '#613c00'
  on-tertiary-container: '#f59e0c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b5ede6'
  primary-fixed-dim: '#99d1ca'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#144f4a'
  secondary-fixed: '#91f8b8'
  secondary-fixed-dim: '#74db9d'
  on-secondary-fixed: '#002110'
  on-secondary-fixed-variant: '#00522f'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  metric-display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
  metric-display-mobile:
    fontFamily: Space Grotesk
    fontSize: 42px
    fontWeight: '700'
    lineHeight: 46px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies a calm, evidence-based wellness philosophy centered on metabolic health and biological rhythms. The aesthetic marries high-trust clinical precision with an organic, restorative atmosphere. Rather than relying on aggressive gamification or punitive diet tropes, the interface acts as a silent, supportive instrument for personal equilibrium.

Key design principles:
- **Quiet Clarity:** White space functions as a cognitive decompression chamber. Information is layered so primary metabolic metrics surface effortlessly while technical telemetry sits unobtrusively in reserve.
- **Bimodal Rhythm:** The visual language shifts deliberately between the disciplined stillness of the Fasting state (nocturnal, restorative, deep pine-teal) and the vitality of the Eating Window (nourishing, diurnal, warm dawn amber).
- **Clinical Warmth:** Borders are razor-sharp yet delicate; type is rational, structured, and open; card surfaces use pristine whites with faint organic undertones rather than stark synthetic neutrals.

## Colors

The palette establishes a strong dichotomy between the two metabolic phases while anchoring the experience in a clinical, restorative ground.

- **Primary (`#0F4C47` - Pine Emerald):** The foundational brand tone. Signifies structural integrity, stability, biological rest, and deep cellular renewal during active fasts.
- **Secondary (`#38A169` - Sage Green):** Used for metabolic progress milestones, zone achievements (e.g., autophagy markers, fat oxidation thresholds), and positive nutritional validation.
- **Tertiary (`#F59E0B` - Dawn Ochre):** The activating tone. Applied specifically to represent the feeding window, active intake reminders, and morning sunlight cues.
- **Neutral (`#0F172A` - Slate Charcoal):** High-density text neutral paired with structural canvas shades (`#F8FAFB` page ground, `#FFFFFF` component elevations, and `#E2E8F0` hairline dividers).

### Functional Semantic States
- **Fasting Track:** `#0F4C47` base with `#4FD1C5` metric glow and `#E6F4F1` surface tints.
- **Eating Window Track:** `#F59E0B` fill with `#FEF3C7` container backgrounds and `#D97706` boundary markers.
- **Subtle Badges:** Light pastel washes (`#E6F4F1` for fasting, `#FEF3C7` for feeding) framed by delicate 1px semi-opaque borders.

## Typography

Typography relies on a functional split between the clinical, numerical precision of `Space Grotesk` and the warm, highly readable clarity of `Plus Jakarta Sans`.

- **Space Grotesk (Headlines & Metrics):** Utilized for structural titles, digital countdowns, percentage metrics, and temporal counters (e.g., `16:8`, `04h 32m remaining`). Its monoline geometric architecture imparts a surgical, high-tech instrument aesthetic.
- **Plus Jakarta Sans (Body & UI Ergonomics):** Used for instructional copy, biological phase descriptions, micro-labels, and interactive elements. Its open counters maintain total legibility in small status tags and complex multi-column dashboards.
- **Tabular Figures:** Always apply monospace numeric alignment (`font-variant-numeric: tabular-nums`) to real-time timer counters, nutritional calculators, and progress stats to eliminate layout jitter during transitions.

## Layout & Spacing

The layout is built upon an 8-point base spatial model deployed inside a fluid grid structure designed for clinical dashboards and personal biometric tracking.

- **Breakpoints & Grids:**
  - **Mobile (< 768px):** 4 columns, `margin: 1rem`, `gutter: 1.25rem`. Single-column stack for metrics, timeline rings, and schedules.
  - **Tablet (768px - 1199px):** 8 columns, `margin: 2rem`, `gutter: 1.5rem`. Split views between circular progress timers and stage detail accordions.
  - **Desktop (≥ 1200px):** 12 columns, max-width `1280px`, `margin: 3rem`, `gutter: 2rem`. Multi-pane workspace with real-time visualizer panels, historical metabolic trends, and nutritional breakdown sidecars.

- **Spacing Rhythm:** Generous external margins offset compact interior data groups. Card interiors use strict `1.5rem` (`space-lg`) padding, while nested interactive sub-groups preserve tight visual affinity using `0.5rem` (`space-sm`) and `0.25rem` (`space-xs`).

## Elevation & Depth

This system avoids heavy drop shadows in favor of crisp, layered clarity through low-contrast outlines and micro-ambient diffusion.

- **Surface Layers:**
  - **Canvas Base:** `#F8FAFB`—ground layer with zero elevation.
  - **Surface Default (Level 0):** Pure `#FFFFFF` cards, framed by a soft, hairline border (`1px solid #E2E8F0`).
  - **Floating Widgets & Active Tiles (Level 1):** `#FFFFFF` paired with an ambient shadow: `box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)` and a subtle `#CBD5E1` border stroke.
  - **Overlays, Popovers, & Modals (Level 2):** Elevated via `box-shadow: 0 12px 32px -4px rgba(15, 76, 71, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)`. A gentle deep-teal tint in the primary shadow reinforces clinical brand presence without muddying the canvas.
- **Glass Inset Layers:** Used exclusively on temporal tracker controls and floating sticky bottom bars: `background: rgba(255, 255, 255, 0.88)`, `backdrop-filter: blur(12px)`, and a top-border highlight of `1px solid rgba(255, 255, 255, 0.6)`.

## Shapes

The design uses a balanced rounded geometry (level `2`) to cultivate an approachable medical-grade aesthetic—soft enough to feel encouraging and humane, yet geometric enough to convey precision.

- **Standard Containers & Cards:** `0.5rem` (`8px`) to `1rem` (`16px`) corner radius. Accords an organized, structured grid.
- **Interactive Buttons & Form Fields:** `0.5rem` (`8px`) radius for crisp, confident touch targets.
- **Pill Tags & Status Badges:** Fully rounded (`9999px`) to immediately signal state, biological stages (e.g., Ketosis, Glycogen Depletion), and timeline categories.
- **Data Rings & Timelines:** Continuous, smooth SVG arcs with rounded cap termini (`stroke-linecap: round`) providing visual softness to technical progress graphs.

## Components

### Buttons
- **Primary:** Deep Forest Teal (`#0F4C47`) fill, white text, 8px radius, height 44px (48px on mobile). On hover, transitions to `#0C3E3B` with a subtle elevation shift. Focus state features a 2px offset ring in `#4FD1C5`.
- **Secondary:** Subtle Sage fill (`#E6F4F1`), Pine text (`#0F4C47`), borderless. Hover shifts to `#D1EBE6`.
- **Tertiary / Ghost:** Transparent background, slate text (`#475569`), hover background `#F1F5F9`.

### Fasting Circular Progress Tracker
- **Dimensions:** 260px desktop, 220px mobile diameter.
- **Geometry:** 12px thick SVG dual-concentric track. Inactive path in `#E2E8F0`. Dynamic fill in deep pine-teal (`#0F4C47`) fading gracefully into Sage (`#38A169`).
- **Center Stage:** Center stack features the remaining time in `Space Grotesk` (`metric-display`), secondary status label in uppercase `label-sm` (`CURRENT STATE: AUTOPHAGY`), and dynamic target completion timestamp.

### 24-Hour Horizon Bar
- Single continuous 16px high horizontal bar representing 00:00 to 24:00.
- **Eating Windows:** Segmented in warm amber (`#F59E0B`) with an internal subtle diagonal micro-stripe pattern.
- **Fasting Windows:** Solid `#0F4C47` fill.
- **Current Time Cursor:** 2px vertical white line with an exterior dark slate teardrop head highlighting the immediate minute mark.

### Segmented Controls (Protocol Selectors)
- Container background `#F1F5F9` with 6px internal padding.
- Item toggles: When active, elevated pure white tab (`#FFFFFF`) with `rounded-md`, micro-shadow, and `#0F172A` text. Inactive items have muted slate text (`#64748B`) with transparent backgrounds.

### Metabolic Stage Accordion Cards
- Structured 1px border container in `#E2E8F0` with `#FFFFFF` background.
- Expandable header detailing current physiological phase (e.g., Blood Sugar Drop, Fat Burning, Ketosis) accompanied by a 6px status pill dot and elapsed hour badge.
- Expanded tray reveals a warm cream or faint mint contextual card displaying clinical guidance and hydration/electrolyte checklists.

### Sliders (Window Adjustment)
- Track height 6px, neutral track `#E2E8F0`. Active duration fills with `#0F4C47` or `#F59E0B`.
- Dual-thumbs (start/end) measure 24px across, solid `#FFFFFF` with an inset 6px dot matching the respective window state color, elevated by a crisp `0 2px 8px rgba(0,0,0,0.12)` shadow.