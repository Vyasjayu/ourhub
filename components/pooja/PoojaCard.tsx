
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface PoojaCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  slug: string;
}

export default function PoojaCard({
  title,
  description,
  duration,
  price,
  image,
  slug,
}: PoojaCardProps) {
  const { language } = useLanguage();

  const bookingUrl = `/pooja/online/${slug}/book`;

  const text = {
    sacred:
      language === "hi"
        ? "पवित्र"
        : "Sacred",

    verifiedPooja:
      language === "hi"
        ? "प्रमाणित पूजा"
        : "VERIFIED POOJA",

    duration:
      language === "hi"
        ? "अवधि"
        : "Duration",

    startingFrom:
      language === "hi"
        ? "शुरुआत"
        : "Starting From",

    bookThisPooja:
      language === "hi"
        ? "यह पूजा बुक करें"
        : "Book This Pooja",

    imageAlt:
      language === "hi"
        ? `${title} - ऑनलाइन पूजा`
        : `${title} - Online Pooja`,
  };

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/[0.07]
        bg-gradient-to-br
        from-[#101B2A]
        via-[#0B1522]
        to-[#07101B]
        p-2.5
        shadow-[0_12px_35px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#DFAE45]/30
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
        active:scale-[0.985]
      "
    >
      {/* =====================================================
          AMBIENT GOLD GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-[45px]" />

      <div className="pointer-events-none absolute -bottom-20 -left-16 h-32 w-32 rounded-full bg-indigo-500/[0.04] blur-[45px]" />

      <div className="relative flex gap-3">
        {/* =================================================
            IMAGE
        ================================================= */}

        <Link
          href={bookingUrl}
          className="
            relative
            h-[116px]
            w-[106px]
            shrink-0
            overflow-hidden
            rounded-[18px]
            border
            border-white/[0.06]
            bg-[#111827]
          "
        >
          <Image
            src={image}
            alt={text.imageAlt}
            fill
            sizes="106px"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

          {/* Top Badge */}
          <div className="absolute left-2 top-2">
            <div className="flex items-center gap-1 rounded-full border border-[#DFAE45]/25 bg-black/45 px-2 py-1 backdrop-blur-md">
              <Sparkles
                size={9}
                className="text-[#DFAE45]"
              />

              <span className="text-[7px] font-extrabold uppercase tracking-wide text-[#F3D27A]">
                {text.sacred}
              </span>
            </div>
          </div>

          {/* Verified Badge */}
          <div className="absolute bottom-2 left-2 right-2">
            <div className="flex items-center justify-center gap-1 rounded-full border border-white/10 bg-black/50 px-2 py-1.5 backdrop-blur-md">
              <ShieldCheck
                size={10}
                className="text-[#DFAE45]"
              />

              <span className="text-[7px] font-bold text-white">
                {text.verifiedPooja}
              </span>
            </div>
          </div>
        </Link>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="min-w-0 flex-1 py-0.5">
          {/* TITLE ROW */}

          <Link
            href={bookingUrl}
            className="block"
          >
            <div className="flex items-start justify-between gap-2">
              <h3
                className="
                  line-clamp-2
                  text-[15px]
                  font-extrabold
                  leading-[18px]
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-[#F3C75F]
                "
              >
                {title}
              </h3>

              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#DFAE45]/[0.07]">
                <Sparkles
                  size={11}
                  className="text-[#DFAE45]"
                />
              </div>
            </div>
          </Link>

          {/* DESCRIPTION */}

          <p className="mt-1.5 line-clamp-2 text-[9px] leading-[15px] text-gray-500">
            {description}
          </p>

          {/* DIVIDER */}

          <div className="my-2.5 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

          {/* INFO */}

          <div className="flex items-center gap-3">
            {/* Duration */}

            <div className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/[0.035]">
                <Clock3
                  size={11}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[7px] uppercase tracking-wide text-gray-600">
                  {text.duration}
                </p>

                <p className="mt-0.5 text-[9px] font-semibold text-gray-300">
                  {duration}
                </p>
              </div>
            </div>

            {/* Price */}

            <div>
              <p className="text-[7px] uppercase tracking-wide text-gray-600">
                {text.startingFrom}
              </p>

              <p className="mt-0.5 text-[16px] font-extrabold leading-none text-[#F3C75F]">
                ₹{price}
              </p>
            </div>
          </div>

          {/* =================================================
              BOOK BUTTON
          ================================================= */}

          <Link
            href={bookingUrl}
            className="
              mt-3
              flex
              h-9
              w-full
              items-center
              justify-center
              gap-1.5
              rounded-xl
              bg-gradient-to-r
              from-[#F3C75F]
              to-[#DFAE45]
              text-[9px]
              font-extrabold
              text-black
              shadow-[0_6px_20px_rgba(223,174,69,0.13)]
              transition-all
              duration-300
              hover:shadow-[0_8px_25px_rgba(223,174,69,0.25)]
              active:scale-95
            "
          >
            {text.bookThisPooja}

            <ArrowRight
              size={12}
              strokeWidth={2.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>

      {/* =====================================================
          PREMIUM BOTTOM ACCENT
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent transition-all duration-500 group-hover:w-[65%]" />
    </div>
  );
}
