// pages/celtic-cross.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetails from "@/components/ServiceDetails";
import WhyChooseMe from "@/components/WhyChooseMe";
import CommentSection from "@/components/CommentSection";

export default function CelticCrossPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ServiceHero
        headline="CELTIC CROSS READING"
        subhead="Gain insight and clarity on your situation with this powerful tarot spread."
        primaryCTA="Add to Cart"
        secondaryCTA="See Details"
        background="linear-gradient(135deg, oklch(0.88 0.08 320 / 0.9), oklch(0.95 0.02 15 / 0.8))"
        image="/celtic-cross.jpg"
      />

      <ServiceDetails
        title="Celtic Cross Tarot Reading"
        price="18"
        description={`The Celtic Cross is one of the most famous tarot spreads. It provides deep insight into complex situations, helping you understand influences and potential outcomes. Feeling stuck or unsure what to do next? This spread highlights the good and bad of the situation and reveals what is on your conscious and subconscious mind.`}
        originalPrice="40"
      />

      <WhyChooseMe />

      <CommentSection />

      <Footer />
    </main>
  );
}
