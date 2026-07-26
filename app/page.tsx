"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/religious/SearchBar";
import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";
import ServiceWheel from "@/components/ServiceWheel";
import PopularCategories from "@/components/PopularCategories";
import OfferBanner from "@/components/OfferBanner";
import TrendingServices from "@/components/TrendingServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BottomNav from "@/components/BottomNav";
import ScrollReveal from "@/ScrollReveal";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#071424] text-white">
      {/* Scroll Animation */}
      <ScrollReveal />

      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="mx-auto max-w-md px-4 pb-28">

        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* Search */}
        <div className="mt-3 reveal delay-100">
          <SearchBar />
        </div>

        {/* Premium Hero Slider */}
        <section className="mt-5 reveal-zoom delay-200">
          <HeroSlider />
        </section>

        {/* Popular Categories */}
        <section className="mt-8 reveal delay-300">
          <SectionTitle
            title="Popular Categories"
            subtitle="Choose your required service"
            actionText="View All"
          />
        </section>

        {/* Service Wheel */}
        <section className="mt-5 reveal-left delay-400">
          <ServiceWheel />
        </section>

        {/* Categories */}
        <section className="mt-8 reveal-right delay-500">
          <PopularCategories />
        </section>

        {/* Offer Banner */}
        <section className="mt-8 reveal-zoom delay-100">
          <OfferBanner />
        </section>

        {/* Trending Services */}
        <section className="mt-8 reveal delay-200">
          <TrendingServices />
        </section>

        {/* Why Choose Us */}
        <section className="mt-8 reveal-left delay-300">
          <WhyChooseUs />
        </section>

        {/* Testimonials */}
        <section className="mt-8 reveal-right delay-400">
          <Testimonials />
        </section>

      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </main>
  );
}