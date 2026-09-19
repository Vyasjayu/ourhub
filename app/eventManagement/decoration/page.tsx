"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Flower2,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  PartyPopper,
  Sparkles,
  Star,
  Store,
  Users,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const whatsappNumber = "918878632431";

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

type Localized = {
  en: string;
  hi: string;
};

const decorationServices: {
  icon: typeof Flower2;
  title: Localized;
  description: Localized;
}[] = [
  {
    icon: Flower2,
    title: {
      en: "Floral Decoration",
      hi: "फ्लोरल डेकोरेशन",
    },
    description: {
      en: "Elegant fresh and artificial floral arrangements for stages, entrances, tables and special corners.",
      hi: "स्टेज, एंट्रेंस, टेबल और स्पेशल कॉर्नर्स के लिए खूबसूरत फ्रेश और आर्टिफिशियल फ्लोरल अरेंजमेंट।",
    },
  },
  {
    icon: Sparkles,
    title: {
      en: "Theme Decoration",
      hi: "थीम डेकोरेशन",
    },
    description: {
      en: "Custom themes with coordinated colors, backdrops, props and premium styling.",
      hi: "कोऑर्डिनेटेड कलर्स, बैकड्रॉप, प्रॉप्स और प्रीमियम स्टाइलिंग के साथ कस्टम थीम डेकोरेशन।",
    },
  },
  {
    icon: PartyPopper,
    title: {
      en: "Balloon Decoration",
      hi: "बैलून डेकोरेशन",
    },
    description: {
      en: "Creative balloon arches, walls, columns and customized balloon installations.",
      hi: "क्रिएटिव बैलून आर्च, वॉल्स, कॉलम और कस्टमाइज्ड बैलून इंस्टॉलेशन।",
    },
  },
  {
    icon: Heart,
    title: {
      en: "Wedding Decoration",
      hi: "वेडिंग डेकोरेशन",
    },
    description: {
      en: "Beautiful wedding stages, mandap styling, varmala setup and complete venue decoration.",
      hi: "खूबसूरत वेडिंग स्टेज, मंडप स्टाइलिंग, वरमाला सेटअप और कम्प्लीट वेन्यू डेकोरेशन।",
    },
  },
  {
    icon: Home,
    title: {
      en: "Home Decoration",
      hi: "होम डेकोरेशन",
    },
    description: {
      en: "Transform your home for birthdays, anniversaries, baby showers and family celebrations.",
      hi: "बर्थडे, एनिवर्सरी, बेबी शॉवर और फैमिली सेलिब्रेशन के लिए अपने घर को खूबसूरत तरीके से सजाएं।",
    },
  },
  {
    icon: Store,
    title: {
      en: "Venue Decoration",
      hi: "वेन्यू डेकोरेशन",
    },
    description: {
      en: "Complete decoration solutions for banquet halls, lawns, hotels and event venues.",
      hi: "बैंक्वेट हॉल, लॉन, होटल और अन्य इवेंट वेन्यू के लिए कम्प्लीट डेकोरेशन सॉल्यूशंस।",
    },
  },
];

const decorationTypes: Localized[] = [
  {
    en: "Wedding Decor",
    hi: "वेडिंग डेकोर",
  },
  {
    en: "Birthday Decor",
    hi: "बर्थडे डेकोर",
  },
  {
    en: "Baby Shower",
    hi: "बेबी शॉवर",
  },
  {
    en: "Anniversary",
    hi: "एनिवर्सरी",
  },
  {
    en: "Engagement",
    hi: "एंगेजमेंट",
  },
  {
    en: "Corporate Events",
    hi: "कॉर्पोरेट इवेंट्स",
  },
  {
    en: "Home Functions",
    hi: "होम फंक्शन्स",
  },
  {
    en: "Festival Decor",
    hi: "फेस्टिवल डेकोर",
  },
];

const customThemeItems: Localized[] = [
  {
    en: "Custom Colors",
    hi: "कस्टम कलर्स",
  },
  {
    en: "Personal Photos",
    hi: "पर्सनल फोटोज",
  },
  {
    en: "Floral Styling",
    hi: "फ्लोरल स्टाइलिंग",
  },
  {
    en: "Theme Backdrop",
    hi: "थीम बैकड्रॉप",
  },
];

