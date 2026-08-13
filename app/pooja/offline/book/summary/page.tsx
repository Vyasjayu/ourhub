"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  User,
  Phone,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  IndianRupee,
  Pencil,
} from "lucide-react";

interface Booking {
  bookingType: string;

  poojaId: string;
  poojaName: string;
  poojaPrice: number;

  customerName: string;
  mobile: string;

  templeId: string;
  templeName: string;
  templeCity: string;

  locationType: "temple" | "home";

  address: string;
  city: string;
  pincode: string;

  date: string;
  time: string;

  paymentStatus: string;
  bookingStatus: string;

  createdAt: string;
}

export default function OfflinePoojaSummaryPage() {
  const router = useRouter();

  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedBooking = localStorage.getItem(
        "ourhub-offline-pooja-booking"
      );

      if (!savedBooking) {
        router.replace("/pooja/offline/book");
        return;
      }

      const parsed: Booking = JSON.parse(savedBooking);

      setBooking(parsed);
    } catch (error) {
      console.error("Failed to load booking:", error);
      router.replace("/pooja/offline/book");
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#03070b] text-white">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-yellow-400 border-t-transparent" />

          <p className="mt-3 text-xs text-gray-500">
            Loading booking...
          </p>
        </div>
      </main>
    );
  }

  if (!booking) {
    return null;
  }

  const platformFee = 0;
  const total = booking.poojaPrice + platformFee;

  const formatDate = (date: string) => {
    if (!date) return "Not selected";

    const parsed = new Date(`${date}T00:00:00`);

    return parsed.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleEdit = () => {
    router.push("/pooja/offline/book");
  };

  const handleConfirm = () => {
    router.push("/pooja/offline/book/payment");
  };

  return (
    <main className="min-h-screen bg-[#03070b] pb-28 text-white">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden">
        {/* HEADER */}

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111d]/95 backdrop-blur-xl">
          <div className="flex h-16 items-center gap-3 px-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
            >
              <ArrowLeft size={19} />
            </button>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold">
                Booking Summary
              </p>

              <p className="text-[10px] text-gray-500">
                Review your offline pooja booking
              </p>
            </div>

            <ShieldCheck
              size={20}
              className="text-yellow-400"
            />
          </div>
        </header>

        <div className="px-4">
          {/* PROGRESS */}

          <section className="pt-5">
            <div className="rounded-2xl border border-yellow-500/10 bg-[#0b1118] p-4">
              <div className="flex items-center justify-between">
                <Step
                  number="01"
                  text="Pooja"
                  done
                />

                <Line />

                <Step
                  number="02"
                  text="Temple"
                  done
                />

                <Line />

                <Step
                  number="03"
                  text="Summary"
                  active
                />

                <Line />

                <Step
                  number="04"
                  text="Payment"
                />
              </div>
            </div>
          </section>

          {/* INTRO */}

          <section className="pt-5">
            <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-br from-[#10243a] to-[#09121d] p-4">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <h2 className="text-sm font-bold">
                    Almost there!
                  </h2>

                  <p className="mt-1 text-[10px] leading-4 text-gray-500">
                    Please review your booking details
                    before proceeding to payment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* POOJA DETAILS */}

          <section className="pt-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1118]">
              <div className="border-b border-white/10 px-4 py-3">
                <h2 className="text-sm font-bold">
                  Pooja Details
                </h2>
              </div>

              <InfoRow
                icon={<CheckCircle2 size={16} />}
                label="Pooja"
                value={booking.poojaName}
              />

              <InfoRow
                icon={<MapPin size={16} />}
                label="Temple"
                value={`${booking.templeName}, ${booking.templeCity}`}
              />

              <InfoRow
                icon={<CalendarDays size={16} />}
                label="Date"
                value={formatDate(booking.date)}
              />

              <InfoRow
                icon={<Clock3 size={16} />}
                label="Time"
                value={booking.time || "Not selected"}
                last
              />
            </div>
          </section>

          {/* DEVOTEE DETAILS */}

          <section className="pt-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1118]">
              <div className="border-b border-white/10 px-4 py-3">
                <h2 className="text-sm font-bold">
                  Devotee Details
                </h2>
              </div>

              <InfoRow
                icon={<User size={16} />}
                label="Name"
                value={
                  booking.customerName || "Not provided"
                }
              />

              <InfoRow
                icon={<Phone size={16} />}
                label="Mobile"
                value={
                  booking.mobile || "Not provided"
                }
                last
              />
            </div>
          </section>

          {/* LOCATION */}

          <section className="pt-4">
            <div className="rounded-2xl border border-white/10 bg-[#0b1118] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] text-gray-500">
                    Pooja Location
                  </p>

                  <p className="mt-1 text-xs font-bold">
                    {booking.locationType === "home"
                      ? "Home Visit"
                      : "At Temple"}
                  </p>
                </div>

                <MapPin
                  size={18}
                  className="text-yellow-400"
                />
              </div>

              {booking.locationType === "home" &&
                booking.address && (
                  <div className="mt-3 border-t border-white/10 pt-3">
                    <p className="text-[9px] text-gray-500">
                      Address
                    </p>

                    <p className="mt-1 text-xs text-gray-300">
                      {booking.address}
                    </p>

                    <p className="mt-1 text-[10px] text-gray-500">
                      {booking.city}{" "}
                      {booking.pincode
                        ? `• ${booking.pincode}`
                        : ""}
                    </p>
                  </div>
                )}
            </div>
          </section>

          {/* PAYMENT SUMMARY */}

          <section className="pt-4">
            <div className="overflow-hidden rounded-2xl border border-yellow-500/10 bg-[#0b1118]">
              <div className="border-b border-white/10 px-4 py-3">
                <h2 className="text-sm font-bold">
                  Payment Summary
                </h2>
              </div>

              <div className="space-y-3 p-4">
                <PriceRow
                  label="Pooja Charges"
                  amount={booking.poojaPrice}
                />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Platform Fee
                  </span>

                  <span className="text-xs font-bold text-green-400">
                    FREE
                  </span>
                </div>

                <div className="border-t border-dashed border-white/10" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">
                    Total Amount
                  </span>

                  <span className="flex items-center text-xl font-extrabold text-yellow-400">
                    <IndianRupee size={17} />

                    {total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* TRUST */}

          <section className="pt-4">
            <div className="flex gap-3 rounded-2xl border border-green-500/10 bg-green-500/5 p-4">
              <ShieldCheck
                size={19}
                className="shrink-0 text-green-400"
              />

              <div>
                <p className="text-xs font-semibold text-green-400">
                  Verified Offline Service
                </p>

                <p className="mt-1 text-[9px] leading-4 text-gray-500">
                  OurHub coordinates with verified pandits
                  and selected temples for your pooja.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* BOTTOM CTA */}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#07111d]/95 px-3 py-3 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[430px] items-center gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-[8px] text-gray-500">
              Total Payable
            </p>

            <p className="mt-0.5 flex items-center text-base font-extrabold text-yellow-400">
              <IndianRupee size={14} />

              {total.toLocaleString("en-IN")}
            </p>
          </div>

          <button
            type="button"
            onClick={handleEdit}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 active:scale-95"
            aria-label="Edit booking"
          >
            <Pencil size={15} />
          </button>

          <button
            type="button"
            onClick={handleConfirm}
            className="flex h-11 min-w-0 flex-[1.5] items-center justify-center gap-1 rounded-xl bg-yellow-400 px-3 text-xs font-extrabold text-black shadow-lg shadow-yellow-500/10 active:scale-[0.98]"
          >
            Confirm & Pay
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Step({
  number,
  text,
  done = false,
  active = false,
}: {
  number: string;
  text: string;
  done?: boolean;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={[
          "flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold",
          done
            ? "bg-yellow-400 text-black"
            : active
              ? "bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400"
              : "bg-[#162335] text-gray-500",
        ].join(" ")}
      >
        {done ? "✓" : number}
      </div>

      <span
        className={[
          "mt-1 text-[8px] font-medium",
          done || active
            ? "text-yellow-400"
            : "text-gray-500",
        ].join(" ")}
      >
        {text}
      </span>
    </div>
  );
}

function Line() {
  return (
    <div className="mx-1 h-px w-4 bg-white/10 sm:w-7" />
  );
}

function InfoRow({
  icon,
  label,
  value,
  last = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={[
        "flex gap-3 px-4 py-3",
        !last ? "border-b border-white/5" : "",
      ].join(" ")}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[9px] text-gray-500">
          {label}
        </p>

        <p className="mt-0.5 break-words text-xs font-semibold text-gray-200">
          {value}
        </p>
      </div>
    </div>
  );
}

function PriceRow({
  label,
  amount,
}: {
  label: string;
  amount: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500">
        {label}
      </span>

      <span className="flex items-center text-xs font-semibold text-gray-200">
        <IndianRupee size={12} />

        {amount.toLocaleString("en-IN")}
      </span>
    </div>
  );
}