const steps = [
  {
    number: "01",
    title: "Snap a photo of your mail",
    description:
      "Open MailRecap and take a photo of any piece of mail. Works with letters, bills, notices — anything.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "MailRecap organizes it automatically",
    description:
      "The app reads and categorizes your mail instantly — bills, packages, government notices, and more.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Access, search, and manage from anywhere",
    description:
      "Find any document in seconds. Get alerts on deadlines. Know exactly what needs action — and what doesn't.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-[#FAF8F4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E07B54] mb-3">
            Simple by design
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3A5C] mb-4">
            How it works
          </h2>
          <p className="text-lg text-[#5A6170] max-w-xl mx-auto">
            Three steps. No special equipment. Up and running in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-[#E8E3DC]" aria-hidden="true" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Step icon circle */}
              <div className="relative z-10 w-28 h-28 rounded-full bg-white border-2 border-[#E8E3DC] flex flex-col items-center justify-center mb-6 shadow-sm">
                <div className="text-[#E07B54] mb-1">{step.icon}</div>
                <span className="text-xs font-bold text-[#5A6170]">{step.number}</span>
              </div>

              <h3 className="text-xl font-bold text-[#1C3A5C] mb-3">{step.title}</h3>
              <p className="text-[#5A6170] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
