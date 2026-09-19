"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Crown,
  Flower2,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WandSparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "918878632431";

/* =========================================================
   TYPES
========================================================= */

type LocalizedText = {
  en: string;
  hi: string;
};

/* =========================================================
   PACKAGES
========================================================= */

const packages = [
  {
    id: "elegant",
    title: {
      en: "Elegant Floral Entry",
      hi: "एलिगेंट फ्लोरल एंट्री",
    },
    duration: {
      en: "30–45 Minutes",
      hi: "30–45 मिनट",
    },
    price: "₹4,999",
    description: {
      en: "A graceful floral bridal entry with beautiful flowers and elegant styling.",
      hi: "खूबसूरत फूलों और एलिगेंट स्टाइलिंग के साथ एक शानदार फ्लोरल ब्राइडल एंट्री।",
    },
    popular: false,
    features: [
      {
        en: "Floral entry planning",
        hi: "फ्लोरल एंट्री प्लानिंग",
      },
      {
        en: "Fresh / premium artificial flowers",
        hi: "फ्रेश / प्रीमियम आर्टिफिशियल फूल",
      },
      {
        en: "Decorated entry pathway",
        hi: "डेकोरेटेड एंट्री पाथवे",
      },
      {
        en: "Music coordination",
        hi: "म्यूजिक कोऑर्डिनेशन",
      },
      {
        en: "Bride entry coordination",
        hi: "ब्राइड एंट्री कोऑर्डिनेशन",
      },
      {
        en: "Photo-ready setup",
        hi: "फोटो-रेडी सेटअप",
      },
    ],
  },
  {
    id: "royal",
    title: {
      en: "Royal Floral Entry",
      hi: "रॉयल फ्लोरल एंट्री",
    },
    duration: {
      en: "45–60 Minutes",
      hi: "45–60 मिनट",
    },
    price: "₹7,999",
    description: {
      en: "A grand floral entry designed to create a stunning bridal arrival.",
      hi: "शानदार ब्राइडल अराइवल के लिए डिजाइन की गई एक ग्रैंड फ्लोरल एंट्री।",
    },
    popular: true,
    features: [
      {
        en: "Complete floral entry setup",
        hi: "कम्प्लीट फ्लोरल एंट्री सेटअप",
      },
      {
        en: "Premium floral decoration",
        hi: "प्रीमियम फ्लोरल डेकोरेशन",
      },
      {
        en: "Decorated bridal pathway",
        hi: "डेकोरेटेड ब्राइडल पाथवे",
      },
      {
        en: "Music & announcement",
        hi: "म्यूजिक और अनाउंसमेंट",
      },
      {
        en: "Entry coordination",
        hi: "एंट्री कोऑर्डिनेशन",
      },
      {
        en: "Special photo moments",
        hi: "स्पेशल फोटो मोमेंट्स",
      },
      {
        en: "Dedicated event support",
        hi: "डेडिकेटेड इवेंट सपोर्ट",
      },
    ],
  },
  {
    id: "luxury",
    title: {
      en: "Luxury Floral Entry",
      hi: "लक्ज़री फ्लोरल एंट्री",
    },
    duration: {
      en: "60–90 Minutes",
      hi: "60–90 मिनट",
    },
    price: "₹11,999",
    description: {
      en: "A customised luxury floral entry with premium styling for a royal wedding.",
      hi: "रॉयल वेडिंग के लिए प्रीमियम स्टाइलिंग के साथ कस्टमाइज्ड लक्ज़री फ्लोरल एंट्री।",
    },
    popular: false,
    features: [
      {
        en: "Custom floral entry concept",
        hi: "कस्टम फ्लोरल एंट्री कॉन्सेप्ट",
      },
      {
        en: "Luxury flower styling",
        hi: "लक्ज़री फ्लावर स्टाइलिंग",
      },
      {
        en: "Premium entry props",
        hi: "प्रीमियम एंट्री प्रॉप्स",
      },
      {
        en: "Special lighting coordination",
        hi: "स्पेशल लाइटिंग कोऑर्डिनेशन",
      },
      {
        en: "Music & announcement",
        hi: "म्यूजिक और अनाउंसमेंट",
      },
      {
        en: "Professional event coordinator",
        hi: "प्रोफेशनल इवेंट कोऑर्डिनेटर",
      },
      {
        en: "Dedicated event support",
        hi: "डेडिकेटेड इवेंट सपोर्ट",
      },
    ],
  },
];

