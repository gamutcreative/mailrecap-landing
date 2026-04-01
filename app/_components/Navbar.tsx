export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C1461]">
      {/* Airmail stripe accent at top */}
      <div
        className="h-3 w-full"
        style={{
          background:
            "repeating-linear-gradient(-45deg, #D42232, #D42232 8px, #ffffff 8px, #ffffff 16px, #0C1461 16px, #0C1461 24px, #ffffff 24px, #ffffff 32px)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <svg viewBox="0 0 80 80" width="24" height="24" fill="none" stroke="#D42232" strokeWidth="4">
            <rect x="8" y="20" width="64" height="44" rx="4" />
            <polyline points="8,20 40,48 72,20" />
          </svg>
          <span
            className="text-2xl text-[#D42232]"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >
            mailrecap.co
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-white/75">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="/creators-lab" className="hover:text-[#D42232] transition-colors font-semibold text-white">
            Creators Lab ✦
          </a>
        </div>
        <a
          href="#download"
          className="bg-[#D42232] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#a81b28] transition-colors"
        >
          Download App
        </a>
      </div>
    </nav>
  );
}
