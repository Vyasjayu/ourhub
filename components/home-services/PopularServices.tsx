"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

import AllServicesSheet from "./AllServicesSheet";
import { popularServices } from "@/data/home-services";

interface PopularServicesProps {
  onSelectCategory?: (categoryId: string) => void;

  onSelectService?: (
    categoryId: string,
    serviceId: string,
    serviceName: string
  ) => void;
}

export default function PopularServices({
  onSelectCategory,
  onSelectService,
}: PopularServicesProps) {
  const [showAll, setShowAll] = useState(false);

  // ==========================================
  // CATEGORY SELECT
  // ==========================================

  const handleCategorySelect = (categoryId: string) => {
    setShowAll(false);

    if (onSelectCategory) {
      onSelectCategory(categoryId);
      return;
    }

    console.log("Selected category:", categoryId);
  };

  // ==========================================
  // SERVICE SELECT
  // ==========================================

  const handleServiceSelect = (
    categoryId: string,
    serviceId: string,
    serviceName: string
  ) => {
    setShowAll(false);

    if (onSelectService) {
      onSelectService(
        categoryId,
        serviceId,
        serviceName
      );

      return;
    }

    console.log("Selected service:", {
      categoryId,
      serviceId,
      serviceName,
    });
  };

  return (
    <>
      {/* =====================================================
          POPULAR SERVICES
      ===================================================== */}

      <section className="px-5 pt-8">
        {/* HEADER */}

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-[23px] font-bold tracking-[-0.5px]">
            Popular Services
          </h2>

          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="
              flex
              items-center
              gap-1
              text-[15px]
              font-medium
              text-[#E7B94F]
              transition
              active:scale-95
            "
          >
            View All

            <ChevronRight
              size={19}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* =====================================================
            HORIZONTAL SERVICE SCROLL
        ===================================================== */}

        <div
          className="
            overflow-x-auto
            scrollbar-hide
            overscroll-x-contain
          "
        >
          <div className="flex w-max gap-4 pb-2">
            {popularServices.map((service) => {
              const Icon = service.icon;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() =>
                    handleCategorySelect(service.id)
                  }
                  aria-label={`Open ${service.title}`}
                  className="
                    group
                    relative
                    h-[224px]
                    w-[190px]
                    shrink-0
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-white/[0.10]
                    bg-[#111317]
                    text-left
                    transition
                    duration-300
                    active:scale-[0.97]
                  "
                >
                  {/* IMAGE */}

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      absolute
                      inset-0
                      h-[150px]
                      w-full
                      object-cover
                      transition
                      duration-300
                      group-hover:scale-105
                    "
                  />

                  {/* IMAGE GRADIENT */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      h-[160px]
                      bg-gradient-to-b
                      from-transparent
                      via-transparent
                      to-[#111317]
                    "
                  />

                  {/* =================================================
                      BOTTOM CONTENT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-[91px]
                      bg-[#111317]
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        absolute
                        -top-7
                        left-1/2
                        flex
                        h-[54px]
                        w-[54px]
                        -translate-x-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#DFAE45]/60
                        bg-[#090A0C]
                        shadow-[0_0_20px_rgba(223,174,69,0.10)]
                      "
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                        className="text-[#E7B94F]"
                      />
                    </div>

                    {/* TITLE */}

                    <p
                      className="
                        absolute
                        bottom-4
                        left-2
                        right-2
                        text-center
                        text-[15px]
                        font-semibold
                        leading-5
                        text-white
                      "
                    >
                      {service.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL SERVICES BOTTOM SHEET
      ===================================================== */}

      <AllServicesSheet
        open={showAll}
        onClose={() => setShowAll(false)}
        onSelectCategory={handleCategorySelect}
        onSelectService={handleServiceSelect}
      />
    </>
  );
}