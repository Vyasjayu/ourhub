"use client";

import { useState } from "react";

const zodiacSigns = [
  {
    name: "Aries",
    hindi: "मेष",
    symbol: "♈",
    date: "21 Mar - 19 Apr",
  },
  {
    name: "Taurus",
    hindi: "वृषभ",
    symbol: "♉",
    date: "20 Apr - 20 May",
  },
  {
    name: "Gemini",
    hindi: "मिथुन",
    symbol: "♊",
    date: "21 May - 20 Jun",
  },
  {
    name: "Cancer",
    hindi: "कर्क",
    symbol: "♋",
    date: "21 Jun - 22 Jul",
  },
  {
    name: "Leo",
    hindi: "सिंह",
    symbol: "♌",
    date: "23 Jul - 22 Aug",
  },
  {
    name: "Virgo",
    hindi: "कन्या",
    symbol: "♍",
    date: "23 Aug - 22 Sep",
  },
  {
    name: "Libra",
    hindi: "तुला",
    symbol: "♎",
    date: "23 Sep - 22 Oct",
  },
  {
    name: "Scorpio",
    hindi: "वृश्चिक",
    symbol: "♏",
    date: "23 Oct - 21 Nov",
  },
  {
    name: "Sagittarius",
    hindi: "धनु",
    symbol: "♐",
    date: "22 Nov - 21 Dec",
  },
  {
    name: "Capricorn",
    hindi: "मकर",
    symbol: "♑",
    date: "22 Dec - 19 Jan",
  },
  {
    name: "Aquarius",
    hindi: "कुंभ",
    symbol: "♒",
    date: "20 Jan - 18 Feb",
  },
  {
    name: "Pisces",
    hindi: "मीन",
    symbol: "♓",
    date: "19 Feb - 20 Mar",
  },
];

const rashifalData: Record<
  string,
  {
    overview: string;
    career: string;
    love: string;
    money: string;
    health: string;
  }
> = {
  Aries: {
    overview:
      "आज का दिन आपके लिए नई शुरुआत और आत्मविश्वास लेकर आ सकता है। महत्वपूर्ण निर्णय लेते समय धैर्य रखें।",
    career:
      "काम में नई जिम्मेदारियां मिल सकती हैं। आपके प्रयासों की सराहना होने के संकेत हैं।",
    love:
      "रिश्तों में खुलकर बातचीत करने से गलतफहमियां दूर हो सकती हैं।",
    money:
      "आर्थिक स्थिति सामान्य रहेगी। अनावश्यक खर्चों से बचना बेहतर रहेगा।",
    health:
      "ऊर्जा अच्छी रहेगी, लेकिन पर्याप्त आराम और पानी का ध्यान रखें।",
  },

  Taurus: {
    overview:
      "आज स्थिरता और धैर्य आपके लिए महत्वपूर्ण रहेंगे। पुराने कार्य पूरे करने का अच्छा समय है।",
    career:
      "काम में लगातार मेहनत का परिणाम मिल सकता है। सहकर्मियों का सहयोग मिलेगा।",
    love:
      "पार्टनर के साथ भावनात्मक जुड़ाव बढ़ सकता है।",
    money:
      "बजट बनाकर चलना आपके लिए लाभदायक रहेगा।",
    health:
      "रूटीन और खान-पान पर ध्यान देना लाभकारी रहेगा।",
  },

  Gemini: {
    overview:
      "आज बातचीत और नए विचार आपके लिए अवसर ला सकते हैं।",
    career:
      "नई योजना या प्रोजेक्ट पर काम शुरू हो सकता है।",
    love:
      "आपकी communication relationship को मजबूत कर सकती है।",
    money:
      "आय के नए विकल्पों पर विचार कर सकते हैं।",
    health:
      "मानसिक तनाव कम करने के लिए थोड़ा ब्रेक लें।",
  },

  Cancer: {
    overview:
      "आज भावनात्मक रूप से संतुलित रहना आपके लिए महत्वपूर्ण रहेगा।",
    career:
      "कार्यस्थल पर आपकी जिम्मेदारियां बढ़ सकती हैं।",
    love:
      "परिवार और पार्टनर से अच्छा भावनात्मक सहयोग मिलेगा।",
    money:
      "बड़े खर्च से पहले अच्छी तरह सोचें।",
    health:
      "नींद और आराम को प्राथमिकता दें।",
  },

  Leo: {
    overview:
      "आज आपका आत्मविश्वास और नेतृत्व क्षमता मजबूत रहेगी।",
    career:
      "आपको अपनी प्रतिभा दिखाने का अवसर मिल सकता है।",
    love:
      "रिश्ते में positivity और warmth बनी रहेगी।",
    money:
      "आर्थिक मामलों में सोच-समझकर निर्णय लें।",
    health:
      "ऊर्जा अच्छी रहेगी। नियमित physical activity लाभकारी होगी।",
  },

  Virgo: {
    overview:
      "आज planning और organization से आपको बेहतर परिणाम मिल सकते हैं।",
    career:
      "Pending work पूरा करने के लिए अच्छा दिन है।",
    love:
      "छोटी बातों को लेकर अधिक सोचने से बचें।",
    money:
      "आर्थिक planning पर ध्यान देना लाभकारी रहेगा।",
    health:
      "Routine बनाए रखना आपके लिए अच्छा रहेगा।",
  },

  Libra: {
    overview:
      "आज balance और harmony आपके दिन को बेहतर बनाएंगे।",
    career:
      "साझेदारी से जुड़े कामों में सफलता मिल सकती है।",
    love:
      "रिश्तों में understanding बढ़ सकती है।",
    money:
      "आर्थिक मामलों में संतुलित निर्णय लें।",
    health:
      "तनाव कम करने के लिए relaxation जरूरी है।",
  },

  Scorpio: {
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
  },

  Sagittarius: {
    overview:
      "आज नए अवसर और नई सीख आपके लिए महत्वपूर्ण हो सकती है।",
    career:
      "काम से जुड़ी यात्रा या नया opportunity मिल सकता है।",
    love:
      "रिश्तों में openness बढ़ेगी।",
    money:
      "अचानक खर्च हो सकता है, इसलिए planning रखें।",
    health:
      "Outdoor activity आपके mood के लिए अच्छी रहेगी।",
  },

  Capricorn: {
    overview:
      "आज discipline और patience आपके लिए सफलता की कुंजी रहेंगे।",
    career:
      "मेहनत का सकारात्मक परिणाम मिलने की संभावना है।",
    love:
      "रिश्तों में stability बनी रहेगी।",
    money:
      "Savings पर ध्यान देना फायदेमंद रहेगा।",
    health:
      "काम के साथ पर्याप्त आराम भी लें।",
  },

  Aquarius: {
    overview:
      "आज नए ideas और creativity आपके लिए लाभकारी हो सकते हैं।",
    career:
      "नई technology या innovative idea पर काम हो सकता है।",
    love:
      "Partner के साथ नए अनुभव साझा कर सकते हैं।",
    money:
      "आर्थिक स्थिति में धीरे-धीरे सुधार हो सकता है।",
    health:
      "Mental relaxation के लिए समय निकालें।",
  },

  Pisces: {
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
  },
};

