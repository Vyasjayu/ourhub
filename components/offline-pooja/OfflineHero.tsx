"use client";

import Image from "next/image";
import { ArrowRight, Landmark, ShieldCheck, ScrollText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OfflineHero() {
  const router = useRouter();

  return (
    <section className="px-4 pt-4">
      <div className="relative h-[360px] overflow-hidden rounded-[20px] border border-yellow-500/20">
        {/* Background */}
        <Image
          src="/images/offline-pooja/temple-hero.jpg"
          alt="Sacred Temple"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h2 className="max-w-[280px] text-[28px] font-semibold leading-tight text-white">
            Sacred Rituals
            <br />
            <span className="text-yellow-400">
              At Divine Temples
            </span>
          </h2>

          <p className="mt-3 max-w-[285px] text-[14px] leading-6 text-gray-200">
            Our verified pandits will perform sacred pooja at
            your selected temple on your behalf.
          </p>

          {/* Trust points */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="flex items-center gap-1.5">
              <Landmark size={20} className="text-yellow-400" />

              <span className="text-[10px] leading-4 text-gray-200">
                Real Temple
                <br />
                Experience
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck size={20} className="text-yellow-400" />

              <span className="text-[10px] leading-4 text-gray-200">
                Verified
                <br />
                Pandits
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <ScrollText size={20} className="text-yellow-400" />

              <span className="text-[10px] leading-4 text-gray-200">
                Complete
                <br />
                Transparency
              </span>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => router.push("/offline-pooja/select-temple")}
            className="mt-5 flex h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 text-sm font-bold text-black shadow-lg shadow-yellow-500/10"
          >
            Book Offline Pooja
            <ArrowRight size={19} />
          </button>
        </div>
      </div>

      {/* Slider dots */}
      <div className="mt-3 flex justify-center gap-2">
        <span className="h-1.5 w-7 rounded-full bg-yellow-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
      </div>
    </section>
  );
}