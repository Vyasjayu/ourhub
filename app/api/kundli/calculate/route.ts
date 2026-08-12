import { NextRequest, NextResponse } from "next/server";
import * as Astronomy from "astronomy-engine";

/* =========================================================
   TYPES
========================================================= */

type PlanetKey =
  | "Sun"
  | "Moon"
  | "Mars"
  | "Mercury"
  | "Jupiter"
  | "Venus"
  | "Saturn"
  | "Rahu"
  | "Ketu";

interface LocationResult {
  latitude: number;
  longitude: number;
  timezone: string;
  name: string;
  country: string;
}

interface PlanetResult {
  name: PlanetKey;
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

interface Sign {
  number: number;
  name: string;
  hindi: string;
}

/* =========================================================
   RASHI
========================================================= */

const SIGNS: Sign[] = [
  { number: 1, name: "Mesha", hindi: "मेष" },
  { number: 2, name: "Vrishabha", hindi: "वृषभ" },
  { number: 3, name: "Mithuna", hindi: "मिथुन" },
  { number: 4, name: "Karka", hindi: "कर्क" },
  { number: 5, name: "Simha", hindi: "सिंह" },
  { number: 6, name: "Kanya", hindi: "कन्या" },
  { number: 7, name: "Tula", hindi: "तुला" },
  { number: 8, name: "Vrishchika", hindi: "वृश्चिक" },
  { number: 9, name: "Dhanu", hindi: "धनु" },
  { number: 10, name: "Makara", hindi: "मकर" },
  { number: 11, name: "Kumbha", hindi: "कुंभ" },
  { number: 12, name: "Meena", hindi: "मीन" },
];

/* =========================================================
   PLANET SHORT NAMES
========================================================= */

const PLANET_HINDI: Record<PlanetKey, string> = {
  Sun: "सू",
  Moon: "चं",
  Mars: "मं",
  Mercury: "बु",
  Jupiter: "गु",
  Venus: "शु",
  Saturn: "श",
  Rahu: "रा",
  Ketu: "के",
};

/* =========================================================
   NAKSHATRAS
========================================================= */

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

/* =========================================================
   HELPERS
========================================================= */

function normalizeDegrees(value: number): number {
  let result = value % 360;

  if (result < 0) {
    result += 360;
  }

  return result;
}

function julianDay(date: Date): number {
  return 2440587.5 + date.getTime() / 86400000;
}

function julianCenturies(date: Date): number {
  return (julianDay(date) - 2451545.0) / 36525;
}

/* =========================================================
   LAHIRI AYANAMSA

   Approximation suitable for this application.
========================================================= */

function lahiriAyanamsa(date: Date): number {
  const T = julianCenturies(date);

  return (
    23.853055 +
    1.3960213 * T +
    0.000308 * T * T
  );
}

/* =========================================================
   TROPICAL -> SIDEREAL
========================================================= */

function tropicalToSidereal(
  longitude: number,
  date: Date
): number {
  return normalizeDegrees(
    longitude - lahiriAyanamsa(date)
  );
}

/* =========================================================
   SIGN
========================================================= */

function getSign(longitude: number) {
  const normalized = normalizeDegrees(longitude);

  const signIndex = Math.floor(
    normalized / 30
  );

  const degreeInSign =
    normalized - signIndex * 30;

  return {
    signIndex,
    signNumber: SIGNS[signIndex].number,
    signName: SIGNS[signIndex].name,
    signHindi: SIGNS[signIndex].hindi,
    degreeInSign,
  };
}

/* =========================================================
   DEGREE / MINUTE
========================================================= */

function getDegreeMinute(longitude: number) {
  const sign = getSign(longitude);

  const degree = Math.floor(
    sign.degreeInSign
  );

  const minute = Math.floor(
    (sign.degreeInSign - degree) * 60
  );

  return {
    degree,
    minute,
  };
}

/* =========================================================
   TIMEZONE OFFSET
========================================================= */

function getTimezoneOffsetMinutes(
  date: Date,
  timezone: string
): number {
  const parts = new Intl.DateTimeFormat(
    "en-US",
    {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    }
  ).formatToParts(date);

  const values: Record<string, string> = {};

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  const localAsUTC = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second)
  );

  return (
    localAsUTC - date.getTime()
  ) / 60000;
}

