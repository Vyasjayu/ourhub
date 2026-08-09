import {
  CalendarDays,
  Gift,
  Landmark,
  Flower2,
  UserRound,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Select Pooja",
    description: "Choose your desired pooja",
    icon: Flower2,
  },
  {
    number: "2",
    title: "Select Temple",
    description: "Pick a temple near you",
    icon: Landmark,
  },
  {
    number: "3",
    title: "Pick Date & Time",
    description: "Choose suitable slot",
    icon: CalendarDays,
  },
  {
    number: "4",
    title: "Pandit Performs",
    description: "Pooja performed at temple",
    icon: UserRound,
  },
  {
    number: "5",
    title: "Receive Blessings",
    description: "Get prasad & blessings",
    icon: Gift,
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-7 px-4">
      <h2 className="text-center text-[18px] font-semibold text-yellow-400">
        ✣ How Offline Pooja Works? ✣
      </h2>

      <div className="mt-5 flex justify-between">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="relative flex w-[19%] flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-[#0b1118]">
                <Icon
                  size={21}
                  strokeWidth={1.8}
                  className="text-yellow-400"
                />
              </div>

              {/* Step Number */}
              <span className="mt-[-5px] flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-bold text-black">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="mt-2 text-[10px] font-semibold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-[8px] leading-3 text-gray-500">
                {step.description}
              </p>

              {/* Arrow */}
              {step.number !== "5" && (
                <span className="absolute right-[-7px] top-6 text-yellow-500/60">
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}