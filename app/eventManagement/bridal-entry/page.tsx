"use client";

import Link from "next/link";
import { useState } from "react";
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
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "918878632431";

type Localized = {
  en: string;
  hi: string;
};

const packages = [
  {
    id: "royal",
    title: {
      en: "Royal Bridal Entry",
      hi: "रॉयल ब्राइडल एंट्री",
    },
    duration: {
      en: "30–45 Minutes",
      hi: "30–45 मिनट",
    },
    price: "₹4,999",
    description: {
      en: "Elegant bridal entry setup with a beautiful welcome experience.",
      hi: "खूबसूरत स्वागत अनुभव के साथ शानदार ब्राइडल एंट्री सेटअप।",
    },
    popular: false,
    features: [
      {
        en: "Bridal entry planning",
        hi: "ब्राइडल एंट्री प्लानिंग",
      },
      {
        en: "Elegant entry decoration",
        hi: "शानदार एंट्री डेकोरेशन",
      },
      {
        en: "Floral pathway",
        hi: "फ्लोरल पाथवे",
      },
      {
        en: "Background music",
        hi: "बैकग्राउंड म्यूजिक",
      },
      {
        en: "Entry coordination",
        hi: "एंट्री कोऑर्डिनेशन",
      },
      {
        en: "Professional support",
        hi: "प्रोफेशनल सपोर्ट",
      },
    ],
  },

  {
    id: "grand",
    title: {
      en: "Grand Bridal Entry",
      hi: "ग्रैंड ब्राइडल एंट्री",
    },
    duration: {
      en: "45–60 Minutes",
      hi: "45–60 मिनट",
    },
    price: "₹7,999",
    description: {
      en: "A grand bridal entry experience designed to create a memorable wedding moment.",
      hi: "यादगार शादी के पल को खास बनाने के लिए डिजाइन किया गया भव्य ब्राइडल एंट्री अनुभव।",
    },
    popular: true,
    features: [
      {
        en: "Complete bridal entry planning",
        hi: "कंप्लीट ब्राइडल एंट्री प्लानिंग",
      },
      {
        en: "Premium floral decoration",
        hi: "प्रीमियम फ्लोरल डेकोरेशन",
      },
      {
        en: "Special entry setup",
        hi: "स्पेशल एंट्री सेटअप",
      },
      {
        en: "Music & announcement",
        hi: "म्यूजिक और अनाउंसमेंट",
      },
      {
        en: "Bridal entry coordination",
        hi: "ब्राइडल एंट्री कोऑर्डिनेशन",
      },
      {
        en: "Photo moment setup",
        hi: "फोटो मोमेंट सेटअप",
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
      en: "Luxury Bridal Entry",
      hi: "लक्ज़री ब्राइडल एंट्री",
    },
    duration: {
      en: "60–90 Minutes",
      hi: "60–90 मिनट",
    },
    price: "₹11,999",
    description: {
      en: "A premium customised bridal entry with luxury styling and complete coordination.",
      hi: "लक्ज़री स्टाइलिंग और पूरी कोऑर्डिनेशन के साथ प्रीमियम कस्टमाइज़्ड ब्राइडल एंट्री।",
    },
    popular: false,
    features: [
      {
        en: "Custom bridal entry concept",
        hi: "कस्टम ब्राइडल एंट्री कॉन्सेप्ट",
      },
      {
        en: "Luxury floral styling",
        hi: "लक्ज़री फ्लोरल स्टाइलिंग",
      },
      {
        en: "Premium entry props",
        hi: "प्रीमियम एंट्री प्रॉप्स",
      },
      {
        en: "Music & special effects",
        hi: "म्यूजिक और स्पेशल इफेक्ट्स",
      },
      {
        en: "Professional coordination",
        hi: "प्रोफेशनल कोऑर्डिनेशन",
      },
      {
        en: "Photography moment setup",
        hi: "फोटोग्राफी मोमेंट सेटअप",
      },
      {
        en: "Dedicated event manager",
        hi: "डेडिकेटेड इवेंट मैनेजर",
      },
    ],
  },
];

const entryIdeas = [
  {
    icon: Flower2,
    title: {
      en: "Floral Entry",
      hi: "फ्लोरल एंट्री",
    },
    text: {
      en: "Beautiful floral pathway and elegant wedding styling.",
      hi: "खूबसूरत फ्लोरल पाथवे और शानदार वेडिंग स्टाइलिंग।",
    },
  },
  {
    icon: Crown,
    title: {
      en: "Royal Entry",
      hi: "रॉयल एंट्री",
    },
    text: {
      en: "Create a grand bride entry with a luxury feel.",
      hi: "लक्ज़री फील के साथ दुल्हन की भव्य एंट्री तैयार करें।",
    },
  },
  {
    icon: Music,
    title: {
      en: "Music Entry",
      hi: "म्यूजिक एंट्री",
    },
    text: {
      en: "Make the moment special with music and announcements.",
      hi: "म्यूजिक और अनाउंसमेंट के साथ इस पल को खास बनाएं।",
    },
  },
  {
    icon: Sparkles,
    title: {
      en: "Custom Entry",
      hi: "कस्टम एंट्री",
    },
    text: {
      en: "Design an entry concept according to your wedding theme.",
      hi: "अपनी शादी की थीम के अनुसार एंट्री कॉन्सेप्ट तैयार करें।",
    },
  },
];

const includedItems: Localized[] = [
  {
    en: "Bridal entry planning",
    hi: "ब्राइडल एंट्री प्लानिंग",
  },
  {
    en: "Entry decoration & styling",
    hi: "एंट्री डेकोरेशन और स्टाइलिंग",
  },
  {
    en: "Floral pathway",
    hi: "फ्लोरल पाथवे",
  },
  {
    en: "Music & announcement coordination",
    hi: "म्यूजिक और अनाउंसमेंट कोऑर्डिनेशन",
  },
  {
    en: "Professional entry coordination",
    hi: "प्रोफेशनल एंट्री कोऑर्डिनेशन",
  },
  {
    en: "Bride & family photo moments",
    hi: "दुल्हन और परिवार के फोटो मोमेंट्स",
  },
  {
    en: "Dedicated event support",
    hi: "डेडिकेटेड इवेंट सपोर्ट",
  },
];

const bookingSteps = [
  {
    number: "01",
    title: {
      en: "Choose Your Style",
      hi: "अपनी स्टाइल चुनें",
    },
    text: {
      en: "Select a royal, grand or customised bridal entry experience.",
      hi: "रॉयल, ग्रैंड या कस्टमाइज़्ड ब्राइडल एंट्री अनुभव चुनें।",
    },
  },
  {
    number: "02",
    title: {
      en: "Share Wedding Details",
      hi: "शादी की जानकारी साझा करें",
    },
    text: {
      en: "Tell us your wedding date, venue, timing and entry requirements.",
      hi: "हमें शादी की तारीख, वेन्यू, समय और एंट्री की जरूरतें बताएं।",
    },
  },
  {
    number: "03",
    title: {
      en: "Confirm Your Entry",
      hi: "अपनी एंट्री कन्फर्म करें",
    },
    text: {
      en: "OurHub team coordinates everything and confirms your booking.",
      hi: "OurHub टीम पूरी कोऑर्डिनेशन संभालकर आपकी बुकिंग कन्फर्म करती है।",
    },
  },
];

const trustItems: Localized[] = [
  {
    en: "Verified Vendors",
    hi: "वेरिफाइड वेंडर्स",
  },
  {
    en: "Transparent Pricing",
    hi: "पारदर्शी कीमतें",
  },
  {
    en: "On-Time Coordination",
    hi: "समय पर कोऑर्डिनेशन",
  },
  {
    en: "Easy Booking",
    hi: "आसान बुकिंग",
  },
];

export default function BridalEntryPage() {
  const { language } = useLanguage();

  const [selectedPackage, setSelectedPackage] = useState("grand");

  const selected =
    packages.find((item) => item.id === selectedPackage) || packages[1];

  const whatsappText =
    language === "hi"
      ? `नमस्ते OurHub 👋

मुझे अपनी शादी के लिए ब्राइडल एंट्री बुक करनी है।

पैकेज: ${selected.title.hi}
समय: ${selected.duration.hi}
कीमत: ${selected.price}

शादी की लोकेशन: Ujjain / Ratlam / Indore

कृपया उपलब्धता और ब्राइडल एंट्री के विकल्प साझा करें।`
      : `Hello OurHub 👋

I want to book a Bridal Entry for my wedding.

Package: ${selected.title.en}
Duration: ${selected.duration.en}
Price: ${selected.price}

Wedding Location: Ujjain / Ratlam / Indore

Please share availability and bridal entry options.`;

  const whatsappMessage = encodeURIComponent(whatsappText);

  const t = (item: Localized) => item[language];

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-x-hidden bg-[#050B14] pb-28">

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050B14]/95 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">

            <Link
              href="/eventManagement/wedding-event"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition active:scale-95"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
                {language === "hi" ? "वेडिंग एंट्री" : "Wedding Entry"}
              </p>

              <h1 className="mt-0.5 text-[16px] font-extrabold">
                {language === "hi" ? "ब्राइडल एंट्री" : "Bridal Entry"}
              </h1>
            </div>

            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 text-[#DFAE45] transition active:scale-95"
            >
              <MessageCircle size={19} />
            </Link>

          </div>
        </header>

        {/* HERO */}
        <section className="px-4 pt-4">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-[#0A1422] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

            {/* Top Badge */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/55 px-3 py-1.5 backdrop-blur-md">
              <Crown size={13} className="text-[#DFAE45]" />

              <span className="text-[11px] font-bold text-[#F4D58A]">
                {language === "hi"
                  ? "रॉयल वेडिंग अनुभव"
                  : "Royal Wedding Experience"}
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
                src="/images/events/bridal-entry.jpg"
                alt={
                  language === "hi"
                    ? "ब्राइडल एंट्री डेकोरेशन"
                    : "Bridal Entry Decoration"
                }
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "/images/events/wedding.jpg";
                }}
              />

              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050B14] via-[#050B14]/55 to-transparent" />
            </div>

            {/* Hero Content */}
            <div className="relative -mt-8 px-5 pb-5">

              <div className="mb-3 flex items-center gap-2">

                <span className="flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                  <CheckCircle2 size={12} />
                  {language === "hi"
                    ? "वेरिफाइड सर्विस"
                    : "Verified Service"}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-bold text-white/70">
                  {language === "hi"
                    ? "प्रीमियम वेडिंग"
                    : "Premium Wedding"}
                </span>

              </div>

              <h2 className="text-[28px] font-black tracking-tight">
                {language === "hi"
                  ? "ब्राइडल एंट्री"
                  : "Bridal Entry"}
              </h2>

              <p className="mt-1.5 text-[13px] leading-5 text-white/55">
                {language === "hi"
                  ? "दुल्हन की एंट्री को शादी का सबसे खूबसूरत और यादगार पल बनाएं, एक शानदार और अविस्मरणीय एंट्री अनुभव के साथ।"
                  : "Make the bride's arrival the most magical moment of the wedding with an elegant and unforgettable entry experience."}
              </p>

            </div>
          </div>
        </section>

        {/* QUICK INFO */}
        <section className="grid grid-cols-3 gap-2 px-4 pt-3">

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <Clock3
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              30–90 {language === "hi" ? "मिनट" : "Min"}
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              {language === "hi" ? "अनुभव" : "Experience"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <Heart
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              {language === "hi" ? "कस्टम" : "Custom"}
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              {language === "hi" ? "एंट्री स्टाइल" : "Entry Style"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <MapPin
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              {language === "hi" ? "3 शहर" : "3 Cities"}
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              {language === "hi" ? "उपलब्ध" : "Available"}
            </p>
          </div>

        </section>

        {/* PACKAGE HEADING */}
        <section className="px-5 pt-8">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            {language === "hi"
              ? "अपना अनुभव चुनें"
              : "Select Your Experience"}
          </p>

          <div className="mt-1 flex items-end justify-between">

            <h2 className="text-[21px] font-black tracking-tight">
              {language === "hi"
                ? "ब्राइडल एंट्री पैकेज"
                : "Bridal Entry Packages"}
            </h2>

            <span className="text-[10px] text-white/35">
              {language === "hi"
                ? "₹4,999 से शुरू"
                : "Starting ₹4,999"}
            </span>

          </div>

        </section>

        {/* PACKAGES */}
        <section className="space-y-3 px-4 pt-4">

          {packages.map((pkg) => {
            const active = selectedPackage === pkg.id;

            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedPackage(pkg.id)}
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
                        {t(pkg.title)}
                      </h3>

                    </div>

                    <div className="ml-7 mt-1 flex items-center gap-2 text-[10px] text-white/40">
                      <Clock3 size={12} />
                      {t(pkg.duration)}
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-[19px] font-black text-[#F2CA6D]">
                      {pkg.price}
                    </p>
                  </div>

                </div>

                <p className="mt-3 text-[11px] leading-5 text-white/45">
                  {t(pkg.description)}
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

                      <span>{t(feature)}</span>
                    </div>
                  ))}

                </div>

              </button>
            );
          })}

        </section>

        {/* ENTRY IDEAS */}
        <section className="px-5 pt-9">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            {language === "hi"
              ? "इसे यादगार बनाएं"
              : "Make It Magical"}
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            {language === "hi"
              ? "ब्राइडल एंट्री स्टाइल्स"
              : "Bridal Entry Styles"}
          </h2>

        </section>

        <section className="grid grid-cols-2 gap-3 px-4 pt-4">

          {entryIdeas.map((item) => {
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
                  {t(item.title)}
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-white/40">
                  {t(item.text)}
                </p>

              </div>
            );
          })}

        </section>

        {/* INCLUDED */}
        <section className="px-4 pt-8">

          <div className="rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#DFAE45]/[0.09] to-transparent p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10 text-[#DFAE45]">
                <Sparkles size={21} />
              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                  {language === "hi"
                    ? "प्रीमियम अनुभव"
                    : "Premium Experience"}
                </p>

                <h3 className="text-[16px] font-extrabold">
                  {language === "hi"
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

                  {t(item)}

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* BOOKING PROCESS */}
        <section className="px-5 pt-9">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            {language === "hi"
              ? "आसान बुकिंग"
              : "Simple Booking"}
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            {language === "hi"
              ? "अपनी ब्राइडल एंट्री प्लान करें"
              : "Plan Your Bridal Entry"}
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
                  {t(step.title)}
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-white/40">
                  {t(step.text)}
                </p>

              </div>

              <ChevronRight
                size={17}
                className="ml-auto shrink-0 text-white/20"
              />

            </div>
          ))}

        </section>

        {/* TRUST */}
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
                    ? "OurHub आपकी ब्राइडल एंट्री की पूरी कोऑर्डिनेशन में मदद करता है, ताकि दुल्हन का खास पल खूबसूरत, व्यवस्थित और तनावमुक्त रहे।"
                    : "OurHub helps coordinate your bridal entry so the bride's special moment feels beautiful, organised and stress-free."}
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

                  {t(item)}

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* LOCATION */}
        <section className="px-4 pt-5">

          <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5">

            <MapPin
              size={18}
              className="text-[#DFAE45]"
            />

            <div>

              <p className="text-[10px] text-white/35">
                {language === "hi"
                  ? "ब्राइडल एंट्री उपलब्ध है"
                  : "Bridal Entry Available In"}
              </p>

              <p className="mt-0.5 text-[12px] font-bold text-white/80">
                Ujjain • Ratlam • Indore
              </p>

            </div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="px-4 pt-6">

          <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-5">

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45] text-black">
                <Crown size={23} />
              </div>

              <h2 className="mt-4 text-[22px] font-black tracking-tight">
                {language === "hi"
                  ? "उसकी एंट्री को यादगार बनाएं"
                  : "Make Her Entry Unforgettable"}
              </h2>

              <p className="mt-2 text-[11px] leading-5 text-white/45">
                {language === "hi"
                  ? "अपनी शादी की जानकारी OurHub के साथ साझा करें और ऐसी ब्राइडल एंट्री तैयार करें जिसे आपके मेहमान हमेशा याद रखें।"
                  : "Share your wedding details with OurHub and create a bridal entry your guests will remember."}
              </p>

              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[12px] font-black text-black shadow-[0_12px_35px_rgba(223,174,69,0.18)] transition active:scale-[0.98]"
              >
                <MessageCircle size={17} />

                {language === "hi"
                  ? "ब्राइडल एंट्री प्लान करें"
                  : "Plan Bridal Entry"}
              </Link>

            </div>
          </div>

        </section>

        {/* BOTTOM CTA */}
        <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-[430px] border-t border-white/[0.07] bg-[#050B14]/95 p-3 backdrop-blur-xl">

          <div className="flex gap-2">

            <a
              href="tel:+918878632431"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
              aria-label={
                language === "hi"
                  ? "फोन करें"
                  : "Call OurHub"
              }
            >
              <Phone size={18} />
            </a>

            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[12px] font-black text-black shadow-[0_10px_30px_rgba(223,174,69,0.15)] transition active:scale-[0.98]"
            >
              <MessageCircle size={17} />

              {language === "hi"
                ? "उपलब्धता चेक करें"
                : "Check Availability"}
            </Link>

            <Link
              href="/eventManagement/wedding-event"
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