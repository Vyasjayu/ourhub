"use client";

import {
  CalendarDays,
  Grid2X2,
  Home,
  UserRound,
  WalletCards,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const items = [
  {
    label: "Home",
    icon: Home,
    path: "/offline-pooja",
  },
  {
    label: "Categories",
    icon: Grid2X2,
    path: "/offline-pooja/poojas",
  },
  {
    label: "Bookings",
    icon: CalendarDays,
    path: "/offline-pooja/bookings",
  },
  {
    label: "Wallet",
    icon: WalletCards,
    path: "/wallet",
  },
  {
    label: "Profile",
    icon: UserRound,
    path: "/profile",
  },
];

export default function OfflineBottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[480px] -translate-x-1/2 border-t border-white/5 bg-[#080e14]/95 px-2 pb-2 pt-3 backdrop-blur-xl">
      <div className="grid grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.path ||
            (item.path === "/offline-pooja" &&
              pathname === "/offline-pooja/");

          return (
            <button
              key={item.label}
              onClick={() => router.push(item.path)}
              className="flex flex-col items-center gap-1"
            >
              <Icon
                size={21}
                strokeWidth={active ? 2.5 : 1.7}
                className={
                  active
                    ? "text-yellow-400"
                    : "text-gray-400"
                }
              />

              <span
                className={`text-[9px] ${
                  active
                    ? "font-semibold text-yellow-400"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}