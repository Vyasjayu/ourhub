"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Camera,
  Check,
  ChevronRight,
  Clock3,
  Crown,
  Flower2,
  Gift,
  Heart,
  Headphones,
  MapPin,
  MessageCircle,
  Music,
  PartyPopper,
  Sparkles,
  Star,
  Users,
  Utensils,
} from "lucide-react";

type Localized = {
  en: string;
  hi: string;
};

type Service = {
  icon: typeof Flower2;
  title: Localized;
  text: Localized;
};

type Package = {
  title: Localized;
  price: string;
  subtitle: Localized;
  icon: typeof Heart;
  popular?: boolean;
  features: Localized[];
};

type Step = {
  number: string;
  title: Localized;
  text: Localized;
};

type FAQ = {
  q: Localized;
  a: Localized;
};

const whatsappNumber = "918878632431";

const services: Service[] = [
  {
    icon: Flower2,
    title: {
      en: "Elegant Decoration",
      hi: "एलिगेंट डेकोरेशन",
    },
    text: {
      en: "Beautiful floral arrangements, backdrops and personalized engagement decor.",
      hi: "खूबसूरत फ्लोरल अरेंजमेंट, बैकड्रॉप और पर्सनलाइज्ड एंगेजमेंट डेकोर।",
    },
  },
  {
    icon: Sparkles,
    title: {
      en: "Theme Styling",
      hi: "थीम स्टाइलिंग",
    },
    text: {
      en: "Choose a romantic, traditional or modern theme for your special day.",
      hi: "अपने खास दिन के लिए रोमांटिक, ट्रेडिशनल या मॉडर्न थीम चुनें।",
    },
  },
  {
    icon: Camera,
    title: {
      en: "Photography",
      hi: "फोटोग्राफी",
    },
    text: {
      en: "Professional photography to capture every smile and special moment.",
      hi: "हर मुस्कान और खास पल को कैप्चर करने के लिए प्रोफेशनल फोटोग्राफी।",
    },
  },
  {
    icon: Music,
    title: {
      en: "Music & Entertainment",
      hi: "म्यूजिक और एंटरटेनमेंट",
    },
    text: {
      en: "Music, DJ and entertainment arrangements for a memorable celebration.",
      hi: "यादगार सेलिब्रेशन के लिए म्यूजिक, DJ और एंटरटेनमेंट अरेंजमेंट।",
    },
  },
  {
    icon: Utensils,
    title: {
      en: "Catering",
      hi: "कैटरिंग",
    },
    text: {
      en: "Delicious food, snacks, beverages and complete catering coordination.",
      hi: "स्वादिष्ट खाना, स्नैक्स, बेवरेजेस और कम्प्लीट कैटरिंग कोऑर्डिनेशन।",
    },
  },
  {
    icon: Gift,
    title: {
      en: "Special Arrangements",
      hi: "स्पेशल अरेंजमेंट्स",
    },
    text: {
      en: "Couple entry, ring ceremony setup, surprises and personalized details.",
      hi: "कपल एंट्री, रिंग सेरेमनी सेटअप, सरप्राइज और पर्सनलाइज्ड डिटेल्स।",
    },
  },
];

