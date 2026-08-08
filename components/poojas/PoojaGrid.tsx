"use client";

import { Sparkles, Plus } from "lucide-react";
import { allPoojas } from "@/data/allPooja";
import PoojaCard from "./PoojaCard";

interface PoojaGridProps {
  search: string;
  onMoreClick: () => void;
}

export default function PoojaGrid({
  search,
  onMoreClick,
}: PoojaGridProps) {
  const filteredPoojas = allPoojas.filter((pooja) =>
    pooja.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sirf 11 Pooja dikhani hain
  const visiblePoojas = filteredPoojas.slice(0, 11);

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-yellow-500/20
        bg-gradient-to-b
        from-[#0F1B2E]
        via-[#0B1625]
        to-[#08111C]
        p-5
        shadow-[0_0_35px_rgba(250,204,21,.08)]
      "
    >
      {/* Glow */}
      <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-yellow-500/10 blur-[90px]" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-orange-500/10 blur-[80px]" />

      {/* Heading */}
      <div className="relative mb-6 flex items-center justify-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-500/40" />

        <Sparkles
          size={18}
          className="text-yellow-400"
        />

        <h2 className="text-xl font-bold text-yellow-300">
          All Pooja Services
        </h2>

        <Sparkles
          size={18}
          className="text-yellow-400"
        />

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-500/40" />
      </div>

      {filteredPoojas.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">

          {visiblePoojas.map((item) => (
            <div
              key={item.id}
              className="
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
              "
            >
              <PoojaCard {...item} />
            </div>
          ))}

          {/* More Card */}

          {filteredPoojas.length > 11 && (
            <button
              onClick={onMoreClick}
              className="
                group
                flex
                min-h-[118px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-yellow-500/30
                bg-[#101B2C]
                transition-all
                duration-300
                hover:border-yellow-400
                hover:bg-yellow-500/10
                hover:shadow-[0_0_25px_rgba(250,204,21,.18)]
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-yellow-500/40
                  bg-yellow-500/10
                  transition
                  group-hover:scale-110
                "
              >
                <Plus
                  size={28}
                  className="text-yellow-400"
                />
              </div>

              <span className="mt-3 text-sm font-semibold text-yellow-300">
                More
              </span>
            </button>
          )}

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-14">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10 text-5xl">
            🙏
          </div>

          <h3 className="text-lg font-bold text-white">
            No Pooja Found
          </h3>

          <p className="mt-2 text-center text-sm text-slate-400">
            Try searching another pooja service.
          </p>
        </div>
      )}
    </section>
  );
}