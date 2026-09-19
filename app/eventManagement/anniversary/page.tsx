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
      en: "Romantic Decoration",
      hi: "रोमांटिक डेकोरेशन",
    },
    description: {
      en: "Elegant floral backdrops, candles, balloons and personalized anniversary styling.",
      hi: "एलिगेंट फ्लोरल बैकड्रॉप, कैंडल्स, गुब्बारों और पर्सनलाइज़्ड एनिवर्सरी स्टाइलिंग के साथ खूबसूरत सजावट।",
    },
  },
  {
    icon: Camera,
    title: {
      en: "Photography",
      hi: "फोटोग्राफी",
    },
    description: {
      en: "Capture beautiful couple portraits, family moments and memories from your celebration.",
      hi: "आपके सेलिब्रेशन के खूबसूरत कपल पोर्ट्रेट, फैमिली मोमेंट्स और यादों को कैप्चर करें।",
    },
  },
  {
    icon: Heart,
    title: {
      en: "Couple Setup",
      hi: "कपल सेटअप",
    },
    description: {
      en: "Special couple seating, stage styling and personalized arrangements for your special day.",
      hi: "आपके खास दिन के लिए स्पेशल कपल सीटिंग, स्टेज स्टाइलिंग और पर्सनलाइज़्ड अरेंजमेंट।",
    },
  },
  {
    icon: Music,
    title: {
      en: "Music & Entertainment",
      hi: "म्यूजिक और एंटरटेनमेंट",
    },
    description: {
      en: "Romantic music, live entertainment and fun activities for couples and families.",
      hi: "कपल्स और परिवार के लिए रोमांटिक म्यूजिक, लाइव एंटरटेनमेंट और मजेदार एक्टिविटीज़।",
    },
  },
  {
    icon: Utensils,
    title: {
      en: "Dinner & Catering",
      hi: "डिनर और कैटरिंग",
    },
    description: {
      en: "Customized food and dining arrangements for intimate or large anniversary celebrations.",
      hi: "छोटे या बड़े एनिवर्सरी सेलिब्रेशन के लिए कस्टमाइज़्ड फूड और डाइनिंग अरेंजमेंट।",
    },
  },
  {
    icon: Gift,
    title: {
      en: "Surprise Planning",
      hi: "सरप्राइज़ प्लानिंग",
    },
    description: {
      en: "Thoughtful surprise moments, cake setup, gifts and personalized experiences.",
      hi: "खास सरप्राइज़ मोमेंट्स, केक सेटअप, गिफ्ट्स और पर्सनलाइज़्ड एक्सपीरियंस।",
    },
  },
];

const packages = [
  {
    id: "romantic-moments",
    name: {
      en: "Romantic Moments",
      hi: "रोमांटिक मोमेंट्स",
    },
    price: "₹7,999",
    description: {
      en: "Perfect for a beautiful and intimate anniversary celebration.",
      hi: "एक खूबसूरत और इंटिमेट एनिवर्सरी सेलिब्रेशन के लिए परफेक्ट।",
    },
    features: [
      {
        en: "Romantic backdrop",
        hi: "रोमांटिक बैकड्रॉप",
      },
      {
        en: "Balloon & floral styling",
        hi: "बैलून और फ्लोरल स्टाइलिंग",
      },
      {
        en: "Couple seating",
        hi: "कपल सीटिंग",
      },
      {
        en: "Cake table setup",
        hi: "केक टेबल सेटअप",
      },
      {
        en: "Welcome board",
        hi: "वेलकम बोर्ड",
      },
    ],
  },
  {
    id: "golden-anniversary",
    name: {
      en: "Golden Anniversary",
      hi: "गोल्डन एनिवर्सरी",
    },
    price: "₹14,999",
    popular: true,
    description: {
      en: "A premium anniversary experience designed for memorable moments.",
      hi: "यादगार पलों के लिए तैयार किया गया प्रीमियम एनिवर्सरी एक्सपीरियंस।",
    },
    features: [
      {
        en: "Premium decoration",
        hi: "प्रीमियम डेकोरेशन",
      },
      {
        en: "Floral couple stage",
        hi: "फ्लोरल कपल स्टेज",
      },
      {
        en: "Cake & celebration setup",
        hi: "केक और सेलिब्रेशन सेटअप",
      },
      {
        en: "Photography coverage",
        hi: "फोटोग्राफी कवरेज",
      },
      {
        en: "Music & entertainment",
        hi: "म्यूजिक और एंटरटेनमेंट",
      },
      {
        en: "Personalized couple setup",
        hi: "पर्सनलाइज़्ड कपल सेटअप",
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
      en: "Complete event management for a grand family anniversary.",
      hi: "एक शानदार फैमिली एनिवर्सरी के लिए कम्प्लीट इवेंट मैनेजमेंट।",
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
        en: "Entertainment & music",
        hi: "एंटरटेनमेंट और म्यूजिक",
      },
      {
        en: "Dinner & catering coordination",
        hi: "डिनर और कैटरिंग कोऑर्डिनेशन",
      },
      {
        en: "Complete event management",
        hi: "कम्प्लीट इवेंट मैनेजमेंट",
      },
    ],
  },
];

