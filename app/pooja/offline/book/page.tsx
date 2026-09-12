
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Home,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";

import { allPoojas } from "@/data/pooja";

const temples = [
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar Temple",
    city: "Ujjain",
    distance: "3.2 KM",
    rating: "4.8",
    image: "/images/temples/mahakaleshwar.jpg",
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar Temple",
    city: "Ujjain",
    distance: "8.5 KM",
    rating: "4.7",
    image: "/images/temples/omkareshwar.jpg",
  },
  {
    id: "khajrana",
    name: "Khajrana Ganesh Temple",
    city: "Indore",
    distance: "5.1 KM",
    rating: "4.6",
    image: "/images/temples/khajrana.jpg",
  },
  {
    id: "annapurna",
    name: "Annapurna Temple",
    city: "Indore",
    distance: "6.8 KM",
    rating: "4.5",
    image: "/images/temples/annapurna.jpg",
  },
  {
    id: "kalika",
    name: "Kalika Mata Temple",
    city: "Ratlam",
    distance: "2.4 KM",
    rating: "4.7",
    image: "/images/temples/kalika.jpg",
  },
  {
    id: "gopal",
    name: "Gopal Mandir",
    city: "Ratlam",
    distance: "3.1 KM",
    rating: "4.6",
    image: "/images/temples/gopal.jpg",
  },
];

const locations = ["Ujjain", "Indore", "Ratlam"];

const timeSlots = [
  "08:00 AM",
  "10:00 AM",
  "12:00 PM",
  "04:00 PM",
  "06:00 PM",
];

function getDates() {
  const dates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();

    date.setDate(date.getDate() + i);

    dates.push({
      value: date.toISOString().split("T")[0],
      day: date.toLocaleDateString("en-IN", {
        weekday: "short",
      }),
      date: date.getDate(),
      month: date.toLocaleDateString("en-IN", {
        month: "short",
      }),
    });
  }

  return dates;
}

