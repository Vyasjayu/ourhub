"use client";

import { Suspense } from "react";
import {
  Bell,
  MapPin,
  ChevronDown,
} from "lucide-react";

import ScrollReveal from "@/ScrollReveal";
import BottomNav from "@/components/BottomNav";
import HeroBanner from "@/components/religious/HeroBanner";
import SearchBar from "@/components/religious/SearchBar";
import QuickActions from "@/components/religious/QuickActions";
import OfferSlider from "@/components/religious/OfferSlider";
import TrendingPoojas from "@/components/religious/TrendingPoojas";
import UpcomingFestivals from "@/components/religious/UpcomingFestivals";
import PopularServices from "@/components/religious/PopularServices";
import TopPandits from "@/components/religious/TopPandits";
import Reviews from "@/components/religious/Reviews";
import FAQ from "@/components/religious/FAQ";
import HelpSection from "@/components/religious/HelpSection";
import WhyChooseUs from "@/components/religious/WhyChooseUs";

export default function ReligiousPage() {
  return (
    <main className="min-h-screen flex justify-center bg-[#020817]">
      <ScrollReveal />

      <div
        className="
          relative
          w-full
          max-w-[430px]
          min-h-screen
          overflow-hidden
          bg-[#071424]
          text-white
          pb-28
        "
      >
        {/* Background Glow */}
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
        <div className="absolute top-[400px] -right-20 h-60 w-60 rounded-full bg-orange-500/10 blur-[120px]" />

        {/* Header */}
        <header
          className="
            sticky
            top-0
            z-50
            border-b
            border-white/5
            bg-[#071424]/90
            backdrop-blur-xl
          "
        >
          <div className="flex items-center justify-between px-5 py-4">
            <div className="text-center">
              <h1 className="text-3xl font-black text-yellow-400">
                OurHub
              </h1>

              <p className="text-xs text-slate-400">
                Religious Services
              </p>
            </div>

            <button
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-yellow-500/20
                bg-[#111827]
                px-4
                py-3
              "
            >
              <MapPin
                size={18}
                className="text-yellow-400"
              />

              <span className="font-semibold">
                Indore
              </span>

              <ChevronDown size={16} />
            </button>

            <button
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-yellow-500/20
                bg-[#111827]
              "
            >
              <Bell />
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="px-4 pt-5">
          <HeroBanner />
        </section>

        {/* Search */}
        <section className="mt-4 px-4">
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
        </section>

        {/* Quick Actions */}
        <section className="mt-6 px-4">
          <QuickActions />
        </section>

        {/* Offer */}
        <section className="mt-7 px-4">
          <OfferSlider />
        </section>

        {/* Trending */}
        <section className="mt-8">
          <TrendingPoojas />
        </section>

        {/* Upcoming */}
        <section className="mt-8">
          <UpcomingFestivals />
        </section>

        {/* Popular */}
        <section className="mt-8">
          <PopularServices />
        </section>

        {/* Top Pandits */}
        <section className="mt-8">
          <TopPandits />
        </section>

        {/* Reviews */}
        <section className="mt-8">
          <Reviews />
        </section>

        {/* FAQ */}
        <section className="mt-8">
          <FAQ />
        </section>

        {/* Help */}
        <section className="mt-8 px-4">
          <HelpSection />
        </section>

        {/* Why Choose Us */}
        <section className="mt-8 mb-10 px-4">
          <WhyChooseUs />
        </section>

        <BottomNav />
      </div>
    </main>
  );
}