const packages: {
  name: Localized;
  price: string;
  popular?: boolean;
  description: Localized;
  features: Localized[];
}[] = [
  {
    name: {
      en: "Elegant Decor",
      hi: "एलिगेंट डेकोर",
    },
    price: "₹4,999",
    description: {
      en: "A stylish decoration setup for intimate celebrations.",
      hi: "इंटिमेट सेलिब्रेशन के लिए एक स्टाइलिश डेकोरेशन सेटअप।",
    },
    features: [
      {
        en: "Basic theme setup",
        hi: "बेसिक थीम सेटअप",
      },
      {
        en: "Balloon decoration",
        hi: "बैलून डेकोरेशन",
      },
      {
        en: "Backdrop",
        hi: "बैकड्रॉप",
      },
      {
        en: "Table styling",
        hi: "टेबल स्टाइलिंग",
      },
      {
        en: "Welcome decoration",
        hi: "वेलकम डेकोरेशन",
      },
    ],
  },
  {
    name: {
      en: "Premium Decor",
      hi: "प्रीमियम डेकोर",
    },
    price: "₹9,999",
    popular: true,
    description: {
      en: "A complete premium setup for memorable celebrations.",
      hi: "यादगार सेलिब्रेशन के लिए एक कम्प्लीट प्रीमियम सेटअप।",
    },
    features: [
      {
        en: "Premium theme backdrop",
        hi: "प्रीमियम थीम बैकड्रॉप",
      },
      {
        en: "Floral & balloon styling",
        hi: "फ्लोरल और बैलून स्टाइलिंग",
      },
      {
        en: "Stage decoration",
        hi: "स्टेज डेकोरेशन",
      },
      {
        en: "Photo corner",
        hi: "फोटो कॉर्नर",
      },
      {
        en: "Entrance decoration",
        hi: "एंट्रेंस डेकोरेशन",
      },
      {
        en: "Personalized elements",
        hi: "पर्सनलाइज्ड एलिमेंट्स",
      },
    ],
  },
  {
    name: {
      en: "Luxury Decor",
      hi: "लक्ज़री डेकोर",
    },
    price: "₹19,999",
    description: {
      en: "A complete luxury transformation for your special event.",
      hi: "आपके खास इवेंट के लिए एक कम्प्लीट लक्ज़री ट्रांसफॉर्मेशन।",
    },
    features: [
      {
        en: "Luxury event styling",
        hi: "लक्ज़री इवेंट स्टाइलिंग",
      },
      {
        en: "Premium floral decoration",
        hi: "प्रीमियम फ्लोरल डेकोरेशन",
      },
      {
        en: "Designer stage",
        hi: "डिज़ाइनर स्टेज",
      },
      {
        en: "Entrance & venue styling",
        hi: "एंट्रेंस और वेन्यू स्टाइलिंग",
      },
      {
        en: "Photo & selfie zone",
        hi: "फोटो और सेल्फी ज़ोन",
      },
      {
        en: "Complete decoration coordination",
        hi: "कम्प्लीट डेकोरेशन कोऑर्डिनेशन",
      },
    ],
  },
];

const decorationDetails: {
  title: Localized;
  text: Localized;
}[] = [
  {
    title: {
      en: "Backdrops",
      hi: "बैकड्रॉप्स",
    },
    text: {
      en: "Elegant stages & photo walls",
      hi: "एलिगेंट स्टेज और फोटो वॉल्स",
    },
  },
  {
    title: {
      en: "Flowers",
      hi: "फूल",
    },
    text: {
      en: "Fresh & premium floral styling",
      hi: "फ्रेश और प्रीमियम फ्लोरल स्टाइलिंग",
    },
  },
  {
    title: {
      en: "Lighting",
      hi: "लाइटिंग",
    },
    text: {
      en: "Warm & atmospheric lighting",
      hi: "वार्म और खूबसूरत एंबिएंट लाइटिंग",
    },
  },
  {
    title: {
      en: "Props",
      hi: "प्रॉप्स",
    },
    text: {
      en: "Custom event props & elements",
      hi: "कस्टम इवेंट प्रॉप्स और एलिमेंट्स",
    },
  },
];

