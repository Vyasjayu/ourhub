"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";

interface Props {
  search?: string;
}

const services = [
  {
    id: 1,
    title: "Pandit Booking",
    image: "/images/categories/religious.png",
    rating: "4.9",
    link: "/religious",
  },
  {
    id: 2,
    title: "Astrology",
    image: "/images/categories/astrology.png",
    rating: "4.8",
    link: "/astrology",
  },
  {
    id: 3,
    title: "AC Repair",
    image: "/images/offers/ac.png",
    rating: "4.8",
    link: "/home-services",
  },
  {
    id: 4,
    title: "Electrician",
    image: "/images/offers/electrician.png",
    rating: "4.8",
    link: "/home-services",
  },
  {
    id: 5,
    title: "Car Wash",
    image: "/images/offers/carwash.png",
    rating: "4.7",
    link: "/automobile",
  },
  {
    id: 6,
    title: "Wedding Planner",
    image: "/images/offers/wedding.png",
    rating: "5.0",
    link: "/events",
  },
];

export default function MostBookedServices({
  search = "",
}: Props) {
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mt-8">

      {/* Heading */}

      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-white">
            Most Booked Services
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Trusted by thousands of customers
          </p>
        </div>

        <Link
          href="/services"
          className="flex items-center gap-1 text-sm font-semibold text-yellow-400 hover:text-yellow-300"
        >
          View All
          <ChevronRight size={18} />
        </Link>

      </div>

      {/* Services */}

      {filteredServices.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="
                min-w-[165px]
                rounded-3xl
                border
                border-yellow-500/20
                bg-[#111827]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-yellow-400
                hover:shadow-[0_0_25px_rgba(244,197,66,.18)]
              "
            >
              {/* Image */}

              <div className="relative h-36 overflow-hidden rounded-t-3xl">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="165px"
                  className="object-cover transition duration-500 hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-4">

                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs font-semibold text-yellow-300">
                    Popular
                  </span>

                  <div className="flex items-center gap-1">

                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-xs text-white">
                      {service.rating}
                    </span>

                  </div>

                </div>

                <h3 className="mt-3 line-clamp-2 text-base font-bold text-white">
                  {service.title}
                </h3>

                <div className="mt-4 flex items-center justify-between">

                  {/* <div>

                    <p className="text-xs text-slate-400">
                      Starting From
                    </p>

                    <p className="text-lg font-bold text-yellow-400">
                      {service.price}
                    </p>

                  </div> */}

                  <button className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-[#071424] transition hover:scale-105">
                    Book
                  </button>

                </div>

              </div>

            </Link>
          ))}

        </div>
      ) : (
        <div className="rounded-3xl border border-slate-700 bg-[#111827] p-8 text-center">
          <p className="text-slate-400">
            No services found.
          </p>
        </div>
      )}

    </section>
  );
}