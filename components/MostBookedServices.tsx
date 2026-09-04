"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  ArrowRight,
  X,
  Search,
  Crown,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  search?: string;
}

const services = [
  {
    id: 1,
    title: "Pooja Booking",
    image: "/banners/premium-pooja.png",
    rating: "4.9",
    link: "/pooja",
    tag: "Spiritual",
  },
  {
    id: 2,
    title: "Astrology",
    image: "/images/categories/astrology.jpg",
    rating: "4.8",
    link: "/religious/astrology",
    tag: "Guidance",
  },
  {
    id: 3,
    title: "AC Repair",
    image: "/images/offers/ac.jpg",
    rating: "4.8",
    link: "/services/ac-repair",
    tag: "Home Care",
  },
  {
    id: 4,
    title: "Electrician",
    image: "/images/offers/electrician.jpg",
    rating: "4.8",
    link: "/services/electrician",
    tag: "Expert",
  },
  {
    id: 5,
    title: "Carpenter",
    image: "/home-services/carpentry.jpg",
    rating: "4.7",
    link: "/services/carpenter",
    tag: "Popular",
  },
  {
    id: 6,
    title: "Wedding Planner",
    image: "/images/offers/wedding.png",
    rating: "5.0",
    link: "/eventManagement",
    tag: "Premium",
  },
  {
    id: 7,
    title: "Vastu",
    image: "/images/vastu/vastu-hero.jpg",
    rating: "4.9",
    link: "/religious/vastu",
    tag: "Spiritual",
  },
  {
    id: 8,
    title: "Home Cleaning",
    image: "/images/offers/cleaning.png",
    rating: "4.8",
    link: "/home-service",
    tag: "Trusted",
  },
  {
    id: 9,
    title: "Plumber",
    image: "/images/offers/plumber.png",
    rating: "4.7",
    link: "/home-service",
    tag: "Home Care",
  },
  {
    id: 10,
    title: "Painter",
    image: "/images/offers/painter.png",
    rating: "4.8",
    link: "/home-service",
    tag: "Expert",
  },
  {
    id: 11,
    title: "Car Service",
    image: "/images/offers/car-service.png",
    rating: "4.8",
    link: "/automobile",
    tag: "Auto",
  },
  {
    id: 12,
    title: "Bike Service",
    image: "/images/offers/bike-service.png",
    rating: "4.7",
    link: "/automobile",
    tag: "Auto",
  },
  {
    id: 13,
    title: "AC Installation",
    image: "/images/offers/ac.png",
    rating: "4.8",
    link: "/home-service",
    tag: "Home Care",
  },
  {
    id: 14,
    title: "Home Appliance",
    image: "/images/categories/home.png",
    rating: "4.7",
    link: "/home-service",
    tag: "Repair",
  },
  {
    id: 15,
    title: "Event Management",
    image: "/images/categories/events.png",
    rating: "4.9",
    link: "/eventManagement",
    tag: "Events",
  },
  {
    id: 16,
    title: "Web Development",
    image: "/images/categories/software.png",
    rating: "4.9",
    link: "/web-development",
    tag: "Digital",
  },
];

