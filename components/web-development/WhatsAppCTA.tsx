"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppCTA() {
  const phone = "918878632431";

  const { language } = useLanguage();
  const isHindi = language === "hi";

  const t = {
    onlineSupport: isHindi ? "ऑनलाइन सपोर्ट" : "Online Support",

    needInstantSupport: isHindi
      ? "तुरंत सपोर्ट चाहिए?"
      : "Need Instant Support?",

    description: isHindi
      ? "हमारी "
      : "Talk directly with our ",

    webDevelopmentTeam: isHindi
      ? "वेब डेवलपमेंट टीम"
      : "Web Development Team",

    descriptionEnd: isHindi
      ? " से बात करें और अपने वेबसाइट प्रोजेक्ट के लिए तुरंत गाइडेंस पाएं।"
      : " and get quick guidance for your website project.",

    quickResponse: isHindi
      ? "त्वरित रिस्पॉन्स"
      : "Quick Response",

    expertGuidance: isHindi
      ? "एक्सपर्ट गाइडेंस"
      : "Expert Guidance",

    whatsapp: isHindi ? "व्हाट्सऐप" : "WhatsApp",

    callNow: isHindi ? "अभी कॉल करें" : "Call Now",

    fastAssistance: isHindi
      ? "फास्ट असिस्टेंस"
      : "Fast Assistance",

    digitalStudio: "OurHub Digital Studio",

    whatsappMessage: isHindi
      ? "नमस्ते OurHub, मुझे वेब डेवलपमेंट सर्विसेज के लिए मदद चाहिए।"
      : "Hi OurHub, I need help with Web Development services.",
  };

  const whatsappMessage = encodeURIComponent(t.whatsappMessage);

  return (
    <section className="relative mt-10 mb-28 overflow-hidden px-4">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-20 top-10 h-44 w-44 rounded-full bg-green-500/[0.08] blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-[#DFAE45]/[0.07] blur-3xl" />

      <div
        className="
          group relative overflow-hidden rounded-[30px]
          border border-white/[0.08]
          bg-gradient-to-br
          from-[#101D2D]
          via-[#0B1726]
          to-[#07111D]
          p-5
          shadow-[0_20px_55px_rgba(0,0,0,0.30)]
        "
      >
        {/* Top Gold Line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/50 to-transparent" />

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-500/[0.08] blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 left-10 h-36 w-36 rounded-full bg-[#DFAE45]/[0.05] blur-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* WhatsApp Icon */}
              <div
                className="
                  relative flex h-12 w-12 shrink-0 items-center justify-center
                  overflow-hidden rounded-2xl
                  border border-green-400/20
                  bg-green-500/10
                  shadow-[0_8px_25px_rgba(34,197,94,0.10)]
                "
              >
                <MessageCircle
                  size={23}
                  strokeWidth={2}
                  className="relative z-10 text-green-400"
                />

                <span className="absolute -left-8 top-0 h-full w-6 rotate-[25deg] bg-white/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_9px_rgba(74,222,128,0.9)]" />

                  <span className="text-[9px] font-bold uppercase tracking-[1.7px] text-green-400">
                    {t.onlineSupport}
                  </span>
                </div>

                <h2 className="mt-1 text-[19px] font-extrabold tracking-tight text-white">
                  {t.needInstantSupport}
                </h2>
              </div>
            </div>

            {/* Sparkle */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.03]">
              <Sparkles
                size={14}
                className="text-[#DFAE45]"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-5 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3.5">
            <p className="text-[12px] leading-5 text-gray-400">
              {t.description}

              <span className="font-semibold text-white">
                {t.webDevelopmentTeam}
              </span>

              {t.descriptionEnd}
            </p>

            {/* Benefits */}
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  size={12}
                  className="text-green-400"
                  strokeWidth={2.2}
                />

                <span className="text-[9px] font-medium text-gray-500">
                  {t.quickResponse}
                </span>
              </div>

              <div className="h-3 w-px bg-white/10" />

              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  size={12}
                  className="text-green-400"
                  strokeWidth={2.2}
                />

                <span className="text-[9px] font-medium text-gray-500">
                  {t.expertGuidance}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                isHindi
                  ? "व्हाट्सऐप पर OurHub से संपर्क करें"
                  : "Contact OurHub on WhatsApp"
              }
              className="
                group/whatsapp relative flex h-[50px] items-center
                justify-center gap-2 overflow-hidden rounded-2xl
                bg-gradient-to-r from-green-400 to-emerald-500
                text-[11px] font-extrabold text-[#041008]
                shadow-[0_12px_30px_rgba(34,197,94,0.16)]
                transition-all duration-300
                hover:shadow-[0_15px_35px_rgba(34,197,94,0.25)]
                active:scale-[0.97]
              "
            >
              <span className="absolute -left-10 top-0 h-full w-10 rotate-[20deg] bg-white/25 blur-sm transition-all duration-700 group-hover/whatsapp:left-[120%]" />

              <MessageCircle
                size={18}
                strokeWidth={2.4}
                className="relative z-10"
              />

              <span className="relative z-10">
                {t.whatsapp}
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="relative z-10 transition-transform duration-300 group-hover/whatsapp:-translate-y-0.5 group-hover/whatsapp:translate-x-0.5"
              />
            </a>

            {/* Call */}
            <a
              href={`tel:+${phone}`}
              aria-label={
                isHindi
                  ? "OurHub को अभी कॉल करें"
                  : "Call OurHub now"
              }
              className="
                group/call flex h-[50px] items-center justify-center gap-2
                rounded-2xl
                border border-[#DFAE45]/20
                bg-[#DFAE45]/[0.06]
                text-[11px] font-extrabold text-[#DFAE45]
                transition-all duration-300
                hover:border-[#DFAE45]/40
                hover:bg-[#DFAE45]/10
                active:scale-[0.97]
              "
            >
              <Phone
                size={17}
                strokeWidth={2.3}
                className="transition-transform duration-300 group-hover/call:rotate-6"
              />

              <span>{t.callNow}</span>

              <ArrowUpRight
                size={13}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover/call:-translate-y-0.5 group-hover/call:translate-x-0.5"
              />
            </a>
          </div>

          {/* Bottom Trust Strip */}
          <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">
            <div className="flex items-center gap-1.5">
              <Zap
                size={11}
                className="text-[#DFAE45]"
                fill="currentColor"
              />

              <span className="text-[8px] font-semibold uppercase tracking-[1.2px] text-gray-600">
                {t.fastAssistance}
              </span>
            </div>

            <span className="text-[8px] font-medium text-gray-700">
              {t.digitalStudio}
            </span>
          </div>
        </div>

        {/* Bottom Gold Highlight */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent" />
      </div>
    </section>
  );
}