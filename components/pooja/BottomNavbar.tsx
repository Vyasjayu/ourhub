"use client";

import {
  Home,
  Grid2x2,
  CalendarDays,
  User,
} from "lucide-react";

export default function BottomNavigation() {
  return (
    <>
      {/* Floating Center Button */}

      <div
        className="
        fixed
        bottom-9
        left-1/2
        -translate-x-1/2
        z-50
        "
      >
        <button
          className="
          w-20
          h-20
          rounded-full
          bg-[#1A1F27]
          border-4
          border-[#081018]
          shadow-[0_0_35px_rgba(255,180,40,0.25)]
          flex
          flex-col
          items-center
          justify-center
          "
        >
          <span className="text-3xl">🪔</span>

          <span className="text-[11px] text-yellow-400 font-semibold mt-1">
            Book
          </span>
        </button>
      </div>

      {/* Bottom Bar */}

      <nav
        className="
        fixed
        bottom-0
        left-1/2
        -translate-x-1/2
        w-full
        max-w-[430px]
        h-20
        bg-[#0C1623]
        border-t
        border-[#303C4D]
        flex
        justify-around
        items-center
        z-40
        "
      >
        <NavItem
          icon={<Home size={24} />}
          title="Home"
          active
        />

        <NavItem
          icon={<Grid2x2 size={24} />}
          title="Categories"
        />

        <div className="w-20"></div>

        <NavItem
          icon={<CalendarDays size={24} />}
          title="Bookings"
        />

        <NavItem
          icon={<User size={24} />}
          title="Profile"
        />

      </nav>
    </>
  );
}

function NavItem({
  icon,
  title,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
}) {
  return (
    <button
      className="
      flex
      flex-col
      items-center
      justify-center
      gap-1
      "
    >
      <div
        className={
          active
            ? "text-yellow-400"
            : "text-gray-400"
        }
      >
        {icon}
      </div>

      <span
        className={`text-[11px] ${
          active
            ? "text-yellow-400"
            : "text-gray-400"
        }`}
      >
        {title}
      </span>
    </button>
  );
}