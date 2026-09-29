# PROJECT.md --- FastTrack

## 1. Authority

-   `DESIGN.md` is authoritative for visual/UI design.
-   `PROJECT.md` is authoritative for product behavior, architecture,
    scope, calculations, SEO/content architecture and engineering rules.
-   Read both before implementation.
-   Do not modify either document to make implementation easier.
-   Do not commit or push unless explicitly instructed.

## 2. Product

FastTrack is a standalone responsive web application centered on an
intermittent fasting calculator, supported by educational content and
future fasting tools.

Core flow:

**Choose protocol → enter last-meal/fasting-start time → optional inputs
→ calculate → view schedule → use/print/save result**

The core calculator must work without login, payment, account creation
or server-side health-data storage.

Reference site: https://ifastingcalculator.com/

Use the reference only to understand functionality, information
architecture and topic coverage. Do not copy its source code, branding,
exact text, images, testimonials, statistics or visual identity.

## 3. V1 Scope

### Core daily protocols

-   12:12
-   14:10
-   16:8
-   18:6
-   20:4
-   OMAD / 23:1

### Weekly protocol

-   5:2

5:2 must NOT be treated as an ordinary daily fasting-duration
calculation. It is a weekly eating/calorie-pattern model.

### Calculator inputs

Required: - fasting protocol - last meal / fasting-start time

Optional: - current weight - goal weight

Do not add inputs merely because they appear visually useful.

## 4. Daily Calculation Logic

For daily protocols:

`fastHours = selected protocol fast duration`

`eatHours = selected protocol eating duration`

Given `lastMealTime`:

-   fasting starts at `lastMealTime`
-   fasting ends at `lastMealTime + fastHours`
-   eating window starts at fasting end
-   eating window ends at eating-window start + `eatHours`

Example:

**16:8 + 20:00** - fasting starts: 20:00 - fasting ends: 12:00 next
day - eating window: 12:00--20:00

Use robust numeric/date/time calculations internally. Never calculate by
comparing formatted time strings.

Correctly handle: - midnight crossing - morning/evening times - 12-hour
and 24-hour display - local timezone - invalid values

## 5. 5:2

5:2 is a weekly protocol.

The UI should explain: - 5 regular eating days - 2 non-consecutive
reduced-intake days

Do not pretend that 5:2 produces a normal daily fasting window.

Do not invent calorie targets unless a clearly documented and
evidence-supported model is later approved.

## 6. Result Dashboard

After calculation, display:

-   selected protocol
-   fasting start
-   fasting duration
-   fasting end / next meal
-   eating-window start
-   eating-window end
-   eating-window duration
-   current schedule state

Current state may be: - FASTING - EATING WINDOW - FASTING STARTS SOON -
EATING WINDOW STARTS SOON

The result must be generated from actual calculator data.

## 7. Visual Calculator Components

Use the components specified in `DESIGN.md`:

-   circular fasting progress tracker
-   24-hour horizon bar
-   metric cards
-   schedule milestones
-   protocol selector
-   time controls
-   optional biometrics section

Do not use fake/demo values in production.

The timeline must support schedules crossing midnight and must never
render invalid widths or negative durations.

## 8. Physiological Claims

The calculator calculates time schedules. It is NOT a biological
diagnosis engine.

Do not present deterministic claims such as: - "autophagy starts exactly
at X hours" - "ketosis starts exactly at X hours" - "deep cellular
repair begins at X hours" - guaranteed fat loss - guaranteed metabolic
outcomes

If educational content discusses physiology, distinguish evidence,
uncertainty and individual variation.

## 9. Weight Inputs

Validate: - positive numbers - sensible ranges - no NaN/Infinity

Do not present guaranteed weight-loss predictions from fasting duration
alone.

If a future weight-loss model is added, document its assumptions and
limitations.

For V1 it is acceptable to omit numerical weight-loss prediction.

## 10. Validation

Invalid input must never silently produce a result.

Examples: - "Enter a valid time." - "Weight must be greater than 0." -
"Please select a fasting method."

The page must remain stable when optional data is invalid.

## 11. Homepage

Approved information architecture:

1.  Header
2.  Hero
3.  Main calculator
4.  Calculation result
5.  Fasting protocols
6.  How it works
7.  Fasting education
8.  Practical tips
9.  Safety / disclaimer
10. FAQ
11. Final CTA
12. Footer

The calculator should be reachable from the hero, navigation, protocol
cards and final CTA.

## 12. Navigation

