
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

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050B14] text-white">
      <div className="mx-auto w-full max-w-[430px] overflow-hidden px-5 pb-6 pt-10">
        {/* Brand */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DFAE45]/30 bg-[#DFAE45]/10">
              <span className="text-lg font-black text-[#DFAE45]">OH</span>
            </div>

            <div>
              <h2 className="text-xl font-extrabold tracking-tight">
                OurHub <span className="text-[#DFAE45]">Services</span>
              </h2>
              <p className="mt-0.5 text-[11px] font-medium tracking-wide text-white/40">
                ALL SERVICES, ONE HUB
              </p>
            </div>
          </div>

          <p className="text-[13px] leading-6 text-white/55">
            Book trusted professionals for religious services, home services,
            construction, events, web development and more — all from one
            place.
          </p>
        </div>

        {/* Trust Strip */}
        <div className="mb-9 grid grid-cols-3 divide-x divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.025] py-4">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <ShieldCheck size={18} className="text-[#DFAE45]" />
            <span className="text-[10px] font-semibold text-white/65">
              Verified
            </span>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center">
            <Clock3 size={18} className="text-[#DFAE45]" />
            <span className="text-[10px] font-semibold text-white/65">
              On Time
            </span>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center">
            <MessageCircle size={18} className="text-[#DFAE45]" />
            <span className="text-[10px] font-semibold text-white/65">
              Support
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold tracking-wide text-white">
              Quick Links
            </h3>

            <div className="h-px w-20 bg-gradient-to-r from-[#DFAE45]/50 to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <FooterLink href="/about" label="About Us" />
            <FooterLink href="/contact" label="Contact Us" />
            <FooterLink href="/privacy-policy" label="Privacy Policy" />
            <FooterLink
              href="/terms-and-conditions"
              label="Terms & Conditions"
            />
            <FooterLink href="/refund-policy" label="Refund Policy" />
            <FooterLink
              href="/cancellation-policy"
              label="Cancellation Policy"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold tracking-wide text-white">
              Contact Us
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
                <Mail size={18} className="text-[#DFAE45]" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                  Email
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
                <Phone size={18} className="text-[#DFAE45]" />
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                  Phone
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
                <MapPin size={18} className="text-[#DFAE45]" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                  Service Areas
                </p>
                <p className="mt-0.5 text-[13px] font-medium text-white/80">
                  Ujjain • Ratlam • Indore
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Clock3 size={18} className="text-[#DFAE45]" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                  Working Hours
                </p>
                <p className="mt-0.5 text-[13px] font-medium text-white/80">
                  Monday – Saturday
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
          <MessageCircle size={19} strokeWidth={2.5} />
          Chat With OurHub
          <ArrowUpRight size={17} strokeWidth={2.5} />
        </a>

        {/* Bottom */}
        <div className="border-t border-white/[0.08] pt-6 text-center">
          <p className="text-[11px] leading-5 text-white/35">
            © {new Date().getFullYear()} OurHub Services.
            <br />
            All Rights Reserved.
          </p>

          <p className="mt-3 text-[10px] font-medium tracking-wide text-[#DFAE45]/55">
            ALL SERVICES, ONE HUB
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

