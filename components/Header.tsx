"use client";

import Link from "next/link";
import {
  Menu,
  UserPlus,
  Sparkles,
  Crown,
} from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#07111f]/90 backdrop-blur-xl">
      {/* Premium top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[90px] w-[70%] -translate-x-1/2 bg-[#f6bd28]/[0.06] blur-[45px]" />

      <div className="relative mx-auto max-w-md px-4 pt-4 pb-4">
        {/* Gold top line */}
        <div className="absolute left-1/2 top-0 h-px w-[55%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f6bd28]/60 to-transparent" />

        <div className="flex items-center justify-between">
          {/* ================= MENU BUTTON ================= */}

          <button
            onClick={onMenuClick}
            aria-label="Open menu"
            className="
              group
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border
              border-[#d8aa39]/25
              bg-[#0b1929]
              shadow-[0_8px_25px_rgba(0,0,0,0.28)]
              transition-all
              duration-300
              hover:border-[#f6bd28]/60
              hover:bg-[#101f31]
              active:scale-95
            "
          >
            {/* Inner glow */}
            <span className="absolute inset-0 bg-gradient-to-br from-[#f6bd28]/[0.08] to-transparent opacity-0 transition group-hover:opacity-100" />

            <Menu
              className="relative h-[21px] w-[21px] text-[#f6bd28]"
              strokeWidth={2.2}
            />
          </button>

          {/* ================= CENTER LOGO ================= */}

          <div className="absolute left-1/2 top-[13px] -translate-x-1/2 text-center">
            <div className="flex items-center justify-center gap-1">
              <span className="text-[24px] font-black tracking-[-1px] text-white">
                Our
              </span>

              <span className="text-[24px] font-black tracking-[-1px] text-[#f6bd28]">
                Hub
              </span>

              <Sparkles
                size={13}
                className="mb-4 text-[#f6bd28]"
                strokeWidth={2.5}
              />
            </div>

            {/* Premium subtitle */}

            <div className="-mt-1 flex items-center justify-center gap-1">
              <span className="h-px w-3 bg-[#f6bd28]/50" />

              <Crown
                size={10}
                className="text-[#f6bd28]"
                fill="currentColor"
              />

              <span className="text-[8px] font-semibold tracking-[1.3px] text-slate-400">
                PREMIUM SERVICES
              </span>

              <span className="h-px w-3 bg-[#f6bd28]/50" />
            </div>
          </div>

          {/* ================= PARTNER BUTTON ================= */}

          <Link
            href="/provider"
            className="
              group
              relative
              flex
              h-10
              items-center
              gap-1.5
              overflow-hidden
              rounded-xl
              border
              border-[#f6bd28]/55
              bg-gradient-to-br
              from-[#f6bd28]
              to-[#d89b08]
              px-3
              text-xs
              font-black
              text-[#151008]
              shadow-[0_8px_24px_rgba(246,189,40,0.18)]
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:shadow-[0_12px_30px_rgba(246,189,40,0.28)]
              active:scale-95
            "
          >
            {/* Shine effect */}

            <span className="absolute -left-10 top-0 h-full w-8 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[110%]" />

            <UserPlus
              size={15}
              strokeWidth={2.5}
              className="relative"
            />

            <span className="relative">
              Partner
            </span>
          </Link>
        </div>

        {/* ================= PREMIUM STATUS ================= */}

        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d8aa39]/30 to-[#d8aa39]/10" />

          <div className="flex items-center gap-1.5 rounded-full border border-[#d8aa39]/20 bg-[#f6bd28]/[0.04] px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f6bd28] opacity-60" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#f6bd28]" />
            </span>

            <span className="text-[8px] font-bold tracking-[1.5px] text-[#e9b934]">
              PREMIUM HOME SERVICES
            </span>
          </div>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d8aa39]/30 to-[#d8aa39]/10" />
        </div>
      </div>
    </header>
  );
}