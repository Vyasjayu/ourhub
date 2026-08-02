"use client";

import { useEffect, useState } from "react";

import {
  Briefcase,
  MapPin,
  User,
  Wallet,
} from "lucide-react";

import HeaderCard from "@/components/provider/dashboard/HeaderCard";
// import ProfileCompletion from "@/components/provider/dashboard/ProfileCompletion";
import StatsCards from "@/components/provider/dashboard/StatsCards";
import InfoCard from "@/components/provider/dashboard/InfoCard";
import QuickActions from "@/components/provider/dashboard/QuickActions";
import ProfileCompletion from "@/components/provider/dashboard/ProfileCompletion";

type Provider = {
  fullName: string;
  mobile: string;
  email: string;

  category: string;

  city: string;
  state: string;

  businessName: string;
  experience: string;

  serviceArea: string;
  price: string;

  profilePhoto: string;

  isVerified: boolean;
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

        {/* Statistics */}

        <StatsCards
          earnings={0}
          bookings={0}
          rating={0}
          notifications={0}
        />

        {/* Business Information */}

        <div className="mt-7">

          <h2 className="mb-4 text-xl font-bold text-white">
            Business Details
          </h2>

          <div className="space-y-4">

            <InfoCard
              icon={<Briefcase size={22} />}
              title="Business Name"
              value={provider.businessName || "-"}
            />

            <InfoCard
              icon={<MapPin size={22} />}
              title="Location"
              value={`${provider.city || "-"}, ${provider.state || "-"}`}
            />

            <InfoCard
              icon={<User size={22} />}
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
              icon={<Briefcase size={22} />}
              title="Service Area"
              value={provider.serviceArea || "-"}
            />

          </div>

        </div>

        {/* Quick Actions */}

        <QuickActions />
              </div>

    </main>
  );
}