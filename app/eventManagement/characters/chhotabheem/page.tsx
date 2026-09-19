"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Crown,
  Gift,
  MapPin,
  MessageCircle,
  PartyPopper,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WandSparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   TYPES
========================================================= */

type Localized = {
  en: string;
  hi: string;
};

/* =========================================================
   PAGE DATA
========================================================= */

const heroImage = "/images/events/chhotabheem.jpg";

const includedServices: Localized[] = [
  {
    en: "Chhota Bheem character artist",
    hi: "छोटा भीम कैरेक्टर आर्टिस्ट",
  },
  {
    en: "Professional costume & character appearance",
    hi: "प्रोफेशनल कॉस्ट्यूम और कैरेक्टर अपीयरेंस",
  },
  {
    en: "Kids interaction & entertainment",
    hi: "बच्चों के साथ इंटरैक्शन और एंटरटेनमेंट",
  },
  {
    en: "Birthday celebration activities",
    hi: "बर्थडे सेलिब्रेशन एक्टिविटीज़",
  },
  {
    en: "Photo & selfie moments",
    hi: "फोटो और सेल्फी मोमेंट्स",
  },
  {
    en: "Fun dance & audience interaction",
    hi: "फन डांस और ऑडियंस इंटरैक्शन",
  },
];

const suitableFor = [
  {
    icon: Gift,
    title: {
      en: "Birthday Parties",
      hi: "बर्थडे पार्टियां",
    },
    text: {
      en: "Make your child's birthday extra special.",
      hi: "अपने बच्चे के जन्मदिन को और भी खास बनाएं।",
    },
  },
  {
    icon: PartyPopper,
    title: {
      en: "Family Events",
      hi: "फैमिली इवेंट्स",
    },
    text: {
      en: "Fun entertainment for family celebrations.",
      hi: "फैमिली सेलिब्रेशन के लिए मजेदार एंटरटेनमेंट।",
    },
  },
  {
    icon: Users,
    title: {
      en: "Kids Functions",
      hi: "बच्चों के फंक्शन्स",
    },
    text: {
      en: "Perfect for school and kids gatherings.",
      hi: "स्कूल और बच्चों के गैदरिंग्स के लिए परफेक्ट।",
    },
  },
  {
    icon: Sparkles,
    title: {
      en: "Special Events",
      hi: "स्पेशल इवेंट्स",
    },
    text: {
      en: "Add a memorable character experience.",
      hi: "एक यादगार कैरेक्टर एक्सपीरियंस जोड़ें।",
    },
  },
];

const packages = [
  {
    title: {
      en: "Basic Appearance",
      hi: "बेसिक अपीयरेंस",
    },
    duration: {
      en: "30 Minutes",
      hi: "30 मिनट",
    },
    description: {
      en: "Character appearance & kids interaction.",
      hi: "कैरेक्टर अपीयरेंस और बच्चों के साथ इंटरैक्शन।",
    },
    price: "₹999",
    popular: false,
  },
  {
    title: {
      en: "Fun Celebration",
      hi: "फन सेलिब्रेशन",
    },
    duration: {
      en: "60 Minutes",
      hi: "60 मिनट",
    },
    description: {
      en: "Character appearance, interaction & activities.",
      hi: "कैरेक्टर अपीयरेंस, इंटरैक्शन और एक्टिविटीज़।",
    },
    price: "₹1,499",
    popular: true,
  },
  {
    title: {
      en: "Premium Party",
      hi: "प्रीमियम पार्टी",
    },
    duration: {
      en: "90 Minutes",
      hi: "90 मिनट",
    },
    description: {
      en: "Extended entertainment with complete interaction.",
      hi: "कम्प्लीट इंटरैक्शन के साथ एक्सटेंडेड एंटरटेनमेंट।",
    },
    price: "₹1,999",
    popular: false,
  },
];

/* =========================================================
   WHATSAPP
========================================================= */

const whatsappNumber = "918878632431";

