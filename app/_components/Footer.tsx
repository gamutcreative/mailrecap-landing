export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white/50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 80 80" width="22" height="22" fill="none" stroke="#D42232" strokeWidth="4" aria-hidden="true">
                <rect x="8" y="20" width="64" height="44" rx="4" />
                <polyline points="8,20 40,48 72,20" />
              </svg>
              <span className="text-white font-bold text-lg tracking-tight">MailRecap</span>
            </a>
            <p className="text-sm max-w-xs leading-relaxed mb-3">
              Scan, understand, and act on your physical mail — in English and Spanish.
            </p>
            <p className="text-sm font-medium text-[#D42232]">Mail made simple.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="mailto:support@mailrecap.co" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="/creators-lab" className="hover:text-[#D42232] transition-colors">Creators Lab</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} MailRecap. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/mailrecap" aria-label="Twitter/X" className="hover:text-white transition-colors">𝕏</a>
            <a href="https://instagram.com/mailrecap" aria-label="Instagram" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://tiktok.com/@mailrecap" aria-label="TikTok" className="hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
