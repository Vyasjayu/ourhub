"use client";

import { Star, Clock } from "lucide-react";
import Link from "next/link";

const pujas = [
  {
    id: 1,
    title: "Griha Pravesh",
    price: "₹999",
    rating: "4.9",
    duration: "2 Hours",
    image: "🪔",
    href: "/religious/griha-pravesh",
  },
  {
    id: 2,
    title: "Satyanarayan Katha",
    price: "₹1499",
    rating: "4.8",
    duration: "3 Hours",
    image: "📿",
    href: "/religious/satyanarayan-katha",
  },
  {
    id: 3,
    title: "Rudrabhishek",
    price: "₹2100",
    rating: "5.0",
    duration: "2.5 Hours",
    image: "🔱",
    href: "/religious/rudrabhishek",
  },
  {
    id: 4,
    title: "Mahamrityunjaya Jaap",
    price: "₹2500",
    rating: "4.9",
    duration: "4 Hours",
    image: "🕉️",
    href: "/religious/mahamrityunjaya",
  },
];

export default function PopularPujas() {
  return (
    <section className="mt-8">

      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-xl font-bold text-white">
          🔥 Popular Pujas
        </h2>

        <button className="text-sm text-[#D4AF37]">
          View All
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">

        {pujas.map((puja) => (

          <Link
            key={puja.id}
            href={puja.href}
            className="min-w-[240px] rounded-3xl bg-[#0d1b2a] border border-white/10 overflow-hidden active:scale-95 transition"
          >

            {/* Image */}
            <div className="h-36 bg-gradient-to-br from-[#D4AF37] to-[#7b5b00] flex items-center justify-center text-6xl">
              {puja.image}
            </div>

            {/* Content */}
            <div className="p-4">

              <h3 className="font-bold text-lg text-white">
                {puja.title}
              </h3>

              <div className="flex items-center gap-4 mt-3 text-sm text-gray-300">

                <div className="flex items-center gap-1">
                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  {puja.rating}
                </div>

                <div className="flex items-center gap-1">
                  <Clock size={15} />
                  {puja.duration}
                </div>

              </div>

              <div className="flex items-center justify-between mt-5">

                <span className="text-xl font-bold text-[#D4AF37]">
                  {puja.price}
                </span>

                <button className="px-4 py-2 rounded-xl bg-[#D4AF37] text-[#071321] font-semibold">
                  Book Now
                </button>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}