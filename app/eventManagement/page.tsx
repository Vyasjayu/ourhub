"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Camera,
  ChevronRight,
  Crown,
  Gift,
  Heart,
  MapPin,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Utensils,
  Baby,
  WandSparkles,
  Users,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   TYPES
========================================================= */

type LanguageText = {
  en: string;
  hi: string;
};

type ServiceItem = {
  title: LanguageText;
  image: string;
  description: LanguageText;
  href: string;
  icon: typeof Heart;
};

/* =========================================================
   MAIN EVENT CATEGORIES
========================================================= */

const eventServices: ServiceItem[] = [
  {
    title: {
      en: "Wedding & Shaadi",
      hi: "वेडिंग और शादी",
    },
    image: "/images/events/wedding.jpg",
    description: {
      en: "Complete wedding planning from Mehndi to Reception.",
      hi: "मेहंदी से रिसेप्शन तक पूरी वेडिंग प्लानिंग।",
    },
    href: "/eventManagement/wedding-event",
    icon: Heart,
  },
  {
    title: {
      en: "Birthday Parties",
      hi: "बर्थडे पार्टी",
    },
    image: "/images/events/birthday.jpg",
    description: {
      en: "Memorable celebrations for every age.",
      hi: "हर उम्र के लिए यादगार सेलिब्रेशन।",
    },
    href: "/eventManagement/birthday-parties",
    icon: Gift,
  },
  {
    title: {
      en: "Corporate Events",
      hi: "कॉरपोरेट इवेंट्स",
    },
    image: "/images/events/corporate.jpg",
    description: {
      en: "Professional meetings & corporate events.",
      hi: "प्रोफेशनल मीटिंग्स और कॉरपोरेट इवेंट्स।",
    },
    href: "/eventManagement/corporate-events",
    icon: Crown,
  },
  {
    title: {
      en: "Engagement",
      hi: "सगाई",
    },
    image: "/images/events/engagement.jpg",
    description: {
      en: "Beautiful engagement planning & decor.",
      hi: "खूबसूरत सगाई प्लानिंग और डेकोर।",
    },
    href: "/eventManagement/engagement",
    icon: Heart,
  },
  {
    title: {
      en: "Baby Shower",
      hi: "बेबी शावर",
    },
    image: "/images/events/baby-shower.jpg",
    description: {
      en: "Creative themes & beautiful arrangements.",
      hi: "क्रिएटिव थीम्स और खूबसूरत अरेंजमेंट्स।",
    },
    href: "/eventManagement/baby-shower",
    icon: Baby,
  },
  {
    title: {
      en: "Anniversary",
      hi: "एनिवर्सरी",
    },
    image: "/images/events/anniversary.jpg",
    description: {
      en: "Celebrate your special moments in style.",
      hi: "अपने खास पलों को शानदार अंदाज में सेलिब्रेट करें।",
    },
    href: "/eventManagement/anniversary",
    icon: Sparkles,
  },
  {
    title: {
      en: "Decoration",
      hi: "डेकोरेशन",
    },
    image: "/images/events/decoration.jpg",
    description: {
      en: "Balloon, floral, stage & theme decor.",
      hi: "बैलून, फ्लोरल, स्टेज और थीम डेकोरेशन।",
    },
    href: "/eventManagement/decoration",
    icon: PartyPopper,
  },
  {
    title: {
      en: "Catering",
      hi: "कैटरिंग",
    },
    image: "/images/events/catering.jpg",
    description: {
      en: "Delicious food for every celebration.",
      hi: "हर सेलिब्रेशन के लिए स्वादिष्ट खाना।",
    },
    href: "/eventManagement/catering",
    icon: Utensils,
  },
];

/* =========================================================
   CHARACTER ENTERTAINMENT
========================================================= */

