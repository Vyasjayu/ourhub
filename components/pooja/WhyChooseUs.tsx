"use client";

import {
  ShieldCheck,
  BadgeIndianRupee,
  CalendarDays,
  Zap,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Pandits",
    subtitle: "Trusted & Experienced",
  },
  {
    icon: BadgeIndianRupee,
    title: "Fixed Pricing",
    subtitle: "No Hidden Charges",
  },
  {
    icon: CalendarDays,
    title: "Online Booking",
    subtitle: "Book in 2 Minutes",
  },
  {
    icon: Zap,
    title: "Same Day Service",
    subtitle: "Quick & Reliable",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    subtitle: "100% Safe & Secure",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
      mt-6
      rounded-3xl
      border
      border-[#2F3E50]
      bg-[#0C1623]
      overflow-hidden
      shadow-[0_0_25px_rgba(255,180,40,0.06)]
      "
    >
      {/* Heading */}

      <div className="flex items-center justify-center gap-3 py-5">

        <div className="h-px w-10 bg-gradient-to-r from-transparent to-yellow-500" />

        <span className="text-yellow-400 text-lg">⭐</span>

        <h2 className="text-[24px] font-semibold text-white">
          Why Choose Us
        </h2>

        <div className="h-px w-10 bg-gradient-to-l from-transparent to-yellow-500" />

      </div>

      {/* Features */}

      <div className="grid grid-cols-2 gap-3 px-4 pb-5">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
              rounded-2xl
              border
              border-[#334155]
              bg-[#111C2B]
              p-4
              flex
              gap-3
              items-start
              transition-all
              duration-300
              active:scale-95
              "
            >
              <div
                className="
                w-11
                h-11
                rounded-xl
                bg-[#1A2433]
                flex
                items-center
                justify-center
                "
              >
                <Icon
                  size={22}
                  className="text-[#F6C453]"
                />
              </div>

              <div>

                <h3 className="text-white text-[14px] font-semibold">
                  {item.title}
                </h3>

                <p className="text-[11px] text-gray-400 mt-1 leading-4">
                  {item.subtitle}
                </p>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}