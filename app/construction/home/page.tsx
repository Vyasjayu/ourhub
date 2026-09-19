"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  HardHat,
  Home,
  IndianRupee,
  Layers3,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

/* ================= PACKAGES ================= */

const packages = [
  {
    name: {
      en: "Basic",
      hi: "बेसिक",
    },
    subtitle: {
      en: "Essential construction package",
      hi: "जरूरी कंस्ट्रक्शन पैकेज",
    },
    price: "₹1,699",
    unit: {
      en: "/ sq.ft",
      hi: "/ वर्ग फुट",
    },
    popular: false,
    features: {
      en: [
        "Standard quality materials",
        "Professional execution",
        "Basic elevation",
        "Project supervision",
      ],
      hi: [
        "स्टैंडर्ड क्वालिटी मटेरियल",
        "प्रोफेशनल एग्जीक्यूशन",
        "बेसिक एलिवेशन",
        "प्रोजेक्ट सुपरविजन",
      ],
    },
  },
  {
    name: {
      en: "Premium",
      hi: "प्रीमियम",
    },
    subtitle: {
      en: "Most popular for modern homes",
      hi: "मॉडर्न घरों के लिए सबसे लोकप्रिय",
    },
    price: "₹2,199",
    unit: {
      en: "/ sq.ft",
      hi: "/ वर्ग फुट",
    },
    popular: true,
    features: {
      en: [
        "Premium quality materials",
        "Modern elevation design",
        "Dedicated project support",
        "Regular quality checks",
      ],
      hi: [
        "प्रीमियम क्वालिटी मटेरियल",
        "मॉडर्न एलिवेशन डिजाइन",
        "डेडिकेटेड प्रोजेक्ट सपोर्ट",
        "नियमित क्वालिटी चेक",
      ],
    },
  },
  {
    name: {
      en: "Luxury",
      hi: "लक्ज़री",
    },
    subtitle: {
      en: "Premium finish & customization",
      hi: "प्रीमियम फिनिश और कस्टमाइजेशन",
    },
    price: "Custom",
    unit: {
      en: "quotation",
      hi: "कोटेशन",
    },
    popular: false,
    features: {
      en: [
        "High-end materials",
        "Custom architectural design",
        "Premium interiors support",
        "Dedicated project manager",
      ],
      hi: [
        "हाई-एंड मटेरियल",
        "कस्टम आर्किटेक्चरल डिजाइन",
        "प्रीमियम इंटीरियर सपोर्ट",
        "डेडिकेटेड प्रोजेक्ट मैनेजर",
      ],
    },
  },
];

/* ================= WHAT'S INCLUDED ================= */

const includes = [
  {
    title: {
      en: "Planning & Design",
      hi: "प्लानिंग और डिजाइन",
    },
    description: {
      en: "Space planning and construction guidance",
      hi: "स्पेस प्लानिंग और कंस्ट्रक्शन गाइडेंस",
    },
    icon: Ruler,
  },
  {
    title: {
      en: "Quality Materials",
      hi: "क्वालिटी मटेरियल",
    },
    description: {
      en: "Reliable materials based on your package",
      hi: "आपके पैकेज के अनुसार भरोसेमंद मटेरियल",
    },
    icon: Layers3,
  },
  {
    title: {
      en: "Professional Team",
      hi: "प्रोफेशनल टीम",
    },
    description: {
      en: "Experienced construction professionals",
      hi: "अनुभवी कंस्ट्रक्शन प्रोफेशनल्स",
    },
    icon: HardHat,
  },
  {
    title: {
      en: "Project Support",
      hi: "प्रोजेक्ट सपोर्ट",
    },
    description: {
      en: "Regular updates throughout the project",
      hi: "पूरे प्रोजेक्ट के दौरान नियमित अपडेट",
    },
    icon: ClipboardList,
  },
];

/* ================= PROJECT TYPES ================= */

const projectTypes = [
  {
    en: "Independent House",
    hi: "इंडिपेंडेंट हाउस",
  },
  {
    en: "Duplex Home",
    hi: "डुप्लेक्स होम",
  },
  {
    en: "Villa",
    hi: "विला",
  },
  {
    en: "Floor Construction",
    hi: "फ्लोर कंस्ट्रक्शन",
  },
  {
    en: "Home Extension",
    hi: "होम एक्सटेंशन",
  },
  {
    en: "Custom Project",
    hi: "कस्टम प्रोजेक्ट",
  },
];

/* ================= STEPS ================= */