/* =========================================================
   FLORAL STYLES
========================================================= */

const floralStyles = [
  {
    icon: Flower2,
    title: {
      en: "Flower Canopy",
      hi: "फ्लावर कैनोपी",
    },
    text: {
      en: "A beautiful floral canopy for an elegant bride entrance.",
      hi: "एलिगेंट ब्राइड एंट्री के लिए खूबसूरत फ्लोरल कैनोपी।",
    },
  },
  {
    icon: Crown,
    title: {
      en: "Royal Floral",
      hi: "रॉयल फ्लोरल",
    },
    text: {
      en: "A grand flower setup designed for a luxury wedding.",
      hi: "लक्ज़री वेडिंग के लिए डिजाइन किया गया ग्रैंड फ्लावर सेटअप।",
    },
  },
  {
    icon: WandSparkles,
    title: {
      en: "Floral Pathway",
      hi: "फ्लोरल पाथवे",
    },
    text: {
      en: "Create a magical walkway decorated with beautiful flowers.",
      hi: "खूबसूरत फूलों से सजे मैजिकल वॉकवे का आनंद लें।",
    },
  },
  {
    icon: Sparkles,
    title: {
      en: "Custom Theme",
      hi: "कस्टम थीम",
    },
    text: {
      en: "Match flowers and styling with your wedding colour theme.",
      hi: "फूलों और स्टाइलिंग को अपनी वेडिंग कलर थीम के अनुसार चुनें।",
    },
  },
];

/* =========================================================
   INCLUDED
========================================================= */

const includedItems: LocalizedText[] = [
  {
    en: "Bridal entry planning",
    hi: "ब्राइडल एंट्री प्लानिंग",
  },
  {
    en: "Floral decoration & styling",
    hi: "फ्लोरल डेकोरेशन और स्टाइलिंग",
  },
  {
    en: "Decorated entry pathway",
    hi: "डेकोरेटेड एंट्री पाथवे",
  },
  {
    en: "Flower canopy / backdrop options",
    hi: "फ्लावर कैनोपी / बैकड्रॉप ऑप्शंस",
  },
  {
    en: "Music & announcement coordination",
    hi: "म्यूजिक और अनाउंसमेंट कोऑर्डिनेशन",
  },
  {
    en: "Bride & family photo moments",
    hi: "ब्राइड और फैमिली फोटो मोमेंट्स",
  },
  {
    en: "Professional event support",
    hi: "प्रोफेशनल इवेंट सपोर्ट",
  },
];

/* =========================================================
   WHY FLORAL ENTRY
========================================================= */

const whyFloralEntry = [
  {
    icon: Heart,
    title: {
      en: "Beautiful First Impression",
      hi: "खूबसूरत फर्स्ट इम्प्रेशन",
    },
    text: {
      en: "Create a stunning first moment as the bride enters the celebration.",
      hi: "दुल्हन की एंट्री को एक शानदार और यादगार पहला पल बनाएं।",
    },
  },
  {
    icon: Sparkles,
    title: {
      en: "Perfect for Photography",
      hi: "फोटोग्राफी के लिए परफेक्ट",
    },
    text: {
      en: "A floral setup creates a beautiful backdrop for wedding photographs.",
      hi: "फ्लोरल सेटअप वेडिंग फोटोग्राफ्स के लिए खूबसूरत बैकड्रॉप बनाता है।",
    },
  },
  {
    icon: Crown,
    title: {
      en: "Luxury Wedding Feel",
      hi: "लक्ज़री वेडिंग फील",
    },
    text: {
      en: "Add an elegant and premium touch to your wedding entrance.",
      hi: "अपनी वेडिंग एंट्रेंस में एलिगेंट और प्रीमियम टच जोड़ें।",
    },
  },
];

/* =========================================================
   BOOKING PROCESS
========================================================= */

