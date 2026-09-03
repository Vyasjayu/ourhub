"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ChevronRight,
  Star,
  ShieldCheck,
  Clock3,
  Home,
  Wrench,
  Snowflake,
  Zap,
  Droplets,
  Hammer,
  WashingMachine,
  Bug,
  Paintbrush,
  Refrigerator,
  Tv,
  Fan,
  Settings,
  Sofa,
  Truck,
  KeyRound,
  SprayCan,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  image: string;
  price: string;
  rating: string;
  category: string;
}

const services: Service[] = [
  {
    id: "cleaning",
    title: "Home Cleaning",
    subtitle: "Deep cleaning",
    icon: SprayCan,
    image: "/home-services/cleaning.jpg",
    price: "₹499",
    rating: "4.8",
    category: "Cleaning",
  },
  {
    id: "ac-repair",
    title: "AC Repair",
    subtitle: "Service & repair",
    icon: Snowflake,
    image: "/home-services/ac.jpg",
    price: "₹299",
    rating: "4.7",
    category: "Repair",
  },
  {
    id: "electrician",
    title: "Electrician",
    subtitle: "Electrical work",
    icon: Zap,
    image: "/home-services/electrician.jpg",
    price: "₹199",
    rating: "4.8",
    category: "Repair",
  },
  {
    id: "plumber",
    title: "Plumber",
    subtitle: "Pipe & tap repair",
    icon: Droplets,
    image: "/home-services/plumbing.jpg",
    price: "₹199",
    rating: "4.7",
    category: "Repair",
  },
  {
    id: "carpenter",
    title: "Carpenter",
    subtitle: "Furniture & fitting",
    icon: Hammer,
    image: "/home-services/carpentry.jpg",
    price: "₹249",
    rating: "4.8",
    category: "Repair",
  },
  {
    id: "washing-machine",
    title: "Washing Machine",
    subtitle: "Repair & service",
    icon: WashingMachine,
    image: "/home-services/washing-machine.jpg",
    price: "₹299",
    rating: "4.6",
    category: "Appliances",
  },
  {
    id: "refrigerator",
    title: "Refrigerator",
    subtitle: "Repair & service",
    icon: Refrigerator,
    image: "/home-services/refrigerator.jpg",
    price: "₹299",
    rating: "4.7",
    category: "Appliances",
  },
  {
    id: "tv-repair",
    title: "TV Repair",
    subtitle: "LED & Smart TV",
    icon: Tv,
    image: "/home-services/tv-repair.jpg",
    price: "₹249",
    rating: "4.6",
    category: "Appliances",
  },
  {
    id: "fan-repair",
    title: "Fan Repair",
    subtitle: "Fan service",
    icon: Fan,
    image: "/home-services/fan-repair.jpg",
    price: "₹149",
    rating: "4.7",
    category: "Repair",
  },
  {
    id: "pest-control",
    title: "Pest Control",
    subtitle: "Pest protection",
    icon: Bug,
    image: "/home-services/pest-control.jpg",
    price: "₹699",
    rating: "4.8",
    category: "Cleaning",
  },
  {
    id: "painting",
    title: "Home Painting",
    subtitle: "Interior & exterior",
    icon: Paintbrush,
    image: "/home-services/painting.jpg",
    price: "₹1,499",
    rating: "4.8",
    category: "Painting",
  },
  {
    id: "sofa-cleaning",
    title: "Sofa Cleaning",
    subtitle: "Professional cleaning",
    icon: Sofa,
    image: "/home-services/sofa-cleaning.jpg",
    price: "₹399",
    rating: "4.7",
    category: "Cleaning",
  },
  {
    id: "appliance-repair",
    title: "Appliance Repair",
    subtitle: "Home appliances",
    icon: Settings,
    image: "/home-services/appliance.jpg",
    price: "₹249",
    rating: "4.6",
    category: "Appliances",
  },
  {
    id: "water-tank",
    title: "Water Tank",
    subtitle: "Tank cleaning",
    icon: Droplets,
    image: "/home-services/water-tank.jpg",
    price: "₹499",
    rating: "4.7",
    category: "Cleaning",
  },
  {
    id: "packers-movers",
    title: "Packers & Movers",
    subtitle: "Home shifting",
    icon: Truck,
    image: "/home-services/packers-movers.jpg",
    price: "₹999",
    rating: "4.7",
    category: "Moving",
  },
  {
    id: "locksmith",
    title: "Locksmith",
    subtitle: "Lock repair",
    icon: KeyRound,
    image: "/home-services/locksmith.jpg",
    price: "₹199",
    rating: "4.6",
    category: "Repair",
  },
];

const categories = [
  "All",
  "Cleaning",
  "Repair",
  "Appliances",
  "Painting",
  "Moving",
];