const processSteps: {
  number: string;
  title: Localized;
  text: Localized;
}[] = [
  {
    number: "01",
    title: {
      en: "Tell Us Your Event",
      hi: "अपना इवेंट बताएं",
    },
    text: {
      en: "Share your date, venue, event type and decoration requirements.",
      hi: "अपनी तारीख, वेन्यू, इवेंट टाइप और डेकोरेशन की जरूरतें शेयर करें।",
    },
  },
  {
    number: "02",
    title: {
      en: "Choose Your Style",
      hi: "अपना स्टाइल चुनें",
    },
    text: {
      en: "Select your preferred theme, colors, flowers and decoration style.",
      hi: "अपनी पसंदीदा थीम, कलर्स, फूल और डेकोरेशन स्टाइल चुनें।",
    },
  },
  {
    number: "03",
    title: {
      en: "Get Your Plan",
      hi: "अपना प्लान पाएं",
    },
    text: {
      en: "Our team creates a decoration plan based on your requirements.",
      hi: "हमारी टीम आपकी जरूरतों के अनुसार डेकोरेशन प्लान तैयार करती है।",
    },
  },
  {
    number: "04",
    title: {
      en: "We Set Everything Up",
      hi: "हम सब कुछ सेट करते हैं",
    },
    text: {
      en: "Our decoration team arrives and transforms your space before the event.",
      hi: "हमारी डेकोरेशन टीम इवेंट से पहले पहुंचकर आपके स्पेस को खूबसूरत तरीके से तैयार करती है।",
    },
  },
];

const faqs: {
  question: Localized;
  answer: Localized;
}[] = [
  {
    question: {
      en: "What types of events do you decorate?",
      hi: "आप किन-किन इवेंट्स के लिए डेकोरेशन करते हैं?",
    },
    answer: {
      en: "We provide decoration for weddings, birthdays, anniversaries, baby showers, engagements, corporate events, home functions and other celebrations.",
      hi: "हम वेडिंग, बर्थडे, एनिवर्सरी, बेबी शॉवर, एंगेजमेंट, कॉर्पोरेट इवेंट्स, होम फंक्शन्स और अन्य सेलिब्रेशन के लिए डेकोरेशन प्रदान करते हैं।",
    },
  },
  {
    question: {
      en: "Can I choose my own decoration theme?",
      hi: "क्या मैं अपनी पसंद की डेकोरेशन थीम चुन सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes. You can share your preferred colors, flowers, reference images and theme ideas with our team.",
      hi: "हां। आप अपनी पसंद के कलर्स, फूल, रेफरेंस इमेज और थीम आइडिया हमारी टीम के साथ शेयर कर सकते हैं।",
    },
  },
  {
    question: {
      en: "Do you provide decoration for homes?",
      hi: "क्या आप घरों के लिए भी डेकोरेशन करते हैं?",
    },
    answer: {
      en: "Yes. Our team can decorate homes, apartments, terraces and other private spaces for celebrations.",
      hi: "हां। हमारी टीम सेलिब्रेशन के लिए घर, अपार्टमेंट, टैरेस और अन्य प्राइवेट स्पेस को डेकोरेट कर सकती है।",
    },
  },
  {
    question: {
      en: "How early should I book decoration?",
      hi: "मुझे डेकोरेशन कितने दिन पहले बुक करना चाहिए?",
    },
    answer: {
      en: "We recommend booking at least 7–15 days in advance for better planning and availability, especially for larger events.",
      hi: "बेहतर प्लानिंग और उपलब्धता के लिए कम से कम 7–15 दिन पहले बुकिंग करने की सलाह दी जाती है, खासकर बड़े इवेंट्स के लिए।",
    },
  },
  {
    question: {
      en: "Can you handle complete venue decoration?",
      hi: "क्या आप कम्प्लीट वेन्यू डेकोरेशन संभाल सकते हैं?",
    },
    answer: {
      en: "Yes. We can coordinate entrance, stage, dining area, photo zone and other decoration requirements.",
      hi: "हां। हम एंट्रेंस, स्टेज, डाइनिंग एरिया, फोटो ज़ोन और अन्य डेकोरेशन जरूरतों को कोऑर्डिनेट कर सकते हैं।",
    },
  },
];

