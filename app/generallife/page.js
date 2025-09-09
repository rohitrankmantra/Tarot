// pages/general-life-reading.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetails from "@/components/ServiceDetails";
import WhyChooseMe from "@/components/WhyChooseMe";
import CommentSection from "@/components/CommentSection";

export default function GeneralLifeReadingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ServiceHero
        headline="GENERAL LIFE READING"
        subhead="Gain clarity and guidance across your life, relationships, career, and finances."
        primaryCTA="Add to Cart"
        secondaryCTA="See Details"
        background="linear-gradient(135deg, oklch(0.88 0.08 320 / 0.9), oklch(0.95 0.02 15 / 0.8))"
        image="/general-life-reading.jpg"
      />

      <ServiceDetails
        productId="general-life-001"
        title="General Life Reading"
        price="14"
        originalPrice="35"
        description={`A General Life Reading aims to provide insights into various aspects of your life, including finances, relationships, and career. It offers guidance, clarity, and reflections on important decisions and opportunities coming your way.`}
      />

      <WhyChooseMe />

      <CommentSection />

      <Footer />
    </main>
  );
}