const packages: Package[] = [
  {
    title: {
      en: "Classic",
      hi: "क्लासिक",
    },
    price: "₹9,999",
    subtitle: {
      en: "Elegant setup for an intimate engagement",
      hi: "इंटिमेट एंगेजमेंट के लिए एलिगेंट सेटअप",
    },
    icon: Heart,
    features: [
      {
        en: "Basic floral decoration",
        hi: "बेसिक फ्लोरल डेकोरेशन",
      },
      {
        en: "Engagement backdrop",
        hi: "एंगेजमेंट बैकड्रॉप",
      },
      {
        en: "Ring ceremony setup",
        hi: "रिंग सेरेमनी सेटअप",
      },
      {
        en: "Basic sound system",
        hi: "बेसिक साउंड सिस्टम",
      },
      {
        en: "Event coordination",
        hi: "इवेंट कोऑर्डिनेशन",
      },
    ],
  },
  {
    title: {
      en: "Royal",
      hi: "रॉयल",
    },
    price: "₹24,999",
    subtitle: {
      en: "Our most popular engagement package",
      hi: "हमारा सबसे लोकप्रिय एंगेजमेंट पैकेज",
    },
    icon: Crown,
    popular: true,
    features: [
      {
        en: "Premium floral decoration",
        hi: "प्रीमियम फ्लोरल डेकोरेशन",
      },
      {
        en: "Luxury stage & backdrop",
        hi: "लक्ज़री स्टेज और बैकड्रॉप",
      },
      {
        en: "Couple seating setup",
        hi: "कपल सीटिंग सेटअप",
      },
      {
        en: "Photography",
        hi: "फोटोग्राफी",
      },
      {
        en: "DJ & music setup",
        hi: "DJ और म्यूजिक सेटअप",
      },
      {
        en: "Guest coordination",
        hi: "गेस्ट कोऑर्डिनेशन",
      },
      {
        en: "Catering coordination",
        hi: "कैटरिंग कोऑर्डिनेशन",
      },
    ],
  },
  {
    title: {
      en: "Signature",
      hi: "सिग्नेचर",
    },
    price: "₹49,999",
    subtitle: {
      en: "A complete luxury engagement experience",
      hi: "एक कम्प्लीट लक्ज़री एंगेजमेंट एक्सपीरियंस",
    },
    icon: Sparkles,
    features: [
      {
        en: "Luxury theme decoration",
        hi: "लक्ज़री थीम डेकोरेशन",
      },
      {
        en: "Premium stage design",
        hi: "प्रीमियम स्टेज डिजाइन",
      },
      {
        en: "Professional photography",
        hi: "प्रोफेशनल फोटोग्राफी",
      },
      {
        en: "Cinematic video",
        hi: "सिनेमैटिक वीडियो",
      },
      {
        en: "DJ & entertainment",
        hi: "DJ और एंटरटेनमेंट",
      },
      {
        en: "Premium hospitality",
        hi: "प्रीमियम हॉस्पिटैलिटी",
      },
      {
        en: "Catering coordination",
        hi: "कैटरिंग कोऑर्डिनेशन",
      },
      {
        en: "Dedicated event manager",
        hi: "डेडिकेटेड इवेंट मैनेजर",
      },
    ],
  },
];

const steps: Step[] = [
  {
    number: "01",
    title: {
      en: "Share Your Vision",
      hi: "अपना विज़न बताएं",
    },
    text: {
      en: "Tell us your date, venue, guest count and preferred engagement style.",
      hi: "हमें अपनी तारीख, वेन्यू, गेस्ट की संख्या और पसंदीदा एंगेजमेंट स्टाइल बताएं।",
    },
  },
  {
    number: "02",
    title: {
      en: "Choose Your Style",
      hi: "अपनी स्टाइल चुनें",
    },
    text: {
      en: "Select a package or customize the celebration according to your needs.",
      hi: "एक पैकेज चुनें या अपनी जरूरत के अनुसार सेलिब्रेशन को कस्टमाइज करें।",
    },
  },
  {
    number: "03",
    title: {
      en: "We Plan Everything",
      hi: "हम सब कुछ प्लान करेंगे",
    },
    text: {
      en: "Our team coordinates decoration, vendors, entertainment and hospitality.",
      hi: "हमारी टीम डेकोरेशन, वेंडर्स, एंटरटेनमेंट और हॉस्पिटैलिटी कोऑर्डिनेट करती है।",
    },
  },
  {
    number: "04",
    title: {
      en: "Celebrate Together",
      hi: "मिलकर सेलिब्रेट करें",
    },
    text: {
      en: "Enjoy your special moment while our team takes care of the details.",
      hi: "अपने खास पल को एंजॉय करें और बाकी डिटेल्स हमारी टीम संभालेगी।",
    },
  },
];

const eventStyles: Localized[] = [
  {
    en: "Traditional Engagement",
    hi: "ट्रेडिशनल एंगेजमेंट",
  },
  {
    en: "Royal Engagement",
    hi: "रॉयल एंगेजमेंट",
  },
  {
    en: "Floral Theme",
    hi: "फ्लोरल थीम",
  },
  {
    en: "Modern Engagement",
    hi: "मॉडर्न एंगेजमेंट",
  },
  {
    en: "Garden Celebration",
    hi: "गार्डन सेलिब्रेशन",
  },
  {
    en: "Hotel Engagement",
    hi: "होटल एंगेजमेंट",
  },
  {
    en: "Ring Ceremony",
    hi: "रिंग सेरेमनी",
  },
  {
    en: "Family Celebration",
    hi: "फैमिली सेलिब्रेशन",
  },
];

