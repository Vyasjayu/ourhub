
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface PortfolioCardProps {
  slug: string;
  title: string;
  image: string;
  category: string;
  technology: string[];
  price: string;
}

export default function PortfolioCard({
  slug,
  title,
  image,
  category,
  technology,
  price,
}: PortfolioCardProps) {
  return (
    <article
      className="
        group
        relative
        w-[285px]
        min-w-[285px]
        overflow-hidden
        rounded-[27px]
        border
        border-white/[0.07]
        bg-[#0A1422]
        shadow-[0_20px_55px_rgba(0,0,0,0.32)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#DFAE45]/30
        hover:shadow-[0_25px_65px_rgba(0,0,0,0.45)]
      "
    >
      {/* =========================
          IMAGE
      ========================== */}

      <div className="relative h-[178px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="285px"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.07]
          "
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/25 via-transparent to-[#050B14]/90" />

        {/* Bottom image fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A1422] to-transparent" />

        {/* Gold ambient glow */}
        <div
          aria-hidden="true"
          className="
            absolute
            -right-10
            -top-10
            h-28
            w-28
            rounded-full
            bg-[#DFAE45]/10
            blur-2xl
          "
        />

        {/* =========================
            CATEGORY
        ========================== */}

        <div
          className="
            absolute
            left-3
            top-3
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-[#DFAE45]/25
            bg-[#050B14]/75
            px-3
            py-1.5
            shadow-[0_8px_20px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
          "
        >
          <Sparkles
            size={10}
            strokeWidth={2.5}
            className="text-[#E7B94F]"
          />

          <span className="max-w-[120px] truncate text-[8px] font-extrabold uppercase tracking-[0.13em] text-[#F1C45F]">
            {category}
          </span>
        </div>

        {/* =========================
            OPEN ICON
        ========================== */}

        <div
          className="
            absolute
            right-3
            top-3
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-[#050B14]/60
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:border-[#DFAE45]/30
            group-hover:bg-[#DFAE45]/10
          "
        >
          <ArrowUpRight
            size={16}
            strokeWidth={2.2}
            className="
              text-white
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </div>

        {/* =========================
            PROJECT LABEL
        ========================== */}

        <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />

          <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/70">
            Live Project
          </span>
        </div>
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="px-4 pb-4 pt-3">

        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-[16px]
                font-black
                tracking-[-0.025em]
                text-white
              "
            >
              {title}
            </h3>

            <div className="mt-1 flex items-center gap-1.5">
              <CheckCircle2
                size={11}
                strokeWidth={2.5}
                className="text-[#DFAE45]"
              />

              <span className="text-[8px] font-medium text-slate-500">
                Premium web solution
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="shrink-0 text-right">
            <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-slate-600">
              From
            </p>

            <p className="mt-0.5 text-[14px] font-black text-[#E7B94F]">
              {price}
            </p>
          </div>
        </div>

        {/* =========================
            TECHNOLOGY
        ========================== */}

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-600">
              Technology
            </span>

            {technology.length > 3 && (
              <span className="text-[7px] font-semibold text-slate-600">
                +{technology.length - 3} more
              </span>
            )}
          </div>

          <div className="flex gap-1.5 overflow-hidden">
            {technology.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="
                  shrink-0
                  rounded-lg
                  border
                  border-white/[0.07]
                  bg-white/[0.035]
                  px-2.5
                  py-1.5
                  text-[8px]
                  font-bold
                  text-slate-400
                  transition
                  group-hover:border-[#DFAE45]/15
                  group-hover:text-[#DFAE45]
                "
              >
                {tech}
              </span>
            ))}

            {technology.length > 3 && (
              <span
                className="
                  shrink-0
                  rounded-lg
                  border
                  border-white/[0.05]
                  bg-white/[0.02]
                  px-2
                  py-1.5
                  text-[8px]
                  font-bold
                  text-slate-600
                "
              >
                +{technology.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

        {/* =========================
            ACTIONS
        ========================== */}

        <div className="flex gap-2">
          <Link
            href={`/web-development/project/${slug}`}
            className="
              group/button
              flex
              h-10
              flex-1
              items-center
              justify-center
              gap-1.5
              rounded-xl
              bg-[#DFAE45]
              text-[9px]
              font-extrabold
              text-black
              shadow-[0_8px_22px_rgba(223,174,69,0.12)]
              transition-all
              duration-200
              hover:bg-[#E7B94F]
              hover:shadow-[0_10px_28px_rgba(223,174,69,0.20)]
              active:scale-[0.97]
            "
          >
            <span>View Project</span>

            <ArrowUpRight
              size={13}
              strokeWidth={2.5}
              className="
                transition-transform
                duration-200
                group-hover/button:-translate-y-0.5
                group-hover/button:translate-x-0.5
              "
            />
          </Link>

          <Link
            href={`/web-development/project/${slug}`}
            aria-label={`View ${title}`}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              transition-all
              duration-200
              hover:border-[#DFAE45]/30
              hover:bg-[#DFAE45]/[0.07]
              active:scale-95
            "
          >
            <ExternalLink
              size={14}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />
          </Link>
        </div>
      </div>

      {/* =========================
          HOVER BORDER GLOW
      ========================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[27px]
          border
          border-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:border-[#DFAE45]/10
          group-hover:opacity-100
        "
      />

      {/* =========================
          IMAGE SHINE
      ========================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-[120%]
          z-20
          w-[55%]
          rotate-[18deg]
          bg-gradient-to-r
          from-transparent
          via-white/[0.08]
          to-transparent
          transition-all
          duration-1000
          group-hover:left-[130%]
        "
      />
    </article>
  );
}

