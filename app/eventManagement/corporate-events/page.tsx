
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Camera,
  Check,
  ChevronRight,
  Clock3,
  Coffee,
  Crown,
  Headphones,
  MapPin,
  MessageCircle,
  Mic2,
  MonitorPlay,
  Music,
  Presentation,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Utensils,
} from "lucide-react";

const services = [
  {
    icon: Presentation,
    title: "Conferences",
    text: "Professional conference planning with complete stage and technical setup.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Meetings",
    text: "Well-organized meetings designed for productive business interactions.",
  },
  {
    icon: Award,
    title: "Award Functions",
    text: "Premium award ceremonies with stage, lighting and guest coordination.",
  },
  {
    icon: Mic2,
    title: "Seminars & Workshops",
    text: "Complete arrangements for seminars, workshops and training programs.",
  },
  {
    icon: MonitorPlay,
    title: "AV & Technical",
    text: "Screens, projectors, sound, microphones and professional AV support.",
  },
  {
    icon: Utensils,
    title: "Food & Catering",
    text: "Corporate catering, refreshments, meals and hospitality arrangements.",
  },
];

const packages = [
  {
    title: "Business",
    price: "₹9,999",
    subtitle: "For meetings & small corporate gatherings",
    icon: BriefcaseBusiness,
    features: [
      "Venue coordination",
      "Basic stage setup",
      "Sound & microphone",
      "Seating arrangement",
      "Event coordination",
    ],
  },
  {
    title: "Professional",
    price: "₹24,999",
    subtitle: "For conferences & corporate events",
    icon: Crown,
    popular: true,
    features: [
      "Premium venue setup",
      "Stage & backdrop",
      "Professional AV setup",
      "Photography & video",
      "Guest management",
      "Catering coordination",
      "Dedicated event coordinator",
    ],
  },
  {
    title: "Enterprise",
    price: "₹49,999",
    subtitle: "For large-scale corporate events",
    icon: Building2,
    features: [
      "Complete event planning",
      "Luxury stage & branding",
      "Advanced AV production",
      "Professional photography",
      "Cinematic event video",
      "Hospitality management",
      "Guest & registration desk",
      "Dedicated event manager",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    text: "Tell us your event type, date, venue, guest count and requirements.",
  },
  {
    number: "02",
    title: "Get Your Event Plan",
    text: "Our team creates a suitable event plan based on your objectives and budget.",
  },
  {
    number: "03",
    title: "We Coordinate Everything",
    text: "Vendors, stage, AV, catering, branding and guest management are coordinated.",
  },
  {
    number: "04",
    title: "Deliver a Seamless Event",
    text: "Your team focuses on business while we manage the event execution.",
  },
];

const eventTypes = [
  "Corporate Meetings",
  "Annual Functions",
  "Conferences",
  "Product Launches",
  "Award Ceremonies",
  "Seminars",
  "Workshops",
  "Dealer Meets",
  "Team Events",
  "Company Celebrations",
];

const faqs = [
  {
    q: "What types of corporate events do you manage?",
    a: "We manage meetings, conferences, seminars, workshops, award functions, product launches, annual functions, dealer meets and company celebrations.",
  },
  {
    q: "Can you arrange the venue?",
    a: "Yes. We can help coordinate suitable hotels, conference halls, banquet spaces and other venues based on your requirements.",
  },
  {
    q: "Do you provide AV and technical equipment?",
    a: "Yes. Audio systems, microphones, LED screens, projectors, presentations and other technical requirements can be arranged.",
  },
  {
    q: "Can the event be customized according to our brand?",
    a: "Yes. Stage design, branding, welcome areas, backdrops and event elements can be customized around your company identity.",
  },
];

export default function CorporateEventsPage() {
  const whatsappNumber = "918878632431";

  const whatsappMessage = encodeURIComponent(
    "Hello OurHub, I want to plan a Corporate Event.\n\nPlease share your corporate event packages, pricing and available services."
  );

  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#DFAE45]/10 blur-[120px]" />
        <div className="absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[480px] overflow-hidden">
        {/* Header */}
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
                OURHUB CORPORATE
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
            src="/images/events/corporate.jpg"
            alt="Corporate event"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-[#05070B]" />

          <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#05070B] via-[#05070B]/80 to-transparent" />

          <div className="absolute bottom-9 left-5 right-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/30 bg-black/45 px-3 py-2 backdrop-blur-xl">
              <Sparkles size={14} className="text-[#E7B94F]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#E7B94F]">
                Professional Event Management
              </span>
            </div>

            <h1 className="max-w-[400px] text-[40px] font-bold leading-[1] tracking-[-0.04em]">
              Business Events,
              <span className="block text-[#E7B94F]">
                Executed Perfectly.
              </span>
            </h1>

            <p className="mt-4 max-w-[390px] text-[14px] leading-6 text-white/65">
              From conferences and meetings to award ceremonies and product
              launches — we manage the details so your team can focus on what
              matters.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(223,174,69,0.2)]"
              >
                Plan Corporate Event
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

        {/* TRUST BAR */}
        <section className="px-5 pt-3">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
            <div className="border-r border-white/10 px-2 py-4 text-center">
              <BadgeCheck
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />
              <p className="text-[10px] font-semibold">Professional Team</p>
            </div>

            <div className="border-r border-white/10 px-2 py-4 text-center">
              <ShieldCheck
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />
              <p className="text-[10px] font-semibold">Reliable Execution</p>
            </div>

            <div className="px-2 py-4 text-center">
              <Clock3
                size={19}
                className="mx-auto mb-2 text-[#E7B94F]"
              />
              <p className="text-[10px] font-semibold">On-Time Delivery</p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 pt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
            Corporate Excellence
          </p>

          <h2 className="mt-3 text-[29px] font-bold leading-tight">
            Your business is
            <br />
            <span className="text-white/40">
              the priority. Not the logistics.
            </span>
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-white/50">
            A successful corporate event needs more than decoration. It needs
            precise planning, professional coordination, technical support and
            seamless execution.
          </p>
        </section>

        {/* SERVICES */}
        <section className="px-5 pt-12">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
              What We Manage
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Complete Corporate Solutions
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
                    <Icon size={21} className="text-[#E7B94F]" />
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

        {/* EVENT TYPES */}
        <section className="px-5 pt-16">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <BriefcaseBusiness
                  size={21}
                  className="text-[#E7B94F]"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#E7B94F]">
                  Event Types
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Built For Business
                </h2>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] text-white/60"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="px-5 pt-16">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
              Corporate Packages
            </p>

            <h2 className="mt-2 text-[29px] font-bold">
              Choose Your Scale
            </h2>

            <p className="mt-2 text-sm leading-5 text-white/40">
              Flexible packages that can be customized around your event.
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
                      Recommended
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                      <Icon size={22} className="text-[#E7B94F]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">{pkg.title}</h3>

                      <p className="mt-1 max-w-[235px] text-xs leading-5 text-white/40">
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
                      `Hello OurHub, I am interested in the ${pkg.title} Corporate Event Package (${pkg.price}). Please share complete details.`
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

        {/* WHY OURHUB */}
        <section className="px-5 pt-16">
          <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#DFAE45]/10 via-white/[0.025] to-transparent p-6">
            <div className="flex items-center gap-2 text-[#E7B94F]">
              <Sparkles size={17} />

              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                Why OurHub
              </span>
            </div>

            <h2 className="mt-4 text-[25px] font-bold leading-tight">
              Professional planning.
              <br />
              <span className="text-[#E7B94F]">
                Zero unnecessary stress.
              </span>
            </h2>

            <div className="mt-7 space-y-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <Headphones
                    size={19}
                    className="text-[#E7B94F]"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Dedicated Coordination
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    One team coordinating your complete event from planning to
                    execution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <MonitorPlay
                    size={19}
                    className="text-[#E7B94F]"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Technical Expertise
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    Professional sound, display and presentation support for
                    smooth event execution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <ShieldCheck
                    size={19}
                    className="text-[#E7B94F]"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Reliable Execution
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    Every important detail is planned before your event day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 pt-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
            Our Process
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            From Brief to Execution
          </h2>

          <div className="mt-7 space-y-5">
            {process.map((step, index) => (
              <div key={step.number} className="flex gap-4">
                <div className="relative flex w-11 shrink-0 justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/30 bg-[#DFAE45]/10 text-xs font-bold text-[#E7B94F]">
                    {step.number}
                  </div>

                  {index !== process.length - 1 && (
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

        {/* CORPORATE EXPERIENCE */}
        <section className="px-5 pt-16">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2">
                <Building2
                  size={19}
                  className="text-[#E7B94F]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#E7B94F]">
                  Corporate Hospitality
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold leading-tight">
                Make every guest
                <br />
                <span className="text-white/45">
                  feel professionally welcomed.
                </span>
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/25 p-4">
                  <Users
                    size={19}
                    className="text-[#E7B94F]"
                  />

                  <p className="mt-3 text-sm font-bold">
                    Guest Management
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/35">
                    Smooth registration & coordination
                  </p>
                </div>

                <div className="rounded-2xl bg-black/25 p-4">
                  <Coffee
                    size={19}
                    className="text-[#E7B94F]"
                  />

                  <p className="mt-3 text-sm font-bold">
                    Hospitality
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/35">
                    Professional guest experience
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
                Event Inspiration
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Corporate Moments
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
                src="/images/events/corporate.jpg"
                alt="Corporate conference"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                Conferences
              </span>
            </div>

            <div className="relative h-52 overflow-hidden rounded-[22px]">
              <img
                src="/images/events/corporate.jpg"
                alt="Corporate event setup"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute bottom-3 left-3 text-xs font-semibold">
                Business Events
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
              “The entire event was handled professionally. From setup and
              technical arrangements to guest coordination, everything felt
              organized.”
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFAE45]/10">
                <BriefcaseBusiness
                  size={17}
                  className="text-[#E7B94F]"
                />
              </div>

              <div>
                <p className="text-sm font-bold">
                  OurHub Corporate Client
                </p>

                <p className="text-xs text-white/40">
                  Corporate Event
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
                Corporate Event Management
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
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/15 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DFAE45]/15">
                <Building2
                  size={25}
                  className="text-[#E7B94F]"
                />
              </div>

              <h2 className="mt-5 text-2xl font-black">
                Planning a Corporate Event?
              </h2>

              <p className="mx-auto mt-3 max-w-[315px] text-sm leading-6 text-white/45">
                Share your event requirements and let our team create a
                professional plan for you.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] py-4 text-sm font-black text-black"
              >
                <MessageCircle size={18} />
                Discuss Your Event
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
            Plan Corporate Event
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </main>
  );
}

