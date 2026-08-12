"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Wallet,
  IndianRupee,
  ArrowDownLeft,
  Clock,
} from "lucide-react";

interface Transaction {
  _id?: string;
  type: "credit" | "debit";
  amount: number;
  paymentId?: string;
  orderId?: string;
  status?: string;
  description?: string;
  createdAt?: string;
}

interface UserData {
  walletBalance: number;
  transactions?: Transaction[];
}

export default function WalletPage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWallet() {
      try {
        const res = await fetch("/api/user/me", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          console.error("Wallet fetch failed:", data);
          return;
        }

        setUser(data.user);
      } catch (error) {
        console.error("Wallet error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWallet();
  }, []);

  const balance = Number(user?.walletBalance || 0);

  const transactions = user?.transactions || [];

  const totalEarnings = transactions
    .filter((item) => item.type === "credit")
    .reduce((total, item) => total + Number(item.amount || 0), 0);

  const withdrawn = transactions
    .filter((item) => item.type === "debit")
    .reduce((total, item) => total + Number(item.amount || 0), 0);

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
            {loading ? "Loading..." : `₹${balance}`}
          </h2>

          <p className="mt-2 text-sm">
            Your wallet balance will appear here.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4">

          <div className="rounded-3xl bg-[#132234] p-5">
            <IndianRupee className="text-yellow-400" />

            <p className="mt-3 text-sm text-gray-400">
              Total Earnings
            </p>

            <h3 className="mt-1 text-xl font-bold">
              ₹{totalEarnings}
            </h3>
          </div>

          <div className="rounded-3xl bg-[#132234] p-5">
            <ArrowDownLeft className="text-green-400" />

            <p className="mt-3 text-sm text-gray-400">
              Withdrawn
            </p>

            <h3 className="mt-1 text-xl font-bold">
              ₹{withdrawn}
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

        {transactions.length === 0 ? (
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
                Your completed payments will appear here.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-5 space-y-3">
            {transactions
              .slice()
              .reverse()
              .map((transaction, index) => (
                <div
                  key={
                    transaction._id ||
                    transaction.paymentId ||
                    index
                  }
                  className="rounded-2xl bg-[#132234] p-4"
                >
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="font-semibold">
                        {transaction.description ||
                          (transaction.type === "credit"
                            ? "Wallet Recharge"
                            : "Withdrawal")}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {transaction.createdAt
                          ? new Date(
                              transaction.createdAt
                            ).toLocaleString("en-IN")
                          : ""}
                      </p>
                    </div>

                    <p
                      className={`font-bold ${
                        transaction.type === "credit"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {transaction.type === "credit"
                        ? "+"
                        : "-"}
                      ₹{transaction.amount}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </main>
  );
}