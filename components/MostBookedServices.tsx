"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  ArrowRight,
  X,
  Search,
} from "lucide-react";
import { useState } from "react";

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
  },
  {
    id: 2,
    title: "Astrology",
    image: "/images/categories/astrology.jpg",
    rating: "4.8",
    link: "/religious/astrology",
  },
  {
    id: 3,
    title: "AC Repair",
    image: "/images/offers/ac.jpg",
    rating: "4.8",
    link: "/home-service",
  },
  {
    id: 4,
    title: "Electrician",
    image: "/images/offers/electrician.jpg",
    rating: "4.8",
    link: "/home-service",
  },
  {
    id: 5,
    title: "Car Wash",
    image: "/images/offers/carwash.jpg",
    rating: "4.7",
    link: "/automobile",
  },
  {
    id: 6,
    title: "Wedding Planner",
    image: "/images/offers/wedding.png",
    rating: "5.0",
    link: "/eventManagement",
  },

  // More Services
  {
    id: 7,
    title: "Vastu",
    image: "/images/vastu/vastu-hero.jpg",
    rating: "4.9",
    link: "/religious/vastu",
  },
  {
    id: 8,
    title: "Home Cleaning",
    image: "/images/offers/cleaning.png",
    rating: "4.8",
    link: "/home-service",
  },
  {
    id: 9,
    title: "Plumber",
    image: "/images/offers/plumber.png",
    rating: "4.7",
    link: "/home-service",
  },
  {
    id: 10,
    title: "Painter",
    image: "/images/offers/painter.png",
    rating: "4.8",
    link: "/home-service",
  },
  {
    id: 11,
    title: "Car Service",
    image: "/images/offers/car-service.png",
    rating: "4.8",
    link: "/automobile",
  },
  {
    id: 12,
    title: "Bike Service",
    image: "/images/offers/bike-service.png",
    rating: "4.7",
    link: "/automobile",
  },
  {
    id: 13,
    title: "AC Installation",
    image: "/images/offers/ac.png",
    rating: "4.8",
    link: "/home-service",
  },
  {
    id: 14,
    title: "Home Appliance",
    image: "/images/categories/home.png",
    rating: "4.7",
    link: "/home-service",
  },
  {
    id: 15,
    title: "Event Management",
    image: "/images/categories/events.png",
    rating: "4.9",
    link: "/eventManagement",
  },
 {
  id: 16,
  title: "Web Development",
  image: "/images/categories/software.png",
  rating: "4.9",
  link: "/web-development",
},
];

