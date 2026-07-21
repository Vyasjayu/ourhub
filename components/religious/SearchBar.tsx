"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="px-4 pt-5">

      <div className="relative">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search Pandit, Puja, Jyotish..."
          className="
            w-full
            h-14
            rounded-2xl
            bg-[#0d1b2a]
            border border-white/10
            pl-12
            pr-4
            text-white
            placeholder:text-gray-400
            outline-none
            focus:border-yellow-500
            transition
          "
        />

      </div>

    </section>
  );
}