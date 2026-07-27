import type { Metadata } from "next";
import { ArrowLeft, BarChart3 } from "lucide-react";
import { Header } from "@/components/Header";
import { ResearchMethodology } from "@/components/ResearchMethodology";
import { ResearchProjectCard } from "@/components/ResearchProjectCard";
import { ResearchTimeline } from "@/components/ResearchTimeline";
import { SectionShell } from "@/components/SectionShell";
import { profile } from "@/data/profile";
import {
  researchKeywords,
  researchOverview,
  researchProjects,
  researchTimeline
} from "@/data/research";
import { extendedSeoKeywords, siteDescription } from "@/data/seo";

export const metadata: Metadata = {
  title:
    "Kai Cheng 程凯 Research Projects - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion and SLAM",
  description:
    "Research projects of Kai Cheng / 程凯 in Control Science and Engineering, including Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization, SLAM and intelligent robotic systems.",
  keywords: ["Kai Cheng Research Projects", "程凯 科研项目", ...extendedSeoKeywords],
  alternates: {
    canonical: "/research/"
  },
  openGraph: {
    title:
      "Kai Cheng 程凯 Research Projects - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion and SLAM",
    description: siteDescription,
    url: `${profile.siteUrl}/research/`,
    siteName: "Kai Cheng Research Homepage",
    locale: "zh_CN",
    type: "website"
  }
};

export default function ResearchPage() {
  const researchProjectJsonLd = researchProjects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: project.title,
    description: project.description,
    researcher: {
      "@type": "Person",
      name: "Kai Cheng",
      alternateName: "程凯"
    },
    keywords: [
      "Control Science and Engineering",
      "Robot Localization",
      "Multisensor Fusion",
      "Intelligent Robotic Systems",
      "SLAM",
      "Graph Optimization"
    ],
    about: project.focus
  }));

  return (
    <>
      <Header />
      <main className="bg-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(researchProjectJsonLd) }}
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
              Kai Cheng - Research Projects
            </p>
            <h1 className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-7xl">
              Research Projects
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              Research activities on mobile robot localization, multisensor fusion, graph optimization and intelligent robotic systems.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-400">
              This page summarizes Kai Cheng&apos;s research in Control Science and Engineering, with emphasis on Robot Localization, Multisensor Fusion, Intelligent Robotic Systems, SLAM, and graph optimization.
            </p>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Research page keywords">
              {researchKeywords.map((keyword) => (
                <span key={keyword} className="rounded-md border border-white/10 bg-white/[.07] px-3 py-2 text-sm text-slate-200">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <SectionShell
          id="research-overview"
          eyebrow="Research Overview"
          title="Research scope and systems"
          description="A compact summary of research areas, project types, and sensor systems used in mobile robot localization and intelligent navigation research."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {researchOverview.map((item) => (
              <article key={item.label} className="rounded-md border border-white/10 bg-white/[.045] p-6 shadow-panel">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                  <BarChart3 size={20} aria-hidden="true" />
                </div>
                <b className="block text-3xl font-semibold text-white">{item.value}</b>
                <span className="mt-2 block text-sm font-semibold text-slate-300">{item.label}</span>
              </article>
            ))}
          </div>
        </SectionShell>

        <ResearchTimeline
          items={researchTimeline}
          id="research-timeline"
          eyebrow="Research Timeline"
          title="Research development route"
          description="A structured research timeline from mobile robot localization to adaptive intelligent localization systems."
        />

        <section id="project-cards" className="relative border-t border-white/10 bg-ink px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">Research Project Cards</p>
                <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">Project experience</h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300">
                Project cards summarize foundation-related research and enterprise project experience around robot localization, multisensor fusion, and intelligent perception.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {researchProjects.map((project, index) => (
                <ResearchProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <ResearchMethodology />
      </main>
    </>
  );
}
