
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
  Gift,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  PartyPopper,
  Music,
} from "lucide-react";

const WHATSAPP_NUMBER = "918878632431";

const packages = [
  {
    id: "basic",
    title: "Fun Appearance",
    duration: "30 Minutes",
    price: "₹999",
    description: "Perfect for a quick character appearance and photos.",
    popular: false,
    features: [
      "Motu Patlu character appearance",
      "Kids interaction",
      "Photo & selfie session",
      "Birthday wishes",
    ],
  },
  {
    id: "celebration",
    title: "Fun Celebration",
    duration: "60 Minutes",
    price: "₹1,499",
    description: "A complete character entertainment experience for kids.",
    popular: true,
    features: [
      "Motu Patlu character appearance",
      "Kids interaction & games",
      "Dance & fun activities",
      "Photo & selfie session",
      "Birthday wishes",
      "Cake-cutting assistance",
    ],
  },
  {
    id: "premium",
    title: "Premium Party",
    duration: "90 Minutes",
    price: "₹1,999",
    description: "Extended entertainment for a memorable celebration.",
    popular: false,
    features: [
      "Motu Patlu character appearance",
      "Kids games & activities",
      "Dance & music entertainment",
      "Photo & selfie session",
      "Birthday wishes",
      "Cake-cutting assistance",
      "Extended guest interaction",
    ],
  },
];

const suitableFor = [
  {
    icon: Gift,
    title: "Birthday Parties",
    text: "Make your child's birthday more exciting.",
  },
  {
    icon: PartyPopper,
    title: "Kids Events",
    text: "Fun entertainment for children and families.",
  },
  {
    icon: Users,
    title: "School Events",
    text: "Perfect for children's school celebrations.",
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    text: "Add a fun character experience to your event.",
  },
];

