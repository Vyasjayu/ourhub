
"use client";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "We understand your business goals, audience and project requirements before starting development.",
    icon: Search,
    color: "from-cyan-400 to-blue-500",
  },
  {
    step: "02",
    title: "UI / UX Design",
    description:
      "Beautiful wireframes and modern user interfaces focused on conversion, usability and experience.",
    icon: PenTool,
    color: "from-pink-400 to-rose-500",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build secure, scalable and high-performance websites using modern technologies.",
    icon: Code2,
    color: "from-[#FFD86A] to-[#DFAE45]",
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Complete quality assurance, speed optimization and responsive testing across devices.",
    icon: ShieldCheck,
    color: "from-green-400 to-emerald-500",
  },
  {
    step: "05",
    title: "Launch & Support",
    description:
      "Deployment, SEO setup, maintenance and ongoing technical support after your website goes live.",
    icon: Rocket,
    color: "from-violet-400 to-purple-500",
  },
];

export default function Process() {
  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-28 top-20 h-64 w-64 rounded-full bg-cyan-500/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-10 h-64 w-64 rounded-full bg-[#DFAE45]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/[0.025] blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="mb-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
              <Zap
                size={15}
                strokeWidth={2}
                className="text-[#DFAE45]"
              />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              Development Process
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-8 w-1 rounded-full bg-gradient-to-b from-[#FFD86A] to-[#DFAE45]" />

            <h2 className="text-[25px] font-extrabold tracking-tight text-white">
              How We Work
            </h2>
          </div>

          <p className="mt-2 pl-3 text-[13px] leading-5 text-gray-400">
            A streamlined process designed to keep your project clear,
            transparent and moving forward from idea to launch.
          </p>
        </div>

        {/* Process Overview */}
        <div className="relative overflow-hidden rounded-[25px] border border-[#DFAE45]/15 bg-gradient-to-r from-[#101D2D] to-[#091321] p-4">
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/10">
              <Sparkles
                size={18}
                className="text-[#DFAE45]"
                strokeWidth={2}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-extrabold text-white">
                From idea to launch
              </p>

              <p className="mt-0.5 text-[9px] leading-4 text-gray-500">
                Every stage is carefully planned and professionally executed.
              </p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-[17px] font-black text-[#DFAE45]">
                05
              </p>

              <p className="text-[8px] font-semibold uppercase tracking-[1px] text-gray-600">
                Steps
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-6">
          {/* Vertical Connector */}
          <div className="absolute bottom-7 left-[25px] top-7 w-px bg-gradient-to-b from-[#DFAE45]/60 via-[#DFAE45]/25 to-transparent" />

          <div className="space-y-4">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative flex gap-3"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className="
                        flex h-[51px] w-[51px] items-center justify-center
                        rounded-[18px]
                        border border-white/[0.08]
                        bg-[#07111D]
                        shadow-[0_8px_25px_rgba(0,0,0,0.30)]
                        transition-all duration-300
                        group-hover:border-[#DFAE45]/30
                        group-hover:shadow-[0_10px_30px_rgba(223,174,69,0.12)]
                      "
                    >
                      <div
                        className={`
                          relative flex h-[39px] w-[39px]
                          items-center justify-center
                          overflow-hidden rounded-[14px]
                          bg-gradient-to-br ${item.color}
                        `}
                      >
                        <span className="pointer-events-none absolute -left-8 top-0 h-full w-6 rotate-[25deg] bg-white/20 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                        <Icon
                          size={18}
                          strokeWidth={2}
                          className="relative z-10 text-white"
                        />
                      </div>
                    </div>

                    {/* Step Dot */}
                    <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#07111D] bg-[#DFAE45]">
                      <span className="text-[6px] font-black text-black">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Process Card */}
                  <div
                    className="
                      relative min-w-0 flex-1 overflow-hidden
                      rounded-[25px]
                      border border-white/[0.07]
                      bg-gradient-to-br
                      from-[#101D2D]
                      via-[#0B1726]
                      to-[#08121F]
                      p-4
                      shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                      transition-all duration-300
                      group-hover:-translate-y-0.5
                      group-hover:border-[#DFAE45]/25
                      group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]
                    "
                  >
                    {/* Card Glow */}
                    <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#DFAE45]/[0.05] blur-3xl transition-all duration-500 group-hover:bg-[#DFAE45]/[0.11]" />

                    {/* Gold Top Line */}
                    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="mb-1.5 flex items-center gap-1.5">
                            <span className="text-[8px] font-bold uppercase tracking-[1.4px] text-[#DFAE45]">
                              Step {item.step}
                            </span>

                            {index === 2 && (
                              <span className="rounded-full border border-green-400/10 bg-green-400/[0.06] px-1.5 py-0.5 text-[6px] font-bold uppercase tracking-[0.8px] text-green-400">
                                Core
                              </span>
                            )}
                          </div>

                          <h3 className="text-[14px] font-extrabold leading-5 text-white transition-colors duration-300 group-hover:text-[#FFD86A]">
                            {item.title}
                          </h3>
                        </div>

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.025]">
                          <ArrowRight
                            size={13}
                            strokeWidth={2.3}
                            className="text-gray-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#DFAE45]"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-2.5 text-[10px] leading-[17px] text-gray-500">
                        {item.description}
                      </p>

                      {/* Status */}
                      <div className="mt-3 flex items-center gap-1.5">
                        <CheckCircle2
                          size={11}
                          strokeWidth={2.2}
                          className="text-green-400"
                        />

                        <span className="text-[8px] font-semibold text-gray-600">
                          Quality checked
                        </span>

                        <span className="ml-auto text-[8px] font-bold tracking-wider text-gray-700">
                          {item.step}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Summary */}
        <div className="relative mt-6 overflow-hidden rounded-[28px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#101D2D] via-[#0C1827] to-[#07111D] p-5">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-center gap-2">
              <Sparkles
                size={15}
                className="text-[#DFAE45]"
              />

              <h3 className="text-[14px] font-extrabold text-white">
                Average Project Delivery
              </h3>

              <Sparkles
                size={15}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-1 text-center text-[9px] text-gray-600">
              Timelines vary depending on project requirements.
            </p>

            {/* Delivery Stats */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="group relative overflow-hidden rounded-[20px] border border-white/[0.07] bg-white/[0.025] p-4 text-center transition-all duration-300 hover:border-[#DFAE45]/25">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#DFAE45]/[0.05] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="relative text-[28px] font-black leading-none text-[#DFAE45]">
                  7–15
                </p>

                <p className="relative mt-2 text-[9px] font-bold uppercase tracking-[1px] text-gray-500">
                  Business Website
                </p>

                <div className="relative mt-2 flex items-center justify-center gap-1">
                  <CheckCircle2
                    size={10}
                    className="text-green-400"
                  />
                  <span className="text-[7px] text-gray-600">
                    Working days
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[20px] border border-white/[0.07] bg-white/[0.025] p-4 text-center transition-all duration-300 hover:border-[#DFAE45]/25">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#DFAE45]/[0.05] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="relative text-[28px] font-black leading-none text-[#DFAE45]">
                  30+
                </p>

                <p className="relative mt-2 text-[9px] font-bold uppercase tracking-[1px] text-gray-500">
                  Web Application
                </p>

                <div className="relative mt-2 flex items-center justify-center gap-1">
                  <CheckCircle2
                    size={10}
                    className="text-green-400"
                  />
                  <span className="text-[7px] text-gray-600">
                    Working days
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-4 flex items-center justify-center gap-2 border-t border-white/[0.06] pt-4">
              <Rocket
                size={13}
                className="text-[#DFAE45]"
              />

              <span className="text-[9px] font-semibold text-gray-500">
                Built carefully. Tested thoroughly. Launched confidently.
              </span>
            </div>
          </div>
        </div>

        {/* Final Trust Strip */}
        <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-green-400/10 bg-green-400/[0.025] px-4 py-3">
          <CheckCircle2
            size={13}
            strokeWidth={2.3}
            className="text-green-400"
          />

          <span className="text-[9px] font-semibold text-gray-500">
            Transparent process • Regular updates • Dedicated support
          </span>
        </div>
      </div>
    </section>
  );
}

