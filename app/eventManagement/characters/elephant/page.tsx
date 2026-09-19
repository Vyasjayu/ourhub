"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Gift,
  MapPin,
  MessageCircle,
  Phone,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Music,
  Cake,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

type Localized = {
  en: string;
  hi: string;
};

const WHATSAPP_NUMBER = "918878632431";

/* =========================================================
   PACKAGES
========================================================= */

const packages = [
  {
    id: "basic",
    title: {
      en: "Elephant Appearance",
      hi: "एलीफेंट अपीयरेंस",
    },
    duration: {
      en: "30 Minutes",
      hi: "30 मिनट",
    },
    price: "₹1,499",
    description: {
      en: "A fun elephant character appearance for photos, greetings and kids interaction.",
      hi: "फोटो, ग्रीटिंग्स और बच्चों के इंटरैक्शन के लिए मजेदार एलीफेंट कैरेक्टर अपीयरेंस।",
    },
    popular: false,
    features: [
      {
        en: "Professional elephant character",
        hi: "प्रोफेशनल एलीफेंट कैरेक्टर",
      },
      {
        en: "Kids interaction",
        hi: "बच्चों के साथ इंटरैक्शन",
      },
      {
        en: "Photo & selfie session",
        hi: "फोटो और सेल्फी सेशन",
      },
      {
        en: "Birthday greetings",
        hi: "बर्थडे ग्रीटिंग्स",
      },
    ],
  },
  {
    id: "celebration",
    title: {
      en: "Fun Celebration",
      hi: "फन सेलिब्रेशन",
    },
    duration: {
      en: "60 Minutes",
      hi: "60 मिनट",
    },
    price: "₹1,999",
    description: {
      en: "A complete entertainment experience with games, dance and character interaction.",
      hi: "गेम्स, डांस और कैरेक्टर इंटरैक्शन के साथ कम्प्लीट एंटरटेनमेंट एक्सपीरियंस।",
    },
    popular: true,
    features: [
      {
        en: "Professional elephant character",
        hi: "प्रोफेशनल एलीफेंट कैरेक्टर",
      },
      {
        en: "Kids games & interaction",
        hi: "बच्चों के गेम्स और इंटरैक्शन",
      },
      {
        en: "Dance & fun activities",
        hi: "डांस और फन एक्टिविटीज़",
      },
      {
        en: "Photo & selfie session",
        hi: "फोटो और सेल्फी सेशन",
      },
      {
        en: "Birthday greetings",
        hi: "बर्थडे ग्रीटिंग्स",
      },
      {
        en: "Cake-cutting assistance",
        hi: "केक-कटिंग सहायता",
      },
    ],
  },
  {
    id: "premium",
    title: {
      en: "Grand Party",
      hi: "ग्रैंड पार्टी",
    },
    duration: {
      en: "90 Minutes",
      hi: "90 मिनट",
    },
    price: "₹2,499",
    description: {
      en: "Extended character entertainment for a bigger and more memorable celebration.",
      hi: "बड़े और ज्यादा यादगार सेलिब्रेशन के लिए एक्सटेंडेड कैरेक्टर एंटरटेनमेंट।",
    },
    popular: false,
    features: [
      {
        en: "Professional elephant character",
        hi: "प्रोफेशनल एलीफेंट कैरेक्टर",
      },
      {
        en: "Kids games & activities",
        hi: "बच्चों के गेम्स और एक्टिविटीज़",
      },
      {
        en: "Dance & music entertainment",
        hi: "डांस और म्यूजिक एंटरटेनमेंट",
      },
      {
        en: "Photo & selfie session",
        hi: "फोटो और सेल्फी सेशन",
      },
      {
        en: "Birthday greetings",
        hi: "बर्थडे ग्रीटिंग्स",
      },
      {
        en: "Cake-cutting assistance",
        hi: "केक-कटिंग सहायता",
      },
      {
        en: "Extended guest interaction",
        hi: "एक्सटेंडेड गेस्ट इंटरैक्शन",
      },
    ],
  },
];

/* =========================================================
   SUITABLE FOR
========================================================= */

