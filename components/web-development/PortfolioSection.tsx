"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { webProjects } from "@/data/webPortfolio";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioSection() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const t = {
    ourWork: isHindi ? "हमारा काम" : "Our Work",

    recentProjects: isHindi
      ? "हाल के प्रोजेक्ट्स"
      : "Recent Projects",

    description: isHindi
      ? "OurHub द्वारा तैयार की गई प्रीमियम वेबसाइट्स की एक झलक।"
      : "A glimpse of premium websites crafted by OurHub.",

    projects: isHindi
      ? "प्रोजेक्ट्स"
      : "Projects",

    explorePortfolio: isHindi
      ? "हमारा पोर्टफोलियो देखें"
      : "Explore Our Portfolio",

    portfolioDescription: isHindi
      ? "बिज़नेस • ई-कॉमर्स • लैंडिंग पेज"
      : "Business • E-commerce • Landing Pages",

    selectedWork: isHindi
      ? "चुने हुए प्रोजेक्ट्स"
      : "Selected Work",

    swipe: isHindi
      ? "स्वाइप करें →"
      : "Swipe →",

    yourBusinessNext: isHindi
      ? "आपका बिज़नेस अगला हो सकता है"
      : "Your business could be next",

    letsCreate: isHindi
      ? "आइए कुछ"
      : "Let's create something",

    exceptional: isHindi
      ? " शानदार बनाएं।"
      : " exceptional.",

    bottomDescription: isHindi
      ? "आइडिया से लॉन्च तक, हम ग्रोथ के लिए तैयार वेबसाइट्स बनाते हैं।"
      : "From idea to launch, we build websites designed to grow.",

    exploreWebDevelopment: isHindi
      ? "वेब डेवलपमेंट देखें"
      : "Explore web development",

    craftedWithPrecision: isHindi
      ? "सटीकता के साथ तैयार"
      : "Crafted with precision",

    builtForResults: isHindi
      ? "रिज़ल्ट्स के लिए बनाया गया"
      : "Built for results",
  };

  return (
    <section className="relative mt-12 w-full overflow-hidden">
      {/* ================= AMBIENT GLOW ================= */}
      <div className="pointer-events-none absolute -left-24 top-16 h-52 w-52 rounded-full bg-[#DFAE45]/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -right-28 top-40 h-64 w-64 rounded-full bg-blue-500/[0.035] blur-3xl" />

      {/* ================= HEADER ================= */}
      <div className="relative px-4">
        <div className="flex items-start justify-between gap-3">
          {/* Left */}
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <BriefcaseBusiness
                  size={16}
                  strokeWidth={2}
                  className="text-[#DFAE45]"
                />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                {t.ourWork}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-6 w-1 rounded-full bg-gradient-to-b from-[#FFD86A] to-[#DFAE45]" />

              <h2 className="text-[24px] font-extrabold tracking-tight text-white">
                {t.recentProjects}
              </h2>
            </div>

            <p className="mt-2 pl-3 text-[13px] leading-5 text-gray-400">
              {t.description}
            </p>
          </div>

          {/* Project Count */}
          <div className="shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-center backdrop-blur-xl">
            <p className="text-[17px] font-extrabold text-[#DFAE45]">
              {webProjects.length}+
            </p>

            <p className="text-[8px] font-semibold uppercase tracking-[1px] text-gray-500">
              {t.projects}
            </p>
          </div>
        </div>

        {/* ================= VIEW ALL ================= */}
        <Link
          href="/web-development/portfolio"
          className="group mt-5 flex w-full items-center justify-between rounded-2xl border border-[#DFAE45]/10 bg-gradient-to-r from-[#0B1626] to-[#09121F] px-4 py-3 transition-all duration-300 hover:border-[#DFAE45]/30 active:scale-[0.99]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <Sparkles
                size={16}
                className="text-[#DFAE45]"
                strokeWidth={2}
              />
            </div>

            <div>
              <p className="text-[12px] font-bold text-white">
                {t.explorePortfolio}
              </p>

              <p className="mt-0.5 text-[10px] text-gray-500">
                {t.portfolioDescription}
              </p>
            </div>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-[#DFAE45]/30 group-hover:bg-[#DFAE45]/10">
            <ChevronRight
              size={16}
              className="text-[#DFAE45] transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </div>
        </Link>
      </div>

      {/* ================= SECTION LABEL ================= */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#DFAE45] shadow-[0_0_10px_rgba(223,174,69,0.7)]" />

            <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-gray-500">
              {t.selectedWork}
            </span>
          </div>

          <span className="text-[9px] font-medium text-gray-600">
            {t.swipe}
          </span>
        </div>
      </div>

      {/* ================= PROJECT CAROUSEL ================= */}
      <div className="relative mt-4">
        {/* Left Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-5 bg-gradient-to-r from-[#050B14] to-transparent" />

        {/* Right Edge Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-8 bg-gradient-to-l from-[#050B14] to-transparent" />

        <div
          className="
            w-full
            overflow-x-auto
            overflow-y-hidden
            scroll-smooth
            snap-x
            snap-mandatory
            touch-pan-x
            overscroll-x-contain
            scrollbar-hide
          "
        >
          <div className="flex w-max gap-4 px-4 pb-4 pt-1">
            {webProjects.map((item, index) => (
              <div
                key={item.id}
                className="group relative w-[285px] min-w-[285px] shrink-0 snap-center"
              >
                {/* Number Badge */}
                <div className="pointer-events-none absolute -left-1 -top-2 z-30 flex h-7 min-w-7 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#07111E]/95 px-2 shadow-[0_8px_25px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  <span className="text-[9px] font-extrabold tracking-wider text-[#DFAE45]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Premium Glow */}
                <div className="pointer-events-none absolute -inset-[1px] rounded-[28px] bg-gradient-to-b from-[#DFAE45]/20 via-transparent to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

                <PortfolioCard
                  slug={item.slug}
                  title={item.title}
                  image={item.image}
                  category={item.category}
                  technology={item.technology}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SWIPE INDICATOR ================= */}
      {webProjects.length > 1 && (
        <div className="mt-1 flex items-center justify-center gap-3 px-4">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/10" />

          <div className="flex items-center gap-1.5">
            {webProjects
              .slice(0, Math.min(webProjects.length, 5))
              .map((item, index) => (
                <span
                  key={item.id}
                  className={`rounded-full transition-all ${
                    index === 0
                      ? "h-1.5 w-4 bg-[#DFAE45]"
                      : "h-1.5 w-1.5 bg-white/15"
                  }`}
                />
              ))}
          </div>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      )}

      {/* ================= BOTTOM CTA ================= */}
      <div className="mt-6 px-4">
        <div className="relative overflow-hidden rounded-3xl border border-[#DFAE45]/15 bg-gradient-to-br from-[#0D1928] via-[#091321] to-[#07101C] p-5">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

                <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-green-400">
                  {t.yourBusinessNext}
                </span>
              </div>

              <h3 className="text-[17px] font-extrabold leading-tight text-white">
                {t.letsCreate}
                <span className="text-[#DFAE45]">
                  {t.exceptional}
                </span>
              </h3>

              <p className="mt-1.5 text-[10px] leading-4 text-gray-500">
                {t.bottomDescription}
              </p>
            </div>

            <Link
              href="/web-development"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45] text-black shadow-[0_10px_30px_rgba(223,174,69,0.18)] transition-all duration-300 hover:bg-[#FFD86A] active:scale-95"
              aria-label={t.exploreWebDevelopment}
            >
              <ArrowRight
                size={19}
                strokeWidth={2.5}
              />
            </Link>
          </div>

          {/* Bottom Accent */}
          <div className="relative mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-3">
            <span className="text-[9px] font-medium text-gray-600">
              {t.craftedWithPrecision}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#DFAE45]/50" />

            <span className="text-[9px] font-medium text-gray-600">
              {t.builtForResults}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}