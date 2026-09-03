"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Star,
  Users,
  ChevronRight,
} from "lucide-react";

interface ServiceData {
  id: string;
  categoryId: string;
  category: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  duration: string;
  rating: string;
  reviews: string;
  description: string;
  includes: string[];
}

const serviceData: ServiceData[] = [
  {
    id: "ac-service",
    categoryId: "ac",
    category: "AC Service & Repair",
    name: "AC Service",
    image: "/home-services/ac.jpg",
    price: 499,
    oldPrice: 699,
    duration: "60 - 90 mins",
    rating: "4.8",
    reviews: "2.4k",
    description:
      "Professional AC servicing by verified technicians to keep your AC clean, cool and efficient.",
    includes: [
      "AC general inspection",
      "Indoor unit cleaning",
      "Outdoor unit cleaning",
      "Filter cleaning",
      "Cooling performance check",
      "Final testing",
    ],
  },

  {
    id: "ac-repair",
    categoryId: "ac",
    category: "AC Service & Repair",
    name: "AC Repair",
    image: "/home-services/ac.jpg",
    price: 299,
    oldPrice: 399,
    duration: "60 - 120 mins",
    rating: "4.7",
    reviews: "1.8k",
    description:
      "Get your AC checked and repaired by experienced professionals at your doorstep.",
    includes: [
      "Problem diagnosis",
      "AC inspection",
      "Repair estimate",
      "Minor repair work",
      "Performance testing",
    ],
  },

  {
    id: "ac-installation",
    categoryId: "ac",
    category: "AC Service & Repair",
    name: "AC Installation",
    image: "/home-services/ac.jpg",
    price: 999,
    oldPrice: 1299,
    duration: "2 - 3 hours",
    rating: "4.8",
    reviews: "1.2k",
    description:
      "Safe and professional AC installation by trained home service experts.",
    includes: [
      "Indoor unit installation",
      "Outdoor unit installation",
      "Copper pipe connection",
      "Drain pipe setup",
      "Testing",
    ],
  },

  {
    id: "tap-repair",
    categoryId: "plumbing",
    category: "Plumbing Services",
    name: "Tap Repair",
    image: "/home-services/plumbing.jpg",
    price: 149,
    oldPrice: 249,
    duration: "30 - 60 mins",
    rating: "4.8",
    reviews: "1.6k",
    description:
      "Professional tap repair service for leakage, loose fittings and other common tap problems.",
    includes: [
      "Tap inspection",
      "Leakage checking",
      "Minor repair",
      "Fitting adjustment",
      "Final testing",
    ],
  },

  {
    id: "pipe-leakage",
    categoryId: "plumbing",
    category: "Plumbing Services",
    name: "Pipe Leakage Repair",
    image: "/home-services/plumbing.jpg",
    price: 199,
    oldPrice: 299,
    duration: "45 - 90 mins",
    rating: "4.7",
    reviews: "980",
    description:
      "Get leaking pipes inspected and repaired by verified plumbing professionals.",
    includes: [
      "Leakage inspection",
      "Pipe checking",
      "Minor leakage repair",
      "Joint tightening",
      "Final water flow check",
    ],
  },

  {
    id: "fan-repair",
    categoryId: "electrical",
    category: "Electrical Services",
    name: "Fan Repair",
    image: "/home-services/electrical.jpg",
    price: 199,
    oldPrice: 299,
    duration: "45 - 60 mins",
    rating: "4.8",
    reviews: "1.3k",
    description:
      "Professional ceiling and wall fan repair service at your doorstep.",
    includes: [
      "Fan inspection",
      "Wiring check",
      "Motor check",
      "Capacitor check",
      "Testing",
    ],
  },

  {
    id: "fan-installation",
    categoryId: "electrical",
    category: "Electrical Services",
    name: "Fan Installation",
    image: "/home-services/electrical.jpg",
    price: 249,
    oldPrice: 349,
    duration: "30 - 60 mins",
    rating: "4.8",
    reviews: "1.1k",
    description:
      "Safe and professional fan installation by verified electricians.",
    includes: [
      "Fan mounting",
      "Electrical connection",
      "Wiring check",
      "Alignment",
      "Final testing",
    ],
  },

  {
    id: "washing-machine",
    categoryId: "appliance",
    category: "Appliance Repair",
    name: "Washing Machine Repair",
    image: "/home-services/appliance.jpg",
    price: 299,
    oldPrice: 399,
    duration: "60 - 90 mins",
    rating: "4.7",
    reviews: "1.4k",
    description:
      "Professional washing machine inspection and repair by experienced technicians.",
    includes: [
      "Machine inspection",
      "Problem diagnosis",
      "Electrical check",
      "Basic repair",
      "Performance testing",
    ],
  },

  {
    id: "furniture-repair",
    categoryId: "carpentry",
    category: "Carpentry Services",
    name: "Furniture Repair",
    image: "/home-services/carpentry.jpg",
    price: 299,
    oldPrice: 399,
    duration: "60 - 120 mins",
    rating: "4.8",
    reviews: "850",
    description:
      "Professional furniture repair service for common household furniture problems.",
    includes: [
      "Furniture inspection",
      "Minor repair",
      "Joint tightening",
      "Alignment",
      "Final inspection",
    ],
  },

  {
    id: "room-painting",
    categoryId: "painting",
    category: "Painting Services",
    name: "Room Painting",
    image: "/home-services/painting.jpg",
    price: 2499,
    oldPrice: 2999,
    duration: "1 - 2 days",
    rating: "4.7",
    reviews: "620",
    description:
      "Give your room a fresh new look with professional painting experts.",
    includes: [
      "Surface inspection",
      "Basic preparation",
      "Primer application",
      "Painting",
      "Final finishing",
    ],
  },

  {
    id: "home-sanitization",
    categoryId: "sanitization",
    category: "Home Sanitization",
    name: "Home Sanitization",
    image: "/home-services/sanitization.jpg",
    price: 699,
    oldPrice: 899,
    duration: "60 - 90 mins",
    rating: "4.8",
    reviews: "740",
    description:
      "Professional home sanitization and disinfection service for a cleaner environment.",
    includes: [
      "Home inspection",
      "Surface disinfection",
      "High-touch area sanitization",
      "Room treatment",
      "Final inspection",
    ],
  },
];

