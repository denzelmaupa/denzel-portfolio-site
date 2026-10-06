import { Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import { buildPersonJsonLd, buildRootMetadata, buildWebsiteJsonLd, serializeJsonLd } from "./lib/seo";
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

export const metadata = buildRootMetadata(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${mono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildPersonJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildWebsiteJsonLd()) }} />
        {children}
      </body>
    </html>
  );
}