const steps = [
  {
    number: "01",
    title: {
      en: "Share Your Requirement",
      hi: "अपनी जरूरत बताएं",
    },
    description: {
      en: "Tell us your plot size, location and construction needs.",
      hi: "अपने प्लॉट का साइज, लोकेशन और कंस्ट्रक्शन की जरूरत बताएं।",
    },
    icon: ClipboardList,
  },
  {
    number: "02",
    title: {
      en: "Get Expert Consultation",
      hi: "एक्सपर्ट कंसल्टेशन पाएं",
    },
    description: {
      en: "Our construction expert will understand your project.",
      hi: "हमारे कंस्ट्रक्शन एक्सपर्ट आपके प्रोजेक्ट को समझेंगे।",
    },
    icon: Phone,
  },
  {
    number: "03",
    title: {
      en: "Receive Estimate",
      hi: "एस्टिमेट पाएं",
    },
    description: {
      en: "Get a transparent estimate based on your requirements.",
      hi: "आपकी जरूरत के अनुसार पारदर्शी एस्टिमेट पाएं।",
    },
    icon: Wallet,
  },
  {
    number: "04",
    title: {
      en: "Start Construction",
      hi: "कंस्ट्रक्शन शुरू करें",
    },
    description: {
      en: "Finalize the plan and begin your dream home project.",
      hi: "प्लान फाइनल करें और अपने सपनों के घर का प्रोजेक्ट शुरू करें।",
    },
    icon: Building2,
  },
];

/* ================= PAGE ================= */

