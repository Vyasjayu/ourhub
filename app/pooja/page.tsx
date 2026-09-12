"use client";

import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Flame,
  Star,
} from "lucide-react";

import Header from "@/components/pooja/Header";
import SearchBar from "@/components/pooja/SearchBar";
import HeroSlider from "@/components/pooja/HeroSlider";
import PopularPooja from "@/components/pooja/PopularPooja";
import OnlineOfflineCard from "@/components/pooja/OnlineOfflineCard";
import TrendingSection from "@/components/pooja/TrendingSection";
import BottomNavbar from "@/components/pooja/BottomNavbar";
import WhyChooseUs from "@/components/pooja/WhyChooseUs";
import HelpCard from "@/components/pooja/HelpCard";
import PoojaBottomSheet from "@/components/pooja/PoojaBottomSheet";

export default function Page() {
  const [poojaSheetOpen, setPoojaSheetOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#02060B] text-white">

      {/* =====================================================
          APP CONTAINER
      ===================================================== */}

      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#071424] shadow-[0_0_80px_rgba(0,0,0,0.55)]">

        {/* =================================================
            MAIN SCROLL AREA
        ================================================= */}

        <div className="relative pb-[105px]">

          {/* =================================================
              TOP AMBIENT GLOW
          ================================================= */}

          <div className="pointer-events-none absolute left-1/2 top-[-130px] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.07] blur-[90px]" />

          <div className="pointer-events-none absolute right-[-100px] top-[420px] h-[220px] w-[220px] rounded-full bg-indigo-500/[0.04] blur-[90px]" />

          {/* =================================================
              HEADER
          ================================================= */}

          <header className="relative z-20 px-4 pt-4">

            <div className="rounded-[24px] border border-white/[0.06] bg-white/[0.025] px-1 py-1 shadow-[0_10px_35px_rgba(0,0,0,0.15)] backdrop-blur-xl">

              <Header />

            </div>

          </header>


          {/* =================================================
              SEARCH AREA
          ================================================= */}

          <div className="sticky top-0 z-30 mt-3 border-y border-white/[0.05] bg-[#071424]/90 px-4 py-3 backdrop-blur-2xl">

            <div className="relative">

              {/* Search Glow */}

              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#DFAE45]/[0.04] blur-xl" />

              <div className="relative">
                <SearchBar />
              </div>

            </div>

          </div>


          {/* =================================================
              HERO
          ================================================= */}

          <section className="relative mt-5 px-4">

            <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/15 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">

              <HeroSlider />

            </div>

          </section>


          {/* =================================================
              TRUST STRIP
          ================================================= */}

          <section className="mt-4 px-4">

            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025]">

              <div className="flex items-center justify-center gap-1.5 border-r border-white/[0.06] px-2 py-3">

                <ShieldCheck
                  size={14}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-semibold text-gray-400">
                  Verified
                </span>

              </div>


              <div className="flex items-center justify-center gap-1.5 border-r border-white/[0.06] px-2 py-3">

                <Sparkles
                  size={14}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-semibold text-gray-400">
                  Trusted
                </span>

              </div>


              <div className="flex items-center justify-center gap-1.5 px-2 py-3">

                <Star
                  size={14}
                  className="fill-[#DFAE45] text-[#DFAE45]"
                />

                <span className="text-[9px] font-semibold text-gray-400">
                  Top Rated
                </span>

              </div>

            </div>

          </section>


          {/* =================================================
              POPULAR POOJA
          ================================================= */}

          <section className="relative mt-8 px-4">

            <div className="overflow-hidden rounded-[24px]">

              <PopularPooja
                onMoreClick={() => setPoojaSheetOpen(true)}
              />

            </div>

          </section>


          {/* =================================================
              ONLINE / OFFLINE
          ================================================= */}

          <section className="mt-2 px-4">

            <div className="overflow-hidden rounded-[24px]">

              <OnlineOfflineCard />

            </div>

          </section>


          {/* =================================================
              PREMIUM DIVIDER
          ================================================= */}

          <div className="mx-2 mt-9 flex items-center gap-3">

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFAE45]/20 to-transparent" />

            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#DFAE45]/15 bg-[#DFAE45]/[0.05]">

              <Sparkles
                size={12}
                className="text-[#DFAE45]"
              />

            </div>

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFAE45]/20 to-transparent" />

          </div>


          {/* =================================================
              TRENDING
          ================================================= */}

          <section className="relative mt-1">

            <div className="mt-1 overflow-hidden">

              <TrendingSection />

            </div>

          </section>


          {/* =================================================
              WHY CHOOSE US
          ================================================= */}

          <section className="relative mt-9">

           


            <div className="overflow-hidden">

              <WhyChooseUs />

            </div>

          </section>


          {/* =================================================
              HELP CARD
          ================================================= */}

          <section className="mt-8 px-4">

            <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/15">

              {/* Background Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#DFAE45]/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-500/[0.05] blur-3xl" />

              <div className="relative">

                <HelpCard />

              </div>

            </div>

          </section>


          {/* =================================================
              BOTTOM BRAND
          ================================================= */}

          <section className="mt-9 px-4 pb-5">

            <div className="flex items-center justify-center gap-3">

              <div className="h-px w-12 bg-white/[0.07]" />

              <div className="flex items-center gap-1.5">

                <Sparkles
                  size={11}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-bold tracking-[0.28em] text-gray-600">
                  OURHUB POOJA
                </span>

                <Sparkles
                  size={11}
                  className="text-[#DFAE45]"
                />

              </div>

              <div className="h-px w-12 bg-white/[0.07]" />

            </div>

            <p className="mt-2 text-center text-[8px] text-gray-700">
              Sacred moments. Trusted services. One spiritual hub.
            </p>

          </section>

        </div>


        {/* =====================================================
            BOTTOM SHEET
        ===================================================== */}

        <PoojaBottomSheet
          open={poojaSheetOpen}
          onClose={() => setPoojaSheetOpen(false)}
        />


        {/* =====================================================
            BOTTOM NAVIGATION
        ===================================================== */}

        <div className="fixed bottom-0 left-0 right-0 z-50">

          <div className="mx-auto w-full max-w-[430px]">

            <div className="border-t border-white/[0.07] bg-[#050B14]/95 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 shadow-[0_-15px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl">

              <BottomNavbar />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}