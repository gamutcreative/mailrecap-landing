export default function DownloadCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#111827]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#D42232] mb-4">
          Ready when you are
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Take control of your mailbox today
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
          Start with 5 free scans — no credit card required. Available on iOS and Android.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://apps.apple.com/us/app/mailrecap-co/id6756124597"
            className="flex items-center gap-3 bg-[#D42232] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#b01c29] transition-colors w-full sm:w-auto justify-center shadow-lg shadow-[#D42232]/25"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current shrink-0" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.24 1.31-2.22 3.91.03 3.1 2.72 4.13 2.75 4.14l-.08.17zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>
              <span className="block text-xs text-white/75 leading-none">Download on the</span>
              <span className="block text-base leading-tight">App Store</span>
            </span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.mailrecap"
            className="flex items-center gap-3 bg-white text-[#111827] px-6 py-3.5 rounded-xl font-semibold hover:bg-[#FAF8F4] transition-colors w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current shrink-0" aria-hidden="true">
              <path d="M3.18 23.76c.3.17.64.24.99.2l.11-.03L13.65 12 4.28.07l-.11-.03a1.4 1.4 0 00-.99.2C2.85.57 2.5 1.22 2.5 2v19.76c0 .78.35 1.43.68 2zm14.4-12.42l-2.5-2.5-8.18-8.18 9.59 5.54a1.5 1.5 0 010 2.6l-.91.54zm-10.68 10.1l8.18-8.18 2.5-2.5.91.54a1.5 1.5 0 010 2.6l-9.59 5.54z" />
            </svg>
            <span>
              <span className="block text-xs text-[#5A6170] leading-none">Get it on</span>
              <span className="block text-base leading-tight">Google Play</span>
            </span>
          </a>
        </div>

        <p className="text-white/40 text-sm mt-6">5 free scans · No credit card required · Cancel anytime</p>
      </div>
    </section>
  );
}
