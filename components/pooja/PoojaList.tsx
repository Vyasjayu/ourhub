"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  Star,
} from "lucide-react";

import PoojaCard from "./PoojaCard";

const poojas = [
  {
    slug: "ganesh-pooja",
    title: "Ganesh Pooja",
    description: "Remove obstacles and bring success & prosperity.",
    duration: "60-90 min",
    price: "1,101",
    image: "/pooja/ganesh-card.jpg",
  },
  {
    slug: "lakshmi-pooja",
    title: "Lakshmi Pooja",
    description: "Attract wealth, happiness and good fortune.",
    duration: "60-90 min",
    price: "1,251",
    image: "/pooja/lakshmi-card.jpg",
  },
  {
    slug: "navgrah-pooja",
    title: "Navgrah Shanti Pooja",
    description: "Balance planetary energies and reduce doshas.",
    duration: "90-120 min",
    price: "2,101",
    image: "/pooja/navgrah-card.jpg",
  },
  {
    slug: "maha-mrityunjaya-pooja",
    title: "Maha Mrityunjaya Pooja",
    description: "For good health, peace and protection.",
    duration: "60-90 min",
    price: "1,501",
    image: "/pooja/mahadev-card.jpg",
  },
];

export default function PoojaList() {
  return (
    <section className="relative mt-9 w-full overflow-hidden">
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-[70px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-44 w-44 rounded-full bg-[#8B5CF6]/10 blur-[80px]" />

      {/* ================= HEADER ================= */}
      <div className="relative mb-5 flex items-end justify-between px-1">
        <div>
          {/* EYEBROW */}
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#DFAE45]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
              Sacred Rituals
            </span>

            <Sparkles
              size={12}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />
          </div>

          {/* TITLE */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/[0.07] shadow-[0_0_20px_rgba(223,174,69,0.08)]">
              <Sparkles
                size={17}
                className="text-[#F3C75F]"
                strokeWidth={1.8}
              />
            </div>

            <div>
              <h2 className="text-[21px] font-bold leading-tight tracking-[-0.02em] text-white">
                Choose a Pooja
              </h2>

              <p className="mt-0.5 text-[11px] text-white/40">
                Bring divine blessings to your home
              </p>
            </div>
          </div>
        </div>

        {/* VIEW ALL */}
        <Link
          href="/pooja/all"
          className="
            group
            flex
            shrink-0
            items-center
            gap-1.5
            rounded-full
            border
            border-[#DFAE45]/20
            bg-[#DFAE45]/[0.06]
            px-3
            py-2
            text-[11px]
            font-semibold
            text-[#E7B94F]
            shadow-[0_4px_20px_rgba(0,0,0,0.15)]
            transition-all
            duration-300
            hover:border-[#DFAE45]/40
            hover:bg-[#DFAE45]/10
          "
        >
          <span>View All</span>

          <ChevronRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* ================= TRUST STRIP ================= */}
      <div className="mb-4 flex items-center gap-2 overflow-hidden px-1">
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5">
          <Star
            size={11}
            fill="currentColor"
            className="text-[#DFAE45]"
          />

          <span className="text-[9px] font-medium text-white/55">
            Highly Rated
          </span>
        </div>

        <div className="h-1 w-1 shrink-0 rounded-full bg-white/15" />

        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5">
          <Sparkles
            size={11}
            className="text-[#DFAE45]"
          />

          <span className="text-[9px] font-medium text-white/55">
            Authentic Rituals
          </span>
        </div>

        <div className="h-1 w-1 shrink-0 rounded-full bg-white/15" />

        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5">
          <span className="text-[9px] font-medium text-white/55">
            Verified Pandits
          </span>
        </div>
      </div>

      {/* ================= CAROUSEL ================= */}
      <div
        className="
          relative
          -mx-1
          flex
          w-[calc(100%+8px)]
          gap-4
          overflow-x-auto
          overflow-y-hidden
          px-1
          pb-5
          snap-x
          snap-mandatory
          scroll-smooth
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {poojas.map((item, index) => (
          <div
            key={item.slug}
            className="
              relative
              w-[292px]
              min-w-[292px]
              shrink-0
              snap-start
              sm:w-[330px]
              sm:min-w-[330px]
            "
          >
            {/* CARD NUMBER */}
            <div className="pointer-events-none absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/45 backdrop-blur-md">
              <span className="text-[9px] font-bold tracking-wider text-white/45">
                0{index + 1}
              </span>
            </div>

            {/* PREMIUM GLOW */}
            <div className="pointer-events-none absolute -inset-1 rounded-[27px] bg-gradient-to-r from-[#DFAE45]/10 via-transparent to-[#8B5CF6]/10 opacity-0 blur-xl transition duration-500 hover:opacity-100" />

            <div className="relative">
              <PoojaCard
                slug={item.slug}
                title={item.title}
                description={item.description}
                duration={item.duration}
                price={item.price}
                image={item.image}
              />
            </div>
          </div>
        ))}

        {/* ================= EXPLORE CARD ================= */}
        <Link
          href="/pooja/all"
          className="
            group
            relative
            flex
            w-[190px]
            min-w-[190px]
            shrink-0
            snap-start
            flex-col
            justify-between
            overflow-hidden
            rounded-[26px]
            border
            border-[#DFAE45]/20
            bg-gradient-to-br
            from-[#15110A]
            via-[#0B0D13]
            to-[#080A10]
            p-5
            shadow-[0_18px_45px_rgba(0,0,0,0.28)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#DFAE45]/40
          "
        >
          {/* GLOW */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#DFAE45]/15 blur-[45px]" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <Sparkles
                  size={21}
                  className="text-[#E7B94F]"
                  strokeWidth={1.7}
                />
              </div>

              <ArrowUpRight
                size={18}
                className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#DFAE45]"
              />
            </div>

            <span className="mt-5 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]/70">
              Explore More
            </span>

            <h3 className="mt-1.5 text-[18px] font-bold leading-tight text-white">
              Sacred Poojas
            </h3>

            <p className="mt-2 text-[11px] leading-5 text-white/40">
              Discover more rituals, ceremonies and special poojas.
            </p>
          </div>

          <div className="relative mt-8">
            <div className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2.5">
              <span className="text-[10px] font-semibold text-white/60">
                View all poojas
              </span>

              <ChevronRight
                size={14}
                className="text-[#DFAE45] transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/50 to-transparent" />
        </Link>
      </div>

      {/* ================= SWIPE HINT ================= */}
      <div className="mt-0 flex items-center justify-center gap-2">
        <span className="h-1 w-7 rounded-full bg-gradient-to-r from-[#DFAE45] to-[#F3C75F]" />

        <span className="h-1 w-1 rounded-full bg-white/15" />
        <span className="h-1 w-1 rounded-full bg-white/15" />
        <span className="h-1 w-1 rounded-full bg-white/15" />

        <span className="ml-1 text-[9px] font-medium text-white/25">
          Swipe to explore
        </span>
      </div>
    </section>
  );
}