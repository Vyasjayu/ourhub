"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  PartyPopper,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

type Localized = {
  en: string;
  hi: string;
};

type Feature = {
  icon: typeof PartyPopper;
  title: Localized;
  description: Localized;
};

type Package = {
  id: string;
  title: Localized;
  duration: Localized;
  price: string;
  popular: boolean;
  features: Localized[];
};

const features: Feature[] = [
  {
    icon: PartyPopper,
    title: {
      en: "Fun Entertainment",
      hi: "फन एंटरटेनमेंट",
    },
    description: {
      en: "High-energy character performance to make your event memorable.",
      hi: "आपके इवेंट को यादगार बनाने के लिए हाई-एनर्जी कैरेक्टर परफॉर्मेंस।",
    },
  },
  {
    icon: Users,
    title: {
      en: "All Age Groups",
      hi: "सभी उम्र के लिए",
    },
    description: {
      en: "Perfect entertainment for kids, families and guests.",
      hi: "बच्चों, परिवार और मेहमानों के लिए शानदार एंटरटेनमेंट।",
    },
  },
  {
    icon: Clock3,
    title: {
      en: "Flexible Duration",
      hi: "फ्लेक्सिबल अवधि",
    },
    description: {
      en: "Choose the performance duration according to your event.",
      hi: "अपने इवेंट के अनुसार परफॉर्मेंस की अवधि चुनें।",
    },
  },
  {
    icon: ShieldCheck,
    title: {
      en: "Professional Team",
      hi: "प्रोफेशनल टीम",
    },
    description: {
      en: "Managed by trained and event-ready entertainment professionals.",
      hi: "ट्रेंड और इवेंट-रेडी एंटरटेनमेंट प्रोफेशनल्स द्वारा मैनेज किया जाता है।",
    },
  },
];

const packages: Package[] = [
  {
    id: "mini",
    title: {
      en: "Mini Appearance",
      hi: "मिनी अपीयरेंस",
    },
    duration: {
      en: "30 Minutes",
      hi: "30 मिनट",
    },
    price: "₹1,499",
    popular: false,
    features: [
      {
        en: "Character entry",
        hi: "कैरेक्टर एंट्री",
      },
      {
        en: "Guest interaction",
        hi: "मेहमानों के साथ इंटरैक्शन",
      },
      {
        en: "Photo & selfie session",
        hi: "फोटो और सेल्फी सेशन",
      },
    ],
  },
  {
    id: "fun",
    title: {
      en: "Fun Celebration",
      hi: "फन सेलिब्रेशन",
    },
    duration: {
      en: "60 Minutes",
      hi: "60 मिनट",
    },
    price: "₹2,499",
    popular: true,
    features: [
      {
        en: "Grand character entry",
        hi: "ग्रैंड कैरेक्टर एंट्री",
      },
      {
        en: "Interactive performance",
        hi: "इंटरैक्टिव परफॉर्मेंस",
      },
      {
        en: "Kids interaction",
        hi: "बच्चों के साथ इंटरैक्शन",
      },
      {
        en: "Photo & selfie session",
        hi: "फोटो और सेल्फी सेशन",
      },
    ],
  },
  {
    id: "full",
    title: {
      en: "Full Entertainment",
      hi: "फुल एंटरटेनमेंट",
    },
    duration: {
      en: "90 Minutes",
      hi: "90 मिनट",
    },
    price: "₹3,999",
    popular: false,
    features: [
      {
        en: "Grand character entry",
        hi: "ग्रैंड कैरेक्टर एंट्री",
      },
      {
        en: "Extended performance",
        hi: "एक्सटेंडेड परफॉर्मेंस",
      },
      {
        en: "Games & interaction",
        hi: "गेम्स और इंटरैक्शन",
      },
      {
        en: "Photo session",
        hi: "फोटो सेशन",
      },
      {
        en: "Event coordination",
        hi: "इवेंट कोऑर्डिनेशन",
      },
    ],
  },
];

