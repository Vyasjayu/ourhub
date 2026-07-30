"use client";

import { Bell, ChevronDown, MapPin, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#071424]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 pt-5 pb-3">

        {/* Left */}
        <div className="flex items-center gap-3">

          <button
            onClick={onMenuClick}
            className="rounded-xl p-1 transition hover:bg-white/10"
          >
            <Menu className="h-7 w-7 text-white" />
          </button>

          {/* <button className="flex items-center gap-1 text-white"> */}

            {/* <MapPin
              size={17}
              className="text-white"
            /> */}

            {/* <span className="text-sm font-semibold">
              Indore
            </span> */}

            {/* <ChevronDown
              size={15}
              className="text-gray-400"
            /> */}

          {/* </button> */}

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

        <button className="relative rounded-xl p-2 hover:bg-white/10">

          <Bell
            size={24}
            className="text-white"
          />

          <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            3
          </span>

        </button>

      </div>
    </header>
  );
}