"use client";

import Link from "next/link";
import { Star, Home, ArrowRight } from "lucide-react";

const vastuServices = [
  {
    id: 1,
    title: "Home Vastu",
    image: "🏠",
    experience: "15+ Years",
    rating: "4.9",
    price: "₹999",
    href: "/religious/vastu/home",
  },
  {
    id: 2,
    title: "Office Vastu",
    image: "🏢",
    experience: "18+ Years",
    rating: "4.8",
    price: "₹1499",
    href: "/religious/vastu/office",
  },
  {
    id: 3,
    title: "Shop Vastu",
    image: "🏪",
    experience: "12+ Years",
    rating: "4.9",
    price: "₹1299",
    href: "/religious/vastu/shop",
  },
  {
    id: 4,
    title: "Factory Vastu",
    image: "🏭",
    experience: "20+ Years",
    rating: "5.0",
    price: "₹2499",
    href: "/religious/vastu/factory",
  },
];

export default function VastuSection() {
  return (
    <section className="mt-8">

      {/* Heading */}
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-xl font-bold text-white">
          🏠 Vastu Services
        </h2>

        <button className="text-[#D4AF37] text-sm font-medium">
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">

        {vastuServices.map((item) => (

          <Link
            key={item.id}
            href={item.href}
            className="min-w-[235px] rounded-3xl bg-[#0d1b2a] border border-white/10 overflow-hidden hover:border-[#D4AF37] active:scale-95 transition"
          >

            {/* Image */}
            <div className="h-36 bg-gradient-to-br from-[#D4AF37] to-[#8B6508] flex items-center justify-center text-6xl">
              {item.image}
            </div>

            {/* Content */}
            <div className="p-4">

              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                {item.experience}
              </p>

              <div className="flex items-center gap-2 mt-3">

                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="text-sm text-white">
                  {item.rating}
                </span>

              </div>

              <div className="flex items-center justify-between mt-5">

                <span className="text-xl font-bold text-[#D4AF37]">
                  {item.price}
                </span>

                <ArrowRight
                  size={20}
                  className="text-[#D4AF37]"
                />

              </div>

              <button className="mt-4 w-full h-11 rounded-xl bg-[#D4AF37] text-[#071321] font-semibold flex items-center justify-center gap-2">

                <Home size={18} />

                Book Visit

              </button>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}