"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Grid2x2 } from "lucide-react";

const poojas = [
  {
    name: "Ganesh\nPooja",
    image: "/images/pooja/ganesh.jpg",
    href: "/pooja/ganesh",
  },
  {
    name: "Lakshmi\nPooja",
    image: "/images/pooja/lakshmi.jpg",
    href: "/pooja/lakshmi",
  },
  {
    name: "Saraswati\nPooja",
    image: "/images/pooja/saraswati.jpg",
    href: "/pooja/saraswati",
  },
];

interface PopularPoojaProps {
  onMoreClick: () => void;
}

export default function PopularPooja({
  onMoreClick,
}: PopularPoojaProps) {
  return (
    <section>

      {/* Heading */}

      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-[22px] font-bold leading-none text-white">
            Popular Pooja Services
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Book India's most loved poojas
          </p>
        </div>

        <button
          onClick={onMoreClick}
          className="flex items-center gap-1 text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
        >
          View All
          <ChevronRight size={18} />
        </button>

      </div>

      {/* Horizontal Scroll */}

      <div
        className="
          flex
          gap-4
          overflow-x-auto
          pb-2
          snap-x
          snap-mandatory
          scrollbar-hide
        "
      >

        {poojas.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="
              snap-start
              shrink-0
              w-[82px]
              flex
              flex-col
              items-center
            "
          >

            <div
              className="
                relative
                flex
                h-[82px]
                w-[82px]
                items-center
                justify-center
                rounded-full
                border
                border-yellow-500/40
                bg-gradient-to-b
                from-[#1b2740]
                to-[#0b1627]
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                active:scale-95
              "
            >

              <Image
                src={item.image}
                alt={item.name}
                width={58}
                height={58}
                className="object-contain"
              />

            </div>

            <p className="mt-3 whitespace-pre-line text-center text-[12px] font-semibold leading-4 text-white">
              {item.name}
            </p>

          </Link>
        ))}

        {/* More */}

        <button
          onClick={onMoreClick}
          className="
            snap-start
            shrink-0
            w-[82px]
            flex
            flex-col
            items-center
          "
        >

          <div
            className="
              flex
              h-[82px]
              w-[82px]
              items-center
              justify-center
              rounded-full
              border
              border-yellow-500
              bg-[#111827]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-yellow-500
              hover:text-black
              active:scale-95
            "
          >

            <Grid2x2
              size={30}
              className="text-yellow-400"
            />

          </div>

          <p className="mt-3 text-[12px] font-semibold text-white">
            More
          </p>

        </button>

      </div>

    </section>
  );
}