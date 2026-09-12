
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Video,
  Landmark,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function OnlineOfflineCard() {
  return (
    <section className="mt-8 px-0">
      <div className="group relative overflow-hidden rounded-[30px] border border-[#DFAE45]/30 bg-[#080D16] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

        {/* Ambient Gold Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#DFAE45]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-[#DFAE45]/5 blur-3xl" />

        {/* Temple Background */}
        <Image
          src="/pooja/temple.jpg"
          alt="Sacred temple"
          fill
          priority
          className="object-cover opacity-[0.28] transition duration-700 group-hover:scale-105"
        />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#071424]/95 to-[#071424]/55" />

        {/* Top Gold Glow */}
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 p-5 sm:p-6">

          {/* Heading */}
          <div className="flex items-start justify-between gap-3">

            <div>
              {/* Eyebrow */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 px-3 py-1.5">
                <Sparkles
                  size={13}
                  className="text-[#F3C75F]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F3C75F]">
                  Sacred Experiences
                </span>
              </div>

              <h2 className="flex items-center gap-2 text-[23px] font-bold tracking-tight text-white">
                Online
                <span className="text-[#DFAE45]">&</span>
                Offline Pooja
              </h2>

              <p className="mt-2 max-w-[300px] text-[13px] leading-5 text-gray-400">
                Choose your preferred way to experience authentic
                rituals, blessings and divine traditions.
              </p>
            </div>

            {/* Decorative Icon */}
            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-black/30 sm:flex">
              <Sparkles
                size={19}
                className="text-[#DFAE45]"
              />
            </div>
          </div>

          {/* Trust Strip */}
          <div className="mt-5 flex items-center gap-2 overflow-hidden">

            <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-black/25 px-2.5 py-1.5">
              <ShieldCheck size={12} className="text-[#DFAE45]" />
              <span className="text-[10px] font-medium text-gray-300">
                Verified Pandits
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-black/25 px-2.5 py-1.5">
              <Star size={12} className="fill-[#DFAE45] text-[#DFAE45]" />
              <span className="text-[10px] font-medium text-gray-300">
                Trusted Service
              </span>
            </div>

          </div>

          {/* Experience Cards */}
          <div className="mt-5 grid grid-cols-2 gap-3">

            {/* ONLINE */}
            <Link
              href="/pooja/online"
              className="group/card relative overflow-hidden rounded-[24px] border border-[#DFAE45]/25 bg-[#0A111D]/90 p-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#DFAE45]/60 hover:bg-[#0D1624]"
            >
              {/* Card Glow */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#DFAE45]/10 blur-2xl transition duration-300 group-hover/card:bg-[#DFAE45]/20" />

              <div className="relative z-10">

                {/* Icon */}
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 to-transparent shadow-inner">
                    <Video
                      size={27}
                      strokeWidth={1.8}
                      className="text-[#F3C75F]"
                    />
                  </div>

                  <span className="rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#F3C75F]">
                    Live
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[18px] font-bold text-white">
                  Online Pooja
                </h3>

                <p className="mt-1.5 min-h-[54px] text-[11px] leading-5 text-gray-400">
                  Join sacred rituals from the comfort of your home.
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-[#DFAE45]/30 bg-[#DFAE45]/10 px-3 py-2.5 transition group-hover/card:bg-[#DFAE45]">
                  <span className="text-[11px] font-bold text-[#F3C75F] transition group-hover/card:text-black">
                    Book Online
                  </span>

                  <ArrowRight
                    size={15}
                    className="text-[#F3C75F] transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:text-black"
                  />
                </div>

              </div>
            </Link>

            {/* OFFLINE */}
            <Link
              href="/pooja/offline"
              className="group/card relative overflow-hidden rounded-[24px] border border-[#DFAE45]/25 bg-[#0A111D]/90 p-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#DFAE45]/60 hover:bg-[#0D1624]"
            >
              {/* Card Glow */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#DFAE45]/10 blur-2xl transition duration-300 group-hover/card:bg-[#DFAE45]/20" />

              <div className="relative z-10">

                {/* Icon */}
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 to-transparent shadow-inner">
                    <Landmark
                      size={27}
                      strokeWidth={1.8}
                      className="text-[#F3C75F]"
                    />
                  </div>

                  <span className="rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#F3C75F]">
                    Personal
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[18px] font-bold text-white">
                  Offline Pooja
                </h3>

                <p className="mt-1.5 min-h-[54px] text-[11px] leading-5 text-gray-400">
                  Invite an experienced Pandit to your home or temple.
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-[#DFAE45]/30 bg-[#DFAE45]/10 px-3 py-2.5 transition group-hover/card:bg-[#DFAE45]">
                  <span className="text-[11px] font-bold text-[#F3C75F] transition group-hover/card:text-black">
                    Book Offline
                  </span>

                  <ArrowRight
                    size={15}
                    className="text-[#F3C75F] transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:text-black"
                  />
                </div>

              </div>
            </Link>

          </div>

          {/* Bottom Note */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-gray-500">
              Divine • Authentic • Trusted
            </span>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

        </div>
      </div>
    </section>
  );
}


