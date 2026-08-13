"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="mt-5">
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[28px]
          border
          border-yellow-500/20
          bg-[#0B1627]
          shadow-[0_0_30px_rgba(255,193,7,0.06)]
        "
      >
        {/* Banner */}
        <div className="relative aspect-[2/1] w-full">
          <Image
            src="/banners/online-banner.png"
            alt="Online Pooja"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}