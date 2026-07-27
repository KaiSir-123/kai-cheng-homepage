import { BadgeCheck, MapPin } from "lucide-react";
import type { Activity } from "@/data/activities";

type ActivityCardProps = {
  activity: Activity;
};

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel md:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <span className="rounded-md border border-cyanline/30 bg-cyanline/10 px-3 py-2 text-sm font-semibold text-cyanline">
          {activity.year}
        </span>
        <span className="rounded-md border border-labgreen/30 bg-labgreen/10 px-3 py-2 text-sm font-semibold text-labgreen">
          {activity.type}
        </span>
      </div>

      <h2 className="text-balance text-2xl font-semibold leading-tight text-white md:text-3xl">
        {activity.title}
      </h2>

      <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
        <p className="flex items-start gap-3">
          <BadgeCheck size={17} className="mt-1 shrink-0 text-cyanline" aria-hidden="true" />
          <span>
            <span className="font-semibold text-white">Role:</span> {activity.role}
          </span>
        </p>
        <p className="flex items-start gap-3">
          <MapPin size={17} className="mt-1 shrink-0 text-labgreen" aria-hidden="true" />
          <span>
            <span className="font-semibold text-white">Location:</span> {activity.location}
          </span>
        </p>
      </div>

      <p className="mt-6 border-t border-white/10 pt-5 text-base leading-8 text-slate-300">
        {activity.description}
      </p>
    </article>
  );
}
