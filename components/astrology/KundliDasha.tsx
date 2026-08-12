"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Clock3,
  Sparkles,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

export interface Antardasha {
  planet: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
}

export interface Mahadasha {
  planet: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  antardashas: Antardasha[];
}

interface KundliDashaProps {
  dashas: Mahadasha[];
}

/* =========================================================
   PLANET DATA
========================================================= */

const PLANET_SYMBOLS: Record<string, string> = {
  Sun: "☉",
  Moon: "☽",
  Mars: "♂",
  Mercury: "☿",
  Jupiter: "♃",
  Venus: "♀",
  Saturn: "♄",
  Rahu: "☊",
  Ketu: "☋",
};

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

/* =========================================================
   HELPERS
========================================================= */

function getPlanetSymbol(planet: string) {
  return PLANET_SYMBOLS[planet] || "✦";
}

function getPlanetHindi(planet: string) {
  return PLANET_HINDI[planet] || planet;
}

function formatDate(date: string) {
  if (!date) return "-";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function KundliDasha({
  dashas,
}: KundliDashaProps) {
  /*
   * Store indexes of currently opened Mahadashas.
   *
   * Example:
   * Set {0, 2}
   * means Mahadasha 1 and Mahadasha 3 are open.
   */
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    new Set()
  );

  /* =======================================================
     CURRENT DASHA
  ======================================================= */

  const currentDashaIndex = useMemo(() => {
    return dashas.findIndex((dasha) => dasha.isCurrent);
  }, [dashas]);

  /* =======================================================
     TOGGLE SINGLE MAHADASHA
  ======================================================= */

  const toggleMahadasha = (index: number) => {
    setOpenIndexes((previous) => {
      const next = new Set(previous);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  };

  /* =======================================================
     OPEN ALL
  ======================================================= */

  const openAll = () => {
    setOpenIndexes(
      new Set(dashas.map((_, index) => index))
    );
  };

  /* =======================================================
     CLOSE ALL
  ======================================================= */

  const closeAll = () => {
    setOpenIndexes(new Set());
  };

  const allOpen =
    dashas.length > 0 &&
    openIndexes.size === dashas.length;

  /* =======================================================
     EMPTY
  ======================================================= */

  if (!dashas || dashas.length === 0) {
    return (
      <section className="pt-6">
        <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD400]/10">
              <Clock3
                size={21}
                className="text-[#FFD400]"
              />
            </div>

            <div>
              <h2 className="text-[18px] font-black text-white">
                Vimshottari Dasha
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Dasha information is not available.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =======================================================
     UI
  ======================================================= */

  return (
    <section className="pt-6">
      {/* HEADER */}

      <div className="mb-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-[19px] font-bold text-white">
                Vimshottari Dasha
              </h2>

              <Sparkles
                size={17}
                className="text-[#FFD400]"
              />
            </div>

            <p className="mt-1 text-[10px] text-gray-500">
              Mahadasha & Antardasha
            </p>
          </div>

          {/* SHOW / HIDE ALL */}

          <button
            type="button"
            onClick={allOpen ? closeAll : openAll}
            className="shrink-0 rounded-xl border border-[#FFD400]/30 bg-[#FFD400]/10 px-3 py-2 text-[9px] font-bold text-[#FFD400]"
          >
            {allOpen ? "Hide All" : "Show All"}
          </button>
        </div>
      </div>

      {/* CURRENT DASHA CARD */}

      {currentDashaIndex >= 0 && (
        <div className="mb-3 rounded-2xl border border-[#FFD400]/30 bg-[#FFD400]/10 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD400] text-[20px] text-black">
              {getPlanetSymbol(
                dashas[currentDashaIndex].planet
              )}
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#FFD400]">
                Currently Running
              </p>

              <p className="mt-1 text-[14px] font-black text-white">
                {dashas[currentDashaIndex].planet} Mahadasha
              </p>

              <p className="mt-1 text-[9px] text-gray-400">
                {formatDate(
                  dashas[currentDashaIndex].startDate
                )}
                {" — "}
                {formatDate(
                  dashas[currentDashaIndex].endDate
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* DASHA LIST */}

      <div className="space-y-2">
        {dashas.map((dasha, index) => {
          const isOpen = openIndexes.has(index);

          const isCurrent =
            dasha.isCurrent ||
            index === currentDashaIndex;

          return (
            <div
              key={`${dasha.planet}-${index}`}
              className={`overflow-hidden rounded-2xl border ${
                isCurrent
                  ? "border-[#FFD400]/50"
                  : "border-[#1E2A3D]"
              } bg-[#101C30]`}
            >
              {/* =================================================
                  MAHADASHA BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={() =>
                  toggleMahadasha(index)
                }
                className="flex w-full items-center gap-3 p-4 text-left"
              >
                {/* PLANET */}

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[18px] ${
                    isCurrent
                      ? "bg-[#FFD400] text-black"
                      : "bg-[#FFD400]/10 text-[#FFD400]"
                  }`}
                >
                  {getPlanetSymbol(dasha.planet)}
                </div>

                {/* INFO */}

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[13px] font-black text-white">
                      {dasha.planet} Mahadasha
                    </p>

                    {isCurrent && (
                      <span className="rounded-md bg-[#FFD400] px-1.5 py-0.5 text-[7px] font-black text-black">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <p className="mt-0.5 text-[9px] text-[#FFD400]">
                    {getPlanetHindi(dasha.planet)}
                  </p>

                  <p className="mt-1 text-[9px] text-gray-500">
                    {formatDate(dasha.startDate)}
                    {" — "}
                    {formatDate(dasha.endDate)}
                  </p>
                </div>

                {/* TOGGLE ICON */}

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  {isOpen ? (
                    <ChevronUp
                      size={17}
                      className="text-[#FFD400]"
                    />
                  ) : (
                    <ChevronDown
                      size={17}
                      className="text-gray-400"
                    />
                  )}
                </div>
              </button>

              {/* =================================================
                  ANTARDASHA
              ================================================= */}

              {isOpen && (
                <div className="border-t border-[#1E2A3D] px-3 pb-3 pt-2">
                  <div className="mb-2 px-1">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                      Antardasha
                    </p>
                  </div>

                  {dasha.antardashas?.length > 0 ? (
                    <div className="space-y-1.5">
                      {dasha.antardashas.map(
                        (
                          antardasha,
                          antardashaIndex
                        ) => {
                          const isCurrentAntardasha =
                            antardasha.isCurrent;

                          return (
                            <div
                              key={`${antardasha.planet}-${antardashaIndex}`}
                              className={`flex items-center gap-3 rounded-xl p-3 ${
                                isCurrentAntardasha
                                  ? "border border-[#FFD400]/30 bg-[#FFD400]/10"
                                  : "bg-[#0A1423]"
                              }`}
                            >
                              {/* SMALL PLANET */}

                              <div
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[13px] ${
                                  isCurrentAntardasha
                                    ? "bg-[#FFD400] text-black"
                                    : "bg-white/5 text-[#FFD400]"
                                }`}
                              >
                                {getPlanetSymbol(
                                  antardasha.planet
                                )}
                              </div>

                              {/* DETAILS */}

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2">
                                  <p className="text-[10px] font-bold text-white">
                                    {antardasha.planet}
                                  </p>

                                  <span className="text-[8px] text-gray-500">
                                    {getPlanetHindi(
                                      antardasha.planet
                                    )}
                                  </span>

                                  {isCurrentAntardasha && (
                                    <span className="rounded-md bg-[#FFD400] px-1 py-0.5 text-[6px] font-black text-black">
                                      NOW
                                    </span>
                                  )}
                                </div>

                                <p className="mt-1 text-[8px] text-gray-500">
                                  {formatDate(
                                    antardasha.startDate
                                  )}
                                  {" — "}
                                  {formatDate(
                                    antardasha.endDate
                                  )}
                                </p>
                              </div>

                              {/* ARROW */}

                              <ChevronDown
                                size={13}
                                className="rotate-[-90deg] text-gray-600"
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  ) : (
                    <div className="rounded-xl bg-[#0A1423] p-4 text-center">
                      <p className="text-[9px] text-gray-500">
                        Antardasha data not available.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FOOTER INFO */}

      <div className="mt-3 rounded-xl border border-[#1E2A3D] bg-[#101C30] px-3 py-3">
        <p className="text-[8px] leading-4 text-gray-500">
          Mahadasha shows the major planetary period.
          Tap any Mahadasha to view its Antardasha
          periods.
        </p>
      </div>
    </section>
  );
}