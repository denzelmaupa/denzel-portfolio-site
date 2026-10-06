# Portfolio SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give Denzel Maupa's portfolio a complete, verifiable SEO foundation that positions brand/graphic design and UI/UX/product design equally for Zimbabwean, Southern African and international opportunities.

**Architecture:** Centralise canonical URLs, page metadata and Schema.org builders in one dependency-free SEO module, then consume those interfaces from App Router pages and metadata routes. Preserve the current visual system while adding concise crawlable copy, project-specific search intent, crawl controls and a production-oriented audit script.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Node.js 22 built-in test runner, Schema.org JSON-LD, Vercel

**Spec:** `docs/superpowers/specs/2026-10-06-portfolio-seo-design.md`

## Global Constraints

- The canonical origin is exactly `https://www.denzelmaupa.co.zw`.
- Graphic/brand design and UI/UX/product design receive equal positioning weight.
- Zimbabwe and Southern Africa are primary markets; remote and overseas onsite opportunities remain explicit.
- Employment and client/project enquiries receive equal conversion priority.
- Preserve the existing editorial tone, project facts, agency credits and visual identity.
- Do not add an SEO library; use Next.js Metadata APIs and focused local helpers.
- Do not add a blog, fabricate outcomes or promise rankings.
- Structured data must describe visible, verified content only.
- Google Search Console verification uses `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and must remain optional.

## Review Focus

- Alternate or preview hosts must never become canonical; Task 1 tests every metadata URL against the fixed production origin.
- A project with an unknown slug must not generate invented metadata or a successful page; Task 5 tests the metadata fallback and Task 7 checks the live 404.
- Sitemap entries must be unique, complete and restricted to the production origin; Task 4 tests the exact seven-route set.
- JSON-LD containing `<` must be escaped before insertion into HTML; Task 1 tests the serialiser with script-like input.
- Every social image must resolve to an absolute production URL with useful alt text; Tasks 1 and 5 test homepage and project metadata outputs.

---

### Task 1: SEO primitives and regression tests

**Files:**
- Create: `app/lib/seo.ts`
- Create: `tests/seo-helpers.test.ts`
- Modify: `package.json`

**Interfaces:**
- Produces: `SITE_URL: "https://www.denzelmaupa.co.zw"`
- Produces: `SITE_NAME: "Denzel Maupa"`
- Produces: `PERSON_ID: "https://www.denzelmaupa.co.zw/#person"`
- Produces: `absoluteUrl(path: string): string`
- Produces: `createPageMetadata(input: PageMetadataInput): Metadata`
- Produces: `serializeJsonLd(value: unknown): string`
- Produces: `buildPersonJsonLd(): PersonJsonLd`
- Produces: `buildWebsiteJsonLd(): WebsiteJsonLd`
- Consumes: no earlier task interfaces

- [ ] **Step 1: Add the helper tests before the implementation**

Create tests named `absoluteUrl always uses the production www origin`, `page metadata includes canonical and social URLs`, `JSON-LD serialization escapes opening angle brackets`, and `person and website schemas share stable IDs`. Assert the exact constants above, a `/about` canonical, an absolute `/og-denzel-social.png` image, `\\u003c` escaping, `Harare`, `ZW`, LinkedIn and Instagram `sameAs` values.

- [ ] **Step 2: Run the helper tests and confirm the missing module failure**

Run: `node --test tests/seo-helpers.test.ts`

Expected: FAIL because `app/lib/seo.ts` does not exist.

- [ ] **Step 3: Implement the SEO module**

Define `PageMetadataInput` with `title`, `description`, `path`, optional `image`, optional `imageAlt`, and optional `keywords`. `createPageMetadata` must return canonical, Open Graph and Twitter metadata using the production origin and `en_ZW`. `serializeJsonLd` must use `JSON.stringify` and replace `<` with `\\u003c`.

`buildPersonJsonLd` must identify Denzel as a Harare-based graphic, brand, UI/UX and product designer, use `public/images/denzel-maupa-portrait.jpg` as the image URL, and include only the verified LinkedIn and Instagram profiles. `buildWebsiteJsonLd` must reference `PERSON_ID` as creator.

- [ ] **Step 4: Add the project test script**

Add `"test:seo": "node --test tests/seo-helpers.test.ts tests/seo-routes.test.ts tests/seo-projects.test.ts"` to `package.json`. Until later test files exist, run the Task 1 test directly rather than the aggregate script.

- [ ] **Step 5: Run the helper tests**

Run: `node --test tests/seo-helpers.test.ts`

Expected: PASS with four tests.

- [ ] **Step 6: Commit the SEO primitives**

```bash
git add app/lib/seo.ts tests/seo-helpers.test.ts package.json
git commit -m "test: add SEO metadata primitives"
```

### Task 2: Production metadata and site-wide identity schema

**Files:**
- Modify: `app/layout.tsx:1-66`
- Create: `.env.example`
- Modify: `tests/seo-helpers.test.ts`

**Interfaces:**
- Consumes: `SITE_URL`, `createPageMetadata`, `serializeJsonLd`, `buildPersonJsonLd`, `buildWebsiteJsonLd` from Task 1
- Produces: site-wide metadata with title template `%s | Denzel Maupa` and optional Google verification
- Produces: site-wide `Person` and `WebSite` JSON-LD scripts

- [ ] **Step 1: Extend the metadata test with root requirements**

Assert that the default title is `Denzel Maupa | Graphic, Brand, UI/UX & Product Designer`, the description contains `Harare`, `Zimbabwe`, `Southern Africa`, `brand`, `UI/UX` and `product`, and Google verification is absent when the environment variable is missing.

- [ ] **Step 2: Run the targeted test to confirm it fails**

Run: `node --test --test-name-pattern="root requirements" tests/seo-helpers.test.ts`

Expected: FAIL because no root metadata builder exists yet.

- [ ] **Step 3: Add `buildRootMetadata(googleVerification?: string): Metadata`**

Implement it in `app/lib/seo.ts` with the fixed metadata base, title default, `%s | Denzel Maupa` template, homepage canonical, homepage Open Graph/Twitter image and optional `verification.google`.

- [ ] **Step 4: Make the root layout static and canonical**

Remove `headers()` and request-derived host logic from `app/layout.tsx`. Export `metadata` from `buildRootMetadata(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION)`. Render the `Person` and `WebSite` scripts with `serializeJsonLd` near the start of `<body>`.

- [ ] **Step 5: Document the optional verification variable**

Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=` to `.env.example` with a comment that the value comes from Google Search Console and may remain blank during development.

