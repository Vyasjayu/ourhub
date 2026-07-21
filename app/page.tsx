
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/religious/SearchBar";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceWheel from "@/components/ServiceWheel";
import PopularCategories from "@/components/PopularCategories";
import OfferBanner from "@/components/OfferBanner";
import TrendingServices from "@/components/TrendingServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
   <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-4">

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="mx-auto max-w-md">

        <Header
          onMenuClick={() => setSidebarOpen(true)}
        />
<SearchBar />

<Hero />
<SectionTitle
  title="Popular Categories"
  subtitle="Choose your required service"
  actionText="View All"
/>
<ServiceWheel />
<PopularCategories />
<OfferBanner />
<TrendingServices />
<WhyChooseUs />
<Testimonials />
      </div>
<BottomNav />
</div>
</div>
    </main>
  );
}

