"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative">

      <div
        className="
          flex
          items-center
          rounded-2xl
          border
          border-yellow-500/20
          bg-[#131C2E]
          px-4
          py-3
          shadow-lg
        "
      >
        {/* Search Icon */}
        <Search
          size={22}
          className="mr-3 text-gray-400"
        />

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for services (e.g. Pandit, AC Repair, Car Wash...)"
          className="
            flex-1
            bg-transparent
            text-[15px]
            text-white
            placeholder:text-gray-400
            outline-none
          "
        />

        {/* Search Button */}
        <button
          type="button"
          className="
            ml-3
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#F4C542]
            text-[#071424]
            transition
            duration-300
            hover:scale-105
            active:scale-95
            shadow-[0_0_20px_rgba(244,197,66,0.35)]
          "
        >
          <Search
            size={22}
            strokeWidth={2.5}
          />
        </button>

      </div>

    </div>
  );
}