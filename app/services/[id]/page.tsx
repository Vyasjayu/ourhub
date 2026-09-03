"use client";

import { useParams, useRouter } from "next/navigation";

import {
  ArrowLeft,
  Star,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  ChevronRight,
  MapPin,
  IndianRupee,
  Sparkles,
} from "lucide-react";

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  rating: string;
  category: string;
  description: string;
  services: string[];
  popular?: string;
}

const serviceData: Record<string, ServiceData> = {
  cleaning: {
    id: "cleaning",
    title: "Home Cleaning",
    subtitle: "Professional deep cleaning",
    image: "/home-services/cleaning.jpg",
    price: "₹499",
    rating: "4.8",
    category: "Cleaning",
    description:
      "Professional home cleaning service by verified cleaning experts at your doorstep.",
    services: [
      "Room & floor cleaning",
      "Kitchen cleaning",
      "Bathroom cleaning",
      "Dust & dirt removal",
      "Professional cleaning products",
    ],
    popular: "Deep Cleaning",
  },

  "ac-repair": {
    id: "ac-repair",
    title: "AC Repair",
    subtitle: "AC service & repair",
    image: "/home-services/ac.jpg",
    price: "₹299",
    rating: "4.7",
    category: "Repair",
    description:
      "Get your AC inspected, serviced and repaired by experienced professionals.",
    services: [
      "AC inspection",
      "General servicing",
      "Cooling issue",
      "Gas checking",
      "Installation & uninstallation",
    ],
    popular: "AC Service",
  },

  electrician: {
    id: "electrician",
    title: "Electrician",
    subtitle: "Electrical repair & installation",
    image: "/home-services/electrician.jpg",
    price: "₹199",
    rating: "4.8",
    category: "Repair",
    description:
      "Experienced electricians for all your home electrical repair and installation needs.",
    services: [
      "Switch & socket repair",
      "Fan installation",
      "Light installation",
      "MCB repair",
      "Electrical inspection",
    ],
    popular: "Electrical Repair",
  },

  plumber: {
    id: "plumber",
    title: "Plumber",
    subtitle: "Plumbing repair & fitting",
    image: "/home-services/plumbing.jpg",
    price: "₹199",
    rating: "4.7",
    category: "Repair",
    description:
      "Professional plumbers for taps, pipes, leakage, bathroom and kitchen repairs.",
    services: [
      "Tap repair",
      "Pipe leakage",
      "Wash basin repair",
      "Bathroom fitting",
      "Kitchen plumbing",
    ],
    popular: "Leakage Repair",
  },

  carpenter: {
    id: "carpenter",
    title: "Carpenter",
    subtitle: "Furniture repair & fitting",
    image: "/home-services/carpentry.jpg",
    price: "₹249",
    rating: "4.8",
    category: "Repair",
    description:
      "Skilled carpenters for furniture repair, installation and custom fitting.",
    services: [
      "Furniture repair",
      "Door repair",
      "Furniture assembly",
      "Shelf installation",
      "Woodwork",
    ],
    popular: "Furniture Repair",
  },

  "washing-machine": {
    id: "washing-machine",
    title: "Washing Machine",
    subtitle: "Repair & service",
    image: "/home-services/washing-machine.jpg",
    price: "₹299",
    rating: "4.6",
    category: "Appliances",
    description:
      "Professional washing machine repair and maintenance for major brands.",
    services: [
      "Machine inspection",
      "Drainage issue",
      "Spin problem",
      "Water leakage",
      "General servicing",
    ],
    popular: "Washing Machine Repair",
  },

  refrigerator: {
    id: "refrigerator",
    title: "Refrigerator",
    subtitle: "Repair & maintenance",
    image: "/home-services/refrigerator.jpg",
    price: "₹299",
    rating: "4.7",
    category: "Appliances",
    description:
      "Get your refrigerator checked and repaired by experienced appliance technicians.",
    services: [
      "Cooling problem",
      "Compressor issue",
      "Gas checking",
      "Water leakage",
      "General inspection",
    ],
    popular: "Refrigerator Repair",
  },

  "tv-repair": {
    id: "tv-repair",
    title: "TV Repair",
    subtitle: "LED & Smart TV repair",
    image: "/home-services/tv-repair.jpg",
    price: "₹249",
    rating: "4.6",
    category: "Appliances",
    description:
      "Professional TV repair service for LED, LCD and Smart TVs.",
    services: [
      "TV inspection",
      "Display issue",
      "Sound problem",
      "Power issue",
      "Smart TV troubleshooting",
    ],
    popular: "TV Repair",
  },

  "fan-repair": {
    id: "fan-repair",
    title: "Fan Repair",
    subtitle: "Ceiling & exhaust fan service",
    image: "/home-services/fan-repair.jpg",
    price: "₹149",
    rating: "4.7",
    category: "Repair",
    description:
      "Quick fan repair and installation service from verified electricians.",
    services: [
      "Fan repair",
      "Fan installation",
      "Regulator replacement",
      "Noise issue",
      "Wiring repair",
    ],
    popular: "Fan Repair",
  },

  "pest-control": {
    id: "pest-control",
    title: "Pest Control",
    subtitle: "Home pest protection",
    image: "/home-services/pest-control.jpg",
    price: "₹699",
    rating: "4.8",
    category: "Cleaning",
    description:
      "Professional pest control solutions for common household pests.",
    services: [
      "Cockroach control",
      "Mosquito control",
      "Ant control",
      "Termite treatment",
      "Home inspection",
    ],
    popular: "Cockroach Control",
  },

  painting: {
    id: "painting",
    title: "Home Painting",
    subtitle: "Interior & exterior painting",
    image: "/home-services/painting.jpg",
    price: "₹1,499",
    rating: "4.8",
    category: "Home Improvement",
    description:
      "Transform your home with professional interior and exterior painting services.",
    services: [
      "Wall painting",
      "Room painting",
      "Ceiling painting",
      "Exterior painting",
      "Colour consultation",
    ],
    popular: "Interior Painting",
  },

  "sofa-cleaning": {
    id: "sofa-cleaning",
    title: "Sofa Cleaning",
    subtitle: "Professional sofa cleaning",
    image: "/home-services/sofa-cleaning.jpg",
    price: "₹399",
    rating: "4.7",
    category: "Cleaning",
    description:
      "Deep cleaning for sofas using professional cleaning equipment.",
    services: [
      "Dust removal",
      "Deep vacuuming",
      "Fabric cleaning",
      "Stain treatment",
      "Professional drying",
    ],
    popular: "Deep Sofa Cleaning",
  },

  "appliance-repair": {
    id: "appliance-repair",
    title: "Appliance Repair",
    subtitle: "Home appliance service",
    image: "/home-services/appliance.jpg",
    price: "₹249",
    rating: "4.6",
    category: "Appliances",
    description:
      "Get your home appliances checked and repaired by experienced technicians.",
    services: [
      "Appliance inspection",
      "Fault diagnosis",
      "Parts replacement",
      "General servicing",
      "Maintenance",
    ],
    popular: "Appliance Service",
  },

  "water-tank": {
    id: "water-tank",
    title: "Water Tank Cleaning",
    subtitle: "Professional tank cleaning",
    image: "/home-services/water-tank.jpg",
    price: "₹499",
    rating: "4.7",
    category: "Cleaning",
    description:
      "Professional water tank cleaning for a cleaner and more hygienic home.",
    services: [
      "Tank draining",
      "Sludge removal",
      "Deep cleaning",
      "Disinfection",
      "Tank inspection",
    ],
    popular: "Tank Cleaning",
  },

  "packers-movers": {
    id: "packers-movers",
    title: "Packers & Movers",
    subtitle: "Safe home shifting",
    image: "/home-services/packers-movers.jpg",
    price: "₹999",
    rating: "4.7",
    category: "Moving",
    description:
      "Reliable packing and moving services for safe and convenient home shifting.",
    services: [
      "Packing",
      "Loading",
      "Transportation",
      "Unloading",
      "Furniture shifting",
    ],
    popular: "Home Shifting",
  },

  locksmith: {
    id: "locksmith",
    title: "Locksmith",
    subtitle: "Lock repair & replacement",
    image: "/home-services/locksmith.jpg",
    price: "₹199",
    rating: "4.6",
    category: "Repair",
    description:
      "Quick locksmith service for home locks, doors and replacements.",
    services: [
      "Lock repair",
      "Lock replacement",
      "Door lock installation",
      "Key-related service",
      "Emergency lock service",
    ],
    popular: "Lock Repair",
  },
};

