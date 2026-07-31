"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Headphones,
  ChevronRight,
} from "lucide-react";

export default function HelpCard() {
  return (
    <section className="mt-7">

      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-yellow-500/20
          bg-gradient-to-br
          from-[#13233B]
          via-[#0E1B2E]
          to-[#08111C]
          p-6
          shadow-[0_0_35px_rgba(250,204,21,.08)]
        "
      >
        {/* Background Glow */}

        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl" />

        {/* Header */}

        <div className="relative flex items-center gap-4">

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-yellow-500/15
            "
          >
            <Headphones
              size={32}
              className="text-yellow-400"
            />
          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Need Help?
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Our support team is available 24×7
            </p>

          </div>

        </div>

        {/* Info */}

        <div
          className="
            mt-5
            rounded-2xl
            border
            border-yellow-500/15
            bg-white/5
            p-4
          "
        >
          <p className="text-sm leading-6 text-slate-300">
            Need assistance with booking a pooja or finding the right
            pandit? Contact us anytime. Our team will help you complete
            your booking quickly and securely.
          </p>
        </div>

        {/* Buttons */}

        <div className="mt-6 grid grid-cols-2 gap-4">

          {/* Call */}

          <Link
            href="tel:+918878632431"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-yellow-400
              to-yellow-500
              py-3.5
              font-semibold
              text-[#071424]
              transition
              hover:scale-[1.02]
            "
          >
            <Phone size={18} />

            Call Now
          </Link>

          {/* WhatsApp */}

          <Link
            href="https://wa.me/918878632431"
            target="_blank"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-green-500/30
              bg-green-500/10
              py-3.5
              font-semibold
              text-green-400
              transition
              hover:border-green-400
              hover:bg-green-500/20
            "
          >
            <MessageCircle size={18} />

            WhatsApp
          </Link>

        </div>

        {/* Bottom CTA */}

        <button
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-yellow-500/20
            bg-white/5
            py-3
            text-sm
            font-semibold
            text-yellow-400
            transition
            hover:border-yellow-400
            hover:bg-yellow-500/10
          "
        >
          View Help Center

          <ChevronRight size={18} />
        </button>

      </div>

    </section>
  );
}