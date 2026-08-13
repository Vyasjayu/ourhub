"use client";

import { useState } from "react";

interface Zodiac {
  id: string;
  name: string;
  hindi: string;
  emoji: string;
}

const zodiacSigns: Zodiac[] = [
  { id: "aries", name: "Aries", hindi: "मेष", emoji: "♈" },
  { id: "taurus", name: "Taurus", hindi: "वृषभ", emoji: "♉" },
  { id: "gemini", name: "Gemini", hindi: "मिथुन", emoji: "♊" },
  { id: "cancer", name: "Cancer", hindi: "कर्क", emoji: "♋" },
  { id: "leo", name: "Leo", hindi: "सिंह", emoji: "♌" },
  { id: "virgo", name: "Virgo", hindi: "कन्या", emoji: "♍" },
  { id: "libra", name: "Libra", hindi: "तुला", emoji: "♎" },
  {
    id: "scorpio",
    name: "Scorpio",
    hindi: "वृश्चिक",
    emoji: "♏",
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    hindi: "धनु",
    emoji: "♐",
  },
  {
    id: "capricorn",
    name: "Capricorn",
    hindi: "मकर",
    emoji: "♑",
  },
  {
    id: "aquarius",
    name: "Aquarius",
    hindi: "कुंभ",
    emoji: "♒",
  },
  { id: "pisces", name: "Pisces", hindi: "मीन", emoji: "♓" },
];

const yearlyData: Record<
  string,
  {
    summary: string;
    career: string;
    love: string;
    finance: string;
    health: string;
    luckyColor: string;
    luckyNumber: string;
    rating: number;
  }
