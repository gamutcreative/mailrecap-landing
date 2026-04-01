export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#ccfbf1] text-[#0d9488] px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <span>★</span> Trusted by thousands of households
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl mx-auto">
          Your physical mail,{" "}
          <span className="text-[#4f46e5]">organized and clear</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          MailRecap scans, sorts, and summarizes every piece of mail you receive.
          Stay on top of deliveries, bills, and important letters—without touching
          a single envelope.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="download"
            href="#"
            className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-slate-700 transition-colors w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.24 1.31-2.22 3.91.03 3.1 2.72 4.13 2.75 4.14l-.08.17zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>
              <span className="block text-xs text-slate-300 leading-none">Download on the</span>
              <span className="block text-base leading-tight">App Store</span>
            </span>
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-400 transition-colors w-full sm:w-auto text-center"
          >
            See how it works
          </a>
        </div>
        {/* Mail mockup illustration */}
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
          <div className="bg-[#4f46e5] px-6 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
            <span className="text-white/80 text-sm font-medium">mailrecap.co – Your Inbox</span>
          </div>
          <div className="p-6 space-y-3">
            {[
              { from: "Chase Bank", subject: "Monthly statement ready", tag: "Finance", date: "Today" },
              { from: "USPS", subject: "Package arriving Thursday", tag: "Delivery", date: "Today" },
              { from: "City of Portland", subject: "Water bill – $48.00 due", tag: "Bills", date: "Yesterday" },
              { from: "Amazon", subject: "Your order has shipped", tag: "Delivery", date: "2 days ago" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-[#4f46e5]/10 flex items-center justify-center shrink-0 text-[#4f46e5] font-bold text-sm">
                    {item.from[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 text-sm truncate">{item.from}</p>
                    <p className="text-slate-500 text-xs truncate">{item.subject}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className="hidden sm:block text-xs px-2 py-0.5 rounded-full bg-[#ccfbf1] text-[#0d9488] font-medium">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-400 whitespace-nowrap">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
