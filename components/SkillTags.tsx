import { Wrench } from "lucide-react";

type SkillGroup = {
  category: string;
  items: string[];
};

type SkillTagsProps = {
  groups: SkillGroup[];
};

export function SkillTags({ groups }: SkillTagsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {groups.map((group) => (
        <article key={group.category} className="rounded-md border border-white/10 bg-white/[.045] p-6 shadow-panel">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
              <Wrench size={18} aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold text-white">{group.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-slate-950/38 px-3 py-2 text-sm font-semibold text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
