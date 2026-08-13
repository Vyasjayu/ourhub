"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Sparkles,
} from "lucide-react";

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
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#111c2b] via-[#0d1826] to-[#0a1420] p-2.5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-400/30">
      {/* GOLD GLOW */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative flex gap-3">
        {/* IMAGE */}
        <Link
          href={`/pooja/online/${slug}/book`}
          className="relative h-[112px] w-[105px] shrink-0 overflow-hidden rounded-xl"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="105px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* VERIFIED */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full border border-yellow-300/20 bg-black/50 px-2 py-1 backdrop-blur-md">
            <Sparkles
              size={9}
              className="text-yellow-400"
            />

            <span className="text-[8px] font-bold text-yellow-300">
              VERIFIED
            </span>
          </div>
        </Link>

        {/* CONTENT */}
        <div className="min-w-0 flex-1 py-0.5">
          {/* TITLE */}
          <Link
            href={`/pooja/online/${slug}/book`}
            className="block"
          >
            <h3 className="line-clamp-1 text-[15px] font-bold text-white transition-colors group-hover:text-yellow-400">
              {title}
            </h3>
          </Link>

          {/* DESCRIPTION */}
          <p className="mt-1 line-clamp-2 text-[10px] leading-[1.45] text-gray-400">
            {description}
          </p>

          {/* BOTTOM ROW */}
          <div className="mt-3 flex items-end justify-between gap-2">
            <div>
              {/* DURATION */}
              <div className="flex items-center gap-1 text-[9px] text-gray-500">
                <Clock3
                  size={11}
                  className="text-yellow-500"
                />

                <span>{duration}</span>
              </div>

              {/* PRICE */}
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-[9px] text-gray-500">
                  Starting
                </span>

                <span className="text-[17px] font-extrabold text-yellow-400">
                  ₹{price}
                </span>
              </div>
            </div>

            {/* BOOK BUTTON */}
            <Link
              href={`/pooja/online/${slug}/book`}
              className="flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-yellow-400 px-3 text-[10px] font-extrabold text-black shadow-md shadow-yellow-500/10 transition-all active:scale-95 hover:bg-yellow-300"
            >
              Book

              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}