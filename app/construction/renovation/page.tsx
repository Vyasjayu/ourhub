"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bath,
  BedDouble,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Hammer,
  Home,
  IndianRupee,
  Layers3,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function ConstructionRenovationPage() {
  const router = useRouter();

  const { language } = useLanguage();
  const isHindi = language === "hi";

  /* ============================================================
     TRANSLATIONS
  ============================================================ */

  const t = {
    goBack: isHindi ? "वापस जाएं" : "Go back",

    homeRenovation: isHindi
      ? "होम रिनोवेशन"
      : "Home Renovation",

    call: isHindi ? "कॉल करें" : "Call",

    transformSpace: isHindi
      ? "अपने स्पेस को नया रूप दें"
      : "TRANSFORM YOUR SPACE",

    giveHome: isHindi
      ? "अपने घर को"
      : "Give Your Home",

    newLife: isHindi
      ? "नई जिंदगी दें"
      : "A New Life",

    heroDescription: isHindi
      ? "छोटे अपग्रेड से लेकर पूरे घर के ट्रांसफॉर्मेशन तक, अपने रिनोवेशन प्रोजेक्ट के लिए सही प्रोफेशनल्स से जुड़ें।"
      : "From small upgrades to complete home transformation, find the right professionals for your renovation project.",

    experts: isHindi ? "एक्सपर्ट्स" : "Experts",
    skilledTeam: isHindi ? "स्किल्ड टीम" : "Skilled Team",

    quality: isHindi ? "क्वालिटी" : "Quality",
    assured: isHindi ? "अश्योर्ड" : "Assured",

    support: isHindi ? "सपोर्ट" : "Support",
    projectHelp: isHindi ? "प्रोजेक्ट हेल्प" : "Project Help",

    freeEstimate: isHindi
      ? "फ्री रिनोवेशन एस्टिमेट पाएं"
      : "Get Free Renovation Estimate",

    whatRenovate: isHindi
      ? "आप क्या रिनोवेट करना चाहते हैं?"
      : "WHAT DO YOU WANT TO RENOVATE?",

    renovationServices: isHindi
      ? "रिनोवेशन सर्विसेज"
      : "Renovation Services",

    explore: isHindi ? "देखें" : "Explore",

    renovationPackages: isHindi
      ? "रिनोवेशन पैकेज"
      : "RENOVATION PACKAGES",

    renovationOptions: isHindi
      ? "रिनोवेशन ऑप्शंस"
      : "Renovation Options",

    flexiblePricing: isHindi
      ? "फ्लेक्सिबल प्राइसिंग"
      : "Flexible Pricing",

    mostPopular: isHindi
      ? "सबसे लोकप्रिय"
      : "MOST POPULAR",

    getEstimate: isHindi
      ? "फ्री एस्टिमेट पाएं"
      : "Get Free Estimate",

    pricingNote: isHindi
      ? "अंतिम कीमत प्रॉपर्टी की स्थिति, रिनोवेशन स्कोप, मटेरियल और लोकेशन पर निर्भर करती है।"
      : "Final cost depends on property condition, renovation scope, materials and location.",

    whyOurHub: isHindi
      ? "OURHUB क्यों"
      : "WHY OURHUB",

    renovateConfidence: isHindi
      ? "भरोसे के साथ रिनोवेट करें"
      : "Renovate With Confidence",

    simpleProcess: isHindi
      ? "आसान प्रक्रिया"
      : "SIMPLE PROCESS",

    howWorks: isHindi
      ? "रिनोवेशन कैसे काम करता है"
      : "How Renovation Works",

    step: isHindi ? "स्टेप" : "STEP",

    readyTransform: isHindi
      ? "क्या आप अपना घर बदलने के लिए तैयार हैं?"
      : "Ready To Transform",

    yourHome: isHindi
      ? "अपना घर?"
      : "Your Home?",

    finalDescription: isHindi
      ? "अपनी रिनोवेशन जरूरत बताएं और सही प्रोफेशनल से जुड़ें।"
      : "Share your renovation requirements and get connected with a suitable professional.",

    startRequest: isHindi
      ? "अपनी रिनोवेशन रिक्वेस्ट शुरू करें"
      : "Start My Renovation Request",

    professionalExperts: isHindi
      ? "प्रोफेशनल रिनोवेशन एक्सपर्ट्स"
      : "Professional renovation experts",

    transparentDiscussion: isHindi
      ? "पारदर्शी प्रोजेक्ट डिस्कशन"
      : "Transparent project discussion",

    flexibleSolutions: isHindi
      ? "फ्लेक्सिबल रिनोवेशन सॉल्यूशंस"
      : "Flexible renovation solutions",

    qualitySupport: isHindi
      ? "क्वालिटी-फोकस्ड प्रोजेक्ट सपोर्ट"
      : "Quality-focused project support",
  };

  /* ============================================================
     RENOVATION SERVICES
  ============================================================ */

  const renovationServices = [
    {
      id: "complete",
      title: isHindi
        ? "कम्प्लीट होम रिनोवेशन"
        : "Complete Home Renovation",
      subtitle: isHindi
        ? "पूरे घर को नया रूप दें"
        : "Transform your entire home",
      icon: Home,
    },
    {
      id: "kitchen",
      title: isHindi
        ? "किचन रिनोवेशन"
        : "Kitchen Renovation",
      subtitle: isHindi
        ? "मॉडर्न और फंक्शनल किचन अपग्रेड"
        : "Modern & functional kitchen upgrade",
      icon: Layers3,
    },
    {
      id: "bathroom",
      title: isHindi
        ? "बाथरूम रिनोवेशन"
        : "Bathroom Renovation",
      subtitle: isHindi
        ? "अपने बाथरूम को नया रूप दें"
        : "Upgrade your bathroom space",
      icon: Bath,
    },
    {
      id: "bedroom",
      title: isHindi
        ? "बेडरूम रिनोवेशन"
        : "Bedroom Renovation",
      subtitle: isHindi
        ? "अपने पर्सनल स्पेस को रिफ्रेश करें"
        : "Refresh your personal space",
      icon: BedDouble,
    },
    {
      id: "painting",
      title: isHindi
        ? "पेंटिंग और फिनिशिंग"
        : "Painting & Finishing",
      subtitle: isHindi
        ? "अपने घर को नया लुक दें"
        : "Give your home a fresh look",
      icon: Paintbrush,
    },
    {
      id: "repair",
      title: isHindi
        ? "रिपेयर और रिनोवेशन"
        : "Repair & Renovation",
      subtitle: isHindi
        ? "अपनी प्रॉपर्टी को ठीक और बेहतर करें"
        : "Fix and improve your property",
      icon: Wrench,
    },
  ];

  /* ============================================================
     PACKAGES
  ============================================================ */

  const renovationPackages = [
    {
      id: "basic",
      name: isHindi
        ? "बेसिक रिफ्रेश"
        : "Basic Refresh",

      subtitle: isHindi
        ? "जरूरी अपग्रेड के लिए"
        : "For essential upgrades",

      price: "₹49,999",

      features: isHindi
        ? [
            "बेसिक रिपेयर वर्क",
            "स्टैंडर्ड पेंटिंग",
            "जरूरी अपग्रेड्स",
            "प्रोफेशनल सपोर्ट",
          ]
        : [
            "Basic repair work",
            "Standard painting",
            "Essential upgrades",
            "Professional support",
          ],
    },

    {
      id: "premium",
      name: isHindi
        ? "प्रीमियम रिनोवेशन"
        : "Premium Renovation",

      subtitle: isHindi
        ? "सबसे लोकप्रिय विकल्प"
        : "Most popular choice",

      price: isHindi ? "कस्टम" : "Custom",

      popular: true,

      features: isHindi
        ? [
            "कम्प्लीट रिनोवेशन प्लानिंग",
            "प्रीमियम मटेरियल ऑप्शंस",
            "मॉडर्न डिजाइन सपोर्ट",
            "क्वालिटी सुपरविजन",
          ]
        : [
            "Complete renovation planning",
            "Premium material options",
            "Modern design support",
            "Quality supervision",
          ],
    },

    {
      id: "luxury",
      name: isHindi
        ? "लक्ज़री मेकओवर"
        : "Luxury Makeover",

      subtitle: isHindi
        ? "कम्प्लीट प्रीमियम ट्रांसफॉर्मेशन"
        : "Complete premium transformation",

      price: isHindi ? "कस्टम" : "Custom",

      features: isHindi
        ? [
            "प्रीमियम रिनोवेशन डिजाइन",
            "हाई-एंड मटेरियल ऑप्शंस",
            "कस्टम वर्क सॉल्यूशंस",
            "डेडिकेटेड प्रोजेक्ट सपोर्ट",
          ]
        : [
            "Premium renovation design",
            "High-end material options",
            "Custom work solutions",
            "Dedicated project support",
          ],
    },
  ];

  /* ============================================================
     STEPS
  ============================================================ */

  const steps = [
    {
      number: "01",
      title: isHindi
        ? "अपनी जरूरत बताएं"
        : "Share Your Requirement",
      description: isHindi
        ? "बताएं कि आप अपने घर के किस हिस्से को रिनोवेट करना चाहते हैं।"
        : "Tell us what part of your home you want to renovate.",
      icon: Hammer,
    },
    {
      number: "02",
      title: isHindi
        ? "एक्सपर्ट कंसल्टेशन"
        : "Expert Consultation",
      description: isHindi
        ? "हमारे रिनोवेशन एक्सपर्ट आपकी जरूरतों को समझेंगे।"
        : "Our renovation expert understands your requirements.",
      icon: Phone,
    },
    {
      number: "03",
      title: isHindi
        ? "एस्टिमेट पाएं"
        : "Get Estimate",
      description: isHindi
        ? "आपकी रिनोवेशन जरूरत के अनुसार प्रोजेक्ट एस्टिमेट पाएं।"
        : "Receive a project estimate based on your renovation needs.",
      icon: IndianRupee,
    },
    {
      number: "04",
      title: isHindi
        ? "रिनोवेशन शुरू करें"
        : "Start Renovation",
      description: isHindi
        ? "प्लान फाइनल करें और अपने स्पेस को बदलना शुरू करें।"
        : "Finalize the plan and start transforming your space.",
      icon: Sparkles,
    },
  ];

  /* ============================================================
     REQUEST
  ============================================================ */

  const handleRequest = () => {
    router.push(
      "/construction/request?service=renovation"
    );
  };

  return (
    <main className="min-h-screen w-full bg-[#030303]">

      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#080808] pb-[100px] text-white">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl">

          <div className="flex h-[62px] items-center justify-between px-4">

            <button
              type="button"
              onClick={() => router.back()}
              aria-label={t.goBack}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] active:scale-95"
            >
              <ArrowLeft size={21} />
            </button>

            <div className="text-center">

              <p className="text-[8px] font-bold uppercase tracking-[4px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                {t.homeRenovation}
              </p>

            </div>

            <button
              type="button"
              onClick={() =>
                (window.location.href =
                  "tel:+918878632431")
              }
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

        {/* ======================================================
            HERO
        ====================================================== */}

        <section className="px-4 pt-5">

          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#19140D] via-[#111111] to-[#080808]">

            {/* Background glow */}

            <div className="absolute -right-20 -top-20 h-[230px] w-[230px] rounded-full bg-[#DFAE45]/20 blur-[80px]" />

            <div className="absolute -bottom-20 -left-20 h-[180px] w-[180px] rounded-full bg-orange-500/10 blur-[80px]" />

            <div className="relative p-5">

              {/* BADGE */}

              <div className="inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-3 py-1.5">

                <Hammer
                  size={13}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-semibold text-[#E6C36A]">
                  {t.transformSpace}
                </span>

              </div>

              {/* TITLE */}

              <h1 className="mt-5 text-[30px] font-bold leading-[1.1] tracking-tight">

                {t.giveHome}

                <span className="block text-[#DFAE45]">
                  {t.newLife}
                </span>

              </h1>

              <p className="mt-4 max-w-[315px] text-[12px] leading-6 text-white/55">
                {t.heroDescription}
              </p>

              {/* TRUST CARDS */}

              <div className="mt-6 grid grid-cols-3 gap-2">

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">

                  <Hammer
                    size={18}
                    className="text-[#DFAE45]"
                  />

                  <p className="mt-2 text-[10px] font-semibold">
                    {t.experts}
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    {t.skilledTeam}
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

              {/* HERO CTA */}

              <button
                type="button"
                onClick={handleRequest}
                className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
              >
                {t.freeEstimate}

                <ArrowRight size={17} />
              </button>

            </div>
          </div>
        </section>

        {/* ======================================================
            RENOVATION SERVICES
        ====================================================== */}

        <section className="mt-9">

          <div className="px-4">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              {t.whatRenovate}
            </p>

            <h2 className="mt-1 text-[21px] font-bold">
              {t.renovationServices}
            </h2>

          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto px-4 pb-2">

            {renovationServices.map((item) => {

              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={handleRequest}
                  className="min-w-[160px] rounded-[21px] border border-white/[0.07] bg-[#111111] p-4 text-left active:scale-[0.97]"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DFAE45]/10">

                    <Icon
                      size={20}
                      className="text-[#DFAE45]"
                    />

                  </div>

                  <h3 className="mt-4 text-[12px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[9px] leading-4 text-white/40">
                    {item.subtitle}
                  </p>

                  <div className="mt-3 flex items-center text-[9px] text-[#DFAE45]">

                    {t.explore}

                    <ChevronRight size={14} />

                  </div>

                </button>
              );
            })}

          </div>

        </section>

        {/* ======================================================
            PACKAGES
        ====================================================== */}

        <section className="mt-10 px-4">

          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            {t.renovationPackages}
          </p>

          <div className="mt-1 flex items-end justify-between">

            <h2 className="text-[21px] font-bold">
              {t.renovationOptions}
            </h2>

            <span className="text-[9px] text-white/40">
              {t.flexiblePricing}
            </span>

          </div>

          <div className="mt-5 space-y-4">

            {renovationPackages.map((pkg) => (

              <div
                key={pkg.id}
                className={`relative overflow-hidden rounded-[24px] border p-5 ${
                  pkg.popular
                    ? "border-[#DFAE45]/40 bg-gradient-to-br from-[#1C170C] to-[#111111]"
                    : "border-white/[0.07] bg-[#111111]"
                }`}
              >

                {/* POPULAR */}

                {pkg.popular && (
                  <div className="absolute right-4 top-0 rounded-b-xl bg-[#DFAE45] px-3 py-1.5">

                    <span className="text-[8px] font-bold text-black">
                      {t.mostPopular}
                    </span>

                  </div>
                )}

                <div className="flex items-start justify-between gap-3">

                  <div>

                    <h3 className="text-[17px] font-bold">
                      {pkg.name}
                    </h3>

                    <p className="mt-1 text-[10px] text-white/45">
                      {pkg.subtitle}
                    </p>

                  </div>

                  <p className="shrink-0 text-[18px] font-bold text-[#DFAE45]">
                    {pkg.price}
                  </p>

                </div>

                <div className="my-5 h-px bg-white/[0.07]" />

                <div className="space-y-3">

                  {pkg.features.map((feature) => (

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

                  ))}

                </div>

                <button
                  type="button"
                  onClick={handleRequest}
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

        {/* ======================================================
            WHY CHOOSE OURHUB
        ====================================================== */}

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
                  {t.whyOurHub}
                </p>

                <h2 className="mt-1 text-[17px] font-bold">
                  {t.renovateConfidence}
                </h2>

              </div>

            </div>

            <div className="mt-5 space-y-4">

              {[
                t.professionalExperts,
                t.transparentDiscussion,
                t.flexibleSolutions,
                t.qualitySupport,
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

        {/* ======================================================
            HOW IT WORKS
        ====================================================== */}

        <section className="mt-10 px-4">

          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            {t.simpleProcess}
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            {t.howWorks}
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
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/45">
                      {item.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* ======================================================
            FINAL CTA
        ====================================================== */}

        <section className="mt-10 px-4">

          <div className="rounded-[27px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.06] p-5 text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45]/10">

              <Sparkles
                size={22}
                className="text-[#DFAE45]"
              />

            </div>

            <h2 className="mt-4 text-[19px] font-bold">

              {t.readyTransform}

              <span className="block text-[#DFAE45]">
                {t.yourHome}
              </span>

            </h2>

            <p className="mt-3 text-[11px] leading-5 text-white/45">
              {t.finalDescription}
            </p>

            <button
              type="button"
              onClick={handleRequest}
              className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
            >

              {t.startRequest}

              <ArrowRight size={18} />

            </button>

          </div>

        </section>

        <div className="h-8" />

      </div>

      {/* ========================================================
          STICKY CTA
      ======================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#080808]/95 backdrop-blur-xl">

        <div className="mx-auto w-full max-w-[430px] border-t border-white/[0.07] px-4 py-3">

          <button
            type="button"
            onClick={handleRequest}
            className="flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
          >

            <Hammer size={18} />

            {t.freeEstimate}

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </main>
  );
}