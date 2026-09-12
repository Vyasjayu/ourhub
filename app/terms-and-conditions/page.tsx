"use client";

import PageLayout from "@/components/PageLayout";
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Ban,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Copyright,
  FileCheck2,
  Gavel,
  Globe2,
  Handshake,
  Info,
  Landmark,
  Mail,
  Phone,
  RefreshCcw,
  Scale,
  ScrollText,
  ShieldCheck,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";

const sections = [
  {
    number: "01",
    icon: CheckCircle2,
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing or using OurHub Services, you confirm that you have
          read, understood, and agreed to these Terms & Conditions, along
          with our Privacy Policy, Refund Policy, and Cancellation Policy.
        </p>

        <p className="mt-3">
          If you do not agree with any part of these terms, please do not use
          the website or book services through OurHub Services.
        </p>
      </>
    ),
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "About OurHub Services",
    content: (
      <>
        <p>
          OurHub Services provides an online service marketplace through which
          customers can explore and book available services.
        </p>

        <p className="mt-3">
          Depending on availability, services may include religious services,
          household services, professional services, digital services, events,
          and other service categories listed on the platform.
        </p>

        <p className="mt-3">
          OurHub Services facilitates the booking process and coordinates
          between customers and applicable service providers. Service
          availability, pricing, timing, and delivery may vary depending on
          the selected service and provider.
        </p>
      </>
    ),
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Customer Eligibility",
    content: (
      <ul className="space-y-3">
        {[
          "Customers must provide accurate and complete information when using the platform.",
          "Customers must have the legal capacity to enter into a service transaction.",
          "Customers must use the platform only for lawful purposes.",
          "Customers are responsible for maintaining the accuracy of their contact and booking information.",
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-[#DFAE45]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "04",
    icon: CalendarCheck2,
    title: "Service Booking",
    content: (
      <ul className="space-y-3">
        {[
          "Customers can select and request available services through the OurHub Services platform.",
          "Service bookings are subject to availability and confirmation.",
          "Customers must provide accurate name, contact, service location, date, time, and other information required for the selected service.",
          "A booking may not be considered confirmed until the applicable confirmation process has been completed.",
          "OurHub Services may contact the customer to verify booking details when necessary.",
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-[#DFAE45]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "05",
    icon: WalletCards,
    title: "Service Pricing",
    content: (
      <>
        <p>
          Service prices displayed on OurHub Services may vary depending on
          the type of service, location, provider, service requirements, and
          other applicable factors.
        </p>

        <p className="mt-3">
          The applicable amount payable by the customer will be communicated
          during the booking or payment process. Customers should review the
          applicable service details and charges before making a payment.
        </p>
      </>
    ),
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Payments",
    content: (
      <>
        <p>
          Payments for applicable services may be processed through secure
          third-party payment gateways supported by OurHub Services.
        </p>

        <ul className="mt-4 space-y-3">
          {[
            "Customers agree to pay the applicable amount for the selected service.",
            "Payment information may be processed by the applicable payment gateway according to its terms and policies.",
            "OurHub Services does not intentionally store complete card numbers, CVV numbers, or other sensitive payment credentials.",
            "A payment confirmation does not guarantee service delivery if the service subsequently becomes unavailable or cannot be fulfilled.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-[#DFAE45]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "07",
    icon: Handshake,
    title: "Service Delivery",
    content: (
      <>
        <p>
          Services will be delivered according to the selected booking
          details, including the applicable service date, time, location, and
          service requirements.
        </p>

        <p className="mt-3">
          Actual service availability and delivery may depend on provider
          availability, customer-provided information, location, circumstances
          at the service location, and other factors beyond reasonable
          control.
        </p>

        <p className="mt-3">
          If a confirmed service cannot be delivered, OurHub Services may
          attempt to arrange an alternative provider or reschedule the
          service. Where applicable, refunds will be handled according to our
          Refund Policy.
        </p>
      </>
    ),
  },
  {
    number: "08",
    icon: Users,
    title: "Service Provider Responsibility",
    content: (
      <ul className="space-y-3">
        {[
          "Service providers are expected to provide the booked service according to the agreed booking details.",
          "Providers are responsible for communicating relevant service requirements and availability.",
          "Providers should maintain professional and respectful conduct while interacting with customers.",
          "If a provider is unable to fulfil a confirmed booking, they should inform OurHub Services as soon as reasonably possible.",
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-[#DFAE45]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "09",
    icon: UserCheck,
    title: "Customer Responsibility",
    content: (
      <ul className="space-y-3">
        {[
          "Provide accurate personal, contact, booking, and service location information.",
          "Be available at the agreed service location and time where required.",
          "Treat service providers respectfully and professionally.",
          "Inform OurHub Services as early as possible if booking details need to be changed or cancelled.",
          "Do not use the platform for fraudulent, unlawful, abusive, or misleading activities.",
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-[#DFAE45]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "10",
    icon: Ban,
    title: "Cancellation",
    content: (
      <>
        <p>
          Customers may cancel bookings according to the applicable
          cancellation conditions. Generally, cancellations made 24 hours or
          more before the scheduled service may be eligible for a full refund,
          while cancellations made less than 24 hours before the scheduled
          service may be subject to applicable cancellation charges.
        </p>

        <p className="mt-3">
          Provider cancellations and service unavailability will be handled
          according to the applicable service conditions and our Cancellation
          and Refund Policies.
        </p>

        <p className="mt-3">
          Customers should review the cancellation conditions before making a
          payment.
        </p>
      </>
    ),
  },
  {
    number: "11",
    icon: RefreshCcw,
    title: "Refunds",
    content: (
      <>
        <p>
          Refunds are handled according to the OurHub Services Refund Policy.
          Where a refund is approved, it will generally be initiated to the
          original payment method used for the transaction.
        </p>

        <div className="mt-4 rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/[0.05] p-4">
          <div className="flex items-center gap-3">
            <Clock3 size={18} className="text-[#DFAE45]" />
            <span className="text-[12px] font-bold text-white">
              Typical Refund Timeline
            </span>
          </div>

          <p className="mt-2 text-[11px] leading-5 text-gray-500">
            Approved refunds are generally processed within{" "}
            <span className="font-bold text-[#E7B94F]">
              5–10 business days
            </span>
            . Actual reflection time may depend on the payment gateway, bank,
            card issuer, or other financial institution.
          </p>
        </div>
      </>
    ),
  },
  {
    number: "12",
    icon: ShieldCheck,
    title: "Acceptable Use",
    content: (
      <>
        <p className="mb-4">
          Customers and service providers must not use OurHub Services for:
        </p>

        <ul className="space-y-3">
          {[
            "Fraudulent or deceptive activities.",
            "Illegal activities or transactions.",
            "Harassment, abuse, or threats against other users.",
            "Attempting to interfere with or compromise the security of the platform.",
            "Providing false information or misusing another person's identity or account.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <AlertCircle
                size={16}
                className="mt-0.5 shrink-0 text-red-400"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "13",
    icon: Copyright,
    title: "Website Content",
    content: (
      <>
        <p>
          Unless otherwise stated, the content, branding, logos, design,
          graphics, text, and other materials available on OurHub Services are
          owned by or used with permission by OurHub Services.
        </p>

        <p className="mt-3">
          Users may not reproduce, copy, modify, distribute, or commercially
          exploit website content without prior written permission.
        </p>
      </>
    ),
  },
  {
    number: "14",
    icon: Scale,
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          OurHub Services makes reasonable efforts to provide a reliable
          platform and facilitate service bookings. However, we cannot
          guarantee uninterrupted availability or that every service will
          always be available at the requested time.
        </p>

        <p className="mt-3">
          To the extent permitted by applicable law, OurHub Services will not
          be responsible for delays, interruptions, service-provider actions,
          customer actions, technical failures, or circumstances beyond our
          reasonable control.
        </p>
      </>
    ),
  },
  {
    number: "15",
    icon: Globe2,
    title: "Third-Party Services",
    content: (
      <>
        <p>
          OurHub Services may use third-party providers such as payment
          gateways, hosting providers, communication services, or other
          technology providers to operate the platform.
        </p>

        <p className="mt-3">
          Third-party services may have their own terms, policies, and
          processing timelines. Customers should review those policies where
          applicable.
        </p>
      </>
    ),
  },
  {
    number: "16",
    icon: Gavel,
    title: "Dispute Handling",
    content: (
      <>
        <p>
          If a customer has a concern regarding a booking, payment, service,
          cancellation, or refund, the customer should first contact the
          OurHub Services support team so that the matter can be reviewed and
          resolved.
        </p>

        <p className="mt-3">
          We will make reasonable efforts to investigate and resolve genuine
          disputes based on the available booking, payment, and service
          information.
        </p>

        <p className="mt-3">
          Nothing in these Terms & Conditions limits any rights or remedies
          available to customers under applicable laws.
        </p>
      </>
    ),
  },
  {
    number: "17",
    icon: FileCheck2,
    title: "Privacy",
    content: (
      <p>
        Information collected through the OurHub Services platform is handled
        according to our Privacy Policy. Customers should review the Privacy
        Policy to understand how personal and booking information may be
        collected, used, and protected.
      </p>
    ),
  },
  {
    number: "18",
    icon: RefreshCcw,
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          OurHub Services reserves the right to update or modify these Terms &
          Conditions when necessary. Updated terms will be published on this
          page and will become effective from the date of publication unless
          otherwise stated.
        </p>

        <p className="mt-3">
          Customers are encouraged to review this page periodically for any
          changes.
        </p>
      </>
    ),
  },
  {
    number: "19",
    icon: Landmark,
    title: "Governing Law",
    content: (
      <p>
        These Terms & Conditions will be interpreted and applied in accordance
        with the applicable laws of India. Any legal proceedings will be
        subject to the jurisdiction of the appropriate courts, subject to
        applicable law.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <PageLayout title="Terms & Conditions">
      <div className="relative overflow-hidden pb-8">
        {/* Ambient Background */}
        <div className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-[#DFAE45]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-[700px] h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Hero */}
        <section className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#121D2B] via-[#0C1724] to-[#070D15] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFAE45]/25 bg-[#DFAE45]/10">
                <ScrollText
                  size={27}
                  strokeWidth={1.7}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-1.5">
                <ShieldCheck size={12} className="text-emerald-400" />
                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-400">
                  Transparent
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                Legal Information
              </p>

              <h1 className="mt-2 text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
                Terms that keep
                <br />
                <span className="text-[#DFAE45]">OurHub clear.</span>
              </h1>

              <p className="mt-4 text-[12px] leading-6 text-gray-400">
                Please review these Terms & Conditions before booking,
                purchasing, or using any service available through OurHub
                Services.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <BookOpenCheck
                  size={17}
                  className="mx-auto text-[#DFAE45]"
                />
                <p className="mt-2 text-[9px] font-bold text-gray-400">
                  Clear Terms
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <ShieldCheck
                  size={17}
                  className="mx-auto text-[#DFAE45]"
                />
                <p className="mt-2 text-[9px] font-bold text-gray-400">
                  User Protection
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <Scale size={17} className="mx-auto text-[#DFAE45]" />
                <p className="mt-2 text-[9px] font-bold text-gray-400">
                  Fair Use
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
                <Info
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#DFAE45]">
                  Welcome to OurHub
                </p>

                <h2 className="mt-1 text-[18px] font-bold text-white">
                  Before you book
                </h2>
              </div>
            </div>

            <p className="mt-4 text-[12px] leading-6 text-gray-400">
              Welcome to{" "}
              <span className="font-bold text-white">OurHub Services</span>.
              OurHub Services is an online platform that enables customers to
              discover, request, and book various services from available
              service providers.
            </p>

            <p className="mt-3 text-[12px] leading-6 text-gray-500">
              By accessing our website or using our services, you agree to
              comply with these Terms & Conditions, our Privacy Policy, Refund
              Policy, and Cancellation Policy.
            </p>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="mt-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              At a Glance
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              What these terms cover
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: CalendarCheck2,
                title: "Bookings",
                text: "Availability & confirmation",
              },
              {
                icon: WalletCards,
                title: "Payments",
                text: "Charges & processing",
              },
              {
                icon: RefreshCcw,
                title: "Refunds",
                text: "Cancellation & refunds",
              },
              {
                icon: Users,
                title: "Users",
                text: "Customer & provider duties",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[21px] border border-white/[0.07] bg-[#0C1623] p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <h3 className="mt-3 text-[12px] font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-gray-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Terms Sections */}
        <section className="mt-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Full Terms
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              Terms & Conditions
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-gray-600">
              Tap any section to read the applicable terms.
            </p>
          </div>

          <div className="space-y-3">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <details
                  key={section.number}
                  open={index === 0}
                  className="group overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0C1623] transition-colors open:border-[#DFAE45]/20"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 p-4 [&::-webkit-details-marker]:hidden">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/10 bg-[#DFAE45]/[0.07]">
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className="text-[#DFAE45]"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-extrabold tracking-[0.12em] text-[#DFAE45]">
                          {section.number}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-gray-700" />

                        <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-gray-600">
                          Terms
                        </span>
                      </div>

                      <h3 className="mt-1 text-[13px] font-bold text-white">
                        {section.title}
                      </h3>
                    </div>

                    <ChevronDown
                      size={18}
                      className="shrink-0 text-gray-600 transition-transform duration-300 group-open:rotate-180 group-open:text-[#DFAE45]"
                    />
                  </summary>

                  <div className="border-t border-white/[0.05] px-5 pb-5 pt-4 text-[11px] leading-6 text-gray-500">
                    {section.content}
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        {/* Important Legal Note */}
        <section className="mt-8">
          <div className="overflow-hidden rounded-[25px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151D27] to-[#0A1119] p-5">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Scale
                  size={21}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#DFAE45]">
                  Your Rights
                </p>

                <h2 className="mt-1 text-[17px] font-bold text-white">
                  Fair & applicable
                </h2>

                <p className="mt-3 text-[11px] leading-5 text-gray-500">
                  Nothing in these Terms & Conditions limits any rights or
                  remedies available to customers under applicable laws.
                </p>

                <p className="mt-3 text-[11px] leading-5 text-gray-500">
                  These terms are intended to clearly explain how the OurHub
                  Services platform, bookings, payments, providers, and
                  customer responsibilities work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mt-6">
          <div className="rounded-[23px] border border-white/[0.07] bg-[#0C1623] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Landmark
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#DFAE45]">
                  Legal Jurisdiction
                </p>

                <h2 className="mt-0.5 text-[16px] font-bold text-white">
                  Laws of India
                </h2>
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-5 text-gray-500">
              These Terms & Conditions will be interpreted and applied in
              accordance with the applicable laws of India. Any legal
              proceedings will be subject to the jurisdiction of the
              appropriate courts, subject to applicable law.
            </p>
          </div>
        </section>

        {/* Contact Support */}
        <section className="mt-8">
          <div className="overflow-hidden rounded-[27px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#121C29] to-[#080F17] p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <Handshake
                size={24}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Need Clarification?
            </p>

            <h2 className="mt-1 text-[22px] font-extrabold text-white">
              We're here to help
            </h2>

            <p className="mx-auto mt-3 max-w-[300px] text-[11px] leading-5 text-gray-500">
              If you have any questions, concerns, or complaints regarding
              these Terms & Conditions, contact the OurHub Services support
              team.
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

        {/* Policy Links */}
        <section className="mt-6">
          <div className="rounded-[23px] border border-white/[0.06] bg-[#0A111A] p-5">
            <div className="flex items-center gap-3">
              <FileCheck2 size={18} className="text-[#DFAE45]" />

              <div>
                <p className="text-[12px] font-bold text-white">
                  Related Policies
                </p>

                <p className="mt-0.5 text-[9px] text-gray-600">
                  Review the policies that apply to your use of OurHub.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href="/privacy"
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3 text-[10px] font-bold text-gray-400 transition hover:border-[#DFAE45]/20 hover:text-white"
              >
                Privacy Policy
                <ArrowRight size={13} className="text-[#DFAE45]" />
              </a>

              <a
                href="/refund"
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3 text-[10px] font-bold text-gray-400 transition hover:border-[#DFAE45]/20 hover:text-white"
              >
                Refund Policy
                <ArrowRight size={13} className="text-[#DFAE45]" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
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
              Terms & Conditions • OurHub Services
            </p>
          </div>
        </section>

        <div className="h-4" />
      </div>
    </PageLayout>
  );
}