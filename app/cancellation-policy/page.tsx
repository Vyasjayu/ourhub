"use client";

import PageLayout from "@/components/PageLayout";
import {
  AlertCircle,
  ArrowRight,
  Ban,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  RefreshCcw,
  ShieldCheck,
  UserRoundX,
  WalletCards,
  XCircle,
} from "lucide-react";

const cancellationRules = [
  {
    icon: CheckCircle2,
    time: "24+ HOURS",
    title: "24 hours or more before service",
    badge: "FULL REFUND",
    description:
      "Customers may cancel the booking and may be eligible for a full refund, subject to the applicable service terms.",
    type: "success",
  },
  {
    icon: Clock3,
    time: "LESS THAN 24H",
    title: "Less than 24 hours before service",
    badge: "CONDITIONAL",
    description:
      "The booking may be cancelled, but an applicable cancellation charge may be deducted from the refundable amount.",
    type: "warning",
  },
  {
    icon: XCircle,
    time: "AFTER SERVICE TIME",
    title: "After the scheduled service time",
    badge: "MAY NOT REFUND",
    description:
      "Cancellation requests may not be eligible for a refund if the customer is unavailable or the provider has already arrived or started the service.",
    type: "danger",
  },
];

const exceptions = [
  "Natural disasters or emergency situations.",
  "Technical issues affecting booking confirmation or payment.",
  "Situations where the service cannot be provided by the assigned provider.",
  "Other circumstances that prevent the service from being reasonably delivered.",
];

