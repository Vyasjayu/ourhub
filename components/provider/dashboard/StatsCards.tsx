"use client";

import {
  Wallet,
  CalendarDays,
  Star,
  Bell,
} from "lucide-react";

type Props = {
  earnings?: number;
  bookings?: number;
  rating?: number;
  notifications?: number;
};

export default function StatsCards({
  earnings = 0,
  bookings = 0,
  rating = 0,
  notifications = 0,
}: Props) {
  const cards = [
    {
      title: "Earnings",
      value: `₹${earnings}`,
      icon: Wallet,
    },
    {
      title: "Bookings",
      value: bookings,
      icon: CalendarDays,
    },
    {
      title: "Rating",
      value: rating.toFixed(1),
      icon: Star,
    },
    {
      title: "Notifications",
      value: notifications,
      icon: Bell,
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-2 gap-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              rounded-3xl
              border
              border-white/10
              bg-[#132234]
              p-5
              shadow-lg
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/20">
              <Icon
                size={24}
                className="text-yellow-400"
              />
            </div>

            <p className="mt-4 text-sm text-gray-400">
              {card.title}
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              {card.value}
            </h3>
          </div>
        );
      })}

    </div>
  );
}