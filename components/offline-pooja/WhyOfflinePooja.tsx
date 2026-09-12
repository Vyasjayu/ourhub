"use client";

import {
  BadgeCheck,
  Gift,
  Landmark,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    id: "01",
    title: "Authentic Rituals",
    description: "Performed as per Vedic scriptures",
    icon: Sparkles,
  },
  {
    id: "02",
    title: "Experienced Pandits",
    description: "Trained & verified by OurHub",
    icon: BadgeCheck,
  },
  {
    id: "03",
    title: "Temple Visit",
    description: "Pooja performed at holy temples",
    icon: Landmark,
  },
  {
    id: "04",
    title: "Prasad & Blessings",
    description: "Receive prasad & positive energy",
    icon: Gift,
  },
];

export default function WhyOfflinePooja() {
  return (
    <section className="relative mt-9 px-4">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-[#DFAE45]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-[#DFAE45]/5 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-b from-[#0B1520] to-[#060C13] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        {/* Header */}
        <div className="relative text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/8 px-3 py-1.5">
            <Sparkles
              size={13}
              className="text-[#F3C75F]"
              strokeWidth={1.8}
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#F3C75F]">
              OurHub Promise
            </span>

            <Sparkles
              size={13}
              className="text-[#F3C75F]"
              strokeWidth={1.8}
            />
          </div>

          <h2 className="mt-3 text-[21px] font-bold tracking-tight text-white">
            Why Book{" "}
            <span className="text-[#E7B94F]">Offline Pooja?</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[300px] text-[11px] leading-5 text-gray-400">
            A trusted way to experience sacred rituals at authentic temples
            with complete peace of mind.
          </p>

          {/* Gold divider */}
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#DFAE45]/60" />

            <div className="h-1.5 w-1.5 rotate-45 bg-[#DFAE45]" />

            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#DFAE45]/60" />
          </div>
        </div>

        {/* Benefits */}
        <div className="relative mt-5 grid grid-cols-2 gap-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[21px] border border-white/[0.07] bg-white/[0.025] p-3.5 transition-all duration-300 hover:border-[#DFAE45]/30 hover:bg-[#DFAE45]/[0.04]"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#DFAE45]/5 blur-2xl transition-all duration-300 group-hover:bg-[#DFAE45]/10" />

                {/* Number */}
                <div className="absolute right-3 top-3 text-[9px] font-bold tracking-widest text-white/20">
                  {item.id}
                </div>

                {/* Icon */}
                <div className="relative flex h-11 w-11 items-center justify-center rounded-[15px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/15 to-transparent shadow-inner">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                    className="text-[#E7B94F]"
                  />

                  {/* Icon shine */}
                  <div className="absolute inset-0 rounded-[15px] ring-1 ring-inset ring-white/5" />
                </div>

                {/* Content */}
                <div className="relative mt-3">
                  <h3 className="text-[12px] font-semibold leading-4 text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[9.5px] leading-[1.45] text-gray-400">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="h-px w-8 bg-[#DFAE45]/30 transition-all duration-300 group-hover:w-12 group-hover:bg-[#DFAE45]/70" />

                  <ArrowUpRight
                    size={13}
                    className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#DFAE45]"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust footer */}
        <div className="relative mt-4 overflow-hidden rounded-[18px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.045] px-3.5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10">
              <ShieldCheck
                size={18}
                className="text-[#E7B94F]"
                strokeWidth={1.8}
              />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-white">
                Your Devotion, Our Responsibility
              </p>

              <p className="mt-0.5 text-[8.5px] leading-4 text-gray-400">
                Verified service • Transparent pricing • Trusted support
              </p>
            </div>

            <BadgeCheck
              size={17}
              className="ml-auto shrink-0 text-[#E7B94F]"
              strokeWidth={1.8}
            />
          </div>
        </div>

        {/* Bottom micro text */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-white/10" />

          <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-gray-500">
            Sacred • Authentic • Trusted
          </span>

          <span className="h-px w-8 bg-white/10" />
        </div>
      </div>
    </section>
  );
}