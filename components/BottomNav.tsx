
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  House,
  Grid2X2,
  CalendarDays,
  User,
  Info,
} from "lucide-react";

interface BottomNavProps {
  onCategoriesClick?: () => void;
}

export default function BottomNav({
  onCategoriesClick,
}: BottomNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  /* =========================================================
     PROFILE LOGIN CHECK
  ========================================================= */

  async function handleProfileClick() {
    try {
      const res = await fetch("/api/user/me", {
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        router.push("/profile");
      } else {
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Profile check failed:", error);
      router.push("/auth/login");
    }
  }

  /* =========================================================
     ACTIVE CHECK
  ========================================================= */

  const isActive = (path: string) => {
    return pathname === path;
  };

  /* =========================================================
     NAV ITEM
  ========================================================= */

  const navItemClass = (active: boolean) =>
    `
      group
      relative
      flex
      min-w-0
      flex-1
      flex-col
      items-center
      justify-center
      rounded-2xl
      px-1
      py-1.5
      transition-all
      duration-200
      active:scale-95
      ${
        active
          ? "text-yellow-400"
          : "text-slate-500 hover:text-slate-300"
      }
    `;

  return (
    <nav
      className="
        fixed
        bottom-3
        left-1/2
        z-[999]
        w-[calc(100%-24px)]
        max-w-[430px]
        -translate-x-1/2
      "
    >

      {/* =====================================================
          OUTER GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-2
          rounded-[32px]
          bg-yellow-400/[0.04]
          blur-xl
        "
      />

      {/* =====================================================
          NAV BAR
      ===================================================== */}

      <div
        className="
          relative
          flex
          items-center
          justify-between

          rounded-[26px]

          border
          border-white/[0.09]

          bg-[#090b0f]/95

          px-2
          py-2

          shadow-[0_15px_50px_rgba(0,0,0,0.65)]

          backdrop-blur-2xl
        "
      >

        {/* ===================================================
            TOP GOLD LINE
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[18%]
            right-[18%]
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-yellow-400/30
            to-transparent
          "
        />

        {/* ===================================================
            HOME
        =================================================== */}

        <Link
          href="/"
          className={navItemClass(
            isActive("/")
          )}
        >

          {/* Active Background */}

          {isActive("/") && (
            <div
              className="
                absolute
                inset-x-2
                inset-y-0
                -z-0
                rounded-2xl
                bg-yellow-400/[0.09]
                shadow-[0_0_20px_rgba(250,204,21,0.05)]
              "
            />
          )}

          {/* Icon */}

          <div
            className={`
              relative
              flex
              h-8
              w-10
              items-center
              justify-center
              rounded-xl
              transition-all
              duration-200

              ${
                isActive("/")
                  ? "text-yellow-400"
                  : "text-slate-500 group-hover:text-slate-300"
              }
            `}
          >
            <House
              size={21}
              strokeWidth={
                isActive("/") ? 2.4 : 1.9
              }
            />

            {/* Active Dot */}

            {isActive("/") && (
              <span
                className="
                  absolute
                  -bottom-0.5
                  h-1
                  w-1
                  rounded-full
                  bg-yellow-400
                  shadow-[0_0_8px_rgba(250,204,21,0.8)]
                "
              />
            )}
          </div>

          <span
            className={`
              relative
              mt-0.5
              text-[10px]
              ${
                isActive("/")
                  ? "font-bold text-yellow-400"
                  : "font-medium text-slate-500"
              }
            `}
          >
            Home
          </span>

        </Link>

        {/* ===================================================
            CATEGORIES
        =================================================== */}

        <button
          type="button"
          onClick={() =>
            onCategoriesClick?.()
          }
          className={navItemClass(false)}
        >

          <div
            className="
              flex
              h-8
              w-10
              items-center
              justify-center
              rounded-xl
              text-slate-500
              transition-all
              duration-200
              group-hover:text-slate-300
            "
          >
            <Grid2X2
              size={21}
              strokeWidth={1.9}
            />
          </div>

          <span
            className="
              mt-0.5
              text-[10px]
              font-medium
              text-slate-500
            "
          >
            Categories
          </span>

        </button>

        {/* ===================================================
            BOOKINGS
        =================================================== */}

        <Link
          href="/bookings"
          className={navItemClass(
            isActive("/bookings")
          )}
        >

          {isActive("/bookings") && (
            <div
              className="
                absolute
                inset-x-2
                inset-y-0
                -z-0
                rounded-2xl
                bg-yellow-400/[0.09]
                shadow-[0_0_20px_rgba(250,204,21,0.05)]
              "
            />
          )}

          <div
            className={`
              relative
              flex
              h-8
              w-10
              items-center
              justify-center
              rounded-xl
              transition-all

              ${
                isActive("/bookings")
                  ? "text-yellow-400"
                  : "text-slate-500 group-hover:text-slate-300"
              }
            `}
          >
            <CalendarDays
              size={21}
              strokeWidth={
                isActive("/bookings")
                  ? 2.4
                  : 1.9
              }
            />

            {isActive("/bookings") && (
              <span
                className="
                  absolute
                  -bottom-0.5
                  h-1
                  w-1
                  rounded-full
                  bg-yellow-400
                  shadow-[0_0_8px_rgba(250,204,21,0.8)]
                "
              />
            )}
          </div>

          <span
            className={`
              relative
              mt-0.5
              text-[10px]
              ${
                isActive("/bookings")
                  ? "font-bold text-yellow-400"
                  : "font-medium text-slate-500"
              }
            `}
          >
            Bookings
          </span>

        </Link>

        {/* ===================================================
            ABOUT
        =================================================== */}

        <Link
          href="/about"
          className={navItemClass(
            isActive("/about")
          )}
        >

          {isActive("/about") && (
            <div
              className="
                absolute
                inset-x-2
                inset-y-0
                -z-0
                rounded-2xl
                bg-yellow-400/[0.09]
                shadow-[0_0_20px_rgba(250,204,21,0.05)]
              "
            />
          )}

          <div
            className={`
              relative
              flex
              h-8
              w-10
              items-center
              justify-center
              rounded-xl

              ${
                isActive("/about")
                  ? "text-yellow-400"
                  : "text-slate-500 group-hover:text-slate-300"
              }
            `}
          >
            <Info
              size={21}
              strokeWidth={
                isActive("/about")
                  ? 2.4
                  : 1.9
              }
            />

            {isActive("/about") && (
              <span
                className="
                  absolute
                  -bottom-0.5
                  h-1
                  w-1
                  rounded-full
                  bg-yellow-400
                  shadow-[0_0_8px_rgba(250,204,21,0.8)]
                "
              />
            )}
          </div>

          <span
            className={`
              relative
              mt-0.5
              text-[10px]
              ${
                isActive("/about")
                  ? "font-bold text-yellow-400"
                  : "font-medium text-slate-500"
              }
            `}
          >
            About
          </span>

        </Link>

        {/* ===================================================
            PROFILE
        =================================================== */}

        <button
          type="button"
          onClick={handleProfileClick}
          className={navItemClass(
            isActive("/profile")
          )}
        >

          {isActive("/profile") && (
            <div
              className="
                absolute
                inset-x-2
                inset-y-0
                -z-0
                rounded-2xl
                bg-yellow-400/[0.09]
                shadow-[0_0_20px_rgba(250,204,21,0.05)]
              "
            />
          )}

          <div
            className={`
              relative
              flex
              h-8
              w-10
              items-center
              justify-center
              rounded-xl

              ${
                isActive("/profile")
                  ? "text-yellow-400"
                  : "text-slate-500 group-hover:text-slate-300"
              }
            `}
          >
            <User
              size={21}
              strokeWidth={
                isActive("/profile")
                  ? 2.4
                  : 1.9
              }
            />

            {isActive("/profile") && (
              <span
                className="
                  absolute
                  -bottom-0.5
                  h-1
                  w-1
                  rounded-full
                  bg-yellow-400
                  shadow-[0_0_8px_rgba(250,204,21,0.8)]
                "
              />
            )}
          </div>

          <span
            className={`
              relative
              mt-0.5
              text-[10px]
              ${
                isActive("/profile")
                  ? "font-bold text-yellow-400"
                  : "font-medium text-slate-500"
              }
            `}
          >
            Profile
          </span>

        </button>

      </div>

    </nav>
  );
}

