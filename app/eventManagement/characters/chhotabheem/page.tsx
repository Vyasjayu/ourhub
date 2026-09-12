
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Crown,
  Gift,
  MapPin,
  MessageCircle,
  PartyPopper,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WandSparkles,
} from "lucide-react";

/* =========================================================
   PAGE DATA
========================================================= */

const heroImage = "/images/events/chhotabheem.jpg";

const includedServices = [
  "Chhota Bheem character artist",
  "Professional costume & character appearance",
  "Kids interaction & entertainment",
  "Birthday celebration activities",
  "Photo & selfie moments",
  "Fun dance & audience interaction",
];

const suitableFor = [
  {
    icon: Gift,
    title: "Birthday Parties",
    text: "Make your child's birthday extra special.",
  },
  {
    icon: PartyPopper,
    title: "Family Events",
    text: "Fun entertainment for family celebrations.",
  },
  {
    icon: Users,
    title: "Kids Functions",
    text: "Perfect for school and kids gatherings.",
  },
  {
    icon: Sparkles,
    title: "Special Events",
    text: "Add a memorable character experience.",
  },
];

const packages = [
  {
    title: "Basic Appearance",
    duration: "30 Minutes",
    description: "Character appearance & kids interaction.",
    price: "₹999",
    popular: false,
  },
  {
    title: "Fun Celebration",
    duration: "60 Minutes",
    description: "Character appearance, interaction & activities.",
    price: "₹1,499",
    popular: true,
  },
  {
    title: "Premium Party",
    duration: "90 Minutes",
    description: "Extended entertainment with complete interaction.",
    price: "₹1,999",
    popular: false,
  },
];

/* =========================================================
   WHATSAPP
========================================================= */

const whatsappNumber = "918878632431";

