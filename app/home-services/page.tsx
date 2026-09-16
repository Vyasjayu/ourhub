"use client";

import { useRouter } from "next/navigation";
import PopularServices from "@/components/home-services/PopularServices";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Clock3,
  Droplets,
  Headphones,
  Home,
  MapPin,
  Paintbrush,
  Percent,
  Search,
  ShieldCheck,
  Sparkles,
  Sofa,
  UserRound,
  Wallet,
  WashingMachine,
  Wrench,
  Zap,
  Snowflake,
  Bug,
  Hammer,
  Settings,
  Star,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    id: "ac-repair",
    title: "AC Service & Repair",
    shortTitle: "AC Repair",
    description: "Cooling problems, servicing, installation & repair.",
    image: "/home-services/ac.jpg",
    icon: Snowflake,
    link: "/services/ac-repair/book",
  },
  {
    id: "cleaning",
    title: "Home Cleaning",
    shortTitle: "Cleaning",
    description: "Professional cleaning for a fresh, hygienic home.",
    image: "/home-services/cleaning.jpg",
    icon: Sparkles,
    link: "/services/cleaning/book",
  },
  {
    id: "plumbing",
    title: "Plumbing Services",
    shortTitle: "Plumbing",
    description: "Leakage, taps, pipes, drainage & bathroom work.",
    image: "/home-services/plumbing.jpg",
    icon: Droplets,
    link: "/services/plumbing/book",
  },
  {
    id: "electrician",
    title: "Electrical Services",
    shortTitle: "Electrician",
    description: "Fans, switches, wiring, lights & electrical repair.",
    image: "/home-services/electrician.jpg",
    icon: Zap,
    link: "/services/electrician/book",
  },
  {
    id: "appliance-repair",
    title: "Appliance Repair",
    shortTitle: "Appliances",
    description: "Expert repair for everyday home appliances.",
    image: "/home-services/appliance.jpg",
    icon: WashingMachine,
    link: "/services/appliance-repair/book",
  },
  {
    id: "carpenter",
    title: "Carpentry Services",
    shortTitle: "Carpenter",
    description: "Furniture repair, fitting, doors & custom work.",
    image: "/home-services/carpentry.jpg",
    icon: Sofa,
    link: "/services/carpenter/book",
  },
  {
    id: "painting",
    title: "Painting Services",
    shortTitle: "Painting",
    description: "Interior & exterior painting by skilled experts.",
    image: "/home-services/painting.jpg",
    icon: Paintbrush,
    link: "/services/painting/book",
  },
  {
    id: "sanitization",
    title: "Home Sanitization",
    shortTitle: "Sanitization",
    description: "Professional sanitization for safer spaces.",
    image: "/home-services/sanitization.jpg",
    icon: ShieldCheck,
    link: "/services/sanitization/book",
  },
  {
    id: "pest-control",
    title: "Pest Control",
    shortTitle: "Pest Control",
    description: "Effective solutions for common household pests.",
    image: "/home-services/pest-control.jpg",
    icon: Bug,
    link: "/services/pest-control/book",
  },
  {
    id: "handyman",
    title: "Handyman Services",
    shortTitle: "Handyman",
    description: "Small repairs and maintenance around your home.",
    image: "/home-services/handyman.jpg",
    icon: Wrench,
    link: "/services/handyman/book",
  },
  {
    id: "furniture",
    title: "Furniture Services",
    shortTitle: "Furniture",
    description: "Assembly, repair, installation & maintenance.",
    image: "/home-services/furniture.jpg",
    icon: Hammer,
    link: "/services/furniture/book",
  },
  {
    id: "appliance-installation",
    title: "Appliance Installation",
    shortTitle: "Installation",
    description: "Safe and professional appliance installation.",
    image: "/home-services/installation.jpg",
    icon: Settings,
    link: "/services/appliance-installation/book",
  },
];

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Verified",
    subtitle: "Professionals",
  },
  {
    icon: ShieldCheck,
    title: "Trusted",
    subtitle: "Service",
  },
  {
    icon: Clock3,
    title: "On-time",
    subtitle: "Service",
  },
  {
    icon: Headphones,
    title: "24×7",
    subtitle: "Support",
  },
];

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Choose",
    subtitle: "your service",
  },
  {
    icon: CalendarDays,
    number: "02",
    title: "Book",
    subtitle: "date & time",
  },
  {
    icon: UserRound,
    number: "03",
    title: "Meet",
    subtitle: "your expert",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Relax",
    subtitle: "job completed",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description:
      "Connect with trusted service professionals selected for quality and reliability.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "Know what you are booking with simple and transparent service information.",
  },
  {
    icon: Clock3,
    title: "Convenient Booking",
    description:
      "Choose a service and request a convenient date and time in just a few taps.",
  },
  {
    icon: Headphones,
    title: "OurHub Support",
    description:
      "Need help? OurHub support is available to assist you throughout your service journey.",
  },
];

