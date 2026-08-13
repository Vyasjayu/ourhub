"use client";

import { useState } from "react";

interface Rashi {
  id: string;
  name: string;
  hindi: string;
  symbol: string;
  date: string;
  overview: string;
  career: string;
  love: string;
  money: string;
  health: string;
  luckyNumber: string;
  luckyColor: string;
  luckyDay: string;
}

const rashis: Rashi[] = [
  {
    id: "aries",
    name: "Aries",
    hindi: "मेष",
    symbol: "♈",
    date: "21 Mar - 19 Apr",
    overview:
      "आज आत्मविश्वास के साथ आगे बढ़ने का दिन है। रुके हुए कार्यों में प्रगति हो सकती है। महत्वपूर्ण निर्णय लेते समय जल्दबाजी से बचें।",
    career:
      "कार्यस्थल पर आपकी मेहनत दिखाई देगी। नई जिम्मेदारी या महत्वपूर्ण काम मिल सकता है।",
    love:
      "रिश्तों में खुलकर बातचीत करने से नजदीकियां बढ़ेंगी। पुरानी गलतफहमियां दूर हो सकती हैं।",
    money:
      "आर्थिक स्थिति सामान्य रहेगी। अनावश्यक खर्चों पर नियंत्रण रखना लाभदायक रहेगा।",
    health:
      "ऊर्जा अच्छी रहेगी। पर्याप्त नींद और पानी का ध्यान रखें।",
    luckyNumber: "9",
    luckyColor: "Red",
    luckyDay: "Tuesday",
  },
  {
    id: "taurus",
    name: "Taurus",
    hindi: "वृषभ",
    symbol: "♉",
    date: "20 Apr - 20 May",
    overview:
      "आज धैर्य और स्थिरता आपके लिए लाभकारी रहेगी। पुराने कामों को पूरा करने का अच्छा समय है।",
    career:
      "काम में लगातार मेहनत का अच्छा परिणाम मिल सकता है। वरिष्ठों का सहयोग प्राप्त होगा।",
    love:
      "पार्टनर के साथ भावनात्मक जुड़ाव मजबूत हो सकता है।",
    money:
      "बचत पर ध्यान दें। किसी बड़े खर्च से पहले योजना बनाना बेहतर रहेगा।",
    health:
      "रूटीन और खान-पान का ध्यान रखें।",
    luckyNumber: "6",
    luckyColor: "White",
    luckyDay: "Friday",
  },
  {
    id: "gemini",
    name: "Gemini",
    hindi: "मिथुन",
    symbol: "♊",
    date: "21 May - 20 Jun",
    overview:
      "आज बातचीत, creativity और नए विचार आपके लिए अवसर लेकर आ सकते हैं।",
    career:
      "नई योजना या project पर काम शुरू हो सकता है। Communication आपकी strength रहेगी।",
    love:
      "रिश्तों में बातचीत और समझ बढ़ेगी।",
    money:
      "आय के नए विकल्पों पर विचार कर सकते हैं।",
    health:
      "मानसिक तनाव कम करने के लिए थोड़ा आराम करें।",
    luckyNumber: "5",
    luckyColor: "Green",
    luckyDay: "Wednesday",
  },
  {
    id: "cancer",
    name: "Cancer",
    hindi: "कर्क",
    symbol: "♋",
    date: "21 Jun - 22 Jul",
    overview:
      "आज भावनात्मक संतुलन बनाए रखना जरूरी रहेगा। परिवार का सहयोग मिलेगा।",
    career:
      "काम में आपकी जिम्मेदारियां बढ़ सकती हैं। धैर्य से काम लें।",
    love:
      "परिवार और पार्टनर से अच्छा भावनात्मक सहयोग मिलेगा।",
    money:
      "बड़े खर्च से पहले अच्छी तरह विचार करें।",
    health:
      "आराम और नींद को प्राथमिकता दें।",
    luckyNumber: "2",
    luckyColor: "Silver",
    luckyDay: "Monday",
  },
  {
    id: "leo",
    name: "Leo",
    hindi: "सिंह",
    symbol: "♌",
    date: "23 Jul - 22 Aug",
    overview:
      "आज आपका आत्मविश्वास और नेतृत्व क्षमता मजबूत रहेगी। अपनी प्रतिभा दिखाने का अवसर मिलेगा।",
    career:
      "कार्यस्थल पर आपकी leadership की सराहना हो सकती है।",
    love:
      "रिश्तों में warmth और positivity बनी रहेगी।",
    money:
      "आर्थिक मामलों में सोच-समझकर निर्णय लें।",
    health:
      "ऊर्जा अच्छी रहेगी। नियमित activity लाभकारी होगी।",
    luckyNumber: "1",
    luckyColor: "Gold",
    luckyDay: "Sunday",
  },
  {
    id: "virgo",
    name: "Virgo",
    hindi: "कन्या",
    symbol: "♍",
    date: "23 Aug - 22 Sep",
    overview:
      "आज planning और organization से बेहतर परिणाम मिलेंगे। छोटी बातों पर अधिक चिंता न करें।",
    career:
      "Pending काम पूरा करने का अच्छा समय है।",
    love:
      "रिश्तों में छोटी बातों को लेकर overthinking से बचें।",
    money:
      "Financial planning आपके लिए फायदेमंद रहेगी।",
    health:
      "अपनी daily routine को व्यवस्थित रखें।",
    luckyNumber: "5",
    luckyColor: "Green",
    luckyDay: "Wednesday",
  },
  {
    id: "libra",
    name: "Libra",
    hindi: "तुला",
    symbol: "♎",
    date: "23 Sep - 22 Oct",
    overview:
      "आज balance और harmony आपके दिन को बेहतर बनाएंगे। सहयोग से काम पूरे होंगे।",
    career:
      "Partnership और teamwork से अच्छे परिणाम मिल सकते हैं।",
    love:
      "रिश्तों में understanding और harmony बढ़ेगी।",
    money:
      "आर्थिक मामलों में संतुलित निर्णय लें।",
    health:
      "तनाव कम करने के लिए relaxation जरूरी है।",
    luckyNumber: "6",
    luckyColor: "Pink",
    luckyDay: "Friday",
  },
  {
    id: "scorpio",
    name: "Scorpio",
    hindi: "वृश्चिक",
    symbol: "♏",
    date: "23 Oct - 21 Nov",
    overview:
      "आज आपकी determination आपको कठिन काम पूरा करने में मदद करेगी।",
    career:
      "महत्वपूर्ण project में progress हो सकती है।",
    love:
      "भावनाओं को स्पष्ट तरीके से व्यक्त करें।",
    money:
      "निवेश या बड़े खर्च में जल्दबाजी न करें।",
    health:
      "अपनी energy को सही दिशा में इस्तेमाल करें।",
    luckyNumber: "8",
    luckyColor: "Maroon",
    luckyDay: "Tuesday",
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    hindi: "धनु",
    symbol: "♐",
    date: "22 Nov - 21 Dec",
    overview:
      "आज नए अवसर और नई सीख आपके लिए महत्वपूर्ण हो सकती है।",
    career:
      "काम से जुड़ी यात्रा या नया opportunity मिल सकता है।",
    love:
      "रिश्तों में openness और positivity बढ़ेगी।",
    money:
      "अचानक खर्च हो सकता है, इसलिए planning रखें।",
    health:
      "Outdoor activity आपके mood के लिए अच्छी रहेगी।",
    luckyNumber: "3",
    luckyColor: "Yellow",
    luckyDay: "Thursday",
  },
  {
    id: "capricorn",
    name: "Capricorn",
    hindi: "मकर",
    symbol: "♑",
    date: "22 Dec - 19 Jan",
    overview:
      "आज discipline और patience सफलता की कुंजी रहेंगे।",
    career:
      "आपकी मेहनत का सकारात्मक परिणाम मिलने की संभावना है।",
    love:
      "रिश्तों में stability बनी रहेगी।",
    money:
      "Savings पर ध्यान देना फायदेमंद रहेगा।",
    health:
      "काम के साथ पर्याप्त आराम भी लें।",
    luckyNumber: "8",
    luckyColor: "Blue",
    luckyDay: "Saturday",
  },
  {
    id: "aquarius",
    name: "Aquarius",
    hindi: "कुंभ",
    symbol: "♒",
    date: "20 Jan - 18 Feb",
    overview:
      "आज नए ideas और creativity आपके लिए लाभकारी हो सकते हैं।",
    career:
      "Innovative ideas को काम में लाने का अवसर मिलेगा।",
    love:
      "Partner के साथ नए अनुभव साझा कर सकते हैं।",
    money:
      "आर्थिक स्थिति में धीरे-धीरे सुधार हो सकता है।",
    health:
      "Mental relaxation के लिए समय निकालें।",
    luckyNumber: "4",
    luckyColor: "Blue",
    luckyDay: "Saturday",
  },
  {
    id: "pisces",
    name: "Pisces",
    hindi: "मीन",
    symbol: "♓",
    date: "19 Feb - 20 Mar",
    overview:
      "आज intuition और creativity आपको सही दिशा दिखा सकती है।",
    career:
      "Creative work में अच्छे परिणाम मिल सकते हैं।",
    love:
      "रिश्तों में emotional connection मजबूत हो सकता है।",
    money:
      "बजट और खर्चों पर नजर रखें।",
    health:
      "आराम और पर्याप्त नींद जरूरी रहेगी।",
    luckyNumber: "7",
    luckyColor: "Yellow",
    luckyDay: "Thursday",
  },
];

