export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <span className="text-[#4f46e5]">✉</span> MailRecap
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </div>
        <a
          href="#download"
          className="bg-[#4f46e5] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#3730a3] transition-colors"
        >
          Download App
        </a>
      </div>
    </nav>
  );
}
