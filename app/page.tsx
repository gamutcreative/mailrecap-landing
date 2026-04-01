import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import HowItWorks from "./_components/HowItWorks";
import Pricing from "./_components/Pricing";
import SocialProof from "./_components/SocialProof";
import DownloadCTA from "./_components/DownloadCTA";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SocialProof />
        <Pricing />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
