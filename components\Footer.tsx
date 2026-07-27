import { Cpu } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#060d18] px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
            <Cpu size={19} aria-hidden="true" />
          </span>
          <div>
            <p className="font-semibold text-white">{profile.nameEn}</p>
            <p className="text-sm text-slate-400">Researcher in Control Science and Engineering</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">© 2026 Kai Cheng. Mobile robot localization and multisensor fusion research.</p>
      </div>
    </footer>
  );
}
