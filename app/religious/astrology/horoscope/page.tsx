"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

interface ZodiacSign {
  id: string;
  name: string;
  hindi: string;
  symbol: string;
  date: string;
}

const zodiacSigns: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    hindi: "मेष",
    symbol: "♈",
    date: "Mar 21 – Apr 19",
  },
  {
    id: "taurus",
    name: "Taurus",
    hindi: "वृषभ",
    symbol: "♉",
    date: "Apr 20 – May 20",
  },
  {
    id: "gemini",
    name: "Gemini",
    hindi: "मिथुन",
    symbol: "♊",
    date: "May 21 – Jun 20",
  },
  {
    id: "cancer",
    name: "Cancer",
    hindi: "कर्क",
    symbol: "♋",
    date: "Jun 21 – Jul 22",
  },
  {
    id: "leo",
    name: "Leo",
    hindi: "सिंह",
    symbol: "♌",
    date: "Jul 23 – Aug 22",
  },
  {
    id: "virgo",
    name: "Virgo",
    hindi: "कन्या",
    symbol: "♍",
    date: "Aug 23 – Sep 22",
  },
  {
    id: "libra",
    name: "Libra",
    hindi: "तुला",
    symbol: "♎",
    date: "Sep 23 – Oct 22",
  },
  {
    id: "scorpio",
    name: "Scorpio",
    hindi: "वृश्चिक",
    symbol: "♏",
    date: "Oct 23 – Nov 21",
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    hindi: "धनु",
    symbol: "♐",
    date: "Nov 22 – Dec 21",
  },
  {
    id: "capricorn",
    name: "Capricorn",
    hindi: "मकर",
    symbol: "♑",
    date: "Dec 22 – Jan 19",
  },
  {
    id: "aquarius",
    name: "Aquarius",
    hindi: "कुंभ",
    symbol: "♒",
    date: "Jan 20 – Feb 18",
  },
  {
    id: "pisces",
    name: "Pisces",
    hindi: "मीन",
    symbol: "♓",
    date: "Feb 19 – Mar 20",
  },
];

const horoscopeData: Record<
  string,
  {
    overview: string;
    love: string;
    career: string;
    money: string;
    health: string;
  }