export default function MostBookedServices({
  search = "",
}: Props) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetSearch, setSheetSearch] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  const sheetServices = services.filter((service) =>
    service.title.toLowerCase().includes(sheetSearch.toLowerCase())
  );

  const openSheet = () => {
    setSheetSearch("");
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
    setSheetSearch("");
  };

  useEffect(() => {
    if (!isSheetOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSheet();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSheetOpen]);

  return (
    <>
      <section className="relative mt-9">
        {/* Premium background glow */}

        <div className="pointer-events-none absolute -left-16 top-16 h-44 w-44 rounded-full bg-[#F4C542]/[0.035] blur-[70px]" />

        {/* ================= HEADER ================= */}

        <div className="relative mb-5 flex items-end justify-between gap-3">
          <div>
            {/* Eyebrow */}

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="h-px w-4 bg-[#F4C542]/60" />

                <Sparkles
                  size={11}
                  className="text-[#F4C542]"
                />

                <span className="h-px w-2 bg-[#F4C542]/30" />
              </div>

              <span className="text-[9px] font-bold tracking-[2px] text-[#F4C542]">
                CUSTOMER FAVORITES
              </span>
            </div>

            {/* Title */}

            <h2 className="mt-2 text-[23px] font-bold tracking-tight text-white">
              Most{" "}
              <span className="text-[#F4C542]">
                Booked
              </span>
            </h2>

            <p className="mt-1 text-[11px] text-slate-500">
              Services trusted and loved by our customers
            </p>
          </div>

          {/* View all */}

          <button
            type="button"
            onClick={openSheet}
            className="
              group
              mb-1
              flex
              shrink-0
              items-center
              gap-1
              rounded-xl
              border
              border-[#F4C542]/20
              bg-[#F4C542]/[0.05]
              px-3
              py-2
              text-[10px]
              font-bold
              text-[#F4C542]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[#F4C542]/50
              hover:bg-[#F4C542]/10
              active:scale-95
            "
          >
            View All

            <ChevronRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* ================= SERVICES GRID ================= */}

        {filteredServices.length > 0 ? (
          <>
            <div className="grid grid-cols-3 gap-3">
              {filteredServices.slice(0, 6).map((service, index) => (
                <Link
                  key={service.id}
                  href={service.link}
                  className="
                    group
                    relative
                    min-w-0
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-white/[0.07]
                    bg-[#091624]
                    shadow-[0_10px_30px_rgba(0,0,0,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#F4C542]/40
                    hover:shadow-[0_18px_35px_rgba(0,0,0,0.35)]
                    active:scale-[0.98]
                  "
                >
                  {/* Gold corner glow */}

                  <div className="pointer-events-none absolute -right-7 -top-7 z-20 h-16 w-16 rounded-full bg-[#F4C542]/[0.08] blur-2xl transition duration-300 group-hover:bg-[#F4C542]/[0.15]" />

                  {/* ================= IMAGE ================= */}

                  <div className="relative aspect-[1.08/1] w-full overflow-hidden bg-[#06111E]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 430px) 31vw, 130px"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Image overlays */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/15 to-transparent" />

                    <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/40 to-transparent" />

                    {/* Number */}

                    <div className="absolute left-2 top-2 flex h-5 min-w-5 items-center justify-center rounded-full border border-white/10 bg-black/40 px-1 text-[7px] font-bold text-white backdrop-blur-md">
                      0{index + 1}
                    </div>

                    {/* Rating */}

                    <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-2 py-1 backdrop-blur-md">
                      <Star
                        size={9}
                        fill="currentColor"
                        className="text-[#F4C542]"
                      />

                      <span className="text-[8px] font-bold text-white">
                        {service.rating}
                      </span>
                    </div>
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div className="relative p-2.5">
                    {/* Tag */}

                    <div className="mb-1.5 flex items-center gap-1">
                      <Crown
                        size={8}
                        fill="currentColor"
                        className="text-[#F4C542]/80"
                      />

                      <span className="truncate text-[7px] font-bold uppercase tracking-[0.7px] text-[#F4C542]/70">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}

                    <h3 className="line-clamp-2 min-h-[30px] text-[10px] font-bold leading-[1.35] text-white">
                      {service.title}
                    </h3>

                    {/* CTA */}

                    <div
                      className="
                        mt-2.5
                        flex
                        items-center
                        justify-center
                        gap-1
                        rounded-xl
                        border
                        border-[#F4C542]/20
                        bg-[#F4C542]/[0.07]
                        py-2
                        text-[9px]
                        font-extrabold
                        text-[#F4C542]
                        transition-all
                        duration-300
                        group-hover:border-[#F4C542]/50
                        group-hover:bg-[#F4C542]
                        group-hover:text-[#071424]
                      "
                    >
                      Book Now

                      <ArrowUpRight
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>

                  {/* Bottom gold line */}

                  <div className="h-px bg-gradient-to-r from-transparent via-[#F4C542]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              ))}
            </div>

            {/* ================= TRUST STRIP ================= */}

            <div className="mt-4 flex items-center justify-center gap-2">
              <CheckCircle2
                size={12}
                className="text-[#F4C542]"
              />

              <span className="text-[9px] font-medium tracking-wide text-slate-500">
                VERIFIED PROFESSIONALS • TRUSTED SERVICE
              </span>
            </div>

            {/* ================= MORE BUTTON ================= */}

            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={openSheet}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#F4C542]/25
                  bg-[#0B1928]
                  px-5
                  py-3
                  text-[11px]
                  font-bold
                  text-[#F4C542]
                  shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                  transition-all
                  duration-300
                  hover:-translate-y-[1px]
                  hover:border-[#F4C542]/60
                  hover:bg-[#F4C542]/[0.07]
                  active:scale-95
                "
              >
                <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C542]/40 to-transparent" />

                <span>Explore More Services</span>

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </>
        ) : (
          <div className="rounded-[24px] border border-white/[0.08] bg-[#091624] px-6 py-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F4C542]/15 bg-[#F4C542]/[0.05]">
              <Search
                size={20}
                className="text-[#F4C542]"
              />
            </div>

            <h3 className="mt-4 text-sm font-bold text-white">
              No Services Found
            </h3>

            <p className="mt-1 text-[11px] text-slate-500">
              Try searching with another keyword.
            </p>
          </div>
        )}
      </section>

      {/* ================================================= */}
      {/*                 PREMIUM BOTTOM SHEET              */}
      {/* ================================================= */}

      {isSheetOpen && (
        <div className="fixed inset-0 z-[200]">
          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Close services"
            onClick={closeSheet}
            className="absolute inset-0 h-full w-full bg-[#02070D]/80 backdrop-blur-[5px]"
          />

          {/* SHEET */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              mx-auto
              flex
              max-h-[90vh]
              w-full
              max-w-[430px]
              flex-col
              overflow-hidden
              rounded-t-[32px]
              border-x
              border-t
              border-[#F4C542]/20
              bg-[#071321]
              shadow-[0_-25px_80px_rgba(0,0,0,0.65)]
            "
          >
            {/* Premium top glow */}

            <div className="pointer-events-none absolute left-1/2 top-0 h-[120px] w-[260px] -translate-x-1/2 rounded-full bg-[#F4C542]/[0.06] blur-[60px]" />

            {/* ================= HANDLE ================= */}

            <div className="relative flex justify-center pt-3">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-white/10 via-[#F4C542]/50 to-white/10" />
            </div>

            {/* ================= HEADER ================= */}

            <div className="relative flex items-start justify-between px-5 pb-4 pt-5">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={11}
                    className="text-[#F4C542]"
                  />

                  <span className="text-[9px] font-bold tracking-[2px] text-[#F4C542]">
                    OURHUB MARKETPLACE
                  </span>
                </div>

                <h2 className="mt-2 text-[24px] font-bold tracking-tight text-white">
                  Explore{" "}
                  <span className="text-[#F4C542]">
                    Services
                  </span>
                </h2>

                <p className="mt-1 text-[10px] text-slate-500">
                  Find the perfect service for your needs
                </p>
              </div>

              {/* Close */}

              <button
                type="button"
                onClick={closeSheet}
                aria-label="Close"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-slate-400
                  transition-all
                  hover:border-[#F4C542]/30
                  hover:bg-[#F4C542]/[0.08]
                  hover:text-[#F4C542]
                  active:scale-90
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* ================= SEARCH ================= */}

            <div className="relative px-5 pb-4">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C542]/15 to-transparent" />

              <div
                className="
                  group
                  flex
                  h-[50px]
                  items-center
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#0A1827]
                  px-3
                  transition-all
                  focus-within:border-[#F4C542]/40
                  focus-within:shadow-[0_8px_30px_rgba(244,197,66,0.06)]
                "
              >
                <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F4C542]/[0.07]">
                  <Search
                    size={16}
                    className="text-[#F4C542]"
                  />
                </div>

                <input
                  type="text"
                  value={sheetSearch}
                  onChange={(e) =>
                    setSheetSearch(e.target.value)
                  }
                  placeholder="Search for a service..."
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-xs
                    font-medium
                    text-white
                    outline-none
                    placeholder:text-slate-600
                  "
                />

                {sheetSearch && (
                  <button
                    type="button"
                    onClick={() => setSheetSearch("")}
                    aria-label="Clear search"
                    className="
                      ml-2
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-slate-500
                      transition
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* ================= RESULTS INFO ================= */}

            <div className="flex items-center justify-between px-5 pb-3">
              <span className="text-[9px] font-bold tracking-[1px] text-slate-500">
                AVAILABLE SERVICES
              </span>

              <span className="rounded-full border border-[#F4C542]/15 bg-[#F4C542]/[0.05] px-2 py-1 text-[8px] font-bold text-[#F4C542]">
                {sheetServices.length} SERVICES
              </span>
            </div>

            {/* ================= SERVICE LIST ================= */}

            <div className="relative flex-1 overflow-y-auto px-5 pb-8">
              {sheetServices.length > 0 ? (
                <div className="grid grid-cols-3 gap-3">
                  {sheetServices.map((service, index) => (
                    <Link
                      key={service.id}
                      href={service.link}
                      onClick={closeSheet}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[18px]
                        border
                        border-white/[0.07]
                        bg-[#0A1827]
                        shadow-[0_8px_22px_rgba(0,0,0,0.18)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#F4C542]/35
                        active:scale-[0.98]
                      "
                    >
                      {/* IMAGE */}

                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 430px) 31vw, 130px"
                          className="
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-black/10 to-transparent" />

                        {/* Index */}

                        <div className="absolute left-1.5 top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-black/45 px-1 text-[7px] font-bold text-white backdrop-blur">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Rating */}

                        <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-1.5 py-1 backdrop-blur-md">
                          <Star
                            size={8}
                            fill="currentColor"
                            className="text-[#F4C542]"
                          />

                          <span className="text-[7px] font-bold text-white">
                            {service.rating}
                          </span>
                        </div>
                      </div>

                      {/* CONTENT */}

                      <div className="p-2.5">
                        <p className="line-clamp-2 min-h-[28px] text-[9px] font-bold leading-[1.45] text-white">
                          {service.title}
                        </p>

                        <div
                          className="
                            mt-2
                            flex
                            items-center
                            justify-center
                            gap-1
                            rounded-lg
                            border
                            border-[#F4C542]/15
                            bg-[#F4C542]/[0.06]
                            py-1.5
                            text-[8px]
                            font-extrabold
                            text-[#F4C542]
                            transition-all
                            group-hover:bg-[#F4C542]
                            group-hover:text-[#071424]
                          "
                        >
                          Book

                          <ArrowRight
                            size={9}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>

                      {/* Bottom line */}

                      <div className="h-px bg-gradient-to-r from-transparent via-[#F4C542]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="rounded-[22px] border border-white/[0.07] bg-[#0A1827] px-6 py-10 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F4C542]/15 bg-[#F4C542]/[0.05]">
                    <Search
                      size={20}
                      className="text-[#F4C542]"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-white">
                    No Services Found
                  </h3>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Try searching with another keyword.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSheetSearch("")}
                    className="mt-4 text-[10px] font-bold text-[#F4C542]"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>

            {/* Bottom fade */}

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#071321] to-transparent" />
          </div>
        </div>
      )}
    </>
  );
}