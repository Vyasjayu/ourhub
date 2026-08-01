import Header from "@/components/web-development/Header";
import Hero from "@/components/web-development/Hero";
import SearchBar from "@/components/web-development/SearchBar";
import FeaturedServices from "@/components/web-development/FeaturedServices";
import OfferBanner from "@/components/web-development/OfferBanner";
import WhyChooseUs from "@/components/web-development/WhyChooseUs";
import TechStack from "@/components/web-development/TechStack";
import Stats from "@/components/web-development/Stats";
import Portfolio from "@/components/web-development/Portfolio";
import Testimonials from "@/components/web-development/Testimonials";
import Pricing from "@/components/web-development/Pricing";
import FAQ from "@/components/web-development/FAQ";
import ContactForm from "@/components/web-development/ContactForm";
import WhatsAppCTA from "@/components/web-development/WhatsAppCTA";
import StickyCTA from "@/components/web-development/StickyCTA";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#050B14] flex justify-center">

      <div className="w-full max-w-[430px] bg-[#050B14] min-h-screen pb-28">

        <Header />

        <Hero />

        <SearchBar />

        <FeaturedServices />

        <OfferBanner />

        <WhyChooseUs />

        <TechStack />

        <Stats />

        <Portfolio />

        <Testimonials />

        <Pricing />

        <FAQ />

        <ContactForm />

        <WhatsAppCTA />

      </div>

      {/* Fixed Bottom CTA */}

      <StickyCTA />

    </main>
  );
}