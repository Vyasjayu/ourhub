"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Compass,
  Factory,
  Gem,
  Heart,
  Home,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Header from "@/components/vastu/Header";

const services = [
  {
    title: "Home Vastu",
    description:
      "Create harmony and positivity in your home for happiness and well-being.",
    image: "/images/vastu/home-vastu.jpg",
    icon: Home,
  },
  {
    title: "Office Vastu",
    description:
      "Improve productivity and success in your workplace with Vastu solutions.",
    image: "/images/vastu/office-vastu.jpg",
    icon: BriefcaseBusiness,
  },
  {
    title: "Shop Vastu",
    description:
      "Attract more customers and growth in business with the right Vastu guidance.",
    image: "/images/vastu/shop-vastu.jpg",
    icon: Store,
  },
  {
    title: "Factory Vastu",
    description:
      "Create harmony and positivity in your factory for happiness and well-being.",
    image: "/images/vastu/factory-vastu.jpg",
    icon: Factory,
  },
];

const benefits = [
  {
    title: "Peace & Harmony",
    description: "Create a balanced and peaceful environment.",
    icon: Sparkles,
  },
  {
    title: "Wealth & Prosperity",
    description: "Attract financial stability and abundance.",
    icon: Wallet,
  },
  {
    title: "Health & Happiness",
    description: "Improve health and bring happiness into life.",
    icon: Heart,
  },
  {
    title: "Growth & Success",
    description: "Enhance career growth and overall success.",
    icon: TrendingUp,
  },
];

const features = [
  {
    icon: BadgeCheck,
    title: "Expert",
    subtitle: "Consultation",
  },
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    subtitle: "Guidance",
  },
  {
    icon: Clock3,
    title: "Flexible",
    subtitle: "Timings",
  },
  {
    icon: Gem,
    title: "Trusted",
    subtitle: "Service",
  },
];

export default function VastuPage() {
  return (
    <main className="min-h-screen bg-[#03070b] text-white">
      <div className="mx-auto w-full max-w-[480px] overflow-hidden bg-[#06101a]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        {/* <header className="sticky top-0 z-50 border-b border-yellow-500/10 bg-[#050b12]/95 backdrop-blur-xl">
          <div className="flex h-[68px] items-center justify-between px-4">

            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-500/30 bg-yellow-500/10">
                <Compass
                  size={23}
                  className="text-yellow-400"
                />
              </div>

              <div>
                <p className="font-serif text-xl font-bold text-yellow-400">
                  OurHub
                </p>

                <p className="text-[10px] uppercase tracking-[3px] text-white-500">
                  Vastu Consultant
                </p>
              </div>
            </Link>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/30 bg-white/[0.03]"
              aria-label="Menu"
            >
              <Menu
                size={22}
                className="text-yellow-400"
              />
            </button>

          </div>
        </header> */}
        {/* Header */}
                  <div className="px-4 pt-4">
                    <Header />
                  </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative min-h-[520px] overflow-hidden">

          {/* Hero Image */}

          <Image
            src="/images/vastu/vastu-hero.jpg"
            alt="Vastu Shastra consultation"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark overlays */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#03101a] via-[#03101a]/90 to-[#03101a]/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#06101a] via-transparent to-black/40" />

          {/* Hero content */}

          <div className="relative z-10 px-6 pb-10 pt-20">

            <div className="mb-5 flex items-center gap-2">
              <Sparkles
                size={15}
                className="text-yellow-400"
              />

              <span className="text-xs font-semibold text-yellow-400">
                Ancient Science. Modern Harmony.
              </span>
            </div>

            <h1 className="max-w-[340px] font-serif text-[42px] font-bold leading-[1.05] tracking-tight">
              Vastu Shastra
              <span className="block mt-2 text-yellow-400">
                for Peace & Prosperity
              </span>
            </h1>

            <p className="mt-6 max-w-[320px] text-sm leading-6 text-gray-300">
              Bring positivity, health, wealth and happiness
              into your life with expert Vastu guidance.
            </p>

            <Link
              href="/religious/vastu/vastu-booking"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-5 py-4 text-sm font-extrabold text-black shadow-xl shadow-yellow-500/10 active:scale-[0.98]"
            >
              <CalendarDays size={18} />

              Book Vastu Consultation

              <ArrowRight size={18} />
            </Link>

          </div>

        </section>

        {/* =====================================================
            TRUST FEATURES
        ====================================================== */}

        <section className="relative z-20 -mt-1 px-4">

          <div className="grid grid-cols-4 overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#08131f]/95 backdrop-blur-xl">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`px-2 py-5 text-center ${
                    index !== features.length - 1
                      ? "border-r border-white/10"
                      : ""
                  }`}
                >
                  <Icon
                    size={23}
                    className="mx-auto text-yellow-400"
                  />

                  <p className="mt-3 text-[10px] font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="text-[9px] leading-4 text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}

          </div>

        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        {/* =====================================================
    VASTU SERVICES — 3 COLUMN
====================================================== */}

