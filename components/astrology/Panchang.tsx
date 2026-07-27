"use client";

import {
  Sun,
  Moon,
  Clock,
  Star,
  CalendarDays,
  Sunrise,
} from "lucide-react";

interface PanchangProps {
  tithi?: string;
  nakshatra?: string;
  rahuKaal?: string;
  sunrise?: string;
  sunset?: string;
  abhijitMuhurat?: string;
}

export default function Panchang({
  tithi = "Ekadashi",
  nakshatra = "Rohini",
  rahuKaal = "01:30 PM - 03:00 PM",
  sunrise = "06:02 AM",
  sunset = "06:48 PM",
  abhijitMuhurat = "11:58 AM - 12:46 PM",
}: PanchangProps) {
  const items = [
    {
      title: "Tithi",
      value: tithi,
      icon: CalendarDays,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Nakshatra",
      value: nakshatra,
      icon: Star,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "Rahu Kaal",
      value: rahuKaal,
      icon: Clock,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
    {
      title: "Sunrise",
      value: sunrise,
      icon: Sunrise,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      title: "Sunset",
      value: sunset,
      icon: Sun,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      title: "Abhijit Muhurat",
      value: abhijitMuhurat,
      icon: Moon,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
  ];

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
            Today's Panchang
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Daily Hindu Calendar
          </p>

        </div>

        <div
          className="
            rounded-full
            bg-yellow-500/10
            px-3
            py-1
            text-xs
            font-semibold
            text-yellow-400
          "
        >
          LIVE
        </div>

      </div>

      {/* Grid */}

      <div className="mt-6 grid grid-cols-2 gap-4">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-yellow-500/10
                bg-[#111C30]
                p-4
                transition-all
                duration-300
                hover:border-yellow-400
              "
            >
              <div
                className={`
                  ${item.bg}
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                `}
              >
                <Icon
                  size={24}
                  className={item.color}
                />
              </div>

              <p className="mt-4 text-sm text-gray-400">
                {item.title}
              </p>

              <h3 className="mt-2 text-sm font-bold leading-6 text-white">
                {item.value}
              </h3>
            </div>
          );
        })}

      </div>

      {/* Bottom Card */}

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-green-500/20
          bg-gradient-to-r
          from-green-500/10
          to-emerald-500/10
          p-5
        "
      >
        <h3 className="text-lg font-bold text-white">
          शुभ समय
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-300">
          आज शुभ कार्य करने के लिए{" "}
          <span className="font-semibold text-green-400">
            {abhijitMuhurat}
          </span>{" "}
          सबसे उत्तम समय माना जाता है।
        </p>

        <div className="mt-4 rounded-xl bg-[#111C30] p-3">
          <p className="text-sm text-gray-300">
            🌸 पंचांग की जानकारी प्रतिदिन अपडेट की जाती है ताकि आपको
            सही मुहूर्त और शुभ समय मिल सके।
          </p>
        </div>
      </div>
    </section>
  );
}