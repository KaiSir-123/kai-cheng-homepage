import { ArrowUpRight, BookOpen, CalendarDays } from "lucide-react";
import type { BlogArticle } from "@/data/blog";

type BlogCardProps = {
  article: BlogArticle;
  index: number;
};

export function BlogCard({ article, index }: BlogCardProps) {
  return (
    <article className="group rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel transition hover:border-cyanline/35 hover:bg-cyanline/10 md:p-7">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
          <BookOpen size={20} aria-hidden="true" />
        </span>
        <span className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">
          Article 0{index + 1}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
        <span className="rounded-md border border-labgreen/30 bg-labgreen/10 px-3 py-1.5 font-semibold text-labgreen">
          {article.category}
        </span>
        <span className="inline-flex items-center gap-2">
          <CalendarDays size={15} aria-hidden="true" />
          {article.date}
        </span>
      </div>

      <h2 className="text-balance text-2xl font-semibold leading-tight text-white">
        {article.title}
      </h2>
      <p className="mt-3 text-base font-semibold leading-7 text-cyanline">
        {article.titleEn}
      </p>
      <p className="mt-5 text-sm leading-7 text-slate-300">{article.abstract}</p>

      <div className="mt-6 flex flex-wrap gap-2" aria-label={`${article.titleEn} keywords`}>
        {article.keywords.map((keyword) => (
          <span key={keyword} className="rounded-md border border-white/10 bg-white/[.045] px-3 py-2 text-xs font-semibold text-slate-300">
            {keyword}
          </span>
        ))}
      </div>

      <a
        href={`/blog/${article.slug}/`}
        className="mt-7 inline-flex items-center gap-2 rounded-md border border-cyanline/35 px-4 py-2 text-sm font-semibold text-cyanline transition group-hover:bg-cyanline/10"
      >
        Read Article
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}
