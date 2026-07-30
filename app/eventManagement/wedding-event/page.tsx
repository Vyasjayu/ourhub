"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Clock,
  MapPin,
  CheckCircle,
  CalendarDays,
  Phone,
} from "lucide-react";

export default function WeddingPlanningPage() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-yellow-500/20 bg-[#071321]/90 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-4">
          <Link
            href="/event-management"
            className="rounded-full border border-yellow-500/20 bg-white/5 p-2"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-lg font-bold">
              Wedding Planning
            </h1>
            <p className="text-xs text-slate-400">
              Premium Wedding Management
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 pb-24">
        {/* Hero Image */}
        <div className="mt-4 overflow-hidden rounded-3xl">
          <Image
            src="/images/events/wedding.jpg"
            alt="Wedding Planning"
            width={700}
            height={450}
            priority
            className="h-64 w-full object-cover"
          />
        </div>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-sm text-yellow-400">
            <Star
              size={15}
              className="fill-yellow-400 text-yellow-400"
            />
            4.9 Rating
          </div>

          <div className="flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
            <Clock size={15} />
            Full Day
          </div>
        </div>

        {/* Price */}
        <div className="mt-5">
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-[#D4AF37]">
              ₹24,999
            </span>

            <span className="pb-1 text-slate-500 line-through">
              ₹34,999
            </span>

            <span className="rounded-full bg-green-600 px-2 py-1 text-xs font-bold">
              30% OFF
            </span>
          </div>
        </div>

        {/* About */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            About Wedding Planning
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Make your dream wedding memorable with OurHub's professional
            wedding planners. From venue selection and decoration to
            catering, photography and entertainment, our experienced
            team manages every detail so you can enjoy your special day
            stress-free.
          </p>
        </div>

        {/* Services Included */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            What's Included
          </h2>

          <div className="mt-4 space-y-3">
            {[
              "Venue Booking",
              "Wedding Decoration",
              "Photography & Videography",
              "Catering Services",
              "DJ & Entertainment",
              "Bridal Makeup",
              "Guest Management",
              "Luxury Car Arrangement",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle
                  size={18}
                  className="text-green-400"
                />

                <span className="text-sm text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            Service Details
          </h2>

          <div className="mt-5 space-y-4">

            <div className="flex items-center gap-3">
              <CalendarDays
                size={20}
                className="text-[#D4AF37]"
              />

              <div>
                <p className="text-sm font-semibold">
                  Available
                </p>

                <p className="text-xs text-slate-400">
                  7 Days a Week
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin
                size={20}
                className="text-[#D4AF37]"
              />

              <div>
                <p className="text-sm font-semibold">
                  Service Area
                </p>

                <p className="text-xs text-slate-400">
                  Available Across India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock
                size={20}
                className="text-[#D4AF37]"
              />

              <div>
                <p className="text-sm font-semibold">
                  Planning Duration
                </p>

                <p className="text-xs text-slate-400">
                  Flexible as per Event
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Why Choose */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            Why Choose OurHub?
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>✅ Verified Wedding Planners</li>
            <li>✅ Affordable Packages</li>
            <li>✅ Professional Team</li>
            <li>✅ Premium Decorations</li>
            <li>✅ 24×7 Customer Support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-300 py-4 font-bold text-black shadow-lg">
            <Phone size={20} />
            Book Wedding Planner
          </button>
        </div>
      </div>
    </main>
  );
}