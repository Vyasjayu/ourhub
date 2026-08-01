"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { services } from "@/data/services";

export default function SearchBar() {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const value = query.trim().toLowerCase();

    if (!value) return;

    const service = services.find((item) => {
      return (
        item.title.toLowerCase().includes(value) ||
        item.subtitle.toLowerCase().includes(value) ||
        item.slug.toLowerCase().includes(value)
      );
    });

    if (service) {
      router.push(`/web-development/service/${service.slug}`);
    } else {
      alert("No service found.");
    }
  };

  return (
    <div className="px-4 mt-5">

      <div
        className="
        flex
        items-center
        rounded-full
        border
        border-yellow-500/20
        bg-[#111C30]
        px-4
        py-3
        "
      >
        <Search
          size={18}
          className="text-yellow-400"
        />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search website services..."
          className="
          ml-3
          flex-1
          bg-transparent
          text-white
          outline-none
          placeholder:text-gray-400
          "
        />

        <button
          onClick={handleSearch}
          className="
          rounded-full
          bg-yellow-400
          px-5
          py-2
          font-semibold
          text-black
          transition
          hover:scale-105
          "
        >
          Search
        </button>
      </div>

    </div>
  );
}