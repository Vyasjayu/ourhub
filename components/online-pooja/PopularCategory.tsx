"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
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
  {
    id: 1,
    name: "Ganesh Pooja",
    icon: "🙏",
  },
  {
    id: 2,
    name: "Lakshmi Pooja",
    icon: "🪔",
  },
  {
    id: 3,
    name: "Saraswati Pooja",
    icon: "📚",
  },
  {
    id: 4,
    name: "Durga Pooja",
    icon: "🌺",
  },
  {
    id: 5,
    name: "Kali Pooja",
    icon: "🌹",
  },
  {
    id: 6,
    name: "Shiv Pooja",
    icon: "🔱",
  },
  {
    id: 7,
    name: "Hanuman Pooja",
    icon: "🚩",
  },
  {
    id: 8,
    name: "Ram Darbar Pooja",
    icon: "🏹",
  },
  {
    id: 9,
    name: "Krishna Pooja",
    icon: "🦚",
  },
  {
    id: 10,
    name: "Satyanarayan Katha",
    icon: "🙏",
  },
  {
    id: 11,
    name: "Rudrabhishek",
    icon: "🔱",
  },
  {
    id: 12,
    name: "Mahamrityunjaya Jaap",
    icon: "🕉️",
  },
  {
    id: 13,
    name: "Navgraha Pooja",
    icon: "✨",
  },
  {
    id: 14,
    name: "Vastu Pooja",
    icon: "🏡",
  },
  {
    id: 15,
    name: "Griha Pravesh",
    icon: "🏠",
  },
  {
    id: 16,
    name: "Bhoomi Poojan",
    icon: "🌿",
  },
  {
    id: 17,
    name: "Vivah Pooja",
    icon: "💍",
  },
  {
    id: 18,
    name: "Engagement Pooja",
    icon: "💑",
  },
  {
    id: 19,
    name: "Namkaran Sanskar",
    icon: "👶",
  },
  {
    id: 20,
    name: "Mundan Sanskar",
    icon: "🪔",
  },
  {
    id: 21,
    name: "Annaprashan",
    icon: "🍚",
  },
  {
    id: 22,
    name: "Janeu Sanskar",
    icon: "🕉️",
  },
  {
    id: 23,
    name: "Pitru Dosh Nivaran",
    icon: "🙏",
  },
  {
    id: 24,
    name: "Kaal Sarp Dosh",
    icon: "🐍",
  },
  {
    id: 25,
    name: "Manglik Dosh Pooja",
    icon: "🔴",
  },
  {
    id: 26,
    name: "Shani Shanti",
    icon: "🪐",
  },
  {
    id: 27,
    name: "Rahu Ketu Shanti",
    icon: "☄️",
  },
  {
    id: 28,
    name: "Chandi Path",
    icon: "🕉️",
  },
  {
    id: 29,
    name: "Durga Saptashati",
    icon: "🌺",
  },
  {
    id: 30,
    name: "Lakshmi Kuber Pooja",
    icon: "💰",
  },
  {
    id: 31,
    name: "Dhanteras Pooja",
    icon: "🪔",
  },
  {
    id: 32,
    name: "Diwali Lakshmi Pooja",
    icon: "🪔",
  },
  {
    id: 33,
    name: "Ganesh Visarjan Pooja",
    icon: "🙏",
  },
  {
    id: 34,
    name: "Karwa Chauth Pooja",
    icon: "🌙",
  },
  {
    id: 35,
    name: "Raksha Bandhan Pooja",
    icon: "🪢",
  },
  {
    id: 36,
    name: "Navratri Pooja",
    icon: "🌺",
  },
  {
    id: 37,
    name: "Chhath Pooja",
    icon: "🌅",
  },
  {
    id: 38,
    name: "Makar Sankranti Pooja",
    icon: "☀️",
  },
  {
    id: 39,
    name: "Akshaya Tritiya Pooja",
    icon: "✨",
  },
  {
    id: 40,
    name: "Janmashtami Pooja",
    icon: "🦚",
  },
  {
    id: 41,
    name: "Ram Navami Pooja",
    icon: "🏹",
  },
  {
    id: 42,
    name: "Mahashivratri Pooja",
    icon: "🔱",
  },
  {
    id: 43,
    name: "Hanuman Jayanti Pooja",
    icon: "🚩",
  },
  {
    id: 44,
    name: "Ganesh Chaturthi Pooja",
    icon: "🙏",
  },
  {
    id: 45,
    name: "Saraswati Puja",
    icon: "📚",
  },
  {
    id: 46,
    name: "Business Success Pooja",
    icon: "💼",
  },
  {
    id: 47,
    name: "Career Growth Pooja",
    icon: "📈",
  },
  {
    id: 48,
    name: "Health & Wellness Pooja",
    icon: "🌿",
  },
  {
    id: 49,
    name: "Marriage Blessing Pooja",
    icon: "💍",
  },
  {
    id: 50,
    name: "Family Peace Pooja",
    icon: "🕉️",
  },
];

