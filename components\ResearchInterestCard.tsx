import { Compass } from "lucide-react";

type ResearchInterestCardProps = {
  interest: {
    title: string;
    description: string;
  };
  index: number;
};

export function ResearchInterestCard({ interest, index }: ResearchInterestCardProps) {
  return (
    <article className="rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
          <Compass size={20} aria-hidden="true" />
        </span>
        <span className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">
          Area 0{index + 1}
        </span>
      </div>
      <h3 className="text-xl font-semibold leading-tight text-white">{interest.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{interest.description}</p>
    </article>
  );
}
