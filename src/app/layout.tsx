import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { siteConfig } from "@/shared/config/site";
import { absoluteUrl, createJsonLd } from "@/shared/lib/seo";

import "@fontsource-variable/manrope";
import "@fontsource-variable/unbounded";
import "./globals.css";

const ogImageUrl = absoluteUrl("/og-image.png");

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.title,
  authors: [{ name: siteConfig.name, url: absoluteUrl() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "marketing",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: absoluteUrl()
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: absoluteUrl(),
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Алина Насретдинова — SMM-специалист"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Алина Насретдинова — SMM-специалист"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#32404B",
  colorScheme: "light"
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const jsonLd = createJsonLd();

  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
