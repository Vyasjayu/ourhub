"use client";

import { ArrowLeft, Code2, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const router = useRouter();
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const t = {
    goBack: isHindi ? "वापस जाएं" : "Go back",
    webDevelopment: isHindi ? "वेब डेवलपमेंट" : "Web Development",
    premiumWebsiteDesign: isHindi
      ? "प्रीमियम वेबसाइट डिजाइन सर्विसेज"
      : "Premium Website Design Services",
    pro: "Pro",
    ourHub: "OurHub",
    digitalStudio: isHindi ? "डिजिटल स्टूडियो" : "Digital Studio",
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050B14]/90 backdrop-blur-2xl">
      {/* =====================================================
          PREMIUM TOP GLOW
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/60 to-transparent"
      />

      <div className="relative mx-auto flex max-w-[430px] items-center px-4 py-3.5">

        {/* =================================================
            BACK BUTTON
        ================================================== */}
        <button
          type="button"
          onClick={() => router.back()}
          aria-label={t.goBack}
          className="
            group
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.08]
            bg-white/[0.045]
            shadow-[0_8px_25px_rgba(0,0,0,0.18)]
            transition-all
            duration-200
            hover:border-[#DFAE45]/30
            hover:bg-[#DFAE45]/10
            active:scale-95
          "
        >
          <ArrowLeft
            size={19}
            strokeWidth={2.2}
            className="text-white transition-transform duration-200 group-hover:-translate-x-0.5"
          />
        </button>

        {/* =================================================
            HEADER CONTENT
        ================================================== */}
        <div className="ml-3.5 flex min-w-0 flex-1 items-center gap-3">

          {/* Icon */}
          <div
            className="
              relative
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              border-[#DFAE45]/20
              bg-gradient-to-br
              from-[#DFAE45]/15
              to-[#DFAE45]/[0.03]
              shadow-[0_8px_25px_rgba(223,174,69,0.08)]
            "
          >
            <Code2
              size={19}
              strokeWidth={2}
              className="text-[#E7B94F]"
            />

            <div className="absolute -right-1 -top-1">
              <Sparkles
                size={11}
                className="text-[#FFD76A]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="min-w-0">

            <div className="flex items-center gap-2">

              <h1 className="truncate text-[16px] font-extrabold tracking-[-0.02em] text-white">
                {t.webDevelopment}
              </h1>

              <span
                className="
                  hidden
                  min-[380px]:inline-flex
                  rounded-full
                  border
                  border-[#DFAE45]/20
                  bg-[#DFAE45]/10
                  px-1.5
                  py-0.5
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#E7B94F]
                "
              >
                {t.pro}
              </span>

            </div>

            <div className="mt-0.5 flex items-center gap-1.5">

              {/* Status Dot */}
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>

              <p className="truncate text-[10px] font-medium tracking-wide text-slate-400">
                {t.premiumWebsiteDesign}
              </p>

            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT GOLD ACCENT
        ================================================== */}
        <div className="ml-2 hidden items-center min-[390px]:flex">

          <div className="h-7 w-px bg-white/[0.06]" />

          <div className="ml-3 flex flex-col items-end">

            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-slate-500">
              {t.ourHub}
            </span>

            <span className="mt-0.5 text-[9px] font-semibold text-[#DFAE45]">
              {t.digitalStudio}
            </span>

          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM SUBTLE HIGHLIGHT
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
      />
    </header>
  );
}