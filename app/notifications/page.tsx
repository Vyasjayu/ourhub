"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Bell,
  CalendarDays,
  Gift,
  CheckCircle,
} from "lucide-react";

export default function NotificationsPage() {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      title: "Booking Confirmed",
      message: "Your Pandit booking has been confirmed successfully.",
      time: "10 min ago",
      icon: <CheckCircle size={22} className="text-green-400" />,
      bg: "bg-green-500/10",
    },
    {
      id: 2,
      title: "Special Offer",
      message: "Get 20% OFF on Astrology Consultation.",
      time: "2 hours ago",
      icon: <Gift size={22} className="text-yellow-400" />,
      bg: "bg-yellow-500/10",
    },
    {
      id: 3,
      title: "Upcoming Booking",
      message: "Your Home Pooja is scheduled for tomorrow at 10:00 AM.",
      time: "Yesterday",
      icon: <CalendarDays size={22} className="text-blue-400" />,
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <main className="min-h-screen bg-[#071424] pb-10 text-white">

      {/* Header */}

      <div className="sticky top-0 z-20 border-b border-white/10 bg-[#071424]/95 backdrop-blur">

        <div className="mx-auto flex max-w-md items-center gap-4 px-5 py-5">

          <button
            onClick={() => router.back()}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
          >
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-2xl font-bold">
            Notifications
          </h1>

        </div>

      </div>

      <div className="mx-auto max-w-md px-5">

        {/* Notification Count */}

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-[#13233C] p-5">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10">

              <Bell
                size={30}
                className="text-yellow-400"
              />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                Notifications
              </h2>

              <p className="text-sm text-gray-400">
                {notifications.length} New Notifications
              </p>

            </div>

          </div>

        </div>

        {/* Notification List */}

        <div className="mt-6 space-y-4">

          {notifications.map((item) => (

            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-[#13233C] p-4 transition hover:border-yellow-400"
            >

              <div className="flex gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  {item.icon}
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <span className="text-xs text-gray-500">
                      {item.time}
                    </span>

                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.message}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Clear Button */}

        <button
          className="mt-8 h-14 w-full rounded-2xl border border-red-500 bg-red-500/10 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Clear All Notifications
        </button>

      </div>

    </main>
  );
}