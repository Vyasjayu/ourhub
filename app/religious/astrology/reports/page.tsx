"use client";

import { useState } from "react";
import Link from "next/link";

interface ReportItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  popular?: boolean;
  href: string;
}

const reports: ReportItem[] = [
  {
    id: "birth-chart",
    icon: "✨",
    title: "Birth Chart",
    subtitle: "जन्म कुंडली रिपोर्ट",
    description:
      "आपकी जन्म तिथि, समय और स्थान के आधार पर विस्तृत जन्म कुंडली।",
    price: "₹199",
    popular: true,
    href: "/religious/astrology/reports/birth-chart",
  },
  {
    id: "kundli",
    icon: "🔮",
    title: "Kundli Report",
    subtitle: "पूर्ण कुंडली विश्लेषण",
    description:
      "ग्रहों, भावों, राशियों और प्रमुख योगों का विस्तृत विश्लेषण।",
    price: "₹299",
    href: "/religious/astrology/reports/kundli",
  },
  {
    id: "milan",
    icon: "💑",
    title: "Kundli Milan",
    subtitle: "कुंडली मिलान रिपोर्ट",
    description:
      "अष्टकूट गुण मिलान, मंगल दोष और विवाह compatibility analysis।",
    price: "₹199",
    href: "/religious/astrology/reports/milan",
  },
  {
    id: "dasha",
    icon: "🪐",
    title: "Dasha Report",
    subtitle: "दशा एवं अंतर्दशा",
    description:
      "महादशा, अंतर्दशा और जीवन में उनके संभावित प्रभावों का विश्लेषण।",
    price: "₹249",
    href: "/religious/astrology/reports/dasha",
  },
  {
    id: "career",
    icon: "💼",
    title: "Career Report",
    subtitle: "करियर एवं व्यवसाय",
    description:
      "करियर, नौकरी, व्यवसाय और professional growth से जुड़े संकेत।",
    price: "₹249",
    href: "/religious/astrology/reports/career",
  },
  {
    id: "love",
    icon: "❤️",
    title: "Love Report",
    subtitle: "प्रेम एवं संबंध",
    description:
      "प्रेम जीवन, relationship compatibility और relationship guidance।",
    price: "₹199",
    href: "/religious/astrology/reports/love",
  },
];