export default function FaladeshPage() {
  const [selectedRashi, setSelectedRashi] =
    useState("aries");

  const current =
    rashis.find((item) => item.id === selectedRashi) ||
    rashis[0];

  return (
    <main className="min-h-screen bg-[#071424] px-4 py-6 text-white">
      <div className="mx-auto max-w-md">

        {/* HEADER */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-2xl">
            🔮
          </div>

          <div>
            <h1 className="text-xl font-black">
              आज का फलादेश
            </h1>

            <p className="mt-1 text-[10px] text-gray-400">
              दैनिक राशिफल एवं भविष्यफल
            </p>
          </div>
        </div>

        {/* INTRO */}
        <div className="mb-5 rounded-2xl border border-[#FFD400]/20 bg-gradient-to-r from-[#18263A] to-[#101C30] p-4">
          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#FFD400]">
            Daily Faladesh
          </p>

          <h2 className="mt-2 text-sm font-bold">
            अपनी राशि चुनें
          </h2>

          <p className="mt-1 text-[9px] leading-4 text-gray-500">
            आज के दिन करियर, प्रेम, धन और स्वास्थ्य से
            जुड़े संकेत जानें।
          </p>
        </div>

        {/* RASHI GRID */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-bold">
              सभी राशियां
            </p>

            <span className="text-[8px] text-gray-500">
              12 Zodiac Signs
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {rashis.map((rashi) => {
              const active =
                selectedRashi === rashi.id;

              return (
                <button
                  key={rashi.id}
                  type="button"
                  onClick={() =>
                    setSelectedRashi(rashi.id)
                  }
                  className={`rounded-2xl border p-3 text-center transition active:scale-95 ${
                    active
                      ? "border-[#FFD400]/60 bg-[#FFD400]/10"
                      : "border-[#1E2A3D] bg-[#101C30]"
                  }`}
                >
                  <div
                    className={`text-2xl ${
                      active
                        ? "text-[#FFD400]"
                        : "text-gray-400"
                    }`}
                  >
                    {rashi.symbol}
                  </div>

                  <p
                    className={`mt-1 text-[10px] font-bold ${
                      active
                        ? "text-[#FFD400]"
                        : "text-gray-300"
                    }`}
                  >
                    {rashi.hindi}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* MAIN FALADESH */}
        <section className="mt-5">

          {/* RASHI HEADER */}
          <div className="rounded-3xl border border-[#FFD400]/20 bg-gradient-to-b from-[#18263A] to-[#101C30] p-5">

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#FFD400]/30 bg-[#FFD400]/10 text-5xl">
                {current.symbol}
              </div>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFD400]">
                {current.name}
              </p>

              <h2 className="mt-1 text-2xl font-black">
                {current.hindi} राशि
              </h2>

              <p className="mt-1 text-[9px] text-gray-500">
                {current.date}
              </p>
            </div>

            {/* OVERVIEW */}
            <div className="mt-5 rounded-2xl border border-[#FFD400]/10 bg-[#FFD400]/5 p-4">

              <div className="flex items-center gap-2">
                <span>🔮</span>

                <p className="text-[10px] font-bold text-[#FFD400]">
                  आज का फलादेश
                </p>
              </div>

              <p className="mt-3 text-[10px] leading-5 text-gray-300">
                {current.overview}
              </p>
            </div>
          </div>

          {/* CAREER */}
          <div className="mt-3 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-lg">
                💼
              </div>

              <div>
                <p className="text-[10px] font-bold">
                  Career & Work
                </p>

                <p className="text-[8px] text-gray-500">
                  करियर और कार्य
                </p>
              </div>
            </div>

            <p className="mt-3 text-[10px] leading-5 text-gray-400">
              {current.career}
            </p>
          </div>

          {/* LOVE */}
          <div className="mt-3 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/10 text-lg">
                ❤️
              </div>

              <div>
                <p className="text-[10px] font-bold">
                  Love & Relationship
                </p>

                <p className="text-[8px] text-gray-500">
                  प्रेम और संबंध
                </p>
              </div>
            </div>

            <p className="mt-3 text-[10px] leading-5 text-gray-400">
              {current.love}
            </p>
          </div>

          {/* MONEY */}
          <div className="mt-3 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFD400]/10 text-lg">
                💰
              </div>

              <div>
                <p className="text-[10px] font-bold">
                  Money & Finance
                </p>

                <p className="text-[8px] text-gray-500">
                  धन और वित्त
                </p>
              </div>
            </div>

            <p className="mt-3 text-[10px] leading-5 text-gray-400">
              {current.money}
            </p>
          </div>

          {/* HEALTH */}
          <div className="mt-3 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/10 text-lg">
                🧘
              </div>

              <div>
                <p className="text-[10px] font-bold">
                  Health
                </p>

                <p className="text-[8px] text-gray-500">
                  स्वास्थ्य
                </p>
              </div>
            </div>

            <p className="mt-3 text-[10px] leading-5 text-gray-400">
              {current.health}
            </p>
          </div>

          {/* LUCKY */}
          <div className="mt-4 rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/5 p-4">

            <div className="flex items-center gap-2">
              <span>🍀</span>

              <p className="text-[10px] font-bold text-[#FFD400]">
                आज के शुभ संकेत
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">

              <div className="rounded-xl bg-[#0B1320] p-3 text-center">
                <p className="text-[8px] text-gray-500">
                  Lucky Number
                </p>

                <p className="mt-1 text-sm font-black text-[#FFD400]">
                  {current.luckyNumber}
                </p>
              </div>

              <div className="rounded-xl bg-[#0B1320] p-3 text-center">
                <p className="text-[8px] text-gray-500">
                  Lucky Color
                </p>

                <p className="mt-1 truncate text-[9px] font-bold text-white">
                  {current.luckyColor}
                </p>
              </div>

              <div className="rounded-xl bg-[#0B1320] p-3 text-center">
                <p className="text-[8px] text-gray-500">
                  Lucky Day
                </p>

                <p className="mt-1 truncate text-[9px] font-bold text-white">
                  {current.luckyDay}
                </p>
              </div>

            </div>
          </div>

          {/* ASTROLOGER CTA */}
          <div className="mt-4 rounded-2xl border border-[#FFD400]/20 bg-gradient-to-r from-[#18263A] to-[#101C30] p-4">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFD400]/10 text-xl">
                🔮
              </div>

              <div>
                <p className="text-[10px] font-bold">
                  Personalized Faladesh
                </p>

                <p className="mt-1 text-[9px] leading-4 text-gray-500">
                  अपनी जन्म कुंडली के आधार पर व्यक्तिगत
                  फलादेश और ज्योतिषीय सलाह प्राप्त करें।
                </p>
              </div>

            </div>

            <button
              type="button"
              className="mt-4 h-11 w-full rounded-xl bg-[#FFD400] text-[10px] font-black text-black transition hover:bg-[#FACC15] active:scale-[0.98]"
            >
              Consult an Astrologer →
            </button>
          </div>

          {/* NOTE */}
          <div className="mt-4 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

            <p className="text-[9px] font-bold text-gray-300">
              🔮 Note
            </p>

            <p className="mt-2 text-[8px] leading-4 text-gray-500">
              यह फलादेश सामान्य ज्योतिषीय जानकारी के
              लिए है। व्यक्तिगत और विस्तृत फलादेश के
              लिए जन्म तारीख, जन्म समय और जन्म स्थान
              के आधार पर Kundli analysis आवश्यक है।
            </p>
          </div>

        </section>

        {/* FOOTER */}
        <p className="mt-7 pb-4 text-center text-[8px] text-gray-600">
          OurHub Astrology • Daily Faladesh
        </p>

      </div>
    </main>
  );
}