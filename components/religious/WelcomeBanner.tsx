"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WelcomeBanner() {
  return (
    <section className="px-4 mt-5">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#D4AF37] via-[#C89B2A] to-[#A67C00] p-5">

        {/* Background Glow */}
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-black/10 blur-3xl"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={18} className="text-white" />

            <span className="text-sm font-medium text-white/90">
              Trusted Religious Services
            </span>
          </div>

          <h2 className="text-2xl font-bold text-white leading-snug">
            🙏 Welcome to
            <br />
            Religious Services
          </h2>

          <p className="mt-3 text-white/90 text-sm leading-6">
            Book verified Pandits, Jyotish and Vastu Experts
            in just a few clicks.
          </p>

          <Link
          href="/religious/services"
            className="mt-6 inline-flex items-center justify-center 
 bg-[#071321] text-white 
 px-7 py-3 rounded-xl font-bold"
          >
            Explore Services

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}
// mt-5
              // h-11
              // px-5
              // rounded-xl
              // bg-[#071321]
              // text-white
              // font-semibold
              // flex
              // items-center
              // gap-2
              // active:scale-95
              // transition