export default function MostBookedServices({
  search = "",
}: Props) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetSearch, setSheetSearch] = useState("");

  const filteredServices = services.filter((service) =>
    service.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const sheetServices = services.filter((service) =>
    service.title
      .toLowerCase()
      .includes(sheetSearch.toLowerCase())
  );

  const openSheet = () => {
    setSheetSearch("");
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
    setSheetSearch("");
  };

  return (
    <>
      <section className="mt-8">

        {/* ================= HEADING ================= */}

        <div className="mb-5 flex items-end justify-between gap-3">

          <div>
            <div className="flex items-center gap-2">

              <span className="h-5 w-1 rounded-full bg-yellow-400" />

              <h2 className="text-xl font-bold text-white">
                Most Booked
              </h2>

            </div>

            <p className="mt-1 pl-3 text-xs text-slate-400">
              Trusted services loved by our customers
            </p>
          </div>

          {/* VIEW ALL */}

          <button
            type="button"
            onClick={openSheet}
            className="group flex shrink-0 items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-2 text-xs font-semibold text-yellow-400 transition hover:border-yellow-400/50 hover:bg-yellow-400/10"
          >
            View All

            <ChevronRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

        </div>

        {/* ================= SERVICES ================= */}

        {filteredServices.length > 0 ? (
          <>

            <div className="grid grid-cols-3 gap-3">

              {filteredServices
                .slice(0, 6)
                .map((service) => (

                  <Link
                    key={service.id}
                    href={service.link}
                    className="
                      group
                      min-w-0
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/[0.08]
                      bg-[#111b2a]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-yellow-400/40
                      hover:shadow-[0_8px_30px_rgba(244,197,66,0.12)]
                    "
                  >

                    {/* IMAGE */}

                    <div className="relative aspect-square w-full overflow-hidden bg-[#0b1524]">

                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="33vw"
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      {/* RATING */}

                      <div className="absolute bottom-1.5 left-1.5 flex items-center gap-0.5 rounded-full bg-black/70 px-1.5 py-0.5 backdrop-blur-sm">

                        <Star
                          size={9}
                          className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="text-[8px] font-bold text-white">
                          {service.rating}
                        </span>

                      </div>

                    </div>

                    {/* CONTENT */}

                    <div className="p-2.5">

                      <h3 className="line-clamp-2 min-h-[30px] text-[10px] font-bold leading-[1.35] text-white sm:text-xs">
                        {service.title}
                      </h3>

                      <div className="mt-2.5 flex items-center justify-center rounded-full bg-yellow-400 py-1.5 text-[9px] font-extrabold text-[#071424] transition group-hover:bg-yellow-300 sm:text-[10px]">
                        Book
                      </div>

                    </div>

                  </Link>

                ))}

            </div>

            {/* ================= MORE SERVICES ================= */}

            <div className="mt-5 flex justify-center">

              <button
                type="button"
                onClick={openSheet}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-yellow-400/30
                  bg-yellow-400/5
                  px-6
                  py-2.5
                  text-xs
                  font-bold
                  text-yellow-400
                  transition-all
                  duration-300
                  hover:border-yellow-400
                  hover:bg-yellow-400/10
                "
              >
                More Services

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </div>

          </>

        ) : (

          <div className="rounded-3xl border border-white/10 bg-[#111827] p-8 text-center">

            <p className="text-sm text-slate-400">
              No services found.
            </p>

          </div>

        )}

      </section>


      {/* ================================================= */}
      {/*                 BOTTOM SHEET                      */}
      {/* ================================================= */}

      {isSheetOpen && (
        <div className="fixed inset-0 z-[200]">

          {/* ================= BACKDROP ================= */}

          <button
            type="button"
            aria-label="Close services"
            onClick={closeSheet}
            className="absolute inset-0 h-full w-full bg-black/70 backdrop-blur-[2px]"
          />

          {/* ================= SHEET ================= */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              mx-auto
              flex
              max-h-[88vh]
              w-full
              max-w-[430px]
              flex-col
              overflow-hidden
              rounded-t-[28px]
              border-t
              border-yellow-400/20
              bg-[#071321]
              shadow-[0_-15px_60px_rgba(0,0,0,0.45)]
            "
          >

            {/* ================= HANDLE ================= */}

            <div className="flex justify-center pt-3">
              <div className="h-1 w-10 rounded-full bg-white/20" />
            </div>

            {/* ================= HEADER ================= */}

            <div className="flex items-center justify-between px-5 pb-3 pt-4">

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[2px] text-yellow-400">
                  OurHub Services
                </p>

                <h2 className="mt-1 font-serif text-xl font-bold text-white">
                  All Services
                </h2>

                <p className="mt-1 text-[9px] text-slate-500">
                  Choose a service to continue
                </p>

              </div>

              <button
                type="button"
                onClick={closeSheet}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10"
              >
                <X size={18} />
              </button>

            </div>

            {/* ================= SEARCH ================= */}

            <div className="px-5 pb-4">

              <div className="flex h-11 items-center rounded-xl border border-white/10 bg-[#0b1826] px-3">

                <Search
                  size={16}
                  className="mr-2 shrink-0 text-yellow-400"
                />

                <input
                  type="text"
                  value={sheetSearch}
                  onChange={(e) =>
                    setSheetSearch(e.target.value)
                  }
                  placeholder="Search services..."
                  className="w-full bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
                />

                {sheetSearch && (
                  <button
                    type="button"
                    onClick={() => setSheetSearch("")}
                    className="ml-2 text-gray-500"
                  >
                    <X size={14} />
                  </button>
                )}

              </div>

            </div>

            {/* ================= SERVICE LIST ================= */}

            <div className="overflow-y-auto px-5 pb-8">

              {sheetServices.length > 0 ? (

                <div className="grid grid-cols-3 gap-3">

                  {sheetServices.map((service) => (

                    <Link
                      key={service.id}
                      href={service.link}
                      onClick={closeSheet}
                      className="
                        group
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/[0.08]
                        bg-[#0c1928]
                        transition
                        hover:border-yellow-400/40
                      "
                    >

                      {/* IMAGE */}

                      <div className="relative aspect-square overflow-hidden">

                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="33vw"
                          className="object-cover transition duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {/* RATING */}

                        <div className="absolute bottom-1.5 left-1.5 flex items-center gap-0.5 rounded-full bg-black/70 px-1.5 py-0.5">

                          <Star
                            size={8}
                            className="fill-yellow-400 text-yellow-400"
                          />

                          <span className="text-[7px] font-bold text-white">
                            {service.rating}
                          </span>

                        </div>

                      </div>

                      {/* TITLE */}

                      <div className="p-2">

                        <p className="line-clamp-2 min-h-[28px] text-[9px] font-bold leading-4 text-white">
                          {service.title}
                        </p>

                        <div className="mt-2 flex items-center justify-center rounded-full bg-yellow-400 py-1.5 text-[8px] font-extrabold text-[#071424]">
                          Book
                        </div>

                      </div>

                    </Link>

                  ))}

                </div>

              ) : (

                <div className="rounded-2xl border border-white/10 bg-[#0c1928] p-8 text-center">

                  <Search
                    size={24}
                    className="mx-auto text-gray-600"
                  />

                  <p className="mt-3 text-xs font-semibold text-gray-400">
                    No services found
                  </p>

                  <p className="mt-1 text-[9px] text-gray-600">
                    Try searching another service
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>
      )}

    </>
  );
}