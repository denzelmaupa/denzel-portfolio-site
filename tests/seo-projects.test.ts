import assert from "node:assert/strict";
import test from "node:test";
import { getProject, projects } from "../app/content/projects.ts";
import { PERSON_ID, SITE_URL, buildCreativeWorkJsonLd, buildProjectMetadata } from "../app/lib/seo.ts";

test("case studies have unique, factual search descriptions", () => {
  assert.equal(projects.length, 3);
  assert.equal(new Set(projects.map((project) => project.seo.title)).size, projects.length);
  assert.equal(new Set(projects.map((project) => project.seo.description)).size, projects.length);
  for (const project of projects) {
    assert.ok(project.seo.title.includes(project.title));
    assert.ok(project.seo.description.length > 80 && project.seo.description.length <= 165);
    assert.match(project.seo.description, /Denzel|designer|designed/i);
    assert.match(project.seo.description, /Zimbabwe|Harare/i);
    assert.ok(project.seo.keywords.some((keyword) => /Zimbabwe|Harare/i.test(keyword)));
    assert.match(project.seo.dateCreated, /^20\d{2}(?:-\d{2}(?:-\d{2})?)?$/);
    assert.ok(project.year.includes(project.seo.dateCreated.slice(0, 4)));
  }
  assert.equal(getProject("not-a-real-project"), undefined);
});

test("project metadata uses stable production URLs and accessible social art", () => {
  for (const project of projects) {
    const metadata = buildProjectMetadata(project);
    assert.equal(metadata.alternates?.canonical, `${SITE_URL}/work/${project.slug}`);
    assert.equal(metadata.description, project.seo.description);
    assert.equal(metadata.openGraph?.url, `${SITE_URL}/work/${project.slug}`);
    const image = metadata.openGraph?.images?.[0];
    assert.ok(image && typeof image === "object" && "url" in image);
    assert.equal(image.url, `${SITE_URL}${project.socialImage}`);
    assert.equal(image.alt, project.socialImageAlt);
  }
});

test("CreativeWork schema connects each project to Denzel and its case study", () => {
  for (const project of projects) {
    const schema = buildCreativeWorkJsonLd(project);
    assert.equal(schema["@type"], "CreativeWork");
    assert.equal(schema.url, `${SITE_URL}/work/${project.slug}`);
    assert.equal(schema.creator["@id"], PERSON_ID);
    assert.equal(schema.image, `${SITE_URL}${project.socialImage}`);
    assert.equal(schema.dateCreated, project.seo.dateCreated);
    assert.equal(schema.locationCreated.name, project.location);
  }
});
