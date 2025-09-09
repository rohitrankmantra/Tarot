// pages/love-reading.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetails from "@/components/ServiceDetails";
import WhyChooseMe from "@/components/WhyChooseMe";
import CommentSection from "@/components/CommentSection";

export default function LoveReadingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ServiceHero
        headline="LOVE READING"
        subhead="Gain clarity and guidance on your romantic life and relationships."
        primaryCTA="Add to Cart"
        secondaryCTA="See Details"
        background="linear-gradient(135deg, oklch(0.88 0.08 320 / 0.9), oklch(0.95 0.02 15 / 0.8))"
        image="/love-reading.jpg"
      />

      <ServiceDetails
       productId="love-reading-001"
        title="Love Tarot Reading"
        price="20"
        originalPrice="38"
        description={`Love tarot reading offers insights into your romantic life. It can provide guidance on current relationships or potential romantic opportunities. Don't let uncertainty hold you back from experiencing the love and connection you deserve. Take advantage of this special offer and book your love tarot reading with me today!`}
      />

      <WhyChooseMe />

      <CommentSection />

      <Footer />
    </main>
  );
}
