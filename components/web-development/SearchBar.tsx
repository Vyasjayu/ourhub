
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import { services } from "@/data/services";

export default function SearchBar() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const value = query.trim().toLowerCase();

    if (!value) {
      setError("Enter a service name to search.");
      return;
    }

    const service = services.find((item) => {
      return (
        item.title.toLowerCase().includes(value) ||
        item.subtitle.toLowerCase().includes(value) ||
        item.slug.toLowerCase().includes(value)
      );
    });

    if (service) {
      setError("");
      router.push(`/web-development/service/${service.slug}`);
    } else {
      setError("No matching service found.");
    }
  };

  const clearSearch = () => {
    setQuery("");
    setError("");
  };

  return (
    <section className="px-4 pt-5">
      {/* Section heading */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Sparkles
            size={13}
            className="text-[#DFAE45]"
          />

          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Find Your Service
          </span>
        </div>

        <span className="text-[9px] font-medium text-slate-600">
          Quick Search
        </span>
      </div>

      {/* Search container */}
      <div
        className={`
          relative
          overflow-hidden
          rounded-[22px]
          border
          bg-[#0B1422]
          transition-all
          duration-300
          ${
            focused
              ? "border-[#DFAE45]/40 shadow-[0_15px_45px_rgba(223,174,69,0.10)]"
              : "border-white/[0.07] shadow-[0_12px_35px_rgba(0,0,0,0.22)]"
          }
        `}
      >
        {/* Top highlight */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[55%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />

        {/* Search row */}
        <div className="flex items-center gap-2 p-2">

          {/* Search icon box */}
          <div
            className={`
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-[16px]
              border
              transition-all
              duration-300
              ${
                focused
                  ? "border-[#DFAE45]/25 bg-[#DFAE45]/10"
                  : "border-white/[0.06] bg-white/[0.035]"
              }
            `}
          >
            <Search
              size={18}
              strokeWidth={2}
              className={
                focused
                  ? "text-[#E7B94F]"
                  : "text-slate-400"
              }
            />
          </div>

          {/* Input */}
          <div className="min-w-0 flex-1">
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (error) setError("");
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Search website services..."
              aria-label="Search website services"
              className="
                w-full
                bg-transparent
                px-1
                py-2
                text-[12px]
                font-semibold
                text-white
                outline-none
                placeholder:text-[11px]
                placeholder:font-medium
                placeholder:text-slate-500
              "
            />

            <p className="px-1 text-[8px] font-medium text-slate-600">
              Try: Business Website, E-commerce, Landing Page
            </p>
          </div>

          {/* Clear button */}
          {query && (
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
                text-slate-500
                transition
                hover:bg-white/[0.06]
                hover:text-white
                active:scale-90
              "
            >
              <X size={15} />
            </button>
          )}

          {/* Search button */}
          <button
            type="button"
            onClick={handleSearch}
            aria-label="Search"
            className="
              group
              flex
              h-11
              shrink-0
              items-center
              gap-1.5
              rounded-[16px]
              bg-[#DFAE45]
              px-4
              text-[10px]
              font-extrabold
              text-black
              shadow-[0_8px_25px_rgba(223,174,69,0.16)]
              transition-all
              duration-200
              hover:bg-[#E7B94F]
              hover:shadow-[0_10px_30px_rgba(223,174,69,0.25)]
              active:scale-95
            "
          >
            <span className="hidden min-[360px]:inline">
              Search
            </span>

            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="border-t border-red-400/10 bg-red-400/[0.035] px-4 py-2.5">
            <p className="text-[9px] font-semibold text-red-300">
              {error}
            </p>
          </div>
        )}

        {/* Bottom accent */}
        <div
          className={`
            h-px
            w-full
            transition-all
            duration-300
            ${
              focused
                ? "bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent"
                : "bg-transparent"
            }
          `}
        />
      </div>

      {/* Popular searches */}
      <div className="mt-3 flex items-center gap-2 overflow-x-auto px-1 pb-1 scrollbar-none">
        <span className="shrink-0 text-[8px] font-bold uppercase tracking-wider text-slate-600">
          Popular
        </span>

        {[
          "Business Website",
          "E-commerce",
          "Landing Page",
        ].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setQuery(item);
              setError("");
            }}
            className="
              shrink-0
              rounded-full
              border
              border-white/[0.06]
              bg-white/[0.025]
              px-3
              py-1.5
              text-[8px]
              font-semibold
              text-slate-400
              transition
              hover:border-[#DFAE45]/20
              hover:bg-[#DFAE45]/[0.06]
              hover:text-[#E7B94F]
              active:scale-95
            "
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

