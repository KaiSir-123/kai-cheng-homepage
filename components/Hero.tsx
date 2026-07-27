import { ArrowDownToLine, BookOpen, FlaskConical, Navigation } from "lucide-react";
import { LidarScene } from "@/components/LidarScene";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,.13),transparent_32rem),radial-gradient(circle_at_80%_26%,rgba(52,211,153,.10),transparent_30rem),linear-gradient(135deg,#08111f,#101827_58%,#07131b)]" />
      <div className="noise-layer absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
        <div className="z-10 max-w-3xl">
          <p className="mb-5 inline-flex rounded-md border border-cyanline/30 bg-cyanline/10 px-3 py-2 text-sm font-semibold text-cyanline">
            程凯 · Kai Cheng · Robotics Research
          </p>

          <h1 className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-7xl lg:text-8xl">
            {profile.nameEn}
            <span className="mt-4 block text-3xl font-semibold text-cyanline sm:text-5xl">{profile.nameZh}</span>
          </h1>

          <p className="mt-7 text-xl font-medium text-slate-200 sm:text-2xl">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.description}</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Core areas include Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization, and SLAM.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#publications"
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-cyanline px-5 text-sm font-bold text-ink shadow-[0_0_30px_rgba(34,211,238,.28)] transition hover:bg-signal"
            >
              <BookOpen size={18} aria-hidden="true" />
              Academic Publications
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/15 bg-white/[.08] px-5 text-sm font-bold text-white transition hover:bg-white/[.12]"
            >
              <FlaskConical size={18} aria-hidden="true" />
              Research Projects
            </a>
            <a
              href="/cv-kai-cheng.pdf"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-labgreen/35 bg-labgreen/10 px-5 text-sm font-bold text-labgreen transition hover:bg-labgreen/15"
            >
              <ArrowDownToLine size={18} aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-slate-500">Research Keywords</p>
            <div className="flex flex-wrap gap-2" aria-label="Research keywords">
            {profile.heroTags.map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-white/[.07] px-3 py-2 text-sm text-slate-200">
                {item}
              </span>
            ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[430px] overflow-hidden rounded-md border border-white/10 bg-white/[.035] shadow-panel lg:min-h-[620px]">
          <LidarScene />
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink/92 to-transparent p-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {profile.highlights.map((item) => (
                <div key={item.label} className="border-l border-cyanline/40 pl-3">
                  <b className="block text-2xl font-semibold text-white">{item.value}</b>
                  <span className="mt-1 block text-xs leading-5 text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-md border border-amberglow/35 bg-amberglow/10 px-3 py-2 text-xs font-semibold text-amberglow">
            <Navigation size={15} aria-hidden="true" />
            LiDAR Trajectory Lab
          </div>
        </div>
      </div>
    </section>
  );
}
