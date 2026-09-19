"use client";

import {
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface Service {
  description: string;
}

interface Props {
  service: Service;
}

export default function ServiceOverview({
  service,
}: Props) {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const t = {
    serviceOverview: isHindi
      ? "सर्विस ओवरव्यू"
      : "Service Overview",

    aboutThisService: isHindi
      ? "इस सर्विस के बारे में"
      : "About This Service",

    premiumWebsiteDevelopment: isHindi
      ? "प्रीमियम वेबसाइट डेवलपमेंट"
      : "Premium Website Development",

    active: isHindi
      ? "सक्रिय"
      : "Active",

    businessReady: isHindi
      ? "बिज़नेस रेडी"
      : "Business Ready",

    professional: isHindi
      ? "प्रोफेशनल"
      : "Professional",

    premiumDesign: isHindi
      ? "प्रीमियम डिजाइन"
      : "Premium Design",

    modernUiUx: isHindi
      ? "मॉडर्न UI/UX"
      : "Modern UI/UX",

    bottomMessage: isHindi
      ? "आपके बिज़नेस गोल्स को ध्यान में रखकर क्वालिटी, परफॉर्मेंस और स्केलेबिलिटी के साथ तैयार किया गया।"
      : "Built around your business goals with quality, performance and scalability in mind.",
  };

  return (
    <section className="relative mt-8 overflow-hidden px-4">
      {/* Ambient glow */}

      <div className="pointer-events-none absolute -right-24 top-8 h-52 w-52 rounded-full bg-[#DFAE45]/[0.045] blur-[90px]" />

      <div
        className="
          group relative overflow-hidden
          rounded-[28px]
          border border-white/[0.07]
          bg-gradient-to-br
          from-[#101D2D]
          via-[#0B1726]
          to-[#07111D]
          p-5
          shadow-[0_18px_50px_rgba(0,0,0,0.22)]
        "
      >
        {/* Top highlight */}

        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/45 to-transparent" />

        {/* Decorative glow */}

        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl transition-all duration-500 group-hover:bg-[#DFAE45]/[0.14]" />

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="relative flex items-center gap-3">
          {/* Icon */}

          <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center overflow-hidden rounded-[18px] border border-[#DFAE45]/20 bg-[#DFAE45]/10 shadow-[0_10px_25px_rgba(223,174,69,0.08)]">
            {/* Shine */}

            <span className="pointer-events-none absolute -left-8 top-0 h-full w-6 rotate-[25deg] bg-white/15 blur-sm transition-all duration-700 group-hover:left-[120%]" />

            <FileText
              size={21}
              strokeWidth={1.8}
              className="relative z-10 text-[#DFAE45]"
            />
          </div>

          {/* Heading */}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <Sparkles
                size={10}
                strokeWidth={2.2}
                className="text-[#DFAE45]"
              />

              <span className="text-[8px] font-extrabold uppercase tracking-[1.5px] text-[#DFAE45]">
                {t.serviceOverview}
              </span>
            </div>

            <h2 className="mt-1 text-[18px] font-extrabold tracking-tight text-white">
              {t.aboutThisService}
            </h2>

            <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.8px] text-gray-600">
              {t.premiumWebsiteDevelopment}
            </p>
          </div>

          {/* Status */}

          <div className="hidden min-[390px]:flex shrink-0 items-center gap-1.5 rounded-full border border-green-400/10 bg-green-400/[0.05] px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_7px_rgba(74,222,128,0.7)]" />

            <span className="text-[7px] font-bold uppercase tracking-[0.7px] text-green-400">
              {t.active}
            </span>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="relative my-5 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        <div className="relative">
          {/* Quote mark */}

          <div className="pointer-events-none absolute -left-1 -top-4 select-none text-[52px] font-black leading-none text-[#DFAE45]/[0.08]">
            “
          </div>

          <p className="relative pl-2 text-[12px] leading-[1.9] text-gray-400">
            {service.description}
          </p>
        </div>

        {/* =====================================================
            VALUE POINTS
        ===================================================== */}

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {/* Business Ready */}

          <div className="flex items-center gap-2 rounded-2xl border border-white/[0.055] bg-white/[0.025] px-3 py-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-400/[0.07]">
              <CheckCircle2
                size={14}
                strokeWidth={2}
                className="text-green-400"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[8px] font-bold text-white">
                {t.businessReady}
              </p>

              <p className="mt-0.5 text-[7px] text-gray-600">
                {t.professional}
              </p>
            </div>
          </div>

          {/* Premium Design */}

          <div className="flex items-center gap-2 rounded-2xl border border-white/[0.055] bg-white/[0.025] px-3 py-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#DFAE45]/[0.07]">
              <Sparkles
                size={14}
                strokeWidth={2}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[8px] font-bold text-white">
                {t.premiumDesign}
              </p>

              <p className="mt-0.5 text-[7px] text-gray-600">
                {t.modernUiUx}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM TRUST MESSAGE
        ===================================================== */}

        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-[#DFAE45]/10 bg-[#DFAE45]/[0.035] px-3 py-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DFAE45]/10">
            <CheckCircle2
              size={11}
              strokeWidth={2.5}
              className="text-[#DFAE45]"
            />
          </span>

          <p className="text-[8px] font-semibold leading-4 text-gray-500">
            {t.bottomMessage}
          </p>
        </div>

        {/* Bottom highlight */}

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/25 to-transparent" />
      </div>
    </section>
  );
}