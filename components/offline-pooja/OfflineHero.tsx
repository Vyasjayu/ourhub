
"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Landmark,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { useLanguage } from "@/context/LanguageContext";

export default function OfflineHero() {
  const router = useRouter();
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <section className="relative px-4 pt-4">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-44 w-72 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.08] blur-3xl" />

      <div className="group relative h-[390px] overflow-hidden rounded-[28px] border border-[#DFAE45]/25 bg-[#080D14] shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
        {/* Background Image */}
        <Image
          src="/images/offline-pooja/temple-hero.jpg"
          alt={isHindi ? "पवित्र मंदिर" : "Sacred Temple"}
          fill
          priority
          sizes="(max-width: 430px) 100vw, 430px"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/95" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        {/* Gold atmospheric glow */}
        <div className="pointer-events-none absolute -right-20 top-10 h-52 w-52 rounded-full bg-[#DFAE45]/[0.10] blur-3xl" />

        {/* Top badge */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-[#DFAE45]/25 bg-black/45 px-3 py-1.5 backdrop-blur-xl">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DFAE45]/15">
            <Sparkles
              size={11}
              className="text-[#F3C75F]"
              fill="currentColor"
            />
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#F3C75F]">
            {isHindi ? "पवित्र अनुभव" : "Sacred Experience"}
          </span>
        </div>

        {/* Online / verified indicator */}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          <span className="text-[9px] font-semibold text-white">
            {isHindi ? "उपलब्ध" : "Available"}
          </span>
        </div>

        {/* Main Content */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          {/* Small label */}
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-7 bg-[#DFAE45]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
              {isHindi ? "दिव्य मंदिर पूजा" : "Divine Temple Pooja"}
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[310px] text-[30px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
            {isHindi ? (
              <>
                पवित्र अनुष्ठान
                <br />
                <span className="bg-gradient-to-r from-[#F7D77A] via-[#DFAE45] to-[#B98222] bg-clip-text text-transparent">
                  दिव्य मंदिरों में
                </span>
              </>
            ) : (
              <>
                Sacred Rituals
                <br />
                <span className="bg-gradient-to-r from-[#F7D77A] via-[#DFAE45] to-[#B98222] bg-clip-text text-transparent">
                  At Divine Temples
                </span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-[315px] text-[13px] leading-[1.65] text-slate-200/90">
            {isHindi
              ? "हमारे प्रमाणित पंडित आपकी चुनी हुई मंदिर में पूरे समर्पण और पारदर्शिता के साथ प्रामाणिक अनुष्ठान संपन्न करते हैं।"
              : "Let our verified pandits perform authentic rituals at your selected temple with complete devotion and transparency."}
          </p>

          {/* Rating strip */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/35 px-2.5 py-1.5 backdrop-blur-md">
              <Star
                size={12}
                className="text-[#F3C75F]"
                fill="currentColor"
              />

              <span className="text-[10px] font-bold text-white">
                4.9
              </span>
            </div>

            <div className="h-3 w-px bg-white/20" />

            <div className="flex items-center gap-1.5">
              <BadgeCheck
                size={13}
                className="text-[#F3C75F]"
                fill="currentColor"
              />

              <span className="text-[10px] font-medium text-slate-200">
                {isHindi
                  ? "प्रमाणित मंदिर सेवा"
                  : "Verified Temple Service"}
              </span>
            </div>
          </div>

          {/* Trust Points */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {/* Item 1 */}
            <div className="rounded-2xl border border-white/[0.08] bg-black/30 p-2.5 backdrop-blur-md">
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <Landmark
                  size={14}
                  className="text-[#F3C75F]"
                />
              </div>

              <p className="text-[9px] font-semibold leading-3.5 text-white">
                {isHindi ? (
                  <>
                    वास्तविक मंदिर
                    <br />
                    अनुभव
                  </>
                ) : (
                  <>
                    Real Temple
                    <br />
                    Experience
                  </>
                )}
              </p>
            </div>

            {/* Item 2 */}
            <div className="rounded-2xl border border-white/[0.08] bg-black/30 p-2.5 backdrop-blur-md">
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <ShieldCheck
                  size={14}
                  className="text-[#F3C75F]"
                />
              </div>

              <p className="text-[9px] font-semibold leading-3.5 text-white">
                {isHindi ? (
                  <>
                    प्रमाणित
                    <br />
                    पंडित
                  </>
                ) : (
                  <>
                    Verified
                    <br />
                    Pandits
                  </>
                )}
              </p>
            </div>

            {/* Item 3 */}
            <div className="rounded-2xl border border-white/[0.08] bg-black/30 p-2.5 backdrop-blur-md">
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <ScrollText
                  size={14}
                  className="text-[#F3C75F]"
                />
              </div>

              <p className="text-[9px] font-semibold leading-3.5 text-white">
                {isHindi ? (
                  <>
                    पूर्ण
                    <br />
                    पारदर्शिता
                  </>
                ) : (
                  <>
                    Complete
                    <br />
                    Transparency
                  </>
                )}
              </p>
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={() => router.push("/pooja/offline/book")}
            className="group/btn relative mt-4 flex h-[52px] w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#F3C75F] via-[#DFAE45] to-[#B98222] text-[14px] font-extrabold text-black shadow-[0_10px_30px_rgba(223,174,69,0.25)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(223,174,69,0.35)] active:scale-[0.98]"
          >
            {/* Shine */}
            <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover/btn:left-[110%]" />

            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-xl bg-black/10">
              <Landmark size={17} strokeWidth={2.2} />
            </span>

            <span className="relative z-10">
              {isHindi ? "ऑफलाइन पूजा बुक करें" : "Book Offline Pooja"}
            </span>

            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover/btn:translate-x-1">
              <ArrowRight size={17} />
            </span>
          </button>
        </div>

        {/* Bottom highlight */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent" />
      </div>

      {/* Slider indicators */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="h-1.5 w-8 rounded-full bg-[#DFAE45] shadow-[0_0_10px_rgba(223,174,69,0.5)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
      </div>

      {/* Bottom micro trust text */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <ShieldCheck
          size={11}
          className="text-[#DFAE45]"
        />

        <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-slate-500">
          {isHindi
            ? "प्रामाणिक • प्रमाणित • विश्वसनीय"
            : "Authentic • Verified • Trusted"}
        </span>

        <ShieldCheck
          size={11}
          className="text-[#DFAE45]"
        />
      </div>
    </section>
  );
}