/* =========================================================
   SLUG GENERATOR

   Ganesh Pooja
   ↓
   ganesh-pooja
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
     OPEN BOTTOM SHEET
  ======================================================= */

  const openAllPooja = () => {
    setSearch("");
    setShowAll(true);
  };

  /* =======================================================
     CLOSE BOTTOM SHEET
  ======================================================= */

  const closeAllPooja = () => {
    setShowAll(false);
    setSearch("");
  };

  return (
    <>
      {/* =====================================================
          CATEGORY SECTION
      ===================================================== */}

      <section className="mt-5">
        <div
          className="
            rounded-2xl
            border
            border-yellow-500/15
            bg-[#080f18]
            p-3
          "
        >
          {/* HEADER */}

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[17px] font-semibold text-white">
                ✣ Pooja Categories
              </h2>

              <p className="mt-0.5 text-[9px] text-gray-500">
                Choose your desired pooja
              </p>
            </div>

            {/* VIEW ALL */}

            <button
              type="button"
              onClick={openAllPooja}
              className="
                flex
                items-center
                gap-1
                rounded-full
                border
                border-yellow-500/20
                bg-yellow-500/10
                px-3
                py-1.5
                text-[11px]
                font-semibold
                text-yellow-400
                transition
                active:scale-95
              "
            >
              View All

              <ArrowRight size={12} />
            </button>
          </div>

          {/* CATEGORY GRID */}

          <div className="mt-3 grid grid-cols-3 gap-2">
            {categories.map((item) => (
              <Link
                key={item.id}
                href={`/pooja/online/${item.slug}`}
                className="
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-[#111c29]
                  px-2
                  py-2.5
                  text-center
                  transition
                  hover:border-yellow-500/20
                  active:scale-[0.95]
                "
              >
                {/* ICON */}

                <div
                  className="
                    mx-auto
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#162d49]
                    text-[20px]
                  "
                >
                  {item.icon}
                </div>

                {/* NAME */}

                <p
                  className="
                    mt-1.5
                    truncate
                    text-[9px]
                    font-medium
                    text-white
                  "
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL POOJA BOTTOM SHEET
      ===================================================== */}

      {showAll && (
        <div className="fixed inset-0 z-[9999]">
          {/* =================================================
              OVERLAY
          ================================================= */}

          <button
            type="button"
            aria-label="Close All Pooja"
            onClick={closeAllPooja}
            className="
              absolute
              inset-0
              bg-black/75
              backdrop-blur-[2px]
            "
          />

          {/* =================================================
              MOBILE BOTTOM SHEET

              IMPORTANT:
              This is intentionally kept narrow so desktop
              also looks like a mobile bottom sheet.
          ================================================= */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              w-[calc(100%-24px)]
              max-w-[390px]
              -translate-x-1/2
              overflow-hidden
              rounded-t-[24px]
              border
              border-yellow-500/15
              bg-[#07111d]
              shadow-[0_-15px_50px_rgba(0,0,0,0.7)]
            "
          >
            {/* HANDLE */}

            <div className="flex justify-center pt-2.5">
              <div className="h-1 w-9 rounded-full bg-gray-600" />
            </div>

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="px-4 pt-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[17px] font-bold text-white">
                    All Pooja
                  </h2>

                  <p className="mt-0.5 text-[9px] text-gray-500">
                    {allPoojas.length} poojas available
                  </p>
                </div>

                {/* CLOSE */}

                <button
                  type="button"
                  onClick={closeAllPooja}
                  aria-label="Close"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    transition
                    active:scale-90
                  "
                >
                  <X
                    size={17}
                    className="text-gray-300"
                  />
                </button>
              </div>
            </div>

            {/* =================================================
                SEARCH BAR
            ================================================= */}

            <div className="px-4 pt-3">
              <div
                className="
                  flex
                  h-11
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-yellow-500/20
                  bg-[#111b28]
                  px-3
                "
              >
                <Search
                  size={18}
                  className="shrink-0 text-yellow-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search pooja..."
                  autoFocus
                  className="
                    w-full
                    bg-transparent
                    text-[13px]
                    text-white
                    outline-none
                    placeholder:text-gray-600
                  "
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="shrink-0"
                  >
                    <X
                      size={16}
                      className="text-gray-500"
                    />
                  </button>
                )}
              </div>

              {/* SEARCH RESULT */}

              {search && (
                <p className="mt-2 text-[9px] text-gray-500">
                  {filteredPoojas.length} pooja found
                </p>
              )}
            </div>

            {/* =================================================
                POOJA GRID
            ================================================= */}

            <div
              className="
                mt-3
                max-h-[65vh]
                overflow-y-auto
                overscroll-contain
                px-4
                pb-7
              "
            >
              {filteredPoojas.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                  {filteredPoojas.map((pooja) => {
                    const slug = createPoojaSlug(pooja.name);

                    return (
                      <Link
                        key={pooja.id}
                        href={`/pooja/online/${slug}`}
                        onClick={closeAllPooja}
                        className="
                          flex
                          min-h-[94px]
                          flex-col
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/[0.07]
                          bg-[#111c29]
                          px-1.5
                          py-2
                          text-center
                          transition
                          hover:border-yellow-500/20
                          hover:bg-[#142236]
                          active:scale-[0.95]
                        "
                      >
                        {/* ICON */}

                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#162d49]
                            text-[18px]
                          "
                        >
                          {pooja.icon}
                        </div>

                        {/* NAME */}

                        <p
                          className="
                            mt-2
                            min-h-[30px]
                            w-full
                            px-0.5
                            text-[10px]
                            font-semibold
                            leading-[14px]
                            text-white
                          "
                        >
                          {pooja.name}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                /* NO RESULT */

                <div className="py-12 text-center">
                  <div className="text-3xl">
                    🔍
                  </div>

                  <p className="mt-2 text-sm font-semibold text-white">
                    No Pooja Found
                  </p>

                  <p className="mt-1 text-[10px] text-gray-500">
                    Try another pooja name
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