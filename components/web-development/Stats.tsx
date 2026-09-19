"use client";

import {
  BriefcaseBusiness,
  CheckCircle2,
  Headphones,
  Sparkles,
  Users,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const stats = [
  {
    number: "250+",
    label: {
      en: "Projects",
      hi: "प्रोजेक्ट्स",
    },
    description: {
      en: "Delivered",
      hi: "डिलीवर किए गए",
    },
    icon: BriefcaseBusiness,
  },
  {
    number: "150+",
    label: {
      en: "Clients",
      hi: "क्लाइंट्स",
    },
    description: {
      en: "Trusted Us",
      hi: "हम पर भरोसा किया",
    },
    icon: Users,
  },
  {
    number: "99%",
    label: {
      en: "Success",
      hi: "सक्सेस",
    },
    description: {
      en: "Satisfaction",
      hi: "संतुष्टि",
    },
    icon: Sparkles,
  },
  {
    number: "24/7",
    label: {
      en: "Support",
      hi: "सपोर्ट",
    },
    description: {
      en: "Always Available",
      hi: "हमेशा उपलब्ध",
    },
    icon: Headphones,
  },
];

export default function Stats() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const t = {
    ourNumbers: isHindi
      ? "हमारे आंकड़े"
      : "Our Numbers",

    ourTrackRecord: isHindi
      ? "हमारा ट्रैक रिकॉर्ड"
      : "Our Track Record",

    description: isHindi
      ? "क्वालिटी, भरोसेमंद सर्विस और क्लाइंट संतुष्टि के प्रति हमारी प्रतिबद्धता को दर्शाने वाले आंकड़े।"
      : "Numbers that reflect our commitment to quality, reliability and client satisfaction.",

    growingWithEveryProject: isHindi
      ? "हर प्रोजेक्ट के साथ आगे बढ़ रहे हैं"
      : "Growing with every project",

    nextNumber: isHindi
      ? "आपकी सफलता अगला आंकड़ा है जिसे हम जोड़ना चाहते हैं।"
      : "Your success is the next number we want to add.",
  };

  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#DFAE45]/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-blue-500/[0.025] blur-3xl" />

      <div className="relative">
        {/* Section Heading */}
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <Sparkles
                  size={15}
                  strokeWidth={2}
                  className="text-[#DFAE45]"
                />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                {t.ourNumbers}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-7 w-1 rounded-full bg-gradient-to-b from-[#FFD86A] to-[#DFAE45]" />

              <h2 className="text-[24px] font-extrabold tracking-tight text-white">
                {t.ourTrackRecord}
              </h2>
            </div>

            <p className="mt-2 pl-3 text-[13px] leading-5 text-gray-400">
              {t.description}
            </p>
          </div>
        </div>

        {/* Stats Card */}
        <div
          className="
            relative overflow-hidden rounded-[30px]
            border border-white/[0.08]
            bg-gradient-to-br
            from-[#101D2D]
            via-[#0B1726]
            to-[#07111D]
            p-4
            shadow-[0_18px_50px_rgba(0,0,0,0.25)]
          "
        >
          {/* Top Gold Highlight */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/45 to-transparent" />

          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/[0.06] blur-3xl" />

          <div className="relative grid grid-cols-2">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label.en}
                  className={`
                    group relative p-4
                    transition-all duration-300
                    ${
                      index % 2 === 0
                        ? "border-r border-white/[0.06]"
                        : ""
                    }
                    ${
                      index < 2
                        ? "border-b border-white/[0.06]"
                        : ""
                    }
                  `}
                >
                  {/* Number Badge */}
                  <div className="absolute right-3 top-3 flex h-5 min-w-5 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.025] px-1">
                    <span className="text-[7px] font-extrabold tracking-wider text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      relative flex h-10 w-10 items-center justify-center
                      overflow-hidden rounded-[15px]
                      border border-[#DFAE45]/15
                      bg-[#DFAE45]/[0.07]
                      transition-all duration-300
                      group-hover:scale-105
                      group-hover:border-[#DFAE45]/30
                      group-hover:bg-[#DFAE45]/10
                    "
                  >
                    <span className="pointer-events-none absolute -left-8 top-0 h-full w-6 rotate-[25deg] bg-white/15 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                    <Icon
                      size={17}
                      strokeWidth={1.9}
                      className="relative z-10 text-[#DFAE45]"
                    />
                  </div>

                  {/* Number */}
                  <h3
                    className="
                      mt-4 text-[26px] font-black leading-none
                      tracking-tight text-[#DFAE45]
                      transition-all duration-300
                      group-hover:text-[#FFD86A]
                    "
                  >
                    {item.number}
                  </h3>

                  {/* Label */}
                  <p className="mt-2 text-[12px] font-extrabold text-white">
                    {item.label[language]}
                  </p>

                  {/* Description */}
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_7px_rgba(74,222,128,0.7)]" />

                    <span className="text-[8px] font-medium text-gray-600">
                      {item.description[language]}
                    </span>
                  </div>

                  {/* Bottom Glow */}
                  <div className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-20 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.035] blur-2xl transition-all duration-500 group-hover:bg-[#DFAE45]/[0.08]" />
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Bar */}
          <div className="relative mt-3 flex items-center gap-3 rounded-2xl border border-green-400/10 bg-green-400/[0.035] px-3.5 py-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-green-400/10">
              <CheckCircle2
                size={15}
                strokeWidth={2.3}
                className="text-green-400"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold text-white">
                {t.growingWithEveryProject}
              </p>

              <p className="mt-0.5 text-[8px] leading-4 text-gray-600">
                {t.nextNumber}
              </p>
            </div>

            <div className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          </div>
        </div>
      </div>
    </section>
  );
}