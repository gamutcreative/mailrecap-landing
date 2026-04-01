const steps = [
  {
    number: "01",
    title: "Download & set up",
    description:
      "Download MailRecap on iOS or Android. Create your account in under a minute — no special equipment needed.",
  },
  {
    number: "02",
    title: "Scan your mail",
    description:
      "Open the app and take a photo of any piece of mail. MailRecap reads it instantly using your phone's camera.",
  },
  {
    number: "03",
    title: "Get a plain-language summary",
    description:
      "Receive a clear summary of what the letter says, in plain English (or Spanish). No jargon, no confusion.",
  },
  {
    number: "04",
    title: "Act with confidence",
    description:
      "Follow smart action bullets — pay this bill, call this number, respond by this date. Know exactly what to do next.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-[#E8EAF2]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#0C1461] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Up and running in minutes
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Four simple steps to transform how you handle physical mail.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#D42232]/20 -translate-x-4 z-0" />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="text-4xl font-extrabold text-[#D42232]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
