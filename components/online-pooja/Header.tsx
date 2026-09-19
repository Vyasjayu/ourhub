"use client";

import Link from "next/link";
import {
ArrowLeft,
Bell,
Sparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
const { language } = useLanguage();
const isHindi = language === "hi";

const text = {
back: isHindi ? "पूजा पर वापस जाएं" : "Back to Pooja",


title: isHindi
  ? "ऑनलाइन पूजा"
  : "Online Pooja",

subtitle: isHindi
  ? "श्रद्धा के साथ बुक करें"
  : "BOOK WITH FAITH",

notifications: isHindi
  ? "सूचनाएं"
  : "Notifications",

};

return ( <header className="relative pt-4">
{/* Ambient Glow */} <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-52 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.06] blur-[45px]" />


  <div className="relative flex items-center justify-between">
    {/* =========================================
        BACK BUTTON
    ========================================== */}
    <Link
      href="/pooja"
      aria-label={text.back}
      className="
        group
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.035]
        text-white/65
        shadow-[0_8px_25px_rgba(0,0,0,0.18)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#DFAE45]/30
        hover:bg-[#DFAE45]/[0.07]
        hover:text-[#E7B94F]
        active:scale-90
      "
    >
      <ArrowLeft
        size={20}
        strokeWidth={1.8}
        className="transition-transform duration-300 group-hover:-translate-x-0.5"
      />
    </Link>

    {/* =========================================
        CENTER BRANDING
    ========================================== */}
    <div className="absolute left-1/2 -translate-x-1/2 text-center">
      {/* Brand */}
      <div className="flex items-center justify-center gap-1.5">
        <Sparkles
          size={10}
          strokeWidth={1.7}
          className="text-[#DFAE45]/70"
        />

        <p className="text-[9px] font-bold tracking-[0.38em] text-[#DFAE45]">
          OURHUB
        </p>

        <Sparkles
          size={10}
          strokeWidth={1.7}
          className="text-[#DFAE45]/70"
        />
      </div>

      {/* Title */}
      <h1 className="mt-1 whitespace-nowrap text-[17px] font-bold tracking-[-0.02em] text-white">
        {text.title}
      </h1>

      {/* Subtitle */}
      <div className="mt-1 flex items-center justify-center gap-1.5">
        <span className="h-px w-4 bg-gradient-to-r from-transparent to-[#DFAE45]/60" />

        <span className="whitespace-nowrap text-[8px] font-medium tracking-[0.12em] text-white/35">
          {text.subtitle}
        </span>

        <span className="h-px w-4 bg-gradient-to-l from-transparent to-[#DFAE45]/60" />
      </div>
    </div>

    {/* =========================================
        NOTIFICATION
    ========================================== */}
    <button
      type="button"
      aria-label={text.notifications}
      title={text.notifications}
      className="
        group
        relative
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.035]
        text-white/65
        shadow-[0_8px_25px_rgba(0,0,0,0.18)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#DFAE45]/30
        hover:bg-[#DFAE45]/[0.07]
        hover:text-[#E7B94F]
        active:scale-90
      "
    >
      <Bell
        size={19}
        strokeWidth={1.8}
        className="transition-transform duration-300 group-hover:rotate-[-8deg]"
      />

      {/* Notification Dot */}
      <span className="absolute right-[8px] top-[7px] flex h-[10px] w-[10px] items-center justify-center">
        <span className="absolute h-full w-full animate-ping rounded-full bg-red-500/40" />

        <span className="relative h-[6px] w-[6px] rounded-full bg-red-500 ring-2 ring-[#071424]" />
      </span>
    </button>
  </div>

  {/* =========================================
      BOTTOM ACCENT
  ========================================== */}
  <div className="mt-4 flex items-center justify-center gap-2">
    <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#DFAE45]/20" />

    <span className="h-1 w-1 rounded-full bg-[#DFAE45]/50 shadow-[0_0_8px_rgba(223,174,69,0.5)]" />

    <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#DFAE45]/20" />
  </div>
</header>


);
}
