"use client";

import { useRouter } from "next/navigation";
import PopularServices from "@/components/home-services/PopularServices";

import {
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Headphones,
  Home,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  UserRound,
  Wallet,
  Percent,
  Snowflake,
  Sofa,
  WashingMachine,
  Bug,
  Zap,
  Droplets,
  Paintbrush,
  ArrowLeft,
} from "lucide-react";

/* =========================================================
   SERVICES
========================================================= */

interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  image: string;
}

const services: Service[] = [
  {
    id: "ac-repair",
    title: "AC Service &\nRepair",
    image: "/home-services/ac.jpg",
    icon: Snowflake,
  },
  {
    id: "cleaning",
    title: "Cleaning &\nPest Control",
    image: "/home-services/cleaning.jpg",
    icon: Bug,
  },
  {
    id: "plumbing",
    title: "Plumbing\nServices",
    image: "/home-services/plumbing.jpg",
    icon: Droplets,
  },
  {
    id: "electrician",
    title: "Electrical\nServices",
    image: "/home-services/electrician.jpg",
    icon: Zap,
  },
  {
    id: "appliance-repair",
    title: "Appliance\nRepair",
    image: "/home-services/appliance.jpg",
    icon: WashingMachine,
  },
  {
    id: "carpenter",
    title: "Carpentry\nServices",
    image: "/home-services/carpentry.jpg",
    icon: Sofa,
  },
  {
    id: "painting",
    title: "Painting\nServices",
    image: "/home-services/painting.jpg",
    icon: Paintbrush,
  },
  {
    id: "sanitization",
    title: "Home\nSanitization",
    image: "/home-services/sanitization.jpg",
    icon: ShieldCheck,
  },
];

/* =========================================================
   TRUST ITEMS
========================================================= */

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Verified",
    subtitle: "Professionals",
  },
  {
    icon: Wallet,
    title: "Transparent",
    subtitle: "Pricing",
  },
  {
    icon: ShieldCheck,
    title: "On-time",
    subtitle: "Service",
  },
  {
    icon: Headphones,
    title: "24x7",
    subtitle: "Support",
  },
];

/* =========================================================
   HOW IT WORKS
========================================================= */

