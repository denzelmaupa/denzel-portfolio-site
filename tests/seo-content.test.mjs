import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const home = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const artwork = readFileSync(new URL("../app/components/ProjectArtwork.tsx", import.meta.url), "utf8");
const caseStudy = readFileSync(new URL("../app/work/[slug]/page.tsx", import.meta.url), "utf8");

test("homepage visibly positions both design practices and all opportunity regions", () => {
  const hero = home.match(/<div className="hero-foot">([\s\S]*?)<\/div>/)?.[1] ?? "";
  for (const phrase of ["graphic", "brand", "UI/UX", "product", "Harare, Zimbabwe", "Southern Africa", "remote", "international"]) {
    assert.match(hero, new RegExp(phrase, "i"));
  }
});

test("practice areas lead to matching case-study evidence", () => {
  const practice = home.match(/<section className="practice-section"[\s\S]*?<\/section>/)?.[0] ?? "";
  for (const slug of ["opencred-finance", "tm-pick-n-pay-billboard", "jericho-studio-portal"]) {
    assert.ok(practice.includes(`/work/${slug}`));
  }
});

test("duplicate logos are decorative and lower-priority art loads lazily", () => {
  assert.match(home, /aria-hidden=\{duplicate \|\| undefined\}/);
  assert.match(home, /alt=\{duplicate \? "" : brand\.name\}/);
  assert.match(home, /className="brand-logo brand-logo-colour"[\s\S]*?alt=""[\s\S]*?aria-hidden="true"/);
  assert.match(home, /loading="lazy"/);
  assert.match(artwork, /alt="TM Pick n Pay Real Value Always brown shopping bag billboard mock-up"/);
  assert.match(artwork, /loading=\{eager \? "eager" : "lazy"\}/);
  const rasterImages = [...caseStudy.matchAll(/<img\b[^>]*\b(?:src="[^"]+\.(?:jpg|png)|src=\{[^}]+\})[^>]*>/g)];
  assert.ok(rasterImages.length > 0);
  assert.ok(rasterImages.every(([tag]) => tag.includes('loading="lazy"')));
});
