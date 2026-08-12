"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  ArrowLeft,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";

import AstrologyHeader from "@/components/astrology/AstrologyHeader";
import BottomNavigation from "@/components/astrology/BottomNavigation";
import KundliDasha from "@/components/astrology/KundliDasha";

/* =========================================================
   TYPES
========================================================= */

interface Planet {
  name: string;
  hindiName: string;
  longitude: number;
  degree: number;
  minute: number;
  signIndex: number;
  signNumber: number;
  signName: string;
  signHindi: string;
  house: number;
  retrograde: boolean;
}

interface House {
  house: number;
  signIndex: number;
  signNumber: number;
  signName: string;
  signHindi?: string;
  planets: Planet[];
}

interface KundliData {
  success: boolean;

  birth: {
    dob: string;
    time: string;
    utc: string;
    place: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: string;
  };

  system: {
    zodiac: string;
    ayanamsa: string;
    houseSystem: string;
  };

  ascendant: {
    longitude: number;
    degree: number;
    minute: number;
    signIndex: number;
    signNumber: number;
    signName: string;
    signHindi: string;
  };

  planets: Planet[];

  houses: House[];

  summary: {
    sunSign: string;
    moonSign: string;
    moonSignHindi: string;
    ascendant: string;
    ascendantHindi: string;
    nakshatra: string;
    nakshatraPada: number;
  };
}

/* =========================================================
   DASHAS
========================================================= */

interface DashaPeriod {
  planet: string;
  start: Date;
  end: Date;
  years: number;
}

const DASHA_SEQUENCE = [
  { planet: "Ketu", years: 7 },
  { planet: "Venus", years: 20 },
  { planet: "Sun", years: 6 },
  { planet: "Moon", years: 10 },
  { planet: "Mars", years: 7 },
  { planet: "Rahu", years: 18 },
  { planet: "Jupiter", years: 16 },
  { planet: "Saturn", years: 19 },
  { planet: "Mercury", years: 17 },
];

const DASHA_YEARS = 120;

const PLANET_HINDI: Record<string, string> = {
  Sun: "सूर्य",
  Moon: "चंद्र",
  Mars: "मंगल",
  Mercury: "बुध",
  Jupiter: "गुरु",
  Venus: "शुक्र",
  Saturn: "शनि",
  Rahu: "राहु",
  Ketu: "केतु",
};

const NAKSHATRAS = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishtha",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];

const NAKSHATRA_LORDS = [
  "Ketu",
  "Venus",
  "Sun",
  "Moon",
  "Mars",
  "Rahu",
  "Jupiter",
  "Saturn",
  "Mercury",
  "Ketu",
  "Venus",
  "Sun",
  "Moon",
  "Mars",
  "Rahu",
  "Jupiter",
  "Saturn",
  "Mercury",
  "Ketu",
  "Venus",
  "Sun",
  "Moon",
  "Mars",
  "Rahu",
  "Jupiter",
  "Saturn",
  "Mercury",
];

/* =========================================================
   SIGN DATA
========================================================= */

const SIGNS = [
  {
    number: 1,
    name: "Aries",
    hindi: "मेष",
  },
  {
    number: 2,
    name: "Taurus",
    hindi: "वृषभ",
  },
  {
    number: 3,
    name: "Gemini",
    hindi: "मिथुन",
  },
  {
    number: 4,
    name: "Cancer",
    hindi: "कर्क",
  },
  {
    number: 5,
    name: "Leo",
    hindi: "सिंह",
  },
  {
    number: 6,
    name: "Virgo",
    hindi: "कन्या",
  },
  {
    number: 7,
    name: "Libra",
    hindi: "तुला",
  },
  {
    number: 8,
    name: "Scorpio",
    hindi: "वृश्चिक",
  },
  {
    number: 9,
    name: "Sagittarius",
    hindi: "धनु",
  },
  {
    number: 10,
    name: "Capricorn",
    hindi: "मकर",
  },
  {
    number: 11,
    name: "Aquarius",
    hindi: "कुंभ",
  },
  {
    number: 12,
    name: "Pisces",
    hindi: "मीन",
  },
];

/* =========================================================
   MAIN PAGE
========================================================= */