export default function CancellationPolicyPage() {
  return (
    <PageLayout title="Cancellation Policy">
      <div className="relative overflow-hidden pb-8">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-[#DFAE45]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-[720px] h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Hero */}
        <section className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#121D2B] via-[#0C1724] to-[#070D15] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFAE45]/30 bg-[#DFAE45]/10">
                <CalendarClock
                  size={27}
                  strokeWidth={1.7}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-1.5">
                <ShieldCheck size={12} className="text-emerald-400" />

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-400">
                  Customer First
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                Booking Policy
              </p>

              <h1 className="mt-2 text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
                Plans change.
                <br />
                <span className="text-[#DFAE45]">
                  We understand.
                </span>
              </h1>

              <p className="mt-4 text-[12px] leading-6 text-gray-400">
                Our Cancellation Policy explains when you can cancel a
                booking, when cancellation charges may apply, and how eligible
                refunds are handled.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <CalendarClock
                  size={17}
                  className="mx-auto text-[#DFAE45]"
                />
                <p className="mt-2 text-[9px] font-bold text-gray-400">
                  24H Window
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <WalletCards
                  size={17}
                  className="mx-auto text-[#DFAE45]"
                />
                <p className="mt-2 text-[9px] font-bold text-gray-400">
                  Refund Rules
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <ShieldCheck
                  size={17}
                  className="mx-auto text-[#DFAE45]"
                />
                <p className="mt-2 text-[9px] font-bold text-gray-400">
                  Transparent
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="relative mt-8">
          <div className="rounded-[24px] border border-[#DFAE45]/15 bg-[#0C1623] p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <FileCheck2
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#DFAE45]">
                  Our Policy
                </p>

                <h2 className="mt-1 text-[18px] font-bold text-white">
                  Cancellation made clear
                </h2>
              </div>
            </div>

            <p className="mt-4 text-[12px] leading-6 text-gray-400">
              At{" "}
              <span className="font-bold text-white">
                OurHub Services
              </span>
              , we understand that plans may change. This Cancellation Policy
              explains the rules and conditions for cancelling service bookings
              made through our platform.
            </p>
          </div>
        </section>

        {/* Main Cancellation Timeline */}
        <section className="mt-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Cancellation Window
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              When can you cancel?
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-gray-600">
              Your cancellation timing can affect refund eligibility.
            </p>
          </div>

          <div className="space-y-3">
            {cancellationRules.map((rule) => {
              const Icon = rule.icon;

              const styles =
                rule.type === "success"
                  ? {
                      wrapper:
                        "border-emerald-400/15 bg-emerald-400/[0.035]",
                      icon: "border-emerald-400/10 bg-emerald-400/10 text-emerald-400",
                      badge: "text-emerald-400 bg-emerald-400/10",
                    }
                  : rule.type === "warning"
                    ? {
                        wrapper:
                          "border-[#DFAE45]/20 bg-[#DFAE45]/[0.035]",
                        icon:
                          "border-[#DFAE45]/15 bg-[#DFAE45]/10 text-[#DFAE45]",
                        badge: "text-[#DFAE45] bg-[#DFAE45]/10",
                      }
                    : {
                        wrapper: "border-red-400/10 bg-red-400/[0.025]",
                        icon:
                          "border-red-400/10 bg-red-400/10 text-red-400",
                        badge: "text-red-400 bg-red-400/10",
                      };

              return (
                <div
                  key={rule.title}
                  className={`rounded-[23px] border p-4 ${styles.wrapper}`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${styles.icon}`}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[8px] font-extrabold tracking-[0.14em] text-gray-600">
                          {rule.time}
                        </span>

                        <span
                          className={`rounded-full px-2 py-1 text-[8px] font-extrabold tracking-[0.1em] ${styles.badge}`}
                        >
                          {rule.badge}
                        </span>
                      </div>

                      <h3 className="mt-2 text-[13px] font-bold text-white">
                        {rule.title}
                      </h3>

                      <p className="mt-2 text-[11px] leading-5 text-gray-500">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 24 Hour Highlight */}
        <section className="mt-8">
          <div className="overflow-hidden rounded-[25px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151E29] to-[#0A121C] p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Clock3
                  size={25}
                  strokeWidth={1.7}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#DFAE45]">
                  Remember
                </p>

                <h2 className="mt-1 text-[20px] font-extrabold text-white">
                  24 hours matters
                </h2>

                <p className="mt-1 text-[10px] text-gray-600">
                  Earlier cancellation generally gives better refund
                  eligibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To Cancel */}
        <section className="mt-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Simple Process
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              How to cancel a booking
            </h2>
          </div>

          <div className="relative space-y-3">
            <div className="absolute bottom-9 left-[20px] top-9 w-px bg-[#DFAE45]/15" />

            {[
              {
                number: "01",
                title: "Contact Support",
                text: "Contact OurHub Services support as soon as possible with your booking details.",
              },
              {
                number: "02",
                title: "Booking Review",
                text: "We review the booking date, scheduled time, service status and applicable conditions.",
              },
              {
                number: "03",
                title: "Cancellation Confirmed",
                text: "Once reviewed, the cancellation status and applicable refund or charge will be communicated.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative flex gap-4 rounded-[21px] border border-white/[0.07] bg-[#0C1623] p-4"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#101B28] text-[10px] font-extrabold text-[#DFAE45]">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-[13px] font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-gray-500">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Provider Cancellation */}
        <section className="mt-8">
          <div className="rounded-[24px] border border-emerald-400/10 bg-emerald-400/[0.035] p-5">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10">
                <UserRoundX
                  size={20}
                  strokeWidth={1.8}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-400">
                  Provider Cancellation
                </p>

                <h2 className="mt-1 text-[18px] font-bold text-white">
                  If your provider cancels
                </h2>

                <p className="mt-3 text-[11px] leading-5 text-gray-500">
                  If a service provider is unable to fulfil a confirmed
                  booking due to unforeseen circumstances, OurHub Services
                  will make reasonable efforts to arrange another verified
                  provider or reschedule the service.
                </p>

                <p className="mt-3 text-[11px] leading-5 text-gray-500">
                  If a suitable replacement or rescheduled service is not
                  available, the customer may be eligible for a full refund in
                  accordance with our Refund Policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation Charges */}
        <section className="mt-6">
          <div className="rounded-[23px] border border-white/[0.07] bg-[#0C1623] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <WalletCards
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#DFAE45]">
                  Charges
                </p>

                <h2 className="mt-0.5 text-[17px] font-bold text-white">
                  Cancellation Charges
                </h2>
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-5 text-gray-500">
              Cancellation charges may apply when a customer cancels a booking
              less than 24 hours before the scheduled service time. The
              applicable charge may vary depending on the type of service,
              booking conditions, and service requirements.
            </p>

            <div className="mt-4 rounded-2xl border border-[#DFAE45]/10 bg-[#DFAE45]/[0.04] p-4">
              <div className="flex gap-3">
                <AlertCircle
                  size={17}
                  className="mt-0.5 shrink-0 text-[#DFAE45]"
                />

                <p className="text-[10px] leading-5 text-gray-500">
                  Any applicable cancellation charge will be communicated to
                  the customer during the cancellation process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* No Show */}
        <section className="mt-6">
          <div className="rounded-[23px] border border-red-400/10 bg-red-400/[0.025] p-5">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-400/10">
                <MapPin
                  size={20}
                  strokeWidth={1.8}
                  className="text-red-400"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-400">
                  Customer No-Show
                </p>

                <h2 className="mt-1 text-[18px] font-bold text-white">
                  Please be available
                </h2>

                <p className="mt-3 text-[11px] leading-5 text-gray-500">
                  If the customer is unavailable at the confirmed service
                  location or fails to attend an agreed appointment without
                  prior notice, the booking may be treated as a no-show.
                </p>

                <p className="mt-3 text-[11px] leading-5 text-gray-500">
                  In such cases, the customer may not be eligible for a refund.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exceptions */}
        <section className="mt-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Special Circumstances
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              Exceptions
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-gray-600">
              Certain situations may be reviewed on a case-by-case basis.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/[0.07] bg-[#0C1623] p-5">
            <div className="space-y-4">
              {exceptions.map((item, index) => (
                <div key={item} className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#DFAE45]/15 bg-[#DFAE45]/[0.06] text-[9px] font-extrabold text-[#DFAE45]">
                    {index + 1}
                  </div>

                  <p className="text-[11px] leading-5 text-gray-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Refund Connection */}
        <section className="mt-8">
          <div className="rounded-[25px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151D27] to-[#0A1119] p-5">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <RefreshCcw
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#DFAE45]">
                  Refund After Cancellation
                </p>

                <h2 className="mt-1 text-[18px] font-bold text-white">
                  What happens after cancellation?
                </h2>

                <p className="mt-3 text-[11px] leading-5 text-gray-500">
                  Where a cancellation qualifies for a refund, the eligible
                  amount will be processed in accordance with the{" "}
                  <span className="font-semibold text-white">
                    OurHub Services Refund Policy
                  </span>
                  .
                </p>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#DFAE45]/10 bg-[#DFAE45]/[0.04] p-4">
                  <Clock3
                    size={18}
                    className="shrink-0 text-[#DFAE45]"
                  />

                  <p className="text-[10px] leading-5 text-gray-500">
                    Approved refunds are generally initiated to the original
                    payment method within{" "}
                    <span className="font-bold text-[#E7B94F]">
                      5–10 business days
                    </span>
                    , subject to payment gateway and bank processing times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important */}
        <section className="mt-8">
          <div className="rounded-[24px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.04] p-5">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <AlertCircle
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h2 className="text-[16px] font-bold text-white">
                  Important
                </h2>

                <p className="mt-2 text-[11px] leading-5 text-gray-500">
                  Customers should review the service details, scheduled date
                  and time, and applicable cancellation conditions before
                  making a payment.
                </p>

                <p className="mt-2 text-[11px] leading-5 text-gray-500">
                  If a particular service has different cancellation terms,
                  those terms will be displayed to the customer before or
                  during the booking process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="mt-8">
          <div className="overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#121C29] to-[#080F17] p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <HelpCircle
                size={24}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Need Assistance?
            </p>

            <h2 className="mt-1 text-[22px] font-extrabold text-white">
              We&apos;re here to help
            </h2>

            <p className="mx-auto mt-3 max-w-[305px] text-[11px] leading-5 text-gray-500">
              Need to cancel a booking or have questions about the
              cancellation process? Contact our support team with your booking
              details.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="mailto:support@ourhubservices.com"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3.5 text-[10px] font-bold text-white transition active:scale-[0.97]"
              >
                <Mail size={15} className="text-[#DFAE45]" />
                Email Support
              </a>

              <a
                href="tel:+918878632431"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-3 py-3.5 text-[10px] font-extrabold text-black shadow-[0_12px_35px_rgba(223,174,69,0.14)] transition active:scale-[0.97]"
              >
                <Phone size={15} />
                Call Support
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[9px] font-medium text-gray-600">
              <span>support@ourhubservices.com</span>
              <ArrowRight size={10} />
              <span>+91 8878632431</span>
            </div>
          </div>
        </section>

        {/* Policy Navigation */}
        <section className="mt-6">
          <div className="rounded-[23px] border border-white/[0.06] bg-[#0A111A] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <FileCheck2
                  size={17}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[12px] font-bold text-white">
                  Related Policies
                </p>

                <p className="mt-0.5 text-[9px] text-gray-600">
                  Review other OurHub policies before booking.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href="/terms"
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3 text-[10px] font-bold text-gray-400 transition hover:border-[#DFAE45]/20 hover:text-white"
              >
                Terms & Conditions
                <ArrowRight
                  size={13}
                  className="text-[#DFAE45]"
                />
              </a>

              <a
                href="/refund"
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3 text-[10px] font-bold text-gray-400 transition hover:border-[#DFAE45]/20 hover:text-white"
              >
                Refund Policy
                <ArrowRight
                  size={13}
                  className="text-[#DFAE45]"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Brand Footer */}
        <section className="mt-7">
          <div className="rounded-[24px] border border-white/[0.06] bg-[#0A111A] p-5 text-center">
            <p className="text-[13px] font-extrabold text-white">
              OurHub Services
            </p>

            <p className="mt-1 text-[9px] font-bold tracking-[0.2em] text-gray-600">
              ALL SERVICES. ONE HUB.
            </p>

            <div className="mx-auto mt-4 h-px w-12 bg-[#DFAE45]/30" />

            <p className="mt-3 text-[9px] text-gray-700">
              Cancellation Policy • OurHub Services
            </p>
          </div>
        </section>

        <div className="h-4" />
      </div>
    </PageLayout>
  );
}