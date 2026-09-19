"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  Crown,
  Gem,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  Phone,
  ShieldCheck,
  Sparkles,
  Utensils,
  Users,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
   TYPES
========================================================= */

type LocalizedText = {
  en: string;
  hi: string;
};

/* =========================================================
   WEDDING SERVICES
========================================================= */

const weddingServices = [
  {
    title: {
      en: "Wedding Event",
      hi: "वेडिंग इवेंट",
    },
    image: "/images/events/wedding.jpg",
    description: {
      en: "Complete wedding planning & management.",
      hi: "कम्प्लीट वेडिंग प्लानिंग और मैनेजमेंट।",
    },
    icon: Heart,
  },
  {
    title: {
      en: "Shaadi Ceremony",
      hi: "शादी समारोह",
    },
    image: "/images/events/shaadi.jpg",
    description: {
      en: "Traditional wedding arrangements & rituals.",
      hi: "पारंपरिक शादी की व्यवस्थाएं और रस्में।",
    },
    icon: Crown,
  },
  {
    title: {
      en: "Mehndi Ceremony",
      hi: "मेहंदी समारोह",
    },
    image: "/images/events/mehndi.jpg",
    description: {
      en: "Beautiful mehndi themes, decor & entertainment.",
      hi: "खूबसूरत मेहंदी थीम, डेकोर और एंटरटेनमेंट।",
    },
    icon: Sparkles,
  },
  {
    title: {
      en: "Haldi Ceremony",
      hi: "हल्दी समारोह",
    },
    image: "/images/events/haldi.jpg",
    description: {
      en: "Colourful haldi setup & celebration.",
      hi: "कलरफुल हल्दी सेटअप और सेलिब्रेशन।",
    },
    icon: Sparkles,
  },
  {
    title: {
      en: "Sangeet Night",
      hi: "संगीत नाइट",
    },
    image: "/images/events/sangeet.jpg",
    description: {
      en: "Dance, music, stage & unforgettable moments.",
      hi: "डांस, म्यूजिक, स्टेज और यादगार पल।",
    },
    icon: Music,
  },
  {
    title: {
      en: "Baraat & Groom Entry",
      hi: "बारात और ग्रूम एंट्री",
    },
    image: "/images/events/baraat.jpg",
    description: {
      en: "DJ, dhol, baraat & grand groom entry.",
      hi: "डीजे, ढोल, बारात और ग्रैंड ग्रूम एंट्री।",
    },
    icon: Crown,
  },
  {
    title: {
      en: "Bridal Entry",
      hi: "ब्राइडल एंट्री",
    },
    image: "/images/events/bridal-entry.jpg",
    description: {
      en: "Royal bridal entry with special effects.",
      hi: "स्पेशल इफेक्ट्स के साथ रॉयल ब्राइडल एंट्री।",
    },
    icon: Gem,
  },
  {
    title: {
      en: "Reception",
      hi: "रिसेप्शन",
    },
    image: "/images/events/reception.jpg",
    description: {
      en: "Elegant reception, stage & hospitality.",
      hi: "एलिगेंट रिसेप्शन, स्टेज और हॉस्पिटैलिटी।",
    },
    icon: Crown,
  },
];

/* =========================================================
   WEDDING ESSENTIALS
========================================================= */

