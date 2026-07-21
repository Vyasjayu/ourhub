"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  User,
  Tag,
  CreditCard,
  Wallet,
  Landmark,
  Banknote,
  ChevronRight,
} from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  return (
    <main className="min-h-screen bg-[#071321] flex justify-center">

      <div className="w-full max-w-[430px] min-h-screen bg-[#071321] text-white pb-32">

        {/* Header */}

        <header className="sticky top-0 z-50 h-16 bg-[#081423] border-b border-white/10 flex items-center px-4">

          <Link href="/religious/booking">
            <ArrowLeft />
          </Link>

          <h1 className="ml-4 text-xl font-bold">
            Checkout
          </h1>

        </header>

        {/* Booking Summary */}

        <section className="p-4">

          <h2 className="font-bold text-lg mb-4">
            Booking Summary
          </h2>

          <div className="bg-[#0d1b2a] rounded-3xl p-5 border border-white/10">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-3xl">
                🛕
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Pt. Rajesh Sharma
                </h3>

                <p className="text-gray-400 text-sm">
                  15 Years Experience
                </p>

              </div>

            </div>

            <div className="mt-5 space-y-4">

              <div className="flex items-center gap-3">

                <Calendar className="text-[#D4AF37]" size={18} />

                <span>24 July 2026</span>

              </div>

              <div className="flex items-center gap-3">

                <Clock className="text-[#D4AF37]" size={18} />

                <span>10:00 AM</span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="text-[#D4AF37]" size={18} />

                <span>Indore, Madhya Pradesh</span>

              </div>

            </div>

          </div>

        </section>

        {/* Address */}

        <section className="px-4">

          <h2 className="font-bold text-lg mb-4">
            Service Address
          </h2>

          <div className="bg-[#0d1b2a] rounded-3xl p-5 border border-white/10">

            <div className="flex gap-3">

              <User className="text-[#D4AF37]" />

              <div>

                <h3 className="font-semibold">
                  Jayant Vyas
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Vijay Nagar, Indore,
                  Madhya Pradesh - 452001
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Coupon */}

        <section className="px-4 mt-6">

          <h2 className="font-bold text-lg mb-4">
            Coupon
          </h2>

          <button className="w-full h-14 bg-[#0d1b2a] rounded-2xl border border-white/10 px-4 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Tag className="text-[#D4AF37]" />

              <span>Apply Coupon</span>

            </div>

            <ChevronRight />

          </button>

        </section>

        {/* Payment */}

        <section className="px-4 mt-6">

          <h2 className="font-bold text-lg mb-4">
            Payment Method
          </h2>

          <div className="space-y-3">

            {[
              {
                id: "upi",
                title: "UPI",
                icon: Wallet,
              },
              {
                id: "card",
                title: "Credit / Debit Card",
                icon: CreditCard,
              },
              {
                id: "netbanking",
                title: "Net Banking",
                icon: Landmark,
              },
              {
                id: "cash",
                title: "Cash After Service",
                icon: Banknote,
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <button
                  key={item.id}
                  onClick={() =>
                    setPaymentMethod(item.id)
                  }
                  className={`w-full h-14 rounded-2xl border flex items-center justify-between px-4 transition ${
                    paymentMethod === item.id
                      ? "border-[#D4AF37] bg-[#D4AF37]/10"
                      : "border-white/10 bg-[#0d1b2a]"
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <Icon
                      className="text-[#D4AF37]"
                      size={20}
                    />

                    <span>{item.title}</span>

                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border-2 ${
                      paymentMethod === item.id
                        ? "border-[#D4AF37] bg-[#D4AF37]"
                        : "border-gray-500"
                    }`}
                  />

                </button>

              );
            })}

          </div>

        </section>

        {/* Price */}

        <section className="px-4 mt-6">

          <h2 className="font-bold text-lg mb-4">
            Price Details
          </h2>

          <div className="bg-[#0d1b2a] rounded-3xl border border-white/10 p-5 space-y-4">

            <div className="flex justify-between">
              <span>Service Charge</span>
              <span>₹999</span>
            </div>

            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹49</span>
            </div>

            <div className="flex justify-between">
              <span>GST</span>
              <span>₹95</span>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between text-xl font-bold">

              <span>Total</span>

              <span className="text-[#D4AF37]">
                ₹1143
              </span>

            </div>

          </div>

        </section>

        {/* Bottom */}

        <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-[#071321]/95 backdrop-blur">

          <div className="w-full max-w-[430px] p-4">

            <Link
              href="/religion/payment"
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