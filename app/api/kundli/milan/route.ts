import { NextRequest, NextResponse } from "next/server";

/* =========================================================
   TYPES
========================================================= */

interface PersonInput {
  name: string;
  gender: "Male" | "Female";
  date: string;
  time: string;
  place: string;
}

interface GunaItem {
  name: string;
  obtained: number;
  total: number;
}

interface Planet {
  name: string;
  longitude: number;
  signIndex: number;
  signName: string;
  house: number;
}

interface KundliResponse {
  success: boolean;

  summary: {
    moonSign: string;
    moonSignHindi?: string;
    nakshatra: string;
    nakshatraPada?: number;
  };

  planets: Planet[];
}

/* =========================================================
   CONSTANTS
========================================================= */

const RASHIS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

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
  "Dhanishta",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];

/* =========================================================
   GANA
========================================================= */

const GANA: Record<string, string> = {
  Ashwini: "Deva",
  Bharani: "Manushya",
  Krittika: "Rakshasa",
  Rohini: "Manushya",
  Mrigashira: "Deva",
  Ardra: "Manushya",
  Punarvasu: "Deva",
  Pushya: "Deva",
  Ashlesha: "Rakshasa",
  Magha: "Rakshasa",
  "Purva Phalguni": "Manushya",
  "Uttara Phalguni": "Manushya",
  Hasta: "Deva",
  Chitra: "Rakshasa",
  Swati: "Deva",
  Vishakha: "Rakshasa",
  Anuradha: "Deva",
  Jyeshtha: "Rakshasa",
  Mula: "Rakshasa",
  "Purva Ashadha": "Manushya",
  "Uttara Ashadha": "Manushya",
  Shravana: "Deva",
  Dhanishta: "Rakshasa",
  Shatabhisha: "Rakshasa",
  "Purva Bhadrapada": "Manushya",
  "Uttara Bhadrapada": "Manushya",
  Revati: "Deva",
};

/* =========================================================
   YONI
========================================================= */

const YONI: Record<string, string> = {
  Ashwini: "Horse",
  Shatabhisha: "Horse",

  Bharani: "Elephant",
  Revati: "Elephant",

  Krittika: "Sheep",
  Pushya: "Sheep",

  Rohini: "Serpent",
  Mrigashira: "Serpent",

  Ardra: "Dog",
  Mula: "Dog",

  Punarvasu: "Cat",
  Ashlesha: "Cat",

  Magha: "Rat",
  "Purva Phalguni": "Rat",

  "Uttara Phalguni": "Cow",
  "Uttara Bhadrapada": "Cow",

  Hasta: "Buffalo",
  Swati: "Buffalo",

  Chitra: "Tiger",
  Vishakha: "Tiger",

  Anuradha: "Deer",
  Jyeshtha: "Deer",

  "Purva Ashadha": "Monkey",
  Shravana: "Monkey",

  Dhanishta: "Lion",
  "Purva Bhadrapada": "Lion",
};

/* =========================================================
   RASHI LORD
========================================================= */

const RASHI_LORD: Record<string, string> = {
  Aries: "Mars",
  Taurus: "Venus",
  Gemini: "Mercury",
  Cancer: "Moon",
  Leo: "Sun",
  Virgo: "Mercury",
  Libra: "Venus",
  Scorpio: "Mars",
  Sagittarius: "Jupiter",
  Capricorn: "Saturn",
  Aquarius: "Saturn",
  Pisces: "Jupiter",
};

/* =========================================================
   VARNA
========================================================= */

const VARNA: Record<string, number> = {
  Aries: 0,
  Leo: 0,
  Sagittarius: 0,

  Taurus: 1,
  Virgo: 1,
  Capricorn: 1,

  Gemini: 2,
  Libra: 2,
  Aquarius: 2,

  Cancer: 3,
  Scorpio: 3,
  Pisces: 3,
};

/* =========================================================
   PLANET FRIENDSHIP
========================================================= */

const FRIENDS: Record<string, string[]> = {
  Sun: ["Moon", "Mars", "Jupiter"],
  Moon: ["Sun", "Mercury"],
  Mars: ["Sun", "Moon", "Jupiter"],
  Mercury: ["Sun", "Venus"],
  Jupiter: ["Sun", "Moon", "Mars"],
  Venus: ["Mercury", "Saturn"],
  Saturn: ["Mercury", "Venus"],
};