/* =========================================================
   LOCAL TIME -> UTC
========================================================= */

function localTimeToUTC(
  dateString: string,
  timeString: string,
  timezone: string
): Date {
  const dateParts =
    dateString.split("-").map(Number);

  const timeParts =
    timeString.split(":").map(Number);

  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  const hour = timeParts[0] || 0;
  const minute = timeParts[1] || 0;

  const localAsUTC = Date.UTC(
    year,
    month - 1,
    day,
    hour,
    minute,
    0
  );

  let guess = new Date(
    localAsUTC
  );

  for (let i = 0; i < 5; i++) {
    const offset =
      getTimezoneOffsetMinutes(
        guess,
        timezone
      );

    guess = new Date(
      localAsUTC -
        offset * 60000
    );
  }

  return guess;
}

/* =========================================================
   KNOWN INDIAN PLACES
========================================================= */

function getKnownPlace(
  place: string
): LocationResult | null {
  const key = place
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  const places: Record<
    string,
    LocationResult
  > = {
    ratlam: {
      latitude: 23.3315,
      longitude: 75.0367,
      timezone: "Asia/Kolkata",
      name: "Ratlam",
      country: "India",
    },

    "ratlam, madhya pradesh": {
      latitude: 23.3315,
      longitude: 75.0367,
      timezone: "Asia/Kolkata",
      name: "Ratlam",
      country: "India",
    },

    bhopal: {
      latitude: 23.2599,
      longitude: 77.4126,
      timezone: "Asia/Kolkata",
      name: "Bhopal",
      country: "India",
    },

    indore: {
      latitude: 22.7196,
      longitude: 75.8577,
      timezone: "Asia/Kolkata",
      name: "Indore",
      country: "India",
    },

    ujjain: {
      latitude: 23.1765,
      longitude: 75.7885,
      timezone: "Asia/Kolkata",
      name: "Ujjain",
      country: "India",
    },

    mumbai: {
      latitude: 19.076,
      longitude: 72.8777,
      timezone: "Asia/Kolkata",
      name: "Mumbai",
      country: "India",
    },

    delhi: {
      latitude: 28.6139,
      longitude: 77.209,
      timezone: "Asia/Kolkata",
      name: "Delhi",
      country: "India",
    },

    pune: {
      latitude: 18.5204,
      longitude: 73.8567,
      timezone: "Asia/Kolkata",
      name: "Pune",
      country: "India",
    },

    ahmedabad: {
      latitude: 23.0225,
      longitude: 72.5714,
      timezone: "Asia/Kolkata",
      name: "Ahmedabad",
      country: "India",
    },

    surat: {
      latitude: 21.1702,
      longitude: 72.8311,
      timezone: "Asia/Kolkata",
      name: "Surat",
      country: "India",
    },

    vadodara: {
      latitude: 22.3072,
      longitude: 73.1812,
      timezone: "Asia/Kolkata",
      name: "Vadodara",
      country: "India",
    },

    jaipur: {
      latitude: 26.9124,
      longitude: 75.7873,
      timezone: "Asia/Kolkata",
      name: "Jaipur",
      country: "India",
    },

    udaipur: {
      latitude: 24.5854,
      longitude: 73.7125,
      timezone: "Asia/Kolkata",
      name: "Udaipur",
      country: "India",
    },

    kota: {
      latitude: 25.2138,
      longitude: 75.8648,
      timezone: "Asia/Kolkata",
      name: "Kota",
      country: "India",
    },

    jodhpur: {
      latitude: 26.2389,
      longitude: 73.0243,
      timezone: "Asia/Kolkata",
      name: "Jodhpur",
      country: "India",
    },

    nagpur: {
      latitude: 21.1458,
      longitude: 79.0882,
      timezone: "Asia/Kolkata",
      name: "Nagpur",
      country: "India",
    },

    nashik: {
      latitude: 19.9975,
      longitude: 73.7898,
      timezone: "Asia/Kolkata",
      name: "Nashik",
      country: "India",
    },

    rajkot: {
      latitude: 22.3039,
      longitude: 70.8022,
      timezone: "Asia/Kolkata",
      name: "Rajkot",
      country: "India",
    },

    lucknow: {
      latitude: 26.8467,
      longitude: 80.9462,
      timezone: "Asia/Kolkata",
      name: "Lucknow",
      country: "India",
    },

    patna: {
      latitude: 25.5941,
      longitude: 85.1376,
      timezone: "Asia/Kolkata",
      name: "Patna",
      country: "India",
    },

    chandigarh: {
      latitude: 30.7333,
      longitude: 76.7794,
      timezone: "Asia/Kolkata",
      name: "Chandigarh",
      country: "India",
    },

    bengaluru: {
      latitude: 12.9716,
      longitude: 77.5946,
      timezone: "Asia/Kolkata",
      name: "Bengaluru",
      country: "India",
    },

    bangalore: {
      latitude: 12.9716,
      longitude: 77.5946,
      timezone: "Asia/Kolkata",
      name: "Bangalore",
      country: "India",
    },

    hyderabad: {
      latitude: 17.385,
      longitude: 78.4867,
      timezone: "Asia/Kolkata",
      name: "Hyderabad",
      country: "India",
    },

    chennai: {
      latitude: 13.0827,
      longitude: 80.2707,
      timezone: "Asia/Kolkata",
      name: "Chennai",
      country: "India",
    },

    kolkata: {
      latitude: 22.5726,
      longitude: 88.3639,
      timezone: "Asia/Kolkata",
      name: "Kolkata",
      country: "India",
    },
  };

  return places[key] || null;
}

