"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Crown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface Props {
  search?: string;
  onMoreClick: () => void;
}

const categories = [
  {
    id: 1,
    title: "Pooja Booking",
    image: "/banners/premium-pooja.png",
    rating: "4.9",
    link: "/pooja",
    tag: "Sacred",
  },
  {
    id: 2,
    title: "Electrician",
    image: "/images/offers/electrician.jpg",
    rating: "4.8",
    link: "/services/electrician",
    tag: "Expert",
  },
  {
    id: 3,
    title: "AC Repair",
    image: "/images/offers/ac.jpg",
    rating: "4.8",
    link: "/services/ac-repair",
    tag: "Trending",
  },
  {
    id: 4,
    title: "Event Management",
    image: "/images/categories/events.png",
    rating: "4.9",
    link: "/eventManagement",
    tag: "Premium",
  },
  {
    id: 5,
    title: "Web Development",
    image: "/images/categories/web-development.png",
    rating: "5.0",
    link: "/web-development",
    tag: "Popular",
  },
  {
    id: 6,
    title: "Construction",
    image: "/images/categories/construction.png",
    rating: "4.8",
    link: "/construction",
    tag: "Trusted",
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
    <section className="relative mb-7">
      {/* ================= SECTION HEADER ================= */}

      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          {/* Premium eyebrow */}

          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#F4C542]" />

            <span className="text-[9px] font-bold tracking-[2px] text-[#F4C542]">
              EXPLORE OUR SERVICES
            </span>
          </div>

          <h2 className="mt-2 text-[22px] font-bold tracking-tight text-white">
            Popular{" "}
            <span className="text-[#F4C542]">
              Categories
            </span>
          </h2>

          <p className="mt-1 text-[11px] text-slate-500">
            Handpicked services for your everyday needs
          </p>
        </div>

        {/* View all */}

        <button
          onClick={onMoreClick}
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
            text-[11px]
            font-bold
            text-[#F4C542]
            transition-all
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

      {/* ================= CATEGORIES ================= */}

      {filteredCategories.length > 0 ? (
        <>
          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
            {filteredCategories.map((category, index) => (
              <Link
                key={category.id}
                href={category.link}
                className="
                  group
                  relative
                  min-w-[205px]
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#D8AA39]/20
                  bg-[#091624]
                  shadow-[0_12px_35px_rgba(0,0,0,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#F4C542]/55
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.4)]
                "
              >
                {/* Premium gold glow */}

                <div className="pointer-events-none absolute -right-12 -top-12 z-0 h-28 w-28 rounded-full bg-[#F4C542]/[0.08] blur-3xl transition duration-500 group-hover:bg-[#F4C542]/[0.14]" />

                {/* ================= IMAGE ================= */}

                <div className="relative z-10 h-[150px] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="205px"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Premium overlays */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#091624] via-[#091624]/15 to-transparent" />

                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/35 to-transparent" />

                  {/* Category number */}

                  <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 text-[9px] font-bold text-white backdrop-blur-md">
                    0{index + 1}
                  </div>

                  {/* Premium Tag */}

                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-[#F4C542]/30 bg-[#07111f]/75 px-2.5 py-1 backdrop-blur-md">
                    <Crown
                      size={10}
                      fill="currentColor"
                      className="text-[#F4C542]"
                    />

                    <span className="text-[9px] font-bold text-[#F4C542]">
                      {category.tag}
                    </span>
                  </div>

                  {/* Rating */}

                  <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/45 px-2.5 py-1.5 backdrop-blur-md">
                    <Star
                      size={11}
                      fill="currentColor"
                      className="text-[#F4C542]"
                    />

                    <span className="text-[10px] font-bold text-white">
                      {category.rating}
                    </span>

                    <span className="text-[9px] text-slate-300">
                      Top Rated
                    </span>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}

                <div className="relative z-10 p-4">
                  {/* Premium small label */}

                  <div className="flex items-center gap-1.5">
                    <Sparkles
                      size={11}
                      className="text-[#F4C542]"
                    />

                    <span className="text-[9px] font-bold tracking-[1.5px] text-[#F4C542]/80">
                      PREMIUM SERVICE
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="mt-2 line-clamp-1 text-[17px] font-bold tracking-tight text-white">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Verified professionals • Quality service
                  </p>

                  {/* Bottom divider */}

                  <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

                  {/* CTA */}

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">
                      Explore service
                    </span>

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#F4C542]/40
                        bg-[#F4C542]/[0.08]
                        text-[#F4C542]
                        transition-all
                        duration-300
                        group-hover:bg-[#F4C542]
                        group-hover:text-[#07111f]
                        group-hover:shadow-[0_8px_20px_rgba(244,197,66,0.22)]
                      "
                    >
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>

                {/* Bottom premium line */}

                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#F4C542]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* Scroll hint */}

          {filteredCategories.length > 1 && (
            <div className="mt-1 flex items-center justify-center gap-2">
              <span className="h-[3px] w-7 rounded-full bg-[#F4C542]" />

              <span className="h-[3px] w-3 rounded-full bg-white/10" />

              <span className="h-[3px] w-3 rounded-full bg-white/10" />

              <span className="h-[3px] w-3 rounded-full bg-white/10" />
            </div>
          )}
        </>
      ) : (
        <div
          className="
            rounded-[24px]
            border
            border-[#D8AA39]/20
            bg-[#091624]
            px-6
            py-10
            text-center
          "
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F4C542]/20 bg-[#F4C542]/[0.06]">
            <Sparkles
              size={21}
              className="text-[#F4C542]"
            />
          </div>

          <h3 className="mt-4 text-sm font-bold text-white">
            No Services Found
          </h3>

          <p className="mt-2 text-[11px] text-slate-500">
            Try searching with another keyword.
          </p>
        </div>
      )}
    </section>
  );
}