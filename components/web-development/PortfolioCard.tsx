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
    <div
      className="
      rounded-3xl
      bg-[#111C30]
      border
      border-yellow-500/20
      overflow-hidden
      "
    >
      {/* Image */}

      <div className="relative h-44 w-full">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <div
          className="
          absolute
          top-3
          left-3
          rounded-full
          bg-yellow-400
          px-3
          py-1
          text-xs
          font-semibold
          text-black
          "
        >
          {category}
        </div>

      </div>

      {/* Content */}

      <div className="p-4">

        <h3 className="text-lg font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-yellow-400 font-bold text-xl">
          {price}
        </p>

        {/* Technology */}

        <div className="mt-4 flex flex-wrap gap-2">

          {technology.map((tech) => (

            <span
              key={tech}
              className="
              rounded-full
              border
              border-yellow-500/30
              bg-yellow-500/10
              px-3
              py-1
              text-xs
              text-yellow-300
              "
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="mt-5 flex gap-3">

          <Link
            href={`/web-development/project/${slug}`}
            className="
            flex-1
            rounded-full
            bg-yellow-400
            py-3
            text-center
            font-bold
            text-black
            transition
            hover:scale-105
            "
          >
            View Details
          </Link>

          <Link
            href={`/web-development/project/${slug}`}
            className="
            h-12
            w-12
            rounded-full
            border
            border-yellow-500/20
            bg-[#0D1525]
            flex
            items-center
            justify-center
            "
          >
            <ArrowUpRight
              className="text-yellow-400"
              size={20}
            />
          </Link>

        </div>

      </div>
    </div>
  );
}