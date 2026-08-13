"use client";

import { useState } from "react";

interface Astrologer {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: string;
  reviews: string;
  language: string;
  price: number;
  oldPrice?: number;
  status: "online" | "offline";
  avatar: string;
  verified: boolean;
}

const categories = [
  { id: "all", label: "सभी", icon: "✨" },
  { id: "love", label: "प्रेम", icon: "❤️" },
  { id: "marriage", label: "विवाह", icon: "💑" },
  { id: "career", label: "करियर", icon: "💼" },
  { id: "finance", label: "धन", icon: "💰" },
  { id: "kundli", label: "कुंडली", icon: "🔮" },
];

const astrologers: Astrologer[] = [
  {
    id: 1,
    name: "Astro Pushkar",
    specialization: "Vedic Astrology • Kundli",
    experience: "12+ Years",
    rating: "4.9",
    reviews: "1.2K",
    language: "Hindi, English",
    price: 25,
    oldPrice: 40,
    status: "online",
    avatar: "🔮",
    verified: true,
  },
  {
    id: 2,
    name: "Astro Hariom",
    specialization: "Marriage • Love Astrology",
    experience: "10+ Years",
    rating: "4.8",
    reviews: "980",
    language: "Hindi",
    price: 30,
    oldPrice: 50,
    status: "online",
    avatar: "🪬",
    verified: true,
  },
  {
    id: 3,
    name: "Astro Rohit",
    specialization: "Career • Finance",
    experience: "8+ Years",
    rating: "4.7",
    reviews: "760",
    language: "Hindi, English",
    price: 20,
    status: "offline",
    avatar: "⭐",
    verified: true,
  },
  {
    id: 4,
    name: "Astro Priya",
    specialization: "Love • Relationship",
    experience: "7+ Years",
    rating: "4.9",
    reviews: "1.1K",
    language: "Hindi, English",
    price: 35,
    oldPrice: 50,
    status: "online",
    avatar: "🌙",
    verified: true,
  },
];

