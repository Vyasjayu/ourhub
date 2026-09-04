"use client";

import { Search, X, Sparkles } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  const clearSearch = () => {
    onChange("");
  };

  return (
    <div className="relative">
      {/* Premium Gold Glow */}
      <div className="pointer-events-none absolute -inset-[2px] rounded-[22px] bg-gradient-to-r from-transparent via-[#F4C542]/20 to-transparent opacity-70 blur-lg" />

      {/* Search Container */}
      <div
        className="
          group
          relative
          flex
          items-center
          gap-2
          overflow-hidden
          rounded-[20px]
          border
          border-[#D9A91E]/25
          bg-[#0A1727]/90
          p-2
          shadow-[0_14px_35px_rgba(0,0,0,0.32)]
          backdrop-blur-xl
          transition-all
          duration-300
          focus-within:border-[#F4C542]/60
          focus-within:shadow-[0_14px_40px_rgba(244,197,66,0.10)]
        "
      >
        {/* Subtle Inner Shine */}
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C542]/35 to-transparent" />

        {/* Search Icon Box */}
        <div
          className="
            relative
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-[15px]
            border
            border-[#F4C542]/15
            bg-[#F4C542]/[0.06]
            transition
            duration-300
            group-focus-within:border-[#F4C542]/40
            group-focus-within:bg-[#F4C542]/[0.10]
          "
        >
          <Search
            size={19}
            strokeWidth={2.2}
            className="text-[#F4C542]"
          />

          {/* Small premium sparkle */}
          <Sparkles
            size={9}
            className="absolute -right-1 -top-1 text-[#F4C542]/70"
          />
        </div>

        {/* Input Area */}
        <div className="relative min-w-0 flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search services..."
            className="
              h-12
              w-full
              bg-transparent
              pr-2
              text-[14px]
              font-medium
              text-white
              outline-none
              placeholder:text-slate-500
            "
          />
        </div>

        {/* Clear Search */}
        {value && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              text-slate-400
              transition
              hover:bg-white/[0.06]
              hover:text-white
              active:scale-90
            "
          >
            <X size={17} />
          </button>
        )}

        {/* Search Button */}
        <button
          type="button"
          aria-label="Search"
          className="
            group/button
            relative
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-[15px]
            border
            border-[#FFE08A]/60
            bg-gradient-to-br
            from-[#FFE08A]
            via-[#F4C542]
            to-[#D99B12]
            text-[#0A101A]
            shadow-[0_8px_24px_rgba(244,197,66,0.22)]
            transition-all
            duration-300
            hover:-translate-y-[1px]
            hover:shadow-[0_12px_30px_rgba(244,197,66,0.32)]
            active:scale-95
          "
        >
          {/* Shine */}
          <span
            className="
              absolute
              -left-8
              top-0
              h-full
              w-6
              -skew-x-12
              bg-white/35
              blur-sm
              transition-all
              duration-700
              group-hover/button:left-[120%]
            "
          />

          <Search
            size={20}
            strokeWidth={2.8}
            className="relative"
          />
        </button>
      </div>

      {/* Premium Bottom Hint */}
      <div className="mt-2 flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-[#F4C542]" />

          <span className="text-[9px] font-medium tracking-wide text-slate-500">
            FIND TRUSTED PROFESSIONALS
          </span>
        </div>

        <span className="text-[9px] font-semibold tracking-wide text-[#F4C542]/70">
          OURHUB
        </span>
      </div>
    </div>
  );
}