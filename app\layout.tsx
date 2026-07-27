import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import { extendedSeoKeywords, siteDescription } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title:
    "Kai Cheng 程凯 - Control Science and Engineering Researcher, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM",
  description: siteDescription,
  keywords: extendedSeoKeywords,
  authors: [{ name: "程凯 Kai Cheng" }],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg"
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title:
      "Kai Cheng 程凯 - Control Science and Engineering Researcher, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM",
    description: siteDescription,
    url: profile.siteUrl,
    siteName: "Kai Cheng Research Homepage",
    locale: "zh_CN",
    type: "profile"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "程凯",
    alternateName: "Kai Cheng",
    gender: "Male",
    jobTitle: "Control Science and Engineering Researcher",
    url: profile.siteUrl,
    description: siteDescription,
    knowsAbout: extendedSeoKeywords,
    sameAs: profile.contactLinks
      .filter((link) => !link.href.startsWith("mailto:"))
      .map((link) => link.href)
  };

  return (
    <html lang="zh-CN">
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
