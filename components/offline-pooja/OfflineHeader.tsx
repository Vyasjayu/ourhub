"use client";

import { ArrowLeft, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OfflineHeader() {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-4 pt-4 pb-3">
      <button
        onClick={() => router.back()}
        className="flex h-10 w-10 items-center justify-center"
      >
        <ArrowLeft
          size={28}
          strokeWidth={2}
          className="text-yellow-400"
        />
      </button>

      <div className="text-center">
        <p className="text-[11px] font-semibold tracking-[4px] text-gray-300">
          OURHUB
        </p>

        <h1 className="mt-1 text-[18px] font-semibold text-yellow-400">
          Offline Pooja Booking
        </h1>
      </div>

      <button className="relative flex h-10 w-10 items-center justify-center">
        <Bell
          size={27}
          strokeWidth={1.8}
          className="text-yellow-400"
        />

        <span className="absolute right-[5px] top-[5px] h-2.5 w-2.5 rounded-full bg-red-500" />
      </button>
    </header>
  );
}