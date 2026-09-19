"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import ContactBottomSheet from "./ContactBottomSheet";

export default function StickyBottom() {
  const [open, setOpen] = useState(false);

  const { language } = useLanguage();
  const isHindi = language === "hi";

  const phone = "918878632431";

  const whatsappMessage = encodeURIComponent(
    isHindi
      ? "नमस्ते OurHub टीम 👋\n\nमैं एक वेबसाइट प्रोजेक्ट शुरू करना चाहता हूं। कृपया पूरी जानकारी साझा करें।"
      : "Hello OurHub Team 👋\n\nI want to develop a website. Please share more details."
  );

  const t = {
    chatWhatsApp: isHindi
      ? "व्हाट्सऐप पर OurHub से चैट करें"
      : "Chat with OurHub on WhatsApp",

    callOurHub: isHindi
      ? "OurHub को कॉल करें"
      : "Call OurHub",

    startYourProject: isHindi
      ? "अपना प्रोजेक्ट शुरू करें"
      : "Start Your Project",

    freeConsultation: isHindi
      ? "फ्री कंसल्टेशन"
      : "Free Consultation",

    quickResponse: isHindi
      ? "त्वरित रिस्पॉन्स"
      : "Quick Response",
  };

  return (
    <>
      {/* =====================================================
          PREMIUM STICKY BOTTOM BAR
      ===================================================== */}

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center">
        <div className="pointer-events-auto relative w-full max-w-[430px] px-3 pb-3">
          {/* Bottom ambient glow */}

          <div className="pointer-events-none absolute -bottom-8 left-1/2 h-28 w-72 -translate-x-1/2 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          {/* Main glass container */}

          <div className="group relative overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#07111D]/95 p-2 shadow-[0_-15px_55px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
            {/* Gold top highlight */}

            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/55 to-transparent" />

            {/* Subtle bottom highlight */}

            <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent" />

            {/* =================================================
                MAIN ACTIONS
            ================================================= */}

            <div className="relative flex items-center gap-2">
              {/* =================================================
                  WHATSAPP
              ================================================= */}

              <a
                href={`https://wa.me/${phone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.chatWhatsApp}
                className="
                  group/whatsapp relative
                  flex h-[49px] w-[49px] shrink-0
                  items-center justify-center
                  overflow-hidden rounded-[17px]
                  border border-green-400/20
                  bg-green-500/[0.08]
                  text-green-400
                  transition-all duration-300
                  hover:border-green-400/40
                  hover:bg-green-500/[0.14]
                  active:scale-95
                "
              >
                {/* Shine */}

                <span className="pointer-events-none absolute -left-10 top-0 h-full w-7 rotate-[25deg] bg-white/20 blur-sm transition-all duration-700 group-hover/whatsapp:left-[120%]" />

                <MessageCircle
                  size={20}
                  strokeWidth={2.1}
                  className="relative z-10 transition-transform duration-300 group-hover/whatsapp:scale-110"
                />

                {/* Online dot */}

                <span className="absolute right-[6px] top-[6px] h-1.5 w-1.5 rounded-full border border-[#07111D] bg-green-400 shadow-[0_0_7px_rgba(74,222,128,0.8)]" />
              </a>

              {/* =================================================
                  CALL
              ================================================= */}

              <a
                href={`tel:+${phone}`}
                aria-label={t.callOurHub}
                className="
                  group/call
                  flex h-[49px] w-[49px] shrink-0
                  items-center justify-center
                  rounded-[17px]
                  border border-white/[0.08]
                  bg-white/[0.035]
                  transition-all duration-300
                  hover:border-[#DFAE45]/30
                  hover:bg-[#DFAE45]/[0.08]
                  active:scale-95
                "
              >
                <Phone
                  size={19}
                  strokeWidth={2}
                  className="text-[#DFAE45] transition-transform duration-300 group-hover/call:scale-110"
                />
              </a>

              {/* =================================================
                  START PROJECT
              ================================================= */}

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={t.startYourProject}
                className="
                  group/cta relative flex h-[49px] flex-1
                  items-center justify-center gap-2
                  overflow-hidden rounded-[17px]
                  bg-gradient-to-r
                  from-[#DFAE45]
                  via-[#E7B94F]
                  to-[#FFD86A]
                  px-3
                  text-[11px]
                  font-black
                  text-black
                  shadow-[0_10px_30px_rgba(223,174,69,0.18)]
                  transition-all duration-300
                  hover:shadow-[0_12px_38px_rgba(223,174,69,0.30)]
                  active:scale-[0.98]
                "
              >
                {/* Shine animation */}

                <span className="pointer-events-none absolute -left-14 top-0 h-full w-10 rotate-[20deg] bg-white/30 blur-sm transition-all duration-700 group-hover/cta:left-[120%]" />

                <Sparkles
                  size={15}
                  strokeWidth={2.3}
                  className="relative z-10"
                />

                <span className="relative z-10">
                  {t.startYourProject}
                </span>

                <ArrowRight
                  size={15}
                  strokeWidth={2.7}
                  className="relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1"
                />
              </button>
            </div>

            {/* =================================================
                TRUST ROW
            ================================================= */}

            <div className="relative mt-1.5 flex items-center justify-center gap-2">
              <CheckCircle2
                size={10}
                strokeWidth={2.5}
                className="text-green-400"
              />

              <span className="text-[7px] font-bold uppercase tracking-[0.8px] text-gray-600">
                {t.freeConsultation}
              </span>

              <span className="h-1 w-1 rounded-full bg-white/10" />

              <span className="text-[7px] font-bold uppercase tracking-[0.8px] text-gray-600">
                {t.quickResponse}
              </span>

              <span className="h-1 w-1 rounded-full bg-white/10" />

              <span className="text-[7px] font-bold uppercase tracking-[0.8px] text-gray-600">
                OurHub
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          CONTACT BOTTOM SHEET
      ======================================================= */}

      <ContactBottomSheet
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}