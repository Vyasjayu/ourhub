"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-yellow-700/30
      bg-[#0E1723]
      px-4
      py-4
      "
    >
      <Search className="text-gray-400 w-5 h-5" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pooja..."
        className="
        flex-1
        bg-transparent
        outline-none
        text-white
        placeholder:text-gray-400
        "
      />
    </div>
  );
}