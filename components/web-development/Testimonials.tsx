
"use client";

import {
  CheckCircle2,
  MessageCircle,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    review: "Amazing website quality. Very professional team.",
    rating: 5,
    initials: "RS",
  },
  {
    name: "Neha Patel",
    review: "OurHub delivered before deadline.",
    rating: 5,
    initials: "NP",
  },
  {
    name: "Vikas Singh",
    review: "Best UI & UX experience.",
    rating: 5,
    initials: "VS",
  },
];

export default function Testimonials() {
  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-[#DFAE45]/[0.045] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-blue-500/[0.025] blur-3xl" />

      <div className="relative">
        {/* Section Header */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <MessageCircle
              size={16}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            Client Stories
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-7 w-1 rounded-full bg-gradient-to-b from-[#FFD86A] to-[#DFAE45]" />

          <div>
            <h2 className="text-[24px] font-extrabold tracking-tight text-white">
              Happy Clients
            </h2>
          </div>
        </div>

        <p className="mt-2 pl-3 text-[13px] leading-5 text-gray-400">
          Real experiences from businesses who trusted OurHub with their
          digital presence.
        </p>

        {/* Rating Summary */}
        <div className="relative mt-5 overflow-hidden rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-r from-[#101D2D] to-[#091321] p-4">
          <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <Star
                  size={20}
                  className="text-[#DFAE45]"
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <span className="text-[17px] font-extrabold text-white">
                    5.0
                  </span>

                  <div className="ml-1 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={10}
                        className="text-[#DFAE45]"
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-0.5 text-[9px] font-medium text-gray-500">
                  Client satisfaction
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[16px] font-extrabold text-[#DFAE45]">
                100%
              </p>
              <p className="text-[8px] font-semibold uppercase tracking-[1px] text-gray-600">
                Positive
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-5 space-y-3">
          {reviews.map((item, index) => (
            <article
              key={index}
              className="
                group relative overflow-hidden rounded-[26px]
                border border-white/[0.07]
                bg-gradient-to-br from-[#101D2D] via-[#0B1726] to-[#08121F]
                p-5
                shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#DFAE45]/25
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.30)]
                active:scale-[0.99]
              "
            >
              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/[0.055] blur-3xl transition-all duration-500 group-hover:bg-[#DFAE45]/[0.10]" />

              {/* Top Line */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Quote Icon */}
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.025]">
                <Quote
                  size={15}
                  className="text-[#DFAE45]/50"
                  strokeWidth={2}
                />
              </div>

              {/* Rating */}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={13}
                      className="text-[#DFAE45]"
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <span className="mr-12 rounded-full border border-green-400/10 bg-green-400/[0.06] px-2 py-1 text-[7px] font-bold uppercase tracking-[1px] text-green-400">
                  5 Star
                </span>
              </div>

              {/* Review */}
              <div className="relative mt-4">
                <p className="text-[13px] leading-[21px] text-gray-300">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Divider */}
              <div className="relative my-4 h-px bg-gradient-to-r from-white/[0.07] via-white/[0.04] to-transparent" />

              {/* Client */}
              <div className="relative flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/20 to-[#DFAE45]/5">
                    <span className="text-[11px] font-extrabold text-[#DFAE45]">
                      {item.initials}
                    </span>

                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#0B1726] bg-green-500">
                      <CheckCircle2
                        size={9}
                        className="text-white"
                        strokeWidth={3}
                      />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-[12px] font-extrabold text-white">
                      {item.name}
                    </h3>

                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="text-[8px] font-medium text-gray-600">
                        Verified Client
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#DFAE45]/40" />

                      <span className="text-[8px] font-medium text-gray-600">
                        OurHub
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.025] transition-all duration-300 group-hover:border-[#DFAE45]/20 group-hover:bg-[#DFAE45]/10">
                  <Sparkles
                    size={13}
                    className="text-gray-600 transition-colors duration-300 group-hover:text-[#DFAE45]"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <div className="relative mt-4 flex items-center justify-center gap-2 rounded-2xl border border-[#DFAE45]/10 bg-[#DFAE45]/[0.035] px-4 py-3">
          <CheckCircle2
            size={13}
            className="text-green-400"
            strokeWidth={2.3}
          />

          <span className="text-[9px] font-semibold text-gray-500">
            Trusted for premium digital experiences
          </span>

          <Sparkles
            size={12}
            className="text-[#DFAE45]"
            strokeWidth={2}
          />
        </div>
      </div>
    </section>
  );
}

