export default function Mission() {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80&fm=webp&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-[#1C3A5C]/80" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#E07B54] mb-6">
          Why we built this
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-6">
          Life is complicated.
          <br />
          Your mail doesn&apos;t have to be.
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-4 max-w-2xl mx-auto">
          MailRecap was built for people who want more control over their household and less stress from the stuff that piles up. We believe that managing your mail should take minutes, not hours — and that everyone deserves clarity on what matters.
        </p>
        <p className="text-xl font-semibold text-[#E07B54] mb-10">
          Mail made simple.
        </p>
        <a
          href="#download"
          className="inline-flex items-center gap-2 bg-[#E07B54] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#C5623A] transition-colors text-lg shadow-lg shadow-black/20"
        >
          Start for Free
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
