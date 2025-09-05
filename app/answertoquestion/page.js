// pages/answer-to-question.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceDetails from "@/components/ServiceDetails";
import WhyChooseMe from "@/components/WhyChooseMe";
import CommentSection from "@/components/CommentSection";

export default function AnswerToQuestionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ServiceHero
        headline="ANSWER TO A QUESTION"
        subhead="Get clarity and guidance on a specific question or situation."
        primaryCTA="Add to Cart"
        secondaryCTA="See Details"
        background="linear-gradient(135deg, oklch(0.88 0.08 320 / 0.9), oklch(0.95 0.02 15 / 0.8))"
        image="/answer-to-question.jpg"
      />

      <ServiceDetails
        title="Answer to Your Question"
        price="14"
        originalPrice="30"
        description={`Answer to your question is a reading focused on a particular subject or issue where clarity is needed. Questions can come from any area of your life. The reading guides you toward a solution and helps determine your best next move.`}
      />

      <WhyChooseMe />

      <CommentSection />

      <Footer />
    </main>
  );
}
