"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Clock3,
  IndianRupee,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  User,
  CalendarDays,
  Home,
  Wrench,
} from "lucide-react";

/* =========================================================
   SERVICE DATA
========================================================= */

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: number;
  rating: string;
  category: string;
}

const services: Record<string, ServiceData> = {
  cleaning: {
    id: "cleaning",
    title: "Home Cleaning",
    subtitle: "Professional deep cleaning",
    image: "/home-services/cleaning.jpg",
    price: 499,
    rating: "4.8",
    category: "Cleaning",
  },

  "ac-repair": {
    id: "ac-repair",
    title: "AC Repair",
    subtitle: "AC service & repair",
    image: "/home-services/ac.jpg",
    price: 299,
    rating: "4.7",
    category: "Repair",
  },

  electrician: {
    id: "electrician",
    title: "Electrician",
    subtitle: "Electrical repair & installation",
    image: "/home-services/electrician.jpg",
    price: 199,
    rating: "4.8",
    category: "Repair",
  },

  plumber: {
    id: "plumber",
    title: "Plumber",
    subtitle: "Plumbing repair & fitting",
    image: "/home-services/plumbing.jpg",
    price: 199,
    rating: "4.7",
    category: "Repair",
  },

  carpenter: {
    id: "carpenter",
    title: "Carpenter",
    subtitle: "Furniture repair & fitting",
    image: "/home-services/carpentry.jpg",
    price: 249,
    rating: "4.8",
    category: "Repair",
  },

  "washing-machine": {
    id: "washing-machine",
    title: "Washing Machine",
    subtitle: "Repair & service",
    image: "/home-services/washing-machine.jpg",
    price: 299,
    rating: "4.6",
    category: "Appliances",
  },

  refrigerator: {
    id: "refrigerator",
    title: "Refrigerator",
    subtitle: "Repair & maintenance",
    image: "/home-services/refrigerator.jpg",
    price: 299,
    rating: "4.7",
    category: "Appliances",
  },

  "tv-repair": {
    id: "tv-repair",
    title: "TV Repair",
    subtitle: "LED & Smart TV repair",
    image: "/home-services/tv-repair.jpg",
    price: 249,
    rating: "4.6",
    category: "Appliances",
  },

  "fan-repair": {
    id: "fan-repair",
    title: "Fan Repair",
    subtitle: "Ceiling & exhaust fan service",
    image: "/home-services/fan-repair.jpg",
    price: 149,
    rating: "4.7",
    category: "Repair",
  },

  "pest-control": {
    id: "pest-control",
    title: "Pest Control",
    subtitle: "Home pest protection",
    image: "/home-services/pest-control.jpg",
    price: 699,
    rating: "4.8",
    category: "Cleaning",
  },

  painting: {
    id: "painting",
    title: "Home Painting",
    subtitle: "Interior & exterior painting",
    image: "/home-services/painting.jpg",
    price: 1499,
    rating: "4.8",
    category: "Painting",
  },

  "sofa-cleaning": {
    id: "sofa-cleaning",
    title: "Sofa Cleaning",
    subtitle: "Professional sofa cleaning",
    image: "/home-services/sofa-cleaning.jpg",
    price: 399,
    rating: "4.7",
    category: "Cleaning",
  },

  "appliance-repair": {
    id: "appliance-repair",
    title: "Appliance Repair",
    subtitle: "Home appliance service",
    image: "/home-services/appliance.jpg",
    price: 249,
    rating: "4.6",
    category: "Appliances",
  },

  "water-tank": {
    id: "water-tank",
    title: "Water Tank Cleaning",
    subtitle: "Professional tank cleaning",
    image: "/home-services/water-tank.jpg",
    price: 499,
    rating: "4.7",
    category: "Cleaning",
  },

  "packers-movers": {
    id: "packers-movers",
    title: "Packers & Movers",
    subtitle: "Safe home shifting",
    image: "/home-services/packers-movers.jpg",
    price: 999,
    rating: "4.7",
    category: "Moving",
  },

  locksmith: {
    id: "locksmith",
    title: "Locksmith",
    subtitle: "Lock repair & replacement",
    image: "/home-services/locksmith.jpg",
    price: 199,
    rating: "4.6",
    category: "Repair",
  },
};

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ServiceBookingPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const serviceId = params?.id;

  const service = useMemo(() => {
    if (!serviceId) return undefined;

    return services[serviceId];
  }, [serviceId]);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  /* =====================================================
     DATE OPTIONS
  ===================================================== */

  const dateOptions = useMemo(() => {
    const dates = [];

    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);

      date.setDate(today.getDate() + i);

      dates.push({
        value: date.toISOString().split("T")[0],
        day:
          i === 0
            ? "Today"
            : i === 1
              ? "Tomorrow"
              : date.toLocaleDateString("en-IN", {
                  weekday: "short",
                }),
        date: date.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
        }),
      });
    }

    return dates;
  }, []);

  /* =====================================================
     TIME OPTIONS
  ===================================================== */

  const timeOptions = [
    "09:00 AM",
    "11:00 AM",
    "01:00 PM",
    "03:00 PM",
    "05:00 PM",
    "07:00 PM",
  ];

  /* =====================================================
     PRICE
  ===================================================== */

  const servicePrice = service?.price ?? 0;

  const visitFee = 49;

  const total = servicePrice + visitFee;

  /* =====================================================
     INVALID SERVICE
  ===================================================== */

  if (!service) {
    return (
      <div className="min-h-screen bg-[#020202] text-white">
        <main className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center px-5 text-center">
          <div>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DFAE45]/10">
              <Wrench className="h-7 w-7 text-[#DFAE45]" />
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
              View Services
            </button>
          </div>
        </main>
      </div>
    );
  }

  /* =====================================================
     BOOKING VALIDATION
  ===================================================== */

  const canContinue =
    name.trim().length >= 2 &&
    mobile.trim().length === 10 &&
    selectedDate !== "" &&
    selectedTime !== "" &&
    address.trim().length >= 10;

  /* =====================================================
     CONTINUE
  ===================================================== */

  const handleContinue = () => {
    if (!canContinue) return;

    const bookingData = {
      serviceId: service.id,
      serviceTitle: service.title,
      price: servicePrice,
      visitFee,
      total,
      customerName: name.trim(),
      mobile: mobile.trim(),
      address: address.trim(),
      date: selectedDate,
      time: selectedTime,
    };

    /*
      Temporary local storage.

      Later yahi data API/database/payment
      flow mein bhej sakte ho.
    */

    localStorage.setItem(
      "ourhub_service_booking",
      JSON.stringify(bookingData)
    );

    router.push(`/services/${service.id}/book/confirm`);
  };

  return (
    <div className="min-h-screen bg-[#020202]">
      <main className="mx-auto min-h-screen w-full max-w-[430px] bg-[#050505] text-white">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 px-4 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">

            <button
              type="button"
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
                Book {service.title}
              </h1>
            </div>

          </div>
        </header>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <section className="px-4 pt-5">

          <div className="flex items-center">

            <Step
              number="1"
              title="Details"
              active
            />

            <div className="h-px flex-1 bg-[#DFAE45]/20" />

            <Step
              number="2"
              title="Confirm"
            />

            <div className="h-px flex-1 bg-white/10" />

            <Step
              number="3"
              title="Done"
            />

          </div>

        </section>

        {/* =================================================
            SERVICE CARD
        ================================================= */}

        <section className="px-4 pt-6">

          <div className="overflow-hidden rounded-[20px] border border-[#DFAE45]/20 bg-[#0b0b0b]">

            <div className="flex gap-3 p-3">

              <div className="h-[75px] w-[75px] shrink-0 overflow-hidden rounded-[14px] bg-[#151515]">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

              </div>

              <div className="min-w-0 flex-1">

                <div className="flex items-start justify-between gap-2">

                  <div>
                    <h2 className="text-[14px] font-bold">
                      {service.title}
                    </h2>

                    <p className="mt-1 text-[9px] text-white/40">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-[#DFAE45]/10 px-2 py-1">

                    <Star className="h-2.5 w-2.5 fill-[#DFAE45] text-[#DFAE45]" />

                    <span className="text-[8px] font-bold text-[#DFAE45]">
                      {service.rating}
                    </span>

                  </div>

                </div>

                <div className="mt-3 flex items-center justify-between">

                  <span className="text-[9px] text-white/30">
                    Starting from
                  </span>

                  <span className="text-[14px] font-bold text-[#DFAE45]">
                    ₹{service.price}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            CUSTOMER DETAILS
        ================================================= */}

        <section className="px-4 pt-7">

          <SectionTitle
            eyebrow="CUSTOMER DETAILS"
            title="Your information"
          />

          <div className="mt-4 space-y-3">

            <InputField
              icon={<User />}
              label="Full Name"
              placeholder="Enter your name"
              value={name}
              onChange={setName}
            />

            <InputField
              icon={<Phone />}
              label="Mobile Number"
              placeholder="10 digit mobile number"
              value={mobile}
              onChange={(value) => {
                const clean = value.replace(/\D/g, "").slice(0, 10);
                setMobile(clean);
              }}
              type="tel"
            />

          </div>

        </section>

        {/* =================================================
            DATE
        ================================================= */}

        <section className="px-4 pt-7">

          <SectionTitle
            eyebrow="SERVICE DATE"
            title="When should we visit?"
          />

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">

            {dateOptions.map((item) => {

              const active = selectedDate === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setSelectedDate(item.value)}
                  className={`min-w-[75px] rounded-[15px] border p-3 text-center transition ${
                    active
                      ? "border-[#DFAE45] bg-[#DFAE45] text-black"
                      : "border-white/10 bg-[#0b0b0b] text-white"
                  }`}
                >

                  <p className="text-[9px] font-bold">
                    {item.day}
                  </p>

                  <p
                    className={`mt-1 text-[8px] ${
                      active
                        ? "text-black/60"
                        : "text-white/30"
                    }`}
                  >
                    {item.date}
                  </p>

                </button>
              );
            })}

          </div>

        </section>

        {/* =================================================
            TIME
        ================================================= */}

        <section className="px-4 pt-7">

          <SectionTitle
            eyebrow="SERVICE TIME"
            title="Choose a convenient time"
          />

          <div className="mt-4 grid grid-cols-3 gap-2">

            {timeOptions.map((time) => {

              const active = selectedTime === time;

              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-[13px] border px-2 py-3 text-[9px] font-semibold transition ${
                    active
                      ? "border-[#DFAE45] bg-[#DFAE45] text-black"
                      : "border-white/10 bg-[#0b0b0b] text-white/55"
                  }`}
                >
                  {time}
                </button>
              );
            })}

          </div>

        </section>

        {/* =================================================
            ADDRESS
        ================================================= */}

        <section className="px-4 pt-7">

          <SectionTitle
            eyebrow="SERVICE ADDRESS"
            title="Where should we come?"
          />

          <div className="mt-4">

            <div className="rounded-[17px] border border-white/10 bg-[#0b0b0b] p-3">

              <div className="flex items-start gap-3">

                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <MapPin className="h-4 w-4 text-[#DFAE45]" />
                </div>

                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House no., street, area, city..."
                  rows={3}
                  className="w-full resize-none bg-transparent text-[11px] leading-relaxed text-white outline-none placeholder:text-white/25"
                />

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            SERVICE INFO
        ================================================= */}

        <section className="px-4 pt-7">

          <div className="grid grid-cols-3 gap-2">

            <MiniInfo
              icon={<ShieldCheck />}
              text="Verified"
            />

            <MiniInfo
              icon={<Clock3 />}
              text="On Time"
            />

            <MiniInfo
              icon={<Home />}
              text="Doorstep"
            />

          </div>

        </section>

        {/* =================================================
            PRICE SUMMARY
        ================================================= */}

        <section className="px-4 pt-7">

          <div className="rounded-[20px] border border-white/10 bg-[#0b0b0b] p-4">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-[9px] text-white/35">
                  SERVICE
                </p>

                <p className="mt-1 text-[11px] font-semibold">
                  {service.title}
                </p>
              </div>

              <p className="text-[12px] font-bold">
                ₹{servicePrice}
              </p>

            </div>

            <div className="my-3 h-px bg-white/[0.06]" />

            <div className="flex items-center justify-between">

              <div>
                <p className="text-[9px] text-white/35">
                  VISIT FEE
                </p>

                <p className="mt-1 text-[10px] text-white/50">
                  Professional visit
                </p>
              </div>

              <p className="text-[11px]">
                ₹{visitFee}
              </p>

            </div>

            <div className="my-3 h-px bg-white/[0.06]" />

            <div className="flex items-center justify-between">

              <p className="text-[12px] font-bold">
                Estimated Total
              </p>

              <div className="flex items-center gap-1 text-[#DFAE45]">

                <IndianRupee className="h-4 w-4" />

                <span className="text-[18px] font-bold">
                  {total}
                </span>

              </div>

            </div>

            <p className="mt-2 text-[8px] leading-relaxed text-white/25">
              Final charges may vary depending on the work required
              and parts used.
            </p>

          </div>

        </section>

        {/* =================================================
            BOOK BUTTON
        ================================================= */}

        <section className="px-4 pb-10 pt-7">

          <button
            type="button"
            disabled={!canContinue}
            onClick={handleContinue}
            className={`flex w-full items-center justify-between rounded-[18px] px-5 py-4 transition ${
              canContinue
                ? "bg-[#DFAE45] text-black active:scale-[0.98]"
                : "cursor-not-allowed bg-white/10 text-white/25"
            }`}
          >

            <div className="text-left">

              <p className="text-[8px] font-semibold opacity-60">
                ESTIMATED TOTAL
              </p>

              <p className="text-[17px] font-bold">
                ₹{total}
              </p>

            </div>

            <div className="flex items-center gap-2">

              <span className="text-[11px] font-bold">
                Continue
              </span>

              <ChevronRight className="h-4 w-4" />

            </div>

          </button>

          <div className="mt-3 flex items-center justify-center gap-2 text-[8px] text-white/25">

            <ShieldCheck className="h-3 w-3" />

            Secure booking • Verified professionals

          </div>

        </section>

      </main>
    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
        {eyebrow}
      </p>

      <h2 className="mt-1 text-[17px] font-bold">
        {title}
      </h2>
    </div>
  );
}

/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
  icon,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="rounded-[17px] border border-white/10 bg-[#0b0b0b] p-3">

      <label className="flex items-center gap-3">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">

          <p className="mb-1 text-[8px] font-semibold uppercase tracking-[1px] text-white/30">
            {label}
          </p>

          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent text-[11px] text-white outline-none placeholder:text-white/20"
          />

        </div>

      </label>

    </div>
  );
}

/* =========================================================
   MINI INFO
========================================================= */

function MiniInfo({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="rounded-[14px] border border-white/10 bg-[#0b0b0b] px-2 py-3">

      <div className="flex flex-col items-center justify-center gap-1.5">

        <div className="text-[#DFAE45]">
          {icon}
        </div>

        <span className="text-[8px] font-semibold text-white/50">
          {text}
        </span>

      </div>

    </div>
  );
}

/* =========================================================
   STEP
========================================================= */

function Step({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center">

      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold ${
          active
            ? "bg-[#DFAE45] text-black"
            : "border border-white/10 bg-[#0b0b0b] text-white/30"
        }`}
      >
        {number}
      </div>

      <span
        className={`mt-1 text-[7px] ${
          active ? "text-[#DFAE45]" : "text-white/25"
        }`}
      >
        {title}
      </span>

    </div>
  );
}