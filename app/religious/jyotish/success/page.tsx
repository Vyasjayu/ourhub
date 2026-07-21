"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Download,
  Home,
  Share2,
} from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#071321] flex justify-center">

      <div className="w-full max-w-[430px] min-h-screen bg-[#071321] text-white">

        {/* Success */}

        <div className="px-6 pt-14 text-center">

          <CheckCircle2
            size={90}
            className="mx-auto text-green-500 animate-pulse"
          />

          <h1 className="text-3xl font-bold mt-6">
            Booking Confirmed 🎉
          </h1>

          <p className="text-gray-400 mt-3 leading-7">
            Your booking has been confirmed successfully.
            Our team will contact you shortly.
          </p>

        </div>

        {/* Booking ID */}

        <div className="px-4 mt-8">

          <div className="bg-[#0d1b2a] rounded-3xl border border-white/10 p-5">

            <div className="flex justify-between">

              <span className="text-gray-400">
                Booking ID
              </span>

              <span className="font-bold text-[#D4AF37]">
                #OH202600145
              </span>

            </div>

          </div>

        </div>

        {/* Booking Details */}

        <div className="px-4 mt-6">

          <h2 className="text-lg font-bold mb-4">

            Booking Details

          </h2>

          <div className="bg-[#0d1b2a] rounded-3xl border border-white/10 p-5 space-y-5">

            <div className="flex items-center gap-3">

              <User className="text-[#D4AF37]" />

              <div>

                <p className="text-gray-400 text-sm">

                  Vedic Astrologer

                </p>

                <h3 className="font-semibold">

                  Acharya Rahul Sharma

                </h3>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Calendar className="text-[#D4AF37]" />

              <div>

                <p className="text-gray-400 text-sm">

                  Date

                </p>

                <h3>

                  24 July 2026

                </h3>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Clock className="text-[#D4AF37]" />

              <div>

                <p className="text-gray-400 text-sm">

                  Time

                </p>

                <h3>

                  10:00 AM

                </h3>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <MapPin className="text-[#D4AF37]" />

              <div>

                <p className="text-gray-400 text-sm">

                  Address

                </p>

                <h3>

                  Vijay Nagar, Indore

                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="px-4 mt-8 space-y-4">

          <button className="w-full h-14 rounded-2xl bg-[#D4AF37] text-[#071321] font-bold flex items-center justify-center gap-3">

            <Phone size={20} />

            Call Pandit

          </button>

          <button className="w-full h-14 rounded-2xl bg-[#0d1b2a] border border-white/10 flex items-center justify-center gap-3">

            <Download size={20} />

            Download Invoice

          </button>

          <button className="w-full h-14 rounded-2xl bg-[#0d1b2a] border border-white/10 flex items-center justify-center gap-3">

            <Share2 size={20} />

            Share Booking

          </button>

          <Link
            href="/"
            className="w-full h-14 rounded-2xl border border-[#D4AF37] text-[#D4AF37] font-bold flex items-center justify-center gap-3"
          >

            <Home size={20} />

            Back to Home

          </Link>

        </div>

        {/* Support */}

        <div className="px-4 mt-10 mb-10">

          <div className="bg-[#0d1b2a] rounded-3xl border border-white/10 p-5">

            <h3 className="font-bold text-lg">

              Need Help?

            </h3>

            <p className="text-gray-400 mt-2 leading-7">

              If you have any questions regarding your booking,
              please contact OurHub Support.

            </p>

            <button className="mt-5 w-full h-12 rounded-xl bg-green-600 font-semibold">

              Contact Support

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}