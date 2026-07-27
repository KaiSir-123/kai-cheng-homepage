import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AcademicAchievement } from "@/components/AcademicAchievement";
import { Footer } from "@/components/Footer";
import { ResearchAreas } from "@/components/ResearchAreas";
import { ResearchProjects } from "@/components/ResearchProjects";
import { ResearchTimeline } from "@/components/ResearchTimeline";
import { SelectedPublications } from "@/components/SelectedPublications";
import { profile } from "@/data/profile";
import { extendedSeoKeywords, siteDescription } from "@/data/seo";

export const metadata: Metadata = {
  title:
    "Kai Cheng 程凯 - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion and SLAM",
  description: siteDescription,
  keywords: extendedSeoKeywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title:
      "Kai Cheng 程凯 - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion and SLAM",
    description: siteDescription,
    url: profile.siteUrl,
    siteName: "Kai Cheng Research Homepage",
    locale: "zh_CN",
    type: "profile"
  }
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ResearchAreas />
        <ResearchTimeline />
        <AcademicAchievement />
        <SelectedPublications />
        <ResearchProjects />
      </main>
      <Footer />
    </>
  );
}
