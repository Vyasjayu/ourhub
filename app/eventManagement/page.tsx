"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Camera,
  ChevronRight,
  Crown,
  Gift,
  Heart,
  MapPin,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Utensils,
  Baby,
  WandSparkles,
  Users,
} from "lucide-react";

/* =========================================================
   MAIN EVENT CATEGORIES
========================================================= */

const eventServices = [
  {
    title: "Wedding & Shaadi",
    image: "/images/events/wedding.jpg",
    description: "Complete wedding planning from Mehndi to Reception.",
    href: "/eventManagement/wedding-event",
    icon: Heart,
  },
  {
    title: "Birthday Parties",
    image: "/images/events/birthday.jpg",
    description: "Memorable celebrations for every age.",
    href: "/eventManagement/birthday-parties",
    icon: Gift,
  },
  {
    title: "Corporate Events",
    image: "/images/events/corporate.jpg",
    description: "Professional meetings & corporate events.",
    href: "/eventManagement/corporate-events",
    icon: Crown,
  },
  {
    title: "Engagement",
    image: "/images/events/engagement.jpg",
    description: "Beautiful engagement planning & decor.",
    href: "/eventManagement/engagement",
    icon: Heart,
  },
  {
    title: "Baby Shower",
    image: "/images/events/baby-shower.jpg",
    description: "Creative themes & beautiful arrangements.",
    href: "/eventManagement/baby-shower",
    icon: Baby,
  },
  {
    title: "Anniversary",
    image: "/images/events/anniversary.jpg",
    description: "Celebrate your special moments in style.",
    href: "/eventManagement/anniversary",
    icon: Sparkles,
  },
  {
    title: "Decoration",
    image: "/images/events/decoration.jpg",
    description: "Balloon, floral, stage & theme decor.",
    href: "/eventManagement/decoration",
    icon: PartyPopper,
  },
  {
    title: "Catering",
    image: "/images/events/catering.jpg",
    description: "Delicious food for every celebration.",
    href: "/eventManagement/catering",
    icon: Utensils,
  },
];

/* =========================================================
   CHARACTER ENTERTAINMENT
========================================================= */

const characterServices = [
  {
    title: "Giant Gorilla",
    image: "/images/events/gorilla.jpg",
    description: "Fun giant character entertainment for kids.",
    href: "/eventManagement/characters/gorilla",
    icon: WandSparkles,
  },
  {
    title: "Chhota bheem",
    image: "/images/events/funny-character.jpg",
    description: "Comedy-style character entertainment.",
    href: "/eventManagement/characters/chhotabheem",
    icon: PartyPopper,
  },
  {
    title: "Motu Patlu",
    image: "/images/events/motupatlu.jpg",
    description: "Action-packed entertainment for kids.",
    href: "/eventManagement/characters/motupatlu",
    icon: Crown,
  },
  {
    title: "Elephant",
    image: "/images/events/elephant.jpg",
    description: "Magical princess and fairy entertainment.",
    href: "/eventManagement/characters/elephant",
    icon: Sparkles,
  },
];

/* =========================================================
   WEDDING ENTRY DECORATIONS
========================================================= */

const entryServices = [
  {
    title: "Bridal Entry Decoration",
    image: "/images/events/bridal-entry.jpg",
    description: "Floral tunnels, dreamy walkways & elegant bridal entries.",
    href: "/eventManagement/bridal-entry",
    icon: Heart,
  },
  {
    title: "Grand Floral Bridal Entry",
    image: "/images/events/FloralBridalEntry.jpg",
    description: "Royal groom entries with lights, flowers & premium setups.",
    href: "/eventManagement/floralBridal-entry",
    icon: Crown,
  },
  {
    title: "Couple Entry Decoration",
    image: "/images/events/couple-entry.jpg",
    description: "Romantic couple entry concepts for a memorable moment.",
    href: "/eventManagement/wedding-event/couple-entry",
    icon: Sparkles,
  },
  {
    title: "Varmala Entry Decoration",
    image: "/images/events/varmala-entry.jpg",
    description: "Beautiful varmala entry setups with flowers & grand decor.",
    href: "/eventManagement/wedding-event/varmala-entry",
    icon: PartyPopper,
  },
];