export default function RashifalPage() {
  const [selectedSign, setSelectedSign] = useState("Aries");

  const selectedZodiac = zodiacSigns.find(
    (sign) => sign.name === selectedSign
  );

  const rashifal = rashifalData[selectedSign];

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
                आज का राशिफल
              </h1>

              <p className="mt-1 text-[10px] text-gray-400">
                Daily Horoscope & Faladesh
              </p>
            </div>

          </div>
        </header>

        {/* DATE CARD */}
        <div className="mb-5 rounded-2xl border border-[#FFD400]/20 bg-gradient-to-r from-[#18263A] to-[#101C30] p-4">

          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#FFD400]">
            Today's Faladesh
          </p>

          <div className="mt-2 flex items-center justify-between">

            <div>
              <p className="text-sm font-bold">
                आपका दैनिक राशिफल
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                राशि चुनें और आज का फलादेश देखें
              </p>
            </div>

            <div className="text-3xl">
              ✨
            </div>

          </div>

        </div>

        {/* ZODIAC SELECT */}
        <section className="mb-5">

          <div className="mb-3 flex items-center justify-between">

            <div>
              <h2 className="text-sm font-bold">
                अपनी राशि चुनें
              </h2>

              <p className="mt-1 text-[9px] text-gray-500">
                Select your zodiac sign
              </p>
            </div>

          </div>

          <div className="grid grid-cols-4 gap-2">

            {zodiacSigns.map((sign) => {

              const active =
                selectedSign === sign.name;

              return (
                <button
                  key={sign.name}
                  type="button"
                  onClick={() =>
                    setSelectedSign(sign.name)
                  }
                  className={`rounded-2xl border p-3 text-center transition active:scale-95 ${
                    active
                      ? "border-[#FFD400]/60 bg-[#FFD400]/10"
                      : "border-[#1E2A3D] bg-[#101C30] hover:border-[#FFD400]/30"
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
                    className={`mt-1 text-[10px] font-bold ${
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
        {selectedZodiac && rashifal && (
          <section>

            {/* HERO */}
            <div className="rounded-3xl border border-[#FFD400]/20 bg-gradient-to-b from-[#18263A] to-[#101C30] p-5">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#FFD400]/30 bg-[#FFD400]/10 text-5xl">
                  {selectedZodiac.symbol}
                </div>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFD400]">
                  {selectedZodiac.name}
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  {selectedZodiac.hindi} राशि
                </h2>

                <p className="mt-1 text-[9px] text-gray-500">
                  {selectedZodiac.date}
                </p>

              </div>

              {/* OVERVIEW */}
              <div className="mt-5 rounded-2xl border border-[#FFD400]/10 bg-[#FFD400]/5 p-4">

                <div className="flex items-center gap-2">

                  <span className="text-lg">
                    🔮
                  </span>

                  <p className="text-[10px] font-bold text-[#FFD400]">
                    आज का फलादेश
                  </p>

                </div>

                <p className="mt-3 text-[10px] leading-5 text-gray-300">
                  {rashifal.overview}
                </p>

              </div>

            </div>

            {/* DAILY AREAS */}
            <div className="mt-4 space-y-3">

              {/* CAREER */}
              <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-lg">
                    💼
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-white">
                      Career & Work
                    </p>

                    <p className="text-[8px] text-gray-500">
                      करियर और कार्य
                    </p>
                  </div>

                </div>

                <p className="mt-3 text-[10px] leading-5 text-gray-400">
                  {rashifal.career}
                </p>

              </div>

              {/* LOVE */}
              <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/10 text-lg">
                    ❤️
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-white">
                      Love & Relationship
                    </p>

                    <p className="text-[8px] text-gray-500">
                      प्रेम और संबंध
                    </p>
                  </div>

                </div>

                <p className="mt-3 text-[10px] leading-5 text-gray-400">
                  {rashifal.love}
                </p>

              </div>

              {/* MONEY */}
              <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFD400]/10 text-lg">
                    💰
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-white">
                      Money
                    </p>

                    <p className="text-[8px] text-gray-500">
                      धन और वित्त
                    </p>
                  </div>

                </div>

                <p className="mt-3 text-[10px] leading-5 text-gray-400">
                  {rashifal.money}
                </p>

              </div>

              {/* HEALTH */}
              <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/10 text-lg">
                    🧘
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-white">
                      Health
                    </p>

                    <p className="text-[8px] text-gray-500">
                      स्वास्थ्य
                    </p>
                  </div>

                </div>

                <p className="mt-3 text-[10px] leading-5 text-gray-400">
                  {rashifal.health}
                </p>

              </div>

            </div>

            {/* LUCKY DETAILS */}
            <div className="mt-4 rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/5 p-4">

              <div className="flex items-center gap-2">

                <span className="text-lg">
                  🍀
                </span>

                <p className="text-[10px] font-bold text-[#FFD400]">
                  Lucky Details
                </p>

              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">

                <div className="rounded-xl bg-[#0B1320] p-3 text-center">

                  <p className="text-[8px] text-gray-500">
                    Lucky Number
                  </p>

                  <p className="mt-1 text-sm font-black text-[#FFD400]">
                    5
                  </p>

                </div>

                <div className="rounded-xl bg-[#0B1320] p-3 text-center">

                  <p className="text-[8px] text-gray-500">
                    Lucky Color
                  </p>

                  <p className="mt-1 text-[10px] font-bold text-white">
                    Gold
                  </p>

                </div>

                <div className="rounded-xl bg-[#0B1320] p-3 text-center">

                  <p className="text-[8px] text-gray-500">
                    Lucky Day
                  </p>

                  <p className="mt-1 text-[10px] font-bold text-white">
                    Thursday
                  </p>

                </div>

              </div>

            </div>

            {/* ASTROLOGER CTA */}
            <div className="mt-4 rounded-2xl border border-[#FFD400]/20 bg-gradient-to-r from-[#18263A] to-[#101C30] p-4">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFD400]/10 text-xl">
                  👨‍🦳
                </div>

                <div className="flex-1">

                  <p className="text-[10px] font-bold text-white">
                    Personalized Astrology
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-gray-500">
                    अपनी कुंडली और व्यक्तिगत जीवन के
                    बारे में जानने के लिए astrologer से
                    consultation लें।
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

            {/* DISCLAIMER */}
            <div className="mt-4 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

              <p className="text-[9px] font-bold text-gray-300">
                🔮 Note
              </p>

              <p className="mt-2 text-[8px] leading-4 text-gray-500">
                यह राशिफल सामान्य ज्योतिषीय जानकारी के
                लिए है। व्यक्तिगत और विस्तृत फलादेश के
                लिए जन्म तारीख, समय और स्थान के आधार पर
                Kundli analysis आवश्यक है।
              </p>

            </div>

          </section>
        )}

        {/* FOOTER */}
        <p className="mt-7 pb-4 text-center text-[8px] leading-4 text-gray-600">
          OurHub Astrology • Daily Rashifal
        </p>

      </div>
    </main>
  );
}