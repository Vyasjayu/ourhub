
"use client";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { features } from "@/data/webDevelopment";

export default function WhyChooseUs() {
  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* ================= AMBIENT GLOW ================= */}
      <div className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#DFAE45]/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-64 w-64 rounded-full bg-blue-500/[0.025] blur-3xl" />

      {/* ================= HEADER ================= */}
      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <ShieldCheck
              size={16}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            Why OurHub
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-7 w-1 rounded-full bg-gradient-to-b from-[#FFD86A] to-[#DFAE45]" />

          <h2 className="text-[24px] font-extrabold tracking-tight text-white">
            Why Choose OurHub?
          </h2>
        </div>

        <p className="mt-2 pl-3 text-[13px] leading-5 text-gray-400">
          We combine modern technology, thoughtful design and business-focused
          solutions to create digital experiences that stand out.
        </p>
      </div>

      {/* ================= PREMIUM INTRO STRIP ================= */}
      <div className="relative mt-5 overflow-hidden rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-r from-[#101D2D] to-[#091321] p-4">
        <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
            <Sparkles
              size={18}
              className="text-[#DFAE45]"
              strokeWidth={2}
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-bold text-white">
              Built around your business
            </p>

            <p className="mt-0.5 text-[9px] leading-4 text-gray-500">
              Not just a website. A digital experience designed for growth.
            </p>
          </div>

          <Star
            size={15}
            className="shrink-0 text-[#DFAE45]/50"
            fill="currentColor"
          />
        </div>
      </div>

      {/* ================= FEATURES GRID ================= */}
      <div className="relative mt-5 grid grid-cols-2 gap-3">
        {features.map((item, index) => (
          <div
            key={item.id}
            className="
              group
              relative
              min-h-[205px]
              overflow-hidden
              rounded-[26px]
              border
              border-white/[0.07]
              bg-gradient-to-br
              from-[#101D2D]
              via-[#0B1726]
              to-[#08121F]
              p-4
              shadow-[0_12px_35px_rgba(0,0,0,0.18)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#DFAE45]/25
              hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]
              active:scale-[0.98]
            "
          >
            {/* ================= CARD GLOW ================= */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#DFAE45]/[0.07] blur-3xl transition-all duration-500 group-hover:bg-[#DFAE45]/[0.13]" />

            {/* ================= TOP GOLD LINE ================= */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* ================= NUMBER ================= */}
            <div className="absolute right-3 top-3 flex h-6 min-w-6 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] px-1.5">
              <span className="text-[8px] font-extrabold tracking-wider text-gray-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* ================= ICON ================= */}
            <div className="relative flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-[19px] border border-[#DFAE45]/10 bg-gradient-to-br from-[#DFAE45]/15 to-[#DFAE45]/[0.03] shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#DFAE45]/25">
              {/* Shine */}
              <span className="pointer-events-none absolute -left-10 top-0 h-full w-7 rotate-[25deg] bg-white/15 blur-sm transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative z-10 text-[27px] leading-none">
                {item.icon}
              </span>
            </div>

            {/* ================= TITLE ================= */}
            <h3 className="relative mt-4 min-h-[20px] text-[14px] font-extrabold leading-5 text-white transition-colors duration-300 group-hover:text-[#FFD86A]">
              {item.title}
            </h3>

            {/* ================= DESCRIPTION ================= */}
            <p className="relative mt-2 line-clamp-3 text-[10px] leading-[17px] text-gray-500">
              {item.description}
            </p>

            {/* ================= BOTTOM CHECK ================= */}
            <div className="relative mt-3 flex items-center gap-1.5">
              <CheckCircle2
                size={11}
                strokeWidth={2}
                className="text-green-400"
              />

              <span className="text-[8px] font-semibold text-gray-600">
                OurHub Standard
              </span>
            </div>

            {/* Bottom Glow */}
            <div className="pointer-events-none absolute -bottom-12 left-1/2 h-20 w-24 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.04] blur-2xl transition-all duration-500 group-hover:bg-[#DFAE45]/[0.09]" />
          </div>
        ))}
      </div>

      {/* ================= TRUST SCORE ================= */}
      <div className="relative mt-4 overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0A1422] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/10">
              <Star
                size={17}
                className="text-[#DFAE45]"
                fill="currentColor"
              />
            </div>

            <div>
              <p className="text-[12px] font-bold text-white">
                Premium by design
              </p>

              <p className="mt-0.5 text-[9px] text-gray-500">
                Every detail matters.
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[16px] font-extrabold text-[#DFAE45]">
              100%
            </p>

            <p className="text-[8px] font-semibold uppercase tracking-[1px] text-gray-600">
              Focus
            </p>
          </div>
        </div>

        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.05]">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-[#DFAE45] to-[#FFD86A]" />
        </div>
      </div>

      {/* ================= BOTTOM MESSAGE ================= */}
      <div className="relative mt-4 flex items-center gap-3 rounded-2xl border border-[#DFAE45]/10 bg-[#DFAE45]/[0.035] px-4 py-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
          <ArrowRight
            size={15}
            className="text-[#DFAE45]"
            strokeWidth={2.5}
          />
        </div>

        <p className="text-[10px] leading-4 text-gray-500">
          Your goals come first. We build the technology around them.
        </p>
      </div>
    </section>
  );
}

