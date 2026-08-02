"use client";

import {
  Users,
  UserCheck,
  CalendarCheck,
  Clock3,
} from "lucide-react";

type Props = {
  stats: {
    totalProviders: number;
    totalCustomers: number;
    totalBookings: number;
    pendingProviders: number;
  };
};

export default function DashboardCards({ stats }: Props) {
  const cards = [
    {
      title: "Providers",
      value: stats.totalProviders,
      icon: <Users size={26} />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Customers",
      value: stats.totalCustomers,
      icon: <UserCheck size={26} />,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "Bookings",
      value: stats.totalBookings,
      icon: <CalendarCheck size={26} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Pending",
      value: stats.pendingProviders,
      icon: <Clock3 size={26} />,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <section className="mt-6">

      <h2 className="mb-4 text-xl font-bold text-white">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {cards.map((card, index) => (

          <div
            key={index}
            className="
              rounded-3xl
              bg-[#132234]
              border
              border-white/5
              p-5
              shadow-lg
            "
          >

            <div
              className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                ${card.bg}
                ${card.color}
              `}
            >
              {card.icon}
            </div>

            <p className="mt-5 text-sm text-gray-400">
              {card.title}
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              {card.value}
            </h3>

          </div>

        ))}

      </div>

      {/* Extra Analytics */}

      <div className="mt-6 rounded-3xl bg-[#132234] p-5">

        <h3 className="text-lg font-bold text-white">
          Analytics
        </h3>

        <div className="mt-5 space-y-5">

          <div>

            <div className="mb-2 flex justify-between">

              <span className="text-sm text-gray-400">
                Provider Verification
              </span>

              <span className="text-yellow-400">
                {stats.pendingProviders}
              </span>

            </div>

            <div className="h-2 rounded-full bg-[#1c3149]">

              <div
                className="h-2 rounded-full bg-yellow-400"
                style={{
                  width:
                    stats.totalProviders === 0
                      ? "0%"
                      : `${
                          ((stats.totalProviders -
                            stats.pendingProviders) /
                            stats.totalProviders) *
                          100
                        }%`,
                }}
              />

            </div>

          </div>

          <div>

            <div className="mb-2 flex justify-between">

              <span className="text-sm text-gray-400">
                Booking Progress
              </span>

              <span className="text-green-400">
                {stats.totalBookings}
              </span>

            </div>

            <div className="h-2 rounded-full bg-[#1c3149]">

              <div
                className="h-2 rounded-full bg-green-400"
                style={{
                  width:
                    stats.totalBookings > 100
                      ? "100%"
                      : `${stats.totalBookings}%`,
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}