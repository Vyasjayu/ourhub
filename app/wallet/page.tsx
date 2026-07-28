"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Wallet,
  ArrowLeft,
  Plus,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

export default function WalletPage() {
  const router = useRouter();

  const phone = "8878632431"; // Temporary

  const [loading, setLoading] = useState(true);

  const [wallet, setWallet] = useState(0);

  const [transactions, setTransactions] = useState<any[]>([]);

  const loadWallet = async () => {
    try {
      setLoading(true);

      const res = await fetch(`/api/wallet/${phone}`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setWallet(data.walletBalance);

        setTransactions(data.transactions || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWallet();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen pb-10">
        {/* HEADER */}

        <div
          className="
          sticky
          top-0
          z-20
          flex
          items-center
          justify-between
          px-4
          py-4
          bg-[#020617]
          border-b
          border-white/10
        "
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="rounded-full bg-white/10 p-2"
            >
              <ArrowLeft size={20} />
            </button>

            <div>
              <h1 className="text-lg font-bold text-white">
                My Wallet
              </h1>

              <p className="text-xs text-gray-400">
                OurHub Wallet
              </p>
            </div>
          </div>

          <button
            onClick={loadWallet}
            className="rounded-full bg-white/10 p-2"
          >
            <RefreshCw size={18} />
          </button>
        </div>

        {/* WALLET CARD */}

        <div className="p-4">
          <div
            className="
            rounded-3xl
            border
            border-yellow-500/30
            bg-gradient-to-br
            from-yellow-500/20
            to-[#111C30]
            p-6
          "
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-yellow-400/20 p-4">
                <Wallet
                  className="text-yellow-400"
                  size={34}
                />
              </div>

              <div>
                <p className="text-gray-300 text-sm">
                  Available Balance
                </p>

                <h2 className="text-4xl font-black text-yellow-400">
                  {loading ? "..." : `₹${wallet}`}
                </h2>
              </div>
            </div>

            <button
              onClick={() =>
                router.push("/payment?amount=100&minutes=0")
              }
              className="
                mt-6
                w-full
                rounded-2xl
                bg-yellow-400
                py-4
                font-bold
                text-black
                flex
                justify-center
                items-center
                gap-2
              "
            >
              <Plus size={20} />
              Add Money
            </button>
          </div>

          {/* TRANSACTIONS */}

          <div className="mt-8">
            <h2 className="text-lg font-bold text-white mb-4">
              Recent Transactions
            </h2>

            {loading ? (
              <p className="text-gray-400">
                Loading...
              </p>
            ) : transactions.length === 0 ? (
              <div
                className="
                rounded-2xl
                border
                border-white/10
                bg-[#111C30]
                p-6
                text-center
              "
              >
                <p className="text-gray-400">
                  No Transactions Yet
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {transactions
                  .slice()
                  .reverse()
                  .map((item, index) => (
                    <div
                      key={index}
                      className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#111C30]
                      p-4
                      flex
                      justify-between
                      items-center
                    "
                    >
                      <div className="flex gap-3">
                        <div className="rounded-full bg-green-500/20 p-2">
                          <CheckCircle2
                            className="text-green-400"
                            size={20}
                          />
                        </div>

                        <div>
                          <p className="font-semibold text-white">
                            Wallet Recharge
                          </p>

                          <p className="text-xs text-gray-400">
                            {item.paymentId}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-green-400">
                          +₹{item.amount}
                        </p>

                        <p className="text-xs text-gray-400">
                          {item.status}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}