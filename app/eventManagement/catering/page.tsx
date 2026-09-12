"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChefHat,
  ChevronRight,
  Clock3,
  Crown,
  Flame,
  Heart,
  MapPin,
  MessageCircle,
  PartyPopper,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Users,
  Wine,
} from "lucide-react";

const whatsappNumber = "918878632431";

const whatsappMessage = encodeURIComponent(
  "Hello OurHub, I am interested in Catering Services. Please share packages, menu options and pricing."
);

const cateringServices = [
  {
    icon: ChefHat,
    title: "Professional Chefs",
    description:
      "Experienced chefs preparing fresh, delicious and beautifully presented food.",
  },
  {
    icon: Utensils,
    title: "Complete Catering",
    description:
      "From starters and main course to desserts, beverages and complete service.",
  },
  {
    icon: Sparkles,
    title: "Premium Presentation",
    description:
      "Elegant buffet setup, food presentation and serving arrangements.",
  },
  {
    icon: Users,
    title: "Serving Staff",
    description:
      "Well-trained service staff for smooth and comfortable guest experience.",
  },
  {
    icon: Wine,
    title: "Beverage Service",
    description:
      "Welcome drinks, mocktails, tea, coffee and customized beverage counters.",
  },
  {
    icon: Flame,
    title: "Live Food Counters",
    description:
      "Freshly prepared live counters that make your event more interactive.",
  },
];

const cuisines = [
  "North Indian",
  "South Indian",
  "Gujarati",
  "Rajasthani",
  "Punjabi",
  "Chinese",
  "Continental",
  "Jain Food",
  "Street Food",
  "Desserts",
  "Live Counters",
  "Beverages",
];

const eventTypes = [
  {
    icon: Heart,
    title: "Wedding Catering",
    text: "Grand wedding menus crafted for memorable celebrations.",
  },
  {
    icon: PartyPopper,
    title: "Birthday Parties",
    text: "Fun, colourful and delicious menus for every age group.",
  },
  {
    icon: Users,
    title: "Corporate Events",
    text: "Professional catering for meetings, conferences and office events.",
  },
  {
    icon: Sparkles,
    title: "Family Functions",
    text: "Comfortable and customizable catering for family celebrations.",
  },
];

