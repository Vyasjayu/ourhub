"use client";

import Image from "next/image";

export default function PremiumBanner() {
  return (
    <section className="mt-8">

      <div className="relative overflow-hidden rounded-[28px]">

        <Image
          src="/banners/premium-pooja.png"
          alt=""
          width={600}
          height={300}
          className="h-[190px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex flex-col justify-center p-6">

          <span className="text-yellow-400 font-semibold">
            OURHUB PREMIUM
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-white">
            Book VIP Temple Pooja
          </h2>

          <p className="mt-2 text-sm text-gray-200">
            Special Pandits • HD Live • Prasad Delivery
          </p>

          <button className="mt-5 w-40 rounded-2xl bg-yellow-400 py-3 font-bold text-black">
            Explore
          </button>

        </div>

      </div>

    </section>
  );
}