export default function HomeConstructionPage() {
  const router = useRouter();
  const { language } = useLanguage();

  const isHindi = language === "hi";

  /* ================= TRANSLATIONS ================= */

  const t = {
    back: isHindi ? "वापस जाएं" : "Go back",

    homeConstruction: isHindi
      ? "होम कंस्ट्रक्शन"
      : "Home Construction",

    dreamHomeStarts: isHindi
      ? "आपके सपनों का घर यहां से शुरू होता है"
      : "YOUR DREAM HOME STARTS HERE",

    buildYourDream: isHindi
      ? "बनाएं अपने सपनों का"
      : "Build Your Dream",

    homeWithExperts: isHindi
      ? "घर एक्सपर्ट्स के साथ"
      : "Home With Experts",

    heroDescription: isHindi
      ? "प्लानिंग और डिजाइन से लेकर कंस्ट्रक्शन और हैंडओवर तक, अपने पूरे होम प्रोजेक्ट के लिए प्रोफेशनल सपोर्ट पाएं।"
      : "From planning and design to construction and handover, get professional support for your complete home project.",

    experts: isHindi ? "एक्सपर्ट्स" : "Experts",
    verifiedTeam: isHindi ? "वेरिफाइड टीम" : "Verified Team",

    quality: isHindi ? "क्वालिटी" : "Quality",
    assured: isHindi ? "अश्योर्ड" : "Assured",

    support: isHindi ? "सपोर्ट" : "Support",
    projectHelp: isHindi ? "प्रोजेक्ट हेल्प" : "Project Help",

    getFreeEstimate: isHindi
      ? "फ्री एस्टिमेट पाएं"
      : "Get Free Estimate",

    whatBuild: isHindi
      ? "आप क्या बनाना चाहते हैं?"
      : "WHAT DO YOU WANT TO BUILD?",

    chooseProject: isHindi
      ? "अपना प्रोजेक्ट चुनें"
      : "Choose Your Project",

    explore: isHindi ? "देखें" : "Explore",

    constructionPackages: isHindi
      ? "कंस्ट्रक्शन पैकेज"
      : "CONSTRUCTION PACKAGES",

    choosePackage: isHindi
      ? "अपना पैकेज चुनें"
      : "Choose Your Package",

    indicativePricing: isHindi
      ? "अनुमानित कीमत"
      : "Indicative Pricing",

    mostPopular: isHindi
      ? "सबसे लोकप्रिय"
      : "MOST POPULAR",

    getEstimate: isHindi
      ? "एस्टिमेट पाएं"
      : "Get Estimate",

    pricingNote: isHindi
      ? "अंतिम कीमत लोकेशन, डिजाइन, मटेरियल और प्रोजेक्ट की जरूरतों के अनुसार अलग हो सकती है।"
      : "Final pricing may vary depending on location, design, material selection and project requirements.",

    completeSupport: isHindi
      ? "कम्प्लीट सपोर्ट"
      : "COMPLETE SUPPORT",

    whatsIncluded: isHindi
      ? "क्या-क्या शामिल है?"
      : "What's Included?",

    whyChooseOurHub: isHindi
      ? "OURHUB क्यों चुनें"
      : "WHY CHOOSE OURHUB",

    buildWithConfidence: isHindi
      ? "पूरे भरोसे के साथ बनाएं"
      : "Build With Confidence",

    verifiedProfessionals: isHindi
      ? "वेरिफाइड कंस्ट्रक्शन प्रोफेशनल्स"
      : "Verified construction professionals",

    transparentEstimates: isHindi
      ? "पारदर्शी प्रोजेक्ट एस्टिमेट"
      : "Transparent project estimates",

    qualityExecution: isHindi
      ? "क्वालिटी पर फोकस्ड एग्जीक्यूशन"
      : "Quality-focused execution",

    dedicatedAssistance: isHindi
      ? "डेडिकेटेड प्रोजेक्ट सहायता"
      : "Dedicated project assistance",

    simpleProcess: isHindi
      ? "आसान प्रक्रिया"
      : "SIMPLE PROCESS",

    howItWorks: isHindi
      ? "यह कैसे काम करता है"
      : "How It Works",

    step: isHindi ? "स्टेप" : "STEP",

    readyToBuild: isHindi
      ? "क्या आप अपना घर बनाने के लिए तैयार हैं?"
      : "Ready To Build Your Home?",

    locationDescription: isHindi
      ? "अपने प्रोजेक्ट की जानकारी साझा करें और अपने क्षेत्र के कंस्ट्रक्शन प्रोफेशनल्स से जुड़ें।"
      : "Share your project details and get connected with construction professionals in your area.",

    checkAvailability: isHindi
      ? "उपलब्धता चेक करें"
      : "Check Availability",

    stickyEstimate: isHindi
      ? "फ्री कंस्ट्रक्शन एस्टिमेट पाएं"
      : "Get Free Construction Estimate",

    call: isHindi ? "कॉल करें" : "Call",
  };

  /* ================= ACTION ================= */

  const handleGetEstimate = () => {
    router.push("/construction/request?service=home-construction");
  };

  return (
    <main className="min-h-screen w-full bg-[#030303]">
      {/* ================= MOBILE CONTAINER ================= */}

      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#080808] pb-[95px] text-white">
        {/* ================= HEADER ================= */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl">
          <div className="flex h-[62px] items-center justify-between px-4">
            {/* BACK */}

            <button
              type="button"
              onClick={() => router.back()}
              aria-label={t.back}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] active:scale-95"
            >
              <ArrowLeft size={21} />
            </button>

            {/* TITLE */}

            <div className="text-center">
              <p className="text-[8px] font-bold uppercase tracking-[4px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                {t.homeConstruction}
              </p>
            </div>

            {/* CALL */}

            <button
              type="button"
              aria-label={t.call}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10"
            >
              <Phone
                size={18}
                className="text-[#DFAE45]"
              />
            </button>
          </div>
        </header>

        {/* ================= HERO ================= */}

        <section className="px-4 pt-5">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#18140D] via-[#101010] to-[#080808]">
            {/* BACKGROUND */}

            <div className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#DFAE45]/20 blur-[80px]" />

            <div className="absolute -bottom-24 -left-20 h-[190px] w-[190px] rounded-full bg-orange-500/10 blur-[80px]" />

            <div className="relative p-5">
              {/* BADGE */}

              <div className="inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-3 py-1.5">
                <Home
                  size={13}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-semibold uppercase text-[#E6C36A]">
                  {t.dreamHomeStarts}
                </span>
              </div>

              {/* HEADING */}

              <h1 className="mt-5 text-[31px] font-bold leading-[1.1] tracking-tight">
                {t.buildYourDream}

                <span className="block text-[#DFAE45]">
                  {t.homeWithExperts}
                </span>
              </h1>

              {/* TEXT */}

              <p className="mt-4 max-w-[310px] text-[12px] leading-6 text-white/55">
                {t.heroDescription}
              </p>

              {/* TRUST ROW */}

              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <HardHat
                    size={18}
                    className="text-[#DFAE45]"
                  />

                  <p className="mt-2 text-[10px] font-semibold">
                    {t.experts}
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    {t.verifiedTeam}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <ShieldCheck
                    size={18}
                    className="text-[#DFAE45]"
                  />

                  <p className="mt-2 text-[10px] font-semibold">
                    {t.quality}
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    {t.assured}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <Clock3
                    size={18}
                    className="text-[#DFAE45]"
                  />

                  <p className="mt-2 text-[10px] font-semibold">
                    {t.support}
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    {t.projectHelp}
                  </p>
                </div>
              </div>

              {/* BUTTON */}

              <button
                type="button"
                onClick={handleGetEstimate}
                className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
              >
                {t.getFreeEstimate}

                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* ================= PROJECT TYPE ================= */}

        <section className="mt-9">
          <div className="px-4">
            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              {t.whatBuild}
            </p>

            <h2 className="mt-1 text-[21px] font-bold">
              {t.chooseProject}
            </h2>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {projectTypes.map((type, index) => (
              <button
                key={type.en}
                type="button"
                onClick={handleGetEstimate}
                className="min-w-[145px] rounded-[20px] border border-white/[0.07] bg-[#111111] p-4 text-left active:scale-[0.97]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  {index % 2 === 0 ? (
                    <Home
                      size={19}
                      className="text-[#DFAE45]"
                    />
                  ) : (
                    <Building2
                      size={19}
                      className="text-[#DFAE45]"
                    />
                  )}
                </div>

                <p className="mt-4 text-[12px] font-semibold">
                  {type[language]}
                </p>

                <div className="mt-3 flex items-center text-[9px] text-[#DFAE45]">
                  {t.explore}

                  <ChevronRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ================= PACKAGES ================= */}

        <section className="mt-10 px-4">
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            {t.constructionPackages}
          </p>

          <div className="mt-1 flex items-end justify-between">
            <h2 className="text-[21px] font-bold">
              {t.choosePackage}
            </h2>

            <span className="text-[9px] text-white/40">
              {t.indicativePricing}
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name.en}
                className={`relative overflow-hidden rounded-[24px] border p-5 ${
                  pkg.popular
                    ? "border-[#DFAE45]/40 bg-gradient-to-br from-[#1C170C] to-[#111111]"
                    : "border-white/[0.07] bg-[#111111]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-0 rounded-b-xl bg-[#DFAE45] px-3 py-1.5">
                    <span className="text-[8px] font-bold text-black">
                      {t.mostPopular}
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[17px] font-bold">
                      {pkg.name[language]}
                    </h3>

                    <p className="mt-1 text-[10px] text-white/45">
                      {pkg.subtitle[language]}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[19px] font-bold text-[#DFAE45]">
                      {pkg.price}
                    </p>

                    <p className="text-[9px] text-white/40">
                      {pkg.unit[language]}
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-white/[0.07]" />

                <div className="space-y-3">
                  {pkg.features[language].map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-[#DFAE45]"
                        />

                        <span className="text-[11px] text-white/65">
                          {feature}
                        </span>
                      </div>
                    ),
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleGetEstimate}
                  className={`mt-5 flex h-[46px] w-full items-center justify-center gap-2 rounded-xl text-[11px] font-bold ${
                    pkg.popular
                      ? "bg-[#DFAE45] text-black"
                      : "border border-[#DFAE45]/20 bg-[#DFAE45]/10 text-[#DFAE45]"
                  }`}
                >
                  {t.getEstimate}

                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>

          <p className="mt-3 text-center text-[9px] leading-4 text-white/35">
            {t.pricingNote}
          </p>
        </section>

        {/* ================= WHAT'S INCLUDED ================= */}

        <section className="mt-10 px-4">
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            {t.completeSupport}
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            {t.whatsIncluded}
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {includes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title.en}
                  className="rounded-[22px] border border-white/[0.07] bg-[#111111] p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                    <Icon
                      size={19}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <h3 className="mt-4 text-[12px] font-semibold">
                    {item.title[language]}
                  </h3>

                  <p className="mt-1 text-[9px] leading-4 text-white/45">
                    {item.description[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= WHY CHOOSE ================= */}

        <section className="mt-10 px-4">
          <div className="rounded-[26px] border border-[#DFAE45]/15 bg-gradient-to-b from-[#17130D] to-[#0E0E0E] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <ShieldCheck
                  size={22}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                  {t.whyChooseOurHub}
                </p>

                <h2 className="mt-1 text-[17px] font-bold">
                  {t.buildWithConfidence}
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {[
                t.verifiedProfessionals,
                t.transparentEstimates,
                t.qualityExecution,
                t.dedicatedAssistance,
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <BadgeCheck
                    size={17}
                    className="text-[#DFAE45]"
                  />

                  <p className="text-[11px] text-white/65">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}

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
                    <div className="absolute left-[21px] top-[45px] h-[60px] w-px bg-[#DFAE45]/20" />
                  )}

                  <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                    <Icon
                      size={19}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div>
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

        {/* ================= LOCATION CTA ================= */}

        <section className="mt-10 px-4">
          <div className="rounded-[26px] border border-white/[0.07] bg-[#111111] p-5">
            <div className="flex gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <MapPin
                  size={20}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[14px] font-semibold">
                  {t.readyToBuild}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-white/45">
                  {t.locationDescription}
                </p>

                <button
                  type="button"
                  onClick={handleGetEstimate}
                  className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#DFAE45]"
                >
                  {t.checkAvailability}

                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= MOBILE STICKY CTA ================= */}

      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#080808]/95 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-[430px] border-t border-white/[0.07] px-4 py-3">
          <button
            type="button"
            onClick={handleGetEstimate}
            className="flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
          >
            <IndianRupee size={17} />

            {t.stickyEstimate}

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}