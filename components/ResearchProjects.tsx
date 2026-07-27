import { BriefcaseBusiness, FlaskConical, Landmark } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { profile } from "@/data/profile";

const icons = [Landmark, FlaskConical, BriefcaseBusiness];

export function ResearchProjects() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Research Projects"
      title="Research experience and applied systems"
      description="Project experience is arranged as a concise research timeline, balancing academic credibility with engineering implementation."
    >
      <div className="relative grid gap-4 lg:grid-cols-3">
        {profile.projects.map((project, index) => {
          const Icon = icons[index];
          return (
            <article key={project.title} className="rounded-md border border-white/10 bg-white/[.045] p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-labgreen/30 bg-labgreen/10 text-labgreen">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">
                  Research 0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
