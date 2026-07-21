"use client";

import { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";

const cities = ["Indore, MP", "Ujjain, MP", "Ratlam, MP"];

export default function CitySelector() {
  const [city, setCity] = useState("Indore");

  return (
    <section className="px-4 mt-4">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <MapPin size={20} className="text-[#D4AF37]" />
        </div>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="
            w-full
            h-14
            pl-12
            pr-10
            rounded-2xl
            bg-[#0d1b2a]
            border
            border-white/10
            text-white
            outline-none
            appearance-none
            cursor-pointer
            hover:border-[#D4AF37]
            focus:border-[#D4AF37]
            transition-all
          "
        >
          {cities.map((item) => (
            <option
              key={item}
              value={item}
              className="bg-[#0d1b2a]"
            >
              {item}
            </option>
          ))}
        </select>

        <ChevronDown
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </section>
  );
}