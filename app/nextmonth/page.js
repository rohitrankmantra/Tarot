// pages/next-month-reading.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetails from "@/components/ServiceDetails";
import WhyChooseMe from "@/components/WhyChooseMe";
import CommentSection from "@/components/CommentSection";

export default function NextMonthReadingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ServiceHero
        headline="NEXT MONTH READING"
        subhead="Gain insights on what to expect and focus on next month."
        primaryCTA="Add to Cart"
        secondaryCTA="See Details"
        background="linear-gradient(135deg, oklch(0.88 0.08 320 / 0.9), oklch(0.95 0.02 15 / 0.8))"
        image="/next-month-reading.jpg"
      />

      <ServiceDetails
        title="Next Month Tarot Reading"
        price="15"
        originalPrice="36"
        description={`Next Month Reading reveals what is coming for you next month. You will gain insights on what to pay attention to, advice, and recommended actions so you can achieve your goals. The reading covers finances, career, and love relationships, helping you plan your moves effectively.`}
      />

      <WhyChooseMe />

      <CommentSection />

      <Footer />
    </main>
  );
}
