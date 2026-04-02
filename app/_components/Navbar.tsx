export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C3A5C]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 80 80" width="22" height="22" fill="none" stroke="#E07B54" strokeWidth="4" aria-hidden="true">
            <rect x="8" y="20" width="64" height="44" rx="4" />
            <polyline points="8,20 40,48 72,20" />
          </svg>
          <span className="text-white font-bold text-lg tracking-tight">
            MailRecap
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-white/65">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="/creators-lab" className="hover:text-[#E07B54] transition-colors text-white/65">
            Creators Lab
          </a>
        </div>

        <a
          href="#download"
          className="bg-[#E07B54] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#C5623A] transition-colors"
        >
          Download App
        </a>
      </div>
    </nav>
  );
}
