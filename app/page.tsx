import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import TheProblem from "./_components/TheProblem";
import ProductMockup from "./_components/ProductMockup";
import HowItWorks from "./_components/HowItWorks";
import Pricing from "./_components/Pricing";
import TrustSignals from "./_components/TrustSignals";
import Mission from "./_components/Mission";
import DownloadCTA from "./_components/DownloadCTA";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. The Problem */}
        <TheProblem />
        {/* 3. Product Mockup */}
        <ProductMockup />
        {/* 4. How It Works */}
        <HowItWorks />
        {/* 5. Plans / Pricing */}
        <Pricing />
        {/* 6. Trust Signals */}
        <TrustSignals />
        {/* 7. Mission / Why MailRecap */}
        <Mission />
        {/* 8. Final CTA */}
        <DownloadCTA />
      </main>
      {/* 9. Footer */}
      <Footer />
    </>
  );
}
