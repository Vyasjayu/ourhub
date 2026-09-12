"use client";

import {
  Check,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

interface Service {
  features: string[];
}

interface Props {
  service: Service;
}

export default function Features({ service }: Props) {
  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-20 top-20 h-44 w-44 rounded-full bg-[#DFAE45]/[0.07] blur-[80px]" />

      <div className="pointer-events-none absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-blue-500/[0.04] blur-[75px]" />

      {/* Section Header */}
      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#DFAE45]" />

          <span className="text-[10px] font-black uppercase tracking-[2px] text-[#DFAE45]">
            What's Included
          </span>

          <span className="h-px w-7 bg-gradient-to-r from-[#DFAE45] to-transparent" />
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-[27px] font-black tracking-tight text-white">
              Everything You
              <span className="block text-[#DFAE45]">
                Need to Launch
              </span>
            </h2>

            <p className="mt-2 max-w-[320px] text-[13px] leading-6 text-gray-500">
              A complete set of features designed to build a professional,
              high-performing digital presence.
            </p>
          </div>

          {/* Feature count */}
          <div className="hidden min-[390px]:flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/[0.06]">
            <span className="text-sm font-black text-[#FFD86A]">
              {String(service.features.length).padStart(2, "0")}
            </span>

            <span className="text-[7px] font-bold uppercase tracking-[0.8px] text-gray-600">
              Features
            </span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="relative mt-7 grid grid-cols-2 gap-2.5">
        {service.features.map((feature, index) => (
          <div
            key={feature}
            className="group relative min-h-[145px] overflow-hidden rounded-[22px] border border-white/[0.065] bg-gradient-to-b from-[#0E1B2C] to-[#081321] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DFAE45]/25 hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#DFAE45]/[0.07] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Shine */}
            <span className="pointer-events-none absolute -left-12 top-0 h-full w-8 rotate-[20deg] bg-white/[0.06] blur-sm transition-all duration-700 group-hover:left-[120%]" />

            {/* Top row */}
            <div className="relative flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.07] shadow-[0_8px_20px_rgba(223,174,69,0.05)]">
                <CheckCircle2
                  size={20}
                  strokeWidth={2}
                  className="text-[#DFAE45]"
                />
              </div>

              <span className="text-[9px] font-black tracking-[1px] text-gray-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Feature title */}
            <div className="relative mt-5">
              <h3 className="text-[12px] font-extrabold leading-5 text-gray-200">
                {feature}
              </h3>

              <div className="mt-2 flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.7)]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.7px] text-gray-600">
                  Included
                </span>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      {/* Premium Included Card */}
      <div className="relative mt-3 overflow-hidden rounded-[23px] border border-green-400/10 bg-gradient-to-r from-green-400/[0.05] via-white/[0.02] to-transparent p-4">
        <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-green-400/[0.04] blur-3xl" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-green-400/15 bg-green-400/[0.07]">
            <Check
              size={18}
              strokeWidth={3}
              className="text-green-400"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-extrabold text-gray-200">
              Quality comes standard
            </p>

            <p className="mt-0.5 text-[9px] leading-4 text-gray-600">
              Every project follows the OurHub quality & performance standard.
            </p>
          </div>

          <Sparkles
            size={17}
            strokeWidth={2}
            className="shrink-0 text-[#DFAE45]"
          />
        </div>
      </div>

      {/* Bottom trust strip */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.045] bg-white/[0.018] py-2.5">
          <CheckCircle2
            size={11}
            strokeWidth={2.5}
            className="text-green-400"
          />

          <span className="text-[8px] font-bold uppercase tracking-[0.6px] text-gray-600">
            Verified
          </span>
        </div>

        <div className="flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.045] bg-white/[0.018] py-2.5">
          <Zap
            size={11}
            strokeWidth={2.5}
            className="text-[#DFAE45]"
          />

          <span className="text-[8px] font-bold uppercase tracking-[0.6px] text-gray-600">
            Optimized
          </span>
        </div>

        <div className="flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.045] bg-white/[0.018] py-2.5">
          <Check
            size={11}
            strokeWidth={2.8}
            className="text-blue-400"
          />

          <span className="text-[8px] font-bold uppercase tracking-[0.6px] text-gray-600">
            Included
          </span>
        </div>
      </div>
    </section>
  );
}