const bookingSteps = [
  {
    number: "01",
    title: {
      en: "Choose Your Style",
      hi: "अपना स्टाइल चुनें",
    },
    text: {
      en: "Select an elegant, royal or customised floral entry.",
      hi: "एलिगेंट, रॉयल या कस्टमाइज्ड फ्लोरल एंट्री चुनें।",
    },
  },
  {
    number: "02",
    title: {
      en: "Share Wedding Details",
      hi: "वेडिंग डिटेल्स शेयर करें",
    },
    text: {
      en: "Tell us your wedding date, venue, timing and requirements.",
      hi: "अपनी शादी की तारीख, वेन्यू, टाइमिंग और जरूरतें बताएं।",
    },
  },
  {
    number: "03",
    title: {
      en: "Confirm Your Entry",
      hi: "अपनी एंट्री कन्फर्म करें",
    },
    text: {
      en: "OurHub coordinates the setup and confirms your booking.",
      hi: "OurHub सेटअप को कोऑर्डिनेट करके आपकी बुकिंग कन्फर्म करता है।",
    },
  },
];

/* =========================================================
   TRUST ITEMS
========================================================= */

const trustItems: LocalizedText[] = [
  {
    en: "Verified Vendors",
    hi: "वेरिफाइड वेंडर्स",
  },
  {
    en: "Transparent Pricing",
    hi: "ट्रांसपेरेंट प्राइसिंग",
  },
  {
    en: "On-Time Setup",
    hi: "ऑन-टाइम सेटअप",
  },
  {
    en: "Easy Booking",
    hi: "आसान बुकिंग",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function FloralBridalEntryPage() {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const [selectedPackage, setSelectedPackage] =
    useState("royal");

  const selected =
    packages.find(
      (item) => item.id === selectedPackage
    ) || packages[1];

  /* =======================================================
     WHATSAPP MESSAGE
  ======================================================= */

  const whatsappMessage = useMemo(() => {
    if (isHindi) {
      return encodeURIComponent(
        `नमस्ते OurHub 👋

मैं अपनी शादी के लिए फ्लोरल ब्राइडल एंट्री बुक करना चाहता/चाहती हूँ।

पैकेज: ${selected.title.hi}
ड्यूरेशन: ${selected.duration.hi}
कीमत: ${selected.price}

वेडिंग लोकेशन: उज्जैन / रतलाम / इंदौर

कृपया उपलब्धता और फ्लोरल ब्राइडल एंट्री के ऑप्शंस शेयर करें।`
      );
    }

    return encodeURIComponent(
      `Hello OurHub 👋

I want to book a Floral Bridal Entry for my wedding.

Package: ${selected.title.en}
Duration: ${selected.duration.en}
Price: ${selected.price}

Wedding Location: Ujjain / Ratlam / Indore

Please share availability and floral bridal entry options.`
    );
  }, [isHindi, selected]);

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#050B14] text-white">

      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-x-hidden bg-[#050B14] pb-28">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050B14]/95 px-5 py-4 backdrop-blur-xl">

          <div className="flex items-center justify-between">

            <Link
              href="/eventManagement/wedding-event"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition active:scale-95"
              aria-label={
                isHindi
                  ? "वापस जाएं"
                  : "Go back"
              }
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="text-center">

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
                {isHindi
                  ? "वेडिंग एंट्री"
                  : "Wedding Entry"}
              </p>

              <h1 className="mt-0.5 text-[16px] font-extrabold">
                {isHindi
                  ? "फ्लोरल ब्राइडल एंट्री"
                  : "Floral Bridal Entry"}
              </h1>

            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 text-[#DFAE45] transition active:scale-95"
              aria-label={
                isHindi
                  ? "WhatsApp पर संपर्क करें"
                  : "Contact on WhatsApp"
              }
            >
              <MessageCircle size={19} />
            </a>

          </div>

        </header>

        {/* =================================================
            HERO
        ================================================= */}

        <section className="px-4 pt-4">

          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-[#0A1422] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

            {/* Premium Badge */}

            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/55 px-3 py-1.5 backdrop-blur-md">

              <Flower2
                size={13}
                className="text-[#DFAE45]"
              />

              <span className="text-[11px] font-bold text-[#F4D58A]">
                {isHindi
                  ? "प्रीमियम फ्लोरल एक्सपीरियंस"
                  : "Premium Floral Experience"}
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

            {/* Hero Image */}

            <div className="relative aspect-[4/4.3] w-full overflow-hidden">

              <img
                src="/images/events/FloralBridalEntry.jpg"
                alt={
                  isHindi
                    ? "फ्लोरल ब्राइडल एंट्री"
                    : "Floral Bridal Entry"
                }
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "/images/events/FloralBridalEntry.jpg";
                }}
              />

              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050B14] via-[#050B14]/55 to-transparent" />

            </div>

            {/* Hero Content */}

            <div className="relative -mt-8 px-5 pb-5">

              <div className="mb-3 flex items-center gap-2">

                <span className="flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">

                  <CheckCircle2 size={12} />

                  {isHindi
                    ? "वेरिफाइड सर्विस"
                    : "Verified Service"}

                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-bold text-white/70">

                  {isHindi
                    ? "वेडिंग स्पेशल"
                    : "Wedding Special"}

                </span>

              </div>

              <h2 className="text-[28px] font-black tracking-tight">
                {isHindi
                  ? "फ्लोरल ब्राइडल एंट्री"
                  : "Floral Bridal Entry"}
              </h2>

              <p className="mt-1.5 text-[13px] leading-5 text-white/55">

                {isHindi
                  ? "खूबसूरत फूलों, शानदार स्टाइलिंग और कोऑर्डिनेटेड एंट्री अरेंजमेंट के साथ दुल्हन की एंट्री को एक यादगार वेडिंग मोमेंट बनाएं।"
                  : "Turn the bride's arrival into a breathtaking wedding moment with elegant flowers, beautiful styling and coordinated entry arrangements."}

              </p>

            </div>

          </div>

        </section>

        {/* =================================================
            QUICK INFO
        ================================================= */}

        <section className="grid grid-cols-3 gap-2 px-4 pt-3">

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">

            <Clock3
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              30–90 {isHindi ? "मिनट" : "Min"}
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              {isHindi
                ? "एक्सपीरियंस"
                : "Experience"}
            </p>

          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">

            <Flower2
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              {isHindi
                ? "फ्लोरल"
                : "Floral"}
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              {isHindi
                ? "स्टाइलिंग"
                : "Styling"}
            </p>

          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">

            <MapPin
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              3 {isHindi ? "शहर" : "Cities"}
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              {isHindi
                ? "उपलब्ध"
                : "Available"}
            </p>

          </div>

        </section>

        {/* =================================================
            PACKAGE HEADING
        ================================================= */}

        <section className="px-5 pt-8">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            {isHindi
              ? "अपना एक्सपीरियंस चुनें"
              : "Select Your Experience"}
          </p>

          <div className="mt-1 flex items-end justify-between">

            <h2 className="text-[21px] font-black tracking-tight">
              {isHindi
                ? "फ्लोरल एंट्री पैकेज"
                : "Floral Entry Packages"}
            </h2>

            <span className="text-[10px] text-white/35">
              {isHindi
                ? "शुरुआत ₹4,999"
                : "Starting ₹4,999"}
            </span>

          </div>

        </section>

        {/* =================================================
            PACKAGES
        ================================================= */}

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
                    {isHindi
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

        {/* =================================================
            FLORAL STYLES
        ================================================= */}

        <section className="px-5 pt-9">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            {isHindi
              ? "अपना लुक चुनें"
              : "Choose Your Look"}
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            {isHindi
              ? "फ्लोरल एंट्री स्टाइल्स"
              : "Floral Entry Styles"}
          </h2>

        </section>

        <section className="grid grid-cols-2 gap-3 px-4 pt-4">

          {floralStyles.map((item) => {

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

        {/* =================================================
            INCLUDED
        ================================================= */}

        <section className="px-4 pt-8">

          <div className="rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#DFAE45]/[0.09] to-transparent p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10 text-[#DFAE45]">
                <Flower2 size={21} />
              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                  {isHindi
                    ? "फ्लोरल एक्सपीरियंस"
                    : "Floral Experience"}
                </p>

                <h3 className="text-[16px] font-extrabold">
                  {isHindi
                    ? "क्या शामिल है?"
                    : "What's Included?"}
                </h3>

              </div>

            </div>

            <div className="mt-5 space-y-3">

              {includedItems.map((item) => (

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

        {/* =================================================
            WHY FLORAL ENTRY
        ================================================= */}

        <section className="px-5 pt-9">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            {isHindi
              ? "परफेक्ट अराइवल"
              : "The Perfect Arrival"}
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            {isHindi
              ? "फ्लोरल एंट्री क्यों चुनें?"
              : "Why Choose a Floral Entry?"}
          </h2>

        </section>

        <section className="mt-4 space-y-3 px-4">

          {whyFloralEntry.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title.en}
                className="flex items-center gap-4 rounded-[20px] border border-white/[0.07] bg-white/[0.025] p-4"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10 text-[#DFAE45]">

                  <Icon size={20} />

                </div>

                <div>

                  <h3 className="text-[13px] font-extrabold">
                    {item.title[language]}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-white/40">
                    {item.text[language]}
                  </p>

                </div>

              </div>
            );
          })}

        </section>

        {/* =================================================
            BOOKING PROCESS
        ================================================= */}

        <section className="px-5 pt-9">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            {isHindi
              ? "आसान बुकिंग"
              : "Simple Booking"}
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            {isHindi
              ? "अपनी फ्लोरल एंट्री प्लान करें"
              : "Plan Your Floral Entry"}
          </h2>

        </section>

        <section className="mt-4 space-y-3 px-4">

          {bookingSteps.map((step) => (

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

        {/* =================================================
            TRUST
        ================================================= */}

        <section className="px-4 pt-8">

          <div className="rounded-[24px] border border-emerald-400/10 bg-emerald-400/[0.035] p-5">

            <div className="flex items-start gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                <ShieldCheck size={22} />
              </div>

              <div>

                <h3 className="text-[15px] font-extrabold">
                  {isHindi
                    ? "OurHub से बुक क्यों करें?"
                    : "Why Book With OurHub?"}
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-white/45">

                  {isHindi
                    ? "OurHub आपकी फ्लोरल ब्राइडल एंट्री को कोऑर्डिनेट करने में मदद करता है ताकि आप शादी का आनंद ले सकें और हम डिटेल्स पर ध्यान दें।"
                    : "OurHub helps coordinate your floral bridal entry so you can enjoy the wedding while we focus on the details."}

                </p>

              </div>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">

              {trustItems.map((item) => (

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

        {/* =================================================
            LOCATION
        ================================================= */}

        <section className="px-4 pt-5">

          <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5">

            <MapPin
              size={18}
              className="text-[#DFAE45]"
            />

            <div>

              <p className="text-[10px] text-white/35">
                {isHindi
                  ? "फ्लोरल ब्राइडल एंट्री उपलब्ध है"
                  : "Floral Bridal Entry Available In"}
              </p>

              <p className="mt-0.5 text-[12px] font-bold text-white/80">
                Ujjain • Ratlam • Indore
              </p>

            </div>

          </div>

        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="px-4 pt-6">

          <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-5">

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45] text-black">
                <Flower2 size={23} />
              </div>

              <h2 className="mt-4 text-[22px] font-black tracking-tight">
                {isHindi
                  ? "उसकी एंट्री को फूलों से सजाएं"
                  : "Make Her Entry Bloom"}
              </h2>

              <p className="mt-2 text-[11px] leading-5 text-white/45">

                {isHindi
                  ? "अपनी वेडिंग डिटेल्स OurHub के साथ शेयर करें और ऐसी फ्लोरल ब्राइडल एंट्रेंस बनाएं जिसे आपके मेहमान हमेशा याद रखें।"
                  : "Share your wedding details with OurHub and create a floral bridal entrance your guests will remember."}

              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[12px] font-black text-black shadow-[0_12px_35px_rgba(223,174,69,0.18)] transition active:scale-[0.98]"
              >

                <MessageCircle size={17} />

                {isHindi
                  ? "फ्लोरल एंट्री प्लान करें"
                  : "Plan Floral Entry"}

              </a>

            </div>

          </div>

        </section>

        {/* =================================================
            STICKY BOTTOM CTA
        ================================================= */}

        <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-[430px] border-t border-white/[0.07] bg-[#050B14]/95 p-3 backdrop-blur-xl">

          <div className="flex gap-2">

            <a
              href="tel:+918878632431"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
              aria-label={
                isHindi
                  ? "कॉल करें"
                  : "Call"
              }
            >
              <Phone size={18} />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[12px] font-black text-black shadow-[0_10px_30px_rgba(223,174,69,0.15)] transition active:scale-[0.98]"
            >

              <MessageCircle size={17} />

              {isHindi
                ? "उपलब्धता चेक करें"
                : "Check Availability"}

            </a>

            <Link
              href="/eventManagement/wedding-event"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
              aria-label={
                isHindi
                  ? "वापस जाएं"
                  : "Go back"
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