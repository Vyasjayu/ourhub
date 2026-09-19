
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  Landmark,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import {
  offlineTemples,
  type TempleCategory,
} from "@/data/offlineTempleData";

import { useLanguage } from "@/context/LanguageContext";

const locations = ["Indore", "Ujjain", "Ratlam"] as const;

const locationHindiNames: Record<string, string> = {
  Indore: "इंदौर",
  Ujjain: "उज्जैन",
  Ratlam: "रतलाम",
};

const categories: TempleCategory[] = [
  "All Temples",
  "Shiva Temple",
  "Vishnu Temple",
  "Devi Temple",
  "Ganesh Temple",
];

const categoryHindiNames: Record<TempleCategory, string> = {
  "All Temples": "सभी मंदिर",
  "Shiva Temple": "शिव मंदिर",
  "Vishnu Temple": "विष्णु मंदिर",
  "Devi Temple": "देवी मंदिर",
  "Ganesh Temple": "गणेश मंदिर",
};

const templeHindiNames: Record<string, string> = {
  "Mahakaleshwar Temple": "महाकालेश्वर मंदिर",
  "Omkareshwar Temple": "ओंकारेश्वर मंदिर",
  "Khajrana Ganesh Temple": "खजराना गणेश मंदिर",
  "Annapurna Temple": "अन्नपूर्णा मंदिर",
  "Mangalnath Temple": "मंगलनाथ मंदिर",
  "Harsiddhi Temple": "हरसिद्धि मंदिर",
  "Kal Bhairav Temple": "काल भैरव मंदिर",
  "Chintaman Ganesh Temple": "चिंतामन गणेश मंदिर",
  "Bade Ganeshji Temple": "बड़े गणेशजी मंदिर",
  "Gopal Mandir": "गोपाल मंदिर",
  "Gadkalika Temple": "गढ़कालिका मंदिर",
  "Navlakhi Eco Temple": "नवलखी मंदिर",
  "ISKCON Temple": "इस्कॉन मंदिर",
  "Pitra Parvat Temple": "पितृ पर्वत मंदिर",
};

function getLocationName(
  location: string,
  isHindi: boolean
) {
  return isHindi
    ? locationHindiNames[location] || location
    : location;
}

function getCategoryName(
  category: TempleCategory,
  isHindi: boolean
) {
  return isHindi
    ? categoryHindiNames[category] || category
    : category;
}

function getTempleName(
  name: string,
  isHindi: boolean
) {
  return isHindi
    ? templeHindiNames[name] || name
    : name;
}