const steps = [
  {
    icon: ClipboardList,
    number: "1",
    title: "Choose",
    subtitle: "Service",
  },
  {
    icon: CalendarDays,
    number: "2",
    title: "Select Date",
    subtitle: "& Time",
  },
  {
    icon: UserRound,
    number: "3",
    title: "Expert at",
    subtitle: "Your Doorstep",
  },
  {
    icon: ShieldCheck,
    number: "4",
    title: "Service",
    subtitle: "Completed",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function HomeServicesPage() {
  const router = useRouter();

  /* =======================================================
     SERVICE CLICK
  ======================================================= */

  const handleServiceSelect = (
    serviceId: string,
    serviceName: string
  ) => {
    console.log("Selected service:", {
      serviceId,
      serviceName,
    });

    /*
      Direct service booking flow:

      AC Repair
      ↓
      /services/ac-repair/book

      Cleaning
      ↓
      /services/cleaning/book

      Fan Repair
      ↓
      /services/fan-repair/book
    */

    if (!serviceId) {
      console.error("Service ID is missing");
      return;
    }

    router.push(`/services/${serviceId}/book`);
  };

  /* =======================================================
     BOOK A SERVICE
  ======================================================= */

  const handleBookService = () => {
    router.push("/services");
  };

  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = () => {
    router.push("/services");
  };

  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-[#050608]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="px-5 pt-5">

          <div className="flex items-center justify-between">

            {/* MENU */}

          <button
  type="button"
  aria-label="Go back"
  onClick={() => router.back()}
  className="flex h-10 w-10 items-center justify-center"
>
  <ArrowLeft
    size={31}
    strokeWidth={2}
    className="text-white"
  />
</button>

            {/* LOGO */}

            <div className="flex flex-col items-center leading-none">

              <div className="text-[31px] font-black tracking-[-1.8px]">

                <span className="text-white">
                  OUR
                </span>

                <span className="text-[#DFAE45]">
                  HUB
                </span>

              </div>

              <span className="mt-1 text-[10px] font-semibold tracking-[4px] text-white/80">
                HOME SERVICES
              </span>

            </div>

            {/* NOTIFICATION */}

            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-10 w-10 items-center justify-center"
            >

              <Bell
                size={29}
                strokeWidth={1.8}
              />

              <span className="absolute right-[2px] top-[2px] h-[9px] w-[9px] rounded-full bg-[#DFAE45]" />

            </button>

          </div>

          {/* LOCATION */}

          <button
            type="button"
            className="mt-8 flex items-center gap-2 text-left"
          >

            <MapPin
              size={23}
              strokeWidth={2}
              className="text-white"
            />

            <span className="text-[17px] font-medium">
              Ujjain, Madhya Pradesh
            </span>

            <ChevronDown
              size={17}
              className="ml-1 text-white/80"
            />

          </button>

          {/* SEARCH */}

          <button
            type="button"
            onClick={handleSearch}
            className="mt-5 flex h-[78px] w-full items-center rounded-[20px] border border-white/[0.10] bg-[#111317] px-5 text-left shadow-[inset_0_0_30px_rgba(255,255,255,0.015)]"
          >

            <Search
              size={29}
              strokeWidth={1.7}
              className="text-white/75"
            />

            <span className="ml-5 text-[17px] text-white/45">
              Search for a service...
            </span>

          </button>

        </header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="px-5 pt-5">

          <div className="relative h-[330px] overflow-hidden rounded-[22px] border border-[#DFAE45]/25 bg-[#080808]">

            {/* GOLD GLOW */}

            <div className="absolute -right-24 -top-20 h-[260px] w-[260px] rounded-full bg-[#DFAE45]/10 blur-[80px]" />

            {/* CONTENT */}

            <div className="relative z-20 h-full p-7">

              <p className="text-[12px] font-semibold tracking-[0.6px] text-[#DFAE45]">
                PROFESSIONAL. RELIABLE. TRUSTED.
              </p>

              <h1 className="mt-5 max-w-[215px] text-[29px] font-bold leading-[1.12] tracking-[-1px] text-white">
                All Your Home
                <br />
                Needs, Solved
              </h1>

              <p className="mt-5 max-w-[205px] text-[14px] leading-[1.55] text-white/65">
                Verified experts at your doorstep.
                <br />
                Book in minutes, relax always.
              </p>

              {/* BOOK SERVICE */}

              <button
                type="button"
                onClick={handleBookService}
                className="
                  mt-6
                  flex
                  h-[51px]
                  items-center
                  gap-2
                  rounded-[12px]
                  bg-[#E7B94F]
                  px-5
                  text-[15px]
                  font-bold
                  text-black
                  shadow-[0_8px_30px_rgba(231,185,79,0.18)]
                  transition
                  active:scale-[0.97]
                "
              >

                Book a Service

                <ChevronRight size={20} />

              </button>

            </div>

            {/* EXPERT IMAGE */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-[-18px]
                z-10
                h-[275px]
                w-[205px]
              "
            >

              <img
                src="/home-services/hero-expert.png"
                alt="OURHUB Home Service Expert"
                className="
                  h-full
                  w-full
                  object-contain
                  object-bottom
                "
              />

            </div>

            {/* DARK GRADIENT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-[15]
                w-[62%]
                bg-gradient-to-r
                from-[#080808]
                via-[#080808]/95
                to-transparent
              "
            />

            {/* BOTTOM BLEND */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-[16]
                bg-gradient-to-b
                from-transparent
                via-transparent
                to-[#080808]/40
              "
            />

          </div>

        </section>

        {/* =====================================================
            TRUST STRIP
        ===================================================== */}

        <section className="px-5 pt-5">

          <div className="grid grid-cols-4 rounded-[22px] border border-white/[0.10] bg-[#111317] px-2 py-6">

            {trustItems.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >

                  <div className="flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#DFAE45]/35 bg-[#0B0C0F]">

                    <Icon
                      size={24}
                      strokeWidth={1.7}
                      className="text-[#E7B94F]"
                    />

                  </div>

                  <p className="mt-3 text-[12px] font-medium leading-4">
                    {item.title}
                    <br />
                    {item.subtitle}
                  </p>

                </div>
              );

            })}

          </div>

        </section>

        {/* =====================================================
            POPULAR SERVICES
        ===================================================== */}

        <PopularServices
          onSelectService={handleServiceSelect}
        />

        {/* =====================================================
            DISCOUNT
        ===================================================== */}

        <section className="px-5 pt-5">

          <div className="flex min-h-[112px] items-center justify-between rounded-[20px] border border-[#DFAE45]/30 bg-gradient-to-r from-[#15110A] to-[#0D0E10] px-5">

            <div className="flex items-center gap-4">

              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#E7B94F]">

                <Percent
                  size={28}
                  strokeWidth={2.2}
                  className="text-black"
                />

              </div>

              <div>

                <h3 className="text-[18px] font-bold text-[#E7B94F]">
                  First Service Discount
                </h3>

                <p className="mt-1 text-[13px] leading-5 text-white/65">
                  Get up to 20% OFF
                  <br />
                  on your first booking
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={handleBookService}
              className="shrink-0 rounded-[11px] bg-[#E7B94F] px-4 py-4 text-[13px] font-bold text-black"
            >
              BOOK NOW
            </button>

          </div>

        </section>

        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section className="px-5 pb-[125px] pt-8">

          <h2 className="text-[23px] font-bold tracking-[-0.5px]">
            How It Works
          </h2>

          <div className="mt-7 grid grid-cols-4">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                >

                  <div className="flex h-[67px] w-[67px] items-center justify-center rounded-full border border-[#DFAE45]/35 bg-[#090A0C]">

                    <Icon
                      size={27}
                      strokeWidth={1.6}
                      className="text-[#E7B94F]"
                    />

                  </div>

                  <p className="mt-3 text-[12px] font-medium leading-4">

                    <span className="mr-1 text-white/50">
                      {step.number}
                    </span>

                    {step.title}

                    <br />

                    {step.subtitle}

                  </p>

                  {index !== steps.length - 1 && (
                    <ChevronRight
                      size={20}
                      className="absolute -right-2 top-[23px] text-white/70"
                    />
                  )}

                </div>
              );

            })}

          </div>

        </section>

        {/* =====================================================
            BOTTOM NAVIGATION
        ===================================================== */}

        <nav className="fixed bottom-0 left-1/2 z-50 h-[91px] w-full max-w-[480px] -translate-x-1/2 border-t border-white/[0.10] bg-[#0D0F12]/95 px-3 backdrop-blur-xl">

          <div className="grid h-full grid-cols-5">

            {/* HOME */}

            <button
              type="button"
              onClick={() => router.push("/services")}
              className="flex flex-col items-center justify-center gap-1"
            >

              <Home
                size={24}
                strokeWidth={1.8}
                className="text-[#E7B94F]"
              />

              <span className="text-[11px] font-medium text-[#E7B94F]">
                Home
              </span>

            </button>

            {/* BOOKINGS */}

            <button
              type="button"
              onClick={() => router.push("/services/bookings")}
              className="flex flex-col items-center justify-center gap-1"
            >

              <ClipboardList
                size={23}
                strokeWidth={1.8}
                className="text-white/55"
              />

              <span className="text-[11px] text-white/55">
                Bookings
              </span>

            </button>

            {/* BOOK NOW */}

            <button
              type="button"
              onClick={handleBookService}
              className="relative flex flex-col items-center justify-end pb-4"
            >

              <div className="absolute -top-8 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#F2C968]/60 bg-[#DFAE45] shadow-[0_0_30px_rgba(223,174,69,0.25)]">

                <CalendarDays
                  size={28}
                  strokeWidth={1.8}
                  className="text-black"
                />

              </div>

              <span className="text-[11px] font-medium text-white">
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
                size={23}
                strokeWidth={1.8}
                className="text-white/55"
              />

              <span className="text-[11px] text-white/55">
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
                size={23}
                strokeWidth={1.8}
                className="text-white/55"
              />

              <span className="text-[11px] text-white/55">
                Profile
              </span>

            </button>

          </div>

        </nav>

      </div>
    </main>
  );
}