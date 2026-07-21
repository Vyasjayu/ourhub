"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Landmark,
  Home,
  Plane,
  Tractor,
} from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Religious Services",
    subtitle: "Book Verified Pandit Ji & Puja Services",
    button: "Book Now",
    icon: Landmark,
    bg: "from-[#f59e0b] via-[#fbbf24] to-[#f97316]",
  },
  {
    id: 2,
    title: "Home Services",
    subtitle: "Electrician • Plumber • Carpenter",
    button: "Explore",
    icon: Home,
    bg: "from-[#2563eb] via-[#3b82f6] to-[#06b6d4]",
  },
  {
    id: 3,
    title: "Travel Booking",
    subtitle: "Bus • Flight • Hotel • Cab",
    button: "Book Trip",
    icon: Plane,
    bg: "from-[#06b6d4] via-[#3b82f6] to-[#6366f1]",
  },
  {
    id: 4,
    title: "Agriculture Equipment",
    subtitle: "Buy & Rent Farm Equipment",
    button: "Explore",
    icon: Tractor,
    bg: "from-[#16a34a] via-[#22c55e] to-[#84cc16]",
  },
];

export default function BannerSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % banners.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const banner = banners[active];
  const Icon = banner.icon;

  return (
    <section className="px-5 py-8">
      <div className="max-w-md mx-auto">

        <div
          className={`relative overflow-hidden rounded-[30px] bg-gradient-to-r ${banner.bg} p-6 shadow-2xl`}
        >
          {/* Glow */}
          <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-black/20 blur-3xl" />

          <div className="relative flex items-center justify-between">

            <div className="max-w-[70%]">

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <Icon className="text-white" size={30} />
              </div>

              <h2 className="text-2xl font-extrabold text-white leading-tight">
                {banner.title}
              </h2>

              <p className="mt-2 text-sm text-white/90">
                {banner.subtitle}
              </p>

              <button className="mt-6 flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:scale-105">
                {banner.button}
                <ArrowRight size={18} />
              </button>

            </div>

            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
              <Icon className="text-white" size={46} />
            </div>

          </div>
        </div>

        {/* Dots */}

        <div className="mt-5 flex justify-center gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all ${
                active === index
                  ? "w-8 bg-yellow-400"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}