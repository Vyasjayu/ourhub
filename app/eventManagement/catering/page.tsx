"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  ChefHat,
  ChevronRight,
  Clock3,
  Crown,
  Flame,
  Heart,
  MapPin,
  MessageCircle,
  PartyPopper,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Users,
  Wine,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const whatsappNumber = "918878632431";

type Language = "en" | "hi";

type Localized = {
  en: string;
  hi: string;
};

const cateringServices = [
  {
    icon: ChefHat,
    title: {
      en: "Professional Chefs",
      hi: "प्रोफेशनल शेफ",
    },
    description: {
      en: "Experienced chefs preparing fresh, delicious and beautifully presented food.",
      hi: "अनुभवी शेफ ताजा, स्वादिष्ट और खूबसूरती से प्रस्तुत भोजन तैयार करते हैं।",
    },
  },
  {
    icon: Utensils,
    title: {
      en: "Complete Catering",
      hi: "कंप्लीट कैटरिंग",
    },
    description: {
      en: "From starters and main course to desserts, beverages and complete service.",
      hi: "स्टार्टर्स और मेन कोर्स से लेकर डेजर्ट, बेवरेज और पूरी सर्विस तक।",
    },
  },
  {
    icon: Sparkles,
    title: {
      en: "Premium Presentation",
      hi: "प्रीमियम प्रेजेंटेशन",
    },
    description: {
      en: "Elegant buffet setup, food presentation and serving arrangements.",
      hi: "एलिगेंट बुफे सेटअप, फूड प्रेजेंटेशन और सर्विंग अरेंजमेंट।",
    },
  },
  {
    icon: Users,
    title: {
      en: "Serving Staff",
      hi: "सर्विंग स्टाफ",
    },
    description: {
      en: "Well-trained service staff for smooth and comfortable guest experience.",
      hi: "मेहमानों के लिए बेहतर और आरामदायक अनुभव देने वाला प्रशिक्षित सर्विस स्टाफ।",
    },
  },
  {
    icon: Wine,
    title: {
      en: "Beverage Service",
      hi: "बेवरेज सर्विस",
    },
    description: {
      en: "Welcome drinks, mocktails, tea, coffee and customized beverage counters.",
      hi: "वेलकम ड्रिंक्स, मॉकटेल, चाय, कॉफी और कस्टमाइज्ड बेवरेज काउंटर।",
    },
  },
  {
    icon: Flame,
    title: {
      en: "Live Food Counters",
      hi: "लाइव फूड काउंटर",
    },
    description: {
      en: "Freshly prepared live counters that make your event more interactive.",
      hi: "ताजा तैयार किए गए लाइव काउंटर जो आपके इवेंट को और इंटरैक्टिव बनाते हैं।",
    },
  },
];

const cuisines: Localized[] = [
  { en: "North Indian", hi: "नॉर्थ इंडियन" },
  { en: "South Indian", hi: "साउथ इंडियन" },
  { en: "Gujarati", hi: "गुजराती" },
  { en: "Rajasthani", hi: "राजस्थानी" },
  { en: "Punjabi", hi: "पंजाबी" },
  { en: "Chinese", hi: "चाइनीज" },
  { en: "Continental", hi: "कॉन्टिनेंटल" },
  { en: "Jain Food", hi: "जैन फूड" },
  { en: "Street Food", hi: "स्ट्रीट फूड" },
  { en: "Desserts", hi: "डेजर्ट्स" },
  { en: "Live Counters", hi: "लाइव काउंटर" },
  { en: "Beverages", hi: "बेवरेजेस" },
];

const eventTypes = [
  {
    icon: Heart,
    title: {
      en: "Wedding Catering",
      hi: "वेडिंग कैटरिंग",
    },
    text: {
      en: "Grand wedding menus crafted for memorable celebrations.",
      hi: "यादगार शादी समारोह के लिए शानदार वेडिंग मेनू।",
    },
  },
  {
    icon: PartyPopper,
    title: {
      en: "Birthday Parties",
      hi: "बर्थडे पार्टी",
    },
    text: {
      en: "Fun, colourful and delicious menus for every age group.",
      hi: "हर उम्र के मेहमानों के लिए मजेदार, रंगीन और स्वादिष्ट मेनू।",
    },
  },
  {
    icon: Users,
    title: {
      en: "Corporate Events",
      hi: "कॉर्पोरेट इवेंट्स",
    },
    text: {
      en: "Professional catering for meetings, conferences and office events.",
      hi: "मीटिंग, कॉन्फ्रेंस और ऑफिस इवेंट्स के लिए प्रोफेशनल कैटरिंग।",
    },
  },
  {
    icon: Sparkles,
    title: {
      en: "Family Functions",
      hi: "फैमिली फंक्शन्स",
    },
    text: {
      en: "Comfortable and customizable catering for family celebrations.",
      hi: "फैमिली सेलिब्रेशन के लिए आरामदायक और कस्टमाइज्ड कैटरिंग।",
    },
  },
];

