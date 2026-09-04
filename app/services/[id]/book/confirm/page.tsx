"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Home,
  IndianRupee,
  MapPin,
  Phone,
  ShieldCheck,
  User,
  Wrench,
} from "lucide-react";

/* =========================================================
   BOOKING TYPE
========================================================= */

interface BookingData {
  serviceId: string;
  serviceTitle: string;
  price: number;
  visitFee: number;
  total: number;
  customerName: string;
  mobile: string;
  address: string;
  date: string;
  time: string;
}

/* =========================================================
   SERVICE DATA
========================================================= */

const serviceImages: Record<string, string> = {
  cleaning: "/home-services/cleaning.jpg",
  "ac-repair": "/home-services/ac.jpg",
  electrician: "/home-services/electrician.jpg",
  plumber: "/home-services/plumbing.jpg",
  carpenter: "/home-services/carpentry.jpg",
  "washing-machine": "/home-services/washing-machine.jpg",
  refrigerator: "/home-services/refrigerator.jpg",
  "tv-repair": "/home-services/tv-repair.jpg",
  "fan-repair": "/home-services/fan-repair.jpg",
  "pest-control": "/home-services/pest-control.jpg",
  painting: "/home-services/painting.jpg",
  "sofa-cleaning": "/home-services/sofa-cleaning.jpg",
  "appliance-repair": "/home-services/appliance.jpg",
  "water-tank": "/home-services/water-tank.jpg",
  "packers-movers": "/home-services/packers-movers.jpg",
  locksmith: "/home-services/locksmith.jpg",
};

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ServiceConfirmPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const serviceId = params?.id;

  const [booking, setBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [agree, setAgree] = useState(false);

  /* =======================================================
     READ LOCAL STORAGE
  ======================================================= */

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ourhub_service_booking");

      if (!stored) {
        setBooking(null);
        setLoading(false);
        return;
      }

      const parsed: BookingData = JSON.parse(stored);

      /*
        Safety check:
        Agar URL cleaning ka hai aur storage mein
        kisi aur service ki booking hai to mismatch avoid hoga.
      */

      if (serviceId && parsed.serviceId !== serviceId) {
        setBooking(null);
      } else {
        setBooking(parsed);
      }
    } catch (error) {
      console.error("Booking data error:", error);
      setBooking(null);
    } finally {
      setLoading(false);
    }
  }, [serviceId]);

  /* =======================================================
     FORMAT DATE
  ======================================================= */

  const formattedDate = useMemo(() => {
    if (!booking?.date) return "";

    try {
      return new Date(`${booking.date}T00:00:00`).toLocaleDateString(
        "en-IN",
        {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      );
    } catch {
      return booking.date;
    }
  }, [booking?.date]);

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020202] text-white">
        <main className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center bg-[#050505]">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">
              <Wrench className="h-5 w-5 animate-pulse text-[#DFAE45]" />
            </div>

            <p className="mt-4 text-[10px] text-white/40">
              Loading booking...
            </p>
          </div>
        </main>
      </div>
    );
  }

  /* =======================================================
     NO BOOKING
  ======================================================= */

  if (!booking) {
    return (
      <div className="min-h-screen bg-[#020202] text-white">
        <main className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center bg-[#050505] px-5">
          <div className="w-full text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DFAE45]/10">
              <Wrench className="h-7 w-7 text-[#DFAE45]" />
            </div>

            <h1 className="mt-5 text-lg font-bold">
              Booking Details Not Found
            </h1>

            <p className="mx-auto mt-2 max-w-[280px] text-xs leading-relaxed text-white/40">
              Your booking information is missing or has expired.
              Please start the booking again.
            </p>

            <button
              type="button"
              onClick={() =>
                router.push(
                  serviceId
                    ? `/services/${serviceId}/book`
                    : "/services"
                )
              }
              className="mt-6 rounded-full bg-[#DFAE45] px-6 py-3 text-xs font-bold text-black"
            >
              Start Booking
            </button>
          </div>
        </main>
      </div>
    );
  }

  /* =======================================================
     CONFIRM BOOKING
  ======================================================= */

  const handleConfirm = () => {
  if (!agree || !booking) return;

  const finalBooking = {
    ...booking,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  // Save booking
  localStorage.setItem(
    "ourhub_service_booking",
    JSON.stringify(finalBooking)
  );

  // WhatsApp number
  const whatsappNumber = "918878632431";

  // WhatsApp message
  const whatsappMessage = `
🔔 *NEW SERVICE BOOKING - OURHUB*

━━━━━━━━━━━━━━━━━━

🔧 *SERVICE DETAILS*

Service: ${booking.serviceTitle}
Service ID: ${booking.serviceId}

💰 *PRICE DETAILS*

Service Charge: ₹${booking.price}
Visit Fee: ₹${booking.visitFee}
Estimated Total: ₹${booking.total}

━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

Name: ${booking.customerName}
Mobile: ${booking.mobile}

📍 *SERVICE ADDRESS*

${booking.address}

━━━━━━━━━━━━━━━━━━

📅 *SERVICE SCHEDULE*

Date: ${formattedDate}
Time: ${booking.time}

━━━━━━━━━━━━━━━━━━

📌 *BOOKING STATUS*

Status: Pending

🕒 Booking Time:
${new Date().toLocaleString("en-IN")}

━━━━━━━━━━━━━━━━━━

Booking received from *OURHUB*
`;

  // Encode WhatsApp message
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");

  // Go to success page
  router.push(`/services/${booking.serviceId}/book/success`);
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
                Confirm Booking
              </h1>
            </div>

          </div>
        </header>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <section className="px-4 pt-5">

          <div className="flex items-center">

            <ProgressStep
              number="1"
              title="Details"
              completed
            />

            <div className="h-px flex-1 bg-[#DFAE45]/40" />

            <ProgressStep
              number="2"
              title="Confirm"
              active
            />

            <div className="h-px flex-1 bg-white/10" />

            <ProgressStep
              number="3"
              title="Done"
            />

          </div>

        </section>

        {/* =================================================
            SUCCESS STYLE TOP MESSAGE
        ================================================= */}

        <section className="px-4 pt-6">

          <div className="rounded-[20px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151209] to-[#090909] p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DFAE45]/10">
                <CheckCircle2 className="h-5 w-5 text-[#DFAE45]" />
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                  Almost Done
                </p>

                <h2 className="mt-1 text-[15px] font-bold">
                  Review your booking
                </h2>

                <p className="mt-1 text-[9px] text-white/35">
                  Please check your details before confirming.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            SERVICE
        ================================================= */}

        <section className="px-4 pt-6">

          <SectionTitle
            eyebrow="SERVICE"
            title="Booking details"
          />

          <div className="mt-4 overflow-hidden rounded-[20px] border border-[#DFAE45]/20 bg-[#0b0b0b]">

            <div className="flex gap-3 p-3">

              {/* IMAGE */}

              <div className="h-[78px] w-[78px] shrink-0 overflow-hidden rounded-[14px] bg-[#151515]">

                <img
                  src={
                    serviceImages[booking.serviceId] ||
                    "/home-services/cleaning.jpg"
                  }
                  alt={booking.serviceTitle}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

              </div>

              {/* DETAILS */}

              <div className="min-w-0 flex-1">

                <div className="flex items-start justify-between gap-2">

                  <div className="min-w-0">

                    <h3 className="truncate text-[14px] font-bold">
                      {booking.serviceTitle}
                    </h3>

                    <p className="mt-1 text-[9px] text-white/35">
                      Professional doorstep service
                    </p>

                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-[#DFAE45]/10 px-2 py-1">
                    <ShieldCheck className="h-2.5 w-2.5 text-[#DFAE45]" />

                    <span className="text-[7px] font-bold text-[#DFAE45]">
                      VERIFIED
                    </span>
                  </div>

                </div>

                <div className="mt-3 flex items-center justify-between">

                  <span className="text-[8px] text-white/30">
                    Service charge
                  </span>

                  <span className="text-[13px] font-bold text-[#DFAE45]">
                    ₹{booking.price}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            CUSTOMER
        ================================================= */}

        <section className="px-4 pt-7">

          <SectionTitle
            eyebrow="CUSTOMER"
            title="Your information"
          />

          <div className="mt-4 space-y-2">

            <DetailRow
              icon={<User />}
              label="CUSTOMER"
              value={booking.customerName}
            />

            <DetailRow
              icon={<Phone />}
              label="MOBILE"
              value={booking.mobile}
            />

          </div>

        </section>

        {/* =================================================
            SCHEDULE
        ================================================= */}

        <section className="px-4 pt-7">

          <SectionTitle
            eyebrow="SCHEDULE"
            title="Service visit"
          />

          <div className="mt-4 grid grid-cols-2 gap-2">

            <ScheduleCard
              icon={<CalendarDays />}
              label="DATE"
              value={formattedDate}
            />

            <ScheduleCard
              icon={<Clock3 />}
              label="TIME"
              value={booking.time}
            />

          </div>

        </section>

        {/* =================================================
            ADDRESS
        ================================================= */}

        <section className="px-4 pt-7">

          <SectionTitle
            eyebrow="LOCATION"
            title="Service address"
          />

          <div className="mt-4 rounded-[18px] border border-white/10 bg-[#0b0b0b] p-4">

            <div className="flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <MapPin className="h-4 w-4 text-[#DFAE45]" />
              </div>

              <div className="min-w-0">

                <p className="text-[8px] font-bold uppercase tracking-[1px] text-white/30">
                  SERVICE AT
                </p>

                <p className="mt-1 text-[10px] leading-relaxed text-white/65">
                  {booking.address}
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            PRICE SUMMARY
        ================================================= */}

        <section className="px-4 pt-7">

          <SectionTitle
            eyebrow="PAYMENT"
            title="Price summary"
          />

          <div className="mt-4 rounded-[20px] border border-white/10 bg-[#0b0b0b] p-4">

            {/* SERVICE */}

            <PriceRow
              label={booking.serviceTitle}
              value={`₹${booking.price}`}
            />

            <div className="my-3 h-px bg-white/[0.06]" />

            {/* VISIT FEE */}

            <PriceRow
              label="Professional visit fee"
              value={`₹${booking.visitFee}`}
              muted
            />

            <div className="my-3 h-px bg-white/[0.06]" />

            {/* TOTAL */}

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[12px] font-bold">
                  Estimated Total
                </p>

                <p className="mt-1 text-[8px] text-white/25">
                  Final charges may vary based on actual work.
                </p>

              </div>

              <div className="flex items-center gap-0.5 text-[#DFAE45]">

                <IndianRupee className="h-4 w-4" />

                <span className="text-[20px] font-bold">
                  {booking.total}
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            TRUST
        ================================================= */}

        <section className="px-4 pt-7">

          <div className="grid grid-cols-3 gap-2">

            <TrustCard
              icon={<ShieldCheck />}
              title="Verified"
              subtitle="Professionals"
            />

            <TrustCard
              icon={<Clock3 />}
              title="On Time"
              subtitle="Service"
            />

            <TrustCard
              icon={<Home />}
              title="Doorstep"
              subtitle="Service"
            />

          </div>

        </section>

        {/* =================================================
            TERMS
        ================================================= */}

        <section className="px-4 pt-7">

          <button
            type="button"
            onClick={() => setAgree((value) => !value)}
            className="flex w-full items-start gap-3 rounded-[17px] border border-white/10 bg-[#0b0b0b] p-3 text-left"
          >

            <div
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                agree
                  ? "border-[#DFAE45] bg-[#DFAE45]"
                  : "border-white/15 bg-transparent"
              }`}
            >

              {agree && (
                <CheckCircle2 className="h-3.5 w-3.5 text-black" />
              )}

            </div>

            <p className="text-[9px] leading-relaxed text-white/45">
              I confirm that the above details are correct and agree
              to the OURHUB service terms. Final service charges may
              change depending on the work required.
            </p>

          </button>

        </section>

        {/* =================================================
            CONFIRM BUTTON
        ================================================= */}

        <section className="px-4 pb-10 pt-7">

          <button
            type="button"
            disabled={!agree}
            onClick={handleConfirm}
            className={`flex w-full items-center justify-between rounded-[18px] px-5 py-4 transition ${
              agree
                ? "bg-[#DFAE45] text-black active:scale-[0.98]"
                : "cursor-not-allowed bg-white/10 text-white/25"
            }`}
          >

            <div className="text-left">

              <p className="text-[8px] font-semibold opacity-60">
                ESTIMATED TOTAL
              </p>

              <p className="text-[17px] font-bold">
                ₹{booking.total}
              </p>

            </div>

            <div className="flex items-center gap-2">

              <span className="text-[11px] font-bold">
                Confirm Booking
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
   DETAIL ROW
========================================================= */

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[17px] border border-white/10 bg-[#0b0b0b] p-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-[8px] font-semibold uppercase tracking-[1px] text-white/30">
          {label}
        </p>

        <p className="mt-1 truncate text-[11px] font-medium text-white/75">
          {value}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   SCHEDULE CARD
========================================================= */

function ScheduleCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[17px] border border-white/10 bg-[#0b0b0b] p-3">

      <div className="flex items-start gap-3">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
          {icon}
        </div>

        <div className="min-w-0">

          <p className="text-[8px] font-semibold uppercase tracking-[1px] text-white/30">
            {label}
          </p>

          <p className="mt-1 text-[9px] font-semibold leading-relaxed text-white/70">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   PRICE ROW
========================================================= */

function PriceRow({
  label,
  value,
  muted = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">

      <p
        className={`text-[10px] ${
          muted ? "text-white/40" : "text-white/65"
        }`}
      >
        {label}
      </p>

      <p className="text-[11px] font-semibold">
        {value}
      </p>

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

      <div className="flex flex-col items-center text-center">

        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
          {icon}
        </div>

        <p className="mt-2 text-[8px] font-bold">
          {title}
        </p>

        <p className="mt-0.5 text-[7px] text-white/30">
          {subtitle}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   PROGRESS STEP
========================================================= */

function ProgressStep({
  number,
  title,
  active = false,
  completed = false,
}: {
  number: string;
  title: string;
  active?: boolean;
  completed?: boolean;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center">

      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold ${
          active
            ? "bg-[#DFAE45] text-black"
            : completed
              ? "bg-[#DFAE45]/20 text-[#DFAE45]"
              : "border border-white/10 bg-[#0b0b0b] text-white/30"
        }`}
      >
        {completed ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          number
        )}
      </div>

      <span
        className={`mt-1 text-[7px] ${
          active
            ? "text-[#DFAE45]"
            : completed
              ? "text-[#DFAE45]/70"
              : "text-white/25"
        }`}
      >
        {title}
      </span>

    </div>
  );
}