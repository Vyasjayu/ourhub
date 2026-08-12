"use client";

import Link from "next/link";
import {
  Bell,
  Menu,
  Search,
  WalletCards,
} from "lucide-react";

export default function AstrologyHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1E2A3D] bg-[#050B14]">

      {/* ================= HEADER ================= */}

      <div className="flex h-[64px] items-center justify-between px-3">

        {/* LEFT */}

        <div className="flex items-center gap-2">

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white active:bg-[#101C30]"
          >
            <Menu size={25} />
          </button>

          <Link
            href="/religious/astrology"
            className="text-[21px] font-extrabold"
          >
            <span className="text-white">
              Our
            </span>

            <span className="text-[#FFD400]">
              Hub
            </span>

            <span className="ml-1 text-white">
              Astrology
            </span>
          </Link>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-1">

          {/* WALLET */}

          <Link
            href="/wallet"
            className="flex h-9 items-center gap-1 rounded-lg border border-[#FFD400]/50 bg-[#101C30] px-2 text-[#FFD400]"
          >
            <WalletCards size={19} />

            <span className="text-[12px] font-bold">
              ₹0
            </span>
          </Link>

          {/* NOTIFICATION */}

          <Link
            href="/notifications"
            className="relative flex h-10 w-10 items-center justify-center text-white"
          >
            <Bell size={22} />

            <span className="absolute right-[6px] top-[6px] h-2 w-2 rounded-full bg-red-500" />
          </Link>

          {/* SEARCH */}

          <Link
            href="/religious/astrology/search"
            className="flex h-10 w-10 items-center justify-center text-white"
          >
            <Search size={23} />
          </Link>

        </div>

      </div>

      {/* ================= ASTROLOGY NAV ================= */}

      <div className="flex h-[48px] items-center gap-1 overflow-x-auto border-t border-[#1E2A3D] px-2 scrollbar-hide">

        <NavItem
          label="होम"
          href="/religious/astrology"
          active
        />

        <NavItem
          label="2026"
          href="/religious/astrology/2026"
        />

        <NavItem
          label="एस्टो शॉप"
          href="/religious/astrology/shop"
        />

        <NavItem
          label="परामर्श"
          href="/religious/astrology/consultations"
        />

        <NavItem
          label="रिपोर्ट"
          href="/religious/astrology/reports"
        />

      </div>

    </header>
  );
}

/* =========================================================
   NAV ITEM
========================================================= */

function NavItem({
  label,
  href,
  active = false,
}: {
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative flex h-full shrink-0 items-center px-4 text-[12px] font-semibold ${
        active
          ? "text-[#FFD400]"
          : "text-gray-400"
      }`}
    >

      {label}

      {active && (
        <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#FFD400]" />
      )}

    </Link>
  );
}