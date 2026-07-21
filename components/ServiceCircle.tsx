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
  const radius = 180;

  return (
    <div className="flex justify-center items-center py-20 bg-[#071424] min-h-screen">

      <div className="relative w-[500px] h-[500px]">

        {/* Outer Gradient Ring */}

        <div
          className="absolute inset-0 rounded-full p-[5px]"
          style={{
            background:
              "conic-gradient(#0aefff,#0aefff,#ffd700,#ffd700,#0aefff)",
          }}
        >
          <div className="w-full h-full rounded-full bg-[#071424]" />
        </div>

        {/* Inner Ring */}

        <div className="absolute inset-[50px] rounded-full border-[4px] border-white/80" />

        {/* Center */}

        <div className="absolute left-1/2 top-1/2 w-52 h-52 rounded-full bg-[#071424] border-4 border-yellow-500 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">

          <div className="grid grid-cols-2 gap-5">

            <Landmark size={45} color="#f8c64f" />
            <Wrench size={45} color="#00d8ff" />
            <Home size={45} color="#2d7eff" />
            <Monitor size={45} color="#00e1ff" />

          </div>

        </div>

        {/* Circular Icons */}

        {categories.map((item, index) => {
          const angle = (index / categories.length) * Math.PI * 2 - Math.PI / 2;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(${x}px,${y}px) translate(-50%,-50%)`,
              }}
            >
              <div className="flex flex-col items-center">

                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl border"
                  style={{
                    background: item.color,
                    boxShadow: `0 0 25px ${item.color}`,
                  }}
                >
                  <Icon size={34} color="white" />
                </div>

                <p className="text-white text-sm mt-3 text-center font-semibold w-28">
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