"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

const zodiacSigns = [
  {
    id: 1,
    name: "Aries",
    hindi: "मेष",
    symbol: "♈",
    color: "text-red-400",
    bg: "bg-red-500/10",
    href: "/horoscope/aries",
  },
  {
    id: 2,
    name: "Taurus",
    hindi: "वृषभ",
    symbol: "♉",
    color: "text-green-400",
    bg: "bg-green-500/10",
    href: "/horoscope/taurus",
  },
  {
    id: 3,
    name: "Gemini",
    hindi: "मिथुन",
    symbol: "♊",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    href: "/horoscope/gemini",
  },
  {
    id: 4,
    name: "Cancer",
    hindi: "कर्क",
    symbol: "♋",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    href: "/horoscope/cancer",
  },
  {
    id: 5,
    name: "Leo",
    hindi: "सिंह",
    symbol: "♌",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    href: "/horoscope/leo",
  },
  {
    id: 6,
    name: "Virgo",
    hindi: "कन्या",
    symbol: "♍",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    href: "/horoscope/virgo",
  },
  {
    id: 7,
    name: "Libra",
    hindi: "तुला",
    symbol: "♎",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    href: "/horoscope/libra",
  },
  {
    id: 8,
    name: "Scorpio",
    hindi: "वृश्चिक",
    symbol: "♏",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    href: "/horoscope/scorpio",
  },
  {
    id: 9,
    name: "Sagittarius",
    hindi: "धनु",
    symbol: "♐",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    href: "/horoscope/sagittarius",
  },
  {
    id: 10,
    name: "Capricorn",
    hindi: "मकर",
    symbol: "♑",
    color: "text-slate-300",
    bg: "bg-slate-500/10",
    href: "/horoscope/capricorn",
  },
  {
    id: 11,
    name: "Aquarius",
    hindi: "कुंभ",
    symbol: "♒",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    href: "/horoscope/aquarius",
  },
  {
    id: 12,
    name: "Pisces",
    hindi: "मीन",
    symbol: "♓",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    href: "/horoscope/pisces",
  },
];

export default function Horoscope() {
  return (
    <section
      className="
        mt-6
        rounded-3xl
        border
        border-yellow-500/20
        bg-gradient-to-br
        from-[#0E1726]
        to-[#09111D]
        p-5
        shadow-xl
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Daily Horoscope
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Select Your Zodiac Sign
          </p>

        </div>

        <Sparkles
          className="text-yellow-400"
          size={28}
        />

      </div>

      {/* Zodiac Grid */}

      <div className="mt-6 grid grid-cols-2 gap-4">

        {zodiacSigns.map((sign) => (

          <Link
            key={sign.id}
            href={sign.href}
            className="
              rounded-2xl
              border
              border-yellow-500/10
              bg-[#111C30]
              p-4
              transition-all
              duration-300
              hover:border-yellow-400
              hover:scale-[1.02]
            "
          >
            <div
              className={`
                ${sign.bg}
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                text-3xl
                ${sign.color}
              `}
            >
              {sign.symbol}
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">
              {sign.name}
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              {sign.hindi}
            </p>

            <div
              className="
                mt-4
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-yellow-400
              "
            >
              Read Horoscope

              <ArrowRight size={16} />
            </div>

          </Link>

        ))}

      </div>

      {/* Bottom Banner */}

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-yellow-500/20
          bg-gradient-to-r
          from-yellow-500/10
          to-orange-500/10
          p-5
        "
      >

        <h3 className="text-lg font-bold text-white">
          Personalized Horoscope
        </h3>

        <p className="mt-2 text-sm leading-7 text-gray-300">
          Get accurate daily, weekly, monthly and yearly
          horoscope predictions prepared by experienced
          Vedic astrologers.
        </p>

        <Link
          href="/horoscope"
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-yellow-400
            to-yellow-500
            px-5
            py-3
            font-semibold
            text-black
          "
        >
          View All Horoscope

          <ArrowRight size={18} />
        </Link>

      </div>

    </section>
  );
}