
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Flame,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const items = [
  {
    title: {
      en: "Ganesh Pooja",
      hi: "गणेश पूजा",
    },
    image: "/images/pooja/ganesh.jpg",
    price: "₹499",
    rating: "4.9",
    booked: "2.1k",
    badge: {
      en: "Trending",
      hi: "ट्रेंडिंग",
    },
  },
  {
    title: {
      en: "Lakshmi Pooja",
      hi: "लक्ष्मी पूजा",
    },
    image: "/images/pooja/lakshmi.jpg",
    price: "₹799",
    rating: "4.9",
    booked: "2.8k",
    badge: {
      en: "Popular",
      hi: "लोकप्रिय",
    },
  },
  {
    title: {
      en: "Rudrabhishek",
      hi: "रुद्राभिषेक",
    },
    image: "/images/pooja/rudrabhishek.jpg",
    price: "₹999",
    rating: "4.8",
    booked: "1.6k",
    badge: {
      en: "Best",
      hi: "बेस्ट",
    },
  },
  {
    title: {
      en: "Satyanarayan",
      hi: "सत्यनारायण पूजा",
    },
    image: "/images/pooja/satyanarayan.jpg",
    price: "₹699",
    rating: "4.9",
    booked: "3.2k",
    badge: {
      en: "Top",
      hi: "टॉप",
    },
  },
];