const packages = [
  {
    name: {
      en: "Classic",
      hi: "क्लासिक",
    },
    price: "₹299",
    per: {
      en: "per plate",
      hi: "प्रति प्लेट",
    },
    description: {
      en: "Perfect for small celebrations and family functions.",
      hi: "छोटे सेलिब्रेशन और फैमिली फंक्शन्स के लिए बिल्कुल सही।",
    },
    popular: false,
    features: [
      { en: "4 Starters", hi: "4 स्टार्टर्स" },
      { en: "2 Main Course", hi: "2 मेन कोर्स" },
      { en: "2 Breads", hi: "2 ब्रेड्स" },
      { en: "Rice & Dal", hi: "राइस और दाल" },
      { en: "1 Dessert", hi: "1 डेजर्ट" },
      { en: "Standard Buffet Setup", hi: "स्टैंडर्ड बुफे सेटअप" },
    ],
  },
  {
    name: {
      en: "Premium",
      hi: "प्रीमियम",
    },
    price: "₹499",
    per: {
      en: "per plate",
      hi: "प्रति प्लेट",
    },
    description: {
      en: "A complete premium experience for special occasions.",
      hi: "खास मौकों के लिए एक पूरा प्रीमियम अनुभव।",
    },
    popular: true,
    features: [
      { en: "6 Starters", hi: "6 स्टार्टर्स" },
      { en: "3 Main Course", hi: "3 मेन कोर्स" },
      { en: "3 Breads", hi: "3 ब्रेड्स" },
      { en: "Rice & Dal", hi: "राइस और दाल" },
      { en: "2 Desserts", hi: "2 डेजर्ट्स" },
      { en: "Welcome Drink", hi: "वेलकम ड्रिंक" },
      { en: "Premium Buffet Setup", hi: "प्रीमियम बुफे सेटअप" },
    ],
  },
  {
    name: {
      en: "Luxury",
      hi: "लक्जरी",
    },
    price: "₹799",
    per: {
      en: "per plate",
      hi: "प्रति प्लेट",
    },
    description: {
      en: "An elevated menu and service experience for grand events.",
      hi: "ग्रैंड इवेंट्स के लिए शानदार मेनू और सर्विस एक्सपीरियंस।",
    },
    popular: false,
    features: [
      { en: "8+ Starters", hi: "8+ स्टार्टर्स" },
      { en: "4 Main Course", hi: "4 मेन कोर्स" },
      { en: "Live Counters", hi: "लाइव काउंटर" },
      { en: "Premium Breads", hi: "प्रीमियम ब्रेड्स" },
      { en: "3 Desserts", hi: "3 डेजर्ट्स" },
      { en: "Mocktail Counter", hi: "मॉकटेल काउंटर" },
      { en: "Luxury Buffet Setup", hi: "लक्जरी बुफे सेटअप" },
      { en: "Dedicated Service Team", hi: "डेडिकेटेड सर्विस टीम" },
    ],
  },
];

const process = [
  {
    number: "01",
    title: {
      en: "Share Your Event",
      hi: "अपना इवेंट बताएं",
    },
    text: {
      en: "Tell us your event date, location, guest count and requirements.",
      hi: "अपनी इवेंट तारीख, लोकेशन, मेहमानों की संख्या और जरूरतें बताएं।",
    },
  },
  {
    number: "02",
    title: {
      en: "Choose Your Menu",
      hi: "अपना मेनू चुनें",
    },
    text: {
      en: "Select cuisines, dishes, live counters and serving style.",
      hi: "क्यूजीन, डिशेज, लाइव काउंटर और सर्विंग स्टाइल चुनें।",
    },
  },
  {
    number: "03",
    title: {
      en: "Customize Everything",
      hi: "सब कुछ कस्टमाइज करें",
    },
    text: {
      en: "We customize the menu and arrangements according to your event.",
      hi: "हम आपके इवेंट के अनुसार मेनू और सभी अरेंजमेंट कस्टमाइज करते हैं।",
    },
  },
  {
    number: "04",
    title: {
      en: "Enjoy Your Event",
      hi: "अपने इवेंट का आनंद लें",
    },
    text: {
      en: "Our team handles food preparation, setup and service.",
      hi: "हमारी टीम फूड प्रिपरेशन, सेटअप और सर्विस संभालती है।",
    },
  },
];

