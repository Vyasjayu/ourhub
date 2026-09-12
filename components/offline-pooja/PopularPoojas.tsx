"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  Clock3,
  Flame,
  Landmark,
  Sparkles,
  Star,
} from "lucide-react";

import { popularOfflinePoojas } from "@/data/offlinePoojaData";

export default function PopularPoojas() {
  const router = useRouter();

  return (
    <section className="relative mt-9 w-full">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute right-[-30px] top-20 h-40 w-40 rounded-full bg-[#DFAE45]/[0.06] blur-3xl" />

      {/* ================= HEADER ================= */}
      <div className="relative mb-4 flex items-end justify-between px-4">
        <div>
          {/* Eyebrow */}
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-lg border border-[#DFAE45]/20 bg-[#DFAE45]/[0.07]">
              <Flame
                size={10}
                className="text-[#F3C75F]"
                fill="currentColor"
              />
            </span>

            <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#DFAE45]">
              Devotees Choice
            </span>
          </div>

          <h2 className="text-[21px] font-extrabold tracking-tight text-white">
            Popular Poojas
          </h2>

          <p className="mt-1 text-[9px] leading-4 text-slate-500">
            Sacred rituals chosen by devotees
          </p>
        </div>

        {/* View All */}
        <button
          type="button"
          onClick={() => router.push("/pooja/offline/book")}
          className="group mb-1 flex items-center gap-1.5 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/[0.06] px-3 py-2 text-[9px] font-bold text-[#F3C75F] transition-all duration-300 hover:border-[#DFAE45]/40 hover:bg-[#DFAE45]/[0.1] active:scale-95"
        >
          <span>View All</span>

          <ArrowRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* Divider */}
      <div className="mb-4 flex items-center gap-2 px-4">
        <div className="h-px w-12 bg-gradient-to-r from-[#DFAE45] to-transparent" />

        <Sparkles
          size={9}
          className="text-[#DFAE45]"
          fill="currentColor"
        />

        <div className="h-px flex-1 bg-gradient-to-r from-white/[0.07] to-transparent" />
      </div>

      {/* ================= CAROUSEL ================= */}
      <div className="flex gap-3 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {popularOfflinePoojas.map((pooja, index) => (
          <article
            key={pooja.id}
            className="group relative w-[188px] min-w-[188px] overflow-hidden rounded-[24px] border border-white/[0.07] bg-gradient-to-b from-[#101B29] to-[#080F18] shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DFAE45]/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.38)]"
          >
            {/* ================= IMAGE ================= */}
            <button
              type="button"
              onClick={() => router.push("/pooja/offline/book")}
              aria-label={`Book ${pooja.name}`}
              className="relative block w-full text-left"
            >
              <div className="relative h-[158px] w-full overflow-hidden bg-[#101A27]">
                <Image
                  src={pooja.image}
                  alt={pooja.name}
                  fill
                  sizes="188px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F18] via-black/15 to-black/5" />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Top Ambient Glow */}
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#DFAE45]/10 blur-2xl" />

                {/* Number */}
                <div className="absolute left-3 top-3 flex h-6 min-w-6 items-center justify-center rounded-full border border-white/10 bg-black/45 px-1.5 backdrop-blur-md">
                  <span className="text-[8px] font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Verified Badge */}
                <div className="absolute left-3 top-11 flex items-center gap-1 rounded-full border border-emerald-400/15 bg-black/50 px-2 py-1 backdrop-blur-md">
                  <BadgeCheck
                    size={10}
                    className="text-emerald-400"
                  />

                  <span className="text-[7px] font-bold uppercase tracking-wide text-emerald-300">
                    Verified
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-2 py-1 backdrop-blur-md">
                  <Star
                    size={9}
                    className="text-[#F3C75F]"
                    fill="currentColor"
                  />

                  <span className="text-[8px] font-bold text-white">
                    4.9
                  </span>
                </div>

                {/* Temple Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-2 py-1 backdrop-blur-md">
                  <Landmark
                    size={10}
                    className="text-[#F3C75F]"
                  />

                  <span className="text-[7px] font-semibold text-slate-200">
                    Temple Ritual
                  </span>
                </div>
              </div>
            </button>

            {/* ================= CONTENT ================= */}
            <div className="p-3.5">
              {/* Name */}
              <h3 className="line-clamp-2 min-h-[36px] text-[13px] font-extrabold leading-[18px] text-white">
                {pooja.name}
              </h3>

              {/* Description */}
              <p className="mt-1 line-clamp-2 min-h-[25px] text-[8px] leading-[13px] text-slate-500">
                Sacred ritual performed by verified pandits with
                authentic pooja vidhi.
              </p>

              {/* Meta */}
              <div className="mt-3 flex items-center gap-1.5">
                <div className="flex items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.025] px-2 py-1">
                  <Clock3
                    size={10}
                    className="text-[#DFAE45]"
                  />

                  <span className="text-[7px] font-semibold text-slate-400">
                    Sacred Ritual
                  </span>
                </div>

                <div className="flex items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.025] px-2 py-1">
                  <BadgeCheck
                    size={10}
                    className="text-[#DFAE45]"
                  />

                  <span className="text-[7px] font-semibold text-slate-400">
                    Trusted
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-3 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

              {/* Price + Action */}
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-[7px] font-medium uppercase tracking-[0.12em] text-slate-600">
                    Starting From
                  </p>

                  <p className="mt-0.5 flex items-center text-[17px] font-extrabold tracking-tight text-[#F3C75F]">
                    <span className="mr-0.5 text-[11px]">
                      ₹
                    </span>

                    {pooja.price.toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Arrow Button */}
                <button
                  type="button"
                  onClick={() =>
                    router.push("/pooja/offline/book")
                  }
                  aria-label={`Book ${pooja.name}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F3C75F] to-[#B98222] text-black shadow-[0_7px_18px_rgba(223,174,69,0.18)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(223,174,69,0.3)] active:scale-90"
                >
                  <ChevronRight
                    size={17}
                    strokeWidth={2.5}
                  />
                </button>
              </div>

              {/* Book Button */}
              <button
                type="button"
                onClick={() =>
                  router.push("/pooja/offline/book")
                }
                className="group/book mt-3 flex h-9 w-full items-center justify-center gap-1.5 overflow-hidden rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/[0.055] text-[9px] font-bold text-[#F3C75F] transition-all duration-300 hover:border-[#DFAE45]/40 hover:bg-gradient-to-r hover:from-[#F3C75F] hover:to-[#B98222] hover:text-black active:scale-[0.98]"
              >
                <CalendarDays
                  size={12}
                  className="transition-transform duration-300 group-hover/book:scale-110"
                />

                <span>Book This Pooja</span>

                <ArrowRight
                  size={11}
                  className="opacity-0 transition-all duration-300 group-hover/book:translate-x-0.5 group-hover/book:opacity-100"
                />
              </button>
            </div>

            {/* Bottom Gold Accent */}
            <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent transition-all duration-500 group-hover:w-3/4" />
          </article>
        ))}
      </div>

      {/* ================= SWIPE FOOTER ================= */}
      <div className="flex items-center justify-center gap-2 px-4">
        <div className="h-1 w-7 rounded-full bg-[#DFAE45] shadow-[0_0_8px_rgba(223,174,69,0.35)]" />

        <div className="h-1 w-1 rounded-full bg-white/10" />

        <div className="h-1 w-1 rounded-full bg-white/10" />

        <span className="ml-1 text-[7px] font-medium uppercase tracking-[0.15em] text-slate-600">
          Swipe to explore
        </span>
      </div>

      {/* Trust Line */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <BadgeCheck
          size={10}
          className="text-[#DFAE45]"
        />

        <span className="text-[7px] font-semibold uppercase tracking-[0.16em] text-slate-700">
          Authentic Rituals • Verified Pandits
        </span>
      </div>
    </section>
  );
}