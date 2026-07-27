import { CalendarDays } from "lucide-react";
import { ActivityCard } from "@/components/ActivityCard";
import type { Activity } from "@/data/activities";

type ActivityTimelineProps = {
  activities: Activity[];
};

export function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <section id="activities-timeline" className="relative overflow-hidden border-t border-white/10 bg-ink px-5 py-20 sm:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(34,211,238,.08),transparent_30rem),radial-gradient(circle_at_84%_18%,rgba(52,211,153,.07),transparent_28rem)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">
              Activities Timeline
            </p>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              International and professional engagement
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            A structured timeline of selected academic, international, and professional service activities connected to research development.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyanline via-labgreen to-transparent md:left-8" />
          <div className="grid gap-6">
            {activities.map((activity) => (
              <div key={`${activity.year}-${activity.title}`} className="relative pl-12 md:pl-20">
                <span className="absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-md border border-cyanline/40 bg-ink text-cyanline md:left-4">
                  <CalendarDays size={17} aria-hidden="true" />
                </span>
                <ActivityCard activity={activity} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
