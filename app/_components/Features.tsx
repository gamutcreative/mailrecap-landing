const features = [
  {
    icon: "🔍",
    title: "Transparent & Clear",
    description:
      "Every piece of mail is scanned, categorized, and presented in a clean feed. No more guessing what arrived—see exactly what's waiting for you.",
  },
  {
    icon: "⚡",
    title: "Fast Notifications",
    description:
      "Get notified the moment new mail arrives. Know about bills, packages, and important letters before you even get home.",
  },
  {
    icon: "🛡️",
    title: "Trusted & Secure",
    description:
      "Your mail data is encrypted end-to-end. We never sell your information and you control who sees what.",
  },
  {
    icon: "🗂️",
    title: "Smart Organization",
    description:
      "Automatic tagging by category—Finance, Delivery, Medical, Government. Find any letter instantly with search.",
  },
  {
    icon: "📊",
    title: "Monthly Recap",
    description:
      "Get a weekly and monthly digest of all your mail activity, spending trends, and delivery history in one clean summary.",
  },
  {
    icon: "🌐",
    title: "Access Anywhere",
    description:
      "Check your mail from your phone, tablet, or browser. Your physical mail follows you wherever you are.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Everything you need to manage your mail
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            MailRecap brings digital-inbox clarity to your physical mailbox.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-slate-100 hover:border-[#4f46e5]/30 hover:shadow-lg hover:shadow-[#4f46e5]/5 transition-all"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
