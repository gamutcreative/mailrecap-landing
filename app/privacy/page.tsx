import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — MailRecap",
  description: "How MailRecap collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <header className="border-b border-stone-200 bg-[#FAF8F4] px-4 sm:px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 w-fit">
          <svg viewBox="0 0 80 80" width="20" height="20" fill="none" stroke="#D42232" strokeWidth="4" aria-hidden="true">
            <rect x="8" y="20" width="64" height="44" rx="4" />
            <polyline points="8,20 40,48 72,20" />
          </svg>
          <span className="font-bold text-[#111827] tracking-tight">MailRecap</span>
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">Privacy Policy</h1>
        <p className="text-stone-500 text-sm mb-10">Last updated: April 2, 2026</p>
        <div className="space-y-8 text-stone-700">
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Overview</h2>
            <p className="leading-relaxed">MailRecap (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Account information:</strong> Email address and name when you create an account.</li>
              <li><strong>Mail content:</strong> Photos and text extracted from mail you scan. Used solely to provide the MailRecap service to you.</li>
              <li><strong>Usage data:</strong> Anonymized analytics to improve the product.</li>
              <li><strong>Device information:</strong> Device type and OS version for compatibility.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>To provide and improve the MailRecap service.</li>
              <li>To send important notifications about your mail (with your permission).</li>
              <li>To respond to support requests.</li>
              <li>We do not sell your data to third parties.</li>
              <li>We do not use your mail content for advertising.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Data Security</h2>
            <p className="leading-relaxed">Your mail content is encrypted in transit and at rest. We use industry-standard security practices and conduct regular security reviews.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Your Rights</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>You can request a copy of your data at any time.</li>
              <li>You can delete your account and all associated data from app settings.</li>
              <li>You can opt out of marketing communications.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Contact Us</h2>
            <p className="leading-relaxed">Questions? Email <a href="mailto:privacy@mailrecap.co" className="text-[#D42232] hover:underline">privacy@mailrecap.co</a>.</p>
          </section>
        </div>
      </main>
      <footer className="border-t border-stone-200 px-4 sm:px-6 py-6 text-center text-sm text-stone-400">
        <Link href="/" className="hover:text-[#111827] transition-colors">← Back to mailrecap.co</Link>
        {" · "}
        <Link href="/terms" className="hover:text-[#111827] transition-colors">Terms of Service</Link>
      </footer>
    </div>
  );
}
