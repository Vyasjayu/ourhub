"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Crown,
  Gem,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  PartyPopper,
  Phone,
  ShieldCheck,
  Sparkles,
  Utensils,
  Users,
  Video,
} from "lucide-react";

/* =========================================================
   WEDDING SERVICES
========================================================= */

const weddingServices = [
  {
    title: "Wedding Event",
    image: "/images/events/wedding.jpg",
    description: "Complete wedding planning & management.",
    icon: Heart,
  },
  {
    title: "Shaadi Ceremony",
    image: "/images/events/shaadi.jpg",
    description: "Traditional wedding arrangements & rituals.",
    icon: Crown,
  },
  {
    title: "Mehndi Ceremony",
    image: "/images/events/mehndi.jpg",
    description: "Beautiful mehndi themes, decor & entertainment.",
    icon: Sparkles,
  },
  {
    title: "Haldi Ceremony",
    image: "/images/events/haldi.jpg",
    description: "Colourful haldi setup & celebration.",
    icon: Sparkles,
  },
  {
    title: "Sangeet Night",
    image: "/images/events/sangeet.jpg",
    description: "Dance, music, stage & unforgettable moments.",
    icon: Music,
  },
  {
    title: "Baraat & Groom Entry",
    image: "/images/events/baraat.jpg",
    description: "DJ, dhol, baraat & grand groom entry.",
    icon: Crown,
  },
  {
    title: "Bridal Entry",
    image: "/images/events/bridal-entry.jpg",
    description: "Royal bridal entry with special effects.",
    icon: Gem,
  },
  {
    title: "Reception",
    image: "/images/events/reception.jpg",
    description: "Elegant reception, stage & hospitality.",
    icon: Crown,
  },
];

/* =========================================================
   WEDDING ESSENTIALS
========================================================= */

const weddingEssentials = [
  {
    title: "Wedding Decoration",
    description: "Stage, floral, entrance, mandap & theme decor.",
    icon: Sparkles,
    href: "/eventManagement/decoration",
  },
  {
    title: "Catering",
    description: "Menus, live counters, snacks & complete food service.",
    icon: Utensils,
    href: "/eventManagement/catering",
  },
  {
    title: "Photography",
    description: "Wedding photography & cinematic videography.",
    icon: Camera,
    href: "/eventManagement/wedding-event",
  },
  {
    title: "DJ & Entertainment",
    description: "DJ, music, dance floor & celebration entertainment.",
    icon: Music,
    href: "/eventManagement/wedding-event",
  },
  {
    title: "Makeup & Styling",
    description: "Bridal makeup, groom styling & complete looks.",
    icon: Gem,
    href: "/eventManagement/wedding-event",
  },
  {
    title: "Guest Management",
    description: "Hospitality, coordination & guest assistance.",
    icon: Users,
    href: "/eventManagement/wedding-event",
  },
];

/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Professionals",
    text: "Trusted wedding service partners",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    text: "Quality-focused wedding services",
  },
  {
    icon: CalendarDays,
    title: "Complete Planning",
    text: "From ceremony to reception",
  },
  {
    icon: MessageCircle,
    title: "Expert Support",
    text: "Personal assistance for your event",
  },
];

/* =========================================================
   PACKAGES
========================================================= */

