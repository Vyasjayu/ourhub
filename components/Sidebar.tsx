"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  X,
  Wrench,
  Monitor,
  Sparkles,
  MapPin,
  Building2,
  PartyPopper,
  ChevronRight,
  ShieldCheck,
  UserRound,
  Languages,
} from "lucide-react";

import { FaOm } from "react-icons/fa6";

import {
  useLanguage,
  type Language,
} from "@/context/LanguageContext";

/* =========================================================
   MENU ITEMS
========================================================= */

const menuItems = [
  {
    name: {
      en: "Religious Services",
      hi: "धार्मिक सेवाएं",
    },
    icon: FaOm,
    href: "/religious",
  },
  {
    name: {
      en: "Home Services",
      hi: "होम सर्विसेज",
    },
    icon: Wrench,
    href: "/home-services",
  },
  {
    name: {
      en: "Web Design & Development",
      hi: "वेब डिजाइन एवं डेवलपमेंट",
    },
    icon: Monitor,
    href: "/web-development",
  },
  {
    name: {
      en: "Event Management",
      hi: "इवेंट मैनेजमेंट",
    },
    icon: PartyPopper,
    href: "/eventManagement",
  },
  {
    name: {
      en: "Construction",
      hi: "कंस्ट्रक्शन",
    },
    icon: Building2,
    href: "/construction",
  },
];

/* =========================================================
   LOCATIONS
========================================================= */

const locations = [
  {
    en: "Ujjain, Madhya Pradesh",
    hi: "उज्जैन, मध्य प्रदेश",
  },
  {
    en: "Ratlam, Madhya Pradesh",
    hi: "रतलाम, मध्य प्रदेश",
  },
];

/* =========================================================
   PROPS
========================================================= */

interface Props {
  open: boolean;
  onClose: () => void;
}

/* =========================================================
   TRANSLATIONS
========================================================= */

const text = {
  en: {
    smartPlatform: "Smart Service Platform",
    welcome: "Welcome Guest",
    servicesNear: "Services near you",
    exploreServices: "Explore Services",
    premiumServices: "Premium Services",
    trustedProfessionals:
      "Trusted professionals at your doorstep",
    closeMenu: "Close menu",
    location: "Location",
    websiteLanguage: "Website Language",
    english: "English",
    hindi: "Hindi",
    switchToEnglish: "Switch to English",
    switchToHindi: "Switch to Hindi",
  },

  hi: {
    smartPlatform: "स्मार्ट सर्विस प्लेटफॉर्म",
    welcome: "स्वागत है",
    servicesNear: "आपके आसपास की सेवाएं",
    exploreServices: "सेवाएं देखें",
    premiumServices: "प्रीमियम सेवाएं",
    trustedProfessionals:
      "आपके घर तक भरोसेमंद प्रोफेशनल्स",
    closeMenu: "मेन्यू बंद करें",
    location: "स्थान",
    websiteLanguage: "वेबसाइट की भाषा",
    english: "English",
    hindi: "हिंदी",
    switchToEnglish: "Switch to English",
    switchToHindi: "हिंदी में बदलें",
  },
} as const;

/* =========================================================
   SIDEBAR
========================================================= */

