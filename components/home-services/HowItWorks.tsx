"use client";

import {
  CalendarDays,
  CheckCircle2,
  Home,
  UserCheck,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose",
    subtitle: "Service",
    icon: Home,
  },
  {
    id: 2,
    title: "Book",
    subtitle: "A Time",
    icon: CalendarDays,
  },
  {
    id: 3,
    title: "Get",
    subtitle: "Expert",
    icon: UserCheck,
  },
  {
    id: 4,
    title: "Enjoy",
    subtitle: "Service",
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 pt-6">
      <h2 className="mb-5 text-[18px] font-extrabold text-white">
        How It Works
      </h2>

      <div className="flex items-start justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="flex flex-1 items-start justify-center"
            >
              {/* Step */}
              <div className="flex flex-col items-center">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#8d6a19] bg-[#0e1218]">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                    className="text-[#eabd3b]"
                  />
                </div>

                <p className="mt-2 text-center text-[9px] font-bold leading-[12px] text-white">
                  {step.title}
                  <br />
                  {step.subtitle}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <ChevronRight
                  size={13}
                  className="mt-[18px] shrink-0 text-gray-500"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}