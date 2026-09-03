"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

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

export default function ServiceBookingSuccessPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const [booking, setBooking] = useState<BookingData | null>(null);
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ourhub_service_booking");

      if (!stored) return;

      const data: BookingData = JSON.parse(stored);

      // Make sure success page belongs to the same service
      if (params?.id && data.serviceId !== params.id) {
        return;
      }

      setBooking(data);

      // Generate booking ID once
      const existingId = localStorage.getItem(
        "ourhub_service_booking_id"
      );

      if (existingId) {
        setBookingId(existingId);
      } else {
        const generatedId =
          "OH" +
          Date.now().toString().slice(-8);

        localStorage.setItem(
          "ourhub_service_booking_id",
          generatedId
        );

        setBookingId(generatedId);
      }
    } catch (error) {
      console.error("Booking data error:", error);
    }
  }, [params]);

  /* =====================================================
     LOADING
  ===================================================== */

  if (!booking) {
    return (
      <div className="min-h-screen bg-[#020202] text-white">
        <main className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center px-5">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[#DFAE45]/20 border-t-[#DFAE45]" />

            <p className="mt-4 text-[11px] text-white/40">
              Loading booking...
            </p>
          </div>
        </main>
      </div>
    );
  }

  /* =====================================================
     DATE FORMAT
  ===================================================== */

  const formattedDate = booking.date
    ? new Date(`${booking.date}T00:00:00`).toLocaleDateString(
        "en-IN",
        {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : booking.date;

  /* =====================================================
     PAGE
  ===================================================== */

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
              onClick={() => router.push("/services")}
              aria-label="Go to services"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                OURHUB
              </p>

              <h1 className="text-[16px] font-bold">
                Booking Confirmed
              </h1>
            </div>

          </div>
        </header>

        {/* =================================================
            SUCCESS HERO
        ================================================= */}

        <section className="px-4 pt-8">

          <div className="relative overflow-hidden rounded-[24px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#171309] via-[#0d0d0d] to-[#080808] px-5 py-8 text-center">

            {/* Glow */}

            <div className="absolute -top-16 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#DFAE45]/10">
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#DFAE45]">
                  <CheckCircle2 className="h-8 w-8 text-black" />
                </div>
              </div>

              <p className="mt-5 text-[8px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                BOOKING SUCCESSFUL
              </p>

              <h2 className="mt-2 text-[23px] font-bold">
                Your service is booked!
              </h2>

              <p className="mx-auto mt-2 max-w-[280px] text-[10px] leading-relaxed text-white/40">
                Your request has been successfully submitted.
                Our professional will visit you at the selected time.
              </p>

              {/* Booking ID */}

              <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2">
                <span className="text-[8px] text-white/30">
                  BOOKING ID
                </span>

                <span className="text-[9px] font-bold text-[#DFAE45]">
                  {bookingId}
                </span>
              </div>

            </div>
          </div>

        </section>

        {/* =================================================
            SERVICE
        ================================================= */}

        <section className="px-4 pt-6">

          <div className="rounded-[20px] border border-white/10 bg-[#0b0b0b] p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#DFAE45]/10">
                <Home className="h-5 w-5 text-[#DFAE45]" />
              </div>

              <div className="min-w-0 flex-1">

                <p className="text-[8px] font-bold uppercase tracking-[2px] text-white/25">
                  SERVICE
                </p>

                <h3 className="mt-1 truncate text-[14px] font-bold">
                  {booking.serviceTitle}
                </h3>

                <p className="mt-1 text-[9px] text-white/35">
                  Home service • Doorstep visit
                </p>

              </div>

              <div className="text-right">
                <p className="text-[8px] text-white/25">
                  TOTAL
                </p>

                <p className="mt-1 text-[15px] font-bold text-[#DFAE45]">
                  ₹{booking.total}
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            APPOINTMENT
        ================================================= */}

        <section className="px-4 pt-6">

          <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
            APPOINTMENT
          </p>

          <h2 className="mt-1 text-[17px] font-bold">
            Visit details
          </h2>

          <div className="mt-4 space-y-2">

            {/* DATE */}

            <DetailRow
              icon={<CalendarDays />}
              label="SERVICE DATE"
              value={formattedDate}
            />

            {/* TIME */}

            <DetailRow
              icon={<Clock3 />}
              label="SERVICE TIME"
              value={booking.time}
            />

            {/* CUSTOMER */}

            <DetailRow
              icon={<User />}
              label="CUSTOMER"
              value={booking.customerName}
            />

            {/* MOBILE */}

            <DetailRow
              icon={<Phone />}
              label="MOBILE"
              value={booking.mobile}
            />

            {/* ADDRESS */}

            <DetailRow
              icon={<MapPin />}
              label="SERVICE ADDRESS"
              value={booking.address}
            />

          </div>

        </section>

        {/* =================================================
            PAYMENT SUMMARY
        ================================================= */}

        <section className="px-4 pt-6">

          <div className="rounded-[20px] border border-white/10 bg-[#0b0b0b] p-4">

            <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              PAYMENT SUMMARY
            </p>

            <div className="mt-4 space-y-3">

              <PriceRow
                label={booking.serviceTitle}
                value={`₹${booking.price}`}
              />

              <PriceRow
                label="Professional visit fee"
                value={`₹${booking.visitFee}`}
              />

              <div className="h-px bg-white/[0.06]" />

              <div className="flex items-center justify-between">

                <span className="text-[12px] font-bold">
                  Estimated Total
                </span>

                <span className="text-[18px] font-bold text-[#DFAE45]">
                  ₹{booking.total}
                </span>

              </div>

            </div>

            <p className="mt-3 text-[8px] leading-relaxed text-white/25">
              Final charges may vary depending on the work
              required and parts used.
            </p>

          </div>

        </section>

        {/* =================================================
            WHAT HAPPENS NEXT
        ================================================= */}

        <section className="px-4 pt-6">

          <div className="rounded-[20px] border border-[#DFAE45]/15 bg-[#0b0b0b] p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <ShieldCheck className="h-4 w-4 text-[#DFAE45]" />
              </div>

              <div>
                <h3 className="text-[12px] font-bold">
                  What happens next?
                </h3>

                <p className="mt-1 text-[9px] text-white/35">
                  Our professional will contact you before the visit.
                </p>
              </div>

            </div>

            <div className="mt-4 space-y-3">

              <NextStep
                number="1"
                title="Professional assigned"
                text="We will assign a verified professional."
              />

              <NextStep
                number="2"
                title="Confirmation call"
                text="You may receive a call before the visit."
              />

              <NextStep
                number="3"
                title="Service at your doorstep"
                text="Professional will arrive at your selected time."
              />

            </div>

          </div>

        </section>

        {/* =================================================
            ACTIONS
        ================================================= */}

        <section className="px-4 pb-10 pt-7">

          <button
            type="button"
            onClick={() => router.push("/services")}
            className="flex w-full items-center justify-center rounded-[18px] bg-[#DFAE45] px-5 py-4 text-[12px] font-bold text-black active:scale-[0.98]"
          >
            Book Another Service
          </button>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-3 flex w-full items-center justify-center rounded-[18px] border border-white/10 bg-[#0b0b0b] px-5 py-4 text-[11px] font-semibold text-white/60"
          >
            Go to Home
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-[8px] text-white/20">
            <ShieldCheck className="h-3 w-3" />
            OURHUB • Verified professionals • Secure booking
          </div>

        </section>

      </main>
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
    <div className="rounded-[16px] border border-white/10 bg-[#0b0b0b] p-3">

      <div className="flex items-start gap-3">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">

          <p className="text-[7px] font-bold uppercase tracking-[1.5px] text-white/25">
            {label}
          </p>

          <p className="mt-1 break-words text-[10px] font-semibold leading-relaxed text-white/75">
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
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">

      <span className="text-[10px] text-white/45">
        {label}
      </span>

      <span className="text-[10px] font-semibold">
        {value}
      </span>

    </div>
  );
}

/* =========================================================
   NEXT STEP
========================================================= */

function NextStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFAE45] text-[9px] font-bold text-black">
        {number}
      </div>

      <div className="min-w-0">

        <p className="text-[10px] font-semibold">
          {title}
        </p>

        <p className="mt-0.5 text-[8px] leading-relaxed text-white/30">
          {text}
        </p>

      </div>

    </div>
  );
}