"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Hammer,
  HardHat,
  Home,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

const categories = [
  {
    title: "Home Construction",
    subtitle: "Build your dream home",
    icon: Home,
    href: "/construction/home",
  },
  {
    title: "Renovation",
    subtitle: "Upgrade your space",
    icon: Hammer,
    href: "/construction/renovation",
  },
  {
    title: "Interior Work",
    subtitle: "Modern interiors",
    icon: Paintbrush,
    href: "/construction/interior",
  },
  {
    title: "Repair Services",
    subtitle: "Quick & reliable",
    icon: Wrench,
    href: "/construction/repair",
  },
];

const services = [
  {
    title: "Complete Home Construction",
    description: "Planning, materials and complete execution",
    price: "Get Free Estimate",
    icon: Building2,
    href: "/construction/home",
  },
  {
    title: "Home Renovation",
    description: "Transform your existing home beautifully",
    price: "Starting from ₹9,999",
    icon: Hammer,
    href: "/construction/renovation",
  },
  {
    title: "Interior Design",
    description: "Modern and premium interior solutions",
    price: "Free Consultation",
    icon: Sparkles,
    href: "/construction/interior",
  },
  {
    title: "Painting Services",
    description: "Professional painting for every space",
    price: "Starting from ₹2,999",
    icon: Paintbrush,
    href: "/construction/painting",
  },
];

const features = [
  "Verified Construction Professionals",
  "Transparent Pricing & Estimates",
  "Quality Material Assurance",
  "Dedicated Project Support",
];

const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description: "Tell us what you want to build or renovate.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Talk To Experts",
    description: "Our professionals understand your project needs.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Start Your Project",
    description: "Get your estimate and start with confidence.",
    icon: HardHat,
  },
];

export default function ConstructionPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-[#030303]">
      {/* =====================================================
          MOBILE ONLY APP CONTAINER
      ===================================================== */}

      <div className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#080808] pb-[90px] text-white shadow-2xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl">
          <div className="flex h-[62px] items-center justify-between px-4">
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go Back"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] active:scale-95"
            >
              <ArrowLeft size={21} className="text-white" />
            </button>

            <div className="text-center">
              <p className="text-[8px] font-bold uppercase tracking-[4px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="mt-1 text-[12px] font-semibold text-white">
                Construction Services
              </p>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 active:scale-95"
            >
              <Phone size={18} className="text-[#DFAE45]" />
            </button>
          </div>
        </header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="px-4 pt-5">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#17130C] via-[#0E0E0E] to-[#090909]">
            {/* Background Glow */}

            <div className="absolute -right-24 -top-24 h-[220px] w-[220px] rounded-full bg-[#DFAE45]/20 blur-[70px]" />

            <div className="absolute -bottom-20 -left-20 h-[180px] w-[180px] rounded-full bg-orange-500/10 blur-[70px]" />

            <div className="relative p-5">
              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-3 py-1.5">
                <HardHat size={13} className="text-[#DFAE45]" />

                <span className="text-[9px] font-semibold text-[#E9C76B]">
                  Trusted Construction Experts
                </span>
              </div>

              {/* Heading */}

              <h1 className="mt-5 text-[31px] font-bold leading-[1.12] tracking-tight">
                Build Your
                <span className="block text-[#DFAE45]">
                  Dream Space
                </span>
                With Confidence
              </h1>

              {/* Description */}

              <p className="mt-4 max-w-[310px] text-[12px] leading-6 text-white/55">
                From construction and renovation to interiors and repairs,
                connect with trusted professionals for every project.
              </p>

              {/* Stats */}

              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <p className="text-[17px] font-bold text-[#DFAE45]">
                    500+
                  </p>

                  <p className="mt-1 text-[8px] uppercase text-white/40">
                    Projects
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <p className="text-[17px] font-bold text-[#DFAE45]">
                    4.8★
                  </p>

                  <p className="mt-1 text-[8px] uppercase text-white/40">
                    Rating
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3">
                  <p className="text-[17px] font-bold text-[#DFAE45]">
                    100%
                  </p>

                  <p className="mt-1 text-[8px] uppercase text-white/40">
                    Verified
                  </p>
                </div>
              </div>

              {/* CTA */}

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
              >
                Explore Services
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            CATEGORIES
        ===================================================== */}

        <section className="mt-9">
          <div className="px-4">
            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              What We Offer
            </p>

            <h2 className="mt-1 text-[21px] font-bold">
              Construction Solutions
            </h2>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => router.push(item.href)}
                  className="min-w-[155px] rounded-[22px] border border-white/[0.07] bg-[#111111] p-4 text-left active:scale-[0.97]"
                >
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <h3 className="mt-4 text-[13px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] text-white/45">
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section id="services" className="mt-10 px-4">
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            Popular Services
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            Start Your Project
          </h2>

          <div className="mt-5 space-y-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => router.push(service.href)}
                  className="flex w-full items-center gap-3 rounded-[22px] border border-white/[0.07] bg-[#111111] p-3.5 text-left active:scale-[0.98]"
                >
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[13px] font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-white/45">
                      {service.description}
                    </p>

                    <p className="mt-2 text-[10px] font-semibold text-[#DFAE45]">
                      {service.price}
                    </p>
                  </div>

                  <ChevronRight
                    size={18}
                    className="shrink-0 text-white/30"
                  />
                </button>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            WHY OURHUB
        ===================================================== */}

        <section className="mt-10 px-4">
          <div className="rounded-[26px] border border-[#DFAE45]/15 bg-gradient-to-b from-[#16130D] to-[#0E0E0E] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <ShieldCheck size={22} className="text-[#DFAE45]" />
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                  Why OurHub
                </p>

                <h2 className="mt-1 text-[17px] font-bold">
                  Built On Trust
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#DFAE45]"
                  />

                  <p className="text-[12px] text-white/65">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section className="mt-10 px-4">
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            Simple Process
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            How It Works
          </h2>

          <div className="mt-6 space-y-6">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.number} className="relative flex gap-4">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[21px] top-[45px] h-[58px] w-px bg-[#DFAE45]/20" />
                  )}

                  <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                    <Icon size={19} className="text-[#DFAE45]" />
                  </div>

                  <div className="pt-0.5">
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

        {/* =====================================================
            CONSULTATION CARD
        ===================================================== */}

        <section className="mt-10 px-4">
          <div className="rounded-[26px] border border-white/[0.07] bg-[#111111] p-5">
            <div className="flex gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Star
                  size={20}
                  fill="currentColor"
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[14px] font-semibold">
                  Planning A Project?
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-white/45">
                  Get expert guidance and connect with trusted construction
                  professionals.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    router.push("/construction/request")
                  }
                  className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#DFAE45]"
                >
                  Get Free Consultation
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =====================================================
          MOBILE STICKY CTA
      ===================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#080808]/95 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-[430px] border-t border-white/[0.07] px-4 py-3">
          <button
            type="button"
            onClick={() => router.push("/construction/request")}
            className="flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black active:scale-[0.98]"
          >
            <HardHat size={18} />

            Get Free Consultation

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}