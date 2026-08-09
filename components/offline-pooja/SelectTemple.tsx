"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  MapPin,
  Search,
  Star,
} from "lucide-react";

import {
  offlineTemples,
  type TempleCategory,
} from "@/data/offlineTempleData";

const locations = ["Indore", "Ujjain", "Ratlam"] as const;

const categories: TempleCategory[] = [
  "All Temples",
  "Shiva Temple",
  "Vishnu Temple",
  "Devi Temple",
  "Ganesh Temple",
];

export default function SelectTemple() {
  const router = useRouter();

  const [selectedLocation, setSelectedLocation] =
    useState<(typeof locations)[number]>("Indore");

  const [locationOpen, setLocationOpen] =
    useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<TempleCategory>("All Temples");

  const [search, setSearch] = useState("");

  const filteredTemples = useMemo(() => {
    return offlineTemples.filter((temple) => {
      const locationMatch =
        temple.location === selectedLocation;

      const categoryMatch =
        selectedCategory === "All Temples" ||
        temple.category === selectedCategory;

      const searchText = search.trim().toLowerCase();

      const searchMatch =
        !searchText ||
        temple.name.toLowerCase().includes(searchText) ||
        temple.city.toLowerCase().includes(searchText);

      return (
        locationMatch &&
        categoryMatch &&
        searchMatch
      );
    });
  }, [selectedLocation, selectedCategory, search]);

  return (
    <main className="min-h-screen bg-[#03070b] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden pb-24">
        {/* HEADER */}
        <header className="flex items-center justify-between px-4 pb-3 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center"
          >
            <ArrowLeft
              size={27}
              strokeWidth={2}
              className="text-yellow-400"
            />
          </button>

          <div className="text-center">
            <p className="text-[10px] font-semibold tracking-[4px] text-gray-300">
              OURHUB
            </p>

            <h1 className="mt-1 text-[18px] font-semibold text-yellow-400">
              Select Temple
            </h1>
          </div>

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center"
          >
            <Bell
              size={26}
              strokeWidth={1.8}
              className="text-yellow-400"
            />

            <span className="absolute right-[5px] top-[5px] h-2.5 w-2.5 rounded-full bg-red-500" />
          </button>
        </header>

        {/* LOCATION + SEARCH */}
        <section className="px-4">
          <div className="flex gap-3">
            {/* LOCATION */}
            <div className="relative min-w-0 flex-1">
              <button
                type="button"
                onClick={() =>
                  setLocationOpen(!locationOpen)
                }
                className="flex h-12 w-full items-center gap-2 rounded-2xl border border-yellow-500/20 bg-[#0b1118] px-3"
              >
                <MapPin
                  size={18}
                  className="shrink-0 text-yellow-400"
                />

                <span className="truncate text-sm text-gray-200">
                  {selectedLocation}, MP
                </span>

                <ChevronDown
                  size={17}
                  className={`ml-auto shrink-0 text-yellow-400 transition-transform ${
                    locationOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* LOCATION DROPDOWN */}
              {locationOpen && (
                <div className="absolute left-0 right-0 top-[56px] z-50 overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#0b1118] shadow-2xl shadow-black/60">
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
                        className="flex w-full items-center gap-3 border-b border-white/5 px-4 py-3 text-left last:border-b-0"
                      >
                        <MapPin
                          size={17}
                          className="text-yellow-400"
                        />

                        <span
                          className={`flex-1 text-sm ${
                            active
                              ? "font-semibold text-yellow-400"
                              : "text-gray-200"
                          }`}
                        >
                          {location}, MP
                        </span>

                        {active && (
                          <Check
                            size={17}
                            className="text-yellow-400"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* SEARCH */}
            <div className="flex h-12 min-w-0 flex-1 items-center gap-2 rounded-2xl border border-yellow-500/20 bg-[#0b1118] px-3">
              <Search
                size={18}
                className="shrink-0 text-gray-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                type="text"
                placeholder="Search Temple..."
                className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>
        </section>

        {/* HERO */}
        <section className="px-4 pt-4">
          <div className="relative h-[170px] overflow-hidden rounded-[20px] border border-yellow-500/20">
            <Image
              src="/images/offline-pooja/temple-select.jpg"
              alt="Choose a sacred temple"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

            <div className="absolute inset-0 flex items-center justify-between p-5">
              <div className="max-w-[250px]">
                <h2 className="text-[23px] font-semibold leading-tight text-white">
                  Choose a Sacred
                  <br />
                  <span className="text-yellow-400">
                    Temple
                  </span>
                </h2>

                <p className="mt-2 text-[12px] leading-5 text-gray-300">
                  Select a temple where you want
                  your pooja to be performed.
                </p>
              </div>

              <div className="mr-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-yellow-500/40 bg-black/50">
                <MapPin
                  size={27}
                  className="text-yellow-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="mt-4 px-4">
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
                  className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-medium transition ${
                    active
                      ? "bg-yellow-400 text-black"
                      : "border border-white/10 bg-[#0b1118] text-gray-300"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        {/* RESULT TITLE */}
        <section className="px-4 pt-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[16px] font-semibold text-white">
              Temples in {selectedLocation}
            </h2>

            <span className="text-[10px] text-gray-500">
              {filteredTemples.length} temples
            </span>
          </div>
        </section>

        {/* TEMPLE LIST */}
        <section className="space-y-3 px-4 pt-3">
          {filteredTemples.length > 0 ? (
            filteredTemples.map((temple) => (
              <button
                key={temple.id}
                type="button"
                onClick={() =>
                  router.push(
                    `/offline-pooja/select-temple/${temple.id}`
                  )
                }
                className="group flex w-full items-center gap-3 rounded-2xl border border-white/5 bg-[#0b1118] p-2 text-left transition active:scale-[0.99]"
              >
                {/* IMAGE */}
                <div className="relative h-[100px] w-[96px] shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={temple.image}
                    alt={temple.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1 py-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="line-clamp-2 text-[14px] font-semibold leading-5 text-white">
                      {temple.name}
                    </h3>

                    <ChevronRight
                      size={20}
                      className="mt-1 shrink-0 text-yellow-400"
                    />
                  </div>

                  <p className="mt-1 text-[11px] text-gray-400">
                    {temple.city}, {temple.state}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[10px] text-gray-400">
                      <MapPin
                        size={11}
                        className="text-yellow-400"
                      />
                      {temple.distance}
                    </span>

                    <span className="flex items-center gap-1 text-[10px] text-yellow-400">
                      <Star
                        size={11}
                        fill="currentColor"
                      />
                      {temple.rating}
                    </span>

                    {temple.popular && (
                      <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[8px] text-green-400">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))
          ) : (
            <div className="rounded-2xl border border-yellow-500/15 bg-[#0b1118] px-5 py-10 text-center">
              <MapPin
                size={34}
                className="mx-auto text-yellow-400"
              />

              <h3 className="mt-3 text-sm font-semibold text-white">
                No temple found
              </h3>

              <p className="mt-1 text-[11px] text-gray-500">
                Try another location, category or search.
              </p>
            </div>
          )}
        </section>

        {/* REQUEST TEMPLE */}
        <section className="mt-5 px-4">
          <div className="rounded-2xl border border-yellow-500/20 bg-[#0b1118] p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-yellow-500/20 bg-black/30">
                <span className="text-2xl">🛕</span>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-yellow-400">
                  Can't find your temple?
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-gray-400">
                  Tell us your preferred temple,
                  we will try to arrange it for you.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-yellow-400 py-3 text-sm font-bold text-black"
            >
              Request Temple
            </button>
          </div>
        </section>

        {/* BOTTOM NAV */}
        <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[480px] -translate-x-1/2 border-t border-white/5 bg-[#080e14]/95 px-2 pb-2 pt-3 backdrop-blur-xl">
          <div className="grid grid-cols-5">
            <BottomItem
              label="Home"
              icon="⌂"
              active={false}
              onClick={() =>
                router.push("/offline-pooja")
              }
            />

            <BottomItem
              label="Categories"
              icon="▦"
              active={true}
              onClick={() =>
                router.push(
                  "/offline-pooja/select-temple"
                )
              }
            />

            <BottomItem
              label="Bookings"
              icon="▣"
              active={false}
              onClick={() =>
                router.push(
                  "/offline-pooja/bookings"
                )
              }
            />

            <BottomItem
              label="Wallet"
              icon="▤"
              active={false}
              onClick={() =>
                router.push("/wallet")
              }
            />

            <BottomItem
              label="Profile"
              icon="♙"
              active={false}
              onClick={() =>
                router.push("/profile")
              }
            />
          </div>
        </nav>
      </div>
    </main>
  );
}

interface BottomItemProps {
  label: string;
  icon: string;
  active: boolean;
  onClick: () => void;
}

function BottomItem({
  label,
  icon,
  active,
  onClick,
}: BottomItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-1"
    >
      <span
        className={`text-[21px] leading-none ${
          active
            ? "text-yellow-400"
            : "text-gray-400"
        }`}
      >
        {icon}
      </span>

      <span
        className={`text-[9px] ${
          active
            ? "font-semibold text-yellow-400"
            : "text-gray-400"
        }`}
      >
        {label}
      </span>
    </button>
  );
}