export default function TrendingSection() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const text = {
    eyebrow: isHindi ? "सबसे पसंदीदा" : "Most Loved",
    title: isHindi ? "ट्रेंडिंग पूजा" : "Trending Poojas",
    subtitle: isHindi
      ? "इस सप्ताह सबसे ज्यादा बुक की गई पूजा"
      : "Most booked poojas this week",
    viewAll: isHindi ? "सभी देखें" : "View All",
    sacred: isHindi ? "पवित्र" : "Sacred",
    booked: isHindi ? "बुकिंग" : "booked",
    startingFrom: isHindi ? "शुरुआत" : "Starting from",
    bookNow: isHindi ? "अभी बुक करें" : "Book Now",
    swipe: isHindi ? "देखने के लिए स्वाइप करें" : "Swipe to explore",
  };

  return (
    <section className="mt-9">

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}
      <div className="mb-5 flex items-end justify-between px-4">

        <div>

          {/* Eyebrow */}
          <div className="mb-2 flex items-center gap-2">

            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-400/10">
              <Flame
                size={15}
                strokeWidth={2}
                className="text-orange-400"
                fill="currentColor"
              />
            </div>

            <span className="text-[10px] font-bold tracking-[0.18em] text-orange-400">
              {text.eyebrow}
            </span>

          </div>

          {/* Title */}
          <h2 className="text-[23px] font-bold tracking-tight text-white">
            {text.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-1 text-[12px] text-gray-500">
            {text.subtitle}
          </p>

        </div>

        {/* =================================================
            VIEW ALL
        ================================================= */}
        <Link
          href="/pooja/online"
          className="group flex shrink-0 items-center gap-1 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/5 px-3 py-2 text-[11px] font-semibold text-[#F3C75F] transition-all duration-300 hover:border-[#DFAE45]/50 hover:bg-[#DFAE45]/10 active:scale-95"
        >
          {text.viewAll}

          <ChevronRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>

      </div>

      {/* =====================================================
          HORIZONTAL CARDS
      ===================================================== */}
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-4">

        {items.map((item) => {
          const title = isHindi
            ? item.title.hi
            : item.title.en;

          const badge = isHindi
            ? item.badge.hi
            : item.badge.en;

          return (
            <Link
              key={item.title.en}
              href="/pooja/details"
              className="group/card relative min-w-[188px] snap-start overflow-hidden rounded-[25px] border border-white/[0.08] bg-[#0A111D] shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DFAE45]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] active:scale-[0.98]"
            >

              {/* =================================================
                  CARD AMBIENT GLOW
              ================================================= */}
              <div className="pointer-events-none absolute -right-10 -top-10 z-10 h-24 w-24 rounded-full bg-[#DFAE45]/10 blur-2xl opacity-0 transition duration-500 group-hover/card:opacity-100" />

              {/* =================================================
                  IMAGE
              ================================================= */}
              <div className="relative h-[178px] w-full overflow-hidden">

                <Image
                  src={item.image}
                  alt={title}
                  fill
                  sizes="188px"
                  className="object-cover transition duration-700 group-hover/card:scale-110"
                />

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/20 to-transparent" />

                {/* Top Glow */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />

                {/* =================================================
                    TRENDING BADGE
                ================================================= */}
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-orange-300/20 bg-black/55 px-2.5 py-1.5 shadow-lg backdrop-blur-md">

                  <Flame
                    size={11}
                    strokeWidth={2}
                    className="text-orange-400"
                    fill="currentColor"
                  />

                  <span className="text-[9px] font-bold tracking-wider text-white">
                    {badge}
                  </span>

                </div>

                {/* =================================================
                    SACRED BADGE
                ================================================= */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full border border-[#DFAE45]/25 bg-black/45 px-2 py-1 backdrop-blur-md">

                  <Sparkles
                    size={10}
                    strokeWidth={2}
                    className="text-[#F3C75F]"
                  />

                  <span className="text-[8px] font-semibold tracking-wider text-gray-200">
                    {text.sacred}
                  </span>

                </div>

                {/* =================================================
                    HOVER ARROW
                ================================================= */}
                <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 opacity-0 backdrop-blur-md transition-all duration-300 group-hover/card:opacity-100">

                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="text-white"
                  />

                </div>

              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}
              <div className="relative p-3.5">

                {/* Rating */}
                <div className="flex items-center gap-1">

                  <Star
                    size={12}
                    strokeWidth={2}
                    className="text-[#F3C75F]"
                    fill="currentColor"
                  />

                  <span className="text-[11px] font-bold text-white">
                    {item.rating}
                  </span>

                  <span className="text-[10px] text-gray-500">
                    • {item.booked} {text.booked}
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-2.5 truncate text-[16px] font-bold text-white">
                  {title}
                </h3>

                {/* Divider */}
                <div className="my-3 h-px bg-gradient-to-r from-[#DFAE45]/20 via-white/5 to-transparent" />

                {/* =================================================
                    PRICE + ICON
                ================================================= */}
                <div className="flex items-center justify-between gap-2">

                  <div>

                    <p className="text-[8px] font-medium tracking-wider text-gray-500">
                      {text.startingFrom}
                    </p>

                    <p className="mt-0.5 text-[17px] font-bold text-[#F3C75F]">
                      {item.price}
                    </p>

                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/30 bg-[#DFAE45]/10 transition-all duration-300 group-hover/card:border-[#DFAE45] group-hover/card:bg-[#DFAE45]">

                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                      className="text-[#F3C75F] transition-colors group-hover/card:text-black"
                    />

                  </div>

                </div>

                {/* =================================================
                    BOOK CTA
                ================================================= */}
                <div className="mt-3 flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#DFAE45] to-[#F3C75F] text-[11px] font-bold text-[#080B10] shadow-[0_8px_20px_rgba(223,174,69,0.12)] transition-all duration-300 group-hover/card:shadow-[0_8px_25px_rgba(223,174,69,0.25)]">
                  {text.bookNow}
                </div>

              </div>

              {/* =================================================
                  BOTTOM GOLD LINE
              ================================================= */}
              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent transition-all duration-500 group-hover/card:w-[70%]" />

            </Link>
          );
        })}

      </div>

      {/* =====================================================
          SWIPE HINT
      ===================================================== */}
      <div className="mt-1 flex items-center justify-center gap-2 px-4">

        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/5" />

        <span className="whitespace-nowrap text-[9px] font-medium tracking-[0.16em] text-gray-600">
          {text.swipe}
        </span>

        <ChevronRight
          size={12}
          strokeWidth={2}
          className="text-gray-600"
        />

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/5" />

      </div>

    </section>
  );
}

