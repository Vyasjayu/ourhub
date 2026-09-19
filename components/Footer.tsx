"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const footerLinks = [
  {
    href: "/about",
    en: "About Us",
    hi: "हमारे बारे में",
  },
  {
    href: "/contact",
    en: "Contact Us",
    hi: "संपर्क करें",
  },
  {
    href: "/privacy-policy",
    en: "Privacy Policy",
    hi: "प्राइवेसी पॉलिसी",
  },
  {
    href: "/terms-and-conditions",
    en: "Terms & Conditions",
    hi: "नियम और शर्तें",
  },
  {
    href: "/refund-policy",
    en: "Refund Policy",
    hi: "रिफंड पॉलिसी",
  },
  {
    href: "/cancellation-policy",
    en: "Cancellation Policy",
    hi: "कैंसलेशन पॉलिसी",
  },
];

export default function Footer() {
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const t = {
    tagline: isHindi
      ? "सभी सर्विसेज, एक ही हब"
      : "ALL SERVICES, ONE HUB",

    description: isHindi
      ? "धार्मिक सेवाओं, होम सर्विसेज, कंस्ट्रक्शन, इवेंट्स, वेब डेवलपमेंट और अन्य सेवाओं के लिए भरोसेमंद प्रोफेशनल्स बुक करें — सब कुछ एक ही जगह।"
      : "Book trusted professionals for religious services, home services, construction, events, web development and more — all from one place.",

    verified: isHindi
      ? "वेरिफाइड"
      : "Verified",

    onTime: isHindi
      ? "समय पर"
      : "On Time",

    support: isHindi
      ? "सपोर्ट"
      : "Support",

    quickLinks: isHindi
      ? "क्विक लिंक्स"
      : "Quick Links",

    contactUs: isHindi
      ? "संपर्क करें"
      : "Contact Us",

    email: isHindi
      ? "ईमेल"
      : "Email",

    phone: isHindi
      ? "फोन"
      : "Phone",

    serviceAreas: isHindi
      ? "सर्विस एरिया"
      : "Service Areas",

    workingHours: isHindi
      ? "कार्य समय"
      : "Working Hours",

    days: isHindi
      ? "सोमवार – शनिवार"
      : "Monday – Saturday",

    chat: isHindi
      ? "OurHub से चैट करें"
      : "Chat With OurHub",

    allRights: isHindi
      ? "सर्वाधिकार सुरक्षित।"
      : "All Rights Reserved.",
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050B14] text-white">
      <div className="mx-auto w-full max-w-[430px] overflow-hidden px-5 pb-6 pt-10">
        {/* Brand */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DFAE45]/30 bg-[#DFAE45]/10">
              <span className="text-lg font-black text-[#DFAE45]">
                OH
              </span>
            </div>

            <div>
              <h2 className="text-xl font-extrabold tracking-tight">
                OurHub{" "}
                <span className="text-[#DFAE45]">
                  Services
                </span>
              </h2>

              <p className="mt-0.5 text-[11px] font-medium tracking-wide text-white/40">
                {t.tagline}
              </p>
            </div>
          </div>

          <p className="text-[13px] leading-6 text-white/55">
            {t.description}
          </p>
        </div>

        {/* Trust Strip */}
        <div className="mb-9 grid grid-cols-3 divide-x divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.025] py-4">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <ShieldCheck
              size={18}
              className="text-[#DFAE45]"
            />

            <span className="text-[10px] font-semibold text-white/65">
              {t.verified}
            </span>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center">
            <Clock3
              size={18}
              className="text-[#DFAE45]"
            />

            <span className="text-[10px] font-semibold text-white/65">
              {t.onTime}
            </span>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center">
            <MessageCircle
              size={18}
              className="text-[#DFAE45]"
            />

            <span className="text-[10px] font-semibold text-white/65">
              {t.support}
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold tracking-wide text-white">
              {t.quickLinks}
            </h3>

            <div className="h-px w-20 bg-gradient-to-r from-[#DFAE45]/50 to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {footerLinks.map((item) => (
              <FooterLink
                key={item.href}
                href={item.href}
                label={
                  isHindi
                    ? item.hi
                    : item.en
                }
              />
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold tracking-wide text-white">
              {t.contactUs}
            </h3>

            <div className="h-px w-20 bg-gradient-to-r from-[#DFAE45]/50 to-transparent" />
          </div>

          <div className="space-y-3">
            {/* Email */}
            <a
              href="mailto:support@ourhubservices.com"
              className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5 transition active:scale-[0.99]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Mail
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                  {t.email}
                </p>

                <p className="mt-0.5 truncate text-[13px] font-medium text-white/80">
                  support@ourhubservices.com
                </p>
              </div>

              <ArrowUpRight
                size={16}
                className="text-white/25 transition group-hover:text-[#DFAE45]"
              />
            </a>

            {/* Phone */}
            <a
              href="tel:+918878632431"
              className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5 transition active:scale-[0.99]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Phone
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                  {t.phone}
                </p>

                <p className="mt-0.5 text-[13px] font-medium text-white/80">
                  +91 88786 32431
                </p>
              </div>

              <ArrowUpRight
                size={16}
                className="text-white/25 transition group-hover:text-[#DFAE45]"
              />
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <MapPin
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                  {t.serviceAreas}
                </p>

                <p className="mt-0.5 text-[13px] font-medium text-white/80">
                  Ujjain • Ratlam • Indore
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Clock3
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                  {t.workingHours}
                </p>

                <p className="mt-0.5 text-[13px] font-medium text-white/80">
                  {t.days}
                </p>

                <p className="text-[11px] text-white/45">
                  9:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/918878632431"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#DFAE45] px-5 py-4 text-sm font-extrabold text-black shadow-[0_12px_35px_rgba(223,174,69,0.18)] transition active:scale-[0.98]"
        >
          <MessageCircle
            size={19}
            strokeWidth={2.5}
          />

          {t.chat}

          <ArrowUpRight
            size={17}
            strokeWidth={2.5}
          />
        </a>

        {/* Bottom */}
        <div className="border-t border-white/[0.08] pt-6 text-center">
          <p className="text-[11px] leading-5 text-white/35">
            © {new Date().getFullYear()} OurHub Services.
            <br />
            {t.allRights}
          </p>

          <p className="mt-3 text-[10px] font-medium tracking-wide text-[#DFAE45]/55">
            {t.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-h-[44px] items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 text-[12px] font-medium text-white/60 transition active:scale-[0.98] hover:border-[#DFAE45]/20 hover:bg-[#DFAE45]/5 hover:text-[#DFAE45]"
    >
      <span>{label}</span>

      <ArrowUpRight
        size={14}
        className="text-white/20 transition group-hover:text-[#DFAE45]"
      />
    </Link>
  );
}