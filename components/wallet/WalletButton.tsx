"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Wallet } from "lucide-react";

export default function WalletButton() {
  const [wallet, setWallet] = useState(0);
  const [loading, setLoading] = useState(true);

  // Temporary
  // Later this will come from Login/User Session
  const phone = "8878632431";

  const loadWallet = async () => {
    try {
      const res = await fetch(`/api/wallet/${phone}`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setWallet(data.walletBalance);
      }
    } catch (error) {
      console.log("Wallet Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWallet();
  }, []);

  return (
    <Link href="/wallet">
      <div
        className="
          flex
          items-center
          gap-2
          rounded-full
          border
          border-yellow-400/30
          bg-yellow-400/10
          px-3
          py-2
          transition
          hover:bg-yellow-400/20
          active:scale-95
        "
      >
        <div
          className="
            rounded-full
            bg-yellow-400/20
            p-2
          "
        >
          <Wallet
            size={18}
            className="text-yellow-400"
          />
        </div>

        <div className="flex flex-col leading-none">
          <span
            className="
              text-[10px]
              uppercase
              text-gray-400
            "
          >
            Wallet
          </span>

          <span
            className="
              font-bold
              text-white
            "
          >
            {loading ? "..." : `₹${wallet}`}
          </span>
        </div>
      </div>
    </Link>
  );
}