export default function KundliResultPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "User";
  const gender = searchParams.get("gender") || "";
  const dob = searchParams.get("dob") || "";
  const time = searchParams.get("time") || "";
  const place = searchParams.get("place") || "";

  const [kundli, setKundli] =
    useState<KundliData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  /* =====================================================
     DATE
  ===================================================== */

  const formattedDate = useMemo(() => {
    if (!dob) {
      return "Not available";
    }

    const date = new Date(`${dob}T00:00:00`);

    if (Number.isNaN(date.getTime())) {
      return dob;
    }

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [dob]);

  /* =====================================================
     TIME
  ===================================================== */

  const formattedTime = useMemo(() => {
    if (!time) {
      return "Not available";
    }

    const [hourString, minute = "00"] =
      time.split(":");

    const hour = Number(hourString);

    if (Number.isNaN(hour)) {
      return time;
    }

    const period = hour >= 12 ? "PM" : "AM";

    const formattedHour =
      hour % 12 || 12;

    return `${formattedHour}:${minute} ${period}`;
  }, [time]);

  /* =====================================================
     GENDER
  ===================================================== */

  const genderLabel =
    gender === "male"
      ? "Male"
      : gender === "female"
        ? "Female"
        : gender === "other"
          ? "Other"
          : "Not specified";

  /* =====================================================
     API
  ===================================================== */

  useEffect(() => {
    if (!dob || !time || !place) {
      setLoading(false);

      setError(
        "Birth date, time and place are required."
      );

      return;
    }

    let cancelled = false;

    async function calculate() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "/api/kundli/calculate",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              dob,
              time,
              place,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error ||
            "Unable to calculate Kundli."
          );
        }

        if (!data?.success) {
          throw new Error(
            data?.error ||
            "Unable to calculate Kundli."
          );
        }

        if (!cancelled) {
          setKundli(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to calculate Kundli."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    calculate();

    return () => {
      cancelled = true;
    };
  }, [dob, time, place]);

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return (
      <main className="min-h-screen bg-black">
        <div className="mx-auto min-h-screen w-full max-w-md bg-[#050B14]">
          <AstrologyHeader />

          <div className="flex min-h-[70vh] flex-col items-center justify-center px-5">
            <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-[#FFD400]/10">
              <Sparkles
                size={30}
                className="text-[#FFD400]"
              />
            </div>

            <h2 className="mt-5 text-[18px] font-black text-white">
              Calculating Your Kundli
            </h2>

            <p className="mt-2 text-center text-[11px] leading-5 text-gray-500">
              Calculating planetary positions
              from your exact birth date,
              time and place.
            </p>
          </div>

          <BottomNavigation />
        </div>
      </main>
    );
  }

  /* =====================================================
     ERROR
  ===================================================== */

  if (error || !kundli) {
    return (
      <main className="min-h-screen bg-black">
        <div className="mx-auto min-h-screen w-full max-w-md bg-[#050B14]">
          <AstrologyHeader />

          <div className="px-4 pt-6">
            <Link
              href="/religious/astrology/kundli"
              className="inline-flex items-center gap-2 text-sm text-gray-300"
            >
              <ArrowLeft size={18} />
              Back to Kundli
            </Link>

            <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
              <p className="text-[15px] font-black text-red-400">
                Kundli Calculation Failed
              </p>

              <p className="mt-2 text-[11px] leading-5 text-red-200">
                {error ||
                  "Unable to calculate Kundli."}
              </p>

              <button
                type="button"
                onClick={() =>
                  window.location.reload()
                }
                className="mt-5 rounded-xl bg-red-500 px-5 py-3 text-[11px] font-bold text-white"
              >
                Try Again
              </button>
            </div>
          </div>

          <BottomNavigation />
        </div>
      </main>
    );
  }

  const planets = kundli.planets;

  /* =====================================================
     CURRENT DASHA
  ===================================================== */

  const moonPlanet = planets.find(
    (planet) => planet.name === "Moon"
  );

  const dashaResult = calculateVimshottariDasha(
    dob,
    moonPlanet?.longitude ?? 0
  );

  /* =====================================================
     NAVAMSHA
  ===================================================== */

  const navamshaData = calculateNavamsha(
    kundli
  );

  return (
    <main className="min-h-screen bg-black pb-24">
      <div className="mx-auto min-h-screen w-full max-w-md overflow-x-hidden bg-[#050B14] shadow-2xl">

        <AstrologyHeader />

        <div className="px-3 pb-28">

          {/* =================================================
              BACK
          ================================================= */}

          <div className="pt-4">
            <Link
              href="/religious/astrology/kundli"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300"
            >
              <ArrowLeft size={19} />
              Back to Kundli
            </Link>
          </div>

          {/* =================================================
              HEADER
          ================================================= */}

          <section className="pt-5">
            <div className="relative overflow-hidden rounded-2xl border border-[#FFD400]/20 bg-[#101C30] p-5">

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FFD400]/10 blur-3xl" />

              <div className="relative">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD400] text-black">
                    <Sparkles size={25} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#FFD400]">
                      OURHUB ASTROLOGY
                    </p>

                    <h1 className="mt-1 text-[22px] font-black text-white">
                      Your Birth Chart
                    </h1>
                  </div>

                </div>

                <p className="mt-4 text-[11px] leading-5 text-gray-400">
                  Your Vedic Kundli based on
                  your exact birth details.
                </p>

              </div>
            </div>
          </section>

          {/* =================================================
              USER DETAILS
          ================================================= */}

          <section className="pt-5">

            <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD400]/10 text-[#FFD400]">
                  <UserRound size={22} />
                </div>

                <div>
                  <h2 className="text-[16px] font-black text-white">
                    {name}
                  </h2>

                  <p className="mt-1 text-[9px] text-gray-500">
                    Vedic Birth Chart
                  </p>
                </div>

              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">

                <InfoCard
                  icon={<CalendarDays size={15} />}
                  label="Date of Birth"
                  value={formattedDate}
                />

                <InfoCard
                  icon={<Clock3 size={15} />}
                  label="Birth Time"
                  value={formattedTime}
                />

                <InfoCard
                  icon={<MapPin size={15} />}
                  label="Birth Place"
                  value={kundli.birth.place}
                />

                <InfoCard
                  icon={<UserRound size={15} />}
                  label="Gender"
                  value={genderLabel}
                />

              </div>
            </div>
          </section>

          {/* =================================================
              KUNDLI CHART
          ================================================= */}

          <section className="pt-6">

            <div className="mb-4 flex items-center justify-between">

              <div>
                <h2 className="text-[19px] font-bold text-white">
                  Kundli Chart
                </h2>

                <p className="mt-1 text-[10px] text-gray-500">
                  North Indian Vedic Birth Chart
                </p>
              </div>

              <Sparkles
                size={21}
                className="text-[#FFD400]"
              />

            </div>

            <div className="rounded-2xl border border-[#FFD400]/20 bg-[#101C30] p-2">

              <NorthIndianKundliChart
                houses={kundli.houses}
                ascendant={kundli.ascendant}
              />

            </div>
          </section>

          {/* =================================================
              DASHA
          ================================================= */}

          <section className="pt-6">

            <div className="mb-4">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-[19px] font-bold text-white">
                    Current Dasha
                  </h2>

                  <p className="mt-1 text-[10px] text-gray-500">
                    Vimshottari Dasha
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFD400]/10">
                  <Sparkles
                    size={18}
                    className="text-[#FFD400]"
                  />
                </div>

              </div>

            </div>

            <DashaSection
              result={dashaResult}
            />

          </section>

          {/* =================================================
              NAVAMSHA D9
          ================================================= */}

          <section className="pt-6">

            <div className="mb-4 flex items-center justify-between">

              <div>
                <h2 className="text-[19px] font-bold text-white">
                  Navamsha Kundli
                </h2>

                <p className="mt-1 text-[10px] text-gray-500">
                  D-9 • Marriage & Planetary Strength
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFD400]/10">
                <Star
                  size={18}
                  className="text-[#FFD400]"
                />
              </div>

            </div>

            <div className="rounded-2xl border border-[#FFD400]/20 bg-[#101C30] p-2">

              <NavamshaChart
                navamsha={navamshaData}
              />

            </div>

          </section>

          {/* =================================================
              NAVAMSHA PLANETS
          ================================================= */}

          <section className="pt-6">

            <h2 className="mb-4 text-[19px] font-bold text-white">
              Navamsha Planetary Positions
            </h2>

            <div className="overflow-hidden rounded-2xl border border-[#1E2A3D] bg-[#101C30]">

              {navamshaData.planets.map(
                (planet, index) => (
                  <NavamshaPlanetRow
                    key={`${planet.name}-${index}`}
                    planet={planet}
                    last={
                      index ===
                      navamshaData.planets.length - 1
                    }
                  />
                )
              )}

            </div>

          </section>

          {/* =================================================
              SUMMARY
          ================================================= */}

          <section className="pt-6">

            <h2 className="mb-4 text-[19px] font-bold text-white">
              Kundli Summary
            </h2>

            <div className="grid grid-cols-2 gap-2">

              <AstroCard
                title="Moon Sign"
                value={kundli.summary.moonSign}
                subtitle={
                  kundli.summary.moonSignHindi
                }
              />

              <AstroCard
                title="Sun Sign"
                value={kundli.summary.sunSign}
              />

              <AstroCard
                title="Ascendant"
                value={kundli.summary.ascendant}
                subtitle={
                  kundli.summary.ascendantHindi
                }
              />

              <AstroCard
                title="Nakshatra"
                value={kundli.summary.nakshatra}
                subtitle={
                  kundli.summary.nakshatraPada
                    ? `Pada ${kundli.summary.nakshatraPada}`
                    : ""
                }
              />

            </div>
          </section>

          {/* =================================================
              PLANETARY POSITIONS
          ================================================= */}

          <section className="pt-6">

            <div className="mb-4">

              <h2 className="text-[19px] font-bold text-white">
                Planetary Positions
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Calculated from your exact birth date,
                time and place
              </p>

            </div>

            <div className="overflow-hidden rounded-2xl border border-[#1E2A3D] bg-[#101C30]">

              {planets.map(
                (planet, index) => (
                  <PlanetRow
                    key={planet.name}
                    planet={planet.name}
                    hindiName={planet.hindiName}
                    sign={planet.signName}
                    house={planet.house}
                    degree={planet.degree}
                    minute={planet.minute}
                    retrograde={planet.retrograde}
                    last={
                      index ===
                      planets.length - 1
                    }
                  />
                )
              )}

            </div>

          </section>

          {/* =================================================
              CALCULATION DETAILS
          ================================================= */}

          <section className="pt-6">

            <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="flex items-start gap-3">

                <MapPin
                  size={21}
                  className="mt-0.5 shrink-0 text-[#FFD400]"
                />

                <div className="min-w-0">

                  <p className="text-[13px] font-bold text-white">
                    Calculation Details
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400">
                    {kundli.birth.place},{" "}
                    {kundli.birth.country}
                  </p>

                  <p className="mt-1 text-[9px] text-gray-500">
                    Latitude:{" "}
                    {kundli.birth.latitude.toFixed(4)}
                    {" • "}
                    Longitude:{" "}
                    {kundli.birth.longitude.toFixed(4)}
                  </p>

                  <p className="text-[9px] text-gray-500">
                    Timezone:{" "}
                    {kundli.birth.timezone}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    <span className="rounded-lg bg-[#FFD400]/10 px-2 py-1 text-[9px] font-bold text-[#FFD400]">
                      {kundli.system.zodiac ||
                        "Sidereal"}
                    </span>

                    <span className="rounded-lg bg-[#FFD400]/10 px-2 py-1 text-[9px] font-bold text-[#FFD400]">
                      {kundli.system.ayanamsa ||
                        "Lahiri"}
                    </span>

                    <span className="rounded-lg bg-[#FFD400]/10 px-2 py-1 text-[9px] font-bold text-[#FFD400]">
                      {kundli.system.houseSystem ||
                        "Whole Sign"}
                    </span>

                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              ASTROLOGER CTA
          ================================================= */}

          <section className="pt-7">

            <div className="rounded-2xl border border-[#FFD400]/20 bg-[#101C30] p-4">

              <div className="flex items-start gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFD400] text-black">
                  <UserRound size={22} />
                </div>

                <div>

                  <h2 className="text-[16px] font-black text-white">
                    Need Help Understanding
                    Your Kundli?
                  </h2>

                  <p className="mt-1 text-[10px] leading-5 text-gray-400">
                    Connect with a verified
                    astrologer for personalized
                    guidance.
                  </p>

                </div>

              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">

                <Link
                  href="/religious/astrology/astrologers?mode=call"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#FFD400] text-[12px] font-bold text-black"
                >
                  <Phone size={17} />
                  Call
                </Link>

                <Link
                  href="/religious/astrology/astrologers?mode=chat"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#2495D5] text-[12px] font-bold text-white"
                >
                  <MessageCircle
                    size={17}
                    fill="currentColor"
                  />
                  Chat
                </Link>

              </div>

            </div>
          </section>

          {/* =================================================
              SECURITY
          ================================================= */}

          <section className="pt-6">

            <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="flex items-start gap-3">

                <ShieldCheck
                  size={22}
                  className="shrink-0 text-[#FFD400]"
                />

                <div>

                  <p className="text-[13px] font-bold text-white">
                    Your Information Is Secure
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-gray-400">
                    Your birth details are used
                    only for your astrology
                    calculations.
                  </p>

                </div>

              </div>

            </div>
          </section>

          <div className="h-10" />

        </div>

        <BottomNavigation />

      </div>
    </main>
  );
}