const suitableFor = [
  {
    icon: Cake,
    title: {
      en: "Birthday Parties",
      hi: "बर्थडे पार्टियां",
    },
    text: {
      en: "Add a unique surprise to your child's special day.",
      hi: "अपने बच्चे के खास दिन में एक अनोखा सरप्राइज जोड़ें।",
    },
  },
  {
    icon: PartyPopper,
    title: {
      en: "Kids Events",
      hi: "किड्स इवेंट्स",
    },
    text: {
      en: "Fun entertainment for children and families.",
      hi: "बच्चों और परिवारों के लिए मजेदार एंटरटेनमेंट।",
    },
  },
  {
    icon: Gift,
    title: {
      en: "School Functions",
      hi: "स्कूल फंक्शन्स",
    },
    text: {
      en: "A colourful character experience for kids events.",
      hi: "बच्चों के इवेंट्स के लिए एक रंगीन कैरेक्टर एक्सपीरियंस।",
    },
  },
  {
    icon: Sparkles,
    title: {
      en: "Special Events",
      hi: "स्पेशल इवेंट्स",
    },
    text: {
      en: "Make celebrations more exciting and memorable.",
      hi: "सेलिब्रेशन को और भी शानदार और यादगार बनाएं।",
    },
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function ElephantCharacterPage() {
  const { language } = useLanguage();

  const [selectedPackage, setSelectedPackage] =
    useState("celebration");

  const selected =
    packages.find(
      (item) => item.id === selectedPackage
    ) || packages[1];

  /* =======================================================
     WHATSAPP MESSAGE
  ======================================================= */

  const whatsappText =
    language === "hi"
      ? `नमस्ते OurHub 👋

मैं एलीफेंट कैरेक्टर एंटरटेनमेंट बुक करना चाहता/चाहती हूं।

पैकेज: ${selected.title.hi}
अवधि: ${selected.duration.hi}
कीमत: ${selected.price}

इवेंट लोकेशन: उज्जैन / रतलाम / इंदौर

कृपया उपलब्धता और बुकिंग की जानकारी साझा करें।`
      : `Hello OurHub 👋

I want to book Elephant Character Entertainment.

Package: ${selected.title.en}
Duration: ${selected.duration.en}
Price: ${selected.price}

Event Location: Ujjain / Ratlam / Indore

Please share availability and booking details.`;

  const whatsappMessage =
    encodeURIComponent(whatsappText);

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-x-hidden bg-[#050B14] pb-28">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050B14]/95 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">

            <Link
              href="/eventManagement"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition active:scale-95"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
                {language === "hi"
                  ? "कैरेक्टर एंटरटेनमेंट"
                  : "Character Entertainment"}
              </p>

              <h1 className="mt-0.5 text-[16px] font-extrabold">
                {language === "hi"
                  ? "एलीफेंट कैरेक्टर"
                  : "Elephant Character"}
              </h1>
            </div>

            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 text-[#DFAE45] transition active:scale-95"
            >
              <MessageCircle size={19} />
            </Link>

          </div>
        </header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="px-4 pt-4">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-[#0A1422] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

            {/* Badge */}

            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/55 px-3 py-1.5 backdrop-blur-md">
              <Sparkles
                size={13}
                className="text-[#DFAE45]"
              />

              <span className="text-[11px] font-bold text-[#F4D58A]">
                {language === "hi"
                  ? "बच्चों का पसंदीदा"
                  : "Kids Favourite"}
              </span>
            </div>

            {/* Rating */}

            <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md">
              <Star
                size={13}
                fill="#DFAE45"
                className="text-[#DFAE45]"
              />

              <span className="text-[11px] font-bold">
                4.9
              </span>
            </div>

            {/* Image */}

            <div className="relative aspect-[4/4.2] w-full overflow-hidden">
              <img
                src="/images/events/elephant.jpg"
                alt={
                  language === "hi"
                    ? "एलीफेंट कैरेक्टर एंटरटेनमेंट"
                    : "Elephant Character Entertainment"
                }
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "/images/events/funny-character.jpg";
                }}
              />

              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050B14] via-[#050B14]/55 to-transparent" />
            </div>

            {/* Hero Content */}

            <div className="relative -mt-8 px-5 pb-5">
              <div className="mb-3 flex items-center gap-2">

                <span className="flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                  <CheckCircle2 size={12} />

                  {language === "hi"
                    ? "वेरिफाइड"
                    : "Verified"}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-bold text-white/70">
                  {language === "hi"
                    ? "कैरेक्टर आर्टिस्ट"
                    : "Character Artist"}
                </span>

              </div>

              <h2 className="text-[27px] font-black tracking-tight">
                {language === "hi"
                  ? "एलीफेंट कैरेक्टर"
                  : "Elephant Character"}
              </h2>

              <p className="mt-1.5 text-[13px] leading-5 text-white/55">
                {language === "hi"
                  ? "मजेदार एलीफेंट कैरेक्टर अपीयरेंस से बच्चों और मेहमानों को सरप्राइज करें और अपने सेलिब्रेशन को यादगार बनाएं।"
                  : "Surprise kids and guests with a fun elephant character appearance designed to make your celebration memorable."}
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK INFO
        ===================================================== */}

        <section className="grid grid-cols-3 gap-2 px-4 pt-3">

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <Clock3
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              {language === "hi"
                ? "30–90 मिनट"
                : "30–90 Min"}
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              {language === "hi"
                ? "अवधि"
                : "Duration"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <Users
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              {language === "hi"
                ? "बच्चे और परिवार"
                : "Kids & Family"}
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              {language === "hi"
                ? "ऑडियंस"
                : "Audience"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <MapPin
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              {language === "hi"
                ? "3 शहर"
                : "3 Cities"}
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              {language === "hi"
                ? "उपलब्ध"
                : "Available"}
            </p>
          </div>

        </section>

        {/* =====================================================
            PACKAGES HEADING
        ===================================================== */}

        <section className="px-5 pt-8">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            {language === "hi"
              ? "अपना एक्सपीरियंस चुनें"
              : "Choose Your Experience"}
          </p>

          <div className="mt-1 flex items-end justify-between">

            <h2 className="text-[21px] font-black tracking-tight">
              {language === "hi"
                ? "एंटरटेनमेंट पैकेजेस"
                : "Entertainment Packages"}
            </h2>

            <span className="text-[10px] text-white/35">
              {language === "hi"
                ? "₹1,499 से शुरू"
                : "Starting ₹1,499"}
            </span>

          </div>
        </section>

        {/* =====================================================
            PACKAGES
        ===================================================== */}

        <section className="space-y-3 px-4 pt-4">

          {packages.map((pkg) => {
            const active =
              selectedPackage === pkg.id;

            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() =>
                  setSelectedPackage(pkg.id)
                }
                className={`relative w-full rounded-[22px] border p-4 text-left transition active:scale-[0.99] ${
                  active
                    ? "border-[#DFAE45]/60 bg-[#DFAE45]/[0.07] shadow-[0_15px_40px_rgba(223,174,69,0.08)]"
                    : "border-white/[0.07] bg-white/[0.025]"
                }`}
              >

                {pkg.popular && (
                  <div className="absolute -top-2.5 right-4 rounded-full bg-[#DFAE45] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black">
                    {language === "hi"
                      ? "सबसे लोकप्रिय"
                      : "Most Popular"}
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <div className="flex items-center gap-2">

                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                          active
                            ? "border-[#DFAE45] bg-[#DFAE45] text-black"
                            : "border-white/20"
                        }`}
                      >
                        {active && (
                          <Check
                            size={12}
                            strokeWidth={3}
                          />
                        )}
                      </span>

                      <h3 className="text-[15px] font-extrabold">
                        {pkg.title[language]}
                      </h3>

                    </div>

                    <div className="ml-7 mt-1 flex items-center gap-2 text-[10px] text-white/40">
                      <Clock3 size={12} />
                      {pkg.duration[language]}
                    </div>

                  </div>

                  <div className="text-right">
                    <p className="text-[19px] font-black text-[#F2CA6D]">
                      {pkg.price}
                    </p>
                  </div>

                </div>

                <p className="mt-3 text-[11px] leading-5 text-white/45">
                  {pkg.description[language]}
                </p>

                <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">

                  {pkg.features.map((feature) => (
                    <div
                      key={feature.en}
                      className="flex items-start gap-1.5 text-[10px] text-white/60"
                    >
                      <Check
                        size={12}
                        className="mt-0.5 shrink-0 text-[#DFAE45]"
                      />

                      <span>
                        {feature[language]}
                      </span>
                    </div>
                  ))}

                </div>

              </button>
            );
          })}

        </section>

        {/* =====================================================
            INCLUDED
        ===================================================== */}

        <section className="px-4 pt-8">

          <div className="rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#DFAE45]/[0.09] to-transparent p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10 text-[#DFAE45]">
                <Music size={21} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                  {language === "hi"
                    ? "एंटरटेनमेंट"
                    : "Entertainment"}
                </p>

                <h3 className="text-[16px] font-extrabold">
                  {language === "hi"
                    ? "क्या शामिल है?"
                    : "What's Included?"}
                </h3>
              </div>

            </div>

            <div className="mt-5 space-y-3">

              {[
                {
                  en: "Professional elephant character costume",
                  hi: "प्रोफेशनल एलीफेंट कैरेक्टर कॉस्ट्यूम",
                },
                {
                  en: "Friendly kids interaction",
                  hi: "बच्चों के साथ फ्रेंडली इंटरैक्शन",
                },
                {
                  en: "Fun games and activities",
                  hi: "फन गेम्स और एक्टिविटीज़",
                },
                {
                  en: "Dance & entertainment",
                  hi: "डांस और एंटरटेनमेंट",
                },
                {
                  en: "Photo and selfie moments",
                  hi: "फोटो और सेल्फी मोमेंट्स",
                },
                {
                  en: "Birthday greetings",
                  hi: "बर्थडे ग्रीटिंग्स",
                },
                {
                  en: "Professional event artist",
                  hi: "प्रोफेशनल इवेंट आर्टिस्ट",
                },
              ].map((item) => (

                <div
                  key={item.en}
                  className="flex items-center gap-3 text-[12px] text-white/65"
                >

                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DFAE45]/10">
                    <Check
                      size={11}
                      className="text-[#DFAE45]"
                    />
                  </span>

                  {item[language]}

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            PERFECT FOR
        ===================================================== */}

        <section className="px-5 pt-8">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            {language === "hi"
              ? "इनके लिए परफेक्ट"
              : "Perfect For"}
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            {language === "hi"
              ? "उनका दिन खास बनाएं"
              : "Make Their Day Special"}
          </h2>

        </section>

        <section className="grid grid-cols-2 gap-3 px-4 pt-4">

          {suitableFor.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title.en}
                className="rounded-[20px] border border-white/[0.07] bg-white/[0.025] p-4"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
                  <Icon size={19} />
                </div>

                <h3 className="mt-3 text-[13px] font-extrabold">
                  {item.title[language]}
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-white/40">
                  {item.text[language]}
                </p>

              </div>
            );
          })}

        </section>

        {/* =====================================================
            BOOKING PROCESS
        ===================================================== */}

        <section className="px-5 pt-9">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            {language === "hi"
              ? "सिंपल बुकिंग"
              : "Simple Booking"}
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            {language === "hi"
              ? "3 आसान स्टेप्स में बुक करें"
              : "Book in 3 Easy Steps"}
          </h2>

        </section>

        <section className="mt-4 space-y-3 px-4">

          {[
            {
              number: "01",
              title: {
                en: "Choose Package",
                hi: "पैकेज चुनें",
              },
              text: {
                en: "Select the elephant entertainment package for your event.",
                hi: "अपने इवेंट के लिए एलीफेंट एंटरटेनमेंट पैकेज चुनें।",
              },
            },
            {
              number: "02",
              title: {
                en: "Share Event Details",
                hi: "इवेंट डिटेल्स शेयर करें",
              },
              text: {
                en: "Tell us your event date, time and location.",
                hi: "हमें अपने इवेंट की तारीख, समय और लोकेशन बताएं।",
              },
            },
            {
              number: "03",
              title: {
                en: "Confirm Booking",
                hi: "बुकिंग कन्फर्म करें",
              },
              text: {
                en: "OurHub team checks availability and confirms your booking.",
                hi: "OurHub टीम उपलब्धता चेक करके आपकी बुकिंग कन्फर्म करती है।",
              },
            },
          ].map((step) => (

            <div
              key={step.number}
              className="flex items-center gap-4 rounded-[20px] border border-white/[0.07] bg-white/[0.025] p-4"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10 text-[12px] font-black text-[#DFAE45]">
                {step.number}
              </div>

              <div className="min-w-0">

                <h3 className="text-[13px] font-extrabold">
                  {step.title[language]}
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-white/40">
                  {step.text[language]}
                </p>

              </div>

              <ChevronRight
                size={17}
                className="ml-auto shrink-0 text-white/20"
              />

            </div>
          ))}

        </section>

        {/* =====================================================
            TRUST
        ===================================================== */}

        <section className="px-4 pt-8">

          <div className="rounded-[24px] border border-emerald-400/10 bg-emerald-400/[0.035] p-5">

            <div className="flex items-start gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                <ShieldCheck size={22} />
              </div>

              <div>

                <h3 className="text-[15px] font-extrabold">
                  {language === "hi"
                    ? "OurHub के साथ बुक क्यों करें?"
                    : "Why Book With OurHub?"}
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-white/45">
                  {language === "hi"
                    ? "हम प्रोफेशनल कैरेक्टर एंटरटेनमेंट कोऑर्डिनेट करते हैं ताकि आप बिना किसी परेशानी के अपने सेलिब्रेशन का आनंद ले सकें।"
                    : "We coordinate professional character entertainment so you can enjoy your celebration without the hassle."}
                </p>

              </div>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">

              {[
                {
                  en: "Verified Artists",
                  hi: "वेरिफाइड आर्टिस्ट्स",
                },
                {
                  en: "Clear Pricing",
                  hi: "क्लियर प्राइसिंग",
                },
                {
                  en: "On-Time Service",
                  hi: "समय पर सर्विस",
                },
                {
                  en: "Easy Booking",
                  hi: "आसान बुकिंग",
                },
              ].map((item) => (

                <div
                  key={item.en}
                  className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3 py-2.5 text-[10px] font-semibold text-white/60"
                >

                  <CheckCircle2
                    size={13}
                    className="text-emerald-300"
                  />

                  {item[language]}

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            LOCATION
        ===================================================== */}

        <section className="px-4 pt-5">

          <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5">

            <MapPin
              size={18}
              className="text-[#DFAE45]"
            />

            <div>

              <p className="text-[10px] text-white/35">
                {language === "hi"
                  ? "वर्तमान में उपलब्ध"
                  : "Currently Available In"}
              </p>

              <p className="mt-0.5 text-[12px] font-bold text-white/80">
                {language === "hi"
                  ? "उज्जैन • रतलाम • इंदौर"
                  : "Ujjain • Ratlam • Indore"}
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="px-4 pt-6">

          <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-5">

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45] text-black">
                <PartyPopper size={23} />
              </div>

              <h2 className="mt-4 text-[22px] font-black tracking-tight">
                {language === "hi"
                  ? "अपने सेलिब्रेशन को यादगार बनाएं"
                  : "Make Your Celebration Unforgettable"}
              </h2>

              <p className="mt-2 text-[11px] leading-5 text-white/45">
                {language === "hi"
                  ? "अपना पैकेज चुनें और अपने इवेंट के लिए एलीफेंट कैरेक्टर की उपलब्धता चेक करने के लिए OurHub से संपर्क करें।"
                  : "Select your package and contact OurHub to check elephant character availability for your event."}
              </p>

              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[12px] font-black text-black shadow-[0_12px_35px_rgba(223,174,69,0.18)] transition active:scale-[0.98]"
              >
                <MessageCircle size={17} />

                {language === "hi"
                  ? `${selected.title.hi} बुक करें`
                  : `Book ${selected.title.en}`}
              </Link>

            </div>
          </div>

        </section>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-[430px] border-t border-white/[0.07] bg-[#050B14]/95 p-3 backdrop-blur-xl">

          <div className="flex gap-2">

            <a
              href="tel:+918878632431"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
              aria-label={
                language === "hi"
                  ? "OurHub को कॉल करें"
                  : "Call OurHub"
              }
            >
              <Phone size={18} />
            </a>

            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[12px] font-black text-black shadow-[0_10px_30px_rgba(223,174,69,0.15)] transition active:scale-[0.98]"
            >
              <MessageCircle size={17} />

              {language === "hi"
                ? "उपलब्धता चेक करें"
                : "Check Availability"}
            </Link>

            <Link
              href="/eventManagement"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
              aria-label={
                language === "hi"
                  ? "वापस जाएं"
                  : "Go Back"
              }
            >
              <ArrowLeft size={18} />
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}