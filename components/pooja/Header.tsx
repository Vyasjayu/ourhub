"use client";

import Link from "next/link";
import {
  Menu,
  Bell,
  Search,
  Heart,
} from "lucide-react";

export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-yellow-500/10
        bg-[#071424]/90
        backdrop-blur-2xl
      "
    >
      <div className="px-4 pt-5 pb-4">

        {/* Top Row */}

        <div className="flex items-center justify-between">

          {/* Menu */}

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-yellow-500/20
              bg-white/5
              transition
              hover:border-yellow-400
              hover:bg-yellow-500/10
            "
          >
            <Menu
              size={22}
              className="text-yellow-400"
            />
          </button>

          {/* Title */}

          <div className="text-center">

            <p className="text-[11px] tracking-[3px] uppercase text-yellow-500">
              OurHub
            </p>

            <h1
              className="
                mt-1
                bg-gradient-to-r
                from-yellow-300
                via-yellow-400
                to-yellow-500
                bg-clip-text
                text-2xl
                font-extrabold
                text-transparent
              "
            >
              All Pooja Services
            </h1>

          </div>

          {/* Notification */}

          <button
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-yellow-500/20
              bg-white/5
              transition
              hover:border-yellow-400
              hover:bg-yellow-500/10
            "
          >
            <Bell
              size={21}
              className="text-yellow-300"
            />

            <span
              className="
                absolute
                right-2
                top-2
                h-2.5
                w-2.5
                rounded-full
                bg-red-500
                ring-2
                ring-[#071424]
              "
            />
          </button>

        </div>

        {/* Action Buttons */}

        {/* <div className="mt-5 flex gap-3">

          <Link
            href="/search"
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-yellow-500/15
              bg-[#0F1C2F]
              py-3
              transition
              hover:border-yellow-400
            "
          >
            <Search
              size={18}
              className="text-yellow-400"
            />

            <span className="text-sm font-medium text-slate-300">
              Search
            </span>
          </Link>

          <Link
            href="/wishlist"
            className="
              flex
              h-[50px]
              w-[50px]
              items-center
              justify-center
              rounded-2xl
              border
              border-yellow-500/15
              bg-[#0F1C2F]
              transition
              hover:border-yellow-400
            "
          >
            <Heart
              size={20}
              className="text-yellow-400"
            />
          </Link>

        </div> */}

      </div>

      {/* Bottom Glow */}

      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

    </header>
  );
}