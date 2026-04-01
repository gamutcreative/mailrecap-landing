export default function Footer() {
  return (
    <footer className="bg-[#0C1461] text-white/40 py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Airmail stripe accent at top */}
      <div
        className="absolute top-0 left-0 right-0 h-3"
        style={{
          background:
            "repeating-linear-gradient(-45deg, #D42232, #D42232 8px, #ffffff 8px, #ffffff 16px, #E8EAF2 16px, #E8EAF2 24px, #ffffff 24px, #ffffff 32px)",
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <a href="/" className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 80 80" width="24" height="24" fill="none" stroke="#D42232" strokeWidth="4">
                <rect x="8" y="20" width="64" height="44" rx="4" />
                <polyline points="8,20 40,48 72,20" />
              </svg>
              <span
                className="text-xl text-[#D42232]"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                mailrecap.co
              </span>
            </a>
            <p className="text-sm max-w-xs leading-relaxed">
              Scan, understand, and act on your physical mail — in English and Spanish.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/creators-lab" className="hover:text-[#D42232] transition-colors text-white/40 font-medium">Creators Lab ✦</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1a2480] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} MailRecap. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter/X" className="hover:text-white transition-colors">𝕏</a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
