# Denzel Maupa Portfolio SEO Design

**Date:** 2026-10-06  
**Site:** `https://www.denzelmaupa.co.zw`  
**Project:** Existing Next.js portfolio deployed on Vercel

## Objective

Improve the portfolio's legitimate search visibility without compromising its visual identity or turning it into keyword-heavy marketing copy.

The site should position Denzel Maupa equally across two connected practices:

1. Graphic design, brand identity, advertising and visual communication.
2. UI/UX design, product design and AI-assisted digital product development.

The primary geographic market is Zimbabwe and Southern Africa. The site must also communicate availability for remote roles, international client work and onsite opportunities overseas. Employment opportunities and client enquiries have equal conversion priority.

## Success Criteria

- Search engines can crawl and index every intended public page.
- The production `www` domain is the single canonical source.
- Search engines can identify Denzel, his location, professional disciplines and portfolio projects through visible content and structured data.
- Every page targets a distinct, relevant search intent without competing unnecessarily with other pages.
- Recruiters and prospective clients can understand Denzel's capabilities and reach the contact page from relevant evidence.
- Social shares show accurate project-specific titles, descriptions and images.
- The implementation passes the project build and lint checks and is verified against the deployed production site.

Rankings are not treated as an immediate or guaranteed outcome. Initial success is measured through index coverage, impressions, queries and clicks after Google Search Console is connected.

## Audience and Search Intent

### Primary audiences

- Recruiters and hiring managers seeking graphic, brand, UI/UX or product designers.
- Zimbabwean and Southern African organisations seeking design support.
- International teams seeking remote designers or candidates open to relocation and onsite work.
- Prospective clients looking for brand identity, advertising, campaign or digital product work.

### Search themes

Search language will be used naturally and only where relevant. Priority themes include:

- graphic designer Zimbabwe
- brand designer Harare
- UI/UX designer Zimbabwe
- product designer Zimbabwe
- Southern African graphic designer
- remote brand designer
- remote UI/UX designer
- visual identity designer
- advertising designer
- AI-assisted product designer

The site will not repeat all terms on every page. Each page receives a focused topic and supporting vocabulary.

## Page Architecture and Search Roles

### Homepage

The homepage is the central hybrid positioning page. It will retain the expressive line “Maximised minimalism. Creative simplicity.” and add concise, crawlable supporting copy that identifies Denzel as a graphic, brand, UI/UX and product designer based in Harare, Zimbabwe.

It will introduce both disciplines with equal weight, show selected evidence, communicate regional and international availability, and route visitors to the relevant case studies, résumé and contact page.

### About

The About page will explain Denzel's background, design philosophy, cross-disciplinary practice and location. It will support searches for the person and professional profile rather than duplicate service-heavy homepage language.

### Résumé

The Résumé page will emphasise employment experience, skills, tools and role suitability. It will be the strongest recruiter-facing page while remaining accessible to clients who need evidence of professional experience.

### OpenCred Finance case study

The OpenCred page will target brand identity, logo design, financial-services branding and Zimbabwean design context. Claims will remain grounded in the documented role, collaborative naming process and produced applications.

### TM Pick n Pay case study

The TM Pick n Pay page will target billboard design, outdoor advertising, campaign concept development and nationwide Zimbabwean rollout. Its copy will emphasise visual clarity at driving speed and multi-format production adaptation.

### Jericho Studio Portal case study

The Jericho Studio Portal page will target UI/UX design, product design, internal workflow systems, React, Supabase and AI-assisted development. It will distinguish product ownership and design decisions from the role of AI tools without overstating engineering expertise.

### Contact

The Contact page will invite both employment conversations and client or collaboration enquiries. It will include location and availability language consistent with the rest of the site.

## Content Principles

- Preserve the portfolio's concise editorial tone and visual hierarchy.
- Add context only where it improves understanding for both people and search engines.
- Avoid keyword stuffing, generic service-page copy and unsupported superlatives.
- Keep the creative headline while pairing it with a descriptive professional statement.
- Use one clear page-level heading and a logical heading hierarchy.
- Add descriptive internal links between capabilities, evidence and conversion pages.
- Keep client, role, date, location and agency-credit statements accurate.
- Balance recruiter and client calls to action rather than privileging one audience.

No blog or insights section is included in this phase. The information architecture will allow one to be added later if Denzel chooses to publish consistently.

## Metadata and Canonical Strategy

- Set `https://www.denzelmaupa.co.zw` as the stable metadata base.
- Keep the apex domain redirecting to `www` through Vercel.
- Give every route a unique title and description aligned with its page role.
- Use absolute canonical URLs for the homepage, About, Résumé, Contact and every case study.
- Retain project-specific Open Graph images and ensure the homepage has a valid 1200 × 630 social image.
- Keep `en_ZW` as the Open Graph locale and use English document language.
- Avoid request-header-derived canonical hosts so preview or alternate hosts cannot become canonical.

