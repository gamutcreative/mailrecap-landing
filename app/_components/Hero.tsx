export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 bg-[#0C1461] relative overflow-hidden">
      {/* Airmail stripe accent at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-3"
        style={{
          background:
            "repeating-linear-gradient(-45deg, #D42232, #D42232 8px, #ffffff 8px, #ffffff 16px, #0C1461 16px, #0C1461 24px, #ffffff 24px, #ffffff 32px)",
        }}
      />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#D42232]/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <span>★</span> 5 free scans to get started
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Scan, understand, and act on your mail{" "}
          <span className="text-[#D42232]">— without the pile-up</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Take a photo, get a plain-language summary, and know exactly what to do next.
          MailRecap turns every piece of mail into a clear, actionable item.
        </p>
        <div id="download" className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <a
            href="https://apps.apple.com/us/app/mailrecap-co/id6756124597"
            className="flex items-center gap-3 bg-white text-[#0C1461] px-6 py-3.5 rounded-xl font-semibold hover:bg-[#E8EAF2] transition-colors w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.24 1.31-2.22 3.91.03 3.1 2.72 4.13 2.75 4.14l-.08.17zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>
              <span className="block text-xs text-[#0C1461]/60 leading-none">Download on the</span>
              <span className="block text-base leading-tight">App Store</span>
            </span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mailrecap"
            className="flex items-center gap-3 bg-white text-[#0C1461] px-6 py-3.5 rounded-xl font-semibold hover:bg-[#E8EAF2] transition-colors w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M3.18 23.76c.3.17.64.24.99.2l.11-.03L13.65 12 4.28.07l-.11-.03a1.4 1.4 0 00-.99.2C2.85.57 2.5 1.22 2.5 2v19.76c0 .78.35 1.43.68 2zm14.4-12.42l-2.5-2.5-8.18-8.18 9.59 5.54a1.5 1.5 0 010 2.6l-.91.54zm-10.68 10.1l8.18-8.18 2.5-2.5.91.54a1.5 1.5 0 010 2.6l-9.59 5.54z" />
            </svg>
            <span>
              <span className="block text-xs text-[#0C1461]/60 leading-none">Get it on</span>
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

        {/* Mobile app mockup */}
        <div className="mt-16 max-w-xs mx-auto">
          <div className="relative bg-[#0C1461] rounded-[2.5rem] p-3 shadow-2xl shadow-black/40 border-4 border-[#1a2480]">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0C1461] rounded-full z-10"></div>
            <div className="bg-[#E8EAF2] rounded-[2rem] overflow-hidden">
              <div className="bg-[#0C1461] px-5 pt-7 pb-3 flex items-center justify-between">
                <span
                  className="text-white text-lg"
                  style={{ fontFamily: "var(--font-pacifico)" }}
                >
                  MailRecap
                </span>
                <span className="text-white/70 text-xs">9:41 AM</span>
              </div>
              <div className="p-3 space-y-2 bg-white">
                {[
                  { from: "Chase Bank", subject: "Statement ready — action needed", urgent: true },
                  { from: "USPS", subject: "Package arriving Thursday", urgent: false },
                  { from: "City of Portland", subject: "Water bill — $48 due in 5 days", urgent: true },
                  { from: "Amazon", subject: "Your return was received", urgent: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E8EAF2]">
                    <div className="w-8 h-8 rounded-full bg-[#D42232]/10 flex items-center justify-center shrink-0 text-[#D42232] font-bold text-xs">
                      {item.from[0]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-[#0C1461] text-xs truncate">{item.from}</p>
                      <p className="text-[#5A5F80] text-[10px] truncate">{item.subject}</p>
                    </div>
                    {item.urgent && (
                      <div className="w-2 h-2 rounded-full bg-[#D42232] shrink-0"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-white border-t border-[#E8EAF2] px-4 py-2 flex justify-around">
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[9px] text-[#D42232] font-medium">Inbox</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[9px] text-[#5A5F80]">Alerts</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[9px] text-[#5A5F80]">Settings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
