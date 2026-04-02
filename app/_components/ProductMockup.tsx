const callouts = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Scan any piece of mail in seconds",
    description: "Point your phone at any letter or envelope. MailRecap reads it instantly.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10M4 18h6" />
      </svg>
    ),
    title: "Organized automatically — bills, packages, notices",
    description: "Every piece is categorized and sorted so you always know what needs attention.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
    title: "Find any document, any time",
    description: "Search your entire mail history in seconds. No more digging through piles.",
  },
];

export default function ProductMockup() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#D42232] mb-3">
            The App
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Your mailbox, finally digital
          </h2>
          <p className="text-lg text-[#5A6170] max-w-xl mx-auto">
            A clean, calm app designed around how households actually work.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Phone mockup */}
          <div className="shrink-0 lg:w-72">
            <div className="relative bg-[#111827] rounded-[2.5rem] p-3 shadow-2xl shadow-[#111827]/30 border-4 border-[#1f2937] mx-auto max-w-[240px] lg:max-w-none">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111827] rounded-full z-10" />
              <div className="bg-[#FAF8F4] rounded-[2rem] overflow-hidden">
                {/* App header */}
                <div className="bg-[#111827] px-5 pt-7 pb-3 flex items-center justify-between">
                  <span className="text-white text-lg font-semibold">MailRecap</span>
                  <span className="text-white/60 text-xs">9:41 AM</span>
                </div>

                {/* Mail items */}
                <div className="p-3 space-y-2 bg-white">
                  {[
                    { from: "Chase Bank", subject: "Statement ready — action needed", urgent: true },
                    { from: "USPS", subject: "Package arriving Thursday", urgent: false },
                    { from: "City of Portland", subject: "Water bill — $48 due in 5 days", urgent: true },
                    { from: "Amazon", subject: "Your return was received", urgent: false },
                    { from: "Medicare", subject: "Annual summary enclosed", urgent: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E8E3DC]">
                      <div className="w-8 h-8 rounded-full bg-[#111827]/10 flex items-center justify-center shrink-0 text-[#111827] font-bold text-xs">
                        {item.from[0]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-[#111827] text-xs truncate">{item.from}</p>
                        <p className="text-[#5A6170] text-[10px] truncate">{item.subject}</p>
                      </div>
                      {item.urgent && (
                        <div className="w-2 h-2 rounded-full bg-[#D42232] shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                {/* App nav */}
                <div className="bg-white border-t border-[#E8E3DC] px-4 py-2 flex justify-around">
                  <span className="text-[9px] text-[#D42232] font-medium">Inbox</span>
                  <span className="text-[9px] text-[#5A6170]">Alerts</span>
                  <span className="text-[9px] text-[#5A6170]">Settings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature callouts */}
          <div className="flex-1 space-y-8">
            {callouts.map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#D42232]/10 text-[#D42232] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111827] mb-1">{item.title}</h3>
                  <p className="text-[#5A6170] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="#download"
                className="inline-flex items-center gap-2 bg-[#D42232] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#b01c29] transition-colors"
              >
                Try it free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
