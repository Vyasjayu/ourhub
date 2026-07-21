"use client";

import { Bell, ChevronDown, MapPin, Menu } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-[#071321]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-4">

        {/* Left */}
        <div className="flex items-center gap-4">

          <button
            onClick={onMenuClick}
            className="rounded-xl p-2 transition hover:bg-slate-800"
          >
            <Menu size={26} className="text-white" />
          </button>

          <h1 className="text-3xl font-extrabold tracking-tight text-yellow-400">
            OurHub
          </h1>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Location */}
          <button className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2">

            <MapPin
              size={15}
              className="text-yellow-400"
            />

            <span className="text-sm font-medium text-white">
              Indore, MP
            </span>

            <ChevronDown
              size={16}
              className="text-slate-400"
            />

          </button>

          {/* Notification */}

          <button className="relative rounded-full p-2 transition hover:bg-slate-800">

            <Bell
              size={23}
              className="text-white"
            />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-400" />

          </button>

          {/* Profile */}

          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={42}
            height={42}
            className="rounded-full border-2 border-white object-cover"
          />

        </div>

      </div>
    </header>
  );
}