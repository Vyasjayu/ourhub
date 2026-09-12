
"use client";

import {
  CheckCircle2,
  Code2,
  Cpu,
  Layers3,
  Sparkles,
} from "lucide-react";

import { technologies } from "@/data/webDevelopment";

export default function TechStack() {
  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#DFAE45]/[0.045] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-blue-500/[0.025] blur-3xl" />

      <div className="relative">
        {/* Section Header */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <Code2
              size={16}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            Our Technology
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-7 w-1 rounded-full bg-gradient-to-b from-[#FFD86A] to-[#DFAE45]" />

          <h2 className="text-[24px] font-extrabold tracking-tight text-white">
            Technology Stack
          </h2>
        </div>

        <p className="mt-2 pl-3 text-[13px] leading-5 text-gray-400">
          Modern technologies selected to build fast, scalable and
          business-ready digital experiences.
        </p>

        {/* Technology Summary */}
        <div className="relative mt-5 overflow-hidden rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-r from-[#101D2D] to-[#091321] p-4">
          <div className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/10">
              <Cpu
                size={19}
                strokeWidth={2}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-extrabold text-white">
                Built with modern tools
              </p>

              <p className="mt-0.5 text-[9px] leading-4 text-gray-500">
                Reliable technology for performance, flexibility and growth.
              </p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-[17px] font-extrabold text-[#DFAE45]">
                {technologies.length}+
              </p>

              <p className="text-[8px] font-semibold uppercase tracking-[1px] text-gray-600">
                Technologies
              </p>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="relative mt-5 grid grid-cols-3 gap-3">
          {technologies.map((tech, index) => (
            <div
              key={tech}
              className="
                group relative overflow-hidden rounded-[22px]
                border border-white/[0.07]
                bg-gradient-to-br
                from-[#101D2D]
                via-[#0B1726]
                to-[#08121F]
                px-2 py-4
                shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#DFAE45]/25
                hover:shadow-[0_16px_38px_rgba(0,0,0,0.28)]
                active:scale-[0.97]
              "
            >
              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#DFAE45]/[0.07] blur-2xl transition-all duration-500 group-hover:bg-[#DFAE45]/[0.13]" />

              {/* Top Gold Line */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="absolute right-2 top-2 flex h-5 min-w-5 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.025] px-1">
                <span className="text-[7px] font-extrabold tracking-wider text-gray-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Tech Icon */}
              <div
                className="
                  relative mx-auto flex h-11 w-11 items-center justify-center
                  overflow-hidden rounded-[15px]
                  border border-[#DFAE45]/15
                  bg-gradient-to-br from-[#DFAE45]/15 to-[#DFAE45]/[0.03]
                  shadow-[0_8px_20px_rgba(0,0,0,0.18)]
                  transition-all duration-300
                  group-hover:scale-105
                  group-hover:border-[#DFAE45]/30
                  group-hover:shadow-[0_10px_25px_rgba(223,174,69,0.12)]
                "
              >
                {/* Shine */}
                <span className="pointer-events-none absolute -left-8 top-0 h-full w-6 rotate-[25deg] bg-white/15 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                <Layers3
                  size={17}
                  strokeWidth={1.8}
                  className="relative z-10 text-[#DFAE45]"
                />
              </div>

              {/* Technology Name */}
              <p className="relative mt-3 line-clamp-2 min-h-[30px] text-center text-[11px] font-extrabold leading-[15px] text-white transition-colors duration-300 group-hover:text-[#FFD86A]">
                {tech}
              </p>

              {/* Status */}
              <div className="relative mt-2.5 flex items-center justify-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_7px_rgba(74,222,128,0.7)]" />

                <span className="text-[7px] font-semibold uppercase tracking-[0.8px] text-gray-600">
                  Preferred
                </span>
              </div>

              {/* Bottom Glow */}
              <div className="pointer-events-none absolute -bottom-8 left-1/2 h-14 w-20 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.04] blur-2xl transition-all duration-500 group-hover:bg-[#DFAE45]/[0.09]" />
            </div>
          ))}
        </div>

        {/* Tech Philosophy */}
        <div className="relative mt-4 overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0A1422] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/10">
              <Sparkles
                size={17}
                strokeWidth={2}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[12px] font-extrabold text-white">
                Technology that works for you
              </p>

              <p className="mt-0.5 text-[9px] leading-4 text-gray-500">
                We choose the right stack based on your project, goals and
                future growth.
              </p>
            </div>
          </div>

          {/* Progress Line */}
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.05]">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-[#DFAE45] to-[#FFD86A]" />
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-[#DFAE45]/10 bg-[#DFAE45]/[0.035] px-4 py-3">
          <CheckCircle2
            size={13}
            strokeWidth={2.3}
            className="text-green-400"
          />

          <span className="text-[9px] font-semibold text-gray-500">
            Modern stack • Clean code • Scalable solutions
          </span>
        </div>
      </div>
    </section>
  );
}

