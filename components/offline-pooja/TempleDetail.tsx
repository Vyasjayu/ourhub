"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  ShieldCheck,
  Star,
  UserRoundCheck,
} from "lucide-react";

import {
  offlineTemples,
} from "@/data/offlineTempleData";

const poojas = [
  {
    id: 1,
    name: "Mahakal Abhishek",
    price: "₹2,501",
    duration: "60–90 Minutes",
    image: "/images/pooja/mahakal-abhishek.jpg",
    benefits: [
      "Complete Abhishek",
      "Sankalp",
      "Prasad",
      "Pooja Photo",
    ],
  },
  {
    id: 2,
    name: "Rudrabhishek",
    price: "₹3,501",
    duration: "90–120 Minutes",
    image: "/images/pooja/rudrabhishek.jpg",
    benefits: [
      "Vedic Rudrabhishek",
      "Sankalp",
      "Prasad",
      "Pooja Photo",
    ],
  },
  {
    id: 3,
    name: "Maha Mrityunjaya Pooja",
    price: "₹1,501",
    duration: "45–60 Minutes",
    image: "/images/pooja/maha-mrityunjaya.jpg",
    benefits: [
      "Mantra Jaap",
      "Sankalp",
      "Prasad",
      "Blessings",
    ],
  },
  {
    id: 4,
    name: "Navgrah Shanti Pooja",
    price: "₹2,101",
    duration: "90 Minutes",
    image: "/images/pooja/navgrah.jpg",
    benefits: [
      "Navgrah Pooja",
      "Sankalp",
      "Prasad",
      "Pooja Photo",
    ],
  },
];

export default function TempleDetail() {
  const router = useRouter();
  const params = useParams();

  const templeId = Number(params.id);

  const temple = offlineTemples.find(
    (item) => item.id === templeId
  );

  if (!temple) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#03070b] px-5 text-white">
        <div className="text-center">
          <div className="text-5xl">🛕</div>

          <h1 className="mt-4 text-xl font-semibold">
            Temple Not Found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            The selected temple could not be found.
          </p>

          <button
            type="button"
            onClick={() =>
              router.push(
                "/offline-pooja/select-temple"
              )
            }
            className="mt-5 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-black"
          >
            Back to Temples
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#03070b] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden pb-28">
        {/* HEADER */}
        <header className="flex items-center justify-between px-4 pb-3 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center"
          >
            <ArrowLeft
              size={27}
              className="text-yellow-400"
            />
          </button>

          <div className="text-center">
            <p className="text-[10px] font-semibold tracking-[4px] text-gray-300">
              OURHUB
            </p>

            <h1 className="mt-1 text-[17px] font-semibold text-yellow-400">
              Temple Details
            </h1>
          </div>

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center"
          >
            <Bell
              size={26}
              className="text-yellow-400"
            />

            <span className="absolute right-[5px] top-[5px] h-2.5 w-2.5 rounded-full bg-red-500" />
          </button>
        </header>

        {/* TEMPLE IMAGE */}
        <section className="px-4 pt-2">
          <div className="relative h-[245px] overflow-hidden rounded-[22px] border border-yellow-500/20">
            <Image
              src={temple.image}
              alt={temple.name}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* VERIFIED */}
            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-green-500/30 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
              <ShieldCheck
                size={14}
                className="text-green-400"
              />

              <span className="text-[10px] font-medium text-green-400">
                Verified Temple
              </span>
            </div>

            {/* POPULAR */}
            {temple.popular && (
              <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1.5 text-[9px] font-bold text-black">
                Popular
              </div>
            )}

            {/* IMAGE BOTTOM */}
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-[24px] font-semibold leading-tight text-white">
                {temple.name}
              </h2>

              <div className="mt-2 flex items-center gap-2">
                <MapPin
                  size={14}
                  className="text-yellow-400"
                />

                <span className="text-[12px] text-gray-200">
                  {temple.city}, {temple.state}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* RATING / DISTANCE */}
        <section className="px-4 pt-4">
          <div className="grid grid-cols-3 gap-2">
            <InfoBox
              icon={
                <Star
                  size={17}
                  fill="currentColor"
                />
              }
              value={temple.rating}
              label="Rating"
            />

            <InfoBox
              icon={<MapPin size={17} />}
              value={temple.distance}
              label="Distance"
            />

            <InfoBox
              icon={<ShieldCheck size={17} />}
              value="Verified"
              label="Temple"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-5 px-4">
          <SectionTitle title="About Temple" />

          <div className="rounded-2xl border border-white/5 bg-[#0b1118] p-4">
            <p className="text-[12px] leading-6 text-gray-400">
              {temple.description}
            </p>

            <p className="mt-3 text-[12px] leading-6 text-gray-400">
              OurHub helps devotees book authentic
              pooja services at verified temples with
              experienced pandits and complete booking
              support.
            </p>
          </div>
        </section>

        {/* TEMPLE TIMINGS */}
        <section className="mt-5 px-4">
          <SectionTitle title="Temple Timings" />

          <div className="rounded-2xl border border-white/5 bg-[#0b1118] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10">
                <Clock3
                  size={19}
                  className="text-yellow-400"
                />
              </div>

              <div>
                <p className="text-[12px] font-semibold text-white">
                  Temple Opening Hours
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  5:00 AM – 11:00 PM
                </p>
              </div>
            </div>

            <div className="mt-4 border-t border-white/5 pt-4">
              <div className="flex justify-between text-[11px]">
                <span className="text-gray-500">
                  Morning Pooja
                </span>

                <span className="text-gray-200">
                  6:00 AM – 11:00 AM
                </span>
              </div>

              <div className="mt-3 flex justify-between text-[11px]">
                <span className="text-gray-500">
                  Evening Pooja
                </span>

                <span className="text-gray-200">
                  5:00 PM – 9:00 PM
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="mt-5 px-4">
          <SectionTitle title="Why Book Through OurHub?" />

          <div className="grid grid-cols-2 gap-3">
            <BenefitCard
              icon={<UserRoundCheck size={19} />}
              title="Verified Pandits"
              description="Experienced pandits"
            />

            <BenefitCard
              icon={<ShieldCheck size={19} />}
              title="Authentic Pooja"
              description="As per Vedic rituals"
            />

            <BenefitCard
              icon={<CheckCircle2 size={19} />}
              title="Prasad Included"
              description="Receive prasad"
            />

            <BenefitCard
              icon={<CalendarDays size={19} />}
              title="Easy Booking"
              description="Choose your slot"
            />
          </div>
        </section>

        {/* AVAILABLE POOJAS */}
        <section className="mt-6 px-4">
          <div className="flex items-center justify-between">
            <SectionTitle title="Available Poojas" />

            <span className="text-[10px] text-yellow-400">
              {poojas.length} Poojas
            </span>
          </div>

          <div className="mt-3 space-y-3">
            {poojas.map((pooja) => (
              <PoojaCard
                key={pooja.id}
                pooja={pooja}
                onClick={() =>
                  router.push(
                    `/offline-pooja/pooja/${pooja.id}?select-temple=${temple.id}`
                  )
                }
              />
            ))}
          </div>
        </section>

        {/* ADDRESS */}
        <section className="mt-6 px-4">
          <SectionTitle title="Temple Location" />

          <div className="rounded-2xl border border-white/5 bg-[#0b1118] p-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/10">
                <MapPin
                  size={19}
                  className="text-yellow-400"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {temple.name}
                </p>

                <p className="mt-1 text-[11px] leading-5 text-gray-500">
                  {temple.city}, {temple.state},
                  India
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-yellow-500/30 py-3 text-[12px] font-semibold text-yellow-400"
            >
              <MapPin size={15} />
              View on Map
            </button>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-[480px] -translate-x-1/2 border-t border-white/5 bg-[#080e14]/95 p-3 backdrop-blur-xl">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("available-poojas")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 text-sm font-bold text-black shadow-lg shadow-yellow-400/10"
          >
            Select Pooja
            <ChevronRight size={19} />
          </button>
        </div>
      </div>
    </main>
  );
}

