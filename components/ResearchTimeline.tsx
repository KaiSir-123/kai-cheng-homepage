import { CircleDot } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { profile } from "@/data/profile";
import type { ResearchTimelineItem } from "@/data/research";

type ResearchTimelineProps = {
  items?: ResearchTimelineItem[];
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function ResearchTimeline({
  items = profile.timeline,
  id = "timeline",
  eyebrow = "Research Timeline",
  title = "Progression of robotics localization research",
  description = "A concise timeline showing the development from robot localization to adaptive multisensor fusion for intelligent robotic systems."
}: ResearchTimelineProps) {
  return (
    <SectionShell
      id={id}
      eyebrow={eyebrow}
      title={title}
      description={description}
    >
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyanline via-labgreen to-transparent md:left-1/2" />
        <div className="grid gap-6">
          {items.map((item, index) => (
            <article
              key={item.year}
              className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                index % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"
              }`}
            >
              <div className="ml-10 rounded-md border border-white/10 bg-white/[.045] p-6 shadow-panel md:ml-0">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                    <CircleDot size={18} aria-hidden="true" />
                  </span>
                  <span className="text-2xl font-semibold text-white">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