/* =========================================================
   WHY OURHUB
========================================================= */

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Partners",
    text: "Trusted event professionals",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    text: "Quality-focused services",
  },
  {
    icon: CalendarDays,
    title: "Easy Booking",
    text: "Simple & hassle-free",
  },
  {
    icon: Users,
    title: "Complete Support",
    text: "Experts for every celebration",
  },
];

/* =========================================================
   SERVICE GRID
========================================================= */

function ServiceGrid({
  services,
}: {
  services: Array<{
    title: string;
    image: string;
    description: string;
    href: string;
    icon: typeof Heart;
  }>;
}) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <Link
            href={service.href}
            key={service.title}
            className="group block"
          >
            <div className="relative h-full overflow-hidden rounded-[20px] border border-[#DFAE45]/15 bg-[#0A111D] transition-all duration-300 active:scale-[0.97] hover:border-[#DFAE45]/40 hover:shadow-[0_8px_30px_rgba(223,174,69,0.08)]">

              {/* IMAGE */}
              <div className="relative h-[135px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* IMAGE GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A111D] via-transparent to-black/10" />

                {/* OURHUB BADGE */}
                <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full border border-[#DFAE45]/30 bg-black/60 px-2 py-1 backdrop-blur-md">
                  <Sparkles
                    size={10}
                    className="text-[#DFAE45]"
                  />

                  <span className="text-[8px] font-bold uppercase tracking-wide text-[#F3D27A]">
                    OurHub
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-3.5">
                <div className="flex items-start justify-between gap-2">

                  <div className="min-w-0">
                    <h3 className="truncate text-[14px] font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-gray-500">
                      {service.description}
                    </p>
                  </div>

                  {/* ICON */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45] transition group-hover:bg-[#DFAE45]/20">
                    <Icon size={15} />
                  </div>
                </div>

                {/* EXPLORE */}
                <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-[#DFAE45]">
                  Explore Service

                  <ChevronRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
        {eyebrow}
      </p>

      <h2 className="mt-1 text-[21px] font-bold tracking-tight">
        {title}
      </h2>

      <p className="mt-1 text-[11px] leading-5 text-gray-500">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function EventManagementPage() {
  return (
    <main className="min-h-screen bg-[#050B14] text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050B14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[430px] items-center gap-3 px-4 py-3.5">

          {/* BACK */}
          <Link
            href="/"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition active:scale-95"
          >
            <ArrowLeft size={19} />
          </Link>

          {/* TITLE */}
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-[17px] font-bold">
              Event Management
            </h1>

            <div className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-400">
              <MapPin
                size={12}
                className="text-[#DFAE45]"
              />

              <span>
                Ujjain • Ratlam • Indore
              </span>
            </div>
          </div>

          {/* ICON */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <PartyPopper
              size={18}
              className="text-[#DFAE45]"
            />
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="mx-auto max-w-[430px] px-4 pb-12">

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="relative mt-4 overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-[#0A101B]">

          {/* BACKGROUND */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('/images/events/wedding.jpg')",
            }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/30 via-[#050B14]/70 to-[#050B14]" />

          {/* GOLD GLOW */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#DFAE45]/20 blur-3xl" />

          <div className="relative px-5 pb-6 pt-7">

            {/* BADGE */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 px-3 py-1.5">
              <Sparkles
                size={13}
                className="text-[#DFAE45]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F3D27A]">
                Celebrate With OurHub
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[340px] text-[30px] font-extrabold leading-[1.08] tracking-tight">
              Your Event.
              <br />

              <span className="text-[#DFAE45]">
                Our Expertise.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-[335px] text-[13px] leading-6 text-gray-300">
              From intimate celebrations to grand weddings,
              discover trusted event services — all in one place.
            </p>

            {/* CTA */}
            <Link
              href="/eventManagement"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 py-3.5 text-[14px] font-bold text-black shadow-[0_8px_30px_rgba(223,174,69,0.18)] transition active:scale-[0.98]"
            >
              Explore Events

              <ArrowRight size={17} />
            </Link>

            {/* TRUST */}
            <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-400">
              <ShieldCheck
                size={14}
                className="text-[#DFAE45]"
              />

              <span>
                Trusted professionals • Premium service
              </span>
            </div>
          </div>
        </section>

        {/* ===================================================
            QUICK STATS
        =================================================== */}

        <section className="mt-4 grid grid-cols-3 gap-2.5">

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-3 text-center">
            <p className="text-lg font-extrabold text-[#DFAE45]">
              8+
            </p>

            <p className="mt-0.5 text-[10px] text-gray-400">
              Event Types
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-3 text-center">
            <p className="text-lg font-extrabold text-[#DFAE45]">
              19+
            </p>

            <p className="mt-0.5 text-[10px] text-gray-400">
              Services
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-3 text-center">
            <p className="text-lg font-extrabold text-[#DFAE45]">
              6+
            </p>

            <p className="mt-0.5 text-[10px] text-gray-400">
              Characters
            </p>
          </div>

        </section>

        {/* ===================================================
            MAIN EVENTS
        =================================================== */}

        <section className="mt-9">

          <SectionHeader
            eyebrow="Events & Celebrations"
            title="Choose Your Celebration"
            description="Explore complete event planning and celebration services."
          />

          <ServiceGrid services={eventServices} />

        </section>

        {/* ===================================================
            WEDDING SPOTLIGHT
        =================================================== */}

        <Link
          href="/eventManagement/wedding-event"
          className="group mt-5 block"
        >
          <section className="relative overflow-hidden rounded-[23px] border border-[#DFAE45]/25 bg-gradient-to-br from-[#DFAE45]/10 via-[#0A111D] to-[#0A111D]">

            {/* GLOW */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative flex items-center gap-4 p-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Heart
                  size={21}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="min-w-0 flex-1">

                <p className="text-[10px] font-bold uppercase tracking-widest text-[#DFAE45]">
                  Wedding Special
                </p>

                <h3 className="mt-1 text-[14px] font-bold">
                  Complete Wedding Planning
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-gray-500">
                  Mehndi, Haldi, Sangeet, Baraat, Bridal Entry,
                  Varmala, Reception & more — all in one place.
                </p>

              </div>

              <ChevronRight
                size={18}
                className="shrink-0 text-[#DFAE45] transition-transform group-hover:translate-x-1"
              />

            </div>
          </section>
        </Link>

        {/* ===================================================
            WEDDING ENTRY DECORATIONS
        =================================================== */}

        <section className="mt-10">
          <SectionHeader
            eyebrow="Wedding Entries"
            title="Make Your Entry Grand"
            description="Choose a beautiful entry setup for the bride, groom or couple."
          />

          <ServiceGrid services={entryServices} />
        </section>

        {/* ===================================================
            CHARACTER ENTERTAINMENT
        =================================================== */}

        <section className="mt-10">

          <div className="relative overflow-hidden rounded-[25px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#17130A] via-[#0A111D] to-[#0A111D] p-5">

            {/* GLOW */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">

              <div className="flex items-center gap-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <WandSparkles
                    size={17}
                    className="text-[#DFAE45]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                    Kids & Entertainment
                  </p>

                  <h2 className="text-[19px] font-bold">
                    Character Entertainment
                  </h2>
                </div>

              </div>

              <p className="mt-3 text-[11px] leading-5 text-gray-500">
                Add fun, excitement and unforgettable moments
                to birthday parties and family celebrations.
              </p>

            </div>
          </div>

          <ServiceGrid services={characterServices} />

        </section>

        {/* ===================================================
            CHARACTER CTA
        =================================================== */}

        <section className="mt-5 rounded-[22px] border border-white/[0.07] bg-white/[0.03] p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <PartyPopper
                size={19}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="min-w-0 flex-1">

              <h3 className="text-[13px] font-bold">
                Make Kids&apos; Parties More Fun
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                Characters, mascots & entertainment for special celebrations.
              </p>

            </div>

            <ArrowRight
              size={17}
              className="text-[#DFAE45]"
            />

          </div>

        </section>

        {/* ===================================================
            WHY OURHUB
        =================================================== */}

        <section className="mt-10">

          <div className="mb-4">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              Why OurHub
            </p>

            <h2 className="mt-1 text-[20px] font-bold">
              Everything Under One Hub
            </h2>

            <p className="mt-1 text-[11px] text-gray-500">
              Plan your entire celebration with trusted professionals.
            </p>

          </div>

          <div className="space-y-2.5">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5 transition hover:border-[#DFAE45]/20"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/15 bg-[#DFAE45]/10">
                    <Icon
                      size={19}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div className="flex-1">

                    <h3 className="text-[13px] font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-0.5 text-[10px] text-gray-500">
                      {feature.text}
                    </p>

                  </div>

                  <ChevronRight
                    size={16}
                    className="text-gray-600"
                  />

                </div>
              );
            })}

          </div>
        </section>

        {/* ===================================================
            HOW IT WORKS
        =================================================== */}

        <section className="mt-8 overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0A111D] p-5">

          <div className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <CalendarDays
                size={17}
                className="text-[#DFAE45]"
              />
            </div>

            <div>

              <p className="text-[10px] uppercase tracking-widest text-[#DFAE45]">
                Simple Process
              </p>

              <h2 className="text-[17px] font-bold">
                Plan. Book. Celebrate.
              </h2>

            </div>

          </div>

          <div className="mt-5 space-y-4">

            {/* STEP 1 */}
            <div className="flex gap-3">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                01
              </div>

              <div>

                <h3 className="text-[12px] font-bold">
                  Choose Your Event
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  Select wedding, birthday, corporate or another celebration.
                </p>

              </div>

            </div>

            {/* STEP 2 */}
            <div className="flex gap-3">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                02
              </div>

              <div>

                <h3 className="text-[12px] font-bold">
                  Tell Us Your Needs
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  Share your date, location and event requirements.
                </p>

              </div>

            </div>

            {/* STEP 3 */}
            <div className="flex gap-3">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                03
              </div>

              <div>

                <h3 className="text-[12px] font-bold">
                  Get Expert Support
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  Our event experts help plan everything.
                </p>

              </div>

            </div>

            {/* STEP 4 */}
            <div className="flex gap-3">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[10px] font-bold text-[#DFAE45]">
                04
              </div>

              <div>

                <h3 className="text-[12px] font-bold">
                  Enjoy Your Celebration
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
                  Relax while we take care of the details.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            SERVICE HIGHLIGHTS
        =================================================== */}

        <section className="mt-8">

          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-[21px] border border-white/[0.07] bg-white/[0.03] p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Utensils
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-3 text-[13px] font-bold">
                Catering
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                Delicious menus for every celebration.
              </p>

            </div>

            <div className="rounded-[21px] border border-white/[0.07] bg-white/[0.03] p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Camera
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-3 text-[13px] font-bold">
                Photography
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                Capture every important moment.
              </p>

            </div>

            <div className="rounded-[21px] border border-white/[0.07] bg-white/[0.03] p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <PartyPopper
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-3 text-[13px] font-bold">
                Decoration
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                Themes, balloons, floral & stage decor.
              </p>

            </div>

            <div className="rounded-[21px] border border-white/[0.07] bg-white/[0.03] p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <WandSparkles
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-3 text-[13px] font-bold">
                Entertainment
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                Music, characters & fun activities.
              </p>

            </div>

          </div>
        </section>

        {/* ===================================================
            PREMIUM CTA
        =================================================== */}

        <section className="relative mt-8 overflow-hidden rounded-[25px] border border-[#DFAE45]/25 bg-gradient-to-br from-[#17130A] via-[#0E1118] to-[#090D15] p-5">

          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]">
              <Sparkles
                size={21}
                className="text-black"
              />
            </div>

            <h2 className="mt-4 text-[21px] font-extrabold">
              Make Your Celebration
              <br />

              <span className="text-[#DFAE45]">
                Truly Special
              </span>
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-gray-400">
              Tell us what you are planning and let OurHub
              help you turn your idea into a memorable event.
            </p>

            <Link
              href="/eventManagement/wedding-event"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#DFAE45] py-3 text-[13px] font-bold text-black transition active:scale-[0.98]"
            >
              Start Planning

              <ArrowRight size={16} />
            </Link>

          </div>
        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="mt-8 pb-4 text-center">

          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-600">

            <div className="h-px w-8 bg-white/10" />

            <span>OURHUB EVENTS</span>

            <div className="h-px w-8 bg-white/10" />

          </div>

          <p className="mt-2 text-[9px] text-gray-700">
            All your services. One hub.
          </p>

        </div>

      </div>
    </main>
  );
}