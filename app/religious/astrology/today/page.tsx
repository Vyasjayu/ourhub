"use client";

import { useEffect, useMemo, useState } from "react";

interface ZodiacSign {
  id: string;
  name: string;
  hindi: string;
  emoji: string;
  slug: string;
}

interface DailyHoroscope {
  sign: string;
  hindi: string;
  date: string;

  prediction: string;

  love: string;
  career: string;
  finance: string;
  health: string;

  luckyNumber: string;
  luckyColor: string;
  luckyTime: string;

  mood: string;
  advice: string;
}

interface HoroscopeApiResponse {
  success: boolean;
  data?: DailyHoroscope;
  error?: string;
}

const zodiacSigns: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    hindi: "मेष",
    emoji: "♈",
    slug: "aries",
  },
  {
    id: "taurus",
    name: "Taurus",
    hindi: "वृषभ",
    emoji: "♉",
    slug: "taurus",
  },
  {
    id: "gemini",
    name: "Gemini",
    hindi: "मिथुन",
    emoji: "♊",
    slug: "gemini",
  },
  {
    id: "cancer",
    name: "Cancer",
    hindi: "कर्क",
    emoji: "♋",
    slug: "cancer",
  },
  {
    id: "leo",
    name: "Leo",
    hindi: "सिंह",
    emoji: "♌",
    slug: "leo",
  },
  {
    id: "virgo",
    name: "Virgo",
    hindi: "कन्या",
    emoji: "♍",
    slug: "virgo",
  },
  {
    id: "libra",
    name: "Libra",
    hindi: "तुला",
    emoji: "♎",
    slug: "libra",
  },
  {
    id: "scorpio",
    name: "Scorpio",
    hindi: "वृश्चिक",
    emoji: "♏",
    slug: "scorpio",
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    hindi: "धनु",
    emoji: "♐",
    slug: "sagittarius",
  },
  {
    id: "capricorn",
    name: "Capricorn",
    hindi: "मकर",
    emoji: "♑",
    slug: "capricorn",
  },
  {
    id: "aquarius",
    name: "Aquarius",
    hindi: "कुंभ",
    emoji: "♒",
    slug: "aquarius",
  },
  {
    id: "pisces",
    name: "Pisces",
    hindi: "मीन",
    emoji: "♓",
    slug: "pisces",
  },
];

