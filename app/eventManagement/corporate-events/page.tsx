"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Camera,
  Check,
  ChevronRight,
  Clock3,
  Coffee,
  Crown,
  Headphones,
  MapPin,
  MessageCircle,
  Mic2,
  MonitorPlay,
  Presentation,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Utensils,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const whatsappNumber = "918878632431";

type Localized = {
  en: string;
  hi: string;
};

const services: {
  icon: typeof Presentation;
  title: Localized;
  text: Localized;
}[] = [
  {
    icon: Presentation,
    title: {
      en: "Conferences",
      hi: "कॉन्फ्रेंस",
    },
    text: {
      en: "Professional conference planning with complete stage and technical setup.",
      hi: "कम्प्लीट स्टेज और टेक्निकल सेटअप के साथ प्रोफेशनल कॉन्फ्रेंस प्लानिंग।",
    },
  },
  {
    icon: BriefcaseBusiness,
    title: {
      en: "Corporate Meetings",
      hi: "कॉर्पोरेट मीटिंग्स",
    },
    text: {
      en: "Well-organized meetings designed for productive business interactions.",
      hi: "प्रोडक्टिव बिजनेस इंटरैक्शन के लिए व्यवस्थित और प्रोफेशनल मीटिंग्स।",
    },
  },
  {
    icon: Award,
    title: {
      en: "Award Functions",
      hi: "अवार्ड फंक्शन्स",
    },
    text: {
      en: "Premium award ceremonies with stage, lighting and guest coordination.",
      hi: "स्टेज, लाइटिंग और गेस्ट कोऑर्डिनेशन के साथ प्रीमियम अवार्ड सेरेमनी।",
    },
  },
  {
    icon: Mic2,
    title: {
      en: "Seminars & Workshops",
      hi: "सेमिनार और वर्कशॉप्स",
    },
    text: {
      en: "Complete arrangements for seminars, workshops and training programs.",
      hi: "सेमिनार, वर्कशॉप्स और ट्रेनिंग प्रोग्राम्स के लिए कम्प्लीट अरेंजमेंट।",
    },
  },
  {
    icon: MonitorPlay,
    title: {
      en: "AV & Technical",
      hi: "AV और टेक्निकल",
    },
    text: {
      en: "Screens, projectors, sound, microphones and professional AV support.",
      hi: "स्क्रीन, प्रोजेक्टर, साउंड, माइक्रोफोन और प्रोफेशनल AV सपोर्ट।",
    },
  },
  {
    icon: Utensils,
    title: {
      en: "Food & Catering",
      hi: "फूड और कैटरिंग",
    },
    text: {
      en: "Corporate catering, refreshments, meals and hospitality arrangements.",
      hi: "कॉर्पोरेट कैटरिंग, रिफ्रेशमेंट्स, मील्स और हॉस्पिटैलिटी अरेंजमेंट्स।",
    },
  },
];

