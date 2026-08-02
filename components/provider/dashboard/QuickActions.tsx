"use client";

import { useRouter } from "next/navigation";
import {
  User,
  CalendarDays,
  Wallet,
  FileText,
  Bell,
  Star,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function QuickActions() {
  const router = useRouter();

  const actions = [
    {
      title: "Edit Profile",
      icon: User,
      onClick: () => router.push("/provider/profile"),
    },
    {
      title: "Bookings",
      icon: CalendarDays,
      onClick: () => router.push("/provider/bookings"),
    },
    {
      title: "Wallet",
      icon: Wallet,
      onClick: () => router.push("/provider/wallet"),
    },
    {
      title: "Documents",
      icon: FileText,
      onClick: () => router.push("/provider/documents"),
    },
    {
      title: "Reviews & Ratings",
      icon: Star,
      onClick: () => router.push("/provider/reviews"),
    },
    {
      title: "Notifications",
      icon: Bell,
      onClick: () => router.push("/provider/notifications"),
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("providerMobile");

    router.replace("/provider/login");
  };

  return (
    <div className="mt-8">

      <h2 className="mb-4 text-xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="space-y-3">

        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={item.onClick}
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-[#132234]
                px-5
                py-4
                transition
                hover:bg-[#1d3148]
              "
            >
              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-yellow-400/20
                  "
                >
                  <Icon
                    size={22}
                    className="text-yellow-400"
                  />
                </div>

                <span className="font-medium text-white">
                  {item.title}
                </span>

              </div>

              <ChevronRight
                size={20}
                className="text-gray-400"
              />
            </button>
          );
        })}

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-red-500/40
            bg-red-500/10
            py-4
            font-semibold
            text-red-400
            transition
            hover:bg-red-500/20
          "
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </div>
  );
}