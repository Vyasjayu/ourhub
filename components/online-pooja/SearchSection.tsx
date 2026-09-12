
"use client";

import {
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

export default function SearchSection() {
  const [search, setSearch] = useState("");

  return (
    <section className="relative mt-5">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-[#DFAE45]/[0.025] blur-2xl" />

      {/* Search Container */}
      <div
        className="
          group
          relative
          flex
          h-[58px]
          items-center
          overflow-hidden
          rounded-[20px]
          border
          border-white/[0.08]
          bg-gradient-to-r
          from-[#0D1828]
          via-[#101B2C]
          to-[#0B1625]
          px-3
          shadow-[0_12px_35px_rgba(0,0,0,0.22)]
          backdrop-blur-xl
          transition-all
          duration-300
          focus-within:border-[#DFAE45]/40
          focus-within:shadow-[0_12px_40px_rgba(223,174,69,0.08)]
        "
      >
        {/* Left Icon */}
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-[14px]
            border
            border-[#DFAE45]/15
            bg-[#DFAE45]/[0.06]
            transition-all
            duration-300
            group-focus-within:border-[#DFAE45]/30
            group-focus-within:bg-[#DFAE45]/[0.10]
          "
        >
          <Search
            size={19}
            strokeWidth={1.8}
            className="
              text-white/45
              transition-colors
              duration-300
              group-focus-within:text-[#E7B94F]
            "
          />
        </div>

        {/* Input */}
        <div className="ml-3 min-w-0 flex-1">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search pooja, temple, ritual..."
            aria-label="Search pooja"
            className="
              w-full
              bg-transparent
              text-[13px]
              font-medium
              text-white
              outline-none
              placeholder:text-white/30
            "
          />

          {/* Small Label */}
          <p className="mt-0.5 text-[8px] font-medium tracking-wide text-white/20">
            Discover sacred services
          </p>
        </div>

        {/* Clear Button */}
        {search.length > 0 && (
          <button
            type="button"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            className="
              mr-1
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white/[0.06]
              text-white/40
              transition
              hover:bg-white/[0.10]
              hover:text-white
              active:scale-90
            "
          >
            <X size={15} />
          </button>
        )}

        {/* Search Accent */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-px
            w-0
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#DFAE45]
            to-transparent
            opacity-0
            transition-all
            duration-500
            group-focus-within:w-[70%]
            group-focus-within:opacity-70
          "
        />
      </div>

      {/* Quick Suggestions */}
      <div className="mt-2.5 flex items-center gap-2 overflow-x-auto px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex shrink-0 items-center gap-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#DFAE45]/60">
          <Sparkles size={10} />
          Popular
        </div>

        <span className="h-3 w-px shrink-0 bg-white/[0.08]" />

        <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[9px] text-white/35">
          Ganesh Pooja
        </span>

        <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[9px] text-white/35">
          Lakshmi Pooja
        </span>

        <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[9px] text-white/35">
          Rudrabhishek
        </span>

        <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[9px] text-white/35">
          Griha Pravesh
        </span>
      </div>
    </section>
  );
}