const weddingEssentials = [
  {
    title: {
      en: "Wedding Decoration",
      hi: "वेडिंग डेकोरेशन",
    },
    description: {
      en: "Stage, floral, entrance, mandap & theme decor.",
      hi: "स्टेज, फ्लोरल, एंट्रेंस, मंडप और थीम डेकोर।",
    },
    icon: Sparkles,
    href: "/eventManagement/decoration",
  },
  {
    title: {
      en: "Catering",
      hi: "कैटरिंग",
    },
    description: {
      en: "Menus, live counters, snacks & complete food service.",
      hi: "मेन्यू, लाइव काउंटर, स्नैक्स और कम्प्लीट फूड सर्विस।",
    },
    icon: Utensils,
    href: "/eventManagement/catering",
  },
  {
    title: {
      en: "Photography",
      hi: "फोटोग्राफी",
    },
    description: {
      en: "Wedding photography & cinematic videography.",
      hi: "वेडिंग फोटोग्राफी और सिनेमैटिक वीडियोग्राफी।",
    },
    icon: Camera,
    href: "/eventManagement/wedding-event",
  },
  {
    title: {
      en: "DJ & Entertainment",
      hi: "डीजे और एंटरटेनमेंट",
    },
    description: {
      en: "DJ, music, dance floor & celebration entertainment.",
      hi: "डीजे, म्यूजिक, डांस फ्लोर और सेलिब्रेशन एंटरटेनमेंट।",
    },
    icon: Music,
    href: "/eventManagement/wedding-event",
  },
  {
    title: {
      en: "Makeup & Styling",
      hi: "मेकअप और स्टाइलिंग",
    },
    description: {
      en: "Bridal makeup, groom styling & complete looks.",
      hi: "ब्राइडल मेकअप, ग्रूम स्टाइलिंग और कम्प्लीट लुक्स।",
    },
    icon: Gem,
    href: "/eventManagement/wedding-event",
  },
  {
    title: {
      en: "Guest Management",
      hi: "गेस्ट मैनेजमेंट",
    },
    description: {
      en: "Hospitality, coordination & guest assistance.",
      hi: "हॉस्पिटैलिटी, कोऑर्डिनेशन और गेस्ट असिस्टेंस।",
    },
    icon: Users,
    href: "/eventManagement/wedding-event",
  },
];

/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    icon: BadgeCheck,
    title: {
      en: "Verified Professionals",
      hi: "वेरिफाइड प्रोफेशनल्स",
    },
    text: {
      en: "Trusted wedding service partners",
      hi: "भरोसेमंद वेडिंग सर्विस पार्टनर्स",
    },
  },
  {
    icon: ShieldCheck,
    title: {
      en: "Premium Quality",
      hi: "प्रीमियम क्वालिटी",
    },
    text: {
      en: "Quality-focused wedding services",
      hi: "क्वालिटी-फोकस्ड वेडिंग सर्विसेज",
    },
  },
  {
    icon: CalendarDays,
    title: {
      en: "Complete Planning",
      hi: "कम्प्लीट प्लानिंग",
    },
    text: {
      en: "From ceremony to reception",
      hi: "सेरेमनी से रिसेप्शन तक",
    },
  },
  {
    icon: MessageCircle,
    title: {
      en: "Expert Support",
      hi: "एक्सपर्ट सपोर्ट",
    },
    text: {
      en: "Personal assistance for your event",
      hi: "आपके इवेंट के लिए पर्सनल असिस्टेंस",
    },
  },
];

/* =========================================================
   PACKAGES
========================================================= */