> = {
  aries: {
    overview:
      "आज आपके लिए नई शुरुआत और आत्मविश्वास का दिन है। रुके हुए कार्यों में गति आ सकती है।",
    love:
      "रिश्तों में खुलकर बातचीत करने से गलतफहमियां दूर होंगी। अविवाहित लोगों के लिए नया connection बन सकता है।",
    career:
      "काम में आपकी leadership दिखाई देगी। किसी महत्वपूर्ण project में जिम्मेदारी मिल सकती है।",
    money:
      "आर्थिक स्थिति सामान्य से बेहतर रह सकती है। अनावश्यक खर्चों से बचें।",
    health:
      "ऊर्जा अच्छी रहेगी। पर्याप्त आराम और पानी का ध्यान रखें।",
  },

  taurus: {
    overview:
      "आज धैर्य और practical सोच आपके लिए लाभदायक रहेगी। महत्वपूर्ण निर्णय सोच-समझकर लें।",
    love:
      "Partner के साथ भावनात्मक connection मजबूत होगा। परिवार का सहयोग मिल सकता है।",
    career:
      "काम में consistency बनाए रखें। पुराने प्रयासों का परिणाम मिल सकता है।",
    money:
      "बजट बनाकर चलना बेहतर रहेगा। अचानक खर्च हो सकता है।",
    health:
      "रूटीन और खान-पान पर ध्यान देना लाभदायक रहेगा।",
  },

  gemini: {
    overview:
      "आज communication आपकी सबसे बड़ी ताकत रहेगी। नए लोगों से संपर्क बढ़ सकता है।",
    love:
      "बातचीत से रिश्ते बेहतर होंगे। Partner की भावनाओं को समझने की कोशिश करें।",
    career:
      "नई ideas को सामने रखने का अच्छा समय है। Networking से लाभ मिल सकता है।",
    money:
      "निवेश से पहले पूरी जानकारी लें। जल्दबाजी से बचें।",
    health:
      "मानसिक तनाव कम करने के लिए थोड़ा समय स्वयं के लिए निकालें।",
  },

  cancer: {
    overview:
      "आज भावनात्मक रूप से आप मजबूत रहेंगे। परिवार से जुड़ा कोई अच्छा समाचार मिल सकता है।",
    love:
      "रिश्तों में warmth और understanding बढ़ेगी।",
    career:
      "काम में patience रखें। धीरे-धीरे अच्छे परिणाम मिलेंगे।",
    money:
      "बचत पर ध्यान देना आपके लिए अच्छा रहेगा।",
    health:
      "नींद और आराम को प्राथमिकता दें।",
  },

  leo: {
    overview:
      "आज confidence और creativity आपके पक्ष में रहेंगे। लोग आपकी बात को महत्व देंगे।",
    love:
      "रिश्तों में positivity रहेगी। Partner के साथ quality time बिताएं।",
    career:
      "Leadership opportunity मिल सकती है। अपने काम को confidently present करें।",
    money:
      "आय के नए अवसर सामने आ सकते हैं।",
    health:
      "Energy अच्छी रहेगी लेकिन overwork से बचें।",
  },

  virgo: {
    overview:
      "आज planning और organization से आपको लाभ मिलेगा। छोटी details पर ध्यान दें।",
    love:
      "रिश्तों में clarity आएगी। पुराने मतभेद खत्म हो सकते हैं।",
    career:
      "Pending tasks पूरे करने का अच्छा समय है।",
    money:
      "Financial planning मजबूत करने का दिन है।",
    health:
      "Routine बनाए रखना फायदेमंद रहेगा।",
  },

  libra: {
    overview:
      "आज balance और harmony आपके लिए महत्वपूर्ण रहेगी। किसी निर्णय में दूसरों की राय भी सुनें।",
    love:
      "Partner के साथ अच्छा समय बीतेगा। रिश्ते में समझ बढ़ेगी।",
    career:
      "Teamwork से अच्छे परिणाम मिलेंगे।",
    money:
      "खर्च और बचत के बीच संतुलन बनाए रखें।",
    health:
      "तनाव कम रखने की कोशिश करें।",
  },

  scorpio: {
    overview:
      "आज आपकी intuition मजबूत रहेगी। किसी महत्वपूर्ण मामले में अंदर की आवाज पर ध्यान दें।",
    love:
      "भावनाएं गहरी रहेंगी। ईमानदार बातचीत रिश्ते को मजबूत करेगी।",
    career:
      "Concentration अच्छा रहेगा और मुश्किल काम पूरे हो सकते हैं।",
    money:
      "Financial decisions में जल्दबाजी न करें।",
    health:
      "आराम और hydration पर ध्यान दें।",
  },

  sagittarius: {
    overview:
      "आज नए अनुभव और opportunities आपका इंतजार कर रहे हैं। सकारात्मक सोच बनाए रखें।",
    love:
      "रिश्तों में excitement और positivity रहेगी।",
    career:
      "नई opportunity या learning का मौका मिल सकता है।",
    money:
      "आर्थिक स्थिति stable रहेगी लेकिन impulsive spending से बचें।",
    health:
      "Outdoor activity आपके लिए अच्छी रहेगी।",
  },

  capricorn: {
    overview:
      "आज मेहनत और discipline से अच्छे परिणाम मिलेंगे। अपने लक्ष्य पर focus रखें।",
    love:
      "Partner का support मिलेगा। भावनाओं को express करने से रिश्ता बेहतर होगा।",
    career:
      "Career में progress के संकेत हैं।",
    money:
      "Long-term planning आपके लिए बेहतर रहेगी।",
    health:
      "काम के साथ आराम का संतुलन रखें।",
  },

  aquarius: {
    overview:
      "आज creative ideas और नई सोच आपको आगे ले जा सकती है।",
    love:
      "रिश्ते में openness रखें। Single लोगों की किसी नए व्यक्ति से मुलाकात हो सकती है।",
    career:
      "नई technology या skill सीखना लाभदायक रहेगा।",
    money:
      "अचानक financial opportunity मिल सकती है।",
    health:
      "अपने daily routine को balanced रखें।",
  },

  pisces: {
    overview:
      "आज intuition और creativity मजबूत रहेगी। अपनी प्राथमिकताओं पर ध्यान दें।",
    love:
      "भावनात्मक connection अच्छा रहेगा। Partner के साथ समझ बढ़ेगी।",
    career:
      "Creative कामों में अच्छे results मिल सकते हैं।",
    money:
      "बजट पर ध्यान दें और unnecessary purchases avoid करें।",
    health:
      "Meditation और पर्याप्त आराम मददगार रहेगा।",
  },
};