export default function TodayHoroscopePage() {
  const [selectedSign, setSelectedSign] =
    useState<ZodiacSign>(zodiacSigns[0]);

  const [data, setData] =
    useState<DailyHoroscope | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [lastUpdated, setLastUpdated] =
    useState<Date | null>(null);

  // ---------------------------------------------------------
  // CURRENT DATE
  // ---------------------------------------------------------

  const formattedToday = useMemo(() => {
    return new Intl.DateTimeFormat("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());
  }, []);

  // ---------------------------------------------------------
  // FETCH HOROSCOPE
  // ---------------------------------------------------------

  const fetchHoroscope = async (
    sign: string
  ) => {
    try {
      setLoading(true);
      setError("");
      setData(null);

      const response = await fetch(
        `/api/horoscope/today?sign=${encodeURIComponent(
          sign
        )}`,
        {
          method: "GET",

          // IMPORTANT:
          // Never use browser/server cached horoscope.
          cache: "no-store",

          headers: {
            Accept: "application/json",
          },
        }
      );

      let result: HoroscopeApiResponse;

      try {
        result = await response.json();
      } catch {
        throw new Error(
          "Invalid response received from horoscope service."
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "Unable to load today's horoscope."
        );
      }

      if (!result.data) {
        throw new Error(
          "Today's horoscope data is unavailable."
        );
      }

      setData(result.data);
      setLastUpdated(new Date());
    } catch (err) {
      console.error(
        "TODAY HOROSCOPE ERROR:",
        err
      );

      setData(null);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load today's horoscope."
      );
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------------------------
  // LOAD SELECTED SIGN
  // ---------------------------------------------------------

  useEffect(() => {
    fetchHoroscope(selectedSign.id);
  }, [selectedSign.id]);

  // ---------------------------------------------------------
  // REFRESH
  // ---------------------------------------------------------

  const handleRefresh = () => {
    fetchHoroscope(selectedSign.id);
  };

  // ---------------------------------------------------------
  // FIND SELECTED SIGN
  // ---------------------------------------------------------

  const activeSign =
    zodiacSigns.find(
      (sign) =>
        sign.id === selectedSign.id
    ) || selectedSign;

  // ---------------------------------------------------------
  // UI
  // ---------------------------------------------------------

  return (
    <main className="min-h-screen bg-[#071424] px-4 py-6 text-white">
      <div className="mx-auto max-w-md">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="mb-5">

          <div className="flex items-center justify-between gap-3">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-2xl">
                🔮
              </div>

              <div>
                <h1 className="text-xl font-black">
                  Today&apos;s Rashifal
                </h1>

                <p className="mt-1 text-[10px] text-gray-400">
                  आज का दैनिक राशिफल
                </p>
              </div>

            </div>

            {/* REFRESH */}

            <button
              type="button"
              onClick={handleRefresh}
              disabled={loading}
              aria-label="Refresh horoscope"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#263449] bg-[#101C30] text-sm transition hover:border-[#FFD400]/30 hover:text-[#FFD400] disabled:opacity-50"
            >
              <span
                className={
                  loading
                    ? "animate-spin"
                    : ""
                }
              >
                ↻
              </span>
            </button>

          </div>

          {/* DATE */}

          <div className="mt-4 rounded-2xl border border-[#263449] bg-[#101C30] p-4">

            <p className="text-[9px] font-bold uppercase tracking-wider text-[#FFD400]">
              Today
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              {data?.date || formattedToday}
            </p>

            <p className="mt-1 text-[9px] text-gray-500">
              वर्तमान दिन के अनुसार आपकी राशि का राशिफल
            </p>

          </div>

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

            <span className="text-[9px] font-bold text-[#FFD400]">
              {activeSign.emoji}{" "}
              {activeSign.hindi}
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
                  onClick={() => {
                    if (
                      selectedSign.id !==
                      sign.id
                    ) {
                      setSelectedSign(sign);
                    }
                  }}
                  className={`rounded-2xl border p-3 text-center transition active:scale-95 ${
                    active
                      ? "border-[#FFD400]/50 bg-[#FFD400]/10 shadow-lg shadow-yellow-500/5"
                      : "border-[#1E2A3D] bg-[#101C30] hover:border-[#FFD400]/20"
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

        {/* =====================================================
            ERROR
        ===================================================== */}

        {error && (

          <section className="mb-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-4">

            <div className="flex items-start gap-3">

              <div className="text-lg">
                ⚠️
              </div>

              <div className="flex-1">

                <p className="text-[10px] font-bold text-red-400">
                  Unable to Load Horoscope
                </p>

                <p className="mt-1 text-[9px] leading-4 text-red-300/70">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={handleRefresh}
                  className="mt-3 rounded-lg bg-red-500/10 px-3 py-2 text-[9px] font-bold text-red-300"
                >
                  Try Again
                </button>

              </div>

            </div>

          </section>

        )}

        {/* =====================================================
            LOADING
        ===================================================== */}

        {loading && (

          <section className="rounded-3xl border border-[#1E2A3D] bg-[#101C30] p-6">

            <div className="animate-pulse">

              <div className="mx-auto h-20 w-20 rounded-full bg-white/5" />

              <div className="mx-auto mt-4 h-3 w-28 rounded bg-white/5" />

              <div className="mx-auto mt-2 h-6 w-24 rounded bg-white/5" />

              <div className="mt-6 h-28 rounded-2xl bg-white/5" />

              <div className="mt-4 grid grid-cols-2 gap-3">

                <div className="h-28 rounded-2xl bg-white/5" />

                <div className="h-28 rounded-2xl bg-white/5" />

                <div className="h-28 rounded-2xl bg-white/5" />

                <div className="h-28 rounded-2xl bg-white/5" />

              </div>

            </div>

          </section>

        )}

        {/* =====================================================
            HOROSCOPE
        ===================================================== */}

        {data && !loading && !error && (

          <section>

            {/* =================================================
                MAIN REPORT
            ================================================= */}

            <div className="rounded-3xl border border-[#FFD400]/20 bg-gradient-to-b from-[#18263A] to-[#101C30] p-5">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 text-4xl">
                  {activeSign.emoji}
                </div>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFD400]">
                  Daily Horoscope
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  {data.hindi}
                </h2>

                <p className="mt-1 text-[9px] text-gray-500">
                  {data.sign} • {data.date}
                </p>

              </div>

              {/* PREDICTION */}

              <div className="mt-5 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

                <p className="text-[9px] font-bold uppercase tracking-wider text-[#FFD400]">
                  Today&apos;s Prediction
                </p>

                <p className="mt-2 text-[11px] leading-6 text-gray-300">
                  {data.prediction}
                </p>

              </div>

            </div>

            {/* =================================================
                DAILY DETAILS
            ================================================= */}

            <div className="mt-4">

              <div className="mb-3">

                <p className="text-xs font-bold">
                  Today&apos;s Guidance
                </p>

                <p className="mt-1 text-[8px] text-gray-500">
                  आज का विस्तृत राशिफल
                </p>

              </div>

              <div className="grid grid-cols-2 gap-3">

                {/* LOVE */}

                <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/10 text-lg">
                    ❤️
                  </div>

                  <p className="mt-3 text-[10px] font-bold">
                    Love
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-gray-500">
                    {data.love}
                  </p>

                </div>

                {/* CAREER */}

                <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-lg">
                    💼
                  </div>

                  <p className="mt-3 text-[10px] font-bold">
                    Career
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-gray-500">
                    {data.career}
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
                    {data.finance}
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
                    {data.health}
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                LUCKY DETAILS
            ================================================= */}

            <div className="mt-4 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="mb-4">

                <p className="text-xs font-bold">
                  Lucky Today
                </p>

                <p className="mt-1 text-[8px] text-gray-500">
                  आज के शुभ संकेत
                </p>

              </div>

              <div className="grid grid-cols-3 gap-2">

                <div className="rounded-xl bg-[#0B1320] p-3 text-center">

                  <p className="text-lg">
                    🔢
                  </p>

                  <p className="mt-2 text-[8px] text-gray-500">
                    Lucky Number
                  </p>

                  <p className="mt-1 text-[10px] font-bold text-[#FFD400]">
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

                  <p className="mt-1 text-[10px] font-bold text-[#FFD400]">
                    {data.luckyColor}
                  </p>

                </div>

                <div className="rounded-xl bg-[#0B1320] p-3 text-center">

                  <p className="text-lg">
                    ⏰
                  </p>

                  <p className="mt-2 text-[8px] text-gray-500">
                    Lucky Time
                  </p>

                  <p className="mt-1 text-[10px] font-bold text-[#FFD400]">
                    {data.luckyTime}
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                MOOD + ADVICE
            ================================================= */}

            <div className="mt-4 grid grid-cols-2 gap-3">

              <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                <p className="text-[8px] text-gray-500">
                  Today&apos;s Mood
                </p>

                <p className="mt-2 text-sm font-bold text-[#FFD400]">
                  {data.mood}
                </p>

              </div>

              <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                <p className="text-[8px] text-gray-500">
                  Today&apos;s Advice
                </p>

                <p className="mt-2 text-[9px] leading-4 text-gray-300">
                  {data.advice}
                </p>

              </div>

            </div>

            {/* =================================================
                UPDATED INFO
            ================================================= */}

            {lastUpdated && (

              <div className="mt-4 text-center">

                <p className="text-[8px] text-gray-600">
                  Updated just now • {data.date}
                </p>

              </div>

            )}

            {/* =================================================
                DISCLAIMER
            ================================================= */}

            <div className="mt-4 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

              <p className="text-[9px] font-bold text-gray-300">
                🔮 Note
              </p>

              <p className="mt-2 text-[8px] leading-4 text-gray-500">
                Daily horoscope is an astrological
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
          Horoscope is generated according to the
          current date and selected zodiac sign.
        </p>

      </div>
    </main>
  );
}