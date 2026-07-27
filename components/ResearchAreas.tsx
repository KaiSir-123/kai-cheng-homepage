import { Binary, MapPinned, Network, Radar } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { profile } from "@/data/profile";

const icons = [Radar, MapPinned, Network, Binary];

export function ResearchAreas() {
  return (
    <SectionShell
      id="research-areas"
      eyebrow="Research Areas"
      title="Robot localization research stack"
      description="The homepage presents a compact research profile around sensing, estimation, optimization, and robot navigation."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {profile.researchAreas.map((area, index) => {
          const Icon = icons[index];
          return (
            <article
              key={area.title}
              className="min-h-[260px] rounded-md border border-white/10 bg-white/[.045] p-6 shadow-panel transition hover:border-cyanline/40 hover:bg-white/[.065]"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                <Icon size={21} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">{area.title}</h3>
              <p className="mt-2 text-sm font-semibold text-labgreen">{area.detail}</p>
              <p className="mt-5 text-sm leading-7 text-slate-300">{area.description}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
