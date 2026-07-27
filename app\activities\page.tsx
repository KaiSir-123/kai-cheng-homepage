import type { Metadata } from "next";
import { ArrowLeft, Globe2, Quote, Tags } from "lucide-react";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionShell } from "@/components/SectionShell";
import { profile } from "@/data/profile";
import {
  activities,
  activityConnection,
  activityKeywords,
  demonstratedSkills,
  professionalDevelopment
} from "@/data/activities";
import { extendedSeoKeywords, siteDescription } from "@/data/seo";

export const metadata: Metadata = {
  title:
    "Kai Cheng 程凯 Activities - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM",
  description:
    "Academic and professional activities of Kai Cheng / 程凯, a Control Science and Engineering Researcher focusing on Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM, including World Economic Forum Annual Meeting Davos volunteer service.",
  keywords: [
    "Kai Cheng Activities",
    "Academic Activities",
    "International Experience",
    "Professional Service",
    "World Economic Forum Annual Meeting",
    "Davos",
    "Volunteer Service Participant",
    "Global Communication",
    ...extendedSeoKeywords
  ],
  alternates: {
    canonical: "/activities/"
  },
  openGraph: {
    title:
      "Kai Cheng 程凯 Activities - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM",
    description: siteDescription,
    url: `${profile.siteUrl}/activities/`,
    siteName: "Kai Cheng Research Homepage",
    locale: "zh_CN",
    type: "website"
  }
};

export default function ActivitiesPage() {
  const eventJsonLd = activities.map((activity) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name:
      activity.title === "World Economic Forum Annual Meeting (Davos)"
        ? "World Economic Forum Annual Meeting 2025"
        : activity.title,
    location: {
      "@type": "Place",
      name: activity.location
    },
    participant: {
      "@type": "Person",
      name: "Kai Cheng",
      alternateName: "程凯"
    },
    description: activity.description,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode"
  }));

  return (
    <>
      <Header />
      <main className="bg-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
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
              Kai Cheng - Academic & Professional Activities
            </p>
            <div className="grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-end">
              <div>
                <h1 className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-7xl">
                  Academic & Professional Activities
                </h1>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                  International activities, academic engagement and professional experiences.
                </p>
                <p className="mt-4 max-w-4xl text-base leading-7 text-slate-400">
                  This page records selected academic and professional activities of Kai Cheng / 程凯, including international experience, professional service, and global communication.
                </p>
              </div>

              <article className="rounded-md border border-white/10 bg-slate-950/32 p-6 shadow-panel">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                  <Globe2 size={22} aria-hidden="true" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[.16em] text-slate-500">
                  Selected Activity
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  World Economic Forum Annual Meeting
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Davos, Switzerland · Volunteer Service Participant · International Event Service
                </p>
              </article>
            </div>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Activities page keywords">
              {activityKeywords.map((keyword) => (
                <span key={keyword} className="rounded-md border border-white/10 bg-white/[.07] px-3 py-2 text-sm text-slate-200">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ActivityTimeline activities={activities} />

        <SectionShell
          id="professional-development"
          eyebrow="Professional Development"
          title="Expandable academic activity records"
          description="This section is prepared for future academic conferences, research collaboration, and technical exchange records."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {professionalDevelopment.map((item) => (
              <article key={item.title} className="rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                  <Globe2 size={20} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="skills-demonstrated"
          eyebrow="Skills Demonstrated"
          title="Professional capabilities"
          description="International event service and academic engagement reflect communication, coordination, service, and collaboration capabilities."
        >
          <div className="flex flex-wrap gap-3">
            {demonstratedSkills.map((skill) => (
              <span key={skill} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[.045] px-4 py-3 text-sm font-semibold text-slate-200">
                <Tags size={16} className="text-cyanline" aria-hidden="true" />
                {skill}
              </span>
            ))}
          </div>
        </SectionShell>

        <section id="connection-with-research" className="relative overflow-hidden border-t border-white/10 bg-[#07101d] px-5 py-20 sm:px-8 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(34,211,238,.08),transparent_30rem)]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[.45fr_1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">
                Connection with Research
              </p>
              <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
                Broader perspective for engineering research
              </h2>
            </div>
            <article className="rounded-md border border-white/10 bg-white/[.045] p-6 shadow-panel md:p-8">
              <Quote size={28} className="mb-5 text-cyanline" aria-hidden="true" />
              <p className="text-xl leading-9 text-slate-100">{activityConnection.en}</p>
              <p className="mt-5 text-base leading-8 text-slate-300">{activityConnection.zh}</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
