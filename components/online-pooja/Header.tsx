"use client";

import Link from "next/link";
import { ArrowLeft, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-4">

      {/* Back */}

      <Link
        href="/pooja"
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-500/30 bg-[#101827] text-yellow-400 transition active:scale-95"
      >
        <ArrowLeft size={22} />
      </Link>

      {/* Title */}

      <div className="text-center">

        <p className="text-[10px] tracking-[5px] text-yellow-500">
          OURHUB
        </p>

        <h1 className="mt-1 text-xl font-bold text-yellow-400">
          Online Pooja Booking
        </h1>

      </div>

      {/* Notification */}

      <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-500/30 bg-[#101827] text-yellow-400">

        <Bell size={22} />

        <span className="absolute right-2 top-2 h-3 w-3 rounded-full bg-red-500 ring-2 ring-[#071424]" />

      </button>

    </header>
  );
}