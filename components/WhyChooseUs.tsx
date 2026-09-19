"use client";

import {
  BadgeCheck,
  ShieldCheck,
  Clock3,
  Headphones,
  Sparkles,
  ArrowRight,
  Crown,
  CheckCircle2,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const features = [
  {
    id: 1,
    icon: BadgeCheck,
    title: {
      en: "Verified Experts",
      hi: "वेरिफाइड एक्सपर्ट्स",
    },
    description: {
      en: "Background-verified professionals selected for reliable service.",
      hi: "विश्वसनीय सेवा के लिए बैकग्राउंड-वेरिफाइड प्रोफेशनल्स।",
    },
    label: {
      en: "TRUSTED",
      hi: "भरोसेमंद",
    },
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: {
      en: "Secure Payments",
      hi: "सुरक्षित भुगतान",
    },
    description: {
      en: "Safe and protected payments through trusted payment partners.",
      hi: "भरोसेमंद पेमेंट पार्टनर्स के माध्यम से सुरक्षित भुगतान।",
    },
    label: {
      en: "SECURE",
      hi: "सुरक्षित",
    },
  },
  {
    id: 3,
    icon: Clock3,
    title: {
      en: "Instant Booking",
      hi: "तुरंत बुकिंग",
    },
    description: {
      en: "Find your service and complete your booking in just a few steps.",
      hi: "अपनी सर्विस चुनें और कुछ आसान स्टेप्स में बुकिंग पूरी करें।",
    },
    label: {
      en: "FAST",
      hi: "तेज़",
    },
  },
  {
    id: 4,
    icon: Headphones,
    title: {
      en: "24×7 Support",
      hi: "24×7 सपोर्ट",
    },
    description: {
      en: "Our dedicated support team is always ready to assist you.",
      hi: "हमारी सपोर्ट टीम आपकी मदद के लिए हमेशा तैयार है।",
    },
    label: {
      en: "SUPPORT",
      hi: "सहायता",
    },
  },
];

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const t = {
    eyebrow: isHindi
      ? "OURHUB की खासियत"
      : "THE OURHUB DIFFERENCE",

    title: isHindi
      ? "OurHub को क्यों चुनें?"
      : "Why choose OurHub?",

    description: isHindi
      ? "प्रोफेशनल सर्विसेज खोजने का एक स्मार्ट और भरोसेमंद तरीका।"
      : "A smarter and more reliable way to discover professional services.",

    verified: isHindi
      ? "वेरिफाइड"
      : "VERIFIED",

    secure: isHindi
      ? "सुरक्षित"
      : "SECURE",

    reliable: isHindi
      ? "भरोसेमंद"
      : "RELIABLE",

    onePlatform: isHindi
      ? "एक प्लेटफॉर्म"
      : "ONE PLATFORM",

    everything: isHindi
      ? "आपकी हर जरूरत।"
      : "Everything You Need.",

    allInOne: isHindi
      ? "एक ही हब में।"
      : "All In One Hub.",

    bannerDescription: isHindi
      ? "पूजा और होम सर्विसेज से लेकर ऑटोमोबाइल, इवेंट्स, कंस्ट्रक्शन और डिजिटल सॉल्यूशंस तक — एक भरोसेमंद प्लेटफॉर्म पर प्रोफेशनल्स खोजें।"
      : "From spiritual and home services to automobile, events, construction and digital solutions — discover professionals from one trusted platform.",

    exploreServices: isHindi
      ? "सर्विसेज देखें"
      : "Explore Services",
  };

  return (
    <section className="relative mt-10 overflow-hidden py-2">
      {/* ================= BACKGROUND GLOWS ================= */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#F4C542]/[0.05] blur-[80px]" />

      <div className="pointer-events-none absolute -left-24 bottom-10 h-44 w-44 rounded-full bg-[#F4C542]/[0.025] blur-[70px]" />

      {/* ================= HEADER ================= */}

      <div className="relative mb-7 text-center">
        {/* Premium Eyebrow */}

        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#F4C542]/70" />

          <div className="flex items-center gap-1.5">
            <Sparkles
              size={12}
              className="text-[#F4C542]"
            />

            <span className="text-[9px] font-bold tracking-[2.5px] text-[#F4C542]">
              {t.eyebrow}
            </span>
          </div>

          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#F4C542]/70" />
        </div>

        {/* Title */}

        <h2 className="mt-3 text-[25px] font-bold tracking-tight text-white">
          {isHindi ? (
            <>
              {t.title.split(" ")[0]}{" "}
              <span className="text-[#F4C542]">
                {t.title.split(" ").slice(1).join(" ")}
              </span>
            </>
          ) : (
            <>
              Why choose{" "}
              <span className="text-[#F4C542]">
                OurHub?
              </span>
            </>
          )}
        </h2>

        <p className="mx-auto mt-2 max-w-[290px] text-[11px] leading-5 text-slate-500">
          {t.description}
        </p>
      </div>

      {/* ================= FEATURES ================= */}

      <div className="relative grid grid-cols-2 gap-3">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-white/[0.07]
                bg-[#091624]
                p-4
                shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#F4C542]/35
                hover:shadow-[0_18px_35px_rgba(0,0,0,0.28)]
              "
            >
              {/* Top Highlight */}

              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Gold Glow */}

              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#F4C542]/[0.04] blur-3xl transition duration-500 group-hover:bg-[#F4C542]/[0.10]" />

              {/* Number */}

              <span className="absolute right-3 top-3 text-[9px] font-bold tracking-wider text-white/10">
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
                  rounded-2xl
                  border
                  border-[#F4C542]/15
                  bg-[#F4C542]/[0.06]
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:border-[#F4C542]/35
                  group-hover:bg-[#F4C542]/[0.10]
                "
              >
                <Icon
                  size={23}
                  strokeWidth={1.9}
                  className="text-[#F4C542]"
                />

                {/* Icon Glow */}

                <div className="absolute inset-0 rounded-2xl bg-[#F4C542]/5 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Label */}

              <div className="mt-3 flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#F4C542]" />

                <span className="text-[7px] font-bold tracking-[1.4px] text-[#F4C542]/70">
                  {item.label[language]}
                </span>
              </div>

              {/* Title */}

              <h3 className="mt-1.5 text-[13px] font-bold leading-tight text-white">
                {item.title[language]}
              </h3>

              {/* Description */}

              <p className="mt-2 text-[9px] leading-[1.65] text-slate-500">
                {item.description[language]}
              </p>

              {/* Bottom Premium Line */}

              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#F4C542]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          );
        })}
      </div>

      {/* ================= PREMIUM TRUST STRIP ================= */}

      <div
        className="
          relative
          mt-5
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.07]
          bg-[#091624]
          px-4
          py-3
        "
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-16 w-32 -translate-x-1/2 rounded-full bg-[#F4C542]/[0.04] blur-3xl" />

        <div className="relative flex items-center justify-center gap-2">
          <CheckCircle2
            size={13}
            className="text-[#F4C542]"
          />

          <span className="text-[9px] font-bold tracking-[1px] text-slate-400">
            {t.verified} • {t.secure} • {t.reliable}
          </span>
        </div>
      </div>

      {/* ================= PREMIUM BANNER ================= */}

      <div
        className="
          relative
          mt-5
          overflow-hidden
          rounded-[26px]
          border
          border-[#F4C542]/20
          bg-[#091624]
          p-5
          shadow-[0_15px_45px_rgba(0,0,0,0.25)]
        "
      >
        {/* Background Layers */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#F4C542]/[0.08] via-transparent to-transparent" />

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F4C542]/[0.08] blur-[50px]" />

        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#F4C542]/[0.04] blur-[60px]" />

        {/* Decorative circle */}

        <div className="pointer-events-none absolute right-4 top-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#F4C542]/10 bg-[#F4C542]/[0.03]">
          <Crown
            size={25}
            strokeWidth={1.5}
            className="text-[#F4C542]/60"
          />
        </div>

        <div className="relative">
          {/* Small Label */}

          <div className="flex items-center gap-2">
            <Sparkles
              size={11}
              className="text-[#F4C542]"
            />

            <span className="text-[8px] font-bold tracking-[2px] text-[#F4C542]">
              {t.onePlatform}
            </span>
          </div>

          {/* Heading */}

          <h3 className="mt-3 max-w-[260px] text-[20px] font-bold leading-tight text-white">
            {t.everything}
            <br />

            <span className="text-[#F4C542]">
              {t.allInOne}
            </span>
          </h3>

          {/* Description */}

          <p className="mt-3 max-w-[310px] text-[10px] leading-5 text-slate-400">
            {t.bannerDescription}
          </p>

          {/* CTA */}

          <button
            type="button"
            className="
              group
              relative
              mt-5
              flex
              items-center
              gap-2
              overflow-hidden
              rounded-xl
              bg-[#F4C542]
              px-5
              py-3
              text-[11px]
              font-extrabold
              text-[#071424]
              shadow-[0_8px_25px_rgba(244,197,66,0.20)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_30px_rgba(244,197,66,0.30)]
              active:scale-95
            "
          >
            <span className="relative z-10">
              {t.exploreServices}
            </span>

            <ArrowRight
              size={15}
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

            {/* Button shine */}

            <span className="absolute inset-y-0 left-[-40%] w-[35%] rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />
          </button>
        </div>

        {/* Bottom Gold Line */}

        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#F4C542]/50 to-transparent" />
      </div>
    </section>
  );
}