> = {
  aries: {
    summary:
      "2026 आपके लिए नई शुरुआत, आत्मविश्वास और आगे बढ़ने का वर्ष हो सकता है। सही दिशा में किए गए प्रयास अच्छे परिणाम दे सकते हैं।",
    career:
      "करियर में नई जिम्मेदारियां मिल सकती हैं। नौकरी बदलने या नई भूमिका की योजना बनाने वालों के लिए अवसर बन सकते हैं।",
    love:
      "प्रेम जीवन में स्पष्टता और भावनात्मक समझ बढ़ सकती है। रिश्ते में संवाद को प्राथमिकता दें।",
    finance:
      "आर्थिक स्थिति धीरे-धीरे मजबूत हो सकती है। बड़े खर्चों में योजना बनाकर आगे बढ़ना बेहतर रहेगा।",
    health:
      "ऊर्जा अच्छी रह सकती है। नियमित नींद, व्यायाम और संतुलित दिनचर्या पर ध्यान दें।",
    luckyColor: "Red",
    luckyNumber: "9",
    rating: 4,
  },

  taurus: {
    summary:
      "2026 स्थिरता, मेहनत और वित्तीय योजना का वर्ष बन सकता है। धैर्य आपके लिए सबसे बड़ा लाभ साबित होगा।",
    career:
      "काम में consistency से फायदा मिलेगा। लंबे समय से रुके हुए projects आगे बढ़ सकते हैं।",
    love:
      "रिश्तों में भरोसा मजबूत होगा। Singles के लिए meaningful connection बनने की संभावना रहेगी।",
    finance:
      "बचत और long-term planning पर ध्यान देना लाभकारी रहेगा।",
    health:
      "काम के साथ आराम को भी महत्व दें। routine maintain करना जरूरी रहेगा।",
    luckyColor: "Green",
    luckyNumber: "6",
    rating: 4,
  },

  gemini: {
    summary:
      "2026 communication, learning और नए connections का वर्ष हो सकता है। आपकी adaptability आपको आगे ले जाएगी।",
    career:
      "नई skills सीखने और professional networking से career growth मिल सकती है।",
    love:
      "प्रेम जीवन में नए अनुभव और बेहतर communication देखने को मिल सकता है।",
    finance:
      "आय के नए अवसर मिल सकते हैं लेकिन impulsive spending से बचें।",
    health:
      "Mental relaxation और balanced routine आपके लिए महत्वपूर्ण रहेगा।",
    luckyColor: "Yellow",
    luckyNumber: "5",
    rating: 4,
  },

  cancer: {
    summary:
      "2026 emotional growth और personal stability का वर्ष बन सकता है। परिवार और career के बीच संतुलन रखें।",
    career:
      "धीरे-धीरे career stability बढ़ सकती है। आपकी मेहनत notice की जा सकती है।",
    love:
      "रिश्तों में emotional bonding मजबूत हो सकती है।",
    finance:
      "आर्थिक मामलों में conservative planning बेहतर रहेगी।",
    health:
      "तनाव कम करने के लिए आराम और healthy routine जरूरी रहेगा।",
    luckyColor: "White",
    luckyNumber: "2",
    rating: 4,
  },

  leo: {
    summary:
      "2026 leadership और recognition का वर्ष हो सकता है। confidence के साथ सही decisions लेना लाभकारी रहेगा।",
    career:
      "Leadership opportunities और professional recognition मिल सकती है।",
    love:
      "रिश्तों में passion बढ़ सकता है। ego clashes से बचना जरूरी रहेगा।",
    finance:
      "कमाई के अच्छे अवसर बन सकते हैं। savings पर focus रखें।",
    health:
      "ऊर्जा अच्छी रह सकती है लेकिन overworking से बचें।",
    luckyColor: "Gold",
    luckyNumber: "1",
    rating: 5,
  },

  virgo: {
    summary:
      "2026 planning, discipline और personal improvement का वर्ष रहेगा। छोटे कदम बड़े परिणाम दे सकते हैं।",
    career:
      "Detailed work और organization आपकी सबसे बड़ी strength रहेगी।",
    love:
      "रिश्तों में practical understanding बढ़ सकती है।",
    finance:
      "Financial planning से stability मजबूत हो सकती है।",
    health:
      "Routine और nutrition पर विशेष ध्यान दें।",
    luckyColor: "Green",
    luckyNumber: "5",
    rating: 4,
  },

  libra: {
    summary:
      "2026 relationships, partnerships और balance का वर्ष हो सकता है। सही लोगों के साथ collaboration लाभ देगा।",
    career:
      "Partnership और teamwork से नए opportunities मिल सकते हैं।",
    love:
      "प्रेम जीवन में harmony और emotional balance बढ़ सकता है।",
    finance:
      "आर्थिक स्थिति में धीरे-धीरे सुधार के संकेत मिल सकते हैं।",
    health:
      "Stress management और regular activity जरूरी रहेगी।",
    luckyColor: "Pink",
    luckyNumber: "6",
    rating: 4,
  },

  scorpio: {
    summary:
      "2026 transformation और personal growth का वर्ष हो सकता है। पुरानी बाधाओं से बाहर निकलने का अवसर मिलेगा।",
    career:
      "Career में major change या नई responsibility आ सकती है।",
    love:
      "रिश्तों में गहराई बढ़ेगी लेकिन unnecessary suspicion से बचें।",
    finance:
      "Financial decisions सोच-समझकर लें।",
    health:
      "Emotional wellbeing के साथ physical health पर भी ध्यान दें।",
    luckyColor: "Maroon",
    luckyNumber: "9",
    rating: 4,
  },

  sagittarius: {
    summary:
      "2026 travel, learning और expansion का वर्ष बन सकता है। नए अनुभव आपकी सोच बदल सकते हैं।",
    career:
      "नई opportunities और professional expansion देखने को मिल सकता है।",
    love:
      "Love life में excitement और नए experiences रहेंगे।",
    finance:
      "Income opportunities बढ़ सकती हैं लेकिन unnecessary expenses से बचें।",
    health:
      "Active lifestyle आपके लिए अच्छा रहेगा।",
    luckyColor: "Purple",
    luckyNumber: "3",
    rating: 5,
  },

  capricorn: {
    summary:
      "2026 मेहनत, discipline और long-term success का वर्ष हो सकता है।",
    career:
      "Career में strong foundation बनेगी और responsibility बढ़ सकती है।",
    love:
      "रिश्तों में stability और commitment बढ़ सकता है।",
    finance:
      "Long-term investment और savings पर focus अच्छा रहेगा।",
    health:
      "Work-life balance बनाए रखना जरूरी रहेगा।",
    luckyColor: "Blue",
    luckyNumber: "8",
    rating: 4,
  },

  aquarius: {
    summary:
      "2026 innovation, networking और नई possibilities का वर्ष हो सकता है।",
    career:
      "Technology और creative work में नए opportunities मिल सकते हैं।",
    love:
      "नई friendship meaningful relationship में बदल सकती है।",
    finance:
      "Income के नए sources explore कर सकते हैं।",
    health:
      "Mental rest और sleep को ignore न करें।",
    luckyColor: "Sky Blue",
    luckyNumber: "4",
    rating: 4,
  },

  pisces: {
    summary:
      "2026 creativity, intuition और emotional growth का वर्ष हो सकता है।",
    career:
      "Creative और people-oriented work में progress देखने को मिल सकती है।",
    love:
      "Love life में emotional connection और understanding बढ़ सकती है।",
    finance:
      "Financial discipline बनाए रखना जरूरी रहेगा।",
    health:
      "Meditation और peaceful routine लाभकारी रहेंगे।",
    luckyColor: "Sea Green",
    luckyNumber: "7",
    rating: 4,
  },
};

