"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Search, Check } from "lucide-react";

const locations = ["Indore, MP", "Ujjain, MP", "Ratlam, MP"];

export default function LocationSearch() {
  const [selectedLocation, setSelectedLocation] = useState("Indore, MP");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4">
      <div className="flex gap-3">
        {/* Location */}
        <div className="relative min-w-0 flex-1">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-12 w-full items-center gap-2 rounded-2xl border border-yellow-500/20 bg-[#0b1118] px-3"
          >
            <MapPin
              size={19}
              className="shrink-0 text-yellow-400"
            />

            <span className="truncate text-sm text-gray-200">
              {selectedLocation}
            </span>

            <ChevronDown
              size={17}
              className={`ml-auto shrink-0 text-yellow-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Location Dropdown */}
          {isOpen && (
            <div className="absolute left-0 right-0 top-[56px] z-50 overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#0b1118] shadow-2xl shadow-black/50">
              {locations.map((location) => {
                const isSelected = selectedLocation === location;

                return (
                  <button
                    key={location}
                    type="button"
                    onClick={() => {
                      setSelectedLocation(location);
                      setIsOpen(false);
                    }}
                    className="flex w-full items-center gap-3 border-b border-white/5 px-4 py-3 text-left last:border-b-0"
                  >
                    <MapPin
                      size={17}
                      className="text-yellow-400"
                    />

                    <span
                      className={`flex-1 text-sm ${
                        isSelected
                          ? "font-semibold text-yellow-400"
                          : "text-gray-200"
                      }`}
                    >
                      {location}
                    </span>

                    {isSelected && (
                      <Check
                        size={17}
                        className="text-yellow-400"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Search */}
        <div className="flex h-12 min-w-0 flex-1 items-center gap-2 rounded-2xl border border-yellow-500/20 bg-[#0b1118] px-3">
          <Search
            size={19}
            className="shrink-0 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Temple, Pooja..."
            className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  );
}