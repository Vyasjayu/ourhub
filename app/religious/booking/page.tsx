"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  FileText,
} from "lucide-react";

const dates = [
  "Today",
  "Tomorrow",
  "24 Jul",
  "25 Jul",
  "26 Jul",
  "27 Jul",
];

const slots = [
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
];

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedSlot, setSelectedSlot] = useState("");

  return (
    <main className="min-h-screen bg-[#071321] flex justify-center">

      <div className="w-full max-w-[430px] bg-[#071321] text-white min-h-screen pb-32">

        {/* Header */}

        <header className="sticky top-0 z-50 h-16 bg-[#081423] border-b border-white/10 flex items-center px-4">

          <Link href="/religious/pandit-booking/1">

            <ArrowLeft />

          </Link>

          <h1 className="ml-4 text-xl font-bold">

            Select Date & Time

          </h1>

        </header>

        {/* Date */}

        <div className="px-4 mt-6">

          <div className="flex items-center gap-2 mb-4">

            <Calendar className="text-[#D4AF37]" />

            <h2 className="font-bold text-lg">

              Choose Date

            </h2>

          </div>

          <div className="flex gap-3 overflow-x-auto">

            {dates.map((date) => (

              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`min-w-[90px] h-14 rounded-xl border transition ${
                  selectedDate === date
                    ? "bg-[#D4AF37] text-[#071321] border-[#D4AF37]"
                    : "bg-[#0d1b2a] border-white/10"
                }`}
              >
                {date}
              </button>

            ))}

          </div>

        </div>

        {/* Time */}

        <div className="px-4 mt-8">

          <div className="flex items-center gap-2 mb-4">

            <Clock className="text-[#D4AF37]" />

            <h2 className="font-bold text-lg">

              Select Time

            </h2>

          </div>

          <div className="grid grid-cols-3 gap-3">

            {slots.map((slot) => (

              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`h-12 rounded-xl border text-sm transition ${
                  selectedSlot === slot
                    ? "bg-[#D4AF37] text-[#071321] border-[#D4AF37]"
                    : "bg-[#0d1b2a] border-white/10"
                }`}
              >
                {slot}
              </button>

            ))}

          </div>

        </div>

        {/* Address */}

        <div className="px-4 mt-8">

          <div className="flex items-center gap-2 mb-3">

            <MapPin className="text-[#D4AF37]" />

            <h2 className="font-bold text-lg">

              Service Address

            </h2>

          </div>

          <textarea
            rows={4}
            placeholder="Enter complete address..."
            className="w-full rounded-2xl bg-[#0d1b2a] border border-white/10 p-4 outline-none resize-none"
          />

        </div>

        {/* Notes */}

        <div className="px-4 mt-8">

          <div className="flex items-center gap-2 mb-3">

            <FileText className="text-[#D4AF37]" />

            <h2 className="font-bold text-lg">

              Special Instructions

            </h2>

          </div>

          <textarea
            rows={4}
            placeholder="Write any additional information..."
            className="w-full rounded-2xl bg-[#0d1b2a] border border-white/10 p-4 outline-none resize-none"
          />

        </div>

        {/* Bottom */}

        <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-[#071321]/95 backdrop-blur">

          <div className="w-full max-w-[430px] p-4">

            <Link
              href="/religious/checkout"
              className="h-14 rounded-2xl bg-[#D4AF37] text-[#071321] font-bold flex items-center justify-center"
            >
              Continue to Payment →
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}