/* =========================================================
   VIMSHOTTARI DASHA CALCULATION
========================================================= */

function calculateVimshottariDasha(
  dob: string,
  moonLongitude: number
) {
  const birthDate = new Date(
    `${dob}T00:00:00`
  );

  if (Number.isNaN(birthDate.getTime())) {
    return {
      mahadasha: null,
      antardasha: null,
      allMahadashas: [],
    };
  }

  const nakshatraSize =
    360 / 27;

  const nakshatraIndex = Math.min(
    26,
    Math.floor(
      normalizeLongitude(moonLongitude) /
      nakshatraSize
    )
  );

  const nakshatraStart =
    nakshatraIndex * nakshatraSize;

  const positionInNakshatra =
    normalizeLongitude(moonLongitude) -
    nakshatraStart;

  const fractionCompleted =
    positionInNakshatra /
    nakshatraSize;

  const fractionRemaining =
    1 - fractionCompleted;

  const startingLord =
    NAKSHATRA_LORDS[nakshatraIndex];

  const startingIndex =
    DASHA_SEQUENCE.findIndex(
      (dasha) =>
        dasha.planet === startingLord
    );

  const allMahadashas: DashaPeriod[] = [];

  let currentStart = new Date(
    birthDate
  );

  /* =====================================================
     FIRST MAHADASHA BALANCE
  ===================================================== */

  const firstDasha =
    DASHA_SEQUENCE[startingIndex];

  const firstYears =
    firstDasha.years *
    fractionRemaining;

  const firstEnd = addYears(
    currentStart,
    firstYears
  );

  allMahadashas.push({
    planet: firstDasha.planet,
    start: new Date(currentStart),
    end: firstEnd,
    years: firstYears,
  });

  currentStart = new Date(firstEnd);

  /* =====================================================
     NEXT MAHADASHA
  ===================================================== */

  for (
    let i = 1;
    i < 9;
    i++
  ) {
    const dasha =
      DASHA_SEQUENCE[
      (startingIndex + i) %
      DASHA_SEQUENCE.length
      ];

    const end = addYears(
      currentStart,
      dasha.years
    );

    allMahadashas.push({
      planet: dasha.planet,
      start: new Date(currentStart),
      end,
      years: dasha.years,
    });

    currentStart = new Date(end);
  }

  const now = new Date();

  const currentMahadasha =
    allMahadashas.find(
      (dasha) =>
        now >= dasha.start &&
        now < dasha.end
    ) || null;

  let currentAntardasha:
    | DashaPeriod
    | null = null;

  let antardashas: DashaPeriod[] = [];

  if (currentMahadasha) {
    antardashas =
      calculateAntardashas(
        currentMahadasha
      );

    currentAntardasha =
      antardashas.find(
        (dasha) =>
          now >= dasha.start &&
          now < dasha.end
      ) || null;
  }

  return {
    nakshatra: NAKSHATRAS[
      nakshatraIndex
    ],
    nakshatraLord: startingLord,
    mahadasha: currentMahadasha,
    antardasha: currentAntardasha,
    antardashas,
    allMahadashas,
  };
}

