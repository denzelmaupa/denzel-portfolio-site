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

  return {
    metadataBase: base,
    title: "Mara Okafor — Independent Graphic Designer",
    description:
      "Identity, art direction and editorial design for people making culture move forward.",
    openGraph: {
      title: "Mara Okafor — Independent Graphic Designer",
      description: "Visual systems for culture, commerce and change.",
      type: "website",
      images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 909 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mara Okafor — Independent Graphic Designer",
      description: "Visual systems for culture, commerce and change.",
      images: [new URL("/og.png", base).toString()],
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
