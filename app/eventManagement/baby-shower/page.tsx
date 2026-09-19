"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  BadgeCheck,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  PartyPopper,
  Sparkles,
  Star,
  Utensils,
  Users,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const whatsappNumber = "918878632431";

type Localized = {
  en: string;
  hi: string;
};

const services = [
  {
    icon: Sparkles,
    title: {
      en: "Theme Decoration",
      hi: "थीम डेकोरेशन",
    },
    description: {
      en: "Beautiful baby shower themes with elegant backdrop, balloons, flowers and personalized styling.",
      hi: "एलिगेंट बैकड्रॉप, गुब्बारों, फूलों और पर्सनलाइज़्ड स्टाइलिंग के साथ खूबसूरत बेबी शावर थीम।",
    },
  },
  {
    icon: Camera,
    title: {
      en: "Photography",
      hi: "फोटोग्राफी",
    },
    description: {
      en: "Capture every smile, ritual, family moment and special memory of your celebration.",
      hi: "आपके सेलिब्रेशन की हर मुस्कान, रस्म, पारिवारिक पल और खास याद को कैप्चर करें।",
    },
  },
  {
    icon: Gift,
    title: {
      en: "Godh Bharai Setup",
      hi: "गोद भराई सेटअप",
    },
    description: {
      en: "Traditional and modern Godh Bharai arrangements designed around your family's preferences.",
      hi: "आपके परिवार की पसंद के अनुसार ट्रेडिशनल और मॉडर्न गोद भराई अरेंजमेंट।",
    },
  },
  {
    icon: Music,
    title: {
      en: "Music & Entertainment",
      hi: "म्यूजिक और एंटरटेनमेंट",
    },
    description: {
      en: "Music, games and engaging activities to make the celebration joyful for everyone.",
      hi: "म्यूजिक, गेम्स और मजेदार एक्टिविटीज़ ताकि सभी के लिए सेलिब्रेशन खुशनुमा रहे।",
    },
  },
  {
    icon: Utensils,
    title: {
      en: "Food & Catering",
      hi: "फूड और कैटरिंग",
    },
    description: {
      en: "Complete catering arrangements with customized menus for family and guests.",
      hi: "परिवार और मेहमानों के लिए कस्टमाइज़्ड मेन्यू के साथ पूरी कैटरिंग व्यवस्था।",
    },
  },
  {
    icon: Baby,
    title: {
      en: "Mom-to-be Experience",
      hi: "मॉम-टू-बी एक्सपीरियंस",
    },
    description: {
      en: "Special seating, floral styling and thoughtful arrangements focused on the mom-to-be.",
      hi: "मॉम-टू-बी के लिए खास सीटिंग, फ्लोरल स्टाइलिंग और खूबसूरत पर्सनलाइज़्ड अरेंजमेंट।",
    },
  },
];

