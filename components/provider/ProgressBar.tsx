"use client";

interface ProgressBarProps {
  step: number;
}

const steps = [
  "Basic",
  "Professional",
  "Documents",
  "Bank",
  "Review",
];

export default function ProgressBar({
  step,
}: ProgressBarProps) {
  return (
    <div className="mt-8">

      <div className="flex justify-between text-[11px]">

        {steps.map((item, index) => (

          <span
            key={item}
            className={
              step >= index + 1
                ? "font-semibold text-yellow-400"
                : "text-gray-500"
            }
          >
            {item}
          </span>

        ))}

      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-yellow-400 transition-all duration-300"
          style={{
            width: `${step * 20}%`,
          }}
        />

      </div>

    </div>
  );
}