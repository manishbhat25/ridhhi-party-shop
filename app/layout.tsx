import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit, Noto_Sans_Devanagari } from "next/font/google";
import { site, fullLocation } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const noto = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
  display: "swap",
  weight: ["400", "500", "600"],
});

const title = `${site.name} | Party shop in ${site.locality}, ${site.city}`;
const description = `Party supplies, gifts, balloons and decorations in ${site.locality}, ${site.city}. Walk in with an idea. Walk out ready to celebrate.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    `party shop in ${site.locality}`,
    `party shop in ${site.city}`,
    `birthday decoration shop in ${site.locality}`,
    `gift shop in ${site.locality}`,
    `balloon shop ${site.locality}`,
    `party supplies ${site.city}`,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.siteUrl,
    siteName: site.name,
    title: `${site.name} — ${site.locality}, ${site.city}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.locality}, ${site.city}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "shopping",
  other: {
    "geo.region": "IN-UP",
    "geo.placename": fullLocation,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF7FB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${outfit.variable} ${noto.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-ink">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
