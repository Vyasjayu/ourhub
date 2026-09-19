
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ChevronRight,
  Grid2X2,
  Sparkles,
  Flame,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const poojas = [
  {
    image: "/images/pooja/ganesh.jpg",
    href: "/pooja/ganesh",

    en: {
      name: "Ganesh\nPooja",
    },

    hi: {
      name: "गणेश\nपूजा",
    },
  },

  {
    image: "/images/pooja/lakshmi.jpg",
    href: "/pooja/lakshmi",

    en: {
      name: "Lakshmi\nPooja",
    },

    hi: {
      name: "लक्ष्मी\nपूजा",
    },
  },

  {
    image: "/images/pooja/saraswati.jpg",
    href: "/pooja/saraswati",

    en: {
      name: "Saraswati\nPooja",
    },

    hi: {
      name: "सरस्वती\nपूजा",
    },
  },
];

interface PopularPoojaProps {
  onMoreClick: () => void;
}

export default function PopularPooja({
  onMoreClick,
}: PopularPoojaProps) {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  return (
    <section className="relative">

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="mb-5 flex items-end justify-between">

        <div>

          {/* Eyebrow */}

          <div className="flex items-center gap-1.5">

            <Flame
              size={12}
              strokeWidth={2.2}
              className="text-[#DFAE45]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              {isHindi
                ? "भक्तों की पसंद"
                : "Devotees Choice"}
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-1.5 text-[21px] font-extrabold leading-tight tracking-tight text-white">
            {isHindi
              ? "लोकप्रिय पूजा"
              : "Popular Pooja"}
          </h2>

          {/* Description */}

          <p className="mt-1 text-[10px] text-gray-500">
            {isHindi
              ? "भारत की सबसे पसंदीदा पूजा बुक करें"
              : "Book India's most loved poojas"}
          </p>

        </div>

        {/* =====================================================
            VIEW ALL
        ===================================================== */}

        <button
          type="button"
          onClick={onMoreClick}
          className="
            group
            flex
            items-center
            gap-1
            rounded-full
            border
            border-[#DFAE45]/20
            bg-[#DFAE45]/[0.06]
            px-3
            py-2
            text-[9px]
            font-bold
            text-[#DFAE45]
            transition-all
            duration-300
            hover:border-[#DFAE45]/40
            hover:bg-[#DFAE45]/10
            active:scale-95
          "
        >
          {isHindi ? "सभी देखें" : "View All"}

          <ChevronRight
            size={12}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
            "
          />
        </button>

      </div>

      {/* =====================================================
          CATEGORY CAROUSEL
      ===================================================== */}

      <div
        className="
          -mx-1
          flex
          gap-3
          overflow-x-auto
          px-1
          pb-3
          snap-x
          snap-mandatory
          scrollbar-hide
        "
      >

        {poojas.map((item) => {

          const content = isHindi
            ? item.hi
            : item.en;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
                group
                w-[108px]
                shrink-0
                snap-start
              "
            >

              {/* =================================================
                  CARD
              ================================================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/[0.07]
                  bg-gradient-to-b
                  from-[#111D2D]
                  to-[#09111D]
                  p-2
                  shadow-[0_10px_30px_rgba(0,0,0,0.22)]
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:border-[#DFAE45]/30
                  active:scale-[0.96]
                "
              >

                {/* Gold Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-7
                    -top-7
                    h-16
                    w-16
                    rounded-full
                    bg-[#DFAE45]/10
                    blur-2xl
                  "
                />

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    flex
                    h-[92px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[17px]
                    border
                    border-[#DFAE45]/15
                    bg-gradient-to-br
                    from-[#1C2940]
                    via-[#101B2D]
                    to-[#07101D]
                  "
                >

                  {/* Inner Glow */}

                  <div
                    className="
                      absolute
                      h-16
                      w-16
                      rounded-full
                      bg-[#DFAE45]/10
                      blur-xl
                    "
                  />

                  <Image
                    src={item.image}
                    alt={content.name.replace("\n", " ")}
                    width={72}
                    height={72}
                    className="
                      relative
                      z-10
                      h-[68px]
                      w-[68px]
                      object-contain
                      drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)]
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  {/* Premium Badge */}

                  <div
                    className="
                      absolute
                      right-1.5
                      top-1.5
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#DFAE45]/20
                      bg-black/40
                      backdrop-blur-md
                    "
                  >
                    <Sparkles
                      size={9}
                      strokeWidth={2}
                      className="text-[#DFAE45]"
                    />
                  </div>

                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="px-1 pb-1 pt-3">

                  <p
                    className="
                      whitespace-pre-line
                      text-center
                      text-[11px]
                      font-bold
                      leading-[15px]
                      text-white
                    "
                  >
                    {content.name}
                  </p>

                  <div className="mt-2 flex items-center justify-center gap-1">

                    <span className="h-[3px] w-[3px] rounded-full bg-[#DFAE45]" />

                    <span className="text-[8px] font-medium text-gray-500">
                      {isHindi
                        ? "अभी बुक करें"
                        : "Book Now"}
                    </span>

                    <ChevronRight
                      size={9}
                      className="text-[#DFAE45]"
                    />

                  </div>

                </div>

              </div>

            </Link>
          );
        })}

        {/* =====================================================
            MORE CARD
        ===================================================== */}

        <button
          type="button"
          onClick={onMoreClick}
          className="
            group
            w-[108px]
            shrink-0
            snap-start
            text-left
            active:scale-[0.96]
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-[#DFAE45]/20
              bg-gradient-to-b
              from-[#15130E]
              to-[#0A1018]
              p-2
              shadow-[0_10px_30px_rgba(0,0,0,0.22)]
              transition-all
              duration-300
              group-hover:-translate-y-0.5
              group-hover:border-[#DFAE45]/45
            "
          >

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -left-8
                -top-8
                h-20
                w-20
                rounded-full
                bg-[#DFAE45]/10
                blur-2xl
              "
            />

            {/* Icon Area */}

            <div
              className="
                relative
                flex
                h-[92px]
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-[17px]
                border
                border-[#DFAE45]/20
                bg-[#DFAE45]/[0.05]
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#DFAE45]/25
                  bg-[#DFAE45]/10
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-[#DFAE45]/15
                "
              >
                <Grid2X2
                  size={23}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

            </div>

            {/* More Content */}

            <div className="px-1 pb-1 pt-3">

              <p className="text-center text-[11px] font-bold text-white">
                {isHindi
                  ? "और देखें"
                  : "Explore More"}
              </p>

              <div className="mt-2 flex items-center justify-center gap-1">

                <span className="text-[8px] font-medium text-[#DFAE45]">
                  {isHindi
                    ? "सभी पूजा"
                    : "All Poojas"}
                </span>

                <ChevronRight
                  size={9}
                  className="
                    text-[#DFAE45]
                    transition-transform
                    group-hover:translate-x-0.5
                  "
                />

              </div>

            </div>

          </div>

        </button>

      </div>

      {/* =====================================================
          SCROLL HINT
      ===================================================== */}

      <div className="mt-2 flex items-center justify-center gap-1.5">

        <div className="h-[3px] w-5 rounded-full bg-[#DFAE45]/40" />

        <span className="text-[8px] text-gray-600">
          {isHindi
            ? "देखने के लिए स्वाइप करें"
            : "Swipe to explore"}
        </span>

        <div className="h-[3px] w-2 rounded-full bg-white/10" />

      </div>

    </section>
  );
}

