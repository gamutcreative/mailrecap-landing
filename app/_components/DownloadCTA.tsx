export default function DownloadCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#4f46e5]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Take control of your mailbox today
        </h2>
        <p className="text-indigo-200 text-lg max-w-xl mx-auto mb-10">
          Join thousands of households who never miss important mail. Download MailRecap free on the App Store.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-3 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-semibold hover:bg-slate-100 transition-colors w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.24 1.31-2.22 3.91.03 3.1 2.72 4.13 2.75 4.14l-.08.17zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>
              <span className="block text-xs text-slate-500 leading-none">Download on the</span>
              <span className="block text-base leading-tight">App Store</span>
            </span>
          </a>
        </div>
        <p className="text-indigo-300 text-sm mt-6">Free to download · No credit card required</p>
      </div>
    </section>
  );
}
