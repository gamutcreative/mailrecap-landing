const features = [
  {
    icon: "📸",
    title: "Scan & Summarize",
    description:
      "Take a photo of any letter. MailRecap reads it and gives you a plain-language summary with exactly what you need to do.",
  },
  {
    icon: "🔊",
    title: "Read-Aloud Summaries",
    description:
      "Hear your mail summaries spoken to you — hands-free. Perfect for when you're busy. Available with MailRecap+.",
  },
  {
    icon: "🌎",
    title: "English & Spanish",
    description:
      "MailRecap summarizes your mail in both English and Spanish — a key differentiator for bilingual households.",
  },
  {
    icon: "⚡",
    title: "Smart Action Bullets",
    description:
      "Every summary includes clear action items — pay by this date, call this number, respond by Friday. No guesswork.",
  },
  {
    icon: "🗂️",
    title: "Auto Inbox Organization",
    description:
      "Mail is automatically sorted by category — Finance, Delivery, Medical, Government. Find any letter instantly.",
  },
  {
    icon: "🔔",
    title: "Bill & Deadline Alerts",
    description:
      "Push notifications for bills due, package arrivals, and important deadlines. Never miss something critical again.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Everything you need to manage your mail
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            MailRecap brings digital-inbox clarity to your physical mailbox — in English and Spanish.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-slate-100 hover:border-[#D42232]/30 hover:shadow-lg hover:shadow-[#D42232]/5 transition-all"
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
