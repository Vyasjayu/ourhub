"use client";

import { webProjects } from "@/data/webPortfolio";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioSection() {
  return (
    <section className="mt-12 w-full">

      {/* ================= HEADING ================= */}

      <div className="px-4">
        <div className="flex items-center gap-2">
          <span className="h-5 w-1 rounded-full bg-yellow-400" />

          <h2 className="text-2xl font-bold text-white">
            Recent Projects
          </h2>
        </div>

        <p className="mt-1 pl-3 text-sm text-gray-400">
          Some of our latest premium websites
        </p>
      </div>

      {/* ================= HORIZONTAL PROJECTS ================= */}

      <div
        className="
          mt-6
          w-full
          overflow-x-auto
          overflow-y-hidden
          scrollbar-hide
          snap-x
          snap-mandatory
          touch-pan-x
          overscroll-x-contain
        "
      >
        <div
          className="
            flex
            w-max
            gap-4
            px-4
            pb-3
          "
        >
          {webProjects.map((item) => (
            <div
              key={item.id}
              className="
                w-[285px]
                min-w-[285px]
                shrink-0
                snap-start
              "
            >
              <PortfolioCard
                slug={item.slug}
                title={item.title}
                image={item.image}
                category={item.category}
                technology={item.technology}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= SWIPE HINT ================= */}

      {webProjects.length > 1 && (
        <div className="mt-1 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-white/10" />

          <span className="text-[9px] uppercase tracking-[1.5px] text-gray-600">
            Swipe to explore
          </span>

          <span className="h-px w-8 bg-white/10" />
        </div>
      )}

    </section>
  );
}