export default function ServiceDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const serviceId = params.serviceId as string;

  const service = useMemo(() => {
    return serviceData.find(
      (item) => item.id === serviceId
    );
  }, [serviceId]);

  if (!service) {
    return (
      <main className="min-h-screen bg-[#050608] text-white">
        <div className="mx-auto min-h-screen w-full max-w-[480px] px-5 pt-6">
          <button
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111317]"
          >
            <ArrowLeft size={21} />
          </button>

          <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/[0.05]">
              <ShieldCheck
                size={35}
                className="text-[#E7B94F]"
              />
            </div>

            <h1 className="mt-5 text-[24px] font-bold">
              Service Not Found
            </h1>

            <p className="mt-2 max-w-[300px] text-[14px] text-white/50">
              Sorry, this service is currently unavailable.
            </p>

            <button
              onClick={() => router.push("/home-services")}
              className="mt-6 rounded-xl bg-[#E7B94F] px-6 py-3 text-[14px] font-bold text-black"
            >
              Go Home
            </button>
          </div>
        </div>
      </main>
    );
  }

  const discount = Math.round(
    ((service.oldPrice - service.price) /
      service.oldPrice) *
      100
  );

  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[480px] bg-[#050608] pb-[110px]">
        {/* HEADER */}

        <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#050608]/90 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-[#111317]
              "
            >
              <ArrowLeft size={21} />
            </button>

            <div className="min-w-0">
              <p className="text-[11px] text-white/40">
                {service.category}
              </p>

              <h1 className="truncate text-[17px] font-semibold">
                {service.name}
              </h1>
            </div>
          </div>
        </header>

        {/* SERVICE IMAGE */}

        <section className="px-5 pt-5">
          <div className="relative h-[245px] overflow-hidden rounded-[22px] border border-white/10">
            <img
              src={service.image}
              alt={service.name}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* DISCOUNT */}

            <div className="absolute left-4 top-4 rounded-lg bg-[#E7B94F] px-3 py-1.5 text-[12px] font-bold text-black">
              {discount}% OFF
            </div>

            {/* RATING */}

            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-lg bg-black/70 px-2.5 py-1.5 backdrop-blur">
                <Star
                  size={14}
                  fill="currentColor"
                  className="text-[#E7B94F]"
                />

                <span className="text-[12px] font-semibold">
                  {service.rating}
                </span>
              </div>

              <span className="text-[12px] text-white/70">
                {service.reviews} reviews
              </span>
            </div>
          </div>
        </section>

        {/* TITLE */}

        <section className="px-5 pt-6">
          <h2 className="text-[27px] font-bold leading-tight">
            {service.name}
          </h2>

          <p className="mt-3 text-[14px] leading-6 text-white/55">
            {service.description}
          </p>

          {/* META */}

          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="rounded-[14px] border border-white/[0.08] bg-[#111317] p-3">
              <Clock3
                size={20}
                className="text-[#E7B94F]"
              />

              <p className="mt-2 text-[11px] text-white/40">
                Duration
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                {service.duration}
              </p>
            </div>

            <div className="rounded-[14px] border border-white/[0.08] bg-[#111317] p-3">
              <ShieldCheck
                size={20}
                className="text-[#E7B94F]"
              />

              <p className="mt-2 text-[11px] text-white/40">
                Professionals
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                Verified
              </p>
            </div>

            <div className="rounded-[14px] border border-white/[0.08] bg-[#111317] p-3">
              <Users
                size={20}
                className="text-[#E7B94F]"
              />

              <p className="mt-2 text-[11px] text-white/40">
                Bookings
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                1000+
              </p>
            </div>
          </div>
        </section>

        {/* PRICE */}

        <section className="px-5 pt-6">
          <div className="rounded-[18px] border border-[#DFAE45]/25 bg-gradient-to-r from-[#15110A] to-[#0D0E10] p-5">
            <p className="text-[12px] text-white/40">
              Starting price
            </p>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-[28px] font-bold text-[#E7B94F]">
                ₹{service.price}
              </span>

              <span className="text-[15px] text-white/30 line-through">
                ₹{service.oldPrice}
              </span>
            </div>

            <p className="mt-1 text-[11px] text-white/40">
              Final price may vary depending on actual work.
            </p>
          </div>
        </section>

        {/* INCLUDED */}

        <section className="px-5 pt-7">
          <h2 className="text-[21px] font-bold">
            What's Included
          </h2>

          <div className="mt-4 overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#111317]">
            {service.includes.map((item, index) => (
              <div
                key={item}
                className={`
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3.5
                  ${
                    index !==
                    service.includes.length - 1
                      ? "border-b border-white/[0.05]"
                      : ""
                  }
                `}
              >
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#E7B94F]"
                />

                <span className="text-[14px] text-white/75">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST */}

        <section className="px-5 pt-6">
          <div className="rounded-[18px] border border-white/[0.08] bg-[#111317] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E7B94F]/10">
                <ShieldCheck
                  size={23}
                  className="text-[#E7B94F]"
                />
              </div>

              <div>
                <p className="text-[14px] font-semibold">
                  Verified Professionals
                </p>

                <p className="mt-0.5 text-[12px] text-white/40">
                  Trained & background verified experts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}

        <section className="px-5 pt-5">
          <div className="flex items-center gap-3 rounded-[18px] border border-white/[0.08] bg-[#111317] p-4">
            <MapPin
              size={22}
              className="text-[#E7B94F]"
            />

            <div className="min-w-0 flex-1">
              <p className="text-[13px] text-white/40">
                Service location
              </p>

              <p className="mt-1 truncate text-[14px] font-medium">
                Ujjain, Madhya Pradesh
              </p>
            </div>

            <ChevronRight
              size={19}
              className="text-white/30"
            />
          </div>
        </section>
      </div>

      {/* BOTTOM BOOKING BAR */}

      <div
        className="
          fixed
          bottom-0
          left-1/2
          z-50
          w-full
          max-w-[480px]
          -translate-x-1/2
          border-t
          border-white/[0.08]
          bg-[#0D0F12]/95
          px-5
          py-4
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-white/40">
              Starting from
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[21px] font-bold text-[#E7B94F]">
                ₹{service.price}
              </span>

              <span className="text-[12px] text-white/30 line-through">
                ₹{service.oldPrice}
              </span>
            </div>
          </div>

          <Link
            href={`/home-services/book/${service.id}`}
            className="
              flex
              h-[52px]
              items-center
              justify-center
              gap-2
              rounded-[13px]
              bg-[#E7B94F]
              px-6
              text-[14px]
              font-bold
              text-black
              shadow-[0_8px_30px_rgba(231,185,79,0.18)]
              active:scale-[0.97]
            "
          >
            Book Now
            <ChevronRight size={19} />
          </Link>
        </div>
      </div>
    </main>
  );
}