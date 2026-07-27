import type { Metadata } from "next";
import {
  ArrowLeft,
  BadgeCheck,
  ExternalLink,
  GraduationCap,
  Mail,
  Quote,
  UserRound
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProfileSection } from "@/components/ProfileSection";
import { ResearchInterestCard } from "@/components/ResearchInterestCard";
import { SectionShell } from "@/components/SectionShell";
import { SkillTags } from "@/components/SkillTags";
import { profile } from "@/data/profile";
import {
  academicProfilePlaceholders,
  extendedSeoKeywords,
  ieeeAuthorProfileUrl,
  siteDescription
} from "@/data/seo";

export const metadata: Metadata = {
  title:
    "Kai Cheng 程凯 About - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM",
  description: siteDescription,
  keywords: ["Kai Cheng About", ...extendedSeoKeywords],
  alternates: {
    canonical: "/about/"
  },
  openGraph: {
    title:
      "Kai Cheng 程凯 About - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM",
    description: siteDescription,
    url: `${profile.siteUrl}/about/`,
    siteName: "Kai Cheng Research Homepage",
    locale: "zh_CN",
    type: "profile"
  }
};

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kai Cheng",
    alternateName: "程凯",
    jobTitle: "Control Science and Engineering Researcher",
    gender: "Male",
    url: `${profile.siteUrl}/about/`,
    description:
      "Kai Cheng is a researcher in Control Science and Engineering focusing on mobile robot localization, multisensor fusion, SLAM, factor graph optimization and intelligent robotic systems.",
    knowsAbout: [
      "Mobile Robot Localization",
      "Multisensor Fusion",
      "SLAM",
      "Factor Graph Optimization",
      "Control Science and Engineering",
      "Intelligent Navigation",
      "LiDAR",
      "IMU",
      "Stereo Camera"
    ],
    sameAs: [
      ieeeAuthorProfileUrl,
      academicProfilePlaceholders.googleScholar,
      academicProfilePlaceholders.orcid,
      academicProfilePlaceholders.researchGate
    ]
  };

  return (
    <>
      <Header />
      <main className="bg-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
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
              Kai Cheng - About
            </p>
            <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
              <div>
                <h1 className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-7xl">
                  About Kai Cheng
                </h1>
                <div className="mt-7 grid gap-2">
                  <p className="text-3xl font-semibold text-white">程凯</p>
                  <p className="text-2xl font-semibold text-cyanline">Kai Cheng</p>
                  <p className="text-base font-semibold text-slate-300">
                    Control Science and Engineering Researcher
                  </p>
                </div>
              </div>

              <div className="rounded-md border border-white/10 bg-slate-950/32 p-6 shadow-panel">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                  <UserRound size={22} aria-hidden="true" />
                </div>
                <p className="text-lg leading-8 text-slate-200">
                  Researcher focusing on mobile robot localization, multisensor fusion, factor graph optimization and SLAM.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Kai Cheng / 程凯 works on Control Science and Engineering research for intelligent robotic systems, with academic publications and research projects related to robot localization and sensor fusion.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="About page keywords">
              {profile.aboutKeywords.map((keyword) => (
                <span key={keyword} className="rounded-md border border-white/10 bg-white/[.07] px-3 py-2 text-sm text-slate-200">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ProfileSection />

        <SectionShell
          id="research-interests"
          eyebrow="Research Interests"
          title="Core research directions"
          description="Research interests are centered on robust localization and perception for mobile robots in indoor and outdoor environments."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {profile.researchInterests.map((interest, index) => (
              <ResearchInterestCard key={interest.title} interest={interest} index={index} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="academic-background"
          eyebrow="Academic Background"
          title="Education and research experience"
          description="This section reserves a structured academic timeline for education, research experience, and academic activities."
        >
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyanline via-labgreen to-transparent" />
            <div className="grid gap-5">
              {profile.academicBackground.map((item) => (
                <article key={item.event} className="relative ml-10 rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel">
                  <span className="absolute -left-[2.35rem] top-6 flex h-8 w-8 items-center justify-center rounded-md border border-cyanline/40 bg-ink text-cyanline">
                    <GraduationCap size={16} aria-hidden="true" />
                  </span>
                  <p className="text-sm font-bold uppercase tracking-[.16em] text-cyanline">{item.year}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.event}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>

        <section id="research-philosophy" className="relative overflow-hidden border-t border-white/10 bg-[#07101d] px-5 py-20 sm:px-8 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(52,211,153,.09),transparent_28rem)]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[.45fr_1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">Research Philosophy</p>
              <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
                Reliable perception, robust localization
              </h2>
            </div>
            <article className="rounded-md border border-white/10 bg-white/[.045] p-6 shadow-panel md:p-8">
              <Quote size={28} className="mb-5 text-cyanline" aria-hidden="true" />
              <p className="text-xl leading-9 text-slate-100">{profile.philosophy.en}</p>
              <p className="mt-5 text-base leading-8 text-slate-300">{profile.philosophy.zh}</p>
            </article>
          </div>
        </section>

        <SectionShell
          id="skills"
          eyebrow="Skills & Technologies"
          title="Technical stack for robotics research"
          description="Technical tags cover programming, robotics frameworks, sensor systems, and machine learning methods used in localization research."
        >
          <SkillTags groups={profile.skills} />
        </SectionShell>

        <section id="contact" className="relative border-t border-white/10 bg-ink px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">Contact</p>
                <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
                  Academic profiles
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300">
                Contact and academic profile links are reserved for later completion. These placeholders can be replaced with formal Email, Google Scholar, ResearchGate, and ORCID links.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {profile.contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group rounded-md border border-white/10 bg-slate-950/38 p-5 shadow-panel transition hover:border-cyanline/35 hover:bg-cyanline/10"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                      {link.label === "Email" ? <Mail size={18} aria-hidden="true" /> : <BadgeCheck size={18} aria-hidden="true" />}
                    </span>
                    <ExternalLink size={16} className="text-slate-500 transition group-hover:text-cyanline" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{link.label}</h3>
                  <p className="mt-3 break-words text-sm leading-6 text-slate-400">{link.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
