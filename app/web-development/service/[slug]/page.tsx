"use client";

import { useState } from "react";
import { notFound } from "next/navigation";

import { services } from "@/data/services";

import ServiceHeader from "@/components/web-development/service/ServiceHeader";
import ServiceHero from "@/components/web-development/service/ServiceHero";
import StickyBottom from "@/components/web-development/service/StickyBottom";
// import ContactBottomSheet from "@/components/web-development/ContactBottomSheet";
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
  const [contactOpen, setContactOpen] = useState(false);
  const [slug, setSlug] = useState<string | null>(null);

  /**
   * Next.js 16 params Promise ko resolve karne ke liye
   */
  useState(() => {
    params.then((value) => {
      setSlug(value.slug);
    });
  });

  if (!slug) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050B14] text-white">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-yellow-400 border-t-transparent" />

          <p className="mt-3 text-xs text-gray-500">
            Loading service...
          </p>
        </div>
      </main>
    );
  }

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050B14] text-white flex justify-center">

      <div className="w-full max-w-[430px] pb-28">

        {/* ================= HEADER ================= */}

        <ServiceHeader />

        {/* ================= HERO ================= */}

        <ServiceHero
          service={service}
          onStartProject={() => {
            setContactOpen(true);
          }}
        />

        {/* ================= OVERVIEW ================= */}

        <ServiceOverview service={service} />

        {/* ================= FEATURES ================= */}

        <Features service={service} />

        {/* ================= TECHNOLOGY ================= */}

        <Technology service={service} />

        {/* ================= PRICING ================= */}

        <Pricing service={service} />

        {/* ================= CONTACT CTA ================= */}

        {/* 
        <ContactCTA
          service={service}
          onStartProject={() => setContactOpen(true)}
        />
        */}

        {/* ================= STICKY BOTTOM ================= */}

        <StickyBottom />

        {/* ================= CONTACT BOTTOM SHEET ================= */}

        <ContactBottomSheet
          open={contactOpen}
          onClose={() => {
            setContactOpen(false);
          }}
        />

      </div>

    </main>
  );
}