
"use client";

import { ArrowRight, BriefcaseBusiness, Sparkles } from "lucide-react";
import Link from "next/link";

import { webProjects } from "@/data/webPortfolio";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioSection() {
  return (
    <section className="relative mt-12 w-full overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-28
          top-20
          h-52
          w-52
          rounded-full
          bg-[#DFAE45]/[0.045]
          blur-[90px]
        "
      />

      {/* =========================
          SECTION HEADER
      ========================== */}

      <div className="relative px-4">
        <div className="flex items-end justify-between">
          <div>
            {/* Eyebrow */}
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-6 bg-[#DFAE45]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#DFAE45]">
                Our Work
              </span>
            </div>

            {/* Title */}
            <div className="flex items-center gap-2.5">
              <h2 className="text-[22px] font-black tracking-[-0.035em] text-white">
                Recent Projects
              </h2>

              <span
                className="
                  rounded-full
                  border
                  border-white/[0.07]
                  bg-white/[0.035]
                  px-2
                  py-0.5
                  text-[8px]
                  font-bold
                  text-slate-500
                "
              >
                {webProjects.length}
              </span>
            </div>

            <p className="mt-1 text-[10px] font-medium text-slate-500">
              A glimpse of websites crafted by OurHub
            </p>
          </div>

          {/* Portfolio link */}
          <Link
            href="/web-development/portfolio"
            className="
              group
              flex
              shrink-0
              items-center
              gap-1.5
              rounded-full
              border
              border-[#DFAE45]/15
              bg-[#DFAE45]/[0.055]
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

        {/* Small category row */}
        <div className="mt-4 flex items-center gap-2">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              border
              border-white/[0.06]
              bg-white/[0.025]
            "
          >
            <BriefcaseBusiness
              size={12}
              className="text-[#DFAE45]"
            />
          </div>

          <div>
            <p className="text-[8px] font-bold text-slate-300">
              Selected Work
            </p>

            <p className="text-[7px] text-slate-600">
              Business • E-commerce • Landing Pages
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          PROJECT CAROUSEL
      ========================== */}

      <div className="relative mt-5">
        {/* Left fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            top-0
            z-10
            w-5
            bg-gradient-to-r
            from-[#050B14]
            to-transparent
          "
        />

        {/* Right fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            top-0
            z-10
            w-8
            bg-gradient-to-l
            from-[#050B14]
            to-transparent
          "
        />

        <div
          className="
            w-full
            overflow-x-auto
            overflow-y-hidden
            overscroll-x-contain
            scrollbar-hide
            snap-x
            snap-mandatory
            touch-pan-x
          "
        >
          <div className="flex w-max gap-4 px-4 pb-4">
            {webProjects.map((item, index) => (
              <div
                key={item.id}
                className="
                  w-[285px]
                  min-w-[285px]
                  shrink-0
                  snap-start
                "
              >
                {/* Project number */}
                <div className="mb-2 flex items-center justify-between px-1">
                  <div className="flex items-center gap-1.5">
                    <Sparkles
                      size={10}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-600">
                      Featured Project
                    </span>
                  </div>

                  <span className="text-[8px] font-bold text-slate-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className="
                    relative
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <PortfolioCard
                    slug={item.slug}
                    title={item.title}
                    image={item.image}
                    category={item.category}
                    technology={item.technology}
                    price={item.price}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          SWIPE INDICATOR
      ========================== */}

      {webProjects.length > 1 && (
        <div className="mt-1 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="h-px w-7 bg-gradient-to-r from-transparent to-white/10" />

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DFAE45]" />

              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />

              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
            </div>

            <span className="h-px w-7 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div className="mt-2 flex items-center gap-1.5">
            <ArrowRight
              size={10}
              className="text-[#DFAE45]"
            />

            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-slate-600">
              Swipe to explore
            </span>
          </div>
        </div>
      )}

      {/* =========================
          BOTTOM TRUST CARD
      ========================== */}

      <div className="mx-4 mt-5">
        <div
          className="
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
          <div className="flex items-center gap-2.5">
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-xl
                border
                border-[#DFAE45]/15
                bg-[#DFAE45]/[0.05]
              "
            >
              <Sparkles
                size={13}
                className="text-[#DFAE45]"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold text-slate-300">
                Your business could be next
              </p>

              <p className="mt-0.5 text-[7px] font-medium text-slate-600">
                Let's create something exceptional
              </p>
            </div>
          </div>

          <span className="text-[8px] font-extrabold text-[#DFAE45]">
            OurHub
          </span>
        </div>
      </div>
    </section>
  );
}