/* =========================================================
   GEOCODING FALLBACK
========================================================= */

async function geocodePlace(
  place: string
): Promise<LocationResult> {
  const known =
    getKnownPlace(place);

  if (known) {
    return known;
  }

  try {
    const url =
      "https://geocoding-api.open-meteo.com/v1/search" +
      `?name=${encodeURIComponent(place)}` +
      "&count=1" +
      "&language=en" +
      "&format=json";

    const response =
      await fetch(url, {
        cache: "no-store",
      });

    if (response.ok) {
      const data =
        await response.json();

      if (
        Array.isArray(data.results) &&
        data.results.length > 0
      ) {
        const result =
          data.results[0];

        return {
          latitude:
            Number(result.latitude),

          longitude:
            Number(result.longitude),

          timezone:
            result.timezone ||
            "Asia/Kolkata",

          name:
            result.name ||
            place,

          country:
            result.country ||
            "India",
        };
      }
    }
  } catch (error) {
    console.error(
      "Geocoding fallback failed:",
      error
    );
  }

  throw new Error(
    `Unable to find birth place "${place}".`
  );
}

/* =========================================================
   GEOCENTRIC ECLIPTIC LONGITUDE

   THIS IS THE IMPORTANT FIX.

   Do NOT use EclipticLongitude() for the planets here.
   That function gives heliocentric longitude.

   We use GeoVector() and convert the geocentric
   J2000 equatorial vector to ecliptic coordinates.
========================================================= */