const faqs: FAQ[] = [
  {
    q: {
      en: "Can I customize the engagement decoration?",
      hi: "क्या मैं एंगेजमेंट डेकोरेशन को कस्टमाइज कर सकता हूं?",
    },
    a: {
      en: "Yes. Theme, flowers, colors, stage design, seating and other decoration elements can be customized.",
      hi: "हां। थीम, फूल, कलर, स्टेज डिजाइन, सीटिंग और अन्य डेकोरेशन एलिमेंट्स को कस्टमाइज किया जा सकता है।",
    },
  },
  {
    q: {
      en: "Do you arrange photography and video?",
      hi: "क्या आप फोटोग्राफी और वीडियो की व्यवस्था करते हैं?",
    },
    a: {
      en: "Yes. Photography and cinematic video services can be included in your engagement package.",
      hi: "हां। फोटोग्राफी और सिनेमैटिक वीडियो सर्विस आपके एंगेजमेंट पैकेज में शामिल की जा सकती है।",
    },
  },
  {
    q: {
      en: "Can you arrange the venue?",
      hi: "क्या आप वेन्यू की व्यवस्था कर सकते हैं?",
    },
    a: {
      en: "Yes. We can help coordinate suitable hotels, banquet halls, gardens and other celebration venues.",
      hi: "हां। हम होटल, बैंक्वेट हॉल, गार्डन और अन्य सेलिब्रेशन वेन्यू कोऑर्डिनेट करने में मदद कर सकते हैं।",
    },
  },
  {
    q: {
      en: "Can catering be included?",
      hi: "क्या कैटरिंग शामिल की जा सकती है?",
    },
    a: {
      en: "Yes. Snacks, beverages, meals and complete catering coordination can be added according to your event.",
      hi: "हां। आपके इवेंट के अनुसार स्नैक्स, बेवरेजेस, मील्स और कम्प्लीट कैटरिंग कोऑर्डिनेशन जोड़ा जा सकता है।",
    },
  },
];

