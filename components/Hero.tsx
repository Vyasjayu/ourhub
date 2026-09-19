"use client";

import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Wallet,
  Headphones,
  Wrench,
  Home,
  Building2,
} from "lucide-react";
import { FaOm } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroBanner() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const t = {
    trustedBy: isHindi ? "भरोसा करने वाले" : "Trusted By",
    customers: isHindi ? "15K+ ग्राहक" : "15K+ Customers",

    everything: isHindi ? "आपकी हर जरूरत," : "Everything",
    youNeed: isHindi ? "एक ही जगह," : "You Need,",
    one: isHindi ? "एक" : "One",
    platform: isHindi ? "प्लेटफॉर्म" : "Platform",

    description: isHindi
      ? "अपने आसपास बेहतरीन वेरिफाइड सर्विस खोजें, बुक करें और पाएं।"
      : "Find, book & get the best verified services near you.",

    verified: isHindi ? "वेरिफाइड" : "Verified",
    experts: isHindi ? "एक्सपर्ट्स" : "Experts",

    secure: isHindi ? "सुरक्षित" : "Secure",
    payments: isHindi ? "पेमेंट्स" : "Payments",

    support: isHindi ? "सपोर्ट" : "Support",

    bookNow: isHindi ? "अभी बुक करें" : "Book Now",

    technician: isHindi
      ? "सर्विस टेक्नीशियन"
      : "Service Technician",
  };

  return (
    <section className="mt-4 px-3">
      <div
        className="
          relative
          h-[240px]
          overflow-hidden
          rounded-[22px]
          border
          border-yellow-500/20
          bg-[#0B1018]
          shadow-[0_10px_40px_rgba(0,0,0,.45)]
        "
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#11141B] via-[#0F131C] to-[#090C12]" />

        <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-yellow-400/5 blur-[90px]" />

        <div className="relative flex h-full">
          {/* ================= LEFT SIDE ================= */}
          <div className="z-20 flex h-full w-[52%] flex-col justify-between px-4 py-4">
            {/* Trusted */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#1A1D25] px-3 py-1.5">
              <span className="text-xs text-yellow-400">
                ⭐
              </span>

              <span className="text-[11px] font-semibold leading-4 text-white">
                {t.trustedBy}
                <br />
                {t.customers}
              </span>
            </div>

            {/* Heading */}
            <div className="mt-3">
              <h1 className="text-[24px] font-extrabold leading-[28px] text-white">
                {t.everything}
                <br />
                {t.youNeed}
              </h1>

              <h2 className="mt-1 text-[24px] font-extrabold leading-[28px] text-yellow-400">
                {t.one}
                <br />
                {t.platform}
              </h2>

              <p className="mt-2 w-[155px] text-[11px] leading-4 text-gray-300">
                {t.description}
              </p>
            </div>

            {/* Trust Features */}
            <div className="mt-auto flex justify-between gap-2 pr-3 pt-3">
              {/* Verified */}
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
                  <ShieldCheck
                    size={16}
                    className="text-green-400"
                  />
                </div>

                <span className="mt-1 text-[9px] text-white">
                  {t.verified}
                </span>

                <span className="text-[8px] text-gray-400">
                  {t.experts}
                </span>
              </div>

              {/* Payments */}
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10">
                  <Wallet
                    size={16}
                    className="text-yellow-400"
                  />
                </div>

                <span className="mt-1 text-[9px] text-white">
                  {t.secure}
                </span>

                <span className="text-[8px] text-gray-400">
                  {t.payments}
                </span>
              </div>

              {/* Support */}
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                  <Headphones
                    size={16}
                    className="text-blue-400"
                  />
                </div>

                <span className="mt-1 text-[9px] text-white">
                  24×7
                </span>

                <span className="text-[8px] text-gray-400">
                  {t.support}
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative flex w-[47%] items-center justify-center">
            {/* Glow */}
            <div className="absolute right-3 top-3 h-56 w-56 rounded-full bg-yellow-400/10 blur-[70px]" />

            {/* Rings */}
            <div className="absolute right-[24px] top-[24px] h-[135px] w-[135px] rounded-full border border-yellow-500/20" />

            <div className="absolute right-[42px] top-[42px] h-[100px] w-[100px] rounded-full border border-yellow-500/20" />

            {/* Technician */}
            <Image
              src="/images/hero-technician.png"
              alt={t.technician}
              width={150}
              height={210}
              priority
              className="
                absolute
                right-[-10px]
                top-0
                z-20
                h-[165px]
                w-auto
                object-contain
              "
            />

            {/* Top Wrench */}
            <div className="absolute right-[118px] top-[28px] z-30">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/30 bg-[#111827] shadow-lg">
                <Wrench
                  size={18}
                  className="text-sky-400"
                />
              </div>
            </div>

            {/* Om */}
            <div className="absolute left-[10px] top-[88px] z-30">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/30 bg-[#111827] shadow-lg">
                <FaOm
                  size={18}
                  className="text-yellow-400"
                />
              </div>
            </div>

            {/* Home */}
            <div className="absolute right-[16px] top-[28px] z-30">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/30 bg-[#111827] shadow-lg">
                <Home
                  size={18}
                  className="text-yellow-400"
                />
              </div>
            </div>

            {/* Building */}
            <div className="absolute right-0 top-[88px] z-30">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/30 bg-[#111827] shadow-lg">
                <Building2
                  size={18}
                  className="text-yellow-400"
                />
              </div>
            </div>

            {/* Book Button */}
            <button
              type="button"
              className="
                absolute
                bottom-3
                right-[18px]
                z-30
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#FFC107]
                px-5
                py-2.5
                text-[12px]
                font-bold
                text-black
                shadow-lg
                transition-all
                hover:scale-105
                active:scale-95
              "
            >
              {t.bookNow}

              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      </div>
    </section>
  );
}