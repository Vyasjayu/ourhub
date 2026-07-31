"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Star } from "lucide-react";

interface Props {
  id: string | number;
  title: string;
  image: string;
}

export default function TrendingCard({
  id,
  title,
  image,
}: Props) {
  return (
    <div
      className="
        group
        relative
        min-w-[185px]
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/20
        bg-gradient-to-b
        from-[#13233B]
        via-[#0D1828]
        to-[#08111C]
        shadow-[0_10px_30px_rgba(0,0,0,.35)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-yellow-400
        hover:shadow-[0_0_30px_rgba(250,204,21,.18)]
      "
    >
      {/* Image */}

      <div className="relative h-40 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Trending Badge */}

        <div
          className="
            absolute
            left-3
            top-3
            rounded-full
            bg-orange-500
            px-3
            py-1
            text-[10px]
            font-bold
            text-white
          "
        >
          🔥 Trending
        </div>

        {/* Wishlist */}

        <button
          className="
            absolute
            right-3
            top-3
            rounded-full
            bg-black/40
            p-2
            backdrop-blur
          "
        >
          <Heart
            size={16}
            className="text-white"
          />
        </button>

      </div>

      {/* Content */}

      <div className="p-4">

        {/* Rating */}

        <div className="mb-2 flex items-center gap-1">

          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-xs font-semibold text-yellow-300">
            4.9
          </span>

          <span className="text-xs text-slate-500">
            (2.1k)
          </span>

        </div>

        {/* Title */}

        <h3
          className="
            min-h-[44px]
            text-[15px]
            font-bold
            leading-5
            text-white
            line-clamp-2
          "
        >
          {title}
        </h3>

        {/* Price */}

        {/* <div className="mt-3 flex items-end gap-2">

          <span className="text-xl font-bold text-yellow-400">
            ₹499
          </span>

          <span className="pb-1 text-xs text-slate-400">
            Starting
          </span>

        </div> */}

        {/* Button */}

        <Link
          href={`/pooja/${id}`}
          className="
            mt-4
            flex
            h-11
            w-full
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-r
            from-yellow-400
            to-yellow-500
            font-semibold
            text-[#071424]
            transition
            hover:scale-[1.02]
          "
        >
          Book Now
        </Link>

      </div>
    </div>
  );
}