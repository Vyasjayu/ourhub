
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";

interface Props {
  search?: string;
  onMoreClick: () => void;
}

const categories = [
  {
    id: 1,
    title: "Religious Services",
    image: "/images/categories/religious.png",
    rating: "4.9",
    link: "/religious",
  },
 {
  id: 2,
  title: "Astrology",
  image: "/images/categories/astrology.png",
  rating: "4.8",
  link: "/religious/astrology",
},
  {
    id: 3,
    title: "Automobile",
    image: "/images/categories/automobile.png",
    rating: "4.7",
    link: "/automobile",
  },
  {
    id: 4,
    title: "Event Management",
    image: "/images/categories/events.png",
    rating: "4.9",
    link: "/eventManagement",
  },
  {
    id: 5,
    title: "Web Development",
    image: "/images/categories/web-development.png",
    rating: "5.0",
    link: "/web-development",
  },
  {
    id: 6,
    title: "Construction",
    image: "/images/categories/construction.png",
    rating: "4.8",
    link: "/construction",
  },
];

export default function PopularCategories({
  search = "",
  onMoreClick,
}: Props) {
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mb-6">
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

        {/* View All */}
        <button
          onClick={onMoreClick}
          className="flex items-center gap-1 text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
        >
          View All
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Categories */}
      {filteredCategories.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {filteredCategories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="
                min-w-[165px]
                overflow-hidden
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
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="165px"
                  className="object-cover transition duration-500 hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
                      {category.rating}
                    </span>
                  </div>
                </div>

                <h3 className="mt-3 line-clamp-2 text-base font-bold text-white">
                  {category.title}
                </h3>

                {/* Explore Button */}
                <div className="mt-4">
                  <div className="flex w-full items-center justify-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-[#071424] transition hover:scale-[1.03]">
                    Explore
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-700 bg-[#111827] p-8 text-center">
          <p className="text-slate-400">
            No categories found.
          </p>
        </div>
      )}
    </section>
  );
}

