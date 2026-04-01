const steps = [
  {
    number: "01",
    title: "Sign up & connect",
    description:
      "Create your MailRecap account. Use your existing address or set up mail forwarding to your assigned MailRecap PO box.",
  },
  {
    number: "02",
    title: "We scan your mail",
    description:
      "Every piece of mail is scanned, digitized, and intelligently categorized the moment it arrives at your address.",
  },
  {
    number: "03",
    title: "You stay informed",
    description:
      "Open your app to see every letter, bill, and package—organized, searchable, and ready to act on. Shred, forward, or archive with a tap.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Up and running in minutes
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Three simple steps to transform how you manage physical mail.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#4f46e5]/20 -translate-x-4 z-0" />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="text-4xl font-extrabold text-[#4f46e5]/20 mb-4">{step.number}</div>
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
