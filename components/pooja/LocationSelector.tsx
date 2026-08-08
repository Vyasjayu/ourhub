"use client";

import { ChevronDown, MapPin } from "lucide-react";

export default function LocationSelector() {
  return (
    <button className="flex h-14 w-full items-center justify-between rounded-2xl border border-yellow-500/20 bg-[#111827] px-4">

      <div className="flex items-center gap-3">

        <MapPin
          size={20}
          className="text-yellow-400"
        />

        <span className="font-medium text-white">
          Indore, MP
        </span>

      </div>

      <ChevronDown
        size={20}
        className="text-yellow-400"
      />

    </button>
  );
}