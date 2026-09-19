
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  MapPin,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const locations = [
  "Indore, MP",
  "Ujjain, MP",
  "Ratlam, MP",
];

const locationHindiNames: Record<string, string> = {
  "Indore, MP": "इंदौर, MP",
  "Ujjain, MP": "उज्जैन, MP",
  "Ratlam, MP": "रतलाम, MP",
};

export default function LocationSearch() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const [selectedLocation, setSelectedLocation] =
    useState("Indore, MP");

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  /* =========================================================
     CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  ========================================================= */

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =========================================================
     FILTER LOCATIONS
     Supports English + Hindi search
  ========================================================= */

  const filteredLocations = locations.filter((location) => {
    const englishName = location.toLowerCase();
    const hindiName =
      locationHindiNames[location]?.toLowerCase() || "";

    const query = search.toLowerCase().trim();

    return (
      englishName.includes(query) ||
      hindiName.includes(query)
    );
  });

  /* =========================================================
     DISPLAY LOCATION
  ========================================================= */

  const getLocationName = (location: string) => {
    return isHindi
      ? locationHindiNames[location] || location
      : location;
  };

  return (
    <section
      ref={wrapperRef}
      className="relative z-50 px-4 pt-1"
    >
      {/* =====================================================
          SECTION LABEL
      ====================================================== */}

      <div className="mb-2.5 flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          <Sparkles
            size={11}
            className="text-[#DFAE45]"
          />

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
            {isHindi
              ? "अपनी पूजा खोजें"
              : "Find Your Pooja"}
          </span>
        </div>

        <span className="text-[8px] font-medium text-slate-700">
          {isHindi
            ? "अपना शहर चुनें"
            : "Select your city"}
        </span>
      </div>

      {/* =====================================================
          SEARCH ROW
      ====================================================== */}

      <div className="grid grid-cols-[0.95fr_1.05fr] gap-2.5">
        {/* =================================================
            LOCATION SELECTOR
        ================================================== */}

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            className={`
              group
              flex
              h-[54px]
              w-full
              items-center
              gap-2.5
              rounded-[20px]
              border
              px-3
              text-left
              shadow-[0_8px_30px_rgba(0,0,0,0.16)]
              backdrop-blur-xl
              transition-all
              duration-300
              ${
                isOpen
                  ? "border-[#DFAE45]/45 bg-[#0E1A29] shadow-[0_0_25px_rgba(223,174,69,0.08)]"
                  : "border-white/[0.07] bg-[#0A1521]/90 hover:border-[#DFAE45]/25"
              }
            `}
          >
            {/* Icon */}

            <span
              className={`
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                transition-all
                ${
                  isOpen
                    ? "bg-[#DFAE45]/15"
                    : "bg-[#DFAE45]/[0.07]"
                }
              `}
            >
              <MapPin
                size={17}
                strokeWidth={2}
                className="text-[#E7B94F]"
              />
            </span>

            {/* Location */}

            <span className="min-w-0 flex-1">
              <span className="block text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                {isHindi ? "स्थान" : "Location"}
              </span>

              <span className="mt-0.5 block truncate text-[12px] font-bold text-slate-200">
                {getLocationName(selectedLocation)}
              </span>
            </span>

            {/* Arrow */}

            <ChevronDown
              size={16}
              className={`
                shrink-0
                text-[#DFAE45]
                transition-transform
                duration-300
                ${isOpen ? "rotate-180" : ""}
              `}
            />

            {/* Bottom Highlight */}

            <span
              className={`
                absolute
                bottom-0
                left-6
                right-6
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#DFAE45]
                to-transparent
                transition-opacity
                ${
                  isOpen
                    ? "opacity-60"
                    : "opacity-0"
                }
              `}
            />
          </button>

          {/* =================================================
              LOCATION DROPDOWN
          ================================================== */}

          {isOpen && (
            <div
              className="
                absolute
                left-0
                right-0
                top-[61px]
                z-[100]
                overflow-hidden
                rounded-[23px]
                border
                border-[#DFAE45]/20
                bg-[#07121F]/98
                shadow-[0_25px_60px_rgba(0,0,0,0.55)]
                backdrop-blur-2xl
              "
            >
              {/* Dropdown Header */}

              <div className="border-b border-white/[0.06] p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                      {isHindi
                        ? "सेवा का स्थान"
                        : "Service Location"}
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500">
                      {isHindi
                        ? "जहाँ आपको सेवा चाहिए, वह स्थान चुनें"
                        : "Choose where you need the service"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/[0.04]
                      text-slate-500
                      transition
                      hover:text-white
                      active:scale-90
                    "
                    aria-label={
                      isHindi
                        ? "स्थान बंद करें"
                        : "Close locations"
                    }
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Dropdown Search */}

                <div className="mt-3 flex h-10 items-center gap-2 rounded-xl border border-white/[0.06] bg-black/20 px-3">
                  <Search
                    size={14}
                    className="text-slate-500"
                  />

                  <input
                    autoFocus
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder={
                      isHindi
                        ? "शहर खोजें..."
                        : "Search city..."
                    }
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      text-[11px]
                      text-white
                      outline-none
                      placeholder:text-slate-600
                    "
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="text-slate-500"
                      aria-label={
                        isHindi
                          ? "खोज साफ करें"
                          : "Clear search"
                      }
                    >
                      <X size={13} />
                    </button>
                  )}
                </div>
              </div>

              {/* Locations */}

              <div className="max-h-[190px] overflow-y-auto p-2">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((location) => {
                    const isSelected =
                      selectedLocation === location;

                    return (
                      <button
                        key={location}
                        type="button"
                        onClick={() => {
                          setSelectedLocation(location);
                          setIsOpen(false);
                          setSearch("");
                        }}
                        className={`
                          group
                          relative
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-2xl
                          px-3
                          py-3
                          text-left
                          transition-all
                          duration-200
                          ${
                            isSelected
                              ? "bg-[#DFAE45]/[0.08]"
                              : "hover:bg-white/[0.035]"
                          }
                        `}
                      >
                        {/* Location Icon */}

                        <span
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            ${
                              isSelected
                                ? "bg-[#DFAE45]/15"
                                : "bg-white/[0.04]"
                            }
                          `}
                        >
                          <MapPin
                            size={15}
                            className={
                              isSelected
                                ? "text-[#E7B94F]"
                                : "text-slate-500"
                            }
                          />
                        </span>

                        {/* Text */}

                        <div className="min-w-0 flex-1">
                          <p
                            className={`
                              truncate
                              text-[12px]
                              font-semibold
                              ${
                                isSelected
                                  ? "text-[#F3C75F]"
                                  : "text-slate-300"
                              }
                            `}
                          >
                            {getLocationName(location)}
                          </p>

                          <p className="mt-0.5 text-[8px] text-slate-600">
                            {isHindi
                              ? "ऑफलाइन पूजा उपलब्ध है"
                              : "Offline pooja available"}
                          </p>
                        </div>

                        {/* Selected */}

                        {isSelected && (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DFAE45]/15">
                            <Check
                              size={14}
                              strokeWidth={2.5}
                              className="text-[#F3C75F]"
                            />
                          </span>
                        )}

                        {/* Hover Arrow */}

                        {!isSelected && (
                          <span className="text-[13px] text-slate-700 transition group-hover:translate-x-0.5 group-hover:text-[#DFAE45]">
                            →
                          </span>
                        )}
                      </button>
                    );
                  })
                ) : (
                  <div className="px-4 py-7 text-center">
                    <MapPin
                      size={22}
                      className="mx-auto text-slate-700"
                    />

                    <p className="mt-2 text-[11px] font-semibold text-slate-400">
                      {isHindi
                        ? "कोई स्थान नहीं मिला"
                        : "No location found"}
                    </p>

                    <p className="mt-1 text-[9px] text-slate-600">
                      {isHindi
                        ? "किसी दूसरे शहर का नाम आज़माएं।"
                        : "Try another city name."}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Accent */}

              <div className="h-px bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent" />
            </div>
          )}
        </div>

        {/* =================================================
            SEARCH BOX
        ================================================== */}

        <div
          className="
            group
            relative
            flex
            h-[54px]
            min-w-0
            items-center
            gap-2.5
            rounded-[20px]
            border
            border-white/[0.07]
            bg-[#0A1521]/90
            px-3
            shadow-[0_8px_30px_rgba(0,0,0,0.16)]
            backdrop-blur-xl
            transition-all
            duration-300
            focus-within:border-[#DFAE45]/40
            focus-within:bg-[#0E1A29]
            focus-within:shadow-[0_0_25px_rgba(223,174,69,0.07)]
          "
        >
          {/* Search Icon */}

          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-white/[0.035]
            "
          >
            <Search
              size={17}
              strokeWidth={2}
              className="text-slate-400 transition-colors group-focus-within:text-[#DFAE45]"
            />
          </span>

          {/* Input */}

          <div className="min-w-0 flex-1">
            <span className="block text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-600">
              {isHindi ? "खोजें" : "Discover"}
            </span>

            <input
              type="text"
              placeholder={
                isHindi
                  ? "मंदिर, पूजा..."
                  : "Temple, Pooja..."
              }
              className="
                mt-0.5
                w-full
                min-w-0
                bg-transparent
                text-[11px]
                font-medium
                text-white
                outline-none
                placeholder:text-slate-600
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          QUICK SEARCH CHIPS
      ====================================================== */}

      <div className="mt-2.5 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {[
          {
            en: "Ganesh Pooja",
            hi: "गणेश पूजा",
          },
          {
            en: "Rudrabhishek",
            hi: "रुद्राभिषेक",
          },
          {
            en: "Griha Pravesh",
            hi: "गृह प्रवेश",
          },
          {
            en: "Satyanarayan",
            hi: "सत्यनारायण",
          },
        ].map((item) => (
          <button
            key={item.en}
            type="button"
            className="
              shrink-0
              rounded-full
              border
              border-white/[0.06]
              bg-white/[0.025]
              px-3
              py-1.5
              text-[9px]
              font-medium
              text-slate-500
              transition
              hover:border-[#DFAE45]/20
              hover:bg-[#DFAE45]/[0.05]
              hover:text-[#DFAE45]
              active:scale-95
            "
          >
            {isHindi ? item.hi : item.en}
          </button>
        ))}
      </div>
    </section>
  );
}



