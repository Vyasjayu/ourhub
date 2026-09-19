
"use client";

import {
  ArrowLeft,
  Bell,
  Sparkles,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const router = useRouter();

  const { language } = useLanguage();

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const translations = {
    en: {
      title: "Pooja Booking",
      back: "Go back",
      notifications: "Notifications",
    },

    hi: {
      title: "पूजा बुकिंग",
      back: "वापस जाएँ",
      notifications: "सूचनाएँ",
    },
  };

  const text = translations[language];

  return (
    <header className="relative z-40">

      {/* =====================================================
          AMBIENT GOLD GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-80px]
          h-[150px]
          w-[220px]
          -translate-x-1/2
          rounded-full
          bg-[#DFAE45]/[0.08]
          blur-[60px]
        "
      />

      <div className="relative flex items-center justify-between px-1 py-1">

        {/* =================================================
            BACK BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => router.back()}
          aria-label={text.back}
          title={text.back}
          className="
            group
            relative
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-[15px]
            border
            border-[#DFAE45]/15
            bg-[#0B1421]/90
            text-[#DFAE45]
            shadow-[0_8px_25px_rgba(0,0,0,0.22)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-[#DFAE45]/40
            hover:bg-[#DFAE45]
            hover:text-black
            active:scale-90
          "
        >

          {/* Button Glow */}

          <div
            className="
              absolute
              inset-0
              bg-[#DFAE45]/0
              transition
              group-hover:bg-[#DFAE45]/10
            "
          />

          <ArrowLeft
            size={21}
            strokeWidth={2.2}
            className="
              relative
              transition-transform
              duration-300
              group-hover:-translate-x-0.5
            "
          />

        </button>


        {/* =================================================
            CENTER BRAND
        ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            -translate-x-1/2
            -translate-y-1/2
            flex-col
            items-center
          "
        >

          {/* OURHUB */}

          <div className="flex items-center gap-1.5">

            <span
              className="
                h-px
                w-4
                bg-gradient-to-r
                from-transparent
                to-[#DFAE45]/50
              "
            />

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#DFAE45]
              "
            >
              OURHUB
            </span>

            <span
              className="
                h-px
                w-4
                bg-gradient-to-l
                from-transparent
                to-[#DFAE45]/50
              "
            />

          </div>


          {/* TITLE */}

          <h1
            className="
              mt-1
              whitespace-nowrap
              text-[16px]
              font-extrabold
              leading-none
              tracking-tight
              text-white
            "
          >
            {text.title}
          </h1>


          {/* GOLD ACCENT */}

          <div className="mt-2 flex items-center gap-1">

            <span
              className="
                h-[1px]
                w-5
                bg-gradient-to-r
                from-transparent
                to-[#DFAE45]
              "
            />

            <Sparkles
              size={9}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />

            <span
              className="
                h-[1px]
                w-5
                bg-gradient-to-l
                from-transparent
                to-[#DFAE45]
              "
            />

          </div>

        </div>


        {/* =================================================
            NOTIFICATION
        ================================================= */}

        <button
          type="button"
          aria-label={text.notifications}
          title={text.notifications}
          className="
            group
            relative
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-[15px]
            border
            border-[#DFAE45]/15
            bg-[#0B1421]/90
            text-[#DFAE45]
            shadow-[0_8px_25px_rgba(0,0,0,0.22)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-[#DFAE45]/40
            hover:bg-[#DFAE45]
            hover:text-black
            active:scale-90
          "
        >

          {/* Subtle Inner Glow */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#DFAE45]/[0.06]
              to-transparent
            "
          />

          <Bell
            size={19}
            strokeWidth={2}
            className="
              relative
              transition-transform
              duration-300
              group-hover:rotate-[-8deg]
            "
          />


          {/* Notification Dot */}

          <span
            className="
              absolute
              right-[8px]
              top-[7px]
              flex
              h-[9px]
              w-[9px]
              items-center
              justify-center
            "
          >

            <span
              className="
                absolute
                h-full
                w-full
                animate-ping
                rounded-full
                bg-red-500/40
              "
            />

            <span
              className="
                relative
                h-[6px]
                w-[6px]
                rounded-full
                bg-red-500
                ring-2
                ring-[#0B1421]
              "
            />

          </span>

        </button>

      </div>


      {/* =================================================
          BOTTOM PREMIUM LINE
      ================================================= */}

      <div className="mt-2 flex items-center justify-center">

        <div
          className="
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/[0.06]
            to-transparent
          "
        />

      </div>

    </header>
  );
}

