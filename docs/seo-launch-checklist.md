# Portfolio SEO launch checklist

Canonical site: `https://www.denzelmaupa.co.zw`

## Before requesting indexing

1. Confirm the production deployment is Ready in Vercel. Run `SEO_BASE_URL=https://www.denzelmaupa.co.zw npm run verify:seo` from the repository. It checks the seven public routes, their titles, descriptions, canonicals, structured data, social images and internal links, plus robots, sitemap, 404 and the apex redirect.
2. Open the homepage, About, Contact and all three case studies at desktop and mobile sizes. Confirm images load, links work and no text is clipped.
3. Choose one Google Search Console property:
   - **Domain property:** `denzelmaupa.co.zw` covers both apex and `www`. Google requires DNS verification; add the TXT record it provides in Webzim's DNS settings.
   - **URL-prefix property:** `https://www.denzelmaupa.co.zw/` covers the canonical site. Choose HTML tag verification, copy only its `content` token, and set it as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel's Production environment variables. Redeploy, then click **Verify** in Search Console. Leave the variable blank until a token exists.
4. In Search Console's **Sitemaps** report, submit `https://www.denzelmaupa.co.zw/sitemap.xml` and confirm Google can read it. The sitemap should list exactly seven public URLs. The site's robots file also advertises it.
5. Use **URL Inspection** for the homepage and each case study. Run **Test live URL** and, if indexable, **Request indexing** where useful. A request is not a guarantee of indexing or rankings.

## After launch

- Check the **Page indexing** report for canonical, crawl or exclusion issues. Use URL Inspection to see Google's selected canonical after indexing.
- Once data is available, record a baseline for indexed pages, impressions, clicks and search queries. Review these monthly, including searches for brand/graphic design and UI/UX/product design in Zimbabwe, Southern Africa and remote contexts.
- Replace or expand case-study assets only with approved, accurate material. Update the sitemap naturally through the project data when a public project is added; do not invent `lastmod` dates.
- Vercel Web Analytics is optional and outside this SEO implementation.

Google references: [property and verification types](https://support.google.com/webmasters/answer/34592?hl=en), [Sitemaps report](https://support.google.com/webmasters/answer/7451001?hl=en), [URL Inspection and indexing requests](https://support.google.com/webmasters/answer/9012289?hl=en).