export default function EngagementPage() {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const t = (text: Localized) =>
    isHindi ? text.hi : text.en;

  const whatsappMessage = encodeURIComponent(
    isHindi
      ? `नमस्ते OurHub 👋

मैं Engagement Ceremony प्लान करना चाहता/चाहती हूं।

कृपया मुझे एंगेजमेंट पैकेज, कीमत और उपलब्ध सर्विसेज की जानकारी दें।`
      : `Hello OurHub 👋

I want to plan an Engagement Ceremony.

Please share engagement packages, pricing and available services.`
  );

  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#DFAE45]/10 blur-[120px]" />
        <div className="absolute -right-40 top-[42%] h-96 w-96 rounded-full bg-pink-500/10 blur-[130px]" />
        <div className="absolute left-[40%] top-[70%] h-72 w-72 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[480px] overflow-hidden">

        {/* HEADER */}
        <header className="absolute left-0 right-0 top-0 z-30 px-5 pt-5">
          <div className="flex items-center justify-between">

            <Link
              href="/eventManagement"
              aria-label={isHindi ? "वापस जाएं" : "Go back"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 backdrop-blur-xl"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="rounded-full border border-[#DFAE45]/30 bg-black/45 px-4 py-2 backdrop-blur-xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#E7B94F]">
                OURHUB EVENTS
              </span>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
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
        <section className="relative h-[660px] overflow-hidden">

          <img
            src="/images/events/engagement.jpg"
            alt={isHindi ? "एंगेजमेंट सेलिब्रेशन" : "Engagement ceremony celebration"}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-[#05070B]" />

          <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#05070B] via-[#05070B]/80 to-transparent" />

          <div className="absolute bottom-9 left-5 right-5">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/45 px-3 py-2 backdrop-blur-xl">

              <Heart
                size={14}
                className="text-[#E7B94F]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#E7B94F]">
                {isHindi
                  ? "एंगेजमेंट सेलिब्रेशन"
                  : "Engagement Celebrations"}
              </span>

            </div>

            <h1 className="max-w-[410px] text-[41px] font-bold leading-[0.98] tracking-[-0.045em]">
              {isHindi ? (
                <>
                  एक नई
                  <span className="block text-[#E7B94F]">
                    शुरुआत।
                  </span>
                </>
              ) : (
                <>
                  The Beginning
                  <span className="block text-[#E7B94F]">
                    Of Forever.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-4 max-w-[385px] text-[14px] leading-6 text-white/65">
              {isHindi
                ? "खूबसूरत डेकोर, फोटोग्राफी, म्यूजिक, हॉस्पिटैलिटी और हर छोटी डिटेल के साथ अपने एंगेजमेंट सेलिब्रेशन को खास बनाएं।"
                : "Create a beautiful engagement celebration with elegant decor, photography, music, hospitality and every little detail handled by OurHub."}
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.22)]"
              >
                {isHindi
                  ? "अपना एंगेजमेंट प्लान करें"
                  : "Plan Your Engagement"}

                <ArrowRight size={17} />
              </a>

              <a
                href="#packages"
                aria-label={isHindi ? "पैकेज देखें" : "View packages"}
                className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl"
              >
                <ChevronRight size={20} />
              </a>

            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="px-5 pt-3">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">

            <div className="border-r border-white/10 px-2 py-4 text-center">
              <BadgeCheck
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />

              <p className="text-[10px] font-semibold">
                {isHindi ? "भरोसेमंद टीम" : "Trusted Team"}
              </p>
            </div>

            <div className="border-r border-white/10 px-2 py-4 text-center">
              <Sparkles
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />

              <p className="text-[10px] font-semibold">
                {isHindi ? "प्रीमियम डेकोर" : "Premium Decor"}
              </p>
            </div>

            <div className="px-2 py-4 text-center">
              <Clock3
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />

              <p className="text-[10px] font-semibold">
                {isHindi ? "स्मूद एग्जीक्यूशन" : "Smooth Execution"}
              </p>
            </div>

          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 pt-14">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
            {isHindi ? "आपका खास पल" : "Your Special Moment"}
          </p>

          <h2 className="mt-3 text-[29px] font-bold leading-tight">
            {isHindi ? (
              <>
                सिर्फ एक रस्म नहीं।
                <br />
                <span className="text-white/40">
                  हमेशा साथ रखने वाली याद।
                </span>
              </>
            ) : (
              <>
                More than a ceremony.
                <br />
                <span className="text-white/40">
                  A memory to keep forever.
                </span>
              </>
            )}
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-white/50">
            {isHindi
              ? "आपका एंगेजमेंट आपके साथ के सफर का एक खास पड़ाव है। हम खूबसूरत स्टाइलिंग, सोच-समझकर की गई डिटेल्स और सीमलेस कोऑर्डिनेशन के साथ इसे यादगार बनाने में मदद करते हैं।"
              : "Your engagement is one of the most meaningful milestones in your journey together. We bring together beautiful styling, thoughtful details and seamless coordination to make it truly special."}
          </p>

        </section>

        {/* SERVICES */}
        <section className="px-5 pt-12">

          <div className="mb-5">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
              {isHindi ? "हम क्या अरेंज करते हैं" : "What We Arrange"}
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {isHindi
                ? "आपके दिन के लिए सब कुछ"
                : "Everything For Your Day"}
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
                    {t(service.title)}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-white/40">
                    {t(service.text)}
                  </p>

                </div>
              );
            })}

          </div>
        </section>

        {/* STYLES */}
        <section className="px-5 pt-16">

          <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">

                <Flower2
                  size={21}
                  className="text-[#E7B94F]"
                />

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.16em] text-[#E7B94F]">
                  {isHindi ? "अपनी स्टाइल चुनें" : "Choose Your Style"}
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  {isHindi
                    ? "आपका सेलिब्रेशन, आपकी स्टाइल"
                    : "Your Celebration, Your Way"}
                </h2>

              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">

              {eventStyles.map((style) => (
                <span
                  key={style.en}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] text-white/60"
                >
                  {t(style)}
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
                ? "एंगेजमेंट पैकेज"
                : "Engagement Packages"}
            </p>

            <h2 className="mt-2 text-[29px] font-bold">
              {isHindi
                ? "अपना सेलिब्रेशन चुनें"
                : "Choose Your Celebration"}
            </h2>

            <p className="mt-2 text-sm leading-5 text-white/40">
              {isHindi
                ? "लचीले पैकेज और अपने खास दिन को कस्टमाइज करने की पूरी आज़ादी।"
                : "Flexible packages with the freedom to customize your special day."}
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
                      {isHindi ? "सबसे लोकप्रिय" : "Most Popular"}
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
                        {t(pkg.title)}
                      </h3>

                      <p className="mt-1 max-w-[230px] text-xs leading-5 text-white/40">
                        {t(pkg.subtitle)}
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

                        {t(feature)}

                      </div>
                    ))}

                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      isHindi
                        ? `नमस्ते OurHub 👋

मैं ${t(pkg.title)} Engagement Package (${pkg.price}) में interested हूं।

कृपया इस पैकेज की पूरी जानकारी शेयर करें।`
                        : `Hello OurHub 👋

I am interested in the ${t(pkg.title)} Engagement Package (${pkg.price}).

Please share complete details.`
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
                      ? "पैकेज के बारे में बात करें"
                      : "Discuss Package"}

                    <ArrowRight size={16} />

                  </a>

                </div>
              );
            })}

          </div>
        </section>

        {/* COUPLE EXPERIENCE */}
        <section className="px-5 pt-16">

          <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.025] to-transparent p-6">

            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative">

              <div className="flex items-center gap-2 text-[#E7B94F]">

                <Heart size={17} />

                <span className="text-xs font-bold uppercase tracking-[0.15em]">
                  {isHindi
                    ? "OurHub का खास टच"
                    : "The OurHub Touch"}
                </span>

              </div>

              <h2 className="mt-4 text-[25px] font-bold leading-tight">
                {isHindi ? (
                  <>
                    आप पल को एंजॉय करें।
                    <br />
                    <span className="text-[#E7B94F]">
                      डिटेल्स हम संभालेंगे।
                    </span>
                  </>
                ) : (
                  <>
                    You enjoy the moment.
                    <br />
                    <span className="text-[#E7B94F]">
                      We handle the details.
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/45">
                {isHindi
                  ? "पहले सेटअप से लेकर आखिरी गेस्ट के जाने तक, हमारी टीम जरूरी डिटेल्स कोऑर्डिनेट करती है ताकि आप अपने परिवार और अपनों के साथ पूरी तरह मौजूद रह सकें।"
                  : "From the first setup to the final guest departure, our team coordinates the important details so you can stay present with your family and loved ones."}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">

                <div className="rounded-2xl bg-black/25 p-4">

                  <Users
                    size={19}
                    className="text-[#E7B94F]"
                  />

                  <p className="mt-3 text-sm font-bold">
                    {isHindi
                      ? "गेस्ट एक्सपीरियंस"
                      : "Guest Experience"}
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/35">
                    {isHindi
                      ? "स्मूद हॉस्पिटैलिटी"
                      : "Smooth hospitality"}
                  </p>

                </div>

                <div className="rounded-2xl bg-black/25 p-4">

                  <Heart
                    size={19}
                    className="text-[#E7B94F]"
                  />

                  <p className="mt-3 text-sm font-bold">
                    {isHindi
                      ? "पर्सनल टच"
                      : "Personal Touch"}
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/35">
                    {isHindi
                      ? "आपके अनुसार बनाया गया"
                      : "Made around you"}
                  </p>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 pt-16">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
            {isHindi ? "आसान प्रक्रिया" : "Simple Process"}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {isHindi
              ? "आइडिया से सेलिब्रेशन तक"
              : "From Idea to Celebration"}
          </h2>

          <div className="mt-7 space-y-5">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-4"
              >

                <div className="relative flex w-11 shrink-0 justify-center">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-xs font-bold text-[#E7B94F]">
                    {step.number}
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="absolute top-11 h-9 w-px bg-white/10" />
                  )}

                </div>

                <div className="pb-2">

                  <h3 className="text-sm font-bold">
                    {t(step.title)}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    {t(step.text)}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* ENTERTAINMENT */}
        <section className="px-5 pt-16">

          <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">

            <div className="flex items-center gap-2 text-[#E7B94F]">

              <Music size={18} />

              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                {isHindi
                  ? "इसे यादगार बनाएं"
                  : "Make It Memorable"}
              </span>

            </div>

            <h2 className="mt-4 text-2xl font-bold leading-tight">
              {isHindi ? (
                <>
                  ज्यादा मुस्कान।
                  <br />
                  <span className="text-white/40">
                    ज्यादा यादगार पल।
                  </span>
                </>
              ) : (
                <>
                  More smiles.
                  <br />
                  <span className="text-white/40">
                    More unforgettable moments.
                  </span>
                </>
              )}
            </h2>

            <div className="mt-6 space-y-3">

              {/* Music */}
              <div className="flex items-center gap-3 rounded-2xl bg-black/20 p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">

                  <Music
                    size={18}
                    className="text-[#E7B94F]"
                  />

                </div>

                <div>

                  <p className="text-sm font-bold">
                    {isHindi ? "म्यूजिक और DJ" : "Music & DJ"}
                  </p>

                  <p className="mt-1 text-[11px] text-white/35">
                    {isHindi
                      ? "परफेक्ट सेलिब्रेशन माहौल बनाएं"
                      : "Create the perfect celebration atmosphere"}
                  </p>

                </div>

              </div>

              {/* Couple Entry */}
              <div className="flex items-center gap-3 rounded-2xl bg-black/20 p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">

                  <PartyPopper
                    size={18}
                    className="text-[#E7B94F]"
                  />

                </div>

                <div>

                  <p className="text-sm font-bold">
                    {isHindi ? "कपल एंट्री" : "Couple Entry"}
                  </p>

                  <p className="mt-1 text-[11px] text-white/35">
                    {isHindi
                      ? "कपल के लिए खूबसूरत एंट्री प्लान करें"
                      : "Plan a beautiful entrance for the couple"}
                  </p>

                </div>

              </div>

              {/* Photo */}
              <div className="flex items-center gap-3 rounded-2xl bg-black/20 p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">

                  <Camera
                    size={18}
                    className="text-[#E7B94F]"
                  />

                </div>

                <div>

                  <p className="text-sm font-bold">
                    {isHindi
                      ? "फोटो मोमेंट्स"
                      : "Photo Moments"}
                  </p>

                  <p className="mt-1 text-[11px] text-white/35">
                    {isHindi
                      ? "खूबसूरत यादों को नेचुरली कैप्चर करें"
                      : "Beautiful memories captured naturally"}
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
                {isHindi ? "इंस्पिरेशन" : "Inspiration"}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {isHindi
                  ? "एंगेजमेंट मोमेंट्स"
                  : "Engagement Moments"}
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
                src="/images/events/engagement.jpg"
                alt={isHindi ? "एंगेजमेंट डेकोरेशन" : "Engagement decoration"}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                {isHindi
                  ? "एलिगेंट डेकोर"
                  : "Elegant Decor"}
              </span>

            </div>

            <div className="relative h-52 overflow-hidden rounded-[22px]">

              <img
                src="/images/events/engagement.jpg"
                alt={isHindi ? "एंगेजमेंट सेरेमनी" : "Engagement ceremony"}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                {isHindi
                  ? "खास पल"
                  : "Special Moments"}
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
                ? "“डेकोरेशन बहुत खूबसूरत था और पूरा इवेंट बहुत स्मूद रहा। हम अपने परिवार के साथ अपनी एंगेजमेंट को सच में एंजॉय कर पाए।”"
                : "“The decoration looked beautiful and the whole event felt so smooth. We could actually enjoy our engagement with our family.”"}
            </p>

            <div className="mt-5 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFAE45]/10">

                <Heart
                  size={17}
                  className="text-[#E7B94F]"
                />

              </div>

              <div>

                <p className="text-sm font-bold">
                  {isHindi ? "OurHub कपल" : "OurHub Couple"}
                </p>

                <p className="text-xs text-white/40">
                  {isHindi
                    ? "एंगेजमेंट सेलिब्रेशन"
                    : "Engagement Celebration"}
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
                  ? "एंगेजमेंट इवेंट मैनेजमेंट"
                  : "Engagement Event Management"}
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
            FAQ
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

                  {t(faq.q)}

                  <ChevronRight
                    size={17}
                    className="shrink-0 transition group-open:rotate-90"
                  />

                </summary>

                <p className="px-4 pb-4 text-xs leading-5 text-white/40">
                  {t(faq.a)}
                </p>

              </details>
            ))}

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-32 pt-16">

          <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-7 text-center">

            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DFAE45]/15">

                <Heart
                  size={25}
                  className="text-[#E7B94F]"
                />

              </div>

              <h2 className="mt-5 text-2xl font-black">
                {isHindi
                  ? "हमेशा की शुरुआत के लिए तैयार?"
                  : "Ready to Begin Forever?"}
              </h2>

              <p className="mx-auto mt-3 max-w-[315px] text-sm leading-6 text-white/45">
                {isHindi
                  ? "अपने एंगेजमेंट प्लान हमारे साथ शेयर करें और हमारी टीम को ऐसा सेलिब्रेशन बनाने दें जो पूरी तरह आपका लगे।"
                  : "Share your engagement plans and let our team help create a celebration that feels truly yours."}
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-4 text-sm font-black text-black"
              >

                <MessageCircle size={18} />

                {isHindi
                  ? "अपना एंगेजमेंट प्लान करें"
                  : "Plan Your Engagement"}

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
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-sm font-black text-black"
          >

            {isHindi
              ? "एंगेजमेंट प्लान करें"
              : "Plan Engagement"}

            <ArrowRight size={17} />

          </a>

        </div>

      </div>
    </main>
  );
}