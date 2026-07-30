"use client";

import {
  BadgeCheck,
  ShieldCheck,
  Clock3,
  Headphones,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: BadgeCheck,
    title: "Verified Professionals",
    description:
      "Background verified and experienced service experts.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "100% safe online payments with trusted gateways.",
  },
  {
    id: 3,
    icon: Clock3,
    title: "Instant Booking",
    description:
      "Book any service in just a few seconds.",
  },
  {
    id: 4,
    icon: Headphones,
    title: "24×7 Support",
    description:
      "Our support team is always ready to help you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mt-8">

      {/* Heading */}

      <div className="mb-6 text-center">

        <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">
          WHY OURHUB
        </span>

        <h2 className="mt-3 text-2xl font-bold text-white">
          Why Choose OurHub?
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Trusted platform for all your everyday services.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-4">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="
                group
                rounded-3xl
                border
                border-yellow-500/20
                bg-[#111827]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-yellow-400/50
                hover:shadow-[0_0_25px_rgba(244,197,66,.18)]
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-yellow-500/20
                  to-yellow-300/5
                "
              >
                <Icon
                  size={28}
                  className="text-yellow-400 transition group-hover:scale-110"
                />
              </div>

              {/* Title */}

              <h3 className="mt-4 text-base font-bold text-white">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          );
        })}

      </div>

      {/* Bottom Banner */}

      <div
        className="
          mt-6
          rounded-3xl
          border
          border-yellow-500/20
          bg-gradient-to-r
          from-[#1B1307]
          via-[#111827]
          to-[#071424]
          p-5
        "
      >
        <h3 className="text-lg font-bold text-white">
          ⭐ Trusted by Thousands of Customers
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          From religious services to home repairs, automobile assistance,
          events, health, and more — OurHub connects you with verified
          professionals across every category.
        </p>

        <button
          className="
            mt-5
            rounded-full
            bg-yellow-400
            px-6
            py-3
            font-semibold
            text-[#071424]
            transition
            hover:scale-105
          "
        >
          Explore Services
        </button>
      </div>

    </section>
  );
}