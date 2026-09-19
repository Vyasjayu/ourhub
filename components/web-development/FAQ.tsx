"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const faqs = [
  {
    question: {
      en: "How long does a website take?",
      hi: "वेबसाइट बनाने में कितना समय लगता है?",
    },
    answer: {
      en: "Most business websites are completed within 7–15 working days depending on the requirements, content, features and level of customization.",
      hi: "ज्यादातर बिज़नेस वेबसाइट्स 7–15 वर्किंग डेज़ में पूरी हो जाती हैं। समय आपकी जरूरतों, कंटेंट, फीचर्स और कस्टमाइजेशन के स्तर पर निर्भर करता है।",
    },
  },
  {
    question: {
      en: "Do you provide SEO?",
      hi: "क्या आप SEO की सुविधा देते हैं?",
    },
    answer: {
      en: "Yes. Every website includes basic on-page SEO, fast loading performance, mobile optimization and a search-engine-friendly structure.",
      hi: "हाँ। हर वेबसाइट में बेसिक ऑन-पेज SEO, फास्ट लोडिंग परफॉर्मेंस, मोबाइल ऑप्टिमाइजेशन और सर्च इंजन फ्रेंडली स्ट्रक्चर शामिल होता है।",
    },
  },
  {
    question: {
      en: "Will my website work on mobile?",
      hi: "क्या मेरी वेबसाइट मोबाइल पर सही तरीके से चलेगी?",
    },
    answer: {
      en: "Yes. Every website is designed to be fully responsive across mobile phones, tablets and desktop screens.",
      hi: "हाँ। हर वेबसाइट मोबाइल फोन, टैबलेट और डेस्कटॉप स्क्रीन पर पूरी तरह रिस्पॉन्सिव डिजाइन की जाती है।",
    },
  },
  {
    question: {
      en: "Do you provide support after delivery?",
      hi: "क्या डिलीवरी के बाद सपोर्ट मिलता है?",
    },
    answer: {
      en: "Yes. We provide post-delivery support based on the selected package. Our team can also help with updates, improvements and future requirements.",
      hi: "हाँ। चुने गए पैकेज के अनुसार डिलीवरी के बाद सपोर्ट दिया जाता है। हमारी टीम अपडेट्स, सुधार और भविष्य की जरूरतों में भी मदद कर सकती है।",
    },
  },
];

