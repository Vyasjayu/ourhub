"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bath,
  BedDouble,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Hammer,
  Home,
  IndianRupee,
  Layers3,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const renovationServices = [
  {
    title: "Complete Home Renovation",
    subtitle: "Transform your entire home",
    icon: Home,
  },
  {
    title: "Kitchen Renovation",
    subtitle: "Modern & functional kitchen upgrade",
    icon: Layers3,
  },
  {
    title: "Bathroom Renovation",
    subtitle: "Upgrade your bathroom space",
    icon: Bath,
  },
  {
    title: "Bedroom Renovation",
    subtitle: "Refresh your personal space",
    icon: BedDouble,
  },
  {
    title: "Painting & Finishing",
    subtitle: "Give your home a fresh look",
    icon: Paintbrush,
  },
  {
    title: "Repair & Renovation",
    subtitle: "Fix and improve your property",
    icon: Wrench,
  },
];

const renovationPackages = [
  {
    name: "Basic Refresh",
    subtitle: "For essential upgrades",
    price: "₹49,999",
    features: [
      "Basic repair work",
      "Standard painting",
      "Essential upgrades",
      "Professional support",
    ],
  },
  {
    name: "Premium Renovation",
    subtitle: "Most popular choice",
    price: "Custom",
    popular: true,
    features: [
      "Complete renovation planning",
      "Premium material options",
      "Modern design support",
      "Quality supervision",
    ],
  },
  {
    name: "Luxury Makeover",
    subtitle: "Complete premium transformation",
    price: "Custom",
    features: [
      "Premium renovation design",
      "High-end material options",
      "Custom work solutions",
      "Dedicated project support",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us what part of your home you want to renovate.",
    icon: Hammer,
  },
  {
    number: "02",
    title: "Expert Consultation",
    description:
      "Our renovation expert understands your requirements.",
    icon: Phone,
  },
  {
    number: "03",
    title: "Get Estimate",
    description:
      "Receive a project estimate based on your renovation needs.",
    icon: IndianRupee,
  },
  {
    number: "04",
    title: "Start Renovation",
    description:
      "Finalize the plan and start transforming your space.",
    icon: Sparkles,
  },
];

export default function ConstructionRenovationPage() {
  const router = useRouter();

  const handleRequest = () => {
    router.push(
      "/construction/request?service=renovation"
    );
  };

  return (
    <main className="min-h-screen w-full bg-[#030303]">
      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#080808] pb-[100px] text-white">
        {/* ================= HEADER ================= */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl">
          <div className="flex h-[62px] items-center justify-between px-4">
            <button
              type="button"
              onClick={() => router.back()}
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
                Home Renovation
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                window.location.href = "tel:+918878632431"
              }
              aria-label="Call"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10"
            >
              <Phone
                size={18}
                className="text-[#DFAE45]"
              />
            </button>
          </div>
        </header>

        {/* ================= HERO ================= */}

        <section className="px-4 pt-5">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#19140D] via-[#111111] to-[#080808]">
            {/* Background glow */}

            <div className="absolute -right-20 -top-20 h-[230px] w-[230px] rounded-full bg-[#DFAE45]/20 blur-[80px]" />

            <div className="absolute -bottom-20 -left-20 h-[180px] w-[180px] rounded-full bg-orange-500/10 blur-[80px]" />

            <div className="relative p-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-3 py-1.5">
                <Hammer
                  size={13}
                  className="text-[#DFAE45]"
                />

                <span className="text-[9px] font-semibold text-[#E6C36A]">
                  TRANSFORM YOUR SPACE
                </span>
              </div>

              <h1 className="mt-5 text-[30px] font-bold leading-[1.1] tracking-tight">
                Give Your Home
                <span className="block text-[#DFAE45]">
                  A New Life
                </span>
              </h1>

              <p className="mt-4 max-w-[315px] text-[12px] leading-6 text-white/55">
                From small upgrades to complete home transformation,
                find the right professionals for your renovation
                project.
              </p>

              {/* TRUST CARDS */}

              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <Hammer
                    size={18}
                    className="text-[#DFAE45]"
                  />

                  <p className="mt-2 text-[10px] font-semibold">
                    Experts
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    Skilled Team
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <ShieldCheck
                    size={18}
                    className="text-[#DFAE45]"
                  />

                  <p className="mt-2 text-[10px] font-semibold">
                    Quality
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    Assured
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <Clock3
                    size={18}
                    className="text-[#DFAE45]"
                  />

                  <p className="mt-2 text-[10px] font-semibold">
                    Support
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    Project Help
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleRequest}
                className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
              >
                Get Free Renovation Estimate

                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* ================= RENOVATION SERVICES ================= */}

        <section className="mt-9">
          <div className="px-4">
            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              WHAT DO YOU WANT TO RENOVATE?
            </p>

            <h2 className="mt-1 text-[21px] font-bold">
              Renovation Services
            </h2>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {renovationServices.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={handleRequest}
                  className="min-w-[160px] rounded-[21px] border border-white/[0.07] bg-[#111111] p-4 text-left active:scale-[0.97]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                    <Icon
                      size={20}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <h3 className="mt-4 text-[12px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[9px] leading-4 text-white/40">
                    {item.subtitle}
                  </p>

                  <div className="mt-3 flex items-center text-[9px] text-[#DFAE45]">
                    Explore

                    <ChevronRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ================= PACKAGES ================= */}

        <section className="mt-10 px-4">
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            RENOVATION PACKAGES
          </p>

          <div className="mt-1 flex items-end justify-between">
            <h2 className="text-[21px] font-bold">
              Renovation Options
            </h2>

            <span className="text-[9px] text-white/40">
              Flexible Pricing
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {renovationPackages.map((pkg) => (
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

                  <p className="text-[18px] font-bold text-[#DFAE45]">
                    {pkg.price}
                  </p>
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
                  onClick={handleRequest}
                  className={`mt-5 flex h-[46px] w-full items-center justify-center gap-2 rounded-xl text-[11px] font-bold ${
                    pkg.popular
                      ? "bg-[#DFAE45] text-black"
                      : "border border-[#DFAE45]/20 bg-[#DFAE45]/10 text-[#DFAE45]"
                  }`}
                >
                  Get Free Estimate

                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>

          <p className="mt-3 text-center text-[9px] leading-4 text-white/35">
            Final cost depends on property condition, renovation scope,
            materials and location.
          </p>
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
                  WHY OURHUB
                </p>

                <h2 className="mt-1 text-[17px] font-bold">
                  Renovate With Confidence
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {[
                "Professional renovation experts",
                "Transparent project discussion",
                "Flexible renovation solutions",
                "Quality-focused project support",
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
            How Renovation Works
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

        {/* ================= FINAL CTA ================= */}

        <section className="mt-10 px-4">
          <div className="rounded-[27px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.06] p-5 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <Sparkles
                size={22}
                className="text-[#DFAE45]"
              />
            </div>

            <h2 className="mt-4 text-[19px] font-bold">
              Ready To Transform
              <span className="block text-[#DFAE45]">
                Your Home?
              </span>
            </h2>

            <p className="mt-3 text-[11px] leading-5 text-white/45">
              Share your renovation requirements and get connected
              with a suitable professional.
            </p>

            <button
              type="button"
              onClick={handleRequest}
              className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
            >
              Start My Renovation Request

              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        <div className="h-8" />
      </div>

      {/* ================= STICKY CTA ================= */}

      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#080808]/95 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-[430px] border-t border-white/[0.07] px-4 py-3">
          <button
            type="button"
            onClick={handleRequest}
            className="flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
          >
            <Hammer size={18} />

            Get Free Renovation Estimate

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}