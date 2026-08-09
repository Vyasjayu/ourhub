"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { popularOfflinePoojas } from "@/data/offlinePoojaData";

export default function PopularPoojas() {
  const router = useRouter();

  return (
    <section className="mt-7 px-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[18px] font-semibold text-yellow-400">
          Popular Poojas
        </h2>

        <button
          onClick={() => router.push("/offline-pooja/poojas")}
          className="flex items-center gap-1 text-xs text-yellow-400"
        >
          View All
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {popularOfflinePoojas.map((pooja) => (
          <div
            key={pooja.id}
            className="overflow-hidden rounded-xl border border-yellow-500/20 bg-[#0b1118]"
          >
            <div className="relative aspect-square">
              <Image
                src={pooja.image}
                alt={pooja.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-2">
              <h3 className="min-h-[30px] text-[10px] font-medium leading-4 text-white">
                {pooja.name}
              </h3>

              <p className="mt-1 text-[12px] font-bold text-green-400">
                ₹ {pooja.price.toLocaleString("en-IN")}
              </p>

              <p className="text-[8px] text-gray-500">
                Onwards
              </p>

              <button
                onClick={() =>
                  router.push(
                    `/offline-pooja/pooja/${pooja.id}`
                  )
                }
                className="mt-2 w-full rounded-md bg-yellow-400 py-1.5 text-[9px] font-bold text-black"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}