import { ArrowDown, GitBranch, Radar } from "lucide-react";
import { methodologySteps } from "@/data/research";

export function ResearchMethodology() {
  return (
    <section id="methodology" className="relative overflow-hidden border-t border-white/10 bg-ink px-5 py-20 sm:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(34,211,238,.09),transparent_26rem)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">Research Methodology</p>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">From sensing to robot localization</h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            The research workflow connects IMU, Stereo Camera, and LiDAR sensing with fusion algorithms, factor graph optimization, and robust robot localization.
          </p>
        </div>

        <div className="rounded-md border border-white/10 bg-slate-950/38 p-5 shadow-panel md:p-7">
          <div className="grid gap-4 lg:grid-cols-4">
            {methodologySteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="min-h-[210px] rounded-md border border-white/10 bg-white/[.045] p-5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                    {index === 0 ? <Radar size={20} aria-hidden="true" /> : <GitBranch size={20} aria-hidden="true" />}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.items.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 bg-white/[.06] px-3 py-2 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {index < methodologySteps.length - 1 ? (
                  <div className="flex justify-center py-2 text-cyanline lg:absolute lg:-right-5 lg:top-1/2 lg:z-10 lg:-translate-y-1/2 lg:py-0">
                    <ArrowDown className="lg:-rotate-90" size={22} aria-hidden="true" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
