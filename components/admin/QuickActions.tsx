"use client";

import { useRouter } from "next/navigation";
import {
  Users,
  CalendarDays,
  Wallet,
  BadgeCheck,
  Star,
  Settings,
  ChevronRight,
} from "lucide-react";

export default function QuickActions() {
  const router = useRouter();

  const actions = [
    {
      title: "All Providers",
      subtitle: "View & Manage Providers",
      icon: <Users size={22} />,
      route: "/admin/providers",
    },
    {
      title: "Bookings",
      subtitle: "Manage Customer Bookings",
      icon: <CalendarDays size={22} />,
      route: "/admin/bookings",
    },
    {
      title: "Wallet",
      subtitle: "Payments & Earnings",
      icon: <Wallet size={22} />,
      route: "/admin/wallet",
    },
    {
      title: "Verification",
      subtitle: "Approve Providers",
      icon: <BadgeCheck size={22} />,
      route: "/admin/verification",
    },
    {
      title: "Reviews",
      subtitle: "Ratings & Reviews",
      icon: <Star size={22} />,
      route: "/admin/reviews",
    },
    {
      title: "Settings",
      subtitle: "Website Settings",
      icon: <Settings size={22} />,
      route: "/admin/settings",
    },
  ];

  return (
    <div className="mt-7">

      <h2 className="mb-4 text-xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="space-y-3">

        {actions.map((item, index) => (

          <button
            key={index}
            onClick={() => router.push(item.route)}
            className="flex w-full items-center justify-between rounded-3xl bg-[#132234] p-5 transition hover:bg-[#1a3048]"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-yellow-400/20 p-3 text-yellow-400">
                {item.icon}
              </div>

              <div className="text-left">

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.subtitle}
                </p>

              </div>

            </div>

            <ChevronRight className="text-gray-400" />

          </button>

        ))}

      </div>

    </div>
  );
}