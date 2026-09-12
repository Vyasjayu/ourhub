
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Crown,
  Flower2,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  Phone,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const WHATSAPP_NUMBER = "918878632431";

const packages = [
  {
    id: "royal",
    title: "Royal Bridal Entry",
    duration: "30–45 Minutes",
    price: "₹4,999",
    description:
      "Elegant bridal entry setup with a beautiful welcome experience.",
    popular: false,
    features: [
      "Bridal entry planning",
      "Elegant entry decoration",
      "Floral pathway",
      "Background music",
      "Entry coordination",
      "Professional support",
    ],
  },
  {
    id: "grand",
    title: "Grand Bridal Entry",
    duration: "45–60 Minutes",
    price: "₹7,999",
    description:
      "A grand bridal entry experience designed to create a memorable wedding moment.",
    popular: true,
    features: [
      "Complete bridal entry planning",
      "Premium floral decoration",
      "Special entry setup",
      "Music & announcement",
      "Bridal entry coordination",
      "Photo moment setup",
      "Dedicated event support",
    ],
  },
  {
    id: "luxury",
    title: "Luxury Bridal Entry",
    duration: "60–90 Minutes",
    price: "₹11,999",
    description:
      "A premium customised bridal entry with luxury styling and complete coordination.",
    popular: false,
    features: [
      "Custom bridal entry concept",
      "Luxury floral styling",
      "Premium entry props",
      "Music & special effects",
      "Professional coordination",
      "Photography moment setup",
      "Dedicated event manager",
    ],
  },
];

const entryIdeas = [
  {
    icon: Flower2,
    title: "Floral Entry",
    text: "Beautiful floral pathway and elegant wedding styling.",
  },
  {
    icon: Sparkles,
    title: "Royal Entry",
    text: "Create a grand bride entry with a luxury feel.",
  },
  {
    icon: Music,
    title: "Music Entry",
    text: "Make the moment special with music and announcements.",
  },
  {
    icon: Crown,
    title: "Custom Entry",
    text: "Design an entry concept according to your wedding theme.",
  },
];

