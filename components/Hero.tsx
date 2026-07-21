"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="mt-5 px-4">
      <div className="relative overflow-hidden rounded-[30px] border border-yellow-500/20 bg-gradient-to-br from-[#17120b] via-[#241706] to-[#111827] shadow-[0_20px_80px_rgba(0,0,0,.55)]">

        {/* Background Glow */}
        <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent" />

        <div className="relative flex min-h-[270px]">

          {/* LEFT */}

          <div className="flex w-[54%] flex-col justify-center px-6 py-6">

            <span className="mb-3 inline-flex w-fit rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-[11px] font-semibold text-yellow-300">
              ⭐ Trusted Platform
            </span>

            <h2 className="text-[34px] font-black leading-[37px] text-white">
              Everything
              <br />
              You Need,
            </h2>

            <h3 className="mt-1 text-[34px] font-black leading-[37px] text-yellow-400">
              One Platform
            </h3>

            <p className="mt-4 max-w-[220px] text-[14px] leading-6 text-slate-300">
              Find, Book & Get the best verified services near you.
            </p>

            <button className="mt-6 flex w-fit items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-bold text-black shadow-xl transition-all duration-300 hover:scale-105">
              Explore Now
              <ArrowRight size={18} />
            </button>

          </div>

          {/* RIGHT */}

          {/* RIGHT */}
          <div className="relative w-[40%] flex items-center justify-center">

            {/* Ring */}
            {/* <div className="absolute top-5 left-1/2 -translate-x-1/2 h-52 w-52 rounded-full border-[3px] border-yellow-400/70" /> */}

            {/* Glow */}
            {/* <div className="absolute top-5 left-1/2 -translate-x-1/2 h-52 w-52 rounded-full bg-yellow-400/20 blur-3xl" /> */}

            {/* Phone */}
            <Image
              src="/images/hero-phone.png"
              alt="Phone"
              width={170}
              height={320}
              className="relative z-20 h-auto"
              priority
            />

            {/* Technician */}
            <Image
              src="/images/technician.png"
              alt="Technician"
              width={90}
              height={150}
              className="absolute bottom-0 right-0 z-30 h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}