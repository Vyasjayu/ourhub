"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Cake,
  Check,
  ChevronRight,
  Clock3,
  Crown,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  PartyPopper,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Utensils,
  Camera,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "918878632431";

type Localized = {
  en: string;
  hi: string;
};

const packages = [
  {
    title: {
      en: "Essential",
      hi: "एसेंशियल",
    },
    price: "₹4,999",
    subtitle: {
      en: "Perfect for a simple celebration",
      hi: "सिंपल सेलिब्रेशन के लिए शानदार",
    },
    icon: Cake,
    features: [
      {
        en: "Birthday decoration",
        hi: "बर्थडे डेकोरेशन",
      },
      {
        en: "Balloon decoration",
        hi: "बलून डेकोरेशन",
      },
      {
        en: "Cake table setup",
        hi: "केक टेबल सेटअप",
      },
      {
        en: "Basic photography",
        hi: "बेसिक फोटोग्राफी",
      },
      {
        en: "Event coordination",
        hi: "इवेंट कोऑर्डिनेशन",
      },
    ],
  },

  {
    title: {
      en: "Celebration",
      hi: "सेलिब्रेशन",
    },
    price: "₹9,999",
    subtitle: {
      en: "Our most popular birthday package",
      hi: "हमारा सबसे लोकप्रिय बर्थडे पैकेज",
    },
    icon: PartyPopper,
    popular: true,
    features: [
      {
        en: "Premium theme decoration",
        hi: "प्रीमियम थीम डेकोरेशन",
      },
      {
        en: "Balloon & backdrop setup",
        hi: "बलून और बैकड्रॉप सेटअप",
      },
      {
        en: "Birthday cake arrangement",
        hi: "बर्थडे केक अरेंजमेंट",
      },
      {
        en: "Photography & video",
        hi: "फोटोग्राफी और वीडियो",
      },
      {
        en: "DJ / music setup",
        hi: "डीजे / म्यूजिक सेटअप",
      },
      {
        en: "Complete event coordination",
        hi: "कंप्लीट इवेंट कोऑर्डिनेशन",
      },
    ],
  },

  {
    title: {
      en: "Luxury",
      hi: "लक्ज़री",
    },
    price: "₹19,999",
    subtitle: {
      en: "For a truly memorable celebration",
      hi: "एक शानदार और यादगार सेलिब्रेशन के लिए",
    },
    icon: Crown,
    features: [
      {
        en: "Luxury theme decoration",
        hi: "लक्ज़री थीम डेकोरेशन",
      },
      {
        en: "Premium stage & backdrop",
        hi: "प्रीमियम स्टेज और बैकड्रॉप",
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
        hi: "डीजे और एंटरटेनमेंट",
      },
      {
        en: "Cake & catering coordination",
        hi: "केक और कैटरिंग कोऑर्डिनेशन",
      },
      {
        en: "Dedicated event manager",
        hi: "डेडिकेटेड इवेंट मैनेजर",
      },
    ],
  },
];

const services = [
  {
    icon: Sparkles,
    title: {
      en: "Theme Decoration",
      hi: "थीम डेकोरेशन",
    },
    text: {
      en: "Beautiful customized themes designed around your celebration.",
      hi: "आपके सेलिब्रेशन के अनुसार खूबसूरत कस्टमाइज़्ड थीम तैयार की जाती हैं।",
    },
  },
  {
    icon: Cake,
    title: {
      en: "Cake & Setup",
      hi: "केक और सेटअप",
    },
    text: {
      en: "Cake table, candles, props and complete birthday setup.",
      hi: "केक टेबल, कैंडल्स, प्रॉप्स और पूरा बर्थडे सेटअप।",
    },
  },
  {
    icon: Music,
    title: {
      en: "DJ & Entertainment",
      hi: "डीजे और एंटरटेनमेंट",
    },
    text: {
      en: "Music, games and entertainment to keep everyone involved.",
      hi: "म्यूजिक, गेम्स और एंटरटेनमेंट जिससे सभी लोग सेलिब्रेशन का हिस्सा बनें।",
    },
  },
  {
    icon: Camera,
    title: {
      en: "Photography",
      hi: "फोटोग्राफी",
    },
    text: {
      en: "Capture every special moment with professional photography.",
      hi: "हर खास पल को प्रोफेशनल फोटोग्राफी के साथ कैप्चर करें।",
    },
  },
  {
    icon: Utensils,
    title: {
      en: "Food & Catering",
      hi: "फूड और कैटरिंग",
    },
    text: {
      en: "Flexible food and catering arrangements for your guests.",
      hi: "आपके मेहमानों के लिए सुविधाजनक फूड और कैटरिंग अरेंजमेंट।",
    },
  },
  {
    icon: Gift,
    title: {
      en: "Special Moments",
      hi: "स्पेशल मोमेंट्स",
    },
    text: {
      en: "Surprise entries, gifts and personalized celebration ideas.",
      hi: "सरप्राइज एंट्री, गिफ्ट्स और पर्सनलाइज़्ड सेलिब्रेशन आइडियाज।",
    },
  },
];

