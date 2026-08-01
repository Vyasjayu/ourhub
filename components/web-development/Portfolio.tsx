"use client";

import { webProjects } from "@/data/webPortfolio";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioSection() {
  return (
    <section className="px-4 mt-12">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Projects
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Some of our latest premium websites
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-5">

        {webProjects.map((item) => (

          <PortfolioCard
            key={item.id}
            slug={item.slug}
            title={item.title}
            image={item.image}
            category={item.category}
            technology={item.technology}
            price={item.price}
          />

        ))}

      </div>

    </section>
  );
}