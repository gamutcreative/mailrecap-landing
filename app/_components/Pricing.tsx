const plans = [
  {
    name: "MailRecap Essentials",
    monthlyPrice: "$3.99",
    annualPrice: "$38.99",
    annualSaving: "Save 18% annually",
    description: "For households managing everyday mail",
    features: [
      "Up to 25 mail summaries per month",
      "Smart action bullets for every letter",
      "Auto inbox organization",
      "Push notifications for important mail",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "MailRecap+",
    monthlyPrice: "$9.99",
    annualPrice: "$99.99",
    annualSaving: "Save 17% annually",
    description: "For power users who want everything",
    features: [
      "Unlimited mail scans & summaries",
      "Read-aloud summaries (hands-free)",
      "Clearer action guidance on every letter",
      "Auto categorization & priority sorting",
      "Bill & deadline push notifications",
      "Everything in Essentials, plus more",
    ],
    cta: "Start Free Trial",
    highlight: true,
    trialNote: "5 free scans included — no credit card",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Start with 5 free MailRecap+ scans. No credit card required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border ${
                plan.highlight
                  ? "border-[#D42232] bg-[#0C1461] text-white shadow-xl"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="text-xs font-bold uppercase tracking-wider text-[#D42232] mb-4">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <div className="flex items-end gap-1 mb-1">
                <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.monthlyPrice}
                </span>
                <span className={`text-sm pb-1 ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                  /month
                </span>
              </div>
              <p className={`text-sm mb-1 ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                or {plan.annualPrice}/year
              </p>
              <p className="text-xs font-semibold text-[#D42232] mb-4">{plan.annualSaving}</p>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 font-bold text-[#D42232]">✓</span>
                    <span className={plan.highlight ? "text-blue-100" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-[#D42232] text-white hover:bg-[#a81b28]"
                    : "bg-[#0C1461] text-white hover:bg-[#1a2480]"
                }`}
              >
                {plan.cta}
              </a>
              {"trialNote" in plan && plan.trialNote && (
                <p className="text-blue-300 text-xs text-center mt-3">{plan.trialNote}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
