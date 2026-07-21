"use client";

import { Gift, ArrowRight } from "lucide-react";

export default function Offer() {
  return (
    <section className="px-5 py-10">

      <div className="max-w-md mx-auto">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6 shadow-2xl">

          {/* Glow */}
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-black/20 blur-3xl" />

          <div className="relative flex items-center justify-between">

            <div>

              <div className="flex items-center gap-2">

                <Gift
                  size={26}
                  className="text-white"
                />

                <span className="text-white font-semibold">
                  Limited Time Offer
                </span>

              </div>

              <h2 className="mt-4 text-4xl font-extrabold text-white">

                20% OFF

              </h2>

              <p className="mt-2 text-white/90">

                On Your First Booking

              </p>

              <div className="mt-5">

                <span className="rounded-xl bg-white/20 px-4 py-2 text-white font-bold tracking-widest">

                  OURHUB20

                </span>

              </div>

            </div>

            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">

              <Gift
                className="text-white"
                size={40}
              />

            </div>

          </div>

          <button className="relative mt-8 w-full rounded-2xl bg-white py-4 text-lg font-bold text-black flex items-center justify-center gap-2 hover:scale-105 transition">

            Claim Offer

            <ArrowRight size={20} />

          </button>

        </div>

      </div>
<div></div>
    </section>
  );
}