
"use client";

import {
  Bell,
  ChevronDown,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Header() {
  return (
    <header
      className="
        relative
        z-30
        px-4
        pb-3
        pt-5
      "
    >
      {/* ==========================================================
          AMBIENT GOLD GLOW
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-20
          w-44
          -translate-x-1/2
          rounded-full
          bg-[#DFAE45]/[0.06]
          blur-3xl
        "
      />

      <div className="relative flex items-center justify-between">
        {/* ========================================================
            LOCATION
        ======================================================== */}

        {/* <button
          type="button"
          aria-label="Change location"
          className="
            group
            flex
            h-11
            items-center
            gap-2
            rounded-2xl
            border
            border-white/[0.08]
            bg-white/[0.035]
            px-3
            backdrop-blur-xl
            transition-all
            duration-200
            active:scale-95
            hover:border-[#DFAE45]/30
          "
        >
          {/* LOCATION ICON */}

          <div
            className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#DFAE45]/[0.09]
            "
          >
            <MapPin
              size={14}
              strokeWidth={2}
              className="text-[#E7B94F]"
            />
          </div>

          <div className="flex min-w-0 flex-col items-start">
            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-slate-500
              "
            >
              Location
            </span>

            <span
              className="
                max-w-[62px]
                truncate
                text-[11px]
                font-bold
                leading-4
                text-white
              "
            >
              Indore
            </span>
          </div>

          <ChevronDown
            size={13}
            strokeWidth={2}
            className="
              ml-0.5
              text-slate-500
              transition-transform
              group-hover:translate-y-0.5
            "
          />
        {/* </button> */} 

        {/* ========================================================
            CENTER BRAND
        ======================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-center
          "
        >
          {/* LOGO MARK */}

          <div className="mb-1 flex items-center justify-center gap-1.5">
            <Sparkles
              size={12}
              strokeWidth={1.8}
              className="text-[#DFAE45]"
            />

            <h1
              className="
                text-[27px]
                font-black
                leading-none
                tracking-[-0.055em]
                text-[#E7B94F]
              "
            >
              OurHub
            </h1>

            <Sparkles
              size={12}
              strokeWidth={1.8}
              className="text-[#DFAE45]"
            />
          </div>

          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-slate-500
            "
          >
            Religious Services
          </p>
        </div>

        {/* ========================================================
            NOTIFICATION
        ======================================================== */}

        <button
          type="button"
          aria-label="Notifications"
          className="
            group
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-white/[0.08]
            bg-white/[0.035]
            backdrop-blur-xl
            transition-all
            duration-200
            active:scale-95
            hover:border-[#DFAE45]/30
            hover:bg-[#DFAE45]/[0.06]
          "
        >
          <Bell
            size={19}
            strokeWidth={1.8}
            className="
              text-slate-200
              transition-colors
              group-hover:text-[#E7B94F]
            "
          />

          {/* NOTIFICATION DOT */}

          <span
            className="
              absolute
              right-[9px]
              top-[8px]
              h-2
              w-2
              rounded-full
              bg-[#E7B94F]
              ring-2
              ring-[#071321]
              shadow-[0_0_8px_rgba(231,185,79,0.75)]
            "
          />
        </button>
      </div>

      {/* ==========================================================
          SUBTLE DIVIDER
      ========================================================== */}

      <div
        className="
          mt-4
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/[0.07]
          to-transparent
        "
      />
    </header>
  );
}

