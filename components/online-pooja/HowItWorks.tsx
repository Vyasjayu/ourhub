"use client";

import {
  CalendarDays,
  ClipboardList,
  CreditCard,
  Video,
  Gift,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Select Pooja",
    description: "Choose your desired pooja",
    icon: CalendarDays,
  },
  {
    number: "2",
    title: "Fill Details",
    description: "Enter name, gotra & details",
    icon: ClipboardList,
  },
  {
    number: "3",
    title: "Make Payment",
    description: "Secure payment options",
    icon: CreditCard,
  },
  {
    number: "4",
    title: "Pooja Performed",
    description: "Pandit performs pooja on time",
    icon: Video,
  },
  {
    number: "5",
    title: "Receive Blessings",
    description: "Get video & prasad at home",
    icon: Gift,
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-7">
      <div className="rounded-2xl border border-yellow-500/15 bg-[#080e14] p-3">
      {/* Heading */}
      <h2 className="text-center text-[18px] font-semibold text-yellow-400">
        ✣ How Online Pooja Works? ✣
      </h2>

      {/* Steps */}
      <div className="mt-5 flex justify-between">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="relative flex w-[19%] flex-col items-center text-center"
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-yellow-500/30
                  bg-[#0b1118]
                  shadow-[0_0_15px_rgba(255,193,7,0.06)]
                "
              >
                <Icon
                  size={21}
                  strokeWidth={1.8}
                  className="text-yellow-400"
                />
              </div>

              {/* Step Number */}
              <span
                className="
                  mt-[-5px]
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-400
                  text-[10px]
                  font-bold
                  text-black
                  shadow-[0_0_8px_rgba(255,193,7,0.2)]
                "
              >
                {step.number}
              </span>

              {/* Title */}
              <h3
                className="
                  mt-2
                  text-[10px]
                  font-semibold
                  leading-3
                  text-white
                "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-1
                  text-[8px]
                  leading-3
                  text-gray-500
                "
              >
                {step.description}
              </p>

              {/* Arrow */}
              {step.number !== "5" && (
                <span
                  className="
                    absolute
                    right-[-7px]
                    top-6
                    text-yellow-500/60
                  "
                >
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </section>
  );
}