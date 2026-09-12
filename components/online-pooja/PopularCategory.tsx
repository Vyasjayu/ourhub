
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Search,
  Sparkles,
  X,
} from "lucide-react";

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    id: 1,
    title: "Popular",
    icon: "🙏",
    slug: "popular",
  },
  {
    id: 2,
    title: "Shiv Pooja",
    icon: "🔱",
    slug: "shiv-pooja",
  },
  {
    id: 3,
    title: "Lakshmi",
    icon: "🪔",
    slug: "lakshmi-pooja",
  },
  {
    id: 4,
    title: "Dosh Nivaran",
    icon: "✨",
    slug: "dosh-nivaran",
  },
  {
    id: 5,
    title: "Griha Pravesh",
    icon: "🏠",
    slug: "griha-pravesh",
  },
  {
    id: 6,
    title: "Business",
    icon: "💼",
    slug: "business-pooja",
  },
];

/* =========================================================
   ALL ONLINE POOJA
========================================================= */

const allPoojas = [
  { id: 1, name: "Ganesh Pooja", icon: "🙏" },
  { id: 2, name: "Lakshmi Pooja", icon: "🪔" },
  { id: 3, name: "Saraswati Pooja", icon: "📚" },
  { id: 4, name: "Durga Pooja", icon: "🌺" },
  { id: 5, name: "Kali Pooja", icon: "🌹" },
  { id: 6, name: "Shiv Pooja", icon: "🔱" },
  { id: 7, name: "Hanuman Pooja", icon: "🚩" },
  { id: 8, name: "Ram Darbar Pooja", icon: "🏹" },
  { id: 9, name: "Krishna Pooja", icon: "🦚" },
  { id: 10, name: "Satyanarayan Katha", icon: "🙏" },
  { id: 11, name: "Rudrabhishek", icon: "🔱" },
  { id: 12, name: "Mahamrityunjaya Jaap", icon: "🕉️" },
  { id: 13, name: "Navgraha Pooja", icon: "✨" },
  { id: 14, name: "Vastu Pooja", icon: "🏡" },
  { id: 15, name: "Griha Pravesh", icon: "🏠" },
  { id: 16, name: "Bhoomi Poojan", icon: "🌿" },
  { id: 17, name: "Vivah Pooja", icon: "💍" },
  { id: 18, name: "Engagement Pooja", icon: "💑" },
  { id: 19, name: "Namkaran Sanskar", icon: "👶" },
  { id: 20, name: "Mundan Sanskar", icon: "🪔" },
  { id: 21, name: "Annaprashan", icon: "🍚" },
  { id: 22, name: "Janeu Sanskar", icon: "🕉️" },
  { id: 23, name: "Pitru Dosh Nivaran", icon: "🙏" },
  { id: 24, name: "Kaal Sarp Dosh", icon: "🐍" },
  { id: 25, name: "Manglik Dosh Pooja", icon: "🔴" },
  { id: 26, name: "Shani Shanti", icon: "🪐" },
  { id: 27, name: "Rahu Ketu Shanti", icon: "☄️" },
  { id: 28, name: "Chandi Path", icon: "🕉️" },
  { id: 29, name: "Durga Saptashati", icon: "🌺" },
  { id: 30, name: "Lakshmi Kuber Pooja", icon: "💰" },
  { id: 31, name: "Dhanteras Pooja", icon: "🪔" },
  { id: 32, name: "Diwali Lakshmi Pooja", icon: "🪔" },
  { id: 33, name: "Ganesh Visarjan Pooja", icon: "🙏" },
  { id: 34, name: "Karwa Chauth Pooja", icon: "🌙" },
  { id: 35, name: "Raksha Bandhan Pooja", icon: "🪢" },
  { id: 36, name: "Navratri Pooja", icon: "🌺" },
  { id: 37, name: "Chhath Pooja", icon: "🌅" },
  { id: 38, name: "Makar Sankranti Pooja", icon: "☀️" },
  { id: 39, name: "Akshaya Tritiya Pooja", icon: "✨" },
  { id: 40, name: "Janmashtami Pooja", icon: "🦚" },
  { id: 41, name: "Ram Navami Pooja", icon: "🏹" },
  { id: 42, name: "Mahashivratri Pooja", icon: "🔱" },
  { id: 43, name: "Hanuman Jayanti Pooja", icon: "🚩" },
  { id: 44, name: "Ganesh Chaturthi Pooja", icon: "🙏" },
  { id: 45, name: "Saraswati Puja", icon: "📚" },
  { id: 46, name: "Business Success Pooja", icon: "💼" },
  { id: 47, name: "Career Growth Pooja", icon: "📈" },
  { id: 48, name: "Health & Wellness Pooja", icon: "🌿" },
  { id: 49, name: "Marriage Blessing Pooja", icon: "💍" },
  { id: 50, name: "Family Peace Pooja", icon: "🕉️" },
];

/* =========================================================
   SLUG GENERATOR
========================================================= */

function createPoojaSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* =========================================================
   COMPONENT
========================================================= */