export default function Sidebar({
  open,
  onClose,
}: Props) {
  /* =======================================================
     LANGUAGE
  ======================================================= */

  const {
    language,
    setLanguage,
  } = useLanguage();

  /* =======================================================
     LOCATION
  ======================================================= */

  const [selectedLocation, setSelectedLocation] =
    useState("Ujjain, Madhya Pradesh");

  const [locationOpen, setLocationOpen] =
    useState(false);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  /* =======================================================
     CLOSE LOCATION DROPDOWN
  ======================================================= */

  useEffect(() => {
    if (!open) {
      setLocationOpen(false);
    }
  }, [open]);

  /* =======================================================
     LANGUAGE CHANGE
  ======================================================= */

  const changeLanguage = (
    newLanguage: Language
  ) => {
    setLanguage(newLanguage);
  };

  /* =======================================================
     CURRENT TRANSLATION
  ======================================================= */

  const t = text[language];

  /* =======================================================
     CURRENT LOCATION LABEL
  ======================================================= */

  const currentLocation =
    language === "en"
      ? selectedLocation
      : locations.find(
          (item) =>
            item.en === selectedLocation
        )?.hi ?? selectedLocation;

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]

        ${
          open
            ? "pointer-events-auto"
            : "pointer-events-none"
        }
      `}
    >
      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        onClick={onClose}
        className={`
          absolute
          inset-0
          bg-black/75
          backdrop-blur-[3px]

          transition-opacity
          duration-300

          ${
            open
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      />

      {/* =====================================================
          SIDEBAR WRAPPER
      ===================================================== */}

      <div className="relative mx-auto h-full max-w-[430px]">

        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside
          className={`
            absolute
            left-0
            top-0

            flex
            h-full
            w-[88%]
            max-w-[350px]
            flex-col

            overflow-hidden

            border-r
            border-yellow-400/10

            bg-[#07090c]

            text-white

            shadow-[20px_0_80px_rgba(0,0,0,0.65)]

            transition-transform
            duration-300
            ease-out

            ${
              open
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >

          {/* =================================================
              BACKGROUND GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-yellow-400/[0.08]
              blur-[90px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-20
              h-56
              w-56
              rounded-full
              bg-yellow-500/[0.04]
              blur-[80px]
            "
          />

          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              relative
              border-b
              border-white/[0.07]
              px-5
              pb-5
              pt-5
            "
          >

            <div className="flex items-start justify-between">

              {/* =============================================
                  BRAND
              ============================================= */}

              <div>

                <div className="flex items-center gap-2">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-yellow-400/20
                      bg-yellow-400/[0.08]
                    "
                  >
                    <Sparkles
                      size={18}
                      className="text-yellow-400"
                    />
                  </div>

                  <div>

                    <h2
                      className="
                        text-xl
                        font-extrabold
                        tracking-tight
                        text-white
                      "
                    >
                      Our
                      <span className="text-yellow-400">
                        Hub
                      </span>
                    </h2>

                    <p
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[2px]
                        text-slate-500
                      "
                    >
                      {t.smartPlatform}
                    </p>

                  </div>

                </div>

              </div>

              {/* =============================================
                  RIGHT SIDE
              ============================================= */}

              <div className="flex items-center gap-2">

                {/* =========================================
                    LANGUAGE SWITCHER
                ========================================= */}

                <div
                  className="
                    flex
                    items-center
                    rounded-xl
                    border
                    border-yellow-400/15
                    bg-white/[0.035]
                    p-1
                  "
                >

                  {/* English */}

                  <button
                    type="button"
                    onClick={() =>
                      changeLanguage("en")
                    }
                    aria-label={
                      t.switchToEnglish
                    }
                    aria-pressed={
                      language === "en"
                    }
                    className={`
                      flex
                      h-8
                      min-w-[34px]
                      items-center
                      justify-center
                      rounded-lg
                      px-2

                      text-[10px]
                      font-extrabold

                      transition-all
                      duration-200

                      ${
                        language === "en"
                          ? "bg-yellow-400 text-black shadow-[0_4px_15px_rgba(250,204,21,0.18)]"
                          : "text-slate-400 hover:text-white"
                      }
                    `}
                  >
                    EN
                  </button>

                  <div className="mx-0.5 h-4 w-px bg-white/10" />

                  {/* Hindi */}

                  <button
                    type="button"
                    onClick={() =>
                      changeLanguage("hi")
                    }
                    aria-label={
                      t.switchToHindi
                    }
                    aria-pressed={
                      language === "hi"
                    }
                    className={`
                      flex
                      h-8
                      min-w-[38px]
                      items-center
                      justify-center
                      rounded-lg
                      px-2

                      text-[10px]
                      font-extrabold

                      transition-all
                      duration-200

                      ${
                        language === "hi"
                          ? "bg-yellow-400 text-black shadow-[0_4px_15px_rgba(250,204,21,0.18)]"
                          : "text-slate-400 hover:text-white"
                      }
                    `}
                  >
                    हिं
                  </button>

                </div>

                {/* =========================================
                    CLOSE BUTTON
                ========================================= */}

                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t.closeMenu}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-white/[0.08]

                    bg-white/[0.04]

                    text-slate-300

                    transition-all
                    duration-200

                    active:scale-95

                    hover:border-yellow-400/20
                    hover:bg-yellow-400/10
                    hover:text-yellow-400
                  "
                >
                  <X size={20} />
                </button>

              </div>

            </div>

            {/* =================================================
                LANGUAGE LABEL
            ================================================= */}

            <div
              className="
                mt-4
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.025]
                px-3
                py-2
              "
            >

              <Languages
                size={14}
                className="text-yellow-400"
              />

              <span className="text-[10px] text-slate-500">
                {t.websiteLanguage}
              </span>

              <span className="ml-auto text-[10px] font-bold text-yellow-400">
                {language === "en"
                  ? t.english
                  : t.hindi}
              </span>

            </div>

          </div>

          {/* =================================================
              USER CARD
          ================================================= */}

          <div className="relative px-4 pt-5">

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-yellow-400/15
                bg-gradient-to-br
                from-yellow-400/[0.10]
                via-[#111]
                to-[#0b0b0b]
                p-4
              "
            >

              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-24
                  w-24
                  rounded-full
                  bg-yellow-400/10
                  blur-2xl
                "
              />

              <div className="relative flex items-center gap-3">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-400/30
                    bg-yellow-400/[0.10]
                  "
                >
                  <UserRound
                    size={22}
                    className="text-yellow-400"
                  />
                </div>

                <div className="min-w-0">

                  <div className="flex items-center gap-1.5">

                    <h3
                      className="
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      {t.welcome}
                    </h3>

                    <ShieldCheck
                      size={14}
                      className="text-yellow-400"
                    />

                  </div>

                  <div className="mt-1 flex items-center gap-1.5">

                    <MapPin
                      size={12}
                      className="text-yellow-400"
                    />

                    <span
                      className="
                        text-[11px]
                        text-slate-400
                      "
                    >
                      {t.servicesNear}
                    </span>

                  </div>

                </div>

              </div>

              {/* =================================================
                  LOCATION SELECTOR
              ================================================= */}

              <div className="relative mt-4">

                <button
                  type="button"
                  onClick={() =>
                    setLocationOpen(
                      (prev) => !prev
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-black/20
                    px-3
                    py-2.5
                    text-left
                    transition
                    hover:border-yellow-400/20
                  "
                >

                  <MapPin
                    size={14}
                    className="text-yellow-400"
                  />

                  <span className="flex-1 text-[11px] text-slate-300">
                    {currentLocation}
                  </span>

                  <ChevronRight
                    size={14}
                    className={`
                      text-slate-500
                      transition-transform

                      ${
                        locationOpen
                          ? "rotate-90"
                          : ""
                      }
                    `}
                  />

                </button>

                {locationOpen && (
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-[calc(100%+6px)]
                      z-50
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/10
                      bg-[#0b0d11]
                      shadow-2xl
                    "
                  >

                    {locations.map(
                      (location) => (
                        <button
                          key={location.en}
                          type="button"
                          onClick={() => {
                            setSelectedLocation(
                              location.en
                            );

                            setLocationOpen(false);
                          }}
                          className="
                            flex
                            w-full
                            items-center
                            gap-2
                            px-3
                            py-3
                            text-left
                            text-[11px]
                            text-slate-300
                            transition
                            hover:bg-yellow-400/[0.06]
                            hover:text-yellow-400
                          "
                        >

                          <MapPin
                            size={13}
                            className="text-yellow-400"
                          />

                          {language === "en"
                            ? location.en
                            : location.hi}

                        </button>
                      )
                    )}

                  </div>
                )}

              </div>

            </div>

          </div>

          {/* =================================================
              MENU
          ================================================= */}

          <nav
            className="
              relative
              mt-5
              flex-1
              overflow-y-auto
              px-4
              pb-4
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/10
            "
          >

            <div
              className="
                mb-3
                flex
                items-center
                gap-3
                px-1
              "
            >

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-slate-500
                "
              >
                {t.exploreServices}
              </span>

              <div
                className="
                  h-px
                  flex-1
                  bg-white/[0.06]
                "
              />

            </div>

            <div className="space-y-1.5">

              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="
                      group
                      relative
                      flex
                      items-center
                      gap-3
                      overflow-hidden
                      rounded-2xl
                      border
                      border-transparent
                      px-3
                      py-3
                      text-slate-300
                      transition-all
                      duration-200
                      hover:border-yellow-400/15
                      hover:bg-yellow-400/[0.07]
                      hover:text-white
                      active:scale-[0.98]
                    "
                  >

                    {/* Gold Indicator */}

                    <div
                      className="
                        absolute
                        inset-y-0
                        left-0
                        w-1
                        -translate-x-full
                        rounded-r-full
                        bg-yellow-400
                        transition-transform
                        duration-200
                        group-hover:translate-x-0
                      "
                    />

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.06]
                        bg-white/[0.035]
                        transition-all
                        duration-200
                        group-hover:border-yellow-400/20
                        group-hover:bg-yellow-400/10
                        group-hover:text-yellow-400
                      "
                    >
                      <Icon size={19} />
                    </div>

                    {/* Name */}

                    <span
                      className="
                        flex-1
                        text-[13px]
                        font-medium
                        leading-5
                      "
                    >
                      {item.name[language]}
                    </span>

                    {/* Arrow */}

                    <ChevronRight
                      size={16}
                      className="
                        text-slate-600
                        transition-all
                        duration-200
                        group-hover:translate-x-0.5
                        group-hover:text-yellow-400
                      "
                    />

                  </Link>
                );
              })}

            </div>

          </nav>

          {/* =================================================
              PREMIUM BOTTOM CARD
          ================================================= */}

          <div
            className="
              relative
              p-4
              pt-2
            "
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-yellow-400/20
                bg-gradient-to-r
                from-yellow-400/[0.10]
                via-yellow-400/[0.04]
                to-transparent
                p-4
              "
            >

              <div
                className="
                  absolute
                  -right-5
                  -top-10
                  h-28
                  w-28
                  rounded-full
                  bg-yellow-400/10
                  blur-2xl
                "
              />

              <div
                className="
                  relative
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-yellow-400
                    shadow-[0_0_20px_rgba(250,204,21,0.18)]
                  "
                >
                  <Sparkles
                    size={19}
                    className="text-black"
                  />
                </div>

                <div className="min-w-0">

                  <p
                    className="
                      text-xs
                      font-bold
                      text-white
                    "
                  >
                    {t.premiumServices}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      leading-4
                      text-slate-400
                    "
                  >
                    {t.trustedProfessionals}
                  </p>

                </div>

              </div>

            </div>

            <p
              className="
                mt-3
                text-center
                text-[9px]
                text-slate-600
              "
            >
              © 2026 OurHub • Smart Services
            </p>

          </div>

        </aside>

      </div>

    </div>
  );
}