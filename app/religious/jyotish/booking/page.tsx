"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Video,
  MessageCircle,
  Calendar,
  Clock,
  User,
  MapPin,
  FileText,
} from "lucide-react";

const consultationTypes = [
  {
    id: "call",
    title: "Phone Call",
    icon: Phone,
    price: 399,
  },
  {
    id: "video",
    title: "Video Call",
    icon: Video,
    price: 499,
  },
  {
    id: "chat",
    title: "Chat",
    icon: MessageCircle,
    price: 299,
  },
];

const slots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function JyotishBookingPage() {

  const [type, setType] = useState("video");
  const [slot, setSlot] = useState("10:00 AM");

  return (

    <main className="min-h-screen bg-[#071321] flex justify-center">

      <div className="w-full max-w-[430px] bg-[#071321] text-white min-h-screen pb-28">

        {/* Header */}

        <header className="sticky top-0 z-50 h-16 bg-[#081423] border-b border-white/10 flex items-center px-4">

          <Link href="/religious/jyotish/1">
            <ArrowLeft />
          </Link>

          <h1 className="ml-4 text-xl font-bold">
            Book Consultation
          </h1>

        </header>

        {/* Consultation */}

        <section className="px-4 mt-6">

          <h2 className="font-bold text-xl mb-4">

            Consultation Type

          </h2>

          <div className="space-y-4">

            {consultationTypes.map((item) => {

              const Icon = item.icon;

              return (

                <button
                  key={item.id}
                  onClick={() => setType(item.id)}
                  className={`w-full rounded-2xl p-4 flex justify-between items-center border transition ${
                    type === item.id
                      ? "border-[#D4AF37] bg-[#D4AF37]/10"
                      : "border-white/10 bg-[#0d1b2a]"
                  }`}
                >

                  <div className="flex items-center gap-4">

                    <Icon className="text-[#D4AF37]" />

                    <div className="text-left">

                      <h3 className="font-semibold">

                        {item.title}

                      </h3>

                      <p className="text-sm text-gray-400">

                        ₹{item.price}

                      </p>

                    </div>

                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border-2 ${
                      type === item.id
                        ? "bg-[#D4AF37] border-[#D4AF37]"
                        : "border-gray-500"
                    }`}
                  />

                </button>

              );

            })}

          </div>

        </section>

        {/* Date */}

        <section className="px-4 mt-8">

          <h2 className="font-bold text-xl mb-4">

            Select Date

          </h2>

          <div className="h-14 rounded-2xl bg-[#0d1b2a] flex items-center px-4">

            <Calendar className="text-[#D4AF37]" />

            <input
              type="date"
              className="ml-3 bg-transparent flex-1 outline-none"
            />

          </div>

        </section>

        {/* Time */}

        <section className="px-4 mt-8">

          <h2 className="font-bold text-xl mb-4">

            Select Time

          </h2>

          <div className="grid grid-cols-2 gap-3">

            {slots.map((time) => (

              <button
                key={time}
                onClick={() => setSlot(time)}
                className={`h-12 rounded-xl ${
                  slot === time
                    ? "bg-[#D4AF37] text-[#071321]"
                    : "bg-[#0d1b2a]"
                }`}
              >

                <Clock className="inline mr-2" size={16} />

                {time}

              </button>

            ))}

          </div>

        </section>

        {/* Birth Details */}

        <section className="px-4 mt-8">

          <h2 className="font-bold text-xl mb-4">

            Birth Details

          </h2>

          <div className="space-y-4">

            <div className="h-14 rounded-2xl bg-[#0d1b2a] flex items-center px-4">

              <User className="text-[#D4AF37]" />

              <input
                placeholder="Full Name"
                className="flex-1 ml-3 bg-transparent outline-none"
              />

            </div>

            <div className="h-14 rounded-2xl bg-[#0d1b2a] flex items-center px-4">

              <Calendar className="text-[#D4AF37]" />

              <input
                type="date"
                className="flex-1 ml-3 bg-transparent outline-none"
              />

            </div>

            <div className="h-14 rounded-2xl bg-[#0d1b2a] flex items-center px-4">

              <Clock className="text-[#D4AF37]" />

              <input
                type="time"
                className="flex-1 ml-3 bg-transparent outline-none"
              />

            </div>

            <div className="h-14 rounded-2xl bg-[#0d1b2a] flex items-center px-4">

              <MapPin className="text-[#D4AF37]" />

              <input
                placeholder="Birth Place"
                className="flex-1 ml-3 bg-transparent outline-none"
              />

            </div>

            <textarea
              rows={5}
              placeholder="Write your question..."
              className="w-full rounded-2xl bg-[#0d1b2a] p-4 outline-none resize-none"
            />

          </div>

        </section>

        {/* Bottom */}

        <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-[#071321]/95 backdrop-blur">

          <div className="w-full max-w-[430px] p-4">

            <Link
              href="/religious/jyotish/checkout"
              className="h-14 rounded-2xl bg-[#D4AF37] text-[#071321] font-bold flex items-center justify-center gap-2"
            >

              <FileText size={20} />

              Continue

            </Link>

          </div>

        </div>

      </div>

    </main>

  );

}