const faqs = [
  {
    q: {
      en: "Can I customize the catering menu?",
      hi: "क्या मैं कैटरिंग मेनू कस्टमाइज कर सकता हूं?",
    },
    a: {
      en: "Yes. You can customize cuisines, dishes, starters, desserts, live counters and beverages according to your requirements.",
      hi: "हां। आप अपनी जरूरत के अनुसार क्यूजीन, डिशेज, स्टार्टर्स, डेजर्ट्स, लाइव काउंटर और बेवरेज कस्टमाइज कर सकते हैं।",
    },
  },
  {
    q: {
      en: "Do you provide catering for weddings?",
      hi: "क्या आप शादी के लिए कैटरिंग प्रदान करते हैं?",
    },
    a: {
      en: "Yes. We provide complete wedding catering including buffet setup, chefs, serving staff, beverages and customized menus.",
      hi: "हां। हम बुफे सेटअप, शेफ, सर्विंग स्टाफ, बेवरेज और कस्टमाइज्ड मेनू सहित पूरी वेडिंग कैटरिंग प्रदान करते हैं।",
    },
  },
  {
    q: {
      en: "Can you arrange Jain food?",
      hi: "क्या आप जैन फूड की व्यवस्था कर सकते हैं?",
    },
    a: {
      en: "Yes. Jain food options can be included in your customized catering menu.",
      hi: "हां। आपके कस्टमाइज्ड कैटरिंग मेनू में जैन फूड के विकल्प शामिल किए जा सकते हैं।",
    },
  },
  {
    q: {
      en: "Do you provide serving staff?",
      hi: "क्या आप सर्विंग स्टाफ प्रदान करते हैं?",
    },
    a: {
      en: "Yes. Serving staff can be arranged depending on the guest count and selected package.",
      hi: "हां। मेहमानों की संख्या और चुने गए पैकेज के अनुसार सर्विंग स्टाफ की व्यवस्था की जा सकती है।",
    },
  },
  {
    q: {
      en: "Do you provide live food counters?",
      hi: "क्या आप लाइव फूड काउंटर प्रदान करते हैं?",
    },
    a: {
      en: "Yes. Live counters such as chaat, dosa, pasta, Chinese, tandoor and other options can be added.",
      hi: "हां। चाट, डोसा, पास्ता, चाइनीज, तंदूर और अन्य लाइव काउंटर जोड़े जा सकते हैं।",
    },
  },
];

const whyOurHub = [
  {
    icon: ShieldCheck,
    title: {
      en: "Hygiene First",
      hi: "हाइजीन फर्स्ट",
    },
    text: {
      en: "Clean and professional food preparation standards.",
      hi: "स्वच्छ और प्रोफेशनल फूड प्रिपरेशन स्टैंडर्ड्स।",
    },
  },
  {
    icon: Clock3,
    title: {
      en: "On-Time Setup",
      hi: "ऑन-टाइम सेटअप",
    },
    text: {
      en: "Our team plans setup according to your event timeline.",
      hi: "हमारी टीम आपके इवेंट टाइमलाइन के अनुसार सेटअप प्लान करती है।",
    },
  },
  {
    icon: BadgeCheck,
    title: {
      en: "Transparent Pricing",
      hi: "ट्रांसपेरेंट प्राइसिंग",
    },
    text: {
      en: "Clear packages with flexible customization options.",
      hi: "फ्लेक्सिबल कस्टमाइजेशन विकल्पों के साथ क्लियर पैकेज।",
    },
  },
  {
    icon: Users,
    title: {
      en: "Guest-Focused Service",
      hi: "गेस्ट-फोकस्ड सर्विस",
    },
    text: {
      en: "Professional staff to keep your guests comfortable.",
      hi: "आपके मेहमानों को बेहतर अनुभव देने के लिए प्रोफेशनल स्टाफ।",
    },
  },
];