const packages: {
  title: Localized;
  price: string;
  subtitle: Localized;
  icon: typeof BriefcaseBusiness;
  popular?: boolean;
  features: Localized[];
}[] = [
  {
    title: {
      en: "Business",
      hi: "बिजनेस",
    },
    price: "₹9,999",
    subtitle: {
      en: "For meetings & small corporate gatherings",
      hi: "मीटिंग्स और छोटे कॉर्पोरेट गैदरिंग्स के लिए",
    },
    icon: BriefcaseBusiness,
    features: [
      {
        en: "Venue coordination",
        hi: "वेन्यू कोऑर्डिनेशन",
      },
      {
        en: "Basic stage setup",
        hi: "बेसिक स्टेज सेटअप",
      },
      {
        en: "Sound & microphone",
        hi: "साउंड और माइक्रोफोन",
      },
      {
        en: "Seating arrangement",
        hi: "सीटिंग अरेंजमेंट",
      },
      {
        en: "Event coordination",
        hi: "इवेंट कोऑर्डिनेशन",
      },
    ],
  },
  {
    title: {
      en: "Professional",
      hi: "प्रोफेशनल",
    },
    price: "₹24,999",
    subtitle: {
      en: "For conferences & corporate events",
      hi: "कॉन्फ्रेंस और कॉर्पोरेट इवेंट्स के लिए",
    },
    icon: Crown,
    popular: true,
    features: [
      {
        en: "Premium venue setup",
        hi: "प्रीमियम वेन्यू सेटअप",
      },
      {
        en: "Stage & backdrop",
        hi: "स्टेज और बैकड्रॉप",
      },
      {
        en: "Professional AV setup",
        hi: "प्रोफेशनल AV सेटअप",
      },
      {
        en: "Photography & video",
        hi: "फोटोग्राफी और वीडियो",
      },
      {
        en: "Guest management",
        hi: "गेस्ट मैनेजमेंट",
      },
      {
        en: "Catering coordination",
        hi: "कैटरिंग कोऑर्डिनेशन",
      },
      {
        en: "Dedicated event coordinator",
        hi: "डेडिकेटेड इवेंट कोऑर्डिनेटर",
      },
    ],
  },
  {
    title: {
      en: "Enterprise",
      hi: "एंटरप्राइज",
    },
    price: "₹49,999",
    subtitle: {
      en: "For large-scale corporate events",
      hi: "बड़े स्तर के कॉर्पोरेट इवेंट्स के लिए",
    },
    icon: Building2,
    features: [
      {
        en: "Complete event planning",
        hi: "कम्प्लीट इवेंट प्लानिंग",
      },
      {
        en: "Luxury stage & branding",
        hi: "लग्ज़री स्टेज और ब्रांडिंग",
      },
      {
        en: "Advanced AV production",
        hi: "एडवांस्ड AV प्रोडक्शन",
      },
      {
        en: "Professional photography",
        hi: "प्रोफेशनल फोटोग्राफी",
      },
      {
        en: "Cinematic event video",
        hi: "सिनेमैटिक इवेंट वीडियो",
      },
      {
        en: "Hospitality management",
        hi: "हॉस्पिटैलिटी मैनेजमेंट",
      },
      {
        en: "Guest & registration desk",
        hi: "गेस्ट और रजिस्ट्रेशन डेस्क",
      },
      {
        en: "Dedicated event manager",
        hi: "डेडिकेटेड इवेंट मैनेजर",
      },
    ],
  },
];

const process: {
  number: string;
  title: Localized;
  text: Localized;
}[] = [
  {
    number: "01",
    title: {
      en: "Share Your Requirement",
      hi: "अपनी जरूरत बताएं",
    },
    text: {
      en: "Tell us your event type, date, venue, guest count and requirements.",
      hi: "हमें अपना इवेंट टाइप, तारीख, वेन्यू, गेस्ट काउंट और जरूरतें बताएं।",
    },
  },
  {
    number: "02",
    title: {
      en: "Get Your Event Plan",
      hi: "अपना इवेंट प्लान पाएं",
    },
    text: {
      en: "Our team creates a suitable event plan based on your objectives and budget.",
      hi: "हमारी टीम आपके उद्देश्य और बजट के अनुसार उपयुक्त इवेंट प्लान तैयार करती है।",
    },
  },
  {
    number: "03",
    title: {
      en: "We Coordinate Everything",
      hi: "हम सब कुछ कोऑर्डिनेट करते हैं",
    },
    text: {
      en: "Vendors, stage, AV, catering, branding and guest management are coordinated.",
      hi: "वेंडर्स, स्टेज, AV, कैटरिंग, ब्रांडिंग और गेस्ट मैनेजमेंट कोऑर्डिनेट किया जाता है।",
    },
  },
  {
    number: "04",
    title: {
      en: "Deliver a Seamless Event",
      hi: "शानदार इवेंट डिलीवर करें",
    },
    text: {
      en: "Your team focuses on business while we manage the event execution.",
      hi: "आपकी टीम बिजनेस पर फोकस करती है और हम इवेंट का एग्जीक्यूशन संभालते हैं।",
    },
  },
];

