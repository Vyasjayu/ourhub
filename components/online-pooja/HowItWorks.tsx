"use client";

import {
  CalendarDays,
  ClipboardList,
  CreditCard,
  Video,
  Gift,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Select Pooja",
    description: "Choose your desired pooja",
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Fill Details",
    description: "Enter name, gotra & details",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Make Payment",
    description: "Secure payment options",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Pooja Performed",
    description: "Pandit performs pooja on time",
    icon: Video,
  },
  {
    number: "05",
    title: "Receive Blessings",
    description: "Get video & prasad at home",
    icon: Gift,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative mt-8 overflow-hidden">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 top-16 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-40 w-40 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

      <div
        className="
          relative
          overflow-hidden
          rounded-[26px]
          border
          border-[#DFAE45]/15
          bg-gradient-to-br
          from-[#0B1627]
          via-[#080F1A]
          to-[#050A12]
          p-4
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        "
      >
        {/* Top Gold Accent */}
        <div className="absolute left-1/2 top-0 h-[2px] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent" />

        {/* Heading */}
        <div className="relative text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/5 px-3 py-1.5">
            <Sparkles
              size={12}
              className="text-[#DFAE45]"
              strokeWidth={2}
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#DFAE45]">
              Simple Process
            </span>
          </div>

          <h2 className="text-[19px] font-bold tracking-tight text-white">
            How{" "}
            <span className="text-[#DFAE45]">Online Pooja</span>{" "}
            Works?
          </h2>

          <p className="mx-auto mt-1.5 max-w-[285px] text-[10px] leading-4 text-gray-400">
            Book your sacred ritual in just a few simple steps.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-3 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#DFAE45]/40" />

            <div className="h-1 w-1 rotate-45 bg-[#DFAE45]" />

            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#DFAE45]/40" />
          </div>
        </div>

        {/* Steps */}
        <div className="relative mt-6">
          {/* Connecting Line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-[#DFAE45]/40 via-[#DFAE45]/15 to-transparent" />

          <div className="space-y-2.5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    rounded-[19px]
                    border
                    border-white/[0.06]
                    bg-white/[0.025]
                    p-2.5
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#DFAE45]/25
                    hover:bg-[#DFAE45]/[0.035]
                  "
                >
                  {/* Step Icon */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-[14px]
                        border
                        border-[#DFAE45]/25
                        bg-gradient-to-br
                        from-[#DFAE45]/15
                        to-[#DFAE45]/5
                        shadow-[0_6px_20px_rgba(223,174,69,0.08)]
                        transition-all
                        duration-300
                        group-hover:border-[#DFAE45]/45
                        group-hover:shadow-[0_0_20px_rgba(223,174,69,0.12)]
                      "
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        className="text-[#DFAE45]"
                      />
                    </div>

                    {/* Number Badge */}
                    <div
                      className="
                        absolute
                        -right-1
                        -top-1
                        flex
                        h-4
                        min-w-4
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#071424]
                        bg-[#DFAE45]
                        px-1
                        text-[7px]
                        font-bold
                        text-black
                        shadow-[0_0_10px_rgba(223,174,69,0.25)]
                      "
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[11px] font-semibold text-white">
                        {step.title}
                      </h3>

                      {!isLast && (
                        <ArrowRight
                          size={13}
                          strokeWidth={1.8}
                          className="shrink-0 text-[#DFAE45]/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#DFAE45]/70"
                        />
                      )}
                    </div>

                    <p className="mt-1 text-[9px] leading-4 text-gray-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Completed Indicator */}
                  <div className="shrink-0 opacity-40 transition-opacity group-hover:opacity-100">
                    <CheckCircle2
                      size={14}
                      strokeWidth={1.8}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Message */}
        <div className="relative mt-4 overflow-hidden rounded-[17px] border border-[#DFAE45]/10 bg-black/20 px-3 py-3">
          <div className="flex items-center justify-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">
              <Sparkles
                size={14}
                className="text-[#DFAE45]"
              />
            </div>

            <div>
              <p className="text-[9px] font-semibold text-white">
                Your Devotion, Our Responsibility
              </p>

              <p className="mt-0.5 text-[8px] leading-3 text-gray-500">
                Simple booking • Verified pandits • Peace of mind
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#DFAE45]/20" />

          <Sparkles
            size={11}
            className="text-[#DFAE45]/60"
          />

          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#DFAE45]/20" />
        </div>
      </div>
    </section>
  );
}