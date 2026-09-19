"use client";

import {
  Suspense,
  useMemo,
  useState,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
  UserRound,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

type Localized = {
  en: string;
  hi: string;
};

const packages = {
  "Mini Appearance": {
    title: {
      en: "Mini Appearance",
      hi: "मिनी अपीयरेंस",
    },
    duration: {
      en: "30 Minutes",
      hi: "30 मिनट",
    },
    price: 1499,
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

  "Fun Celebration": {
    title: {
      en: "Fun Celebration",
      hi: "फन सेलिब्रेशन",
    },
    duration: {
      en: "60 Minutes",
      hi: "60 मिनट",
    },
    price: 2499,
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

  "Full Entertainment": {
    title: {
      en: "Full Entertainment",
      hi: "फुल एंटरटेनमेंट",
    },
    duration: {
      en: "90 Minutes",
      hi: "90 मिनट",
    },
    price: 3999,
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
} as const;

type PackageName = keyof typeof packages;

const eventTypes: Localized[] = [
  {
    en: "Birthday Party",
    hi: "बर्थडे पार्टी",
  },
  {
    en: "Wedding Function",
    hi: "वेडिंग फंक्शन",
  },
  {
    en: "Corporate Event",
    hi: "कॉर्पोरेट इवेंट",
  },
  {
    en: "Other Celebration",
    hi: "अन्य सेलिब्रेशन",
  },
];

const locations: Localized[] = [
  {
    en: "Ujjain",
    hi: "उज्जैन",
  },
  {
    en: "Indore",
    hi: "इंदौर",
  },
  {
    en: "Ratlam",
    hi: "रतलाम",
  },
  {
    en: "Other Location",
    hi: "अन्य लोकेशन",
  },
];

function GorillaBookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const packageParam =
    searchParams.get("package") || "Fun Celebration";

  const selectedPackage: PackageName =
    packageParam in packages
      ? (packageParam as PackageName)
      : "Fun Celebration";

  const packageData = packages[selectedPackage];

  const [guestCount, setGuestCount] = useState(30);

  const [eventType, setEventType] =
    useState("Birthday Party");

  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [location, setLocation] = useState("Ujjain");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [notes, setNotes] = useState("");

  const [showPackages, setShowPackages] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] = useState("");

  const formattedPrice = useMemo(() => {
    return packageData.price.toLocaleString("en-IN");
  }, [packageData.price]);

  const localizedEventType =
    eventTypes.find(
      (item) => item.en === eventType
    )?.[language] || eventType;

  const localizedLocation =
    locations.find(
      (item) => item.en === location
    )?.[language] || location;

  const changePackage = (
    packageName: PackageName
  ) => {
    setShowPackages(false);

    router.push(
      `/eventManagement/characters/gorilla/book?package=${encodeURIComponent(
        packageName
      )}`
    );
  };

  const buildWhatsAppMessage = () => {
    if (isHindi) {
      return `
*OURHUB इवेंट बुकिंग रिक्वेस्ट*

🎭 *कैरेक्टर:* गोरिल्ला कैरेक्टर

📦 *पैकेज:* ${packageData.title.hi}
⏱️ *अवधि:* ${packageData.duration.hi}
💰 *शुरुआती कीमत:* ₹${packageData.price.toLocaleString(
        "en-IN"
      )}

🎉 *इवेंट प्रकार:* ${localizedEventType}
📅 *इवेंट तारीख:* ${eventDate}
⏰ *इवेंट समय:* ${eventTime}
📍 *इवेंट लोकेशन:* ${localizedLocation}
👥 *अनुमानित मेहमान:* ${guestCount}

👤 *कस्टमर डिटेल्स*
नाम: ${name.trim()}
मोबाइल: +91 ${mobile}

📝 *विशेष आवश्यकताएं:*
${notes.trim() || "कोई विशेष आवश्यकता नहीं"}

कृपया इस बुकिंग को कन्फर्म करने के लिए मुझसे संपर्क करें।

धन्यवाद,
*OurHub Services*
`;
    }

    return `
*OURHUB EVENT BOOKING REQUEST*

🎭 *Character:* Gorilla Character

📦 *Package:* ${packageData.title.en}
⏱️ *Duration:* ${packageData.duration.en}
💰 *Starting Price:* ₹${packageData.price.toLocaleString(
      "en-IN"
    )}

🎉 *Event Type:* ${eventType}
📅 *Event Date:* ${eventDate}
⏰ *Event Time:* ${eventTime}
📍 *Event Location:* ${location}
👥 *Expected Guests:* ${guestCount}

👤 *Customer Details*
Name: ${name.trim()}
Mobile: +91 ${mobile}

📝 *Special Requirements:*
${notes.trim() || "None"}

Please contact me to confirm this booking.

Thank you,
*OurHub Services*
`;
  };

  const openWhatsApp = () => {
    const message = buildWhatsAppMessage();

    const whatsappUrl =
      `https://wa.me/918878632431?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    if (
      !name.trim() ||
      !mobile.trim() ||
      !eventDate ||
      !eventTime ||
      !location
    ) {
      setError(
        isHindi
          ? "कृपया सभी जरूरी बुकिंग जानकारी पूरी करें।"
          : "Please complete all required booking details."
      );
      return;
    }

    if (mobile.length !== 10) {
      setError(
        isHindi
          ? "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।"
          : "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    setSubmitted(true);

    openWhatsApp();
  };

  /* --------------------------------------------------
     SUCCESS SCREEN
  -------------------------------------------------- */

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#050B14] text-white">
        <div className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center px-5">
          <div className="w-full rounded-[28px] border border-[#DFAE45]/25 bg-[#09121E] p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

            {/* Success Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10">
              <CheckCircle2
                size={42}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.28em] text-[#DFAE45]">
              {isHindi
                ? "बुकिंग रिक्वेस्ट"
                : "Booking Request"}
            </p>

            <h1 className="mt-2 text-[27px] font-extrabold tracking-tight">
              {isHindi
                ? "रिक्वेस्ट तैयार है"
                : "Request Ready"}
            </h1>

            <p className="mx-auto mt-3 max-w-[320px] text-[13px] leading-6 text-white/50">
              {isHindi
                ? "आपकी बुकिंग डिटेल्स तैयार हैं। WhatsApp खोला गया है ताकि आप यह रिक्वेस्ट सीधे OurHub टीम को भेज सकें।"
                : "Your booking details are ready. WhatsApp has been opened so you can send the request directly to the OurHub team."}
            </p>

            {/* Summary */}
            <div className="mt-7 rounded-2xl border border-white/[0.08] bg-black/20 p-4 text-left">

              <SummaryRow
                label={
                  isHindi
                    ? "पैकेज"
                    : "Package"
                }
                value={
                  packageData.title[language]
                }
              />

              <div className="mt-3">
                <SummaryRow
                  label={
                    isHindi
                      ? "अवधि"
                      : "Duration"
                  }
                  value={
                    packageData.duration[
                      language
                    ]
                  }
                />
              </div>

              <div className="mt-3">
                <SummaryRow
                  label={
                    isHindi
                      ? "इवेंट"
                      : "Event"
                  }
                  value={
                    localizedEventType
                  }
                />
              </div>

              <div className="mt-3">
                <SummaryRow
                  label={
                    isHindi
                      ? "मेहमान"
                      : "Guests"
                  }
                  value={`${guestCount}`}
                />
              </div>

              <div className="mt-3">
                <SummaryRow
                  label={
                    isHindi
                      ? "लोकेशन"
                      : "Location"
                  }
                  value={
                    localizedLocation
                  }
                />
              </div>

              <div className="my-4 h-px bg-white/[0.08]" />

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-white/35">
                    {isHindi
                      ? "शुरुआती कीमत"
                      : "Starting Price"}
                  </p>

                  <p className="mt-1 text-xl font-extrabold text-[#DFAE45]">
                    ₹{formattedPrice}
                  </p>
                </div>

                <MessageCircle
                  size={20}
                  className="mb-1 text-[#DFAE45]"
                />
              </div>
            </div>

            {/* WhatsApp Again */}
            <button
              type="button"
              onClick={openWhatsApp}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#DFAE45] text-sm font-extrabold text-black shadow-[0_12px_30px_rgba(223,174,69,0.15)] active:scale-[0.98]"
            >
              <MessageCircle size={18} />

              {isHindi
                ? "WhatsApp खोलें"
                : "Open WhatsApp"}
            </button>

            <button
              type="button"
              onClick={() =>
                setSubmitted(false)
              }
              className="mt-3 h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] text-xs font-semibold text-white/65 active:scale-[0.98]"
            >
              {isHindi
                ? "बुकिंग एडिट करें"
                : "Edit Booking"}
            </button>

            <button
              type="button"
              onClick={() =>
                router.push(
                  "/eventManagement"
                )
              }
              className="mt-3 h-11 w-full text-xs font-semibold text-[#DFAE45]"
            >
              {isHindi
                ? "इवेंट मैनेजमेंट पर वापस जाएं"
                : "Back to Event Management"}
            </button>
          </div>
        </div>
      </main>
    );
  }

  /* --------------------------------------------------
     MAIN BOOKING PAGE
  -------------------------------------------------- */

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#050B14] pb-8">

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050B14]/90 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">

            <button
              type="button"
              onClick={() => router.back()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition active:scale-95"
              aria-label={
                isHindi
                  ? "वापस जाएं"
                  : "Go back"
              }
            >
              <ArrowLeft size={20} />
            </button>

            <div className="text-center">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#DFAE45]">
                OurHub Events
              </p>

              <h1 className="mt-0.5 text-[16px] font-bold">
                {isHindi
                  ? "गोरिल्ला कैरेक्टर बुक करें"
                  : "Book Gorilla Character"}
              </h1>
            </div>

            <div className="h-10 w-10" />
          </div>
        </header>

        {/* Progress */}
        <section className="px-5 pt-5">
          <div className="flex items-center gap-2">

            <div className="flex flex-1 items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DFAE45] text-[11px] font-extrabold text-black">
                1
              </div>

              <div className="h-[2px] flex-1 bg-[#DFAE45]/50" />
            </div>

            <div className="flex flex-1 items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/40 bg-[#DFAE45]/10 text-[11px] font-bold text-[#DFAE45]">
                2
              </div>

              <div className="h-[2px] flex-1 bg-white/10" />
            </div>

            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[11px] text-white/35">
              3
            </div>
          </div>

          <div className="mt-2 flex justify-between text-[9px] text-white/40">
            <span className="text-[#DFAE45]">
              {isHindi
                ? "इवेंट डिटेल्स"
                : "Event Details"}
            </span>

            <span>
              {isHindi
                ? "कॉन्टैक्ट"
                : "Contact"}
            </span>

            <span>
              {isHindi
                ? "कन्फर्म"
                : "Confirm"}
            </span>
          </div>
        </section>

        {/* Hero Summary */}
        <section className="px-5 pt-6">
          <div className="relative overflow-hidden rounded-[24px] border border-[#DFAE45]/25 bg-[#09121E]">

            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative flex gap-4 p-4">

              <div className="h-[92px] w-[92px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <img
                  src="/images/events/gorilla.jpg"
                  alt={
                    isHindi
                      ? "गोरिल्ला कैरेक्टर"
                      : "Gorilla Character"
                  }
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "/images/events/funny-character.jpg";
                  }}
                />
              </div>

              <div className="min-w-0 flex-1">

                <div className="flex items-center gap-1.5">
                  <Sparkles
                    size={13}
                    className="text-[#DFAE45]"
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                    {isHindi
                      ? "कैरेक्टर एंटरटेनमेंट"
                      : "Character Entertainment"}
                  </span>
                </div>

                <h2 className="mt-1 text-[18px] font-extrabold">
                  {isHindi
                    ? "गोरिल्ला कैरेक्टर"
                    : "Gorilla Character"}
                </h2>

                <div className="mt-2 flex items-center gap-2">
                  <Clock3
                    size={13}
                    className="text-white/40"
                  />

                  <span className="text-[10px] text-white/55">
                    {
                      packageData.duration[
                        language
                      ]
                    }
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[18px] font-extrabold text-[#DFAE45]">
                    ₹{formattedPrice}
                  </span>

                  <span className="text-[9px] text-white/35">
                    {isHindi
                      ? "से शुरू"
                      : "starting"}
                  </span>
                </div>
              </div>
            </div>

            {/* Selected Package */}
            <button
              type="button"
              onClick={() =>
                setShowPackages(
                  !showPackages
                )
              }
              className="flex w-full items-center justify-between border-t border-white/10 px-4 py-3.5 text-left"
            >
              <div>
                <p className="text-[9px] uppercase tracking-wider text-white/35">
                  {isHindi
                    ? "चयनित पैकेज"
                    : "Selected Package"}
                </p>

                <p className="mt-0.5 text-xs font-bold text-[#DFAE45]">
                  {
                    packageData.title[
                      language
                    ]
                  }
                </p>
              </div>

              <ChevronDown
                size={17}
                className={`text-white/50 transition ${
                  showPackages
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {/* Package Selector */}
            {showPackages && (
              <div className="border-t border-white/10 p-3">
                {(
                  Object.keys(
                    packages
                  ) as PackageName[]
                ).map((packageName) => {
                  const item =
                    packages[
                      packageName
                    ];

                  const active =
                    packageName ===
                    selectedPackage;

                  return (
                    <button
                      type="button"
                      key={packageName}
                      onClick={() =>
                        changePackage(
                          packageName
                        )
                      }
                      className={`mb-2 flex w-full items-center justify-between rounded-xl border p-3 text-left transition last:mb-0 ${
                        active
                          ? "border-[#DFAE45]/40 bg-[#DFAE45]/10"
                          : "border-white/10 bg-white/[0.025]"
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-bold">
                          {
                            item.title[
                              language
                            ]
                          }
                        </p>

                        <p className="mt-1 text-[10px] text-white/40">
                          {
                            item.duration[
                              language
                            ]
                          }
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-extrabold text-[#DFAE45]">
                          ₹
                          {item.price.toLocaleString(
                            "en-IN"
                          )}
                        </p>

                        {active && (
                          <Check
                            size={14}
                            className="ml-auto mt-1 text-[#DFAE45]"
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="pb-4"
        >

          {/* Event Details */}
          <section className="px-5 pt-7">

            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
                {isHindi
                  ? "स्टेप 01"
                  : "Step 01"}
              </p>

              <h2 className="mt-1 text-[21px] font-extrabold">
                {isHindi
                  ? "अपने इवेंट के बारे में बताएं"
                  : "Tell us about your event"}
              </h2>
            </div>

            {/* Event Type */}
            <div>
              <label className="mb-2 block text-[11px] font-semibold text-white/60">
                {isHindi
                  ? "इवेंट प्रकार"
                  : "Event Type"}
              </label>

              <div className="grid grid-cols-2 gap-2">
                {eventTypes.map((type) => {
                  const active =
                    eventType ===
                    type.en;

                  return (
                    <button
                      type="button"
                      key={type.en}
                      onClick={() =>
                        setEventType(
                          type.en
                        )
                      }
                      className={`rounded-xl border px-3 py-3 text-left text-[11px] font-semibold transition active:scale-[0.98] ${
                        active
                          ? "border-[#DFAE45]/50 bg-[#DFAE45]/10 text-[#DFAE45]"
                          : "border-white/10 bg-white/[0.03] text-white/55"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span>
                          {
                            type[
                              language
                            ]
                          }
                        </span>

                        {active && (
                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-[#DFAE45]"
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date + Time */}
            <div className="mt-5 grid grid-cols-2 gap-3">

              <div>
                <label
                  htmlFor="eventDate"
                  className="mb-2 block text-[11px] font-semibold text-white/60"
                >
                  {isHindi
                    ? "इवेंट तारीख"
                    : "Event Date"}
                </label>

                <div className="relative">
                  <CalendarDays
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#DFAE45]"
                  />

                  <input
                    id="eventDate"
                    type="date"
                    value={eventDate}
                    onChange={(e) =>
                      setEventDate(
                        e.target.value
                      )
                    }
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] pl-10 pr-2 text-xs text-white outline-none focus:border-[#DFAE45]/50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="eventTime"
                  className="mb-2 block text-[11px] font-semibold text-white/60"
                >
                  {isHindi
                    ? "इवेंट समय"
                    : "Event Time"}
                </label>

                <div className="relative">
                  <Clock3
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#DFAE45]"
                  />

                  <input
                    id="eventTime"
                    type="time"
                    value={eventTime}
                    onChange={(e) =>
                      setEventTime(
                        e.target.value
                      )
                    }
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] pl-10 pr-2 text-xs text-white outline-none focus:border-[#DFAE45]/50"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mt-5">
              <label
                htmlFor="location"
                className="mb-2 block text-[11px] font-semibold text-white/60"
              >
                {isHindi
                  ? "इवेंट लोकेशन"
                  : "Event Location"}
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#DFAE45]"
                />

                <select
                  id="location"
                  value={location}
                  onChange={(e) =>
                    setLocation(
                      e.target.value
                    )
                  }
                  className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-white/[0.035] pl-10 pr-10 text-xs text-white outline-none focus:border-[#DFAE45]/50"
                >
                  <option
                    value="Ujjain"
                    className="bg-[#09121E]"
                  >
                    {isHindi
                      ? "उज्जैन"
                      : "Ujjain"}
                  </option>

                  <option
                    value="Indore"
                    className="bg-[#09121E]"
                  >
                    {isHindi
                      ? "इंदौर"
                      : "Indore"}
                  </option>

                  <option
                    value="Ratlam"
                    className="bg-[#09121E]"
                  >
                    {isHindi
                      ? "रतलाम"
                      : "Ratlam"}
                  </option>

                  <option
                    value="Other"
                    className="bg-[#09121E]"
                  >
                    {isHindi
                      ? "अन्य लोकेशन"
                      : "Other Location"}
                  </option>
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between">
                <label className="text-[11px] font-semibold text-white/60">
                  {isHindi
                    ? "अनुमानित मेहमान"
                    : "Expected Guests"}
                </label>

                <span className="text-[10px] text-white/35">
                  {isHindi
                    ? "लगभग संख्या"
                    : "Approximate count"}
                </span>
              </div>

              <div className="flex h-14 items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-3">

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#DFAE45]/10">
                    <Users
                      size={17}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] text-white/35">
                      {isHindi
                        ? "मेहमान"
                        : "Guests"}
                    </p>

                    <p className="text-sm font-bold">
                      {guestCount}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    onClick={() =>
                      setGuestCount(
                        Math.max(
                          1,
                          guestCount - 5
                        )
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] active:scale-95"
                    aria-label={
                      isHindi
                        ? "मेहमान कम करें"
                        : "Decrease guests"
                    }
                  >
                    <Minus size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setGuestCount(
                        guestCount + 5
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#DFAE45]/30 bg-[#DFAE45]/10 active:scale-95"
                    aria-label={
                      isHindi
                        ? "मेहमान बढ़ाएं"
                        : "Increase guests"
                    }
                  >
                    <Plus
                      size={14}
                      className="text-[#DFAE45]"
                    />
                  </button>

                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="px-5 pt-8">

            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
                {isHindi
                  ? "स्टेप 02"
                  : "Step 02"}
              </p>

              <h2 className="mt-1 text-[21px] font-extrabold">
                {isHindi
                  ? "आपकी कॉन्टैक्ट डिटेल्स"
                  : "Your contact details"}
              </h2>

              <p className="mt-1 text-[11px] text-white/40">
                {isHindi
                  ? "आपकी बुकिंग कन्फर्म करने के लिए हम इन डिटेल्स का उपयोग करेंगे।"
                  : "We'll use these details to confirm your booking."}
              </p>
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[11px] font-semibold text-white/60"
              >
                {isHindi
                  ? "पूरा नाम"
                  : "Full Name"}
              </label>

              <div className="relative">
                <UserRound
                  size={17}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#DFAE45]"
                />

                <input
                  id="name"
                  type="text"
                  placeholder={
                    isHindi
                      ? "अपना नाम दर्ज करें"
                      : "Enter your name"
                  }
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] pl-10 pr-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#DFAE45]/50"
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="mt-4">
              <label
                htmlFor="mobile"
                className="mb-2 block text-[11px] font-semibold text-white/60"
              >
                {isHindi
                  ? "मोबाइल नंबर"
                  : "Mobile Number"}
              </label>

              <div className="flex h-12 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] focus-within:border-[#DFAE45]/50">

                <div className="flex items-center gap-1 border-r border-white/10 px-3">
                  <Phone
                    size={15}
                    className="text-[#DFAE45]"
                  />

                  <span className="text-xs font-semibold">
                    +91
                  </span>
                </div>

                <input
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder={
                    isHindi
                      ? "मोबाइल नंबर दर्ज करें"
                      : "Enter mobile number"
                  }
                  value={mobile}
                  onChange={(e) =>
                    setMobile(
                      e.target.value
                        .replace(/\D/g, "")
                        .slice(
                          0,
                          10
                        )
                    )
                  }
                  required
                  className="min-w-0 flex-1 bg-transparent px-3 text-xs text-white outline-none placeholder:text-white/25"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="mt-4">
              <label
                htmlFor="notes"
                className="mb-2 block text-[11px] font-semibold text-white/60"
              >
                {isHindi
                  ? "विशेष आवश्यकताएं"
                  : "Special Requirements"}

                <span className="ml-1 text-white/25">
                  {isHindi
                    ? "(वैकल्पिक)"
                    : "(Optional)"}
                </span>
              </label>

              <textarea
                id="notes"
                rows={4}
                value={notes}
                onChange={(e) =>
                  setNotes(
                    e.target.value
                  )
                }
                placeholder={
                  isHindi
                    ? "अपने इवेंट के बारे में कोई खास जानकारी बताएं..."
                    : "Tell us anything special about your event..."
                }
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] p-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#DFAE45]/50"
              />
            </div>
          </section>

          {/* Booking Summary */}
          <section className="px-5 pt-8">
            <div className="rounded-[22px] border border-[#DFAE45]/25 bg-gradient-to-br from-[#DFAE45]/10 to-transparent p-5">

              <div className="flex items-center gap-2">
                <Sparkles
                  size={16}
                  className="text-[#DFAE45]"
                />

                <h2 className="text-[15px] font-bold">
                  {isHindi
                    ? "बुकिंग सारांश"
                    : "Booking Summary"}
                </h2>
              </div>

              <div className="mt-5 space-y-3">

                <SummaryRow
                  label={
                    isHindi
                      ? "कैरेक्टर"
                      : "Character"
                  }
                  value={
                    isHindi
                      ? "गोरिल्ला कैरेक्टर"
                      : "Gorilla Character"
                  }
                />

                <SummaryRow
                  label={
                    isHindi
                      ? "पैकेज"
                      : "Package"
                  }
                  value={
                    packageData.title[
                      language
                    ]
                  }
                />

                <SummaryRow
                  label={
                    isHindi
                      ? "अवधि"
                      : "Duration"
                  }
                  value={
                    packageData.duration[
                      language
                    ]
                  }
                />

                <SummaryRow
                  label={
                    isHindi
                      ? "इवेंट"
                      : "Event"
                  }
                  value={
                    localizedEventType
                  }
                />

                <SummaryRow
                  label={
                    isHindi
                      ? "मेहमान"
                      : "Guests"
                  }
                  value={`${guestCount}`}
                />

                <SummaryRow
                  label={
                    isHindi
                      ? "लोकेशन"
                      : "Location"
                  }
                  value={
                    localizedLocation
                  }
                />

                <div className="my-2 h-px bg-white/10" />

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <p className="text-[10px] text-white/40">
                      {isHindi
                        ? "अनुमानित शुरुआती कीमत"
                        : "Estimated starting price"}
                    </p>

                    <p className="mt-1 text-[25px] font-extrabold text-[#DFAE45]">
                      ₹{formattedPrice}
                    </p>
                  </div>

                  <span className="mb-1 text-right text-[9px] text-white/30">
                    {isHindi
                      ? "अंतिम कीमत अलग हो सकती है"
                      : "Final price may vary"}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Trust */}
          <section className="px-5 pt-5">
            <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DFAE45]/10">
                <ShieldCheck
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[12px] font-bold">
                  {isHindi
                    ? "सिक्योर और पारदर्शी बुकिंग"
                    : "Secure & transparent booking"}
                </p>

                <p className="mt-1 text-[10px] leading-4 text-white/40">
                  {isHindi
                    ? "आपकी बुकिंग रिक्वेस्ट OurHub इवेंट सपोर्ट टीम द्वारा संभाली जाती है। कोई छिपा हुआ बुकिंग चार्ज नहीं।"
                    : "Your booking request is handled by the OurHub event support team. No hidden booking charges."}
                </p>
              </div>
            </div>
          </section>

          {/* Error */}
          {error && (
            <section className="px-5 pt-4">
              <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-center text-[11px] font-semibold text-red-300">
                {error}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="px-5 pt-6">

            <button
              type="submit"
              className="flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-sm font-extrabold text-black shadow-[0_12px_35px_rgba(223,174,69,0.15)] transition active:scale-[0.98]"
            >
              <MessageCircle size={18} />

              {isHindi
                ? "बुकिंग रिक्वेस्ट भेजें"
                : "Request Booking"}
            </button>

            <p className="mt-3 text-center text-[9px] leading-4 text-white/30">
              {isHindi
                ? "आपकी डिटेल्स पहले से भरे हुए WhatsApp मैसेज के साथ खुलेंगी।"
                : "Your request will open WhatsApp with your booking details pre-filled."}
            </p>
          </section>
        </form>

        {/* Help */}
        <section className="px-5 pb-8 pt-6">
          <a
            href="tel:+918878632431"
            className="flex items-center justify-center gap-2 text-[10px] text-white/35"
          >
            <Phone
              size={13}
              className="text-[#DFAE45]"
            />

            {isHindi
              ? "बुकिंग में मदद चाहिए?"
              : "Need help with your booking?"}
          </a>
        </section>
      </div>
    </main>
  );
}

/* --------------------------------------------------
   SUSPENSE WRAPPER
   This fixes the Next.js useSearchParams build error.
-------------------------------------------------- */

export default function GorillaBookingPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#050B14] text-white">
          <div className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center px-5">
            <div className="text-center">

              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#DFAE45]" />

              <p className="mt-4 text-xs font-semibold text-white/45">
                Loading booking...
              </p>
            </div>
          </div>
        </main>
      }
    >
      <GorillaBookingContent />
    </Suspense>
  );
}

/* --------------------------------------------------
   SUMMARY ROW
-------------------------------------------------- */

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-[11px] text-white/45">
        {label}
      </span>

      <span className="max-w-[220px] text-right text-[11px] font-bold text-white">
        {value}
      </span>
    </div>
  );
}