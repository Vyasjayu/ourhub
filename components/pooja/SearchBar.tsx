"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative">

      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        placeholder="Search Pooja, Temple..."
        className="h-14 w-full rounded-2xl border border-yellow-500/20 bg-[#111827] pl-12 pr-4 text-white outline-none transition focus:border-yellow-400"
      />

    </div>
  );
}