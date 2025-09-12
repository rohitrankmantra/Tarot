import Header from "@/components/Header"
import HeroSlider from "@/components/HeroSlider"
import AboutSection from "@/components/AboutSection"
import ServicesGrid from "@/components/ServicesGrid"
import Testimonials from "@/components/Testimonials"
import ContactForm from "@/components/ContactForm"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import CallToActionBanner from '@/components/CallToActionBanner';
import RitualsGallery from './../components/RitualsGallery';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <RitualsGallery/>
      <Testimonials />
      {/* <ContactForm /> */}
      <CallToActionBanner/>

      <FAQ />
      <Footer />
    </main>
  )
}
