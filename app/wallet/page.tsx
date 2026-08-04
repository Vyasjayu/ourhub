"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Wallet,
  Plus,
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";

export default function WalletPage() {
  const router = useRouter();

  const transactions = [
    {
      id: 1,
      title: "Wallet Recharge",
      amount: "+₹500",
      date: "Today, 10:30 AM",
      type: "credit",
    },
    {
      id: 2,
      title: "Pandit Booking",
      amount: "-₹299",
      date: "Yesterday",
      type: "debit",
    },
    {
      id: 3,
      title: "Refund",
      amount: "+₹150",
      date: "20 Aug 2026",
      type: "credit",
    },
  ];

  return (
    <main className="min-h-screen bg-[#071424] pb-10 text-white">

      {/* Header */}

      <div className="sticky top-0 z-20 border-b border-white/10 bg-[#071424]/95 backdrop-blur">

        <div className="mx-auto flex max-w-md items-center gap-4 px-5 py-5">

          <button
            onClick={() => router.back()}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
          >
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-2xl font-bold">
            My Wallet
          </h1>

        </div>

      </div>

      <div className="mx-auto max-w-md px-5">

        {/* Wallet Card */}

        <div className="mt-6 rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-[#13233C] to-[#0B1527] p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-400">
                Available Balance
              </p>

              <h2 className="mt-2 text-4xl font-bold text-yellow-400">
                ₹0
              </h2>

            </div>

            <div className="rounded-2xl bg-yellow-400/10 p-4">

              <Wallet
                size={38}
                className="text-yellow-400"
              />

            </div>

          </div>

          <button
            className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 font-semibold text-black transition hover:bg-yellow-300"
          >

            <Plus size={22} />

            Add Money

          </button>

        </div>

        {/* Recent Transactions */}

        <div className="mt-8">

          <h2 className="mb-4 text-xl font-bold">
            Recent Transactions
          </h2>

          <div className="space-y-4">

            {transactions.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#13233C] p-4"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      item.type === "credit"
                        ? "bg-green-500/10"
                        : "bg-red-500/10"
                    }`}
                  >

                    {item.type === "credit" ? (

                      <ArrowDownLeft
                        className="text-green-400"
                        size={24}
                      />

                    ) : (

                      <ArrowUpRight
                        className="text-red-400"
                        size={24}
                      />

                    )}

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-400">
                      {item.date}
                    </p>

                  </div>

                </div>

                <span
                  className={`font-bold ${
                    item.type === "credit"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {item.amount}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}