export default function RashifalPage() {
  const [selectedSign, setSelectedSign] = useState("aries");
  const [activeTab, setActiveTab] = useState("overview");

  const selectedZodiac = useMemo(
    () =>
      zodiacSigns.find((item) => item.id === selectedSign) ??
      zodiacSigns[0],
    [selectedSign]
  );

  const horoscope = horoscopeData[selectedSign];

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: "✨",
    },
    {
      id: "love",
      label: "Love",
      icon: "❤️",
    },
    {
      id: "career",
      label: "Career",
      icon: "💼",
    },
    {
      id: "money",
      label: "Money",
      icon: "💰",
    },
    {
      id: "health",
      label: "Health",
      icon: "🌿",
    },
  ];

  const content =
    activeTab === "overview"
      ? horoscope.overview
      : activeTab === "love"
        ? horoscope.love
        : activeTab === "career"
          ? horoscope.career
          : activeTab === "money"
            ? horoscope.money
            : horoscope.health;

  return (
    <main className="min-h-screen bg-[#071424] px-4 py-6 text-white">
      <div className="mx-auto max-w-md">

        {/* HEADER */}
        <header className="mb-5">
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-2xl">
              🔮
            </div>

            <div>
              <h1 className="text-xl font-black">
                Horoscope
              </h1>

              <p className="mt-1 text-[10px] text-gray-400">
                Daily Horoscope
              </p>
            </div>

          </div>
        </header>

        {/* INTRO */}
        <section className="rounded-3xl border border-[#FFD400]/20 bg-gradient-to-br from-[#18263A] to-[#101C30] p-5">

          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFD400]">
            Today&apos;s Horoscope
          </p>

          <h2 className="mt-2 text-xl font-black">
            Know what the stars say
          </h2>

          <p className="mt-2 text-[10px] leading-5 text-gray-400">
            Select your zodiac sign to explore your
            daily horoscope, love, career, money and
            health guidance.
          </p>

        </section>

        {/* ZODIAC */}
        <section className="mt-5">

          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold">
                Choose your Rashi
              </h2>

              <p className="mt-1 text-[9px] text-gray-500">
                Select your zodiac sign
              </p>
            </div>

            <span className="text-lg">
              ✨
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">

            {zodiacSigns.map((sign) => {
              const active =
                selectedSign === sign.id;

              return (
                <button
                  key={sign.id}
                  type="button"
                  onClick={() => {
                    setSelectedSign(sign.id);
                    setActiveTab("overview");
                  }}
                  className={`rounded-2xl border p-3 text-center transition active:scale-[0.97] ${
                    active
                      ? "border-[#FFD400]/50 bg-[#FFD400]/10"
                      : "border-[#1E2A3D] bg-[#101C30] hover:border-[#FFD400]/20"
                  }`}
                >

                  <div
                    className={`text-2xl ${
                      active
                        ? "text-[#FFD400]"
                        : "text-gray-400"
                    }`}
                  >
                    {sign.symbol}
                  </div>

                  <p
                    className={`mt-1 text-[9px] font-bold ${
                      active
                        ? "text-[#FFD400]"
                        : "text-gray-300"
                    }`}
                  >
                    {sign.hindi}
                  </p>

                </button>
              );
            })}

          </div>
        </section>

        {/* SELECTED SIGN */}
        <section className="mt-5 overflow-hidden rounded-3xl border border-[#FFD400]/20 bg-[#101C30]">

          <div className="bg-gradient-to-br from-[#1A2A40] to-[#101C30] p-5">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-4xl">
                {selectedZodiac.symbol}
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#FFD400]">
                  Your Rashi
                </p>

                <h2 className="mt-1 text-xl font-black">
                  {selectedZodiac.hindi}
                </h2>

                <p className="mt-1 text-[10px] text-gray-400">
                  {selectedZodiac.name}
                </p>

                <p className="mt-1 text-[8px] text-gray-500">
                  {selectedZodiac.date}
                </p>
              </div>

            </div>

          </div>

          {/* TABS */}
          <div className="flex gap-2 overflow-x-auto border-t border-[#1E2A3D] p-3 scrollbar-hide">

            {tabs.map((tab) => {
              const active =
                activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab.id)
                  }
                  className={`shrink-0 rounded-xl px-3 py-2 text-[9px] font-bold transition ${
                    active
                      ? "bg-[#FFD400] text-black"
                      : "bg-[#0B1320] text-gray-400"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              );
            })}

          </div>

          {/* HOROSCOPE */}
          <div className="p-5">

            <div className="flex items-center gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD400]/10">
                {tabs.find(
                  (tab) => tab.id === activeTab
                )?.icon}
              </div>

              <div>
                <p className="text-[10px] font-bold text-[#FFD400]">
                  {tabs.find(
                    (tab) => tab.id === activeTab
                  )?.label}
                </p>

                <p className="text-[8px] text-gray-500">
                  Today&apos;s prediction
                </p>
              </div>

            </div>

            <p className="mt-4 text-[11px] leading-6 text-gray-300">
              {content}
            </p>

          </div>

        </section>

        {/* LUCKY SECTION */}
        <section className="mt-4 grid grid-cols-2 gap-3">

          <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

            <p className="text-[8px] uppercase tracking-wider text-gray-500">
              Lucky Number
            </p>

            <p className="mt-2 text-2xl font-black text-[#FFD400]">
              {selectedSign === "aries"
                ? "9"
                : selectedSign === "taurus"
                  ? "6"
                  : selectedSign === "gemini"
                    ? "5"
                    : selectedSign === "cancer"
                      ? "2"
                      : selectedSign === "leo"
                        ? "1"
                        : selectedSign === "virgo"
                          ? "5"
                          : selectedSign === "libra"
                            ? "6"
                            : selectedSign === "scorpio"
                              ? "9"
                              : selectedSign === "sagittarius"
                                ? "3"
                                : selectedSign === "capricorn"
                                  ? "8"
                                  : selectedSign === "aquarius"
                                    ? "4"
                                    : "7"}
            </p>

          </div>

          <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

            <p className="text-[8px] uppercase tracking-wider text-gray-500">
              Lucky Color
            </p>

            <p className="mt-2 text-sm font-black text-white">
              {selectedSign === "aries"
                ? "Red"
                : selectedSign === "taurus"
                  ? "Green"
                  : selectedSign === "gemini"
                    ? "Yellow"
                    : selectedSign === "cancer"
                      ? "White"
                      : selectedSign === "leo"
                        ? "Gold"
                        : selectedSign === "virgo"
                          ? "Green"
                          : selectedSign === "libra"
                            ? "Pink"
                            : selectedSign === "scorpio"
                              ? "Maroon"
                              : selectedSign === "sagittarius"
                                ? "Purple"
                                : selectedSign === "capricorn"
                                  ? "Brown"
                                  : selectedSign === "aquarius"
                                    ? "Blue"
                                    : "Sea Green"}
            </p>

          </div>

        </section>

        {/* KUNDLI CTA */}
        <section className="mt-4 rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/5 p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFD400]/10 text-xl">
              💑
            </div>

            <div className="flex-1">
              <p className="text-[10px] font-bold text-white">
                Check Marriage Compatibility
              </p>

              <p className="mt-1 text-[8px] leading-4 text-gray-500">
                Match two Kundlis and check Guna Milan.
              </p>
            </div>

            <Link
              href="/kundli-milan"
              className="rounded-xl bg-[#FFD400] px-3 py-2 text-[9px] font-black text-black"
            >
              Match
            </Link>

          </div>

        </section>

        {/* ASTROLOGER CTA */}
        <section className="mt-4 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
              🔮
            </div>

            <div className="flex-1">

              <p className="text-[10px] font-bold text-white">
                Need Personal Guidance?
              </p>

              <p className="mt-1 text-[8px] leading-4 text-gray-500">
                Talk to an astrologer for detailed guidance.
              </p>

            </div>

            <Link
              href="/astrologers"
              className="rounded-xl border border-[#263449] bg-[#0B1320] px-3 py-2 text-[9px] font-bold text-gray-300"
            >
              Consult
            </Link>

          </div>

        </section>

        {/* DISCLAIMER */}
        <div className="mt-5 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

          <p className="text-[9px] font-bold text-gray-300">
            🔮 Note
          </p>

          <p className="mt-2 text-[8px] leading-4 text-gray-500">
            Rashifal is provided for general
            astrological guidance and entertainment
            purposes. Individual results may vary.
          </p>

        </div>

        <p className="mt-6 pb-5 text-center text-[8px] text-gray-600">
          © OurHub • Astrology Services
        </p>

      </div>
    </main>
  );
}