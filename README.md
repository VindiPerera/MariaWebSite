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
    industries/[slug]/      # Industry landing pages (data: lib/industries.ts)
    pos-system/[country]/[region]/  # Country + state/province landing pages (data: lib/geo.ts)
    privacy-policy/ refund-policy/ terms-and-conditions/
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx
  components/
    layout/                 # Header (scroll state, mobile menu), Footer
    sections/               # TrialCta + TrialForm (shared by every page)
    motion/MotionProvider   # Scroll-reveal / float / dash animations (data-* attributes)
    home/ features/ product/ hardware/ pricing/ contact/   # Page sections
    ui/                     # Small shared pieces (WhatsApp icon)
  lib/site.ts               # Site URL, contact details, keywords, nav + footer links
  lib/seo.ts                # pageMetadata() helper + schema.org JSON-LD builders
  lib/featureCatalog.ts     # Full feature list shown on /features
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
- PayHere checkout links (`#checkout-1y` etc.) and the installer download link are placeholders from the design.

## SEO

- Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://mariapos.jaan.lk`) in production; canonical URLs, the sitemap and structured data all use it.
- Every page uses `pageMetadata()` from `lib/seo.ts` for title, description, keywords, canonical and Open Graph tags.
- Add a country or state/region in `lib/geo.ts` (Sri Lankan cities come from `lib/locations.ts`), or an industry in `lib/industries.ts`; pages, sitemap entries and internal links are generated automatically.
