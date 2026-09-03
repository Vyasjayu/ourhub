"use client";

import Link from "next/link";
import {
  Home,
  CalendarDays,
  Wallet,
  UserRound,
  Grid2X2,
} from "lucide-react";

interface BottomNavProps {
  onCategoriesClick: () => void;
}

export default function BottomNav({
  onCategoriesClick,
}: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2 border-t border-[#252b34] bg-[#080c12]/98 px-3 pb-3 pt-2 backdrop-blur-md">
      <div className="flex h-[58px] items-end justify-between">
        {/* Home */}
        <Link
          href="/"
          className="flex w-[58px] flex-col items-center justify-center gap-1"
        >
          <Home size={19} className="text-[#e9bd3d]" />
          <span className="text-[9px] font-semibold text-[#e9bd3d]">
            Home
          </span>
        </Link>

        {/* Bookings */}
        <Link
          href="/bookings"
          className="flex w-[58px] flex-col items-center justify-center gap-1"
        >
          <CalendarDays size={19} className="text-gray-400" />
          <span className="text-[9px] font-medium text-gray-400">
            Bookings
          </span>
        </Link>

        {/* Categories center */}
        <button
          onClick={onCategoriesClick}
          className="relative -mt-[32px] flex w-[68px] flex-col items-center"
        >
          <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border-[3px] border-[#171c23] bg-[#f4c442] shadow-[0_0_20px_rgba(244,196,66,0.25)]">
            <Grid2X2 size={25} className="text-black" />
          </div>

          <span className="mt-1 text-[9px] font-bold text-white">
            Services
          </span>
        </button>

        {/* Wallet */}
        <Link
          href="/wallet"
          className="flex w-[58px] flex-col items-center justify-center gap-1"
        >
          <Wallet size={19} className="text-gray-400" />
          <span className="text-[9px] font-medium text-gray-400">
            Wallet
          </span>
        </Link>

        {/* Profile */}
        <Link
          href="/profile"
          className="flex w-[58px] flex-col items-center justify-center gap-1"
        >
          <UserRound size={19} className="text-gray-400" />
          <span className="text-[9px] font-medium text-gray-400">
            Profile
          </span>
        </Link>
      </div>
    </nav>
  );
}