const packages = [
  {
    name: "Essential",
    price: "₹24,999",
    description: "For simple & elegant celebrations",
    features: [
      "Basic Wedding Planning",
      "Decoration Coordination",
      "Vendor Coordination",
      "Event Day Support",
    ],
  },
  {
    name: "Premium",
    price: "₹49,999",
    description: "For a complete wedding experience",
    popular: true,
    features: [
      "Complete Wedding Planning",
      "Premium Decoration",
      "Catering Coordination",
      "Photography Coordination",
      "Guest Management",
    ],
  },
  {
    name: "Royal",
    price: "₹99,999+",
    description: "For grand & luxury weddings",
    features: [
      "Full Wedding Management",
      "Luxury Decoration",
      "Premium Entertainment",
      "Complete Hospitality",
      "Dedicated Event Support",
    ],
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
}: {
  service: (typeof weddingServices)[number];
}) {
  const Icon = service.icon;

  return (
    // <Link
    //   href={service.href}
    //   className="group block"
    // >
      <div className="overflow-hidden rounded-[20px] border border-[#DFAE45]/15 bg-[#0A111D] transition-all duration-300 active:scale-[0.97] hover:border-[#DFAE45]/40">

        {/* IMAGE */}
        <div className="relative h-[130px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A111D] via-black/10 to-transparent" />

          <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full border border-[#DFAE45]/30 bg-black/60 px-2 py-1 backdrop-blur-md">
            <Sparkles
              size={9}
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

              <h3 className="truncate text-[13px] font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-gray-500">
                {service.description}
              </p>

            </div>

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
              <Icon size={15} />
            </div>

          </div>

          <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-[#DFAE45]">
            Explore Service

            <ChevronRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>

        </div>
      </div>
    // </Link>
  );
}

/* =========================================================
   ESSENTIAL CARD
========================================================= */

function EssentialCard({
  item,
}: {
  item: (typeof weddingEssentials)[number];
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="group"
    >
      <div className="flex min-h-[105px] flex-col rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-4 transition hover:border-[#DFAE45]/25">

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
          {item.description}
        </p>

      </div>
    </Link>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function WeddingPlanningPage() {

  const whatsappNumber = "918878632431";

  const whatsappMessage = encodeURIComponent(
    "Hello OurHub 👋\n\n" +
      "I want to plan my wedding.\n\n" +
      "Please share wedding packages, services and availability.\n\n" +
      "Location: Ujjain / Ratlam / Indore\n\n" +
      "Thank you."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#050B14] text-white">

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

            <h1 className="truncate text-[17px] font-bold">
              Wedding & Shaadi
            </h1>

            <div className="mt-0.5 flex items-center gap-1 text-[10px] text-gray-400">

              <MapPin
                size={11}
                className="text-[#DFAE45]"
              />

              <span>
                Ujjain • Ratlam • Indore
              </span>

            </div>

          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">

            <Heart
              size={18}
              className="text-[#DFAE45]"
            />

          </div>

        </div>

      </header>

      <div className="mx-auto max-w-[430px] px-4 pb-32">

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="relative mt-4 overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-[#0A101B]">

          <img
            src="/images/events/wedding.jpg"
            alt="Wedding Planning"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/20 via-[#050B14]/70 to-[#050B14]" />

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#DFAE45]/15 blur-3xl" />

          <div className="relative px-5 pb-6 pt-7">

            {/* BADGE */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 px-3 py-1.5">

              <Sparkles
                size={12}
                className="text-[#DFAE45]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#F3D27A]">
                Complete Wedding Planning
              </span>

            </div>

            {/* TITLE */}

            <h2 className="mt-5 text-[30px] font-extrabold leading-[1.08] tracking-tight">

              Your Dream
              <br />

              <span className="text-[#DFAE45]">
                Wedding Starts Here
              </span>

            </h2>

            <p className="mt-3 max-w-[340px] text-[12px] leading-6 text-gray-300">
              From Mehndi and Haldi to Sangeet, Baraat,
              Bridal Entry and Reception — plan your complete
              wedding with OurHub.
            </p>

            {/* BUTTONS */}

            <div className="mt-6 grid grid-cols-2 gap-2.5">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-[12px] font-bold text-black shadow-[0_8px_30px_rgba(223,174,69,0.16)] transition active:scale-[0.98]"
              >
                <MessageCircle size={16} />
                Plan My Wedding
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] py-3.5 text-[12px] font-bold text-white transition active:scale-[0.98]"
              >
                <Phone
                  size={16}
                  className="text-[#DFAE45]"
                />
                Talk to Expert
              </a>

            </div>

            {/* TRUST */}

            <div className="mt-4 flex items-center gap-2 text-[9px] text-gray-400">

              <ShieldCheck
                size={14}
                className="text-[#DFAE45]"
              />

              <span>
                Trusted professionals • Complete wedding support
              </span>

            </div>

          </div>

        </section>

        {/* ===================================================
            QUICK INFO
        =================================================== */}

        <section className="mt-4 grid grid-cols-3 gap-2.5">

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-2 py-3 text-center">

            <Heart
              size={17}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-1.5 text-[10px] font-semibold">
              Complete
            </p>

            <p className="text-[9px] text-gray-500">
              Wedding
            </p>

          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-2 py-3 text-center">

            <CalendarDays
              size={17}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-1.5 text-[10px] font-semibold">
              Flexible
            </p>

            <p className="text-[9px] text-gray-500">
              Planning
            </p>

          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-2 py-3 text-center">

            <MapPin
              size={17}
              className="mx-auto text-[#DFAE45]"
            />

            <p className="mt-1.5 text-[10px] font-semibold">
              Local
            </p>

            <p className="text-[9px] text-gray-500">
              Experts
            </p>

          </div>

        </section>

        {/* ===================================================
            WEDDING SERVICES
        =================================================== */}

        <section className="mt-9">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
            Wedding Services
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            Every Wedding Moment
          </h2>

          <p className="mt-1 text-[11px] leading-5 text-gray-500">
            Choose individual ceremonies or let OurHub
            coordinate your complete wedding.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">

            {weddingServices.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
              />
            ))}

          </div>

        </section>

        {/* ===================================================
            WEDDING JOURNEY
        =================================================== */}

        <section className="relative mt-6 overflow-hidden rounded-[24px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#17130A] via-[#0A111D] to-[#0A111D] p-5">

          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Heart
                  size={20}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  Your Wedding Journey
                </p>

                <h3 className="mt-1 text-[16px] font-bold">
                  From First Plan to Final Moment
                </h3>

              </div>

            </div>

            <div className="mt-5 grid grid-cols-4 gap-2">

              {[
                ["01", "Plan"],
                ["02", "Design"],
                ["03", "Celebrate"],
                ["04", "Remember"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="text-center"
                >

                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[9px] font-bold text-[#DFAE45]">
                    {number}
                  </div>

                  <p className="mt-2 text-[9px] font-semibold">
                    {title}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ===================================================
            WEDDING ESSENTIALS
        =================================================== */}

        <section className="mt-10">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
            Complete Your Wedding
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            Wedding Essentials
          </h2>

          <p className="mt-1 text-[11px] leading-5 text-gray-500">
            Everything you may need for a smooth and beautiful celebration.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">

            {weddingEssentials.map((item) => (
              <EssentialCard
                key={item.title}
                item={item}
              />
            ))}

          </div>

        </section>

        {/* ===================================================
            PACKAGES
        =================================================== */}

        <section className="mt-10">

          <div className="mb-4">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
              Wedding Packages
            </p>

            <h2 className="mt-1 text-[21px] font-bold">
              Choose Your Celebration
            </h2>

            <p className="mt-1 text-[11px] leading-5 text-gray-500">
              Packages can be customized according to your wedding needs.
            </p>

          </div>

          <div className="space-y-3">

            {packages.map((pkg) => (

              <div
                key={pkg.name}
                className={`relative overflow-hidden rounded-[23px] border p-5 ${
                  pkg.popular
                    ? "border-[#DFAE45]/40 bg-gradient-to-br from-[#DFAE45]/10 via-[#0A111D] to-[#0A111D]"
                    : "border-white/[0.07] bg-white/[0.03]"
                }`}
              >

                {pkg.popular && (
                  <div className="absolute right-3 top-3 rounded-full bg-[#DFAE45] px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wider text-black">
                    Popular
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">

                  <div>

                    <h3 className="text-[16px] font-bold">
                      {pkg.name}
                    </h3>

                    <p className="mt-1 text-[10px] text-gray-500">
                      {pkg.description}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-[19px] font-extrabold text-[#DFAE45]">
                      {pkg.price}
                    </p>

                    <p className="text-[8px] text-gray-600">
                      Starting from
                    </p>

                  </div>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">

                  {pkg.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-start gap-1.5"
                    >

                      <CheckCircle2
                        size={13}
                        className="mt-0.5 shrink-0 text-[#DFAE45]"
                      />

                      <span className="text-[9px] leading-4 text-gray-400">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10 py-2.5 text-[10px] font-bold text-[#DFAE45]"
                >
                  Enquire About This Package

                  <ArrowRight size={13} />

                </a>

              </div>

            ))}

          </div>

        </section>

        {/* ===================================================
            WHY OURHUB
        =================================================== */}

        <section className="mt-10">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
            Why OurHub
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            Your Wedding, Our Responsibility
          </h2>

          <p className="mt-1 text-[11px] leading-5 text-gray-500">
            We help coordinate the important details so you can enjoy
            the celebration with your family.
          </p>

          <div className="mt-4 space-y-2.5">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">

                    <Icon
                      size={18}
                      className="text-[#DFAE45]"
                    />

                  </div>

                  <div className="flex-1">

                    <h3 className="text-[12px] font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-0.5 text-[9px] text-gray-500">
                      {feature.text}
                    </p>

                  </div>

                  <ChevronRight
                    size={15}
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

        <section className="mt-8 rounded-[23px] border border-white/[0.07] bg-[#0A111D] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">

              <CalendarDays
                size={18}
                className="text-[#DFAE45]"
              />

            </div>

            <div>

              <p className="text-[9px] uppercase tracking-widest text-[#DFAE45]">
                Simple Process
              </p>

              <h2 className="text-[17px] font-bold">
                Plan Your Wedding Easily
              </h2>

            </div>

          </div>

          <div className="mt-5 space-y-4">

            {[
              {
                number: "01",
                title: "Tell Us Your Wedding Plan",
                text: "Share your wedding date, location and requirements.",
              },
              {
                number: "02",
                title: "Choose Your Services",
                text: "Select ceremonies, decoration, catering and other services.",
              },
              {
                number: "03",
                title: "Get Your Plan",
                text: "Our team helps create a suitable wedding plan.",
              },
              {
                number: "04",
                title: "Celebrate Your Big Day",
                text: "Enjoy your wedding while our team manages the details.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="flex gap-3"
              >

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[9px] font-bold text-[#DFAE45]">
                  {step.number}
                </div>

                <div>

                  <h3 className="text-[11px] font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-0.5 text-[9px] leading-4 text-gray-500">
                    {step.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ===================================================
            SERVICE AREA
        =================================================== */}

        <section className="mt-8 rounded-[23px] border border-[#DFAE45]/15 bg-[#0A111D] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">

              <MapPin
                size={20}
                className="text-[#DFAE45]"
              />

            </div>

            <div>

              <p className="text-[9px] uppercase tracking-widest text-[#DFAE45]">
                Service Areas
              </p>

              <h3 className="mt-1 text-[14px] font-bold">
                Wedding Services Near You
              </h3>

            </div>

          </div>

          <div className="mt-4 flex flex-wrap gap-2">

            {[
              "Ujjain",
              "Ratlam",
              "Indore",
              "Nearby Areas",
            ].map((city) => (

              <span
                key={city}
                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[9px] text-gray-400"
              >
                {city}
              </span>

            ))}

          </div>

        </section>

        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <section className="relative mt-8 overflow-hidden rounded-[26px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#1A150A] via-[#0E1118] to-[#090D15] p-5">

          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45]">

              <Heart
                size={22}
                className="text-black"
              />

            </div>

            <h2 className="mt-4 text-[22px] font-extrabold leading-tight">

              Ready to Plan Your
              <br />

              <span className="text-[#DFAE45]">
                Dream Wedding?
              </span>

            </h2>

            <p className="mt-2 text-[10px] leading-5 text-gray-400">
              Tell us your wedding date, location and requirements.
              OurHub will help you plan the next steps.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-[12px] font-bold text-black shadow-[0_8px_30px_rgba(223,174,69,0.15)] transition active:scale-[0.98]"
            >
              <MessageCircle size={17} />

              Start Wedding Planning

              <ArrowRight size={16} />

            </a>

          </div>

        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="mt-8 pb-5 text-center">

          <div className="flex items-center justify-center gap-2 text-[9px] text-gray-600">

            <div className="h-px w-8 bg-white/10" />

            <span>OURHUB WEDDINGS</span>

            <div className="h-px w-8 bg-white/10" />

          </div>

          <p className="mt-2 text-[9px] text-gray-700">
            Plan your wedding. Celebrate every moment.
          </p>

        </div>

      </div>

      {/* =====================================================
          FIXED MOBILE CTA
      ===================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#DFAE45]/15 bg-[#050B14]/95 p-3 backdrop-blur-xl">

        <div className="mx-auto flex max-w-[430px] gap-2">

          <a
            href={`tel:+${whatsappNumber}`}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]"
          >
            <Phone
              size={18}
              className="text-[#DFAE45]"
            />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#DFAE45] text-[12px] font-extrabold text-black shadow-[0_5px_25px_rgba(223,174,69,0.15)]"
          >
            <MessageCircle size={17} />

            Plan My Wedding

            <ArrowRight size={15} />

          </a>

        </div>

      </div>

    </main>
  );
}