
"use client";

import {
  ShieldCheck,
  BadgeCheck,
  CreditCard,
  Headphones,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: {
      en: "Verified Pandits",
      hi: "प्रमाणित पंडित",
    },
    desc: {
      en: "Experienced & trusted Vedic Pandits",
      hi: "अनुभवी और विश्वसनीय वैदिक पंडित",
    },
  },
  {
    id: 2,
    icon: BadgeCheck,
    title: {
      en: "Authentic Rituals",
      hi: "प्रामाणिक अनुष्ठान",
    },
    desc: {
      en: "Traditional Pooja Vidhi & Samagri",
      hi: "पारंपरिक पूजा विधि और सामग्री",
    },
  },
  {
    id: 3,
    icon: CreditCard,
    title: {
      en: "Secure Payments",
      hi: "सुरक्षित भुगतान",
    },
    desc: {
      en: "Safe & fast online transactions",
      hi: "सुरक्षित और तेज़ ऑनलाइन लेनदेन",
    },
  },
  {
    id: 4,
    icon: Headphones,
    title: {
      en: "24×7 Support",
      hi: "24×7 सहायता",
    },
    desc: {
      en: "We're always here to help",
      hi: "हम आपकी सहायता के लिए हमेशा उपलब्ध हैं",
    },
  },
];

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const text = {
    eyebrow: isHindi ? "हमारा वादा" : "Our Promise",

    whyChoose: isHindi
      ? "OurHub को क्यों चुनें?"
      : "Why Choose OurHub?",

    description: isHindi
      ? "विश्वास और निश्चिंतता के साथ प्रामाणिक पूजा सेवाएं बुक करने का एक भरोसेमंद तरीका।"
      : "A trusted way to book authentic pooja services with confidence and peace of mind.",

    trustFooter: isHindi
      ? "विश्वसनीय • सुरक्षित • प्रामाणिक"
      : "Trusted • Secure • Authentic",
  };

  return (
    <section className="mt-9 px-0">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-[#DFAE45]/25
          bg-gradient-to-b
          from-[#0B1524]
          via-[#08121F]
          to-[#050B14]
          p-5
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        "
      >

        {/* =====================================================
            AMBIENT BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#DFAE45]/5 blur-3xl" />

        {/* Top Gold Line */}
        <div className="absolute left-1/2 top-0 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/70 to-transparent" />

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="relative z-10 mb-6 text-center">

          {/* Eyebrow */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-3 py-1.5">

            <Sparkles
              size={12}
              strokeWidth={2}
              className="text-[#F3C75F]"
            />

            <span className="text-[9px] font-bold tracking-[0.2em] text-[#F3C75F]">
              {text.eyebrow}
            </span>

          </div>

          {/* Heading */}
          <h2 className="text-[23px] font-bold tracking-tight text-white">
            {isHindi ? (
              <>
                OurHub को क्यों{" "}
                <span className="text-[#F3C75F]">
                  चुनें?
                </span>
              </>
            ) : (
              <>
                Why Choose{" "}
                <span className="text-[#F3C75F]">
                  OurHub?
                </span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-2 max-w-[290px] text-[12px] leading-5 text-gray-500">
            {text.description}
          </p>

          {/* Decorative Divider */}
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">

            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#DFAE45]/40" />

            <Sparkles
              size={11}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />

            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#DFAE45]/40" />

          </div>
        </div>

        {/* =====================================================
            FEATURES GRID
        ====================================================== */}

        <div className="relative z-10 grid grid-cols-2 gap-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            const title = isHindi
              ? item.title.hi
              : item.title.en;

            const desc = isHindi
              ? item.desc.hi
              : item.desc.en;

            return (
              <div
                key={item.id}
                className="
                  group/card
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/[0.07]
                  bg-[#0B1727]/80
                  p-4
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#DFAE45]/40
                  hover:bg-[#0D1B2D]
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]
                  active:scale-[0.98]
                "
              >

                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#DFAE45]/10 blur-2xl opacity-0 transition duration-500 group-hover/card:opacity-100" />

                {/* Number */}
                <span className="absolute right-3 top-3 text-[9px] font-bold text-white/10">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[16px]
                    border
                    border-[#DFAE45]/25
                    bg-gradient-to-br
                    from-[#DFAE45]/15
                    to-transparent
                    shadow-inner
                    transition-all
                    duration-300
                    group-hover/card:scale-105
                    group-hover/card:border-[#DFAE45]/60
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="relative z-10 text-[#F3C75F] transition-transform duration-300 group-hover/card:scale-110"
                  />

                  {/* Icon Glow */}
                  <div className="absolute inset-0 rounded-[16px] bg-[#DFAE45]/10 opacity-0 blur-md transition group-hover/card:opacity-100" />
                </div>

                {/* Title */}
                <h3 className="relative mt-4 text-[13px] font-bold leading-5 text-white">
                  {title}
                </h3>

                {/* Description */}
                <p className="relative mt-1.5 text-[10px] leading-[17px] text-gray-500">
                  {desc}
                </p>

                {/* Bottom Arrow */}
                <div
                  className="
                    mt-3
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    opacity-60
                    transition-all
                    duration-300
                    group-hover/card:border-[#DFAE45]/30
                    group-hover/card:bg-[#DFAE45]/10
                    group-hover/card:opacity-100
                  "
                >
                  <ArrowUpRight
                    size={12}
                    strokeWidth={2}
                    className="text-gray-500 transition-colors group-hover/card:text-[#F3C75F]"
                  />
                </div>

                {/* Bottom Gold Accent */}
                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent transition-all duration-500 group-hover/card:w-[60%]" />

              </div>
            );
          })}
        </div>

        {/* =====================================================
            TRUST FOOTER
        ====================================================== */}

        <div className="relative z-10 mt-5 rounded-2xl border border-[#DFAE45]/10 bg-black/20 px-3.5 py-3">

          <div className="flex items-center justify-center gap-2">

            {/* Trust Icons */}
            <div className="flex -space-x-1.5">

              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#0B1524] bg-[#DFAE45]/20">
                <ShieldCheck
                  size={11}
                  strokeWidth={2}
                  className="text-[#F3C75F]"
                />
              </div>

              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#0B1524] bg-[#DFAE45]/20">
                <BadgeCheck
                  size={11}
                  strokeWidth={2}
                  className="text-[#F3C75F]"
                />
              </div>

              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#0B1524] bg-[#DFAE45]/20">
                <CreditCard
                  size={11}
                  strokeWidth={2}
                  className="text-[#F3C75F]"
                />
              </div>

            </div>

            {/* Trust Text */}
            <p className="text-[9px] font-medium tracking-[0.13em] text-gray-500">
              {text.trustFooter}
            </p>

          </div>
        </div>

        {/* Bottom Gold Line */}
        <div className="absolute bottom-0 left-1/2 h-px w-[45%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />

      </div>
    </section>
  );
}

