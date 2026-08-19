"use client";

import { ArrowLeft, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 bg-[#071424]">

      <div className="flex items-center justify-between">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/20 bg-[#111827] text-yellow-400 transition hover:bg-yellow-400 hover:text-black active:scale-95"
        >
          <ArrowLeft size={22} />
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center">

          <span className="text-[10px] font-medium uppercase tracking-[4px] text-yellow-500">
            OURHUB
          </span>

          <h1 className="mt-0.5 text-base font-bold leading-none text-white">
            Vastu Consultant
          </h1>

          <span className="mt-1 h-[2px] w-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />

        </div>

        {/* Notification */}
        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/20 bg-[#111827] text-yellow-400 transition hover:bg-yellow-400 hover:text-black active:scale-95">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-[#111827]" />

        </button>

      </div>

    </header>
  );
}