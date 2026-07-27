import { ArrowUpRight, FileText } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { profile } from "@/data/profile";

export function SelectedPublications() {
  return (
    <SectionShell
      id="publications"
      eyebrow="Selected Publications"
      title="Publications in mobile robot localization"
      description="Selected papers are presented as research cards, emphasizing full titles, venues, and technical keywords for academic discovery and Baidu SEO."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {profile.publications.map((paper, index) => (
          <article
            key={paper.title}
            className="rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                <FileText size={18} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-slate-400">Paper 0{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold leading-8 text-white">{paper.title}</h3>
            <p className="mt-4 text-sm font-semibold text-labgreen">{paper.venue}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {paper.keywords.map((keyword) => (
                <span key={keyword} className="rounded-md border border-white/10 bg-white/[.06] px-3 py-2 text-xs text-slate-300">
                  {keyword}
                </span>
              ))}
            </div>
            <a
              href="#publications"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyanline"
            >
              PDF
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
