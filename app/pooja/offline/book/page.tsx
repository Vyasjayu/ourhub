
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
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";

import { allPoojas } from "@/data/pooja";
import { useLanguage } from "@/context/LanguageContext";

/* ============================================================
   DATA
============================================================ */

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

const locationHindiNames: Record<string, string> = {
  Ujjain: "उज्जैन",
  Indore: "इंदौर",
  Ratlam: "रतलाम",
};

const templeHindiNames: Record<string, string> = {
  "Mahakaleshwar Temple": "महाकालेश्वर मंदिर",
  "Omkareshwar Temple": "ओंकारेश्वर मंदिर",
  "Khajrana Ganesh Temple": "खजराना गणेश मंदिर",
  "Annapurna Temple": "अन्नपूर्णा मंदिर",
  "Kalika Mata Temple": "कालिका माता मंदिर",
  "Gopal Mandir": "गोपाल मंदिर",
};

const timeSlots = [
  "08:00 AM",
  "10:00 AM",
  "12:00 PM",
  "04:00 PM",
  "06:00 PM",
];

/* ============================================================
   DATE HELPERS
============================================================ */

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

/* ============================================================
   OFFLINE BOOKING PAGE
============================================================ */

export default function OfflineBookingPage() {
  const router = useRouter();

  const { language } = useLanguage();

  const isHindi = language === "hi";

  const dates = useMemo(() => getDates(), []);

  const [selectedPooja, setSelectedPooja] = useState(
    allPoojas[0]?.id || 0,
  );

  const [selectedLocation, setSelectedLocation] =
    useState("Ujjain");

  const [selectedTemple, setSelectedTemple] = useState(
    "mahakaleshwar",
  );

  const [locationType, setLocationType] = useState<
    "temple" | "home"
  >("temple");

  const [selectedDate, setSelectedDate] = useState(
    dates[0]?.value || "",
  );

  const [selectedTime, setSelectedTime] = useState(
    timeSlots[0],
  );

  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Indore");
  const [pincode, setPincode] = useState("");

  /* ==========================================================
     HELPERS
  ========================================================== */

  const getLocationName = (location: string) =>
    isHindi
      ? locationHindiNames[location] ?? location
      : location;

  const getTempleName = (name: string) =>
    isHindi
      ? templeHindiNames[name] ?? name
      : name;

  const getDayName = (day: string) => {
    if (!isHindi) return day;

    const map: Record<string, string> = {
      Sun: "रवि",
      Mon: "सोम",
      Tue: "मंगल",
      Wed: "बुध",
      Thu: "गुरु",
      Fri: "शुक्र",
      Sat: "शनि",
    };

    return map[day] ?? day;
  };

  const getMonthName = (month: string) => {
    if (!isHindi) return month;

    const map: Record<string, string> = {
      Jan: "जन",
      Feb: "फर",
      Mar: "मार्च",
      Apr: "अप्रैल",
      May: "मई",
      Jun: "जून",
      Jul: "जुल",
      Aug: "अग",
      Sep: "सित",
      Oct: "अक्टू",
      Nov: "नव",
      Dec: "दिस",
    };

    return map[month] ?? month;
  };

  const getPoojaName = (name: string) => {
    if (!isHindi) return name;

    const map: Record<string, string> = {
      "Ganesh Pooja": "गणेश पूजा",
      "Lakshmi Pooja": "लक्ष्मी पूजा",
      "Saraswati Pooja": "सरस्वती पूजा",
      "Rudrabhishek": "रुद्राभिषेक",
      "Satyanarayan Pooja": "सत्यनारायण पूजा",
      "Navgraha Pooja": "नवग्रह पूजा",
      "Maha Mrityunjaya Jaap": "महामृत्युंजय जाप",
      "Durga Pooja": "दुर्गा पूजा",
      "Hanuman Pooja": "हनुमान पूजा",
      "Shiv Pooja": "शिव पूजा",
    };

    return map[name] ?? name;
  };

  /* ==========================================================
     DERIVED DATA
  ========================================================== */

  const pooja = allPoojas.find(
    (item) => item.id === selectedPooja,
  );

  const filteredTemples = temples.filter(
    (item) => item.city === selectedLocation,
  );

  const temple = temples.find(
    (item) => item.id === selectedTemple,
  );

  const selectedDateObject = dates.find(
    (item) => item.value === selectedDate,
  );

  /* ==========================================================
     LOCATION CHANGE
  ========================================================== */

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);

    const firstTemple = temples.find(
      (item) => item.city === location,
    );

    if (firstTemple) {
      setSelectedTemple(firstTemple.id);
    }
  };

  /* ==========================================================
     VALIDATION
  ========================================================== */

  const validateForm = () => {
    if (!customerName.trim()) {
      alert(
        isHindi
          ? "कृपया अपना नाम दर्ज करें।"
          : "Please enter your name.",
      );
      return false;
    }

    if (!mobile.trim() || mobile.length !== 10) {
      alert(
        isHindi
          ? "कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।"
          : "Please enter a valid 10 digit mobile number.",
      );
      return false;
    }

    if (!pooja) {
      alert(
        isHindi
          ? "कृपया पूजा चुनें।"
          : "Please select a pooja.",
      );
      return false;
    }

    if (locationType === "temple" && !temple) {
      alert(
        isHindi
          ? "कृपया मंदिर चुनें।"
          : "Please select a temple.",
      );
      return false;
    }

    if (locationType === "home") {
      if (!address.trim()) {
        alert(
          isHindi
            ? "कृपया अपने घर का पता दर्ज करें।"
            : "Please enter your home address.",
        );
        return false;
      }

      if (!city.trim()) {
        alert(
          isHindi
            ? "कृपया अपना शहर दर्ज करें।"
            : "Please enter your city.",
        );
        return false;
      }

      if (!pincode.trim() || pincode.length !== 6) {
        alert(
          isHindi
            ? "कृपया 6 अंकों का सही पिनकोड दर्ज करें।"
            : "Please enter a valid 6 digit pincode.",
        );
        return false;
      }
    }

    if (!selectedDate) {
      alert(
        isHindi
          ? "कृपया तारीख चुनें।"
          : "Please select a date.",
      );
      return false;
    }

    if (!selectedTime) {
      alert(
        isHindi
          ? "कृपया समय चुनें।"
          : "Please select a time.",
      );
      return false;
    }

    return true;
  };

  /* ==========================================================
     REQUEST PRICE
  ========================================================== */

  const handleRequestPrice = () => {
    if (!validateForm()) {
      return;
    }

    if (!pooja) {
      return;
    }

    const locationDetails =
      locationType === "temple"
        ? `Temple: ${temple?.name || "Not selected"}
City: ${temple?.city || selectedLocation}`
        : `Location Type: Home Visit
Address: ${address.trim()}
City: ${city.trim()}
Pincode: ${pincode.trim()}`;

    const formattedDate = selectedDateObject
      ? `${selectedDateObject.day}, ${selectedDateObject.date} ${selectedDateObject.month}`
      : selectedDate;

    const message = `Namaste OurHub 🙏

I would like to request the price for an Offline Pooja.

🪔 Pooja: ${pooja.name}

💰 Starting From: ₹${pooja.price.toLocaleString("en-IN")}

👤 Customer Name: ${customerName.trim()}
📱 Mobile: ${mobile.trim()}

📍 ${locationDetails}

📅 Preferred Date: ${formattedDate}
⏰ Preferred Time: ${selectedTime}

Please share the final price based on samagri, location and my requirements.

Thank you.
OurHub Services`;

    const whatsappUrl = `https://wa.me/918878632431?text=${encodeURIComponent(
      message,
    )}`;

    const booking = {
      bookingType: "offline-pooja-price-request",

      poojaId: String(pooja.id),
      poojaName: pooja.name,

      startingPrice: pooja.price,

      customerName: customerName.trim(),
      mobile: mobile.trim(),

      locationType,

      templeId:
        locationType === "temple"
          ? temple?.id || ""
          : "",

      templeName:
        locationType === "temple"
          ? temple?.name || ""
          : "",

      templeCity:
        locationType === "temple"
          ? temple?.city || selectedLocation
          : "",

      address:
        locationType === "home"
          ? address.trim()
          : "",

      city:
        locationType === "home"
          ? city.trim()
          : temple?.city || selectedLocation,

      pincode:
        locationType === "home"
          ? pincode.trim()
          : "",

      date: selectedDate,
      time: selectedTime,

      requestStatus: "price-requested",

      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "ourhub-offline-pooja-price-request",
      JSON.stringify(booking),
    );

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  /* ==========================================================
     UI
  ========================================================== */

  return (
    <main className="min-h-screen bg-[#02060A] text-white">
      <div className="relative mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden pb-32">

        {/* AMBIENT BACKGROUND */}

        <div className="pointer-events-none fixed inset-0 mx-auto max-w-[480px] overflow-hidden">
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#DFAE45]/7 blur-[100px]" />

          <div className="absolute -right-28 top-[420px] h-72 w-72 rounded-full bg-[#1E5B8F]/8 blur-[110px]" />

          <div className="absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#DFAE45]/5 blur-[100px]" />
        </div>

        {/* HEADER */}

        <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050B11]/95 backdrop-blur-2xl">
          <div className="flex h-[68px] items-center gap-3 px-4">

            <button
              type="button"
              onClick={() => router.push("/pooja/offline")}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.05] transition active:scale-95"
              aria-label={
                isHindi ? "वापस जाएं" : "Go back"
              }
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

              <h1 className="mt-0.5 text-[15px] font-bold text-white">
                {isHindi
                  ? "ऑफलाइन पूजा मूल्य अनुरोध"
                  : "Request Offline Pooja Price"}
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

          {/* INTRO */}

          <section className="pt-5">
            <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#101C29] to-[#070D14] p-4">

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
                    {isHindi
                      ? "पवित्र बुकिंग"
                      : "Sacred Booking"}
                  </p>

                  <h2 className="mt-1 text-[16px] font-bold text-white">
                    {isHindi
                      ? "अपनी पूजा का मूल्य अनुरोध करें"
                      : "Request Your Pooja Price"}
                  </h2>

                  <p className="mt-1 text-[9px] leading-4 text-gray-300">
                    {isHindi
                      ? "अपनी पूजा, स्थान, तारीख और पसंदीदा समय चुनें। हम WhatsApp पर अंतिम मूल्य साझा करेंगे।"
                      : "Select your pooja, location, date and preferred time. We will share the final price with you on WhatsApp."}
                  </p>
                </div>
              </div>

              <div className="relative mt-4 flex items-start gap-2 rounded-[15px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.06] p-3">

                <Sparkles
                  size={13}
                  className="mt-0.5 shrink-0 text-[#E7B94F]"
                />

                <p className="text-[8px] leading-4 text-gray-300">
                  {isHindi
                    ? "शुरुआती मूल्य केवल अनुमानित है। अंतिम मूल्य "
                    : "Starting price is indicative. Final price depends on "}
                  <span className="font-semibold text-white">
                    {isHindi
                      ? "सामग्री, स्थान और आवश्यकताओं पर निर्भर करेगा।"
                      : "samagri, location and requirements."}
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* PROGRESS */}

          <section className="pt-5">
            <div className="rounded-[24px] border border-white/[0.09] bg-[#08111B]/95 p-4">

              <div className="mb-3 flex items-center justify-between">

                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-300">
                  {isHindi
                    ? "अनुरोध प्रक्रिया"
                    : "Request Journey"}
                </p>

                <p className="text-[9px] font-bold text-[#E7B94F]">
                  {isHindi ? "1 में से 4" : "1 of 4"}
                </p>
              </div>

              <div className="flex items-center">

                {[
                  [
                    "01",
                    isHindi ? "पूजा" : "Pooja",
                  ],
                  [
                    "02",
                    isHindi ? "मंदिर" : "Temple",
                  ],
                  [
                    "03",
                    isHindi ? "स्थान" : "Place",
                  ],
                  [
                    "04",
                    isHindi ? "समय" : "Schedule",
                  ],
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
                            : "border-white/15 bg-[#111D29] text-gray-300"
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
                            : "text-gray-300"
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
                            : "bg-white/[0.12]"
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
              eyebrow={
                isHindi
                  ? "व्यक्तिगत जानकारी"
                  : "Personal Details"
              }
              title={
                isHindi
                  ? "आपकी जानकारी"
                  : "Your Details"
              }
              description={
                isHindi
                  ? "मूल्य अनुरोध के लिए हमसे किससे संपर्क करना है, यह बताएं।"
                  : "Tell us who we should contact for this price request."
              }
              isHindi={isHindi}
            />

            <div className="mt-4 space-y-3">

              <PremiumInput
                label={
                  isHindi ? "पूरा नाम" : "FULL NAME"
                }
                placeholder={
                  isHindi
                    ? "अपना पूरा नाम दर्ज करें"
                    : "Enter your full name"
                }
                value={customerName}
                onChange={setCustomerName}
              />

              <PremiumInput
                label={
                  isHindi
                    ? "मोबाइल नंबर"
                    : "MOBILE NUMBER"
                }
                placeholder={
                  isHindi
                    ? "10 अंकों का मोबाइल नंबर"
                    : "10 digit mobile number"
                }
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={mobile}
                onChange={(value) =>
                  setMobile(
                    value.replace(/\D/g, ""),
                  )
                }
              />

            </div>
          </section>

          {/* POOJA */}

          <section className="pt-8">

            <SectionTitle
              icon={<Sparkles size={16} />}
              eyebrow={
                isHindi
                  ? "अपना अनुष्ठान चुनें"
                  : "Choose Your Ritual"
              }
              title={
                isHindi
                  ? "पूजा चुनें"
                  : "Select Pooja"
              }
              description={
                isHindi
                  ? "वह पवित्र अनुष्ठान चुनें जिसे आप करवाना चाहते हैं।"
                  : "Select the sacred ritual you wish to perform."
              }
              right={
                <div className="flex items-center gap-1 text-[8px] text-gray-300">
                  <ChevronLeft size={11} />
                  {isHindi ? "स्वाइप" : "Swipe"}
                  <ChevronRight size={11} />
                </div>
              }
              isHindi={isHindi}
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
                        : "border-white/[0.09] bg-[#08111A]"
                    }`}
                  >

                    {active && (
                      <div className="absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#E7B94F] text-black shadow-lg shadow-[#DFAE45]/20">
                        <Check
                          size={12}
                          strokeWidth={3}
                        />
                      </div>
                    )}

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-[16px] border text-xl ${
                        active
                          ? "border-[#DFAE45]/25 bg-[#DFAE45]/10"
                          : "border-white/10 bg-[#111D29]"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div className="mt-3">

                      <h3 className="line-clamp-2 min-h-[34px] pr-5 text-[12px] font-bold leading-4 text-white">
                        {getPoojaName(item.name)}
                      </h3>

                      <p className="mt-1.5 line-clamp-2 min-h-[27px] text-[8.5px] leading-4 text-gray-300">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 border-t border-white/[0.09] pt-2.5">

                      <div className="flex items-center justify-between">

                        <span className="flex items-center gap-1 text-[8px] text-gray-300">
                          <Clock3 size={9} />
                          {item.duration}
                        </span>

                        <span className="text-[10px] font-bold text-[#E7B94F]">
                          {isHindi
                            ? "शुरुआत से"
                            : "Starting From"}
                        </span>
                      </div>

                      <p className="mt-1 text-[15px] font-extrabold text-[#F3C75F]">
                        ₹
                        {item.price.toLocaleString(
                          "en-IN",
                        )}
                      </p>
                    </div>

                    <p className="mt-1 text-[7px] leading-3 text-gray-300">
                      {isHindi
                        ? "अंतिम मूल्य सामग्री और स्थान के अनुसार"
                        : "Final price based on samagri & location"}
                    </p>

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
              eyebrow={
                isHindi
                  ? "सेवा क्षेत्र"
                  : "Service Area"
              }
              title={
                isHindi
                  ? "स्थान चुनें"
                  : "Select Location"
              }
              description={
                isHindi
                  ? "वह शहर चुनें जहां आपकी पूजा की व्यवस्था की जाएगी।"
                  : "Choose the city where your pooja will be arranged."
              }
              isHindi={isHindi}
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
                        : "border-white/[0.09] bg-[#08111A] text-gray-300"
                    }`}
                  >

                    <MapPin
                      size={13}
                      className="mx-auto mb-1"
                    />

                    <span className="text-[10px] font-bold">
                      {getLocationName(location)}
                    </span>

                    {active && (
                      <div className="absolute right-1.5 top-1.5">
                        <Check
                          size={9}
                          strokeWidth={3}
                        />
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
              eyebrow={
                isHindi
                  ? "पवित्र स्थान"
                  : "Sacred Destination"
              }
              title={
                isHindi
                  ? "मंदिर चुनें"
                  : "Select Temple"
              }
              description={
                isHindi
                  ? `${getLocationName(selectedLocation)} में उपलब्ध प्रमाणित मंदिर।`
                  : `Verified temples available in ${selectedLocation}.`
              }
              right={
                <BadgeCheck
                  size={17}
                  className="text-[#E7B94F]"
                />
              }
              isHindi={isHindi}
            />

            {filteredTemples.length === 0 ? (

              <div className="mt-4 rounded-[22px] border border-white/[0.09] bg-[#08111A] p-6 text-center">

                <Landmark
                  size={27}
                  className="mx-auto text-gray-300"
                />

                <p className="mt-3 text-xs text-gray-300">
                  {isHindi
                    ? "इस स्थान पर कोई मंदिर उपलब्ध नहीं है।"
                    : "No temples available in this location."}
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
                          : "border-white/[0.09]"
                      }`}
                    >

                      <div className="relative h-[118px] overflow-hidden bg-[#101A25]">

                        <Image
                          src={item.image}
                          alt={getTempleName(item.name)}
                          fill
                          sizes="205px"
                          className={`object-cover transition duration-500 ${
                            active
                              ? "scale-105"
                              : "group-hover:scale-105"
                          }`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-2 py-1 backdrop-blur-md">

                          <BadgeCheck
                            size={10}
                            className="text-[#E7B94F]"
                          />

                          <span className="text-[7px] font-semibold text-white">
                            {isHindi
                              ? "प्रमाणित"
                              : "VERIFIED"}
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

                          <p className="flex items-center gap-1 text-[8px] text-gray-200">
                            <MapPin size={9} />
                            {getLocationName(item.city)}
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#08111A] p-3.5">

                        <h3 className="truncate text-[11px] font-bold text-white">
                          {getTempleName(item.name)}
                        </h3>

                        <div className="mt-2.5 flex items-center justify-between">

                          <span className="flex items-center gap-1 text-[8px] text-gray-300">
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
              eyebrow={
                isHindi
                  ? "पूजा का स्थान"
                  : "Ritual Location"
              }
              title={
                isHindi
                  ? "पूजा कहां करवानी है?"
                  : "Where should the pooja be performed?"
              }
              description={
                isHindi
                  ? "मंदिर में पूजा या घर पर पूजा में से चुनें।"
                  : "Choose between temple ritual or a home visit."
              }
              isHindi={isHindi}
            />

            <div className="mt-4 grid grid-cols-2 gap-3">

              <LocationTypeCard
                active={locationType === "temple"}
                icon={<Landmark size={21} />}
                title={
                  isHindi
                    ? "मंदिर में"
                    : "At Temple"
                }
                description={
                  isHindi
                    ? "पंडित आपके चुने हुए मंदिर में पूजा करेंगे।"
                    : "Pandit performs the pooja at your selected temple."
                }
                onClick={() =>
                  setLocationType("temple")
                }
              />

              <LocationTypeCard
                active={locationType === "home"}
                icon={<Home size={21} />}
                title={
                  isHindi
                    ? "मेरे घर पर"
                    : "At My Home"
                }
                description={
                  isHindi
                    ? "एक प्रमाणित पंडित आपके घर पूजा के लिए आएंगे।"
                    : "A verified pandit visits your home for the ritual."
                }
                onClick={() =>
                  setLocationType("home")
                }
              />

            </div>
          </section>

          {/* HOME ADDRESS */}

          {locationType === "home" && (

            <section className="pt-4">

              <div className="relative overflow-hidden rounded-[24px] border border-[#DFAE45]/20 bg-[#08111A] p-4">

                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#DFAE45]/8 blur-3xl" />

                <div className="relative flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[#DFAE45]/20 bg-[#DFAE45]/8">
                    <Home
                      size={18}
                      className="text-[#E7B94F]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-bold text-white">
                      {isHindi
                        ? "होम विजिट विवरण"
                        : "Home Visit Details"}
                    </h3>

                    <p className="mt-0.5 text-[8px] text-gray-300">
                      {isHindi
                        ? "हमारे पंडित को कहां पहुंचना है?"
                        : "Where should our pandit arrive?"}
                    </p>
                  </div>
                </div>

                <textarea
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                  placeholder={
                    isHindi
                      ? "मकान / फ्लैट / सड़क / क्षेत्र"
                      : "House / Flat / Street / Area"
                  }
                  rows={3}
                  className="relative mt-4 w-full resize-none rounded-[15px] border border-white/[0.09] bg-[#050B11] p-3.5 text-[11px] text-white outline-none transition placeholder:text-gray-400 focus:border-[#DFAE45]/40"
                />

                <div className="mt-3 grid grid-cols-2 gap-3">

                  <input
                    type="text"
                    placeholder={
                      isHindi ? "शहर" : "City"
                    }
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                    className="h-12 rounded-[15px] border border-white/[0.09] bg-[#050B11] px-3.5 text-[11px] text-white outline-none placeholder:text-gray-400 focus:border-[#DFAE45]/40"
                  />

                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder={
                      isHindi ? "पिनकोड" : "Pincode"
                    }
                    value={pincode}
                    onChange={(e) =>
                      setPincode(
                        e.target.value.replace(
                          /\D/g,
                          "",
                        ),
                      )
                    }
                    className="h-12 rounded-[15px] border border-white/[0.09] bg-[#050B11] px-3.5 text-[11px] text-white outline-none placeholder:text-gray-400 focus:border-[#DFAE45]/40"
                  />

                </div>
              </div>
            </section>
          )}

          {/* DATE */}

          <section className="pt-8">

            <SectionTitle
              icon={<CalendarDays size={16} />}
              eyebrow={
                isHindi
                  ? "अपना दिन चुनें"
                  : "Choose Your Day"
              }
              title={
                isHindi
                  ? "तारीख चुनें"
                  : "Select Date"
              }
              description={
                isHindi
                  ? "अपने अनुष्ठान के लिए सुविधाजनक तारीख चुनें।"
                  : "Choose a convenient date for your ritual."
              }
              isHindi={isHindi}
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
                        : "border-white/[0.09] bg-[#08111A] text-gray-300"
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
                        {isHindi ? "आज" : "Today"}
                      </span>
                    )}

                    {index !== 0 && (
                      <span className="block h-[10px]" />
                    )}

                    <p className="mt-1 text-[8px] font-semibold uppercase">
                      {getDayName(item.day)}
                    </p>

                    <p className="mt-0.5 text-[20px] font-bold">
                      {item.date}
                    </p>

                    <p className="text-[8px]">
                      {getMonthName(item.month)}
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
              eyebrow={
                isHindi
                  ? "शुभ समय"
                  : "Auspicious Schedule"
              }
              title={
                isHindi
                  ? "समय चुनें"
                  : "Select Time"
              }
              description={
                isHindi
                  ? "अपना पसंदीदा उपलब्ध समय चुनें।"
                  : "Choose your preferred available time slot."
              }
              isHindi={isHindi}
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
                        : "border-white/[0.09] bg-[#08111A] text-gray-200"
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

          {/* REQUEST PREVIEW */}

          <section className="pt-8">

            <div className="relative overflow-hidden rounded-[25px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#101C28] to-[#070D14] p-4">

              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#DFAE45]/8 blur-3xl" />

              <div className="relative flex items-center justify-between">

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
                    {isHindi
                      ? "मूल्य अनुरोध पूर्वावलोकन"
                      : "Price Request Preview"}
                  </p>

                  <h3 className="mt-1 text-[14px] font-bold text-white">
                    {isHindi
                      ? "आपकी पवित्र योजना"
                      : "Your Sacred Plan"}
                  </h3>
                </div>

                <MessageCircle
                  size={18}
                  className="text-[#E7B94F]"
                />
              </div>

              <div className="relative mt-4 space-y-2">

                <PreviewRow
                  label={isHindi ? "पूजा" : "Pooja"}
                  value={
                    pooja
                      ? getPoojaName(pooja.name)
                      : isHindi
                        ? "पूजा चुनें"
                        : "Select pooja"
                  }
                />

                <PreviewRow
                  label={
                    isHindi
                      ? "शुरुआती मूल्य"
                      : "Starting From"
                  }
                  value={
                    pooja
                      ? `₹${pooja.price.toLocaleString(
                          "en-IN",
                        )}`
                      : isHindi
                        ? "मूल्य अनुरोध पर"
                        : "Price on request"
                  }
                />

                <PreviewRow
                  label={isHindi ? "मंदिर" : "Temple"}
                  value={
                    locationType === "temple"
                      ? temple
                        ? getTempleName(temple.name)
                        : isHindi
                          ? "मंदिर चुनें"
                          : "Select temple"
                      : isHindi
                        ? "होम विजिट"
                        : "Home Visit"
                  }
                />

                <PreviewRow
                  label={isHindi ? "तारीख" : "Date"}
                  value={
                    selectedDateObject
                      ? `${getDayName(selectedDateObject.day)}, ${selectedDateObject.date} ${getMonthName(selectedDateObject.month)}`
                      : isHindi
                        ? "तारीख चुनें"
                        : "Select date"
                  }
                />

                <PreviewRow
                  label={isHindi ? "समय" : "Time"}
                  value={selectedTime}
                />

                <PreviewRow
                  label={isHindi ? "स्थान" : "Place"}
                  value={
                    locationType === "home"
                      ? city ||
                        (isHindi
                          ? "होम विजिट"
                          : "Home Visit")
                      : getLocationName(
                          selectedLocation,
                        )
                  }
                />

              </div>

              <div className="relative mt-3 rounded-[14px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.06] px-3 py-2.5">

                <p className="text-[7.5px] leading-4 text-gray-300">
                  {isHindi
                    ? "सामग्री, स्थान, पूजा की आवश्यकताओं और उपलब्धता की जांच के बाद अंतिम मूल्य तय किया जाएगा।"
                    : "Final price will be confirmed after checking "}
                  {!isHindi && (
                    <span className="font-semibold text-white">
                      samagri, location, pooja requirements
                      and availability.
                    </span>
                  )}
                </p>

              </div>
            </div>
          </section>

          {/* TRUST */}

          <section className="pt-6">

            <div className="rounded-[23px] border border-green-500/15 bg-green-500/[0.045] p-4">

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
                      {isHindi
                        ? "प्रमाणित ऑफलाइन सेवा"
                        : "Verified Offline Service"}
                    </p>

                    <BadgeCheck
                      size={13}
                      className="text-green-400"
                    />
                  </div>

                  <p className="mt-1.5 text-[9px] leading-4 text-gray-300">
                    {isHindi
                      ? "OurHub प्रमाणित पंडितों, चयनित मंदिरों और विश्वसनीय सेवा भागीदारों के साथ काम करता है।"
                      : "OurHub works with verified pandits, selected temples and trusted service partners."}
                  </p>

                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-green-400/10 pt-3">

                <TrustMini
                  text={
                    isHindi
                      ? "प्रमाणित पंडित"
                      : "Verified Pandits"
                  }
                />

                <TrustMini
                  text={
                    isHindi
                      ? "लचीला मूल्य"
                      : "Flexible Pricing"
                  }
                />

                <TrustMini
                  text={
                    isHindi
                      ? "WhatsApp सहायता"
                      : "WhatsApp Support"
                  }
                />

              </div>
            </div>
          </section>

          {/* MAIN CTA */}

          <section className="pt-6 pb-8">

            <button
              type="button"
              onClick={handleRequestPrice}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-[19px] bg-gradient-to-r from-[#DFAE45] via-[#F3C75F] to-[#DFAE45] px-5 py-4 text-[12px] font-bold text-black shadow-[0_15px_40px_rgba(223,174,69,0.14)] transition active:scale-[0.98]"
            >

              <MessageCircle
                size={16}
                className="relative z-10"
              />

              <span className="relative z-10">
                {isHindi
                  ? "WhatsApp पर मूल्य अनुरोध करें"
                  : "Request Price on WhatsApp"}
              </span>

              <ArrowRight
                size={17}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />

              <div className="absolute inset-y-0 -left-20 w-20 skew-x-[-20deg] bg-white/25 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </button>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-[8px] text-gray-300">

              <MessageCircle size={10} />

              {isHindi
                ? "हम WhatsApp पर आपके साथ अंतिम मूल्य की पुष्टि करेंगे।"
                : "We will confirm the final price with you on WhatsApp."}
            </p>
          </section>
        </div>

        {/* STICKY BOTTOM CTA */}

        <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-[480px] border-t border-white/[0.08] bg-[#04090E]/95 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-2xl">

          <div className="flex items-center gap-3">

            <div className="min-w-0 flex-1">

              <p className="truncate text-[8px] font-semibold uppercase tracking-[0.12em] text-gray-300">
                {isHindi
                  ? "चुनी गई पूजा"
                  : "Selected Pooja"}
              </p>

              <p className="mt-0.5 truncate text-[11px] font-bold text-white">
                {pooja
                  ? getPoojaName(pooja.name)
                  : isHindi
                    ? "पूजा चुनें"
                    : "Select a pooja"}
              </p>

              <p className="mt-0.5 text-[9px] text-[#E7B94F]">
                {pooja
                  ? isHindi
                    ? `शुरुआती मूल्य ₹${pooja.price.toLocaleString(
                        "en-IN",
                      )}`
                    : `Starting From ₹${pooja.price.toLocaleString(
                        "en-IN",
                      )}`
                  : isHindi
                    ? "अपना अनुष्ठान चुनें"
                    : "Choose your ritual"}
              </p>
            </div>

            <button
              type="button"
              onClick={handleRequestPrice}
              className="flex h-12 shrink-0 items-center gap-2 rounded-[16px] bg-[#E7B94F] px-4 text-[10px] font-bold text-black shadow-lg shadow-[#DFAE45]/10 transition active:scale-95"
            >

              <MessageCircle size={15} />

              {isHindi
                ? "मूल्य अनुरोध"
                : "Request Price"}

              <ArrowRight size={14} />
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}

/* ============================================================
   SECTION TITLE
============================================================ */

function SectionTitle({
  icon,
  eyebrow,
  title,
  description,
  right,
  isHindi,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  right?: React.ReactNode;
  isHindi: boolean;
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

          <p className="mt-1 text-[9px] leading-4 text-gray-300">
            {description}
          </p>

        </div>
      </div>

      {right}
    </div>
  );
}

/* ============================================================
   PREMIUM INPUT
============================================================ */

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
  inputMode?:
    | "text"
    | "numeric"
    | "tel"
    | "email"
    | "decimal"
    | "search"
    | "url";
  maxLength?: number;
}) {
  return (
    <div className="relative">

      <label className="mb-1.5 block pl-1 text-[7px] font-bold tracking-[0.16em] text-gray-300">
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
        className="h-13 w-full rounded-[16px] border border-white/[0.09] bg-[#08111A] px-4 text-[11px] text-white outline-none transition placeholder:text-gray-400 focus:border-[#DFAE45]/40 focus:bg-[#0A141F]"
      />
    </div>
  );
}

/* ============================================================
   LOCATION TYPE CARD
============================================================ */

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
          : "border-white/[0.09] bg-[#08111A]"
      }`}
    >

      {active && (
        <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#E7B94F] text-black">
          <Check
            size={12}
            strokeWidth={3}
          />
        </div>
      )}

      <div
        className={`flex h-11 w-11 items-center justify-center rounded-[14px] border ${
          active
            ? "border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[#E7B94F]"
            : "border-white/10 bg-[#111D29] text-gray-300"
        }`}
      >
        {icon}
      </div>

      <h3 className="mt-3 text-[11px] font-bold text-white">
        {title}
      </h3>

      <p className="mt-1.5 text-[8.5px] leading-4 text-gray-300">
        {description}
      </p>

      {active && (
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#E7B94F] to-transparent" />
      )}
    </button>
  );
}

/* ============================================================
   PREVIEW ROW
============================================================ */

function PreviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[13px] border border-white/[0.07] bg-white/[0.035] px-3 py-2.5">

      <span className="text-[8px] text-gray-300">
        {label}
      </span>

      <span className="max-w-[62%] truncate text-right text-[9px] font-semibold text-white">
        {value}
      </span>

    </div>
  );
}

/* ============================================================
   TRUST MINI
============================================================ */

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

      <p className="mt-1 text-[7px] leading-3 text-gray-300">
        {text}
      </p>

    </div>
  );
}

