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
    <main className="min-h-screen bg-[#02060D] text-white">
      {/* Premium mobile canvas */}
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#050B14] shadow-[0_0_80px_rgba(0,0,0,0.45)]">

        {/* =========================
            BACKGROUND ATMOSPHERE
        ========================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[520px] overflow-hidden"
        >
          <div className="absolute -left-[180px] -top-[180px] h-[420px] w-[420px] rounded-full bg-[#DFAE45]/[0.07] blur-[110px]" />

          <div className="absolute -right-[180px] top-[80px] h-[380px] w-[380px] rounded-full bg-[#315A82]/[0.08] blur-[120px]" />

          <div className="absolute left-1/2 top-[280px] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.035] blur-[100px]" />
        </div>

        {/* =========================
            TOP DECORATIVE LINE
        ========================== */}

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 z-20 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent"
        />

        {/* =========================
            PAGE CONTENT
        ========================== */}

        <div className="relative z-10">

          {/* Header */}
          <header className="sticky top-0 z-50">
            <Header />
          </header>

          {/* Hero */}
          <section className="relative">
            <Hero />
          </section>

          {/* Search */}
          <section className="relative z-20 -mt-1">
            <SearchBar />
          </section>

          {/* Featured Services */}
          <section className="relative mt-5">
            <FeaturedServices />
          </section>

          {/* Offer */}
          <section className="relative mt-5">
            <OfferBanner />
          </section>

          {/* Why Choose Us */}
          <section className="relative mt-7">
            <WhyChooseUs />
          </section>

          {/* Technology */}
          <section className="relative mt-7">
            <TechStack />
          </section>

          {/* Stats */}
          <section className="relative mt-7">
            <Stats />
          </section>

          {/* Portfolio */}
          <section className="relative mt-7">
            <Portfolio />
          </section>

          {/* Testimonials */}
          <section className="relative mt-7">
            <Testimonials />
          </section>

          {/* Pricing */}
          <section className="relative mt-7">
            <Pricing />
          </section>

          {/* FAQ */}
          <section className="relative mt-7">
            <FAQ />
          </section>

          {/* Contact */}
          <section className="relative mt-7">
            <ContactForm />
          </section>

          {/* WhatsApp CTA */}
          <section className="relative mt-7">
            <WhatsAppCTA />
          </section>

          {/* Bottom breathing space */}
          <div className="h-28" />
        </div>

        {/* =========================
            BOTTOM FADE
        ========================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-32 bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-transparent"
        />
      </div>

      {/* =========================
          FIXED CTA
      ========================== */}

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center">
        <div className="pointer-events-auto w-full max-w-[430px] px-3 pb-3">
          <StickyCTA />
        </div>
      </div>
    </main>
  );
}