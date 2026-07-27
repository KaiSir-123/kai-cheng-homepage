import { Languages, UserRound } from "lucide-react";
import { profile } from "@/data/profile";

export function ProfileSection() {
  return (
    <section id="personal-profile" className="relative overflow-hidden border-t border-white/10 bg-ink px-5 py-20 sm:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(34,211,238,.08),transparent_30rem)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">Personal Profile</p>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Research identity
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            A bilingual profile helps Chinese and international search engines recognize Kai Cheng / 程凯 and his research in Control Science and Engineering.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-md border border-white/10 bg-white/[.045] p-6 shadow-panel md:p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
              <UserRound size={20} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-white">中文简介</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {profile.profileSummary.zh}
            </p>
          </article>

          <article className="rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel md:p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-labgreen/30 bg-labgreen/10 text-labgreen">
              <Languages size={20} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-white">English Profile</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {profile.profileSummary.en}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
