"use client";

import Link from "next/link";
import { Star, Phone, ArrowRight } from "lucide-react";

const astrologers = [
  {
    id: 1,
    name: "Birth Chart",
    image: "🪐",
    experience: "12+ Years",
    rating: "4.9",
    price: "₹299",
    href: "/religious/jyotish/birth-chart",
  },
  {
    id: 2,
    name: "Marriage",
    image: "💍",
    experience: "10+ Years",
    rating: "4.8",
    price: "₹399",
    href: "/religious/jyotish/marriage",
  },
  {
    id: 3,
    name: "Career",
    image: "💼",
    experience: "15+ Years",
    rating: "4.9",
    price: "₹499",
    href: "/religious/jyotish/career",
  },
  {
    id: 4,
    name: "Business",
    image: "📈",
    experience: "18+ Years",
    rating: "5.0",
    price: "₹599",
    href: "/religious/jyotish/business",
  },
  {
    id: 5,
    name: "Health",
    image: "❤️",
    experience: "14+ Years",
    rating: "4.8",
    price: "₹349",
    href: "/religious/jyotish/health",
  },
];

export default function JyotishSection() {
  return (
    <section className="mt-8">

      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-xl font-bold text-white">
          🔯 Popular Jyotish
        </h2>

        <button className="text-[#D4AF37] text-sm">
          View All
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">

        {astrologers.map((item) => (

          <Link
            key={item.id}
            href={item.href}
            className="min-w-[230px] rounded-3xl bg-[#0d1b2a] border border-white/10 overflow-hidden active:scale-95 transition"
          >

            <div className="h-32 bg-gradient-to-br from-[#D4AF37] to-[#8a6600] flex items-center justify-center text-6xl">
              {item.image}
            </div>

            <div className="p-4">

              <h3 className="font-bold text-lg text-white">
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
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

                <Phone size={18} />

                Book Consultation

              </button>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}