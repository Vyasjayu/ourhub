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

  // Search State
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedPhone = getPhone();

    if (savedPhone) {
      setPhone(savedPhone);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#071424] flex justify-center py-6">

      <div
        className="
          relative
          w-full
          max-w-[430px]
          min-h-screen
          overflow-hidden
          rounded-[36px]
          border
          border-slate-700
          bg-[#071424]
          shadow-2xl
        "
      >
        <ScrollReveal />

        {/* Sidebar */}
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Categories Bottom Sheet */}
        <CategoriesSheet
          open={categoriesOpen}
          onClose={() => setCategoriesOpen(false)}
        />

        {/* Main Content */}
        <div className="px-4 pb-28">

          {/* Header */}
          <Header
            onMenuClick={() => setSidebarOpen(true)}
          />

          {/* Search */}
          <div className="mt-4">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          {/* Hero Banner */}
          <section className="mt-5">
            <HeroSlider />
          </section>

          {/* Popular Categories */}
          <section className="mt-7">
            <PopularCategories
              search={search}
              onMoreClick={() => setCategoriesOpen(true)}
            />
          </section>

          {/* Offer */}
          <section className="mt-6">
            <OfferBanner />
          </section>

          {/* Most Booked Services */}
          <section className="mt-7">
            <MostBookedServices
              search={search}
            />
          </section>

          {/* Why Choose Us */}
          <section className="mt-7">
            <WhyChooseUs />
          </section>

          {/* Testimonials */}
          <section className="mt-8">
            <Testimonials />
          </section>

        </div>

        {/* Bottom Navigation */}
        <BottomNav
          onCategoriesClick={() => setCategoriesOpen(true)}
        />

      </div>

    </main>
  );
}