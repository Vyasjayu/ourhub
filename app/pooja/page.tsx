"use client";

import { useState } from "react";

import Header from "@/components/pooja/Header";
import HeroBanner from "@/components/pooja/HeroBanner";
import LocationBar from "@/components/pooja/LocationBar";
import SearchBar from "@/components/pooja/SearchBar";
import PoojaGrid from "@/components/pooja/PoojaGrid";
import TrendingPooja from "@/components/pooja/TrendingPooja";
import WhyChooseUs from "@/components/pooja/WhyChooseUs";
import HelpCard from "@/components/pooja/HelpCard";
import BottomNav from "@/components/BottomNav";
import AllPoojaSheet from "@/components/pooja/AllPoojaSheet";

export default function PoojaPage() {
  const [search, setSearch] = useState("");
  const [showSheet, setShowSheet] = useState(false);

  return (
    <main
      className="
        min-h-screen
        flex
        justify-center
        bg-gradient-to-b
        from-[#030712]
        via-[#071424]
        to-[#020617]
      "
    >
      <div
        className="
          relative
          w-full
          max-w-[430px]
          overflow-hidden
          border-x
          border-yellow-500/10
          bg-[#071424]
          pb-28
        "
      >
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-72 w-full bg-[radial-gradient(circle_at_top,#FACC1530,transparent_70%)]" />

        <div className="relative z-10">

          {/* Header */}
          <Header />

          {/* Hero Banner */}
          {/* <HeroBanner /> */}

          <div className="space-y-5 px-4">

            {/* Location */}
            <LocationBar />

            {/* Search */}
            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            {/* Pooja Grid */}
            <div
              className="
                rounded-3xl
                border
                border-yellow-500/20
                bg-[#0E1A2D]
                p-4
                shadow-[0_0_30px_rgba(250,204,21,.08)]
              "
            >
              <PoojaGrid
                search={search}
                onMoreClick={() => setShowSheet(true)}
              />
            </div>

            {/* Trending */}
            <TrendingPooja />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Help */}
            <HelpCard />

          </div>

          {/* Bottom Navigation */}
          <BottomNav
            onCategoriesClick={() => {}}
          />

          {/* Bottom Sheet */}
          <AllPoojaSheet
            open={showSheet}
            onClose={() => setShowSheet(false)}
          />

        </div>
      </div>
    </main>
  );
}