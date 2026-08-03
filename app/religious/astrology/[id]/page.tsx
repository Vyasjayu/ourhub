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

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function AstrologyDetailPage({
  params,
}: PageProps) {
  const { id } = use(params);

  const [astrologer, setAstrologer] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [showRecharge, setShowRecharge] =
    useState(false);

  const walletBalance = 0;

  useEffect(() => {
    async function loadAstrologer() {
      try {
        const res = await fetch(`/api/astrology/${id}`);

        const data = await res.json();

        if (data.success) {
          setAstrologer(data.astrologer);
        } else {
          setAstrologer(null);
        }
      } catch (error) {
        console.error(error);
        setAstrologer(null);
      } finally {
        setLoading(false);
      }
    }

    loadAstrologer();
  }, [id]);

  if (loading) {
    return (
      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#050B14]
          text-white
        "
      >
        Loading...
      </main>
    );
  }

  if (!astrologer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050B14]">

      <Hero astrologer={astrologer} />

      <div className="mx-auto max-w-md px-4 pb-40">
        <WalletCard
          walletBalance={walletBalance}
          pricePerMinute={Number(astrologer.price || 0)}
          onRecharge={() => setShowRecharge(true)}
        />

        <ConsultationButtons
          walletBalance={walletBalance}
          pricePerMinute={Number(astrologer.price || 0)}
          panditId={astrologer._id}
          panditPhone={astrologer.mobile}
          panditName={
            astrologer.displayName ||
            astrologer.fullName ||
            "Astrologer"
          }
        />

        <AboutSection
          about={
            astrologer.about ||
            "No description available."
          }
        />

        <ExperienceSection
          experience={Number(astrologer.experience || 0)}
          rating={Number(astrologer.rating || 5)}
        />

        <ExpertiseSection
          expertise={
            astrologer.specialization
              ? astrologer.specialization
                .split(",")
                .map((item: string) => item.trim())
              : []
          }
        />

        <LanguageSection
          languages={
            astrologer.languages
              ? astrologer.languages
                .split(",")
                .map((item: string) => item.trim())
              : []
          }
        />

        <FreeKundli />

        <PremiumServices />

        <Panchang />

        <Horoscope />

        <ReviewSection />

        <FAQ />

      </div>
      <StickyBottom
        walletBalance={walletBalance}
        pricePerMinute={Number(astrologer.price || 0)}
        panditId={astrologer._id}
        panditPhone={astrologer.mobile}
        panditName={
          astrologer.displayName ||
          astrologer.fullName ||
          "Astrologer"
        }
        onRecharge={() => setShowRecharge(true)}
      />

      <RechargeSheet
        open={showRecharge}
        walletBalance={walletBalance}
        panditId={astrologer._id}
        panditPhone={astrologer.mobile}
        panditName={
          astrologer.displayName ||
          astrologer.fullName ||
          "Astrologer"
        }
        onClose={() => setShowRecharge(false)}
        onRecharge={(amount) => {
          console.log("Recharge Amount:", amount);
        }}
      />
    </main>
  );
}