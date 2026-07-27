import { Award, BriefcaseBusiness, FileText, Landmark } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { profile } from "@/data/profile";

const icons = [FileText, Award, Landmark, BriefcaseBusiness];

export function AcademicAchievement() {
  return (
    <SectionShell
      id="achievements"
      eyebrow="Academic Achievement"
      title="Research output and project experience"
      description="The homepage keeps academic evidence visible in plain text for visitors and search engines: publications, research projects, foundation-related work, and enterprise research."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {profile.achievements.map((item, index) => {
          const Icon = icons[index];
          return (
            <article key={item.label} className="rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <b className="text-3xl font-semibold text-white">{item.value}</b>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.label}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
