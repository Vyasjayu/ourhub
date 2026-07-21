"use client";

import Link from "next/link";
import { Gift, ArrowRight, Sparkles } from "lucide-react";

export default function OfferBanner() {
  return (
    <section className="px-4 mt-8">

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#D4AF37] via-[#C89B2A] to-[#8B6508] p-5 shadow-xl">

        {/* Background Glow */}
        <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/10 blur-3xl"></div>

        <div className="relative z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1">

            <Sparkles size={16} className="text-white" />

            <span className="text-sm font-medium text-white">
              Limited Time Offer
            </span>

          </div>

          {/* Title */}
          <h2 className="mt-4 text-3xl font-extrabold text-white">
            🎉 Get 20% OFF
          </h2>

          {/* Description */}
          <p className="mt-2 text-white/90 leading-6">
            Book your first Pandit, Jyotish or Vastu service
            and get an instant <strong>20% discount</strong>.
          </p>

          {/* Coupon */}
          <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#071321]/90 px-4 py-3">

            <div>

              <p className="text-xs text-gray-400">
                Coupon Code
              </p>

              <h3 className="text-xl font-bold tracking-widest text-[#D4AF37]">
                FIRST20
              </h3>

            </div>

            <Gift className="text-[#D4AF37]" size={34} />

          </div>

          {/* CTA */}
          <Link
            href="/religious/offers"
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#071321] text-white font-semibold active:scale-95 transition"
          >

            Claim Offer

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}