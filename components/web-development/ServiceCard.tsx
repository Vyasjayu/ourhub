
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface Props {
  slug: string;
  title: string;
  price: string;
  icon: string;
  color: string;
}

export default function ServiceCard({
  slug,
  title,
  price,
  icon,
  color,
}: Props) {
  return (
    <Link
      href={`/web-development/service/${slug}`}
      className="group block h-full"
      aria-label={`View details for ${title}`}
    >
      <article
        className="
          relative
          flex
          h-full
          min-h-[250px]
          flex-col
          overflow-hidden
          rounded-[26px]
          border
          border-white/[0.08]
          bg-gradient-to-br
          from-[#101D2D]
          via-[#0B1726]
          to-[#08121F]
          p-4
          shadow-[0_12px_35px_rgba(0,0,0,0.20)]
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:border-[#DFAE45]/30
          group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.32)]
          active:scale-[0.98]
        "
      >
        {/* ================= AMBIENT GLOW ================= */}
        <div
          className={`
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-32
            w-32
            rounded-full
            bg-gradient-to-br
            ${color}
            opacity-[0.08]
            blur-3xl
            transition-opacity
            duration-500
            group-hover:opacity-[0.16]
          `}
        />

        {/* ================= TOP ACCENT ================= */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* ================= TOP ROW ================= */}
        <div className="relative flex items-start justify-between">
          {/* Icon */}
          <div
            className={`
              relative
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              overflow-hidden
              rounded-[19px]
              bg-gradient-to-br
              ${color}
              text-[27px]
              shadow-[0_10px_25px_rgba(0,0,0,0.22)]
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:shadow-[0_12px_30px_rgba(223,174,69,0.15)]
            `}
          >
            {/* Icon Shine */}
            <span className="pointer-events-none absolute -left-10 top-0 h-full w-8 rotate-[25deg] bg-white/20 blur-sm transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative z-10">{icon}</span>
          </div>

          {/* Arrow */}
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.035]
              transition-all
              duration-300
              group-hover:border-[#DFAE45]/30
              group-hover:bg-[#DFAE45]/10
            "
          >
            <ArrowUpRight
              size={16}
              strokeWidth={2.2}
              className="text-gray-500 transition-all duration-300 group-hover:text-[#DFAE45] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>

        {/* ================= BADGE ================= */}
        <div className="relative mt-4 flex items-center gap-1.5">
          <Sparkles
            size={11}
            strokeWidth={2}
            className="text-[#DFAE45]"
          />

          <span className="text-[8px] font-bold uppercase tracking-[1.5px] text-[#DFAE45]">
            Premium Service
          </span>
        </div>

        {/* ================= TITLE ================= */}
        <h3
          className="
            relative
            mt-2.5
            line-clamp-2
            min-h-[40px]
            text-[15px]
            font-extrabold
            leading-5
            tracking-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-[#FFD86A]
          "
        >
          {title}
        </h3>

        {/* ================= PRICE ================= */}
        <div className="relative mt-3">
          <p className="text-[8px] font-medium uppercase tracking-[1.2px] text-gray-600">
            Starting from
          </p>

          <p className="mt-0.5 text-[17px] font-extrabold tracking-tight text-[#DFAE45]">
            {price}
          </p>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="relative my-3.5 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

        {/* ================= TRUST + CTA ================= */}
        <div className="relative mt-auto">
          <div className="mb-3 flex items-center gap-1.5">
            <CheckCircle2
              size={12}
              strokeWidth={2}
              className="text-green-400"
            />

            <span className="text-[9px] font-medium text-gray-500">
              Professional &amp; business-ready
            </span>
          </div>

          <div
            className="
              flex
              h-[40px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-[#DFAE45]/20
              bg-[#DFAE45]/[0.07]
              text-[10px]
              font-extrabold
              text-[#DFAE45]
              transition-all
              duration-300
              group-hover:border-[#DFAE45]/40
              group-hover:bg-[#DFAE45]
              group-hover:text-black
            "
          >
            <span>View Details</span>

            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>

        {/* ================= BOTTOM GLOW ================= */}
        <div className="pointer-events-none absolute -bottom-16 left-1/2 h-24 w-32 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.04] blur-2xl transition-all duration-500 group-hover:bg-[#DFAE45]/[0.08]" />
      </article>
    </Link>
  );
}

