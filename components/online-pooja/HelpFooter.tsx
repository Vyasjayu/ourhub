"use client";

import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export default function HelpFooter() {
  return (
    <section className="mt-8 mb-8">

      <div className="rounded-[28px] border border-yellow-500/20 bg-gradient-to-br from-[#111827] via-[#0d1726] to-[#08121f] p-5 shadow-xl">

        {/* Heading */}

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/15">

            <Headphones
              className="text-yellow-400"
              size={24}
            />

          </div>

          <div>

            <h2 className="text-lg font-bold text-white">
              Need Help?
            </h2>

            <p className="text-sm text-gray-400">
              Our support team is always available.
            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-6 grid grid-cols-2 gap-3">

          <button className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 py-3 font-semibold text-white">

            <Phone size={18} />

            Call Now

          </button>

          <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#202d40] py-3 font-semibold text-white">

            <MessageCircle size={18} />

            WhatsApp

          </button>

        </div>

        {/* Trust */}

        <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">

          <div className="flex items-center gap-2">

            <ShieldCheck
              className="text-yellow-400"
              size={20}
            />

            <span className="font-semibold text-yellow-300">
              Safe & Trusted Booking
            </span>

          </div>

          <p className="mt-2 text-sm leading-6 text-gray-300">
            All Pandits are verified. Secure payment,
            live support and 100% transparent booking.
          </p>

        </div>

      </div>

    </section>
  );
}