const premiumPoints: Localized[] = [
  {
    en: "Fresh Ingredients",
    hi: "ताजा सामग्री",
  },
  {
    en: "Hygienic Preparation",
    hi: "हाइजीनिक प्रिपरेशन",
  },
  {
    en: "Beautiful Presentation",
    hi: "खूबसूरत प्रेजेंटेशन",
  },
  {
    en: "Professional Staff",
    hi: "प्रोफेशनल स्टाफ",
  },
];

export default function CateringPage() {
  const { language } = useLanguage();

  const whatsappMessage = encodeURIComponent(
    language === "hi"
      ? "नमस्ते OurHub, मैं कैटरिंग सर्विसेज में रुचि रखता/रखती हूं। कृपया पैकेज, मेनू विकल्प और कीमत की जानकारी साझा करें।"
      : "Hello OurHub, I am interested in Catering Services. Please share packages, menu options and pricing."
  );

  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      {/* Mobile Container */}
      <div className="mx-auto min-h-screen max-w-[480px] overflow-hidden bg-[#071321] pb-28 shadow-2xl">

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(223,174,69,0.20),transparent_35%),radial-gradient(circle_at_10%_60%,rgba(255,255,255,0.05),transparent_30%)]" />

          <div
            className="relative min-h-[570px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(5,7,11,0.18), rgba(5,7,11,0.55) 45%, #071321 96%), url('/images/events/catering.jpg')",
            }}
          >
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between px-5 pt-5">
              <Link
                href="/eventManagement"
                aria-label={
                  language === "hi"
                    ? "वापस जाएं"
                    : "Go back"
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 backdrop-blur-xl"
              >
                <ArrowLeft size={20} />
              </Link>

              <div className="rounded-full border border-[#DFAE45]/30 bg-black/35 px-4 py-2 backdrop-blur-xl">
                <span className="text-[11px] font-semibold tracking-[0.18em] text-[#E7B94F]">
                  OURHUB EVENTS
                </span>
              </div>
            </div>

            {/* Hero Content */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/35 bg-black/40 px-3 py-2 backdrop-blur-xl">
                <ChefHat
                  size={15}
                  className="text-[#E7B94F]"
                />

                <span className="text-xs font-medium text-white/90">
                  {language === "hi"
                    ? "प्रीमियम कैटरिंग एक्सपीरियंस"
                    : "Premium Catering Experience"}
                </span>
              </div>

              <h1 className="max-w-[390px] text-[42px] font-black leading-[0.98] tracking-[-0.04em]">
                {language === "hi" ? (
                  <>
                    स्वाद जो
                    <span className="block text-[#E7B94F]">
                      यादें बनाए।
                    </span>
                  </>
                ) : (
                  <>
                    Taste That
                    <span className="block text-[#E7B94F]">
                      Creates Memories.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-4 max-w-[390px] text-[15px] leading-6 text-white/75">
                {language === "hi"
                  ? "छोटे फैमिली फंक्शन से लेकर ग्रैंड वेडिंग तक, स्वादिष्ट भोजन, शानदार प्रेजेंटेशन और प्रोफेशनल सर्विस का आनंद लें।"
                  : "From intimate family functions to grand weddings, enjoy delicious food, elegant presentation and professional service."}
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-4 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.22)]"
                >
                  <MessageCircle size={18} />

                  {language === "hi"
                    ? "कैटरिंग कोट पाएं"
                    : "Get Catering Quote"}
                </a>

                <a
                  href={`tel:+${whatsappNumber}`}
                  aria-label={
                    language === "hi"
                      ? "कॉल करें"
                      : "Call OurHub"
                  }
                  className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-white/15 bg-black/35 backdrop-blur-xl"
                >
                  <Phone
                    size={19}
                    className="text-[#E7B94F]"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-y border-white/8 bg-[#091827] px-5 py-4">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            <div className="px-2 text-center">
              <BadgeCheck
                className="mx-auto mb-1 text-[#E7B94F]"
                size={20}
              />
              <p className="text-[11px] font-semibold">
                {language === "hi"
                  ? "क्वालिटी फूड"
                  : "Quality Food"}
              </p>
            </div>

            <div className="px-2 text-center">
              <ChefHat
                className="mx-auto mb-1 text-[#E7B94F]"
                size={20}
              />
              <p className="text-[11px] font-semibold">
                {language === "hi"
                  ? "एक्सपर्ट शेफ"
                  : "Expert Chefs"}
              </p>
            </div>

            <div className="px-2 text-center">
              <ShieldCheck
                className="mx-auto mb-1 text-[#E7B94F]"
                size={20}
              />
              <p className="text-[11px] font-semibold">
                {language === "hi"
                  ? "विश्वसनीय सर्विस"
                  : "Reliable Service"}
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
            {language === "hi"
              ? "OurHub कैटरिंग"
              : "Catering by OurHub"}
          </p>

          <h2 className="mt-3 text-[29px] font-black leading-tight tracking-[-0.03em]">
            {language === "hi" ? (
              <>
                सिर्फ खाना नहीं।
                <span className="block text-white/55">
                  एक पूरा एक्सपीरियंस।
                </span>
              </>
            ) : (
              <>
                More Than Food.
                <span className="block text-white/55">
                  It&apos;s the Experience.
                </span>
              </>
            )}
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-white/65">
            {language === "hi"
              ? "शानदार इवेंट उन पलों से याद रहते हैं जिन्हें लोग साथ में बिताते हैं और उस खाने से जिसकी वे बाद में चर्चा करते हैं। हमारी कैटरिंग सर्विस स्वादिष्ट मेनू, प्रोफेशनल शेफ और शानदार प्रेजेंटेशन को जोड़कर हर सेलिब्रेशन को खास बनाती है।"
              : "Great events are remembered by the moments people share — and the food they talk about afterwards. Our catering service combines delicious menus, professional chefs and elegant presentation to make every celebration special."}
          </p>
        </section>

        {/* SERVICES */}
        <section className="px-5 pt-10">
          <SectionHeader
            language={language}
            eyebrow={{
              en: "What We Offer",
              hi: "हम क्या देते हैं",
            }}
            title={{
              en: "Complete Catering Services",
              hi: "कंप्लीट कैटरिंग सर्विसेज",
            }}
            description={{
              en: "Everything you need for a smooth and memorable food experience.",
              hi: "एक शानदार और यादगार फूड एक्सपीरियंस के लिए जरूरी हर सर्विस।",
            }}
          />

          <div className="mt-6 grid grid-cols-2 gap-3">
            {cateringServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title.en}
                  className="group rounded-[22px] border border-white/8 bg-white/[0.035] p-4 transition-all hover:border-[#DFAE45]/25"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon
                      size={21}
                      className="text-[#E7B94F]"
                    />
                  </div>

                  <h3 className="mt-4 text-[14px] font-bold">
                    {service.title[language]}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-white/55">
                    {service.description[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CUISINES */}
        <section className="px-5 pt-12">
          <SectionHeader
            language={language}
            eyebrow={{
              en: "Explore Flavours",
              hi: "स्वाद एक्सप्लोर करें",
            }}
            title={{
              en: "Cuisines & Menu",
              hi: "क्यूजीन और मेनू",
            }}
            description={{
              en: "Build a menu that matches your event, guests and taste.",
              hi: "अपने इवेंट, मेहमानों और स्वाद के अनुसार अपना मेनू तैयार करें।",
            }}
          />

          <div className="mt-6 flex flex-wrap gap-2">
            {cuisines.map((item) => (
              <div
                key={item.en}
                className="rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/[0.06] px-4 py-2.5 text-xs font-medium text-white/85"
              >
                {item[language]}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[24px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 to-transparent p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]">
                <Sparkles
                  size={22}
                  className="text-black"
                />
              </div>

              <div>
                <h3 className="font-bold">
                  {language === "hi"
                    ? "अपना मेनू खुद बनाएं"
                    : "Create Your Own Menu"}
                </h3>

                <p className="mt-1 text-xs leading-5 text-white/60">
                  {language === "hi"
                    ? "क्या कोई खास डिश या फैमिली रेसिपी है? हमें बताएं और हम आपके लिए पर्सनलाइज्ड मेनू तैयार करने में मदद करेंगे।"
                    : "Have a special dish or family recipe? Tell us what you want and we&apos;ll help create a personalized menu."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EVENT TYPES */}
        <section className="px-5 pt-12">
          <SectionHeader
            language={language}
            eyebrow={{
              en: "For Every Celebration",
              hi: "हर सेलिब्रेशन के लिए",
            }}
            title={{
              en: "Catering For Your Event",
              hi: "आपके इवेंट के लिए कैटरिंग",
            }}
            description={{
              en: "Flexible catering solutions for every kind of occasion.",
              hi: "हर तरह के अवसर के लिए फ्लेक्सिबल कैटरिंग सॉल्यूशंस।",
            }}
          />

          <div className="mt-6 space-y-3">
            {eventTypes.map((event) => {
              const Icon = event.icon;

              return (
                <div
                  key={event.title.en}
                  className="flex items-center gap-4 rounded-[22px] border border-white/8 bg-white/[0.035] p-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon
                      size={21}
                      className="text-[#E7B94F]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold">
                      {event.title[language]}
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/55">
                      {event.text[language]}
                    </p>
                  </div>

                  <ChevronRight
                    size={17}
                    className="shrink-0 text-white/30"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* PREMIUM EXPERIENCE */}
        <section className="px-5 pt-12">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/25 bg-[#0B1827]">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#DFAE45]/5 blur-3xl" />

            <div className="relative p-6">
              <div className="flex items-center gap-2">
                <Crown
                  size={18}
                  className="text-[#E7B94F]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#E7B94F]">
                  {language === "hi"
                    ? "प्रीमियम एक्सपीरियंस"
                    : "Premium Experience"}
                </span>
              </div>

              <h2 className="mt-4 text-[27px] font-black leading-tight">
                {language === "hi" ? (
                  <>
                    आपके मेहमानों को चाहिए
                    <span className="block text-[#E7B94F]">
                      कुछ स्वादिष्ट।
                    </span>
                  </>
                ) : (
                  <>
                    Your Guests Deserve
                    <span className="block text-[#E7B94F]">
                      Something Delicious.
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {language === "hi"
                  ? "हम सभी डिटेल्स का ध्यान रखते हैं ताकि आप अपने मेहमानों पर फोकस कर सकें। पहली प्लेट से लेकर आखिरी डेजर्ट तक हर चीज को ध्यान से प्लान किया जाता है।"
                  : "We take care of the details so you can focus on your guests. From the first plate to the last dessert, every element is planned with care."}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {premiumPoints.map((item) => (
                  <div
                    key={item.en}
                    className="flex items-center gap-2 rounded-xl bg-white/[0.045] px-3 py-3"
                  >
                    <Check
                      size={15}
                      className="text-[#E7B94F]"
                    />

                    <span className="text-[11px] text-white/75">
                      {item[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="px-5 pt-12">
          <SectionHeader
            language={language}
            eyebrow={{
              en: "Catering Packages",
              hi: "कैटरिंग पैकेज",
            }}
            title={{
              en: "Choose Your Experience",
              hi: "अपना एक्सपीरियंस चुनें",
            }}
            description={{
              en: "Starting packages that can be customized according to your event.",
              hi: "शुरुआती पैकेज जिन्हें आपके इवेंट के अनुसार कस्टमाइज किया जा सकता है।",
            }}
          />

          <div className="mt-6 space-y-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name.en}
                className={`relative overflow-hidden rounded-[25px] border p-5 ${
                  pkg.popular
                    ? "border-[#DFAE45]/45 bg-gradient-to-br from-[#DFAE45]/10 to-[#0A1725]"
                    : "border-white/8 bg-white/[0.035]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#DFAE45] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black">
                    {language === "hi"
                      ? "सबसे लोकप्रिय"
                      : "Most Popular"}
                  </div>
                )}

                <div className="pr-24">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#E7B94F]">
                    {pkg.name[language]}
                  </p>

                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-[34px] font-black tracking-tight">
                      {pkg.price}
                    </span>

                    <span className="pb-1 text-xs text-white/45">
                      {pkg.per[language]}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-white/55">
                    {pkg.description[language]}
                  </p>
                </div>

                <div className="my-5 h-px bg-white/8" />

                <div className="grid grid-cols-2 gap-y-3">
                  {pkg.features.map((feature) => (
                    <div
                      key={feature.en}
                      className="flex items-center gap-2 pr-2"
                    >
                      <Check
                        size={14}
                        className="shrink-0 text-[#E7B94F]"
                      />

                      <span className="text-[11px] text-white/70">
                        {feature[language]}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    language === "hi"
                      ? `नमस्ते OurHub, मैं ${pkg.name.hi} कैटरिंग पैकेज (${pkg.price}/प्लेट) में रुचि रखता/रखती हूं। कृपया पूरी जानकारी साझा करें।`
                      : `Hello OurHub, I am interested in the ${pkg.name.en} Catering Package (${pkg.price}/plate). Please share complete details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/25 bg-[#DFAE45]/[0.07] py-3 text-xs font-bold text-[#E7B94F]"
                >
                  {language === "hi"
                    ? "पैकेज की जानकारी लें"
                    : "Enquire About Package"}

                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 pt-12">
          <SectionHeader
            language={language}
            eyebrow={{
              en: "Simple Process",
              hi: "आसान प्रक्रिया",
            }}
            title={{
              en: "From Planning To Plate",
              hi: "प्लानिंग से प्लेट तक",
            }}
            description={{
              en: "We make catering simple from start to finish.",
              hi: "हम शुरुआत से अंत तक कैटरिंग को आसान बनाते हैं।",
            }}
          />

          <div className="mt-7 space-y-3">
            {process.map((item, index) => (
              <div
                key={item.number}
                className="relative flex gap-4 rounded-[22px] border border-white/8 bg-white/[0.03] p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-xs font-black text-[#E7B94F]">
                  {item.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold">
                    {item.title[language]}
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-white/55">
                    {item.text[language]}
                  </p>
                </div>

                {index !== process.length - 1 && (
                  <div className="absolute -bottom-4 left-[35px] h-5 w-px bg-[#DFAE45]/20" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="px-5 pt-12">
          <SectionHeader
            language={language}
            eyebrow={{
              en: "Food & Ambience",
              hi: "फूड और एम्बियंस",
            }}
            title={{
              en: "A Feast Worth Remembering",
              hi: "एक यादगार दावत",
            }}
            description={{
              en: "Elegant setups, delicious food and moments your guests remember.",
              hi: "एलिगेंट सेटअप, स्वादिष्ट भोजन और यादगार पल।",
            }}
          />

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div
              className="h-[210px] rounded-[24px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.55), transparent), url('/images/events/catering-1.jpg')",
              }}
            >
              <div className="flex h-full items-end p-4">
                <span className="text-xs font-bold">
                  {language === "hi"
                    ? "एलिगेंट बुफे"
                    : "Elegant Buffet"}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div
                className="h-[98px] rounded-[22px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.55), transparent), url('/images/events/catering-2.jpg')",
                }}
              />

              <div
                className="h-[99px] rounded-[22px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.55), transparent), url('/images/events/catering-3.jpg')",
                }}
              />
            </div>
          </div>
        </section>

        {/* WHY OURHUB */}
        <section className="px-5 pt-12">
          <div className="rounded-[26px] border border-white/8 bg-white/[0.03] p-5">
            <div className="flex items-center gap-2">
              <Star
                size={17}
                className="fill-[#E7B94F] text-[#E7B94F]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#E7B94F]">
                {language === "hi"
                  ? "क्यों OurHub"
                  : "Why OurHub"}
              </span>
            </div>

            <h2 className="mt-3 text-[25px] font-black">
              {language === "hi" ? (
                <>
                  हम ध्यान रखते हैं
                  <span className="text-[#E7B94F]">
                    {" "}
                    हर प्लेट का।
                  </span>
                </>
              ) : (
                <>
                  We Care About
                  <span className="text-[#E7B94F]">
                    {" "}
                    Every Plate.
                  </span>
                </>
              )}
            </h2>

            <div className="mt-6 space-y-4">
              {whyOurHub.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title.en}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                      <Icon
                        size={18}
                        className="text-[#E7B94F]"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold">
                        {item.title[language]}
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-white/50">
                        {item.text[language]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="px-5 pt-12">
          <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-[#0A1725] to-[#0A1725] p-6">
            <div className="absolute right-5 top-5 text-[#DFAE45]/20">
              <ChefHat size={60} />
            </div>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={15}
                  className="fill-[#E7B94F] text-[#E7B94F]"
                />
              ))}
            </div>

            <p className="mt-5 text-[17px] font-medium leading-7 text-white/90">
              {language === "hi"
                ? "“खाना, प्रेजेंटेशन और सर्विस शानदार थी। हमारे मेहमानों को खासकर लाइव काउंटर और डेजर्ट बहुत पसंद आए।”"
                : "“The food, presentation and service were excellent. Our guests especially loved the live counters and desserts.”"}
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold">
                {language === "hi"
                  ? "OurHub के खुश ग्राहक"
                  : "Happy OurHub Customer"}
              </p>

              <p className="mt-1 text-[11px] text-white/40">
                {language === "hi"
                  ? "इवेंट कैटरिंग"
                  : "Event Catering"}
              </p>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="px-5 pt-12">
          <div className="flex items-center gap-4 rounded-[22px] border border-white/8 bg-white/[0.035] p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <MapPin
                size={21}
                className="text-[#E7B94F]"
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#E7B94F]">
                {language === "hi"
                  ? "सर्विस एरिया"
                  : "Service Areas"}
              </p>

              <p className="mt-1 text-sm font-semibold">
                {language === "hi"
                  ? "उज्जैन • रतलाम • इंदौर"
                  : "Ujjain • Ratlam • Indore"}
              </p>

              <p className="mt-1 text-[11px] text-white/45">
                {language === "hi"
                  ? "और आसपास के क्षेत्र"
                  : "& nearby areas"}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 pt-12">
          <SectionHeader
            language={language}
            eyebrow={{
              en: "Questions",
              hi: "सवाल",
            }}
            title={{
              en: "Catering FAQs",
              hi: "कैटरिंग FAQs",
            }}
            description={{
              en: "Everything you may want to know before booking.",
              hi: "बुकिंग से पहले जानने योग्य जरूरी जानकारी।",
            }}
          />

          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q.en}
                className="group rounded-[20px] border border-white/8 bg-white/[0.03] p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                  <span>{faq.q[language]}</span>

                  <ChevronRight
                    size={17}
                    className="shrink-0 text-[#E7B94F] transition-transform group-open:rotate-90"
                  />
                </summary>

                <p className="mt-3 border-t border-white/8 pt-3 text-[12px] leading-5 text-white/55">
                  {faq.a[language]}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-8 pt-14">
          <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 via-[#0B1827] to-[#071321] p-6 text-center">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DFAE45]">
                <ChefHat
                  size={27}
                  className="text-black"
                />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
                {language === "hi"
                  ? "आइए अपना मेनू प्लान करें"
                  : "Let's Plan Your Menu"}
              </p>

              <h2 className="mt-3 text-[29px] font-black leading-tight">
                {language === "hi" ? (
                  <>
                    आपका इवेंट।
                    <span className="block text-[#E7B94F]">
                      हमारा क्यूलिनरी टच।
                    </span>
                  </>
                ) : (
                  <>
                    Your Event.
                    <span className="block text-[#E7B94F]">
                      Our Culinary Touch.
                    </span>
                  </>
                )}
              </h2>

              <p className="mx-auto mt-3 max-w-[340px] text-xs leading-5 text-white/55">
                {language === "hi"
                  ? "अपने इवेंट की जानकारी शेयर करें और हमारी टीम आपके लिए परफेक्ट कैटरिंग एक्सपीरियंस तैयार करने में मदद करेगी।"
                  : "Share your event details and our team will help you create the perfect catering experience."}
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-4 text-sm font-black text-black"
              >
                <MessageCircle size={19} />

                {language === "hi"
                  ? "अपनी कैटरिंग प्लान करें"
                  : "Plan My Catering"}

                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* FIXED CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#05070B]/90 px-4 py-3 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[480px] items-center gap-3">
          <div className="hidden min-w-0 flex-1 sm:block">
            <p className="text-xs font-bold">
              {language === "hi"
                ? "इवेंट प्लान कर रहे हैं?"
                : "Planning an event?"}
            </p>

            <p className="text-[10px] text-white/45">
              {language === "hi"
                ? "कस्टमाइज्ड कैटरिंग कोट पाएं"
                : "Get a customized catering quote"}
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#DFAE45] py-3.5 text-xs font-black text-black"
          >
            <MessageCircle size={17} />

            {language === "hi"
              ? "कैटरिंग कोट पाएं"
              : "Get Catering Quote"}
          </a>

          <a
            href={`tel:+${whatsappNumber}`}
            aria-label={
              language === "hi"
                ? "कॉल करें"
                : "Call OurHub"
            }
            className="flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-white/10 bg-white/5"
          >
            <Phone
              size={17}
              className="text-[#E7B94F]"
            />
          </a>
        </div>
      </div>
    </main>
  );
}

function SectionHeader({
  language,
  eyebrow,
  title,
  description,
}: {
  language: Language;
  eyebrow: Localized;
  title: Localized;
  description: Localized;
}) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
        {eyebrow[language]}
      </p>

      <h2 className="mt-2 text-[27px] font-black leading-tight tracking-[-0.03em]">
        {title[language]}
      </h2>

      <p className="mt-2 text-[13px] leading-5 text-white/50">
        {description[language]}
      </p>
    </div>
  );
}