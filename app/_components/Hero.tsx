export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Lifestyle background image with warm navy overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1484981138541-3d074aa97716?w=1920&q=80&fm=webp&fit=crop)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C3A5C]/85 via-[#1C3A5C]/75 to-[#1C3A5C]/60" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-white/20">
            <span className="text-[#E07B54]">★</span>
            <span>5 free scans — no credit card required</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your mail, finally{" "}
            <span className="text-[#E07B54]">under control.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
            MailRecap turns your physical mail into organized, searchable digital records — automatically.
          </p>

          <div id="download" className="flex flex-col sm:flex-row items-start gap-4 flex-wrap">
            <a
              href="https://apps.apple.com/us/app/mailrecap-co/id6756124597"
              className="flex items-center gap-3 bg-[#E07B54] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#C5623A] transition-colors w-full sm:w-auto justify-center shadow-lg shadow-[#E07B54]/30"
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
              className="flex items-center gap-3 bg-white text-[#1C3A5C] px-6 py-3.5 rounded-xl font-semibold hover:bg-[#FAF8F4] transition-colors w-full sm:w-auto justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current shrink-0" aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.24.99.2l.11-.03L13.65 12 4.28.07l-.11-.03a1.4 1.4 0 00-.99.2C2.85.57 2.5 1.22 2.5 2v19.76c0 .78.35 1.43.68 2zm14.4-12.42l-2.5-2.5-8.18-8.18 9.59 5.54a1.5 1.5 0 010 2.6l-.91.54zm-10.68 10.1l8.18-8.18 2.5-2.5.91.54a1.5 1.5 0 010 2.6l-9.59 5.54z" />
              </svg>
              <span>
                <span className="block text-xs text-[#5A6170] leading-none">Get it on</span>
                <span className="block text-base leading-tight">Google Play</span>
              </span>
            </a>

            <a
              href="#how-it-works"
              className="px-6 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold hover:border-white/60 transition-colors w-full sm:w-auto text-center"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>

      {/* Subtle scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
