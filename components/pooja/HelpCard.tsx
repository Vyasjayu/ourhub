
"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Headphones,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function HelpCard() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const text = {
    eyebrow: isHindi
      ? "हम आपकी सहायता के लिए हैं"
      : "We're Here For You",

    title: isHindi
      ? "मदद चाहिए?"
      : "Need Help?",

    availability: isHindi
      ? "हमारी सहायता टीम 24×7 उपलब्ध है"
      : "Our support team is available 24×7",

    bookingResponsibility: isHindi
      ? "आपकी बुकिंग, हमारी जिम्मेदारी।"
      : "Your booking, our responsibility.",

    info: isHindi
      ? "पूजा बुकिंग में सहायता चाहिए या सही पंडित की तलाश है? हमारी टीम आपकी जल्दी और सुरक्षित तरीके से सहायता करने के लिए तैयार है।"
      : "Need assistance with a pooja booking or finding the right Pandit? Our team is ready to help you quickly and securely.",

    callNow: isHindi
      ? "अभी कॉल करें"
      : "Call Now",

    whatsapp: isHindi
      ? "व्हाट्सऐप"
      : "WhatsApp",

    helpCenter: isHindi
      ? "सहायता केंद्र देखें"
      : "Visit Help Center",

    secureSupport: isHindi
      ? "सुरक्षित सहायता"
      : "Secure Support",
  };

  return (
    <section className="mt-9">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-[#DFAE45]/25
          bg-gradient-to-br
          from-[#0D1A2B]
          via-[#091422]
          to-[#050B14]
          p-5
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        "
      >
        {/* =====================================================
            AMBIENT GLOW
        ====================================================== */}

        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#DFAE45]/5 blur-3xl" />

        {/* Top Gold Line */}
        <div className="absolute left-1/2 top-0 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/70 to-transparent" />

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="relative z-10 flex items-center justify-between gap-4">

          <div className="flex items-center gap-3.5">

            {/* Headphone Icon */}
            <div
              className="
                relative
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-[18px]
                border
                border-[#DFAE45]/30
                bg-gradient-to-br
                from-[#DFAE45]/15
                to-transparent
                shadow-inner
              "
            >
              <Headphones
                size={25}
                strokeWidth={1.8}
                className="text-[#F3C75F]"
              />

              {/* Live Dot */}
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>

            <div>

              {/* Eyebrow */}
              <div className="mb-1 flex items-center gap-1.5">

                <Sparkles
                  size={11}
                  strokeWidth={2}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-bold tracking-[0.18em] text-[#DFAE45]">
                  {text.eyebrow}
                </span>

              </div>

              {/* Heading */}
              <h2 className="text-[21px] font-bold tracking-tight text-white">
                {text.title}
              </h2>

              {/* Availability */}
              <p className="mt-0.5 text-[11px] text-gray-500">
                {text.availability}
              </p>

            </div>
          </div>

          {/* 24/7 Badge */}
          <div className="hidden shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1.5 sm:flex">

            <Clock3
              size={11}
              strokeWidth={2}
              className="text-emerald-400"
            />

            <span className="text-[9px] font-bold text-emerald-400">
              24×7
            </span>

          </div>
        </div>

        {/* =====================================================
            INFO CARD
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mt-5
            overflow-hidden
            rounded-[20px]
            border
            border-white/[0.07]
            bg-white/[0.035]
            p-4
            backdrop-blur-xl
          "
        >
          {/* Decorative Glow */}
          <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#DFAE45]/10 blur-2xl" />

          <div className="relative flex gap-3">

            {/* Shield */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">

              <ShieldCheck
                size={17}
                strokeWidth={2}
                className="text-[#F3C75F]"
              />

            </div>

            <div>

              {/* Info Heading */}
              <p className="text-[12px] font-semibold text-white">
                {text.bookingResponsibility}
              </p>

              {/* Info Description */}
              <p className="mt-1.5 text-[11px] leading-[18px] text-gray-500">
                {text.info}
              </p>

            </div>
          </div>
        </div>

        {/* =====================================================
            CONTACT BUTTONS
        ====================================================== */}

        <div className="relative z-10 mt-4 grid grid-cols-2 gap-3">

          {/* ===================================================
              CALL
          =================================================== */}

          <Link
            href="tel:+918878632431"
            className="
              group/call
              relative
              flex
              h-[52px]
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-[17px]
              bg-gradient-to-r
              from-[#DFAE45]
              to-[#F3C75F]
              font-bold
              text-[#050B14]
              shadow-[0_10px_25px_rgba(223,174,69,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_30px_rgba(223,174,69,0.22)]
              active:scale-[0.98]
            "
          >
            {/* Shine */}
            <div className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/20 blur-md transition-transform duration-700 group-hover/call:translate-x-[280px]" />

            <Phone
              size={17}
              strokeWidth={2}
              className="relative z-10"
            />

            <span className="relative z-10 text-[12px]">
              {text.callNow}
            </span>
          </Link>

          {/* ===================================================
              WHATSAPP
          =================================================== */}

          <Link
            href="https://wa.me/918878632431"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/wa
              relative
              flex
              h-[52px]
              items-center
              justify-center
              gap-2
              rounded-[17px]
              border
              border-emerald-400/25
              bg-emerald-400/[0.07]
              font-bold
              text-emerald-400
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-emerald-400/50
              hover:bg-emerald-400/10
              active:scale-[0.98]
            "
          >
            <MessageCircle
              size={18}
              strokeWidth={1.9}
              className="transition-transform duration-300 group-hover/wa:scale-110"
            />

            <span className="text-[12px]">
              {text.whatsapp}
            </span>

            <ArrowUpRight
              size={13}
              strokeWidth={2}
              className="opacity-50 transition-all duration-300 group-hover/wa:translate-x-0.5 group-hover/wa:-translate-y-0.5 group-hover/wa:opacity-100"
            />
          </Link>
        </div>

        {/* =====================================================
            HELP CENTER
        ====================================================== */}

        <Link
          href="/help"
          className="
            group/help
            relative
            z-10
            mt-4
            flex
            h-[48px]
            w-full
            items-center
            justify-between
            rounded-[17px]
            border
            border-[#DFAE45]/15
            bg-white/[0.025]
            px-4
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-[#DFAE45]/40
            hover:bg-[#DFAE45]/[0.06]
            active:scale-[0.99]
          "
        >
          <div className="flex items-center gap-2.5">

            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DFAE45]/10">

              <Headphones
                size={14}
                strokeWidth={2}
                className="text-[#DFAE45]"
              />

            </div>

            <span className="text-[11px] font-semibold text-gray-300 transition-colors group-hover/help:text-white">
              {text.helpCenter}
            </span>

          </div>

          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] transition-all group-hover/help:border-[#DFAE45]/30 group-hover/help:bg-[#DFAE45]/10">

            <ChevronRight
              size={15}
              strokeWidth={2}
              className="text-gray-500 transition-all duration-300 group-hover/help:translate-x-0.5 group-hover/help:text-[#F3C75F]"
            />

          </div>
        </Link>

        {/* =====================================================
            BOTTOM TRUST
        ====================================================== */}

        <div className="relative z-10 mt-4 flex items-center justify-center gap-2">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.06]" />

          <div className="flex items-center gap-1.5">

            <ShieldCheck
              size={10}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />

            <span className="text-[8px] font-semibold tracking-[0.16em] text-gray-600">
              {text.secureSupport}
            </span>

          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.06]" />

        </div>

        {/* Bottom Gold Accent */}
        <div className="absolute bottom-0 left-1/2 h-px w-[45%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />

      </div>
    </section>
  );
}