const steps = [
  {
    number: "01",
    title: {
      en: "Tell Us Your Plan",
      hi: "अपना प्लान बताएं",
    },
    text: {
      en: "Share your date, location, guests and birthday theme.",
      hi: "अपनी तारीख, लोकेशन, मेहमानों की संख्या और बर्थडे थीम बताएं।",
    },
  },
  {
    number: "02",
    title: {
      en: "Choose Your Package",
      hi: "अपना पैकेज चुनें",
    },
    text: {
      en: "Select a package or create a celebration around your budget.",
      hi: "कोई पैकेज चुनें या अपने बजट के अनुसार सेलिब्रेशन तैयार करें।",
    },
  },
  {
    number: "03",
    title: {
      en: "We Plan Everything",
      hi: "हम सब कुछ प्लान करेंगे",
    },
    text: {
      en: "Our event team coordinates decoration, vendors and setup.",
      hi: "हमारी इवेंट टीम डेकोरेशन, वेंडर्स और सेटअप की पूरी कोऑर्डिनेशन करती है।",
    },
  },
  {
    number: "04",
    title: {
      en: "Celebrate",
      hi: "सेलिब्रेट करें",
    },
    text: {
      en: "Relax and enjoy your birthday while we handle the details.",
      hi: "आप रिलैक्स होकर अपना बर्थडे एंजॉय करें, बाकी सभी डिटेल्स हम संभालेंगे।",
    },
  },
];

const faqs = [
  {
    q: {
      en: "Can I customize the birthday theme?",
      hi: "क्या मैं बर्थडे थीम को कस्टमाइज़ कर सकता हूं?",
    },
    a: {
      en: "Yes. You can request a custom theme, colors, decoration style and special setup.",
      hi: "हां। आप कस्टम थीम, कलर्स, डेकोरेशन स्टाइल और स्पेशल सेटअप की रिक्वेस्ट कर सकते हैं।",
    },
  },
  {
    q: {
      en: "Do you arrange cake and catering?",
      hi: "क्या आप केक और कैटरिंग की व्यवस्था करते हैं?",
    },
    a: {
      en: "Yes. Cake, snacks, meals and catering coordination can be added to your event.",
      hi: "हां। आपके इवेंट में केक, स्नैक्स, मील्स और कैटरिंग कोऑर्डिनेशन जोड़ा जा सकता है।",
    },
  },
  {
    q: {
      en: "Can you arrange birthday parties at home?",
      hi: "क्या आप घर पर बर्थडे पार्टी आयोजित कर सकते हैं?",
    },
    a: {
      en: "Yes. We can plan birthdays at homes, restaurants, hotels, party halls and outdoor venues.",
      hi: "हां। हम घर, रेस्टोरेंट, होटल, पार्टी हॉल और आउटडोर वेन्यू पर बर्थडे पार्टी प्लान कर सकते हैं।",
    },
  },
  {
    q: {
      en: "How early should I book?",
      hi: "मुझे कितने समय पहले बुकिंग करनी चाहिए?",
    },
    a: {
      en: "We recommend booking as early as possible so the preferred date and vendors can be arranged.",
      hi: "हम जल्द से जल्द बुकिंग करने की सलाह देते हैं ताकि आपकी पसंदीदा तारीख और वेंडर्स की व्यवस्था की जा सके।",
    },
  },
];

