"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  PartyPopper,
  Sparkles,
  Star,
  Utensils,
  Users,
} from "lucide-react";

const whatsappNumber = "918878632431";

const services = [
  {
    icon: Sparkles,
    title: "Romantic Decoration",
    description:
      "Elegant floral backdrops, candles, balloons and personalized anniversary styling.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capture beautiful couple portraits, family moments and memories from your celebration.",
  },
  {
    icon: Heart,
    title: "Couple Setup",
    description:
      "Special couple seating, stage styling and personalized arrangements for your special day.",
  },
  {
    icon: Music,
    title: "Music & Entertainment",
    description:
      "Romantic music, live entertainment and fun activities for couples and families.",
  },
  {
    icon: Utensils,
    title: "Dinner & Catering",
    description:
      "Customized food and dining arrangements for intimate or large anniversary celebrations.",
  },
  {
    icon: Gift,
    title: "Surprise Planning",
    description:
      "Thoughtful surprise moments, cake setup, gifts and personalized experiences.",
  },
];

const packages = [
  {
    name: "Romantic Moments",
    price: "₹7,999",
    description:
      "Perfect for a beautiful and intimate anniversary celebration.",
    features: [
      "Romantic backdrop",
      "Balloon & floral styling",
      "Couple seating",
      "Cake table setup",
      "Welcome board",
    ],
  },
  {
    name: "Golden Anniversary",
    price: "₹14,999",
    popular: true,
    description:
      "A premium anniversary experience designed for memorable moments.",
    features: [
      "Premium decoration",
      "Floral couple stage",
      "Cake & celebration setup",
      "Photography coverage",
      "Music & entertainment",
      "Personalized couple setup",
    ],
  },
  {
    name: "Grand Celebration",
    price: "₹29,999",
    description:
      "Complete event management for a grand family anniversary.",
    features: [
      "Luxury event styling",
      "Premium floral decoration",
      "Professional photography",
      "Entertainment & music",
      "Dinner & catering coordination",
      "Complete event management",
    ],
  },
];

const anniversaryTypes = [
  "1st Anniversary",
  "5th Anniversary",
  "10th Anniversary",
  "25th Anniversary",
  "50th Anniversary",
  "Family Celebration",
];

