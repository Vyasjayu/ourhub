"use client";

import Link from "next/link";
import { Menu, UserPlus } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#071424]/95 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-md items-center justify-between px-4 pt-5 pb-3">

        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="rounded-xl p-1 transition hover:bg-white/10"
          >
            <Menu className="h-7 w-7 text-white" />
          </button>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-[26px] font-extrabold tracking-tight text-[#F4C542]">
            OurHub
          </h1>

          <p className="-mt-1 text-[11px] text-gray-300">
            ─ All Services, One Hub ─
          </p>
        </div>

        {/* Right */}
        <Link
          href="/provider"
          className="flex items-center gap-1 rounded-full border border-yellow-500 bg-yellow-500 px-3 py-2 text-xs font-bold text-black shadow-lg transition hover:bg-yellow-400"
        >
          <UserPlus size={15} />
          <span>Partner</span>
        </Link>

      </div>
    </header>
  );
}