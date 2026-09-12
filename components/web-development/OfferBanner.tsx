
"use client";

import { ArrowRight, Clock3, Sparkles, Zap } from "lucide-react";

export default function OfferBanner() {
  return (
    <section className="relative mt-8 px-4">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-[#DFAE45]/25
          bg-gradient-to-br
          from-[#E7B94F]
          via-[#DFAE45]
          to-[#B97820]
          p-[1px]
          shadow-[0_25px_65px_rgba(223,174,69,0.12)]
        "
      >
        {/* Inner card */}
        <div
          className="
            relative
            min-h-[220px]
            overflow-hidden
            rounded-[27px]
            bg-gradient-to-br
            from-[#DFAE45]
            via-[#D49F32]
            to-[#A96519]
            px-5
            py-5
          "
        >
          {/* =========================
              DECORATIVE GLOWS
          ========================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-16
              -top-20
              h-56
              w-56
              rounded-full
              bg-white/20
              blur-[2px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-16
              h-48
              w-48
              rounded-full
              bg-black/10
              blur-2xl
            "
          />

          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-10
              top-6
              h-36
              w-36
              rounded-full
              border
              border-white/15
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-2
              top-14
              h-24
              w-24
              rounded-full
              border
              border-white/10
            "
          />

          {/* =========================
              TOP LABEL
          ========================== */}

          <div className="relative z-10 flex items-center justify-between">
            <div
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-black/10
                bg-black/[0.12]
                px-3
                py-1.5
              "
            >
              <Sparkles
                size={11}
                strokeWidth={2.5}
                className="text-black"
              />

              <span className="text-[9px] font-black uppercase tracking-[0.16em] text-black">
                Limited Time Offer
              </span>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/[0.10]">
              <Zap
                size={17}
                strokeWidth={2.4}
                className="text-black"
              />
            </div>
          </div>

          {/* =========================
              MAIN CONTENT
          ========================== */}

          <div className="relative z-10 mt-5">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-black/60">
              Build your website & save
            </p>

            <div className="mt-0.5 flex items-end gap-2">
              <h2
                className="
                  text-[48px]
                  font-black
                  leading-none
                  tracking-[-0.06em]
                  text-black
                "
              >
                20%
              </h2>

              <span className="mb-1.5 text-[16px] font-black uppercase text-black/75">
                OFF
              </span>
            </div>

            <p className="mt-2 max-w-[245px] text-[11px] font-semibold leading-[1.5] text-black/70">
              Get a premium website designed to make your business look
              professional and grow online.
            </p>
          </div>

          {/* =========================
              CTA + TIMER
          ========================== */}

          <div className="relative z-10 mt-5 flex items-center justify-between gap-3">
            <button
              type="button"
              className="
                group/btn
                flex
                h-10
                items-center
                gap-2
                rounded-xl
                bg-[#050B14]
                px-4
                text-[10px]
                font-extrabold
                text-white
                shadow-[0_10px_25px_rgba(0,0,0,0.18)]
                transition-all
                duration-200
                hover:bg-[#0B1422]
                active:scale-95
              "
            >
              <span>Claim Offer</span>

              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover/btn:translate-x-1"
              />
            </button>

            <div className="flex items-center gap-1.5">
              <Clock3
                size={12}
                strokeWidth={2.2}
                className="text-black/60"
              />

              <div>
                <p className="text-[7px] font-bold uppercase tracking-wider text-black/50">
                  Limited
                </p>

                <p className="text-[9px] font-black text-black/75">
                  Availability
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              SHINE EFFECT
          ========================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-[120%]
              w-[55%]
              rotate-[18deg]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-all
              duration-1000
              group-hover:left-[130%]
            "
          />
        </div>
      </div>

      {/* Small trust text */}
      <div className="mt-2.5 flex items-center justify-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-emerald-400" />

        <span className="text-[8px] font-semibold text-slate-600">
          Offer available on selected website packages
        </span>
      </div>
    </section>
  );
}

