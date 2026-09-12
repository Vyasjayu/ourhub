
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Camera,
  Check,
  ChevronRight,
  Clock3,
  Crown,
  Flower2,
  Gift,
  Heart,
  Headphones,
  MapPin,
  MessageCircle,
  Music,
  PartyPopper,
  Sparkles,
  Star,
  Users,
  Utensils,
} from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Elegant Decoration",
    text: "Beautiful floral arrangements, backdrops and personalized engagement decor.",
  },
  {
    icon: Sparkles,
    title: "Theme Styling",
    text: "Choose a romantic, traditional or modern theme for your special day.",
  },
  {
    icon: Camera,
    title: "Photography",
    text: "Professional photography to capture every smile and special moment.",
  },
  {
    icon: Music,
    title: "Music & Entertainment",
    text: "Music, DJ and entertainment arrangements for a memorable celebration.",
  },
  {
    icon: Utensils,
    title: "Catering",
    text: "Delicious food, snacks, beverages and complete catering coordination.",
  },
  {
    icon: Gift,
    title: "Special Arrangements",
    text: "Couple entry, ring ceremony setup, surprises and personalized details.",
  },
];

const packages = [
  {
    title: "Classic",
    price: "₹9,999",
    subtitle: "Elegant setup for an intimate engagement",
    icon: Heart,
    features: [
      "Basic floral decoration",
      "Engagement backdrop",
      "Ring ceremony setup",
      "Basic sound system",
      "Event coordination",
    ],
  },
  {
    title: "Royal",
    price: "₹24,999",
    subtitle: "Our most popular engagement package",
    icon: Crown,
    popular: true,
    features: [
      "Premium floral decoration",
      "Luxury stage & backdrop",
      "Couple seating setup",
      "Photography",
      "DJ & music setup",
      "Guest coordination",
      "Catering coordination",
    ],
  },
  {
    title: "Signature",
    price: "₹49,999",
    subtitle: "A complete luxury engagement experience",
    icon: Sparkles,
    features: [
      "Luxury theme decoration",
      "Premium stage design",
      "Professional photography",
      "Cinematic video",
      "DJ & entertainment",
      "Premium hospitality",
      "Catering coordination",
      "Dedicated event manager",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Vision",
    text: "Tell us your date, venue, guest count and preferred engagement style.",
  },
  {
    number: "02",
    title: "Choose Your Style",
    text: "Select a package or customize the celebration according to your needs.",
  },
  {
    number: "03",
    title: "We Plan Everything",
    text: "Our team coordinates decoration, vendors, entertainment and hospitality.",
  },
  {
    number: "04",
    title: "Celebrate Together",
    text: "Enjoy your special moment while our team takes care of the details.",
  },
];

const eventStyles = [
  "Traditional Engagement",
  "Royal Engagement",
  "Floral Theme",
  "Modern Engagement",
  "Garden Celebration",
  "Hotel Engagement",
  "Ring Ceremony",
  "Family Celebration",
];

const faqs = [
  {
    q: "Can I customize the engagement decoration?",
    a: "Yes. Theme, flowers, colors, stage design, seating and other decoration elements can be customized.",
  },
  {
    q: "Do you arrange photography and video?",
    a: "Yes. Photography and cinematic video services can be included in your engagement package.",
  },
  {
    q: "Can you arrange the venue?",
    a: "Yes. We can help coordinate suitable hotels, banquet halls, gardens and other celebration venues.",
  },
  {
    q: "Can catering be included?",
    a: "Yes. Snacks, beverages, meals and complete catering coordination can be added according to your event.",
  },
];

export default function EngagementPage() {
  const whatsappNumber = "918878632431";

  const whatsappMessage = encodeURIComponent(
    "Hello OurHub, I want to plan an Engagement Ceremony.\n\nPlease share engagement packages, pricing and available services."
  );

  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#DFAE45]/10 blur-[120px]" />
        <div className="absolute -right-40 top-[42%] h-96 w-96 rounded-full bg-pink-500/10 blur-[130px]" />
        <div className="absolute left-[40%] top-[70%] h-72 w-72 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[480px] overflow-hidden">
        {/* HEADER */}
        <header className="absolute left-0 right-0 top-0 z-30 px-5 pt-5">
          <div className="flex items-center justify-between">
            <Link
              href="/eventManagement"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 backdrop-blur-xl"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="rounded-full border border-[#DFAE45]/30 bg-black/45 px-4 py-2 backdrop-blur-xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#E7B94F]">
                OURHUB EVENTS
              </span>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10 backdrop-blur-xl"
            >
              <MessageCircle size={19} className="text-[#25D366]" />
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="relative h-[660px] overflow-hidden">
          <img
            src="/images/events/engagement.jpg"
            alt="Engagement ceremony celebration"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-[#05070B]" />

          <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#05070B] via-[#05070B]/80 to-transparent" />

          <div className="absolute bottom-9 left-5 right-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/45 px-3 py-2 backdrop-blur-xl">
              <Heart
                size={14}
                className="text-[#E7B94F]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#E7B94F]">
                Engagement Celebrations
              </span>
            </div>

            <h1 className="max-w-[410px] text-[41px] font-bold leading-[0.98] tracking-[-0.045em]">
              The Beginning
              <span className="block text-[#E7B94F]">
                Of Forever.
              </span>
            </h1>

            <p className="mt-4 max-w-[385px] text-[14px] leading-6 text-white/65">
              Create a beautiful engagement celebration with elegant decor,
              photography, music, hospitality and every little detail handled
              by OurHub.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.22)]"
              >
                Plan Your Engagement
                <ArrowRight size={17} />
              </a>

              <a
                href="#packages"
                className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl"
              >
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="px-5 pt-3">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
            <div className="border-r border-white/10 px-2 py-4 text-center">
              <BadgeCheck
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />
              <p className="text-[10px] font-semibold">
                Trusted Team
              </p>
            </div>

            <div className="border-r border-white/10 px-2 py-4 text-center">
              <Sparkles
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />
              <p className="text-[10px] font-semibold">
                Premium Decor
              </p>
            </div>

            <div className="px-2 py-4 text-center">
              <Clock3
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />
              <p className="text-[10px] font-semibold">
                Smooth Execution
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 pt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
            Your Special Moment
          </p>

          <h2 className="mt-3 text-[29px] font-bold leading-tight">
            More than a ceremony.
            <br />
            <span className="text-white/40">
              A memory to keep forever.
            </span>
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-white/50">
            Your engagement is one of the most meaningful milestones in your
            journey together. We bring together beautiful styling, thoughtful
            details and seamless coordination to make it truly special.
          </p>
        </section>

        {/* SERVICES */}
        <section className="px-5 pt-12">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
              What We Arrange
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Everything For Your Day
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[22px] border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon
                      size={21}
                      className="text-[#E7B94F]"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-white/40">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* STYLES */}
        <section className="px-5 pt-16">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Flower2
                  size={21}
                  className="text-[#E7B94F]"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#E7B94F]">
                  Choose Your Style
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Your Celebration, Your Way
                </h2>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {eventStyles.map((style) => (
                <span
                  key={style}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] text-white/60"
                >
                  {style}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section
          id="packages"
          className="px-5 pt-16"
        >
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
              Engagement Packages
            </p>

            <h2 className="mt-2 text-[29px] font-bold">
              Choose Your Celebration
            </h2>

            <p className="mt-2 text-sm leading-5 text-white/40">
              Flexible packages with the freedom to customize your special day.
            </p>
          </div>

          <div className="space-y-4">
            {packages.map((pkg) => {
              const Icon = pkg.icon;

              return (
                <div
                  key={pkg.title}
                  className={`relative overflow-hidden rounded-[27px] border p-5 ${
                    pkg.popular
                      ? "border-[#DFAE45]/50 bg-gradient-to-br from-[#DFAE45]/10 to-white/[0.025]"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute right-4 top-4 rounded-full bg-[#DFAE45] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                      <Icon
                        size={22}
                        className="text-[#E7B94F]"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">
                        {pkg.title}
                      </h3>

                      <p className="mt-1 max-w-[230px] text-xs leading-5 text-white/40">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="text-3xl font-black">
                      {pkg.price}
                    </span>

                    <span className="ml-2 text-xs text-white/35">
                      starting from
                    </span>
                  </div>

                  <div className="my-5 h-px bg-white/10" />

                  <div className="space-y-3">
                    {pkg.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-xs text-white/65"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DFAE45]/10">
                          <Check
                            size={12}
                            className="text-[#E7B94F]"
                          />
                        </div>

                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello OurHub, I am interested in the ${pkg.title} Engagement Package (${pkg.price}). Please share complete details.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold ${
                      pkg.popular
                        ? "bg-[#DFAE45] text-black"
                        : "border border-white/10 bg-white/5 text-white"
                    }`}
                  >
                    Discuss Package
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* COUPLE EXPERIENCE */}
        <section className="px-5 pt-16">
          <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.025] to-transparent p-6">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 text-[#E7B94F]">
                <Heart size={17} />

                <span className="text-xs font-bold uppercase tracking-[0.15em]">
                  The OurHub Touch
                </span>
              </div>

              <h2 className="mt-4 text-[25px] font-bold leading-tight">
                You enjoy the moment.
                <br />
                <span className="text-[#E7B94F]">
                  We handle the details.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/45">
                From the first setup to the final guest departure, our team
                coordinates the important details so you can stay present with
                your family and loved ones.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/25 p-4">
                  <Users
                    size={19}
                    className="text-[#E7B94F]"
                  />

                  <p className="mt-3 text-sm font-bold">
                    Guest Experience
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/35">
                    Smooth hospitality
                  </p>
                </div>

                <div className="rounded-2xl bg-black/25 p-4">
                  <Heart
                    size={19}
                    className="text-[#E7B94F]"
                  />

                  <p className="mt-3 text-sm font-bold">
                    Personal Touch
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/35">
                    Made around you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 pt-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
            Simple Process
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            From Idea to Celebration
          </h2>

          <div className="mt-7 space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-4"
              >
                <div className="relative flex w-11 shrink-0 justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-xs font-bold text-[#E7B94F]">
                    {step.number}
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="absolute top-11 h-9 w-px bg-white/10" />
                  )}
                </div>

                <div className="pb-2">
                  <h3 className="text-sm font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ENTERTAINMENT */}
        <section className="px-5 pt-16">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-center gap-2 text-[#E7B94F]">
              <Music size={18} />

              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                Make It Memorable
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold leading-tight">
              More smiles.
              <br />
              <span className="text-white/40">
                More unforgettable moments.
              </span>
            </h2>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-2xl bg-black/20 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <Music
                    size={18}
                    className="text-[#E7B94F]"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Music & DJ
                  </p>

                  <p className="mt-1 text-[11px] text-white/35">
                    Create the perfect celebration atmosphere
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-black/20 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <PartyPopper
                    size={18}
                    className="text-[#E7B94F]"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Couple Entry
                  </p>

                  <p className="mt-1 text-[11px] text-white/35">
                    Plan a beautiful entrance for the couple
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-black/20 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <Camera
                    size={18}
                    className="text-[#E7B94F]"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Photo Moments
                  </p>

                  <p className="mt-1 text-[11px] text-white/35">
                    Beautiful memories captured naturally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="px-5 pt-16">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
                Inspiration
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Engagement Moments
              </h2>
            </div>

            <Camera
              size={20}
              className="text-[#E7B94F]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-52 overflow-hidden rounded-[22px]">
              <img
                src="/images/events/engagement.jpg"
                alt="Engagement decoration"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                Elegant Decor
              </span>
            </div>

            <div className="relative h-52 overflow-hidden rounded-[22px]">
              <img
                src="/images/events/engagement.jpg"
                alt="Engagement ceremony"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                Special Moments
              </span>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="px-5 pt-16">
          <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  fill="currentColor"
                  className="text-[#E7B94F]"
                />
              ))}
            </div>

            <p className="mt-5 text-[17px] font-medium leading-7 text-white/75">
              “The decoration looked beautiful and the whole event felt so
              smooth. We could actually enjoy our engagement with our family.”
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFAE45]/10">
                <Heart
                  size={17}
                  className="text-[#E7B94F]"
                />
              </div>

              <div>
                <p className="text-sm font-bold">
                  OurHub Couple
                </p>

                <p className="text-xs text-white/40">
                  Engagement Celebration
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="px-5 pt-10">
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <MapPin
                size={20}
                className="text-[#E7B94F]"
              />
            </div>

            <div>
              <p className="text-sm font-bold">
                Engagement Event Management
              </p>

              <p className="mt-1 text-xs text-white/40">
                Ujjain • Ratlam • Indore & nearby areas
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 pt-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
            FAQ
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.035]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 text-sm font-semibold">
                  {faq.q}

                  <ChevronRight
                    size={17}
                    className="shrink-0 transition group-open:rotate-90"
                  />
                </summary>

                <p className="px-4 pb-4 text-xs leading-5 text-white/40">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-32 pt-16">
          <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-7 text-center">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DFAE45]/15">
                <Heart
                  size={25}
                  className="text-[#E7B94F]"
                />
              </div>

              <h2 className="mt-5 text-2xl font-black">
                Ready to Begin Forever?
              </h2>

              <p className="mx-auto mt-3 max-w-[315px] text-sm leading-6 text-white/45">
                Share your engagement plans and let our team help create a
                celebration that feels truly yours.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-4 text-sm font-black text-black"
              >
                <MessageCircle size={18} />
                Plan Your Engagement
              </a>

              <a
                href="tel:+918878632431"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-semibold"
              >
                <Headphones size={17} />
                Talk to OurHub
              </a>
            </div>
          </div>
        </section>

        {/* FIXED CTA */}
        <div className="fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-white/10 bg-[#05070B]/90 px-4 py-3 backdrop-blur-2xl">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-sm font-black text-black"
          >
            Plan Engagement
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </main>
  );
}

