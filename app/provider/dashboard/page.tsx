"use client";

import { useEffect, useState } from "react";

import {
  Briefcase,
  MapPin,
  Wallet,
  Languages,
  Star,
  BadgeCheck,
} from "lucide-react";

import HeaderCard from "@/components/provider/dashboard/HeaderCard";
import ProfileCompletion from "@/components/provider/dashboard/ProfileCompletion";
import StatsCards from "@/components/provider/dashboard/StatsCards";
import InfoCard from "@/components/provider/dashboard/InfoCard";
import QuickActions from "@/components/provider/dashboard/QuickActions";

type Provider = {
  fullName: string;
  displayName: string;

  mobile: string;
  email: string;

  category: string;

  city: string;
  state: string;

  businessName: string;
  experience: string;

  serviceArea: string;
  price: string;

  specialization: string;
  languages: string;
  about: string;

  profilePhoto: string;

  rating: number;

  isVerified: boolean;
  isActive: boolean;
};

export default function ProviderDashboardPage() {
  const [provider, setProvider] =
    useState<Provider | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadProvider = async () => {
      try {
        const mobile =
          localStorage.getItem("providerMobile");

        if (!mobile) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          `/api/provider/me?mobile=${mobile}`
        );

        const data = await response.json();

        if (data.success) {
          setProvider(data.provider);
        } else {
          setProvider(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadProvider();
  }, []);
    if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#071424] text-white">
        Loading Dashboard...
      </main>
    );
  }

  if (!provider) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#071424] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Provider Not Found
          </h2>

          <p className="mt-2 text-gray-400">
            Please login again.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#071424] pb-28">
      <div className="mx-auto max-w-md px-4 py-5">

        {/* Header */}

        <HeaderCard provider={provider} />

        {/* Profile Completion */}

        <ProfileCompletion provider={provider} />

        {/* Stats */}

        <StatsCards
          earnings={0}
          bookings={0}
          rating={provider.rating || 0}
          notifications={0}
        />

        {/* Business Details */}

        <div className="mt-7">

          <h2 className="mb-4 text-xl font-bold text-white">
            Professional Details
          </h2>

          <div className="space-y-4">

            <InfoCard
              icon={<Briefcase size={22} />}
              title="Display Name"
              value={
                provider.displayName ||
                provider.fullName ||
                "-"
              }
            />

            <InfoCard
              icon={<Briefcase size={22} />}
              title="Business Name"
              value={provider.businessName || "-"}
            />

            <InfoCard
              icon={<MapPin size={22} />}
              title="Location"
              value={`${provider.city || "-"}, ${
                provider.state || "-"
              }`}
            />

            <InfoCard
              icon={<Briefcase size={22} />}
              title="Category"
              value={provider.category || "-"}
            />

            <InfoCard
              icon={<Briefcase size={22} />}
              title="Specialization"
              value={
                provider.specialization || "-"
              }
            />

            <InfoCard
              icon={<Languages size={22} />}
              title="Languages"
              value={provider.languages || "-"}
            />

            <InfoCard
              icon={<Briefcase size={22} />}
              title="Experience"
              value={provider.experience || "-"}
            />

            <InfoCard
              icon={<Wallet size={22} />}
              title="Consultation Fee"
              value={
                provider.price
                  ? `₹${provider.price}`
                  : "-"
              }
            />

            <InfoCard
              icon={<MapPin size={22} />}
              title="Service Area"
              value={
                provider.serviceArea || "-"
              }
            />

            <InfoCard
              icon={<Star size={22} />}
              title="Rating"
              value={`${provider.rating || 0}/5`}
            />

            <InfoCard
              icon={<BadgeCheck size={22} />}
              title="Verification"
              value={
                provider.isVerified
                  ? "Verified"
                  : "Pending"
              }
            />

          </div>

        </div>

        {/* About */}

        <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-5">

          <h2 className="text-lg font-bold text-white">
            About
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-300">
            {provider.about ||
              "No description added yet."}
          </p>

        </div>

        {/* Quick Actions */}

        <QuickActions />

      </div>
    </main>
  );
}