export default function AstrologyConsultationsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [search, setSearch] = useState("");

  const filteredAstrologers =
    astrologers.filter((astrologer) => {
      const matchesSearch =
        astrologer.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        astrologer.specialization
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesSearch;
    });

  return (
    <main className="min-h-screen bg-[#071424] px-4 py-5 text-white">
      <div className="mx-auto max-w-md">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="mb-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-2xl">
                🔮
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFD400]">
                  OurHub Astrology
                </p>

                <h1 className="mt-0.5 text-xl font-black">
                  परामर्श
                </h1>

                <p className="mt-1 text-[9px] text-gray-500">
                  ज्योतिषी से व्यक्तिगत सलाह लें
                </p>
              </div>

            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#263449] bg-[#101C30] text-lg"
            >
              🎧
            </button>

          </div>

        </header>


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="overflow-hidden rounded-3xl border border-[#FFD400]/20 bg-gradient-to-br from-[#18263A] via-[#101C30] to-[#0B1320]">

          <div className="p-5">

            <div className="inline-flex rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 px-3 py-1">
              <span className="text-[8px] font-bold text-[#FFD400]">
                ✨ ASTROLOGER CONSULTATION
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-black leading-tight">
              अपने सवालों के
              <br />
              <span className="text-[#FFD400]">
                सही जवाब पाएं
              </span>
            </h2>

            <p className="mt-3 max-w-[290px] text-[10px] leading-5 text-gray-400">
              अनुभवी ज्योतिषियों से Call या Chat पर
              व्यक्तिगत परामर्श लें।
            </p>

            <div className="mt-5 flex gap-2">

              <div className="rounded-xl bg-[#0B1320] px-3 py-2">
                <p className="text-[8px] text-gray-500">
                  Verified
                </p>
                <p className="mt-1 text-[10px] font-bold text-[#FFD400]">
                  Astrologers
                </p>
              </div>

              <div className="rounded-xl bg-[#0B1320] px-3 py-2">
                <p className="text-[8px] text-gray-500">
                  Available
                </p>
                <p className="mt-1 text-[10px] font-bold text-green-400">
                  Online
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SEARCH
        ===================================================== */}

        <div className="relative mt-5">

          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm">
            🔍
          </span>

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search astrologer..."
            className="h-12 w-full rounded-2xl border border-[#263449] bg-[#101C30] pl-11 pr-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-[#FFD400]/40"
          />

        </div>


        {/* =====================================================
            CATEGORIES
        ===================================================== */}

        <section className="mt-5">

          <div className="mb-3">

            <p className="text-xs font-bold">
              Consultation For
            </p>

            <p className="mt-1 text-[8px] text-gray-500">
              किस विषय पर सलाह चाहिए?
            </p>

          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">

            {categories.map((category) => {

              const active =
                selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(category.id)
                  }
                  className={`shrink-0 rounded-2xl border px-4 py-3 transition ${
                    active
                      ? "border-[#FFD400]/50 bg-[#FFD400]/10"
                      : "border-[#1E2A3D] bg-[#101C30]"
                  }`}
                >

                  <div className="text-lg">
                    {category.icon}
                  </div>

                  <p
                    className={`mt-1 whitespace-nowrap text-[8px] font-bold ${
                      active
                        ? "text-[#FFD400]"
                        : "text-gray-400"
                    }`}
                  >
                    {category.label}
                  </p>

                </button>
              );
            })}

          </div>

        </section>


        {/* =====================================================
            ONLINE ASTROLOGERS
        ===================================================== */}

        <section className="mt-5">

          <div className="mb-3 flex items-center justify-between">

            <div>
              <p className="text-xs font-bold">
                Available Astrologers
              </p>

              <p className="mt-1 text-[8px] text-gray-500">
                अभी उपलब्ध ज्योतिषी
              </p>
            </div>

            <span className="rounded-lg bg-green-500/10 px-2 py-1 text-[8px] font-bold text-green-400">
              {astrologers.filter(
                (item) => item.status === "online"
              ).length}{" "}
              Online
            </span>

          </div>


          {/* =================================================
              ASTROLOGER CARDS
          ================================================= */}

          <div className="space-y-3">

            {filteredAstrologers.map((astrologer) => (

              <article
                key={astrologer.id}
                className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4"
              >

                <div className="flex gap-3">

                  {/* AVATAR */}

                  <div className="relative shrink-0">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-2xl">
                      {astrologer.avatar}
                    </div>

                    <span
                      className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-[#101C30] ${
                        astrologer.status === "online"
                          ? "bg-green-500"
                          : "bg-gray-600"
                      }`}
                    />

                  </div>


                  {/* INFO */}

                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-2">

                      <div>

                        <div className="flex items-center gap-1">

                          <h3 className="truncate text-xs font-black">
                            {astrologer.name}
                          </h3>

                          {astrologer.verified && (
                            <span className="text-[10px] text-blue-400">
                              ✓
                            </span>
                          )}

                        </div>

                        <p className="mt-1 line-clamp-1 text-[8px] text-gray-500">
                          {astrologer.specialization}
                        </p>

                      </div>

                      <div className="shrink-0 text-right">

                        <div className="flex items-center gap-1">
                          <span className="text-[9px] text-[#FFD400]">
                            ★
                          </span>

                          <span className="text-[9px] font-bold">
                            {astrologer.rating}
                          </span>
                        </div>

                        <p className="text-[7px] text-gray-600">
                          {astrologer.reviews} reviews
                        </p>

                      </div>

                    </div>


                    {/* META */}

                    <div className="mt-2 flex flex-wrap gap-2">

                      <span className="rounded-lg bg-[#0B1320] px-2 py-1 text-[7px] text-gray-400">
                        🕐 {astrologer.experience}
                      </span>

                      <span className="rounded-lg bg-[#0B1320] px-2 py-1 text-[7px] text-gray-400">
                        🌐 {astrologer.language}
                      </span>

                    </div>

                  </div>

                </div>


                {/* PRICE + ACTION */}

                <div className="mt-4 flex items-center justify-between border-t border-[#1E2A3D] pt-3">

                  <div>

                    <span className="text-sm font-black text-[#FFD400]">
                      ₹{astrologer.price}
                    </span>

                    <span className="ml-1 text-[7px] text-gray-600">
                      / min
                    </span>

                    {astrologer.oldPrice && (
                      <span className="ml-2 text-[8px] text-gray-600 line-through">
                        ₹{astrologer.oldPrice}
                      </span>
                    )}

                  </div>


                  <div className="flex gap-2">

                    <button
                      type="button"
                      disabled={
                        astrologer.status === "offline"
                      }
                      onClick={() => {
                        console.log(
                          "Start chat:",
                          astrologer
                        );
                      }}
                      className="rounded-xl border border-blue-400/30 bg-blue-500/10 px-3 py-2 text-[8px] font-bold text-blue-300 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      💬 Chat
                    </button>

                    <button
                      type="button"
                      disabled={
                        astrologer.status === "offline"
                      }
                      onClick={() => {
                        console.log(
                          "Start call:",
                          astrologer
                        );
                      }}
                      className="rounded-xl bg-[#FFD400] px-3 py-2 text-[8px] font-black text-black disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      📞 Call
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section className="mt-5 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

          <div className="mb-4">

            <p className="text-xs font-bold">
              How Consultation Works
            </p>

            <p className="mt-1 text-[8px] text-gray-500">
              परामर्श लेने का आसान तरीका
            </p>

          </div>

          <div className="space-y-3">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFD400]/10 text-sm">
                01
              </div>

              <div>
                <p className="text-[9px] font-bold">
                  Choose an Astrologer
                </p>

                <p className="mt-1 text-[7px] text-gray-500">
                  अपनी जरूरत के अनुसार ज्योतिषी चुनें
                </p>
              </div>

            </div>


            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFD400]/10 text-sm">
                02
              </div>

              <div>
                <p className="text-[9px] font-bold">
                  Add Consultation Balance
                </p>

                <p className="mt-1 text-[7px] text-gray-500">
                  सुरक्षित तरीके से भुगतान करें
                </p>
              </div>

            </div>


            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFD400]/10 text-sm">
                03
              </div>

              <div>
                <p className="text-[9px] font-bold">
                  Start Call or Chat
                </p>

                <p className="mt-1 text-[7px] text-gray-500">
                  ज्योतिषी से तुरंत बात शुरू करें
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TRUST
        ===================================================== */}

        <section className="mt-4 grid grid-cols-3 gap-2">

          <div className="rounded-xl border border-[#1E2A3D] bg-[#101C30] p-3 text-center">
            <div className="text-lg">✓</div>
            <p className="mt-1 text-[7px] font-bold">
              Verified
            </p>
          </div>

          <div className="rounded-xl border border-[#1E2A3D] bg-[#101C30] p-3 text-center">
            <div className="text-lg">🔐</div>
            <p className="mt-1 text-[7px] font-bold">
              Secure
            </p>
          </div>

          <div className="rounded-xl border border-[#1E2A3D] bg-[#101C30] p-3 text-center">
            <div className="text-lg">💬</div>
            <p className="mt-1 text-[7px] font-bold">
              Support
            </p>
          </div>

        </section>


        {/* =====================================================
            NOTE
        ===================================================== */}

        <div className="mt-5 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

          <p className="text-[9px] font-bold text-gray-300">
            🔮 Note
          </p>

          <p className="mt-2 text-[8px] leading-4 text-gray-500">
            Astrology consultation is intended for
            spiritual and general guidance. Choose a
            qualified astrologer according to your needs.
          </p>

        </div>


        <p className="mt-6 pb-4 text-center text-[8px] text-gray-600">
          © OurHub Astrology • Astrology Consultation
        </p>

      </div>
    </main>
  );
}