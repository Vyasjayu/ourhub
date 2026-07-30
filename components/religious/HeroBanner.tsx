"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden rounded-[28px] border border-yellow-500/20 bg-[#081423]">

      <Image
        src="/images/religious/hero-banner.png"
        alt="Hero Banner"
        width={1200}
        height={600}
        priority
        className="w-full h-auto object-cover"
      />

    </section>
  );
}