export default function FAQ() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const [open, setOpen] = useState<number | null>(0);

  const t = {
    faq: "FAQ",

    title: isHindi
      ? "अक्सर पूछे जाने वाले सवाल"
      : "Frequently Asked Questions",

    description: isHindi
      ? "OurHub के साथ वेबसाइट बनाने से पहले आपको जो कुछ जानना जरूरी है, वह यहां जानें।"
      : "Everything you need to know before building your website with OurHub.",

    clearAnswers: isHindi
      ? "साफ जवाब। कोई कन्फ्यूजन नहीं।"
      : "Clear answers. No confusion.",

    transparentProcess: isHindi
      ? "शुरुआत से लॉन्च तक पारदर्शी प्रक्रिया।"
      : "Transparent process from start to launch.",

    stillQuestion: isHindi
      ? "अभी भी कोई सवाल है?"
      : "Still have a question?",

    supportDescription: isHindi
      ? "हमारी टीम सही सॉल्यूशन चुनने में आपकी मदद करने के लिए तैयार है।"
      : "Our team is happy to help you choose the right solution.",

    transparentPricing: isHindi
      ? "पारदर्शी प्राइसिंग"
      : "Transparent pricing",

    professionalSupport: isHindi
      ? "प्रोफेशनल सपोर्ट"
      : "Professional support",
  };

  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* ================= AMBIENT GLOW ================= */}

      <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-[#DFAE45]/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-52 w-52 rounded-full bg-blue-500/[0.035] blur-3xl" />

      {/* ================= HEADER ================= */}

      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <HelpCircle
              size={16}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            {t.faq}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-7 w-1 rounded-full bg-gradient-to-b from-[#FFD86A] to-[#DFAE45]" />

          <h2 className="text-[24px] font-extrabold tracking-tight text-white">
            {t.title}
          </h2>
        </div>

        <p className="mt-2 pl-3 text-[13px] leading-5 text-gray-400">
          {t.description}
        </p>
      </div>

      {/* ================= QUICK INFO ================= */}

      <div className="relative mt-5 flex items-center gap-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 backdrop-blur-xl">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
          <CheckCircle2
            size={16}
            className="text-green-400"
            strokeWidth={2}
          />
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-bold text-white">
            {t.clearAnswers}
          </p>

          <p className="mt-0.5 text-[9px] text-gray-500">
            {t.transparentProcess}
          </p>
        </div>

        <Sparkles
          size={15}
          className="ml-auto shrink-0 text-[#DFAE45]/50"
        />
      </div>

      {/* ================= FAQ LIST ================= */}

      <div className="relative mt-5 space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = open === index;

          const question = faq.question[language];
          const answer = faq.answer[language];

          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[24px] border transition-all duration-300 ${
                isOpen
                  ? "border-[#DFAE45]/30 bg-gradient-to-br from-[#101D2D] to-[#091321] shadow-[0_15px_40px_rgba(0,0,0,0.22)]"
                  : "border-white/[0.07] bg-[#0A1422] hover:border-[#DFAE45]/20"
              }`}
            >
              {/* Active Gold Glow */}
              {isOpen && (
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl" />
              )}

              {/* Left Accent */}
              <div
                className={`absolute left-0 top-0 h-full w-[2px] transition-all duration-300 ${
                  isOpen
                    ? "bg-gradient-to-b from-[#FFD86A] via-[#DFAE45] to-transparent"
                    : "bg-transparent"
                }`}
              />

              {/* ================= QUESTION ================= */}

              <button
                type="button"
                onClick={() =>
                  setOpen(isOpen ? null : index)
                }
                aria-expanded={isOpen}
                aria-label={question}
                className="relative flex w-full items-center gap-3 px-4 py-4 text-left outline-none"
              >
                {/* Number */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-[10px] font-extrabold transition-all duration-300 ${
                    isOpen
                      ? "border-[#DFAE45]/30 bg-[#DFAE45]/10 text-[#DFAE45]"
                      : "border-white/[0.07] bg-white/[0.025] text-gray-500"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Question */}
                <span
                  className={`flex-1 pr-1 text-[13px] font-bold leading-5 transition-colors ${
                    isOpen
                      ? "text-white"
                      : "text-gray-200"
                  }`}
                >
                  {question}
                </span>

                {/* Chevron */}
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 border-[#DFAE45]/30 bg-[#DFAE45]/10"
                      : "border-white/[0.07] bg-white/[0.025]"
                  }`}
                >
                  <ChevronDown
                    size={16}
                    strokeWidth={2.2}
                    className={
                      isOpen
                        ? "text-[#DFAE45]"
                        : "text-gray-500"
                    }
                  />
                </div>
              </button>

              {/* ================= ANSWER ================= */}

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-5 pl-[4.2rem] pr-5">
                    <div className="mb-3 h-px bg-gradient-to-r from-[#DFAE45]/20 via-white/[0.05] to-transparent" />

                    <p className="text-[12px] leading-6 text-gray-400">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= SUPPORT CTA ================= */}

      <div className="relative mt-5 overflow-hidden rounded-[26px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#0D1928] via-[#091321] to-[#07101C] p-4">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -bottom-16 -right-10 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <MessageCircle
              size={18}
              className="text-[#DFAE45]"
              strokeWidth={2}
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-bold text-white">
              {t.stillQuestion}
            </p>

            <p className="mt-0.5 text-[9px] leading-4 text-gray-500">
              {t.supportDescription}
            </p>
          </div>

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DFAE45] text-black">
            <ChevronDown
              size={15}
              className="-rotate-90"
              strokeWidth={2.5}
            />
          </div>
        </div>

        {/* Bottom Trust Line */}
        <div className="relative mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-3">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

          <span className="text-[9px] font-medium text-gray-500">
            {t.transparentPricing}
          </span>

          <span className="h-1 w-1 rounded-full bg-white/20" />

          <span className="text-[9px] font-medium text-gray-500">
            {t.professionalSupport}
          </span>
        </div>
      </div>
    </section>
  );
}