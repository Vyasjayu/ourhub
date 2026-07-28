"use client";

import Link from "next/link";
import {
  Star,
  Clock,
  ArrowRight,
  BadgePercent,
} from "lucide-react";

const pujas = [
  {
    id: 1,
    title: "Griha Pravesh",
    rating: "4.9",
    duration: "6 Hours",
    image: "🪔",
    href: "/religious/griha-pravesh",
  },
  {
    id: 2,
    title: "Satyanarayan Katha",
    rating: "4.8",
    duration: "2 Hours",
    image: "📿",
    href: "/religious/satyanarayan-katha",
  },
  {
    id: 3,
    title: "Rudrabhishek",
    rating: "5.0",
    duration: "2.5 Hours",
    image: "🔱",
    href: "/religious/rudrabhishek",
  },
  {
    id: 4,
    title: "Mahamrityunjaya Jaap",
    rating: "4.9",
    duration: "4 Hours",
    image: "🕉️",
    href: "/religious/mahamrityunjaya",
  },
];

export default function PopularPujas() {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between px-4">
        <div>
          <h2 className="text-2xl font-bold text-white">
            🔥 Popular Pujas
          </h2>

          <p className="text-sm text-slate-400">
            Book verified Pandits for sacred rituals.
          </p>
        </div>

        <Link
          href="/pooja"
          className="text-sm font-semibold text-[#D4AF37]"
        >
          View All
        </Link>
      </div>

      <div className="flex gap-5 overflow-x-auto px-4 pb-3 scrollbar-hide">
        {pujas.map((puja) => (
          <Link
            key={puja.id}
            href={puja.href}
            className="group min-w-[280px] overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#112033] to-[#08111d] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60"
          >
            {/* Hero */}
            <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#D4AF37] via-[#B88918] to-[#6f4d00]">
              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                ⭐ Bestseller
              </div>

              <div className="text-8xl drop-shadow-xl transition duration-300 group-hover:scale-110">
                {puja.image}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">
                {puja.title}
              </h3>

              <div className="mt-4 flex gap-3">
                <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  {puja.rating}
                </div>

                <div className="flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                  <Clock size={14} />
                  {puja.duration}
                </div>
              </div>

              {/* <div className="mt-5 flex items-end gap-2">
                <span className="text-3xl font-bold text-[#D4AF37]">
                  {puja.price}
                </span>

                <span className="pb-1 text-sm text-slate-500 line-through">
                  {puja.oldPrice}
                </span>
              </div> */}

              <div className="mt-2 flex items-center gap-2 text-xs text-green-400">
                <BadgePercent size={14} />
                Save up to 25%
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F6D365] py-3 font-bold text-[#071321] transition hover:scale-[1.02]">
                Book Now
                <ArrowRight size={18} />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}