export default function HomeServicesPage() {
  const router = useRouter();

  const handleServiceSelect = (
    serviceId: string,
    serviceName: string
  ) => {
    if (!serviceId) return;

    router.push(`/services/${serviceId}/book`);
  };

  const handleBookService = () => {
    router.push("/services");
  };

  const handleSearch = () => {
    router.push("/services");
  };

  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-[#020407]">

        {/* TOP AMBIENT GLOW */}
        <div className="pointer-events-none fixed left-1/2 top-[-180px] z-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.055] blur-[100px]" />

        {/* HEADER */}
        <header className="relative z-10 px-5 pb-1 pt-5">

          <div className="flex items-center justify-between">

            <button
              type="button"
              aria-label="Go back"
              onClick={() => router.back()}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-2xl
                border border-white/[0.08]
                bg-white/[0.035]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                transition
                active:scale-90
              "
            >
              <ArrowLeft size={21} strokeWidth={1.7} />
            </button>

            <div className="flex flex-col items-center">

              <div className="text-[28px] font-black leading-none tracking-[-2px]">
                <span className="text-white">OUR</span>
                <span className="text-[#DFAE45]">HUB</span>
              </div>

              <div className="mt-1 flex items-center gap-1.5">
                <span className="h-[3px] w-[3px] rounded-full bg-[#DFAE45]" />

                <span className="text-[8px] font-bold tracking-[3px] text-white/35">
                  HOME SERVICES
                </span>

                <span className="h-[3px] w-[3px] rounded-full bg-[#DFAE45]" />
              </div>

            </div>

            <button
              type="button"
              aria-label="Notifications"
              className="
                relative flex h-11 w-11 items-center justify-center
                rounded-2xl
                border border-white/[0.08]
                bg-white/[0.035]
                transition
                active:scale-90
              "
            >
              <Bell size={21} strokeWidth={1.7} />

              <span className="
                absolute right-[9px] top-[8px]
                h-[7px] w-[7px]
                rounded-full
                bg-[#DFAE45]
                shadow-[0_0_14px_rgba(223,174,69,0.8)]
              " />
            </button>

          </div>

          {/* LOCATION */}
          <button
            type="button"
            className="mt-7 flex items-center gap-2.5 text-left"
          >
            <div className="
              flex h-10 w-10 items-center justify-center
              rounded-[14px]
              border border-[#DFAE45]/20
              bg-[#DFAE45]/[0.06]
            ">
              <MapPin
                size={18}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[1.6px] text-white/30">
                Serving in
              </p>

              <div className="mt-0.5 flex items-center gap-1">
                <span className="text-[15px] font-semibold">
                  Ujjain, Madhya Pradesh
                </span>

                <ChevronDown
                  size={14}
                  className="text-white/40"
                />
              </div>
            </div>
          </button>

          {/* SEARCH */}
          <button
            type="button"
            onClick={handleSearch}
            className="
              group mt-5 flex h-[60px] w-full items-center
              rounded-[20px]
              border border-white/[0.08]
              bg-[#0A0D11]
              px-3.5
              text-left
              shadow-[0_15px_45px_rgba(0,0,0,0.25)]
              transition
              active:scale-[0.985]
            "
          >
            <div className="
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-[14px]
              bg-[#DFAE45]/[0.07]
              border border-[#DFAE45]/10
            ">
              <Search
                size={20}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <span className="ml-3 text-[13px] text-white/35">
              What service do you need today?
            </span>

            <div className="
              ml-auto flex h-8 w-8 items-center justify-center
              rounded-xl bg-white/[0.035]
            ">
              <ChevronRight
                size={16}
                className="text-white/30"
              />
            </div>
          </button>

        </header>

        {/* HERO */}
        <section className="relative z-10 px-5 pt-5">

          <div className="
            relative h-[350px]
            overflow-hidden
            rounded-[28px]
            border border-[#DFAE45]/20
            bg-[#080A0D]
            shadow-[0_25px_80px_rgba(0,0,0,0.42)]
          ">

            {/* GOLD LIGHT */}
            <div className="
              absolute -right-20 -top-24
              h-[290px] w-[290px]
              rounded-full
              bg-[#DFAE45]/[0.13]
              blur-[85px]
            " />

            <div className="
              absolute -bottom-28 -left-24
              h-[230px] w-[230px]
              rounded-full
              bg-[#DFAE45]/[0.055]
              blur-[75px]
            " />

            {/* IMAGE */}
            <div className="
              pointer-events-none
              absolute bottom-0 right-[-18px]
              z-[5]
              h-[310px] w-[235px]
            ">
              <img
                src="/home-services/hero-expert.png"
                alt="OurHub Home Service Expert"
                className="h-full w-full object-contain object-bottom"
              />
            </div>

            {/* LEFT OVERLAY */}
            <div className="
              pointer-events-none absolute inset-y-0 left-0
              z-10 w-[78%]
              bg-gradient-to-r
              from-[#080A0D]
              via-[#080A0D]/95
              to-transparent
            " />

            {/* BOTTOM OVERLAY */}
            <div className="
              pointer-events-none absolute inset-0 z-10
              bg-gradient-to-b
              from-transparent
              via-transparent
              to-[#020407]/90
            " />

            {/* HERO CONTENT */}
            <div className="relative z-20 h-full p-6">

              <div className="
                inline-flex items-center gap-2
                rounded-full
                border border-[#DFAE45]/20
                bg-[#DFAE45]/[0.06]
                px-3 py-1.5
              ">
                <Sparkles
                  size={12}
                  className="text-[#DFAE45]"
                />

                <span className="
                  text-[8px]
                  font-extrabold
                  tracking-[1.5px]
                  text-[#DFAE45]
                ">
                  TRUSTED HOME SERVICES
                </span>
              </div>

              <h1 className="
                mt-5 max-w-[215px]
                text-[31px]
                font-black
                leading-[1.04]
                tracking-[-1.5px]
              ">
                Your Home.
                <br />
                <span className="text-[#DFAE45]">
                  Our Experts.
                </span>
              </h1>

              <p className="
                mt-4 max-w-[200px]
                text-[12px]
                leading-[1.6]
                text-white/50
              ">
                From quick repairs to complete home care —
                book trusted professionals in minutes.
              </p>

              <button
                type="button"
                onClick={handleBookService}
                className="
                  mt-5 flex h-[48px]
                  items-center gap-2
                  rounded-[15px]
                  bg-[#E7B94F]
                  px-5
                  text-[12px]
                  font-black
                  text-black
                  shadow-[0_12px_35px_rgba(231,185,79,0.18)]
                  transition
                  active:scale-95
                "
              >
                Explore Services
                <ArrowRight size={16} />
              </button>

              {/* HERO MINI TRUST */}
              <div className="absolute bottom-5 left-6 flex items-center gap-2">

                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="
                        flex h-6 w-6 items-center justify-center
                        rounded-full
                        border-2 border-[#080A0D]
                        bg-white/[0.12]
                      "
                    >
                      <UserRound size={11} className="text-white/55" />
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <Star
                      size={10}
                      fill="#DFAE45"
                      className="text-[#DFAE45]"
                    />
                    <span className="text-[9px] font-bold">
                      Trusted service
                    </span>
                  </div>

                  <p className="text-[8px] text-white/30">
                    Local professionals
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* TRUST */}
        <section className="relative z-10 px-5 pt-5">

          <div className="
            grid grid-cols-4
            rounded-[22px]
            border border-white/[0.07]
            bg-[#090C10]
            px-1 py-5
            shadow-[0_15px_40px_rgba(0,0,0,0.18)]
          ">

            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-[13px]
                    border border-[#DFAE45]/15
                    bg-[#DFAE45]/[0.045]
                  ">
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <p className="
                    mt-2.5
                    text-[9px]
                    font-bold
                    leading-4
                    text-white/75
                  ">
                    {item.title}
                    <br />
                    <span className="font-medium text-white/35">
                      {item.subtitle}
                    </span>
                  </p>
                </div>
              );
            })}

          </div>

        </section>

        {/* POPULAR SERVICES */}
        <section className="relative z-10 pt-9">

          <div className="mb-2 flex items-end justify-between px-5">

            <div>
              <p className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[2px]
                text-[#DFAE45]
              ">
                Most requested
              </p>

              <h2 className="
                mt-1
                text-[23px]
                font-black
                tracking-[-0.7px]
              ">
                Popular Services
              </h2>
            </div>

            <button
              type="button"
              onClick={handleBookService}
              className="
                flex items-center gap-1
                pb-1
                text-[10px]
                font-bold
                text-[#DFAE45]
              "
            >
              View all
              <ChevronRight size={14} />
            </button>

          </div>

          <PopularServices
            onSelectService={handleServiceSelect}
          />

        </section>

        {/* ALL SERVICES */}
        <section className="relative z-10 px-5 pt-9">

          <div className="flex items-end justify-between">

            <div>
              <p className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[2px]
                text-[#DFAE45]
              ">
                Explore
              </p>

              <h2 className="
                mt-1
                text-[23px]
                font-black
                tracking-[-0.7px]
              ">
                All Home Services
              </h2>
            </div>

            <span className="
              rounded-full
              border border-white/[0.07]
              bg-white/[0.025]
              px-2.5 py-1
              text-[9px]
              font-semibold
              text-white/35
            ">
              {services.length} services
            </span>

          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() =>
                    handleServiceSelect(
                      service.id,
                      service.title
                    )
                  }
                  className="
                    group relative
                    overflow-hidden
                    rounded-[21px]
                    border border-white/[0.075]
                    bg-[#090C10]
                    text-left
                    shadow-[0_12px_35px_rgba(0,0,0,0.15)]
                    transition
                    active:scale-[0.975]
                  "
                >

                  {/* IMAGE */}
                  <div className="relative h-[124px] overflow-hidden">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="
                        h-full w-full
                        object-cover
                        opacity-75
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    <div className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#090C10]
                      via-transparent
                      to-black/15
                    " />

                    {/* ICON */}
                    <div className="
                      absolute left-3 top-3
                      flex h-8 w-8
                      items-center justify-center
                      rounded-[11px]
                      border border-white/[0.12]
                      bg-black/45
                      backdrop-blur-md
                    ">
                      <Icon
                        size={15}
                        className="text-[#E7B94F]"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* VERIFIED */}
                    <div className="
                      absolute right-2.5 top-2.5
                      flex items-center gap-1
                      rounded-full
                      border border-white/[0.1]
                      bg-black/40
                      px-2 py-1
                      backdrop-blur-md
                    ">
                      <BadgeCheck
                        size={10}
                        className="text-[#DFAE45]"
                      />

                      <span className="text-[7px] font-bold text-white/60">
                        VERIFIED
                      </span>
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="px-3.5 pb-3.5 pt-2.5">

                    <div className="flex items-center justify-between gap-2">

                      <h3 className="
                        text-[13px]
                        font-extrabold
                        leading-5
                      ">
                        {service.shortTitle}
                      </h3>

                      <div className="
                        flex h-6 w-6
                        shrink-0
                        items-center justify-center
                        rounded-full
                        bg-[#DFAE45]/[0.07]
                      ">
                        <ChevronRight
                          size={12}
                          className="text-[#DFAE45]"
                        />
                      </div>

                    </div>

                    <p className="
                      mt-1
                      line-clamp-2
                      text-[9px]
                      leading-4
                      text-white/35
                    ">
                      {service.description}
                    </p>

                  </div>

                </button>
              );
            })}

          </div>

        </section>

        {/* OFFER */}
        <section className="relative z-10 px-5 pt-8">

          <div className="
            relative overflow-hidden
            rounded-[24px]
            border border-[#DFAE45]/20
            bg-gradient-to-br
            from-[#171209]
            via-[#100E09]
            to-[#090C10]
            p-5
          ">

            <div className="
              absolute -right-16 -top-20
              h-[180px] w-[180px]
              rounded-full
              bg-[#DFAE45]/10
              blur-[55px]
            " />

            <div className="relative z-10 flex items-center gap-3.5">

              <div className="
                flex h-[56px] w-[56px]
                shrink-0 items-center justify-center
                rounded-[17px]
                bg-[#E7B94F]
                shadow-[0_8px_30px_rgba(231,185,79,0.14)]
              ">
                <Percent
                  size={25}
                  strokeWidth={2.3}
                  className="text-black"
                />
              </div>

              <div className="min-w-0">

                <p className="
                  text-[8px]
                  font-extrabold
                  tracking-[1.8px]
                  text-[#DFAE45]
                ">
                  WELCOME OFFER
                </p>

                <h3 className="
                  mt-1
                  text-[17px]
                  font-black
                ">
                  Get up to 20% OFF
                </h3>

                <p className="
                  mt-1
                  text-[9px]
                  text-white/40
                ">
                  On your first home service.
                </p>

              </div>

              <button
                type="button"
                onClick={handleBookService}
                className="
                  ml-auto
                  shrink-0
                  rounded-[12px]
                  bg-[#E7B94F]
                  px-3.5 py-3
                  text-[9px]
                  font-black
                  text-black
                  transition
                  active:scale-95
                "
              >
                BOOK
              </button>

            </div>

          </div>

        </section>

        {/* WHY OURHUB */}
        <section className="relative z-10 px-5 pt-10">

          <p className="
            text-[9px]
            font-extrabold
            uppercase
            tracking-[2px]
            text-[#DFAE45]
          ">
            Why OurHub
          </p>

          <h2 className="
            mt-1
            text-[23px]
            font-black
            tracking-[-0.7px]
          ">
            Service made simple.
          </h2>

          <p className="
            mt-2
            max-w-[330px]
            text-[11px]
            leading-5
            text-white/35
          ">
            Everything you need to get your home
            taken care of, without the hassle.
          </p>

          <div className="mt-5 space-y-3">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="
                    flex gap-3.5
                    rounded-[20px]
                    border border-white/[0.065]
                    bg-[#090C10]
                    p-4
                    shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  "
                >

                  <div className="
                    flex h-11 w-11
                    shrink-0 items-center justify-center
                    rounded-[14px]
                    border border-[#DFAE45]/15
                    bg-[#DFAE45]/[0.05]
                  ">
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div className="min-w-0">

                    <h3 className="text-[12px] font-extrabold">
                      {benefit.title}
                    </h3>

                    <p className="
                      mt-1
                      text-[9px]
                      leading-[1.6]
                      text-white/35
                    ">
                      {benefit.description}
                    </p>

                  </div>

                  <Check
                    size={14}
                    className="
                      ml-auto mt-1
                      shrink-0
                      text-[#DFAE45]/55
                    "
                  />

                </div>
              );
            })}

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="relative z-10 px-5 pt-10">

          <div className="flex items-end justify-between">

            <div>
              <p className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[2px]
                text-[#DFAE45]
              ">
                Simple process
              </p>

              <h2 className="
                mt-1
                text-[23px]
                font-black
                tracking-[-0.7px]
              ">
                How It Works
              </h2>
            </div>

            <div className="
              flex h-8 w-8
              items-center justify-center
              rounded-full
              border border-[#DFAE45]/15
              bg-[#DFAE45]/[0.05]
            ">
              <ArrowRight
                size={14}
                className="text-[#DFAE45]"
              />
            </div>

          </div>

          <div className="mt-6 grid grid-cols-4 gap-1">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative text-center"
                >

                  <div className="
                    relative mx-auto
                    flex h-[58px] w-[58px]
                    items-center justify-center
                    rounded-full
                    border border-[#DFAE45]/20
                    bg-[#090C10]
                    shadow-[0_8px_25px_rgba(0,0,0,0.18)]
                  ">

                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="text-[#E7B94F]"
                    />

                    <span className="
                      absolute -right-1 -top-1
                      flex h-5 w-5
                      items-center justify-center
                      rounded-full
                      bg-[#E7B94F]
                      text-[8px]
                      font-black
                      text-black
                    ">
                      {index + 1}
                    </span>

                  </div>

                  <h3 className="
                    mt-3
                    text-[10px]
                    font-extrabold
                  ">
                    {step.title}
                  </h3>

                  <p className="
                    mt-0.5
                    text-[8px]
                    leading-4
                    text-white/30
                  ">
                    {step.subtitle}
                  </p>

                  {index !== steps.length - 1 && (
                    <div className="
                      absolute
                      left-[calc(100%_-_3px)]
                      top-[29px]
                      w-[18px]
                      border-t
                      border-dashed
                      border-white/[0.1]
                    " />
                  )}

                </div>
              );
            })}

          </div>

        </section>

        {/* COVERAGE */}
        <section className="relative z-10 px-5 pt-10">

          <div className="
            relative overflow-hidden
            rounded-[24px]
            border border-white/[0.07]
            bg-[#090C10]
            p-5
          ">

            <div className="
              absolute -bottom-20 -right-16
              h-[180px] w-[180px]
              rounded-full
              bg-[#DFAE45]/[0.055]
              blur-[60px]
            " />

            <div className="relative z-10">

              <div className="flex items-center gap-3">

                <div className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-[13px]
                  border border-[#DFAE45]/15
                  bg-[#DFAE45]/[0.06]
                ">
                  <MapPin
                    size={18}
                    className="text-[#DFAE45]"
                  />
                </div>

                <div>
                  <p className="
                    text-[8px]
                    uppercase
                    tracking-[1.6px]
                    text-white/25
                  ">
                    Currently serving
                  </p>

                  <h3 className="
                    mt-0.5
                    text-[14px]
                    font-extrabold
                  ">
                    Ujjain • Ratlam • Indore
                  </h3>
                </div>

              </div>

              <p className="
                mt-4
                text-[10px]
                leading-5
                text-white/35
              ">
                Quality home services delivered by
                professionals across our service areas.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                {["Ujjain", "Ratlam", "Indore"].map(
                  (city) => (
                    <span
                      key={city}
                      className="
                        rounded-full
                        border border-white/[0.07]
                        bg-white/[0.025]
                        px-3 py-1.5
                        text-[8px]
                        font-bold
                        text-white/50
                      "
                    >
                      {city}
                    </span>
                  )
                )}

              </div>

            </div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="relative z-10 px-5 pb-[150px] pt-10">

          <div className="
            relative overflow-hidden
            rounded-[27px]
            border border-[#DFAE45]/20
            bg-gradient-to-br
            from-[#171209]
            to-[#0B0D10]
            px-5 py-8
            text-center
          ">

            <div className="
              absolute left-1/2 top-[-100px]
              h-[210px] w-[210px]
              -translate-x-1/2
              rounded-full
              bg-[#DFAE45]/10
              blur-[65px]
            " />

            <div className="relative z-10">

              <div className="
                mx-auto flex h-12 w-12
                items-center justify-center
                rounded-[16px]
                bg-[#E7B94F]
                shadow-[0_10px_30px_rgba(231,185,79,0.12)]
              ">
                <Home
                  size={21}
                  className="text-black"
                  strokeWidth={1.8}
                />
              </div>

              <h2 className="
                mt-4
                text-[22px]
                font-black
                tracking-[-0.6px]
              ">
                Need a hand at home?
              </h2>

              <p className="
                mx-auto mt-2
                max-w-[270px]
                text-[10px]
                leading-5
                text-white/35
              ">
                Choose a service and let OurHub
                take care of the rest.
              </p>

              <button
                type="button"
                onClick={handleBookService}
                className="
                  mt-5
                  inline-flex h-[49px]
                  items-center gap-2
                  rounded-[15px]
                  bg-[#E7B94F]
                  px-6
                  text-[11px]
                  font-black
                  text-black
                  shadow-[0_12px_35px_rgba(231,185,79,0.15)]
                  transition
                  active:scale-95
                "
              >
                Book a Service
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </section>

        {/* BOTTOM NAV */}
        <nav className="
          fixed bottom-0 left-1/2
          z-50
          h-[86px]
          w-full max-w-[480px]
          -translate-x-1/2
          border-t border-white/[0.07]
          bg-[#07090C]/95
          px-3
          backdrop-blur-2xl
        ">

          <div className="grid h-full grid-cols-5">

            {/* HOME */}
            <button
              type="button"
              onClick={() => router.push("/services")}
              className="flex flex-col items-center justify-center gap-1"
            >
              <Home
                size={21}
                strokeWidth={1.8}
                className="text-[#E7B94F]"
              />

              <span className="
                text-[8px]
                font-bold
                text-[#E7B94F]
              ">
                Home
              </span>
            </button>

            {/* BOOKINGS */}
            <button
              type="button"
              onClick={() => router.push("/bookings")}
              className="flex flex-col items-center justify-center gap-1"
            >
              <ClipboardList
                size={21}
                strokeWidth={1.7}
                className="text-white/35"
              />

              <span className="text-[8px] text-white/35">
                Bookings
              </span>
            </button>

            {/* CENTER */}
            <button
              type="button"
              onClick={handleBookService}
              className="
                relative
                flex flex-col
                items-center
                justify-end
                pb-3
              "
            >

              <div className="
                absolute -top-8
                flex h-[62px] w-[62px]
                items-center justify-center
                rounded-full
                border-[5px]
                border-[#07090C]
                bg-[#DFAE45]
                shadow-[0_0_35px_rgba(223,174,69,0.18)]
              ">
                <CalendarDays
                  size={24}
                  strokeWidth={1.8}
                  className="text-black"
                />
              </div>

              <span className="
                text-[8px]
                font-bold
                text-white
              ">
                Book Now
              </span>

            </button>

            {/* WALLET */}
            <button
              type="button"
              onClick={() => router.push("/services/wallet")}
              className="flex flex-col items-center justify-center gap-1"
            >
              <Wallet
                size={21}
                strokeWidth={1.7}
                className="text-white/35"
              />

              <span className="text-[8px] text-white/35">
                Wallet
              </span>
            </button>

            {/* PROFILE */}
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="flex flex-col items-center justify-center gap-1"
            >
              <UserRound
                size={21}
                strokeWidth={1.7}
                className="text-white/35"
              />

              <span className="text-[8px] text-white/35">
                Profile
              </span>
            </button>

          </div>

        </nav>

      </div>
    </main>
  );
}