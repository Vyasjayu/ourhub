"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";

import Hero from "@/components/astrology/Hero";
import WalletCard from "@/components/astrology/WalletCard";
import ConsultationButtons from "@/components/astrology/ConsultationButtons";

import AboutSection from "@/components/astrology/AboutSection";
import ExperienceSection from "@/components/astrology/ExperienceSection";
import ExpertiseSection from "@/components/astrology/ExpertiseSection";
import LanguageSection from "@/components/astrology/LanguageSection";
import FreeKundli from "@/components/astrology/FreeKundli";
import PremiumServices from "@/components/astrology/PremiumServices";
import Panchang from "@/components/astrology/Panchang";
import Horoscope from "@/components/astrology/Horoscope";
import ReviewSection from "@/components/astrology/ReviewSection";
import FAQ from "@/components/astrology/FAQ";
import StickyBottom from "@/components/astrology/StickyBottom";
import RechargeSheet from "@/components/astrology/RechargeSheet";

import { getAstrologerBySlug } from "@/data/astrologers";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function AstrologyDetailPage({ params }: PageProps) {
  const { id } = use(params);

  const astrologer = getAstrologerBySlug(id);

  if (!astrologer) {
    notFound();
  }

  const [walletBalance, setWalletBalance] = useState(0);

  const [showRecharge, setShowRecharge] = useState(false);

  useEffect(() => {
    const phone = localStorage.getItem("userPhone");

    if (!phone) return;

    fetch(`/api/wallet/${phone}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setWalletBalance(data.walletBalance);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen bg-[#050B14]">
      <Hero astrologer={astrologer} />

      <div className="mx-auto max-w-md px-4 pb-40">
        <WalletCard
          walletBalance={walletBalance}
          pricePerMinute={astrologer.pricePerMinute}
          onRecharge={() => setShowRecharge(true)}
        />

        <ConsultationButtons
          walletBalance={walletBalance}
          pricePerMinute={astrologer.pricePerMinute}
        />

        <AboutSection about={astrologer.about} />

        <ExperienceSection
          experience={astrologer.experience}
          rating={astrologer.rating}
        />

        <ExpertiseSection expertise={astrologer.expertise} />

        <LanguageSection languages={astrologer.languages} />

        <FreeKundli />

        <PremiumServices />

        <Panchang />

        <Horoscope />

        <ReviewSection />

        <FAQ />
      </div>

      <StickyBottom
        walletBalance={walletBalance}
        pricePerMinute={astrologer.pricePerMinute}
        onRecharge={() => setShowRecharge(true)}
      />

      <RechargeSheet
        open={showRecharge}
        walletBalance={walletBalance}
        onClose={() => setShowRecharge(false)}
        onRecharge={() => {}}
      />
    </main>
  );
}