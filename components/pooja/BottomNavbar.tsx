"use client";

import Link from "next/link";
import {
  Home,
  Grid2x2,
  CalendarDays,
  User,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function BottomNavigation() {
  return (
    <>
      {/* =========================================================
          FLOATING CENTER BOOK BUTTON
      ========================================================= */}

      <div className="pointer-events-none fixed bottom-[62px] left-1/2 z-[60] w-full max-w-[430px] -translate-x-1/2">
        <div className="flex justify-center">
          <Link
            href="/pooja/book"
            aria-label="Book Online Pooja"
            className="
              pointer-events-auto
              group
              relative
              flex
              h-[76px]
              w-[76px]
              items-center
              justify-center
              rounded-full
              border-[5px]
              border-[#07101A]
              bg-gradient-to-br
              from-[#F8D477]
              via-[#DFAE45]
              to-[#B77A20]
              shadow-[0_8px_35px_rgba(223,174,69,0.35)]
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_10px_45px_rgba(223,174,69,0.48)]
              active:scale-95
            "
          >
            {/* Outer Glow */}
            <span
              className="
                absolute
                inset-[-7px]
                -z-10
                rounded-full
                bg-[#DFAE45]/20
                blur-xl
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            {/* Shine */}
            <span
              className="
                absolute
                left-3
                top-2
                h-4
                w-7
                rotate-[-25deg]
                rounded-full
                bg-white/35
                blur-[3px]
              "
            />

            <div className="relative flex flex-col items-center justify-center">
              <span className="text-[27px] leading-none">🪔</span>

              <span
                className="
                  mt-1
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.08em]
                  text-[#171008]
                "
              >
                Book
              </span>
            </div>

            {/* Sparkle */}
            <span
              className="
                absolute
                -right-1
                top-0
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-[#07101A]
                bg-[#121C29]
                shadow-lg
              "
            >
              <Sparkles
                size={12}
                strokeWidth={2.5}
                className="text-[#F3C75F]"
              />
            </span>
          </Link>
        </div>
      </div>

      {/* =========================================================
          BOTTOM NAVIGATION
      ========================================================= */}

      <nav
        className="
          fixed
          bottom-0
          left-1/2
          z-50
          h-[78px]
          w-full
          max-w-[430px]
          -translate-x-1/2
          border-t
          border-white/[0.08]
          bg-[#07111D]/95
          shadow-[0_-12px_40px_rgba(0,0,0,0.35)]
          backdrop-blur-2xl
        "
      >
        {/* Top Gold Highlight */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-24
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#DFAE45]
            to-transparent
          "
        />

        {/* Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[-45px]
            left-1/2
            h-28
            w-56
            -translate-x-1/2
            rounded-full
            bg-[#DFAE45]/[0.06]
            blur-3xl
          "
        />

        <div className="relative mx-auto flex h-full items-center justify-around px-3">
          {/* HOME */}
          <NavItem
            href="/pooja"
            icon={<Home size={21} strokeWidth={2.2} />}
            title="Home"
            active
          />

          {/* CATEGORIES */}
          <NavItem
            href="/pooja/online"
            icon={<Grid2x2 size={21} strokeWidth={2.2} />}
            title="Categories"
          />

          {/* CENTER SPACE */}
          <div className="w-[76px] shrink-0" />

          {/* BOOKINGS */}
          <NavItem
            href="/pooja/bookings"
            icon={<CalendarDays size={21} strokeWidth={2.2} />}
            title="Bookings"
          />

          {/* PROFILE */}
          <NavItem
            href="/profile"
            icon={<User size={21} strokeWidth={2.2} />}
            title="Profile"
          />
        </div>
      </nav>
    </>
  );
}

/* =============================================================
   NAV ITEM
============================================================= */

function NavItem({
  href,
  icon,
  title,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        flex
        h-[62px]
        w-[72px]
        flex-col
        items-center
        justify-center
        gap-1
        rounded-2xl
        transition-all
        duration-300
        active:scale-90
      "
    >
      {/* Active Glow */}
      {active && (
        <span
          className="
            absolute
            top-0
            h-1
            w-8
            rounded-full
            bg-[#DFAE45]
            shadow-[0_0_12px_rgba(223,174,69,0.8)]
          "
        />
      )}

      {/* Icon Container */}
      <div
        className={`
          relative
          flex
          h-9
          w-11
          items-center
          justify-center
          rounded-xl
          transition-all
          duration-300
          ${
            active
              ? "bg-[#DFAE45]/[0.10] text-[#F3C75F]"
              : "text-slate-400 group-hover:bg-white/[0.04] group-hover:text-slate-200"
          }
        `}
      >
        {icon}

        {/* Active Dot */}
        {active && (
          <span
            className="
              absolute
              -right-0.5
              top-0
              h-1.5
              w-1.5
              rounded-full
              bg-[#F3C75F]
              shadow-[0_0_8px_rgba(243,199,95,0.9)]
            "
          />
        )}
      </div>

      {/* Label */}
      <span
        className={`
          text-[10px]
          font-semibold
          tracking-wide
          transition-colors
          duration-300
          ${
            active
              ? "text-[#F3C75F]"
              : "text-slate-500 group-hover:text-slate-300"
          }
        `}
      >
        {title}
      </span>
    </Link>
  );
}