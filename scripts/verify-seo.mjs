import assert from "node:assert/strict";
import { projects } from "../app/content/projects.ts";

const SITE_URL = "https://www.denzelmaupa.co.zw";
const base = new URL(process.env.SEO_BASE_URL ?? "http://localhost:3000");
const routes = ["/", "/about", "/resume", "/contact", ...projects.map(({ slug }) => `/work/${slug}`)];
const cache = new Map();

async function fetchPage(path) {
  const url = new URL(path, base);
  const key = `${url.pathname}${url.search}`;
  if (!cache.has(key)) {
    cache.set(key, fetch(url).then(async (response) => ({
      status: response.status,
      body: await response.text(),
      url: response.url,
    })));
  }
  return cache.get(key);
}

function extractSingle(html, pattern, label) {
  const matches = [...html.matchAll(pattern)];
  assert.equal(matches.length, 1, `Expected one ${label}, found ${matches.length}`);
  assert.ok(matches[0][1]?.trim(), `${label} must not be empty`);
  return matches[0][1].trim();
}

function tagAttribute(tag, attribute, label) {
  const match = tag.match(new RegExp(`\\b${attribute}=["']([^"']+)["']`, "i"));
  assert.ok(match?.[1], `${label} needs a ${attribute} attribute`);
  return match[1];
}

function extractJsonLd(html) {
  const scripts = [...html.matchAll(/<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(scripts.length > 0, "Expected at least one JSON-LD script");
  return scripts.map(([, value]) => JSON.parse(value));
}

function assertProductionUrl(value) {
  const url = new URL(value);
  assert.equal(url.origin, SITE_URL, `Non-production URL: ${value}`);
  return url;
}

async function verifyRoute(path) {
  const { status, body } = await fetchPage(path);
  assert.equal(status, 200, `${path} returned ${status}`);

  extractSingle(body, /<title\b[^>]*>([\s\S]*?)<\/title>/gi, `${path} title`);
  const descriptionTag = extractSingle(body, /(<meta\b(?=[^>]*\bname=["']description["'])[^>]*>)/gi, `${path} description tag`);
  assert.ok(tagAttribute(descriptionTag, "content", `${path} description`).length > 40);
  const canonicalTag = extractSingle(body, /(<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>)/gi, `${path} canonical tag`);
  const canonical = assertProductionUrl(tagAttribute(canonicalTag, "href", `${path} canonical`));
  assert.equal(canonical.href, new URL(path, SITE_URL).href);
  assert.equal([...body.matchAll(/<h1\b/gi)].length, 1, `${path} must have exactly one h1`);
  extractJsonLd(body);

  const imageTag = extractSingle(body, /(<meta\b(?=[^>]*\bproperty=["']og:image["'])[^>]*>)/gi, `${path} social image tag`);
  const socialImage = assertProductionUrl(tagAttribute(imageTag, "content", `${path} social image`));
  const imageResponse = await fetchPage(socialImage.pathname);
  assert.equal(imageResponse.status, 200, `${path} social image returned ${imageResponse.status}`);

  for (const [, href] of body.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)) {
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const target = new URL(href, new URL(path, base)).pathname;
    const linkedPage = await fetchPage(target);
    assert.equal(linkedPage.status, 200, `${path} links to ${target}, which returned ${linkedPage.status}`);
  }
  console.log(`✓ ${path}`);
}

for (const path of routes) await verifyRoute(path);

const robots = await fetchPage("/robots.txt");
assert.equal(robots.status, 200);
assert.match(robots.body, /User-Agent:\s*\*/i);
assert.ok(robots.body.includes(`Sitemap: ${SITE_URL}/sitemap.xml`));
assert.ok(robots.body.includes(`Host: ${SITE_URL}`));
console.log("✓ /robots.txt");

const sitemap = await fetchPage("/sitemap.xml");
assert.equal(sitemap.status, 200);
const sitemapUrls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
assert.equal(sitemapUrls.length, routes.length);
assert.deepEqual(new Set(sitemapUrls), new Set(routes.map((path) => `${SITE_URL}${path}`)));
sitemapUrls.forEach(assertProductionUrl);
console.log("✓ /sitemap.xml");

const missing = await fetchPage("/work/this-project-does-not-exist");
assert.equal(missing.status, 404);
console.log("✓ unknown project → 404");

if (base.origin === SITE_URL) {
  const apex = await fetch("https://denzelmaupa.co.zw/", { redirect: "manual" });
  assert.ok([301, 302, 307, 308].includes(apex.status), `Apex returned ${apex.status}`);
  assert.equal(new URL(apex.headers.get("location"), "https://denzelmaupa.co.zw").origin, SITE_URL);
  console.log("✓ apex → www redirect");
}

console.log(`SEO audit passed: ${routes.length} public routes, robots, sitemap, 404${base.origin === SITE_URL ? ", redirect" : ""}.`);
