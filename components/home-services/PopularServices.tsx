"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import AllServicesSheet from "./AllServicesSheet";
import { popularServices } from "@/data/home-services";
import { useLanguage } from "@/context/LanguageContext";

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

  const { language } = useLanguage();

  const isHindi = language === "hi";

  // ============================================================
  // TRANSLATIONS
  // ============================================================

  const t = {
    title: isHindi
      ? "लोकप्रिय सेवाएं"
      : "Popular Services",

    subtitle: isHindi
      ? "भरोसेमंद एक्सपर्ट, जब भी आपको जरूरत हो"
      : "Trusted experts, ready when you need them",

    viewAll: isHindi
      ? "सभी देखें"
      : "View all",

    popular: isHindi
      ? "लोकप्रिय"
      : "Popular",

    explore: isHindi
      ? "सेवा देखें"
      : "Explore service",
  };

  // ============================================================
  // SERVICE TITLE TRANSLATION
  // ============================================================

  const getServiceTitle = (service: {
    id: string;
    title: string;
  }) => {
    if (!isHindi) {
      return service.title;
    }

    const hindiTitles: Record<string, string> = {
      "ac-repair": "एसी रिपेयर",
      cleaning: "सफाई सेवा",
      plumbing: "प्लंबिंग",
      electrician: "इलेक्ट्रीशियन",
      "appliance-repair": "उपकरण रिपेयर",
      carpenter: "बढ़ई सेवा",
      painting: "पेंटिंग सेवा",
      sanitization: "सैनिटाइजेशन",
      "pest-control": "पेस्ट कंट्रोल",
      handyman: "हैंडीमैन सेवा",
      furniture: "फर्नीचर सेवा",
      "appliance-installation": "उपकरण इंस्टॉलेशन",
    };

    return hindiTitles[service.id] || service.title;
  };

  // ============================================================
  // CATEGORY SELECT
  // ============================================================

  const handleCategorySelect = (categoryId: string) => {
    setShowAll(false);

    if (onSelectCategory) {
      onSelectCategory(categoryId);
      return;
    }

    console.log("Selected category:", categoryId);
  };

  // ============================================================
  // SERVICE SELECT
  // ============================================================

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
      {/* ==========================================================
          POPULAR SERVICES
      ========================================================== */}

      <section className="relative mt-2 px-5 pt-8">
        {/* TOP GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -top-10
            left-1/2
            h-28
            w-64
            -translate-x-1/2
            rounded-full
            bg-[#DFAE45]/[0.045]
            blur-3xl
          "
        />

        {/* ========================================================
            SECTION HEADER
        ======================================================== */}

        <div className="relative mb-5 flex items-end justify-between">
          <div>
            {/* SMALL LABEL */}

            <div className="mb-2 flex items-center gap-2">
              <div
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#DFAE45]/30
                  bg-[#DFAE45]/[0.08]
                "
              >
                <Sparkles
                  size={12}
                  strokeWidth={2}
                  className="text-[#E7B94F]"
                />
              </div>

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.20em]
                  text-[#DFAE45]
                "
              >
                OurHub
              </span>
            </div>

            {/* TITLE */}

            <h2
              className="
                text-[22px]
                font-extrabold
                tracking-[-0.03em]
                text-white
              "
            >
              {t.title}
            </h2>

            {/* SUBTITLE */}

            <p
              className="
                mt-1
                text-[12px]
                font-medium
                text-slate-500
              "
            >
              {t.subtitle}
            </p>
          </div>

          {/* VIEW ALL */}

          <button
            type="button"
            onClick={() => setShowAll(true)}
            aria-label={t.viewAll}
            className="
              group
              mb-1
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-[#DFAE45]/20
              bg-[#DFAE45]/[0.06]
              px-3
              py-2
              transition
              duration-200
              active:scale-95
            "
          >
            <span
              className="
                text-[11px]
                font-bold
                text-[#E7B94F]
              "
            >
              {t.viewAll}
            </span>

            <ChevronRight
              size={14}
              strokeWidth={2}
              className="
                text-[#E7B94F]
                transition-transform
                duration-200
                group-hover:translate-x-0.5
              "
            />
          </button>
        </div>

        {/* ========================================================
            HORIZONTAL SCROLL
        ======================================================== */}

        <div
          className="
            -mx-5
            overflow-x-auto
            px-5
            pb-3
            scrollbar-hide
            overscroll-x-contain
          "
        >
          <div className="flex w-max gap-4">
            {popularServices.map((service, index) => {
              const Icon = service.icon;

              const serviceTitle =
                getServiceTitle(service);

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() =>
                    handleCategorySelect(service.id)
                  }
                  aria-label={
                    isHindi
                      ? `${serviceTitle} खोलें`
                      : `Open ${serviceTitle}`
                  }
                  className="
                    group
                    relative
                    h-[238px]
                    w-[188px]
                    shrink-0
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/[0.10]
                    bg-[#101318]
                    text-left
                    shadow-[0_12px_35px_rgba(0,0,0,0.28)]
                    transition-all
                    duration-300
                    active:scale-[0.97]
                    hover:-translate-y-1
                    hover:border-[#DFAE45]/30
                    hover:shadow-[0_18px_45px_rgba(0,0,0,0.42)]
                  "
                >
                  {/* IMAGE */}

                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={serviceTitle}
                      loading={
                        index < 3
                          ? "eager"
                          : "lazy"
                      }
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.07]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-black/[0.04]
                        via-black/[0.06]
                        to-[#080B10]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-black/[0.16]
                        via-transparent
                        to-black/[0.12]
                      "
                    />
                  </div>

                  {/* TOP BADGE */}

                  <div
                    className="
                      absolute
                      left-3
                      top-3
                      z-10
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/[0.14]
                      bg-black/35
                      px-2.5
                      py-1.5
                      backdrop-blur-md
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#DFAE45]
                        shadow-[0_0_8px_rgba(223,174,69,0.8)]
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-white/90
                      "
                    >
                      {t.popular}
                    </span>
                  </div>

                  {/* TOP RIGHT ARROW */}

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      z-10
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.14]
                      bg-black/30
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:border-[#DFAE45]/40
                      group-hover:bg-[#DFAE45]
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={2}
                      className="
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-black
                      "
                    />
                  </div>

                  {/* BOTTOM CONTENT */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-10
                      px-4
                      pb-4
                      pt-14
                    "
                  >
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        -z-10
                        h-36
                        bg-gradient-to-t
                        from-[#090C11]
                        via-[#090C11]/90
                        to-transparent
                      "
                    />

                    {/* ICON */}

                    <div
                      className="
                        absolute
                        left-4
                        top-0
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-[14px]
                        border
                        border-[#DFAE45]/35
                        bg-[#090C11]/90
                        shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:border-[#DFAE45]/70
                        group-hover:bg-[#DFAE45]
                      "
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                        className="
                          text-[#E7B94F]
                          transition-colors
                          duration-300
                          group-hover:text-black
                        "
                      />
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        line-clamp-2
                        text-[16px]
                        font-extrabold
                        leading-[1.25]
                        tracking-[-0.015em]
                        text-white
                      "
                    >
                      {serviceTitle}
                    </h3>

                    {/* EXPLORE */}

                    <div className="mt-2 flex items-center gap-1.5">
                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.10em]
                          text-[#DFAE45]
                        "
                      >
                        {t.explore}
                      </span>

                      <ChevronRight
                        size={12}
                        strokeWidth={2.5}
                        className="text-[#DFAE45]"
                      />
                    </div>
                  </div>

                  {/* GOLD BORDER */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[24px]
                      border
                      border-transparent
                      transition-colors
                      duration-300
                      group-hover:border-[#DFAE45]/30
                    "
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* SCROLL INDICATOR */}

        <div className="mt-2 flex items-center justify-center gap-2">
          <span
            className="
              h-1
              w-7
              rounded-full
              bg-[#DFAE45]
            "
          />

          <span
            className="
              h-1
              w-1
              rounded-full
              bg-white/20
            "
          />

          <span
            className="
              h-1
              w-1
              rounded-full
              bg-white/20
            "
          />
        </div>
      </section>

      {/* ==========================================================
          ALL SERVICES BOTTOM SHEET
      ========================================================== */}

      <AllServicesSheet
        open={showAll}
        onClose={() => setShowAll(false)}
        onSelectCategory={handleCategorySelect}
        onSelectService={handleServiceSelect}
      />
    </>
  );
}