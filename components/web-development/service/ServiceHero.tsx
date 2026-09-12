"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

interface Service {
  title: string;
  subtitle: string;
  image: string;
  price: string;
}

interface Props {
  service: Service;
  onStartProject: () => void;
}

export default function ServiceHero({
  service,
  onStartProject,
}: Props) {
  return (
    <section className="relative px-4 pt-4">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-20 top-20 h-52 w-52 rounded-full bg-[#DFAE45]/[0.055] blur-[90px]" />

      <div
        className="
          group relative overflow-hidden
          rounded-[30px]
          border border-white/[0.08]
          bg-gradient-to-b from-[#101D2D] via-[#0B1726] to-[#07111D]
          shadow-[0_20px_60px_rgba(0,0,0,0.32)]
        "
      >
        {/* =====================================================
            TOP GOLD LINE
        ===================================================== */}

        <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/60 to-transparent" />

        {/* =====================================================
            IMAGE
        ===================================================== */}

        <div className="relative h-[245px] w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 430px) 100vw, 430px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          />

          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-[#07111D]" />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07111D] to-transparent" />

          {/* Image shine */}
          <div className="pointer-events-none absolute -left-32 top-0 h-full w-24 rotate-[20deg] bg-white/[0.07] blur-md transition-all duration-1000 group-hover:left-[120%]" />

          {/* =================================================
              IMAGE TOP BADGE
          ================================================= */}

          <div className="absolute left-4 top-4">
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 shadow-lg backdrop-blur-xl">
              <Sparkles
                size={11}
                strokeWidth={2}
                className="text-[#FFD86A]"
              />

              <span className="text-[8px] font-extrabold uppercase tracking-[1.3px] text-white">
                Premium Service
              </span>
            </div>
          </div>

          {/* =================================================
              RATING BADGE
          ================================================= */}

          <div className="absolute right-4 top-4">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#050B14]/75 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Star
                  size={14}
                  strokeWidth={1.8}
                  className="fill-[#DFAE45] text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[11px] font-extrabold leading-none text-white">
                  4.9
                </p>

                <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.6px] text-gray-500">
                  Excellent
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              IMAGE BOTTOM INFO
          ================================================= */}

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[1.5px] text-[#DFAE45]">
                  OurHub Digital Studio
                </p>

                <h1 className="mt-1 max-w-[300px] text-[25px] font-black leading-[1.08] tracking-tight text-white">
                  {service.title}
                </h1>
              </div>

              <div className="hidden min-[390px]:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-400/15 bg-green-400/[0.07] backdrop-blur-xl">
                <CheckCircle2
                  size={18}
                  strokeWidth={2}
                  className="text-green-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="relative p-4 pt-3">
          {/* Subtitle */}
          <p className="text-[11px] leading-5 text-gray-400">
            {service.subtitle}
          </p>

          {/* =================================================
              STATS STRIP
          ================================================= */}

          <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-[20px] border border-white/[0.06] bg-white/[0.025]">
            <div className="px-2 py-3 text-center">
              <p className="text-[11px] font-extrabold text-white">
                250+
              </p>

              <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.7px] text-gray-600">
                Projects
              </p>
            </div>

            <div className="border-x border-white/[0.06] px-2 py-3 text-center">
              <p className="text-[11px] font-extrabold text-[#DFAE45]">
                4.9/5
              </p>

              <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.7px] text-gray-600">
                Rating
              </p>
            </div>

            <div className="px-2 py-3 text-center">
              <p className="text-[11px] font-extrabold text-green-400">
                24/7
              </p>

              <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.7px] text-gray-600">
                Support
              </p>
            </div>
          </div>

          {/* =================================================
              PRICE CARD
          ================================================= */}

          <div className="relative mt-4 overflow-hidden rounded-[23px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#172438] via-[#0E1A2A] to-[#09131F] p-4">
            {/* glow */}
            <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            {/* top line */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />

            <div className="relative flex items-end justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5">
                  <Zap
                    size={11}
                    strokeWidth={2.2}
                    className="text-[#DFAE45]"
                  />

                  <p className="text-[8px] font-extrabold uppercase tracking-[1.5px] text-gray-500">
                    Starting Investment
                  </p>
                </div>

                <div className="mt-1.5 flex items-end gap-2">
                  <h2 className="text-[29px] font-black leading-none tracking-tight text-[#DFAE45]">
                    {service.price}
                  </h2>

                  <span className="pb-0.5 text-[8px] font-medium text-gray-600">
                    onwards
                  </span>
                </div>
              </div>

              <div className="rounded-full border border-green-400/15 bg-green-400/[0.06] px-2.5 py-1.5">
                <span className="text-[7px] font-extrabold uppercase tracking-[0.8px] text-green-400">
                  Transparent
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-1.5">
              <Check
                size={11}
                strokeWidth={2.8}
                className="text-green-400"
              />

              <span className="text-[8px] font-medium text-gray-500">
                One-time payment • No hidden charges
              </span>
            </div>
          </div>

          {/* =================================================
              FEATURES
          ================================================= */}

          <div className="mt-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[8px] font-extrabold uppercase tracking-[1.5px] text-gray-600">
                Included with your project
              </p>

              <span className="text-[7px] font-bold uppercase tracking-[0.8px] text-[#DFAE45]">
                OurHub Standard
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {/* Feature 1 */}
              <div className="group/feature flex items-center gap-3 rounded-2xl border border-white/[0.055] bg-white/[0.025] p-3 transition-all duration-300 hover:border-green-400/15 hover:bg-green-400/[0.025]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-400/[0.07]">
                  <CheckCircle2
                    size={16}
                    strokeWidth={2}
                    className="text-green-400"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-white">
                    100% Mobile Responsive
                  </p>

                  <p className="mt-0.5 text-[8px] text-gray-600">
                    Optimized for every screen size
                  </p>
                </div>

                <Check
                  size={13}
                  strokeWidth={2.5}
                  className="ml-auto text-green-400"
                />
              </div>

              {/* Feature 2 */}
              <div className="group/feature flex items-center gap-3 rounded-2xl border border-white/[0.055] bg-white/[0.025] p-3 transition-all duration-300 hover:border-green-400/15 hover:bg-green-400/[0.025]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-400/[0.07]">
                  <ShieldCheck
                    size={16}
                    strokeWidth={2}
                    className="text-green-400"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-white">
                    SEO Optimized Website
                  </p>

                  <p className="mt-0.5 text-[8px] text-gray-600">
                    Built for search visibility
                  </p>
                </div>

                <Check
                  size={13}
                  strokeWidth={2.5}
                  className="ml-auto text-green-400"
                />
              </div>

              {/* Feature 3 */}
              <div className="group/feature flex items-center gap-3 rounded-2xl border border-white/[0.055] bg-white/[0.025] p-3 transition-all duration-300 hover:border-green-400/15 hover:bg-green-400/[0.025]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-400/[0.07]">
                  <Clock3
                    size={16}
                    strokeWidth={2}
                    className="text-green-400"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-white">
                    Free Support Included
                  </p>

                  <p className="mt-0.5 text-[8px] text-gray-600">
                    Professional post-launch assistance
                  </p>
                </div>

                <Check
                  size={13}
                  strokeWidth={2.5}
                  className="ml-auto text-green-400"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <button
            type="button"
            onClick={onStartProject}
            className="
              group/cta relative mt-5 flex h-[52px] w-full
              items-center justify-center gap-2 overflow-hidden
              rounded-2xl
              bg-gradient-to-r from-[#DFAE45] via-[#E7B94F] to-[#FFD86A]
              text-[12px] font-black text-black
              shadow-[0_12px_35px_rgba(223,174,69,0.18)]
              transition-all duration-300
              hover:shadow-[0_15px_40px_rgba(223,174,69,0.30)]
              active:scale-[0.98]
            "
          >
            {/* Shine */}
            <span className="pointer-events-none absolute -left-14 top-0 h-full w-10 rotate-[20deg] bg-white/30 blur-sm transition-all duration-700 group-hover/cta:left-[120%]" />

            <Sparkles
              size={16}
              strokeWidth={2.2}
              className="relative z-10"
            />

            <span className="relative z-10">
              Start Your Project
            </span>

            <ArrowRight
              size={17}
              strokeWidth={2.7}
              className="relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </button>

          {/* CTA trust */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <CheckCircle2
              size={11}
              strokeWidth={2.3}
              className="text-green-400"
            />

            <span className="text-[7px] font-semibold uppercase tracking-[0.9px] text-gray-600">
              Free consultation • Quick response • No obligation
            </span>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent" />
      </div>
    </section>
  );
}