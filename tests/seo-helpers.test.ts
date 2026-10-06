import assert from "node:assert/strict";
import test from "node:test";
import {
  SITE_URL,
  PERSON_ID,
  absoluteUrl,
  createPageMetadata,
  serializeJsonLd,
  buildPersonJsonLd,
  buildWebsiteJsonLd,
  buildRootMetadata,
} from "../app/lib/seo.ts";

test("absoluteUrl always uses the production www origin", () => {
  assert.equal(SITE_URL, "https://www.denzelmaupa.co.zw");
  assert.equal(absoluteUrl("/about"), `${SITE_URL}/about`);
  assert.equal(absoluteUrl("/"), `${SITE_URL}/`);
});

test("page metadata includes canonical and social URLs", () => {
  const metadata = createPageMetadata({
    title: "About Denzel",
    description: "A design profile in Harare, Zimbabwe.",
    path: "/about",
  });
  assert.equal(metadata.alternates?.canonical, `${SITE_URL}/about`);
  assert.equal(metadata.openGraph?.url, `${SITE_URL}/about`);
  assert.deepEqual(metadata.openGraph?.images, [{
    url: `${SITE_URL}/og-denzel-social.png`,
    width: 1200,
    height: 630,
    alt: "Denzel Maupa — graphic, brand, UI/UX and product designer",
  }]);
});

test("JSON-LD serialization escapes opening angle brackets", () => {
  assert.equal(serializeJsonLd({ name: "<script>alert(1)</script>" }),
    '{"name":"\\u003cscript>alert(1)\\u003c/script>"}');
});

test("person and website schemas share stable IDs", () => {
  const person = buildPersonJsonLd();
  const website = buildWebsiteJsonLd();
  assert.equal(PERSON_ID, `${SITE_URL}/#person`);
  assert.equal(person["@id"], PERSON_ID);
  assert.equal(website.creator["@id"], PERSON_ID);
  assert.equal(person.address.addressLocality, "Harare");
  assert.equal(person.address.addressCountry, "ZW");
  assert.deepEqual(person.sameAs, [
    "https://www.linkedin.com/in/denzel-maupa/",
    "https://www.instagram.com/designed_by_denzel/",
  ]);
});

test("root requirements balance disciplines and omit absent verification", () => {
  const metadata = buildRootMetadata();
  assert.deepEqual(metadata.title, {
    default: "Denzel Maupa | Graphic, Brand, UI/UX & Product Designer",
    template: "%s | Denzel Maupa",
  });
  for (const term of ["Harare", "Zimbabwe", "Southern Africa", "brand", "UI/UX", "product"]) {
    assert.match(metadata.description ?? "", new RegExp(term, "i"));
  }
  assert.equal(metadata.verification, undefined);
  assert.equal(buildRootMetadata("google-token").verification?.google, "google-token");
});