- [ ] **Step 6: Run tests and the production build**

Run: `node --test tests/seo-helpers.test.ts && npm run build`

Expected: tests pass; Next.js build completes without metadata or Server Component errors.

- [ ] **Step 7: Commit the global metadata work**

```bash
git add app/lib/seo.ts app/layout.tsx tests/seo-helpers.test.ts .env.example
git commit -m "feat: establish canonical portfolio metadata"
```

### Task 3: Supporting-page search intent and profile schema

**Files:**
- Modify: `app/about/page.tsx:1-58`
- Modify: `app/resume/page.tsx:1-220`
- Modify: `app/contact/page.tsx:1-39`
- Modify: `app/globals.css`
- Create: `tests/seo-routes.test.ts`

**Interfaces:**
- Consumes: `createPageMetadata`, `serializeJsonLd`, `PERSON_ID`, `SITE_URL` from Task 1
- Produces: `SUPPORTING_PAGE_SEO` entries for `about`, `resume` and `contact`
- Produces: unique metadata and canonicals for `/about`, `/resume`, `/contact`
- Produces: About-page `ProfilePage` JSON-LD

- [ ] **Step 1: Write supporting-route metadata tests**

Import only the pure SEO module (not TSX page components). Assert that `SUPPORTING_PAGE_SEO` produces unique canonical paths, descriptions containing the intended disciplines and titles that remain unique after the root title template. Test the About JSON-LD builder's `mainEntity` against `PERSON_ID`.

- [ ] **Step 2: Run the supporting-route tests and verify failure**

Run: `node --test tests/seo-routes.test.ts`

Expected: FAIL because the pages do not yet use the shared metadata contract or expose profile schema.

- [ ] **Step 3: Implement supporting-page metadata**

Define `SUPPORTING_PAGE_SEO` in `app/lib/seo.ts` and use `createPageMetadata` with these page intents:

- About: `About | Multidisciplinary Designer in Zimbabwe`; biography and hybrid practice.
- Résumé: `Résumé | Graphic, Brand, UI/UX & Product Designer`; experience, tools and role suitability.
- Contact: `Contact | Design Roles, Projects & Collaborations`; employment and client conversations.

