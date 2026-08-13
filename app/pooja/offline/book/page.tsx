"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Home,
  MapPin,
  ShieldCheck,
  Star,
  UserRound,
  ChevronLeft,
  ChevronRight,
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

  const [selectedTemple, setSelectedTemple] = useState(
    "mahakaleshwar"
  );

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

  return (
    <main className="min-h-screen bg-[#03070b] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden pb-10">

        {/* HEADER */}

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111d]/95 backdrop-blur-xl">
          <div className="flex h-16 items-center gap-3 px-4">

            <button
              type="button"
              onClick={() =>
                router.push("/pooja/offline")
              }
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
            >
              <ArrowLeft size={19} />
            </button>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold">
                Book Offline Pooja
              </p>

              <p className="text-[10px] text-gray-500">
                OurHub Services
              </p>
            </div>

            <ShieldCheck
              size={21}
              className="text-yellow-400"
            />

          </div>
        </header>

        <div className="px-4">

          {/* PROGRESS */}

          <section className="pt-5">
            <div className="rounded-2xl border border-yellow-500/10 bg-[#0b1118] p-4">

              <div className="flex items-center justify-between">

                {[
                  ["01", "Pooja"],
                  ["02", "Temple"],
                  ["03", "Location"],
                  ["04", "Schedule"],
                ].map(([number, label], index) => (

                  <div
                    key={number}
                    className="flex items-center"
                  >

                    <div className="text-center">

                      <div
                        className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ${
                          index === 0
                            ? "bg-yellow-400 text-black"
                            : "bg-[#162335] text-gray-500"
                        }`}
                      >
                        {number}
                      </div>

                      <p
                        className={`mt-1 text-[8px] ${
                          index === 0
                            ? "text-yellow-400"
                            : "text-gray-500"
                        }`}
                      >
                        {label}
                      </p>

                    </div>

                    {index < 3 && (
                      <div className="mx-1 h-px w-5 bg-white/10" />
                    )}

                  </div>

                ))}

              </div>

            </div>
          </section>

          {/* CUSTOMER */}

          <section className="pt-6">

            <div className="mb-3 flex items-center gap-2">

              <UserRound
                size={17}
                className="text-yellow-400"
              />

              <h2 className="text-base font-bold">
                Your Details
              </h2>

            </div>

            <div className="space-y-3">

              <input
                type="text"
                placeholder="Your full name"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(e.target.value)
                }
                className="h-12 w-full rounded-xl border border-white/10 bg-[#0b1118] px-4 text-sm outline-none placeholder:text-gray-600 focus:border-yellow-500/40"
              />

              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Mobile number"
                value={mobile}
                onChange={(e) =>
                  setMobile(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                className="h-12 w-full rounded-xl border border-white/10 bg-[#0b1118] px-4 text-sm outline-none placeholder:text-gray-600 focus:border-yellow-500/40"
              />

            </div>
          </section>

          {/* POOJA */}

          <section className="pt-7">

            <div className="mb-3 flex items-end justify-between">

              <div>

                <h2 className="text-base font-bold">
                  Select Pooja
                </h2>

                <p className="mt-1 text-[10px] text-gray-500">
                  Choose your preferred pooja
                </p>

              </div>

              <div className="flex items-center gap-1 text-[9px] text-gray-500">
                <ChevronLeft size={12} />
                Swipe
                <ChevronRight size={12} />
              </div>

            </div>

            <div className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

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
                    className={`relative w-[140px] min-w-[140px] rounded-2xl border p-3 text-left transition active:scale-[0.97] ${
                      active
                        ? "border-yellow-400/70 bg-yellow-400/[0.08]"
                        : "border-white/10 bg-[#0b1118]"
                    }`}
                  >

                    {active && (
                      <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-black">
                        <Check size={11} />
                      </div>
                    )}

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#162335] text-xl">
                      {item.icon}
                    </div>

                    <h3 className="mt-3 line-clamp-2 min-h-[32px] pr-2 text-[11px] font-bold leading-4">
                      {item.name}
                    </h3>

                    <p className="mt-1 line-clamp-2 min-h-[25px] text-[8px] leading-3 text-gray-500">
                      {item.description}
                    </p>

                    <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2">

                      <span className="flex items-center gap-1 text-[8px] text-gray-500">
                        <Clock3 size={9} />
                        {item.duration}
                      </span>

                      <span className="text-[11px] font-bold text-yellow-400">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>

                    </div>

                  </button>

                );
              })}

            </div>

          </section>

          {/* LOCATION */}

          <section className="pt-7">

            <div className="mb-3">

              <h2 className="text-base font-bold">
                Select Location
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Choose your city
              </p>

            </div>

            <div className="grid grid-cols-3 gap-2">

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
                    className={`rounded-xl border py-3 text-xs font-bold ${
                      active
                        ? "border-yellow-400 bg-yellow-400 text-black"
                        : "border-white/10 bg-[#0b1118] text-gray-400"
                    }`}
                  >
                    {location}
                  </button>

                );
              })}

            </div>

          </section>

          {/* TEMPLES */}

          <section className="pt-6">

            <div className="mb-3 flex items-center justify-between">

              <div>

                <h2 className="text-base font-bold">
                  Select Temple
                </h2>

                <p className="mt-1 text-[10px] text-gray-500">
                  Temples in {selectedLocation}
                </p>

              </div>

              <MapPin
                size={18}
                className="text-yellow-400"
              />

            </div>

            {filteredTemples.length === 0 ? (

              <div className="rounded-2xl border border-white/10 bg-[#0b1118] p-5 text-center">

                <MapPin
                  size={25}
                  className="mx-auto text-gray-600"
                />

                <p className="mt-2 text-xs text-gray-500">
                  No temples available in this location.
                </p>

              </div>

            ) : (

              <div className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

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
                      className={`relative w-[180px] min-w-[180px] overflow-hidden rounded-2xl border text-left ${
                        active
                          ? "border-yellow-400/60"
                          : "border-white/10"
                      }`}
                    >

                      <div className="relative h-24 w-full bg-[#162335]">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display =
                              "none";
                          }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                        {active && (
                          <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-black">
                            <Check size={13} />
                          </div>
                        )}

                        <div className="absolute bottom-2 left-3">

                          <p className="text-[9px] text-gray-300">
                            {item.city}
                          </p>

                        </div>

                      </div>

                      <div className="bg-[#0b1118] p-3">

                        <h3 className="truncate text-xs font-bold">
                          {item.name}
                        </h3>

                        <div className="mt-2 flex items-center justify-between">

                          <span className="flex items-center gap-1 text-[9px] text-gray-500">
                            <MapPin size={10} />
                            {item.distance}
                          </span>

                          <span className="flex items-center gap-1 text-[9px] text-yellow-400">
                            <Star
                              size={10}
                              fill="currentColor"
                            />
                            {item.rating}
                          </span>

                        </div>

                      </div>

                    </button>

                  );
                })}

              </div>

            )}

          </section>

          {/* LOCATION TYPE */}

          <section className="pt-7">

            <h2 className="text-base font-bold">
              Where should the pooja be performed?
            </h2>

            <p className="mt-1 text-[10px] text-gray-500">
              Choose temple or home visit
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={() =>
                  setLocationType("temple")
                }
                className={`rounded-2xl border p-4 text-left ${
                  locationType === "temple"
                    ? "border-yellow-400/60 bg-yellow-400/5"
                    : "border-white/10 bg-[#0b1118]"
                }`}
              >

                <MapPin
                  size={20}
                  className="text-yellow-400"
                />

                <h3 className="mt-3 text-xs font-bold">
                  At Temple
                </h3>

                <p className="mt-1 text-[8px] leading-4 text-gray-500">
                  Pandit performs pooja at selected temple.
                </p>

              </button>

              <button
                type="button"
                onClick={() =>
                  setLocationType("home")
                }
                className={`rounded-2xl border p-4 text-left ${
                  locationType === "home"
                    ? "border-yellow-400/60 bg-yellow-400/5"
                    : "border-white/10 bg-[#0b1118]"
                }`}
              >

                <Home
                  size={20}
                  className="text-yellow-400"
                />

                <h3 className="mt-3 text-xs font-bold">
                  At My Home
                </h3>

                <p className="mt-1 text-[8px] leading-4 text-gray-500">
                  Verified Pandit visits your home.
                </p>

              </button>

            </div>

          </section>

          {/* HOME ADDRESS */}

          {locationType === "home" && (

            <section className="pt-4">

              <div className="rounded-2xl border border-yellow-500/10 bg-[#0b1118] p-4">

                <h3 className="text-sm font-bold">
                  Home Visit Details
                </h3>

                <textarea
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                  placeholder="House / Flat / Street / Area"
                  rows={3}
                  className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-[#07111d] p-3 text-xs outline-none placeholder:text-gray-600"
                />

                <div className="mt-3 grid grid-cols-2 gap-3">

                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                    className="h-11 rounded-xl border border-white/10 bg-[#07111d] px-3 text-xs outline-none"
                  />

                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) =>
                      setPincode(
                        e.target.value.replace(/\D/g, "")
                      )
                    }
                    className="h-11 rounded-xl border border-white/10 bg-[#07111d] px-3 text-xs outline-none"
                  />

                </div>

              </div>

            </section>

          )}

          {/* DATE */}

          <section className="pt-7">

            <h2 className="text-base font-bold">
              Select Date
            </h2>

            <p className="mt-1 text-[10px] text-gray-500">
              Choose a convenient date
            </p>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              {dates.map((item) => {

                const active =
                  selectedDate === item.value;

                return (

                  <button
                    key={item.value}
                    type="button"
                    onClick={() =>
                      setSelectedDate(item.value)
                    }
                    className={`min-w-[62px] rounded-xl border px-2 py-3 text-center ${
                      active
                        ? "border-yellow-400 bg-yellow-400 text-black"
                        : "border-white/10 bg-[#0b1118]"
                    }`}
                  >

                    <p className="text-[9px]">
                      {item.day}
                    </p>

                    <p className="mt-1 text-lg font-bold">
                      {item.date}
                    </p>

                    <p className="text-[9px]">
                      {item.month}
                    </p>

                  </button>

                );
              })}

            </div>

          </section>

          {/* TIME */}

          <section className="pt-6">

            <div className="mb-3 flex items-center gap-2">

              <Clock3
                size={17}
                className="text-yellow-400"
              />

              <h2 className="text-base font-bold">
                Select Time
              </h2>

            </div>

            <div className="grid grid-cols-2 gap-3">

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
                    className={`rounded-xl border py-3 text-xs font-semibold ${
                      active
                        ? "border-yellow-400 bg-yellow-400 text-black"
                        : "border-white/10 bg-[#0b1118] text-gray-300"
                    }`}
                  >
                    {time}
                  </button>

                );
              })}

            </div>

          </section>

          {/* TRUST */}

          <section className="pt-6">

            <div className="flex items-center gap-3 rounded-2xl border border-green-500/10 bg-green-500/5 p-4">

              <ShieldCheck
                size={20}
                className="shrink-0 text-green-400"
              />

              <div>

                <p className="text-xs font-semibold text-green-400">
                  Verified Offline Service
                </p>

                <p className="mt-1 text-[9px] leading-4 text-gray-500">
                  OurHub works with verified pandits and
                  selected temples.
                </p>

              </div>

            </div>

          </section>

          {/* CONTINUE */}

          <section className="pt-6 pb-8">

            <button
              type="button"
              onClick={handleContinue}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-4 text-sm font-bold text-black shadow-xl shadow-yellow-500/10 active:scale-[0.98]"
            >
              Continue to Booking Summary
              <ArrowRight size={18} />
            </button>

            <p className="mt-3 text-center text-[9px] text-gray-600">
              Review all booking details before payment.
            </p>

          </section>

        </div>
      </div>
    </main>
  );
}