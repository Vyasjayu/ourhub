"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  CheckCircle2,
  Clock3,
  Home,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

interface Booking {
  poojaName: string;
  icon: string;
  price: number;
  customerName: string;
  mobile: string;
  city: string;
  date: string;
  time: string;
  duration: string;
  paymentStatus?: string;
  paymentId?: string;
  orderId?: string;
}

/* =========================================================
   SUCCESS CONTENT
========================================================= */

function PoojaSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [booking, setBooking] = useState<Booking | null>(null);

  const paymentId = searchParams.get("paymentId");
  const orderId = searchParams.get("orderId");

  /* =========================================================
     LOAD BOOKING
  ========================================================= */

  useEffect(() => {
    try {
      const saved = localStorage.getItem(
        "ourhub-pooja-booking"
      );

      if (saved) {
        const parsedBooking = JSON.parse(saved);

        setBooking(parsedBooking);
      }
    } catch (error) {
      console.error(
        "Failed to load booking:",
        error
      );
    }
  }, []);

  /* =========================================================
     WHATSAPP MESSAGE
  ========================================================= */

  const whatsappMessage = `Hello OurHub Services, I have successfully paid for ${
    booking?.poojaName || "my online pooja"
  }. Payment ID: ${paymentId || "N/A"}`;

  const whatsappUrl = `https://wa.me/918878632431?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-[#050b12] px-4 py-8 text-white">
      <div className="mx-auto max-w-md">

        {/* =================================================
            SUCCESS HEADER
        ================================================= */}

        <div className="text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2
              size={50}
              className="text-green-400"
            />
          </div>

          <h1 className="mt-5 text-2xl font-bold">
            Payment Successful
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Your online pooja booking has been confirmed.
          </p>

        </div>

        {/* =================================================
            BOOKING CARD
        ================================================= */}

        {booking && (
          <section className="mt-7 rounded-2xl border border-white/10 bg-[#0d1a28] p-5">

            {/* POOJA HEADER */}

            <div className="flex items-center gap-3">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#182d45] text-3xl">
                {booking.icon}
              </div>

              <div className="min-w-0 flex-1">

                <p className="text-[10px] font-semibold text-yellow-400">
                  Booking Confirmed
                </p>

                <h2 className="mt-1 truncate text-lg font-bold">
                  {booking.poojaName}
                </h2>

                <p className="mt-1 flex items-center gap-1 text-[10px] text-gray-500">
                  <Clock3 size={11} />
                  {booking.duration}
                </p>

              </div>

            </div>

            {/* BOOKING DETAILS */}

            <div className="mt-5 space-y-3 border-t border-white/5 pt-4 text-xs">

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-500">
                  Customer
                </span>

                <span className="text-right">
                  {booking.customerName}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-500">
                  Mobile
                </span>

                <span>
                  +91 {booking.mobile}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-500">
                  City
                </span>

                <span>
                  {booking.city}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-500">
                  Date
                </span>

                <span>
                  {booking.date}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-500">
                  Time
                </span>

                <span>
                  {booking.time}
                </span>
              </div>

              {/* AMOUNT */}

              <div className="flex items-center justify-between border-t border-white/5 pt-3">

                <span className="font-semibold">
                  Amount Paid
                </span>

                <span className="font-bold text-green-400">
                  ₹
                  {Number(
                    booking.price || 0
                  ).toLocaleString("en-IN")}
                </span>

              </div>

            </div>

          </section>
        )}

        {/* =================================================
            PAYMENT DETAILS
        ================================================= */}

        <section className="mt-4 rounded-2xl border border-green-500/10 bg-green-500/5 p-4">

          <div className="flex gap-3">

            <ShieldCheck
              size={20}
              className="shrink-0 text-green-400"
            />

            <div className="min-w-0">

              <p className="text-xs font-semibold">
                Payment Verified
              </p>

              {paymentId && (
                <p className="mt-1 break-all text-[9px] text-gray-500">
                  Payment ID: {paymentId}
                </p>
              )}

              {orderId && (
                <p className="mt-1 break-all text-[9px] text-gray-500">
                  Order ID: {orderId}
                </p>
              )}

              {!paymentId && !orderId && (
                <p className="mt-1 text-[9px] text-gray-500">
                  Payment details are being processed.
                </p>
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            NEXT STEPS
        ================================================= */}

        <section className="mt-4 rounded-2xl border border-white/10 bg-[#0d1a28] p-4">

          <p className="text-xs font-bold">
            What happens next?
          </p>

          <div className="mt-4 space-y-3">

            {/* STEP 1 */}

            <div className="flex gap-3">

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                1
              </div>

              <div>
                <p className="text-xs font-semibold">
                  Pandit confirmation
                </p>

                <p className="mt-1 text-[9px] text-gray-500">
                  Our team will assign/confirm the Pandit.
                </p>
              </div>

            </div>

            {/* STEP 2 */}

            <div className="flex gap-3">

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                2
              </div>

              <div>
                <p className="text-xs font-semibold">
                  Booking reminder
                </p>

                <p className="mt-1 text-[9px] text-gray-500">
                  You will receive details before the pooja.
                </p>
              </div>

            </div>

            {/* STEP 3 */}

            <div className="flex gap-3">

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                3
              </div>

              <div>
                <p className="text-xs font-semibold">
                  Online Pooja
                </p>

                <p className="mt-1 text-[9px] text-gray-500">
                  Join the pooja at your scheduled time.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            WHATSAPP
        ================================================= */}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5
            flex
            h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-green-500/20
            bg-green-500/10
            text-sm
            font-semibold
            text-green-400
            transition
            hover:bg-green-500/15
            active:scale-[0.98]
          "
        >
          <MessageCircle size={18} />
          Contact OurHub on WhatsApp
        </a>

        {/* =================================================
            HOME
        ================================================= */}

        <button
          type="button"
          onClick={() => router.push("/")}
          className="
            mt-3
            flex
            h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-yellow-400
            text-sm
            font-bold
            text-black
            transition
            hover:bg-yellow-300
            active:scale-[0.98]
          "
        >
          <Home size={17} />
          Back to Home
        </button>

        {/* =================================================
            FOOTER
        ================================================= */}

        <p className="mt-5 text-center text-[9px] text-gray-600">
          Thank you for choosing OurHub Services 🙏
        </p>

      </div>
    </main>
  );
}

/* =========================================================
   PAGE
   Suspense fixes useSearchParams() build error
========================================================= */

export default function PoojaSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#050b12] px-4 text-white">
          <div className="text-center">

            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-yellow-400" />

            <p className="mt-4 text-sm text-gray-500">
              Loading payment details...
            </p>

          </div>
        </main>
      }
    >
      <PoojaSuccessContent />
    </Suspense>
  );
}