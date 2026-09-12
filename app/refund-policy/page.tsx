"use client";

import PageLayout from "@/components/PageLayout";
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Mail,
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
    title: "24+ Hours Before Service",
    label: "FULL REFUND",
    description:
      "Eligible customers may receive a full refund of the amount paid.",
    type: "positive",
  },
  {
    icon: Clock3,
    title: "Less Than 24 Hours",
    label: "CONDITIONAL",
    description:
      "A cancellation charge may apply depending on the service and booking conditions.",
    type: "warning",
  },
  {
    icon: XCircle,
    title: "After Scheduled Time",
    label: "MAY NOT REFUND",
    description:
      "Refunds may not be available when the customer is unavailable without prior notice.",
    type: "negative",
  },
];

const nonRefundable = [
  "Incorrect or incomplete booking details prevent successful service delivery.",
  "Customer is unavailable at the confirmed service time or location without prior notice.",
  "Cancellation is made less than 24 hours before the scheduled service and applicable conditions do not allow a full refund.",
  "The service has already been successfully completed.",
  "The applicable service-specific terms exclude a refund.",
];

export default function RefundPolicyPage() {
  return (
    <PageLayout title="Refund & Cancellation Policy">
      <div className="relative overflow-hidden pb-8">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 top-[600px] h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Hero */}
        <section className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#121D2B] via-[#0C1724] to-[#070D15] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFAE45]/30 bg-[#DFAE45]/10">
              <RefreshCcw
                size={27}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/15 bg-[#DFAE45]/[0.05] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DFAE45]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E7B94F]">
                Clear & Transparent
              </span>
            </div>

            <h1 className="mt-4 text-[29px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white">
              Refunds made{" "}
              <span className="text-[#DFAE45]">simple.</span>
            </h1>

            <p className="mt-4 text-[13px] leading-7 text-gray-400">
              Our refund and cancellation policy explains when you can cancel
              a booking, how refund eligibility is determined, and how
              approved refunds are processed.
            </p>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <CalendarClock
                  size={17}
                  className="mx-auto text-[#DFAE45]"
                />
                <p className="mt-2 text-[9px] font-bold text-gray-400">
                  24H Rule
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <WalletCards
                  size={17}
                  className="mx-auto text-[#DFAE45]"
                />
                <p className="mt-2 text-[9px] font-bold text-gray-400">
                  Secure Refunds
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
          <div className="rounded-[24px] border border-white/[0.07] bg-[#0C1623] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <FileCheck2
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#DFAE45]">
                  Our Policy
                </p>

                <h2 className="mt-0.5 text-[17px] font-bold text-white">
                  Customer-first cancellation
                </h2>
              </div>
            </div>

            <p className="mt-4 text-[12px] leading-6 text-gray-400">
              At{" "}
              <span className="font-semibold text-white">
                OurHub Services
              </span>
              , customer satisfaction and transparent service policies are our
              priorities. This policy explains the conditions under which
              customers may cancel a booking and receive a refund.
            </p>
          </div>
        </section>

        {/* Cancellation Rules */}
        <section className="relative mt-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Cancellation
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              When can you cancel?
            </h2>
          </div>

          <div className="space-y-3">
            {cancellationRules.map((rule) => {
              const Icon = rule.icon;

              const iconClass =
                rule.type === "positive"
                  ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/10"
                  : rule.type === "warning"
                    ? "text-[#DFAE45] bg-[#DFAE45]/10 border-[#DFAE45]/15"
                    : "text-red-400 bg-red-400/10 border-red-400/10";

              const labelClass =
                rule.type === "positive"
                  ? "text-emerald-400"
                  : rule.type === "warning"
                    ? "text-[#DFAE45]"
                    : "text-red-400";

              return (
                <div
                  key={rule.title}
                  className="rounded-[22px] border border-white/[0.07] bg-[#0C1623] p-4"
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${iconClass}`}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-[13px] font-bold text-white">
                          {rule.title}
                        </h3>

                        <span
                          className={`text-[8px] font-extrabold tracking-[0.12em] ${labelClass}`}
                        >
                          {rule.label}
                        </span>
                      </div>

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
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                  Provider Cancellation
                </p>

                <h2 className="mt-1 text-[18px] font-bold text-white">
                  If your provider cancels
                </h2>

                <p className="mt-3 text-[12px] leading-6 text-gray-400">
                  If a service provider cancels a confirmed booking and the
                  service cannot be rescheduled or a suitable replacement is
                  unavailable, the customer will be eligible for a full refund
                  of the amount paid for that booking.
                </p>

                <p className="mt-3 text-[12px] leading-6 text-gray-400">
                  Where possible, OurHub Services may offer an alternative
                  service provider or a rescheduled appointment instead of a
                  refund, subject to the customer's agreement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Unavailable */}
        <section className="mt-6">
          <div className="rounded-[22px] border border-white/[0.07] bg-[#0C1623] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <AlertCircle
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <h2 className="text-[17px] font-bold text-white">
                Service Unavailable
              </h2>
            </div>

            <p className="mt-4 text-[12px] leading-6 text-gray-500">
              If a booked service cannot be delivered due to circumstances
              attributable to OurHub Services or the assigned service provider,
              the customer may be offered a rescheduled service, replacement
              provider, or a full refund where the service cannot be fulfilled.
            </p>
          </div>
        </section>

        {/* Incorrect Payment */}
        <section className="mt-6">
          <div className="rounded-[22px] border border-white/[0.07] bg-[#0C1623] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <WalletCards
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <h2 className="text-[17px] font-bold text-white">
                Incorrect or Duplicate Payment
              </h2>
            </div>

            <p className="mt-4 text-[12px] leading-6 text-gray-500">
              If a customer is charged incorrectly or a duplicate payment is
              successfully processed due to a technical or payment processing
              issue, the excess or incorrect amount will be reviewed and, where
              verified, refunded to the original payment method.
            </p>
          </div>
        </section>

        {/* Non Refundable */}
        <section className="mt-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-400">
              Important
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              Non-Refundable Situations
            </h2>
          </div>

          <div className="rounded-[24px] border border-red-400/10 bg-red-400/[0.025] p-5">
            <div className="space-y-4">
              {nonRefundable.map((item, index) => (
                <div key={item} className="flex gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-400/10 text-[9px] font-bold text-red-400">
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

        {/* Refund Eligibility */}
        <section className="mt-8">
          <div className="rounded-[24px] border border-white/[0.07] bg-gradient-to-br from-[#0E1927] to-[#09121D] p-5">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <BadgeCheck
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#DFAE45]">
                  Refund Eligibility
                </p>

                <h2 className="mt-1 text-[18px] font-bold text-white">
                  Every request is reviewed
                </h2>

                <p className="mt-3 text-[12px] leading-6 text-gray-500">
                  Refund eligibility is determined based on booking details,
                  cancellation time, service status, reason for cancellation,
                  and applicable service terms.
                </p>

                <p className="mt-3 text-[12px] leading-6 text-gray-500">
                  If a service has specific cancellation or refund conditions,
                  those conditions will be displayed before or during the
                  booking process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Process */}
        <section className="mt-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              How It Works
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              Refund Process
            </h2>
          </div>

          <div className="relative space-y-3">
            <div className="absolute bottom-8 left-[20px] top-8 w-px bg-[#DFAE45]/15" />

            {[
              {
                step: "01",
                title: "Contact Support",
                text: "Share your booking details and payment information with our support team.",
              },
              {
                step: "02",
                title: "Request Review",
                text: "Our team reviews the booking, cancellation time and applicable conditions.",
              },
              {
                step: "03",
                title: "Refund Initiated",
                text: "Once approved, the eligible refund is initiated to the original payment method.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative flex gap-4 rounded-[20px] border border-white/[0.07] bg-[#0C1623] p-4"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#101B28] text-[10px] font-extrabold text-[#DFAE45]">
                  {item.step}
                </div>

                <div>
                  <h3 className="text-[13px] font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-8">
          <div className="rounded-[24px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151D27] to-[#0B131D] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <Clock3
                size={23}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Refund Timeline
            </p>

            <h2 className="mt-1 text-[22px] font-extrabold text-white">
              5–10 Business Days
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-gray-500">
              Approved refunds are generally initiated within 5–10 business
              days. The actual time taken for the amount to reflect in the
              customer's account may vary depending on the payment gateway,
              bank, card issuer, or other financial institution.
            </p>
          </div>
        </section>

        {/* Important Note */}
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
                  Customers are advised to review the service details,
                  scheduled date and time, service location, and applicable
                  cancellation conditions before making a payment.
                </p>

                <p className="mt-2 text-[11px] leading-5 text-gray-500">
                  Service-specific terms, where applicable, will take
                  precedence over general refund conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="mt-8">
          <div className="overflow-hidden rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#121C29] to-[#090F17] p-6 text-center">
            <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <ShieldCheck
                size={24}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Need Help?
            </p>

            <h2 className="mt-1 text-[21px] font-extrabold text-white">
              We're here to help
            </h2>

            <p className="mx-auto mt-3 max-w-[310px] text-[11px] leading-5 text-gray-500">
              If you believe you are eligible for a refund or have questions
              regarding cancellation, contact our support team with your
              booking details.
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

            <div className="mt-5 flex items-center justify-center gap-2 text-[9px] font-medium text-gray-600">
              <span>support@ourhubservices.com</span>
              <ArrowRight size={10} />
              <span>+91 8878632431</span>
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
          </div>
        </section>

        <div className="h-4" />
      </div>
    </PageLayout>
  );
}