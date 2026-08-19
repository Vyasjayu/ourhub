"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
  Home,
  Building2,
  Store,
  Factory,
  MessageCircle,
} from "lucide-react";

type ConsultationType = "call" | "whatsapp";

type FormData = {
  name: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  address: string;
  propertyType: string;
  date: string;
  time: string;
};

const WHATSAPP_NUMBER = "918878632431";

const propertyOptions = [
  {
    value: "Home",
    label: "Home",
    description: "Residential property",
    price: 5100,
    icon: Home,
  },
  {
    value: "Office",
    label: "Office",
    description: "Workplace & business",
    price: 5100,
    icon: Building2,
  },
  {
    value: "Shop",
    label: "Shop",
    description: "Retail & commercial",
    price: 5100,
    icon: Store,
  },
  {
    value: "Factory",
    label: "Factory",
    description: "Industrial property",
    price: 11000,
    icon: Factory,
  },
];

function VastuBooking() {
  const searchParams = useSearchParams();

  const propertyFromUrl = searchParams.get("propertyType");

  const [consultationType, setConsultationType] =
    useState<ConsultationType>("call");

  const [form, setForm] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    address: "",
    propertyType: "",
    date: "",
    time: "",
  });

  const [error, setError] = useState("");

  /* =====================================================
     AUTO SELECT PROPERTY FROM URL
     Example:
     /religious/vastu-booking?propertyType=Home
  ===================================================== */

  useEffect(() => {
    if (!propertyFromUrl) return;

    const validProperty = propertyOptions.some(
      (property) => property.value === propertyFromUrl
    );

    if (validProperty) {
      setForm((prev) => ({
        ...prev,
        propertyType: propertyFromUrl,
      }));
    }
  }, [propertyFromUrl]);

  /* =====================================================
     UPDATE FIELD
  ===================================================== */

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError("");
  };

  /* =====================================================
     SELECTED PROPERTY
  ===================================================== */

  const selectedProperty = propertyOptions.find(
    (property) => property.value === form.propertyType
  );

  const selectedPrice = selectedProperty?.price ?? 0;

  const formattedPrice = selectedPrice.toLocaleString("en-IN");

  /* =====================================================
     MIN DATE
  ===================================================== */

  const today = new Date().toISOString().split("T")[0];

  /* =====================================================
     VALIDATION
  ===================================================== */

  const validateForm = () => {
    if (!form.name.trim()) {
      setError("Please enter your full name.");
      return false;
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      setError("Please enter a valid 10 digit mobile number.");
      return false;
    }

    if (!form.city.trim()) {
      setError("Please enter your city.");
      return false;
    }

    if (!form.state.trim()) {
      setError("Please enter your state.");
      return false;
    }

    if (!form.propertyType) {
      setError(
        "Please select what you want Vastu consultation for."
      );
      return false;
    }

    if (!form.date) {
      setError("Please select consultation date.");
      return false;
    }

    if (!form.time) {
      setError("Please select consultation time.");
      return false;
    }

    return true;
  };

  /* =====================================================
     SUBMIT
  ===================================================== */

  const handleSubmit = () => {
    if (!validateForm()) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

      return;
    }

    /* =================================================
       WHATSAPP FLOW
    ================================================= */

    if (consultationType === "whatsapp") {
      const message = `
🙏 *OurHub Vastu Consultation Request*

━━━━━━━━━━━━━━━━━━

👤 *Customer Details*

Name: ${form.name}
Mobile: ${form.mobile}
${form.email ? `Email: ${form.email}` : ""}

━━━━━━━━━━━━━━━━━━

🏠 *Vastu Consultation*

Vastu For: ${form.propertyType}
Consultation Fee: ₹${formattedPrice}

City: ${form.city}
State: ${form.state}
${form.address ? `Address: ${form.address}` : ""}

━━━━━━━━━━━━━━━━━━

📅 *Consultation Schedule*

Date: ${form.date}
Time: ${form.time}

━━━━━━━━━━━━━━━━━━

📞 *Consultation Type*

WhatsApp Consultation

━━━━━━━━━━━━━━━━━━

💰 *Total Payable*

₹${formattedPrice}

Please confirm my Vastu consultation booking.

Thank you,
*OurHub Services*
`;

      const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=` +
        encodeURIComponent(message);

      window.open(whatsappUrl, "_blank");

      return;
    }

    /* =================================================
       CALL FLOW
    ================================================= */

    const params = new URLSearchParams();

    params.set("name", form.name);
    params.set("mobile", form.mobile);
    params.set("email", form.email);
    params.set("city", form.city);
    params.set("state", form.state);
    params.set("address", form.address);
    params.set("propertyType", form.propertyType);
    params.set("price", String(selectedPrice));
    params.set("date", form.date);
    params.set("time", form.time);
    params.set("consultationType", consultationType);

    window.location.href =
      `/religious/vastu-success?${params.toString()}`;
  };

  return (
    <main className="min-h-screen bg-[#020b14] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#071321]">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071321]/95 backdrop-blur-xl">
          <div className="flex h-16 items-center px-4">

            <Link
              href="/religious/vastu"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition active:scale-95"
            >
              <ArrowLeft size={19} />
            </Link>

            <div className="ml-3 min-w-0">
              <p className="truncate text-sm font-bold text-white">
                {selectedProperty
                  ? `${selectedProperty.label} Vastu`
                  : "Book Vastu Consultation"}
              </p>

              <p className="text-[9px] text-gray-500">
                OurHub Services
              </p>
            </div>

            <div className="ml-auto flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />

              <span className="text-[9px] text-green-400">
                Secure
              </span>
            </div>

          </div>
        </header>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="px-4 pb-36">

          {/* =================================================
              HERO
          ================================================= */}

          <section className="pt-5">

            <div className="relative overflow-hidden rounded-[26px] border border-[#D4AF37]/25 bg-[#0b1826]">

              <div className="relative h-[185px] w-full">

                <img
                  src="/images/vastu/vastu-hero.jpg"
                  alt="Vastu Consultation"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/35 to-black/10" />

                <div className="absolute left-4 top-4 rounded-full border border-[#D4AF37]/30 bg-black/50 px-3 py-1 backdrop-blur-md">
                  <span className="text-[8px] font-bold uppercase tracking-[1.5px] text-[#D4AF37]">
                    Premium Consultation
                  </span>
                </div>

              </div>

              <div className="relative px-5 pb-5 pt-2">

                <h1 className="font-serif text-[29px] font-bold leading-[1.1]">
                  Book Your
                  <br />

                  <span className="text-[#D4AF37]">
                    {selectedProperty
                      ? `${selectedProperty.label} Vastu`
                      : "Vastu Consultation"}
                  </span>
                </h1>

                <div className="my-3 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />

                <p className="text-[11px] leading-5 text-gray-400">
                  {selectedProperty
                    ? `Get expert Vastu guidance for your ${selectedProperty.label.toLowerCase()} at ₹${formattedPrice}.`
                    : "Take the first step towards harmony, positivity and prosperity."}
                </p>

              </div>

            </div>

          </section>

          {/* =================================================
              TRUST FEATURES
          ================================================= */}

          <section className="mt-4">

            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#091725]">

              <div className="flex items-center gap-2.5 border-b border-r border-white/10 p-3">
                <ShieldCheck
                  size={20}
                  className="shrink-0 text-[#D4AF37]"
                />

                <div>
                  <p className="text-[10px] font-bold">
                    100% Authentic
                  </p>

                  <p className="text-[8px] text-gray-500">
                    Guidance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 border-b border-white/10 p-3">
                <User
                  size={20}
                  className="shrink-0 text-[#D4AF37]"
                />

                <div>
                  <p className="text-[10px] font-bold">
                    Expert
                  </p>

                  <p className="text-[8px] text-gray-500">
                    Consultation
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 border-r border-white/10 p-3">
                <Clock
                  size={20}
                  className="shrink-0 text-[#D4AF37]"
                />

                <div>
                  <p className="text-[10px] font-bold">
                    Flexible
                  </p>

                  <p className="text-[8px] text-gray-500">
                    Timings
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3">
                <Check
                  size={20}
                  className="shrink-0 text-[#D4AF37]"
                />

                <div>
                  <p className="text-[10px] font-bold">
                    Trusted
                  </p>

                  <p className="text-[8px] text-gray-500">
                    By Customers
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* =================================================
              PROGRESS
          ================================================= */}

          <section className="mt-5">

            <div className="rounded-2xl border border-white/10 bg-[#091725] p-4">

              <div className="flex items-center justify-between">

                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-black">
                    1
                  </div>

                  <p className="mt-2 text-[8px] font-bold text-[#D4AF37]">
                    Details
                  </p>
                </div>

                <div className="mb-5 h-px flex-1 bg-white/15" />

                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-sm text-gray-400">
                    2
                  </div>

                  <p className="mt-2 text-[8px] text-gray-500">
                    Type
                  </p>
                </div>

                <div className="mb-5 h-px flex-1 bg-white/15" />

                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-sm text-gray-400">
                    3
                  </div>

                  <p className="mt-2 text-[8px] text-gray-500">
                    Date
                  </p>
                </div>

                <div className="mb-5 h-px flex-1 bg-white/15" />

                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-sm text-gray-400">
                    4
                  </div>

                  <p className="mt-2 text-[8px] text-gray-500">
                    Submit
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              YOUR DETAILS
          ================================================= */}

          <section className="mt-5">

            <div className="rounded-[24px] border border-[#D4AF37]/20 bg-[#091725] p-4">

              <h2 className="font-serif text-[22px] font-bold text-[#D4AF37]">
                {selectedProperty
                  ? `${selectedProperty.label} Vastu Booking`
                  : "Your Details"}
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                {selectedProperty
                  ? `Book your ${selectedProperty.label.toLowerCase()} Vastu consultation for ₹${formattedPrice}.`
                  : "Please provide your basic details to continue."}
              </p>

              {/* =================================================
                  NAME
              ================================================= */}

              <div className="mt-5">

                <label className="mb-1.5 block text-[9px] text-gray-400">
                  Full Name*
                </label>

                <div className="flex h-12 items-center rounded-xl border border-white/10 bg-[#071321] px-3">

                  <User
                    size={16}
                    className="mr-3 shrink-0 text-[#D4AF37]"
                  />

                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      updateField(
                        "name",
                        e.target.value
                      )
                    }
                    placeholder="Enter your full name"
                    className="h-full w-full bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
                  />

                </div>

              </div>

              {/* =================================================
                  MOBILE
              ================================================= */}

              <div className="mt-3">

                <label className="mb-1.5 block text-[9px] text-gray-400">
                  Mobile Number*
                </label>

                <div className="flex h-12 items-center rounded-xl border border-white/10 bg-[#071321] px-3">

                  <Phone
                    size={16}
                    className="mr-3 shrink-0 text-[#D4AF37]"
                  />

                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={form.mobile}
                    onChange={(e) =>
                      updateField(
                        "mobile",
                        e.target.value.replace(
                          /\D/g,
                          ""
                        )
                      )
                    }
                    placeholder="10 digit mobile number"
                    className="h-full w-full bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
                  />

                </div>

              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div className="mt-3">

                <label className="mb-1.5 block text-[9px] text-gray-400">
                  Email Address
                  <span className="text-gray-600">
                    {" "}
                    (Optional)
                  </span>
                </label>

                <div className="flex h-12 items-center rounded-xl border border-white/10 bg-[#071321] px-3">

                  <Mail
                    size={16}
                    className="mr-3 shrink-0 text-[#D4AF37]"
                  />

                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      updateField(
                        "email",
                        e.target.value
                      )
                    }
                    placeholder="your@email.com"
                    className="h-full w-full bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
                  />

                </div>

              </div>

              {/* =================================================
                  VASTU SERVICE
              ================================================= */}

              <div className="mt-5">

                <div className="flex items-end justify-between">

                  <div>
                    <label className="block text-[9px] text-gray-400">
                      Vastu Consultation For*
                    </label>

                    <p className="mt-1 text-[8px] text-gray-600">
                      Select your property type
                    </p>
                  </div>

                  {selectedProperty && (
                    <div className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2.5 py-1">
                      <span className="text-[9px] font-bold text-[#D4AF37]">
                        ₹{formattedPrice}
                      </span>
                    </div>
                  )}

                </div>

                {/* =================================================
                    IF PROPERTY SELECTED FROM URL
                ================================================= */}

                {selectedProperty ? (
                  <div className="mt-3 rounded-2xl border border-[#D4AF37] bg-[#D4AF37]/10 p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37] text-black">
                        <selectedProperty.icon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="text-sm font-bold text-white">
                          {selectedProperty.label} Vastu
                        </p>

                        <p className="mt-0.5 text-[9px] text-gray-400">
                          {selectedProperty.description}
                        </p>

                      </div>

                      <div className="text-right">

                        <p className="text-lg font-extrabold text-[#D4AF37]">
                          ₹{formattedPrice}
                        </p>

                        <p className="text-[8px] text-gray-500">
                          Consultation
                        </p>

                      </div>

                    </div>

                    <div className="mt-3 flex items-center gap-2 border-t border-[#D4AF37]/20 pt-3">

                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10">
                        <Check
                          size={12}
                          className="text-green-400"
                        />
                      </div>

                      <span className="text-[9px] text-green-400">
                        Selected Vastu Service
                      </span>

                    </div>

                  </div>
                ) : (
                  /* =================================================
                     DIRECT BOOKING WITHOUT PROPERTY
                  ================================================= */

                  <div className="mt-3 grid grid-cols-2 gap-2">

                    {propertyOptions.map((option) => {

                      const Icon = option.icon;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            updateField(
                              "propertyType",
                              option.value
                            )
                          }
                          className="relative rounded-xl border border-white/10 bg-[#071321] p-3 text-left transition active:scale-[0.98]"
                        >

                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[#D4AF37]">
                            <Icon size={17} />
                          </div>

                          <p className="mt-2 text-[11px] font-bold">
                            {option.label}
                          </p>

                          <p className="mt-0.5 text-[8px] text-gray-500">
                            {option.description}
                          </p>

                          <p className="mt-2 text-[10px] font-extrabold text-green-400">
                            ₹
                            {option.price.toLocaleString(
                              "en-IN"
                            )}
                          </p>

                        </button>
                      );

                    })}

                  </div>
                )}

              </div>

              {/* =================================================
                  CITY + STATE
              ================================================= */}

              <div className="mt-4 grid grid-cols-2 gap-3">

                {/* CITY */}

                <div>

                  <label className="mb-1.5 block text-[9px] text-gray-400">
                    City*
                  </label>

                  <div className="flex h-12 items-center rounded-xl border border-white/10 bg-[#071321] px-3">

                    <MapPin
                      size={15}
                      className="mr-2 shrink-0 text-[#D4AF37]"
                    />

                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) =>
                        updateField(
                          "city",
                          e.target.value
                        )
                      }
                      placeholder="City"
                      className="w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
                    />

                  </div>

                </div>

                {/* STATE */}

                <div>

                  <label className="mb-1.5 block text-[9px] text-gray-400">
                    State*
                  </label>

                  <div className="flex h-12 items-center rounded-xl border border-white/10 bg-[#071321] px-3">

                    <MapPin
                      size={15}
                      className="mr-2 shrink-0 text-[#D4AF37]"
                    />

                    <input
                      type="text"
                      value={form.state}
                      onChange={(e) =>
                        updateField(
                          "state",
                          e.target.value
                        )
                      }
                      placeholder="State"
                      className="w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
                    />

                  </div>

                </div>

              </div>

              {/* =================================================
                  ADDRESS
              ================================================= */}

              <div className="mt-3">

                <label className="mb-1.5 block text-[9px] text-gray-400">
                  Property Address
                  <span className="text-gray-600">
                    {" "}
                    (Optional)
                  </span>
                </label>

                <textarea
                  rows={3}
                  value={form.address}
                  onChange={(e) =>
                    updateField(
                      "address",
                      e.target.value
                    )
                  }
                  placeholder="Enter your property address"
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#071321] p-3 text-xs text-white outline-none placeholder:text-gray-600"
                />

              </div>

            </div>

          </section>

          {/* =================================================
              CONSULTATION TYPE
          ================================================= */}

          <section className="mt-5">

            <div className="rounded-[24px] border border-white/10 bg-[#091725] p-4">

              <h2 className="text-base font-bold">
                Consultation Type
              </h2>

              <p className="mt-1 text-[9px] text-gray-500">
                Choose how you want to consult with our Vastu expert.
              </p>

              <div className="mt-4 space-y-3">

                {/* CALL */}

                <button
                  type="button"
                  onClick={() =>
                    setConsultationType("call")
                  }
                  className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition active:scale-[0.98] ${
                    consultationType === "call"
                      ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-lg shadow-[#D4AF37]/5"
                      : "border-white/10 bg-[#071321]"
                  }`}
                >

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      consultationType === "call"
                        ? "bg-[#D4AF37] text-black"
                        : "bg-white/5 text-[#D4AF37]"
                    }`}
                  >
                    <Phone size={19} />
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center justify-between gap-2">

                      <h3 className="truncate text-sm font-bold">
                        Call Consultation
                      </h3>

                      {consultationType === "call" && (
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]">
                          <Check
                            size={12}
                            className="text-black"
                          />
                        </div>
                      )}

                    </div>

                    <p className="mt-1 text-[9px] leading-4 text-gray-500">
                      Speak directly with a verified Vastu expert.
                    </p>

                  </div>

                </button>

                {/* WHATSAPP */}

                <button
                  type="button"
                  onClick={() =>
                    setConsultationType("whatsapp")
                  }
                  className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition active:scale-[0.98] ${
                    consultationType === "whatsapp"
                      ? "border-green-500/60 bg-green-500/10 shadow-lg shadow-green-500/5"
                      : "border-white/10 bg-[#071321]"
                  }`}
                >

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      consultationType === "whatsapp"
                        ? "bg-green-500 text-black"
                        : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    <MessageCircle size={20} />
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center justify-between gap-2">

                      <h3 className="truncate text-sm font-bold">
                        WhatsApp Consultation
                      </h3>

                      {consultationType === "whatsapp" && (
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500">
                          <Check
                            size={12}
                            className="text-black"
                          />
                        </div>
                      )}

                    </div>

                    <p className="mt-1 text-[9px] leading-4 text-gray-500">
                      Send your complete Vastu requirement directly to OurHub.
                    </p>

                  </div>

                </button>

              </div>

            </div>

          </section>

          {/* =================================================
              DATE & TIME
          ================================================= */}

          <section className="mt-5">

            <div className="rounded-[24px] border border-white/10 bg-[#091725] p-4">

              <h2 className="text-base font-bold">
                Date & Time
              </h2>

              <p className="mt-1 text-[9px] text-gray-500">
                Choose a convenient consultation slot.
              </p>

              {/* DATE */}

              <div className="mt-4">

                <label className="mb-1.5 block text-[9px] text-gray-400">
                  Consultation Date*
                </label>

                <div className="relative">

                  <CalendarDays
                    size={17}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                  />

                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) =>
                      updateField(
                        "date",
                        e.target.value
                      )
                    }
                    min={today}
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#071321] px-10 text-xs text-white outline-none [color-scheme:dark]"
                  />

                </div>

              </div>

              {/* TIME */}

              <div className="mt-3">

                <label className="mb-1.5 block text-[9px] text-gray-400">
                  Consultation Time*
                </label>

                <div className="relative">

                  <Clock
                    size={17}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                  />

                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) =>
                      updateField(
                        "time",
                        e.target.value
                      )
                    }
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#071321] px-10 text-xs text-white outline-none [color-scheme:dark]"
                  />

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              PRICE SUMMARY
          ================================================= */}

          {selectedProperty && (
            <section className="mt-5">

              <div className="rounded-[22px] border border-[#D4AF37]/20 bg-[#091725] p-4">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-[9px] text-gray-500">
                      Selected Service
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      {selectedProperty.label} Vastu
                    </p>

                    <p className="mt-0.5 text-[8px] text-gray-500">
                      {selectedProperty.description}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-[8px] text-gray-500">
                      Consultation Fee
                    </p>

                    <p className="mt-1 text-lg font-extrabold text-[#D4AF37]">
                      ₹{formattedPrice}
                    </p>

                  </div>

                </div>

                <div className="mt-3 border-t border-white/10 pt-3">

                  <div className="flex items-center justify-between text-[9px]">

                    <span className="text-gray-500">
                      Platform Fee
                    </span>

                    <span className="font-semibold text-green-400">
                      FREE
                    </span>

                  </div>

                  <div className="mt-2 flex items-center justify-between">

                    <span className="text-xs font-bold">
                      Total Payable
                    </span>

                    <span className="text-base font-extrabold text-[#D4AF37]">
                      ₹{formattedPrice}
                    </span>

                  </div>

                </div>

              </div>

            </section>
          )}

          {/* =================================================
              ERROR
          ================================================= */}

          {error && (
            <section className="mt-4">

              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-3">

                <p className="text-[10px] font-medium text-red-400">
                  {error}
                </p>

              </div>

            </section>
          )}

          {/* =================================================
              SECURITY
          ================================================= */}

          <section className="mt-5">

            <div className="flex items-center justify-center gap-2 rounded-xl border border-green-500/10 bg-green-500/5 px-3 py-3">

              <ShieldCheck
                size={17}
                className="text-green-400"
              />

              <p className="text-[9px] text-gray-400">
                Your information is safe and securely handled by OurHub.
              </p>

            </div>

          </section>

        </div>

        {/* =================================================
            MOBILE BOTTOM CTA
        ================================================= */}

        <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-[#071321]/95 px-3 py-3 backdrop-blur-xl">

          <div className="mx-auto flex w-full max-w-[430px] items-center gap-2">

            {/* PRICE */}

            <div className="min-w-0 flex-1">

              <p className="text-[8px] text-gray-500">
                {selectedProperty
                  ? `${selectedProperty.label} Vastu`
                  : "Vastu Consultation"}
              </p>

              <p
                className={`mt-0.5 truncate text-[12px] font-extrabold ${
                  consultationType === "whatsapp"
                    ? "text-green-400"
                    : "text-[#D4AF37]"
                }`}
              >
                {selectedProperty
                  ? `₹${formattedPrice}`
                  : "Select Property"}
              </p>

            </div>

            {/* SUBMIT */}

            <button
              type="button"
              onClick={handleSubmit}
              className={`flex h-12 min-w-0 flex-[1.55] items-center justify-center gap-2 rounded-xl px-2 text-[11px] font-extrabold shadow-lg active:scale-[0.98] ${
                consultationType === "whatsapp"
                  ? "bg-green-500 text-black shadow-green-500/10"
                  : "bg-[#D4AF37] text-black shadow-[#D4AF37]/10"
              }`}
            >

              {consultationType === "whatsapp" ? (
                <>
                  <MessageCircle size={16} />
                  Send on WhatsApp
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight size={17} />
                </>
              )}

            </button>

          </div>

        </div>

      </div>
    </main>
  );
}

/* =====================================================
   PAGE WRAPPER
   Required because useSearchParams()
   ===================================================== */

export default function VastuBookingPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#020b14] text-white">
          <div className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center bg-[#071321]">
            <p className="text-sm text-gray-400">
              Loading Vastu booking...
            </p>
          </div>
        </main>
      }
    >
      <VastuBooking />
    </Suspense>
  );
}