"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Video } from "lucide-react";

interface Props {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export default function PoojaCard({
  title,
  description,
  duration,
  price,
  image,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-r from-[#171d28] to-[#111827] shadow-lg">

      <div className="flex">

        {/* Image */}

        <div className="relative h-[135px] w-[120px] shrink-0">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />

        </div>

        {/* Content */}

        <div className="flex flex-1 justify-between p-4">

          {/* Left */}

          <div className="flex-1 pr-3">

            <h3 className="text-xl font-bold text-white">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {description}
            </p>

            <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">

              <span className="flex items-center gap-1">
                <Clock3
                  size={14}
                  className="text-yellow-400"
                />
                {duration}
              </span>

              <span className="flex items-center gap-1">
                <Video
                  size={14}
                  className="text-yellow-400"
                />
                Online
              </span>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col items-end justify-between">

            <div>

              <p className="text-3xl font-bold text-green-400">
                ₹ {price}
              </p>

              <p className="text-xs text-gray-400 text-right">
                Onwards
              </p>

            </div>

            <Link
              href="/pooja/book"
              className="rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-2.5 text-sm font-bold text-black transition hover:scale-105"
            >
              Book Now
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}