const anniversaryTypes: Localized[] = [
  {
    en: "1st Anniversary",
    hi: "पहली एनिवर्सरी",
  },
  {
    en: "5th Anniversary",
    hi: "5वीं एनिवर्सरी",
  },
  {
    en: "10th Anniversary",
    hi: "10वीं एनिवर्सरी",
  },
  {
    en: "25th Anniversary",
    hi: "25वीं एनिवर्सरी",
  },
  {
    en: "50th Anniversary",
    hi: "50वीं एनिवर्सरी",
  },
  {
    en: "Family Celebration",
    hi: "फैमिली सेलिब्रेशन",
  },
];

const faqs = [
  {
    id: "surprise",
    question: {
      en: "Can you plan a surprise anniversary celebration?",
      hi: "क्या आप सरप्राइज़ एनिवर्सरी सेलिब्रेशन प्लान कर सकते हैं?",
    },
    answer: {
      en: "Yes. OurHub can coordinate romantic decoration, cake setup, music, photography and surprise arrangements.",
      hi: "हाँ। OurHub रोमांटिक डेकोरेशन, केक सेटअप, म्यूजिक, फोटोग्राफी और सरप्राइज़ अरेंजमेंट कोऑर्डिनेट कर सकता है।",
    },
  },
  {
    id: "decoration",
    question: {
      en: "Can I customize the decoration theme?",
      hi: "क्या मैं डेकोरेशन थीम को कस्टमाइज़ कर सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes. You can choose your preferred colors, flowers, theme, photographs and decoration style.",
      hi: "हाँ। आप अपनी पसंद के कलर्स, फूल, थीम, फोटोग्राफ्स और डेकोरेशन स्टाइल चुन सकते हैं।",
    },
  },
  {
    id: "milestone",
    question: {
      en: "Do you arrange milestone anniversaries?",
      hi: "क्या आप खास माइलस्टोन एनिवर्सरी भी अरेंज करते हैं?",
    },
    answer: {
      en: "Yes. We can plan special celebrations for 5th, 10th, 25th, 50th and other important milestones.",
      hi: "हाँ। हम 5वीं, 10वीं, 25वीं, 50वीं और अन्य खास माइलस्टोन के लिए स्पेशल सेलिब्रेशन प्लान कर सकते हैं।",
    },
  },
  {
    id: "complete-event",
    question: {
      en: "Can you manage the complete anniversary event?",
      hi: "क्या आप पूरा एनिवर्सरी इवेंट मैनेज कर सकते हैं?",
    },
    answer: {
      en: "Yes. OurHub can coordinate decoration, photography, entertainment, catering and other event requirements.",
      hi: "हाँ। OurHub डेकोरेशन, फोटोग्राफी, एंटरटेनमेंट, कैटरिंग और इवेंट की अन्य जरूरतों का कोऑर्डिनेशन कर सकता है।",
    },
  },
];

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export default function AnniversaryPage() {
  const { language } = useLanguage();

  const enquiryMessage =
    language === "hi"
      ? "नमस्ते OurHub, मैं एनिवर्सरी सेलिब्रेशन प्लान करना चाहता/चाहती हूँ। कृपया पैकेज और पूरी जानकारी साझा करें।"
      : "Hello OurHub, I want to plan an Anniversary celebration. Please share packages and complete details.";

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
              {language === "hi" ? "एनिवर्सरी" : "Anniversary"}
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
              src="/images/events/anniversary.jpg"
              alt={
                language === "hi"
                  ? "एनिवर्सरी इवेंट"
                  : "Anniversary Event"
              }
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#05070B]" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                <Heart
                  size={14}
                  className="fill-[#DFAE45] text-[#DFAE45]"
                />

                <span className="text-[11px] font-semibold tracking-wide text-[#F5D98B]">
                  {language === "hi"
                    ? "एनिवर्सरी • प्यार • यादें"
                    : "ANNIVERSARY • LOVE • MEMORIES"}
                </span>
              </div>

              <h2 className="max-w-[380px] text-[39px] font-bold leading-[1.02] tracking-[-1.6px]">
                {language === "hi" ? (
                  <>
                    अपने खूबसूरत
                    <span className="block text-[#E7B94F]">
                      सफर को सेलिब्रेट करें।
                    </span>
                  </>
                ) : (
                  <>
                    Celebrate Your
                    <span className="block text-[#E7B94F]">
                      Beautiful Journey.
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-4 max-w-[370px] text-[14px] leading-6 text-white/70">
                {language === "hi"
                  ? "आपकी लव स्टोरी, खास यादों और उन लोगों के लिए एलिगेंट एनिवर्सरी सेलिब्रेशन तैयार करें जो आपके लिए सबसे खास हैं।"
                  : "Elegant anniversary celebrations crafted around your love story, special memories and the people who matter most."}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] text-white/75">
                  ✦{" "}
                  {language === "hi"
                    ? "रोमांटिक डेकोर"
                    : "Romantic Decor"}
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
                    ? "सरप्राइज़ प्लानिंग"
                    : "Surprise Planning"}
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
              ? "अपनी कहानी सेलिब्रेट करें"
              : "Celebrate Your Story"}
          </p>

          <h3 className="mt-3 text-[29px] font-bold leading-tight tracking-[-0.8px]">
            {language === "hi" ? (
              <>
                सालों का प्यार।
                <br />
                <span className="text-white/45">
                  एक खूबसूरत सेलिब्रेशन।
                </span>
              </>
            ) : (
              <>
                Years Of Love.
                <br />
                <span className="text-white/45">
                  One Beautiful Celebration.
                </span>
              </>
            )}
          </h3>

          <p className="mt-4 text-[14px] leading-7 text-white/60">
            {language === "hi"
              ? "हर एनिवर्सरी उन यादों, हंसी और साथ बिताए सफर की याद दिलाती है। OurHub उस खूबसूरत सफर को एक एलिगेंट सेलिब्रेशन में बदलने में आपकी मदद करता है जिसे आपका परिवार हमेशा याद रखेगा।"
              : "Every anniversary is a reminder of the memories, laughter and journey shared together. OurHub helps you turn that journey into an elegant celebration your family will remember."}
          </p>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {language === "hi"
              ? "हम क्या संभालते हैं"
              : "What We Handle"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {language === "hi"
              ? "आपके सेलिब्रेशन के लिए सब कुछ"
              : "Everything For Your Celebration"}
          </h3>

          <div className="mt-6 space-y-3">
            {services.map((service) => {
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

        {/* ================= ANNIVERSARY TYPES ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {language === "hi"
              ? "हर माइलस्टोन खास है"
              : "Every Milestone Matters"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {language === "hi"
              ? "हर चैप्टर को सेलिब्रेट करें"
              : "Celebrate Every Chapter"}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {anniversaryTypes.map((type) => (
              <span
                key={type.en}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-[11px] font-medium text-white/65"
              >
                {type[language]}
              </span>
            ))}
          </div>
        </section>

        {/* ================= LOVE STORY CARD ================= */}
        <section className="px-5 pt-12">
          <div className="relative overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.025] to-transparent p-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DFAE45]/25 bg-[#DFAE45]/10">
                <Heart
                  size={21}
                  className="fill-[#DFAE45] text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-5 text-[25px] font-bold leading-tight">
                {language === "hi" ? (
                  <>
                    अपनी लव स्टोरी को
                    <br />
                    <span className="text-[#E7B94F]">
                      सेलिब्रेशन का हिस्सा बनाएं
                    </span>
                  </>
                ) : (
                  <>
                    Make Your Love Story
                    <br />
                    <span className="text-[#E7B94F]">
                      Part Of The Celebration
                    </span>
                  </>
                )}
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-white/55">
                {language === "hi"
                  ? "अपनी पसंदीदा तस्वीरें, खास तारीखें, स्पेशल मैसेज और पर्सनल टच जोड़कर ऐसा एनिवर्सरी इवेंट बनाएं जो बिल्कुल आपके जैसा हो।"
                  : "Add your favorite photographs, meaningful dates, special messages and personal touches to create an anniversary event that feels uniquely yours."}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  {
                    en: "Couple Photos",
                    hi: "कपल फोटोज़",
                  },
                  {
                    en: "Memory Wall",
                    hi: "मेमोरी वॉल",
                  },
                  {
                    en: "Special Message",
                    hi: "स्पेशल मैसेज",
                  },
                  {
                    en: "Custom Decor",
                    hi: "कस्टम डेकोर",
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

        {/* ================= PACKAGES ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            {language === "hi"
              ? "एनिवर्सरी पैकेज"
              : "Anniversary Packages"}
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            {language === "hi"
              ? "अपना एक्सपीरियंस चुनें"
              : "Choose Your Experience"}
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
                      ? `नमस्ते OurHub, मुझे ${pkg.name.hi} एनिवर्सरी पैकेज (${pkg.price}) में रुचि है। कृपया पूरी जानकारी साझा करें।`
                      : `Hello OurHub, I am interested in the ${pkg.name.en} Anniversary package priced at ${pkg.price}. Please share complete details.`
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

        {/* ================= MEMORY EXPERIENCE ================= */}
        <section className="px-5 pt-12">
          <div className="rounded-[25px] border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Camera
                  size={20}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  {language === "hi"
                    ? "पल को कैप्चर करें"
                    : "Capture The Moment"}
                </p>

                <h4 className="mt-1 text-[16px] font-semibold">
                  {language === "hi"
                    ? "यादें जो हमेशा साथ रहें"
                    : "Memories That Stay Forever"}
                </h4>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">
                <Camera
                  size={18}
                  className="text-[#DFAE45]"
                />

                <p className="mt-3 text-[12px] font-semibold">
                  {language === "hi"
                    ? "कपल पोर्ट्रेट्स"
                    : "Couple Portraits"}
                </p>

                <p className="mt-1 text-[10px] leading-5 text-white/40">
                  {language === "hi"
                    ? "आपके खास दिन के खूबसूरत पलों को शानदार तरीके से कैप्चर करें।"
                    : "Beautifully captured moments for your special day."}
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">
                <Users
                  size={18}
                  className="text-[#DFAE45]"
                />

                <p className="mt-3 text-[12px] font-semibold">
                  {language === "hi"
                    ? "फैमिली मोमेंट्स"
                    : "Family Moments"}
                </p>

                <p className="mt-1 text-[10px] leading-5 text-white/40">
                  {language === "hi"
                    ? "उन लोगों के साथ सेलिब्रेट करें जिन्होंने आपके सफर को खास बनाया।"
                    : "Celebrate the people who made your journey special."}
                </p>
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
              ? "प्लान से सेलिब्रेशन तक"
              : "From Plan To Celebration"}
          </h3>

          <div className="mt-6 space-y-3">
            {[
              {
                number: "01",
                title: {
                  en: "Share Your Vision",
                  hi: "अपनी पसंद बताएं",
                },
                text: {
                  en: "Tell us your anniversary date, venue, guest count and celebration idea.",
                  hi: "अपनी एनिवर्सरी की तारीख, वेन्यू, मेहमानों की संख्या और सेलिब्रेशन आइडिया बताएं।",
                },
              },
              {
                number: "02",
                title: {
                  en: "Choose Your Style",
                  hi: "अपनी स्टाइल चुनें",
                },
                text: {
                  en: "Select your preferred decoration, colors and celebration experience.",
                  hi: "अपनी पसंद की डेकोरेशन, कलर्स और सेलिब्रेशन एक्सपीरियंस चुनें।",
                },
              },
              {
                number: "03",
                title: {
                  en: "We Plan Everything",
                  hi: "हम सब कुछ प्लान करेंगे",
                },
                text: {
                  en: "Our team coordinates the decoration, photography and required arrangements.",
                  hi: "हमारी टीम डेकोरेशन, फोटोग्राफी और सभी जरूरी व्यवस्थाओं का कोऑर्डिनेशन करती है।",
                },
              },
              {
                number: "04",
                title: {
                  en: "Celebrate Together",
                  hi: "साथ मिलकर सेलिब्रेट करें",
                },
                text: {
                  en: "Enjoy your special day while our team takes care of the details.",
                  hi: "आप अपने खास दिन का आनंद लें, बाकी सभी डिटेल्स हमारी टीम संभालेगी।",
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
                  ? "एनिवर्सरी मोमेंट्स"
                  : "Anniversary Moments"}
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
                src="/images/events/anniversary-1.jpg"
                alt={
                  language === "hi"
                    ? "एनिवर्सरी डेकोरेशन"
                    : "Anniversary decoration"
                }
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-4 left-4 text-[11px] font-medium text-white/80">
                {language === "hi"
                  ? "रोमांटिक एनिवर्सरी डेकोर"
                  : "Romantic Anniversary Decor"}
              </span>
            </div>

            <div className="relative h-[155px] overflow-hidden rounded-[21px] border border-white/[0.08]">
              <img
                src="/images/events/anniversary-2.jpg"
                alt={
                  language === "hi"
                    ? "एनिवर्सरी सेलिब्रेशन"
                    : "Anniversary celebration"
                }
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="relative h-[155px] overflow-hidden rounded-[21px] border border-white/[0.08]">
              <img
                src="/images/events/anniversary-3.jpg"
                alt={
                  language === "hi"
                    ? "एनिवर्सरी कपल सेलिब्रेशन"
                    : "Anniversary couple celebration"
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
              {language === "hi"
                ? "“डेकोरेशन बहुत खूबसूरत था और हर छोटी डिटेल ने हमारी एनिवर्सरी को बेहद खास बना दिया।”"
                : "“The decoration looked beautiful and every little detail made our anniversary feel incredibly special.”"}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFAE45]/10">
                <Heart
                  size={17}
                  className="fill-[#DFAE45] text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[12px] font-semibold">
                  {language === "hi"
                    ? "OurHub कपल"
                    : "OurHub Couple"}
                </p>

                <p className="text-[10px] text-white/40">
                  {language === "hi"
                    ? "एनिवर्सरी सेलिब्रेशन"
                    : "Anniversary Celebration"}
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
                    ? "एनिवर्सरी इवेंट प्लानिंग आसपास के क्षेत्रों में भी उपलब्ध है।"
                    : "Anniversary event planning available in nearby areas as well."}
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
                  ? "इसे यादगार बनाएं"
                  : "Make It Memorable"}
              </p>

              <h3 className="mt-2 text-[28px] font-bold leading-tight">
                {language === "hi" ? (
                  <>
                    अपनी एनिवर्सरी
                    <br />
                    सेलिब्रेट करें
                  </>
                ) : (
                  <>
                    Celebrate Your
                    <br />
                    Anniversary
                  </>
                )}
              </h3>

              <p className="mx-auto mt-3 max-w-[320px] text-[12px] leading-5 text-white/50">
                {language === "hi"
                  ? "हमें अपने एनिवर्सरी आइडिया के बारे में बताएं और OurHub प्यार, एलिगेंस और यादों से भरा खूबसूरत सेलिब्रेशन तैयार करेगा।"
                  : "Tell us your anniversary idea and let OurHub create a celebration filled with love, elegance and memories."}
              </p>

              <a
                href={whatsappLink(enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 text-[13px] font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.18)]"
              >
                <MessageCircle size={18} />

                {language === "hi"
                  ? "मेरी एनिवर्सरी प्लान करें"
                  : "Plan My Anniversary"}

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
            WhatsApp
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