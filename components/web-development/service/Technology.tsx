"use client";

import {
  Check,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers3,
  Server,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface Service {
  technologies: string[];
}

interface Props {
  service: Service;
}

export default function Technology({
  service,
}: Props) {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const t = {
    ourTechnology: isHindi
      ? "हमारी टेक्नोलॉजी"
      : "Our Technology",

    technologyStack: isHindi
      ? "टेक्नोलॉजी स्टैक"
      : "Technology Stack",

    headerDescription: isHindi
      ? "परफॉर्मेंस और स्केलेबिलिटी के लिए मॉडर्न टेक्नोलॉजी।"
      : "Modern technologies built for performance and scalability.",

    modernTechStack: isHindi
      ? "मॉडर्न टेक स्टैक"
      : "Modern Tech Stack",

    updated: isHindi
      ? "अपडेटेड"
      : "Updated",

    stackDescription: isHindi
      ? "विश्वसनीय डिजिटल प्रोडक्ट्स के लिए चुने गए टूल्स।"
      : "Carefully selected tools for reliable digital products.",

    technologies: isHindi
      ? "टेक्नोलॉजीज"
      : "Technologies",

    industryStandard: isHindi
      ? "इंडस्ट्री स्टैंडर्ड टेक्नोलॉजी"
      : "Industry standard technology",

    preferred: isHindi
      ? "पसंदीदा"
      : "Preferred",

    ourApproach: isHindi
      ? "हमारा तरीका"
      : "Our Approach",

    technologyWorksForYou: isHindi
      ? "आपके लिए काम करने वाली टेक्नोलॉजी"
      : "Technology that works for you",

    approachDescription: isHindi
      ? "हम आपके बिज़नेस की जरूरतों, परफॉर्मेंस गोल्स और भविष्य की स्केलेबिलिटी के आधार पर सही टेक्नोलॉजी चुनते हैं।"
      : "We choose the right technology based on your business needs, performance goals and future scalability.",

    modernStack: isHindi
      ? "मॉडर्न स्टैक"
      : "Modern Stack",

    cleanCode: isHindi
      ? "क्लीन कोड"
      : "Clean Code",

    scalable: isHindi
      ? "स्केलेबल"
      : "Scalable",
  };

  const getIcon = (tech: string) => {
    const value = tech.toLowerCase();

    if (
      value.includes("react") ||
      value.includes("next") ||
      value.includes("javascript") ||
      value.includes("typescript") ||
      value.includes("html") ||
      value.includes("css")
    ) {
      return <Code2 size={19} strokeWidth={1.8} />;
    }

    if (
      value.includes("mongo") ||
      value.includes("firebase") ||
      value.includes("mysql") ||
      value.includes("postgres") ||
      value.includes("database")
    ) {
      return <Database size={19} strokeWidth={1.8} />;
    }

    if (
      value.includes("node") ||
      value.includes("express") ||
      value.includes("api") ||
      value.includes("server")
    ) {
      return <Server size={19} strokeWidth={1.8} />;
    }

    if (
      value.includes("android") ||
      value.includes("ios") ||
      value.includes("react native") ||
      value.includes("mobile")
    ) {
      return <Smartphone size={19} strokeWidth={1.8} />;
    }

    if (
      value.includes("cloud") ||
      value.includes("aws") ||
      value.includes("azure") ||
      value.includes("vercel")
    ) {
      return <Globe size={19} strokeWidth={1.8} />;
    }

    return <Cpu size={19} strokeWidth={1.8} />;
  };

  return (
    <section className="relative mt-10 overflow-hidden px-4">
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -left-24 top-20 h-60 w-60 rounded-full bg-[#DFAE45]/[0.04] blur-[100px]" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-60 w-60 rounded-full bg-blue-500/[0.025] blur-[100px]" />

      <div className="relative">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mb-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
              <Layers3
                size={15}
                strokeWidth={1.9}
                className="text-[#DFAE45]"
              />
            </div>

            <span className="text-[9px] font-extrabold uppercase tracking-[1.8px] text-[#DFAE45]">
              {t.ourTechnology}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-8 w-1 rounded-full bg-gradient-to-b from-[#FFD86A] to-[#DFAE45]" />

            <div>
              <h2 className="text-[24px] font-extrabold tracking-tight text-white">
                {t.technologyStack}
              </h2>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                {t.headerDescription}
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            STACK SUMMARY
        =================================================== */}

        <div className="relative overflow-hidden rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#111F30] via-[#0C1827] to-[#08121E] p-4">
          {/* Glow */}

          <div className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          {/* Top line */}

          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />

          <div className="relative flex items-center gap-3">
            {/* Icon */}

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-[#DFAE45]/15 bg-[#DFAE45]/10">
              <Cpu
                size={19}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            {/* Text */}

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[12px] font-extrabold text-white">
                  {t.modernTechStack}
                </p>

                <span className="rounded-full border border-green-400/10 bg-green-400/[0.06] px-2 py-1 text-[6px] font-extrabold uppercase tracking-[0.7px] text-green-400">
                  {t.updated}
                </span>
              </div>

              <p className="mt-1 text-[8px] leading-4 text-gray-600">
                {t.stackDescription}
              </p>
            </div>

            {/* Count */}

            <div className="shrink-0 text-right">
              <p className="text-[21px] font-black leading-none text-[#DFAE45]">
                {service.technologies.length}+
              </p>

              <p className="mt-1 text-[6px] font-bold uppercase tracking-[0.8px] text-gray-600">
                {t.technologies}
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            TECHNOLOGY CARDS
        =================================================== */}

        <div className="mt-4 grid grid-cols-2 gap-3">
          {service.technologies.map((tech, index) => (
            <div
              key={tech}
              className="
                group relative overflow-hidden
                rounded-[23px]
                border border-white/[0.07]
                bg-gradient-to-br
                from-[#101D2D]
                via-[#0B1726]
                to-[#08121F]
                p-4
                shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#DFAE45]/25
                hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]
                active:scale-[0.98]
              "
            >
              {/* Card glow */}

              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#DFAE45]/[0.045] blur-3xl transition-all duration-500 group-hover:bg-[#DFAE45]/[0.11]" />

              {/* Gold top line */}

              <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon + number */}

                <div className="flex items-start justify-between">
                  <div className="relative flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-[16px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.07] text-[#DFAE45] transition-all duration-300 group-hover:scale-105 group-hover:border-[#DFAE45]/30 group-hover:bg-[#DFAE45]/10">
                    {/* Shine */}

                    <span className="pointer-events-none absolute -left-8 top-0 h-full w-6 rotate-[25deg] bg-white/15 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                    <span className="relative z-10">
                      {getIcon(tech)}
                    </span>
                  </div>

                  <span className="text-[7px] font-extrabold tracking-[1px] text-gray-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Tech name */}

                <h3 className="mt-4 line-clamp-1 text-[13px] font-extrabold text-white transition-colors duration-300 group-hover:text-[#FFD86A]">
                  {tech}
                </h3>

                {/* Description */}

                <p className="mt-1 text-[8px] leading-4 text-gray-600">
                  {t.industryStandard}
                </p>

                {/* Status */}

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_7px_rgba(74,222,128,0.65)]" />

                    <span className="text-[7px] font-bold uppercase tracking-[0.7px] text-green-400">
                      {t.preferred}
                    </span>
                  </div>

                  <Check
                    size={12}
                    strokeWidth={2.7}
                    className="text-green-400 opacity-60"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================
            TECH PHILOSOPHY
        =================================================== */}

        <div className="relative mt-4 overflow-hidden rounded-[25px] border border-white/[0.07] bg-[#091421] p-4">
          {/* Ambient */}

          <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[#DFAE45]/[0.05] blur-3xl" />

          <div className="relative flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[15px] border border-[#DFAE45]/15 bg-[#DFAE45]/10">
              <Zap
                size={17}
                strokeWidth={1.9}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <Sparkles
                  size={10}
                  strokeWidth={2}
                  className="text-[#DFAE45]"
                />

                <span className="text-[8px] font-extrabold uppercase tracking-[1.3px] text-[#DFAE45]">
                  {t.ourApproach}
                </span>
              </div>

              <h3 className="mt-1 text-[13px] font-extrabold text-white">
                {t.technologyWorksForYou}
              </h3>

              <p className="mt-1.5 text-[8px] leading-4 text-gray-600">
                {t.approachDescription}
              </p>
            </div>
          </div>

          {/* Bottom trust strip */}

          <div className="relative mt-4 flex items-center justify-center gap-2 border-t border-white/[0.05] pt-3">
            <CheckCircle2
              size={11}
              strokeWidth={2.4}
              className="text-green-400"
            />

            <span className="text-[7px] font-bold uppercase tracking-[0.8px] text-gray-600">
              {t.modernStack}
            </span>

            <span className="h-1 w-1 rounded-full bg-white/10" />

            <span className="text-[7px] font-bold uppercase tracking-[0.8px] text-gray-600">
              {t.cleanCode}
            </span>

            <span className="h-1 w-1 rounded-full bg-white/10" />

            <span className="text-[7px] font-bold uppercase tracking-[0.8px] text-gray-600">
              {t.scalable}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}