const packages = [
  {
    id: "sweet-celebration",
    name: {
      en: "Sweet Celebration",
      hi: "स्वीट सेलिब्रेशन",
    },
    price: "₹7,999",
    description: {
      en: "Perfect for a beautiful family baby shower.",
      hi: "एक खूबसूरत पारिवारिक बेबी शावर के लिए परफेक्ट।",
    },
    features: [
      {
        en: "Theme backdrop",
        hi: "थीम बैकड्रॉप",
      },
      {
        en: "Balloon decoration",
        hi: "गुब्बारों की सजावट",
      },
      {
        en: "Mom-to-be chair setup",
        hi: "मॉम-टू-बी चेयर सेटअप",
      },
      {
        en: "Basic table styling",
        hi: "बेसिक टेबल स्टाइलिंग",
      },
      {
        en: "Welcome board",
        hi: "वेलकम बोर्ड",
      },
    ],
  },
  {
    id: "royal-godh-bharai",
    name: {
      en: "Royal Godh Bharai",
      hi: "रॉयल गोद भराई",
    },
    price: "₹14,999",
    popular: true,
    description: {
      en: "A complete premium Godh Bharai experience.",
      hi: "एक कम्प्लीट प्रीमियम गोद भराई एक्सपीरियंस।",
    },
    features: [
      {
        en: "Premium theme decoration",
        hi: "प्रीमियम थीम डेकोरेशन",
      },
      {
        en: "Floral & balloon styling",
        hi: "फ्लोरल और बैलून स्टाइलिंग",
      },
      {
        en: "Designer mom-to-be seating",
        hi: "डिज़ाइनर मॉम-टू-बी सीटिंग",
      },
      {
        en: "Welcome & photo zone",
        hi: "वेलकम और फोटो ज़ोन",
      },
      {
        en: "Baby shower games",
        hi: "बेबी शावर गेम्स",
      },
      {
        en: "Photography coverage",
        hi: "फोटोग्राफी कवरेज",
      },
    ],
  },
  {
    id: "grand-celebration",
    name: {
      en: "Grand Celebration",
      hi: "ग्रैंड सेलिब्रेशन",
    },
    price: "₹29,999",
    description: {
      en: "For families planning an unforgettable celebration.",
      hi: "उन परिवारों के लिए जो एक यादगार सेलिब्रेशन प्लान कर रहे हैं।",
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
        en: "Professional photography",
        hi: "प्रोफेशनल फोटोग्राफी",
      },
      {
        en: "Entertainment & games",
        hi: "एंटरटेनमेंट और गेम्स",
      },
      {
        en: "Catering coordination",
        hi: "कैटरिंग कोऑर्डिनेशन",
      },
      {
        en: "Complete event management",
        hi: "कम्प्लीट इवेंट मैनेजमेंट",
      },
    ],
  },
];

const eventStyles: Localized[] = [
  {
    en: "Royal Godh Bharai",
    hi: "रॉयल गोद भराई",
  },
  {
    en: "Floral Baby Shower",
    hi: "फ्लोरल बेबी शावर",
  },
  {
    en: "Pastel Theme",
    hi: "पेस्टल थीम",
  },
  {
    en: "Traditional",
    hi: "ट्रेडिशनल",
  },
  {
    en: "Modern Celebration",
    hi: "मॉडर्न सेलिब्रेशन",
  },
  {
    en: "Premium Family Event",
    hi: "प्रीमियम फैमिली इवेंट",
  },
];

const gallery = [
  "/images/events/baby-shower-1.jpg",
  "/images/events/baby-shower-2.jpg",
  "/images/events/baby-shower-3.jpg",
];