export default function BirthdayPartiesPage() {
  const { language } = useLanguage();

  const t = (item: Localized) => item[language];

  const whatsappMessage = encodeURIComponent(
    language === "hi"
      ? "नमस्ते OurHub, मुझे बर्थडे पार्टी प्लान करनी है।\n\nकृपया उपलब्ध पैकेज, कीमत और पूरी जानकारी साझा करें।"
      : "Hello OurHub, I want to plan a Birthday Party.\n\nPlease share available packages, pricing and details."
  );

  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DFAE45]/10 blur-[100px]" />
        <div className="absolute -right-32 top-[45%] h-80 w-80 rounded-full bg-[#7C3AED]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[480px] overflow-hidden">

        {/* HEADER */}
        <header className="absolute left-0 right-0 top-0 z-30 px-5 pt-5">
          <div className="flex items-center justify-between">

            <Link
              href="/eventManagement"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-xl"
              aria-label={language === "hi" ? "वापस जाएं" : "Go back"}
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="rounded-full border border-[#DFAE45]/30 bg-black/45 px-4 py-2 backdrop-blur-xl">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#E7B94F]">
                OURHUB EVENTS
              </span>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10 backdrop-blur-xl"
              aria-label="WhatsApp"
            >
              <MessageCircle size={19} className="text-[#25D366]" />
            </a>

          </div>
        </header>

        {/* HERO */}
        <section className="relative h-[650px] overflow-hidden">

          <img
            src="/images/events/birthday.jpg"
            alt={
              language === "hi"
                ? "बर्थडे पार्टी सेलिब्रेशन"
                : "Birthday party celebration"
            }
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#05070B]" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#05070B] to-transparent" />

          <div className="absolute bottom-9 left-5 right-5">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/45 px-3 py-2 backdrop-blur-xl">
              <Sparkles size={14} className="text-[#E7B94F]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B94F]">
                {language === "hi"
                  ? "प्रीमियम बर्थडे प्लानिंग"
                  : "Premium Birthday Planning"}
              </span>
            </div>

            <h1 className="max-w-[390px] text-[42px] font-bold leading-[0.98] tracking-[-0.04em]">
              {language === "hi" ? (
                <>
                  बनाएं उनका
                  <span className="block text-[#E7B94F]">
                    जन्मदिन
                  </span>
                  यादगार।
                </>
              ) : (
                <>
                  Make Their
                  <span className="block text-[#E7B94F]">
                    Birthday
                  </span>
                  Unforgettable.
                </>
              )}
            </h1>

            <p className="mt-4 max-w-[370px] text-[15px] leading-6 text-white/70">
              {language === "hi"
                ? "खूबसूरत थीम से लेकर म्यूजिक, केक, फोटोग्राफी और एंटरटेनमेंट तक — हम आपके बर्थडे की हर डिटेल प्लान करते हैं।"
                : "From beautiful themes to music, cake, photography and entertainment — we plan every detail for you."}
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.22)]"
              >
                {language === "hi"
                  ? "मेरा बर्थडे प्लान करें"
                  : "Plan My Birthday"}

                <ArrowRight size={17} />
              </a>

              <a
                href="#packages"
                className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl"
                aria-label={
                  language === "hi"
                    ? "पैकेज देखें"
                    : "View packages"
                }
              >
                <ChevronRight size={20} />
              </a>

            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="px-5 pt-3">

          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">

            <div className="border-r border-white/10 px-3 py-4 text-center">
              <ShieldCheck
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />

              <p className="text-[11px] font-semibold">
                {language === "hi"
                  ? "भरोसेमंद टीम"
                  : "Trusted Team"}
              </p>
            </div>

            <div className="border-r border-white/10 px-3 py-4 text-center">
              <Sparkles
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />

              <p className="text-[11px] font-semibold">
                {language === "hi"
                  ? "प्रीमियम सेटअप"
                  : "Premium Setup"}
              </p>
            </div>

            <div className="px-3 py-4 text-center">
              <Clock3
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />

              <p className="text-[11px] font-semibold">
                {language === "hi"
                  ? "समय पर सर्विस"
                  : "On-Time Service"}
              </p>
            </div>

          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 pb-4 pt-14">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
            {language === "hi"
              ? "अपने तरीके से सेलिब्रेट करें"
              : "Celebrate Your Way"}
          </p>

          <h2 className="mt-3 text-[29px] font-bold leading-tight">
            {language === "hi" ? (
              <>
                एक सेलिब्रेशन।
                <br />
                <span className="text-white/45">
                  हर डिटेल हमारी जिम्मेदारी।
                </span>
              </>
            ) : (
              <>
                One celebration.
                <br />
                <span className="text-white/45">
                  Every detail handled.
                </span>
              </>
            )}
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-white/55">
            {language === "hi"
              ? "चाहे बच्चों का बर्थडे हो, कोई खास माइलस्टोन सेलिब्रेशन, सरप्राइज पार्टी या छोटा पारिवारिक समारोह — OurHub हर व्यवस्था को एक ही जगह पर जोड़ता है।"
              : "Whether it is a kids birthday, milestone celebration, surprise party or intimate family gathering, OurHub brings everything together under one roof."}
          </p>

        </section>

        {/* SERVICES */}
        <section className="px-5 pt-7">

          <div className="mb-5 flex items-end justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
                {language === "hi"
                  ? "हम क्या अरेंज करते हैं"
                  : "What We Arrange"}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {language === "hi"
                  ? "आपको चाहिए हर सुविधा"
                  : "Everything You Need"}
              </h2>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title.en}
                  className="rounded-[22px] border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#DFAE45]/30"
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

                  <p className="mt-2 text-[11px] leading-5 text-white/45">
                    {t(service.text)}
                  </p>

                </div>
              );
            })}

          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="px-5 pt-16">

          <div className="mb-6">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
              {language === "hi"
                ? "बर्थडे पैकेज"
                : "Birthday Packages"}
            </p>

            <h2 className="mt-2 text-[29px] font-bold">
              {language === "hi"
                ? "अपना सेलिब्रेशन चुनें"
                : "Pick Your Celebration"}
            </h2>

            <p className="mt-2 text-sm text-white/45">
              {language === "hi"
                ? "सिंपल से लेकर ग्रैंड सेलिब्रेशन तक चुनें। हर पैकेज को कस्टमाइज़ किया जा सकता है।"
                : "Start simple or go all-out. We can customize every package."}
            </p>

          </div>

          <div className="space-y-4">

            {packages.map((pkg) => {
              const Icon = pkg.icon;

              const packageWhatsappMessage = encodeURIComponent(
                language === "hi"
                  ? `नमस्ते OurHub, मुझे ${pkg.title.hi} बर्थडे पैकेज (${pkg.price}) में रुचि है। कृपया इसकी पूरी जानकारी साझा करें।`
                  : `Hello OurHub, I am interested in the ${pkg.title.en} Birthday Package (${pkg.price}). Please share complete details.`
              );

              return (
                <div
                  key={pkg.title.en}
                  className={`relative overflow-hidden rounded-[26px] border p-5 ${
                    pkg.popular
                      ? "border-[#DFAE45]/50 bg-gradient-to-br from-[#DFAE45]/10 to-white/[0.035]"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >

                  {pkg.popular && (
                    <div className="absolute right-4 top-4 rounded-full bg-[#DFAE45] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black">
                      {language === "hi"
                        ? "सबसे लोकप्रिय"
                        : "Most Popular"}
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

                      <p className="mt-1 max-w-[230px] text-xs text-white/45">
                        {t(pkg.subtitle)}
                      </p>
                    </div>

                  </div>

                  <div className="mt-5">
                    <span className="text-3xl font-black">
                      {pkg.price}
                    </span>

                    <span className="ml-2 text-xs text-white/35">
                      {language === "hi"
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
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${packageWhatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold ${
                      pkg.popular
                        ? "bg-[#DFAE45] text-black"
                        : "border border-white/10 bg-white/5 text-white"
                    }`}
                  >
                    {language === "hi"
                      ? "पैकेज चुनें"
                      : "Choose Package"}

                    <ArrowRight size={16} />
                  </a>

                </div>
              );
            })}

          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="px-5 pt-16">

          <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.025] to-transparent p-6">

            <div className="flex items-center gap-2 text-[#E7B94F]">
              <Sparkles size={17} />

              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                {language === "hi"
                  ? "हमारा वादा"
                  : "Our Promise"}
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold leading-tight">
              {language === "hi" ? (
                <>
                  आप पल को एंजॉय करें।
                  <br />
                  <span className="text-[#E7B94F]">
                    बाकी हम संभालेंगे।
                  </span>
                </>
              ) : (
                <>
                  You enjoy the moment.
                  <br />
                  <span className="text-[#E7B94F]">
                    We handle the chaos.
                  </span>
                </>
              )}
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/50">
              {language === "hi"
                ? "हमारी इवेंट टीम वेंडर्स, सेटअप, डेकोरेशन और कोऑर्डिनेशन संभालती है ताकि आप अपना समय उन लोगों के साथ बिता सकें जो आपके लिए खास हैं।"
                : "Our event team manages vendors, setup, decoration and coordination so you can spend your time with the people who matter."}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">

              <div className="rounded-2xl bg-black/25 p-4">
                <Users
                  size={19}
                  className="text-[#E7B94F]"
                />

                <p className="mt-3 text-sm font-bold">
                  {language === "hi"
                    ? "गेस्ट मैनेजमेंट"
                    : "Guest Management"}
                </p>

                <p className="mt-1 text-[11px] text-white/40">
                  {language === "hi"
                    ? "स्मूथ कोऑर्डिनेशन"
                    : "Smooth coordination"}
                </p>
              </div>

              <div className="rounded-2xl bg-black/25 p-4">
                <Heart
                  size={19}
                  className="text-[#E7B94F]"
                />

                <p className="mt-3 text-sm font-bold">
                  {language === "hi"
                    ? "पर्सनल टच"
                    : "Personal Touch"}
                </p>

                <p className="mt-1 text-[11px] text-white/40">
                  {language === "hi"
                    ? "आपके लिए डिजाइन"
                    : "Designed for you"}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 pt-16">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
            {language === "hi"
              ? "आसान प्रक्रिया"
              : "Simple Process"}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {language === "hi"
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

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    {t(step.text)}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* GALLERY */}
        <section className="px-5 pt-16">

          <div className="mb-5 flex items-end justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
                {language === "hi"
                  ? "सेलिब्रेशन गैलरी"
                  : "Celebration Gallery"}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {language === "hi"
                  ? "यादगार पल"
                  : "Moments That Shine"}
              </h2>
            </div>

            <Camera
              size={20}
              className="text-[#E7B94F]"
            />

          </div>

          <div className="grid grid-cols-2 gap-3">

            <div className="relative h-48 overflow-hidden rounded-[22px]">

              <img
                src="/images/events/birthday.jpg"
                alt={
                  language === "hi"
                    ? "बर्थडे डेकोरेशन"
                    : "Birthday decoration"
                }
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                {language === "hi"
                  ? "बर्थडे थीम्स"
                  : "Birthday Themes"}
              </span>

            </div>

            <div className="relative h-48 overflow-hidden rounded-[22px]">

              <img
                src="/images/events/birthday.jpg"
                alt={
                  language === "hi"
                    ? "बर्थडे सेलिब्रेशन"
                    : "Birthday celebration"
                }
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                {language === "hi"
                  ? "सेलिब्रेशन"
                  : "Celebration"}
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

            <p className="mt-5 text-[17px] font-medium leading-7 text-white/80">
              {language === "hi"
                ? "“सब कुछ बहुत खूबसूरत था और हमें किसी चीज़ की चिंता नहीं करनी पड़ी। टीम ने पूरा सेलिब्रेशन शानदार तरीके से संभाला।”"
                : "“Everything looked beautiful and we did not have to worry about anything. The team managed the entire celebration perfectly.”"}
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
                  {language === "hi"
                    ? "OurHub ग्राहक"
                    : "OurHub Customer"}
                </p>

                <p className="text-xs text-white/40">
                  {language === "hi"
                    ? "बर्थडे सेलिब्रेशन"
                    : "Birthday Celebration"}
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
                {language === "hi"
                  ? "बर्थडे पार्टी"
                  : "Birthday Parties"}
              </p>

              <p className="mt-1 text-xs text-white/40">
                Ujjain • Ratlam • Indore{" "}
                {language === "hi"
                  ? "और आसपास के क्षेत्र"
                  : "& nearby areas"}
              </p>

            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 pt-16">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
            FAQ
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {language === "hi"
              ? "बुकिंग से पहले"
              : "Before You Book"}
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

                <p className="px-4 pb-4 text-xs leading-5 text-white/45">
                  {t(faq.a)}
                </p>

              </details>
            ))}

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-32 pt-16">

          <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-7 text-center">

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/15 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DFAE45]/15">
                <PartyPopper
                  size={25}
                  className="text-[#E7B94F]"
                />
              </div>

              <h2 className="mt-5 text-2xl font-black">
                {language === "hi"
                  ? "सेलिब्रेशन के लिए तैयार हैं?"
                  : "Ready to Celebrate?"}
              </h2>

              <p className="mx-auto mt-3 max-w-[310px] text-sm leading-6 text-white/50">
                {language === "hi"
                  ? "अपना बर्थडे प्लान हमें बताएं और हमारी इवेंट टीम आपके लिए परफेक्ट सेलिब्रेशन तैयार करने में मदद करेगी।"
                  : "Tell us your birthday plan and our event team will help you create the perfect celebration."}
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-4 text-sm font-black text-black"
              >
                <MessageCircle size={18} />

                {language === "hi"
                  ? "हमारी इवेंट टीम से बात करें"
                  : "Talk to Our Event Team"}
              </a>

              <a
                href="tel:+918878632431"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-semibold"
              >
                <Phone size={17} />

                {language === "hi"
                  ? "OurHub को कॉल करें"
                  : "Call OurHub"}
              </a>

            </div>
          </div>
        </section>

        {/* BOTTOM MINI BAR */}
        <div className="fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-white/10 bg-[#05070B]/90 px-4 py-3 backdrop-blur-2xl">

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-sm font-black text-black"
          >
            {language === "hi"
              ? "बर्थडे पार्टी प्लान करें"
              : "Plan Birthday Party"}

            <ArrowRight size={17} />
          </a>

        </div>

      </div>
    </main>
  );
}