Each description must mention Harare or Zimbabwe where natural and must use its exact route as canonical. Export static `metadata` from each page by reading the matching `SUPPORTING_PAGE_SEO` entry through `createPageMetadata`.

- [ ] **Step 4: Add About-page profile schema**

Create `buildProfilePageJsonLd()` in `app/lib/seo.ts`, referencing `PERSON_ID` as `mainEntity`, then render it through `serializeJsonLd` on the About page.

- [ ] **Step 5: Balance the visible supporting-page language**

Update About so graphic/brand and UI/UX/product practice receive equal weight; state availability for Zimbabwean, Southern African, remote and overseas opportunities. Update Contact's lead to welcome both roles and client projects. Keep the current typography and layout; add only targeted CSS needed by new internal text links.

- [ ] **Step 6: Run route tests, lint and build**

Run: `node --test tests/seo-routes.test.ts && npm run lint && npm run build`

Expected: all route tests pass; lint and build succeed.

- [ ] **Step 7: Commit supporting-page SEO**

```bash
git add app/lib/seo.ts app/about/page.tsx app/resume/page.tsx app/contact/page.tsx app/globals.css tests/seo-routes.test.ts
git commit -m "feat: clarify portfolio page search intent"
```

### Task 4: Crawl controls, sitemap and useful 404

**Files:**
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`
- Create: `app/not-found.tsx`
- Modify: `app/globals.css`
- Modify: `tests/seo-routes.test.ts`

**Interfaces:**
- Consumes: `SITE_URL`, `absoluteUrl` from Task 1; `projects` from `app/content/projects.ts`
- Produces: Next.js metadata routes `/robots.txt` and `/sitemap.xml`
- Produces: branded App Router 404 page

- [ ] **Step 1: Add failing robots and sitemap tests**

Assert that robots allows `/`, supplies `https://www.denzelmaupa.co.zw/sitemap.xml`, and identifies the production host. Assert that sitemap returns exactly seven unique production URLs: the homepage, About, Résumé, Contact and the three project routes. Assert project entries come from `projects`, not duplicated literal slugs.

- [ ] **Step 2: Run the route tests and confirm missing-module failures**

Run: `node --test tests/seo-routes.test.ts`

Expected: FAIL because `app/robots.ts` and `app/sitemap.ts` do not exist.

- [ ] **Step 3: Implement robots and sitemap metadata routes**

Export `robots(): MetadataRoute.Robots` and `sitemap(): MetadataRoute.Sitemap`. Use moderate change frequencies: monthly for homepage and supporting pages, yearly for static case studies. Use priorities only as relative hints, with homepage highest.

- [ ] **Step 4: Add the not-found page**

Use the existing wordmark, navigation and editorial typography. Include one `h1`, a concise message and links to `/#work` and `/contact`. Add focused `.not-found-*` styles with responsive behaviour; do not create a separate visual system.

- [ ] **Step 5: Run tests, lint and build**

Run: `node --test tests/seo-routes.test.ts && npm run lint && npm run build`

Expected: tests pass; the build route list includes `/robots.txt`, `/sitemap.xml` and `/_not-found`.

- [ ] **Step 6: Commit crawl controls**

```bash
git add app/robots.ts app/sitemap.ts app/not-found.tsx app/globals.css tests/seo-routes.test.ts
git commit -m "feat: add crawl controls and sitemap"
```

### Task 5: Project-specific metadata and CreativeWork schema

**Files:**
- Modify: `app/content/projects.ts:1-180`
- Modify: `app/work/[slug]/page.tsx:1-417`
- Modify: `app/lib/seo.ts`
- Create: `tests/seo-projects.test.ts`

**Interfaces:**
- Consumes: `Project`, `projects`, `getProject`; SEO primitives from Task 1
- Produces: `Project.seo: { title: string; description: string; keywords: string[]; dateCreated: string }`
- Produces: `buildCreativeWorkJsonLd(project: Project): CreativeWorkJsonLd`
- Produces: `buildProjectMetadata(project: Project): Metadata`

- [ ] **Step 1: Write project SEO contract tests**

Assert that all projects have unique SEO titles and descriptions; title and description are non-empty and project-specific; keywords include location plus the relevant discipline; `dateCreated` uses an ISO year or date supported by visible project data. Assert that each metadata result has the correct canonical, absolute social image and alt text. Assert unknown `getProject` input returns `undefined`.

- [ ] **Step 2: Run project tests and confirm the missing SEO fields**

Run: `node --test tests/seo-projects.test.ts`

