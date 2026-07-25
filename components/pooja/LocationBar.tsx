"use client";

import { useState } from "react";
import { MapPin, ChevronDown, Check } from "lucide-react";

const cities = [
  "Indore, MP",
  "Ujjain, MP",
  "Ratlam, MP",
];

export default function LocationBar() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Selected Location */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-yellow-700/30
          bg-[#0E1723]
          px-4
          py-4
          shadow-lg
          active:scale-[0.98]
          transition
        "
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-yellow-400" />

          <span className="text-base font-medium text-white">
            {selectedCity}
          </span>
        </div>

        <ChevronDown
          className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            top-16
            left-0
            right-0
            z-50
            rounded-2xl
            border
            border-yellow-700/30
            bg-[#111C2B]
            shadow-2xl
            overflow-hidden
          "
        >
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => {
                setSelectedCity(city);
                setOpen(false);
              }}
              className="
                w-full
                flex
                items-center
                justify-between
                px-4
                py-4
                text-left
                hover:bg-[#1B2A3C]
                transition
              "
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-yellow-400" />

                <span className="text-white">
                  {city}
                </span>
              </div>

              {selectedCity === city && (
                <Check className="w-4 h-4 text-green-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}