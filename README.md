# MariaPoS Website

Marketing site for MariaPoS (JAAN Network), built with Next.js (App Router), TypeScript and CSS Modules.

## Getting started

Requires Node.js 20.9+.

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Project structure

```
src/
  app/                      # Routes (one folder per page)
    layout.tsx              # Fonts, metadata, Header, Footer, MotionProvider
    globals.css             # Design tokens + shared helpers (.eyebrow, .section-title, .icon-tile…)
    page.tsx                # /
    features/ product/ hardware/ pricing/ contact/
  components/
    layout/                 # Header (scroll state, mobile menu), Footer
    sections/               # TrialCta + TrialForm (shared by every page)
    motion/MotionProvider   # Scroll-reveal / float / dash animations (data-* attributes)
    home/ features/ product/ hardware/ pricing/ contact/   # Page sections
    ui/                     # Small shared pieces (WhatsApp icon)
  lib/site.ts               # Contact details, nav + footer links
  assets/images/            # Images (served through next/image)
design/                     # Original Claude Design (.dc.html) source, for reference only
```

## Animations

Add these attributes to any element; `MotionProvider` picks them up automatically:

| Attribute | Effect |
| --- | --- |
| `data-reveal="up\|right\|scale"` + `data-delay="ms"` | Fade/blur in when scrolled into view |
| `data-grow` | Bars inside a revealed element grow upward |
| `data-float="ms"` + `data-amp="px"` | Gentle infinite float |
| `data-dash` | Animated dashed SVG line |

All motion is disabled when the user prefers reduced motion.

## Not wired up yet

- Trial signup form (`src/components/sections/TrialForm.tsx`): shows the thank-you state only; no backend call.
- PayHere checkout links (`#checkout-1y` etc.), the installer download link and the Terms / Privacy / Refund pages are placeholders from the design.