## Crawl and Indexing Foundation

### Robots

Add `app/robots.ts` to:

- Allow crawling of public production pages.
- Reference the production sitemap.
- Use the production canonical host.

Preview deployments must not be presented as canonical or intentionally submitted for indexing. Vercel's deployment controls and response headers will be checked rather than relying only on page metadata.

### Sitemap

Add `app/sitemap.ts` containing:

- `/`
- `/about`
- `/resume`
- `/contact`
- `/work/opencred-finance`
- `/work/tm-pick-n-pay-billboard`
- `/work/jericho-studio-portal`

Entries will use production URLs and appropriate change-frequency and priority hints without implying that static case studies change frequently.

### Not-found behaviour

Add a useful App Router `not-found.tsx` response that preserves navigation and returns users to the work index. Invalid project slugs must continue to return an actual 404 status.

## Structured Data

Structured data will be rendered as valid JSON-LD using Schema.org vocabulary.

### Site-wide entities

- `Person` for Denzel Maupa, including professional description, Harare/Zimbabwe location and verified public profile links.
- `WebSite` for the portfolio and its canonical URL.
- `ProfilePage` for the About page, with Denzel as the main entity.

### Project entities

Each case study will publish a `CreativeWork` entity with:

- Name and description.
- Canonical URL and representative image.
- Creator attribution to Denzel.
- Client or organisation context where appropriate.
- Date or year information supported by the case study.
- Relevant discipline and keywords derived from the project's documented services.

Structured data will describe visible content only. It will not introduce ratings, awards, employment claims or services that are absent from the page.

## Internal Linking and Conversion

- The homepage capability statements will link to the strongest matching case studies.
- Case studies will retain the next-project pathway and add contextual links where they help visitors assess related expertise.
- About and Résumé will link to evidence rather than listing unsupported capabilities in isolation.
- Contact prompts will appear after visitors have encountered enough evidence to act.
- Employment, remote-work, relocation and project language will be balanced across the site.

## Images and Performance

- Audit all meaningful images for accurate, concise alternative text.
- Treat decorative brand marks and visual effects appropriately so they do not add noisy accessibility or SEO text.
- Prioritise the true above-the-fold image or visual where applicable.
- Lazy-load below-the-fold case-study media.
- Use Next.js image optimisation where it provides a measurable benefit without breaking SVG assets, art direction or the existing visual presentation.
- Review the homepage's Three.js experience and asset preloads to ensure the crawlable introduction and core content do not depend on client-side execution.
- Avoid adding SEO libraries when the Next.js Metadata API and small JSON-LD helpers are sufficient.

## Measurement and External Setup

Google Search Console is the required measurement platform for this phase. The implementation will provide a safe place for a verification token, but the actual token must come from Denzel's Google account.

After deployment:

1. Verify the `www.denzelmaupa.co.zw` property or the full domain property in Google Search Console.
2. Submit `https://www.denzelmaupa.co.zw/sitemap.xml`.
3. Request indexing for the homepage and core case studies.
4. Monitor index coverage, impressions, search queries and clicks.

Vercel Web Analytics may be added later as an optional privacy-conscious traffic view. It is not required for indexing and is outside this implementation unless separately approved.

## Error Handling and Safety

- Missing project content continues to use Next.js `notFound()`.
- Metadata generation must fall back safely if a project does not exist.
- JSON-LD must be serialised without allowing unsafe HTML content.
- Canonical and sitemap URLs must not depend on preview request headers.
- Existing user content, project credits and visual assets must be preserved unless a change is explicitly part of this design.
- Search Console credentials or verification tokens must never be committed if the selected verification method treats them as secrets.

## Verification

Before deployment:

- Run the production build.
- Run linting.
- Inspect generated metadata for every public route.
- Confirm each route has one intended canonical URL.
- Validate that `robots.txt` and `sitemap.xml` build successfully.
- Validate JSON-LD syntax and ensure it matches visible content.
- Check heading hierarchy, link destinations and meaningful image alt text.
- Verify crawlable core text is present in the server-rendered HTML.

After deployment:

- Confirm the apex domain redirects to the `www` canonical domain.
- Confirm all public routes return the expected status codes.
- Confirm `robots.txt` and `sitemap.xml` return 200 responses.
- Inspect production metadata and social-preview URLs.
- Check that project pages are reachable from internal links.
- Perform a browser and console smoke test across desktop and mobile layouts.
- Run structured-data validation against the production pages.

## Out of Scope

- Guaranteed rankings or traffic targets.
- Paid search advertising.
- A blog or recurring content programme.
- Fabricated testimonials, ratings, awards or project outcomes.
- Changes to project facts that have not been verified by Denzel.
- Ongoing Search Console monitoring after the initial setup unless separately requested.
