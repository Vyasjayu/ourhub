"use client";

import {
  ShieldCheck,
  BadgeCheck,
  CreditCard,
  Headphones,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Verified Pandits",
    desc: "Experienced & Trusted Vedic Pandits",
  },
  {
    id: 2,
    icon: BadgeCheck,
    title: "100% Authentic Rituals",
    desc: "Traditional Pooja Vidhi & Samagri",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Secure Payments",
    desc: "Safe & Fast Online Transactions",
  },
  {
    id: 4,
    icon: Headphones,
    title: "24×7 Support",
    desc: "We're Always Here To Help",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mt-7">

      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-yellow-500/20
          bg-gradient-to-b
          from-[#0F1B2E]
          via-[#0B1625]
          to-[#08111C]
          p-5
          shadow-[0_0_30px_rgba(250,204,21,.08)]
        "
      >
        {/* Background Glow */}

        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

        {/* Heading */}

        <div className="mb-6 text-center">

          <h2 className="text-2xl font-bold text-yellow-400">
            Why Choose OurHub?
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Trusted by thousands of devotees across India.
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
                  rounded-2xl
                  border
                  border-yellow-500/15
                  bg-[#13233B]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-400
                  hover:shadow-[0_0_20px_rgba(250,204,21,.15)]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-yellow-500/15
                    transition
                    group-hover:scale-110
                  "
                >
                  <Icon
                    size={24}
                    className="text-yellow-400"
                  />
                </div>

                <h3 className="mt-4 text-sm font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}