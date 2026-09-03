"use client";

import { useMemo, useState } from "react";

import {
  X,
  ChevronRight,
  Zap,
  Droplets,
  Snowflake,
  Bug,
  WashingMachine,
  Sofa,
  Paintbrush,
  ShieldCheck,
  Wrench,
  Search,
  Check,
} from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  services: ServiceItem[];
}

interface AllServicesSheetProps {
  open: boolean;
  onClose: () => void;

  onSelectCategory?: (
    categoryId: string
  ) => void;

  onSelectService?: (
    categoryId: string,
    serviceId: string,
    serviceName: string
  ) => void;
}

/* =========================================================
   SERVICE DATA
========================================================= */

const serviceCategories: ServiceCategory[] = [
  {
    id: "ac",
    title: "AC Service & Repair",
    icon: Snowflake,
    services: [
      { id: "ac-service", name: "AC Service" },
      { id: "ac-repair", name: "AC Repair" },
      { id: "ac-installation", name: "AC Installation" },
      { id: "ac-uninstallation", name: "AC Uninstallation" },
      { id: "ac-gas-filling", name: "AC Gas Filling" },
      {
        id: "ac-water-leakage",
        name: "AC Water Leakage Repair",
      },
      {
        id: "ac-cooling",
        name: "AC Cooling Problem",
      },
      {
        id: "ac-noise",
        name: "AC Noise Problem",
      },
    ],
  },

  {
    id: "cleaning",
    title: "Cleaning & Pest Control",
    icon: Bug,
    services: [
      {
        id: "home-deep-cleaning",
        name: "Home Deep Cleaning",
      },
      {
        id: "bathroom-cleaning",
        name: "Bathroom Cleaning",
      },
      {
        id: "kitchen-cleaning",
        name: "Kitchen Cleaning",
      },
      {
        id: "sofa-cleaning",
        name: "Sofa Cleaning",
      },
      {
        id: "carpet-cleaning",
        name: "Carpet Cleaning",
      },
      {
        id: "pest-control",
        name: "Pest Control",
      },
      {
        id: "cockroach-control",
        name: "Cockroach Control",
      },
      {
        id: "termite-control",
        name: "Termite Control",
      },
      {
        id: "mosquito-control",
        name: "Mosquito Control",
      },
    ],
  },

  {
    id: "plumbing",
    title: "Plumbing Services",
    icon: Droplets,
    services: [
      {
        id: "tap-repair",
        name: "Tap Repair",
      },
      {
        id: "tap-installation",
        name: "Tap Installation",
      },
      {
        id: "pipe-leakage",
        name: "Pipe Leakage Repair",
      },
      {
        id: "water-tank",
        name: "Water Tank Repair",
      },
      {
        id: "wash-basin",
        name: "Wash Basin Repair",
      },
      {
        id: "toilet-repair",
        name: "Toilet Repair",
      },
      {
        id: "flush-repair",
        name: "Flush Repair",
      },
      {
        id: "sink-repair",
        name: "Sink Repair",
      },
      {
        id: "bathroom-plumbing",
        name: "Bathroom Plumbing",
      },
      {
        id: "kitchen-plumbing",
        name: "Kitchen Plumbing",
      },
    ],
  },

  {
    id: "electrical",
    title: "Electrical Services",
    icon: Zap,
    services: [
      {
        id: "fan-repair",
        name: "Fan Repair",
      },
      {
        id: "fan-installation",
        name: "Fan Installation",
      },
      {
        id: "light-installation",
        name: "Light Installation",
      },
      {
        id: "switch-repair",
        name: "Switch Repair",
      },
      {
        id: "socket-repair",
        name: "Socket Repair",
      },
      {
        id: "mcb-repair",
        name: "MCB Repair",
      },
      {
        id: "wiring",
        name: "Wiring & Rewiring",
      },
      {
        id: "short-circuit",
        name: "Short Circuit Repair",
      },
      {
        id: "inverter-installation",
        name: "Inverter Installation",
      },
      {
        id: "doorbell-installation",
        name: "Doorbell Installation",
      },
    ],
  },

  {
    id: "appliance",
    title: "Appliance Repair",
    icon: WashingMachine,
    services: [
      {
        id: "washing-machine",
        name: "Washing Machine Repair",
      },
      {
        id: "refrigerator",
        name: "Refrigerator Repair",
      },
      {
        id: "microwave",
        name: "Microwave Repair",
      },
      {
        id: "geyser",
        name: "Geyser Repair",
      },
      {
        id: "ro",
        name: "RO Repair",
      },
      {
        id: "tv",
        name: "TV Repair",
      },
      {
        id: "cooler",
        name: "Cooler Repair",
      },
      {
        id: "chimney",
        name: "Chimney Repair",
      },
    ],
  },

  {
    id: "carpentry",
    title: "Carpentry Services",
    icon: Sofa,
    services: [
      {
        id: "furniture-repair",
        name: "Furniture Repair",
      },
      {
        id: "door-repair",
        name: "Door Repair",
      },
      {
        id: "door-installation",
        name: "Door Installation",
      },
      {
        id: "window-repair",
        name: "Window Repair",
      },
      {
        id: "furniture-assembly",
        name: "Furniture Assembly",
      },
      {
        id: "cupboard-repair",
        name: "Cupboard Repair",
      },
      {
        id: "bed-repair",
        name: "Bed Repair",
      },
      {
        id: "curtain-rod",
        name: "Curtain Rod Installation",
      },
    ],
  },

  {
    id: "painting",
    title: "Painting Services",
    icon: Paintbrush,
    services: [
      {
        id: "full-home-painting",
        name: "Full Home Painting",
      },
      {
        id: "room-painting",
        name: "Room Painting",
      },
      {
        id: "wall-painting",
        name: "Wall Painting",
      },
      {
        id: "ceiling-painting",
        name: "Ceiling Painting",
      },
      {
        id: "texture-painting",
        name: "Texture Painting",
      },
      {
        id: "exterior-painting",
        name: "Exterior Painting",
      },
      {
        id: "interior-painting",
        name: "Interior Painting",
      },
      {
        id: "wood-painting",
        name: "Wood Painting",
      },
    ],
  },

  {
    id: "sanitization",
    title: "Home Sanitization",
    icon: ShieldCheck,
    services: [
      {
        id: "home-sanitization",
        name: "Home Sanitization",
      },
      {
        id: "office-sanitization",
        name: "Office Sanitization",
      },
      {
        id: "bathroom-sanitization",
        name: "Bathroom Sanitization",
      },
      {
        id: "kitchen-sanitization",
        name: "Kitchen Sanitization",
      },
      {
        id: "covid-sanitization",
        name: "COVID Sanitization",
      },
      {
        id: "disinfection",
        name: "Disinfection Service",
      },
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function AllServicesSheet({
  open,
  onClose,
  onSelectCategory,
  onSelectService,
}: AllServicesSheetProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);

  /* =======================================================
     RESET SEARCH WHEN SHEET CLOSES / OPENS
  ======================================================= */

  const closeSheet = () => {
    setSearch("");
    setSelectedCategory(null);
    onClose();
  };

  /* =======================================================
     FILTER SERVICES
  ======================================================= */

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query && !selectedCategory) {
      return serviceCategories;
    }

    return serviceCategories
      .filter((category) => {
        if (
          selectedCategory &&
          category.id !== selectedCategory
        ) {
          return false;
        }

        return true;
      })
      .map((category) => {
        if (!query) {
          return category;
        }

        const categoryMatches =
          category.title
            .toLowerCase()
            .includes(query);

        const matchingServices =
          category.services.filter((service) =>
            service.name
              .toLowerCase()
              .includes(query)
          );

        if (categoryMatches) {
          return category;
        }

        return {
          ...category,
          services: matchingServices,
        };
      })
      .filter(
        (category) =>
          category.services.length > 0
      );
  }, [search, selectedCategory]);

  /* =======================================================
     CATEGORY CLICK
  ======================================================= */

  const handleCategoryClick = (
    categoryId: string
  ) => {
    setSelectedCategory((current) =>
      current === categoryId
        ? null
        : categoryId
    );

    onSelectCategory?.(categoryId);
  };

  /* =======================================================
     SERVICE CLICK
  ======================================================= */

  const handleServiceClick = (
    categoryId: string,
    service: ServiceItem
  ) => {
    onSelectService?.(
      categoryId,
      service.id,
      service.name
    );

    /*
      Parent component next page par redirect karega.
      Agar callback nahi diya gaya ho to console fallback.
    */

    if (!onSelectService) {
      console.log("Selected service:", {
        categoryId,
        serviceId: service.id,
        serviceName: service.name,
      });
    }
  };

  /* =======================================================
     DON'T RENDER
  ======================================================= */

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100]">
      {/* =================================================
          BACKDROP
      ================================================= */}

      <button
        type="button"
        aria-label="Close services"
        onClick={closeSheet}
        className="
          absolute
          inset-0
          h-full
          w-full
          bg-black/75
          backdrop-blur-[4px]
        "
      />

      {/* =================================================
          BOTTOM SHEET
      ================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          flex
          w-full
          max-w-[480px]
          -translate-x-1/2
          flex-col
          overflow-hidden
          rounded-t-[28px]
          border-t
          border-[#DFAE45]/25
          bg-[#0B0D10]
          shadow-[0_-20px_70px_rgba(0,0,0,0.65)]
          animate-[slideUp_0.25s_ease-out]
        "
      >
        {/* =================================================
            HANDLE
        ================================================= */}

        <div className="flex shrink-0 justify-center pt-3">
          <div className="h-1.5 w-12 rounded-full bg-white/20" />
        </div>

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex shrink-0 items-center justify-between px-5 pb-4 pt-4">
          <div>
            <h2 className="text-[22px] font-bold text-white">
              All Services
            </h2>

            <p className="mt-1 text-[13px] text-white/50">
              Choose the service you need
            </p>
          </div>

          <button
            type="button"
            onClick={closeSheet}
            aria-label="Close"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              transition
              active:scale-95
            "
          >
            <X
              size={21}
              strokeWidth={1.8}
              className="text-white/80"
            />
          </button>
        </div>

        {/* =================================================
            SEARCH
        ================================================= */}

        <div className="shrink-0 px-5 pb-3">
          <div
            className="
              flex
              h-[48px]
              items-center
              rounded-[14px]
              border
              border-white/[0.08]
              bg-[#111317]
              px-4
              focus-within:border-[#DFAE45]/40
            "
          >
            <Search
              size={19}
              strokeWidth={1.8}
              className="shrink-0 text-white/40"
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search service..."
              className="
                ml-3
                w-full
                bg-transparent
                text-[14px]
                text-white
                outline-none
                placeholder:text-white/30
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="ml-2 text-white/40"
              >
                <X size={17} />
              </button>
            )}
          </div>
        </div>

        {/* =================================================
            CATEGORY FILTER
        ================================================= */}

        <div className="shrink-0 overflow-x-auto px-5 pb-3 scrollbar-hide">
          <div className="flex w-max gap-2">
            {/* ALL */}

            <button
              type="button"
              onClick={() =>
                setSelectedCategory(null)
              }
              className={`
                rounded-full
                border
                px-4
                py-2
                text-[12px]
                font-medium
                transition
                ${
                  selectedCategory === null
                    ? "border-[#DFAE45]/60 bg-[#DFAE45] text-black"
                    : "border-white/[0.08] bg-[#111317] text-white/60"
                }
              `}
            >
              All
            </button>

            {serviceCategories.map(
              (category) => {
                const Icon = category.icon;

                const active =
                  selectedCategory ===
                  category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      handleCategoryClick(
                        category.id
                      )
                    }
                    className={`
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      px-3
                      py-2
                      text-[12px]
                      font-medium
                      transition
                      ${
                        active
                          ? "border-[#DFAE45]/60 bg-[#DFAE45] text-black"
                          : "border-white/[0.08] bg-[#111317] text-white/60"
                      }
                    `}
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.8}
                    />

                    {category.title
                      .replace(
                        " Service & Repair",
                        ""
                      )
                      .replace(
                        " Services",
                        ""
                      )}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* =================================================
            SERVICE LIST
        ================================================= */}

        <div
          className="
            max-h-[58vh]
            overflow-y-auto
            px-5
            pb-8
            scrollbar-hide
          "
        >
          {filteredCategories.length === 0 ? (
            /* =================================================
               EMPTY SEARCH
            ================================================= */

            <div className="flex flex-col items-center justify-center py-14 text-center">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-[#111317]
                "
              >
                <Search
                  size={26}
                  className="text-white/25"
                />
              </div>

              <h3 className="mt-4 text-[16px] font-semibold text-white">
                No service found
              </h3>

              <p className="mt-1 max-w-[240px] text-[13px] text-white/40">
                Try searching with another service
                name.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredCategories.map(
                (category) => {
                  const Icon = category.icon;

                  return (
                    <div
                      key={category.id}
                      className="
                        overflow-hidden
                        rounded-[18px]
                        border
                        border-white/[0.08]
                        bg-[#111317]
                      "
                    >
                      {/* CATEGORY HEADER */}

                      <button
                        type="button"
                        onClick={() =>
                          handleCategoryClick(
                            category.id
                          )
                        }
                        className="
                          flex
                          w-full
                          items-center
                          gap-3
                          px-4
                          py-4
                          text-left
                          transition
                          active:bg-white/[0.03]
                        "
                      >
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#DFAE45]/30
                            bg-[#090A0C]
                          "
                        >
                          <Icon
                            size={22}
                            strokeWidth={1.7}
                            className="text-[#E7B94F]"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-[15px] font-semibold text-white">
                            {category.title}
                          </h3>

                          <p className="mt-0.5 text-[12px] text-white/40">
                            {category.services.length}{" "}
                            services available
                          </p>
                        </div>

                        <ChevronRight
                          size={19}
                          className="text-white/30"
                        />
                      </button>

                      {/* SERVICE LIST */}

                      <div className="border-t border-white/[0.06]">
                        {category.services.map(
                          (service) => (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() =>
                                handleServiceClick(
                                  category.id,
                                  service
                                )
                              }
                              className="
                                flex
                                w-full
                                items-center
                                gap-3
                                border-b
                                border-white/[0.05]
                                px-4
                                py-3.5
                                text-left
                                last:border-b-0
                                transition
                                active:bg-[#E7B94F]/10
                              "
                            >
                              {/* SERVICE ICON */}

                              <div
                                className="
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  bg-white/[0.04]
                                "
                              >
                                <Wrench
                                  size={14}
                                  strokeWidth={1.7}
                                  className="text-[#E7B94F]"
                                />
                              </div>

                              {/* NAME */}

                              <span
                                className="
                                  flex-1
                                  text-[14px]
                                  font-medium
                                  text-white/80
                                "
                              >
                                {service.name}
                              </span>

                              {/* ARROW */}

                              <ChevronRight
                                size={17}
                                className="text-white/25"
                              />
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}