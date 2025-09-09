// pages/self-love-reading.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetails from "@/components/ServiceDetails";
import WhyChooseMe from "@/components/WhyChooseMe";
import CommentSection from "@/components/CommentSection";

export default function SelfLoveReadingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ServiceHero
        headline="SELF-LOVE READING"
        subhead="Reconnect with yourself and embrace your uniqueness."
        primaryCTA="Add to Cart"
        secondaryCTA="See Details"
        background="linear-gradient(135deg, oklch(0.88 0.08 320 / 0.9), oklch(0.95 0.02 15 / 0.8))"
        image="/self-love-reading.jpg"
      />

      <ServiceDetails
        productId="self-love-001"
        title="Self-Love Tarot Reading"
        price="15"
        originalPrice="28"
        description={`Self-love reading is perfect when you are feeling lost or out of flow with yourself. It is an amazing reminder that you are worthy of love and should celebrate your uniqueness. Open your heart and take practical steps to nurture yourself. Remember, self-love is a journey, and you are deserving every step of the way. Book your self-love tarot reading today and start embracing the beautiful soul that you are.`}
      />

      <WhyChooseMe />

      <CommentSection />

      <Footer />
    </main>
  );
}
