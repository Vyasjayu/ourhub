
"use client";

import { Suspense } from "react";
import {
  Bell,
  ChevronDown,
  MapPin,
  Sparkles,
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
    <main className="min-h-screen bg-[#02050A]">
      <ScrollReveal />

      {/* ============================================================
          MOBILE APP CONTAINER
      ============================================================ */}

      <div
        className="
          relative
          mx-auto
          min-h-screen
          w-full
          max-w-[430px]
          overflow-hidden
          bg-[#071321]
          pb-28
          text-white
        "
      >
        {/* ==========================================================
            AMBIENT BACKGROUND
        ========================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-28
            -top-32
            h-[330px]
            w-[330px]
            rounded-full
            bg-[#DFAE45]/[0.07]
            blur-[110px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-28
            top-[520px]
            h-[280px]
            w-[280px]
            rounded-full
            bg-orange-500/[0.045]
            blur-[110px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-24
            top-[1200px]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#DFAE45]/[0.035]
            blur-[100px]
          "
        />

        {/* ==========================================================
            HEADER
        ========================================================== */}

        <header
          className="
            sticky
            top-0
            z-50
            border-b
            border-white/[0.07]
            bg-[#071321]/[0.88]
            backdrop-blur-2xl
          "
        >
          <div className="px-5 pb-3 pt-4">
            <div className="flex items-center justify-between">
              {/* BRAND */}

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#DFAE45]/25
                      bg-[#DFAE45]/[0.08]
                      shadow-[0_0_22px_rgba(223,174,69,0.08)]
                    "
                  >
                    <Sparkles
                      size={15}
                      strokeWidth={1.8}
                      className="text-[#E7B94F]"
                    />
                  </div>

                  <div>
                    <h1
                      className="
                        text-[20px]
                        font-black
                        leading-none
                        tracking-[-0.04em]
                        text-[#E7B94F]
                      "
                    >
                      OurHub
                    </h1>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-slate-500
                      "
                    >
                      Religious Services
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT ACTIONS */}

              <div className="flex items-center gap-2">
                {/* LOCATION */}

                <button
                  type="button"
                  className="
                    flex
                    h-10
                    items-center
                    gap-1.5
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.045]
                    px-3
                    backdrop-blur-md
                    transition
                    active:scale-95
                  "
                >
                  <MapPin
                    size={15}
                    strokeWidth={2}
                    className="text-[#E7B94F]"
                  />

                  <span
                    className="
                      max-w-[72px]
                      truncate
                      text-[11px]
                      font-bold
                      text-white
                    "
                  >
                    Indore
                  </span>

                  <ChevronDown
                    size={13}
                    className="text-slate-500"
                  />
                </button>

                {/* NOTIFICATION */}

                <button
                  type="button"
                  aria-label="Notifications"
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.045]
                    transition
                    active:scale-95
                  "
                >
                  <Bell
                    size={18}
                    strokeWidth={1.8}
                    className="text-slate-200"
                  />

                  {/* NOTIFICATION DOT */}

                  <span
                    className="
                      absolute
                      right-[9px]
                      top-[8px]
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#DFAE45]
                      shadow-[0_0_7px_rgba(223,174,69,0.9)]
                    "
                  />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ==========================================================
            HERO
        ========================================================== */}

        <section className="relative px-4 pt-5">
          <div
            className="
              overflow-hidden
              rounded-[26px]
              border
              border-white/[0.08]
              shadow-[0_18px_50px_rgba(0,0,0,0.28)]
            "
          >
            <HeroBanner />
          </div>
        </section>

        {/* ==========================================================
            SEARCH
        ========================================================== */}

        <section className="relative z-20 -mt-1 px-4 pt-5">
          <Suspense
            fallback={
              <div
                className="
                  h-[54px]
                  w-full
                  animate-pulse
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-white/[0.04]
                "
              />
            }
          >
            <SearchBar />
          </Suspense>
        </section>

        {/* ==========================================================
            QUICK ACTIONS
        ========================================================== */}

        <section className="relative mt-7">
          <QuickActions />
        </section>

        {/* ==========================================================
            OFFER
        ========================================================== */}

        <section className="relative mt-7 px-4">
          <OfferSlider />
        </section>

        {/* ==========================================================
            TRENDING POOJAS
        ========================================================== */}

        <section className="relative mt-9">
          <TrendingPoojas />
        </section>

        {/* ==========================================================
            UPCOMING FESTIVALS
        ========================================================== */}

        <section className="relative mt-9">
          <UpcomingFestivals />
        </section>

        {/* ==========================================================
            POPULAR SERVICES
        ========================================================== */}

        <section className="relative mt-9">
          <PopularServices />
        </section>

        {/* ==========================================================
            TOP PANDITS
        ========================================================== */}

        <section className="relative mt-9">
          <TopPandits />
        </section>

        {/* ==========================================================
            REVIEWS
        ========================================================== */}

        <section className="relative mt-9">
          <Reviews />
        </section>

        {/* ==========================================================
            FAQ
        ========================================================== */}

        <section className="relative mt-9">
          <FAQ />
        </section>

        {/* ==========================================================
            HELP
        ========================================================== */}

        <section className="relative mt-9 px-4">
          <HelpSection />
        </section>

        {/* ==========================================================
            WHY CHOOSE US
        ========================================================== */}

        <section className="relative mb-10 mt-9 px-4">
          <WhyChooseUs />
        </section>

        {/* ==========================================================
            BOTTOM NAV
        ========================================================== */}

        <BottomNav />
      </div>
    </main>
  );
}

