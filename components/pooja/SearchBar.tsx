
"use client";

import { Search, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SearchBar() {
  const { language } = useLanguage();

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const translations = {
    en: {
      placeholder: "Search Pooja, Temple...",
      ariaLabel: "Search Pooja or Temple",
    },

    hi: {
      placeholder: "पूजा, मंदिर खोजें...",
      ariaLabel: "पूजा या मंदिर खोजें",
    },
  };

  const text = translations[language];

  return (
    <div className="group relative w-full">

      {/* =================================================
          OUTER GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-[1px]
          rounded-[19px]
          bg-gradient-to-r
          from-[#DFAE45]/0
          via-[#DFAE45]/10
          to-[#DFAE45]/0
          opacity-0
          blur-md
          transition
          duration-500
          group-focus-within:opacity-100
        "
      />

      {/* =================================================
          SEARCH CONTAINER
      ================================================= */}

      <div
        className="
          relative
          flex
          h-[56px]
          w-full
          items-center
          overflow-hidden
          rounded-[18px]
          border
          border-white/[0.07]
          bg-[#0B1421]/95
          shadow-[0_10px_30px_rgba(0,0,0,0.22)]
          backdrop-blur-xl
          transition-all
          duration-300
          group-focus-within:border-[#DFAE45]/35
          group-focus-within:bg-[#0D1725]
          group-focus-within:shadow-[0_10px_35px_rgba(223,174,69,0.08)]
        "
      >

        {/* =================================================
            LEFT ICON
        ================================================= */}

        <div
          className="
            ml-3
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-[#DFAE45]/10
            bg-[#DFAE45]/[0.06]
            transition-all
            duration-300
            group-focus-within:border-[#DFAE45]/25
            group-focus-within:bg-[#DFAE45]/10
          "
        >
          <Search
            size={18}
            strokeWidth={2}
            className="
              text-gray-500
              transition-colors
              duration-300
              group-focus-within:text-[#DFAE45]
            "
          />
        </div>

        {/* =================================================
            INPUT
        ================================================= */}

        <input
          type="text"
          placeholder={text.placeholder}
          aria-label={text.ariaLabel}
          className="
            h-full
            min-w-0
            flex-1
            bg-transparent
            px-3
            text-[13px]
            font-medium
            text-white
            placeholder:text-gray-600
            outline-none
          "
        />

        {/* =================================================
            RIGHT ICON
        ================================================= */}

        <div
          className="
            mr-3
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-white/[0.035]
          "
        >
          <Sparkles
            size={14}
            strokeWidth={1.8}
            className="text-[#DFAE45]/70"
          />
        </div>

        {/* =================================================
            BOTTOM GOLD ACCENT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-[1px]
            w-0
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#DFAE45]
            to-transparent
            transition-all
            duration-500
            group-focus-within:w-[55%]
          "
        />

      </div>
    </div>
  );
}
