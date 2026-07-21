"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Wallet,
  Smartphone,
  CreditCard,
  Landmark,
  CheckCircle2,
} from "lucide-react";

const methods = [
  {
    id: "phonepe",
    name: "PhonePe",
    icon: "🟣",
    desc: "UPI Payment",
  },
  {
    id: "gpay",
    name: "Google Pay",
    icon: "🟢",
    desc: "UPI Payment",
  },
  {
    id: "paytm",
    name: "Paytm",
    icon: "🔵",
    desc: "Wallet & UPI",
  },
  {
    id: "upi",
    name: "Other UPI Apps",
    icon: "💳",
    desc: "BHIM / Any UPI",
  },
  {
    id: "card",
    name: "Credit / Debit Card",
    icon: "💳",
    desc: "Visa / MasterCard / RuPay",
  },
  {
    id: "netbanking",
    name: "Net Banking",
    icon: "🏦",
    desc: "All Banks",
  },
];

export default function PaymentPage() {
  const [selected, setSelected] = useState("phonepe");

  return (
    <main className="min-h-screen bg-[#071321] flex justify-center">

      <div className="w-full max-w-[430px] bg-[#071321] text-white min-h-screen pb-32">

        {/* Header */}

        <header className="sticky top-0 z-50 h-16 bg-[#081423] border-b border-white/10 flex items-center px-4">

          <Link href="/religious/checkout">
            <ArrowLeft />
          </Link>

          <h1 className="ml-4 text-xl font-bold">
            Payment
          </h1>

        </header>

        {/* Security */}

        <div className="m-4 bg-[#0d1b2a] rounded-3xl p-5 border border-green-500/20">

          <div className="flex items-center gap-3">

            <ShieldCheck className="text-green-400" />

            <div>

              <h2 className="font-bold">
                100% Secure Payment
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Your payment is encrypted and secure.
              </p>

            </div>

          </div>

        </div>

        {/* Amount */}

        <div className="mx-4 bg-[#D4AF37] rounded-3xl p-5 text-[#071321]">

          <p className="text-sm font-medium">
            Total Amount
          </p>

          <h2 className="text-4xl font-bold mt-2">
            ₹1143
          </h2>

        </div>

        {/* Payment Methods */}

        <div className="px-4 mt-8">

          <h2 className="font-bold text-lg mb-4">
            Choose Payment Method
          </h2>

          <div className="space-y-3">

            {methods.map((item) => (

              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`w-full rounded-2xl border p-4 flex justify-between items-center transition ${
                  selected === item.id
                    ? "border-[#D4AF37] bg-[#D4AF37]/10"
                    : "border-white/10 bg-[#0d1b2a]"
                }`}
              >

                <div className="flex items-center gap-4">

                  <div className="text-3xl">

                    {item.icon}

                  </div>

                  <div className="text-left">

                    <h3 className="font-semibold">

                      {item.name}

                    </h3>

                    <p className="text-sm text-gray-400">

                      {item.desc}

                    </p>

                  </div>

                </div>

                {selected === item.id ? (
                  <CheckCircle2
                    className="text-[#D4AF37]"
                    size={24}
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full border border-gray-500" />
                )}

              </button>

            ))}

          </div>

        </div>

        {/* Booking Summary */}

        <div className="px-4 mt-8">

          <div className="bg-[#0d1b2a] rounded-3xl p-5 border border-white/10">

            <div className="flex justify-between mb-3">
              <span className="text-gray-400">
                Service
              </span>

              <span>
                Griha Pravesh Puja
              </span>
            </div>

            <div className="flex justify-between mb-3">
              <span className="text-gray-400">
                Pandit
              </span>

              <span>
                Pt. Rajesh Sharma
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
              href="/religious/success"
              className="h-14 rounded-2xl bg-[#D4AF37] text-[#071321] font-bold flex items-center justify-center"
            >
              Pay ₹1143
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}