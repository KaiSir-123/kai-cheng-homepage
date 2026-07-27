import type { Metadata } from "next";
import { ArrowLeft, BarChart3, Tags } from "lucide-react";
import { Header } from "@/components/Header";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionShell } from "@/components/SectionShell";
import { profile } from "@/data/profile";
import {
  publicationKeywords,
  publications,
  publicationStats,
  researchTopics
} from "@/data/publications";
import { extendedSeoKeywords, ieeeAuthorProfileUrl, siteDescription } from "@/data/seo";

export const metadata: Metadata = {
  title:
    "Kai Cheng 程凯 Publications - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM",
  description:
    "Academic publications of Kai Cheng / 程凯 in Control Science and Engineering, covering Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization, SLAM, LiDAR, IMU and Stereo Camera.",
  keywords: ["Kai Cheng Publications", "程凯 论文", ...extendedSeoKeywords],
  alternates: {
    canonical: "/publications/"
  },
  openGraph: {
    title:
      "Kai Cheng 程凯 Publications - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM",
    description: siteDescription,
    url: `${profile.siteUrl}/publications/`,
    siteName: "Kai Cheng Research Homepage",
    locale: "zh_CN",
    type: "website"
  }
};

export default function PublicationsPage() {
  const scholarlyArticles = publications.map((publication) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: publication.title,
    name: publication.title,
    author: {
      "@type": "Person",
      name: "Kai Cheng",
      alternateName: "程凯",
      sameAs: ieeeAuthorProfileUrl
    },
    description: publication.abstract,
    keywords: [
      "Mobile Robot Localization",
      "Multisensor Fusion",
      "Factor Graph Optimization",
      "SLAM",
      ...publication.keywords
    ],
    isPartOf: {
      "@type": "Periodical",
      name: publication.journal
    },
    datePublished: publication.year,
    pagination: publication.publicationInfo,
    doi: publication.doi,
    url: publication.doiUrl
  }));

  return (
    <>
      <Header />
      <main className="bg-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticles) }}
        />

        <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,.13),transparent_32rem),radial-gradient(circle_at_82%_20%,rgba(52,211,153,.10),transparent_28rem),linear-gradient(135deg,#08111f,#101827_58%,#07131b)]" />
          <div className="noise-layer absolute inset-0 opacity-70" />
          <div className="relative mx-auto w-full max-w-7xl">
            <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyanline">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Homepage
            </a>
            <p className="mb-5 inline-flex rounded-md border border-cyanline/30 bg-cyanline/10 px-3 py-2 text-sm font-semibold text-cyanline">
              Kai Cheng - Academic Publications
            </p>
            <h1 className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-7xl">
              Publications
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              Research publications on mobile robot localization, multisensor fusion, graph optimization, and intelligent robotic systems.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-400">
              This page highlights Kai Cheng&apos;s academic publications in Control Science and Engineering, with research topics including Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization, SLAM, LiDAR, IMU, and visual-inertial navigation.
            </p>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Publication page keywords">
              {publicationKeywords.map((keyword) => (
                <span key={keyword} className="rounded-md border border-white/10 bg-white/[.07] px-3 py-2 text-sm text-slate-200">
                  {keyword}
                </span>
              ))}
            </div>
            <a
              href={ieeeAuthorProfileUrl}
              className="mt-6 inline-flex rounded-md border border-cyanline/35 px-4 py-2 text-sm font-semibold text-cyanline transition hover:bg-cyanline/10"
            >
              IEEE Author Profile
            </a>
          </div>
        </section>

        <SectionShell
          id="publication-overview"
          eyebrow="Publication Overview"
          title="Academic output overview"
          description="A compact overview of publications, research keywords, and sensor modalities involved in Kai Cheng's mobile robot localization research."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {publicationStats.map((stat) => (
              <article key={stat.label} className="rounded-md border border-white/10 bg-white/[.045] p-6 shadow-panel">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                  <BarChart3 size={20} aria-hidden="true" />
                </div>
                <b className="block text-4xl font-semibold text-white">{stat.value}</b>
                <span className="mt-2 block text-sm font-semibold text-slate-300">{stat.label}</span>
              </article>
            ))}
          </div>
        </SectionShell>

        <section id="publication-list" className="relative border-t border-white/10 bg-ink px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">Publication List</p>
              <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">Selected research papers</h2>
            </div>
            <div className="grid gap-6">
              {publications.map((publication, index) => (
                <PublicationCard key={publication.id} publication={publication} index={index} />
              ))}
            </div>
          </div>
        </section>

        <SectionShell
          id="research-topics"
          eyebrow="Research Topics"
          title="Technical terms for academic discovery"
          description="These topics connect the publications with mobile robot localization, multisensor fusion, factor graph optimization, and SLAM research."
        >
          <div className="flex flex-wrap gap-3">
            {researchTopics.map((topic) => (
              <span key={topic} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-slate-950/38 px-4 py-3 text-sm font-semibold text-slate-200">
                <Tags size={16} className="text-cyanline" aria-hidden="true" />
                {topic}
              </span>
            ))}
          </div>
        </SectionShell>
      </main>
    </>
  );
}