<section className="px-4 pt-12">

  {/* ================= SECTION TITLE ================= */}

  <div className="text-center">

    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-7 bg-yellow-500/40" />

      <span className="text-[9px] font-bold uppercase tracking-[3px] text-yellow-400">
        Our Services
      </span>

      <span className="h-px w-7 bg-yellow-500/40" />
    </div>

    <h2 className="mt-3 font-serif text-[24px] font-bold leading-tight">
      Vastu Solutions
      <span className="block text-yellow-400">
        for Every Need
      </span>
    </h2>

    <div className="mx-auto mt-4 flex items-center justify-center gap-2">
      <span className="h-px w-7 bg-yellow-500" />

      <span className="h-2 w-2 rotate-45 bg-yellow-400" />

      <span className="h-px w-7 bg-yellow-500" />
    </div>

  </div>


  {/* =====================================================
      VERTICAL SCROLLABLE SERVICES
  ====================================================== */}

  <div
    className="
      mt-7
      max-h-[650px]
      overflow-y-auto
      overscroll-contain
      pr-1
      scrollbar-thin
      scrollbar-thumb-yellow-500/40
      scrollbar-track-transparent
    "
  >

    <div className="grid grid-cols-2 gap-3">

      {services.map((service) => {

        const Icon = service.icon;

        /*
         * IMPORTANT:
         * URL ke liye fixed service type use kar rahe hain.
         */

        const serviceType =
          service.title.toLowerCase().includes("home")
            ? "Home"
            : service.title.toLowerCase().includes("office")
            ? "Office"
            : service.title.toLowerCase().includes("shop")
            ? "Shop"
            : service.title.toLowerCase().includes("factory")
            ? "Factory"
            : service.title;

        return (

          <Link
            key={service.title}
            href={`/religious/vastu/book?type=${encodeURIComponent(
              serviceType
            )}`}
            className="
              group
              overflow-hidden
              rounded-2xl
              border
              border-yellow-500/20
              bg-[#091521]
              transition-all
              duration-300
              active:scale-[0.97]
              hover:border-yellow-500/40
            "
          >

            {/* ================= IMAGE ================= */}

            <div className="relative aspect-[0.95] overflow-hidden">

              <Image
                src={service.image}
                alt={service.title}
                fill
                className="
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* DARK OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#06101a]
                  via-[#06101a]/20
                  to-transparent
                "
              />

              {/* ICON */}

              <div
                className="
                  absolute
                  bottom-[-17px]
                  left-1/2
                  z-10
                  flex
                  h-9
                  w-9
                  -translate-x-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-yellow-500/50
                  bg-[#06101a]
                "
              >
                <Icon
                  size={17}
                  className="text-yellow-400"
                />
              </div>

            </div>


            {/* ================= CARD CONTENT ================= */}

            <div className="px-2 pb-3 pt-6 text-center">

              <h3
                className="
                  font-serif
                  text-[13px]
                  font-bold
                  leading-4
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-2
                  line-clamp-3
                  text-[8px]
                  leading-[13px]
                  text-gray-500
                "
              >
                {service.description}
              </p>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-1
                  text-[8px]
                  font-bold
                  text-yellow-400
                "
              >
                Learn More

                <ArrowRight size={11} />

              </div>

            </div>

          </Link>

        );

      })}

    </div>

  </div>


  {/* ================= SCROLL HINT ================= */}

  {services.length > 4 && (
    <div className="mt-3 text-center">

      <p className="text-[8px] text-gray-600">
        Scroll to explore more Vastu services
      </p>

    </div>
  )}

</section>

        {/* =====================================================
            WHY VASTU
        ====================================================== */}

        <section className="px-4 pt-12">

          <div className="rounded-3xl border border-yellow-500/15 bg-gradient-to-br from-[#0a1a28] to-[#07101a] p-5">

            <div className="text-center">

              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-7 bg-yellow-500/40" />

                <span className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
                  Benefits
                </span>

                <span className="h-px w-7 bg-yellow-500/40" />
              </div>

              <h2 className="mt-4 font-serif text-[25px] font-bold">
                Experience Positive Change
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-yellow-500" />
                <span className="h-2 w-2 rotate-45 bg-yellow-400" />
                <span className="h-px w-8 bg-yellow-500" />
              </div>

            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">

              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center"
                  >

                    <Icon
                      size={26}
                      className="mx-auto text-yellow-400"
                    />

                    <h3 className="mt-3 text-xs font-bold text-yellow-400">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-[9px] leading-4 text-gray-500">
                      {benefit.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <section className="px-4 pt-12">

          <div className="text-center">

            <span className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-400">
              Simple Process
            </span>

            <h2 className="mt-3 font-serif text-2xl font-bold">
              How Vastu Consultation Works
            </h2>

          </div>

          <div className="mt-7 space-y-3">

            {[
              {
                number: "01",
                title: "Book Consultation",
                text: "Select your preferred Vastu service and share your details.",
              },
              {
                number: "02",
                title: "Connect With Expert",
                text: "Our Vastu expert connects with you at your selected time.",
              },
              {
                number: "03",
                title: "Get Vastu Guidance",
                text: "Receive practical guidance based on your property.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="flex gap-4 rounded-2xl border border-white/5 bg-[#091521] p-4"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-xs font-extrabold text-black">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-5 text-gray-500">
                    {step.text}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* =====================================================
            TRUST CARD
        ====================================================== */}

        <section className="px-4 pt-10">

          <div className="flex gap-3 rounded-2xl border border-green-500/15 bg-green-500/[0.04] p-4">

            <ShieldCheck
              size={23}
              className="shrink-0 text-green-400"
            />

            <div>

              <p className="text-xs font-bold text-green-400">
                Trusted & Verified Service
              </p>

              <p className="mt-1 text-[9px] leading-4 text-gray-500">
                OurHub connects you with verified professionals
                for reliable and transparent Vastu consultation.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="px-4 pb-10 pt-10">

          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-[#0d1d2d] to-[#07101a] p-5">

            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="relative flex items-center gap-4">

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-yellow-500/30 bg-yellow-500/10">
                <Compass
                  size={43}
                  className="text-yellow-400"
                />
              </div>

              <div className="min-w-0 flex-1">

                <p className="text-[9px] font-bold uppercase tracking-[2px] text-yellow-400">
                  Start Your Journey
                </p>

                <h2 className="mt-1 font-serif text-lg font-bold">
                  Ready to Transform Your Space?
                </h2>

                <p className="mt-2 text-[9px] leading-4 text-gray-500">
                  Book your Vastu consultation today and take
                  the first step towards a better tomorrow.
                </p>

              </div>

            </div>

            <Link
              href="/religious/vastu/book"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 py-3.5 text-xs font-extrabold text-black"
            >
              Book Consultation
              <ChevronRight size={16} />
            </Link>

          </div>

        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}

        <section className="border-t border-white/5 px-4 py-7 text-center">

          <p className="text-[9px] uppercase tracking-[3px] text-gray-600">
            Need Help?
          </p>

          <a
            href="tel:+918878632431"
            className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-yellow-400"
          >
            <Phone size={14} />
            Talk to OurHub Team
          </a>

          <p className="mt-5 text-[8px] text-gray-600">
            © 2026 OurHub Services. All Rights Reserved.
          </p>

        </section>

      </div>

      {/* =====================================================
          MOBILE STICKY CTA
      ====================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-yellow-500/10 bg-[#050b12]/95 px-3 py-3 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[480px] items-center gap-3">

          <div className="min-w-0 flex-1">

            <p className="text-[8px] text-gray-500">
              Vastu Consultation
            </p>

            <p className="mt-0.5 text-sm font-bold text-yellow-400">
              Expert Guidance
            </p>

          </div>

          <Link
            href="/religious/vastu/vastu-booking"
            className="flex h-11 flex-[1.2] items-center justify-center gap-2 rounded-xl bg-yellow-400 px-3 text-xs font-extrabold text-black shadow-lg shadow-yellow-500/10 active:scale-[0.98]"
          >
            Book Now
            <ArrowRight size={15} />
          </Link>

        </div>
      </div>

    </main>
  );
}