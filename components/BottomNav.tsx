"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Grid2X2,
  CalendarDays,
  Wallet,
  User,
} from "lucide-react";

interface BottomNavProps {
  onCategoriesClick: () => void;
}

export default function BottomNav({
  onCategoriesClick,
}: BottomNavProps) {
  const pathname = usePathname();

  const iconClass = (active: boolean) =>
    active
      ? "text-yellow-400"
      : "text-slate-400";

  const textClass = (active: boolean) =>
    active
      ? "mt-1 text-[11px] font-semibold text-yellow-400"
      : "mt-1 text-[11px] text-slate-400";

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-md -translate-x-1/2">

      <div className="flex items-center justify-between rounded-[26px] border border-yellow-500/20 bg-[#101B2C]/95 px-4 py-3 shadow-2xl backdrop-blur-xl">

        {/* Home */}

        <Link
          href="/"
          className="flex flex-1 flex-col items-center"
        >
          <House
            size={22}
            className={iconClass(pathname === "/")}
          />

          <span className={textClass(pathname === "/")}>
            Home
          </span>
        </Link>

        {/* Categories */}

        <button
          onClick={onCategoriesClick}
          className="flex flex-1 flex-col items-center"
        >
          <Grid2X2
            size={22}
            className="text-slate-400"
          />

          <span className="mt-1 text-[11px] text-slate-400">
            Categories
          </span>
        </button>

        {/* Bookings */}

        <Link
          href="/bookings"
          className="flex flex-1 flex-col items-center"
        >
          <CalendarDays
            size={22}
            className={iconClass(pathname === "/bookings")}
          />

          <span className={textClass(pathname === "/bookings")}>
            Bookings
          </span>
        </Link>

        {/* Wallet */}

        <Link
          href="/wallet"
          className="flex flex-1 flex-col items-center"
        >
          <Wallet
            size={22}
            className={iconClass(pathname === "/wallet")}
          />

          <span className={textClass(pathname === "/wallet")}>
            Wallet
          </span>
        </Link>

        {/* Profile */}

        <Link
          href="/profile"
          className="flex flex-1 flex-col items-center"
        >
          <User
            size={22}
            className={iconClass(pathname === "/profile")}
          />

          <span className={textClass(pathname === "/profile")}>
            Profile
          </span>
        </Link>

      </div>

    </nav>
  );
}