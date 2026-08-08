"use client";

import { MapPin, Search, ChevronDown } from "lucide-react";

export default function SearchSection() {
  return (
    <section className="mt-5 space-y-3">

      {/* Location */}

      <button
        className="
        flex
        h-14
        w-full
        items-center
        justify-between
        rounded-2xl
        border
        border-yellow-500/20
        bg-[#101827]
        px-4
      "
      >
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
          size={18}
          className="text-yellow-400"
        />

      </button>

      {/* Search */}

      <div
        className="
        flex
        h-14
        items-center
        rounded-2xl
        border
        border-yellow-500/20
        bg-[#101827]
        px-4
      "
      >

        <Search
          size={20}
          className="text-gray-400"
        />

        <input
          placeholder="Search Pooja, Temple..."
          className="
            ml-3
            w-full
            bg-transparent
            text-white
            placeholder:text-gray-500
            outline-none
          "
        />

      </div>

    </section>
  );
}