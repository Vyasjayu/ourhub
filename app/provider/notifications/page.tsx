"use client";

import Link from "next/link";
import { ArrowLeft, Bell } from "lucide-react";

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-[#071424] text-white">

      <div className="mx-auto max-w-md px-5 py-6">

        <div className="flex items-center gap-4">

          <Link
            href="/provider/dashboard"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
          >
            <ArrowLeft size={22} />
          </Link>

          <h1 className="text-2xl font-bold">
            Notifications
          </h1>

        </div>

        <div className="mt-10 rounded-3xl bg-[#132234] p-8 text-center">

          <Bell
            size={60}
            className="mx-auto text-yellow-400"
          />

          <h2 className="mt-5 text-2xl font-bold">
            No Notifications
          </h2>

          <p className="mt-2 text-gray-400">
            New bookings, payments and updates
            will appear here.
          </p>

        </div>

      </div>

    </main>
  );
}