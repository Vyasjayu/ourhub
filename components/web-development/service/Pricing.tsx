"use client";

import {
  ArrowRight,
  Check,
  Clock3,
  IndianRupee,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface Service {
  price: string;
}

interface Props {
  service: Service;
}

export default function Pricing({ service }: Props) {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const t = {
    investment: isHindi ? "निवेश" : "Investment",

    simpleTransparent: isHindi
      ? "सिंपल और पारदर्शी"
      : "Simple & Transparent",

    pricing: isHindi ? "प्राइसिंग" : "Pricing",

    description: isHindi
      ? "बिना छुपे हुए चार्ज या अनावश्यक सरप्राइज़ के प्रीमियम डेवलपमेंट।"
      : "Premium development without hidden charges or unnecessary surprises.",

    premiumPackage: isHindi
      ? "प्रीमियम पैकेज"
      : "Premium Package",

    transparent: isHindi
      ? "पारदर्शी"
      : "Transparent",

    startingInvestment: isHindi
      ? "शुरुआती निवेश"
      : "Starting Investment",

    finalQuote: isHindi
      ? "अंतिम कोटेशन आपकी प्रोजेक्ट जरूरतों पर निर्भर करता है"
      : "Final quote depends on project requirements",

    noHiddenCharges: isHindi
      ? "कोई छुपे हुए डेवलपमेंट चार्ज नहीं"
      : "No hidden development charges",

    included: isHindi
      ? "शामिल"
      : "Included",

    everythingYouNeed: isHindi
      ? "आपकी जरूरत का सब कुछ"
      : "Everything You Need",

    startYourProject: isHindi
      ? "अपना प्रोजेक्ट शुरू करें"
      : "Start Your Project",

    freeConsultation: isHindi
      ? "फ्री कंसल्टेशन"
      : "Free consultation",

    noObligation: isHindi
      ? "कोई बाध्यता नहीं"
      : "No obligation",

    secure: isHindi
      ? "सिक्योर"
      : "Secure",

    reliable: isHindi
      ? "भरोसेमंद"
      : "Reliable",

    quality: isHindi
      ? "क्वालिटी"
      : "Quality",

    fastDelivery: isHindi
      ? "फास्ट डिलीवरी"
      : "Fast Delivery",

    fastDeliveryDescription: isHindi
      ? "आमतौर पर 7–15 दिनों में डिलीवर"
      : "Typically delivered in 7–15 days",

    unlimitedRevisions: isHindi
      ? "अनलिमिटेड रिविज़न"
      : "Unlimited Revisions",

    unlimitedRevisionsDescription: isHindi
      ? "आपके संतुष्ट होने तक वेबसाइट में सुधार"
      : "Refine your website until you're satisfied",

    freeSupport: isHindi
      ? "30 दिनों का फ्री सपोर्ट"
      : "30 Days Free Support",

    freeSupportDescription: isHindi
      ? "लॉन्च के बाद टेक्निकल सहायता शामिल"
      : "Post-launch technical assistance included",
  };

  const startProject = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const benefits = [
    {
      icon: Clock3,
      title: t.fastDelivery,
      description: t.fastDeliveryDescription,
      iconClass: "text-blue-400",
      bgClass: "bg-blue-400/10 border-blue-400/15",
    },
    {
      icon: RefreshCcw,
      title: t.unlimitedRevisions,
      description: t.unlimitedRevisionsDescription,
      iconClass: "text-purple-400",
      bgClass: "bg-purple-400/10 border-purple-400/15",
    },
    {
      icon: ShieldCheck,
      title: t.freeSupport,
      description: t.freeSupportDescription,
      iconClass: "text-green-400",
      bgClass: "bg-green-400/10 border-green-400/15",
    },
  ];

  const trustItems = [
    {
      label: t.secure,
      icon: ShieldCheck,
    },
    {
      label: t.reliable,
      icon: Zap,
    },
    {
      label: t.quality,
      icon: Check,
    },
  ];

  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -left-20 top-16 h-44 w-44 rounded-full bg-[#DFAE45]/[0.07] blur-[80px]" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-48 w-48 rounded-full bg-blue-500/[0.04] blur-[90px]" />

      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#DFAE45]" />

          <span className="text-[10px] font-black uppercase tracking-[2px] text-[#DFAE45]">
            {t.investment}
          </span>

          <span className="h-px w-7 bg-gradient-to-r from-[#DFAE45] to-transparent" />
        </div>

        <h2 className="text-[27px] font-black tracking-tight text-white">
          {t.simpleTransparent}

          <span className="block text-[#DFAE45]">
            {t.pricing}
          </span>
        </h2>

        <p className="mt-2 max-w-[330px] text-[13px] leading-6 text-gray-500">
          {t.description}
        </p>
      </div>

      {/* =====================================================
          MAIN PRICING CARD
      ===================================================== */}

      <div className="group relative mt-7 overflow-hidden rounded-[30px] border border-[#DFAE45]/20 bg-gradient-to-b from-[#101D30] via-[#0B1728] to-[#07111D] shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
        {/* Top gold highlight */}

        <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/80 to-transparent" />

        {/* Decorative glow */}

        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-[65px]" />

        {/* Decorative rings */}

        <div className="pointer-events-none absolute -right-20 top-12 h-40 w-40 rounded-full border border-[#DFAE45]/[0.06]" />

        <div className="pointer-events-none absolute -right-14 top-[72px] h-28 w-28 rounded-full border border-[#DFAE45]/[0.05]" />

        <div className="relative p-5">
          {/* =================================================
              BADGES
          ================================================= */}

          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/[0.08] px-3 py-1.5">
              <Sparkles
                size={11}
                strokeWidth={2.5}
                className="text-[#DFAE45]"
              />

              <span className="text-[9px] font-black uppercase tracking-[1.2px] text-[#DFAE45]">
                {t.premiumPackage}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

              <span className="text-[8px] font-bold uppercase tracking-[1px] text-gray-500">
                {t.transparent}
              </span>
            </div>
          </div>

          {/* =================================================
              PRICE AREA
          ================================================= */}

          <div className="mt-6 rounded-[24px] border border-white/[0.06] bg-black/20 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-gray-500">
                  {t.startingInvestment}
                </p>

                <div className="mt-2 flex items-center">
                  <span className="mr-1 text-gray-500">
                    <IndianRupee
                      size={22}
                      strokeWidth={2.5}
                    />
                  </span>

                  <h3 className="text-[34px] font-black leading-none tracking-tight text-[#FFD86A]">
                    {service.price}
                  </h3>
                </div>

                <p className="mt-2 text-[10px] font-medium text-gray-600">
                  {t.finalQuote}
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-[19px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.08] shadow-[0_0_30px_rgba(223,174,69,0.08)]">
                <IndianRupee
                  size={26}
                  strokeWidth={2}
                  className="text-[#DFAE45]"
                />
              </div>
            </div>

            {/* Price trust */}

            <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4">
              <ShieldCheck
                size={13}
                strokeWidth={2.5}
                className="text-green-400"
              />

              <span className="text-[10px] font-semibold text-gray-400">
                {t.noHiddenCharges}
              </span>
            </div>
          </div>

          {/* =================================================
              WHAT'S INCLUDED
          ================================================= */}

          <div className="mt-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[1.5px] text-gray-500">
                  {t.included}
                </p>

                <h4 className="mt-1 text-[15px] font-extrabold text-white">
                  {t.everythingYouNeed}
                </h4>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-green-400/15 bg-green-400/[0.06]">
                <Check
                  size={15}
                  strokeWidth={3}
                  className="text-green-400"
                />
              </div>
            </div>

            <div className="space-y-2.5">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group/item flex items-center gap-3 rounded-[19px] border border-white/[0.055] bg-white/[0.025] p-3.5 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border ${item.bgClass}`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={2}
                        className={item.iconClass}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-extrabold text-gray-200">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[9px] leading-4 text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <Check
                      size={14}
                      strokeWidth={2.8}
                      className="shrink-0 text-green-400"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <button
            type="button"
            onClick={startProject}
            className="group/cta relative mt-6 flex h-[55px] w-full items-center justify-center gap-2.5 overflow-hidden rounded-[18px] bg-gradient-to-r from-[#DFAE45] via-[#E7B94F] to-[#FFD86A] text-[13px] font-black text-black shadow-[0_14px_35px_rgba(223,174,69,0.18)] transition-all duration-300 hover:shadow-[0_16px_45px_rgba(223,174,69,0.30)] active:scale-[0.98]"
          >
            {/* Shine */}

            <span className="pointer-events-none absolute -left-16 top-0 h-full w-10 rotate-[22deg] bg-white/35 blur-sm transition-all duration-700 group-hover/cta:left-[120%]" />

            <Sparkles
              size={16}
              strokeWidth={2.4}
              className="relative z-10"
            />

            <span className="relative z-10">
              {t.startYourProject}
            </span>

            <ArrowRight
              size={17}
              strokeWidth={2.7}
              className="relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </button>

          {/* =================================================
              CTA NOTE
          ================================================= */}

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_7px_rgba(74,222,128,0.7)]" />

            <p className="text-[9px] font-semibold text-gray-600">
              {t.freeConsultation} • {t.noObligation}
            </p>
          </div>
        </div>

        {/* Bottom highlight */}

        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/25 to-transparent" />
      </div>

      {/* =====================================================
          MINI TRUST STRIP
      ===================================================== */}

      <div className="mt-3 grid grid-cols-3 gap-2">
        {trustItems.map((item) => {
          const TrustIcon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.045] bg-white/[0.018] py-2.5"
            >
              <TrustIcon
                size={11}
                strokeWidth={2.5}
                className="text-[#DFAE45]"
              />

              <span className="text-[8px] font-bold uppercase tracking-[0.7px] text-gray-600">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}