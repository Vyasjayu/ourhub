"use client";

import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
};

export default function InfoCard({
  icon,
  title,
  value,
}: Props) {
  return (
    <div
      className="
      flex
      items-center
      gap-4
      rounded-3xl
      border
      border-white/10
      bg-[#132234]
      p-5
      "
    >
      <div
        className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        bg-yellow-400/20
        text-yellow-400
        "
      >
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm text-gray-400">
          {title}
        </p>

        <h3 className="mt-1 text-base font-semibold text-white break-words">
          {value || "-"}
        </h3>
      </div>
    </div>
  );
}