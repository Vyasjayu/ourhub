"use client";

import {
  Home,
  Wrench,
  Car,
  Monitor,
  Tractor,
  Building2,
  Plane,
  Landmark,
} from "lucide-react";
import { FaOm } from "react-icons/fa6";

const categories = [
  { icon: FaOm, label: "Religious", color: "#ff9c2b" },
  { icon: Plane, label: "Travel", color: "#9acd32" },
  { icon: Monitor, label: "Software", color: "#00d9ff" },
  { icon: Building2, label: "Construction", color: "#f5a623" },
  { icon: Car, label: "Automobile", color: "#ff4d4f" },
  { icon: Tractor, label: "Agriculture", color: "#3fdc4d" },
  { icon: Home, label: "Home Service", color: "#ff6a3d" },
  { icon: Wrench, label: "Tools", color: "#13d8ff" },
];

export default function CircularCategory() {
  const radius = 140;

  return (
    <div className="flex justify-center items-center py-10 bg-[#071424] overflow-hidden">

      {/* Responsive Circle */}
      <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px]">

        {/* Outer Gradient Ring */}
        <div
          className="absolute inset-0 rounded-full p-1"
          style={{
            background:
              "conic-gradient(#0aefff,#0aefff,#ffd700,#ffd700,#0aefff)",
          }}
        >
          <div className="w-full h-full rounded-full bg-[#071424]" />
        </div>

        {/* Inner Ring */}
        <div className="absolute inset-9 rounded-full border-4 border-white/80" />

        {/* Center Circle */}
        <div className="absolute left-1/2 top-1/2 w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-[#071424] border-4 border-yellow-500 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">

          <div className="grid grid-cols-2 gap-4">
            <Landmark size={36} color="#f8c64f" />
            <Wrench size={36} color="#00d8ff" />
            <Home size={36} color="#2d7eff" />
            <Monitor size={36} color="#00e1ff" />
          </div>

        </div>

        {/* Category Icons */}
        {categories.map((item, index) => {
          const angle =
            (index / categories.length) * Math.PI * 2 - Math.PI / 2;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
              }}
            >
              <div className="flex flex-col items-center">

                <div
                  className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border shadow-xl"
                  style={{
                    background: item.color,
                    boxShadow: `0 0 18px ${item.color}`,
                  }}
                >
                  <Icon size={30} color="white" />
                </div>

                <p className="mt-2 w-20 text-center text-[11px] sm:text-sm font-semibold text-white">
                  {item.label}
                </p>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}