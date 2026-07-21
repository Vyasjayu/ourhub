"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import SearchBar from "@/components/religious/SearchBar";
import CitySelector from "@/components/religious/CitySelector";
import PanditList from "@/components/religious/PanditList";

export default function PanditBookingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex justify-center bg-[#071321]">
      <div className="w-full max-w-[430px] bg-[#071321] text-white min-h-screen">

        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#081423] border-b border-white/10">
          <div className="flex items-center justify-between px-4 py-4">

            {/* Left Side */}
            <div>
              <h1 className="text-2xl font-bold">
                🛕 Pandit Booking
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                Book Trusted Pandits Near You
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

        {/* Search */}
        <SearchBar />

        {/* City */}
        <CitySelector />

        {/* Pandit List */}
        <PanditList />

      </div>
    </main>
  );
}