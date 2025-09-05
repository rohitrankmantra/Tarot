import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceHero from "@/components/ServiceHero"
import ServiceDetails from "@/components/ServiceDetails"
import WhyChooseMe from '@/components/WhyChooseMe';
import CommentSection from '@/components/CommentSection';

export default function LiveSessionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ServiceHero
        headline="Live Session With Me"
        subhead="A one-on-one tarot reading tailored to your questions and energy."
        primaryCTA="Book Your Session"
        secondaryCTA="Learn More"
        background="linear-gradient(135deg, oklch(0.88 0.08 320 / 0.9), oklch(0.95 0.02 15 / 0.8))"
        image="/live-session.jpg"
      />

      <ServiceDetails
        title="Live Tarot Reading Session"
        price="45"
        description={`This is a private one-on-one tarot session designed to give you deep insights and guidance.
        
During our time together, you’ll receive a personalized tarot spread, intuitive interpretation, and practical advice for your journey. 
I will guide you through love, relationships, career, or personal transformation based on your needs.
        
The session is interactive, compassionate, and designed to help you find clarity, healing, and empowerment.`}
      />
      <WhyChooseMe/>
      <CommentSection/>

      <Footer />
    </main>
  )
}
