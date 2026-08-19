"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

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
    label: "Home Vastu",
    shortLabel: "Home",
    description: "Residential property",
    price: 5100,
    image: "/images/vastu/home-vastu.jpg",
    icon: Home,
  },
  {
    value: "Office",
    label: "Office Vastu",
    shortLabel: "Office",
    description: "Workplace & business",
    price: 5100,
    image: "/images/vastu/office-vastu.jpg",
    icon: Building2,
  },
  {
    value: "Shop",
    label: "Shop Vastu",
    shortLabel: "Shop",
    description: "Retail & commercial",
    price: 5100,
    image: "/images/vastu/shop-vastu.jpg",
    icon: Store,
  },
  {
    value: "Factory",
    label: "Factory Vastu",
    shortLabel: "Factory",
    description: "Industrial property",
    price: 11000,
    image: "/images/vastu/factory-vastu.jpg",
    icon: Factory,
  },
];

function VastuBookingForm() {
  const searchParams = useSearchParams();

  /*
   * URL:
   * /religious/vastu/book?type=Home
   *
   * type automatically Home / Office / Shop / Factory milega.
   */
  const urlType = searchParams.get("type");


  /*
   * URL type ko validate kar rahe hain.
   */
  const selectedFromUrl = useMemo(() => {
    return (
      propertyOptions.find(
        (item) =>
          item.value.toLowerCase() ===
          (urlType || "").toLowerCase()
      ) || propertyOptions[0]
    );
  }, [urlType]);

  const [consultationType, setConsultationType] =
    useState<ConsultationType>("call");

  /*
   * IMPORTANT:
   * URL se property automatically select hogi.
   */
  const [form, setForm] = useState<FormData>(() => ({
    name: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    address: "",
    propertyType: selectedFromUrl.value,
    date: "",
    time: "",
  }));

  const [error, setError] = useState("");

  /*
   * Agar URL type change ho jaye to selected property
   * uske according update karenge.
   */
  const selectedProperty =
    propertyOptions.find(
      (property) =>
        property.value === form.propertyType
    ) || selectedFromUrl;

  const selectedPrice = selectedProperty.price;

  const formattedPrice =
    selectedPrice.toLocaleString("en-IN");

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

  const validateForm = () => {
    if (!form.name.trim()) {
      setError("Please enter your full name.");
      return false;
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      setError(
        "Please enter a valid 10 digit mobile number."
      );
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
        "Please select your Vastu consultation type."
      );
      return false;
    }

    if (!form.date) {
      setError(
        "Please select consultation date."
      );
      return false;
    }

    if (!form.time) {
      setError(
        "Please select consultation time."
      );
      return false;
    }

    return true;
  };

  const handlePropertyChange = (value: string) => {
    updateField("propertyType", value);
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

      return;
    }

    /*
     * =========================
     * WHATSAPP
     * =========================
     */

    if (consultationType === "whatsapp") {
      const message = `
🙏 *OurHub Vastu Consultation Request*

━━━━━━━━━━━━━━━━━━

👤 *Customer Details*

Name: ${form.name}
Mobile: ${form.mobile}
${form.email ? `Email: ${form.email}` : ""}

━━━━━━━━━━━━━━━━━━

🏠 *Vastu Details*

Vastu For: ${selectedProperty.label}

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

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

      return;
    }

    /*
     * =========================
     * CALL / BOOKING FLOW
     * =========================
     */

    const params = new URLSearchParams();

    params.set("name", form.name);
    params.set("mobile", form.mobile);
    params.set("email", form.email);
    params.set("city", form.city);
    params.set("state", form.state);
    params.set("address", form.address);

    params.set(
      "propertyType",
      selectedProperty.value
    );

    params.set(
      "propertyName",
      selectedProperty.label
    );

    params.set(
      "price",
      String(selectedPrice)
    );

    params.set("date", form.date);
    params.set("time", form.time);

    params.set(
      "consultationType",
      consultationType
    );

    window.location.href =
      `/religious/vastu-success?${params.toString()}`;
  };

  const today = new Date()
    .toISOString()
    .split("T")[0];

  return (
    <main className="min-h-screen bg-[#020b14] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#071321]">

        {/* ================= HEADER ================= */}

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071321]/95 backdrop-blur-xl">
          <div className="flex h-16 items-center px-4">

            <Link
              href="/religious/vastu"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 active:scale-95"
            >
              <ArrowLeft size={19} />
            </Link>

            <div className="ml-3 min-w-0">
              <p className="truncate text-sm font-bold">
                {selectedProperty.label}
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

        {/* ================= CONTENT ================= */}

        <div className="px-4 pb-36">

          {/* ================= HERO ================= */}

        {/* ================= HERO ================= */}

<section className="pt-5">

  <div className="relative overflow-hidden rounded-[26px] border border-[#D4AF37]/25 bg-[#0b1826]">

    <div className="relative h-[185px] w-full">

      <img
        src={selectedProperty.image}
        alt={`${selectedProperty.label} Consultation`}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/35 to-black/10" />

      <div className="absolute left-4 top-4 rounded-full border border-[#D4AF37]/30 bg-black/50 px-3 py-1 backdrop-blur-md">

        <span className="text-[8px] font-bold uppercase tracking-[1.5px] text-[#D4AF37]">
          Premium Vastu Consultation
        </span>

      </div>

    </div>

    <div className="relative px-5 pb-5 pt-3">

      <div className="flex items-center justify-between gap-3">

        <div>

          <p className="text-[9px] uppercase tracking-[2px] text-gray-500">
            Selected Service
          </p>

          <h1 className="mt-1 font-serif text-[29px] font-bold leading-[1.1]">
            {selectedProperty.label}
          </h1>

        </div>

        <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-2 text-right">

          <p className="text-[8px] text-gray-500">
            Consultation
          </p>

          <p className="text-lg font-extrabold text-[#D4AF37]">
            ₹{formattedPrice}
          </p>

        </div>

      </div>

      <div className="my-3 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />

      <p className="text-[11px] leading-5 text-gray-400">
        Professional Vastu guidance for your{" "}
        {selectedProperty.shortLabel.toLowerCase()}.
      </p>

    </div>

  </div>

</section>

          {/* ================= TRUST ================= */}

          <section className="mt-4">

            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#091725]">

              <div className="flex items-center gap-2.5 border-b border-r border-white/10 p-3">

                <ShieldCheck
                  size={20}
                  className="shrink-0 text-[#D4AF37]"
                />

                <div>
                  <p className="text-[10px] font-bold">
                    Authentic
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
                    Service
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* ================= PROGRESS ================= */}

          <section className="mt-5">

            <div className="rounded-2xl border border-white/10 bg-[#091725] p-4">

              <div className="flex items-center justify-between">

                {[
                  ["1", "Details", true],
                  ["2", "Type", false],
                  ["3", "Date", false],
                  ["4", "Submit", false],
                ].map(
                  ([number, title, active], index) => (
                    <div
                      key={String(number)}
                      className="contents"
                    >

                      <div className="flex flex-col items-center">

                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                            active
                              ? "bg-[#D4AF37] text-black"
                              : "border border-white/25 text-gray-400"
                          }`}
                        >
                          {number}
                        </div>

                        <p
                          className={`mt-2 text-[8px] ${
                            active
                              ? "font-bold text-[#D4AF37]"
                              : "text-gray-500"
                          }`}
                        >
                          {title}
                        </p>

                      </div>

                      {index < 3 && (
                        <div className="mb-5 h-px flex-1 bg-white/15" />
                      )}

                    </div>
                  )
                )}

              </div>

            </div>

          </section>

          {/* ================= YOUR DETAILS ================= */}

          <section className="mt-5">

            <div className="rounded-[24px] border border-[#D4AF37]/20 bg-[#091725] p-4">

              <h2 className="font-serif text-[22px] font-bold text-[#D4AF37]">
                Your Details
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Enter your details for your{" "}
                {selectedProperty.shortLabel.toLowerCase()} consultation.
              </p>

              {/* NAME */}

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

              {/* MOBILE */}

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

              {/* EMAIL */}

              <div className="mt-3">

                <label className="mb-1.5 block text-[9px] text-gray-400">
                  Email Address{" "}
                  <span className="text-gray-600">
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

              {/* ================= PROPERTY ================= */}

              <div className="mt-5">

                <div className="flex items-end justify-between">

                  <div>

                    <label className="block text-[9px] text-gray-400">
                      Vastu Consultation For*
                    </label>

                    <p className="mt-1 text-[8px] text-gray-600">
                      Select property type
                    </p>

                  </div>

                  <div className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2.5 py-1">

                    <span className="text-[9px] font-bold text-[#D4AF37]">
                      ₹{formattedPrice}
                    </span>

                  </div>

                </div>

                <div className="mt-2 grid grid-cols-2 gap-2">

                  {propertyOptions.map(
                    (option) => {

                      const Icon = option.icon;

                      const selected =
                        form.propertyType ===
                        option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            handlePropertyChange(
                              option.value
                            )
                          }
                          className={`relative rounded-xl border p-3 text-left transition active:scale-[0.98] ${
                            selected
                              ? "border-[#D4AF37] bg-[#D4AF37]/10"
                              : "border-white/10 bg-[#071321]"
                          }`}
                        >

                          {selected && (
                            <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37]">

                              <Check
                                size={12}
                                className="text-black"
                              />

                            </div>
                          )}

                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                              selected
                                ? "bg-[#D4AF37] text-black"
                                : "bg-white/5 text-[#D4AF37]"
                            }`}
                          >
                            <Icon size={17} />
                          </div>

                          <p className="mt-2 text-[11px] font-bold">
                            {option.label}
                          </p>

                          <p className="mt-0.5 text-[8px] text-gray-500">
                            {option.description}
                          </p>

                          <p
                            className={`mt-2 text-[10px] font-extrabold ${
                              selected
                                ? "text-[#D4AF37]"
                                : "text-green-400"
                            }`}
                          >
                            ₹
                            {option.price.toLocaleString(
                              "en-IN"
                            )}
                          </p>

                        </button>
                      );
                    }
                  )}

                </div>

              </div>

              {/* CITY + STATE */}

              <div className="mt-4 grid grid-cols-2 gap-3">

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

              {/* ADDRESS */}

              <div className="mt-3">

                <label className="mb-1.5 block text-[9px] text-gray-400">
                  Property Address{" "}
                  <span className="text-gray-600">
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

          {/* ================= CONSULTATION TYPE ================= */}

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
                      ? "border-[#D4AF37] bg-[#D4AF37]/10"
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

                      <h3 className="text-sm font-bold">
                        Call Consultation
                      </h3>

                      {consultationType ===
                        "call" && (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37]">
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
                    setConsultationType(
                      "whatsapp"
                    )
                  }
                  className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition active:scale-[0.98] ${
                    consultationType ===
                    "whatsapp"
                      ? "border-green-500/60 bg-green-500/10"
                      : "border-white/10 bg-[#071321]"
                  }`}
                >

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      consultationType ===
                      "whatsapp"
                        ? "bg-green-500 text-black"
                        : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    <MessageCircle
                      size={20}
                    />
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center justify-between gap-2">

                      <h3 className="text-sm font-bold">
                        WhatsApp Consultation
                      </h3>

                      {consultationType ===
                        "whatsapp" && (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                          <Check
                            size={12}
                            className="text-black"
                          />
                        </div>
                      )}

                    </div>

                    <p className="mt-1 text-[9px] leading-4 text-gray-500">
                      Send your complete requirement directly to OurHub.
                    </p>

                  </div>

                </button>

              </div>

            </div>

          </section>

          {/* ================= DATE TIME ================= */}

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
                    min={today}
                    onChange={(e) =>
                      updateField(
                        "date",
                        e.target.value
                      )
                    }
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

          {/* ================= PRICE ================= */}

          <section className="mt-5">

            <div className="rounded-[22px] border border-[#D4AF37]/20 bg-[#091725] p-4">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[9px] text-gray-500">
                    Selected Service
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    {selectedProperty.label}
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

          {/* ================= ERROR ================= */}

          {error && (
            <section className="mt-4">

              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-3">

                <p className="text-[10px] font-medium text-red-400">
                  {error}
                </p>

              </div>

            </section>
          )}

          {/* ================= SECURITY ================= */}

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

        {/* ================= BOTTOM CTA ================= */}

        <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-[#071321]/95 px-3 py-3 backdrop-blur-xl">

          <div className="mx-auto flex w-full max-w-[430px] items-center gap-2">

            <div className="min-w-0 flex-1">

              <p className="text-[8px] text-gray-500">
                {selectedProperty.shortLabel} Vastu
              </p>

              <p
                className={`mt-0.5 truncate text-[12px] font-extrabold ${
                  consultationType ===
                  "whatsapp"
                    ? "text-green-400"
                    : "text-[#D4AF37]"
                }`}
              >
                ₹{formattedPrice}
              </p>

            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className={`flex h-12 min-w-0 flex-[1.55] items-center justify-center gap-2 rounded-xl px-2 text-[11px] font-extrabold shadow-lg active:scale-[0.98] ${
                consultationType ===
                "whatsapp"
                  ? "bg-green-500 text-black"
                  : "bg-[#D4AF37] text-black"
              }`}
            >

              {consultationType ===
              "whatsapp" ? (
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

/*
 * Suspense wrapper
 *
 * useSearchParams() ko Suspense ke andar rakhna
 * production build ke liye recommended hai.
 */
export default function VastuBooking() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#020b14] text-white">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#D4AF37] border-t-transparent" />

            <p className="mt-3 text-xs text-gray-400">
              Loading Vastu consultation...
            </p>
          </div>
        </main>
      }
    >
      <VastuBookingForm />
    </Suspense>
  );
}