"use client";

import { allPoojas } from "@/data/allPooja";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Flame,
  Sparkles,
  Star,
} from "lucide-react";

export default function PoojaList() {
  const visiblePoojas = allPoojas.slice(0, 10);

  return (
    <section className="relative mt-8 overflow-hidden">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-24 top-20 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-44 w-44 rounded-full bg-[#7C3AED]/10 blur-3xl" />

      {/* Header */}
      <div className="relative mb-4 flex items-end justify-between">
        <div>
          {/* Eyebrow */}
          <div className="mb-1.5 flex items-center gap-1.5">
            <Sparkles
              size={11}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#DFAE45]">
              Sacred Collection
            </span>
          </div>

          <h2 className="text-[19px] font-bold tracking-tight text-white">
            All Pooja{" "}
            <span className="text-[#DFAE45]">Services</span>
          </h2>

          <p className="mt-1 text-[9px] text-gray-500">
            Choose a sacred ritual for your special occasion
          </p>
        </div>

        {/* View All */}
        <Link
          href="/online-pooja/all"
          className="
            group
            flex
            items-center
            gap-1
            rounded-full
            border
            border-[#DFAE45]/20
            bg-[#DFAE45]/5
            px-2.5
            py-1.5
            transition-all
            duration-300
            hover:border-[#DFAE45]/40
            hover:bg-[#DFAE45]/10
          "
        >
          <span className="text-[9px] font-semibold text-[#DFAE45]">
            View All
          </span>

          <ChevronRight
            size={12}
            className="text-[#DFAE45] transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* Gold Divider */}
      <div className="mb-4 flex items-center gap-2">
        <div className="h-px flex-1 bg-gradient-to-r from-[#DFAE45]/30 to-transparent" />

        <div className="h-1 w-1 rotate-45 bg-[#DFAE45]/70" />

        <div className="h-px w-10 bg-[#DFAE45]/10" />
      </div>

      {/* Grid */}
      <div className="relative grid grid-cols-2 gap-3">
        {visiblePoojas.map((pooja, index) => (
          <div
            key={pooja.id}
            className="
              group
              relative
              overflow-hidden
              rounded-[21px]
              border
              border-white/[0.07]
              bg-gradient-to-br
              from-[#0D1A2B]
              to-[#080F19]
              shadow-[0_12px_35px_rgba(0,0,0,0.28)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#DFAE45]/30
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.4)]
            "
          >
            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 z-10 h-24 w-24 rounded-full bg-[#DFAE45]/5 blur-2xl transition-all duration-300 group-hover:bg-[#DFAE45]/10" />

            {/* Image */}
            <div className="relative h-[142px] w-full overflow-hidden">
              <Image
                src={pooja.image}
                alt={pooja.name}
                fill
                sizes="(max-width: 430px) 50vw, 215px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111D] via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Number */}
              <span className="absolute left-2.5 top-2.5 flex h-6 min-w-6 items-center justify-center rounded-full border border-white/15 bg-black/45 px-1.5 text-[8px] font-bold text-white/80 backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Popular Badge */}
              {pooja.popular && (
                <span
                  className="
                    absolute
                    right-2.5
                    top-2.5
                    flex
                    items-center
                    gap-1
                    rounded-full
                    border
                    border-[#DFAE45]/30
                    bg-black/50
                    px-2
                    py-1
                    text-[8px]
                    font-semibold
                    text-[#FFD76A]
                    backdrop-blur-md
                  "
                >
                  <Flame size={9} fill="currentColor" />
                  Popular
                </span>
              )}

              {/* Sacred Badge */}
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-black/45 backdrop-blur-md">
                  <Sparkles
                    size={10}
                    className="text-[#DFAE45]"
                  />
                </div>

                <span className="text-[8px] font-medium tracking-wide text-white/80">
                  SACRED RITUAL
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              {/* Title */}
              <h3 className="line-clamp-1 text-[12px] font-semibold text-white">
                {pooja.name}
              </h3>

              {/* Rating / Verification */}
              <div className="mt-1.5 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star
                    size={10}
                    fill="currentColor"
                    className="text-[#DFAE45]"
                  />

                  <span className="text-[8px] font-medium text-gray-300">
                    4.9
                  </span>
                </div>

                <div className="h-2.5 w-px bg-white/10" />

                <div className="flex items-center gap-1">
                  <CheckCircle2
                    size={9}
                    className="text-emerald-400"
                  />

                  <span className="text-[8px] text-gray-500">
                    Verified
                  </span>
                </div>
              </div>

              {/* Duration */}
              <div className="mt-2.5 flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/[0.04]">
                  <CalendarDays
                    size={11}
                    className="text-[#DFAE45]"
                  />
                </div>

                <div>
                  <p className="text-[7px] uppercase tracking-wider text-gray-600">
                    Duration
                  </p>

                  <p className="text-[9px] font-medium text-gray-300">
                    {pooja.duration}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-2.5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

              {/* Price + CTA */}
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[7px] uppercase tracking-wider text-gray-600">
                    Starting From
                  </p>

                  <p className="mt-0.5 text-[14px] font-bold text-[#DFAE45]">
                    ₹{pooja.price}
                  </p>
                </div>

                <Link
                  href={`/online-pooja/${pooja.id}`}
                  className="
                    group/btn
                    flex
                    items-center
                    gap-1.5
                    rounded-xl
                    bg-gradient-to-r
                    from-[#DFAE45]
                    to-[#F3C75F]
                    px-3
                    py-2.5
                    text-[9px]
                    font-bold
                    text-[#080B10]
                    shadow-[0_6px_18px_rgba(223,174,69,0.16)]
                    transition-all
                    duration-300
                    hover:shadow-[0_8px_24px_rgba(223,174,69,0.28)]
                    active:scale-95
                  "
                >
                  Book

                  <ArrowRight
                    size={11}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* Bottom Gold Accent */}
            <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      {/* Bottom Trust Strip */}
      <div className="relative mt-4 overflow-hidden rounded-[18px] border border-[#DFAE45]/10 bg-black/20 px-3 py-3">
        <div className="flex items-center justify-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <Sparkles
              size={14}
              className="text-[#DFAE45]"
            />
          </div>

          <div>
            <p className="text-[9px] font-semibold text-white">
              Sacred Rituals, Seamlessly Booked
            </p>

            <p className="mt-0.5 text-[8px] text-gray-500">
              Verified Pandits • Secure Payments • Divine Experience
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#DFAE45]/20" />

        <Sparkles
          size={10}
          className="text-[#DFAE45]/50"
        />

        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#DFAE45]/20" />
      </div>
    </section>
  );
}