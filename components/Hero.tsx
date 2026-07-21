"use client";

import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import ServiceCircle from "./ServiceCircle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071321] pt-24 pb-10">

      {/* Background Glow */}

      <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[120px]" />

      <div className="absolute right-0 top-40 h-40 w-40 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-md px-5">

        {/* Logo */}

        <div className="flex justify-center">

          <Image
            src="/ourhub-logo.png"
            alt="OurHub"
            width={220}
            height={80}
            priority
          />

        </div>

        {/* Heading */}

        <div className="mt-10 text-center">

          <h2 className="text-5xl font-extrabold leading-tight text-white">

            Everything
            <br />
            You Need,

          </h2>

          <h3 className="mt-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-5xl font-extrabold text-transparent">

            One Platform.

          </h3>

          <p className="mt-6 text-gray-300 leading-8 text-lg">

            Religious, Home Services,
            Travel, Software,
            Agriculture Equipment,
            Automobile, Marketing,
            Construction and much more.

          </p>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          <button className="flex-1 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 py-4 font-bold text-black flex items-center justify-center gap-2">

            Explore

            <ArrowRight size={20} />

          </button>

          <button className="rounded-2xl border border-white/20 bg-white/10 px-5 text-white">

            <CalendarDays size={24} />

          </button>

        </div>

        {/* Circle */}

        {/* <div className="mt-12">

          <ServiceCircle />

        </div> */}

      </div>

    </section>
  );
}