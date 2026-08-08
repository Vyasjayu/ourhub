"use client";

import Link from "next/link";
import { Flame, ChevronRight } from "lucide-react";

import TrendingCard from "./TrendingCard";
import { allPoojas } from "@/data/allPooja";

export default function TrendingPooja() {
  return (
    <section className="mt-7">

      <div
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
          shadow-[0_0_30px_rgba(250,204,21,.08)]
        "
      >
        {/* Glow */}

        <div className="absolute -right-20 -top-16 h-48 w-48 rounded-full bg-yellow-400/10 blur-3xl" />

        {/* Heading */}

        <div className="relative flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-orange-500/15
              "
            >
              <Flame
                size={22}
                className="fill-orange-500 text-orange-500"
              />
            </div>

            <div>

              <h2 className="text-xl font-bold text-white">
                Trending Poojas
              </h2>

              <p className="text-xs text-slate-400">
                Most Booked This Week
              </p>

            </div>

          </div>

          <Link
            href="/pooja"
            className="
              flex
              items-center
              gap-1
              text-sm
              font-semibold
              text-yellow-400
              hover:text-yellow-300
            "
          >
            View All

            <ChevronRight size={18} />

          </Link>

        </div>

        {/* Cards */}

        <div
          className="
            mt-6
            flex
            gap-4
            overflow-x-auto
            pb-2
            scrollbar-hide
          "
        >
          {allPoojas.slice(0, 8).map((item) => (
            <TrendingCard
              key={item.id}
              id={item.id}
              title={item.name}
              image={item.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}