function getGeocentricTropicalLongitude(
  planet: PlanetKey,
  date: Date
): number {
  if (planet === "Sun") {
    const sun = Astronomy.SunPosition(date);

    return normalizeDegrees(sun.elon);
  }

  const bodyMap: Record<
    "Moon" | "Mars" | "Mercury" | "Jupiter" | "Venus" | "Saturn",
    Astronomy.Body
  > = {
    Moon: Astronomy.Body.Moon,
    Mars: Astronomy.Body.Mars,
    Mercury: Astronomy.Body.Mercury,
    Jupiter: Astronomy.Body.Jupiter,
    Venus: Astronomy.Body.Venus,
    Saturn: Astronomy.Body.Saturn,
  };

  const body =
    bodyMap[
      planet as
        | "Moon"
        | "Mars"
        | "Mercury"
        | "Jupiter"
        | "Venus"
        | "Saturn"
    ];

  const observer = new Astronomy.Observer(
    23.3315,
    75.0367,
    0
  );

  const equator = Astronomy.Equator(
    body,
    date,
    observer,
    true,
    true
  );

  return normalizeDegrees(
    equator.ra * 15
  );
}

/* =========================================================
   RETROGRADE

   Compare geocentric longitude one day apart.
========================================================= */

function isRetrograde(
  planet: PlanetKey,
  date: Date
): boolean {
  if (
    planet === "Sun" ||
    planet === "Moon" ||
    planet === "Rahu" ||
    planet === "Ketu"
  ) {
    return false;
  }

  const previousDate =
    new Date(
      date.getTime() -
        24 * 60 * 60 * 1000
    );

  const current =
    getGeocentricTropicalLongitude(
      planet,
      date
    );

  const previous =
    getGeocentricTropicalLongitude(
      planet,
      previousDate
    );

  let diff =
    current - previous;

  if (diff > 180) {
    diff -= 360;
  }

  if (diff < -180) {
    diff += 360;
  }

  return diff < 0;
}

/* =========================================================
   RAHU

   Mean ascending lunar node.
========================================================= */

function getRahuLongitude(
  date: Date
): number {
  const T =
    julianCenturies(date);

  const omega =
    125.04452 -
    1934.136261 * T +
    0.0020708 * T * T +
    (T * T * T) / 450000;

  return normalizeDegrees(
    omega
  );
}

/* =========================================================
   KETU
========================================================= */

function getKetuLongitude(
  rahu: number
): number {
  return normalizeDegrees(
    rahu + 180
  );
}

/* =========================================================
   ASCENDANT

   Tropical ascendant calculated from:
   - UTC birth time
   - Ratlam latitude/longitude
   - local sidereal time
   - obliquity of date

   Then Lahiri ayanamsa is applied.
========================================================= */

function calculateAscendantTropical(
  date: Date,
  latitude: number,
  longitude: number
): number {
  const gstHours =
    Astronomy.SiderealTime(
      date
    );

  const lstDegrees =
    normalizeDegrees(
      gstHours * 15 +
        longitude
    );

  const T =
    julianCenturies(date);

  const epsilon =
    (
      23.439291 -
      0.0130042 * T
    ) *
    Math.PI /
    180;

  const theta =
    lstDegrees *
    Math.PI /
    180;

  const phi =
    latitude *
    Math.PI /
    180;

  const asc =
    Math.atan2(
      -Math.cos(theta),
      Math.sin(theta) *
        Math.cos(epsilon) +
        Math.tan(phi) *
          Math.sin(epsilon)
    ) *
    180 /
    Math.PI;

  return normalizeDegrees(
    asc + 180
  );
}

/* =========================================================
   PLANET BUILDER
========================================================= */

function buildPlanet(
  name: PlanetKey,
  tropicalLongitude: number,
  date: Date,
  ascendantSignIndex: number,
  retrograde: boolean
): PlanetResult {
  const siderealLongitude =
    tropicalToSidereal(
      tropicalLongitude,
      date
    );

  const sign =
    getSign(
      siderealLongitude
    );

  const dm =
    getDegreeMinute(
      siderealLongitude
    );

  /*
   * Whole Sign house.
   *
   * Lagna sign = House 1.
   */

  const house =
    (
      sign.signIndex -
      ascendantSignIndex +
      12
    ) % 12 + 1;

  return {
    name,

    hindiName:
      PLANET_HINDI[name],

    longitude:
      Number(
        siderealLongitude.toFixed(6)
      ),

    degree:
      dm.degree,

    minute:
      dm.minute,

    signIndex:
      sign.signIndex,

    signNumber:
      sign.signNumber,

    signName:
      sign.signName,

    signHindi:
      sign.signHindi,

    house,

    retrograde,
  };
}

