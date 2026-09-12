
"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { webServices } from "@/data/webDevelopment";
import ServiceCard from "./ServiceCard";

export default function FeaturedServices() {
  return (
    <section className="relative mt-8 px-4">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-[#DFAE45]/[0.045] blur-[70px]"
      />

      {/* =========================
          SECTION HEADER
      ========================== */}

      <div className="relative mb-5 flex items-end justify-between">
        <div>
          {/* Small label */}
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-5 bg-[#DFAE45]" />

            <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#DFAE45]">
              Our Expertise
            </span>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-[21px] font-black tracking-[-0.03em] text-white">
              Featured Services
            </h2>

            <span className="rounded-full border border-white/[0.07] bg-white/[0.035] px-2 py-0.5 text-[8px] font-bold text-slate-500">
              {webServices.length}
            </span>
          </div>

          <p className="mt-1 text-[10px] font-medium text-slate-500">
            Premium digital solutions for modern businesses
          </p>
        </div>

        {/* View All */}
        <Link
          href="/web-development/services"
          className="
            group
            flex
            shrink-0
            items-center
            gap-1.5
            rounded-full
            border
            border-[#DFAE45]/15
            bg-[#DFAE45]/[0.06]
            px-3
            py-2
            text-[9px]
            font-extrabold
            text-[#E7B94F]
            transition-all
            duration-200
            hover:border-[#DFAE45]/30
            hover:bg-[#DFAE45]/10
            active:scale-95
          "
        >
          <span>View All</span>

          <ArrowRight
            size={12}
            strokeWidth={2.5}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* =========================
          PREMIUM SERVICE AREA
      ========================== */}

      <div className="relative">
        {/* Top decorative line */}
        <div className="mb-3 flex items-center gap-2">
          <Sparkles
            size={11}
            className="text-[#DFAE45]"
          />

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-600">
            Choose what you need
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.06] to-transparent" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-3.5">
          {webServices.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
                min-w-0
              "
            >
              {/* Card glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -inset-px
                  rounded-[23px]
                  bg-[#DFAE45]/0
                  blur-xl
                  transition-all
                  duration-500
                  group-hover:bg-[#DFAE45]/[0.055]
                "
              />

              <div className="relative">
                <ServiceCard
                  slug={item.slug}
                  title={item.title}
                  price={item.price}
                  icon={item.icon}
                  color={item.color}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          BOTTOM TRUST STRIP
      ========================== */}

      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/[0.055]
          bg-white/[0.02]
          px-3.5
          py-3
        "
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/[0.08]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
          </div>

          <div>
            <p className="text-[9px] font-bold text-slate-300">
              Professional Solutions
            </p>

            <p className="mt-0.5 text-[7px] font-medium text-slate-600">
              Built for your business goals
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Sparkles
            size={10}
            className="text-[#DFAE45]"
          />

          <span className="text-[8px] font-bold text-[#DFAE45]">
            OurHub
          </span>
        </div>
      </div>
    </section>
  );
}

