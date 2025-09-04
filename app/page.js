import Header from "@/components/Header"
import HeroSlider from "@/components/HeroSlider"
import AboutSection from "@/components/AboutSection"
import ServicesGrid from "@/components/ServicesGrid"
import Testimonials from "@/components/Testimonials"
import ContactForm from "@/components/ContactForm"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <div className="mystical-gradient py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4 text-balance">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-accent-foreground mb-6 max-w-2xl mx-auto leading-relaxed text-pretty">
            Take the first step towards clarity and guidance. Book your personalized tarot reading today and discover
            the insights waiting for you.
          </p>
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-2xl font-medium hover:mystical-glow hover:scale-105 transition-all duration-300 mystical-shadow">
            Book Your Reading Now
          </button>
        </div>
      </div>
      <Testimonials />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  )
}
