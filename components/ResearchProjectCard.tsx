import { CheckCircle2, FlaskConical } from "lucide-react";
import type { ResearchProject } from "@/data/research";

type ResearchProjectCardProps = {
  project: ResearchProject;
  index: number;
};

export function ResearchProjectCard({ project, index }: ResearchProjectCardProps) {
  return (
    <article className="rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel md:p-7">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
          <FlaskConical size={20} aria-hidden="true" />
        </span>
        <span className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">
          Project 0{index + 1}
        </span>
      </div>

      <h2 className="text-balance text-2xl font-semibold leading-tight text-white">{project.title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

      <div className="mt-6 border-t border-white/10 pt-5">
        <h3 className="text-sm font-bold uppercase tracking-[.16em] text-slate-500">{project.focusTitle}</h3>
        <ul className="mt-4 grid gap-3">
          {project.focus.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
              <CheckCircle2 size={17} className="mt-1 shrink-0 text-labgreen" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