/* =========================================================
   NAKSHATRA
========================================================= */

function getNakshatra(
  longitude: number
) {
  const normalized =
    normalizeDegrees(
      longitude
    );

  const nakshatraSize =
    360 / 27;

  const index =
    Math.floor(
      normalized /
        nakshatraSize
    );

  const inside =
    normalized -
    index *
      nakshatraSize;

  const pada =
    Math.floor(
      inside /
        (nakshatraSize / 4)
    ) + 1;

  return {
    name:
      NAKSHATRAS[
        Math.min(index, 26)
      ],

    pada,
  };
}

/* =========================================================
   VALIDATE INPUT
========================================================= */

function validateDate(
  dob: string
): boolean {
  const match =
    /^\d{4}-\d{2}-\d{2}$/.test(
      dob
    );

  if (!match) {
    return false;
  }

  const date =
    new Date(
      `${dob}T00:00:00Z`
    );

  return (
    !Number.isNaN(
      date.getTime()
    )
  );
}

function validateTime(
  time: string
): boolean {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(
    time
  );
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

    const dob =
      String(
        body?.dob || ""
      ).trim();

    const time =
      String(
        body?.time || ""
      ).trim();

    const place =
      String(
        body?.place || ""
      ).trim();

    console.log(
      "======================================"
    );

    console.log(
      "KUNDLI REQUEST"
    );

    console.log({
      dob,
      time,
      place,
    });

    console.log(
      "======================================"
    );

    /* =====================================================
       VALIDATION
    ===================================================== */

    if (!dob) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Date of birth is required.",
        },
        { status: 400 }
      );
    }

    if (!validateDate(dob)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid date. Use YYYY-MM-DD.",
        },
        { status: 400 }
      );
    }

    if (!time) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Birth time is required.",
        },
        { status: 400 }
      );
    }

    if (!validateTime(time)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid time. Use HH:mm.",
        },
        { status: 400 }
      );
    }

    if (!place) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Birth place is required.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       LOCATION
    ===================================================== */

    const location =
      await geocodePlace(
        place
      );

    console.log(
      "LOCATION",
      location
    );

    /* =====================================================
       UTC
    ===================================================== */

    const birthDate =
      localTimeToUTC(
        dob,
        time,
        location.timezone
      );

    console.log(
      "UTC",
      birthDate.toISOString()
    );

    /* =====================================================
       ASCENDANT
    ===================================================== */

    const ascendantTropical =
      calculateAscendantTropical(
        birthDate,
        location.latitude,
        location.longitude
      );

    const ascendantSidereal =
      tropicalToSidereal(
        ascendantTropical,
        birthDate
      );

    const ascendantSign =
      getSign(
        ascendantSidereal
      );

    const ascendantDM =
      getDegreeMinute(
        ascendantSidereal
      );

    console.log(
      "ASCENDANT",
      {
        tropical:
          ascendantTropical,

        sidereal:
          ascendantSidereal,

        sign:
          ascendantSign.signName,

        degree:
          ascendantDM.degree,

        minute:
          ascendantDM.minute,
      }
    );

    /* =====================================================
       PLANETS
    ===================================================== */

    const planetNames: PlanetKey[] = [
      "Sun",
      "Moon",
      "Mars",
      "Mercury",
      "Jupiter",
      "Venus",
      "Saturn",
    ];

    const planets: PlanetResult[] = [];

    for (
      const planetName of planetNames
    ) {
      const tropical =
        getGeocentricTropicalLongitude(
          planetName,
          birthDate
        );

      const planet =
        buildPlanet(
          planetName,
          tropical,
          birthDate,
          ascendantSign.signIndex,
          isRetrograde(
            planetName,
            birthDate
          )
        );

      planets.push(
        planet
      );
    }

    /* =====================================================
       RAHU
    ===================================================== */

    const rahuTropical =
      getRahuLongitude(
        birthDate
      );

    const rahu =
      buildPlanet(
        "Rahu",
        rahuTropical,
        birthDate,
        ascendantSign.signIndex,
        true
      );

    planets.push(
      rahu
    );

    /* =====================================================
       KETU
    ===================================================== */

    const ketuTropical =
      getKetuLongitude(
        rahuTropical
      );

    const ketu =
      buildPlanet(
        "Ketu",
        ketuTropical,
        birthDate,
        ascendantSign.signIndex,
        true
      );

    planets.push(
      ketu
    );

    /* =====================================================
       HOUSES
    ===================================================== */

    const houses =
      Array.from(
        { length: 12 },
        (_, index) => {
          const signIndex =
            (
              ascendantSign.signIndex +
              index
            ) % 12;

          return {
            house:
              index + 1,

            signIndex,

            signNumber:
              SIGNS[
                signIndex
              ].number,

            signName:
              SIGNS[
                signIndex
              ].name,

            signHindi:
              SIGNS[
                signIndex
              ].hindi,

            planets:
              planets.filter(
                (planet) =>
                  planet.house ===
                  index + 1
              ),
          };
        }
      );

    /* =====================================================
       MOON / SUN
    ===================================================== */

    const moon =
      planets.find(
        (planet) =>
          planet.name === "Moon"
      );

    const sun =
      planets.find(
        (planet) =>
          planet.name === "Sun"
      );

    const moonNakshatra =
      moon
        ? getNakshatra(
            moon.longitude
          )
        : null;

    /* =====================================================
       RESULT
    ===================================================== */

    const result = {
      success: true,

      birth: {
        dob,
        time,

        utc:
          birthDate.toISOString(),

        place:
          location.name,

        country:
          location.country,

        latitude:
          location.latitude,

        longitude:
          location.longitude,

        timezone:
          location.timezone,
      },

      system: {
        zodiac: "Sidereal",
        ayanamsa: "Lahiri",
        houseSystem: "Whole Sign",
      },

      ascendant: {
        longitude:
          Number(
            ascendantSidereal.toFixed(6)
          ),

        degree:
          ascendantDM.degree,

        minute:
          ascendantDM.minute,

        signIndex:
          ascendantSign.signIndex,

        signNumber:
          ascendantSign.signNumber,

        signName:
          ascendantSign.signName,

        signHindi:
          ascendantSign.signHindi,
      },

      planets,

      houses,

      summary: {
        sunSign:
          sun?.signName || "",

        moonSign:
          moon?.signName || "",

        moonSignHindi:
          moon?.signHindi || "",

        ascendant:
          ascendantSign.signName,

        ascendantHindi:
          ascendantSign.signHindi,

        nakshatra:
          moonNakshatra?.name || "",

        nakshatraPada:
          moonNakshatra?.pada || 0,
      },
    };

    console.log(
      "======================================"
    );

    console.log(
      "KUNDLI SUCCESS"
    );

    console.table(
      planets.map(
        (planet) => ({
          Planet:
            planet.name,

          Sign:
            planet.signName,

          Degree:
            `${planet.degree}° ${planet.minute}'`,

          House:
            planet.house,

          Retro:
            planet.retrograde,
        })
      )
    );

    console.log(
      "======================================"
    );

    return NextResponse.json(
      result
    );

  } catch (error) {
    console.error(
      "Kundli calculation error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        error:
          error instanceof Error
            ? error.message
            : "Unable to calculate Kundli.",
      },
      {
        status: 500,
      }
    );
  }
}