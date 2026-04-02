import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — MailRecap",
  description: "Terms governing your use of the MailRecap app and website.",
};

export default function TermsPage() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">Terms of Service</h1>
        <p className="text-stone-500 text-sm mb-10">Last updated: April 2, 2026</p>
        <div className="space-y-8 text-stone-700">
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Agreement</h2>
            <p className="leading-relaxed">By downloading or using MailRecap, you agree to these Terms of Service. If you do not agree, please do not use the service.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Use of the Service</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>MailRecap is for personal and household use.</li>
              <li>You must be 13 years or older to use the service.</li>
              <li>You are responsible for keeping your account credentials secure.</li>
              <li>You may not scan mail that does not belong to you or your household.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Subscriptions and Billing</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Free tier includes 5 scans to get started.</li>
              <li>Paid plans bill monthly or annually as selected.</li>
              <li>Subscriptions renew automatically. Cancel any time from your device&apos;s subscription settings.</li>
              <li>Refunds handled per App Store / Google Play refund policies.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Intellectual Property</h2>
            <p className="leading-relaxed">The MailRecap app, website, and all associated content are the property of MailRecap and its licensors. You may not copy, modify, or distribute any part without written permission.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Limitation of Liability</h2>
            <p className="leading-relaxed">MailRecap is provided &ldquo;as is&rdquo;. We are not liable for damages arising from use of the service, including data loss or missed notifications. MailRecap does not provide legal, financial, or professional advice.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Changes</h2>
            <p className="leading-relaxed">We may update these terms from time to time. Continued use of the service constitutes acceptance.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827] mb-3">Contact</h2>
            <p className="leading-relaxed">Questions? Email <a href="mailto:legal@mailrecap.co" className="text-[#D42232] hover:underline">legal@mailrecap.co</a>.</p>
          </section>
        </div>
      </main>
      <footer className="border-t border-stone-200 px-4 sm:px-6 py-6 text-center text-sm text-stone-400">
        <Link href="/" className="hover:text-[#111827] transition-colors">← Back to mailrecap.co</Link>
        {" · "}
        <Link href="/privacy" className="hover:text-[#111827] transition-colors">Privacy Policy</Link>
      </footer>
    </div>
  );
}