/* =========================================================
   HELPERS
========================================================= */

function normalizeNakshatra(value: string): string {
  const cleaned = String(value || "")
    .trim()
    .toLowerCase();

  return (
    NAKSHATRAS.find(
      (item) => item.toLowerCase() === cleaned
    ) || value
  );
}

function nakshatraIndex(value: string): number {
  return NAKSHATRAS.indexOf(
    normalizeNakshatra(value)
  );
}

/* =========================================================
   VARNA
========================================================= */

function calculateVarna(
  sign1: string,
  sign2: string
): number {
  const first = VARNA[sign1];
  const second = VARNA[sign2];

  if (
    first === undefined ||
    second === undefined
  ) {
    return 0;
  }

  return second >= first ? 1 : 0;
}

/* =========================================================
   VASHYA
========================================================= */

function vashyaGroup(sign: string): string {
  switch (sign) {
    case "Aries":
    case "Taurus":
    case "Sagittarius":
    case "Capricorn":
      return "Chatushpada";

    case "Gemini":
    case "Virgo":
    case "Libra":
    case "Aquarius":
      return "Manav";

    case "Cancer":
    case "Pisces":
      return "Jalchar";

    case "Leo":
      return "Vanchar";

    case "Scorpio":
      return "Keeta";

    default:
      return "";
  }
}

function calculateVashya(
  sign1: string,
  sign2: string
): number {
  const v1 = vashyaGroup(sign1);
  const v2 = vashyaGroup(sign2);

  if (!v1 || !v2) {
    return 0;
  }

  if (v1 === v2) {
    return 2;
  }

  if (
    (v1 === "Manav" &&
      v2 === "Chatushpada") ||
    (v1 === "Chatushpada" &&
      v2 === "Manav")
  ) {
    return 1;
  }

  if (
    (v1 === "Jalchar" &&
      v2 === "Manav") ||
    (v1 === "Manav" &&
      v2 === "Jalchar")
  ) {
    return 1;
  }

  return 0;
}

/* =========================================================
   TARA
========================================================= */

function taraValue(
  from: number,
  to: number
): number {
  const distance =
    ((to - from + 27) % 27) + 1;

  const remainder =
    ((distance - 1) % 9) + 1;

  return [1, 3, 5, 7].includes(remainder)
    ? 1
    : 0;
}

function calculateTara(
  nak1: string,
  nak2: string
): number {
  const a = nakshatraIndex(nak1);
  const b = nakshatraIndex(nak2);

  if (a < 0 || b < 0) {
    return 0;
  }

  const first = taraValue(a, b);
  const second = taraValue(b, a);

  return Math.min(
    3,
    first + second
  );
}

/* =========================================================
   YONI
========================================================= */

function calculateYoni(
  nak1: string,
  nak2: string
): number {
  const y1 = YONI[nak1];
  const y2 = YONI[nak2];

  if (!y1 || !y2) {
    return 0;
  }

  if (y1 === y2) {
    return 4;
  }

  const enemies: Record<
    string,
    string[]
  > = {
    Cat: ["Rat"],
    Rat: ["Cat"],

    Dog: ["Deer"],
    Deer: ["Dog"],

    Snake: ["Mongoose"],
    Mongoose: ["Snake"],

    Horse: ["Buffalo"],
    Buffalo: ["Horse"],

    Elephant: ["Lion"],
    Lion: ["Elephant"],

    Sheep: ["Monkey"],
    Monkey: ["Sheep"],

    Cow: ["Tiger"],
    Tiger: ["Cow"],
  };

  if (enemies[y1]?.includes(y2)) {
    return 0;
  }

  return 2;
}

/* =========================================================
   GANA
========================================================= */

function calculateGana(
  nak1: string,
  nak2: string
): number {
  const g1 = GANA[nak1];
  const g2 = GANA[nak2];

  if (!g1 || !g2) {
    return 0;
  }

  if (g1 === g2) {
    return 6;
  }

  if (
    (g1 === "Deva" &&
      g2 === "Manushya") ||
    (g1 === "Manushya" &&
      g2 === "Deva")
  ) {
    return 5;
  }

  if (
    (g1 === "Deva" &&
      g2 === "Rakshasa") ||
    (g1 === "Rakshasa" &&
      g2 === "Deva")
  ) {
    return 1;
  }

  return 0;
}