export default function MotuPatluPage() {
  const [selectedPackage, setSelectedPackage] = useState("celebration");

  const selected =
    packages.find((item) => item.id === selectedPackage) || packages[1];

  const whatsappMessage = encodeURIComponent(
    `Hello OurHub 👋

I want to book Motu Patlu Character Entertainment.

Package: ${selected.title}
Duration: ${selected.duration}
Price: ${selected.price}

Please share availability and booking details.

Location: Ujjain / Ratlam / Indore`
  );

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-x-hidden bg-[#050B14] pb-28">

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050B14]/95 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Link
              href="/eventManagement"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition active:scale-95"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
                Character Entertainment
              </p>
              <h1 className="mt-0.5 text-[16px] font-extrabold">
                Motu Patlu
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

        {/* Hero */}
        <section className="px-4 pt-4">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-[#0A1422] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/55 px-3 py-1.5 backdrop-blur-md">
              <Sparkles size={13} className="text-[#DFAE45]" />
              <span className="text-[11px] font-bold text-[#F4D58A]">
                Kids Favourite
              </span>
            </div>

            <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md">
              <Star size={13} fill="#DFAE45" className="text-[#DFAE45]" />
              <span className="text-[11px] font-bold">4.9</span>
            </div>

            <div className="relative aspect-[4/4.2] w-full overflow-hidden">
              <img
                src="/images/events/motupatlu.jpg"
                alt="Motu Patlu Character Entertainment"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/events/funny-character.jpg";
                }}
              />

              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050B14] via-[#050B14]/55 to-transparent" />
            </div>

            <div className="relative -mt-8 px-5 pb-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                  <CheckCircle2 size={12} />
                  Verified
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-bold text-white/70">
                  Character Artist
                </span>
              </div>

              <h2 className="text-[27px] font-black tracking-tight">
                Motu Patlu
              </h2>

              <p className="mt-1.5 text-[13px] leading-5 text-white/55">
                Bring fun, laughter and unforgettable moments to your
                celebration with our character entertainment experience.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="grid grid-cols-3 gap-2 px-4 pt-3">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <Clock3 size={18} className="mx-auto text-[#DFAE45]" />
            <p className="mt-2 text-[11px] font-bold text-white/80">
              30–90 Min
            </p>
            <p className="mt-0.5 text-[9px] text-white/35">Duration</p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <Users size={18} className="mx-auto text-[#DFAE45]" />
            <p className="mt-2 text-[11px] font-bold text-white/80">
              Kids & Family
            </p>
            <p className="mt-0.5 text-[9px] text-white/35">Audience</p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
            <MapPin size={18} className="mx-auto text-[#DFAE45]" />
            <p className="mt-2 text-[11px] font-bold text-white/80">
              3 Cities
            </p>
            <p className="mt-0.5 text-[9px] text-white/35">Available</p>
          </div>
        </section>

        {/* Section Heading */}
        <section className="px-5 pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            Choose Your Experience
          </p>

          <div className="mt-1 flex items-end justify-between">
            <h2 className="text-[21px] font-black tracking-tight">
              Entertainment Packages
            </h2>

            <span className="text-[10px] text-white/35">
              Starting ₹999
            </span>
          </div>
        </section>

        {/* Packages */}
        <section className="space-y-3 px-4 pt-4">
          {packages.map((pkg) => {
            const active = selectedPackage === pkg.id;

            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedPackage(pkg.id)}
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
                        {active && <Check size={12} strokeWidth={3} />}
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

        {/* Included */}
        <section className="px-4 pt-8">
          <div className="rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#DFAE45]/[0.09] to-transparent p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10 text-[#DFAE45]">
                <Music size={21} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                  Entertainment
                </p>
                <h3 className="text-[16px] font-extrabold">
                  What's Included?
                </h3>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {[
                "Professional character costume",
                "Friendly kids interaction",
                "Fun games and activities",
                "Dance & entertainment",
                "Photo and selfie moments",
                "Birthday wishes",
                "Event-friendly professional artist",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[12px] text-white/65"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DFAE45]/10">
                    <Check size={11} className="text-[#DFAE45]" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suitable For */}
        <section className="px-5 pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            Perfect For
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            Make Their Day Special
          </h2>
        </section>

        <section className="grid grid-cols-2 gap-3 px-4 pt-4">
          {suitableFor.map((item) => {
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

        {/* Booking Process */}
        <section className="px-5 pt-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
            Simple Booking
          </p>

          <h2 className="mt-1 text-[21px] font-black">
            Book in 3 Easy Steps
          </h2>
        </section>

        <section className="mt-4 space-y-3 px-4">
          {[
            {
              number: "01",
              title: "Choose Package",
              text: "Select the entertainment package that fits your event.",
            },
            {
              number: "02",
              title: "Share Event Details",
              text: "Tell us your date, time and event location.",
            },
            {
              number: "03",
              title: "Confirm Booking",
              text: "OurHub team confirms availability and your booking.",
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

        {/* Trust */}
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
                  We coordinate professional character entertainment so you
                  can focus on enjoying your celebration.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {[
                "Verified Artists",
                "Clear Pricing",
                "On-Time Service",
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

        {/* Location */}
        <section className="px-4 pt-5">
          <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5">
            <MapPin size={18} className="text-[#DFAE45]" />

            <div>
              <p className="text-[10px] text-white/35">
                Currently Available In
              </p>

              <p className="mt-0.5 text-[12px] font-bold text-white/80">
                Ujjain • Ratlam • Indore
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 pt-6">
          <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-5">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45] text-black">
                <PartyPopper size={23} />
              </div>

              <h2 className="mt-4 text-[22px] font-black tracking-tight">
                Ready to Make the Party Fun?
              </h2>

              <p className="mt-2 text-[11px] leading-5 text-white/45">
                Select your package and contact OurHub to check availability
                for your event.
              </p>

              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[12px] font-black text-black shadow-[0_12px_35px_rgba(223,174,69,0.18)] transition active:scale-[0.98]"
              >
                <MessageCircle size={17} />
                Book {selected.title}
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
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
              href="/eventManagement"
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