const characterServices: ServiceItem[] = [
  {
    title: {
      en: "Giant Gorilla",
      hi: "जायंट गोरिल्ला",
    },
    image: "/images/events/gorilla.jpg",
    description: {
      en: "Fun giant character entertainment for kids.",
      hi: "बच्चों के लिए मजेदार जायंट कैरेक्टर एंटरटेनमेंट।",
    },
    href: "/eventManagement/characters/gorilla",
    icon: WandSparkles,
  },
  {
    title: {
      en: "Chhota Bheem",
      hi: "छोटा भीम",
    },
    image: "/images/events/funny-character.jpg",
    description: {
      en: "Comedy-style character entertainment.",
      hi: "कॉमेडी स्टाइल कैरेक्टर एंटरटेनमेंट।",
    },
    href: "/eventManagement/characters/chhotabheem",
    icon: PartyPopper,
  },
  {
    title: {
      en: "Motu Patlu",
      hi: "मोटू पतलू",
    },
    image: "/images/events/motupatlu.jpg",
    description: {
      en: "Action-packed entertainment for kids.",
      hi: "बच्चों के लिए मजेदार और एक्शन-पैक्ड एंटरटेनमेंट।",
    },
    href: "/eventManagement/characters/motupatlu",
    icon: Crown,
  },
  {
    title: {
      en: "Elephant",
      hi: "हाथी",
    },
    image: "/images/events/elephant.jpg",
    description: {
      en: "Fun and unique character entertainment.",
      hi: "मजेदार और यूनिक कैरेक्टर एंटरटेनमेंट।",
    },
    href: "/eventManagement/characters/elephant",
    icon: Sparkles,
  },
];

/* =========================================================
   WEDDING ENTRY DECORATIONS
========================================================= */

const entryServices: ServiceItem[] = [
  {
    title: {
      en: "Bridal Entry Decoration",
      hi: "ब्राइडल एंट्री डेकोरेशन",
    },
    image: "/images/events/bridal-entry.jpg",
    description: {
      en: "Floral tunnels, dreamy walkways & elegant bridal entries.",
      hi: "फ्लोरल टनल, ड्रीमी वॉकवे और एलिगेंट ब्राइडल एंट्री।",
    },
    href: "/eventManagement/bridal-entry",
    icon: Heart,
  },
  {
    title: {
      en: "Grand Floral Bridal Entry",
      hi: "ग्रैंड फ्लोरल ब्राइडल एंट्री",
    },
    image: "/images/events/FloralBridalEntry.jpg",
    description: {
      en: "Royal groom entries with lights, flowers & premium setups.",
      hi: "लाइट्स, फूलों और प्रीमियम सेटअप के साथ रॉयल एंट्री।",
    },
    href: "/eventManagement/floralBridal-entry",
    icon: Crown,
  },
  {
    title: {
      en: "Couple Entry Decoration",
      hi: "कपल एंट्री डेकोरेशन",
    },
    image: "/images/events/couple-entry.jpg",
    description: {
      en: "Romantic couple entry concepts for a memorable moment.",
      hi: "यादगार पलों के लिए रोमांटिक कपल एंट्री कॉन्सेप्ट।",
    },
    href: "/eventManagement/wedding-event/couple-entry",
    icon: Sparkles,
  },
  {
    title: {
      en: "Varmala Entry Decoration",
      hi: "वरमाला एंट्री डेकोरेशन",
    },
    image: "/images/events/varmala-entry.jpg",
    description: {
      en: "Beautiful varmala entry setups with flowers & grand decor.",
      hi: "फूलों और ग्रैंड डेकोर के साथ खूबसूरत वरमाला एंट्री।",
    },
    href: "/eventManagement/wedding-event/varmala-entry",
    icon: PartyPopper,
  },
];

/* =========================================================
   WHY OURHUB
========================================================= */

const features = [
  {
    icon: BadgeCheck,
    title: {
      en: "Verified Partners",
      hi: "वेरिफाइड पार्टनर्स",
    },
    text: {
      en: "Trusted event professionals",
      hi: "भरोसेमंद इवेंट प्रोफेशनल्स",
    },
  },
  {
    icon: ShieldCheck,
    title: {
      en: "Premium Quality",
      hi: "प्रीमियम क्वालिटी",
    },
    text: {
      en: "Quality-focused services",
      hi: "क्वालिटी पर फोकस्ड सर्विसेज",
    },
  },
  {
    icon: CalendarDays,
    title: {
      en: "Easy Booking",
      hi: "आसान बुकिंग",
    },
    text: {
      en: "Simple & hassle-free",
      hi: "सिंपल और बिना परेशानी",
    },
  },
  {
    icon: Users,
    title: {
      en: "Complete Support",
      hi: "कम्प्लीट सपोर्ट",
    },
    text: {
      en: "Experts for every celebration",
      hi: "हर सेलिब्रेशन के लिए एक्सपर्ट्स",
    },
  },
];

