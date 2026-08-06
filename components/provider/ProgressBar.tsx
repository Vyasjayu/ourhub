"use client";

interface ProgressBarProps {
  progress: number;
}

const steps = [
  "Basic",
  "Professional",
  "Documents",
  "Bank",
  "Review",
];

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  const activeSteps = Math.ceil(progress / 20);

  return (
    <div className="mt-8">
      <div className="flex justify-between text-[11px]">
        {steps.map((item, index) => (
          <span
            key={item}
            className={
              activeSteps >= index + 1
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
          className="h-full rounded-full bg-yellow-400 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-2 text-right text-xs text-yellow-400">
        {progress}% Completed
      </p>
    </div>
  );
}