Expected: FAIL because `Project.seo` and the project builders are missing.

- [ ] **Step 3: Add verified SEO data to each project**

Use these titles:

- `OpenCred Finance Brand Identity Case Study`
- `TM Pick n Pay Billboard Campaign Case Study`
- `Jericho Studio Portal UI/UX Case Study`

Descriptions must identify the work, Denzel's role, the relevant discipline and Zimbabwe or Harare without exceeding 165 characters. Keywords must stay specific to visible project services and context.

- [ ] **Step 4: Implement project metadata and schema builders**

`buildProjectMetadata` delegates URL and social fields to `createPageMetadata`. `buildCreativeWorkJsonLd` emits name, description, canonical URL, representative image, creator `PERSON_ID`, client/context, supported date, location and keywords. Do not emit ratings, awards or unverifiable outcomes.

- [ ] **Step 5: Replace request-derived project metadata**

Remove `headers()` from `app/work/[slug]/page.tsx`. Use `buildProjectMetadata` in `generateMetadata`; return `{}` for unknown projects. Render one escaped `CreativeWork` JSON-LD script for a valid project. Add a balanced `Discuss a role or project` link to `/contact` near the project footer without disrupting the next-project navigation.

- [ ] **Step 6: Run project tests, aggregate SEO tests, lint and build**

Run: `npm run test:seo && npm run lint && npm run build`

Expected: all SEO tests pass; lint and build succeed; all three static project routes remain generated.

- [ ] **Step 7: Commit project SEO**

```bash
git add app/content/projects.ts app/work/'[slug]'/page.tsx app/lib/seo.ts tests/seo-projects.test.ts
git commit -m "feat: add project metadata and creative work schema"
```

### Task 6: Homepage content, internal links and image semantics

**Files:**
- Modify: `app/page.tsx:390-550`
- Modify: `app/components/ProjectArtwork.tsx:1-72`
- Modify: `app/work/[slug]/page.tsx`
- Modify: `app/globals.css`
- Create: `tests/seo-content.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: project slugs and descriptions from `app/content/projects.ts`
- Produces: crawlable hybrid-positioning copy and descriptive internal links
- Produces: image loading and accessibility rules that preserve existing art direction

- [ ] **Step 1: Write source-level content contract tests**

Read the rendered page source files and assert the homepage contains `Harare, Zimbabwe`, `Southern Africa`, `graphic`, `brand`, `UI/UX`, `product`, `remote` and `international`; assert practice links reference OpenCred, TM Pick n Pay and Jericho Studio Portal routes. Assert decorative duplicate carousel images remain empty-alt and hidden, meaningful project artwork retains descriptive alt text, and below-the-fold case-study raster images declare lazy loading.

- [ ] **Step 2: Run the content test and verify missing positioning/link failures**

Run: `node --test tests/seo-content.test.mjs`

Expected: FAIL because the homepage lacks the full approved market and availability language and practice links.

- [ ] **Step 3: Add the homepage hybrid statement**

Retain the existing `h1`. Replace the hero support line with concise copy that identifies Denzel as a graphic, brand, UI/UX and product designer in Harare, Zimbabwe, working across Southern Africa and open to remote and international roles and projects.

- [ ] **Step 4: Connect practice areas to evidence**

Add descriptive links from Graphic Design to OpenCred and TM Pick n Pay, from UI/UX Design to Jericho Studio Portal, and from Shared Systems to both the relevant brand and product evidence. Preserve the three-card layout and add only the CSS required for understated text links.

- [ ] **Step 5: Finish the image-semantics audit**

Keep duplicate and alternate-state logos empty-alt and `aria-hidden`. Keep meaningful logos and project art descriptive. Add lazy loading to non-critical logo states and case-study images that lack it; do not lazy-load the primary project hero. Do not convert SVG logos or the Three.js canvas to `next/image`.

- [ ] **Step 6: Add the content test to the aggregate script**

Update `test:seo` to include `tests/seo-content.test.mjs`.

- [ ] **Step 7: Run SEO tests, lint and build**

Run: `npm run test:seo && npm run lint && npm run build`

Expected: all checks pass with no visual-component type errors.

- [ ] **Step 8: Commit on-page SEO**

```bash
git add app/page.tsx app/components/ProjectArtwork.tsx app/work/'[slug]'/page.tsx app/globals.css tests/seo-content.test.mjs package.json
git commit -m "feat: strengthen on-page portfolio SEO"
```

### Task 7: Production-oriented SEO audit and launch checklist

**Files:**
- Create: `scripts/verify-seo.mjs`
- Create: `docs/seo-launch-checklist.md`
- Modify: `package.json`

**Interfaces:**
- Consumes: deployed or local base URL through `SEO_BASE_URL`
- Produces: `npm run verify:seo`, exiting non-zero on SEO regressions
- Produces: Google Search Console setup and post-deploy verification checklist

- [ ] **Step 1: Write the audit script assertions before implementation helpers**

The script must check all seven public routes for status 200, one non-empty title, one description, one exact production canonical, one `h1`, valid parseable JSON-LD and internally reachable links. It must check `/robots.txt` and `/sitemap.xml` for status 200 and production URLs, check an invalid project URL for status 404, and check the apex origin redirects to `www` when auditing production.

- [ ] **Step 2: Run the incomplete audit and confirm failure on the current server state**

Start the production build locally in one terminal with `npm run build && npm run start`, then run `SEO_BASE_URL=http://localhost:3000 node scripts/verify-seo.mjs`.

