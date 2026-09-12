
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Cake,
  Check,
  ChevronRight,
  Clock3,
  Crown,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  PartyPopper,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Utensils,
  Camera,
} from "lucide-react";

const packages = [
  {
    title: "Essential",
    price: "₹4,999",
    subtitle: "Perfect for a simple celebration",
    icon: Cake,
    features: [
      "Birthday decoration",
      "Balloon decoration",
      "Cake table setup",
      "Basic photography",
      "Event coordination",
    ],
  },
  {
    title: "Celebration",
    price: "₹9,999",
    subtitle: "Our most popular birthday package",
    icon: PartyPopper,
    popular: true,
    features: [
      "Premium theme decoration",
      "Balloon & backdrop setup",
      "Birthday cake arrangement",
      "Photography & video",
      "DJ / music setup",
      "Complete event coordination",
    ],
  },
  {
    title: "Luxury",
    price: "₹19,999",
    subtitle: "For a truly memorable celebration",
    icon: Crown,
    features: [
      "Luxury theme decoration",
      "Premium stage & backdrop",
      "Professional photography",
      "Cinematic video",
      "DJ & entertainment",
      "Cake & catering coordination",
      "Dedicated event manager",
    ],
  },
];

const services = [
  {
    icon: Sparkles,
    title: "Theme Decoration",
    text: "Beautiful customized themes designed around your celebration.",
  },
  {
    icon: Cake,
    title: "Cake & Setup",
    text: "Cake table, candles, props and complete birthday setup.",
  },
  {
    icon: Music,
    title: "DJ & Entertainment",
    text: "Music, games and entertainment to keep everyone involved.",
  },
  {
    icon: Camera,
    title: "Photography",
    text: "Capture every special moment with professional photography.",
  },
  {
    icon: Utensils,
    title: "Food & Catering",
    text: "Flexible food and catering arrangements for your guests.",
  },
  {
    icon: Gift,
    title: "Special Moments",
    text: "Surprise entries, gifts and personalized celebration ideas.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us Your Plan",
    text: "Share your date, location, guests and birthday theme.",
  },
  {
    number: "02",
    title: "Choose Your Package",
    text: "Select a package or create a celebration around your budget.",
  },
  {
    number: "03",
    title: "We Plan Everything",
    text: "Our event team coordinates decoration, vendors and setup.",
  },
  {
    number: "04",
    title: "Celebrate",
    text: "Relax and enjoy your birthday while we handle the details.",
  },
];

const faqs = [
  {
    q: "Can I customize the birthday theme?",
    a: "Yes. You can request a custom theme, colors, decoration style and special setup.",
  },
  {
    q: "Do you arrange cake and catering?",
    a: "Yes. Cake, snacks, meals and catering coordination can be added to your event.",
  },
  {
    q: "Can you arrange birthday parties at home?",
    a: "Yes. We can plan birthdays at homes, restaurants, hotels, party halls and outdoor venues.",
  },
  {
    q: "How early should I book?",
    a: "We recommend booking as early as possible so the preferred date and vendors can be arranged.",
  },
];