export default function DecorationPage() {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const enquiryMessage = isHindi
    ? "नमस्ते OurHub, मैं Event Decoration सर्विस बुक करना चाहता/चाहती हूँ। कृपया डेकोरेशन पैकेज और पूरी जानकारी साझा करें।"
    : "Hello OurHub, I want to book Event Decoration services. Please share decoration packages and details.";

  const getPackageMessage = (
    pkg: (typeof packages)[number]
  ) => {
    if (isHindi) {
      return `नमस्ते OurHub, मुझे ${pkg.name.hi} Event Decoration Package (${pkg.price}) में रुचि है। कृपया इसकी पूरी जानकारी साझा करें।`;
    }

    return `Hello OurHub, I am interested in the ${pkg.name.en} Event Decoration package priced at ${pkg.price}. Please share complete details.`;
  };

  return (
    <main className="min-h-screen bg-[#05070B] pb-28 text-white">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#05070B]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[480px] items-center justify-between px-5">
          <Link
            href="/eventManagement"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            aria-label={isHindi ? "वापस जाएं" : "Go back"}
          >
            <ArrowLeft size={20} />
          </Link>

          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#DFAE45]">
              OurHub Events
            </p>

            <h1 className="mt-0.5 text-[15px] font-semibold">
              {isHindi ? "इवेंट डेकोरेशन" : "Event Decoration"}
            </h1>
          </div>

          <a
            href={whatsappLink(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-[#DFAE45]"
          >
            <MessageCircle size={19} />
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-[480px]">
        {/* ================= HERO ================= */}
        <section className="px-4 pt-4">
          <div className="relative min-h-[510px] overflow-hidden rounded-[30px] border border-[#DFAE45]/20 bg-[#0B0D11]">
            <img
              src="/images/events/decoration.jpg"
              alt={
                isHindi
                  ? "प्रीमियम इवेंट डेकोरेशन"
                  : "Premium Event Decoration"
              }
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#05070B]" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                <Sparkles
                  size={14}
                  className="text-[#DFAE45]"
                />

                <span className="text-[11px] font-semibold tracking-wide text-[#F5D98B]">
                  {isHindi
                    ? "प्रीमियम इवेंट डेकोरेशन"
                    : "PREMIUM EVENT DECORATION"}
                </span>
              </div>

              <h2 className="max-w-[390px] text-[39px] font-bold leading-[1.02] tracking-[-1.6px]">
                {isHindi ? (
                  <>
                    हर स्पेस को
                    <span className="block text-[#E7B94F]">
                      सेलिब्रेशन बनाएं।
                    </span>
                  </>
                ) : (
                  <>
                    Turn Every Space
                    <span className="block text-[#E7B94F]">
                      Into A Celebration.
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-4 max-w-[370px] text-[14px] leading-6 text-white/70">
                {isHindi
                  ? "प्रीमियम डेकोरेशन जो साधारण स्पेस को खूबसूरत और यादगार सेलिब्रेशन में बदल दे।"
                  : "Premium decoration designed to transform ordinary spaces into beautiful, memorable celebrations."}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] text-white/75">
                  ✦ {isHindi ? "कस्टम थीम्स" : "Custom Themes"}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] text-white/75">
                  ✦ {isHindi ? "प्रीमियम स्टाइलिंग" : "Premium Styling"}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] text-white/75">
                  ✦ {isHindi ? "कम्प्लीट सेटअप" : "Complete Setup"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST ================= */}
        <section className="px-5 pt-5">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]">
            <div className="border-r border-white/[0.07] px-2 py-4 text-center">
              <BadgeCheck
                size={19}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-2 text-[10px] font-medium text-white/65">
                {isHindi ? "भरोसेमंद टीम" : "Trusted Team"}
              </p>
            </div>

            <div className="border-r border-white/[0.07] px-2 py-4 text-center">
              <Sparkles
                size={19}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-2 text-[10px] font-medium text-white/65">
                {isHindi ? "प्रीमियम फिनिश" : "Premium Finish"}
              </p>
            </div>

            <div className="px-2 py-4 text-center">
              <Clock3
                size={19}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-2 text-[10px] font-medium text-white/65">
                {isHindi ? "समय पर सेटअप" : "On-time Setup"}
              </p>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {isHindi
              ? "आपके अवसर के अनुसार तैयार"
              : "Designed Around Your Occasion"}
          </p>

          <h3 className="mt-3 text-[29px] font-bold leading-tight tracking-[-0.8px]">
            {isHindi ? (
              <>
                खूबसूरत डिटेल्स।
                <br />
                <span className="text-white/45">
                  यादगार स्पेस।
                </span>
              </>
            ) : (
              <>
                Beautiful Details.
                <br />
                <span className="text-white/45">
                  Memorable Spaces.
                </span>
              </>
            )}
          </h3>

          <p className="mt-4 text-[14px] leading-7 text-white/60">
            {isHindi
              ? "सिंपल होम सेलिब्रेशन से लेकर ग्रैंड वेडिंग वेन्यू तक, OurHub आपके अवसर, स्टाइल और बजट के अनुसार डेकोरेशन एक्सपीरियंस तैयार करता है।"
              : "From a simple home celebration to a grand wedding venue, OurHub creates decoration experiences that match your occasion, style and budget."}
          </p>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {isHindi
              ? "हमारी डेकोरेशन सर्विसेज"
              : "Our Decoration Services"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {isHindi
              ? "आपके इवेंट के लिए सब कुछ"
              : "Everything Your Event Needs"}
          </h3>

          <div className="mt-6 space-y-3">
            {decorationServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title.en}
                  className="rounded-[22px] border border-white/[0.07] bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-4 transition-all duration-300 hover:border-[#DFAE45]/30"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                      <Icon
                        size={21}
                        className="text-[#DFAE45]"
                      />
                    </div>

                    <div>
                      <h4 className="text-[15px] font-semibold">
                        {service.title[language]}
                      </h4>

                      <p className="mt-1.5 text-[12px] leading-5 text-white/50">
                        {service.description[language]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= OCCASIONS ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {isHindi ? "इनके लिए परफेक्ट" : "Perfect For"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {isHindi ? "हर सेलिब्रेशन" : "Every Celebration"}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {decorationTypes.map((type) => (
              <span
                key={type.en}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-[11px] font-medium text-white/65"
              >
                {type[language]}
              </span>
            ))}
          </div>
        </section>

        {/* ================= CUSTOM THEME ================= */}
        <section className="px-5 pt-12">
          <div className="relative overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.025] to-transparent p-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DFAE45]/25 bg-[#DFAE45]/10">
                <Sparkles
                  size={21}
                  className="text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-5 text-[25px] font-bold leading-tight">
                {isHindi ? (
                  <>
                    आपकी थीम।
                    <br />
                    <span className="text-[#E7B94F]">
                      आपकी पहचान।
                    </span>
                  </>
                ) : (
                  <>
                    Your Theme.
                    <br />
                    <span className="text-[#E7B94F]">
                      Your Signature.
                    </span>
                  </>
                )}
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-white/55">
                {isHindi
                  ? "अपनी इंस्पिरेशन, पसंदीदा कलर्स, फोटोग्राफ्स या डेकोरेशन रेफरेंस हमारे साथ शेयर करें। हम आपके विज़न के अनुसार पूरा सेटअप तैयार करेंगे।"
                  : "Share your inspiration, favorite colors, photographs or decoration reference with us. We will build the setup around your vision."}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {customThemeItems.map((item) => (
                  <div
                    key={item.en}
                    className="rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3 text-[11px] text-white/65"
                  >
                    <span className="mr-2 text-[#DFAE45]">
                      ✦
                    </span>

                    {item[language]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PACKAGES ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {isHindi
              ? "डेकोरेशन पैकेज"
              : "Decoration Packages"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {isHindi ? "अपना स्टाइल चुनें" : "Choose Your Style"}
          </h3>

          <div className="mt-6 space-y-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name.en}
                className={`relative overflow-hidden rounded-[25px] border p-5 ${
                  pkg.popular
                    ? "border-[#DFAE45]/45 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.04] to-transparent"
                    : "border-white/[0.08] bg-white/[0.025]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#DFAE45] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-black">
                    {isHindi ? "सबसे लोकप्रिय" : "Most Popular"}
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-[18px] font-bold">
                      {pkg.name[language]}
                    </h4>

                    <p className="mt-1.5 max-w-[250px] text-[12px] leading-5 text-white/50">
                      {pkg.description[language]}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-[20px] font-bold text-[#E7B94F]">
                      {pkg.price}
                    </p>

                    <p className="text-[9px] text-white/35">
                      {isHindi ? "से शुरू" : "starting from"}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/[0.07] pt-4">
                  <div className="space-y-2.5">
                    {pkg.features.map((feature) => (
                      <div
                        key={feature.en}
                        className="flex items-center gap-2.5"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DFAE45]/10">
                          <Check
                            size={12}
                            className="text-[#DFAE45]"
                          />
                        </div>

                        <span className="text-[12px] text-white/65">
                          {feature[language]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsappLink(getPackageMessage(pkg))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[12px] font-semibold text-[#F0CC73]"
                >
                  {isHindi
                    ? "इस पैकेज के बारे में पूछें"
                    : "Enquire About This Package"}

                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= DECOR ELEMENTS ================= */}
        <section className="px-5 pt-12">
          <div className="rounded-[25px] border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Flower2
                  size={20}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  {isHindi
                    ? "डेकोरेशन डिटेल्स"
                    : "Decoration Details"}
                </p>

                <h4 className="mt-1 text-[16px] font-semibold">
                  {isHindi
                    ? "छोटी से छोटी डिटेल से तैयार"
                    : "Crafted From The Smallest Details"}
                </h4>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {decorationDetails.map((item) => (
                <div
                  key={item.title.en}
                  className="rounded-2xl border border-white/[0.06] bg-black/20 p-4"
                >
                  <Sparkles
                    size={17}
                    className="text-[#DFAE45]"
                  />

                  <p className="mt-3 text-[12px] font-semibold">
                    {item.title[language]}
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-white/40">
                    {item.text[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {isHindi ? "आसान प्रक्रिया" : "Simple Process"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {isHindi
              ? "आइडिया से फाइनल सेटअप तक"
              : "From Idea To Final Setup"}
          </h3>

          <div className="mt-6 space-y-3">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex gap-4 rounded-[20px] border border-white/[0.07] bg-white/[0.025] p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[11px] font-bold text-[#DFAE45]">
                  {step.number}
                </div>

                <div>
                  <h4 className="text-[14px] font-semibold">
                    {step.title[language]}
                  </h4>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    {step.text[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="px-5 pt-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
                {isHindi ? "इंस्पिरेशन" : "Inspiration"}
              </p>

              <h3 className="mt-2 text-[25px] font-bold">
                {isHindi
                  ? "हमारी डेकोरेशन स्टाइल"
                  : "Our Decoration Style"}
              </h3>
            </div>

            <Camera
              size={20}
              className="text-[#DFAE45]"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="relative col-span-2 h-[220px] overflow-hidden rounded-[23px] border border-white/[0.08]">
              <img
                src="/images/events/decoration-1.jpg"
                alt={
                  isHindi
                    ? "प्रीमियम इवेंट डेकोरेशन"
                    : "Premium event decoration"
                }
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-4 left-4 text-[11px] font-medium text-white/80">
                {isHindi
                  ? "प्रीमियम इवेंट स्टाइलिंग"
                  : "Premium Event Styling"}
              </span>
            </div>

            <div className="relative h-[155px] overflow-hidden rounded-[21px] border border-white/[0.08]">
              <img
                src="/images/events/decoration-2.jpg"
                alt={
                  isHindi
                    ? "फ्लोरल इवेंट डेकोरेशन"
                    : "Floral event decoration"
                }
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="relative h-[155px] overflow-hidden rounded-[21px] border border-white/[0.08]">
              <img
                src="/images/events/decoration-3.jpg"
                alt={
                  isHindi
                    ? "वेडिंग डेकोरेशन"
                    : "Wedding decoration"
                }
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIAL ================= */}
        <section className="px-5 pt-12">
          <div className="rounded-[25px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.045] p-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={15}
                  fill="currentColor"
                  className="text-[#DFAE45]"
                />
              ))}
            </div>

            <p className="mt-5 text-[17px] font-medium leading-7 text-white/80">
              {isHindi
                ? "“डेकोरेशन ने हमारे वेन्यू को पूरी तरह बदल दिया। सब कुछ बहुत एलिगेंट, साफ-सुथरा और बिल्कुल वैसा ही था जैसा हमने सोचा था।”"
                : "“The decoration completely transformed our venue. Everything looked elegant, clean and exactly like we imagined.”"}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFAE45]/10">
                <Users
                  size={17}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[12px] font-semibold">
                  {isHindi
                    ? "OurHub ग्राहक"
                    : "OurHub Customer"}
                </p>

                <p className="text-[10px] text-white/40">
                  {isHindi
                    ? "इवेंट डेकोरेशन"
                    : "Event Decoration"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LOCATION ================= */}
        <section className="px-5 pt-12">
          <div className="rounded-[23px] border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <MapPin
                  size={19}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  {isHindi
                    ? "सर्विस एरिया"
                    : "Service Areas"}
                </p>

                <h4 className="mt-1 text-[15px] font-semibold">
                  Ujjain • Ratlam • Indore
                </h4>

                <p className="mt-1 text-[11px] leading-5 text-white/45">
                  {isHindi
                    ? "आसपास के क्षेत्रों में भी इवेंट डेकोरेशन सर्विस उपलब्ध है।"
                    : "Event decoration services available in nearby areas as well."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {isHindi ? "सवाल" : "Questions"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {isHindi
              ? "अक्सर पूछे जाने वाले सवाल"
              : "Frequently Asked"}
          </h3>

          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question.en}
                className="group rounded-[19px] border border-white/[0.07] bg-white/[0.025]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-[12px] font-semibold">
                  <span>{faq.question[language]}</span>

                  <ChevronDown
                    size={16}
                    className="shrink-0 text-[#DFAE45] transition-transform group-open:rotate-180"
                  />
                </summary>

                <div className="border-t border-white/[0.06] px-4 pb-4 pt-3">
                  <p className="text-[11px] leading-5 text-white/45">
                    {faq.answer[language]}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="px-5 pb-8 pt-14">
          <div className="relative overflow-hidden rounded-[29px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-6 text-center">
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFAE45]/25 bg-[#DFAE45]/10">
                <PartyPopper
                  size={24}
                  className="text-[#DFAE45]"
                />
              </div>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
                {isHindi
                  ? "परफेक्ट सेटिंग बनाएं"
                  : "Create The Perfect Setting"}
              </p>

              <h3 className="mt-2 text-[28px] font-bold leading-tight">
                {isHindi ? (
                  <>
                    अपने खास दिन को
                    <br />
                    सजाएं
                  </>
                ) : (
                  <>
                    Decorate Your
                    <br />
                    Special Day
                  </>
                )}
              </h3>

              <p className="mx-auto mt-3 max-w-[320px] text-[12px] leading-5 text-white/50">
                {isHindi
                  ? "अपने इवेंट की डिटेल्स बताएं और OurHub को आपके सेलिब्रेशन के अनुसार खूबसूरत डेकोरेशन सेटअप तैयार करने दें।"
                  : "Tell us your event details and let OurHub create a beautiful decoration setup around your celebration."}
              </p>

              <a
                href={whatsappLink(enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 text-[13px] font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.18)]"
              >
                <MessageCircle size={18} />

                {isHindi
                  ? "डेकोरेशन बुक करें"
                  : "Book Decoration"}

                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="px-5 pb-10 text-center">
          <div className="mx-auto h-px w-16 bg-[#DFAE45]/30" />

          <p className="mt-5 text-[11px] font-semibold text-white/45">
            OurHub Services
          </p>

          <p className="mt-1 text-[10px] text-white/25">
            {isHindi
              ? "सभी सर्विसेज, एक हब"
              : "All Services, One Hub"}
          </p>
        </footer>
      </div>

      {/* ================= FIXED CTA ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.08] bg-[#05070B]/90 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[480px] gap-2">
          <a
            href={whatsappLink(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-[12px] font-semibold text-[#F0CC73]"
          >
            <MessageCircle size={17} />

            {isHindi ? "WhatsApp" : "WhatsApp"}
          </a>

          <a
            href={whatsappLink(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 flex-[1.6] items-center justify-center gap-2 rounded-xl bg-[#DFAE45] text-[12px] font-bold text-black"
          >
            {isHindi
              ? "डेकोरेशन प्लान करें"
              : "Plan Decoration"}

            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}