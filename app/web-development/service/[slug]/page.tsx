"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Code2, Sparkles } from "lucide-react";

import { services } from "@/data/services";

import ServiceHeader from "@/components/web-development/service/ServiceHeader";
import ServiceHero from "@/components/web-development/service/ServiceHero";
import StickyBottom from "@/components/web-development/service/StickyBottom";
import Pricing from "@/components/web-development/service/Pricing";
import Technology from "@/components/web-development/service/Technology";
import Features from "@/components/web-development/service/Features";
import ServiceOverview from "@/components/web-development/service/ServiceOverview";
import ContactBottomSheet from "@/components/web-development/service/ContactBottomSheet";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServicePage({ params }: Props) {
  const { slug } = use(params);
  const [contactOpen, setContactOpen] = useState(false);

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#02060D] text-white">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#DFAE45]/[0.035] blur-[110px]" />

        <div className="absolute -right-32 top-[45%] h-96 w-96 rounded-full bg-blue-500/[0.025] blur-[120px]" />

        <div className="absolute left-1/2 top-[75%] h-80 w-80 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.025] blur-[110px]" />
      </div>

      {/* =========================================================
          MOBILE APP SHELL
      ========================================================= */}

      <div className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#050B14] shadow-[0_0_100px_rgba(0,0,0,0.35)]">
        {/* subtle top ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[85%] -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.035] blur-[90px]" />

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="relative z-50">
          <ServiceHeader />
        </div>

        {/* =====================================================
            PREMIUM SERVICE IDENTITY STRIP
        ===================================================== */}

        <section className="relative px-4 pt-4">
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-gradient-to-r from-[#101C2B] via-[#0B1725] to-[#08121E] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
            {/* glow */}
            <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            {/* top highlight */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />

            <div className="relative flex items-center gap-3">
              {/* icon */}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[17px] border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DFAE45]/10 to-transparent" />

                <span className="absolute -left-8 top-0 h-full w-6 rotate-[25deg] bg-white/15 blur-sm" />

                <Code2
                  size={20}
                  strokeWidth={1.8}
                  className="relative z-10 text-[#DFAE45]"
                />
              </div>

              {/* text */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={11}
                    strokeWidth={2.2}
                    className="shrink-0 text-[#DFAE45]"
                  />

                  <span className="text-[8px] font-extrabold uppercase tracking-[1.6px] text-[#DFAE45]">
                    Premium Service
                  </span>
                </div>

                <h2 className="mt-1 truncate text-[15px] font-extrabold text-white">
                  {service.title}
                </h2>

                <p className="mt-0.5 text-[9px] text-gray-500">
                  Professional digital solution by OurHub
                </p>
              </div>

              {/* verified */}
              <div className="flex shrink-0 flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-green-400/15 bg-green-400/[0.07]">
                  <CheckCircle2
                    size={15}
                    strokeWidth={2}
                    className="text-green-400"
                  />
                </div>

                <span className="mt-1 text-[6px] font-bold uppercase tracking-[0.7px] text-green-400">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative mt-3">
          <ServiceHero
            service={service}
            onStartProject={() => setContactOpen(true)}
          />
        </section>

        {/* =====================================================
            TRUST BAR
        ===================================================== */}

        <section className="relative px-4 pt-4">
          <div className="grid grid-cols-3 overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#091421]">
            <div className="relative px-2 py-3 text-center">
              <p className="text-[10px] font-extrabold text-[#DFAE45]">
                Premium
              </p>

              <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.7px] text-gray-600">
                Quality
              </p>
            </div>

            <div className="relative border-x border-white/[0.06] px-2 py-3 text-center">
              <p className="text-[10px] font-extrabold text-white">
                Fast
              </p>

              <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.7px] text-gray-600">
                Delivery
              </p>
            </div>

            <div className="relative px-2 py-3 text-center">
              <p className="text-[10px] font-extrabold text-green-400">
                Support
              </p>

              <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.7px] text-gray-600">
                Dedicated
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            OVERVIEW
        ===================================================== */}

        <section className="relative mt-2">
          <ServiceOverview service={service} />
        </section>

        {/* =====================================================
            FEATURES
        ===================================================== */}

        <section className="relative mt-2">
          <Features service={service} />
        </section>

        {/* =====================================================
            TECHNOLOGY
        ===================================================== */}

        <section className="relative mt-2">
          <Technology service={service} />
        </section>

        {/* =====================================================
            MID-PAGE CTA
        ===================================================== */}

        <section className="relative mt-8 px-4">
          <div className="group relative overflow-hidden rounded-[26px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#121F30] via-[#0B1725] to-[#07111D] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
            {/* glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-3xl" />

            {/* shine */}
            <div className="pointer-events-none absolute -left-20 top-0 h-full w-12 rotate-[20deg] bg-white/[0.04] blur-md transition-all duration-1000 group-hover:left-[120%]" />

            <div className="relative">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                  <Sparkles
                    size={14}
                    strokeWidth={2}
                    className="text-[#DFAE45]"
                  />
                </div>

                <span className="text-[8px] font-extrabold uppercase tracking-[1.5px] text-[#DFAE45]">
                  Ready to build?
                </span>
              </div>

              <h3 className="mt-3 text-[18px] font-extrabold tracking-tight text-white">
                Let&apos;s turn your idea into reality.
              </h3>

              <p className="mt-2 max-w-[320px] text-[10px] leading-5 text-gray-500">
                Tell us what you need and our team will help you choose the
                right solution for your business.
              </p>

              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="mt-4 flex h-[44px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#DFAE45] to-[#FFD86A] text-[10px] font-extrabold text-black shadow-[0_10px_30px_rgba(223,174,69,0.16)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(223,174,69,0.28)] active:scale-[0.98]"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRICING
        ===================================================== */}

        <section className="relative mt-2">
          <Pricing service={service} />
        </section>

        {/* =====================================================
            FINAL TRUST SECTION
        ===================================================== */}

        <section className="relative mt-8 px-4 pb-4">
          <div className="relative overflow-hidden rounded-[26px] border border-white/[0.06] bg-[#091421] p-5">
            <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-40 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.05] blur-3xl" />

            <div className="relative text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-green-400/15 bg-green-400/[0.07]">
                <CheckCircle2
                  size={20}
                  strokeWidth={2}
                  className="text-green-400"
                />
              </div>

              <h3 className="mt-3 text-[15px] font-extrabold text-white">
                Built with the OurHub Standard
              </h3>

              <p className="mx-auto mt-1.5 max-w-[290px] text-[9px] leading-4 text-gray-600">
                Premium design, clean development, responsive experience and
                professional support.
              </p>

              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[0.8px] text-gray-500">
                  Mobile First
                </span>

                <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[0.8px] text-gray-500">
                  SEO Ready
                </span>

                <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[0.8px] text-gray-500">
                  Support
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STICKY BOTTOM
        ===================================================== */}

        <StickyBottom />

        {/* =====================================================
            CONTACT BOTTOM SHEET
        ===================================================== */}

        <ContactBottomSheet
          open={contactOpen}
          onClose={() => setContactOpen(false)}
        />

        {/* extra space for sticky CTA */}
        <div className="h-24" />
      </div>
    </main>
  );
}