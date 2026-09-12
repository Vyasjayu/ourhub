"use client";

import PageLayout from "@/components/PageLayout";
import {
  ArrowUpRight,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const contactItems = [
  {
    icon: UserRound,
    label: "Business / Owner",
    value: "Jayant Vyas",
  },
  {
    icon: Mail,
    label: "Support Email",
    value: "support@ourhubservices.com",
    href: "mailto:support@ourhubservices.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8878632431",
    href: "tel:+918878632431",
  },
  {
    icon: Clock3,
    label: "Working Hours",
    value: "Monday – Saturday\n9:00 AM – 8:00 PM",
  },
];

const supportTopics = [
  "Service bookings",
  "Payment-related queries",
  "Cancellations & refunds",
  "Provider information",
  "Technical issues",
];

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <div className="relative overflow-hidden pb-8">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-28 -top-24 h-72 w-72 rounded-full bg-[#DFAE45]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-[500px] h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Hero */}
        <section className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#121D2B] via-[#0C1724] to-[#070D15] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFAE45]/30 bg-[#DFAE45]/10">
              <Headphones
                size={27}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                Support Available
              </span>
            </div>

            <h1 className="mt-4 text-[29px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white">
              We're here to{" "}
              <span className="text-[#DFAE45]">help you.</span>
            </h1>

            <p className="mt-4 text-[14px] leading-7 text-gray-400">
              Have a question about a booking, payment, cancellation or our
              services? Get in touch with the OurHub support team.
            </p>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href="tel:+918878632431"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-4 py-3.5 text-[12px] font-extrabold text-black shadow-[0_10px_30px_rgba(223,174,69,0.15)] transition active:scale-[0.97]"
              >
                <Phone size={16} />
                Call Us
              </a>

              <a
                href="mailto:support@ourhubservices.com"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[12px] font-bold text-white transition active:scale-[0.97]"
              >
                <Mail size={16} className="text-[#DFAE45]" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="relative mt-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Get In Touch
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              Contact Information
            </h2>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0C1623]">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              const content = (
                <div
                  className={`flex gap-4 p-4 ${
                    index !== contactItems.length - 1
                      ? "border-b border-white/[0.06]"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/10">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500">
                      {item.label}
                    </p>

                    <p className="mt-1 whitespace-pre-line break-words text-[13px] font-semibold leading-6 text-white">
                      {item.value}
                    </p>
                  </div>

                  {item.href && (
                    <div className="flex items-center">
                      <ArrowUpRight
                        size={16}
                        className="text-gray-600 transition group-hover:text-[#DFAE45]"
                      />
                    </div>
                  )}
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="group block transition hover:bg-white/[0.025]"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </section>

        {/* Address */}
        <section className="mt-8">
          <div className="rounded-[24px] border border-white/[0.07] bg-gradient-to-br from-[#0E1927] to-[#09121D] p-5">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <MapPin
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#DFAE45]">
                  Business Address
                </p>

                <h2 className="mt-1 text-[17px] font-bold text-white">
                  OurHub Services
                </h2>

                <p className="mt-2 text-[12px] leading-6 text-gray-500">
                  Business address will be displayed here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Support */}
        <section className="mt-8">
          <div className="overflow-hidden rounded-[25px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151D27] to-[#0B131D] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <ShieldCheck
                size={23}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Customer Support
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              How can we help?
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-gray-400">
              Our support team is available to assist you with bookings,
              payments, provider information, technical issues, cancellations
              and refund requests.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {supportTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-2 text-[10px] font-medium text-gray-400"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment & Refund */}
        <section className="mt-8">
          <div className="rounded-[24px] border border-white/[0.07] bg-[#0C1623] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <MessageCircle
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#DFAE45]"
                />
              </div>

              <h2 className="text-[17px] font-bold text-white">
                Payment & Refund Support
              </h2>
            </div>

            <p className="mt-4 text-[12px] leading-6 text-gray-500">
              For payment failures, duplicate payments, cancellation requests
              or refund-related queries, please contact us using the email or
              phone number above. Keep your booking details or payment
              reference available so we can assist you efficiently.
            </p>

            <div className="mt-5 rounded-2xl border border-[#DFAE45]/10 bg-[#DFAE45]/[0.04] p-4">
              <p className="text-[11px] font-semibold leading-5 text-[#DFAE45]">
                Tip
              </p>

              <p className="mt-1 text-[11px] leading-5 text-gray-500">
                Mention your booking ID or payment reference when contacting
                support for faster assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-8">
          <div className="rounded-[26px] border border-[#DFAE45]/20 bg-gradient-to-b from-[#121B28] to-[#0A111A] p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
              <Headphones
                size={22}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <h2 className="mt-4 text-[19px] font-extrabold text-white">
              Need assistance?
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-gray-500">
              OurHub support is just a call or email away.
            </p>

            <a
              href="tel:+918878632431"
              className="mx-auto mt-5 flex max-w-[220px] items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 py-3.5 text-[12px] font-extrabold text-black shadow-[0_12px_35px_rgba(223,174,69,0.14)] transition active:scale-[0.97]"
            >
              <Phone size={16} />
              Contact Support
            </a>

            <p className="mt-5 text-[9px] font-bold tracking-[0.2em] text-gray-600">
              OURHUB SERVICES • ALL SERVICES. ONE HUB.
            </p>
          </div>
        </section>

        <div className="h-4" />
      </div>
    </PageLayout>
  );
}