Expected: FAIL until the fetch, extraction and assertion helpers are complete.

- [ ] **Step 3: Complete `scripts/verify-seo.mjs`**

Use built-in `fetch` and small focused helpers `fetchPage(path)`, `extractSingle(html, pattern, label)`, `extractJsonLd(html)` and `assertProductionUrl(value)`. Do not add an HTML parsing dependency. Print a compact per-route pass summary and a final count.

- [ ] **Step 4: Add the audit command**

Add `"verify:seo": "node scripts/verify-seo.mjs"` to `package.json`; default `SEO_BASE_URL` to `http://localhost:3000` and allow the production URL to be supplied explicitly.

- [ ] **Step 5: Write the launch checklist**

Document: set the Google verification environment variable in Vercel; redeploy; verify the domain property or `www` URL-prefix property; submit `/sitemap.xml`; request indexing for homepage and case studies; monitor index coverage, impressions, queries and clicks; record a baseline after indexing. State that Vercel Web Analytics remains optional and out of scope.

- [ ] **Step 6: Run the complete local verification suite**

Run in order:

```bash
npm run test:seo
npm run lint
npm run build
npm run start
SEO_BASE_URL=http://localhost:3000 npm run verify:seo
```

Expected: tests, lint and build pass; audit reports all seven public routes, robots, sitemap and invalid-route checks as passing.

- [ ] **Step 7: Commit the audit tooling**

```bash
git add scripts/verify-seo.mjs docs/seo-launch-checklist.md package.json
git commit -m "test: add portfolio SEO launch audit"
```

### Task 8: Deploy and verify the production domain

**Files:**
- Modify only if a verified production-only defect is found; otherwise no source changes

**Interfaces:**
- Consumes: completed local branch, GitHub/Vercel deployment, `npm run verify:seo`
- Produces: verified production deployment at `https://www.denzelmaupa.co.zw`

- [ ] **Step 1: Review the branch before deployment**

Run: `git status --short && git log --oneline --decorate -10`

Expected: clean working tree; one focused commit per completed task.

- [ ] **Step 2: Push through the repository's established GitHub/Vercel flow**

Confirm the Vercel deployment reaches Ready before treating the site as live. Do not change domain or DNS configuration if the existing deployment remains healthy.

- [ ] **Step 3: Run the production audit**

Run: `SEO_BASE_URL=https://www.denzelmaupa.co.zw npm run verify:seo`

Expected: all route, canonical, robots, sitemap, JSON-LD and redirect checks pass against production.

- [ ] **Step 4: Perform browser smoke checks**

Check desktop and mobile widths for homepage, About, one graphical case study, the product case study, Contact and 404. Confirm no console errors, clipped text, broken images or inaccessible links.

- [ ] **Step 5: Validate structured data and social previews**

Validate homepage, About and all project pages with a Schema.org-compatible validator. Inspect homepage and project Open Graph images through a social-preview debugger or direct metadata fetch.

- [ ] **Step 6: Hand off Search Console actions**

Give Denzel the exact verification and sitemap-submission steps from `docs/seo-launch-checklist.md`. Do not claim indexing until Search Console confirms it.

- [ ] **Step 7: Record any production-only fix**

If verification exposes a defect, add a focused regression assertion, make the smallest fix, rerun the local and production audits, and commit with `fix: correct production SEO verification`. If no defect is found, make no empty commit.
