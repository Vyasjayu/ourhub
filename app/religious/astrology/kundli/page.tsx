
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import AstrologyHeader from "@/components/astrology/AstrologyHeader";
import BottomNavigation from "@/components/astrology/BottomNavigation";

export default function KundliPage() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your full name");
      return;
    }

    if (!gender) {
      setError("Please select your gender");
      return;
    }

    if (!dob) {
      setError("Please select your date of birth");
      return;
    }

    if (!birthTime) {
      setError("Please enter your birth time");
      return;
    }

    if (!birthPlace.trim()) {
      setError("Please enter your birth place");
      return;
    }

    const params = new URLSearchParams({
      name: name.trim(),
      gender,
      dob,
      time: birthTime,
      place: birthPlace.trim(),
    });

    window.location.href =
      `/religious/astrology/kundli/result?${params.toString()}`;
  }

  return (
    <main className="min-h-screen bg-black pb-24">
      <div className="mx-auto min-h-screen w-full max-w-md overflow-x-hidden bg-[#050B14] shadow-2xl">

        {/* HEADER */}
        <AstrologyHeader />

        {/* CONTENT */}
        <div className="px-3 pb-28">

          {/* BACK */}
          <div className="pt-4">
            <Link
              href="/religious/astrology"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300"
            >
              <ArrowLeft size={19} />
              Back to Astrology
            </Link>
          </div>

          {/* HERO */}
          <section className="pt-5">
            <div className="relative overflow-hidden rounded-2xl border border-[#FFD400]/20 bg-[#101C30] p-5">

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FFD400]/10 blur-3xl" />

              <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD400] text-black shadow-lg">
                    <Sparkles
                      size={25}
                      strokeWidth={2.2}
                    />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#FFD400]">
                      OURHUB ASTROLOGY
                    </p>

                    <h1 className="mt-1 text-[24px] font-black text-white">
                      Create Your Kundli
                    </h1>
                  </div>

                </div>

                <p className="mt-4 text-[13px] leading-6 text-gray-300">
                  Enter your birth details to generate your personalized
                  Vedic birth chart and astrology insights.
                </p>

                <div className="mt-4 flex items-center gap-2 text-[11px] text-gray-400">
                  <ShieldCheck
                    size={15}
                    className="text-[#FFD400]"
                  />

                  Your information is kept secure
                </div>

              </div>
            </div>
          </section>

          {/* FORM */}
          <section className="pt-6">

            <div className="rounded-2xl border border-[#1E2A3D] bg-[#0B1423] p-4">

              <div className="mb-5">
                <h2 className="text-[18px] font-bold text-white">
                  Birth Details
                </h2>

                <p className="mt-1 text-[11px] text-gray-400">
                  Enter accurate birth details for a better Kundli
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* FULL NAME */}
                <div>

                  <label className="mb-2 block text-[12px] font-semibold text-gray-300">
                    Full Name
                  </label>

                  <div className="relative">

                    <UserRound
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FFD400]"
                    />

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="h-12 w-full rounded-xl border border-[#25344A] bg-[#101C30] pl-10 pr-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#FFD400]"
                    />

                  </div>
                </div>

                {/* GENDER */}
                <div>

                  <label className="mb-2 block text-[12px] font-semibold text-gray-300">
                    Gender
                  </label>

                  <div className="relative">

                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="h-12 w-full appearance-none rounded-xl border border-[#25344A] bg-[#101C30] px-3 pr-10 text-sm text-white outline-none focus:border-[#FFD400]"
                    >

                      <option
                        value=""
                        className="bg-[#101C30]"
                      >
                        Select Gender
                      </option>

                      <option
                        value="male"
                        className="bg-[#101C30]"
                      >
                        Male
                      </option>

                      <option
                        value="female"
                        className="bg-[#101C30]"
                      >
                        Female
                      </option>

                      <option
                        value="other"
                        className="bg-[#101C30]"
                      >
                        Other
                      </option>

                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#FFD400]"
                    />

                  </div>
                </div>

                {/* DATE OF BIRTH */}
                <div>

                  <label className="mb-2 block text-[12px] font-semibold text-gray-300">
                    Date of Birth
                  </label>

                  <div className="relative">

                    <CalendarDays
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FFD400]"
                    />

                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="h-12 w-full rounded-xl border border-[#25344A] bg-[#101C30] pl-10 pr-3 text-sm text-white outline-none focus:border-[#FFD400]"
                    />

                  </div>
                </div>

                {/* BIRTH TIME */}
                <div>

                  <label className="mb-2 block text-[12px] font-semibold text-gray-300">
                    Birth Time
                  </label>

                  <div className="relative">

                    <Clock3
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FFD400]"
                    />

                    <input
                      type="time"
                      value={birthTime}
                      onChange={(e) =>
                        setBirthTime(e.target.value)
                      }
                      className="h-12 w-full rounded-xl border border-[#25344A] bg-[#101C30] pl-10 pr-3 text-sm text-white outline-none focus:border-[#FFD400]"
                    />

                  </div>

                  <p className="mt-2 text-[10px] text-gray-500">
                    Enter your exact birth time if available
                  </p>

                </div>

                {/* BIRTH PLACE */}
                <div>

                  <label className="mb-2 block text-[12px] font-semibold text-gray-300">
                    Birth Place
                  </label>

                  <div className="relative">

                    <MapPin
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FFD400]"
                    />

                    <input
                      type="text"
                      value={birthPlace}
                      onChange={(e) =>
                        setBirthPlace(e.target.value)
                      }
                      placeholder="e.g. Indore, Madhya Pradesh"
                      className="h-12 w-full rounded-xl border border-[#25344A] bg-[#101C30] pl-10 pr-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#FFD400]"
                    />

                  </div>
                </div>

                {/* ERROR */}
                {error && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-3 text-center text-[11px] font-medium text-red-300">
                    {error}
                  </div>
                )}

                {/* GENERATE BUTTON */}
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFD400] px-4 py-3.5 text-[15px] font-black text-black shadow-lg shadow-[#FFD400]/10 transition active:scale-[0.98]"
                >
                  <Sparkles size={19} />

                  Generate Kundli

                  <ArrowRight size={19} />
                </button>

              </form>
            </div>
          </section>

          {/* FEATURES */}
          <section className="pt-6">

            <h2 className="mb-3 text-[17px] font-bold text-white">
              What You Will Get
            </h2>

            <div className="grid grid-cols-2 gap-2">

              <FeatureCard
                title="Birth Chart"
                description="Your personalized birth chart"
              />

              <FeatureCard
                title="Lagna Chart"
                description="Ascendant and planetary positions"
              />

              <FeatureCard
                title="Planetary Positions"
                description="Detailed planetary information"
              />

              <FeatureCard
                title="Dasha"
                description="Mahadasha and Antardasha"
              />

              <FeatureCard
                title="Raj Yog"
                description="Important planetary combinations"
              />

              <FeatureCard
                title="Predictions"
                description="Insights about your life"
              />

            </div>
          </section>

          {/* ASTROLOGER CTA */}
          <section className="pt-6">

            <Link
              href="/religious/astrology/astrologers"
              className="flex items-center justify-between rounded-2xl border border-[#FFD400]/20 bg-[#101C30] p-4"
            >

              <div className="flex min-w-0 items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFD400] text-black">
                  <UserRound size={22} />
                </div>

                <div className="min-w-0">

                  <p className="text-[14px] font-bold text-white">
                    Talk to an Astrologer
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Consult verified astrologers via Call or Chat
                  </p>

                </div>

              </div>

              <ArrowRight
                size={20}
                className="ml-2 shrink-0 text-[#FFD400]"
              />

            </Link>
          </section>

          {/* HOW IT WORKS */}
          <section className="pt-7">

            <h2 className="mb-4 text-[18px] font-bold text-white">
              How It Works
            </h2>

            <div className="space-y-3">

              <Step
                number="1"
                title="Enter Birth Details"
                description="Enter your name, date, time and place of birth."
              />

              <Step
                number="2"
                title="Generate Kundli"
                description="Tap the Generate Kundli button."
              />

              <Step
                number="3"
                title="View Your Kundli"
                description="Explore your birth chart and planetary details."
              />

              <Step
                number="4"
                title="Consult an Astrologer"
                description="Talk to a verified astrologer whenever you need guidance."
              />

            </div>
          </section>

          {/* SECURITY */}
          <section className="pt-7">

            <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFD400]/10 text-[#FFD400]">
                  <ShieldCheck size={21} />
                </div>

                <div>

                  <p className="text-[13px] font-bold text-white">
                    Your Information Is Secure
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-gray-400">
                    Your birth information is used only to prepare your
                    personalized Kundli and astrology insights.
                  </p>

                </div>

              </div>
            </div>
          </section>

          <div className="h-10" />
        </div>

        {/* BOTTOM NAV */}
        <BottomNavigation />

      </div>
    </main>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#1E2A3D] bg-[#101C30] p-3">

      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD400]/10 text-[#FFD400]">
        <Check size={16} />
      </div>

      <p className="text-[12px] font-bold text-white">
        {title}
      </p>

      <p className="mt-1 text-[9px] leading-4 text-gray-500">
        {description}
      </p>

    </div>
  );
}

/* =========================================================
   STEP
========================================================= */

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-[#1E2A3D] bg-[#101C30] p-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFD400] text-sm font-black text-black">
        {number}
      </div>

      <div>

        <p className="text-[13px] font-bold text-white">
          {title}
        </p>

        <p className="mt-1 text-[10px] leading-5 text-gray-400">
          {description}
        </p>

      </div>

    </div>
  );
}

