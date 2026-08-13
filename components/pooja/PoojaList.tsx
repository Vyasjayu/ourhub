"use client";

import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import PoojaCard from "./PoojaCard";

const poojas = [
  {
    slug: "ganesh-pooja",
    title: "Ganesh Pooja",
    description: "Remove obstacles and bring success & prosperity.",
    duration: "60-90 min",
    price: "1,101",
    image: "/pooja/ganesh-card.jpg",
  },
  {
    slug: "lakshmi-pooja",
    title: "Lakshmi Pooja",
    description: "Attract wealth, happiness and good fortune.",
    duration: "60-90 min",
    price: "1,251",
    image: "/pooja/lakshmi-card.jpg",
  },
  {
    slug: "navgrah-pooja",
    title: "Navgrah Shanti Pooja",
    description: "Balance planetary energies and reduce doshas.",
    duration: "90-120 min",
    price: "2,101",
    image: "/pooja/navgrah-card.jpg",
  },
  {
    slug: "maha-mrityunjaya-pooja",
    title: "Maha Mrityunjaya Pooja",
    description: "For good health, peace and protection.",
    duration: "60-90 min",
    price: "1,501",
    image: "/pooja/mahadev-card.jpg",
  },
];

export default function PoojaList() {
  return (
    <section className="mt-8 w-full overflow-hidden">
      {/* HEADER */}
      <div className="mb-5 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Sparkles
            size={18}
            className="text-yellow-400"
          />

          <h2 className="text-xl font-bold text-yellow-400 sm:text-2xl">
            Choose a Pooja
          </h2>

          <Sparkles
            size={18}
            className="text-yellow-400"
          />
        </div>

        <Link
          href="/pooja/all"
          className="flex shrink-0 items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-1.5 text-xs font-semibold text-yellow-400 transition hover:bg-yellow-400/10"
        >
          View All
          <ChevronRight size={15} />
        </Link>
      </div>

      {/* HORIZONTAL CARDS */}
      <div
        className="
          flex
          w-full
          gap-4
          overflow-x-auto
          overflow-y-hidden
          pb-4
          snap-x
          snap-mandatory
          scroll-smooth
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {poojas.map((item) => (
          <div
            key={item.slug}
            className="
              w-[290px]
              min-w-[290px]
              shrink-0
              snap-start
              sm:w-[330px]
              sm:min-w-[330px]
            "
          >
            <PoojaCard
              slug={item.slug}
              title={item.title}
              description={item.description}
              duration={item.duration}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>

      {/* SWIPE INDICATOR */}
      <div className="mt-1 flex items-center justify-center gap-2">
        <span className="h-1 w-5 rounded-full bg-yellow-400" />
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span className="h-1 w-1 rounded-full bg-white/20" />
      </div>
    </section>
  );
}