/* -------------------------------- */
/* INFO BOX */
/* -------------------------------- */

function InfoBox({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#0b1118] p-3 text-center">
      <div className="flex justify-center text-yellow-400">
        {icon}
      </div>

      <p className="mt-2 text-[13px] font-semibold text-white">
        {value}
      </p>

      <p className="mt-1 text-[9px] text-gray-500">
        {label}
      </p>
    </div>
  );
}

/* -------------------------------- */
/* SECTION TITLE */
/* -------------------------------- */

function SectionTitle({
  title,
}: {
  title: string;
}) {
  return (
    <h2 className="mb-3 text-[16px] font-semibold text-yellow-400">
      {title}
    </h2>
  );
}

/* -------------------------------- */
/* BENEFIT CARD */
/* -------------------------------- */

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#0b1118] p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
        {icon}
      </div>

      <h3 className="mt-3 text-[12px] font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1 text-[10px] text-gray-500">
        {description}
      </p>
    </div>
  );
}

/* -------------------------------- */
/* POOJA CARD */
/* -------------------------------- */

function PoojaCard({
  pooja,
  onClick,
}: {
  pooja: {
    id: number;
    name: string;
    price: string;
    duration: string;
    image: string;
    benefits: string[];
  };
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full gap-3 rounded-2xl border border-white/5 bg-[#0b1118] p-3 text-left"
    >
      {/* IMAGE */}
      <div className="relative h-[95px] w-[92px] shrink-0 overflow-hidden rounded-xl">
        <Image
          src={pooja.image}
          alt={pooja.name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[14px] font-semibold leading-5 text-white">
            {pooja.name}
          </h3>

          <ChevronRight
            size={18}
            className="shrink-0 text-yellow-400"
          />
        </div>

        <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-500">
          <Clock3 size={11} />
          {pooja.duration}
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {pooja.benefits.slice(0, 3).map((benefit) => (
            <span
              key={benefit}
              className="rounded-full bg-white/5 px-2 py-1 text-[8px] text-gray-400"
            >
              {benefit}
            </span>
          ))}
        </div>

        <p className="mt-2 text-[15px] font-bold text-yellow-400">
          {pooja.price}
        </p>
      </div>
    </button>
  );
}