/* =========================================================
   ANTARDASHA
========================================================= */

function calculateAntardashas(
  mahadasha: DashaPeriod
): DashaPeriod[] {

  const mahadashaIndex =
    DASHA_SEQUENCE.findIndex(
      (item) =>
        item.planet ===
        mahadasha.planet
    );

  const result: DashaPeriod[] = [];

  let currentStart =
    new Date(mahadasha.start);

  for (
    let i = 0;
    i < 9;
    i++
  ) {

    const antardashaPlanet =
      DASHA_SEQUENCE[
      (mahadashaIndex + i) %
      DASHA_SEQUENCE.length
      ];

    const durationYears =
      (mahadasha.years *
        antardashaPlanet.years) /
      DASHA_YEARS;

    const end = addYears(
      currentStart,
      durationYears
    );

    result.push({
      planet:
        antardashaPlanet.planet,
      start: new Date(
        currentStart
      ),
      end,
      years: durationYears,
    });

    currentStart =
      new Date(end);
  }

  return result;
}

/* =========================================================
   NAVAMSHA CALCULATION
========================================================= */

interface NavamshaPlanet {
  name: string;
  hindiName: string;
  longitude: number;
  degree: number;
  signNumber: number;
  signName: string;
  signHindi: string;
  navamshaIndex: number;
  navamshaSignNumber: number;
  navamshaSignName: string;
  navamshaSignHindi: string;
  house: number;
  retrograde: boolean;
}

interface NavamshaData {
  ascendant: {
    signNumber: number;
    signName: string;
    signHindi: string;
    house: number;
  };

  planets: NavamshaPlanet[];

  houses: {
    house: number;
    signNumber: number;
    signName: string;
    signHindi: string;
    planets: NavamshaPlanet[];
  }[];
}

function calculateNavamsha(
  kundli: KundliData
): NavamshaData {

  const ascendantNavamsha =
    getNavamshaSign(
      kundli.ascendant.longitude
    );

  const ascendantHouse =
    1;

  const navamshaPlanets =
    kundli.planets.map(
      (planet) => {

        const navamsha =
          getNavamshaSign(
            planet.longitude
          );

        const house =
          getHouseFromAscendant(
            ascendantNavamsha.signNumber,
            navamsha.signNumber
          );

        return {
          name: planet.name,
          hindiName: planet.hindiName,
          longitude: planet.longitude,
          degree: planet.degree,
          signNumber: planet.signNumber,
          signName: planet.signName,
          signHindi: planet.signHindi,
          navamshaIndex:
            navamsha.navamshaIndex,
          navamshaSignNumber:
            navamsha.signNumber,
          navamshaSignName:
            navamsha.name,
          navamshaSignHindi:
            navamsha.hindi,
          house,
          retrograde:
            planet.retrograde,
        };
      }
    );

  const houses =
    Array.from(
      { length: 12 },
      (_, index) => {

        const houseNumber =
          index + 1;

        const signNumber =
          ((ascendantNavamsha.signNumber -
            1 +
            index) %
            12) +
          1;

        const sign =
          SIGNS[signNumber - 1];

        return {
          house: houseNumber,
          signNumber,
          signName: sign.name,
          signHindi: sign.hindi,
          planets:
            navamshaPlanets.filter(
              (planet) =>
                planet.house ===
                houseNumber
            ),
        };
      }
    );

  return {
    ascendant: {
      signNumber:
        ascendantNavamsha.signNumber,
      signName:
        ascendantNavamsha.name,
      signHindi:
        ascendantNavamsha.hindi,
      house: ascendantHouse,
    },

    planets: navamshaPlanets,

    houses,
  };
}

/* =========================================================
   NAVAMSHA SIGN
========================================================= */

function getNavamshaSign(
  longitude: number
) {

  const normalized =
    normalizeLongitude(
      longitude
    );

  const signIndex =
    Math.floor(
      normalized / 30
    );

  const degreeInSign =
    normalized -
    signIndex * 30;

  const navamshaSize =
    30 / 9;

  const navamshaIndex =
    Math.min(
      8,
      Math.floor(
        degreeInSign /
        navamshaSize
      )
    );

  /*
   * Navamsha starts:
   *
   * Movable signs:
   * Aries, Cancer, Libra, Capricorn
   * -> same sign
   *
   * Fixed signs:
   * Taurus, Leo, Scorpio, Aquarius
   * -> 9th sign from it
   *
   * Dual signs:
   * Gemini, Virgo, Sagittarius, Pisces
   * -> 5th sign from it
   */

  const signNumber =
    signIndex + 1;

  let startingSignIndex: number;

  if (
    [1, 4, 7, 10].includes(
      signNumber
    )
  ) {
    startingSignIndex =
      signIndex;
  } else if (
    [2, 5, 8, 11].includes(
      signNumber
    )
  ) {
    startingSignIndex =
      (signIndex + 8) % 12;
  } else {
    startingSignIndex =
      (signIndex + 4) % 12;
  }

  const navamshaSignIndex =
    (startingSignIndex +
      navamshaIndex) %
    12;

  const sign =
    SIGNS[
    navamshaSignIndex
    ];

  return {
    navamshaIndex,
    signNumber:
      navamshaSignIndex + 1,
    name: sign.name,
    hindi: sign.hindi,
  };
}

/* =========================================================
   HOUSE FROM ASCENDANT
========================================================= */

function getHouseFromAscendant(
  ascendantSign: number,
  planetSign: number
) {

  return (
    ((planetSign -
      ascendantSign +
      12) %
      12) +
    1
  );
}

/* =========================================================
   NORMALIZE LONGITUDE
========================================================= */

function normalizeLongitude(
  longitude: number
) {

  let value =
    longitude % 360;

  if (value < 0) {
    value += 360;
  }

  return value;
}

/* =========================================================
   DATE HELPERS
========================================================= */

function addYears(
  date: Date,
  years: number
) {

  const result =
    new Date(date);

  const milliseconds =
    years *
    365.2425 *
    24 *
    60 *
    60 *
    1000;

  result.setTime(
    result.getTime() +
    milliseconds
  );

  return result;
}

/* =========================================================
   DATE FORMAT
========================================================= */

function formatDate(
  date: Date
) {

  return date.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
}

/* =========================================================
   DASHA SECTION
========================================================= */

/* =========================================================
   DASHA SECTION
   Toggle is ONLY on KundliResultPage
========================================================= */

