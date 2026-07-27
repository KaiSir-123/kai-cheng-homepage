"use client";

import { X } from "lucide-react";

type BibtexModalProps = {
  bibtex: string;
  onClose: () => void;
  title: string;
};

export function BibtexModal({ bibtex, onClose, title }: BibtexModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/82 px-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`BibTeX for ${title}`}>
      <div className="w-full max-w-3xl rounded-md border border-white/10 bg-[#0b1422] shadow-panel">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-cyanline">BibTeX</p>
            <h2 className="mt-1 line-clamp-1 text-base font-semibold text-white">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-300 transition hover:bg-white/[.08] hover:text-white"
            aria-label="Close BibTeX dialog"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <pre className="max-h-[60vh] overflow-auto p-5 text-sm leading-7 text-slate-200">
          <code>{bibtex}</code>
        </pre>
      </div>
    </div>
  );
}
