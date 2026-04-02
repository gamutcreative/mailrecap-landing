const testimonials = [
  {
    name: "Sarah M.",
    role: "Busy mom of 3",
    quote:
      "I used to miss bills all the time. MailRecap notifies me the second anything important arrives. It's genuinely changed how we manage our household.",
    avatar: "S",
  },
  {
    name: "James T.",
    role: "Remote worker",
    quote:
      "I travel a lot and always worried about missing important mail at home. Now I just check MailRecap from wherever I am. Huge peace of mind.",
    avatar: "J",
  },
  {
    name: "Linda K.",
    role: "Small business owner",
    quote:
      "Every invoice and contract is categorized automatically. I've cut my mail-processing time in half. Worth every penny.",
    avatar: "L",
  },
];

const trustBadges = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    label: "Private & Secure",
    sublabel: "End-to-end encryption",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Works Offline",
    sublabel: "Your data stays on your device",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0021 5.5V3.935M3.055 11A9.005 9.005 0 0112 3m0 18a9.005 9.005 0 008.945-8H19a2 2 0 01-2-2v-1a2 2 0 00-2-2 2 2 0 01-2-2V3.5" />
      </svg>
    ),
    label: "iOS & Android",
    sublabel: "Available everywhere",
  },
];

export default function TrustSignals() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#FAF8F4]">
      <div className="max-w-6xl mx-auto">
        {/* Rating headline */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#D42232] mb-3">
            Trusted by households
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Loved by people who value their time
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-[#5A6170] text-sm">4.9 out of 5 stars · Early access reviews</p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 border border-[#E8E3DC] shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#5A6170] text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D42232]/15 flex items-center justify-center text-[#D42232] font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#111827] text-sm">{t.name}</p>
                  <p className="text-[#5A6170] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-[#E8E3DC]">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#111827]/8 text-[#111827] flex items-center justify-center">
                {badge.icon}
              </div>
              <div>
                <p className="font-bold text-[#111827]">{badge.label}</p>
                <p className="text-sm text-[#5A6170]">{badge.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
