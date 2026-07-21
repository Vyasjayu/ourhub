"use client";

import { useState } from "react";

import BannerSlider from "@/components/BannerSlider";
import BottomNav from "@/components/BottomNav";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import ServiceCircle from "@/components/ServiceCircle";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile Container */}
      <div className="mx-auto w-full max-w-md min-h-screen bg-slate-950 relative overflow-hidden">

        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
          <Header onMenuClick={() => setSidebarOpen(true)} />
        </div>

        {/* Page Content */}
        <div className="pb-24">
          <Hero />
          <ServiceCircle />
          <Categories />
          <BannerSlider />
          <Features />
          <Trending />
          <Offer />
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950 border-t border-slate-800">
          <div className="mx-auto max-w-md">
            <BottomNav />
          </div>
        </div>

      </div>
    </main>
  );
}