export default function PopularCategory() {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  /* =======================================================
     SEARCH FILTER
  ======================================================= */

  const filteredPoojas = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return allPoojas;
    }

    return allPoojas.filter((pooja) =>
      pooja.name.toLowerCase().includes(query)
    );
  }, [search]);

  /* =======================================================
     OPEN
  ======================================================= */

  const openAllPooja = () => {
    setSearch("");
    setShowAll(true);
  };

  /* =======================================================
     CLOSE
  ======================================================= */

  const closeAllPooja = () => {
    setShowAll(false);
    setSearch("");
  };

  return (
    <>
      {/* =====================================================
          PREMIUM CATEGORY SECTION
      ===================================================== */}

      <section className="relative mt-6">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -left-12 top-10 h-32 w-32 rounded-full bg-[#DFAE45]/[0.06] blur-[55px]" />

        <div
          className="
            relative
            overflow-hidden
            rounded-[26px]
            border
            border-white/[0.07]
            bg-gradient-to-br
            from-[#0D1928]
            via-[#0A1523]
            to-[#08111D]
            p-3.5
            shadow-[0_18px_45px_rgba(0,0,0,0.22)]
          "
        >
          {/* Top Accent */}
          <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />

          {/* =================================================
              HEADER
          ================================================== */}

          <div className="flex items-center justify-between">
            <div>
              <div className="mb-1 flex items-center gap-1.5">
                <Sparkles
                  size={11}
                  className="text-[#DFAE45]"
                />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]/75">
                  Sacred Collection
                </span>
              </div>

              <h2 className="text-[18px] font-bold tracking-[-0.02em] text-white">
                Pooja Categories
              </h2>

              <p className="mt-0.5 text-[9px] text-white/35">
                Choose a ritual for your divine purpose
              </p>
            </div>

            {/* View All */}
            <button
              type="button"
              onClick={openAllPooja}
              className="
                group
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#DFAE45]/20
                bg-[#DFAE45]/[0.06]
                px-3
                py-2
                text-[10px]
                font-bold
                text-[#E7B94F]
                transition-all
                duration-300
                hover:border-[#DFAE45]/35
                hover:bg-[#DFAE45]/10
                active:scale-95
              "
            >
              <span>View All</span>

              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {/* =================================================
              CATEGORY GRID
          ================================================== */}

          <div className="mt-4 grid grid-cols-3 gap-2">
            {categories.map((item, index) => (
              <Link
                key={item.id}
                href={`/pooja/online/${item.slug}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[17px]
                  border
                  border-white/[0.06]
                  bg-white/[0.025]
                  px-1.5
                  py-3
                  text-center
                  shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#DFAE45]/25
                  hover:bg-[#DFAE45]/[0.045]
                  active:scale-[0.96]
                "
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-5 -top-5 h-14 w-14 rounded-full bg-[#DFAE45]/[0.08] blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute right-1.5 top-1.5 text-[7px] font-bold text-white/15">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                    relative
                    mx-auto
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#DFAE45]/10
                    bg-gradient-to-br
                    from-[#172B43]
                    to-[#0E1B2B]
                    text-[20px]
                    shadow-[0_6px_18px_rgba(0,0,0,0.2)]
                    transition-all
                    duration-300
                    group-hover:border-[#DFAE45]/25
                    group-hover:shadow-[0_6px_22px_rgba(223,174,69,0.1)]
                  "
                >
                  {item.icon}
                </div>

                {/* Name */}
                <p
                  className="
                    relative
                    mt-2
                    truncate
                    px-0.5
                    text-[9px]
                    font-semibold
                    text-white/75
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {item.title}
                </p>

                {/* Gold Bottom */}
                <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#DFAE45] opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-60" />
              </Link>
            ))}
          </div>

          {/* Bottom Hint */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-7 bg-gradient-to-r from-transparent to-white/[0.08]" />

            <span className="text-[8px] font-medium text-white/20">
              50+ sacred poojas available
            </span>

            <span className="h-px w-7 bg-gradient-to-l from-transparent to-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          PREMIUM ALL POOJA BOTTOM SHEET
      ===================================================== */}

      {showAll && (
        <div className="fixed inset-0 z-[9999]">
          {/* =================================================
              BACKDROP
          ================================================== */}

          <button
            type="button"
            aria-label="Close All Pooja"
            onClick={closeAllPooja}
            className="
              absolute
              inset-0
              cursor-default
              bg-black/80
              backdrop-blur-md
            "
          />

          {/* =================================================
              SHEET
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              flex
              h-[90vh]
              w-[calc(100%-16px)]
              max-w-[430px]
              -translate-x-1/2
              flex-col
              overflow-hidden
              rounded-t-[30px]
              border
              border-[#DFAE45]/15
              bg-[#050B14]
              shadow-[0_-25px_80px_rgba(0,0,0,0.75)]
            "
          >
            {/* Ambient Glows */}
            <div className="pointer-events-none absolute -left-20 top-0 h-44 w-44 rounded-full bg-[#DFAE45]/[0.07] blur-[70px]" />

            <div className="pointer-events-none absolute -right-20 top-40 h-40 w-40 rounded-full bg-[#7C3AED]/[0.06] blur-[70px]" />

            {/* =================================================
                DRAG HANDLE
            ================================================== */}

            <div className="relative flex justify-center pt-3">
              <div className="h-1 w-10 rounded-full bg-white/15" />
            </div>

            {/* =================================================
                HEADER
            ================================================== */}

            <div className="relative px-4 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles
                      size={12}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]/75">
                      Sacred Collection
                    </span>
                  </div>

                  <h2 className="mt-1 text-[20px] font-bold text-white">
                    Explore All Poojas
                  </h2>

                  <p className="mt-0.5 text-[9px] text-white/35">
                    {allPoojas.length} rituals available for online booking
                  </p>
                </div>

                {/* Close */}
                <button
                  type="button"
                  onClick={closeAllPooja}
                  aria-label="Close"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.04]
                    text-white/50
                    transition-all
                    duration-200
                    hover:border-[#DFAE45]/25
                    hover:text-[#DFAE45]
                    active:scale-90
                  "
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* =================================================
                SEARCH
            ================================================== */}

            <div className="relative px-4 pt-4">
              <div
                className="
                  group
                  flex
                  h-[50px]
                  items-center
                  gap-2.5
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  px-3
                  shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  focus-within:border-[#DFAE45]/35
                  focus-within:bg-[#DFAE45]/[0.035]
                "
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/[0.07]">
                  <Search
                    size={16}
                    className="text-[#DFAE45]"
                  />
                </div>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Ganesh, Shiv, Lakshmi..."
                  autoFocus
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-[12px]
                    font-medium
                    text-white
                    outline-none
                    placeholder:text-white/25
                  "
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/[0.06]
                      text-white/40
                      transition
                      hover:text-white
                      active:scale-90
                    "
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Result Count */}
              <div className="mt-2 flex items-center justify-between px-1">
                <span className="text-[8px] font-medium text-white/25">
                  {search
                    ? `${filteredPoojas.length} pooja found`
                    : "Browse all sacred rituals"}
                </span>

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="text-[8px] font-semibold text-[#DFAE45]"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* =================================================
                GRID
            ================================================== */}

            <div
              className="
                relative
                mt-3
                min-h-0
                flex-1
                overflow-y-auto
                overscroll-contain
                px-4
                pb-7
                [-ms-overflow-style:none]
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {filteredPoojas.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                  {filteredPoojas.map((pooja, index) => {
                    const slug = createPoojaSlug(pooja.name);

                    return (
                      <Link
                        key={pooja.id}
                        href={`/pooja/online/${slug}`}
                        onClick={closeAllPooja}
                        className="
                          group
                          relative
                          flex
                          min-h-[104px]
                          flex-col
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-[17px]
                          border
                          border-white/[0.06]
                          bg-white/[0.025]
                          px-1.5
                          py-2.5
                          text-center
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:border-[#DFAE45]/25
                          hover:bg-[#DFAE45]/[0.045]
                          active:scale-[0.95]
                        "
                      >
                        {/* Number */}
                        <span className="absolute right-1.5 top-1.5 text-[7px] font-bold text-white/10">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Glow */}
                        <div className="pointer-events-none absolute -right-5 -top-5 h-14 w-14 rounded-full bg-[#DFAE45]/[0.08] blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Icon */}
                        <div
                          className="
                            relative
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-[#DFAE45]/10
                            bg-gradient-to-br
                            from-[#172B43]
                            to-[#0D1827]
                            text-[18px]
                            shadow-[0_6px_15px_rgba(0,0,0,0.2)]
                            transition-all
                            duration-300
                            group-hover:border-[#DFAE45]/25
                          "
                        >
                          {pooja.icon}
                        </div>

                        {/* Name */}
                        <p
                          className="
                            relative
                            mt-2
                            min-h-[28px]
                            w-full
                            px-0.5
                            text-[9px]
                            font-semibold
                            leading-[13px]
                            text-white/70
                            transition-colors
                            duration-300
                            group-hover:text-white
                          "
                        >
                          {pooja.name}
                        </p>

                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#DFAE45] opacity-0 transition-all duration-300 group-hover:w-8 group-hover:opacity-60" />
                      </Link>
                    );
                  })}
                </div>
              ) : (
                /* =================================================
                   NO RESULT
                ================================================== */

                <div className="flex min-h-[330px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/[0.07] bg-white/[0.025]">
                    <Search
                      size={24}
                      className="text-white/20"
                    />
                  </div>

                  <p className="mt-4 text-[15px] font-bold text-white">
                    No Pooja Found
                  </p>

                  <p className="mt-1 text-[10px] text-white/30">
                    Try searching with another pooja name
                  </p>

                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="
                      mt-4
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-[#DFAE45]/20
                      bg-[#DFAE45]/[0.06]
                      px-3
                      py-2
                      text-[9px]
                      font-bold
                      text-[#DFAE45]
                    "
                  >
                    Browse All
                    <ChevronRight size={12} />
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Accent */}
            <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />
          </div>
        </div>
      )}
    </>
  );
}