const eventTypes: Localized[] = [
  {
    en: "Corporate Meetings",
    hi: "कॉर्पोरेट मीटिंग्स",
  },
  {
    en: "Annual Functions",
    hi: "एनुअल फंक्शन्स",
  },
  {
    en: "Conferences",
    hi: "कॉन्फ्रेंस",
  },
  {
    en: "Product Launches",
    hi: "प्रोडक्ट लॉन्च",
  },
  {
    en: "Award Ceremonies",
    hi: "अवार्ड सेरेमनी",
  },
  {
    en: "Seminars",
    hi: "सेमिनार",
  },
  {
    en: "Workshops",
    hi: "वर्कशॉप्स",
  },
  {
    en: "Dealer Meets",
    hi: "डीलर मीट्स",
  },
  {
    en: "Team Events",
    hi: "टीम इवेंट्स",
  },
  {
    en: "Company Celebrations",
    hi: "कंपनी सेलिब्रेशन",
  },
];

const faqs: {
  q: Localized;
  a: Localized;
}[] = [
  {
    q: {
      en: "What types of corporate events do you manage?",
      hi: "आप किस प्रकार के कॉर्पोरेट इवेंट्स मैनेज करते हैं?",
    },
    a: {
      en: "We manage meetings, conferences, seminars, workshops, award functions, product launches, annual functions, dealer meets and company celebrations.",
      hi: "हम मीटिंग्स, कॉन्फ्रेंस, सेमिनार, वर्कशॉप्स, अवार्ड फंक्शन्स, प्रोडक्ट लॉन्च, एनुअल फंक्शन्स, डीलर मीट्स और कंपनी सेलिब्रेशन मैनेज करते हैं।",
    },
  },
  {
    q: {
      en: "Can you arrange the venue?",
      hi: "क्या आप वेन्यू की व्यवस्था कर सकते हैं?",
    },
    a: {
      en: "Yes. We can help coordinate suitable hotels, conference halls, banquet spaces and other venues based on your requirements.",
      hi: "हां। हम आपकी जरूरत के अनुसार उपयुक्त होटल, कॉन्फ्रेंस हॉल, बैंक्वेट स्पेस और अन्य वेन्यू कोऑर्डिनेट करने में मदद कर सकते हैं।",
    },
  },
  {
    q: {
      en: "Do you provide AV and technical equipment?",
      hi: "क्या आप AV और टेक्निकल इक्विपमेंट उपलब्ध कराते हैं?",
    },
    a: {
      en: "Yes. Audio systems, microphones, LED screens, projectors, presentations and other technical requirements can be arranged.",
      hi: "हां। ऑडियो सिस्टम, माइक्रोफोन, LED स्क्रीन, प्रोजेक्टर, प्रेजेंटेशन और अन्य टेक्निकल जरूरतों की व्यवस्था की जा सकती है।",
    },
  },
  {
    q: {
      en: "Can the event be customized according to our brand?",
      hi: "क्या इवेंट को हमारी ब्रांड पहचान के अनुसार कस्टमाइज़ किया जा सकता है?",
    },
    a: {
      en: "Yes. Stage design, branding, welcome areas, backdrops and event elements can be customized around your company identity.",
      hi: "हां। स्टेज डिजाइन, ब्रांडिंग, वेलकम एरिया, बैकड्रॉप और अन्य इवेंट एलिमेंट्स को आपकी कंपनी की ब्रांड पहचान के अनुसार कस्टमाइज़ किया जा सकता है।",
    },
  },
];

