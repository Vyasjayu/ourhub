"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Wallet,
  IndianRupee,
  ArrowDownLeft,
  Clock,
} from "lucide-react";

export default function WalletPage() {
  return (
    <main className="min-h-screen bg-[#071424] text-white">

      <div className="mx-auto max-w-md px-5 py-6">

        {/* Header */}

        <div className="flex items-center gap-4">

          <Link
            href="/provider/dashboard"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
          >
            <ArrowLeft size={22} />
          </Link>

          <h1 className="text-2xl font-bold">
            Wallet
          </h1>

        </div>

        {/* Balance Card */}

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-yellow-500 to-yellow-300 p-6 text-black">

          <div className="flex items-center gap-3">

            <Wallet size={28} />

            <span className="text-lg font-semibold">
              Available Balance
            </span>

          </div>

          <h2 className="mt-5 text-4xl font-bold">
            ₹0
          </h2>

          <p className="mt-2 text-sm">
            Your earnings will appear here.
          </p>

        </div>

        {/* Stats */}

        <div className="mt-6 grid grid-cols-2 gap-4">

          <div className="rounded-3xl bg-[#132234] p-5">

            <IndianRupee className="text-yellow-400" />

            <p className="mt-3 text-gray-400 text-sm">
              Total Earnings
            </p>

            <h3 className="mt-1 text-xl font-bold">
              ₹0
            </h3>

          </div>

          <div className="rounded-3xl bg-[#132234] p-5">

            <ArrowDownLeft className="text-green-400" />

            <p className="mt-3 text-gray-400 text-sm">
              Withdrawn
            </p>

            <h3 className="mt-1 text-xl font-bold">
              ₹0
            </h3>

          </div>

        </div>

        {/* Withdraw Button */}

        <button
          className="mt-8 h-14 w-full rounded-2xl bg-yellow-400 font-bold text-black"
        >
          Withdraw Money
        </button>

        {/* History */}

        <h2 className="mt-10 text-xl font-bold">
          Recent Transactions
        </h2>

        <div className="mt-5 rounded-3xl bg-[#132234] p-6">

          <div className="flex flex-col items-center">

            <Clock
              size={40}
              className="text-yellow-400"
            />

            <h3 className="mt-4 text-lg font-semibold">
              No Transactions
            </h3>

            <p className="mt-2 text-center text-sm text-gray-400">
              Your completed bookings and payments
              will appear here.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}