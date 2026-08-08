"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative px-4 pt-4">

      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-yellow-500/20
          bg-gradient-to-br
          from-[#12213A]
          via-[#0A1627]
          to-[#07101D]
          shadow-[0_0_35px_rgba(250,204,21,.10)]
        "
      >
        {/* Background Glow */}

        <div className="absolute -top-20 right-[-40px] h-52 w-52 rounded-full bg-yellow-500/20 blur-[90px]" />
        <div className="absolute bottom-[-50px] left-[-40px] h-44 w-44 rounded-full bg-orange-500/20 blur-[90px]" />

        {/* Image */}

        <div className="relative h-[230px]">

          <Image
            src="/images/banners/pooja-hero.jpg"
            alt="Pooja Services"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071424] via-[#07142440] to-transparent" />
        </div>

        {/* Content */}

        <div className="relative px-5 pb-5">

          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1">

            <ShieldCheck
              size={15}
              className="text-yellow-400"
            />

            <span className="text-xs font-semibold text-yellow-300">
              Trusted by 50,000+ Devotees
            </span>

          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white">
            Book
            <span className="text-yellow-400">
              {" "}Verified{" "}
            </span>
            Pandit Ji
            <br />
            For Every Pooja
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Online & Offline Pooja Booking with experienced
            Vedic Pandits across India.
          </p>

          {/* Bottom */}

          <div className="mt-6 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-2">

                <Star
                  size={15}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="text-sm font-semibold text-white">
                  4.9 Rating
                </span>

              </div>

              <div className="rounded-full bg-green-500/20 px-3 py-2 text-sm font-semibold text-green-300">
                24×7 Support
              </div>

            </div>

            <Link
              href="/booking"
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-yellow-400
                px-5
                py-3
                font-bold
                text-[#071424]
                transition
                hover:scale-105
              "
            >
              Book Now

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}