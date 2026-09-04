"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import HeroSlider from "@/components/HeroSlider";

import PopularCategories from "@/components/PopularCategories";
import OfferBanner from "@/components/OfferBanner";
import MostBookedServices from "@/components/MostBookedServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BottomNav from "@/components/BottomNav";
import CategoriesSheet from "@/components/CategoriesSheet";

import ScrollReveal from "@/ScrollReveal";
import { getPhone } from "@/lib/user";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [, setPhone] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedPhone = getPhone();

    if (savedPhone) {
      setPhone(savedPhone);
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030812] py-0 sm:py-6">
      {/* ================= PREMIUM BACKGROUND ================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Top Gold Glow */}
        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#f6bd28]/[0.07] blur-[140px]" />

        {/* Left Glow */}
        <div className="absolute left-[-250px] top-[450px] h-[400px] w-[400px] rounded-full bg-[#c68b12]/[0.05] blur-[130px]" />

        {/* Right Glow */}
        <div className="absolute right-[-250px] top-[900px] h-[400px] w-[400px] rounded-full bg-[#f6bd28]/[0.04] blur-[130px]" />

        {/* Grid Effect */}
        <div
          className="
            absolute inset-0 opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:42px_42px]
          "
        />
      </div>

      {/* ================= MOBILE APP CONTAINER ================= */}

      <div
        className="
          relative
          mx-auto
          min-h-screen
          w-full
          max-w-[430px]
          overflow-hidden
          bg-[#07111f]
          sm:min-h-[calc(100vh-48px)]
          sm:rounded-[34px]
          sm:border
          sm:border-[#d8aa39]/20
          sm:shadow-[0_30px_100px_rgba(0,0,0,0.65)]
        "
      >
        {/* Premium Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[100%] -translate-x-1/2 bg-gradient-to-b from-[#f6bd28]/[0.045] to-transparent" />

        <ScrollReveal />

        {/* ================= SIDEBAR ================= */}

        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* ================= CATEGORIES SHEET ================= */}

        <CategoriesSheet
          open={categoriesOpen}
          onClose={() => setCategoriesOpen(false)}
        />

        {/* ================= PAGE CONTENT ================= */}

        <div className="relative z-10 px-4 pb-32">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <div
            className="
              relative
              -mx-4
              border-b
              border-[#d8aa39]/10
              bg-gradient-to-b
              from-[#0a1727]
              to-[#07111f]
              px-4
              pb-0
              pt-2
            "
          >
            {/* Premium line */}

            <div className="absolute bottom-0 left-1/2 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f6bd28]/40 to-transparent" />

            <Header
              onMenuClick={() => setSidebarOpen(true)}
            />
          </div>

          {/* =====================================================
              PREMIUM SEARCH
          ===================================================== */}

          <div className="relative mt-1">
            {/* Gold Glow */}

            <div className="pointer-events-none absolute -inset-1 rounded-[22px] bg-[#f6bd28]/[0.035] blur-xl" />

            <div
              className="
                relative
                rounded-[20px]
                border
                border-[#d8aa39]/20
                bg-[#0a1727]/90
                p-1
                shadow-[0_12px_35px_rgba(0,0,0,0.25)]
              "
            >
              <SearchBar
                value={search}
                onChange={setSearch}
              />
            </div>
          </div>

          {/* =====================================================
              PREMIUM STATUS STRIP
          ===================================================== */}

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d8aa39]/35" />

            <div
              className="
                rounded-full
                border
                border-[#d8aa39]/20
                bg-[#f6bd28]/[0.045]
                px-3
                py-1.5
              "
            >
              <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#e9b934]">
                ✦ Premium Home Services ✦
              </p>
            </div>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d8aa39]/35" />
          </div>

          {/* =====================================================
              HERO
          ===================================================== */}

          <section className="relative mt-5">
            {/* Glow */}

            <div className="absolute -inset-2 rounded-[30px] bg-[#f6bd28]/[0.035] blur-2xl" />

            <div
              className="
                relative
                overflow-hidden
                rounded-[25px]
                border
                border-[#d8aa39]/25
                bg-[#0a1727]
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              "
            >
              <HeroSlider />
            </div>
          </section>

          {/* =====================================================
              TRUST BAR
          ===================================================== */}

          <section className="mt-5">
            <div
              className="
                grid
                grid-cols-3
                overflow-hidden
                rounded-[18px]
                border
                border-[#d8aa39]/20
                bg-[#0a1727]/80
              "
            >
              <div className="border-r border-[#d8aa39]/10 px-2 py-4 text-center">
                <p className="text-[15px] text-white">✦</p>

                <p className="mt-1 text-[10px] font-bold text-white">
                  Verified Experts
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  Trusted Professionals
                </p>
              </div>

              <div className="border-r border-[#d8aa39]/10 px-2 py-4 text-center">
                <p className="text-[15px] text-white">◆</p>

                <p className="mt-1 text-[10px] font-bold text-white">
                  Premium Quality
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  Best Service Experience
                </p>
              </div>

              <div className="px-2 py-4 text-center">
                <p className="text-[15px] text-white">✦</p>

                <p className="mt-1 text-[10px] font-bold text-white">
                  Fast Booking
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  Quick & Easy
                </p>
              </div>
            </div>
          </section>

          {/* =====================================================
              POPULAR CATEGORIES
          ===================================================== */}

          <section className="mt-9">
          
            <div
              className="
                mt-4
                rounded-[24px]
                border
                border-white/[0.05]
                bg-[#0a1727]/40
                p-2
              "
            >
              <PopularCategories
                search={search}
                onMoreClick={() => setCategoriesOpen(true)}
              />
            </div>
          </section>

          {/* =====================================================
              PREMIUM OFFER
          ===================================================== */}

          <section className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#f6bd28]" />

              <p className="text-[10px] font-bold tracking-[2px] text-[#e9b934]">
                EXCLUSIVE BENEFITS
              </p>
            </div>

            <div
              className="
                relative
                overflow-hidden
                rounded-[25px]
                border
                border-[#d8aa39]/30
                bg-[#0a1727]
                shadow-[0_15px_45px_rgba(0,0,0,0.3)]
              "
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#f6bd28]/[0.08] blur-[70px]" />

              <OfferBanner />
            </div>
          </section>

          {/* =====================================================
              MOST BOOKED
          ===================================================== */}

          <section className="mt-5">

            <div
              className="
                mt-4
                rounded-[26px]
                border
                border-[#d8aa39]/15
                bg-[#0a1727]/40
                p-2
              "
            >
              <MostBookedServices
                search={search}
              />
            </div>
          </section>

          {/* =====================================================
              WHY CHOOSE US
          ===================================================== */}

          <section className="mt-10">
          
            <div
              className="
                mt-5
                rounded-[26px]
                border
                border-[#d8aa39]/20
                bg-gradient-to-b
                from-[#0b1929]
                to-[#081321]
                p-3
              "
            >
              <WhyChooseUs />
            </div>
          </section>

          {/* =====================================================
              TESTIMONIALS
          ===================================================== */}

          <section className="mt-10">
            

            <div
              className="
                mt-5
                overflow-hidden
                rounded-[26px]
                border
                border-[#d8aa39]/20
                bg-[#0a1727]/80
                p-3
              "
            >
              <Testimonials />
            </div>
          </section>

          {/* =====================================================
              PREMIUM FOOTER BADGE
          ===================================================== */}

          <section className="mt-10 pb-4">
            <div
              className="
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-[#d8aa39]/20
                bg-gradient-to-r
                from-[#0a1727]
                via-[#111a20]
                to-[#0a1727]
                px-5
                py-5
                text-center
              "
            >
              <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f6bd28]/70 to-transparent" />

              <p className="text-[10px] font-bold tracking-[3px] text-[#e9b934]">
                OURHUB PREMIUM
              </p>

              <h3 className="mt-2 text-[16px] font-bold text-white">
                Exceptional Services.
                <span className="block text-[#e9b934]">
                  Exceptional Experience.
                </span>
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-slate-500">
                Verified professionals, quality service and a hassle-free
                booking experience.
              </p>
            </div>
          </section>
        </div>

        {/* =====================================================
            PREMIUM BOTTOM NAV
        ===================================================== */}

        <div
          className="
            fixed
            bottom-0
            left-1/2
            z-50
            w-full
            max-w-[430px]
            -translate-x-1/2
            border-t
            border-[#d8aa39]/15
            bg-[#081321]/95
            shadow-[0_-15px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
          "
        >
          <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f6bd28]/40 to-transparent" />

          <BottomNav
            onCategoriesClick={() => setCategoriesOpen(true)}
          />
        </div>
      </div>
    </main>
  );
}

/* ============================================================
   PREMIUM SECTION TITLE
============================================================ */

function PremiumSectionTitle({
  eyebrow,
  title,
  highlight,
  center = false,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  center?: boolean;
}) {
  return (
    <div
      className={
        center
          ? "text-center"
          : "text-left"
      }
    >
      <div
        className={
          center
            ? "flex items-center justify-center gap-2"
            : "flex items-center gap-2"
        }
      >
        <span className="h-[2px] w-6 bg-[#f6bd28]" />

        <p className="text-[9px] font-bold tracking-[2.5px] text-[#e9b934]">
          {eyebrow}
        </p>

        {center && (
          <span className="h-[2px] w-6 bg-[#f6bd28]" />
        )}
      </div>

      <h2 className="mt-2 text-[23px] font-bold tracking-tight text-white">
        {title}{" "}
        <span className="text-[#e9b934]">
          {highlight}
        </span>
      </h2>
    </div>
  );
}