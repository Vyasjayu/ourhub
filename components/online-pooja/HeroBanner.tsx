"use client";

import Image from "next/image";
import Link from "next/link";
import {
ArrowRight,
BadgeCheck,
Sparkles,
PlayCircle,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function HeroBanner() {
const { language } = useLanguage();
const isHindi = language === "hi";

const text = {
imageAlt: isHindi
? "ऑनलाइन पूजा बुकिंग"
: "Online Pooja Booking",


sacredExperience: isHindi
  ? "पवित्र अनुभव"
  : "Sacred Experience",

online: isHindi
  ? "ऑनलाइन"
  : "Online",

divineBlessings: isHindi
  ? "दिव्य आशीर्वाद"
  : "Divine Blessings",

titleLineOne: isHindi
  ? "घर बैठे पूजा का"
  : "Experience Pooja",

titleLineTwo: isHindi
  ? "पवित्र अनुभव करें"
  : "From Your Home",

description: isHindi
  ? "अनुभवी पंडितों के साथ प्रामाणिक पूजा बुक करें और घर बैठे पवित्र अनुष्ठानों से जुड़ें।"
  : "Book authentic rituals with experienced pandits and join sacred ceremonies online.",

explore: isHindi
  ? "पूजा देखें"
  : "Explore Poojas",

verifiedPandits: isHindi
  ? "प्रमाणित पंडित"
  : "Verified Pandits",

liveRituals: isHindi
  ? "लाइव अनुष्ठान"
  : "Live Rituals",

secureBooking: isHindi
  ? "सुरक्षित बुकिंग"
  : "Secure Booking",

};

return ( <section className="relative mt-5">
{/* Ambient Glow */} <div className="pointer-events-none absolute -inset-3 rounded-[32px] bg-[#DFAE45]/[0.045] blur-2xl" />


  <div
    className="
      group
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-[#DFAE45]/20
      bg-[#081321]
      shadow-[0_20px_55px_rgba(0,0,0,0.38)]
    "
  >
    {/* =========================================
        HERO IMAGE
    ========================================== */}
    <div className="relative aspect-[1.85/1] w-full overflow-hidden">
      <Image
        src="/banners/online-banner.png"
        alt={text.imageAlt}
        fill
        priority
        sizes="(max-width: 640px) 100vw, 768px"
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.025]
        "
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03070D]/85 via-[#03070D]/35 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#03070D]/90 via-transparent to-[#03070D]/10" />

      {/* Gold Light */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#DFAE45]/15 blur-[65px]" />

      {/* =====================================
          TOP BADGE
      ====================================== */}
      <div className="absolute left-4 top-4">
        <div
          className="
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-[#DFAE45]/25
            bg-black/35
            px-2.5
            py-1.5
            backdrop-blur-md
          "
        >
          <Sparkles
            size={11}
            strokeWidth={1.8}
            className="text-[#E7B94F]"
          />

          <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/80">
            {text.sacredExperience}
          </span>
        </div>
      </div>

      {/* =====================================
          LIVE BADGE
      ====================================== */}
      <div className="absolute right-4 top-4">
        <div
          className="
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-white/10
            bg-black/35
            px-2.5
            py-1.5
            backdrop-blur-md
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>

          <span className="text-[8px] font-semibold text-white/75">
            {text.online}
          </span>
        </div>
      </div>

      {/* =====================================
          HERO CONTENT
      ====================================== */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="max-w-[270px]">
          <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
            {text.divineBlessings}
          </p>

          <h2 className="text-[22px] font-bold leading-[1.12] tracking-[-0.025em] text-white">
            {text.titleLineOne}
            <br />
            {text.titleLineTwo}
          </h2>

          <p className="mt-2 max-w-[245px] text-[9px] leading-4 text-white/55">
            {text.description}
          </p>

          {/* CTA */}
          <Link
            href="/pooja/online"
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-[#F3C75F]/30
              bg-gradient-to-r
              from-[#DFAE45]
              to-[#F3C75F]
              px-3.5
              py-2.5
              text-[10px]
              font-bold
              text-[#171007]
              shadow-[0_8px_25px_rgba(223,174,69,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_30px_rgba(223,174,69,0.28)]
              active:scale-95
            "
          >
            <span>{text.explore}</span>

            <ArrowRight
              size={13}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </div>

    {/* =========================================
        TRUST STRIP
    ========================================== */}
    <div className="border-t border-white/[0.06] bg-[#07101C]/90 px-3 py-2.5">
      <div className="flex items-center justify-between">
        {/* Verified */}
        <div className="flex items-center gap-1.5">
          <BadgeCheck
            size={13}
            strokeWidth={2}
            className="text-[#DFAE45]"
          />

          <span className="text-[8px] font-semibold text-white/50">
            {text.verifiedPandits}
          </span>
        </div>

        <span className="h-3 w-px bg-white/[0.08]" />

        {/* Live */}
        <div className="flex items-center gap-1.5">
          <PlayCircle
            size={13}
            strokeWidth={2}
            className="text-[#DFAE45]"
          />

          <span className="text-[8px] font-semibold text-white/50">
            {text.liveRituals}
          </span>
        </div>

        <span className="h-3 w-px bg-white/[0.08]" />

        {/* Secure */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[#DFAE45]">
            ✦
          </span>

          <span className="text-[8px] font-semibold text-white/50">
            {text.secureBooking}
          </span>
        </div>
      </div>
    </div>

    {/* Bottom Gold Accent */}
    <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/50 to-transparent" />
  </div>
</section>

);
}
