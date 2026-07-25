"use client";

import { ArrowLeft, Sparkles, ShieldCheck, Star } from "lucide-react";
import { useRouter } from "next/navigation";

import ScrollReveal from "@/ScrollReveal";

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
    <main className="min-h-screen flex justify-center bg-[#020617]">

      <ScrollReveal />

      <div className="relative w-full max-w-[430px] min-h-screen overflow-hidden bg-[#071321] text-white pb-32">

        {/* Background Glow */}

        <div className="absolute inset-x-0 top-0 h-[350px] bg-gradient-to-b from-yellow-400/20 via-orange-400/5 to-transparent blur-3xl" />

        <div className="absolute bottom-40 -right-24 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

        {/* Header */}

        <header className="sticky top-3 z-50 mx-4 mt-3 rounded-3xl border border-white/10 bg-[#081423]/90 backdrop-blur-xl shadow-2xl">

          <div className="flex items-center justify-between p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/20">

                <Sparkles
                  size={20}
                  className="text-yellow-400"
                />

              </div>

              <div>

                <h1 className="text-lg font-bold">
                  Religious
                  <span className="text-yellow-400">
                    {" "}Services
                  </span>
                </h1>

                <p className="text-xs text-slate-400">
                  Book Spiritual Services
                </p>

              </div>

            </div>

            <button
              onClick={() => router.back()}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-yellow-400 hover:text-black"
            >

              <ArrowLeft
                size={22}
                className="text-yellow-400"
              />

            </button>

          </div>

        </header>

        {/* Trust Card */}

        <div className="reveal delay-100">

          <section className="mx-4 mt-6 rounded-3xl border border-green-400/20 bg-gradient-to-r from-green-400/10 to-transparent p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-400/20">

                <ShieldCheck className="text-green-400" />

              </div>

              <div>

                <h3 className="font-semibold">
                  Verified Pandits
                </h3>

                <p className="text-xs text-slate-400">
                  Trusted spiritual experts near you
                </p>

              </div>

            </div>

          </section>

        </div>

        {/* Search */}

        <div className="reveal delay-200">

          <section className="mx-4 mt-5 space-y-3">

            <SearchBar />

            <CitySelector />

          </section>

        </div>

        {/* Hero */}

        <div className="reveal-zoom delay-300">

          <section className="mx-4 mt-6 overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-orange-400/5 to-transparent shadow-xl">

            <WelcomeBanner />

          </section>

        </div>

        {/* ===== PART 2 STARTS HERE ===== */}
        {/* ==============================
    Explore Services
============================== */}

<div className="reveal-left delay-400">

  <section className="mt-8">

    <div className="flex items-center justify-between px-4 mb-3">

      <h2 className="text-lg font-bold">
        Explore Services
      </h2>

      <Star
        size={18}
        className="text-yellow-400"
      />

    </div>

    <div className="mx-4 rounded-3xl border border-white/10 bg-[#081423] p-3">

      <TopCategories />

    </div>

  </section>

</div>

{/* ==============================
    Main Content
============================== */}

<div className="mt-6 space-y-6">

  {/* Popular Pujas */}

  <div className="reveal-right delay-100">

    <section className="mx-4 rounded-3xl border border-white/10 bg-[#081423] p-3 shadow-lg">

      <PopularPujas />

    </section>

  </div>

  {/* Jyotish */}

  <div className="reveal-left delay-200">

    <section className="mx-4 rounded-3xl border border-white/10 bg-[#081423] p-3 shadow-lg">

      <JyotishSection />

    </section>

  </div>

  {/* Vastu */}

  <div className="reveal-right delay-300">

    <section className="mx-4 rounded-3xl border border-white/10 bg-[#081423] p-3 shadow-lg">

      <VastuSection />

    </section>

  </div>

  {/* Offer Banner */}

  <div className="reveal-zoom delay-400">

    <section className="mx-4">

      <OfferBanner />

    </section>

  </div>

  {/* ===== PART 3 STARTS HERE ===== */}
    {/* ==============================
      Top Pandits
  ============================== */}

  <div className="reveal delay-100">

    <section className="mx-4 rounded-3xl border border-white/10 bg-[#081423] p-3 shadow-lg">

      <TopPandits />

    </section>

  </div>

  {/* ==============================
      Reviews
  ============================== */}

  <div className="reveal-left delay-200">

    <section className="mx-4 rounded-3xl border border-white/10 bg-[#081423] p-3 shadow-lg">

      <Reviews />

    </section>

  </div>

  {/* ==============================
      FAQ
  ============================== */}

  <div className="reveal-right delay-300">

    <section className="mx-4 mb-5 rounded-3xl border border-white/10 bg-[#081423] p-3 shadow-lg">

      <FAQ />

    </section>

  </div>

</div>

{/* ==============================
    Bottom Navigation
============================== */}

<div className="reveal-zoom delay-500">

  <BottomNav />

</div>

</div>

</main>

  );
}