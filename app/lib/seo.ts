import type { Metadata } from "next";

export const SITE_URL = "https://www.denzelmaupa.co.zw" as const;
export const SITE_NAME = "Denzel Maupa" as const;
export const PERSON_ID = `${SITE_URL}/#person` as const;

const DEFAULT_IMAGE = "/og-denzel-social.png";
const DEFAULT_IMAGE_ALT = "Denzel Maupa — graphic, brand, UI/UX and product designer";
const ROOT_DESCRIPTION =
  "Denzel Maupa is a graphic, brand, UI/UX and product designer in Harare, Zimbabwe, working across Southern Africa and internationally.";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
};

export function absoluteUrl(path: string): string {
  return new URL(path.startsWith("/") ? path : `/${path}`, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  keywords,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const socialImage = { url: absoluteUrl(image), width: 1200, height: 630, alt: imageAlt };

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_ZW",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    image: absoluteUrl("/images/denzel-maupa-portrait.jpg"),
    description: ROOT_DESCRIPTION,
    jobTitle: "Graphic, brand, UI/UX and product designer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
    sameAs: [
      "https://www.linkedin.com/in/denzel-maupa/",
      "https://www.instagram.com/designed_by_denzel/",
    ],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    creator: { "@id": PERSON_ID },
    inLanguage: "en-ZW",
  };
}

export function buildRootMetadata(googleVerification?: string): Metadata {
  const root = createPageMetadata({
    title: "Denzel Maupa | Graphic, Brand, UI/UX & Product Designer",
    description: ROOT_DESCRIPTION,
    path: "/",
  });

  return {
    ...root,
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Denzel Maupa | Graphic, Brand, UI/UX & Product Designer",
      template: "%s | Denzel Maupa",
    },
    ...(googleVerification ? { verification: { google: googleVerification } } : {}),
  };
}
