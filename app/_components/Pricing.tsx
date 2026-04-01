const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for trying MailRecap",
    features: [
      "Up to 10 mail scans/month",
      "7-day mail history",
      "Basic categorization",
      "Mobile app access",
    ],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For households that want full control",
    features: [
      "Unlimited mail scans",
      "Unlimited mail history",
      "Smart tagging & search",
      "Priority notifications",
      "Monthly recap reports",
      "Forward or shred with a tap",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Family",
    price: "$19",
    period: "/month",
    description: "Shared mailbox for the whole household",
    features: [
      "Everything in Pro",
      "Up to 5 household members",
      "Shared mail view",
      "Individual notification settings",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            No hidden fees. Cancel anytime. Start free and upgrade when you&apos;re ready.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border ${
                plan.highlight
                  ? "border-[#4f46e5] bg-[#4f46e5] text-white shadow-xl shadow-[#4f46e5]/20"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="text-xs font-bold uppercase tracking-wider text-[#ccfbf1] mb-4">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <div className="flex items-end gap-1 mb-2">
                <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm pb-1 ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 ${plan.highlight ? "text-[#ccfbf1]" : "text-[#0d9488]"}`}>✓</span>
                    <span className={plan.highlight ? "text-indigo-100" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#4f46e5] hover:bg-indigo-50"
                    : "bg-[#4f46e5] text-white hover:bg-[#3730a3]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
