
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Home,
  IndianRupee,
  Landmark,
  MapPin,
  Pencil,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
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

  const [booking, setBooking] = useState<Booking | null>(
    null
  );

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
      console.error(
        "Failed to load booking:",
        error
      );

      router.replace("/pooja/offline/book");
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#02060A] text-white">
        <div className="text-center">
          <div className="relative mx-auto h-11 w-11">
            <div className="absolute inset-0 animate-ping rounded-full bg-[#DFAE45]/10" />

            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#DFAE45]/25 bg-[#0B141F]">
              <Sparkles
                size={18}
                className="text-[#E7B94F]"
              />
            </div>
          </div>

          <p className="mt-4 text-[10px] font-medium text-gray-500">
            Preparing your booking...
          </p>
        </div>
      </main>
    );
  }

  if (!booking) {
    return null;
  }

  const platformFee = 0;
  const total =
    Number(booking.poojaPrice || 0) +
    platformFee;

  const formatDate = (date: string) => {
    if (!date) return "Not selected";

    const parsed = new Date(
      `${date}T00:00:00`
    );

    return parsed.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleEdit = () => {
    router.push("/pooja/offline/book");
  };

  const handleConfirm = () => {
    router.push(
      "/pooja/offline/book/payment"
    );
  };

  return (
    <main className="min-h-screen bg-[#02060A] text-white">
      <div className="relative mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden pb-36">

        {/* ================================================= */}
        {/* AMBIENT BACKGROUND */}
        {/* ================================================= */}

        <div className="pointer-events-none fixed inset-0 mx-auto max-w-[480px] overflow-hidden">
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#DFAE45]/7 blur-[100px]" />

          <div className="absolute -right-24 top-[450px] h-72 w-72 rounded-full bg-[#24577E]/7 blur-[110px]" />

          <div className="absolute bottom-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-[#DFAE45]/5 blur-[100px]" />
        </div>

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050B11]/90 backdrop-blur-2xl">
          <div className="flex h-[68px] items-center gap-3 px-4">

            <button
              type="button"
              onClick={() => router.back()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-white/[0.08] bg-white/[0.035] transition active:scale-95"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <Sparkles
                  size={10}
                  className="text-[#E7B94F]"
                />

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#E7B94F]">
                  OURHUB
                </p>
              </div>

              <h1 className="mt-0.5 text-[15px] font-bold">
                Booking Summary
              </h1>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[#DFAE45]/15 bg-[#DFAE45]/5">
              <ShieldCheck
                size={19}
                className="text-[#E7B94F]"
              />
            </div>
          </div>
        </header>

        <div className="relative z-10 px-4">

          {/* ================================================= */}
          {/* PROGRESS */}
          {/* ================================================= */}

          <section className="pt-5">
            <div className="rounded-[25px] border border-[#DFAE45]/15 bg-[#08111A] p-4">

              <div className="mb-3 flex items-center justify-between">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-gray-600">
                  Booking Journey
                </p>

                <span className="rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/7 px-2 py-1 text-[7px] font-bold text-[#E7B94F]">
                  STEP 3 OF 4
                </span>
              </div>

              <div className="flex items-center">
                <SummaryStep
                  number="01"
                  text="Pooja"
                  done
                />

                <SummaryLine active />

                <SummaryStep
                  number="02"
                  text="Temple"
                  done
                />

                <SummaryLine active />

                <SummaryStep
                  number="03"
                  text="Summary"
                  active
                />

                <SummaryLine />

                <SummaryStep
                  number="04"
                  text="Payment"
                />
              </div>
            </div>
          </section>

          {/* ================================================= */}
          {/* READY CARD */}
          {/* ================================================= */}

          <section className="pt-5">
            <div className="relative overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#14283B] via-[#0B1724] to-[#070D14] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">

              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl" />

              <div className="relative flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#E7B94F] text-black shadow-lg shadow-[#DFAE45]/10">
                  <CheckCircle2
                    size={22}
                    strokeWidth={2.2}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#E7B94F]">
                    Details Ready
                  </p>

                  <h2 className="mt-1 text-[15px] font-bold">
                    Your booking is almost complete
                  </h2>

                  <p className="mt-1 text-[9px] leading-4 text-gray-500">
                    Review everything once before making
                    your secure payment.
                  </p>
                </div>
              </div>

              <div className="relative mt-4 flex items-center gap-2 border-t border-white/[0.07] pt-3">
                <ShieldCheck
                  size={13}
                  className="text-green-400"
                />

                <span className="text-[8px] text-gray-400">
                  Verified service • Transparent pricing
                </span>
              </div>
            </div>
          </section>

          {/* ================================================= */}
          {/* SELECTED POOJA HERO */}
          {/* ================================================= */}

          <section className="pt-6">
            <SectionHeading
              eyebrow="Your Sacred Ritual"
              title="Pooja Details"
              icon={<Sparkles size={15} />}
            />

            <div className="relative mt-4 overflow-hidden rounded-[25px] border border-[#DFAE45]/20 bg-[#08111A]">

              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#DFAE45]/8 blur-3xl" />

              <div className="relative flex gap-3.5 p-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[17px] border border-[#DFAE45]/20 bg-[#DFAE45]/10 text-2xl">
                  🪔
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#E7B94F]">
                        Selected Pooja
                      </p>

                      <h3 className="mt-1 text-[14px] font-bold leading-5">
                        {booking.poojaName}
                      </h3>
                    </div>

                    <BadgeCheck
                      size={18}
                      className="shrink-0 text-[#E7B94F]"
                    />
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-full bg-white/[0.04] px-2 py-1 text-[7px] text-gray-500">
                      <Clock3 size={9} />
                      Sacred Ritual
                    </span>

                    <span className="flex items-center gap-1 rounded-full bg-green-400/[0.06] px-2 py-1 text-[7px] text-green-400">
                      <Check size={9} />
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative grid grid-cols-2 border-t border-white/[0.06]">
                <div className="border-r border-white/[0.06] px-4 py-3">
                  <p className="text-[7px] uppercase tracking-wider text-gray-600">
                    Pooja Charges
                  </p>

                  <p className="mt-1 flex items-center text-[14px] font-extrabold text-[#E7B94F]">
                    <IndianRupee size={13} />
                    {Number(
                      booking.poojaPrice || 0
                    ).toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="px-4 py-3">
                  <p className="text-[7px] uppercase tracking-wider text-gray-600">
                    Service
                  </p>

                  <p className="mt-1 text-[11px] font-bold text-white">
                    Offline Pooja
                  </p>
                </div>
              </div>

              <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E7B94F] to-transparent" />
            </div>
          </section>

          {/* ================================================= */}
          {/* TEMPLE + SCHEDULE */}
          {/* ================================================= */}

          <section className="pt-7">
            <SectionHeading
              eyebrow="Sacred Destination"
              title="Temple & Schedule"
              icon={<Landmark size={15} />}
            />

            <div className="mt-4 overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#08111A]">

              <InfoRow
                icon={<Landmark size={16} />}
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
                value={
                  booking.time ||
                  "Not selected"
                }
                last
              />
            </div>
          </section>

          {/* ================================================= */}
          {/* DEVOTEE */}
          {/* ================================================= */}

          <section className="pt-7">
            <SectionHeading
              eyebrow="Devotee Information"
              title="Your Details"
              icon={<User size={15} />}
            />

            <div className="mt-4 overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#08111A]">

              <InfoRow
                icon={<User size={16} />}
                label="Devotee Name"
                value={
                  booking.customerName ||
                  "Not provided"
                }
              />

              <InfoRow
                icon={<Phone size={16} />}
                label="Mobile Number"
                value={
                  booking.mobile ||
                  "Not provided"
                }
                last
              />
            </div>
          </section>

          {/* ================================================= */}
          {/* LOCATION */}
          {/* ================================================= */}

          <section className="pt-7">
            <SectionHeading
              eyebrow="Ritual Location"
              title="Where It Will Be Performed"
              icon={<MapPin size={15} />}
            />

            <div className="relative mt-4 overflow-hidden rounded-[24px] border border-[#DFAE45]/15 bg-[#08111A] p-4">

              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#DFAE45]/7 blur-3xl" />

              <div className="relative flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#DFAE45]/20 bg-[#DFAE45]/8">
                  {booking.locationType ===
                  "home" ? (
                    <Home
                      size={19}
                      className="text-[#E7B94F]"
                    />
                  ) : (
                    <Landmark
                      size={19}
                      className="text-[#E7B94F]"
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-600">
                    Selected Place
                  </p>

                  <h3 className="mt-1 text-[12px] font-bold">
                    {booking.locationType ===
                    "home"
                      ? "Home Visit"
                      : "At Temple"}
                  </h3>
                </div>

                <div className="ml-auto rounded-full border border-green-400/15 bg-green-400/7 px-2 py-1">
                  <span className="text-[7px] font-bold text-green-400">
                    CONFIRMED
                  </span>
                </div>
              </div>

              {booking.locationType ===
                "home" &&
                booking.address && (
                  <div className="relative mt-4 rounded-[17px] border border-white/[0.06] bg-[#050B11] p-3.5">
                    <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-gray-600">
                      Home Address
                    </p>

                    <p className="mt-1.5 text-[10px] leading-5 text-gray-300">
                      {booking.address}
                    </p>

                    <p className="mt-1 text-[8px] text-gray-500">
                      {booking.city}

                      {booking.pincode
                        ? ` • ${booking.pincode}`
                        : ""}
                    </p>
                  </div>
                )}
            </div>
          </section>

          {/* ================================================= */}
          {/* PAYMENT */}
          {/* ================================================= */}

          <section className="pt-7">
            <SectionHeading
              eyebrow="Transparent Pricing"
              title="Payment Summary"
              icon={<IndianRupee size={15} />}
            />

            <div className="relative mt-4 overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-b from-[#0B1723] to-[#071018]">

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/8 blur-3xl" />

              <div className="relative space-y-4 p-4">

                <PriceRow
                  label="Pooja Charges"
                  amount={Number(
                    booking.poojaPrice || 0
                  )}
                />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-400">
                      Platform Fee
                    </p>

                    <p className="mt-0.5 text-[7px] text-gray-600">
                      No extra booking charges
                    </p>
                  </div>

                  <span className="rounded-full bg-green-400/7 px-2.5 py-1 text-[8px] font-bold text-green-400">
                    FREE
                  </span>
                </div>

                <div className="border-t border-dashed border-white/[0.08]" />

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-gray-600">
                      Total Payable
                    </p>

                    <p className="mt-1 text-[9px] text-gray-500">
                      Inclusive of listed charges
                    </p>
                  </div>

                  <p className="flex items-center text-[22px] font-extrabold tracking-tight text-[#E7B94F]">
                    <IndianRupee size={17} />
                    {total.toLocaleString(
                      "en-IN"
                    )}
                  </p>
                </div>
              </div>

              <div className="relative border-t border-[#DFAE45]/10 bg-[#DFAE45]/[0.035] px-4 py-3">
                <div className="flex items-center gap-2">
                  <Check
                    size={12}
                    className="text-green-400"
                    strokeWidth={3}
                  />

                  <span className="text-[8px] text-gray-400">
                    No hidden charges
                  </span>

                  <span className="mx-1 h-1 w-1 rounded-full bg-gray-700" />

                  <span className="text-[8px] text-gray-400">
                    Secure payment
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================= */}
          {/* TRUST */}
          {/* ================================================= */}

          <section className="pt-6">
            <div className="relative overflow-hidden rounded-[24px] border border-green-500/10 bg-green-500/[0.035] p-4">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-green-400/15 bg-green-400/8">
                  <ShieldCheck
                    size={19}
                    className="text-green-400"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[11px] font-bold text-green-400">
                      Verified Offline Service
                    </p>

                    <BadgeCheck
                      size={13}
                      className="text-green-400"
                    />
                  </div>

                  <p className="mt-1.5 text-[8.5px] leading-4 text-gray-500">
                    OurHub coordinates with verified
                    pandits and selected temples to
                    provide a trusted pooja experience.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-green-400/10 pt-3">
                <TrustItem text="Verified Pandits" />
                <TrustItem text="Trusted Temples" />
                <TrustItem text="Secure Payment" />
              </div>
            </div>
          </section>

          {/* ================================================= */}
          {/* REVIEW NOTE */}
          {/* ================================================= */}

          <section className="pt-5 pb-8">
            <div className="flex items-center justify-center gap-2 text-center">
              <div className="h-px w-7 bg-white/[0.08]" />

              <p className="text-[7px] font-medium uppercase tracking-[0.16em] text-gray-600">
                Review • Confirm • Pay
              </p>

              <div className="h-px w-7 bg-white/[0.08]" />
            </div>
          </section>
        </div>

        {/* ================================================= */}
        {/* STICKY BOTTOM CTA */}
        {/* ================================================= */}

        <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-[480px] border-t border-white/[0.07] bg-[#04090E]/92 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-2xl">

          <div className="mb-2 flex items-center justify-center gap-1.5">
            <ShieldCheck
              size={10}
              className="text-green-400"
            />

            <span className="text-[7px] font-medium text-gray-500">
              Secure & trusted booking
            </span>
          </div>

          <div className="flex items-center gap-2.5">

            {/* Total */}
            <div className="min-w-0 flex-1">
              <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-gray-600">
                Total Payable
              </p>

              <p className="mt-0.5 flex items-center text-[17px] font-extrabold text-[#E7B94F]">
                <IndianRupee size={13} />
                {total.toLocaleString(
                  "en-IN"
                )}
              </p>
            </div>

            {/* Edit */}
            <button
              type="button"
              onClick={handleEdit}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-white/[0.08] bg-white/[0.035] text-gray-300 transition active:scale-95"
              aria-label="Edit booking"
            >
              <Pencil size={15} />
            </button>

            {/* Pay */}
            <button
              type="button"
              onClick={handleConfirm}
              className="group relative flex h-12 min-w-0 flex-[1.7] items-center justify-center gap-2 overflow-hidden rounded-[16px] bg-gradient-to-r from-[#DFAE45] via-[#F3C75F] to-[#DFAE45] px-4 text-[11px] font-extrabold text-black shadow-[0_12px_35px_rgba(223,174,69,0.14)] transition active:scale-[0.98]"
            >
              <span className="relative z-10">
                Confirm & Pay
              </span>

              <ArrowRight
                size={15}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />

              <div className="absolute inset-y-0 -left-20 w-20 skew-x-[-20deg] bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ================================================= */
/* SECTION HEADING */
/* ================================================= */

function SectionHeading({
  eyebrow,
  title,
  icon,
}: {
  eyebrow: string;
  title: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[11px] border border-[#DFAE45]/20 bg-[#DFAE45]/8 text-[#E7B94F]">
        {icon}
      </div>

      <div>
        <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#E7B94F]">
          {eyebrow}
        </p>

        <h2 className="mt-1 text-[16px] font-bold tracking-tight text-white">
          {title}
        </h2>
      </div>
    </div>
  );
}

/* ================================================= */
/* SUMMARY STEP */
/* ================================================= */

function SummaryStep({
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
    <div className="flex min-w-0 flex-1 flex-col items-center">
      <div
        className={[
          "flex h-8 w-8 items-center justify-center rounded-full border text-[8px] font-bold",
          done
            ? "border-[#E7B94F] bg-[#E7B94F] text-black"
            : active
              ? "border-[#E7B94F] bg-[#E7B94F]/10 text-[#E7B94F]"
              : "border-white/10 bg-[#111D29] text-gray-600",
        ].join(" ")}
      >
        {done ? (
          <Check size={13} strokeWidth={3} />
        ) : (
          number
        )}
      </div>

      <span
        className={[
          "mt-1.5 truncate text-[7px] font-medium",
          done || active
            ? "text-[#E7B94F]"
            : "text-gray-600",
        ].join(" ")}
      >
        {text}
      </span>
    </div>
  );
}

/* ================================================= */
/* PROGRESS LINE */
/* ================================================= */

function SummaryLine({
  active = false,
}: {
  active?: boolean;
}) {
  return (
    <div
      className={`mx-1 h-px flex-1 ${
        active
          ? "bg-[#DFAE45]/45"
          : "bg-white/[0.07]"
      }`}
    />
  );
}

/* ================================================= */
/* INFO ROW */
/* ================================================= */

function InfoRow({
  icon,
  label,
  value,
  last = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={[
        "flex gap-3 px-4 py-3.5",
        !last
          ? "border-b border-white/[0.055]"
          : "",
      ].join(" ")}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-[#DFAE45]/10 bg-[#DFAE45]/7 text-[#E7B94F]">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-gray-600">
          {label}
        </p>

        <p className="mt-1 break-words text-[10px] font-semibold leading-4 text-gray-200">
          {value}
        </p>
      </div>

      <CheckCircle2
        size={13}
        className="mt-1 shrink-0 text-green-400/70"
      />
    </div>
  );
}

/* ================================================= */
/* PRICE ROW */
/* ================================================= */

function PriceRow({
  label,
  amount,
}: {
  label: string;
  amount: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[10px] text-gray-400">
        {label}
      </span>

      <span className="flex items-center text-[11px] font-semibold text-gray-200">
        <IndianRupee size={11} />

        {amount.toLocaleString("en-IN")}
      </span>
    </div>
  );
}

/* ================================================= */
/* TRUST ITEM */
/* ================================================= */

function TrustItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-green-400/8">
        <Check
          size={9}
          className="text-green-400"
          strokeWidth={3}
        />
      </div>

      <p className="mt-1 text-[7px] leading-3 text-gray-500">
        {text}
      </p>
    </div>
  );
}

