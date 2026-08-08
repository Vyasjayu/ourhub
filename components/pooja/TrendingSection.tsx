"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star, Flame } from "lucide-react";

const items = [
  {
    title: "Ganesh Pooja",
    image: "/images/pooja/ganesh.jpg",
    price: "₹499",
    rating: "4.9",
    booked: "2.1k",
    badge: "Trending",
  },
  {
    title: "Lakshmi Pooja",
    image: "/images/pooja/lakshmi.jpg",
    price: "₹799",
    rating: "4.9",
    booked: "2.8k",
    badge: "Popular",
  },
  {
    title: "Rudrabhishek",
    image: "/images/pooja/rudrabhishek.jpg",
    price: "₹999",
    rating: "4.8",
    booked: "1.6k",
    badge: "Best",
  },
  {
    title: "Satyanarayan",
    image: "/images/pooja/satyanarayan.jpg",
    price: "₹699",
    rating: "4.9",
    booked: "3.2k",
    badge: "Top",
  },
];

export default function TrendingSection() {
  return (
    <section className="mt-8">

      {/* Heading */}

      <div className="mb-5 flex items-center justify-between px-4">

        <div>

          <h2 className="flex items-center gap-2 text-2xl font-bold text-white">

            <Flame className="text-orange-500" size={24} />

            Trending Poojas

          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Most booked poojas this week
          </p>

        </div>

        <Link
          href="/pooja/trending"
          className="flex items-center gap-1 text-sm font-semibold text-yellow-400"
        >
          View All

          <ChevronRight size={18} />
        </Link>

      </div>

      {/* Horizontal Scroll */}

      <div className="flex gap-4 overflow-x-auto px-4 pb-3 scrollbar-hide">

        {items.map((item) => (

          <Link
            key={item.title}
            href="/pooja/details"
            className="min-w-[185px] overflow-hidden rounded-[26px] border border-yellow-500/20 bg-[#111827] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-yellow-400"
          >

            {/* Image */}

            <div className="relative h-44 w-full">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              <div className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                🔥 {item.badge}
              </div>

            </div>

            {/* Content */}

            <div className="p-4">

              <div className="flex items-center gap-1 text-yellow-400">

                <Star size={14} fill="currentColor" />

                <span className="text-sm font-semibold">
                  {item.rating}
                </span>

                <span className="text-xs text-gray-400">
                  ({item.booked})
                </span>

              </div>

              <h3 className="mt-2 text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-xl font-bold text-yellow-400">
                {item.price}
              </p>

              <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-3 text-sm font-bold text-black transition hover:scale-[1.02]">
                Book Now
              </button>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}