function getWhatsAppLink(packageName?: string) {
  const message = `Hello OurHub 👋

I am interested in booking Chhota Bheem Character Entertainment.

Package: ${packageName || "Please suggest"}
Location: 
Event Date: 
Event Type: 

Please share availability and final pricing.

Thank you,
OurHub Customer`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

/* =========================================================
   PAGE
========================================================= */

export default function ChhotaBheemPage() {
  return (
    <main className="min-h-screen bg-[#050B14] pb-24 text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050B14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[430px] items-center gap-3 px-4 py-3.5">

          <Link
            href="/eventManagement"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition active:scale-95"
          >
            <ArrowLeft size={19} />
          </Link>

          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              OurHub Entertainment
            </p>

            <h1 className="truncate text-[16px] font-bold">
              Chhota Bheem
            </h1>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <WandSparkles
              size={18}
              className="text-[#DFAE45]"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[430px] px-4">

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="relative mt-4 overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-[#0A111D]">

          {/* IMAGE */}

          <div className="relative h-[300px] overflow-hidden">

            <img
              src={heroImage}
              alt="Chhota Bheem character entertainment"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/30 to-black/10" />

            {/* TOP BADGE */}

            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-[#DFAE45]/30 bg-black/60 px-3 py-1.5 backdrop-blur-md">
              <Sparkles
                size={12}
                className="text-[#DFAE45]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#F3D27A]">
                Kids Favourite
              </span>
            </div>

            {/* VERIFIED */}

            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-black/60 px-2.5 py-1.5 backdrop-blur-md">
              <BadgeCheck
                size={13}
                className="text-emerald-400"
              />

              <span className="text-[9px] font-bold text-white">
                Verified
              </span>
            </div>

            {/* HERO CONTENT */}

            <div className="absolute bottom-0 left-0 right-0 p-5">

              <div className="flex items-end justify-between gap-3">

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                    Character Entertainment
                  </p>

                  <h2 className="mt-1 text-[28px] font-extrabold leading-tight">
                    Chhota Bheem
                  </h2>

                  <p className="mt-1 text-[11px] text-gray-300">
                    Fun, games & unforgettable moments for kids.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-1 rounded-xl border border-[#DFAE45]/20 bg-black/50 px-2.5 py-2 backdrop-blur-md">
                  <Star
                    size={13}
                    fill="currentColor"
                    className="text-[#DFAE45]"
                  />

                  <span className="text-[11px] font-bold">
                    4.9
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* HERO FOOTER */}

          <div className="grid grid-cols-3 divide-x divide-white/[0.07] border-t border-white/[0.06]">

            <div className="px-3 py-3 text-center">
              <Clock3
                size={15}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-1 text-[9px] text-gray-500">
                Flexible
              </p>
            </div>

            <div className="px-3 py-3 text-center">
              <Users
                size={15}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-1 text-[9px] text-gray-500">
                Kids Friendly
              </p>
            </div>

            <div className="px-3 py-3 text-center">
              <MapPin
                size={15}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-1 text-[9px] text-gray-500">
                Ujjain & Nearby
              </p>
            </div>

          </div>
        </section>

        {/* ===================================================
            INTRO
        =================================================== */}

        <section className="mt-6">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
            Make Their Day Special
          </p>

          <h2 className="mt-1 text-[21px] font-extrabold">
            Bring Chhota Bheem
            <br />
            <span className="text-[#DFAE45]">
              To Your Celebration
            </span>
          </h2>

          <p className="mt-2 text-[12px] leading-6 text-gray-400">
            Surprise children with their favourite character and
            create exciting moments filled with fun, interaction,
            photographs and entertainment.
          </p>

        </section>

        {/* ===================================================
            QUICK INFO
        =================================================== */}

        <section className="mt-5 grid grid-cols-2 gap-3">

          <div className="rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-4">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <CalendarDays
                size={17}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-3 text-[10px] text-gray-500">
              Available For
            </p>

            <h3 className="mt-0.5 text-[13px] font-bold">
              Birthdays & Events
            </h3>

          </div>

          <div className="rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-4">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <Crown
                size={17}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-3 text-[10px] text-gray-500">
              Starting From
            </p>

            <h3 className="mt-0.5 text-[13px] font-bold">
              ₹999
            </h3>

          </div>

        </section>

        {/* ===================================================
            PACKAGES
        =================================================== */}

        <section className="mt-9">

          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              Choose Your Package
            </p>

            <h2 className="mt-1 text-[20px] font-bold">
              Entertainment Packages
            </h2>

            <p className="mt-1 text-[11px] text-gray-500">
              Select the experience that fits your celebration.
            </p>
          </div>

          <div className="space-y-3">

            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`relative overflow-hidden rounded-[22px] border p-4 ${
                  pkg.popular
                    ? "border-[#DFAE45]/40 bg-gradient-to-br from-[#DFAE45]/10 via-[#0A111D] to-[#0A111D]"
                    : "border-white/[0.07] bg-white/[0.03]"
                }`}
              >

                {pkg.popular && (
                  <div className="absolute right-3 top-3 rounded-full bg-[#DFAE45] px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wide text-black">
                    Most Popular
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">

                  <div className="min-w-0">

                    <h3 className="text-[14px] font-bold">
                      {pkg.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#DFAE45]">
                      <Clock3 size={11} />
                      {pkg.duration}
                    </div>

                    <p className="mt-2 max-w-[235px] text-[10px] leading-4 text-gray-500">
                      {pkg.description}
                    </p>

                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-[9px] text-gray-500">
                      Starting
                    </p>

                    <p className="mt-0.5 text-[18px] font-extrabold text-[#DFAE45]">
                      {pkg.price}
                    </p>
                  </div>

                </div>

                <Link
                  href={getWhatsAppLink(pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/25 bg-[#DFAE45]/10 py-2.5 text-[11px] font-bold text-[#F3D27A] transition active:scale-[0.98]"
                >
                  Enquire About This Package
                  <ArrowRight size={14} />
                </Link>

              </div>
            ))}

          </div>
        </section>

        {/* ===================================================
            WHAT'S INCLUDED
        =================================================== */}

        <section className="mt-9 rounded-[24px] border border-white/[0.07] bg-[#0A111D] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <BadgeCheck
                size={19}
                className="text-[#DFAE45]"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                Included
              </p>

              <h2 className="text-[18px] font-bold">
                What You Get
              </h2>
            </div>

          </div>

          <div className="mt-5 space-y-3">

            {includedServices.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >

                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFAE45]/10">
                  <Check
                    size={13}
                    className="text-[#DFAE45]"
                  />
                </div>

                <p className="text-[11px] text-gray-300">
                  {item}
                </p>

              </div>
            ))}

          </div>
        </section>

        {/* ===================================================
            SUITABLE FOR
        =================================================== */}

        <section className="mt-9">

          <div className="mb-4">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              Perfect For
            </p>

            <h2 className="mt-1 text-[20px] font-bold">
              Where Can You Book It?
            </h2>

          </div>

          <div className="grid grid-cols-2 gap-3">

            {suitableFor.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-4"
                >

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                    <Icon
                      size={17}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <h3 className="mt-3 text-[12px] font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[9px] leading-4 text-gray-500">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>
        </section>

        {/* ===================================================
            HOW IT WORKS
        =================================================== */}

        <section className="mt-9 overflow-hidden rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#17130A] via-[#0A111D] to-[#0A111D] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <Sparkles
                size={18}
                className="text-[#DFAE45]"
              />
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#DFAE45]">
                Simple Booking
              </p>

              <h2 className="text-[18px] font-bold">
                Plan In 3 Easy Steps
              </h2>
            </div>

          </div>

          <div className="mt-5 space-y-4">

            <div className="flex gap-3">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                01
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  Send Your Requirement
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  Tell us your event date, location and celebration type.
                </p>
              </div>

            </div>

            <div className="flex gap-3">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                02
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  Confirm Availability
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  OurHub team checks character availability for your date.
                </p>
              </div>

            </div>

            <div className="flex gap-3">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                03
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  Enjoy The Celebration
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  Our character entertainer arrives and makes the party memorable.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            TRUST
        =================================================== */}

        <section className="mt-9">

          <div className="mb-4">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              Why OurHub
            </p>

            <h2 className="mt-1 text-[20px] font-bold">
              Entertainment You Can Trust
            </h2>

          </div>

          <div className="space-y-2.5">

            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <ShieldCheck
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  Verified Entertainment Partners
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-500">
                  Trusted professionals arranged through OurHub.
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <BadgeCheck
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  Quality-Focused Service
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-500">
                  Professional appearance and customer-first support.
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <MessageCircle
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  Direct Support
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-500">
                  Easy enquiry and quick assistance from OurHub.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            LOCATION
        =================================================== */}

        <section className="mt-9 rounded-[22px] border border-[#DFAE45]/15 bg-[#0A111D] p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <MapPin
                size={18}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="flex-1">

              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#DFAE45]">
                Service Locations
              </p>

              <h3 className="mt-1 text-[12px] font-bold">
                Ujjain • Ratlam • Indore
              </h3>

            </div>

            <ChevronRight
              size={16}
              className="text-gray-600"
            />

          </div>

        </section>

        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <section className="relative mt-9 overflow-hidden rounded-[26px] border border-[#DFAE45]/25 bg-gradient-to-br from-[#201A0B] via-[#0D1119] to-[#080C14] p-5">

          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]">
              <PartyPopper
                size={21}
                className="text-black"
              />
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Ready To Celebrate?
            </p>

            <h2 className="mt-1 text-[22px] font-extrabold leading-tight">
              Bring The Fun
              <br />
              <span className="text-[#DFAE45]">
                To Your Party
              </span>
            </h2>

            <p className="mt-2 max-w-[310px] text-[11px] leading-5 text-gray-400">
              Share your event details with OurHub and
              let us help arrange the perfect character
              entertainment experience.
            </p>

            <Link
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-[13px] font-extrabold text-black shadow-[0_10px_35px_rgba(223,174,69,0.18)] transition active:scale-[0.98]"
            >
              <MessageCircle size={17} />
              Enquire on WhatsApp
              <ArrowRight size={16} />
            </Link>

            <div className="mt-3 flex items-center justify-center gap-2 text-[9px] text-gray-600">
              <ShieldCheck size={12} className="text-[#DFAE45]" />
              No obligation • Quick response
            </div>

          </div>
        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="mt-8 pb-5 text-center">

          <div className="flex items-center justify-center gap-2 text-[9px] text-gray-700">

            <div className="h-px w-8 bg-white/10" />

            <span>OURHUB ENTERTAINMENT</span>

            <div className="h-px w-8 bg-white/10" />

          </div>

          <p className="mt-2 text-[9px] text-gray-700">
            All your services. One hub.
          </p>

        </div>

      </div>

      {/* =====================================================
          STICKY BOTTOM CTA
      ===================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.08] bg-[#050B14]/95 p-3 backdrop-blur-xl">

        <div className="mx-auto flex max-w-[430px] items-center gap-2">

          <a
            href={`tel:+91${whatsappNumber.slice(2)}`}
            className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]"
            aria-label="Call OurHub"
          >
            <Phone
              size={18}
              className="text-[#DFAE45]"
            />
          </a>

          <Link
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-extrabold text-black shadow-[0_8px_25px_rgba(223,174,69,0.16)] transition active:scale-[0.98]"
          >
            <MessageCircle size={17} />
            Book Chhota Bheem
          </Link>

        </div>

      </div>

    </main>
  );
}

