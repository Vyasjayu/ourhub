
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
} from "lucide-react";

import { FaOm } from "react-icons/fa6";

/* =========================================================
   MENU ITEMS
========================================================= */

const menuItems = [
  {
    name: "Religious Services",
    icon: FaOm,
    href: "/religious",
  },
  {
    name: "Home Services",
    icon: Wrench,
    href: "/home-services",
  },
  {
    name: "Web Design & Development",
    icon: Monitor,
    href: "/web-development",
  },
  {
    name: "Event Management",
    icon: PartyPopper,
    href: "/eventManagement",
  },
  {
    name: "Construction",
    icon: Building2,
    href: "/construction",
  },
];

/* =========================================================
   LOCATIONS
========================================================= */

const locations = [
  "Ujjain, Madhya Pradesh",
  "Ratlam, Madhya Pradesh",
];

/* =========================================================
   PROPS
========================================================= */

interface Props {
  open: boolean;
  onClose: () => void;
}

/* =========================================================
   SIDEBAR
========================================================= */

export default function Sidebar({ open, onClose }: Props) {
  const [selectedLocation, setSelectedLocation] = useState(
    "Ujjain, Madhya Pradesh"
  );

  const [locationOpen, setLocationOpen] = useState(false);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  /* =======================================================
     CLOSE DROPDOWN WHEN SIDEBAR CLOSES
  ======================================================= */

  useEffect(() => {
    if (!open) {
      setLocationOpen(false);
    }
  }, [open]);

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

                  {/* Logo Icon */}

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

                  {/* Brand Name */}

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
                      Smart Service Platform
                    </p>

                  </div>

                </div>

              </div>

              {/* =============================================
                  CLOSE BUTTON
              ============================================= */}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
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

              {/* Glow */}

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

              {/* User */}

              <div className="relative flex items-center gap-3">

                {/* Avatar */}

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

                {/* User Info */}

                <div className="min-w-0">

                  <div className="flex items-center gap-1.5">

                    <h3
                      className="
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      Welcome Guest
                    </h3>

                    <ShieldCheck
                      size={14}
                      className="text-yellow-400"
                    />

                  </div>

                  <div
                    className="
                      mt-1
                      flex
                      items-center
                      gap-1.5
                    "
                  >

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
                      Services near you
                    </span>

                  </div>

                </div>

              </div>

              {/* =================================================
                  LOCATION SELECTOR
              ================================================= */}

              <div className="relative mt-4">

                {/* Selected Location Button */}

                <button
                  type="button"
                  onClick={() =>
                    setLocationOpen(
                      (prev) => !prev
                    )
                  }
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    justify-between

                    rounded-xl

                    border
                    border-white/[0.08]

                    bg-black/30

                    px-3
                    py-3

                    text-left

                    transition-all
                    duration-200

                    hover:border-yellow-400/25
                    hover:bg-black/40

                    active:scale-[0.99]
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-2.5
                    "
                  >

                    {/* Location Icon */}

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center

                        rounded-lg

                        bg-yellow-400/10

                        text-yellow-400
                      "
                    >
                      <MapPin size={15} />
                    </div>

                    {/* Location Text */}

                    <div>

                      <p
                        className="
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[1.5px]
                          text-slate-500
                        "
                      >
                        Your Location
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          font-semibold
                          text-white
                        "
                      >
                        {selectedLocation}
                      </p>

                    </div>

                  </div>

                  {/* Chevron */}

                  <ChevronRight
                    size={16}
                    className={`
                      text-slate-500

                      transition-transform
                      duration-200

                      ${
                        locationOpen
                          ? "rotate-90 text-yellow-400"
                          : ""
                      }
                    `}
                  />

                </button>

                {/* =================================================
                    LOCATION DROPDOWN
                ================================================= */}

                {locationOpen && (
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-full
                      z-50

                      mt-2

                      overflow-hidden

                      rounded-xl

                      border
                      border-yellow-400/15

                      bg-[#101214]

                      p-1.5

                      shadow-[0_15px_40px_rgba(0,0,0,0.55)]
                    "
                  >

                    {/* Dropdown Heading */}

                    <div
                      className="
                        px-3
                        pb-2
                        pt-2
                      "
                    >

                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[1.5px]
                          text-slate-500
                        "
                      >
                        Select Location
                      </p>

                    </div>

                    {/* Locations */}

                    {locations.map((location) => {

                      const isSelected =
                        selectedLocation ===
                        location;

                      return (
                        <button
                          key={location}
                          type="button"
                          onClick={() => {
                            setSelectedLocation(
                              location
                            );

                            setLocationOpen(
                              false
                            );
                          }}
                          className={`
                            flex
                            w-full
                            items-center
                            justify-between

                            rounded-lg

                            px-3
                            py-2.5

                            text-left

                            transition-all
                            duration-200

                            ${
                              isSelected
                                ? "bg-yellow-400/10 text-white"
                                : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                            }
                          `}
                        >

                          <div
                            className="
                              flex
                              items-center
                              gap-2.5
                            "
                          >

                            <MapPin
                              size={14}
                              className={
                                isSelected
                                  ? "text-yellow-400"
                                  : "text-slate-500"
                              }
                            />

                            <span
                              className="
                                text-xs
                                font-medium
                              "
                            >
                              {location}
                            </span>

                          </div>

                          {/* Selected Indicator */}

                          {isSelected && (
                            <div
                              className="
                                flex
                                h-4
                                w-4
                                items-center
                                justify-center

                                rounded-full

                                bg-yellow-400
                              "
                            >
                              <div
                                className="
                                  h-1.5
                                  w-1.5
                                  rounded-full
                                  bg-black
                                "
                              />
                            </div>
                          )}

                        </button>
                      );
                    })}

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

            {/* Section Heading */}

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
                Explore Services
              </span>

              <div
                className="
                  h-px
                  flex-1
                  bg-white/[0.06]
                "
              />

            </div>

            {/* Menu List */}

            <div className="space-y-1.5">

              {menuItems.map((item) => {

                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
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

                    {/* Left Gold Indicator */}

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
                      {item.name}
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

              {/* Glow */}

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

                    bg-yellow-400

                    shadow-[0_0_20px_rgba(250,204,21,0.18)]
                  "
                >
                  <Sparkles
                    size={19}
                    className="text-black"
                  />
                </div>

                {/* Text */}

                <div className="min-w-0">

                  <p
                    className="
                      text-xs
                      font-bold
                      text-white
                    "
                  >
                    Premium Services
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      leading-4
                      text-slate-400
                    "
                  >
                    Trusted professionals at your doorstep
                  </p>

                </div>

              </div>

            </div>

            {/* Footer */}

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