export default function BridalEntryPage() {
  const [selectedPackage, setSelectedPackage] = useState("grand");

  const selected =
    packages.find((item) => item.id === selectedPackage) || packages[1];

  const whatsappMessage = encodeURIComponent(
    `Hello OurHub 👋

I want to book a Bridal Entry for my wedding.

Package: ${selected.title}
Duration: ${selected.duration}
Price: ${selected.price}

Wedding Location: Ujjain / Ratlam / Indore

Please share availability and bridal entry options.`
  );

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-x-hidden bg-[#050B14] pb-28">

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050B14]/95 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">

            <Link
              href="/eventManagement/wedding-event"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition active:scale-95"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
                Wedding Entry
              </p>

              <h1 className="mt-0.5 text-[16px] font-extrabold">
                Bridal Entry
              </h1>
            </div>

            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 text-[#DFAE45] transition active:scale-95"
            >
              <MessageCircle size={19} />
            </Link>

          </div>
        </header>

        {/* HERO */}
        <section className="px-4 pt-4">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-[#0A1422] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

            {/* Top Badge */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/55 px-3 py-1.5 backdrop-blur-md">
              <Crown
                size={13}
                className="text-[#DFAE45]"
              />

              <span className="text-[11px] font-bold text-[#F4D58A]">
                Royal Wedding Experience
              </span>
            </div>

            {/* Rating */}
            <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md">
              <Star
                size={13}
                fill="#DFAE45"
                className="text-[#DFAE45]"
              />

              <span className="text-[11px] font-bold">
                4.9
              </span>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[4/4.3] w-full overflow-hidden">

              <img
                src="/images/events/bridal-entry.jpg"
                alt="Bridal Entry Decoration"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "/images/events/wedding.jpg";
                }}
              />

              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050B14] via-[#050B14]/55 to-transparent" />

            </div>

            {/* Hero Content */}
            <div className="relative -mt-8 px-5 pb-5">

              <div className="mb-3 flex items-center gap-2">

                <span className="flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                  <CheckCircle2 size={12} />
                  Verified Service
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-bold text-white/70">
                  Premium Wedding
                </span>

              </div>

              <h2 className="text-[28px] font-black tracking-tight">
                Bridal Entry
              </h2>

              <p className="mt-1.5 text-[13px] leading-5 text-white/55">
                Make the bride's arrival the most magical moment of the
                wedding with an elegant and unforgettable entry experience.
              </p>

            </div>
          </div>
        </section>

        {/* QUICK INFO */}
        <section className="grid grid-cols-3 gap-2 px-4 pt-3">

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <Clock3
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              30–90 Min
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              Experience
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <Heart
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              Custom
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              Entry Style
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <MapPin
              size={18}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-2 text-[11px] font-bold text-white/80">
              3 Cities
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              Available
            </p>
          </div>

        </section>

        {/* PACKAGE HEADING */}
        <section className="px-5 pt-8">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            Select Your Experience
          </p>

          <div className="mt-1 flex items-end justify-between">

            <h2 className="text-[21px] font-black tracking-tight">
              Bridal Entry Packages
            </h2>

            <span className="text-[10px] text-white/35">
              Starting ₹4,999
            </span>

          </div>

        </section>

        {/* PACKAGES */}
        <section className="space-y-3 px-4 pt-4">

          {packages.map((pkg) => {

            const active =
              selectedPackage === pkg.id;

            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() =>
                  setSelectedPackage(pkg.id)
                }
                className={`relative w-full rounded-[22px] border p-4 text-left transition active:scale-[0.99] ${
                  active
                    ? "border-[#DFAE45]/60 bg-[#DFAE45]/[0.07] shadow-[0_15px_40px_rgba(223,174,69,0.08)]"
                    : "border-white/[0.07] bg-white/[0.025]"
                }`}
              >

                {pkg.popular && (
                  <div className="absolute -top-2.5 right-4 rounded-full bg-[#DFAE45] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black">
                    Most Popular
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">

                  <div>

                    <div className="flex items-center gap-2">

                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                          active
                            ? "border-[#DFAE45] bg-[#DFAE45] text-black"
                            : "border-white/20"
                        }`}
                      >
                        {active && (
                          <Check
                            size={12}
                            strokeWidth={3}
                          />
                        )}
                      </span>

                      <h3 className="text-[15px] font-extrabold">
                        {pkg.title}
                      </h3>

                    </div>

                    <div className="ml-7 mt-1 flex items-center gap-2 text-[10px] text-white/40">
                      <Clock3 size={12} />
                      {pkg.duration}
                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-[19px] font-black text-[#F2CA6D]">
                      {pkg.price}
                    </p>

                  </div>

                </div>

                <p className="mt-3 text-[11px] leading-5 text-white/45">
                  {pkg.description}
                </p>

                <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">

                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-1.5 text-[10px] text-white/60"
                    >
                      <Check
                        size={12}
                        className="mt-0.5 shrink-0 text-[#DFAE45]"
                      />

                      <span>{feature}</span>
                    </div>
                  ))}

                </div>

              </button>
            );
          })}

        </section>

        {/* ENTRY IDEAS */}
        <section className="px-5 pt-9">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            Make It Magical
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            Bridal Entry Styles
          </h2>

        </section>

        <section className="grid grid-cols-2 gap-3 px-4 pt-4">

          {entryIdeas.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[20px] border border-white/[0.07] bg-white/[0.025] p-4"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
                  <Icon size={19} />
                </div>

                <h3 className="mt-3 text-[13px] font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-white/40">
                  {item.text}
                </p>

              </div>
            );
          })}

        </section>

        {/* INCLUDED */}
        <section className="px-4 pt-8">

          <div className="rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#DFAE45]/[0.09] to-transparent p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10 text-[#DFAE45]">
                <Sparkles size={21} />
              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                  Premium Experience
                </p>

                <h3 className="text-[16px] font-extrabold">
                  What's Included?
                </h3>

              </div>

            </div>

            <div className="mt-5 space-y-3">

              {[
                "Bridal entry planning",
                "Entry decoration & styling",
                "Floral pathway",
                "Music & announcement coordination",
                "Professional entry coordination",
                "Bride & family photo moments",
                "Dedicated event support",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 text-[12px] text-white/65"
                >

                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DFAE45]/10">
                    <Check
                      size={11}
                      className="text-[#DFAE45]"
                    />
                  </span>

                  {item}

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* BOOKING PROCESS */}
        <section className="px-5 pt-9">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            Simple Booking
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            Plan Your Bridal Entry
          </h2>

        </section>

        <section className="mt-4 space-y-3 px-4">

          {[
            {
              number: "01",
              title: "Choose Your Style",
              text: "Select a royal, grand or customised bridal entry experience.",
            },
            {
              number: "02",
              title: "Share Wedding Details",
              text: "Tell us your wedding date, venue, timing and entry requirements.",
            },
            {
              number: "03",
              title: "Confirm Your Entry",
              text: "OurHub team coordinates everything and confirms your booking.",
            },
          ].map((step) => (

            <div
              key={step.number}
              className="flex items-center gap-4 rounded-[20px] border border-white/[0.07] bg-white/[0.025] p-4"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10 text-[12px] font-black text-[#DFAE45]">
                {step.number}
              </div>

              <div className="min-w-0">

                <h3 className="text-[13px] font-extrabold">
                  {step.title}
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-white/40">
                  {step.text}
                </p>

              </div>

              <ChevronRight
                size={17}
                className="ml-auto shrink-0 text-white/20"
              />

            </div>
          ))}

        </section>

        {/* TRUST */}
        <section className="px-4 pt-8">

          <div className="rounded-[24px] border border-emerald-400/10 bg-emerald-400/[0.035] p-5">

            <div className="flex items-start gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                <ShieldCheck size={22} />
              </div>

              <div>

                <h3 className="text-[15px] font-extrabold">
                  Why Book With OurHub?
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-white/45">
                  OurHub helps coordinate your bridal entry so the bride's
                  special moment feels beautiful, organised and stress-free.
                </p>

              </div>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">

              {[
                "Verified Vendors",
                "Transparent Pricing",
                "On-Time Coordination",
                "Easy Booking",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3 py-2.5 text-[10px] font-semibold text-white/60"
                >

                  <CheckCircle2
                    size={13}
                    className="text-emerald-300"
                  />

                  {item}

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* LOCATION */}
        <section className="px-4 pt-5">

          <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5">

            <MapPin
              size={18}
              className="text-[#DFAE45]"
            />

            <div>

              <p className="text-[10px] text-white/35">
                Bridal Entry Available In
              </p>

              <p className="mt-0.5 text-[12px] font-bold text-white/80">
                Ujjain • Ratlam • Indore
              </p>

            </div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="px-4 pt-6">

          <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-5">

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45] text-black">
                <Crown size={23} />
              </div>

              <h2 className="mt-4 text-[22px] font-black tracking-tight">
                Make Her Entry Unforgettable
              </h2>

              <p className="mt-2 text-[11px] leading-5 text-white/45">
                Share your wedding details with OurHub and create a bridal
                entry your guests will remember.
              </p>

              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[12px] font-black text-black shadow-[0_12px_35px_rgba(223,174,69,0.18)] transition active:scale-[0.98]"
              >
                <MessageCircle size={17} />
                Plan Bridal Entry
              </Link>

            </div>
          </div>

        </section>

        {/* BOTTOM CTA */}
        <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-[430px] border-t border-white/[0.07] bg-[#050B14]/95 p-3 backdrop-blur-xl">

          <div className="flex gap-2">

            <a
              href="tel:+918878632431"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
            >
              <Phone size={18} />
            </a>

            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[12px] font-black text-black shadow-[0_10px_30px_rgba(223,174,69,0.15)] transition active:scale-[0.98]"
            >
              <MessageCircle size={17} />
              Check Availability
            </Link>

            <Link
              href="/eventManagement/wedding-event"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white"
            >
              <ArrowLeft size={18} />
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}

