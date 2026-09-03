"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  HardHat,
  Home,
  IndianRupee,
  Layers3,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
} from "lucide-react";

const packages = [
  {
    name: "Basic",
    subtitle: "Essential construction package",
    price: "₹1,699",
    unit: "/ sq.ft",
    features: [
      "Standard quality materials",
      "Professional execution",
      "Basic elevation",
      "Project supervision",
    ],
  },
  {
    name: "Premium",
    subtitle: "Most popular for modern homes",
    price: "₹2,199",
    unit: "/ sq.ft",
    popular: true,
    features: [
      "Premium quality materials",
      "Modern elevation design",
      "Dedicated project support",
      "Regular quality checks",
    ],
  },
  {
    name: "Luxury",
    subtitle: "Premium finish & customization",
    price: "Custom",
    unit: " quotation",
    features: [
      "High-end materials",
      "Custom architectural design",
      "Premium interiors support",
      "Dedicated project manager",
    ],
  },
];

const includes = [
  {
    title: "Planning & Design",
    description: "Space planning and construction guidance",
    icon: Ruler,
  },
  {
    title: "Quality Materials",
    description: "Reliable materials based on your package",
    icon: Layers3,
  },
  {
    title: "Professional Team",
    description: "Experienced construction professionals",
    icon: HardHat,
  },
  {
    title: "Project Support",
    description: "Regular updates throughout the project",
    icon: ClipboardList,
  },
];

const projectTypes = [
  "Independent House",
  "Duplex Home",
  "Villa",
  "Floor Construction",
  "Home Extension",
  "Custom Project",
];

const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description: "Tell us your plot size, location and construction needs.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Get Expert Consultation",
    description: "Our construction expert will understand your project.",
    icon: Phone,
  },
  {
    number: "03",
    title: "Receive Estimate",
    description: "Get a transparent estimate based on your requirements.",
    icon: Wallet,
  },
  {
    number: "04",
    title: "Start Construction",
    description: "Finalize the plan and begin your dream home project.",
    icon: Building2,
  },
];

