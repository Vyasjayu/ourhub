"use client";

import { Sparkles } from "lucide-react";
import { allPoojas } from "@/data/allPooja";
import PoojaCard from "./PoojaCard";

interface PoojaGridProps {
  search: string;
}

export default function PoojaGrid({
  search,
}: PoojaGridProps) {

  const filteredPoojas = allPoojas.filter((pooja) =>
    pooja.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      className="
      mt-6
      rounded-2xl
      border
      border-[#2E3A4A]
      bg-[#0C1623]
      p-4
      "
    >
      {/* Heading */}

      <div className="flex items-center justify-center gap-2 mb-5">

        <Sparkles
          className="text-yellow-400"
          size={16}
        />

        <h2 className="text-xl font-semibold text-white">
          All Pooja Services
        </h2>

      </div>

      {/* Grid */}

      {filteredPoojas.length > 0 ? (
        <div className="grid grid-cols-4 gap-3">

          {filteredPoojas.map((item) => (
            <PoojaCard
              key={item.id}
              {...item}
            />
          ))}

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">

          <span className="text-5xl mb-3">🙏</span>

          <h3 className="text-white font-semibold">
            No Pooja Found
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Try searching another pooja.
          </p>

        </div>
      )}
    </section>
  );
}