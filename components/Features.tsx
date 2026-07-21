"use client";

import {
  BadgeCheck,
  ShieldCheck,
  Clock3,
  Wallet,
  Headphones,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Verified Experts",
    desc: "100% Trusted Professionals",
    icon: BadgeCheck,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Secure Payments",
    desc: "Safe & Encrypted Transactions",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "24×7 Support",
    desc: "Always Ready To Help",
    icon: Headphones,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Fast Booking",
    desc: "Book Within Seconds",
    icon: Clock3,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Affordable Price",
    desc: "Best Deals & Offers",
    icon: Wallet,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "10K+ Customers",
    desc: "Growing Every Day",
    icon: Users,
    color: "from-indigo-500 to-violet-500",
  },
];

export default function Features() {
  return (
    <section className="py-12 px-5">

      <div className="max-w-md mx-auto">

        {/* Heading */}

        <div className="text-center mb-8">

          <h2 className="text-3xl font-bold text-white">
            Why Choose
            <span className="text-yellow-400"> OurHub?</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Trusted Platform for Every Service
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-4">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 hover:border-yellow-400 transition duration-300 hover:scale-105"
              >

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg mb-4`}
                >
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-white font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2 leading-6">
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