"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Pandit Booking",
    description: "Book verified Pandits for all religious ceremonies.",
    icon: "🛕",
    href: "/religious/pandit-booking",
  },
  {
    title: "Jyotish",
    description: "Marriage, Career, Business & Kundli Consultation.",
    icon: "🔯",
    href: "/religious/jyotish",
  },
  {
    title: "Vastu",
    description: "Home, Office, Shop & Factory Vastu Consultation.",
    icon: "🏠",
    href: "/religious/vastu",
  },
];

export default function TopCategories() {
  return (
    <section className="px-4 mt-6">

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">
          Top Categories
        </h2>

        <button className="text-sm text-[#D4AF37] font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">

        {categories.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="
              block
              rounded-3xl
              bg-[#0d1b2a]
              border
              border-white/10
              p-5
              transition-all
              duration-300
              hover:border-[#D4AF37]
              active:scale-[0.98]
            "
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>

                <div>

                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1 max-w-[220px]">
                    {item.description}
                  </p>

                </div>

              </div>

              <ChevronRight className="text-[#D4AF37]" />

            </div>
          </Link>
        ))}

      </div>

    </section>
  );
}