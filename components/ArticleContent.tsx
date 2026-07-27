import { CheckCircle2, FileText } from "lucide-react";
import type { BlogArticle } from "@/data/blog";

type ArticleContentProps = {
  article: BlogArticle;
};

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article className="rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel md:p-8">
      <div className="mb-8 rounded-md border border-cyanline/25 bg-cyanline/10 p-5">
        <p className="text-sm font-bold uppercase tracking-[.16em] text-cyanline">
          Abstract
        </p>
        <p className="mt-3 text-base leading-8 text-slate-200">{article.abstract}</p>
      </div>

      <div className="grid gap-8">
        {article.content.map((section) => (
          <section key={section.heading}>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                <FileText size={18} aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
            </div>

            <div className="grid gap-4 text-base leading-8 text-slate-300">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {section.points ? (
              <ul className="mt-5 grid gap-3">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle2 size={17} className="mt-1 shrink-0 text-labgreen" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <section className="mt-10 border-t border-white/10 pt-8">
        <h2 className="text-2xl font-semibold text-white">Related Publications</h2>
        <div className="mt-5 grid gap-3">
          {article.relatedPublications.map((publication) => (
            <p key={publication} className="rounded-md border border-white/10 bg-white/[.045] p-4 text-sm leading-7 text-slate-300">
              {publication}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t border-white/10 pt-8">
        <h2 className="text-2xl font-semibold text-white">Markdown Extension</h2>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          This article data model already reserves a Markdown field, so future long-form technical notes can be expanded without changing the page structure.
        </p>
      </section>
    </article>
  );
}
