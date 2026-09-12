"use client";

import PageLayout from "@/components/PageLayout";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Headphones,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Religious Services",
    description: "Pandit booking, astrology, online pooja and spiritual services.",
    icon: Sparkles,
  },
  {
    title: "Home Services",
    description: "AC repair, electrician, plumbing, cleaning, carpenter and more.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Automobile Services",
    description: "Reliable services for your vehicle and everyday automobile needs.",
    icon: Rocket,
  },
  {
    title: "Construction",
    description: "Home construction, renovation and professional construction services.",
    icon: Target,
  },
  {
    title: "Event Management",
    description: "Wedding, birthday, corporate events, decoration and catering.",
    icon: Users,
  },
  {
    title: "Digital & Web",
    description: "Digital marketing, advertising, web design and development.",
    icon: Globe2,
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Verified Professionals",
    description:
      "We focus on connecting customers with genuine and experienced service professionals.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Experience",
    description:
      "Our platform is designed around transparency, reliability and customer confidence.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Booking",
    description:
      "A simple and secure booking experience designed for everyday service needs.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "We're building a dependable support experience to help customers throughout their journey.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout title="About OurHub Services">
      <div className="relative overflow-hidden pb-8">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-28 -top-20 h-72 w-72 rounded-full bg-[#DFAE45]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-[420px] h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Hero */}
        <section className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#111C2B] via-[#0B1624] to-[#070D16] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFAE45]/30 bg-[#DFAE45]/10">
              <Sparkles
                size={27}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#E7B94F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DFAE45]" />
              All Services. One Hub.
            </div>

            <h1 className="max-w-[330px] text-[29px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white">
              Your trusted destination for{" "}
              <span className="text-[#DFAE45]">professional services.</span>
            </h1>

            <p className="mt-4 text-[14px] leading-7 text-gray-400">
              OurHub Services is built to make discovering and booking reliable
              professionals simple, convenient and transparent.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                ["1", "Hub"],
                ["6+", "Categories"],
                ["24/7", "Convenience"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-2 py-4 text-center"
                >
                  <div className="text-lg font-extrabold text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-[10px] font-medium text-gray-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mt-7">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-7 w-1 rounded-full bg-[#DFAE45]" />
            <h2 className="text-[20px] font-bold text-white">
              Who We Are
            </h2>
          </div>

          <div className="space-y-4 text-[14px] leading-7 text-gray-400">
            <p>
              Welcome to{" "}
              <span className="font-semibold text-white">
                OurHub Services
              </span>
              , a multi-service platform created to make professional services
              easier to discover and book.
            </p>

            <p>
              From everyday home requirements to religious services,
              construction, events, automobile needs and digital solutions,
              OurHub brings multiple service categories together in one
              convenient platform.
            </p>

            <p>
              Our goal is simple —{" "}
              <span className="font-semibold text-[#E7B94F]">
                connect customers with trusted professionals
              </span>{" "}
              while creating meaningful opportunities for service providers to
              grow their businesses.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mt-8">
          <div className="rounded-[24px] border border-[#DFAE45]/20 bg-[#0C1725] p-5 shadow-[0_15px_45px_rgba(0,0,0,0.18)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Target
                  size={23}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#DFAE45]">
                  Our Mission
                </p>

                <h2 className="mt-1 text-[20px] font-bold text-white">
                  Making service booking simpler.
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-gray-400">
                  We aim to create a trusted marketplace where customers can
                  easily discover, compare and book professional services with
                  greater confidence and convenience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-9">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                One Platform
              </p>
              <h2 className="mt-1 text-[21px] font-bold text-white">
                Services We Offer
              </h2>
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-gray-500">
              Growing
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-[20px] border border-white/[0.07] bg-[#0C1623] p-4 transition-all duration-300 hover:border-[#DFAE45]/25 hover:bg-[#101C2B]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#DFAE45]/15 bg-[#DFAE45]/10">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <h3 className="text-[13px] font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-gray-500">
                    {service.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-[#DFAE45]">
                    Explore
                    <ChevronRight size={12} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why OurHub */}
        <section className="mt-9">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Built Around Trust
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              Why Choose OurHub?
            </h2>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex gap-4 rounded-[20px] border border-white/[0.07] bg-gradient-to-r from-[#0D1826] to-[#09121E] p-4"
                >
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-[#DFAE45]"
                    />

                    {index < 3 && (
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#DFAE45] text-[8px] font-black text-black">
                        {index + 1}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-[14px] font-bold text-white">
                      {benefit.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Vision */}
        <section className="mt-9">
          <div className="relative overflow-hidden rounded-[25px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151A20] via-[#101821] to-[#0A111A] p-6">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-2xl" />

            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Rocket
                  size={23}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                Our Vision
              </p>

              <h2 className="mt-2 text-[23px] font-extrabold leading-8 text-white">
                Building a trusted service ecosystem for India.
              </h2>

              <p className="mt-4 text-[13px] leading-6 text-gray-400">
                We envision OurHub becoming a trusted destination where
                customers can access quality services and professionals can
                build sustainable businesses through genuine opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="mt-8">
          <div className="rounded-[24px] border border-emerald-400/10 bg-emerald-400/[0.035] p-5">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10">
                <CheckCircle2
                  size={21}
                  strokeWidth={1.8}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <h2 className="text-[17px] font-bold text-white">
                  Our Commitment
                </h2>

                <p className="mt-2 text-[12px] leading-6 text-gray-400">
                  At OurHub Services, we are committed to creating a safe,
                  transparent and reliable platform where customers can book
                  services with confidence and service providers can grow
                  through genuine bookings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Brand Card */}
        <section className="mt-8">
          <div className="rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-b from-[#121B28] to-[#0A111A] p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFAE45]/25 bg-[#DFAE45]/10">
              <Globe2
                size={25}
                strokeWidth={1.7}
                className="text-[#DFAE45]"
              />
            </div>

            <h2 className="mt-4 text-[22px] font-extrabold text-white">
              OurHub Services
            </h2>

            <p className="mt-2 text-[12px] font-medium tracking-wide text-[#DFAE45]">
              ALL SERVICES. ONE HUB.
            </p>

            <p className="mx-auto mt-4 max-w-[300px] text-[11px] leading-5 text-gray-500">
              Discover services. Connect with professionals. Get things done.
            </p>
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-4" />
      </div>
    </PageLayout>
  );
}