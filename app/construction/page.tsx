"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Hammer,
  HardHat,
  Home,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const categories = [
  {
    id: "home",
    title: {
      en: "Home Construction",
      hi: "होम कंस्ट्रक्शन",
    },
    subtitle: {
      en: "Build your dream home",
      hi: "अपने सपनों का घर बनाएं",
    },
    icon: Home,
    href: "/construction/home",
  },
  {
    id: "renovation",
    title: {
      en: "Renovation",
      hi: "रिनोवेशन",
    },
    subtitle: {
      en: "Upgrade your space",
      hi: "अपने स्पेस को नया रूप दें",
    },
    icon: Hammer,
    href: "/construction/renovation",
  },
  {
    id: "interior",
    title: {
      en: "Interior Work",
      hi: "इंटीरियर वर्क",
    },
    subtitle: {
      en: "Modern interiors",
      hi: "मॉडर्न इंटीरियर",
    },
    icon: Paintbrush,
    href: "/construction/interior",
  },
  {
    id: "repair",
    title: {
      en: "Repair Services",
      hi: "रिपेयर सर्विसेज",
    },
    subtitle: {
      en: "Quick & reliable",
      hi: "तेज़ और भरोसेमंद",
    },
    icon: Wrench,
    href: "/construction/repair",
  },
];

const services = [
  {
    id: "complete-construction",
    title: {
      en: "Complete Home Construction",
      hi: "कम्प्लीट होम कंस्ट्रक्शन",
    },
    description: {
      en: "Planning, materials and complete execution",
      hi: "प्लानिंग, मटेरियल और पूरा प्रोजेक्ट एग्जीक्यूशन",
    },
    price: {
      en: "Get Free Estimate",
      hi: "फ्री एस्टिमेट पाएं",
    },
    icon: Building2,
    href: "/construction/home",
  },
  {
    id: "renovation",
    title: {
      en: "Home Renovation",
      hi: "होम रिनोवेशन",
    },
    description: {
      en: "Transform your existing home beautifully",
      hi: "अपने मौजूदा घर को खूबसूरती से नया रूप दें",
    },
    price: {
      en: "Starting from ₹9,999",
      hi: "₹9,999 से शुरू",
    },
    icon: Hammer,
    href: "/construction/renovation",
  },
  {
    id: "interior",
    title: {
      en: "Interior Design",
      hi: "इंटीरियर डिजाइन",
    },
    description: {
      en: "Modern and premium interior solutions",
      hi: "मॉडर्न और प्रीमियम इंटीरियर सॉल्यूशंस",
    },
    price: {
      en: "Free Consultation",
      hi: "फ्री कंसल्टेशन",
    },
    icon: Sparkles,
    href: "/construction/interior",
  },
  {
    id: "painting",
    title: {
      en: "Painting Services",
      hi: "पेंटिंग सर्विसेज",
    },
    description: {
      en: "Professional painting for every space",
      hi: "हर स्पेस के लिए प्रोफेशनल पेंटिंग",
    },
    price: {
      en: "Starting from ₹2,999",
      hi: "₹2,999 से शुरू",
    },
    icon: Paintbrush,
    href: "/construction/painting",
  },
];

const features = [
  {
    en: "Verified Construction Professionals",
    hi: "वेरिफाइड कंस्ट्रक्शन प्रोफेशनल्स",
  },
  {
    en: "Transparent Pricing & Estimates",
    hi: "पारदर्शी प्राइसिंग और एस्टिमेट",
  },
  {
    en: "Quality Material Assurance",
    hi: "क्वालिटी मटेरियल की गारंटी",
  },
  {
    en: "Dedicated Project Support",
    hi: "डेडिकेटेड प्रोजेक्ट सपोर्ट",
  },
];

const steps = [
  {
    number: "01",
    title: {
      en: "Share Your Requirement",
      hi: "अपनी जरूरत बताएं",
    },
    description: {
      en: "Tell us what you want to build or renovate.",
      hi: "बताएं कि आप क्या बनाना या रिनोवेट करना चाहते हैं।",
    },
    icon: ClipboardList,
  },
  {
    number: "02",
    title: {
      en: "Talk To Experts",
      hi: "एक्सपर्ट्स से बात करें",
    },
    description: {
      en: "Our professionals understand your project needs.",
      hi: "हमारे प्रोफेशनल्स आपके प्रोजेक्ट की जरूरत समझेंगे।",
    },
    icon: Ruler,
  },
  {
    number: "03",
    title: {
      en: "Start Your Project",
      hi: "अपना प्रोजेक्ट शुरू करें",
    },
    description: {
      en: "Get your estimate and start with confidence.",
      hi: "अपना एस्टिमेट पाएं और भरोसे के साथ शुरुआत करें।",
    },
    icon: HardHat,
  },
];