function DashaSection({
  result,
}: {
  result: ReturnType<
    typeof calculateVimshottariDasha
  >;
}) {
  const [showAntardasha, setShowAntardasha] =
    useState(false);
  const [openMahadashas, setOpenMahadashas] = useState<
    Set<number>
  >(new Set());

  if (
    !result.mahadasha ||
    !result.antardasha
  ) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
        <p className="text-[11px] text-red-300">
          Dasha calculation unavailable.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">

      {/* =====================================================
          CURRENT MAHADASHA
      ===================================================== */}

      <div
        className={`overflow-hidden rounded-2xl border bg-gradient-to-br from-[#191C12] to-[#101C30] transition-all ${showAntardasha
            ? "border-[#FFD400]/50"
            : "border-[#FFD400]/30"
          }`}
      >

        {/* ===================================================
            MAHADASHA HEADER
        =================================================== */}

        <div className="flex items-center gap-3 p-4">

          {/* PLANET */}

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFD400] text-lg font-black text-black">
            {getPlanetShort(
              result.mahadasha.planet
            )}
          </div>

          {/* DETAILS */}

          <div className="min-w-0 flex-1">

            <div className="flex items-center gap-2">

              <p className="text-[9px] font-bold uppercase tracking-wider text-[#FFD400]">
                Currently Running
              </p>

              <span className="rounded-md bg-[#FFD400] px-1.5 py-0.5 text-[6px] font-black text-black">
                NOW
              </span>

            </div>

            <h3 className="mt-1 text-[18px] font-black text-white">
              {result.mahadasha.planet}
            </h3>

            <p className="mt-0.5 text-[10px] text-[#FFD400]">
              {PLANET_HINDI[
                result.mahadasha.planet
              ]}{" "}
              Mahadasha
            </p>

          </div>

          {/* =================================================
              TOGGLE
          ================================================= */}

        </div>

        {/* ===================================================
            MAHADASHA DATES
        =================================================== */}

        <div className="grid grid-cols-2 gap-2 px-4 pb-4">

          <DashaDateCard
            label="Mahadasha Start"
            date={result.mahadasha.start}
          />

          <DashaDateCard
            label="Mahadasha End"
            date={result.mahadasha.end}
          />

        </div>

        {/* ===================================================
            ANTARDASHA - OPEN ONLY WHEN TOGGLE ON
        =================================================== */}

        {showAntardasha && (
          <div className="border-t border-[#FFD400]/20 px-4 pb-4 pt-4">

            {/* CURRENT ANTARDASHA */}

            <div className="rounded-xl border border-[#FFD400]/20 bg-[#0B1320] p-3">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-wider text-gray-500">
                    Current Antardasha
                  </p>

                  <div className="mt-1 flex items-center gap-2">

                    <h3 className="text-[16px] font-black text-white">
                      {result.antardasha.planet}
                    </h3>

                    <span className="rounded-md bg-[#FFD400] px-1.5 py-0.5 text-[6px] font-black text-black">
                      NOW
                    </span>

                  </div>

                  <p className="mt-0.5 text-[9px] text-[#FFD400]">
                    {PLANET_HINDI[
                      result.antardasha.planet
                    ]}
                  </p>

                </div>

                <div className="rounded-xl bg-[#FFD400]/10 px-3 py-2 text-[9px] font-black text-[#FFD400]">
                  {result.mahadasha.planet}
                  {" / "}
                  {result.antardasha.planet}
                </div>

              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">

                <DashaDateCard
                  label="Antardasha Start"
                  date={
                    result.antardasha.start
                  }
                />

                <DashaDateCard
                  label="Antardasha End"
                  date={
                    result.antardasha.end
                  }
                />

              </div>

            </div>

            {/* =================================================
                ANTARDASHA TIMELINE
            ================================================= */}

            <div className="mt-3">

              <p className="mb-2 text-[10px] font-bold text-white">
                Antardasha Timeline
              </p>

              <div className="space-y-2">

                {result.antardashas.map(
                  (dasha) => {

                    const current =
                      dasha.planet ===
                      result.antardasha?.planet;

                    return (
                      <div
                        key={`${dasha.planet}-${dasha.start.getTime()}`}
                        className={`flex items-center justify-between rounded-xl px-3 py-2.5 ${current
                            ? "border border-[#FFD400]/30 bg-[#FFD400]/10"
                            : "bg-[#0B1320]"
                          }`}
                      >

                        <div className="flex items-center gap-2">

                          <span
                            className={`flex h-7 w-7 items-center justify-center rounded-lg text-[9px] font-black ${current
                                ? "bg-[#FFD400] text-black"
                                : "bg-white/5 text-[#FFD400]"
                              }`}
                          >
                            {getPlanetShort(
                              dasha.planet
                            )}
                          </span>

                          <div>

                            <p className="text-[9px] font-bold text-white">
                              {dasha.planet}
                            </p>

                            <p className="text-[7px] text-[#FFD400]">
                              {PLANET_HINDI[
                                dasha.planet
                              ]}
                            </p>

                          </div>

                        </div>

                        <div className="text-right">

                          <p className="text-[7px] text-gray-500">
                            {formatDate(
                              dasha.start
                            )}
                          </p>

                          <p className="text-[7px] text-gray-600">
                            {formatDate(
                              dasha.end
                            )}
                          </p>

                          {current && (
                            <p className="mt-0.5 text-[7px] font-bold text-[#FFD400]">
                              CURRENT
                            </p>
                          )}

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

          </div>
        )}

      </div>

      {/* =====================================================
          MAHADASHA TIMELINE
      ===================================================== */}

      <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

        <p className="mb-3 text-[11px] font-bold text-white">
          Mahadasha Timeline
        </p>

        <div className="space-y-2">

          {result.allMahadashas.map(
            (dasha, index) => {

              const isCurrent =
                dasha.planet ===
                result.mahadasha?.planet;

              const isOpen =
                openMahadashas.has(index);

              return (
                <div
                  key={`${dasha.planet}-${dasha.start.getTime()}`}
                  className={`overflow-hidden rounded-xl ${isCurrent
                      ? "border border-[#FFD400]/30 bg-[#FFD400]/10"
                      : "bg-[#0B1320]"
                    }`}
                >

                  {/* =================================================
                MAHADASHA ROW
            ================================================= */}

                  <div className="flex items-center justify-between gap-3 px-3 py-2.5">

                    {/* LEFT SIDE */}

                    <div className="flex min-w-0 items-center gap-2">

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-black ${isCurrent
                            ? "bg-[#FFD400] text-black"
                            : "bg-white/5 text-gray-300"
                          }`}
                      >
                        {getPlanetShort(
                          dasha.planet
                        )}
                      </div>

                      <div className="min-w-0">

                        <div className="flex items-center gap-2">

                          <p className="text-[10px] font-bold text-white">
                            {dasha.planet}
                          </p>

                          {isCurrent && (
                            <span className="rounded-md bg-[#FFD400] px-1.5 py-0.5 text-[6px] font-black text-black">
                              CURRENT
                            </span>
                          )}

                        </div>

                        <p className="mt-0.5 text-[8px] text-gray-500">
                          {formatDate(
                            dasha.start
                          )}
                        </p>

                      </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="flex shrink-0 items-center gap-3">

                      <div className="text-right">

                        <p className="text-[9px] font-semibold text-gray-400">
                          {formatDate(
                            dasha.end
                          )}
                        </p>

                      </div>

                      {/* =================================================
                    TOGGLE BUTTON
                ================================================= */}

                      <button
                        type="button"
                        aria-label={
                          isOpen
                            ? `Collapse ${dasha.planet} Antardasha`
                            : `Expand ${dasha.planet} Antardasha`
                        }
                        aria-expanded={isOpen}
                        onClick={() => {
                          setOpenMahadashas((previous) => {
                            const next = new Set(previous);

                            if (next.has(index)) {
                              next.delete(index);
                            } else {
                              next.add(index);
                            }

                            return next;
                          });
                        }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${isOpen
                            ? "border-[#FFD400]/40 bg-[#FFD400]/10 text-[#FFD400]"
                            : "border-[#263449] bg-[#182235] text-[#AAB4C3]"
                          }`}
                      >
                        {isOpen ? (
                          <ChevronUp size={15} strokeWidth={2.5} />
                        ) : (
                          <ChevronDown size={15} strokeWidth={2.5} />
                        )}
                      </button>

                    </div>

                  </div>

                  {/* =================================================
                ANTARDASHA
                TOGGLE ON होने पर खुलेगा
            ================================================= */}

                  {isOpen && (
                    <div className="border-t border-[#1E2A3D] px-3 pb-3 pt-3">

                      <div className="mb-2 flex items-center justify-between">

                        <p className="text-[8px] font-bold uppercase tracking-wider text-gray-500">
                          {dasha.planet} Antardasha
                        </p>

                        <span className="text-[7px] font-semibold text-[#FFD400]">
                          Sub Periods
                        </span>

                      </div>

                      <div className="space-y-1.5">

                        {result.antardashas.map(
                          (antardasha, antardashaIndex) => {

                            const isCurrentAntardasha =
                              isCurrent &&
                              antardasha.planet ===
                              result.antardasha?.planet;

                            return (
                              <div
                                key={`${dasha.planet}-${antardasha.planet}-${antardashaIndex}`}
                                className={`flex items-center justify-between rounded-lg px-3 py-2 ${isCurrentAntardasha
                                    ? "border border-[#FFD400]/20 bg-[#FFD400]/10"
                                    : "bg-[#101C30]"
                                  }`}
                              >

                                {/* ANTARDASHA LEFT */}

                                <div className="flex items-center gap-2">

                                  <div
                                    className={`flex h-7 w-7 items-center justify-center rounded-lg text-[8px] font-black ${isCurrentAntardasha
                                        ? "bg-[#FFD400] text-black"
                                        : "bg-white/5 text-gray-300"
                                      }`}
                                  >
                                    {getPlanetShort(
                                      antardasha.planet
                                    )}
                                  </div>

                                  <div>

                                    <p className="text-[9px] font-bold text-white">
                                      {
                                        antardasha.planet
                                      }
                                    </p>

                                    <p className="text-[7px] text-[#FFD400]">
                                      {
                                        PLANET_HINDI[
                                        antardasha.planet
                                        ]
                                      }
                                    </p>

                                  </div>

                                </div>

                                {/* ANTARDASHA RIGHT */}

                                <div className="text-right">

                                  <p className="text-[7px] text-gray-500">
                                    {formatDate(
                                      antardasha.start
                                    )}
                                  </p>

                                  <p className="text-[7px] text-gray-600">
                                    {formatDate(
                                      antardasha.end
                                    )}
                                  </p>

                                  {isCurrentAntardasha && (
                                    <p className="mt-0.5 text-[6px] font-black text-[#FFD400]">
                                      NOW
                                    </p>
                                  )}

                                </div>

                              </div>
                            );
                          }
                        )}

                      </div>

                    </div>
                  )}

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   DASHA DATE CARD
========================================================= */

function DashaDateCard({
  label,
  date,
}: {
  label: string;
  date: Date;
}) {

  return (
    <div className="rounded-xl bg-[#0B1320] p-3">

      <p className="text-[8px] font-semibold text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-[10px] font-bold text-white">
        {formatDate(date)}
      </p>

    </div>
  );
}

/* =========================================================
   PLANET SHORT
========================================================= */

function getPlanetShort(
  planet: string
) {

  const map: Record<
    string,
    string
  > = {
    Sun: "Su",
    Moon: "Mo",
    Mars: "Ma",
    Mercury: "Me",
    Jupiter: "Ju",
    Venus: "Ve",
    Saturn: "Sa",
    Rahu: "Ra",
    Ketu: "Ke",
  };

  return map[planet] || planet.slice(0, 2);
}

/* =========================================================
   NAVAMSHA CHART
========================================================= */

function NavamshaChart({
  navamsha,
}: {
  navamsha: NavamshaData;
}) {

  const HOUSE_CENTERS: Record<
    number,
    { x: number; y: number }
  > = {
    1: { x: 250, y: 115 },
    2: { x: 125, y: 75 },
    3: { x: 75, y: 155 },
    4: { x: 115, y: 250 },
    5: { x: 40, y: 335 },
    6: { x: 125, y: 425 },
    7: { x: 250, y: 385 },
    8: { x: 375, y: 425 },
    9: { x: 460, y: 335 },
    10: { x: 385, y: 250 },
    11: { x: 450, y: 106 },
    12: { x: 375, y: 75 },
  };

  return (
    <div className="mx-auto w-full max-w-[390px]">

      <div className="overflow-hidden rounded-xl border-2 border-[#C89B16] bg-[#FFFDF5]">

        <svg
          viewBox="0 0 500 500"
          className="block h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
        >

          <rect
            x="0"
            y="0"
            width="500"
            height="500"
            fill="#FFFDF5"
          />

          <rect
            x="5"
            y="5"
            width="490"
            height="490"
            fill="none"
            stroke="#C89B16"
            strokeWidth="3"
          />

          <line
            x1="5"
            y1="5"
            x2="250"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="495"
            y1="5"
            x2="250"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="5"
            y1="495"
            x2="250"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="495"
            y1="495"
            x2="250"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="250"
            y1="5"
            x2="5"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="250"
            y1="5"
            x2="495"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="250"
            y1="495"
            x2="5"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="250"
            y1="495"
            x2="495"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          {navamsha.houses.map(
            (house) => {

              const center =
                HOUSE_CENTERS[
                house.house
                ];

              const planets =
                house.planets || [];

              return (
                <g
                  key={`d9-${house.house}`}
                >

                  <text
                    x={center.x}
                    y={center.y - 20}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="18"
                    fontWeight="700"
                    fill="#333333"
                    fontFamily="Arial, sans-serif"
                  >
                    {house.signNumber}
                  </text>

                  <text
                    x={center.x}
                    y={center.y - 5}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="8"
                    fontWeight="700"
                    fill="#9A7600"
                  >
                    H{house.house}
                  </text>

                  {house.house === 1 && (
                    <>
                      <text
                        x={center.x}
                        y={center.y + 10}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="14"
                        fontWeight="800"
                        fill="#A97900"
                      >
                        ल
                      </text>

                      <text
                        x={center.x}
                        y={center.y + 23}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="7"
                        fontWeight="600"
                        fill="#806300"
                      >
                        D9 Lagna
                      </text>
                    </>
                  )}

                  {planets.map(
                    (
                      planet,
                      index
                    ) => {

                      const planetY =
                        center.y +
                        30 +
                        index * 18;

                      return (
                        <g
                          key={`${house.house}-${planet.name}`}
                        >

                          <text
                            x={center.x}
                            y={
                              planetY - 8
                            }
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="7"
                            fontWeight="600"
                            fill="#555"
                          >
                            {planet.degree}°
                          </text>

                          <text
                            x={center.x}
                            y={
                              planetY + 4
                            }
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={
                              planet.hindiName
                                .length > 3
                                ? 9
                                : 11
                            }
                            fontWeight="800"
                            fill={
                              planet.name ===
                                "Rahu" ||
                                planet.name ===
                                "Ketu"
                                ? "#A33A3A"
                                : "#262626"
                            }
                          >
                            {planet.hindiName}
                          </text>

                        </g>
                      );
                    }
                  )}

                </g>
              );
            }
          )}

        </svg>

      </div>

      <div className="mt-2 rounded-xl bg-[#F7CBB4] px-3 py-3">

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] font-semibold text-black">

          <span>
            <b>ल</b> D9 Lagna
          </span>

          <span>
            संख्या = राशि
          </span>

          <span>
            D9 = Navamsha
          </span>

        </div>

      </div>

      <div className="mt-3 rounded-xl border border-[#E7D7A0] bg-[#FFFDF5] px-3 py-3">

        <p className="text-[9px] font-semibold uppercase tracking-wide text-[#9A7A00]">
          Navamsha Lagna
        </p>

        <div className="mt-1 flex items-center justify-between">

          <div>
            <p className="text-[13px] font-black text-[#333]">
              {navamsha.ascendant.signName}
            </p>

            <p className="text-[10px] text-[#806300]">
              {navamsha.ascendant.signHindi}
            </p>
          </div>

          <div className="rounded-lg bg-[#FFD400]/20 px-3 py-2">

            <p className="text-[8px] text-[#806300]">
              D9 Ascendant
            </p>

            <p className="text-[11px] font-black text-[#333]">
              House 1
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   NAVAMSHA PLANET ROW
========================================================= */

function NavamshaPlanetRow({
  planet,
  last,
}: {
  planet: NavamshaPlanet;
  last: boolean;
}) {

  return (
    <div
      className={`flex items-center px-3 py-3 ${!last
          ? "border-b border-[#1E2A3D]"
          : ""
        }`}
    >

      <div className="flex w-[38%] items-center gap-2">

        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFD400]/10 text-[10px] font-bold text-[#FFD400]">
          {planet.hindiName}
        </div>

        <div>

          <span className="block text-[10px] font-bold text-white">
            {planet.name}
          </span>

          <span className="text-[8px] text-gray-500">
            {planet.hindiName}
          </span>

        </div>

      </div>

      <div className="flex-1 text-center">

        <span className="text-[9px] text-gray-400">
          {planet.navamshaSignName}
        </span>

        <span className="mt-0.5 block text-[8px] text-[#FFD400]">
          {planet.navamshaSignHindi}
        </span>

      </div>

      <div className="w-[20%] text-right">

        <span className="text-[10px] font-semibold text-[#FFD400]">
          H{planet.house}
        </span>

        {planet.retrograde && (
          <span className="ml-1 text-[8px] text-red-400">
            R
          </span>
        )}

      </div>

    </div>
  );
}

/* =========================================================
   NORTH INDIAN KUNDLI CHART
========================================================= */

function NorthIndianKundliChart({
  houses,
  ascendant,
}: {
  houses: House[];
  ascendant: KundliData["ascendant"];
}) {

  const houseMap =
    new Map<number, House>(
      houses.map(
        (house) => [
          house.house,
          house,
        ]
      )
    );

  const HOUSE_CENTERS: Record<
    number,
    { x: number; y: number }
  > = {
    1: { x: 250, y: 115 },
    2: { x: 125, y: 75 },
    3: { x: 75, y: 155 },
    4: { x: 115, y: 250 },
    5: { x: 40, y: 335 },
    6: { x: 125, y: 425 },
    7: { x: 250, y: 385 },
    8: { x: 375, y: 425 },
    9: { x: 460, y: 335 },
    10: { x: 385, y: 250 },
    11: { x: 450, y: 106 },
    12: { x: 375, y: 75 },
  };

  const CONTENT_OFFSETS: Record<
    number,
    { x: number; y: number }
  > = {
    1: { x: 0, y: 0 },
    2: { x: 0, y: 4 },
    3: { x: 0, y: 3 },
    4: { x: 0, y: 0 },
    5: { x: 0, y: -2 },
    6: { x: 0, y: -4 },
    7: { x: 0, y: 0 },
    8: { x: 0, y: -4 },
    9: { x: 0, y: -2 },
    10: { x: 0, y: 0 },
    11: { x: 0, y: 3 },
    12: { x: 0, y: 4 },
  };

  return (
    <div className="mx-auto w-full max-w-[390px]">

      <div className="overflow-hidden rounded-xl border-2 border-[#C89B16] bg-[#FFFDF5]">

        <svg
          viewBox="0 0 500 500"
          className="block h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
        >

          <rect
            x="0"
            y="0"
            width="500"
            height="500"
            fill="#FFFDF5"
          />

          <rect
            x="5"
            y="5"
            width="490"
            height="490"
            fill="none"
            stroke="#C89B16"
            strokeWidth="3"
          />

          <line
            x1="5"
            y1="5"
            x2="250"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="495"
            y1="5"
            x2="250"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="5"
            y1="495"
            x2="250"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="495"
            y1="495"
            x2="250"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="250"
            y1="5"
            x2="5"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="250"
            y1="5"
            x2="495"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="250"
            y1="495"
            x2="5"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          <line
            x1="250"
            y1="495"
            x2="495"
            y2="250"
            stroke="#C89B16"
            strokeWidth="2.5"
          />

          {Array.from(
            { length: 12 },
            (_, index) =>
              index + 1
          ).map(
            (houseNumber) => {

              const house =
                houseMap.get(
                  houseNumber
                );

              if (!house) {
                return null;
              }

              const baseCenter =
                HOUSE_CENTERS[
                houseNumber
                ];

              const offset =
                CONTENT_OFFSETS[
                houseNumber
                ];

              const center = {
                x:
                  baseCenter.x +
                  offset.x,
                y:
                  baseCenter.y +
                  offset.y,
              };

              const planets =
                house.planets ||
                [];

              const rashiNumber =
                house.signNumber;

              return (
                <g
                  key={`house-${houseNumber}`}
                >

                  <text
                    x={center.x}
                    y={center.y - 22}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="20"
                    fontWeight="700"
                    fill="#333333"
                    fontFamily="Arial, sans-serif"
                  >
                    {rashiNumber}
                  </text>

                  <text
                    x={center.x}
                    y={center.y - 5}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="8"
                    fontWeight="700"
                    fill="#9A7600"
                    fontFamily="Arial, sans-serif"
                  >
                    H{houseNumber}
                  </text>

                  {houseNumber === 1 && (
                    <>
                      <text
                        x={center.x}
                        y={center.y + 9}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="15"
                        fontWeight="800"
                        fill="#A97900"
                      >
                        ल
                      </text>

                      <text
                        x={center.x}
                        y={center.y + 23}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="7.5"
                        fontWeight="600"
                        fill="#806300"
                      >
                        Lagna
                      </text>
                    </>
                  )}

                  {planets.map(
                    (
                      planet,
                      planetIndex
                    ) => {

                      const total =
                        planets.length;

                      let planetY =
                        center.y + 30;

                      if (
                        total === 1
                      ) {
                        planetY =
                          center.y + 27;
                      } else if (
                        total === 2
                      ) {
                        planetY =
                          center.y +
                          20 +
                          planetIndex *
                          22;
                      } else if (
                        total === 3
                      ) {
                        planetY =
                          center.y +
                          14 +
                          planetIndex *
                          19;
                      } else if (
                        total === 4
                      ) {
                        planetY =
                          center.y +
                          9 +
                          planetIndex *
                          17;
                      } else {
                        planetY =
                          center.y -
                          2 +
                          planetIndex *
                          17;
                      }

                      const degreeText =
                        `${String(
                          planet.degree
                        ).padStart(
                          2,
                          "0"
                        )}°${String(
                          planet.minute
                        ).padStart(
                          2,
                          "0"
                        )}′`;

                      const abbreviation =
                        getPlanetAbbreviation(
                          planet.name
                        );

                      const planetColor =
                        planet.name ===
                          "Rahu" ||
                          planet.name ===
                          "Ketu"
                          ? "#A33A3A"
                          : "#262626";

                      return (
                        <g
                          key={`${houseNumber}-${planet.name}-${planetIndex}`}
                        >

                          <text
                            x={center.x}
                            y={
                              planetY - 9
                            }
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="8"
                            fontWeight="600"
                            fill="#4A4A4A"
                          >
                            {degreeText}
                          </text>

                          <text
                            x={center.x}
                            y={
                              planetY + 3
                            }
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={
                              abbreviation.length >
                                2
                                ? 10
                                : 14
                            }
                            fontWeight="800"
                            fill={
                              planetColor
                            }
                            fontFamily="'Noto Sans Devanagari', Arial, sans-serif"
                          >
                            {planet.hindiName}

                            {planet.retrograde
                              ? " R"
                              : ""}
                          </text>

                        </g>
                      );
                    }
                  )}

                </g>
              );
            }
          )}

        </svg>
      </div>

      <div className="mt-2 rounded-xl bg-[#F7CBB4] px-3 py-3">

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-semibold text-black">

          <span>
            <b className="text-red-600">
              R
            </b>{" "}
            वक्री
          </span>

          <span>
            <b>ल</b> लग्न
          </span>

          <span>
            संख्या = राशि
          </span>

        </div>
      </div>

      <div className="mt-3 rounded-xl border border-[#E7D7A0] bg-[#FFFDF5] px-3 py-3">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-wide text-[#9A7A00]">
              Ascendant / Lagna
            </p>

            <p className="mt-1 text-[13px] font-black text-[#333]">
              {ascendant.signName}
              {" • "}
              {ascendant.signHindi}
            </p>

          </div>

          <div className="text-right">

            <p className="text-[9px] font-semibold text-[#555]">
              Degree
            </p>

            <p className="text-[12px] font-bold text-[#222]">
              {ascendant.degree}°
              {" "}
              {String(
                ascendant.minute
              ).padStart(
                2,
                "0"
              )}
              ′
            </p>

          </div>

        </div>
      </div>

    </div>
  );
}

/* =========================================================
   PLANET ABBREVIATION
========================================================= */

function getPlanetAbbreviation(
  planetName: string
): string {

  const map: Record<
    string,
    string
  > = {
    Sun: "Su",
    Moon: "Mo",
    Mars: "Ma",
    Mercury: "Me",
    Jupiter: "Ju",
    Venus: "Ve",
    Saturn: "Sa",
    Rahu: "Ra",
    Ketu: "Ke",
  };

  return (
    map[planetName] ||
    planetName
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {

  return (
    <div className="rounded-xl border border-[#1E2A3D] bg-[#101C30] p-3">

      <div className="flex items-center gap-2 text-[#FFD400]">

        {icon}

        <span className="text-[8px] font-semibold text-gray-500">
          {label}
        </span>

      </div>

      <p className="mt-2 truncate text-[10px] font-bold text-white">
        {value}
      </p>

    </div>
  );
}

/* =========================================================
   ASTRO CARD
========================================================= */

function AstroCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle?: string;
}) {

  return (
    <div className="rounded-xl border border-[#1E2A3D] bg-[#101C30] p-4">

      <div className="flex items-center gap-2">

        <Star
          size={15}
          className="text-[#FFD400]"
        />

        <p className="text-[10px] font-semibold text-gray-400">
          {title}
        </p>

      </div>

      <p className="mt-3 text-[13px] font-black text-white">
        {value}
      </p>

      {subtitle && (
        <p className="mt-1 text-[9px] text-[#FFD400]">
          {subtitle}
        </p>
      )}

    </div>
  );
}

/* =========================================================
   PLANET ROW
========================================================= */

function PlanetRow({
  planet,
  hindiName,
  sign,
  house,
  degree,
  minute,
  retrograde,
  last = false,
}: {
  planet: string;
  hindiName: string;
  sign: string;
  house: number;
  degree: number;
  minute: number;
  retrograde: boolean;
  last?: boolean;
}) {

  return (
    <div
      className={`flex items-center px-3 py-3 ${!last
          ? "border-b border-[#1E2A3D]"
          : ""
        }`}
    >

      <div className="flex w-[36%] items-center gap-2">

        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFD400]/10 text-[10px] font-bold text-[#FFD400]">
          {hindiName}
        </div>

        <div>

          <span className="block text-[10px] font-bold text-white">
            {planet}
          </span>

          <span className="text-[8px] text-gray-500">
            {hindiName}
          </span>

        </div>

      </div>

      <div className="flex-1 text-center">

        <span className="text-[9px] text-gray-300">
          {sign}
        </span>

        <span className="mt-0.5 block text-[8px] text-gray-500">
          {degree}°
          {" "}
          {String(
            minute
          ).padStart(
            2,
            "0"
          )}
          ′
        </span>

      </div>

      <div className="w-[20%] text-right">

        <span className="text-[10px] font-semibold text-[#FFD400]">
          H{house}
        </span>

        {retrograde && (
          <span className="ml-1 text-[8px] text-red-400">
            R
          </span>
        )}

      </div>
      {/* <KundliDasha dashas={[]} /> */}

    </div>

  );
}