/* =========================================================
   GRAHA MAITRI
========================================================= */

function calculateGrahaMaitri(
  sign1: string,
  sign2: string
): number {
  const lord1 = RASHI_LORD[sign1];
  const lord2 = RASHI_LORD[sign2];

  if (!lord1 || !lord2) {
    return 0;
  }

  if (lord1 === lord2) {
    return 5;
  }

  const firstFriends =
    FRIENDS[lord1] || [];

  const secondFriends =
    FRIENDS[lord2] || [];

  const firstIsFriend =
    firstFriends.includes(lord2);

  const secondIsFriend =
    secondFriends.includes(lord1);

  if (
    firstIsFriend &&
    secondIsFriend
  ) {
    return 5;
  }

  if (
    firstIsFriend ||
    secondIsFriend
  ) {
    return 4;
  }

  return 1;
}

/* =========================================================
   BHAKOOT
========================================================= */

function calculateBhakoot(
  sign1: string,
  sign2: string
): number {
  const a = RASHIS.indexOf(sign1);
  const b = RASHIS.indexOf(sign2);

  if (a < 0 || b < 0) {
    return 0;
  }

  const distance1 =
    ((b - a + 12) % 12) + 1;

  const distance2 =
    ((a - b + 12) % 12) + 1;

  const zeroCombinations = [
    [2, 12],
    [12, 2],
    [5, 9],
    [9, 5],
    [6, 8],
    [8, 6],
  ];

  const blocked =
    zeroCombinations.some(
      ([x, y]) =>
        x === distance1 &&
        y === distance2
    );

  return blocked ? 0 : 7;
}

/* =========================================================
   NADI
========================================================= */

function nadiType(
  nakshatra: string
): number {
  const index =
    nakshatraIndex(nakshatra);

  if (index < 0) {
    return -1;
  }

  return index % 3;
}

function calculateNadi(
  nak1: string,
  nak2: string
): number {
  const n1 = nadiType(nak1);
  const n2 = nadiType(nak2);

  if (n1 < 0 || n2 < 0) {
    return 0;
  }

  return n1 === n2 ? 0 : 8;
}

/* =========================================================
   COMPATIBILITY
========================================================= */

function compatibility(
  score: number
): string {
  if (score >= 28) {
    return "Excellent Compatibility";
  }

  if (score >= 24) {
    return "Very Good Compatibility";
  }

  if (score >= 18) {
    return "Good Compatibility";
  }

  if (score >= 12) {
    return "Average Compatibility";
  }

  return "Needs Care & Understanding";
}

/* =========================================================
   MANGLIK
========================================================= */

function isManglik(
  kundli: KundliResponse
): boolean {
  const mars =
    kundli.planets?.find(
      (planet) =>
        planet.name.toLowerCase() ===
        "mars"
    );

  if (!mars) {
    return false;
  }

  return [
    1,
    4,
    7,
    8,
    12,
  ].includes(mars.house);
}

/* =========================================================
   KUNDLI CALCULATION
========================================================= */

async function calculateKundli(
  request: NextRequest,
  person: PersonInput
): Promise<KundliResponse> {
  const url = new URL(
    "/api/kundli/calculate",
    request.url
  );

  const response =
    await fetch(url.toString(), {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        dob: person.date,
        time: person.time,
        place: person.place,
      }),

      cache: "no-store",
    });

  const data =
    (await response.json()) as
      KundliResponse & {
        error?: string;
      };

  if (
    !response.ok ||
    !data.success
  ) {
    throw new Error(
      data.error ||
        `Unable to calculate Kundli for ${person.name}.`
    );
  }

  if (
    !data.summary ||
    !data.summary.moonSign ||
    !data.summary.nakshatra
  ) {
    throw new Error(
      `Incomplete Kundli data received for ${person.name}.`
    );
  }

  return data;
}

