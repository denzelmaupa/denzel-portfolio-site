import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const description =
    "Zimbabwean graphic designer and visual communicator shaping brand identities, advertising campaigns and digital experiences from Harare to the world.";
  const socialDescription =
    "Maximised minimalism. Creative simplicity. Branding, advertising and UI/UX from Harare to the world.";
  const socialImage = {
    url: "/og-denzel-social.png",
    width: 1200,
    height: 630,
    alt: "Denzel Maupa — Graphic Designer and Visual Communicator",
  };

  return {
    metadataBase: base,
    title: "Denzel Maupa — Graphic Designer & Visual Communicator",
    description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Denzel Maupa — Graphic Designer & Visual Communicator",
      description: socialDescription,
      type: "website",
      siteName: "Denzel Maupa",
      locale: "en_ZW",
      url: "/",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: "Denzel Maupa — Graphic Designer & Visual Communicator",
      description: socialDescription,
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
