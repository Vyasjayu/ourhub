"use client";

import { useEffect, useState } from "react";

interface ZodiacSign {
  id: string;
  name: string;
  hindi: string;
  emoji: string;
}

interface LoveHoroscope {
  sign: string;
  hindi: string;
  date: string;

  prediction: string;
  relationship: string;
  singles: string;
  couples: string;
  communication: string;

  luckyColor: string;
  luckyNumber: string;

  loveAdvice: string;
  mood: string;
}

const zodiacSigns: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    hindi: "मेष",
    emoji: "♈",
  },
  {
    id: "taurus",
    name: "Taurus",
    hindi: "वृषभ",
    emoji: "♉",
  },
  {
    id: "gemini",
    name: "Gemini",
    hindi: "मिथुन",
    emoji: "♊",
  },
  {
    id: "cancer",
    name: "Cancer",
    hindi: "कर्क",
    emoji: "♋",
  },
  {
    id: "leo",
    name: "Leo",
    hindi: "सिंह",
    emoji: "♌",
  },
  {
    id: "virgo",
    name: "Virgo",
    hindi: "कन्या",
    emoji: "♍",
  },
  {
    id: "libra",
    name: "Libra",
    hindi: "तुला",
    emoji: "♎",
  },
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
  {
    id: "pisces",
    name: "Pisces",
    hindi: "मीन",
    emoji: "♓",
  },
];

