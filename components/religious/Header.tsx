"use client";

import { Bell, ChevronDown, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-20 px-4 pt-5">

      <div className="flex items-center justify-between">

        {/* Location */}

        <button
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-white/10
            bg-[#101B2C]
            px-4
            py-3
            backdrop-blur-xl
          "
        >
          <MapPin
            size={18}
            className="text-yellow-400"
          />

          <span className="text-sm font-semibold text-white">
            Indore, MP
          </span>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />

        </button>

        {/* Logo */}

        <div className="text-center">

          <h1 className="text-[30px] font-extrabold leading-none text-yellow-400">
            OurHub
          </h1>

          <p className="mt-1 text-xs text-slate-400">
            Religious Services
          </p>

        </div>

        {/* Notification */}

        <button
          className="
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-[#101B2C]
            transition
            hover:border-yellow-400
          "
        >
          <Bell
            size={21}
            className="text-white"
          />

          <span
            className="
              absolute
              right-3
              top-3
              h-2.5
              w-2.5
              rounded-full
              bg-yellow-400
            "
          />

        </button>

      </div>

    </header>
  );
}