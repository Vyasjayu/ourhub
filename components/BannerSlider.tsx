"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Landmark,
  Home as HomeIcon,
  Plane,
  Tractor,
  Sparkles,
  Crown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const banners = [
  {
    id: 1,
    eyebrow: "SPIRITUAL SERVICES",
    title: "Sacred Rituals,\nTrusted Pandits",
    subtitle: "Book verified Pandit Ji & authentic Puja services.",
    button: "Explore Pooja",
    icon: Landmark,
    accent: "#F4C542",
    glow: "rgba(244,197,66,0.18)",
    href: "/religious",
  },
  {
    id: 2,
    eyebrow: "HOME EXPERTS",
    title: "Premium Home\nServices",
    subtitle: "Electrician, plumber, carpenter and more.",
    button: "Explore Services",
    icon: HomeIcon,
    accent: "#60A5FA",
    glow: "rgba(96,165,250,0.18)",
    href: "/home-services",
  },
  {
    id: 3,
    eyebrow: "TRAVEL EXPERIENCE",
    title: "Travel Smarter,\nGo Further",
    subtitle: "Bus, flight, hotel and cab bookings in one place.",
    button: "Plan Your Trip",
    icon: Plane,
    accent: "#22D3EE",
    glow: "rgba(34,211,238,0.18)",
    href: "/travel",
  },
  {
    id: 4,
    eyebrow: "AGRI SERVICES",
    title: "Modern Farming,\nBetter Growth",
    subtitle: "Buy or rent trusted agriculture equipment.",
    button: "Explore Equipment",
    icon: Tractor,
    accent: "#86EFAC",
    glow: "rgba(134,239,172,0.18)",
    href: "/agriculture",
  },
];

export default function BannerSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % banners.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const banner = banners[active];
  const Icon = banner.icon;

  const previousSlide = () => {
    setActive(
      (prev) => (prev - 1 + banners.length) % banners.length
    );
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="py-1">
      <div className="mx-auto max-w-md">
        <div
          className="relative overflow-hidden rounded-[28px] border bg-[#091421] shadow-[0_22px_55px_rgba(0,0,0,0.45)] transition-all duration-500"
          style={{
            borderColor: `${banner.accent}40`,
          }}
        >
          {/* ================= PREMIUM GLOW ================= */}

          <div
            className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full blur-[80px]"
            style={{
              backgroundColor: banner.glow,
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-24 -left-20 h-[220px] w-[220px] rounded-full blur-[90px]"
            style={{
              backgroundColor: banner.glow,
            }}
          />

          {/* Top Shine */}

          <div
            className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2"
            style={{
              background: `linear-gradient(to right, transparent, ${banner.accent}, transparent)`,
              opacity: 0.65,
            }}
          />

          {/* Background Pattern */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.035]
              [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
              [background-size:28px_28px]
            "
          />

          {/* ================= MAIN CONTENT ================= */}

          <div className="relative min-h-[285px] p-6">
            {/* Top Badge */}

            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-xl"
                style={{
                  borderColor: `${banner.accent}35`,
                  backgroundColor: `${banner.accent}0D`,
                }}
              >
                <Crown
                  size={12}
                  fill="currentColor"
                  style={{
                    color: banner.accent,
                  }}
                />

                <span
                  className="text-[9px] font-bold tracking-[1.8px]"
                  style={{
                    color: banner.accent,
                  }}
                >
                  {banner.eyebrow}
                </span>
              </div>

              <Sparkles
                size={18}
                style={{
                  color: banner.accent,
                }}
              />
            </div>

            {/* Content */}

            <div className="relative z-10 mt-6 max-w-[72%]">
              {/* Icon */}

              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-xl"
                style={{
                  borderColor: `${banner.accent}40`,
                  backgroundColor: `${banner.accent}12`,
                }}
              >
                <Icon
                  size={23}
                  strokeWidth={2}
                  style={{
                    color: banner.accent,
                  }}
                />
              </div>

              {/* Title */}

              <h2 className="whitespace-pre-line text-[29px] font-black leading-[1.08] tracking-tight text-white">
                {banner.title}
              </h2>

              {/* Subtitle */}

              <p className="mt-3 text-[12px] leading-5 text-slate-400">
                {banner.subtitle}
              </p>

              {/* Button */}

              <button
                type="button"
                className="group mt-6 flex items-center gap-2 rounded-xl px-4 py-3 text-[12px] font-black text-[#07111f] shadow-[0_10px_28px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[1px] active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${banner.accent}, #FFFFFF)`,
                }}
              >
                {banner.button}

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* ================= RIGHT PREMIUM ICON ================= */}

            <div className="absolute bottom-5 right-4">
              {/* Outer Ring */}

              <div
                className="absolute inset-[-18px] rounded-full border opacity-40"
                style={{
                  borderColor: banner.accent,
                }}
              />

              <div
                className="absolute inset-[-36px] rounded-full border opacity-20"
                style={{
                  borderColor: banner.accent,
                }}
              />

              {/* Main Circle */}

              <div
                className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full border backdrop-blur-xl"
                style={{
                  borderColor: `${banner.accent}50`,
                  backgroundColor: `${banner.accent}10`,
                  boxShadow: `0 0 45px ${banner.glow}`,
                }}
              >
                <Icon
                  size={46}
                  strokeWidth={1.7}
                  style={{
                    color: banner.accent,
                  }}
                />

                <Sparkles
                  size={14}
                  className="absolute right-3 top-4"
                  style={{
                    color: banner.accent,
                  }}
                />
              </div>
            </div>

            {/* ================= NAVIGATION ================= */}

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous banner"
              className="absolute bottom-5 left-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-black/20 text-slate-400 backdrop-blur transition hover:text-white active:scale-90"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next banner"
              className="absolute bottom-5 left-[76px] flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-black/20 text-slate-400 backdrop-blur transition hover:text-white active:scale-90"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* ================= PREMIUM DOTS ================= */}

        <div className="mt-5 flex items-center justify-center gap-2">
          {banners.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="group relative flex h-4 items-center"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: active === index ? "26px" : "6px",
                  height: "6px",
                  backgroundColor:
                    active === index
                      ? banner.accent
                      : "rgba(255,255,255,0.18)",
                  boxShadow:
                    active === index
                      ? `0 0 14px ${banner.glow}`
                      : "none",
                }}
              />
            </button>
          ))}
        </div>

        {/* ================= SLIDE COUNT ================= */}

        <div className="mt-2 text-center">
          <span
            className="text-[9px] font-bold tracking-[2px]"
            style={{
              color: `${banner.accent}B3`,
            }}
          >
            0{active + 1} / 0{banners.length}
          </span>
        </div>
      </div>
    </section>
  );
}