Primary: - Calculator - Fasting Methods - How It Works - Fasting
Guides - FAQ

Utility content may include fasting science.

Follow `DESIGN.md` for visual implementation.

## 13. Protocol Cards

Initial cards: - 12:12 - 14:10 - 16:8 - 18:6 - 20:4 - OMAD

Each contains: - name - ratio - concise explanation - example schedule -
appropriate context - CTA to use it

Avoid unsupported "best for everyone" or guaranteed-benefit claims.

## 14. Content Architecture

The website must support long-form content separately from calculator
code.

Initial clusters:

### Fasting basics

-   What is intermittent fasting?
-   How intermittent fasting works
-   How to start intermittent fasting

### Protocols

-   12:12
-   14:10
-   16:8
-   18:6
-   20:4
-   OMAD
-   5:2

### Practical guides

-   What can you drink while fasting?
-   How to handle hunger
-   Fasting and exercise
-   Fasting and sleep
-   How to break a fast
-   Common fasting mistakes

### Safety

-   Who should avoid fasting
-   Fasting and medications
-   Fasting and diabetes
-   Pregnancy/breastfeeding considerations
-   Eating-disorder considerations

### FAQ

Build useful, evidence-reviewed answers.

Never copy the reference site's article text, testimonials, expert
quotes or statistics.

## 15. CMS / Content

Keep calculator functionality and content separate.

V1 may use Markdown/MDX with frontmatter:

``` yaml
title:
slug:
description:
category:
publishedAt:
updatedAt:
author:
featuredImage:
keywords:
canonical:
```

A future headless CMS can replace the content layer without rewriting
calculator logic.

Do not build a custom admin dashboard in V1.

## 16. SEO

The architecture must support:

-   semantic HTML
-   unique title/meta description
-   canonical URLs
-   Open Graph metadata
-   sitemap
-   robots.txt
-   structured data where appropriate
-   clean URLs
-   internal linking
-   crawlable content
-   fast rendering

Potential structure:

``` text
/
 /fasting-methods
 /fasting-methods/12-12
 /fasting-methods/14-10
 /fasting-methods/16-8
 /fasting-methods/18-6
 /fasting-methods/20-4
 /fasting-methods/omad
 /fasting-methods/5-2
 /guides/...
 /faq
 /about
 /contact
 /privacy
 /terms
 /medical-disclaimer
```

Do not create thin pages merely to target keywords.

SEO keyword research and the large content plan happen AFTER the core
product is successfully completed.

## 17. Privacy

The core calculator should be local-first.

Do not transmit or store by default: - weight - goal weight - fasting
schedule - health goals - activity/health information

No account is required.

If analytics are later added, do not log sensitive calculator values.

## 18. Accessibility

Implement: - semantic HTML - keyboard navigation - visible focus
states - accessible labels - accessible validation errors - adequate
contrast - touch-friendly controls - text equivalents for visual
timeline information

Never communicate fasting/eating state using color alone.

## 19. Responsive

Use the breakpoints in `DESIGN.md`:

-   Mobile: \<768px
-   Tablet: 768--1199px
-   Desktop: ≥1200px

Desktop: - 12-column layout - max-width 1280px - calculator/result
multi-column layout

Tablet: - 8-column layout - clear separation of calculator and result

Mobile: - single-column stack - readable result metrics - usable
timeline - no horizontal overflow - touch-friendly controls

Do not merely shrink desktop.

## 20. Architecture

Preferred stack:

-   Next.js
-   React
-   TypeScript
-   local/static content initially
-   lightweight dependencies

Suggested structure:

``` text
app/
  page
  fasting-methods/
  guides/
  faq/
  privacy/
  terms/
  medical-disclaimer/

components/
  calculator/
  timeline/
  progress/
  protocol-cards/
  content/
  navigation/

lib/
  calculator/
  time/
  validation/
  seo/
  content/

content/
  guides/
  methods/
  faq/

public/
  images/
  icons/
```

Keep calculation logic separate from UI.

Conceptually:

``` text
Calculator UI
   ↓
Calculator State
   ↓
Pure Calculation Functions
   ↓
Normalized Schedule
   ↓
Result UI / Timeline / Progress
```

Pure calculation functions must be unit-testable without a browser.

## 21. Data Models

Conceptual daily protocol:

``` ts
type FastingProtocol = {
  id: string
  name: string
  fastHours: number
  eatingHours: number
  type: "daily" | "weekly"
}
```

Calculated schedule:

``` ts
type FastingSchedule = {
  protocolId: string
  fastStart: string
  fastEnd: string
  eatingStart: string
  eatingEnd: string
  fastDurationMinutes: number
  eatingDurationMinutes: number
}
```

Internal calculations should use numeric/date representations; formatted
strings are presentation-only.

## 22. Future Tools --- V2

Possible future tools: - fasting timer - fasting streak tracker - meal
planner - calorie calculator - BMR - TDEE - BMI - macro calculator -
water-intake calculator - schedule generator - calendar integration

Do not implement these without explicit approval.

## 23. Print / Export

A print-friendly fasting plan is desirable if simple.

Future: - `.ics` calendar export - downloadable schedule

If `.ics` is implemented, use the user's local schedule and do not
transmit health data to a server.

## 24. Performance

-   fast initial load
-   minimal JS for static content
-   lightweight calculator
-   optimized images
-   lazy-load non-critical media
-   avoid unnecessary dependencies
-   avoid excessive animation
-   prevent unnecessary React re-renders
-   test on mid-range mobile devices

## 25. Security

Avoid unnecessary backend infrastructure.

If backend features are added later: - validate server-side - protect
secrets with environment variables - never commit secrets - minimize
health-data storage - use appropriate security headers

## 26. Health/Safety

This is a health-related product.

Clearly state: - informational/educational purpose - not medical
advice - users with medical conditions should seek professional
guidance - special caution around diabetes, medications,
pregnancy/breastfeeding, eating disorders and minors

Do not diagnose or prescribe treatment.

## 27. No Fake Data

The Stitch prototype contains placeholder/demo material that must NOT
ship as factual data, including: - fake schedule counts - fake ratings -
fake doctor-review claims - fake user studies - fake expert quotes -
deterministic metabolic telemetry

Replace with truthful product information or remove.

## 28. Testing

### Calculator

Test: - 12:12 - 14:10 - 16:8 - 18:6 - 20:4 - OMAD - 5:2 behavior -
midnight crossing - morning/evening times - invalid values - boundary
cases - current-state calculation - local timezone display

Example:

16:8 + 20:00 must produce: - fast start 20:00 - fast end 12:00 next
day - eating start 12:00 - eating end 20:00

### UI

Test: - protocol switching - form submission - result updates -
validation - FAQ accordion - protocol-card CTA - keyboard navigation -
mobile layout - print view if implemented

### SEO

Verify: - title - description - canonical - sitemap - robots - heading
hierarchy - structured data where used - no duplicate canonical URLs

## 29. Development Stages

### Stage 0

Repository/toolchain/build baseline.

### Stage 1

Implement approved design system from `DESIGN.md`.

### Stage 2

Header, navigation, footer and homepage shell.

### Stage 3

Pure calculator engine + unit tests.

### Stage 4

Calculator UI + result dashboard.

### Stage 5

24-hour timeline + circular progress + real-time state.

### Stage 6

Protocol cards, education, safety, FAQ.

### Stage 7

SEO infrastructure.

### Stage 8

Print/calendar utility if approved.

### Stage 9

Full QA: calculation, responsive, accessibility, performance, content
and SEO.

### Stage 10

Final acceptance and production build.

## 30. Antigravity Rules

Before editing: 1. Read `DESIGN.md`. 2. Read `PROJECT.md`. 3. Inspect
the existing repository. 4. Understand the current architecture.

While implementing: - make minimal targeted changes - preserve working
functionality - keep calculations separate from UI - add tests for
meaningful logic - use original content - do not fabricate health
claims - do not add V2 features - do not replace the approved design
with a generic template - do not add unnecessary backend/auth/database
infrastructure

After meaningful milestones: - report changed files - report tests -
report build status - report known limitations - report any
physical/browser QA still required

Do not commit or push unless explicitly instructed.

## 31. Final Acceptance Criteria

V1 is accepted only when:

-   calculator logic is correct
-   all supported daily protocols work
-   5:2 is handled distinctly
-   midnight crossing works
-   invalid input is handled
-   result dashboard reflects actual inputs
-   timeline reflects actual schedule
-   mobile and desktop layouts work
-   no horizontal overflow
-   no console/runtime errors
-   accessibility basics pass
-   SEO basics pass
-   content is original
-   fake metrics/claims are removed
-   health claims are reviewed before publication
-   no unnecessary backend/account system exists
-   production build succeeds

## 32. Product Principle

The final product should feel like:

**A trustworthy fasting utility first, an educational resource second,
and an expandable SEO platform third.**

Core experience:

**Choose → Calculate → Understand → Use**
