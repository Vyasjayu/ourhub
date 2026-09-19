
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Video,
  Landmark,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function OnlineOfflineCard() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const content = {
    eyebrow: isHindi
      ? "पवित्र अनुभव"
      : "Sacred Experiences",

    titleOnline: isHindi ? "ऑनलाइन" : "Online",
    titleOffline: isHindi ? "ऑफलाइन पूजा" : "Offline Pooja",

    description: isHindi
      ? "प्रामाणिक पूजा, आशीर्वाद और दिव्य परंपराओं का अनुभव अपने पसंदीदा तरीके से करें।"
      : "Choose your preferred way to experience authentic rituals, blessings and divine traditions.",

    verifiedPandits: isHindi
      ? "प्रमाणित पंडित"
      : "Verified Pandits",

    trustedService: isHindi
      ? "विश्वसनीय सेवा"
      : "Trusted Service",

    online: isHindi
      ? "ऑनलाइन पूजा"
      : "Online Pooja",

    onlineBadge: isHindi
      ? "लाइव"
      : "Live",

    onlineDescription: isHindi
      ? "घर बैठे पवित्र पूजा और धार्मिक अनुष्ठानों से जुड़ें।"
      : "Join sacred rituals from the comfort of your home.",

    bookOnline: isHindi
      ? "ऑनलाइन बुक करें"
      : "Book Online",

    offline: isHindi
      ? "ऑफलाइन पूजा"
      : "Offline Pooja",

    offlineBadge: isHindi
      ? "व्यक्तिगत"
      : "Personal",

    offlineDescription: isHindi
      ? "अनुभवी पंडित को अपने घर या मंदिर में पूजा के लिए आमंत्रित करें।"
      : "Invite an experienced Pandit to your home or temple.",

    bookOffline: isHindi
      ? "ऑफलाइन बुक करें"
      : "Book Offline",

    bottomNote: isHindi
      ? "दिव्य • प्रामाणिक • विश्वसनीय"
      : "Divine • Authentic • Trusted",
  };

  return (
    <section className="mt-8 px-0">
      <div className="group relative overflow-hidden rounded-[30px] border border-[#DFAE45]/30 bg-[#080D16] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

        {/* =====================================================
            AMBIENT GOLD GLOW
        ===================================================== */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-[#DFAE45]/5 blur-3xl" />

        {/* =====================================================
            TEMPLE BACKGROUND
        ===================================================== */}
        <Image
          src="/pooja/temple.jpg"
          alt={isHindi ? "पवित्र मंदिर" : "Sacred temple"}
          fill
          priority
          className="object-cover opacity-[0.28] transition duration-700 group-hover:scale-105"
        />

        {/* =====================================================
            CINEMATIC OVERLAY
        ===================================================== */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#071424]/95 to-[#071424]/55" />

        {/* =====================================================
            TOP GOLD LINE
        ===================================================== */}
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/70 to-transparent" />

        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div className="relative z-10 p-5 sm:p-6">

          {/* ===================================================
              HEADING
          =================================================== */}
          <div className="flex items-start justify-between gap-3">

            <div>

              {/* Eyebrow */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 px-3 py-1.5">

                <Sparkles
                  size={13}
                  strokeWidth={2}
                  className="text-[#F3C75F]"
                />

                <span className="text-[10px] font-bold tracking-[0.18em] text-[#F3C75F]">
                  {content.eyebrow}
                </span>

              </div>

              {/* Title */}
              <h2 className="flex flex-wrap items-center gap-2 text-[23px] font-bold tracking-tight text-white">

                <span>{content.titleOnline}</span>

                <span className="text-[#DFAE45]">
                  &
                </span>

                <span>{content.titleOffline}</span>

              </h2>

              {/* Description */}
              <p className="mt-2 max-w-[300px] text-[13px] leading-5 text-gray-400">
                {content.description}
              </p>

            </div>

            {/* Decorative Icon */}
            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-black/30 sm:flex">
              <Sparkles
                size={19}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

          </div>

          {/* ===================================================
              TRUST STRIP
          =================================================== */}
          <div className="mt-5 flex items-center gap-2 overflow-hidden">

            {/* Verified */}
            <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-black/25 px-2.5 py-1.5">

              <ShieldCheck
                size={12}
                strokeWidth={2}
                className="text-[#DFAE45]"
              />

              <span className="text-[10px] font-medium text-gray-300">
                {content.verifiedPandits}
              </span>

            </div>

            {/* Trusted */}
            <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-black/25 px-2.5 py-1.5">

              <Star
                size={12}
                strokeWidth={2}
                className="fill-[#DFAE45] text-[#DFAE45]"
              />

              <span className="text-[10px] font-medium text-gray-300">
                {content.trustedService}
              </span>

            </div>

          </div>

          {/* ===================================================
              EXPERIENCE CARDS
          =================================================== */}
          <div className="mt-5 grid grid-cols-2 gap-3">

            {/* =================================================
                ONLINE POOJA
            ================================================= */}
            <Link
              href="/pooja/online"
              className="group/card relative overflow-hidden rounded-[24px] border border-[#DFAE45]/25 bg-[#0A111D]/90 p-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#DFAE45]/60 hover:bg-[#0D1624] active:scale-[0.98]"
            >

              {/* Card Glow */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#DFAE45]/10 blur-2xl transition duration-300 group-hover/card:bg-[#DFAE45]/20" />

              <div className="relative z-10">

                {/* Icon + Badge */}
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 to-transparent shadow-inner">

                    <Video
                      size={27}
                      strokeWidth={1.8}
                      className="text-[#F3C75F]"
                    />

                  </div>

                  <span className="rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-2 py-1 text-[8px] font-bold tracking-wider text-[#F3C75F]">
                    {content.onlineBadge}
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-4 text-[18px] font-bold text-white">
                  {content.online}
                </h3>

                {/* Description */}
                <p className="mt-1.5 min-h-[54px] text-[11px] leading-5 text-gray-400">
                  {content.onlineDescription}
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-[#DFAE45]/30 bg-[#DFAE45]/10 px-3 py-2.5 transition-all duration-300 group-hover/card:bg-[#DFAE45]">

                  <span className="text-[11px] font-bold text-[#F3C75F] transition-colors duration-300 group-hover/card:text-black">
                    {content.bookOnline}
                  </span>

                  <ArrowRight
                    size={15}
                    strokeWidth={2.2}
                    className="text-[#F3C75F] transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:text-black"
                  />

                </div>

              </div>
            </Link>

            {/* =================================================
                OFFLINE POOJA
            ================================================= */}
            <Link
              href="/pooja/offline"
              className="group/card relative overflow-hidden rounded-[24px] border border-[#DFAE45]/25 bg-[#0A111D]/90 p-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#DFAE45]/60 hover:bg-[#0D1624] active:scale-[0.98]"
            >

              {/* Card Glow */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#DFAE45]/10 blur-2xl transition duration-300 group-hover/card:bg-[#DFAE45]/20" />

              <div className="relative z-10">

                {/* Icon + Badge */}
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 to-transparent shadow-inner">

                    <Landmark
                      size={27}
                      strokeWidth={1.8}
                      className="text-[#F3C75F]"
                    />

                  </div>

                  <span className="rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-2 py-1 text-[8px] font-bold tracking-wider text-[#F3C75F]">
                    {content.offlineBadge}
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-4 text-[18px] font-bold text-white">
                  {content.offline}
                </h3>

                {/* Description */}
                <p className="mt-1.5 min-h-[54px] text-[11px] leading-5 text-gray-400">
                  {content.offlineDescription}
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-[#DFAE45]/30 bg-[#DFAE45]/10 px-3 py-2.5 transition-all duration-300 group-hover/card:bg-[#DFAE45]">

                  <span className="text-[11px] font-bold text-[#F3C75F] transition-colors duration-300 group-hover/card:text-black">
                    {content.bookOffline}
                  </span>

                  <ArrowRight
                    size={15}
                    strokeWidth={2.2}
                    className="text-[#F3C75F] transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:text-black"
                  />

                </div>

              </div>
            </Link>

          </div>

          {/* ===================================================
              BOTTOM NOTE
          =================================================== */}
          <div className="mt-4 flex items-center justify-center gap-2">

            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

            <span className="whitespace-nowrap text-[9px] font-medium tracking-[0.16em] text-gray-500">
              {content.bottomNote}
            </span>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />

          </div>

        </div>
      </div>
    </section>
  );
}