export default function HomeConstructionPage() {
  const router = useRouter();

  const handleGetEstimate = () => {
    router.push("/construction/request?service=home-construction");
  };

  return (
    <main className="min-h-screen w-full bg-[#030303]">
      {/* MOBILE CONTAINER */}

      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#080808] pb-[95px] text-white">
        {/* ================= HEADER ================= */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl">
          <div className="flex h-[62px] items-center justify-between px-4">
            {/* BACK */}

            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] active:scale-95"
            >
              <ArrowLeft size={21} />
            </button>

            {/* TITLE */}

            <div className="text-center">
              <p className="text-[8px] font-bold uppercase tracking-[4px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                Home Construction
              </p>
            </div>

            {/* CALL */}

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10"
            >
              <Phone size={18} className="text-[#DFAE45]" />
            </button>
          </div>
        </header>

        {/* ================= HERO ================= */}

        <section className="px-4 pt-5">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#18140D] via-[#101010] to-[#080808]">
            {/* BACKGROUND */}

            <div className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#DFAE45]/20 blur-[80px]" />

            <div className="absolute -bottom-24 -left-20 h-[190px] w-[190px] rounded-full bg-orange-500/10 blur-[80px]" />

            <div className="relative p-5">
              {/* BADGE */}

              <div className="inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-3 py-1.5">
                <Home size={13} className="text-[#DFAE45]" />

                <span className="text-[9px] font-semibold text-[#E6C36A]">
                  YOUR DREAM HOME STARTS HERE
                </span>
              </div>

              {/* HEADING */}

              <h1 className="mt-5 text-[31px] font-bold leading-[1.1] tracking-tight">
                Build Your Dream
                <span className="block text-[#DFAE45]">
                  Home With Experts
                </span>
              </h1>

              {/* TEXT */}

              <p className="mt-4 max-w-[310px] text-[12px] leading-6 text-white/55">
                From planning and design to construction and handover,
                get professional support for your complete home project.
              </p>

              {/* TRUST ROW */}

              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <HardHat size={18} className="text-[#DFAE45]" />

                  <p className="mt-2 text-[10px] font-semibold">
                    Experts
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    Verified Team
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <ShieldCheck size={18} className="text-[#DFAE45]" />

                  <p className="mt-2 text-[10px] font-semibold">
                    Quality
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    Assured
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <Clock3 size={18} className="text-[#DFAE45]" />

                  <p className="mt-2 text-[10px] font-semibold">
                    Support
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    Project Help
                  </p>
                </div>
              </div>

              {/* BUTTON */}

              <button
                type="button"
                onClick={handleGetEstimate}
                className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
              >
                Get Free Estimate

                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* ================= PROJECT TYPE ================= */}

        <section className="mt-9">
          <div className="px-4">
            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              WHAT DO YOU WANT TO BUILD?
            </p>

            <h2 className="mt-1 text-[21px] font-bold">
              Choose Your Project
            </h2>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {projectTypes.map((type, index) => (
              <button
                key={type}
                type="button"
                onClick={handleGetEstimate}
                className="min-w-[145px] rounded-[20px] border border-white/[0.07] bg-[#111111] p-4 text-left active:scale-[0.97]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  {index % 2 === 0 ? (
                    <Home size={19} className="text-[#DFAE45]" />
                  ) : (
                    <Building2 size={19} className="text-[#DFAE45]" />
                  )}
                </div>

                <p className="mt-4 text-[12px] font-semibold">
                  {type}
                </p>

                <div className="mt-3 flex items-center text-[9px] text-[#DFAE45]">
                  Explore

                  <ChevronRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ================= PACKAGES ================= */}

        <section className="mt-10 px-4">
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            CONSTRUCTION PACKAGES
          </p>

          <div className="mt-1 flex items-end justify-between">
            <h2 className="text-[21px] font-bold">
              Choose Your Package
            </h2>

            <span className="text-[9px] text-white/40">
              Indicative Pricing
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative overflow-hidden rounded-[24px] border p-5 ${
                  pkg.popular
                    ? "border-[#DFAE45]/40 bg-gradient-to-br from-[#1C170C] to-[#111111]"
                    : "border-white/[0.07] bg-[#111111]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-0 rounded-b-xl bg-[#DFAE45] px-3 py-1.5">
                    <span className="text-[8px] font-bold text-black">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[17px] font-bold">
                      {pkg.name}
                    </h3>

                    <p className="mt-1 text-[10px] text-white/45">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[19px] font-bold text-[#DFAE45]">
                      {pkg.price}
                    </p>

                    <p className="text-[9px] text-white/40">
                      {pkg.unit}
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-white/[0.07]" />

                <div className="space-y-3">
                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={15}
                        className="shrink-0 text-[#DFAE45]"
                      />

                      <span className="text-[11px] text-white/65">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleGetEstimate}
                  className={`mt-5 flex h-[46px] w-full items-center justify-center gap-2 rounded-xl text-[11px] font-bold ${
                    pkg.popular
                      ? "bg-[#DFAE45] text-black"
                      : "border border-[#DFAE45]/20 bg-[#DFAE45]/10 text-[#DFAE45]"
                  }`}
                >
                  Get Estimate

                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>

          <p className="mt-3 text-center text-[9px] leading-4 text-white/35">
            Final pricing may vary depending on location, design,
            material selection and project requirements.
          </p>
        </section>

        {/* ================= WHAT'S INCLUDED ================= */}

        <section className="mt-10 px-4">
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            COMPLETE SUPPORT
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            What's Included?
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {includes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-white/[0.07] bg-[#111111] p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                    <Icon
                      size={19}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <h3 className="mt-4 text-[12px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[9px] leading-4 text-white/45">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= WHY CHOOSE ================= */}

        <section className="mt-10 px-4">
          <div className="rounded-[26px] border border-[#DFAE45]/15 bg-gradient-to-b from-[#17130D] to-[#0E0E0E] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <ShieldCheck
                  size={22}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                  WHY CHOOSE OURHUB
                </p>

                <h2 className="mt-1 text-[17px] font-bold">
                  Build With Confidence
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {[
                "Verified construction professionals",
                "Transparent project estimates",
                "Quality-focused execution",
                "Dedicated project assistance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <BadgeCheck
                    size={17}
                    className="text-[#DFAE45]"
                  />

                  <p className="text-[11px] text-white/65">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}

        <section className="mt-10 px-4">
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            SIMPLE PROCESS
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            How It Works
          </h2>

          <div className="mt-6 space-y-6">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="relative flex gap-4"
                >
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[21px] top-[45px] h-[60px] w-px bg-[#DFAE45]/20" />
                  )}

                  <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                    <Icon
                      size={19}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold tracking-[2px] text-[#DFAE45]/70">
                      STEP {item.number}
                    </p>

                    <h3 className="mt-1 text-[13px] font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/45">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= LOCATION CTA ================= */}

        <section className="mt-10 px-4">
          <div className="rounded-[26px] border border-white/[0.07] bg-[#111111] p-5">
            <div className="flex gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <MapPin
                  size={20}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[14px] font-semibold">
                  Ready To Build Your Home?
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-white/45">
                  Share your project details and get connected with
                  construction professionals in your area.
                </p>

                <button
                  type="button"
                  onClick={handleGetEstimate}
                  className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#DFAE45]"
                >
                  Check Availability

                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= MOBILE STICKY CTA ================= */}

      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#080808]/95 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-[430px] border-t border-white/[0.07] px-4 py-3">
          <button
            type="button"
            onClick={handleGetEstimate}
            className="flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
          >
            <IndianRupee size={17} />

            Get Free Construction Estimate

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}