/* =========================================================
   SERVICE GRID
========================================================= */

function ServiceGrid({
  services,
  language,
}: {
  services: ServiceItem[];
  language: "en" | "hi";
}) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <Link
            href={service.href}
            key={service.title.en}
            className="group block"
          >
            <div className="relative h-full overflow-hidden rounded-[20px] border border-[#DFAE45]/15 bg-[#0A111D] transition-all duration-300 active:scale-[0.97] hover:border-[#DFAE45]/40 hover:shadow-[0_8px_30px_rgba(223,174,69,0.08)]">
              {/* IMAGE */}

              <div className="relative h-[135px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title[language]}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* IMAGE GRADIENT */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A111D] via-transparent to-black/10" />

                {/* OURHUB BADGE */}

                <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full border border-[#DFAE45]/30 bg-black/60 px-2 py-1 backdrop-blur-md">
                  <Sparkles
                    size={10}
                    className="text-[#DFAE45]"
                  />

                  <span className="text-[8px] font-bold uppercase tracking-wide text-[#F3D27A]">
                    OurHub
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="truncate text-[14px] font-bold text-white">
                      {service.title[language]}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-gray-500">
                      {service.description[language]}
                    </p>
                  </div>

                  {/* ICON */}

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45] transition group-hover:bg-[#DFAE45]/20">
                    <Icon size={15} />
                  </div>
                </div>

                {/* EXPLORE */}

                <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-[#DFAE45]">
                  {language === "hi"
                    ? "सर्विस देखें"
                    : "Explore Service"}

                  <ChevronRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: LanguageText;
  title: LanguageText;
  description: LanguageText;
}) {
  const { language } = useLanguage();

  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
        {eyebrow[language]}
      </p>

      <h2 className="mt-1 text-[21px] font-bold tracking-tight">
        {title[language]}
      </h2>

      <p className="mt-1 text-[11px] leading-5 text-gray-500">
        {description[language]}
      </p>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function EventManagementPage() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const t = {
    eventManagement: isHindi
      ? "इवेंट मैनेजमेंट"
      : "Event Management",

    locations: "Ujjain • Ratlam • Indore",

    celebrateWithOurHub: isHindi
      ? "OurHub के साथ सेलिब्रेट करें"
      : "Celebrate With OurHub",

    yourEvent: isHindi
      ? "आपका इवेंट।"
      : "Your Event.",

    ourExpertise: isHindi
      ? "हमारी एक्सपर्टीज़।"
      : "Our Expertise.",

    heroDescription: isHindi
      ? "छोटे सेलिब्रेशन से लेकर ग्रैंड वेडिंग तक, भरोसेमंद इवेंट सर्विसेज खोजें — सब कुछ एक ही जगह।"
      : "From intimate celebrations to grand weddings, discover trusted event services — all in one place.",

    exploreEvents: isHindi
      ? "इवेंट्स देखें"
      : "Explore Events",

    trustedProfessionals: isHindi
      ? "भरोसेमंद प्रोफेशनल्स • प्रीमियम सर्विस"
      : "Trusted professionals • Premium service",

    eventTypes: isHindi
      ? "इवेंट टाइप्स"
      : "Event Types",

    services: isHindi
      ? "सर्विसेज"
      : "Services",

    characters: isHindi
      ? "कैरेक्टर्स"
      : "Characters",

    eventsCelebrations: isHindi
      ? "इवेंट्स और सेलिब्रेशन"
      : "Events & Celebrations",

    chooseYourCelebration: isHindi
      ? "अपना सेलिब्रेशन चुनें"
      : "Choose Your Celebration",

    mainDescription: isHindi
      ? "कम्प्लीट इवेंट प्लानिंग और सेलिब्रेशन सर्विसेज एक्सप्लोर करें।"
      : "Explore complete event planning and celebration services.",

    weddingSpecial: isHindi
      ? "वेडिंग स्पेशल"
      : "Wedding Special",

    completeWeddingPlanning: isHindi
      ? "कम्प्लीट वेडिंग प्लानिंग"
      : "Complete Wedding Planning",

    weddingDescription: isHindi
      ? "मेहंदी, हल्दी, संगीत, बारात, ब्राइडल एंट्री, वरमाला, रिसेप्शन और भी बहुत कुछ — सब एक ही जगह।"
      : "Mehndi, Haldi, Sangeet, Baraat, Bridal Entry, Varmala, Reception & more — all in one place.",

    weddingEntries: isHindi
      ? "वेडिंग एंट्रीज"
      : "Wedding Entries",

    makeEntryGrand: isHindi
      ? "अपनी एंट्री को ग्रैंड बनाएं"
      : "Make Your Entry Grand",

    entryDescription: isHindi
      ? "दुल्हन, दूल्हे या कपल के लिए खूबसूरत एंट्री सेटअप चुनें।"
      : "Choose a beautiful entry setup for the bride, groom or couple.",

    kidsEntertainment: isHindi
      ? "किड्स और एंटरटेनमेंट"
      : "Kids & Entertainment",

    characterEntertainment: isHindi
      ? "कैरेक्टर एंटरटेनमेंट"
      : "Character Entertainment",

    characterDescription: isHindi
      ? "बर्थडे पार्टी और फैमिली सेलिब्रेशन में मज़ा, एक्साइटमेंट और यादगार पल जोड़ें।"
      : "Add fun, excitement and unforgettable moments to birthday parties and family celebrations.",

    kidsPartyTitle: isHindi
      ? "किड्स पार्टी को और मजेदार बनाएं"
      : "Make Kids' Parties More Fun",

    kidsPartyDescription: isHindi
      ? "खास सेलिब्रेशन के लिए कैरेक्टर्स, मैस्कॉट्स और एंटरटेनमेंट।"
      : "Characters, mascots & entertainment for special celebrations.",

    whyOurHub: isHindi
      ? "OurHub क्यों"
      : "Why OurHub",

    everythingUnderOneHub: isHindi
      ? "सब कुछ एक ही हब में"
      : "Everything Under One Hub",

    whyDescription: isHindi
      ? "भरोसेमंद प्रोफेशनल्स के साथ अपने पूरे सेलिब्रेशन की प्लानिंग करें।"
      : "Plan your entire celebration with trusted professionals.",

    simpleProcess: isHindi
      ? "आसान प्रक्रिया"
      : "Simple Process",

    planBookCelebrate: isHindi
      ? "प्लान करें। बुक करें। सेलिब्रेट करें।"
      : "Plan. Book. Celebrate.",

    chooseEvent: isHindi
      ? "अपना इवेंट चुनें"
      : "Choose Your Event",

    chooseEventDescription: isHindi
      ? "वेडिंग, बर्थडे, कॉरपोरेट या कोई दूसरा सेलिब्रेशन चुनें।"
      : "Select wedding, birthday, corporate or another celebration.",

    tellNeeds: isHindi
      ? "अपनी जरूरत बताएं"
      : "Tell Us Your Needs",

    tellNeedsDescription: isHindi
      ? "अपनी डेट, लोकेशन और इवेंट की जरूरतें शेयर करें।"
      : "Share your date, location and event requirements.",

    expertSupport: isHindi
      ? "एक्सपर्ट सपोर्ट पाएं"
      : "Get Expert Support",

    expertSupportDescription: isHindi
      ? "हमारे इवेंट एक्सपर्ट्स हर चीज़ की प्लानिंग में मदद करेंगे।"
      : "Our event experts help plan everything.",

    enjoyCelebration: isHindi
      ? "अपना सेलिब्रेशन एंजॉय करें"
      : "Enjoy Your Celebration",

    enjoyCelebrationDescription: isHindi
      ? "आराम से सेलिब्रेशन का आनंद लें, बाकी डिटेल्स हम संभालेंगे।"
      : "Relax while we take care of the details.",

    catering: isHindi
      ? "कैटरिंग"
      : "Catering",

    cateringDescription: isHindi
      ? "हर सेलिब्रेशन के लिए स्वादिष्ट मेन्यू।"
      : "Delicious menus for every celebration.",

    photography: isHindi
      ? "फोटोग्राफी"
      : "Photography",

    photographyDescription: isHindi
      ? "हर महत्वपूर्ण पल को कैप्चर करें।"
      : "Capture every important moment.",

    decoration: isHindi
      ? "डेकोरेशन"
      : "Decoration",

    decorationDescription: isHindi
      ? "थीम्स, बैलून, फ्लोरल और स्टेज डेकोर।"
      : "Themes, balloons, floral & stage decor.",

    entertainment: isHindi
      ? "एंटरटेनमेंट"
      : "Entertainment",

    entertainmentDescription: isHindi
      ? "म्यूजिक, कैरेक्टर्स और मजेदार एक्टिविटीज।"
      : "Music, characters & fun activities.",

    makeCelebration: isHindi
      ? "अपने सेलिब्रेशन को"
      : "Make Your Celebration",

    trulySpecial: isHindi
      ? "खास बनाएं"
      : "Truly Special",

    premiumDescription: isHindi
      ? "बताएं कि आप क्या प्लान कर रहे हैं और OurHub आपके आइडिया को यादगार इवेंट में बदलने में मदद करेगा।"
      : "Tell us what you are planning and let OurHub help you turn your idea into a memorable event.",

    startPlanning: isHindi
      ? "प्लानिंग शुरू करें"
      : "Start Planning",

    ourHubEvents: "OURHUB EVENTS",

    footerText: isHindi
      ? "आपकी सभी सर्विसेज। एक ही हब।"
      : "All your services. One hub.",
  };

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050B14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[430px] items-center gap-3 px-4 py-3.5">
          {/* BACK */}

          <Link
            href="/"
            aria-label={isHindi ? "वापस जाएं" : "Go back"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition active:scale-95"
          >
            <ArrowLeft size={19} />
          </Link>

          {/* TITLE */}

          <div className="min-w-0 flex-1">
            <h1 className="truncate text-[17px] font-bold">
              {t.eventManagement}
            </h1>

            <div className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-400">
              <MapPin
                size={12}
                className="text-[#DFAE45]"
              />

              <span>{t.locations}</span>
            </div>
          </div>

          {/* ICON */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <PartyPopper
              size={18}
              className="text-[#DFAE45]"
            />
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="mx-auto max-w-[430px] px-4 pb-12">
        {/* ===================================================
            HERO
        =================================================== */}

        <section className="relative mt-4 overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-[#0A101B]">
          {/* BACKGROUND */}

          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('/images/events/wedding.jpg')",
            }}
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/30 via-[#050B14]/70 to-[#050B14]" />

          {/* GOLD GLOW */}

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#DFAE45]/20 blur-3xl" />

          <div className="relative px-5 pb-6 pt-7">
            {/* BADGE */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 px-3 py-1.5">
              <Sparkles
                size={13}
                className="text-[#DFAE45]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F3D27A]">
                {t.celebrateWithOurHub}
              </span>
            </div>

            {/* HEADING */}

            <h2 className="max-w-[340px] text-[30px] font-extrabold leading-[1.08] tracking-tight">
              {t.yourEvent}
              <br />

              <span className="text-[#DFAE45]">
                {t.ourExpertise}
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-3 max-w-[335px] text-[13px] leading-6 text-gray-300">
              {t.heroDescription}
            </p>

            {/* CTA */}

            <Link
              href="/eventManagement"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 py-3.5 text-[14px] font-bold text-black shadow-[0_8px_30px_rgba(223,174,69,0.18)] transition active:scale-[0.98]"
            >
              {t.exploreEvents}

              <ArrowRight size={17} />
            </Link>

            {/* TRUST */}

            <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-400">
              <ShieldCheck
                size={14}
                className="text-[#DFAE45]"
              />

              <span>{t.trustedProfessionals}</span>
            </div>
          </div>
        </section>

        {/* ===================================================
            QUICK STATS
        =================================================== */}

        <section className="mt-4 grid grid-cols-3 gap-2.5">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-3 text-center">
            <p className="text-lg font-extrabold text-[#DFAE45]">
              8+
            </p>

            <p className="mt-0.5 text-[10px] text-gray-400">
              {t.eventTypes}
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-3 text-center">
            <p className="text-lg font-extrabold text-[#DFAE45]">
              19+
            </p>

            <p className="mt-0.5 text-[10px] text-gray-400">
              {t.services}
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-3 text-center">
            <p className="text-lg font-extrabold text-[#DFAE45]">
              6+
            </p>

            <p className="mt-0.5 text-[10px] text-gray-400">
              {t.characters}
            </p>
          </div>
        </section>

        {/* ===================================================
            MAIN EVENTS
        =================================================== */}

        <section className="mt-9">
          <SectionHeader
            eyebrow={{
              en: "Events & Celebrations",
              hi: "इवेंट्स और सेलिब्रेशन",
            }}
            title={{
              en: "Choose Your Celebration",
              hi: "अपना सेलिब्रेशन चुनें",
            }}
            description={{
              en: "Explore complete event planning and celebration services.",
              hi: "कम्प्लीट इवेंट प्लानिंग और सेलिब्रेशन सर्विसेज एक्सप्लोर करें।",
            }}
          />

          <ServiceGrid
            services={eventServices}
            language={language}
          />
        </section>

        {/* ===================================================
            WEDDING SPOTLIGHT
        =================================================== */}

        <Link
          href="/eventManagement/wedding-event"
          className="group mt-5 block"
        >
          <section className="relative overflow-hidden rounded-[23px] border border-[#DFAE45]/25 bg-gradient-to-br from-[#DFAE45]/10 via-[#0A111D] to-[#0A111D]">
            {/* GLOW */}

            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Heart
                  size={21}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#DFAE45]">
                  {t.weddingSpecial}
                </p>

                <h3 className="mt-1 text-[14px] font-bold">
                  {t.completeWeddingPlanning}
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-gray-500">
                  {t.weddingDescription}
                </p>
              </div>

              <ChevronRight
                size={18}
                className="shrink-0 text-[#DFAE45] transition-transform group-hover:translate-x-1"
              />
            </div>
          </section>
        </Link>

        {/* ===================================================
            WEDDING ENTRY DECORATIONS
        =================================================== */}

        <section className="mt-10">
          <SectionHeader
            eyebrow={{
              en: "Wedding Entries",
              hi: "वेडिंग एंट्रीज",
            }}
            title={{
              en: "Make Your Entry Grand",
              hi: "अपनी एंट्री को ग्रैंड बनाएं",
            }}
            description={{
              en: "Choose a beautiful entry setup for the bride, groom or couple.",
              hi: "दुल्हन, दूल्हे या कपल के लिए खूबसूरत एंट्री सेटअप चुनें।",
            }}
          />

          <ServiceGrid
            services={entryServices}
            language={language}
          />
        </section>

        {/* ===================================================
            CHARACTER ENTERTAINMENT
        =================================================== */}

        <section className="mt-10">
          <div className="relative overflow-hidden rounded-[25px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#17130A] via-[#0A111D] to-[#0A111D] p-5">
            {/* GLOW */}

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <WandSparkles
                    size={17}
                    className="text-[#DFAE45]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                    {t.kidsEntertainment}
                  </p>

                  <h2 className="text-[19px] font-bold">
                    {t.characterEntertainment}
                  </h2>
                </div>
              </div>

              <p className="mt-3 text-[11px] leading-5 text-gray-500">
                {t.characterDescription}
              </p>
            </div>
          </div>

          <ServiceGrid
            services={characterServices}
            language={language}
          />
        </section>

        {/* ===================================================
            CHARACTER CTA
        =================================================== */}

        <section className="mt-5 rounded-[22px] border border-white/[0.07] bg-white/[0.03] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <PartyPopper
                size={19}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-[13px] font-bold">
                {t.kidsPartyTitle}
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                {t.kidsPartyDescription}
              </p>
            </div>

            <ArrowRight
              size={17}
              className="text-[#DFAE45]"
            />
          </div>
        </section>

        {/* ===================================================
            WHY OURHUB
        =================================================== */}

        <section className="mt-10">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              {t.whyOurHub}
            </p>

            <h2 className="mt-1 text-[20px] font-bold">
              {t.everythingUnderOneHub}
            </h2>

            <p className="mt-1 text-[11px] text-gray-500">
              {t.whyDescription}
            </p>
          </div>

          <div className="space-y-2.5">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title.en}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5 transition hover:border-[#DFAE45]/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/15 bg-[#DFAE45]/10">
                    <Icon
                      size={19}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[13px] font-bold">
                      {feature.title[language]}
                    </h3>

                    <p className="mt-0.5 text-[10px] text-gray-500">
                      {feature.text[language]}
                    </p>
                  </div>

                  <ChevronRight
                    size={16}
                    className="text-gray-600"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================
            HOW IT WORKS
        =================================================== */}

        <section className="mt-8 overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0A111D] p-5">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <CalendarDays
                size={17}
                className="text-[#DFAE45]"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#DFAE45]">
                {t.simpleProcess}
              </p>

              <h2 className="text-[17px] font-bold">
                {t.planBookCelebrate}
              </h2>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {/* STEP 1 */}

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                01
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  {t.chooseEvent}
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  {t.chooseEventDescription}
                </p>
              </div>
            </div>

            {/* STEP 2 */}

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                02
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  {t.tellNeeds}
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  {t.tellNeedsDescription}
                </p>
              </div>
            </div>

            {/* STEP 3 */}

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                03
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  {t.expertSupport}
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  {t.expertSupportDescription}
                </p>
              </div>
            </div>

            {/* STEP 4 */}

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                04
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  {t.enjoyCelebration}
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  {t.enjoyCelebrationDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            SERVICE HIGHLIGHTS
        =================================================== */}

        <section className="mt-8">
          <div className="grid grid-cols-2 gap-3">
            {/* CATERING */}

            <div className="rounded-[21px] border border-white/[0.07] bg-white/[0.03] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Utensils
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-3 text-[13px] font-bold">
                {t.catering}
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                {t.cateringDescription}
              </p>
            </div>

            {/* PHOTOGRAPHY */}

            <div className="rounded-[21px] border border-white/[0.07] bg-white/[0.03] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Camera
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-3 text-[13px] font-bold">
                {t.photography}
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                {t.photographyDescription}
              </p>
            </div>

            {/* DECORATION */}

            <div className="rounded-[21px] border border-white/[0.07] bg-white/[0.03] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <PartyPopper
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-3 text-[13px] font-bold">
                {t.decoration}
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                {t.decorationDescription}
              </p>
            </div>

            {/* ENTERTAINMENT */}

            <div className="rounded-[21px] border border-white/[0.07] bg-white/[0.03] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <WandSparkles
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-3 text-[13px] font-bold">
                {t.entertainment}
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                {t.entertainmentDescription}
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================
            PREMIUM CTA
        =================================================== */}

        <section className="relative mt-8 overflow-hidden rounded-[25px] border border-[#DFAE45]/25 bg-gradient-to-br from-[#17130A] via-[#0E1118] to-[#090D15] p-5">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]">
              <Sparkles
                size={21}
                className="text-black"
              />
            </div>

            <h2 className="mt-4 text-[21px] font-extrabold">
              {t.makeCelebration}
              <br />

              <span className="text-[#DFAE45]">
                {t.trulySpecial}
              </span>
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-gray-400">
              {t.premiumDescription}
            </p>

            <Link
              href="/eventManagement/wedding-event"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#DFAE45] py-3 text-[13px] font-bold text-black transition active:scale-[0.98]"
            >
              {t.startPlanning}

              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="mt-8 pb-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-600">
            <div className="h-px w-8 bg-white/10" />

            <span>{t.ourHubEvents}</span>

            <div className="h-px w-8 bg-white/10" />
          </div>

          <p className="mt-2 text-[9px] text-gray-700">
            {t.footerText}
          </p>
        </div>
      </div>
    </main>
  );
}