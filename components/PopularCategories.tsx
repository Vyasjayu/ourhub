"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  onMoreClick: () => void;
  search?: string;
}

const categories = [
  {
    id: 1,
    title: "Religious",
    image: "/images/categories/religious.png",
    link: "/religious",
  },
  {
    id: 2,
    title: "Home",
    image: "/images/categories/home.png",
    link: "/home-services",
  },
  {
    id: 3,
    title: "Astrology",
    image: "/images/categories/astrology.png",
    link: "/astrology",
  },
  {
    id: 4,
    title: "Events Management",
    image: "/images/categories/events.png",
    link: "/events",
  },
  {
    id: 5,
    title: "Digital Marketing",
    image: "/images/categories/digital-marketing.png",
    link: "/digital-marketing",
  },
];

export default function PopularCategories({
  onMoreClick,
  search = "",
}: Props) {
  const filteredCategories = categories.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mt-8">
      {/* Heading */}

      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Popular Categories
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Explore our most popular services
          </p>
        </div>

        <button
          onClick={onMoreClick}
          className="flex items-center gap-1 text-sm font-semibold text-yellow-400 hover:text-yellow-300"
        >
          View All
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Categories */}

      <div className="grid grid-cols-3 gap-4">
        {filteredCategories.map((item) => (
          <Link
            key={item.id}
            href={item.link}
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
              hover:shadow-[0_0_25px_rgba(244,197,66,.18)]
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
                  to-yellow-300/5
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={42}
                  height={42}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-3 text-center text-xs font-semibold leading-5 text-white">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}

        {/* More Card */}

        <button
          onClick={onMoreClick}
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
            hover:shadow-[0_0_25px_rgba(244,197,66,.18)]
          "
        >
          <div className="flex flex-col items-center">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-yellow-500/20
                to-yellow-300/5
              "
            >
              <span className="text-3xl font-bold text-yellow-400">
                +
              </span>
            </div>

            <h3 className="mt-3 text-xs font-semibold text-white">
              More
            </h3>
          </div>
        </button>
      </div>

      {filteredCategories.length === 0 && (
        <div className="mt-8 rounded-2xl border border-slate-700 bg-[#101B2C] p-8 text-center">
          <p className="text-slate-400">
            No category found.
          </p>
        </div>
      )}
    </section>
  );
}