export default function AstrologyReportsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = [
    "All",
    "Kundli",
    "Marriage",
    "Career",
    "Love",
  ];

  const filteredReports = reports.filter((report) => {
    if (selectedCategory === "All") return true;

    if (selectedCategory === "Kundli") {
      return ["birth-chart", "kundli", "dasha"].includes(
        report.id
      );
    }

    if (selectedCategory === "Marriage") {
      return report.id === "milan";
    }

    if (selectedCategory === "Career") {
      return report.id === "career";
    }

    if (selectedCategory === "Love") {
      return report.id === "love";
    }

    return true;
  });

  return (
    <main className="min-h-screen bg-[#071424] px-4 py-6 text-white">
      <div className="mx-auto max-w-md">

        {/* HEADER */}
        <header className="mb-5">
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-2xl">
              📜
            </div>

            <div>
              <h1 className="text-xl font-black">
                Astrology Reports
              </h1>

              <p className="mt-1 text-[10px] text-gray-400">
                ज्योतिष की विस्तृत रिपोर्ट
              </p>
            </div>

          </div>

          {/* INTRO */}
          <div className="mt-4 rounded-2xl border border-[#FFD400]/20 bg-gradient-to-r from-[#18263A] to-[#101C30] p-4">

            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#FFD400]">
              Personalized Astrology
            </p>

            <h2 className="mt-1 text-sm font-black">
              Know what your stars say
            </h2>

            <p className="mt-2 text-[9px] leading-5 text-gray-400">
              अपनी जन्म जानकारी के आधार पर personalized
              astrology reports प्राप्त करें।
            </p>

          </div>
        </header>

        {/* CATEGORIES */}
        <section className="mb-5">

          <div className="mb-2 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold">
                Explore Reports
              </p>

              <p className="mt-0.5 text-[8px] text-gray-500">
                अपनी जरूरत के अनुसार रिपोर्ट चुनें
              </p>
            </div>

            <span className="text-[9px] text-[#FFD400]">
              {reports.length} Reports
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => {

              const active =
                selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                  className={`shrink-0 rounded-full border px-4 py-2 text-[9px] font-bold transition ${
                    active
                      ? "border-[#FFD400]/50 bg-[#FFD400] text-black"
                      : "border-[#263449] bg-[#101C30] text-gray-400"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        {/* REPORT LIST */}
        <section className="space-y-3">

          {filteredReports.map((report) => (
            <Link
              key={report.id}
              href={report.href}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4 transition hover:border-[#FFD400]/30">

                {/* POPULAR */}
                {report.popular && (
                  <div className="absolute right-3 top-3 rounded-full bg-[#FFD400] px-2 py-1 text-[7px] font-black text-black">
                    POPULAR
                  </div>
                )}

                <div className="flex gap-3">

                  {/* ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FFD400]/15 bg-[#FFD400]/10 text-2xl">
                    {report.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-2">

                      <div>
                        <h3 className="text-sm font-black text-white">
                          {report.title}
                        </h3>

                        <p className="mt-0.5 text-[9px] font-medium text-[#FFD400]">
                          {report.subtitle}
                        </p>
                      </div>

                    </div>

                    <p className="mt-2 pr-3 text-[9px] leading-4 text-gray-500">
                      {report.description}
                    </p>

                    <div className="mt-3 flex items-center justify-between">

                      <div>
                        <span className="text-[8px] text-gray-500">
                          Starting from
                        </span>

                        <p className="text-sm font-black text-white">
                          {report.price}
                        </p>
                      </div>

                      <span className="rounded-xl bg-[#FFD400] px-3 py-2 text-[9px] font-black text-black transition group-hover:bg-[#FACC15]">
                        View Report →
                      </span>

                    </div>

                  </div>
                </div>

              </div>
            </Link>
          ))}

        </section>

        {/* HOW IT WORKS */}
        <section className="mt-6 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

          <div className="mb-4">
            <p className="text-xs font-bold">
              How It Works
            </p>

            <p className="mt-1 text-[8px] text-gray-500">
              रिपोर्ट प्राप्त करने की आसान प्रक्रिया
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">

            <div className="rounded-xl bg-[#0B1320] p-3 text-center">
              <div className="text-xl">
                📝
              </div>

              <p className="mt-2 text-[8px] font-bold text-white">
                Enter Details
              </p>

              <p className="mt-1 text-[7px] leading-3 text-gray-600">
                जन्म जानकारी दें
              </p>
            </div>

            <div className="rounded-xl bg-[#0B1320] p-3 text-center">
              <div className="text-xl">
                🪐
              </div>

              <p className="mt-2 text-[8px] font-bold text-white">
                Analysis
              </p>

              <p className="mt-1 text-[7px] leading-3 text-gray-600">
                ग्रहों का विश्लेषण
              </p>
            </div>

            <div className="rounded-xl bg-[#0B1320] p-3 text-center">
              <div className="text-xl">
                📄
              </div>

              <p className="mt-2 text-[8px] font-bold text-white">
                Get Report
              </p>

              <p className="mt-1 text-[7px] leading-3 text-gray-600">
                रिपोर्ट प्राप्त करें
              </p>
            </div>

          </div>

        </section>

        {/* TRUST */}
        <section className="mt-4 grid grid-cols-3 gap-2">

          <div className="rounded-xl border border-[#1E2A3D] bg-[#101C30] p-3 text-center">
            <div className="text-lg">
              🔒
            </div>

            <p className="mt-1 text-[7px] text-gray-500">
              Secure
            </p>
          </div>

          <div className="rounded-xl border border-[#1E2A3D] bg-[#101C30] p-3 text-center">
            <div className="text-lg">
              ⚡
            </div>

            <p className="mt-1 text-[7px] text-gray-500">
              Fast
            </p>
          </div>

          <div className="rounded-xl border border-[#1E2A3D] bg-[#101C30] p-3 text-center">
            <div className="text-lg">
              🔮
            </div>

            <p className="mt-1 text-[7px] text-gray-500">
              Detailed
            </p>
          </div>

        </section>

        {/* DISCLAIMER */}
        <div className="mt-5 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

          <p className="text-[9px] font-bold text-gray-300">
            🔮 Note
          </p>

          <p className="mt-2 text-[8px] leading-4 text-gray-500">
            Astrology reports are intended for general
            guidance and informational purposes. Astrological
            interpretations may vary and should not be treated
            as guaranteed outcomes.
          </p>

        </div>

        {/* FOOTER */}
        <p className="mt-6 pb-4 text-center text-[8px] leading-4 text-gray-600">
          OurHub Astrology • Personalized guidance from your stars
        </p>

      </div>
    </main>
  );
}