export default function OfflineBookingPage() {
  const router = useRouter();

  const dates = useMemo(() => getDates(), []);

  const [selectedPooja, setSelectedPooja] = useState(
    allPoojas[0]?.id || 0
  );

  const [selectedLocation, setSelectedLocation] =
    useState("Ujjain");

  const [selectedTemple, setSelectedTemple] =
    useState("mahakaleshwar");

  const [locationType, setLocationType] = useState<
    "temple" | "home"
  >("temple");

  const [selectedDate, setSelectedDate] = useState(
    dates[0]?.value || ""
  );

  const [selectedTime, setSelectedTime] = useState(
    timeSlots[0]
  );

  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Indore");
  const [pincode, setPincode] = useState("");

  const pooja = allPoojas.find(
    (item) => item.id === selectedPooja
  );

  const filteredTemples = temples.filter(
    (item) => item.city === selectedLocation
  );

  const temple = temples.find(
    (item) => item.id === selectedTemple
  );

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);

    const firstTemple = temples.find(
      (item) => item.city === location
    );

    if (firstTemple) {
      setSelectedTemple(firstTemple.id);
    }
  };

  const handleContinue = () => {
    if (!customerName.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!mobile.trim() || mobile.length !== 10) {
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    if (!pooja) {
      alert("Please select a pooja.");
      return;
    }

    if (!temple) {
      alert("Please select a temple.");
      return;
    }

    if (locationType === "home") {
      if (!address.trim()) {
        alert("Please enter your home address.");
        return;
      }

      if (!city.trim()) {
        alert("Please enter your city.");
        return;
      }

      if (!pincode.trim() || pincode.length !== 6) {
        alert("Please enter a valid 6 digit pincode.");
        return;
      }
    }

    const booking = {
      bookingType: "offline-pooja",

      poojaId: String(pooja.id),
      poojaName: pooja.name,
      poojaPrice: pooja.price,

      customerName: customerName.trim(),
      mobile: mobile.trim(),

      templeId: temple.id,
      templeName: temple.name,
      templeCity: temple.city,

      locationType,

      address:
        locationType === "home"
          ? address.trim()
          : "",

      city:
        locationType === "home"
          ? city.trim()
          : temple.city,

      pincode:
        locationType === "home"
          ? pincode.trim()
          : "",

      date: selectedDate,
      time: selectedTime,

      paymentStatus: "pending",
      bookingStatus: "pending",

      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "ourhub-offline-pooja-booking",
      JSON.stringify(booking)
    );

    router.push("/pooja/offline/book/summary");
  };

  const selectedDateObject = dates.find(
    (item) => item.value === selectedDate
  );

  return (
    <main className="min-h-screen bg-[#02060A] text-white">
      <div className="relative mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden pb-32">

        {/* Ambient Background */}
        <div className="pointer-events-none fixed inset-0 mx-auto max-w-[480px] overflow-hidden">
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#DFAE45]/7 blur-[100px]" />
          <div className="absolute -right-28 top-[420px] h-72 w-72 rounded-full bg-[#1E5B8F]/8 blur-[110px]" />
          <div className="absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#DFAE45]/5 blur-[100px]" />
        </div>

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050B11]/90 backdrop-blur-2xl">
          <div className="flex h-[68px] items-center gap-3 px-4">

            <button
              type="button"
              onClick={() =>
                router.push("/pooja/offline")
              }
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.035] transition active:scale-95"
            >
              <ArrowLeft
                size={18}
                className="text-white"
              />
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <Sparkles
                  size={11}
                  className="text-[#E7B94F]"
                />

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#E7B94F]">
                  OURHUB
                </p>
              </div>

              <h1 className="mt-0.5 text-[15px] font-bold">
                Book Offline Pooja
              </h1>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[#DFAE45]/15 bg-[#DFAE45]/5">
              <ShieldCheck
                size={19}
                className="text-[#E7B94F]"
              />
            </div>
          </div>
        </header>

        <div className="relative z-10 px-4">

          {/* PREMIUM INTRO */}
          <section className="pt-5">
            <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#101C29] to-[#070D14] p-4">

              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                  <Sparkles
                    size={20}
                    className="text-[#E7B94F]"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
                    Sacred Booking
                  </p>

                  <h2 className="mt-1 text-[16px] font-bold">
                    Plan Your Divine Ritual
                  </h2>

                  <p className="mt-1 text-[9px] text-gray-500">
                    Select your pooja, temple, date & preferred time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROGRESS */}
          <section className="pt-5">
            <div className="rounded-[24px] border border-white/[0.07] bg-[#08111B]/90 p-4">

              <div className="mb-3 flex items-center justify-between">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Booking Journey
                </p>

                <p className="text-[9px] font-bold text-[#E7B94F]">
                  1 of 4
                </p>
              </div>

              <div className="flex items-center">
                {[
                  ["01", "Pooja"],
                  ["02", "Temple"],
                  ["03", "Place"],
                  ["04", "Schedule"],
                ].map(([number, label], index) => (
                  <div
                    key={number}
                    className="flex flex-1 items-center"
                  >
                    <div className="text-center">
                      <div
                        className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full border text-[9px] font-bold ${
                          index === 0
                            ? "border-[#E7B94F] bg-[#E7B94F] text-black shadow-lg shadow-[#DFAE45]/10"
                            : "border-white/10 bg-[#111D29] text-gray-500"
                        }`}
                      >
                        {index === 0 ? (
                          <Check size={13} />
                        ) : (
                          number
                        )}
                      </div>

                      <p
                        className={`mt-1.5 text-[8px] font-medium ${
                          index === 0
                            ? "text-[#E7B94F]"
                            : "text-gray-500"
                        }`}
                      >
                        {label}
                      </p>
                    </div>

                    {index < 3 && (
                      <div
                        className={`mx-1 h-px flex-1 ${
                          index === 0
                            ? "bg-[#DFAE45]/40"
                            : "bg-white/[0.07]"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CUSTOMER DETAILS */}
          <section className="pt-7">
            <SectionTitle
              icon={<UserRound size={16} />}
              eyebrow="Personal Details"
              title="Your Details"
              description="Tell us who we should contact for this booking."
            />

            <div className="mt-4 space-y-3">
              <PremiumInput
                label="FULL NAME"
                placeholder="Enter your full name"
                value={customerName}
                onChange={setCustomerName}
              />

              <PremiumInput
                label="MOBILE NUMBER"
                placeholder="10 digit mobile number"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={mobile}
                onChange={(value) =>
                  setMobile(
                    value.replace(/\D/g, "")
                  )
                }
              />
            </div>
          </section>

          {/* POOJA */}
          <section className="pt-8">
            <SectionTitle
              icon={<Sparkles size={16} />}
              eyebrow="Choose Your Ritual"
              title="Select Pooja"
              description="Select the sacred ritual you wish to perform."
              right={
                <div className="flex items-center gap-1 text-[8px] text-gray-600">
                  <ChevronLeft size={11} />
                  Swipe
                  <ChevronRight size={11} />
                </div>
              }
            />

            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {allPoojas.map((item) => {
                const active =
                  selectedPooja === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setSelectedPooja(item.id)
                    }
                    className={`group relative min-w-[172px] overflow-hidden rounded-[23px] border p-3.5 text-left transition-all duration-300 active:scale-[0.97] ${
                      active
                        ? "border-[#DFAE45]/60 bg-[#DFAE45]/[0.07] shadow-[0_10px_35px_rgba(223,174,69,0.08)]"
                        : "border-white/[0.07] bg-[#08111A]"
                    }`}
                  >
                    {active && (
                      <div className="absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#E7B94F] text-black shadow-lg shadow-[#DFAE45]/20">
                        <Check size={12} strokeWidth={3} />
                      </div>
                    )}

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-[16px] border text-xl ${
                        active
                          ? "border-[#DFAE45]/25 bg-[#DFAE45]/10"
                          : "border-white/5 bg-[#111D29]"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div className="mt-3">
                      <h3 className="line-clamp-2 min-h-[34px] pr-5 text-[12px] font-bold leading-4">
                        {item.name}
                      </h3>

                      <p className="mt-1.5 line-clamp-2 min-h-[27px] text-[8.5px] leading-4 text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-2.5">
                      <span className="flex items-center gap-1 text-[8px] text-gray-500">
                        <Clock3 size={9} />
                        {item.duration}
                      </span>

                      <span className="text-[12px] font-bold text-[#E7B94F]">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                    </div>

                    {active && (
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#E7B94F] to-transparent" />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* LOCATION */}
          <section className="pt-8">
            <SectionTitle
              icon={<MapPin size={16} />}
              eyebrow="Service Area"
              title="Select Location"
              description="Choose the city where your pooja will be arranged."
            />

            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {locations.map((location) => {
                const active =
                  selectedLocation === location;

                return (
                  <button
                    key={location}
                    type="button"
                    onClick={() =>
                      handleLocationChange(location)
                    }
                    className={`relative overflow-hidden rounded-[17px] border py-3.5 text-center transition-all active:scale-[0.97] ${
                      active
                        ? "border-[#E7B94F]/60 bg-[#E7B94F] text-black shadow-lg shadow-[#DFAE45]/10"
                        : "border-white/[0.07] bg-[#08111A] text-gray-400"
                    }`}
                  >
                    <MapPin
                      size={13}
                      className="mx-auto mb-1"
                    />

                    <span className="text-[10px] font-bold">
                      {location}
                    </span>

                    {active && (
                      <div className="absolute right-1.5 top-1.5">
                        <Check size={9} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* TEMPLES */}
          <section className="pt-8">
            <SectionTitle
              icon={<Landmark size={16} />}
              eyebrow="Sacred Destination"
              title="Select Temple"
              description={`Verified temples available in ${selectedLocation}.`}
              right={
                <BadgeCheck
                  size={17}
                  className="text-[#E7B94F]"
                />
              }
            />

            {filteredTemples.length === 0 ? (
              <div className="mt-4 rounded-[22px] border border-white/[0.07] bg-[#08111A] p-6 text-center">
                <Landmark
                  size={27}
                  className="mx-auto text-gray-600"
                />

                <p className="mt-3 text-xs text-gray-500">
                  No temples available in this location.
                </p>
              </div>
            ) : (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {filteredTemples.map((item) => {
                  const active =
                    selectedTemple === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setSelectedTemple(item.id)
                      }
                      className={`group relative min-w-[205px] overflow-hidden rounded-[23px] border text-left transition-all duration-300 active:scale-[0.98] ${
                        active
                          ? "border-[#DFAE45]/60 shadow-[0_15px_40px_rgba(223,174,69,0.08)]"
                          : "border-white/[0.07]"
                      }`}
                    >
                      <div className="relative h-[118px] overflow-hidden bg-[#101A25]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="205px"
                          className={`object-cover transition duration-500 ${
                            active
                              ? "scale-105"
                              : "group-hover:scale-105"
                          }`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-2 py-1 backdrop-blur-md">
                          <BadgeCheck
                            size={10}
                            className="text-[#E7B94F]"
                          />

                          <span className="text-[7px] font-semibold text-white">
                            VERIFIED
                          </span>
                        </div>

                        {active && (
                          <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#E7B94F] text-black shadow-lg">
                            <Check
                              size={13}
                              strokeWidth={3}
                            />
                          </div>
                        )}

                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="flex items-center gap-1 text-[8px] text-gray-300">
                            <MapPin size={9} />
                            {item.city}
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#08111A] p-3.5">
                        <h3 className="truncate text-[11px] font-bold">
                          {item.name}
                        </h3>

                        <div className="mt-2.5 flex items-center justify-between">
                          <span className="flex items-center gap-1 text-[8px] text-gray-500">
                            <MapPin size={9} />
                            {item.distance}
                          </span>

                          <span className="flex items-center gap-1 text-[8px] font-semibold text-[#E7B94F]">
                            <Star
                              size={9}
                              fill="currentColor"
                            />
                            {item.rating}
                          </span>
                        </div>
                      </div>

                      {active && (
                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E7B94F] to-transparent" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </section>

          {/* LOCATION TYPE */}
          <section className="pt-8">
            <SectionTitle
              icon={<Home size={16} />}
              eyebrow="Ritual Location"
              title="Where should the pooja be performed?"
              description="Choose between temple ritual or a home visit."
            />

            <div className="mt-4 grid grid-cols-2 gap-3">
              <LocationTypeCard
                active={locationType === "temple"}
                icon={<Landmark size={21} />}
                title="At Temple"
                description="Pandit performs the pooja at your selected temple."
                onClick={() =>
                  setLocationType("temple")
                }
              />

              <LocationTypeCard
                active={locationType === "home"}
                icon={<Home size={21} />}
                title="At My Home"
                description="A verified pandit visits your home for the ritual."
                onClick={() =>
                  setLocationType("home")
                }
              />
            </div>
          </section>

          {/* HOME ADDRESS */}
          {locationType === "home" && (
            <section className="pt-4">
              <div className="relative overflow-hidden rounded-[24px] border border-[#DFAE45]/15 bg-[#08111A] p-4">

                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#DFAE45]/8 blur-3xl" />

                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[#DFAE45]/20 bg-[#DFAE45]/8">
                    <Home
                      size={18}
                      className="text-[#E7B94F]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-bold">
                      Home Visit Details
                    </h3>

                    <p className="mt-0.5 text-[8px] text-gray-500">
                      Where should our pandit arrive?
                    </p>
                  </div>
                </div>

                <textarea
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                  placeholder="House / Flat / Street / Area"
                  rows={3}
                  className="relative mt-4 w-full resize-none rounded-[15px] border border-white/[0.07] bg-[#050B11] p-3.5 text-[11px] text-white outline-none transition placeholder:text-gray-600 focus:border-[#DFAE45]/40"
                />

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                    className="h-12 rounded-[15px] border border-white/[0.07] bg-[#050B11] px-3.5 text-[11px] outline-none placeholder:text-gray-600 focus:border-[#DFAE45]/40"
                  />

                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) =>
                      setPincode(
                        e.target.value.replace(
                          /\D/g,
                          ""
                        )
                      )
                    }
                    className="h-12 rounded-[15px] border border-white/[0.07] bg-[#050B11] px-3.5 text-[11px] outline-none placeholder:text-gray-600 focus:border-[#DFAE45]/40"
                  />
                </div>
              </div>
            </section>
          )}

          {/* DATE */}
          <section className="pt-8">
            <SectionTitle
              icon={<CalendarDays size={16} />}
              eyebrow="Choose Your Day"
              title="Select Date"
              description="Choose a convenient date for your ritual."
            />

            <div className="mt-4 flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {dates.map((item, index) => {
                const active =
                  selectedDate === item.value;

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() =>
                      setSelectedDate(item.value)
                    }
                    className={`relative min-w-[66px] overflow-hidden rounded-[18px] border px-2 py-3 text-center transition-all active:scale-[0.96] ${
                      active
                        ? "border-[#E7B94F]/70 bg-[#E7B94F] text-black shadow-lg shadow-[#DFAE45]/10"
                        : "border-white/[0.07] bg-[#08111A] text-gray-400"
                    }`}
                  >
                    {index === 0 && (
                      <span
                        className={`text-[7px] font-bold uppercase tracking-wider ${
                          active
                            ? "text-black/60"
                            : "text-[#E7B94F]"
                        }`}
                      >
                        Today
                      </span>
                    )}

                    {index !== 0 && (
                      <span className="block h-[10px]" />
                    )}

                    <p className="mt-1 text-[8px] font-semibold uppercase">
                      {item.day}
                    </p>

                    <p className="mt-0.5 text-[20px] font-bold">
                      {item.date}
                    </p>

                    <p className="text-[8px]">
                      {item.month}
                    </p>

                    {active && (
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-black/30" />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* TIME */}
          <section className="pt-8">
            <SectionTitle
              icon={<Clock3 size={16} />}
              eyebrow="Auspicious Schedule"
              title="Select Time"
              description="Choose your preferred available time slot."
            />

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {timeSlots.map((time) => {
                const active =
                  selectedTime === time;

                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() =>
                      setSelectedTime(time)
                    }
                    className={`flex items-center justify-center gap-2 rounded-[16px] border py-3.5 text-[10px] font-semibold transition-all active:scale-[0.97] ${
                      active
                        ? "border-[#E7B94F] bg-[#E7B94F] text-black shadow-lg shadow-[#DFAE45]/10"
                        : "border-white/[0.07] bg-[#08111A] text-gray-300"
                    }`}
                  >
                    <Clock3 size={12} />
                    {time}

                    {active && (
                      <Check
                        size={12}
                        strokeWidth={3}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* BOOKING PREVIEW */}
          <section className="pt-8">
            <div className="relative overflow-hidden rounded-[25px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#101C28] to-[#070D14] p-4">

              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#DFAE45]/8 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
                    Booking Preview
                  </p>

                  <h3 className="mt-1 text-[14px] font-bold">
                    Your Sacred Plan
                  </h3>
                </div>

                <Sparkles
                  size={18}
                  className="text-[#E7B94F]"
                />
              </div>

              <div className="relative mt-4 space-y-2">
                <PreviewRow
                  label="Pooja"
                  value={pooja?.name || "Select pooja"}
                />

                <PreviewRow
                  label="Temple"
                  value={temple?.name || "Select temple"}
                />

                <PreviewRow
                  label="Date"
                  value={
                    selectedDateObject
                      ? `${selectedDateObject.day}, ${selectedDateObject.date} ${selectedDateObject.month}`
                      : "Select date"
                  }
                />

                <PreviewRow
                  label="Time"
                  value={selectedTime}
                />

                <PreviewRow
                  label="Place"
                  value={
                    locationType === "home"
                      ? "Home Visit"
                      : "Temple"
                  }
                />
              </div>
            </div>
          </section>

          {/* TRUST */}
          <section className="pt-6">
            <div className="rounded-[23px] border border-green-500/10 bg-green-500/[0.045] p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-green-400/15 bg-green-400/8">
                  <ShieldCheck
                    size={19}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[11px] font-bold text-green-400">
                      Verified Offline Service
                    </p>

                    <BadgeCheck
                      size={13}
                      className="text-green-400"
                    />
                  </div>

                  <p className="mt-1.5 text-[9px] leading-4 text-gray-500">
                    OurHub works with verified pandits,
                    selected temples and trusted service partners.
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-green-400/10 pt-3">
                <TrustMini text="Verified Pandits" />
                <TrustMini text="Transparent Pricing" />
                <TrustMini text="Trusted Support" />
              </div>
            </div>
          </section>

          {/* DESKTOP/FLOW CTA */}
          <section className="pt-6 pb-8">
            <button
              type="button"
              onClick={handleContinue}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-[19px] bg-gradient-to-r from-[#DFAE45] via-[#F3C75F] to-[#DFAE45] px-5 py-4 text-[12px] font-bold text-black shadow-[0_15px_40px_rgba(223,174,69,0.14)] transition active:scale-[0.98]"
            >
              <span className="relative z-10">
                Continue to Booking Summary
              </span>

              <ArrowRight
                size={17}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />

              <div className="absolute inset-y-0 -left-20 w-20 skew-x-[-20deg] bg-white/25 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </button>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-[8px] text-gray-600">
              <ShieldCheck size={10} />
              Review your details before proceeding to payment.
            </p>
          </section>
        </div>

        {/* STICKY BOTTOM CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-[480px] border-t border-white/[0.06] bg-[#04090E]/90 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-2xl">
          <div className="flex items-center gap-3">

            <div className="min-w-0 flex-1">
              <p className="truncate text-[8px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                Selected Pooja
              </p>

              <p className="mt-0.5 truncate text-[11px] font-bold text-white">
                {pooja?.name || "Select a pooja"}
              </p>

              <p className="mt-0.5 text-[9px] text-[#E7B94F]">
                {pooja
                  ? `₹${pooja.price.toLocaleString("en-IN")}`
                  : "Choose your ritual"}
              </p>
            </div>

            <button
              type="button"
              onClick={handleContinue}
              className="flex h-12 shrink-0 items-center gap-2 rounded-[16px] bg-[#E7B94F] px-5 text-[11px] font-bold text-black shadow-lg shadow-[#DFAE45]/10 transition active:scale-95"
            >
              Continue
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ------------------------------------------------ */
/* SECTION TITLE */
/* ------------------------------------------------ */

function SectionTitle({
  icon,
  eyebrow,
  title,
  description,
  right,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex min-w-0 items-start gap-2.5">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[11px] border border-[#DFAE45]/20 bg-[#DFAE45]/8 text-[#E7B94F]">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
            {eyebrow}
          </p>

          <h2 className="mt-1 text-[16px] font-bold tracking-tight text-white">
            {title}
          </h2>

          <p className="mt-1 text-[9px] leading-4 text-gray-500">
            {description}
          </p>
        </div>
      </div>

      {right}
    </div>
  );
}

/* ------------------------------------------------ */
/* PREMIUM INPUT */
/* ------------------------------------------------ */

function PremiumInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  inputMode,
  maxLength,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  inputMode?: "text" | "numeric" | "tel" | "email" | "decimal" | "search" | "url";
  maxLength?: number;
}) {
  return (
    <div className="relative">
      <label className="mb-1.5 block pl-1 text-[7px] font-bold tracking-[0.16em] text-gray-600">
        {label}
      </label>

      <input
        type={type}
        inputMode={inputMode}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="h-13 w-full rounded-[16px] border border-white/[0.07] bg-[#08111A] px-4 text-[11px] text-white outline-none transition placeholder:text-gray-600 focus:border-[#DFAE45]/40 focus:bg-[#0A141F]"
      />
    </div>
  );
}

/* ------------------------------------------------ */
/* LOCATION TYPE CARD */
/* ------------------------------------------------ */

function LocationTypeCard({
  active,
  icon,
  title,
  description,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative overflow-hidden rounded-[22px] border p-4 text-left transition-all duration-300 active:scale-[0.97] ${
        active
          ? "border-[#DFAE45]/55 bg-[#DFAE45]/[0.07]"
          : "border-white/[0.07] bg-[#08111A]"
      }`}
    >
      {active && (
        <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#E7B94F] text-black">
          <Check size={12} strokeWidth={3} />
        </div>
      )}

      <div
        className={`flex h-11 w-11 items-center justify-center rounded-[14px] border ${
          active
            ? "border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[#E7B94F]"
            : "border-white/5 bg-[#111D29] text-gray-400"
        }`}
      >
        {icon}
      </div>

      <h3 className="mt-3 text-[11px] font-bold">
        {title}
      </h3>

      <p className="mt-1.5 text-[8.5px] leading-4 text-gray-500">
        {description}
      </p>

      {active && (
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#E7B94F] to-transparent" />
      )}
    </button>
  );
}

/* ------------------------------------------------ */
/* PREVIEW ROW */
/* ------------------------------------------------ */

function PreviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[13px] border border-white/[0.05] bg-white/[0.025] px-3 py-2.5">
      <span className="text-[8px] text-gray-500">
        {label}
      </span>

      <span className="max-w-[62%] truncate text-right text-[9px] font-semibold text-gray-200">
        {value}
      </span>
    </div>
  );
}

/* ------------------------------------------------ */
/* TRUST MINI */
/* ------------------------------------------------ */

function TrustMini({
  text,
}: {
  text: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-green-400/10">
        <Check
          size={10}
          className="text-green-400"
          strokeWidth={3}
        />
      </div>

      <p className="mt-1 text-[7px] leading-3 text-gray-500">
        {text}
      </p>
    </div>
  );
}
