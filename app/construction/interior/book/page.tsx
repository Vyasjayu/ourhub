
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Home,
  MapPin,
  Phone,
  User,
  Wallet,
} from "lucide-react";

export default function InteriorBookingPage() {
  const router = useRouter();

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "Indore",
    propertyType: "",
    service: "",
    rooms: "",
    budget: "",
    timeline: "",
  });

  const update = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      alert("Please enter a valid mobile number");
      return;
    }

    if (!form.propertyType) {
      alert("Please select property type");
      return;
    }

    if (!form.service) {
      alert("Please select interior service");
      return;
    }

    setSubmitted(true);
  };

  /* ============================================================
     SUCCESS
  ============================================================ */

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#020202]">

        <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[#070707] px-4 text-white">

          <header className="flex h-[56px] items-center justify-between border-b border-white/[0.08]">

            <button
              onClick={() => router.back()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            >
              <ArrowLeft size={17} />
            </button>

            <div className="text-center">
              <p className="text-[7px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="text-[12px] font-semibold">
                Interior
              </p>
            </div>

            <div className="w-9" />

          </header>

          <div className="flex flex-1 flex-col items-center justify-center pb-20 text-center">

            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">

              <CheckCircle2
                size={40}
                className="text-[#DFAE45]"
              />

            </div>

            <p className="mt-7 text-[8px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
              REQUEST RECEIVED
            </p>

            <h1 className="mt-2 text-[25px] font-bold">
              Thank You!
            </h1>

            <p className="mt-3 max-w-[300px] text-[11px] leading-5 text-white/45">
              Your interior consultation request has been
              successfully submitted.
            </p>

            <div className="mt-7 w-full rounded-[20px] border border-white/10 bg-white/[0.035] p-4 text-left">

              <p className="text-[8px] font-bold uppercase tracking-[2px] text-white/30">
                WHAT HAPPENS NEXT
              </p>

              <div className="mt-4 space-y-3">

                <NextStep
                  number="01"
                  text="Our interior expert will review your requirement."
                />

                <NextStep
                  number="02"
                  text="You will receive a call regarding your project."
                />

                <NextStep
                  number="03"
                  text="Discuss design, budget and project timeline."
                />

              </div>

            </div>

            <button
              onClick={() => router.push("/construction/interior")}
              className="mt-6 flex h-[48px] w-full items-center justify-center gap-2 rounded-[15px] bg-[#DFAE45] text-[12px] font-bold text-black"
            >
              Back To Interior
              <ArrowRight size={15} />
            </button>

          </div>

        </div>

      </main>
    );
  }

  /* ============================================================
     BOOKING FORM
  ============================================================ */

  return (
    <main className="min-h-screen bg-[#020202]">

      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#070707] text-white">

        {/* ======================================================
            HEADER
        ======================================================= */}

        <header className="sticky top-0 z-50 h-[56px] border-b border-white/[0.08] bg-[#070707]/95 backdrop-blur-xl">

          <div className="flex h-full items-center justify-between px-4">

            <button
              onClick={() => router.back()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            >
              <ArrowLeft size={17} />
            </button>

            <div className="text-center">

              <p className="text-[7px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="text-[12px] font-semibold">
                Interior Consultation
              </p>

            </div>

            <div className="w-9" />

          </div>

        </header>

        {/* ======================================================
            CONTENT
        ======================================================= */}

        <form onSubmit={submitForm}>

          <div className="px-4 pb-[100px]">

            {/* ==================================================
                TITLE
            =================================================== */}

            <section className="pt-5">

              <div className="flex items-center gap-2">

                <span className="h-px w-6 bg-[#DFAE45]/50" />

                <span className="text-[7px] font-bold uppercase tracking-[2.5px] text-[#DFAE45]">
                  GET STARTED
                </span>

              </div>

              <h1 className="mt-2 text-[25px] font-bold tracking-[-0.5px]">
                Tell Us About Your Home
              </h1>

              <p className="mt-1.5 text-[10px] leading-[17px] text-white/35">
                Share a few details and our interior expert
                will contact you.
              </p>

            </section>

            {/* ==================================================
                CONTACT DETAILS
            =================================================== */}

            <section className="mt-6">

              <SectionTitle
                number="01"
                title="Contact Details"
              />

              <div className="mt-3 space-y-3">

                <Input
                  label="Your Name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(value) => update("name", value)}
                  icon={<User size={15} />}
                />

                {/* MOBILE */}

                <div>

                  <label className="mb-1.5 block text-[9px] font-semibold text-white/50">
                    Mobile Number
                  </label>

                  <div className="flex h-[48px] overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.035] focus-within:border-[#DFAE45]/40">

                    <div className="flex w-[52px] items-center justify-center border-r border-white/10 text-[10px] text-white/50">
                      +91
                    </div>

                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="Enter mobile number"
                      value={form.mobile}
                      onChange={(e) =>
                        update(
                          "mobile",
                          e.target.value.replace(/\D/g, "")
                        )
                      }
                      className="min-w-0 flex-1 bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-white/20"
                    />

                    <div className="flex w-10 items-center justify-center text-white/20">
                      <Phone size={15} />
                    </div>

                  </div>

                </div>

                {/* CITY */}

                <Select
                  label="City"
                  value={form.city}
                  onChange={(value) => update("city", value)}
                  options={[
                    "Indore",
                    "Ujjain",
                    "Ratlam",
                  ]}
                  icon={<MapPin size={15} />}
                />

              </div>

            </section>

            {/* ==================================================
                PROPERTY
            =================================================== */}

            <section className="mt-7">

              <SectionTitle
                number="02"
                title="Property Details"
              />

              <div className="mt-3 space-y-3">

                <Select
                  label="Property Type"
                  value={form.propertyType}
                  onChange={(value) =>
                    update("propertyType", value)
                  }
                  placeholder="Select property type"
                  options={[
                    "2 BHK Apartment",
                    "3 BHK Apartment",
                    "4 BHK Apartment",
                    "Independent House",
                    "Villa",
                    "Office / Commercial",
                  ]}
                  icon={<Home size={15} />}
                />

                <Select
                  label="Number of Rooms"
                  value={form.rooms}
                  onChange={(value) =>
                    update("rooms", value)
                  }
                  placeholder="Select rooms"
                  options={[
                    "1–2 Rooms",
                    "3–4 Rooms",
                    "5–6 Rooms",
                    "Full Home",
                  ]}
                  icon={<Home size={15} />}
                />

              </div>

            </section>

            {/* ==================================================
                REQUIREMENT
            =================================================== */}

            <section className="mt-7">

              <SectionTitle
                number="03"
                title="Interior Requirement"
              />

              <div className="mt-3">

                <label className="mb-2 block text-[9px] font-semibold text-white/50">
                  What do you need?
                </label>

                <div className="grid grid-cols-2 gap-2">

                  {[
                    "Complete Interior",
                    "Modular Kitchen",
                    "Living Room",
                    "Bedroom",
                    "False Ceiling",
                    "Painting & Décor",
                  ].map((item) => {

                    const active =
                      form.service === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          update("service", item)
                        }
                        className={`min-h-[47px] rounded-[13px] border px-2 text-left text-[9px] font-semibold transition ${
                          active
                            ? "border-[#DFAE45]/60 bg-[#DFAE45]/10 text-[#DFAE45]"
                            : "border-white/10 bg-white/[0.035] text-white/55"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">

                          <span>
                            {item}
                          </span>

                          {active && (
                            <Check
                              size={13}
                              className="shrink-0 text-[#DFAE45]"
                            />
                          )}

                        </div>
                      </button>
                    );

                  })}

                </div>

              </div>

            </section>

            {/* ==================================================
                BUDGET
            =================================================== */}

            <section className="mt-7">

              <SectionTitle
                number="04"
                title="Budget & Timeline"
              />

              <div className="mt-3 space-y-3">

                <Select
                  label="Estimated Interior Budget"
                  value={form.budget}
                  onChange={(value) =>
                    update("budget", value)
                  }
                  placeholder="Select your budget"
                  options={[
                    "₹2 – ₹5 Lakhs",
                    "₹5 – ₹10 Lakhs",
                    "₹10 – ₹15 Lakhs",
                    "₹15 – ₹25 Lakhs",
                    "₹25 Lakhs+",
                  ]}
                  icon={<Wallet size={15} />}
                />

                <Select
                  label="When do you want to start?"
                  value={form.timeline}
                  onChange={(value) =>
                    update("timeline", value)
                  }
                  placeholder="Select timeline"
                  options={[
                    "Immediately",
                    "Within 1 Month",
                    "1–3 Months",
                    "3–6 Months",
                    "Just Exploring",
                  ]}
                  icon={<MapPin size={15} />}
                />

              </div>

            </section>

            {/* ==================================================
                SUMMARY
            =================================================== */}

            <section className="mt-7">

              <div className="rounded-[18px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.035] p-4">

                <div className="flex items-center gap-2">

                  <ShieldIcon />

                  <div>

                    <p className="text-[7px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                      OURHUB PROMISE
                    </p>

                    <p className="mt-1 text-[11px] font-semibold">
                      No pressure. Just expert guidance.
                    </p>

                  </div>

                </div>

                <div className="mt-3 space-y-2">

                  <Promise text="Verified interior experts" />

                  <Promise text="Transparent estimates" />

                  <Promise text="Designed around your budget" />

                </div>

              </div>

            </section>

          </div>

          {/* ====================================================
              STICKY SUBMIT
          ===================================================== */}

          <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-[#070707]/95 px-3 py-2.5 backdrop-blur-xl">

            <div className="mx-auto w-full max-w-[430px]">

              <button
                type="submit"
                className="flex h-[53px] w-full items-center justify-between rounded-[17px] bg-[#DFAE45] px-4 text-black shadow-[0_8px_30px_rgba(223,174,69,0.15)] active:scale-[0.98]"
              >

                <div className="text-left">

                  <p className="text-[7px] font-bold uppercase tracking-[2px] opacity-50">
                    FREE CONSULTATION
                  </p>

                  <p className="mt-[2px] text-[13px] font-extrabold">
                    Submit Requirement
                  </p>

                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">

                  <ArrowRight size={16} />

                </div>

              </button>

            </div>

          </div>

        </form>

      </div>

    </main>
  );
}

/* ============================================================
   SECTION TITLE
============================================================ */

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2.5">

      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DFAE45]/10 text-[8px] font-bold text-[#DFAE45]">
        {number}
      </div>

      <h2 className="text-[14px] font-bold">
        {title}
      </h2>

    </div>
  );
}

/* ============================================================
   INPUT
============================================================ */

function Input({
  label,
  placeholder,
  value,
  onChange,
  icon,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: React.ReactNode;
}) {
  return (
    <div>

      <label className="mb-1.5 block text-[9px] font-semibold text-white/50">
        {label}
      </label>

      <div className="flex h-[48px] items-center rounded-[14px] border border-white/10 bg-white/[0.035] px-3 focus-within:border-[#DFAE45]/40">

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-[11px] text-white outline-none placeholder:text-white/20"
        />

        <div className="text-white/20">
          {icon}
        </div>

      </div>

    </div>
  );
}

/* ============================================================
   SELECT
============================================================ */

function Select({
  label,
  value,
  onChange,
  options,
  placeholder = "Select",
  icon,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  icon: React.ReactNode;
}) {
  return (
    <div>

      <label className="mb-1.5 block text-[9px] font-semibold text-white/50">
        {label}
      </label>

      <div className="relative">

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-[48px] w-full appearance-none rounded-[14px] border border-white/10 bg-white/[0.035] px-10 pr-10 text-[11px] outline-none ${
            value
              ? "text-white"
              : "text-white/20"
          } focus:border-[#DFAE45]/40`}
        >

          <option
            value=""
            disabled
            className="bg-[#111] text-white/50"
          >
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[#111] text-white"
            >
              {option}
            </option>
          ))}

        </select>

        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/20">
          {icon}
        </div>

        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/25"
        />

      </div>

    </div>
  );
}

/* ============================================================
   PROMISE
============================================================ */

function Promise({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">

      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DFAE45]/10">

        <Check
          size={9}
          className="text-[#DFAE45]"
          strokeWidth={3}
        />

      </div>

      <span className="text-[9px] text-white/45">
        {text}
      </span>

    </div>
  );
}

/* ============================================================
   NEXT STEP
============================================================ */

function NextStep({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-2.5">

      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#DFAE45]/10 text-[8px] font-bold text-[#DFAE45]">
        {number}
      </div>

      <p className="pt-1 text-[9px] leading-4 text-white/45">
        {text}
      </p>

    </div>
  );
}

/* ============================================================
   SHIELD
============================================================ */

function ShieldIcon() {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">

      <ShieldCheck
        size={17}
        className="text-[#DFAE45]"
      />

    </div>
  );
}

/* ============================================================
   SHIELD IMPORT FIX
============================================================ */

function ShieldCheck({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

