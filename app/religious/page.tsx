"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import SearchBar from "@/components/religious/SearchBar";
import CitySelector from "@/components/religious/CitySelector";
import WelcomeBanner from "@/components/religious/WelcomeBanner";
import TopCategories from "@/components/religious/TopCategories";
import PopularPujas from "@/components/religious/PopularPujas";
import JyotishSection from "@/components/religious/JyotishSection";
import VastuSection from "@/components/religious/VastuSection";
import OfferBanner from "@/components/religious/OfferBanner";
import TopPandits from "@/components/religious/TopPandits";
import Reviews from "@/components/religious/Reviews";
import FAQ from "@/components/religious/FAQ";
import BottomNav from "@/components/BottomNav";

export default function ReligiousPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#071321] flex justify-center">
      {/* Mobile Container */}
      <div className="w-full max-w-[430px] min-h-screen bg-[#071321] text-white border-x border-white/10 pb-24">

        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#081423] border-b border-white/10">
          <div className="flex items-center justify-between px-4 py-4">

            {/* Left Side */}
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-white">Religious </span>
                <span className="text-[#D4AF37]">Services</span>
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                Book verified Pandits & Spiritual Experts
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <ArrowLeft size={22} className="text-white" />
            </button>

          </div>
        </header>

        {/* Components */}
        <SearchBar />

        <CitySelector />

        <WelcomeBanner />

        <TopCategories />

        <PopularPujas />

        <JyotishSection />

        <VastuSection />

        <OfferBanner />

        <TopPandits />

        <Reviews />

        <FAQ />

        <BottomNav />

      </div>
    </main>
  );
}