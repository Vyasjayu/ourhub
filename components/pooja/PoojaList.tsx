"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PoojaCard from "./PoojaCard";

const poojas = [
  {
    title: "Ganesh Pooja",
    description: "Remove obstacles and bring success & prosperity.",
    duration: "60-90 min",
    price: "1,101",
    image: "/pooja/ganesh-card.jpg",
  },
  {
    title: "Lakshmi Pooja",
    description: "Attract wealth, happiness and good fortune.",
    duration: "60-90 min",
    price: "1,251",
    image: "/pooja/lakshmi-card.jpg",
  },
  {
    title: "Navgrah Shanti Pooja",
    description: "Balance planetary energies and reduce doshas.",
    duration: "90-120 min",
    price: "2,101",
    image: "/pooja/navgrah-card.jpg",
  },
  {
    title: "Maha Mrityunjaya Pooja",
    description: "For good health, peace and protection.",
    duration: "60-90 min",
    price: "1,501",
    image: "/pooja/mahadev-card.jpg",
  },
];

export default function PoojaList() {
  return (
    <section className="mt-8">

      {/* Heading */}

      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <span className="text-xl text-yellow-400">✨</span>

          <h2 className="text-[26px] font-bold text-yellow-400">
            Choose a Pooja
          </h2>

          <span className="text-xl text-yellow-400">✨</span>

        </div>

        <Link
          href="/pooja/all"
          className="flex items-center gap-1 text-sm font-semibold text-yellow-400"
        >
          View All
          <ChevronRight size={18} />
        </Link>

      </div>

      {/* Cards */}

      <div className="space-y-4">

        {poojas.map((item) => (
          <PoojaCard
            key={item.title}
            title={item.title}
            description={item.description}
            duration={item.duration}
            price={item.price}
            image={item.image}
          />
        ))}

      </div>

    </section>
  );
}