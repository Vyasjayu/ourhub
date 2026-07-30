"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const categories = [
  {
    title: "Religious",
    image: "/images/categories/religious.png",
    link: "/religious",
  },
  {
    title: "Home Services",
    image: "/images/categories/home.png",
    link: "/home-services",
  },
  {
    title: "Astrology",
    image: "/images/categories/astrology.png",
    link: "/astrology",
  },
  {
    title: "Pandit Booking",
    image: "/images/categories/pandit-booking.png",
    link: "/pooja",
  },
  {
    title: "Events",
    image: "/images/categories/events.png",
    link: "/events",
  },
  {
    title: "Digital Marketing",
    image: "/images/categories/digital-marketing.png",
    link: "/digital-marketing",
  },
  {
    title: "Automobile",
    image: "/images/categories/automobile.png",
    link: "/automobile",
  },
  {
    title: "Software",
    image: "/images/categories/software.png",
    link: "/software",
  },
  {
    title: "Construction",
    image: "/images/categories/construction.png",
    link: "/construction",
  },
  {
    title: "Vastu",
    image: "/images/categories/vastu.png",
    link: "/vastu",
  },
//   {
//     title: "Travel",
//     image: "/images/categories/travel.png",
//     link: "/travel",
//   },
//   {
//     title: "Less",
//     image: "/images/categories/less.png",
//     link: "#",
//   },
];

export default function CategoriesSheet({
  open,
  onClose,
}: Props) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return categories.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Bottom Sheet */}

      <div
        className={`
          fixed
          bottom-0
          left-1/2
          z-50
          w-full
          max-w-[430px]
          -translate-x-1/2
          rounded-t-[34px]
          border
          border-yellow-500/20
          bg-[#071424]
          shadow-[0_-20px_60px_rgba(0,0,0,.55)]
          transition-all
          duration-500
          ${
            open
              ? "translate-y-0 -translate-x-1/2"
              : "translate-y-full -translate-x-1/2"
          }
        `}
        style={{
          height: "88vh",
        }}
      >
        {/* Handle */}

        <div className="flex justify-center pt-3">
          <div className="h-1.5 w-14 rounded-full bg-slate-500" />
        </div>

        {/* Header */}

        <div className="flex items-center justify-between px-5 pt-4">

          <div>

            <h2 className="text-2xl font-bold text-white">
              All Categories
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Explore every service on OurHub
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-slate-800 p-2 transition hover:bg-slate-700"
          >
            <X
              size={22}
              className="text-white"
            />
          </button>

        </div>

        {/* Search */}

        <div className="relative mt-5 px-5">

          <Search
            size={20}
            className="absolute left-9 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search category..."
            className="
              w-full
              rounded-2xl
              border
              border-yellow-500/20
              bg-[#101B2C]
              py-3
              pl-12
              pr-4
              text-white
              placeholder:text-slate-500
              outline-none
              focus:border-yellow-400
            "
          />

        </div>

        {/* Categories */}

        <div
  className="
    mt-6
    h-[calc(88vh-220px)]
    overflow-y-auto
    px-5
    pb-32
  "
>

          <div className="grid grid-cols-3 gap-4">

            {filtered.map((item) => (

              <Link
                key={item.title}
                href={item.link}
                onClick={onClose}
                className="
                  group
                  rounded-3xl
                  border
                  border-yellow-500/20
                  bg-[#101B2C]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-400
                  hover:shadow-[0_0_25px_rgba(255,193,7,.18)]
                "
              >

                <div className="flex flex-col items-center">

                  <div
                    className="
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-yellow-500/20
                      to-yellow-400/5
                    "
                  >

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="64px"
                      className="object-contain p-2 transition duration-300 group-hover:scale-110"
                    />

                  </div>

                  <p className="mt-3 text-center text-xs font-semibold text-white">
                    {item.title}
                  </p>

                </div>

              </Link>

            ))}

          </div>

          {filtered.length === 0 && (
            <div className="mt-20 text-center text-slate-400">
              No categories found.
            </div>
          )}

        </div>

      </div>
    </>
  );
}