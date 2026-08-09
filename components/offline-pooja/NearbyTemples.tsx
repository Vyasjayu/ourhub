"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { useRouter } from "next/navigation";

import { nearbyTemples } from "@/data/offlinePoojaData";

export default function NearbyTemples() {
  const router = useRouter();

  return (
    <section className="mt-7 px-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[18px] font-semibold text-yellow-400">
          Top Temples Near You
        </h2>

        <button
          onClick={() =>
            router.push("/offline-pooja/temples")
          }
          className="flex items-center gap-1 text-xs text-yellow-400"
        >
          View All
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {nearbyTemples.map((temple) => (
          <button
            key={temple.id}
            onClick={() =>
              router.push(
                `/offline-pooja/temples/${temple.id}`
              )
            }
            className="overflow-hidden rounded-xl border border-yellow-500/15 bg-[#0b1118] text-left"
          >
            <div className="relative aspect-[0.82]">
              <Image
                src={temple.image}
                alt={temple.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-2">
              <h3 className="line-clamp-2 text-[9px] font-semibold leading-3 text-white">
                {temple.name}
              </h3>

              <div className="mt-2 flex items-center gap-1 text-[8px] text-gray-400">
                <MapPin size={10} />
                {temple.distance}
              </div>

              <div className="mt-1 flex items-center gap-1 text-[9px] font-semibold text-yellow-400">
                <Star size={10} fill="currentColor" />
                {temple.rating}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}