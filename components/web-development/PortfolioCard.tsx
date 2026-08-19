"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
        w-[285px]
        min-w-[285px]
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/20
        bg-[#111C30]
        shadow-[0_8px_30px_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-yellow-400/40
        hover:shadow-[0_12px_35px_rgba(244,197,66,0.12)]
        snap-start
      "
    >
      {/* ================= IMAGE ================= */}

      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="285px"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Category */}

        <div
          className="
            absolute
            left-3
            top-3
            rounded-full
            border
            border-yellow-300/20
            bg-yellow-400
            px-3
            py-1
            text-[10px]
            font-bold
            uppercase
            tracking-wide
            text-black
            shadow-lg
          "
        >
          {category}
        </div>

        {/* Arrow */}

        <div
          className="
            absolute
            right-3
            top-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/40
            backdrop-blur-md
          "
        >
          <ArrowUpRight
            size={15}
            className="text-white"
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-4">

        {/* TITLE */}

        <h3
          className="
            line-clamp-1
            text-base
            font-bold
            text-white
          "
        >
          {title}
        </h3>

        {/* PRICE */}

        <p className="mt-2 text-xl font-extrabold text-yellow-400">
          {price}
        </p>

        {/* TECHNOLOGY */}

        <div className="mt-3 flex gap-1.5 overflow-hidden">
          {technology.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="
                shrink-0
                rounded-full
                border
                border-yellow-500/20
                bg-yellow-500/10
                px-2.5
                py-1
                text-[9px]
                font-medium
                text-yellow-300
              "
            >
              {tech}
            </span>
          ))}

          {technology.length > 3 && (
            <span
              className="
                shrink-0
                rounded-full
                border
                border-white/10
                bg-white/5
                px-2.5
                py-1
                text-[9px]
                text-gray-400
              "
            >
              +{technology.length - 3}
            </span>
          )}
        </div>

        {/* DIVIDER */}

        <div className="my-4 h-px bg-white/[0.06]" />

        {/* BUTTONS */}

        <div className="flex gap-2">

          <Link
            href={`/web-development/project/${slug}`}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-1.5
              rounded-full
              bg-yellow-400
              py-2.5
              text-xs
              font-extrabold
              text-black
              transition
              hover:bg-yellow-300
              active:scale-[0.97]
            "
          >
            View Details
            <ArrowUpRight size={14} />
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
              rounded-full
              border
              border-yellow-500/20
              bg-[#0D1525]
              transition
              hover:border-yellow-400/50
              hover:bg-yellow-400/10
              active:scale-[0.95]
            "
          >
            <ArrowUpRight
              className="text-yellow-400"
              size={18}
            />
          </Link>

        </div>
      </div>
    </article>
  );
}