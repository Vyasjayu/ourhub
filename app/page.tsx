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
import Trending from "@/components/Trending";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="bg-[#071321] min-h-screen relative">
      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Header */}
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* Page Content */}
      <Hero />
      <ServiceCircle />
      <Categories />
      <BannerSlider />
      <Features />
      <Trending />
      <Offer />

      {/* Bottom Navigation */}
      <BottomNav />
    </main>
  );
}