const occasions: Localized[] = [
  {
    en: "Birthday Parties",
    hi: "बर्थडे पार्टियां",
  },
  {
    en: "School Events",
    hi: "स्कूल इवेंट्स",
  },
  {
    en: "Kids Functions",
    hi: "किड्स फंक्शन्स",
  },
  {
    en: "Corporate Family Events",
    hi: "कॉर्पोरेट फैमिली इवेंट्स",
  },
  {
    en: "Wedding Functions",
    hi: "वेडिंग फंक्शन्स",
  },
  {
    en: "Festive Celebrations",
    hi: "फेस्टिव सेलिब्रेशन्स",
  },
];

export default function GorillaCharacterPage() {
  const router = useRouter();
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const selectedPackage = packages[1];

  const goToBooking = (pkg?: Package) => {
    const selected = pkg || selectedPackage;

    router.push(
      `/eventManagement/characters/gorilla/book?package=${encodeURIComponent(
        selected.title.en
      )}`
    );
  };

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#050B14] pb-28">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050B14]/90 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => router.back()}
              aria-label={isHindi ? "वापस जाएं" : "Go back"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] active:scale-95"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#DFAE45]">
                OurHub Events
              </p>

              <h1 className="mt-0.5 text-[17px] font-bold">
                {isHindi
                  ? "गोरिल्ला कैरेक्टर"
                  : "Gorilla Character"}
              </h1>
            </div>

            <div className="h-10 w-10" />
          </div>
        </header>

        {/* Hero */}
        <section className="px-5 pt-5">
          <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/25 bg-[#09121F]">
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#DFAE45]/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

            {/* Image */}
            <div className="relative h-[285px] overflow-hidden">
              <img
                src="/images/events/gorilla.jpg"
                alt={
                  isHindi
                    ? "गोरिल्ला कैरेक्टर एंटरटेनमेंट"
                    : "Gorilla Character Entertainment"
                }
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.src =
                    "/images/events/funny-character.jpg";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/20 to-transparent" />

              {/* Badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/60 px-3 py-2 backdrop-blur-md">
                <Sparkles
                  size={14}
                  className="text-[#DFAE45]"
                />

                <span className="text-[11px] font-semibold">
                  {isHindi
                    ? "प्रीमियम एंटरटेनमेंट"
                    : "Premium Entertainment"}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
                <Star
                  size={13}
                  fill="currentColor"
                  className="text-[#DFAE45]"
                />

                <span className="text-xs font-bold">
                  4.9
                </span>
              </div>

              {/* Hero Text */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="mb-2 text-xs font-medium text-[#DFAE45]">
                  {isHindi
                    ? "कैरेक्टर एंटरटेनमेंट"
                    : "CHARACTER ENTERTAINMENT"}
                </p>

                <h2 className="text-[30px] font-extrabold leading-[1.05]">
                  Gorilla
                  <br />
                  <span className="text-[#DFAE45]">
                    {isHindi
                      ? "कैरेक्टर शो"
                      : "Character Show"}
                  </span>
                </h2>

                <p className="mt-2 max-w-[330px] text-[13px] leading-5 text-white/70">
                  {isHindi
                    ? "हमारे एनर्जेटिक गोरिल्ला कैरेक्टर के साथ अपनी सेलिब्रेशन में फन, हंसी और यादगार पलों को शामिल करें।"
                    : "Bring fun, laughter and unforgettable moments to your celebration with our energetic Gorilla character."}
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="px-3 py-4 text-center">
                <Clock3
                  size={17}
                  className="mx-auto mb-1.5 text-[#DFAE45]"
                />

                <p className="text-[11px] text-white/50">
                  {isHindi ? "अवधि" : "Duration"}
                </p>

                <p className="mt-0.5 text-xs font-bold">
                  30–90 {isHindi ? "मिनट" : "Min"}
                </p>
              </div>

              <div className="border-x border-white/10 px-3 py-4 text-center">
                <MapPin
                  size={17}
                  className="mx-auto mb-1.5 text-[#DFAE45]"
                />

                <p className="text-[11px] text-white/50">
                  {isHindi ? "लोकेशन" : "Location"}
                </p>

                <p className="mt-0.5 text-xs font-bold">
                  {isHindi
                    ? "उज्जैन और अन्य"
                    : "Ujjain & More"}
                </p>
              </div>

              <div className="px-3 py-4 text-center">
                <Users
                  size={17}
                  className="mx-auto mb-1.5 text-[#DFAE45]"
                />

                <p className="text-[11px] text-white/50">
                  {isHindi ? "उपयुक्त" : "Suitable"}
                </p>

                <p className="mt-0.5 text-xs font-bold">
                  {isHindi ? "सभी उम्र" : "All Ages"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="px-5 pt-7">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DFAE45]">
                {isHindi
                  ? "इसे खास बनाएं"
                  : "Make It Special"}
              </p>

              <h2 className="mt-1 text-[22px] font-bold">
                {isHindi
                  ? "ऐसा एंटरटेनमेंट जो सभी को मुस्कुराने पर मजबूर कर दे"
                  : "Entertainment that gets everyone smiling"}
              </h2>
            </div>
          </div>

          <p className="text-[13px] leading-6 text-white/60">
            {isHindi
              ? "हमारा गोरिल्ला कैरेक्टर एंटरटेनमेंट उत्साह, हंसी और यादगार फोटो मोमेंट्स बनाने के लिए तैयार किया गया है। बर्थडे, फैमिली सेलिब्रेशन, स्कूल फंक्शन्स और स्पेशल इवेंट्स के लिए परफेक्ट।"
              : "Our Gorilla Character entertainment is designed to create excitement, laughter and memorable photo moments. Perfect for birthdays, family celebrations, school functions and special events."}
          </p>
        </section>

        {/* Features */}
        <section className="px-5 pt-7">
          <div className="grid grid-cols-2 gap-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title.en}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                    <Icon
                      size={19}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <h3 className="text-[13px] font-bold">
                    {item.title[language]}
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-4 text-white/50">
                    {item.description[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Packages */}
        <section className="px-5 pt-8">
          <div className="mb-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DFAE45]">
              {isHindi
                ? "अपना अनुभव चुनें"
                : "Choose Your Experience"}
            </p>

            <h2 className="mt-1 text-[22px] font-bold">
              {isHindi
                ? "एंटरटेनमेंट पैकेज"
                : "Entertainment Packages"}
            </h2>
          </div>

          <div className="space-y-3">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative overflow-hidden rounded-[20px] border p-4 ${
                  pkg.popular
                    ? "border-[#DFAE45]/50 bg-[#DFAE45]/[0.07]"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-3 top-3 rounded-full bg-[#DFAE45] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-black">
                    {isHindi
                      ? "सबसे लोकप्रिय"
                      : "Most Popular"}
                  </div>
                )}

                <div className="flex items-start justify-between pr-24">
                  <div>
                    <h3 className="text-[16px] font-bold">
                      {pkg.title[language]}
                    </h3>

                    <p className="mt-1 flex items-center gap-1.5 text-[11px] text-white/50">
                      <Clock3 size={12} />
                      {pkg.duration[language]}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[19px] font-extrabold text-[#DFAE45]">
                      {pkg.price}
                    </p>

                    <p className="text-[9px] text-white/40">
                      {isHindi
                        ? "से शुरू"
                        : "starting from"}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-2">
                  {pkg.features.map((feature) => (
                    <div
                      key={feature.en}
                      className="flex items-center gap-2 text-[11px] text-white/65"
                    >
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-[#DFAE45]"
                      />

                      {feature[language]}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => goToBooking(pkg)}
                  className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#DFAE45] text-xs font-extrabold text-black transition active:scale-[0.98]"
                >
                  {isHindi
                    ? "यह पैकेज बुक करें"
                    : "Book This Package"}

                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Occasions */}
        <section className="px-5 pt-8">
          <div className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <PartyPopper
                  size={21}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#DFAE45]">
                  {isHindi
                    ? "इनके लिए परफेक्ट"
                    : "Perfect For"}
                </p>

                <h3 className="text-[17px] font-bold">
                  {isHindi
                    ? "हर सेलिब्रेशन"
                    : "Every Celebration"}
                </h3>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {occasions.map((occasion) => (
                <div
                  key={occasion.en}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-3 py-3"
                >
                  <CheckCircle2
                    size={14}
                    className="text-[#DFAE45]"
                  />

                  <span className="text-[11px] text-white/70">
                    {occasion[language]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="px-5 pt-7">
          <div className="rounded-[22px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 to-transparent p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]">
                <ShieldCheck
                  size={20}
                  className="text-black"
                />
              </div>

              <div>
                <h3 className="text-[15px] font-bold">
                  {isHindi
                    ? "भरोसे के साथ बुक करें"
                    : "Book with confidence"}
                </h3>

                <p className="mt-1.5 text-[11px] leading-5 text-white/55">
                  {isHindi
                    ? "OurHub आपके कैरेक्टर एंटरटेनमेंट कोऑर्डिनेट करता है ताकि आप अपनी सेलिब्रेशन का पूरा आनंद ले सकें।"
                    : "OurHub coordinates your character entertainment so you can focus on enjoying your celebration."}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
              <Zap
                size={15}
                className="text-[#DFAE45]"
              />

              <span className="text-[11px] font-medium text-white/70">
                {isHindi
                  ? "त्वरित कन्फर्मेशन • प्रोफेशनल सर्विस • डेडिकेटेड सपोर्ट"
                  : "Quick confirmation • Professional service • Dedicated support"}
              </span>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-5 pt-8">
          <div className="relative overflow-hidden rounded-[24px] border border-[#DFAE45]/30 bg-[#0A1421] p-5">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-2xl" />

            <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DFAE45]">
              {isHindi
                ? "सेलिब्रेशन के लिए तैयार?"
                : "Ready to celebrate?"}
            </p>

            <h2 className="relative mt-2 text-[23px] font-extrabold leading-tight">
              {isHindi ? (
                <>
                  गोरिल्ला को
                  <br />
                  अपने इवेंट में लाएं।
                </>
              ) : (
                <>
                  Bring the Gorilla
                  <br />
                  to your event.
                </>
              )}
            </h2>

            <p className="relative mt-2 text-[12px] leading-5 text-white/50">
              {isHindi
                ? "अपना पैकेज चुनें और एंटरटेनमेंट की जिम्मेदारी OurHub को दें।"
                : "Choose your package and let OurHub handle the entertainment."}
            </p>

            <button
              type="button"
              onClick={() => goToBooking()}
              className="relative mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#DFAE45] text-sm font-extrabold text-black active:scale-[0.98]"
            >
              <PartyPopper size={17} />

              {isHindi
                ? "गोरिल्ला कैरेक्टर बुक करें"
                : "Book Gorilla Character"}
            </button>
          </div>
        </section>

        {/* Contact */}
        <section className="px-5 pt-5">
          <div className="flex items-center justify-center gap-2 text-center text-[11px] text-white/40">
            <Phone
              size={13}
              className="shrink-0 text-[#DFAE45]"
            />

            {isHindi
              ? "मदद चाहिए? OurHub इवेंट सपोर्ट आपकी बुकिंग के लिए उपलब्ध है।"
              : "Need help? OurHub event support is available for your booking."}
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-[430px] -translate-x-1/2 border-t border-white/10 bg-[#050B14]/95 px-4 py-3 backdrop-blur-xl">
          <Link
            href="/"
            className="flex flex-1 flex-col items-center gap-1 text-white/45"
          >
            <span className="text-[18px]">
              ⌂
            </span>

            <span className="text-[9px]">
              {isHindi ? "होम" : "Home"}
            </span>
          </Link>

          <Link
            href="/eventManagement"
            className="flex flex-1 flex-col items-center gap-1 text-[#DFAE45]"
          >
            <PartyPopper size={19} />

            <span className="text-[9px] font-semibold">
              {isHindi ? "इवेंट्स" : "Events"}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => goToBooking()}
            className="flex flex-1 flex-col items-center gap-1 text-white/45"
          >
            <CalendarDaysIcon />

            <span className="text-[9px]">
              {isHindi ? "बुक करें" : "Book"}
            </span>
          </button>

          <Link
            href="/profile"
            className="flex flex-1 flex-col items-center gap-1 text-white/45"
          >
            <span className="text-[18px]">
              ◯
            </span>

            <span className="text-[9px]">
              {isHindi ? "प्रोफाइल" : "Profile"}
            </span>
          </Link>
        </nav>
      </div>
    </main>
  );
}

function CalendarDaysIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect
        width="18"
        height="18"
        x="3"
        y="4"
        rx="2"
      />
      <path d="M3 10h18" />
    </svg>
  );
}