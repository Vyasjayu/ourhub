
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-4 mt-5">
      <Link
        href="/web-development"
        className="
          group
          relative
          block
          overflow-hidden
          rounded-[28px]
          border
          border-[#DFAE45]/20
          bg-[#0B1422]
          shadow-[0_25px_70px_rgba(0,0,0,0.48)]
          transition-all
          duration-500
          hover:border-[#DFAE45]/40
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.58)]
          active:scale-[0.985]
        "
      >
        {/* =========================
            HERO IMAGE
        ========================== */}

        <div className="relative h-[310px] overflow-hidden">

          <Image
            src="/services/web/banner.jpg"
            alt="Premium Website Development Services"
            fill
            priority
            sizes="(max-width: 430px) 100vw, 430px"
            className="
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.06]
            "
          />

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/20 via-[#050B14]/35 to-[#050B14]/95" />

          {/* Left-to-right depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/70 via-transparent to-[#050B14]/20" />

          {/* Gold ambient glow */}
          <div className="absolute -right-20 top-10 h-48 w-48 rounded-full bg-[#DFAE45]/10 blur-[80px]" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050B14] to-transparent" />

          {/* =========================
              TOP BADGE
          ========================== */}

         /* <div className="absolute left-4 top-4">
            <div
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#DFAE45]/25
                bg-[#050B14]/75
                px-3
                py-1.5
                backdrop-blur-xl
                shadow-[0_8px_25px_rgba(0,0,0,0.25)]
              "
            >
              <Sparkles
                size={12}
                className="text-[#FFD76A]"
              />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#F2C866]">
                Premium Digital Studio
              </span>
            </div>
          </div> */ {}

          {/* =========================
              CODE ICON
          ========================== */}

          <div
            className="
              absolute
              right-4
              top-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-[#050B14]/60
              backdrop-blur-xl
            "
          >
            <Code2
              size={18}
              className="text-[#E7B94F]"
            />
          </div>

          {/* =========================
              HERO CONTENT
          ========================== */}

          <div className="absolute inset-x-0 bottom-0 px-5 pb-5">

            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-7 bg-[#DFAE45]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                Build Your Digital Presence
              </span>
            </div> 

            <h2
              className="
                max-w-[330px]
                text-[27px]
                font-black
                leading-[1.08]
                tracking-[-0.04em]
                text-white
              "
            >
              Websites That
              <span className="block text-[#E7B94F]">
                Grow Your Business.
              </span>
            </h2>

            <p className="mt-2 max-w-[340px] text-[11px] font-medium leading-5 text-slate-300">
              Premium websites, e-commerce stores and custom web solutions
              built for modern businesses.
            </p>

            {/* =========================
                TRUST POINTS
            ========================== */}

            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  size={13}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-semibold text-slate-200">
                  Mobile First
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  size={13}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-semibold text-slate-200">
                  SEO Ready
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  size={13}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-semibold text-slate-200">
                  Fast Delivery
                </span>
              </div>
            </div>

            {/* =========================
                CTA
            ========================== */}

            <div className="mt-5 flex items-center justify-between">

              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.15em] text-slate-500">
                  Starting from
                </p>

                <p className="mt-0.5 text-sm font-extrabold text-white">
                  ₹4,999
                  <span className="ml-1 text-[9px] font-medium text-slate-400">
                    onwards
                  </span>
                </p>
              </div>

              <div
                className="
                  flex
                  h-11
                  items-center
                  gap-2
                  rounded-2xl
                  bg-[#DFAE45]
                  px-4
                  text-[11px]
                  font-extrabold
                  text-black
                  shadow-[0_10px_30px_rgba(223,174,69,0.20)]
                  transition-all
                  duration-300
                  group-hover:bg-[#E7B94F]
                  group-hover:shadow-[0_12px_35px_rgba(223,174,69,0.30)]
                "
              >
                <span>Explore Services</span>

                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>

            </div>
          </div>

          {/* Image shine */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-[120%]
              w-[70%]
              rotate-[15deg]
              bg-gradient-to-r
              from-transparent
              via-white/[0.08]
              to-transparent
              transition-all
              duration-1000
              group-hover:left-[130%]
            "
          />
        </div>

        {/* =========================
            BOTTOM INFO STRIP
        ========================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-white/[0.06]
            bg-[#07101C]
            px-4
            py-3
          "
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-[9px] font-semibold text-slate-300">
              Experts Available
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-semibold text-slate-500">
              Let's build
            </span>

            <ArrowRight
              size={12}
              className="text-[#DFAE45]"
            />
          </div>
        </div>
      </Link>
    </section>
  );
}

