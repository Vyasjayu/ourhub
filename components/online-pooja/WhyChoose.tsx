"use client";

import {
  Home,
  CalendarDays,
  Users,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Perform Pooja",
    description:
      "Perform sacred pooja from the comfort of your home.",
    icon: Home,
  },
  {
    number: "02",
    title: "Book Anytime",
    description:
      "Choose your preferred pooja, date & time with ease.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Verified Pandits",
    description:
      "Experienced & verified pandits perform your pooja.",
    icon: Users,
  },
  {
    number: "04",
    title: "Secure Booking",
    description:
      "Safe payments with instant booking confirmation.",
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative mt-8 overflow-hidden">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-44 w-44 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#0B1627] via-[#080F1A] to-[#050A12] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

        {/* Top Gold Line */}
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
              Why OurHub
            </span>
          </div>

          <h2 className="text-[19px] font-bold tracking-tight text-white">
            Why Choose{" "}
            <span className="text-[#DFAE45]">Online Pooja?</span>
          </h2>

          <p className="mx-auto mt-1.5 max-w-[290px] text-[10px] leading-4 text-gray-400">
            A trusted spiritual experience designed to make every ritual
            simple, authentic and peaceful.
          </p>

          {/* Decorative Divider */}
          <div className="mx-auto mt-3 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#DFAE45]/40" />
            <div className="h-1 w-1 rotate-45 bg-[#DFAE45]" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#DFAE45]/40" />
          </div>
        </div>

        {/* Features */}
        <div className="relative mt-5 grid grid-cols-2 gap-2.5">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[19px]
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#DFAE45]/30
                  hover:bg-[#DFAE45]/[0.035]
                "
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-7 -top-7 h-20 w-20 rounded-full bg-[#DFAE45]/5 blur-2xl transition-all duration-300 group-hover:bg-[#DFAE45]/10" />

                {/* Number */}
                <span className="absolute right-2.5 top-2 text-[9px] font-bold tracking-wider text-white/10">
                  {item.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-[13px]
                    border
                    border-[#DFAE45]/20
                    bg-gradient-to-br
                    from-[#DFAE45]/15
                    to-[#DFAE45]/5
                    shadow-[0_6px_20px_rgba(223,174,69,0.08)]
                  "
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className="text-[#DFAE45]"
                  />

                  {/* Icon Dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-[#DFAE45] shadow-[0_0_8px_rgba(223,174,69,0.8)]" />
                </div>

                {/* Content */}
                <div className="relative mt-3">
                  <h3 className="text-[11px] font-semibold leading-4 text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[9px] leading-[1.45] text-gray-400">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Trust Footer */}
        <div className="relative mt-4 rounded-[17px] border border-[#DFAE45]/10 bg-black/20 px-3 py-2.5">
          <div className="flex items-center justify-center gap-2.5">
            <div className="flex -space-x-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#071424] bg-[#DFAE45]/15">
                <CheckCircle2
                  size={12}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#071424] bg-[#DFAE45]/15">
                <ShieldCheck
                  size={12}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#071424] bg-[#DFAE45]/15">
                <Sparkles
                  size={12}
                  className="text-[#DFAE45]"
                />
              </div>
            </div>

            <div className="h-5 w-px bg-white/10" />

            <div>
              <p className="text-[9px] font-semibold text-white">
                Trusted by Devotees
              </p>

              <p className="text-[8px] text-gray-500">
                Authentic • Secure • Verified
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
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