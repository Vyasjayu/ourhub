"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    title: "Hotels",
    image: "/images/travel/hotel.jpg",
    description: "Book affordable & luxury hotels.",
  },
  {
    title: "Flight Booking",
    image: "/images/travel/flight.jpg",
    description: "Domestic & international flights.",
  },
  {
    title: "Bus Booking",
    image: "/images/travel/bus.jpg",
    description: "Comfortable bus travel across India.",
  },
  {
    title: "Train Booking",
    image: "/images/travel/train.jpg",
    description: "Easy railway ticket booking.",
  },
  {
    title: "Cab Service",
    image: "/images/travel/cab.jpg",
    description: "Local & outstation cab services.",
  },
  {
    title: "Holiday Packages",
    image: "/images/travel/package.jpg",
    description: "Best family & honeymoon packages.",
  },
  {
    title: "Adventure Trips",
    image: "/images/travel/adventure.jpg",
    description: "Trekking, camping & adventure tours.",
  },
  {
    title: "Tour Guide",
    image: "/images/travel/guide.jpg",
    description: "Verified local travel guides.",
  },
];

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-4">
          <Link
            href="/"
            className="rounded-full bg-slate-800 p-2 hover:bg-slate-700"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-xl font-bold">Travel</h1>
            <p className="text-xs text-gray-400">
              Explore the World with Ease
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 py-6">
        {/* Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-700 p-5 text-white shadow-lg">
          <h2 className="text-2xl font-bold">
            Travel Services
          </h2>

          <p className="mt-2 text-sm">
            Hotels, Flights, Bus, Train, Cab, Holiday Packages and many more
            travel services are coming soon on OurHub.
          </p>

          <span className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700">
            ✈️ Coming Soon
          </span>
        </div>

        {/* Section */}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          Popular Travel Services
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-28 w-full object-cover"
              />

              <div className="p-3">
                <h3 className="text-sm font-semibold">
                  {service.title}
                </h3>

                <p className="mt-1 text-xs text-gray-400 line-clamp-2">
                  {service.description}
                </p>

                <span className="mt-3 inline-block rounded-full bg-sky-500 px-3 py-1 text-[11px] font-bold text-white">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="mt-8 rounded-2xl bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            Why Choose OurHub Travel?
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>✈️ Best Travel Deals</li>
            <li>🏨 Verified Hotels</li>
            <li>🚕 Easy Cab Booking</li>
            <li>💳 Secure Online Payments</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-700 p-5 text-center">
          <h2 className="text-xl font-bold">
            More Travel Services Coming Soon
          </h2>

          <p className="mt-2 text-sm text-blue-100">
            We are building a complete travel platform to make your journeys
            easier and more enjoyable.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-blue-700">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}