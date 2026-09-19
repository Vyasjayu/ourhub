"use client";

import Link from "next/link";
import {
ArrowRight,
CheckCircle2,
Headphones,
MessageCircle,
Phone,
ShieldCheck,
Sparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function HelpFooter() {
const { language } = useLanguage();
const isHindi = language === "hi";

const text = {
eyebrow: isHindi
? "हम आपकी सहायता के लिए हैं"
: "We're Here For You",

title: isHindi
  ? "मदद चाहिए?"
  : "Need Help?",

description: isHindi
  ? "हमारी सहायता टीम आपकी जरूरत के समय हमेशा उपलब्ध है।"
  : "Our support team is available whenever you need us.",

supportOnline: isHindi
  ? "सहायता ऑनलाइन"
  : "SUPPORT ONLINE",

assistance: isHindi
  ? "24×7 सहायता"
  : "24×7 Assistance",

callNow: isHindi
  ? "अभी कॉल करें"
  : "Call Now",

whatsapp: isHindi
  ? "व्हाट्सऐप"
  : "WhatsApp",

safeBooking: isHindi
  ? "सुरक्षित और विश्वसनीय बुकिंग"
  : "Safe & Trusted Booking",

trustDescription: isHindi
  ? "प्रमाणित पंडित, सुरक्षित भुगतान, पारदर्शी बुकिंग और हर पूजा के लिए समर्पित सहायता।"
  : "Verified Pandits, secure payments, transparent booking and dedicated support for every ritual.",

verified: isHindi
  ? "प्रमाणित"
  : "Verified",

pandits: isHindi
  ? "पंडित"
  : "Pandits",

secure: isHindi
  ? "सुरक्षित"
  : "Secure",

payments: isHindi
  ? "भुगतान"
  : "Payments",

support: isHindi
  ? "सहायता"
  : "Support",

visitHelp: isHindi
  ? "सहायता केंद्र देखें"
  : "Visit Help Center",

faq: isHindi
  ? "अक्सर पूछे जाने वाले प्रश्न और बुकिंग सहायता"
  : "FAQs & booking assistance",

branding: isHindi
  ? "दिव्य • प्रामाणिक • विश्वसनीय"
  : "Divine • Authentic • Trusted",


};

return ( <section className="relative mt-8 mb-8 overflow-hidden">
{/* Ambient Glows */} <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />


  <div className="pointer-events-none absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-[#7C3AED]/10 blur-3xl" />

  <div
    className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-[#DFAE45]/15
      bg-gradient-to-br
      from-[#0D1A2B]
      via-[#091421]
      to-[#050A12]
      p-4
      shadow-[0_20px_60px_rgba(0,0,0,0.4)]
    "
  >
    {/* Top Gold Line */}
    <div className="absolute left-1/2 top-0 h-[2px] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent" />

    {/* Decorative Glow */}
    <div className="pointer-events-none absolute right-[-35px] top-[-35px] h-28 w-28 rounded-full bg-[#DFAE45]/5 blur-2xl" />

    {/* ================= HEADER ================= */}
    <div className="relative flex items-center gap-3">
      {/* Icon */}
      <div
        className="
          relative
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-[16px]
          border
          border-[#DFAE45]/20
          bg-gradient-to-br
          from-[#DFAE45]/15
          to-[#DFAE45]/5
          shadow-[0_8px_25px_rgba(223,174,69,0.08)]
        "
      >
        <Headphones
          size={22}
          strokeWidth={1.8}
          className="text-[#DFAE45]"
        />

        {/* Live Dot */}
        <span className="absolute right-0.5 top-0.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-[#0B1627] bg-emerald-400">
          <span className="h-1 w-1 animate-pulse rounded-full bg-white" />
        </span>
      </div>

      <div className="min-w-0">
        {/* Eyebrow */}
        <div className="mb-0.5 flex items-center gap-1.5">
          <Sparkles
            size={10}
            strokeWidth={1.8}
            className="text-[#DFAE45]"
          />

          <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#DFAE45]">
            {text.eyebrow}
          </span>
        </div>

        <h2 className="text-[18px] font-bold text-white">
          {text.title}
        </h2>

        <p className="mt-0.5 text-[9px] text-gray-500">
          {text.description}
        </p>
      </div>
    </div>

    {/* 24x7 Badge */}
    <div className="relative mt-3 flex items-center gap-2">
      <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-2.5 py-1">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

        <span className="text-[8px] font-semibold uppercase text-emerald-400">
          {text.supportOnline}
        </span>
      </div>

      <span className="text-[8px] text-gray-600">
        •
      </span>

      <span className="text-[8px] font-medium text-gray-500">
        {text.assistance}
      </span>
    </div>

    {/* ================= ACTION BUTTONS ================= */}
    <div className="relative mt-4 grid grid-cols-2 gap-2.5">
      {/* Call */}
      <a
        href="tel:+918878632431"
        aria-label={text.callNow}
        className="
          group
          relative
          flex
          items-center
          justify-center
          gap-2
          overflow-hidden
          rounded-[16px]
          bg-gradient-to-r
          from-[#DFAE45]
          to-[#F3C75F]
          px-3
          py-3
          text-[10px]
          font-bold
          text-[#080B10]
          shadow-[0_8px_24px_rgba(223,174,69,0.15)]
          transition-all
          duration-300
          hover:shadow-[0_10px_30px_rgba(223,174,69,0.28)]
          active:scale-[0.97]
        "
      >
        {/* Shine */}
        <span className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

        <Phone
          size={15}
          strokeWidth={2.2}
        />

        <span>{text.callNow}</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918878632431"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={text.whatsapp}
        className="
          group
          flex
          items-center
          justify-center
          gap-2
          rounded-[16px]
          border
          border-white/[0.08]
          bg-white/[0.035]
          px-3
          py-3
          text-[10px]
          font-semibold
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-emerald-400/25
          hover:bg-emerald-400/5
          active:scale-[0.97]
        "
      >
        <MessageCircle
          size={15}
          strokeWidth={2}
          className="text-emerald-400"
        />

        <span>{text.whatsapp}</span>

        <ArrowRight
          size={11}
          className="text-gray-500 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </a>
    </div>

    {/* ================= TRUST CARD ================= */}
    <div
      className="
        relative
        mt-3
        overflow-hidden
        rounded-[19px]
        border
        border-[#DFAE45]/15
        bg-[#DFAE45]/[0.035]
        p-3.5
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#DFAE45]/8 blur-2xl" />

      <div className="relative flex items-start gap-3">
        {/* Shield */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
          <ShieldCheck
            size={18}
            strokeWidth={1.8}
            className="text-[#DFAE45]"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="text-[11px] font-semibold text-white">
              {text.safeBooking}
            </h3>

            <CheckCircle2
              size={11}
              className="shrink-0 text-emerald-400"
            />
          </div>

          <p className="mt-1 text-[9px] leading-4 text-gray-500">
            {text.trustDescription}
          </p>
        </div>
      </div>

      {/* Trust Points */}
      <div className="relative mt-3 grid grid-cols-3 gap-1.5">
        <div className="rounded-xl border border-white/[0.05] bg-black/15 px-2 py-2 text-center">
          <p className="text-[8px] font-semibold text-[#DFAE45]">
            {text.verified}
          </p>

          <p className="mt-0.5 text-[7px] text-gray-600">
            {text.pandits}
          </p>
        </div>

        <div className="rounded-xl border border-white/[0.05] bg-black/15 px-2 py-2 text-center">
          <p className="text-[8px] font-semibold text-[#DFAE45]">
            {text.secure}
          </p>

          <p className="mt-0.5 text-[7px] text-gray-600">
            {text.payments}
          </p>
        </div>

        <div className="rounded-xl border border-white/[0.05] bg-black/15 px-2 py-2 text-center">
          <p className="text-[8px] font-semibold text-[#DFAE45]">
            24×7
          </p>

          <p className="mt-0.5 text-[7px] text-gray-600">
            {text.support}
          </p>
        </div>
      </div>
    </div>

    {/* Help Center */}
    <Link
      href="/help"
      aria-label={text.visitHelp}
      className="
        group
        relative
        mt-3
        flex
        items-center
        justify-between
        rounded-[16px]
        border
        border-white/[0.06]
        bg-white/[0.02]
        px-3.5
        py-3
        transition-all
        duration-300
        hover:border-[#DFAE45]/20
        hover:bg-white/[0.035]
      "
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.04]">
          <Headphones
            size={13}
            className="text-gray-400"
          />
        </div>

        <div>
          <p className="text-[9px] font-semibold text-white">
            {text.visitHelp}
          </p>

          <p className="mt-0.5 text-[7px] text-gray-600">
            {text.faq}
          </p>
        </div>
      </div>

      <ArrowRight
        size={13}
        className="text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#DFAE45]"
      />
    </Link>

    {/* Bottom Branding */}
    <div className="mt-4 flex items-center justify-center gap-2">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#DFAE45]/20" />

      <Sparkles
        size={10}
        className="shrink-0 text-[#DFAE45]/60"
      />

      <span className="whitespace-nowrap text-[7px] font-medium uppercase tracking-[0.2em] text-gray-600">
        {text.branding}
      </span>

      <Sparkles
        size={10}
        className="shrink-0 text-[#DFAE45]/60"
      />

      <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#DFAE45]/20" />
    </div>
  </div>
</section>


);
}
