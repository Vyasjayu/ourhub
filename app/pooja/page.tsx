"use client";

import { useState } from "react";

import Header from "@/components/pooja/Header";
import LocationBar from "@/components/pooja/LocationBar";
import SearchBar from "@/components/pooja/SearchBar";
import TrendingPooja from "@/components/pooja/TrendingPooja";
import PoojaGrid from "@/components/pooja/PoojaGrid";
import WhyChooseUs from "@/components/pooja/WhyChooseUs";
import HelpCard from "@/components/pooja/HelpCard";
import BottomNav from "@/components/BottomNav";
// import BottomNavigation from "@/components/pooja/BottomNavigation";

export default function PoojaPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-[#081018] flex justify-center">
      <div className="w-full max-w-[430px] bg-[#081018] text-white pb-28">

        <Header />

        <div className="px-4 space-y-5">
<div></div>
          <LocationBar />

          <SearchBar
            search={search}
            setSearch={setSearch}
          />


          {/* Searchable Pooja Grid */}
          <PoojaGrid
            search={search}
          />
          <TrendingPooja />

          <WhyChooseUs />

          <HelpCard />

        </div>

        <BottomNav />

      </div>
    </main>
  );
}