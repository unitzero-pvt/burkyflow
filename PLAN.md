# UNITZERO.tech Rebuild — Build Plan

Senior FE + product design pass. Next.js 14 App Router, TS, Tailwind, shadcn/ui, Magic UI, Lucide, Framer Motion (sparingly). Vercel target. Light theme only.

## 1. Design system (locked from ui-ux-pro-max + M360 benchmark)

Skill auto-pick skewed motion/pink and contradicts the brief, so overriding toward the **B2B Service** palette.

- **Backgrounds:** white `#FFFFFF` + off-white `#F8FAFC`. Section alternation uses white / off-white, never dark.
- **Text:** slate-900 `#0F172A` headings, slate-600 `#475569` body (4.5:1 min).
- **Neutrals:** slate-100/200 for hairline dividers, no harsh borders.
- **Accent (placeholder token `--brand`):** sky/blue `#0EA5E9` family as default; CTA token `--brand-cta`. TODO: you swap the final hex in one place (`globals.css` + tailwind token). Everything references the token, not raw hex.
- **Type:** Lexend (headings) + Source Sans 3 (body) via `next/font`. Type scale: 14/16/18/20/24/30/36/48/60.
- **Radius:** `rounded-2xl` default on cards/inputs/buttons.
- **Shadow:** soft only (`shadow-sm`/custom `shadow-soft` = low-opacity large blur). No hard borders.
- **Spacing:** generous. Section py-20 md:py-28, container `max-w-7xl px-6`.
- **Motion:** Magic UI subtle (fade/slide-in on scroll), Framer only for accordion + sticky CTA. Respect `prefers-reduced-motion`.
- Persist as `design-system/MASTER.md` via the skill `--persist` flag.

## 2. Scaffold & structure

```
app/
  layout.tsx (fonts, Navbar, Footer)
  page.tsx                      # Home
  about/page.tsx
  services/page.tsx             # index
  services/[slug]/page.tsx      # dynamic detail
  industries/page.tsx
  industries/[slug]/page.tsx
  lp/[city]/[niche]/page.tsx    # geo template
  blog/page.tsx
  blog/[slug]/page.tsx
  contact/page.tsx
  sitemap.ts
components/
  Navbar, Footer, AlternatingFeatureBlock, StatBlock, FAQAccordion,
  CTABand, AnchorJumpNav, IndustryStrip, LogoWall, GeoLandingTemplate
content/
  services.ts, industries.ts, geo.ts (city x niche data), faqs.ts, stats.ts
lib/ seo.ts (metadata + JSON-LD helpers)
public/ mcp.json, llms.txt, llms-full.txt, robots.txt
```

Init: `create-next-app` (TS, Tailwind, App Router) -> `shadcn init` -> add accordion/button/card/etc -> Magic UI -> fonts -> token layer.

## 3. Content model (data-driven, ports from your ICP/email work)

Services (6, mirrors live site + brief order):
AI Voice Receptionist, Database Reactivation, CRM & Lead Systems, Workflow Automation, Answer Engine Optimization (AEO/GEO), Done-For-You Service Model.

Each service object: `slug, eyebrow, h2, lead, steps[3], whyItMatters, image, ctaHref`. Drives both homepage sections AND `/services/[slug]`.

Industries (port from live + email leaves): Home & Property (HVAC, plumbing, roofing, lawn/pest), Healthcare (dental, medspa), Real Estate, Automotive, Professional Firms (law, staffing). Each: `slug, name, h1, pains[], offers[]`.

Geo data: `city x niche` map seeded from your email variant matrix (Houston/HVAC, San Antonio/plumbing, Charleston/real-estate, etc.). Each combo: `pains[3], offers[3], localFaqs[8-10]`. Pulls pain/offer language straight from `05_email_variants.md` angles A/B/C/D so copy is on-brand, not generic.

## 4. Homepage (`/`)

1. Single focused hero. H1: "Turn missed calls and dormant leads into booked revenue with AI." Primary CTA "Book a call" + secondary "See how it works." No carousel.
2. `AnchorJumpNav` under hero: Services, Industries, Case Studies, Process, FAQ.
3. Six `AlternatingFeatureBlock`s (M360 pattern, side prop flips L/R; mobile = image first then text, single column). Eyebrow / H2 / lead / 3-step "How we do it" / "Why it matters" callout / illustration / repeated primary CTA.
4. `StatBlock` mid-page: 3 conservative placeholder numbers (clients served, hours of automation deployed, avg response time) — TODO tokens you edit.
5. `IndustryStrip` (plain text list, not cards).
6. `LogoWall` placeholder.
7. `FAQAccordion` (shadcn).
8. `CTABand` final.

## 5. Geo template — canonical `/ai-automation/[niche]/[city]` — reference build: HVAC / Houston

URL: keyword-in-path organic route `/ai-automation/hvac/houston` (namespaced, no collision with top-level routes). `/lp/[city]/[niche]` reserved for PAID traffic only, set `noindex`, thin alias rendering the same template. This keeps SEO equity in the keyword path and separates paid from organic.

Order: H1 "AI Automation for [Niche] Businesses in [City]" -> 3 offer cards (reactivate dormant CRM / AI voice booking funnel / after-hours missed-call capture) -> 1 alternating block per offer with proof points -> service-area trust strip placeholder -> FAQ accordion (8-10 locally phrased Qs) -> mobile sticky CTA bar.

SEO / schema (honest remote-service model — UNITZERO is registered in Karachi, later Wyoming, NOT a local business in these cities):
- `generateMetadata` unique title/desc/H1 per combo.
- JSON-LD **`Service`** with `areaServed` = the city + `provider` = UNITZERO Organization (the Google-sanctioned way to declare a remotely served area without claiming a physical presence).
- JSON-LD **`FAQPage`**.
- NO `LocalBusiness` on geo pages. `LocalBusiness`/`Organization` with the real address lives only on the Contact page.
- `generateStaticParams` for known combos; others render from data with sane fallbacks.

## 6. AI-agent / MCP compliance

- `public/mcp.json` — agency description, services array, contact endpoint, capabilities array, per current Web MCP draft convention. TODO: confirm contact endpoint URL.
- `public/llms.txt` (concise index) + `public/llms-full.txt` (expanded).
- `public/robots.txt` + `app/sitemap.ts` (includes services, industries, blog, and geo combos).

## 7. Components (10) — all light, token-driven, mobile-first

Navbar (sticky, blur-on-scroll), Footer (ported from live structure: 6 service groups, quick links, legal, social, newsletter), AlternatingFeatureBlock, StatBlock, FAQAccordion, CTABand, AnchorJumpNav, IndustryStrip, LogoWall, GeoLandingTemplate.

## 8. Deliverables this pass

Scaffold + design tokens + 10 components + working `/` + working `/lp/houston/hvac` + mcp.json/llms.txt/llms-full.txt/robots.txt/sitemap.ts + README (how to add geo + industry combos). Show homepage and Houston HVAC first.

## Defensible choices / TODOs for you
- Accent color left as sky-blue placeholder token (you pick final).
- Stats are conservative placeholders.
- Copy seeded from your email angles; refine voice on review.
- No emojis, no em dashes, plain prose throughout.
- Blog/About/index pages scaffolded with real layout but placeholder copy this pass.
</content>
</invoke>