export default function LoveHoroscopePage() {
  const [selectedSign, setSelectedSign] =
    useState<ZodiacSign>(zodiacSigns[0]);

  const [data, setData] =
    useState<LoveHoroscope | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchLoveHoroscope = async (
    sign: string
  ) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `/api/horoscope/love?sign=${encodeURIComponent(
          sign
        )}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "Unable to load today's love horoscope."
        );
      }

      setData(result.data);
    } catch (err) {
      console.error(
        "LOVE HOROSCOPE ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load today's love horoscope."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoveHoroscope(selectedSign.id);
  }, [selectedSign.id]);

  return (
    <main className="min-h-screen bg-[#071424] px-4 py-6 text-white">
      <div className="mx-auto max-w-md">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="mb-5">
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-pink-400/20 bg-pink-500/10 text-2xl">
              ❤️
            </div>

            <div>
              <h1 className="text-xl font-black">
                Love Horoscope
              </h1>

              <p className="mt-1 text-[10px] text-gray-400">
                आज का प्रेम राशिफल
              </p>
            </div>

          </div>

          {data && (
            <div className="mt-4 rounded-2xl border border-[#263449] bg-[#101C30] p-4">

              <p className="text-[9px] font-bold uppercase tracking-wider text-pink-400">
                Today's Love Horoscope
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                {data.date}
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                आपकी राशि के अनुसार आज का प्रेम राशिफल
              </p>

            </div>
          )}
        </header>

        {/* =====================================================
            ZODIAC SELECTOR
        ===================================================== */}

        <section className="mb-5">

          <div className="mb-2 flex items-center justify-between">

            <div>
              <p className="text-xs font-bold">
                Select Your Zodiac
              </p>

              <p className="mt-0.5 text-[8px] text-gray-500">
                अपनी राशि चुनें
              </p>
            </div>

            <span className="text-[9px] text-pink-400">
              {selectedSign.hindi}
            </span>

          </div>

          <div className="grid grid-cols-4 gap-2">

            {zodiacSigns.map((sign) => {
              const active =
                selectedSign.id === sign.id;

              return (
                <button
                  key={sign.id}
                  type="button"
                  onClick={() =>
                    setSelectedSign(sign)
                  }
                  className={`rounded-2xl border p-3 text-center transition ${
                    active
                      ? "border-pink-400/50 bg-pink-500/10"
                      : "border-[#1E2A3D] bg-[#101C30] hover:border-pink-400/20"
                  }`}
                >

                  <div className="text-xl">
                    {sign.emoji}
                  </div>

                  <p
                    className={`mt-1 text-[9px] font-bold ${
                      active
                        ? "text-pink-400"
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

        {/* =====================================================
            ERROR
        ===================================================== */}

        {error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4">

            <p className="text-[10px] leading-5 text-red-400">
              ⚠️ {error}
            </p>

            <button
              type="button"
              onClick={() =>
                fetchLoveHoroscope(selectedSign.id)
              }
              className="mt-3 rounded-lg bg-red-500/10 px-3 py-2 text-[9px] font-bold text-red-300"
            >
              Try Again
            </button>

          </div>
        )}

        {/* =====================================================
            LOADING
        ===================================================== */}

        {loading && !error && (
          <section className="rounded-3xl border border-[#1E2A3D] bg-[#101C30] p-6">

            <div className="animate-pulse">

              <div className="mx-auto h-16 w-16 rounded-full bg-white/5" />

              <div className="mx-auto mt-4 h-4 w-32 rounded bg-white/5" />

              <div className="mx-auto mt-2 h-3 w-20 rounded bg-white/5" />

              <div className="mt-6 h-24 rounded-2xl bg-white/5" />

              <div className="mt-3 h-20 rounded-2xl bg-white/5" />

              <div className="mt-3 h-20 rounded-2xl bg-white/5" />

            </div>

          </section>
        )}

        {/* =====================================================
            LOVE HOROSCOPE
        ===================================================== */}

        {data && !loading && !error && (
          <section>

            {/* MAIN CARD */}

            <div className="rounded-3xl border border-pink-400/20 bg-gradient-to-b from-[#25182A] to-[#101C30] p-5">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-pink-400/20 bg-pink-500/10 text-4xl">
                  {selectedSign.emoji}
                </div>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-pink-400">
                  Love Horoscope
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  {data.hindi}
                </h2>

                <p className="mt-1 text-[9px] text-gray-500">
                  {data.sign} • {data.date}
                </p>

              </div>

              {/* MAIN PREDICTION */}

              <div className="mt-5 rounded-2xl border border-pink-400/10 bg-[#0B1320] p-4">

                <p className="text-[9px] font-bold uppercase tracking-wider text-pink-400">
                  Today's Love Prediction
                </p>

                <p className="mt-2 text-[11px] leading-6 text-gray-300">
                  {data.prediction}
                </p>

              </div>

            </div>

            {/* =================================================
                RELATIONSHIP DETAILS
            ================================================= */}

            <div className="mt-4">

              <div className="mb-3">
                <p className="text-xs font-bold">
                  Love & Relationship
                </p>

                <p className="mt-1 text-[8px] text-gray-500">
                  आज का प्रेम जीवन
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">

                {/* RELATIONSHIP */}

                <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/10 text-lg">
                    💞
                  </div>

                  <p className="mt-3 text-[10px] font-bold">
                    Relationship
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-gray-500">
                    {data.relationship}
                  </p>

                </div>

                {/* SINGLES */}

                <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-lg">
                    💜
                  </div>

                  <p className="mt-3 text-[10px] font-bold">
                    Singles
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-gray-500">
                    {data.singles}
                  </p>

                </div>

                {/* COUPLES */}

                <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-lg">
                    🥰
                  </div>

                  <p className="mt-3 text-[10px] font-bold">
                    Couples
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-gray-500">
                    {data.couples}
                  </p>

                </div>

                {/* COMMUNICATION */}

                <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-lg">
                    💬
                  </div>

                  <p className="mt-3 text-[10px] font-bold">
                    Communication
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-gray-500">
                    {data.communication}
                  </p>

                </div>

              </div>
            </div>

            {/* =================================================
                LOVE MOOD
            ================================================= */}

            <div className="mt-4 rounded-2xl border border-pink-400/20 bg-pink-500/5 p-4">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[8px] text-gray-500">
                    Today's Love Mood
                  </p>

                  <p className="mt-2 text-lg font-black text-pink-400">
                    {data.mood}
                  </p>

                </div>

                <div className="text-3xl">
                  ❤️
                </div>

              </div>

            </div>

            {/* =================================================
                LUCKY LOVE DETAILS
            ================================================= */}

            <div className="mt-4 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="mb-4">

                <p className="text-xs font-bold">
                  Love Luck Today
                </p>

                <p className="mt-1 text-[8px] text-gray-500">
                  आज के प्रेम संबंधी शुभ संकेत
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

                  <p className="mt-1 text-[10px] font-bold text-pink-400">
                    {data.luckyNumber}
                  </p>

                </div>

                <div className="rounded-xl bg-[#0B1320] p-3 text-center">

                  <p className="text-lg">
                    🎨
                  </p>

                  <p className="mt-2 text-[8px] text-gray-500">
                    Lucky Color
                  </p>

                  <p className="mt-1 text-[10px] font-bold text-pink-400">
                    {data.luckyColor}
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                LOVE ADVICE
            ================================================= */}

            <div className="mt-4 rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/5 p-4">

              <div className="flex items-center gap-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD400]/10">
                  💡
                </div>

                <div>
                  <p className="text-[10px] font-bold text-[#FFD400]">
                    Today's Love Advice
                  </p>

                  <p className="text-[8px] text-gray-500">
                    आज की प्रेम सलाह
                  </p>
                </div>

              </div>

              <p className="mt-3 text-[10px] leading-5 text-gray-300">
                {data.loveAdvice}
              </p>

            </div>

            {/* =================================================
                DISCLAIMER
            ================================================= */}

            <div className="mt-4 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

              <p className="text-[9px] font-bold text-gray-300">
                🔮 Note
              </p>

              <p className="mt-2 text-[8px] leading-4 text-gray-500">
                Love horoscope is an astrological
                interpretation intended for general
                guidance and entertainment. For a
                personalized reading, consult a
                qualified astrologer.
              </p>

            </div>

          </section>
        )}

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <p className="mt-7 pb-4 text-center text-[8px] leading-4 text-gray-600">
          Love horoscope is updated daily according
          to the current date.
        </p>

      </div>
    </main>
  );
}