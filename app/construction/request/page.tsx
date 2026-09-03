"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Home,
  IndianRupee,
  MapPin,
  Phone,
  Ruler,
  Sparkles,
  User,
  X,
} from "lucide-react";

const projectTypes = [
  {
    id: "independent-house",
    title: "Independent House",
    subtitle: "Complete residential construction",
    icon: Home,
  },
  {
    id: "duplex",
    title: "Duplex Home",
    subtitle: "Two-floor residential home",
    icon: Building2,
  },
  {
    id: "villa",
    title: "Villa",
    subtitle: "Premium custom construction",
    icon: Sparkles,
  },
  {
    id: "floor-construction",
    title: "Floor Construction",
    subtitle: "Additional floor construction",
    icon: Building2,
  },
  {
    id: "home-extension",
    title: "Home Extension",
    subtitle: "Extend your existing home",
    icon: Home,
  },
  {
    id: "custom-project",
    title: "Custom Project",
    subtitle: "Tell us your requirements",
    icon: Ruler,
  },
];

const plotSizes = [
  "Below 500 sq.ft",
  "500 - 1000 sq.ft",
  "1000 - 2000 sq.ft",
  "2000 - 3000 sq.ft",
  "Above 3000 sq.ft",
];

const floors = [
  "Ground Floor",
  "G + 1",
  "G + 2",
  "G + 3",
  "Custom",
];

const budgets = [
  "Below ₹10 Lakh",
  "₹10 - ₹25 Lakh",
  "₹25 - ₹50 Lakh",
  "₹50 Lakh - ₹1 Crore",
  "Above ₹1 Crore",
  "Need Expert Advice",
];

const timelines = [
  {
    id: "immediately",
    title: "Immediately",
    subtitle: "Ready to start soon",
  },
  {
    id: "1-3-months",
    title: "1 - 3 Months",
    subtitle: "Planning stage",
  },
  {
    id: "3-6-months",
    title: "3 - 6 Months",
    subtitle: "Future planning",
  },
  {
    id: "exploring",
    title: "Just Exploring",
    subtitle: "Need information first",
  },
];

/* =========================================================
   PAGE WRAPPER
========================================================= */

export default function ConstructionRequestPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen w-full bg-[#030303]">
          <div className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center bg-[#080808] text-white">
            <div className="text-center">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#DFAE45]" />

              <p className="mt-4 text-[11px] text-white/40">
                Loading request form...
              </p>
            </div>
          </div>
        </main>
      }
    >
      <ConstructionRequestContent />
    </Suspense>
  );
}

/* =========================================================
   MAIN CONTENT
========================================================= */

function ConstructionRequestContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const service = searchParams.get("service") || "construction";

  const serviceName = useMemo(() => {
    if (service === "home-construction") {
      return "Home Construction";
    }

    if (service === "renovation") {
      return "Home Renovation";
    }

    if (service === "interior") {
      return "Interior Work";
    }

    return "Construction";
  }, [service]);

  const [step, setStep] = useState(1);

  const [projectType, setProjectType] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [floor, setFloor] = useState("");

  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");

  const [timeline, setTimeline] = useState("");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const totalSteps = 5;

  const progress = (step / totalSteps) * 100;

  const canContinue = () => {
    if (step === 1) {
      return projectType !== "";
    }

    if (step === 2) {
      return plotSize !== "" && floor !== "";
    }

    if (step === 3) {
      return city.trim() !== "" && budget !== "";
    }

    if (step === 4) {
      return timeline !== "";
    }

    if (step === 5) {
      return (
        name.trim().length >= 2 &&
        mobile.trim().length === 10
      );
    }

    return false;
  };

  const handleNext = () => {
    if (!canContinue()) return;

    if (step < totalSteps) {
      setStep((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    handleSubmit();
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    router.back();
  };

  const handleSubmit = () => {
    const selectedProject =
      projectTypes.find(
        (item) => item.id === projectType
      )?.title || projectType;

    const selectedTimeline =
      timelines.find(
        (item) => item.id === timeline
      )?.title || timeline;

    const requestId = `OH-CON-${Date.now()
      .toString()
      .slice(-6)}`;

    const whatsappNumber = "918878632431";

    const message = `
🏗️ *NEW CONSTRUCTION REQUEST*

🆔 *Request ID:* ${requestId}

━━━━━━━━━━━━━━

🏠 *SERVICE*
${serviceName}

🏗️ *PROJECT TYPE*
${selectedProject}

📐 *PLOT SIZE*
${plotSize}

🏢 *FLOORS*
${floor}

📍 *CITY*
${city}

📌 *AREA / LOCALITY*
${area || "Not Provided"}

💰 *ESTIMATED BUDGET*
${budget}

📅 *PROJECT TIMELINE*
${selectedTimeline}

━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

👤 Name: ${name}

📱 Mobile: +91 ${mobile}

━━━━━━━━━━━━━━

⚡ *Request received from OurHub Website*
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    router.push(
      `/construction/request/success?service=${encodeURIComponent(
        service
      )}&id=${encodeURIComponent(requestId)}`
    );
  };

  return (
    <main className="min-h-screen w-full bg-[#030303]">
      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#080808] pb-[105px] text-white">

        {/* ================= HEADER ================= */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl">
          <div className="flex h-[62px] items-center justify-between px-4">

            <button
              type="button"
              onClick={handleBack}
              aria-label="Go back"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] active:scale-95"
            >
              <ArrowLeft size={21} />
            </button>

            <div className="text-center">
              <p className="text-[8px] font-bold uppercase tracking-[4px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                Project Request
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push("/construction")}
              aria-label="Close"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] active:scale-95"
            >
              <X size={19} />
            </button>
          </div>
        </header>

        {/* ================= SELECTED SERVICE ================= */}

        <section className="px-4 pt-5">
          <div className="rounded-[22px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.06] p-4">
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Building2
                  size={21}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                  YOUR SELECTED SERVICE
                </p>

                <h1 className="mt-1 text-[15px] font-semibold">
                  {serviceName}
                </h1>
              </div>

            </div>
          </div>
        </section>

        {/* ================= PROGRESS ================= */}

        <section className="px-4 pt-6">
          <div className="flex items-center justify-between">

            <p className="text-[10px] font-medium text-white/50">
              Step {step} of {totalSteps}
            </p>

            <p className="text-[10px] font-semibold text-[#DFAE45]">
              {Math.round(progress)}% Complete
            </p>

          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className="h-full rounded-full bg-[#DFAE45] transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </section>

        {/* ================= STEP 1 ================= */}

        {step === 1 && (
          <section className="px-4 pt-8">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              PROJECT DETAILS
            </p>

            <h2 className="mt-2 text-[24px] font-bold">
              What Do You Want
              <span className="block text-[#DFAE45]">
                To Build?
              </span>
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-white/45">
              Select the type of construction project you are planning.
            </p>

            <div className="mt-6 space-y-3">
              {projectTypes.map((item) => {
                const Icon = item.icon;

                const selected =
                  projectType === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setProjectType(item.id)
                    }
                    className={`flex w-full items-center gap-3 rounded-[20px] border p-4 text-left transition active:scale-[0.98] ${
                      selected
                        ? "border-[#DFAE45]/60 bg-[#DFAE45]/10"
                        : "border-white/[0.07] bg-[#111111]"
                    }`}
                  >

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                        selected
                          ? "bg-[#DFAE45] text-black"
                          : "bg-[#DFAE45]/10 text-[#DFAE45]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">

                      <h3 className="text-[13px] font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[10px] text-white/45">
                        {item.subtitle}
                      </p>

                    </div>

                    {selected ? (
                      <CheckCircle2
                        size={20}
                        className="text-[#DFAE45]"
                      />
                    ) : (
                      <ChevronRight
                        size={18}
                        className="text-white/25"
                      />
                    )}

                  </button>
                );
              })}
            </div>

          </section>
        )}

        {/* ================= STEP 2 ================= */}

        {step === 2 && (
          <section className="px-4 pt-8">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              PROPERTY DETAILS
            </p>

            <h2 className="mt-2 text-[24px] font-bold">
              Tell Us About
              <span className="block text-[#DFAE45]">
                Your Property
              </span>
            </h2>

            {/* PLOT SIZE */}

            <div className="mt-7">

              <div className="flex items-center gap-2">
                <Ruler
                  size={17}
                  className="text-[#DFAE45]"
                />

                <h3 className="text-[13px] font-semibold">
                  Plot Size
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">

                {plotSizes.map((size) => {
                  const selected =
                    plotSize === size;

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() =>
                        setPlotSize(size)
                      }
                      className={`rounded-2xl border px-3 py-4 text-left text-[11px] transition active:scale-[0.97] ${
                        selected
                          ? "border-[#DFAE45]/60 bg-[#DFAE45]/10 text-[#DFAE45]"
                          : "border-white/[0.07] bg-[#111111] text-white/65"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}

              </div>
            </div>

            {/* FLOORS */}

            <div className="mt-8">

              <div className="flex items-center gap-2">
                <Building2
                  size={17}
                  className="text-[#DFAE45]"
                />

                <h3 className="text-[13px] font-semibold">
                  Number Of Floors
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">

                {floors.map((item) => {
                  const selected =
                    floor === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setFloor(item)
                      }
                      className={`rounded-2xl border px-3 py-4 text-left text-[11px] transition active:scale-[0.97] ${
                        selected
                          ? "border-[#DFAE45]/60 bg-[#DFAE45]/10 text-[#DFAE45]"
                          : "border-white/[0.07] bg-[#111111] text-white/65"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}

              </div>
            </div>

          </section>
        )}

        {/* ================= STEP 3 ================= */}

        {step === 3 && (
          <section className="px-4 pt-8">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              LOCATION & BUDGET
            </p>

            <h2 className="mt-2 text-[24px] font-bold">
              Where Is Your
              <span className="block text-[#DFAE45]">
                Project Located?
              </span>
            </h2>

            {/* CITY */}

            <div className="mt-7">

              <label className="text-[12px] font-semibold">
                City
              </label>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111111] px-4">

                <MapPin
                  size={18}
                  className="text-[#DFAE45]"
                />

                <input
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  placeholder="Enter your city"
                  className="h-[52px] w-full bg-transparent text-[12px] outline-none placeholder:text-white/25"
                />

              </div>

            </div>

            {/* AREA */}

            <div className="mt-5">

              <label className="text-[12px] font-semibold">
                Area / Locality
                <span className="ml-1 text-white/35">
                  (Optional)
                </span>
              </label>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111111] px-4">

                <MapPin
                  size={18}
                  className="text-[#DFAE45]"
                />

                <input
                  value={area}
                  onChange={(e) =>
                    setArea(e.target.value)
                  }
                  placeholder="Enter area or locality"
                  className="h-[52px] w-full bg-transparent text-[12px] outline-none placeholder:text-white/25"
                />

              </div>

            </div>

            {/* BUDGET */}

            <div className="mt-8">

              <div className="flex items-center gap-2">

                <IndianRupee
                  size={17}
                  className="text-[#DFAE45]"
                />

                <h3 className="text-[13px] font-semibold">
                  Estimated Budget
                </h3>

              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">

                {budgets.map((item) => {
                  const selected =
                    budget === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setBudget(item)
                      }
                      className={`rounded-2xl border px-3 py-4 text-left text-[10px] transition active:scale-[0.97] ${
                        selected
                          ? "border-[#DFAE45]/60 bg-[#DFAE45]/10 text-[#DFAE45]"
                          : "border-white/[0.07] bg-[#111111] text-white/65"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}

              </div>

            </div>

          </section>
        )}

        {/* ================= STEP 4 ================= */}

        {step === 4 && (
          <section className="px-4 pt-8">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              PROJECT TIMELINE
            </p>

            <h2 className="mt-2 text-[24px] font-bold">
              When Do You Plan
              <span className="block text-[#DFAE45]">
                To Start?
              </span>
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-white/45">
              This helps us connect you with the right construction expert.
            </p>

            <div className="mt-7 space-y-3">

              {timelines.map((item) => {

                const selected =
                  timeline === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setTimeline(item.id)
                    }
                    className={`flex w-full items-center gap-3 rounded-[20px] border p-4 text-left transition active:scale-[0.98] ${
                      selected
                        ? "border-[#DFAE45]/60 bg-[#DFAE45]/10"
                        : "border-white/[0.07] bg-[#111111]"
                    }`}
                  >

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                        selected
                          ? "bg-[#DFAE45] text-black"
                          : "bg-[#DFAE45]/10 text-[#DFAE45]"
                      }`}
                    >
                      <CalendarDays size={20} />
                    </div>

                    <div className="flex-1">

                      <h3 className="text-[13px] font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[10px] text-white/45">
                        {item.subtitle}
                      </p>

                    </div>

                    {selected && (
                      <CheckCircle2
                        size={20}
                        className="text-[#DFAE45]"
                      />
                    )}

                  </button>
                );
              })}

            </div>

          </section>
        )}

        {/* ================= STEP 5 ================= */}

        {step === 5 && (
          <section className="px-4 pt-8">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              CONTACT DETAILS
            </p>

            <h2 className="mt-2 text-[24px] font-bold">
              Where Should Our Expert
              <span className="block text-[#DFAE45]">
                Contact You?
              </span>
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-white/45">
              Our construction expert will contact you regarding your project.
            </p>

            {/* NAME */}

            <div className="mt-8">

              <label className="text-[12px] font-semibold">
                Your Name
              </label>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111111] px-4">

                <User
                  size={18}
                  className="text-[#DFAE45]"
                />

                <input
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Enter your name"
                  className="h-[52px] w-full bg-transparent text-[12px] outline-none placeholder:text-white/25"
                />

              </div>

            </div>

            {/* MOBILE */}

            <div className="mt-5">

              <label className="text-[12px] font-semibold">
                Mobile Number
              </label>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111111] px-4">

                <Phone
                  size={18}
                  className="text-[#DFAE45]"
                />

                <span className="border-r border-white/[0.08] pr-3 text-[11px] text-white/55">
                  +91
                </span>

                <input
                  value={mobile}
                  onChange={(e) =>
                    setMobile(
                      e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10)
                    )
                  }
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Enter mobile number"
                  className="h-[52px] w-full bg-transparent text-[12px] outline-none placeholder:text-white/25"
                />

              </div>

            </div>

            {/* REQUEST SUMMARY */}

            <div className="mt-8 rounded-[22px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.05] p-4">

              <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                REQUEST SUMMARY
              </p>

              <div className="mt-4 space-y-3">

                <SummaryRow
                  label="Service"
                  value={serviceName}
                />

                <SummaryRow
                  label="Project"
                  value={
                    projectTypes.find(
                      (item) =>
                        item.id === projectType
                    )?.title || "-"
                  }
                />

                <SummaryRow
                  label="Plot Size"
                  value={plotSize}
                />

                <SummaryRow
                  label="Budget"
                  value={budget}
                />

                <SummaryRow
                  label="City"
                  value={city}
                />

              </div>

            </div>

            <p className="mt-4 text-center text-[9px] leading-4 text-white/35">
              By submitting this request, you agree to be contacted
              regarding your construction project.
            </p>

          </section>
        )}

        <div className="h-8" />

      </div>

      {/* ================= STICKY BUTTON ================= */}

      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#080808]/95 backdrop-blur-xl">

        <div className="mx-auto w-full max-w-[430px] border-t border-white/[0.07] px-4 py-3">

          <button
            type="button"
            disabled={!canContinue()}
            onClick={handleNext}
            className={`flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl text-[13px] font-bold transition ${
              canContinue()
                ? "bg-[#DFAE45] text-black active:scale-[0.98]"
                : "cursor-not-allowed bg-white/[0.07] text-white/25"
            }`}
          >

            {step === totalSteps ? (
              <>
                Submit Project Request

                <CheckCircle2 size={18} />
              </>
            ) : (
              <>
                Continue

                <ArrowRight size={18} />
              </>
            )}

          </button>

        </div>

      </div>
    </main>
  );
}

/* =========================================================
   SUMMARY ROW
========================================================= */

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">

      <span className="text-[10px] text-white/40">
        {label}
      </span>

      <span className="max-w-[190px] truncate text-right text-[10px] font-medium text-white/75">
        {value || "-"}
      </span>

    </div>
  );
}