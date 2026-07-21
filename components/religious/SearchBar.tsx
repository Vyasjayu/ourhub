"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="px-4 mt-5">

      <div className="relative">

        {/* Search Box */}
        <div className="flex items-center rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-4 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">

          {/* Search Icon */}
          <Search
            size={22}
            className="text-slate-400"
          />

          {/* Input */}
          <input
            type="text"
            placeholder="Search services..."
            className="ml-3 flex-1 bg-transparent text-[15px] text-white placeholder:text-slate-400 outline-none"
          />

          {/* Divider */}
          <div className="mx-4 h-7 w-px bg-slate-700" />

          {/* Filter Button */}
          <button className="rounded-xl p-2 transition duration-300 hover:bg-slate-800 hover:text-yellow-400">

            <SlidersHorizontal
              size={22}
              className="text-slate-300"
            />

          </button>

        </div>

      </div>

    </section>
  );
}