const faqs = [
  {
    question: "Can you plan a surprise anniversary celebration?",
    answer:
      "Yes. OurHub can coordinate romantic decoration, cake setup, music, photography and surprise arrangements.",
  },
  {
    question: "Can I customize the decoration theme?",
    answer:
      "Yes. You can choose your preferred colors, flowers, theme, photographs and decoration style.",
  },
  {
    question: "Do you arrange milestone anniversaries?",
    answer:
      "Yes. We can plan special celebrations for 5th, 10th, 25th, 50th and other important milestones.",
  },
  {
    question: "Can you manage the complete anniversary event?",
    answer:
      "Yes. OurHub can coordinate decoration, photography, entertainment, catering and other event requirements.",
  },
];

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export default function AnniversaryPage() {
  const enquiryMessage =
    "Hello OurHub, I want to plan an Anniversary celebration. Please share packages and complete details.";

  return (
    <main className="min-h-screen bg-[#05070B] pb-28 text-white">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#05070B]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[480px] items-center justify-between px-5">
          <Link
            href="/eventManagement"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
          >
            <ArrowLeft size={20} />
          </Link>

          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#DFAE45]">
              OurHub Events
            </p>

            <h1 className="mt-0.5 text-[15px] font-semibold">
              Anniversary
            </h1>
          </div>

          <a
            href={whatsappLink(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-[#DFAE45]"
          >
            <MessageCircle size={19} />
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-[480px]">
        {/* ================= HERO ================= */}
        <section className="px-4 pt-4">
          <div className="relative min-h-[500px] overflow-hidden rounded-[30px] border border-[#DFAE45]/20 bg-[#0B0D11]">
            <img
              src="/images/events/anniversary.jpg"
              alt="Anniversary Event"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#05070B]" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                <Heart
                  size={14}
                  className="fill-[#DFAE45] text-[#DFAE45]"
                />

                <span className="text-[11px] font-semibold tracking-wide text-[#F5D98B]">
                  ANNIVERSARY • LOVE • MEMORIES
                </span>
              </div>

              <h2 className="max-w-[380px] text-[39px] font-bold leading-[1.02] tracking-[-1.6px]">
                Celebrate Your
                <span className="block text-[#E7B94F]">
                  Beautiful Journey.
                </span>
              </h2>

              <p className="mt-4 max-w-[370px] text-[14px] leading-6 text-white/70">
                Elegant anniversary celebrations crafted around your love
                story, special memories and the people who matter most.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] text-white/75">
                  ✦ Romantic Decor
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] text-white/75">
                  ✦ Photography
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[11px] text-white/75">
                  ✦ Surprise Planning
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST ================= */}
        <section className="px-5 pt-5">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]">
            <div className="border-r border-white/[0.07] px-2 py-4 text-center">
              <BadgeCheck
                size={19}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-2 text-[10px] font-medium text-white/65">
                Trusted Team
              </p>
            </div>

            <div className="border-r border-white/[0.07] px-2 py-4 text-center">
              <Sparkles
                size={19}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-2 text-[10px] font-medium text-white/65">
                Premium Styling
              </p>
            </div>

            <div className="px-2 py-4 text-center">
              <Clock3
                size={19}
                className="mx-auto text-[#DFAE45]"
              />

              <p className="mt-2 text-[10px] font-medium text-white/65">
                On-time Setup
              </p>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            Celebrate Your Story
          </p>

          <h3 className="mt-3 text-[29px] font-bold leading-tight tracking-[-0.8px]">
            Years Of Love.
            <br />
            <span className="text-white/45">
              One Beautiful Celebration.
            </span>
          </h3>

          <p className="mt-4 text-[14px] leading-7 text-white/60">
            Every anniversary is a reminder of the memories, laughter and
            journey shared together. OurHub helps you turn that journey into
            an elegant celebration your family will remember.
          </p>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            What We Handle
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            Everything For Your Celebration
          </h3>

          <div className="mt-6 space-y-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[22px] border border-white/[0.07] bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-4 transition-all duration-300 hover:border-[#DFAE45]/30"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                      <Icon
                        size={21}
                        className="text-[#DFAE45]"
                      />
                    </div>

                    <div>
                      <h4 className="text-[15px] font-semibold">
                        {service.title}
                      </h4>

                      <p className="mt-1.5 text-[12px] leading-5 text-white/50">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= ANNIVERSARY TYPES ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            Every Milestone Matters
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            Celebrate Every Chapter
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {anniversaryTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-[11px] font-medium text-white/65"
              >
                {type}
              </span>
            ))}
          </div>
        </section>

        {/* ================= LOVE STORY CARD ================= */}
        <section className="px-5 pt-12">
          <div className="relative overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.025] to-transparent p-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DFAE45]/25 bg-[#DFAE45]/10">
                <Heart
                  size={21}
                  className="fill-[#DFAE45] text-[#DFAE45]"
                />
              </div>

              <h3 className="mt-5 text-[25px] font-bold leading-tight">
                Make Your Love Story
                <br />
                <span className="text-[#E7B94F]">
                  Part Of The Celebration
                </span>
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-white/55">
                Add your favorite photographs, meaningful dates, special
                messages and personal touches to create an anniversary event
                that feels uniquely yours.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  "Couple Photos",
                  "Memory Wall",
                  "Special Message",
                  "Custom Decor",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3 text-[11px] text-white/65"
                  >
                    <span className="mr-2 text-[#DFAE45]">
                      ✦
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PACKAGES ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            Anniversary Packages
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            Choose Your Experience
          </h3>

          <div className="mt-6 space-y-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative overflow-hidden rounded-[25px] border p-5 ${
                  pkg.popular
                    ? "border-[#DFAE45]/45 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.04] to-transparent"
                    : "border-white/[0.08] bg-white/[0.025]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#DFAE45] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-black">
                    Most Popular
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-[18px] font-bold">
                      {pkg.name}
                    </h4>

                    <p className="mt-1.5 max-w-[250px] text-[12px] leading-5 text-white/50">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-[20px] font-bold text-[#E7B94F]">
                      {pkg.price}
                    </p>

                    <p className="text-[9px] text-white/35">
                      starting from
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/[0.07] pt-4">
                  <div className="space-y-2.5">
                    {pkg.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DFAE45]/10">
                          <Check
                            size={12}
                            className="text-[#DFAE45]"
                          />
                        </div>

                        <span className="text-[12px] text-white/65">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsappLink(
                    `Hello OurHub, I am interested in the ${pkg.name} Anniversary package priced at ${pkg.price}. Please share complete details.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/25 bg-[#DFAE45]/10 text-[12px] font-semibold text-[#F0CC73]"
                >
                  Enquire About This Package
                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MEMORY EXPERIENCE ================= */}
        <section className="px-5 pt-12">
          <div className="rounded-[25px] border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Camera
                  size={20}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  Capture The Moment
                </p>

                <h4 className="mt-1 text-[16px] font-semibold">
                  Memories That Stay Forever
                </h4>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">
                <Camera
                  size={18}
                  className="text-[#DFAE45]"
                />

                <p className="mt-3 text-[12px] font-semibold">
                  Couple Portraits
                </p>

                <p className="mt-1 text-[10px] leading-5 text-white/40">
                  Beautifully captured moments for your special day.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">
                <Users
                  size={18}
                  className="text-[#DFAE45]"
                />

                <p className="mt-3 text-[12px] font-semibold">
                  Family Moments
                </p>

                <p className="mt-1 text-[10px] leading-5 text-white/40">
                  Celebrate the people who made your journey special.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            Simple Process
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            From Plan To Celebration
          </h3>

          <div className="mt-6 space-y-3">
            {[
              {
                number: "01",
                title: "Share Your Vision",
                text: "Tell us your anniversary date, venue, guest count and celebration idea.",
              },
              {
                number: "02",
                title: "Choose Your Style",
                text: "Select your preferred decoration, colors and celebration experience.",
              },
              {
                number: "03",
                title: "We Plan Everything",
                text: "Our team coordinates the decoration, photography and required arrangements.",
              },
              {
                number: "04",
                title: "Celebrate Together",
                text: "Enjoy your special day while our team takes care of the details.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="flex gap-4 rounded-[20px] border border-white/[0.07] bg-white/[0.025] p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[11px] font-bold text-[#DFAE45]">
                  {step.number}
                </div>

                <div>
                  <h4 className="text-[14px] font-semibold">
                    {step.title}
                  </h4>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="px-5 pt-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
                Inspiration
              </p>

              <h3 className="mt-2 text-[25px] font-bold">
                Anniversary Moments
              </h3>
            </div>

            <Camera
              size={20}
              className="text-[#DFAE45]"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="relative col-span-2 h-[220px] overflow-hidden rounded-[23px] border border-white/[0.08]">
              <img
                src="/images/events/anniversary-1.jpg"
                alt="Anniversary decoration"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-4 left-4 text-[11px] font-medium text-white/80">
                Romantic Anniversary Decor
              </span>
            </div>

            <div className="relative h-[155px] overflow-hidden rounded-[21px] border border-white/[0.08]">
              <img
                src="/images/events/anniversary-2.jpg"
                alt="Anniversary celebration"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="relative h-[155px] overflow-hidden rounded-[21px] border border-white/[0.08]">
              <img
                src="/images/events/anniversary-3.jpg"
                alt="Anniversary couple celebration"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIAL ================= */}
        <section className="px-5 pt-12">
          <div className="rounded-[25px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.045] p-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={15}
                  fill="currentColor"
                  className="text-[#DFAE45]"
                />
              ))}
            </div>

            <p className="mt-5 text-[17px] font-medium leading-7 text-white/80">
              “The decoration looked beautiful and every little detail made
              our anniversary feel incredibly special.”
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFAE45]/10">
                <Heart
                  size={17}
                  className="fill-[#DFAE45] text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[12px] font-semibold">
                  OurHub Couple
                </p>

                <p className="text-[10px] text-white/40">
                  Anniversary Celebration
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LOCATION ================= */}
        <section className="px-5 pt-12">
          <div className="rounded-[23px] border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <MapPin
                  size={19}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  Service Areas
                </p>

                <h4 className="mt-1 text-[15px] font-semibold">
                  Ujjain • Ratlam • Indore
                </h4>

                <p className="mt-1 text-[11px] leading-5 text-white/45">
                  Anniversary event planning available in nearby areas as
                  well.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="px-5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
            Questions
          </p>

          <h3 className="mt-2 text-[25px] font-bold">
            Frequently Asked
          </h3>

          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[19px] border border-white/[0.07] bg-white/[0.025]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-[12px] font-semibold">
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={16}
                    className="shrink-0 text-[#DFAE45] transition-transform group-open:rotate-180"
                  />
                </summary>

                <div className="border-t border-white/[0.06] px-4 pb-4 pt-3">
                  <p className="text-[11px] leading-5 text-white/45">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="px-5 pb-8 pt-14">
          <div className="relative overflow-hidden rounded-[29px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-6 text-center">
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFAE45]/25 bg-[#DFAE45]/10">
                <PartyPopper
                  size={24}
                  className="text-[#DFAE45]"
                />
              </div>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
                Make It Memorable
              </p>

              <h3 className="mt-2 text-[28px] font-bold leading-tight">
                Celebrate Your
                <br />
                Anniversary
              </h3>

              <p className="mx-auto mt-3 max-w-[320px] text-[12px] leading-5 text-white/50">
                Tell us your anniversary idea and let OurHub create a
                celebration filled with love, elegance and memories.
              </p>

              <a
                href={whatsappLink(enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 text-[13px] font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.18)]"
              >
                <MessageCircle size={18} />
                Plan My Anniversary
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="px-5 pb-10 text-center">
          <div className="mx-auto h-px w-16 bg-[#DFAE45]/30" />

          <p className="mt-5 text-[11px] font-semibold text-white/45">
            OurHub Services
          </p>

          <p className="mt-1 text-[10px] text-white/25">
            All Services, One Hub
          </p>
        </footer>
      </div>

      {/* ================= FIXED CTA ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.08] bg-[#05070B]/90 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[480px] gap-2">
          <a
            href={whatsappLink(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-[12px] font-semibold text-[#F0CC73]"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>

          <a
            href={whatsappLink(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 flex-[1.6] items-center justify-center gap-2 rounded-xl bg-[#DFAE45] text-[12px] font-bold text-black"
          >
            Plan Your Event
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}