"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  Clock3,
  Sparkles,
  Star,
} from "lucide-react";

import { popularOfflinePoojas } from "@/data/offlinePoojaData";

export default function PopularPoojas() {
  const router = useRouter();

  return (
    <section className="mt-8 w-full">
      {/* ================= HEADER ================= */}
      <div className="mb-4 flex items-end justify-between px-4">
        <div>
          <div className="mb-1 flex items-center gap-1.5">
            <Sparkles
              size={13}
              className="text-yellow-400"
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-yellow-400/80">
              Sacred Services
            </span>
          </div>

          <h2 className="text-[19px] font-bold tracking-tight text-white">
            Popular Poojas
          </h2>

          <p className="mt-0.5 text-[10px] text-gray-500">
            Choose a sacred ritual for your occasion
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            router.push("/pooja/offline/book")
          }
          className="group flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-1.5 text-[10px] font-semibold text-yellow-400 transition active:scale-95"
        >
          View All

          <ArrowRight
            size={13}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* ================= POJA CARDS ================= */}
      <div className="flex gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {popularOfflinePoojas.map((pooja) => (
          <article
            key={pooja.id}
            className="
              group
              relative
              w-[174px]
              min-w-[174px]
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#0b1118]
              shadow-[0_10px_35px_rgba(0,0,0,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-yellow-400/30
            "
          >
            {/* ================= IMAGE ================= */}
            <button
              type="button"
              onClick={() =>
                router.push(
                  `/pooja/offline/book`
                )
              }
              className="relative block w-full text-left"
            >
              <div className="relative h-[145px] w-full overflow-hidden bg-[#162335]">
                <Image
                  src={pooja.image}
                  alt={pooja.name}
                  fill
                  sizes="174px"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1118] via-black/10 to-transparent" />

                {/* Top overlay */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent" />

                {/* VERIFIED */}
                <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full border border-green-400/20 bg-black/55 px-2 py-1 backdrop-blur-md">
                  <BadgeCheck
                    size={11}
                    className="text-green-400"
                  />

                  <span className="text-[8px] font-semibold text-green-300">
                    VERIFIED
                  </span>
                </div>

                {/* RATING */}
                <div className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 backdrop-blur-md">
                  <Star
                    size={10}
                    fill="currentColor"
                    className="text-yellow-400"
                  />

                  <span className="text-[9px] font-bold text-white">
                    4.9
                  </span>
                </div>

                {/* Bottom image info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <div className="flex items-center gap-1.5 text-[8px] text-gray-200">
                    <Clock3 size={10} />

                    <span>
                      Sacred Ritual
                    </span>

                    <span className="text-gray-500">
                      •
                    </span>

                    <span>
                      Temple
                    </span>
                  </div>
                </div>
              </div>
            </button>

            {/* ================= CONTENT ================= */}
            <div className="p-3">
              {/* Name */}
              <h3 className="line-clamp-2 min-h-[34px] text-[12px] font-bold leading-[17px] text-white">
                {pooja.name}
              </h3>

              {/* Small description */}
              <p className="mt-1 line-clamp-2 min-h-[25px] text-[8px] leading-3.5 text-gray-500">
                Sacred pooja performed by verified pandits.
              </p>

              {/* Divider */}
              <div className="my-2.5 h-px bg-white/[0.06]" />

              {/* Price + Arrow */}
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-[8px] text-gray-500">
                    Starting from
                  </p>

                  <p className="mt-0.5 flex items-center text-[15px] font-extrabold text-yellow-400">
                    <span className="mr-0.5 text-[11px]">
                      ₹
                    </span>

                    {pooja.price.toLocaleString(
                      "en-IN"
                    )}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    router.push(
                      `/pooja/offline/book`
                    )
                  }
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-yellow-400
                    text-black
                    shadow-lg
                    shadow-yellow-500/10
                    transition
                    active:scale-90
                  "
                  aria-label={`Book ${pooja.name}`}
                >
                  <ChevronRight
                    size={17}
                    strokeWidth={2.5}
                  />
                </button>
              </div>

              {/* BOOK BUTTON */}
              <button
                type="button"
                onClick={() =>
                  router.push(
                    `/pooja/offline/book`
                  )
                }
                className="
                  mt-3
                  flex
                  h-9
                  w-full
                  items-center
                  justify-center
                  gap-1.5
                  rounded-xl
                  border
                  border-yellow-400/20
                  bg-yellow-400/[0.06]
                  text-[9px]
                  font-bold
                  text-yellow-400
                  transition
                  active:scale-[0.98]
                  hover:bg-yellow-400
                  hover:text-black
                "
              >
                <CalendarDays size={12} />

                Book This Pooja
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* ================= SWIPE INDICATOR ================= */}
      <div className="mt-1 flex items-center justify-center gap-1.5 px-4">
        <div className="h-1 w-7 rounded-full bg-yellow-400" />

        <div className="h-1 w-1 rounded-full bg-white/10" />

        <div className="h-1 w-1 rounded-full bg-white/10" />

        <span className="ml-1 text-[8px] text-gray-600">
          Swipe to explore
        </span>
      </div>
    </section>
  );
}