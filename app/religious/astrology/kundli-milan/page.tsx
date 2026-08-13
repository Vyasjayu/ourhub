"use client";

import { useState } from "react";

interface PersonDetails {
  name: string;
  gender: "male" | "female";
  date: string;
  time: string;
  place: string;
}

interface GunaItem {
  name: string;
  obtained: number;
  total: number;
}

interface MilanPerson {
  name: string;
  gender: "male" | "female";
  moonSign: string;
  moonSignHindi?: string;
  nakshatra: string;
  nakshatraPada?: number;
}

interface MilanResult {
  success: boolean;
  score: number;
  maxScore: number;
  percentage: number;
  compatibility: string;
  guna: GunaItem[];

  person1: MilanPerson;
  person2: MilanPerson;

  manglik: {
    person1: boolean;
    person2: boolean;
  };

  error?: string;
}

export default function KundliMilanPage() {
  const [person1, setPerson1] = useState<PersonDetails>({
    name: "",
    gender: "male",
    date: "",
    time: "",
    place: "",
  });

  const [person2, setPerson2] = useState<PersonDetails>({
    name: "",
    gender: "female",
    date: "",
    time: "",
    place: "",
  });

  const [result, setResult] = useState<MilanResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================================================
  // UPDATE PERSON 1
  // =========================================================

  const updatePerson1 = (
    field: keyof PersonDetails,
    value: string
  ) => {
    setPerson1((previous) => ({
      ...previous,
      [field]: value,
    }));

    setResult(null);
    setError("");
  };

  // =========================================================
  // UPDATE PERSON 2
  // =========================================================

  const updatePerson2 = (
    field: keyof PersonDetails,
    value: string
  ) => {
    setPerson2((previous) => ({
      ...previous,
      [field]: value,
    }));

    setResult(null);
    setError("");
  };

  // =========================================================
  // MATCH KUNDLI
  // =========================================================

  const handleMatch = async () => {
    setError("");
    setResult(null);

    if (
      !person1.name.trim() ||
      !person1.date ||
      !person1.time ||
      !person1.place.trim() ||
      !person2.name.trim() ||
      !person2.date ||
      !person2.time ||
      !person2.place.trim()
    ) {
      setError(
        "Please fill all birth details for both persons."
      );

      return;
    }

    // Prevent same gender combination if your Kundli Milan
    // flow is specifically Male + Female.
    if (person1.gender === person2.gender) {
      setError(
        "Please select one Male and one Female for Kundli Milan."
      );

      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "/api/kundli/milan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            person1: {
              name: person1.name.trim(),
              gender: person1.gender,
              date: person1.date,
              time: person1.time,
              place: person1.place.trim(),
            },

            person2: {
              name: person2.name.trim(),
              gender: person2.gender,
              date: person2.date,
              time: person2.time,
              place: person2.place.trim(),
            },
          }),
        }
      );

      const data =
        (await response.json()) as MilanResult;

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            "Unable to calculate Kundli Milan."
        );
      }

      // Make sure frontend always has gender.
      const normalizedResult: MilanResult = {
        ...data,

        person1: {
          ...data.person1,
          gender:
            data.person1?.gender ||
            person1.gender,
        },

        person2: {
          ...data.person2,
          gender:
            data.person2?.gender ||
            person2.gender,
        },
      };

      setResult(normalizedResult);

      // Scroll to actual result
      setTimeout(() => {
        document
          .getElementById("kundli-milan-result")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    } catch (err) {
      console.error(
        "KUNDLI MILAN FRONTEND ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Kundli Milan calculation failed."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // EDIT DETAILS
  // =========================================================

  const handleEditDetails = () => {
    setResult(null);
    setError("");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  // =========================================================
  // COMPATIBILITY STYLE
  // =========================================================

  const getCompatibilityStyle = (
    compatibility: string
  ) => {
    const value =
      compatibility.toLowerCase();

    if (
      value.includes("excellent") ||
      value.includes("very good")
    ) {
      return {
        text: "text-green-400",
        bg: "bg-green-500/10",
      };
    }

    if (value.includes("good")) {
      return {
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
      };
    }

    if (value.includes("average")) {
      return {
        text: "text-yellow-400",
        bg: "bg-yellow-500/10",
      };
    }

    return {
      text: "text-orange-400",
      bg: "bg-orange-500/10",
    };
  };

  const compatibilityStyle = result
    ? getCompatibilityStyle(
        result.compatibility
      )
    : null;

  // =========================================================
  // GENDER LABEL
  // =========================================================

  const genderLabel = (
    gender: "male" | "female"
  ) => {
    return gender === "male"
      ? "Male"
      : "Female";
  };

  return (
    <main className="min-h-screen bg-[#071424] px-4 py-6 text-white">
      <div className="mx-auto max-w-md">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-6">
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-2xl">
              💑
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Kundli Milan
              </h1>

              <p className="mt-1 text-[11px] text-gray-400">
                Check marriage compatibility
              </p>
            </div>

          </div>

          <div className="mt-4 rounded-2xl border border-[#263449] bg-[#101C30] p-4">
            <p className="text-[11px] leading-5 text-gray-400">
              Enter the accurate birth details of
              both persons to calculate their
              Kundli compatibility.
            </p>
          </div>
        </div>

        {/* =====================================================
            PERSON 1
        ===================================================== */}

        <section className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

          <div className="mb-4 flex items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFD400] text-xs font-black text-black">
              01
            </div>

            <div>
              <h2 className="text-sm font-bold text-white">
                First Person
              </h2>

              <p className="mt-0.5 text-[9px] text-gray-500">
                Birth details
              </p>
            </div>

          </div>

          <div className="space-y-3">

            {/* NAME */}

            <div>
              <label className="mb-1.5 block text-[9px] font-semibold text-gray-400">
                Full Name
              </label>

              <input
                type="text"
                value={person1.name}
                onChange={(event) =>
                  updatePerson1(
                    "name",
                    event.target.value
                  )
                }
                placeholder="Enter full name"
                className="h-12 w-full rounded-xl border border-[#263449] bg-[#0B1320] px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#FFD400]/50"
              />
            </div>

            {/* GENDER */}

            <div>
              <label className="mb-1.5 block text-[9px] font-semibold text-gray-400">
                Gender
              </label>

              <div className="grid grid-cols-2 gap-2">

                <button
                  type="button"
                  onClick={() =>
                    updatePerson1(
                      "gender",
                      "male"
                    )
                  }
                  className={`h-12 rounded-xl border text-sm font-bold transition ${
                    person1.gender === "male"
                      ? "border-[#FFD400] bg-[#FFD400]/10 text-[#FFD400]"
                      : "border-[#263449] bg-[#0B1320] text-gray-400"
                  }`}
                >
                  👨 Male
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updatePerson1(
                      "gender",
                      "female"
                    )
                  }
                  className={`h-12 rounded-xl border text-sm font-bold transition ${
                    person1.gender === "female"
                      ? "border-[#FFD400] bg-[#FFD400]/10 text-[#FFD400]"
                      : "border-[#263449] bg-[#0B1320] text-gray-400"
                  }`}
                >
                  👩 Female
                </button>

              </div>
            </div>

            {/* DATE */}

            <div>
              <label className="mb-1.5 block text-[9px] font-semibold text-gray-400">
                Date of Birth
              </label>

              <input
                type="date"
                value={person1.date}
                onChange={(event) =>
                  updatePerson1(
                    "date",
                    event.target.value
                  )
                }
                className="h-12 w-full rounded-xl border border-[#263449] bg-[#0B1320] px-4 text-sm text-white outline-none transition focus:border-[#FFD400]/50"
              />
            </div>

            {/* TIME */}

            <div>
              <label className="mb-1.5 block text-[9px] font-semibold text-gray-400">
                Time of Birth
              </label>

              <input
                type="time"
                value={person1.time}
                onChange={(event) =>
                  updatePerson1(
                    "time",
                    event.target.value
                  )
                }
                className="h-12 w-full rounded-xl border border-[#263449] bg-[#0B1320] px-4 text-sm text-white outline-none transition focus:border-[#FFD400]/50"
              />
            </div>

            {/* PLACE */}

            <div>
              <label className="mb-1.5 block text-[9px] font-semibold text-gray-400">
                Birth Place
              </label>

              <input
                type="text"
                value={person1.place}
                onChange={(event) =>
                  updatePerson1(
                    "place",
                    event.target.value
                  )
                }
                placeholder="City, State, Country"
                className="h-12 w-full rounded-xl border border-[#263449] bg-[#0B1320] px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#FFD400]/50"
              />
            </div>

          </div>
        </section>

        {/* =====================================================
            VS
        ===================================================== */}

        <div className="relative z-10 -my-4 flex justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#263449] bg-[#071424] text-[9px] font-black text-[#FFD400] shadow-xl">
            VS
          </div>
        </div>

        {/* =====================================================
            PERSON 2
        ===================================================== */}

        <section className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

          <div className="mb-4 flex items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFD400] text-xs font-black text-black">
              02
            </div>

            <div>
              <h2 className="text-sm font-bold text-white">
                Second Person
              </h2>

              <p className="mt-0.5 text-[9px] text-gray-500">
                Birth details
              </p>
            </div>

          </div>

          <div className="space-y-3">

            {/* NAME */}

            <div>
              <label className="mb-1.5 block text-[9px] font-semibold text-gray-400">
                Full Name
              </label>

              <input
                type="text"
                value={person2.name}
                onChange={(event) =>
                  updatePerson2(
                    "name",
                    event.target.value
                  )
                }
                placeholder="Enter full name"
                className="h-12 w-full rounded-xl border border-[#263449] bg-[#0B1320] px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#FFD400]/50"
              />
            </div>

            {/* GENDER */}

            <div>
              <label className="mb-1.5 block text-[9px] font-semibold text-gray-400">
                Gender
              </label>

              <div className="grid grid-cols-2 gap-2">

                <button
                  type="button"
                  onClick={() =>
                    updatePerson2(
                      "gender",
                      "male"
                    )
                  }
                  className={`h-12 rounded-xl border text-sm font-bold transition ${
                    person2.gender === "male"
                      ? "border-[#FFD400] bg-[#FFD400]/10 text-[#FFD400]"
                      : "border-[#263449] bg-[#0B1320] text-gray-400"
                  }`}
                >
                  👨 Male
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updatePerson2(
                      "gender",
                      "female"
                    )
                  }
                  className={`h-12 rounded-xl border text-sm font-bold transition ${
                    person2.gender === "female"
                      ? "border-[#FFD400] bg-[#FFD400]/10 text-[#FFD400]"
                      : "border-[#263449] bg-[#0B1320] text-gray-400"
                  }`}
                >
                  👩 Female
                </button>

              </div>
            </div>

            {/* DATE */}

            <div>
              <label className="mb-1.5 block text-[9px] font-semibold text-gray-400">
                Date of Birth
              </label>

              <input
                type="date"
                value={person2.date}
                onChange={(event) =>
                  updatePerson2(
                    "date",
                    event.target.value
                  )
                }
                className="h-12 w-full rounded-xl border border-[#263449] bg-[#0B1320] px-4 text-sm text-white outline-none transition focus:border-[#FFD400]/50"
              />
            </div>

            {/* TIME */}

            <div>
              <label className="mb-1.5 block text-[9px] font-semibold text-gray-400">
                Time of Birth
              </label>

              <input
                type="time"
                value={person2.time}
                onChange={(event) =>
                  updatePerson2(
                    "time",
                    event.target.value
                  )
                }
                className="h-12 w-full rounded-xl border border-[#263449] bg-[#0B1320] px-4 text-sm text-white outline-none transition focus:border-[#FFD400]/50"
              />
            </div>

            {/* PLACE */}

            <div>
              <label className="mb-1.5 block text-[9px] font-semibold text-gray-400">
                Birth Place
              </label>

              <input
                type="text"
                value={person2.place}
                onChange={(event) =>
                  updatePerson2(
                    "place",
                    event.target.value
                  )
                }
                placeholder="City, State, Country"
                className="h-12 w-full rounded-xl border border-[#263449] bg-[#0B1320] px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#FFD400]/50"
              />
            </div>

          </div>
        </section>

        {/* =====================================================
            ERROR
        ===================================================== */}

        {error && (
          <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
            <p className="text-[10px] leading-5 text-red-400">
              ⚠️ {error}
            </p>
          </div>
        )}

        {/* =====================================================
            MATCH BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={handleMatch}
          disabled={loading}
          className="mt-5 flex h-14 w-full items-center justify-center rounded-2xl bg-[#FFD400] text-sm font-black text-black shadow-lg shadow-yellow-500/10 transition hover:bg-[#FACC15] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
              Calculating Kundli...
            </>
          ) : (
            <>✨ Match Kundli</>
          )}
        </button>

        <p className="mt-3 text-center text-[9px] text-gray-500">
          Accurate birth details give a more precise
          compatibility calculation.
        </p>

        {/* =====================================================
            REAL RESULT
        ===================================================== */}

        {result && (
          <section
            id="kundli-milan-result"
            className="mt-7 scroll-mt-5"
          >

            {/* =================================================
                RESULT HEADER
            ================================================= */}

            <div className="rounded-3xl border border-[#FFD400]/20 bg-gradient-to-b from-[#18263A] to-[#101C30] p-5">

              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 text-3xl">
                  💑
                </div>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFD400]">
                  Compatibility Report
                </p>

                <h2 className="mt-1 text-xl font-black text-white">
                  Kundli Milan Result
                </h2>

                <p className="mt-1 text-[10px] text-gray-400">
                  {result.person1.name}{" "}
                  &{" "}
                  {result.person2.name}
                </p>

              </div>

              {/* SCORE */}

              <div className="mt-5 rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/5 p-5 text-center">

                <p className="text-[10px] font-medium text-gray-400">
                  Guna Milan Score
                </p>

                <div className="mt-1 flex items-baseline justify-center">

                  <span className="text-5xl font-black text-[#FFD400]">
                    {result.score}
                  </span>

                  <span className="ml-1 text-sm font-bold text-gray-500">
                    / {result.maxScore}
                  </span>

                </div>

                <div className="mx-auto mt-3 h-2 max-w-[220px] overflow-hidden rounded-full bg-white/5">

                  <div
                    className="h-full rounded-full bg-[#FFD400] transition-all duration-700"
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(
                          0,
                          result.percentage
                        )
                      )}%`,
                    }}
                  />

                </div>

                {compatibilityStyle && (
                  <div
                    className={`mt-3 inline-flex rounded-full px-3 py-1.5 ${compatibilityStyle.bg}`}
                  >
                    <span
                      className={`text-[9px] font-bold ${compatibilityStyle.text}`}
                    >
                      ✓{" "}
                      {result.compatibility}
                    </span>
                  </div>
                )}

              </div>
            </div>

            {/* =================================================
                PERSON SUMMARY
            ================================================= */}

            <div className="mt-4 grid grid-cols-2 gap-3">

              {/* PERSON 1 */}

              <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD400]/10 text-xs">
                  {result.person1.gender ===
                  "male"
                    ? "👨"
                    : "👩"}
                </div>

                <p className="mt-3 text-[8px] font-medium text-gray-500">
                  {genderLabel(
                    result.person1.gender
                  ).toUpperCase()}
                </p>

                <p className="mt-1 truncate text-xs font-bold text-white">
                  {result.person1.name}
                </p>

                <p className="mt-1 text-[8px] text-gray-500">
                  {person1.place}
                </p>

                <p className="mt-2 text-[8px] text-[#FFD400]">
                  Moon:{" "}
                  {result.person1.moonSign}
                  {result.person1.moonSignHindi
                    ? ` • ${result.person1.moonSignHindi}`
                    : ""}
                </p>

                <p className="mt-1 truncate text-[8px] text-gray-500">
                  {result.person1.nakshatra}

                  {result.person1.nakshatraPada
                    ? ` • Pada ${result.person1.nakshatraPada}`
                    : ""}
                </p>

              </div>

              {/* PERSON 2 */}

              <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD400]/10 text-xs">
                  {result.person2.gender ===
                  "male"
                    ? "👨"
                    : "👩"}
                </div>

                <p className="mt-3 text-[8px] font-medium text-gray-500">
                  {genderLabel(
                    result.person2.gender
                  ).toUpperCase()}
                </p>

                <p className="mt-1 truncate text-xs font-bold text-white">
                  {result.person2.name}
                </p>

                <p className="mt-1 text-[8px] text-gray-500">
                  {person2.place}
                </p>

                <p className="mt-2 text-[8px] text-[#FFD400]">
                  Moon:{" "}
                  {result.person2.moonSign}
                  {result.person2.moonSignHindi
                    ? ` • ${result.person2.moonSignHindi}`
                    : ""}
                </p>

                <p className="mt-1 truncate text-[8px] text-gray-500">
                  {result.person2.nakshatra}

                  {result.person2.nakshatraPada
                    ? ` • Pada ${result.person2.nakshatraPada}`
                    : ""}
                </p>

              </div>

            </div>

            {/* =================================================
                GUNA DETAILS
            ================================================= */}

            <div className="mt-4 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="mb-4 flex items-center justify-between">

                <div>
                  <p className="text-xs font-bold text-white">
                    Guna Milan
                  </p>

                  <p className="mt-1 text-[8px] text-gray-500">
                    Ashtakoota compatibility
                  </p>
                </div>

                <span className="rounded-lg bg-[#FFD400]/10 px-2 py-1 text-[9px] font-black text-[#FFD400]">
                  {result.score} /{" "}
                  {result.maxScore}
                </span>

              </div>

              <div className="space-y-2">

                {result.guna.map(
                  (item) => {
                    const percentage =
                      item.total > 0
                        ? (item.obtained /
                            item.total) *
                          100
                        : 0;

                    return (
                      <div
                        key={item.name}
                        className="rounded-xl bg-[#0B1320] px-3 py-3"
                      >

                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-2">

                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-[8px] font-bold text-gray-400">
                              {item.obtained}
                            </div>

                            <span className="text-[10px] font-semibold text-gray-300">
                              {item.name}
                            </span>

                          </div>

                          <div className="text-right">

                            <span className="text-[10px] font-bold text-[#FFD400]">
                              {item.obtained}
                            </span>

                            <span className="text-[9px] text-gray-600">
                              {" "}
                              / {item.total}
                            </span>

                          </div>

                        </div>

                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">

                          <div
                            className="h-full rounded-full bg-[#FFD400]"
                            style={{
                              width: `${Math.min(
                                100,
                                Math.max(
                                  0,
                                  percentage
                                )
                              )}%`,
                            }}
                          />

                        </div>

                      </div>
                    );
                  }
                )}

              </div>
            </div>

            {/* =================================================
                MANGAL DOSHA
            ================================================= */}

            <div className="mt-4 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="flex items-center gap-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
                  🔥
                </div>

                <div>
                  <p className="text-[10px] font-bold text-white">
                    Mangal Dosha
                  </p>

                  <p className="text-[8px] text-gray-500">
                    Mars placement analysis
                  </p>
                </div>

              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">

                <div className="rounded-xl bg-[#0B1320] p-3">

                  <p className="text-[8px] text-gray-500">
                    {result.person1.name}
                  </p>

                  <p
                    className={`mt-1 text-[10px] font-bold ${
                      result.manglik.person1
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {result.manglik.person1
                      ? "Manglik"
                      : "Non-Manglik"}
                  </p>

                </div>

                <div className="rounded-xl bg-[#0B1320] p-3">

                  <p className="text-[8px] text-gray-500">
                    {result.person2.name}
                  </p>

                  <p
                    className={`mt-1 text-[10px] font-bold ${
                      result.manglik.person2
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {result.manglik.person2
                      ? "Manglik"
                      : "Non-Manglik"}
                  </p>

                </div>

              </div>
            </div>

            {/* =================================================
                COMPATIBILITY SUMMARY
            ================================================= */}

            <div className="mt-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-4">

              <div className="flex items-center gap-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                  💚
                </div>

                <div>
                  <p className="text-[10px] font-bold text-green-400">
                    Compatibility Summary
                  </p>

                  <p className="text-[8px] text-gray-500">
                    Based on calculated Guna Milan
                  </p>
                </div>

              </div>

              <p className="mt-3 text-[10px] leading-5 text-gray-400">

                The calculated Guna Milan score is{" "}

                <span className="font-bold text-[#FFD400]">
                  {result.score}/
                  {result.maxScore}
                </span>

                . The overall assessment is{" "}

                <span className="font-bold text-white">
                  {result.compatibility}
                </span>

                .

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
                Kundli Milan is an astrological
                compatibility assessment based on
                the provided birth details. For a
                detailed interpretation, consider
                consulting a qualified astrologer.
              </p>

            </div>

            {/* =================================================
                EDIT BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={handleEditDetails}
              className="mt-5 flex h-12 w-full items-center justify-center rounded-xl border border-[#263449] bg-[#101C30] text-xs font-bold text-gray-300 transition hover:border-[#FFD400]/30 hover:text-[#FFD400]"
            >
              ← Edit Birth Details
            </button>

          </section>
        )}

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <p className="mt-7 pb-4 text-center text-[8px] leading-4 text-gray-600">
          Your birth details are used only to generate
          the compatibility analysis.
        </p>

      </div>
    </main>
  );
}