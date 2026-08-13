"use client";

import {
  Home,
  CalendarDays,
  Users,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Perform Pooja",
    description: "Perform sacred pooja from the comfort of your home",
    icon: Home,
  },
  {
    title: "Book Anytime",
    description: "Choose your preferred pooja, date & time",
    icon: CalendarDays,
  },
  {
    title: "Verified Pandits",
    description: "Experienced & verified pandits perform your pooja",
    icon: Users,
  },
  {
    title: "Secure Booking",
    description: "Safe payments with instant booking confirmation",
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section className="mt-7">
      <div className="rounded-2xl border border-yellow-500/15 bg-[#080e14] p-3">

        {/* Heading */}
        <h2 className="text-center text-[18px] font-semibold text-yellow-400">
          ✣ Why Choose Online Pooja? ✣
        </h2>

        {/* Features */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-xl
                  border
                  border-white/5
                  bg-[#111923]
                  p-3
                "
              >
                <div className="flex items-start gap-2">

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-black/30
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      className="text-yellow-400"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[11px] font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[9px] leading-4 text-gray-400">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}