"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F4]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 80 80" width="22" height="22" fill="none" stroke="#D42232" strokeWidth="4" aria-hidden="true">
            <rect x="8" y="20" width="64" height="44" rx="4" />
            <polyline points="8,20 40,48 72,20" />
          </svg>
          <span className="text-[#111827] font-bold text-lg tracking-tight">
            MailRecap
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-stone-500">
          <a href="#how-it-works" className="hover:text-[#111827] transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-[#111827] transition-colors">Pricing</a>
          <a href="/creators-lab" className="hover:text-[#D42232] transition-colors">Creators Lab</a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#download"
          className="hidden sm:inline-block bg-[#D42232] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#b01c29] transition-colors"
        >
          Download App
        </a>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 rounded-md text-stone-500 hover:text-[#111827] hover:bg-stone-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden bg-[#FAF8F4] border-t border-stone-200 px-4 pb-4 pt-2 flex flex-col gap-1">
          <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm font-medium text-stone-600 hover:text-[#111827] py-3 border-b border-stone-100">
            How it works
          </a>
          <a href="#pricing" onClick={() => setOpen(false)} className="text-sm font-medium text-stone-600 hover:text-[#111827] py-3 border-b border-stone-100">
            Pricing
          </a>
          <a href="/creators-lab" onClick={() => setOpen(false)} className="text-sm font-medium text-stone-600 hover:text-[#111827] py-3 border-b border-stone-100">
            Creators Lab
          </a>
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#D42232] text-white px-4 py-3 rounded-lg text-sm font-semibold text-center hover:bg-[#b01c29] transition-colors"
          >
            Download App
          </a>
        </div>
      )}
    </nav>
  );
}