const faqs = [
  {
    id: "booking",
    question: {
      en: "How early should I book my baby shower?",
      hi: "मुझे अपना बेबी शावर कितने समय पहले बुक करना चाहिए?",
    },
    answer: {
      en: "Ideally, book 7–15 days before the event so our team can plan the decoration, photography and other arrangements properly.",
      hi: "आदर्श रूप से इवेंट से 7–15 दिन पहले बुकिंग करें ताकि हमारी टीम डेकोरेशन, फोटोग्राफी और अन्य व्यवस्थाओं को सही तरीके से प्लान कर सके।",
    },
  },
  {
    id: "theme",
    question: {
      en: "Can I choose my own baby shower theme?",
      hi: "क्या मैं अपनी पसंद की बेबी शावर थीम चुन सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes. You can share your preferred colors, theme, decoration references and venue details with our event team.",
      hi: "हाँ। आप अपनी पसंद के कलर्स, थीम, डेकोरेशन रेफरेंस और वेन्यू की जानकारी हमारी इवेंट टीम के साथ शेयर कर सकते हैं।",
    },
  },
  {
    id: "godh-bharai",
    question: {
      en: "Do you arrange traditional Godh Bharai functions?",
      hi: "क्या आप ट्रेडिशनल गोद भराई कार्यक्रम भी अरेंज करते हैं?",
    },
    answer: {
      en: "Yes. We can coordinate traditional Godh Bharai styling along with modern decoration and family-focused arrangements.",
      hi: "हाँ। हम मॉडर्न डेकोरेशन और फैमिली-फोकस्ड अरेंजमेंट के साथ ट्रेडिशनल गोद भराई की पूरी स्टाइलिंग कोऑर्डिनेट कर सकते हैं।",
    },
  },
  {
    id: "complete-event",
    question: {
      en: "Can you manage the complete event?",
      hi: "क्या आप पूरा इवेंट मैनेज कर सकते हैं?",
    },
    answer: {
      en: "Yes. OurHub can coordinate decoration, photography, entertainment, catering and other event requirements.",
      hi: "हाँ। OurHub डेकोरेशन, फोटोग्राफी, एंटरटेनमेंट, कैटरिंग और इवेंट की अन्य जरूरतों का कोऑर्डिनेशन कर सकता है।",
    },
  },
];

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export default function BabyShowerPage() {
  const { language } = useLanguage();

  const enquiryMessage =
    language === "hi"
      ? "नमस्ते OurHub, मैं बेबी शावर / गोद भराई इवेंट प्लान करना चाहता/चाहती हूँ। कृपया पैकेज और पूरी जानकारी साझा करें।"
      : "Hello OurHub, I want to plan a Baby Shower / Godh Bharai event. Please share packages and details.";

  return (
    <main className="min-h-screen bg-[#05070B] pb-28 text-white">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#05070B]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[480px] items-center justify-between px-5">
          <Link
            href="/eventManagement"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
          >
            <ArrowLeft size={20} />
          </Link>

          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#DFAE45]">
              OurHub Events
            </p>

            <h1 className="mt-0.5 text-[15px] font-semibold">
              {language === "hi" ? "बेबी शावर" : "Baby Shower"}
            </h1>
          </div>

          <a
            href={whatsappLink(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-[#DFAE45]"
          >
            <MessageCircle size={19} />
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-[480px]">
        {/* ================= HERO ================= */}
        <section className="px-4 pt-4">
          <div className="relative min-h-[500px] overflow-hidden rounded-[30px] border border-[#DFAE45]/20 bg-[#0B0D11]">
            <img
              src="/images/events/baby-shower.jpg"
              alt={
                language === "hi"
                  ? "बेबी शावर इवेंट"
                  : "Baby Shower Event"
              }
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-[#05070B]" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                <Baby size={14} className="text-[#DFAE45]" />

                <span className="text-[11px] font-semibold tracking-wide text-[#F5D98B]">
                  {language === "hi"
                    ? "बेबी शावर • गोद भराई"
                    : "BABY SHOWER • GODH BHARAI"}
                </span>
              </div>

              <h2 className="max-w-[370px] text-[38px] font-bold leading-[1.02] tracking-[-1.5px]">
                {language === "hi" ? (
                  <>
                    एक खूबसूरत नई शुरुआत,
                    <span className="block text-[#E7B94F]">
                      प्यार के साथ सेलिब्रेट करें।
                    </span>
                  </>
                ) : (
                  <>
                    A Beautiful Beginning,
                    <span className="block text-[#E7B94F]">
                      Celebrated With Love.
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-4 max-w-[370px] text-[14px] leading-6 text-white/70">
                {language === "hi"
                  ? "आपके परिवार, आपकी परंपराओं और आपके खास पलों के अनुसार खूबसूरत बेबी शावर और गोद भराई सेलिब्रेशन तैयार करें।"
                  : "Elegant baby shower and Godh Bharai celebrations designed around your family, your traditions and your special moments."}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] text-white/75">
                  ✦{" "}
                  {language === "hi"
                    ? "एलिगेंट डेकोर"
                    : "Elegant Decor"}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] text-white/75">
                  ✦{" "}
                  {language === "hi"
                    ? "फोटोग्राफी"
                    : "Photography"}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] text-white/75">
                  ✦{" "}
                  {language === "hi"
                    ? "कम्प्लीट प्लानिंग"
                    : "Complete Planning"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST STRIP ================= */}
        <section className="px-5 pt-5">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]">
            <div className="border-r border-white/[0.07] px-2 py-4 text-center">
              <BadgeCheck
                size={19}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-2 text-[10px] font-medium text-white/65">
                {language === "hi"
                  ? "भरोसेमंद टीम"
                  : "Trusted Team"}
              </p>
            </div>

            <div className="border-r border-white/[0.07] px-2 py-4 text-center">
              <Sparkles
                size={19}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-2 text-[10px] font-medium text-white/65">
                {language === "hi"
                  ? "प्रीमियम स्टाइलिंग"
                  : "Premium Styling"}
              </p>
            </div>

            <div className="px-2 py-4 text-center">
              <Clock3
                size={19}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-2 text-[10px] font-medium text-white/65">
                {language === "hi"
                  ? "समय पर सेटअप"
                  : "On-time Setup"}
              </p>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {language === "hi"
              ? "नई शुरुआत को सेलिब्रेट करें"
              : "Celebrate The New Chapter"}
          </p>

          <h3 className="mt-3 text-[29px] font-bold leading-tight tracking-[-0.8px]">
            {language === "hi" ? (
              <>
                सिर्फ एक इवेंट नहीं।
                <br />
                <span className="text-white/45">
                  जिंदगी भर की याद।
                </span>
              </>
            ) : (
              <>
                More Than An Event.
                <br />
                <span className="text-white/45">
                  A Memory For Life.
                </span>
              </>
            )}
          </h3>

          <p className="mt-4 text-[14px] leading-7 text-white/60">
            {language === "hi"
              ? "बेबी शावर परिवार के उन खास पलों में से एक है जब सभी लोग एक खूबसूरत नई शुरुआत का जश्न मनाने के लिए साथ आते हैं। OurHub आपके लिए ऐसा एक्सपीरियंस तैयार करता है जो गर्मजोशी, एलिगेंस और आपकी पर्सनल पसंद से भरा हो।"
              : "Your baby shower is one of those rare family moments where everyone comes together to celebrate a beautiful new beginning. OurHub helps you create an experience that feels warm, elegant and truly personal."}
          </p>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="px-5 pt-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
                {language === "hi"
                  ? "हम क्या संभालते हैं"
                  : "What We Handle"}
              </p>

              <h3 className="mt-2 text-[25px] font-bold">
                {language === "hi"
                  ? "सब कुछ एक ही जगह"
                  : "Everything In One Place"}
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title.en}
                  className="group rounded-[22px] border border-white/[0.07] bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-4 transition-all duration-300 hover:border-[#DFAE45]/30"
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

        {/* ================= STYLES ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {language === "hi"
              ? "अपनी स्टाइल चुनें"
              : "Choose Your Style"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {language === "hi"
              ? "आपका सेलिब्रेशन, आपका अंदाज़"
              : "Your Celebration, Your Way"}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {eventStyles.map((style) => (
              <span
                key={style.en}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-[11px] font-medium text-white/65"
              >
                {style[language]}
              </span>
            ))}
          </div>
        </section>

        {/* ================= PACKAGES ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {language === "hi"
              ? "सेलिब्रेशन पैकेज"
              : "Celebration Packages"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {language === "hi"
              ? "अपना एक्सपीरियंस चुनें"
              : "Pick Your Experience"}
          </h3>

          <div className="mt-6 space-y-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative overflow-hidden rounded-[25px] border p-5 ${
                  pkg.popular
                    ? "border-[#DFAE45]/45 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.04] to-transparent"
                    : "border-white/[0.08] bg-white/[0.025]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#DFAE45] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-black">
                    {language === "hi"
                      ? "सबसे लोकप्रिय"
                      : "Most Popular"}
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
                      {language === "hi"
                        ? "से शुरू"
                        : "starting from"}
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
                  href={whatsappLink(
                    language === "hi"
                      ? `नमस्ते OurHub, मुझे ${pkg.name.hi} बेबी शावर पैकेज (${pkg.price}) में रुचि है। कृपया पूरी जानकारी साझा करें।`
                      : `Hello OurHub, I am interested in the ${pkg.name.en} Baby Shower package priced at ${pkg.price}. Please share complete details.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[12px] font-semibold text-[#F0CC73]"
                >
                  {language === "hi"
                    ? "इस पैकेज की जानकारी लें"
                    : "Enquire About This Package"}

                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SPECIAL EXPERIENCE ================= */}
        <section className="px-5 pt-12">
          <div className="relative overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.025] to-transparent p-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DFAE45]/25 bg-[#DFAE45]/10">
                <Heart
                  size={21}
                  className="text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-5 text-[25px] font-bold leading-tight">
                {language === "hi" ? (
                  <>
                    मॉम-टू-बी के लिए
                    <br />
                    <span className="text-[#E7B94F]">
                      खास ध्यान
                    </span>
                  </>
                ) : (
                  <>
                    Special Attention
                    <br />
                    <span className="text-[#E7B94F]">
                      For The Mom-to-be
                    </span>
                  </>
                )}
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-white/55">
                {language === "hi"
                  ? "खूबसूरत सीटिंग अरेंजमेंट से लेकर फ्लोरल स्टाइलिंग और खास फोटो मोमेंट्स तक, हर डिटेल इस तरह डिज़ाइन की जा सकती है कि मॉम-टू-बी को वास्तव में स्पेशल महसूस हो।"
                  : "From a beautiful seating arrangement to floral styling and thoughtful photo moments, every detail can be designed to make the mom-to-be feel truly special."}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  {
                    en: "Designer Seating",
                    hi: "डिज़ाइनर सीटिंग",
                  },
                  {
                    en: "Floral Styling",
                    hi: "फ्लोरल स्टाइलिंग",
                  },
                  {
                    en: "Photo Moments",
                    hi: "फोटो मोमेंट्स",
                  },
                  {
                    en: "Family Games",
                    hi: "फैमिली गेम्स",
                  },
                ].map((item) => (
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

        {/* ================= PROCESS ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {language === "hi"
              ? "आसान प्रक्रिया"
              : "Simple Process"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {language === "hi"
              ? "आइडिया से सेलिब्रेशन तक"
              : "From Idea To Celebration"}
          </h3>

          <div className="mt-6 space-y-3">
            {[
              {
                number: "01",
                title: {
                  en: "Tell Us Your Plan",
                  hi: "अपना प्लान बताएं",
                },
                text: {
                  en: "Share your date, venue, guest count and celebration style.",
                  hi: "अपनी तारीख, वेन्यू, मेहमानों की संख्या और सेलिब्रेशन स्टाइल साझा करें।",
                },
              },
              {
                number: "02",
                title: {
                  en: "Choose Your Theme",
                  hi: "अपनी थीम चुनें",
                },
                text: {
                  en: "Select a theme, colors and decoration style that matches your vision.",
                  hi: "अपनी पसंद के अनुसार थीम, कलर्स और डेकोरेशन स्टाइल चुनें।",
                },
              },
              {
                number: "03",
                title: {
                  en: "We Plan Everything",
                  hi: "हम सब कुछ प्लान करेंगे",
                },
                text: {
                  en: "Our team coordinates the required event arrangements.",
                  hi: "हमारी टीम इवेंट की सभी जरूरी व्यवस्थाओं का कोऑर्डिनेशन करती है।",
                },
              },
              {
                number: "04",
                title: {
                  en: "Enjoy Your Day",
                  hi: "अपने दिन का आनंद लें",
                },
                text: {
                  en: "Relax with your family while we take care of the celebration.",
                  hi: "आप अपने परिवार के साथ आराम से समय बिताएं, बाकी सेलिब्रेशन हम संभालेंगे।",
                },
              },
            ].map((step) => (
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
                {language === "hi"
                  ? "इंस्पिरेशन"
                  : "Inspiration"}
              </p>

              <h3 className="mt-2 text-[25px] font-bold">
                {language === "hi"
                  ? "सेलिब्रेशन मोमेंट्स"
                  : "Celebration Moments"}
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
                src={gallery[0]}
                alt={
                  language === "hi"
                    ? "बेबी शावर डेकोरेशन"
                    : "Baby shower decoration"
                }
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-4 left-4 text-[11px] font-medium text-white/80">
                {language === "hi"
                  ? "खूबसूरत थीम डेकोर"
                  : "Beautiful Theme Decor"}
              </span>
            </div>

            {gallery.slice(1).map((image, index) => (
              <div
                key={image}
                className="relative h-[155px] overflow-hidden rounded-[21px] border border-white/[0.08]"
              >
                <img
                  src={image}
                  alt={
                    language === "hi"
                      ? `बेबी शावर मोमेंट ${index + 2}`
                      : `Baby shower moment ${index + 2}`
                  }
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            ))}
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
              {language === "hi"
                ? "“सब कुछ बहुत खूबसूरत था और पूरे परिवार को सेटअप बहुत पसंद आया। मॉम-टू-बी को वास्तव में बहुत स्पेशल महसूस हुआ।”"
                : "“Everything looked beautiful and the entire family loved the setup. The mom-to-be felt truly special.”"}
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
                  {language === "hi"
                    ? "OurHub फैमिली इवेंट"
                    : "OurHub Family Event"}
                </p>

                <p className="text-[10px] text-white/40">
                  {language === "hi"
                    ? "बेबी शावर सेलिब्रेशन"
                    : "Baby Shower Celebration"}
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
                  {language === "hi"
                    ? "सर्विस एरिया"
                    : "Service Areas"}
                </p>

                <h4 className="mt-1 text-[15px] font-semibold">
                  Ujjain • Ratlam • Indore
                </h4>

                <p className="mt-1 text-[11px] leading-5 text-white/45">
                  {language === "hi"
                    ? "बेबी शावर और गोद भराई इवेंट प्लानिंग आसपास के क्षेत्रों में भी उपलब्ध है।"
                    : "Baby shower and Godh Bharai event planning available in nearby areas as well."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {language === "hi"
              ? "सवाल"
              : "Questions"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {language === "hi"
              ? "अक्सर पूछे जाने वाले सवाल"
              : "Frequently Asked"}
          </h3>

          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.id}
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
                {language === "hi"
                  ? "चलो सेलिब्रेट करें"
                  : "Let's Celebrate"}
              </p>

              <h3 className="mt-2 text-[28px] font-bold leading-tight">
                {language === "hi" ? (
                  <>
                    एक खूबसूरत
                    <br />
                    बेबी शावर प्लान करें
                  </>
                ) : (
                  <>
                    Plan A Beautiful
                    <br />
                    Baby Shower
                  </>
                )}
              </h3>

              <p className="mx-auto mt-3 max-w-[320px] text-[12px] leading-5 text-white/50">
                {language === "hi"
                  ? "हमें अपने सेलिब्रेशन का आइडिया बताएं और OurHub उसे एक खूबसूरत पारिवारिक याद में बदलने में आपकी मदद करेगा।"
                  : "Tell us your celebration idea and let OurHub turn it into a beautiful family memory."}
              </p>

              <a
                href={whatsappLink(enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 text-[13px] font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.18)]"
              >
                <MessageCircle size={18} />

                {language === "hi"
                  ? "मेरा बेबी शावर प्लान करें"
                  : "Plan My Baby Shower"}

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
            {language === "hi"
              ? "सभी सेवाएं, एक ही हब"
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

            {language === "hi"
              ? "WhatsApp"
              : "WhatsApp"}
          </a>

          <a
            href={whatsappLink(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 flex-[1.6] items-center justify-center gap-2 rounded-xl bg-[#DFAE45] text-[12px] font-bold text-black"
          >
            {language === "hi"
              ? "इवेंट प्लान करें"
              : "Plan Your Event"}

            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}