# FastTrack — Circadian Intermittent Fasting Platform

> A production-grade, transferrable starter website and scheduling platform for intermittent fasting. Engineered with Next.js 14, React 18, TypeScript, and Tailwind CSS. Local-first, privacy-respecting, and mathematically verified.

---

## 1. Project Overview

**FastTrack** is an evidence-grounded intermittent fasting calculator and educational resource designed around circadian biology and clinical precision.

### Key Capabilities
- **Pure Calculation Engine**: Unit-tested mathematical engine that calculates daily fasting windows, midnight crossings, eating windows, and relative real-time state without relying on string comparisons or browser state.
- **7 Supported Protocols**:
  - **Daily Protocols**: 16:8 (Leangains standard), 14:10 (Gentle Reset), 12:12 (Circadian baseline), 18:6 (Accelerated), 20:4 (Warrior), OMAD / 23:1 (One Meal A Day).
  - **Weekly Protocol**: 5:2 Weekly Pattern (modeled accurately as a weekly caloric cycle, NOT as an hourly daily fast).
- **Interactive Visualizers**:
  - SVG Dual-Concentric Circular Progress Tracker with real-time countdown telemetry.
  - 24-Hour Horizon Bar mapping daily arcs, midnight boundaries, and dynamic eating/fasting segments.
- **Zero Account & Local-First**: No database, no backend server requirements, and zero health data collection.
- **Direct Calendar Export**: Browser-side RFC 5545 `.ics` file generator for instant scheduling into Apple Calendar, Google Calendar, or Outlook.
- **Print Optimization**: Dedicated `@media print` stylesheet for clean physical printing.
- **Full SEO Foundations**: Semantic HTML, static site generation (SSG) for all routes, dynamic XML sitemap (`/sitemap.xml`), robots.txt (`/robots.txt`), OpenGraph, Twitter cards, and Schema.org JSON-LD (`WebApplication`, `FAQPage`, `Article`).

---

