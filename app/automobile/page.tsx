"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    title: "Car Service",
    image: "/images/automobile/car-service.jpg",
    description: "Complete car maintenance and repair services.",
  },
  {
    title: "Bike Service",
    image: "/images/automobile/bike-service.jpg",
    description: "Professional bike servicing and repairs.",
  },
  {
    title: "Car Wash",
    image: "/images/automobile/car-wash.jpg",
    description: "Premium exterior and interior car cleaning.",
  },
  {
    title: "Tyre Service",
    image: "/images/automobile/tyre.jpg",
    description: "Tyre replacement, balancing and alignment.",
  },
  {
    title: "Battery Service",
    image: "/images/automobile/battery.jpg",
    description: "Car and bike battery replacement.",
  },
  {
    title: "Accessories",
    image: "/images/automobile/accessories.jpg",
    description: "Premium vehicle accessories and upgrades.",
  },
  {
    title: "Roadside Assistance",
    image: "/images/automobile/roadside.jpg",
    description: "Emergency breakdown support anytime.",
  },
  {
    title: "Insurance",
    image: "/images/automobile/insurance.jpg",
    description: "Vehicle insurance and claim assistance.",
  },
];

export default function AutomobilePage() {
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
            <h1 className="text-xl font-bold">Automobile</h1>
            <p className="text-xs text-gray-400">
              Complete Vehicle Care Solutions
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 py-6">
        {/* Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 p-5 text-white shadow-lg">
          <h2 className="text-2xl font-bold">
            Automobile Services
          </h2>

          <p className="mt-2 text-sm">
            Car service, bike service, tyre replacement, battery support,
            roadside assistance, insurance and many more automobile services
            are coming soon on OurHub.
          </p>

          <span className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-600">
            🚗 Coming Soon
          </span>
        </div>

        {/* Services */}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          Popular Automobile Services
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

                <span className="mt-3 inline-block rounded-full bg-red-600 px-3 py-1 text-[11px] font-bold text-white">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="mt-8 rounded-2xl bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            Why Choose OurHub Automobile?
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>🚗 Verified Service Centers</li>
            <li>🔧 Expert Mechanics</li>
            <li>⚡ Fast & Reliable Service</li>
            <li>💳 Secure Online Booking</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 p-5 text-center">
          <h2 className="text-xl font-bold">
            More Automobile Services Coming Soon
          </h2>

          <p className="mt-2 text-sm text-red-100">
            We are building a trusted automobile platform where you can
            easily book vehicle services, repairs and maintenance.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-red-600">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}