const packages = [
  {
    name: {
      en: "Essential",
      hi: "एसेंशियल",
    },
    price: "₹24,999",
    description: {
      en: "For simple & elegant celebrations",
      hi: "सिंपल और एलिगेंट सेलिब्रेशन के लिए",
    },
    features: [
      {
        en: "Basic Wedding Planning",
        hi: "बेसिक वेडिंग प्लानिंग",
      },
      {
        en: "Decoration Coordination",
        hi: "डेकोरेशन कोऑर्डिनेशन",
      },
      {
        en: "Vendor Coordination",
        hi: "वेंडर कोऑर्डिनेशन",
      },
      {
        en: "Event Day Support",
        hi: "इवेंट डे सपोर्ट",
      },
    ],
  },
  {
    name: {
      en: "Premium",
      hi: "प्रीमियम",
    },
    price: "₹49,999",
    description: {
      en: "For a complete wedding experience",
      hi: "कम्प्लीट वेडिंग एक्सपीरियंस के लिए",
    },
    popular: true,
    features: [
      {
        en: "Complete Wedding Planning",
        hi: "कम्प्लीट वेडिंग प्लानिंग",
      },
      {
        en: "Premium Decoration",
        hi: "प्रीमियम डेकोरेशन",
      },
      {
        en: "Catering Coordination",
        hi: "कैटरिंग कोऑर्डिनेशन",
      },
      {
        en: "Photography Coordination",
        hi: "फोटोग्राफी कोऑर्डिनेशन",
      },
      {
        en: "Guest Management",
        hi: "गेस्ट मैनेजमेंट",
      },
    ],
  },
  {
    name: {
      en: "Royal",
      hi: "रॉयल",
    },
    price: "₹99,999+",
    description: {
      en: "For grand & luxury weddings",
      hi: "ग्रैंड और लग्ज़री वेडिंग के लिए",
    },
    features: [
      {
        en: "Full Wedding Management",
        hi: "फुल वेडिंग मैनेजमेंट",
      },
      {
        en: "Luxury Decoration",
        hi: "लक्ज़री डेकोरेशन",
      },
      {
        en: "Premium Entertainment",
        hi: "प्रीमियम एंटरटेनमेंट",
      },
      {
        en: "Complete Hospitality",
        hi: "कम्प्लीट हॉस्पिटैलिटी",
      },
      {
        en: "Dedicated Event Support",
        hi: "डेडिकेटेड इवेंट सपोर्ट",
      },
    ],
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
  language,
}: {
  service: (typeof weddingServices)[number];
  language: "en" | "hi";
}) {
  const Icon = service.icon;

  return (
    <div className="group overflow-hidden rounded-[20px] border border-[#DFAE45]/15 bg-[#0A111D] transition-all duration-300 active:scale-[0.97] hover:border-[#DFAE45]/40">

      {/* IMAGE */}
      <div className="relative h-[130px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title[language]}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A111D] via-black/10 to-transparent" />

        <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full border border-[#DFAE45]/30 bg-black/60 px-2 py-1 backdrop-blur-md">
          <Sparkles
            size={9}
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
            <h3 className="truncate text-[13px] font-bold text-white">
              {service.title[language]}
            </h3>

            <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-gray-500">
              {service.description[language]}
            </p>
          </div>

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
            <Icon size={15} />
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-[#DFAE45]">
          {language === "hi"
            ? "सर्विस देखें"
            : "Explore Service"}

          <ChevronRight
            size={13}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ESSENTIAL CARD
========================================================= */

function EssentialCard({
  item,
  language,
}: {
  item: (typeof weddingEssentials)[number];
  language: "en" | "hi";
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="group"
    >
      <div className="flex min-h-[105px] flex-col rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-4 transition hover:border-[#DFAE45]/25">

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
          {item.description[language]}
        </p>

      </div>
    </Link>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function WeddingPlanningPage() {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  /* =======================================================
     WHATSAPP
  ======================================================= */

  const whatsappNumber = "918878632431";

  const whatsappMessage = useMemo(() => {
    if (isHindi) {
      return encodeURIComponent(
        "नमस्ते OurHub 👋\n\n" +
          "मैं अपनी शादी प्लान करना चाहता/चाहती हूँ।\n\n" +
          "कृपया मुझे वेडिंग पैकेज, सर्विसेज और उपलब्धता की जानकारी शेयर करें।\n\n" +
          "लोकेशन: उज्जैन / रतलाम / इंदौर\n\n" +
          "धन्यवाद।"
      );
    }

    return encodeURIComponent(
      "Hello OurHub 👋\n\n" +
        "I want to plan my wedding.\n\n" +
        "Please share wedding packages, services and availability.\n\n" +
        "Location: Ujjain / Ratlam / Indore\n\n" +
        "Thank you."
    );
  }, [isHindi]);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  /* =======================================================
     WEDDING JOURNEY
  ======================================================= */

  const journeySteps: LocalizedText[] = [
    {
      en: "Plan",
      hi: "प्लान",
    },
    {
      en: "Design",
      hi: "डिजाइन",
    },
    {
      en: "Celebrate",
      hi: "सेलिब्रेट",
    },
    {
      en: "Remember",
      hi: "यादगार",
    },
  ];

  /* =======================================================
     HOW IT WORKS
  ======================================================= */

  const howItWorks = [
    {
      number: "01",
      title: {
        en: "Tell Us Your Wedding Plan",
        hi: "अपना वेडिंग प्लान बताएं",
      },
      text: {
        en: "Share your wedding date, location and requirements.",
        hi: "अपनी शादी की तारीख, लोकेशन और जरूरतें शेयर करें।",
      },
    },
    {
      number: "02",
      title: {
        en: "Choose Your Services",
        hi: "अपनी सर्विसेज चुनें",
      },
      text: {
        en: "Select ceremonies, decoration, catering and other services.",
        hi: "सेरेमनी, डेकोरेशन, कैटरिंग और अन्य सर्विसेज चुनें।",
      },
    },
    {
      number: "03",
      title: {
        en: "Get Your Plan",
        hi: "अपना प्लान पाएं",
      },
      text: {
        en: "Our team helps create a suitable wedding plan.",
        hi: "हमारी टीम आपके लिए एक उपयुक्त वेडिंग प्लान तैयार करने में मदद करती है।",
      },
    },
    {
      number: "04",
      title: {
        en: "Celebrate Your Big Day",
        hi: "अपना खास दिन सेलिब्रेट करें",
      },
      text: {
        en: "Enjoy your wedding while our team manages the details.",
        hi: "अपनी शादी का आनंद लें, बाकी डिटेल्स हमारी टीम संभालेगी।",
      },
    },
  ];

  /* =======================================================
     QUICK INFO
  ======================================================= */

  const quickInfo = [
    {
      icon: Heart,
      title: {
        en: "Complete",
        hi: "कम्प्लीट",
      },
      subtitle: {
        en: "Wedding",
        hi: "वेडिंग",
      },
    },
    {
      icon: CalendarDays,
      title: {
        en: "Flexible",
        hi: "फ्लेक्सिबल",
      },
      subtitle: {
        en: "Planning",
        hi: "प्लानिंग",
      },
    },
    {
      icon: MapPin,
      title: {
        en: "Local",
        hi: "लोकल",
      },
      subtitle: {
        en: "Experts",
        hi: "एक्सपर्ट्स",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-[#050B14] text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050B14]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-[430px] items-center gap-3 px-4 py-3.5">

          <Link
            href="/eventManagement"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition active:scale-95"
            aria-label={isHindi ? "वापस जाएं" : "Go back"}
          >
            <ArrowLeft size={19} />
          </Link>

          <div className="min-w-0 flex-1">

            <h1 className="truncate text-[17px] font-bold">
              {isHindi
                ? "वेडिंग और शादी"
                : "Wedding & Shaadi"}
            </h1>

            <div className="mt-0.5 flex items-center gap-1 text-[10px] text-gray-400">

              <MapPin
                size={11}
                className="text-[#DFAE45]"
              />

              <span>
                Ujjain • Ratlam • Indore
              </span>

            </div>

          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">

            <Heart
              size={18}
              className="text-[#DFAE45]"
            />

          </div>

        </div>

      </header>

      <div className="mx-auto max-w-[430px] px-4 pb-32">

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="relative mt-4 overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-[#0A101B]">

          <img
            src="/images/events/wedding.jpg"
            alt={
              isHindi
                ? "वेडिंग प्लानिंग"
                : "Wedding Planning"
            }
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/20 via-[#050B14]/70 to-[#050B14]" />

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#DFAE45]/15 blur-3xl" />

          <div className="relative px-5 pb-6 pt-7">

            {/* BADGE */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 px-3 py-1.5">

              <Sparkles
                size={12}
                className="text-[#DFAE45]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#F3D27A]">
                {isHindi
                  ? "कम्प्लीट वेडिंग प्लानिंग"
                  : "Complete Wedding Planning"}
              </span>

            </div>

            {/* TITLE */}

            <h2 className="mt-5 text-[30px] font-extrabold leading-[1.08] tracking-tight">

              {isHindi ? (
                <>
                  आपकी ड्रीम
                  <br />
                  <span className="text-[#DFAE45]">
                    वेडिंग यहां से शुरू
                  </span>
                </>
              ) : (
                <>
                  Your Dream
                  <br />
                  <span className="text-[#DFAE45]">
                    Wedding Starts Here
                  </span>
                </>
              )}

            </h2>

            <p className="mt-3 max-w-[340px] text-[12px] leading-6 text-gray-300">

              {isHindi
                ? "मेहंदी और हल्दी से लेकर संगीत, बारात, ब्राइडल एंट्री और रिसेप्शन तक — OurHub के साथ अपनी पूरी वेडिंग प्लान करें।"
                : "From Mehndi and Haldi to Sangeet, Baraat, Bridal Entry and Reception — plan your complete wedding with OurHub."}

            </p>

            {/* BUTTONS */}

            <div className="mt-6 grid grid-cols-2 gap-2.5">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-[12px] font-bold text-black shadow-[0_8px_30px_rgba(223,174,69,0.16)] transition active:scale-[0.98]"
              >
                <MessageCircle size={16} />

                {isHindi
                  ? "मेरी वेडिंग प्लान करें"
                  : "Plan My Wedding"}
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] py-3.5 text-[12px] font-bold text-white transition active:scale-[0.98]"
              >
                <Phone
                  size={16}
                  className="text-[#DFAE45]"
                />

                {isHindi
                  ? "एक्सपर्ट से बात करें"
                  : "Talk to Expert"}
              </a>

            </div>

            {/* TRUST */}

            <div className="mt-4 flex items-center gap-2 text-[9px] text-gray-400">

              <ShieldCheck
                size={14}
                className="text-[#DFAE45]"
              />

              <span>
                {isHindi
                  ? "भरोसेमंद प्रोफेशनल्स • कम्प्लीट वेडिंग सपोर्ट"
                  : "Trusted professionals • Complete wedding support"}
              </span>

            </div>

          </div>

        </section>

        {/* ===================================================
            QUICK INFO
        =================================================== */}

        <section className="mt-4 grid grid-cols-3 gap-2.5">

          {quickInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title.en}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-2 py-3 text-center"
              >

                <Icon
                  size={17}
                  className="mx-auto text-[#DFAE45]"
                />

                <p className="mt-1.5 text-[10px] font-semibold">
                  {item.title[language]}
                </p>

                <p className="text-[9px] text-gray-500">
                  {item.subtitle[language]}
                </p>

              </div>
            );
          })}

        </section>

        {/* ===================================================
            WEDDING SERVICES
        =================================================== */}

        <section className="mt-9">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
            {isHindi
              ? "वेडिंग सर्विसेज"
              : "Wedding Services"}
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            {isHindi
              ? "हर वेडिंग मोमेंट"
              : "Every Wedding Moment"}
          </h2>

          <p className="mt-1 text-[11px] leading-5 text-gray-500">
            {isHindi
              ? "इंडिविजुअल सेरेमनी चुनें या OurHub से अपनी पूरी वेडिंग कोऑर्डिनेट करवाएं।"
              : "Choose individual ceremonies or let OurHub coordinate your complete wedding."}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">

            {weddingServices.map((service) => (
              <ServiceCard
                key={service.title.en}
                service={service}
                language={language}
              />
            ))}

          </div>

        </section>

        {/* ===================================================
            WEDDING JOURNEY
        =================================================== */}

        <section className="relative mt-6 overflow-hidden rounded-[24px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#17130A] via-[#0A111D] to-[#0A111D] p-5">

          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Heart
                  size={20}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  {isHindi
                    ? "आपकी वेडिंग जर्नी"
                    : "Your Wedding Journey"}
                </p>

                <h3 className="mt-1 text-[16px] font-bold">
                  {isHindi
                    ? "पहली प्लानिंग से आखिरी पल तक"
                    : "From First Plan to Final Moment"}
                </h3>

              </div>

            </div>

            <div className="mt-5 grid grid-cols-4 gap-2">

              {journeySteps.map((step, index) => (
                <div
                  key={step.en}
                  className="text-center"
                >

                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[9px] font-bold text-[#DFAE45]">
                    0{index + 1}
                  </div>

                  <p className="mt-2 text-[9px] font-semibold">
                    {step[language]}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ===================================================
            WEDDING ESSENTIALS
        =================================================== */}

        <section className="mt-10">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
            {isHindi
              ? "अपनी वेडिंग पूरी करें"
              : "Complete Your Wedding"}
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            {isHindi
              ? "वेडिंग एसेंशियल्स"
              : "Wedding Essentials"}
          </h2>

          <p className="mt-1 text-[11px] leading-5 text-gray-500">
            {isHindi
              ? "एक स्मूथ और खूबसूरत सेलिब्रेशन के लिए जरूरी सभी सर्विसेज।"
              : "Everything you may need for a smooth and beautiful celebration."}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">

            {weddingEssentials.map((item) => (
              <EssentialCard
                key={item.title.en}
                item={item}
                language={language}
              />
            ))}

          </div>

        </section>

        {/* ===================================================
            PACKAGES
        =================================================== */}

        <section className="mt-10">

          <div className="mb-4">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              {isHindi
                ? "वेडिंग पैकेज"
                : "Wedding Packages"}
            </p>

            <h2 className="mt-1 text-[21px] font-bold">
              {isHindi
                ? "अपना सेलिब्रेशन चुनें"
                : "Choose Your Celebration"}
            </h2>

            <p className="mt-1 text-[11px] leading-5 text-gray-500">
              {isHindi
                ? "पैकेज आपकी वेडिंग की जरूरतों के अनुसार कस्टमाइज किए जा सकते हैं।"
                : "Packages can be customized according to your wedding needs."}
            </p>

          </div>

          <div className="space-y-3">

            {packages.map((pkg) => (

              <div
                key={pkg.name.en}
                className={`relative overflow-hidden rounded-[23px] border p-5 ${
                  pkg.popular
                    ? "border-[#DFAE45]/40 bg-gradient-to-br from-[#DFAE45]/10 via-[#0A111D] to-[#0A111D]"
                    : "border-white/[0.07] bg-white/[0.03]"
                }`}
              >

                {pkg.popular && (
                  <div className="absolute right-3 top-3 rounded-full bg-[#DFAE45] px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wider text-black">
                    {isHindi
                      ? "लोकप्रिय"
                      : "Popular"}
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">

                  <div>

                    <h3 className="text-[16px] font-bold">
                      {pkg.name[language]}
                    </h3>

                    <p className="mt-1 text-[10px] text-gray-500">
                      {pkg.description[language]}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-[19px] font-extrabold text-[#DFAE45]">
                      {pkg.price}
                    </p>

                    <p className="text-[8px] text-gray-600">
                      {isHindi
                        ? "शुरुआत से"
                        : "Starting from"}
                    </p>

                  </div>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">

                  {pkg.features.map((feature) => (

                    <div
                      key={feature.en}
                      className="flex items-start gap-1.5"
                    >

                      <CheckCircle2
                        size={13}
                        className="mt-0.5 shrink-0 text-[#DFAE45]"
                      />

                      <span className="text-[9px] leading-4 text-gray-400">
                        {feature[language]}
                      </span>

                    </div>

                  ))}

                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10 py-2.5 text-[10px] font-bold text-[#DFAE45]"
                >

                  {isHindi
                    ? "इस पैकेज के बारे में पूछें"
                    : "Enquire About This Package"}

                  <ArrowRight size={13} />

                </a>

              </div>

            ))}

          </div>

        </section>

        {/* ===================================================
            WHY OURHUB
        =================================================== */}

        <section className="mt-10">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
            {isHindi
              ? "OurHub क्यों"
              : "Why OurHub"}
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            {isHindi
              ? "आपकी वेडिंग, हमारी जिम्मेदारी"
              : "Your Wedding, Our Responsibility"}
          </h2>

          <p className="mt-1 text-[11px] leading-5 text-gray-500">
            {isHindi
              ? "हम जरूरी डिटेल्स को कोऑर्डिनेट करने में आपकी मदद करते हैं ताकि आप अपने परिवार के साथ सेलिब्रेशन का आनंद ले सकें।"
              : "We help coordinate the important details so you can enjoy the celebration with your family."}
          </p>

          <div className="mt-4 space-y-2.5">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title.en}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">

                    <Icon
                      size={18}
                      className="text-[#DFAE45]"
                    />

                  </div>

                  <div className="flex-1">

                    <h3 className="text-[12px] font-bold">
                      {feature.title[language]}
                    </h3>

                    <p className="mt-0.5 text-[9px] text-gray-500">
                      {feature.text[language]}
                    </p>

                  </div>

                  <ChevronRight
                    size={15}
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

        <section className="mt-8 rounded-[23px] border border-white/[0.07] bg-[#0A111D] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">

              <CalendarDays
                size={18}
                className="text-[#DFAE45]"
              />

            </div>

            <div>

              <p className="text-[9px] uppercase tracking-widest text-[#DFAE45]">
                {isHindi
                  ? "आसान प्रक्रिया"
                  : "Simple Process"}
              </p>

              <h2 className="text-[17px] font-bold">
                {isHindi
                  ? "आसानी से अपनी वेडिंग प्लान करें"
                  : "Plan Your Wedding Easily"}
              </h2>

            </div>

          </div>

          <div className="mt-5 space-y-4">

            {howItWorks.map((step) => (

              <div
                key={step.number}
                className="flex gap-3"
              >

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[9px] font-bold text-[#DFAE45]">
                  {step.number}
                </div>

                <div>

                  <h3 className="text-[11px] font-bold">
                    {step.title[language]}
                  </h3>

                  <p className="mt-0.5 text-[9px] leading-4 text-gray-500">
                    {step.text[language]}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ===================================================
            SERVICE AREA
        =================================================== */}

        <section className="mt-8 rounded-[23px] border border-[#DFAE45]/15 bg-[#0A111D] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">

              <MapPin
                size={20}
                className="text-[#DFAE45]"
              />

            </div>

            <div>

              <p className="text-[9px] uppercase tracking-widest text-[#DFAE45]">
                {isHindi
                  ? "सर्विस एरियाज"
                  : "Service Areas"}
              </p>

              <h3 className="mt-1 text-[14px] font-bold">
                {isHindi
                  ? "आपके पास वेडिंग सर्विसेज"
                  : "Wedding Services Near You"}
              </h3>

            </div>

          </div>

          <div className="mt-4 flex flex-wrap gap-2">

            {[
              "Ujjain",
              "Ratlam",
              "Indore",
              isHindi
                ? "नजदीकी क्षेत्र"
                : "Nearby Areas",
            ].map((city) => (

              <span
                key={city}
                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[9px] text-gray-400"
              >
                {city}
              </span>

            ))}

          </div>

        </section>

        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <section className="relative mt-8 overflow-hidden rounded-[26px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#1A150A] via-[#0E1118] to-[#090D15] p-5">

          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45]">

              <Heart
                size={22}
                className="text-black"
              />

            </div>

            <h2 className="mt-4 text-[22px] font-extrabold leading-tight">

              {isHindi ? (
                <>
                  अपनी ड्रीम वेडिंग
                  <br />
                  <span className="text-[#DFAE45]">
                    प्लान करने के लिए तैयार?
                  </span>
                </>
              ) : (
                <>
                  Ready to Plan Your
                  <br />
                  <span className="text-[#DFAE45]">
                    Dream Wedding?
                  </span>
                </>
              )}

            </h2>

            <p className="mt-2 text-[10px] leading-5 text-gray-400">
              {isHindi
                ? "अपनी शादी की तारीख, लोकेशन और जरूरतें हमें बताएं। OurHub आपको अगले स्टेप्स प्लान करने में मदद करेगा।"
                : "Tell us your wedding date, location and requirements. OurHub will help you plan the next steps."}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-[12px] font-bold text-black shadow-[0_8px_30px_rgba(223,174,69,0.15)] transition active:scale-[0.98]"
            >

              <MessageCircle size={17} />

              {isHindi
                ? "वेडिंग प्लानिंग शुरू करें"
                : "Start Wedding Planning"}

              <ArrowRight size={16} />

            </a>

          </div>

        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="mt-8 pb-5 text-center">

          <div className="flex items-center justify-center gap-2 text-[9px] text-gray-600">

            <div className="h-px w-8 bg-white/10" />

            <span>OURHUB WEDDINGS</span>

            <div className="h-px w-8 bg-white/10" />

          </div>

          <p className="mt-2 text-[9px] text-gray-700">
            {isHindi
              ? "अपनी वेडिंग प्लान करें। हर पल को सेलिब्रेट करें।"
              : "Plan your wedding. Celebrate every moment."}
          </p>

        </div>

      </div>

      {/* =====================================================
          FIXED MOBILE CTA
      ===================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#DFAE45]/15 bg-[#050B14]/95 p-3 backdrop-blur-xl">

        <div className="mx-auto flex max-w-[430px] gap-2">

          <a
            href={`tel:+${whatsappNumber}`}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]"
            aria-label={
              isHindi
                ? "एक्सपर्ट को कॉल करें"
                : "Call expert"
            }
          >
            <Phone
              size={18}
              className="text-[#DFAE45]"
            />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#DFAE45] text-[12px] font-extrabold text-black shadow-[0_5px_25px_rgba(223,174,69,0.15)]"
          >

            <MessageCircle size={17} />

            {isHindi
              ? "मेरी वेडिंग प्लान करें"
              : "Plan My Wedding"}

            <ArrowRight size={15} />

          </a>

        </div>

      </div>

    </main>
  );
}