function getWhatsAppLink(
  packageName?: Localized,
  language: "en" | "hi" = "en"
) {
  const message =
    language === "hi"
      ? `नमस्ते OurHub 👋

मैं छोटा भीम कैरेक्टर एंटरटेनमेंट बुक करना चाहता/चाहती हूं।

पैकेज: ${
          packageName?.hi || "कृपया पैकेज सुझाएं"
        }
लोकेशन: 
इवेंट की तारीख: 
इवेंट टाइप: 

कृपया उपलब्धता और अंतिम कीमत साझा करें।

धन्यवाद,
OurHub Customer`
      : `Hello OurHub 👋

I am interested in booking Chhota Bheem Character Entertainment.

Package: ${
          packageName?.en || "Please suggest"
        }
Location: 
Event Date: 
Event Type: 

Please share availability and final pricing.

Thank you,
OurHub Customer`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

/* =========================================================
   PAGE
========================================================= */

export default function ChhotaBheemPage() {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  return (
    <main className="min-h-screen bg-[#050B14] pb-24 text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050B14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[430px] items-center gap-3 px-4 py-3.5">
          <Link
            href="/eventManagement"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition active:scale-95"
          >
            <ArrowLeft size={19} />
          </Link>

          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              OurHub Entertainment
            </p>

            <h1 className="truncate text-[16px] font-bold">
              {isHindi ? "छोटा भीम" : "Chhota Bheem"}
            </h1>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <WandSparkles
              size={18}
              className="text-[#DFAE45]"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[430px] px-4">
        {/* ===================================================
            HERO
        =================================================== */}

        <section className="relative mt-4 overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-[#0A111D]">
          {/* IMAGE */}

          <div className="relative h-[300px] overflow-hidden">
            <img
              src={heroImage}
              alt={
                isHindi
                  ? "छोटा भीम कैरेक्टर एंटरटेनमेंट"
                  : "Chhota Bheem character entertainment"
              }
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/30 to-black/10" />

            {/* TOP BADGE */}

            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-[#DFAE45]/30 bg-black/60 px-3 py-1.5 backdrop-blur-md">
              <Sparkles
                size={12}
                className="text-[#DFAE45]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#F3D27A]">
                {isHindi
                  ? "बच्चों का पसंदीदा"
                  : "Kids Favourite"}
              </span>
            </div>

            {/* VERIFIED */}

            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-black/60 px-2.5 py-1.5 backdrop-blur-md">
              <BadgeCheck
                size={13}
                className="text-emerald-400"
              />

              <span className="text-[9px] font-bold text-white">
                {isHindi ? "वेरिफाइड" : "Verified"}
              </span>
            </div>

            {/* HERO CONTENT */}

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                    {isHindi
                      ? "कैरेक्टर एंटरटेनमेंट"
                      : "Character Entertainment"}
                  </p>

                  <h2 className="mt-1 text-[28px] font-extrabold leading-tight">
                    {isHindi ? "छोटा भीम" : "Chhota Bheem"}
                  </h2>

                  <p className="mt-1 text-[11px] text-gray-300">
                    {isHindi
                      ? "बच्चों के लिए मजेदार गेम्स और यादगार पलों से भरपूर।"
                      : "Fun, games & unforgettable moments for kids."}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-1 rounded-xl border border-[#DFAE45]/20 bg-black/50 px-2.5 py-2 backdrop-blur-md">
                  <Star
                    size={13}
                    fill="currentColor"
                    className="text-[#DFAE45]"
                  />

                  <span className="text-[11px] font-bold">
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* HERO FOOTER */}

          <div className="grid grid-cols-3 divide-x divide-white/[0.07] border-t border-white/[0.06]">
            <div className="px-3 py-3 text-center">
              <Clock3
                size={15}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-1 text-[9px] text-gray-500">
                {isHindi ? "फ्लेक्सिबल" : "Flexible"}
              </p>
            </div>

            <div className="px-3 py-3 text-center">
              <Users
                size={15}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-1 text-[9px] text-gray-500">
                {isHindi
                  ? "बच्चों के लिए उपयुक्त"
                  : "Kids Friendly"}
              </p>
            </div>

            <div className="px-3 py-3 text-center">
              <MapPin
                size={15}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-1 text-[9px] text-gray-500">
                {isHindi
                  ? "उज्जैन और आसपास"
                  : "Ujjain & Nearby"}
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================
            INTRO
        =================================================== */}

        <section className="mt-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
            {isHindi
              ? "उनका दिन खास बनाएं"
              : "Make Their Day Special"}
          </p>

          <h2 className="mt-1 text-[21px] font-extrabold">
            {isHindi ? (
              <>
                छोटा भीम को
                <br />
                <span className="text-[#DFAE45]">
                  आपके सेलिब्रेशन में लाएं
                </span>
              </>
            ) : (
              <>
                Bring Chhota Bheem
                <br />
                <span className="text-[#DFAE45]">
                  To Your Celebration
                </span>
              </>
            )}
          </h2>

          <p className="mt-2 text-[12px] leading-6 text-gray-400">
            {isHindi
              ? "बच्चों को उनके पसंदीदा कैरेक्टर से सरप्राइज करें और मस्ती, इंटरैक्शन, फोटोज़ और एंटरटेनमेंट से भरे शानदार पल बनाएं।"
              : "Surprise children with their favourite character and create exciting moments filled with fun, interaction, photographs and entertainment."}
          </p>
        </section>

        {/* ===================================================
            QUICK INFO
        =================================================== */}

        <section className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <CalendarDays
                size={17}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-3 text-[10px] text-gray-500">
              {isHindi
                ? "उपलब्ध है"
                : "Available For"}
            </p>

            <h3 className="mt-0.5 text-[13px] font-bold">
              {isHindi
                ? "बर्थडे और इवेंट्स"
                : "Birthdays & Events"}
            </h3>
          </div>

          <div className="rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <Crown
                size={17}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-3 text-[10px] text-gray-500">
              {isHindi
                ? "शुरुआत कीमत"
                : "Starting From"}
            </p>

            <h3 className="mt-0.5 text-[13px] font-bold">
              ₹999
            </h3>
          </div>
        </section>

        {/* ===================================================
            PACKAGES
        =================================================== */}

        <section className="mt-9">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              {isHindi
                ? "अपना पैकेज चुनें"
                : "Choose Your Package"}
            </p>

            <h2 className="mt-1 text-[20px] font-bold">
              {isHindi
                ? "एंटरटेनमेंट पैकेजेस"
                : "Entertainment Packages"}
            </h2>

            <p className="mt-1 text-[11px] text-gray-500">
              {isHindi
                ? "अपने सेलिब्रेशन के अनुसार सही एक्सपीरियंस चुनें।"
                : "Select the experience that fits your celebration."}
            </p>
          </div>

          <div className="space-y-3">
            {packages.map((pkg) => (
              <div
                key={pkg.title.en}
                className={`relative overflow-hidden rounded-[22px] border p-4 ${
                  pkg.popular
                    ? "border-[#DFAE45]/40 bg-gradient-to-br from-[#DFAE45]/10 via-[#0A111D] to-[#0A111D]"
                    : "border-white/[0.07] bg-white/[0.03]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-3 top-3 rounded-full bg-[#DFAE45] px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wide text-black">
                    {isHindi
                      ? "सबसे लोकप्रिय"
                      : "Most Popular"}
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-[14px] font-bold">
                      {pkg.title[language]}
                    </h3>

                    <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#DFAE45]">
                      <Clock3 size={11} />
                      {pkg.duration[language]}
                    </div>

                    <p className="mt-2 max-w-[235px] text-[10px] leading-4 text-gray-500">
                      {pkg.description[language]}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-[9px] text-gray-500">
                      {isHindi
                        ? "शुरुआत"
                        : "Starting"}
                    </p>

                    <p className="mt-0.5 text-[18px] font-extrabold text-[#DFAE45]">
                      {pkg.price}
                    </p>
                  </div>
                </div>

                <Link
                  href={getWhatsAppLink(
                    pkg.title,
                    language
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/25 bg-[#DFAE45]/10 py-2.5 text-[11px] font-bold text-[#F3D27A] transition active:scale-[0.98]"
                >
                  {isHindi
                    ? "इस पैकेज के बारे में पूछें"
                    : "Enquire About This Package"}

                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            WHAT'S INCLUDED
        =================================================== */}

        <section className="mt-9 rounded-[24px] border border-white/[0.07] bg-[#0A111D] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <BadgeCheck
                size={19}
                className="text-[#DFAE45]"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                {isHindi ? "शामिल है" : "Included"}
              </p>

              <h2 className="text-[18px] font-bold">
                {isHindi
                  ? "आपको क्या मिलेगा"
                  : "What You Get"}
              </h2>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {includedServices.map((item) => (
              <div
                key={item.en}
                className="flex items-center gap-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFAE45]/10">
                  <Check
                    size={13}
                    className="text-[#DFAE45]"
                  />
                </div>

                <p className="text-[11px] text-gray-300">
                  {item[language]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            SUITABLE FOR
        =================================================== */}

        <section className="mt-9">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              {isHindi
                ? "इनके लिए परफेक्ट"
                : "Perfect For"}
            </p>

            <h2 className="mt-1 text-[20px] font-bold">
              {isHindi
                ? "इसे कहां बुक कर सकते हैं?"
                : "Where Can You Book It?"}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {suitableFor.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title.en}
                  className="rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                    <Icon
                      size={17}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <h3 className="mt-3 text-[12px] font-bold">
                    {item.title[language]}
                  </h3>

                  <p className="mt-1 text-[9px] leading-4 text-gray-500">
                    {item.text[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================
            HOW IT WORKS
        =================================================== */}

        <section className="mt-9 overflow-hidden rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#17130A] via-[#0A111D] to-[#0A111D] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <Sparkles
                size={18}
                className="text-[#DFAE45]"
              />
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#DFAE45]">
                {isHindi
                  ? "सिंपल बुकिंग"
                  : "Simple Booking"}
              </p>

              <h2 className="text-[18px] font-bold">
                {isHindi
                  ? "3 आसान स्टेप्स में प्लान करें"
                  : "Plan In 3 Easy Steps"}
              </h2>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                01
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  {isHindi
                    ? "अपनी जरूरत भेजें"
                    : "Send Your Requirement"}
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  {isHindi
                    ? "हमें अपनी इवेंट तारीख, लोकेशन और सेलिब्रेशन टाइप बताएं।"
                    : "Tell us your event date, location and celebration type."}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                02
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  {isHindi
                    ? "उपलब्धता कन्फर्म करें"
                    : "Confirm Availability"}
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  {isHindi
                    ? "OurHub टीम आपकी तारीख के लिए कैरेक्टर की उपलब्धता चेक करती है।"
                    : "OurHub team checks character availability for your date."}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                03
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  {isHindi
                    ? "सेलिब्रेशन का आनंद लें"
                    : "Enjoy The Celebration"}
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  {isHindi
                    ? "हमारा कैरेक्टर एंटरटेनर आएगा और आपकी पार्टी को यादगार बनाएगा।"
                    : "Our character entertainer arrives and makes the party memorable."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            TRUST
        =================================================== */}

        <section className="mt-9">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              {isHindi ? "OurHub क्यों" : "Why OurHub"}
            </p>

            <h2 className="mt-1 text-[20px] font-bold">
              {isHindi
                ? "भरोसेमंद एंटरटेनमेंट"
                : "Entertainment You Can Trust"}
            </h2>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <ShieldCheck
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  {isHindi
                    ? "वेरिफाइड एंटरटेनमेंट पार्टनर्स"
                    : "Verified Entertainment Partners"}
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-500">
                  {isHindi
                    ? "OurHub के माध्यम से भरोसेमंद प्रोफेशनल्स की व्यवस्था।"
                    : "Trusted professionals arranged through OurHub."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <BadgeCheck
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  {isHindi
                    ? "क्वालिटी-फोकस्ड सर्विस"
                    : "Quality-Focused Service"}
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-500">
                  {isHindi
                    ? "प्रोफेशनल अपीयरेंस और कस्टमर-फर्स्ट सपोर्ट।"
                    : "Professional appearance and customer-first support."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <MessageCircle
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  {isHindi
                    ? "डायरेक्ट सपोर्ट"
                    : "Direct Support"}
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-500">
                  {isHindi
                    ? "OurHub से आसान इन्क्वायरी और तेज सहायता।"
                    : "Easy enquiry and quick assistance from OurHub."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            LOCATION
        =================================================== */}

        <section className="mt-9 rounded-[22px] border border-[#DFAE45]/15 bg-[#0A111D] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <MapPin
                size={18}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="flex-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#DFAE45]">
                {isHindi
                  ? "सर्विस लोकेशन्स"
                  : "Service Locations"}
              </p>

              <h3 className="mt-1 text-[12px] font-bold">
                {isHindi
                  ? "उज्जैन • रतलाम • इंदौर"
                  : "Ujjain • Ratlam • Indore"}
              </h3>
            </div>

            <ChevronRight
              size={16}
              className="text-gray-600"
            />
          </div>
        </section>

        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <section className="relative mt-9 overflow-hidden rounded-[26px] border border-[#DFAE45]/25 bg-gradient-to-br from-[#201A0B] via-[#0D1119] to-[#080C14] p-5">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]">
              <PartyPopper
                size={21}
                className="text-black"
              />
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              {isHindi
                ? "सेलिब्रेट करने के लिए तैयार?"
                : "Ready To Celebrate?"}
            </p>

            <h2 className="mt-1 text-[22px] font-extrabold leading-tight">
              {isHindi ? (
                <>
                  अपनी पार्टी में
                  <br />
                  <span className="text-[#DFAE45]">
                    मज़ा लाएं
                  </span>
                </>
              ) : (
                <>
                  Bring The Fun
                  <br />
                  <span className="text-[#DFAE45]">
                    To Your Party
                  </span>
                </>
              )}
            </h2>

            <p className="mt-2 max-w-[310px] text-[11px] leading-5 text-gray-400">
              {isHindi
                ? "अपनी इवेंट डिटेल्स OurHub के साथ शेयर करें और हम आपके लिए परफेक्ट कैरेक्टर एंटरटेनमेंट एक्सपीरियंस की व्यवस्था करने में मदद करेंगे।"
                : "Share your event details with OurHub and let us help arrange the perfect character entertainment experience."}
            </p>

            <Link
              href={getWhatsAppLink(
                undefined,
                language
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-[13px] font-extrabold text-black shadow-[0_10px_35px_rgba(223,174,69,0.18)] transition active:scale-[0.98]"
            >
              <MessageCircle size={17} />

              {isHindi
                ? "WhatsApp पर पूछताछ करें"
                : "Enquire on WhatsApp"}

              <ArrowRight size={16} />
            </Link>

            <div className="mt-3 flex items-center justify-center gap-2 text-[9px] text-gray-600">
              <ShieldCheck
                size={12}
                className="text-[#DFAE45]"
              />

              {isHindi
                ? "कोई बाध्यता नहीं • तुरंत जवाब"
                : "No obligation • Quick response"}
            </div>
          </div>
        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="mt-8 pb-5 text-center">
          <div className="flex items-center justify-center gap-2 text-[9px] text-gray-700">
            <div className="h-px w-8 bg-white/10" />

            <span>OURHUB ENTERTAINMENT</span>

            <div className="h-px w-8 bg-white/10" />
          </div>

          <p className="mt-2 text-[9px] text-gray-700">
            {isHindi
              ? "आपकी सभी सर्विसेज। एक ही हब।"
              : "All your services. One hub."}
          </p>
        </div>
      </div>

      {/* =====================================================
          STICKY BOTTOM CTA
      ===================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.08] bg-[#050B14]/95 p-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[430px] items-center gap-2">
          <a
            href={`tel:+91${whatsappNumber.slice(2)}`}
            className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]"
            aria-label={
              isHindi
                ? "OurHub को कॉल करें"
                : "Call OurHub"
            }
          >
            <Phone
              size={18}
              className="text-[#DFAE45]"
            />
          </a>

          <Link
            href={getWhatsAppLink(
              undefined,
              language
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-extrabold text-black shadow-[0_8px_25px_rgba(223,174,69,0.16)] transition active:scale-[0.98]"
          >
            <MessageCircle size={17} />

            {isHindi
              ? "छोटा भीम बुक करें"
              : "Book Chhota Bheem"}
          </Link>
        </div>
      </div>
    </main>
  );
}