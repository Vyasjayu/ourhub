"use client";

import { X } from "lucide-react";
import { allPoojas } from "@/data/allPooja";
import PoojaCard from "./PoojaCard";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AllPoojaSheet({
  open,
  onClose,
}: Props) {
  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Sheet */}

      <div
        className={`
          fixed
          bottom-0
          left-1/2
          z-50
          w-full
          max-w-[430px]
          -translate-x-1/2
          rounded-t-[30px]
          border
          border-yellow-500/20
          bg-[#081018]
          transition-transform
          duration-500
          ${
            open
              ? "translate-y-0"
              : "translate-y-full"
          }
        `}
      >
        {/* Handle */}

        <div className="flex justify-center py-3">
          <div className="h-1.5 w-16 rounded-full bg-slate-500" />
        </div>

        {/* Header */}

        <div className="flex items-center justify-between px-5 pb-4">

          <h2 className="text-xl font-bold text-yellow-400">
            All Pooja Services
          </h2>

          <button
            onClick={onClose}
            className="rounded-full bg-yellow-500/10 p-2"
          >
            <X
              size={22}
              className="text-yellow-400"
            />
          </button>

        </div>

        {/* Grid */}

        <div className="max-h-[70vh] overflow-y-auto px-5 pb-8">

          <div className="grid grid-cols-4 gap-4">

            {allPoojas.map((item) => (
              <PoojaCard
                key={item.id}
                {...item}
              />
            ))}

          </div>

        </div>

      </div>
    </>
  );
}