export default function ConstructionPage() {
  const router = useRouter();
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const t = {
    back: isHindi ? "वापस जाएं" : "Go Back",

    constructionServices: isHindi
      ? "कंस्ट्रक्शन सर्विसेज"
      : "Construction Services",

    trustedExperts: isHindi
      ? "भरोसेमंद कंस्ट्रक्शन एक्सपर्ट्स"
      : "Trusted Construction Experts",

    buildYour: isHindi
      ? "बनाएं अपना"
      : "Build Your",

    dreamSpace: isHindi
      ? "सपनों का स्पेस"
      : "Dream Space",

    confidence: isHindi
      ? "पूरे भरोसे के साथ"
      : "With Confidence",

    heroDescription: isHindi
      ? "कंस्ट्रक्शन और रिनोवेशन से लेकर इंटीरियर और रिपेयर तक, हर प्रोजेक्ट के लिए भरोसेमंद प्रोफेशनल्स से जुड़ें।"
      : "From construction and renovation to interiors and repairs, connect with trusted professionals for every project.",

    projects: isHindi
      ? "प्रोजेक्ट्स"
      : "Projects",

    rating: isHindi
      ? "रेटिंग"
      : "Rating",

    verified: isHindi
      ? "वेरिफाइड"
      : "Verified",

    exploreServices: isHindi
      ? "सर्विसेज देखें"
      : "Explore Services",

    whatWeOffer: isHindi
      ? "हम क्या प्रदान करते हैं"
      : "What We Offer",

    constructionSolutions: isHindi
      ? "कंस्ट्रक्शन सॉल्यूशंस"
      : "Construction Solutions",

    popularServices: isHindi
      ? "पॉपुलर सर्विसेज"
      : "Popular Services",

    startProject: isHindi
      ? "अपना प्रोजेक्ट शुरू करें"
      : "Start Your Project",

    whyOurHub: isHindi
      ? "OurHub क्यों"
      : "Why OurHub",

    builtOnTrust: isHindi
      ? "भरोसे पर बना"
      : "Built On Trust",

    simpleProcess: isHindi
      ? "आसान प्रक्रिया"
      : "Simple Process",

    howItWorks: isHindi
      ? "यह कैसे काम करता है"
      : "How It Works",

    step: isHindi
      ? "स्टेप"
      : "STEP",

    planningProject: isHindi
      ? "क्या आप कोई प्रोजेक्ट प्लान कर रहे हैं?"
      : "Planning A Project?",

    consultationDescription: isHindi
      ? "एक्सपर्ट गाइडेंस पाएं और भरोसेमंद कंस्ट्रक्शन प्रोफेशनल्स से जुड़ें।"
      : "Get expert guidance and connect with trusted construction professionals.",

    freeConsultation: isHindi
      ? "फ्री कंसल्टेशन पाएं"
      : "Get Free Consultation",
  };

  return (
    <div className="min-h-screen w-full bg-[#030303]">
      {/* MOBILE ONLY APP CONTAINER */}
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#080808] pb-[90px] text-white shadow-2xl">
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl">
          <div className="flex h-[62px] items-center justify-between px-4">
            <button
              type="button"
              onClick={() => router.back()}
              aria-label={t.back}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] active:scale-95"
            >
              <ArrowLeft
                size={21}
                className="text-white"
              />
            </button>

            <div className="text-center">
              <p className="text-[8px] font-bold uppercase tracking-[4px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="mt-1 text-[12px] font-semibold text-white">
                {t.constructionServices}
              </p>
            </div>

            <button
  type="button"
  onClick={() =>
    (window.location.href = "tel:+918878632431")
  }
  aria-label={
    isHindi
      ? "संपर्क करें"
      : "Contact Us"
  }
  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 active:scale-95"
>
  <Phone
    size={18}
    className="text-[#DFAE45]"
  />
</button>
          </div>
        </header>

        {/* HERO */}
        <section className="px-4 pt-5">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#17130C] via-[#0E0E0E] to-[#090909]">
            <div className="absolute -right-24 -top-24 h-[220px] w-[220px] rounded-full bg-[#DFAE45]/20 blur-[70px]" />

            <div className="absolute -bottom-20 -left-20 h-[180px] w-[180px] rounded-full bg-orange-500/10 blur-[70px]" />

            <div className="relative p-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-3 py-1.5">
                <HardHat
                  size={13}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-semibold text-[#E9C76B]">
                  {t.trustedExperts}
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-5 text-[31px] font-bold leading-[1.12] tracking-tight">
                {t.buildYour}

                <span className="block text-[#DFAE45]">
                  {t.dreamSpace}
                </span>

                {t.confidence}
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-[310px] text-[12px] leading-6 text-white/55">
                {t.heroDescription}
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <p className="text-[17px] font-bold text-[#DFAE45]">
                    500+
                  </p>

                  <p className="mt-1 text-[8px] uppercase text-white/40">
                    {t.projects}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <p className="text-[17px] font-bold text-[#DFAE45]">
                    4.8★
                  </p>

                  <p className="mt-1 text-[8px] uppercase text-white/40">
                    {t.rating}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <p className="text-[17px] font-bold text-[#DFAE45]">
                    100%
                  </p>

                  <p className="mt-1 text-[8px] uppercase text-white/40">
                    {t.verified}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
              >
                {t.exploreServices}
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="mt-9">
          <div className="px-4">
            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              {t.whatWeOffer}
            </p>

            <h2 className="mt-1 text-[21px] font-bold">
              {t.constructionSolutions}
            </h2>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    router.push(item.href)
                  }
                  className="min-w-[155px] rounded-[22px] border border-white/[0.07] bg-[#111111] p-4 text-left active:scale-[0.97]"
                >
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <h3 className="mt-4 text-[13px] font-semibold">
                    {item.title[language]}
                  </h3>

                  <p className="mt-1 text-[10px] text-white/45">
                    {item.subtitle[language]}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="mt-10 px-4"
        >
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            {t.popularServices}
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            {t.startProject}
          </h2>

          <div className="mt-5 space-y-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() =>
                    router.push(service.href)
                  }
                  className="flex w-full items-center gap-3 rounded-[22px] border border-white/[0.07] bg-[#111111] p-3.5 text-left active:scale-[0.98]"
                >
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[13px] font-semibold">
                      {service.title[language]}
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-white/45">
                      {service.description[language]}
                    </p>

                    <p className="mt-2 text-[10px] font-semibold text-[#DFAE45]">
                      {service.price[language]}
                    </p>
                  </div>

                  <ChevronRight
                    size={18}
                    className="shrink-0 text-white/30"
                  />
                </button>
              );
            })}
          </div>
        </section>

        {/* WHY OURHUB */}
        <section className="mt-10 px-4">
          <div className="rounded-[26px] border border-[#DFAE45]/15 bg-gradient-to-b from-[#16130D] to-[#0E0E0E] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <ShieldCheck
                  size={22}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                  {t.whyOurHub}
                </p>

                <h2 className="mt-1 text-[17px] font-bold">
                  {t.builtOnTrust}
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.en}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#DFAE45]"
                  />

                  <p className="text-[12px] text-white/65">
                    {feature[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10 px-4">
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            {t.simpleProcess}
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            {t.howItWorks}
          </h2>

          <div className="mt-6 space-y-6">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="relative flex gap-4"
                >
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[21px] top-[45px] h-[58px] w-px bg-[#DFAE45]/20" />
                  )}

                  <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                    <Icon
                      size={19}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div className="pt-0.5">
                    <p className="text-[9px] font-bold tracking-[2px] text-[#DFAE45]/70">
                      {t.step} {item.number}
                    </p>

                    <h3 className="mt-1 text-[13px] font-semibold">
                      {item.title[language]}
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/45">
                      {item.description[language]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONSULTATION CARD */}
        <section className="mt-10 px-4">
          <div className="rounded-[26px] border border-white/[0.07] bg-[#111111] p-5">
            <div className="flex gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Star
                  size={20}
                  fill="currentColor"
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[14px] font-semibold">
                  {t.planningProject}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-white/45">
                  {t.consultationDescription}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    router.push(
                      "/construction/request"
                    )
                  }
                  className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#DFAE45]"
                >
                  {t.freeConsultation}
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#080808]/95 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-[430px] border-t border-white/[0.07] px-4 py-3">
          <button
            type="button"
            onClick={() =>
              router.push(
                "/construction/request"
              )
            }
            className="flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
          >
            <HardHat size={18} />

            {t.freeConsultation}

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}