import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CreatorsLabClient from "./CreatorsLabClient";

export const metadata: Metadata = {
  title: "Creators Lab – MailRecap",
  description:
    "Free branding assets, social media templates, and platform guides for creators who love MailRecap. Everything you need to share MailRecap with your audience.",
  openGraph: {
    title: "Creators Lab – MailRecap",
    description:
      "Free branding assets and social media templates for MailRecap creators.",
    url: "https://mailrecap.co/creators-lab",
    siteName: "MailRecap",
    type: "website",
  },
};

export default function CreatorsLabPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <CreatorsLabClient />
      </main>
      <Footer />
    </>
  );
}
