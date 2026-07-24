"use client";

import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Wallet,
  Headphones,
  Wrench,
  Home,
  Building2,
  Tractor,
} from "lucide-react";
import { FaOm } from "react-icons/fa6";
import { div } from "framer-motion/client";

export default function HeroBanner() {
  return (
    <section className="px-3 mt-4">
      <div
        className="
        relative
        overflow-hidden
        rounded-[22px]
        border
        border-yellow-500/20
        bg-[#0B1018]
        shadow-[0_10px_40px_rgba(0,0,0,.45)]
        h-[240px]
        "
      >
        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#11141B] via-[#0F131C] to-[#090C12]" />

        <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-yellow-400/5 blur-[90px]" />

        <div className="relative flex h-full">

          {/* LEFT */}

         <div className="w-[52%] h-full flex flex-col justify-between px-4 py-4 z-20">
            {/* Trusted */}

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1A1D25] px-3 py-1.5">

              <span className="text-yellow-400 text-xs">⭐</span>

              <span className="text-[11px] font-semibold text-white leading-4">
                Trusted By
                <br />
                15K+ Customers
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-4 text-[24px] font-extrabold leading-[28px] text-white">
  Everything
  <br />
  You Need,
</h1>

           <h2 className="mt-1 text-[24px] font-extrabold leading-[28px] text-yellow-400">
  One
  <br />
  Platform
</h2>

           <p className="mt-2 w-[150px] text-[11px] leading-4 text-gray-300">
  Find, book & get the best verified services near you.
</p>

<div className="mt-auto flex justify-between pr-3 pt-3">

  <div className="flex flex-col items-center">
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
      <ShieldCheck size={16} className="text-green-400" />
    </div>

    <span className="mt-1 text-[9px] text-white">Verified</span>
    <span className="text-[8px] text-gray-400">Experts</span>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500/10 border border-yellow-500/20">
      <Wallet size={16} className="text-yellow-400" />
    </div>

    <span className="mt-1 text-[9px] text-white">Secure</span>
    <span className="text-[8px] text-gray-400">Payments</span>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20">
      <Headphones size={16} className="text-blue-400" />
    </div>

    <span className="mt-1 text-[9px] text-white">24×7</span>
    <span className="text-[8px] text-gray-400">Support</span>
  </div>

</div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="relative w-[47%] flex items-center justify-center">

  {/* Glow */}
  <div className="absolute right-3 top-3 h-56 w-56 rounded-full bg-yellow-400/10 blur-[70px]" />

  {/* Rings */}
  {/* <div className="absolute right-6 top-5 h-[170px] w-[170px] rounded-full border border-yellow-500/20" /> */}
  <div className="absolute right-[24px] top-[24px] h-[135px] w-[135px] rounded-full border border-yellow-500/20" />
  <div className="absolute right-[42px] top-[42px] h-[100px] w-[100px] rounded-full border border-yellow-500/20" />

  {/* Technician */}
  <Image
    src="/images/hero-technician.png"
    alt="Technician"
    width={150}
    height={210}
    priority
    className="
      absolute
      top-0
      bottom-10
      right--10
      h-[165px]
      w-auto
      object-contain
      z-20
    "
  />

  {/* Top */}
  <div className="absolute top-[28px] right-[118px] z-30">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] border border-yellow-500/30 shadow-lg">
      <Wrench size={18} className="text-sky-400" />
    </div>
  </div>

  {/* Left */}
  <div className="absolute left-[10px] top-[88px] z-30">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] border border-yellow-500/30 shadow-lg">
      <FaOm size={18} className="text-yellow-400" />
    </div>
  </div>

  {/* Top Right */}
  <div className="absolute right-[16px] top-[28px] z-30">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] border border-yellow-500/30 shadow-lg">
      <Home size={18} className="text-yellow-400" />
    </div>
  </div>

  {/* Right */}
  <div className="absolute right-[0px] top-[88px] z-30">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] border border-yellow-500/30 shadow-lg">
      <Building2 size={18} className="text-yellow-400" />
    </div>
  </div>

  {/* Book Button */}
  <button
    className="
      absolute
      bottom-3
      right-[18px]
      z-30
      flex
      items-center
      gap-2
      rounded-xl
      bg-[#FFC107]
      px-5
      py-2.5
      text-[12px]
      font-bold
      text-black
      shadow-lg
      hover:scale-105
      transition-all
    "
  >
    Book Now
    <ArrowRight size={14} />
  </button>

</div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
    </div>
  </section>
);
}