export default function ServicesPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredServices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return services.filter((service) => {
      const categoryMatch =
        category === "All" || service.category === category;

      const searchMatch =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.subtitle.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-[#020202]">
      <main className="mx-auto min-h-screen w-full max-w-[430px] bg-[#050505] text-white">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-xl">

          <div className="px-4 pb-3 pt-5">

            <div className="flex items-center justify-between">

              <div>

                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-[#DFAE45]" />

                  <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                    OURHUB
                  </span>
                </div>

                <h1 className="mt-1 text-[21px] font-bold tracking-tight">
                  Home Services
                </h1>

                <p className="mt-0.5 text-[10px] text-white/40">
                  Trusted professionals at your doorstep
                </p>

              </div>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10"
              >
                <Wrench className="h-4 w-4 text-[#DFAE45]" />
              </button>

            </div>

            {/* SEARCH */}

            <div className="relative mt-5">

              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a service..."
                className="h-[48px] w-full rounded-[16px] border border-white/10 bg-[#101010] pl-11 pr-4 text-[12px] text-white outline-none placeholder:text-white/30 focus:border-[#DFAE45]/40"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/30"
                >
                  Clear
                </button>
              )}

            </div>

          </div>

          {/* CATEGORY */}

          <div className="overflow-x-auto border-b border-white/[0.06] px-4 pb-3 scrollbar-hide">

            <div className="flex w-max gap-2">

              {categories.map((item) => {
                const active = category === item;

                return (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`rounded-full px-4 py-2 text-[10px] font-semibold transition ${
                      active
                        ? "bg-[#DFAE45] text-black"
                        : "border border-white/10 bg-[#0d0d0d] text-white/50"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}

            </div>

          </div>

        </header>

        {/* =====================================================
            TRUST
        ===================================================== */}

        <section className="px-4 pt-4">

          <div className="grid grid-cols-3 gap-2">

            <TrustCard
              icon={<ShieldCheck />}
              title="Verified"
              subtitle="Experts"
            />

            <TrustCard
              icon={<Clock3 />}
              title="On Time"
              subtitle="Service"
            />

            <TrustCard
              icon={<Star />}
              title="4.8+"
              subtitle="Rating"
            />

          </div>

        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="px-4 pb-8 pt-7">

          <div className="mb-4 flex items-end justify-between">

            <div>

              <span className="text-[8px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                OUR SERVICES
              </span>

              <h2 className="mt-1 text-[18px] font-bold">
                {category === "All"
                  ? "Popular Services"
                  : category}
              </h2>

            </div>

            <span className="text-[9px] text-white/30">
              {filteredServices.length} available
            </span>

          </div>

          {/* GRID */}

          {filteredServices.length > 0 ? (

            <div className="grid grid-cols-2 gap-3">

              {filteredServices.map((service) => {

                const Icon = service.icon;

                return (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() =>
                      router.push(`/services/${service.id}`)
                    }
                    className="group overflow-hidden rounded-[18px] border border-white/10 bg-[#0b0b0b] text-left transition active:scale-[0.97]"
                  >

                    {/* IMAGE */}

                    <div className="relative h-[125px] overflow-hidden bg-[#151515]">

                      {/* FALLBACK */}

                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#191919] to-[#080808]">
                        <Icon className="h-10 w-10 text-[#DFAE45]/20" />
                      </div>

                      {/* IMAGE */}

                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      {/* OVERLAY */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* RATING */}

                      <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 backdrop-blur">

                        <Star className="h-2.5 w-2.5 fill-[#DFAE45] text-[#DFAE45]" />

                        <span className="text-[8px] font-bold">
                          {service.rating}
                        </span>

                      </div>

                      {/* PRICE */}

                      <div className="absolute bottom-2 left-2 rounded-md bg-black/75 px-2 py-1 backdrop-blur">

                        <span className="text-[8px] font-bold text-[#DFAE45]">
                          From {service.price}
                        </span>

                      </div>

                    </div>

                    {/* TEXT */}

                    <div className="p-3">

                      <div className="flex items-center justify-between gap-2">

                        <div className="min-w-0">

                          <h3 className="truncate text-[12px] font-bold">
                            {service.title}
                          </h3>

                          <p className="mt-1 truncate text-[9px] text-white/35">
                            {service.subtitle}
                          </p>

                        </div>

                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFAE45]/10">

                          <ChevronRight className="h-3 w-3 text-[#DFAE45]" />

                        </div>

                      </div>

                    </div>

                  </button>
                );
              })}

            </div>

          ) : (

            /* EMPTY */

            <div className="rounded-[20px] border border-white/10 bg-[#0b0b0b] px-5 py-12 text-center">

              <Search className="mx-auto h-8 w-8 text-white/20" />

              <p className="mt-4 text-sm font-bold">
                No service found
              </p>

              <p className="mt-1 text-[10px] text-white/35">
                Try another service or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-4 rounded-full bg-[#DFAE45] px-5 py-2 text-[10px] font-bold text-black"
              >
                Show All Services
              </button>

            </div>

          )}

        </section>

        {/* =====================================================
            REQUEST SERVICE
        ===================================================== */}

        <section className="px-4 pb-8">

          <div className="relative overflow-hidden rounded-[22px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151209] to-[#090909] p-5">

            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-2xl" />

            <div className="relative">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Wrench className="h-4 w-4 text-[#DFAE45]" />
              </div>

              <h3 className="mt-3 text-[14px] font-bold">
                Need another service?
              </h3>

              <p className="mt-1 text-[10px] leading-relaxed text-white/40">
                Tell us what you need and we'll find the right
                professional for you.
              </p>

              <button
                type="button"
                onClick={() => router.push("/services/request")}
                className="mt-4 flex items-center gap-2 rounded-full bg-[#DFAE45] px-4 py-2.5 text-[10px] font-bold text-black"
              >
                Request Service
                <ChevronRight className="h-3 w-3" />
              </button>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <div className="px-4 pb-8 text-center">

          <p className="text-[8px] text-white/20">
            OURHUB • Trusted Home Services
          </p>

        </div>

      </main>
    </div>
  );
}

/* =========================================================
   TRUST CARD
========================================================= */

function TrustCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-[15px] border border-white/10 bg-[#0b0b0b] p-3">

      <div className="flex items-center gap-2">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
          {icon}
        </div>

        <div className="min-w-0">

          <p className="text-[9px] font-bold">
            {title}
          </p>

          <p className="truncate text-[7px] text-white/30">
            {subtitle}
          </p>

        </div>

      </div>

    </div>
  );
}