/* =========================================================
   POST
========================================================= */

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      await request.json();

    const person1 =
      body?.person1 as PersonInput;

    const person2 =
      body?.person2 as PersonInput;

    /* -----------------------------------------
       VALIDATION
    ----------------------------------------- */

    if (!person1 || !person2) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Both person details are required.",
        },
        { status: 400 }
      );
    }

    const requiredFields = [
      "name",
      "date",
      "time",
      "place",
    ] as const;

    for (const field of requiredFields) {
      if (!person1[field]) {
        return NextResponse.json(
          {
            success: false,
            error: `Person 1 ${field} is required.`,
          },
          { status: 400 }
        );
      }

      if (!person2[field]) {
        return NextResponse.json(
          {
            success: false,
            error: `Person 2 ${field} is required.`,
          },
          { status: 400 }
        );
      }
    }

    /* -----------------------------------------
       CALCULATE REAL KUNDLIS
    ----------------------------------------- */

    const [
      kundli1,
      kundli2,
    ] = await Promise.all([
      calculateKundli(
        request,
        person1
      ),

      calculateKundli(
        request,
        person2
      ),
    ]);

    /* -----------------------------------------
       ACTUAL MOON DATA
    ----------------------------------------- */

    const summary1 =
      kundli1.summary;

    const summary2 =
      kundli2.summary;

    const sign1 =
      summary1.moonSign;

    const sign2 =
      summary2.moonSign;

    const nak1 =
      normalizeNakshatra(
        summary1.nakshatra
      );

    const nak2 =
      normalizeNakshatra(
        summary2.nakshatra
      );

    /* -----------------------------------------
       ASHTAKOOTA
       TOTAL = 36
    ----------------------------------------- */

    const guna: GunaItem[] = [
      {
        name: "Varna",

        obtained:
          calculateVarna(
            sign1,
            sign2
          ),

        total: 1,
      },

      {
        name: "Vashya",

        obtained:
          calculateVashya(
            sign1,
            sign2
          ),

        total: 2,
      },

      {
        name: "Tara",

        obtained:
          calculateTara(
            nak1,
            nak2
          ),

        total: 3,
      },

      {
        name: "Yoni",

        obtained:
          calculateYoni(
            nak1,
            nak2
          ),

        total: 4,
      },

      {
        name: "Graha Maitri",

        obtained:
          calculateGrahaMaitri(
            sign1,
            sign2
          ),

        total: 5,
      },

      {
        name: "Gana",

        obtained:
          calculateGana(
            nak1,
            nak2
          ),

        total: 6,
      },

      {
        name: "Bhakoot",

        obtained:
          calculateBhakoot(
            sign1,
            sign2
          ),

        total: 7,
      },

      {
        name: "Nadi",

        obtained:
          calculateNadi(
            nak1,
            nak2
          ),

        total: 8,
      },
    ];

    /* -----------------------------------------
       SCORE
    ----------------------------------------- */

    const score =
      guna.reduce(
        (total, item) =>
          total + item.obtained,
        0
      );

    const maxScore = 36;

    const percentage =
      Number(
        (
          (score /
            maxScore) *
          100
        ).toFixed(1)
      );

    /* -----------------------------------------
       RESPONSE
    ----------------------------------------- */

    return NextResponse.json(
      {
        success: true,

        score,

        maxScore,

        percentage,

        compatibility:
          compatibility(score),

        guna,

        person1: {
          name: person1.name,

          date: person1.date,

          time: person1.time,

          place: person1.place,

          moonSign:
            summary1.moonSign,

          moonSignHindi:
            summary1.moonSignHindi,

          nakshatra: nak1,

          nakshatraPada:
            summary1.nakshatraPada,
        },

        person2: {
          name: person2.name,

          date: person2.date,

          time: person2.time,

          place: person2.place,

          moonSign:
            summary2.moonSign,

          moonSignHindi:
            summary2.moonSignHindi,

          nakshatra: nak2,

          nakshatraPada:
            summary2.nakshatraPada,
        },

        manglik: {
          person1:
            isManglik(kundli1),

          person2:
            isManglik(kundli2),
        },

        calculation: {
          method: "Ashtakoota Guna Milan",
          maximumScore: 36,
          source: "Calculated from both birth details",
        },
      },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error(
      "KUNDLI MILAN ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        error:
          error instanceof Error
            ? error.message
            : "Kundli Milan calculation failed.",
      },
      {
        status: 500,
      }
    );
  }
}