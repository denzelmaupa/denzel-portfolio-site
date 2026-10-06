import assert from "node:assert/strict";
import test from "node:test";
import {
  SITE_URL,
  PERSON_ID,
  SUPPORTING_PAGE_SEO,
  createPageMetadata,
  buildProfilePageJsonLd,
} from "../app/lib/seo.ts";

test("supporting routes have distinct titles and production canonicals", () => {
  const entries = Object.values(SUPPORTING_PAGE_SEO);
  assert.equal(entries.length, 3);
  assert.equal(new Set(entries.map((entry) => entry.title)).size, 3);
  assert.deepEqual(entries.map((entry) => createPageMetadata(entry).alternates?.canonical), [
    `${SITE_URL}/about`,
    `${SITE_URL}/resume`,
    `${SITE_URL}/contact`,
  ]);
  assert.match(SUPPORTING_PAGE_SEO.about.description, /brand.*UI\/UX.*product/i);
  assert.match(SUPPORTING_PAGE_SEO.resume.description, /graphic.*product/i);
  assert.match(SUPPORTING_PAGE_SEO.contact.description, /roles.*projects/i);
});

test("About profile schema identifies Denzel as its main entity", () => {
  const profile = buildProfilePageJsonLd();
  assert.equal(profile["@type"], "ProfilePage");
  assert.equal(profile.url, `${SITE_URL}/about`);
  assert.equal(profile.mainEntity["@id"], PERSON_ID);
});
