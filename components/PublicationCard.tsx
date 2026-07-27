"use client";

import { useState } from "react";
import { ArrowUpRight, BookMarked, Braces, FileText } from "lucide-react";
import { BibtexModal } from "@/components/BibtexModal";
import type { Publication } from "@/data/publications";
import { ieeeAuthorProfileUrl } from "@/data/seo";

type PublicationCardProps = {
  publication: Publication;
  index: number;
};

export function PublicationCard({ publication, index }: PublicationCardProps) {
  const [showBibtex, setShowBibtex] = useState(false);

  return (
    <article className="rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel md:p-7">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-md border border-cyanline/30 bg-cyanline/10 px-3 py-2 text-sm font-semibold text-cyanline">
          <BookMarked size={17} aria-hidden="true" />
          Publication 0{index + 1}
        </span>
        <span className="text-sm font-semibold text-slate-400">Kai Cheng - Academic Publications</span>
      </div>

      <h2 className="text-balance text-2xl font-semibold leading-tight text-white md:text-3xl">
        {publication.title}
      </h2>

      <dl className="mt-6 grid gap-4 border-y border-white/10 py-5 text-sm md:grid-cols-[160px_1fr]">
        <dt className="font-semibold text-slate-400">Authors</dt>
        <dd className="leading-7 text-slate-200">{publication.authors}</dd>
        <dt className="font-semibold text-slate-400">Journal</dt>
        <dd className="leading-7 text-slate-200">{publication.journal}</dd>
        <dt className="font-semibold text-slate-400">Year</dt>
        <dd className="leading-7 text-slate-200">{publication.year}</dd>
        <dt className="font-semibold text-slate-400">Publication Information</dt>
        <dd className="leading-7 text-slate-200">{publication.publicationInfo}</dd>
        <dt className="font-semibold text-slate-400">DOI</dt>
        <dd>
          <a href={publication.doiUrl} className="inline-flex items-center gap-2 font-semibold text-cyanline">
            {publication.doi}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </dd>
      </dl>

      <div className="mt-6">
        <h3 className="text-sm font-bold uppercase tracking-[.16em] text-slate-500">Abstract</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{publication.abstract}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" aria-label={`${publication.title} keywords`}>
        {publication.keywords.map((keyword) => (
          <span key={keyword} className="rounded-md border border-white/10 bg-white/[.06] px-3 py-2 text-xs text-slate-300">
            {keyword}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={publication.pdfUrl ?? publication.doiUrl}
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/15 bg-white/[.08] px-4 text-sm font-bold text-white transition hover:bg-white/[.12]"
        >
          <FileText size={17} aria-hidden="true" />
          PDF
        </a>
        <button
          type="button"
          onClick={() => setShowBibtex(true)}
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-labgreen/35 bg-labgreen/10 px-4 text-sm font-bold text-labgreen transition hover:bg-labgreen/15"
        >
          <Braces size={17} aria-hidden="true" />
          BibTeX
        </button>
        <a
          href={ieeeAuthorProfileUrl}
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-cyanline/35 bg-cyanline/10 px-4 text-sm font-bold text-cyanline transition hover:bg-cyanline/15"
        >
          <ArrowUpRight size={17} aria-hidden="true" />
          IEEE Author
        </a>
      </div>

      {showBibtex ? (
        <BibtexModal
          bibtex={publication.bibtex}
          title={publication.title}
          onClose={() => setShowBibtex(false)}
        />
      ) : null}
    </article>
  );
}
