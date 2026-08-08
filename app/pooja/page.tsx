"use client";

import { useState } from "react";

import Header from "@/components/pooja/Header";
import SearchBar from "@/components/pooja/SearchBar";
// import LocationSelector from "@/components/pooja/LocationSelector";
import HeroSlider from "@/components/pooja/HeroSlider";
import PopularPooja from "@/components/pooja/PopularPooja";
import OnlineOfflineCard from "@/components/pooja/OnlineOfflineCard";
// import PremiumBanner from "@/components/pooja/PremiumBanner";
import TrendingSection from "@/components/pooja/TrendingSection";
import BottomNavbar from "@/components/pooja/BottomNavbar";
import WhyChooseUs from "@/components/pooja/WhyChooseUs";
import HelpCard from "@/components/pooja/HelpCard";
import PoojaBottomSheet from "@/components/pooja/PoojaBottomSheet";

export default function Page() {
  const [poojaSheetOpen, setPoojaSheetOpen] = useState(false);

  return (
    <main className="flex justify-center bg-[#050B14]">
      <div className="relative min-h-screen w-full max-w-[430px] bg-[#071424] shadow-2xl">

        <div className="pb-28">

          {/* Header */}
          <div className="px-4 pt-4">
            <Header />
          </div>

          {/* Sticky Search */}
          <div className="sticky top-0 z-30 border-b border-yellow-500/10 bg-[#071424]/95 backdrop-blur-xl">

            <div className="px-4 py-3">

              {/* <LocationSelector /> */}

              <div className="mt-3">
                <SearchBar />
              </div>

            </div>

          </div>

          {/* Hero */}
          <section className="mt-4 px-4">
            <HeroSlider />
          </section>

          {/* Popular */}
          <section className="mt-7 overflow-x-hidden px-4">
            <PopularPooja
              onMoreClick={() => setPoojaSheetOpen(true)}
            />
          </section>

          {/* Online Offline */}
          <section className="mt-7 px-4">
            <OnlineOfflineCard />
          </section>

          {/* Premium */}
          {/* <section className="mt-7 px-4">
            <PremiumBanner />
          </section> */}

          {/* Trending */}
          <section className="mt-7">
            <TrendingSection />
          </section>

          <WhyChooseUs />

          <HelpCard />

        </div>

        {/* Bottom Sheet */}
        <PoojaBottomSheet
          open={poojaSheetOpen}
          onClose={() => setPoojaSheetOpen(false)}
        />

        {/* Bottom Navigation */}
        <BottomNavbar />

      </div>
    </main>
  );
}