"use client";

import {
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  Check,
  ChevronRight,
  Clock3,
  IndianRupee,
  MapPin,
  ShieldCheck,
  UserRound,
  CreditCard,
  MessageCircle,
  Loader2,
} from "lucide-react";

interface Booking {
  bookingType: string;

  poojaId: number;
  poojaName: string;
  poojaPrice: number;

  customerName: string;
  mobile: string;

  templeId: string;
  templeName: string;
  templeCity: string;

  locationType:
    | "temple"
    | "home";

  address?: string;
  city?: string;
  pincode?: string;

  date: string;
  time: string;

  paymentStatus: string;
  bookingStatus: string;

  createdAt?: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function OfflinePaymentPage() {
  const router = useRouter();

  const [booking, setBooking] =
    useState<Booking | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [scriptLoading, setScriptLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "ourhub-offline-pooja-booking"
      );

    if (!saved) {
      router.replace(
        "/pooja/offline/book"
      );
      return;
    }

    try {
      const parsed = JSON.parse(saved);

      setBooking(parsed);
    } catch {
      localStorage.removeItem(
        "ourhub-offline-pooja-booking"
      );

      router.replace(
        "/pooja/offline/book"
      );
    }
  }, [router]);

  // ---------------------------------------
  // LOAD RAZORPAY SCRIPT
  // ---------------------------------------

  useEffect(() => {
    if (
      document.getElementById(
        "razorpay-checkout-js"
      )
    ) {
      setScriptLoading(false);
      return;
    }

    const script =
      document.createElement("script");

    script.id =
      "razorpay-checkout-js";

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    script.onload = () => {
      setScriptLoading(false);
    };

    script.onerror = () => {
      setScriptLoading(false);
      setError(
        "Payment gateway load nahi ho paya. Please try again."
      );
    };

    document.body.appendChild(script);
  }, []);

  // ---------------------------------------
  // ONLINE PAYMENT
  // ---------------------------------------

  const handleOnlinePayment =
    async () => {
      if (!booking) return;

      setError("");
      setLoading(true);

      try {
        if (
          !window.Razorpay
        ) {
          throw new Error(
            "Razorpay checkout is not loaded."
          );
        }

        // -----------------------------------
        // CREATE SERVER ORDER
        // -----------------------------------

        const response =
          await fetch(
            "/api/offline-pooja/create-order",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                poojaId:
                  booking.poojaId,

                poojaName:
                  booking.poojaName,

                customerName:
                  booking.customerName,

                mobile:
                  booking.mobile,

                templeId:
                  booking.templeId,

                templeName:
                  booking.templeName,

                templeCity:
                  booking.templeCity,

                locationType:
                  booking.locationType,

                address:
                  booking.address || "",

                city:
                  booking.city || "",

                pincode:
                  booking.pincode || "",

                date:
                  booking.date,

                time:
                  booking.time,
              }),
            }
          );

        const data =
          await response.json();

        if (
          !response.ok ||
          !data.success
        ) {
          throw new Error(
            data.message ||
              "Unable to create payment order"
          );
        }

        // -----------------------------------
        // OPEN RAZORPAY
        // -----------------------------------

        const options = {
          key: data.keyId,

          amount:
            data.order.amount,

          currency:
            data.order.currency,

          name: "OurHub Services",

          description:
            `${booking.poojaName} - Offline Pooja`,

          order_id:
            data.order.id,

          prefill: {
            name:
              booking.customerName,

            contact:
              booking.mobile,
          },

          notes: {
            bookingId:
              data.bookingId,

            pooja:
              booking.poojaName,

            temple:
              booking.templeName,
          },

          theme: {
            color: "#facc15",
          },

          modal: {
            ondismiss: () => {
              setLoading(false);
            },
          },

          handler:
            async function (
              paymentResponse: any
            ) {
              await verifyPayment(
                paymentResponse,
                data.bookingId
              );
            },
        };

        const razorpay =
          new window.Razorpay(
            options
          );

        razorpay.on(
          "payment.failed",
          function (
            response: any
          ) {
            console.error(
              "RAZORPAY FAILED:",
              response
            );

            setLoading(false);

            setError(
              response?.error
                ?.description ||
                "Payment failed. Please try again."
            );
          }
        );

        razorpay.open();
      } catch (err: any) {
        console.error(err);

        setLoading(false);

        setError(
          err?.message ||
            "Payment start nahi ho paya."
        );
      }
    };

  // ---------------------------------------
  // VERIFY PAYMENT
  // ---------------------------------------

  const verifyPayment =
    async (
      paymentResponse: any,
      bookingId: string
    ) => {
      try {
        const response =
          await fetch(
            "/api/offline-pooja/verify-payment",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                razorpay_payment_id:
                  paymentResponse.razorpay_payment_id,

                razorpay_order_id:
                  paymentResponse.razorpay_order_id,

                razorpay_signature:
                  paymentResponse.razorpay_signature,

                bookingId,
              }),
            }
          );

        const data =
          await response.json();

        if (
          !response.ok ||
          !data.success
        ) {
          throw new Error(
            data.message ||
              "Payment verification failed"
          );
        }

        // -----------------------------------
        // UPDATE LOCAL BOOKING
        // -----------------------------------

        const updatedBooking = {
          ...booking,

          paymentStatus: "paid",

          bookingStatus:
            "confirmed",

          razorpayPaymentId:
            data.paymentId,

          razorpayOrderId:
            data.orderId,

          bookingId:
            data.bookingId,
        };

        localStorage.setItem(
          "ourhub-offline-pooja-booking",
          JSON.stringify(
            updatedBooking
          )
        );

        // -----------------------------------
        // SUCCESS PAGE
        // -----------------------------------

        router.replace(
          `/pooja/offline/book/success?bookingId=${data.bookingId}`
        );
      } catch (err: any) {
        console.error(err);

        setLoading(false);

        setError(
          err?.message ||
            "Payment verify nahi ho paya."
        );
      }
    };

  // ---------------------------------------
  // WHATSAPP
  // ---------------------------------------

  const handleWhatsApp =
    () => {
      if (!booking) return;

      const message = `
🙏 *OurHub Offline Pooja Booking*

*Pooja:* ${booking.poojaName}

*Temple:* ${booking.templeName}

*City:* ${booking.templeCity}

*Date:* ${booking.date}

*Time:* ${booking.time}

*Devotee:* ${booking.customerName}

*Mobile:* ${booking.mobile}

*Location:* ${
        booking.locationType ===
        "home"
          ? "Home Visit"
          : "At Temple"
      }

*Amount:* ₹${booking.poojaPrice.toLocaleString(
        "en-IN"
      )}

I want to confirm my offline pooja booking through OurHub.
      `.trim();

      const whatsappUrl =
        `https://wa.me/91YOUR_NUMBER?text=${encodeURIComponent(
          message
        )}`;

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );
    };

  if (!booking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#03070b] text-white">
        <Loader2
          className="animate-spin text-yellow-400"
          size={28}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#03070b] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden pb-32">

        {/* HEADER */}

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111d]/95 backdrop-blur-xl">
          <div className="flex h-16 items-center gap-3 px-4">

            <button
              type="button"
              onClick={() =>
                router.back()
              }
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
            >
              <ArrowLeft
                size={19}
              />
            </button>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold">
                Payment
              </p>

              <p className="text-[10px] text-gray-500">
                Complete your offline
                pooja booking
              </p>
            </div>

            <ShieldCheck
              size={21}
              className="text-yellow-400"
            />
          </div>
        </header>

        <div className="px-4">

          {/* PROGRESS */}

          <section className="pt-5">
            <div className="rounded-2xl border border-yellow-500/10 bg-[#0b1118] p-4">

              <div className="flex items-center justify-between">

                {[
                  ["01", "Pooja"],
                  ["02", "Details"],
                  ["03", "Summary"],
                  ["04", "Payment"],
                ].map(
                  ([number, label], index) => (
                    <div
                      key={number}
                      className="flex items-center"
                    >

                      <div className="text-center">

                        <div
                          className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ${
                            index < 3
                              ? "bg-yellow-400 text-black"
                              : "bg-yellow-400 text-black"
                          }`}
                        >
                          {index < 3 ? (
                            <Check
                              size={13}
                              strokeWidth={3}
                            />
                          ) : (
                            number
                          )}
                        </div>

                        <p className="mt-1 text-[8px] text-yellow-400">
                          {label}
                        </p>

                      </div>

                      {index < 3 && (
                        <div className="mx-1 h-px w-5 bg-yellow-400/30" />
                      )}

                    </div>
                  )
                )}

              </div>

            </div>
          </section>

          {/* TITLE */}

          <section className="pt-7">

            <h1 className="text-xl font-extrabold">
              Choose Payment Method
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              Select how you want to
              complete your offline
              pooja booking.
            </p>

          </section>

          {/* BOOKING DETAILS */}

          <section className="pt-6">

            <div className="mb-3 flex items-center gap-2">

              <Check
                size={17}
                className="text-yellow-400"
              />

              <h2 className="text-base font-bold">
                Booking Details
              </h2>

            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b1118] p-4">

              <PaymentInfo
                label="Pooja"
                value={
                  booking.poojaName
                }
              />

              <PaymentInfo
                label="Temple"
                value={`${booking.templeName}, ${booking.templeCity}`}
              />

              <PaymentInfo
                label="Date"
                value={formatDate(
                  booking.date
                )}
              />

              <PaymentInfo
                label="Time"
                value={
                  booking.time
                }
              />

              <PaymentInfo
                label="Devotee"
                value={
                  booking.customerName
                }
                last
              />

            </div>

          </section>

          {/* PAYMENT OPTIONS */}

          <section className="pt-7">

            <div className="mb-3">

              <h2 className="text-base font-bold">
                Payment Options
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Choose one option to
                continue
              </p>

            </div>

            {/* ONLINE */}

            <button
              type="button"
              disabled={
                loading ||
                scriptLoading
              }
              onClick={
                handleOnlinePayment
              }
              className="group relative flex w-full items-center gap-3 rounded-2xl border border-yellow-400/40 bg-yellow-400/[0.06] p-4 text-left transition active:scale-[0.98] disabled:opacity-60"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">

                {loading ? (
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                ) : (
                  <CreditCard
                    size={20}
                  />
                )}

              </div>

              <div className="min-w-0 flex-1">

                <div className="flex items-center gap-2">

                  <h3 className="text-sm font-bold">
                    Pay Online
                  </h3>

                  <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[7px] font-bold text-green-400">
                    SECURE
                  </span>

                </div>

                <p className="mt-1 text-[9px] leading-4 text-gray-500">
                  Pay securely using
                  UPI, cards or net
                  banking.
                </p>

              </div>

              <ChevronRight
                size={18}
                className="shrink-0 text-gray-500"
              />

            </button>

            {/* WHATSAPP */}

            <button
              type="button"
              onClick={
                handleWhatsApp
              }
              className="mt-3 flex w-full items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/[0.05] p-4 text-left transition active:scale-[0.98]"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">

                <MessageCircle
                  size={21}
                />

              </div>

              <div className="min-w-0 flex-1">

                <div className="flex items-center gap-2">

                  <h3 className="text-sm font-bold">
                    Contact OurHub
                    Team
                  </h3>

                  <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[7px] font-bold text-green-400">
                    WHATSAPP
                  </span>

                </div>

                <p className="mt-1 text-[9px] leading-4 text-gray-500">
                  Talk to our team on
                  WhatsApp for booking
                  confirmation and
                  payment assistance.
                </p>

              </div>

              <ChevronRight
                size={18}
                className="shrink-0 text-gray-500"
              />

            </button>

          </section>

          {/* ERROR */}

          {error && (
            <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/5 p-3">

              <p className="text-[10px] leading-4 text-red-400">
                {error}
              </p>

            </div>
          )}

          {/* TRUST */}

          <section className="pt-5">

            <div className="flex items-center gap-3 rounded-2xl border border-green-500/10 bg-green-500/5 p-4">

              <ShieldCheck
                size={20}
                className="shrink-0 text-green-400"
              />

              <div>

                <p className="text-xs font-semibold text-green-400">
                  Secure & Verified
                </p>

                <p className="mt-1 text-[9px] leading-4 text-gray-500">
                  Your booking details
                  are securely maintained
                  by OurHub.
                </p>

              </div>

            </div>

          </section>

        </div>

        {/* ================= BOTTOM CTA ================= */}

<div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#07111d]/95 px-2.5 py-2.5 backdrop-blur-xl">
  <div className="mx-auto flex w-full max-w-[440px] min-w-0 items-center gap-2">

    {/* TOTAL */}
    <div className="w-[72px] min-w-0 shrink-0">
      <p className="truncate text-[8px] leading-3 text-gray-500">
        Total Payable
      </p>

      <p className="mt-0.5 flex items-center text-sm font-extrabold leading-5 text-yellow-400">
        <IndianRupee size={13} />
        <span className="truncate">
          {booking.poojaPrice.toLocaleString("en-IN")}
        </span>
      </p>
    </div>

    {/* SECURE */}
    <div className="hidden shrink-0 items-center gap-1 text-[8px] text-green-400 sm:flex">
      <ShieldCheck size={13} />
      <span>Secure</span>
    </div>

    {/* PAY BUTTON */}
    <button
      type="button"
      disabled={loading || scriptLoading}
      onClick={handleOnlinePayment}
      className="flex h-11 min-w-0 flex-1 items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-yellow-400 px-2 text-[11px] font-extrabold text-black shadow-lg shadow-yellow-500/10 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? (
        <>
          <Loader2
            size={15}
            className="shrink-0 animate-spin"
          />

          <span className="truncate">
            Processing...
          </span>
        </>
      ) : (
        <>
          <span className="truncate">
            Pay ₹{booking.poojaPrice.toLocaleString("en-IN")}
          </span>

          <ChevronRight
            size={16}
            className="shrink-0"
          />
        </>
      )}
    </button>

  </div>
</div>

      </div>
    </main>
  );
}

/* ---------------------------------------
   PAYMENT INFO
--------------------------------------- */

function PaymentInfo({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-start justify-between gap-4 py-3 ${
        !last
          ? "border-b border-white/5"
          : ""
      }`}
    >

      <span className="text-[9px] text-gray-500">
        {label}
      </span>

      <span className="max-w-[220px] text-right text-xs font-semibold">
        {value}
      </span>

    </div>
  );
}

/* ---------------------------------------
   DATE FORMAT
--------------------------------------- */

function formatDate(
  value: string
) {
  if (!value) {
    return "Not selected";
  }

  const date =
    new Date(
      `${value}T00:00:00`
    );

  if (Number.isNaN(
    date.getTime()
  )) {
    return value;
  }

  return date.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
}