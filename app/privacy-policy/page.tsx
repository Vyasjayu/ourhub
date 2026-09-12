"use client";

import PageLayout from "@/components/PageLayout";
import {
  BadgeCheck,
  ChevronRight,
  CircleHelp,
  Cookie,
  Database,
  FileCheck2,
  Globe2,
  KeyRound,
  LockKeyhole,
  Mail,
  RefreshCw,
  Scale,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const sections = [
  {
    number: "01",
    icon: Database,
    title: "Information We Collect",
    content: (
      <>
        <p>
          We may collect information that you provide directly when creating
          an account, making a booking, contacting us, or using our services.
        </p>

        <ul className="mt-4 space-y-3">
          <li>Name, mobile number, and email address.</li>
          <li>Service booking details, preferences, and appointment information.</li>
          <li>Address, city, landmark, or location details when required.</li>
          <li>
            Payment-related information such as transaction status, reference,
            order details, and payment method.
          </li>
          <li>
            Device, browser, IP address, and basic technical information used
            for security and performance.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "02",
    icon: LockKeyhole,
    title: "Payment Information",
    content: (
      <>
        <p>
          Payments may be processed through authorized third-party payment
          gateways or payment service providers.
        </p>

        <p className="mt-4">
          Sensitive payment credentials such as your full card number, card
          security code, UPI PIN, OTP, or banking credentials are not stored by
          OurHub Services unless explicitly required and permitted by
          applicable law.
        </p>

        <p className="mt-4">
          We may receive limited transaction information such as payment
          status, transaction ID, order ID, payment method, and refund status
          for managing your booking.
        </p>

        <p className="mt-4">
          Payment transactions are also subject to the terms and privacy
          policies of the applicable payment service provider.
        </p>
      </>
    ),
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "How We Use Your Information",
    content: (
      <ul className="space-y-3">
        <li>To create and manage your account.</li>
        <li>To process and manage service bookings.</li>
        <li>
          To coordinate with service professionals when necessary to fulfill
          your booking.
        </li>
        <li>To process and verify payments and refunds.</li>
        <li>
          To send booking confirmations, updates, and service-related
          communications.
        </li>
        <li>To provide customer support and resolve service issues.</li>
        <li>
          To improve our website, services, security, and customer experience.
        </li>
        <li>
          To detect, prevent, and investigate fraudulent or unauthorized
          activities.
        </li>
        <li>
          To comply with applicable legal, regulatory, and governmental
          requirements.
        </li>
      </ul>
    ),
  },
  {
    number: "04",
    icon: UserRound,
    title: "Sharing of Information",
    content: (
      <>
        <p>
          We do not sell or rent your personal information to third parties.
          Information may be shared only when reasonably necessary to provide
          the requested service or operate our platform.
        </p>

        <ul className="mt-4 space-y-3">
          <li>
            With verified or assigned service professionals when required to
            fulfill your booking.
          </li>
          <li>
            With payment gateways or service providers for processing and
            verifying transactions.
          </li>
          <li>
            With technology, hosting, security, or support providers that help
            operate our platform.
          </li>
          <li>
            When required by applicable law, court order, government authority,
            or legal process.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Data Security",
    content: (
      <>
        <p>
          We use reasonable technical and organizational security measures
          designed to protect your personal information from unauthorized
          access, misuse, alteration, loss, or disclosure.
        </p>

        <p className="mt-4">
          However, no internet-based service can guarantee absolute security.
          We continuously work to improve the security and reliability of our
          platform.
        </p>
      </>
    ),
  },
  {
    number: "06",
    icon: Database,
    title: "Data Retention",
    content: (
      <p>
        We retain personal and booking information only for as long as
        reasonably necessary to provide our services, maintain business
        records, resolve disputes, prevent fraud, and comply with applicable
        legal and regulatory requirements.
      </p>
    ),
  },
  {
    number: "07",
    icon: Cookie,
    title: "Cookies & Similar Technologies",
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to maintain
          functionality, remember preferences, understand website usage,
          improve performance, and enhance your browsing experience.
        </p>

        <p className="mt-4">
          You may be able to manage or disable cookies through your browser
          settings. Some website features may not function properly if certain
          cookies are disabled.
        </p>
      </>
    ),
  },
  {
    number: "08",
    icon: KeyRound,
    title: "Your Privacy Choices",
    content: (
      <p>
        Depending on applicable law, you may request access to, correction of,
        or deletion of certain personal information associated with your
        account. You may also contact us if you have questions about how your
        information is being used.
      </p>
    ),
  },
  {
    number: "09",
    icon: Globe2,
    title: "Third-Party Services & Links",
    content: (
      <p>
        Our website may contain links or integrations to third-party services,
        including payment and communication providers. We are not responsible
        for the privacy practices of third-party websites or services. We
        recommend reviewing their respective privacy policies before providing
        information.
      </p>
    ),
  },
  {
    number: "10",
    icon: RefreshCw,
    title: "Policy Updates",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our services, technology, legal requirements, or business
        practices. Updated versions will be published on this page with the
        revised effective date where appropriate.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <div className="relative overflow-hidden pb-8">
        {/* Ambient background */}
        <div className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 top-[620px] h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Hero */}
        <section className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#121D2B] via-[#0C1724] to-[#070D15] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFAE45]/30 bg-[#DFAE45]/10">
              <ShieldCheck
                size={27}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                Your Privacy Matters
              </span>
            </div>

            <h1 className="mt-4 text-[29px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white">
              Privacy built around{" "}
              <span className="text-[#DFAE45]">trust.</span>
            </h1>

            <p className="mt-4 text-[13px] leading-7 text-gray-400">
              This Privacy Policy explains how OurHub Services collects, uses,
              protects, and manages information when you use our website and
              services.
            </p>

            {/* Privacy highlights */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <LockKeyhole
                  size={17}
                  className="mx-auto text-[#DFAE45]"
                />
                <p className="mt-2 text-[9px] font-bold text-gray-400">
                  Secure
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <ShieldCheck
                  size={17}
                  className="mx-auto text-[#DFAE45]"
                />
                <p className="mt-2 text-[9px] font-bold text-gray-400">
                  Protected
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                <Scale
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
                  Introduction
                </p>

                <h2 className="mt-0.5 text-[17px] font-bold text-white">
                  Our commitment to privacy
                </h2>
              </div>
            </div>

            <p className="mt-4 text-[12px] leading-6 text-gray-400">
              At{" "}
              <span className="font-semibold text-white">
                OurHub Services
              </span>
              , we respect your privacy and are committed to protecting your
              personal information. We aim to provide a transparent experience
              so you understand what information we collect and why we use it.
            </p>
          </div>
        </section>

        {/* Policy sections */}
        <section className="relative mt-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Privacy Details
            </p>

            <h2 className="mt-1 text-[21px] font-bold text-white">
              Your information
            </h2>
          </div>

          <div className="space-y-3">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <details
                  key={section.number}
                  className="group overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0C1623] transition-all duration-300 open:border-[#DFAE45]/20"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 p-4 [&::-webkit-details-marker]:hidden">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/15 bg-[#DFAE45]/10">
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className="text-[#DFAE45]"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-0.5 text-[9px] font-bold tracking-[0.12em] text-[#DFAE45]">
                        SECTION {section.number}
                      </div>

                      <h3 className="text-[13px] font-bold text-white">
                        {section.title}
                      </h3>
                    </div>

                    <ChevronRight
                      size={17}
                      className="shrink-0 text-gray-600 transition-transform duration-300 group-open:rotate-90 group-open:text-[#DFAE45]"
                    />
                  </summary>

                  <div className="border-t border-white/[0.06] px-4 pb-5 pt-4 text-[12px] leading-6 text-gray-500">
                    {section.content}
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="relative mt-8">
          <div className="overflow-hidden rounded-[25px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151D27] to-[#0B131D] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
              <CircleHelp
                size={23}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
              Privacy Support
            </p>

            <h2 className="mt-1 text-[21px] font-extrabold text-white">
              Have a privacy question?
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-gray-400">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or your personal information, our support team is
              available to assist you.
            </p>

            <a
              href="mailto:support@ourhubservices.com"
              className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] px-5 py-3.5 text-[12px] font-extrabold text-black shadow-[0_12px_35px_rgba(223,174,69,0.14)] transition active:scale-[0.97]"
            >
              <Mail size={16} />
              Contact Privacy Support
            </a>

            <p className="mt-4 text-center text-[10px] font-medium text-gray-600">
              support@ourhubservices.com
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <section className="mt-6">
          <div className="flex items-center justify-between border-t border-white/[0.06] pt-5">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-gray-600">
                Policy Status
              </p>

              <p className="mt-1 text-[11px] font-medium text-gray-500">
                Last Updated: August 2026
              </p>
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[9px] font-bold text-emerald-400">
                Active Policy
              </span>
            </div>
          </div>
        </section>

        {/* Brand Footer */}
        <section className="mt-7">
          <div className="rounded-[24px] border border-white/[0.06] bg-[#0A111A] p-5 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <Globe2
                size={20}
                strokeWidth={1.7}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-3 text-[13px] font-extrabold text-white">
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