export default function SelectTemple() {
  const router = useRouter();
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const [selectedLocation, setSelectedLocation] =
    useState<(typeof locations)[number]>("Indore");

  const [locationOpen, setLocationOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<TempleCategory>("All Temples");

  const [search, setSearch] = useState("");

  const filteredTemples = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return offlineTemples.filter((temple) => {
      const locationMatch =
        temple.location === selectedLocation;

      const categoryMatch =
        selectedCategory === "All Temples" ||
        temple.category === selectedCategory;

      const templeHindiName =
        templeHindiNames[temple.name] || "";

      const searchMatch =
        !searchText ||
        temple.name.toLowerCase().includes(searchText) ||
        templeHindiName.toLowerCase().includes(searchText) ||
        temple.city.toLowerCase().includes(searchText);

      return (
        locationMatch &&
        categoryMatch &&
        searchMatch
      );
    });
  }, [selectedLocation, selectedCategory, search]);

  return (
    <main className="min-h-screen bg-[#02060A] text-white">
      <div className="relative mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden bg-[#07111B] pb-28">
        {/* ================================================= */}
        {/* AMBIENT BACKGROUND */}
        {/* ================================================= */}

        <div className="pointer-events-none fixed left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.045] blur-3xl" />

        <div className="pointer-events-none absolute right-[-100px] top-[420px] h-72 w-72 rounded-full bg-[#DFAE45]/[0.025] blur-3xl" />

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <header className="relative z-40 px-4 pb-3 pt-4">
          <div className="relative flex h-[66px] items-center justify-between overflow-hidden rounded-[23px] border border-white/[0.07] bg-[#0A1522]/85 px-3 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
            {/* Header glow */}
            <div className="pointer-events-none absolute left-1/2 top-[-45px] h-32 w-52 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.08] blur-3xl" />

            {/* Back */}
            <button
              type="button"
              onClick={() => router.back()}
              aria-label={
                isHindi ? "वापस जाएं" : "Go back"
              }
              className="group relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.035] text-slate-300 transition-all duration-300 hover:border-[#DFAE45]/30 hover:bg-[#DFAE45]/[0.07] hover:text-[#F3C75F] active:scale-90"
            >
              <ArrowLeft
                size={21}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>

            {/* Center Branding */}
            <div className="absolute left-1/2 top-1/2 w-[230px] -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="flex items-center justify-center gap-1.5">
                <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#DFAE45]/50" />

                <Sparkles
                  size={10}
                  className="text-[#DFAE45]"
                  fill="currentColor"
                />

                <span className="text-[9px] font-extrabold tracking-[0.32em] text-[#DFAE45]">
                  OURHUB
                </span>

                <Sparkles
                  size={10}
                  className="text-[#DFAE45]"
                  fill="currentColor"
                />

                <span className="h-px w-5 bg-gradient-to-l from-transparent to-[#DFAE45]/50" />
              </div>

              <h1 className="mt-1 text-[16px] font-bold text-white">
                {isHindi ? "मंदिर चुनें" : "Select Temple"}
              </h1>

              <div className="mt-0.5 flex items-center justify-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#DFAE45]" />

                <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {isHindi
                    ? "पवित्र • प्रामाणिक • विश्वसनीय"
                    : "Sacred • Authentic • Trusted"}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#DFAE45]" />
              </div>
            </div>

            {/* Notification */}
            <button
              type="button"
              aria-label={
                isHindi ? "सूचनाएं" : "Notifications"
              }
              className="group relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.035] text-slate-300 transition-all duration-300 hover:border-[#DFAE45]/30 hover:bg-[#DFAE45]/[0.07] hover:text-[#F3C75F] active:scale-90"
            >
              <Bell
                size={20}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:rotate-[-8deg]"
              />

              <span className="absolute right-[7px] top-[7px] flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E7B94F] opacity-50" />

                <span className="relative h-2.5 w-2.5 rounded-full border-2 border-[#0A1522] bg-[#E7B94F] shadow-[0_0_8px_rgba(231,185,79,0.8)]" />
              </span>
            </button>

            {/* Bottom line */}
            <div className="absolute bottom-[-1px] left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent opacity-70" />
          </div>
        </header>

        {/* ================================================= */}
        {/* LOCATION + SEARCH */}
        {/* ================================================= */}

        <section className="relative z-30 px-4 pt-1">
          <div className="mb-2 flex items-center gap-1.5">
            <MapPin
              size={11}
              className="text-[#DFAE45]"
            />

            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              {isHindi
                ? "अपना पवित्र मंदिर खोजें"
                : "Find Your Sacred Temple"}
            </span>
          </div>

          <div className="grid grid-cols-[0.9fr_1.1fr] gap-2.5">
            {/* Location */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setLocationOpen((prev) => !prev)
                }
                aria-label={
                  isHindi
                    ? "स्थान चुनें"
                    : "Select location"
                }
                className={`flex h-[56px] w-full items-center gap-2 rounded-[19px] border px-3 text-left transition-all duration-300 ${
                  locationOpen
                    ? "border-[#DFAE45]/40 bg-[#0D1927] shadow-[0_0_25px_rgba(223,174,69,0.07)]"
                    : "border-white/[0.07] bg-[#0A141F] hover:border-[#DFAE45]/25"
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/15 bg-[#DFAE45]/[0.06]">
                  <MapPin
                    size={15}
                    className="text-[#F3C75F]"
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[7px] uppercase tracking-[0.12em] text-slate-600">
                    {isHindi ? "स्थान" : "Location"}
                  </span>

                  <span className="mt-0.5 block truncate text-[11px] font-semibold text-slate-200">
                    {getLocationName(
                      selectedLocation,
                      isHindi
                    )}
                    , MP
                  </span>
                </span>

                <ChevronDown
                  size={15}
                  className={`shrink-0 text-[#DFAE45] transition-transform duration-300 ${
                    locationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Location Dropdown */}
              {locationOpen && (
                <div className="absolute left-0 right-0 top-[62px] z-[100] overflow-hidden rounded-[22px] border border-[#DFAE45]/20 bg-[#09131F]/[0.98] shadow-[0_25px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                  <div className="flex items-center justify-between border-b border-white/[0.06] px-3.5 py-3">
                    <div>
                      <p className="text-[10px] font-bold text-white">
                        {isHindi
                          ? "सेवा का स्थान"
                          : "Service Location"}
                      </p>

                      <p className="mt-0.5 text-[7px] text-slate-600">
                        {isHindi
                          ? "अपना पसंदीदा शहर चुनें"
                          : "Choose your preferred city"}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setLocationOpen(false)
                      }
                      aria-label={
                        isHindi ? "बंद करें" : "Close"
                      }
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.04] text-slate-500"
                    >
                      <X size={13} />
                    </button>
                  </div>

                  <div className="p-2">
                    {locations.map((location) => {
                      const active =
                        location === selectedLocation;

                      return (
                        <button
                          key={location}
                          type="button"
                          onClick={() => {
                            setSelectedLocation(location);
                            setLocationOpen(false);
                          }}
                          className={`flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-left transition ${
                            active
                              ? "bg-[#DFAE45]/[0.08]"
                              : "hover:bg-white/[0.03]"
                          }`}
                        >
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-xl border ${
                              active
                                ? "border-[#DFAE45]/25 bg-[#DFAE45]/[0.09]"
                                : "border-white/[0.06] bg-white/[0.025]"
                            }`}
                          >
                            <MapPin
                              size={13}
                              className={
                                active
                                  ? "text-[#F3C75F]"
                                  : "text-slate-500"
                              }
                            />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span
                              className={`block text-[10px] font-semibold ${
                                active
                                  ? "text-[#F3C75F]"
                                  : "text-slate-300"
                              }`}
                            >
                              {getLocationName(
                                location,
                                isHindi
                              )}
                              , MP
                            </span>

                            <span className="mt-0.5 block text-[7px] text-slate-600">
                              {isHindi
                                ? "ऑफलाइन पूजा उपलब्ध"
                                : "Offline pooja available"}
                            </span>
                          </span>

                          {active && (
                            <Check
                              size={15}
                              className="text-[#F3C75F]"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Search */}
            <div className="flex h-[56px] min-w-0 items-center gap-2 rounded-[19px] border border-white/[0.07] bg-[#0A141F] px-3 transition-all duration-300 focus-within:border-[#DFAE45]/35 focus-within:shadow-[0_0_25px_rgba(223,174,69,0.06)]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.025]">
                <Search
                  size={15}
                  className="text-[#DFAE45]"
                />
              </span>

              <div className="min-w-0 flex-1">
                <span className="block text-[7px] uppercase tracking-[0.12em] text-slate-600">
                  {isHindi ? "खोजें" : "Discover"}
                </span>

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  type="text"
                  placeholder={
                    isHindi
                      ? "मंदिर खोजें..."
                      : "Temple..."
                  }
                  aria-label={
                    isHindi
                      ? "मंदिर खोजें"
                      : "Search temple"
                  }
                  className="mt-0.5 w-full min-w-0 bg-transparent text-[11px] font-medium text-white outline-none placeholder:text-slate-600"
                />
              </div>

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label={
                    isHindi
                      ? "खोज साफ करें"
                      : "Clear search"
                  }
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-slate-500"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="relative px-4 pt-4">
          <div className="group relative h-[190px] overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-[#0A141F] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <Image
              src="/images/offline-pooja/temple-select.jpg"
              alt={
                isHindi
                  ? "पवित्र मंदिर चुनें"
                  : "Choose a sacred temple"
              }
              fill
              sizes="(max-width: 480px) 100vw, 480px"
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
            />

            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

            {/* Glow */}
            <div className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-[#DFAE45]/[0.10] blur-3xl" />

            {/* Hero content */}
            <div className="absolute inset-y-0 left-0 flex max-w-[290px] flex-col justify-center p-5">
              <div className="mb-2 flex items-center gap-1.5">
                <Sparkles
                  size={11}
                  className="text-[#F3C75F]"
                  fill="currentColor"
                />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#F3C75F]">
                  {isHindi
                    ? "पवित्र गंतव्य"
                    : "Sacred Destination"}
                </span>
              </div>

              <h2 className="text-[25px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
                {isHindi ? (
                  <>
                    पवित्र मंदिर
                    <br />
                    <span className="bg-gradient-to-r from-[#F7D77A] via-[#DFAE45] to-[#B98222] bg-clip-text text-transparent">
                      चुनें
                    </span>
                  </>
                ) : (
                  <>
                    Choose a Sacred
                    <br />
                    <span className="bg-gradient-to-r from-[#F7D77A] via-[#DFAE45] to-[#B98222] bg-clip-text text-transparent">
                      Temple
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-2 max-w-[235px] text-[10px] leading-[1.6] text-slate-300">
                {isHindi
                  ? "विश्वसनीय स्थानीय मंदिर सेवा के साथ अपनी पूजा के लिए मंदिर चुनें।"
                  : "Select where you want your pooja performed with trusted local temple services."}
              </p>

              {/* Mini trust row */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-2 py-1 backdrop-blur-md">
                  <BadgeCheck
                    size={10}
                    className="text-[#F3C75F]"
                  />

                  <span className="text-[7px] font-semibold text-slate-200">
                    {isHindi ? "प्रमाणित" : "Verified"}
                  </span>
                </div>

                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-2 py-1 backdrop-blur-md">
                  <Landmark
                    size={10}
                    className="text-[#F3C75F]"
                  />

                  <span className="text-[7px] font-semibold text-slate-200">
                    {isHindi ? "प्रामाणिक" : "Authentic"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right icon */}
            <div className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#DFAE45]/30 bg-black/40 backdrop-blur-xl">
              <Landmark
                size={25}
                strokeWidth={1.6}
                className="text-[#F3C75F]"
              />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#07111B] bg-[#DFAE45]">
                <Sparkles
                  size={9}
                  className="text-black"
                  fill="currentColor"
                />
              </span>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-1/2 h-px w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent" />
          </div>
        </section>

        {/* ================================================= */}
        {/* CATEGORIES */}
        {/* ================================================= */}

        <section className="relative mt-4">
          <div className="mb-2 flex items-center justify-between px-4">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                {isHindi
                  ? "प्रकार के अनुसार खोजें"
                  : "Browse By Type"}
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500">
                {isHindi
                  ? "अपना पसंदीदा मंदिर खोजें"
                  : "Find your preferred temple"}
              </p>
            </div>

            <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[7px] font-semibold text-slate-500">
              {filteredTemples.length}{" "}
              {isHindi ? "परिणाम" : "Results"}
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                  aria-label={getCategoryName(
                    category,
                    isHindi
                  )}
                  className={`group relative shrink-0 overflow-hidden rounded-full px-4 py-2.5 text-[9px] font-bold transition-all duration-300 active:scale-95 ${
                    active
                      ? "bg-gradient-to-r from-[#F3C75F] to-[#B98222] text-black shadow-[0_6px_18px_rgba(223,174,69,0.18)]"
                      : "border border-white/[0.07] bg-[#0A141F] text-slate-400 hover:border-[#DFAE45]/25 hover:text-slate-200"
                  }`}
                >
                  {active && (
                    <span className="mr-1.5 inline-flex">
                      <Check
                        size={10}
                        strokeWidth={3}
                      />
                    </span>
                  )}

                  {getCategoryName(
                    category,
                    isHindi
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* ================================================= */}
        {/* RESULT HEADER */}
        {/* ================================================= */}

        <section className="px-4 pt-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="mb-1 flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#DFAE45]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  {isHindi
                    ? "उपलब्ध मंदिर"
                    : "Available Temples"}
                </span>
              </div>

              <h2 className="text-[19px] font-extrabold tracking-tight text-white">
                {isHindi
                  ? `${getLocationName(
                      selectedLocation,
                      true
                    )} के मंदिर`
                  : `Temples in ${selectedLocation}`}
              </h2>
            </div>

            <div className="flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5">
              <Landmark
                size={10}
                className="text-[#DFAE45]"
              />

              <span className="text-[8px] font-bold text-slate-400">
                {filteredTemples.length}{" "}
                {isHindi ? "मंदिर" : "temples"}
              </span>
            </div>
          </div>

          <div className="mt-3 h-px bg-gradient-to-r from-[#DFAE45]/40 via-white/[0.06] to-transparent" />
        </section>

        {/* ================================================= */}
        {/* TEMPLE LIST */}
        {/* ================================================= */}

        <section className="space-y-3 px-4 pt-4">
          {filteredTemples.length > 0 ? (
            filteredTemples.map((temple, index) => {
              const displayTempleName =
                getTempleName(
                  temple.name,
                  isHindi
                );

              return (
                <button
                  key={temple.id}
                  type="button"
                  onClick={() =>
                    router.push(
                      `/offline-pooja/select-temple/${temple.id}`
                    )
                  }
                  aria-label={
                    isHindi
                      ? `${displayTempleName} चुनें`
                      : `Select ${temple.name}`
                  }
                  className="group relative flex w-full items-center gap-3 overflow-hidden rounded-[23px] border border-white/[0.07] bg-gradient-to-r from-[#0C1724] to-[#08111B] p-2.5 text-left shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DFAE45]/25 hover:shadow-[0_18px_38px_rgba(0,0,0,0.3)] active:scale-[0.99]"
                >
                  {/* Card glow */}
                  <div className="pointer-events-none absolute -right-12 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[#DFAE45]/[0.035] blur-2xl" />

                  {/* Image */}
                  <div className="relative h-[102px] w-[96px] shrink-0 overflow-hidden rounded-[17px] bg-[#111C29]">
                    <Image
                      src={temple.image}
                      alt={displayTempleName}
                      fill
                      sizes="96px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                    {/* Number */}
                    <span className="absolute left-2 top-2 flex h-5 min-w-5 items-center justify-center rounded-full border border-white/10 bg-black/45 px-1 text-[7px] font-bold text-white backdrop-blur-md">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    {/* Verified */}
                    <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full border border-emerald-400/15 bg-black/50 px-1.5 py-1 backdrop-blur-md">
                      <BadgeCheck
                        size={9}
                        className="text-emerald-400"
                      />

                      <span className="text-[6px] font-bold uppercase text-emerald-300">
                        {isHindi
                          ? "प्रमाणित"
                          : "Verified"}
                      </span>
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 min-w-0 flex-1 py-1">
                    <div className="flex items-start gap-2">
                      <h3 className="line-clamp-2 flex-1 text-[14px] font-extrabold leading-[18px] text-white">
                        {displayTempleName}
                      </h3>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.025]">
                        <ChevronRight
                          size={14}
                          className="text-[#DFAE45] transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>

                    {/* City */}
                    <div className="mt-1 flex items-center gap-1">
                      <MapPin
                        size={10}
                        className="text-[#DFAE45]"
                      />

                      <p className="truncate text-[9px] font-medium text-slate-500">
                        {isHindi
                          ? getLocationName(
                              temple.city,
                              true
                            )
                          : temple.city}
                        , {temple.state}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      <span className="flex items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.025] px-2 py-1">
                        <MapPin
                          size={9}
                          className="text-slate-500"
                        />

                        <span className="text-[7px] font-semibold text-slate-400">
                          {temple.distance}
                        </span>
                      </span>

                      <span className="flex items-center gap-1 rounded-lg border border-[#DFAE45]/10 bg-[#DFAE45]/[0.04] px-2 py-1">
                        <Star
                          size={9}
                          className="text-[#F3C75F]"
                          fill="currentColor"
                        />

                        <span className="text-[7px] font-bold text-[#F3C75F]">
                          {temple.rating}
                        </span>
                      </span>

                      {temple.popular && (
                        <span className="flex items-center gap-1 rounded-lg border border-emerald-400/10 bg-emerald-400/[0.05] px-2 py-1">
                          <Sparkles
                            size={8}
                            className="text-emerald-400"
                          />

                          <span className="text-[7px] font-bold text-emerald-300">
                            {isHindi
                              ? "लोकप्रिय"
                              : "Popular"}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-8 h-px w-16 bg-gradient-to-r from-[#DFAE45]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              );
            })
          ) : (
            /* Empty State */
            <div className="relative overflow-hidden rounded-[25px] border border-[#DFAE45]/15 bg-gradient-to-b from-[#0D1825] to-[#08111B] px-5 py-12 text-center">
              <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.07] blur-3xl" />

              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.07]">
                <Landmark
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#F3C75F]"
                />
              </div>

              <h3 className="relative mt-4 text-[15px] font-bold text-white">
                {isHindi
                  ? "कोई मंदिर नहीं मिला"
                  : "No temple found"}
              </h3>

              <p className="relative mx-auto mt-1.5 max-w-[240px] text-[10px] leading-5 text-slate-500">
                {isHindi
                  ? "कोई दूसरा स्थान, मंदिर की श्रेणी चुनें या किसी अन्य पवित्र स्थान को खोजें।"
                  : "Try another location, temple category or search for a different sacred place."}
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All Temples");
                }}
                className="relative mt-5 rounded-full bg-gradient-to-r from-[#F3C75F] to-[#B98222] px-5 py-2.5 text-[9px] font-bold text-black shadow-[0_8px_20px_rgba(223,174,69,0.15)] active:scale-95"
              >
                {isHindi
                  ? "फ़िल्टर रीसेट करें"
                  : "Reset Filters"}
              </button>
            </div>
          )}
        </section>

        {/* ================================================= */}
        {/* REQUEST TEMPLE */}
        {/* ================================================= */}

        <section className="relative mt-6 px-4">
          <div className="group relative overflow-hidden rounded-[25px] border border-[#DFAE45]/18 bg-gradient-to-br from-[#101C2A] via-[#0B1622] to-[#08111B] p-4 shadow-[0_15px_35px_rgba(0,0,0,0.2)]">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/[0.07] blur-3xl" />

            <div className="relative flex items-center gap-3">
              {/* Icon */}
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[19px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.07]">
                <Landmark
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#F3C75F]"
                />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0B1622] bg-[#DFAE45]">
                  <Sparkles
                    size={9}
                    className="text-black"
                    fill="currentColor"
                  />
                </span>
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                  {isHindi
                    ? "अपना मंदिर नहीं मिला?"
                    : "Can't find your temple?"}
                </p>

                <h3 className="mt-1 text-[14px] font-extrabold text-white">
                  {isHindi
                    ? "मंदिर का अनुरोध करें"
                    : "Request a Temple"}
                </h3>

                <p className="mt-1 text-[9px] leading-4 text-slate-500">
                  {isHindi
                    ? "अपने पसंदीदा मंदिर के बारे में बताएं और हम आपके लिए सेवा की व्यवस्था करने का प्रयास करेंगे।"
                    : "Tell us your preferred temple and we'll try to arrange the service for you."}
                </p>
              </div>
            </div>

            {/* Request Button */}
            <button
              type="button"
              onClick={() =>
                router.push("/pooja/offline/book")
              }
              className="group/request relative mt-4 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#F3C75F] via-[#DFAE45] to-[#B98222] text-[10px] font-extrabold text-black shadow-[0_8px_25px_rgba(223,174,69,0.18)] transition-all duration-300 active:scale-[0.98]"
            >
              <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover/request:left-[110%]" />

              <Landmark
                size={14}
                className="relative z-10"
              />

              <span className="relative z-10">
                {isHindi
                  ? "इस मंदिर का अनुरोध करें"
                  : "Request This Temple"}
              </span>

              <ArrowRight
                size={13}
                className="relative z-10 transition-transform duration-300 group-hover/request:translate-x-0.5"
              />
            </button>
          </div>
        </section>

        {/* ================================================= */}
        {/* TRUST STRIP */}
        {/* ================================================= */}

        <section className="mt-4 px-4">
          <div className="grid grid-cols-3 gap-2">
            <TrustItem
              icon={<BadgeCheck size={14} />}
              title={isHindi ? "प्रमाणित" : "Verified"}
              subtitle={isHindi ? "मंदिर" : "Temples"}
            />

            <TrustItem
              icon={<ShieldCheck size={14} />}
              title={isHindi ? "विश्वसनीय" : "Trusted"}
              subtitle={isHindi ? "पंडित" : "Pandits"}
            />

            <TrustItem
              icon={<Star size={14} />}
              title={isHindi ? "शीर्ष रेटेड" : "Top Rated"}
              subtitle={isHindi ? "सेवाएं" : "Services"}
            />
          </div>
        </section>

        {/* ================================================= */}
        {/* FOOTER BRAND */}
        {/* ================================================= */}

        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#DFAE45]/25" />

          <Sparkles
            size={9}
            className="text-[#DFAE45]/60"
            fill="currentColor"
          />

          <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-700">
            {isHindi
              ? "दिव्य • प्रामाणिक • विश्वसनीय"
              : "Divine • Authentic • Trusted"}
          </span>

          <Sparkles
            size={9}
            className="text-[#DFAE45]/60"
            fill="currentColor"
          />

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#DFAE45]/25" />
        </div>

        {/* ================================================= */}
        {/* PREMIUM BOTTOM NAV */}
        {/* ================================================= */}

        <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[480px] -translate-x-1/2 px-2 pb-2">
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#07111B]/[0.97] px-1.5 pt-2 shadow-[0_-10px_40px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
            {/* Top Gold Highlight */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/70 to-transparent" />

            <div className="relative grid grid-cols-5">
              <BottomItem
                label={isHindi ? "होम" : "Home"}
                icon={HomeIcon}
                active={false}
                onClick={() =>
                  router.push("/offline-pooja")
                }
              />

              <BottomItem
                label={isHindi ? "श्रेणियां" : "Categories"}
                icon={GridIcon}
                active={true}
                onClick={() =>
                  router.push(
                    "/offline-pooja/select-temple"
                  )
                }
              />

              <BottomItem
                label={isHindi ? "बुकिंग" : "Bookings"}
                icon={CalendarIcon}
                active={false}
                onClick={() =>
                  router.push(
                    "/offline-pooja/bookings"
                  )
                }
              />

              <BottomItem
                label={isHindi ? "वॉलेट" : "Wallet"}
                icon={WalletIcon}
                active={false}
                onClick={() =>
                  router.push("/wallet")
                }
              />

              <BottomItem
                label={isHindi ? "प्रोफ़ाइल" : "Profile"}
                icon={ProfileIcon}
                active={false}
                onClick={() =>
                  router.push("/profile")
                }
              />
            </div>

            <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </nav>
      </div>
    </main>
  );
}

/* ===================================================== */
/* TRUST ITEM */
/* ===================================================== */

function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-[17px] border border-white/[0.06] bg-[#0A141F] px-2.5 py-2.5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/15 bg-[#DFAE45]/[0.06] text-[#DFAE45]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[8px] font-bold text-slate-300">
          {title}
        </p>

        <p className="mt-0.5 truncate text-[7px] text-slate-600">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/* ===================================================== */
/* BOTTOM NAV ITEM */
/* ===================================================== */

function BottomItem({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ElementType;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group relative flex min-h-[62px] flex-col items-center justify-center"
    >
      {/* Active glow */}
      {active && (
        <span className="pointer-events-none absolute top-0 h-8 w-12 rounded-full bg-[#DFAE45]/[0.10] blur-xl" />
      )}

      {/* Top indicator */}
      <span
        className={`absolute top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent transition-all duration-300 ${
          active
            ? "w-9 opacity-100"
            : "w-0 opacity-0"
        }`}
      />

      {/* Icon */}
      <span
        className={`relative flex h-9 w-10 items-center justify-center rounded-2xl border transition-all duration-300 ${
          active
            ? "border-[#DFAE45]/20 bg-[#DFAE45]/[0.08]"
            : "border-transparent bg-transparent group-hover:border-white/[0.05] group-hover:bg-white/[0.025]"
        }`}
      >
        <Icon
          size={20}
          strokeWidth={active ? 2.3 : 1.7}
          className={`transition-all duration-300 ${
            active
              ? "text-[#F3C75F] drop-shadow-[0_0_8px_rgba(243,199,95,0.35)]"
              : "text-slate-500 group-hover:text-slate-300"
          }`}
        />

        {active && (
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#07111B] bg-[#DFAE45]" />
        )}
      </span>

      {/* Label */}
      <span
        className={`mt-1 text-[8px] tracking-tight transition-all ${
          active
            ? "font-bold text-[#F3C75F]"
            : "font-medium text-slate-500 group-hover:text-slate-300"
        }`}
      >
        {label}
      </span>

      {/* Active dot */}
      <span
        className={`mt-1 h-1 rounded-full bg-[#DFAE45] transition-all ${
          active
            ? "w-1 opacity-100 shadow-[0_0_7px_rgba(223,174,69,0.7)]"
            : "w-0 opacity-0"
        }`}
      />
    </button>
  );
}

/* ===================================================== */
/* NAV ICONS */
/* ===================================================== */

function HomeIcon(props: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 10.5L12 3L21 10.5V20H14.5V14H9.5V20H3V10.5Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridIcon(props: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="6"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
      />
      <rect
        x="14"
        y="4"
        width="6"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
      />
      <rect
        x="4"
        y="14"
        width="6"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
      />
      <rect
        x="14"
        y="14"
        width="6"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
      />
    </svg>
  );
}

function CalendarIcon(props: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.5"
        y="5"
        width="17"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
      />
      <path
        d="M7 3.5V7M17 3.5V7M3.5 10H20.5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

function WalletIcon(props: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6.5C4 5.4 4.9 4.5 6 4.5H19C19.55 4.5 20 4.95 20 5.5V18.5C20 19.05 19.55 19.5 19 19.5H6C4.9 19.5 4 18.6 4 17.5V6.5Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
      />
      <path
        d="M4 8H20M15 13H20"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
        strokeLinecap="round"
      />
      <circle
        cx="15"
        cy="13"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

function ProfileIcon(props: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="8"
        r="3.5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
      />

      <path
        d="M5 20C5.7 16.6 8.1 14.5 12 14.5C15.9 14.5 18.3 16.6 19 20"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

