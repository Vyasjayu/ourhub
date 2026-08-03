"use client";

import { useEffect, useState } from "react";

import AstrologerCard from "@/components/astrology/AstrologerCard";
import AstrologyServices from "@/components/astrology/AstrologyServices";
import BottomNavigation from "@/components/astrology/BottomNavigation";
import FAQ from "@/components/astrology/FAQ";
import FreeKundli from "@/components/astrology/FreeKundli";
import Hero from "@/components/astrology/Hero";
import LocationBar from "@/components/astrology/LocationBar";
import ReviewSection from "@/components/astrology/ReviewSection";
import SearchAstrologer from "@/components/astrology/SearchAstrologer";
import TrendingServices from "@/components/astrology/TrendingServices";
import WhyChooseUs from "@/components/astrology/WhyChooseUs";

type Astrologer = {
  _id: string;
  fullName: string;
  displayName: string;
  mobile: string;
  profilePhoto: string;
  category: string;
  city: string;
  state: string;
  experience: string;
  specialization: string;
  languages: string;
  price: string;
  rating: number;
  totalReviews: number;
  totalConsultations: number;
  about: string;
};

export default function JyotishPage() {
  const [astrologers, setAstrologers] = useState<Astrologer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAstrologers();
  }, []);

  async function loadAstrologers() {
    try {
      const res = await fetch("/api/astrology");

      const data = await res.json();

      if (data.success) {
        setAstrologers(data.astrologers);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050B14] pb-24">
      <Hero />

      <div className="mx-auto max-w-md px-3">
        <LocationBar />

        <SearchAstrologer />

        <TrendingServices />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-white">
            ⭐ Top Astrologers
          </h2>

          <div className="mt-5 space-y-4">
            {loading && (
              <div className="py-10 text-center text-gray-400">
                Loading Astrologers...
              </div>
            )}

            {!loading && astrologers.length === 0 && (
              <div className="rounded-2xl bg-[#101C30] p-6 text-center text-gray-400">
                No Verified Astrologers Found
              </div>
            )}

            {!loading &&
              astrologers.map((astrologer) => (
                <AstrologerCard
                  key={astrologer._id}
                  astrologer={astrologer}
                />
              ))}
          </div>
        </section>

        <AstrologyServices />

        <WhyChooseUs />

        <FreeKundli />

        <ReviewSection />

        <FAQ />
      </div>

      <BottomNavigation />
    </main>
  );
}