export default function CorporateEventsPage() {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const whatsappMessage = isHindi
    ? "नमस्ते OurHub, मैं एक कॉर्पोरेट इवेंट प्लान करना चाहता/चाहती हूँ।\n\nकृपया कॉर्पोरेट इवेंट पैकेज, कीमत और उपलब्ध सर्विसेज की जानकारी साझा करें।"
    : "Hello OurHub, I want to plan a Corporate Event.\n\nPlease share your corporate event packages, pricing and available services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const getPackageMessage = (
    title: Localized,
    price: string
  ) => {
    if (isHindi) {
      return `नमस्ते OurHub, मुझे ${title.hi} कॉर्पोरेट इवेंट पैकेज (${price}) में रुचि है। कृपया पूरी जानकारी साझा करें।`;
    }

    return `Hello OurHub, I am interested in the ${title.en} Corporate Event Package (${price}). Please share complete details.`;
  };

  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#DFAE45]/10 blur-[120px]" />
        <div className="absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[480px] overflow-hidden">
        {/* HEADER */}
        <header className="absolute left-0 right-0 top-0 z-30 px-5 pt-5">
          <div className="flex items-center justify-between">
            <Link
              href="/eventManagement"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 backdrop-blur-xl"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="rounded-full border border-[#DFAE45]/30 bg-black/45 px-4 py-2 backdrop-blur-xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#E7B94F]">
                OURHUB CORPORATE
              </span>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10 backdrop-blur-xl"
            >
              <MessageCircle
                size={19}
                className="text-[#25D366]"
              />
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="relative h-[650px] overflow-hidden">
          <img
            src="/images/events/corporate.jpg"
            alt={
              isHindi
                ? "कॉर्पोरेट इवेंट"
                : "Corporate event"
            }
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-[#05070B]" />

          <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#05070B] via-[#05070B]/80 to-transparent" />

          <div className="absolute bottom-9 left-5 right-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/45 px-3 py-2 backdrop-blur-xl">
              <Sparkles
                size={14}
                className="text-[#E7B94F]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#E7B94F]">
                {isHindi
                  ? "प्रोफेशनल इवेंट मैनेजमेंट"
                  : "Professional Event Management"}
              </span>
            </div>

            <h1 className="max-w-[400px] text-[40px] font-bold leading-[1] tracking-[-0.04em]">
              {isHindi ? (
                <>
                  बिजनेस इवेंट्स,
                  <span className="block text-[#E7B94F]">
                    परफेक्शन के साथ।
                  </span>
                </>
              ) : (
                <>
                  Business Events,
                  <span className="block text-[#E7B94F]">
                    Executed Perfectly.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-4 max-w-[390px] text-[14px] leading-6 text-white/65">
              {isHindi
                ? "कॉन्फ्रेंस और मीटिंग्स से लेकर अवार्ड सेरेमनी और प्रोडक्ट लॉन्च तक — हम सभी डिटेल्स संभालते हैं ताकि आपकी टीम जरूरी काम पर फोकस कर सके।"
                : "From conferences and meetings to award ceremonies and product launches — we manage the details so your team can focus on what matters."}
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.2)]"
              >
                {isHindi
                  ? "कॉर्पोरेट इवेंट प्लान करें"
                  : "Plan Corporate Event"}

                <ArrowRight size={17} />
              </a>

              <a
                href="#packages"
                className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl"
              >
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="px-5 pt-3">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
            <div className="border-r border-white/10 px-2 py-4 text-center">
              <BadgeCheck
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />

              <p className="text-[10px] font-semibold">
                {isHindi
                  ? "प्रोफेशनल टीम"
                  : "Professional Team"}
              </p>
            </div>

            <div className="border-r border-white/10 px-2 py-4 text-center">
              <ShieldCheck
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />

              <p className="text-[10px] font-semibold">
                {isHindi
                  ? "विश्वसनीय एग्जीक्यूशन"
                  : "Reliable Execution"}
              </p>
            </div>

            <div className="px-2 py-4 text-center">
              <Clock3
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />

              <p className="text-[10px] font-semibold">
                {isHindi
                  ? "समय पर डिलीवरी"
                  : "On-Time Delivery"}
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 pt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
            {isHindi
              ? "कॉर्पोरेट एक्सीलेंस"
              : "Corporate Excellence"}
          </p>

          <h2 className="mt-3 text-[29px] font-bold leading-tight">
            {isHindi ? (
              <>
                आपका बिजनेस है
                <br />
                <span className="text-white/40">
                  प्राथमिकता, लॉजिस्टिक्स नहीं।
                </span>
              </>
            ) : (
              <>
                Your business is
                <br />
                <span className="text-white/40">
                  the priority. Not the logistics.
                </span>
              </>
            )}
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-white/50">
            {isHindi
              ? "एक सफल कॉर्पोरेट इवेंट के लिए सिर्फ डेकोरेशन काफी नहीं है। इसके लिए सटीक प्लानिंग, प्रोफेशनल कोऑर्डिनेशन, टेक्निकल सपोर्ट और सीमलेस एग्जीक्यूशन जरूरी है।"
              : "A successful corporate event needs more than decoration. It needs precise planning, professional coordination, technical support and seamless execution."}
          </p>
        </section>

        {/* SERVICES */}
        <section className="px-5 pt-12">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
              {isHindi
                ? "हम क्या मैनेज करते हैं"
                : "What We Manage"}
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {isHindi
                ? "कम्प्लीट कॉर्पोरेट सॉल्यूशंस"
                : "Complete Corporate Solutions"}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title.en}
                  className="rounded-[22px] border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon
                      size={21}
                      className="text-[#E7B94F]"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-bold">
                    {service.title[language]}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-white/40">
                    {service.text[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* EVENT TYPES */}
        <section className="px-5 pt-16">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <BriefcaseBusiness
                  size={21}
                  className="text-[#E7B94F]"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#E7B94F]">
                  {isHindi
                    ? "इवेंट टाइप्स"
                    : "Event Types"}
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  {isHindi
                    ? "बिजनेस के लिए बनाया गया"
                    : "Built For Business"}
                </h2>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <span
                  key={type.en}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] text-white/60"
                >
                  {type[language]}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section
          id="packages"
          className="px-5 pt-16"
        >
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
              {isHindi
                ? "कॉर्पोरेट पैकेज"
                : "Corporate Packages"}
            </p>

            <h2 className="mt-2 text-[29px] font-bold">
              {isHindi
                ? "अपना स्केल चुनें"
                : "Choose Your Scale"}
            </h2>

            <p className="mt-2 text-sm leading-5 text-white/40">
              {isHindi
                ? "फ्लेक्सिबल पैकेज जिन्हें आपके इवेंट के अनुसार कस्टमाइज़ किया जा सकता है।"
                : "Flexible packages that can be customized around your event."}
            </p>
          </div>

          <div className="space-y-4">
            {packages.map((pkg) => {
              const Icon = pkg.icon;

              return (
                <div
                  key={pkg.title.en}
                  className={`relative overflow-hidden rounded-[27px] border p-5 ${
                    pkg.popular
                      ? "border-[#DFAE45]/50 bg-gradient-to-br from-[#DFAE45]/10 to-white/[0.025]"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute right-4 top-4 rounded-full bg-[#DFAE45] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black">
                      {isHindi
                        ? "सबसे लोकप्रिय"
                        : "Recommended"}
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                      <Icon
                        size={22}
                        className="text-[#E7B94F]"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">
                        {pkg.title[language]}
                      </h3>

                      <p className="mt-1 max-w-[235px] text-xs leading-5 text-white/40">
                        {pkg.subtitle[language]}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="text-3xl font-black">
                      {pkg.price}
                    </span>

                    <span className="ml-2 text-xs text-white/35">
                      {isHindi
                        ? "से शुरू"
                        : "starting from"}
                    </span>
                  </div>

                  <div className="my-5 h-px bg-white/10" />

                  <div className="space-y-3">
                    {pkg.features.map((feature) => (
                      <div
                        key={feature.en}
                        className="flex items-center gap-3 text-xs text-white/65"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DFAE45]/10">
                          <Check
                            size={12}
                            className="text-[#E7B94F]"
                          />
                        </div>

                        {feature[language]}
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      getPackageMessage(
                        pkg.title,
                        pkg.price
                      )
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold ${
                      pkg.popular
                        ? "bg-[#DFAE45] text-black"
                        : "border border-white/10 bg-white/5 text-white"
                    }`}
                  >
                    {isHindi
                      ? "पैकेज पर चर्चा करें"
                      : "Discuss Package"}

                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHY OURHUB */}
        <section className="px-5 pt-16">
          <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.025] to-transparent p-6">
            <div className="flex items-center gap-2 text-[#E7B94F]">
              <Sparkles size={17} />

              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                {isHindi
                  ? "क्यों OurHub"
                  : "Why OurHub"}
              </span>
            </div>

            <h2 className="mt-4 text-[25px] font-bold leading-tight">
              {isHindi ? (
                <>
                  प्रोफेशनल प्लानिंग।
                  <br />
                  <span className="text-[#E7B94F]">
                    बिना अनावश्यक तनाव के।
                  </span>
                </>
              ) : (
                <>
                  Professional planning.
                  <br />
                  <span className="text-[#E7B94F]">
                    Zero unnecessary stress.
                  </span>
                </>
              )}
            </h2>

            <div className="mt-7 space-y-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <Headphones
                    size={19}
                    className="text-[#E7B94F]"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    {isHindi
                      ? "डेडिकेटेड कोऑर्डिनेशन"
                      : "Dedicated Coordination"}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    {isHindi
                      ? "प्लानिंग से लेकर एग्जीक्यूशन तक आपके पूरे इवेंट को एक टीम कोऑर्डिनेट करती है।"
                      : "One team coordinating your complete event from planning to execution."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <MonitorPlay
                    size={19}
                    className="text-[#E7B94F]"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    {isHindi
                      ? "टेक्निकल एक्सपर्टीज"
                      : "Technical Expertise"}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    {isHindi
                      ? "स्मूद इवेंट एग्जीक्यूशन के लिए प्रोफेशनल साउंड, डिस्प्ले और प्रेजेंटेशन सपोर्ट।"
                      : "Professional sound, display and presentation support for smooth event execution."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <ShieldCheck
                    size={19}
                    className="text-[#E7B94F]"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    {isHindi
                      ? "विश्वसनीय एग्जीक्यूशन"
                      : "Reliable Execution"}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    {isHindi
                      ? "आपके इवेंट के दिन से पहले हर जरूरी डिटेल की प्लानिंग की जाती है।"
                      : "Every important detail is planned before your event day."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 pt-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
            {isHindi
              ? "हमारी प्रक्रिया"
              : "Our Process"}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {isHindi
              ? "ब्रीफ से एग्जीक्यूशन तक"
              : "From Brief to Execution"}
          </h2>

          <div className="mt-7 space-y-5">
            {process.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-4"
              >
                <div className="relative flex w-11 shrink-0 justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-xs font-bold text-[#E7B94F]">
                    {step.number}
                  </div>

                  {index !== process.length - 1 && (
                    <div className="absolute top-11 h-9 w-px bg-white/10" />
                  )}
                </div>

                <div className="pb-2">
                  <h3 className="text-sm font-bold">
                    {step.title[language]}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    {step.text[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORPORATE EXPERIENCE */}
        <section className="px-5 pt-16">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2">
                <Building2
                  size={19}
                  className="text-[#E7B94F]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#E7B94F]">
                  {isHindi
                    ? "कॉर्पोरेट हॉस्पिटैलिटी"
                    : "Corporate Hospitality"}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold leading-tight">
                {isHindi ? (
                  <>
                    हर गेस्ट को
                    <br />
                    <span className="text-white/45">
                      प्रोफेशनल वेलकमिंग दें।
                    </span>
                  </>
                ) : (
                  <>
                    Make every guest
                    <br />
                    <span className="text-white/45">
                      feel professionally welcomed.
                    </span>
                  </>
                )}
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/25 p-4">
                  <Users
                    size={19}
                    className="text-[#E7B94F]"
                  />

                  <p className="mt-3 text-sm font-bold">
                    {isHindi
                      ? "गेस्ट मैनेजमेंट"
                      : "Guest Management"}
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/35">
                    {isHindi
                      ? "स्मूद रजिस्ट्रेशन और कोऑर्डिनेशन"
                      : "Smooth registration & coordination"}
                  </p>
                </div>

                <div className="rounded-2xl bg-black/25 p-4">
                  <Coffee
                    size={19}
                    className="text-[#E7B94F]"
                  />

                  <p className="mt-3 text-sm font-bold">
                    {isHindi
                      ? "हॉस्पिटैलिटी"
                      : "Hospitality"}
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/35">
                    {isHindi
                      ? "प्रोफेशनल गेस्ट एक्सपीरियंस"
                      : "Professional guest experience"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="px-5 pt-16">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
                {isHindi
                  ? "इवेंट इंस्पिरेशन"
                  : "Event Inspiration"}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {isHindi
                  ? "कॉर्पोरेट मोमेंट्स"
                  : "Corporate Moments"}
              </h2>
            </div>

            <Camera
              size={20}
              className="text-[#E7B94F]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-52 overflow-hidden rounded-[22px]">
              <img
                src="/images/events/corporate.jpg"
                alt={
                  isHindi
                    ? "कॉर्पोरेट कॉन्फ्रेंस"
                    : "Corporate conference"
                }
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                {isHindi
                  ? "कॉन्फ्रेंस"
                  : "Conferences"}
              </span>
            </div>

            <div className="relative h-52 overflow-hidden rounded-[22px]">
              <img
                src="/images/events/corporate.jpg"
                alt={
                  isHindi
                    ? "कॉर्पोरेट इवेंट सेटअप"
                    : "Corporate event setup"
                }
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                {isHindi
                  ? "बिजनेस इवेंट्स"
                  : "Business Events"}
              </span>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="px-5 pt-16">
          <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  fill="currentColor"
                  className="text-[#E7B94F]"
                />
              ))}
            </div>

            <p className="mt-5 text-[17px] font-medium leading-7 text-white/75">
              {isHindi
                ? "“पूरा इवेंट बहुत प्रोफेशनल तरीके से संभाला गया। सेटअप और टेक्निकल अरेंजमेंट से लेकर गेस्ट कोऑर्डिनेशन तक, सब कुछ बहुत व्यवस्थित लगा।”"
                : "“The entire event was handled professionally. From setup and technical arrangements to guest coordination, everything felt organized.”"}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFAE45]/10">
                <BriefcaseBusiness
                  size={17}
                  className="text-[#E7B94F]"
                />
              </div>

              <div>
                <p className="text-sm font-bold">
                  {isHindi
                    ? "OurHub कॉर्पोरेट क्लाइंट"
                    : "OurHub Corporate Client"}
                </p>

                <p className="text-xs text-white/40">
                  {isHindi
                    ? "कॉर्पोरेट इवेंट"
                    : "Corporate Event"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="px-5 pt-10">
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <MapPin
                size={20}
                className="text-[#E7B94F]"
              />
            </div>

            <div>
              <p className="text-sm font-bold">
                {isHindi
                  ? "कॉर्पोरेट इवेंट मैनेजमेंट"
                  : "Corporate Event Management"}
              </p>

              <p className="mt-1 text-xs text-white/40">
                {isHindi
                  ? "उज्जैन • रतलाम • इंदौर और आसपास के क्षेत्र"
                  : "Ujjain • Ratlam • Indore & nearby areas"}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 pt-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
            {isHindi ? "सवाल-जवाब" : "FAQ"}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {isHindi
              ? "अक्सर पूछे जाने वाले सवाल"
              : "Frequently Asked Questions"}
          </h2>

          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q.en}
                className="group rounded-2xl border border-white/10 bg-white/[0.035]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 text-sm font-semibold">
                  <span>{faq.q[language]}</span>

                  <ChevronRight
                    size={17}
                    className="shrink-0 transition group-open:rotate-90"
                  />
                </summary>

                <p className="px-4 pb-4 text-xs leading-5 text-white/40">
                  {faq.a[language]}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-32 pt-16">
          <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-7 text-center">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/15 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DFAE45]/15">
                <Building2
                  size={25}
                  className="text-[#E7B94F]"
                />
              </div>

              <h2 className="mt-5 text-2xl font-black">
                {isHindi
                  ? "कॉर्पोरेट इवेंट प्लान कर रहे हैं?"
                  : "Planning a Corporate Event?"}
              </h2>

              <p className="mx-auto mt-3 max-w-[315px] text-sm leading-6 text-white/45">
                {isHindi
                  ? "अपनी इवेंट जरूरतें हमारे साथ शेयर करें और हमारी टीम आपके लिए एक प्रोफेशनल प्लान तैयार करेगी।"
                  : "Share your event requirements and let our team create a professional plan for you."}
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-4 text-sm font-black text-black"
              >
                <MessageCircle size={18} />

                {isHindi
                  ? "अपने इवेंट पर चर्चा करें"
                  : "Discuss Your Event"}
              </a>

              <a
                href="tel:+918878632431"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-semibold"
              >
                <Headphones size={17} />

                {isHindi
                  ? "OurHub से बात करें"
                  : "Talk to OurHub"}
              </a>
            </div>
          </div>
        </section>

        {/* FIXED CTA */}
        <div className="fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-white/10 bg-[#05070B]/90 px-4 py-3 backdrop-blur-2xl">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-sm font-black text-black"
          >
            {isHindi
              ? "कॉर्पोरेट इवेंट प्लान करें"
              : "Plan Corporate Event"}

            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </main>
  );
}