export default function BirthdayPartiesPage() {
  const whatsappNumber = "918878632431";

  const whatsappMessage = encodeURIComponent(
    "Hello OurHub, I want to plan a Birthday Party.\n\nPlease share available packages, pricing and details."
  );

  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DFAE45]/10 blur-[100px]" />
        <div className="absolute -right-32 top-[45%] h-80 w-80 rounded-full bg-[#7C3AED]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[480px] overflow-hidden">
        {/* Header */}
        <header className="absolute left-0 right-0 top-0 z-30 px-5 pt-5">
          <div className="flex items-center justify-between">
            <Link
              href="/eventManagement"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-xl"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="rounded-full border border-[#DFAE45]/30 bg-black/45 px-4 py-2 backdrop-blur-xl">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#E7B94F]">
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
        <section className="relative h-[650px] overflow-hidden">
          <img
            src="/images/events/birthday.jpg"
            alt="Birthday party celebration"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#05070B]" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#05070B] to-transparent" />

          <div className="absolute bottom-9 left-5 right-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/45 px-3 py-2 backdrop-blur-xl">
              <Sparkles size={14} className="text-[#E7B94F]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B94F]">
                Premium Birthday Planning
              </span>
            </div>

            <h1 className="max-w-[390px] text-[42px] font-bold leading-[0.98] tracking-[-0.04em]">
              Make Their
              <span className="block text-[#E7B94F]">Birthday</span>
              Unforgettable.
            </h1>

            <p className="mt-4 max-w-[370px] text-[15px] leading-6 text-white/70">
              From beautiful themes to music, cake, photography and
              entertainment — we plan every detail for you.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.22)]"
              >
                Plan My Birthday
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

        {/* TRUST STRIP */}
        <section className="px-5 pt-3">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
            <div className="border-r border-white/10 px-3 py-4 text-center">
              <ShieldCheck
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />
              <p className="text-[11px] font-semibold">Trusted Team</p>
            </div>

            <div className="border-r border-white/10 px-3 py-4 text-center">
              <Sparkles
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />
              <p className="text-[11px] font-semibold">Premium Setup</p>
            </div>

            <div className="px-3 py-4 text-center">
              <Clock3
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />
              <p className="text-[11px] font-semibold">On-Time Service</p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 pb-4 pt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
            Celebrate Your Way
          </p>

          <h2 className="mt-3 text-[29px] font-bold leading-tight">
            One celebration.
            <br />
            <span className="text-white/45">Every detail handled.</span>
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-white/55">
            Whether it is a kids birthday, milestone celebration, surprise
            party or intimate family gathering, OurHub brings everything
            together under one roof.
          </p>
        </section>

        {/* SERVICES */}
        <section className="px-5 pt-7">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
                What We Arrange
              </p>
              <h2 className="mt-2 text-2xl font-bold">Everything You Need</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[22px] border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#DFAE45]/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon size={21} className="text-[#E7B94F]" />
                  </div>

                  <h3 className="mt-4 text-sm font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-white/45">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="px-5 pt-16">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
              Birthday Packages
            </p>

            <h2 className="mt-2 text-[29px] font-bold">
              Pick Your Celebration
            </h2>

            <p className="mt-2 text-sm text-white/45">
              Start simple or go all-out. We can customize every package.
            </p>
          </div>

          <div className="space-y-4">
            {packages.map((pkg) => {
              const Icon = pkg.icon;

              return (
                <div
                  key={pkg.title}
                  className={`relative overflow-hidden rounded-[26px] border p-5 ${
                    pkg.popular
                      ? "border-[#DFAE45]/50 bg-gradient-to-br from-[#DFAE45]/10 to-white/[0.035]"
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
                      <Icon size={22} className="text-[#E7B94F]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">{pkg.title}</h3>
                      <p className="mt-1 max-w-[230px] text-xs text-white/45">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="text-3xl font-black">{pkg.price}</span>
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
                          <Check size={12} className="text-[#E7B94F]" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello OurHub, I am interested in the ${pkg.title} Birthday Package (${pkg.price}). Please share complete details.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold ${
                      pkg.popular
                        ? "bg-[#DFAE45] text-black"
                        : "border border-white/10 bg-white/5 text-white"
                    }`}
                  >
                    Choose Package
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="px-5 pt-16">
          <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.025] to-transparent p-6">
            <div className="flex items-center gap-2 text-[#E7B94F]">
              <Sparkles size={17} />
              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                Our Promise
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold leading-tight">
              You enjoy the moment.
              <br />
              <span className="text-[#E7B94F]">We handle the chaos.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/50">
              Our event team manages vendors, setup, decoration and
              coordination so you can spend your time with the people who
              matter.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-black/25 p-4">
                <Users size={19} className="text-[#E7B94F]" />
                <p className="mt-3 text-sm font-bold">Guest Management</p>
                <p className="mt-1 text-[11px] text-white/40">
                  Smooth coordination
                </p>
              </div>

              <div className="rounded-2xl bg-black/25 p-4">
                <Heart size={19} className="text-[#E7B94F]" />
                <p className="mt-3 text-sm font-bold">Personal Touch</p>
                <p className="mt-1 text-[11px] text-white/40">
                  Designed for you
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
            Simple Process
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            From Idea to Celebration
          </h2>

          <div className="mt-7 space-y-5">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-4">
                <div className="relative flex w-11 shrink-0 justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-xs font-bold text-[#E7B94F]">
                    {step.number}
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="absolute top-11 h-9 w-px bg-white/10" />
                  )}
                </div>

                <div className="pb-2">
                  <h3 className="text-sm font-bold">{step.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-white/45">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="px-5 pt-16">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
                Celebration Gallery
              </p>
              <h2 className="mt-2 text-2xl font-bold">Moments That Shine</h2>
            </div>

            <Camera size={20} className="text-[#E7B94F]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-48 overflow-hidden rounded-[22px]">
              <img
                src="/images/events/birthday.jpg"
                alt="Birthday decoration"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                Birthday Themes
              </span>
            </div>

            <div className="relative h-48 overflow-hidden rounded-[22px]">
              <img
                src="/images/events/birthday.jpg"
                alt="Birthday celebration"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                Celebration
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

            <p className="mt-5 text-[17px] font-medium leading-7 text-white/80">
              “Everything looked beautiful and we did not have to worry about
              anything. The team managed the entire celebration perfectly.”
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFAE45]/10">
                <Heart size={17} className="text-[#E7B94F]" />
              </div>

              <div>
                <p className="text-sm font-bold">OurHub Customer</p>
                <p className="text-xs text-white/40">
                  Birthday Celebration
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="px-5 pt-10">
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <MapPin size={20} className="text-[#E7B94F]" />
            </div>

            <div>
              <p className="text-sm font-bold">Birthday Parties</p>
              <p className="mt-1 text-xs text-white/40">
                Ujjain • Ratlam • Indore & nearby areas
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7B94F]">
            FAQ
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Before You Book
          </h2>

          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.035]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-semibold">
                  {faq.q}
                  <ChevronRight
                    size={17}
                    className="transition group-open:rotate-90"
                  />
                </summary>

                <p className="px-4 pb-4 text-xs leading-5 text-white/45">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-32 pt-16">
          <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/30 bg-gradient-to-br from-[#DFAE45]/15 via-[#DFAE45]/5 to-transparent p-7 text-center">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/15 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DFAE45]/15">
                <PartyPopper size={25} className="text-[#E7B94F]" />
              </div>

              <h2 className="mt-5 text-2xl font-black">
                Ready to Celebrate?
              </h2>

              <p className="mx-auto mt-3 max-w-[310px] text-sm leading-6 text-white/50">
                Tell us your birthday plan and our event team will help you
                create the perfect celebration.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-4 text-sm font-black text-black"
              >
                <MessageCircle size={18} />
                Talk to Our Event Team
              </a>

              <a
                href="tel:+918878632431"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-semibold"
              >
                <Phone size={17} />
                Call OurHub
              </a>
            </div>
          </div>
        </section>

        {/* Bottom mini bar */}
        <div className="fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-white/10 bg-[#05070B]/90 px-4 py-3 backdrop-blur-2xl">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-3.5 text-sm font-black text-black"
          >
            Plan Birthday Party
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </main>
  );
}

