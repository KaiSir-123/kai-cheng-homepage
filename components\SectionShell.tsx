import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section id={id} className="relative overflow-hidden border-t border-white/10 bg-ink px-5 py-20 sm:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,.08),transparent_28rem)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">{eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">{title}</h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-slate-300">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