const packages = [
  {
    name: "Classic",
    price: "₹299",
    per: "per plate",
    description: "Perfect for small celebrations and family functions.",
    features: [
      "4 Starters",
      "2 Main Course",
      "2 Breads",
      "Rice & Dal",
      "1 Dessert",
      "Standard Buffet Setup",
    ],
  },
  {
    name: "Premium",
    price: "₹499",
    per: "per plate",
    description: "A complete premium experience for special occasions.",
    popular: true,
    features: [
      "6 Starters",
      "3 Main Course",
      "3 Breads",
      "Rice & Dal",
      "2 Desserts",
      "Welcome Drink",
      "Premium Buffet Setup",
    ],
  },
  {
    name: "Luxury",
    price: "₹799",
    per: "per plate",
    description: "An elevated menu and service experience for grand events.",
    features: [
      "8+ Starters",
      "4 Main Course",
      "Live Counters",
      "Premium Breads",
      "3 Desserts",
      "Mocktail Counter",
      "Luxury Buffet Setup",
      "Dedicated Service Team",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Event",
    text: "Tell us your event date, location, guest count and requirements.",
  },
  {
    number: "02",
    title: "Choose Your Menu",
    text: "Select cuisines, dishes, live counters and serving style.",
  },
  {
    number: "03",
    title: "Customize Everything",
    text: "We customize the menu and arrangements according to your event.",
  },
  {
    number: "04",
    title: "Enjoy Your Event",
    text: "Our team handles food preparation, setup and service.",
  },
];

const faqs = [
  {
    q: "Can I customize the catering menu?",
    a: "Yes. You can customize cuisines, dishes, starters, desserts, live counters and beverages according to your requirements.",
  },
  {
    q: "Do you provide catering for weddings?",
    a: "Yes. We provide complete wedding catering including buffet setup, chefs, serving staff, beverages and customized menus.",
  },
  {
    q: "Can you arrange Jain food?",
    a: "Yes. Jain food options can be included in your customized catering menu.",
  },
  {
    q: "Do you provide serving staff?",
    a: "Yes. Serving staff can be arranged depending on the guest count and selected package.",
  },
  {
    q: "Do you provide live food counters?",
    a: "Yes. Live counters such as chaat, dosa, pasta, Chinese, tandoor and other options can be added.",
  },
];

export default function CateringPage() {
  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      {/* Mobile Container */}
      <div className="mx-auto min-h-screen max-w-[480px] overflow-hidden bg-[#071321] pb-28 shadow-2xl">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(223,174,69,0.20),transparent_35%),radial-gradient(circle_at_10%_60%,rgba(255,255,255,0.05),transparent_30%)]" />

          <div
            className="relative min-h-[570px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(5,7,11,0.18), rgba(5,7,11,0.55) 45%, #071321 96%), url('/images/events/catering.jpg')",
            }}
          >
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between px-5 pt-5">
              <Link
                href="/eventManagement"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 backdrop-blur-xl"
              >
                <ArrowLeft size={20} />
              </Link>

              <div className="rounded-full border border-[#DFAE45]/30 bg-black/35 px-4 py-2 backdrop-blur-xl">
                <span className="text-[11px] font-semibold tracking-[0.18em] text-[#E7B94F]">
                  OURHUB EVENTS
                </span>
              </div>
            </div>

            {/* Hero Content */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/35 bg-black/40 px-3 py-2 backdrop-blur-xl">
                <ChefHat size={15} className="text-[#E7B94F]" />
                <span className="text-xs font-medium text-white/90">
                  Premium Catering Experience
                </span>
              </div>

              <h1 className="max-w-[390px] text-[42px] font-black leading-[0.98] tracking-[-0.04em]">
                Taste That
                <span className="block text-[#E7B94F]">Creates Memories.</span>
              </h1>

              <p className="mt-4 max-w-[390px] text-[15px] leading-6 text-white/75">
                From intimate family functions to grand weddings, enjoy
                delicious food, elegant presentation and professional service.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-4 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.22)]"
                >
                  <MessageCircle size={18} />
                  Get Catering Quote
                </a>

                <a
                  href={`tel:+${whatsappNumber}`}
                  className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-white/15 bg-black/35 backdrop-blur-xl"
                >
                  <Phone size={19} className="text-[#E7B94F]" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-y border-white/8 bg-[#091827] px-5 py-4">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            <div className="px-2 text-center">
              <BadgeCheck className="mx-auto mb-1 text-[#E7B94F]" size={20} />
              <p className="text-[11px] font-semibold">Quality Food</p>
            </div>

            <div className="px-2 text-center">
              <ChefHat className="mx-auto mb-1 text-[#E7B94F]" size={20} />
              <p className="text-[11px] font-semibold">Expert Chefs</p>
            </div>

            <div className="px-2 text-center">
              <ShieldCheck className="mx-auto mb-1 text-[#E7B94F]" size={20} />
              <p className="text-[11px] font-semibold">Reliable Service</p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
            Catering by OurHub
          </p>

          <h2 className="mt-3 text-[29px] font-black leading-tight tracking-[-0.03em]">
            More Than Food.
            <span className="block text-white/55">
              It&apos;s the Experience.
            </span>
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-white/65">
            Great events are remembered by the moments people share — and the
            food they talk about afterwards. Our catering service combines
            delicious menus, professional chefs and elegant presentation to
            make every celebration special.
          </p>
        </section>

        {/* SERVICES */}
        <section className="px-5 pt-10">
          <SectionHeader
            eyebrow="What We Offer"
            title="Complete Catering Services"
            description="Everything you need for a smooth and memorable food experience."
          />

          <div className="mt-6 grid grid-cols-2 gap-3">
            {cateringServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-[22px] border border-white/8 bg-white/[0.035] p-4 transition-all hover:border-[#DFAE45]/25"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon size={21} className="text-[#E7B94F]" />
                  </div>

                  <h3 className="mt-4 text-[14px] font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-white/55">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CUISINES */}
        <section className="px-5 pt-12">
          <SectionHeader
            eyebrow="Explore Flavours"
            title="Cuisines & Menu"
            description="Build a menu that matches your event, guests and taste."
          />

          <div className="mt-6 flex flex-wrap gap-2">
            {cuisines.map((item) => (
              <div
                key={item}
                className="rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/[0.06] px-4 py-2.5 text-xs font-medium text-white/85"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[24px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 to-transparent p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]">
                <Sparkles size={22} className="text-black" />
              </div>

              <div>
                <h3 className="font-bold">Create Your Own Menu</h3>
                <p className="mt-1 text-xs leading-5 text-white/60">
                  Have a special dish or family recipe? Tell us what you want
                  and we&apos;ll help create a personalized menu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EVENT TYPES */}
        <section className="px-5 pt-12">
          <SectionHeader
            eyebrow="For Every Celebration"
            title="Catering For Your Event"
            description="Flexible catering solutions for every kind of occasion."
          />

          <div className="mt-6 space-y-3">
            {eventTypes.map((event) => {
              const Icon = event.icon;

              return (
                <div
                  key={event.title}
                  className="flex items-center gap-4 rounded-[22px] border border-white/8 bg-white/[0.035] p-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon size={21} className="text-[#E7B94F]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold">{event.title}</h3>
                    <p className="mt-1 text-[11px] leading-5 text-white/55">
                      {event.text}
                    </p>
                  </div>

                  <ChevronRight
                    size={17}
                    className="shrink-0 text-white/30"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* PREMIUM EXPERIENCE */}
        <section className="px-5 pt-12">
          <div className="relative overflow-hidden rounded-[28px] border border-[#DFAE45]/25 bg-[#0B1827]">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#DFAE45]/5 blur-3xl" />

            <div className="relative p-6">
              <div className="flex items-center gap-2">
                <Crown size={18} className="text-[#E7B94F]" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#E7B94F]">
                  Premium Experience
                </span>
              </div>

              <h2 className="mt-4 text-[27px] font-black leading-tight">
                Your Guests Deserve
                <span className="block text-[#E7B94F]">
                  Something Delicious.
                </span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/60">
                We take care of the details so you can focus on your guests.
                From the first plate to the last dessert, every element is
                planned with care.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Fresh Ingredients",
                  "Hygienic Preparation",
                  "Beautiful Presentation",
                  "Professional Staff",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-white/[0.045] px-3 py-3"
                  >
                    <Check size={15} className="text-[#E7B94F]" />
                    <span className="text-[11px] text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="px-5 pt-12">
          <SectionHeader
            eyebrow="Catering Packages"
            title="Choose Your Experience"
            description="Starting packages that can be customized according to your event."
          />

          <div className="mt-6 space-y-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative overflow-hidden rounded-[25px] border p-5 ${
                  pkg.popular
                    ? "border-[#DFAE45]/45 bg-gradient-to-br from-[#DFAE45]/10 to-[#0A1725]"
                    : "border-white/8 bg-white/[0.035]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#DFAE45] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black">
                    Most Popular
                  </div>
                )}

                <div className="pr-24">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#E7B94F]">
                    {pkg.name}
                  </p>

                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-[34px] font-black tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="pb-1 text-xs text-white/45">
                      {pkg.per}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-white/55">
                    {pkg.description}
                  </p>
                </div>

                <div className="my-5 h-px bg-white/8" />

                <div className="grid grid-cols-2 gap-y-3">
                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 pr-2"
                    >
                      <Check size={14} className="shrink-0 text-[#E7B94F]" />
                      <span className="text-[11px] text-white/70">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hello OurHub, I am interested in the ${pkg.name} Catering Package (${pkg.price}/plate). Please share complete details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/25 bg-[#DFAE45]/[0.07] py-3 text-xs font-bold text-[#E7B94F]"
                >
                  Enquire About Package
                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 pt-12">
          <SectionHeader
            eyebrow="Simple Process"
            title="From Planning To Plate"
            description="We make catering simple from start to finish."
          />

          <div className="mt-7 space-y-3">
            {process.map((item, index) => (
              <div
                key={item.number}
                className="relative flex gap-4 rounded-[22px] border border-white/8 bg-white/[0.03] p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-xs font-black text-[#E7B94F]">
                  {item.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="mt-1 text-[11px] leading-5 text-white/55">
                    {item.text}
                  </p>
                </div>

                {index !== process.length - 1 && (
                  <div className="absolute -bottom-4 left-[35px] h-5 w-px bg-[#DFAE45]/20" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="px-5 pt-12">
          <SectionHeader
            eyebrow="Food & Ambience"
            title="A Feast Worth Remembering"
            description="Elegant setups, delicious food and moments your guests remember."
          />

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div
              className="h-[210px] rounded-[24px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.55), transparent), url('/images/events/catering-1.jpg')",
              }}
            >
              <div className="flex h-full items-end p-4">
                <span className="text-xs font-bold">Elegant Buffet</span>
              </div>
            </div>

            <div className="space-y-3">
              <div
                className="h-[98px] rounded-[22px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.55), transparent), url('/images/events/catering-2.jpg')",
                }}
              />

              <div
                className="h-[99px] rounded-[22px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.55), transparent), url('/images/events/catering-3.jpg')",
                }}
              />
            </div>
          </div>
        </section>

        {/* WHY OURHUB */}
        <section className="px-5 pt-12">
          <div className="rounded-[26px] border border-white/8 bg-white/[0.03] p-5">
            <div className="flex items-center gap-2">
              <Star size={17} className="fill-[#E7B94F] text-[#E7B94F]" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#E7B94F]">
                Why OurHub
              </span>
            </div>

            <h2 className="mt-3 text-[25px] font-black">
              We Care About
              <span className="text-[#E7B94F]"> Every Plate.</span>
            </h2>

            <div className="mt-6 space-y-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Hygiene First",
                  text: "Clean and professional food preparation standards.",
                },
                {
                  icon: Clock3,
                  title: "On-Time Setup",
                  text: "Our team plans setup according to your event timeline.",
                },
                {
                  icon: BadgeCheck,
                  title: "Transparent Pricing",
                  text: "Clear packages with flexible customization options.",
                },
                {
                  icon: Users,
                  title: "Guest-Focused Service",
                  text: "Professional staff to keep your guests comfortable.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                      <Icon size={18} className="text-[#E7B94F]" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold">{item.title}</h3>
                      <p className="mt-1 text-[11px] leading-5 text-white/50">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="px-5 pt-12">
          <div className="relative overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-[#0A1725] to-[#0A1725] p-6">
            <div className="absolute right-5 top-5 text-[#DFAE45]/20">
              <ChefHat size={60} />
            </div>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={15}
                  className="fill-[#E7B94F] text-[#E7B94F]"
                />
              ))}
            </div>

            <p className="mt-5 text-[17px] font-medium leading-7 text-white/90">
              “The food, presentation and service were excellent. Our guests
              especially loved the live counters and desserts.”
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold">Happy OurHub Customer</p>
              <p className="mt-1 text-[11px] text-white/40">
                Event Catering
              </p>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="px-5 pt-12">
          <div className="flex items-center gap-4 rounded-[22px] border border-white/8 bg-white/[0.035] p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <MapPin size={21} className="text-[#E7B94F]" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#E7B94F]">
                Service Areas
              </p>
              <p className="mt-1 text-sm font-semibold">
                Ujjain • Ratlam • Indore
              </p>
              <p className="mt-1 text-[11px] text-white/45">
                & nearby areas
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 pt-12">
          <SectionHeader
            eyebrow="Questions"
            title="Catering FAQs"
            description="Everything you may want to know before booking."
          />

          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-[20px] border border-white/8 bg-white/[0.03] p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                  <span>{faq.q}</span>
                  <ChevronRight
                    size={17}
                    className="shrink-0 text-[#E7B94F] transition-transform group-open:rotate-90"
                  />
                </summary>

                <p className="mt-3 border-t border-white/8 pt-3 text-[12px] leading-5 text-white/55">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-8 pt-14">
          <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 via-[#0B1827] to-[#071321] p-6 text-center">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DFAE45]">
                <ChefHat size={27} className="text-black" />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
                Let&apos;s Plan Your Menu
              </p>

              <h2 className="mt-3 text-[29px] font-black leading-tight">
                Your Event.
                <span className="block text-[#E7B94F]">
                  Our Culinary Touch.
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-[340px] text-xs leading-5 text-white/55">
                Share your event details and our team will help you create the
                perfect catering experience.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-4 text-sm font-black text-black"
              >
                <MessageCircle size={19} />
                Plan My Catering
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* FIXED CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#05070B]/90 px-4 py-3 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[480px] items-center gap-3">
          <div className="hidden min-w-0 flex-1 sm:block">
            <p className="text-xs font-bold">Planning an event?</p>
            <p className="text-[10px] text-white/45">
              Get a customized catering quote
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#DFAE45] py-3.5 text-xs font-black text-black"
          >
            <MessageCircle size={17} />
            Get Catering Quote
          </a>

          <a
            href={`tel:+${whatsappNumber}`}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-white/10 bg-white/5"
          >
            <Phone size={17} className="text-[#E7B94F]" />
          </a>
        </div>
      </div>
    </main>
  );
}

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
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-[27px] font-black leading-tight tracking-[-0.03em]">
        {title}
      </h2>

      <p className="mt-2 text-[13px] leading-5 text-white/50">
        {description}
      </p>
    </div>
  );
}