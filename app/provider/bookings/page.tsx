"use client";

import { ArrowLeft, CalendarDays } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProviderBookingsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#071424] text-white">

      <div className="mx-auto max-w-md px-4 py-5">

        {/* Header */}

        <div className="flex items-center gap-4">

          <button
            onClick={() => router.back()}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
          >
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-2xl font-bold">
            My Bookings
          </h1>

        </div>

        {/* Empty State */}

        <div className="mt-24 flex flex-col items-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400/20">

            <CalendarDays
              size={50}
              className="text-yellow-400"
            />

          </div>

          <h2 className="mt-8 text-2xl font-bold">
            No Bookings Yet
          </h2>

          <p className="mt-3 text-center text-gray-400">
            Customer bookings will appear here.
          </p>

        </div>

      </div>

    </main>
  );
}