export default function ServiceDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const id = params?.id;

  const service = id ? serviceData[id] : undefined;

  if (!service) {
    return <ServiceNotFound />;
  }

  return (
    <div className="min-h-screen bg-[#020202]">
      <main className="mx-auto min-h-screen w-full max-w-[430px] bg-[#050505] text-white">

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 px-4 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              aria-label="Go back"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                OURHUB
              </p>

              <h1 className="truncate text-[16px] font-bold">
                {service.title}
              </h1>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="px-4 pt-5">
          <div className="relative h-[220px] overflow-hidden rounded-[22px] border border-[#DFAE45]/20 bg-[#111]">

            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#191919] to-[#080808]">
              <Sparkles className="h-16 w-16 text-[#DFAE45]/20" />
            </div>

            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-[9px]">
                  <Star className="h-3 w-3 fill-[#DFAE45] text-[#DFAE45]" />
                  {service.rating}
                </span>

                <span className="rounded-full bg-black/70 px-2 py-1 text-[9px]">
                  Verified Service
                </span>
              </div>

              <h2 className="text-[22px] font-bold">
                {service.title}
              </h2>

              <p className="mt-1 text-[10px] text-white/60">
                {service.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="px-4 pt-5">
          <div className="grid grid-cols-3 gap-2">
            <InfoCard
              icon={<ShieldCheck />}
              title="Verified"
              subtitle="Experts"
            />

            <InfoCard
              icon={<Clock3 />}
              title="On Time"
              subtitle="Service"
            />

            <InfoCard
              icon={<Star />}
              title={service.rating}
              subtitle="Rating"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section className="px-4 pt-7">
          <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
            ABOUT SERVICE
          </p>

          <h2 className="mt-1 text-[18px] font-bold">
            {service.title}
          </h2>

          <p className="mt-2 text-[11px] leading-relaxed text-white/45">
            {service.description}
          </p>
        </section>

        {/* INCLUDED */}
        <section className="px-4 pt-7">
          <h2 className="text-[15px] font-bold">
            What's included
          </h2>

          <div className="mt-3 space-y-2">
            {service.services.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[14px] border border-white/[0.07] bg-[#0b0b0b] px-3 py-3"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#DFAE45]" />

                <span className="text-[10px] text-white/65">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* POPULAR */}
        {service.popular && (
          <section className="px-4 pt-7">
            <div className="rounded-[20px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151209] to-[#090909] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                    POPULAR
                  </span>

                  <h3 className="mt-1 text-[14px] font-bold">
                    {service.popular}
                  </h3>

                  <p className="mt-1 text-[9px] text-white/35">
                    Starting from
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[#DFAE45]">
                  <IndianRupee className="h-4 w-4" />

                  <span className="text-[20px] font-bold">
                    {service.price.replace("₹", "")}
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SERVICE AREA */}
        <section className="px-4 pt-7">
          <div className="rounded-[20px] border border-white/10 bg-[#0b0b0b] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <MapPin className="h-4 w-4 text-[#DFAE45]" />
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  Service at your doorstep
                </h3>

                <p className="mt-1 text-[9px] text-white/35">
                  Available in selected locations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOOK */}
        <section className="px-4 pb-10 pt-7">
          <button
            onClick={() =>
              router.push(`/services/${service.id}/book`)
            }
            className="flex w-full items-center justify-between rounded-[18px] bg-[#DFAE45] px-5 py-4 text-black transition-transform active:scale-[0.98]"
          >
            <div className="text-left">
              <p className="text-[9px] font-semibold opacity-70">
                STARTING FROM
              </p>

              <p className="text-[17px] font-bold">
                {service.price}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[12px] font-bold">
                Book Service
              </span>

              <ChevronRight className="h-4 w-4" />
            </div>
          </button>

          <div className="mt-3 flex items-center justify-center gap-2 text-[8px] text-white/30">
            <ShieldCheck className="h-3 w-3" />
            Verified professionals • Secure booking
          </div>
        </section>
      </main>
    </div>
  );
}

/* ================================
   NOT FOUND
================================ */

function ServiceNotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#020202] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center px-5 text-center">
        <div>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DFAE45]/10">
            <Sparkles className="h-7 w-7 text-[#DFAE45]" />
          </div>

          <h1 className="mt-5 text-lg font-bold">
            Service Not Found
          </h1>

          <p className="mt-2 text-xs text-white/40">
            This service is currently unavailable.
          </p>

          <button
            onClick={() => router.push("/services")}
            className="mt-6 rounded-full bg-[#DFAE45] px-6 py-3 text-xs font-bold text-black"
          >
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================================
   INFO CARD
================================ */

function InfoCard({
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