const months = [
  "जनवरी",
  "फरवरी",
  "मार्च",
  "अप्रैल",
  "मई",
  "जून",
  "जुलाई",
  "अगस्त",
  "सितंबर",
  "अक्टूबर",
  "नवंबर",
  "दिसंबर",
];

export default function Astrology2026Page() {
  const [selectedSign, setSelectedSign] =
    useState<Zodiac>(zodiacSigns[0]);

  const current =
    yearlyData[selectedSign.id];

  return (
    <main className="min-h-screen bg-[#071424] px-4 py-5 text-white">
      <div className="mx-auto max-w-md">

        {/* HEADER */}

        <header className="mb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-2xl">
              ✨
            </div>

            <div>
              <h1 className="text-xl font-black">
                2026 राशिफल
              </h1>

              <p className="mt-1 text-[10px] text-gray-400">
                वार्षिक राशिफल • Yearly Horoscope
              </p>
            </div>

          </div>

          <div className="mt-4 rounded-2xl border border-[#FFD400]/20 bg-gradient-to-r from-[#151F32] to-[#101C30] p-4">

            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#FFD400]">
              OurHub Astrology
            </p>

            <p className="mt-2 text-sm font-bold">
              जानिए 2026 में आपकी राशि के लिए क्या खास है
            </p>

            <p className="mt-1 text-[9px] leading-4 text-gray-500">
              Career, Love, Finance और Health के
              बारे में वार्षिक guidance देखें।
            </p>

          </div>

        </header>

        {/* ZODIAC */}

        <section>

          <div className="mb-3 flex items-center justify-between">

            <div>
              <p className="text-xs font-bold">
                अपनी राशि चुनें
              </p>

              <p className="mt-1 text-[8px] text-gray-500">
                Select your zodiac sign
              </p>
            </div>

            <span className="text-[9px] font-bold text-[#FFD400]">
              {selectedSign.hindi}
            </span>

          </div>

          <div className="grid grid-cols-4 gap-2">

            {zodiacSigns.map((sign) => {

              const active =
                sign.id === selectedSign.id;

              return (
                <button
                  key={sign.id}
                  type="button"
                  onClick={() =>
                    setSelectedSign(sign)
                  }
                  className={`rounded-2xl border p-3 text-center transition ${
                    active
                      ? "border-[#FFD400]/60 bg-[#FFD400]/10 shadow-lg shadow-yellow-500/5"
                      : "border-[#1E2A3D] bg-[#101C30]"
                  }`}
                >

                  <div className="text-xl">
                    {sign.emoji}
                  </div>

                  <p
                    className={`mt-1 text-[9px] font-bold ${
                      active
                        ? "text-[#FFD400]"
                        : "text-gray-400"
                    }`}
                  >
                    {sign.hindi}
                  </p>

                  <p className="mt-0.5 text-[7px] text-gray-600">
                    {sign.name}
                  </p>

                </button>
              );
            })}

          </div>

        </section>

        {/* MAIN YEARLY CARD */}

        <section className="mt-5 rounded-3xl border border-[#FFD400]/20 bg-gradient-to-b from-[#18263A] to-[#101C30] p-5">

          <div className="text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 text-4xl">
              {selectedSign.emoji}
            </div>

            <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFD400]">
              Yearly Horoscope
            </p>

            <h2 className="mt-1 text-2xl font-black">
              {selectedSign.hindi} राशिफल 2026
            </h2>

            <p className="mt-1 text-[9px] text-gray-500">
              {selectedSign.name} • 2026
            </p>

          </div>

          {/* SUMMARY */}

          <div className="mt-5 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

            <p className="text-[9px] font-bold uppercase tracking-wider text-[#FFD400]">
              2026 का वार्षिक फलादेश
            </p>

            <p className="mt-2 text-[11px] leading-6 text-gray-300">
              {current.summary}
            </p>

          </div>

          {/* RATING */}

          <div className="mt-4 rounded-2xl bg-[#FFD400]/5 p-4">

            <div className="flex items-center justify-between">

              <span className="text-[9px] text-gray-400">
                Overall Year Rating
              </span>

              <span className="text-[10px] font-bold text-[#FFD400]">
                {current.rating}/5
              </span>

            </div>

            <div className="mt-2 flex gap-1">

              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= current.rating
                      ? "text-[#FFD400]"
                      : "text-gray-700"
                  }
                >
                  ★
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* LIFE AREAS */}

        <section className="mt-5">

          <div className="mb-3">
            <p className="text-xs font-bold">
              2026 जीवन के प्रमुख क्षेत्र
            </p>

            <p className="mt-1 text-[8px] text-gray-500">
              Career • Love • Finance • Health
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">

            {/* CAREER */}

            <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-lg">
                💼
              </div>

              <p className="mt-3 text-[10px] font-bold">
                Career
              </p>

              <p className="mt-1 text-[8px] leading-4 text-gray-500">
                {current.career}
              </p>

            </div>

            {/* LOVE */}

            <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/10 text-lg">
                ❤️
              </div>

              <p className="mt-3 text-[10px] font-bold">
                Love
              </p>

              <p className="mt-1 text-[8px] leading-4 text-gray-500">
                {current.love}
              </p>

            </div>

            {/* FINANCE */}

            <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/10 text-lg">
                💰
              </div>

              <p className="mt-3 text-[10px] font-bold">
                Finance
              </p>

              <p className="mt-1 text-[8px] leading-4 text-gray-500">
                {current.finance}
              </p>

            </div>

            {/* HEALTH */}

            <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-lg">
                🧘
              </div>

              <p className="mt-3 text-[10px] font-bold">
                Health
              </p>

              <p className="mt-1 text-[8px] leading-4 text-gray-500">
                {current.health}
              </p>

            </div>

          </div>

        </section>

        {/* MONTHLY OVERVIEW */}

        <section className="mt-5 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

          <div className="mb-4">

            <p className="text-xs font-bold">
              2026 Month-wise Overview
            </p>

            <p className="mt-1 text-[8px] text-gray-500">
              महीने के अनुसार सामान्य संकेत
            </p>

          </div>

          <div className="space-y-2">

            {months.map((month, index) => {

              const strength =
                ((index +
                  current.rating +
                  selectedSign.id.length) %
                  3) + 3;

              return (
                <div
                  key={month}
                  className="flex items-center gap-3 rounded-xl bg-[#0B1320] px-3 py-3"
                >

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFD400]/10 text-[9px] font-bold text-[#FFD400]">
                    {index + 1}
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="text-[10px] font-bold">
                      {month}
                    </p>

                    <p className="mt-0.5 text-[7px] text-gray-600">
                      {strength >= 5
                        ? "बहुत अनुकूल समय"
                        : strength >= 4
                        ? "अनुकूल समय"
                        : "सावधानी से आगे बढ़ें"}
                    </p>

                  </div>

                  <div className="text-[10px] text-[#FFD400]">
                    {"★".repeat(strength)}
                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* LUCKY DETAILS */}

        <section className="mt-4 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

          <div className="mb-4">

            <p className="text-xs font-bold">
              2026 Lucky Details
            </p>

            <p className="mt-1 text-[8px] text-gray-500">
              शुभ संकेत
            </p>

          </div>

          <div className="grid grid-cols-2 gap-2">

            <div className="rounded-xl bg-[#0B1320] p-3 text-center">

              <p className="text-lg">
                🔢
              </p>

              <p className="mt-2 text-[8px] text-gray-500">
                Lucky Number
              </p>

              <p className="mt-1 text-[10px] font-bold text-[#FFD400]">
                {current.luckyNumber}
              </p>

            </div>

            <div className="rounded-xl bg-[#0B1320] p-3 text-center">

              <p className="text-lg">
                🎨
              </p>

              <p className="mt-2 text-[8px] text-gray-500">
                Lucky Color
              </p>

              <p className="mt-1 text-[10px] font-bold text-[#FFD400]">
                {current.luckyColor}
              </p>

            </div>

          </div>

        </section>

        {/* PREMIUM CTA */}

        <section className="mt-4 rounded-2xl border border-[#FFD400]/20 bg-gradient-to-r from-[#171F31] to-[#101C30] p-4">

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFD400]/10 text-xl">
              🔮
            </div>

            <div>

              <p className="text-[11px] font-bold text-white">
                अपना Personal Horoscope जानें
              </p>

              <p className="mt-1 text-[8px] leading-4 text-gray-500">
                जन्म तारीख, समय और स्थान के आधार पर
                अधिक personalized astrology report प्राप्त करें।
              </p>

              <button
                type="button"
                className="mt-3 rounded-xl bg-[#FFD400] px-4 py-2 text-[9px] font-black text-black"
              >
                Get Personal Report →
              </button>

            </div>

          </div>

        </section>

        {/* DISCLAIMER */}

        <div className="mt-4 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

          <p className="text-[9px] font-bold text-gray-300">
            🔮 Note
          </p>

          <p className="mt-2 text-[8px] leading-4 text-gray-500">
            यह वार्षिक राशिफल सामान्य ज्योतिषीय
            guidance के लिए है। व्यक्तिगत भविष्यफल के
            लिए जन्म विवरण के आधार पर qualified
            astrologer से consultation लेना बेहतर है।
          </p>

        </div>

        <p className="mt-6 pb-5 text-center text-[8px] text-gray-600">
          © 2026 OurHub Astrology
        </p>

      </div>
    </main>
  );
}