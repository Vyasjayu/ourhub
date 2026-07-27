"use client";

import Link from "next/link";
import {
  Heart,
  Gem,
  Home,
  Hash,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Kundli Matching",
    description: "Marriage Compatibility Report",
    price: "₹199",
    icon: Heart,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    href: "/services/kundli-matching",
  },
  {
    id: 2,
    title: "Mangal Dosh Check",
    description: "Complete Mangal Analysis",
    price: "₹149",
    icon: Sparkles,
    color: "text-red-400",
    bg: "bg-red-500/10",
    href: "/services/mangal-dosh",
  },
  {
    id: 3,
    title: "Gemstone Suggestion",
    description: "Lucky Gem Recommendation",
    price: "₹299",
    icon: Gem,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    href: "/services/gemstone",
  },
  {
    id: 4,
    title: "Numerology Report",
    description: "Lucky Number Prediction",
    price: "₹249",
    icon: Hash,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    href: "/services/numerology",
  },
  {
    id: 5,
    title: "Vastu Consultation",
    description: "Home & Office Vastu",
    price: "₹399",
    icon: Home,
    color: "text-green-400",
    bg: "bg-green-500/10",
    href: "/services/vastu",
  },
];

export default function PremiumServices() {
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
            Premium Services
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Personalized Astrology Reports
          </p>

        </div>

        <span
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
          PREMIUM
        </span>

      </div>

      {/* Cards */}

      <div className="mt-6 space-y-4">

        {services.map((service) => {

          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="
                rounded-2xl
                border
                border-yellow-500/20
                bg-[#111C30]
                p-5
                transition-all
                duration-300
                hover:border-yellow-400
              "
            >
              <div className="flex items-start justify-between">

                <div className="flex gap-4">

                  <div
                    className={`
                      ${service.bg}
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                    `}
                  >
                    <Icon
                      size={28}
                      className={service.color}
                    />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {service.description}
                    </p>

                    <p className="mt-3 text-xl font-bold text-yellow-400">
                      {service.price}
                    </p>

                  </div>

                </div>

              </div>

              <Link
                href={service.href}
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-yellow-400
                  to-yellow-500
                  py-3
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Book Service

                <ArrowRight size={18} />
              </Link>

            </div>
          );
        })}

      </div>

      {/* Bottom Banner */}

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
          Need a Complete Astrology Report?
        </h3>

        <p className="mt-2 text-sm leading-7 text-gray-300">
          Get a detailed report covering Career, Marriage,
          Finance, Health, Education, Business, and Future
          Predictions with personalized remedies.
        </p>

        <Link
          href="/reports"
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-green-500
            px-5
            py-3
            font-semibold
            text-white
          "
        >
          View Reports

          <ArrowRight size={18} />
        </Link>

      </div>

    </section>
  );
}