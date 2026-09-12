
"use client";

import { ArrowLeft, Bell, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OfflineHeader() {
  const router = useRouter();

  return (
    <header className="relative z-30 px-4 pb-3 pt-4">
      {/* =====================================================
          AMBIENT HEADER GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[-45px] h-32 w-52 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.07] blur-3xl" />

      {/* =====================================================
          HEADER CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          flex
          h-[66px]
          items-center
          justify-between
          rounded-[23px]
          border
          border-white/[0.07]
          bg-[#0A1522]/80
          px-3
          shadow-[0_10px_35px_rgba(0,0,0,0.22)]
          backdrop-blur-2xl
        "
      >
        {/* =================================================
            BACK BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
          className="
            group
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.035]
            text-slate-300
            transition-all
            duration-300
            hover:border-[#DFAE45]/30
            hover:bg-[#DFAE45]/[0.07]
            hover:text-[#F3C75F]
            active:scale-90
          "
        >
          <ArrowLeft
            size={21}
            strokeWidth={2.2}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
        </button>

        {/* =================================================
            CENTER BRANDING
        ================================================== */}

        <div className="absolute left-1/2 top-1/2 w-[220px] -translate-x-1/2 -translate-y-1/2 text-center">
          {/* OURHUB */}

          <div className="flex items-center justify-center gap-1.5">
            <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#DFAE45]/50" />

            <Sparkles
              size={10}
              strokeWidth={2}
              className="text-[#DFAE45]"
              fill="currentColor"
            />

            <p className="text-[9px] font-extrabold tracking-[0.32em] text-[#DFAE45]">
              OURHUB
            </p>

            <Sparkles
              size={10}
              strokeWidth={2}
              className="text-[#DFAE45]"
              fill="currentColor"
            />

            <span className="h-px w-5 bg-gradient-to-l from-transparent to-[#DFAE45]/50" />
          </div>

          {/* TITLE */}

          <h1 className="mt-1 text-[16px] font-bold tracking-tight text-white">
            Offline Pooja
          </h1>

          {/* SUBTITLE */}

          <div className="mt-0.5 flex items-center justify-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#DFAE45]" />

            <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Sacred • Personal • Trusted
            </span>

            <span className="h-1 w-1 rounded-full bg-[#DFAE45]" />
          </div>
        </div>

        {/* =================================================
            NOTIFICATION
        ================================================== */}

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
            border-white/[0.07]
            bg-white/[0.035]
            text-slate-300
            transition-all
            duration-300
            hover:border-[#DFAE45]/30
            hover:bg-[#DFAE45]/[0.07]
            hover:text-[#F3C75F]
            active:scale-90
          "
        >
          <Bell
            size={20}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:rotate-[-8deg]"
          />

          {/* Notification Dot */}

          <span className="absolute right-[8px] top-[7px] flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E7B94F] opacity-50" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-[#0A1522] bg-[#E7B94F] shadow-[0_0_8px_rgba(231,185,79,0.8)]" />
          </span>
        </button>

        {/* =================================================
            BOTTOM GOLD LINE
        ================================================== */}

        <div
          className="
            absolute
            bottom-[-1px]
            left-1/2
            h-px
            w-24
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#DFAE45]
            to-transparent
            opacity-70
          "
        />
      </div>

      {/* =====================================================
          MICRO BRANDING BELOW HEADER
      ====================================================== */}

      <div className="flex items-center justify-center gap-2 pt-2">
        <span className="text-[7px] font-medium tracking-[0.18em] text-slate-700">
          BOOK AUTHENTIC POOJA
        </span>

        <span className="h-1 w-1 rounded-full bg-[#DFAE45]/40" />

        <span className="text-[7px] font-medium tracking-[0.18em] text-slate-700">
          AT YOUR PLACE
        </span>
      </div>
    </header>
  );
}

