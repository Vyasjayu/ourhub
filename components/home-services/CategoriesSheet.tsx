"use client";

import {
  X,
  Wind,
  Sparkles,
  Wrench,
  Zap,
  Refrigerator,
  Hammer,
  Paintbrush,
  ShieldCheck,
} from "lucide-react";

interface CategoriesSheetProps {
  open: boolean;
  onClose: () => void;
}

const categories = [
  {
    title: "AC Repair",
    icon: Wind,
  },
  {
    title: "Cleaning",
    icon: Sparkles,
  },
  {
    title: "Plumbing",
    icon: Wrench,
  },
  {
    title: "Electrical",
    icon: Zap,
  },
  {
    title: "Appliance",
    icon: Refrigerator,
  },
  {
    title: "Carpentry",
    icon: Hammer,
  },
  {
    title: "Painting",
    icon: Paintbrush,
  },
  {
    title: "Sanitization",
    icon: ShieldCheck,
  },
];

export default function CategoriesSheet({
  open,
  onClose,
}: CategoriesSheetProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] max-w-[430px] mx-auto">
      {/* Overlay */}
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
        aria-label="Close categories"
      />

      {/* Sheet */}
      <div className="absolute bottom-0 left-0 w-full rounded-t-[28px] border-t border-[#3b3421] bg-[#0c1118] px-5 pb-8 pt-5">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-extrabold text-white">
              All Services
            </h2>
            <p className="mt-1 text-[11px] text-gray-500">
              Choose a service for your home
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171d25]"
          >
            <X size={18} className="text-gray-300" />
          </button>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-4 gap-3">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                onClick={onClose}
                className="flex flex-col items-center rounded-xl border border-[#292f38] bg-[#11161d] px-2 py-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8b681b]">
                  <Icon size={18} className="text-[#e9bc3b]" />
                </div>

                <span className="mt-2 text-center text-[9px] font-semibold text-gray-300">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}