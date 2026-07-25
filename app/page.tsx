"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/religious/SearchBar";
import Hero from "@/components/Hero";
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
    <main
      className="
        min-h-screen
        bg-[#071424]
        text-white
        pb-32
      "
    >
      {/* Scroll Animation */}
      <ScrollReveal />

      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="mx-auto max-w-md">

        {/* Header */}
        <Header
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Search */}
        <div className="reveal delay-100">
          <SearchBar />
        </div>

        {/* Hero */}
        <div className="reveal-zoom delay-200">
          <Hero />
        </div>
<div></div>

        {/* Title */}
        <div className="reveal delay-300">
          <SectionTitle
            title="Popular Categories"
            subtitle="Choose your required service"
            actionText="View All"
          />
        </div>

        {/* Service Wheel */}
        <div className="reveal-left delay-400">
          <ServiceWheel />
        </div>
        {/* Categories */}
        <div className="reveal-right delay-500">
          <PopularCategories />
        </div>

        {/* Offer Banner */}
        <div className="reveal-zoom delay-100">
          <OfferBanner />
        </div>

        {/* Trending */}
        <div className="reveal delay-200">
          <TrendingServices />
        </div>

        {/* Why Choose Us */}
        <div className="reveal-left delay-300">
          <WhyChooseUs />
        </div>

        {/* Testimonials */}
        <div className="reveal-right delay-400">
          <Testimonials />
        </div>

      </div>

      {/* Bottom Navigation */}
      {/* <div className="reveal-zoom delay-500"> */}
        <BottomNav />
      {/* </div> */}

    </main>
  );
}