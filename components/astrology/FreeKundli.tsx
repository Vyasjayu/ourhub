"use client";

import {
  ScrollText,
  Sparkles,
  Gift,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function FreeKundli() {
  return (
    <section
      className="
        mt-6
        overflow-hidden
        rounded-3xl
        border
        border-green-500/20
        bg-gradient-to-br
        from-[#0E1726]
        via-[#10213A]
        to-[#0A1422]
        shadow-xl
      "
    >
      {/* Top Banner */}

      <div
        className="
          relative
          overflow-hidden
          bg-gradient-to-r
          from-green-500/20
          via-emerald-500/10
          to-green-500/20
          p-6
        "
      >
        <div
          className="
            absolute
            -right-10
            -top-10
            h-36
            w-36
            rounded-full
            bg-green-400/10
            blur-3xl
          "
        />

        <div className="relative flex items-center justify-between">

          <div>

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-green-500/20
                px-3
                py-1
                text-xs
                font-semibold
                text-green-300
              "
            >
              <Gift size={14} />
              FREE SERVICE
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                text-white
              "
            >
              Free Janam Kundli
            </h2>

            <p
              className="
                mt-3
                max-w-xs
                leading-7
                text-gray-300
              "
            >
              Generate your detailed Birth Chart with
              planetary positions, doshas, yogas and
              personalized predictions.
            </p>

          </div>

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-green-500/10
            "
          >
            <ScrollText
              size={42}
              className="text-green-400"
            />
          </div>

        </div>

      </div>

      {/* Features */}

      <div className="grid grid-cols-2 gap-4 p-6">

        <div className="rounded-2xl bg-[#111C30] p-4">

          <Sparkles
            className="text-yellow-400"
            size={22}
          />

          <h3 className="mt-3 font-semibold text-white">
            Accurate Predictions
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Based on Vedic Astrology.
          </p>

        </div>

        <div className="rounded-2xl bg-[#111C30] p-4">

          <ScrollText
            className="text-blue-400"
            size={22}
          />

          <h3 className="mt-3 font-semibold text-white">
            PDF Report
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Download complete Kundli instantly.
          </p>

        </div>

      </div>

      {/* Included */}

      <div className="px-6">

        <div
          className="
            rounded-2xl
            border
            border-yellow-500/20
            bg-[#111C30]
            p-5
          "
        >
          <h3 className="text-lg font-bold text-white">
            What's Included?
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-300">

            <p>✅ Janam Kundli</p>

            <p>✅ Lagna Chart</p>

            <p>✅ Navamsa Chart</p>

            <p>✅ Planetary Positions</p>

            <p>✅ Mangal Dosh Check</p>

            <p>✅ Basic Future Prediction</p>

          </div>

        </div>

      </div>

      {/* CTA */}

      <div className="p-6">

        <Link
          href="/kundli"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-green-500
            to-emerald-500
            py-4
            text-lg
            font-bold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          Generate Free Kundli

          <ArrowRight size={20} />
        </Link>

      </div>

    </section>
  );
}