## 2. Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict typing, no `any`)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with design tokens from `DESIGN.md`
- **Typography**: Google Fonts via `next/font` (`Space Grotesk` for headlines/metrics, `Plus Jakarta Sans` for body/UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest 3](https://vitest.dev/) (20 automated unit tests)

---

## 3. Architecture & Repository Structure

```text
fast-track/
├── app/                              # Next.js App Router routes & layouts
│   ├── about/page.tsx                # About FastTrack
│   ├── contact/page.tsx              # Contact & support
│   ├── faq/page.tsx                  # FAQ directory
│   ├── fasting-methods/              # Protocols hub
│   │   ├── page.tsx                  # Protocols matrix
│   │   └── [slug]/page.tsx           # Dedicated protocol calculator & guide
│   ├── guides/                       # Educational guides hub
│   │   ├── page.tsx                  # Guides library
│   │   └── [slug]/page.tsx           # Individual guide article
│   ├── medical-disclaimer/page.tsx   # Comprehensive medical safety notice
│   ├── privacy/page.tsx              # Local-first privacy policy
│   ├── terms/page.tsx                # Terms of service
│   ├── layout.tsx                    # Root HTML layout, Google fonts, WebApplication schema
│   ├── page.tsx                      # Homepage orchestrator
│   ├── globals.css                   # Tailwind layers, print stylesheet, tabular numbers
│   ├── robots.ts                     # Dynamic robots.txt
│   └── sitemap.ts                    # Dynamic XML sitemap
│
├── components/                       # Reusable UI components
│   ├── calculator/
│   │   ├── Calculator.tsx            # Master interactive calculator
│   │   ├── ProtocolSelector.tsx      # Protocol toggle buttons
│   │   ├── TimeSelector.tsx          # Quick presets & custom time input
│   │   ├── OptionalBiometrics.tsx    # Weight, goal, activity level (optional)
│   │   └── ResultDashboard.tsx       # 4 metric cards, status, milestones, export
│   ├── home/                         # Homepage sections
│   │   ├── Hero.tsx                  # Hero with SVG circadian dial & truthful highlights
│   │   ├── HowItWorks.tsx            # 4-step workflow
│   │   ├── FastingScience.tsx        # Bento grid on autophagy, insulin, and sleep
│   │   ├── ActionableTips.tsx        # 6 daily fasting habits
│   │   ├── SafetyNotice.tsx          # Clinical safety banner
│   │   ├── FaqSection.tsx            # Accordion with FAQPage schema
│   │   └── FinalCta.tsx              # Bottom action banner
│   ├── navigation/
│   │   ├── Header.tsx                # Sticky header with mobile drawer
│   │   ├── Footer.tsx                # Site footer with legal and protocol links
│   │   └── Logo.tsx                  # SVG brand logomark and wordmark
│   ├── progress/
│   │   └── CircularProgressTracker.tsx # SVG circular dial with live progress
│   ├── protocol-cards/
│   │   ├── ProtocolCard.tsx          # Protocol card component
│   │   └── ProtocolGrid.tsx          # Matrix grid of all methods
│   └── timeline/
│       └── HorizonBar24.tsx          # 24-hour visual bar with time cursor
│
├── lib/                              # Pure business logic & content catalogs
│   ├── calculator/
│   │   ├── types.ts                  # TypeScript models and interfaces
│   │   ├── protocols.ts              # Catalog of all 7 protocol definitions
│   │   ├── engine.ts                 # Pure schedule calculation functions
│   │   ├── milestones.ts             # Non-deterministic metabolic stages
│   │   └── exportCalendar.ts         # RFC 5545 .ics generator
│   ├── content/
│   │   └── guidesData.ts             # Full-text educational guide articles
│   ├── time/
│   │   ├── parser.ts                 # HH:mm to minutes from midnight
│   │   └── format.ts                 # 12h, 24h, and duration formatters
│   └── validation/
│       └── inputValidation.ts        # Validation for protocols, times, and weights
│
├── tests/
│   └── calculator.test.ts            # 20 unit tests covering all protocols & edge cases
│
├── package.json
├── tailwind.config.ts                # Design tokens mapped to DESIGN.md
├── tsconfig.json
└── README.md
```

---

## 4. Local Installation & Setup

### Prerequisites
- Node.js 18.x, 20.x, or 22+
- npm (or yarn / pnpm)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Run Unit Tests
```bash
npm test
```
Executes all 20 tests using Vitest.

---

## 5. Production Build & Deployment

### Build Command
```bash
npm run build
```
Next.js compiles and pre-renders all 27 static and SSG pages into the `.next` directory.

### Local Production Preview
```bash
npm start
```
Starts the production server at `http://localhost:3000`.

### Deploying to Production
FastTrack has zero server-side state or external database dependencies, making it deployable on any platform:

- **Vercel**: Import the repository and deploy with default Next.js settings.
- **Cloudflare Pages / Netlify**: Run `npm run build` with default Next.js output or export.
- **Docker / Self-Hosted VPS**: Run `npm run build` and `npm start` behind an Nginx or Caddy reverse proxy.

---

## 6. How Calculator Logic Works

Calculation logic is located exclusively in [`lib/calculator/engine.ts`](file:///E:/fast%20track/lib/calculator/engine.ts). It is decoupled from all UI components:

```
Calculator Inputs (Protocol, Time, Optional Biometrics)
                 ↓
  validateCalculatorInputs() [lib/validation/inputValidation.ts]
                 ↓
  calculateSchedule() [lib/calculator/engine.ts]
                 ↓
  NormalizedSchedule (numeric minutes, formatted strings, relative state)
                 ↓
  UI Renderers (ResultDashboard, CircularProgressTracker, HorizonBar24)
```

### Midnight Crossing Handling
When a schedule begins in the evening (e.g. 16:8 starting at 20:00):
- Fast starts: `20:00` (8:00 PM)
- Fast ends: `12:00` (12:00 PM next day)
- Eating window: `12:00` to `20:00`
- `crossesMidnight` flag is set to `true`, and 12-hour formatting automatically marks `(Next Day)`.
- The 24-hour horizon bar splits into three clean segments (00:00–12:00 morning fast, 12:00–20:00 eating window, 20:00–24:00 evening fast) totaling exactly 100% width with no negative widths.

---

## 7. How to Add or Edit Content

### Adding / Editing Fasting Guides
All educational guide articles live in [`lib/content/guidesData.ts`](file:///E:/fast%20track/lib/content/guidesData.ts). To add a new guide:
1. Append an object to the `GUIDES` array:
   ```ts
   {
     slug: "new-guide-slug",
     title: "Guide Title",
     shortDescription: "One sentence summary.",
     category: "Nutrition",
     readTime: "5 min read",
     publishedAt: "2026-09-30",
     updatedAt: "2026-09-30",
     author: "FastTrack Editorial Team",
     content: {
       leadParagraph: "...",
       sections: [ ... ]
     }
   }
   ```
2. The dynamic route `/guides/[slug]` and `/sitemap.xml` will automatically pre-render the new article at build time.

### Adding / Editing Protocols
Protocols are defined in [`lib/calculator/protocols.ts`](file:///E:/fast%20track/lib/calculator/protocols.ts). Adding or adjusting values updates the calculator, selector tabs, comparative matrix, and individual protocol pages automatically.

---

## 8. SEO Metadata & Structured Data

- **Canonical URLs**: Every page sets canonical URLs via Next.js metadata.
- **Dynamic Sitemap**: Automatically generated at `/sitemap.xml` in `app/sitemap.ts`.
- **Search Robots**: Directed via `app/robots.ts` to `/sitemap.xml`.
- **JSON-LD Schema**:
  - `WebApplication` schema on `app/layout.tsx`.
  - `FAQPage` schema on `components/home/FaqSection.tsx`.
  - `Article` schema on `app/guides/[slug]/page.tsx`.

---

## 9. Environment Variables & Transferability

- **No API Keys or Secrets Required**: The application runs completely client-side without third-party API dependencies or subscription keys.
- **Base Domain**: When transferring to a new domain, update the default domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` from `https://fasttrackfasting.com` to your target domain.

---

## 10. Known Limitations & V2 Roadmap

- **Weight Loss Modeling**: Optional weight inputs are captured for user preference but intentionally do not generate speculative weight loss guarantees.
- **Notifications**: V1 supports direct export to user calendar (.ics). Push notifications or live device alarms require service workers or a mobile wrapper planned for V2.
- **Multi-Day Extended Fasts**: FastTrack V1 focuses strictly on intermittent fasting (12 to 24-hour cycles and 5:2 weekly). Prolonged multi-day water fasts (48h–72h+) are excluded for medical safety.

---

## License

Transferable commercial starter website license. Delivered ready for independent deployment, monetization, or ownership transfer.
