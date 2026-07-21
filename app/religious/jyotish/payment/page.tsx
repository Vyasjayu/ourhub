"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const methods = [
  {
    id: "phonepe",
    name: "PhonePe",
    logo: "🟣",
    subtitle: "UPI Payment",
  },
  {
    id: "gpay",
    name: "Google Pay",
    logo: "🟢",
    subtitle: "UPI Payment",
  },
  {
    id: "paytm",
    name: "Paytm",
    logo: "🔵",
    subtitle: "Wallet & UPI",
  },
  {
    id: "upi",
    name: "Other UPI Apps",
    logo: "💳",
    subtitle: "BHIM / Any UPI",
  },
  {
    id: "card",
    name: "Credit / Debit Card",
    logo: "💳",
    subtitle: "Visa / MasterCard",
  },
  {
    id: "netbanking",
    name: "Net Banking",
    logo: "🏦",
    subtitle: "All Banks",
  },
];

export default function PaymentPage() {

  const [selected, setSelected] = useState("phonepe");

  return (

    <main className="min-h-screen bg-[#071321] flex justify-center">

      <div className="w-full max-w-[430px] bg-[#071321] text-white min-h-screen pb-28">

        {/* Header */}

        <header className="sticky top-0 z-50 h-16 bg-[#081423] border-b border-white/10 flex items-center px-4">

          <Link href="/religious/jyotish/checkout">
            <ArrowLeft />
          </Link>

          <h1 className="ml-4 text-xl font-bold">
            Payment
          </h1>

        </header>

        {/* Security */}

        <div className="m-4 bg-[#0d1b2a] rounded-3xl p-5 border border-green-500/20">

          <div className="flex items-center gap-3">

            <ShieldCheck className="text-green-500" />

            <div>

              <h2 className="font-bold">
                100% Secure Payment
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                SSL Encrypted & Secure
              </p>

            </div>

          </div>

        </div>

        {/* Total */}

        <div className="mx-4 bg-[#D4AF37] rounded-3xl p-6 text-[#071321]">

          <p>Total Amount</p>

          <h2 className="text-4xl font-bold mt-2">
            ₹643
          </h2>

        </div>

        {/* Methods */}

        <div className="px-4 mt-8">

          <h2 className="font-bold text-xl mb-4">

            Select Payment Method

          </h2>

          <div className="space-y-3">

            {methods.map((item) => (

              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`w-full rounded-2xl p-4 border flex justify-between items-center transition ${
                  selected === item.id
                    ? "border-[#D4AF37] bg-[#D4AF37]/10"
                    : "border-white/10 bg-[#0d1b2a]"
                }`}
              >

                <div className="flex items-center gap-4">

                  <div className="text-3xl">
                    {item.logo}
                  </div>

                  <div className="text-left">

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {item.subtitle}
                    </p>

                  </div>

                </div>

                {selected === item.id ? (
                  <CheckCircle2 className="text-[#D4AF37]" />
                ) : (
                  <div className="w-6 h-6 rounded-full border border-gray-500" />
                )}

              </button>

            ))}

          </div>

        </div>

        {/* Summary */}

        <div className="px-4 mt-8">

          <div className="bg-[#0d1b2a] rounded-3xl p-5 border border-white/10">

            <div className="flex justify-between mb-3">

              <span className="text-gray-400">
                Astrologer
              </span>

              <span>
                Rahul Sharma
              </span>

            </div>

            <div className="flex justify-between mb-3">

              <span className="text-gray-400">
                Consultation
              </span>

              <span>
                Video Call
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-400">
                Date
              </span>

              <span>
                24 Jul • 10:00 AM
              </span>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-[#071321]/95 backdrop-blur">

          <div className="w-full max-w-[430px] p-4">

            <Link
              href="/religious/jyotish/success"
              className="h-14 rounded-2xl bg-[#D4AF37] text-[#071321] font-bold flex items-center justify-center"
            >

              Pay ₹643

            </Link>

          </div>

        </div>

      </div>

    </main>

  );

}