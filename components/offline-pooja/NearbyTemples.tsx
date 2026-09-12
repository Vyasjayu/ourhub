"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Landmark,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { nearbyTemples } from "@/data/offlinePoojaData";

export default function NearbyTemples() {
  const router = useRouter();

  return (
    <section className="relative mt-9 px-4">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute right-0 top-8 h-36 w-36 rounded-full bg-[#DFAE45]/[0.06] blur-3xl" />

      {/* Section Header */}
      <div className="relative mb-4">
        <div className="flex items-end justify-between">
          <div>
            <div className="mb-1.5 flex items-center gap-1.5">
              <Sparkles
                size={11}
                className="text-[#DFAE45]"
                fill="currentColor"
              />

              <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
                Sacred Places
              </span>
            </div>

            <h2 className="text-[20px] font-extrabold tracking-tight text-white">
              Top Temples Near You
            </h2>

            <p className="mt-1 text-[9px] text-slate-500">
              Discover trusted temples for your sacred rituals
            </p>
          </div>

          {/* View All */}
          <button
            type="button"
            onClick={() => router.push("/offline-pooja/temples")}
            className="group mb-1 flex items-center gap-1.5 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/[0.06] px-3 py-2 text-[9px] font-bold text-[#F3C75F] transition-all duration-300 hover:border-[#DFAE45]/40 hover:bg-[#DFAE45]/[0.1] active:scale-95"
          >
            <span>View All</span>

            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* Gold divider */}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-px w-12 bg-gradient-to-r from-[#DFAE45] to-transparent" />
          <div className="h-1 w-1 rounded-full bg-[#DFAE45]" />
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>
      </div>

      {/* Temple Grid */}
      <div className="grid grid-cols-4 gap-2.5">
        {nearbyTemples.map((temple, index) => (
          <button
            key={temple.id}
            type="button"
            onClick={() =>
              router.push(`/offline-pooja/temples/${temple.id}`)
            }
            className="group relative overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#0A121C] text-left shadow-[0_12px_28px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DFAE45]/30 hover:shadow-[0_16px_35px_rgba(0,0,0,0.3)] active:scale-[0.98]"
          >
            {/* Image */}
            <div className="relative aspect-[0.78] overflow-hidden">
              <Image
                src={temple.image}
                alt={temple.name}
                fill
                sizes="(max-width: 430px) 25vw, 110px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/5" />

              {/* Gold Glow */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#DFAE45]/10 to-transparent" />

              {/* Number */}
              <div className="absolute left-2 top-2 flex h-5 min-w-5 items-center justify-center rounded-full border border-white/15 bg-black/45 px-1 backdrop-blur-md">
                <span className="text-[7px] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Verified */}
              <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-black/50 backdrop-blur-md">
                <BadgeCheck
                  size={11}
                  className="text-[#F3C75F]"
                  fill="currentColor"
                />
              </div>

              {/* Temple Icon */}
              <div className="absolute bottom-2 left-2 flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-black/45 backdrop-blur-md">
                <Landmark
                  size={11}
                  className="text-[#F3C75F]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-2">
              {/* Temple Name */}
              <h3 className="line-clamp-2 min-h-[24px] text-[9px] font-bold leading-3 text-white">
                {temple.name}
              </h3>

              {/* Distance */}
              <div className="mt-2 flex items-center gap-1">
                <MapPin
                  size={9}
                  className="shrink-0 text-[#DFAE45]"
                />

                <span className="truncate text-[8px] font-medium text-slate-500">
                  {temple.distance}
                </span>
              </div>

              {/* Rating */}
              <div className="mt-1.5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star
                    size={9}
                    className="text-[#F3C75F]"
                    fill="currentColor"
                  />

                  <span className="text-[8px] font-bold text-[#F3C75F]">
                    {temple.rating}
                  </span>
                </div>

                <span className="text-[7px] font-semibold uppercase tracking-wide text-slate-700">
                  Rated
                </span>
              </div>
            </div>

            {/* Bottom Gold Accent */}
            <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent transition-all duration-500 group-hover:w-3/4" />
          </button>
        ))}
      </div>

      {/* Explore Card */}
      <button
        type="button"
        onClick={() => router.push("/offline-pooja/temples")}
        className="group relative mt-3 flex w-full items-center gap-3 overflow-hidden rounded-[20px] border border-[#DFAE45]/15 bg-gradient-to-r from-[#0D1825] to-[#09121C] p-3.5 text-left transition-all duration-300 hover:border-[#DFAE45]/30 active:scale-[0.99]"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[#DFAE45]/[0.07] blur-2xl" />

        {/* Icon */}
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/[0.07]">
          <Landmark
            size={18}
            className="text-[#F3C75F]"
          />

          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#09121C] bg-[#DFAE45]">
            <ArrowRight
              size={8}
              className="text-black"
            />
          </span>
        </div>

        {/* Text */}
        <div className="relative min-w-0 flex-1">
          <p className="text-[11px] font-bold text-white">
            Explore More Temples
          </p>

          <p className="mt-0.5 text-[8px] leading-4 text-slate-500">
            Find the perfect temple for your pooja
          </p>
        </div>

        {/* Arrow */}
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight
            size={14}
            className="text-[#DFAE45]"
          />
        </div>
      </button>

      {/* Trust Footer */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <BadgeCheck
          size={11}
          className="text-[#DFAE45]"
        />

        <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-600">
          Verified Temples • Authentic Rituals
        </span>

        <BadgeCheck
          size={11}
          className="text-[#DFAE45]"
        />
      </div>
    </section>
  );
}