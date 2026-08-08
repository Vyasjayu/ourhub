"use client";

import {
  Home,
  CalendarDays,
  Users,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Perform Pooja",
    subtitle: "from Home",
  },
  {
    icon: CalendarDays,
    title: "Book Anytime",
    subtitle: "Anywhere",
  },
  {
    icon: Users,
    title: "Experienced &",
    subtitle: "Verified Pandits",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Safe",
    subtitle: "Transactions",
  },
];

export default function WhyChoose() {
  return (
    <section className="mt-8">

      <div className="overflow-hidden rounded-[28px] border border-yellow-500/20 bg-gradient-to-b from-[#111827] via-[#0f1725] to-[#0a1220] shadow-2xl">

        {/* Heading */}

        <div className="px-5 pt-6">

          <h2 className="text-center text-[21px] font-bold text-yellow-400">
            ✨ Why Choose Online Pooja? ✨
          </h2>

        </div>

        {/* Features */}

        <div className="mt-8 grid grid-cols-4">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex flex-col items-center px-2 pb-2 ${
                  index !== features.length - 1
                    ? "border-r border-yellow-500/20"
                    : ""
                }`}
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/30 bg-[#162132]">

                  <Icon
                    size={30}
                    className="text-yellow-400"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-5 text-center text-[15px] font-semibold leading-6 text-white">

                  {item.title}

                </h3>

                {/* Subtitle */}

                <p className="mt-2 text-center text-[14px] leading-5 text-gray-300">

                  {item.subtitle}

                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}