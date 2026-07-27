import { Cpu } from "lucide-react";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about/" },
  { label: "Research Areas", href: "/#research-areas" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Publications", href: "/publications/" },
  { label: "Research", href: "/research/" },
  { label: "Activities", href: "/activities/" },
  { label: "Blog", href: "/blog/" }
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/#home" className="flex items-center gap-3" aria-label="Kai Cheng homepage">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
            <Cpu size={18} aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-white">{profile.nameZh}</span>
            <span className="block text-xs text-slate-400">{profile.nameEn} Research</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[.08] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/about/#contact"
          className="rounded-md border border-cyanline/35 px-4 py-2 text-sm font-semibold text-cyanline transition hover:bg-cyanline/10"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
