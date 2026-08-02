"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Wallet,
  Users,
  Star,
} from "lucide-react";

export default function ProviderLandingPage() {
  return (
    <main className="min-h-screen bg-[#071424] text-white">

      {/* Hero */}
      <section className="px-6 pt-10 pb-12">
        <div className="mx-auto max-w-md">

          <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400 border border-yellow-400/20">
            OURHUB PROVIDER PROGRAM
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight">
            Become an
            <span className="text-yellow-400"> OurHub Provider</span>
          </h1>

          <p className="mt-4 text-gray-400 leading-7">
            Join thousands of verified professionals and receive genuine
            customer bookings from your city.
          </p>

          <Link
            href="/provider/category"
            className="mt-8 flex h-14 items-center justify-center rounded-2xl bg-yellow-400 text-lg font-bold text-black transition hover:scale-[1.02]"
          >
            Become a Provider
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>
      </section>

      {/* Stats */}

      <section className="px-6">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-3">

          <StatCard number="10K+" label="Customers" />
          <StatCard number="500+" label="Providers" />
          <StatCard number="25+" label="Services" />

        </div>
      </section>

      {/* Benefits */}

      <section className="px-6 py-12">

        <div className="mx-auto max-w-md space-y-4">

          <BenefitCard
            icon={<Users className="h-6 w-6 text-yellow-400" />}
            title="Daily Customer Leads"
            desc="Receive booking requests from customers near your location."
          />

          <BenefitCard
            icon={<Wallet className="h-6 w-6 text-yellow-400" />}
            title="Secure Payments"
            desc="Get payments directly into your bank account."
          />

          <BenefitCard
            icon={<Briefcase className="h-6 w-6 text-yellow-400" />}
            title="Grow Your Business"
            desc="Increase bookings and expand your professional reach."
          />

          <BenefitCard
            icon={<BadgeCheck className="h-6 w-6 text-yellow-400" />}
            title="Verified Profile"
            desc="Build trust with customers through verified provider accounts."
          />

        </div>

      </section>

      {/* Rating */}

      <section className="px-6 pb-14">

        <div className="mx-auto max-w-md rounded-3xl border border-yellow-400/20 bg-white/5 p-6 text-center">

          <div className="flex justify-center gap-1">

            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

          </div>

          <h3 className="mt-4 text-xl font-bold">
            Trusted by Providers
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Start receiving bookings and grow your income with OurHub Services.
          </p>

          <Link
            href="/provider/category"
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-yellow-400 font-bold text-black"
          >
            Get Started
          </Link>

        </div>

      </section>

    </main>
  );
}

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function BenefitCard({
  icon,
  title,
  desc,
}: BenefitCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        {desc}
      </p>

    </div>
  );
}

function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">

      <h3 className="text-2xl font-bold text-yellow-400">
        {number}
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        {label}
      </p>

    </div>
  );
}